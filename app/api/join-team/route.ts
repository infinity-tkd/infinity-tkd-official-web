import type { NextRequest } from 'next/server'
import {
  sanitizeInput,
  sanitizeEmail,
  sanitizePhone,
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
    const blocked = rejectCrossOrigin(request) ?? rejectIfRateLimited(request, 'join-team')
    if (blocked) return blocked

    const body = await readJsonBody(request)
    if (!body) return jsonError('Invalid JSON payload format.', 400)

    if (!validateHoneypot(str(body.hp_security_token))) {
      return jsonOk('Application submitted.')
    }

    const name = str(body.name)
    const email = str(body.email)
    const whyJoin = str(body.whyJoin)

    if (
      detectMaliciousPayload(name) ||
      detectMaliciousPayload(email) ||
      detectMaliciousPayload(whyJoin, { prose: true })
    ) {
      return jsonError('Your application contains characters that are not allowed. Please remove any HTML or code.', 400)
    }

    const cleanName = sanitizeInput(name, 100)
    const cleanPhone = sanitizePhone(str(body.phone))
    const cleanEmail = sanitizeEmail(email)
    const cleanDan = sanitizeInput(str(body.danRank) || 'Kukkiwon Dan', 100)
    const cleanJob = sanitizeInput(str(body.jobTitle) || 'Coaching Staff', 100)
    const cleanExp = sanitizeInput(str(body.experience), 100)
    const cleanWhyJoin = sanitizeInput(whyJoin, 3000)

    if (!cleanName || !cleanEmail || !cleanPhone || !cleanWhyJoin) {
      return jsonError('Please provide all required fields: name, phone, email, and statement.', 400)
    }
    if (!isValidEmail(cleanEmail)) {
      return jsonError('Please provide a valid email address.', 400)
    }

    const result = await dispatchLead({
      source: 'join-team',
      title: 'New Infinity TKD Coaching Application',
      fields: [
        { label: 'Position', value: cleanJob },
        { label: 'Name', value: cleanName },
        { label: 'Phone', value: cleanPhone },
        { label: 'Email', value: cleanEmail },
        { label: 'Dan Rank', value: cleanDan },
        { label: 'Experience', value: cleanExp || 'Not provided' },
      ],
      body: cleanWhyJoin,
    })
    if (!result.ok) return dispatchFailureResponse(result)

    return jsonOk('Your application has been submitted successfully. We will review it and get in touch.')
  } catch (err) {
    console.error('Career application submission error:', err)
    return jsonError('An unexpected error occurred while processing your application.', 500)
  }
}
