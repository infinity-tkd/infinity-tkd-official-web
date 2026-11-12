import { pageMetadata } from '@/lib/seo'

export const metadata = pageMetadata({
  title: 'Book a Free Taekwondo Trial Class',
  description:
    'Contact Infinity Taekwondo in Phnom Penh: book a free Taekwondo trial class, ask about classes and prices, or visit our Olympic Stadium and Sen Sok dojangs.',
  path: '/contact',
  keywords: ['Taekwondo trial class', 'free Taekwondo class Phnom Penh', 'contact Infinity Taekwondo', 'Taekwondo registration'],
})

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children
}
