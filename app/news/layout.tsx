import { newsItems } from '@/data/news'
import { pageMetadata } from '@/lib/seo'
import { buildBreadcrumbJsonLd, buildCollectionJsonLd, jsonLdString } from '@/lib/structuredData'

const DESCRIPTION =
  'The latest news and announcements from Infinity Taekwondo in Phnom Penh: belt gradings, events, schedule changes and updates from our dojangs.'

export const metadata = pageMetadata({
  title: 'Taekwondo Academy News & Announcements',
  description: DESCRIPTION,
  path: '/news',
  keywords: ['Taekwondo news Phnom Penh', 'Taekwondo announcements', 'Taekwondo grading dates', 'Infinity Taekwondo news'],
})

export default function NewsLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = [
    buildBreadcrumbJsonLd([
      { name: 'Home', path: '/' },
      { name: 'News', path: '/news' },
    ]),
    // Each announcement is a card on this page with its own address (#news-2026-11-20), so the list can name them.
    buildCollectionJsonLd({
      name: 'Infinity Taekwondo News & Announcements',
      description: DESCRIPTION,
      path: '/news',
      items: newsItems.map((item) => ({ name: item.title, path: `/news#${item.id}` })),
    }),
  ]

  return (
    <>
      {jsonLd.map((data, index) => (
        <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdString(data) }} />
      ))}
      {children}
    </>
  )
}
