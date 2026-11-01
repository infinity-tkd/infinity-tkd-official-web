import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Championship Achievements & Medal Record',
  description:
    'Official tournament records, national gold medals, Southeast Asian podium finishes, and Kukkiwon Dan certifications achieved by Infinity Taekwondo athletes.',
  alternates: {
    canonical: '/achievements',
    languages: {
      'en': '/achievements',
      'km': '/achievements',
      'zh': '/achievements',
      'ko': '/achievements',
      'x-default': '/achievements',
    },
  },
  openGraph: {
    title: 'Championship Achievements & Medal Record | Infinity Taekwondo',
    description:
      'Official championship records, national gold medals, and tournament milestones of Infinity Taekwondo athletes.',
    url: 'https://infinitytaekwondo.com/achievements',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Championship Achievements & Medal Record | Infinity Taekwondo',
    description:
      'Official championship records, national gold medals, and tournament milestones of Infinity Taekwondo athletes.',
  },
}

export default function AchievementsLayout({ children }: { children: React.ReactNode }) {
  return children
}
