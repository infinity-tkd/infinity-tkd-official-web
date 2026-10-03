'use client'

import * as React from 'react'
import Link from 'next/link'
import {
  BookOpen,
  Zap,
  Flame,
  Shield,
  Layers,
  Sparkles,
  Search,
  RotateCcw,
  ArrowRight,
  CheckCircle2,
  XCircle,
  Clock,
  Target,
  X,
  ChevronRight,
  Award,
  Play,
  Share2,
  ShieldCheck,
  Scale,
  Calendar,
  FileText,
  Download,
  ExternalLink,
  User,
} from 'lucide-react'
import {
  libraryCategoriesMeta,
  libraryItems,
  type LibraryCategory,
  type DifficultyLevel,
  type LibraryItem,
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
import { useLanguage } from '@/context/LanguageContext'
import { CompetitionRulesViewer } from '@/components/library/CompetitionRulesViewer'
import { HistoryChronicleReader } from '@/components/library/HistoryChronicleReader'
import { SafeGrid } from '@/components/SafeGrid'
import { SafeImage } from '@/components/SafeImage'
import { Card3D } from '@/components/ui/Card3D'
import { getSafeVideoEmbedUrl } from '@/lib/videoHelper'

const iconMap: Record<string, React.ElementType> = {
  BookOpen,
  Zap,
  Flame,
  Shield,
  Layers,
  Sparkles,
  Award,
  ShieldCheck,
  Calendar,
}

export default function LibraryPage() {
  const { t, localizeList } = useLanguage()
  const [selectedCategory, setSelectedCategory] = React.useState<LibraryCategory | 'all'>('all')
  const [selectedDifficulty, setSelectedDifficulty] = React.useState<DifficultyLevel | 'all'>('all')
  const [searchQuery, setSearchQuery] = React.useState<string>('')
  const [activeItem, setActiveItem] = React.useState<LibraryItem | null>(null)

  const localizedCategories = React.useMemo(() => {
    return localizeList(libraryCategoriesMeta)
  }, [localizeList])

  const localizedItems = React.useMemo(() => {
    return localizeList(libraryItems)
  }, [localizeList])

  // Lock body scroll & Escape key listener when modal is open
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveItem(null)
      }
    }
    if (activeItem) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [activeItem])

  // Filter items dynamically by category, difficulty, and search query
  const filteredItems = React.useMemo(() => {
    return localizedItems.filter((item) => {
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory
      const matchesDifficulty =
        selectedDifficulty === 'all' || item.difficulty === selectedDifficulty
      const q = searchQuery.toLowerCase().trim()
      const matchesSearch =
        !q ||
        item.name.toLowerCase().includes(q) ||
        item.koreanName.toLowerCase().includes(q) ||
        item.romanized.toLowerCase().includes(q) ||
        item.summary.toLowerCase().includes(q) ||
        (item.meaning && item.meaning.toLowerCase().includes(q)) ||
        item.keyDetails.some((d) => d.toLowerCase().includes(q))
      return matchesCategory && matchesDifficulty && matchesSearch
    })
  }, [selectedCategory, selectedDifficulty, searchQuery, localizedItems])

  // Video embed url for active modal
  const safeActiveVideoUrl = React.useMemo(() => {
    return activeItem ? getSafeVideoEmbedUrl(activeItem.videoUrl || activeItem.mediaUrl) : null
  }, [activeItem])

  return (
    <div className="bg-zinc-50 dark:bg-black text-zinc-900 dark:text-white min-h-screen pt-20 sm:pt-24 pb-20 font-sans selection:bg-brand-red selection:text-white transition-colors duration-500 overflow-x-hidden">
      {/* Background Ambience */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-brand-red/5 blur-[150px] rounded-full pointer-events-none" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
        {/* Header Banner */}
        <div className="text-center max-w-3xl mx-auto pt-6 sm:pt-10 mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl border border-brand-red/30 bg-brand-red/10 text-brand-red text-xs font-bold uppercase tracking-widest mb-4 backdrop-blur-md">
            <BookOpen className="w-3.5 h-3.5" /> {t.library.badge}
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight mb-3 sm:mb-4 leading-none text-zinc-900 dark:text-white break-words">
            {t.library.heroTitle1} <span className="text-brand-red">{t.library.heroTitle2}</span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-zinc-600 dark:text-zinc-400 font-light leading-relaxed mb-6 px-2">
            {t.library.heroSubtitle}
          </p>
        </div>

        {/* -------------------------------------------------------------------- */}
        {/* 9 REARRANGED DISCIPLINE TILES (14px radius, compact) */}
        {/* -------------------------------------------------------------------- */}
        <section className="mb-12 sm:mb-16">
          <div className="flex items-center justify-between gap-4 mb-4">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-brand-red block mb-0.5">
                {t.library.disciplinesBadge}
              </span>
              <h2 className="text-lg sm:text-xl font-black uppercase tracking-tight text-zinc-900 dark:text-white">
                {t.library.disciplinesTitle}
              </h2>
            </div>
            <span className="text-xs text-zinc-500 font-mono">
              {libraryItems.length} Curricula Documented
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4">
            {localizedCategories.map((cat) => {
              const Icon = iconMap[cat.iconName] || BookOpen
              const isSelected = selectedCategory === cat.id
              const count = libraryItems.filter((i) => i.category === cat.id).length

              return (
                <Card3D key={cat.id} maxTilt={3} className="h-full">
                  <div
                    onClick={() => setSelectedCategory(isSelected ? 'all' : cat.id)}
                    className={`group h-full p-4 sm:p-5 rounded-[14px] border transition-all duration-300 flex flex-col justify-between cursor-pointer relative overflow-hidden ${
                      isSelected
                        ? 'bg-zinc-900 text-white dark:bg-zinc-900 border-brand-red shadow-lg shadow-brand-red/10 scale-101'
                        : 'bg-white dark:bg-zinc-900/60 text-zinc-900 dark:text-white border-zinc-200 dark:border-zinc-800 hover:border-brand-red/40 hover:-translate-y-0.5'
                    }`}
                  >
                    <div className="relative z-10">
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <div
                          className="p-2.5 rounded-xl"
                          style={{
                            backgroundColor: `${cat.accentColor}20`,
                            color: cat.accentColor,
                          }}
                        >
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400">
                          {count} Entries
                        </span>
                      </div>

                      <div className="mb-1.5">
                        <span className="text-[9px] font-mono uppercase tracking-wider text-brand-red block">
                          {cat.koreanTitle}
                        </span>
                        <h3 className="text-base font-black uppercase tracking-tight">
                          {cat.title}
                        </h3>
                      </div>

                      <p className="text-xs text-zinc-500 dark:text-zinc-400 font-light leading-relaxed line-clamp-2 mb-3">
                        {cat.description}
                      </p>
                    </div>

                    <div className="pt-2.5 border-t border-zinc-100 dark:border-zinc-800/80 flex items-center justify-between text-[11px] font-bold uppercase tracking-wider text-brand-red">
                      <span>{isSelected ? 'Selected' : 'Filter'}</span>
                      <Link
                        href={`/library/${cat.id}`}
                        onClick={(e) => e.stopPropagation()}
                        className="px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 hover:bg-brand-red hover:text-white text-zinc-700 dark:text-zinc-300 text-[10px] font-bold flex items-center gap-1 transition-all touch-press"
                      >
                        Hub Page <ArrowRight className="w-2.5 h-2.5" />
                      </Link>
                    </div>
                  </div>
                </Card3D>
              )
            })}
          </div>
        </section>

        {/* -------------------------------------------------------------------- */}
        {/* TECHNIQUE ENCYCLOPEDIA & COMPACT CARDS GRID */}
        {/* -------------------------------------------------------------------- */}
        <section className="mb-20">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-6 pb-4 border-b border-zinc-200 dark:border-zinc-800">
            <div>
              <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-zinc-900 dark:text-white">
                {t.library.encyclopediaTitle1} <span className="text-brand-red">{t.library.encyclopediaTitle2}</span>
              </h2>
              <p className="text-xs text-zinc-500 uppercase tracking-wider mt-0.5">
                Showing {filteredItems.length} of {libraryItems.length} records &bull; Compact high-density view
              </p>
            </div>

            {/* Controls: Search, Category & Difficulty Pills */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5">
              {/* Search Box */}
              <div className="relative">
                <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" />
                <input
                  type="text"
                  placeholder={t.library.searchPlaceholder}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  aria-label="Search curriculum encyclopedia"
                  className="w-full sm:w-56 pl-9 pr-3 py-2 text-base sm:text-xs min-h-[44px] rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 focus:outline-none focus:border-brand-red transition-colors"
                />
              </div>

              {/* Difficulty Filter Dropdown / Pills */}
              <div className="flex flex-wrap gap-1">
                {(['all', 'Beginner', 'Intermediate', 'Advanced', 'Elite'] as const).map((diff) => (
                  <button
                    key={diff}
                    onClick={() => setSelectedDifficulty(diff)}
                    className={`px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                      selectedDifficulty === diff
                        ? 'bg-brand-red text-white shadow-brand-glow'
                        : 'bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-400'
                    }`}
                  >
                    {diff === 'all' ? t.library.allRanks : diff}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Dedicated Section Showcases for History & Competition Rules */}
          {selectedCategory === 'competition-rules' && (
            <div className="mb-10 animate-fade-in">
              <CompetitionRulesViewer />
            </div>
          )}

          {selectedCategory === 'history' && (
            <div className="mb-10 animate-fade-in">
              <HistoryChronicleReader />
            </div>
          )}

          {/* Compact Cards Grid (3-4 columns) */}
          {filteredItems.length > 0 ? (
            <SafeGrid className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4" isolateItems>
              {filteredItems.map((item) => {
                if (item.category === 'poomsae') {
                  return <PoomsaeCard key={item.id} item={item} onSelect={setActiveItem} />
                }
                if (item.category === 'stances') {
                  return <StanceCard key={item.id} item={item} onSelect={setActiveItem} />
                }
                if (item.category === 'kicking-fundamentals' || item.category === 'kicking-advanced') {
                  return <KickingCard key={item.id} item={item} onSelect={setActiveItem} />
                }
                if (item.category === 'hand-techniques') {
                  return <HandCard key={item.id} item={item} onSelect={setActiveItem} />
                }
                if (item.category === 'tricking-acrobatics') {
                  return <AcrobaticCard key={item.id} item={item} onSelect={setActiveItem} />
                }
                if (item.category === 'history') {
                  return <HistoryCard key={item.id} item={item} onSelect={setActiveItem} />
                }
                if (item.category === 'competition-rules') {
                  return <RuleCard key={item.id} item={item} onSelect={setActiveItem} />
                }
                if (item.category === 'hosinsul') {
                  return <HosinsulCard key={item.id} item={item} onSelect={setActiveItem} />
                }
                return <PoomsaeCard key={item.id} item={item} onSelect={setActiveItem} />
              })}
            </SafeGrid>
          ) : (
            <div className="p-12 text-center rounded-[14px] bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 max-w-xl mx-auto">
              <Search className="w-8 h-8 text-zinc-400 mx-auto mb-3" />
              <h4 className="text-base font-bold text-zinc-900 dark:text-white mb-1">No Entries Found</h4>
              <p className="text-xs text-zinc-500 mb-4 font-light">No curriculum records match your query.</p>
              <button
                onClick={() => {
                  setSearchQuery('')
                  setSelectedCategory('all')
                  setSelectedDifficulty('all')
                }}
                className="px-4 py-2 rounded-xl bg-brand-red text-white text-xs font-bold uppercase tracking-wider hover:bg-zinc-900 transition-colors inline-flex items-center gap-1.5 cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" /> Reset Filters
              </button>
            </div>
          )}
        </section>
      </div>

      {/* ==================================================================== */}
      {/* UNIQUE DISPLAY MODAL (Tailored by Discipline: Blog / Rules / Tutorial / Poomsae) */}
      {/* ==================================================================== */}
      {/* UNIQUE DISPLAY MODAL (Responsive Sheet on Mobile, Centered on Desktop) */}
      {/* ==================================================================== */}
      {activeItem && (
        <div
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-6 animate-fade-in"
          onClick={() => setActiveItem(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="library-modal-title"
        >
          <div className="absolute inset-0 bg-black/80 backdrop-blur-2xl" />

          <div
            className="relative w-full max-w-3xl bg-white dark:bg-zinc-950 shadow-2xl rounded-t-[20px] sm:rounded-[14px] border border-zinc-200 dark:border-zinc-800 overflow-hidden max-h-[92vh] flex flex-col z-10 animate-fade-in-up"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header Media Frame */}
            <div className="relative h-56 sm:h-64 w-full overflow-hidden shrink-0">
              <SafeImage src={activeItem.image} alt={activeItem.name} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

              {/* Action Buttons (Close) */}
              <div className="absolute top-4 right-4 z-30 flex items-center gap-2">
                <button
                  onClick={() => setActiveItem(null)}
                  className="p-2.5 rounded-xl bg-black/60 text-white hover:bg-brand-red transition-colors backdrop-blur-md cursor-pointer min-w-[44px] min-h-[44px] flex items-center justify-center"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Title & Korean Subtitle */}
              <div className="absolute bottom-4 left-4 right-4 z-20">
                <span className="text-xs text-brand-red font-mono font-bold block mb-0.5">
                  {activeItem.koreanName} &bull; {activeItem.beltLevel}
                </span>
                <h3 id="library-modal-title" className="text-xl sm:text-2xl md:text-3xl font-black uppercase text-white tracking-tight leading-tight">
                  {activeItem.name}
                </h3>
              </div>
            </div>

            {/* Modal Body Container with Scroll */}
            <div className="p-5 sm:p-8 overflow-y-auto space-y-6 touch-scroll text-xs sm:text-sm">
              {/* -------------------------------------------------------------- */}
              {/* 1. YOUTUBE / VIDEO PLAYER EMBED (Automatically hidden if no link) */}
              {/* -------------------------------------------------------------- */}
              {safeActiveVideoUrl && (
                <div className="space-y-2">
                  <h4 className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 flex items-center gap-1.5">
                    <Play className="w-3 h-3 text-brand-red" /> Video Demonstration
                  </h4>
                  <div className="relative aspect-video rounded-xl overflow-hidden bg-black border border-zinc-200 dark:border-zinc-800 shadow-inner">
                    <iframe
                      src={safeActiveVideoUrl}
                      title={activeItem.name}
                      className="w-full h-full border-0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>
              )}

              {/* -------------------------------------------------------------- */}
              {/* 2. STYLE A: HISTORY BLOG FORMAT (Articles, Quotes, Citations) */}
              {/* -------------------------------------------------------------- */}
              {activeItem.category === 'history' ? (
                <div className="space-y-5">
                  {/* Blog Header Metadata */}
                  <div className="flex flex-wrap items-center justify-between gap-3 p-3.5 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-xs text-zinc-500 font-mono">
                    <div className="flex items-center gap-2">
                      <User className="w-3.5 h-3.5 text-brand-red" />
                      <span className="font-bold text-zinc-800 dark:text-zinc-200">
                        {activeItem.author || 'Infinity TKD Historian'}
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span>{activeItem.publishDate || 'August 2026'}</span>
                      <span>&bull;</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3 text-brand-red" /> {activeItem.readTime || '5 min read'}
                      </span>
                    </div>
                  </div>

                  {/* Summary / Overview */}
                  <div className="p-4 rounded-xl bg-brand-red/5 border-l-4 border-brand-red italic text-zinc-800 dark:text-zinc-200 text-xs sm:text-sm">
                    {activeItem.summary}
                  </div>

                  {/* Blog Article Paragraphs (if provided) */}
                  {activeItem.blogContent && activeItem.blogContent.length > 0 ? (
                    <div className="space-y-4 text-zinc-700 dark:text-zinc-300 font-light leading-relaxed">
                      {activeItem.blogContent.map((paragraph, i) => (
                        <p key={i}>{paragraph}</p>
                      ))}
                    </div>
                  ) : null}

                  {/* Historical Milestones */}
                  {activeItem.steps && activeItem.steps.length > 0 && (
                    <div className="space-y-2">
                      <h4 className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">
                        Historical Chronicle Timeline
                      </h4>
                      {activeItem.steps.map((step, i) => (
                        <div
                          key={i}
                          className="flex items-start gap-2.5 p-3 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 text-xs"
                        >
                          <span className="font-mono font-bold text-brand-red mt-0.5">{i + 1}.</span>
                          <span className="text-zinc-800 dark:text-zinc-200">{step}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ) : null}

              {/* -------------------------------------------------------------- */}
              {/* 3. STYLE B: COMPETITION RULES FORMAT (PDF Viewer & Scoring) */}
              {/* -------------------------------------------------------------- */}
              {activeItem.category === 'competition-rules' ? (
                <div className="space-y-5">
                  <div className="p-4 rounded-xl bg-blue-500/5 border-l-4 border-blue-500 text-zinc-800 dark:text-zinc-200 text-xs sm:text-sm">
                    {activeItem.summary}
                  </div>

                  {/* PDF Document Preview & Download Bar (Automatically hidden if no pdfUrl) */}
                  {activeItem.pdfUrl && (
                    <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex flex-wrap items-center justify-between gap-3">
                      <div className="flex items-center gap-2">
                        <FileText className="w-4 h-4 text-brand-red" />
                        <div>
                          <h5 className="text-xs font-bold text-zinc-900 dark:text-white">
                            Official Rulebook PDF Document
                          </h5>
                          <span className="text-[10px] text-zinc-400 font-mono">
                            World Taekwondo Competition Standard
                          </span>
                        </div>
                      </div>
                      <a
                        href={activeItem.pdfUrl}
                        download
                        className="px-3 py-1.5 rounded-lg bg-brand-red text-white text-xs font-bold uppercase tracking-wider inline-flex items-center gap-1.5 shadow-sm"
                      >
                        <Download className="w-3.5 h-3.5" /> Download PDF
                      </a>
                    </div>
                  )}

                  {/* Scoring Rules Breakdown */}
                  {activeItem.steps && activeItem.steps.length > 0 && (
                    <div className="space-y-2">
                      <h4 className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">
                        Official Point Values &amp; Penalty Protocols
                      </h4>
                      {activeItem.steps.map((step, i) => (
                        <div
                          key={i}
                          className="flex items-start gap-2.5 p-3 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 text-xs"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0 mt-0.5" />
                          <span className="text-zinc-800 dark:text-zinc-200 font-medium">{step}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ) : null}

              {/* -------------------------------------------------------------- */}
              {/* 4. STYLE C: POOMSAE UNIQUE MASTER FORMAT (Trigram & Step Rhythm) */}
              {/* -------------------------------------------------------------- */}
              {activeItem.category === 'poomsae' ? (
                <div className="space-y-5">
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
                    {activeItem.diagramSymbol && (
                      <div className="p-3 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-center">
                        <span className="text-[10px] text-zinc-400 font-bold uppercase block mb-1">
                          Trigram / Symbol
                        </span>
                        <span className="text-2xl font-serif font-black text-brand-red">
                          {activeItem.diagramSymbol}
                        </span>
                      </div>
                    )}
                    <div className="p-3 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-center">
                      <span className="text-[10px] text-zinc-400 font-bold uppercase block mb-1">
                        Total Movements
                      </span>
                      <span className="text-xl font-mono font-bold text-zinc-900 dark:text-white">
                        {activeItem.totalMovements || 18} Steps
                      </span>
                    </div>
                    <div className="p-3 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-center col-span-2 sm:col-span-1">
                      <span className="text-[10px] text-zinc-400 font-bold uppercase block mb-1">
                        Belt Rank
                      </span>
                      <span className="text-xs font-bold text-brand-red">
                        {activeItem.beltLevel}
                      </span>
                    </div>
                  </div>

                  {activeItem.meaning && (
                    <div className="p-3.5 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 text-xs">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 block mb-1">
                        Trigram Philosophy &amp; Element
                      </span>
                      <p className="text-zinc-700 dark:text-zinc-300 font-light leading-relaxed">
                        {activeItem.meaning}
                      </p>
                    </div>
                  )}

                  {/* Execution Steps */}
                  {activeItem.steps && activeItem.steps.length > 0 && (
                    <div className="space-y-2">
                      <h4 className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">
                        Poomsae Sequence &amp; Movement Steps
                      </h4>
                      {activeItem.steps.map((step, i) => (
                        <div
                          key={i}
                          className="flex items-start gap-2.5 p-3 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 text-xs"
                        >
                          <span className="w-5 h-5 rounded-lg bg-brand-red text-white flex items-center justify-center font-mono font-black text-[10px] shrink-0 mt-0.5">
                            {i + 1}
                          </span>
                          <span className="text-zinc-800 dark:text-zinc-200 font-medium">{step}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ) : null}

              {/* -------------------------------------------------------------- */}
              {/* 5. STYLE D: TUTORIAL STYLE (Hosinsul, Kicks, Stances, Hand, Tricking) */}
              {/* -------------------------------------------------------------- */}
              {activeItem.category !== 'history' &&
              activeItem.category !== 'competition-rules' &&
              activeItem.category !== 'poomsae' ? (
                <div className="space-y-5">
                  <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 font-light leading-relaxed">
                    {activeItem.summary}
                  </div>

                  {/* Striking Surface / Target Area Pills */}
                  {(activeItem.strikingSurface || activeItem.targetArea) && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                      {activeItem.strikingSurface && (
                        <div className="p-3 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800">
                          <span className="text-[10px] text-zinc-400 font-bold uppercase block mb-1">
                            Striking Weapon / Kinetic Surface
                          </span>
                          <strong className="text-zinc-900 dark:text-white">
                            {activeItem.strikingSurface}
                          </strong>
                        </div>
                      )}
                      {activeItem.targetArea && (
                        <div className="p-3 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800">
                          <span className="text-[10px] text-zinc-400 font-bold uppercase block mb-1">
                            Anatomical Target Area
                          </span>
                          <strong className="text-zinc-900 dark:text-white">
                            {activeItem.targetArea}
                          </strong>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Step by step tutorial instructions */}
                  {activeItem.steps && activeItem.steps.length > 0 && (
                    <div className="space-y-2">
                      <h4 className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">
                        Step-by-Step Execution Tutorial
                      </h4>
                      {activeItem.steps.map((step, i) => (
                        <div
                          key={i}
                          className="flex items-start gap-2.5 p-3 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 text-xs"
                        >
                          <span className="w-5 h-5 rounded-lg bg-brand-red text-white flex items-center justify-center font-mono font-black text-[10px] shrink-0 mt-0.5">
                            {i + 1}
                          </span>
                          <span className="text-zinc-800 dark:text-zinc-200 font-medium">{step}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ) : null}

              {/* -------------------------------------------------------------- */}
              {/* COMMON MISTAKES & KEY DETAILS (Shared by all technique types) */}
              {/* -------------------------------------------------------------- */}
              {activeItem.keyDetails && activeItem.keyDetails.length > 0 && (
                <div>
                  <h4 className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-2">
                    Key Technical &amp; Biomechanical Cues
                  </h4>
                  <div className="space-y-1.5">
                    {activeItem.keyDetails.map((det, i) => (
                      <div key={i} className="flex items-start gap-2 text-zinc-600 dark:text-zinc-400">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{det}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeItem.commonMistakes && activeItem.commonMistakes.length > 0 && (
                <div>
                  <h4 className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-2">
                    Common Errors &amp; Corrections
                  </h4>
                  <div className="space-y-1.5">
                    {activeItem.commonMistakes.map((mistake, i) => (
                      <div key={i} className="flex items-start gap-2 text-zinc-600 dark:text-zinc-400">
                        <XCircle className="w-3.5 h-3.5 text-brand-red shrink-0 mt-0.5" />
                        <span>{mistake}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* -------------------------------------------------------------- */}
              {/* EXTERNAL REFERENCE SOURCE LINK (Automatically hidden if no link) */}
              {/* -------------------------------------------------------------- */}
              {activeItem.sourceUrl && (
                <div className="p-3.5 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex items-center justify-between text-xs">
                  <div className="min-w-0 pr-2">
                    <span className="text-[10px] text-zinc-400 font-bold uppercase block">
                      Reference &amp; Citation Source
                    </span>
                    <span className="font-medium text-zinc-900 dark:text-white truncate block">
                      {activeItem.sourceName || activeItem.sourceUrl}
                    </span>
                  </div>
                  <a
                    href={activeItem.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-lg bg-zinc-200 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 hover:bg-brand-red hover:text-white transition-colors shrink-0 inline-flex items-center gap-1 font-bold"
                  >
                    Open Source <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              )}

              {/* Footer Actions */}
              <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-between">
                <span className="text-[10px] font-mono text-zinc-400">ID: {activeItem.id}</span>
                <Link
                  href={`/library/${activeItem.category}/${activeItem.slug}`}
                  className="px-4 py-2 rounded-xl bg-brand-red text-white text-xs font-bold uppercase tracking-wider hover:bg-zinc-900 transition-colors shadow-brand-glow inline-flex items-center gap-1.5"
                >
                  Dedicated Document Page <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
