import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dojang Branches & Training Centers',
  description:
    'Train at our Olympic-standard dojang branches in Phnom Penh: The Factory Phnom Penh (HQ Chak Angre Leu) and BKK1 Elite Training Center. View schedules, maps, and amenities.',
  alternates: {
    canonical: '/locations',
    languages: {
      'en': '/locations',
      'km': '/locations',
      'zh': '/locations',
      'ko': '/locations',
      'x-default': '/locations',
    },
  },
  openGraph: {
    title: 'Dojang Branches & Training Centers | Infinity Taekwondo',
    description:
      'Explore our state-of-the-art Taekwondo facilities in Phnom Penh: The Factory HQ & BKK1 Elite Training Center.',
    url: 'https://infinitytaekwondo.com/locations',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dojang Branches & Training Centers | Infinity Taekwondo',
    description:
      'Explore our state-of-the-art Taekwondo facilities in Phnom Penh: The Factory HQ & BKK1 Elite Training Center.',
  },
}

export default function LocationsLayout({ children }: { children: React.ReactNode }) {
  return children
}
