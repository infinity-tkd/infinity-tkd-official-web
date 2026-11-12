import type { Metadata } from 'next'
import { pageMetadata } from '@/lib/seo'

const base = pageMetadata({
  title: 'Taekwondo Library: Poomsae, Kicks & Self-Defense',
  description:
    'Free Taekwondo knowledge base by Infinity Taekwondo: every Kukkiwon Poomsae step by step, kicks, stances, hand techniques, self-defense, history and rules.',
  path: '/library',
  keywords: [
    'Taekwondo techniques',
    'Taekwondo Poomsae',
    'Taegeuk 1 to 8',
    'Taekwondo kicks',
    'Taekwondo stances',
    'Taekwondo self-defense',
    'Taekwondo history',
    'Taekwondo competition rules',
  ],
})

export const metadata: Metadata = {
  ...base,
  // A plain string here would drop the root "%s | Infinity Taekwondo" template for every
  // category and technique page, so the template is repeated for this segment.
  title: {
    default: base.title as string,
    template: '%s | Infinity Taekwondo',
  },
}

export default function LibraryLayout({ children }: { children: React.ReactNode }) {
  return children
}
