/** @type {import('next').NextConfig} */
import path from 'path'

const isFigma = Boolean(process.env.FIGMA)

const cspDirectives = [
  "default-src 'self'",
  // 'unsafe-eval' is only needed by the dev server (React Refresh).
  process.env.NODE_ENV === 'production' ? "script-src 'self' 'unsafe-inline'" : "script-src 'self' 'unsafe-eval' 'unsafe-inline'",
  "style-src 'self' 'unsafe-inline' https://cdn.jsdelivr.net",
  "img-src 'self' data: blob: https://images.unsplash.com https://source.unsplash.com https://i.ytimg.com https://img.youtube.com",
  "font-src 'self' https://cdn.jsdelivr.net data:",
  "connect-src 'self' https://cdn.jsdelivr.net",
  "frame-src 'self' https://www.youtube-nocookie.com https://www.youtube.com https://www.google.com https://maps.google.com",
  isFigma ? "frame-ancestors 'self' https://*.figma.com https://figma.com" : "frame-ancestors 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "object-src 'none'",
  'upgrade-insecure-requests',
]

const securityHeaders = [
  {
    key: 'Content-Security-Policy',
    value: cspDirectives.join('; '),
  },
  ...(isFigma
    ? []
    : [
        {
          key: 'X-Frame-Options',
          value: 'DENY',
        },
      ]),
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  {
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin',
  },
  {
    key: 'Permissions-Policy',
    value:
      'camera=(), microphone=(), geolocation=(), payment=(), usb=(), display-capture=()',
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload',
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block',
  },
  {
    key: 'Cross-Origin-Opener-Policy',
    value: 'same-origin',
  },
  {
    key: 'Cross-Origin-Resource-Policy',
    value: 'same-origin',
  },
]

const nextConfig = {
  turbopack: {
    root: path.resolve('.'),
  },
  poweredByHeader: false,
  reactStrictMode: true,
  images: {
    // Qualities that <Image quality={...}> may request. Values not listed here are coerced to 75.
    qualities: [60, 65, 70, 75],
    // Remote images are resized/re-encoded on demand; cache the results for a week.
    minimumCacheTTL: 60 * 60 * 24 * 7,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'source.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'i.ytimg.com',
      },
      {
        protocol: 'https',
        hostname: 'img.youtube.com',
      },
    ],
  },
  env: {
    NEXT_PUBLIC_CMS_URL: process.env.NEXT_PUBLIC_CMS_URL || '',
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
    ]
  },
  async rewrites() {
    // Browsers, link previews and crawlers still ask for /favicon.ico by default; answer with the generated PNG icon.
    return [{ source: '/favicon.ico', destination: '/icon' }]
  },
}

export default nextConfig
