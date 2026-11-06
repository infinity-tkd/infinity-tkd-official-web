import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Our Legacy & Philosophy',
  description:
    'Discover Infinity Taekwondo: traditional Korean martial discipline synthesized with modern sports biomechanics, Olympic pedagogy, and world-class faculty in Phnom Penh.',
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'About Our Legacy & Philosophy | Infinity Taekwondo',
    description:
      'Traditional Korean martial discipline synthesized with modern sports biomechanics and Olympic pedagogy.',
    url: 'https://infinitytaekwondo.com/about',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Our Legacy & Philosophy | Infinity Taekwondo',
    description:
      'Traditional Korean martial discipline synthesized with modern sports biomechanics and Olympic pedagogy.',
  },
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children
}
