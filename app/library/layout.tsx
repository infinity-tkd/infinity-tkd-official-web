import type { Metadata } from 'next'
import { fitTitle, pageMetadata, titleForms } from '@/lib/seo'

const TITLE = 'Taekwondo Library: Poomsae, Kicks & Self-Defense'

const base = pageMetadata({
  title: TITLE,
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
  // The library hub's own title, plus the root "%s | Infinity Taekwondo" template repeated for any
  // child page that sets a plain title (category and technique pages set fitted absolute titles).
  title: {
    absolute: fitTitle(titleForms(TITLE)),
    template: '%s | Infinity Taekwondo',
  },
}

export default function LibraryLayout({ children }: { children: React.ReactNode }) {
  return children
}
