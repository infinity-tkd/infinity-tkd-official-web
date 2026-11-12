import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Newspaper } from 'lucide-react'
import { PageHero } from '@/components/ui/PageHero'
import { PostCard } from '@/components/blog/PostCard'
import { CategoryNav } from '@/components/blog/CategoryNav'
import { getAllPostMetas, getCategories, getPostsByCategory } from '@/lib/blog'
import { SHARE_IMAGE } from '@/lib/seo'

// Unknown categories 404 instead of rendering an empty archive.
export const dynamicParams = false

interface CategoryPageProps {
  params: Promise<{ category: string }>
}

export function generateStaticParams() {
  return getCategories().map((category) => ({ category: category.slug }))
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { category: slug } = await params
  const category = getCategories().find((c) => c.slug === slug)
  if (!category) return { title: 'Category not found' }

  const title = `${category.name} Articles`
  const description = `Infinity Taekwondo articles about ${category.name.toLowerCase()}: practical guides and advice from our coaching team.`

  return {
    title,
    description,
    alternates: { canonical: `/blog/category/${slug}` },
    openGraph: {
      title: `${title} | Infinity Taekwondo`,
      description,
      url: `/blog/category/${slug}`,
      type: 'website',
      images: [SHARE_IMAGE],
    },
  }
}

export default async function BlogCategoryPage({ params }: CategoryPageProps) {
  const { category: slug } = await params
  const categories = getCategories()
  const category = categories.find((c) => c.slug === slug)
  if (!category) notFound()

  const posts = getPostsByCategory(slug)

  return (
    <div className="bg-white dark:bg-black text-zinc-900 dark:text-white">
      <PageHero
        eyebrow="Martial Journal & Blog"
        eyebrowIcon={Newspaper}
        title={category.name}
        description={`${posts.length} ${posts.length === 1 ? 'article' : 'articles'} in this category.`}
      />

      <section className="pb-16 sm:pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="mb-8 sm:mb-10">
            <CategoryNav categories={categories} activeSlug={slug} totalCount={getAllPostMetas().length} />
          </div>

          <ul className="grid gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, index) => (
              <li key={post.slug}>
                <PostCard post={post} priority={index === 0} />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  )
}
