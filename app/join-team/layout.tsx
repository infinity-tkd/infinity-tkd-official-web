import { pageMetadata } from '@/lib/seo'

export const metadata = pageMetadata({
  title: 'Taekwondo Coach & Instructor Jobs in Phnom Penh',
  description:
    'Join the Infinity Taekwondo coaching staff in Phnom Penh: open roles for Taekwondo instructors, tricking coaches and sport physiotherapists.',
  path: '/join-team',
  keywords: ['Taekwondo instructor jobs', 'Taekwondo coach jobs Cambodia', 'martial arts jobs Phnom Penh'],
})

export default function JoinTeamLayout({ children }: { children: React.ReactNode }) {
  return children
}
