'use client'

import * as React from 'react'
import Link from 'next/link'
import {
  Sparkles,
  Rocket,
  Film,
  Heart,
  Activity,
  Lightbulb,
  CheckCircle2,
  Send,
  ArrowRight,
  ShieldCheck,
  Camera,
  Coins,
  Award,
  Users,
  Video,
  Layers,
  ChevronRight,
  Flame,
  Loader2,
  AlertCircle,
} from 'lucide-react'
import {
  sanitizeInput,
  sanitizeEmail,
  sanitizePhone,
  isValidEmail,
  validateHoneypot,
  checkRateLimit,
} from '@/lib/security'
import { Card3D } from '@/components/ui/Card3D'
import { useLanguage } from '@/context/LanguageContext'

interface IncubatorTrack {
  id: string
  title: string
  koreanTitle: string
  icon: React.ElementType
  tag: string
  badgeColor: string
  description: string
  deliverables: string[]
  translations?: {
    km?: { title?: string; tag?: string; description?: string; deliverables?: string[] }
    zh?: { title?: string; tag?: string; description?: string; deliverables?: string[] }
    ko?: { title?: string; tag?: string; description?: string; deliverables?: string[] }
  }
}

const tracks: IncubatorTrack[] = [
  {
    id: 'film',
    title: 'Martial Arts Cinema & Stunts',
    koreanTitle: '액션 시네마 & 스턴트',
    icon: Film,
    tag: 'Creative Media Unit',
    badgeColor: '#EF2F38',
    description:
      'Write, choreograph, and film original action sequences, short films, or high-altitude tricking showcase reels.',
    deliverables: [
      'Full access to Sony Cinema FX camera packages & ARRI lighting',
      'Studio mat reservation for stunt rehearsal, wiring & pre-viz',
      'Post-production color grading mentorship from our media directors',
    ],
    translations: {
      km: {
        title: 'ភាពយន្តក្បាច់គុន & ក្បាច់សកម្មភាព (Stunts)',
        tag: 'ផ្នែកប្រព័ន្ធផ្សព្វផ្សាយច្នៃប្រឌិត',
        description: 'សរសេរ ក្បាច់រាំ និងថតឈុតសកម្មភាពភាពយន្តខ្នាតខ្លី ឬវីដេអូសម្តែងកាយសម្ព័ន្ធ Tricking កម្រិតខ្ពស់។',
        deliverables: [
          'សិទ្ធិពេញលេញប្រើប្រាស់កាមេរ៉ា Sony Cinema FX & ភ្លើង ARRI',
          'កក់កម្រាលស្ទូឌីយោសម្រាប់ហាត់សមក្បាច់ និងត្រៀមថត',
          'ការណែនាំកាត់ត និងកែពណ៌ពីអ្នកដឹកនាំប្រព័ន្ធផ្សព្វផ្សាយរបស់យើង',
        ],
      },
      zh: {
        title: '动作影视与特技动作指导',
        tag: '先锋影视创意单元',
        description: '构思、编排并拍摄原创武道动作微电影、预演短片 (Pre-Viz) 或高空特技展示大片。',
        deliverables: [
          '全套索尼 Cinema FX 电影摄影机与专业灯光系统支持',
          '专属影棚软垫安全场地预约与动作走位排练',
          '好莱坞级调色导师与剪辑后期工业化流程指导',
        ],
      },
      ko: {
        title: '마샬아츠 액션 시네마 & 스턴트',
        tag: '크리에이티브 미디어 유닛',
        description: '독창적인 무도 액션 시퀀스, 단편 영화 및 고공 아크로바틱 쇼케이스 영상을 직접 기획하고 제작합니다.',
        deliverables: [
          '소니 시네마 라인 카메라 및 전문 조명 장비 풀패키지 지원',
          '스턴트 리허설 및 사전 시각화(Pre-Viz) 전용 매트 대관',
          '전문 영상 디렉터의 후반 색보정(Color Grading) 1:1 멘토링',
        ],
      },
    },
  },
  {
    id: 'community',
    title: 'Community Outreach & Youth Clinics',
    koreanTitle: '지역사회 공헌 & 유소년 클리닉',
    icon: Heart,
    tag: 'Social Impact',
    badgeColor: '#09BB00',
    description:
      'Launch free grassroots Taekwondo and self-defense clinics for underprivileged youth and schools across Phnom Penh.',
    deliverables: [
      'Micro-grant funding for student transportation and dobok uniforms',
      'Assistant coach volunteers deployed from our senior Dan roster',
      'Official Infinity Taekwondo partnership and accreditation support',
    ],
    translations: {
      km: {
        title: 'ការផ្សព្វផ្សាយសហគមន៍ & គ្លីនិកយុវជន',
        tag: 'ឥទ្ធិពលសង្គម',
        description: 'ចាប់ផ្តើមគ្លីនិកតេក្វាន់ដូឥតគិតថ្លៃ និងការការពារខ្លួនសម្រាប់យុវជន និងសាលារៀនជួបការលំបាកនៅភ្នំពេញ។',
        deliverables: [
          'ជំនួយថវិកាខ្នាតតូចសម្រាប់ការដឹកជញ្ជូន និងឯកសណ្ឋាន Dobok',
          'គ្រូជំនួយស្ម័គ្រចិត្តពីក្រុមខ្សែក្រវាត់ខ្មៅ Dan ជាន់ខ្ពស់',
          'ការទទួលស្គាល់ភាពជាដៃគូផ្លូវការពី Infinity Taekwondo',
        ],
      },
      zh: {
        title: '社区公益与基层青训普及',
        tag: '社会影响力项目',
        description: '面向金边社区弱势青少年及公立学校发起免费跆拳道公开课与反霸凌自卫防身工作坊。',
        deliverables: [
          '微型公益扶持基金，覆盖道服采购与交通后勤',
          '高段位黑带教练志愿者梯队下沉执教支持',
          '授予 Infinity 官方公益合作项目荣誉认证',
        ],
      },
      ko: {
        title: '지역사회 공헌 & 취약계층 유소년 클리닉',
        tag: '소셜 임팩트 프로젝트',
        description: '프놈펜 전역의 취약계층 청소년과 학교를 대상으로 무료 태권도 및 자기방어 호신술 클리닉을 개설합니다.',
        deliverables: [
          '수련생 도복 및 이동 교통비 지원을 위한 마이크로 펀딩',
          '인피니티 고단자 수련생 자원봉사 코치진 파견',
          '인피니티 태권도 공식 공익 파트너십 인증',
        ],
      },
    },
  },
  {
    id: 'science',
    title: 'Sport Science & Biomechanics Research',
    koreanTitle: '스포츠 사이언스 & 생체역학 연구',
    icon: Activity,
    tag: 'Human Performance',
    badgeColor: '#0042EA',
    description:
      'Conduct biomechanics investigations into kicking velocity, hip mobility protocols, or injury prevention drills.',
    deliverables: [
      'Access to jump sensors, force plates, and 240 FPS kinematic cameras',
      'Mentorship from senior sport science and rehabilitation faculty',
      'Publication of findings on our athlete research portal',
    ],
    translations: {
      km: {
        title: 'វិទ្យាសាស្ត្រកីឡា & ការស្រាវជ្រាវជីវមេកានិច',
        tag: 'សមត្ថភាពកីឡាកម្រិតខ្ពស់',
        description: 'ធ្វើការស្រាវជ្រាវជីវមេកានិចលើល្បឿនទាត់ ការបង្កើនភាពបត់បែនត្រគាក និងការការពាររបួស។',
        deliverables: [
          'ការប្រើប្រាស់ឧបករណ៍វាស់កម្លាំង និងកាមេរ៉ាល្បឿនលឿន ២៤០ FPS',
          'ការណែនាំពីសាស្ត្រាចារ្យវិទ្យាសាស្ត្រកីឡា និងស្តារនីតិសម្បទា',
          'ការបោះពុម្ពផ្សាយលទ្ធផលស្រាវជ្រាវលើគេហទំព័រអត្តពលិក',
        ],
      },
      zh: {
        title: '运动科学与生物力学专项科研',
        tag: '人体运动机能实验室',
        description: '针对踢击发力速度、髋关节开度协议及运动损伤预防机制开展前沿生物力学实证研究。',
        deliverables: [
          '开放测力板、纵跳传感器与 240FPS 动作捕捉系统',
          '运动医学与康复专家团队 1对1 实验指导',
          '在官方学术研究专栏发表科研成果报告',
        ],
      },
      ko: {
        title: '스포츠 사이언스 & 생체역학 연구',
        tag: '휴먼 퍼포먼스 랩',
        description: '발차기 각속도, 골반 가동성 프로토콜 및 부상 방지 훈련에 대한 스포츠 생체역학 실증 연구를 수행합니다.',
        deliverables: [
          '지면반력기, 점프 센서 및 240 FPS 고속 카메라 측정 지원',
          '전문 물리치료 및 스포츠 사이언스 교수진 멘토링',
          '인피니티 리서치 포털 공식 연구 결과 보고서 게재',
        ],
      },
    },
  },
  {
    id: 'leadership',
    title: 'Dojang Leadership & Tournament Ops',
    koreanTitle: '도장 리더십 & 대회 기획 운영',
    icon: Lightbulb,
    tag: 'Youth Leadership',
    badgeColor: '#A855F7',
    description:
      'Design, organize, and host intra-dojang sparring tournaments, poomsae festivals, or tricking jam battles.',
    deliverables: [
      'Operational seed budget and venue logistics support',
      'Custom championship medals, trophies, and official certificates',
      'Executive mentorship in sports event management and broadcasting',
    ],
    translations: {
      km: {
        title: 'ភាពជាអ្នកដឹកនាំដូជ៉ាង & ការរៀបចំការប្រកួត',
        tag: 'ភាពជាអ្នកដឹកនាំយុវជន',
        description: 'រៀបចំ និងធ្វើជាម្ចាស់ផ្ទះការប្រកួតកីឡាតេក្វាន់ដូក្នុងដូជ៉ាង មហោស្រព Poomsae ឬការប្រកួត Tricking។',
        deliverables: [
          'ថវិកាប្រតិបត្តិការ និងការគាំទ្រទីតាំងរៀបចំ',
          'មេដាយ ពានរង្វាន់ និងវិញ្ញាបនប័ត្រផ្លូវការ',
          'ការណែនាំពីថ្នាក់ដឹកនាំក្នុងការគ្រប់គ្រងព្រឹត្តិការណ៍កីឡា',
        ],
      },
      zh: {
        title: '道场领袖孵化与品牌赛事统筹',
        tag: '青年商业领导力',
        description: '全流程策划并主办道馆内部对抗赛、品势艺术节或街头极限特技对决 (Tricking Jam)。',
        deliverables: [
          '提供赛事专项启动预算与场地后勤物资支持',
          '定制化奖牌、总冠军奖杯与官方证书物料',
          '体育赛事统筹与现场多机位直播运营指导',
        ],
      },
      ko: {
        title: '도장 경영 리더십 & 대회 기획 총괄',
        tag: '청년 리더십 아카데미',
        description: '관내 친선 겨루기 대회, 공인품새 페스티벌 또는 마샬아츠 트릭킹 배틀을 직접 기획하고 총괄 운영합니다.',
        deliverables: [
          '행사 운영 초기 예산 및 도장 대관 물류 전폭 지원',
          '자체 챔피언십 메달, 트로피 및 공인 상장 제작 지원',
          '스포츠 이벤트 매니지먼트 및 중계 운영 실무 지도',
        ],
      },
    },
  },
]

const incubatorResources = [
  {
    icon: Coins,
    title: 'Direct Seed Grant Funding',
    desc: 'Financial capital allocated for camera rentals, safety gear, travel, or athletic research sensors.',
  },
  {
    icon: Rocket,
    title: 'Master Mentorship & Review',
    desc: 'One-on-one strategy sessions with Master Keo Moni, Master Chon Sovan, and guest film directors.',
  },
  {
    icon: Sparkles,
    title: 'Dojang Showcase Stage',
    desc: 'Present your completed film, research, or event directly to the Infinity Taekwondo community.',
  },
]

const incubationSteps = [
  {
    step: '01',
    title: 'Pitch Submission',
    desc: 'Submit your concept, budget request, and execution timeline via the online application portal.',
  },
  {
    step: '02',
    title: 'Committee Review',
    desc: 'Present your vision in a 15-minute pitch to our Masters and Creative Directors.',
  },
  {
    step: '03',
    title: 'Seed Funding & Mentorship',
    desc: 'Approved projects receive seed capital, facility mat access, and 1-on-1 weekly guidance.',
  },
  {
    step: '04',
    title: 'Public Showcase & Premiere',
    desc: 'Launch your completed film, tournament, or clinic with full marketing support.',
  },
]

export default function IncubatorPage() {
  const { t, language } = useLanguage()
  const [submitted, setSubmitted] = React.useState(false)
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [errorMsg, setErrorMsg] = React.useState('')
  const [formData, setFormData] = React.useState({
    studentName: '',
    beltRank: 'Blue Belt',
    phone: '',
    email: '',
    track: 'Martial Arts Cinema & Stunts',
    title: '',
    summary: '',
    hp_security_token: '',
  })

  const handleTrackSelect = (trackTitle: string) => {
    setFormData((prev) => ({ ...prev, track: trackTitle }))
    const el = document.getElementById('pitch-form-section')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (isSubmitting) return
    setErrorMsg('')

    if (!validateHoneypot(formData.hp_security_token)) {
      setSubmitted(true)
      return
    }

    const rateCheck = checkRateLimit('incubator_pitch_submit', 3)
    if (!rateCheck.allowed) {
      setErrorMsg('Please wait a moment before submitting another pitch.')
      return
    }

    const cleanStudentName = sanitizeInput(formData.studentName, 100)
    const cleanBelt = sanitizeInput(formData.beltRank, 100)
    const cleanPhone = sanitizePhone(formData.phone)
    const cleanEmail = sanitizeEmail(formData.email)
    const cleanTrack = sanitizeInput(formData.track, 100)
    const cleanTitle = sanitizeInput(formData.title, 150)
    const cleanSummary = sanitizeInput(formData.summary, 2000)

    if (!cleanStudentName || !cleanEmail || !cleanPhone || !cleanSummary) {
      setErrorMsg('Please complete all required fields.')
      return
    }

    if (!isValidEmail(cleanEmail)) {
      setErrorMsg('Please enter a valid email address.')
      return
    }

    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 600))
    setIsSubmitting(false)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({
        studentName: '',
        beltRank: 'Blue Belt',
        phone: '',
        email: '',
        track: 'Martial Arts Cinema & Stunts',
        title: '',
        summary: '',
        hp_security_token: '',
      })
    }, 4000)
  }

  return (
    <div className="bg-white dark:bg-black text-zinc-900 dark:text-white min-h-screen pt-20 sm:pt-24 pb-20 font-sans selection:bg-brand-red selection:text-white transition-colors duration-500 overflow-x-hidden">
      {/* Hero Header */}
      <section className="relative pt-8 sm:pt-12 pb-10 sm:pb-14 px-4 sm:px-6 text-center overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[450px] bg-gradient-to-b from-brand-red/15 via-transparent to-transparent blur-3xl rounded-full opacity-60 pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl border border-brand-red/30 bg-brand-red/10 text-brand-red text-xs font-bold uppercase tracking-widest mb-4">
            <Rocket className="w-3.5 h-3.5" /> {t.incubator.badge}
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight mb-4 sm:mb-6 leading-none text-zinc-900 dark:text-white break-words">
            {t.incubator.heroTitle1} <span className="text-brand-red">{t.incubator.heroTitle2}</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto font-light leading-relaxed px-2">
            {t.incubator.heroSubtitle}
          </p>
        </div>
      </section>

      {/* Incubation Process 4-Stage Roadmap (14px radius) */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-16 sm:mb-20 max-w-7xl">
        <div className="p-6 sm:p-10 rounded-[14px] bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 shadow-sm">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-red block mb-1">
              From Concept to Reality
            </span>
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-zinc-900 dark:text-white">
              The 4-Step Incubation Engine
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {incubationSteps.map((s) => (
              <div
                key={s.step}
                className="p-5 rounded-xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <span className="text-3xl sm:text-4xl font-black text-brand-red/40 font-mono block mb-2">
                    {s.step}
                  </span>
                  <h3 className="text-base font-black uppercase text-zinc-900 dark:text-white tracking-tight mb-1.5">
                    {s.title}
                  </h3>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 font-light leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Provided (14px radius) */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-16 sm:mb-20 max-w-7xl">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-red block mb-1">
            Empowerment Framework
          </span>
          <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-zinc-900 dark:text-white">
            {t.incubator.whatWeProvide}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {incubatorResources.map((res) => {
            const Icon = res.icon
            return (
              <Card3D key={res.title} max={4} depth={3} className="h-full">
                <div
                  className="p-6 sm:p-8 rounded-[14px] bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 shadow-sm flex flex-col justify-between h-full"
                >
                  <div>
                    <div className="p-3 bg-brand-red/10 text-brand-red rounded-xl w-fit mb-4">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-black uppercase tracking-tight text-zinc-900 dark:text-white mb-2">
                      {res.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 font-light leading-relaxed">
                      {res.desc}
                    </p>
                  </div>
                </div>
              </Card3D>
            )
          })}
        </div>
      </section>

      {/* Incubator Tracks Grid (14px radius) */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-16 sm:mb-24 max-w-7xl">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-red block mb-1">
            4 Project Directions
          </span>
          <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-zinc-900 dark:text-white">
            {t.incubator.focusAreas}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {tracks.map((track) => {
            const Icon = track.icon
            const localizedTitle =
              language === 'en'
                ? track.title
                : track.translations?.[language]?.title || track.title
            const localizedDesc =
              language === 'en'
                ? track.description
                : track.translations?.[language]?.description || track.description
            const localizedDeliverables =
              language === 'en'
                ? track.deliverables
                : track.translations?.[language]?.deliverables || track.deliverables

            return (
              <Card3D key={track.id} max={5} depth={4} className="h-full">
                <div
                  className="p-6 sm:p-8 rounded-[14px] bg-zinc-50/70 dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800 hover:border-brand-red/40 transition-all duration-300 shadow-sm flex flex-col justify-between h-full"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span className="px-2.5 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest bg-brand-red/10 text-brand-red border border-brand-red/20">
                        {track.tag}
                      </span>
                      <div
                        className="p-2.5 rounded-xl"
                        style={{ backgroundColor: `${track.badgeColor}15`, color: track.badgeColor }}
                      >
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-black uppercase text-zinc-900 dark:text-white tracking-tight mb-1">
                      {localizedTitle}
                    </h3>
                    <span className="text-xs font-bold text-brand-red uppercase tracking-wider block mb-3">
                      {track.koreanTitle}
                    </span>

                    <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 font-light leading-relaxed mb-6">
                      {localizedDesc}
                    </p>

                    <div className="space-y-2 mb-6">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 block">
                        Track Support Included:
                      </span>
                      {localizedDeliverables.map((del, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-zinc-700 dark:text-zinc-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-brand-red shrink-0" />
                          <span className="truncate">{del}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-zinc-200/60 dark:border-zinc-800/60 flex items-center justify-between">
                    <span className="text-[11px] text-brand-red font-bold uppercase tracking-wider">
                      Eligible for Seed Grant
                    </span>
                    <button
                      onClick={() => handleTrackSelect(track.title)}
                      className="text-xs font-bold text-zinc-900 dark:text-white hover:text-brand-red inline-flex items-center gap-1 cursor-pointer transition-colors touch-press"
                    >
                      Apply for this track &rarr;
                    </button>
                  </div>
                </div>
              </Card3D>
            )
          })}
        </div>
      </section>

      {/* Pitch Submission Form (14px radius) */}
      <section id="pitch-form-section" className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="p-6 sm:p-10 md:p-12 rounded-[14px] bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-2xl">
          <div className="mb-8 text-center sm:text-left">
            <span className="text-[10px] font-bold uppercase tracking-widest text-brand-red block mb-1">
              Apply For Grant &amp; Support
            </span>
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-zinc-900 dark:text-white">
              {t.incubator.pitchTitle1} <span className="text-brand-red">{t.incubator.pitchTitle2}</span>
            </h2>
            <p className="text-xs sm:text-sm text-zinc-500 mt-1 font-light">
              {t.incubator.pitchSubtitle}
            </p>
          </div>

          {submitted ? (
            <div className="p-8 bg-brand-red/10 border border-brand-red/30 rounded-xl text-center space-y-3">
              <h4 className="text-xl font-bold uppercase tracking-tight text-brand-red">
                Project Pitch Submitted!
              </h4>
              <p className="text-sm text-zinc-600 dark:text-zinc-300 font-light">
                Our Incubator Committee meets every two weeks. We will contact you to schedule your presentation pitch.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Anti-Spam Honeypot Trap */}
              <input
                type="text"
                name="hp_security_token"
                value={formData.hp_security_token}
                onChange={(e) => setFormData({ ...formData, hp_security_token: e.target.value })}
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
              />

              {errorMsg && (
                <div
                  role="alert"
                  className="p-3.5 bg-brand-red/10 border border-brand-red/30 rounded-xl text-xs text-brand-red font-bold flex items-center gap-2"
                >
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 ml-1">
                    {t.incubator.studentName} *
                  </label>
                  <input
                    type="text"
                    required
                    autoComplete="name"
                    aria-required="true"
                    aria-invalid={!!errorMsg}
                    placeholder="Your Full Name"
                    value={formData.studentName}
                    onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                    className="w-full bg-white dark:bg-black border border-zinc-200 dark:border-zinc-800 rounded-xl px-4 py-3.5 text-base sm:text-sm focus:outline-none focus:border-brand-red text-zinc-900 dark:text-white"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 ml-1">
                    {t.incubator.beltRank} *
                  </label>
                  <input
                    type="text"
                    required
                    aria-required="true"
                    aria-invalid={!!errorMsg}
                    placeholder="e.g. Green Belt, 1st Dan"
                    value={formData.beltRank}
                    onChange={(e) => setFormData({ ...formData, beltRank: e.target.value })}
                    className="w-full bg-white dark:bg-black border border-zinc-200 dark:border-zinc-800 rounded-xl px-4 py-3.5 text-base sm:text-sm focus:outline-none focus:border-brand-red text-zinc-900 dark:text-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 ml-1">
                    WhatsApp / Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    inputMode="tel"
                    autoComplete="tel"
                    aria-required="true"
                    aria-invalid={!!errorMsg}
                    placeholder="+855 12 345 678"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-white dark:bg-black border border-zinc-200 dark:border-zinc-800 rounded-xl px-4 py-3.5 text-base sm:text-sm focus:outline-none focus:border-brand-red text-zinc-900 dark:text-white"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 ml-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    inputMode="email"
                    autoComplete="email"
                    aria-required="true"
                    aria-invalid={!!errorMsg}
                    placeholder="student@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-white dark:bg-black border border-zinc-200 dark:border-zinc-800 rounded-xl px-4 py-3.5 text-base sm:text-sm focus:outline-none focus:border-brand-red text-zinc-900 dark:text-white"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 ml-1">
                  {t.incubator.projectTrack} *
                </label>
                <select
                  value={formData.track}
                  onChange={(e) => setFormData({ ...formData, track: e.target.value })}
                  className="w-full bg-white dark:bg-black border border-zinc-200 dark:border-zinc-800 rounded-xl px-4 py-3.5 text-base sm:text-sm focus:outline-none focus:border-brand-red text-zinc-700 dark:text-zinc-300"
                >
                  <option>Martial Arts Cinema & Stunts</option>
                  <option>Community Outreach & Youth Clinics</option>
                  <option>Sport Science & Biomechanics Research</option>
                  <option>Dojang Leadership & Tournament Ops</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 ml-1">
                  {t.incubator.conceptSummary} *
                </label>
                <textarea
                  rows={4}
                  required
                  aria-required="true"
                  aria-invalid={!!errorMsg}
                  placeholder="Describe your project, target audience, timeline, and what equipment or grant support you need..."
                  value={formData.summary}
                  onChange={(e) => setFormData({ ...formData, summary: e.target.value })}
                  className="w-full bg-white dark:bg-black border border-zinc-200 dark:border-zinc-800 rounded-xl px-4 py-3.5 text-base sm:text-sm focus:outline-none focus:border-brand-red resize-none text-zinc-900 dark:text-white"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-xl bg-brand-red disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold text-xs uppercase tracking-widest hover:bg-zinc-900 transition-all shadow-brand-glow flex items-center justify-center gap-2 touch-press cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" /> Submitting Pitch...
                  </>
                ) : (
                  <>
                    {t.incubator.submitPitch} <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  )
}
