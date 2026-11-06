/**
 * ==============================================================================
 * INFINITY TAEKWONDO - SITE SETTINGS
 * ==============================================================================
 * Brand identity, SEO defaults, contact details, social channels and HTTP security
 * configuration. Everything here is consumed by the app:
 *
 *   brand, seo, contact, socials  -> metadata, JSON-LD, footer, forms
 *   security                      -> proxy.ts (headers, CSP, request filtering) and lib/security.ts
 *
 * Related configuration lives next to the code that uses it:
 *   config/navigation.ts   Header menus, mobile drawer and footer links
 *   data/*.ts              Page content (courses, pricing, locations, coaches...)
 *   data/translations/     UI strings (en, km, zh, ko)
 *   tailwind.config.ts and app/globals.css   Design tokens (colors, radii, fonts, motion)
 * ==============================================================================
 */

export interface SiteSettings {
  /** Brand Identity & Global Metadata */
  brand: {
    name: string
    koreanName: string
    khmerName: string
    chineseName: string
    tagline: string
    slogan: string
    foundedYear: number
    headquartersCity: string
    canonicalDomain: string
  }

  /** SEO, OpenGraph & Social Sharing */
  seo: {
    defaultTitle: string
    titleTemplate: string
    description: string
    keywords: string[]
    ogImage: string
    favicon: string
    twitterHandle: string
    locale: string
  }

  /** Contact Information & Dojang Operations */
  contact: {
    generalEmail: string
    supportEmail: string
    pressEmail: string
    hotlinePhone: string
    headquartersAddress: {
      facilityName: string
      street: string
      district: string
      city: string
      country: string
      mapLocationUrl: string
    }
    bkk1BranchAddress: {
      facilityName: string
      street: string
      district: string
      city: string
      country: string
      mapLocationUrl: string
    }
    operatingHours: {
      weekdays: string
      saturday: string
      sunday: string
    }
  }

  /** Official Social Media Profiles */
  socials: {
    platform: string
    url: string
    handle: string
    ariaLabel: string
  }[]

  /** Frontend & HTTP Security Settings */
  security: {
    headers: {
      contentSecurityPolicy: {
        defaultSrc: string[]
        scriptSrc: string[]
        styleSrc: string[]
        imgSrc: string[]
        fontSrc: string[]
        connectSrc: string[]
        frameSrc: string[]
        frameAncestors: string[]
        baseUri: string[]
        formAction: string[]
        objectSrc: string[]
      }
      xFrameOptions: 'DENY' | 'SAMEORIGIN'
      xContentTypeOptions: 'nosniff'
      referrerPolicy: 'strict-origin-when-cross-origin' | 'no-referrer' | 'same-origin'
      permissionsPolicy: string
      strictTransportSecurity: string
      xXssProtection: string
      crossOriginOpenerPolicy: 'same-origin' | 'same-origin-allow-popups' | 'unsafe-none'
      crossOriginResourcePolicy: 'same-origin' | 'same-site' | 'cross-origin'
    }
    inputSanitization: {
      stripHtmlTags: boolean
      neutralizeScriptProtocols: boolean
      preventCrlfInjection: boolean
      maxInputLength: number
      maxNameLength: number
      maxEmailLength: number
      maxPhoneLength: number
    }
    spamProtection: {
      enableHoneypotTrap: boolean
      honeypotFieldName: string
      formCooldownSeconds: number
      maxSubmissionsPerHour: number
    }
    blockedPathPatterns: string[]
    maliciousQueryPatterns: string[]
  }
}

/**
 * ==============================================================================
 * MASTER CONFIGURATION OBJECT
 * Edit the values below to customize the design, theme, and behavior site-wide!
 * ==============================================================================
 */
export const siteSettings: SiteSettings = {
  // ----------------------------------------------------------------------------
  // 1. BRAND IDENTITY
  // ----------------------------------------------------------------------------
  brand: {
    name: 'Infinity Taekwondo',
    koreanName: '태권도 INFINITY',
    khmerName: 'អ៊ីនហ្វីនីធី តេក្វាន់ដូ',
    chineseName: '无限跆拳道',
    tagline: 'Where Discipline Meets Limitless Potential',
    slogan: 'Elite Martial Arts & Sport Science Academy',
    foundedYear: 2020,
    headquartersCity: 'Phnom Penh, Cambodia',
    canonicalDomain: 'https://infinitytaekwondo.com',
  },

  // ----------------------------------------------------------------------------
  // 2. SEO & META TAGS
  // ----------------------------------------------------------------------------
  seo: {
    defaultTitle: 'Infinity Taekwondo | Elite Martial Arts & Sport Science',
    titleTemplate: '%s | Infinity Taekwondo',
    description:
      'World-class martial arts training blending biomechanics athletic science with freestyle Taekwondo, Kukkiwon Dan certifications, and action cinema acrobatics in Phnom Penh.',
    keywords: [
      'Taekwondo Cambodia',
      'Infinity Taekwondo',
      'Kukkiwon Black Belt',
      'World Taekwondo Phnom Penh',
      'Martial Arts Tricking',
      'Poomsae Training',
      'Freestyle Poomsae',
      'Taekwondo Demonstration Team',
      'Hosinsul Self-Defense',
      'Kids Martial Arts Phnom Penh',
      'Olympic Stadium Taekwondo Phnom Penh',
      'Kouk Khleang Sen Sok Martial Arts',
    ],
    ogImage: '/logo.svg',
    favicon: '/favicon.svg',
    twitterHandle: '@infinitytaekwondo',
    locale: 'en_US',
  },

  // ----------------------------------------------------------------------------
  // 5. CONTACT ENDPOINTS & DOJANG BRANCH LOCATIONS
  // ----------------------------------------------------------------------------
  contact: {
    generalEmail: 'infinity.tkd.kh@gmail.com',
    supportEmail: 'infinity.tkd.kh@gmail.com',
    pressEmail: 'infinity.tkd.kh@gmail.com',
    hotlinePhone: '012 220 124',

    headquartersAddress: {
      facilityName: 'Olympic Branch (HQ)',
      street: 'National Olympic Stadium Complex, Charles de Gaulle Blvd',
      district: 'Khan 7 Makara',
      city: 'Phnom Penh',
      country: 'Cambodia',
      mapLocationUrl: 'https://maps.app.goo.gl/Qw3aSuaBCGiFAR6k8',
    },

    bkk1BranchAddress: {
      facilityName: 'Kouk Khleang Branch',
      street: 'Kouk Khleang, Sen Sok',
      district: 'Khan Sen Sok',
      city: 'Phnom Penh',
      country: 'Cambodia',
      mapLocationUrl: 'https://maps.app.goo.gl/QgYNFhQLwkuQB9LN8',
    },

    operatingHours: {
      weekdays: 'Tuesday – Friday: 09:00 AM – 08:00 PM (Kouk Khleang)',
      saturday: 'Saturday: 09:00 AM – 08:00 PM (Olympic & Kouk Khleang)',
      sunday: 'Sunday: 09:00 AM – 08:00 PM (Olympic & Kouk Khleang)',
    },
  },

  // ----------------------------------------------------------------------------
  // 6. SOCIAL MEDIA CHANNELS
  // ----------------------------------------------------------------------------
  socials: [
    {
      platform: 'Instagram',
      url: 'https://instagram.com/infinitytaekwondo',
      handle: '@infinitytaekwondo',
      ariaLabel: 'Follow Infinity Taekwondo on Instagram',
    },
    {
      platform: 'YouTube',
      url: 'https://youtube.com/@infinitytaekwondo',
      handle: '@infinitytaekwondo',
      ariaLabel: 'Subscribe to Infinity Taekwondo on YouTube',
    },
    {
      platform: 'Facebook',
      url: 'https://facebook.com/infinitytaekwondo',
      handle: 'Infinity Taekwondo Academy',
      ariaLabel: 'Like Infinity Taekwondo on Facebook',
    },
    {
      platform: 'LinkedIn',
      url: 'https://linkedin.com/company/infinitytaekwondo',
      handle: 'Infinity Taekwondo',
      ariaLabel: 'Connect with Infinity Taekwondo on LinkedIn',
    },
    {
      platform: 'TikTok',
      url: 'https://tiktok.com/@infinitytaekwondo',
      handle: '@infinitytkd',
      ariaLabel: 'Watch Infinity Taekwondo on TikTok',
    },
  ],

  // ----------------------------------------------------------------------------
  // 10. FRONTEND & HTTP SECURITY CONFIGURATION
  // ----------------------------------------------------------------------------
  security: {
    headers: {
      contentSecurityPolicy: {
        defaultSrc: ["'self'"],
        // 'unsafe-eval' is only needed by the dev server (React Refresh); never ship it to production.
        scriptSrc: ["'self'", ...(process.env.NODE_ENV === 'production' ? [] : ["'unsafe-eval'"]), "'unsafe-inline'"],
        // Fonts: Montserrat/Kantumruy are self-hosted by next/font; only Pretendard (Korean) comes from jsDelivr.
        styleSrc: ["'self'", "'unsafe-inline'", 'https://cdn.jsdelivr.net'],
        imgSrc: ["'self'", 'data:', 'blob:', 'https://images.unsplash.com', 'https://source.unsplash.com', 'https://i.ytimg.com', 'https://img.youtube.com'],
        fontSrc: ["'self'", 'https://cdn.jsdelivr.net', 'data:'],
        connectSrc: ["'self'", 'https://cdn.jsdelivr.net'],
        frameSrc: ["'self'", 'https://www.youtube-nocookie.com', 'https://www.youtube.com', 'https://www.google.com', 'https://maps.google.com'],
        frameAncestors: ["'none'"],
        baseUri: ["'self'"],
        formAction: ["'self'"],
        objectSrc: ["'none'"],
      },
      xFrameOptions: 'DENY',
      xContentTypeOptions: 'nosniff',
      referrerPolicy: 'strict-origin-when-cross-origin',
      permissionsPolicy:
        'camera=(), microphone=(), geolocation=(), payment=(), usb=(), browsing-topics=(), display-capture=()',
      strictTransportSecurity: 'max-age=63072000; includeSubDomains; preload',
      xXssProtection: '1; mode=block',
      crossOriginOpenerPolicy: 'same-origin',
      crossOriginResourcePolicy: 'same-origin',
    },

    inputSanitization: {
      stripHtmlTags: true,
      neutralizeScriptProtocols: true,
      preventCrlfInjection: true,
      maxInputLength: 2000,
      maxNameLength: 100,
      maxEmailLength: 254,
      maxPhoneLength: 25,
    },

    spamProtection: {
      enableHoneypotTrap: true,
      honeypotFieldName: 'hp_security_token',
      formCooldownSeconds: 3,
      maxSubmissionsPerHour: 10,
    },

    blockedPathPatterns: [
      '/\\.env',
      '/\\.git',
      '/\\.aws',
      '/\\.svn',
      '/\\.ds_store',
      '/\\.htaccess',
      '/\\.htpasswd',
      '/web\\.config',
      '/wp-admin',
      '/wp-login\\.php',
      '/wp-content',
      '/phpmyadmin',
      '/xmlrpc\\.php',
      '/eval-stdin\\.php',
      '^/actuator(?:/|$)',
      '^/server-status(?:/|$)',
      '/etc/passwd',
      '/etc/shadow',
      '/proc/self',
      '^/console(?:/|$)',
      '^/solr(?:/|$)',
      '^/telescope(?:/|$)',
      '\\.php$',
      '\\.sql$',
      '\\.bak$',
      '\\.config$',
      '\\.yml$',
      '\\.yaml$',
      '\\.ini$',
      '\\.log$',
      '\\.(tar|gz|zip|rar|7z)$',
    ],

    maliciousQueryPatterns: [
      '<script\\b',
      '<iframe\\b',
      '<embed\\b',
      '<object\\b',
      'javascript:',
      'vbscript:',
      'data:text/html',
      'union\\s+select',
      '\\bdrop\\b\\s+\\btable\\b',
      'waitfor\\s+delay',
      'sleep\\(\\s*\\d+\\s*\\)',
      '\\.\\.[\\\\/]',
      '%2e%2e[\\\\/]',
      'etc/passwd',
      'win\\.ini',
      'boot\\.ini',
      '\\bon[a-z]{3,15}\\s*=',
      'document\\.cookie',
      'document\\.domain',
      '__proto__',
      'constructor\\[',
      'constructor\\.',
      'prototype\\[',
      'prototype\\.',
      '__defineGetter__',
      '__lookupGetter__',
    ],
  },
}

/** Get full headquarters address string */
export const getHeadquartersFullAddress = () =>
  `${siteSettings.contact.headquartersAddress.street}, ${siteSettings.contact.headquartersAddress.district}, ${siteSettings.contact.headquartersAddress.city}, ${siteSettings.contact.headquartersAddress.country}`

/** Build formatted CSP header string */
export function buildCspHeader(isFigma = Boolean(process.env.FIGMA)): string {
  const csp = siteSettings.security.headers.contentSecurityPolicy
  const frameAncestors = isFigma
    ? ["'self'", 'https://*.figma.com', 'https://figma.com']
    : csp.frameAncestors

  return [
    `default-src ${csp.defaultSrc.join(' ')}`,
    `script-src ${csp.scriptSrc.join(' ')}`,
    `style-src ${csp.styleSrc.join(' ')}`,
    `img-src ${csp.imgSrc.join(' ')}`,
    `font-src ${csp.fontSrc.join(' ')}`,
    `connect-src ${csp.connectSrc.join(' ')}`,
    `frame-src ${csp.frameSrc.join(' ')}`,
    `frame-ancestors ${frameAncestors.join(' ')}`,
    `base-uri ${csp.baseUri.join(' ')}`,
    `form-action ${csp.formAction.join(' ')}`,
    `object-src ${csp.objectSrc.join(' ')}`,
    'upgrade-insecure-requests',
  ].join('; ')
}

export default siteSettings
