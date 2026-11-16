/**
 * Which posts the blog shows, and which ones it suggests after a post. Pure functions over a list of posts: no files, no
 * Next.js. lib/blog.ts loads the posts and calls these; tests/unit/blogQuery.test.ts checks the rules.
 */
import type { BlogCategory, BlogPost, BlogPostMeta } from '@/lib/blogParse'

/**
 * The posts that appear in the blog list, the categories, the sitemap, the feed and "keep reading".
 * Posts marked "Hide from the blog list" are left out: they only exist at their own address.
 */
export function listedPosts<T extends Pick<BlogPostMeta, 'unlisted'>>(everyPost: T[]): T[] {
  return everyPost.filter((post) => !post.unlisted)
}

/** The categories of the listed posts, with how many posts each has, by name. */
export function categoriesOf(listed: Pick<BlogPost, 'category' | 'categorySlug'>[]): BlogCategory[] {
  const byCategory = new Map<string, BlogCategory>()
  for (const post of listed) {
    const existing = byCategory.get(post.categorySlug)
    if (existing) existing.count += 1
    else byCategory.set(post.categorySlug, { name: post.category, slug: post.categorySlug, count: 1 })
  }
  return [...byCategory.values()].sort((a, b) => a.name.localeCompare(b.name))
}

/**
 * Posts to suggest after `post`, from the listed posts: the ones chosen by hand in the editor first (in that order,
 * when they exist and are listed), then similar ones: same category first, then shared tags, then most recent.
 * Never the post itself, never twice.
 */
export function relatedPosts(post: BlogPostMeta, listed: BlogPostMeta[], limit = 3): BlogPostMeta[] {
  const score = (candidate: BlogPostMeta) =>
    (candidate.categorySlug === post.categorySlug ? 10 : 0) + candidate.tags.filter((tag) => post.tags.includes(tag)).length

  const others = listed.filter((candidate) => candidate.slug !== post.slug)
  const chosen = post.related.flatMap((slug) => others.filter((candidate) => candidate.slug === slug))
  const similar = others.filter((candidate) => !chosen.includes(candidate)).sort((a, b) => score(b) - score(a) || b.date.localeCompare(a.date))
  return [...chosen, ...similar].slice(0, limit)
}
