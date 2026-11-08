import Link from 'next/link'
import { ArrowRight, Newspaper } from 'lucide-react'
import { PostCard } from '@/components/blog/PostCard'
import { Eyebrow } from '@/components/ui/PageHero'
import { getAllPostMetas } from '@/lib/blog'

const TEASER_COUNT = 3

/** Homepage teaser for the blog. Server component: reads Markdown at build time, ships no JS. */
export function LatestJournal() {
  const posts = getAllPostMetas().slice(0, TEASER_COUNT)
  if (posts.length === 0) return null

  return (
    <section className="py-16 sm:py-20 lg:py-24 border-t border-zinc-200 bg-white transition-colors duration-500 dark:border-zinc-900 dark:bg-black">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col items-start justify-between gap-4 sm:mb-12 sm:flex-row sm:items-end">
          <div>
            <Eyebrow icon={Newspaper} className="mb-4">
              Martial Journal &amp; Blog
            </Eyebrow>
            <h2 className="text-3xl font-black uppercase tracking-tight text-zinc-900 dark:text-white sm:text-5xl">
              Latest from the <span className="text-brand-red">dojang</span>
            </h2>
          </div>

          <Link
            href="/blog"
            className="inline-flex min-h-[32px] shrink-0 items-center gap-2 whitespace-nowrap text-xs font-bold uppercase tracking-widest text-brand-red hover:underline touch-press"
          >
            All articles <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        <ul className="grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {posts.map((post) => (
            <li key={post.slug}>
              <PostCard post={post} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
