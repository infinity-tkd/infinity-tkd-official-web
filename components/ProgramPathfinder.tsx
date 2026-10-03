'use client'

import * as React from 'react'
import Link from 'next/link'
import { Sparkles, ArrowRight, CheckCircle2, RotateCcw, Target } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'

type AgeGroupId = 'kids' | 'teens' | 'adults'
type GoalId = 'poomsae' | 'tricking' | 'strength' | 'cinema'
type ExperienceId = 'beginner' | 'intermediate' | 'advanced'

interface OptionItem<T extends string> {
  id: T
  labelEn: string
  labelKm: string
  labelZh: string
  labelKo: string
  sublabelEn?: string
}

interface Recommendation {
  title: string
  division: string
  level: string
  description: string
  pathway: string
  badgeColor: string
}

const ageGroupOptions: OptionItem<AgeGroupId>[] = [
  {
    id: 'kids',
    labelEn: 'Kids (Ages 5-11)',
    labelKm: 'កុមារ (អាយុ ៥-១១ ឆ្នាំ)',
    labelZh: '少儿组 (5-11岁)',
    labelKo: '유소년부 (5~11세)',
    sublabelEn: 'Coordination, respect & fun',
  },
  {
    id: 'teens',
    labelEn: 'Teens (Ages 12-17)',
    labelKm: 'យុវវ័យ (អាយុ ១២-១៧ ឆ្នាំ)',
    labelZh: '青少年组 (12-17岁)',
    labelKo: '청소년부 (12~17세)',
    sublabelEn: 'Athleticism, agility & Dan rank',
  },
  {
    id: 'adults',
    labelEn: 'Adults (Ages 18+)',
    labelKm: 'មនុស្សពេញវ័យ (អាយុ ១៨+)',
    labelZh: '成人精进组 (18岁以上)',
    labelKo: '성인부 (18세 이상)',
    sublabelEn: 'Mobility, mastery & fitness',
  },
]

const goalOptions: OptionItem<GoalId>[] = [
  {
    id: 'poomsae',
    labelEn: 'Olympic Forms & Kukkiwon Belts',
    labelKm: 'ក្បាច់មេ Poomsae & ខ្សែក្រវាត់ Kukkiwon',
    labelZh: '奥运品势与国技院段位体系',
    labelKo: '올림픽 공인품새 & 국기원 단증 취득',
    sublabelEn: 'World Taekwondo recognized poomsae',
  },
  {
    id: 'tricking',
    labelEn: 'Freestyle Tricking & Acrobatics',
    labelKm: 'កាយសម្ព័ន្ធ Tricking & ហក់ទាត់លើអាកាស',
    labelZh: '极限特技翻转与空翻踢腿 (Tricking)',
    labelKo: '마샬아츠 트릭킹 & 아크로바틱 발차기',
    sublabelEn: '540/720 kicks, twists & spring pit',
  },
  {
    id: 'strength',
    labelEn: 'Calisthenics & Biomechanics Lab',
    labelKm: 'កម្លាំងកាយ & វិទ្យាសាស្ត្រកីឡា',
    labelZh: '运动科学与相对力量体能实验室',
    labelKo: '상대근력 캘리스데닉스 & 생체역학 랩',
    sublabelEn: 'Tendon pre-hab, Planche & power',
  },
  {
    id: 'cinema',
    labelEn: 'Action Cinema & Fight Choreography',
    labelKm: 'ភាពយន្តក្បាច់គុន & ការសម្តែងសកម្មភាព',
    labelZh: '动作影视武术指导与预演短片 (Pre-Viz)',
    labelKo: '액션 시네마 & 무술 파이트 안무',
    sublabelEn: 'Camera combat & showreel creation',
  },
]

const experienceOptions: OptionItem<ExperienceId>[] = [
  {
    id: 'beginner',
    labelEn: 'Complete Beginner (White Belt)',
    labelKm: 'អ្នកចាប់ផ្តើមដំបូង (ខ្សែក្រវាត់ស)',
    labelZh: '零基础初学者 (白带入道)',
    labelKo: '완전 초보자 (흰띠 입문)',
    sublabelEn: 'No martial arts experience needed',
  },
  {
    id: 'intermediate',
    labelEn: 'Intermediate (Color Belt)',
    labelKm: 'កម្រិតមធ្យម (ខ្សែក្រវាត់ពណ៌)',
    labelZh: '进阶学员 (色带阶级)',
    labelKo: '중급 수련생 (유급자 색띠)',
    sublabelEn: 'Previous martial arts or sports background',
  },
  {
    id: 'advanced',
    labelEn: 'Advanced / Black Belt (Dan Holder)',
    labelKm: 'កម្រិតខ្ពស់ / ខ្សែក្រវាត់ខ្មៅ (Dan)',
    labelZh: '高阶精进 / 黑带段位持有者',
    labelKo: '고급 수련생 / 유단자 (블랙벨트)',
    sublabelEn: 'Competitive sparring or Dan certification',
  },
]

export function ProgramPathfinder() {
  const { t, language } = useLanguage()
  const [step, setStep] = React.useState<number>(1)
  const [ageGroup, setAgeGroup] = React.useState<AgeGroupId | null>(null)
  const [goal, setGoal] = React.useState<GoalId | null>(null)
  const [experience, setExperience] = React.useState<ExperienceId | null>(null)

  const getLocalizedLabel = <T extends string>(item: OptionItem<T>) => {
    if (language === 'km') return item.labelKm
    if (language === 'zh') return item.labelZh
    if (language === 'ko') return item.labelKo
    return item.labelEn
  }

  const getRecommendation = (): Recommendation => {
    if (ageGroup === 'kids') {
      return {
        title: 'Junior World Taekwondo Foundations',
        division: 'The Dojang',
        level: 'White to Yellow Belt (Ages 5-11)',
        description:
          'Specialized curriculum focusing on gross motor coordination, spatial agility, respect, and foundational Olympic stances.',
        pathway: '3x Weekly • Taegeuk Poomsae & Junior Agility Obstacle Drills',
        badgeColor: '#EF2F38',
      }
    }
    if (goal === 'tricking') {
      return {
        title: 'Freestyle Poomsae & Tricking Lab',
        division: 'The Dojang & Studio',
        level: 'Green Belt and Above (All Ages)',
        description:
          'Deconstruct 540s, 720s, air tracks, and musical fight choreography with safety harness and spring floor training.',
        pathway: '2x Weekly • Acrobatic Spring Pit & High-Impact Landing Mats',
        badgeColor: '#EF2F38',
      }
    }
    if (goal === 'strength') {
      return {
        title: 'Calisthenics & Relative Strength Lab',
        division: 'Sport Science Lab',
        level: 'All Levels (Beginner to Elite)',
        description:
          'Tendon conditioning, straight-arm mechanics, Planche, Front Lever progressions, and kicking kinetics optimization.',
        pathway: '3x Weekly • Biomechanics Force Sensor Assessment Included',
        badgeColor: '#09BB00',
      }
    }
    if (goal === 'cinema') {
      return {
        title: 'Martial Arts Cinema & Fight Choreography',
        division: 'Creative Studio',
        level: 'Intermediate - Advanced',
        description:
          'Screen combat techniques, camera angles, selling hits, multi-person fight choreography, and cinematic showreel production.',
        pathway: 'Weekend Intensive • Sony Cinema FX Rig Access & Editing Lab',
        badgeColor: '#FF5733',
      }
    }
    return {
      title: 'World Taekwondo Recognized Poomsae',
      division: 'The Dojang',
      level: 'All Levels (Beginner to Dan Candidate)',
      description:
        'The premier curriculum for World Taekwondo standard forms, balance, breathing kinetics, and official Kukkiwon Dan certification.',
      pathway: '3x Weekly • Full Academy Membership with Quarterly Exams',
      badgeColor: '#EF2F38',
    }
  }

  const handleReset = () => {
    setStep(1)
    setAgeGroup(null)
    setGoal(null)
    setExperience(null)
  }

  const rec = getRecommendation()

  return (
    <div className="w-full bg-gradient-to-br from-zinc-950 via-black to-zinc-950 border border-brand-red/30 rounded-[14px] p-5 sm:p-8 md:p-12 shadow-2xl relative overflow-hidden text-white">
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-red/10 blur-[120px] rounded-full pointer-events-none" />

      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xl bg-brand-red/10 border border-brand-red/30 text-brand-red text-[10px] font-bold uppercase tracking-widest mb-3">
          <Sparkles className="w-3 h-3 animate-pulse" /> {t.pathfinder.badge}
        </div>
        <h3 className="text-2xl md:text-4xl font-black uppercase tracking-tight">
          {t.pathfinder.title1} <span className="text-brand-red">{t.pathfinder.title2}</span>
        </h3>
        <p className="text-zinc-400 text-xs md:text-sm mt-2 font-light">
          {t.pathfinder.subtitle}
        </p>
      </div>

      {/* Step Indicator */}
      <div className="flex justify-center items-center gap-3 mb-8" aria-label={`Step ${step} of 3`}>
        {[1, 2, 3].map((s) => (
          <div
            key={s}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              step >= s ? 'w-12 bg-brand-red shadow-[0_0_8px_#EF2F38]' : 'w-6 bg-zinc-800'
            }`}
          />
        ))}
      </div>

      {/* Step 1: Age Selection */}
      {step === 1 && (
        <div className="max-w-xl mx-auto space-y-4 animate-fade-in">
          <h4 className="text-center text-xs sm:text-sm font-bold uppercase tracking-widest text-zinc-300">
            {t.pathfinder.step1Title}
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {ageGroupOptions.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setAgeGroup(item.id)
                  setStep(2)
                }}
                className="p-4 rounded-xl bg-zinc-900/80 border border-zinc-800 hover:border-brand-red hover:bg-zinc-800 transition-all text-center cursor-pointer min-h-[90px] flex flex-col items-center justify-center group focus:outline-none focus:ring-2 focus:ring-brand-red"
              >
                <span className="font-bold text-sm text-white group-hover:text-brand-red transition-colors">
                  {getLocalizedLabel(item)}
                </span>
                {item.sublabelEn && (
                  <span className="text-[10px] text-zinc-500 mt-1 font-light block">
                    {item.sublabelEn}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Step 2: Training Goal */}
      {step === 2 && (
        <div className="max-w-xl mx-auto space-y-4 animate-fade-in">
          <h4 className="text-center text-xs sm:text-sm font-bold uppercase tracking-widest text-zinc-300">
            {t.pathfinder.step2Title}
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {goalOptions.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setGoal(item.id)
                  setStep(3)
                }}
                className="p-4 rounded-xl bg-zinc-900/80 border border-zinc-800 hover:border-brand-red hover:bg-zinc-800 transition-all text-left flex items-center justify-between cursor-pointer group focus:outline-none focus:ring-2 focus:ring-brand-red min-h-[80px]"
              >
                <div>
                  <span className="font-bold text-xs sm:text-sm text-white group-hover:text-brand-red transition-colors block">
                    {getLocalizedLabel(item)}
                  </span>
                  {item.sublabelEn && (
                    <span className="text-[10px] text-zinc-500 font-light mt-0.5 block">
                      {item.sublabelEn}
                    </span>
                  )}
                </div>
                <ArrowRight className="w-4 h-4 text-brand-red shrink-0 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Step 3: Experience Level */}
      {step === 3 && (
        <div className="max-w-xl mx-auto space-y-4 animate-fade-in">
          <h4 className="text-center text-xs sm:text-sm font-bold uppercase tracking-widest text-zinc-300">
            {t.pathfinder.step3Title}
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {experienceOptions.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setExperience(item.id)
                  setStep(4)
                }}
                className="p-4 rounded-xl bg-zinc-900/80 border border-zinc-800 hover:border-brand-red hover:bg-zinc-800 transition-all text-center cursor-pointer min-h-[90px] flex flex-col items-center justify-center group focus:outline-none focus:ring-2 focus:ring-brand-red"
              >
                <span className="font-bold text-xs sm:text-sm text-white group-hover:text-brand-red transition-colors">
                  {getLocalizedLabel(item)}
                </span>
                {item.sublabelEn && (
                  <span className="text-[10px] text-zinc-500 mt-1 font-light block">
                    {item.sublabelEn}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Step 4: Output Recommendation Result */}
      {step === 4 && (
        <div className="max-w-2xl mx-auto bg-zinc-900/90 border border-brand-red/40 rounded-xl p-6 md:p-8 animate-fade-in space-y-6 shadow-2xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-zinc-800 pb-4">
            <div>
              <span
                className="text-[10px] font-black uppercase tracking-widest px-2.5 py-0.5 rounded-lg text-white inline-block mb-1 shadow-sm"
                style={{ backgroundColor: rec.badgeColor }}
              >
                {rec.division}
              </span>
              <h4 className="text-xl sm:text-2xl md:text-3xl font-black uppercase text-white tracking-tight leading-tight">
                {rec.title}
              </h4>
              <span className="text-xs text-zinc-400 font-mono mt-0.5 block">
                {rec.level}
              </span>
            </div>

            <button
              onClick={handleReset}
              className="text-xs text-zinc-400 hover:text-white flex items-center gap-1.5 self-start sm:self-auto cursor-pointer px-3 py-2 min-h-[44px] rounded-lg hover:bg-zinc-800 transition-colors"
              aria-label="Retake pathfinder assessment"
            >
              <RotateCcw className="w-3.5 h-3.5" /> {t.pathfinder.retake}
            </button>
          </div>

          <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed font-light">
            {rec.description}
          </p>

          <div className="p-4 bg-black/60 rounded-xl border border-zinc-800 flex items-center gap-3 text-xs">
            <CheckCircle2 className="w-4 h-4 text-brand-red shrink-0" />
            <div>
              <span className="text-zinc-400 uppercase font-bold text-[10px] block">
                {t.pathfinder.recommendedRhythm}
              </span>
              <span className="font-semibold text-white">{rec.pathway}</span>
            </div>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <Link
              href={`/contact?subject=Enrollment%20Pathfinder%20Result%3A%20${encodeURIComponent(rec.title)}`}
              className="flex-1 py-3.5 px-6 rounded-xl bg-brand-red text-white text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all shadow-brand-glow text-center flex items-center justify-center gap-2"
            >
              {t.pathfinder.claimTrial} <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/academy"
              className="py-3.5 px-6 rounded-xl border border-zinc-700 text-white text-xs font-bold uppercase tracking-widest hover:border-brand-red hover:text-brand-red transition-all text-center"
            >
              {t.pathfinder.viewSyllabus}
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}
