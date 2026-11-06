import type { MetadataRoute } from 'next'
import { libraryItems, libraryCategoriesMeta } from '@/data/library'
import { siteSettings } from '@/config/siteSettings'
import { getAllPostMetas, getCategories } from '@/lib/blog'

type Entry = MetadataRoute.Sitemap[number]

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteSettings.brand.canonicalDomain
  const entry = (path: string, priority: number, changeFrequency: Entry['changeFrequency'], lastModified?: string): Entry => ({
    url: `${baseUrl}${path}`,
    changeFrequency,
    priority,
    // Only declare a modification date when we genuinely know it (blog posts).
    // A blanket `new Date()` would tell crawlers every page changed at every build.
    ...(lastModified ? { lastModified } : {}),
  })

  const posts = getAllPostMetas()
  const latestPostDate = posts[0]?.updated ?? posts[0]?.date

  // Core marketing and institutional routes
  const staticRoutes: Entry[] = [
    entry('', 1.0, 'weekly'),
    entry('/about', 0.9, 'monthly'),
    entry('/academy', 0.9, 'monthly'),
    entry('/library', 0.95, 'weekly'),
    entry('/locations', 0.85, 'monthly'),
    entry('/pricing', 0.85, 'monthly'),
    entry('/achievements', 0.8, 'monthly'),
    entry('/collaborations', 0.8, 'monthly'),
    entry('/community', 0.75, 'monthly'),
    entry('/incubator', 0.7, 'monthly'),
    entry('/join-team', 0.7, 'monthly'),
    entry('/contact', 0.8, 'yearly'),
    entry('/blog', 0.85, 'weekly', latestPostDate),
    entry('/safeguarding', 0.6, 'yearly'),
    entry('/anti-doping', 0.6, 'yearly'),
    entry('/equality', 0.6, 'yearly'),
    entry('/privacy', 0.5, 'yearly'),
    entry('/terms', 0.5, 'yearly'),
  ]

  const blogCategoryRoutes = getCategories().map((category) => entry(`/blog/category/${category.slug}`, 0.6, 'weekly'))
  const blogPostRoutes = posts.map((post) => entry(`/blog/${post.slug}`, 0.8, 'monthly', post.updated ?? post.date))

  // Discipline hubs and technique dossiers
  const categoryRoutes = libraryCategoriesMeta.map((category) => entry(`/library/${category.id}`, 0.85, 'monthly'))
  const techniqueRoutes = libraryItems.map((item) => entry(`/library/${item.category}/${item.slug}`, 0.75, 'yearly'))

  return [...staticRoutes, ...blogCategoryRoutes, ...blogPostRoutes, ...categoryRoutes, ...techniqueRoutes]
}
