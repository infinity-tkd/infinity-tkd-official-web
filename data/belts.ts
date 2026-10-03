/**
 * ==============================================================================
 * BELT PROGRESSION & POOMSAE ROADMAP DATA
 * ==============================================================================
 * Centralized data source for the Interactive Belt Progression Roadmap.
 * All belt stages, required Poomsae forms, syllabus goals, philosophical
 * meanings, exam checklists, and timeline milestones are configured here.
 * ==============================================================================
 */

export interface BeltRank {
  id: string
  name: string
  koreanName: string
  rankTitle: string // e.g. "10th - 9th Geup"
  hex: string
  borderHex: string
  textColor: string
  stripe?: string
  poomsae: string
  poomsaeMeaning: string
  meaning: string
  philosophy: string
  timeline: string
  focus: string
  syllabusGoals: string[]
  physicalSkills: string[]
  breakingRequirement?: string
  requirements: string[]
}

export const beltProgression: BeltRank[] = [
  {
    id: 'white',
    name: 'White Belt',
    koreanName: '백띠 (Baek-tti)',
    rankTitle: '10th – 9th Geup',
    hex: '#FFFFFF',
    borderHex: '#D0D0D0',
    textColor: '#000000',
    poomsae: 'Basic Forms (Kibon 1-3) & Taegeuk 1 (Il Jang)',
    poomsaeMeaning: 'Taegeuk Il Jang represents Keon (Heaven and Light)—the creation of all things and the beginning of martial discipline.',
    meaning: 'Innocence & Purity — Signifies the clean slate of a student who has no prior knowledge of Taekwondo.',
    philosophy: 'Empty your cup to be filled. Humility, respect for the Dojang, and foundational stance stability (Ap-seogi, Ap-koobi).',
    timeline: '1 – 3 Months',
    focus: 'Fundamental stances, low block (Arae-makki), middle punch (Momtong-jireugi), and front snap kick (Ap-chagi).',
    syllabusGoals: [
      'Master the 5 Tenets: Courtesy, Integrity, Perseverance, Self-Control, Indomitable Spirit',
      'Develop hip-chambering alignment for basic strikes and low blocks',
      'Achieve upright posture and balance during forward stepping transitions',
    ],
    physicalSkills: [
      'Forward Walking Stance (Ap-seogi)',
      'Forward Long Stance (Ap-koobi)',
      'Low Block (Arae-makki)',
      'Front Snap Kick (Ap-chagi) with chamber & re-chamber',
    ],
    breakingRequirement: 'Single Pine Board with Front Snap Kick or Palm Strike',
    requirements: [
      'Basic Stances: Walking stance & Forward long stance',
      'Fundamental striking: Middle punch & high punch',
      'Fundamental blocking: Arae-makki (Low block)',
      'Basic front snap kick with proper chamber & re-chamber',
      'Dojang etiquette, Korean bowing & counting (Hana, Dul, Set)',
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
    poomsae: 'Taegeuk 2 (Ee Jang) - Joy & Firmness',
    poomsaeMeaning: 'Taegeuk Ee Jang represents Tae (Lake)—inner firmness with outward gentleness, joy, and serene concentration.',
    meaning: 'The Rising Sun & Fertile Earth — Signifies the earth where the seed of martial discipline takes root and sprouts.',
    philosophy: 'Patience and nurturing the mind. Developing balance, dynamic focus, and the joy of martial movement.',
    timeline: '3 – 6 Months',
    focus: 'Dynamic balance, middle block (Momtong An-makki), and roundhouse kick (Dollyo-chagi).',
    syllabusGoals: [
      'Establish rotational hip power for roundhouse kicking mechanics',
      'Execute continuous two-action combinations without loss of stance balance',
      'Understand target distancing in 1-step cooperative sparring',
    ],
    physicalSkills: [
      'Roundhouse Kick (Dollyo-chagi) to solar plexus target',
      'Inside-Middle Block (Momtong An-makki)',
      'Face Block (Olgul-makki)',
      '1-Step Cooperative Distance Sparring',
    ],
    breakingRequirement: 'Single Pine Board with Roundhouse Kick (Dollyo-chagi)',
    requirements: [
      'Perform Taegeuk 1 & Taegeuk 2 with correct rhythm and breath',
      'Momtong An-makki (Inside-middle block) & Olgul-makki (High block)',
      'Dollyo-chagi (Roundhouse kick) targeting mid-section and head',
      '1-step sparring fundamentals & safe distancing control',
      'Light target pad striking and core conditioning',
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
    poomsae: 'Taegeuk 3 (Sam Jang) & Taegeuk 4 (Sa Jang)',
    poomsaeMeaning: 'Taegeuk Sam Jang represents Ri (Fire/Sun) with passion and speed; Sa Jang represents Jin (Thunder) with explosive kinetic power.',
    meaning: 'Growth & Vitality — Signifies the green plant sprouting and growing strong as technical skills deepen.',
    philosophy: 'Developing kinetic speed and fluid adaptability. The martial artist learns to harness explosive energy like fire and thunder.',
    timeline: '6 – 9 Months',
    focus: 'Knife-hand strikes (Sonnal), side kick (Yop-chagi), back stance (Dwit-koobi), and continuous Olympic sparring movement.',
    syllabusGoals: [
      'Master the knife-hand guard and rotational blade edge strikes',
      'Deliver full-extension Side Kicks with heel drive and locked pelvic alignment',
      'Introduce Olympic sparring footwork (switch-step, slide-back, counter-tempo)',
    ],
    physicalSkills: [
      'Side Kick (Yop-chagi) with locked hip and heel point',
      'Back Stance (Dwit-koobi) with 70/30 weight distribution',
      'Double Knife-Hand Block (Sonnal Momtong-makki)',
      'Continuous Olympic Sparring Movement Drills',
    ],
    breakingRequirement: 'Single Hardwood Board with Side Kick (Yop-chagi)',
    requirements: [
      'Mastery of Taegeuk 3 and Taegeuk 4',
      'Sonnal Momtong-makki (Double knife-hand block)',
      'Yop-chagi (Side kick) with full hip extension and heel point',
      'Basic continuous Olympic sparring movement and head-gear drills',
      'Board breaking: Side kick & palm thrust execution',
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
    poomsae: 'Taegeuk 5 (Oh Jang) & Taegeuk 6 (Yook Jang)',
    poomsaeMeaning: 'Taegeuk Oh Jang represents Seon (Wind)—flexibility and unrelenting momentum; Yook Jang represents Gam (Water)—fluidity and continuous adaptation.',
    meaning: 'The Boundless Sky — Represents the heaven and sky toward which the plant matures into a towering tree.',
    philosophy: 'Flow like water, strike like wind. Cultivating mental calmness under tournament stress and mastering aerial control.',
    timeline: '9 – 14 Months',
    focus: 'Back kick (Dwit-chagi), spinning hook kick (Huryeo-chagi), and fluid counter-attacks.',
    syllabusGoals: [
      'Execute blind spinning back kicks with high-speed hip rotation',
      'Integrate deceptive feints and electronic scoring strategies',
      'Begin introductory acrobatic tricking setups (Cheat 360 & Tornado kick)',
    ],
    physicalSkills: [
      'Spinning Back Kick (Dwit-chagi) counter-strike',
      'Spinning Hook Kick (Huryeo-chagi) to head axis',
      'Elbow Strikes (Palkoop-chigi) & Cross Stance (Koa-seogi)',
      'Acrobatic Tricking: Tornado Kick & Jump Roundhouse',
    ],
    breakingRequirement: 'Hardwood Board with Spinning Back Kick (Dwit-chagi)',
    requirements: [
      'Mastery of Taegeuk 5 and Taegeuk 6',
      'Dwit-chagi (Back thrust kick) with high-speed accuracy',
      'Huryeo-chagi (Spin hook kick) targeting head level',
      'Introductory acrobatic tricking: Cheat 360 kick & Tornado kick',
      'Electronic sensor scoring rules & sparring tactical flow',
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
    poomsae: 'Taegeuk 7 (Chil Jang) - Mountain Stability',
    poomsaeMeaning: 'Taegeuk Chil Jang represents Gan (Mountain)—unshakeable stability, supreme rootedness, and tactical patience.',
    meaning: 'Ripening & Solidity — Symbolizes the earth solidifying into immovable rock. The student possesses unshakeable foundation.',
    philosophy: 'Steadfastness and character leadership. The martial artist anchors themselves against adversity and begins guiding junior ranks.',
    timeline: '14 – 18 Months',
    focus: 'Scissor blocks (Kawi-makki), cat stance (Beom-seogi), jumping kicks, and explosive multi-strike combinations.',
    syllabusGoals: [
      'Achieve rock-solid grounding in Cat Stance (Beom-seogi) transitions',
      'Deliver multi-target aerial strikes with controlled landings',
      'Demonstrate assistant coaching leadership in junior classes',
    ],
    physicalSkills: [
      'Scissor Block (Kawi-makki)',
      'Cat Stance (Beom-seogi) & Tiger Knee Strike',
      'Jumping Front Kick (Twio-ap-chagi) over high obstacle',
      'Intermediate Freestyle Tricking: 540 Kick setup & landing',
    ],
    breakingRequirement: 'Dual Board Breaking: Jumping Front Kick + Spinning Back Kick',
    requirements: [
      'Flawless execution of Taegeuk 7 with mountain-like stability',
      'Beom-seogi (Tiger/Cat stance) weight distribution',
      'Twio-ap-chagi (Jumping front kick) high obstacle clearance',
      'Intermediate Freestyle tricking: 540 Kick setup & Landing',
      'Assistant coaching mentorship & class leadership',
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
    poomsae: 'Taegeuk 8 (Pal Jang) - Earth & Rebirth',
    poomsaeMeaning: 'Taegeuk Pal Jang represents Gon (Earth)—the source of life, yielding the harvest and preparing for rebirth into Black Belt.',
    meaning: 'Danger & Fire — Signifies immense physical power. The student must exercise supreme self-restraint, modesty, and mental composure.',
    philosophy: 'Power without restraint is destructive. Red belt requires absolute emotional discipline, moral integrity, and preparation for the Dan examination.',
    timeline: '18 – 24 Months',
    focus: 'Jumping side kicks, multi-target breaking, sparring blitzes, and Kukkiwon pre-grading examination.',
    syllabusGoals: [
      'Master the entire 8-form Taegeuk syllabus with zero deduction errors',
      'Execute high-altitude aerial breaking and butterfly twist choreography',
      'Author candidate Dan dissertation on martial philosophy and leadership',
    ],
    physicalSkills: [
      'Jumping Side Kick (Twio-yop-chagi) distance clearance',
      'Jumping Double Front Kick (Twio-ap-chagi)',
      '540 Roundhouse & Butterfly Twist aerial execution',
      'Tournament referee hand signals and electronic scoring protocols',
    ],
    breakingRequirement: '3-Target Aerial Combination: Jump Kick + 360 Spin + Knife-Hand Break',
    requirements: [
      'Comprehensive mastery of all 8 Taegeuk Poomsae',
      'High-altitude aerial board breaking (3-target aerial combination)',
      '540 Roundhouse & Butterfly Twist execution',
      'Referee hand signals, scoring criteria, and tournament readiness',
      'Written thesis on Taekwondo philosophy, Perseverance, & Integrity',
    ],
  },
  {
    id: 'black',
    name: 'Black Belt (1st – 5th Dan)',
    koreanName: '검은띠 (Geomeun-tti)',
    rankTitle: 'Kukkiwon Certified Master Dan',
    hex: '#000000',
    borderHex: '#333333',
    textColor: '#FFFFFF',
    stripe: '#EF2F38',
    poomsae: 'Koryo, Keumgang, Taebaek, Pyongwon, Shipjin, Jitae, Cheonkwon, Hansu, Ilyo',
    poomsaeMeaning: 'High-Dan forms embody Korean martial heritage: Koryo (ancient warrior spirit), Keumgang (diamond hardness), Taebaek (sacred mountain of light).',
    meaning: 'Mastery & Dawn of New Beginning — The synthesis of all colors. Signifies that the student has mastered the basics and is now ready to begin true training.',
    philosophy: 'The Black Belt is a White Belt who never gave up. Lifelong pursuit of perfection, athletic science innovation, and selfless community mentorship.',
    timeline: '2+ Years of Dedicated Mastery',
    focus: 'Official Kukkiwon World Taekwondo Dan Certification, leadership, freestyle creation, and lifelong discipline.',
    syllabusGoals: [
      'Represent Infinity Academy at national and international WT championships',
      'Master high-Dan forms (Koryo, Keumgang, Taebaek) with referee-level precision',
      'Direct and choreograph live demonstration and action cinema projects',
    ],
    physicalSkills: [
      'Koryo & Keumgang Poomsae Mastery',
      'High-Altitude 720° Aerial Board Breaking',
      'Force-Plate Telemetry & Biomechanical Coaching',
      'Kukkiwon 1st Class International Examiner Standards',
    ],
    breakingRequirement: '720° Spinning Hook Kick + Suspended Apple/Target Blindfolded Strike',
    requirements: [
      'Official Kukkiwon Dan Certification Examination',
      'Mastery of Dan Poomsae: Koryo, Keumgang, Taebaek',
      'Elite competitive performance or international demo routine',
      'Sport science biomechanics analysis & mentoring junior ranks',
      'Commitment to the eternal loop of self-refinement (Infinity Mindset)',
    ],
  },
]
