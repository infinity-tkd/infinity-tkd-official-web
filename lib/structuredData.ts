/**
 * schema.org JSON-LD builders. Kept out of the layout so the root layout stays readable and
 * page-level builders (blog articles, breadcrumbs) share the same organization identity.
 */

import { siteSettings } from '@/config/siteSettings'

const SITE_URL = siteSettings.brand.canonicalDomain
const ORG_ID = `${SITE_URL}/#organization`
const PRIMARY_PHONE = '+855 12 220 124' // E.164-style form of siteSettings.contact.hotlinePhone

/** Site-wide graph: organization, both branches and the website entity. */
export function buildSiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['SportsClub', 'EducationalOrganization'],
        '@id': ORG_ID,
        name: 'Infinity Taekwondo',
        legalName: 'Infinity Taekwondo Academy',
        alternateName: ['Infinity Taekwondo Academy', 'Infinity TKD', '태권도 INFINITY', 'អ៊ីនហ្វីនីធី តេក្វាន់ដូ', '无限跆拳道'],
        url: SITE_URL,
        logo: `${SITE_URL}/favicon.svg`,
        image: `${SITE_URL}/opengraph-image`,
        description:
          'Infinity Taekwondo is a World Taekwondo and Kukkiwon certified Taekwondo academy in Phnom Penh, Cambodia, teaching Poomsae, kicking, self-defense and competition for all ages.',
        sport: 'Taekwondo',
        knowsAbout: [
          'Taekwondo',
          'Poomsae',
          'Taegeuk Poomsae',
          'Freestyle Poomsae',
          'Kukkiwon',
          'World Taekwondo',
          'Taekwondo belt ranks',
          'Taekwondo kicks',
          'Hosinsul self-defense',
          'Martial arts tricking',
          'Sport science',
        ],
        areaServed: [
          { '@type': 'City', name: 'Phnom Penh' },
          { '@type': 'Country', name: 'Cambodia' },
        ],
        foundingDate: '2020',
        foundingLocation: { '@type': 'Place', name: 'Phnom Penh, Cambodia' },
        founder: [
          { '@type': 'Person', name: 'Keo Moni', jobTitle: 'Founder & CEO' },
          { '@type': 'Person', name: 'Chon Sovan', jobTitle: 'Co-Founder & Head Master' },
        ],
        location: [{ '@id': `${SITE_URL}/#olympic-branch` }, { '@id': `${SITE_URL}/#kouk-khleang-branch` }],
        telephone: PRIMARY_PHONE,
        email: siteSettings.contact.generalEmail,
        sameAs: siteSettings.socials.map((s) => s.url),
        priceRange: '$$',
      },
      {
        '@type': 'SportsActivityLocation',
        '@id': `${SITE_URL}/#olympic-branch`,
        name: 'Infinity Taekwondo - Olympic Stadium HQ',
        parentOrganization: { '@id': ORG_ID },
        url: `${SITE_URL}/locations`,
        telephone: PRIMARY_PHONE,
        email: siteSettings.contact.generalEmail,
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'National Olympic Stadium Complex, Charles de Gaulle Blvd',
          addressLocality: 'Phnom Penh',
          addressRegion: 'Khan 7 Makara',
          postalCode: '120301',
          addressCountry: 'KH',
        },
        geo: { '@type': 'GeoCoordinates', latitude: 11.5562607, longitude: 104.9089788 },
        hasMap: siteSettings.contact.headquartersAddress.mapLocationUrl,
        openingHoursSpecification: [
          { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Saturday', 'Sunday'], opens: '09:00', closes: '18:00' },
        ],
      },
      {
        '@type': 'SportsActivityLocation',
        '@id': `${SITE_URL}/#kouk-khleang-branch`,
        name: 'Infinity Taekwondo - Kouk Khleang Branch',
        parentOrganization: { '@id': ORG_ID },
        url: `${SITE_URL}/locations`,
        telephone: PRIMARY_PHONE,
        email: siteSettings.contact.generalEmail,
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Kouk Khleang, Sen Sok',
          addressLocality: 'Phnom Penh',
          addressRegion: 'Khan Sen Sok',
          postalCode: '120803',
          addressCountry: 'KH',
        },
        geo: { '@type': 'GeoCoordinates', latitude: 11.5769319, longitude: 104.8588104 },
        hasMap: siteSettings.contact.bkk1BranchAddress.mapLocationUrl,
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            opens: '09:00',
            closes: '20:00',
          },
          { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Saturday', 'Sunday'], opens: '09:30', closes: '20:00' },
        ],
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        url: SITE_URL,
        name: 'Infinity Taekwondo',
        alternateName: 'Infinity TKD',
        description:
          'Infinity Taekwondo: Taekwondo classes in Phnom Penh, Cambodia, and a free Taekwondo library of Poomsae, kicks, stances, self-defense, history and rules.',
        publisher: { '@id': ORG_ID },
        inLanguage: ['en', 'km', 'ko', 'zh'],
      },
    ],
  }
}

export interface ArticleJsonLdInput {
  title: string
  description: string
  path: string
  image?: string
  publishedAt: string
  updatedAt?: string
  author: string
  section?: string
  keywords?: string[]
}

/** BlogPosting schema for a single article page. */
export function buildArticleJsonLd(post: ArticleJsonLdInput) {
  const url = `${SITE_URL}${post.path}`
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': `${url}#article`,
    headline: post.title,
    description: post.description,
    url,
    mainEntityOfPage: url,
    image: post.image ? [post.image.startsWith('http') ? post.image : `${SITE_URL}${post.image}`] : [`${SITE_URL}/opengraph-image`],
    datePublished: post.publishedAt,
    dateModified: post.updatedAt ?? post.publishedAt,
    author: { '@type': 'Person', name: post.author },
    publisher: { '@id': ORG_ID },
    articleSection: post.section,
    keywords: post.keywords?.join(', '),
    inLanguage: 'en',
  }
}

export interface Crumb {
  name: string
  path: string
}

export function buildBreadcrumbJsonLd(crumbs: Crumb[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: `${SITE_URL}${crumb.path}`,
    })),
  }
}

const absolute = (pathOrUrl: string) => (pathOrUrl.startsWith('http') ? pathOrUrl : `${SITE_URL}${pathOrUrl}`)

export interface CollectionJsonLdInput {
  name: string
  description: string
  path: string
  items: { name: string; path: string }[]
}

/** CollectionPage with its entries as an ordered list (library hub and discipline pages). */
export function buildCollectionJsonLd({ name, description, path, items }: CollectionJsonLdInput) {
  const url = absolute(path)
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': `${url}#collection`,
    name,
    description,
    url,
    inLanguage: 'en',
    isPartOf: { '@id': `${SITE_URL}/#website` },
    publisher: { '@id': ORG_ID },
    about: { '@type': 'Thing', name: 'Taekwondo' },
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: items.length,
      itemListElement: items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        url: absolute(item.path),
      })),
    },
  }
}

export interface TechniqueJsonLdInput {
  name: string
  alternateName?: string[]
  description: string
  path: string
  image?: string
  discipline: string
  level?: string
  keywords: string[]
  collectionPath: string
}

/** A library technique: an article that is also a learning resource about Taekwondo. */
export function buildTechniqueJsonLd(input: TechniqueJsonLdInput) {
  const url = absolute(input.path)
  return {
    '@context': 'https://schema.org',
    '@type': ['Article', 'LearningResource'],
    '@id': `${url}#technique`,
    headline: input.name,
    name: input.name,
    alternateName: input.alternateName?.filter(Boolean),
    description: input.description,
    url,
    mainEntityOfPage: url,
    image: [absolute(input.image ?? '/opengraph-image')],
    inLanguage: 'en',
    learningResourceType: `Taekwondo ${input.discipline} guide`,
    educationalLevel: input.level,
    teaches: input.name,
    about: [
      { '@type': 'Thing', name: 'Taekwondo' },
      { '@type': 'Thing', name: input.discipline },
    ],
    keywords: input.keywords.join(', '),
    isPartOf: { '@id': `${absolute(input.collectionPath)}#collection` },
    author: { '@id': ORG_ID },
    publisher: { '@id': ORG_ID },
  }
}

/** Serialises JSON-LD for a <script> tag, escaping `<` so content can never close the tag. */
export function jsonLdString(data: unknown): string {
  return JSON.stringify(data).replace(/</g, '\\u003c')
}
