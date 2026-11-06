export interface ScheduleGroup {
  badge: string
  label: string
  slots: string[]
}

export interface DojangBranch {
  id: string
  name: string
  tagline: string
  isHeadquarters: boolean
  address: {
    street: string
    district: string
    city: string
    country: string
  }
  phone: string
  whatsapp: string
  email: string
  googleMapsUrl: string
  mapEmbedUrl: string
  scheduleGroups: ScheduleGroup[]
  features: string[]
  image: string
  translations?: {
    km?: Partial<Omit<DojangBranch, 'id' | 'isHeadquarters' | 'translations'>>
    zh?: Partial<Omit<DojangBranch, 'id' | 'isHeadquarters' | 'translations'>>
    ko?: Partial<Omit<DojangBranch, 'id' | 'isHeadquarters' | 'translations'>>
  }
}

export const dojangBranches: DojangBranch[] = [
  // ============================================================================
  // 1. OLYMPIC BRANCH
  // ============================================================================
  {
    id: 'olympic-branch',
    name: 'Olympic Branch',
    tagline: 'National Olympic Stadium Complex, Weekend Elite Taekwondo Training',
    isHeadquarters: true,
    address: {
      street: 'National Olympic Stadium Complex, Charles de Gaulle Blvd',
      district: 'Khan 7 Makara',
      city: 'Phnom Penh',
      country: 'Cambodia',
    },
    phone: '012 220 124',
    whatsapp: '+855 12 220 124',
    email: 'infinity.tkd.kh@gmail.com',
    googleMapsUrl: 'https://maps.app.goo.gl/Qw3aSuaBCGiFAR6k8',
    mapEmbedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.775877478065!2d104.9089788!3d11.5562607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109516206881b73%3A0xa7365d354b183336!2sInfinity%20Taekwondo%20-%20Olympic!5e0!3m2!1sen!2skh!4v1700000000000!5m2!1sen!2skh',
    scheduleGroups: [
      {
        badge: 'Weekend',
        label: 'Weekend Class (Saturday & Sunday)',
        slots: ['09:00 AM – 10:00 AM'],
      },
    ],
    features: [
      'National Olympic Stadium Legacy & Prestigious Central Location',
      'WT Certified Orthodox Competition Mat Flooring',
      'Weekend Intensive Poomsae, Demonstration & Tricking Focus',
      'Direct Dan Promotion Testing & National Athlete Pathways',
      'Air-Conditioned Training Hall & Dedicated Viewing Area for Parents',
      'Free & Spacious On-Site Parking at Olympic Sports Complex',
    ],
    image: 'https://images.unsplash.com/photo-1555597673-b21d5c935865?q=80&w=2070&auto=format&fit=crop',
    translations: {
      km: {
        name: 'សាខាពហុកីឡដ្ឋានជាតិអូឡាំពិក (Olympic Branch)',
        tagline: 'តំបន់ពហុកីឡដ្ឋានជាតិអូឡាំពិក ការហ្វឹកហាត់ក្បាច់គុនតេក្វាន់ដូកម្រិតខ្ពស់ចុងសប្តាហ៍',
        address: {
          street: 'បរិវេណពហុកីឡដ្ឋានជាតិអូឡាំពិក មហាវិថីឆាលដឺហ្គោល',
          district: 'ខណ្ឌ ៧មករា',
          city: 'រាជធានីភ្នំពេញ',
          country: 'ប្រទេសកម្ពុជា',
        },
        scheduleGroups: [
          {
            badge: 'ចុងសប្តាហ៍',
            label: 'ថ្នាក់ចុងសប្តាហ៍ (សៅរ៍ & អាទិត្យ)',
            slots: ['09:00 AM – 10:00 AM'],
          },
        ],
        features: [
          'ទីតាំងប្រវត្តិសាស្ត្រពហុកីឡដ្ឋានជាតិអូឡាំពិក និងបរិយាកាសកីឡាជាតិ',
          'កម្រាលពូកហ្វឹកហាត់ខ្នាតអន្តរជាតិ WT Certified Competition Mats',
          'ការហ្វឹកហាត់ក្បាច់គុនមេគុន Poomsae ការសម្តែង (Demonstration) និង Tricking ចុងសប្តាហ៍',
          'ឱកាសប្រឡងដំឡើងខ្សែក្រវាត់ Dan Kukkiwon និងឈានទៅក្រុមកីឡាករជម្រើសជាតិ',
          'សាលាហ្វឹកហាត់មានផាសុកភាព ម៉ាស៊ីនត្រជាក់ និងកន្លែងអង្កេតសម្រាប់អាណាព្យាបាល',
          'ចំណតរថយន្ត និងម៉ូតូធំទូលាយ ងាយស្រួលធ្វើដំណើរ',
        ],
      },
      zh: {
        name: '奥林匹克校区 (Olympic Branch)',
        tagline: '国家奥林匹克体育中心核心区、周末跆拳道精英强化训练基地',
        address: {
          street: '国家奥林匹克体育场综合区、戴高乐大道',
          district: '玛卡拉区 (Khan 7 Makara)',
          city: '金边市',
          country: '柬埔寨',
        },
        scheduleGroups: [
          {
            badge: '周末特训',
            label: '周末精英班 (周六与周日)',
            slots: ['09:00 AM – 10:00 AM'],
          },
        ],
        features: [
          '国家奥林匹克体育中心核心地标、正统武道历史传承',
          'WT 世跆联国际认证专业竞技比赛级高回弹地垫',
          '周末公认品势（Poomsae）、表演示范与特技（Tricking）专项集训',
          '直通韩国国技院（Kukkiwon）正品品/段位官方审核通道',
          '全冷气舒适训练馆、配备家长专注观摩与休憩专区',
          '奥林匹克体育场超大专属免费停车区、交通枢纽极其便利',
        ],
      },
      ko: {
        name: '올림픽 지점 (Olympic Branch)',
        tagline: '국가 올림픽 스타디움 단지, 주말 엘리트 태권도 집중 클래스',
        address: {
          street: '국가 올림픽 스타디움 컴플렉스, 샤를 드골 대형대로',
          district: '칸 7 마카라 (7 Makara)',
          city: '프놈펜',
          country: '캄보디아',
        },
        scheduleGroups: [
          {
            badge: '주말반',
            label: '주말 정규 클래스 (토요일 & 일요일)',
            slots: ['09:00 AM – 10:00 AM'],
          },
        ],
        features: [
          '국가 올림픽 경기장 중심부의 역사적 무도 인프라',
          'WT 세계태권도연맹 공인 경기용 탄성 매트 완비',
          '주말 집중 공인품새 정밀 교정, 시범 및 트릭킹 훈련',
          '국기원 공인 단증 심사 및 국가대표 상비군 파이프라인 연계',
          '풀 에어컨 쾌적한 도장 환경 및 학부모 전용 참관 라운지',
          '올림픽 경기장 내 넓고 편리한 전용 주차 공간 완비',
        ],
      },
    },
  },

  // ============================================================================
  // 2. KOUK KHLEANG BRANCH
  // ============================================================================
  {
    id: 'kouk-khleang-branch',
    name: 'Kouk Khleang Branch',
    tagline: 'Comprehensive Weekday & Weekend Taekwondo Academy',
    isHeadquarters: false,
    address: {
      street: 'Kouk Khleang, Sen Sok',
      district: 'Khan Sen Sok',
      city: 'Phnom Penh',
      country: 'Cambodia',
    },
    phone: '012 220 124',
    whatsapp: '+855 12 220 124',
    email: 'infinity.tkd.kh@gmail.com',
    googleMapsUrl: 'https://maps.app.goo.gl/QgYNFhQLwkuQB9LN8',
    mapEmbedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.483984126938!2d104.8588104!3d11.5769319!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31094fcd5e542f2b%3A0x9db17eae71f91955!2sInfinity%20Taekwondo!5e0!3m2!1sen!2skh!4v1700000000000!5m2!1sen!2skh',
    scheduleGroups: [
      {
        badge: 'Weekday',
        label: 'Tuesday & Wednesday Class',
        slots: [
          '09:00 AM – 11:00 AM',
          '01:30 PM – 03:30 PM',
          '06:00 PM – 08:00 PM',
        ],
      },
      {
        badge: 'Weekday',
        label: 'Thursday & Friday Class',
        slots: [
          '09:00 AM – 11:00 AM',
          '01:30 PM – 03:30 PM',
          '06:00 PM – 08:00 PM',
        ],
      },
      {
        badge: 'Weekend',
        label: 'Weekend Class (Saturday & Sunday)',
        slots: [
          '09:30 AM – 11:30 AM',
          '01:00 PM – 03:00 PM',
          '03:30 PM – 05:30 PM',
          '06:00 PM – 08:00 PM',
        ],
      },
    ],
    features: [
      'Comprehensive 7-Day Flexible Class Timing Options (Morning, Afternoon & Evening)',
      'Dual World Taekwondo Regulation Poomsae & Demonstration Rings',
      'Electronic Kick Speed & Power Measurement Practice',
      'Youth Little Tigers, Cadets, Juniors & Adult White-to-Black Belt Syllabus',
      'Calisthenics Conditioning Rig, Flexibility Stations & Crash Mats',
      'Modern Pro Shop with Official Doboks, Protective Equipment & Gear',
    ],
    image: 'https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=2940&auto=format&fit=crop',
    translations: {
      km: {
        name: 'សាខាគោកឃ្លាង (Kouk Khleang Branch)',
        tagline: 'សាលាហ្វឹកហាត់ពេញលេញ ថ្នាក់រៀនថ្ងៃធ្វើការ និងចុងសប្តាហ៍ច្រើនជម្រើស',
        address: {
          street: 'គោកឃ្លាង សង្កាត់គោកឃ្លាង',
          district: 'ខណ្ឌសែនសុខ',
          city: 'រាជធានីភ្នំពេញ',
          country: 'ប្រទេសកម្ពុជា',
        },
        scheduleGroups: [
          {
            badge: 'ថ្ងៃធ្វើការ',
            label: 'ថ្នាក់ថ្ងៃអង្គារ & ពុធ (Tuesday & Wednesday Class)',
            slots: [
              '09:00 AM – 11:00 AM',
              '01:30 PM – 03:30 PM',
              '06:00 PM – 08:00 PM',
            ],
          },
          {
            badge: 'ថ្ងៃធ្វើការ',
            label: 'ថ្នាក់ថ្ងៃព្រហស្បតិ៍ & សុក្រ (Thursday & Friday Class)',
            slots: [
              '09:00 AM – 11:00 AM',
              '01:30 PM – 03:30 PM',
              '06:00 PM – 08:00 PM',
            ],
          },
          {
            badge: 'ចុងសប្តាហ៍',
            label: 'ថ្នាក់ចុងសប្តាហ៍ (សៅរ៍ & អាទិត្យ)',
            slots: [
              '09:30 AM – 11:30 AM',
              '01:00 PM – 03:00 PM',
              '03:30 PM – 05:30 PM',
              '06:00 PM – 08:00 PM',
            ],
          },
        ],
        features: [
          'ជម្រើសម៉ោងហ្វឹកហាត់បត់បែនច្រើនពេល (ព្រឹក រសៀល និងពេលល្ងាច)',
          'ទីលានប្រកួតខ្នាតអន្តរជាតិទ្វេដងសម្រាប់ Poomsae & ការសម្តែង (Demonstration)',
          'ឧបករណ៍អេឡិចត្រូនិកសម្រាប់វាស់ល្បឿន និងកម្លាំងទាត់',
          'កម្មវិធីសិក្សាសម្រាប់កុមារ Little Tigers យុវជន និងមនុស្សពេញវ័យពីខ្សែក្រវាត់សដល់ខ្មៅ',
          'កន្លែងហ្វឹកហាត់ពង្រឹងសាច់ដុំ បត់បែនរាងកាយ និងពូកសុវត្ថិភាពស្តង់ដារ',
          'ហាងទំនិញ Infinity Pro Shop លក់ឯកសណ្ឋាន Dobok ខ្សែក្រវាត់ និងសម្ភារៈការពារ',
        ],
      },
      zh: {
        name: '克良校区 (Kouk Khleang Branch)',
        tagline: '森速区全方位综合跆拳道馆、工作日与周末丰富班次与专业设施',
        address: {
          street: 'Kouk Khleang, 森速区',
          district: '森速区 (Khan Sen Sok)',
          city: '金边市',
          country: '柬埔寨',
        },
        scheduleGroups: [
          {
            badge: '工作日',
            label: '周二与周三班 (Tuesday & Wednesday Class)',
            slots: [
              '09:00 AM – 11:00 AM',
              '01:30 PM – 03:30 PM',
              '06:00 PM – 08:00 PM',
            ],
          },
          {
            badge: '工作日',
            label: '周四与周五班 (Thursday & Friday Class)',
            slots: [
              '09:00 AM – 11:00 AM',
              '01:30 PM – 03:30 PM',
              '06:00 PM – 08:00 PM',
            ],
          },
          {
            badge: '周末',
            label: '周末综合班 (周六与周日)',
            slots: [
              '09:30 AM – 11:30 AM',
              '01:00 PM – 03:00 PM',
              '03:30 PM – 05:30 PM',
              '06:00 PM – 08:00 PM',
            ],
          },
        ],
        features: [
          '早间、午后、晚间多时段超灵活班次设置，满足各年龄段训练需求',
          '双场地世跆联标准品势与表演示范专用道垫',
          '配置电子踢击速度与力量测算设备',
          '涵盖小老虎幼儿启蒙、青少年竞技梯队及成人白带至黑带晋级全体系',
          '自重体适能核心体能架、柔韧性拉伸区与高密度防护摔垫',
          '官方正品装备专营店（道服、腰带、专业护具一站式配齐）',
        ],
      },
      ko: {
        name: '콕클레앙 지점 (Kouk Khleang Branch)',
        tagline: '센속 구 종합 태권도 전문 아카데미, 평일반 및 주말반 맞춤 시간표',
        address: {
          street: 'Kouk Khleang, Sen Sok',
          district: '센속 구 (Khan Sen Sok)',
          city: '프놈펜',
          country: '캄보디아',
        },
        scheduleGroups: [
          {
            badge: '평일반',
            label: '화·수 정규반 (Tuesday & Wednesday Class)',
            slots: [
              '09:00 AM – 11:00 AM',
              '01:30 PM – 03:30 PM',
              '06:00 PM – 08:00 PM',
            ],
          },
          {
            badge: '평일반',
            label: '목·금 정규반 (Thursday & Friday Class)',
            slots: [
              '09:00 AM – 11:00 AM',
              '01:30 PM – 03:30 PM',
              '06:00 PM – 08:00 PM',
            ],
          },
          {
            badge: '주말반',
            label: '주말 종합반 (토요일 & 일요일)',
            slots: [
              '09:30 AM – 11:30 AM',
              '01:00 PM – 03:00 PM',
              '03:30 PM – 05:30 PM',
              '06:00 PM – 08:00 PM',
            ],
          },
        ],
        features: [
          '오전·오후·야간 등 라이프스타일에 맞춘 다채로운 수련 타임테이블',
          'WT 세계태권도연맹 규격 듀얼 품새 및 시범 정규 경기장 매트',
          '전자 발차기 속도 및 파워 측정 훈련 시설',
          '유아 리틀 타이거즈, 유소년 상비군, 성인부 백띠~검은띠 승단 체계',
          '맨몸 칼리스데닉스 근력 트레이닝 랙, 유연성 스테이션 및 안전 매트',
          '공식 도복, 공인 띠, 안전 보호구 구비 도장 내 전용 프로샵 운영',
        ],
      },
    },
  },
]
