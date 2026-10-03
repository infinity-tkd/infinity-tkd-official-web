import { siteSettings, type SiteSettings } from '@/config/siteSettings'

export interface SiteConfig {
  name: string
  title: string
  tagline: string
  description: string
  url: string
  email: string
  phone: string
  address: {
    line1: string
    line2: string
    city: string
    country: string
  }
  socials: {
    name: string
    url: string
  }[]
  navItems: {
    name: string
    path: string
  }[]
}

/**
 * Backward-compatible SiteConfig derived directly from the Master siteSettings
 */
export const siteConfig: SiteConfig = {
  name: siteSettings.brand.name,
  title: siteSettings.seo.defaultTitle,
  tagline: siteSettings.brand.tagline,
  description: siteSettings.seo.description,
  url: siteSettings.brand.canonicalDomain,
  email: siteSettings.contact.generalEmail,
  phone: siteSettings.contact.hotlinePhone,
  address: {
    line1: siteSettings.contact.headquartersAddress.facilityName,
    line2: siteSettings.contact.headquartersAddress.street,
    city: siteSettings.contact.headquartersAddress.city,
    country: siteSettings.contact.headquartersAddress.country,
  },
  socials: siteSettings.socials.map((s) => ({
    name: s.platform,
    url: s.url,
  })),
  navItems: siteSettings.navigation.mainNav.map((n) => ({
    name: n.name,
    path: n.path,
  })),
}

export { siteSettings, type SiteSettings }
