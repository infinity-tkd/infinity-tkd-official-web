import { MetadataRoute } from 'next'
import { siteSettings } from '@/config/siteSettings'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Infinity Taekwondo Academy',
    short_name: 'Infinity TKD',
    description: siteSettings.brand.tagline,
    start_url: '/',
    display: 'standalone',
    background_color: '#000000',
    theme_color: '#EF2F38',
    icons: [
      {
        src: '/favicon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
      {
        src: '/icon',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        src: '/apple-icon',
        sizes: '180x180',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/apple-icon',
        sizes: '180x180',
        type: 'image/png',
        purpose: 'any',
      },
    ],
  }
}
