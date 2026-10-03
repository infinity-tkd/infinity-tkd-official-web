/**
 * ==============================================================================
 * PRICING & MEMBERSHIP PLANS DATA
 * ==============================================================================
 * Centralized data source for tuition plans, family discounts, annual savings,
 * and feature comparison matrices.
 * ==============================================================================
 */

export interface PricingPlan {
  id: string
  name: string
  division: 'taekwondo' | 'science' | 'studio' | 'all'
  badge: string
  badgeType?: 'popular' | 'beginner' | 'master' | 'family'
  accentColor: string
  monthlyIndividualPrice: number | null
  annualIndividualPrice: number | null
  monthlyFamilyPrice: number | null // Discounted rate for family bundles
  annualFamilyPrice: number | null
  priceDisplay?: string
  period: string
  popular?: boolean
  description: string
  targetAudience: string
  features: string[]
  notIncluded?: string[]
  ctaText: string
  ctaSubject: string
  translations?: {
    km?: Partial<Omit<PricingPlan, 'id' | 'division' | 'translations'>>
    zh?: Partial<Omit<PricingPlan, 'id' | 'division' | 'translations'>>
    ko?: Partial<Omit<PricingPlan, 'id' | 'division' | 'translations'>>
  }
}

export interface PricingComparisonCategory {
  category: string
  features: {
    name: string
    junior: boolean | string
    athlete: boolean | string
    master: boolean | string
  }[]
}

export const pricingPlans: PricingPlan[] = [
  {
    id: 'junior-warriors',
    name: 'Junior Warriors & Tigers',
    division: 'taekwondo',
    badge: 'Best for Beginners',
    badgeType: 'beginner',
    accentColor: '#FFD505',
    monthlyIndividualPrice: 85,
    annualIndividualPrice: 68,
    monthlyFamilyPrice: 65, // Family discount rate per child
    annualFamilyPrice: 52,
    period: 'month',
    description: 'Foundational martial discipline, anti-bullying confidence, motor skills, and agility for children and teens (Ages 4-13).',
    targetAudience: 'Little Tigers (4-6) & Cadets (7-13)',
    features: [
      '3x Weekly Junior Champions Classes',
      'World Taekwondo Taegeuk Poomsae 1-4',
      'Anti-Bullying & Self-Defense Drills',
      'Quarterly Color Belt Promotion Tests',
      'Free Member Training Uniform (Dobok)',
      'Character & Etiquette Report Cards',
    ],
    notIncluded: ['Freestyle Tricking Pit Access', '1-on-1 Private Master Coaching'],
    ctaText: 'Enroll Junior Warrior',
    ctaSubject: 'Junior Warriors Membership Enrollment Inquiry',
    translations: {
      km: {
        name: 'កុមារ និងយុវជន Junior Warriors',
        badge: 'ល្អបំផុតសម្រាប់អ្នកចាប់ផ្តើម',
        description: 'វិន័យក្បាច់គុនមូលដ្ឋាន ការពារការសម្លុត ទំនុកចិត្ត ជំនាញចលនារាងកាយ និងភាពរហ័សរហួនសម្រាប់កុមារ (អាយុ ៤-១៣ ឆ្នាំ)។',
        targetAudience: 'កុមារតូចៗ (៤-៦ ឆ្នាំ) & កុមារជំទង់ (៧-១៣ ឆ្នាំ)',
        ctaText: 'ចុះឈ្មោះកុមារឥស្សរជន',
      },
      zh: {
        name: '少年武道勇士与幼虎计划',
        badge: '初学者启蒙首选',
        description: '为儿童及青少年（4-13岁）量身打造的基础武道纪律、防霸凌自卫信心、身体协调性及敏捷度训练。',
        targetAudience: '幼虎组 (4-6岁) & 少年组 (7-13岁)',
        ctaText: '立即为孩子报名',
      },
      ko: {
        name: '주니어 워리어 & 타이거즈 수련 과정',
        badge: '입문자 맞춤 추천',
        description: '어린이 및 청소년(4~13세)을 위한 기본 무도 예절, 학교폭력 예방 호신술, 신체 협응력 및 민첩성 기초 훈련 과정입니다.',
        targetAudience: '리틀 타이거즈 (4~6세) & 카뎃 (7~13세)',
        ctaText: '주니어 등록 신청',
      },
    },
  },
  {
    id: 'pro-athlete',
    name: 'Pro Athlete Membership',
    division: 'all',
    badge: 'Most Popular',
    badgeType: 'popular',
    accentColor: '#EF2F38',
    popular: true,
    monthlyIndividualPrice: 120,
    annualIndividualPrice: 96,
    monthlyFamilyPrice: 90,
    annualFamilyPrice: 72,
    period: 'month',
    description: 'Complete unrestricted access to all World Taekwondo forms, Olympic sparring, and freestyle tricking programs.',
    targetAudience: 'Juniors (12-17), Adults (18-49), & Masters',
    features: [
      'Unlimited Classes Across All Disciplines',
      'Recognized Poomsae (WT) & Belt Syllabus',
      'Acrobatic Tricking & Spring Pit Access',
      'Competition Team Audition Eligibility',
      'Official Kukkiwon Dan Grading Preparation',
      'Free Member Training Uniform (Dobok)',
      'Dojang App Video Library & Syllabus Archive',
    ],
    notIncluded: ['Private 1-on-1 Biomechanics Lab'],
    ctaText: 'Join The Dojang',
    ctaSubject: 'Infinity Taekwondo Athlete Membership Application',
    translations: {
      km: {
        name: 'សមាជិកភាពអត្តពលិកអាជីព Pro Athlete',
        badge: 'ពេញនិយមបំផុត',
        description: 'ការចូលរួមហ្វឹកហាត់ដោយគ្មានដែនកំណត់ចំពោះគ្រប់ទម្រង់ World Taekwondo ការប្រយុទ្ធអូឡាំពិក និងកម្មវិធី Freestyle Tricking។',
        targetAudience: 'យុវជន (១២-១៧ ឆ្នាំ) មនុស្សពេញវ័យ (១៨-៤៩ ឆ្នាំ) & គ្រូបង្វឹក',
        ctaText: 'ចូលរួមជាមួយដូជ៉ាង',
      },
      zh: {
        name: '职业运动员全能会员 (Pro Athlete)',
        badge: '最受欢迎方案',
        description: '全馆无限次畅训：涵盖世界跆拳道官方品势、奥运竞技实战及极限特技 (Tricking) 全套课程。',
        targetAudience: '青少年 (12-17岁)、成人组 (18-49岁) 及进阶大师',
        ctaText: '加入 Infinity 道场',
      },
      ko: {
        name: '프로 애슬리트 무제한 멤버십',
        badge: '가장 인기 있는 멤버십',
        description: '세계태권도연맹 공인품새, 올림픽 겨루기 및 익스트림 자유품새 트릭킹 전 과정을 제한 없이 무제한 수련할 수 있는 플랜입니다.',
        targetAudience: '청소년 (12~17세), 성인부 (18~49세) & 유단자',
        ctaText: '도장 입관 신청',
      },
    },
  },
  {
    id: 'master-private',
    name: 'Private Master Coaching',
    division: 'science',
    badge: 'Direct 1-on-1 Elite',
    badgeType: 'master',
    accentColor: '#09BB00',
    monthlyIndividualPrice: null,
    annualIndividualPrice: null,
    monthlyFamilyPrice: null,
    annualFamilyPrice: null,
    priceDisplay: '$Custom',
    period: 'program',
    description: 'Direct 1-on-1 mentorship with Head Masters for tournament athletes, Dan thesis candidates, and executive leaders.',
    targetAudience: 'Tournament Athletes, Dan Candidates & Executives',
    features: [
      '1-on-1 Private Technical Master Sessions',
      'High-Speed Video Biomechanics Stance Analysis',
      'Customized Kukkiwon Dan Thesis & Form Audit',
      'Periodized Strength & Tendon Conditioning',
      'Targeted Olympic Sparring Strategy',
      'Direct 24/7 VIP Line to Head Masters',
    ],
    ctaText: 'Book Master Assessment',
    ctaSubject: 'Private Master Coaching Inquiry',
    translations: {
      km: {
        name: 'ការបង្វឹកផ្ទាល់ខ្លួន ១ ទល់ ១ ជាមួយមេគ្រូ Master',
        badge: 'ឥស្សរជន ១ ទល់ ១ ផ្ទាល់',
        description: 'ការបង្វឹកផ្ទាល់ ១ ទល់ ១ ជាមួយមេគ្រូធំ សម្រាប់កីឡាករប្រកួត បេក្ខជនប្រលងខ្សែក្រវាត់ខ្មៅ Dan និងថ្នាក់ដឹកនាំ។',
        targetAudience: 'កីឡាករប្រកួត បេក្ខជនខ្សែក្រវាត់ខ្មៅ Dan & ថ្នាក់ដឹកនាំ',
        ctaText: 'កក់ការវាយតម្លៃជាមួយមេគ្រូ',
      },
      zh: {
        name: '总教练 1对1 私人定制大师课',
        badge: '一对一精英尊享',
        description: '由总馆长及国技院高段位大师一对一亲自执教，专为竞技争冠选手、黑带高段位考官答辩及企业领袖定制。',
        targetAudience: '职业赛事选手、高段位升段候选人及企业精英',
        ctaText: '预约大师测评评估',
      },
      ko: {
        name: '수석 사범 1:1 프라이빗 마스터 코칭',
        badge: '1:1 최고급 엘리트 레슨',
        description: '대회 입상을 목표로 하는 엘리트 선수, 국기원 고단자 승단 심사 후보자 및 VIP를 위한 총관장 1:1 직강 코칭입니다.',
        targetAudience: '선수단, 고단자 심사 대상자 & VIP 수련생',
        ctaText: '마스터 심층 상담 예약',
      },
    },
  },
]

export const pricingComparison: PricingComparisonCategory[] = [
  {
    category: 'Training & Classes',
    features: [
      { name: 'Recognized Poomsae (WT)', junior: '3x / week', athlete: 'Unlimited', master: '1-on-1 Private' },
      { name: 'Tricking & Acrobatics Pit', junior: false, athlete: 'Included', master: 'Included' },
      { name: 'Sparring & Competition Prep', junior: 'Light Drills', athlete: 'Included', master: 'Advanced Match Prep' },
      { name: 'Kukkiwon Belt Promotion Tests', junior: 'Included', athlete: 'Included', master: 'Dan Accelerated' },
    ],
  },
  {
    category: 'Coaching & Mentorship',
    features: [
      { name: 'Lead Certified Master', junior: 'Head Instructor', athlete: 'Master Sovan & Moni', master: 'Dedicated 5th Dan' },
      { name: 'Biomechanical Angle Audit', junior: false, athlete: 'Quarterly', master: 'Every Session' },
      { name: 'Official Dobok & Belt Patches', junior: 'Included', athlete: 'Included', master: 'Custom Embroidered' },
    ],
  },
]

export const pricingFaqs = [
  {
    q: 'Are there any long-term contract lock-ins?',
    a: 'No. Monthly memberships can be paused or cancelled at any time with a simple 30-day notice before your next billing cycle.',
  },
  {
    q: 'How does the Family Discount work?',
    a: 'When 2 or more family members or siblings enroll together, you receive a 25% discount on all monthly or annual memberships.',
  },
  {
    q: 'Is equipment provided for martial arts classes?',
    a: 'Yes. Spring floors, air tracks, kick shields, heavy bags, and crash landing mats are all fully provided. Athlete tier members also receive an official Infinity Taekwondo uniform upon enrollment.',
  },
  {
    q: 'How does belt progression work at Infinity Taekwondo?',
    a: 'We follow official World Taekwondo and Kukkiwon standards. Students progress through White, Yellow, Green, Blue, Brown, Red, and Black Dan ranks through rigorous technical and mental examinations held quarterly.',
  },
]
