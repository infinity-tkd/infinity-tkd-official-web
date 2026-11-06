/**
 * Infinity Taekwondo belt structure: the single source for every belt shown on the site
 * (home page belt journey, the full /belt-journey page, About page palette).
 *
 * Ranks: White, Yellow, Green, Blue, Brown, Red, Black 1st Dan and Black 2nd Dan.
 * Students under 15 receive the equivalent Kukkiwon Poom instead of a Dan.
 *
 * `forms` lists library poomsae ids (see data/library/poomsae/poomsae.ts); the site links each
 * one to its library page and shows a walkthrough badge when an animated walkthrough exists.
 * `timeline` is the typical time from a student's first class, not the time spent at that belt.
 */

/** What each Infinity TKD discipline covers at a belt. */
export interface BeltTracks {
  poomsae: string
  demonstration: string
  tricking: string
  hosinsul: string
  breaking: string
}

export interface BeltRank {
  id: string
  name: string
  koreanName: string
  rankTitle: string
  hex: string
  borderHex: string
  textColor: string
  /** Gold Dan bars on black belts (1 = 1st Dan, 2 = 2nd Dan). */
  danBars?: number
  /** Display summary of the forms learned at this belt. */
  poomsae: string
  /** Library poomsae ids learned at this belt, in teaching order. */
  forms: string[]
  /** Training beyond the listed forms, e.g. New Poomsae and Freestyle Poomsae. */
  alsoTrains?: string[]
  poomsaeMeaning: string
  meaning: string
  philosophy: string
  timeline: string
  focus: string
  syllabusGoals: string[]
  physicalSkills: string[]
  tracks: BeltTracks
  requirements: string[]
}

export const beltProgression: BeltRank[] = [
  {
    id: 'white',
    name: 'White Belt',
    koreanName: '흰띠 (Huin-tti)',
    rankTitle: '10th – 9th Geup',
    hex: '#FFFFFF',
    borderHex: '#D0D0D0',
    textColor: '#000000',
    poomsae: 'Basic movements (Kibon) & Taegeuk 1 (Il Jang)',
    forms: ['taegeuk-1'],
    poomsaeMeaning: 'Taegeuk Il Jang represents Keon (Heaven and Light), the creation of all things and the beginning of martial discipline.',
    meaning: 'Innocence & Purity: the clean slate of a student who has no prior knowledge of Taekwondo.',
    philosophy: 'Empty your cup to be filled. Humility, respect for the Dojang, and foundational stance stability (Ap-seogi, Ap-kubi).',
    timeline: '1 – 3 Months',
    focus: 'Basic stances, low block (Arae-makki), middle punch (Momtong-jireugi) and front kick (Ap-chagi).',
    syllabusGoals: [
      'Live the 5 Tenets: Courtesy, Integrity, Perseverance, Self-Control, Indomitable Spirit',
      'Develop hip-chambering alignment for basic strikes and low blocks',
      'Keep upright posture and balance while stepping forward and turning',
    ],
    physicalSkills: [
      'Walking Stance (Ap-seogi)',
      'Front Stance (Ap-kubi)',
      'Low Block (Arae-makki)',
      'Front Kick (Ap-chagi) with chamber and re-chamber',
    ],
    tracks: {
      poomsae: 'Taegeuk 1 with correct stances, facing and rhythm',
      demonstration: 'Group bowing, line-ups and counting in Korean',
      tricking: 'Safe falls, rolls and flexibility foundations',
      hosinsul: 'Wrist-grab releases and keeping a safe distance',
      breaking: 'One board: front kick or palm strike',
    },
    requirements: [
      'Basic stances: walking stance and front stance',
      'Middle punch and high punch',
      'Low block (Arae-makki)',
      'Front kick with proper chamber and re-chamber',
      'Dojang etiquette, Korean bowing and counting (Hana, Dul, Set)',
    ],
  },
  {
    id: 'yellow',
    name: 'Yellow Belt',
    koreanName: '노란띠 (Noran-tti)',
    rankTitle: '8th – 7th Geup',
    hex: '#FFD505',
    borderHex: '#D4AF37',
    textColor: '#000000',
    poomsae: 'Taegeuk 2 (Ee Jang) & Taegeuk 3 (Sam Jang)',
    forms: ['taegeuk-2', 'taegeuk-3'],
    poomsaeMeaning: 'Ee Jang represents Tae (Lake): inner firmness with outward gentleness. Sam Jang represents Ri (Fire): passion, speed and brightness.',
    meaning: 'The Rising Sun & Fertile Earth: the earth where the seed of martial discipline takes root and sprouts.',
    philosophy: 'Patience and nurturing the mind. Developing balance, focus and the joy of martial movement.',
    timeline: '3 – 6 Months',
    focus: 'Inside block (Momtong An-makki), high block (Olgul-makki), knife-hand strikes, back stance and roundhouse kick (Dollyo-chagi).',
    syllabusGoals: [
      'Build rotational hip power for roundhouse kicks',
      'Link two techniques in a row without losing stance balance',
      'Understand target distance through partner pad drills',
    ],
    physicalSkills: [
      'Roundhouse Kick (Dollyo-chagi)',
      'Inside Middle Block (Momtong An-makki)',
      'High Block (Olgul-makki)',
      'Knife-hand Neck Strike (Hansonnal Mok-chigi)',
    ],
    tracks: {
      poomsae: 'Taegeuk 2 & 3: rhythm, double punches and kicks with balance',
      demonstration: 'Synchronised group forms in lines',
      tricking: 'Cartwheel, round-off and jump kick foundations',
      hosinsul: 'Escapes from clothing grabs',
      breaking: 'One board: roundhouse kick',
    },
    requirements: [
      'Perform Taegeuk 1, 2 and 3 with correct rhythm and breathing',
      'Inside middle block and high block',
      'Roundhouse kick to body and head height',
      'Knife-hand strike and back stance basics',
      'Partner pad drills with safe distance control',
    ],
  },
  {
    id: 'green',
    name: 'Green Belt',
    koreanName: '초록띠 (Chorok-tti)',
    rankTitle: '6th – 5th Geup',
    hex: '#09BB00',
    borderHex: '#078800',
    textColor: '#FFFFFF',
    poomsae: 'Taegeuk 4 (Sa Jang) & Taegeuk 5 (Oh Jang)',
    forms: ['taegeuk-4', 'taegeuk-5'],
    poomsaeMeaning: 'Sa Jang represents Jin (Thunder): courage and explosive power. Oh Jang represents Seon (Wind): gentle flexibility with relentless force.',
    meaning: 'Growth & Vitality: the green plant sprouting and growing strong as technical skills deepen.',
    philosophy: 'Developing speed and fluid adaptability. The martial artist learns to harness explosive energy like thunder and wind.',
    timeline: '6 – 9 Months',
    focus: 'Knife-hand blocks (Sonnal), spear-hand thrust, side kick (Yeop-chagi), back stance (Dwit-kubi), hammer-fist and elbow strikes.',
    syllabusGoals: [
      'Master the knife-hand guard and knife-hand blocks',
      'Deliver full-extension side kicks with heel drive and locked hips',
      'Begin freestyle poomsae foundations: jumping kicks and rhythm',
    ],
    physicalSkills: [
      'Side Kick (Yeop-chagi) with locked hip and heel',
      'Back Stance (Dwit-kubi) with 70/30 weight',
      'Double Knife-hand Block (Sonnal Momtong-makki)',
      'Elbow Strike (Palkup-chigi)',
    ],
    tracks: {
      poomsae: 'Taegeuk 4 & 5: back stance, knife-hand, side kicks and elbow strikes',
      demonstration: 'Team patterns with kicks and synchronised timing',
      tricking: 'Butterfly kick and 360° jump kick foundations',
      hosinsul: 'Arm locks against wrist grabs (Kukkiwon hosinsul basics)',
      breaking: 'One board: side kick',
    },
    requirements: [
      'Taegeuk 4 and Taegeuk 5',
      'Double knife-hand block (Sonnal Momtong-makki)',
      'Side kick (Yeop-chagi) with full hip extension and heel',
      'Hammer-fist and elbow strikes',
      'Board breaking: side kick and palm strike',
    ],
  },
  {
    id: 'blue',
    name: 'Blue Belt',
    koreanName: '파란띠 (Paran-tti)',
    rankTitle: '4th – 3rd Geup',
    hex: '#0042EA',
    borderHex: '#002BB0',
    textColor: '#FFFFFF',
    poomsae: 'Taegeuk 6 (Yuk Jang) & Taegeuk 7 (Chil Jang)',
    forms: ['taegeuk-6', 'taegeuk-7'],
    poomsaeMeaning: 'Yuk Jang represents Gam (Water): fluid, continuous adaptation. Chil Jang represents Gan (Mountain): stillness and unshakeable stability.',
    meaning: 'The Boundless Sky: the heaven toward which the plant matures into a towering tree.',
    philosophy: 'Flow like water, stand like a mountain. Cultivating calm under pressure and control in the air.',
    timeline: '9 – 14 Months',
    focus: 'Tiger stance (Beom-seogi), riding stance, scissors and X-blocks, knee strikes, crescent kick, back kick and spinning kicks.',
    syllabusGoals: [
      'Control transitions through tiger stance and riding stance',
      'Execute spinning back kicks with fast hip rotation',
      'Add freestyle poomsae elements: tornado kick and 540° setup',
    ],
    physicalSkills: [
      'Back Kick (Dwit-chagi)',
      'Spinning Hook Kick (Huryeo-chagi)',
      'Tiger Stance (Beom-seogi) & Knee Strike (Mureup-chigi)',
      'Tornado Kick & Jumping Roundhouse',
    ],
    tracks: {
      poomsae: 'Taegeuk 6 & 7: slow movements, tiger stance and mountain stability',
      demonstration: 'Demonstration routines with partner timing',
      tricking: 'Tornado kick, cheat 360 and aerial basics',
      hosinsul: 'Defences against chokes and bear hugs',
      breaking: 'One board: spinning back kick',
    },
    requirements: [
      'Taegeuk 6 and Taegeuk 7',
      'Back kick (Dwit-chagi) with accuracy',
      'Spinning hook kick (Huryeo-chagi) at head height',
      'Tricking: cheat 360 and tornado kick',
      'Hosinsul: escapes from chokes and bear hugs',
    ],
  },
  {
    id: 'brown',
    name: 'Brown Belt',
    koreanName: '갈색띠 (Galsaek-tti)',
    rankTitle: '2nd – 1st Geup',
    hex: '#A05B00',
    borderHex: '#6F3E00',
    textColor: '#FFFFFF',
    poomsae: 'Taegeuk 8 (Pal Jang) & mastery of the full Taegeuk series',
    forms: ['taegeuk-8'],
    alsoTrains: ['Full Taegeuk series review (Taegeuk 1–8)'],
    poomsaeMeaning: 'Pal Jang represents Gon (Earth): the source of life and the completion of the Taegeuk cycle, preparing the student for the black belt forms.',
    meaning: 'Ripening & Solidity: the earth solidifying into immovable rock. The student has an unshakeable foundation.',
    philosophy: 'Steadfastness and character leadership. The martial artist anchors themselves against adversity and begins guiding junior ranks.',
    timeline: '14 – 18 Months',
    focus: 'Double jumping front kick (Dubal Dangsang-chagi), mountain block (Oesanteul-makki), and polishing all eight Taegeuk forms.',
    syllabusGoals: [
      'Perform all eight Taegeuk forms to competition standard',
      'Control aerial kicks and landings in Taegeuk 8',
      'Assist instructors in junior classes',
    ],
    physicalSkills: [
      'Double Jumping Front Kick (Dubal Dangsang-chagi)',
      'Mountain Block (Oesanteul-makki)',
      'Jumping Front Kick (Twieo Ap-chagi)',
      'Tricking: 540° kick setup and landing',
    ],
    tracks: {
      poomsae: 'Taegeuk 8 and a full review of Taegeuk 1–8',
      demonstration: 'Lead a team line in demonstration routines',
      tricking: '540° kick and butterfly twist progressions',
      hosinsul: 'Defences against strikes and grabs from behind',
      breaking: 'Two boards: jumping front kick + spinning back kick',
    },
    requirements: [
      'Taegeuk 8 with a full Taegeuk 1–8 review',
      'Double jumping front kick with a controlled landing',
      'Jumping front kick over an obstacle',
      'Tricking: 540° kick setup and landing',
      'Assistant coaching in junior classes',
    ],
  },
  {
    id: 'red',
    name: 'Red Belt',
    koreanName: '빨간띠 (Ppalgan-tti)',
    rankTitle: 'Candidate Dan (Cho Dan Bo)',
    hex: '#EF2F38',
    borderHex: '#B12027',
    textColor: '#FFFFFF',
    poomsae: 'Koryo, the first black belt form',
    forms: ['koryo'],
    alsoTrains: ['Full Taegeuk series review (Taegeuk 1–8)'],
    poomsaeMeaning: 'Koryo (고려) honours the Goryeo dynasty and the seonbi spirit: strong conviction and an unyielding will. Its 士 floor pattern means “scholar-warrior”.',
    meaning: 'Danger & Fire: immense physical power. The student must exercise supreme self-restraint, modesty and composure.',
    philosophy: 'Power without restraint is destructive. Red belt requires emotional discipline, moral integrity and preparation for the Dan examination.',
    timeline: '18 – 24 Months',
    focus: 'Koryo, knife-hand and target strikes, jumping side kick, and preparation for the Kukkiwon Dan / Poom examination.',
    syllabusGoals: [
      'Perform Koryo with control, power and the correct 士 pattern',
      'Review the full Taegeuk series with no deductions',
      'Prepare for the Kukkiwon Dan / Poom examination',
    ],
    physicalSkills: [
      'Koryo double side kick (Yeop-chagi)',
      'Knife-hand outer strike and target strikes',
      'Jumping Side Kick (Twieo Yeop-chagi)',
      '540° kick & butterfly twist',
    ],
    tracks: {
      poomsae: 'Koryo, plus the full Taegeuk series',
      demonstration: 'Solo segment in team demonstration shows',
      tricking: '540° kick and butterfly twist',
      hosinsul: 'Knife and stick defence basics',
      breaking: 'Three targets: jumping kick, 360° spin kick and knife-hand',
    },
    requirements: [
      'Koryo to examination standard',
      'Full Taegeuk 1–8 review',
      'Three-target breaking combination',
      '540° kick and butterfly twist',
      'Written essay on Taekwondo philosophy and the five tenets',
    ],
  },
  {
    id: 'black-1',
    name: 'Black Belt · 1st Dan',
    koreanName: '검은띠 1단 (Il-dan)',
    rankTitle: '1st Dan · 1st Poom (under 15)',
    hex: '#000000',
    borderHex: '#333333',
    textColor: '#FFFFFF',
    danBars: 1,
    poomsae: 'Keumgang, Taebaek, Pyongwon, Sipjin & Jitae, plus New Poomsae and Freestyle Poomsae',
    forms: ['keumgang', 'taebaek', 'pyongwon', 'sipjin', 'jitae'],
    alsoTrains: ['New Poomsae (for your age division)', 'Freestyle Poomsae'],
    poomsaeMeaning: 'The black belt (Yudanja) forms: Keumgang (diamond strength), Taebaek (the sacred bright mountain), Pyongwon (the vast plain), Sipjin (ten longevities) and Jitae (a person standing on the earth).',
    meaning: 'Mastery & a New Beginning: the synthesis of all colours. The student has mastered the basics and is ready to begin true training.',
    philosophy: 'A black belt is a white belt who never gave up. A lifelong pursuit of perfection and selfless mentorship.',
    timeline: '2+ Years',
    focus: 'All black belt forms through Jitae, New Poomsae for your age division, freestyle poomsae choreography and Kukkiwon Dan / Poom certification.',
    syllabusGoals: [
      'Perform Keumgang to Jitae with competition-level precision',
      'Learn the New Poomsae for your age division',
      'Choreograph a freestyle poomsae routine to music',
    ],
    physicalSkills: [
      'Keumgang crane stance and diamond blocks',
      'Freestyle Poomsae: jumping kicks, spins and acrobatics',
      'New Poomsae (by age division)',
      '720° aerial board breaking',
    ],
    tracks: {
      poomsae: 'Keumgang, Taebaek, Pyongwon, Sipjin and Jitae + New Poomsae',
      demonstration: 'Perform and help choreograph demonstration routines',
      tricking: 'Advanced combinations for freestyle poomsae (540°, 720°, flips)',
      hosinsul: 'Full Kukkiwon hosinsul syllabus, including weapon defence',
      breaking: '720° spinning kick and multi-board speed breaks',
    },
    requirements: [
      'Official Kukkiwon Dan / Poom examination',
      'Keumgang, Taebaek, Pyongwon, Sipjin and Jitae',
      'A freestyle poomsae routine and the New Poomsae for your age division',
      'A performance in a team demonstration show',
      'Mentoring junior ranks (the Infinity mindset)',
    ],
  },
  {
    id: 'black-2',
    name: 'Black Belt · 2nd Dan',
    koreanName: '검은띠 2단 (Ee-dan)',
    rankTitle: '2nd Dan · 2nd Poom (under 15)',
    hex: '#000000',
    borderHex: '#333333',
    textColor: '#FFFFFF',
    danBars: 2,
    poomsae: 'Cheonkwon, Hansu & Ilyeo, plus advanced Freestyle and New Poomsae',
    forms: ['cheonkwon', 'hansu', 'ilyeo'],
    alsoTrains: ['Advanced Freestyle Poomsae', 'New Poomsae (advanced)'],
    poomsaeMeaning: 'The highest black belt forms: Cheonkwon (the great power of heaven), Hansu (water, softness that overcomes hardness) and Ilyeo (oneness of body and mind).',
    meaning: 'Depth & Responsibility: the second Dan deepens mastery and turns the student into a role model for the next generation.',
    philosophy: 'Mastery is shared, not kept. The 2nd Dan refines every form and begins to coach, judge and lead.',
    timeline: '3+ Years (at least 1 year after 1st Dan)',
    focus: 'Cheonkwon, Hansu and Ilyeo, advanced freestyle poomsae, demonstration leadership and assistant coaching.',
    syllabusGoals: [
      'Perform Cheonkwon, Hansu and Ilyeo with depth and control',
      'Create and lead advanced freestyle and demonstration routines',
      'Assist instructors and mentor colour-belt students',
    ],
    physicalSkills: [
      'Cheonkwon slow, circular movements (Nalgae-pyeogi)',
      'Hansu and Ilyeo balance and flow',
      'Advanced freestyle poomsae combinations',
      'Coaching and judging fundamentals',
    ],
    tracks: {
      poomsae: 'Cheonkwon, Hansu and Ilyeo + advanced New Poomsae',
      demonstration: 'Choreograph and lead full demonstration shows',
      tricking: 'Advanced aerials for freestyle and demonstration (720°, flips, twists)',
      hosinsul: 'Teach hosinsul to junior students',
      breaking: 'Creative breaking sequences for demonstrations',
    },
    requirements: [
      'Kukkiwon 2nd Dan / 2nd Poom examination (at least 1 year after 1st Dan)',
      'Cheonkwon, Hansu and Ilyeo',
      'An advanced freestyle poomsae routine',
      'Leading a demonstration routine',
      'Assistant instructor hours with junior classes',
    ],
  },
]

export interface TrainingDiscipline {
  key: keyof BeltTracks
  label: string
  korean: string
  /** One line for compact lists (home page). */
  summary: string
  /** A short paragraph for the full belt journey page. */
  description: string
  /** Library page with more detail, when there is one. */
  href?: string
}

/**
 * The disciplines trained at Infinity Taekwondo (traditional Kukkiwon Taekwondo), in the order the
 * belt tracks show them.
 */
export const TRAINING_DISCIPLINES: TrainingDiscipline[] = [
  {
    key: 'poomsae',
    label: 'Poomsae',
    korean: '품새',
    summary: 'Recognized, New and Freestyle Poomsae',
    description: 'Recognized Poomsae (the Taegeuk series and the black belt forms), the Kukkiwon New Poomsae for black belts, and Freestyle Poomsae choreographed to music.',
    href: '/library/poomsae',
  },
  {
    key: 'demonstration',
    label: 'Demonstration',
    korean: '시범',
    summary: 'Team shows and choreography',
    description: 'Team demonstration routines that combine poomsae, kicks, breaking and acrobatics, performed at shows, festivals and events.',
  },
  {
    key: 'tricking',
    label: 'Tricking',
    korean: '트릭킹',
    summary: 'Aerial kicks, flips and twists',
    description: 'Progressive aerial kicks, flips and twists on spring floors and foam pits, building the skills used in freestyle poomsae and demonstrations.',
    href: '/library/tricking-acrobatics',
  },
  {
    key: 'hosinsul',
    label: 'Hosinsul',
    korean: '호신술',
    summary: 'Practical Kukkiwon self-defense',
    description: 'Kukkiwon self-defense taught belt by belt: escapes from grabs and chokes, joint locks, throws, and weapon defence for senior ranks.',
    href: '/library/hosinsul',
  },
  {
    key: 'breaking',
    label: 'Board breaking',
    korean: '격파',
    summary: 'Power, speed and accuracy',
    description: 'Board breaking (Kyokpa) tests power, speed and accuracy, from a single board at white belt to multi-target breaks for demonstrations.',
  },
]
