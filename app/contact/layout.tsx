import type { Metadata } from 'next'
import { SHARE_IMAGE, TWITTER_IMAGE } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Contact Admissions & Book Free Trial',
  description:
    'Get in touch with admissions, schedule a free introductory Taekwondo trial session, or inquire about private training in Phnom Penh, Cambodia.',
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact Admissions & Book Free Trial | Infinity Taekwondo',
    description:
      'Schedule a free introductory Taekwondo trial session or speak with our admissions team in Phnom Penh.',
    url: 'https://infinitytaekwondo.com/contact',
    images: [SHARE_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Admissions & Book Free Trial | Infinity Taekwondo',
    description:
      'Schedule a free introductory Taekwondo trial session or speak with our admissions team in Phnom Penh.',
    images: [TWITTER_IMAGE],
  },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children
}
