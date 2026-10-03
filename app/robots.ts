import { MetadataRoute } from 'next'
import { siteSettings } from '@/config/siteSettings'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = siteSettings.brand.canonicalDomain

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/error/', '/api/'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
