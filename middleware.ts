import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { siteSettings, buildCspHeader } from '@/config/siteSettings'

// Compile regex patterns from siteSettings
const BLOCKED_PATH_PATTERNS = siteSettings.security.blockedPathPatterns.map(
  (pattern) => new RegExp(pattern, 'i')
)

const MALICIOUS_QUERY_PATTERNS = siteSettings.security.maliciousQueryPatterns.map(
  (pattern) => new RegExp(pattern, 'i')
)

export function middleware(request: NextRequest) {
  const { pathname, search } = request.nextUrl

  // 1. Block probe scanners and sensitive configuration path access (403 Forbidden)
  for (const pattern of BLOCKED_PATH_PATTERNS) {
    if (pattern.test(pathname)) {
      return new NextResponse(
        JSON.stringify({ error: 'Access Denied', status: 403 }),
        {
          status: 403,
          headers: {
            'Content-Type': 'application/json',
            'X-Content-Type-Options': 'nosniff',
          },
        }
      )
    }
  }

  // 2. Detect & block malicious query payload attempts (XSS, SQLi, Path Traversal) (400 Bad Request)
  if (search) {
    try {
      const decodedQuery = decodeURIComponent(search)
      for (const pattern of MALICIOUS_QUERY_PATTERNS) {
        if (pattern.test(decodedQuery)) {
          return new NextResponse(
            JSON.stringify({ error: 'Malformed Request Detected', status: 400 }),
            {
              status: 400,
              headers: {
                'Content-Type': 'application/json',
                'X-Content-Type-Options': 'nosniff',
              },
            }
          )
        }
      }
    } catch {
      // Decode failed due to malformed URI sequence
      return new NextResponse(
        JSON.stringify({ error: 'Invalid URI Encoding', status: 400 }),
        {
          status: 400,
          headers: {
            'Content-Type': 'application/json',
            'X-Content-Type-Options': 'nosniff',
          },
        }
      )
    }
  }

  // 3. Prepare response with full HTTP Security Headers derived from siteSettings
  const response = NextResponse.next()
  const secHeaders = siteSettings.security.headers

  response.headers.set('Content-Security-Policy', buildCspHeader())
  response.headers.set('X-Frame-Options', secHeaders.xFrameOptions)
  response.headers.set('X-Content-Type-Options', secHeaders.xContentTypeOptions)
  response.headers.set('Referrer-Policy', secHeaders.referrerPolicy)
  response.headers.set('Permissions-Policy', secHeaders.permissionsPolicy)
  response.headers.set('Strict-Transport-Security', secHeaders.strictTransportSecurity)
  response.headers.set('X-XSS-Protection', secHeaders.xXssProtection)
  response.headers.set('Cross-Origin-Opener-Policy', secHeaders.crossOriginOpenerPolicy)
  response.headers.set('Cross-Origin-Resource-Policy', secHeaders.crossOriginResourcePolicy)

  return response
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for:
     * - _next/static (static chunks)
     * - _next/image (image optimization files)
     * - favicon.ico, logo.svg, etc. (static public assets)
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|woff|woff2)$).*)',
  ],
}
