/** @type {import('next').NextConfig} */
import path from 'path'
import { OPTIMIZED_IMAGE_REMOTE_PATTERNS } from './config/imageHosts.mjs'
import { UPLOADS_CONTENT_SECURITY_POLICY } from './config/uploadsPolicy.mjs'

const isFigma = Boolean(process.env.FIGMA)

const cspDirectives = [
  "default-src 'self'",
  // 'unsafe-eval' is only needed by the dev server (React Refresh).
  process.env.NODE_ENV === 'production' ? "script-src 'self' 'unsafe-inline'" : "script-src 'self' 'unsafe-eval' 'unsafe-inline'",
  "style-src 'self' 'unsafe-inline' https://cdn.jsdelivr.net",
  // Any https picture: editors paste links from Google Drive, Dropbox, Imgur and other sites. Same list as
  // config/siteSettings.ts (which proxy.ts sends); the trade-off is explained there.
  "img-src 'self' data: blob: https:",
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
  // `next build` type-checks the whole project. Keep it on: together with `npm run check:data` (run first by
  // `npm run build`) it is what stops a bad content edit from going live, because Vercel keeps the previous
  // deployment when a build fails.
  typescript: { ignoreBuildErrors: false },
  images: {
    // Qualities that <Image quality={...}> may request. Values not listed here are coerced to 75.
    qualities: [60, 65, 70, 75],
    // Remote images are resized/re-encoded on demand; cache the results for a week.
    minimumCacheTTL: 60 * 60 * 24 * 7,
    // The hosts Vercel's image optimizer may fetch from. One list, shared with lib/imageUrl.ts, with NO wildcard
    // host (that would make the site an open image proxy). See config/imageHosts.mjs before adding one.
    remotePatterns: OPTIMIZED_IMAGE_REMOTE_PATTERNS,
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
      {
        // Pictures saved through the content editor are only ever shown inside <img>. Opening one directly must not be
        // able to run anything, even if it is an SVG or HTML file committed by hand (later rule wins over the one above).
        source: '/uploads/:path*',
        headers: [{ key: 'Content-Security-Policy', value: UPLOADS_CONTENT_SECURITY_POLICY }],
      },
      {
        // The service worker script must never be served from a cache, or a fixed worker could not reach visitors.
        source: '/sw.js',
        headers: [
          { key: 'Cache-Control', value: 'no-cache, no-store, must-revalidate' },
          { key: 'Content-Type', value: 'application/javascript; charset=utf-8' },
        ],
      },
    ]
  },
  async rewrites() {
    // Browsers, link previews and crawlers still ask for /favicon.ico by default; answer with the PNG icon.
    return [{ source: '/favicon.ico', destination: '/icons/favicon-32.png' }]
  },
}

export default nextConfig
