import Link from 'next/link'
import { cn } from '@/lib/utils'
import type { BlogCategory } from '@/lib/blog'

const pillBase = 'px-3.5 sm:px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300'
const pillActive = 'bg-brand-red text-white shadow-brand-glow'
const pillInactive =
  'bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-800 hover:border-brand-red hover:text-brand-red'

/** Category filter pills. Real links (not client state), so every category is crawlable and shareable. */
export function CategoryNav({
  categories,
  activeSlug,
  totalCount,
}: {
  categories: BlogCategory[]
  activeSlug?: string
  totalCount: number
}) {
  if (categories.length < 2 && !activeSlug) return null

  return (
    <nav aria-label="Blog categories" className="flex flex-wrap items-center gap-2">
      <Link
        href="/blog"
        aria-current={!activeSlug ? 'page' : undefined}
        className={cn(pillBase, !activeSlug ? pillActive : pillInactive)}
      >
        All ({totalCount})
      </Link>
      {categories.map((category) => (
        <Link
          key={category.slug}
          href={`/blog/category/${category.slug}`}
          aria-current={activeSlug === category.slug ? 'page' : undefined}
          className={cn(pillBase, activeSlug === category.slug ? pillActive : pillInactive)}
        >
          {category.name} ({category.count})
        </Link>
      ))}
    </nav>
  )
}
