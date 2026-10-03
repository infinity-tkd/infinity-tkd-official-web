export interface TeamMember {
  id: string
  name: string
  role: string
  division: 'Executive' | 'Taekwondo' | 'Sport Science' | 'Studio'
  bio: string
  image: string
  credentials: string[]
  tags: string[]
  socials: {
    instagram?: string
    linkedin?: string
    facebook?: string
    youtube?: string
  }
  translations?: {
    km?: Partial<Omit<TeamMember, 'id' | 'division' | 'translations'>>
    zh?: Partial<Omit<TeamMember, 'id' | 'division' | 'translations'>>
    ko?: Partial<Omit<TeamMember, 'id' | 'division' | 'translations'>>
  }
}

export const teamMembers: TeamMember[] = [
  {
    id: 'keo-moni',
    name: 'Keo Moni',
    role: 'Founder & CEO',
    division: 'Executive',
    bio: 'The visionary driver behind Infinity Taekwondo. With over a decade of elite martial arts mastery, acrobatic tricking, and modern venture leadership, Moni bridges traditional warrior discipline with contemporary athletic science and media execution.',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80',
    credentials: ['4th Dan Black Belt', 'Lead Action Director', 'Venture Strategist'],
    tags: ['Leadership', 'Martial Arts', 'Freestyle Poomsae', 'Creative Direction'],
    socials: { instagram: '#', linkedin: '#', facebook: '#' },
    translations: {
      km: {
        role: 'ស្ថាបនិក & អគ្គនាយកប្រតិបត្តិ (CEO)',
        bio: 'អ្នកដឹកនាំចក្ខុវិស័យនៅពីក្រោយ Infinity Taekwondo។ ជាមួយនឹងបទពិសោធន៍ជាងមួយទសវត្សរ៍ក្នុងការហ្វឹកហាត់ក្បាច់គុនកម្រិតខ្ពស់ កាយសម្ព័ន្ធ Tricking និងការដឹកនាំអាជីវកម្មសម័យទំនើប Moni បានផ្សារភ្ជាប់វិន័យក្បាច់គុនបុរាណជាមួយនឹងវិទ្យាសាស្ត្រកីឡា និងប្រព័ន្ធផ្សព្វផ្សាយ។',
        credentials: ['ខ្សែក្រវាត់ខ្មៅ ៤ ដាន់', 'អ្នកដឹកនាំក្បាច់សកម្មភាព', 'យុទ្ធសាស្ត្រអាជីវកម្ម'],
      },
      zh: {
        role: '创始人兼首席执行官 (CEO)',
        bio: 'Infinity Taekwondo 的总掌舵人。拥有十余年高段位武道造诣、极限特技 (Tricking) 与现代企业领导经验，他将传统武道家自律与当代运动科学及影视传媒深度结合。',
        credentials: ['国技院黑带四段', '首席动作指导', '商业战略顾问'],
      },
      ko: {
        role: '설립자 & 대표이사 (CEO)',
        bio: '인피니티 태권도의 총괄 비전 리더. 10년 이상의 엘리트 무도 수련, 아크로바틱 트릭킹 및 현대 벤처 리더십을 바탕으로 전통 무도 정신과 현대 스포츠 사이언스를 융합합니다.',
        credentials: ['국기원 공인 4단', '액션 시네마 총괄 디렉터', '경영 전략가'],
      },
    },
  },
  {
    id: 'chon-sovan',
    name: 'Chon Sovan',
    role: 'Co-Founder & Head Master',
    division: 'Taekwondo',
    bio: 'An elite athlete, national medalist, and dedicated master educator. Master Sovan leads the World Taekwondo curriculum at Infinity Taekwondo, bringing high-performance coaching methodologies and sports science biomechanics to martial arts development.',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80',
    credentials: ['5th Dan Kukkiwon Black Belt', 'National Poomsae Coach', 'Biomechanics Specialist'],
    tags: ['Athletics', 'Coaching', 'Kukkiwon Poomsae', 'WT Federation'],
    socials: { instagram: '#', facebook: '#' },
    translations: {
      km: {
        role: 'សហស្ថាបនិក & មេគ្រូធំ (Head Master)',
        bio: 'អត្តពលិកឆ្នើម ម្ចាស់មេដាយថ្នាក់ជាតិ និងជាមេគ្រូអប់រំដ៏ពូកែ។ Master Sovan ដឹកនាំកម្មវិធីសិក្សា World Taekwondo នៅ Infinity ដោយនាំយកវិធីសាស្ត្របង្វឹកសមត្ថភាពខ្ពស់ និងជីវមេកានិចកីឡា។',
        credentials: ['ខ្សែក្រវាត់ខ្មៅ ៥ ដាន់ Kukkiwon', 'គ្រូបង្វឹក Poomsae ជម្រើសជាតិ', 'ឯកទេសជីវមេកានិចកីឡា'],
      },
      zh: {
        name: 'Chon Sovan',
        role: '联合创始人兼总教练 (Head Master)',
        bio: '国家级奖牌得主与权威大师。Sovan 大师全面主管 World Taekwondo 官方教学体系，将高水平竞技教练法与运动生物力学引入日常训练。',
        credentials: ['国技院黑带五段', '国家级品势教练', '运动生物力学专家'],
      },
      ko: {
        name: 'Chon Sovan',
        role: '공동 설립자 & 수석 사범 (Head Master)',
        bio: '국가대표 메달리스트이자 전문 교육자. 소반 수석사범은 인피니티 태권도의 세계태권도연맹 표준 교육과정을 총괄하며 스포츠 생체역학 기반 엘리트 코칭을 지도합니다.',
        credentials: ['국기원 공인 5단', '국가대표 품새 코치', '생체역학 전문 트레이너'],
      },
    },
  },
  {
    id: 'hul-thaiphirun',
    name: 'Hul ThaiPhirun',
    role: 'Co-Founder & Head of Operations',
    division: 'Studio',
    bio: 'A master of cinema operations with a background in high-pressure commercial film production. Phirun oversees technical workflows, camera packages, and studio scheduling to guarantee that every Infinity Taekwondo project exceeds broadcast standards.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80',
    credentials: ['Lead Cinematographer', 'DaVinci Certified Colorist', '10+ Years On-Set'],
    tags: ['Operations', 'Cinematography', 'Action Pre-Viz', 'Post-Production'],
    socials: { instagram: '#', youtube: '#' },
    translations: {
      km: {
        role: 'សហស្ថាបនិក & ប្រធានប្រតិបត្តិការ (Head of Operations)',
        bio: 'អ្នកជំនាញប្រតិបត្តិការភាពយន្តជាមួយបទពិសោធន៍ផលិតកម្មពាណិជ្ជកម្មកម្រិតខ្ពស់។ Phirun គ្រប់គ្រងលំហូរការងារបច្ចេកទេស កាមេរ៉ា និងកាលវិភាគស្ទូឌីយោ។',
        credentials: ['អ្នកដឹកនាំថតភាពយន្ត (Cinematographer)', 'អ្នកកែពណ៌វិញ្ញាបនប័ត្រ DaVinci', 'បទពិសោធន៍លើឈុត ១០+ ឆ្នាំ'],
      },
      zh: {
        role: '联合创始人兼运营总监 (Head of Operations)',
        bio: '商业影视制作与影棚运营专家。Phirun 统筹管理技术工作流、电影机系统调度与制作排期，确保 Infinity 出品的每一部影视与赛事作品达到院线级标准。',
        credentials: ['首席影视摄影师', '达芬奇认证调色师', '10年以上片场摄制经验'],
      },
      ko: {
        role: '공동 설립자 & 총괄 운영이사 (Head of Operations)',
        bio: '상업 영화 및 미디어 제작 총괄 전문가. 기술 워크플로우, 시네마 촬영 장비 및 스튜디오 스케줄링을 총괄 관리합니다.',
        credentials: ['수석 시네마토그래퍼', '다빈치 리졸브 공인 컬러리스트', '10년 이상 현장 제작 경력'],
      },
    },
  },
  {
    id: 'chandara',
    name: 'ChanDara',
    role: 'Co-Founder & Chief Creative Officer',
    division: 'Studio',
    bio: "The creative soul of Infinity Taekwondo. Dara's lens captures kinetic energy and emotion in motion. As Chief Creative Officer, he defines the visual language, directing our most ambitious cinematic projects and sports editorials.",
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80',
    credentials: ['Creative Director', 'Award-Winning Photographer', 'Brand Architect'],
    tags: ['Creative Direction', 'Visual Arts', 'Design System', 'Editorial'],
    socials: { instagram: '#', linkedin: '#' },
    translations: {
      km: {
        role: 'សហស្ថាបនិក & នាយកច្នៃប្រឌិត (CCO)',
        bio: 'ព្រលឹងច្នៃប្រឌិតនៃ Infinity Taekwondo។ កាមេរ៉ារបស់ Dara ចាប់យកថាមពលចលនា និងអារម្មណ៍យ៉ាងរស់រវើក។ ក្នុងនាមជា CCO គាត់កំណត់ភាសាមើលឃើញ និងដឹកនាំគម្រោងភាពយន្ត។',
        credentials: ['នាយកច្នៃប្រឌិត (Creative Director)', 'អ្នកថតរូបជ័យលាភី', 'ស្ថាបត្យករម៉ាកយីហោ'],
      },
      zh: {
        role: '联合创始人兼首席创意官 (CCO)',
        bio: 'Infinity Taekwondo 的视觉创意灵魂。Dara 的镜头敏锐捕捉高速运动中的动能张力与情绪。作为 CCO，他定义品牌视觉语言并执导重量级体育大片。',
        credentials: ['创意总监', '知名先锋摄影师', '品牌视觉架构师'],
      },
      ko: {
        role: '공동 설립자 & 최고 크리에이티브 책임자 (CCO)',
        bio: '인피니티 태권도의 크리에이티브 디렉터. 다라의 렌즈는 운동 동역학의 에너지와 감정을 포착합니다. 브랜드 시각 언어를 설계하고 대규모 영상 프로젝트를 총괄합니다.',
        credentials: ['크리에이티브 디렉터', '어워드 수상 포토그래퍼', '브랜드 비주얼 아키텍트'],
      },
    },
  },
]
