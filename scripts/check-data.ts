/**
 * Content integrity check: `npm run check:data`
 *
 * Loads every data module and blog post and fails (exit code 1) on problems that TypeScript
 * cannot see, so a typo in content is caught before it reaches the live site:
 *   - duplicate ids in any exported list, duplicate library slugs, unknown library categories
 *   - local files referenced by data ("/images/x.jpg", "/docs/x.pdf") missing from public/
 *   - poomsae walkthroughs whose form or step count does not match the library entry
 *   - belts listing a form id that does not exist in the poomsae library
 *   - belt translations missing a field or with a different number of list items (warning only)
 *   - blog posts with missing front matter or a missing cover image
 *   - UI dictionary keys present in English but missing in km / zh / ko (warning only)
 *
 * Content edited in the content editor (/keystatic) is covered too. Every data module reads its content/*.json
 * file and checks it as it loads (lib/content/validate.ts), so a wrong value shows up here as "could not be
 * loaded" with the file and field named. On top of that:
 *   - picture links that cannot work (Facebook, Instagram, a folder, a web page...) in any `image` or `cover`
 *   - blog front matter the editor does not know, and Markdoc tags the website cannot show
 *   - uploaded pictures (public/uploads) that are too big, or that nothing uses any more (warning only)
 *   - an award that names a student ID with no matching student (warning only)
 *
 * `npm run build` runs this first, so a bad edit stops the build and the previous live site stays up.
 */
import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs'
import path from 'node:path'
import { pathToFileURL } from 'node:url'
import { collectBlocks } from '@/lib/blogBlocks'
import { BLOG_FIELDS, findMarkdownLinks, readPost, slugify, splitFrontMatter } from '@/lib/blogParse'
import { describeImage } from '@/lib/imageUrl'
import { MAX_UPLOAD_BYTES } from '@/lib/keystatic/prepareUpload'
import { isSafeHref } from '@/lib/safeHref'

const root = process.cwd()
const errors: string[] = []
const warnings: string[] = []
const error = (message: string) => errors.push(message)
const warn = (message: string) => warnings.push(message)

const ASSET = /^\/[^\s?#]+\.(png|jpe?g|webp|avif|gif|svg|ico|pdf|mp4|webm)$/i
const publicFileExists = (url: string) => existsSync(path.join(root, 'public', ...url.split('/').filter(Boolean)))

function listFiles(dir: string, extension: string): string[] {
  if (!existsSync(dir)) return []
  return readdirSync(dir).flatMap((name) => {
    const full = path.join(dir, name)
    if (statSync(full).isDirectory()) return listFiles(full, extension)
    return name.endsWith(extension) ? [full] : []
  })
}

const rel = (file: string) => path.relative(root, file).replaceAll('\\', '/')

/** Visits every string inside a value (objects, arrays), reporting the property path. */
function walkStrings(value: unknown, at: string, visit: (text: string, at: string) => void, seen = new Set<object>()) {
  if (typeof value === 'string') return visit(value, at)
  if (!value || typeof value !== 'object' || seen.has(value)) return
  seen.add(value)
  if (Array.isArray(value)) value.forEach((item, i) => walkStrings(item, `${at}[${i}]`, visit, seen))
  else for (const [key, item] of Object.entries(value)) walkStrings(item, `${at}.${key}`, visit, seen)
}

// ---------------------------------------------------------------------------------------------
// 1. Every data module: duplicate ids and missing local files
// ---------------------------------------------------------------------------------------------
const modules = new Map<string, Record<string, unknown>>()
// Barrels (index.ts) last, so problems are reported against the file that defines the data.
const dataFiles = listFiles(path.join(root, 'data'), '.ts').sort(
  (a, b) => Number(path.basename(a) === 'index.ts') - Number(path.basename(b) === 'index.ts') || a.localeCompare(b)
)
for (const file of dataFiles) {
  try {
    modules.set(rel(file), await import(pathToFileURL(file).href))
  } catch (err) {
    error(`${rel(file)}: could not be loaded (${(err as Error).message.split('\n')[0]})`)
  }
}

const visited = new Set<object>() // shared, so data re-exported by a barrel is only scanned once
const missingAssets = new Map<string, string[]>() // file path -> where it is used
const usedUploads = new Set<string>() // "/uploads/..." pictures that some content points at
for (const [file, exports] of modules) {
  for (const [name, value] of Object.entries(exports)) {
    if (typeof value === 'function') continue

    if (Array.isArray(value) && value.length && value.every((item) => item && typeof item === 'object' && typeof item.id === 'string')) {
      const seen = new Set<string>()
      for (const item of value as { id: string }[]) {
        if (seen.has(item.id)) error(`${file}: "${name}" has a duplicate id "${item.id}"`)
        seen.add(item.id)
      }
    }

    walkStrings(
      value,
      name,
      (text, at) => {
        if (ASSET.test(text) && !publicFileExists(text)) missingAssets.set(text, [...(missingAssets.get(text) ?? []), `${file}: ${at}`])
        if (text.startsWith('/uploads/')) usedUploads.add(text)
        // A picture link the website cannot show (Facebook, a folder, a web page...). Same rules as the editor's picture field.
        if (/\.(image|cover)$/.test(at) && text.trim()) {
          const problem = describeImage(text).problem
          if (problem) error(`${file}: ${at} is not a usable picture link. ${problem}`)
        }
      },
      visited
    )
  }
}
for (const [asset, places] of missingAssets) {
  const more = places.length > 1 ? ` and ${places.length - 1} other place(s)` : ''
  error(`"${asset}" is not in public/ (used at ${places[0]}${more})`)
}

// ---------------------------------------------------------------------------------------------
// 2. Library: categories, slugs, required fields
// ---------------------------------------------------------------------------------------------
const library = modules.get('data/library/index.ts') as
  | { libraryItems: { id: string; slug: string; category: string; name: string; summary: string; image: string; steps: string[] }[]; libraryCategoriesMeta: { id: string }[] }
  | undefined
const poomsaeById = new Map<string, { steps: string[] }>()

if (library) {
  const categories = new Set(library.libraryCategoriesMeta.map((c) => c.id))
  const urls = new Set<string>()
  for (const item of library.libraryItems) {
    const where = `library item "${item.id}"`
    if (!categories.has(item.category)) error(`${where}: unknown category "${item.category}"`)
    if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(item.slug)) error(`${where}: slug "${item.slug}" should be lowercase-with-dashes`)
    const url = `/library/${item.category}/${item.slug}`
    if (urls.has(url)) error(`${where}: another item already uses ${url}`)
    urls.add(url)
    for (const field of ['name', 'summary', 'image'] as const) {
      if (!item[field]?.trim()) error(`${where}: "${field}" is empty`)
    }
    if (!Array.isArray(item.steps)) error(`${where}: "steps" must be a list (use [] if none)`)
    if (item.category === 'poomsae') poomsaeById.set(item.id, item)
  }
  for (const category of categories) {
    if (!library.libraryItems.some((item) => item.category === category)) warn(`library category "${category}" has no items`)
  }
}

// Belt structure: every form a belt lists must exist in the poomsae library.
type BeltData = { id: string; forms: string[]; translations?: Record<string, Record<string, unknown> | undefined> } & Record<string, unknown>
const belts = (modules.get('data/belts.ts') as { beltProgression?: BeltData[] } | undefined)?.beltProgression ?? []
for (const belt of belts) {
  for (const form of belt.forms) {
    if (!poomsaeById.has(form)) error(`belt "${belt.id}": form "${form}" is not a poomsae id in data/library/poomsae/poomsae.ts`)
  }
}

// Belt translations: each language covers every text field, with as many list items as English.
const BELT_TEXT_FIELDS = ['name', 'shortName', 'rankTitle', 'poomsae', 'alsoTrains', 'poomsaeMeaning', 'meaning', 'philosophy', 'timeline', 'focus', 'syllabusGoals', 'physicalSkills', 'tracks', 'requirements']
for (const belt of belts) {
  for (const language of ['km', 'zh', 'ko']) {
    const translated = belt.translations?.[language]
    const where = `belt "${belt.id}" (${language})`
    if (!translated) {
      warn(`${where}: no translation, so it shows in English`)
      continue
    }
    for (const field of BELT_TEXT_FIELDS) {
      const english = belt[field]
      const value = translated[field]
      if (english === undefined) continue
      if (value === undefined) warn(`${where}: "${field}" is not translated`)
      else if (Array.isArray(english) && (!Array.isArray(value) || value.length !== english.length)) {
        warn(`${where}: "${field}" has ${Array.isArray(value) ? value.length : 0} item(s), English has ${english.length}`)
      } else if (english && typeof english === 'object' && !Array.isArray(english)) {
        const missing = Object.keys(english).filter((key) => !(value as Record<string, unknown>)[key])
        if (missing.length) warn(`${where}: "${field}" is missing ${missing.join(', ')}`)
      }
    }
  }
}

// ---------------------------------------------------------------------------------------------
// 3. Poomsae walkthroughs (rulebook PDFs are covered by the missing-file scan above)
// ---------------------------------------------------------------------------------------------
const walkthroughs = modules.get('data/library/poomsae/poomsaeWalkthroughs.ts') as
  | { POOMSAE_WALKTHROUGHS: Record<string, { formId: string; steps: unknown[] }> }
  | undefined
for (const [key, walkthrough] of Object.entries(walkthroughs?.POOMSAE_WALKTHROUGHS ?? {})) {
  const form = poomsaeById.get(walkthrough.formId)
  if (key !== walkthrough.formId) error(`walkthrough "${key}": key and formId "${walkthrough.formId}" differ`)
  if (!form) error(`walkthrough "${key}": no poomsae with id "${walkthrough.formId}"`)
  else if (form.steps.length !== walkthrough.steps.length) {
    error(`walkthrough "${key}": ${walkthrough.steps.length} geometry steps but the form has ${form.steps.length} step texts (it will not render)`)
  }
}

// ---------------------------------------------------------------------------------------------
// 4. UI dictionaries: every English key should exist in the other languages
// ---------------------------------------------------------------------------------------------
function keyPaths(value: unknown, prefix = ''): string[] {
  if (!value || typeof value !== 'object' || Array.isArray(value)) return [prefix]
  return Object.entries(value).flatMap(([key, item]) => keyPaths(item, prefix ? `${prefix}.${key}` : key))
}
const english = (modules.get('data/translations/en.ts') as { en?: unknown } | undefined)?.en
if (english) {
  const englishKeys = keyPaths(english)
  for (const language of ['km', 'zh', 'ko']) {
    const dictionary = (modules.get(`data/translations/${language}.ts`) as Record<string, unknown> | undefined)?.[language]
    const keys = new Set(keyPaths(dictionary))
    const missing = englishKeys.filter((key) => !keys.has(key))
    if (missing.length) warn(`translations/${language}.ts is missing ${missing.length} key(s), e.g. ${missing.slice(0, 3).join(', ')}`)
  }
}

// ---------------------------------------------------------------------------------------------
// 5. Blog posts (content/blog/*.md)
// ---------------------------------------------------------------------------------------------
// The fields the content editor knows (lib/keystatic/blog.tsx). It refuses to open a post with any other.
const KNOWN_BLOG_FIELDS = new Set<string>(BLOG_FIELDS)

const slugs = new Set<string>()
const postState = new Map<string, { draft: boolean; unlisted: boolean }>()
const relatedChoices: { file: string; slug: string; target: string }[] = []
for (const file of listFiles(path.join(root, 'content', 'blog'), '.md')) {
  const slug = path.basename(file, '.md')
  if (slug !== slugify(slug)) error(`${rel(file)}: the file name must be a lowercase web address (letters, numbers, dashes). The website skips this post`)

  // The same reader the website uses (lib/blogParse.ts), so "passes here" means "shows up on the site".
  // It refuses front matter that would run code, files over 300 KB, and anything missing a required field or date.
  const raw = readFileSync(file, 'utf8')
  const front = splitFrontMatter(raw)
  if (!front.ok) {
    error(`${rel(file)}: ${front.reason}`)
    continue
  }
  const { data, body } = front
  if (slugs.has(slug)) error(`${rel(file)}: duplicate post slug`)
  slugs.add(slug)
  const read = readPost(slug, raw)
  if (!read.ok) error(`${rel(file)}: ${read.reason}. The website skips this post`)
  else {
    postState.set(slug, { draft: read.draft, unlisted: read.post.unlisted })
    const seenHeadings = new Set<string>()
    for (const heading of read.post.headings) {
      if (seenHeadings.has(heading.id)) warn(`${rel(file)}: two headings make the same link (#${heading.id}). "On this page" jumps to the first one`)
      seenHeadings.add(heading.id)
    }
    for (const target of read.post.related) relatedChoices.push({ file, slug, target })
    if (read.post.seoTitle && read.post.seoTitle.length > 70) warn(`${rel(file)}: the title for Google is ${read.post.seoTitle.length} characters; Google usually shows about 60`)
    if (read.post.seoDescription && read.post.seoDescription.length > 170) warn(`${rel(file)}: the description for Google is ${read.post.seoDescription.length} characters; Google usually shows about 160`)

    // Content blocks (callout, video, button, pull quote, question): known, closed, and with usable options.
    // Counted on the text the website reads (tables already turned into tables), so line numbers can drift by a few after a table.
    for (const problem of collectBlocks(read.post.content).problems) {
      const message = `${rel(file)}: around line ${problem.line} of the text: ${problem.message}`
      if (problem.level === 'error') error(message)
      else warn(message)
    }
  }
  for (const key of Object.keys(data)) {
    if (!KNOWN_BLOG_FIELDS.has(key)) warn(`${rel(file)}: front matter "${key}" is not a field the content editor knows, so it will refuse to open this post`)
  }
  // The cover and the picture for sharing: a file that exists, or a link that can work.
  for (const field of ['cover', 'socialImage'] as const) {
    const value = typeof data[field] === 'string' ? data[field] : undefined
    if (value?.startsWith('/') && !publicFileExists(value)) error(`${rel(file)}: ${field} "${value}" is not in public/`)
    if (value?.startsWith('/uploads/')) usedUploads.add(value)
    if (value) {
      const problem = describeImage(value).problem
      if (problem) error(`${rel(file)}: ${field} is not a usable picture link. ${problem}`)
    }
  }

  // Pictures inside the text: ![description](address), and links: [text](address)
  for (const { image, address, line } of findMarkdownLinks(body)) {
    if (image) {
      if (address.startsWith('/uploads/')) usedUploads.add(address)
      if (address.startsWith('/') && ASSET.test(address) && !publicFileExists(address)) error(`${rel(file)}: picture "${address}" is not in public/`)
      const problem = describeImage(address).problem
      if (problem) error(`${rel(file)}: picture "${address.slice(0, 60)}" is not a usable picture link. ${problem}`)
    } else if (!isSafeHref(address)) {
      // Not dangerous (the website shows it as plain text), but the reader would find text where they expected a link.
      warn(`${rel(file)}: line ${line}: the link "${address.slice(0, 60)}" is not allowed, so it shows as plain text. Links start with https://, mailto:, tel: or /`)
    }
  }

}

// "Read next" choices must be posts that exist, and ones visitors can reach.
for (const { file, slug, target } of relatedChoices) {
  const state = postState.get(target)
  if (target === slug) error(`${rel(file)}: "Read next" lists the post itself`)
  else if (!slugs.has(target)) error(`${rel(file)}: "Read next" lists "${target}", which is not a post (it may have been renamed or deleted)`)
  else if (state?.draft) warn(`${rel(file)}: "Read next" lists "${target}", which is a draft, so it is left out on the live website`)
  else if (state?.unlisted) warn(`${rel(file)}: "Read next" lists "${target}", which is hidden from the blog list, so it is left out`)
}

// ---------------------------------------------------------------------------------------------
// 6. Pictures uploaded through the content editor (public/uploads)
// ---------------------------------------------------------------------------------------------
const publicDir = path.join(root, 'public')
const UPLOAD_PICTURE_TYPES = new Set(['jpg', 'jpeg', 'png', 'webp', 'gif', 'avif'])
let uploadCount = 0
for (const file of listFiles(path.join(publicDir, 'uploads'), '')) {
  // Folder placeholders and the files Windows and macOS leave behind are not uploads.
  if (/^(\.|Thumbs\.db$|desktop\.ini$)/i.test(path.basename(file))) continue
  uploadCount += 1
  const url = `/${path.relative(publicDir, file).replaceAll('\\', '/')}`
  const extension = path.extname(file).slice(1).toLowerCase()
  // Only pictures belong here. The website sends every file in this folder with a policy that stops it running
  // anything when opened directly (config/uploadsPolicy.mjs), but an HTML or script file is still a mistake.
  if (extension === 'svg') warn(`${url} is an SVG. An SVG can carry scripts and cannot be shrunk; the website shows it safely, but a PNG or JPG is better.`)
  else if (!UPLOAD_PICTURE_TYPES.has(extension)) error(`${url} is not a picture (.${extension || 'no extension'}). Only JPG, PNG, WebP, GIF and AVIF pictures belong in public/uploads: delete it.`)
  const size = statSync(file).size
  const megabytes = (size / 1_000_000).toFixed(1)
  if (size > MAX_UPLOAD_BYTES * 3) error(`${url} is ${megabytes} MB. Every picture stays in the repository for good: shrink it, or use a link instead.`)
  else if (size > MAX_UPLOAD_BYTES) warn(`${url} is ${megabytes} MB (the editor keeps uploads under 1 MB). Consider shrinking it.`)
  if (!usedUploads.has(url)) warn(`${url} is not used by any content. It can be deleted.`)
}

// ---------------------------------------------------------------------------------------------
// 7. References between content
// ---------------------------------------------------------------------------------------------
const spotlightIds = new Set(((modules.get('data/students.ts') as { athleteSpotlights?: { id: string }[] } | undefined)?.athleteSpotlights ?? []).map((student) => student.id))
const awards = (modules.get('data/achievements.ts') as { tournamentAchievements?: { tournament: string; year: string; studentCompetitors?: { name: string; studentId?: string }[] }[] } | undefined)?.tournamentAchievements ?? []
// (Skipped when either file could not be loaded: that is already reported above, and every ID would look unknown.)
for (const award of modules.has('data/students.ts') ? awards : []) {
  for (const student of award.studentCompetitors ?? []) {
    if (student.studentId && !spotlightIds.has(student.studentId)) {
      warn(`award "${award.year} ${award.tournament}": ${student.name} points at student ID "${student.studentId}", which is not on the Students page`)
    }
  }
}

// ---------------------------------------------------------------------------------------------
console.log(`Checked ${modules.size} data modules, ${slugs.size} blog posts and ${uploadCount} uploaded picture(s).`)
for (const message of warnings) console.log(`  warning  ${message}`)
for (const message of errors) console.log(`  ERROR    ${message}`)
if (errors.length) {
  console.log(`\n${errors.length} error(s). Fix them before deploying.`)
  process.exit(1)
}
console.log(warnings.length ? `\nNo errors (${warnings.length} warning(s)).` : '\nAll content checks passed.')
