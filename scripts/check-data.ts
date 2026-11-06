/**
 * Content integrity check: `npm run check:data`
 *
 * Loads every data module and blog post and fails (exit code 1) on problems that TypeScript
 * cannot see, so a typo in content is caught before it reaches the live site:
 *   - duplicate ids in any exported list, duplicate library slugs, unknown library categories
 *   - local files referenced by data ("/images/x.jpg", "/docs/x.pdf") missing from public/
 *   - poomsae walkthroughs whose form or step count does not match the library entry
 *   - blog posts with missing front matter or a missing cover image
 *   - UI dictionary keys present in English but missing in km / zh / ko (warning only)
 */
import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs'
import path from 'node:path'
import { pathToFileURL } from 'node:url'
import matter from 'gray-matter'

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
const slugs = new Set<string>()
for (const file of listFiles(path.join(root, 'content', 'blog'), '.md')) {
  const slug = path.basename(file, '.md')
  let data: Record<string, unknown>
  try {
    data = matter(readFileSync(file, 'utf8')).data
  } catch (err) {
    error(`${rel(file)}: front matter could not be read (${(err as Error).message.split('\n')[0]}). Quote values that contain ":"`)
    continue
  }
  if (slugs.has(slug)) error(`${rel(file)}: duplicate post slug`)
  slugs.add(slug)
  for (const field of ['title', 'description', 'date', 'category']) {
    if (!data[field]) error(`${rel(file)}: front matter is missing "${field}"`)
  }
  if (data.date && Number.isNaN(new Date(String(data.date)).getTime())) error(`${rel(file)}: date "${data.date}" is not a valid date`)
  const cover = typeof data.cover === 'string' ? data.cover : undefined
  if (cover?.startsWith('/') && !publicFileExists(cover)) error(`${rel(file)}: cover "${cover}" is not in public/`)
}

// ---------------------------------------------------------------------------------------------
console.log(`Checked ${modules.size} data modules and ${slugs.size} blog posts.`)
for (const message of warnings) console.log(`  warning  ${message}`)
for (const message of errors) console.log(`  ERROR    ${message}`)
if (errors.length) {
  console.log(`\n${errors.length} error(s). Fix them before deploying.`)
  process.exit(1)
}
console.log(warnings.length ? `\nNo errors (${warnings.length} warning(s)).` : '\nAll content checks passed.')
