import type { Metadata } from 'next'
import { Newspaper } from 'lucide-react'
import { PageHero } from '@/components/ui/PageHero'
import { CtaBanner } from '@/components/ui/CtaBanner'
import { PostCard } from '@/components/blog/PostCard'
import { CategoryNav } from '@/components/blog/CategoryNav'
import { getAllPostMetas, getCategories } from '@/lib/blog'

const TITLE = 'Martial Journal & Blog'
const DESCRIPTION =
  'Training guides, belt and grading advice, competition insights and stories from the Infinity Taekwondo dojangs in Phnom Penh.'

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: '/blog',
    types: { 'application/rss+xml': '/blog/feed.xml' },
  },
  openGraph: {
    title: `${TITLE} | Infinity Taekwondo`,
    description: DESCRIPTION,
    url: '/blog',
    type: 'website',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Infinity Taekwondo Martial Journal' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${TITLE} | Infinity Taekwondo`,
    description: DESCRIPTION,
    images: ['/twitter-image'],
  },
}

export default function BlogIndexPage() {
  const posts = getAllPostMetas()
  const categories = getCategories()

  // Lead story: an explicitly featured post, otherwise the newest.
  const lead = posts.find((post) => post.featured) ?? posts[0]
  const rest = posts.filter((post) => post.slug !== lead?.slug)

  return (
    <div className="bg-white dark:bg-black text-zinc-900 dark:text-white">
      <PageHero
        eyebrow="Martial Journal & Blog"
        eyebrowIcon={Newspaper}
        title="The Infinity"
        accent="Journal"
        description="Training guides, belt-test advice and stories from our Phnom Penh dojangs."
      />

      <section className="pb-16 sm:pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          {posts.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-zinc-300 dark:border-zinc-800 p-10 text-center">
              <p className="text-lg font-bold uppercase">New articles are on the way</p>
              <p className="mt-2 text-sm font-light text-zinc-600 dark:text-zinc-400">
                Check back soon for training guides and news from the dojang.
              </p>
            </div>
          ) : (
            <>
              <div className="mb-8 sm:mb-10">
                <CategoryNav categories={categories} totalCount={posts.length} />
              </div>

              {lead && (
                <div className="mb-8 sm:mb-10">
                  <PostCard post={lead} featured priority />
                </div>
              )}

              {rest.length > 0 && (
                // Two leftover posts fill a 2-column grid instead of leaving an empty third column.
                <ul className={`grid gap-5 sm:gap-6 sm:grid-cols-2 ${rest.length === 2 ? '' : 'lg:grid-cols-3'}`}>
                  {rest.map((post) => (
                    <li key={post.slug}>
                      <PostCard post={post} />
                    </li>
                  ))}
                </ul>
              )}
            </>
          )}

          <div className="mt-16 sm:mt-24">
            <CtaBanner
              eyebrow="Train with us"
              title="Ready to step on the mat?"
              description="Book a free trial class at either of our Phnom Penh dojangs and meet the coaching team."
              href="/contact?subject=Free%20Trial%20Booking"
              label="Book a free trial"
            />
          </div>
        </div>
      </section>
    </div>
  )
}
