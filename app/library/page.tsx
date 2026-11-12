import { libraryCategoriesMeta } from '@/data/library'
import { LibraryHubClient } from '@/components/library/LibraryHubClient'
import { buildBreadcrumbJsonLd, buildCollectionJsonLd, jsonLdString } from '@/lib/structuredData'

// Server page: the structured data below is static HTML; the hub itself is interactive.
// Metadata (title, description, keywords) comes from app/library/layout.tsx.
export default function LibraryPage() {
  const jsonLd = [
    buildCollectionJsonLd({
      name: 'Taekwondo Library: Poomsae, Kicks & Self-Defense',
      description:
        'Free Taekwondo knowledge base by Infinity Taekwondo: every Kukkiwon Poomsae step by step, kicks, stances, hand techniques, self-defense, history and rules.',
      path: '/library',
      items: libraryCategoriesMeta.map((category) => ({
        name: `Taekwondo ${category.title}`,
        path: `/library/${category.id}`,
      })),
    }),
    buildBreadcrumbJsonLd([
      { name: 'Home', path: '/' },
      { name: 'Taekwondo Library', path: '/library' },
    ]),
  ]

  return (
    <>
      {jsonLd.map((data, index) => (
        <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdString(data) }} />
      ))}
      <LibraryHubClient />
    </>
  )
}
