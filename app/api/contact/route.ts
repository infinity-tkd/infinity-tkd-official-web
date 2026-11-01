import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import {
  sanitizeInput,
  sanitizeEmail,
  isValidEmail,
  validateHoneypot,
  detectMaliciousPayload,
} from '@/lib/security'

// In-memory rate limiting map for API endpoint (IP-based, sliding window)
const ipRateLimitMap = new Map<string, { count: number; expiresAt: number }>()
const RATE_LIMIT_WINDOW_MS = 60 * 1000 // 1 minute
const MAX_REQUESTS_PER_WINDOW = 5

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const entry = ipRateLimitMap.get(ip)

  if (!entry || entry.expiresAt < now) {
    ipRateLimitMap.set(ip, { count: 1, expiresAt: now + RATE_LIMIT_WINDOW_MS })
    return false
  }

  if (entry.count >= MAX_REQUESTS_PER_WINDOW) {
    return true
  }

  entry.count += 1
  return false
}

export async function POST(request: NextRequest) {
  try {
    // 1. IP extraction & Rate limiting
    const ip =
      request.headers.get('x-forwarded-for')?.split(',')[0].trim() ||
      request.headers.get('x-real-ip') ||
      'unknown-ip'

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: 'Too many requests. Please wait a moment before trying again.' },
        { status: 429, headers: { 'Retry-After': '60' } }
      )
    }

    // 2. Parse & validate JSON body
    let body: any
    try {
      body = await request.json()
    } catch {
      return NextResponse.json(
        { error: 'Invalid JSON payload format.' },
        { status: 400 }
      )
    }

    const { name, email, branch, subject, message, hp_security_token } = body

    // 3. Honeypot check (Silent tarpit for automated bots)
    if (!validateHoneypot(hp_security_token)) {
      return NextResponse.json(
        { success: true, message: 'Message received.' },
        { status: 200 }
      )
    }

    // 4. Payload validation & threat detection
    if (
      detectMaliciousPayload(name) ||
      detectMaliciousPayload(email) ||
      detectMaliciousPayload(message)
    ) {
      return NextResponse.json(
        { error: 'Disallowed characters or security filter trigger detected.' },
        { status: 400 }
      )
    }

    const cleanName = sanitizeInput(name || '', 100)
    const cleanEmail = sanitizeEmail(email || '')
    const cleanBranch = sanitizeInput(branch || 'The Factory Phnom Penh (HQ)', 100)
    const cleanSubject = sanitizeInput(subject || 'General Inquiry', 100)
    const cleanMessage = sanitizeInput(message || '', 3000)

    if (!cleanName || !cleanEmail || !cleanMessage) {
      return NextResponse.json(
        { error: 'Please provide name, email, and message.' },
        { status: 400 }
      )
    }

    if (!isValidEmail(cleanEmail)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address.' },
        { status: 400 }
      )
    }

    // 5. Dispatch notification
    const telegramBotToken = process.env.TELEGRAM_BOT_TOKEN
    const telegramChatId = process.env.TELEGRAM_CHAT_ID
    const webhookUrl = process.env.CONTACT_WEBHOOK_URL

    if (telegramBotToken && telegramChatId) {
      try {
        const text = `🥋 *New Infinity TKD Inquiry*\n\n*Name:* ${cleanName}\n*Email:* ${cleanEmail}\n*Branch:* ${cleanBranch}\n*Subject:* ${cleanSubject}\n\n*Message:*\n${cleanMessage}`
        await fetch(`https://api.telegram.org/bot${telegramBotToken}/sendMessage`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            chat_id: telegramChatId,
            text,
            parse_mode: 'Markdown',
          }),
        })
      } catch (tgErr) {
        console.error('Failed to dispatch Telegram notification:', tgErr)
      }
    } else if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            source: 'infinity-tkd-contact',
            name: cleanName,
            email: cleanEmail,
            branch: cleanBranch,
            subject: cleanSubject,
            message: cleanMessage,
            timestamp: new Date().toISOString(),
          }),
        })
      } catch (webhookErr) {
        console.error('Failed to dispatch webhook notification:', webhookErr)
      }
    } else {
      console.log('Infinity TKD Contact Form Submission (Console Dispatch):', {
        name: cleanName,
        email: cleanEmail,
        branch: cleanBranch,
        subject: cleanSubject,
        message: cleanMessage,
        timestamp: new Date().toISOString(),
      })
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Your message has been sent successfully. Our team will contact you shortly.',
      },
      {
        status: 200,
        headers: { 'Cache-Control': 'no-store' },
      }
    )
  } catch (err: any) {
    console.error('Contact form submission error:', err)
    return NextResponse.json(
      { error: 'An unexpected error occurred while processing your request.' },
      { status: 500 }
    )
  }
}
