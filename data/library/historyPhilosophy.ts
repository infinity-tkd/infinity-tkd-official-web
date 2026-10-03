export interface TenetInfo {
  id: string
  name: string
  koreanName: string
  hanja: string
  romanized: string
  englishMeaning: string
  shortDefinition: string
  deepExplanation: string
  dojangApplication: string
  lifeApplication: string
  badgeColor: string
}

export interface VirtueInfo {
  id: string
  name: string
  koreanName: string
  hanja: string
  romanized: string
  englishMeaning: string
  definition: string
  guidelineForAction: string
  youthCharacterFocus: string
  badgeColor: string
}

// 1. DUAL SPIRIT IDEOLOGY (Geukgi & Hongik)
export const dualSpiritIdeology = {
  title: 'The Dual Spirit of Taekwondo: Geukgi & Hongik',
  koreanTitle: '태권도 정신의 양대 이념: 극기(克己)와 홍익(弘益)',
  summary:
    'Rooted in Korean philosophical heritage, the spirit of Taekwondo consists of two inseparable values: "Overcome Oneself" (Geukgi) as the internal standard of practice, and "Benefit the World" (Hongik) as the external standard for applying acquired strength.',
  ideologies: [
    {
      id: 'geukgi',
      name: 'Geukgi (Self-Overcoming)',
      koreanName: '극기',
      hanja: '克己',
      direction: 'Internal Practice Principle (내적 수련의 지침)',
      coreValue: 'Overcome Oneself to Attain Strength',
      explanation:
        'Geukgi is the guiding principle practitioners must rely on during grueling practice to attain true strength. A practitioner must repeatedly push past physical exhaustion, fear, and self-doubt to develop unshakeable physical and mental power.',
      quote: 'True power begins when you conquer your own limitations, ego, and fatigue.',
      badgeColor: '#EF2F38',
    },
    {
      id: 'hongik',
      name: 'Hongik (Humanitarianism)',
      koreanName: '홍익',
      hanja: '弘益 (弘益人間)',
      direction: 'External Application Principle (외적 실천의 지침)',
      coreValue: 'Benefit the World with Acquired Strength',
      explanation:
        'Hongik (from Hongik Ingan) governs how the strength acquired through Taekwondo must be used. Martial prowess must never be used for selfish aggression or intimidation, but strictly dedicated to protecting the weak, upholding justice, and serving humanity.',
      quote: 'Strength without humanitarian service is violence; strength with Hongik is true martial virtue.',
      badgeColor: '#0042EA',
    },
  ],
}

// 2. THE FIVE VIRTUES OF TAEKWONDO (5대 덕목 - Action Guidelines for Daily Life & Youth Character Education)
export const fiveVirtuesData: VirtueInfo[] = [
  {
    id: 'virtue-innae',
    name: 'Perseverance',
    koreanName: '인내',
    hanja: '忍耐',
    romanized: 'Innae',
    englishMeaning: 'Endurance & Overcoming Pain',
    definition:
      'The mental capacity to endure and overcome the physical and psychological pain experienced in Taekwondo practice—a continuous process of Geukgi and fighting with oneself.',
    guidelineForAction: 'Never quit when muscles burn, routines feel exhausting, or setbacks occur during training.',
    youthCharacterFocus: 'Develops resilience against academic stress, peer pressure, and temporary life failures.',
    badgeColor: '#EF2F38',
  },
  {
    id: 'virtue-yonggi',
    name: 'Courage',
    koreanName: '용기',
    hanja: '勇氣',
    romanized: 'Yonggi',
    englishMeaning: 'Bravery in the Face of Difficulty',
    definition:
      'The fortitude to face intimidating opponents, difficult techniques, or life obstacles without succumbing to paralyzing fear or hesitation.',
    guidelineForAction: 'Step boldly onto the sparring mat and embrace difficult testing challenges with head held high.',
    youthCharacterFocus: 'Fosters confidence to speak truth, stand up against bullying, and attempt ambitious life goals.',
    badgeColor: '#A05B00',
  },
  {
    id: 'virtue-yeui',
    name: 'Courtesy',
    koreanName: '예의',
    hanja: '禮儀',
    romanized: 'Yeui',
    englishMeaning: 'Mutual Respect & Sincere Humility',
    definition:
      'Simultaneously practicing humility (lowering oneself in relationship to another) and respect (elevating and honoring the other person).',
    guidelineForAction: 'Bow sincerely to masters, referees, and opponents; maintain polite speech and humble posture.',
    youthCharacterFocus: 'Instills deep filial piety, respect for teachers, and considerate social etiquette.',
    badgeColor: '#09BB00',
  },
  {
    id: 'virtue-jeongui',
    name: 'Justice',
    koreanName: '정의',
    hanja: '正義',
    romanized: 'Jeongui',
    englishMeaning: 'Universal Fairness & Moral Conscience',
    definition:
      'A moral perspective that prioritizes "us" over "me", and cares for "everyone" over "just our immediate group".',
    guidelineForAction: 'Defend fair play, reject cheating in competition, and stand beside those who cannot defend themselves.',
    youthCharacterFocus: 'Nurtures civic responsibility, ethical leadership, and global humanitarian empathy.',
    badgeColor: '#0042EA',
  },
  {
    id: 'virtue-bongsa',
    name: 'Volunteering & Service',
    koreanName: '봉사',
    hanja: '奉仕',
    romanized: 'Bongsa',
    englishMeaning: 'Selfless Community Contribution',
    definition:
      'The noble action of supporting and serving others while generously sharing one’s own physical skills, time, and possessions.',
    guidelineForAction: 'Help junior students in the Dojang, participate in community cleanup, and share martial gifts freely.',
    youthCharacterFocus: 'Cultivates generous selflessness and transforms athletic skill into community enrichment.',
    badgeColor: '#A855F7',
  },
]

// 3. THE 5 TRADITIONAL TENETS (태권도 5대 훈)
export const fiveTenetsData: TenetInfo[] = [
  {
    id: 'ye-ui',
    name: 'Courtesy',
    koreanName: '예의',
    hanja: '禮儀',
    romanized: 'Ye-Ui (Yeui)',
    englishMeaning: 'Politeness, Respect & Etiquette',
    shortDefinition: 'Showing sincere respect to elders, masters, peers, and opponents.',
    deepExplanation:
      'Courtesy is the unshakeable cornerstone of all martial practice. It establishes humble human relationships, subdues destructive ego, and ensures that martial power is governed by moral restraint.',
    dojangApplication: 'Bowing with sincerity upon entering the Dojang, addressing instructors with formal titles, and shaking hands with two hands.',
    lifeApplication: 'Treating all people with kindness, listening attentively, showing gratitude, and maintaining polite decorum in society.',
    badgeColor: '#EF2F38',
  },
  {
    id: 'yom-chi',
    name: 'Integrity',
    koreanName: '염치',
    hanja: '廉恥',
    romanized: 'Yom-Chi (Yeomchi)',
    englishMeaning: 'Moral Conscience & Honesty',
    shortDefinition: 'Knowing right from wrong and having the conscience to feel shame when at fault.',
    deepExplanation:
      'Integrity requires absolute honesty with oneself and others. A martial artist with integrity refuses to compromise truth, inflate ranks, cheat during sparring, or deceive fellow human beings.',
    dojangApplication: 'Admitting when a point is scored against you, practicing honest grading, and refusing to cut corners on techniques.',
    lifeApplication: 'Living with an upright moral compass, fulfilling promises, refusing corrupt shortcuts, and standing for truth.',
    badgeColor: '#A05B00',
  },
  {
    id: 'in-nae',
    name: 'Perseverance',
    koreanName: '인내',
    hanja: '忍耐',
    romanized: 'In-Nae (Innae)',
    englishMeaning: 'Patience & Stoic Endurance',
    shortDefinition: 'Overcoming exhaustion, pain, failure, and adversity without yielding.',
    deepExplanation:
      'True mastery is not born from innate genius, but from relentless, daily repetition through years of physical fatigue, injury, and setbacks. Patience and endurance transform ordinary effort into invincible spirit.',
    dojangApplication: 'Pushing through the final reps of conditioning, practicing a difficult jump kick hundreds of times until perfected.',
    lifeApplication: 'Enduring academic, professional, or financial hardships with calm determination and unwavering long-term focus.',
    badgeColor: '#09BB00',
  },
  {
    id: 'guk-gi',
    name: 'Self-Control',
    koreanName: '극기',
    hanja: '克己',
    romanized: 'Guk-Gi (Geukgi)',
    englishMeaning: 'Mastery over One’s Desires & Temper',
    shortDefinition: 'Controlling one’s emotions, impulses, ego, and physical aggression.',
    deepExplanation:
      'To conquer others requires force; to conquer oneself requires true spiritual power. Self-control ensures that a martial artist never strikes out of anger, arrogance, or vanity.',
    dojangApplication: 'Maintaining calm breathing and defensive composure when struck hard in sparring; never losing emotional control.',
    lifeApplication: 'Mastering impulses, resisting toxic temptations, remaining calm during heated interpersonal conflicts.',
    badgeColor: '#0042EA',
  },
  {
    id: 'baekjul-boolgool',
    name: 'Indomitable Spirit',
    koreanName: '백절불굴',
    hanja: '百折不屈',
    romanized: 'Baekjul-Boolgool (Baekjeolbulgul)',
    englishMeaning: 'Unbroken Courage & Invincible Will',
    shortDefinition: 'Folded 100 times, yet never broken; standing firm in the face of overwhelming odds.',
    deepExplanation:
      'Derived from the ancient Korean proverb meaning "a sword folded a hundred times in the furnace emerges unbreakable." It represents fearless moral courage against tyranny, injustice, or existential peril.',
    dojangApplication: 'Stepping fearlessly into the ring against larger, higher-ranked opponents; rising immediately after being knocked down.',
    lifeApplication: 'Refusing to surrender when life presents crushing challenges; standing up for the defenseless against injustice.',
    badgeColor: '#A855F7',
  },
]

// 4. MEANING OF TAEKWONDO & MARTIAL ART SPORT (Kukkiwon Academic Synthesis)
export const taekwondoMeaningAndNature = {
  definition:
    'Taekwondo is a martial art sport that trains practitioners to execute bare-handed defense and attack techniques characterized by diverse kicks for the dual purposes of Self-Defense and Self-Realization.',
  koreanDefinition:
    '태권도는 호신(護身)과 자아실현(自我實現)을 목적으로 다양한 발차기를 특성으로 하는 맨손 공방의 무도 스포츠이다.',
  dualPurposes: [
    {
      title: 'Self-Defense (호신 / 護身 - Hosinsul)',
      description:
        'Protecting one’s life, bodily integrity, and dignity from unjust physical aggression through mastered reflex, distance management, and decisive counter-striking.',
    },
    {
      title: 'Self-Realization (자아실현 / 自我實現 - Jaa-Silhyeon)',
      description:
        'The continuous refinement of personality and character by realizing Geukgi (self-conquest) and Hongik (serving society) through martial discipline.',
    },
  ],
  fiveTechniqueCharacteristics: [
    {
      id: 'char-1',
      title: 'Defense and Attack Techniques',
      korean: '공방(攻防)의 기술',
      explanation: 'Harmonious integration of blocking, parrying, dodging, striking, and kicking in dynamic sequence.',
    },
    {
      id: 'char-2',
      title: 'Bare-Handed Techniques',
      korean: '맨손(徒手)의 기술',
      explanation: 'Relies solely on natural human anatomical weapons without artificial armament.',
    },
    {
      id: 'char-3',
      title: 'Sparring from a Distance',
      korean: '원거리(遠距離) 겨루기 기술',
      explanation: 'Specialized out-fighting and distance management that maximizes the long reach of foot strikes.',
    },
    {
      id: 'char-4',
      title: 'Characterized by Diverse Kicks',
      korean: '발차기 위주의 기술',
      explanation: 'World-renowned for unmatched variety: linear, circular, jumping, spinning, and multi-directional kicks.',
    },
    {
      id: 'char-5',
      title: 'Impact Hitting Method',
      korean: '타격(打擊) 방식의 발차기',
      explanation: 'Delivers explosive impact energy through rapid hip snap and kinetic acceleration into terminal impact.',
    },
  ],
  suryeonMeaning: {
    title: 'The True Meaning of Practice (Suryeon / 수련 / 修鍊)',
    explanation:
      'Through relentless, repeated practice, a martial artist strips away all unnecessary tension and wasted movement to execute techniques with maximum efficiency. Ultimately, Suryeon has the condensed purpose of maturing into a wiser, stronger, and more benevolent human being.',
  },
  mudoSportCharacteristics: [
    'Openness (개방성): Universally accessible to all ages, genders, and nationalities without discrimination.',
    'Entertainment (유희성): Dynamic, thrilling aerial acrobatics and spectator excitement.',
    'Competitiveness (경쟁성): High-level tactical chess match testing physical and mental conditioning.',
    'Institutionalized Rules (규칙성): Standardized electronic PSS scoring ensuring safety, objectivity, and fair play.',
    'Athletic Excellence (탁월성): Cultivates elite cardiovascular stamina, flexibility, balance, and explosive power.',
  ],
}

// 5. HWARANG SESOK-OGYE
export const sesokOgyeData = [
  {
    commandment: '사군이충 (事君以忠)',
    romanized: 'Sa-gun-i-chung',
    english: 'Loyalty to Country & Sovereign',
    description: 'Devoting one’s strength to the protection, freedom, and honor of one’s nation and community.',
  },
  {
    commandment: '사친이효 (事親以孝)',
    romanized: 'Sa-chin-i-hyo',
    english: 'Filial Piety & Honor to Parents',
    description: 'Honoring one’s parents and ancestors through upright conduct, gratitude, and moral family duty.',
  },
  {
    commandment: '교우이신 (交友以信)',
    romanized: 'Gyo-woo-i-sin',
    english: 'Trust & Sincerity Among Friends',
    description: 'Maintaining unbreakable fidelity, truthfulness, and reliability in all friendships and alliances.',
  },
  {
    commandment: '임전무퇴 (臨戰無退)',
    romanized: 'Im-jeon-mu-toe',
    english: 'Never Retreat in Battle',
    description: 'Facing adversity, defense of justice, or combat with resolute courage without cowardly retreat.',
  },
  {
    commandment: '살생유택 (殺生有擇)',
    romanized: 'Sal-saeng-yu-taek',
    english: 'Restraint in Taking Life',
    description: 'Exercising supreme ethical restraint; never using deadly force frivolously or without just cause.',
  },
]

// 6. THEORY OF POWER
export const theoryOfPowerFactors = [
  {
    factor: 'Reaction Force',
    korean: '반동력 (Bandongryeok)',
    principle: 'Newton’s 3rd Law of Motion',
    explanation:
      'Pulling the non-striking fist back to the hip at the exact instant the forward punch fires creates a reciprocal torque, effectively doubling the forward impact velocity.',
  },
  {
    factor: 'Concentration',
    korean: '집중 (Jipjung)',
    principle: 'Pressure = Force / Area',
    explanation:
      'Concentrating total kinetic output onto the smallest possible anatomical striking surface (e.g. ball of foot, knife hand edge) at the precise millisecond of terminal impact.',
  },
  {
    factor: 'Equilibrium',
    korean: '균형 (Gyunhyeong)',
    principle: 'Dynamic Center of Gravity',
    explanation:
      'Maintaining balance and upright posture ensures that zero kinetic energy is lost to body wobbling, allowing 100% of body mass to transfer directly into the target.',
  },
  {
    factor: 'Breath Control',
    korean: '호흡조절 (Hohup Jojeol)',
    principle: 'Abdominal Diaphragmatic Core Lock',
    explanation:
      'Exhaling sharply at impact with a resonant Kihap tightens the Danjeon core, protects internal organs from counter-shock, and accelerates terminal muscle contraction.',
  },
  {
    factor: 'Mass & Hip Rotation',
    korean: '질량 & 골반회전 (Zillyang & Golban)',
    principle: 'Ground Reaction & Rotational Momentum',
    explanation:
      'True power originates from pushing against the ground and twisting the hips into the technique, driving the practitioner’s full body weight behind the striking limb.',
  },
  {
    factor: 'Speed / Velocity',
    korean: '속도 (Sokdo)',
    principle: 'Kinetic Energy E = 1/2 * m * v²',
    explanation:
      'Because kinetic energy scales quadratically with velocity, doubling your striking speed quadruples the destructive impact force. Speed is the ultimate multiplier.',
  },
]
