import { pageMetadata } from '@/lib/seo'

export const metadata = pageMetadata({
  title: 'Taekwondo Competition Results & Medals',
  description:
    'The Infinity Taekwondo tournament record: national and Southeast Asian Poomsae, freestyle and demonstration medals won by our athletes from Phnom Penh.',
  path: '/achievements',
  keywords: ['Taekwondo competition Cambodia', 'Poomsae championship', 'Taekwondo medals', 'Cambodia Taekwondo athletes'],
})

export default function AchievementsLayout({ children }: { children: React.ReactNode }) {
  return children
}
