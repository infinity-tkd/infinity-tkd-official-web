'use client'

import * as React from 'react'
import Link from 'next/link'
import {
  Layers,
  Sparkles,
  Award,
  Clock,
  Target,
  Compass,
  CheckCircle2,
  AlertTriangle,
  ChevronRight,
  ChevronLeft,
  Search,
  BookOpen,
  Zap,
  Flame,
  Shield,
  Eye,
  Info,
  Maximize2,
  X,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  LayoutGrid,
  Table,
  Footprints,
  Volume2,
  Timer,
  Play,
  RotateCcw,
  SlidersHorizontal,
  FileSpreadsheet,
  Check,
  ArrowRight,
  HelpCircle,
} from 'lucide-react'
import type { LibraryItem } from '@/data/library'
import { useLanguage } from '@/context/LanguageContext'
import {
  poomsaeI18n,
  getLocalizedSeriesConfig,
  getPoomsaeFoundations,
  getLocalizedWhatIsTaegeuk,
  getYudanjaGuide,
  getLocalizedBlackBeltDossier,
  decoratePoomsaeItem,
  type PoomsaeSeriesKey,
  type SeriesInfo,
} from '@/data/library/poomsaeTranslations'

interface PoomsaeMasterExplorerProps {
  items: LibraryItem[]
}

type MasterSectionTab = 'catalog' | 'foundations' | 'taegeuk' | 'yudanja'
type ViewLayoutMode = 'grid' | 'matrix' | 'lines'

// Trigram Lines Component for Visual Render
function TrigramVisualLines({ lines, color = '#EF2F38' }: { lines: [boolean, boolean, boolean]; color?: string }) {
  return (
    <div className="flex flex-col gap-1 w-10 py-1 select-none">
      {lines.map((isSolid, idx) =>
        isSolid ? (
          <div
            key={idx}
            className="w-full h-1.5 rounded-sm"
            style={{ backgroundColor: color }}
          />
        ) : (
          <div key={idx} className="flex gap-1.5 w-full h-1.5">
            <div className="flex-1 rounded-sm" style={{ backgroundColor: color }} />
            <div className="flex-1 rounded-sm" style={{ backgroundColor: color }} />
          </div>
        )
      )}
    </div>
  )
}

import { BlackBeltStripesBadge } from './BlackBeltStripesBadge'
export { BlackBeltStripesBadge }

interface ErrorBoundaryProps {
  children: React.ReactNode
}

interface ErrorBoundaryState {
  hasError: boolean
  error?: Error
}

export class PoomsaeErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('PoomsaeMasterExplorer caught runtime error:', error, errorInfo)
  }

  handleReset = () => {
    this.setState({ hasError: false, error: undefined })
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-8 sm:p-12 rounded-[14px] bg-white dark:bg-zinc-900 border border-brand-red/30 shadow-xl text-center space-y-4 font-mono">
          <div className="w-12 h-12 rounded-full bg-brand-red/10 text-brand-red flex items-center justify-center mx-auto">
            <AlertTriangle className="w-6 h-6" />
          </div>
          <div className="space-y-1">
            <h3 className="text-base font-black uppercase text-zinc-900 dark:text-white">
              Poomsae Master Explorer Encountered an Issue
            </h3>
            <p className="text-xs text-zinc-500 max-w-md mx-auto leading-relaxed">
              {this.state.error?.message || 'An unexpected rendering error occurred. You can safely restore the explorer view.'}
            </p>
          </div>
          <button
            onClick={this.handleReset}
            className="px-4 py-2 rounded-xl bg-brand-red text-white text-xs font-bold font-mono uppercase hover:bg-brand-red/90 transition-all cursor-pointer shadow-sm"
          >
            Reset Explorer View
          </button>
        </div>
      )
    }

    return this.props.children
  }
}

export function PoomsaeMasterExplorer({ items }: PoomsaeMasterExplorerProps) {
  return (
    <PoomsaeErrorBoundary>
      <PoomsaeMasterExplorerInner items={items} />
    </PoomsaeErrorBoundary>
  )
}

function PoomsaeMasterExplorerInner({ items }: PoomsaeMasterExplorerProps) {
  const { language } = useLanguage()
  const pt = poomsaeI18n[language] || poomsaeI18n.en

  // Master Section Navigation
  const [activeMasterTab, setActiveMasterTab] = React.useState<MasterSectionTab>('catalog')

  // Yudanja Dan Mastery View Mode: Table vs Cards
  const [danViewMode, setDanViewMode] = React.useState<'table' | 'cards'>('table')

  // Catalog Internal State
  const [activeSeries, setActiveSeries] = React.useState<PoomsaeSeriesKey>('taegeuk')
  const [viewLayout, setViewLayout] = React.useState<ViewLayoutMode>('grid')
  const [subFilter, setSubFilter] = React.useState<string>('all')
  const [searchQuery, setSearchQuery] = React.useState('')
  const [selectedPoomsae, setSelectedPoomsae] = React.useState<LibraryItem | null>(null)

  // Stepper state inside Modal
  const [stepViewMode, setStepViewMode] = React.useState<'list' | 'stepper'>('list')
  const [currentStepIndex, setCurrentStepIndex] = React.useState<number>(0)

  // Localized Datasets
  const seriesConfig = React.useMemo(() => getLocalizedSeriesConfig(language), [language])
  const foundationsData = React.useMemo(() => getPoomsaeFoundations(language), [language])
  const whatIsTaegeukData = React.useMemo(() => getLocalizedWhatIsTaegeuk(language), [language])
  const yudanjaGuideData = React.useMemo(() => getYudanjaGuide(language), [language])
  const blackBeltDossierData = React.useMemo(() => getLocalizedBlackBeltDossier(language), [language])

  // Reset sub-filter on series change
  React.useEffect(() => {
    setSubFilter('all')
  }, [activeSeries])

  // Reset step index and modal sub-tab on poomsae select
  React.useEffect(() => {
    setCurrentStepIndex(0)
    setStepViewMode('list')
  }, [selectedPoomsae])

  // Filtered items in Catalog
  const filteredItems = React.useMemo(() => {
    return items
      .filter((item) => {
        if (item.poomsaeSeries !== activeSeries) return false

        if (subFilter !== 'all') {
          if (activeSeries === 'taegeuk') {
            if (subFilter === 'beginner' && item.difficulty !== 'Beginner') return false
            if (subFilter === 'intermediate' && item.difficulty !== 'Intermediate') return false
            if (subFilter === 'advanced' && item.difficulty !== 'Advanced') return false
          } else if (activeSeries === 'high-dan') {
            if (subFilter === '1-3-dan' && !['koryo', 'keumgang', 'taebaek'].includes(item.id)) return false
            if (subFilter === '4-6-dan' && !['pyongwon', 'sipjin', 'jitae'].includes(item.id)) return false
            if (subFilter === '7-9-dan' && !['cheonkwon', 'hansu', 'ilyeo'].includes(item.id)) return false
          } else if (activeSeries === 'new-poomsae') {
            if (subFilter === 'under-18' && !['himchari', 'yamang'].includes(item.id)) return false
            if (subFilter === '18-30' && !['saebyeol', 'nareusya', 'bigak'].includes(item.id)) return false
            if (subFilter === '30-49' && !['eoullim', 'saeara'].includes(item.id)) return false
            if (subFilter === '50-plus' && !['hansol', 'narae', 'onnuri'].includes(item.id)) return false
          }
        }

        if (!searchQuery.trim()) return true
        const q = searchQuery.toLowerCase()
        return (
          item.name.toLowerCase().includes(q) ||
          item.koreanName.toLowerCase().includes(q) ||
          (item.trigramSymbol && item.trigramSymbol.toLowerCase().includes(q)) ||
          (item.trigramHanja && item.trigramHanja.toLowerCase().includes(q)) ||
          (item.yinyangElement && item.yinyangElement.toLowerCase().includes(q)) ||
          (item.meaning && item.meaning.toLowerCase().includes(q)) ||
          (item.beltLevel && item.beltLevel.toLowerCase().includes(q)) ||
          (item.targetAgeDivision && item.targetAgeDivision.toLowerCase().includes(q))
        )
      })
      .map((item) => decoratePoomsaeItem(item, language))
  }, [items, activeSeries, subFilter, searchQuery, language])

  // Counts per series
  const counts = React.useMemo(() => {
    return {
      taegeuk: items.filter((i) => i.poomsaeSeries === 'taegeuk').length,
      'high-dan': items.filter((i) => i.poomsaeSeries === 'high-dan').length,
      'new-poomsae': items.filter((i) => i.poomsaeSeries === 'new-poomsae').length,
    }
  }, [items])

  const currentSeriesInfo = seriesConfig[activeSeries]

  // Modal navigation
  const currentModalIndex = React.useMemo(() => {
    if (!selectedPoomsae) return -1
    return filteredItems.findIndex((i) => i.id === selectedPoomsae.id)
  }, [selectedPoomsae, filteredItems])

  const handleNextPoomsae = () => {
    if (currentModalIndex >= 0 && currentModalIndex < filteredItems.length - 1) {
      setSelectedPoomsae(filteredItems[currentModalIndex + 1])
    }
  }

  const handlePrevPoomsae = () => {
    if (currentModalIndex > 0) {
      setSelectedPoomsae(filteredItems[currentModalIndex - 1])
    }
  }

  // Combined Black Belt Dan Mastery cards (consolidates floor patterns & technical dossiers with zero duplicates)
  const combinedYudanjaCards = React.useMemo(() => {
    const idMap: Record<number, string> = {
      0: 'koryo',
      1: 'keumgang',
      2: 'taebaek',
      3: 'pyongwon',
      4: 'sipjin',
      5: 'jitae',
      6: 'cheonkwon',
      7: 'hansu',
      8: 'ilyeo',
    }
    return yudanjaGuideData.floorPatterns.map((fp, idx) => {
      const dossier = blackBeltDossierData?.[idx]
      return {
        ...fp,
        targetId: idMap[idx] || 'koryo',
        philosophicalEssence: dossier?.philosophicalEssence,
        keyTechniques: dossier?.keyTechniques,
        historicalCorrectionNote: dossier?.historicalCorrectionNote,
      }
    })
  }, [yudanjaGuideData, blackBeltDossierData])

  // Body scroll lock & Keyboard navigation listener
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedPoomsae(null)
      } else if (e.key === 'ArrowLeft' && !e.altKey && !e.ctrlKey) {
        if (document.activeElement?.tagName !== 'INPUT' && document.activeElement?.tagName !== 'TEXTAREA') {
          handlePrevPoomsae()
        }
      } else if (e.key === 'ArrowRight' && !e.altKey && !e.ctrlKey) {
        if (document.activeElement?.tagName !== 'INPUT' && document.activeElement?.tagName !== 'TEXTAREA') {
          handleNextPoomsae()
        }
      }
    }
    if (selectedPoomsae) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [selectedPoomsae, currentModalIndex, filteredItems])

  // Find counterpart form for Taegeuk duality
  const getTaegeukCounterpart = (poomsaeId: string) => {
    const map: Record<string, string> = {
      'taegeuk-1': 'taegeuk-8',
      'taegeuk-8': 'taegeuk-1',
      'taegeuk-2': 'taegeuk-7',
      'taegeuk-7': 'taegeuk-2',
      'taegeuk-3': 'taegeuk-6',
      'taegeuk-6': 'taegeuk-3',
      'taegeuk-4': 'taegeuk-5',
      'taegeuk-5': 'taegeuk-4',
    }
    const counterpartId = map[poomsaeId]
    if (!counterpartId) return null
    return items.find((i) => i.id === counterpartId) || null
  }

  // Defensive helpers for selectedPoomsae
  const steps = React.useMemo(() => selectedPoomsae?.steps || [], [selectedPoomsae])
  const totalSteps = steps.length
  const hasSteps = totalSteps > 0
  const safeStepIndex = totalSteps > 0 ? Math.min(Math.max(0, currentStepIndex), totalSteps - 1) : 0
  const currentStepText = steps[safeStepIndex] || ''
  const isCurrentStepKihap = (currentStepText || '').toLowerCase().includes('kihap')
  const stepProgressPercent = totalSteps > 0 ? Math.round(((safeStepIndex + 1) / totalSteps) * 100) : 0

  const terminologyList = React.useMemo(() => selectedPoomsae?.terminology || [], [selectedPoomsae])
  const coachingTipsList = React.useMemo(() => selectedPoomsae?.coachingTips || [], [selectedPoomsae])
  const keyDetailsList = React.useMemo(() => selectedPoomsae?.keyDetails || [], [selectedPoomsae])
  const commonMistakesList = React.useMemo(() => selectedPoomsae?.commonMistakes || [], [selectedPoomsae])

  return (
    <div className="space-y-8">
      {/* ==================================================================== */}
      {/* 1. TOP 4-PILLAR MASTER NAVIGATION (Zero Overlap, Well-Structured) */}
      {/* ==================================================================== */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 p-1.5 bg-zinc-100 dark:bg-zinc-900 rounded-[14px] border border-zinc-200 dark:border-zinc-800">
        {[
          {
            key: 'catalog' as MasterSectionTab,
            title: pt.catalogTab,
            korean: '공인 27개 품새 도감 (3대 시리즈)',
            subtitle: pt.allSeriesCount,
            icon: Layers,
            accent: '#EF2F38',
          },
          {
            key: 'foundations' as MasterSectionTab,
            title: pt.foundationsTab,
            korean: '품새의 본질·기원 및 3대 수련 요결',
            subtitle: 'Why Poomsae Matters, Mistakes & 10th Kup',
            icon: BookOpen,
            accent: '#09BB00',
          },
          {
            key: 'taegeuk' as MasterSectionTab,
            title: pt.taegeukTab,
            korean: '주역 8괘와 4대 대립쌍 (1971년 전환)',
            subtitle: 'Eum-Yang Unity, Trigram Pairs & History',
            icon: Sparkles,
            accent: '#A05B00',
          },
          {
            key: 'yudanja' as MasterSectionTab,
            title: pt.yudanjaTab,
            korean: '유단자 품새 (한자선·승단·실전 공방)',
            subtitle: 'Unique Hanja Lines, Grading & Bunkai',
            icon: Award,
            accent: '#0042EA',
          },
        ].map((tab) => {
          const isActive = activeMasterTab === tab.key
          const Icon = tab.icon

          return (
            <button
              key={tab.key}
              onClick={() => {
                setActiveMasterTab(tab.key)
                setSelectedPoomsae(null)
              }}
              className={`text-left p-4 sm:p-5 rounded-xl transition-all duration-300 relative overflow-hidden flex flex-col justify-between cursor-pointer ${
                isActive
                  ? 'bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white shadow-lg border border-zinc-300 dark:border-zinc-700'
                  : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-white/50 dark:hover:bg-zinc-800/40'
              }`}
            >
              {isActive && (
                <div
                  className="absolute top-0 left-0 right-0 h-1"
                  style={{ backgroundColor: tab.accent }}
                />
              )}

              <div className="flex items-center justify-between mb-2">
                <Icon className="w-5 h-5" style={{ color: tab.accent }} />
                <span className="text-[10px] font-mono uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-700 text-zinc-600 dark:text-zinc-300">
                  Section
                </span>
              </div>

              <div>
                <h3 className="text-sm sm:text-base font-black uppercase tracking-tight">
                  {tab.title}
                </h3>
                <span className="text-[11px] text-zinc-400 font-light block">
                  {tab.korean}
                </span>
              </div>

              <div className="mt-2.5 pt-2 border-t border-zinc-100 dark:border-zinc-700/60 text-[10px] text-zinc-500 font-mono truncate">
                {tab.subtitle}
              </div>
            </button>
          )
        })}
      </div>

      {/* ==================================================================== */}
      {/* SECTION 1: POOMSAE CATALOG (ALL 27 PATTERNS) */}
      {/* ==================================================================== */}
      {activeMasterTab === 'catalog' && (
        <div className="space-y-6 animate-fade-in">
          {/* 3-Series Selector Tabs (Taegeuk / Yudanja / New Poomsae) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 p-1.5 bg-zinc-100 dark:bg-zinc-900 rounded-[14px] border border-zinc-200 dark:border-zinc-800">
            {(['taegeuk', 'high-dan', 'new-poomsae'] as PoomsaeSeriesKey[]).map((key) => {
              const info = seriesConfig[key]
              const isActive = activeSeries === key
              const count = counts[key]

              return (
                <button
                  key={key}
                  onClick={() => {
                    setActiveSeries(key)
                    setSelectedPoomsae(null)
                  }}
                  className={`text-left p-4 sm:p-5 rounded-xl transition-all duration-300 relative overflow-hidden flex flex-col justify-between cursor-pointer ${
                    isActive
                      ? 'bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white shadow-lg border border-zinc-300 dark:border-zinc-700'
                      : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-white/50 dark:hover:bg-zinc-800/40'
                  }`}
                >
                  {isActive && (
                    <div className="absolute top-0 left-0 right-0 h-1 bg-brand-red" />
                  )}

                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-700 text-zinc-600 dark:text-zinc-300">
                      {info.badgeText}
                    </span>
                    <span className="text-xs font-mono font-bold text-brand-red">
                      {count} Patterns
                    </span>
                  </div>

                  <div>
                    <h3 className="text-base sm:text-lg font-black uppercase tracking-tight">
                      {info.title}
                    </h3>
                    <span className="text-xs text-zinc-400 font-light block">
                      {info.koreanTitle}
                    </span>
                  </div>

                  <div className="mt-3 pt-2 border-t border-zinc-100 dark:border-zinc-700/60 text-[11px] text-zinc-500 font-mono truncate">
                    {info.targetDivision}
                  </div>
                </button>
              )
            })}
          </div>

          {/* Search, Filter & View Controls */}
          <div className="p-6 sm:p-8 rounded-[14px] bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-md space-y-5">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-2 h-2 rounded-full bg-brand-red animate-pulse" />
                  <span className="text-xs font-mono uppercase font-bold text-brand-red tracking-wider">
                    {currentSeriesInfo.title}
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-zinc-900 dark:text-white">
                  {currentSeriesInfo.subtitle}
                </h2>
                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 font-light max-w-3xl mt-1 leading-relaxed">
                  {currentSeriesInfo.description}
                </p>
              </div>

              {/* Search Bar */}
              <div className="relative min-w-[280px] sm:min-w-[320px]">
                <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={pt.searchPlaceholder}
                  className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-xs font-mono text-zinc-900 dark:text-white placeholder:text-zinc-400 focus:outline-none focus:border-brand-red transition-all"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-600 dark:hover:text-white text-xs font-bold cursor-pointer"
                  >
                    Clear
                  </button>
                )}
              </div>
            </div>

            {/* Sub-Category Filter Tags + View Mode Switcher */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-zinc-100 dark:border-zinc-800">
              <div className="flex flex-wrap items-center gap-1.5">
                <span className="text-[11px] font-mono text-zinc-400 mr-1 flex items-center gap-1">
                  <SlidersHorizontal className="w-3 h-3" /> {pt.filterLabel}
                </span>
                {currentSeriesInfo.filterOptions.map((opt) => {
                  const isSelected = subFilter === opt.value
                  return (
                    <button
                      key={opt.value}
                      onClick={() => setSubFilter(opt.value)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-bold shadow-sm'
                          : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white'
                      }`}
                    >
                      {opt.label}
                    </button>
                  )
                })}
              </div>

              {/* View Layout Selector (Cards vs Syllabus Matrix vs Lines) */}
              <div className="flex items-center gap-1 p-1 bg-zinc-100 dark:bg-zinc-950 rounded-xl border border-zinc-200 dark:border-zinc-800">
                <button
                  onClick={() => setViewLayout('grid')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono flex items-center gap-1.5 cursor-pointer transition-colors ${
                    viewLayout === 'grid'
                      ? 'bg-brand-red text-white font-bold'
                      : 'text-zinc-500 hover:text-zinc-900 dark:hover:text-white'
                  }`}
                >
                  <LayoutGrid className="w-3.5 h-3.5" /> {pt.viewCards}
                </button>
                <button
                  onClick={() => setViewLayout('matrix')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono flex items-center gap-1.5 cursor-pointer transition-colors ${
                    viewLayout === 'matrix'
                      ? 'bg-brand-red text-white font-bold'
                      : 'text-zinc-500 hover:text-zinc-900 dark:hover:text-white'
                  }`}
                >
                  <Table className="w-3.5 h-3.5" /> {pt.viewMatrix}
                </button>
                <button
                  onClick={() => setViewLayout('lines')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono flex items-center gap-1.5 cursor-pointer transition-colors ${
                    viewLayout === 'lines'
                      ? 'bg-brand-red text-white font-bold'
                      : 'text-zinc-500 hover:text-zinc-900 dark:hover:text-white'
                  }`}
                >
                  <Compass className="w-3.5 h-3.5" /> {pt.viewLines}
                </button>
              </div>
            </div>

            {/* Quick Statistics Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2 text-xs font-mono text-zinc-500">
              <div className="p-2.5 rounded-lg bg-zinc-50 dark:bg-zinc-950 border border-zinc-100 dark:border-zinc-800">
                <span className="text-[10px] text-zinc-400 uppercase block">Curriculum Depth</span>
                <strong className="text-zinc-900 dark:text-white text-xs">{filteredItems.length} Forms Listed</strong>
              </div>
              <div className="p-2.5 rounded-lg bg-zinc-50 dark:bg-zinc-950 border border-zinc-100 dark:border-zinc-800">
                <span className="text-[10px] text-zinc-400 uppercase block">{pt.targetDivisionLabel}</span>
                <strong className="text-zinc-900 dark:text-white text-xs truncate block">{currentSeriesInfo.targetDivision}</strong>
              </div>
              <div className="p-2.5 rounded-lg bg-zinc-50 dark:bg-zinc-950 border border-zinc-100 dark:border-zinc-800">
                <span className="text-[10px] text-zinc-400 uppercase block">{pt.governingStandardLabel}</span>
                <strong className="text-zinc-900 dark:text-white text-xs">Kukkiwon &amp; WT</strong>
              </div>
              <div className="p-2.5 rounded-lg bg-zinc-50 dark:bg-zinc-950 border border-zinc-100 dark:border-zinc-800">
                <span className="text-[10px] text-zinc-400 uppercase block">{pt.scoringMetricLabel}</span>
                <strong className="text-zinc-900 dark:text-white text-xs">Accuracy 4.0 + Pres 6.0</strong>
              </div>
            </div>
          </div>

          {/* Interactive Philosophical Progression Pathway Strip */}
          <div className="p-5 sm:p-6 rounded-[14px] bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-brand-red" />
                <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-900 dark:text-white">
                  {activeSeries === 'taegeuk'
                    ? 'Taegeuk Palgwae Progression: 8 Universal Principles (1 → 8)'
                    : activeSeries === 'high-dan'
                    ? 'Yudanja Black Belt Ascension: Master Virtues (1st → 9th Dan)'
                    : 'Kukkiwon Competition Suite: Age-Division Specialization'}
                </h3>
              </div>
              <span className="text-[10px] font-mono text-zinc-400">
                Click any step to inspect
              </span>
            </div>

            <div
              className={`grid grid-cols-2 sm:grid-cols-4 ${
                activeSeries === 'new-poomsae'
                  ? 'lg:grid-cols-10 sm:grid-cols-5'
                  : activeSeries === 'high-dan'
                  ? 'lg:grid-cols-9 sm:grid-cols-3'
                  : 'lg:grid-cols-8'
              } gap-2`}
            >
              {items
                .filter((i) => i.poomsaeSeries === activeSeries)
                .map((item, idx) => {
                  const isSelected = selectedPoomsae?.id === item.id
                  const isNewPoomsae = activeSeries === 'new-poomsae'
                  return (
                    <button
                      key={item.id}
                      onClick={() => setSelectedPoomsae(decoratePoomsaeItem(item, language))}
                      className={`p-2.5 rounded-xl border text-left font-mono transition-all cursor-pointer flex flex-col justify-between ${
                        isSelected
                          ? isNewPoomsae
                            ? 'bg-blue-600 text-white border-blue-500 shadow-lg'
                            : 'bg-brand-red text-white border-brand-red shadow-brand-glow'
                          : 'bg-zinc-50 dark:bg-zinc-950 border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 hover:border-brand-red hover:bg-white dark:hover:bg-zinc-800'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs font-bold">
                          {item.diagramSymbol?.split(' ')[0] || item.trigramSymbol?.split(' ')[0] || `${idx + 1}`}
                        </span>
                        <span
                          className={`text-[9px] px-1.5 py-0.2 rounded font-bold ${
                            isSelected
                              ? 'bg-white/20 text-white'
                              : 'bg-zinc-200 dark:bg-zinc-800 text-zinc-500'
                          }`}
                        >
                          #{item.newPoomsaeSpec?.formNumber || idx + 1}
                        </span>
                      </div>
                      <strong className="text-[11px] truncate block font-black uppercase">
                        {item.name
                          .replace('Taegeuk ', 'T.')
                          .replace(' Poomsae', '')}
                      </strong>
                      <span
                        className={`text-[9px] truncate block ${
                          isSelected ? 'text-white/80' : 'text-zinc-400'
                        }`}
                      >
                        {item.newPoomsaeSpec?.englishConcept ||
                          item.yinyangElement?.split('(')[0] ||
                          item.meaning?.split('.')[0] ||
                          item.beltLevel}
                      </span>
                    </button>
                  )
                })}
            </div>
          </div>

          {/* Kukkiwon 10-Pattern New Poomsae Master Matrix Summary Banner (If activeSeries === 'new-poomsae') */}
          {activeSeries === 'new-poomsae' && (
            <div className="p-6 sm:p-7 rounded-[14px] bg-gradient-to-br from-blue-950/60 via-zinc-900 to-black border border-blue-500/30 text-white shadow-xl space-y-4 font-mono relative overflow-hidden">
              <div className="absolute top-0 right-0 w-72 h-72 bg-blue-500/10 blur-[90px] rounded-full pointer-events-none" />

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-zinc-800 relative z-10">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/20 border border-blue-500/40 flex items-center justify-center text-blue-400 font-bold text-sm">
                    10
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-black uppercase text-white tracking-tight">
                      Kukkiwon WT New Poomsae Master Matrix (새 품새 10대 공인 표준)
                    </h3>
                    <p className="text-[11px] text-zinc-400 font-sans">
                      Official 10-pattern competition &amp; master patterns categorized by physiological age division, geometry, and performance duration.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 flex-wrap">
                  <span className="px-2.5 py-1 rounded-md bg-blue-500/20 border border-blue-500/30 text-blue-300 text-[10px] font-bold">
                    4 Age Divisions
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-zinc-800 border border-zinc-700 text-zinc-300 text-[10px] font-bold">
                    Durations: 70s–105s
                  </span>
                </div>
              </div>

              {/* 4 Age Division Summary Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 relative z-10">
                <div className="p-3.5 rounded-xl bg-zinc-900/80 border border-zinc-800 space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] uppercase font-bold text-blue-400">18세 미만 (Under 18)</span>
                    <span className="text-[9px] text-zinc-400 font-sans">Forms 1–2</span>
                  </div>
                  <strong className="text-xs text-white block">힘차리 (105s) &bull; 야망 (85s)</strong>
                  <p className="text-[11px] text-zinc-400 font-sans leading-snug">
                    Explosive challenge &amp; global ambition. Features 540° jumping back whip kicks, skipping kicks, and fast Kyorugi combinations.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-zinc-900/80 border border-zinc-800 space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] uppercase font-bold text-emerald-400">18~30세 (Ages 18–30)</span>
                    <span className="text-[9px] text-zinc-400 font-sans">Forms 3–5</span>
                  </div>
                  <strong className="text-xs text-white block">새별 (90s) &bull; 나르샤 (90-95s) &bull; 비각 (80s)</strong>
                  <p className="text-[11px] text-zinc-400 font-sans leading-snug">
                    Peak adult athletic mastery. Star diagram, 720° Tornado kick, 100 miraculous flying kicks (*Baekgisintongbigakssul*), and foot blocks.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-zinc-900/80 border border-zinc-800 space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] uppercase font-bold text-amber-400">30~40대 (Ages 30–49)</span>
                    <span className="text-[9px] text-zinc-400 font-sans">Forms 6–7</span>
                  </div>
                  <strong className="text-xs text-white block">어울림 (80s) &bull; 새아라 (90s)</strong>
                  <p className="text-[11px] text-zinc-400 font-sans leading-snug">
                    Harmonious fellowship (Sangsaeng) &amp; new ocean of wisdom. Circular parries, rolling tidal power, and diaphragmatic breath resonance.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-zinc-900/80 border border-zinc-800 space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] uppercase font-bold text-purple-400">50~60대 (Ages 50+)</span>
                    <span className="text-[9px] text-zinc-400 font-sans">Forms 8–10</span>
                  </div>
                  <strong className="text-xs text-white block">한솔 (70s) &bull; 나래 (100s) &bull; 온누리 (100s)</strong>
                  <p className="text-[11px] text-zinc-400 font-sans leading-snug">
                    Evergreen Geumgang pine integrity, soaring wings, and *Hongik Ingan* universal peace. Spinal verticality, Naegong, and 4-direction harmony.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* VIEW 1: MODERN CARDS GRID */}
          {viewLayout === 'grid' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredItems.map((item) => {
                const isSelected = selectedPoomsae?.id === item.id

                return (
                  <div
                    key={item.id}
                    onClick={() => setSelectedPoomsae(item)}
                    className={`group p-5 rounded-[14px] bg-white dark:bg-zinc-900 border transition-all duration-300 cursor-pointer flex flex-col justify-between relative overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 ${
                      isSelected
                        ? 'border-brand-red ring-2 ring-brand-red/20 shadow-brand-glow'
                        : 'border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-700'
                    }`}
                  >
                    <div>
                      {/* Card Top: Trigram / Symbol + Moves */}
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <div className="flex items-center gap-2">
                          <span className="text-xl font-bold font-mono px-2.5 py-1 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-brand-red border border-zinc-200 dark:border-zinc-700">
                            {item.diagramSymbol?.split(' ')[0] || item.trigramSymbol?.split(' ')[0] || '🥋'}
                          </span>
                          <div>
                            <span className="text-[10px] font-mono uppercase text-zinc-400 block">
                              {item.trigramHanja || item.diagramSymbol}
                            </span>
                            <span className="text-xs font-mono font-bold text-zinc-700 dark:text-zinc-300">
                              {item.romanized}
                            </span>
                          </div>
                        </div>

                        <div className="text-right">
                          <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 block">
                            {item.totalMovements} {pt.movesLabel}
                          </span>
                          <span className="text-[9px] font-mono text-zinc-400 mt-0.5 block">
                            {item.performanceDuration || 'approx. 40s'}
                          </span>
                        </div>
                      </div>

                      {/* Title & Korean Name */}
                      <div className="mb-3">
                        <h3 className="text-base sm:text-lg font-black uppercase tracking-tight text-zinc-900 dark:text-white group-hover:text-brand-red transition-colors">
                          {item.name}
                        </h3>
                        <span className="text-xs text-zinc-500 font-mono block">
                          {item.koreanName}
                        </span>
                      </div>

                      {/* Meaning & Concept */}
                      {item.meaning && (
                        <p className="text-xs text-zinc-600 dark:text-zinc-400 font-light line-clamp-2 leading-relaxed mb-3">
                          {item.meaning}
                        </p>
                      )}

                      {/* Black Belt Dan Mastery Badge (If High Dan) */}
                      {item.danMastery && (
                        <div className="flex flex-wrap items-center justify-between gap-2 p-2 rounded-lg bg-zinc-900 text-white dark:bg-zinc-950 border border-zinc-800 mb-3 text-xs font-mono">
                          <BlackBeltStripesBadge
                            stripes={item.danMastery.beltStripes}
                            roman={item.danMastery.beltStripeRoman}
                            compact
                          />
                          <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                            Master: {item.danMastery.masterCharacteristic}
                          </span>
                        </div>
                      )}

                      {/* Kukkiwon New Poomsae Specification Badge (If New Poomsae) */}
                      {item.newPoomsaeSpec && (
                        <div className="flex flex-wrap items-center justify-between gap-2 p-2 rounded-lg bg-blue-950/40 text-white border border-blue-800/40 mb-3 text-xs font-mono">
                          <div className="flex items-center gap-1.5">
                            <span className="px-1.5 py-0.5 rounded bg-blue-500/20 text-blue-300 font-bold text-[10px]">
                              Form #{item.newPoomsaeSpec.formNumber}
                            </span>
                            <span className="text-zinc-200 text-[11px] font-bold">
                              {item.newPoomsaeSpec.englishConcept}
                            </span>
                          </div>
                          <span className="text-[10px] text-blue-300 font-semibold">
                            {item.newPoomsaeSpec.officialDuration}
                          </span>
                        </div>
                      )}

                      {/* Yin-Yang / Element Tag */}
                      {item.yinyangElement && (
                        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-zinc-50 dark:bg-zinc-950 border border-zinc-100 dark:border-zinc-800 text-[10px] font-mono text-zinc-600 dark:text-zinc-400 mb-3">
                          <Sparkles className="w-3 h-3 text-amber-500 shrink-0" />
                          <span className="truncate">{item.yinyangElement}</span>
                        </div>
                      )}
                    </div>

                    {/* Card Footer: Belt / Division & Action */}
                    <div className="pt-3 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between text-xs font-mono">
                      <span className="text-zinc-500 truncate max-w-[170px]">
                        {item.targetAgeDivision || item.beltLevel}
                      </span>

                      <span className="inline-flex items-center gap-1 text-brand-red font-bold group-hover:translate-x-0.5 transition-transform">
                        {pt.inspectBtn} <ChevronRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                )
              })}
            </div>
          )}

          {/* VIEW 2: SYLLABUS COMPARISON MATRIX */}
          {viewLayout === 'matrix' && (
            <div className="p-6 sm:p-8 rounded-[14px] bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-md space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-black uppercase text-zinc-900 dark:text-white tracking-tight flex items-center gap-2">
                  <Table className="w-5 h-5 text-brand-red" /> {currentSeriesInfo.title} Technical Comparison Matrix
                </h3>
                <span className="text-xs font-mono text-zinc-400">{filteredItems.length} Patterns Evaluated</span>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs font-mono border-collapse">
                  <thead>
                    <tr className="border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 text-zinc-500 uppercase text-[10px]">
                      <th className="p-3">{pt.trigramLabel}</th>
                      <th className="p-3">Pattern Name</th>
                      <th className="p-3">Hangul / Hanja</th>
                      <th className="p-3">{pt.movementCountLabel}</th>
                      <th className="p-3">Line Geometry</th>
                      <th className="p-3">{pt.targetDivisionLabel}</th>
                      <th className="p-3 text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800 text-zinc-700 dark:text-zinc-300">
                    {filteredItems.map((item) => (
                      <tr
                        key={item.id}
                        onClick={() => setSelectedPoomsae(item)}
                        className="hover:bg-zinc-50 dark:hover:bg-zinc-800/50 cursor-pointer transition-colors"
                      >
                        <td className="p-3 font-bold text-brand-red text-base">
                          {item.diagramSymbol?.split(' ')[0] || item.trigramSymbol?.split(' ')[0] || '🥋'}
                        </td>
                        <td className="p-3 font-bold text-zinc-900 dark:text-white">
                          {item.name}
                        </td>
                        <td className="p-3 text-zinc-500">
                          {item.koreanName}
                        </td>
                        <td className="p-3">
                          <span className="font-bold text-zinc-900 dark:text-white">{item.totalMovements} Moves</span>
                          <span className="text-[10px] text-zinc-400 block">{item.performanceDuration || '~40s'}</span>
                        </td>
                        <td className="p-3 text-zinc-500">
                          <span className="px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 font-bold text-[11px]">
                            {item.poomsaeLineShape || item.diagramSymbol}
                          </span>
                        </td>
                        <td className="p-3 text-zinc-500">
                          {item.targetAgeDivision || item.beltLevel}
                        </td>
                        <td className="p-3 text-right">
                          <button
                            onClick={(e) => {
                              e.stopPropagation()
                              setSelectedPoomsae(item)
                            }}
                            className="px-2.5 py-1 rounded bg-brand-red text-white text-[10px] font-bold uppercase hover:bg-brand-red/90 transition-colors"
                          >
                            {pt.inspectBtn}
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* VIEW 3: POOMSAE DIAGRAM GEOMETRY GUIDE */}
          {viewLayout === 'lines' && (
            <div className="space-y-4">
              <div className="p-6 rounded-[14px] bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-md">
                <h3 className="text-base font-black uppercase text-zinc-900 dark:text-white tracking-tight mb-2 flex items-center gap-2">
                  <Compass className="w-5 h-5 text-blue-500" /> {pt.spatialGeometryTitle}
                </h3>
                <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed font-light">
                  Under Kukkiwon and WT competition rules, all Poomsae must be performed following precise geometric lines mapped to Korean philosophical symbols. Athletes must begin and end at the exact initial origin mark (allowance: $\le 1$ foot-length).
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredItems.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => setSelectedPoomsae(item)}
                    className="p-5 rounded-[14px] bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-brand-red transition-all cursor-pointer space-y-3"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl font-bold font-mono text-brand-red">
                          {item.diagramSymbol?.split(' ')[0] || item.trigramSymbol?.split(' ')[0]}
                        </span>
                        <div>
                          <h4 className="text-sm font-black uppercase text-zinc-900 dark:text-white">
                            {item.name}
                          </h4>
                          <span className="text-[10px] font-mono text-zinc-400 block">
                            Line: {item.poomsaeLineShape || item.diagramSymbol}
                          </span>
                        </div>
                      </div>
                      <span className="text-xs font-mono font-bold text-zinc-500">
                        {item.totalMovements} {pt.movesLabel}
                      </span>
                    </div>

                    <div className="p-3 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-100 dark:border-zinc-800 text-xs font-mono text-zinc-600 dark:text-zinc-400 space-y-1">
                      <div><strong>Spatial Pattern:</strong> {item.poomsaeLineShape || item.diagramSymbol}</div>
                      <div><strong>Origin Coordinate:</strong> Center Ring Marker #1</div>
                      <div><strong>Kihap Steps:</strong> {(item.steps || []).filter((s: string) => (s || '').toLowerCase().includes('kihap')).length} Designated Stoppages</div>
                    </div>

                    <div className="pt-2 flex justify-between items-center text-xs font-mono">
                      <span className="text-zinc-400 text-[10px]">{item.beltLevel}</span>
                      <span className="text-brand-red font-bold text-xs inline-flex items-center gap-1">
                        View Sequence <ChevronRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {filteredItems.length === 0 && (
            <div className="p-12 text-center rounded-[14px] bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 space-y-3">
              <BookOpen className="w-8 h-8 text-zinc-400 mx-auto" />
              <h4 className="text-base font-bold text-zinc-900 dark:text-white">
                {pt.noPoomsaeFoundTitle}
              </h4>
              <p className="text-xs text-zinc-500 font-mono">
                {pt.noPoomsaeFoundDesc}
              </p>
              <button
                onClick={() => {
                  setSearchQuery('')
                  setSubFilter('all')
                }}
                className="px-4 py-2 rounded-xl bg-brand-red text-white text-xs font-bold font-mono uppercase hover:bg-brand-red/90 transition-all cursor-pointer"
              >
                {pt.resetFiltersBtn}
              </button>
            </div>
          )}
        </div>
      )}

      {/* ==================================================================== */}
      {/* SECTION 2: FOUNDATIONS & MASTER GUIDE (WHAT IS POOMSAE & 3 MISTAKES) */}
      {/* ==================================================================== */}
      {activeMasterTab === 'foundations' && (
        <div className="space-y-6 animate-fade-in">
          {/* Banner: What is Poomsae & Origins */}
          <div className="p-6 sm:p-8 rounded-[14px] bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-md space-y-4">
            <div className="flex items-center gap-2 mb-1">
              <BookOpen className="w-4 h-4 text-emerald-500" />
              <span className="text-xs font-mono font-bold uppercase text-emerald-500 tracking-wider">
                Martial Foundations &amp; Origins
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-zinc-900 dark:text-white">
              {foundationsData.whatIsPoomsae.title}
            </h2>
            <p className="text-xs font-mono text-zinc-400">{foundationsData.koreanTitle}</p>

            <p className="text-sm text-zinc-700 dark:text-zinc-300 font-light leading-relaxed">
              {foundationsData.whatIsPoomsae.definition}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
              <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-xs font-mono space-y-1.5">
                <span className="font-bold text-zinc-900 dark:text-white flex items-center gap-1.5">
                  <Compass className="w-4 h-4 text-emerald-500" /> Partnerless Combat Simulation:
                </span>
                <p className="text-zinc-600 dark:text-zinc-400 font-light leading-relaxed">
                  {foundationsData.whatIsPoomsae.origins}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-xs font-mono space-y-1.5">
                <span className="font-bold text-zinc-900 dark:text-white flex items-center gap-1.5">
                  <Target className="w-4 h-4 text-blue-500" /> Mind &amp; Body Unity Without Pressure:
                </span>
                <p className="text-zinc-600 dark:text-zinc-400 font-light leading-relaxed">
                  {foundationsData.whatIsPoomsae.mindBodyIntegration}
                </p>
              </div>
            </div>
          </div>

          {/* Why Poomsae is Important (Balancing Sport Sparring with Traditional Art) */}
          <div className="p-6 sm:p-8 rounded-[14px] bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-md space-y-5">
            <div className="border-b border-zinc-100 dark:border-zinc-800 pb-3">
              <h3 className="text-lg font-black uppercase text-zinc-900 dark:text-white tracking-tight flex items-center gap-2">
                <Shield className="w-5 h-5 text-emerald-500" /> {foundationsData.whyImportant.title}
              </h3>
              <p className="text-xs text-zinc-500 font-light mt-1">
                {foundationsData.whyImportant.summary}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {foundationsData.whyImportant.pillars.map((pillar, pIdx) => (
                <div
                  key={pIdx}
                  className="p-5 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-2 flex flex-col justify-between"
                >
                  <div>
                    <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-500 block w-fit mb-2">
                      Pillar #{pIdx + 1}
                    </span>
                    <h4 className="text-sm font-black uppercase text-zinc-900 dark:text-white">
                      {pillar.title}
                    </h4>
                    <p className="text-xs text-zinc-600 dark:text-zinc-400 font-light leading-relaxed mt-1">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* The 3 Common Mistakes & Grandmaster Corrections */}
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-black uppercase text-zinc-900 dark:text-white tracking-tight flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-amber-500" /> {foundationsData.commonMistakes.title}
              </h3>
              <p className="text-xs text-zinc-500 font-light mt-0.5">
                {foundationsData.commonMistakes.summary}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {foundationsData.commonMistakes.list.map((mistake, mIdx) => (
                <div
                  key={mIdx}
                  className="p-5 rounded-[14px] bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm space-y-3 flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-amber-500/10 text-amber-600 dark:text-amber-400">
                        Error #{mIdx + 1}
                      </span>
                      <span className="text-xs font-mono text-zinc-400">{mistake.koreanTitle}</span>
                    </div>

                    <h4 className="text-sm font-black uppercase text-zinc-900 dark:text-white">
                      {mistake.title}
                    </h4>

                    <div className="p-3 rounded-lg bg-red-500/5 dark:bg-red-500/10 border border-red-500/10 text-xs font-mono text-zinc-600 dark:text-zinc-300 space-y-1">
                      <strong className="text-red-600 dark:text-red-400 block text-[10px] uppercase">Flaw:</strong>
                      <p className="font-light">{mistake.problem}</p>
                    </div>

                    <div className="p-3 rounded-lg bg-emerald-500/5 dark:bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-zinc-600 dark:text-zinc-300 space-y-1">
                      <strong className="text-emerald-600 dark:text-emerald-400 block text-[10px] uppercase flex items-center gap-1">
                        <Check className="w-3 h-3" /> Grandmaster Correction:
                      </strong>
                      <p className="font-light">{mistake.correction}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 10th Kup Beginner Bridge (Kibon & Saju Drills) */}
          <div className="p-6 sm:p-8 rounded-[14px] bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-md space-y-4">
            <div className="flex items-center gap-2 mb-1">
              <Footprints className="w-4 h-4 text-emerald-500" />
              <span className="text-xs font-mono font-bold uppercase text-emerald-500 tracking-wider">
                {foundationsData.beginnerBridge.targetRank}
              </span>
            </div>
            <h3 className="text-base sm:text-lg font-black uppercase text-zinc-900 dark:text-white tracking-tight">
              {foundationsData.beginnerBridge.title}
            </h3>
            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 font-light leading-relaxed max-w-4xl">
              {foundationsData.beginnerBridge.summary}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2">
              {foundationsData.beginnerBridge.components.map((comp, cIdx) => (
                <div
                  key={cIdx}
                  className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-1.5 text-xs font-mono"
                >
                  <div className="flex items-center justify-between">
                    <strong className="text-zinc-900 dark:text-white text-xs">{comp.name}</strong>
                    <span className="text-[10px] text-zinc-400">{comp.koreanName}</span>
                  </div>
                  <span className="text-[11px] text-emerald-600 dark:text-emerald-400 block">Focus: {comp.focus}</span>
                  <p className="text-zinc-500 font-light leading-relaxed">{comp.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ==================================================================== */}
      {/* SECTION 3: WHAT IS TAEGEUK? (1971 EVOLUTION & 4 OPPOSITION PAIRS) */}
      {/* ==================================================================== */}
      {activeMasterTab === 'taegeuk' && (
        <div className="space-y-6 animate-fade-in">
          {/* Top Banner: Meaning of Taegeuk & Korean Flag */}
          <div className="p-6 sm:p-8 rounded-[14px] bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-md space-y-4">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-zinc-100 dark:border-zinc-800">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Sparkles className="w-4 h-4 text-brand-red" />
                  <span className="text-xs font-mono font-bold uppercase text-brand-red tracking-wider">
                    Cosmology &amp; Core Philosophy
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-zinc-900 dark:text-white">
                  {whatIsTaegeukData.title}
                </h2>
                <span className="text-xs font-mono text-zinc-400">{whatIsTaegeukData.koreanTitle}</span>
              </div>

              {/* Korean Flag Taegeuk Visual Emblem */}
              <div className="flex items-center gap-3 p-3 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 self-start md:self-auto">
                <div className="w-10 h-10 rounded-full bg-gradient-to-b from-red-600 to-blue-700 shadow-inner flex items-center justify-center font-bold text-white text-xs font-serif">
                  ☯
                </div>
                <div className="text-xs font-mono">
                  <span className="font-bold text-zinc-900 dark:text-white block">Taegeuk (太極)</span>
                  <span className="text-zinc-500 text-[10px]">Yang (Red) &bull; Eum (Blue)</span>
                </div>
              </div>
            </div>

            <p className="text-sm text-zinc-700 dark:text-zinc-300 font-light leading-relaxed">
              {whatIsTaegeukData.definition}
            </p>

            <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-xs font-mono text-zinc-600 dark:text-zinc-400 space-y-1">
              <span className="font-bold text-zinc-900 dark:text-white flex items-center gap-1.5">
                <Info className="w-4 h-4 text-blue-500" /> Taegeukgi Flag Connection (태극기):
              </span>
              <p className="font-light leading-relaxed">{whatIsTaegeukData.flagSymbolism}</p>
            </div>
          </div>

          {/* The 5 Core Ideals of Taekwondo in Taegeuk Poomsae */}
          <div className="p-6 sm:p-8 rounded-[14px] bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-md space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-zinc-100 dark:border-zinc-800">
              <div className="space-y-0.5">
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-brand-red" />
                  <span className="text-xs font-mono font-bold uppercase text-brand-red tracking-wider">
                    Martial Principles
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-black uppercase tracking-tight text-zinc-900 dark:text-white">
                  The 5 Core Ideals of Taekwondo in Taegeuk Poomsae
                </h3>
              </div>
              <span className="text-xs font-mono px-2.5 py-1 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 font-bold self-start sm:self-auto">
                평화·일치·창조·백절불굴·영원
              </span>
            </div>

            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 font-light leading-relaxed">
              The Taegeuk Poomsae represent the ideals of the martial art of Taekwondo: <strong>pacifism</strong>, <strong>unity</strong>, <strong>creative spirit</strong>, <strong>indomitable spirit</strong>, and <strong>eternity</strong>. As well as containing the basic physical movements which must be mastered to become proficient in Taekwondo, the poomsae also contain the thoughts which accompany the practice of Taekwondo. It is from these thoughts that Taekwondo gains its ideals.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 pt-2">
              {whatIsTaegeukData.idealsOfTaekwondo?.map((ideal, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-100 dark:border-zinc-800 space-y-1.5 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="w-5 h-5 rounded-full bg-brand-red/10 text-brand-red text-[10px] font-bold font-mono flex items-center justify-center">
                        #{idx + 1}
                      </span>
                      <span className="text-[10px] font-mono text-zinc-400">Ideal</span>
                    </div>
                    <strong className="text-xs font-bold text-zinc-900 dark:text-white block">
                      {ideal.title}
                    </strong>
                    <span className="text-[10px] font-mono text-brand-red block">
                      {ideal.koreanTitle}
                    </span>
                  </div>
                  <p className="text-[11px] text-zinc-600 dark:text-zinc-400 font-light leading-relaxed pt-1 border-t border-zinc-200/50 dark:border-zinc-800">
                    {ideal.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* The Jooyeok (Book of Changes) & Fuh Hi 3,300-Year Heritage */}
          {whatIsTaegeukData.jooyeokPhilosophy && (
            <div className="p-6 sm:p-8 rounded-[14px] bg-gradient-to-br from-zinc-950 via-zinc-900 to-black text-white border border-zinc-800 shadow-xl space-y-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-brand-red/10 blur-[120px] rounded-full pointer-events-none" />

              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-zinc-800 relative z-10">
                <div>
                  <div className="flex items-center gap-2 mb-1 text-xs font-mono text-amber-400 font-bold uppercase tracking-wider">
                    <BookOpen className="w-4 h-4 text-amber-400" />
                    <span>Ancient Metaphysical Origins</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-white">
                    {whatIsTaegeukData.jooyeokPhilosophy.title}
                  </h3>
                  <span className="text-xs font-mono text-zinc-400">
                    {whatIsTaegeukData.jooyeokPhilosophy.subtitle}
                  </span>
                </div>

                <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs font-mono font-bold self-start md:self-auto">
                  <span>Lineage:</span>
                  <span className="text-white font-black tracking-wide">Fuh Hi (3,300 BP) &bull; Jooyeok (주역 / 周易)</span>
                </div>
              </div>

              <div className="relative z-10 space-y-4 text-xs sm:text-sm text-zinc-300 font-light leading-relaxed">
                <p>{whatIsTaegeukData.jooyeokPhilosophy.summary}</p>
                <p>{whatIsTaegeukData.jooyeokPhilosophy.bookOfChangesOrigin}</p>
              </div>

              {/* 3-Column Core Metaphysical Architecture */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 relative z-10 font-mono text-xs">
                {/* Um & Yang Theory */}
                <div className="p-4 rounded-xl bg-zinc-900/90 border border-zinc-800 space-y-2">
                  <div className="flex items-center justify-between text-brand-red font-bold">
                    <span className="uppercase tracking-wider text-[10px]">Metaphysical Forces</span>
                    <span className="text-sm">☯</span>
                  </div>
                  <strong className="text-sm font-bold text-white block">
                    Um &amp; Yang (Eum-Yang)
                  </strong>
                  <p className="text-[11px] text-zinc-400 leading-relaxed font-light font-sans">
                    {whatIsTaegeukData.jooyeokPhilosophy.umYangMetaphysics}
                  </p>
                </div>

                {/* Fuh Hi's 8 Combinations Circle */}
                <div className="p-4 rounded-xl bg-zinc-900/90 border border-zinc-800 space-y-2">
                  <div className="flex items-center justify-between text-amber-400 font-bold">
                    <span className="uppercase tracking-wider text-[10px]">Diagram A &amp; B Circle</span>
                    <span className="text-sm">☰ ☷</span>
                  </div>
                  <strong className="text-sm font-bold text-white block">
                    The 8 Trigrams &amp; Destiny
                  </strong>
                  <p className="text-[11px] text-zinc-400 leading-relaxed font-light font-sans">
                    {whatIsTaegeukData.jooyeokPhilosophy.eightConceptsCircle}
                  </p>
                </div>

                {/* Dialectic of Keon & Gon */}
                <div className="p-4 rounded-xl bg-zinc-900/90 border border-zinc-800 space-y-2">
                  <div className="flex items-center justify-between text-blue-400 font-bold">
                    <span className="uppercase tracking-wider text-[10px]">The Great Circle Paradox</span>
                    <span className="text-sm">乾 ↔ 坤</span>
                  </div>
                  <strong className="text-sm font-bold text-white block">
                    Keon (Heaven) &amp; Gon (Earth)
                  </strong>
                  <p className="text-[11px] text-zinc-400 leading-relaxed font-light font-sans">
                    {whatIsTaegeukData.jooyeokPhilosophy.keonGonDialectic}
                  </p>
                </div>
              </div>

              {/* National Flag & Movement Manifestation Callout */}
              <div className="p-4 rounded-xl bg-white/5 border border-zinc-800 text-xs font-mono space-y-2 relative z-10">
                <div className="flex items-center gap-2 text-white font-bold">
                  <Compass className="w-4 h-4 text-brand-red" />
                  <span>Taeguk-ki Flag &amp; Poomsae Integration:</span>
                </div>
                <p className="text-zinc-300 font-light font-sans leading-relaxed text-xs">
                  {whatIsTaegeukData.jooyeokPhilosophy.koreanFlagSynthesis} {whatIsTaegeukData.jooyeokPhilosophy.trigramManifestation}
                </p>
              </div>
            </div>
          )}

          {/* Historical Evolution: Pre-1971 Palgwae to Taegeuk */}
          <div className="p-6 sm:p-8 rounded-[14px] bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-md space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-zinc-100 dark:border-zinc-800">
              <h3 className="text-base font-black uppercase text-zinc-900 dark:text-white tracking-tight flex items-center gap-2">
                <Clock className="w-4 h-4 text-brand-red" /> {whatIsTaegeukData.pre1971PalgwaeHistory.title}
              </h3>
              <span className="text-xs font-mono font-bold text-brand-red px-2 py-0.5 rounded bg-brand-red/10">
                1971 KTA Resolution
              </span>
            </div>

            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 font-light leading-relaxed">
              {whatIsTaegeukData.pre1971PalgwaeHistory.summary}
            </p>

            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 font-light leading-relaxed">
              {whatIsTaegeukData.pre1971PalgwaeHistory.whyReplaced}
            </p>

            <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-2 text-xs font-mono">
              <span className="font-bold text-zinc-900 dark:text-white block uppercase text-[10px]">
                Key Evolutions from Palgwae to Taegeuk:
              </span>
              <ul className="space-y-1 text-zinc-600 dark:text-zinc-400 font-light">
                {whatIsTaegeukData.pre1971PalgwaeHistory.keyDifferences.map((diff, idx) => (
                  <li key={idx} className="flex items-start gap-1.5">
                    <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{diff}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* The 4 Universal Opposition Pairs */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-black uppercase text-zinc-900 dark:text-white tracking-tight flex items-center gap-2">
                  <Layers className="w-5 h-5 text-brand-red" /> The 4 Universal Opposition Pairs (태극 4대 대립쌍)
                </h3>
                <p className="text-xs text-zinc-500 font-light mt-0.5">
                  Every Taegeuk pattern has an opposite counterpart, mirroring the eternal equilibrium of nature.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {whatIsTaegeukData.theFourDualityPairs.map((pair) => (
                <div
                  key={pair.id}
                  className="p-6 rounded-[14px] bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm space-y-4 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between pb-2 border-b border-zinc-100 dark:border-zinc-800">
                      <h4 className="text-xs font-mono font-bold uppercase text-brand-red">
                        {pair.pairName}
                      </h4>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300">
                        Opposites in Balance
                      </span>
                    </div>

                    {/* Side-by-Side Yang vs Yin Cards */}
                    <div className="grid grid-cols-2 gap-3">
                      {/* Yang Side */}
                      <div className="p-3.5 rounded-xl bg-red-500/5 dark:bg-red-500/10 border border-red-500/20 space-y-2 text-xs font-mono">
                        <div className="flex items-center justify-between">
                          <TrigramVisualLines lines={pair.yangForm.trigramLines} color="#EF2F38" />
                          <span className="text-base font-bold text-brand-red">
                            {pair.yangForm.trigramSymbol}
                          </span>
                        </div>
                        <div>
                          <strong className="text-zinc-900 dark:text-white text-xs block">
                            {pair.yangForm.name}
                          </strong>
                          <span className="text-[10px] text-zinc-400 block">{pair.yangForm.hanja} &bull; {pair.yangForm.trigramName}</span>
                        </div>
                        <div className="text-[11px] text-zinc-600 dark:text-zinc-300 font-light">
                          {pair.yangForm.element}
                        </div>
                        <div className="text-[10px] text-zinc-500 pt-1 border-t border-red-500/10">
                          {pair.yangForm.nature}
                        </div>
                        <button
                          onClick={() => {
                            const found = items.find((i) => i.id === `taegeuk-${pair.yangForm.number}`)
                            if (found) setSelectedPoomsae(decoratePoomsaeItem(found, language))
                          }}
                          className="w-full mt-1 py-1 rounded bg-brand-red/10 hover:bg-brand-red text-brand-red hover:text-white text-[10px] font-bold transition-colors cursor-pointer"
                        >
                          Inspect #{pair.yangForm.number}
                        </button>
                      </div>

                      {/* Yin Side */}
                      <div className="p-3.5 rounded-xl bg-blue-500/5 dark:bg-blue-500/10 border border-blue-500/20 space-y-2 text-xs font-mono">
                        <div className="flex items-center justify-between">
                          <TrigramVisualLines lines={pair.yinForm.trigramLines} color="#0042EA" />
                          <span className="text-base font-bold text-blue-500">
                            {pair.yinForm.trigramSymbol}
                          </span>
                        </div>
                        <div>
                          <strong className="text-zinc-900 dark:text-white text-xs block">
                            {pair.yinForm.name}
                          </strong>
                          <span className="text-[10px] text-zinc-400 block">{pair.yinForm.hanja} &bull; {pair.yinForm.trigramName}</span>
                        </div>
                        <div className="text-[11px] text-zinc-600 dark:text-zinc-300 font-light">
                          {pair.yinForm.element}
                        </div>
                        <div className="text-[10px] text-zinc-500 pt-1 border-t border-blue-500/10">
                          {pair.yinForm.nature}
                        </div>
                        <button
                          onClick={() => {
                            const found = items.find((i) => i.id === `taegeuk-${pair.yinForm.number}`)
                            if (found) setSelectedPoomsae(decoratePoomsaeItem(found, language))
                          }}
                          className="w-full mt-1 py-1 rounded bg-blue-500/10 hover:bg-blue-600 text-blue-600 hover:text-white text-[10px] font-bold transition-colors cursor-pointer"
                        >
                          Inspect #{pair.yinForm.number}
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Philosophical Summary */}
                  <div className="p-3 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-100 dark:border-zinc-800 text-[11px] text-zinc-600 dark:text-zinc-400 font-light leading-relaxed">
                    {pair.philosophicalBalance}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ==================================================================== */}
      {/* SECTION 4: YUDANJA POOMSAE (DAN GRADES 1ST TO 9TH DAN) */}
      {/* ==================================================================== */}
      {activeMasterTab === 'yudanja' && (
        <div className="space-y-6 animate-fade-in">
          {/* Header & Definition */}
          <div className="p-6 sm:p-8 rounded-[14px] bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-md space-y-4">
            <div className="flex items-center gap-2 mb-1">
              <Award className="w-4 h-4 text-blue-500" />
              <span className="text-xs font-mono font-bold uppercase text-blue-500 tracking-wider">
                Official WT &amp; Kukkiwon Black Belt Curriculum
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-zinc-900 dark:text-white">
              {yudanjaGuideData.title}
            </h2>
            <span className="text-xs font-mono text-zinc-400">{yudanjaGuideData.koreanTitle}</span>
            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 font-light leading-relaxed max-w-4xl">
              {yudanjaGuideData.definition}
            </p>

            {/* Authoritative Historical Clarifications Notice */}
            <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs font-mono space-y-1.5 text-zinc-700 dark:text-zinc-300">
              <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400 font-bold">
                <AlertTriangle className="w-4 h-4" /> Authoritative Historical Etymology &amp; Clarifications:
              </div>
              <ul className="space-y-1 text-zinc-600 dark:text-zinc-400 font-light list-disc list-inside">
                <li>
                  <strong className="text-zinc-900 dark:text-white font-bold">{yudanjaGuideData.authoritativeClarifications.hansooNote}</strong>
                </li>
                <li>
                  <strong className="text-zinc-900 dark:text-white font-bold">{yudanjaGuideData.authoritativeClarifications.ilyoNote}</strong>
                </li>
              </ul>
            </div>
          </div>

          {/* Taegeuk vs Yudanja Structural Comparison Table */}
          <div className="p-6 sm:p-8 rounded-[14px] bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-md space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-zinc-100 dark:border-zinc-800">
              <h3 className="text-base font-black uppercase text-zinc-900 dark:text-white tracking-tight flex items-center gap-2">
                <Table className="w-5 h-5 text-blue-500" /> {yudanjaGuideData.contrastWithTaegeuk.title}
              </h3>
              <span className="text-xs font-mono font-bold text-blue-500 px-2 py-0.5 rounded bg-blue-500/10">
                Kup vs Dan Architecture
              </span>
            </div>
            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 font-light">
              {yudanjaGuideData.contrastWithTaegeuk.summary}
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs font-mono border-collapse">
                <thead>
                  <tr className="border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 text-zinc-500 uppercase text-[10px]">
                    <th className="p-3">Architectural Dimension</th>
                    <th className="p-3 text-brand-red">Taegeuk Series (Kup Grades)</th>
                    <th className="p-3 text-blue-500">Yudanja Series (Dan Grades)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800 text-zinc-700 dark:text-zinc-300">
                  {yudanjaGuideData.contrastWithTaegeuk.points.map((ptItem, idx) => (
                    <tr key={idx} className="hover:bg-zinc-50 dark:hover:bg-zinc-800/40">
                      <td className="p-3 font-bold text-zinc-900 dark:text-white">{ptItem.aspect}</td>
                      <td className="p-3 text-zinc-600 dark:text-zinc-400">{ptItem.taegeuk}</td>
                      <td className="p-3 text-zinc-900 dark:text-white font-bold">{ptItem.yudanja}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* ================================================================ */}
          {/* THE OFFICIAL BLACK BELT DAN MASTERY MATRIX (1ST TO 9TH DAN)      */}
          {/* ================================================================ */}
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h3 className="text-lg sm:text-xl font-black uppercase text-zinc-900 dark:text-white tracking-tight flex items-center gap-2">
                  <Award className="w-5 h-5 text-blue-500" /> The Official Black Belt Dan Mastery Matrix (1st to 9th Dan)
                </h3>
                <p className="text-xs text-zinc-500 font-light mt-0.5">
                  The Official WT &amp; Kukkiwon Master Curriculum: Level, Belt with Gold Stripes, Meaning of Name, Hanja Floor Patterns, Meaning of Symbol, and Characteristic of a Master.
                </p>
              </div>

              {/* View Toggle: Official Table Mode vs Interactive Cards */}
              <div className="flex items-center gap-1 p-1 bg-zinc-100 dark:bg-zinc-800 rounded-xl border border-zinc-200 dark:border-zinc-700 shrink-0">
                <button
                  onClick={() => setDanViewMode('table')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold flex items-center gap-1.5 cursor-pointer transition-colors ${
                    danViewMode === 'table'
                      ? 'bg-white dark:bg-zinc-900 text-blue-600 dark:text-blue-400 shadow-sm'
                      : 'text-zinc-500 hover:text-zinc-900 dark:hover:text-white'
                  }`}
                >
                  <Table className="w-3.5 h-3.5" /> Table View
                </button>
                <button
                  onClick={() => setDanViewMode('cards')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold flex items-center gap-1.5 cursor-pointer transition-colors ${
                    danViewMode === 'cards'
                      ? 'bg-white dark:bg-zinc-900 text-blue-600 dark:text-blue-400 shadow-sm'
                      : 'text-zinc-500 hover:text-zinc-900 dark:hover:text-white'
                  }`}
                >
                  <LayoutGrid className="w-3.5 h-3.5" /> Cards View
                </button>
              </div>
            </div>

            {/* MODE 1: OFFICIAL MASTER TABLE (EXACT 1-TO-1 REPLICA OF WT/KUKKIWON SPEC) */}
            {danViewMode === 'table' && (
              <div className="p-6 sm:p-8 rounded-[14px] bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-md space-y-6">
                <div className="overflow-x-auto rounded-xl border border-zinc-200 dark:border-zinc-800">
                  <table className="w-full text-left text-xs font-mono border-collapse">
                    <thead>
                      <tr className="bg-blue-600 dark:bg-blue-900 text-white uppercase text-[11px] font-bold">
                        <th className="p-3 text-center border-r border-blue-500/30">Level</th>
                        <th className="p-3 text-center border-r border-blue-500/30">Belt</th>
                        <th className="p-3 border-r border-blue-500/30">Form Name</th>
                        <th className="p-3 border-r border-blue-500/30">Meaning of Name</th>
                        <th className="p-3 border-r border-blue-500/30 text-center">Floor Pattern</th>
                        <th className="p-3 border-r border-blue-500/30">Meaning of Symbol</th>
                        <th className="p-3 border-r border-blue-500/30 text-center">Symbol</th>
                        <th className="p-3 border-r border-blue-500/30">Characteristic of a Master</th>
                        <th className="p-3 text-center">Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800 text-zinc-800 dark:text-zinc-200 font-normal">
                      {yudanjaGuideData.floorPatterns.map((fp, idx) => {
                        const idMap: Record<number, string> = {
                          0: 'koryo',
                          1: 'keumgang',
                          2: 'taebaek',
                          3: 'pyongwon',
                          4: 'sipjin',
                          5: 'jitae',
                          6: 'cheonkwon',
                          7: 'hansu',
                          8: 'ilyeo',
                        }
                        const targetId = idMap[idx]

                        return (
                          <tr
                            key={idx}
                            className="hover:bg-blue-50/50 dark:hover:bg-zinc-800/60 transition-colors"
                          >
                            {/* 1. Level */}
                            <td className="p-3 text-center font-bold text-zinc-900 dark:text-white whitespace-nowrap border-r border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-950/40">
                              {fp.danRank.split(' ')[0]}
                            </td>

                            {/* 2. Belt with gold stripes */}
                            <td className="p-3 text-center border-r border-zinc-200 dark:border-zinc-800 whitespace-nowrap">
                              <BlackBeltStripesBadge
                                stripes={fp.beltStripes || idx + 1}
                                roman={fp.beltStripeRoman}
                              />
                            </td>

                            {/* 3. Form Name */}
                            <td className="p-3 font-bold border-r border-zinc-200 dark:border-zinc-800 whitespace-nowrap">
                              <span className="text-zinc-900 dark:text-white block text-sm font-black">
                                {fp.name}
                              </span>
                              <span className="text-[11px] text-zinc-400 font-normal block">
                                {fp.koreanName}
                              </span>
                            </td>

                            {/* 4. Meaning of Name */}
                            <td className="p-3 border-r border-zinc-200 dark:border-zinc-800 max-w-[180px]">
                              <span className="text-xs text-zinc-700 dark:text-zinc-300 font-medium">
                                {fp.meaningOfName || fp.characterMeaning}
                              </span>
                            </td>

                            {/* 5. Floor Pattern Shape */}
                            <td className="p-3 text-center border-r border-zinc-200 dark:border-zinc-800">
                              <span className="px-2 py-1 rounded bg-zinc-100 dark:bg-zinc-800 text-blue-600 dark:text-blue-400 font-bold text-xs inline-block">
                                {fp.floorPatternShape}
                              </span>
                            </td>

                            {/* 6. Meaning of Symbol */}
                            <td className="p-3 border-r border-zinc-200 dark:border-zinc-800 max-w-[200px]">
                              <span className="text-xs text-zinc-600 dark:text-zinc-400 font-light">
                                {fp.meaningOfSymbol || fp.characterMeaning}
                              </span>
                            </td>

                            {/* 7. Hanja Symbol */}
                            <td className="p-3 text-center border-r border-zinc-200 dark:border-zinc-800">
                              <span className="text-2xl font-black font-serif text-zinc-900 dark:text-white">
                                {fp.hanjaCharacter}
                              </span>
                            </td>

                            {/* 8. Characteristic of a Master */}
                            <td className="p-3 border-r border-zinc-200 dark:border-zinc-800">
                              <span className="px-2.5 py-1 rounded-md text-xs font-bold bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 whitespace-nowrap">
                                {fp.masterCharacteristic || 'Master'}
                              </span>
                            </td>

                            {/* 9. Action Button */}
                            <td className="p-3 text-center whitespace-nowrap">
                              <button
                                onClick={() => {
                                  const found = items.find((i) => i.id === targetId)
                                  if (found) setSelectedPoomsae(decoratePoomsaeItem(found, language))
                                }}
                                className="px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-bold text-[11px] uppercase tracking-wider transition-all cursor-pointer shadow-sm"
                              >
                                Inspect
                              </button>
                            </td>
                          </tr>
                        )
                      })}
                    </tbody>
                  </table>
                </div>

                {/* Footnotes Callout Panel */}
                <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-xs font-mono space-y-2 text-zinc-600 dark:text-zinc-400">
                  <div className="text-zinc-900 dark:text-white font-bold text-xs uppercase flex items-center gap-1.5">
                    <Info className="w-3.5 h-3.5 text-blue-500" /> Historical Etymology &amp; Mythological Footnotes:
                  </div>
                  <p className="leading-relaxed">
                    <strong className="text-zinc-800 dark:text-zinc-200">¹ Diamond Mountain (Geumgangsan):</strong> Named after Mount Keumgang and the Buddhist concept of the Vajra (indestructible diamond), symbolizing adamantine hardness, spiritual moral clarity, and towering mountain majesty.
                  </p>
                  <p className="leading-relaxed">
                    <strong className="text-zinc-800 dark:text-zinc-200">² Ultimate Brightness:</strong> Sacred Mount Baekdu (Taebaeksan) where Dangun founded ancient Gojoseon under the humanitarian doctrine of Hongik Ingan (홍익인간 — broadly benefiting all humanity).
                  </p>
                  <p className="leading-relaxed">
                    <strong className="text-zinc-800 dark:text-zinc-200">³ The ten eternal entities (Sipjangsaeng / 십장생):</strong> Traditional Korean symbols of perpetual longevity and cosmic harmony: sun, moon, mountain, water, rock, pine tree, herb of eternal youth (bulnocho), tortoise, crane, and deer.
                  </p>
                </div>
              </div>
            )}

            {/* MODE 2: INTERACTIVE VISUAL CARDS GRID */}
            {danViewMode === 'cards' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {combinedYudanjaCards.map((fp, idx) => (
                  <div
                    key={`dan-card-${fp.targetId}-${idx}`}
                    className="p-5 rounded-[14px] bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm hover:shadow-xl hover:border-blue-500/40 transition-all font-mono text-xs flex flex-col justify-between space-y-3"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <BlackBeltStripesBadge
                          stripes={fp.beltStripes || idx + 1}
                          roman={fp.beltStripeRoman}
                        />
                        <span className="text-2xl font-bold font-serif text-blue-500">
                          {fp.hanjaCharacter}
                        </span>
                      </div>

                      <div>
                        <div className="flex items-center justify-between">
                          <h4 className="text-base font-black uppercase text-zinc-900 dark:text-white">
                            {fp.name}
                          </h4>
                          <span className="text-xs text-zinc-400">{fp.koreanName}</span>
                        </div>
                        <span className="text-xs font-bold text-zinc-600 dark:text-zinc-300 block mt-0.5">
                          Meaning: {fp.meaningOfName || fp.characterMeaning}
                        </span>
                      </div>

                      <div className="p-2.5 rounded-lg bg-zinc-50 dark:bg-zinc-950 border border-zinc-100 dark:border-zinc-800 space-y-1 text-[11px]">
                        <div className="text-zinc-500">
                          <strong>Symbol Concept:</strong> {fp.meaningOfSymbol || fp.characterMeaning}
                        </div>
                        <div className="text-zinc-500">
                          <strong>Floor Geometry:</strong> {fp.floorPatternShape}
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-1">
                        <span className="text-[10px] text-zinc-400 uppercase">Characteristic:</span>
                        <span className="px-2.5 py-0.5 rounded-md text-xs font-bold bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
                          {fp.masterCharacteristic || 'Master'}
                        </span>
                      </div>

                      {fp.philosophicalEssence && (
                        <p className="text-zinc-600 dark:text-zinc-400 text-xs font-light pt-2 border-t border-zinc-100 dark:border-zinc-800 leading-relaxed font-sans">
                          <strong>Philosophical Mandate:</strong> {fp.philosophicalEssence}
                        </p>
                      )}

                      {fp.keyTechniques && (
                        <div className="p-2.5 rounded-lg bg-zinc-50 dark:bg-zinc-950 border border-zinc-100 dark:border-zinc-800 text-[11px] text-zinc-500">
                          <strong className="text-zinc-700 dark:text-zinc-300">Key Techniques:</strong> {fp.keyTechniques}
                        </div>
                      )}

                      {fp.historicalCorrectionNote && (
                        <div className="p-2.5 rounded-lg bg-amber-500/10 text-[10px] text-amber-700 dark:text-amber-400 font-mono">
                          💡 {fp.historicalCorrectionNote}
                        </div>
                      )}
                    </div>

                    <div className="pt-3 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between">
                      <span className="text-[10px] text-zinc-400">{fp.totalMoves} Moves</span>
                      <button
                        onClick={() => {
                          const found = items.find((i) => i.id === fp.targetId)
                          if (found) setSelectedPoomsae(decoratePoomsaeItem(found, language))
                        }}
                        className="text-xs font-bold text-blue-500 hover:text-blue-600 inline-flex items-center gap-1 cursor-pointer"
                      >
                        Inspect Form <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Gradings & Tournament Competition Dynamics */}
          <div className="p-6 sm:p-8 rounded-[14px] bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-md space-y-4">
            <h3 className="text-base sm:text-lg font-black uppercase text-zinc-900 dark:text-white tracking-tight flex items-center gap-2">
              <Zap className="w-5 h-5 text-amber-500" /> {yudanjaGuideData.gradingsAndCompetition.title}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-mono">
              <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-1.5">
                <span className="font-bold text-zinc-900 dark:text-white block uppercase text-[10px]">
                  Non-Linear Dan Progression:
                </span>
                <p className="text-zinc-600 dark:text-zinc-400 font-light leading-relaxed">
                  {yudanjaGuideData.gradingsAndCompetition.nonLinearProgression}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-1.5">
                <span className="font-bold text-zinc-900 dark:text-white block uppercase text-[10px]">
                  Competition Floor Spatial Challenge:
                </span>
                <p className="text-zinc-600 dark:text-zinc-400 font-light leading-relaxed">
                  {yudanjaGuideData.gradingsAndCompetition.competitionDynamics}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-1.5">
                <span className="font-bold text-zinc-900 dark:text-white block uppercase text-[10px]">
                  Self-Defense (Hosinsul Bunkai):
                </span>
                <p className="text-zinc-600 dark:text-zinc-400 font-light leading-relaxed">
                  {yudanjaGuideData.gradingsAndCompetition.selfDefenseBunkai}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ==================================================================== */}
      {/* 5. DEEP-DIVE COMPREHENSIVE DOSSIER MODAL WITH PRACTICE STEPPER */}
      {/* ==================================================================== */}
      {selectedPoomsae && (
        <div
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-6 md:p-10 bg-black/80 backdrop-blur-sm animate-fade-in"
          onClick={() => setSelectedPoomsae(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="poomsae-modal-title"
        >
          <div
            className="relative w-full max-w-4xl max-h-[92dvh] sm:max-h-[90dvh] bg-white dark:bg-zinc-900 rounded-t-[20px] sm:rounded-[14px] border border-zinc-200 dark:border-zinc-800 shadow-2xl overflow-y-auto flex flex-col justify-between"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header with Quick Navigation */}
            <div className="sticky top-0 z-20 bg-white/95 dark:bg-zinc-900/95 backdrop-blur-md p-4 sm:p-6 border-b border-zinc-200 dark:border-zinc-800 flex items-center justify-between gap-3 sm:gap-4">
              <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                <span className="text-xl sm:text-2xl font-bold font-mono px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-xl bg-brand-red/10 text-brand-red border border-brand-red/20 shrink-0">
                  {selectedPoomsae.diagramSymbol?.split(' ')[0] || selectedPoomsae.trigramSymbol?.split(' ')[0] || '🥋'}
                </span>
                <div className="min-w-0">
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <span className="text-[10px] font-mono font-bold uppercase text-brand-red truncate">
                      {seriesConfig[selectedPoomsae.poomsaeSeries || 'taegeuk'].title}
                    </span>
                    <span className="text-zinc-300 dark:text-zinc-700 shrink-0">&bull;</span>
                    <span className="text-[10px] font-mono text-zinc-400 truncate">
                      {selectedPoomsae.beltLevel}
                    </span>
                  </div>
                  <h3 id="poomsae-modal-title" className="text-base sm:text-xl font-black uppercase tracking-tight text-zinc-900 dark:text-white truncate">
                    {selectedPoomsae.name}
                  </h3>
                </div>
              </div>

              {/* Header Right: Prev/Next Quick Navigation + Full Page + Close */}
              <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
                <div className="hidden sm:flex items-center gap-1 bg-zinc-100 dark:bg-zinc-800 p-1 rounded-lg">
                  <button
                    onClick={handlePrevPoomsae}
                    disabled={currentModalIndex <= 0}
                    title="Previous Form"
                    className="p-1.5 rounded hover:bg-zinc-200 dark:hover:bg-zinc-700 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer text-zinc-600 dark:text-zinc-300"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <span className="text-[10px] font-mono text-zinc-500 px-1">
                    {currentModalIndex + 1}/{filteredItems.length}
                  </span>
                  <button
                    onClick={handleNextPoomsae}
                    disabled={currentModalIndex >= filteredItems.length - 1}
                    title="Next Form"
                    className="p-1.5 rounded hover:bg-zinc-200 dark:hover:bg-zinc-700 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer text-zinc-600 dark:text-zinc-300"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>

                <Link
                  href={`/library/poomsae/${selectedPoomsae.slug}`}
                  className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-xs font-mono text-zinc-700 dark:text-zinc-200 transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" /> {pt.fullPageBtn}
                </Link>

                <button
                  onClick={() => setSelectedPoomsae(null)}
                  className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors cursor-pointer min-w-[44px] min-h-[44px] flex items-center justify-center"
                  aria-label="Close dossier"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Body Content */}
            <div className="p-5 sm:p-8 space-y-6">
              {/* Top Attribute Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono">
                <div className="p-3.5 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800">
                  <span className="text-[10px] text-zinc-400 uppercase block">{pt.trigramLabel}</span>
                  <strong className="text-zinc-900 dark:text-white text-xs block mt-0.5">
                    {selectedPoomsae.trigramSymbol || selectedPoomsae.diagramSymbol || 'None'}
                  </strong>
                </div>

                <div className="p-3.5 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800">
                  <span className="text-[10px] text-zinc-400 uppercase block">{pt.hanjaElementLabel}</span>
                  <strong className="text-zinc-900 dark:text-white text-xs block mt-0.5 truncate">
                    {selectedPoomsae.trigramHanja || selectedPoomsae.yinyangElement || 'Martial Form'}
                  </strong>
                </div>

                <div className="p-3.5 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800">
                  <span className="text-[10px] text-zinc-400 uppercase block">{pt.movementCountLabel}</span>
                  <strong className="text-zinc-900 dark:text-white text-xs block mt-0.5">
                    {selectedPoomsae.totalMovements} {pt.movesLabel}
                  </strong>
                </div>

                <div className="p-3.5 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800">
                  <span className="text-[10px] text-zinc-400 uppercase block">{pt.tempoLabel}</span>
                  <strong className="text-zinc-900 dark:text-white text-xs block mt-0.5">
                    {selectedPoomsae.performanceDuration || 'approx. 45 sec'}
                  </strong>
                </div>
              </div>

              {/* Duality Opposition Counterpart Notice (If Taegeuk) */}
              {selectedPoomsae.poomsaeSeries === 'taegeuk' && (() => {
                const counterpart = getTaegeukCounterpart(selectedPoomsae.id)
                if (!counterpart) return null

                return (
                  <div className="p-4 rounded-xl bg-gradient-to-r from-red-500/10 via-zinc-100 to-blue-500/10 dark:from-red-500/15 dark:via-zinc-900 dark:to-blue-500/15 border border-zinc-300 dark:border-zinc-700 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono">
                    <div className="space-y-0.5">
                      <span className="text-[10px] uppercase font-bold text-brand-red flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-brand-red" /> Philosophical Duality Pair:
                      </span>
                      <p className="text-zinc-800 dark:text-zinc-200">
                        Opposite Counterpart: <strong>{counterpart.name}</strong> ({counterpart.trigramSymbol || counterpart.diagramSymbol}) &bull; {counterpart.yinyangElement?.split('(')[0]}
                      </p>
                    </div>
                    <button
                      onClick={() => setSelectedPoomsae(decoratePoomsaeItem(counterpart, language))}
                      className="px-3 py-1.5 rounded-lg bg-zinc-900 text-white dark:bg-white dark:text-black font-bold text-xs hover:bg-brand-red dark:hover:bg-brand-red dark:hover:text-white transition-colors cursor-pointer shrink-0"
                    >
                      Switch to Opposite Form &rarr;
                    </button>
                  </div>
                )
              })()}

              {/* Taegeuk Jooyeok Trigram & Philosophical Directive Dossier (If Taegeuk) */}
              {selectedPoomsae.taegeukPhilosophy && (
                <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-zinc-950 via-zinc-900 to-black text-white border border-zinc-700/80 shadow-2xl space-y-5 font-mono">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-zinc-800">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-zinc-800 border border-zinc-700 flex items-center justify-center text-3xl font-serif text-brand-red font-bold select-none">
                        {selectedPoomsae.taegeukPhilosophy.trigramSymbol}
                      </div>
                      <div>
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="text-[10px] uppercase tracking-wider text-brand-red font-bold">
                            Jooyeok Trigram Lineage
                          </span>
                          <span className="text-zinc-500">&bull;</span>
                          <span className="text-[10px] text-zinc-300 font-semibold">
                            Rank: {selectedPoomsae.taegeukPhilosophy.practitionerRank}
                          </span>
                          {selectedPoomsae.taegeukPhilosophy.flagPresence && (
                            <span className="px-2 py-0.5 rounded text-[9px] font-bold bg-blue-500/20 text-blue-300 border border-blue-500/40">
                              Taeguk-ki Trigram (태극기 4대 괘)
                            </span>
                          )}
                        </div>
                        <h4 className="text-lg sm:text-xl font-black tracking-tight text-white mt-0.5">
                          {selectedPoomsae.taegeukPhilosophy.trigramName} &bull; {selectedPoomsae.taegeukPhilosophy.koreanTrigramName} &bull; {selectedPoomsae.taegeukPhilosophy.naturalElement}
                        </h4>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1.5 rounded-lg text-xs font-black uppercase tracking-wider bg-brand-red/20 text-brand-red border border-brand-red/40 shadow-sm">
                        Symbol: {selectedPoomsae.taegeukPhilosophy.naturalElement.split('(')[0].trim()}
                      </span>
                    </div>
                  </div>

                  {/* Core Concept & Philosophical Directive */}
                  <div className="grid sm:grid-cols-2 gap-4 text-xs">
                    <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1.5">
                      <span className="text-[10px] uppercase tracking-wider text-amber-400 font-bold block">
                        Core Universal Concept:
                      </span>
                      <p className="text-zinc-300 font-light font-sans leading-relaxed text-xs">
                        {selectedPoomsae.taegeukPhilosophy.coreConcept}
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1.5">
                      <span className="text-[10px] uppercase tracking-wider text-emerald-400 font-bold block">
                        Cosmic Dialectic &amp; Balance:
                      </span>
                      <p className="text-zinc-300 font-light font-sans leading-relaxed text-xs">
                        {selectedPoomsae.taegeukPhilosophy.dialecticRole || 'Maintains universal equilibrium across the 8 trigrams.'}
                      </p>
                    </div>
                  </div>

                  {/* Philosophical Execution Directive */}
                  <div className="p-4 rounded-xl bg-brand-red/10 border border-brand-red/30 space-y-1.5">
                    <div className="flex items-center gap-2 text-brand-red font-bold text-xs uppercase tracking-wider">
                      <Sparkles className="w-3.5 h-3.5" /> Philosophical Execution Directive (수련 요결):
                    </div>
                    <p className="text-zinc-200 font-light font-sans leading-relaxed text-xs sm:text-sm">
                      {selectedPoomsae.taegeukPhilosophy.philosophicalDirective}
                    </p>
                  </div>

                  {/* Introduced Key Techniques */}
                  {selectedPoomsae.taegeukPhilosophy.introducedKeyTechniques?.length > 0 && (
                    <div className="space-y-2 pt-1">
                      <span className="text-[10px] uppercase tracking-wider text-zinc-400 font-bold block">
                        Key Newly Introduced Techniques in this Poomsae:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {selectedPoomsae.taegeukPhilosophy.introducedKeyTechniques.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-2.5 py-1 rounded-lg bg-zinc-900 border border-zinc-800 text-[11px] text-zinc-200 font-sans flex items-center gap-1.5"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-brand-red shrink-0" />
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Black Belt Dan Mastery Specification Dossier (If High Dan) */}
              {selectedPoomsae.danMastery && (
                <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-zinc-900 via-black to-zinc-950 text-white border border-zinc-700/80 shadow-2xl space-y-5 font-mono">
                  {/* Banner Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-zinc-800">
                    <div className="flex items-center gap-3">
                      <BlackBeltStripesBadge
                        stripes={selectedPoomsae.danMastery.beltStripes}
                        roman={selectedPoomsae.danMastery.beltStripeRoman}
                      />
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] uppercase tracking-wider text-amber-400 font-bold">
                            Official WT &amp; Kukkiwon Dan Mastery
                          </span>
                          <span className="text-zinc-500">&bull;</span>
                          <span className="text-[10px] text-zinc-400 font-semibold">
                            {selectedPoomsae.danMastery.danRank} ({selectedPoomsae.danMastery.koreanDanRank})
                          </span>
                        </div>
                        <h4 className="text-lg sm:text-xl font-black tracking-tight text-white mt-0.5">
                          {selectedPoomsae.danMastery.formName} ({selectedPoomsae.danMastery.koreanFormName})
                        </h4>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1.5 rounded-lg text-xs font-black uppercase tracking-wider bg-amber-400/20 text-amber-300 border border-amber-400/40 shadow-sm">
                        Master Virtue: {selectedPoomsae.danMastery.masterCharacteristic}
                      </span>
                    </div>
                  </div>

                  {/* 4-Column Attribute Cards */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                    <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-1">
                      <span className="text-[10px] text-zinc-400 uppercase block">Meaning of Name</span>
                      <strong className="text-zinc-100 text-xs block">
                        {selectedPoomsae.danMastery.meaningOfName}
                      </strong>
                    </div>

                    <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-1">
                      <span className="text-[10px] text-zinc-400 uppercase block">Floor Pattern</span>
                      <strong className="text-blue-400 text-xs block font-bold">
                        {selectedPoomsae.danMastery.floorPatternName}
                      </strong>
                    </div>

                    <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-1">
                      <span className="text-[10px] text-zinc-400 uppercase block">Hanja Symbol</span>
                      <div className="flex items-center gap-2">
                        <span className="text-xl font-black font-serif text-amber-400">
                          {selectedPoomsae.danMastery.symbol}
                        </span>
                        <strong className="text-zinc-200 text-[11px] truncate">
                          {selectedPoomsae.danMastery.meaningOfSymbol}
                        </strong>
                      </div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-1">
                      <span className="text-[10px] text-zinc-400 uppercase block">Master Virtue</span>
                      <strong className="text-amber-300 text-xs block">
                        {selectedPoomsae.danMastery.masterCharacteristic}
                      </strong>
                    </div>
                  </div>

                  {/* Master's Philosophical Mandate */}
                  <div className="p-4 rounded-xl bg-zinc-900/90 border border-zinc-800 space-y-1.5 text-xs">
                    <div className="flex items-center gap-2 text-amber-400 font-bold text-[11px] uppercase tracking-wider">
                      <Award className="w-3.5 h-3.5" /> Dan Mastery Doctrine &amp; Philosophical Mandate:
                    </div>
                    <p className="text-zinc-300 font-light leading-relaxed text-xs">
                      {selectedPoomsae.danMastery.philosophicalMandate}
                    </p>
                  </div>

                  {/* Ready Stance (Junbi-seogi) Callout */}
                  {selectedPoomsae.danMastery.junbiSeogi && (
                    <div className="p-4 rounded-xl bg-blue-950/30 border border-blue-500/30 space-y-1.5 text-xs">
                      <div className="flex items-center gap-2 text-blue-400 font-bold text-[11px] uppercase tracking-wider">
                        <Footprints className="w-3.5 h-3.5 text-blue-400" /> Ready Stance (준비서기) &amp; Danjeon Respiration:
                      </div>
                      <p className="text-zinc-300 font-light leading-relaxed text-xs">
                        {selectedPoomsae.danMastery.junbiSeogi}
                      </p>
                    </div>
                  )}

                  {/* Newly Introduced Key Techniques Chips */}
                  {selectedPoomsae.danMastery.introducedKeyTechniques &&
                    selectedPoomsae.danMastery.introducedKeyTechniques.length > 0 && (
                      <div className="p-4 rounded-xl bg-zinc-900/90 border border-zinc-800 space-y-2.5 text-xs">
                        <div className="flex items-center gap-2 text-amber-400 font-bold text-[11px] uppercase tracking-wider">
                          <Sparkles className="w-3.5 h-3.5" /> Introduced Key Techniques (신규 도입 기술):
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {selectedPoomsae.danMastery.introducedKeyTechniques.map((tech, idx) => (
                            <span
                              key={idx}
                              className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-zinc-800/90 text-amber-200 border border-amber-500/20 hover:border-amber-400/40 transition-colors"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                  {/* Movement Characteristics */}
                  {selectedPoomsae.danMastery.movementCharacteristics && (
                    <div className="p-4 rounded-xl bg-zinc-900/90 border border-zinc-800 space-y-1.5 text-xs">
                      <div className="flex items-center gap-2 text-blue-400 font-bold text-[11px] uppercase tracking-wider">
                        <Zap className="w-3.5 h-3.5" /> Dynamic Movement Characteristics (동작 특성):
                      </div>
                      <p className="text-zinc-300 font-light leading-relaxed text-xs">
                        {selectedPoomsae.danMastery.movementCharacteristics}
                      </p>
                    </div>
                  )}

                  {/* Classical Origin & Historical Lineage */}
                  {selectedPoomsae.danMastery.historicalEtymology && (
                    <div className="p-4 rounded-xl bg-zinc-900/90 border border-zinc-800 space-y-1.5 text-xs">
                      <div className="flex items-center gap-2 text-amber-300 font-bold text-[11px] uppercase tracking-wider">
                        <BookOpen className="w-3.5 h-3.5" /> Classical Lineage &amp; Historical Background (역사적 유래):
                      </div>
                      <p className="text-zinc-300 font-light leading-relaxed text-xs">
                        {selectedPoomsae.danMastery.historicalEtymology}
                      </p>
                    </div>
                  )}

                  {/* Footnote if available */}
                  {selectedPoomsae.danMastery.nameFootnote && (
                    <div className="p-3 rounded-lg bg-amber-500/10 border border-amber-500/20 text-[11px] font-light text-amber-200/90 leading-relaxed">
                      💡 <strong>Etymology Note:</strong> {selectedPoomsae.danMastery.nameFootnote}
                    </div>
                  )}
                </div>
              )}

              {/* Kukkiwon New Poomsae Specification Dossier (If New Poomsae) */}
              {selectedPoomsae.newPoomsaeSpec && (
                <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-blue-950/90 via-zinc-950 to-black text-white border border-blue-500/30 shadow-2xl space-y-5 font-mono relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 blur-[100px] rounded-full pointer-events-none" />

                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-zinc-800 relative z-10">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-blue-950 border border-blue-700/60 flex items-center justify-center text-lg font-mono font-black text-blue-400 shrink-0">
                        #{selectedPoomsae.newPoomsaeSpec.formNumber.toString().padStart(2, '0')}
                      </div>
                      <div>
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="text-[10px] uppercase tracking-wider text-blue-400 font-bold">
                            Kukkiwon Official New Poomsae (새 품새)
                          </span>
                          <span className="text-zinc-500">&bull;</span>
                          <span className="text-[10px] text-zinc-300 font-semibold">
                            {selectedPoomsae.newPoomsaeSpec.targetAge}
                          </span>
                        </div>
                        <h4 className="text-lg sm:text-xl font-black tracking-tight text-white mt-0.5 flex items-center gap-2 flex-wrap">
                          <span>{selectedPoomsae.newPoomsaeSpec.koreanName}</span>
                          <span className="text-zinc-500 text-sm font-normal">({selectedPoomsae.romanized})</span>
                          <span className="text-zinc-600">&bull;</span>
                          <span className="text-blue-400">{selectedPoomsae.newPoomsaeSpec.englishConcept}</span>
                        </h4>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1.5 rounded-lg text-xs font-black uppercase tracking-wider bg-blue-500/20 text-blue-300 border border-blue-500/40 shadow-sm flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5" />
                        {selectedPoomsae.newPoomsaeSpec.officialDuration}
                      </span>
                    </div>
                  </div>

                  {/* 3-Column Attribute Grid */}
                  <div className="grid sm:grid-cols-3 gap-3 text-xs relative z-10">
                    <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-1">
                      <span className="text-[10px] text-blue-300 uppercase block font-bold">Floor Pattern &amp; Line Symbol</span>
                      <strong className="text-zinc-100 text-xs block font-light leading-relaxed">
                        {selectedPoomsae.newPoomsaeSpec.lineSymbolMeaning}
                      </strong>
                    </div>

                    <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-1">
                      <span className="text-[10px] text-blue-300 uppercase block font-bold">Official Kukkiwon Meaning</span>
                      <strong className="text-zinc-200 text-xs block font-light leading-relaxed">
                        {selectedPoomsae.newPoomsaeSpec.officialMeaning}
                      </strong>
                    </div>

                    <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-1">
                      <span className="text-[10px] text-blue-300 uppercase block font-bold">Age Division &amp; Rationale</span>
                      <strong className="text-zinc-300 text-xs block font-light leading-relaxed">
                        {selectedPoomsae.newPoomsaeSpec.developmentRationale || `Engineered specifically for ${selectedPoomsae.newPoomsaeSpec.targetAge}.`}
                      </strong>
                    </div>
                  </div>

                  {/* Technical Characteristics (Kicks & Hands) */}
                  {selectedPoomsae.newPoomsaeSpec.technicalCharacteristics && (
                    <div className="p-4 rounded-xl bg-blue-950/30 border border-blue-800/40 space-y-3 relative z-10 text-xs">
                      <div className="flex items-center justify-between flex-wrap gap-2">
                        <div className="flex items-center gap-2 text-blue-300 font-bold text-[11px] uppercase tracking-wider">
                          <Zap className="w-3.5 h-3.5" /> Technical Arsenal &amp; Signature Movements:
                        </div>
                        {selectedPoomsae.newPoomsaeSpec.technicalCharacteristics.specialtyFocus && (
                          <span className="text-[10px] text-zinc-400 font-sans">
                            {selectedPoomsae.newPoomsaeSpec.technicalCharacteristics.specialtyFocus}
                          </span>
                        )}
                      </div>

                      {/* Signature Kicks */}
                      {selectedPoomsae.newPoomsaeSpec.technicalCharacteristics.signatureKicks &&
                        selectedPoomsae.newPoomsaeSpec.technicalCharacteristics.signatureKicks.length > 0 && (
                          <div className="space-y-1.5">
                            <span className="text-[10px] uppercase text-zinc-400 font-bold block">
                              Signature Kicking Techniques:
                            </span>
                            <div className="flex flex-wrap gap-1.5">
                              {selectedPoomsae.newPoomsaeSpec.technicalCharacteristics.signatureKicks.map((kick, idx) => (
                                <span
                                  key={idx}
                                  className="px-2.5 py-1 rounded-lg bg-zinc-900 border border-zinc-800 text-[11px] text-zinc-200 font-sans flex items-center gap-1.5"
                                >
                                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                                  {kick}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}

                      {/* Signature Hands */}
                      {selectedPoomsae.newPoomsaeSpec.technicalCharacteristics.signatureHands &&
                        selectedPoomsae.newPoomsaeSpec.technicalCharacteristics.signatureHands.length > 0 && (
                          <div className="space-y-1.5 pt-1">
                            <span className="text-[10px] uppercase text-zinc-400 font-bold block">
                              Signature Hand &amp; Blocking Systems:
                            </span>
                            <div className="flex flex-wrap gap-1.5">
                              {selectedPoomsae.newPoomsaeSpec.technicalCharacteristics.signatureHands.map((hand, idx) => (
                                <span
                                  key={idx}
                                  className="px-2.5 py-1 rounded-lg bg-zinc-900 border border-zinc-800 text-[11px] text-zinc-200 font-sans flex items-center gap-1.5"
                                >
                                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                                  {hand}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                    </div>
                  )}

                  {/* Etymology / Classical Origin Note if available */}
                  {selectedPoomsae.newPoomsaeSpec.etymologyOrigin && (
                    <div className="p-3 rounded-lg bg-blue-500/10 border border-blue-500/20 text-[11px] font-light text-blue-200/90 leading-relaxed relative z-10">
                      📜 <strong>Classical Origin &amp; Etymology:</strong> {selectedPoomsae.newPoomsaeSpec.etymologyOrigin}
                    </div>
                  )}
                </div>
              )}

              {/* Meaning, Philosophy & Yin-Yang Breakdown */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-5 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-2">
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-brand-red" />
                    <h4 className="text-xs font-mono font-bold uppercase text-zinc-900 dark:text-white">
                      Philosophical Meaning &amp; Concept
                    </h4>
                  </div>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 font-light leading-relaxed">
                    {selectedPoomsae.meaning || selectedPoomsae.summary}
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-2">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-amber-500" />
                    <h4 className="text-xs font-mono font-bold uppercase text-zinc-900 dark:text-white">
                      Yin-Yang Dynamics &amp; Martial Spirit
                    </h4>
                  </div>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 font-light leading-relaxed">
                    {selectedPoomsae.philosophy || selectedPoomsae.yinyangElement || 'Harmonious integration of body and mind.'}
                  </p>
                </div>
              </div>

              {/* Line Geometry & Diagram Notation */}
              <div className="p-5 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Compass className="w-4 h-4 text-blue-500" />
                    <h4 className="text-xs font-mono font-bold uppercase text-zinc-900 dark:text-white">
                      {pt.spatialGeometryTitle}
                    </h4>
                  </div>
                  <span className="text-xs font-mono text-zinc-400">
                    Line Symbol: {selectedPoomsae.poomsaeLineShape || selectedPoomsae.diagramSymbol}
                  </span>
                </div>
                <p className="text-xs text-zinc-600 dark:text-zinc-400 font-light leading-relaxed">
                  Competitors must follow the strict geometric path ({selectedPoomsae.poomsaeLineShape || selectedPoomsae.diagramSymbol}) across the 10m x 10m ring, starting and returning to the exact initial coordinate within a 1-foot allowance.
                </p>
              </div>

              {/* Modal Sub-Tabs: Sequence | Terminology | Coaching Tips */}
              <div className="flex flex-wrap items-center gap-1.5 p-1 bg-zinc-100 dark:bg-zinc-800 rounded-xl border border-zinc-200 dark:border-zinc-700">
                <button
                  onClick={() => setStepViewMode('list')}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-bold cursor-pointer transition-colors ${
                    stepViewMode === 'list' || stepViewMode === 'stepper'
                      ? 'bg-white dark:bg-zinc-900 text-brand-red shadow-sm'
                      : 'text-zinc-500 hover:text-zinc-900 dark:hover:text-white'
                  }`}
                >
                  <Footprints className="w-3.5 h-3.5 inline mr-1" /> Movement Sequence ({totalSteps})
                </button>

                {terminologyList.length > 0 && (
                  <button
                    onClick={() => setStepViewMode('terminology' as any)}
                    className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-bold cursor-pointer transition-colors ${
                      (stepViewMode as string) === 'terminology'
                        ? 'bg-white dark:bg-zinc-900 text-brand-red shadow-sm'
                        : 'text-zinc-500 hover:text-zinc-900 dark:hover:text-white'
                    }`}
                  >
                    <BookOpen className="w-3.5 h-3.5 inline mr-1" /> {pt.terminologyTitle} ({terminologyList.length})
                  </button>
                )}

                {coachingTipsList.length > 0 && (
                  <button
                    onClick={() => setStepViewMode('tips' as any)}
                    className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-bold cursor-pointer transition-colors ${
                      (stepViewMode as string) === 'tips'
                        ? 'bg-white dark:bg-zinc-900 text-brand-red shadow-sm'
                        : 'text-zinc-500 hover:text-zinc-900 dark:hover:text-white'
                    }`}
                  >
                    <Zap className="w-3.5 h-3.5 inline mr-1" /> {pt.coachingTipsTitle} ({coachingTipsList.length})
                  </button>
                )}
              </div>

              {/* STEP BREAKDOWN (LIST VS STEPPER) */}
              {(stepViewMode === 'list' || stepViewMode === 'stepper') && (
                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 border-b border-zinc-100 dark:border-zinc-800">
                    <div className="flex items-center gap-2">
                      <Target className="w-4 h-4 text-emerald-500" />
                      <h4 className="text-sm font-black uppercase text-zinc-900 dark:text-white tracking-tight">
                        Step Execution Breakdown ({totalSteps} {pt.movesLabel})
                      </h4>
                    </div>

                    {hasSteps && (
                      <div className="flex items-center gap-1 bg-zinc-100 dark:bg-zinc-800 p-1 rounded-lg self-start sm:self-auto">
                        <button
                          onClick={() => setStepViewMode('list')}
                          className={`px-3 py-1 rounded text-xs font-mono cursor-pointer transition-colors ${
                            stepViewMode === 'list'
                              ? 'bg-white dark:bg-zinc-900 font-bold text-brand-red shadow-sm'
                              : 'text-zinc-500 hover:text-zinc-900 dark:hover:text-white'
                          }`}
                        >
                          {pt.stepperListMode}
                        </button>
                        <button
                          onClick={() => setStepViewMode('stepper')}
                          className={`px-3 py-1 rounded text-xs font-mono cursor-pointer transition-colors ${
                            stepViewMode === 'stepper'
                              ? 'bg-white dark:bg-zinc-900 font-bold text-brand-red shadow-sm'
                              : 'text-zinc-500 hover:text-zinc-900 dark:hover:text-white'
                          }`}
                        >
                          {pt.stepperInteractiveMode}
                        </button>
                      </div>
                    )}
                  </div>

                  {!hasSteps && (
                    <div className="p-8 text-center rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-2 font-mono">
                      <Footprints className="w-8 h-8 text-zinc-400 mx-auto" />
                      <p className="text-xs text-zinc-500">
                        Official step-by-step movement breakdown is currently being curated for this pattern.
                      </p>
                    </div>
                  )}

                  {/* SEQUENTIAL LIST */}
                  {hasSteps && stepViewMode === 'list' && (
                    <div className="space-y-2">
                      {steps.map((step, index) => {
                        const isKihap = (step || '').toLowerCase().includes('kihap')
                        return (
                          <div
                            key={`step-${selectedPoomsae.id}-${index}`}
                            className={`p-3.5 rounded-xl border text-xs font-mono flex items-start gap-3 transition-colors ${
                              isKihap
                                ? 'bg-brand-red/5 dark:bg-brand-red/10 border-brand-red/30 text-zinc-900 dark:text-white'
                                : 'bg-zinc-50 dark:bg-zinc-950 border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300'
                            }`}
                          >
                            <span
                              className={`w-6 h-6 rounded-lg flex items-center justify-center font-bold text-[10px] shrink-0 ${
                                isKihap
                                  ? 'bg-brand-red text-white'
                                  : 'bg-zinc-200 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400'
                              }`}
                            >
                              {index + 1}
                            </span>
                            <div className="space-y-0.5">
                              <p className="leading-relaxed">{step}</p>
                              {isKihap && (
                                <span className="inline-flex items-center gap-1 text-[9px] font-bold text-brand-red uppercase">
                                  <Volume2 className="w-3 h-3" /> Mandatory Vocalization (Kihap)
                                </span>
                              )}
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  )}

                  {/* INTERACTIVE PRACTICE STEPPER */}
                  {hasSteps && stepViewMode === 'stepper' && (
                    <div className="p-6 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-4">
                      <div className="space-y-1.5">
                        <div className="flex justify-between items-center text-[10px] font-mono text-zinc-400 uppercase">
                          <span>
                            {pt.stepperMove} {safeStepIndex + 1} {pt.stepperOf} {totalSteps}
                          </span>
                          <span>{stepProgressPercent}% Completed</span>
                        </div>
                        <div className="w-full h-2 rounded-full bg-zinc-200 dark:bg-zinc-800 overflow-hidden">
                          <div
                            className="h-full bg-brand-red transition-all duration-300"
                            style={{
                              width: `${stepProgressPercent}%`,
                            }}
                          />
                        </div>
                      </div>

                      <div className="p-5 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="px-3 py-1 rounded-lg bg-brand-red text-white text-xs font-bold font-mono">
                            {pt.stepperMove} #{safeStepIndex + 1}
                          </span>
                          {isCurrentStepKihap && (
                            <span className="px-2.5 py-0.5 rounded bg-brand-red/10 text-brand-red text-[10px] font-mono font-bold uppercase inline-flex items-center gap-1">
                              <Volume2 className="w-3 h-3" /> Kihap Required
                            </span>
                          )}
                        </div>

                        <p className="text-sm font-mono text-zinc-900 dark:text-white leading-relaxed">
                          {currentStepText}
                        </p>
                      </div>

                      <div className="flex items-center justify-between gap-3 pt-2">
                        <button
                          onClick={() => setCurrentStepIndex((prev) => Math.max(0, prev - 1))}
                          disabled={safeStepIndex === 0}
                          className="px-4 py-2 rounded-xl bg-zinc-200 dark:bg-zinc-800 disabled:opacity-40 text-xs font-mono font-bold cursor-pointer hover:bg-zinc-300 dark:hover:bg-zinc-700 transition-colors flex items-center gap-1"
                        >
                          <ChevronLeft className="w-4 h-4" /> {pt.prevMoveBtn}
                        </button>

                        <button
                          onClick={() => setCurrentStepIndex(0)}
                          className="px-3 py-2 rounded-xl border border-zinc-300 dark:border-zinc-700 text-xs font-mono text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors cursor-pointer flex items-center gap-1"
                        >
                          <RotateCcw className="w-3.5 h-3.5" /> {pt.restartMoveBtn}
                        </button>

                        <button
                          onClick={() =>
                            setCurrentStepIndex((prev) =>
                              Math.min(totalSteps - 1, prev + 1)
                            )
                          }
                          disabled={safeStepIndex >= totalSteps - 1}
                          className="px-4 py-2 rounded-xl bg-brand-red disabled:opacity-40 text-white text-xs font-mono font-bold cursor-pointer hover:bg-brand-red/90 transition-colors flex items-center gap-1"
                        >
                          {pt.nextMoveBtn} <ChevronRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* KOREAN TERMINOLOGY GLOSSARY */}
              {(stepViewMode as string) === 'terminology' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-2 border-b border-zinc-100 dark:border-zinc-800">
                    <h4 className="text-sm font-black uppercase text-zinc-900 dark:text-white tracking-tight flex items-center gap-2">
                      <BookOpen className="w-4 h-4 text-brand-red" /> {pt.terminologyTitle}
                    </h4>
                    <span className="text-xs font-mono text-zinc-400">{terminologyList.length} Terms Documented</span>
                  </div>

                  {terminologyList.length === 0 ? (
                    <div className="p-8 text-center rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-xs font-mono text-zinc-500">
                      Terminology glossary is currently being updated for this pattern.
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {terminologyList.map((term, tIdx) => (
                        <div
                          key={`term-${selectedPoomsae.id}-${tIdx}`}
                          className="p-3.5 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-1 font-mono text-xs"
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
                          <div className="text-xs font-bold text-brand-red">
                            {term.romanized}
                          </div>
                          <p className="text-zinc-600 dark:text-zinc-400 text-xs font-light">
                            {term.english}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* MASTER COACHING TIPS */}
              {(stepViewMode as string) === 'tips' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-2 border-b border-zinc-100 dark:border-zinc-800">
                    <h4 className="text-sm font-black uppercase text-zinc-900 dark:text-white tracking-tight flex items-center gap-2">
                      <Zap className="w-4 h-4 text-amber-500" /> {pt.coachingTipsTitle}
                    </h4>
                    <span className="text-xs font-mono text-zinc-400">Official Practical Pointers</span>
                  </div>

                  {coachingTipsList.length === 0 ? (
                    <div className="p-8 text-center rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-xs font-mono text-zinc-500">
                      Coaching tips are currently being updated for this pattern.
                    </div>
                  ) : (
                    <div className="space-y-3">
                      {coachingTipsList.map((tip, tipIdx) => (
                        <div
                          key={`tip-${selectedPoomsae.id}-${tipIdx}`}
                          className="p-4 rounded-xl bg-amber-500/5 dark:bg-amber-500/10 border border-amber-500/20 text-xs font-mono space-y-1"
                        >
                          <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400 font-bold">
                            <Check className="w-3.5 h-3.5" /> Coaching Insight #{tipIdx + 1}
                          </div>
                          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed font-light">
                            {tip}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* Biomechanical Cues & Common Errors */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {keyDetailsList.length > 0 && (
                  <div className="p-5 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-2.5">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                      <h4 className="text-xs font-mono font-bold uppercase text-zinc-900 dark:text-white">
                        {pt.biomechanicalCuesTitle}
                      </h4>
                    </div>
                    <ul className="space-y-1.5 text-xs text-zinc-600 dark:text-zinc-400 font-light">
                      {keyDetailsList.map((cue, idx) => (
                        <li key={`cue-${selectedPoomsae.id}-${idx}`} className="flex items-start gap-2">
                          <span className="text-emerald-500 font-bold">&bull;</span>
                          <span>{cue}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {commonMistakesList.length > 0 && (
                  <div className="p-5 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-2.5">
                    <div className="flex items-center gap-2">
                      <AlertTriangle className="w-4 h-4 text-amber-500" />
                      <h4 className="text-xs font-mono font-bold uppercase text-zinc-900 dark:text-white">
                        {pt.deductionsTitle}
                      </h4>
                    </div>
                    <ul className="space-y-1.5 text-xs text-zinc-600 dark:text-zinc-400 font-light">
                      {commonMistakesList.map((err, idx) => (
                        <li key={`err-${selectedPoomsae.id}-${idx}`} className="flex items-start gap-2">
                          <span className="text-amber-500 font-bold">&bull;</span>
                          <span>{err}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 sm:p-6 border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-xs font-mono text-zinc-400 text-center sm:text-left">
                Official World Taekwondo &amp; Kukkiwon Curriculum Standards
              </span>

              <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
                <button
                  onClick={() => setSelectedPoomsae(null)}
                  className="px-4 py-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-xs font-mono text-zinc-700 dark:text-zinc-300 transition-colors cursor-pointer flex-1 sm:flex-initial text-center min-h-[44px]"
                >
                  {pt.closeBtn}
                </button>
                <Link
                  href={`/library/poomsae/${selectedPoomsae.slug}`}
                  className="px-4 py-2.5 rounded-xl bg-brand-red text-white text-xs font-bold font-mono uppercase hover:bg-brand-red/90 transition-all cursor-pointer inline-flex items-center justify-center gap-1.5 flex-1 sm:flex-initial text-center min-h-[44px]"
                >
                  {pt.fullPageBtn} <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
