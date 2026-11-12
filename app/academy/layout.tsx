import { pageMetadata } from '@/lib/seo'
import { academyCourses } from '@/data/academy'

export const metadata = pageMetadata({
  title: 'Taekwondo Classes for Kids, Teens & Adults',
  description:
    'Taekwondo classes at Infinity Taekwondo, Phnom Penh: Kukkiwon Poomsae, freestyle, self-defense, competition teams and private coaching for all ages.',
  path: '/academy',
  keywords: ['Taekwondo classes Phnom Penh', 'Taekwondo for kids Phnom Penh', 'Taekwondo for adults', 'Poomsae classes', 'Freestyle Poomsae', 'Taekwondo tricking', 'Hosinsul self-defense'],
})

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
