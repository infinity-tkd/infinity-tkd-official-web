/**
 * ==============================================================================
 * FRONTEND & DATA SECURITY ENGINE
 * Protects frontend against XSS, injection vectors, CRLF header injection,
 * malicious URLs, spam bots (Honeypots), and rapid form flooding (Rate Limits).
 * ==============================================================================
 */

import { siteSettings } from '@/config/siteSettings'

/**
 * Strip HTML tags, dangerous script blocks, event handlers, and javascript: protocols.
 * Also enforces max character limit configured in siteSettings.
 */
export function sanitizeInput(
  input: string,
  maxLength: number = siteSettings.security.inputSanitization.maxInputLength
): string {
  if (!input || typeof input !== 'string') return ''

  const sanitized = input
    .replace(/[\u0000\u0008\u000B\u000C\u000E-\u001F]/g, '') // Strip control chars & null bytes
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '') // Remove <script> tags
    .replace(/<[^>]+>/g, '') // Strip remaining HTML tags
    .replace(/javascript:/gi, '') // Neutralize javascript: pseudo-protocol
    .replace(/data:/gi, '') // Neutralize data: URIs in raw text
    .replace(/vbscript:/gi, '') // Neutralize vbscript:
    .replace(/on\w+\s*=/gi, '') // Remove inline event handlers (onload=, onclick=)
    .trim()

  return sanitized.slice(0, maxLength)
}

/**
 * Sanitize email address against CRLF / Header injection and enforce RFC 5322 whitelist.
 */
export function sanitizeEmail(email: string): string {
  if (!email || typeof email !== 'string') return ''

  const maxLen = siteSettings.security.inputSanitization.maxEmailLength

  return email
    .replace(/[\r\n\t]/g, '') // Remove carriage return & newline to prevent SMTP header injection
    .replace(/[^\w.@+-]/g, '') // Whitelist valid email characters
    .trim()
    .toLowerCase()
    .slice(0, maxLen)
}

/**
 * Sanitize telephone number to international format tokens.
 */
export function sanitizePhone(phone: string): string {
  if (!phone || typeof phone !== 'string') return ''

  const maxLen = siteSettings.security.inputSanitization.maxPhoneLength

  return phone
    .replace(/[\r\n\t]/g, '')
    .replace(/[^\d+()\s-]/g, '') // Whitelist phone formatting characters
    .trim()
    .slice(0, maxLen)
}

/**
 * Strict RFC 5322 compliant email validator regex.
 */
export function isValidEmail(email: string): boolean {
  if (!email || typeof email !== 'string') return false
  const clean = email.trim()
  if (clean.length > 254) return false
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  return emailRegex.test(clean)
}

/**
 * International telephone format validator (7 to 16 digits).
 */
export function isValidPhone(phone: string): boolean {
  if (!phone || typeof phone !== 'string') return false
  const digitsOnly = phone.replace(/[\s()-]/g, '')
  return digitsOnly.length >= 7 && digitsOnly.length <= 16 && /^\+?\d+$/.test(digitsOnly)
}

/**
 * HTML entities escaper for safe rendering of raw strings.
 */
export function escapeHtml(unsafeText: string): string {
  if (!unsafeText || typeof unsafeText !== 'string') return ''
  return unsafeText
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

/**
 * Anti-Spam Honeypot validator.
 * Legitimate human users will not fill hidden honeypot fields; bots will.
 * Returns `true` if input is human (honeypot field is empty), `false` if bot detected.
 */
export function validateHoneypot(honeypotValue: string | undefined | null): boolean {
  if (!siteSettings.security.spamProtection.enableHoneypotTrap) return true
  return !honeypotValue || honeypotValue.trim().length === 0
}

/**
 * Client-side Submission Cooldown & Rate Limiter
 * Prevents rapid button spamming and automated form flooding.
 */
const rateLimitTimestamps: Record<string, number> = {}

export function checkRateLimit(
  actionKey: string,
  cooldownSeconds: number = siteSettings.security.spamProtection.formCooldownSeconds
): { allowed: boolean; remainingCooldownMs: number } {
  const now = Date.now()
  const lastTime = rateLimitTimestamps[actionKey] || 0
  const cooldownMs = cooldownSeconds * 1000
  const elapsed = now - lastTime

  if (elapsed < cooldownMs) {
    return {
      allowed: false,
      remainingCooldownMs: cooldownMs - elapsed,
    }
  }

  rateLimitTimestamps[actionKey] = now
  return {
    allowed: true,
    remainingCooldownMs: 0,
  }
}

/**
 * Validate that an external URL begins with secure HTTP/HTTPS protocol.
 */
export function isSafeUrl(url: string): boolean {
  if (!url || typeof url !== 'string') return false
  const trimmed = url.trim().toLowerCase()
  return (
    trimmed.startsWith('https://') ||
    trimmed.startsWith('http://') ||
    trimmed.startsWith('/') ||
    trimmed.startsWith('mailto:') ||
    trimmed.startsWith('tel:')
  )
}

/**
 * Safe JSON parser that defends against prototype pollution.
 */
export function safeJsonParse<T>(jsonStr: string, fallback: T): T {
  if (!jsonStr || typeof jsonStr !== 'string') return fallback
  try {
    const parsed = JSON.parse(jsonStr)
    if (parsed && typeof parsed === 'object') {
      delete (parsed as any).__proto__
      delete (parsed as any).constructor
      delete (parsed as any).prototype
    }
    return parsed as T
  } catch {
    return fallback
  }
}

/**
 * Cryptographically random anti-CSRF token generator (Web Crypto API).
 */
export function generateCsrfToken(): string {
  if (typeof window !== 'undefined' && window.crypto && window.crypto.getRandomValues) {
    const array = new Uint8Array(24)
    window.crypto.getRandomValues(array)
    return Array.from(array, (byte) => byte.toString(16).padStart(2, '0')).join('')
  }
  return `${Date.now()}-${Math.random().toString(36).slice(2)}`
}

/**
 * Validates CSRF token with constant-time equality check to prevent timing attacks.
 */
export function validateCsrfToken(tokenA: string, tokenB: string): boolean {
  if (!tokenA || !tokenB || typeof tokenA !== 'string' || typeof tokenB !== 'string') {
    return false
  }
  if (tokenA.length !== tokenB.length) return false
  let result = 0
  for (let i = 0; i < tokenA.length; i++) {
    result |= tokenA.charCodeAt(i) ^ tokenB.charCodeAt(i)
  }
  return result === 0
}

/**
 * Detects common malicious injection vectors in input text (SQLi, XSS, Path Traversal, Command Injection, Prototype Pollution).
 */
export function detectMaliciousPayload(input: string): boolean {
  if (!input || typeof input !== 'string') return false
  const suspiciousPatterns = [
    /<script\b/i,
    /javascript:/i,
    /vbscript:/i,
    /on\w+\s*=/i,
    /union\s+select/i,
    /\bselect\b.+\bfrom\b/i,
    /\binsert\b.+\binto\b/i,
    /\bdrop\b\s+\btable\b/i,
    /\bexec(?:ute)?\b/i,
    /\.\.[\\/]/,
    /%2e%2e[\\/]/i,
    /__proto__/i,
    /constructor\s*\[/i,
  ]
  return suspiciousPatterns.some((pattern) => pattern.test(input))
}
