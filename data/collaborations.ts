export interface CollaborationItem {
  id: string
  slug: string
  name: string
  koreanName?: string
  khmerName?: string
  category: 'taekwondo' | 'media' | 'design' | 'education'
  partnerType: string
  tier: 'Principal Governing Body' | 'National Federation' | 'Academic Partner' | 'Creative & Design Partner' | 'Media & Production Partner' | 'Academy Partner'
  logo: string
  bannerImage: string
  location: string
  country: string
  establishedYear: string
  partnershipSince: string
  websiteUrl?: string
  summary: string
  background: string
  partnershipScope: string
  keyHighlights: string[]
  activeInitiatives: string[]
  badgeColor: string
  translations: {
    km: {
      name: string
      partnerType: string
      summary: string
      background: string
      partnershipScope: string
    }
    zh: {
      name: string
      partnerType: string
      summary: string
      background: string
      partnershipScope: string
    }
    ko: {
      name: string
      partnerType: string
      summary: string
      background: string
      partnershipScope: string
    }
  }
}

export const collaborationCategories = [
  { id: 'all', label: 'All Partners', labelKm: 'ដៃគូសហការទាំងអស់', labelZh: '全部合作伙伴', labelKo: '전체 파트너' },
  { id: 'taekwondo', label: 'Taekwondo Governance & Academies', labelKm: 'ស្ថាប័ន & សហព័ន្ធតេក្វាន់ដូ', labelZh: '跆拳道官方组织与学院', labelKo: '태권도 연맹 및 공인 아카데미' },
  { id: 'media', label: 'Sport & Media Production', labelKm: 'កីឡា & ប្រព័ន្ធផ្សព្វផ្សាយ', labelZh: '体育与影视传媒', labelKo: '스포츠 및 미디어 프로덕션' },
  { id: 'design', label: 'Design & Creative Studios', labelKm: 'ការរចនា & ស្ទូឌីយោច្នៃប្រឌិត', labelZh: '设计与创意工作室', labelKo: '디자인 및 크리에이티브' },
  { id: 'education', label: 'Universities & Schools', labelKm: 'សាកលវិទ្យាល័យ & សាលារៀន', labelZh: '大学与教育机构', labelKo: '대학교 및 교육 기관' },
]

export const collaborationsData: CollaborationItem[] = [
  // ============================================================================
  // 1. TAEKWONDO: World Taekwondo (WT)
  // ============================================================================
  {
    id: 'collab-wt',
    slug: 'world-taekwondo',
    name: 'World Taekwondo (WT)',
    koreanName: '세계태권도연맹',
    khmerName: 'សហព័ន្ធតេក្វាន់ដូពិភពលោក',
    category: 'taekwondo',
    partnerType: 'Official Olympic Governing Body',
    tier: 'Principal Governing Body',
    logo: 'https://images.unsplash.com/photo-1555597673-b21d5c935865?q=80&w=400&auto=format&fit=crop',
    bannerImage: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1200&auto=format&fit=crop',
    location: 'Seoul / Lausanne',
    country: 'South Korea / Switzerland',
    establishedYear: '1973',
    partnershipSince: '2020',
    websiteUrl: 'http://www.worldtaekwondo.org',
    summary:
      'Official technical and tournament alignment adhering strictly to World Taekwondo Olympic scoring, International Referee protocols, and Global Athlete License (GAL) standards.',
    background:
      'World Taekwondo (WT) is the sole International Olympic Committee (IOC) recognized governing body for Taekwondo globally, overseeing Olympic Games integration, World Championships, and Grand Prix circuits across 213 member nations.',
    partnershipScope:
      'Infinity Taekwondo adheres 100% to official World Taekwondo competition rules, referee evaluation standards, and electronic PSS sensor protocols. Infinity athletes compete under WT-sanctioned pathways with official Global Athlete License (GAL) registration.',
    keyHighlights: [
      'Full compliance with the latest WT 2026 Best-of-Three round Olympic sparring rules',
      'Global Athlete License (GAL) registration for Infinity high-performance competition squad',
      'Continuous adoption of Daedo electronic protector and scoring system (PSS) standards',
      'Participation in official WT International Coach & Referee certification clinics',
    ],
    activeInitiatives: [
      'Olympic & World Championship cadet and junior athlete qualification pipelines',
      'Annual technical seminars on WT Recognized & Freestyle Poomsae scoring updates',
      'Regional WT coach education exchange and anti-doping integrity programs',
    ],
    badgeColor: '#EF2F38',
    translations: {
      km: {
        name: 'សហព័ន្ធតេក្វាន់ដូពិភពលោក (WT)',
        partnerType: 'ស្ថាប័នគ្រប់គ្រងកីឡាអូឡាំពិកពិភពលោក',
        summary: 'ការតម្រឹមបច្ចេកទេស និងការប្រកួតប្រជែងតាមស្តង់ដារអូឡាំពិក World Taekwondo និងប្រព័ន្ធដាក់ពិន្ទុអេឡិចត្រូនិក។',
        background: 'World Taekwondo (WT) គឺជាស្ថាប័នកីឡាតែមួយគត់ដែលត្រូវបានទទួលស្គាល់ជាផ្លូវការដោយគណៈកម្មាធិការអូឡាំពិកអន្តរជាតិ (IOC)។',
        partnershipScope: 'Infinity Taekwondo អនុវត្តតាមច្បាប់ប្រកួតផ្លូវការរបស់ WT យ៉ាងតឹងរ៉ឹង រួមទាំងការចុះបញ្ជីអាជ្ញាប័ណ្ណកីឡាករអន្តរជាតិ GAL។',
      },
      zh: {
        name: '世界跆拳道联合会 (WT)',
        partnerType: '官方奥运国际主管组织',
        summary: '全面对标世跆联WT官方竞技规则、电子护具计分系统及全球运动员GAL认证体系。',
        background: '世界跆拳道联合会（WT）是国际奥委会（IOC）唯一承认的全球跆拳道最高主管组织，管辖全球213个会员协会。',
        partnershipScope: 'Infinity 跆拳道全方位执行世跆联2026年最新竞技三局两胜制与电子护具标准，为精英队员提供直通国际世锦赛的官方注册通道。',
      },
      ko: {
        name: '세계태권도연맹 (WT)',
        partnerType: '공인 올림픽 종목 관리 기구',
        summary: '세계태권도연맹(WT) 올림픽 경기 규정, 전자호구(PSS) 채점 및 국제 공인 자격 연계.',
        background: '세계태권도연맹(WT)은 국제올림픽위원회(IOC) 공인 글로벌 태권도 총괄 기구로서 전 세계 213개 회원국을 관할합니다.',
        partnershipScope: '인피니티 태권도는 WT 공인 경기 규칙 및 심판 기준을 100% 준수하며, 소속 선수들의 글로벌 선수 라이선스(GAL) 등록 및 출전을 지원합니다.',
      },
    },
  },

  // ============================================================================
  // 2. TAEKWONDO: Kukkiwon (World Taekwondo Headquarters)
  // ============================================================================
  {
    id: 'collab-kukkiwon',
    slug: 'kukkiwon-world-headquarters',
    name: 'Kukkiwon (World Taekwondo Headquarters)',
    koreanName: '국기원 (세계태권도본부)',
    khmerName: 'ទីស្នាក់ការកណ្តាលតេក្វាន់ដូពិភពលោក (គុកគីវ៉ុន)',
    category: 'taekwondo',
    partnerType: 'Supreme Dan Issuing & Master Academy',
    tier: 'Principal Governing Body',
    logo: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=400&auto=format&fit=crop',
    bannerImage: 'https://images.unsplash.com/photo-1509824227185-9c5a01ceba0d?q=80&w=1200&auto=format&fit=crop',
    location: 'Gangnam-gu, Seoul',
    country: 'South Korea',
    establishedYear: '1972',
    partnershipSince: '2020',
    websiteUrl: 'http://www.kukkiwon.or.kr',
    summary:
      '100% official Kukkiwon Dan black belt certification, World Taekwondo Academy (WTA) master licensing, and orthodox curriculum standardization.',
    background:
      'Founded in 1972 in Seoul, Kukkiwon is the statutory World Taekwondo Headquarters, responsible for international Poom/Dan certificate issuance, WTA instructor licensing, and martial research.',
    partnershipScope:
      'Every Black Belt candidate at Infinity Taekwondo is examined under official Kukkiwon grading guidelines, receiving permanent physical Dan certificates and digital Dan registration numbers issued directly by Kukkiwon Seoul.',
    keyHighlights: [
      '100% genuine Kukkiwon Dan certification for all Black Belt graduates',
      'Faculty credentialed via Kukkiwon World Taekwondo Academy (WTA) Master licenses',
      'Standardized Poomsae forms (Taegeuk 1–8, Koryo through Hansoo) taught to Kukkiwon specifications',
      'Direct Dan promotion testing rights and global verification archive lookup',
    ],
    activeInitiatives: [
      'Bi-annual Black Belt Dan Testing Delegations supervised by Kukkiwon certified examiners',
      'Master instructor continuing education courses hosted in Seoul and Phnom Penh',
      'Preservation of traditional martial tenets and Ddi Maegi belt knot philosophy',
    ],
    badgeColor: '#09BB00',
    translations: {
      km: {
        name: 'ទីស្នាក់ការកណ្តាលតេក្វាន់ដូពិភពលោក គុកគីវ៉ុន (Kukkiwon)',
        partnerType: 'ស្ថាប័នចេញសញ្ញាបត្រខ្សែក្រវាត់ខ្មៅកម្រិតពិភពលោក',
        summary: 'ការប្រឡងយកខ្សែក្រវាត់ខ្មៅដាន់ (Dan) ផ្លូវការ ១០០% ចេញផ្ទាល់ពីទីស្នាក់ការកណ្តាលគុកគីវ៉ុន នៅទីក្រុងសេអ៊ូល។',
        background: 'គុកគីវ៉ុនត្រូវបានបង្កើតឡើងក្នុងឆ្នាំ១៩៧២ នៅទីក្រុងសេអ៊ូល ប្រទេសកូរ៉េខាងត្បូង ជាមជ្ឈមណ្ឌលស្រាវជ្រាវ និងចេញសញ្ញាបត្រក្បាច់គុនតេក្វាន់ដូទូទាំងពិភពលោក។',
        partnershipScope: 'សិស្សខ្សែក្រវាត់ខ្មៅទាំងអស់នៅ Infinity Taekwondo ទទួលបានសញ្ញាបត្រ Dan ស្របច្បាប់អន្តរជាតិដែលទទួលស្គាល់ទូទាំងពិភពលោក។',
      },
      zh: {
        name: '国技院 (Kukkiwon 世界跆拳道总部)',
        partnerType: '全球官方段位认证与师范学院',
        summary: '100%韩国国技院官方品/段位证书颁发，WTA国际师范执教认证与传统品势标准化传承。',
        background: '国技院于1972年在韩国首尔成立，是全球唯一官方认可的跆拳道段位认证机构及世界跆拳道科学院（WTA）。',
        partnershipScope: 'Infinity 跆拳道所有黑带晋级考试均严格执行国技院段位审查大纲，学员获发首尔总部官方防伪黑带段位证书与全球统一番号。',
      },
      ko: {
        name: '국기원 (세계태권도본부 Kukkiwon)',
        partnerType: '세계 공인 품·단증 발급 및 사범 교육 총본산',
        summary: '100% 국기원 정품 품·단증 직발급, WTA 국제사범 자격 및 정통 태권도 품새 표준화.',
        background: '국기원은 1972년 서울 강남구에 설립된 전 세계 태권도 총본산으로서 공인 품·단증 심사 및 태권도 학술 연구를 주관합니다.',
        partnershipScope: '인피니티 태권도의 모든 유품·유단자는 국기원 공인 심사 규정에 따라 승단 심사를 거치며, 평생 공인 단번이 부여된 본부 단증을 취득합니다.',
      },
    },
  },

  // ============================================================================
  // 3. TAEKWONDO: Cambodia Taekwondo Federation (CTF)
  // ============================================================================
  {
    id: 'collab-ctf',
    slug: 'cambodia-taekwondo-federation',
    name: 'Cambodia Taekwondo Federation (CTF)',
    koreanName: '캄보디아 태권도 연맹',
    khmerName: 'សហព័ន្ធកីឡាតេក្វាន់ដូកម្ពុជា (CTF)',
    category: 'taekwondo',
    partnerType: 'National Governing Body & Olympic Affiliate',
    tier: 'National Federation',
    logo: 'https://images.unsplash.com/photo-1517649763962-0c623266ddc0?q=80&w=400&auto=format&fit=crop',
    bannerImage: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1200&auto=format&fit=crop',
    location: 'Phnom Penh',
    country: 'Cambodia',
    establishedYear: '1995',
    partnershipSince: '2020',
    websiteUrl: 'https://olympic.org.kh/member-federations',
    summary:
      'National Olympic governing partner sanctioning domestic championship entries, national referee appointments, and SEA Games athlete pipelines.',
    background:
      'The Cambodia Taekwondo Federation (CTF) is the recognized national authority affiliated with the National Olympic Committee of Cambodia (NOCC) and Ministry of Education, Youth and Sport (MoEYS).',
    partnershipScope:
      'Infinity Taekwondo is an officially registered and fully accredited club under CTF. We collaborate on national championship hosting, elite sparring camps, and preparing national squad representatives.',
    keyHighlights: [
      'Official CTF Club Accreditation (#042-PP-2020) and voting federation delegate',
      'Annual participation in the Cambodia National Taekwondo Championships',
      'Co-hosting national referee calibration workshops and electronic scoring clinics',
      'Direct talent pathway from Infinity Cadet team into Cambodian National Squad',
    ],
    activeInitiatives: [
      'National Youth Championship tournament team delegation',
      'Joint training camps with the Cambodian National Taekwondo Sparring Team',
      'Grassroots school sports outreach in collaboration with MoEYS & NOCC',
    ],
    badgeColor: '#0042EA',
    translations: {
      km: {
        name: 'សហព័ន្ធកីឡាតេក្វាន់ដូកម្ពុជា (CTF)',
        partnerType: 'ស្ថាប័នគ្រប់គ្រងកីឡាតេក្វាន់ដូជាតិ',
        summary: 'ដៃគូសហព័ន្ធជាតិផ្លូវការក្នុងការបញ្ជូនកីឡាករចូលរួមប្រកួតជើងឯកជាតិ និងបណ្តុះបណ្តាលថ្នាលកីឡាករជម្រើសជាតិ។',
        background: 'សហព័ន្ធកីឡាតេក្វាន់ដូកម្ពុជា (CTF) ជាស្ថាប័នជាតិគ្រប់គ្រងកីឡាតេក្វាន់ដូក្រោមការទទួលស្គាល់ពីគណៈកម្មាធិការជាតិអូឡាំពិកកម្ពុជា (NOCC) និងក្រសួងអប់រំ យុវជន និងកីឡា។',
        partnershipScope: 'Infinity Taekwondo ជាក្លឹបសមាជិកផ្លូវការដែលសហការរៀបចំការប្រកួតកម្រិតជាតិ និងបណ្តុះបណ្តាលកីឡាករឆ្នើម។',
      },
      zh: {
        name: '柬埔寨跆拳道联合会 (CTF)',
        partnerType: '国家级官方主管组织',
        summary: '柬埔寨国家奥委会（NOCC）认证机构，主导全国锦标赛选拔与国家队梯队共建。',
        background: '柬埔寨跆拳道联合会（CTF）是柬埔寨主管官方跆拳道运动的唯一国家级协会，统筹全国俱乐部认证与东南亚运动会（SEA Games）备战。',
        partnershipScope: 'Infinity 跆拳道为联合会核心认证会员馆，共同组织全国裁判培训班、电子护具实战集训，并输送青年梯队人才至国家代表队。',
      },
      ko: {
        name: '캄보디아 태권도 연맹 (CTF)',
        partnerType: '캄보디아 국가 공식 태권도 연맹',
        summary: '캄보디아 국가대표 선발전, 전국선수권대회 및 올림픽위원회(NOCC) 공인 협력.',
        background: '캄보디아 태권도 연맹(CTF)은 캄보디아 국가올림픽위원회(NOCC) 및 교육청소년체육부 산하 국가 공인 태권도 총괄 단체입니다.',
        partnershipScope: '인피니티 태권도는 CTF 공식 등록 도장으로서 전국대회 출전, 심판 강습회 공동 주관 및 국가대표 주니어 상비군 육성에 협력합니다.',
      },
    },
  },

  // ============================================================================
  // 4. TAEKWONDO: Cambodia Taekwondo Academy (CTA)
  // ============================================================================
  {
    id: 'collab-cta',
    slug: 'cambodia-taekwondo-academy',
    name: 'Cambodia Taekwondo Academy (CTA)',
    koreanName: '캄보디아 태권도 아카데미',
    khmerName: 'បណ្ឌិត្យសភាតេក្វាន់ដូកម្ពុជា (CTA)',
    category: 'taekwondo',
    partnerType: 'Master Development & Athlete Training Academy',
    tier: 'Academy Partner',
    logo: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=400&auto=format&fit=crop',
    bannerImage: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200&auto=format&fit=crop',
    location: 'Phnom Penh',
    country: 'Cambodia',
    establishedYear: '2016',
    partnershipSince: '2021',
    websiteUrl: 'https://infinitytkd.com/academy',
    summary:
      'Collaborative master instructor mentorship, advanced sparring sparring exchange, and national poomsae perfection workshops.',
    background:
      'The Cambodia Taekwondo Academy (CTA) serves as a premier technical training and instructor development center in Phnom Penh, dedicated to raising the standard of martial pedagogy and high-performance youth training.',
    partnershipScope:
      'Infinity Taekwondo and CTA conduct joint sparring simulations, master instructor exchange modules, and high-intensity competition squad conditioning camps.',
    keyHighlights: [
      'Joint sparring sparring leagues for elite cadets and juniors',
      'Technical Poomsae sync camps and performance video telemetry',
      'Assistant instructor teaching practicums and leadership certifications',
      'Shared athletic conditioning facilities and high-speed crash mats',
    ],
    activeInitiatives: [
      'Quarterly Inter-Academy Sparring Scrimmages with Daedo electronic PSS gear',
      'Joint National Team Demonstration squad training and choreography',
      'Youth Martial Arts Leadership summer boot camps',
    ],
    badgeColor: '#A855F7',
    translations: {
      km: {
        name: 'បណ្ឌិត្យសភាតេក្វាន់ដូកម្ពុជា (CTA)',
        partnerType: 'បណ្ឌិត្យសភាបណ្តុះបណ្តាលគ្រូ និងកីឡាករកម្រិតខ្ពស់',
        summary: 'កិច្ចសហការបណ្តុះបណ្តាលគ្រូបង្វឹក ការហ្វឹកហាត់ប្រយុទ្ធរួមគ្នា និងការកែលម្អគុណភាពបច្ចេកទេសមេគុន។',
        background: 'បណ្ឌិត្យសភាតេក្វាន់ដូកម្ពុជា (CTA) ជាមជ្ឈមណ្ឌលបណ្តុះបណ្តាលបច្ចេកទេសកម្រិតខ្ពស់សម្រាប់គ្រូ និងកីឡាករឆ្នើមនៅរាជធានីភ្នំពេញ។',
        partnershipScope: 'Infinity Taekwondo និង CTA រួមគ្នារៀបចំការហ្វឹកហាត់កីឡាករជម្រើសពិសេស និងការដោះដូរគ្រូបង្វឹក។',
      },
      zh: {
        name: '柬埔寨跆拳道学院 (CTA)',
        partnerType: '师范进修与高水平运动员集训学院',
        summary: '联合开展高级实战对抗联赛、品势细节精进研讨会及青年教练教学法认证。',
        background: '柬埔寨跆拳道学院（CTA）是金边顶尖的专业跆拳道技术培训基地，专注师范教学法传承与竞技精英选拔。',
        partnershipScope: 'Infinity 与 CTA 定期举办跨校区电子护具实战对抗赛、表演团空翻特技编排及青少年领导力夏令营。',
      },
      ko: {
        name: '캄보디아 태권도 아카데미 (CTA)',
        partnerType: '지도자 연수 및 전문 선수 양성 아카데미',
        summary: '전문 겨루기 합동 훈련, 품새 세미나 및 주니어 지도자 인턴십 협력.',
        background: '캄보디아 태권도 아카데미(CTA)는 프놈펜의 대표적인 전문 사범 양성 및 엘리트 선수 육성 전문 기관입니다.',
        partnershipScope: '인피니티 태권도와 CTA는 분기별 전자호구 겨루기 리그, 시범단 아크로바틱 안무 및 사범 지도법 교류를 진행합니다.',
      },
    },
  },

  // ============================================================================
  // 5. SPORT & MEDIA: Gravzero
  // ============================================================================
  {
    id: 'collab-gravzero',
    slug: 'gravzero-media',
    name: 'Gravzero',
    koreanName: '그라브제로 미디어',
    khmerName: 'ហ្គ្រាវហ្ស៊េរ៉ូ (Gravzero)',
    category: 'media',
    partnerType: 'Sports Media, High-Speed Telemetry & Creative Production',
    tier: 'Media & Production Partner',
    logo: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=400&auto=format&fit=crop',
    bannerImage: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1200&auto=format&fit=crop',
    location: 'Phnom Penh',
    country: 'Cambodia / Global',
    establishedYear: '2021',
    partnershipSince: '2022',
    websiteUrl: 'https://infinitytkd.com',
    summary:
      'Official sports videography, high-speed biomechanical camera capture (1000fps), documentary storytelling, and athletic media production.',
    background:
      'Gravzero is an avant-garde sports cinematography and media production company specializing in dynamic action sports, martial arts choreography, and high-frame-rate athletic telemetry.',
    partnershipScope:
      'Gravzero manages Infinity Taekwondo’s cinematic visual assets, high-speed kick velocity analysis, tournament documentary coverage, and dynamic athlete spotlight reels.',
    keyHighlights: [
      'Ultra high-speed 1000fps Phantom camera captures for kicking biomechanics',
      'Official media partner for Infinity Championships & Belt Promotion ceremonies',
      'Production of the "Limitless Potential" mini-documentary series',
      'High-dynamic-range action photography for the Curriculum Encyclopedia',
    ],
    activeInitiatives: [
      'Biomechanical Kicking Trajectory Video Series for the Curriculum Library',
      'Annual Athlete Spotlight Reels for university scholarship portfolios',
      'Live-streaming infrastructure for national sparring tournaments',
    ],
    badgeColor: '#FF5733',
    translations: {
      km: {
        name: 'ហ្គ្រាវហ្ស៊េរ៉ូ (Gravzero)',
        partnerType: 'ក្រុមហ៊ុនផលិតប្រព័ន្ធផ្សព្វផ្សាយ & វីដេអូកីឡា',
        summary: 'ដៃគូផលិតវីដេអូកម្រិតខ្ពស់ ការថតចលនាក្បាច់គុនល្បឿនលឿន និងការផ្សាយបន្តផ្ទាល់ការប្រកួត។',
        background: 'Gravzero គឺជាក្រុមហ៊ុនផលិតវីដេអូ និងភាពយន្តកីឡាប្រកបដោយភាពច្នៃប្រឌិតខ្ពស់ ដែលមានជំនាញក្នុងការថតចលនាកីឡាប្រយុទ្ធ។',
        partnershipScope: 'Gravzero ផលិតរូបភាព វីដេអូផ្សព្វផ្សាយ និងការវិភាគចលនាក្បាច់ទាត់ក្នុងបណ្ណាល័យបច្ចេកទេស Infinity Taekwondo។',
      },
      zh: {
        name: 'Gravzero (格拉夫零点传媒)',
        partnerType: '极限体育影像与高速动作捕捉制作公司',
        summary: '官方体育影视合作伙伴，提供1000fps超高速踢击动力学分析、赛事纪录片及运动员宣传大片。',
        background: 'Gravzero 是一家前沿极限运动影视传媒公司，精通武道动态摄影、动作编排与高帧率动作捕捉。',
        partnershipScope: 'Gravzero 为 Infinity 跆拳道制作动作宝典超清示范视频、升段盛典官方纪录片及学员奖学金申请个人高光集锦。',
      },
      ko: {
        name: '그라브제로 미디어 (Gravzero)',
        partnerType: '스포츠 미디어 & 초고속 영상 프로덕션',
        summary: '1000fps 초고속 카메라 발차기 생체역학 촬영, 다큐멘터리 제작 및 공식 대회 영상 중계.',
        background: 'Gravzero는 역동적인 액션 스포츠와 무도 영상, 초고속 슬로모션 촬영을 전문으로 하는 크리에이티브 미디어 기업입니다.',
        partnershipScope: '그라브제로는 인피니티 기술 백과의 초고속 발차기 궤적 분석 영상 제작 및 공식 승단 심사 다큐멘터리를 총괄합니다.',
      },
    },
  },

  // ============================================================================
  // 6. DESIGN & CREATIVE: Sela Studio
  // ============================================================================
  {
    id: 'collab-sela',
    slug: 'sela-studio-design',
    name: 'Sela Studio',
    koreanName: '셀라 디자인 스튜디오',
    khmerName: 'សិលា ស្ទូឌីយោ (Sela Studio)',
    category: 'design',
    partnerType: 'Brand Identity, Architectural & UI/UX Design Studio',
    tier: 'Creative & Design Partner',
    logo: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=400&auto=format&fit=crop',
    bannerImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop',
    location: 'Phnom Penh',
    country: 'Cambodia',
    establishedYear: '2019',
    partnershipSince: '2020',
    websiteUrl: 'https://infinitytkd.com',
    summary:
      'Official brand architecture, dojang interior spatial design, custom dobok apparel typography, and digital experience engineering.',
    background:
      'Sela Studio is an acclaimed multidisciplinary design studio renowned for minimalist branding, physical architectural dojang spaces, and precision digital interfaces.',
    partnershipScope:
      'Sela Studio developed Infinity Taekwondo’s complete visual identity, the iconic Infinity TKD 2.0 Web application, bespoke Dobok typography, and the Factory Phnom Penh HQ spatial layout.',
    keyHighlights: [
      'Designed the complete Infinity Taekwondo Brand Identity & Color System',
      'Engineered the minimalist 10–15px geometric radius UI design language',
      'Architectural planning of the 600m² Factory Phnom Penh open-glass Dojang',
      'Bespoke typographic embroidery design for Infinity Master & Demo Team Doboks',
    ],
    activeInitiatives: [
      'Infinity TKD 2.0 Digital Platform UI/UX design and design tokens maintainer',
      'Branch 02 (BKK1 Elite Center) spatial interior architecture',
      'Annual limited-edition tournament merchandise and medal design',
    ],
    badgeColor: '#FFD505',
    translations: {
      km: {
        name: 'សិលា ស្ទូឌីយោ (Sela Studio)',
        partnerType: 'ស្ទូឌីយោរចនាម៉ាកសញ្ញា ស្ថាបត្យកម្ម & ឌីជីថល',
        summary: 'ដៃគូរចនាអត្តសញ្ញាណម៉ាក ស្ថាបត្យកម្មខាងក្នុងសាលាដូជាំង និងបទពិសោធន៍ឌីជីថល Infinity TKD 2.0។',
        background: 'Sela Studio គឺជាស្ទូឌីយោរចនាប្រកបដោយកិត្យានុភាពខ្ពស់ ជំនាញខាងការរចនាម៉ាកសញ្ញា ស្ថាបត្យកម្ម និងគេហទំព័រទំនើប។',
        partnershipScope: 'Sela Studio ជាអ្នករចនាអត្តសញ្ញាណម៉ាក Infinity Taekwondo ប្លង់ដូជាំងនៅ The Factory និងប្រព័ន្ធគេហទំព័រ Infinity TKD 2.0។',
      },
      zh: {
        name: 'Sela Studio (塞拉设计工作室)',
        partnerType: '品牌视觉识别、空间建筑与数字UI/UX设计工作室',
        summary: '全案打造 Infinity 品牌视觉体系、道馆极简空间建筑布局及 Infinity TKD 2.0 数字化平台。',
        background: 'Sela Studio 是金边享有盛誉的跨领域创意设计公司，专注于极简品牌美学、现代空间规划与数字化交互设计。',
        partnershipScope: 'Sela Studio 主持设计了 Infinity 跆拳道全套品牌形象、Factory 金边旗舰馆600平米通透空间及定制刺绣道服系列。',
      },
      ko: {
        name: '셀라 스튜디오 (Sela Studio)',
        partnerType: '브랜드 아이덴티티, 공간 건축 & UI/UX 디자인 스튜디오',
        summary: '인피니티 브랜드 시각 정체성, 도장 공간 건축 설계 및 Infinity TKD 2.0 디지털 플랫폼 디자인.',
        background: '셀라 스튜디오는 미니멀리즘 브랜드 디자인, 상업 공간 건축 및 정밀 UI/UX 엔지니어링을 전문으로 하는 디자인 기업입니다.',
        partnershipScope: '셀라 스튜디오는 인피니티 태권도의 전속 디자인 파트너로서 도장 인테리어, 커스텀 도복 타이포그래피 및 웹 플랫폼을 총괄 설계했습니다.',
      },
    },
  },

  // ============================================================================
  // 7. UNIVERSITY & SCHOOL: Play-Based Learning Academy (PLA)
  // ============================================================================
  {
    id: 'collab-pla',
    slug: 'play-based-learning-academy',
    name: 'Play-Based Learning Academy (PLA)',
    koreanName: '놀이 기반 학습 아카데미 (PLA)',
    khmerName: 'បណ្ឌិត្យសភាសិក្សាផ្អែកលើការលេង (PLA)',
    category: 'education',
    partnerType: 'Early Childhood & Primary Martial Education Alliance',
    tier: 'Academic Partner',
    logo: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=400&auto=format&fit=crop',
    bannerImage: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=1200&auto=format&fit=crop',
    location: 'Phnom Penh',
    country: 'Cambodia',
    establishedYear: '2018',
    partnershipSince: '2021',
    websiteUrl: 'https://infinitytkd.com/academy',
    summary:
      'Early childhood physical literacy, Little Tigers motor skills development, and after-school character education curriculum integration.',
    background:
      'Play-Based Learning Academy (PLA) is a leading progressive educational institution in Phnom Penh specializing in experiential learning, early childhood cognitive development, and physical wellness.',
    partnershipScope:
      'Infinity Taekwondo and PLA jointly developed the "Little Tigers Martial Literacy" curriculum, combining fundamental Taekwondo agility with play-based cognitive and emotional self-regulation exercises for children aged 4–9.',
    keyHighlights: [
      'Jointly certified "Little Tigers Motor Development" syllabus for ages 4–9',
      'Integration of Taekwondo Yeui (Courtesy) and Innae (Perseverance) into daily school habits',
      'Annual Physical Literacy Assessments tracking agility, balance, and spatial orientation',
      'On-campus after-school martial arts enrichment academy hosted at PLA campus',
    ],
    activeInitiatives: [
      'School-wide Anti-Bullying and Confidence Workshops conducted each semester',
      'PLA Little Tigers Annual Demonstration Showcase and parent graduation',
      'Teacher training workshops on movement-based classroom energizers and focus drills',
    ],
    badgeColor: '#09BB00',
    translations: {
      km: {
        name: 'បណ្ឌិត្យសភាសិក្សាផ្អែកលើការលេង (PLA)',
        partnerType: 'សម្ព័ន្ធភាពអប់រំកុមារតូច និងបឋមសិក្សា',
        summary: 'កម្មវិធីអភិវឌ្ឍជំនាញចលនាកុមារតូច Little Tigers និងការអប់រំចរិយាសម្បត្តិក្រោយម៉ោងសិក្សា។',
        background: 'Play-Based Learning Academy (PLA) ជាស្ថាប័នអប់រំឈានមុខគេនៅភ្នំពេញ ដែលផ្តោតលើការរៀនតាមរយៈការលេង និងការអភិវឌ្ឍផ្លូវចិត្តកុមារ។',
        partnershipScope: 'Infinity Taekwondo និង PLA សហការបង្កើតកម្មវិធីហ្វឹកហាត់ក្បាច់គុន និងវិន័យសម្រាប់កុមារអាយុ ៤ ដល់ ៩ ឆ្នាំ។',
      },
      zh: {
        name: 'Play-Based Learning Academy (PLA 游乐体验学院)',
        partnerType: '幼少儿体适能与素质教育学术合作机构',
        summary: '联合研发小老虎（Little Tigers）体智双育课程，将跆拳道礼仪与抗挫力融入早期教育。',
        background: 'Play-Based Learning Academy（PLA）是金边知名的创新型国际启蒙教育学府，专注幼少儿体验式学习与体适能发展。',
        partnershipScope: 'Infinity 跆拳道与 PLA 联合开设校内课后跆拳道品格素养班，定期开展防霸凌自护讲座与幼儿协调性测评。',
      },
      ko: {
        name: '놀이 기반 학습 아카데미 (PLA Academy)',
        partnerType: '유아·초등 신체 발달 및 인성 교육 학술 파트너',
        summary: '리틀 타이거즈(Little Tigers) 유아 체육 커리큘럼 공동 개발 및 방과 후 인성 태권도 교육.',
        background: 'Play-Based Learning Academy(PLA)는 프놈펜의 대표적인 진보형 유아 교육 기관으로서 놀이 중심 인지 및 신체 발달을 선도합니다.',
        partnershipScope: '인피니티 태권도와 PLA는 4~9세 유아 대상 신체 밸런스 측정, 도장 예절(禮義) 인성 교육 및 학교 방과 후 수업을 공동 운영합니다.',
      },
    },
  },
]
