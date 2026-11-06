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
    const blocked = rejectCrossOrigin(request) ?? rejectIfRateLimited(request, 'incubator')
    if (blocked) return blocked

    const body = await readJsonBody(request)
    if (!body) return jsonError('Invalid JSON payload format.', 400)

    if (!validateHoneypot(str(body.hp_security_token))) {
      return jsonOk('Pitch received.')
    }

    const studentName = str(body.studentName)
    const email = str(body.email)
    const title = str(body.title)
    const summary = str(body.summary)

    if (
      detectMaliciousPayload(studentName) ||
      detectMaliciousPayload(email) ||
      detectMaliciousPayload(title) ||
      detectMaliciousPayload(summary, { prose: true })
    ) {
      return jsonError('Your pitch contains characters that are not allowed. Please remove any HTML or code.', 400)
    }

    const cleanStudentName = sanitizeInput(studentName, 100)
    const cleanBelt = sanitizeInput(str(body.beltRank), 100)
    const cleanPhone = sanitizePhone(str(body.phone))
    const cleanEmail = sanitizeEmail(email)
    const cleanTrack = sanitizeInput(str(body.track), 100)
    const cleanTitle = sanitizeInput(title, 150)
    const cleanSummary = sanitizeInput(summary, 2000)

    if (!cleanStudentName || !cleanEmail || !cleanPhone || !cleanSummary) {
      return jsonError('Please complete all required fields.', 400)
    }
    if (!isValidEmail(cleanEmail)) {
      return jsonError('Please provide a valid email address.', 400)
    }

    const result = await dispatchLead({
      source: 'incubator',
      title: 'New Student Incubator Pitch',
      fields: [
        { label: 'Student', value: cleanStudentName },
        { label: 'Belt', value: cleanBelt || 'Not provided' },
        { label: 'Phone', value: cleanPhone },
        { label: 'Email', value: cleanEmail },
        { label: 'Track', value: cleanTrack || 'Not provided' },
        { label: 'Project', value: cleanTitle || 'Untitled' },
      ],
      body: cleanSummary,
    })
    if (!result.ok) return dispatchFailureResponse(result)

    return jsonOk('Your pitch has been submitted. Our committee will review it and get in touch.')
  } catch (err) {
    console.error('Incubator pitch submission error:', err)
    return jsonError('An unexpected error occurred while processing your pitch.', 500)
  }
}
