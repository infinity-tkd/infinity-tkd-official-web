import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { libraryCategoriesMeta, libraryItems } from '@/data/library'
import { CategoryViewClient } from '@/components/library/CategoryViewClient'
import { pageMetadata, snippet } from '@/lib/seo'
import { buildBreadcrumbJsonLd, buildCollectionJsonLd, jsonLdString } from '@/lib/structuredData'

interface CategoryPageProps {
  params: Promise<{
    category: string
  }>
}

export function generateStaticParams() {
  return libraryCategoriesMeta.map((c) => ({
    category: c.id,
  }))
}

/** "Taekwondo Poomsae (Forms): Complete Guide" and a snippet that names the brand and the sport. */
function categorySeo(categoryId: string) {
  const categoryMeta = libraryCategoriesMeta.find((c) => c.id === categoryId)
  if (!categoryMeta) return null
  const items = libraryItems.filter((i) => i.category === categoryId)
  const title = `Taekwondo ${categoryMeta.title}: Complete Guide`
  // Brand and sport first: the snippet is trimmed at about 158 characters.
  const description = snippet(`Infinity Taekwondo guide to ${categoryMeta.title} in Taekwondo: ${categoryMeta.description}`)
  return { categoryMeta, items, title, description }
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { category } = await params
  const seo = categorySeo(category)
  if (!seo) return { title: 'Discipline Not Found' }

  return pageMetadata({
    title: seo.title,
    description: seo.description,
    path: `/library/${category}`,
    keywords: [
      `Taekwondo ${seo.categoryMeta.title}`,
      seo.categoryMeta.koreanTitle,
      seo.categoryMeta.subtitle,
      ...seo.items.slice(0, 12).map((item) => item.name),
    ],
  })
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category } = await params
  const seo = categorySeo(category)

  if (!seo) {
    notFound()
  }

  const path = `/library/${category}`
  const jsonLd = [
    buildCollectionJsonLd({
      name: seo.title,
      description: seo.description,
      path,
      items: seo.items.map((item) => ({ name: item.name, path: `${path}/${item.slug}` })),
    }),
    buildBreadcrumbJsonLd([
      { name: 'Home', path: '/' },
      { name: 'Taekwondo Library', path: '/library' },
      { name: seo.categoryMeta.title, path },
    ]),
  ]

  return (
    <>
      {jsonLd.map((data, index) => (
        <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdString(data) }} />
      ))}
      <CategoryViewClient category={category} />
    </>
  )
}
