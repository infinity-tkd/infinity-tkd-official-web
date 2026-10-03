import type { Metadata, Viewport } from 'next'
import { Montserrat, Kantumruy_Pro } from 'next/font/google'
import { ThemeProvider } from '@/components/ThemeProvider'
import { LanguageProvider } from '@/context/LanguageContext'
import { Navbar } from '@/components/Navbar'
import { MobileBottomNav } from '@/components/MobileBottomNav'
import { Footer } from '@/components/Footer'
import { ScrollNavProvider } from '@/context/ScrollNavContext'
import { AutoErrorHandler } from '@/components/AutoErrorHandler'
import { ScrollProgressBar } from '@/components/ui/ScrollProgressBar'
import { BackToTop } from '@/components/ui/BackToTop'
import './globals.css'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-montserrat',
  display: 'swap',
})

const kantumruy = Kantumruy_Pro({
  subsets: ['khmer', 'latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-kantumruy',
  display: 'swap',
})

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  viewportFit: 'cover',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://infinitytaekwondo.com'),
  title: {
    default: 'Infinity Taekwondo | Elite Martial Arts & Sport Science',
    template: '%s | Infinity Taekwondo',
  },
  description:
    'To provide world-class training that blends athletic science with the artistry of freestyle Taekwondo, empowering students to achieve limitless potential.',
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'Infinity Taekwondo | Elite Martial Arts & Sport Science',
    description: 'Empowering boundless potential from white belt to black belt mastery.',
    url: 'https://infinitytaekwondo.com',
    siteName: 'Infinity Taekwondo',
    type: 'website',
    images: ['/logo.svg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Infinity Taekwondo | Elite Martial Arts & Sport Science',
    description: 'Empowering boundless potential from white belt to black belt mastery.',
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${montserrat.variable} ${kantumruy.variable}`}
    >
      <head>
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="preconnect" href="https://www.youtube-nocookie.com" />
      </head>
      <body className="min-h-screen flex flex-col font-sans selection:bg-brand-red selection:text-white">
        {/* Skip to Main Content Link (WCAG 2.4.1 Bypass Blocks) */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2.5 focus:bg-brand-red focus:text-white focus:font-bold focus:rounded-xl focus:shadow-xl focus:outline-none"
        >
          Skip to main content
        </a>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <LanguageProvider>
            <ScrollNavProvider>
              <AutoErrorHandler />
              <ScrollProgressBar />
              <Navbar />
              <main
                id="main-content"
                className="flex-grow min-h-screen pb-[calc(4.5rem+env(safe-area-inset-bottom,0px))] lg:pb-0"
              >
                {children}
              </main>
              <Footer />
              <MobileBottomNav />
              <BackToTop />
            </ScrollNavProvider>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
