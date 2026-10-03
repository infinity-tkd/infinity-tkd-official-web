/**
 * ==============================================================================
 * WORLD TAEKWONDO POOMSAE COMPETITION RULES & OPERATIONAL REGULATIONS (FULL MASTER)
 * ==============================================================================
 * Authoritative 10-Chapter Dataset for Recognized, Freestyle, Para, and Operational Standards.
 */

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

export interface ScoringComponent {
  component: string
  maxPoints: string
  subCriteria: string[]
  badgeColor: string
}

export interface CoordinatorCommand {
  phase: string
  firstPoomsae: string
  secondPoomsae: string
  koreanTerm?: string
}

export interface SlowMovement {
  poomsae: string
  stance: string
  technique: string
  duration: string
}

export interface FreestyleSkill {
  id: string
  number: string
  name: string
  koreanName: string
  baseScore: string
  bonusScore: string
  bonuses: { label: string; points: string }[]
  measurementCriteria: string
  mandatoryThresholds: string
  description: string
  keyPoints: string[]
}

export interface BoardBreakingRule {
  skillCategory: string
  minBoards: string
  maxBoards: string
  protocols: string[]
}

export interface AssistanceRule {
  action: string
  individualPair: string
  mixedTeam: string
  details?: string
}

export interface FreestyleDeduction {
  violation: string
  deduction: string
  category: string
  notes?: string
}

export interface SanctionTier {
  tier: string
  title: string
  measures: string[]
  badgeColor: string
}

export interface StanceGeometry {
  name: string
  koreanName: string
  length: string
  rearAngle: string
  weightDistribution: { front: number; rear: number }
  description: string
  deductions: string[]
}

export interface TerminologyItem {
  koreanName: string
  englishName: string
  category: 'stance' | 'block' | 'strike' | 'basic14'
  description?: string
}

// ------------------------------------------------------------------------------
// Chapter 2: Recognized Age Divisions
// ------------------------------------------------------------------------------
export const recognizedDivisionsData: RecognizedDivision[] = [
  { division: 'Cadet Division', ageCriteria: '12 to 14 years old', individual: 'Male / Female', pair: '1 Male + 1 Female', team: '3 Males / 3 Females' },
  { division: 'Junior Division', ageCriteria: '15 to 17 years old', individual: 'Male / Female', pair: '1 Male + 1 Female', team: '3 Males / 3 Females' },
  { division: 'Under 30 Division', ageCriteria: '18 to 30 years old', individual: 'Male / Female', pair: '1 Male + 1 Female', team: '3 Males / 3 Females' },
  { division: 'Under 40 Division', ageCriteria: '31 to 40 years old', individual: 'Male / Female', pair: '—', team: '—' },
  { division: 'Under 50 Division', ageCriteria: '41 to 50 years old (31–50 for Pair/Team)', individual: 'Male / Female', pair: '1 Male + 1 Female', team: '3 Males / 3 Females' },
  { division: 'Under 60 Division', ageCriteria: '51 to 60 years old', individual: 'Male / Female', pair: '1 Male + 1 Female', team: '3 Males / 3 Females' },
  { division: 'Under 65 Division', ageCriteria: '61 to 65 years old', individual: 'Male / Female', pair: '—', team: '—' },
  { division: 'Over 65 Division', ageCriteria: '66 years old and older (61+ for Pair/Team)', individual: 'Male / Female', pair: '1 Male + 1 Female', team: '3 Males / 3 Females' },
  { division: 'Poomsae Masters', ageCriteria: '18 years old and older (All ages 18+)', individual: 'Male / Female', pair: '—', team: '—' },
]

// ------------------------------------------------------------------------------
// Chapter 3: Compulsory Poomsae Pools
// ------------------------------------------------------------------------------
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

// ------------------------------------------------------------------------------
// Chapter 4: Coordinator Commands
// ------------------------------------------------------------------------------
export const coordinatorCommands: CoordinatorCommand[] = [
  {
    phase: 'Athlete Entry',
    firstPoomsae: 'Chung, Hong Chool-Jeon',
    secondPoomsae: 'Chung, Hong Chool-Jeon',
    koreanTerm: '청, 홍 출전',
  },
  {
    phase: 'Salutation',
    firstPoomsae: 'Cha-ryeot → Kyeong-rye',
    secondPoomsae: 'Cha-ryeot',
    koreanTerm: '차렷 → 경례',
  },
  {
    phase: 'Poomsae Display',
    firstPoomsae: 'Poomsae displays on screen; athletes adjust',
    secondPoomsae: 'Poomsae displays on screen; athletes adjust',
    koreanTerm: '품새 표출',
  },
  {
    phase: 'Execution',
    firstPoomsae: 'Joon-bi → Shi-jak',
    secondPoomsae: 'Joon-bi → Shi-jak',
    koreanTerm: '준비 → 시작',
  },
  {
    phase: 'Completion',
    firstPoomsae: 'Ba-ro → She-uh',
    secondPoomsae: 'Ba-ro → She-uh',
    koreanTerm: '바로 → 쉬어',
  },
  {
    phase: 'Intermediate Reset',
    firstPoomsae: 'Tuae-jang → Pyo-chul',
    secondPoomsae: 'Cha-ryeot → Kyeong-rye → Pyo-chul',
    koreanTerm: '퇴장 → 표출',
  },
  {
    phase: 'Decision & Exit',
    firstPoomsae: '—',
    secondPoomsae: 'Coordinator walks between athletes → athletes face each other → Cha-ryeot Kyeong-rye → athletes face forward → Chung-Seung / Hong-Seung → Tuae-jang',
    koreanTerm: '판정 & 퇴장',
  },
]

// ------------------------------------------------------------------------------
// Chapter 5: Recognized Poomsae Scoring Components & Slow Movement Timings
// ------------------------------------------------------------------------------
export const recognizedScoringComponents: ScoringComponent[] = [
  {
    component: 'Accuracy (4.0 Max)',
    maxPoints: '4.0 Points',
    subCriteria: [
      'Accuracy in basic techniques (stances, blocks, thrusts, kicks)',
      'Accuracy of individual movements of the designated Poomsae pattern',
      'Body balance, alignment, and correct chamber trajectories',
      'Minor deduction (-0.1): Slight limb tremor, improper chamber height, slight hesitation',
      'Major deduction (-0.3): Incorrect stance length, wrong block/punch, omitting Kihap, 3s pause',
      'Side-by-side Restart (-1.2): Assessed standard deductions plus 2 major deductions (-0.6 each)',
    ],
    badgeColor: '#09BB00',
  },
  {
    component: 'Presentation: Speed & Power (2.0 Max)',
    maxPoints: '2.0 Points',
    subCriteria: [
      'Maximum force release at point of impact',
      'Explosive acceleration without stiffness in prep phase',
      'Kinetic snap and instant muscular tension-relaxation contrast',
    ],
    badgeColor: '#EF2F38',
  },
  {
    component: 'Presentation: Rhythm & Tempo (2.0 Max)',
    maxPoints: '2.0 Points',
    subCriteria: [
      'Control of power: gradual vs rapid acceleration',
      'Fluid transitions between combinations without awkward pauses',
      'Adherence to designated slow movement duration windows (5-8s / 8s)',
    ],
    badgeColor: '#0042EA',
  },
  {
    component: 'Presentation: Expression of Energy (2.0 Max)',
    maxPoints: '2.0 Points',
    subCriteria: [
      'Quality of focus (Siseon) maintaining eye line along technical paths',
      'Resonant, sharp Kihap delivered at specified movement coordinates',
      'Dojang dignity, posture composure, and martial spirit',
    ],
    badgeColor: '#A855F7',
  },
]

export const slowMovements5to8s: SlowMovement[] = [
  { poomsae: 'Taegeuk 6 Jang', stance: 'Naranhi Seogi', technique: 'Arae-Hechomakki', duration: '5–8s (Recommended)' },
  { poomsae: 'Taegeuk 7 Jang', stance: 'Moa Seogi', technique: 'Bojumeok', duration: '5–8s (Recommended)' },
  { poomsae: 'Koryo', stance: 'Naranhi Seogi', technique: 'Tongmilgi', duration: '5–8s (Recommended)' },
  { poomsae: 'Keumgang', stance: 'Naranhi Seogi', technique: 'Arae-Hechomakki', duration: '5–8s (Recommended)' },
  { poomsae: 'Shipjin', stance: 'Naranhi Seogi', technique: 'Hwangsomakki', duration: '5–8s (Recommended)' },
  { poomsae: 'Shipjin', stance: 'Dwikubi, Apkubi', technique: 'Opening fist → hands turning → Pyonsonkkeut Opeotzireugi', duration: '5–8s (Recommended)' },
  { poomsae: 'Shipjin', stance: 'Apkubi', technique: 'Bawimilgi', duration: '5–8s (Recommended)' },
  { poomsae: 'Jitae', stance: 'Dwikubi', technique: 'Momtong Bakkatmakki', duration: '5–8s (Recommended)' },
  { poomsae: 'Jitae', stance: 'Apkubi', technique: 'Olgulmakki', duration: '5–8s (Recommended)' },
  { poomsae: 'Chonkwon', stance: 'Dwikubi', technique: 'Sonnal Wesanteulmakki', duration: '5–8s (Recommended)' },
  { poomsae: 'Chonkwon', stance: 'Beom Seogi', technique: 'Taesanmilgi', duration: '5–8s (Recommended)' },
]

export const slowMovements8s: SlowMovement[] = [
  { poomsae: 'Taegeuk 8 Jang', stance: 'Apkubi', technique: 'Dangyo Teokjireugi', duration: '8s Full Duration' },
  { poomsae: 'Koryo', stance: 'Moa Seogi', technique: 'Mejumeok Arae Pyojeokchigi', duration: '8s Full Duration' },
  { poomsae: 'Keumgang', stance: 'Hakdari Seogi', technique: 'Keumgang Makki', duration: '8s Full Duration' },
  { poomsae: 'Pyongwon', stance: 'Naranhi Seogi', technique: 'Sonnal Arae Hechomakki and Tongmilgi (combined)', duration: '8s Full Duration' },
  { poomsae: 'Shipjin', stance: 'Juchum Seogi & Standing up', technique: 'Sonnal Momtong Hechomakki → Sonnal Arae Hechomakki → Closed fists Keula Oligi', duration: '8s Full Duration' },
  { poomsae: 'Jitae', stance: 'Apkubi', technique: 'Olgulmakki and Momtong Barojireugi (combined)', duration: '8s Full Duration' },
  { poomsae: 'Chonkwon', stance: 'Moa Seogi', technique: 'Kyopson Junbiseogi → Nalgaepyogi (combined)', duration: '8s Full Duration' },
  { poomsae: 'Chonkwon', stance: 'Apkubi', technique: 'Clenching fist, twisting wrist, step forward to Momtong Barojireugi', duration: '8s Full Duration' },
]

// ------------------------------------------------------------------------------
// Chapter 6: Freestyle Scoring Components & Mandatory Skills
// ------------------------------------------------------------------------------
export const freestyleScoringComponents: ScoringComponent[] = [
  {
    component: 'Technical: 5 Compulsory Foot Techniques (5.0 Max)',
    maxPoints: '5.0 Points (1.0 pt each)',
    subCriteria: [
      '#1 Jumping Side Kick (0.1–0.7 base + 0.1–0.3 height bonus)',
      '#2 Multiple Kicks in One Jump (0.1–0.7 base + 0.1–0.3 quantity bonus for 3/4/5 kicks with ≥80% extension)',
      '#3 Gradient of Spins in a Spin Kick (0.1–0.7 base + 0.1–0.3 rotation bonus for 360°/540°/720°+)',
      '#4 Kyorugi-Style Consecutive Kicks (3–5 bounces + 7–10 sparring kicks + 0.1–0.3 level bonus)',
      '#5 Acrobatic Kicking Technique (0.1–0.7 base + 0.1–0.3 difficulty bonus; max 3 acrobatics limit)',
    ],
    badgeColor: '#FF5733',
  },
  {
    component: 'Technical: Basic Movements & Practicability (1.0 Max)',
    maxPoints: '1.0 Point',
    subCriteria: [
      'Standardized basic hand and foot technique accuracy and density',
      'Mandatory stances: Dwitkubi, Beom Seogi, Hakdari Seogi (-0.3 per missing stance)',
      'Setup window limit: max 3 seconds before tricks (>3s incurs -0.3 deduction)',
    ],
    badgeColor: '#0042EA',
  },
  {
    component: 'Presentation: Creativeness (1.0 Max)',
    maxPoints: '1.0 Point',
    subCriteria: [
      'Originality and flow of choreography and spatial movement lines (Yeon-mu)',
      'Creative martial combinations connecting tricking to traditional fundamentals',
    ],
    badgeColor: '#A855F7',
  },
  {
    component: 'Presentation: Harmony & Sync (1.0 Max)',
    maxPoints: '1.0 Point',
    subCriteria: [
      'Synergy between physical movements, audio rhythm, and attire',
      'Precision synchronization in Pair and Mixed Team divisions (>2 desync moves = -0.3)',
    ],
    badgeColor: '#09BB00',
  },
  {
    component: 'Presentation: Expression of Energy (1.0 Max)',
    maxPoints: '1.0 Point',
    subCriteria: [
      'Martial confidence, explosive power delivery, and focused spirit',
    ],
    badgeColor: '#EF2F38',
  },
  {
    component: 'Presentation: Music & Choreography (1.0 Max)',
    maxPoints: '1.0 Point',
    subCriteria: [
      'Artistic timing and synchronization with copyrighted, lyric-free music',
    ],
    badgeColor: '#FFD505',
  },
]

export const freestyleTechnicalSkills: FreestyleSkill[] = [
  {
    id: 'fs-skill-01',
    number: '#1',
    name: 'Jumping Side Kick',
    koreanName: '뛰어 옆차기',
    baseScore: '0.1 – 0.7 pts',
    bonusScore: '0.1 – 0.3 pts',
    bonuses: [
      { label: 'Body Level', points: '+0.1 pt' },
      { label: 'Face Level', points: '+0.2 pts' },
      { label: 'Over Face Level', points: '+0.3 pts' },
    ],
    measurementCriteria:
      'Height is determined by the middle horizontal line between the highest point of the kicking foot and lowest point of the bottom foot. If the bottom foot touches the kicking leg, height is determined solely by the kicking leg. If executed vertically, scoring is based on the vertical distance between both feet.',
    mandatoryThresholds: 'Must be executed at least at belt height; kicks below belt height receive 0.0 points. There is no restriction on run-up steps.',
    description: 'Evaluated on balance, technique execution, power, and stable landing.',
    keyPoints: [
      'Base Score (0.1–0.7): Balance, sharpness of chamber, full heel impact extension, and clean landing.',
      'Bonus (+0.1 to +0.3): Elevation tiers (Body, Face, Over Face Level).',
      'Execution: No limit on preparation run-up steps before flight takeoff.',
    ],
  },
  {
    id: 'fs-skill-02',
    number: '#2',
    name: 'Multiple Kicks in One Jump',
    koreanName: '도약 다단차기',
    baseScore: '0.1 – 0.7 pts',
    bonusScore: '0.1 – 0.3 pts',
    bonuses: [
      { label: '3 Kicks (Any type)', points: '+0.1 pt' },
      { label: '4 Kicks (Any type)', points: '+0.2 pts' },
      { label: '5 Kicks (Any type)', points: '+0.3 pts' },
    ],
    measurementCriteria:
      'Every counted kick must achieve at least 80% knee extension. Permitted kicks include Front, Scissor, Roundhouse, Side, and Hook kicks. Scissor kicks count as two (2) kicks.',
    mandatoryThresholds:
      'A minimum of three (3) kicks must be delivered above waist height relative to a standing position; fewer than 3 kicks above waist height results in a 0.0 score. "Duck feet" (flipper kicks without extension) receive 0.0 points.',
    description: 'Evaluated on kick impact, rapid retraction, height, and landing stability.',
    keyPoints: [
      'Base Score (0.1–0.7): Crisp impact, rapid retraction velocity, and balanced landing.',
      'Bonus (+0.1 to +0.3): Quantity tiers (3 kicks, 4 kicks, 5 kicks in a single airborne takeoff).',
      'Scissor Kick Counting: A scissor kick is credited as 2 distinct kicks.',
    ],
  },
  {
    id: 'fs-skill-03',
    number: '#3',
    name: 'Gradient of Spins in a Spin Kick',
    koreanName: '회전도에 따른 회전 발차기',
    baseScore: '0.1 – 0.7 pts',
    bonusScore: '0.1 – 0.3 pts',
    bonuses: [
      { label: '360° Rotation', points: '+0.1 pt' },
      { label: '540° Rotation', points: '+0.2 pts' },
      { label: '720° or greater Rotation', points: '+0.3 pts' },
    ],
    measurementCriteria:
      'Degrees of axial rotation completed while fully airborne before kicking contact and landing.',
    mandatoryThresholds:
      'The kick must be executed at waist height or above while fully airborne. If no kick is delivered or if the kick occurs after landing, a 0.0 score is assigned.',
    description: 'Evaluated on rotational trajectory, body balance, kick elevation, and landing control.',
    keyPoints: [
      'Base Score (0.1–0.7): Centrifugal acceleration, head spot tracking, and stable non-wobbling landing.',
      'Bonus (+0.1 to +0.3): Rotational degree tiers (360°, 540°, 720°+).',
      'Landing Timing: Kick contact must occur prior to ground touchdown.',
    ],
  },
  {
    id: 'fs-skill-04',
    number: '#4',
    name: 'Kyorugi-Style Consecutive Kicks',
    koreanName: '겨루기 스타일 연속 발차기',
    baseScore: '0.1 – 0.7 pts',
    bonusScore: '0.1 – 0.3 pts',
    bonuses: [
      { label: 'Low Level Complexity', points: '+0.1 pt' },
      { label: 'Mid Level Complexity', points: '+0.2 pts' },
      { label: 'High Level (Tornado, Double low-high, Axe, Spin Hook)', points: '+0.3 pts' },
    ],
    measurementCriteria:
      'Preparation phase must feature 3 to 5 bounces in place. Kicking phase must comprise 7 to 10 consecutive sparring kicks traveling in a continuous forward direction (max 90° variation).',
    mandatoryThresholds:
      '<3 bounces or moving during first 3 bounces = 0.0 score. >5 bounces = Presentation deduction. <3 kicks = 0.0 score. Turning back before 7 kicks = 0.0 score. Adding acrobatic tricks before 7 kicks = 0.0 score.',
    description: 'Evaluated on sparring rhythm, continuous striking density, target elevation, and explosive cadence.',
    keyPoints: [
      'Bouncing Phase: 3 to 5 bounces in place strictly required.',
      'Kicking Cadence: 7 to 10 rapid sparring kicks without interruption.',
      'Technique Value: Double kicks count as 1 technique; triple kicks count as 2 techniques.',
    ],
  },
  {
    id: 'fs-skill-05',
    number: '#5',
    name: 'Acrobatic Kicking Technique',
    koreanName: '아크로바틱 발차기',
    baseScore: '0.1 – 0.7 pts',
    bonusScore: '0.1 – 0.3 pts',
    bonuses: [
      { label: 'Low Level Difficulty', points: '+0.1 pt' },
      { label: 'Mid Level Difficulty', points: '+0.2 pts' },
      { label: 'High Level Difficulty (Multi-axis flips, saltos with kicks)', points: '+0.3 pts' },
    ],
    measurementCriteria:
      'Evaluated on airborne inversion, execution quality, and clean landing with at least 80% knee extension.',
    mandatoryThresholds:
      'Inverted acrobatics without a kick or with duck feet receive 0.0 points. A MAXIMUM of 3 acrobatic kicking techniques are permitted in the entire routine. Each extra acrobatic skill beyond 3 incurs a -0.3 deduction from total score.',
    description: 'Evaluated on airborne height, inversion trajectory, technique extension, and controlled landing.',
    keyPoints: [
      'Knee Extension: Kick must achieve ≥80% extension while inverted or airborne.',
      'Acrobatic Ceiling: Maximum 3 acrobatic kicks allowed per routine.',
      'Excess Penalty: -0.3 points deducted per additional acrobatic element.',
    ],
  },
]

export const boardBreakingRules: BoardBreakingRule[] = [
  {
    skillCategory: 'Spinning Kick',
    minBoards: '1 board minimum',
    maxBoards: 'Dependent on routine total',
    protocols: [
      'Must be executed at or above waist height.',
      'Successful break earns Base Score plus Level Bonus (0.1–0.3 pts).',
      'Unsuccessful break or miss receives Base Score only (0.0 bonus points).',
    ],
  },
  {
    skillCategory: 'Consecutive Sparring Kicks',
    minBoards: '3 boards minimum',
    maxBoards: 'Dependent on routine total',
    protocols: [
      'Must be attempted in continuous flow.',
      'Partial breaks (e.g. 3 of 5 broken) meet minimum requirement and receive bonus, but Base Score is reduced -0.1 per unbroken board.',
    ],
  },
  {
    skillCategory: 'Acrobatic Kicking',
    minBoards: '1 board minimum',
    maxBoards: '3 boards maximum',
    protocols: [
      'Must be broken while executing inverted acrobatic technique.',
      'Cheating/premature breaking by board holders into the kick path incurs a -0.3 penalty deduction.',
    ],
  },
]

export const assistanceAuthorizationMatrix: AssistanceRule[] = [
  { action: 'Jumping Side Kick', individualPair: 'Not Allowed', mixedTeam: 'Not Allowed' },
  { action: 'Multiple Kicks in Air', individualPair: 'Not Allowed', mixedTeam: 'Not Allowed' },
  { action: 'Jump Turn Kick', individualPair: 'Not Allowed', mixedTeam: 'Allowed: Piggyback Only' },
  { action: 'Consecutive Kicks', individualPair: 'Not Allowed', mixedTeam: 'Not Allowed' },
  { action: 'Acrobatic Kick', individualPair: 'Not Allowed', mixedTeam: 'Allowed: Piggyback, Boosting, Holding Sticks' },
  { action: 'Basic Movements', individualPair: 'Not Allowed', mixedTeam: 'Not Allowed' },
]

export const freestyleDeductions: FreestyleDeduction[] = [
  { violation: 'Missing Mandatory Stance', deduction: '-0.3 per stance', category: 'Technical Score', notes: 'Dwitkubi, Beom Seogi, Hakdari Seogi' },
  { violation: 'Boundary Violation (Both feet out of bounds)', deduction: '-0.3 per occurrence', category: 'Total Score', notes: 'Exiting 10x10m or 12x12m ring' },
  { violation: 'Time Violation (<90s or >100s)', deduction: '-0.3 flat penalty', category: 'Total Score', notes: 'Official timer buzzer' },
  { violation: 'Falling Down (In Sequence)', deduction: '-0.3 per occurrence', category: 'Base Technical Skill Score', notes: 'Loss of footing during mandatory element' },
  { violation: 'Falling Down (Out of Sequence)', deduction: '-0.3 per occurrence', category: 'Total Technical Score (6.0)', notes: 'Loss of footing during choreography' },
  { violation: 'Loss of Balance (Stance wobble, slow kick loss)', deduction: '-0.1 per occurrence', category: 'Basic Movements Score', notes: 'Minor stability loss' },
  { violation: 'Acrobatic Limit Exceeded (>3 acrobatic kicks)', deduction: '-0.3 per extra skill', category: 'Total Score', notes: 'Max 3 permitted in routine' },
  { violation: 'Setup Hesitation / Delay (>3 seconds)', deduction: '-0.3 per occurrence', category: 'Basic Movements & Practicability', notes: 'Prolonged pause before trick' },
  { violation: 'Team Pausing / Freezing (≥3s without movement)', deduction: '-0.3 major deduction', category: 'Total Score', notes: 'All athletes static simultaneously' },
  { violation: 'Holding Teammate during slow-motion kicks', deduction: '-0.3 per occurrence', category: 'Total Score', notes: 'Physical support during balance kicks' },
  { violation: 'Pair/Team Desynchronization (>2 moves out of sync)', deduction: '-0.3 per movement', category: 'Total Score', notes: 'Deducted until back in sync' },
  { violation: 'Illegal Pair Assistance (Boost or piggyback in pair)', deduction: '0.0 Technical / -0.3', category: 'Skill Score or Total Score', notes: 'Assistance only legal in Mixed Team' },
]

export const sanctionTiers: SanctionTier[] = [
  {
    tier: 'Tier 1',
    title: 'Administrative Sanctions',
    measures: [
      'Official Verbal Warning from CSB Chair',
      'Formal Written Apology requirement to WT',
      'Immediate Athlete or Coach Disqualification (DSQ)',
    ],
    badgeColor: '#0042EA',
  },
  {
    tier: 'Tier 2',
    title: 'Accreditation & FOP Bans',
    measures: [
      'Immediate Revocation of Event Accreditation Pass',
      'Single-Day Field of Play (FOP) Arena Ban',
      'Tournament-Duration Venue Exclusion',
    ],
    badgeColor: '#FFD505',
  },
  {
    tier: 'Tier 3',
    title: 'Financial & Judicial Sanctions',
    measures: [
      'Monetary Fines ranging from $100 to $5,000 USD',
      'World Taekwondo Official Ranking Points Voided',
      'Referral to WT Disciplinary Committee for Multi-Year or Lifetime Ban',
    ],
    badgeColor: '#EF2F38',
  },
]

// ------------------------------------------------------------------------------
// Chapter 8: Para-Taekwondo Classifications
// ------------------------------------------------------------------------------
export const paraClassificationsData = [
  { code: 'P11, P12, P13', name: 'Visually Impaired', description: 'Total blindness to partial visual impairment.' },
  { code: 'P20', name: 'Intellectually Disabled', description: 'Recognized cognitive and intellectual impairments.' },
  { code: 'P31, P32, P33, P34', name: 'Neurological & Physical', description: 'Cerebral palsy, neurological hemiplegia, diplegia, or ataxia.' },
  { code: 'P50-', name: 'Wheelchair Classes', description: 'Athletes competing in manual or motorized athletic wheelchairs.' },
  { code: 'P71, P72M', name: 'Short Stature', description: 'Achondroplasia or restricted growth athletes.' },
  { code: 'P60', name: 'Deaf-Taekwondo', description: 'Athletes with verified hearing loss (≥55dB in better ear).' },
]

// ------------------------------------------------------------------------------
// Chapter 9: Stances Biomechanical Geometry
// ------------------------------------------------------------------------------
export const stancesGeometryData: StanceGeometry[] = [
  {
    name: 'Closed Stance (Moa Seogi)',
    koreanName: '모아서기',
    length: 'Feet Together (0)',
    rearAngle: '0° (Forward)',
    weightDistribution: { front: 50, rear: 50 },
    description: 'Feet fully touching together, toes pointing forward, straight knees, upright spine.',
    deductions: ['Toes pointing outward (-0.1)', 'Gap between feet (-0.1)'],
  },
  {
    name: 'Parallel Stance (Naranhi Seogi)',
    koreanName: '나란히서기',
    length: '1 Foot-Length Wide',
    rearAngle: '0° (Parallel)',
    weightDistribution: { front: 50, rear: 50 },
    description: 'Inner edges of feet perfectly parallel, exactly 1 foot-length apart, weight 50/50.',
    deductions: ['Too wide or narrow (-0.1)', 'Feet turned inward/outward (-0.1)'],
  },
  {
    name: 'Walking Stance (Ap Seogi)',
    koreanName: '앞서기',
    length: '3 Foot-Lengths Long',
    rearAngle: '30° Outward',
    weightDistribution: { front: 50, rear: 50 },
    description: 'Natural walking step; front foot straight, back foot 30°, inner edges on a straight line.',
    deductions: ['Stance too long/short (-0.1)', 'Rear foot exceeds 30° (-0.1)', 'Feet not aligned on straight line (-0.1)'],
  },
  {
    name: 'Forward Stance (Apkubi)',
    koreanName: '앞굽이',
    length: '4 to 4.5 Foot-Lengths Long',
    rearAngle: '30° Outward',
    weightDistribution: { front: 70, rear: 30 },
    description: '1–2 fists width between feet; front knee bent (covers view of toes), rear leg locked straight.',
    deductions: ['Stance too narrow (<1 fist) (-0.1)', 'Rear heel lifted off mat (-0.1)', 'Rear knee bent (-0.1)', 'Weight not 70/30 (-0.1)'],
  },
  {
    name: 'Back Stance (Dwitkubi)',
    koreanName: '뒷굽이',
    length: '3 Foot-Lengths Long',
    rearAngle: '90° Perpendicular ("L" Shape)',
    weightDistribution: { front: 30, rear: 70 },
    description: 'Front foot straight forward, rear foot 90° forming "L"; shoulder, hip, and rear heel vertically aligned.',
    deductions: ['Rear foot not 90° (-0.1)', 'Weight leaning forward on front leg (-0.1)', 'Stance too long/short (-0.1)'],
  },
  {
    name: 'Riding Stance (Juchum Seogi)',
    koreanName: '주춤서기',
    length: '2 Foot-Lengths Wide',
    rearAngle: '0° (Forward)',
    weightDistribution: { front: 50, rear: 50 },
    description: 'Toes point straight forward; knees flexed inward with equal weight distribution.',
    deductions: ['Toes splayed outward (-0.1)', 'Knees lacking proper depth (-0.1)', 'Stance too narrow (-0.1)'],
  },
  {
    name: 'Tiger Stance (Beom Seogi)',
    koreanName: '범서기',
    length: '1 Foot-Length Long',
    rearAngle: '30° Outward',
    weightDistribution: { front: 10, rear: 90 },
    description: 'Back foot angled 30° carrying 90–100% weight; front foot resting lightly on ball, heel aligned with rear toes.',
    deductions: ['Front heel touching ground (-0.1)', 'Weight resting on front foot (-0.1)', 'Rear foot exceeds 30° (-0.1)'],
  },
  {
    name: 'Crane Stance (Hakdari Seogi)',
    koreanName: '학다리서기',
    length: 'Single Leg Support',
    rearAngle: 'Lifted Leg Folded',
    weightDistribution: { front: 0, rear: 100 },
    description: 'Standing knee bent with foot forward; opposite foot inner arc resting at the knee joint.',
    deductions: ['Supporting foot turning during hold (-0.1)', 'Raised foot dropping below knee (-0.1)', 'Supporting knee straight (-0.1)'],
  },
]

// ------------------------------------------------------------------------------
// Chapter 10: Master Terminology Glossary
// ------------------------------------------------------------------------------
export const masterGlossaryData: TerminologyItem[] = [
  // 14 Basic Movements
  { koreanName: '기본 14동작 1: 기본준비', englishName: '1. Joon-bi (Ready Stance)', category: 'basic14' },
  { koreanName: '기본 14동작 2: 주춤서 몸통지르기', englishName: '2. Juchum Seogi Momtong Jireugi (Riding Stance Middle Punch)', category: 'basic14' },
  { koreanName: '기본 14동작 3: 앞굽이 아래막기', englishName: '3. Apkubi Arae Makki (Forward Stance Low Block)', category: 'basic14' },
  { koreanName: '기본 14동작 4: 앞굽이 몸통반대지르기', englishName: '4. Apkubi Momtong Bandae Jireugi (Forward Stance Reverse Punch)', category: 'basic14' },
  { koreanName: '기본 14동작 5: 앞굽이 앞차기', englishName: '5. Apkubi Ap Chagi (Forward Stance Front Kick)', category: 'basic14' },
  { koreanName: '기본 14동작 6: 뒷굽이 몸통바깥막기', englishName: '6. Dwitkubi Momtong Bakkat Makki (Back Stance Outer Middle Block)', category: 'basic14' },
  { koreanName: '기본 14동작 7: 앞굽이 등주먹앞치기', englishName: '7. Apkubi Deungjumeok Ap Chigi (Forward Stance Backfist Front Strike)', category: 'basic14' },
  { koreanName: '기본 14동작 8: 앞굽이 옆차기', englishName: '8. Apkubi Yop Chagi (Forward Stance Side Kick)', category: 'basic14' },
  { koreanName: '기본 14동작 9: 뒷굽이 몸통막기', englishName: '9. Dwitkubi Momtong Makki (Back Stance Middle Block)', category: 'basic14' },
  { koreanName: '기본 14동작 10: 뒷굽이 손날막기', englishName: '10. Dwitkubi Sonnal Makki (Back Stance Knifehand Middle Block)', category: 'basic14' },
  { koreanName: '기본 14동작 11: 앞굽이 돌려차기', englishName: '11. Apkubi Dollyo Chagi (Forward Stance Roundhouse Kick)', category: 'basic14' },
  { koreanName: '기본 14동작 12: 앞굽이 얼굴막기', englishName: '12. Apkubi Olgul Makki (Forward Stance High Block)', category: 'basic14' },
  { koreanName: '기본 14동작 13: 앞굽이 한손날목치기', englishName: '13. Apkubi Hansonnal Mok Chigi (Forward Stance Knifehand Neck Strike)', category: 'basic14' },
  { koreanName: '기본 14동작 14: 뒷굽이 몸통바로지르기', englishName: '14. Dwitkubi Momtong Baro Jireugi (Back Stance Obverse Punch)', category: 'basic14' },

  // Stances
  { koreanName: '나란히서기', englishName: 'Naranhi Seogi (Parallel Stance)', category: 'stance' },
  { koreanName: '앞서기', englishName: 'Ap Seogi (Walking Stance)', category: 'stance' },
  { koreanName: '앞굽이', englishName: 'Apkubi (Forward Stance)', category: 'stance' },
  { koreanName: '뒷굽이', englishName: 'Dwitkubi (Back Stance)', category: 'stance' },
  { koreanName: '오른 / 왼서기', englishName: 'Oreun / Wen Seogi (Right / Left Stance)', category: 'stance' },
  { koreanName: '꼬아서기', englishName: 'Kkoa Seogi (Crossed Stance - Dwikkoa & Apkkoa)', category: 'stance' },
  { koreanName: '범서기', englishName: 'Beom Seogi (Tiger Stance)', category: 'stance' },
  { koreanName: '모아서기', englishName: 'Moa Seogi (Closed Stance)', category: 'stance' },
  { koreanName: '주춤서기', englishName: 'Juchum Seogi (Riding Stance)', category: 'stance' },
  { koreanName: '학다리서기', englishName: 'Hakdari Seogi (Crane Stance)', category: 'stance' },
  { koreanName: '곁다리서기', englishName: 'Kyotdari Seogi (Assisting Stance)', category: 'stance' },
  { koreanName: '오금서기', englishName: 'Ogeum Seogi (Crossed Crane Stance)', category: 'stance' },

  // Blocks
  { koreanName: '아래막기', englishName: 'Arae Makki (Low Block)', category: 'block' },
  { koreanName: '몸통막기 / 안막기', englishName: 'Momtong Makki (Middle Block)', category: 'block' },
  { koreanName: '얼굴막기', englishName: 'Olgul Makki (High Block)', category: 'block' },
  { koreanName: '몸통바깥막기', englishName: 'Momtong Bakkat Makki (Outer Middle Block)', category: 'block' },
  { koreanName: '손날막기', englishName: 'Sonnal Makki (Knifehand Middle Block)', category: 'block' },
  { koreanName: '손날아래막기', englishName: 'Sonnal Arae Makki (Knifehand Low Block)', category: 'block' },
  { koreanName: '한손날막기', englishName: 'Hansonnal Makki (Single Knifehand Block)', category: 'block' },
  { koreanName: '한손날얼굴비틀어막기', englishName: 'Hansonnal Olgul Bitureo Makki (Single Knifehand High Twist Block)', category: 'block' },
  { koreanName: '가위막기', englishName: 'Kawi Makki (Scissors Block)', category: 'block' },
  { koreanName: '몸통헤쳐막기', englishName: 'Momtong Hecho Makki (Double Outer Middle Block)', category: 'block' },
  { koreanName: '엇걸어아래막기', englishName: 'Otkoreo Arae Makki (X Low Block)', category: 'block' },
  { koreanName: '외산틀막기', englishName: 'Wesanteul Makki (Single Mountain Block)', category: 'block' },
  { koreanName: '금강몸통막기', englishName: 'Keumgang Momtong Makki (Diamond Middle Block)', category: 'block' },

  // Strikes
  { koreanName: '바로지르기 / 반대지르기', englishName: 'Baro / Bandae Jireugi (Punch / Reverse Punch)', category: 'strike' },
  { koreanName: '젖혀지르기', englishName: 'Jecho Jireugi (Uppercut)', category: 'strike' },
  { koreanName: '당겨턱지르기', englishName: 'Dankyo Teok Jireugi (Pulling Uppercut)', category: 'strike' },
  { koreanName: '등주먹앞치기', englishName: 'Deungjumeok Ap Chigi (Backfist Front Strike)', category: 'strike' },
  { koreanName: '팔굽돌려치기', englishName: 'Palkup Dollyo Chigi (Elbow Hook Strike)', category: 'strike' },
  { koreanName: '팔굽옆치기', englishName: 'Palkup Yop Chigi (Elbow Side Strike)', category: 'strike' },
  { koreanName: '한손날목치기', englishName: 'Hansonnal Mok Chigi (Knifehand Inward Neck Strike)', category: 'strike' },
  { koreanName: '제비품목치기', englishName: 'Jebipoom Mok Chigi (Swallow Neck Strike)', category: 'strike' },
  { koreanName: '메주먹내려치기', englishName: 'Mejumeok Naeryo Chigi (Hammer Fist Downward Strike)', category: 'strike' },
  { koreanName: '무릎치기', englishName: 'Mureup Chigi (Knee Strike)', category: 'strike' },
  { koreanName: '편손끝세워찌르기', englishName: 'Pyonsonkkeut Sewo Tzireugi (Erected Spearhand Thrust)', category: 'strike' },
  { koreanName: '편손끝엎어찌르기', englishName: 'Pyonsonkkeut Upeo Tzireugi (Flat Spearhand Thrust)', category: 'strike' },
]
