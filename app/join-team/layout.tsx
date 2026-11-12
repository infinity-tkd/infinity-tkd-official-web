import type { Metadata } from 'next'
import { SHARE_IMAGE, TWITTER_IMAGE } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Careers & Join Our Coaching Staff',
  description:
    'Join Cambodia’s premier Taekwondo academy as a martial arts coach, assistant instructor, or athletic trainer. Competitive compensation and international pathway development.',
  alternates: {
    canonical: '/join-team',
  },
  openGraph: {
    title: 'Careers & Join Our Coaching Staff | Infinity Taekwondo',
    description:
      'Explore instructor opportunities and coaching careers at Infinity Taekwondo Phnom Penh.',
    url: 'https://infinitytaekwondo.com/join-team',
    images: [SHARE_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Careers & Join Our Coaching Staff | Infinity Taekwondo',
    description:
      'Explore instructor opportunities and coaching careers at Infinity Taekwondo Phnom Penh.',
    images: [TWITTER_IMAGE],
  },
}

export default function JoinTeamLayout({ children }: { children: React.ReactNode }) {
  return children
}
