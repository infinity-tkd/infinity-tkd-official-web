/**
 * Lead / form-submission delivery.
 *
 * Delivers a form submission to the academy through the first configured channel:
 *   1. Telegram bot   -> TELEGRAM_BOT_TOKEN + TELEGRAM_CHAT_ID
 *   2. Generic webhook -> CONTACT_WEBHOOK_URL (CAREER_WEBHOOK_URL is honoured for join-team)
 *
 * It never reports success unless something was actually delivered. In production with no
 * channel configured it returns `{ ok: false }` so the API can tell the visitor to use another
 * contact method instead of silently losing the enquiry.
 */

import { escapeHtml } from '@/lib/security'

export type LeadSource = 'contact' | 'join-team' | 'incubator'

export interface LeadField {
  label: string
  value: string
}

export interface Lead {
  source: LeadSource
  /** Heading shown at the top of the notification. */
  title: string
  fields: LeadField[]
  /** Long free-text body (message / statement / pitch). */
  body?: string
}

export type DispatchResult =
  | { ok: true; channel: 'telegram' | 'webhook' | 'console' }
  | { ok: false; reason: 'not-configured' | 'delivery-failed' }

const REQUEST_TIMEOUT_MS = 8_000

function webhookUrlFor(source: LeadSource): string | undefined {
  if (source === 'join-team') return process.env.CAREER_WEBHOOK_URL || process.env.CONTACT_WEBHOOK_URL
  if (source === 'incubator') return process.env.INCUBATOR_WEBHOOK_URL || process.env.CONTACT_WEBHOOK_URL
  return process.env.CONTACT_WEBHOOK_URL
}

function formatTelegramHtml(lead: Lead): string {
  const lines = [`🥋 <b>${escapeHtml(lead.title)}</b>`, '']
  for (const field of lead.fields) {
    lines.push(`<b>${escapeHtml(field.label)}:</b> ${escapeHtml(field.value)}`)
  }
  if (lead.body) {
    lines.push('', escapeHtml(lead.body))
  }
  // Telegram hard limit is 4096 characters.
  return lines.join('\n').slice(0, 4000)
}

async function sendTelegram(lead: Lead, token: string, chatId: string): Promise<boolean> {
  try {
    const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId,
        text: formatTelegramHtml(lead),
        parse_mode: 'HTML',
        disable_web_page_preview: true,
      }),
      signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS),
    })
    if (!res.ok) {
      console.error(`[notify] Telegram responded ${res.status} for "${lead.source}" lead`)
      return false
    }
    return true
  } catch (err) {
    console.error('[notify] Telegram dispatch failed:', err)
    return false
  }
}

async function sendWebhook(lead: Lead, url: string): Promise<boolean> {
  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        source: `infinity-tkd-${lead.source}`,
        title: lead.title,
        fields: Object.fromEntries(lead.fields.map((f) => [f.label, f.value])),
        body: lead.body ?? '',
        timestamp: new Date().toISOString(),
      }),
      signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS),
    })
    if (!res.ok) {
      console.error(`[notify] Webhook responded ${res.status} for "${lead.source}" lead`)
      return false
    }
    return true
  } catch (err) {
    console.error('[notify] Webhook dispatch failed:', err)
    return false
  }
}

export async function dispatchLead(lead: Lead): Promise<DispatchResult> {
  const telegramToken = process.env.TELEGRAM_BOT_TOKEN
  const telegramChatId = process.env.TELEGRAM_CHAT_ID
  const webhookUrl = webhookUrlFor(lead.source)
  const hasTelegram = Boolean(telegramToken && telegramChatId)

  if (!hasTelegram && !webhookUrl) {
    if (process.env.NODE_ENV === 'production') {
      console.error(`[notify] No delivery channel configured; "${lead.source}" lead was NOT delivered.`)
      return { ok: false, reason: 'not-configured' }
    }
    // Local development: log it so the form can be exercised without external services.
    console.log(`[notify] (dev) "${lead.source}" lead:`, lead)
    return { ok: true, channel: 'console' }
  }

  if (hasTelegram && (await sendTelegram(lead, telegramToken as string, telegramChatId as string))) {
    return { ok: true, channel: 'telegram' }
  }
  if (webhookUrl && (await sendWebhook(lead, webhookUrl))) {
    return { ok: true, channel: 'webhook' }
  }
  return { ok: false, reason: 'delivery-failed' }
}
