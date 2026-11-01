import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Coaches, Faculty & Athlete Community',
  description:
    'Meet the Kukkiwon-certified Master instructors, international medalists, and inspiring student community powering Infinity Taekwondo in Cambodia.',
  alternates: {
    canonical: '/community',
    languages: {
      'en': '/community',
      'km': '/community',
      'zh': '/community',
      'ko': '/community',
      'x-default': '/community',
    },
  },
  openGraph: {
    title: 'Coaches, Faculty & Athlete Community | Infinity Taekwondo',
    description:
      'Meet the Kukkiwon-certified Master instructors and student leaders shaping martial arts excellence in Cambodia.',
    url: 'https://infinitytaekwondo.com/community',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Coaches, Faculty & Athlete Community | Infinity Taekwondo',
    description:
      'Meet the Kukkiwon-certified Master instructors and student leaders shaping martial arts excellence in Cambodia.',
  },
}

export default function CommunityLayout({ children }: { children: React.ReactNode }) {
  return children
}
