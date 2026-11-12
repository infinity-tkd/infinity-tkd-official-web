import { pageMetadata } from '@/lib/seo'

export const metadata = pageMetadata({
  title: 'Student Project Incubator',
  description:
    'The Infinity Taekwondo incubator funds and mentors student projects in martial arts film, sport science, community outreach and dojang leadership.',
  path: '/incubator',
  keywords: ['Taekwondo student projects', 'martial arts film Cambodia', 'sport science Cambodia'],
})

export default function IncubatorLayout({ children }: { children: React.ReactNode }) {
  return children
}
