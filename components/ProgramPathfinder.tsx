'use client'

import * as React from 'react'
import Link from 'next/link'
import { Sparkles, ArrowRight, CheckCircle2, RotateCcw } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import { buttonStyles } from '@/components/ui/Button'
import { cn } from '@/lib/utils'

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
    sublabelEn: 'Competition poomsae, demonstration or Dan certification',
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
  const optionClass =
    'group flex min-h-[80px] cursor-pointer flex-col justify-center rounded-xl border border-zinc-200 bg-white p-4 transition-colors hover:border-zinc-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red touch-press dark:border-zinc-800 dark:bg-zinc-950 dark:hover:border-zinc-600'
  const optionLabelClass = 'text-sm font-bold text-zinc-900 transition-colors group-hover:text-brand-red dark:text-white'
  const stepTitleClass = 'text-center text-xs font-bold uppercase tracking-widest text-zinc-500 sm:text-sm'

  return (
    <div className="w-full rounded-2xl border border-zinc-200 bg-zinc-50 p-5 sm:p-8 md:p-12 dark:border-zinc-800 dark:bg-zinc-900/40">
      {/* Header */}
      <div className="mx-auto mb-8 max-w-2xl text-center">
        <p className="mb-3 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-zinc-500">
          <Sparkles className="h-3.5 w-3.5" aria-hidden="true" /> {t.pathfinder.badge}
        </p>
        <h3 className="text-2xl font-black uppercase tracking-tight text-zinc-900 md:text-4xl dark:text-white">
          {t.pathfinder.title1} <span className="text-brand-red">{t.pathfinder.title2}</span>
        </h3>
        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{t.pathfinder.subtitle}</p>
      </div>

      {/* Step indicator */}
      <p className="sr-only" aria-live="polite">
        {step <= 3 ? `Step ${step} of 3` : 'Your recommendation'}
      </p>
      <div className="mb-8 flex items-center justify-center gap-2" aria-hidden="true">
        {[1, 2, 3].map((s) => (
          <span
            key={s}
            className={cn(
              'h-1.5 rounded-full transition-all duration-500',
              step >= s ? 'w-12 bg-brand-red' : 'w-6 bg-zinc-200 dark:bg-zinc-800'
            )}
          />
        ))}
      </div>

      {/* Step 1: age */}
      {step === 1 && (
        <div className="mx-auto max-w-xl animate-fade-in space-y-4">
          <h4 className={stepTitleClass}>{t.pathfinder.step1Title}</h4>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            {ageGroupOptions.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => {
                  setAgeGroup(item.id)
                  setStep(2)
                }}
                className={cn(optionClass, 'items-center text-center')}
              >
                <span className={optionLabelClass}>{getLocalizedLabel(item)}</span>
                {item.sublabelEn && <span className="mt-1 block text-[13px] text-zinc-500">{item.sublabelEn}</span>}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Step 2: goal */}
      {step === 2 && (
        <div className="mx-auto max-w-xl animate-fade-in space-y-4">
          <h4 className={stepTitleClass}>{t.pathfinder.step2Title}</h4>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {goalOptions.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => {
                  setGoal(item.id)
                  setStep(3)
                }}
                className={cn(optionClass, 'flex-row items-center justify-between text-left')}
              >
                <span>
                  <span className={cn(optionLabelClass, 'block')}>{getLocalizedLabel(item)}</span>
                  {item.sublabelEn && <span className="mt-0.5 block text-[13px] text-zinc-500">{item.sublabelEn}</span>}
                </span>
                <ArrowRight
                  className="ml-2 h-4 w-4 shrink-0 text-zinc-400 transition-transform group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Step 3: experience */}
      {step === 3 && (
        <div className="mx-auto max-w-xl animate-fade-in space-y-4">
          <h4 className={stepTitleClass}>{t.pathfinder.step3Title}</h4>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            {experienceOptions.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => {
                  setExperience(item.id)
                  setStep(4)
                }}
                className={cn(optionClass, 'items-center text-center')}
              >
                <span className={optionLabelClass}>{getLocalizedLabel(item)}</span>
                {item.sublabelEn && <span className="mt-1 block text-[13px] text-zinc-500">{item.sublabelEn}</span>}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Step 4: recommendation */}
      {step === 4 && (
        <div className="mx-auto max-w-2xl animate-fade-in space-y-6 rounded-xl border border-zinc-200 bg-white p-6 md:p-8 dark:border-zinc-800 dark:bg-zinc-950">
          <div className="flex flex-col justify-between gap-3 border-b border-zinc-200 pb-4 sm:flex-row sm:items-center dark:border-zinc-800">
            <div>
              <span className="mb-2 inline-block rounded-lg bg-zinc-100 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-widest text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
                {rec.division}
              </span>
              <h4 className="text-xl font-black uppercase leading-tight tracking-tight text-zinc-900 sm:text-2xl md:text-3xl dark:text-white">
                {rec.title}
              </h4>
              <span className="mt-1 block text-xs text-zinc-500">{rec.level}</span>
            </div>

            <button
              type="button"
              onClick={handleReset}
              className="flex min-h-[44px] cursor-pointer items-center gap-1.5 self-start rounded-lg px-3 py-2 text-xs text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-900 touch-press sm:self-auto dark:hover:bg-zinc-800 dark:hover:text-white"
              aria-label="Retake pathfinder assessment"
            >
              <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" /> {t.pathfinder.retake}
            </button>
          </div>

          <p className="text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">{rec.description}</p>

          <div className="flex items-center gap-3 rounded-xl border border-zinc-200 bg-zinc-50 p-4 text-xs dark:border-zinc-800 dark:bg-zinc-900">
            <CheckCircle2 className="h-4 w-4 shrink-0 text-brand-red" aria-hidden="true" />
            <div>
              <span className="block text-[11px] font-bold uppercase text-zinc-500">{t.pathfinder.recommendedRhythm}</span>
              <span className="font-semibold text-zinc-900 dark:text-white">{rec.pathway}</span>
            </div>
          </div>

          <div className="flex flex-col gap-3 pt-2 sm:flex-row">
            <Link
              href={`/contact?subject=Enrollment%20Pathfinder%20Result%3A%20${encodeURIComponent(rec.title)}`}
              className={buttonStyles({ variant: 'primary', size: 'lg', className: 'flex-1' })}
            >
              {t.pathfinder.claimTrial} <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link href="/academy" className={buttonStyles({ variant: 'outline', size: 'lg' })}>
              {t.pathfinder.viewSyllabus}
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}
