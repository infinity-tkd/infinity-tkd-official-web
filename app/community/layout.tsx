import type { Metadata } from 'next'
import { SHARE_IMAGE, TWITTER_IMAGE } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Coaches, Faculty & Athlete Community',
  description:
    'Meet the Kukkiwon-certified Master instructors, international medalists, and inspiring student community powering Infinity Taekwondo in Cambodia.',
  alternates: {
    canonical: '/community',
  },
  openGraph: {
    title: 'Coaches, Faculty & Athlete Community | Infinity Taekwondo',
    description:
      'Meet the Kukkiwon-certified Master instructors and student leaders shaping martial arts excellence in Cambodia.',
    url: 'https://infinitytaekwondo.com/community',
    images: [SHARE_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Coaches, Faculty & Athlete Community | Infinity Taekwondo',
    description:
      'Meet the Kukkiwon-certified Master instructors and student leaders shaping martial arts excellence in Cambodia.',
    images: [TWITTER_IMAGE],
  },
}

export default function CommunityLayout({ children }: { children: React.ReactNode }) {
  return children
}
