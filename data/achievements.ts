export interface StudentCompetitor {
  id?: string
  name: string
  studentId?: string
  medal: 'Gold' | 'Silver' | 'Bronze' | 'Special Honor' | 'Finalist'
  division: string
  beltRank: string
  beltHex: string
  age?: number
  score?: string
  highlight?: string
  image?: string
  translations?: {
    km?: Partial<Omit<StudentCompetitor, 'id' | 'translations'>>
    zh?: Partial<Omit<StudentCompetitor, 'id' | 'translations'>>
    ko?: Partial<Omit<StudentCompetitor, 'id' | 'translations'>>
  }
}

export interface TrophyRecord {
  id: string
  year: string
  tournament: string
  category: 'National' | 'International' | 'Freestyle Tricking' | 'Kukkiwon Dan' | 'Cinema & Stunts' | 'Academic & Honor'
  achievementType: 'tournament' | 'kukkiwon' | 'stunt_cinema' | 'academic' | 'community_honor'
  medal: 'Gold' | 'Silver' | 'Bronze' | 'Special Honor' | 'Grand Champion'
  division: string
  athleteOrTeam: string
  location: string
  score?: string
  highlights?: string[]
  keyTechniques?: string[]
  description: string
  badgeColor: string
  verifiedBy?: string
  image?: string
  studentCompetitors?: StudentCompetitor[]
  translations?: {
    km?: Partial<Omit<TrophyRecord, 'id' | 'translations'>>
    zh?: Partial<Omit<TrophyRecord, 'id' | 'translations'>>
    ko?: Partial<Omit<TrophyRecord, 'id' | 'translations'>>
  }
}

export interface MetricHighlight {
  label: string
  value: string
  description: string
}

export const achievementMetrics: MetricHighlight[] = [
  {
    label: 'Total Competitions',
    value: '200+',
    description: 'Championship tournaments across National, Regional, and International stages.',
  },
  {
    label: 'Podium Medals',
    value: '145+',
    description: 'Gold, Silver, and Bronze finishes in Recognized Poomsae, Sparring, and Freestyle.',
  },
  {
    label: 'Kukkiwon Black Belts',
    value: '80+',
    description: 'Official 1st through 5th Dan Black Belts certified under World Taekwondo standards.',
  },
  {
    label: 'Student Competitors',
    value: '350+',
    description: 'Athletes trained and fielded across official cadet, junior, and senior divisions.',
  },
]

export const tournamentAchievements: TrophyRecord[] = [
  {
    id: 'ach-01',
    year: '2024',
    tournament: 'National Taekwondo Championships',
    category: 'National',
    achievementType: 'tournament',
    medal: 'Gold',
    division: 'Senior Recognized Poomsae Team',
    athleteOrTeam: 'Team Infinity (Chon Sovan & Elite Trio)',
    location: 'Phnom Penh, Cambodia',
    score: '8.64 / 10.0 (National Record)',
    highlights: [
      'Set national championship record for synchronized accuracy and stance precision.',
      'Unanimous 1st place decision across all 5 international judges.',
      'Executed complex Taebaek and Sipjin patterns with zero deduction penalties.',
    ],
    keyTechniques: ['Synchronized Side Kicks (Yeop Chagi)', 'Low-Stance Stability (Ap Kubi)', 'Breath-Power Alignment'],
    description:
      'Captured 1st Place Gold with an unprecedented score of 8.64, setting the Cambodia national tournament record for poomsae technical accuracy and synchronized cadence.',
    badgeColor: '#FFD505',
    verifiedBy: 'Cambodia Taekwondo Federation (CTF)',
    image: 'https://images.unsplash.com/photo-1555597673-b21d5c935865?q=80&w=1200&auto=format&fit=crop',
    translations: {
      km: {
        tournament: 'ការប្រកួតកីឡាតេក្វាន់ដូជើងឯកថ្នាក់ជាតិ',
        division: 'ក្រុម Poomsae ស្តង់ដារថ្នាក់ជាន់ខ្ពស់',
        description: 'ដណ្តើមបានមេដាយមាសចំណាត់ថ្នាក់លេខ ១ ជាមួយនឹងពិន្ទុបំបែកកំណត់ត្រាជាតិ ៨.៦៤ សម្រាប់ភាពជាក់លាក់ និងការស៊ីចង្វាក់គ្នា។',
        highlights: [
          'បង្កើតកំណត់ត្រាជើងឯកថ្នាក់ជាតិសម្រាប់ភាពសុក្រឹត និងជំហររឹងមាំ',
          'ការសម្រេចចិត្តឯកច្ឆន្ទចំណាត់ថ្នាក់លេខ ១ ពីចៅក្រមអន្តរជាតិទាំង ៥ រូប',
          'សម្តែងទម្រង់ Taebaek និង Sipjin ដោយគ្មានការពិន័យកាត់ពិន្ទុ',
        ],
      },
      zh: {
        tournament: '柬埔寨全国跆拳道锦标赛',
        division: '成年组公认品势男子团体',
        description: '以 8.64 刷新柬埔寨国家历史纪录的高分斩获金牌，在动作同步率与发力结构上获得裁判组全票认可。',
        highlights: [
          '刷新全国锦标赛团体品势同步精准度与步法稳定性历史最高分',
          '五位国际级裁判一致判定第一名',
          '完美演绎太白与十进高段位品势，零失误零扣分',
        ],
      },
      ko: {
        tournament: '캄보디아 전국 태권도 선수권대회',
        division: '성인부 공인품새 단체전',
        description: '8.64점이라는 캄보디아 전국 대회 역대 최고 신기록을 달성하며 단체전 금메달을 획득했습니다.',
        highlights: [
          '단체 동조율 및 보법 정확도 부문 전국 대회 신기록 수립',
          '5인 국제 심판 전원 일치 1위 판정',
          '태백 및 십진 고단자 품새 무감점 완벽 시연',
        ],
      },
    },
    studentCompetitors: [
      {
        id: 'comp-1',
        name: 'Sokha Rith',
        studentId: 'spotlight-1',
        medal: 'Gold',
        division: 'Senior Male Recognized Poomsae',
        beltRank: '2nd Dan Black Belt',
        beltHex: '#000000',
        age: 19,
        score: '8.64',
        highlight: 'Anchor athlete for team synchronization and highest individual presentation mark (4.42).',
        image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop',
      },
      {
        id: 'comp-2',
        name: 'Borey Vathana',
        medal: 'Gold',
        division: 'Senior Male Team Poomsae',
        beltRank: '1st Dan Black Belt',
        beltHex: '#000000',
        age: 21,
        score: '8.64',
        highlight: 'Zero penalty deductions on stance angle and rotational hip chambering.',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop',
      },
      {
        id: 'comp-3',
        name: 'Kosal Chey',
        medal: 'Gold',
        division: 'Senior Male Team Poomsae',
        beltRank: '1st Dan Black Belt',
        beltHex: '#000000',
        age: 20,
        score: '8.64',
        highlight: 'Flawless tempo alignment on high-speed double knife hand blocks.',
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop',
      },
    ],
  },
  {
    id: 'ach-02',
    year: '2024',
    tournament: 'Southeast Asia Martial Arts Open',
    category: 'International',
    achievementType: 'tournament',
    medal: 'Gold',
    division: 'Men’s Freestyle Poomsae Individual',
    athleteOrTeam: 'Master Keo Moni & Elite Roster',
    location: 'Bangkok, Thailand',
    score: '8.82 / 10.0',
    highlights: [
      'Executed a clean 720 degree spin hook kick board break on arrival.',
      'Highest technical presentation score in SEA tournament history.',
      'Integrated traditional Kukkiwon forms with orchestral music choreography.',
    ],
    keyTechniques: ['720° Spinning Hook Kick', 'Butterfly Twist Landing', 'Multi-Angle High Extension'],
    description:
      'Executed a flawless 720 degree kick break and artistic musical choreography under World Taekwondo electronic judging, earning international acclaim.',
    badgeColor: '#FFD505',
    verifiedBy: 'Asian Taekwondo Union (ATU)',
    image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=1200&auto=format&fit=crop',
    translations: {
      km: {
        tournament: 'ការប្រកួតក្បាច់គុនបើកចំហអាស៊ីអាគ្នេយ៍ (SEA Open)',
        division: 'Freestyle Poomsae ឯកត្តជនបុរស',
        description: 'សម្តែងការទាត់បំបែកក្តារ 720 ដឺក្រេ និងក្បាច់តន្ត្រីសិល្បៈយ៉ាងល្អឥតខ្ចោះក្រោមការកាត់សេចក្តីអេឡិចត្រូនិចរបស់ World Taekwondo។',
        highlights: [
          'ការទាត់បង្វិល 720° បំបែកក្តារលើអាកាសយ៉ាងច្បាស់លាស់',
          'ពិន្ទុបច្ចេកទេសសិល្បៈខ្ពស់បំផុតក្នុងប្រវត្តិសាស្ត្រការប្រកួត SEA',
          'រួមបញ្ចូលគ្នារវាងទម្រង់ Kukkiwon និងតន្ត្រីបន្ទរអន្តរជាតិ',
        ],
      },
      zh: {
        tournament: '东南亚武道公开锦标赛 (SEA Open)',
        division: '男子个人自由品势 (Freestyle Poomsae)',
        description: '在世界跆拳道联盟电子打分系统下，凭借完美的 720° 转体后旋踢破板与史诗级艺术音乐编排折桂金牌。',
        highlights: [
          '落地前完成教科书级 720° 高空后旋踢空中爆板',
          '创下东南亚锦标赛自由品势历史最高艺术表现分',
          '深度结合国技院传统技法与交响乐编排',
        ],
      },
      ko: {
        tournament: '동남아시아 오픈 마샬아츠 챔피언십',
        division: '남자 자유품새 개인전',
        description: '세계태권도연맹 전자 심사 기준에 따라 720도 회전 격파와 독창적인 음악 안무를 완벽히 소화하여 금메달을 차지했습니다.',
        highlights: [
          '완벽한 720도 회전 훅 발차기 공중 격파 성공',
          '동남아 대회 자유품새 부문 역대 최고 예술점수 획득',
          '국기원 정통 기법과 웅장한 오케스트라 사운드의 예술적 융합',
        ],
      },
    },
    studentCompetitors: [
      {
        id: 'comp-4',
        name: 'Leakhena Sin',
        studentId: 'spotlight-4',
        medal: 'Gold',
        division: 'Female Youth Freestyle Poomsae',
        beltRank: '1st Poom Black Belt',
        beltHex: '#000000',
        age: 16,
        score: '8.75',
        highlight: 'First female youth athlete from Cambodia to land a full aerial cartwheel into split landing in competition.',
        image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=800&auto=format&fit=crop',
      },
      {
        id: 'comp-5',
        name: 'Dara Chan',
        studentId: 'spotlight-3',
        medal: 'Silver',
        division: 'Men’s Freestyle Acrobatic Division',
        beltRank: '1st Dan Black Belt',
        beltHex: '#000000',
        age: 24,
        score: '8.50',
        highlight: 'Awarded Most Dynamic Routine for triple-board aerial strike.',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop',
      },
    ],
  },
  {
    id: 'ach-03',
    year: '2023',
    tournament: 'Cambodia National Youth Games',
    category: 'National',
    achievementType: 'tournament',
    medal: 'Gold',
    division: 'Junior Recognized Poomsae & Sparring',
    athleteOrTeam: 'Infinity Junior Champions Squad',
    location: 'Phnom Penh, Cambodia',
    score: '3 Gold Medals Clean Sweep',
    highlights: [
      'Swept all 3 junior gold categories: Individual Boys, Individual Girls, and Pairs.',
      'Average routine score of 8.42 across 6 preliminary and final rounds.',
      'Demonstrated master-level discipline and etiquette praised by the tournament committee.',
    ],
    keyTechniques: ['Koryo Poomsae Form', 'Crane Stance Balance (Hakdari Seogi)', 'Double Side Kick Precision'],
    description:
      'Swept 3 Gold medals across Individual Male, Individual Female, and Pair Poomsae divisions, cementing Infinity Academy as Cambodia’s premier youth training academy.',
    badgeColor: '#FFD505',
    verifiedBy: 'Ministry of Education, Youth and Sport (MoEYS)',
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1200&auto=format&fit=crop',
    translations: {
      km: {
        tournament: 'កីឡាយុវជនថ្នាក់ជាតិកម្ពុជា (National Youth Games)',
        division: 'Poomsae & ការប្រកួតយុវជន',
        description: 'ឈ្នះមេដាយមាស ៣ គ្រឿងលើវិញ្ញាសាឯកត្តជនប្រុស ស្រី និងគូ Poomsae ពង្រឹងកេរ្តិ៍ឈ្មោះ Infinity ជាបណ្ឌិត្យសភាបណ្តុះបណ្តាលយុវជនឆ្នើម។',
      },
      zh: {
        tournament: '柬埔寨全国青少年运动会',
        division: '青少年公认品势与竞技实战',
        description: '包揽男子个人、女子个人及混双品势全部3枚金牌，奠定 Infinity 作为柬埔寨领航级青少年冠军摇篮的地位。',
      },
      ko: {
        tournament: '캄보디아 전국 소년 체육대회',
        division: '청소년 공인품새 및 겨루기',
        description: '남녀 개인전 및 혼성 페어 공인품새 전 종목에서 금메달 3개를 싹쓸이하며 캄보디아 최강 주니어 명문 도장으로 공인받았습니다.',
      },
    },
    studentCompetitors: [
      {
        id: 'comp-6',
        name: 'Chanthy Chea',
        studentId: 'spotlight-2',
        medal: 'Gold',
        division: 'Junior Sparring (Kyorugi -32kg)',
        beltRank: 'Red Belt',
        beltHex: '#EF2F38',
        age: 11,
        score: 'Round 1 KO (12-0 Gap)',
        highlight: 'Flawless counter roundhouse kicks with zero points conceded in the entire tournament.',
        image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=800&auto=format&fit=crop',
      },
      {
        id: 'comp-7',
        name: 'Vannak Seng',
        studentId: 'spotlight-6',
        medal: 'Gold',
        division: 'Cadet Poomsae (Taegeuk 3-4)',
        beltRank: 'Green Belt',
        beltHex: '#09BB00',
        age: 8,
        score: '8.20',
        highlight: 'Youngest gold medalist of the tournament, scoring top marks in balance and eye focus.',
        image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=800&auto=format&fit=crop',
      },
      {
        id: 'comp-8',
        name: 'Sophea Pich',
        medal: 'Silver',
        division: 'Cadet Female Sparring -36kg',
        beltRank: 'Red Belt',
        beltHex: '#EF2F38',
        age: 12,
        score: 'Silver Medalist',
        highlight: 'Fought through 4 intense rounds to secure podium placement.',
        image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop',
      },
    ],
  },
  {
    id: 'ach-04',
    year: '2023',
    tournament: 'International Tricking & Martial Arts Gathering',
    category: 'Freestyle Tricking',
    achievementType: 'stunt_cinema',
    medal: 'Special Honor',
    division: 'Best Team Choreography & Aerial Kicks',
    athleteOrTeam: 'Team Infinity Stunt & Demo Unit',
    location: 'Kuala Lumpur, Malaysia',
    score: 'Audience & Judges Choice Award',
    highlights: [
      'Featured synchronized 540 and corkscrew aerial combinations on spring floor.',
      'Combined live cinematic storytelling with traditional hardwood board breaking.',
      'Selected for the international showcase gala closer routine.',
    ],
    keyTechniques: ['540 Kick Variations', 'Corkscrew to Round Kick', 'High-Altitude Aerial Flips'],
    description:
      'Awarded Best Live Demonstration Routine for combining traditional WT forms with multi-axis flips, cinematic flow, and high-speed synchronized breaking.',
    badgeColor: '#EF2F38',
    verifiedBy: 'Southeast Asia Martial Arts Federation',
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1200&auto=format&fit=crop',
    translations: {
      km: {
        tournament: 'មហោស្រព Tricking និងក្បាច់គុនអន្តរជាតិ',
        division: 'ក្បាច់សកម្មភាព និងការទាត់លើអាកាសឆ្នើមបំផុត',
        description: 'ទទួលបានពានរង្វាន់ Best Live Demonstration សម្រាប់ការរួមបញ្ចូលគ្នានូវទម្រង់ WT បុរាណជាមួយនឹងកាយសម្ព័ន្ធ និងការបំបែកក្តារល្បឿនលឿន។',
      },
      zh: {
        tournament: '国际武道特技与极限 Tricking 盛会',
        division: '最佳团体动作编排与高空踢击大奖',
        description: '融合传统跆拳道品势与多轴空翻特技，荣膺全场最具视觉张力与裁判一致推荐特别荣誉大奖。',
      },
      ko: {
        tournament: '국제 마샬아츠 트릭킹 페스티벌',
        division: '최우수 단체 시범 및 고공 발차기 특별상',
        description: '전통 태권도 품새와 다축 공중제비 트릭킹, 고난도 격파를 결합하여 관객 및 심사위원단 특별상을 수상했습니다.',
      },
    },
    studentCompetitors: [
      {
        id: 'comp-9',
        name: 'Kim Heng',
        medal: 'Special Honor',
        division: 'Aerial Tricking Lead',
        beltRank: '3rd Dan Black Belt',
        beltHex: '#000000',
        age: 23,
        highlight: 'Completed triple corkscrew twist combo on live stage demonstration.',
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop',
      },
      {
        id: 'comp-10',
        name: 'Dara Chan',
        studentId: 'spotlight-3',
        medal: 'Special Honor',
        division: 'Action Stunt Co-Choreographer',
        beltRank: '1st Dan Black Belt',
        beltHex: '#000000',
        age: 24,
        highlight: 'Designed the fight choreography and multi-target board breaks.',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop',
      },
    ],
  },
  {
    id: 'ach-05',
    year: '2023',
    tournament: 'Kukkiwon Official Dan Promotion Board',
    category: 'Kukkiwon Dan',
    achievementType: 'kukkiwon',
    medal: 'Special Honor',
    division: '5th Dan High-Rank Master Examination',
    athleteOrTeam: 'Master Chon Sovan & Black Belt Cohort',
    location: 'Kukkiwon World Taekwondo HQ, Seoul, South Korea',
    score: 'High-Honor Dissertation & Practical Pass',
    highlights: [
      'Presented academic research on "Biomechanical Optimization in Southeast Asian Taekwondo Athletes".',
      'Flawless execution of high-Dan Poomsae: Pyongwon and Sipjin.',
      'Officially accredited as International Kukkiwon 1st Class Master Examiner.',
    ],
    keyTechniques: ['Pyongwon Form (평원)', 'Sipjin Form (십진)', 'Thesis Defense & Master Philosophy'],
    description:
      'Successfully passed the prestigious 5th Dan Master Instructor examination with honors in academic thesis defense, high-Dan form precision, and philosophy.',
    badgeColor: '#000000',
    verifiedBy: 'Kukkiwon World Taekwondo Headquarters',
    image: 'https://images.unsplash.com/photo-1555597673-b21d5c935865?q=80&w=1200&auto=format&fit=crop',
    translations: {
      km: {
        tournament: 'គណៈកម្មាធិការប្រលងខ្សែក្រវាត់ខ្មៅ Kukkiwon ផ្លូវការ',
        division: 'ការប្រលងខ្សែក្រវាត់ខ្មៅ ៥ ដាន់ កម្រិត Master',
        description: 'បានប្រលងជាប់ដោយជោគជ័យនូវខ្សែក្រវាត់ខ្មៅ ៥ ដាន់ និងវិញ្ញាបនប័ត្រ Master Instructor ពីទីស្នាក់ការកណ្តាល Kukkiwon នៅទីក្រុងសេអ៊ូល។',
      },
      zh: {
        tournament: '韩国国技院官方高段位晋升审查',
        division: '国技院黑带五段大师级考段审查',
        description: '在首尔国技院总部以优异成绩通过五段师范审查，完成东南亚运动员生物力学学术论文答辩与平原、十进高阶品势考核。',
      },
      ko: {
        tournament: '국기원 공식 고단자 승단 심사',
        division: '국기원 공인 5단 사범 자격 심사',
        description: '서울 국기원 본원에서 스포츠 생체역학 논문 심사 및 평원·십진 고단자 품새 실기 심사를 우수한 성적으로 통과했습니다.',
      },
    },
    studentCompetitors: [
      {
        id: 'comp-11',
        name: 'Vanna Meas',
        medal: 'Special Honor',
        division: '1st Dan Black Belt Promotion Graduate',
        beltRank: '1st Dan Black Belt',
        beltHex: '#000000',
        age: 18,
        score: 'Grade A Distinction',
        highlight: 'Demonstrated exceptional Koryo poomsae and 3-stage board breaking under Grandmaster review.',
        image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop',
      },
    ],
  },
  {
    id: 'ach-06',
    year: '2022',
    tournament: 'National Taekwondo Championships',
    category: 'National',
    achievementType: 'tournament',
    medal: 'Silver',
    division: 'Olympic Sparring (Kyorugi) -68kg',
    athleteOrTeam: 'Sokha Rith',
    location: 'Phnom Penh, Cambodia',
    score: '4 Knockout Victories to Silver',
    highlights: [
      'Advanced through 4 elimination matches via point-gap technical knockouts.',
      'Showcased superior footwork telemetry and lightning-fast counter round kicks.',
      'Earned call-up to the National Training Squad for regional qualifiers.',
    ],
    keyTechniques: ['Cut Kick to Head Axis', 'Spinning Back Kick Counter (Dwi Chagi)', 'Clinch Exit Scoring'],
    description:
      'Earned Silver Medal following 4 consecutive knockout victories in preliminary rounds, showcasing high-level tactical defense and kinetic power.',
    badgeColor: '#D0D0D0',
    verifiedBy: 'Cambodia Taekwondo Federation (CTF)',
    image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=1200&auto=format&fit=crop',
    translations: {
      km: {
        tournament: 'ការប្រកួតកីឡាតេក្វាន់ដូជើងឯកថ្នាក់ជាតិ',
        division: 'ការប្រកួត Kyorugi អូឡាំពិក -៦៨គីឡូក្រាម',
        description: 'ដណ្តើមបានមេដាយប្រាក់បន្ទាប់ពីឈ្នះ ៤ ប្រកួតផ្តួលដៃគូឱ្យសន្លប់ជាប់ៗគ្នា ដោយបង្ហាញនូវបច្ចេកទេសការពារ និងកម្លាំងទាត់យ៉ាងមានប្រសិទ្ធភាព។',
      },
      zh: {
        tournament: '柬埔寨全国跆拳道锦标赛',
        division: '男子奥运竞技实战 -68kg 级',
        description: '在初赛中连续4场以悬殊分差KO获胜摘得银牌，展现了高水平战术反击与爆发动能。',
      },
      ko: {
        tournament: '캄보디아 전국 태권도 선수권대회',
        division: '올림픽 겨루기 남자 -68kg급',
        description: '예선 4경기 연속 점수차 승리(KO)를 거두며 은메달을 획득, 국가대표 상비군으로 선발되었습니다.',
      },
    },
    studentCompetitors: [
      {
        id: 'comp-12',
        name: 'Sokha Rith',
        studentId: 'spotlight-1',
        medal: 'Silver',
        division: 'Senior Male Sparring -68kg',
        beltRank: '2nd Dan Black Belt',
        beltHex: '#000000',
        age: 17,
        score: 'Silver (4 Knockout Matches)',
        highlight: 'Fastest knockout of the tournament (14 seconds with spinning back kick).',
        image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop',
      },
    ],
  },
  {
    id: 'ach-07',
    year: '2022',
    tournament: 'Asian Cities Taekwondo Cup',
    category: 'International',
    achievementType: 'tournament',
    medal: 'Bronze',
    division: 'Pair Poomsae Mixed Division',
    athleteOrTeam: 'Infinity National Squad (Keo Moni & Team)',
    location: 'Hong Kong',
    score: '8.38 / 10.0 (3rd Place overall)',
    highlights: [
      'Competed against 32 elite national squads across East and Southeast Asia.',
      'Recognized for exceptional synchronized pacing and power delivery.',
      'First Cambodian private dojang to place on the Hong Kong podium.',
    ],
    keyTechniques: ['Keumgang Form (금강)', 'Mountain Blocking Sequence', 'Synchronized Front Snap Kicks'],
    description:
      'Placed 3rd among 32 international squads with high marks in tempo, technical alignment, and breathing harmony.',
    badgeColor: '#A05B00',
    verifiedBy: 'Hong Kong Taekwondo Association & WT',
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1200&auto=format&fit=crop',
    translations: {
      km: {
        tournament: 'ពានរង្វាន់តេក្វាន់ដូទីក្រុងអាស៊ី (Asian Cities Cup)',
        division: 'Poomsae គូចម្រុះ',
        description: 'ជាប់ចំណាត់ថ្នាក់លេខ ៣ ក្នុងចំណោមក្រុមកីឡាអន្តរជាតិចំនួន ៣២ ជាមួយនឹងពិន្ទុខ្ពស់ក្នុងចង្វាក់ និងភាពសុខដុមនៃការដកដង្ហើម។',
      },
      zh: {
        tournament: '亚洲城市跆拳道公开赛',
        division: '男女混双公认品势组',
        description: '在32支来自东亚与东南亚的国家级代表队激烈竞争中荣膺季军铜牌，成为首个登上该赛事领奖台的柬埔寨道馆。',
      },
      ko: {
        tournament: '아시아 도시 대항 태권도 대회',
        division: '혼성 페어 공인품새 부문',
        description: '아시아 32개 대표팀과의 치열한 접전 끝에 3위 동메달을 획득하며 국제 무대에서 인피니티의 기술력을 입증했습니다.',
      },
    },
    studentCompetitors: [
      {
        id: 'comp-13',
        name: 'Leakhena Sin',
        studentId: 'spotlight-4',
        medal: 'Bronze',
        division: 'Junior Pair Poomsae',
        beltRank: '1st Poom Black Belt',
        beltHex: '#000000',
        age: 15,
        score: '8.38',
        highlight: 'Mastery of slow-cadence breathing in Keumgang mountain blocks.',
        image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=800&auto=format&fit=crop',
      },
    ],
  },
  {
    id: 'ach-08',
    year: '2021',
    tournament: 'National Poomsae League',
    category: 'National',
    achievementType: 'tournament',
    medal: 'Grand Champion',
    division: 'Overall Team Grand Champion Dojang',
    athleteOrTeam: 'Infinity Taekwondo Academy (All Divisions)',
    location: 'Phnom Penh, Cambodia',
    score: 'Highest Cumulative League Trophy Points',
    highlights: [
      'Secured 14 Gold, 8 Silver, and 5 Bronze medals across all youth and adult ranks.',
      'Awarded Best Coaching Staff of the Year by the national board.',
      'Demonstrated 100% belt graduation rate among competing junior athletes.',
    ],
    keyTechniques: ['Full Taegeuk Syllabus (Il Jang through Pal Jang)', 'Team Synchronicity', 'Dojang Etiquette'],
    description:
      'Awarded Most Outstanding Dojang with the highest aggregate medal count across all belt divisions, establishing Infinity as the gold standard of martial arts instruction in Cambodia.',
    badgeColor: '#FFD505',
    verifiedBy: 'Cambodia National Olympic Committee & CTF',
    image: 'https://images.unsplash.com/photo-1555597673-b21d5c935865?q=80&w=1200&auto=format&fit=crop',
    translations: {
      km: {
        tournament: 'លីគកីឡាតេក្វាន់ដូ Poomsae ថ្នាក់ជាតិ',
        division: 'ជើងឯកដូជ៉ាងឆ្នើមទូទាំងប្រទេស (Grand Champion)',
        description: 'ទទួលបានពានរង្វាន់ដូជ៉ាងឆ្នើមបំផុតជាមួយនឹងចំនួនមេដាយសរុបខ្ពស់បំផុត (១៤ មាស, ៨ ប្រាក់, ៥ សំរឹទ្ធ)។',
      },
      zh: {
        tournament: '柬埔寨全国品势超级联赛',
        division: '年度团体总冠军最高荣誉道场',
        description: '以 14金、8银、5铜 的压倒性优势荣膺年度总冠军道场，树立柬埔寨跆拳道教学的新标杆。',
      },
      ko: {
        tournament: '캄보디아 전국 품새 리그전',
        division: '전국 종합 우승 그랜드 챔피언 도장',
        description: '금메달 14개, 은메달 8개, 동메달 5개를 휩쓸며 최다 메달 획득 종합 우승 도장으로 선정되었습니다.',
      },
    },
    studentCompetitors: [
      {
        id: 'comp-14',
        name: 'Rathana Sam',
        studentId: 'spotlight-5',
        medal: 'Gold',
        division: 'Adult Novice Poomsae (Taegeuk 4-5)',
        beltRank: 'Blue Belt',
        beltHex: '#0042EA',
        age: 28,
        score: '8.15',
        highlight: 'Gold medal in adult transformation bracket after losing 25kg during training.',
        image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800&auto=format&fit=crop',
      },
      {
        id: 'comp-15',
        name: 'Chanthy Chea',
        studentId: 'spotlight-2',
        medal: 'Gold',
        division: 'Little Warriors Division',
        beltRank: 'Red Belt',
        beltHex: '#EF2F38',
        age: 10,
        score: '8.50',
        highlight: 'Won gold in both individual poomsae and board breaking accuracy.',
        image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=800&auto=format&fit=crop',
      },
    ],
  },
]
