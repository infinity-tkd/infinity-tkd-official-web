/**
 * ==============================================================================
 * OFFICIAL WORLD TAEKWONDO COMPETITION RULES MASTER DATASET (COMPLETE MASTER)
 * ==============================================================================
 * Covers the 3 Master Categories:
 * 1. WT Kyorugi (Sparring, Electronic PSS, Best-of-3 Format, Gam-Jeom & IVR)
 * 2. WT Poomsae (Common Foundation, Single Elimination, Recognized Poomsae & Freestyle)
 * 3. Hanmadang (World Taekwondo Hanmadang Breaking, Special Kyokpa & Team Demo)
 */

// ==============================================================================
// 1. WT KYORUGI DATASET
// ==============================================================================

export interface KyorugiPointValue {
  target: string
  technique: string
  points: string
  bonus: string
  description: string
}

export interface KyorugiGamjeom {
  code: string
  infraction: string
  penalty: string
  explanation: string
}

export interface CadetHeightClass {
  gender: 'Male' | 'Female'
  heightClass: string
  minWeight: string
  maxWeight: string
}

export interface HealthBarScoringAction {
  action: string
  deduction: string
  description: string
}

export const kyorugiPointValues: KyorugiPointValue[] = [
  { target: 'Trunk (Hogu)', technique: 'Punch (Momtong Jireugi)', points: '1 Point', bonus: 'None', description: 'Impact with straight knuckle on the electronic trunk protector confirmed by judges/sensors.' },
  { target: 'Trunk (Hogu)', technique: 'Direct Foot Attack (Linear/Roundhouse)', points: '2 Points', bonus: 'None', description: 'Impact on electronic Hogu exceeding transmitter pressure threshold.' },
  { target: 'Head (Helmet)', technique: 'Direct Foot Attack (Linear/Ax/Roundhouse)', points: '3 Points', bonus: 'None', description: 'Foot contact triggering electronic head sensor.' },
  { target: 'Trunk (Hogu)', technique: 'Turning Kick (Back Kick / Dwichagi)', points: '4 Points', bonus: 'Doubled Base Score', description: 'Turning kick to trunk (2 base + 2 turning bonus). Must involve simultaneous head and shoulder rotation.' },
  { target: 'Head (Helmet)', technique: 'Turning Kick (360° / Spinning Hook Kick)', points: '6 Points', bonus: 'Doubled Base Score', description: 'Turning kick to head (3 base + 3 turning bonus). Must involve complete rotational execution.' },
  { target: 'Opponent Penalty', technique: 'Opponent Gam-jeom Infraction', points: '1 Point', bonus: '+1 to Opponent', description: 'Point awarded immediately to competitor whenever opponent incurs a Gam-jeom penalty.' },
  { target: 'Final 10s Alert', technique: 'Passive Gam-jeom in Final 10 Seconds', points: '2 Points', bonus: '2x Point Award', description: 'Crossing line, falling, or evading in final 10s awards 2 points to opponent (1 Gam-jeom recorded).' },
]

export const kyorugiGamjeomRules: KyorugiGamjeom[] = [
  { code: 'GAM-01', infraction: 'Crossing the Boundary Line', penalty: '+1 Point to Opponent', explanation: 'Stepping one or both feet completely outside the 8x8m boundary line.' },
  { code: 'GAM-02', infraction: 'Falling Down', penalty: '+1 Point to Opponent', explanation: 'Falling intentionally or unintentionally to evade an attack or reset combat distance.' },
  { code: 'GAM-03', infraction: 'Avoiding or Delaying Match', penalty: '+1 Point to Opponent', explanation: 'Stalling, turning back to retreat, pretending injury, or asking to stop match to adjust gear.' },
  { code: 'GAM-04', infraction: 'Grabbing, Holding, or Pushing', penalty: '+1 Point to Opponent', explanation: 'Continuous pushing, pushing opponent out of bounds, or pushing to impede kicking.' },
  { code: 'GAM-05', infraction: 'Leg Blocking or Lifting Leg >3s', penalty: '+1 Point to Opponent', explanation: 'Kicking opponent leg, lifting leg above waist 4+ times, or holding leg in air for >3s without kicking.' },
  { code: 'GAM-06', infraction: 'Attacking Below the Waist', penalty: '+1 Point to Opponent', explanation: 'Intentionally kicking or striking groin, thighs, or legs.' },
  { code: 'GAM-07', infraction: 'Attacking After Kal-yeo', penalty: '+1 Point to Opponent', explanation: 'Delivering a strike after the center referee calls Kal-yeo (break).' },
  { code: 'GAM-08', infraction: 'Hitting Head with Hand / Elbow', penalty: '+1 Point to Opponent', explanation: 'Hitting the opponent head with fist, wrist, arm, or elbow.' },
  { code: 'GAM-09', infraction: 'Butting or Attacking with Knee', penalty: '+1 Point to Opponent', explanation: 'Attacking with knee or using headbutting motions.' },
  { code: 'GAM-10', infraction: 'Attacking the Fallen Opponent', penalty: '+1 Point to Opponent', explanation: 'Striking an opponent whose body has touched the ground.' },
  { code: 'GAM-11', infraction: 'Clinch Attack to Trunk Side/Bottom', penalty: '+1 Point to Opponent', explanation: 'Attacking trunk PSS with the side or bottom of the foot while engaged in a clinch.' },
  { code: 'GAM-12', infraction: 'Clinch Attack to Back of Head PSS', penalty: '+1 Point to Opponent', explanation: 'Attacking the back of head PSS while engaged in a clinch.' },
  { code: 'GAM-13', infraction: 'Misconduct of Contestant or Coach', penalty: '+1 Point to Opponent', explanation: 'Protesting officials, unsportsmanlike behavior, or unaccredited doctor in doctor chair.' },
]

export const cadetHeightWeightLimits: CadetHeightClass[] = [
  // Cadet Boys
  { gender: 'Male', heightClass: 'Under 148 cm (≤ 148 cm)', minWeight: '33 kg', maxWeight: '45 kg' },
  { gender: 'Male', heightClass: 'Under 152 cm (148.1–152 cm)', minWeight: '35 kg', maxWeight: '48 kg' },
  { gender: 'Male', heightClass: 'Under 156 cm (152.1–156 cm)', minWeight: '37 kg', maxWeight: '51 kg' },
  { gender: 'Male', heightClass: 'Under 160 cm (156.1–160 cm)', minWeight: '39 kg', maxWeight: '53 kg' },
  { gender: 'Male', heightClass: 'Under 164 cm (160.1–164 cm)', minWeight: '41 kg', maxWeight: '56 kg' },
  { gender: 'Male', heightClass: 'Under 168 cm (164.1–168 cm)', minWeight: '43 kg', maxWeight: '59 kg' },
  { gender: 'Male', heightClass: 'Under 172 cm (168.1–172 cm)', minWeight: '45 kg', maxWeight: '61 kg' },
  { gender: 'Male', heightClass: 'Under 176 cm (172.1–176 cm)', minWeight: '47 kg', maxWeight: '64 kg' },
  { gender: 'Male', heightClass: 'Under 180 cm (176.1–180 cm)', minWeight: '49 kg', maxWeight: '67 kg' },
  { gender: 'Male', heightClass: 'Over 180 cm (> 180 cm)', minWeight: '52 kg', maxWeight: '80 kg' },
  // Cadet Girls
  { gender: 'Female', heightClass: 'Under 144 cm (≤ 144 cm)', minWeight: '32 kg', maxWeight: '43 kg' },
  { gender: 'Female', heightClass: 'Under 148 cm (144.1–148 cm)', minWeight: '33 kg', maxWeight: '45 kg' },
  { gender: 'Female', heightClass: 'Under 152 cm (148.1–152 cm)', minWeight: '35 kg', maxWeight: '48 kg' },
  { gender: 'Female', heightClass: 'Under 156 cm (152.1–156 cm)', minWeight: '37 kg', maxWeight: '51 kg' },
  { gender: 'Female', heightClass: 'Under 160 cm (156.1–160 cm)', minWeight: '39 kg', maxWeight: '53 kg' },
  { gender: 'Female', heightClass: 'Under 164 cm (160.1–164 cm)', minWeight: '41 kg', maxWeight: '56 kg' },
  { gender: 'Female', heightClass: 'Under 168 cm (164.1–168 cm)', minWeight: '43 kg', maxWeight: '59 kg' },
  { gender: 'Female', heightClass: 'Under 172 cm (168.1–172 cm)', minWeight: '45 kg', maxWeight: '61 kg' },
  { gender: 'Female', heightClass: 'Under 176 cm (172.1–176 cm)', minWeight: '47 kg', maxWeight: '64 kg' },
  { gender: 'Female', heightClass: 'Over 176 cm (> 176 cm)', minWeight: '50 kg', maxWeight: '75 kg' },
]

export const kyorugiHealthBarActions: HealthBarScoringAction[] = [
  { action: 'Valid Punch to Trunk Protector', deduction: '-5 Points', description: 'Knuckle contact confirmed on electronic trunk Hogu.' },
  { action: 'Valid Kick to Trunk Protector', deduction: '-10 Points', description: 'Direct foot strike triggering trunk PSS threshold.' },
  { action: 'Valid Kick to Head', deduction: '-15 Points', description: 'Direct foot strike triggering head PSS sensor.' },
  { action: 'Valid Turning Kick to Trunk', deduction: '-20 Points', description: 'Turning kick to trunk protector (doubled value).' },
  { action: 'Valid Turning Kick to Head', deduction: '-30 Points', description: 'Turning kick to head protector (doubled value).' },
  { action: 'Gam-jeom Infraction', deduction: '-5 Points', description: 'Penalty deduction assessed immediately to penalized team.' },
  { action: 'Passive Behavior Penalty', deduction: 'Double Deduction (x2)', description: 'Passive behavior doubles all incoming damage for 10 seconds.' },
]

// ==============================================================================
// 2. WT POOMSAE COMMON DATASET & AGE DIVISIONS
// ==============================================================================

export interface RecognizedDivision {
  division: string
  ageCriteria: string
  individual: string
  pair: string
  team: string
}

export interface CompulsoryPoomsaePool {
  division: string
  pool: string
  forms: string[]
}

export const poomsaeAgeDivisions: RecognizedDivision[] = [
  { division: 'Cadet Division', ageCriteria: '12–14 years old', individual: 'Male / Female (Simultaneous)', pair: '1 Male + 1 Female', team: '3 Males / 3 Females' },
  { division: 'Junior Division', ageCriteria: '15–17 years old', individual: 'Male / Female (Simultaneous)', pair: '1 Male + 1 Female', team: '3 Males / 3 Females' },
  { division: 'Under 30 Division', ageCriteria: '18–30 years old', individual: 'Male / Female (Simultaneous)', pair: '1 Male + 1 Female', team: '3 Males / 3 Females' },
  { division: 'Under 40 Division', ageCriteria: '31–40 years old', individual: 'Male / Female (Simultaneous)', pair: '—', team: '—' },
  { division: 'Under 50 Division', ageCriteria: '41–50 years old (31–50 for Pair/Team)', individual: 'Male / Female (Simultaneous)', pair: '1 Male + 1 Female', team: '3 Males / 3 Females' },
  { division: 'Under 60 Division', ageCriteria: '51–60 years old', individual: 'Male / Female (Simultaneous)', pair: '1 Male + 1 Female', team: '3 Males / 3 Females' },
  { division: 'Under 65 Division', ageCriteria: '61–65 years old', individual: 'Male / Female (Simultaneous)', pair: '—', team: '—' },
  { division: 'Over 65 Division', ageCriteria: '66+ years old (61+ for Pair/Team)', individual: 'Male / Female (Simultaneous)', pair: '1 Male + 1 Female', team: '3 Males / 3 Females' },
  { division: 'WT Poomsae Masters', ageCriteria: '18 & Over (All ages 18+)', individual: 'Male / Female', pair: '—', team: '—' },
]

export const compulsoryPoomsaePools: CompulsoryPoomsaePool[] = [
  {
    division: 'Cadet (Individual, Pair, Team)',
    pool: 'Taegeuk 4, 5, 6, 7, 8 Jang, Koryo, Keumgang, Taebaek',
    forms: ['Taegeuk 4', 'Taegeuk 5', 'Taegeuk 6', 'Taegeuk 7', 'Taegeuk 8', 'Koryo', 'Keumgang', 'Taebaek'],
  },
  {
    division: 'Junior (Individual, Pair, Team)',
    pool: 'Taegeuk 5, 6, 7, 8 Jang, Koryo, Keumgang, Taebaek, Pyongwon',
    forms: ['Taegeuk 5', 'Taegeuk 6', 'Taegeuk 7', 'Taegeuk 8', 'Koryo', 'Keumgang', 'Taebaek', 'Pyongwon'],
  },
  {
    division: 'Under 30 & Under 40 (Indiv) / Under 30 (Pair, Team)',
    pool: 'Taegeuk 7, 8 Jang, Koryo, Keumgang, Taebaek, Pyongwon, Shipjin, Jitae',
    forms: ['Taegeuk 7', 'Taegeuk 8', 'Koryo', 'Keumgang', 'Taebaek', 'Pyongwon', 'Shipjin', 'Jitae'],
  },
  {
    division: 'Under 50 (Individual, Pair, Team)',
    pool: 'Taegeuk 8 Jang, Koryo, Keumgang, Taebaek, Pyongwon, Shipjin, Jitae, Chonkwon',
    forms: ['Taegeuk 8', 'Koryo', 'Keumgang', 'Taebaek', 'Pyongwon', 'Shipjin', 'Jitae', 'Chonkwon'],
  },
  {
    division: 'Under 60, Under 65, Over 65 (Indiv) / Under 60, Over 60 (Pair, Team)',
    pool: 'Koryo, Keumgang, Taebaek, Pyongwon, Shipjin, Jitae, Chonkwon, Hansu',
    forms: ['Koryo', 'Keumgang', 'Taebaek', 'Pyongwon', 'Shipjin', 'Jitae', 'Chonkwon', 'Hansu'],
  },
]

export const singleEliminationCommands = [
  {
    step: '1. Entry',
    firstPoomsae: 'Chung, Hong Chool-Jeon',
    secondPoomsae: 'Chung, Hong Chool-Jeon',
    protocol: 'Athletes enter FOP and stand at C2 designated spots',
  },
  {
    step: '2. Salutation',
    firstPoomsae: 'Cha-ryeot → Kyeong-rye',
    secondPoomsae: 'Cha-ryeot',
    protocol: 'Contestants bow to the referee & judges',
  },
  {
    step: '3. Form Screen',
    firstPoomsae: 'Poomsae will display / athletes adjust',
    secondPoomsae: 'Poomsae will display / athletes adjust',
    protocol: 'Electronic screen displays designated random compulsory form',
  },
  {
    step: '4. Ready',
    firstPoomsae: 'Joon-bi',
    secondPoomsae: 'Joon-bi',
    protocol: 'Athletes assume designated ready stance (e.g. Kibon, Tongmilgi, Kyopson)',
  },
  {
    step: '5. Execution',
    firstPoomsae: 'Shi-jak',
    secondPoomsae: 'Shi-jak',
    protocol: 'Simultaneous performance begins on command',
  },
  {
    step: '6. Return',
    firstPoomsae: 'Ba-ro',
    secondPoomsae: 'Ba-ro',
    protocol: 'Coordinator calls Ba-ro immediately after last move is completed',
  },
  {
    step: '7. Rest',
    firstPoomsae: 'She-uh',
    secondPoomsae: 'She-uh',
    protocol: 'Athletes take rest in place',
  },
  {
    step: '8. Intermediate',
    firstPoomsae: 'Cha-ryeot → Kyeong-rye → Tuae-jang → Pyo-chul',
    secondPoomsae: 'Pyo-chul',
    protocol: 'Display 1st Poomsae score or transition to 2nd Poomsae',
  },
  {
    step: '9. Decision & Exit',
    firstPoomsae: '—',
    secondPoomsae: 'Walk between competitors → Face each other (Cha-ryeot Kyeong-rye) → Face forward → Chung-Seung / Hong-Seung → Tuae-jang',
    protocol: 'Coordinator raises winning athlete hand; athletes exit arena',
  },
]

// ==============================================================================
// 3. RECOGNIZED POOMSAE DEDUCTIONS & SLOW MOVEMENTS
// ==============================================================================

export interface RecognizedDeductionItem {
  id: string
  type: 'minor' | 'major' | 'procedural'
  deduction: string
  title: string
  description: string
  examples: string[]
}

export const recognizedAccuracyDeductions: RecognizedDeductionItem[] = [
  {
    id: 'ded-minor-01',
    type: 'minor',
    deduction: '-0.1 Point',
    title: 'Minor Movement & Accuracy Mistakes',
    description: 'Small errors in technique trajectory, balance, or chamber angles. Every minor fault is penalized with NO limit for repeated occurrences.',
    examples: [
      'Incorrect execution of motion, but still recognizable as designated technique',
      'Strikes or blocks not aligned with expected target height (groin, solar plexus, or philtrum)',
      'Failure crossing body center line when blocking (e.g. Momtong Anmakki)',
      'Using wrong part of foot while kicking (e.g. flat instep instead of ball of foot)',
      'Poor chamber or sluggish retraction of kicks',
      'Incorrect chamber placement for block or strike',
      'Slight loss of balance impacting accuracy',
      'Inaccurate thumb placement on fist',
      'Inappropriate foot angle during stance (e.g. rear foot >30° in Apkubi)',
      'Fingers closed around lip of elbow during elbow strike',
      'Not maintaining closed fist throughout duration of technique',
      'Vertical Apchagi looking straight forward instead of looking at the kicking target (-0.1)',
    ],
  },
  {
    id: 'ded-major-01',
    type: 'major',
    deduction: '-0.3 Point',
    title: 'Major Structural Errors & Omissions',
    description: 'Substantial structural deviations, omitted mandatory movements, or major loss of balance. All referees must record these infractions.',
    examples: [
      'Incorrect technique, omitted technique, or extra technique added',
      'Omitted Kihap, or Kihap performed at incorrect movement',
      'Omitted stomping (Jitzikgi), or stomping at wrong movement',
      'Significant loss of balance that impacts accuracy',
      'Supporting pelvis with open hand to achieve higher kicks (e.g. Koryo Yopchagi)',
      'Hesitation, pause or interruption for four (4) or more movements',
      'Looking in wrong direction; eyes not looking in movement direction (e.g. Taegeuk 7 Jang, Keumgang)',
      'Vertical Apchagi looking down = -0.3 (looking straight = -0.1)',
      'Lifting chin too high during Vertical kick (head up): evaluated under Presentation (Expression of Energy)',
      'Article 16 Clarification: Multiple deduction cases within a single stance receive max 1 Gam-Jeom total',
      'Important Rule Update: Zero deductions for ending position differing from starting position',
      'Important Rule Update: No accuracy deduction for missing lead arm (penalized under presentation power)',
    ],
  },
  {
    id: 'ded-proc-01',
    type: 'procedural',
    deduction: '-0.3 / -0.6 Point',
    title: 'Procedural Major Deductions (Declared Before Final Score)',
    description: 'Violations declared by the referee and recorder table before publishing the final score.',
    examples: [
      'Boundary Line: Both feet crossing boundary line = -0.3 (deducted from final score)',
      'Time Limit: Exceeding 90-second time limit = -0.3 (deducted from final score)',
      'Restart (-0.6): Any method other than Side-by-Side. Reset accuracy, deduct -0.6 (starts at 3.4), and resume timer without resetting 90s',
      'Side-by-Side Restart: Contestant may self-correct. Referees deduct 2 majors (-0.6 each, -1.2 total) from accuracy at the end to signal restart',
    ],
  },
]

export const slowMovements5to8s = [
  { poomsae: 'Taegeuk 6 Jang', stance: 'Naranhi Seogi', technique: 'Arae-Hechomakki', duration: '5–8s (Recommended)', note: '' },
  { poomsae: 'Taegeuk 7 Jang', stance: 'Moa Seogi', technique: 'Bojumeok', duration: '5–8s (Recommended)', note: '' },
  { poomsae: 'Koryo', stance: 'Naranhi Seogi', technique: 'Tongmilgi', duration: '5–8s (Recommended)', note: '' },
  { poomsae: 'Keumgang', stance: 'Naranhi Seogi', technique: 'Arae-Hechomakki', duration: '5–8s (Recommended)', note: '' },
  { poomsae: 'Shipjin', stance: 'Naranhi Seogi', technique: 'Hwangsomakki', duration: '5–8s (Recommended)', note: '' },
  { poomsae: 'Shipjin', stance: 'Dwikubi, Apkubi', technique: 'Opening fist → hands turning → Pyonsonkkeut Opeotzireugi', duration: '5–8s (Recommended)', note: '' },
  { poomsae: 'Shipjin', stance: 'Apkubi', technique: 'Bawimilgi', duration: '5–8s (Recommended)', note: '' },
  { poomsae: 'Jitae', stance: 'Dwikubi', technique: '* Momtong Bakkatmakki', duration: '5–8s (Recommended)', note: '* Changed from 8s to 5–8 recommended' },
  { poomsae: 'Jitae', stance: 'Apkubi', technique: '* Olgulmakki', duration: '5–8s (Recommended)', note: '* Changed from 8s to 5–8 recommended' },
  { poomsae: 'Chonkwon', stance: 'Dwikubi', technique: 'Sonnal Wesanteulmakki', duration: '5–8s (Recommended)', note: '' },
  { poomsae: 'Chonkwon', stance: 'Beom Seogi', technique: 'Taesanmilgi', duration: '5–8s (Recommended)', note: '' },
]

export const slowMovements8s = [
  { poomsae: 'Taegeuk 8 Jang', stance: 'Apkubi', technique: 'Dangyo Teokjireugi', duration: '8s Full Duration', note: '' },
  { poomsae: 'Koryo', stance: 'Moa Seogi', technique: 'Mejumeok Arae Pyojeokchigi', duration: '8s Full Duration', note: '' },
  { poomsae: 'Keumgang', stance: 'Hakdari Seogi', technique: 'Keumgang Makki', duration: '8s Full Duration', note: '' },
  { poomsae: 'Pyongwon', stance: 'Naranhi Seogi', technique: '* Sonnal Arae Hechomakki and Tongmilgi', duration: '8s Full Duration', note: '* Combined movements total 8s' },
  { poomsae: 'Shipjin', stance: 'Juchum Seogi & Standing up', technique: '* Sonnal Momtong Hechomakki → Sonnal Arae Hechomakki → (Closed fists) Keula Oligi', duration: '8s Full Duration', note: '* Combined movements total 8s' },
  { poomsae: 'Jitae', stance: 'Apkubi', technique: 'Olgulmakki and Momtong Barojireugi', duration: '8s Full Duration', note: '' },
  { poomsae: 'Chonkwon', stance: 'Moa Seogi', technique: '** Kyopson Junbiseogi → Nalgaepyogi', duration: '8s Full Duration', note: '** Changed from 5s to 8s' },
  { poomsae: 'Chonkwon', stance: 'Apkubi', technique: '* Clenching fist, twisting wrist, step forward to Momtong Barojireugi', duration: '8s Full Duration', note: '* Combined movements total 8s' },
]

// ==============================================================================
// 4. FREESTYLE POOMSAE DATASET & EXACT SCORING TIERS
// ==============================================================================

export interface FreestyleSkill {
  id: string
  number: string
  name: string
  koreanName: string
  baseScoreRange: string
  bonusTiers: { label: string; points: string }[]
  measurementCriteria: string
  zeroScoreConditions: string
  keyPoints: string[]
}

export const freestyleTechnicalSkills: FreestyleSkill[] = [
  {
    id: 'fs-skill-01',
    number: '#1',
    name: 'Jumping Side Kick',
    koreanName: '뛰어 옆차기',
    baseScoreRange: '0.1 – 0.7 pts (Mastery: Balance, Execution, Power, Landing)',
    bonusTiers: [
      { label: 'Body Level', points: '+0.1 pt' },
      { label: 'Face Level', points: '+0.2 pts' },
      { label: 'Over Face Level', points: '+0.3 pts' },
    ],
    measurementCriteria: 'Height is determined by the middle horizontal line between highest point of kicking foot and lowest point of bottom foot. If bottom foot touches kicking leg, height is determined solely by kicking leg.',
    zeroScoreConditions: 'Must be executed at least at belt height; kicks below belt height receive 0.0 points. No run-up step limit.',
    keyPoints: [
      'Base Score (0.1–0.7): Mastery of balance, power, execution, and landing stability.',
      'Bonus (+0.1 / +0.2 / +0.3): Middle line elevation (Body, Face, Over Face Level).',
      'Off-balance deduction: -0.1 / -0.2 / -0.3 from base score.',
    ],
  },
  {
    id: 'fs-skill-02',
    number: '#2',
    name: 'Multiple Kicks in One Jump',
    koreanName: '도약 다단차기',
    baseScoreRange: '0.1 – 0.7 pts (Mastery: Height, Balance, Accuracy, Power)',
    bonusTiers: [
      { label: '3 Kicks (Any type)', points: '+0.1 pt' },
      { label: '4 Kicks (Any type)', points: '+0.2 pts' },
      { label: '5 Kicks (Any type)', points: '+0.3 pts' },
    ],
    measurementCriteria: 'Every counted kick must achieve at least 80% knee extension. Permitted: Front, Scissor, Roundhouse, Side, Hook. Scissor kicks count as 2 kicks. More kick variety earns higher marks.',
    zeroScoreConditions: 'Minimum 3 kicks required above waist height relative to standing position; <3 kicks above waist = 0.0 score. Duck feet (flipper kicks) = 0.0 points.',
    keyPoints: [
      'Base Score (0.1–0.7): Powerful impact and rapid retraction velocity.',
      'Bonus (+0.1 / +0.2 / +0.3): Quantity tiers (3 kicks, 4 kicks, 5 kicks).',
      'No run-up step limitation.',
    ],
  },
  {
    id: 'fs-skill-03',
    number: '#3',
    name: 'Gradient of Spins in a Spin Kick',
    koreanName: '회전도에 따른 회전 발차기',
    baseScoreRange: '0.1 – 0.7 pts (Mastery: Balance, Height, Accuracy, Landing)',
    bonusTiers: [
      { label: '360° Rotation', points: '+0.1 pt' },
      { label: '540° Rotation', points: '+0.2 pts' },
      { label: '720° or greater Rotation', points: '+0.3 pts' },
    ],
    measurementCriteria: 'Degrees of axial rotation completed while fully airborne before kicking contact and ground landing.',
    zeroScoreConditions: 'Kick must be executed at waist height or above while fully airborne. If no kick is delivered or if kick occurs after landing = 0.0 score.',
    keyPoints: [
      'Base Score (0.1–0.7): Rotational acceleration, head spotting, and stable landing.',
      'Bonus (+0.1 / +0.2 / +0.3): Rotational degree tiers (360°, 540°, 720°+).',
      'Landing Timing: Kick contact must occur prior to ground touchdown.',
    ],
  },
  {
    id: 'fs-skill-04',
    number: '#4',
    name: 'Kyorugi-Style Consecutive Kicks',
    koreanName: '겨루기 스타일 연속 발차기',
    baseScoreRange: '0.1 – 0.7 pts (Mastery: Balance, Sparring Accuracy, Cadence)',
    bonusTiers: [
      { label: 'Low Level Complexity', points: '+0.1 pt' },
      { label: 'Mid Level Complexity', points: '+0.2 pts' },
      { label: 'High Level (Tornado, Double low-high, Axe, Spin Hook)', points: '+0.3 pts' },
    ],
    measurementCriteria: 'Must start with 3 to 5 bounces in place. First 3 bounces strictly in place (no switching/moving). 7 to 10 consecutive sparring kicks traveling in a forward direction (max 90° turn).',
    zeroScoreConditions: '<3 bounces or moving during first 3 bounces = 0.0 score. >5 bounces = Presentation deduction. <3 kicks = 0.0. Turning back before 7 kicks = 0.0. Adding acrobatics before 7 kicks = 0.0.',
    keyPoints: [
      'Cadence: 7 to 10 rapid sparring kicks without interruption.',
      'Counting: Double kicks count as 1; triple kicks count as 2.',
      'Blocks/punches allowed as sparring tactics, but do not count toward kicking tally.',
    ],
  },
  {
    id: 'fs-skill-05',
    number: '#5',
    name: 'Acrobatic Kicking Technique',
    koreanName: '아크로바틱 발차기',
    baseScoreRange: '0.1 – 0.7 pts (Mastery: Balance, Accuracy, Inversion, Landing)',
    bonusTiers: [
      { label: 'Low Level Difficulty', points: '+0.1 pt' },
      { label: 'Mid Level Difficulty', points: '+0.2 pts' },
      { label: 'High Level (Multi-axis flips, saltos with kicks)', points: '+0.3 pts' },
    ],
    measurementCriteria: 'Airborne inversion, trajectory, and execution with at least 80% knee extension while inverted. Full routines (e.g. roundoff backhandspring followed by acrobatic kick) evaluated for difficulty.',
    zeroScoreConditions: 'Inversion without kick or with duck feet = 0.0 points. Absolutely NO BOOST, NO LIFT, NO STEP-UP in individual/pair (0 points). Maximum 3 acrobatics per routine (-0.3 per extra).',
    keyPoints: [
      'Extension: Kick must achieve ≥80% extension while inverted.',
      'Ceiling: Maximum 3 acrobatic kicks permitted in entire routine.',
    ],
  },
  {
    id: 'fs-skill-06',
    number: '#6',
    name: 'Basic Movements & Practicability',
    koreanName: '기본동작 및 실용성',
    baseScoreRange: '0.0 – 1.0 pts (Allocated in 0.1 step increments)',
    bonusTiers: [
      { label: 'Standard Taekwondo Density', points: '0.1 – 0.4 pts' },
      { label: 'Symmetry & Practicality', points: '0.5 – 0.7 pts' },
      { label: 'Full Traditional Mastery', points: '0.8 – 1.0 pts' },
    ],
    measurementCriteria: 'Are there enough basic hand and foot techniques and stances throughout? Are they practical, up to standard like Recognized Poomsae, and symmetrical?',
    zeroScoreConditions: 'Performance lacking Taekwondo techniques receives 0.0. Missing mandatory stances (Dwitkubi, Beom Seogi, Hakdari Seogi) incurs -0.3 deduction each.',
    keyPoints: [
      'Mandatory Stances: Dwitkubi, Beom Seogi, Hakdari Seogi (-0.3 per missing stance).',
      'Slow Kicking Motion: Not mandatory, but stability demonstrated is rewarded in Presentation (Creativity).',
    ],
  },
]

export const boardBreakingRequirements = [
  { skill: 'Spinning Kick', minBoards: '1 Board', maxBoards: '—', totalRule: 'Minimum 1 board broken at or above waist height.' },
  { skill: 'Consecutive Kicks', minBoards: '3 Boards', maxBoards: '—', totalRule: 'Minimum 3 boards broken in continuous forward flow by single kicker.' },
  { skill: 'Acrobatic Kicks', minBoards: '1 Board', maxBoards: '3 Boards', totalRule: '1 to 3 boards broken during inverted airborne flight.' },
  { skill: 'Total Mixed Team Boards', minBoards: '5 Boards Min', maxBoards: '9 Boards Max', totalRule: 'Mixed Team routine must feature 5 to 9 boards total.' },
]

export const assistanceAuthorizationMatrix = [
  { action: 'Jumping Side Kick', individualPair: 'Not Allowed', mixedTeam: 'Not Allowed' },
  { action: 'Multiple Kicks in Air', individualPair: 'Not Allowed', mixedTeam: 'Not Allowed' },
  { action: 'Jump Turn Kick', individualPair: 'Not Allowed', mixedTeam: 'Allowed: Piggyback Only' },
  { action: 'Consecutive Kicks', individualPair: 'Not Allowed', mixedTeam: 'Not Allowed' },
  { action: 'Acrobatic Kick', individualPair: 'Not Allowed', mixedTeam: 'Allowed: Piggyback, Boosting, Holding Sticks' },
  { action: 'Basic Movements', individualPair: 'Not Allowed', mixedTeam: 'Not Allowed' },
]

export const freestyleDeductions = [
  { violation: 'Missing Mandatory Stance (Dwitkubi, Beom, Hakdari)', deduction: '-0.3 per stance', category: 'Technical Sub-total', notes: 'Must be performed clearly and accurately by all team members' },
  { violation: 'Boundary Violation (Both feet out of bounds)', deduction: '-0.3 per occurrence', category: 'Total Score', notes: 'Exiting 10x10m or 12x12m competition ring' },
  { violation: 'Time Violation (<90s undertime or >100s overtime)', deduction: '-0.3 flat penalty', category: 'Total Score', notes: 'Official timer buzzer' },
  { violation: 'Falling Down (In Sequence)', deduction: '-0.3 per occurrence', category: 'Base Technical Skill Score', notes: 'Loss of footing during mandatory technical skill' },
  { violation: 'Falling Down (Out of Sequence)', deduction: '-0.3 per occurrence', category: 'Total Technical Score (6.0)', notes: 'Loss of footing during choreography' },
  { violation: 'Loss of Balance (e.g. Hakdari, slow motion kicks)', deduction: '-0.1 per occurrence', category: 'Basic Movements Score', notes: 'Minor stability loss' },
  { violation: 'Acrobatic Limit Exceeded (>3 acrobatic kicks)', deduction: '-0.3 per extra skill', category: 'Total Score', notes: 'Max 3 permitted in routine' },
  { violation: 'Setup Delay / Hesitation (>3 seconds before trick)', deduction: '-0.3 per occurrence', category: 'Basic Movements & Practicability', notes: 'Prolonged pause before technical element' },
  { violation: 'Team Freezing / Pausing (≥3s without movement)', deduction: '-0.3 major deduction', category: 'Total Score', notes: 'All athletes static simultaneously' },
  { violation: 'Holding Teammate during slow-motion kicks', deduction: '-0.3 per occurrence', category: 'Total Score', notes: 'Physical support during balance kicks' },
  { violation: 'Pair/Team Desynchronization (>2 moves out of sync)', deduction: '-0.3 per movement', category: 'Total Score', notes: 'Deducted per movement until back in sync' },
  { violation: 'Illegal Pair Assistance (Boost or piggyback in pair)', deduction: '0.0 Technical / -0.3', category: 'Skill Score or Total Score', notes: 'Assistance only legal in Mixed Team' },
  { violation: 'Dance Movements / Pure Dancing in Freestyle', deduction: 'Deduction', category: 'Presentation Score', notes: 'No pure dance movements allowed' },
  { violation: 'Acrobatics without a Kick', deduction: '0.0 / Deduction', category: 'Basic Movements #6', notes: 'All acrobatics MUST have a kick' },
  { violation: 'Unconnected Non-TKD Movements', deduction: 'Deduction', category: 'Presentation Score', notes: 'Must be fluidly connected to TKD movements' },
  { violation: 'Political / Religious / 18+ Messages', deduction: 'Disqualification (DSQ)', category: 'Disciplinary Action', notes: 'Strictly prohibited in music or choreography' },
  { violation: 'Copyright Infringement in Music/Choreography', deduction: 'Disqualification (DSQ)', category: 'Disciplinary Action', notes: 'Must have legal rights to performance music' },
  { violation: 'Prohibited Verbal Audio (Lyrics, Words, Humming, Whistling, Exhales)', deduction: 'Deduction / Penalty', category: 'Presentation & Audio', notes: 'Music must be purely instrumental without vocal sounds' },
]

export const presentationScoringDetails = [
  {
    category: 'Creativeness (1.0 Point)',
    scoreBand: '0.0 – 1.0',
    description: 'Choreography originality, movement trajectory (Yeon-mu), and innovative integration of martial tricking with traditional foundations.',
    subElements: [
      'Flow of continuous lines across the 10x10m or 12x12m arena',
      'Rewarding stable single slow kicks and creative combinations',
    ],
  },
  {
    category: 'Harmony & Synchronization (1.0 Point)',
    scoreBand: '0.0 – 1.0',
    description: 'Synergy among team members and harmony between physical tempo, audio cadence, and visual composure.',
    subElements: [
      'Flawless synchronization in Pair and Mixed Team divisions',
      'Smooth setup for board breaking without breaking performance flow',
    ],
  },
  {
    category: 'Expression of Energy (1.0 Point)',
    scoreBand: '0.0 – 1.0',
    description: 'Explosive martial spirit, resonant impact execution, and supreme competitive confidence.',
    subElements: [
      'Strong, concise Kihap delivery',
      'Sharp, crisp acceleration on all strikes and kicks',
    ],
  },
  {
    category: 'Music & Choreography (1.0 Point)',
    scoreBand: '0.0 – 1.0',
    description: 'Artistic adherence to music rhythm without prohibited verbal audio or lyrics.',
    subElements: [
      'Seamless choreography matched to musical accents',
      'Zero lyrics, words, humming, whistling, or loud mouth exhales',
    ],
  },
]

// ==============================================================================
// 5. HANMADANG (WORLD TAEKWONDO HANMADANG) DATASET
// ==============================================================================

export interface HanmadangDivision {
  eventGroup: string
  koreanName: string
  events: { name: string; criteria: string; apparatus: string }[]
}

export const hanmadangEventsData: HanmadangDivision[] = [
  {
    eventGroup: 'Power Breaking (Kyokpa)',
    koreanName: '위력격파',
    events: [
      { name: 'Fist Breaking (Jumeok Kyokpa)', criteria: 'Maximum standard pine boards broken with single direct punch', apparatus: 'Standard 2.0cm wooden boards' },
      { name: 'Knifehand Breaking (Sonnal Kyokpa)', criteria: 'Maximum standard pine boards broken with knifehand strike', apparatus: 'Standard 2.0cm wooden boards' },
      { name: 'Side Kick Breaking (Yop Chagi Kyokpa)', criteria: 'Maximum boards broken with horizontal thrusting side kick', apparatus: 'Standard 2.0cm wooden boards' },
      { name: 'Back Kick Breaking (Dwit Chagi Kyokpa)', criteria: 'Maximum boards broken with direct turning back kick', apparatus: 'Standard 2.0cm wooden boards' },
    ],
  },
  {
    eventGroup: 'Special / High Jump Breaking',
    koreanName: '특기격파 / 높이뛰어격파',
    events: [
      { name: 'High Jump Kick Breaking (Nopi Twieo Chagi)', criteria: 'Highest vertical target touch and clean break above ground level', apparatus: 'Suspended electronic board apparatus' },
      { name: 'Long Jump Breaking (Meolli Twieo Chagi)', criteria: 'Greatest horizontal distance clearance while breaking target', apparatus: 'Horizontal distance measuring lane' },
      { name: 'Multi-Directional High Spin Breaking', criteria: '360°/540°/720° airborne spins breaking multiple sequential targets', apparatus: 'Multi-post target poles' },
    ],
  },
  {
    eventGroup: 'Creative Poomsae & Team Demo',
    koreanName: '창작품새 & 종합시범',
    events: [
      { name: 'Creative Poomsae (Individual & Team)', criteria: 'Original choreographed Taekwondo forms set to music with martial flow', apparatus: 'Open 12x12m mat' },
      { name: 'Team Demonstration (All-Around Demo)', criteria: 'Comprehensive team martial exhibition featuring story, acrobatics, and power', apparatus: 'Full 12x12m competition arena' },
    ],
  },
]
