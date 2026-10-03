import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { libraryCategoriesMeta } from '@/data/library'
import { CategoryViewClient } from '@/components/library/CategoryViewClient'

interface CategoryPageProps {
  params: {
    category: string
  }
}

export function generateStaticParams() {
  return libraryCategoriesMeta.map((c) => ({
    category: c.id,
  }))
}

export function generateMetadata({ params }: CategoryPageProps): Metadata {
  const categoryMeta = libraryCategoriesMeta.find((c) => c.id === params.category)

  if (!categoryMeta) {
    return {
      title: 'Discipline Not Found | Infinity Taekwondo',
    }
  }

  const title = `${categoryMeta.title} (${categoryMeta.koreanTitle}) - Curriculum Library`
  const description = `${categoryMeta.subtitle}. ${categoryMeta.description}`.slice(0, 160)

  return {
    title,
    description,
    alternates: {
      canonical: `/library/${params.category}`,
    },
    openGraph: {
      title: `${title} | Infinity Taekwondo`,
      description,
      type: 'website',
      url: `/library/${params.category}`,
      images: ['/logo.svg'],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | Infinity Taekwondo`,
      description,
    },
  }
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const categoryMeta = libraryCategoriesMeta.find((c) => c.id === params.category)

  if (!categoryMeta) {
    notFound()
  }

  return <CategoryViewClient category={params.category} />
}
