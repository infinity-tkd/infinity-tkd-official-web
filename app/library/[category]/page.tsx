import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { libraryCategoriesMeta } from '@/data/library'
import { CategoryViewClient } from '@/components/library/CategoryViewClient'

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

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { category } = await params
  const categoryMeta = libraryCategoriesMeta.find((c) => c.id === category)

  if (!categoryMeta) {
    return {
      title: 'Discipline Not Found',
    }
  }

  const title = `${categoryMeta.title} (${categoryMeta.koreanTitle}) - Curriculum Library`
  const description = `${categoryMeta.subtitle}. ${categoryMeta.description}`.slice(0, 160)

  return {
    title,
    description,
    alternates: {
      canonical: `/library/${category}`,
    },
    openGraph: {
      title: `${title} | Infinity Taekwondo`,
      description,
      type: 'website',
      url: `/library/${category}`,
      images: [
        {
          url: '/opengraph-image',
          width: 1200,
          height: 630,
          alt: `${categoryMeta.title} - Infinity Taekwondo Curriculum`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | Infinity Taekwondo`,
      description,
      images: ['/twitter-image'],
    },
  }
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category } = await params
  const categoryMeta = libraryCategoriesMeta.find((c) => c.id === category)

  if (!categoryMeta) {
    notFound()
  }

  return <CategoryViewClient category={category} />
}
