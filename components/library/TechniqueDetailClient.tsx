'use client'

import * as React from 'react'
import Link from 'next/link'
import type { LibraryItem, LibraryCategoryMeta } from '@/data/library'
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  XCircle,
  Clock,
  Target,
  Video,
  Shield,
  Layers,
  Sparkles,
  BookOpen,
  Compass,
  Gauge,
  RotateCw,
  Flame,
  Zap,
  Play,
  FileText,
  Download,
  ExternalLink,
  User,
  Calendar,
  Award,
  AlertTriangle,
  Scale,
  Footprints,
  Volume2,
} from 'lucide-react'
import { getSafeVideoEmbedUrl } from '@/lib/videoHelper'
import { BlackBeltStripesBadge } from '@/components/library/BlackBeltStripesBadge'
import {
  WangFloorPlanVisualizer,
  ClockCompassDial,
} from '@/components/library/WangFloorPlanVisualizer'
import { SafeImage } from '@/components/SafeImage'
import { SafeGrid } from '@/components/SafeGrid'
import { useLanguage } from '@/context/LanguageContext'
import { decoratePoomsaeItem } from '@/data/library/poomsaeTranslations'
import { getLocalizedKickingItem } from '@/data/library/kickingTranslationsDetailed'

interface TechniqueDetailClientProps {
  item: LibraryItem
  categoryMeta?: LibraryCategoryMeta
  relatedItems: LibraryItem[]
}

export function TechniqueDetailClient({
  item: rawItem,
  categoryMeta,
  relatedItems,
}: TechniqueDetailClientProps) {
  const { t, language, localize } = useLanguage()

  const isPoomsae = rawItem.category === 'poomsae'
  const isStance = rawItem.category === 'stances'
  const isHistory = rawItem.category === 'history'
  const isCompetitionRule = rawItem.category === 'competition-rules'
  const isKicking =
    rawItem.category === 'kicking-fundamentals' || rawItem.category === 'kicking-advanced'

  // Decorate item based on current active language
  const item = React.useMemo(() => {
    if (isPoomsae) {
      return decoratePoomsaeItem(rawItem, language)
    }
    if (isKicking) {
      return getLocalizedKickingItem(rawItem, language as 'en' | 'km' | 'zh' | 'ko')
    }
    return localize(rawItem)
  }, [rawItem, isPoomsae, isKicking, language, localize])

  // Stance weight distribution calculation
  const rearPercent = item.weightDistribution?.includes('70%')
    ? 70
    : item.weightDistribution?.includes('90%')
    ? 90
    : item.weightDistribution?.includes('65%')
    ? 35
    : 50
  const frontPercent = 100 - rearPercent

  const safeVideoUrl = getSafeVideoEmbedUrl(item.videoUrl || item.mediaUrl)

  // Dynamic Headings based on Discipline Category
  const stepSectionTitle = isHistory
    ? t.library.chronologicalMilestones
    : isCompetitionRule
    ? t.library.rulebookProtocols
    : isPoomsae
    ? t.library.poomsaeSequence
    : t.library.stepByStepTutorial

  const StepIcon = isHistory ? Calendar : isCompetitionRule ? Scale : Target

  const cuesSectionTitle = isHistory
    ? t.library.archivalEvidence
    : isCompetitionRule
    ? t.library.refereeScoring
    : isPoomsae
    ? t.library.biomechanicalGeometry
    : t.library.cuesTitle

  const errorsSectionTitle = isHistory
    ? t.library.historiographicalNotes
    : isCompetitionRule
    ? t.library.gamJeomPenalties
    : isPoomsae
    ? t.library.refereeDeductions
    : t.library.errorsTitle

  return (
    <div className="bg-zinc-50 dark:bg-black text-zinc-900 dark:text-white min-h-screen pt-20 sm:pt-24 pb-20 font-sans selection:bg-brand-red selection:text-white transition-colors duration-500 overflow-x-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        {/* Navigation Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-zinc-400 mb-6 flex-wrap">
          <Link href="/library" className="hover:text-brand-red transition-colors">
            {t.library.heroTitle1} {t.library.heroTitle2}
          </Link>
          <span>/</span>
          <Link
            href={`/library/${item.category}`}
            className="hover:text-brand-red transition-colors text-brand-red"
          >
            {categoryMeta?.title || item.category}
          </Link>
          <span>/</span>
          <span className="text-zinc-900 dark:text-white truncate">{item.name}</span>
        </div>

        {/* Hero Banner (14px radius) */}
        <div className="p-8 sm:p-12 rounded-[14px] bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xl mb-10 relative overflow-hidden">
          <div
            className="absolute top-0 right-0 w-96 h-96 blur-[130px] rounded-full pointer-events-none opacity-20"
            style={{ backgroundColor: item.badgeColor }}
          />

          {isPoomsae && item.diagramSymbol && (
            <div className="absolute -right-4 -top-6 text-9xl font-black text-zinc-100 dark:text-zinc-800/30 select-none pointer-events-none font-serif opacity-40">
              {item.diagramSymbol}
            </div>
          )}

          <div className="relative z-10">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="px-2.5 py-1 rounded-lg text-[10px] font-mono font-bold uppercase tracking-wider bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300">
                {item.beltLevel}
              </span>
              {item.danMastery && (
                <BlackBeltStripesBadge
                  stripes={item.danMastery.beltStripes}
                  roman={item.danMastery.beltStripeRoman}
                />
              )}
              <span className="text-zinc-400">&bull;</span>
              <span className="text-[10px] font-mono text-zinc-500">{item.difficulty}</span>
              {item.danMastery && (
                <>
                  <span className="text-zinc-400">&bull;</span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
                    {t.library.characteristicOfMaster} {item.danMastery.masterCharacteristic}
                  </span>
                </>
              )}
              {item.taegeukPhilosophy && (
                <>
                  <span className="text-zinc-400">&bull;</span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-brand-red/10 text-brand-red border border-brand-red/20 flex items-center gap-1">
                    <span className="font-serif">{item.taegeukPhilosophy.trigramSymbol}</span>
                    <span>
                      {item.taegeukPhilosophy.trigramName} &bull;{' '}
                      {item.taegeukPhilosophy.naturalElement.split('(')[0].trim()}
                    </span>
                  </span>
                </>
              )}
              {item.newPoomsaeSpec && (
                <>
                  <span className="text-zinc-400">&bull;</span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-blue-500/10 text-blue-400 border border-blue-500/20 flex items-center gap-1">
                    <span>Form #{item.newPoomsaeSpec.formNumber}</span>
                    <span>&bull;</span>
                    <span>{item.newPoomsaeSpec.targetAge.split('(')[0].trim()}</span>
                    <span>&bull;</span>
                    <span>{item.newPoomsaeSpec.officialDuration}</span>
                  </span>
                </>
              )}
            </div>

            <span className="text-sm font-mono font-bold text-brand-red block mb-1">
              {item.koreanName} ({item.romanized})
            </span>
            <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight mb-4 text-zinc-900 dark:text-white">
              {item.name}
            </h1>
            <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 font-light leading-relaxed max-w-2xl">
              {item.summary}
            </p>
          </div>
        </div>

        {/* ------------------------------------------------------------------ */}
        {/* KUKKIWON BLACK BELT DAN MASTERY SPECIFICATION (If Dan Poomsae)     */}
        {/* ------------------------------------------------------------------ */}
        {item.danMastery && (
          <div className="mb-10 p-6 sm:p-8 rounded-[14px] bg-gradient-to-br from-zinc-950 via-zinc-900 to-black text-white border border-amber-500/30 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 blur-[100px] rounded-full pointer-events-none" />

            {/* Header */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-zinc-800 relative z-10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 font-bold shrink-0">
                  <Award className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-amber-400">
                      {t.library.danMasterySpec}
                    </span>
                    <BlackBeltStripesBadge
                      stripes={item.danMastery.beltStripes}
                      roman={item.danMastery.beltStripeRoman}
                      compact
                    />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-white flex items-center gap-2 flex-wrap">
                    <span>{item.danMastery.danRank}</span>
                    <span className="text-zinc-500 text-sm font-normal">
                      ({item.danMastery.koreanDanRank})
                    </span>
                    <span className="text-zinc-600">&bull;</span>
                    <span className="text-amber-400">{item.danMastery.formName}</span>
                    <span className="text-zinc-400 text-sm font-serif">
                      ({item.danMastery.koreanFormName})
                    </span>
                  </h2>
                </div>
              </div>

              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs font-mono font-bold">
                <span>{t.library.characteristicOfMaster}</span>
                <span className="text-white underline decoration-amber-400 font-black tracking-wide uppercase">
                  {item.danMastery.masterCharacteristic}
                </span>
              </div>
            </div>

            {/* Matrix Data Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 py-6 border-b border-zinc-800/80 relative z-10">
              {/* Meaning of Name */}
              <div className="p-4 rounded-xl bg-zinc-900/80 border border-zinc-800 space-y-1.5">
                <span className="text-[10px] font-mono uppercase text-zinc-400 tracking-wider block">
                  {t.library.meaningOfName}
                </span>
                <strong className="text-sm font-bold text-white block">
                  {item.danMastery.meaningOfName}
                </strong>
                <span className="text-[11px] text-zinc-400 leading-snug block">
                  Forms the spiritual baseline of {item.danMastery.formName} Dan technique.
                </span>
              </div>

              {/* Floor Pattern Symbol */}
              <div className="p-4 rounded-xl bg-zinc-900/80 border border-zinc-800 space-y-1.5">
                <span className="text-[10px] font-mono uppercase text-zinc-400 tracking-wider block">
                  Floor Pattern (Line)
                </span>
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-serif font-black text-amber-400">
                    {item.danMastery.floorPattern}
                  </span>
                  <strong className="text-sm font-bold text-white">
                    {item.danMastery.floorPatternName}
                  </strong>
                </div>
                <span className="text-[11px] text-zinc-400 leading-snug block">
                  KTA / WT official directional trajectory.
                </span>
              </div>

              {/* Meaning of Symbol */}
              <div className="p-4 rounded-xl bg-zinc-900/80 border border-zinc-800 space-y-1.5">
                <span className="text-[10px] font-mono uppercase text-zinc-400 tracking-wider block">
                  Meaning of Symbol
                </span>
                <div className="flex items-center gap-2">
                  <span className="text-lg font-serif font-black text-white px-2 py-0.5 rounded bg-zinc-800 border border-zinc-700">
                    {item.danMastery.symbol}
                  </span>
                  <strong className="text-xs font-bold text-zinc-200">
                    {item.danMastery.meaningOfSymbol}
                  </strong>
                </div>
                <span className="text-[11px] text-zinc-400 leading-snug block">
                  Hanja calligraphy symbolism.
                </span>
              </div>

              {/* Belt Stripes Badge & Rank */}
              <div className="p-4 rounded-xl bg-zinc-900/80 border border-zinc-800 space-y-1.5">
                <span className="text-[10px] font-mono uppercase text-zinc-400 tracking-wider block">
                  Belt Embroidery Stripes
                </span>
                <div className="flex items-center gap-2">
                  <BlackBeltStripesBadge
                    stripes={item.danMastery.beltStripes}
                    roman={item.danMastery.beltStripeRoman}
                  />
                  <span className="text-xs font-mono font-bold text-amber-400">
                    {item.danMastery.danRank}
                  </span>
                </div>
                <span className="text-[11px] text-zinc-400 leading-snug block">
                  {item.danMastery.danRank} Grandmaster Kukkiwon Dan rank standard.
                </span>
              </div>
            </div>

            {/* Key Yudanja Techniques */}
            {item.danMastery.introducedKeyTechniques && item.danMastery.introducedKeyTechniques.length > 0 && (
              <div className="pt-6 relative z-10 space-y-4">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-amber-400 font-bold">
                  <Zap className="w-4 h-4" /> Core Yudanja Dan Techniques
                </div>
                <div className="flex flex-wrap gap-2">
                  {item.danMastery.introducedKeyTechniques.map((tech: string, idx: number) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-xs text-amber-300 font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* ------------------------------------------------------------------ */}
        {/* TAEGEUK COMPREHENSIVE PHILOSOPHY & WANG FLOOR PLAN VISUALIZER      */}
        {/* ------------------------------------------------------------------ */}
        {item.taegeukPhilosophy && (
          <div className="space-y-10 mb-10">
            {/* Visualizer Interactive Floor Plan */}
            <WangFloorPlanVisualizer
              trigramLines={item.taegeukPhilosophy.trigramLines}
              wangFloorPlanLines={item.taegeukPhilosophy.wangFloorPlanLines}
              formName={item.name}
              trigramSymbol={item.taegeukPhilosophy.trigramSymbol}
              elementName={item.taegeukPhilosophy.naturalElement}
            />

            {/* Philosophy & Dialectic Role Banner */}
            <div className="p-6 sm:p-8 rounded-[14px] bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-md space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-zinc-100 dark:border-zinc-800 flex-wrap gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-brand-red/10 border border-brand-red/20 flex items-center justify-center text-brand-red font-serif font-black text-xl">
                    {item.taegeukPhilosophy.trigramSymbol}
                  </div>
                  <div>
                    <h3 className="text-base font-black uppercase text-zinc-900 dark:text-white">
                      Trigram Philosophy: {item.taegeukPhilosophy.trigramName} (
                      {item.taegeukPhilosophy.koreanTrigramName})
                    </h3>
                    <span className="text-xs text-brand-red font-mono font-bold">
                      Natural Element: {item.taegeukPhilosophy.naturalElement}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-lg text-xs font-mono font-bold bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300">
                    Rank: {item.taegeukPhilosophy.practitionerRank}
                  </span>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 text-xs leading-relaxed">
                <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-100 dark:border-zinc-800 space-y-1.5">
                  <strong className="text-zinc-900 dark:text-white uppercase font-bold block">
                    Core Philosophical Concept
                  </strong>
                  <p className="text-zinc-600 dark:text-zinc-400 font-light">
                    {item.taegeukPhilosophy.coreConcept}
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-100 dark:border-zinc-800 space-y-1.5">
                  <strong className="text-zinc-900 dark:text-white uppercase font-bold block">
                    Dialectic Role &amp; Balance
                  </strong>
                  <p className="text-zinc-600 dark:text-zinc-400 font-light">
                    {item.taegeukPhilosophy.dialecticRole}
                  </p>
                </div>
              </div>

              {/* Introduced Key Techniques Chips */}
              {item.taegeukPhilosophy.introducedKeyTechniques && (
                <div className="pt-2">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 font-bold block mb-2">
                    Key Syllabus Techniques Introduced in this Form:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {item.taegeukPhilosophy.introducedKeyTechniques.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-xs font-mono text-zinc-800 dark:text-zinc-200 border border-zinc-200 dark:border-zinc-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* 8 WT Performance Pillars & Biomechanical Criteria */}
            {item.taegeukPhilosophy.executionPrinciples && (
              <div className="p-6 sm:p-8 rounded-[14px] bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-md space-y-4">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-brand-red font-bold">
                  <Flame className="w-4 h-4" /> 8 WT Performance Principles &amp; Criteria
                </div>
                <div className="grid sm:grid-cols-2 gap-3 text-xs">
                  {item.taegeukPhilosophy.executionPrinciples.map((principle, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-100 dark:border-zinc-800 space-y-1"
                    >
                      <span className="font-bold text-zinc-900 dark:text-white block">
                        {principle.split(':')[0]}
                      </span>
                      <p className="text-zinc-600 dark:text-zinc-400 font-light leading-relaxed">
                        {principle.split(':')[1]}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* ------------------------------------------------------------------ */}
        {/* KUKKIWON NEW POOMSAE SUITE SPECIFICATION (If New Poomsae)          */}
        {/* ------------------------------------------------------------------ */}
        {item.newPoomsaeSpec && (
          <div className="mb-10 p-6 sm:p-8 rounded-[14px] bg-gradient-to-br from-zinc-950 via-zinc-900 to-black text-white border border-blue-500/30 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 blur-[100px] rounded-full pointer-events-none" />

            {/* Header */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-zinc-800 relative z-10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-500/20 border border-blue-500/40 flex items-center justify-center text-blue-400 font-bold shrink-0">
                  <Award className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-blue-400">
                      Kukkiwon New Poomsae Suite (Elite Competition)
                    </span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-blue-500/20 text-blue-300 border border-blue-500/30">
                      Form #{item.newPoomsaeSpec.formNumber}
                    </span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-white flex items-center gap-2 flex-wrap">
                    <span>{item.name}</span>
                    <span className="text-zinc-500 text-sm font-normal">
                      ({item.newPoomsaeSpec.koreanName})
                    </span>
                    <span className="text-zinc-600">&bull;</span>
                    <span className="text-blue-400">{item.newPoomsaeSpec.targetAge}</span>
                  </h2>
                </div>
              </div>

              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-blue-400/10 border border-blue-400/30 text-blue-300 text-xs font-mono font-bold">
                <span>Official Duration:</span>
                <span className="text-white font-black tracking-wide uppercase">
                  {item.newPoomsaeSpec.officialDuration}
                </span>
              </div>
            </div>

            {/* Matrix Data Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 py-6 border-b border-zinc-800/80 relative z-10">
              {/* Competition Division */}
              <div className="p-4 rounded-xl bg-zinc-900/80 border border-zinc-800 space-y-1.5">
                <span className="text-[10px] font-mono uppercase text-zinc-400 tracking-wider block">
                  Target Age Division
                </span>
                <strong className="text-sm font-bold text-white block">
                  {item.newPoomsaeSpec.targetAge}
                </strong>
                <span className="text-[11px] text-zinc-400 leading-snug block">
                  Designated division in international championships.
                </span>
              </div>

              {/* Line Symbol Meaning */}
              <div className="p-4 rounded-xl bg-zinc-900/80 border border-zinc-800 space-y-1.5">
                <span className="text-[10px] font-mono uppercase text-zinc-400 tracking-wider block">
                  Movement Concept
                </span>
                <strong className="text-sm font-bold text-blue-400 block">
                  {item.newPoomsaeSpec.englishConcept}
                </strong>
                <span className="text-[11px] text-zinc-400 leading-snug block">
                  {item.newPoomsaeSpec.lineSymbolMeaning}
                </span>
              </div>

              {/* Total Movements */}
              <div className="p-4 rounded-xl bg-zinc-900/80 border border-zinc-800 space-y-1.5">
                <span className="text-[10px] font-mono uppercase text-zinc-400 tracking-wider block">
                  Total Movement Count
                </span>
                <strong className="text-sm font-bold text-white block">
                  {item.totalMovements || 20} Movements
                </strong>
                <span className="text-[11px] text-zinc-400 leading-snug block">
                  Strictly judged per WT deduction metrics.
                </span>
              </div>

              {/* Research Institute Context */}
              <div className="p-4 rounded-xl bg-zinc-900/80 border border-zinc-800 space-y-1.5">
                <span className="text-[10px] font-mono uppercase text-zinc-400 tracking-wider block">
                  Official Meaning
                </span>
                <p className="text-xs text-zinc-300 font-light leading-snug">
                  {item.newPoomsaeSpec.officialMeaning}
                </p>
              </div>
            </div>

            {/* Technical Characteristics */}
            <div className="pt-6 relative z-10 space-y-4">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-blue-400 font-bold">
                  <Zap className="w-4 h-4" /> Technical Arsenal &amp; Movement Syllabus
                </div>
                {item.newPoomsaeSpec.technicalCharacteristics?.specialtyFocus && (
                  <span className="text-xs text-zinc-400 font-sans">
                    {item.newPoomsaeSpec.technicalCharacteristics.specialtyFocus}
                  </span>
                )}
              </div>

              {item.newPoomsaeSpec.technicalCharacteristics?.signatureKicks &&
                item.newPoomsaeSpec.technicalCharacteristics.signatureKicks.length > 0 && (
                  <div className="space-y-2">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 font-bold block">
                      Signature Kicking Techniques:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {item.newPoomsaeSpec.technicalCharacteristics.signatureKicks.map((kick, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 rounded-lg bg-zinc-900 border border-zinc-800 text-xs text-zinc-200 font-sans flex items-center gap-2"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                          {kick}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

              {item.newPoomsaeSpec.technicalCharacteristics?.signatureHands &&
                item.newPoomsaeSpec.technicalCharacteristics.signatureHands.length > 0 && (
                  <div className="space-y-2">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 font-bold block">
                      Signature Hand &amp; Blocking Systems:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {item.newPoomsaeSpec.technicalCharacteristics.signatureHands.map((hand, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 rounded-lg bg-zinc-900 border border-zinc-800 text-xs text-zinc-200 font-sans flex items-center gap-2"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                          {hand}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

              {item.newPoomsaeSpec.etymologyOrigin && (
                <div className="p-3.5 rounded-xl bg-blue-500/10 border border-blue-500/20 text-xs text-blue-300/90 font-mono">
                  <span className="font-bold text-blue-400 uppercase tracking-wider mr-2">
                    Classical Origin &amp; Etymology:
                  </span>
                  {item.newPoomsaeSpec.etymologyOrigin}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Video Demonstration */}
        {safeVideoUrl && (
          <div className="mb-10 p-6 sm:p-8 rounded-[14px] bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-md">
            <h3 className="text-base font-black uppercase tracking-tight mb-4 flex items-center gap-2 text-zinc-900 dark:text-white">
              <Play className="w-4 h-4 text-brand-red" /> {t.library.videoDemonstration}
            </h3>
            <div className="relative aspect-video rounded-xl overflow-hidden bg-black border border-zinc-200 dark:border-zinc-800 shadow-inner">
              <iframe
                src={safeVideoUrl}
                title={item.name}
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        )}

        {/* ------------------------------------------------------------------ */}
        {/* HISTORY BLOG EDITORIAL MODE (For history articles) */}
        {/* ------------------------------------------------------------------ */}
        {isHistory ? (
          <div className="mb-10 p-8 sm:p-12 rounded-[14px] bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-md space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-zinc-100 dark:border-zinc-800 text-xs font-mono text-zinc-500">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4 text-brand-red" />
                <span className="font-bold text-zinc-800 dark:text-zinc-200">
                  {item.author || 'Infinity TKD Historian'}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" /> {item.publishDate || 'August 2026'}
                </span>
                <span>&bull;</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-brand-red" /> {item.readTime || '5 min read'}
                </span>
              </div>
            </div>

            {item.meaning && (
              <div className="p-4 rounded-xl bg-brand-red/5 border-l-4 border-brand-red italic text-xs sm:text-sm text-zinc-800 dark:text-zinc-200">
                {item.meaning}
              </div>
            )}

            {item.blogContent && item.blogContent.length > 0 ? (
              <div className="space-y-4 text-zinc-700 dark:text-zinc-300 font-light leading-relaxed text-sm sm:text-base">
                {item.blogContent.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            ) : null}
          </div>
        ) : null}

        {/* ------------------------------------------------------------------ */}
        {/* COMPETITION RULES PDF DOCUMENT EMBED / DOWNLOAD BAR */}
        {/* ------------------------------------------------------------------ */}
        {isCompetitionRule && item.pdfUrl ? (
          <div className="mb-10 p-6 sm:p-8 rounded-[14px] bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-md flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <FileText className="w-6 h-6 text-brand-red shrink-0" />
              <div>
                <h3 className="text-sm sm:text-base font-black uppercase text-zinc-900 dark:text-white">
                  World Taekwondo Official Competition Rulebook
                </h3>
                <span className="text-xs text-zinc-500 font-mono">
                  Online document preview &bull; PDF format
                </span>
              </div>
            </div>

            <a
              href={item.pdfUrl}
              download
              className="px-5 py-2.5 rounded-xl bg-brand-red text-white text-xs font-bold uppercase tracking-wider hover:bg-zinc-900 transition-colors shadow-brand-glow inline-flex items-center gap-2"
            >
              <Download className="w-4 h-4" /> Download Official PDF
            </a>
          </div>
        ) : null}

        {/* Media & Key Telemetry Grid (Customized by Discipline) */}
        <div className="grid md:grid-cols-12 gap-8 mb-10 items-start">
          <div className={!isHistory && !isCompetitionRule ? 'md:col-span-6' : 'md:col-span-12'}>
            <div className="relative h-72 rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-800 shadow-md">
              <SafeImage src={item.image} alt={item.name} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-xs font-mono text-zinc-300 font-bold block">
                  {item.koreanName}
                </span>
                <span className="text-lg font-black uppercase tracking-tight">{item.name}</span>
              </div>
            </div>
          </div>

          {!isHistory && !isCompetitionRule && (
            <div className="md:col-span-6 space-y-4">
              {/* Tactical Striking Weapon & Target Surface */}
              {(item.strikingSurface || item.targetArea) && (
                <div className="grid sm:grid-cols-2 gap-3 text-xs">
                  {item.strikingSurface && (
                    <div className="p-4 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm">
                      <span className="text-[10px] font-mono text-zinc-400 font-bold uppercase block mb-1">
                        {t.library.strikingWeaponLabel}
                      </span>
                      <strong className="text-zinc-900 dark:text-white block font-bold text-sm">
                        {item.strikingSurface}
                      </strong>
                    </div>
                  )}
                  {item.targetArea && (
                    <div className="p-4 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm">
                      <span className="text-[10px] font-mono text-zinc-400 font-bold uppercase block mb-1">
                        {t.library.targetAnatomyLabel}
                      </span>
                      <strong className="text-zinc-900 dark:text-white block font-bold text-sm">
                        {item.targetArea}
                      </strong>
                    </div>
                  )}
                </div>
              )}

              {/* Traditional Stance Weight Meter */}
              {isStance && item.weightDistribution && (
                <div className="p-5 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm space-y-3">
                  <div className="flex justify-between items-center text-xs font-mono font-bold uppercase">
                    <span className="text-zinc-400">
                      {t.library.rearLeg}: <strong className="text-amber-500">{rearPercent}%</strong>
                    </span>
                    <span className="text-zinc-400">
                      {t.library.frontLeg}: <strong className="text-emerald-500">{frontPercent}%</strong>
                    </span>
                  </div>
                  <div className="w-full h-3.5 rounded-full bg-zinc-100 dark:bg-zinc-800 overflow-hidden flex shadow-inner">
                    <div
                      className="h-full bg-amber-500 transition-all duration-500"
                      style={{ width: `${rearPercent}%` }}
                    />
                    <div
                      className="h-full bg-emerald-500 transition-all duration-500"
                      style={{ width: `${frontPercent}%` }}
                    />
                  </div>
                  <p className="text-xs text-zinc-500 font-light text-center">
                    {item.weightDistribution}
                  </p>
                </div>
              )}

              {/* Philosophical Meaning Card */}
              {item.meaning && (
                <div className="p-5 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm space-y-1.5">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-brand-red block">
                    {t.library.martialPhilosophy}
                  </span>
                  <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 font-light leading-relaxed">
                    {item.meaning}
                  </p>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Dynamic Step / Timeline / Rules Breakdown Section (14px radius) */}
        {item.steps && item.steps.length > 0 && (
          <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-[14px] p-6 sm:p-10 mb-10 shadow-md">
            <h2 className="text-lg sm:text-xl font-black uppercase tracking-tight mb-6 flex items-center gap-2 text-zinc-900 dark:text-white">
              <StepIcon className="w-5 h-5 text-brand-red" /> {stepSectionTitle}
            </h2>
            <div className="space-y-4">
              {item.steps.map((step, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-100 dark:border-zinc-800 text-xs sm:text-sm text-zinc-800 dark:text-zinc-200 flex items-start gap-3"
                >
                  <span className="w-6 h-6 rounded-lg bg-brand-red text-white flex items-center justify-center font-black text-xs shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <span className="leading-relaxed font-medium">{step}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Dynamic Korean Terminology Glossary Section */}
        {item.terminology && item.terminology.length > 0 && (
          <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-[14px] p-6 sm:p-10 mb-10 shadow-md">
            <h2 className="text-lg sm:text-xl font-black uppercase tracking-tight mb-6 flex items-center gap-2 text-zinc-900 dark:text-white">
              <BookOpen className="w-5 h-5 text-brand-red" /> {t.library.glossaryTitle}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
              {item.terminology.map((term, tIdx) => (
                <div
                  key={tIdx}
                  className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-100 dark:border-zinc-800 space-y-1 font-mono text-xs"
                >
                  <div className="flex items-center justify-between">
                    <strong className="text-sm font-bold text-zinc-900 dark:text-white">
                      {term.korean}
                    </strong>
                    {term.category && (
                      <span className="text-[9px] uppercase px-2 py-0.5 rounded bg-zinc-200 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 font-bold">
                        {term.category}
                      </span>
                    )}
                  </div>
                  <div className="text-xs font-bold text-brand-red">{term.romanized}</div>
                  <p className="text-zinc-600 dark:text-zinc-400 text-xs font-light">
                    {term.english}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Dynamic Master Coaching Tips Section */}
        {item.coachingTips && item.coachingTips.length > 0 && (
          <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-[14px] p-6 sm:p-10 mb-10 shadow-md">
            <h2 className="text-lg sm:text-xl font-black uppercase tracking-tight mb-6 flex items-center gap-2 text-amber-500">
              <Zap className="w-5 h-5" /> {t.library.coachingTipsTitle}
            </h2>
            <div className="space-y-3">
              {item.coachingTips.map((tip, tipIdx) => (
                <div
                  key={tipIdx}
                  className="p-4 rounded-xl bg-amber-500/5 dark:bg-amber-500/10 border border-amber-500/20 text-xs font-mono space-y-1"
                >
                  <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400 font-bold">
                    <Sparkles className="w-3.5 h-3.5" /> Insight #{tipIdx + 1}
                  </div>
                  <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed font-light">{tip}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Biomechanical Cues & Common Mistakes (Dynamic headings) */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {/* Cues / Evidence */}
          {item.keyDetails && item.keyDetails.length > 0 && (
            <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-[14px] p-6 sm:p-8 shadow-md">
              <h3 className="text-base font-black uppercase tracking-tight mb-4 flex items-center gap-2 text-emerald-500">
                <CheckCircle2 className="w-4 h-4" /> {cuesSectionTitle}
              </h3>
              <div className="space-y-2.5">
                {item.keyDetails.map((detail, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-zinc-700 dark:text-zinc-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{detail}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Mistakes / Notes / Infractions */}
          {item.commonMistakes && item.commonMistakes.length > 0 && (
            <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-[14px] p-6 sm:p-8 shadow-md">
              <h3 className="text-base font-black uppercase tracking-tight mb-4 flex items-center gap-2 text-brand-red">
                <XCircle className="w-4 h-4" /> {errorsSectionTitle}
              </h3>
              <div className="space-y-2.5">
                {item.commonMistakes.map((mistake, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-zinc-700 dark:text-zinc-300">
                    <XCircle className="w-4 h-4 text-brand-red shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{mistake}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* External Reference Link (Automatically hidden if empty) */}
        {item.sourceUrl && (
          <div className="mb-10 p-4 sm:p-5 rounded-[14px] bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-md flex items-center justify-between text-xs">
            <div>
              <span className="text-[10px] font-mono font-bold text-zinc-400 uppercase block mb-0.5">
                {t.library.officialCitation}
              </span>
              <strong className="text-zinc-900 dark:text-white">
                {item.sourceName || item.sourceUrl}
              </strong>
            </div>
            <a
              href={item.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl bg-zinc-100 dark:bg-zinc-800 hover:bg-brand-red hover:text-white text-zinc-800 dark:text-zinc-200 font-bold uppercase transition-colors inline-flex items-center gap-1.5"
            >
              {t.library.visitSource} <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        )}

        {/* Related Techniques / Articles */}
        {relatedItems.length > 0 && (
          <div className="mb-12">
            <div className="flex items-center justify-between gap-4 mb-4">
              <h3 className="text-lg font-black uppercase tracking-tight">
                {t.library.moreInDiscipline} {categoryMeta?.title}
              </h3>
              <Link
                href={`/library/${item.category}`}
                className="text-xs font-bold text-brand-red hover:underline flex items-center gap-1"
              >
                {t.library.viewFullSectionHub} <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

            <SafeGrid className="grid sm:grid-cols-2 md:grid-cols-3 gap-4" isolateItems>
              {relatedItems.map((relRaw) => {
                const rel = isPoomsae
                  ? decoratePoomsaeItem(relRaw, language)
                  : isKicking
                  ? getLocalizedKickingItem(relRaw, language as 'en' | 'km' | 'zh' | 'ko')
                  : localize(relRaw)
                return (
                  <Link
                    key={rel.id}
                    href={`/library/${rel.category}/${rel.slug}`}
                    className="p-4 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-brand-red/60 transition-all flex items-center gap-3 group"
                  >
                    <SafeImage
                      src={rel.image}
                      alt={rel.name}
                      className="w-12 h-12 rounded-lg object-cover grayscale group-hover:grayscale-0 transition-all shrink-0"
                    />
                    <div className="min-w-0">
                      <span className="text-[10px] font-mono text-zinc-400 block truncate">
                        {rel.koreanName}
                      </span>
                      <strong className="text-xs font-bold text-zinc-900 dark:text-white truncate block group-hover:text-brand-red transition-colors">
                        {rel.name}
                      </strong>
                    </div>
                  </Link>
                )
              })}
            </SafeGrid>
          </div>
        )}

        {/* Lead Gen Banner (14px radius) */}
        <div className="p-8 sm:p-12 rounded-[14px] bg-zinc-900 text-white border border-brand-red/40 relative overflow-hidden flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-lg">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-red block">
              {t.library.inPersonMastery}
            </span>
            <h3 className="text-2xl font-black uppercase">
              {t.library.readyToExplore} {item.name}?
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
              {t.library.leadGenDesc}
            </p>
          </div>

          <Link
            href={`/contact?subject=Trial%20Booking%20for%20${encodeURIComponent(item.name)}`}
            className="px-8 py-4 rounded-xl bg-brand-red text-white text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all shadow-brand-glow whitespace-nowrap"
          >
            {t.library.claimFreeTrial}
          </Link>
        </div>
      </div>
    </div>
  )
}
