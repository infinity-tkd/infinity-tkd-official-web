/**
 * "Permission to publish": every person shown on the website (a student, a promotion, an award winner) needs it.
 * For a child it is the parent's or guardian's permission; for an adult, their own.
 *
 * An entry is in one of two states, saved in its "permissionToPublish" field:
 *
 *   "confirmed"    someone ticked the box in the editor: we have permission.
 *   "to-confirm"   the person was on the website before permission was recorded here, and nobody has confirmed it yet.
 *                  The entry stays live as it is; the box is still to be ticked. Nothing in the repository says the
 *                  owner confirmed it.
 *
 * Anything else (an empty or missing value) is not allowed: it stops the build, so a new entry can never go live
 * without the tick. (An old file that holds `true` is read as "confirmed", a hand-written claim like any other.)
 * Plain TypeScript with no imports: `npm run check:data` runs it with Node's type stripping.
 */

export const PERMISSION_STATES = ['confirmed', 'to-confirm'] as const
export type PermissionState = (typeof PERMISSION_STATES)[number]

/** The state a saved value means, or null when it is none of the two (a missing tick). */
export function permissionStateOf(value: unknown): PermissionState | null {
  if (value === true) return 'confirmed'
  return value === 'confirmed' || value === 'to-confirm' ? value : null
}

/** How many entries anywhere inside `content` are still "to-confirm" (a content file read as JSON). */
export function countToConfirm(content: unknown): number {
  if (!content || typeof content !== 'object') return 0
  let count = 0
  for (const [key, value] of Object.entries(content)) {
    if (key === 'permissionToPublish') {
      if (value === 'to-confirm') count += 1
    } else {
      count += countToConfirm(value)
    }
  }
  return count
}
