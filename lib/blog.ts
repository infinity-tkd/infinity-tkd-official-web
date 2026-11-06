/**
 * Blog content layer.
 *
 * Posts are Markdown files in `content/blog/<slug>.md` with YAML front matter. This module is
 * the ONLY place that knows where posts come from; pages and components consume the typed
 * results. To move to a headless CMS or database later, re-implement `loadAllPosts()` and
 * nothing else needs to change.
 *
 * Front matter:
 *   title        (required) Post title
 *   description  (required) 1-2 sentence summary, used for cards and SEO (aim for <= 160 chars)
 *   date         (required) Publish date, YYYY-MM-DD
 *   updated      (optional) Last-updated date, YYYY-MM-DD
 *   author       (optional) Defaults to "Infinity Taekwondo Coaching Team"
 *   category     (required) e.g. "Getting Started"
 *   tags         (optional) list of strings
 *   cover        (optional) image URL or /public path
 *   coverAlt     (optional) alt text for the cover (defaults to the title)
 *   featured     (optional) true to pin as the lead story on /blog
 *   draft        (optional) true to hide the post in production builds
 */

import 'server-only'
import fs from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'

const BLOG_DIR = path.join(process.cwd(), 'content', 'blog')
const DEFAULT_AUTHOR = 'Infinity Taekwondo Coaching Team'
const WORDS_PER_MINUTE = 200

export interface BlogHeading {
  id: string
  text: string
  level: 2 | 3
}

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
  cover?: { src: string; alt: string }
  featured: boolean
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

/** URL-safe slug. Shared by heading ids, the table of contents and category routes. */
export function slugify(input: string): string {
  return input
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9ក-៿぀-ヿ㐀-鿿가-힯]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

function stripInlineMarkdown(text: string): string {
  return text
    .replace(/!\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
    .replace(/[*_`~]/g, '')
    .trim()
}

function extractHeadings(markdown: string): BlogHeading[] {
  const headings: BlogHeading[] = []
  let inFence = false
  for (const line of markdown.split(/\r?\n/)) {
    if (/^\s*(```|~~~)/.test(line)) {
      inFence = !inFence
      continue
    }
    if (inFence) continue
    const match = /^(#{2,3})\s+(.+?)\s*#*\s*$/.exec(line)
    if (!match) continue
    const text = stripInlineMarkdown(match[2])
    const id = slugify(text)
    if (id) headings.push({ id, text, level: match[1].length as 2 | 3 })
  }
  return headings
}

function readingMinutes(markdown: string): number {
  const plain = markdown.replace(/```[\s\S]*?```/g, ' ').replace(/[#>*_`|-]/g, ' ')
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

function parsePost(slug: string, raw: string): { post: BlogPost; draft: boolean } | null {
  let parsed: ReturnType<typeof matter>
  try {
    parsed = matter(raw)
  } catch (err) {
    const reason = err instanceof Error ? (err as Error & { reason?: string }).reason ?? err.message : String(err)
    console.error(
      `[blog] Skipping "${slug}.md": invalid YAML front matter (${reason}). ` +
        'Tip: wrap any title or description that contains a colon (:) in double quotes.'
    )
    return null
  }
  const { data, content } = parsed

  const title = nonEmptyString(data.title)
  const description = nonEmptyString(data.description)
  const category = nonEmptyString(data.category)
  const date = toIsoDate(data.date)
  const missing = [
    !title && 'title',
    !description && 'description',
    !category && 'category',
    !date && 'date (YYYY-MM-DD)',
  ].filter(Boolean)

  if (missing.length > 0 || !title || !description || !category || !date) {
    console.error(`[blog] Skipping "${slug}.md": missing or invalid front matter -> ${missing.join(', ')}`)
    return null
  }

  const cover = nonEmptyString(data.cover)

  return {
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
      cover: cover ? { src: cover, alt: nonEmptyString(data.coverAlt) ?? title } : undefined,
      featured: data.featured === true,
      readingMinutes: readingMinutes(content),
      content,
      headings: extractHeadings(content),
    },
  }
}

function loadAllPosts(): BlogPost[] {
  if (!fs.existsSync(BLOG_DIR)) return []

  const includeDrafts = process.env.NODE_ENV !== 'production'
  const posts: BlogPost[] = []

  for (const file of fs.readdirSync(BLOG_DIR)) {
    if (!file.endsWith('.md')) continue
    const slug = file.replace(/\.md$/, '')
    if (slug !== slugify(slug)) {
      console.error(`[blog] Skipping "${file}": file name must be a lowercase URL slug (letters, numbers, hyphens).`)
      continue
    }

    try {
      const parsed = parsePost(slug, fs.readFileSync(path.join(BLOG_DIR, file), 'utf8'))
      if (!parsed) continue
      if (parsed.draft && !includeDrafts) continue
      posts.push(parsed.post)
    } catch (err) {
      console.error(`[blog] Failed to read "${file}":`, err)
    }
  }

  // Newest first; ties broken by title for a stable order.
  return posts.sort((a, b) => b.date.localeCompare(a.date) || a.title.localeCompare(b.title))
}

let productionCache: BlogPost[] | null = null

/** All published posts, newest first. Cached in production; re-read on every call in dev for live editing. */
export function getAllPosts(): BlogPost[] {
  if (process.env.NODE_ENV !== 'production') return loadAllPosts()
  return (productionCache ??= loadAllPosts())
}

export function getPostBySlug(slug: string): BlogPost | null {
  return getAllPosts().find((post) => post.slug === slug) ?? null
}

/** Strips the markdown body so list pages never serialise full article text. */
export function toMeta(post: BlogPost): BlogPostMeta {
  const { content: _content, headings: _headings, ...meta } = post
  return meta
}

export function getAllPostMetas(): BlogPostMeta[] {
  return getAllPosts().map(toMeta)
}

export function getCategories(): BlogCategory[] {
  const byCategory = new Map<string, BlogCategory>()
  for (const post of getAllPosts()) {
    const existing = byCategory.get(post.categorySlug)
    if (existing) existing.count += 1
    else byCategory.set(post.categorySlug, { name: post.category, slug: post.categorySlug, count: 1 })
  }
  return [...byCategory.values()].sort((a, b) => a.name.localeCompare(b.name))
}

export function getPostsByCategory(categorySlug: string): BlogPostMeta[] {
  return getAllPostMetas().filter((post) => post.categorySlug === categorySlug)
}

/** Related posts: same category first, then shared tags, then most recent. */
export function getRelatedPosts(post: BlogPostMeta, limit = 3): BlogPostMeta[] {
  const score = (candidate: BlogPostMeta) =>
    (candidate.categorySlug === post.categorySlug ? 10 : 0) +
    candidate.tags.filter((tag) => post.tags.includes(tag)).length

  return getAllPostMetas()
    .filter((candidate) => candidate.slug !== post.slug)
    .sort((a, b) => score(b) - score(a) || b.date.localeCompare(a.date))
    .slice(0, limit)
}

export function formatPostDate(iso: string, locale = 'en-GB'): string {
  // Noon UTC avoids off-by-one-day shifts in any timezone.
  return new Date(`${iso}T12:00:00Z`).toLocaleDateString(locale, {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  })
}
