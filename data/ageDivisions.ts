/**
 * ==============================================================================
 * STUDENT AGE DIVISIONS & CLASS FORMATS DATA
 * ==============================================================================
 * Centralized data source for student age brackets (from Little Tigers to Elders)
 * and training class formats (General, Kids-Only, Private 1-on-1).
 * ==============================================================================
 */

export interface StudentAgeDivision {
  id: string
  name: string
  ageRange: string
  koreanTitle: string
  tagline: string
  badgeColor: string
  image: string
  developmentFocus: string
  keyCurriculum: string[]
  classDuration: string
  safetyMeasures: string
  translations?: {
    km?: Partial<Omit<StudentAgeDivision, 'id' | 'translations'>>
    zh?: Partial<Omit<StudentAgeDivision, 'id' | 'translations'>>
    ko?: Partial<Omit<StudentAgeDivision, 'id' | 'translations'>>
  }
}

export interface ClassFormat {
  id: string
  title: string
  subtitle: string
  iconName: 'Users' | 'Smile' | 'Target'
  accentColor: string
  badge: string
  description: string
  idealFor: string
  benefits: string[]
  ratio: string
  translations?: {
    km?: Partial<Omit<ClassFormat, 'id' | 'translations'>>
    zh?: Partial<Omit<ClassFormat, 'id' | 'translations'>>
    ko?: Partial<Omit<ClassFormat, 'id' | 'translations'>>
  }
}

export const studentAgeDivisions: StudentAgeDivision[] = [
  {
    id: 'tigers',
    name: 'Little Tigers',
    ageRange: 'Ages 3 – 6',
    koreanTitle: '어린이 호랑이반',
    tagline: 'Balance, Motor Skills, Listening Etiquette & Playful Discipline',
    badgeColor: '#FFD505',
    image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=800&auto=format&fit=crop',
    developmentFocus: 'Gross motor coordination, eye-hand balance, social respect, following multi-step directions, and enthusiastic physical fitness.',
    keyCurriculum: [
      'Padded obstacle courses & agility ladders',
      'Fundamental front kick & basic punching mechanics',
      'Dojang bowing etiquette, respect for parents & teachers',
      'Bully-awareness and personal boundary confidence',
    ],
    classDuration: '45 Minutes',
    safetyMeasures: '100% padded safety floors, soft foam shields, 1:5 instructor-to-child ratio.',
    translations: {
      km: {
        name: 'Little Tigers (កុមារតូច)',
        tagline: 'លំនឹង, ជំនាញចលករ, សីលធម៌នៃការស្តាប់ & វិន័យរីករាយ',
        developmentFocus: 'ការសម្របសម្រួលសាច់ដុំធំ លំនឹងដៃ-ភ្នែក ការគោរពសង្គម ការធ្វើតាមការណែនាំ និងកាយសម្បទារីករាយ។',
        keyCurriculum: [
          'ផ្លូវឧបសគ្គមានទ្រនាប់សុវត្ថិភាព & ជណ្តើររហ័សរហួន',
          'បច្ចេកទេសទាត់មុខមូលដ្ឋាន & ការដាល់ត្រឹមត្រូវ',
          'សីលធម៌គោរពក្នុងដូជ៉ាង ការគោរពឪពុកម្តាយ និងគ្រូ',
          'ទំនុកចិត្តការពារខ្លួនពីការសម្លុត',
        ],
        safetyMeasures: 'កម្រាលសុវត្ថិភាព ១០០%, ខែលពូកទន់, សមាមាត្រគ្រូ ១:៥ នាក់។',
      },
      zh: {
        name: '幼虎启蒙班 (Little Tigers)',
        tagline: '平衡感、粗大动作协调、倾听礼仪与趣味自律',
        developmentFocus: '专注培养3-6岁幼儿的本体感觉、空间平衡、双眼手脚协调、团队社交礼貌与专注力。',
        keyCurriculum: [
          '充气海绵障碍挑战与敏捷梯训练',
          '基础正踢腿与标准出拳动作轨迹',
          '道场行礼规范、孝敬父母与尊师重道',
          '反霸凌安全边界意识与自信心建立',
        ],
        safetyMeasures: '全覆盖加厚防摔环保地垫，1:5 超高师生师资配比。',
      },
      ko: {
        name: '리틀 타이거즈 (유아부)',
        tagline: '균형감각, 대근육 발달, 경청 예절 및 놀이형 자기통제',
        developmentFocus: '대근육 협응력, 시각-손발 평형감각, 올바른 인사 예절 및 기초 체력을 다집니다.',
        keyCurriculum: [
          '안전 쿠션 장애물 코스 및 민첩성 사다리 훈련',
          '기초 앞차기 및 정권 지르기 궤적 습득',
          '도장 입퇴장 예절, 부모님 및 사범님 공경',
          '자신감 형성 및 학교폭력 예방 인지 훈련',
        ],
        safetyMeasures: '100% 충격 흡수 안전 매트, 1:5 전담 지도진 배치.',
      },
    },
  },
  {
    id: 'cadets',
    name: 'Cadets & Youth',
    ageRange: 'Ages 7 – 11',
    koreanTitle: '유소년반',
    tagline: 'Technical Precision, Focus, Anti-Bullying Defense & Agility',
    badgeColor: '#09BB00',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=800&auto=format&fit=crop',
    developmentFocus: 'World Taekwondo Taegeuk Poomsae forms, fast kicking velocity, sportsmanship, and mental endurance under pressure.',
    keyCurriculum: [
      'Taegeuk 1 through Taegeuk 4 Poomsae forms',
      'High-speed roundhouse & side kicking precision',
      'Cooperative 1-step sparring and target pad drills',
      'School grade improvement & discipline report cards',
    ],
    classDuration: '60 Minutes',
    safetyMeasures: 'World Taekwondo approved chest protectors (Hogu) & headgear during sparring.',
    translations: {
      km: {
        name: 'Cadets & យុវវ័យ',
        tagline: 'បច្ចេកទេសជាក់លាក់, ការផ្តោតអារម្មណ៍, ការការពារខ្លួន & ភាពរហ័សរហួន',
        developmentFocus: 'ទម្រង់ Taegeuk Poomsae របស់ World Taekwondo, ល្បឿនទាត់រហ័ស, ស្មារតីកីឡា និងភាពអត់ធ្មត់ផ្លូវចិត្ត។',
      },
      zh: {
        name: '青少年少儿梯队 (Cadets & Youth)',
        tagline: '技术规范、高度专注、校园防身与运动敏捷',
        developmentFocus: '世界跆拳道太极品势标准、高速旋风踢击反应速度、体育精神与坚韧逆商培养。',
      },
      ko: {
        name: '유소년 카뎃반 (초등부)',
        tagline: '기술적 정밀도, 고도의 집중력, 호신술 및 순발력',
        developmentFocus: '국기원 공인 태극 품새, 고속 발차기 타격 속도, 스포츠맨십 및 인내심 함양.',
      },
    },
  },
  {
    id: 'juniors',
    name: 'Juniors & Teens',
    ageRange: 'Ages 12 – 17',
    koreanTitle: '청소년반',
    tagline: 'Olympic Sparring, Freestyle Acrobatics, Leadership & Dan Certification',
    badgeColor: '#0042EA',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop',
    developmentFocus: 'Advanced competition sparring (Kyorugi), acrobatic tricking (540s, flips), Kukkiwon Black Belt exams, and junior coaching mentorship.',
    keyCurriculum: [
      'Full Taegeuk 1-8 syllabus and Dan Poomsae (Koryo, Keumgang)',
      'Electronic sensor sparring strategy and counter-timing',
      'Freestyle tricking on Olympic spring floors & foam pits',
      'National tournament squad qualification camps',
    ],
    classDuration: '75 – 90 Minutes',
    safetyMeasures: 'Daedo electronic scoring sensor equipment, spring-cushioned shock-absorption subfloors.',
    translations: {
      km: {
        name: 'Juniors & ក្មេងជំទង់',
        tagline: 'ការប្រកួតអូឡាំពិក, កាយសម្ព័ន្ធ Freestyle, ភាពជាអ្នកដឹកនាំ & ខ្សែក្រវាត់ខ្មៅ Dan',
        developmentFocus: 'ការប្រកួត Kyorugi កម្រិតខ្ពស់, កាយសម្ព័ន្ធ Tricking (540s, flips), ការប្រលងខ្សែក្រវាត់ខ្មៅ Kukkiwon និងភាពជាអ្នកដឹកនាំ។',
      },
      zh: {
        name: '少年精英与青年组 (Juniors & Teens)',
        tagline: '奥运竞技实战、极限特技空翻、领袖品格与国技院黑带晋升',
        developmentFocus: '高阶竞技对战策略、540度转体踢击、国技院黑带一段至三段考段及助教领导力孵化。',
      },
      ko: {
        name: '청소년부 (중고등부)',
        tagline: '올림픽 정통 겨루기, 익스트림 트릭킹, 리더십 및 국기원 승단',
        developmentFocus: '고급 겨루기 전술 훈련, 540도 고난도 회전 격파, 공인 단증 취득 및 주니어 지도자 과정 연계.',
      },
    },
  },
  {
    id: 'seniors',
    name: 'Seniors & Adults',
    ageRange: 'Ages 18 – 49',
    koreanTitle: '성인 일반반',
    tagline: 'Elite Conditioning, Stress Relief, Functional Mobility & Self-Defense',
    badgeColor: '#EF2F38',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop',
    developmentFocus: 'High-intensity martial conditioning, functional hip mobility, adult Kukkiwon Dan certification, and practical street self-defense.',
    keyCurriculum: [
      'Functional hip opening & hamstring flexibility protocols',
      'Dynamic pad power combinations & heavy bag rounds',
      'Realistic close-quarters escapes & wrist release locks',
      'Adult Black Belt advancement pathway at your own pace',
    ],
    classDuration: '60 – 75 Minutes',
    safetyMeasures: 'Individual mobility scaling, heart-rate recovery pacing, zero-ego culture.',
    translations: {
      km: {
        name: 'មនុស្សពេញវ័យ (Seniors & Adults)',
        tagline: 'កាយសម្បទាកម្រិតខ្ពស់, កាត់បន្ថយស្ត្រេស, ភាពបត់បែន & ការពារខ្លួន',
        developmentFocus: 'ការហ្វឹកហាត់កាយសម្បទាខ្លាំងក្លា បង្កើនភាពបត់បែនត្រគាក ការប្រលងខ្សែក្រវាត់ខ្មៅ និងការការពារខ្លួនជាក់ស្តែង។',
      },
      zh: {
        name: '成年人白领与进阶班 (Adults & Seniors)',
        tagline: '燃脂塑形、释放高压、关节灵活性与实用女子防身',
        developmentFocus: '高强度间歇格斗体能、髋关节活动度解锁、成年人国技院黑带晋升通道与街头实用防身。',
      },
      ko: {
        name: '성인 일반부 (Adults)',
        tagline: '체력 증진, 스트레스 해소, 기능적 유연성 및 실전 호신술',
        developmentFocus: '고강도 무도 유산소 피트니스, 골반 가동성 개선, 성인 국기원 단증 취득 및 실전 방어 기술.',
      },
    },
  },
  {
    id: 'masters',
    name: 'Golden Masters',
    ageRange: 'Ages 50+',
    koreanTitle: '골든 시니어반',
    tagline: 'Joint Health, Core Stability, Mental Clarity & Longevity Flow',
    badgeColor: '#A855F7',
    image: 'https://images.unsplash.com/photo-1555597673-b21d5c935865?q=80&w=800&auto=format&fit=crop',
    developmentFocus: 'Low-impact stance balance, spinal decompression, slow-flow Poomsae breathing, and long-term joint longevity.',
    keyCurriculum: [
      'Low-impact slow cadence Poomsae forms (Taegeuk & Koryo)',
      'Single-leg balance & fall-prevention proprioception',
      'Breathing synchronization & autonomic nervous system calm',
      'Isometric tendon conditioning without heavy joint impact',
    ],
    classDuration: '45 – 60 Minutes',
    safetyMeasures: 'Zero high-impact jumps, personalized range-of-motion modifications.',
    translations: {
      km: {
        name: 'Golden Masters (វ័យ ៥០+)',
        tagline: 'សុខភាពសន្លាក់, លំនឹងស្នូល, ភាពស្ងប់ស្ងាត់ & អាយុយឺនយូរ',
        developmentFocus: 'លំនឹងជំហរស្រាលៗ ការដកដង្ហើមតាមចង្វាក់ Poomsae និងសុខភាពសន្លាក់យូរអង្វែង។',
      },
      zh: {
        name: '常青大师班 (Golden Masters 50+)',
        tagline: '关节养护、核心稳定、呼吸冥想与健康长寿',
        developmentFocus: '低冲击平衡控制、脊柱减压、慢节奏品势呼吸法以及防跌倒本体感受训练。',
      },
      ko: {
        name: '골든 마스터즈 (50세 이상)',
        tagline: '관절 건강, 코어 안정화, 단전호흡 및 활력 증진',
        developmentFocus: '저충격 슬로우 템포 품새, 척추 감압, 호흡 명상 및 낙상 방지 균형감각 강화.',
      },
    },
  },
]

export const classFormats: ClassFormat[] = [
  {
    id: 'general',
    title: 'General Group Classes',
    subtitle: 'High-Energy Collective Training',
    iconName: 'Users',
    accentColor: '#EF2F38',
    badge: 'Most Popular',
    description: 'Dynamic group atmosphere with age and rank-matched peers. Build team camaraderie, sparring timing, and collective energy.',
    idealFor: 'Students seeking community motivation, regular weekly training, and rank progression.',
    benefits: [
      'Full sparring and partner pad combination practice',
      'Group discipline and camaraderie with rank peers',
      'Included in standard Unlimited Membership plans',
    ],
    ratio: '1:12 Coach Ratio',
    translations: {
      km: {
        title: 'ថ្នាក់រៀនជាក្រុមទូទៅ',
        subtitle: 'ការហ្វឹកហាត់រួមគ្នាប្រកបដោយថាមពលខ្ពស់',
        description: 'បរិយាកាសជាក្រុមដ៏រស់រវើកជាមួយមិត្តរួមខ្សែក្រវាត់ និងវ័យដូចគ្នា។ បង្កើតស្មារតីក្រុម និងថាមពលរួម។',
      },
      zh: {
        title: '常规综合团体大课',
        subtitle: '充满活力的高能量集体训练',
        description: '按年龄段与段位精准分班，在热烈向上的团队氛围中切磋实战时机、品势规范与团队凝聚力。',
      },
      ko: {
        title: '정규 그룹 클래스',
        subtitle: '에너지 넘치는 단체 수련',
        description: '연령 및 띠별 맞춤형 그룹 수련으로 도우들과 함께 호흡하며 단체 시너지와 실전 타이밍을 완성합니다.',
      },
    },
  },
  {
    id: 'kids-only',
    title: 'Kids & Cadets Focus Cohort',
    subtitle: 'Dedicated Child-Development Environment',
    iconName: 'Smile',
    accentColor: '#FFD505',
    badge: 'Child Safe',
    description: 'Exclusively structured for children ages 3 to 11. Certified instructors trained in pediatric pedagogy and positive reinforcement.',
    idealFor: 'Parents looking for focus, anti-bullying confidence, and positive behavioral development.',
    benefits: [
      'Safe padded equipment and fun gamified agility drills',
      'Focus on parent communication and quarterly report cards',
      'Child-safe anti-bullying conflict de-escalation',
    ],
    ratio: '1:6 Coach Ratio',
    translations: {
      km: {
        title: 'ថ្នាក់កុមារ & Cadets ផ្តាច់មុខ',
        subtitle: 'បរិស្ថានអភិវឌ្ឍន៍កុមារប្រកបដោយសុវត្ថិភាព',
        description: 'រៀបចំឡើងយ៉ាងពិសេសសម្រាប់កុមារអាយុពី ៣ ដល់ ១១ ឆ្នាំ ជាមួយគ្រូបង្វឹកដែលមានជំនាញគរុកោសល្យកុមារ។',
      },
      zh: {
        title: '少儿专属成长小班',
        subtitle: '专属儿童心理与骨骼发育的呵护环境',
        description: '专为 3-11 岁少儿设计，由具备儿童运动教育学背景的资深黑带师范执教，注重正向激励与性格塑造。',
      },
      ko: {
        title: '키즈 & 카뎃 전용 클래스',
        subtitle: '어린이 발달 맞춤형 안전 수련 환경',
        description: '3세부터 11세까지 어린이를 위해 특별 설계된 반으로, 아동 심리 및 발달 전문 사범진이 지도합니다.',
      },
    },
  },
  {
    id: 'private',
    title: 'Private 1-on-1 Master Coaching',
    subtitle: 'Maximum Biomechanical Customization',
    iconName: 'Target',
    accentColor: '#0042EA',
    badge: 'High Performance',
    description: 'Direct 1-on-1 private instruction with Master Keo Moni or Master Chon Sovan. 240 FPS video feedback and accelerated Dan preparation.',
    idealFor: 'Competitive athletes, executive professionals, or students targeting accelerated Dan exams.',
    benefits: [
      'Personalized biomechanical movement analysis',
      'Customized schedule matching your calendar availability',
      'Rapid mastery of advanced aerial tricks & Dan Poomsae',
    ],
    ratio: '1:1 Master Ratio',
    translations: {
      km: {
        title: 'ការបង្វឹកផ្ទាល់ ១ ទល់ ១ ជាមួយមេគ្រូ',
        subtitle: 'ការរៀបចំកម្មវិធីតាមតម្រូវការផ្ទាល់ខ្លួនកម្រិតខ្ពស់',
        description: 'ការបង្រៀនផ្ទាល់ជាមួយ Master Keo Moni ឬ Master Chon Sovan ជាមួយនឹងការវិភាគវីដេអូល្បឿនលឿន ២៤០ FPS។',
      },
      zh: {
        title: '私教 1对1 大师定制指导',
        subtitle: '运动生物力学与竞技细节极限定制',
        description: '由创始人 Keo Moni 或总教练 Chon Sovan 大师亲自单独授课，配套 240FPS 高速摄像机动作精修与高段位极速进阶。',
      },
      ko: {
        title: '1:1 마스터 프라이빗 레슨',
        subtitle: '개인 맞춤형 초정밀 생체역학 코칭',
        description: '케오 모니 대표 또는 촌 소반 수석사범이 1:1로 직접 지도하며, 240 FPS 고속 모션 캡처 분석으로 단기간 최고 성과를 달성합니다.',
      },
    },
  },
]
