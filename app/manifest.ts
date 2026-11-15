import type { MetadataRoute } from 'next'
import { siteSettings } from '@/config/siteSettings'

const icon = (src: string, sizes: string) => ({ src, sizes, type: 'image/png' })

export default function manifest(): MetadataRoute.Manifest {
  return {
    id: '/',
    name: 'Infinity Taekwondo Academy',
    short_name: 'Infinity TKD',
    description: siteSettings.brand.tagline,
    lang: 'en',
    dir: 'ltr',
    start_url: '/',
    scope: '/',
    display: 'standalone',
    orientation: 'any',
    // The splash screen shows this colour behind the icon; the page itself follows the visitor's theme.
    background_color: '#000000',
    theme_color: '#EF2F38',
    categories: ['sports', 'education', 'health'],
    icons: [
      // Chrome requires a 192px and a 512px PNG for installability; the maskable one keeps the logo inside the safe zone.
      { ...icon('/icons/icon-192.png', '192x192'), purpose: 'any' },
      { ...icon('/icons/icon-512.png', '512x512'), purpose: 'any' },
      { ...icon('/icons/icon-maskable-512.png', '512x512'), purpose: 'maskable' },
      { src: '/favicon.svg', sizes: 'any', type: 'image/svg+xml', purpose: 'any' },
    ],
    shortcuts: [
      {
        name: 'Book a free trial',
        short_name: 'Free trial',
        url: '/contact?subject=Free%20Trial%20Booking',
        icons: [icon('/icons/icon-192.png', '192x192')],
      },
      { name: 'Class locations', short_name: 'Locations', url: '/locations', icons: [icon('/icons/icon-192.png', '192x192')] },
      { name: 'Technique library', short_name: 'Library', url: '/library', icons: [icon('/icons/icon-192.png', '192x192')] },
    ],
  }
}
