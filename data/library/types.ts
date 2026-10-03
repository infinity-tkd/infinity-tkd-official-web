/**
 * ==============================================================================
 * CURRICULUM LIBRARY - SHARED TYPES & INTERFACES
 * ==============================================================================
 */

export type LibraryCategory =
  | 'poomsae'
  | 'kicking-fundamentals'
  | 'kicking-advanced'
  | 'hand-techniques'
  | 'stances'
  | 'hosinsul'
  | 'tricking-acrobatics'
  | 'history'
  | 'competition-rules'

export type DifficultyLevel = 'Beginner' | 'Intermediate' | 'Advanced' | 'Elite' | (string & {})

export interface DanMasteryInfo {
  danLevel: number // 1 to 9
  danRank: string // '1st Dan', '2nd Dan', etc.
  koreanDanRank: string // '1단', '2단', etc.
  beltStripes: number // 1 to 9 gold bars
  beltStripeRoman: string // 'I', 'II', 'III', 'IIII', etc.
  formName: string // 'Koryo', 'Keumgang', etc.
  koreanFormName: string // '고려', '금강', etc.
  meaningOfName: string // 'Ancient name for "Korea"', etc.
  nameFootnote?: string // Footnote explanation e.g. "Diamond Mountain", "Ultimate Brightness", "The ten eternal entities (Sipjangsaeng)"
  floorPattern: string // '士', '山', '工', '一', '十', '丄', '丅', '水', '卍'
  floorPatternName: string // '士 pattern', '山 pattern', etc.
  symbol: string // Hanja symbol '士', '山', '工', '一', '十', '丄', '丅', '水', '卍'
  meaningOfSymbol: string // 'seonbi "wise elder"', 'mountain', etc.
  masterCharacteristic: string // 'Wise', 'Unbreakable', 'Spiritual', 'Peaceful', 'Long-lived, Healthy', 'Self-reliant, Leaving a legacy', 'Pious', 'Adaptable, Fluid', 'Harmonious'
  philosophicalMandate: string // Detailed master guidance for this Dan stage
  junbiSeogi?: string // Ready stance mechanics & mental focus (e.g. Tongmilgi, Wen-kyeopson, Nalgae-pyeogi)
  introducedKeyTechniques?: string[] // Newly introduced techniques in this Yudanja form
  historicalEtymology?: string // In-depth historical lineage and classical philosophy
  movementCharacteristics?: string // Core movement traits and dynamic flow
}

export interface TaegeukPhilosophyInfo {
  trigramName: string // 'Keon', 'Tae', 'Ri', 'Jin', 'Seon', 'Gam', 'Gan', 'Gon'
  trigramSymbol: string // '☰', '☱', '☲', '☳', '☴', '☵', '☶', '☷'
  koreanTrigramName: string // '건 (乾)', '태 (兌)', etc.
  naturalElement: string // 'Heaven and Light', 'Lake', 'Fire and Sun', 'Thunder', 'Wind', 'Water', 'Mountain', 'Earth'
  coreConcept: string // Core concept e.g. 'Pure creative force inhabiting all physical forms'
  practitionerRank: string // e.g. 'Yellow Belt', 'Yellow Belt / Green tip', 'Green Belt', etc.
  philosophicalDirective: string // The exact execution directive (fluidity, fire-flicker stillness/excitement, etc.)
  introducedKeyTechniques: string[] // List of key newly introduced techniques in this form
  dialecticRole?: string // Dialectic relationship e.g. Keon & Gon
  flagPresence?: boolean // true if on Korean National Flag (Keon, Gon, Ri, Gam)
}

export interface NewPoomsaeSpecInfo {
  formNumber: number // 1 to 10
  koreanName: string // '힘차리', '야망', '새별', etc.
  englishConcept: string // 'Powerful Challenge', 'Grand Ambition', 'New Star', etc.
  targetAge: string // '18세 미만 (Under 18)', '18~30세 (18–30)', etc.
  officialDuration: string // '약 105초 (approx. 105s)', '약 85초 (approx. 85s)', etc.
  lineSymbolMeaning: string // Visual meaning of the line shape
  officialMeaning: string // Full official meaning of the form name
  developmentRationale?: string // Why Kukkiwon/WT developed this form for this age division
  technicalCharacteristics?: {
    signatureKicks: string[] // Skipping Kick, 540° Back Whip Kick, 720° Tornado Kick, etc.
    signatureHands?: string[] // Turning Punch, Uppercut Punch, etc.
    specialtyFocus?: string // Kyorugi connections, demonstration prowess, self-defense bunkai
  }
  etymologyOrigin?: string // e.g. Yongbieocheonga, Baekgisintongbigakssul, Hongik Ingan
}

export interface LibraryItem {
  id: string
  slug: string
  name: string
  koreanName: string
  romanized: string
  category: LibraryCategory
  difficulty: DifficultyLevel
  beltLevel: string
  badgeColor: string
  summary: string
  meaning?: string
  philosophy?: string
  totalMovements?: number
  diagramSymbol?: string // For Poomsae e.g. "王", "☰", "☱"
  poomsaeSeries?: 'taegeuk' | 'high-dan' | 'new-poomsae' // 3 Poomsae series classification
  danMastery?: DanMasteryInfo // Black Belt Dan Mastery specification (1st to 9th Dan)
  taegeukPhilosophy?: TaegeukPhilosophyInfo // Jooyeok & 8 Trigrams philosophy (Taegeuk 1 to 8)
  newPoomsaeSpec?: NewPoomsaeSpecInfo // Kukkiwon New Poomsae specification (Forms 1 to 10)
  trigramSymbol?: string // e.g. "☰ (Keon)", "☱ (Tae)", "☲ (Ri)"
  trigramHanja?: string // e.g. "乾 (Heaven)", "兌 (Lake)", "離 (Fire)"
  yinyangElement?: string // e.g. "Pure Yang (Heaven & Light)", "Water (Fluidity)", "Earth (Pure Yin)"
  poomsaeLineShape?: string // e.g. "王 (King Line)", "士 (Scholar-Warrior)", "5-Pointed Star", "Upward Sprout"
  targetAgeDivision?: string // e.g. "Under 18 (Cadet/Junior)", "18–30 (Senior)", "1st Dan & Above"
  performanceDuration?: string // e.g. "approx. 30–45 sec", "approx. 85 sec", "approx. 95 sec"
  weightDistribution?: string // For Stances e.g. "70% Back / 30% Front"
  strikingSurface?: string // For Kicks/Hands e.g. "Ball of the foot (Ap-chook)"
  targetArea?: string // e.g. "Solar Plexus, Temple, Jaw, Radial Nerve"
  prerequisites?: string
  terminology?: Array<{ korean: string; romanized: string; english: string; category?: string }> // Korean terminology glossary
  coachingTips?: string[] // Practical master tips & transition mechanics
  steps: string[]
  keyDetails: string[]
  commonMistakes: string[]
  mediaUrl?: string // Video URL or YouTube link (e.g. "https://www.youtube.com/embed/...")
  videoUrl?: string // Direct YouTube link or embed
  pdfUrl?: string // For competition rules PDF document viewing
  sourceUrl?: string // Optional external source or citation link
  sourceName?: string // e.g. "Kukkiwon Official Textbook" or "WT Competition Rules"
  author?: string // For history blog articles
  readTime?: string // e.g. "5 min read"
  publishDate?: string // e.g. "August 2026"
  blogContent?: string[] // Full article paragraphs for blog reading mode
  image: string
  // Fundamental & Advanced Kicking Master Template Fields
  kickTrajectory?: 'linear' | 'rotational' | 'thrust' | 'downward' | 'airborne' | 'multi-strike' | 'scissor' | string
  airbornePhase?: string // e.g. "Takeoff -> Apex Chamber -> Strike -> Landing Absorption"
  targetCount?: number // e.g. 1 for single, 2 for double, 3 for triple, 4 for quad, 5 for quintuple
  balanceAndPosture?: string
  corePrinciples?: Array<{ title: string; desc: string }>
  skillPrerequisites?: {
    physical: string[]
    technical: string[]
    mental: string[]
  }
  trainingProcess?: Array<{
    stepNumber: number
    title: string
    details: string[]
  }>
  drillingMethods?: {
    isolation: string[]
    speedAndTiming: string[]
    power?: string[]
    freestyleTricking?: string[]
    safety?: string[]
  }
  commonMistakesAndCorrections?: Array<{
    mistake: string
    correction: string
  }>
  performanceAndApplication?: {
    competition: string
    poomsae?: string
    freestyleTricking?: string
    demonstration?: string
    combinations: string[]
  }
  recoveryAndConditioning?: {
    flexibility: string[]
    strengthening: string[]
    mobility: string[]
  }
  /**
   * Optional localized translations for Khmer (km), Chinese (zh), and Korean (ko).
   * Any missing fields automatically fallback to the English default values!
   */
  translations?: {
    km?: Partial<Omit<LibraryItem, 'id' | 'slug' | 'category' | 'translations' | 'difficulty'>> & { difficulty?: string }
    zh?: Partial<Omit<LibraryItem, 'id' | 'slug' | 'category' | 'translations' | 'difficulty'>> & { difficulty?: string }
    ko?: Partial<Omit<LibraryItem, 'id' | 'slug' | 'category' | 'translations' | 'difficulty'>> & { difficulty?: string }
  }
}

export interface LibraryCategoryMeta {
  id: LibraryCategory
  title: string
  koreanTitle: string
  subtitle: string
  description: string
  iconName: string
  accentColor: string
  bgGradient: string
  translations?: {
    km?: { title?: string; subtitle?: string; description?: string }
    zh?: { title?: string; subtitle?: string; description?: string }
    ko?: { title?: string; subtitle?: string; description?: string }
  }
}
