/**
 * Site navigation: the single source for the desktop menu, the mobile drawer and the footer.
 *
 * To add a page to the menus, add one entry here. Labels are functions of the active
 * translation dictionary, so they follow the visitor's selected language.
 */

import {
  Award,
  Briefcase,
  CreditCard,
  Milestone,
  GraduationCap,
  HeartHandshake,
  Info,
  Lightbulb,
  MapPin,
  Newspaper,
  ShoppingBag,
  Users,
  type LucideIcon,
} from 'lucide-react'
import type { Translations } from '@/data/translations'

type Label = (t: Translations) => string

export interface NavItem {
  href: string
  label: Label
  /** Short helper line shown under the label in dropdown menus (currently English-only). */
  description: string
  icon: LucideIcon
}

export interface NavGroup {
  id: 'academy' | 'library' | 'community' | 'about'
  href: string
  label: Label
  /** `mega` groups render a custom panel (the library discipline grid); items are still used on mobile. */
  kind: 'dropdown' | 'mega'
  items: NavItem[]
}

export const NAV_GROUPS: NavGroup[] = [
  {
    id: 'academy',
    href: '/academy',
    label: (t) => t.nav.academy,
    kind: 'dropdown',
    items: [
      {
        href: '/academy',
        label: (t) => t.footer.syllabus,
        description: 'Age divisions, belts & weekly class formats',
        icon: GraduationCap,
      },
      {
        href: '/belt-journey',
        label: (t) => t.footer.beltJourney,
        description: 'White belt to 2nd Dan: forms and training at every rank',
        icon: Milestone,
      },
      {
        href: '/pricing',
        label: (t) => t.footer.pricing,
        description: 'Flexible monthly plans & family packages',
        icon: CreditCard,
      },
      {
        href: '/incubator',
        label: (t) => t.footer.incubator,
        description: 'Cadet research & martial leadership grants',
        icon: Lightbulb,
      },
      {
        href: '/contact?subject=pro-shop',
        label: (t) => t.footer.store,
        description: 'Official doboks, belts & training equipment',
        icon: ShoppingBag,
      },
    ],
  },
  {
    id: 'library',
    href: '/library',
    label: (t) => t.nav.library,
    kind: 'mega',
    items: [],
  },
  {
    id: 'community',
    href: '/community',
    label: (t) => t.nav.community,
    kind: 'dropdown',
    items: [
      {
        href: '/community',
        label: (t) => t.footer.community,
        description: 'Kukkiwon certified Master faculty & demo team',
        icon: Users,
      },
      {
        href: '/achievements',
        label: (t) => t.footer.achievements,
        description: 'National & international championship records',
        icon: Award,
      },
      {
        href: '/join-team',
        label: (t) => t.footer.coachingCareers,
        description: 'Instructor careers & assistant internships',
        icon: Briefcase,
      },
    ],
  },
  {
    id: 'about',
    href: '/about',
    label: (t) => t.nav.about,
    kind: 'dropdown',
    items: [
      {
        href: '/about',
        label: (t) => t.footer.philosophy,
        description: 'Founding journey, core tenets & executive faculty',
        icon: Info,
      },
      {
        href: '/collaborations',
        label: (t) => t.footer.collaborations,
        description: 'World Taekwondo, Kukkiwon & academic alliances',
        icon: HeartHandshake,
      },
      {
        href: '/locations',
        label: (t) => t.footer.branchesLink,
        description: 'Facility specifications, schedules & interactive maps',
        icon: MapPin,
      },
      {
        href: '/blog',
        label: (t) => t.footer.blog,
        description: 'Articles, training guides & master perspectives',
        icon: Newspaper,
      },
    ],
  },
]

/** Strips any query/hash so `/contact?subject=x` can be compared with a pathname. */
function pathOf(href: string): string {
  return href.split(/[?#]/)[0]
}

export function isPathActive(pathname: string | null, href: string): boolean {
  if (!pathname) return false
  const target = pathOf(href)
  if (target === '/') return pathname === '/'
  return pathname === target || pathname.startsWith(`${target}/`)
}

export function isGroupActive(pathname: string | null, group: NavGroup): boolean {
  if (group.kind === 'mega') return isPathActive(pathname, group.href)
  return group.items.some((item) => isPathActive(pathname, item.href))
}

/* -------------------------------------------------------------------------------------------
 * Footer
 * ----------------------------------------------------------------------------------------- */

export interface FooterLink {
  href: string
  label: Label
  icon?: LucideIcon
}

export interface FooterColumn {
  title: Label
  /** Spans the full width on tablet to balance the grid. */
  wide?: boolean
  links: FooterLink[]
}

export const FOOTER_COLUMNS: FooterColumn[] = [
  {
    title: (t) => t.footer.colAcademy,
    links: [
      { href: '/academy', label: (t) => t.footer.syllabus },
      { href: '/library', label: (t) => t.nav.library },
      { href: '/pricing', label: (t) => t.footer.pricing },
      { href: '/incubator', label: (t) => t.footer.incubator },
      { href: '/blog', label: (t) => t.footer.blog },
    ],
  },
  {
    title: (t) => t.footer.colBranches,
    links: [
      { href: '/about', label: (t) => t.footer.philosophy },
      { href: '/community', label: (t) => t.footer.community },
      { href: '/achievements', label: (t) => t.footer.achievements },
      { href: '/collaborations', label: (t) => t.footer.collaborations },
      { href: '/locations', label: (t) => t.footer.branchesLink },
    ],
  },
  {
    title: (t) => t.footer.colLegal,
    wide: true,
    links: [
      { href: '/safeguarding', label: (t) => t.footer.safeguarding },
      { href: '/anti-doping', label: (t) => t.footer.antiDoping },
      { href: '/equality', label: (t) => t.footer.equality },
      { href: '/privacy', label: (t) => t.footer.privacy },
      { href: '/terms', label: (t) => t.footer.terms },
    ],
  },
]

/** Direct-message channels shown beside the social icons. */
export const MESSAGING_LINKS = {
  whatsapp:
    'https://wa.me/85512220124?text=Hello%20Infinity%20Taekwondo%2C%20I%20would%20like%20to%20inquire%20about%20booking%20a%20free%20trial%20class.',
  telegram: 'https://t.me/infinitytaekwondo',
} as const
