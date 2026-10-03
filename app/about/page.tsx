'use client'

import * as React from 'react'
import Link from 'next/link'
import {
  ArrowUpRight,
  X,
  Instagram,
  Linkedin,
  Facebook,
  Youtube,
  Eye,
  Target,
  Shield,
  Zap,
  Flame,
  Award,
  ArrowRight,
  Sparkles,
  BookOpen,
  Users,
  Compass,
  CheckCircle2,
  Quote,
  Brain,
  Rocket,
  Heart,
  Layers,
  Palette,
  Check,
  Building2,
  Calendar,
  ChevronRight,
  Activity,
  Milestone,
} from 'lucide-react'
import { teamMembers, type TeamMember } from '@/data/team'
import { collaborationsData } from '@/data/collaborations'
import { InfinityLogo } from '@/components/InfinityLogo'
import { InfinityBrainAnimation } from '@/components/InfinityBrainAnimation'
import { SafeImage } from '@/components/SafeImage'
import { SafeGrid } from '@/components/SafeGrid'
import { Card3D } from '@/components/ui/Card3D'
import { useLanguage } from '@/context/LanguageContext'

export default function AboutPage() {
  const { t, localizeList } = useLanguage()
  const [selectedMember, setSelectedMember] = React.useState<TeamMember | null>(null)
  const [activeTab, setActiveTab] = React.useState<
    'story' | 'mind' | 'quad' | 'values' | 'tenets' | 'journey' | 'faculty'
  >('story')
  const [selectedBeltColor, setSelectedBeltColor] = React.useState<string>('Red Belt')

  const localizedTeam = React.useMemo(() => {
    return localizeList(teamMembers)
  }, [localizeList])

  const openMember = (member: TeamMember) => {
    setSelectedMember(member)
  }

  const closeMember = () => {
    setSelectedMember(null)
  }

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedMember(null)
      }
    }
    if (selectedMember) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [selectedMember])

  const beltPalette = [
    {
      name: 'White Belt',
      korean: '백띠 (10th-9th Geup)',
      hex: '#FFFFFF',
      border: '#d4d4d8',
      textDark: true,
      meaning: "Purity & Beginner's Mind (Baek-ji)",
      philosophy: 'The blank slate and fertile soil where martial discipline, respect, and fundamental stances take root.',
      timeline: '2-3 Months',
    },
    {
      name: 'Yellow Belt',
      korean: '노란띠 (8th-7th Geup)',
      hex: '#FFD505',
      border: '#D4AF37',
      textDark: true,
      meaning: 'The Rising Sun & Earth Roots',
      philosophy: 'The earth where the seed of martial arts sprouts, building balance in Ap-seogi and basic front kicks.',
      timeline: '3-4 Months',
    },
    {
      name: 'Green Belt',
      korean: '초록띠 (6th-5th Geup)',
      hex: '#09BB00',
      border: '#078800',
      textDark: false,
      meaning: 'Growth & Sprouting Power',
      philosophy: 'The tree developing strong leaves as turning kicks, side kicks, and Taegeuk 3-4 precision take shape.',
      timeline: '4-6 Months',
    },
    {
      name: 'Blue Belt',
      korean: '파란띠 (4th-3rd Geup)',
      hex: '#0042EA',
      border: '#002BB0',
      textDark: false,
      meaning: 'Sky & Upward Martial Ambition',
      philosophy: 'Reaching toward the heavens as sparring strategy, spinning kicks, and aerial velocity mature.',
      timeline: '6-8 Months',
    },
    {
      name: 'Brown Belt',
      korean: '밤띠 (2nd-1st Geup)',
      hex: '#A05B00',
      border: '#6F3E00',
      textDark: false,
      meaning: 'Grounded Stability & Ripening Skill',
      philosophy: 'Deep roots anchoring the athlete in tactical patience, sparring composure, and junior leadership.',
      timeline: '6-8 Months',
    },
    {
      name: 'Red Belt',
      korean: '빨간띠 (Candidate Dan)',
      hex: '#EF2F38',
      border: '#B12027',
      textDark: false,
      meaning: 'Danger, Intense Energy & Supreme Restraint',
      philosophy: 'Immense kinetic force requiring supreme mental self-control, emotional poise, and humility.',
      timeline: '8-12 Months',
    },
    {
      name: 'Black Belt (1st-5th Dan)',
      korean: '검은띠 (Kukkiwon Dan)',
      hex: '#000000',
      border: '#3f3f46',
      textDark: false,
      meaning: 'Mastery & The Dawn of True Learning',
      philosophy: 'Total synthesis of mind, body, and spirit. The end of one journey and the true beginning of leadership.',
      timeline: '3-4+ Years',
    },
  ]

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
      desc: 'Olympic-level sparring demands instant recognition of open guard angles in under 180 milliseconds, training the brain to strike decisively ahead of the opponent’s kinetic telegraph.',
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
      desc: 'Pioneered Cambodia’s first martial arts sport science laboratory. Deployed Daedo electronic sparring sensors, 240 FPS kinematic cameras, and tendon durability conditioning.',
      metrics: { label: 'Telemetry Precision', value: '240 FPS Video Rig' },
      highlights: [
        'Daedo Electronic Sensor Body Protector Scoring Ring',
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
          desc: 'ត្រួសត្រាយផ្លូវមន្ទីរពិសោធន៍វិទ្យាសាស្ត្រកីឡាក្បាច់គុនដំបូងបង្អស់នៅកម្ពុជា។ បំពាក់ Daedo Sensor ប្រព័ន្ធកាមេរ៉ាល្បឿនលឿន ២៤០ FPS និងការការពារសរសៃសន្លាក់។',
          highlights: [
            'ទីលានប្រកួតពិន្ទុអេឡិចត្រូនិច Daedo Sensor',
            'ការវិភាគមុំសន្លាក់តាមរយៈកាមេរ៉ាល្បឿនលឿន',
            'មន្ទីរពិសោធន៍កម្លាំងកាយ Calisthenics & ពង្រឹងសរសៃពួរ',
          ],
        },
        zh: {
          title: '运动生物力学与运动科学实验室',
          subtitle: '传感器遥测、高速运镜与自重相对力量强化',
          desc: '开创全柬首个武道运动科学实验室。引入 Daedo 电子护具打分系统、240帧高速关节角度捕捉以及肌腱韧性抗伤协议。',
          highlights: [
            '配备 Daedo 国际电子感应竞技实战八角台',
            '高速摄影机 240FPS 动作姿态与发力角度审计',
            '街头健身相对力量与肌腱抗负荷强化系统',
          ],
        },
        ko: {
          title: '스포츠 생체역학 과학 연구 랩 구축',
          subtitle: '전자호구 센서 시스템, 고속 촬영 & 근력 강화',
          desc: '캄보디아 최초의 무도 스포츠 사이언스 연구실을 출범. 대도(Daedo) 전자호구 시스템과 240 FPS 초고속 카메라 관절 궤적 분석을 도입했습니다.',
          highlights: [
            '대도(Daedo) 전자 센서 전자호구 겨루기 경기장 완비',
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

  return (
    <div className="bg-white dark:bg-black text-zinc-900 dark:text-white min-h-screen font-sans selection:bg-brand-red selection:text-white transition-colors duration-500 overflow-x-hidden">
      {/* ==================================================================== */}
      {/* HERO HEADER */}
      {/* ==================================================================== */}
      <section className="relative pt-24 sm:pt-28 pb-14 sm:pb-18 px-4 sm:px-6 overflow-hidden text-center">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-b from-brand-red/10 via-white to-white dark:from-brand-red/20 dark:via-black dark:to-black z-10" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-brand-red/10 blur-[150px] rounded-full pointer-events-none" />
        </div>

        <div className="container mx-auto relative z-20 max-w-4xl">
          <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-xl border border-brand-red/30 bg-brand-red/10 text-brand-red text-xs font-bold uppercase tracking-widest mb-4 backdrop-blur-md shadow-brand-glow">
            <InfinityLogo variant="symbol" className="w-4 h-4" /> {t.about.badge}
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight mb-4 sm:mb-6 uppercase leading-none text-zinc-900 dark:text-white break-words">
            {t.about.heroTitle1} <span className="text-brand-red">{t.about.heroTitle2}</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto leading-relaxed font-light px-2">
            {t.about.heroSubtitle}
          </p>
        </div>
      </section>

      {/* ==================================================================== */}
      {/* INTERACTIVE PHILOSOPHY NAVIGATION TABS (12px radius) */}
      {/* ==================================================================== */}
      <section className="py-3 sm:py-4 border-y border-zinc-200 dark:border-zinc-800 bg-zinc-50/95 dark:bg-zinc-950/95 sticky top-16 sm:top-20 z-30 backdrop-blur-xl">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-2.5">
            {[
              { id: 'story', label: 'Logo & Brand Identity', icon: Compass },
              { id: 'mind', label: 'Infinity Brain & Mind', icon: Brain },
              { id: 'quad', label: 'Vision, Mission & Goals', icon: Target },
              { id: 'values', label: '3 Core Values', icon: Flame },
              { id: 'tenets', label: '5 Dojang Tenets', icon: Shield },
              { id: 'journey', label: 'Our Journey', icon: Milestone },
              { id: 'faculty', label: 'Leadership Faculty', icon: Users },
            ].map((tab) => {
              const Icon = tab.icon
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl text-[11px] sm:text-xs font-black uppercase tracking-widest transition-all duration-300 flex items-center gap-1.5 sm:gap-2 touch-press cursor-pointer ${
                    activeTab === tab.id
                      ? 'bg-brand-red text-white shadow-brand-glow'
                      : 'bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 border border-zinc-200 dark:border-zinc-800'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" /> {tab.label}
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {/* ==================================================================== */}
      {/* TAB 1: LOGO DESIGN PHILOSOPHY & ANATOMY */}
      {/* ==================================================================== */}
      {activeTab === 'story' && (
        <div className="animate-fade-in space-y-16 sm:space-y-24 py-16 sm:py-24">
          {/* Logo Meaning Narrative */}
          <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-center">
              <div className="md:col-span-5 flex justify-center">
                <div className="relative p-6 sm:p-10 rounded-[14px] bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 shadow-2xl flex flex-col items-center text-center w-full max-w-sm">
                  <div className="relative">
                    <InfinityLogo variant="seal" className="w-44 sm:w-56 h-44 sm:h-56 mb-4 sm:mb-6 drop-shadow-brand-glow" />
                  </div>
                  <span className="text-xs font-black uppercase tracking-widest text-brand-red">
                    The Official Infinity Seal
                  </span>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-2 font-light leading-relaxed">
                    Geometric precision incorporating the Taekwondo belt knot into an eternal loop.
                  </p>
                </div>
              </div>

              <div className="md:col-span-7 space-y-5 sm:space-y-6 text-zinc-700 dark:text-zinc-300 text-base sm:text-lg leading-relaxed font-light">
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-red">
                  <Sparkles className="w-3.5 h-3.5" /> Brand Identity Guidelines (Page 9)
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-5xl font-black uppercase tracking-tight text-zinc-900 dark:text-white">
                  The Philosophy of <span className="text-brand-red">The Eternal Loop</span>
                </h2>
                <p>
                  We utilized geometric precision to incorporate the signature <strong>Taekwondo belt</strong> into an <strong>eternal loop (∞)</strong>, representing an individual’s journey through discipline—a cycle of growth that has no end.
                </p>
                <p>
                  This loop symbolizes the strength, agility, and unwavering focus required to master one’s craft. The icon bridges traditional martial arts philosophy with minimalist modern design.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
                    <h4 className="text-xs font-bold uppercase tracking-widest text-brand-red mb-1">
                      Infinity Red (#EF2F38)
                    </h4>
                    <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed font-light">
                      Symbolizes vitality, energy, passion, and the intense indomitable warrior spirit of the practitioner.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
                    <h4 className="text-xs font-bold uppercase tracking-widest text-brand-red mb-1">
                      Korean Origin (태권도)
                    </h4>
                    <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed font-light">
                      Honors the art’s traditional origins while positioning the brand for international recognition.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Logo Formula & Visual Equation */}
          <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <div className="p-8 sm:p-12 rounded-[14px] bg-zinc-900 text-white border border-brand-red/30 text-center relative overflow-hidden shadow-xl">
              <div className="absolute top-0 right-0 w-80 h-80 bg-brand-red/10 blur-[120px] rounded-full pointer-events-none" />

              <span className="text-xs font-bold uppercase tracking-widest text-brand-red block mb-3">
                Design Anatomy
              </span>
              <h3 className="text-2xl sm:text-4xl font-black uppercase tracking-tight mb-8">
                The Visual Equation
              </h3>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10">
                <div className="p-6 rounded-xl bg-white/5 border border-white/10 w-full sm:w-auto">
                  <div className="w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                    <span className="text-3xl font-black">🥋</span>
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider block">Taekwondo Belt Knot</span>
                  <span className="text-[10px] text-zinc-400">Traditional Root</span>
                </div>

                <span className="text-3xl font-black text-brand-red">+</span>

                <div className="p-6 rounded-xl bg-white/5 border border-white/10 w-full sm:w-auto">
                  <div className="w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                    <span className="text-4xl font-black text-brand-red">∞</span>
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider block">Eternal Loop</span>
                  <span className="text-[10px] text-zinc-400">Limitless Growth</span>
                </div>

                <span className="text-3xl font-black text-brand-red">=</span>

                <div className="p-6 rounded-xl bg-brand-red/10 border border-brand-red/40 w-full sm:w-auto shadow-brand-glow">
                  <div className="w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                    <InfinityLogo variant="symbol" className="w-12 h-12 text-brand-red" />
                  </div>
                  <span className="text-xs font-black uppercase tracking-wider block text-brand-red">Infinity TKD Mark</span>
                  <span className="text-[10px] text-zinc-300">Global Martial Identity</span>
                </div>
              </div>
            </div>
          </section>

          {/* Interactive Belt Color Variations */}
          <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-red block mb-1">
                Dynamic Identity Standard (Brand Guide Page 14)
              </span>
              <h3 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-zinc-900 dark:text-white">
                Rank-Based Belt Mark Variations
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-2 font-light">
                On official diplomas and certificates, our signature belt loop adapts to the athlete&apos;s earned rank color.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 mb-8">
              {beltPalette.map((belt) => {
                const isSelected = selectedBeltColor === belt.name
                return (
                  <button
                    key={belt.name}
                    onClick={() => setSelectedBeltColor(belt.name)}
                    className={`p-3.5 sm:p-4 rounded-xl border text-center transition-all duration-300 flex flex-col items-center justify-between gap-2 touch-press cursor-pointer ${
                      isSelected
                        ? 'border-brand-red bg-zinc-50 dark:bg-zinc-900 shadow-lg scale-105 ring-2 ring-brand-red/30'
                        : 'border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-700 hover:scale-102'
                    }`}
                  >
                    <div
                      className="w-7 h-7 rounded-lg border shadow-sm transition-transform duration-300"
                      style={{ backgroundColor: belt.hex, borderColor: belt.border }}
                    />
                    <span className="text-[11px] font-bold text-zinc-900 dark:text-white leading-tight">
                      {belt.name.replace(' (1st-5th Dan)', '')}
                    </span>
                  </button>
                )
              })}
            </div>

            {/* Selected Belt Details Card */}
            {(() => {
              const activeBeltObj = beltPalette.find((b) => b.name === selectedBeltColor) || beltPalette[5]
              return (
                <div
                  key={activeBeltObj.name}
                  className="p-6 sm:p-8 rounded-[14px] bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-6 max-w-4xl mx-auto shadow-md animate-fade-in"
                >
                  <div className="flex items-center gap-4">
                    <div
                      className="w-16 h-16 rounded-xl border shadow-md flex items-center justify-center transition-all duration-300 transform hover:scale-105 shrink-0"
                      style={{ backgroundColor: activeBeltObj.hex, borderColor: activeBeltObj.border }}
                    >
                      <InfinityLogo
                        variant="symbol"
                        className={`w-10 h-10 ${
                          activeBeltObj.textDark ? 'text-black' : 'text-white'
                        }`}
                        colorScheme="custom"
                        brandColor={activeBeltObj.textDark ? '#000000' : '#FFFFFF'}
                      />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="text-lg sm:text-xl font-black uppercase text-zinc-900 dark:text-white">
                          {activeBeltObj.name}
                        </h4>
                        <span className="text-xs font-mono font-bold text-brand-red">{activeBeltObj.korean}</span>
                      </div>
                      <p className="text-xs font-bold text-zinc-700 dark:text-zinc-300 mt-0.5">{activeBeltObj.meaning}</p>
                      <p className="text-xs text-zinc-500 dark:text-zinc-400 font-light mt-1 max-w-lg leading-relaxed">
                        {activeBeltObj.philosophy}
                      </p>
                    </div>
                  </div>

                  <div className="flex sm:flex-col items-center sm:items-end gap-2 shrink-0">
                    <span className="text-xs font-mono font-bold px-3 py-1.5 rounded-xl bg-white dark:bg-black border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 shadow-sm">
                      Timeline: {activeBeltObj.timeline}
                    </span>
                    <span className="text-xs font-mono text-zinc-400">
                      HEX: {activeBeltObj.hex}
                    </span>
                  </div>
                </div>
              )
            })()}
          </section>
        </div>
      )}

      {/* ==================================================================== */}
      {/* TAB 2: INFINITY TKD BRAIN & MIND PHILOSOPHY */}
      {/* ==================================================================== */}
      {activeTab === 'mind' && (
        <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 animate-fade-in max-w-6xl mx-auto space-y-16 sm:space-y-20">
          <InfinityBrainAnimation />

          <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-red mb-2 block">
              Cognitive &amp; Neurological Alignment
            </span>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-zinc-900 dark:text-white">
              The 4 Pillars of the <span className="text-brand-red">Martial Mind</span>
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base mt-2 font-light leading-relaxed">
              True mastery starts in the mind. At Infinity Taekwondo, physical strikes are merely the outer expression of inner psychological focus, emotional control, and scientific strategy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {brainPrinciples.map((item) => {
              const Icon = item.icon
              return (
                <Card3D key={item.number} max={5} depth={4} className="h-full">
                  <div className="p-8 sm:p-10 rounded-[14px] bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 hover:border-brand-red transition-all duration-300 shadow-sm hover:shadow-brand-glow flex flex-col justify-between h-full">
                    <div>
                      <div className="flex justify-between items-start mb-6">
                        <span className="text-3xl sm:text-4xl font-black text-brand-red/40 font-mono">
                          {item.number}
                        </span>
                        <div className="p-3.5 rounded-xl bg-brand-red/10 text-brand-red">
                          <Icon className="w-6 h-6" />
                        </div>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-black uppercase text-zinc-900 dark:text-white tracking-tight mb-1">
                        {item.title}
                      </h3>
                      <span className="text-xs font-bold text-brand-red uppercase tracking-widest block mb-4">
                        {item.korean}
                      </span>

                      <p className="text-sm text-zinc-600 dark:text-zinc-400 font-light leading-relaxed">
                        {item.desc}
                      </p>
                    </div>

                    <div className="mt-8 pt-4 border-t border-zinc-200/60 dark:border-zinc-800/60 flex items-center justify-between text-xs font-bold uppercase">
                      <div className="flex items-center gap-2 text-zinc-400">
                        <CheckCircle2 className="w-4 h-4 text-brand-red shrink-0" />
                        <span>Cultivated Daily</span>
                      </div>
                      <span className="text-brand-red font-mono text-[11px]">{item.metric}</span>
                    </div>
                  </div>
                </Card3D>
              )
            })}
          </div>
        </section>
      )}

      {/* ==================================================================== */}
      {/* TAB 3: VISION, MISSION, GOAL & DREAM QUAD-MATRIX */}
      {/* ==================================================================== */}
      {activeTab === 'quad' && (
        <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 animate-fade-in max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-red mb-2 block">
              Direct from Brand Guide (Page 3)
            </span>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-zinc-900 dark:text-white">
              Vision, Mission, <span className="text-brand-red">Goal &amp; Dream</span>
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base mt-2 font-light leading-relaxed">
              Our comprehensive directional framework driving every class, coach, curriculum, and athlete at Infinity Taekwondo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {quadPillars.map((pillar) => {
              const Icon = pillar.icon
              return (
                <Card3D key={pillar.id} max={5} depth={4} className="h-full">
                  <div className="p-8 sm:p-10 rounded-[14px] bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 hover:border-brand-red transition-all duration-300 shadow-sm hover:shadow-brand-glow flex flex-col justify-between h-full">
                    <div>
                      <div className="flex justify-between items-start mb-6">
                        <span
                          className="px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest text-white shadow-sm"
                          style={{ backgroundColor: pillar.color }}
                        >
                          {pillar.badge}
                        </span>
                        <div
                          className="p-3.5 rounded-xl"
                          style={{ backgroundColor: `${pillar.color}15`, color: pillar.color }}
                        >
                          <Icon className="w-6 h-6" />
                        </div>
                      </div>

                      <h3 className="text-2xl sm:text-3xl font-black uppercase text-zinc-900 dark:text-white tracking-tight mb-1">
                        {pillar.title}
                      </h3>
                      <span className="text-xs font-bold uppercase tracking-widest text-brand-red block mb-3">
                        {pillar.korean}
                      </span>

                      <p className="text-xs font-bold uppercase tracking-wider text-zinc-800 dark:text-zinc-200 mb-3">
                        &ldquo;{pillar.tagline}&rdquo;
                      </p>

                      <p className="text-sm text-zinc-600 dark:text-zinc-400 font-light leading-relaxed">
                        {pillar.desc}
                      </p>
                    </div>

                    <div className="mt-8 pt-4 border-t border-zinc-200/60 dark:border-zinc-800/60 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-[11px] text-zinc-400">
                      <span>Source: {pillar.source}</span>
                      <span className="font-bold text-brand-red uppercase text-[10px]">{pillar.target}</span>
                    </div>
                  </div>
                </Card3D>
              )
            })}
          </div>
        </section>
      )}

      {/* ==================================================================== */}
      {/* TAB 4: 3 CORE VALUES */}
      {/* ==================================================================== */}
      {activeTab === 'values' && (
        <section className="py-16 sm:py-24 bg-white dark:bg-black animate-fade-in">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-red mb-2 block">
                Foundational DNA (Brand Guide Page 4)
              </span>
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-zinc-900 dark:text-white">
                {t.about.valuesTitle1} <span className="text-brand-red">{t.about.valuesTitle2}</span>
              </h2>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base mt-2 font-light leading-relaxed">
                {t.about.valuesSubtitle}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
              {coreValues.map((val) => {
                const Icon = val.icon
                return (
                  <Card3D key={val.title} max={5} depth={4} className="h-full">
                    <div className="p-6 sm:p-8 md:p-10 rounded-[14px] bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 hover:border-brand-red transition-all duration-300 shadow-sm hover:shadow-brand-glow flex flex-col justify-between h-full">
                      <div>
                        <div className="flex justify-between items-start mb-6 sm:mb-8">
                          <span className="text-4xl sm:text-5xl font-black text-brand-red/40 font-mono">
                            {val.number}
                          </span>
                          <div
                            className="p-3.5 rounded-xl"
                            style={{ backgroundColor: `${val.color}15`, color: val.color }}
                          >
                            <Icon className="w-6 h-6" />
                          </div>
                        </div>

                        <div className="mb-4">
                          <h3 className="text-xl sm:text-2xl font-black uppercase text-zinc-900 dark:text-white tracking-tight">
                            {val.title}
                          </h3>
                          <span className="text-xs font-bold text-brand-red uppercase tracking-widest block mt-0.5">
                            {val.korean}
                          </span>
                          <p className="text-xs font-bold text-zinc-700 dark:text-zinc-300 uppercase mt-2">
                            &ldquo;{val.tagline}&rdquo;
                          </p>
                        </div>

                        <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed font-light mb-4">
                          {val.description}
                        </p>

                        <div className="p-3 rounded-xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-xs italic text-zinc-500 dark:text-zinc-400 font-serif">
                          &ldquo;{val.quote}&rdquo;
                        </div>
                      </div>

                      <div className="mt-6 sm:mt-8 pt-4 border-t border-zinc-200/60 dark:border-zinc-800/60 flex items-center gap-2 text-xs font-bold uppercase text-zinc-400">
                        <CheckCircle2 className="w-4 h-4 text-brand-red" />
                        <span>Embodied on the Mats</span>
                      </div>
                    </div>
                  </Card3D>
                )
              })}
            </div>
          </div>
        </section>
      )}

      {/* ==================================================================== */}
      {/* TAB 5: THE 5 DOJANG TENETS */}
      {/* ==================================================================== */}
      {activeTab === 'tenets' && (
        <section className="py-16 sm:py-24 bg-white dark:bg-black animate-fade-in">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-red mb-2 block">
                {t.tenets.badge}
              </span>
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-zinc-900 dark:text-white">
                {t.about.tenetsTitle1} <span className="text-brand-red">{t.about.tenetsTitle2}</span>
              </h2>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base mt-2 font-light leading-relaxed">
                {t.about.tenetsSubtitle}
              </p>
            </div>

            <div className="space-y-4">
              {dojangTenets.map((tenet) => (
                <Card3D key={tenet.name} max={3} depth={2} className="w-full">
                  <div className="p-6 sm:p-8 rounded-[14px] bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 hover:border-brand-red/50 transition-all flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div className="flex items-start md:items-center gap-4 sm:gap-6">
                      <span className="text-3xl sm:text-4xl font-black text-brand-red/60 w-12 sm:w-14 shrink-0 font-mono">
                        {tenet.number}
                      </span>
                      <div>
                        <div className="flex flex-wrap items-center gap-2.5 mb-1">
                          <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-zinc-900 dark:text-white">
                            {tenet.name}
                          </h3>
                          <span className="text-xs font-bold text-brand-red">{tenet.korean}</span>
                          <span className="text-xs font-mono text-zinc-400">[{tenet.pronunciation}]</span>
                        </div>
                        <p className="text-sm text-zinc-700 dark:text-zinc-300 font-medium leading-relaxed">
                          {tenet.principle}
                        </p>
                        <p className="text-xs text-zinc-500 dark:text-zinc-400 font-light mt-1.5 leading-relaxed">
                          <strong className="text-zinc-800 dark:text-zinc-200 font-bold uppercase text-[10px]">Daily Action:</strong> {tenet.application}
                        </p>
                      </div>
                    </div>

                    <div className="shrink-0 self-end md:self-auto">
                      <span className="px-3 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-widest bg-brand-red/10 text-brand-red border border-brand-red/20 shadow-sm">
                        Dojang Standard
                      </span>
                    </div>
                  </div>
                </Card3D>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ==================================================================== */}
      {/* TAB 6: OUR JOURNEY & TIMELINE */}
      {/* ==================================================================== */}
      {activeTab === 'journey' && (() => {
        const activeMilestone = milestones.find((m) => m.year === selectedEraYear) || milestones[0]
        const { language } = useLanguage()

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

        const currentM = getLocalizedMilestone(activeMilestone)

        return (
          <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black animate-fade-in max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-red mb-2 block">
                Evolution of Excellence
              </span>
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-zinc-900 dark:text-white">
                The Journey of <span className="text-brand-red">Infinity TKD</span>
              </h2>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base mt-2 font-light leading-relaxed">
                From a dedicated grassroots dojang to Cambodia’s premier high-performance sport science and martial academy.
              </p>

              {/* View Switcher (Interactive Showcase vs Full Chronology) */}
              <div className="inline-flex items-center p-1 rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 mt-6 shadow-sm">
                <button
                  onClick={() => setJourneyViewMode('interactive')}
                  className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                    journeyViewMode === 'interactive'
                      ? 'bg-brand-red text-white shadow-brand-glow'
                      : 'text-zinc-500 hover:text-zinc-900 dark:hover:text-white'
                  }`}
                >
                  Interactive Era Showcase
                </button>
                <button
                  onClick={() => setJourneyViewMode('timeline')}
                  className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                    journeyViewMode === 'timeline'
                      ? 'bg-brand-red text-white shadow-brand-glow'
                      : 'text-zinc-500 hover:text-zinc-900 dark:hover:text-white'
                  }`}
                >
                  Full Chronology
                </button>
              </div>
            </div>

            {/* VIEW MODE 1: INTERACTIVE ERA SHOWCASE */}
            {journeyViewMode === 'interactive' && (
              <div className="space-y-8 animate-fade-in">
                {/* Horizontal Interactive Timeline Track */}
                <div className="p-3 sm:p-4 rounded-[14px] bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 shadow-sm">
                  <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 sm:gap-3">
                    {milestones.map((m, idx) => {
                      const isSelected = selectedEraYear === m.year
                      const Icon = m.icon
                      return (
                        <button
                          key={m.year}
                          onClick={() => setSelectedEraYear(m.year)}
                          className={`p-3 sm:p-4 rounded-xl border text-left transition-all duration-300 flex flex-col justify-between gap-2 cursor-pointer group ${
                            isSelected
                              ? 'border-brand-red bg-white dark:bg-zinc-950 shadow-lg scale-102 ring-2 ring-brand-red/20'
                              : 'border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-700 bg-white/50 dark:bg-zinc-900/40'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span
                              className={`text-lg sm:text-xl font-black font-mono tracking-tight ${
                                isSelected ? 'text-brand-red' : 'text-zinc-900 dark:text-white'
                              }`}
                            >
                              {m.year}
                            </span>
                            <div
                              className="p-1.5 rounded-lg"
                              style={{ backgroundColor: `${m.badgeColor}15`, color: m.badgeColor }}
                            >
                              <Icon className="w-3.5 h-3.5" />
                            </div>
                          </div>
                          <div>
                            <span className="text-[11px] font-bold uppercase tracking-wider block text-zinc-900 dark:text-white truncate">
                              {m.era}
                            </span>
                            <span className="text-[10px] text-zinc-400 font-mono block truncate">
                              {m.badge}
                            </span>
                          </div>
                        </button>
                      )
                    })}
                  </div>
                </div>

                {/* Selected Era Spotlight Card (14px radius) */}
                <div className="p-6 sm:p-10 md:p-12 rounded-[14px] bg-zinc-50 dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 shadow-2xl relative overflow-hidden animate-fade-in">
                  <div
                    className="absolute top-0 right-0 w-96 h-96 blur-[150px] rounded-full pointer-events-none opacity-20"
                    style={{ backgroundColor: currentM.badgeColor }}
                  />

                  <div className="relative z-10 grid md:grid-cols-12 gap-8 items-start">
                    {/* Left Column: Year Hero & Description */}
                    <div className="md:col-span-7 space-y-4">
                      <div className="flex flex-wrap items-center gap-2.5">
                        <span
                          className="px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest text-white shadow-sm"
                          style={{ backgroundColor: currentM.badgeColor }}
                        >
                          {currentM.badge}
                        </span>
                        <span className="text-xs font-mono font-bold text-zinc-400">
                          {currentM.koreanEra}
                        </span>
                      </div>

                      <div>
                        <span className="text-4xl sm:text-6xl font-black font-mono text-brand-red tracking-tight leading-none block mb-2">
                          {currentM.year}
                        </span>
                        <h3 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight text-zinc-900 dark:text-white leading-tight">
                          {currentM.title}
                        </h3>
                        <p className="text-xs sm:text-sm font-bold text-brand-red uppercase tracking-wider mt-1">
                          {currentM.subtitle}
                        </p>
                      </div>

                      <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 font-light leading-relaxed pt-2">
                        {currentM.desc}
                      </p>

                      {/* Founder Quote */}
                      <div className="p-4 rounded-xl bg-white dark:bg-zinc-950/80 border border-zinc-200 dark:border-zinc-800 shadow-sm mt-4">
                        <p className="text-xs italic text-zinc-600 dark:text-zinc-300 font-serif leading-relaxed">
                          &ldquo;{currentM.quote.text}&rdquo;
                        </p>
                        <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-brand-red block mt-2">
                          &mdash; {currentM.quote.author}
                        </span>
                      </div>
                    </div>

                    {/* Right Column: Key Breakthrough Highlights & Metrics */}
                    <div className="md:col-span-5 space-y-4">
                      {/* Metric Callout Card */}
                      <div className="p-5 rounded-xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 shadow-sm">
                        <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider block">
                          {currentM.metrics.label}
                        </span>
                        <span className="text-2xl sm:text-3xl font-black font-mono text-zinc-900 dark:text-white mt-1 block">
                          {currentM.metrics.value}
                        </span>
                      </div>

                      {/* Key Highlights List */}
                      <div className="p-5 sm:p-6 rounded-xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 shadow-sm">
                        <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-3">
                          Milestone Breakthroughs
                        </h4>
                        <div className="space-y-2.5">
                          {currentM.highlights.map((h, i) => (
                            <div key={i} className="flex items-start gap-2.5 text-xs text-zinc-700 dark:text-zinc-300 font-light">
                              <CheckCircle2 className="w-4 h-4 text-brand-red shrink-0 mt-0.5" />
                              <span>{h}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Quick Era Prev/Next Buttons */}
                      <div className="flex items-center justify-between gap-3 pt-2">
                        <button
                          onClick={() => {
                            const currIdx = milestones.findIndex((m) => m.year === selectedEraYear)
                            if (currIdx > 0) setSelectedEraYear(milestones[currIdx - 1].year)
                          }}
                          disabled={selectedEraYear === milestones[0].year}
                          className="px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-brand-red hover:text-white transition-colors cursor-pointer"
                        >
                          &larr; Previous Era
                        </button>
                        <button
                          onClick={() => {
                            const currIdx = milestones.findIndex((m) => m.year === selectedEraYear)
                            if (currIdx < milestones.length - 1) setSelectedEraYear(milestones[currIdx + 1].year)
                          }}
                          disabled={selectedEraYear === milestones[milestones.length - 1].year}
                          className="px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider bg-brand-red text-white disabled:opacity-30 disabled:cursor-not-allowed hover:bg-zinc-900 transition-colors cursor-pointer shadow-brand-glow"
                        >
                          Next Era &rarr;
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* VIEW MODE 2: FULL CHRONOLOGICAL ROADMAP */}
            {journeyViewMode === 'timeline' && (
              <div className="relative border-l-2 border-brand-red/30 ml-4 sm:ml-8 space-y-10 sm:space-y-12 animate-fade-in">
                {milestones.map((m) => {
                  const localizedM = getLocalizedMilestone(m)
                  const Icon = m.icon
                  return (
                    <div key={m.year} className="relative pl-8 sm:pl-10">
                      <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-brand-red border-4 border-white dark:border-black shadow-brand-glow" />
                      <div className="p-6 sm:p-8 rounded-[14px] bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 shadow-sm hover:border-brand-red/40 transition-all">
                        <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                          <div className="flex items-center gap-3">
                            <span className="text-3xl sm:text-4xl font-black text-brand-red font-mono">
                              {m.year}
                            </span>
                            <span className="text-xs font-bold uppercase text-zinc-400">
                              {m.koreanEra}
                            </span>
                          </div>
                          <span
                            className="px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest text-white shadow-sm"
                            style={{ backgroundColor: m.badgeColor }}
                          >
                            {m.badge}
                          </span>
                        </div>

                        <h3 className="text-xl sm:text-2xl font-black uppercase text-zinc-900 dark:text-white tracking-tight mb-1">
                          {localizedM.title}
                        </h3>
                        <span className="text-xs font-bold uppercase tracking-wider text-brand-red block mb-3">
                          {localizedM.subtitle}
                        </span>

                        <p className="text-sm text-zinc-600 dark:text-zinc-400 font-light leading-relaxed mb-4">
                          {localizedM.desc}
                        </p>

                        {/* Highlights Pills */}
                        <div className="flex flex-wrap gap-2 pt-2 border-t border-zinc-200 dark:border-zinc-800">
                          {localizedM.highlights.map((h, i) => (
                            <span
                              key={i}
                              className="px-2.5 py-1 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 text-[11px] font-medium"
                            >
                              &bull; {h}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            )}
          </section>
        )
      })()}

      {/* ==================================================================== */}
      {/* TAB 7: LEADERSHIP TEAM */}
      {/* ==================================================================== */}
      {activeTab === 'faculty' && (
        <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black animate-fade-in">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-red mb-2 block">
                Executive Leadership
              </span>
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-zinc-900 dark:text-white">
                {t.about.facultyTitle1} <span className="text-brand-red">{t.about.facultyTitle2}</span>
              </h2>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base mt-2 font-light leading-relaxed">
                {t.about.facultySubtitle}
              </p>
            </div>

            <SafeGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8" isolateItems>
              {localizedTeam.map((member) => (
                <Card3D key={member.id} max={6} depth={5} className="h-full">
                  <div
                    className="group cursor-pointer relative h-full"
                    onClick={() => openMember(member)}
                  >
                    <div className="relative overflow-hidden bg-zinc-100 dark:bg-zinc-900 aspect-[3/4] rounded-xl mb-4 border border-zinc-200 dark:border-zinc-800 shadow-sm group-hover:shadow-brand-glow transition-all duration-500">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 opacity-70 group-hover:opacity-40 transition-opacity duration-500" />
                      <SafeImage
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-105"
                      />

                      <div className="absolute bottom-0 left-0 p-5 sm:p-6 z-20 transform translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                        <h3 className="text-lg sm:text-xl font-bold text-white uppercase leading-none mb-1">
                          {member.name}
                        </h3>
                        <p className="text-brand-red text-xs font-bold uppercase tracking-widest">
                          {member.role}
                        </p>
                      </div>

                      <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-8 sm:w-9 h-8 sm:h-9 rounded-xl bg-brand-red text-white flex items-center justify-center shadow-lg">
                          <ArrowUpRight className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Card3D>
              ))}
            </SafeGrid>
          </div>
        </section>
      )}

      {/* ==================================================================== */}
      {/* INSTITUTIONAL COLLABORATIONS & GOVERNING ALLIANCES (14px radius) */}
      {/* ==================================================================== */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl pb-20">
        <div className="p-8 sm:p-12 rounded-[14px] bg-white dark:bg-zinc-900/70 border border-zinc-200 dark:border-zinc-800 shadow-xl space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-brand-red block mb-1">
                Institutional Ecosystem
              </span>
              <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-zinc-900 dark:text-white">
                Global Collaborations &amp; Alliances
              </h2>
              <p className="text-xs sm:text-sm text-zinc-500 font-light mt-1 max-w-2xl">
                Infinity Taekwondo aligns with international governing bodies, Seoul Kukkiwon headquarters, sport universities, and performance gear innovators.
              </p>
            </div>

            <Link
              href="/collaborations"
              className="px-5 py-2.5 rounded-xl bg-brand-red text-white text-xs font-bold uppercase tracking-wider hover:bg-zinc-900 transition-colors shadow-brand-glow inline-flex items-center gap-1.5 self-start md:self-auto shrink-0 touch-press"
            >
              Explore All Partners <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <SafeGrid className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4" isolateItems>
            {collaborationsData.slice(0, 4).map((partner) => (
              <Card3D key={partner.id} max={5} depth={3} className="h-full">
                <Link
                  href="/collaborations"
                  className="p-5 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 hover:border-brand-red/50 transition-all flex flex-col justify-between group h-full touch-press"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-lg overflow-hidden bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-1">
                        <SafeImage src={partner.logo} alt={partner.name} className="w-full h-full object-cover rounded grayscale group-hover:grayscale-0 transition-all" />
                      </div>
                      <span className="px-2 py-0.5 rounded-md text-[9px] font-mono font-bold uppercase bg-brand-red/10 text-brand-red border border-brand-red/20">
                        {partner.tier}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-xs sm:text-sm font-black uppercase text-zinc-900 dark:text-white tracking-tight group-hover:text-brand-red transition-colors line-clamp-1">
                        {partner.name}
                      </h3>
                      <span className="text-[10px] font-mono text-zinc-400 block mt-0.5 truncate">
                        {partner.partnerType}
                      </span>
                    </div>

                    <p className="text-[11px] text-zinc-500 font-light line-clamp-2 leading-relaxed">
                      {partner.summary}
                    </p>
                  </div>

                  <div className="pt-3 mt-4 border-t border-zinc-200 dark:border-zinc-800/80 flex items-center justify-between text-[10px] font-mono text-zinc-400">
                    <span>{partner.country}</span>
                    <span className="text-brand-red font-bold group-hover:translate-x-1 transition-transform inline-flex items-center gap-0.5">
                      View <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </Link>
              </Card3D>
            ))}
          </SafeGrid>
        </div>
      </section>

      {/* ==================================================================== */}
      {/* BOTTOM CTA BANNER */}
      {/* ==================================================================== */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl pb-20">
        <div className="p-8 sm:p-12 md:p-14 rounded-[14px] bg-zinc-900 text-white border border-zinc-800 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-red/15 blur-[140px] rounded-full pointer-events-none" />

          <span className="text-xs font-bold uppercase tracking-widest text-brand-red block mb-3">
            Experience The Standard
          </span>
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight mb-4 leading-tight">
            Train Where Discipline Meets <span className="text-brand-red">Limitless Potential</span>
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 font-light max-w-2xl mx-auto mb-8 leading-relaxed">
            Step onto the mats at our Factory Phnom Penh HQ or BKK1 Elite Center. Experience world-class instruction, athletic testing, and personalized mentorship.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 py-4 bg-brand-red text-white font-bold uppercase text-xs tracking-widest rounded-xl hover:bg-white hover:text-black transition-all duration-300 shadow-brand-glow flex items-center justify-center gap-2 touch-press"
            >
              Book Free Trial <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/locations"
              className="w-full sm:w-auto px-8 py-4 border border-zinc-700 text-white font-bold uppercase text-xs tracking-widest rounded-xl hover:border-brand-red hover:text-brand-red transition-all duration-300 flex items-center justify-center gap-2 touch-press"
            >
              <Building2 className="w-4 h-4" /> View Dojang Branches
            </Link>
          </div>
        </div>
      </section>

      {/* ==================================================================== */}
      {/* LEADERSHIP MODAL (Responsive Sheet on Mobile, Centered on Desktop) */}
      {/* ==================================================================== */}
      {selectedMember && (
        <div
          className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center p-0 sm:p-6 animate-fade-in"
          onClick={closeMember}
          role="dialog"
          aria-modal="true"
          aria-labelledby="member-modal-title"
        >
          <div className="absolute inset-0 bg-black/85 backdrop-blur-2xl" />

          <div
            className="relative w-full max-w-4xl bg-white dark:bg-zinc-950 shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[92vh] sm:max-h-[90vh] z-10 rounded-t-[20px] sm:rounded-[14px] border border-zinc-200 dark:border-zinc-800"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeMember}
              className="absolute top-4 right-4 z-30 p-2.5 rounded-xl bg-black/40 text-white hover:bg-brand-red transition-colors backdrop-blur-md cursor-pointer min-w-[44px] min-h-[44px] flex items-center justify-center"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="w-full md:w-5/12 h-56 sm:h-80 md:h-auto relative bg-zinc-950 shrink-0">
              <SafeImage
                src={selectedMember.image}
                alt={selectedMember.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 z-10">
                <span className="px-2.5 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest bg-brand-red text-white inline-block mb-2 shadow-md">
                  {selectedMember.role}
                </span>
                <h3 id="member-modal-title" className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white leading-none">
                  {selectedMember.name}
                </h3>
                <p className="text-xs text-zinc-300 font-bold mt-1">
                  {selectedMember.division}
                </p>
              </div>
            </div>

            <div className="w-full md:w-7/12 p-6 sm:p-8 md:p-10 overflow-y-auto space-y-6 touch-scroll">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-brand-red block mb-1">
                  Executive Faculty Profile
                </span>
                <h4 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-zinc-900 dark:text-white">
                  {selectedMember.name}
                </h4>
              </div>

              <div className="text-zinc-600 dark:text-zinc-300 font-light leading-relaxed text-xs sm:text-sm">
                {selectedMember.bio}
              </div>

              {/* Credentials */}
              <div>
                <h5 className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-2">
                  Credentials &amp; Dan Ranks
                </h5>
                <div className="flex flex-wrap gap-2">
                  {selectedMember.credentials.map((cred) => (
                    <span
                      key={cred}
                      className="px-2.5 py-1 bg-brand-red/10 border border-brand-red/20 text-brand-red text-xs font-bold uppercase tracking-wide rounded-lg"
                    >
                      {cred}
                    </span>
                  ))}
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {selectedMember.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 bg-zinc-100 dark:bg-zinc-800 text-xs font-medium uppercase tracking-wide text-zinc-500 rounded-lg"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800 flex flex-col sm:flex-row justify-between items-center gap-4">
                <div className="flex gap-2">
                  {selectedMember.socials?.instagram && (
                    <a
                      href={selectedMember.socials.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:bg-brand-red hover:text-white transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center cursor-pointer"
                      aria-label="Instagram"
                    >
                      <Instagram className="w-4 h-4" />
                    </a>
                  )}
                  {selectedMember.socials?.linkedin && (
                    <a
                      href={selectedMember.socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:bg-brand-red hover:text-white transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center cursor-pointer"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                  )}
                  {selectedMember.socials?.facebook && (
                    <a
                      href={selectedMember.socials.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:bg-brand-red hover:text-white transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center cursor-pointer"
                      aria-label="Facebook"
                    >
                      <Facebook className="w-4 h-4" />
                    </a>
                  )}
                </div>

                <Link
                  href={`/contact?subject=Direct%20Inquiry%20with%20${encodeURIComponent(selectedMember.name)}`}
                  className="w-full sm:w-auto px-6 py-3 bg-brand-red text-white font-bold uppercase text-xs tracking-widest rounded-xl hover:bg-zinc-900 transition-colors shadow-brand-glow text-center flex items-center justify-center gap-2"
                >
                  Contact Dojang <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
