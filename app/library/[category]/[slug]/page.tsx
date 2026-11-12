import * as React from 'react'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { libraryItems, libraryCategoriesMeta, type LibraryItem } from '@/data/library'
import { TechniqueDetailClient } from '@/components/library/TechniqueDetailClient'
import { toLibraryCardStub } from '@/lib/libraryCards'
import { LIBRARY_DISCIPLINE, pageMetadata, snippet } from '@/lib/seo'
import { buildBreadcrumbJsonLd, buildTechniqueJsonLd, jsonLdString } from '@/lib/structuredData'

export function generateStaticParams() {
  return libraryItems.map((item) => ({
    category: item.category,
    slug: item.slug,
  }))
}

interface TechniquePageProps {
  params: Promise<{
    category: string
    slug: string
  }>
}

const findItem = (category: string, slug: string) =>
  libraryItems.find((i) => i.category === category && i.slug === slug)

/**
 * Search snippet for a technique: "Taegeuk 1 (Il Jang): Taekwondo Poomsae Guide", a description
 * that starts with what it is and how to do it, and keywords from its Korean and romanized names.
 */
function techniqueSeo(item: LibraryItem) {
  const discipline = LIBRARY_DISCIPLINE[item.category] ?? 'Technique'
  const title = `${item.name}: Taekwondo ${discipline} Guide`
  // Brand first (snippets are trimmed); the short Hangul name, without its own bracketed gloss.
  const korean = item.koreanName.split(' (')[0]
  const description = snippet(`Infinity Taekwondo guide to ${item.name} · ${korean}: ${item.summary} Belt level: ${item.beltLevel}.`)
  const keywords = [
    item.name,
    item.koreanName,
    item.romanized,
    `${item.name} Taekwondo`,
    `Taekwondo ${discipline}`,
    `how to do ${item.name}`,
    item.beltLevel,
  ].filter((value): value is string => Boolean(value))
  return { discipline, title, description, keywords }
}

export async function generateMetadata({ params }: TechniquePageProps): Promise<Metadata> {
  const { category, slug } = await params
  const item = findItem(category, slug)
  if (!item) return { title: 'Technique Not Found' }

  const seo = techniqueSeo(item)
  return pageMetadata({
    title: seo.title,
    description: seo.description,
    path: `/library/${item.category}/${item.slug}`,
    keywords: seo.keywords,
    type: 'article',
    image: item.image ? { url: item.image, alt: `${item.name} (${item.koreanName}) - Infinity Taekwondo` } : undefined,
  })
}

export default async function TechniquePage({ params }: TechniquePageProps) {
  const { category, slug } = await params
  const item = findItem(category, slug)

  if (!item) {
    notFound()
  }

  const categoryMeta = libraryCategoriesMeta.find((c) => c.id === item.category)
  // Cards only need identity fields; sending full sibling records bloated every page's HTML.
  const relatedItems = libraryItems
    .filter((i) => i.category === item.category && i.id !== item.id)
    .map(toLibraryCardStub)

  const seo = techniqueSeo(item)
  const path = `/library/${item.category}/${item.slug}`
  const collectionPath = `/library/${item.category}`
  const jsonLd = [
    buildTechniqueJsonLd({
      name: item.name,
      alternateName: [item.koreanName, item.romanized].filter((value): value is string => Boolean(value)),
      description: seo.description,
      path,
      image: item.image,
      discipline: seo.discipline,
      level: item.beltLevel,
      keywords: [...seo.keywords, 'Taekwondo', 'Infinity Taekwondo'],
      collectionPath,
    }),
    buildBreadcrumbJsonLd([
      { name: 'Home', path: '/' },
      { name: 'Taekwondo Library', path: '/library' },
      { name: categoryMeta?.title ?? seo.discipline, path: collectionPath },
      { name: item.name, path },
    ]),
  ]

  return (
    <>
      {jsonLd.map((data, index) => (
        <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdString(data) }} />
      ))}
      <TechniqueDetailClient item={item} categoryMeta={categoryMeta} relatedItems={relatedItems} />
    </>
  )
}
