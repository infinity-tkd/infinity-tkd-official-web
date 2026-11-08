import type { Metadata } from 'next'
import { SHARE_IMAGE, TWITTER_IMAGE } from '@/lib/seo'

export const metadata: Metadata = {
  // A plain string here would drop the root "%s | Infinity Taekwondo" template for every
  // category and technique page, so the template is repeated for this segment.
  title: {
    default: 'Official Curriculum Library & Knowledge Base',
    template: '%s | Infinity Taekwondo',
  },
  description:
    'Authoritative World Taekwondo & Kukkiwon syllabus repository: Step-by-step Poomsae dossiers, Olympic kicking biomechanics, Hosinsul self-defense, and history.',
  alternates: {
    canonical: '/library',
  },
  openGraph: {
    title: 'Official Curriculum Library & Knowledge Base | Infinity Taekwondo',
    description:
      'Explore official Kukkiwon Poomsae breakdowns, Olympic kicking biomechanics, and technical martial arts dossiers.',
    url: 'https://infinitytaekwondo.com/library',
    images: [SHARE_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Official Curriculum Library & Knowledge Base | Infinity Taekwondo',
    description:
      'Explore official Kukkiwon Poomsae breakdowns, Olympic kicking biomechanics, and technical martial arts dossiers.',
    images: [TWITTER_IMAGE],
  },
}

export default function LibraryLayout({ children }: { children: React.ReactNode }) {
  return children
}
