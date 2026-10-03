export interface AcademyCourse {
  id: string
  division: 'studio' | 'taekwondo' | 'science'
  title: string
  subtitle: string
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'All Levels'
  beltRequirement?: string
  duration: string
  sessionsPerWeek: string
  instructor: string
  image: string
  badge: string
  badgeColor?: string
  description: string
  learningObjectives: string[]
  prerequisites: string
  schedule: string
  translations?: {
    km?: Partial<Omit<AcademyCourse, 'id' | 'division' | 'translations'>>
    zh?: Partial<Omit<AcademyCourse, 'id' | 'division' | 'translations'>>
    ko?: Partial<Omit<AcademyCourse, 'id' | 'division' | 'translations'>>
  }
}

export const academyCourses: AcademyCourse[] = [
  // 1. Taekwondo Core (The Dojang)
  {
    id: 'poomsae-fundamentals',
    division: 'taekwondo',
    title: 'World Taekwondo Recognized Poomsae',
    subtitle: 'Precision, Balance & Kukkiwon Standard Forms',
    level: 'All Levels',
    beltRequirement: 'White to Black Belt',
    duration: '12 Weeks',
    sessionsPerWeek: '3x / week (1.5 hrs)',
    instructor: 'Master Chon Sovan (5th Dan Kukkiwon)',
    image: 'https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=2940&auto=format&fit=crop',
    badge: 'The Dojang',
    badgeColor: '#EF2F38',
    description: 'Comprehensive study of World Taekwondo (WT) recognized poomsae from basic stances (Taegeuk 1-8) through advanced Black Belt patterns (Koryo, Keumgang, Taebaek, Pyongwon, Shipjin, Jitae, Cheonkwon, Hansu, Ilyo).',
    learningObjectives: [
      'Master fundamental stances: Ap-seogi, Ap-koobi, Dwit-koobi, and Hakdari-seogi',
      'Explosive hip-rotation mechanics to maximize block and strike acceleration',
      'Rhythmic breathing (Dan-jeon ho-heup) for endurance and structural stability',
      'Preparation for official Kukkiwon belt promotion examinations and WT referee scoring',
    ],
    prerequisites: 'Open to all ages and experience levels.',
    schedule: 'Mon, Wed, Fri 5:30 PM - 7:00 PM',
    translations: {
      km: {
        title: 'កម្មវិធីសិក្សាទម្រង់ក្បាច់គុនផ្លូវការ World Taekwondo',
        subtitle: 'ភាពច្បាស់លាស់ តុល្យភាព និងទម្រង់ស្តង់ដារ Kukkiwon',
        description: 'ការសិក្សាដ៏ទូលំទូលាយអំពីទម្រង់ Poomsae ដែលទទួលស្គាល់ដោយ World Taekwondo (WT) ចាប់ពីជំហរមូលដ្ឋាន (Taegeuk 1-8) រហូតដល់ទម្រង់ខ្សែក្រវាត់ខ្មៅកម្រិតខ្ពស់ (Koryo, Keumgang, Taebaek, Pyongwon, Shipjin, Jitae, Cheonkwon, Hansu, Ilyo)។',
      },
      zh: {
        title: '世界跆拳道官方公认品势课程',
        subtitle: '精准、平衡与国技院（Kukkiwon）官方标准动作',
        description: '全面系统地学习世界跆拳道（WT）公认品势，从太极一章至八章基础步法与动作，进阶至黑带高段位品势（高丽、金刚、太白、平原、十进、地跆、天拳、汉水、一如）。',
      },
      ko: {
        title: '세계태권도연맹(WT) 공인품새 정규과정',
        subtitle: '정밀도, 균형미 및 국기원(Kukkiwon) 표준 품새 완성',
        description: '기초 보법과 태극 1~8장부터 고려, 금강, 태백, 평원, 십진, 지태, 천권, 한수, 일여에 이르는 유단자 품새까지 체계적으로 수련하는 세계태권도 표준 과정입니다.',
      },
    },
  },
  {
    id: 'freestyle-poomsae-tricking',
    division: 'taekwondo',
    title: 'Freestyle Poomsae & Tricking Lab',
    subtitle: '540s, 720s, Flash Kicks & Musical Choreography',
    level: 'Intermediate',
    beltRequirement: 'Green Belt and Above',
    duration: '10 Weeks',
    sessionsPerWeek: '2x / week (2 hrs)',
    instructor: 'Master Keo Moni & Team Infinity',
    image: 'https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?q=80&w=2938&auto=format&fit=crop',
    badge: 'The Dojang',
    badgeColor: '#EF2F38',
    description: 'Deconstruct high-level martial arts tricking and acrobatics into safe, progressive drill progressions. Train on Olympic spring floors, air tracks, and foam crash landing mats.',
    learningObjectives: [
      'Master the cheat-setup, scoot, and wrap-full aerial entries',
      'Execute clean 540 and 720 degree round kicks with height and landing control',
      'Air awareness and spatial orientation during multi-axis aerial twists',
      'Fluid choreography transitions combining traditional kicks, flips, and music tempos',
    ],
    prerequisites: 'Ability to perform basic roundhouse kick, tornado kick, and cartwheel.',
    schedule: 'Tues & Thurs 7:00 PM - 9:00 PM, Sat 3:00 PM',
    translations: {
      km: {
        title: 'មន្ទីរពិសោធន៍ Freestyle Poomsae & Tricking',
        subtitle: 'ទាត់ 540°, 720°, Flash Kicks និងការរាំក្បាច់គុនតាមចង្វាក់ភ្លេង',
        description: 'បំបែកក្បាច់ Tricking និងកាយសម្ព័ន្ធកម្រិតខ្ពស់ទៅជាការហ្វឹកហាត់ប្រកបដោយសុវត្ថិភាព និងជាប្រព័ន្ធ។ ហ្វឹកហាត់លើកម្រាល Olympic spring floors កម្រាលខ្យល់ air tracks និងពូកសុវត្ថិភាព។',
      },
      zh: {
        title: '自由品势与极限特技实验室 (Tricking Lab)',
        subtitle: '540°、720°旋风踢、空翻与音乐动作编排',
        description: '将高难度的特技动作拆解为科学安全的阶梯训练。在专业体操弹簧地板、气垫道以及海绵防摔垫上进行实战进阶训练。',
      },
      ko: {
        title: '자유품새 및 익스트림 트릭킹 랩',
        subtitle: '540도, 720도 회전 발차기, 플래시 킥 & 음악 안무',
        description: '고난도 태권도 트릭킹과 아크로바틱 동작을 안전하고 체계적인 드릴로 세분화하여 훈련합니다. 올림픽 스프링 매트, 에어트랙, 세이프티 착지 매트에서 안전하게 지도합니다.',
      },
    },
  },
  {
    id: 'elite-competition-team',
    division: 'taekwondo',
    title: 'Infinity National Competition Team',
    subtitle: 'National & International Championship Preparation',
    level: 'Advanced',
    beltRequirement: 'Red Belt & Black Dan (Audition)',
    duration: 'Year-Round',
    sessionsPerWeek: '5x / week (2.5 hrs)',
    instructor: 'Master Keo Moni & Master Chon Sovan',
    image: 'https://images.unsplash.com/photo-1555597673-b21d5c935865?q=80&w=2944&auto=format&fit=crop',
    badge: 'The Dojang',
    badgeColor: '#EF2F38',
    description: 'Intense, high-performance training camp for serious tournament athletes competing in Recognized Poomsae, Freestyle Poomsae, and Live Demonstration events.',
    learningObjectives: [
      'Match-speed conditioning and psychological stress inoculation',
      'High-difficulty aerial target breaks under electronic judging rules',
      'Team synchronization and musical choreography routines',
      'Periodized strength and taper schedules leading to competition dates',
    ],
    prerequisites: 'Red Belt or Black Dan. Audition required.',
    schedule: 'Mon - Fri 6:30 AM - 8:30 AM & 4:30 PM - 7:00 PM',
    translations: {
      km: {
        title: 'ក្រុមអត្តពលិកប្រកួតប្រជែងថ្នាក់ជាតិ Infinity',
        subtitle: 'ការរៀបចំសម្រាប់ការប្រកួតជើងឯកថ្នាក់ជាតិ និងអន្តរជាតិ',
        description: 'ជំរំបង្គោលហ្វឹកហាត់សមត្ថភាពខ្ពស់សម្រាប់អត្តពលិកប្រកួតប្រជែងក្នុងវិញ្ញាសា Poomsae ផ្លូវការ Freestyle Poomsae និងការសម្តែងផ្ទាល់។',
      },
      zh: {
        title: 'Infinity 国家级竞技代表队',
        subtitle: '全国锦标赛与国际赛事冲刺备战',
        description: '针对公认品势、自由品势以及高难度特技击破表演的高强度专业竞技特训营，为冲击国际赛事金牌量身定制。',
      },
      ko: {
        title: '인피니티 국가대표 선수단 및 시범단',
        subtitle: '국내외 챔피언십 및 국제 태권도 대회 전문 대비반',
        description: '공인품새, 자유품새 및 익스트림 시범 격파 종목에 출전하는 엘리트 선수를 위한 최고 강도의 고성능 트레이닝 캠프입니다.',
      },
    },
  },

  // 2. Sport Science Lab
  {
    id: 'calisthenics-progression',
    division: 'science',
    title: 'Calisthenics & Relative Strength Lab',
    subtitle: 'Gravity Mastery: Lever, Planche & Handstand',
    level: 'Intermediate',
    beltRequirement: 'All Levels',
    duration: '12 Weeks',
    sessionsPerWeek: '3x / week (1.5 hrs)',
    instructor: 'Infinity Sport Science Staff',
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=2940&auto=format&fit=crop',
    badge: 'Sport Science',
    badgeColor: '#09BB00',
    description: 'Systematic calisthenics methodology focused on straight-arm strength, scapular protraction/retraction power, and extreme core compression.',
    learningObjectives: [
      'Handstand alignment, freestanding balance, and press to handstand',
      'Front lever tuck, advanced tuck, straddle, and full progressions',
      'Planche lean mechanics, pseudo planche pushups, and Maltese prep',
      'Weighted pull-up and dip strength standards (1.5x bodyweight)',
    ],
    prerequisites: 'Able to perform 10 strict pull-ups and 15 strict dips.',
    schedule: 'Mon, Wed, Fri 7:00 PM - 8:30 PM',
    translations: {
      km: {
        title: 'Calisthenics & មន្ទីរពិសោធន៍កម្លាំងកាយ',
        subtitle: 'ការគ្រប់គ្រងទំនាញផែនដី: Lever, Planche & Handstand',
        description: 'វិធីសាស្រ្ត Calisthenics ជាប្រព័ន្ធផ្តោតលើកម្លាំងដៃ កម្លាំងស្មា និងកម្លាំងស្នូលពោះយ៉ាងរឹងមាំបំផុត។',
      },
      zh: {
        title: '街头健身与相对力量实验室',
        subtitle: '自重重力掌控：前水平 (Front Lever)、俄式挺身 (Planche) 与倒立',
        description: '系统化自重体能训练，专注于直臂力量、肩胛控制力以及极限核心压缩力，提升全身相对力量与神经募集效率。',
      },
      ko: {
        title: '캘리스데닉스 & 상대근력 스포츠 사이언스 랩',
        subtitle: '중력 제어 훈련: 프론트 레버, 플란체 및 핸드스탠드',
        description: '곧은 팔 지지력, 견갑골 안정화 및 코어 압축력에 초점을 맞춘 체계적인 맨몸 운동 및 체조 근력 강화 과정입니다.',
      },
    },
  },
  {
    id: 'sports-first-aid-injury-prevention',
    division: 'science',
    title: 'Applied Sports Biomechanics & Recovery',
    subtitle: 'Emergency Care, Athletic Taping & Durability Protocols',
    level: 'All Levels',
    beltRequirement: 'All Levels',
    duration: '4 Weeks',
    sessionsPerWeek: '1x / week (4 hrs weekend)',
    instructor: 'Certified Sports Physiotherapist',
    image: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=2938&auto=format&fit=crop',
    badge: 'Sport Science',
    badgeColor: '#09BB00',
    description: 'Essential certification for coaches, athletes, and martial arts practitioners. Learn sports trauma assessment, CPR/AED, joint stabilization taping, and rapid tissue recovery.',
    learningObjectives: [
      'On-field acute trauma assessment (PRICE protocol, concussion indicators)',
      'Joint stability taping for ankles, wrists, knees, and fingers',
      'CPR, AED operation, and emergency airway management',
      'Post-workout hydrotherapy, percussion, and mobility strategies',
    ],
    prerequisites: 'None. Open to public.',
    schedule: 'Saturdays 1:00 PM - 5:00 PM',
    translations: {
      km: {
        title: 'ជីវមេកានិចកីឡាអនុវត្ត & ការស្តារកាយសម្បទា',
        subtitle: 'ការសង្គ្រោះបឋម ការរុំសរសៃសន្លាក់ & ពិធីការការពាររបួស',
        description: 'វិញ្ញាបនប័ត្រចាំបាច់សម្រាប់គ្រូបង្វឹក អត្តពលិក និងអ្នកហ្វឹកហាត់ក្បាច់គុន។ រៀនវាយតម្លៃរបួសកីឡា CPR/AED ការរុំសន្លាក់ និងការស្តារសាច់ដុំលឿនរហ័ស។',
      },
      zh: {
        title: '应用运动生物力学与损伤预防康复',
        subtitle: '急救护理、运动肌贴胶带包扎与身体韧性协议',
        description: '专为教练、运动员及武术爱好者设立的权威认证课程。涵盖运动创伤评估、CPR/AED急救、关节稳定性贴扎及深层组织恢复。',
      },
      ko: {
        title: '응용 스포츠 생체역학 및 부상 예방·리커버리',
        subtitle: '응급 처치, 스포츠 테이핑 및 운동 지속력 향상 프로토콜',
        description: '지도자, 엘리트 선수 및 수련생을 위한 필수 인증 과정입니다. 급성 외상 평가, 심폐소생술(CPR/AED), 관절 보호 테이핑 및 근막 이완 테라피를 지도합니다.',
      },
    },
  },

  // 3. Creative Media Studio & Action
  {
    id: 'action-choreography',
    division: 'studio',
    title: 'Martial Arts Stunt & Action Cinema',
    subtitle: 'Fight Choreography, Screen Combat & Camera Staging',
    level: 'Advanced',
    beltRequirement: 'Blue Belt and Above',
    duration: '6 Weeks',
    sessionsPerWeek: '3x / week (2 hrs)',
    instructor: 'Master Keo Moni & Hul ThaiPhirun',
    image: 'https://images.unsplash.com/photo-1518619745898-93e765966dcd?q=80&w=2834&auto=format&fit=crop',
    badge: 'Creative Studio',
    badgeColor: '#FF5733',
    description: 'Translate martial arts prowess into cinematic screen combat. Master camera angles, selling hits, reaction timing, and weapon handling for films and commercial productions.',
    learningObjectives: [
      'Camera-aware striking and exaggerated reaction mechanics',
      'Safe falling and breakfall recovery techniques on hard floors and mats',
      'Multi-person choreography timing, spatial rhythm, and pacing',
      'Pre-viz filming and instant review playback on set',
    ],
    prerequisites: 'Martial arts, gymnastics, or dance background recommended.',
    schedule: 'Fri & Sat 5:00 PM - 7:00 PM',
    translations: {
      km: {
        title: 'ក្បាច់គុនសម្តែងភាពយន្ត & សកម្មភាព Stunt',
        subtitle: 'ការរៀបចំក្បាច់វាយ ប្រយុទ្ធមុខកាមេរ៉ា & ការរៀបចំឆាក',
        description: 'បម្លែងជំនាញក្បាច់គុនទៅជាការប្រយុទ្ធលើកញ្ចក់ភាពយន្ត។ ស្ទាត់ជំនាញមុំកាមេរ៉ា ការសម្តែងការវាយត្រូវ ការកំណត់ពេលវេលាប្រតិកម្ម និងការកាន់អាវុធ។',
      },
      zh: {
        title: '动作电影特技与实战打斗编排',
        subtitle: '动作编排、镜头镜头感、对打配合与舞台走位',
        description: '将扎实的武术基本功转化为极具视觉张力的影视动作戏。掌握镜头借位发力、受击反应节奏、安全倒地翻滚及道具兵器操控。',
      },
      ko: {
        title: '무술 스턴트 및 액션 시네마 과정',
        subtitle: '합 맞추기, 카메라 앵글 타격감 연출 & 스크린 컴뱃',
        description: '정통 태권도 기술을 영화 및 미디어 액션 연출로 확장합니다. 카메라 앵글을 활용한 타격과 리액션 타이밍, 낙법, 다자간 액션 합을 체계적으로 마스터합니다.',
      },
    },
  },
  {
    id: 'film-production-bootcamp',
    division: 'studio',
    title: 'Action Cinematography & Motion Filming',
    subtitle: 'From Storyboard to Final Color Grade',
    level: 'Intermediate',
    beltRequirement: 'All Levels',
    duration: '8 Weeks',
    sessionsPerWeek: '2x / week (3 hrs)',
    instructor: 'Hul ThaiPhirun & ChanDara',
    image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2942&auto=format&fit=crop',
    badge: 'Creative Studio',
    badgeColor: '#FF5733',
    description: 'A hands-on, on-set intensive where students shoot real athletic choreography using Sony Cinema cameras, gimbal rigs, lighting setups, and DaVinci Resolve.',
    learningObjectives: [
      'Cinematic lighting ratios for high-contrast martial arts scenes',
      'Dynamic gimbal and handheld camera tracking movements',
      'Directing athletes and stunt performers for safety and maximum impact',
      'DaVinci Resolve color grading and cinematic sound design',
    ],
    prerequisites: 'Basic familiarity with camera operation is an advantage.',
    schedule: 'Sundays 10:00 AM - 4:00 PM',
    translations: {
      km: {
        title: 'សិល្បៈថតភាពយន្តសកម្មភាព & ការថតចលនា',
        subtitle: 'ពីរឿងរ៉ាវ Storyboard រហូតដល់ការកែពណ៌ Final Color Grade',
        description: 'វគ្គសិក្សាជាក់ស្តែងលើឈុតថត ដែលសិស្សថតសកម្មភាពកីឡាពិតប្រាកដដោយប្រើកាមេរ៉ា Sony Cinema ឧបករណ៍ Gimbal ពន្លឺ និង DaVinci Resolve។',
      },
      zh: {
        title: '动作影视摄影与动态运镜实训',
        subtitle: '从分镜脚本绘制到院线级后期调色 (DaVinci Resolve)',
        description: '实战进阶影视特训，学员使用索尼电影摄影机系统、专业手持稳定器、影棚灯光组以及达芬奇调色系统完成高水准运动短片制作。',
      },
      ko: {
        title: '액션 시네마토그래피 & 모션 촬영 부트캠프',
        subtitle: '스토리보드 기획부터 다빈치 리졸브 최종 컬러그레이딩까지',
        description: '소니 시네마 카메라, 짐벌 시스템, 조명 세팅 및 다빈치 리졸브를 활용하여 실제 고난도 무술 액션을 현장에서 직접 촬영하고 제작하는 실무 과정입니다.',
      },
    },
  },
]

export default academyCourses
