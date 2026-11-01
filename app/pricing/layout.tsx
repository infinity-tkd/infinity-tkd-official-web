import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Memberships & Tuition Plans',
  description:
    'Transparent tuition pricing, flexible monthly memberships, and family training packages at Infinity Taekwondo Phnom Penh. Start with a risk-free trial session.',
  alternates: {
    canonical: '/pricing',
    languages: {
      'en': '/pricing',
      'km': '/pricing',
      'zh': '/pricing',
      'ko': '/pricing',
      'x-default': '/pricing',
    },
  },
  openGraph: {
    title: 'Memberships & Tuition Plans | Infinity Taekwondo',
    description:
      'Transparent tuition pricing, flexible monthly memberships, and family training packages in Phnom Penh.',
    url: 'https://infinitytaekwondo.com/pricing',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Memberships & Tuition Plans | Infinity Taekwondo',
    description:
      'Transparent tuition pricing, flexible monthly memberships, and family training packages in Phnom Penh.',
  },
}

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return children
}
