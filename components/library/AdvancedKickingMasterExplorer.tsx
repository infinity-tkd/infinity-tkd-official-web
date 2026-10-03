'use client'

import * as React from 'react'
import {
  Zap,
  Target,
  Shield,
  Layers,
  Award,
  CheckCircle2,
  XCircle,
  ArrowRight,
  ArrowLeft,
  Search,
  ChevronRight,
  ChevronLeft,
  ChevronDown,
  ChevronUp,
  Flame,
  Activity,
  HeartPulse,
  Dumbbell,
  Sparkles,
  Info,
  Scale,
  Compass,
  RotateCw,
  AlertTriangle,
  Eye,
  ListOrdered,
  Wind,
  Maximize2,
} from 'lucide-react'
import type { LibraryItem } from '@/data/library/types'
import { useLanguage } from '@/context/LanguageContext'
import {
  getAdvancedKickingOverview,
  kickingAdvancedI18n,
  getLocalizedAdvancedKickingItem,
} from '@/data/library/kickingAdvancedTranslations'

interface AdvancedKickingMasterExplorerProps {
  items: LibraryItem[]
}

type AerialCategoryFilter = 'all' | 'core7' | 'single' | 'multi' | 'rotational' | 'scissor'
type DetailTabType = 'overview' | 'process' | 'drills' | 'mistakes' | 'application' | 'recovery'

export function AdvancedKickingMasterExplorer({ items }: AdvancedKickingMasterExplorerProps) {
  const { language } = useLanguage()
  const lang = language as 'en' | 'km' | 'zh' | 'ko'
  const t = kickingAdvancedI18n[lang] || kickingAdvancedI18n.en

  const [activeKickId, setActiveKickId] = React.useState<string>(items[0]?.id || 'jumping-front-kick')
  const [aerialFilter, setAerialFilter] = React.useState<AerialCategoryFilter>('all')
  const [searchQuery, setSearchQuery] = React.useState('')
  const [activeTab, setActiveTab] = React.useState<DetailTabType>('overview')
  const [currentStepIndex, setCurrentStepIndex] = React.useState(0)
  const [showPhilosophyGuide, setShowPhilosophyGuide] = React.useState(true)
  const [processViewMode, setProcessViewMode] = React.useState<'card' | 'list'>('card')

  // Localized master philosophy & overview
  const overview = React.useMemo(() => getAdvancedKickingOverview(lang), [lang])

  // Filtered kicks list
  const filteredKicks = React.useMemo(() => {
    return items.filter((item) => {
      // Category classification filter
      if (aerialFilter !== 'all') {
        if (aerialFilter === 'core7') {
          const core7Ids = [
            'jumping-front-kick',
            'jumping-roundhouse-kick',
            'jumping-side-kick',
            'jumping-spin-hook',
            'jumping-back-kick',
            'jumping-split-kick',
            'scissor-kick',
          ]
          if (!core7Ids.includes(item.id)) return false
        } else if (aerialFilter === 'single') {
          const singleIds = [
            'jumping-front-kick',
            'jumping-roundhouse-kick',
            'jumping-side-kick',
            'jumping-spin-hook',
            'jumping-back-kick',
          ]
          if (!singleIds.includes(item.id)) return false
        } else if (aerialFilter === 'multi') {
          const multiIds = [
            'jumping-double-front-kick',
            'jumping-triple-front-kicks',
            'jumping-quadruple-front-kicks',
            'jumping-quintuple-front-kicks',
            'jumping-double-round-kicks',
            'jumping-triple-side-kicks',
            'jumping-quintuple-side-kicks',
            'jumping-multiple-kicks',
          ]
          if (!multiIds.includes(item.id)) return false
        } else if (aerialFilter === 'rotational') {
          if (item.kickTrajectory !== 'rotational') return false
        } else if (aerialFilter === 'scissor') {
          const scissorIds = ['jumping-split-kick', 'scissor-kick']
          if (!scissorIds.includes(item.id)) return false
        }
      }

      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase()
        const localized = getLocalizedAdvancedKickingItem(item, lang)
        const matchName = item.name.toLowerCase().includes(q) || localized.name.toLowerCase().includes(q)
        const matchKorean = item.koreanName.toLowerCase().includes(q)
        const matchSummary = item.summary.toLowerCase().includes(q)
        const matchSurface = item.strikingSurface?.toLowerCase().includes(q) || false
        const matchTarget = item.targetArea?.toLowerCase().includes(q) || false
        return matchName || matchKorean || matchSummary || matchSurface || matchTarget
      }

      return true
    })
  }, [items, aerialFilter, searchQuery, lang])

  // Active selected kick with localized strings
  const activeKick = React.useMemo(() => {
    const found = items.find((i) => i.id === activeKickId) || items[0]
    if (!found) return null
    return getLocalizedAdvancedKickingItem(found, lang)
  }, [items, activeKickId, lang])

  // Stepper indices
  const currentKickIndex = React.useMemo(() => {
    const idx = items.findIndex((k) => k.id === activeKickId)
    return idx >= 0 ? idx : 0
  }, [items, activeKickId])

  const prevKick = items[(currentKickIndex - 1 + items.length) % items.length]
  const nextKick = items[(currentKickIndex + 1) % items.length]

  const handleSelectKick = (id: string) => {
    setActiveKickId(id)
    setCurrentStepIndex(0)
  }

  return (
    <div className="space-y-8 mb-20 font-sans">
      {/* ==================================================================== */}
      {/* 1. MASTER PHILOSOPHY & 3 AIRBORNE TENETS (COLLAPSIBLE BRIEFING)      */}
      {/* ==================================================================== */}
      <div className="rounded-[14px] bg-white dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 shadow-md overflow-hidden">
        <button
          onClick={() => setShowPhilosophyGuide((prev) => !prev)}
          className="w-full p-6 sm:p-7 flex items-center justify-between gap-4 text-left transition-colors hover:bg-zinc-50 dark:hover:bg-zinc-800/40"
        >
          <div className="flex items-center gap-3">
            <span className="p-2.5 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-700 text-white shadow-md">
              <Wind className="w-5 h-5" />
            </span>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
                  {overview.koreanTitle}
                </span>
                <span className="text-zinc-400 text-xs">&bull;</span>
                <span className="text-[10px] font-mono text-zinc-500 uppercase">
                  {t.philosophyGuide}
                </span>
              </div>
              <h2 className="text-lg sm:text-xl font-black text-zinc-900 dark:text-white uppercase tracking-tight">
                {overview.title}
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono font-bold text-zinc-500 dark:text-zinc-400">
            <span className="hidden sm:inline">{t.toggleGuide}</span>
            {showPhilosophyGuide ? (
              <ChevronUp className="w-4 h-4 text-emerald-500" />
            ) : (
              <ChevronDown className="w-4 h-4 text-zinc-400" />
            )}
          </div>
        </button>

        {showPhilosophyGuide && (
          <div className="px-6 pb-6 sm:px-8 sm:pb-8 pt-2 border-t border-zinc-100 dark:border-zinc-800 space-y-6">
            <p className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed max-w-5xl">
              {overview.philosophy}
            </p>

            {/* 3 Core Aerial Tenets */}
            <div className="grid sm:grid-cols-3 gap-4 pt-2">
              {overview.coreTenets.map((tenet, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700/60 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center text-[10px] font-bold">
                        0{idx + 1}
                      </span>
                      <h4 className="text-xs font-bold uppercase text-zinc-900 dark:text-white">
                        {tenet.title}
                      </h4>
                    </div>
                    <p className="text-[11px] text-zinc-600 dark:text-zinc-400 leading-relaxed">
                      {tenet.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* ==================================================================== */}
      {/* 2. CONTROLS BAR: SEARCH & AIRBORNE DISCIPLINE FILTERS                */}
      {/* ==================================================================== */}
      <div className="p-4 rounded-[14px] bg-white dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 shadow-sm flex flex-col md:flex-row gap-4 items-center justify-between">
        {/* Search Input */}
        <div className="relative w-full md:w-96">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={t.searchPlaceholder}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl text-xs bg-zinc-50 dark:bg-black border border-zinc-200 dark:border-zinc-800 focus:outline-none focus:border-emerald-500 dark:text-white placeholder:text-zinc-400 font-sans"
          />
        </div>

        {/* Airborne Discipline Filter Pills */}
        <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
          {[
            { id: 'all', label: t.filterAll },
            { id: 'core7', label: t.filterCore7 },
            { id: 'single', label: t.filterSingle },
            { id: 'multi', label: t.filterMulti },
            { id: 'rotational', label: t.filterRotational },
            { id: 'scissor', label: t.filterScissor },
          ].map((pill) => (
            <button
              key={pill.id}
              onClick={() => setAerialFilter(pill.id as AerialCategoryFilter)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                aerialFilter === pill.id
                  ? 'bg-zinc-900 dark:bg-white text-white dark:text-black shadow-sm'
                  : 'bg-zinc-100 dark:bg-zinc-800/60 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white'
              }`}
            >
              {pill.label}
            </button>
          ))}
        </div>
      </div>

      {/* ==================================================================== */}
      {/* 3. 15 ADVANCED & DYNAMIC KICKS SELECTION GRID                        */}
      {/* ==================================================================== */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {filteredKicks.map((kick) => {
          const localizedKick = getLocalizedAdvancedKickingItem(kick, lang)
          const isSelected = kick.id === activeKickId

          return (
            <div
              key={kick.id}
              onClick={() => handleSelectKick(kick.id)}
              className={`p-4 rounded-[14px] border transition-all cursor-pointer flex flex-col justify-between group ${
                isSelected
                  ? 'bg-emerald-600 text-white border-emerald-600 shadow-lg shadow-emerald-600/20 scale-[1.02]'
                  : 'bg-white dark:bg-zinc-900/80 border-zinc-200 dark:border-zinc-800 hover:border-emerald-500/40 hover:shadow-md text-zinc-900 dark:text-white'
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-1 mb-2">
                  <span
                    className={`text-[9px] font-mono font-bold px-1.5 py-0.5 rounded uppercase tracking-wider ${
                      isSelected ? 'bg-white/20 text-white' : 'text-white'
                    }`}
                    style={{ backgroundColor: isSelected ? undefined : kick.badgeColor }}
                  >
                    {kick.difficulty}
                  </span>
                  <span
                    className={`text-[10px] font-mono px-1.5 py-0.5 rounded ${
                      isSelected
                        ? 'bg-white/10 text-white'
                        : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-500'
                    }`}
                  >
                    {kick.targetCount ? `${kick.targetCount}x Hit` : 'Airborne'}
                  </span>
                </div>

                <span
                  className={`text-xs font-mono font-bold block mb-0.5 ${
                    isSelected ? 'text-white/90' : 'text-emerald-600 dark:text-emerald-400'
                  }`}
                >
                  {kick.koreanName}
                </span>

                <h3 className="text-sm font-black leading-snug mb-2 line-clamp-2">
                  {localizedKick.name}
                </h3>
              </div>

              <div
                className={`pt-2 border-t text-[10px] flex items-center justify-between ${
                  isSelected
                    ? 'border-white/20 text-white/80'
                    : 'border-zinc-100 dark:border-zinc-800 text-zinc-400'
                }`}
              >
                <span className="truncate">{kick.beltLevel}</span>
                <ChevronRight className="w-3.5 h-3.5 opacity-60 flex-shrink-0" />
              </div>
            </div>
          )
        })}
      </div>

      {filteredKicks.length === 0 && (
        <div className="p-12 text-center rounded-[14px] bg-white dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800">
          <Zap className="w-10 h-10 text-zinc-400 mx-auto mb-3 opacity-40" />
          <p className="text-sm text-zinc-500">No aerial kicks match your query.</p>
        </div>
      )}

      {/* ==================================================================== */}
      {/* 4. ACTIVE KICK DEEP-DIVE DOSSIER (THE COMPREHENSIVE FLIGHT SUITE)   */}
      {/* ==================================================================== */}
      {activeKick && (
        <div className="space-y-6">
          {/* Active Kick Header Card */}
          <div className="p-6 sm:p-8 rounded-[14px] bg-white dark:bg-zinc-900/90 border border-zinc-200 dark:border-zinc-800 shadow-md">
            {/* Top Navigation & Jump Controls */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-zinc-200 dark:border-zinc-800">
              <div className="flex items-center gap-2">
                <span
                  className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase text-white"
                  style={{ backgroundColor: activeKick.badgeColor }}
                >
                  {activeKick.difficulty}
                </span>
                <span className="text-xs font-mono text-zinc-400">&bull; {activeKick.beltLevel}</span>
                {activeKick.targetCount && (
                  <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 font-bold">
                    &bull; {activeKick.targetCount} Air Targets
                  </span>
                )}
              </div>

              {/* Prev / Next Stepper Controls */}
              <div className="flex items-center gap-2 w-full sm:w-auto justify-between sm:justify-end">
                <button
                  onClick={() => handleSelectKick(prevKick.id)}
                  className="px-3 py-1.5 rounded-lg text-xs font-bold bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-all flex items-center gap-1.5"
                  title={prevKick.name}
                >
                  <ChevronLeft className="w-4 h-4 text-emerald-500" />
                  <span className="hidden sm:inline">{t.prevKick}</span>
                </button>

                <span className="text-xs font-mono text-zinc-400">
                  {currentKickIndex + 1} / {items.length}
                </span>

                <button
                  onClick={() => handleSelectKick(nextKick.id)}
                  className="px-3 py-1.5 rounded-lg text-xs font-bold bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-all flex items-center gap-1.5"
                  title={nextKick.name}
                >
                  <span className="hidden sm:inline">{t.nextKick}</span>
                  <ChevronRight className="w-4 h-4 text-emerald-500" />
                </button>
              </div>
            </div>

            {/* Kick Title & Airborne Phase */}
            <div className="py-6 border-b border-zinc-100 dark:border-zinc-800/80 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              <div>
                <div className="flex items-baseline gap-3 mb-1">
                  <h2 className="text-2xl sm:text-3xl font-black uppercase text-zinc-900 dark:text-white tracking-tight">
                    {activeKick.name}
                  </h2>
                  <span className="text-sm font-mono font-bold text-emerald-600 dark:text-emerald-400">
                    {activeKick.koreanName} ({activeKick.romanized})
                  </span>
                </div>

                {activeKick.airbornePhase && (
                  <div className="inline-flex items-center gap-2 px-3 py-1 mt-2 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 dark:text-emerald-300 text-xs font-mono">
                    <Wind className="w-3.5 h-3.5" />
                    <span>Phase: {activeKick.airbornePhase}</span>
                  </div>
                )}

                {activeKick.meaning && (
                  <p className="text-xs font-mono font-semibold text-zinc-500 dark:text-zinc-400 mt-2">
                    {lang === 'km'
                      ? 'អត្ថន័យក្បាច់ទាត់'
                      : lang === 'zh'
                      ? '技术核心精义'
                      : lang === 'ko'
                      ? '기술 핵심 정체성'
                      : 'Technique Identity'}
                    : "{activeKick.meaning}"
                  </p>
                )}
              </div>

              {/* Striking Surface & Target Area Badges */}
              <div className="flex flex-wrap items-center gap-3">
                <div className="p-3 rounded-xl bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-200 dark:border-zinc-700/60 min-w-[160px]">
                  <span className="text-[10px] font-mono font-bold uppercase text-zinc-400 block mb-0.5">
                    {t.strikingSurface}
                  </span>
                  <span className="text-xs font-bold text-zinc-900 dark:text-white">
                    {activeKick.strikingSurface || 'Foot weapon'}
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-200 dark:border-zinc-700/60 min-w-[160px]">
                  <span className="text-[10px] font-mono font-bold uppercase text-zinc-400 block mb-0.5">
                    {t.targetArea}
                  </span>
                  <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">
                    {activeKick.targetArea || 'Vital Target'}
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Kick Jump Strip (15 Kicks) */}
            <div className="pt-4 flex items-center gap-1.5 overflow-x-auto pb-1">
              <span className="text-[10px] font-mono font-bold uppercase text-zinc-400 shrink-0 mr-1">
                {t.quickJump}:
              </span>
              {items.map((k, idx) => {
                const isCurrent = k.id === activeKickId
                return (
                  <button
                    key={k.id}
                    onClick={() => handleSelectKick(k.id)}
                    className={`px-2.5 py-1 rounded-lg text-[10px] font-mono font-bold shrink-0 transition-all ${
                      isCurrent
                        ? 'bg-emerald-600 text-white shadow-sm'
                        : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white'
                    }`}
                  >
                    {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}. {k.koreanName}
                  </button>
                )
              })}
            </div>

            {/* Summary Paragraph */}
            <p className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed mt-4 pt-4 border-t border-zinc-100 dark:border-zinc-800/80">
              {activeKick.summary}
            </p>
          </div>

          {/* 6-Tab Navigation (14px Radius) */}
          <div className="p-1.5 bg-zinc-200/70 dark:bg-zinc-900/80 rounded-[14px] border border-zinc-300 dark:border-zinc-800 flex flex-wrap gap-1 shadow-sm">
            {[
              { id: 'overview', label: t.tabs.overview, icon: Info },
              { id: 'process', label: t.tabs.process, icon: Layers },
              { id: 'drills', label: t.tabs.drills, icon: Dumbbell },
              { id: 'mistakes', label: t.tabs.mistakes, icon: AlertTriangle },
              { id: 'application', label: t.tabs.application, icon: Target },
              { id: 'recovery', label: t.tabs.recovery, icon: HeartPulse },
            ].map((tab) => {
              const TabIcon = tab.icon
              const isActive = activeTab === tab.id
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as DetailTabType)}
                  className={`flex-1 min-w-[150px] py-3 px-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
                    isActive
                      ? 'bg-emerald-600 text-white shadow-md'
                      : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-white/50 dark:hover:bg-zinc-800/50'
                  }`}
                >
                  <TabIcon className="w-3.5 h-3.5" />
                  <span>{tab.label}</span>
                </button>
              )
            })}
          </div>

          {/* ================================================================ */}
          {/* TAB 1: OVERVIEW & CORE PRINCIPLES                                */}
          {/* ================================================================ */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              {/* Balance and Flight Posture Card */}
              {activeKick.balanceAndPosture && (
                <div className="p-6 rounded-[14px] bg-emerald-500/5 border border-emerald-500/20 shadow-sm flex items-start gap-4">
                  <span className="p-2.5 rounded-xl bg-emerald-600 text-white flex-shrink-0">
                    <Scale className="w-5 h-5" />
                  </span>
                  <div>
                    <h3 className="text-sm font-bold uppercase text-emerald-600 dark:text-emerald-400 mb-1">
                      {t.balanceAndPosture}
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed font-medium">
                      {activeKick.balanceAndPosture}
                    </p>
                  </div>
                </div>
              )}

              {/* Core Principles Grid */}
              {activeKick.corePrinciples && activeKick.corePrinciples.length > 0 && (
                <div className="p-6 sm:p-8 rounded-[14px] bg-white dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 shadow-md">
                  <h3 className="text-base font-black uppercase tracking-tight text-zinc-900 dark:text-white mb-6 flex items-center gap-2">
                    <Compass className="w-5 h-5 text-emerald-600" />
                    <span>{t.corePrinciples}</span>
                  </h3>

                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {activeKick.corePrinciples.map((principle, idx) => (
                      <div
                        key={idx}
                        className="p-5 rounded-xl bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700/60"
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <span className="w-6 h-6 rounded-full bg-zinc-900 dark:bg-white text-white dark:text-black flex items-center justify-center text-[10px] font-bold">
                            {idx + 1}
                          </span>
                          <h4 className="text-xs font-bold uppercase text-zinc-900 dark:text-white">
                            {principle.title}
                          </h4>
                        </div>
                        <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                          {principle.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Skill Prerequisites Triad */}
              {activeKick.skillPrerequisites && (
                <div className="p-6 sm:p-8 rounded-[14px] bg-white dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 shadow-md">
                  <h3 className="text-base font-black uppercase tracking-tight text-zinc-900 dark:text-white mb-6 flex items-center gap-2">
                    <Award className="w-5 h-5 text-emerald-600" />
                    <span>{t.prerequisites}</span>
                  </h3>

                  <div className="grid md:grid-cols-3 gap-6">
                    {/* Physical */}
                    <div className="p-5 rounded-xl bg-zinc-50 dark:bg-zinc-800/40 border border-zinc-200 dark:border-zinc-700/60">
                      <h4 className="text-xs font-mono font-bold uppercase text-emerald-600 dark:text-emerald-400 mb-3 flex items-center gap-1.5">
                        <Activity className="w-4 h-4" />
                        <span>{t.prereqPhysical}</span>
                      </h4>
                      <ul className="space-y-2">
                        {activeKick.skillPrerequisites.physical.map((item, idx) => (
                          <li
                            key={idx}
                            className="text-xs text-zinc-700 dark:text-zinc-300 flex items-start gap-2 leading-relaxed"
                          >
                            <span className="text-emerald-500 font-bold">&bull;</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technical */}
                    <div className="p-5 rounded-xl bg-zinc-50 dark:bg-zinc-800/40 border border-zinc-200 dark:border-zinc-700/60">
                      <h4 className="text-xs font-mono font-bold uppercase text-blue-500 mb-3 flex items-center gap-1.5">
                        <Zap className="w-4 h-4" />
                        <span>{t.prereqTechnical}</span>
                      </h4>
                      <ul className="space-y-2">
                        {activeKick.skillPrerequisites.technical.map((item, idx) => (
                          <li
                            key={idx}
                            className="text-xs text-zinc-700 dark:text-zinc-300 flex items-start gap-2 leading-relaxed"
                          >
                            <span className="text-blue-500 font-bold">&bull;</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Mental */}
                    <div className="p-5 rounded-xl bg-zinc-50 dark:bg-zinc-800/40 border border-zinc-200 dark:border-zinc-700/60">
                      <h4 className="text-xs font-mono font-bold uppercase text-purple-500 mb-3 flex items-center gap-1.5">
                        <Sparkles className="w-4 h-4" />
                        <span>{t.prereqMental}</span>
                      </h4>
                      <ul className="space-y-2">
                        {activeKick.skillPrerequisites.mental.map((item, idx) => (
                          <li
                            key={idx}
                            className="text-xs text-zinc-700 dark:text-zinc-300 flex items-start gap-2 leading-relaxed"
                          >
                            <span className="text-purple-500 font-bold">&bull;</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* ================================================================ */}
          {/* TAB 2: 5-STEP TRAINING PROCESS                                   */}
          {/* ================================================================ */}
          {activeTab === 'process' && activeKick.trainingProcess && (
            <div className="p-6 sm:p-8 rounded-[14px] bg-white dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 shadow-md space-y-6">
              {/* Header with Mode Switcher */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h3 className="text-base font-black uppercase tracking-tight text-zinc-900 dark:text-white flex items-center gap-2">
                    <Layers className="w-5 h-5 text-emerald-600" />
                    <span>{t.stepSequence}</span>
                  </h3>
                  <span className="text-xs font-mono text-zinc-400">
                    {processViewMode === 'card'
                      ? `${currentStepIndex + 1} of ${activeKick.trainingProcess.length}`
                      : `${activeKick.trainingProcess.length} Comprehensive Milestones`}
                  </span>
                </div>

                {/* View Mode Switcher */}
                <div className="flex items-center gap-1.5 p-1 bg-zinc-100 dark:bg-zinc-800 rounded-xl">
                  <button
                    onClick={() => setProcessViewMode('card')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                      processViewMode === 'card'
                        ? 'bg-white dark:bg-zinc-900 text-emerald-600 dark:text-emerald-400 shadow-sm'
                        : 'text-zinc-500 hover:text-zinc-900 dark:hover:text-white'
                    }`}
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>{t.singleStep}</span>
                  </button>
                  <button
                    onClick={() => setProcessViewMode('list')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                      processViewMode === 'list'
                        ? 'bg-white dark:bg-zinc-900 text-emerald-600 dark:text-emerald-400 shadow-sm'
                        : 'text-zinc-500 hover:text-zinc-900 dark:hover:text-white'
                    }`}
                  >
                    <ListOrdered className="w-3.5 h-3.5" />
                    <span>{t.allSteps}</span>
                  </button>
                </div>
              </div>

              {processViewMode === 'card' ? (
                <>
                  {/* Step Progress Bar */}
                  <div className="w-full bg-zinc-100 dark:bg-zinc-800 h-2 rounded-full overflow-hidden">
                    <div
                      className="bg-emerald-600 h-full transition-all duration-300"
                      style={{
                        width: `${((currentStepIndex + 1) / activeKick.trainingProcess.length) * 100}%`,
                      }}
                    />
                  </div>

                  {/* Step Selector Pills */}
                  <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                    {activeKick.trainingProcess.map((st, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentStepIndex(idx)}
                        className={`py-2 px-3 rounded-lg text-xs font-bold transition-all text-center ${
                          currentStepIndex === idx
                            ? 'bg-zinc-900 dark:bg-white text-white dark:text-black shadow-sm'
                            : 'bg-zinc-50 dark:bg-zinc-800/60 text-zinc-500 hover:text-zinc-900 dark:hover:text-white'
                        }`}
                      >
                        <span className="block text-[10px] font-mono opacity-60">
                          {t.stepNumber} {idx + 1}
                        </span>
                        <span className="truncate block">{st.title.split(' ')[0]}</span>
                      </button>
                    ))}
                  </div>

                  {/* Current Step Card */}
                  {activeKick.trainingProcess[currentStepIndex] && (
                    <div className="p-6 rounded-xl bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700/60 min-h-[180px] flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-3 mb-3">
                          <span className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-sm">
                            {activeKick.trainingProcess[currentStepIndex].stepNumber}
                          </span>
                          <h4 className="text-base font-bold text-zinc-900 dark:text-white">
                            {activeKick.trainingProcess[currentStepIndex].title}
                          </h4>
                        </div>

                        <ul className="space-y-2 pl-11">
                          {activeKick.trainingProcess[currentStepIndex].details.map((detail, dIdx) => (
                            <li
                              key={dIdx}
                              className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed list-disc"
                            >
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Nav Stepper Controls */}
                      <div className="flex items-center justify-between pt-6 mt-4 border-t border-zinc-200/60 dark:border-zinc-700/60">
                        <button
                          disabled={currentStepIndex === 0}
                          onClick={() => setCurrentStepIndex((prev) => Math.max(0, prev - 1))}
                          className="px-4 py-2 rounded-lg text-xs font-bold bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors flex items-center gap-1.5"
                        >
                          <ChevronLeft className="w-3.5 h-3.5" />
                          <span>{t.prevStep}</span>
                        </button>
                        <button
                          disabled={currentStepIndex === activeKick.trainingProcess.length - 1}
                          onClick={() =>
                            setCurrentStepIndex((prev) =>
                              Math.min(activeKick.trainingProcess!.length - 1, prev + 1)
                            )
                          }
                          className="px-4 py-2 rounded-lg text-xs font-bold bg-emerald-600 text-white disabled:opacity-30 disabled:cursor-not-allowed hover:bg-emerald-700 shadow-sm transition-colors flex items-center gap-1.5"
                        >
                          <span>{t.nextStep}</span>
                          <ChevronRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  )}
                </>
              ) : (
                /* All Steps Sequence Breakdown */
                <div className="space-y-4">
                  {activeKick.trainingProcess.map((st, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-5 rounded-xl bg-zinc-50 dark:bg-zinc-800/40 border border-zinc-200 dark:border-zinc-700/60 flex items-start gap-4"
                    >
                      <span className="w-7 h-7 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                        {st.stepNumber}
                      </span>
                      <div className="flex-1">
                        <h4 className="text-sm font-bold text-zinc-900 dark:text-white mb-2">
                          {st.title}
                        </h4>
                        <ul className="space-y-1.5">
                          {st.details.map((d, dIdx) => (
                            <li
                              key={dIdx}
                              className="text-xs text-zinc-700 dark:text-zinc-300 leading-relaxed list-disc ml-4"
                            >
                              {d}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* ================================================================ */}
          {/* TAB 3: DRILLING METHODS & PLYOMETRICS                            */}
          {/* ================================================================ */}
          {activeTab === 'drills' && activeKick.drillingMethods && (
            <div className="p-6 sm:p-8 rounded-[14px] bg-white dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 shadow-md space-y-6">
              <h3 className="text-base font-black uppercase tracking-tight text-zinc-900 dark:text-white flex items-center gap-2">
                <Dumbbell className="w-5 h-5 text-emerald-600" />
                <span>{t.drillingMethods}</span>
              </h3>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Isolation Drills */}
                <div className="p-5 rounded-xl bg-zinc-50 dark:bg-zinc-800/40 border border-zinc-200 dark:border-zinc-700/60">
                  <h4 className="text-xs font-mono font-bold uppercase text-emerald-600 dark:text-emerald-400 mb-3">
                    {t.isolationDrills}
                  </h4>
                  <ul className="space-y-2">
                    {activeKick.drillingMethods.isolation.map((drill, idx) => (
                      <li key={idx} className="text-xs text-zinc-700 dark:text-zinc-300 leading-relaxed">
                        &bull; {drill}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Speed & Timing */}
                <div className="p-5 rounded-xl bg-zinc-50 dark:bg-zinc-800/40 border border-zinc-200 dark:border-zinc-700/60">
                  <h4 className="text-xs font-mono font-bold uppercase text-blue-500 mb-3">
                    {t.speedDrills}
                  </h4>
                  <ul className="space-y-2">
                    {activeKick.drillingMethods.speedAndTiming.map((drill, idx) => (
                      <li key={idx} className="text-xs text-zinc-700 dark:text-zinc-300 leading-relaxed">
                        &bull; {drill}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Power & Plyometrics */}
                {activeKick.drillingMethods.power && activeKick.drillingMethods.power.length > 0 && (
                  <div className="p-5 rounded-xl bg-zinc-50 dark:bg-zinc-800/40 border border-zinc-200 dark:border-zinc-700/60">
                    <h4 className="text-xs font-mono font-bold uppercase text-amber-500 mb-3">
                      {t.powerDrills}
                    </h4>
                    <ul className="space-y-2">
                      {activeKick.drillingMethods.power.map((drill, idx) => (
                        <li key={idx} className="text-xs text-zinc-700 dark:text-zinc-300 leading-relaxed">
                          &bull; {drill}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Freestyle & Tricking Adaptations */}
                {activeKick.drillingMethods.freestyleTricking && activeKick.drillingMethods.freestyleTricking.length > 0 && (
                  <div className="p-5 rounded-xl bg-zinc-50 dark:bg-zinc-800/40 border border-zinc-200 dark:border-zinc-700/60">
                    <h4 className="text-xs font-mono font-bold uppercase text-purple-500 mb-3">
                      {t.freestyleTricking}
                    </h4>
                    <ul className="space-y-2">
                      {activeKick.drillingMethods.freestyleTricking.map((drill, idx) => (
                        <li key={idx} className="text-xs text-zinc-700 dark:text-zinc-300 leading-relaxed">
                          &bull; {drill}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Spotting & Safety Box */}
              {activeKick.drillingMethods.safety && (
                <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-start gap-3">
                  <Shield className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-xs font-bold text-amber-800 dark:text-amber-300 mb-1">
                      {t.spottingSafety}
                    </h5>
                    <ul className="space-y-1">
                      {activeKick.drillingMethods.safety.map((rule, idx) => (
                        <li
                          key={idx}
                          className="text-xs text-amber-900/80 dark:text-amber-200/90 leading-relaxed"
                        >
                          &bull; {rule}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* ================================================================ */}
          {/* TAB 4: MISTAKES & SURGICAL CORRECTIONS                           */}
          {/* ================================================================ */}
          {activeTab === 'mistakes' && activeKick.commonMistakesAndCorrections && (
            <div className="p-6 sm:p-8 rounded-[14px] bg-white dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 shadow-md space-y-6">
              <h3 className="text-base font-black uppercase tracking-tight text-zinc-900 dark:text-white flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-emerald-600" />
                <span>{t.commonMistakes}</span>
              </h3>

              <div className="space-y-4">
                {activeKick.commonMistakesAndCorrections.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-xl bg-zinc-50 dark:bg-zinc-800/40 border border-zinc-200 dark:border-zinc-700/60 grid sm:grid-cols-2 gap-4 items-center"
                  >
                    {/* Mistake */}
                    <div className="flex items-start gap-3">
                      <XCircle className="w-5 h-5 text-brand-red flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="text-[10px] font-mono font-bold uppercase text-brand-red block mb-0.5">
                          {t.mistakeLabel} 0{idx + 1}
                        </span>
                        <p className="text-xs sm:text-sm text-zinc-800 dark:text-zinc-200 font-semibold leading-relaxed">
                          {item.mistake}
                        </p>
                      </div>
                    </div>

                    {/* Correction */}
                    <div className="flex items-start gap-3 sm:border-l sm:border-zinc-200 dark:sm:border-zinc-700/60 sm:pl-4">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="text-[10px] font-mono font-bold uppercase text-emerald-600 dark:text-emerald-400 block mb-0.5">
                          {t.correctionLabel}
                        </span>
                        <p className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
                          {item.correction}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ================================================================ */}
          {/* TAB 5: COMPETITION, POOMSAE & DEMO BREAKS                        */}
          {/* ================================================================ */}
          {activeTab === 'application' && activeKick.performanceAndApplication && (
            <div className="p-6 sm:p-8 rounded-[14px] bg-white dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 shadow-md space-y-6">
              <h3 className="text-base font-black uppercase tracking-tight text-zinc-900 dark:text-white flex items-center gap-2">
                <Target className="w-5 h-5 text-emerald-600" />
                <span>{t.performanceTitle}</span>
              </h3>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Competition & Poomsae */}
                <div className="p-5 rounded-xl bg-zinc-50 dark:bg-zinc-800/40 border border-zinc-200 dark:border-zinc-700/60">
                  <h4 className="text-xs font-mono font-bold uppercase text-emerald-600 dark:text-emerald-400 mb-2">
                    {t.kyorugiApplication}
                  </h4>
                  <p className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed mb-3">
                    {activeKick.performanceAndApplication.competition}
                  </p>
                  {activeKick.performanceAndApplication.poomsae && (
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 font-mono">
                      Poomsae: {activeKick.performanceAndApplication.poomsae}
                    </p>
                  )}
                </div>

                {/* Demonstration & Breaking */}
                <div className="p-5 rounded-xl bg-zinc-50 dark:bg-zinc-800/40 border border-zinc-200 dark:border-zinc-700/60">
                  <h4 className="text-xs font-mono font-bold uppercase text-purple-500 mb-2">
                    {t.trickingApplication}
                  </h4>
                  <p className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed mb-2">
                    {activeKick.performanceAndApplication.demonstration ||
                      activeKick.performanceAndApplication.freestyleTricking}
                  </p>
                </div>
              </div>

              {/* Aerial Combinations */}
              {activeKick.performanceAndApplication.combinations && (
                <div className="p-5 rounded-xl bg-zinc-50 dark:bg-zinc-800/40 border border-zinc-200 dark:border-zinc-700/60">
                  <h4 className="text-xs font-mono font-bold uppercase text-zinc-400 mb-3">
                    {t.kickCombos}
                  </h4>
                  <div className="space-y-2">
                    {activeKick.performanceAndApplication.combinations.map((combo, idx) => (
                      <div
                        key={idx}
                        className="p-3 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-xs font-semibold text-zinc-800 dark:text-zinc-200 flex items-center gap-2"
                      >
                        <span className="w-5 h-5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-[10px] font-bold">
                          {idx + 1}
                        </span>
                        <span>{combo}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* ================================================================ */}
          {/* TAB 6: RECOVERY, LANDING CARE & CONDITIONING                     */}
          {/* ================================================================ */}
          {activeTab === 'recovery' && activeKick.recoveryAndConditioning && (
            <div className="p-6 sm:p-8 rounded-[14px] bg-white dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 shadow-md space-y-6">
              <h3 className="text-base font-black uppercase tracking-tight text-zinc-900 dark:text-white flex items-center gap-2">
                <HeartPulse className="w-5 h-5 text-emerald-600" />
                <span>{t.recoveryTitle}</span>
              </h3>

              <div className="grid md:grid-cols-3 gap-6">
                {/* Flexibility */}
                <div className="p-5 rounded-xl bg-zinc-50 dark:bg-zinc-800/40 border border-zinc-200 dark:border-zinc-700/60">
                  <h4 className="text-xs font-mono font-bold uppercase text-emerald-600 dark:text-emerald-400 mb-3">
                    {t.flexibilityMaint}
                  </h4>
                  <ul className="space-y-2">
                    {activeKick.recoveryAndConditioning.flexibility.map((item, idx) => (
                      <li key={idx} className="text-xs text-zinc-700 dark:text-zinc-300 leading-relaxed">
                        &bull; {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Strengthening */}
                <div className="p-5 rounded-xl bg-zinc-50 dark:bg-zinc-800/40 border border-zinc-200 dark:border-zinc-700/60">
                  <h4 className="text-xs font-mono font-bold uppercase text-blue-500 mb-3">
                    {t.strengthExercises}
                  </h4>
                  <ul className="space-y-2">
                    {activeKick.recoveryAndConditioning.strengthening.map((item, idx) => (
                      <li key={idx} className="text-xs text-zinc-700 dark:text-zinc-300 leading-relaxed">
                        &bull; {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Mobility & Landing Care */}
                {activeKick.recoveryAndConditioning.mobility && activeKick.recoveryAndConditioning.mobility.length > 0 && (
                  <div className="p-5 rounded-xl bg-zinc-50 dark:bg-zinc-800/40 border border-zinc-200 dark:border-zinc-700/60">
                    <h4 className="text-xs font-mono font-bold uppercase text-purple-500 mb-3">
                      {t.mobilityRoll}
                    </h4>
                    <ul className="space-y-2">
                      {activeKick.recoveryAndConditioning.mobility.map((item, idx) => (
                        <li key={idx} className="text-xs text-zinc-700 dark:text-zinc-300 leading-relaxed">
                          &bull; {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
