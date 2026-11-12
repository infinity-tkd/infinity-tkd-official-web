import { pageMetadata } from '@/lib/seo'
import { dojangBranches } from '@/data/locations'

export const metadata = pageMetadata({
  title: 'Taekwondo Dojangs in Phnom Penh: Olympic Stadium & Sen Sok',
  description:
    'Train Taekwondo with Infinity Taekwondo in Phnom Penh at our Olympic Stadium HQ and Kouk Khleang (Sen Sok) dojangs: class times, maps and directions.',
  path: '/locations',
  keywords: ['Taekwondo near Olympic Stadium', 'Taekwondo Sen Sok', 'Taekwondo dojang Phnom Penh', 'martial arts school Phnom Penh'],
})

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
