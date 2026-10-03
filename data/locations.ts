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
  hours: {
    weekdays: string
    saturday: string
    sunday: string
  }
  features: string[]
  leadInstructors: string[]
  image: string
  mapEmbedUrl: string
  translations?: {
    km?: Partial<Omit<DojangBranch, 'id' | 'isHeadquarters' | 'translations'>>
    zh?: Partial<Omit<DojangBranch, 'id' | 'isHeadquarters' | 'translations'>>
    ko?: Partial<Omit<DojangBranch, 'id' | 'isHeadquarters' | 'translations'>>
  }
}

export const dojangBranches: DojangBranch[] = [
  {
    id: 'factory-hq',
    name: 'The Factory Phnom Penh (HQ & Master Complex)',
    tagline: 'Flagship Training Facility, Tricking Spring Pit & Performance Lab',
    isHeadquarters: true,
    address: {
      street: 'The Factory Phnom Penh, Urban Village, National Road 2',
      district: 'Chak Angre Leu, Mean Chey',
      city: 'Phnom Penh',
      country: 'Cambodia',
    },
    phone: '+855 12 345 678',
    whatsapp: '+855 12 345 678',
    email: 'hq@infinitytaekwondo.com',
    hours: {
      weekdays: '6:00 AM - 9:00 PM',
      saturday: '8:00 AM - 7:00 PM',
      sunday: '9:00 AM - 5:00 PM',
    },
    features: [
      '600 m² Olympic-Grade Spring Mat Floor',
      'Acrobatic Tricking Air Tracks & Foam Crash Pit',
      'Sport Science Biomechanics & Jump Telemetry Rig',
      'Creative Media Cinema Lighting & Stage Set',
      'Infinity Pro Shop (Official Dobok, Belts & Gear)',
      'Parents Lounge & Viewing Mezzanine with Free Wi-Fi',
    ],
    leadInstructors: [
      'Master Keo Moni (4th Dan)',
      'Master Chon Sovan (5th Dan)',
      'Kim Heng (Tricking Lead)',
      'Dr. Rithy Panha (Physiotherapist)',
    ],
    image: 'https://images.unsplash.com/photo-1555597673-b21d5c935865?q=80&w=2070&auto=format&fit=crop',
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3909.529881512401!2d104.92955377587847!3d11.513753345155167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109516c1ecf4251%3A0xe54d4ffc04db0343!2sFactory%20Phnom%20Penh!5e0!3m2!1sen!2skh!4v1700000000000!5m2!1sen!2skh',
    translations: {
      km: {
        name: 'The Factory ភ្នំពេញ (ទីស្នាក់ការកណ្តាល HQ & Master Complex)',
        tagline: 'មជ្ឈមណ្ឌលហ្វឹកហាត់កម្រិតស្តង់ដារ ទីលាន Tricking Spring Pit & មន្ទីរពិសោធន៍កីឡា',
        address: {
          street: 'The Factory Phnom Penh, Urban Village, ផ្លូវជាតិលេខ ២',
          district: 'ចាក់អង្រែលើ ខណ្ឌមានជ័យ',
          city: 'រាជធានីភ្នំពេញ',
          country: 'ប្រទេសកម្ពុជា',
        },
      },
      zh: {
        name: '金边 The Factory 旗舰总馆 (HQ & 综合大师殿堂)',
        tagline: '旗舰级综合训练馆、特技弹簧保护坑与运动表现实验室',
        address: {
          street: 'The Factory Phnom Penh, Urban Village, 2号国道',
          district: '棉芷区 查昂烈鲁分区',
          city: '金边市',
          country: '柬埔寨',
        },
      },
      ko: {
        name: '더 팩토리 프놈펜 본관 (HQ & 마스터 컴플렉스)',
        tagline: '플래그십 종합 트레이닝 센터, 트릭킹 세이프티 폼피트 & 스포츠 퍼포먼스 랩',
        address: {
          street: 'The Factory Phnom Penh, Urban Village, 2번 국도',
          district: 'Mean Chey, Chak Angre Leu',
          city: '프놈펜',
          country: '캄보디아',
        },
      },
    },
  },
  {
    id: 'bkk1-center',
    name: 'BKK1 Elite Training Center (Branch 02)',
    tagline: 'Metropolitan Dojo, Precision Poomsae & Sparring Hub',
    isHeadquarters: false,
    address: {
      street: 'St 310 (Near BKK Market)',
      district: 'Boeung Keng Kang 1 (BKK1)',
      city: 'Phnom Penh',
      country: 'Cambodia',
    },
    phone: '+855 12 987 654',
    whatsapp: '+855 12 987 654',
    email: 'bkk1@infinitytaekwondo.com',
    hours: {
      weekdays: '6:30 AM - 8:30 PM',
      saturday: '8:30 AM - 6:00 PM',
      sunday: '10:00 AM - 4:00 PM (Dan Grading Only)',
    },
    features: [
      'Dual World Taekwondo Recognized Poomsae Competition Mats',
      'Daedo Electronic Sensor Sparring Ring',
      'Calisthenics & Tendon Conditioning Station',
      'Private 1-on-1 Master Dan Assessment Suite',
      'Executive Locker Rooms & Recovery Showers',
      'High-Speed Video Replay Form Analysis Screen',
    ],
    leadInstructors: [
      'Master Chon Sovan (5th Dan)',
      'Instructor Vichea Sothea (3rd Dan)',
      'Sokha Rith (Assistant National Coach)',
    ],
    image: 'https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=2940&auto=format&fit=crop',
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.878783477169!2d104.92138987587932!3d11.547141544238597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109513e4b786c77%3A0xb36f26487e5fa2!2sBoeung%20Keng%20Kang%201%2C%20Phnom%20Penh!5e0!3m2!1sen!2skh!4v1700000000001!5m2!1sen!2skh',
    translations: {
      km: {
        name: 'មជ្ឈមណ្ឌលហ្វឹកហាត់ឥស្សរជន BKK1 (សាខាទី ២)',
        tagline: 'ដូជ៉ាងកណ្តាលក្រុង ភាពច្បាស់លាស់នៃ Poomsae & មជ្ឈមណ្ឌលប្រយុទ្ធ',
        address: {
          street: 'ផ្លូវ ៣១០ (ជិតផ្សារបឹងកេងកង)',
          district: 'បឹងកេងកង ១ (BKK1)',
          city: 'រាជធានីភ្នំពេញ',
          country: 'ប្រទេសកម្ពុជា',
        },
      },
      zh: {
        name: 'BKK1 精英训练中心 (2号馆)',
        tagline: '都市核心道场、标准公认品势与竞技实战中心',
        address: {
          street: '310街 (靠近 BKK 市场)',
          district: '万景岗1分区 (BKK1)',
          city: '金边市',
          country: '柬埔寨',
        },
      },
      ko: {
        name: 'BKK1 엘리트 트레이닝 센터 (2호점)',
        tagline: '도심형 프리미엄 도장, 공인품새 정밀 분석 & 겨루기 전문 센터',
        address: {
          street: 'St 310 (BKK 마켓 인근)',
          district: 'Boeung Keng Kang 1 (BKK1)',
          city: '프놈펜',
          country: '캄보디아',
        },
      },
    },
  },
]
