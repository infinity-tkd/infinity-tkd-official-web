import type { NextRequest } from 'next/server'
import {
  sanitizeInput,
  sanitizeEmail,
  isValidEmail,
  validateHoneypot,
  detectMaliciousPayload,
} from '@/lib/security'
import { dispatchLead } from '@/lib/notify'
import {
  dispatchFailureResponse,
  jsonError,
  jsonOk,
  readJsonBody,
  rejectCrossOrigin,
  rejectIfRateLimited,
  str,
} from '@/lib/formApi'

export async function POST(request: NextRequest) {
  try {
    const blocked = rejectCrossOrigin(request) ?? rejectIfRateLimited(request, 'contact')
    if (blocked) return blocked

    const body = await readJsonBody(request)
    if (!body) return jsonError('Invalid JSON payload format.', 400)

    // Honeypot: silently accept bot submissions without delivering them.
    if (!validateHoneypot(str(body.hp_security_token))) {
      return jsonOk('Message received.')
    }

    const name = str(body.name)
    const email = str(body.email)
    const message = str(body.message)

    if (
      detectMaliciousPayload(name) ||
      detectMaliciousPayload(email) ||
      detectMaliciousPayload(message, { prose: true })
    ) {
      return jsonError('Your message contains characters that are not allowed. Please remove any HTML or code.', 400)
    }

    const cleanName = sanitizeInput(name, 100)
    const cleanEmail = sanitizeEmail(email)
    const cleanBranch = sanitizeInput(str(body.branch) || 'Olympic Branch (HQ)', 100)
    const cleanSubject = sanitizeInput(str(body.subject) || 'General Inquiry', 100)
    const cleanMessage = sanitizeInput(message, 3000)

    if (!cleanName || !cleanEmail || !cleanMessage) {
      return jsonError('Please provide name, email, and message.', 400)
    }
    if (!isValidEmail(cleanEmail)) {
      return jsonError('Please provide a valid email address.', 400)
    }

    const result = await dispatchLead({
      source: 'contact',
      title: 'New Infinity TKD Inquiry',
      fields: [
        { label: 'Name', value: cleanName },
        { label: 'Email', value: cleanEmail },
        { label: 'Branch', value: cleanBranch },
        { label: 'Subject', value: cleanSubject },
      ],
      body: cleanMessage,
    })
    if (!result.ok) return dispatchFailureResponse(result)

    return jsonOk('Your message has been sent successfully. Our team will contact you shortly.')
  } catch (err) {
    console.error('Contact form submission error:', err)
    return jsonError('An unexpected error occurred while processing your request.', 500)
  }
}
