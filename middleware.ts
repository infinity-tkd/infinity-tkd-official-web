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

// Allowed standard HTTP methods (prevents verb tampering, TRACE/XST, arbitrary DELETE)
const ALLOWED_METHODS = new Set(['GET', 'POST', 'HEAD', 'OPTIONS'])

// Known automated exploit scanners and vulnerability probe user-agents
const SCANNER_USER_AGENT_PATTERN =
  /(?:sqlmap|nikto|dirbuster|nuclei|masscan|wpscan|acunetix|havij|nmap|zgrab|gobuster|ffuf|curl-security|nessus|openvas|qualys|arachni|whatweb)/i

// Suspicious path traversal encodings (e.g. double encoded, slash variations)
const TRAVERSAL_PATTERN = /(?:\.\.[\\/]|%2e%2e[\\/]|%252e%252e|\.\.%2f|\.\.%5c)/i

export function middleware(request: NextRequest) {
  const { pathname, search } = request.nextUrl
  const userAgent = request.headers.get('user-agent') || ''

  // 1. Enforce allowed HTTP methods (blocks HTTP verb tampering & XST)
  if (!ALLOWED_METHODS.has(request.method)) {
    return new NextResponse(
      JSON.stringify({ error: `Method ${request.method} Not Allowed`, status: 405 }),
      {
        status: 405,
        headers: {
          'Content-Type': 'application/json',
          'Allow': 'GET, POST, HEAD, OPTIONS',
          'X-Content-Type-Options': 'nosniff',
        },
      }
    )
  }

  // 2. Reject proxy header override manipulation (prevents Next.js path spoofing bypasses)
  if (request.headers.get('x-rewrite-url') || request.headers.get('x-original-url')) {
    return new NextResponse(
      JSON.stringify({ error: 'Proxy header manipulation prohibited', status: 400 }),
      {
        status: 400,
        headers: {
          'Content-Type': 'application/json',
          'X-Content-Type-Options': 'nosniff',
        },
      }
    )
  }

  // 3. Strict CSRF Origin/Referer Verification on state-changing requests (CWE-346 immune)
  if (request.method === 'POST') {
    const origin = request.headers.get('origin')
    const referer = request.headers.get('referer')
    const host = request.headers.get('host')

    let sourceHost: string | null = null
    if (origin && origin !== 'null') {
      try {
        sourceHost = new URL(origin).host
      } catch {
        return new NextResponse(
          JSON.stringify({ error: 'Invalid Origin Header', status: 400 }),
          {
            status: 400,
            headers: {
              'Content-Type': 'application/json',
              'X-Content-Type-Options': 'nosniff',
            },
          }
        )
      }
    } else if (referer) {
      try {
        sourceHost = new URL(referer).host
      } catch {
        return new NextResponse(
          JSON.stringify({ error: 'Invalid Referer Header', status: 400 }),
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

    if (sourceHost && host) {
      const isSelfHost = sourceHost === host
      const isAllowedDomain =
        sourceHost === 'infinitytaekwondo.com' ||
        sourceHost.endsWith('.infinitytaekwondo.com') ||
        sourceHost.startsWith('localhost') ||
        sourceHost.startsWith('127.0.0.1')

      if (!isSelfHost && !isAllowedDomain) {
        return new NextResponse(
          JSON.stringify({ error: 'Cross-origin submission rejected', status: 403 }),
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
  }

  // 4. Block automated malicious vulnerability scanners by User-Agent (403 Forbidden)
  if (userAgent && SCANNER_USER_AGENT_PATTERN.test(userAgent)) {
    return new NextResponse(
      JSON.stringify({ error: 'Automated vulnerability scanning forbidden', status: 403 }),
      {
        status: 403,
        headers: {
          'Content-Type': 'application/json',
          'X-Content-Type-Options': 'nosniff',
        },
      }
    )
  }

  // 5. Block path traversal attempts in pathname (400 Bad Request)
  if (TRAVERSAL_PATTERN.test(pathname)) {
    return new NextResponse(
      JSON.stringify({ error: 'Directory Traversal Detected', status: 400 }),
      {
        status: 400,
        headers: {
          'Content-Type': 'application/json',
          'X-Content-Type-Options': 'nosniff',
        },
      }
    )
  }

  // 6. Block probe scanners and sensitive configuration path access (403 Forbidden)
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

  // 7. Detect & block malicious query payload attempts (XSS, SQLi, Prototype Pollution) (400 Bad Request)
  if (search) {
    try {
      const decodedQuery = decodeURIComponent(search)
      let doubleDecoded = decodedQuery
      try {
        doubleDecoded = decodeURIComponent(decodedQuery)
      } catch {
        // Double decode failed due to single % in legitimate query, ignore
      }

      for (const pattern of MALICIOUS_QUERY_PATTERNS) {
        if (pattern.test(decodedQuery) || pattern.test(doubleDecoded)) {
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

  // 8. Prepare response with full HTTP Security Headers derived from siteSettings
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
  response.headers.set('X-Permitted-Cross-Domain-Policies', 'none')
  response.headers.set('X-DNS-Prefetch-Control', 'on')

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
