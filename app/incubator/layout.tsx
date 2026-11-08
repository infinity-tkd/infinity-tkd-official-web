import type { Metadata } from 'next'
import { SHARE_IMAGE, TWITTER_IMAGE } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Student Project Incubator & Leadership Lab',
  description:
    'Fostering youth entrepreneurship, athletic innovation, and creative leadership through sports science and martial arts discipline at Infinity Taekwondo.',
  alternates: {
    canonical: '/incubator',
  },
  openGraph: {
    title: 'Student Project Incubator & Leadership Lab | Infinity Taekwondo',
    description:
      'Empowering youth martial artists with real-world entrepreneurial, design, and leadership initiatives.',
    url: 'https://infinitytaekwondo.com/incubator',
    images: [SHARE_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student Project Incubator & Leadership Lab | Infinity Taekwondo',
    description:
      'Empowering youth martial artists with real-world entrepreneurial, design, and leadership initiatives.',
    images: [TWITTER_IMAGE],
  },
}

export default function IncubatorLayout({ children }: { children: React.ReactNode }) {
  return children
}
