import { pageMetadata } from '@/lib/seo'
import { pricingFaqs } from '@/data/pricing'

export const metadata = pageMetadata({
  title: 'Taekwondo Class Prices & Memberships',
  description:
    'Infinity Taekwondo membership prices in Phnom Penh: monthly and annual plans, family discounts and a free trial class for kids, teens and adults.',
  path: '/pricing',
  keywords: ['Taekwondo prices Phnom Penh', 'Taekwondo membership', 'Taekwondo class fees Cambodia', 'kids martial arts prices'],
})

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
