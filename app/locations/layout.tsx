import type { Metadata } from 'next'
import { dojangBranches } from '@/data/locations'
import { SHARE_IMAGE, TWITTER_IMAGE } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Dojang Branches & Training Centers',
  description:
    'Train at our Olympic-standard dojang branches in Phnom Penh: Olympic Branch (National Olympic Stadium Complex) and Kouk Khleang Branch (Sen Sok). View training schedules, maps, and amenities.',
  alternates: {
    canonical: '/locations',
  },
  openGraph: {
    title: 'Dojang Branches & Training Centers | Infinity Taekwondo',
    description:
      'Explore our state-of-the-art Taekwondo facilities in Phnom Penh: Olympic Branch & Kouk Khleang Branch.',
    url: 'https://infinitytaekwondo.com/locations',
    images: [SHARE_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dojang Branches & Training Centers | Infinity Taekwondo',
    description:
      'Explore our state-of-the-art Taekwondo facilities in Phnom Penh: Olympic Branch & Kouk Khleang Branch.',
    images: [TWITTER_IMAGE],
  },
}

export default function LocationsLayout({ children }: { children: React.ReactNode }) {
  const locationsSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: dojangBranches.map((branch, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'SportsActivityLocation',
        name: `Infinity Taekwondo - ${branch.name}`,
        description: branch.tagline,
        telephone: branch.phone,
        url: 'https://infinitytaekwondo.com/locations',
        hasMap: branch.googleMapsUrl,
        address: {
          '@type': 'PostalAddress',
          streetAddress: branch.address.street,
          addressLocality: branch.address.city,
          addressRegion: branch.address.district,
          addressCountry: branch.address.country,
        },
      },
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(locationsSchema) }}
      />
      {children}
    </>
  )
}
