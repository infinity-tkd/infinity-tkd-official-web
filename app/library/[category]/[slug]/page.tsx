import * as React from 'react'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import {
  libraryItems,
  libraryCategoriesMeta,
  type LibraryItem,
} from '@/data/library'
import { TechniqueDetailClient } from '@/components/library/TechniqueDetailClient'

export function generateStaticParams() {
  return libraryItems.map((item) => ({
    category: item.category,
    slug: item.slug,
  }))
}

interface TechniquePageProps {
  params: {
    category: string
    slug: string
  }
}

export function generateMetadata({ params }: TechniquePageProps): Metadata {
  const item = libraryItems.find(
    (i) => i.category === params.category && i.slug === params.slug
  )

  if (!item) {
    return {
      title: 'Technique Not Found | Infinity Taekwondo',
    }
  }

  const title = `${item.name} (${item.koreanName}) - Infinity Taekwondo Curriculum`
  const description = `${item.summary} Belt Level: ${item.beltLevel}. Difficulty: ${item.difficulty}.`.slice(
    0,
    160
  )

  return {
    title,
    description,
    alternates: {
      canonical: `/library/${item.category}/${item.slug}`,
    },
    openGraph: {
      title: `${title} | Infinity Taekwondo Curriculum`,
      description,
      type: 'article',
      url: `/library/${item.category}/${item.slug}`,
      images: item.image ? [item.image] : ['/logo.svg'],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | Infinity Taekwondo Curriculum`,
      description,
    },
  }
}

export default function TechniquePage({ params }: TechniquePageProps) {
  const item = libraryItems.find(
    (i) => i.category === params.category && i.slug === params.slug
  )

  if (!item) {
    notFound()
  }

  const categoryMeta = libraryCategoriesMeta.find((c) => c.id === item.category)
  const relatedItems = libraryItems.filter(
    (i) => i.category === item.category && i.id !== item.id
  )

  return (
    <TechniqueDetailClient
      item={item}
      categoryMeta={categoryMeta}
      relatedItems={relatedItems}
    />
  )
}
