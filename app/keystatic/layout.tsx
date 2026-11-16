import type { Metadata } from 'next'
import KeystaticApp from './keystatic'

// The content editor is for the team only: keep it out of search results and link previews.
export const metadata: Metadata = {
  title: { absolute: 'Content editor' },
  description: 'Edit the Infinity Taekwondo website content.',
  robots: { index: false, follow: false },
}

export default function Layout() {
  return <KeystaticApp />
}
