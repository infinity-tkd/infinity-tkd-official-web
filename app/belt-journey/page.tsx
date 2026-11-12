import { pageMetadata, SITE_URL } from '@/lib/seo'
import { BeltJourneyPageContent } from '@/components/belts/BeltJourneyPageContent'
import { getBeltFormLinks } from '@/lib/beltForms'
import { beltProgression } from '@/data/belts'
import { buildBreadcrumbJsonLd, jsonLdString } from '@/lib/structuredData'

const DESCRIPTION =
  'The Infinity Taekwondo belt journey from white belt to 2nd Dan: the poomsae at every rank, plus demonstration, tricking, hosinsul and board breaking in traditional Kukkiwon Taekwondo.'

export const metadata = pageMetadata({
  title: 'Taekwondo Belt Ranks: White Belt to Black Belt',
  description:
    'Every Taekwondo belt at Infinity Taekwondo from white belt to 2nd Dan black belt: the Poomsae for each rank, what you train, timelines and grading.',
  path: '/belt-journey',
  keywords: ['Taekwondo belt order', 'Taekwondo belt colors', 'Taekwondo black belt', 'Taegeuk Poomsae by belt', 'Kukkiwon Dan grading'],
})

/** The ranks in order, each pointing at its section of the page. */
const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Taekwondo belt ranks at Infinity Taekwondo',
    description: DESCRIPTION,
    itemListOrder: 'https://schema.org/ItemListOrderAscending',
    numberOfItems: beltProgression.length,
    itemListElement: beltProgression.map((belt, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: `${belt.name} (${belt.rankTitle})`,
      url: `${SITE_URL}/belt-journey#${belt.id}`,
    })),
  },
  buildBreadcrumbJsonLd([
    { name: 'Home', path: '/' },
    { name: 'Taekwondo Belt Ranks', path: '/belt-journey' },
  ]),
]

export default function BeltJourneyPage() {
  // Form names and links are resolved on the server so the poomsae dataset never reaches the browser.
  return (
    <>
      {jsonLd.map((data, index) => (
        <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdString(data) }} />
      ))}
      <BeltJourneyPageContent forms={getBeltFormLinks()} />
    </>
  )
}
