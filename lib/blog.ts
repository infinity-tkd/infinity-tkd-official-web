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
 * Front matter (the list of every field is BLOG_FIELDS in lib/blogParse.ts):
 *   title            (required) Post title
 *   description      (required) 1-2 sentence summary, used for cards and SEO (aim for <= 160 chars)
 *   date             (required) Publish date, YYYY-MM-DD
 *   updated          (optional) Last-updated date, YYYY-MM-DD
 *   author           (optional) Defaults to "Infinity Taekwondo Coaching Team"
 *   category         (required) e.g. "Getting Started"
 *   tags             (optional) list of strings
 *   cover            (optional) image URL or /public path
 *   coverAlt         (optional) alt text for the cover (defaults to the title)
 *   coverCaption     (optional) a short line under the cover, such as a photo credit
 *   featured         (optional) true to pin as the lead story on /blog
 *   draft            (optional) true to hide the post in production builds
 *   unlisted         (optional) true to leave the post out of the list, categories, sitemap and feed (it keeps its address)
 *   tableOfContents  (optional) auto (default), show or hide the "On this page" list
 *   related          (optional) up to 3 post slugs to suggest under "Keep reading"
 *   seoTitle         (optional) the title search engines and link previews show
 *   seoDescription   (optional) the description search engines and link previews show
 *   socialImage      (optional) the picture link previews show instead of the cover
 * The text can hold content blocks (callout, video, button, pull quote, question): see lib/blogBlocks.ts.
 */

import 'server-only'
import fs from 'node:fs'
import path from 'node:path'
import { readPost, slugify, type BlogPost, type BlogPostMeta, type BlogCategory } from '@/lib/blogParse'
import { categoriesOf, listedPosts, relatedPosts } from '@/lib/blogQuery'

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

/** Every published post, newest first, including the ones hidden from the list. Cached in production; re-read on every call in dev for live editing. */
function getEveryPost(): BlogPost[] {
  if (process.env.NODE_ENV !== 'production') return loadAllPosts()
  return (productionCache ??= loadAllPosts())
}

/**
 * The posts that appear in the blog list, categories, sitemap, feed and "keep reading", newest first.
 * Posts marked "Hide from the blog list" are left out: they only exist at their own address (see getPostBySlug).
 */
export function getAllPosts(): BlogPost[] {
  return listedPosts(getEveryPost())
}

/** Every address a post page must be built for: all published posts, the hidden-from-the-list ones too. */
export function getAllPostSlugs(): string[] {
  return getEveryPost().map((post) => post.slug)
}

/** A post by its address, including one that is hidden from the list. */
export function getPostBySlug(slug: string): BlogPost | null {
  return getEveryPost().find((post) => post.slug === slug) ?? null
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
  return categoriesOf(getAllPosts())
}

export function getPostsByCategory(categorySlug: string): BlogPostMeta[] {
  return getAllPostMetas().filter((post) => post.categorySlug === categorySlug)
}

/** Posts to suggest after this one: the ones chosen by hand first, then similar ones (see lib/blogQuery.ts). */
export function getRelatedPosts(post: BlogPostMeta, limit = 3): BlogPostMeta[] {
  return relatedPosts(post, getAllPostMetas(), limit)
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
