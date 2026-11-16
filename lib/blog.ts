/**
 * Blog content layer.
 *
 * Posts are Markdown files in `content/blog/<slug>.md` with YAML front matter. This module is
 * the ONLY place that knows where posts come from; pages and components consume the typed
 * results. To move to a headless CMS or database later, re-implement `loadAllPosts()` and
 * nothing else needs to change. The files can be written by hand or saved by the content
 * editor at /keystatic (lib/keystatic/blog.tsx lists the same front matter fields).
 *
 * Reading ONE post (the front matter fields, the safety limits) is lib/blogParse.ts. It has no file access, so
 * `npm run check:data` and the unit tests run exactly the code the website runs.
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
import { readPost, slugify, type BlogPost, type BlogPostMeta, type BlogCategory } from '@/lib/blogParse'

export { slugify }
export type { BlogHeading, BlogPost, BlogPostMeta, BlogCategory } from '@/lib/blogParse'

const BLOG_DIR = path.join(process.cwd(), 'content', 'blog')

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
      const result = readPost(slug, fs.readFileSync(path.join(BLOG_DIR, file), 'utf8'))
      if (!result.ok) {
        console.error(`[blog] Skipping "${file}": ${result.reason}`)
        continue
      }
      if (result.draft && !includeDrafts) continue
      posts.push(result.post)
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
