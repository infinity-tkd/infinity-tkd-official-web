/**
 * Floor-pattern geometry for the animated poomsae walkthrough.
 *
 * Each form's `steps` array lines up 1:1 with the form's existing `steps` text in
 * `data/library/poomsae.ts` (same count, same order), so descriptions and their translations come
 * from the curriculum data and only the movement geometry lives here.
 *
 * Coordinates use a schematic 340 x 260 floor (the same proportions as the static diagram):
 *   - the performer starts at the bottom of the centre spine, facing the front (12 o'clock, "N");
 *   - three horizontal lines sit at y = 200 (first), 130 (second) and 60 (third / furthest forward);
 *   - x = 170 is the centre spine; 115/60 are left (9 o'clock) and 225/280 are right (3 o'clock).
 * It is a teaching schematic of the 王 pattern, not a measured stance-length map.
 *
 * To add a form: copy an entry, keep `steps.length` equal to the form's step texts, and have a
 * coach verify the directions before setting `verified: true`.
 */

export type Facing = 'N' | 'E' | 'S' | 'W'

export interface FloorPoint {
  x: number
  y: number
}

/** Stance used to draw the footprints. `lead` is the forward foot (from "Left/Right Ap-seogi"). */
export interface Stance {
  type: 'ready' | 'walking' | 'front'
  lead?: 'left' | 'right'
}

export interface WalkStep {
  /** Where the performer finishes this step. */
  to: FloorPoint
  stance: Stance
  /** Techniques performed, shown as chips. A front kick (Ap-chagi) also animates the kicking foot. */
  techniques: string[]
  /** Corner points travelled through on the way (e.g. back along a line, then up the spine). */
  via?: FloorPoint[]
  /** Direction faced after the step (N = 12 o'clock / front, E = 3, S = 6 / rear, W = 9). */
  facing: Facing
  /** Turn direction for 180° turns (90° turns always take the short way). */
  turn?: 'cw' | 'ccw'
  kihap?: boolean
}

export interface PoomsaeWalkthrough {
  formId: string
  start: FloorPoint
  startFacing: Facing
  startStance: Stance
  /** The floor lines drawn as a faint guide. */
  guides: { from: FloorPoint; to: FloorPoint }[]
  steps: WalkStep[]
  /** Set to true once a coach has checked every direction against the official form. */
  verified: boolean
}

const C = 170 // centre spine
const L1 = 115 // left, one step
const L2 = 60 // left, two steps
const R1 = 225 // right, one step
const R2 = 280 // right, two steps
const FIRST = 200 // first (nearest) line
const SECOND = 130
const THIRD = 60 // third (furthest forward) line

// Technique labels (English · Korean), matching the wording of the form's step texts.
const LOW_BLOCK = 'Low block · Arae-makki'
const INSIDE_BLOCK = 'Inside middle block · Momtong An-makki'
const HIGH_BLOCK = 'High block · Olgul-makki'
const PUNCH_BANDAE = 'Middle punch · Momtong Bandae-jireugi'
const PUNCH_BARO = 'Middle punch · Momtong Baro-jireugi'
const FRONT_KICK = 'Front kick · Ap-chagi'

const walkL: Stance = { type: 'walking', lead: 'left' } // Left Ap-seogi
const walkR: Stance = { type: 'walking', lead: 'right' } // Right Ap-seogi
const frontL: Stance = { type: 'front', lead: 'left' } // Left Ap-kubi
const frontR: Stance = { type: 'front', lead: 'right' } // Right Ap-kubi

const taegeuk1: PoomsaeWalkthrough = {
  formId: 'taegeuk-1',
  start: { x: C, y: FIRST },
  startFacing: 'N',
  startStance: { type: 'ready' },
  guides: [
    { from: { x: L2, y: FIRST }, to: { x: R2, y: FIRST } },
    { from: { x: L2, y: SECOND }, to: { x: R2, y: SECOND } },
    { from: { x: L2, y: THIRD }, to: { x: R2, y: THIRD } },
    { from: { x: C, y: FIRST }, to: { x: C, y: THIRD } },
  ],
  steps: [
    // First line: left, then right
    { to: { x: L1, y: FIRST }, facing: 'W', stance: walkL, techniques: [LOW_BLOCK] }, // 1
    { to: { x: L2, y: FIRST }, facing: 'W', stance: walkR, techniques: [PUNCH_BANDAE] }, // 2
    { to: { x: R1, y: FIRST }, facing: 'E', turn: 'cw', stance: walkR, techniques: [LOW_BLOCK] }, // 3
    { to: { x: R2, y: FIRST }, facing: 'E', stance: walkL, techniques: [PUNCH_BANDAE] }, // 4
    // Up the spine to the second line
    { via: [{ x: C, y: FIRST }], to: { x: C, y: SECOND }, facing: 'N', stance: frontL, techniques: [LOW_BLOCK, PUNCH_BARO] }, // 5
    // Second line: right, then left
    { to: { x: R1, y: SECOND }, facing: 'E', stance: walkR, techniques: [INSIDE_BLOCK] }, // 6
    { to: { x: R2, y: SECOND }, facing: 'E', stance: walkL, techniques: [PUNCH_BARO] }, // 7
    { to: { x: L1, y: SECOND }, facing: 'W', turn: 'ccw', stance: walkL, techniques: [INSIDE_BLOCK] }, // 8
    { to: { x: L2, y: SECOND }, facing: 'W', stance: walkR, techniques: [PUNCH_BARO] }, // 9
    // Up the spine to the third line
    { via: [{ x: C, y: SECOND }], to: { x: C, y: THIRD }, facing: 'N', stance: frontR, techniques: [LOW_BLOCK, PUNCH_BARO] }, // 10
    // Third line: left, then right
    { to: { x: L1, y: THIRD }, facing: 'W', stance: walkL, techniques: [HIGH_BLOCK] }, // 11
    { to: { x: L2, y: THIRD }, facing: 'W', stance: walkR, techniques: [FRONT_KICK, PUNCH_BANDAE] }, // 12
    { to: { x: R1, y: THIRD }, facing: 'E', turn: 'cw', stance: walkR, techniques: [HIGH_BLOCK] }, // 13
    { to: { x: R2, y: THIRD }, facing: 'E', stance: walkL, techniques: [FRONT_KICK, PUNCH_BANDAE] }, // 14
    // Back down the spine toward the start (facing the rear)
    { via: [{ x: C, y: THIRD }], to: { x: C, y: SECOND }, facing: 'S', stance: frontL, techniques: [LOW_BLOCK] }, // 15
    { to: { x: C, y: FIRST }, facing: 'S', stance: frontR, techniques: [PUNCH_BANDAE], kihap: true }, // 16
  ],
  verified: false,
}

export const POOMSAE_WALKTHROUGHS: Record<string, PoomsaeWalkthrough> = {
  [taegeuk1.formId]: taegeuk1,
}

/** Returns the walkthrough for a form only when it lines up with the form's step texts. */
export function getWalkthrough(formId: string, stepCount: number): PoomsaeWalkthrough | null {
  const walkthrough = POOMSAE_WALKTHROUGHS[formId]
  if (!walkthrough) return null
  if (walkthrough.steps.length !== stepCount) {
    if (process.env.NODE_ENV !== 'production') {
      console.warn(
        `[walkthrough] "${formId}" has ${walkthrough.steps.length} geometry steps but ${stepCount} step texts; not rendering.`
      )
    }
    return null
  }
  return walkthrough
}

export const FACING_DEGREES: Record<Facing, number> = { N: 0, E: 90, S: 180, W: 270 }
export const FACING_CLOCK: Record<Facing, string> = {
  N: '12 o’clock (front)',
  E: '3 o’clock (right)',
  S: '6 o’clock (rear)',
  W: '9 o’clock (left)',
}
