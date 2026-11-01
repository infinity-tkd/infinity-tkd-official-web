import type { Metadata } from 'next'
import { ErrorScreen } from '@/components/ErrorScreen'

export const metadata: Metadata = {
  title: 'Page Not Found (404) | Infinity Taekwondo',
  robots: {
    index: false,
    follow: false,
  },
}

export default function NotFound() {
  return <ErrorScreen code="404" />
}
