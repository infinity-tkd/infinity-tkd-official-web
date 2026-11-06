/**
 * Floor-pattern geometry for the animated poomsae walkthrough (Taegeuk 1–8).
 *
 * Each form's `steps` array lines up 1:1 with the form's existing `steps` text in
 * `data/library/poomsae/poomsae.ts` (same count, same order), so descriptions and their
 * translations come from the curriculum data and only the movement geometry lives here.
 *
 * Coordinates use a schematic 340 x 260 floor:
 *   - the performer starts at the bottom of the centre spine, facing the front (12 o'clock, "N");
 *   - the three horizontal lines of the 王 pattern sit at y = 200 (first), 130 (second), 60 (third);
 *   - x = 170 is the centre spine; each step along a line is 55 units.
 * `at(side, row)` places a point `side` steps right (+) or left (-) of the spine and `row` lines up
 * from the first line (fractions place steps between lines).
 * It is a teaching schematic, not a measured stance-length map.
 *
 * `facing` is the direction the performer faces after the step. Where a step text's clock tag
 * describes the direction of travel instead (e.g. retreating steps), `facing` follows the body.
 *
 * Every form stays `verified: false` until a coach has checked each direction and stance.
 */

export type Facing = 'N' | 'E' | 'S' | 'W'

export interface FloorPoint {
  x: number
  y: number
}

/**
 * Stance used to draw the footprints. `lead` is always the FRONT foot (for back stance, the foot
 * opposite the one named in Kukkiwon terminology, which names Dwit-kubi after the rear foot).
 */
export interface Stance {
  type: 'ready' | 'parallel' | 'ease' | 'closed' | 'walking' | 'front' | 'back' | 'tiger' | 'horse' | 'cross'
  lead?: 'left' | 'right'
}

export interface WalkStep {
  /** Where the performer finishes this step. */
  to: FloorPoint
  stance: Stance
  /** Techniques performed, shown as chips. Kicks (…-chagi) also animate the kicking foot. */
  techniques: string[]
  /** Corner points travelled through on the way (e.g. back along a line, then up the spine). */
  via?: FloorPoint[]
  /** Direction faced after the step (N = 12 o'clock / front, E = 3, S = 6 / rear, W = 9). */
  facing: Facing
  /** Turn direction when the text specifies one (needed for 180° and 270° turns). */
  turn?: 'cw' | 'ccw'
  /** Kicking (or kneeing) foot when it returns to where it started instead of landing forward. */
  kick?: 'left' | 'right'
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
const FIRST = 200 // first (nearest) line
const UNIT = 55 // one step along a horizontal line
const ROW = 70 // distance between lines

/** `side` steps right (+) / left (-) of the spine, `row` lines up from the first line. */
const at = (side: number, row: number): FloorPoint => ({ x: C + side * UNIT, y: FIRST - row * ROW })

/** The 王 pattern: three horizontal lines joined by the centre spine. */
const WANG_GUIDES = [0, 1, 2].map((row) => ({ from: at(-2, row), to: at(2, row) })).concat({ from: at(0, 0), to: at(0, 2) })

// Stances ---------------------------------------------------------------------------------------
type Side = 'left' | 'right'
const walk = (lead: Side): Stance => ({ type: 'walking', lead }) // Ap-seogi
const front = (lead: Side): Stance => ({ type: 'front', lead }) // Ap-kubi
const back = (lead: Side): Stance => ({ type: 'back', lead }) // Dwit-kubi (lead = front foot)
const tiger = (lead: Side): Stance => ({ type: 'tiger', lead }) // Beom-seogi
const cross = (lead: Side): Stance => ({ type: 'cross', lead }) // Kkoa-seogi
const HORSE: Stance = { type: 'horse' } // Juchum-seogi
const CLOSED: Stance = { type: 'closed' } // Moa-seogi
const PARALLEL: Stance = { type: 'parallel' } // Naranhi-seogi
const EASE: Stance = { type: 'ease' } // Pyeonhi-seogi
const READY: Stance = { type: 'ready' } // Gibon Joonbi

// Techniques (English · Korean), matching the wording of the form's step texts ------------------
const LOW_BLOCK = 'Low block · Arae-makki'
const INSIDE_BLOCK = 'Inside middle block · Momtong An-makki'
const HIGH_BLOCK = 'High block · Olgul-makki'
const PUNCH_BANDAE = 'Middle punch · Momtong Bandae-jireugi'
const PUNCH_BARO = 'Middle punch · Momtong Baro-jireugi'
const HIGH_PUNCH = 'High punch · Olgul Bandae-jireugi'
const DOUBLE_PUNCH = 'Double punch · Dubeon-jireugi'
const FRONT_KICK = 'Front kick · Ap-chagi'
const SIDE_KICK = 'Side kick · Yeop-chagi'
const ROUND_KICK = 'Roundhouse kick · Dollyo-chagi'
const TARGET_KICK = 'Target kick · Pyojeok-chagi'
const DOUBLE_JUMP_KICK = 'Double jump front kick · Dubal Dangsang-chagi'
const JUMP_FRONT_KICK = 'Jumping front kick · Twieo Ap-chagi'
const KNEE_STRIKE = 'Knee strike · Mureup-chigi'
const KNIFE_NECK = 'Knife-hand neck strike · Hansonnal Mok-chigi'
const KNIFE_SINGLE = 'Knife-hand middle block · Hansonnal Momtong-makki'
const KNIFE_DOUBLE = 'Double knife-hand block · Sonnal Momtong-makki'
const KNIFE_LOW = 'Double knife-hand low block · Sonnal Arae-makki'
const KNIFE_HIGH_OUTER = 'Knife-hand high outer block · Hansonnal Olgul Bakkat-makki'
const SPEAR_HAND = 'Spear-hand thrust · Pyeonsonkkeut Sewo-jireugi'
const SWALLOW = 'Swallow-form strike · Jebipoom Mok-chigi'
const OUTER_BLOCK = 'Outer forearm block · Bakkat-makki'
const HIGH_OUTER_BLOCK = 'High outer block · Olgul Bakkat-makki'
const ASSISTED_OUTER = 'Assisted outer block · Geodeureo Bakkat-makki'
const ASSISTED_LOW = 'Assisted low block · Geodeureo Arae-makki'
const BACKFIST = 'Backfist strike · Deungjumeok Ap-chigi'
const BACKFIST_OUTER = 'Backfist outer strike · Deungjumeok Bakkat-chigi'
const HAMMER_FIST = 'Hammer-fist strike · Mejumeok Naeryo-chigi'
const ELBOW = 'Turning elbow strike · Palkup Dollyo-chigi'
const TARGET_ELBOW = 'Target elbow strike · Palkup Pyojeok-chigi'
const SLOW_LOW_WEDGE = 'Slow low wedge block · Arae Hecheo-makki'
const PALM_BLOCK = 'Palm block · Batangson Momtong-makki'
const PALM_INSIDE = 'Palm inside block · Batangson An-makki'
const ASSISTED_PALM = 'Assisted palm block · Batangson Geodeureo An-makki'
const COVERED_FIST = 'Covered fist · Bo-jumeok'
const SCISSORS = 'Scissors block · Gawi-makki'
const WEDGE = 'Outer wedge block · Hecheo-makki'
const X_BLOCK = 'X-block · Eotgeoreo Arae-makki'
const DOUBLE_UPPERCUT = 'Double uppercut · Dujumeok Jeocheo-jireugi'
const SIDE_PUNCH = 'Side punch · Yeop-jireugi'
const MOUNTAIN = 'Mountain block · Oesanteul-makki'
const UPPERCUT = 'Pulling uppercut · Dangyeo Teok-jireugi'

const step = (to: FloorPoint, facing: Facing, stance: Stance, techniques: string[], extra: Partial<WalkStep> = {}): WalkStep => ({
  to,
  facing,
  stance,
  techniques,
  ...extra,
})

/** Shared start for every Taegeuk form: ready stance at the bottom of the spine, facing the front. */
const taegeukBase = { start: at(0, 0), startFacing: 'N' as const, startStance: READY, guides: WANG_GUIDES, verified: false }

const taegeuk1: PoomsaeWalkthrough = {
  formId: 'taegeuk-1',
  ...taegeukBase,
  steps: [
    // First line: left, then right
    step(at(-1, 0), 'W', walk('left'), [LOW_BLOCK]),
    step(at(-2, 0), 'W', walk('right'), [PUNCH_BANDAE]),
    step(at(1, 0), 'E', walk('right'), [LOW_BLOCK], { turn: 'cw' }),
    step(at(2, 0), 'E', walk('left'), [PUNCH_BANDAE]),
    // Up the spine to the second line
    step(at(0, 1), 'N', front('left'), [LOW_BLOCK, PUNCH_BARO], { via: [at(0, 0)] }),
    // Second line: right, then left
    step(at(1, 1), 'E', walk('right'), [INSIDE_BLOCK]),
    step(at(2, 1), 'E', walk('left'), [PUNCH_BARO]),
    step(at(-1, 1), 'W', walk('left'), [INSIDE_BLOCK], { turn: 'ccw' }),
    step(at(-2, 1), 'W', walk('right'), [PUNCH_BARO]),
    // Up the spine to the third line
    step(at(0, 2), 'N', front('right'), [LOW_BLOCK, PUNCH_BARO], { via: [at(0, 1)] }),
    // Third line: left, then right
    step(at(-1, 2), 'W', walk('left'), [HIGH_BLOCK]),
    step(at(-2, 2), 'W', walk('right'), [FRONT_KICK, PUNCH_BANDAE]),
    step(at(1, 2), 'E', walk('right'), [HIGH_BLOCK], { turn: 'cw' }),
    step(at(2, 2), 'E', walk('left'), [FRONT_KICK, PUNCH_BANDAE]),
    // Back down the spine toward the start (facing the rear)
    step(at(0, 1), 'S', front('left'), [LOW_BLOCK], { via: [at(0, 2)] }),
    step(at(0, 0), 'S', front('right'), [PUNCH_BANDAE], { kihap: true }),
  ],
}

const taegeuk2: PoomsaeWalkthrough = {
  formId: 'taegeuk-2',
  ...taegeukBase,
  steps: [
    step(at(-1, 0), 'W', walk('left'), [LOW_BLOCK]),
    step(at(-2, 0), 'W', front('right'), [PUNCH_BANDAE]),
    step(at(1, 0), 'E', walk('right'), [LOW_BLOCK], { turn: 'cw' }),
    step(at(2, 0), 'E', front('left'), [PUNCH_BANDAE]),
    step(at(0, 0.5), 'N', walk('left'), [INSIDE_BLOCK], { via: [at(0, 0)] }),
    step(at(0, 1), 'N', walk('right'), [INSIDE_BLOCK]),
    step(at(-1, 1), 'W', walk('left'), [LOW_BLOCK]),
    step(at(-2, 1), 'W', front('right'), [FRONT_KICK, HIGH_PUNCH]),
    step(at(1, 1), 'E', walk('right'), [LOW_BLOCK], { turn: 'cw' }),
    step(at(2, 1), 'E', front('left'), [FRONT_KICK, HIGH_PUNCH]),
    step(at(0, 1.5), 'N', walk('left'), [HIGH_BLOCK], { via: [at(0, 1)] }),
    step(at(0, 2), 'N', walk('right'), [HIGH_BLOCK]),
    step(at(1, 2), 'E', walk('left'), [INSIDE_BLOCK], { turn: 'ccw' }),
    step(at(-1, 2), 'W', walk('right'), [INSIDE_BLOCK], { turn: 'cw' }),
    step(at(0, 1.5), 'S', walk('left'), [LOW_BLOCK], { via: [at(0, 2)] }),
    step(at(0, 1), 'S', walk('right'), [FRONT_KICK, PUNCH_BANDAE]),
    step(at(0, 0.5), 'S', walk('left'), [FRONT_KICK, PUNCH_BANDAE]),
    step(at(0, 0), 'S', front('right'), [FRONT_KICK, PUNCH_BANDAE], { kihap: true }),
  ],
}

const taegeuk3: PoomsaeWalkthrough = {
  formId: 'taegeuk-3',
  ...taegeukBase,
  steps: [
    step(at(-1, 0), 'W', walk('left'), [LOW_BLOCK]),
    step(at(-2, 0), 'W', front('right'), [FRONT_KICK, DOUBLE_PUNCH]),
    step(at(1, 0), 'E', walk('right'), [LOW_BLOCK], { turn: 'cw' }),
    step(at(2, 0), 'E', front('left'), [FRONT_KICK, DOUBLE_PUNCH]),
    step(at(0, 0.5), 'N', walk('left'), [KNIFE_NECK], { via: [at(0, 0)] }),
    step(at(0, 1), 'N', walk('right'), [KNIFE_NECK]),
    step(at(-1, 1), 'W', back('left'), [KNIFE_SINGLE]),
    step(at(-1, 1), 'W', front('left'), [PUNCH_BARO]),
    step(at(1, 1), 'E', back('right'), [KNIFE_SINGLE], { turn: 'cw' }),
    step(at(1, 1), 'E', front('right'), [PUNCH_BARO]),
    step(at(0, 1.5), 'N', walk('left'), [INSIDE_BLOCK], { via: [at(0, 1)] }),
    step(at(0, 2), 'N', walk('right'), [INSIDE_BLOCK]),
    step(at(1, 2), 'E', walk('left'), [LOW_BLOCK], { turn: 'ccw' }),
    step(at(2, 2), 'E', front('right'), [FRONT_KICK, DOUBLE_PUNCH]),
    step(at(-1, 2), 'W', walk('right'), [LOW_BLOCK], { turn: 'cw' }),
    step(at(-2, 2), 'W', front('left'), [FRONT_KICK, DOUBLE_PUNCH]),
    step(at(0, 1.5), 'S', walk('left'), [LOW_BLOCK, PUNCH_BARO], { via: [at(0, 2)] }),
    step(at(0, 1), 'S', walk('right'), [LOW_BLOCK, PUNCH_BARO]),
    step(at(0, 0.5), 'S', walk('left'), [FRONT_KICK, LOW_BLOCK, PUNCH_BARO]),
    step(at(0, 0), 'S', walk('right'), [FRONT_KICK, LOW_BLOCK, PUNCH_BARO], { kihap: true }),
  ],
}

const taegeuk4: PoomsaeWalkthrough = {
  formId: 'taegeuk-4',
  ...taegeukBase,
  steps: [
    step(at(-1, 0), 'W', back('left'), [KNIFE_DOUBLE]),
    step(at(-2, 0), 'W', front('right'), [SPEAR_HAND]),
    step(at(1, 0), 'E', back('right'), [KNIFE_DOUBLE], { turn: 'cw' }),
    step(at(2, 0), 'E', front('left'), [SPEAR_HAND]),
    // Up the spine to the third line
    step(at(0, 0.5), 'N', front('left'), [SWALLOW], { via: [at(0, 0)] }),
    step(at(0, 1), 'N', front('right'), [FRONT_KICK, PUNCH_BARO]),
    step(at(0, 1.5), 'N', front('left'), [SIDE_KICK]),
    step(at(0, 2), 'N', back('right'), [SIDE_KICK, KNIFE_DOUBLE]),
    // Third line
    step(at(1, 2), 'E', back('left'), [OUTER_BLOCK], { turn: 'ccw' }),
    step(at(1, 2), 'E', back('left'), [FRONT_KICK, INSIDE_BLOCK], { kick: 'right' }),
    step(at(-1, 2), 'W', back('right'), [OUTER_BLOCK], { turn: 'cw' }),
    step(at(-1, 2), 'W', back('right'), [FRONT_KICK, INSIDE_BLOCK], { kick: 'left' }),
    // Down the spine to the second line (facing the rear)
    step(at(0, 1.5), 'S', front('left'), [SWALLOW], { via: [at(0, 2)] }),
    step(at(0, 1), 'S', front('right'), [FRONT_KICK, BACKFIST]),
    // Second line
    step(at(1, 1), 'E', walk('left'), [INSIDE_BLOCK]),
    step(at(1, 1), 'E', walk('left'), [PUNCH_BARO]),
    step(at(-1, 1), 'W', walk('right'), [INSIDE_BLOCK], { turn: 'cw' }),
    step(at(-1, 1), 'W', walk('right'), [PUNCH_BARO]),
    // Back to the first line
    step(at(0, 0.5), 'S', front('left'), [INSIDE_BLOCK, DOUBLE_PUNCH], { via: [at(0, 1)] }),
    step(at(0, 0), 'S', front('right'), [INSIDE_BLOCK, DOUBLE_PUNCH], { kihap: true }),
  ],
}

const taegeuk5: PoomsaeWalkthrough = {
  formId: 'taegeuk-5',
  ...taegeukBase,
  steps: [
    step(at(-1, 0), 'W', front('left'), [LOW_BLOCK]),
    step(at(-0.5, 0), 'W', EASE, [HAMMER_FIST]),
    step(at(1, 0), 'E', front('right'), [LOW_BLOCK], { turn: 'cw' }),
    step(at(0.5, 0), 'E', EASE, [HAMMER_FIST]),
    // Up the spine to the third line
    step(at(0, 0.5), 'N', front('left'), [INSIDE_BLOCK], { via: [at(0, 0)] }),
    step(at(0, 1), 'N', front('right'), [FRONT_KICK, BACKFIST, INSIDE_BLOCK]),
    step(at(0, 1.5), 'N', front('left'), [FRONT_KICK, BACKFIST, INSIDE_BLOCK]),
    step(at(0, 2), 'N', front('right'), [BACKFIST]),
    // Third line
    step(at(1, 2), 'E', back('left'), [KNIFE_SINGLE], { turn: 'ccw' }),
    step(at(2, 2), 'E', front('right'), [ELBOW]),
    step(at(-1, 2), 'W', back('right'), [KNIFE_SINGLE], { turn: 'cw' }),
    step(at(-2, 2), 'W', front('left'), [ELBOW]),
    // Down to the second line
    step(at(0, 1.5), 'S', front('left'), [LOW_BLOCK, INSIDE_BLOCK], { via: [at(0, 2)] }),
    step(at(0, 1), 'S', front('right'), [FRONT_KICK, LOW_BLOCK, INSIDE_BLOCK]),
    // Second line
    step(at(1, 1), 'E', front('left'), [HIGH_BLOCK]),
    step(at(2, 1), 'E', front('right'), [SIDE_KICK, TARGET_ELBOW]),
    step(at(-1, 1), 'W', front('right'), [HIGH_BLOCK], { turn: 'cw' }),
    step(at(-2, 1), 'W', front('left'), [SIDE_KICK, TARGET_ELBOW]),
    // Back to the first line
    step(at(0, 0.5), 'S', front('left'), [LOW_BLOCK, INSIDE_BLOCK], { via: [at(0, 1)] }),
    step(at(0, 0), 'S', cross('right'), [FRONT_KICK, BACKFIST], { kihap: true }),
  ],
}

const taegeuk6: PoomsaeWalkthrough = {
  formId: 'taegeuk-6',
  ...taegeukBase,
  steps: [
    step(at(-1, 0), 'W', front('left'), [LOW_BLOCK]),
    step(at(-1, 0), 'W', back('left'), [FRONT_KICK, OUTER_BLOCK], { kick: 'right' }),
    step(at(1, 0), 'E', front('right'), [LOW_BLOCK], { turn: 'cw' }),
    step(at(1, 0), 'E', back('right'), [FRONT_KICK, OUTER_BLOCK], { kick: 'left' }),
    step(at(0, 0.5), 'N', front('left'), [KNIFE_HIGH_OUTER], { via: [at(0, 0)] }),
    step(at(-1, 1), 'W', front('left'), [ROUND_KICK], { via: [at(0, 1)], kick: 'right' }),
    // Second line
    step(at(-1, 1), 'W', front('left'), [HIGH_OUTER_BLOCK, PUNCH_BARO]),
    step(at(-2, 1), 'W', front('right'), [FRONT_KICK, PUNCH_BARO]),
    step(at(1, 1), 'E', front('right'), [HIGH_OUTER_BLOCK, PUNCH_BARO], { turn: 'cw' }),
    step(at(2, 1), 'E', front('left'), [FRONT_KICK, PUNCH_BARO]),
    // Centre: slow block, then up to the third line
    step(at(0, 1), 'N', PARALLEL, [SLOW_LOW_WEDGE]),
    step(at(0, 1.5), 'N', front('right'), [KNIFE_HIGH_OUTER]),
    step(at(0, 2), 'N', front('left'), [ROUND_KICK], { kihap: true }),
    // Third line
    step(at(-1, 2), 'W', front('right'), [LOW_BLOCK], { turn: 'ccw' }),
    step(at(-1, 2), 'W', back('right'), [FRONT_KICK, OUTER_BLOCK], { kick: 'left' }),
    step(at(1, 2), 'E', front('left'), [LOW_BLOCK], { turn: 'cw' }),
    step(at(1, 2), 'E', back('left'), [FRONT_KICK, OUTER_BLOCK], { kick: 'right' }),
    // Facing the front, stepping back down the spine to the start
    step(at(0, 1.5), 'N', back('left'), [KNIFE_DOUBLE], { via: [at(0, 2)] }),
    step(at(0, 1), 'N', back('right'), [KNIFE_DOUBLE]),
    step(at(0, 0.5), 'N', front('left'), [PALM_BLOCK, PUNCH_BARO]),
    step(at(0, 0), 'N', front('right'), [PALM_BLOCK, PUNCH_BARO]),
  ],
}

const taegeuk7: PoomsaeWalkthrough = {
  formId: 'taegeuk-7',
  ...taegeukBase,
  steps: [
    step(at(-1, 0), 'W', tiger('left'), [PALM_INSIDE]),
    step(at(-1, 0), 'W', tiger('left'), [FRONT_KICK, INSIDE_BLOCK], { kick: 'right' }),
    step(at(1, 0), 'E', tiger('right'), [PALM_INSIDE], { turn: 'cw' }),
    step(at(1, 0), 'E', tiger('right'), [FRONT_KICK, INSIDE_BLOCK], { kick: 'left' }),
    step(at(0, 0.5), 'N', back('left'), [KNIFE_LOW], { via: [at(0, 0)] }),
    step(at(0, 1), 'N', back('right'), [KNIFE_LOW]),
    // Second line
    step(at(-1, 1), 'W', tiger('left'), [ASSISTED_PALM]),
    step(at(-1, 1), 'W', tiger('left'), [BACKFIST]),
    step(at(1, 1), 'E', tiger('right'), [ASSISTED_PALM], { turn: 'cw' }),
    step(at(1, 1), 'E', tiger('right'), [BACKFIST]),
    // Centre: covered fist, then up to the third line
    step(at(0, 1), 'N', CLOSED, [COVERED_FIST]),
    step(at(0, 1.5), 'N', front('left'), [SCISSORS]),
    step(at(0, 2), 'N', front('right'), [SCISSORS]),
    // Third line
    step(at(1, 2), 'E', front('left'), [WEDGE], { turn: 'ccw' }),
    step(at(2, 2), 'E', cross('left'), [KNEE_STRIKE, DOUBLE_UPPERCUT], { kick: 'right' }),
    step(at(1, 2), 'E', front('right'), [X_BLOCK]),
    step(at(-1, 2), 'W', front('right'), [WEDGE], { turn: 'cw' }),
    step(at(-2, 2), 'W', cross('right'), [KNEE_STRIKE, DOUBLE_UPPERCUT], { kick: 'left' }),
    step(at(-1, 2), 'W', front('left'), [X_BLOCK]),
    // Down the spine to the start (facing the rear)
    step(at(0, 1.6), 'S', EASE, [BACKFIST_OUTER], { via: [at(0, 2)] }),
    step(at(0, 1.2), 'S', HORSE, [TARGET_KICK, TARGET_ELBOW], { kick: 'right' }),
    step(at(0, 0.8), 'S', EASE, [BACKFIST_OUTER]),
    step(at(0, 0.4), 'S', HORSE, [TARGET_KICK, TARGET_ELBOW], { kick: 'left' }),
    step(at(0, 0.4), 'S', back('left'), [KNIFE_SINGLE]),
    step(at(0, 0), 'S', HORSE, [SIDE_PUNCH], { kihap: true }),
  ],
}

const taegeuk8: PoomsaeWalkthrough = {
  formId: 'taegeuk-8',
  ...taegeukBase,
  steps: [
    // Straight up the spine to the third line
    step(at(0, 0.67), 'N', front('left'), [ASSISTED_OUTER, PUNCH_BARO]),
    step(at(0, 1.33), 'N', front('left'), [DOUBLE_JUMP_KICK, INSIDE_BLOCK, DOUBLE_PUNCH], { kick: 'right', kihap: true }),
    step(at(0, 2), 'N', front('right'), [PUNCH_BANDAE]),
    // Third line: mountain blocks and slow uppercuts toward 9 o'clock
    step(at(-0.5, 2), 'W', front('right'), [MOUNTAIN], { turn: 'ccw' }),
    step(at(-0.5, 2), 'E', front('left'), [UPPERCUT], { turn: 'cw' }),
    step(at(-1.5, 2), 'E', front('left'), [MOUNTAIN]),
    step(at(-1.5, 2), 'W', front('right'), [UPPERCUT], { turn: 'ccw' }),
    // Facing the front, back down the spine to the second line
    step(at(0, 2), 'N', back('left'), [KNIFE_DOUBLE], { turn: 'cw' }),
    step(at(0, 2), 'N', front('left'), [PUNCH_BARO]),
    step(at(0, 1.5), 'N', tiger('right'), [FRONT_KICK, PALM_INSIDE], { kick: 'right' }),
    // Second line
    step(at(-1, 1), 'W', tiger('left'), [KNIFE_DOUBLE], { via: [at(0, 1)] }),
    step(at(-2, 1), 'W', front('left'), [FRONT_KICK, PUNCH_BARO], { kick: 'left' }),
    step(at(-1.5, 1), 'W', tiger('left'), [PALM_INSIDE]),
    step(at(1, 1), 'E', tiger('right'), [KNIFE_DOUBLE], { turn: 'cw' }),
    step(at(2, 1), 'E', front('right'), [FRONT_KICK, PUNCH_BARO], { kick: 'right' }),
    step(at(1.5, 1), 'E', tiger('right'), [PALM_INSIDE]),
    // Down to the first line (facing the rear)
    step(at(0, 0.5), 'S', back('right'), [ASSISTED_LOW], { via: [at(0, 1)], turn: 'cw' }),
    step(at(0, 0), 'S', front('right'), [FRONT_KICK, JUMP_FRONT_KICK, INSIDE_BLOCK, PUNCH_BARO], { kihap: true }),
    // First line
    step(at(-1, 0), 'W', back('left'), [KNIFE_SINGLE], { turn: 'ccw' }),
    step(at(-1, 0), 'W', front('left'), [ELBOW]),
    step(at(-1, 0), 'W', front('left'), [BACKFIST, PUNCH_BANDAE]),
    step(at(-0.5, 0), 'E', back('right'), [KNIFE_SINGLE], { turn: 'cw' }),
    step(at(-0.5, 0), 'E', front('right'), [ELBOW]),
    step(at(-0.5, 0), 'E', front('right'), [BACKFIST, PUNCH_BANDAE]),
  ],
}

export const POOMSAE_WALKTHROUGHS: Record<string, PoomsaeWalkthrough> = Object.fromEntries(
  [taegeuk1, taegeuk2, taegeuk3, taegeuk4, taegeuk5, taegeuk6, taegeuk7, taegeuk8].map((walkthrough) => [walkthrough.formId, walkthrough])
)

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
