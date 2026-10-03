'use client'

import * as React from 'react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import {
  libraryCategoriesMeta,
  libraryItems,
  type LibraryCategory,
  type LibraryItem,
  type DifficultyLevel,
} from '@/data/library'
import {
  PoomsaeCard,
  StanceCard,
  KickingCard,
  HandCard,
  AcrobaticCard,
  HistoryCard,
  RuleCard,
  HosinsulCard,
} from '@/components/library/TechniqueDisciplineCards'
import { CompetitionRulesReader } from '@/components/library/CompetitionRulesReader'
import { HistoryHeritageMaster } from '@/components/library/HistoryHeritageMaster'
import { PoomsaeMasterExplorer } from '@/components/library/PoomsaeMasterExplorer'
import { HosinsulMasterExplorer } from '@/components/library/HosinsulMasterExplorer'
import { KickingMasterExplorer } from '@/components/library/KickingMasterExplorer'
import { AdvancedKickingMasterExplorer } from '@/components/library/AdvancedKickingMasterExplorer'
import { InfinityDifficultyBadge } from '@/components/library/InfinityBadge'
import { SafeImage } from '@/components/SafeImage'
import { useLanguage } from '@/context/LanguageContext'
import {
  BookOpen,
  Zap,
  Flame,
  Shield,
  Layers,
  Sparkles,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  XCircle,
  Clock,
  Target,
  Video,
  ChevronRight,
  Compass,
  Gauge,
  RotateCw,
  LayoutGrid,
  ListFilter,
  Eye,
  Info,
  Calendar,
  Scale,
} from 'lucide-react'

const iconMap: Record<string, React.ElementType> = {
  BookOpen,
  Zap,
  Flame,
  Shield,
  Layers,
  Sparkles,
}

interface CategoryPageProps {
  params: {
    category: string
  }
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const { t, language, localize } = useLanguage()
  const [viewMode, setViewMode] = React.useState<'detailed' | 'highlight'>('detailed')
  const [activeItem, setActiveItem] = React.useState<LibraryItem | null>(null)

  const rawCategoryMeta = libraryCategoriesMeta.find((c) => c.id === params.category)

  if (!rawCategoryMeta) {
    notFound()
  }

  const categoryMeta = React.useMemo(() => localize(rawCategoryMeta), [rawCategoryMeta, localize])

  const items = libraryItems.filter((i) => i.category === categoryMeta.id)
  const Icon = iconMap[categoryMeta.iconName] || BookOpen

  const isCompetitionRulesCategory = categoryMeta.id === 'competition-rules'
  const isHistoryCategory = categoryMeta.id === 'history'
  const isPoomsaeCategory = categoryMeta.id === 'poomsae'
  const isHosinsulCategory = categoryMeta.id === 'hosinsul'
  const isKickingFundamentalsCategory = categoryMeta.id === 'kicking-fundamentals'
  const isKickingAdvancedCategory = categoryMeta.id === 'kicking-advanced'

  return (
    <div className="bg-zinc-50 dark:bg-black text-zinc-900 dark:text-white min-h-screen pt-20 sm:pt-24 pb-20 font-sans selection:bg-brand-red selection:text-white transition-colors duration-500 overflow-x-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Top Breadcrumb & Back Link */}
        <div className="flex items-center justify-between gap-4 mb-6">
          <Link
            href="/library"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-zinc-500 hover:text-brand-red transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>
              {language === 'km'
                ? 'ត្រឡប់ទៅមជ្ឈមណ្ឌលមេរៀន'
                : language === 'zh'
                ? '返回武道知识中心'
                : language === 'ko'
                ? '커리큘럼 허브로 돌아가기'
                : 'Back to Curriculum Hub'}
            </span>
          </Link>

          <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
            <span>{t.nav.library}</span>
            <span>/</span>
            <span className="text-brand-red font-bold uppercase">{categoryMeta.title}</span>
          </div>
        </div>

        {/* ==================================================================== */}
        {/* UNIQUE DISCIPLINE SECTION HERO BANNER (14px radius) */}
        {/* ==================================================================== */}
        <div className="relative p-8 sm:p-12 md:p-14 rounded-[14px] bg-white dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 shadow-xl overflow-hidden mb-10">
          {/* Background Aura Glow */}
          <div
            className="absolute top-0 right-0 w-[500px] h-[500px] blur-[140px] rounded-full pointer-events-none opacity-20"
            style={{ backgroundColor: categoryMeta.accentColor }}
          />

          <div className="relative z-10 max-w-4xl">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <div
                className="p-3.5 rounded-xl shadow-sm"
                style={{
                  backgroundColor: `${categoryMeta.accentColor}20`,
                  color: categoryMeta.accentColor,
                }}
              >
                <Icon className="w-7 h-7" />
              </div>
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-red block">
                  {categoryMeta.koreanTitle} &bull;{' '}
                  {language === 'km'
                    ? 'សព្វវចនាធិប្បាយឯកទេស'
                    : language === 'zh'
                    ? '学科百科全书'
                    : language === 'ko'
                    ? '공인 백과사전'
                    : 'Section Encyclopedia'}
                </span>
                <span className="text-xs text-zinc-400 font-mono">
                  {isCompetitionRulesCategory
                    ? language === 'km'
                      ? 'ស្តង់ដារផ្លូវការ WT (Kyorugi & Poomsae)'
                      : language === 'zh'
                      ? '官方世跆联标准 (竞技与品势)'
                      : language === 'ko'
                      ? '세계연맹 공인 표준 (겨루기 & 품새)'
                      : 'Official WT Standards (Kyorugi & Poomsae)'
                    : isPoomsaeCategory
                    ? `${items.length} Patterns &bull; 3 Master Series`
                    : `${items.length} Documented Techniques`}{' '}
                  &bull; Kukkiwon WT Standards
                </span>
              </div>
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-zinc-900 dark:text-white mb-4">
              {categoryMeta.title}
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-zinc-600 dark:text-zinc-400 font-light leading-relaxed mb-6">
              {categoryMeta.description}
            </p>

            {/* Subtitle / Philosophy Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-zinc-100 dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700/60 text-xs font-mono text-zinc-700 dark:text-zinc-300">
              <Info className="w-3.5 h-3.5 text-brand-red shrink-0" />
              <span>{categoryMeta.subtitle}</span>
            </div>
          </div>
        </div>

        {/* ==================================================================== */}
        {/* DEDICATED SPECIALIZED SUITE READERS */}
        {/* ==================================================================== */}
        {isCompetitionRulesCategory && (
          <div className="mb-14">
            <CompetitionRulesReader />
          </div>
        )}

        {isHistoryCategory && (
          <div className="mb-14">
            <HistoryHeritageMaster />
          </div>
        )}

        {isPoomsaeCategory && (
          <div className="mb-14">
            <PoomsaeMasterExplorer items={items} />
          </div>
        )}

        {isHosinsulCategory && (
          <div className="mb-14">
            <HosinsulMasterExplorer items={items} />
          </div>
        )}

        {isKickingFundamentalsCategory && (
          <div className="mb-14">
            <KickingMasterExplorer items={items} />
          </div>
        )}

        {isKickingAdvancedCategory && (
          <div className="mb-14">
            <AdvancedKickingMasterExplorer items={items} />
          </div>
        )}

        {/* ==================================================================== */}
        {/* VIEW MODE SWITCHER & DOSSIERS (RENDERED FOR TECHNIQUE DISCIPLINES ONLY) */}
        {/* ==================================================================== */}
        {!isCompetitionRulesCategory &&
          !isPoomsaeCategory &&
          !isHistoryCategory &&
          !isHosinsulCategory &&
          !isKickingFundamentalsCategory &&
          !isKickingAdvancedCategory && (
          <>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-zinc-200 dark:border-zinc-800">
              <div>
                <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-zinc-900 dark:text-white">
                  {categoryMeta.title} <span className="text-brand-red">Curriculum Dossiers</span>
                </h2>
                <p className="text-xs text-zinc-500 uppercase tracking-wider mt-0.5">
                  Explore individual technique specifications below
                </p>
              </div>

              {/* Toggle Buttons (12px radius) */}
              <div className="flex items-center gap-1.5 p-1 bg-zinc-200 dark:bg-zinc-900 rounded-xl border border-zinc-300 dark:border-zinc-800 self-start sm:self-auto">
                <button
                  onClick={() => setViewMode('detailed')}
                  className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer ${
                    viewMode === 'detailed'
                      ? 'bg-brand-red text-white shadow-brand-glow'
                      : 'text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white'
                  }`}
                >
                  <ListFilter className="w-3.5 h-3.5" /> Detailed View
                </button>

                <button
                  onClick={() => setViewMode('highlight')}
                  className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer ${
                    viewMode === 'highlight'
                      ? 'bg-brand-red text-white shadow-brand-glow'
                      : 'text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white'
                  }`}
                >
                  <LayoutGrid className="w-3.5 h-3.5" /> Quick Highlight
                </button>
              </div>
            </div>

            {/* MODE 1: DETAILED VIEW (14px radius cards) */}
            {viewMode === 'detailed' && (
              <div className="space-y-8 mb-20">
                {items.map((item) => {
                  const isPoomsae = item.category === 'poomsae'
                  const isStance = item.category === 'stances'
                  const isKicking =
                    item.category === 'kicking-fundamentals' || item.category === 'kicking-advanced'
                  const isHand = item.category === 'hand-techniques'
                  const isAcrobatic = item.category === 'tricking-acrobatics'

                  const rearPercent = item.weightDistribution?.includes('70%')
                    ? 70
                    : item.weightDistribution?.includes('90%')
                    ? 90
                    : item.weightDistribution?.includes('65%')
                    ? 35
                    : 50
                  const frontPercent = 100 - rearPercent

                  const isHistory = item.category === 'history'

                  const stepSectionTitle = isHistory
                    ? 'Chronological Milestones & Historical Timeline'
                    : isPoomsae
                    ? 'Poomsae Movement Sequence & Rhythm Steps'
                    : 'Step-by-Step Technical Execution'

                  const StepIcon = isHistory ? Calendar : Target

                  const cuesSectionTitle = isHistory
                    ? 'Archival Evidence & Historical Records'
                    : isPoomsae
                    ? 'Kukkiwon Biomechanical Geometry'
                    : 'Key Biomechanical Cues'

                  const errorsSectionTitle = isHistory
                    ? 'Historiographical Context & Research Notes'
                    : isPoomsae
                    ? 'Referee Deductions (-0.1 / -0.3 Points)'
                    : 'Common Errors & Technical Corrections'

                  return (
                    <div
                      key={item.id}
                      id={item.slug}
                      className="p-6 sm:p-8 md:p-10 rounded-[14px] bg-white dark:bg-zinc-900/70 border border-zinc-200 dark:border-zinc-800 shadow-md hover:border-brand-red/40 transition-all duration-300 relative overflow-hidden group hover:shadow-xl"
                    >
                      {/* Background Watermark for Poomsae */}
                      {isPoomsae && item.diagramSymbol && (
                        <div className="absolute -right-4 -top-6 text-9xl font-black text-zinc-100 dark:text-zinc-800/30 select-none pointer-events-none font-serif opacity-40">
                          {item.diagramSymbol}
                        </div>
                      )}

                      <div className="grid lg:grid-cols-12 gap-8 items-start relative z-10">
                        {/* Left Media & Metadata Column */}
                        <div className="lg:col-span-5 space-y-4">
                          <div className="relative h-56 sm:h-64 rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-800 shadow-inner">
                            <SafeImage
                              src={item.image}
                              alt={item.name}
                              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                            <div className="absolute top-3 left-3 flex flex-wrap items-center gap-2 z-10">
                              <span className="px-2.5 py-1 rounded-lg text-[10px] font-mono font-bold uppercase tracking-wider bg-black/80 text-white backdrop-blur-md border border-white/10">
                                {item.beltLevel}
                              </span>
                            </div>

                            <div className="absolute bottom-3 left-3 right-3 text-white">
                              <span className="text-[10px] font-mono text-zinc-300 font-bold block">
                                {item.koreanName}
                              </span>
                              <h3 className="text-xl font-black uppercase tracking-tight">
                                {item.name}
                              </h3>
                            </div>
                          </div>

                          {/* Stance Weight Distribution Meter */}
                          {isStance && item.weightDistribution && (
                            <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-2">
                              <div className="flex justify-between items-center text-[10px] font-mono font-bold uppercase">
                                <span className="text-zinc-400">Rear Leg: <strong className="text-amber-500">{rearPercent}%</strong></span>
                                <span className="text-zinc-400">Front Leg: <strong className="text-emerald-500">{frontPercent}%</strong></span>
                              </div>
                              <div className="w-full h-3 rounded-full bg-zinc-200 dark:bg-zinc-800 overflow-hidden flex shadow-inner">
                                <div
                                  className="h-full bg-amber-500 transition-all duration-500"
                                  style={{ width: `${rearPercent}%` }}
                                />
                                <div
                                  className="h-full bg-emerald-500 transition-all duration-500"
                                  style={{ width: `${frontPercent}%` }}
                                />
                              </div>
                              <p className="text-[10px] text-zinc-400 font-light text-center">
                                {item.weightDistribution}
                              </p>
                            </div>
                          )}

                          {/* Philosophical Meaning / Origin */}
                          {item.meaning && (
                            <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-xs space-y-1">
                              <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-brand-red block">
                                {isHistory ? 'Historical Significance' : 'Martial Philosophy & Meaning'}
                              </span>
                              <p className="text-zinc-600 dark:text-zinc-300 font-light leading-relaxed">
                                {item.meaning}
                              </p>
                            </div>
                          )}
                        </div>

                        {/* Right Curriculum Technical Breakdown Column */}
                        <div className="lg:col-span-7 space-y-5">
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <span className="text-xs font-mono font-bold uppercase text-brand-red">
                                {item.romanized || item.koreanName}
                              </span>
                              <span className="text-zinc-400">&bull;</span>
                              <span className="text-xs font-mono text-zinc-500">
                                {item.difficulty} Level
                              </span>
                            </div>
                            <h3 className="text-2xl font-black uppercase tracking-tight text-zinc-900 dark:text-white">
                              {item.name}
                            </h3>
                            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 font-light leading-relaxed mt-2">
                              {item.summary}
                            </p>
                          </div>

                          {/* Step-by-Step Execution Sequence */}
                          {item.steps && item.steps.length > 0 && (
                            <div>
                              <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-3 flex items-center gap-1.5">
                                <StepIcon className="w-3.5 h-3.5 text-brand-red" /> {stepSectionTitle}
                              </h4>
                              <div className="space-y-2.5">
                                {item.steps.map((step, idx) => (
                                  <div
                                    key={idx}
                                    className="p-3.5 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-100 dark:border-zinc-800 text-xs text-zinc-800 dark:text-zinc-200 flex items-start gap-2.5"
                                  >
                                    <span className="w-5 h-5 rounded-lg bg-brand-red text-white flex items-center justify-center font-black text-[10px] shrink-0 mt-0.5">
                                      {idx + 1}
                                    </span>
                                    <span className="leading-relaxed font-medium">{step}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* Key Biomechanics / Archival Evidence */}
                          {item.keyDetails && item.keyDetails.length > 0 && (
                            <div>
                              <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-2.5 flex items-center gap-1.5">
                                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> {cuesSectionTitle}
                              </h4>
                              <div className="space-y-1.5">
                                {item.keyDetails.map((detail, idx) => (
                                  <div key={idx} className="flex items-start gap-2 text-xs text-zinc-600 dark:text-zinc-400">
                                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                                    <span>{detail}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* Common Mistakes / Notes */}
                          {item.commonMistakes && item.commonMistakes.length > 0 && (
                            <div>
                              <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-2.5 flex items-center gap-1.5">
                                <XCircle className="w-3.5 h-3.5 text-brand-red" /> {errorsSectionTitle}
                              </h4>
                              <div className="space-y-1.5">
                                {item.commonMistakes.map((mistake, idx) => (
                                  <div key={idx} className="flex items-start gap-2 text-xs text-zinc-600 dark:text-zinc-400">
                                    <XCircle className="w-3.5 h-3.5 text-brand-red shrink-0 mt-0.5" />
                                    <span>{mistake}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* Actions */}
                          <div className="pt-4 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between gap-3">
                            <Link
                              href={`/library/${item.category}/${item.slug}`}
                              className="text-xs font-bold uppercase tracking-wider text-zinc-500 hover:text-brand-red transition-colors inline-flex items-center gap-1"
                            >
                              Dedicated Page <ArrowRight className="w-3 h-3" />
                            </Link>

                            <Link
                              href={`/contact?subject=Trial%20Booking%20for%20${encodeURIComponent(item.name)}`}
                              className="px-4 py-2 rounded-xl bg-brand-red text-white text-xs font-bold uppercase tracking-wider hover:bg-zinc-900 transition-colors inline-flex items-center gap-1 shadow-brand-glow"
                            >
                              Book Trial Class <ArrowRight className="w-3 h-3" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            )}

            {/* MODE 2: QUICK HIGHLIGHT VIEW (Compact Visual Grid Cards) */}
            {viewMode === 'highlight' && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-20">
                {items.map((item) => {
                  if (item.category === 'poomsae') {
                    return (
                      <PoomsaeCard
                        key={item.id}
                        item={item}
                        onSelect={() => setViewMode('detailed')}
                      />
                    )
                  }
                  if (item.category === 'stances') {
                    return (
                      <StanceCard
                        key={item.id}
                        item={item}
                        onSelect={() => setViewMode('detailed')}
                      />
                    )
                  }
                  if (item.category === 'kicking-fundamentals' || item.category === 'kicking-advanced') {
                    return (
                      <KickingCard
                        key={item.id}
                        item={item}
                        onSelect={() => setViewMode('detailed')}
                      />
                    )
                  }
                  if (item.category === 'hand-techniques') {
                    return (
                      <HandCard
                        key={item.id}
                        item={item}
                        onSelect={() => setViewMode('detailed')}
                      />
                    )
                  }
                  if (item.category === 'tricking-acrobatics') {
                    return (
                      <AcrobaticCard
                        key={item.id}
                        item={item}
                        onSelect={() => setViewMode('detailed')}
                      />
                    )
                  }
                  if (item.category === 'history') {
                    return (
                      <HistoryCard
                        key={item.id}
                        item={item}
                        onSelect={() => setViewMode('detailed')}
                      />
                    )
                  }
                  if (item.category === 'hosinsul') {
                    return (
                      <HosinsulCard
                        key={item.id}
                        item={item}
                        onSelect={() => setViewMode('detailed')}
                      />
                    )
                  }
                  return null
                })}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  )
}
