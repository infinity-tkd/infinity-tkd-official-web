import { pageMetadata } from '@/lib/seo'

export const metadata = pageMetadata({
  title: 'Taekwondo Masters, Coaches & Students',
  description:
    'Meet the Infinity Taekwondo masters and coaches, Kukkiwon Dan holders, and the students who train Taekwondo with us in Phnom Penh, Cambodia.',
  path: '/community',
  keywords: ['Taekwondo coaches Phnom Penh', 'Taekwondo masters Cambodia', 'Taekwondo students'],
})

export default function CommunityLayout({ children }: { children: React.ReactNode }) {
  return children
}
