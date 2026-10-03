'use client'

import * as React from 'react'
import { ErrorScreen } from '@/components/ErrorScreen'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  React.useEffect(() => {
    // Log error to monitoring console
    console.error('Infinity TKD Runtime Exception:', error)
  }, [error])

  return <ErrorScreen code="500" reset={reset} />
}
