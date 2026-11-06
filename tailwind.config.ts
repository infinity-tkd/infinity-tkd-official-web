import type { Config } from 'tailwindcss'

/**
 * Infinity Taekwondo design tokens.
 *
 * The radius, type-scale and weight values below intentionally override Tailwind's defaults so the
 * whole site (including pages that hand-write their class strings) follows one system:
 *
 *   Radius (7-10px only)
 *     rounded-2xl / rounded-3xl  10px  cards, panels, modals, images, banners
 *     rounded-xl                  8px  buttons, inputs, dropdown rows, icon tiles, inner boxes
 *     rounded-lg / md / DEFAULT   7px  badges, chips, tags, small swatches
 *     rounded-sm                  2px  micro graphics only (belt stripes, 6px markers)
 *     rounded-full                     true circles (avatars, dots, progress rings)
 *
 *   Display type is compressed ~30% at the top end for a calmer, more premium hierarchy
 *   (home hero 80px, page titles 64px, section titles 48-56px on desktop).
 */
const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    borderRadius: {
      none: '0px',
      sm: '2px',
      DEFAULT: '7px',
      md: '7px',
      lg: '7px',
      xl: '8px',
      '2xl': '10px',
      '3xl': '10px',
      full: '9999px',
    },
    extend: {
      colors: {
        brand: {
          DEFAULT: '#EF2F38', // Infinity TKD Primary Red
          red: '#EF2F38',
          primary: '#EF2F38',
          text: 'var(--color-brand-text)', // Accessible high-contrast text color
          50: '#FFEDEA',
          100: '#FFC9C3',
          200: '#FFB6AF',
          300: '#FFA49C',
          400: '#FF9189',
          500: '#EF2F38',
          600: '#D0272F',
          700: '#B12027',
          800: '#94191F',
          900: '#781217',
          950: '#420608',
          // Supporting division accents
          orange: '#FF5733', // Studio
          purple: '#A855F7', // Tech / Telemetry
          green: '#09BB00', // Sport Science / Growth
          gray: '#D0D0D0',
        },
        belt: {
          white: '#FFFFFF',
          yellow: '#FFD505',
          green: '#09BB00',
          blue: '#0042EA',
          brown: '#A05B00',
          red: '#EF2F38',
          black: '#000000',
        },
      },
      fontFamily: {
        sans: ['var(--font-montserrat)', 'Montserrat', 'sans-serif'],
        display: ['var(--font-montserrat)', 'Montserrat', 'sans-serif'],
      },
      // Compressed display scale (Tailwind default in comments).
      fontSize: {
        '2xl': ['1.375rem', { lineHeight: '1.875rem' }], // 22px (24)
        '3xl': ['1.75rem', { lineHeight: '2.125rem' }], //  28px (30)
        '4xl': ['2rem', { lineHeight: '2.375rem' }], //     32px (36)
        '5xl': ['2.5rem', { lineHeight: '1.05' }], //       40px (48)
        '6xl': ['3rem', { lineHeight: '1.02' }], //         48px (60)
        '7xl': ['3.5rem', { lineHeight: '1' }], //          56px (72)
        '8xl': ['4rem', { lineHeight: '1' }], //            64px (96)
        '9xl': ['5rem', { lineHeight: '1' }], //            80px (128)
      },
      // "Black" headings render at 800: still bold and athletic, less shouty than 900.
      fontWeight: {
        black: '800',
      },
      // Soft directional glow instead of a neon halo.
      boxShadow: {
        'brand-glow': '0 10px 28px -14px rgba(239, 47, 56, 0.55)',
        'brand-glow-lg': '0 16px 40px -16px rgba(239, 47, 56, 0.6)',
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      animation: {
        marquee: 'marquee 25s linear infinite',
        'fade-in': 'fadeIn 0.35s cubic-bezier(0.16, 1, 0.3, 1) both',
        'fade-in-up': 'fadeInUp 0.45s cubic-bezier(0.16, 1, 0.3, 1) both',
        'slide-in-right': 'slideInRight 0.4s cubic-bezier(0.16, 1, 0.3, 1) both',
        'pulse-slow': 'pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', translate: '0 12px' },
          '100%': { opacity: '1', translate: '0 0' },
        },
        slideInRight: {
          '0%': { opacity: '0', translate: '16px 0' },
          '100%': { opacity: '1', translate: '0 0' },
        },
      },
    },
  },
  plugins: [],
}

export default config
