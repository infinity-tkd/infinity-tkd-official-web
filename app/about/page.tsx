'use client'

import * as React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  Activity,
  ArrowLeft,
  ArrowRight,
  Award,
  Brain,
  Building2,
  Check,
  Compass,
  Eye,
  Facebook,
  Flame,
  Instagram,
  Linkedin,
  Milestone,
  Rocket,
  Shield,
  Target,
  Users,
  X,
  Zap,
} from 'lucide-react'
import { teamMembers, type TeamMember } from '@/data/team'
import { collaborationsData } from '@/data/collaborations'
import { InfinityLogo, INFINITY_SYMBOL } from '@/components/InfinityLogo'
import { InfinityBrainAnimation } from '@/components/InfinityBrainAnimation'
import { SafeImage } from '@/components/SafeImage'
import { SafeGrid } from '@/components/SafeGrid'
import { PageHero } from '@/components/ui/PageHero'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { SegmentedControl } from '@/components/ui/SegmentedControl'
import { CtaBanner } from '@/components/ui/CtaBanner'
import { buttonStyles } from '@/components/ui/Button'
import { useLanguage } from '@/context/LanguageContext'
import { beltProgression } from '@/data/belts'
import { cn } from '@/lib/utils'

type AboutTab = 'story' | 'mind' | 'quad' | 'values' | 'tenets' | 'journey' | 'faculty'

export default function AboutPage() {
  const { t, localizeList, language } = useLanguage()
  const [selectedMember, setSelectedMember] = React.useState<TeamMember | null>(null)
  const [activeTab, setActiveTab] = React.useState<AboutTab>('story')
  const [selectedBeltColor, setSelectedBeltColor] = React.useState<string>('red')
  const panelRef = React.useRef<HTMLDivElement>(null)
  const closeRef = React.useRef<HTMLButtonElement>(null)

  const localizedTeam = React.useMemo(() => {
    return localizeList(teamMembers)
  }, [localizeList])

  const openMember = (member: TeamMember) => {
    setSelectedMember(member)
  }

  const closeMember = () => {
    setSelectedMember(null)
  }

  // Profile dialog: focus moves to its close button, Escape closes it, and focus returns to the
  // card that opened it.
  React.useEffect(() => {
    if (!selectedMember) return
    const opener = document.activeElement as HTMLElement | null
    closeRef.current?.focus()
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedMember(null)
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
      opener?.focus()
    }
  }, [selectedMember])

  // Belt marks come from the shared belt structure (data/belts.ts), so names, colours and
  // timelines always match the belt journey (in the visitor's language).
  const beltPalette = localizeList(beltProgression).map((belt) => ({
    id: belt.id,
    name: belt.name,
    shortName: belt.shortName,
    korean: `${belt.koreanName.split(' (')[0]} · ${belt.rankTitle}`,
    hex: belt.hex,
    border: belt.borderHex,
    textDark: belt.textColor === '#000000',
    meaning: belt.meaning,
    philosophy: belt.philosophy,
    timeline: belt.timeline,
  }))

  const quadPillars = [
    {
      id: 'vision',
      badge: 'Direction & Horizon',
      title: 'Our Vision',
      korean: '비전 (Vision)',
      tagline: 'Cambodia’s Premier Hub for Elite Martial Arts',
      desc: 'To become Cambodia’s premier hub for elite martial artists, where traditional discipline meets the cutting edge of sport science, biomechanics, and creative cinematic mastery.',
      source: 'Brand Guide Page 3',
      icon: Eye,
      color: '#EF2F38',
      target: 'Leading Martial Arts Brand in Southeast Asia',
    },
    {
      id: 'mission',
      badge: 'Daily Execution',
      title: 'Our Mission',
      korean: '사명 (Mission)',
      tagline: 'World-Class Training & Endless Self-Improvement',
      desc: 'To provide world-class training that blends athletic science with the artistry of freestyle Taekwondo, empowering students to achieve limitless potential from day one.',
      source: 'Brand Guide Page 3',
      icon: Target,
      color: '#0042EA',
      target: 'Daily Scientific Excellence & High-Performance Coaching',
    },
    {
      id: 'goal',
      badge: 'Measurable Milestones',
      title: 'Our Strategic Goal',
      korean: '목표 (Goal)',
      tagline: '1,000+ Certified Dan Belts & Regional Podium Gold',
      desc: 'To cultivate 1,000+ Kukkiwon Dan Black Belts across Cambodia, standardizing high-performance poomsae instruction and establishing international competitive excellence.',
      source: 'Dojang Master Plan',
      icon: Award,
      color: '#09BB00',
      target: '1,000+ Certified Kukkiwon Black Belts by 2030',
    },
    {
      id: 'dream',
      badge: 'Ultimate North Star',
      title: 'Our Dream',
      korean: '꿈 (Dream)',
      tagline: 'Cambodia on the Olympic & Global World Championship Stage',
      desc: 'To raise Cambodian homegrown athletes to stand at the top of World Taekwondo and Olympic podiums, showing the world the indomitable courage and brilliance of Khmer athletes.',
      source: 'Infinity Manifesto',
      icon: Rocket,
      color: '#FF5733',
      target: 'Olympic Gold & World Poomsae Championships',
    },
  ]

  const brainPrinciples = [
    {
      number: '01',
      title: 'Neurological Spatial Processing',
      korean: '공간 지각과 회전 감각',
      desc: 'Mastering multi-axis airborne orientation for 540°–720° kick trajectories requires precise vestibular conditioning, spot rotation reflexes, and subconscious proprioception drills.',
      metric: '360°–720° Multi-Axis Spatial Awareness',
      icon: Brain,
    },
    {
      number: '02',
      title: 'Microsecond Decision Latency',
      korean: '반응 속도와 전술 인지',
      desc: 'Freestyle poomsae, demonstration and hosinsul demand split-second timing: landing a 540° kick on the beat or reacting to a partner’s grab trains the brain to respond in under 180 milliseconds.',
      metric: '<180ms Neural Reaction Latency',
      icon: Target,
    },
    {
      number: '03',
      title: 'The Unshakable Center (Budoshim)',
      korean: '부동심 (不動心) • 불요불굴',
      desc: '“A mountain never shakes in the wind.” Under intense tournament pressure or life adversity, Infinity practitioners maintain calm breathing, sharp spatial awareness, and decisive resolve.',
      metric: 'Unbreakable Emotional Equilibrium',
      icon: Shield,
    },
    {
      number: '04',
      title: 'Continuous Scientific Evolution',
      korean: '지속적 혁신과 발전',
      desc: 'We reject static dogma. By integrating high-speed video telemetry, force sensors, and recovery physiology, our fighters continuously upgrade their physical and tactical intelligence.',
      metric: 'Data-Driven Biomechanical Feedback',
      icon: Zap,
    },
  ]

  const coreValues = [
    {
      number: '01',
      title: 'Perseverance',
      korean: '인내 (In Nae)',
      tagline: 'We never give up.',
      description:
        'Every missed kick, fallen board, and grueling drill is fuel for character refinement. Resilience on the mats creates unbreakable strength in life.',
      icon: Flame,
      color: '#EF2F38',
      quote: 'Fall seven times, stand up eight with greater precision.',
    },
    {
      number: '02',
      title: 'Integrity',
      korean: '염치 (Yeom Chi)',
      tagline: 'We act with honor in and out of the Dojang.',
      description:
        'True strength is governed by moral responsibility. We practice honesty, respect our masters, peers, and family, and hold ourselves to the highest ethical standards.',
      icon: Shield,
      color: '#09BB00',
      quote: 'Honor is not what others see; it is what we do when no one is watching.',
    },
    {
      number: '03',
      title: 'Innovation',
      korean: '혁신 (Hyeok Sin)',
      tagline: 'We combine traditional forms with modern athletic science.',
      description:
        'Honoring World Taekwondo roots while pushing the boundaries of freestyle poomsae, 720 tricking acrobatics, high-speed camera telemetry, and sports biomechanics.',
      icon: Zap,
      color: '#FF5733',
      quote: 'Tradition is keeping the fire alive, not worshipping the ashes.',
    },
  ]

  const dojangTenets = [
    {
      number: 'I',
      name: 'Courtesy',
      korean: '예의 (Ye Ui)',
      pronunciation: 'Yeh-Wee',
      principle: 'To show genuine respect, humility, and consideration to masters, seniors, juniors, opponents, and community.',
      application: 'Bow upon entering the Dojang, listen attentively without interruption, and support fellow athletes.',
    },
    {
      number: 'II',
      name: 'Integrity',
      korean: '염치 (Yeom Chi)',
      pronunciation: 'Yum-Chee',
      principle: 'To know right from wrong, maintain transparent character, and act with unyielding honesty in competition and life.',
      application: 'Acknowledge valid scoring points fairly, tell the truth unconditionally, and refuse shortcuts.',
    },
    {
      number: 'III',
      name: 'Perseverance',
      korean: '인내 (In Nae)',
      pronunciation: 'Een-Neh',
      principle: 'To endure physical hardship, fatigue, and setbacks with patience until the technique and spirit are perfected.',
      application: 'Repeat complex kicking combinations tirelessly until muscle memory executes them flawlessly.',
    },
    {
      number: 'IV',
      name: 'Self-Control',
      korean: '극기 (Geuk Gi)',
      pronunciation: 'Geuk-Gee',
      principle: 'To govern one’s temper, ego, and impulses through disciplined breath, sharp focus, and mental poise.',
      application: 'Never use martial arts outside the Dojang for aggression; harness power solely for defense and protection.',
    },
    {
      number: 'V',
      name: 'Indomitable Spirit',
      korean: '백절불굴 (Baekjeolbulgul)',
      pronunciation: 'Bek-Jol-Bool-Gool',
      principle: 'To face any adversary, injustice, or insurmountable obstacle with courage and a spirit that will never surrender.',
      application: 'Step onto the championship mat with total confidence and rise after every fall with renewed determination.',
    },
  ]

  const [selectedEraYear, setSelectedEraYear] = React.useState<string>('2020')
  const [journeyViewMode, setJourneyViewMode] = React.useState<'interactive' | 'timeline'>('interactive')

  const milestones = [
    {
      year: '2020',
      era: 'The Genesis',
      koreanEra: '도장의 태동 (2020)',
      title: 'The Inception at The Factory',
      subtitle: 'Grassroots Dojo & Acrobatic Fusion',
      badge: 'Foundation',
      badgeColor: '#EF2F38',
      desc: 'Founded by Master Keo Moni and Master Chon Sovan at Factory Phnom Penh. Built Cambodia’s first dedicated training floor combining recognized Kukkiwon Poomsae with acrobatic martial arts tricking.',
      metrics: { label: 'Initial Cadets', value: '25 Founding Athletes' },
      highlights: [
        'Built 600m² Olympic spring floor & foam crash pit',
        'Launched first Little Tigers & Youth Cadet classes',
        'Introduced aerial 540° kicking progressions in Cambodia',
      ],
      quote: {
        text: 'We started with 25 mats and a dream to show the world the modern power of Khmer martial artists.',
        author: 'Master Keo Moni',
      },
      icon: Flame,
      translations: {
        km: {
          title: 'ការចាប់ផ្តើមដំបូងនៅ The Factory',
          subtitle: 'ដូជ៉ាងមូលដ្ឋាន & ការរួមបញ្ចូលកាយសម្ព័ន្ធ Tricking',
          desc: 'បង្កើតឡើងដោយ Master Keo Moni និង Master Chon Sovan នៅ Factory ភ្នំពេញ។ បានកសាងទីលានហ្វឹកហាត់ដំបូងបង្អស់នៅកម្ពុជាដែលរួមបញ្ចូលគ្នានូវ Kukkiwon Poomsae ផ្លូវការ និង Tricking។',
          highlights: [
            'សាងសង់កម្រាល Olympic spring floor ៦០០ ម៉ែត្រការ៉េ និងពូកសុវត្ថិភាព',
            'ចាប់ផ្តើមថ្នាក់ Little Tigers & Youth Cadets ដំបូង',
            'ណែនាំការហ្វឹកហាត់ទាត់លើអាកាស 540° នៅកម្ពុជា',
          ],
        },
        zh: {
          title: 'The Factory 旗舰馆破晓启航',
          subtitle: '草根道场初立与极限特技 (Tricking) 跨界融合',
          desc: '由 Keo Moni 总教练与 Chon Sovan 大师于金边 The Factory 联合创办，打造全柬埔寨首个融合国技院公认品势与高空极限特技的专业殿堂。',
          highlights: [
            '搭建 600㎡ 专业体操弹簧地板与海绵防摔保护坑',
            '设立幼虎启蒙与青少年精英梯队',
            '首次在柬埔寨系统化引入 540° 旋风踢进阶教学',
          ],
        },
        ko: {
          title: '더 팩토리 프놈펜 본관 창립',
          subtitle: '정통 공인품새와 익스트림 트릭킹의 최초 융합',
          desc: '케오 모니 대표와 촌 소반 수석사범이 프놈펜 팩토리에서 창립. 국기원 정통 공인품새와 마샬아츠 트릭킹을 결합한 캄보디아 최초의 전문 도장을 개관했습니다.',
          highlights: [
            '600m² 올림픽 스프링 매트 및 안전 폼피트 구축',
            '리틀 타이거즈 및 주니어 카뎃 정규반 개설',
            '캄보디아 최초 540도 고난도 발차기 체계적 도입',
          ],
        },
      },
    },
    {
      year: '2022',
      era: 'Accreditation',
      koreanEra: '국기원 공식 공인 (2022)',
      title: 'Kukkiwon Dan Accreditation',
      subtitle: 'Standardizing World Taekwondo Syllabus',
      badge: 'Accreditation',
      badgeColor: '#0042EA',
      desc: 'Officially accredited to host certified World Taekwondo & Kukkiwon Dan rank promotion examinations, standardizing grading criteria for youth across Cambodia.',
      metrics: { label: 'Graduated Dan Belts', value: '120+ Kukkiwon Dans' },
      highlights: [
        'Official Kukkiwon promotion examination delegation',
        'First generation of 1st–3rd Dan Black Belts certified',
        'National recognized poomsae competition squad formed',
      ],
      quote: {
        text: 'Authentic Kukkiwon accreditation ensured our students held credentials recognized across 210+ member nations.',
        author: 'Master Chon Sovan',
      },
      icon: Award,
      translations: {
        km: {
          title: 'ការទទួលស្គាល់ផ្លូវការពី Kukkiwon Dan',
          subtitle: 'ស្តង់ដារកម្មវិធីសិក្សា World Taekwondo',
          desc: 'ទទួលបានការទទួលស្គាល់ជាផ្លូវការដើម្បីរៀបចំការប្រលងដំឡើងកម្រិតខ្សែក្រវាត់ខ្មៅ Kukkiwon Dan ស្របតាមស្តង់ដារអន្តរជាតិ។',
          highlights: [
            'គណៈប្រតិភូវាយតម្លៃការប្រលងខ្សែក្រវាត់ Kukkiwon ផ្លូវការ',
            'សិស្សជំនាន់ទី ១ ទទួលបានខ្សែក្រវាត់ខ្មៅ ១-៣ ដាន់',
            'បង្កើតក្រុមប្រកួតប្រជែង Poomsae ថ្នាក់ជាតិ',
          ],
        },
        zh: {
          title: '国技院 (Kukkiwon) 官方考段授权',
          subtitle: '全面接轨世界跆拳道联盟 (WT) 教学标准',
          desc: '正式获得世界跆拳道国技院官方段位认证考点授权，统一柬埔寨青少年学员与选手的国际考段晋升标准。',
          highlights: [
            '国技院官方考官代表团亲临指导考段',
            '首批黑带一至三段高水平学员顺利毕业',
            '组建 Infinity 官方公认品势竞技代表队',
          ],
        },
        ko: {
          title: '국기원 공인 승단 심사기관 인가',
          subtitle: '세계태권도연맹(WT) 표준 교육과정 정립',
          desc: '국기원 공인 단증 심사 권한을 획득하여 캄보디아 수련생들에게 전 세계 210개국에서 통용되는 국제 공인 단증 발급 체계를 구축했습니다.',
          highlights: [
            '국기원 승단 심사 위원단 공식 파견 및 심사',
            '1~3단 공인 유단자 1기 성공적 배출',
            '인피니티 전국 공인품새 선수단 공식 창단',
          ],
        },
      },
    },
    {
      year: '2024',
      era: 'Science Integration',
      koreanEra: '스포츠 사이언스 랩 (2024)',
      title: 'Sport Science & Biomechanics Lab',
      subtitle: 'Telemetry, Sensors & Calisthenics',
      badge: 'Technology',
      badgeColor: '#09BB00',
      desc: 'Pioneered Cambodia’s first martial arts sport science laboratory. Deployed electronic kick-impact sensors, 240 FPS kinematic cameras, and tendon durability conditioning.',
      metrics: { label: 'Telemetry Precision', value: '240 FPS Video Rig' },
      highlights: [
        'Electronic kick-impact and speed measurement',
        'Kinematic high-speed camera joint angle audit',
        'Calisthenics tendon conditioning & relative strength lab',
      ],
      quote: {
        text: 'Martial arts is no longer guess-work. We measure impulse, degrees of rotation, and microsecond reaction speed.',
        author: 'Sport Science Director',
      },
      icon: Activity,
      translations: {
        km: {
          title: 'មន្ទីរពិសោធន៍វិទ្យាសាស្ត្រកីឡា & ជីវមេកានិច',
          subtitle: 'ទិន្នន័យ Telemetry ឧបករណ៏ Sensor & Calisthenics',
          desc: 'ត្រួសត្រាយផ្លូវមន្ទីរពិសោធន៍វិទ្យាសាស្ត្រកីឡាក្បាច់គុនដំបូងបង្អស់នៅកម្ពុជា។ បំពាក់ឧបករណ៍ Sensor វាស់កម្លាំងទាត់ ប្រព័ន្ធកាមេរ៉ាល្បឿនលឿន ២៤០ FPS និងការការពារសរសៃសន្លាក់។',
          highlights: [
            'ការវាស់កម្លាំង និងល្បឿនទាត់តាមអេឡិចត្រូនិច',
            'ការវិភាគមុំសន្លាក់តាមរយៈកាមេរ៉ាល្បឿនលឿន',
            'មន្ទីរពិសោធន៍កម្លាំងកាយ Calisthenics & ពង្រឹងសរសៃពួរ',
          ],
        },
        zh: {
          title: '运动生物力学与运动科学实验室',
          subtitle: '传感器遥测、高速运镜与自重相对力量强化',
          desc: '开创全柬首个武道运动科学实验室。引入电子踢击冲击力传感器、240帧高速关节角度捕捉以及肌腱韧性抗伤协议。',
          highlights: [
            '电子踢击冲击力与速度测量系统',
            '高速摄影机 240FPS 动作姿态与发力角度审计',
            '街头健身相对力量与肌腱抗负荷强化系统',
          ],
        },
        ko: {
          title: '스포츠 생체역학 과학 연구 랩 구축',
          subtitle: '전자 타격 센서 시스템, 고속 촬영 & 근력 강화',
          desc: '캄보디아 최초의 무도 스포츠 사이언스 연구실을 출범. 전자 타격 센서와 240 FPS 초고속 카메라 관절 궤적 분석을 도입했습니다.',
          highlights: [
            '전자 발차기 타격력 및 속도 측정 시스템 완비',
            '초고속 240 FPS 모션 캡처 관절 각도 정밀 분석',
            '캘리스데닉스 기반 건(Tendon) 강화 및 코어 안정화',
          ],
        },
      },
    },
    {
      year: '2026',
      era: 'Metropolitan Expansion',
      koreanEra: '도심 확장 및 국제 대회 석권 (2026)',
      title: 'BKK1 Elite Center & Regional Podium',
      subtitle: '2 Prime Dojang Hubs & 40+ International Medals',
      badge: 'Expansion',
      badgeColor: '#A855F7',
      desc: 'Opened our flagship 2nd center at Boeung Keng Kang 1 (BKK1), serving 500+ active athletes and earning over 40 podium medals across Southeast Asian championships.',
      metrics: { label: 'Active Community', value: '500+ Active Athletes' },
      highlights: [
        'Dual-dojang network across Phnom Penh (Factory HQ + BKK1)',
        '40+ International tournament medals won',
        'Student incubator & instructor apprenticeship launched',
      ],
      quote: {
        text: 'From a local grassroots dojang to a nationwide martial institution producing champions on the regional stage.',
        author: 'Master Keo Moni',
      },
      icon: Building2,
      translations: {
        km: {
          title: 'មជ្ឈមណ្ឌលឥស្សរជន BKK1 & មេដាយអន្តរជាតិ',
          subtitle: 'ដូជ៉ាង ២ សាខាធំ & មេដាយអន្តរជាតិជាង ៤០',
          desc: 'បានបើកសាខាទី ២ នៅបឹងកេងកង ១ (BKK1) បម្រើសេវាសិស្សជាង ៥០០ នាក់ និងដណ្តើមបានមេដាយជាង ៤០ ក្នុងការប្រកួតកម្រិតអាស៊ីអាគ្នេយ៍។',
          highlights: [
            'បណ្តាញដូជ៉ាង ២ កន្លែងនៅភ្នំពេញ (The Factory HQ + BKK1)',
            'ឈ្នះមេដាយការប្រកួតអន្តរជាតិជាង ៤០+',
            'ចាប់ផ្តើមកម្មវិធីបណ្តុះបណ្តាលសិស្ស Incubator & គ្រូជំនួយ',
          ],
        },
        zh: {
          title: 'BKK1 精英馆落成与国际赛事摘金',
          subtitle: '双旗舰道场矩阵与 40+ 国际赛事奖牌',
          desc: '在金边万景岗一区 (BKK1) 成立第二座都市旗舰中心，常年活跃运动员逾500名，在东南亚及国际品势公开赛斩获超40枚奖牌。',
          highlights: [
            '金边双馆旗舰网络（Factory 总馆 + BKK1 精英馆）',
            '累计荣获 40 余枚国家级与国际级奖牌',
            '启动青年领航孵化器与青年教练导师计划',
          ],
        },
        ko: {
          title: 'BKK1 엘리트 2호점 개관 및 국제 대회 제패',
          subtitle: '프놈펜 2개 대형 도장 & 국제 대회 메달 40개 이상 획득',
          desc: '프놈펜 중심가 BKK1에 2호점을 확장 개관. 500명 이상의 정규 수련생과 함께 동남아시아 및 국제 태권도 대회에서 40개 이상의 메달을 석권했습니다.',
          highlights: [
            '프놈펜 더블 플래그십 도장 네트워크 (본관 + BKK1점)',
            '국제 및 전국 태권도 대회 메달 40+ 획득',
            '유스 인큐베이터 및 차세대 지도자 양성 과정 출범',
          ],
        },
      },
    },
    {
      year: '2028+',
      era: 'The Global Horizon',
      koreanEra: '올림픽을 향한 미래 비전 (2028+)',
      title: 'The Olympic & World Stage Horizon',
      subtitle: 'Cultivating Cambodia’s Future Olympic Podium',
      badge: 'North Star',
      badgeColor: '#EF2F38',
      desc: 'Our ultimate vision: Cultivating 1,000+ Kukkiwon Dan Black Belts and propelling Cambodian homegrown athletes to stand at the top of World Taekwondo and Olympic podiums.',
      metrics: { label: 'Target Dan Belts', value: '1,000+ Black Belts' },
      highlights: [
        '1,000+ Certified Dan Black Belts across Cambodia',
        'Homegrown athletes representing Cambodia at Olympic Games',
        'Global action cinema & martial arts exhibition tours',
      ],
      quote: {
        text: 'The journey of martial discipline has no finish line. We will put Cambodia on the Olympic podium.',
        author: 'Infinity TKD Manifesto',
      },
      icon: Rocket,
      translations: {
        km: {
          title: 'ចក្ខុវិស័យឆ្ពោះទៅកាន់អូឡាំពិក & ពិភពលោក',
          subtitle: 'បណ្តុះបណ្តាលអត្តពលិកអូឡាំពិកនាពេលអនាគតរបស់កម្ពុជា',
          desc: 'ចក្ខុវិស័យចុងក្រោយ: បណ្តុះបណ្តាលខ្សែក្រវាត់ខ្មៅ Kukkiwon Dan ជាង ១,០០០ នាក់ និងជំរុញអត្តពលិកកម្ពុជាឱ្យឈរលើវេទិកាអូឡាំពិកពិភពលោក។',
          highlights: [
            'ខ្សែក្រវាត់ខ្មៅ Dan ជាង ១,០០០ នាក់ទូទាំងប្រទេសកម្ពុជា',
            'អត្តពលិកកម្ពុជាតំណាងប្រទេសក្នុងការប្រកួតកីឡាអូឡាំពិក',
            'ការសម្តែងភាពយន្តសកម្មភាព និងការតាំងពិព័រណ៍ក្បាច់គុនពិភពលោក',
          ],
        },
        zh: {
          title: '挺进奥运与世界锦标赛最高领奖台',
          subtitle: '培育柬埔寨本土奥运冠军与千名黑带大师',
          desc: '我们的终极宏图：在柬埔寨培养超过 1,000 名国技院认证黑带段位高手，让柬埔寨本土运动员傲然屹立于世界跆拳道与奥运会最高领奖台。',
          highlights: [
            '在全柬埔寨培养 1,000+ 名国技院公认黑带段位人才',
            '输送本土精英选手代表柬埔寨征战奥运会',
            '展开全球影视动作特技与武道文化巡回展演',
          ],
        },
        ko: {
          title: '올림픽 및 세계선수권 금메달을 향하여',
          subtitle: '캄보디아 국적 올림픽 메달리스트 및 1,000명 유단자 육성',
          desc: '우리의 궁극적인 북극성: 캄보디아 전역에 1,000명 이상의 국기원 공인 유단자를 양성하고, 캄보디아 자체 육성 선수를 세계 올림픽 시상대 정상에 올려놓는 것입니다.',
          highlights: [
            '캄보디아 전역 1,000+ 국기원 공인 유단자 양성',
            '캄보디아 국가대표 선수 올림픽 본선 출전 및 메달 획득',
            '글로벌 액션 시네마 및 익스트림 시범단 월드 투어',
          ],
        },
      },
    },
  ]

  const tabs = [
              {
                id: 'story',
                label: language === 'km' ? 'និមិត្តសញ្ញា & អត្តសញ្ញាណ' : language === 'zh' ? '品牌标志与理念' : language === 'ko' ? '브랜드 로고 및 상징' : 'Logo & Identity',
                icon: Compass,
              },
              {
                id: 'mind',
                label: language === 'km' ? 'ខួរក្បាល & ផ្នត់គំនិត' : language === 'zh' ? '无限大脑与心智' : language === 'ko' ? '인피니티 브레인 & 마인드' : 'Brain & Mind',
                icon: Brain,
              },
              {
                id: 'quad',
                label: language === 'km' ? 'ចក្ខុវិស័យ & បេសកកម្ម' : language === 'zh' ? '愿景与使命' : language === 'ko' ? '비전 및 사명' : 'Vision & Mission',
                icon: Target,
              },
              {
                id: 'values',
                label: language === 'km' ? 'គុណតម្លៃស្នូល ៣' : language === 'zh' ? '三大核心价值' : language === 'ko' ? '3대 핵심 가치' : '3 Core Values',
                icon: Flame,
              },
              {
                id: 'tenets',
                label: language === 'km' ? 'វិន័យ ៥' : language === 'zh' ? '道馆五大精神' : language === 'ko' ? '태권도 5대 훈' : '5 Dojang Tenets',
                icon: Shield,
              },
              {
                id: 'journey',
                label: language === 'km' ? 'ដំណើរវិវត្តន៍' : language === 'zh' ? '历史与足迹' : language === 'ko' ? '도장 역사와 발자취' : 'Our Journey',
                icon: Milestone,
              },
              {
                id: 'faculty',
                label: language === 'km' ? 'គណៈគ្រូបង្វឹក' : language === 'zh' ? '教练导师团队' : language === 'ko' ? '수석 지도진' : 'Leadership Faculty',
                icon: Users,
              },
  ] as { id: AboutTab; label: string; icon: React.ElementType }[]

  // Switching section from deep inside a long one brings the new section's top into view.
  const selectTab = (tab: AboutTab) => {
    setActiveTab(tab)
    const panel = panelRef.current
    if (panel && panel.getBoundingClientRect().top < 150) {
      const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      panel.scrollIntoView({ block: 'start', behavior: reduce ? 'auto' : 'smooth' })
    }
  }

  return (
    <div className="overflow-x-hidden">
      <PageHero
        eyebrow={t.about.badge}
        eyebrowIcon={InfinitySymbol}
        title={t.about.heroTitle1}
        accent={t.about.heroTitle2}
        description={t.about.heroSubtitle}
      />

      {/* Section switcher: stays under the navbar while reading. */}
      <div className="sticky top-16 z-30 border-y border-zinc-200 bg-white/90 py-2.5 backdrop-blur-md sm:top-20 dark:border-zinc-800 dark:bg-black/85">
        <div className="container mx-auto flex max-w-7xl justify-center px-4 sm:px-6 lg:px-8">
          <SegmentedControl
            semantics="tabs"
            idBase="about"
            label="About Infinity Taekwondo"
            value={activeTab}
            onChange={selectTab}
            scrollable
            options={tabs.map(({ id, label, icon: Icon }) => ({
              value: id,
              label: (
                <>
                  <Icon className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                  <span>{label}</span>
                </>
              ),
            }))}
          />
        </div>
      </div>

      <div
        ref={panelRef}
        id="about-panel"
        role="tabpanel"
        aria-labelledby={`about-tab-${activeTab}`}
        className="container mx-auto max-w-6xl scroll-mt-32 px-4 py-16 sm:scroll-mt-36 sm:px-6 sm:py-24 lg:px-8"
      >
        {/* ================================================================== */}
        {/* LOGO & IDENTITY */}
        {/* ================================================================== */}
        {activeTab === 'story' && (
          <div className="animate-fade-in space-y-24 sm:space-y-32">
            <section className="grid items-center gap-10 md:grid-cols-12 md:gap-14">
              <div className="md:col-span-5">
                <div className="flex flex-col items-center rounded-2xl border border-zinc-200 bg-zinc-50 px-6 py-10 text-center dark:border-zinc-800 dark:bg-zinc-900/40">
                  <InfinityLogo variant="seal" className="h-44 w-44 sm:h-52 sm:w-52" />
                  <p className="mt-6 text-xs font-bold uppercase tracking-widest text-brand-red">The Official Infinity Seal</p>
                  <p className="mt-2 max-w-xs text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                    Geometric precision incorporating the Taekwondo belt knot into an eternal loop.
                  </p>
                </div>
              </div>

              <div className="md:col-span-7">
                <SectionHeader
                  align="left"
                  size="md"
                  eyebrowStyle="text"
                  eyebrow="Brand Identity"
                  title="The Philosophy of"
                  accent="The Eternal Loop"
                />
                <div className="mt-6 space-y-4 text-base leading-relaxed text-zinc-600 sm:text-lg dark:text-zinc-400">
                  <p>
                    We utilized geometric precision to incorporate the signature{' '}
                    <strong className="font-semibold text-zinc-900 dark:text-white">Taekwondo belt</strong> into an{' '}
                    <strong className="font-semibold text-zinc-900 dark:text-white">eternal loop (∞)</strong>, representing an
                    individual’s journey through discipline—a cycle of growth that has no end.
                  </p>
                  <p>
                    This loop symbolizes the strength, agility, and unwavering focus required to master one’s craft. The icon
                    bridges traditional martial arts philosophy with minimalist modern design.
                  </p>
                </div>
                <dl className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-zinc-200 p-5 dark:border-zinc-800">
                    <dt className="flex items-center gap-2 text-sm font-bold text-zinc-900 dark:text-white">
                      <span className="h-3 w-3 rounded-full bg-brand-red" aria-hidden="true" />
                      Infinity Red #EF2F38
                    </dt>
                    <dd className="mt-1.5 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                      Symbolizes vitality, energy, passion, and the intense indomitable warrior spirit of the practitioner.
                    </dd>
                  </div>
                  <div className="rounded-xl border border-zinc-200 p-5 dark:border-zinc-800">
                    <dt className="text-sm font-bold text-zinc-900 dark:text-white">Korean Origin (태권도)</dt>
                    <dd className="mt-1.5 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                      Honors the art’s traditional origins while positioning the brand for international recognition.
                    </dd>
                  </div>
                </dl>
              </div>
            </section>

            {/* The mark, built from its own parts. */}
            <section>
              <SectionHeader size="md" eyebrowStyle="text" eyebrow="Design Anatomy" title="The Visual" accent="Equation" />
              <div className="mt-10 grid items-center gap-3 rounded-2xl border border-zinc-200 bg-zinc-50 p-5 sm:p-8 md:grid-cols-[1fr_auto_1fr_auto_1fr] md:gap-5 dark:border-zinc-800 dark:bg-zinc-900/40">
                <EquationTerm label="Taekwondo Belt Knot" note="Traditional Root">
                  <LogoParts parts={['knot']} viewBox="248 322 78 46" />
                </EquationTerm>
                <Operator symbol="+" label="plus" />
                <EquationTerm label="Eternal Loop" note="Limitless Growth">
                  <LogoParts parts={['left', 'right']} />
                </EquationTerm>
                <Operator symbol="=" label="equals" />
                <EquationTerm label="Infinity TKD Mark" note="Global Martial Identity" highlight>
                  <LogoParts parts={['left', 'knot', 'right']} />
                </EquationTerm>
              </div>
            </section>

            {/* The mark in each rank colour. */}
            <section>
              <SectionHeader
                size="md"
                eyebrowStyle="text"
                eyebrow="Rank-Based Identity"
                title="Belt Mark"
                accent="Variations"
                description="On official diplomas and certificates, our signature belt loop adapts to the athlete's earned rank color."
              />
              <div className="mt-10 grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-3 lg:grid-cols-8">
                {beltPalette.map((belt) => {
                  const isSelected = selectedBeltColor === belt.id
                  return (
                    <button
                      key={belt.id}
                      type="button"
                      onClick={() => setSelectedBeltColor(belt.id)}
                      aria-pressed={isSelected}
                      className={cn(
                        'flex min-h-[76px] cursor-pointer flex-col items-center justify-center gap-2 rounded-xl border bg-white p-3 text-center transition-colors duration-300 dark:bg-zinc-900/40',
                        isSelected
                          ? 'border-brand-red'
                          : 'border-zinc-200 hover:border-zinc-400 dark:border-zinc-800 dark:hover:border-zinc-600'
                      )}
                    >
                      <span
                        aria-hidden="true"
                        className="h-6 w-6 rounded-lg border"
                        style={{ backgroundColor: belt.hex, borderColor: belt.border }}
                      />
                      <span className="text-xs font-bold leading-tight text-zinc-900 dark:text-white">{belt.shortName}</span>
                    </button>
                  )
                })}
              </div>

              {(() => {
                const belt = beltPalette.find((b) => b.id === selectedBeltColor) || beltPalette[5]
                return (
                  <div
                    key={belt.id}
                    className="mt-4 flex animate-fade-in flex-col gap-6 rounded-2xl border border-zinc-200 bg-zinc-50 p-6 sm:p-8 md:flex-row md:items-center dark:border-zinc-800 dark:bg-zinc-900/40"
                  >
                    <div
                      className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl border"
                      style={{ backgroundColor: belt.hex, borderColor: belt.border }}
                    >
                      <InfinityLogo
                        variant="symbol"
                        className="h-10 w-10"
                        colorScheme="custom"
                        brandColor={belt.textDark ? '#000000' : '#FFFFFF'}
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                        <h3 className="text-lg font-black uppercase tracking-tight text-zinc-900 sm:text-xl dark:text-white">
                          {belt.name}
                        </h3>
                        <span className="text-xs font-bold text-brand-red">{belt.korean}</span>
                      </div>
                      <p className="mt-1 text-sm font-semibold text-zinc-800 dark:text-zinc-200">{belt.meaning}</p>
                      <p className="mt-1.5 max-w-xl text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{belt.philosophy}</p>
                    </div>
                    <dl className="shrink-0 md:text-right">
                      <dt className="text-[11px] font-semibold uppercase tracking-[0.14em] text-zinc-500">
                        {t.beltGuide.timeFromStart}
                      </dt>
                      <dd className="mt-1 text-sm font-bold text-zinc-900 dark:text-white">{belt.timeline}</dd>
                      <dd className="mt-1 text-xs text-zinc-500">{belt.hex}</dd>
                    </dl>
                  </div>
                )
              })()}
            </section>
          </div>
        )}

        {/* ================================================================== */}
        {/* BRAIN & MIND */}
        {/* ================================================================== */}
        {activeTab === 'mind' && (
          <div className="animate-fade-in space-y-24 sm:space-y-32">
            <InfinityBrainAnimation />

            <section>
              <SectionHeader
                size="md"
                title="The 4 Pillars of the"
                accent="Martial Mind"
                description="True mastery starts in the mind. At Infinity Taekwondo, physical strikes are merely the outer expression of inner psychological focus, emotional control, and scientific strategy."
              />
              <div className="mt-10 grid gap-5 md:grid-cols-2 lg:gap-6">
                {brainPrinciples.map((item) => (
                  <InfoCard
                    key={item.number}
                    icon={item.icon}
                    number={item.number}
                    title={item.title}
                    korean={item.korean}
                    footer={item.metric}
                  >
                    {item.desc}
                  </InfoCard>
                ))}
              </div>
            </section>
          </div>
        )}

        {/* ================================================================== */}
        {/* VISION, MISSION, GOAL & DREAM */}
        {/* ================================================================== */}
        {activeTab === 'quad' && (
          <section className="animate-fade-in">
            <SectionHeader
              size="md"
              eyebrowStyle="text"
              eyebrow="Our Direction"
              title="Vision, Mission,"
              accent="Goal & Dream"
              description="Our comprehensive directional framework driving every class, coach, curriculum, and athlete at Infinity Taekwondo."
            />
            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:gap-6">
              {quadPillars.map((pillar) => (
                <InfoCard
                  key={pillar.id}
                  icon={pillar.icon}
                  kicker={pillar.badge}
                  title={pillar.title}
                  korean={pillar.korean}
                  tagline={pillar.tagline}
                  footer={pillar.target}
                >
                  {pillar.desc}
                </InfoCard>
              ))}
            </div>
          </section>
        )}

        {/* ================================================================== */}
        {/* 3 CORE VALUES */}
        {/* ================================================================== */}
        {activeTab === 'values' && (
          <section className="animate-fade-in">
            <SectionHeader
              size="md"
              eyebrowStyle="text"
              eyebrow="Foundational DNA"
              title={t.about.valuesTitle1}
              accent={t.about.valuesTitle2}
              description={t.about.valuesSubtitle}
            />
            <div className="mt-10 grid gap-5 md:grid-cols-3 lg:gap-6">
              {coreValues.map((val) => (
                <InfoCard
                  key={val.title}
                  icon={val.icon}
                  number={val.number}
                  title={val.title}
                  korean={val.korean}
                  tagline={val.tagline}
                  quote={val.quote}
                >
                  {val.description}
                </InfoCard>
              ))}
            </div>
          </section>
        )}

        {/* ================================================================== */}
        {/* 5 DOJANG TENETS */}
        {/* ================================================================== */}
        {activeTab === 'tenets' && (
          <section className="animate-fade-in">
            <SectionHeader
              size="md"
              eyebrowStyle="text"
              eyebrow={t.tenets.badge}
              title={t.about.tenetsTitle1}
              accent={t.about.tenetsTitle2}
              description={t.about.tenetsSubtitle}
            />
            <ol className="mt-10 divide-y divide-zinc-200 rounded-2xl border border-zinc-200 dark:divide-zinc-800 dark:border-zinc-800">
              {dojangTenets.map((tenet) => (
                <li key={tenet.name} className="flex gap-8 p-6 sm:p-8">
                  <span aria-hidden="true" className="hidden w-12 shrink-0 text-3xl font-black text-zinc-400 sm:block">
                    {tenet.number}
                  </span>
                  <div>
                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                      <span aria-hidden="true" className="text-xl font-black text-zinc-400 sm:hidden">
                        {tenet.number}
                      </span>
                      <h3 className="text-xl font-black uppercase tracking-tight text-zinc-900 dark:text-white">{tenet.name}</h3>
                      <span className="text-sm font-bold text-brand-red">{tenet.korean}</span>
                      <span className="text-xs text-zinc-500">[{tenet.pronunciation}]</span>
                    </div>
                    <p className="mt-2 text-sm font-medium leading-relaxed text-zinc-700 dark:text-zinc-300">{tenet.principle}</p>
                    <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                      <span className="font-semibold text-zinc-900 dark:text-white">Daily action:</span> {tenet.application}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </section>
        )}

        {/* ================================================================== */}
        {/* OUR JOURNEY */}
        {/* ================================================================== */}
        {activeTab === 'journey' &&
          (() => {
            const getLocalizedMilestone = (m: (typeof milestones)[0]) => {
              if (language === 'en') return m
              const trans = m.translations?.[language]
              if (!trans) return m
              return {
                ...m,
                title: trans.title || m.title,
                subtitle: trans.subtitle || m.subtitle,
                desc: trans.desc || m.desc,
                highlights: trans.highlights || m.highlights,
              }
            }
            const currentIndex = Math.max(0, milestones.findIndex((m) => m.year === selectedEraYear))
            const currentM = getLocalizedMilestone(milestones[currentIndex])

            return (
              <section className="animate-fade-in">
                <SectionHeader
                  size="md"
                  eyebrowStyle="text"
                  eyebrow="Evolution of Excellence"
                  title="The Journey of"
                  accent="Infinity TKD"
                  description="From a dedicated grassroots dojang to Cambodia’s premier high-performance sport science and martial academy."
                />
                <div className="mt-8 flex justify-center">
                  <SegmentedControl
                    label="Journey view"
                    value={journeyViewMode}
                    onChange={setJourneyViewMode}
                    options={[
                      { value: 'interactive', label: 'Era Showcase' },
                      { value: 'timeline', label: 'Full Chronology' },
                    ]}
                  />
                </div>

                {journeyViewMode === 'interactive' && (
                  <div className="mt-10 animate-fade-in space-y-4">
                    <div className="grid grid-cols-2 gap-2 sm:grid-cols-5 sm:gap-3">
                      {milestones.map((m) => {
                        const isSelected = selectedEraYear === m.year
                        return (
                          <button
                            key={m.year}
                            type="button"
                            onClick={() => setSelectedEraYear(m.year)}
                            aria-pressed={isSelected}
                            className={cn(
                              'flex min-h-[76px] cursor-pointer flex-col items-start justify-center gap-1 rounded-xl border bg-white p-4 text-left transition-colors duration-300 dark:bg-zinc-900/40',
                              isSelected
                                ? 'border-brand-red'
                                : 'border-zinc-200 hover:border-zinc-400 dark:border-zinc-800 dark:hover:border-zinc-600'
                            )}
                          >
                            <span
                              className={cn(
                                'text-xl font-black tabular-nums tracking-tight',
                                isSelected ? 'text-brand-red' : 'text-zinc-900 dark:text-white'
                              )}
                            >
                              {m.year}
                            </span>
                            <span className="w-full truncate text-xs font-semibold text-zinc-500">{m.era}</span>
                          </button>
                        )
                      })}
                    </div>

                    <div
                      key={currentM.year}
                      className="grid animate-fade-in gap-8 rounded-2xl border border-zinc-200 bg-zinc-50 p-6 sm:p-10 md:grid-cols-12 dark:border-zinc-800 dark:bg-zinc-900/40"
                    >
                      <div className="md:col-span-7">
                        <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                          <span className="rounded-lg bg-zinc-200/70 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
                            {currentM.badge}
                          </span>
                          <span className="text-xs font-semibold text-zinc-500">{currentM.koreanEra}</span>
                        </div>
                        <p className="mt-5 text-5xl font-black leading-none tracking-tight text-brand-red tabular-nums sm:text-6xl">
                          {currentM.year}
                        </p>
                        <h3 className="mt-3 text-2xl font-black uppercase tracking-tight text-zinc-900 sm:text-3xl dark:text-white">
                          {currentM.title}
                        </h3>
                        <p className="mt-2 text-sm font-semibold text-zinc-700 dark:text-zinc-300">{currentM.subtitle}</p>
                        <p className="mt-4 text-sm leading-relaxed text-zinc-600 sm:text-base dark:text-zinc-400">{currentM.desc}</p>
                        <figure className="mt-6 border-l-2 border-brand-red/40 pl-4">
                          <blockquote className="text-sm italic leading-relaxed text-zinc-700 dark:text-zinc-300">
                            “{currentM.quote.text}”
                          </blockquote>
                          <figcaption className="mt-2 text-xs font-semibold text-zinc-500">— {currentM.quote.author}</figcaption>
                        </figure>
                      </div>

                      <div className="space-y-4 md:col-span-5">
                        <div className="rounded-xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-950">
                          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-zinc-500">{currentM.metrics.label}</p>
                          <p className="mt-1 text-2xl font-black tracking-tight text-zinc-900 sm:text-3xl dark:text-white">
                            {currentM.metrics.value}
                          </p>
                        </div>
                        <div className="rounded-xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-950">
                          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-zinc-500">Milestone Breakthroughs</p>
                          <ul className="mt-3 space-y-2.5">
                            {currentM.highlights.map((h, i) => (
                              <li key={i} className="flex items-start gap-2.5 text-sm text-zinc-700 dark:text-zinc-300">
                                <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-red" aria-hidden="true" />
                                <span className="leading-snug">{h}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="flex gap-3">
                          <button
                            type="button"
                            onClick={() => setSelectedEraYear(milestones[currentIndex - 1].year)}
                            disabled={currentIndex === 0}
                            className={buttonStyles({ variant: 'outline', size: 'sm', className: 'flex-1' })}
                          >
                            <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" /> Previous Era
                          </button>
                          <button
                            type="button"
                            onClick={() => setSelectedEraYear(milestones[currentIndex + 1].year)}
                            disabled={currentIndex === milestones.length - 1}
                            className={buttonStyles({ variant: 'outline', size: 'sm', className: 'flex-1' })}
                          >
                            Next Era <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {journeyViewMode === 'timeline' && (
                  <ol className="relative ml-2 mt-10 animate-fade-in space-y-6 border-l border-zinc-200 sm:ml-4 dark:border-zinc-800">
                    {milestones.map((m) => {
                      const lm = getLocalizedMilestone(m)
                      return (
                        <li key={m.year} className="relative pl-6 sm:pl-10">
                          <span
                            aria-hidden="true"
                            className="absolute -left-[5.5px] top-7 h-2.5 w-2.5 rounded-full bg-brand-red ring-4 ring-white sm:top-9 dark:ring-black"
                          />
                          <article className="rounded-2xl border border-zinc-200 bg-white p-6 sm:p-8 dark:border-zinc-800 dark:bg-zinc-900/40">
                            <div className="flex flex-wrap items-center justify-between gap-3">
                              <p className="flex items-baseline gap-3">
                                <span className="text-3xl font-black tabular-nums text-brand-red">{m.year}</span>
                                <span className="text-xs font-semibold text-zinc-500">{m.koreanEra}</span>
                              </p>
                              <span className="rounded-lg bg-zinc-100 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
                                {m.badge}
                              </span>
                            </div>
                            <h3 className="mt-3 text-xl font-black uppercase tracking-tight text-zinc-900 sm:text-2xl dark:text-white">
                              {lm.title}
                            </h3>
                            <p className="mt-1 text-sm font-semibold text-zinc-700 dark:text-zinc-300">{lm.subtitle}</p>
                            <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{lm.desc}</p>
                            <ul className="mt-4 flex flex-wrap gap-2 border-t border-zinc-200 pt-4 dark:border-zinc-800">
                              {lm.highlights.map((h, i) => (
                                <li
                                  key={i}
                                  className="rounded-lg bg-zinc-100 px-2.5 py-1 text-xs font-medium text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
                                >
                                  {h}
                                </li>
                              ))}
                            </ul>
                          </article>
                        </li>
                      )
                    })}
                  </ol>
                )}
              </section>
            )
          })()}

        {/* ================================================================== */}
        {/* LEADERSHIP FACULTY */}
        {/* ================================================================== */}
        {activeTab === 'faculty' && (
          <section className="animate-fade-in">
            <SectionHeader
              size="md"
              eyebrowStyle="text"
              eyebrow="Executive Leadership"
              title={t.about.facultyTitle1}
              accent={t.about.facultyTitle2}
              description={t.about.facultySubtitle}
            />
            <SafeGrid className="mt-10 grid grid-cols-2 gap-x-4 gap-y-8 sm:gap-x-6 lg:grid-cols-4" isolateItems>
              {localizedTeam.map((member) => (
                <button
                  key={member.id}
                  type="button"
                  onClick={() => openMember(member)}
                  aria-haspopup="dialog"
                  className="group block w-full cursor-pointer text-left"
                >
                  <span className="block aspect-[3/4] overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900">
                    <SafeImage
                      src={member.image}
                      alt=""
                      className="h-full w-full object-cover transition-transform duration-500 ease-out-expo group-hover:scale-[1.03] motion-reduce:transition-none"
                    />
                  </span>
                  <span className="mt-4 block text-base font-black uppercase leading-tight tracking-tight text-zinc-900 transition-colors group-hover:text-brand-red sm:text-lg dark:text-white">
                    {member.name}
                  </span>
                  <span className="mt-1 block text-xs font-bold uppercase tracking-wider text-brand-red">{member.role}</span>
                </button>
              ))}
            </SafeGrid>
          </section>
        )}
      </div>

      {/* ==================================================================== */}
      {/* COLLABORATIONS */}
      {/* ==================================================================== */}
      <section className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="border-t border-zinc-200 pt-16 sm:pt-24 dark:border-zinc-800">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeader
              align="left"
              size="md"
              eyebrowStyle="text"
              eyebrow="Institutional Ecosystem"
              title="Global Collaborations"
              accent="& Alliances"
              description="Infinity Taekwondo aligns with international governing bodies, Seoul Kukkiwon headquarters, sport universities, and performance gear innovators."
              className="max-w-2xl"
            />
            <Link
              href="/collaborations"
              className={buttonStyles({ variant: 'outline', className: 'shrink-0 self-start md:self-auto' })}
            >
              Explore All Partners <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <SafeGrid className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4" isolateItems>
            {collaborationsData.slice(0, 4).map((partner) => (
              <Link
                key={partner.id}
                href="/collaborations"
                className="group flex h-full flex-col rounded-2xl border border-zinc-200 bg-white p-5 transition-[transform,border-color] duration-300 ease-out-expo hover:-translate-y-0.5 hover:border-zinc-300 motion-reduce:transition-none motion-reduce:hover:translate-y-0 dark:border-zinc-800 dark:bg-zinc-900/40 dark:hover:border-zinc-700"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="h-12 w-12 shrink-0 overflow-hidden rounded-lg border border-zinc-200 bg-white p-1 dark:border-zinc-800">
                    {/* next/image: the source PNGs are up to ~1 MB; this serves a 40px WebP. */}
                    <Image
                      src={partner.logo}
                      alt=""
                      width={40}
                      height={40}
                      className="h-full w-full rounded object-cover grayscale transition-[filter] duration-300 group-hover:grayscale-0"
                    />
                  </span>
                  <span className="rounded-md bg-zinc-100 px-2 py-0.5 text-[11px] font-bold uppercase tracking-wider text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300">
                    {partner.tier}
                  </span>
                </div>
                <h3 className="mt-4 line-clamp-1 text-sm font-black uppercase tracking-tight text-zinc-900 dark:text-white">
                  {partner.name}
                </h3>
                <p className="mt-0.5 truncate text-xs text-zinc-500">{partner.partnerType}</p>
                <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{partner.summary}</p>
                <div className="mt-auto flex items-center justify-between pt-4 text-xs text-zinc-500">
                  <span>{partner.country}</span>
                  <span className="inline-flex items-center gap-1 font-bold uppercase tracking-wider text-brand-red">
                    View
                    <ArrowRight
                      className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </span>
                </div>
              </Link>
            ))}
          </SafeGrid>
        </div>
      </section>

      {/* ==================================================================== */}
      {/* CLOSING CALL TO ACTION */}
      {/* ==================================================================== */}
      <section className="container mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
        <CtaBanner
          eyebrow="Experience The Standard"
          title="Train Where Discipline Meets Limitless Potential"
          description="Step onto the mats at our Factory Phnom Penh HQ or BKK1 Elite Center. Experience world-class instruction, athletic testing, and personalized mentorship."
          href="/contact"
          label="Book Free Trial"
          secondary={{ href: '/locations', label: 'View Dojang Branches' }}
        />
      </section>

      {/* ==================================================================== */}
      {/* LEADERSHIP PROFILE (sheet on phones, centred dialog from tablet up) */}
      {/* ==================================================================== */}
      {selectedMember && (
        <div
          className="fixed inset-0 z-[60] flex animate-fade-in items-end justify-center p-0 sm:items-center sm:p-6"
          onClick={closeMember}
          role="dialog"
          aria-modal="true"
          aria-labelledby="member-modal-title"
        >
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

          <div
            className="relative z-10 flex max-h-[92vh] w-full max-w-4xl flex-col overflow-hidden rounded-t-2xl border border-zinc-200 bg-white shadow-2xl sm:max-h-[90vh] sm:rounded-2xl md:flex-row dark:border-zinc-800 dark:bg-zinc-950"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              ref={closeRef}
              type="button"
              onClick={closeMember}
              className="absolute right-4 top-4 z-30 flex h-11 w-11 cursor-pointer items-center justify-center rounded-xl bg-black/50 text-white backdrop-blur-md transition-colors hover:bg-black/70"
              aria-label="Close dialog"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>

            <div className="relative h-56 w-full shrink-0 bg-zinc-100 sm:h-80 md:h-auto md:w-5/12 dark:bg-zinc-900">
              <SafeImage src={selectedMember.image} alt={selectedMember.name} className="h-full w-full object-cover" />
            </div>

            <div className="touch-scroll w-full space-y-6 overflow-y-auto p-6 sm:p-8 md:w-7/12 md:p-10">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-brand-red">{selectedMember.role}</p>
                <h3
                  id="member-modal-title"
                  className="mt-2 text-2xl font-black uppercase tracking-tight text-zinc-900 sm:text-3xl dark:text-white"
                >
                  {selectedMember.name}
                </h3>
                <p className="mt-1 text-sm font-semibold text-zinc-500">{selectedMember.division}</p>
              </div>

              <div className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">{selectedMember.bio}</div>

              <div>
                <h4 className="text-[11px] font-semibold uppercase tracking-[0.14em] text-zinc-500">Credentials &amp; Dan Ranks</h4>
                <ul className="mt-2 flex flex-wrap gap-2">
                  {selectedMember.credentials.map((cred) => (
                    <li
                      key={cred}
                      className="rounded-lg bg-zinc-100 px-2.5 py-1 text-xs font-semibold text-zinc-800 dark:bg-zinc-800 dark:text-zinc-200"
                    >
                      {cred}
                    </li>
                  ))}
                </ul>
              </div>

              <ul className="flex flex-wrap gap-2">
                {selectedMember.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-lg border border-zinc-200 px-2.5 py-1 text-xs font-medium text-zinc-600 dark:border-zinc-800 dark:text-zinc-400"
                  >
                    {tag}
                  </li>
                ))}
              </ul>

              <div className="flex flex-col items-center justify-between gap-4 border-t border-zinc-200 pt-5 sm:flex-row dark:border-zinc-800">
                <div className="flex gap-2">
                  {(
                    [
                      ['instagram', Instagram, 'Instagram'],
                      ['linkedin', Linkedin, 'LinkedIn'],
                      ['facebook', Facebook, 'Facebook'],
                    ] as const
                  ).map(([key, Icon, name]) => {
                    const href = selectedMember.socials?.[key]
                    if (!href) return null
                    return (
                      <a
                        key={key}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={name}
                        className="flex h-11 w-11 items-center justify-center rounded-xl border border-zinc-200 text-zinc-600 transition-colors hover:border-zinc-400 hover:text-zinc-900 dark:border-zinc-800 dark:text-zinc-400 dark:hover:border-zinc-600 dark:hover:text-white"
                      >
                        <Icon className="h-4 w-4" aria-hidden="true" />
                      </a>
                    )
                  })}
                </div>

                <Link
                  href={`/contact?subject=Direct%20Inquiry%20with%20${encodeURIComponent(selectedMember.name)}`}
                  className={buttonStyles({ variant: 'primary', className: 'w-full sm:w-auto' })}
                >
                  Contact Dojang <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

/* ------------------------------------------------------------------------------------------------
   Building blocks used by the sections above.
   ------------------------------------------------------------------------------------------------ */

/** The Infinity symbol sized for the page-hero eyebrow. */
function InfinitySymbol({ className }: { className?: string }) {
  return <InfinityLogo variant="symbol" className={className} />
}

type LogoPart = 'left' | 'knot' | 'right'

/** Draws parts of the Infinity mark from the logo's own paths (fills with the text colour). */
function LogoParts({ parts, viewBox = INFINITY_SYMBOL.viewBox }: { parts: LogoPart[]; viewBox?: string }) {
  return (
    <svg viewBox={viewBox} className="h-full w-auto fill-current" aria-hidden="true" focusable="false">
      {parts.map((part) => (
        <path key={part} d={INFINITY_SYMBOL[part]} />
      ))}
    </svg>
  )
}

function EquationTerm({
  label,
  note,
  highlight = false,
  children,
}: {
  label: string
  note: string
  highlight?: boolean
  children: React.ReactNode
}) {
  return (
    <div
      className={cn(
        'flex flex-col items-center rounded-xl border bg-white px-4 py-7 text-center dark:bg-zinc-950',
        highlight ? 'border-brand-red/40' : 'border-zinc-200 dark:border-zinc-800'
      )}
    >
      <div className={cn('h-12', highlight ? 'text-brand-red' : 'text-zinc-800 dark:text-zinc-200')}>{children}</div>
      <p className={cn('mt-5 text-xs font-bold uppercase tracking-wider', highlight ? 'text-brand-red' : 'text-zinc-900 dark:text-white')}>
        {label}
      </p>
      <p className="mt-1 text-xs text-zinc-500">{note}</p>
    </div>
  )
}

function Operator({ symbol, label }: { symbol: string; label: string }) {
  return (
    <span className="text-center text-2xl font-light text-zinc-400">
      <span aria-hidden="true">{symbol}</span>
      <span className="sr-only">{label}</span>
    </span>
  )
}

/** One card style for the pillars, values and directions: icon, title, Korean term, copy. */
function InfoCard({
  icon: Icon,
  kicker,
  number,
  title,
  korean,
  tagline,
  quote,
  footer,
  children,
}: {
  icon: React.ElementType
  kicker?: string
  number?: string
  title: string
  korean?: string
  tagline?: string
  quote?: string
  footer?: string
  children: React.ReactNode
}) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-zinc-200 bg-white p-6 sm:p-8 dark:border-zinc-800 dark:bg-zinc-900/40">
      <div className="flex items-center justify-between gap-3">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </span>
        {kicker && <span className="text-right text-[11px] font-semibold uppercase tracking-[0.14em] text-zinc-500">{kicker}</span>}
        {number && (
          <span aria-hidden="true" className="text-sm font-bold tabular-nums text-zinc-500">
            {number}
          </span>
        )}
      </div>
      <h3 className="mt-6 text-xl font-black uppercase tracking-tight text-zinc-900 sm:text-2xl dark:text-white">{title}</h3>
      {korean && <p className="mt-1 text-xs font-bold tracking-wide text-brand-red">{korean}</p>}
      {tagline && <p className="mt-4 text-sm font-semibold leading-snug text-zinc-800 dark:text-zinc-200">{tagline}</p>}
      <p className={cn('text-sm leading-relaxed text-zinc-600 dark:text-zinc-400', tagline ? 'mt-2' : 'mt-4')}>{children}</p>
      {quote && (
        <blockquote className="mt-5 border-l-2 border-brand-red/40 pl-4 text-sm italic leading-relaxed text-zinc-600 dark:text-zinc-400">
          “{quote}”
        </blockquote>
      )}
      {footer && (
        <div className="mt-auto pt-6">
          <p className="border-t border-zinc-200 pt-4 text-xs font-semibold text-zinc-500 dark:border-zinc-800">{footer}</p>
        </div>
      )}
    </article>
  )
}
