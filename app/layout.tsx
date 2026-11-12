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
import { CORE_KEYWORDS, SHARE_IMAGE, SITE_NAME, SITE_URL, TWITTER_IMAGE } from '@/lib/seo'
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

const DEFAULT_TITLE = 'Infinity Taekwondo | Taekwondo Academy in Phnom Penh, Cambodia'
const DEFAULT_DESCRIPTION =
  'Infinity Taekwondo: Kukkiwon-certified Taekwondo classes in Phnom Penh, Cambodia for kids, teens and adults. Poomsae, kicks, self-defense and black belt.'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: DEFAULT_TITLE,
    template: '%s | Infinity Taekwondo',
  },
  description: DEFAULT_DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: [
    ...CORE_KEYWORDS,
    'Taekwondo classes',
    'Taekwondo for kids',
    'Taekwondo black belt',
    'Kukkiwon black belt Cambodia',
    'Poomsae',
    'Taegeuk Poomsae',
    'Freestyle Poomsae',
    'Taekwondo kicks',
    'Hosinsul self-defense',
    'Martial arts Phnom Penh',
    'Kids martial arts Phnom Penh',
    'Olympic Stadium Taekwondo',
    'Sen Sok Taekwondo',
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: 'sports',
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
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: 'en_US',
    type: 'website',
    images: [SHARE_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: [TWITTER_IMAGE],
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
