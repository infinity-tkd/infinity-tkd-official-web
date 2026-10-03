/**
 * ==============================================================================
 * INFINITY TAEKWONDO — MASTER SITE SETTINGS & CENTRALIZED DESIGN SYSTEM CONFIG
 * ==============================================================================
 *
 * This is the SINGLE SOURCE OF TRUTH for all website configurations, design tokens,
 * layout rules, typography, button sizes, border radii, padding, margins,
 * and DARK MODE / LIGHT MODE theme color palettes.
 *
 * Changing any property in this file will uniformly update and control the appearance
 * and behavior of ALL pages, components, modals, and elements across the platform.
 *
 * Table of Contents:
 *   1. Brand Identity & Global Metadata
 *   2. SEO, OpenGraph & Social Sharing
 *   3. Centralized Design System & Theme Tokens:
 *      a. Dark & Light Mode Color Themes (Backgrounds, Surfaces, Borders, Text, Glows)
 *      b. Border Radii & Geometric Standard (10px–15px System)
 *      c. Typography Hierarchy & Text Size Classes
 *      d. Button Sizes & Interactive Variants
 *      e. Layout Containers, Spacing, Margins & Padding
 *      f. Pre-composed Surface & Component Box Styles
 *      g. Motion, Animation & Kinetic Easing
 *   4. Official Kukkiwon Belt Progression Palette
 *   5. Contact Endpoints & Dojang Branch Locations
 *   6. Social Media Channels
 *   7. Navigation Menus & Header Controls
 *   8. Footer Link Architecture
 *   9. Modular Feature Flags
 *  10. Frontend & HTTP Security Architecture
 *  11. Typed Helper Functions & UI Class Utilities
 *
 * ==============================================================================
 */

export type ThemeMode = 'dark' | 'light' | 'system'

export interface ColorPaletteConfig {
  /** Page Base Background */
  background: string
  /** Primary Card / Panel Surface */
  surface: string
  /** Elevated Floating Surface (Modals, Drawers, Dropdowns) */
  surfaceElevated: string
  /** Card Surface Background (Hex or RGBA with opacity) */
  card: string
  /** Sub-box / Inner Telemetry Background */
  subBox: string
  /** Standard Card / Divider Border */
  border: string
  /** Subtle Muted Border */
  borderMuted: string
  /** Primary High-Contrast Text */
  textPrimary: string
  /** Secondary Readable Body Text */
  textSecondary: string
  /** Muted Caption / Subtitle Text */
  textMuted: string
  /** Form Input Field Background */
  inputBackground: string
  /** Form Input Border */
  inputBorder: string
  /** Category Tag / Badge Background */
  tagBackground: string
  /** Glowing shadow / Aura token */
  glowRgba: string
}

export interface ButtonStyleConfig {
  /** Size classes (padding, font size, tracking, radius) */
  sizes: {
    xs: string
    sm: string
    md: string
    lg: string
    xl: string
  }
  /** Color & visual appearance variants */
  variants: {
    primary: string
    secondary: string
    outline: string
    ghost: string
    white: string
    dark: string
  }
}

export interface TypographyConfig {
  /** Font family declarations */
  fontSans: string
  fontKhmer: string
  fontChinese: string
  fontKorean: string
  lineHeightBase: number
  lineHeightKhmer: number
  lineHeightChinese: number
  lineHeightKorean: number

  /** Standardized Text Size & Hierarchy Classes */
  sizes: {
    /** Hero Banner Giant Display Header */
    heroDisplay: string
    /** Section Title H1 */
    h1: string
    /** Module / Sub-section Title H2 */
    h2: string
    /** Card Title H3 */
    h3: string
    /** Sub-box / Item Title H4 */
    h4: string
    /** Small Header H5 */
    h5: string
    /** Lead Body Paragraph (Hero Subtitles) */
    bodyLg: string
    /** Standard Body Paragraph */
    body: string
    /** Small Body / Descriptions */
    bodySm: string
    /** Monospace Captions & Telemetry */
    caption: string
    /** Category & Status Badges */
    badge: string
    /** Authentic Korean Hangul Subtitles */
    koreanSubtitle: string
  }
}

export interface RadiusConfig {
  /** No radius (square) */
  none: string
  /** Small element corners (6px) */
  sm: string
  /** Pill badges & rank tags (8px - 10px) */
  badge: string
  /** Small action buttons (8px - 10px) */
  buttonSm: string
  /** Standard buttons & interactive controls (12px) */
  button: string
  /** Large primary CTA buttons (12px - 14px) */
  buttonLg: string
  /** Form inputs, selects & textareas (12px) */
  input: string
  /** Feature & icon preview boxes (12px) */
  iconBox: string
  /** User / Coach avatars (12px) */
  avatar: string
  /** Sub-box & inner telemetry cards (12px) */
  subCard: string
  /** Main feature cards & containers (14px) */
  card: string
  /** Large section cards (14px - 16px) */
  cardLg: string
  /** Pop-up modals & dialog overlays (14px) */
  modal: string
  /** Main page bento containers (14px) */
  container: string
  /** Tab switchers and toggle bars (12px - 14px) */
  pill: string
}

export interface LayoutConfig {
  /** Standard page wrapper min-height & top/bottom spacing */
  pageWrapper: string
  /** Primary responsive container (1280px max with gutters) */
  container: string
  /** Narrow reading / form container (1024px max) */
  containerNarrow: string
  /** Compact modal / form container (768px max) */
  containerSmall: string
  /** Standard section header wrapper & margin-bottom */
  sectionHeader: string
  /** Responsive standard 3-column grid */
  gridStandard: string
  /** Responsive 2-column grid */
  gridTwoCol: string
  /** Responsive 4-column bento grid */
  gridBento: string
  /** Standard card internal padding */
  cardPadding: string
  /** Compact card internal padding */
  cardPaddingSm: string
  /** Modal internal padding */
  modalPadding: string
  /** Section vertical spacing */
  sectionSpacing: string
}

export interface SurfacesConfig {
  /** Standard box card with border and hover transition */
  mainCard: string
  /** Clickable interactive card with glow hover */
  interactiveCard: string
  /** Inner content sub-box (e.g. telemetry, notes) */
  subBox: string
  /** Inner elevated content box */
  subBoxElevated: string
  /** Standard form input / select / textarea */
  input: string
  /** Section hero top badge */
  heroBadge: string
  /** Active filter pill */
  filterPillActive: string
  /** Inactive filter pill */
  filterPillInactive: string
  /** Modal backdrop overlay */
  modalOverlay: string
  /** Modal dialog box */
  modalDialog: string
}

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

  /** Centralized Design System & Theme Tokens */
  theme: {
    /** Default Theme Mode on First Visit ('system' | 'dark' | 'light') */
    defaultMode: ThemeMode

    /** Brand Primary Colors & Glowing Tokens */
    brandColors: {
      /** Primary Brand Red */
      red: string
      /** Hover State Crimson Red */
      redHover: string
      /** Light Red Tint for Background Badges */
      redMuted: string
      /** Glowing Box Shadow RGBA */
      glow: string
      /** Large Neon Ambient Glow RGBA */
      glowLg: string
    }

    /** Supporting Division Accents */
    accentColors: {
      gold: string
      green: string
      blue: string
      purple: string
      orange: string
      gray: string
    }

    /** Dark Mode Color Palette Configuration */
    dark: ColorPaletteConfig

    /** Light Mode Color Palette Configuration */
    light: ColorPaletteConfig

    /** Backward Compatibility Color References */
    colors: {
      primary: string
      primaryHover: string
      primaryMuted: string
      accentGold: string
      accentGreen: string
      accentBlue: string
      accentPurple: string
      accentOrange: string
      dark: ColorPaletteConfig
      light: ColorPaletteConfig
      glowColorRgba: string
    }

    /** Border Radius & Corner Curvature Tokens (10px–15px rule) */
    radius: RadiusConfig

    /** Typography & Text Sizes */
    typography: TypographyConfig

    /** Button Sizes & Interactive Style Variants */
    buttons: ButtonStyleConfig

    /** Layout Spacing, Margins & Padding */
    layout: LayoutConfig

    /** Pre-composed Surface & Component Box Styles */
    surfaces: SurfacesConfig

    /** Animation Speeds & Motion Easing */
    motion: {
      enableAnimations: boolean
      durationFastMs: number
      durationNormalMs: number
      durationSlowMs: number
      durationCounterMs: number
      easingCurve: string
    }
  }

  /** Official 7-Rank Belt Palette */
  beltRanks: {
    id: string
    name: string
    koreanName: string
    hex: string
    borderHex: string
    meaning: string
    timeline: string
  }[]

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

  /** Main Header Navigation Links */
  navigation: {
    mainNav: {
      name: string
      path: string
      badge?: string
    }[]
    headerCta: {
      label: string
      path: string
    }
    externalLinks?: {
      store?: string
      blog?: string
    }
  }

  /** Footer Column Link Groups */
  footer: {
    tagline: string
    copyrightNotice: string
    linksGroup1Title: string
    linksGroup1: { label: string; href: string }[]
    linksGroup2Title: string
    linksGroup2: { label: string; href: string }[]
    linksGroup3Title: string
    linksGroup3: { label: string; href: string }[]
  }

  /** Modular Feature Flags */
  features: {
    enableDarkModeToggle: boolean
    enableLanguageSwitcher: boolean
    enableAnimatedCounters: boolean
    enableBeltProgressionSlider: boolean
    enableStudentSpotlightsModal: boolean
    enableCoachFacultyModal: boolean
    enableTrophyDetailModal: boolean
    enableCourseDetailModal: boolean
    enableIncubatorPitchForm: boolean
    enableCareerApplications: boolean
  }

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

// ------------------------------------------------------------------------------
// BRAND PRIMARY COLORS & ACCENTS
// ------------------------------------------------------------------------------
const brandColors = {
  red: '#EF2F38',
  redHover: '#D0272F',
  redMuted: 'rgba(239, 47, 56, 0.1)',
  glow: 'rgba(239, 47, 56, 0.5)',
  glowLg: 'rgba(239, 47, 56, 0.65)',
}

const accentColors = {
  gold: '#FFD505',
  green: '#09BB00',
  blue: '#0042EA',
  purple: '#A855F7',
  orange: '#FF5733',
  gray: '#D0D0D0',
}

// ------------------------------------------------------------------------------
// DARK MODE COLOR PALETTE (Infinite Obsidian Theme)
// ------------------------------------------------------------------------------
const darkModeConfig: ColorPaletteConfig = {
  background: '#000000',
  surface: '#09090B',
  surfaceElevated: '#18181B',
  card: 'rgba(24, 24, 27, 0.6)',
  subBox: '#09090B',
  border: '#27272A',
  borderMuted: '#18181B',
  textPrimary: '#FFFFFF',
  textSecondary: '#A1A1AA',
  textMuted: '#71717A',
  inputBackground: '#000000',
  inputBorder: '#27272A',
  tagBackground: '#27272A',
  glowRgba: 'rgba(239, 47, 56, 0.5)',
}

// ------------------------------------------------------------------------------
// LIGHT MODE COLOR PALETTE (Clean Titanium Minimalist Theme)
// ------------------------------------------------------------------------------
const lightModeConfig: ColorPaletteConfig = {
  background: '#FFFFFF',
  surface: '#FAFAFA',
  surfaceElevated: '#F4F4F5',
  card: '#FFFFFF',
  subBox: '#FAFAFA',
  border: '#E4E4E7',
  borderMuted: '#F4F4F5',
  textPrimary: '#09090B',
  textSecondary: '#52525B',
  textMuted: '#71717A',
  inputBackground: '#FAFAFA',
  inputBorder: '#E4E4E7',
  tagBackground: '#F4F4F5',
  glowRgba: 'rgba(239, 47, 56, 0.35)',
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
      'Olympic Sparring Kyorugi',
      'Kids Martial Arts Phnom Penh',
      'The Factory Phnom Penh Martial Arts',
    ],
    ogImage: '/logo.svg',
    favicon: '/favicon.svg',
    twitterHandle: '@infinitytaekwondo',
    locale: 'en_US',
  },

  // ----------------------------------------------------------------------------
  // 3. CENTRALIZED DESIGN SYSTEM & THEME TOKENS
  // ----------------------------------------------------------------------------
  theme: {
    defaultMode: 'system',
    brandColors,
    accentColors,
    dark: darkModeConfig,
    light: lightModeConfig,

    // Backward compatibility references
    colors: {
      primary: brandColors.red,
      primaryHover: brandColors.redHover,
      primaryMuted: brandColors.redMuted,
      accentGold: accentColors.gold,
      accentGreen: accentColors.green,
      accentBlue: accentColors.blue,
      accentPurple: accentColors.purple,
      accentOrange: accentColors.orange,
      dark: darkModeConfig,
      light: lightModeConfig,
      glowColorRgba: brandColors.glow,
    },

    /**
     * Border Radius & Corner Shapes (10px–15px standard across platform)
     * All components follow these clean, modern, standardized radii.
     */
    radius: {
      none: 'rounded-none',
      sm: 'rounded-md',          // 6px
      badge: 'rounded-lg',       // 8px (Pills, badges, rank tags)
      buttonSm: 'rounded-lg',    // 8px-10px (Small buttons)
      button: 'rounded-xl',      // 12px (Standard buttons)
      buttonLg: 'rounded-xl',    // 12px (Large primary buttons)
      input: 'rounded-xl',       // 12px (Form inputs & textareas)
      iconBox: 'rounded-xl',     // 12px (Icon preview boxes)
      avatar: 'rounded-xl',      // 12px (User & coach photos)
      subCard: 'rounded-xl',     // 12px (Sub-boxes, telemetry cards)
      card: 'rounded-[14px]',    // 14px (Main cards, bento blocks)
      cardLg: 'rounded-[14px]',  // 14px (Large section blocks)
      modal: 'rounded-[14px]',   // 14px (Modals & popups)
      container: 'rounded-[14px]', // 14px (Page containers)
      pill: 'rounded-xl',        // 12px (Tab switchers)
    },

    /**
     * Typography & Text Size Standards
     */
    typography: {
      fontSans: 'var(--font-montserrat), Montserrat, -apple-system, sans-serif',
      fontKhmer: "'Kantumruy Pro', sans-serif",
      fontChinese: "'Noto Sans SC', sans-serif",
      fontKorean: "'Noto Sans KR', sans-serif",
      lineHeightBase: 1.6,
      lineHeightKhmer: 1.65,
      lineHeightChinese: 1.65,
      lineHeightKorean: 1.6,

      sizes: {
        heroDisplay: 'text-4xl sm:text-6xl md:text-8xl font-black uppercase tracking-tight leading-none',
        h1: 'text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight',
        h2: 'text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight',
        h3: 'text-xl sm:text-2xl font-black uppercase tracking-tight',
        h4: 'text-lg sm:text-xl font-bold uppercase tracking-tight',
        h5: 'text-base font-bold uppercase tracking-tight',
        bodyLg: 'text-base sm:text-lg md:text-xl font-light leading-relaxed',
        body: 'text-sm sm:text-base font-light leading-relaxed',
        bodySm: 'text-xs sm:text-sm font-light leading-relaxed',
        caption: 'text-xs font-mono',
        badge: 'text-[10px] sm:text-xs font-bold uppercase tracking-widest',
        koreanSubtitle: 'text-xs sm:text-sm font-mono font-bold text-brand-red uppercase tracking-wider',
      },
    },

    /**
     * Button Sizes & Interactive Style Variants
     */
    buttons: {
      sizes: {
        xs: 'px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded-lg',
        sm: 'px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider rounded-lg',
        md: 'px-5 py-2.5 text-xs font-bold uppercase tracking-widest rounded-xl',
        lg: 'px-6 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-widest rounded-xl',
        xl: 'px-8 py-4 text-xs sm:text-sm font-black uppercase tracking-widest rounded-xl',
      },
      variants: {
        primary:
          'bg-brand-red text-white hover:bg-zinc-900 transition-all duration-300 shadow-brand-glow hover:shadow-brand-glow-lg',
        secondary:
          'bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white border border-zinc-200 dark:border-zinc-800 hover:border-brand-red/50 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all duration-300',
        outline:
          'border border-brand-red text-brand-red hover:bg-brand-red hover:text-white transition-all duration-300',
        ghost:
          'text-zinc-600 dark:text-zinc-400 hover:text-brand-red dark:hover:text-brand-red hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-all duration-300',
        white:
          'bg-white text-black hover:bg-brand-red hover:text-white transition-all duration-300 shadow-lg',
        dark:
          'bg-zinc-900 text-white hover:bg-brand-red transition-all duration-300 shadow-md',
      },
    },

    /**
     * Layout Spacing, Margins & Padding Standards
     */
    layout: {
      pageWrapper: 'min-h-screen pt-20 sm:pt-24 pb-20',
      container: 'container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl',
      containerNarrow: 'container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl',
      containerSmall: 'container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl',
      sectionHeader: 'text-center max-w-3xl mx-auto pt-8 sm:pt-12 mb-12 sm:mb-16',
      gridStandard: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8',
      gridTwoCol: 'grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8',
      gridBento: 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6',
      cardPadding: 'p-6 sm:p-8 md:p-10',
      cardPaddingSm: 'p-4 sm:p-6',
      modalPadding: 'p-6 sm:p-8 md:p-10',
      sectionSpacing: 'space-y-16 sm:space-y-24 py-16 sm:py-24',
    },

    /**
     * Pre-composed Box Surfaces & UI Components
     */
    surfaces: {
      mainCard:
        'rounded-[14px] bg-white dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 shadow-sm hover:border-brand-red/40 hover:shadow-xl transition-all duration-300',
      interactiveCard:
        'rounded-[14px] bg-white dark:bg-zinc-900/70 border border-zinc-200 dark:border-zinc-800 shadow-sm hover:border-brand-red hover:shadow-brand-glow hover:-translate-y-0.5 transition-all duration-300 cursor-pointer',
      subBox:
        'rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-100 dark:border-zinc-800/80',
      subBoxElevated:
        'rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800',
      input:
        'w-full bg-zinc-50 dark:bg-black border border-zinc-200 dark:border-zinc-800 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red transition-all placeholder:text-zinc-400 dark:placeholder:text-zinc-600 text-zinc-900 dark:text-white',
      heroBadge:
        'inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl border border-brand-red/30 bg-brand-red/10 text-brand-red text-xs font-bold uppercase tracking-widest mb-4 backdrop-blur-md',
      filterPillActive:
        'px-3.5 sm:px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider bg-brand-red text-white shadow-brand-glow transition-all duration-300 cursor-pointer',
      filterPillInactive:
        'px-3.5 sm:px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-700 transition-all duration-300 cursor-pointer',
      modalOverlay:
        'fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-2xl animate-fade-in',
      modalDialog:
        'relative w-full max-w-4xl bg-white dark:bg-zinc-950 shadow-2xl rounded-[14px] border border-zinc-200 dark:border-zinc-800 overflow-hidden max-h-[90vh] flex flex-col z-10 animate-fade-in-up',
    },

    motion: {
      enableAnimations: true,
      durationFastMs: 200,
      durationNormalMs: 350,
      durationSlowMs: 500,
      durationCounterMs: 1800,
      easingCurve: 'cubic-bezier(0.16, 1, 0.3, 1)',
    },
  },

  // ----------------------------------------------------------------------------
  // 4. BELT PROGRESSION PALETTE & DAN RANKS
  // ----------------------------------------------------------------------------
  beltRanks: [
    {
      id: 'white',
      name: 'White Belt (10th-9th Geup)',
      koreanName: '백띠 (White Belt)',
      hex: '#FFFFFF',
      borderHex: '#D0D0D0',
      meaning: 'Innocence & Purity — Represents the blank slate and fertile soil where martial discipline is first planted.',
      timeline: '2-3 Months',
    },
    {
      id: 'yellow',
      name: 'Yellow Belt (8th-7th Geup)',
      koreanName: '노란띠 (Yellow Belt)',
      hex: '#FFD505',
      borderHex: '#D4AF37',
      meaning: 'The Rising Sun — The earth where the seed sprouts and reaches upward toward martial enlightenment.',
      timeline: '3-4 Months',
    },
    {
      id: 'green',
      name: 'Green Belt (6th-5th Geup)',
      koreanName: '초록띠 (Green Belt)',
      hex: '#09BB00',
      borderHex: '#078800',
      meaning: 'Growth & Vitality — The tree developing leaves as technical precision and kinetic power take firm root.',
      timeline: '4-6 Months',
    },
    {
      id: 'blue',
      name: 'Blue Belt (4th-3rd Geup)',
      koreanName: '파란띠 (Blue Belt)',
      hex: '#0042EA',
      borderHex: '#002BB0',
      meaning: 'The Boundless Sky — The tree reaching toward the heavens as training matures into fluid mastery.',
      timeline: '6-8 Months',
    },
    {
      id: 'brown',
      name: 'Brown Belt (2nd-1st Geup)',
      koreanName: '밤띠 (Brown Belt)',
      hex: '#A05B00',
      borderHex: '#6F3E00',
      meaning: 'Ripening & Solidity — Deep roots anchoring the athlete in tactical patience, sparring strategy, and honor.',
      timeline: '6-8 Months',
    },
    {
      id: 'red',
      name: 'Red Belt (Candidate Dan)',
      koreanName: '빨간띠 (Red Belt)',
      hex: '#EF2F38',
      borderHex: '#B12027',
      meaning: 'Danger & Self-Control — Immense physical power requiring supreme mental restraint and unwavering humility.',
      timeline: '8-12 Months',
    },
    {
      id: 'black',
      name: 'Black Belt (1st-5th Dan)',
      koreanName: '검은띠 (Black Belt)',
      hex: '#000000',
      borderHex: '#333333',
      meaning: 'Mastery & Beginning — Total synthesis of darkness and light, signifying the end of one journey and the dawn of true leadership.',
      timeline: '3-4+ Years',
    },
  ],

  // ----------------------------------------------------------------------------
  // 5. CONTACT ENDPOINTS & DOJANG BRANCH LOCATIONS
  // ----------------------------------------------------------------------------
  contact: {
    generalEmail: 'contact@infinitytaekwondo.com',
    supportEmail: 'admissions@infinitytaekwondo.com',
    pressEmail: 'press@infinitytaekwondo.com',
    hotlinePhone: '+855 12 345 678',

    headquartersAddress: {
      facilityName: 'The Factory Phnom Penh (HQ)',
      street: 'Urban Village, National Road 2, Chak Angre Leu',
      district: 'Meanchey',
      city: 'Phnom Penh',
      country: 'Cambodia',
      mapLocationUrl: 'https://maps.google.com/?q=The+Factory+Phnom+Penh',
    },

    bkk1BranchAddress: {
      facilityName: 'BKK1 Elite Training Center',
      street: 'Street 302, Boeung Keng Kang 1',
      district: 'Chamkarmon',
      city: 'Phnom Penh',
      country: 'Cambodia',
      mapLocationUrl: 'https://maps.google.com/?q=BKK1+Phnom+Penh',
    },

    operatingHours: {
      weekdays: 'Monday – Friday: 06:00 AM – 09:00 PM',
      saturday: 'Saturday: 07:00 AM – 07:00 PM',
      sunday: 'Sunday: 08:00 AM – 05:00 PM',
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
  // 7. HEADER NAVIGATION
  // ----------------------------------------------------------------------------
  navigation: {
    mainNav: [
      { name: 'Academy', path: '/academy' },
      { name: 'Curriculum Library', path: '/library' },
      { name: 'Coaches & Students', path: '/community' },
      { name: 'Achievements', path: '/achievements' },
      { name: 'Memberships', path: '/pricing' },
      { name: 'About Philosophy', path: '/about' },
    ],
    headerCta: {
      label: 'Book Free Trial',
      path: '/contact',
    },
    externalLinks: {
      store: '#', // Future Store address (Shopify/WooCommerce)
      blog: '#', // Future Blog address
    },
  },

  // ----------------------------------------------------------------------------
  // 8. FOOTER LINK GROUPS (Restructured 3-Column Architecture)
  // ----------------------------------------------------------------------------
  footer: {
    tagline: 'Empowering boundless potential from white belt to black belt mastery.',
    copyrightNotice: `© ${new Date().getFullYear()} Infinity Taekwondo. All rights reserved.`,

    linksGroup1Title: 'Academy & Training',
    linksGroup1: [
      { label: 'Academy Syllabus', href: '/academy' },
      { label: 'Coaches & Students', href: '/community' },
      { label: 'Achievements & Medals', href: '/achievements' },
      { label: 'Memberships & Pricing', href: '/pricing' },
      { label: 'About Our Philosophy', href: '/about' },
      { label: 'Global Collaborations', href: '/collaborations' },
    ],

    linksGroup2Title: 'Branches & Community',
    linksGroup2: [
      { label: 'Dojang Branches (2 Locations)', href: '/locations' },
      { label: 'Join Our Coaching Staff', href: '/join-team' },
      { label: 'Student Project Incubator', href: '/incubator' },
      { label: 'Official Pro Shop & Gear', href: '#' },
      { label: 'Martial Journal & Blog', href: '#' },
      { label: 'Book A Free Trial', href: '/contact' },
    ],

    linksGroup3Title: 'Governance, Ethics & Policy',
    linksGroup3: [
      { label: 'Safeguarding & Safe Sport', href: '/safeguarding' },
      { label: 'Anti-Doping & Clean Sport', href: '/anti-doping' },
      { label: 'Equality, Diversity & Inclusion', href: '/equality' },
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
    ],
  },

  // ----------------------------------------------------------------------------
  // 9. MODULAR FEATURE FLAGS
  // ----------------------------------------------------------------------------
  features: {
    enableDarkModeToggle: true,
    enableLanguageSwitcher: true,
    enableAnimatedCounters: true,
    enableBeltProgressionSlider: true,
    enableStudentSpotlightsModal: true,
    enableCoachFacultyModal: true,
    enableTrophyDetailModal: true,
    enableCourseDetailModal: true,
    enableIncubatorPitchForm: true,
    enableCareerApplications: true,
  },

  // ----------------------------------------------------------------------------
  // 10. FRONTEND & HTTP SECURITY CONFIGURATION
  // ----------------------------------------------------------------------------
  security: {
    headers: {
      contentSecurityPolicy: {
        defaultSrc: ["'self'"],
        scriptSrc: ["'self'", "'unsafe-eval'", "'unsafe-inline'"],
        styleSrc: ["'self'", "'unsafe-inline'", 'https://fonts.googleapis.com', 'https://cdn.jsdelivr.net'],
        imgSrc: ["'self'", 'data:', 'blob:', 'https://images.unsplash.com', 'https://source.unsplash.com', 'https://i.ytimg.com', 'https://img.youtube.com'],
        fontSrc: ["'self'", 'https://fonts.gstatic.com', 'https://cdn.jsdelivr.net', 'data:'],
        connectSrc: ["'self'", 'https://fonts.googleapis.com', 'https://fonts.gstatic.com', 'https://cdn.jsdelivr.net'],
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
        'camera=(), microphone=(), geolocation=(), payment=(), usb=(), interest-cohort=(), display-capture=(), battery=()',
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
      '/actuator',
      '/server-status',
      '/etc/passwd',
      '/etc/shadow',
      '/proc/self',
      '\\.php$',
      '\\.sql$',
      '\\.bak$',
      '\\.config$',
      '\\.yml$',
      '\\.yaml$',
      '\\.ini$',
      '\\.log$',
    ],

    maliciousQueryPatterns: [
      '<script\\b',
      'javascript:',
      'union\\s+select',
      '\\bselect\\b.+\\bfrom\\b',
      '\\binsert\\b.+\\binto\\b',
      '\\bdrop\\b\\s+\\btable\\b',
      '\\b(?:exec|execute)\\b',
      '\\.\\.[\\\\/]',
      '%2e%2e[\\\\/]',
      'etc/passwd',
      'onload\\s*=',
      'onerror\\s*=',
      '__proto__',
      'constructor\\[',
      'constructor\\.',
    ],
  },
}

/**
 * ==============================================================================
 * 11. TYPED HELPER FUNCTIONS & UI CLASS UTILITIES
 * ==============================================================================
 */

/** Get primary brand red color */
export const getBrandColor = () => siteSettings.theme.brandColors.red

/** Get theme colors by active mode */
export function getThemeColors(mode: 'dark' | 'light' = 'dark'): ColorPaletteConfig {
  return mode === 'light' ? siteSettings.theme.light : siteSettings.theme.dark
}

/** Get button class by variant and size */
export function getButtonClass(
  variant: keyof typeof siteSettings.theme.buttons.variants = 'primary',
  size: keyof typeof siteSettings.theme.buttons.sizes = 'md',
  extraClasses = ''
): string {
  const variantClass = siteSettings.theme.buttons.variants[variant] || siteSettings.theme.buttons.variants.primary
  const sizeClass = siteSettings.theme.buttons.sizes[size] || siteSettings.theme.buttons.sizes.md
  return `${sizeClass} ${variantClass} inline-flex items-center justify-center gap-2 cursor-pointer ${extraClasses}`.trim()
}

/** Get pre-configured card surface class */
export function getCardClass(
  variant: 'main' | 'interactive' | 'sub' | 'subElevated' = 'main',
  extraClasses = ''
): string {
  let base = siteSettings.theme.surfaces.mainCard
  if (variant === 'interactive') base = siteSettings.theme.surfaces.interactiveCard
  if (variant === 'sub') base = siteSettings.theme.surfaces.subBox
  if (variant === 'subElevated') base = siteSettings.theme.surfaces.subBoxElevated
  return `${base} ${extraClasses}`.trim()
}

/** Get pre-configured text hierarchy class */
export function getTextClass(
  level: keyof typeof siteSettings.theme.typography.sizes,
  extraClasses = ''
): string {
  const textClass = siteSettings.theme.typography.sizes[level] || siteSettings.theme.typography.sizes.body
  return `${textClass} ${extraClasses}`.trim()
}

/** Get standard form input class */
export const getInputClass = (extraClasses = '') =>
  `${siteSettings.theme.surfaces.input} ${extraClasses}`.trim()

/** Get standard layout wrapper class */
export const getLayoutClass = (type: keyof typeof siteSettings.theme.layout) =>
  siteSettings.theme.layout[type] || siteSettings.theme.layout.container

/** Get full headquarters address string */
export const getHeadquartersFullAddress = () =>
  `${siteSettings.contact.headquartersAddress.street}, ${siteSettings.contact.headquartersAddress.district}, ${siteSettings.contact.headquartersAddress.city}, ${siteSettings.contact.headquartersAddress.country}`

/** Build formatted CSP header string */
export function buildCspHeader(): string {
  const csp = siteSettings.security.headers.contentSecurityPolicy
  return [
    `default-src ${csp.defaultSrc.join(' ')}`,
    `script-src ${csp.scriptSrc.join(' ')}`,
    `style-src ${csp.styleSrc.join(' ')}`,
    `img-src ${csp.imgSrc.join(' ')}`,
    `font-src ${csp.fontSrc.join(' ')}`,
    `connect-src ${csp.connectSrc.join(' ')}`,
    `frame-src ${csp.frameSrc.join(' ')}`,
    `frame-ancestors ${csp.frameAncestors.join(' ')}`,
    `base-uri ${csp.baseUri.join(' ')}`,
    `form-action ${csp.formAction.join(' ')}`,
    `object-src ${csp.objectSrc.join(' ')}`,
    'upgrade-insecure-requests',
  ].join('; ')
}

export default siteSettings
