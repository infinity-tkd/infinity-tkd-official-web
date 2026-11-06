/**
 * Minimal fixed-window, per-IP rate limiter for API routes.
 *
 * Limits are per server instance (in-memory). That is enough to blunt casual form spam;
 * on multi-instance/serverless hosting, back this with a shared store (e.g. Upstash Redis)
 * if you need a hard global limit.
 */

interface Bucket {
  count: number
  resetAt: number
}

const buckets = new Map<string, Bucket>()
const MAX_TRACKED_KEYS = 5_000

function prune(now: number) {
  for (const [key, bucket] of buckets) {
    if (bucket.resetAt <= now) buckets.delete(key)
  }
  // Hard ceiling so a flood of unique IPs cannot grow the map without bound.
  if (buckets.size > MAX_TRACKED_KEYS) buckets.clear()
}

export interface RateLimitOptions {
  /** Window length in milliseconds. Default: 60 seconds. */
  windowMs?: number
  /** Max requests allowed per window. Default: 5. */
  max?: number
}

export function isRateLimited(key: string, { windowMs = 60_000, max = 5 }: RateLimitOptions = {}): boolean {
  const now = Date.now()
  if (buckets.size > MAX_TRACKED_KEYS / 2) prune(now)

  const bucket = buckets.get(key)
  if (!bucket || bucket.resetAt <= now) {
    buckets.set(key, { count: 1, resetAt: now + windowMs })
    return false
  }

  if (bucket.count >= max) return true
  bucket.count += 1
  return false
}

/** Best-effort client IP from proxy headers. */
export function getClientIp(headers: Headers): string {
  return (
    headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    headers.get('x-real-ip') ||
    'unknown-ip'
  )
}
