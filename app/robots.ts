import { MetadataRoute } from 'next'
import { siteSettings } from '@/config/siteSettings'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = siteSettings.brand.canonicalDomain

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        // /keystatic is the content editor: for the team only (it is also marked noindex).
        disallow: ['/error/', '/api/', '/keystatic'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
