/**
 * Shared plumbing for the public form endpoints (contact, join-team, incubator):
 * origin check, rate limit, JSON parsing and consistent JSON error responses.
 */

import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getClientIp, isRateLimited } from '@/lib/rateLimit'
import type { DispatchResult } from '@/lib/notify'

export const FALLBACK_CONTACT_HINT =
  'We could not deliver your message right now. Please reach us on WhatsApp or by phone instead.'

export function jsonError(message: string, status: number, headers?: HeadersInit) {
  return NextResponse.json({ error: message }, { status, headers })
}

export function jsonOk(message: string) {
  return NextResponse.json({ success: true, message }, { status: 200, headers: { 'Cache-Control': 'no-store' } })
}

function isLocalHostname(hostname: string): boolean {
  return hostname === 'localhost' || hostname === '127.0.0.1' || hostname === '[::1]' || hostname.endsWith('.localhost')
}

/**
 * Rejects cross-site submissions. Returns an error response, or `null` when the request is allowed.
 * Compares full hostnames (not substrings), so `evil-localhost.com` is not treated as local.
 */
export function rejectCrossOrigin(request: NextRequest): NextResponse | null {
  if (request.headers.get('sec-fetch-site') === 'cross-site') {
    return jsonError('Forbidden cross-origin request.', 403)
  }

  const origin = request.headers.get('origin')
  const host = request.headers.get('host')
  if (origin && host) {
    try {
      const originUrl = new URL(origin)
      if (originUrl.host !== host && !isLocalHostname(originUrl.hostname)) {
        return jsonError('Unauthorized origin.', 403)
      }
    } catch {
      return jsonError('Malformed origin header.', 400)
    }
  }
  return null
}

export function rejectIfRateLimited(request: NextRequest, scope: string): NextResponse | null {
  const ip = getClientIp(request.headers)
  if (isRateLimited(`${scope}:${ip}`, { max: 5, windowMs: 60_000 })) {
    return jsonError('Too many requests. Please wait a moment before trying again.', 429, { 'Retry-After': '60' })
  }
  return null
}

export async function readJsonBody(request: NextRequest): Promise<Record<string, unknown> | null> {
  try {
    const body = await request.json()
    return body && typeof body === 'object' && !Array.isArray(body) ? (body as Record<string, unknown>) : null
  } catch {
    return null
  }
}

/** Coerces an unknown JSON value to a string ('' when missing or not a string). */
export function str(value: unknown): string {
  return typeof value === 'string' ? value : ''
}

/** Maps a failed dispatch to the response the visitor should see. */
export function dispatchFailureResponse(result: Extract<DispatchResult, { ok: false }>) {
  return jsonError(FALLBACK_CONTACT_HINT, result.reason === 'not-configured' ? 503 : 502)
}
