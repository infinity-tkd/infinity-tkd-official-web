'use client'

import * as React from 'react'
import Link from 'next/link'
import {
  Users,
  Smile,
  Target,
  Clock,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  ChevronRight,
  ArrowRight,
  Heart,
  Zap,
  GraduationCap,
} from 'lucide-react'
import {
  studentAgeDivisions,
  classFormats,
  type StudentAgeDivision,
  type ClassFormat,
} from '@/data/ageDivisions'
import { useLanguage } from '@/context/LanguageContext'
import { SafeImage } from '@/components/SafeImage'

const iconMap = {
  Users,
  Smile,
  Target,
}

export function AgeDivisionsAndFormats() {
  const { t, localizeList } = useLanguage()
  const [selectedAgeId, setSelectedAgeId] = React.useState<string>(studentAgeDivisions[0].id)
  const [selectedFormatId, setSelectedFormatId] = React.useState<string>(classFormats[0].id)

  const localizedAges = React.useMemo(() => {
    return localizeList(studentAgeDivisions)
  }, [localizeList])

  const localizedFormats = React.useMemo(() => {
    return localizeList(classFormats)
  }, [localizeList])

  const activeAge =
    localizedAges.find((a) => a.id === selectedAgeId) || localizedAges[0]
  const activeFormat =
    localizedFormats.find((f) => f.id === selectedFormatId) || localizedFormats[0]

  return (
    <div className="space-y-16 sm:space-y-20">
      {/* ------------------------------------------------------------------------ */}
      {/* SECTION 1: ALL AGES WELCOME (TIGERS TO ELDERS) */}
      {/* ------------------------------------------------------------------------ */}
      <div className="w-full bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-[14px] p-6 sm:p-8 md:p-10 shadow-xl relative overflow-hidden transition-colors duration-500">
        {/* Dynamic Background Glow */}
        <div
          className="absolute top-0 right-0 w-96 h-96 blur-[130px] rounded-full pointer-events-none opacity-15 transition-colors duration-500"
          style={{ backgroundColor: activeAge.badgeColor }}
        />

        <div className="max-w-3xl mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xl bg-brand-red/10 text-brand-red text-[10px] font-bold uppercase tracking-widest mb-2 border border-brand-red/20">
            <Users className="w-3.5 h-3.5" /> All Ages Welcome • Tigers to Golden Age
          </div>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight text-zinc-900 dark:text-white">
            Training Tailored For <span className="text-brand-red">Every Stage of Life</span>
          </h3>
          <p className="text-zinc-600 dark:text-zinc-400 text-xs sm:text-sm mt-1.5 font-light leading-relaxed">
            From toddlers developing balance and listening skills to active seniors preserving joint mobility, our certified Kukkiwon masters scale martial science safely for every age.
          </p>
        </div>

        {/* Age Category Selector Pills (Scrollable on Mobile, Wrap on Desktop) */}
        <div className="flex overflow-x-auto sm:flex-wrap gap-2 mb-8 pb-4 border-b border-zinc-200 dark:border-zinc-800 scrollbar-none snap-x touch-pan-x">
          {localizedAges.map((division) => {
            const isSelected = selectedAgeId === division.id

            return (
              <button
                key={division.id}
                onClick={() => setSelectedAgeId(division.id)}
                aria-pressed={isSelected}
                className={`px-3.5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center gap-2 cursor-pointer shrink-0 snap-center min-h-[44px] ${
                  isSelected
                    ? 'bg-zinc-900 text-white dark:bg-white dark:text-black shadow-md border-transparent scale-102'
                    : 'bg-zinc-50 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-800 hover:border-brand-red/40 hover:text-black dark:hover:text-white'
                }`}
              >
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: division.badgeColor }}
                />
                <span>{division.name}</span>
                <span className="text-[10px] opacity-70 font-mono">({division.ageRange.replace('Ages ', '')})</span>
              </button>
            )
          })}
        </div>

        {/* Active Age Division Showcase Card */}
        <div
          key={activeAge.id}
          className="grid lg:grid-cols-12 gap-8 items-center bg-zinc-50 dark:bg-zinc-900/60 rounded-xl p-6 sm:p-8 border border-zinc-200 dark:border-zinc-800/80 shadow-sm animate-fade-in"
        >
          {/* Left Column: Image & Badges */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-xl overflow-hidden aspect-[4/3] shadow-md border border-zinc-200 dark:border-zinc-800">
              <SafeImage
                src={activeAge.image}
                alt={activeAge.name}
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span
                  className="inline-block px-2.5 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest text-black mb-1.5 font-mono shadow-sm"
                  style={{ backgroundColor: activeAge.badgeColor }}
                >
                  {activeAge.ageRange}
                </span>
                <h4 className="text-xl font-black uppercase tracking-tight">{activeAge.name}</h4>
                <p className="text-xs text-zinc-300 font-mono">{activeAge.koreanTitle}</p>
              </div>
            </div>
          </div>

          {/* Right Column: Curriculum & Safety */}
          <div className="lg:col-span-7 space-y-5">
            <div>
              <h5 className="text-lg sm:text-xl font-black uppercase text-zinc-900 dark:text-white tracking-tight mb-1">
                {activeAge.tagline}
              </h5>
              <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 font-light leading-relaxed">
                {activeAge.developmentFocus}
              </p>
            </div>

            {/* Key Curriculum Bullets */}
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 block mb-2">
                Core Age-Calibrated Syllabus
              </span>
              <div className="grid sm:grid-cols-2 gap-2.5">
                {activeAge.keyCurriculum.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-2 p-3 rounded-xl bg-white dark:bg-zinc-950 border border-zinc-200/80 dark:border-zinc-800 text-xs text-zinc-700 dark:text-zinc-300 shadow-xs"
                  >
                    <CheckCircle2
                      className="w-3.5 h-3.5 shrink-0 mt-0.5"
                      style={{ color: activeAge.badgeColor }}
                    />
                    <span className="leading-relaxed font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Duration & Safety Info */}
            <div className="grid sm:grid-cols-2 gap-3 pt-3 border-t border-zinc-200 dark:border-zinc-800 text-xs">
              <div className="flex items-center gap-2 text-zinc-600 dark:text-zinc-400">
                <Clock className="w-4 h-4 text-brand-red shrink-0" />
                <span>Class Duration: <strong className="text-zinc-900 dark:text-white">{activeAge.classDuration}</strong></span>
              </div>
              <div className="flex items-center gap-2 text-zinc-600 dark:text-zinc-400">
                <ShieldCheck className="w-4 h-4 text-brand-red shrink-0" />
                <span className="truncate">{activeAge.safetyMeasures.split(',')[0]}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ------------------------------------------------------------------------ */}
      {/* SECTION 2: CLASS FORMATS (GENERAL, KIDS-ONLY, PRIVATE 1-ON-1) */}
      {/* ------------------------------------------------------------------------ */}
      <div>
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-xl bg-brand-red/10 text-brand-red text-xs font-bold uppercase tracking-widest mb-3 border border-brand-red/20">
            <Target className="w-3.5 h-3.5" /> Flexible Training Formats
          </div>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight text-zinc-900 dark:text-white">
            Choose Your <span className="text-brand-red">Class Format</span>
          </h3>
          <p className="text-zinc-600 dark:text-zinc-400 text-xs sm:text-sm mt-1.5 font-light leading-relaxed">
            Whether you want the high-energy camaraderie of group sessions, dedicated child-focused classes, or personalized 1-on-1 master assessment.
          </p>
        </div>

        {/* 3 Interactive Cards (14px radius) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {localizedFormats.map((format) => {
            const Icon = iconMap[format.iconName] || Users
            const isSelected = selectedFormatId === format.id

            return (
              <div
                key={format.id}
                role="button"
                tabIndex={0}
                aria-pressed={isSelected}
                onClick={() => setSelectedFormatId(format.id)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    setSelectedFormatId(format.id)
                  }
                }}
                className={`p-6 sm:p-8 rounded-[14px] border transition-all duration-300 flex flex-col justify-between cursor-pointer relative overflow-hidden focus:outline-none focus:ring-2 focus:ring-brand-red ${
                  isSelected
                    ? 'bg-zinc-900 text-white dark:bg-zinc-900 border-brand-red shadow-xl shadow-brand-red/10 scale-102'
                    : 'bg-white dark:bg-zinc-950 text-zinc-900 dark:text-white border-zinc-200 dark:border-zinc-800 hover:border-brand-red/40 hover:bg-zinc-50 dark:hover:bg-zinc-900/60'
                }`}
              >
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <div
                      className="p-3 rounded-xl"
                      style={{
                        backgroundColor: `${format.accentColor}20`,
                        color: format.accentColor,
                      }}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <span
                      className="px-2.5 py-1 rounded-lg text-[10px] font-black uppercase tracking-wider"
                      style={{
                        backgroundColor: `${format.accentColor}25`,
                        color: format.accentColor,
                      }}
                    >
                      {format.badge}
                    </span>
                  </div>

                  <h4 className="text-xl font-black uppercase mb-1 tracking-tight">{format.title}</h4>
                  <p className="text-xs text-brand-red font-bold uppercase mb-3">
                    {format.subtitle}
                  </p>

                  <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 font-light leading-relaxed mb-6">
                    {format.description}
                  </p>

                  {/* Benefits Checklist */}
                  <div className="space-y-2.5 mb-6">
                    {format.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs">
                        <CheckCircle2
                          className="w-3.5 h-3.5 shrink-0 mt-0.5"
                          style={{ color: format.accentColor }}
                        />
                        <span className="leading-relaxed font-medium text-zinc-700 dark:text-zinc-300">
                          {benefit}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-between text-xs">
                  <span className="text-zinc-400 font-mono text-[11px]">
                    Ratio: {format.ratio}
                  </span>
                  <Link
                    href={`/contact?subject=Inquiry%20regarding%20${encodeURIComponent(format.title)}`}
                    className="font-bold text-brand-red hover:underline inline-flex items-center gap-1 text-[11px] uppercase tracking-wider"
                  >
                    Inquire <ChevronRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
