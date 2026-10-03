'use client'

import * as React from 'react'
import Link from 'next/link'
import {
  Calendar,
  Clock,
  ChevronRight,
  Sparkles,
  ExternalLink,
  Layers,
  LayoutGrid,
  List,
  CheckCircle2,
  User,
  Filter,
  BookOpen,
  Shield,
  Zap,
  Globe,
  Award,
  Flame,
  Search,
  Maximize2,
  X,
  Building,
  Target,
  ArrowRight,
  Scale,
  RotateCcw,
  SlidersHorizontal,
  Table,
  Check,
  HeartHandshake,
  Dumbbell,
  Compass,
} from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import {
  historyI18n,
  getLocalizedHistoryPillars,
  getLocalizedTimelineEras,
  type LocalizedTimelineItem,
  type LocalizedKwanItem,
  type LocalizedOrgItem,
} from '@/data/library/historyTranslations'
import { getLocalizedTimelineMilestones } from '@/data/library/historyTimelineTranslations'
import {
  getLocalizedDualSpirit,
  getLocalizedFiveVirtues,
  getLocalizedFiveTenets,
  getLocalizedTaekwondoNature,
  getLocalizedSesokOgye,
  getLocalizedTheoryOfPower,
  getLocalizedDobokPhilosophy,
  getLocalizedPhilosophySubTabs,
} from '@/data/library/historyPhilosophyTranslations'
import {
  getLocalizedKwans,
  getLocalizedKwanUnification,
} from '@/data/library/historyKwansTranslations'
import {
  getLocalizedOrganizations,
  getLocalizedOrganizationComparisonTable,
} from '@/data/library/historyOrganizationsTranslations'
import { SafeImage } from '@/components/SafeImage'

type HistoryPillarKey = 'timeline' | 'philosophy' | 'heritage' | 'organizations'

const pillarIcons: Record<string, { icon: React.ElementType; accent: string }> = {
  timeline: { icon: Calendar, accent: '#EF2F38' },
  philosophy: { icon: Sparkles, accent: '#A05B00' },
  heritage: { icon: Shield, accent: '#0042EA' },
  organizations: { icon: Globe, accent: '#09BB00' },
}

export function HistoryHeritageMaster() {
  const { language } = useLanguage()
  const ht = historyI18n[language] || historyI18n.en

  const [activePillar, setActivePillar] = React.useState<HistoryPillarKey>('timeline')

  // 1. Timeline State
  const [selectedEra, setSelectedEra] = React.useState<string>('all')
  const [timelineView, setTimelineView] = React.useState<'timeline' | 'table'>('timeline')
  const [timelineSearch, setTimelineSearch] = React.useState('')
  const [selectedMilestone, setSelectedMilestone] = React.useState<LocalizedTimelineItem | null>(null)

  // 2. Philosophy State
  const [philosophySubTab, setPhilosophySubTab] = React.useState<
    'spirit-virtues' | 'tenets' | 'nature-sport' | 'dobok' | 'power-hwarang'
  >('spirit-virtues')

  // 3. Heritage & Kwans State
  const [selectedKwan, setSelectedKwan] = React.useState<LocalizedKwanItem | null>(null)

  // 4. Organizations State
  const [selectedOrgId, setSelectedOrgId] = React.useState<string>('matrix')

  // Localized Data Memos
  const pillars = React.useMemo(() => getLocalizedHistoryPillars(language), [language])
  const eras = React.useMemo(() => getLocalizedTimelineEras(language), [language])
  const timelineMilestones = React.useMemo(() => getLocalizedTimelineMilestones(language), [language])
  const dualSpirit = React.useMemo(() => getLocalizedDualSpirit(language), [language])
  const fiveVirtues = React.useMemo(() => getLocalizedFiveVirtues(language), [language])
  const fiveTenets = React.useMemo(() => getLocalizedFiveTenets(language), [language])
  const taekwondoNature = React.useMemo(() => getLocalizedTaekwondoNature(language), [language])
  const sesokOgye = React.useMemo(() => getLocalizedSesokOgye(language), [language])
  const theoryOfPower = React.useMemo(() => getLocalizedTheoryOfPower(language), [language])
  const dobokPhilosophy = React.useMemo(() => getLocalizedDobokPhilosophy(language), [language])
  const philosophySubTabs = React.useMemo(() => getLocalizedPhilosophySubTabs(language), [language])
  const kwans = React.useMemo(() => getLocalizedKwans(language), [language])
  const kwanUnification = React.useMemo(() => getLocalizedKwanUnification(language), [language])
  const orgs = React.useMemo(() => getLocalizedOrganizations(language), [language])
  const orgComparison = React.useMemo(() => getLocalizedOrganizationComparisonTable(language), [language])

  // Body scroll lock & Escape key listener
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedMilestone(null)
        setSelectedKwan(null)
      }
    }
    if (selectedMilestone || selectedKwan) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [selectedMilestone, selectedKwan])

  // Filtered timeline data
  const filteredTimeline = React.useMemo(() => {
    return timelineMilestones.filter((item) => {
      const eraMatch = selectedEra === 'all' || item.era === selectedEra
      if (!timelineSearch.trim()) return eraMatch
      const q = timelineSearch.toLowerCase()
      return (
        eraMatch &&
        (item.title.toLowerCase().includes(q) ||
          item.year.toLowerCase().includes(q) ||
          item.koreanTitle.toLowerCase().includes(q) ||
          item.keyFigures.toLowerCase().includes(q) ||
          item.summary.toLowerCase().includes(q))
      )
    })
  }, [timelineMilestones, selectedEra, timelineSearch])

  return (
    <div className="space-y-8">
      {/* ==================================================================== */}
      {/* 1. TOP 4-PILLAR MASTER NAVIGATION (Minimalist & High Contrast) */}
      {/* ==================================================================== */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 p-1.5 bg-zinc-100 dark:bg-zinc-900 rounded-[14px] border border-zinc-200 dark:border-zinc-800">
        {pillars.map((pillar) => {
          const isActive = activePillar === pillar.key
          const { icon: Icon, accent } = pillarIcons[pillar.key] || { icon: Calendar, accent: '#EF2F38' }

          return (
            <button
              key={pillar.key}
              onClick={() => setActivePillar(pillar.key as HistoryPillarKey)}
              className={`text-left p-4 sm:p-5 rounded-xl transition-all duration-300 relative overflow-hidden flex flex-col justify-between cursor-pointer ${
                isActive
                  ? 'bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white shadow-lg border border-zinc-300 dark:border-zinc-700'
                  : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-white/50 dark:hover:bg-zinc-800/40'
              }`}
            >
              {isActive && (
                <div
                  className="absolute top-0 left-0 right-0 h-1"
                  style={{ backgroundColor: accent }}
                />
              )}

              <div className="flex items-center justify-between mb-2">
                <Icon className="w-5 h-5" style={{ color: accent }} />
                <span className="text-[10px] font-mono uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-700 text-zinc-600 dark:text-zinc-300">
                  {ht.pillarBadge}
                </span>
              </div>

              <div>
                <h3 className="text-sm sm:text-base font-black uppercase tracking-tight">
                  {pillar.title}
                </h3>
                <span className="text-[11px] text-zinc-400 font-light block">
                  {pillar.korean}
                </span>
              </div>

              <div className="mt-2.5 pt-2 border-t border-zinc-100 dark:border-zinc-700/60 text-[10px] text-zinc-500 font-mono truncate">
                {pillar.subtitle}
              </div>
            </button>
          )
        })}
      </div>

      {/* ==================================================================== */}
      {/* PILLAR 1: HISTORY TIMELINE & CHRONOMETER */}
      {/* ==================================================================== */}
      {activePillar === 'timeline' && (
        <div className="space-y-6 animate-fade-in">
          {/* Controls: Era Filter & Search & View Switcher */}
          <div className="p-5 sm:p-6 rounded-[14px] bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-md space-y-4">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Calendar className="w-4 h-4 text-brand-red" />
                  <span className="text-xs font-mono uppercase font-bold text-brand-red tracking-wider">
                    {pillars[0]?.title} &bull; 8 Epochs
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-black uppercase text-zinc-900 dark:text-white tracking-tight">
                  {pillars[0]?.subtitle}
                </h3>
                <p className="text-xs text-zinc-500 font-light max-w-3xl mt-0.5">
                  {language === 'km'
                    ? 'ស្វែងយល់អំពីការវិវត្តពីក្បាច់គុនរស់រានមានជីវិតបុរាណ និង Subak នៃសម័យ Goryeo រហូតដល់ការបង្កើតសាលាគុនទាំង ៥ ក្នុងឆ្នាំ ១៩៤៦ ការដាក់ឈ្មោះតេក្វាន់ដូឆ្នាំ ១៩៥៥ ការពង្រីកទូទាំងពិភពលោក និងឋានៈជាកីឡាជាតិស្របច្បាប់។'
                    : language === 'zh'
                    ? '深入探索从上古生存搏击、高丽手搏戏到1946年光复五大馆创立、1955年定名跆拳道、进军奥运直至立法指定为大韩民国国技的历史全景。'
                    : language === 'ko'
                    ? '고대 생존 무예와 고려 수박희로부터 광복 직후 기간 5대 관의 개관, 1955년 명칭 제정, 올림픽 입성 및 법정 국기 지정에 이르는 유구한 역사를 탐색합니다.'
                    : 'Explore how ancient survival combat and Goryeo Subak transformed into modern Kwonbeop, the 1946 Five Kwans, the 1955 naming of Taekwondo, global expansion, and statutory National Martial Art status.'}
                </p>
              </div>

              {/* Search Bar */}
              <div className="relative min-w-[260px] sm:min-w-[320px]">
                <Search className="w-4 h-4 text-zinc-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={timelineSearch}
                  onChange={(e) => setTimelineSearch(e.target.value)}
                  placeholder={ht.searchPlaceholder}
                  className="w-full pl-9 pr-4 py-2 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-xs font-mono text-zinc-900 dark:text-white placeholder:text-zinc-400 focus:outline-none focus:border-brand-red transition-all"
                />
                {timelineSearch && (
                  <button
                    onClick={() => setTimelineSearch('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-600 dark:hover:text-white text-xs font-bold"
                  >
                    Clear
                  </button>
                )}
              </div>
            </div>

            {/* Era Filter Pills & View Switcher */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-zinc-100 dark:border-zinc-800">
              <div className="flex flex-wrap items-center gap-1.5">
                <span className="text-[11px] font-mono text-zinc-400 mr-1 flex items-center gap-1">
                  <Filter className="w-3 h-3" /> Period:
                </span>
                {eras.map((era) => (
                  <button
                    key={era.id}
                    onClick={() => setSelectedEra(era.id)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                      selectedEra === era.id
                        ? 'bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-bold shadow-sm'
                        : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white'
                    }`}
                  >
                    {era.label}
                  </button>
                ))}
              </div>

              <div className="flex items-center gap-1 p-1 bg-zinc-100 dark:bg-zinc-950 rounded-xl border border-zinc-200 dark:border-zinc-800 shrink-0">
                <button
                  onClick={() => setTimelineView('timeline')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono flex items-center gap-1.5 cursor-pointer transition-colors ${
                    timelineView === 'timeline'
                      ? 'bg-brand-red text-white font-bold'
                      : 'text-zinc-500 hover:text-zinc-900 dark:hover:text-white'
                  }`}
                >
                  <LayoutGrid className="w-3.5 h-3.5" /> {ht.viewTimeline}
                </button>
                <button
                  onClick={() => setTimelineView('table')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono flex items-center gap-1.5 cursor-pointer transition-colors ${
                    timelineView === 'table'
                      ? 'bg-brand-red text-white font-bold'
                      : 'text-zinc-500 hover:text-zinc-900 dark:hover:text-white'
                  }`}
                >
                  <Table className="w-3.5 h-3.5" /> {ht.viewTable}
                </button>
              </div>
            </div>
          </div>

          {/* VIEW A: VISUAL CARDS */}
          {timelineView === 'timeline' && (
            <div className="space-y-4">
              {filteredTimeline.map((item) => (
                <div
                  key={item.id}
                  onClick={() => setSelectedMilestone(item)}
                  className="p-5 sm:p-7 rounded-[14px] bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm hover:shadow-xl hover:border-brand-red/50 transition-all duration-300 grid md:grid-cols-12 gap-6 items-center cursor-pointer group"
                >
                  {/* Photo Column */}
                  <div className="md:col-span-4 relative h-44 sm:h-48 rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-800">
                    <SafeImage
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                    <div className="absolute top-2.5 left-2.5 z-10">
                      <span className="px-2.5 py-1 rounded-lg text-[10px] font-mono font-bold uppercase tracking-wider bg-black/80 text-white backdrop-blur-md border border-white/20">
                        {item.year}
                      </span>
                    </div>
                    <div className="absolute bottom-2.5 left-2.5 right-2.5 text-white z-10">
                      <span className="text-[10px] font-mono font-bold block" style={{ color: item.tagColor }}>
                        {item.era}
                      </span>
                      <span className="text-[11px] font-mono block opacity-80 truncate">
                        {item.koreanTitle.split('(')[0]}
                      </span>
                    </div>
                  </div>

                  {/* Summary Column */}
                  <div className="md:col-span-8 space-y-2.5">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400">
                        Epoch #{item.epochNumber} Milestone
                      </span>
                      <span className="text-xs font-mono text-zinc-400 flex items-center gap-1">
                        <User className="w-3.5 h-3.5" /> {item.keyFigures.split(',')[0]}
                      </span>
                    </div>

                    <h4 className="text-base sm:text-lg font-black uppercase tracking-tight text-zinc-900 dark:text-white group-hover:text-brand-red transition-colors">
                      {item.title}
                    </h4>

                    <p className="text-xs text-zinc-600 dark:text-zinc-400 font-light leading-relaxed">
                      {item.summary}
                    </p>

                    <div className="pt-2 flex items-center justify-between text-xs font-mono border-t border-zinc-100 dark:border-zinc-800">
                      <span className="text-[11px] text-zinc-500 truncate max-w-[320px]">
                        {ht.colFigures}: {item.keyFigures}
                      </span>
                      <span className="text-brand-red font-bold text-xs inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                        {ht.btnReadFull} <ChevronRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* VIEW B: CHRONO DATA TABLE */}
          {timelineView === 'table' && (
            <div className="p-6 rounded-[14px] bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-md space-y-4">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs font-mono border-collapse">
                  <thead>
                    <tr className="border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 text-zinc-500 uppercase text-[10px]">
                      <th className="p-3">{ht.colYear}</th>
                      <th className="p-3">{ht.colEvent}</th>
                      <th className="p-3">Hangul</th>
                      <th className="p-3">{ht.colFigures}</th>
                      <th className="p-3 text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800 text-zinc-700 dark:text-zinc-300">
                    {filteredTimeline.map((item) => (
                      <tr
                        key={item.id}
                        onClick={() => setSelectedMilestone(item)}
                        className="hover:bg-zinc-50 dark:hover:bg-zinc-800/50 cursor-pointer transition-colors"
                      >
                        <td className="p-3 whitespace-nowrap">
                          <span className="font-bold text-brand-red block">{item.year}</span>
                          <span className="text-[10px] text-zinc-400">{item.era}</span>
                        </td>
                        <td className="p-3 font-bold text-zinc-900 dark:text-white max-w-xs">
                          {item.title}
                        </td>
                        <td className="p-3 text-zinc-500 max-w-xs truncate">
                          {item.koreanTitle}
                        </td>
                        <td className="p-3 text-zinc-500 max-w-xs truncate">
                          {item.keyFigures}
                        </td>
                        <td className="p-3 text-right whitespace-nowrap">
                          <button
                            onClick={(e) => {
                              e.stopPropagation()
                              setSelectedMilestone(item)
                            }}
                            className="text-brand-red hover:underline font-bold"
                          >
                            {ht.btnReadFull}
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      )}

      {/* ==================================================================== */}
      {/* PILLAR 2: PHILOSOPHY, DUAL SPIRIT, 5 VIRTUES & NATURE OF MUDO SPORT */}
      {/* ==================================================================== */}
      {activePillar === 'philosophy' && (
        <div className="space-y-6 animate-fade-in">
          {/* Sub-Tabs */}
          <div className="p-5 sm:p-6 rounded-[14px] bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-md space-y-4">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Sparkles className="w-4 h-4 text-amber-500" />
                  <span className="text-xs font-mono uppercase font-bold text-amber-500 tracking-wider">
                    {pillars[1]?.title}
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-black uppercase text-zinc-900 dark:text-white tracking-tight">
                  {pillars[1]?.subtitle}
                </h3>
              </div>

              <div className="flex flex-wrap items-center gap-1.5 p-1 bg-zinc-100 dark:bg-zinc-950 rounded-xl border border-zinc-200 dark:border-zinc-800">
                {philosophySubTabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setPhilosophySubTab(tab.id as any)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold cursor-pointer transition-colors ${
                      philosophySubTab === tab.id
                        ? 'bg-brand-red text-white'
                        : 'text-zinc-500 hover:text-zinc-900 dark:hover:text-white'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* SUB-TAB 1: DUAL SPIRIT (GEUKGI & HONGIK) + 5 VIRTUES */}
          {philosophySubTab === 'spirit-virtues' && (
            <div className="space-y-6">
              {/* Dual Ideology Banner */}
              <div className="p-6 rounded-[14px] bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-md space-y-4">
                <div className="flex items-center justify-between pb-2 border-b border-zinc-100 dark:border-zinc-800">
                  <h4 className="text-sm font-black uppercase text-zinc-900 dark:text-white tracking-tight flex items-center gap-2">
                    <Flame className="w-4 h-4 text-brand-red" /> {dualSpirit.title}
                  </h4>
                  <span className="text-xs font-mono text-zinc-400">{dualSpirit.koreanTitle}</span>
                </div>
                <p className="text-xs text-zinc-600 dark:text-zinc-400 font-light leading-relaxed">
                  {dualSpirit.summary}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                  {dualSpirit.ideologies.map((ideology) => (
                    <div
                      key={ideology.id}
                      className="p-5 rounded-xl border bg-zinc-50 dark:bg-zinc-950 space-y-2.5"
                      style={{ borderColor: `${ideology.badgeColor}40` }}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xl font-bold font-mono px-2.5 py-0.5 rounded bg-white dark:bg-zinc-900 border text-zinc-900 dark:text-white">
                          {ideology.hanja}
                        </span>
                        <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded text-white" style={{ backgroundColor: ideology.badgeColor }}>
                          {ideology.direction}
                        </span>
                      </div>

                      <div>
                        <h5 className="text-sm font-bold uppercase text-zinc-900 dark:text-white">
                          {ideology.name} ({ideology.koreanName})
                        </h5>
                        <strong className="text-xs font-mono text-brand-red block mt-0.5">
                          {ideology.coreValue}
                        </strong>
                      </div>

                      <p className="text-xs text-zinc-600 dark:text-zinc-400 font-light leading-relaxed">
                        {ideology.explanation}
                      </p>

                      <div className="p-3 rounded-lg bg-white dark:bg-zinc-900 text-[11px] font-mono text-zinc-500 italic border border-zinc-100 dark:border-zinc-800">
                        &ldquo;{ideology.quote}&rdquo;
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* The Five Virtues (5대 덕목) */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-black uppercase text-zinc-900 dark:text-white tracking-tight flex items-center gap-2">
                    <HeartHandshake className="w-4 h-4 text-emerald-500" />{' '}
                    {language === 'km'
                      ? 'គុណធម៌ទាំង ៥ នៃតេក្វាន់ដូ (5 Virtues)'
                      : language === 'zh'
                      ? '跆拳道五大德目 (Five Virtues)'
                      : language === 'ko'
                      ? '태권도 5대 덕목 (The Five Virtues)'
                      : 'The Five Virtues of Taekwondo (태권도 5대 덕목)'}
                  </h4>
                  <span className="text-xs font-mono text-zinc-400">
                    Action Guidelines for Youth Character &amp; Daily Life
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {fiveVirtues.map((virtue, vIdx) => (
                    <div
                      key={virtue.id}
                      className="p-5 rounded-[14px] bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm hover:shadow-md transition-all space-y-3 flex flex-col justify-between"
                    >
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-lg font-bold font-mono px-2.5 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white">
                            {virtue.hanja}
                          </span>
                          <span className="text-xs font-mono font-bold text-brand-red">
                            Virtue #{vIdx + 1}
                          </span>
                        </div>

                        <div>
                          <h5 className="text-sm font-black uppercase text-zinc-900 dark:text-white">
                            {virtue.name} ({virtue.koreanName})
                          </h5>
                          <span className="text-xs font-mono text-zinc-400 block">{virtue.englishMeaning}</span>
                        </div>

                        <p className="text-xs text-zinc-600 dark:text-zinc-400 font-light leading-relaxed">
                          {virtue.definition}
                        </p>
                      </div>

                      <div className="pt-2.5 border-t border-zinc-100 dark:border-zinc-800 text-xs font-mono space-y-1 text-zinc-500">
                        <div><strong className="text-zinc-700 dark:text-zinc-300">Action:</strong> {virtue.guidelineForAction}</div>
                        <div><strong className="text-zinc-700 dark:text-zinc-300">Character Focus:</strong> {virtue.youthCharacterFocus}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* SUB-TAB 2: THE 5 TRADITIONAL TENETS */}
          {philosophySubTab === 'tenets' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {fiveTenets.map((tenet, idx) => (
                <div
                  key={tenet.id}
                  className="p-6 rounded-[14px] bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm hover:shadow-lg transition-all space-y-3 flex flex-col justify-between"
                >
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-bold font-mono px-3 py-1 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white">
                        {tenet.hanja}
                      </span>
                      <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-brand-red/10 text-brand-red">
                        Tenet #{idx + 1}
                      </span>
                    </div>

                    <div>
                      <h4 className="text-base font-black uppercase text-zinc-900 dark:text-white">
                        {tenet.name} ({tenet.koreanName})
                      </h4>
                      <span className="text-xs font-mono text-brand-red block">
                        {tenet.romanized} &bull; {tenet.englishMeaning}
                      </span>
                    </div>

                    <p className="text-xs text-zinc-600 dark:text-zinc-400 font-light leading-relaxed">
                      {tenet.deepExplanation}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-zinc-100 dark:border-zinc-800 text-xs font-mono space-y-1 text-zinc-500">
                    <div><strong className="text-zinc-700 dark:text-zinc-300">Dojang:</strong> {tenet.dojangApplication}</div>
                    <div><strong className="text-zinc-700 dark:text-zinc-300">Daily Life:</strong> {tenet.lifeApplication}</div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* SUB-TAB 3: NATURE OF MARTIAL ART SPORT & 5 TECHNIQUE CHARACTERISTICS */}
          {philosophySubTab === 'nature-sport' && (
            <div className="space-y-6">
              {/* Definition & Dual Purposes */}
              <div className="p-6 rounded-[14px] bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-md space-y-4">
                <div className="space-y-2">
                  <span className="text-xs font-mono font-bold text-brand-red uppercase">
                    Kukkiwon Academic Synthesis
                  </span>
                  <h4 className="text-base sm:text-lg font-black uppercase text-zinc-900 dark:text-white">
                    Definition &amp; Dual Purpose of Taekwondo
                  </h4>
                  <p className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 font-light leading-relaxed">
                    {taekwondoNature.definition}
                  </p>
                  <p className="text-xs font-mono text-zinc-500 italic">
                    {taekwondoNature.koreanDefinition}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                  {taekwondoNature.dualPurposes.map((p, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-1">
                      <strong className="text-xs font-bold text-zinc-900 dark:text-white block font-mono">
                        {p.title}
                      </strong>
                      <p className="text-xs text-zinc-600 dark:text-zinc-400 font-light leading-relaxed">
                        {p.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* 5 Distinct Technique Characteristics */}
              <div className="p-6 rounded-[14px] bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-md space-y-4">
                <h4 className="text-sm font-black uppercase text-zinc-900 dark:text-white tracking-tight flex items-center gap-2">
                  <Target className="w-4 h-4 text-brand-red" /> The Five Distinct Technique Characteristics
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
                  {taekwondoNature.fiveTechniqueCharacteristics.map((tc, idx) => (
                    <div
                      key={tc.id}
                      className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-1.5 text-xs font-mono"
                    >
                      <span className="text-[10px] text-brand-red font-bold uppercase">
                        Feature #{idx + 1}
                      </span>
                      <strong className="text-xs font-bold text-zinc-900 dark:text-white block">
                        {tc.title}
                      </strong>
                      <span className="text-[11px] text-zinc-400 block">{tc.korean}</span>
                      <p className="text-[11px] text-zinc-600 dark:text-zinc-400 font-light leading-relaxed pt-1">
                        {tc.explanation}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Meaning of Practice (Suryeon) & Mudo Sport Traits */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-6 rounded-[14px] bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 space-y-3">
                  <h4 className="text-xs font-mono font-bold uppercase text-zinc-900 dark:text-white flex items-center gap-2">
                    <Compass className="w-4 h-4 text-blue-500" /> {taekwondoNature.suryeonMeaning.title}
                  </h4>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 font-light leading-relaxed">
                    {taekwondoNature.suryeonMeaning.explanation}
                  </p>
                </div>

                <div className="p-6 rounded-[14px] bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 space-y-3">
                  <h4 className="text-xs font-mono font-bold uppercase text-zinc-900 dark:text-white flex items-center gap-2">
                    <Dumbbell className="w-4 h-4 text-emerald-500" /> 5 Traits of Modern Martial Art Sport (Mudo Sport)
                  </h4>
                  <ul className="space-y-1.5 text-xs font-mono text-zinc-600 dark:text-zinc-400 font-light">
                    {taekwondoNature.mudoSportCharacteristics.map((trait, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <span className="text-emerald-500 font-bold">&bull;</span>
                        <span>{trait}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* SUB-TAB 4: DOBOK & BELT COSMOLOGY */}
          {philosophySubTab === 'dobok' && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {dobokPhilosophy.aspects.map((asp, idx) => (
                  <div key={idx} className="p-6 rounded-[14px] bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 space-y-2.5">
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-bold font-mono" style={{ color: asp.color }}>
                        {asp.hanja} ({asp.sound})
                      </span>
                      <span className="text-xs font-mono px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800">
                        {asp.meaning}
                      </span>
                    </div>
                    <h4 className="text-sm font-bold uppercase text-zinc-900 dark:text-white">
                      {asp.title}
                    </h4>
                    <p className="text-xs text-zinc-600 dark:text-zinc-400 font-light leading-relaxed">
                      {asp.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Belt Progression Journey */}
              <div className="p-6 rounded-[14px] bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 space-y-3">
                <h4 className="text-sm font-black uppercase text-zinc-900 dark:text-white tracking-tight flex items-center gap-2">
                  <Award className="w-4 h-4 text-brand-red" /> {dobokPhilosophy.cycleTitle}
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 text-xs font-mono">
                  {dobokPhilosophy.belts.map((belt, idx) => (
                    <div
                      key={idx}
                      className={`p-3 rounded-xl border ${
                        belt.isDark
                          ? 'bg-zinc-900 text-white dark:bg-white dark:text-black border-zinc-800'
                          : 'bg-zinc-50 dark:bg-zinc-950 border-zinc-200 dark:border-zinc-800'
                      }`}
                    >
                      <span className="text-base block">{belt.color}</span>
                      <strong className={`block mt-1 ${belt.isDark ? '' : 'text-zinc-900 dark:text-white'}`}>
                        {belt.name}
                      </strong>
                      <span className="text-[10px] block opacity-75">{belt.meaning}</span>
                      <span className="text-[9px] block opacity-60 mt-0.5">{belt.sub}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* SUB-TAB 5: THEORY OF POWER & HWARANG SESOK-OGYE */}
          {philosophySubTab === 'power-hwarang' && (
            <div className="space-y-6">
              {/* Theory of Power Grid */}
              <div className="p-6 rounded-[14px] bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-md space-y-4">
                <div className="flex items-center justify-between pb-2 border-b border-zinc-100 dark:border-zinc-800">
                  <h4 className="text-sm font-black uppercase text-zinc-900 dark:text-white tracking-tight flex items-center gap-2">
                    <Zap className="w-4 h-4 text-amber-500" /> Biomechanical Theory of Power (힘의 원리: E = ½mv²)
                  </h4>
                  <span className="text-xs font-mono text-zinc-400">6 Kinetic Mechanical Factors</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {theoryOfPower.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-5 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-2"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono font-bold text-brand-red">
                          Factor #{idx + 1}
                        </span>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white dark:bg-zinc-900 border text-zinc-500">
                          {item.principle}
                        </span>
                      </div>
                      <h5 className="text-sm font-black uppercase text-zinc-900 dark:text-white">
                        {item.factor}
                      </h5>
                      <span className="text-xs font-mono text-zinc-400 block">{item.korean}</span>
                      <p className="text-xs text-zinc-600 dark:text-zinc-400 font-light leading-relaxed">
                        {item.explanation}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Hwarang Sesok-Ogye */}
              <div className="p-6 rounded-[14px] bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-md space-y-4">
                <div className="flex items-center justify-between pb-2 border-b border-zinc-100 dark:border-zinc-800">
                  <h4 className="text-sm font-black uppercase text-zinc-900 dark:text-white tracking-tight flex items-center gap-2">
                    <Shield className="w-4 h-4 text-brand-red" /> Silla Hwarangdo: The Five Secular Injunctions (Sesok-Ogye / 世俗五戒)
                  </h4>
                  <span className="text-xs font-mono text-zinc-400">By Monk Won Gwang (600 CE)</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
                  {sesokOgye.map((cmd, cIdx) => (
                    <div
                      key={cIdx}
                      className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-1.5 font-mono text-xs"
                    >
                      <span className="text-[10px] text-brand-red font-bold uppercase block">
                        Rule #{cIdx + 1}
                      </span>
                      <strong className="text-sm font-bold text-zinc-900 dark:text-white block">
                        {cmd.commandment}
                      </strong>
                      <span className="text-xs text-zinc-700 dark:text-zinc-300 font-bold block">
                        {cmd.english}
                      </span>
                      <p className="text-[11px] text-zinc-500 font-light leading-relaxed pt-1">
                        {cmd.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* ==================================================================== */}
      {/* PILLAR 3: HERITAGE & THE ORIGINAL 9 KWANS */}
      {/* ==================================================================== */}
      {activePillar === 'heritage' && (
        <div className="space-y-6 animate-fade-in">
          {/* Header Card */}
          <div className="p-5 sm:p-6 rounded-[14px] bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-md space-y-2">
            <div className="flex items-center gap-2 mb-1">
              <Shield className="w-4 h-4 text-blue-500" />
              <span className="text-xs font-mono uppercase font-bold text-blue-500 tracking-wider">
                {pillars[2]?.title}
              </span>
            </div>
            <h3 className="text-lg sm:text-xl font-black uppercase text-zinc-900 dark:text-white tracking-tight">
              {pillars[2]?.subtitle}
            </h3>
            <p className="text-xs text-zinc-500 font-light max-w-3xl">
              {language === 'km'
                ? 'បន្ទាប់ពីការរំដោះប្រទេសកូរ៉េឆ្នាំ ១៩៤៥ សាលាគុនដំបូងៗទាំង ៥ (Chung Do Kwan, Song Moo Kwan, Moo Duk Kwan, Chang Moo Kwan, Jidokwan) បានបើកដំណើរការនៅសេអ៊ូល បន្ទាប់មកមាន Han Moo Kwan, Oh Do Kwan, Kang Duk Won និង Jung Do Kwan។ ក្នុងឆ្នាំ ១៩៧៨ សាលាគុនទាំង ៩ បានបង្រួបបង្រួមវិញ្ញាបនបត្រទាំងអស់ក្រោមប្រព័ន្ធ Kukkiwon។'
                : language === 'zh'
                ? '光复前后，以青涛馆、松武馆、武德馆、彰武馆、智道馆为代表的五大开山馆在首尔相继创立，随后韩武馆、吾道馆、讲德院与正道馆相继分立。1978年九大馆签署历史性统一宣言，全面归并于国技院统一编号附馆体系。'
                : language === 'ko'
                ? '해방 직후 청도관, 송무관, 무덕관, 창무관, 지도관 등 5대 기간관이 개관하였고, 이어 한무관, 오도관, 강덕원, 정도관이 분립하여 기간 9대 관을 형성하였습니다. 1978년 9대 관은 파벌을 해체하고 국기원 단일 단증 체제로 완전 통합되었습니다.'
                : 'Following the 1945 liberation of Korea, the initial Five Kwans (Chung Do Kwan, Song Moo Kwan, Moo Duk Kwan, Chang Moo Kwan, Jidokwan) opened in Seoul, followed by Han Moo Kwan, Oh Do Kwan, Kang Duk Won, and Jung Do Kwan. In 1978, all 9 Kwans merged their diplomas into the unified Kukkiwon Dan certification system.'}
            </p>
          </div>

          {/* 9 Kwans Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {kwans.map((kwan) => (
              <div
                key={kwan.id}
                onClick={() => setSelectedKwan(kwan)}
                className="p-5 rounded-[14px] bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm hover:shadow-xl hover:border-brand-red/50 transition-all cursor-pointer space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold font-mono px-2.5 py-1 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-brand-red">
                      {kwan.hanja}
                    </span>
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-500">
                      {ht.kwanAnnexBadge} {kwan.kwanNumber}
                    </span>
                  </div>

                  <div>
                    <h4 className="text-base font-black uppercase text-zinc-900 dark:text-white">
                      {kwan.name} ({kwan.koreanName})
                    </h4>
                    <span className="text-xs font-mono text-zinc-400 block">
                      {ht.kwanFoundingYear}: {kwan.foundingYear} &bull; {kwan.founder}
                    </span>
                  </div>

                  <p className="text-xs text-zinc-600 dark:text-zinc-400 font-light leading-relaxed">
                    {kwan.meaning} — {kwan.characteristics}
                  </p>
                </div>

                <div className="pt-2.5 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between text-xs font-mono">
                  <span className="text-zinc-400 text-[10px] truncate max-w-[190px]">
                    {ht.kwanLocation}: {kwan.location.split('(')[0]}
                  </span>
                  <span className="text-brand-red font-bold text-xs inline-flex items-center gap-1">
                    {ht.btnReadFull} <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Kwan Unification Story Box */}
          <div className="p-6 rounded-[14px] bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-md space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 border-b border-zinc-100 dark:border-zinc-800">
              <h4 className="text-sm font-black uppercase text-zinc-900 dark:text-white tracking-tight flex items-center gap-2">
                <Building className="w-4 h-4 text-emerald-500" /> {kwanUnification.title}
              </h4>
              <span className="text-xs font-mono font-bold text-brand-red">
                {kwanUnification.proclamationDate}
              </span>
            </div>

            <p className="text-xs text-zinc-600 dark:text-zinc-400 font-light leading-relaxed">
              {kwanUnification.summary}
            </p>

            <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-2 text-xs font-mono">
              <span className="text-[10px] text-zinc-400 uppercase font-bold block">
                {language === 'km' ? 'សេចក្តីប្រកាសសំខាន់ៗ' : language === 'zh' ? '统合决议核心要点' : language === 'ko' ? '대통합 핵심 결의 내용' : 'Core Proclamations'}
              </span>
              <ul className="space-y-1 text-zinc-600 dark:text-zinc-400 font-light">
                {kwanUnification.theTenProclamations.map((item, pIdx) => (
                  <li key={pIdx} className="flex items-start gap-1.5">
                    <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-xs text-zinc-500 font-light italic">
              {kwanUnification.legacyImpact}
            </p>
          </div>
        </div>
      )}

      {/* ==================================================================== */}
      {/* PILLAR 4: GLOBAL ORGANIZATIONS (WT, KUKKIWON, ITF, ATA) */}
      {/* ==================================================================== */}
      {activePillar === 'organizations' && (
        <div className="space-y-6 animate-fade-in">
          {/* Header & Sub-Tabs */}
          <div className="p-5 sm:p-6 rounded-[14px] bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-md space-y-4">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Globe className="w-4 h-4 text-emerald-500" />
                  <span className="text-xs font-mono uppercase font-bold text-emerald-500 tracking-wider">
                    {ht.orgMatrixTitle}
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-black uppercase text-zinc-900 dark:text-white tracking-tight">
                  {ht.orgMatrixSubtitle}
                </h3>
              </div>

              <div className="flex flex-wrap items-center gap-1.5 p-1 bg-zinc-100 dark:bg-zinc-950 rounded-xl border border-zinc-200 dark:border-zinc-800">
                <button
                  onClick={() => setSelectedOrgId('matrix')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold cursor-pointer transition-colors ${
                    selectedOrgId === 'matrix'
                      ? 'bg-brand-red text-white'
                      : 'text-zinc-500 hover:text-zinc-900 dark:hover:text-white'
                  }`}
                >
                  <Table className="w-3.5 h-3.5 inline mr-1" /> {ht.tableComparisonTitle}
                </button>
                {orgs.map((org) => (
                  <button
                    key={org.id}
                    onClick={() => setSelectedOrgId(org.id)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold cursor-pointer transition-colors ${
                      selectedOrgId === org.id
                        ? 'bg-brand-red text-white'
                        : 'text-zinc-500 hover:text-zinc-900 dark:hover:text-white'
                    }`}
                  >
                    {org.acronym.split(' ')[0]}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* TAB A: SIDE-BY-SIDE COMPARISON MATRIX TABLE */}
          {selectedOrgId === 'matrix' && (
            <div className="p-6 rounded-[14px] bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-md space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-black uppercase text-zinc-900 dark:text-white tracking-tight flex items-center gap-2">
                  <Table className="w-4 h-4 text-brand-red" /> {ht.tableComparisonTitle}
                </h4>
                <span className="text-xs font-mono text-zinc-400">{ht.tableComparisonSub}</span>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs font-mono border-collapse">
                  <thead>
                    <tr className="border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 text-zinc-500 uppercase text-[10px]">
                      <th className="p-3">{ht.colFeature}</th>
                      <th className="p-3 text-brand-red">World Taekwondo (WT)</th>
                      <th className="p-3">Kukkiwon (World HQ)</th>
                      <th className="p-3 text-blue-500">ITF (Traditional)</th>
                      <th className="p-3 text-amber-500">ATA (Songahm)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800 text-zinc-700 dark:text-zinc-300">
                    {orgComparison.map((row, rIdx) => (
                      <tr key={rIdx} className="hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors">
                        <td className="p-3 font-bold text-zinc-900 dark:text-white whitespace-nowrap">
                          {row.feature}
                        </td>
                        <td className="p-3 text-zinc-800 dark:text-zinc-200">
                          {row.wt}
                        </td>
                        <td className="p-3 text-zinc-800 dark:text-zinc-200">
                          {row.kukkiwon}
                        </td>
                        <td className="p-3 text-zinc-800 dark:text-zinc-200">
                          {row.itf}
                        </td>
                        <td className="p-3 text-zinc-800 dark:text-zinc-200">
                          {row.ata}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAB B: INDIVIDUAL ORGANIZATION DOSSIER */}
          {selectedOrgId !== 'matrix' && (
            (() => {
              const org = orgs.find((o) => o.id === selectedOrgId) || orgs[0]

              return (
                <div className="p-6 sm:p-8 rounded-[14px] bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-md space-y-6">
                  {/* Org Top Header */}
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-zinc-100 dark:border-zinc-800">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold uppercase bg-brand-red text-white">
                          {org.logoText}
                        </span>
                        <span className="text-xs font-mono text-zinc-400">
                          Founded: {org.foundingYear}
                        </span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-zinc-900 dark:text-white">
                        {org.name}
                      </h3>
                      <span className="text-xs font-mono text-zinc-500">{org.koreanName} &bull; {org.headquarters}</span>
                    </div>

                    <div className="text-left md:text-right font-mono text-xs text-zinc-500">
                      <div><strong>Leadership:</strong> {org.leadership}</div>
                      <div><strong>Scope:</strong> {org.scope}</div>
                    </div>
                  </div>

                  {/* Summary & Governance */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-5 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-2">
                      <h4 className="text-xs font-mono font-bold uppercase text-zinc-900 dark:text-white flex items-center gap-1.5">
                        <Building className="w-4 h-4 text-brand-red" /> Institutional Mandate
                      </h4>
                      <p className="text-xs text-zinc-600 dark:text-zinc-400 font-light leading-relaxed">
                        {org.summary}
                      </p>
                    </div>

                    <div className="p-5 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-2">
                      <h4 className="text-xs font-mono font-bold uppercase text-zinc-900 dark:text-white flex items-center gap-1.5">
                        <Scale className="w-4 h-4 text-blue-500" /> {ht.orgGovernanceRole}
                      </h4>
                      <p className="text-xs text-zinc-600 dark:text-zinc-400 font-light leading-relaxed">
                        {org.governanceRole}
                      </p>
                    </div>
                  </div>

                  {/* Sparring & Forms Rules */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Sparring Rules */}
                    <div className="p-5 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-3">
                      <h4 className="text-xs font-mono font-bold uppercase text-zinc-900 dark:text-white flex items-center gap-1.5">
                        <Target className="w-4 h-4 text-emerald-500" /> {ht.orgSparringTitle}
                      </h4>
                      <div className="space-y-1.5 text-xs font-mono text-zinc-600 dark:text-zinc-400">
                        <div><strong>{ht.orgFormatLabel}:</strong> {org.sparringRules.format}</div>
                        <div><strong>{ht.orgContactLabel}:</strong> {org.sparringRules.contactLevel}</div>
                        <div><strong>{ht.orgHeadPunchLabel}:</strong> {org.sparringRules.headPunches ? `✅ ${ht.orgPermitted}` : `❌ ${ht.orgProhibited}`}</div>
                        <div><strong>{ht.orgScoringLabel}:</strong> {org.sparringRules.scoringSystem}</div>
                        <div><strong>{ht.orgGearLabel}:</strong> {org.sparringRules.protectiveGear}</div>
                      </div>
                    </div>

                    {/* Forms System */}
                    <div className="p-5 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-3">
                      <h4 className="text-xs font-mono font-bold uppercase text-zinc-900 dark:text-white flex items-center gap-1.5">
                        <BookOpen className="w-4 h-4 text-amber-500" /> {ht.orgFormsTitle}
                      </h4>
                      <div className="space-y-1.5 text-xs font-mono text-zinc-600 dark:text-zinc-400">
                        <div><strong>System:</strong> {org.formsSystem.name}</div>
                        <div><strong>Count:</strong> {org.formsSystem.count}</div>
                        <div><strong>Philosophy:</strong> {org.formsSystem.philosophy}</div>
                        <div><strong>Examples:</strong> {org.formsSystem.examples.join(', ')}</div>
                      </div>
                    </div>
                  </div>

                  {/* Milestones & Core Strengths */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-5 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-2">
                      <h4 className="text-xs font-mono font-bold uppercase text-zinc-900 dark:text-white">
                        {ht.orgMilestonesTitle}
                      </h4>
                      <ul className="space-y-1 text-xs font-mono text-zinc-600 dark:text-zinc-400 font-light">
                        {org.keyMilestones.map((ms, idx) => (
                          <li key={idx} className="flex items-start gap-1.5">
                            <span className="text-brand-red font-bold">&bull;</span>
                            <span>{ms}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="p-5 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-2">
                      <h4 className="text-xs font-mono font-bold uppercase text-zinc-900 dark:text-white">
                        {ht.orgStrengthsTitle}
                      </h4>
                      <ul className="space-y-1 text-xs font-mono text-zinc-600 dark:text-zinc-400 font-light">
                        {org.strengths.map((str, idx) => (
                          <li key={idx} className="flex items-start gap-1.5">
                            <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                            <span>{str}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )
            })()
          )}
        </div>
      )}

      {/* ==================================================================== */}
      {/* MODAL 1: MILESTONE DEEP-DIVE DOSSIER (Responsive Sheet on Mobile) */}
      {/* ==================================================================== */}
      {selectedMilestone && (
        <div
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-6 md:p-10 bg-black/80 backdrop-blur-sm animate-fade-in"
          onClick={() => setSelectedMilestone(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="milestone-modal-title"
        >
          <div
            className="relative w-full max-w-2xl max-h-[92vh] sm:max-h-[90vh] bg-white dark:bg-zinc-900 rounded-t-[20px] sm:rounded-[14px] border border-zinc-200 dark:border-zinc-800 shadow-2xl overflow-y-auto flex flex-col justify-between"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 z-20 bg-white/95 dark:bg-zinc-900/95 backdrop-blur-md p-4 sm:p-6 border-b border-zinc-200 dark:border-zinc-800 flex items-center justify-between gap-4">
              <div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-brand-red/10 text-brand-red">
                  {selectedMilestone.era} &bull; {selectedMilestone.year}
                </span>
                <h3 id="milestone-modal-title" className="text-lg font-black uppercase text-zinc-900 dark:text-white tracking-tight mt-1">
                  {selectedMilestone.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedMilestone(null)}
                className="p-2.5 rounded-lg bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors cursor-pointer min-w-[44px] min-h-[44px] flex items-center justify-center"
                aria-label="Close dossier modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 space-y-4">
              <div className="relative h-56 rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-800">
                <SafeImage
                  src={selectedMilestone.image}
                  alt={selectedMilestone.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 text-white">
                  <span className="text-xs font-mono font-bold block opacity-90">
                    {ht.colFigures}: {selectedMilestone.keyFigures}
                  </span>
                </div>
              </div>

              <div className="space-y-2">
                <span className="text-xs font-mono text-zinc-400 block">
                  Korean: {selectedMilestone.koreanTitle}
                </span>
                <p className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 font-light leading-relaxed">
                  {selectedMilestone.summary}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-2 text-xs font-mono">
                <h4 className="font-bold uppercase text-zinc-900 dark:text-white">
                  Historical Records &amp; Facts
                </h4>
                <ul className="space-y-1.5 text-zinc-600 dark:text-zinc-400 font-light">
                  {selectedMilestone.details.map((dt, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-brand-red font-bold">&bull;</span>
                      <span>{dt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="p-4 border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 flex justify-end">
              <button
                onClick={() => setSelectedMilestone(null)}
                className="px-4 py-2 rounded-xl bg-zinc-900 text-white dark:bg-white dark:text-black text-xs font-mono font-bold uppercase cursor-pointer"
              >
                {ht.btnClose}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ==================================================================== */}
      {/* MODAL 2: KWAN DEEP-DIVE DOSSIER (Responsive Sheet on Mobile) */}
      {/* ==================================================================== */}
      {selectedKwan && (
        <div
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-6 md:p-10 bg-black/80 backdrop-blur-sm animate-fade-in"
          onClick={() => setSelectedKwan(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="kwan-modal-title"
        >
          <div
            className="relative w-full max-w-2xl max-h-[92vh] sm:max-h-[90vh] bg-white dark:bg-zinc-900 rounded-t-[20px] sm:rounded-[14px] border border-zinc-200 dark:border-zinc-800 shadow-2xl overflow-y-auto flex flex-col justify-between"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 z-20 bg-white/95 dark:bg-zinc-900/95 backdrop-blur-md p-4 sm:p-6 border-b border-zinc-200 dark:border-zinc-800 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="text-2xl font-bold font-mono px-3 py-1 rounded-xl bg-brand-red/10 text-brand-red border border-brand-red/20">
                  {selectedKwan.hanja}
                </span>
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase text-brand-red block">
                    {ht.kwanAnnexBadge} {selectedKwan.kwanNumber} &bull; {ht.kwanFoundingYear} {selectedKwan.foundingYear}
                  </span>
                  <h3 id="kwan-modal-title" className="text-lg font-black uppercase text-zinc-900 dark:text-white tracking-tight">
                    {selectedKwan.name} ({selectedKwan.koreanName})
                  </h3>
                </div>
              </div>
              <button
                onClick={() => setSelectedKwan(null)}
                className="p-2.5 rounded-lg bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors cursor-pointer min-w-[44px] min-h-[44px] flex items-center justify-center"
                aria-label="Close Kwan dossier"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 space-y-4 text-xs font-mono">
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3.5 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800">
                  <span className="text-[10px] text-zinc-400 uppercase block">{ht.kwanFounder}</span>
                  <strong className="text-zinc-900 dark:text-white text-xs block mt-0.5">{selectedKwan.founder}</strong>
                </div>
                <div className="p-3.5 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800">
                  <span className="text-[10px] text-zinc-400 uppercase block">{ht.kwanLocation}</span>
                  <strong className="text-zinc-900 dark:text-white text-xs block mt-0.5">{selectedKwan.location}</strong>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-1.5">
                <span className="text-[10px] text-zinc-400 uppercase block">{ht.kwanLineage}</span>
                <p className="text-zinc-700 dark:text-zinc-300 font-light">{selectedKwan.lineageRoot}</p>
              </div>

              <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-1.5">
                <span className="text-[10px] text-zinc-400 uppercase block">{ht.kwanCharacteristics}</span>
                <p className="text-zinc-700 dark:text-zinc-300 font-light">{selectedKwan.characteristics}</p>
              </div>

              <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-1.5">
                <span className="text-[10px] text-zinc-400 uppercase block">{ht.kwanLegacy}</span>
                <p className="text-zinc-700 dark:text-zinc-300 font-light">{selectedKwan.historicalLegacy}</p>
              </div>

              <div className="p-3 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-[11px] text-zinc-600 dark:text-zinc-400">
                <strong>{ht.kwanMasters}:</strong> {selectedKwan.prominentMasters.join(', ')}
              </div>
            </div>

            <div className="p-4 border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 flex justify-end">
              <button
                onClick={() => setSelectedKwan(null)}
                className="px-4 py-2 rounded-xl bg-zinc-900 text-white dark:bg-white dark:text-black text-xs font-mono font-bold uppercase cursor-pointer"
              >
                {ht.btnClose}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
