export interface KwanInfo {
  id: string
  name: string
  koreanName: string
  hanja: string
  meaning: string
  foundingYear: string
  founder: string
  location: string
  kwanNumber: number // Post-1978 Kukkiwon Kwan Annex Number
  lineageRoot: string
  characteristics: string
  prominentMasters: string[]
  historicalLegacy: string
}

export const originalKwansData: KwanInfo[] = [
  {
    id: 'chung-do-kwan',
    name: 'Chung Do Kwan',
    koreanName: '청도관',
    hanja: '靑濤館',
    meaning: 'Blue Wave Gym / Gym of the Blue Sea Surge',
    foundingYear: '1944',
    founder: 'Grandmaster Lee Won-kuk (이원국)',
    location: 'Sadaedun, Seoul (Originally Chungryongsa Temple / Seoul Gymnasium)',
    kwanNumber: 1,
    lineageRoot: 'Shotokan Karate (trained under Gichin Funakoshi) & Indigenous Korean Footwork',
    characteristics:
      'Known for powerful, penetrating linear punches, deep stances, high jumping kicks, and rigorous full-contact sparring conditioning.',
    prominentMasters: ['Lee Won-kuk', 'Son Duk-sung', 'Uhm Woon-kyu', 'Lee Yong-woo', 'Jhoon Rhee (Father of American Taekwondo)'],
    historicalLegacy:
      'The very first martial arts gym established in liberated Korea. Chung Do Kwan produced the largest number of pioneering grandmasters who later founded separate Kwans and spread Taekwondo across the globe.',
  },
  {
    id: 'song-moo-kwan',
    name: 'Song Moo Kwan',
    koreanName: '송무관',
    hanja: '松武館',
    meaning: 'Pine Tree Martial Gym / Gym of the Everlasting Evergreen',
    foundingYear: 'March 1944 / Re-opened May 1946',
    founder: 'Grandmaster Ro Byung-jik (노병직)',
    location: 'Kaesong (개성) & Seoul',
    kwanNumber: 2,
    lineageRoot: 'Shotokan Karate (Tokyo) & Ancient Kaesong martial traditions',
    characteristics:
      'Emphasized continuous sparring, fast repetitive combinations, high-altitude kicking, and moral fortitude like the unyielding pine tree.',
    prominentMasters: ['Ro Byung-jik', 'Lee Young-sup', 'Kang Won-sik'],
    historicalLegacy:
      'Co-founded in 1944 in Kaesong alongside Chung Do Kwan. Grandmaster Ro Byung-jik served as a pivotal leader in the founding of the Korea Taekwondo Association (KTA).',
  },
  {
    id: 'moo-duk-kwan',
    name: 'Moo Duk Kwan',
    koreanName: '무덕관',
    hanja: '武德館',
    meaning: 'Martial Virtue Gym / Institute of Martial Righteousness',
    foundingYear: 'November 9, 1945',
    founder: 'Grandmaster Hwang Kee (황기)',
    location: 'Ministry of Transportation (Yongsan, Seoul)',
    kwanNumber: 3,
    lineageRoot: 'Northern Chinese Kung Fu (Quanfa), Tang Soo Do, and Joseon Subak/Taekkyeon',
    characteristics:
      'Distinctive fluid kicking arcs, circular deflections, deep traditional breathing, and philosophical devotion to the eight virtues of warrior ethics.',
    prominentMasters: ['Hwang Kee', 'Kim In-seok', 'Hong Chong-soo', 'Choi Hee-seok'],
    historicalLegacy:
      'The largest kwan during the 1950s and 1960s, training railroad and military personnel. While a major faction joined the WT/Kukkiwon unification, another branch preserved traditional Tang Soo Do / Soo Bahk Do internationally.',
  },
  {
    id: 'jidokwan',
    name: 'Jidokwan',
    koreanName: '지도관',
    hanja: '智道館',
    meaning: 'Wisdom Way Gym / School of the Intelligent Path',
    foundingYear: 'March 3, 1946 (Originally Chosun Yun Moo Kwan / 조선연무관)',
    founder: 'Grandmaster Chun Sang-sup (전상섭) & Master Yoon Kwe-byung',
    location: 'Sogong-dong, Seoul (YMCA / Korean Judo Building)',
    kwanNumber: 4,
    lineageRoot: 'Shito-Ryu Karate (trained under Kenwa Mabuni), Shotokan & Judo',
    characteristics:
      'Pioneers of dynamic sparring strategy, tactical ring management, rapid footwork pivots, and explosive counter-attacking.',
    prominentMasters: ['Chun Sang-sup', 'Yoon Kwe-byung', 'Lee Chong-woo', 'Bae Young-ki'],
    historicalLegacy:
      'Jidokwan dominated early South Korean national sparring championships and contributed decisively to the establishment of modern full-contact Kyorugi rules and refereeing standards.',
  },
  {
    id: 'chang-moo-kwan',
    name: 'Chang Moo Kwan',
    koreanName: '창무관',
    hanja: '彰武館',
    meaning: 'Developing Martial Gym / Institute for Martial Enlightenment',
    foundingYear: '1946 (Originally YMCA Kwon Bop Bu / YMCA 권법부)',
    founder: 'Grandmaster Yoon Byung-in (윤병인)',
    location: 'Jongno YMCA, Seoul',
    kwanNumber: 5,
    lineageRoot: 'Shudokan Karate (Kanken Toyama) & Northern Chinese Quanfa (Manchuria)',
    characteristics:
      'Integrated Chinese circular dodging, continuous close-quarter trapping, high acrobatic kicks, and joint locking.',
    prominentMasters: ['Yoon Byung-in', 'Lee Nam-suk', 'Kim Soon-bae'],
    historicalLegacy:
      'Yoon Byung-in was celebrated as Korea’s most naturally gifted martial innovator. His students preserved YMCA Kwon Bop Bu into Chang Moo Kwan and spawned Kang Duk Won.',
  },
  {
    id: 'han-moo-kwan',
    name: 'Han Moo Kwan',
    koreanName: '한무관',
    hanja: '韓武館',
    meaning: 'Korean Martial Gym / Hall of Korean Martial Prowess',
    foundingYear: 'August 1954',
    founder: 'Grandmaster Lee Kyo-yoon (이교윤)',
    location: 'Wangsimni, Seoul',
    kwanNumber: 6,
    lineageRoot: 'Jidokwan (Chosun Yun Moo Kwan branch)',
    characteristics:
      'Emphasized iron discipline, hard body conditioning, combat realism, and direct reverse punching.',
    prominentMasters: ['Lee Kyo-yoon', 'Baek Joon-ki'],
    historicalLegacy:
      'Branch established by Master Lee Kyo-yoon following the Korean War. Became a core institutional pillar in the KTA unified ranking councils.',
  },
  {
    id: 'oh-do-kwan',
    name: 'Oh Do Kwan',
    koreanName: '오도관',
    hanja: '吾道館',
    meaning: 'Gym of My Way / Institute of Our Dedicated Path',
    foundingYear: '1954',
    founder: 'General Choi Hong-hi (최홍희) & Grandmaster Nam Tae-hi (남태희)',
    location: 'ROK Army 29th Infantry Division (Jeju Island & Military Bases)',
    kwanNumber: 7,
    lineageRoot: 'Chung Do Kwan lineage within the South Korean Military Corps',
    characteristics:
      'Strict military drilling, standardized forms practice, tile and brick breaking conditioning, and foundational development of the Chang Hon patterns.',
    prominentMasters: ['Choi Hong-hi', 'Nam Tae-hi', 'Han Cha-kyo', 'Kim Bok-man'],
    historicalLegacy:
      'Trained hundreds of thousands of South Korean military recruits during the 1950s. Provided the military personnel that dispatched early demonstration teams across the world.',
  },
  {
    id: 'kang-duk-won',
    name: 'Kang Duk Won',
    koreanName: '강덕원',
    hanja: '講德館',
    meaning: 'Arena for Teaching Virtue / Hall of Moral Martial Instruction',
    foundingYear: '1956',
    founder: 'Grandmasters Park Chul-hee (박철희) & Hong Jong-pyo (홍종표)',
    location: 'Sinchon, Seoul',
    kwanNumber: 8,
    lineageRoot: 'Chang Moo Kwan / YMCA Kwon Bop Bu branch',
    characteristics:
      'Specialized in rapid, fluid footwork, evasive sidestepping, and devastating low-to-high spinning kicking combinations.',
    prominentMasters: ['Park Chul-hee', 'Hong Jong-pyo', 'Lee Kum-hong'],
    historicalLegacy:
      'Established by senior students of Yoon Byung-in following his wartime disappearance. Contributed heavily to the formulation of early sparring safety gear and WT leadership.',
  },
  {
    id: 'jung-do-kwan',
    name: 'Jung Do Kwan',
    koreanName: '정도관',
    hanja: '正道館',
    meaning: 'Righteous Way Gym / Institute of the True Right Path',
    foundingYear: '1956',
    founder: 'Grandmaster Lee Yong-woo (이용우)',
    location: 'Sogong-dong, Seoul',
    kwanNumber: 9,
    lineageRoot: 'Chung Do Kwan branch',
    characteristics:
      'Emphasized uncompromising ethical purity, sharp jumping kicks, and explosive defensive parrying into counter-striking.',
    prominentMasters: ['Lee Yong-woo', 'Kim Myung-soo'],
    historicalLegacy:
      'The 9th and final historical kwan recognized during the unification era. Produced generations of collegiate champions in Seoul universities.',
  },
]

export const kwanUnificationStory = {
  title: 'The Kwan Unification Process (1973–1978)',
  koreanTitle: '태권도 9대 관의 통합과 국기원 단증 단일화',
  summary:
    'Between 1973 and 1978, the Korea Taekwondo Association (KTA) and Kukkiwon successfully convinced all 9 independent Kwans to abandon separate diplomas and consolidate into a single unified national system.',
  phases: [
    {
      year: '1973–1975',
      title: 'Institutional Consensus',
      description:
        'Kwan leaders realized that competing diplomas and fragmented ranks harmed Taekwondo’s international Olympic prospects. They agreed to standardize testing criteria under Kukkiwon.',
    },
    {
      year: '1976–1977',
      title: 'Numbered Annex System',
      description:
        'Kwans were assigned official Annex Numbers (1 to 9) to ease the transition while technical syllabi were merged into the 8 Taegeuk and 9 Yudanja forms.',
    },
    {
      year: 'August 7, 1978',
      title: 'Final Dissolution of Kwan Diplomas',
      description:
        'All 9 Kwans officially ceased issuing independent rank certificates. From August 7, 1978 onward, all black belt holders worldwide received unified, standardized Kukkiwon Dan certificates.',
    },
  ],
}
