import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Academy Training Programs & Syllabus',
  description:
    'Comprehensive Taekwondo curriculum from White Belt to Black Belt Dan mastery: Little Tigers, Cadet Elite, High-Performance Kyorugi, and Freestyle Poomsae in Cambodia.',
  alternates: {
    canonical: '/academy',
    languages: {
      'en': '/academy',
      'km': '/academy',
      'zh': '/academy',
      'ko': '/academy',
      'x-default': '/academy',
    },
  },
  openGraph: {
    title: 'Academy Training Programs & Syllabus | Infinity Taekwondo',
    description:
      'Comprehensive Taekwondo curriculum from White Belt to Black Belt Dan mastery across all age divisions.',
    url: 'https://infinitytaekwondo.com/academy',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Academy Training Programs & Syllabus | Infinity Taekwondo',
    description:
      'Comprehensive Taekwondo curriculum from White Belt to Black Belt Dan mastery across all age divisions.',
  },
}

export default function AcademyLayout({ children }: { children: React.ReactNode }) {
  return children
}
