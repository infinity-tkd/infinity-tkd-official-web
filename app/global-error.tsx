'use client'

import * as React from 'react'
import { LanguageProvider } from '@/context/LanguageContext'
import { ThemeProvider } from '@/components/ThemeProvider'
import { ErrorScreen } from '@/components/ErrorScreen'
import './globals.css'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  React.useEffect(() => {
    console.error('Infinity TKD Root Global Exception:', error)
  }, [error])

  return (
    <html lang="en">
      <body className="bg-black text-white antialiased font-sans">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <LanguageProvider>
            <ErrorScreen code="500" reset={reset} />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
