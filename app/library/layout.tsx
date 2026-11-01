import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Official Curriculum Library & Knowledge Base',
  description:
    'Authoritative World Taekwondo & Kukkiwon syllabus repository: Step-by-step Poomsae dossiers, Olympic kicking biomechanics, Hosinsul self-defense, and history.',
  alternates: {
    canonical: '/library',
    languages: {
      'en': '/library',
      'km': '/library',
      'zh': '/library',
      'ko': '/library',
      'x-default': '/library',
    },
  },
  openGraph: {
    title: 'Official Curriculum Library & Knowledge Base | Infinity Taekwondo',
    description:
      'Explore official Kukkiwon Poomsae breakdowns, Olympic kicking biomechanics, and technical martial arts dossiers.',
    url: 'https://infinitytaekwondo.com/library',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Official Curriculum Library & Knowledge Base | Infinity Taekwondo',
    description:
      'Explore official Kukkiwon Poomsae breakdowns, Olympic kicking biomechanics, and technical martial arts dossiers.',
  },
}

export default function LibraryLayout({ children }: { children: React.ReactNode }) {
  return children
}
