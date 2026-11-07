import type { Metadata } from 'next'
import { BeltJourneyPageContent } from '@/components/belts/BeltJourneyPageContent'
import { getBeltFormLinks } from '@/lib/beltForms'

const DESCRIPTION =
  'The Infinity Taekwondo belt journey from white belt to 2nd Dan: the poomsae at every rank, plus demonstration, tricking, hosinsul and board breaking in traditional Kukkiwon Taekwondo.'

export const metadata: Metadata = {
  title: 'Belt Journey: White Belt to 2nd Dan',
  description: DESCRIPTION,
  alternates: { canonical: '/belt-journey' },
  openGraph: {
    title: 'Belt Journey: White Belt to 2nd Dan | Infinity Taekwondo',
    description: DESCRIPTION,
    url: '/belt-journey',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Belt Journey: White Belt to 2nd Dan | Infinity Taekwondo',
    description: DESCRIPTION,
  },
}

export default function BeltJourneyPage() {
  // Form names and links are resolved on the server so the poomsae dataset never reaches the browser.
  return <BeltJourneyPageContent forms={getBeltFormLinks()} />
}
