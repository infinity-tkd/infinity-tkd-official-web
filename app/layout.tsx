import type { Metadata, Viewport } from 'next'
import { ThemeProvider } from '@/components/ThemeProvider'
import { LanguageProvider } from '@/context/LanguageContext'
import { Navbar } from '@/components/Navbar'
import { MobileBottomNav } from '@/components/MobileBottomNav'
import { Footer } from '@/components/Footer'
import { ScrollNavProvider } from '@/context/ScrollNavContext'
import { AutoErrorHandler } from '@/components/AutoErrorHandler'
import { ScrollProgressBar } from '@/components/ui/ScrollProgressBar'
import { BackToTop } from '@/components/ui/BackToTop'
import { siteSettings } from '@/config/siteSettings'
import './globals.css'

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
    languages: {
      'en': '/',
      'km': '/',
      'zh': '/',
      'ko': '/',
      'x-default': '/',
    },
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
    description: 'Empowering boundless potential from white belt to black belt mastery in Phnom Penh, Cambodia.',
    url: 'https://infinitytaekwondo.com',
    siteName: 'Infinity Taekwondo',
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
    title: 'Infinity Taekwondo | Elite Martial Arts & Sport Science',
    description: 'Empowering boundless potential from white belt to black belt mastery in Phnom Penh, Cambodia.',
    images: ['/opengraph-image'],
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/icon', sizes: '32x32', type: 'image/png' },
    ],
    shortcut: '/favicon.svg',
    apple: [
      { url: '/apple-icon', sizes: '180x180', type: 'image/png' },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SportsClub',
    name: 'Infinity Taekwondo Academy',
    alternateName: 'Infinity TKD',
    url: 'https://infinitytaekwondo.com',
    logo: 'https://infinitytaekwondo.com/favicon.svg',
    image: 'https://infinitytaekwondo.com/opengraph-image',
    description:
      'Elite Kukkiwon & World Taekwondo curriculum blending athletic science with freestyle Taekwondo martial discipline in Phnom Penh, Cambodia.',
    telephone: siteSettings.contact.hotlinePhone,
    email: siteSettings.contact.generalEmail,
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteSettings.contact.headquartersAddress.street,
      addressLocality: siteSettings.contact.headquartersAddress.city,
      addressRegion: siteSettings.contact.headquartersAddress.district,
      addressCountry: 'KH',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 11.5562607,
      longitude: 104.9115537,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '06:00',
        closes: '21:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Saturday'],
        opens: '07:00',
        closes: '19:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Sunday'],
        opens: '08:00',
        closes: '17:00',
      },
    ],
    sameAs: siteSettings.socials.map((s) => s.url),
    priceRange: '$$',
  }

  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&family=Kantumruy+Pro:wght@300;400;500;600;700&display=swap"
        />
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="preconnect" href="https://www.youtube-nocookie.com" />
        <link rel="preconnect" href="https://cdn.jsdelivr.net" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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
