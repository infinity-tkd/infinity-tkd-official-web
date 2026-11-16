/**
 * Reads ONE blog post (front matter + Markdown) into the typed shape the pages use.
 *
 * Pure: no files, no Next.js. `lib/blog.ts` finds the files and caches the results; `npm run check:data` and the unit
 * tests call this same code, so what the build checks is exactly what the site does.
 *
 * A post is content, not code, and it is read as untrusted text:
 *   - front matter is YAML (or JSON). JavaScript front matter ("---js") is REFUSED. gray-matter would otherwise run it
 *     with eval() while the site is built, giving any post file the power to run code on the build machine;
 *   - a file over 300 KB is skipped, and the patterns here only read one short line at a time, so no text can make them slow;
 *   - nothing in a post is ever inserted as HTML: titles and descriptions are text, the body goes through the Markdown
 *     renderer (components/blog/MarkdownContent.tsx), which has no raw HTML.
 */
import matter from 'gray-matter'
import { markdocTablesToGfm } from '@/lib/markdocTables'

export const DEFAULT_AUTHOR = 'Infinity Taekwondo Coaching Team'
const WORDS_PER_MINUTE = 200

/** The biggest post file we read (300 KB is about 50,000 words). A normal article is a few KB. */
export const MAX_POST_CHARACTERS = 300_000
/** Heading lines longer than this are ignored (and never reach the table of contents). */
const MAX_HEADING_LINE = 400
/** The link audit skips lines longer than this (a real line of text is a few hundred characters). */
const MAX_SCANNED_LINE = 5000

export interface BlogHeading {
  id: string
  text: string
  level: 2 | 3
}

/** Every field a post's front matter may have. The content editor (lib/keystatic/blog.tsx) offers exactly these; a test keeps the two lists equal. */
export const BLOG_FIELDS = [
  'title',
  'description',
  'date',
  'updated',
  'author',
  'category',
  'tags',
  'cover',
  'coverAlt',
  'coverCaption',
  'featured',
  'draft',
  'unlisted',
  'tableOfContents',
  'related',
  'seoTitle',
  'seoDescription',
  'socialImage',
] as const

export const TABLE_OF_CONTENTS_MODES = ['auto', 'show', 'hide'] as const
export type TableOfContentsMode = (typeof TABLE_OF_CONTENTS_MODES)[number]

/** The most posts a post can suggest by hand under "Keep reading". */
export const MAX_RELATED_POSTS = 3

export interface BlogPostMeta {
  slug: string
  title: string
  description: string
  /** ISO date (YYYY-MM-DD) */
  date: string
  updated?: string
  author: string
  category: string
  categorySlug: string
  tags: string[]
  cover?: { src: string; alt: string; caption?: string }
  featured: boolean
  /** Kept out of the blog list, categories, sitemap, feed and "keep reading"; still reachable by its link (and not indexed). */
  unlisted: boolean
  /** auto: shown from 3 headings up; show: from 1; hide: never. */
  tableOfContents: TableOfContentsMode
  /** Slugs of posts chosen by hand for "Keep reading". */
  related: string[]
  /** Replace the page title and description search engines and link previews see. */
  seoTitle?: string
  seoDescription?: string
  /** The picture link previews show instead of the cover. */
  socialImage?: string
  readingMinutes: number
}

export interface BlogPost extends BlogPostMeta {
  content: string
  headings: BlogHeading[]
}

export interface BlogCategory {
  name: string
  slug: string
  count: number
}

/** URL-safe slug. Shared by heading ids, the table of contents, category routes and post file names. */
export function slugify(input: string): string {
  return input
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9ក-៿぀-ヿ㐀-鿿가-힯]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

/** Ids the page itself uses. A heading with the same name must not take them over (it would break skip links and labels). */
const RESERVED_IDS = new Set(['main-content', 'related-heading', 'root'])

/** The anchor id of a heading: its slug, moved out of the way when it would clash with an id the page uses. */
export function headingId(text: string): string {
  const id = slugify(text)
  return RESERVED_IDS.has(id) || id.startsWith('__') ? `section-${id}` : id
}

function stripInlineMarkdown(text: string): string {
  return text
    .replace(/!\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
    .replace(/[*_`~]/g, '')
    .trim()
}

export function extractHeadings(markdown: string): BlogHeading[] {
  const headings: BlogHeading[] = []
  let inFence = false
  for (const line of markdown.split(/\r?\n/)) {
    if (/^\s*(```|~~~)/.test(line)) {
      inFence = !inFence
      continue
    }
    if (inFence || line.length > MAX_HEADING_LINE) continue
    // "## Title", "### Title ##": a marker, a space, the text. (No nested repeats: runs in linear time.)
    const marker = /^(#{2,3})[ \t]+(\S.*)$/.exec(line.trimEnd())
    if (!marker) continue
    const text = stripInlineMarkdown(marker[2].replace(/[ \t]+#+$/, ''))
    const id = headingId(text)
    if (id) headings.push({ id, text, level: marker[1].length as 2 | 3 })
  }
  return headings
}

export function readingMinutes(markdown: string): number {
  const plain = markdown.replace(/```[\s\S]*?```/g, ' ').replace(/\{%[^%]*%\}/g, ' ').replace(/[#>*_`|-]/g, ' ')
  const latinWords = plain.split(/\s+/).filter((w) => /[A-Za-z0-9]/.test(w)).length
  const cjkChars = (plain.match(/[㐀-鿿가-힯ក-៿]/g) ?? []).length
  // ~500 CJK/Khmer characters per minute vs 200 Latin words.
  return Math.max(1, Math.round(latinWords / WORDS_PER_MINUTE + cjkChars / 500))
}

const ISO_DATE = /^\d{4}-\d{2}-\d{2}$/

function toIsoDate(value: unknown): string | null {
  // gray-matter parses unquoted YAML dates into Date objects.
  const iso = value instanceof Date ? value.toISOString().slice(0, 10) : typeof value === 'string' ? value.trim() : ''
  return ISO_DATE.test(iso) && !Number.isNaN(Date.parse(iso)) ? iso : null
}

function nonEmptyString(value: unknown): string | null {
  return typeof value === 'string' && value.trim() ? value.trim() : null
}

const refuseCode = () => {
  throw new Error('JavaScript front matter is not allowed (use YAML between two --- lines)')
}

/** gray-matter options: YAML and JSON only. "---js" and "---javascript" front matter would be run with eval(). */
const FRONT_MATTER = { engines: { js: refuseCode, javascript: refuseCode } }

export type FrontMatterResult =
  | { ok: true; data: Record<string, unknown>; body: string }
  | { ok: false; reason: string }

/** Splits a post file into its front matter (a plain object) and its Markdown text. Never throws, never runs code. */
export function splitFrontMatter(raw: string): FrontMatterResult {
  if (raw.length > MAX_POST_CHARACTERS) {
    return { ok: false, reason: `the file is bigger than ${MAX_POST_CHARACTERS / 1000} KB, which is far more than an article needs` }
  }

  let parsed: ReturnType<typeof matter>
  try {
    parsed = matter(raw, FRONT_MATTER)
  } catch (err) {
    const reason = err instanceof Error ? ((err as Error & { reason?: string }).reason ?? err.message) : String(err)
    return {
      ok: false,
      reason: `invalid front matter (${reason.split('\n')[0]}). Tip: wrap any title or description that contains a colon (:) in double quotes.`,
    }
  }
  if (!parsed.matter.trim()) {
    return { ok: false, reason: 'no front matter found. The file must start with a line containing only ---, then the post details, then another --- line' }
  }
  const data: Record<string, unknown> = parsed.data && typeof parsed.data === 'object' && !Array.isArray(parsed.data) ? parsed.data : {}
  return { ok: true, data, body: parsed.content }
}

export interface MarkdownLink {
  /** true for ![picture](address), false for [text](address) */
  image: boolean
  address: string
  /** 1-based line number */
  line: number
}

/**
 * Every [text](address) and ![picture](address) in a post. Used by `npm run check:data`.
 * One line at a time, with every repeat bounded, so no input can make it slow (see tests/unit/blogParse.test.ts).
 */
export function findMarkdownLinks(markdown: string): MarkdownLink[] {
  const found: MarkdownLink[] = []
  let inFence = false
  markdown.split(/\r?\n/).forEach((line, index) => {
    if (/^\s*(```|~~~)/.test(line)) {
      inFence = !inFence
      return
    }
    if (inFence || line.length > MAX_SCANNED_LINE) return
    for (const match of line.matchAll(/(!?)\[[^\]]{0,500}\]\(\s{0,20}<?([^)\s>]{1,2048})/g)) {
      found.push({ image: match[1] === '!', address: match[2], line: index + 1 })
    }
  })
  return found
}

export type ReadPostResult =
  | { ok: true; post: BlogPost; draft: boolean }
  | { ok: false; reason: string }

/** Reads a post, or says in plain English why it cannot be used. Never throws. */
export function readPost(slug: string, raw: string): ReadPostResult {
  const front = splitFrontMatter(raw)
  if (!front.ok) return front
  const { data } = front
  // The content editor saves tables as Markdoc tags; the page reads pipe tables (see lib/markdocTables.ts).
  const content = markdocTablesToGfm(front.body)

  const title = nonEmptyString(data.title)
  const description = nonEmptyString(data.description)
  const category = nonEmptyString(data.category)
  const date = toIsoDate(data.date)
  const missing = [!title && 'title', !description && 'description', !category && 'category', !date && 'date (YYYY-MM-DD)'].filter(Boolean)
  if (missing.length > 0 || !title || !description || !category || !date) {
    return { ok: false, reason: `missing or invalid front matter -> ${missing.join(', ')}` }
  }

  const cover = nonEmptyString(data.cover)
  const coverCaption = nonEmptyString(data.coverCaption)
  const tableOfContents = TABLE_OF_CONTENTS_MODES.find((mode) => mode === data.tableOfContents) ?? 'auto'
  const related = Array.isArray(data.related)
    ? [...new Set(data.related.flatMap((item) => (typeof item === 'string' && item.trim() ? [item.trim()] : [])))].slice(0, MAX_RELATED_POSTS)
    : []

  return {
    ok: true,
    draft: data.draft === true,
    post: {
      slug,
      title,
      description,
      date,
      updated: toIsoDate(data.updated) ?? undefined,
      author: nonEmptyString(data.author) ?? DEFAULT_AUTHOR,
      category,
      categorySlug: slugify(category),
      tags: Array.isArray(data.tags) ? data.tags.filter((t): t is string => typeof t === 'string') : [],
      cover: cover ? { src: cover, alt: nonEmptyString(data.coverAlt) ?? title, ...(coverCaption ? { caption: coverCaption } : {}) } : undefined,
      featured: data.featured === true,
      unlisted: data.unlisted === true,
      tableOfContents,
      related,
      seoTitle: nonEmptyString(data.seoTitle) ?? undefined,
      seoDescription: nonEmptyString(data.seoDescription) ?? undefined,
      socialImage: nonEmptyString(data.socialImage) ?? undefined,
      readingMinutes: readingMinutes(content),
      content,
      headings: extractHeadings(content),
    },
  }
}
