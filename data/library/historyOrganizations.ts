export interface OrganizationInfo {
  id: string
  name: string
  koreanName: string
  acronym: string
  foundingYear: string
  founder: string
  headquarters: string
  leadership: string
  scope: string
  badgeColor: string
  logoText: string
  summary: string
  governanceRole: string
  sparringRules: {
    format: string
    contactLevel: string
    protectiveGear: string
    headPunches: boolean
    scoringSystem: string
  }
  formsSystem: {
    name: string
    count: string
    philosophy: string
    examples: string[]
  }
  keyMilestones: string[]
  strengths: string[]
}

export const organizationsData: OrganizationInfo[] = [
  {
    id: 'wt',
    name: 'World Taekwondo (WT)',
    koreanName: '세계태권도연맹',
    acronym: 'WT (formerly WTF)',
    foundingYear: 'May 28, 1973',
    founder: 'Dr. Kim Un-yong (Founding President)',
    headquarters: 'Seoul, South Korea & Lausanne, Switzerland',
    leadership: 'Dr. Chungwon Choue (President)',
    scope: '213+ Member National Associations (MNAs) across 5 Continental Unions',
    badgeColor: '#EF2F38',
    logoText: 'Olympic Governing Body',
    summary:
      'The sole international federation governing Taekwondo recognized by the International Olympic Committee (IOC) and the International Paralympic Committee (IPC). WT oversees Olympic Kyorugi and World Poomsae championships.',
    governanceRole:
      'Organizes the Olympic Games, Paralympic Games, World Taekwondo Championships, Grand Prix Series, and World Poomsae Championships. Sets official international competition rules.',
    sparringRules: {
      format: 'Best-of-3 Round System (2 minutes per round, 1 minute rest)',
      contactLevel: 'Full-contact with electronic impact threshold scoring',
      protectiveGear: 'Electronic PSS Chest Protector (Hogu), Sensor Headgear, Forearm/Shin guards, Groin guard, Mouthguard, Gloves, Sensor Socks',
      headPunches: false,
      scoringSystem: '1pt Punch to Trunk, 2pts Direct Trunk Kick, 3pts Direct Head Kick, 4pts Turning Trunk Kick, 5pts Turning Head Kick',
    },
    formsSystem: {
      name: 'Kukkiwon Standardized Recognized & Freestyle Poomsae',
      count: '8 Taegeuk + 9 High Dan Yudanja + 10 New Competition Forms',
      philosophy: 'Palgwae (8 Trigrams), Cheon-Ji-In cosmology, and modern dynamic athletic acrobatics',
      examples: ['Taegeuk 1–8', 'Koryo', 'Keumgang', 'Taebaek', 'Bigak', 'Saebyeol'],
    },
    keyMilestones: [
      '1973: Founded in Seoul at the 1st World Taekwondo Championships with 19 nations.',
      '1975: Affiliated with the General Association of International Sports Federations (GAISF).',
      '1980: Unanimously recognized by the International Olympic Committee (IOC) at the 83rd IOC Session.',
      '1988 & 1992: Official demonstration sport at Seoul and Barcelona Summer Olympic Games.',
      '2000: Debuted as a permanent official medal sport at the Sydney Olympic Games.',
      '2017: Formally rebranded from "WTF" to "World Taekwondo (WT)" for modern global appeal.',
      '2024–2032: Confirmed core Olympic sport through Paris 2024, LA 2028, and Brisbane 2032.',
    ],
    strengths: [
      'Universal global reach: Gold medalists from every populated continent.',
      'Electronic sensor scoring (PSS) providing objective and transparent refereeing.',
      'Full Olympic and Paralympic medal integration with equal gender parity.',
    ],
  },
  {
    id: 'kukkiwon',
    name: 'Kukkiwon (World Taekwondo Headquarters)',
    koreanName: '국기원 (세계태권도본부)',
    acronym: 'Kukkiwon',
    foundingYear: 'November 30, 1972',
    founder: 'Dr. Kim Un-yong & South Korean Ministry of Education',
    headquarters: 'Gangnam-gu, Seoul, Republic of Korea',
    leadership: 'Kukkiwon President & Grandmaster Council',
    scope: 'World Headquarters & Supreme Dan/Poom Certification Authority',
    badgeColor: '#000000',
    logoText: 'World Taekwondo Mecca',
    summary:
      'The supreme administrative, research, and educational headquarters of Taekwondo globally. Kukkiwon standardizes technique, issues all official Dan/Poom black belt certifications, and operates the World Taekwondo Academy (WTA).',
    governanceRole:
      'Sole authorized issuer of Kukkiwon Black Belt Dan/Poom diplomas worldwide (>10 million certified). Conducts international master instructor licensing, examiner licensing, and standardizes technical curriculum.',
    sparringRules: {
      format: 'Traditional Dojang Sparring & Standard WT Competition Testing Framework',
      contactLevel: 'Controlled full-contact and technical sparring for rank testing',
      protectiveGear: 'Traditional Hogu, Headgear, and sparring padding',
      headPunches: false,
      scoringSystem: 'Evaluated on Accuracy, Technical Execution, Etiquette, and Martial Spirit for Promotion',
    },
    formsSystem: {
      name: 'Official Kukkiwon Poomsae Syllabus',
      count: '17 Core Standardized Forms + 10 New Competition Suite',
      philosophy: 'Eastern tri-element cosmology (Heaven, Earth, Humanity) and Hanja geometric floor lines',
      examples: ['Taegeuk Il Jang through Pal Jang', 'Koryo to Ilyeo', 'Himchari', 'Yamang', 'Onnuri'],
    },
    keyMilestones: [
      '1972: Dedicated on November 30 as the Central Dojang in Seoul, named Kukkiwon in 1973.',
      '1978: Successfully unified the original 9 Kwans, issuing singular Kukkiwon Dan numbers.',
      '1983: Established the World Taekwondo Academy (WTA) to train certified international masters.',
      '2006: Designated as a Special Juridical Corporate Body by the South Korean Government.',
      '2018: Supported the statutory enactment declaring Taekwondo as Korea’s official National Martial Art (Kukki).',
    ],
    strengths: [
      'The gold standard of black belt certification recognized by all official dojangs globally.',
      'Direct cultural preservation of ancestral Korean martial philosophy, etiquette, and terminology.',
      'World-renowned Kukkiwon Taekwondo Demonstration Team showcasing breathtaking aerial feats.',
    ],
  },
  {
    id: 'itf',
    name: 'International Taekwon-Do Federation (ITF)',
    koreanName: '국제태권도연맹',
    acronym: 'ITF',
    foundingYear: 'March 22, 1966',
    founder: 'General Choi Hong-hi (최홍희 장군)',
    headquarters: 'Vienna, Austria (ITF HQ) / Historic Seoul',
    leadership: 'Historical Founder Gen. Choi Hong-hi (Split into multiple executive bodies post-2002)',
    scope: 'Traditional Military Taekwon-Do practitioners worldwide across Europe, Asia, and the Americas',
    badgeColor: '#0042EA',
    logoText: 'Traditional Military Style',
    summary:
      'Established in Seoul by General Choi Hong-hi to promote traditional military Taekwon-Do worldwide. ITF emphasizes realistic self-defense, hand techniques to the face, the 24 Tul (patterns), and the "Sine Wave" kinetic principle.',
    governanceRole:
      'Governs ITF World Championships, traditional master seminars, and international Tul/Sparring competitions. Promotes the 15-volume Taekwon-Do Encyclopedia compiled by General Choi.',
    sparringRules: {
      format: '2 Rounds of 2 minutes, continuous semi-contact match play',
      contactLevel: 'Semi-contact / Light-to-medium continuous contact with strict control',
      protectiveGear: 'Hand pads (gloves), Foot pads (boots), Mouthguard, Shin guards, Groin guard (No Hogu chest protector)',
      headPunches: true,
      scoringSystem: '1pt Hand strike to body/head, 2pts Foot strike to body, 3pts Jumping foot strike to head',
    },
    formsSystem: {
      name: '24 Chang Hon Patterns (Tul / 틀)',
      count: '24 Patterns (representing 24 hours in a day / human life span)',
      philosophy: 'Named after Korean historical patriots, kings, military generals, and philosophical events',
      examples: ['Chon-Ji', 'Dan-Gun', 'Do-San', 'Won-Hyo', 'Yul-Gok', 'Joong-Gun', 'Tong-Il'],
    },
    keyMilestones: [
      '1966: Founded in Seoul with 9 founding member nations (South Korea, Vietnam, Malaysia, USA, etc.).',
      '1972: Gen. Choi relocated ITF headquarters to Toronto, Canada following political divergences.',
      '1985: Published the monumental 15-Volume Encyclopedia of Taekwon-Do.',
      '1985: Headquarters relocated to Vienna, Austria to facilitate European and global expansion.',
      '2002: Passing of General Choi Hong-hi leading to administrative factional divisions (ITF Vienna, ITF Benitez, etc.).',
    ],
    strengths: [
      'Balanced technical distribution between upper-body boxing strikes and dynamic jumping kicks.',
      'Biomechanical "Sine Wave" (Down-Up-Down) motion maximizing kinetic body-drop momentum.',
      'Deep historical focus on Korean national heroes embedded within each pattern (Tul).',
    ],
  },
  {
    id: 'ata',
    name: 'American Taekwondo Association (ATA Martial Arts)',
    koreanName: '미국태권도협회 (송암태권도)',
    acronym: 'ATA / Songahm',
    foundingYear: '1969',
    founder: 'Eternal Grand Master Haeng Ung Lee (이행웅 대사부)',
    headquarters: 'Little Rock, Arkansas, United States',
    leadership: 'Presiding Grand Master & ATA International Master Council',
    scope: 'Largest commercial Taekwondo network in the Americas (>300,000 active students, 1,000+ schools)',
    badgeColor: '#A05B00',
    logoText: 'Songahm Martial Arts',
    summary:
      'Founded in the United States by Grandmaster Haeng Ung Lee, ATA (Songahm Taekwondo) is a massive private martial arts organization renowned for family-oriented development, Songahm forms, traditional weapon curricula, and life skills training.',
    governanceRole:
      'Operates the ATA World Championships (held annually in Phoenix/Little Rock), licensing schools across North America, South America (STFI), and worldwide through the World Traditional Taekwondo Union (WTTU).',
    sparringRules: {
      format: 'Point-Sparring (Match stopped on each clean point) and Continuous Team Sparring',
      contactLevel: 'Light-to-medium controlled contact point sparring',
      protectiveGear: 'Dipped-foam headgear with face shield, dipped-foam hand and foot gear, chest guard, mouthguard',
      headPunches: false,
      scoringSystem: '1pt Punch to body, 2pts Kick to body or jump kick, 3pts Head kick or jump spinning technique',
    },
    formsSystem: {
      name: 'Songahm Taekwondo Forms & Weapon Patterns',
      count: '18 Songahm Forms + Complete Weapons Syllabi',
      philosophy: 'Songahm ("Pine Tree and Rock") representing eternal strength, growth, and moral character',
      examples: ['Songahm 1–5', 'In Wha 1–2', 'Choon Jung 1–2', 'Shim Jun', 'Bahng Seok'],
    },
    keyMilestones: [
      '1969: Founded in Omaha, Nebraska by Grandmaster Haeng Ung Lee.',
      '1977: Relocated world headquarters to Little Rock, Arkansas.',
      '1983: Introduced the complete Songahm forms curriculum replacing legacy forms.',
      '1986: Introduced traditional martial weapons (Jahng Bong, Ssahng Jeol Bong, Sword, Cane).',
      '1990: Established the World Traditional Taekwondo Union (WTTU) for global expansion.',
    ],
    strengths: [
      'Integrated weapons curriculum providing well-rounded classical martial arts mastery.',
      'Exceptional character education, leadership programs, and family-friendly belt progression.',
      'Massive global tournament circuit with World Expo and National Title rankings.',
    ],
  },
]

export interface ComparisonMetric {
  feature: string
  wt: string
  kukkiwon: string
  itf: string
  ata: string
}

export const organizationComparisonTable: ComparisonMetric[] = [
  {
    feature: 'Primary Global Role',
    wt: 'Olympic & International Sports Federation',
    kukkiwon: 'World Headquarters & Supreme Dan Issuer',
    itf: 'Traditional Military Martial Art Federation',
    ata: 'Private / Commercial Martial Arts Network',
  },
  {
    feature: 'Year Founded',
    wt: '1973 (May 28)',
    kukkiwon: '1972 (November 30)',
    itf: '1966 (March 22)',
    ata: '1969',
  },
  {
    feature: 'Headquarters',
    wt: 'Seoul, Korea & Lausanne, Switzerland',
    kukkiwon: 'Gangnam, Seoul, South Korea',
    itf: 'Vienna, Austria / Historic Seoul',
    ata: 'Little Rock, Arkansas, USA',
  },
  {
    feature: 'Olympic Status',
    wt: 'Official Permanent Olympic Sport (Since 2000)',
    kukkiwon: 'Official Technical & Dan Authority for Games',
    itf: 'Non-Olympic (Independent World Championships)',
    ata: 'Non-Olympic (ATA World Championships)',
  },
  {
    feature: 'Sparring Contact Level',
    wt: 'Full-Contact with Electronic PSS Impact Sensors',
    kukkiwon: 'Full-Contact / Controlled Testing Sparring',
    itf: 'Semi-Contact / Continuous with Strict Control',
    ata: 'Controlled Point-Sparring & Team Combat',
  },
  {
    feature: 'Punches to the Face',
    wt: 'Strictly Prohibited (Gam-Jeom Penalty)',
    kukkiwon: 'Prohibited in Standard Kyorugi',
    itf: 'Permitted with Padded Hand Gloves',
    ata: 'Prohibited in Point Sparring',
  },
  {
    feature: 'Protective Gear',
    wt: 'Electronic Hogu, Sensor Socks, Headgear, Guards',
    kukkiwon: 'Traditional Hogu, Headgear, Padding',
    itf: 'Padded Gloves, Foot Boots, Mouthguard (No Hogu)',
    ata: 'Dipped Foam Head/Hand/Foot Gear, Chest Guard',
  },
  {
    feature: 'Standardized Patterns',
    wt: 'Taegeuk 1–8, High Dan 1–9, New Poomsae',
    kukkiwon: 'Official Kukkiwon Taegeuk & Yudanja System',
    itf: '24 Chang Hon Patterns (Tul / 틀)',
    ata: '18 Songahm Forms + Traditional Weapons',
  },
  {
    feature: 'Biomechanical Signature',
    wt: 'Linear high speed, rotational torque, PSS snap',
    kukkiwon: 'Cheon-Ji-In geometry, balance, Danjeon breath',
    itf: 'Sine Wave (Down-Up-Down) body drop momentum',
    ata: 'Songahm symmetrical balance, weapons integration',
  },
  {
    feature: 'Dan Certification Recognition',
    wt: 'Mandatory Kukkiwon Dan for Olympic Athletes',
    kukkiwon: 'Globally Universal Official Dan/Poom Diplomas',
    itf: 'Independent ITF Dan Certificate',
    ata: 'Independent ATA Songahm Dan Certificate',
  },
]
