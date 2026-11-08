import type { Metadata } from 'next'
import { pricingFaqs } from '@/data/pricing'
import { SHARE_IMAGE, TWITTER_IMAGE } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Memberships & Tuition Plans',
  description:
    'Transparent tuition pricing, flexible monthly memberships, and family training packages at Infinity Taekwondo Phnom Penh. Start with a risk-free trial session.',
  alternates: {
    canonical: '/pricing',
  },
  openGraph: {
    title: 'Memberships & Tuition Plans | Infinity Taekwondo',
    description:
      'Transparent tuition pricing, flexible monthly memberships, and family training packages in Phnom Penh.',
    url: 'https://infinitytaekwondo.com/pricing',
    images: [SHARE_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Memberships & Tuition Plans | Infinity Taekwondo',
    description:
      'Transparent tuition pricing, flexible monthly memberships, and family training packages in Phnom Penh.',
    images: [TWITTER_IMAGE],
  },
}

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: pricingFaqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {children}
    </>
  )
}
