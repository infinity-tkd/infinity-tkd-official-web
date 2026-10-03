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
    ],
  }
}
