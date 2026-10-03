import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#EF2F38', // Infinity TKD Primary Red
          red: '#EF2F38',     // Primary
          primary: '#EF2F38',
          // Light Tints
          50: '#FFEDEA',
          100: '#FFC9C3',
          200: '#FFB6AF',
          300: '#FFA49C',
          400: '#FF9189',
          500: '#EF2F38',
          // Dark Shades
          600: '#D0272F',
          700: '#B12027',
          800: '#94191F',
          900: '#781217',
          950: '#420608',
          // Supporting division accents
          orange: '#FF5733',  // Studio Accent
          purple: '#A855F7',  // Tech / Telemetry Accent
          green: '#09BB00',   // Sport Science / Growth Accent
          gray: '#D0D0D0',    // Brand Light Gray
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
      boxShadow: {
        'brand-glow': '0 0 25px -5px rgba(239, 47, 56, 0.5)',
        'brand-glow-lg': '0 0 40px -5px rgba(239, 47, 56, 0.6)',
      },
      animation: {
        'marquee': 'marquee 25s linear infinite',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.7s ease-out forwards',
        'slide-in-right': 'slideInRight 0.5s ease-out forwards',
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
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        }
      }
    },
  },
  plugins: [],
}

export default config
