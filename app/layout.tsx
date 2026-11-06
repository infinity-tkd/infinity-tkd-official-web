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
import { buildSiteJsonLd, jsonLdString } from '@/lib/structuredData'
import './globals.css'

// Self-hosted at build time by next/font: no render-blocking third-party CSS, no layout shift.
// Both are variable fonts, so a single file per script covers every weight.
const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
})

const kantumruy = Kantumruy_Pro({
  subsets: ['khmer', 'latin'],
  display: 'swap',
  variable: '--font-kantumruy',
  preload: false, // only fetched when Khmer text is actually rendered
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

const DEFAULT_TITLE = 'Infinity Taekwondo | Elite Martial Arts & Sport Science Academy Phnom Penh'
const DEFAULT_DESCRIPTION =
  'Premier World Taekwondo & Kukkiwon certified academy in Phnom Penh, Cambodia. Olympic sparring, recognized Poomsae, sports biomechanics, and martial leadership for kids and adults at Olympic Stadium & Sen Sok.'

export const metadata: Metadata = {
  metadataBase: new URL('https://infinitytaekwondo.com'),
  title: {
    default: DEFAULT_TITLE,
    template: '%s | Infinity Taekwondo',
  },
  description: DEFAULT_DESCRIPTION,
  keywords: [
    'Taekwondo Cambodia',
    'Infinity Taekwondo',
    'Taekwondo Phnom Penh',
    'Kukkiwon Black Belt Cambodia',
    'World Taekwondo Phnom Penh',
    'Olympic Stadium Martial Arts',
    'Kids Martial Arts Phnom Penh',
    'Sen Sok Taekwondo',
    'Poomsae Training Cambodia',
    'Martial Arts Tricking Phnom Penh',
    'Kyorugi Sparring',
    'After school sports Phnom Penh',
  ],
  // Note: no site-wide `alternates`. Language is switched client-side on the same URL, so there
  // are no per-language URLs to declare, and a root canonical would be inherited by every page.
  // Each page sets its own canonical.
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
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    url: 'https://infinitytaekwondo.com',
    siteName: 'Infinity Taekwondo',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Infinity Taekwondo Academy Phnom Penh',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: DEFAULT_TITLE,
    description:
      'Premier World Taekwondo & Kukkiwon certified academy in Phnom Penh, Cambodia. Olympic sparring, recognized Poomsae, sports biomechanics, and martial leadership.',
    images: ['/opengraph-image'],
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/icon', sizes: '32x32', type: 'image/png' },
    ],
    shortcut: '/favicon.svg',
    apple: [{ url: '/apple-icon', sizes: '180x180', type: 'image/png' }],
  },
  alternates: {
    types: { 'application/rss+xml': '/blog/feed.xml' },
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${montserrat.variable} ${kantumruy.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLdString(buildSiteJsonLd()) }}
        />
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
