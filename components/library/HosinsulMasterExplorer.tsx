'use client'

import * as React from 'react'
import {
  Shield,
  Zap,
  Target,
  AlertTriangle,
  RotateCw,
  Compass,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  XCircle,
  Eye,
  Info,
  Layers,
  Scale,
  Activity,
  Flame,
  Search,
  BookOpen,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  Sparkles,
  Award,
  ShieldAlert,
  Siren,
  Lock,
  Unlock,
  Check,
  ShieldCheck,
  UserCheck,
} from 'lucide-react'
import {
  hosinsulCurriculum,
  hosinsulSafetyFramework,
  type HosinsulBeltCurriculum,
  type HosinsulTechnique,
} from '@/data/library/hosinsulCurriculum'
import { SafeGrid } from '@/components/SafeGrid'
import type { LibraryItem } from '@/data/library/types'
import { useLanguage } from '@/context/LanguageContext'
import {
  getHosinsulFoundations,
  getHardVsSoftData,
  getVitalPointsGuide,
  hosinsulI18n,
} from '@/data/library/hosinsulTranslations'

interface HosinsulMasterExplorerProps {
  items: LibraryItem[]
}

type TabType = 'curriculum' | 'safety' | 'catalog' | 'principles' | 'hard-vs-soft' | 'vital-points'
type SubFilterType = 'all' | 'releases' | 'locks' | 'throws' | 'scenarios' | 'weapons'

export function HosinsulMasterExplorer({ items }: HosinsulMasterExplorerProps) {
  const { language } = useLanguage()
  const lang = language as 'en' | 'km' | 'zh' | 'ko'
  const t = hosinsulI18n[lang] || hosinsulI18n.en

  const [activeTab, setActiveTab] = React.useState<TabType>('curriculum')
  const [selectedBeltId, setSelectedBeltId] = React.useState<string>('white-belt')
  const [curriculumCategoryFilter, setCurriculumCategoryFilter] = React.useState<string>('all')
  const [curriculumSearch, setCurriculumSearch] = React.useState<string>('')
  const [selectedSafetyTier, setSelectedSafetyTier] = React.useState<string>('Level 1')
  const [activeFilter, setActiveFilter] = React.useState<SubFilterType>('all')
  const [searchQuery, setSearchQuery] = React.useState('')
  const [selectedItem, setSelectedItem] = React.useState<LibraryItem | null>(null)
  const [currentStepIndex, setCurrentStepIndex] = React.useState(0)
  const [stepMode, setStepMode] = React.useState<'interactive' | 'list'>('interactive')
  const [selectedVitalPointId, setSelectedVitalPointId] = React.useState<string>('vp-solar-plexus')

  // Active Belt Curriculum
  const activeBelt = React.useMemo(() => {
    return hosinsulCurriculum.find((b) => b.id === selectedBeltId) || hosinsulCurriculum[0]
  }, [selectedBeltId])

  // Lock body scroll and listen for Escape key when inspection modal is open (WCAG 2.1.2)
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedItem(null)
      }
    }
    if (selectedItem) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [selectedItem])

  // Filtered Curriculum Categories & Techniques
  const filteredCurriculumCategories = React.useMemo(() => {
    return activeBelt.categories
      .filter((cat) => {
        if (curriculumCategoryFilter === 'all') return true
        return (
          cat.id.endsWith(curriculumCategoryFilter) ||
          cat.iconType === curriculumCategoryFilter
        )
      })
      .map((cat) => {
        if (!curriculumSearch.trim()) return cat
        const q = curriculumSearch.toLowerCase()
        const filteredTechs = cat.techniques.filter((tech) => {
          return (
            tech.name.toLowerCase().includes(q) ||
            (tech.koreanName && tech.koreanName.toLowerCase().includes(q)) ||
            (tech.romanized && tech.romanized.toLowerCase().includes(q)) ||
            (tech.targetArea && tech.targetArea.toLowerCase().includes(q)) ||
            tech.mechanics.toLowerCase().includes(q)
          )
        })
        return {
          ...cat,
          techniques: filteredTechs,
        }
      })
      .filter((cat) => cat.techniques.length > 0)
  }, [activeBelt, curriculumCategoryFilter, curriculumSearch])

  // Active Safety Tier
  const activeSafetyTier = React.useMemo(() => {
    return (
      hosinsulSafetyFramework.progressionMatrix.find((tier) => tier.tier === selectedSafetyTier) ||
      hosinsulSafetyFramework.progressionMatrix[0]
    )
  }, [selectedSafetyTier])

  // Localized Datasets
  const foundations = React.useMemo(() => getHosinsulFoundations(lang), [lang])
  const hardVsSoft = React.useMemo(() => getHardVsSoftData(lang), [lang])
  const vitalPointsGuide = React.useMemo(() => getVitalPointsGuide(lang), [lang])

  // Filtered Catalog Items
  const filteredItems = React.useMemo(() => {
    return items.filter((item) => {
      // Sub-filter by category
      if (activeFilter === 'releases') {
        if (!item.slug.includes('ppaegi') && !item.slug.includes('release') && !item.slug.includes('escape'))
          return false
      } else if (activeFilter === 'locks') {
        if (!item.slug.includes('kkeokgi') && !item.slug.includes('lock')) return false
      } else if (activeFilter === 'throws') {
        if (!item.slug.includes('neomgigi') && !item.slug.includes('throw') && !item.slug.includes('sweep'))
          return false
      } else if (activeFilter === 'scenarios') {
        if (!item.slug.includes('collar') && !item.slug.includes('choke') && !item.slug.includes('vital-point'))
          return false
      } else if (activeFilter === 'weapons') {
        if (!item.slug.includes('weapon') && !item.slug.includes('mugi')) return false
      }

      // Search Query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase()
        const matchName = item.name.toLowerCase().includes(q)
        const matchKorean = item.koreanName.toLowerCase().includes(q)
        const matchSummary = item.summary.toLowerCase().includes(q)
        const matchTarget = item.targetArea?.toLowerCase().includes(q) || false
        return matchName || matchKorean || matchSummary || matchTarget
      }
      return true
    })
  }, [items, activeFilter, searchQuery])

  // Active technique localized overlay
  const activeTechnique = React.useMemo(() => {
    if (!selectedItem) return null
    const trans = lang === 'en' ? undefined : selectedItem.translations?.[lang as 'km' | 'zh' | 'ko']
    return {
      ...selectedItem,
      name: trans?.name || selectedItem.name,
      summary: trans?.summary || selectedItem.summary,
    }
  }, [selectedItem, lang])

  const selectedVitalPoint = React.useMemo(() => {
    return (
      vitalPointsGuide.vitalPoints.find((vp) => vp.id === selectedVitalPointId) ||
      vitalPointsGuide.vitalPoints[0]
    )
  }, [vitalPointsGuide, selectedVitalPointId])

  return (
    <div className="space-y-8 mb-20 font-sans">
      {/* ==================================================================== */}
      {/* 4-PILLAR MASTER NAVIGATION TABS (14px Radius) */}
      {/* ==================================================================== */}
      <div className="p-1.5 bg-zinc-200/70 dark:bg-zinc-900/80 rounded-[14px] border border-zinc-300 dark:border-zinc-800 flex flex-wrap gap-1 shadow-sm">
        {/* Tab 1: Curriculum Matrix */}
        <button
          onClick={() => setActiveTab('curriculum')}
          className={`flex-1 min-w-[150px] py-3 px-3.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
            activeTab === 'curriculum'
              ? 'bg-brand-red text-white shadow-md'
              : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-white/50 dark:hover:bg-zinc-800/50'
          }`}
        >
          <Award className="w-4 h-4" />
          <span>{t.tabs.curriculum}</span>
        </button>

        {/* Tab 2: Safety & Progression */}
        <button
          onClick={() => setActiveTab('safety')}
          className={`flex-1 min-w-[150px] py-3 px-3.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
            activeTab === 'safety'
              ? 'bg-brand-red text-white shadow-md'
              : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-white/50 dark:hover:bg-zinc-800/50'
          }`}
        >
          <ShieldAlert className="w-4 h-4" />
          <span>{t.tabs.safety}</span>
        </button>

        {/* Tab 3: Detailed Catalog */}
        <button
          onClick={() => setActiveTab('catalog')}
          className={`flex-1 min-w-[150px] py-3 px-3.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
            activeTab === 'catalog'
              ? 'bg-brand-red text-white shadow-md'
              : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-white/50 dark:hover:bg-zinc-800/50'
          }`}
        >
          <Shield className="w-4 h-4" />
          <span>{t.tabs.catalog}</span>
        </button>

        <button
          onClick={() => setActiveTab('principles')}
          className={`flex-1 min-w-[170px] py-3.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2.5 ${
            activeTab === 'principles'
              ? 'bg-brand-red text-white shadow-md'
              : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-white/50 dark:hover:bg-zinc-800/50'
          }`}
        >
          <BookOpen className="w-4 h-4" />
          <span>{t.tabs.principles}</span>
        </button>

        <button
          onClick={() => setActiveTab('hard-vs-soft')}
          className={`flex-1 min-w-[170px] py-3.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2.5 ${
            activeTab === 'hard-vs-soft'
              ? 'bg-brand-red text-white shadow-md'
              : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-white/50 dark:hover:bg-zinc-800/50'
          }`}
        >
          <Zap className="w-4 h-4" />
          <span>{t.tabs.hardVsSoft}</span>
        </button>

        <button
          onClick={() => setActiveTab('vital-points')}
          className={`flex-1 min-w-[170px] py-3.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2.5 ${
            activeTab === 'vital-points'
              ? 'bg-brand-red text-white shadow-md'
              : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-white/50 dark:hover:bg-zinc-800/50'
          }`}
        >
          <Target className="w-4 h-4" />
          <span>{t.tabs.vitalPoints}</span>
        </button>
      </div>

      {/* ==================================================================== */}
      {/* TAB 0: BELT-BY-BELT CURRICULUM PROGRESSION MATRIX */}
      {/* ==================================================================== */}
      {activeTab === 'curriculum' && (
        <div className="space-y-8 animate-fade-in">
          {/* 7-Belt Rank Selector Tabs */}
          <div className="flex overflow-x-auto gap-2 p-1.5 bg-white dark:bg-zinc-900/80 rounded-[14px] border border-zinc-200 dark:border-zinc-800 shadow-sm no-scrollbar">
            {hosinsulCurriculum.map((belt) => {
              const isSelected = selectedBeltId === belt.id
              return (
                <button
                  key={belt.id}
                  onClick={() => setSelectedBeltId(belt.id)}
                  className={`flex-1 min-w-[140px] sm:min-w-[150px] py-3 px-3 rounded-xl text-left transition-all cursor-pointer border ${
                    isSelected
                      ? 'border-brand-red bg-zinc-50 dark:bg-zinc-800/90 shadow-sm ring-1 ring-brand-red/30'
                      : 'border-transparent hover:bg-zinc-100 dark:hover:bg-zinc-800/40 text-zinc-600 dark:text-zinc-400'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span
                      className="w-3 h-3 rounded-full border border-black/20 shrink-0"
                      style={{ backgroundColor: belt.beltColor }}
                    />
                    <span className="text-[11px] font-bold uppercase tracking-tight truncate text-zinc-900 dark:text-white">
                      {belt.rank.split(' (')[0]}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-zinc-400 block truncate">
                    {belt.geup} &bull; {belt.koreanRank.split(' (')[0]}
                  </span>
                </button>
              )
            })}
          </div>

          {/* Active Belt Header & Defensive Objective Banner */}
          <div className="p-6 sm:p-7 rounded-[14px] border border-brand-red/30 bg-gradient-to-r from-brand-red/10 via-zinc-50/60 to-transparent dark:from-brand-red/15 dark:via-zinc-900/60 dark:to-transparent flex flex-col md:flex-row items-start md:items-center justify-between gap-5 shadow-sm">
            <div className="space-y-2 max-w-3xl">
              <div className="flex flex-wrap items-center gap-2.5">
                <span
                  className="px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider border"
                  style={{
                    backgroundColor: activeBelt.beltColor,
                    color: activeBelt.textColor,
                    borderColor: activeBelt.borderColor,
                  }}
                >
                  {activeBelt.rank}
                </span>
                <span className="text-xs font-mono font-bold text-brand-red uppercase tracking-wider">
                  {activeBelt.koreanRank}
                </span>
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-black uppercase tracking-tight text-zinc-900 dark:text-white">
                Defensive Objective
              </h3>
              <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 font-light leading-relaxed">
                {activeBelt.defensiveObjective}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-center shrink-0 min-w-[160px] shadow-sm">
              <span className="text-2xl sm:text-3xl font-black text-brand-red block leading-none">
                {activeBelt.categories.reduce((acc, c) => acc + c.techniques.length, 0)}
              </span>
              <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mt-1 block">
                Required Techniques
              </span>
            </div>
          </div>

          {/* Search & Category Filter Row */}
          <div className="p-4 rounded-[14px] bg-white dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 shadow-sm flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400" />
              <input
                type="text"
                value={curriculumSearch}
                onChange={(e) => setCurriculumSearch(e.target.value)}
                placeholder="Search belt techniques or targets..."
                aria-label="Search belt techniques or targets"
                className="w-full pl-10 pr-4 py-2 rounded-xl text-base sm:text-xs min-h-[44px] bg-zinc-50 dark:bg-black border border-zinc-200 dark:border-zinc-800 focus:outline-none focus:border-brand-red dark:text-white placeholder:text-zinc-400"
              />
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
              {[
                { id: 'all', label: 'All 8 Pillars' },
                { id: 'hands', label: '1. Hands' },
                { id: 'kicks', label: '2. Kicks' },
                { id: 'counters', label: '3. Counters' },
                { id: 'grabs', label: '4. Grabs' },
                { id: 'locks', label: '5. Locks' },
                { id: 'ground', label: '6. Ground' },
                { id: 'knees', label: '7. Knees' },
                { id: 'elbows', label: '8. Elbows' },
              ].map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setCurriculumCategoryFilter(filter.id)}
                  className={`px-2.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    curriculumCategoryFilter === filter.id
                      ? 'bg-zinc-900 dark:bg-white text-white dark:text-black shadow-sm'
                      : 'text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800'
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>

          {/* Curriculum Techniques Rendered via SafeGrid */}
          {filteredCurriculumCategories.length === 0 ? (
            <div className="p-12 text-center rounded-[14px] border border-dashed border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-950/20">
              <p className="text-sm font-bold text-zinc-500 dark:text-zinc-400">
                No techniques match your search query in this belt rank.
              </p>
              <button
                onClick={() => {
                  setCurriculumSearch('')
                  setCurriculumCategoryFilter('all')
                }}
                className="mt-3 px-4 py-2 rounded-lg bg-brand-red text-white text-xs font-bold uppercase tracking-wider"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="space-y-8">
              {filteredCurriculumCategories.map((category) => (
                <div key={category.id} className="space-y-3">
                  <div className="flex items-center gap-2 px-1">
                    <span className="w-2 h-2 rounded-full bg-brand-red" />
                    <h4 className="text-sm sm:text-base font-black uppercase tracking-tight text-zinc-900 dark:text-white">
                      {category.title}
                    </h4>
                    <span className="text-xs font-mono text-zinc-400">
                      ({category.techniques.length})
                    </span>
                  </div>

                  <SafeGrid
                    className="grid grid-cols-1 md:grid-cols-2 gap-4"
                    isolateItems={true}
                  >
                    {category.techniques.map((tech) => (
                      <div
                        key={tech.id}
                        className="p-5 sm:p-6 rounded-[14px] border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/70 hover:border-brand-red/50 dark:hover:border-brand-red/50 transition-all duration-300 shadow-sm hover:shadow-md flex flex-col justify-between group"
                      >
                        <div>
                          <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                            <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300">
                              {tech.category}
                            </span>
                            {tech.koreanName && (
                              <span className="px-2.5 py-0.5 rounded-full bg-brand-red/10 text-brand-red text-xs font-bold font-mono">
                                {tech.koreanName}
                              </span>
                            )}
                          </div>

                          <h5 className="text-base sm:text-lg font-black uppercase tracking-tight text-zinc-900 dark:text-white group-hover:text-brand-red transition-colors">
                            {tech.name}
                          </h5>
                          {tech.romanized && (
                            <p className="text-xs text-zinc-400 font-mono italic mt-0.5">
                              {tech.romanized}
                            </p>
                          )}

                          <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 font-light leading-relaxed mt-3">
                            {tech.mechanics}
                          </p>
                        </div>

                        {tech.targetArea && (
                          <div className="mt-4 pt-3 border-t border-zinc-100 dark:border-zinc-800/80 flex items-center gap-2 text-xs">
                            <Target className="w-3.5 h-3.5 text-brand-red shrink-0" />
                            <span className="text-[11px] font-mono text-zinc-500 dark:text-zinc-400">
                              Target: {tech.targetArea}
                            </span>
                          </div>
                        )}
                      </div>
                    ))}
                  </SafeGrid>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* ==================================================================== */}
      {/* TAB 0.5: SAFETY & PROGRESSION MATRIX */}
      {/* ==================================================================== */}
      {activeTab === 'safety' && (
        <div className="space-y-12 animate-fade-in">
          {/* Section 1: Universal Safety & Tap-Out Rules */}
          <section className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-lg bg-brand-red text-white shadow-brand-glow">
                <ShieldAlert className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-zinc-900 dark:text-white">
                  Universal Safety & "Tap-Out" Rules
                </h3>
                <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 font-light">
                  Strict protocol mandates enforced across all partner self-defense drills.
                </p>
              </div>
            </div>

            <SafeGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {hosinsulSafetyFramework.universalRules.map((rule) => (
                <div
                  key={rule.id}
                  className="p-5 rounded-[14px] border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/80 flex flex-col justify-between shadow-sm relative overflow-hidden"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span
                        className={`px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider ${
                          rule.severity === 'critical'
                            ? 'bg-red-500 text-white'
                            : rule.severity === 'high'
                            ? 'bg-amber-500 text-white'
                            : 'bg-zinc-200 dark:bg-zinc-700 text-zinc-800 dark:text-zinc-200'
                        }`}
                      >
                        {rule.badgeText}
                      </span>
                      {rule.koreanTitle && (
                        <span className="text-[10px] font-mono text-zinc-400">
                          {rule.koreanTitle}
                        </span>
                      )}
                    </div>
                    <h4 className="text-sm sm:text-base font-black uppercase tracking-tight text-zinc-900 dark:text-white">
                      {rule.title}
                    </h4>
                    <p className="text-xs text-zinc-600 dark:text-zinc-300 font-light leading-relaxed mt-2">
                      {rule.rule}
                    </p>
                  </div>
                </div>
              ))}
            </SafeGrid>
          </section>

          {/* Section 2: 4-Tier Contact & Resistance Progression Matrix */}
          <section className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-lg bg-zinc-900 dark:bg-white text-white dark:text-black shadow-sm">
                <Activity className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-zinc-900 dark:text-white">
                  4-Tier Contact & Resistance Progression Matrix
                </h3>
                <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 font-light">
                  Systematic pressure scaling eliminating uncontrolled joint hyperextension and trauma.
                </p>
              </div>
            </div>

            {/* Tier Selector Buttons */}
            <div className="p-1.5 bg-white dark:bg-zinc-900/80 rounded-[14px] border border-zinc-200 dark:border-zinc-800 flex flex-wrap gap-2 shadow-sm">
              {hosinsulSafetyFramework.progressionMatrix.map((tier) => {
                const isSelected = selectedSafetyTier === tier.tier
                return (
                  <button
                    key={tier.tier}
                    onClick={() => setSelectedSafetyTier(tier.tier)}
                    className={`flex-1 min-w-[140px] py-3 px-4 rounded-xl text-left transition-all cursor-pointer border ${
                      isSelected
                        ? 'border-brand-red bg-zinc-50 dark:bg-zinc-800/90 shadow-sm ring-1 ring-brand-red/30'
                        : 'border-transparent hover:bg-zinc-100 dark:hover:bg-zinc-800/40 text-zinc-600 dark:text-zinc-400'
                    }`}
                  >
                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-brand-red block">
                      {tier.tier}
                    </span>
                    <h5 className="text-sm font-black uppercase tracking-tight text-zinc-900 dark:text-white mt-0.5">
                      {tier.levelName}
                    </h5>
                  </button>
                )
              })}
            </div>

            {/* Active Tier Spotlight Card */}
            <div className="p-6 sm:p-8 rounded-[14px] border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/80 shadow-md space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-red">
                    {activeSafetyTier.tier} Focus
                  </span>
                  <h4 className="text-2xl font-black uppercase tracking-tight text-zinc-900 dark:text-white mt-1">
                    {activeSafetyTier.levelName}
                  </h4>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {activeSafetyTier.gearRequired.map((gear, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-[11px] font-bold text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700"
                    >
                      <CheckCircle2 className="w-3 h-3 text-brand-red" />
                      {gear}
                    </span>
                  ))}
                </div>
              </div>

              {/* Intensity & Resistance Meters */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-950/40 border border-zinc-200 dark:border-zinc-800/60">
                  <div className="flex justify-between text-xs font-bold mb-1.5">
                    <span className="text-zinc-600 dark:text-zinc-400">Velocity & Speed</span>
                    <span className="text-brand-red font-mono">{activeSafetyTier.speedLabel}</span>
                  </div>
                  <div className="w-full h-2.5 bg-zinc-200 dark:bg-zinc-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-brand-red transition-all duration-500 rounded-full"
                      style={{ width: `${activeSafetyTier.speedPercent}%` }}
                    />
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-950/40 border border-zinc-200 dark:border-zinc-800/60">
                  <div className="flex justify-between text-xs font-bold mb-1.5">
                    <span className="text-zinc-600 dark:text-zinc-400">Partner Resistance</span>
                    <span className="text-brand-red font-mono">{activeSafetyTier.resistanceLabel}</span>
                  </div>
                  <div className="w-full h-2.5 bg-zinc-200 dark:bg-zinc-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-zinc-800 dark:bg-zinc-200 transition-all duration-500 rounded-full"
                      style={{ width: `${activeSafetyTier.resistancePercent}%` }}
                    />
                  </div>
                </div>
              </div>

              {/* Behavior & Focus Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
                <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-950/20 border border-zinc-200 dark:border-zinc-800/60">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-zinc-400 block mb-1">
                    Partner Behavior Mode
                  </span>
                  <p className="text-zinc-700 dark:text-zinc-300 font-light leading-relaxed">
                    {activeSafetyTier.resistanceDesc}
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-brand-red/5 border border-brand-red/20">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-brand-red block mb-1">
                    Primary Pedagogical Focus
                  </span>
                  <p className="text-zinc-700 dark:text-zinc-300 font-light leading-relaxed">
                    {activeSafetyTier.primaryFocus}
                  </p>
                </div>
              </div>
            </div>

            {/* Side-by-Side Full Matrix Comparison Table */}
            <div className="overflow-x-auto rounded-[14px] border border-zinc-200 dark:border-zinc-800 shadow-sm bg-white dark:bg-zinc-900/80">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="border-b border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-800/60 text-zinc-900 dark:text-white font-mono uppercase text-[11px]">
                    <th className="p-3.5 sm:p-4">Tier & Level</th>
                    <th className="p-3.5 sm:p-4">Intensity & Speed</th>
                    <th className="p-3.5 sm:p-4">Partner Resistance</th>
                    <th className="p-3.5 sm:p-4">Protective Gear</th>
                    <th className="p-3.5 sm:p-4">Primary Focus</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800 text-zinc-700 dark:text-zinc-300">
                  {hosinsulSafetyFramework.progressionMatrix.map((tier) => (
                    <tr key={tier.tier} className="hover:bg-zinc-50 dark:hover:bg-zinc-800/30 transition-colors">
                      <td className="p-3.5 sm:p-4 font-bold text-zinc-900 dark:text-white">
                        <span className="text-brand-red font-mono block text-[10px]">{tier.tier}</span>
                        {tier.levelName}
                      </td>
                      <td className="p-3.5 sm:p-4 font-mono">{tier.speedLabel}</td>
                      <td className="p-3.5 sm:p-4 font-light">{tier.resistanceDesc}</td>
                      <td className="p-3.5 sm:p-4">
                        <div className="flex flex-wrap gap-1">
                          {tier.gearRequired.map((g, idx) => (
                            <span key={idx} className="px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-[10px] font-mono">
                              {g}
                            </span>
                          ))}
                        </div>
                      </td>
                      <td className="p-3.5 sm:p-4 font-light max-w-xs">{tier.primaryFocus}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 3: Technique-Specific Safety Parameters */}
          <section className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-lg bg-zinc-900 dark:bg-white text-white dark:text-black shadow-sm">
                <Lock className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-zinc-900 dark:text-white">
                  Technique-Specific Safety Parameters
                </h3>
                <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 font-light">
                  Biomechanical constraints for small joints, cervical spine, knees, throws, and weapon simulations.
                </p>
              </div>
            </div>

            <SafeGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {hosinsulSafetyFramework.safetyParameters.map((param) => (
                <div
                  key={param.id}
                  className="p-5 sm:p-6 rounded-[14px] border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/80 shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-brand-red block mb-1">
                      {param.subtitle}
                    </span>
                    <h4 className="text-sm sm:text-base font-black uppercase tracking-tight text-zinc-900 dark:text-white mb-3">
                      {param.domain}
                    </h4>
                    <ul className="space-y-2">
                      {param.guidelines.map((guide, idx) => (
                        <li
                          key={idx}
                          className="text-xs text-zinc-600 dark:text-zinc-300 font-light leading-relaxed flex items-start gap-2"
                        >
                          <span className="text-brand-red font-bold">&bull;</span>
                          <span>{guide}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </SafeGrid>
          </section>

          {/* Section 4: Floor Management & Instructor Intervention */}
          <section className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-lg bg-brand-red text-white shadow-brand-glow">
                <Siren className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-zinc-900 dark:text-white">
                  Floor Management & Instructor Intervention
                </h3>
                <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 font-light">
                  Enforced commands, ego control, and safe student pairing algorithms.
                </p>
              </div>
            </div>

            {/* Emergency Stop Banner */}
            <div className="p-6 sm:p-7 rounded-[14px] border border-red-500/40 bg-red-500/10 dark:bg-red-950/30 flex flex-col sm:flex-row items-start sm:items-center gap-5 shadow-lg">
              <div className="w-12 h-12 rounded-full bg-brand-red text-white flex items-center justify-center shrink-0 shadow-brand-glow animate-pulse">
                <Siren className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded bg-brand-red text-white font-mono font-black text-xs uppercase tracking-widest">
                    Emergency Command
                  </span>
                  <span className="text-xs font-mono text-red-600 dark:text-red-400 font-bold">
                    멈춰! (Meomchwo!)
                  </span>
                </div>
                <h4 className="text-lg sm:text-xl font-black uppercase tracking-tight text-zinc-900 dark:text-white">
                  The "FREEZE!" Command
                </h4>
                <p className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 font-light leading-relaxed">
                  If the instructor shouts <strong>"FREEZE!"</strong> or sounds a single long whistle, every student on the floor must halt motion instantly while holding their exact position.
                </p>
              </div>
            </div>

            {/* Secondary Protocols */}
            <SafeGrid className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {hosinsulSafetyFramework.floorProtocols
                .filter((p) => p.id !== 'fp-1')
                .map((proto) => (
                  <div
                    key={proto.id}
                    className="p-5 sm:p-6 rounded-[14px] border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/80 shadow-sm flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <h4 className="text-base font-black uppercase tracking-tight text-zinc-900 dark:text-white">
                          {proto.command}
                        </h4>
                        {proto.koreanCommand && (
                          <span className="text-[10px] font-mono text-zinc-400">
                            {proto.koreanCommand}
                          </span>
                        )}
                      </div>
                      <p className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 font-light leading-relaxed">
                        {proto.action}
                      </p>
                    </div>
                    <div className="mt-4 pt-3 border-t border-zinc-100 dark:border-zinc-800/80 text-[11px] text-zinc-500 dark:text-zinc-400">
                      <strong>Rationale:</strong> {proto.rationale}
                    </div>
                  </div>
                ))}
            </SafeGrid>
          </section>
        </div>
      )}

      {/* ==================================================================== */}
      {/* TAB 1: TECHNIQUE CATALOG & SYLLABUS MATRIX */}
      {/* ==================================================================== */}
      {activeTab === 'catalog' && (
        <div className="space-y-6">
          {/* Controls Bar: Search & Sub-Filters */}
          <div className="p-4 rounded-[14px] bg-white dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 shadow-sm flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search Input */}
            <div className="relative w-full md:w-96">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t.searchPlaceholder}
                aria-label="Search self-defense techniques"
                className="w-full pl-10 pr-4 py-2.5 rounded-xl text-base sm:text-xs min-h-[44px] bg-zinc-50 dark:bg-black border border-zinc-200 dark:border-zinc-800 focus:outline-none focus:border-brand-red dark:text-white placeholder:text-zinc-400"
              />
            </div>

            {/* Sub-Filters */}
            <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
              {[
                { id: 'all', label: t.filterAll },
                { id: 'releases', label: t.filterReleases },
                { id: 'locks', label: t.filterLocks },
                { id: 'throws', label: t.filterThrows },
                { id: 'scenarios', label: t.filterScenarios },
                { id: 'weapons', label: t.filterWeapons },
              ].map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id as SubFilterType)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    activeFilter === filter.id
                      ? 'bg-zinc-900 dark:bg-white text-white dark:text-black shadow-sm'
                      : 'bg-zinc-100 dark:bg-zinc-800/60 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white'
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>

          {/* Techniques Grid (14px Radius) */}
          <SafeGrid className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" isolateItems>
            {filteredItems.map((item) => {
              const trans = lang === 'en' ? undefined : item.translations?.[lang as 'km' | 'zh' | 'ko']
              const displayName = trans?.name || item.name
              const displaySummary = trans?.summary || item.summary

              return (
                <div
                  key={item.id}
                  onClick={() => {
                    setSelectedItem(item)
                    setCurrentStepIndex(0)
                  }}
                  className="p-6 rounded-[14px] bg-white dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 shadow-md hover:border-brand-red/50 hover:shadow-xl transition-all duration-300 cursor-pointer group flex flex-col justify-between"
                >
                  <div>
                    {/* Top Metadata */}
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span
                        className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider text-white"
                        style={{ backgroundColor: item.badgeColor }}
                      >
                        {item.difficulty}
                      </span>
                      <span className="text-[11px] font-mono text-zinc-400">{item.beltLevel}</span>
                    </div>

                    {/* Titles */}
                    <span className="text-xs font-mono font-bold text-brand-red block mb-1">
                      {item.koreanName}
                    </span>
                    <h3 className="text-base font-bold text-zinc-900 dark:text-white group-hover:text-brand-red transition-colors mb-2">
                      {displayName}
                    </h3>
                    <p className="text-xs text-zinc-600 dark:text-zinc-400 line-clamp-3 leading-relaxed mb-4">
                      {displaySummary}
                    </p>
                  </div>

                  {/* Bottom Tags */}
                  <div className="space-y-2 pt-3 border-t border-zinc-100 dark:border-zinc-800/80">
                    {item.targetArea && (
                      <div className="flex items-center gap-1.5 text-[11px] text-zinc-500 dark:text-zinc-400">
                        <Target className="w-3.5 h-3.5 text-brand-red flex-shrink-0" />
                        <span className="truncate">{item.targetArea}</span>
                      </div>
                    )}
                    <div className="flex items-center justify-between pt-1">
                      <span className="text-[10px] font-mono text-zinc-400">
                        {item.steps?.length || 0} Steps
                      </span>
                      <span className="inline-flex items-center gap-1 text-xs font-bold text-brand-red group-hover:translate-x-0.5 transition-transform">
                        <span>{t.viewTechnicalDossier}</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </div>
              )
            })}
          </SafeGrid>

          {filteredItems.length === 0 && (
            <div className="p-12 text-center rounded-[14px] bg-white dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800">
              <Shield className="w-10 h-10 text-zinc-400 mx-auto mb-3 opacity-40" />
              <p className="text-sm text-zinc-500">No self-defense techniques match your filter query.</p>
            </div>
          )}
        </div>
      )}

      {/* ==================================================================== */}
      {/* TAB 2: FOUNDATIONS & CORE PRINCIPLES */}
      {/* ==================================================================== */}
      {activeTab === 'principles' && (
        <div className="space-y-8">
          {/* 1. Etymology of Ho-Sin-Sul */}
          <div className="p-8 sm:p-10 rounded-[14px] bg-white dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 shadow-md">
            <div className="max-w-3xl mb-8">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-red block mb-1">
                {foundations.koreanTitle}
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-zinc-900 dark:text-white uppercase tracking-tight">
                {foundations.etymology.title}
              </h2>
              <p className="text-sm text-zinc-600 dark:text-zinc-300 mt-2 leading-relaxed">
                {foundations.etymology.summary}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {foundations.etymology.characters.map((char) => (
                <div
                  key={char.hanja}
                  className="p-6 rounded-xl bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700/60 relative overflow-hidden"
                >
                  <div className="absolute -right-2 -bottom-4 text-7xl font-black text-zinc-200 dark:text-zinc-700/20 select-none pointer-events-none font-serif">
                    {char.hanja}
                  </div>
                  <div className="relative z-10">
                    <span className="text-3xl font-black text-brand-red block mb-1">{char.hanja}</span>
                    <span className="text-xs font-mono font-bold text-zinc-500 dark:text-zinc-400 block mb-1">
                      {char.hangul} ({char.romanized})
                    </span>
                    <h4 className="text-base font-bold text-zinc-900 dark:text-white mb-2">{char.meaning}</h4>
                    <p className="text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed">
                      {char.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 2. Ilgyeok Pilsal (One Decisive Blow Doctrine) */}
          <div className="p-8 sm:p-10 rounded-[14px] bg-gradient-to-br from-brand-red/10 via-white dark:via-zinc-900 to-white dark:to-zinc-900 border border-brand-red/30 shadow-md">
            <div className="max-w-3xl mb-6">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-red block mb-1">
                {foundations.ilgyeokPilsal.koreanTerm} &bull; {foundations.ilgyeokPilsal.hanja}
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-zinc-900 dark:text-white uppercase tracking-tight">
                {foundations.ilgyeokPilsal.title}
              </h3>
              <p className="text-base font-bold text-brand-red mt-2 leading-relaxed">
                "{foundations.ilgyeokPilsal.concept}"
              </p>
              <p className="text-sm text-zinc-600 dark:text-zinc-300 mt-2 leading-relaxed">
                {foundations.ilgyeokPilsal.description}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-5">
              {foundations.ilgyeokPilsal.pillars.map((pillar, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-white dark:bg-zinc-900/90 border border-zinc-200 dark:border-zinc-800 shadow-sm"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-6 h-6 rounded-full bg-brand-red text-white flex items-center justify-center text-xs font-bold">
                      {idx + 1}
                    </span>
                    <h4 className="text-sm font-bold text-zinc-900 dark:text-white">{pillar.title}</h4>
                  </div>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">{pillar.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 3. The 4 Technical Pillars of Hosinsul */}
          <div className="p-8 sm:p-10 rounded-[14px] bg-white dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 shadow-md">
            <div className="max-w-3xl mb-8">
              <h3 className="text-2xl font-black text-zinc-900 dark:text-white uppercase tracking-tight">
                {foundations.fourPillars.title}
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-300 mt-1">
                {foundations.fourPillars.summary}
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {foundations.fourPillars.pillars.map((pillar, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-xl bg-zinc-50 dark:bg-zinc-800/40 border border-zinc-200 dark:border-zinc-700/60"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-base font-bold text-zinc-900 dark:text-white">{pillar.name}</h4>
                    <span className="text-xs font-mono font-bold text-brand-red">{pillar.koreanName}</span>
                  </div>
                  <p className="text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed mb-4">
                    {pillar.desc}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {pillar.techniques.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md text-[11px] font-mono font-bold bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 4. The Taekwondo & Hapkido Connection */}
          <div className="p-8 sm:p-10 rounded-[14px] bg-white dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 shadow-md">
            <div className="max-w-3xl mb-6">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-red block mb-1">
                {foundations.hapkidoConnection.koreanTitle}
              </span>
              <h3 className="text-2xl font-black text-zinc-900 dark:text-white uppercase tracking-tight">
                {foundations.hapkidoConnection.title}
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-300 mt-2 leading-relaxed">
                {foundations.hapkidoConnection.summary}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {foundations.hapkidoConnection.points.map((point, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-zinc-50 dark:bg-zinc-800/40 border border-zinc-200 dark:border-zinc-700/60"
                >
                  <h4 className="text-sm font-bold text-zinc-900 dark:text-white mb-2">{point.title}</h4>
                  <p className="text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed">{point.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ==================================================================== */}
      {/* TAB 3: HARD VS SOFT (LINEAR VS CIRCULAR) */}
      {/* ==================================================================== */}
      {activeTab === 'hard-vs-soft' && (
        <div className="space-y-8">
          {/* Header Banner */}
          <div className="p-8 rounded-[14px] bg-white dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 shadow-md">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-red block mb-1">
              {hardVsSoft.koreanTitle}
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-zinc-900 dark:text-white uppercase tracking-tight">
              {hardVsSoft.title}
            </h2>
            <p className="text-sm text-zinc-600 dark:text-zinc-300 mt-2 max-w-3xl leading-relaxed">
              {hardVsSoft.summary}
            </p>
          </div>

          {/* 2-Column Comparison: Linear Hard vs Circular Soft */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Column 1: Linear / Hard Techniques */}
            <div className="p-6 sm:p-8 rounded-[14px] bg-white dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 shadow-md flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="p-2 rounded-lg bg-brand-red/10 text-brand-red">
                      <Zap className="w-5 h-5" />
                    </span>
                    <h3 className="text-xl font-bold text-zinc-900 dark:text-white">
                      {hardVsSoft.linearHard.title}
                    </h3>
                  </div>
                  <span className="text-xs font-mono font-bold text-brand-red">
                    {hardVsSoft.linearHard.koreanTerm}
                  </span>
                </div>

                <p className="text-xs font-bold text-brand-red mb-2">{hardVsSoft.linearHard.concept}</p>
                <p className="text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed mb-6">
                  {hardVsSoft.linearHard.description}
                </p>

                {/* 3-Tier Distance Management Pyramid */}
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-400 mb-3">
                  Combat Distance Management Pyramid
                </h4>
                <div className="space-y-3 mb-6">
                  {hardVsSoft.linearHard.distancePyramid.map((tier, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700/60"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs font-bold text-zinc-900 dark:text-white">{tier.range}</span>
                        <span className="text-[10px] font-mono text-brand-red">{tier.koreanRange}</span>
                      </div>
                      <p className="text-xs font-semibold text-zinc-700 dark:text-zinc-200 mb-1">
                        Weapons: {tier.weapons}
                      </p>
                      <p className="text-[11px] text-zinc-600 dark:text-zinc-400 leading-relaxed mb-1.5">
                        {tier.strategy}
                      </p>
                      <div className="flex items-center gap-1.5 text-[10px] font-bold text-amber-600 dark:text-amber-400">
                        <AlertTriangle className="w-3.5 h-3.5 flex-shrink-0" />
                        <span>Warning: {tier.dangerWarning}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Multiple Attacker Box */}
              <div className="p-4 rounded-xl bg-brand-red/10 border border-brand-red/30">
                <h5 className="text-xs font-bold text-brand-red mb-1">
                  {hardVsSoft.linearHard.multipleAttackerDoctrine.title}
                </h5>
                <p className="text-[11px] text-zinc-700 dark:text-zinc-200 font-semibold mb-2">
                  {hardVsSoft.linearHard.multipleAttackerDoctrine.rule}
                </p>
                <ul className="space-y-1">
                  {hardVsSoft.linearHard.multipleAttackerDoctrine.tactics.map((tactic, idx) => (
                    <li key={idx} className="text-[11px] text-zinc-600 dark:text-zinc-400 flex items-start gap-1.5">
                      <span className="text-brand-red font-bold">&bull;</span>
                      <span>{tactic}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Column 2: Circular / Soft Techniques */}
            <div className="p-6 sm:p-8 rounded-[14px] bg-white dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 shadow-md flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="p-2 rounded-lg bg-blue-500/10 text-blue-500">
                      <RotateCw className="w-5 h-5" />
                    </span>
                    <h3 className="text-xl font-bold text-zinc-900 dark:text-white">
                      {hardVsSoft.circularSoft.title}
                    </h3>
                  </div>
                  <span className="text-xs font-mono font-bold text-blue-500">
                    {hardVsSoft.circularSoft.koreanTerm}
                  </span>
                </div>

                <p className="text-xs font-bold text-blue-500 mb-2">{hardVsSoft.circularSoft.concept}</p>
                <p className="text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed mb-6">
                  {hardVsSoft.circularSoft.description}
                </p>

                {/* 3 Core Circular Principles */}
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-400 mb-3">
                  Core Principles of Soft Redirection
                </h4>
                <div className="space-y-3 mb-6">
                  {hardVsSoft.circularSoft.principles.map((p, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700/60"
                    >
                      <h5 className="text-xs font-bold text-zinc-900 dark:text-white mb-1">{p.name}</h5>
                      <p className="text-[11px] text-zinc-600 dark:text-zinc-400 leading-relaxed">{p.desc}</p>
                    </div>
                  ))}
                </div>

                {/* Techniques Tag Cloud */}
                <div className="mb-6">
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-400 mb-2">
                    Representative Circular Mechanics
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {hardVsSoft.circularSoft.techniques.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-lg text-xs font-bold bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Subdual Benefit Box */}
              <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/30">
                <p className="text-xs text-blue-700 dark:text-blue-300 leading-relaxed font-medium">
                  {hardVsSoft.circularSoft.subdualBenefit}
                </p>
              </div>
            </div>
          </div>

          {/* Side-by-Side Comparison Matrix Table */}
          <div className="p-8 rounded-[14px] bg-white dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 shadow-md">
            <h3 className="text-xl font-bold text-zinc-900 dark:text-white uppercase tracking-tight mb-4">
              Tactical & Technical Comparison Matrix
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="border-b border-zinc-200 dark:border-zinc-800 text-zinc-400 font-mono uppercase">
                    <th className="py-3 px-4">Evaluation Dimension</th>
                    <th className="py-3 px-4 text-brand-red">Linear / Hard Techniques (剛)</th>
                    <th className="py-3 px-4 text-blue-500">Circular / Soft Techniques (柔)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800/60">
                  {hardVsSoft.comparisonMatrix.map((row, idx) => (
                    <tr key={idx} className="hover:bg-zinc-50/50 dark:hover:bg-zinc-800/30 transition-colors">
                      <td className="py-3.5 px-4 font-bold text-zinc-900 dark:text-white">{row.dimension}</td>
                      <td className="py-3.5 px-4 text-zinc-700 dark:text-zinc-300">{row.linearHard}</td>
                      <td className="py-3.5 px-4 text-zinc-700 dark:text-zinc-300">{row.circularSoft}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* ==================================================================== */}
      {/* TAB 4: KUPSO VITAL POINTS & LEGAL SELF-DEFENSE GUIDE */}
      {/* ==================================================================== */}
      {activeTab === 'vital-points' && (
        <div className="space-y-8">
          {/* Header Banner */}
          <div className="p-8 rounded-[14px] bg-white dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 shadow-md">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-red block mb-1">
              {vitalPointsGuide.koreanTitle}
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-zinc-900 dark:text-white uppercase tracking-tight">
              {vitalPointsGuide.title}
            </h2>
            <p className="text-sm text-zinc-600 dark:text-zinc-300 mt-2 max-w-3xl leading-relaxed">
              {vitalPointsGuide.summary}
            </p>

            <div className="mt-4 p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
              <p className="text-xs text-amber-800 dark:text-amber-200 leading-relaxed font-medium">
                {vitalPointsGuide.legalWarning}
              </p>
            </div>
          </div>

          {/* Interactive Vital Points Explorer */}
          <div className="grid lg:grid-cols-12 gap-8">
            {/* Left Column: Target Selector Cards */}
            <div className="lg:col-span-5 space-y-3">
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-400 mb-2">
                Primary Anatomical Weakness Targets
              </h3>
              {vitalPointsGuide.vitalPoints.map((vp) => (
                <div
                  key={vp.id}
                  onClick={() => setSelectedVitalPointId(vp.id)}
                  className={`p-4 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                    selectedVitalPointId === vp.id
                      ? 'bg-zinc-900 dark:bg-white text-white dark:text-black border-zinc-900 dark:border-white shadow-md'
                      : 'bg-white dark:bg-zinc-900/80 border-zinc-200 dark:border-zinc-800 hover:border-brand-red/50 text-zinc-900 dark:text-white'
                  }`}
                >
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold">{vp.name}</span>
                      <span
                        className={`text-[9px] font-mono px-1.5 py-0.5 rounded font-bold uppercase ${
                          vp.dangerLevel.includes('Lethal')
                            ? 'bg-red-500/20 text-red-500'
                            : 'bg-amber-500/20 text-amber-500'
                        }`}
                      >
                        {vp.dangerLevel}
                      </span>
                    </div>
                    <span className="text-[11px] font-mono text-zinc-400 block mt-0.5">{vp.location}</span>
                  </div>
                  <ChevronRight className="w-4 h-4 opacity-50" />
                </div>
              ))}
            </div>

            {/* Right Column: Detailed Anatomical Dossier */}
            <div className="lg:col-span-7">
              <div className="p-8 rounded-[14px] bg-white dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 shadow-md h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold text-brand-red">
                      {selectedVitalPoint.koreanName} &bull; {selectedVitalPoint.romanized}
                    </span>
                    <span
                      className={`px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider ${
                        selectedVitalPoint.dangerLevel.includes('Lethal')
                          ? 'bg-red-500 text-white'
                          : 'bg-amber-500 text-black'
                      }`}
                    >
                      {selectedVitalPoint.dangerLevel}
                    </span>
                  </div>

                  <h3 className="text-2xl font-black text-zinc-900 dark:text-white mb-2">
                    {selectedVitalPoint.name}
                  </h3>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-6">
                    Location: {selectedVitalPoint.location}
                  </p>

                  <div className="space-y-4">
                    <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700/60">
                      <span className="text-[11px] font-mono uppercase text-zinc-400 font-bold block mb-1">
                        {t.anatomicalStructure}
                      </span>
                      <p className="text-xs font-semibold text-zinc-800 dark:text-zinc-200">
                        {selectedVitalPoint.anatomicalStructure}
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700/60">
                      <span className="text-[11px] font-mono uppercase text-zinc-400 font-bold block mb-1">
                        {t.impactEffect}
                      </span>
                      <p className="text-xs text-zinc-700 dark:text-zinc-300 leading-relaxed">
                        {selectedVitalPoint.impactEffect}
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-brand-red/10 border border-brand-red/30">
                      <span className="text-[11px] font-mono uppercase text-brand-red font-bold block mb-1">
                        {t.recommendedStrike}
                      </span>
                      <p className="text-xs font-bold text-zinc-900 dark:text-white">
                        {selectedVitalPoint.recommendedStrike}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between text-[11px] text-zinc-400 font-mono">
                  <span>Tactical Application: Ilgyeok Pilsal</span>
                  <span>Target Zone: {selectedVitalPoint.targetArea.toUpperCase()}</span>
                </div>
              </div>
            </div>
          </div>

          {/* The 4-Stage Legal Self-Defense Framework */}
          <div className="p-8 sm:p-10 rounded-[14px] bg-white dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 shadow-md">
            <h3 className="text-xl font-black text-zinc-900 dark:text-white uppercase tracking-tight mb-6">
              {vitalPointsGuide.legalFramework.title}
            </h3>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {vitalPointsGuide.legalFramework.stages.map((stage) => (
                <div
                  key={stage.step}
                  className="p-6 rounded-xl bg-zinc-50 dark:bg-zinc-800/40 border border-zinc-200 dark:border-zinc-700/60 relative"
                >
                  <span className="text-3xl font-black text-brand-red/30 block mb-2 font-mono">
                    0{stage.step}
                  </span>
                  <h4 className="text-sm font-bold text-zinc-900 dark:text-white mb-2">{stage.title}</h4>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">{stage.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ==================================================================== */}
      {/* DEEP-DIVE INSPECTION MODAL (14px Radius) */}
      {/* ==================================================================== */}
      {activeTechnique && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-technique-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fade-in"
          onClick={() => setSelectedItem(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-4xl max-h-[90vh] bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-[14px] shadow-2xl overflow-hidden flex flex-col"
          >
            {/* Modal Header */}
            <div className="p-6 border-b border-zinc-200 dark:border-zinc-800 flex items-center justify-between bg-zinc-50 dark:bg-zinc-900/90">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span
                    className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase text-white"
                    style={{ backgroundColor: activeTechnique.badgeColor }}
                  >
                    {activeTechnique.difficulty}
                  </span>
                  <span className="text-xs font-mono text-zinc-400">{activeTechnique.beltLevel}</span>
                </div>
                <h3 id="modal-technique-title" className="text-xl font-black uppercase text-zinc-900 dark:text-white">
                  {activeTechnique.name}
                </h3>
                <span className="text-xs font-mono text-brand-red font-bold">
                  {activeTechnique.koreanName}
                </span>
              </div>

              <button
                onClick={() => setSelectedItem(null)}
                className="min-w-[44px] min-h-[44px] p-2.5 rounded-xl text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors flex items-center justify-center cursor-pointer"
                aria-label={t.closeModal}
                title={t.closeModal}
              >
                ✕
              </button>
            </div>

            {/* Modal Scrollable Body */}
            <div className="flex-grow overflow-y-auto p-6 sm:p-8 space-y-6">
              {/* Summary */}
              <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed font-medium">
                {activeTechnique.summary}
              </p>

              {/* Anatomical Targets Bar */}
              <div className="grid sm:grid-cols-2 gap-4">
                {activeTechnique.strikingSurface && (
                  <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-800">
                    <span className="text-[10px] font-mono font-bold uppercase text-zinc-400 block mb-1">
                      {t.strikingSurface}
                    </span>
                    <p className="text-xs font-bold text-zinc-900 dark:text-white">
                      {activeTechnique.strikingSurface}
                    </p>
                  </div>
                )}
                {activeTechnique.targetArea && (
                  <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-800">
                    <span className="text-[10px] font-mono font-bold uppercase text-zinc-400 block mb-1">
                      {t.targetArea}
                    </span>
                    <p className="text-xs font-bold text-brand-red">{activeTechnique.targetArea}</p>
                  </div>
                )}
              </div>

              {/* Stepper View / Full List Toggle */}
              {activeTechnique.steps && activeTechnique.steps.length > 0 && (
                <div className="p-6 rounded-[14px] bg-zinc-50 dark:bg-zinc-800/40 border border-zinc-200 dark:border-zinc-700/60">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-red">
                      {t.stepSequence} ({activeTechnique.steps.length} Steps)
                    </span>
                    <button
                      onClick={() => setStepMode(stepMode === 'interactive' ? 'list' : 'interactive')}
                      className="text-xs font-mono font-bold text-zinc-500 hover:text-brand-red transition-colors"
                    >
                      {stepMode === 'interactive' ? 'Show All Steps' : 'Interactive Stepper'}
                    </button>
                  </div>

                  {stepMode === 'interactive' ? (
                    <div>
                      {/* Step Progress Bar */}
                      <div className="w-full bg-zinc-200 dark:bg-zinc-700 h-1.5 rounded-full mb-4 overflow-hidden">
                        <div
                          className="bg-brand-red h-full transition-all duration-300"
                          style={{
                            width: `${
                              ((currentStepIndex + 1) / (activeTechnique.steps?.length || 1)) * 100
                            }%`,
                          }}
                        />
                      </div>

                      {/* Current Step Card */}
                      <div className="p-5 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm min-h-[90px] flex items-center">
                        <div className="flex items-start gap-4">
                          <span className="w-8 h-8 rounded-full bg-brand-red text-white font-bold flex items-center justify-center flex-shrink-0 text-sm">
                            {currentStepIndex + 1}
                          </span>
                          <p className="text-sm font-medium text-zinc-800 dark:text-zinc-200 leading-relaxed">
                            {activeTechnique.steps[currentStepIndex]}
                          </p>
                        </div>
                      </div>

                      {/* Step Navigation Controls */}
                      <div className="flex items-center justify-between mt-4">
                        <button
                          disabled={currentStepIndex === 0}
                          onClick={() => setCurrentStepIndex((prev) => Math.max(0, prev - 1))}
                          className="px-4 py-2 rounded-lg text-xs font-bold bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-zinc-100 dark:hover:bg-zinc-800"
                        >
                          Previous
                        </button>
                        <span className="text-xs font-mono text-zinc-400">
                          Step {currentStepIndex + 1} of {activeTechnique.steps.length}
                        </span>
                        <button
                          disabled={currentStepIndex === activeTechnique.steps.length - 1}
                          onClick={() =>
                            setCurrentStepIndex((prev) =>
                              Math.min(activeTechnique.steps.length - 1, prev + 1)
                            )
                          }
                          className="px-4 py-2 rounded-lg text-xs font-bold bg-brand-red text-white disabled:opacity-30 disabled:cursor-not-allowed hover:bg-brand-red/90 shadow-sm"
                        >
                          Next Step
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-2.5">
                      {activeTechnique.steps.map((step, idx) => (
                        <div
                          key={idx}
                          className="p-3.5 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-xs flex items-start gap-3"
                        >
                          <span className="font-mono font-bold text-brand-red w-5 flex-shrink-0">
                            {idx + 1}.
                          </span>
                          <span className="text-zinc-700 dark:text-zinc-300 leading-relaxed">{step}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* Korean Terminology Glossary Table */}
              {activeTechnique.terminology && activeTechnique.terminology.length > 0 && (
                <div className="p-6 rounded-[14px] bg-zinc-50 dark:bg-zinc-800/40 border border-zinc-200 dark:border-zinc-700/60">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-red block mb-3">
                    {t.koreanTerminology}
                  </span>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs">
                      <thead>
                        <tr className="border-b border-zinc-200 dark:border-zinc-700 text-zinc-400 font-mono uppercase">
                          <th className="py-2 px-3">Korean</th>
                          <th className="py-2 px-3">Romanized</th>
                          <th className="py-2 px-3">Meaning</th>
                          <th className="py-2 px-3">Category</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                        {activeTechnique.terminology.map((term, idx) => (
                          <tr key={idx}>
                            <td className="py-2.5 px-3 font-bold text-brand-red">{term.korean}</td>
                            <td className="py-2.5 px-3 font-mono text-zinc-600 dark:text-zinc-400">
                              {term.romanized}
                            </td>
                            <td className="py-2.5 px-3 text-zinc-800 dark:text-zinc-200">{term.english}</td>
                            <td className="py-2.5 px-3 font-mono text-[10px] text-zinc-400">
                              {term.category || 'General'}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* Key Details & Mistakes Grid */}
              <div className="grid sm:grid-cols-2 gap-6">
                {activeTechnique.keyDetails && activeTechnique.keyDetails.length > 0 && (
                  <div className="p-5 rounded-xl bg-zinc-50 dark:bg-zinc-800/40 border border-zinc-200 dark:border-zinc-700/60">
                    <h4 className="text-xs font-mono font-bold uppercase text-zinc-400 mb-2 flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                      <span>{t.keyDetails}</span>
                    </h4>
                    <ul className="space-y-2">
                      {activeTechnique.keyDetails.map((detail, idx) => (
                        <li key={idx} className="text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed">
                          &bull; {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {activeTechnique.commonMistakes && activeTechnique.commonMistakes.length > 0 && (
                  <div className="p-5 rounded-xl bg-zinc-50 dark:bg-zinc-800/40 border border-zinc-200 dark:border-zinc-700/60">
                    <h4 className="text-xs font-mono font-bold uppercase text-zinc-400 mb-2 flex items-center gap-1.5">
                      <XCircle className="w-4 h-4 text-brand-red" />
                      <span>{t.commonMistakes}</span>
                    </h4>
                    <ul className="space-y-2">
                      {activeTechnique.commonMistakes.map((mistake, idx) => (
                        <li key={idx} className="text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed">
                          &bull; {mistake}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Coaching Tips */}
              {activeTechnique.coachingTips && activeTechnique.coachingTips.length > 0 && (
                <div className="p-5 rounded-xl bg-brand-red/5 border border-brand-red/20">
                  <h4 className="text-xs font-mono font-bold uppercase text-brand-red mb-2 flex items-center gap-1.5">
                    <Award className="w-4 h-4" />
                    <span>{t.coachingTips}</span>
                  </h4>
                  <ul className="space-y-1.5">
                    {activeTechnique.coachingTips.map((tip, idx) => (
                      <li key={idx} className="text-xs text-zinc-700 dark:text-zinc-300 leading-relaxed">
                        &bull; {tip}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
