import { pageMetadata } from '@/lib/seo'

export const metadata = pageMetadata({
  title: 'About Us: Story, Masters & Philosophy',
  description:
    'Founded in Phnom Penh in 2020 by Masters Keo Moni and Chon Sovan, Infinity Taekwondo joins Kukkiwon tradition with sport science. Meet our masters.',
  path: '/about',
  keywords: ['Taekwondo masters Phnom Penh', 'Taekwondo philosophy', 'Taekwondo tenets', 'Kukkiwon black belt masters'],
})

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children
}
