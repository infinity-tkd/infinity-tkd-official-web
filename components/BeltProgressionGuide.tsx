'use client'

import * as React from 'react'
import { beltProgression, type BeltRank } from '@/data/belts'
import {
  Award,
  CheckCircle2,
  Clock,
  Target,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  ArrowRight,
  Flame,
  Zap,
  BookOpen,
  LayoutGrid,
  ListOrdered,
  Shield,
  Layers,
} from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'

export function BeltProgressionGuide() {
  const { t, localizeList } = useLanguage()
  const [selectedIndex, setSelectedIndex] = React.useState(0)
  const [slideDirection, setSlideDirection] = React.useState<'left' | 'right'>('right')
  const [viewMode, setViewMode] = React.useState<'horizontal' | 'vertical'>('horizontal')
  const containerRef = React.useRef<HTMLDivElement>(null)
  const tabRefs = React.useRef<(HTMLButtonElement | null)[]>([])
  const [indicatorStyle, setIndicatorStyle] = React.useState({
    left: 0,
    top: 0,
    width: 0,
    height: 0,
    opacity: 0,
  })

  const localizedBelts = React.useMemo(() => {
    return localizeList(beltProgression)
  }, [localizeList])

  const activeBelt = localizedBelts[selectedIndex] || localizedBelts[0]

  // Update running sliding border indicator position
  const updateIndicator = React.useCallback(() => {
    try {
      const activeEl = tabRefs.current[selectedIndex]
      const containerEl = containerRef.current
      if (activeEl && containerEl) {
        const activeRect = activeEl.getBoundingClientRect()
        const containerRect = containerEl.getBoundingClientRect()
        setIndicatorStyle({
          left: activeRect.left - containerRect.left,
          top: activeRect.top - containerRect.top,
          width: activeRect.width,
          height: activeRect.height,
          opacity: 1,
        })
      }
    } catch {
      setIndicatorStyle((prev) => ({ ...prev, opacity: 0 }))
    }
  }, [selectedIndex])

  React.useEffect(() => {
    updateIndicator()
    const handleResize = () => updateIndicator()
    window.addEventListener('resize', handleResize, { passive: true })
    return () => window.removeEventListener('resize', handleResize)
  }, [updateIndicator])

  const handleSelectBelt = (newIndex: number) => {
    if (newIndex === selectedIndex) return
    setSlideDirection(newIndex > selectedIndex ? 'right' : 'left')
    setSelectedIndex(newIndex)
    const tabEl = tabRefs.current[newIndex]
    if (tabEl) {
      tabEl.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
    }
  }

  const handlePrev = () => {
    if (selectedIndex > 0) {
      handleSelectBelt(selectedIndex - 1)
    }
  }

  const handleNext = () => {
    if (selectedIndex < beltProgression.length - 1) {
      handleSelectBelt(selectedIndex + 1)
    }
  }

  // Dynamic accent color based on active belt
  const getActiveBorderColor = () => {
    if (activeBelt.id === 'white') return '#EF2F38'
    if (activeBelt.id === 'yellow') return '#FFD505'
    if (activeBelt.id === 'green') return '#09BB00'
    if (activeBelt.id === 'blue') return '#0042EA'
    if (activeBelt.id === 'brown') return '#A05B00'
    if (activeBelt.id === 'red') return '#EF2F38'
    return '#EF2F38'
  }

  return (
    <div className="w-full bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-[14px] p-5 sm:p-8 md:p-10 shadow-2xl overflow-hidden relative transition-colors duration-500">
      {/* Dynamic Background Aura Glow */}
      <div
        className="absolute top-0 right-0 w-96 h-96 blur-[130px] rounded-full pointer-events-none opacity-20 transition-colors duration-700"
        style={{ backgroundColor: getActiveBorderColor() }}
      />

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-6 border-b border-zinc-200 dark:border-zinc-800 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xl bg-brand-red/10 text-brand-red text-[10px] font-bold uppercase tracking-widest mb-2 border border-brand-red/20">
            <Award className="w-3.5 h-3.5" /> {t.beltGuide.badge}
          </div>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight text-zinc-900 dark:text-white">
            {t.beltGuide.title1} <span className="text-brand-red">{t.beltGuide.title2}</span>
          </h3>
          <p className="text-zinc-500 dark:text-zinc-400 text-xs sm:text-sm mt-1 font-light max-w-xl">
            Interactive syllabus roadmap detailing required Poomsae forms, philosophical milestones, and Dan examination criteria.
          </p>
        </div>

        {/* View Mode Switcher & Slide Controls */}
        <div className="flex flex-wrap items-center gap-2.5 self-end md:self-auto">
          {/* Horizontal vs Vertical Toggle (12px radius) */}
          <div className="inline-flex items-center p-1 rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-xs">
            <button
              onClick={() => setViewMode('horizontal')}
              className={`px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-wider transition-all duration-300 flex items-center gap-1 cursor-pointer ${
                viewMode === 'horizontal'
                  ? 'bg-brand-red text-white shadow-brand-glow'
                  : 'text-zinc-500 hover:text-zinc-900 dark:hover:text-white'
              }`}
            >
              <LayoutGrid className="w-3 h-3" /> Focus View
            </button>
            <button
              onClick={() => setViewMode('vertical')}
              className={`px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-wider transition-all duration-300 flex items-center gap-1 cursor-pointer ${
                viewMode === 'vertical'
                  ? 'bg-brand-red text-white shadow-brand-glow'
                  : 'text-zinc-500 hover:text-zinc-900 dark:hover:text-white'
              }`}
            >
              <ListOrdered className="w-3 h-3" /> Full Journey
            </button>
          </div>

          {/* Navigation buttons (12px radius) */}
          {viewMode === 'horizontal' && (
            <div className="flex items-center gap-1.5">
              <button
                onClick={handlePrev}
                disabled={selectedIndex === 0}
                aria-label="Previous Belt Rank"
                className="p-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-brand-red hover:text-white hover:border-brand-red disabled:opacity-30 disabled:pointer-events-none transition-all duration-300 shadow-sm cursor-pointer min-w-[44px] min-h-[44px] flex items-center justify-center"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                disabled={selectedIndex === beltProgression.length - 1}
                aria-label="Next Belt Rank"
                className="p-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-brand-red hover:text-white hover:border-brand-red disabled:opacity-30 disabled:pointer-events-none transition-all duration-300 shadow-sm cursor-pointer min-w-[44px] min-h-[44px] flex items-center justify-center"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* MODE 1: HORIZONTAL INTERACTIVE TIMELINE */}
      {viewMode === 'horizontal' ? (
        <div>
          {/* Belt Continuous Sliding Track Bar with Running Gliding Border */}
          <div className="relative mb-8 pt-2" ref={containerRef}>
            {/* The Running Gliding Border Indicator */}
            <div
              className="absolute z-20 pointer-events-none rounded-xl transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] border-2 shadow-lg"
              style={{
                transform: `translate3d(${indicatorStyle.left}px, ${indicatorStyle.top}px, 0)`,
                width: `${indicatorStyle.width}px`,
                height: `${indicatorStyle.height}px`,
                opacity: indicatorStyle.opacity,
                borderColor: getActiveBorderColor(),
                boxShadow: `0 0 20px ${getActiveBorderColor()}35`,
              }}
            >
              <div
                className="absolute -top-1 -right-1 w-2 h-2 rounded-full animate-ping"
                style={{ backgroundColor: getActiveBorderColor() }}
              />
            </div>

            {/* Tab Buttons Strip (Responsive Snap Carousel on Mobile, Grid on Tablet/Desktop) */}
            <div className="relative flex overflow-x-auto sm:grid sm:grid-cols-4 lg:grid-cols-7 gap-2.5 z-10 pb-2 sm:pb-0 scrollbar-none snap-x touch-pan-x">
              {localizedBelts.map((belt, index) => {
                const isSelected = selectedIndex === index
                const isWhite = belt.id === 'white'

                return (
                  <button
                    key={belt.id}
                    ref={(el) => {
                      tabRefs.current[index] = el
                    }}
                    onClick={() => handleSelectBelt(index)}
                    aria-label={`Select ${belt.name} syllabus`}
                    aria-pressed={isSelected}
                    className={`group relative p-3 rounded-xl border transition-all duration-300 flex flex-col items-center text-center cursor-pointer min-h-[82px] min-w-[125px] sm:min-w-0 shrink-0 sm:shrink justify-center snap-center ${
                      isSelected
                        ? 'border-transparent bg-zinc-50 dark:bg-zinc-900 shadow-sm ring-1 ring-brand-red/30'
                        : 'border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/40 hover:border-zinc-400 dark:hover:border-zinc-700'
                    }`}
                  >
                    {/* Belt Ribbon Color Pill */}
                    <div
                      className={`w-full h-3 rounded-lg mb-2 shadow-inner border relative overflow-hidden transition-transform duration-300 ${
                        isWhite ? 'border-zinc-300 dark:border-zinc-600' : 'border-black/20'
                      } ${isSelected ? 'scale-105 shadow-md' : 'group-hover:scale-102'}`}
                      style={{ backgroundColor: belt.hex }}
                    >
                      {belt.stripe && (
                        <div
                          className="absolute inset-y-0 right-1/4 w-1.5"
                          style={{ backgroundColor: belt.stripe }}
                        />
                      )}
                      {isSelected && (
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent animate-[pulse_2s_ease-in-out_infinite]" />
                      )}
                    </div>

                    <span className="text-xs font-black uppercase tracking-tight text-zinc-900 dark:text-white leading-tight">
                      {belt.name.replace(' Belt', '')}
                    </span>
                    <span className="text-[10px] text-zinc-400 font-medium truncate max-w-full">
                      {belt.rankTitle}
                    </span>
                  </button>
                )
              })}
            </div>

            {/* Visual Continuous Belt Flow Connector Line */}
            <div className="hidden lg:block absolute top-[28px] left-8 right-8 h-1 bg-gradient-to-r from-zinc-200 via-brand-red/40 to-black/80 dark:from-zinc-800 dark:via-brand-red/60 dark:to-white/80 rounded-full z-0 opacity-40 pointer-events-none" />
          </div>

          {/* Detailed Belt Content Card with Directional Sliding Transition */}
          <div
            key={activeBelt.id}
            className={`bg-zinc-50 dark:bg-zinc-900/70 border border-zinc-200 dark:border-zinc-800 rounded-xl p-6 sm:p-8 lg:p-10 relative overflow-hidden transition-all duration-400 ${
              slideDirection === 'right' ? 'animate-slide-in-right' : 'animate-slide-in-left'
            }`}
          >
            <div className="grid lg:grid-cols-12 gap-6 sm:gap-8 items-start relative z-10">
              {/* Left Column: Belt Info & Philosophy */}
              <div className="lg:col-span-5 space-y-5 sm:space-y-6">
                <div className="flex items-center gap-4">
                  <div
                    className="w-3.5 h-12 rounded-lg shrink-0 border border-black/20 shadow-md transform transition-transform duration-300 hover:scale-110"
                    style={{ backgroundColor: activeBelt.hex }}
                  />
                  <div>
                    <div className="flex items-center gap-2">
                      <span
                        className="text-xs font-bold uppercase tracking-widest block transition-colors duration-300"
                        style={{ color: getActiveBorderColor() }}
                      >
                        {activeBelt.koreanName}
                      </span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-zinc-200 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400">
                        {activeBelt.rankTitle}
                      </span>
                    </div>
                    <h4 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-zinc-900 dark:text-white">
                      {activeBelt.name}
                    </h4>
                  </div>
                </div>

                {/* Meaning & Philosophy */}
                <div className="p-4 sm:p-5 rounded-xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 shadow-sm space-y-2">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 block">
                    Belt Symbolism &amp; Meaning
                  </span>
                  <p className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed font-medium">
                    {activeBelt.meaning}
                  </p>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed italic border-t border-zinc-100 dark:border-zinc-800/80 pt-2 font-light">
                    &ldquo;{activeBelt.philosophy}&rdquo;
                  </p>
                </div>

                {/* Poomsae Form with Detailed Explanation */}
                <div className="p-4 sm:p-5 rounded-xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 shadow-sm space-y-1.5">
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-brand-red" />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">
                      Required Poomsae Form
                    </span>
                  </div>
                  <h5 className="text-sm font-bold text-zinc-900 dark:text-white">
                    {activeBelt.poomsae}
                  </h5>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 font-light leading-relaxed">
                    {activeBelt.poomsaeMeaning}
                  </p>
                </div>

                {/* Time Commitment & Breaking */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 shadow-sm">
                    <div
                      className="p-2 rounded-lg"
                      style={{
                        backgroundColor: `${getActiveBorderColor()}18`,
                        color: getActiveBorderColor(),
                      }}
                    >
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-zinc-400 font-bold uppercase text-[10px] block">
                        Estimated Timeline
                      </span>
                      <span className="font-bold text-zinc-900 dark:text-white">
                        {activeBelt.timeline}
                      </span>
                    </div>
                  </div>

                  {activeBelt.breakingRequirement && (
                    <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 shadow-sm">
                      <div
                        className="p-2 rounded-lg"
                        style={{
                          backgroundColor: `${getActiveBorderColor()}18`,
                          color: getActiveBorderColor(),
                        }}
                      >
                        <Zap className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-zinc-400 font-bold uppercase text-[10px] block">
                          Board Breaking (Kyokpa)
                        </span>
                        <span className="font-bold text-zinc-900 dark:text-white text-[11px] truncate block">
                          {activeBelt.breakingRequirement.split(' with ')[0]}
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Right Column: Syllabus Goals & Examination Checklist */}
              <div className="lg:col-span-7 space-y-6">
                {/* Syllabus Goals */}
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-zinc-400 block mb-2 flex items-center gap-1.5">
                    <Target className="w-3.5 h-3.5 text-brand-red" /> Stage Syllabus Goals &amp; Competencies
                  </span>
                  <div className="grid grid-cols-1 gap-2.5">
                    {activeBelt.syllabusGoals.map((goal, i) => (
                      <div
                        key={i}
                        className="p-3.5 rounded-xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800/80 text-xs text-zinc-800 dark:text-zinc-200 flex items-start gap-2.5"
                      >
                        <span
                          className="w-5 h-5 rounded-lg flex items-center justify-center font-black text-[10px] text-white shrink-0 mt-0.5"
                          style={{ backgroundColor: getActiveBorderColor() }}
                        >
                          {i + 1}
                        </span>
                        <span className="leading-relaxed font-medium">{goal}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Physical Skills Tags */}
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-zinc-400 block mb-2 flex items-center gap-1.5">
                    <Flame className="w-3.5 h-3.5 text-brand-red" /> Physical Weaponry &amp; Stances
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {activeBelt.physicalSkills.map((skill, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 rounded-lg text-xs font-bold bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Exam Testing Checklist */}
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-zinc-400 block mb-2.5 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-red" /> Promotion Exam Testing Checklist
                  </span>
                  <div className="space-y-2">
                    {activeBelt.requirements.map((req, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-3 p-3 rounded-xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-xs text-zinc-700 dark:text-zinc-300"
                      >
                        <CheckCircle2
                          className="w-4 h-4 shrink-0 mt-0.5"
                          style={{ color: getActiveBorderColor() }}
                        />
                        <span className="leading-relaxed font-medium">{req}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* MODE 2: VERTICAL FULL JOURNEY TIMELINE */
        <div className="relative pl-6 sm:pl-10 space-y-6 before:absolute before:left-3 sm:before:left-5 before:top-4 before:bottom-4 before:w-1 before:bg-gradient-to-b before:from-zinc-200 before:via-brand-red before:to-black dark:before:from-zinc-800 dark:before:via-brand-red dark:before:to-white">
          {localizedBelts.map((belt) => {
            return (
              <div
                key={belt.id}
                className="relative p-6 sm:p-8 rounded-xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 shadow-sm hover:border-brand-red/40 transition-all duration-300"
              >
                {/* Timeline Node Bullet */}
                <div
                  className="absolute -left-[30px] sm:-left-[46px] top-8 w-5 h-5 rounded-lg border-2 border-white dark:border-zinc-950 shadow-md"
                  style={{ backgroundColor: belt.hex }}
                />

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold uppercase tracking-widest text-brand-red">
                        {belt.koreanName}
                      </span>
                      <span className="text-[10px] font-mono text-zinc-400">
                        {belt.rankTitle}
                      </span>
                    </div>
                    <h4 className="text-xl sm:text-2xl font-black uppercase text-zinc-900 dark:text-white">
                      {belt.name}
                    </h4>
                  </div>
                  <span className="px-3 py-1 rounded-lg text-xs font-bold bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 self-start sm:self-auto font-mono">
                    {belt.timeline}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 font-light leading-relaxed mb-4">
                  {belt.meaning} &bull; <em className="italic">{belt.philosophy}</em>
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs pt-4 border-t border-zinc-200 dark:border-zinc-800">
                  <div className="p-3.5 rounded-xl bg-white dark:bg-zinc-950 border border-zinc-100 dark:border-zinc-800">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 block mb-1">
                      Required Poomsae Form
                    </span>
                    <p className="font-bold text-zinc-900 dark:text-white">
                      {belt.poomsae}
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white dark:bg-zinc-950 border border-zinc-100 dark:border-zinc-800">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 block mb-1">
                      Key Technical Focus
                    </span>
                    <p className="font-bold text-zinc-900 dark:text-white">
                      {belt.focus}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
