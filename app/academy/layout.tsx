import type { Metadata } from 'next'
import { academyCourses } from '@/data/academy'

export const metadata: Metadata = {
  title: 'Academy Training Programs & Syllabus',
  description:
    'Comprehensive Taekwondo curriculum from White Belt to Black Belt Dan mastery: Little Tigers, Cadet Elite, High-Performance Kyorugi, and Freestyle Poomsae in Cambodia.',
  alternates: {
    canonical: '/academy',
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
  const courseSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: academyCourses.map((course, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Course',
        name: course.title,
        description: course.description,
        provider: {
          '@type': 'Organization',
          name: 'Infinity Taekwondo Academy',
          sameAs: 'https://infinitytaekwondo.com',
        },
      },
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
      />
      {children}
    </>
  )
}
