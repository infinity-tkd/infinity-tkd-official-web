'use client'

import * as React from 'react'
import Link from 'next/link'
import {
  Trophy,
  Medal,
  Award,
  Star,
  Sparkles,
  Calendar,
  MapPin,
  ArrowRight,
  ShieldCheck,
  X,
  CheckCircle2,
  Zap,
  ExternalLink,
  ChevronRight,
  Flame,
  Search,
  RotateCcw,
  Users,
  GraduationCap,
  Target,
} from 'lucide-react'
import {
  tournamentAchievements,
  achievementMetrics,
  type TrophyRecord,
  type StudentCompetitor,
} from '@/data/achievements'
import { AnimatedCounter } from '@/components/AnimatedCounter'
import { SafeGrid } from '@/components/SafeGrid'
import { SafeImage } from '@/components/SafeImage'
import { Card3D } from '@/components/ui/Card3D'
import { useLanguage } from '@/context/LanguageContext'

export default function AchievementsPage() {
  const { t, localizeList } = useLanguage()
  const [selectedView, setSelectedView] = React.useState<'all' | 'tournaments' | 'students'>('all')
  const [selectedCategory, setSelectedCategory] = React.useState<string>('All')
  const [selectedMedalFilter, setSelectedMedalFilter] = React.useState<string>('All')
  const [searchQuery, setSearchQuery] = React.useState<string>('')
  const [selectedTrophy, setSelectedTrophy] = React.useState<TrophyRecord | null>(null)
  const [selectedCompetitor, setSelectedCompetitor] = React.useState<StudentCompetitor | null>(null)

  const localizedAchievements = React.useMemo(() => {
    return localizeList(tournamentAchievements)
  }, [localizeList])

  // Aggregate all individual student competitors across all achievements
  const allStudentCompetitors = React.useMemo(() => {
    const list: (StudentCompetitor & { tournamentName: string; year: string })[] = []
    localizedAchievements.forEach((ach) => {
      if (ach.studentCompetitors) {
        ach.studentCompetitors.forEach((comp) => {
          list.push({
            ...comp,
            tournamentName: ach.tournament,
            year: ach.year,
          })
        })
      }
    })
    return list
  }, [localizedAchievements])

  // Dynamically extract all unique categories with exact auto-calculated counts from data
  const dynamicCategories = React.useMemo(() => {
    const uniqueCats = Array.from(new Set(localizedAchievements.map((item) => item.category)))
    return [
      { id: 'All', label: 'All Categories', count: localizedAchievements.length },
      ...uniqueCats.map((cat) => ({
        id: cat,
        label: cat,
        count: localizedAchievements.filter((item) => item.category === cat).length,
      })),
    ]
  }, [localizedAchievements])

  // Filter trophies dynamically by category, medal filter, and live search query
  const filteredTrophies = React.useMemo(() => {
    return localizedAchievements.filter((item) => {
      const matchesCat = selectedCategory === 'All' || item.category === selectedCategory
      const matchesMedal =
        selectedMedalFilter === 'All' ||
        (selectedMedalFilter === 'Gold' && (item.medal === 'Gold' || item.medal === 'Grand Champion')) ||
        (selectedMedalFilter === 'Silver' && item.medal === 'Silver') ||
        (selectedMedalFilter === 'Bronze' && item.medal === 'Bronze') ||
        (selectedMedalFilter === 'Special Honor' && item.medal === 'Special Honor')

      const q = searchQuery.toLowerCase().trim()
      const matchesSearch =
        !q ||
        item.tournament.toLowerCase().includes(q) ||
        item.athleteOrTeam.toLowerCase().includes(q) ||
        item.division.toLowerCase().includes(q) ||
        item.location.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        (item.studentCompetitors &&
          item.studentCompetitors.some(
            (c) =>
              c.name.toLowerCase().includes(q) ||
              c.division.toLowerCase().includes(q) ||
              c.beltRank.toLowerCase().includes(q)
          )) ||
        (item.keyTechniques && item.keyTechniques.some((k) => k.toLowerCase().includes(q)))
      return matchesCat && matchesMedal && matchesSearch
    })
  }, [selectedCategory, selectedMedalFilter, searchQuery, localizedAchievements])

  // Filter individual student competitors by medal and search
  const filteredStudentCompetitors = React.useMemo(() => {
    return allStudentCompetitors.filter((student) => {
      const matchesMedal =
        selectedMedalFilter === 'All' ||
        (selectedMedalFilter === 'Gold' && student.medal === 'Gold') ||
        (selectedMedalFilter === 'Silver' && student.medal === 'Silver') ||
        (selectedMedalFilter === 'Bronze' && student.medal === 'Bronze') ||
        (selectedMedalFilter === 'Special Honor' && student.medal === 'Special Honor')

      const q = searchQuery.toLowerCase().trim()
      const matchesSearch =
        !q ||
        student.name.toLowerCase().includes(q) ||
        student.beltRank.toLowerCase().includes(q) ||
        student.division.toLowerCase().includes(q) ||
        student.tournamentName.toLowerCase().includes(q) ||
        student.medal.toLowerCase().includes(q) ||
        (student.highlight && student.highlight.toLowerCase().includes(q))

      return matchesMedal && matchesSearch
    })
  }, [allStudentCompetitors, selectedMedalFilter, searchQuery])

  // Lock body scroll when modal is open
  // Body scroll lock & Escape key listener
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedTrophy(null)
        setSelectedCompetitor(null)
      }
    }
    if (selectedTrophy || selectedCompetitor) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [selectedTrophy, selectedCompetitor])

  const openTrophyModal = (trophy: TrophyRecord) => {
    setSelectedTrophy(trophy)
  }

  const closeTrophyModal = () => {
    setSelectedTrophy(null)
  }

  const openCompetitorModal = (comp: StudentCompetitor) => {
    setSelectedCompetitor(comp)
  }

  const closeCompetitorModal = () => {
    setSelectedCompetitor(null)
  }

  const getMedalStyles = (medal: string) => {
    switch (medal) {
      case 'Gold':
      case 'Grand Champion':
        return {
          bg: 'bg-amber-500/10 dark:bg-amber-500/20 text-amber-600 dark:text-amber-400 border-amber-500/40',
          iconColor: 'text-amber-500',
          accentBorder: 'group-hover:border-amber-500/60',
          glow: 'shadow-[0_0_20px_rgba(245,158,11,0.2)]',
        }
      case 'Silver':
        return {
          bg: 'bg-zinc-300/20 dark:bg-zinc-700/30 text-zinc-700 dark:text-zinc-300 border-zinc-400/40',
          iconColor: 'text-zinc-400',
          accentBorder: 'group-hover:border-zinc-400/60',
          glow: 'shadow-[0_0_20px_rgba(161,161,170,0.2)]',
        }
      case 'Bronze':
        return {
          bg: 'bg-amber-800/10 dark:bg-amber-900/30 text-amber-800 dark:text-amber-400 border-amber-800/40',
          iconColor: 'text-amber-700',
          accentBorder: 'group-hover:border-amber-700/60',
          glow: 'shadow-[0_0_20px_rgba(180,83,9,0.2)]',
        }
      default:
        return {
          bg: 'bg-brand-red/10 dark:bg-brand-red/20 text-brand-red border-brand-red/40',
          iconColor: 'text-brand-red',
          accentBorder: 'group-hover:border-brand-red/60',
          glow: 'shadow-[0_0_20px_rgba(239,47,56,0.2)]',
        }
    }
  }

  return (
    <div className="bg-white dark:bg-black text-zinc-900 dark:text-white min-h-screen pt-20 sm:pt-24 pb-20 font-sans selection:bg-brand-red selection:text-white transition-colors duration-500 overflow-x-hidden">
      {/* Hero Header */}
      <section className="relative pt-8 sm:pt-12 pb-10 sm:pb-14 px-4 sm:px-6 text-center overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[450px] bg-gradient-to-b from-brand-red/10 via-transparent to-transparent blur-3xl rounded-full opacity-60 pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl border border-brand-red/30 bg-brand-red/10 text-brand-red text-xs font-bold uppercase tracking-widest mb-4">
            <Trophy className="w-3.5 h-3.5" /> {t.achievements.badge}
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight mb-4 sm:mb-6 leading-none text-zinc-900 dark:text-white break-words">
            {t.achievements.heroTitle1} <span className="text-brand-red">{t.achievements.heroTitle2}</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto font-light leading-relaxed px-2">
            {t.achievements.heroSubtitle}
          </p>
        </div>
      </section>

      {/* Metrics Banner (14px radius) */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16 max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {achievementMetrics.map((metric) => (
            <div
              key={metric.label}
              className="p-5 sm:p-6 rounded-[14px] bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 shadow-sm text-center flex flex-col justify-center items-center transform transition-all duration-300 hover:border-brand-red/40"
            >
              <span className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-brand-red mb-1 font-mono">
                <AnimatedCounter value={metric.value} duration={1800} />
              </span>
              <span className="text-xs font-bold uppercase tracking-widest text-zinc-900 dark:text-white mb-1.5 sm:mb-2 break-words">
                {metric.label}
              </span>
              <p className="text-xs text-zinc-500 font-light leading-relaxed max-w-xs break-words">
                {metric.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* View Switcher Bar (12px radius) */}
      <section className="container mx-auto px-4 sm:px-6 mb-8 max-w-4xl">
        <div className="flex flex-wrap justify-center gap-2 sm:gap-2.5 p-1.5 bg-zinc-100 dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 max-w-lg mx-auto">
          <button
            onClick={() => setSelectedView('all')}
            className={`flex-1 min-w-[120px] py-2.5 rounded-lg text-[11px] sm:text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer flex items-center justify-center gap-2 ${
              selectedView === 'all'
                ? 'bg-brand-red text-white shadow-brand-glow'
                : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white'
            }`}
          >
            <Trophy className="w-3.5 h-3.5" /> All Trophies ({tournamentAchievements.length})
          </button>

          <button
            onClick={() => setSelectedView('students')}
            className={`flex-1 min-w-[120px] py-2.5 rounded-lg text-[11px] sm:text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer flex items-center justify-center gap-2 ${
              selectedView === 'students'
                ? 'bg-brand-red text-white shadow-brand-glow'
                : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white'
            }`}
          >
            <Users className="w-3.5 h-3.5" /> Student Medalists ({allStudentCompetitors.length})
          </button>
        </div>
      </section>

      {/* MAIN CONTENT SECTION */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl animate-fade-in">
        {/* Controls Bar: Search, Category & Medal Filters */}
        <div className="flex flex-col gap-4 mb-8 pb-6 border-b border-zinc-200 dark:border-zinc-800">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-zinc-900 dark:text-white">
                {selectedView === 'students' ? (
                  <>
                    Student <span className="text-brand-red">Medalist Roster</span>
                  </>
                ) : (
                  <>
                    Championship <span className="text-brand-red">Trophies &amp; Honors</span>
                  </>
                )}
              </h2>
              <p className="text-xs text-zinc-500 uppercase tracking-wider mt-0.5">
                {selectedView === 'students'
                  ? `Showcasing ${filteredStudentCompetitors.length} student athlete medal finishes`
                  : `Click any trophy card to view full judging breakdown & student competitor roster`}
              </p>
            </div>

            {/* Search Input Box */}
            <div className="relative">
              <Search className="w-3.5 h-3.5 absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400" />
              <input
                type="text"
                placeholder={
                  selectedView === 'students'
                    ? 'Search student, belt, division...'
                    : 'Search tournament, athlete, technique...'
                }
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                aria-label="Search tournament records and student competitors"
                className="w-full sm:w-72 pl-9 pr-8 py-2.5 text-base sm:text-xs min-h-[44px] rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 focus:outline-none focus:border-brand-red transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  aria-label="Clear search input"
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 p-2 min-w-[36px] min-h-[36px] flex items-center justify-center cursor-pointer"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>

          {/* Secondary Filters Bar: Category & Medal Filter Pills */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
            {/* Category Pills (for Trophy View) */}
            {selectedView !== 'students' ? (
              <div className="flex flex-wrap gap-1.5">
                {dynamicCategories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-3 py-1.5 rounded-xl text-[10px] sm:text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                      selectedCategory === cat.id
                        ? 'bg-brand-red text-white shadow-brand-glow'
                        : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200 dark:bg-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 border border-zinc-200 dark:border-zinc-800'
                    }`}
                  >
                    {cat.label} ({cat.count})
                  </button>
                ))}
              </div>
            ) : (
              <div className="text-xs font-mono text-zinc-400">
                Displaying individual student athletes across official tournaments
              </div>
            )}

            {/* Medal Type Filter */}
            <div className="flex items-center gap-1.5">
              <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 mr-1 hidden sm:inline-block">
                Medal:
              </span>
              {['All', 'Gold', 'Silver', 'Bronze', 'Special Honor'].map((m) => (
                <button
                  key={m}
                  onClick={() => setSelectedMedalFilter(m)}
                  className={`px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider transition-all cursor-pointer ${
                    selectedMedalFilter === m
                      ? 'bg-zinc-900 text-white dark:bg-white dark:text-black shadow-sm font-black'
                      : 'bg-zinc-100 dark:bg-zinc-900 text-zinc-500 hover:text-zinc-900 dark:hover:text-white'
                  }`}
                >
                  {m === 'Gold' ? '🥇 Gold' : m === 'Silver' ? '🥈 Silver' : m === 'Bronze' ? '🥉 Bronze' : m}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* VIEW 1: TOURNAMENT TROPHIES & STUDENT MEDAL BADGES (14px radius) */}
        {selectedView === 'all' && (
          <div>
            {filteredTrophies.length > 0 ? (
              <SafeGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" isolateItems>
                {filteredTrophies.map((record) => {
                  const styles = getMedalStyles(record.medal)

                  return (
                    <Card3D key={record.id} maxTilt={3} className="h-full">
                      <div
                        onClick={() => openTrophyModal(record)}
                        className={`group h-full p-6 sm:p-7 rounded-[14px] bg-zinc-50/70 dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800 transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col justify-between cursor-pointer ${styles.accentBorder} relative overflow-hidden`}
                      >
                        <div>
                          {/* Header: Year & Medal Tag */}
                          <div className="flex items-center justify-between gap-2 mb-4">
                            <span className="text-xs font-bold text-zinc-400 font-mono">
                              {record.year}
                            </span>
                            <span
                              className={`px-2.5 py-1 rounded-lg text-[10px] font-black uppercase tracking-wider border ${styles.bg}`}
                            >
                              {record.medal}
                            </span>
                          </div>

                          {/* Title & Division */}
                          <h3 className="text-lg sm:text-xl font-black uppercase text-zinc-900 dark:text-white tracking-tight mb-1.5 group-hover:text-brand-red transition-colors break-words">
                            {record.tournament}
                          </h3>
                          <p className="text-xs font-bold text-brand-red uppercase mb-3 break-words">
                            {record.division}
                          </p>

                          <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 font-light leading-relaxed mb-4 line-clamp-3 break-words">
                            {record.description}
                          </p>

                          {/* Student Competitor Avatars on Card */}
                          {record.studentCompetitors && record.studentCompetitors.length > 0 && (
                            <div className="mb-4 p-3 rounded-xl bg-white dark:bg-zinc-950 border border-zinc-100 dark:border-zinc-800 flex items-center justify-between gap-2">
                              <div className="flex items-center gap-2">
                                <div className="flex -space-x-2 overflow-hidden">
                                  {record.studentCompetitors.slice(0, 3).map((student, idx) => (
                                    <SafeImage
                                      key={idx}
                                      src={student.image || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop'}
                                      alt={student.name}
                                      className="inline-block h-6 w-6 rounded-full ring-2 ring-white dark:ring-zinc-900 object-cover"
                                    />
                                  ))}
                                </div>
                                <span className="text-[11px] font-bold text-zinc-800 dark:text-zinc-200 truncate">
                                  {record.studentCompetitors[0].name}
                                  {record.studentCompetitors.length > 1 &&
                                    ` +${record.studentCompetitors.length - 1} more`}
                                </span>
                              </div>

                              <span className="text-[10px] font-bold uppercase tracking-wider text-brand-red bg-brand-red/10 px-2 py-0.5 rounded-lg shrink-0">
                                {record.studentCompetitors.length} Medalists
                              </span>
                            </div>
                          )}
                        </div>

                        {/* Card Footer with Safe Wrapping */}
                        <div className="pt-4 border-t border-zinc-200/60 dark:border-zinc-800/60 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
                          <div className="flex items-center gap-1.5 font-bold text-zinc-800 dark:text-zinc-200 min-w-0">
                            <ShieldCheck className="w-3.5 h-3.5 text-brand-red shrink-0" />
                            <span className="truncate">{record.athleteOrTeam}</span>
                          </div>

                          <div className="flex items-center justify-between sm:justify-end gap-2 text-zinc-400">
                            <div className="flex items-center gap-1 min-w-0">
                              <MapPin className="w-3 h-3 shrink-0" />
                              <span className="truncate text-[11px]">{record.location.split(',')[0]}</span>
                            </div>
                            <ChevronRight className="w-4 h-4 text-brand-red shrink-0 transform group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </div>
                    </Card3D>
                  )
                })}
              </SafeGrid>
            ) : (
              <div className="p-12 text-center rounded-[14px] bg-zinc-50 dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800 max-w-xl mx-auto">
                <Search className="w-8 h-8 text-zinc-400 mx-auto mb-3" />
                <h4 className="text-lg font-bold text-zinc-900 dark:text-white mb-1">
                  No Achievements Found
                </h4>
                <p className="text-xs text-zinc-500 mb-4 font-light">
                  No championship records match &quot;{searchQuery}&quot;.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery('')
                    setSelectedCategory('All')
                    setSelectedMedalFilter('All')
                  }}
                  className="px-4 py-2.5 min-h-[44px] rounded-xl bg-brand-red text-white text-xs font-bold uppercase tracking-wider hover:bg-zinc-900 transition-colors inline-flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" /> Reset Filters
                </button>
              </div>
            )}
          </div>
        )}

        {/* VIEW 2: STUDENT COMPETITORS & MEDALISTS WALL (14px radius) */}
        {selectedView === 'students' && (
          <div>
            {filteredStudentCompetitors.length > 0 ? (
              <SafeGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" isolateItems>
                {filteredStudentCompetitors.map((student, idx) => {
                  const medalStyles = getMedalStyles(student.medal)

                  return (
                    <Card3D key={student.id || idx} maxTilt={3} className="h-full">
                      <div
                        onClick={() => openCompetitorModal(student)}
                        className="h-full p-6 rounded-[14px] bg-zinc-50/70 dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800 hover:border-brand-red/50 transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-xl cursor-pointer group"
                      >
                        <div>
                          {/* Student Avatar & Medal Header */}
                          <div className="flex items-center justify-between gap-3 mb-4">
                            <div className="flex items-center gap-3">
                              <SafeImage
                                src={student.image || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop'}
                                alt={student.name}
                                className="w-12 h-12 rounded-xl object-cover border-2 border-brand-red/40 shadow-sm group-hover:scale-105 transition-transform"
                              />
                              <div>
                                <h4 className="text-base font-black uppercase text-zinc-900 dark:text-white group-hover:text-brand-red transition-colors">
                                  {student.name}
                                </h4>
                                <div className="flex items-center gap-1.5 mt-0.5">
                                  <div
                                    className="w-2.5 h-2.5 rounded-full border border-black/20"
                                    style={{ backgroundColor: student.beltHex }}
                                  />
                                  <span className="text-[11px] font-bold text-zinc-500 uppercase">
                                    {student.beltRank}
                                  </span>
                                </div>
                              </div>
                            </div>

                            <span
                              className={`px-2.5 py-1 rounded-lg text-[10px] font-black uppercase tracking-wider border ${medalStyles.bg}`}
                            >
                              {student.medal}
                            </span>
                          </div>

                          {/* Division & Tournament Title */}
                          <div className="p-3.5 rounded-xl bg-white dark:bg-zinc-950 border border-zinc-100 dark:border-zinc-800/80 mb-3 space-y-1">
                            <span className="text-[10px] font-bold uppercase tracking-widest text-brand-red block">
                              {student.division}
                            </span>
                            <p className="text-xs font-bold text-zinc-800 dark:text-zinc-200 truncate">
                              {student.tournamentName} ({student.year})
                            </p>
                          </div>

                          {/* Highlight */}
                          {student.highlight && (
                            <p className="text-xs text-zinc-600 dark:text-zinc-400 font-light leading-relaxed mb-4 italic">
                              &ldquo;{student.highlight}&rdquo;
                            </p>
                          )}
                        </div>

                        {/* Footer: Score / Action */}
                        <div className="pt-3 border-t border-zinc-200/60 dark:border-zinc-800/60 flex items-center justify-between text-xs">
                          <span className="text-zinc-400 font-mono text-[11px]">
                            {student.score ? `Score: ${student.score}` : 'Official Podium Finish'}
                          </span>
                          <span className="font-bold text-brand-red group-hover:translate-x-1 transition-transform inline-flex items-center gap-1 text-[11px] uppercase tracking-wide">
                            View Profile <ChevronRight className="w-3 h-3" />
                          </span>
                        </div>
                      </div>
                    </Card3D>
                  )
                })}
              </SafeGrid>
            ) : (
              <div className="p-12 text-center rounded-[14px] bg-zinc-50 dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800 max-w-xl mx-auto">
                <Search className="w-8 h-8 text-zinc-400 mx-auto mb-3" />
                <h4 className="text-lg font-bold text-zinc-900 dark:text-white mb-1">
                  No Student Competitors Found
                </h4>
                <p className="text-xs text-zinc-500 mb-4 font-light">
                  No student athlete matches &quot;{searchQuery}&quot;.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery('')
                    setSelectedMedalFilter('All')
                  }}
                  className="px-4 py-2.5 min-h-[44px] rounded-xl bg-brand-red text-white text-xs font-bold uppercase tracking-wider hover:bg-zinc-900 transition-colors inline-flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" /> Reset Filters
                </button>
              </div>
            )}
          </div>
        )}
      </section>

      {/* MODAL 1: TOURNAMENT TROPHY DETAIL (Responsive Sheet on Mobile, Centered on Desktop) */}
      {selectedTrophy && (
        <div
          className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center p-0 sm:p-6 animate-fade-in"
          onClick={closeTrophyModal}
          role="dialog"
          aria-modal="true"
          aria-labelledby="trophy-modal-title"
        >
          {/* Backdrop Blur */}
          <div className="absolute inset-0 bg-black/80 backdrop-blur-2xl" />

          {/* Modal Container */}
          <div
            className="relative w-full max-w-3xl bg-white dark:bg-zinc-950 shadow-2xl rounded-t-[20px] sm:rounded-[14px] border border-zinc-200 dark:border-zinc-800 overflow-hidden max-h-[92vh] sm:max-h-[90vh] flex flex-col z-10 animate-fade-in-up"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Close Button */}
            <button
              onClick={closeTrophyModal}
              className="absolute top-4 right-4 z-30 p-2.5 rounded-xl bg-black/40 text-white hover:bg-brand-red transition-colors backdrop-blur-md cursor-pointer min-w-[44px] min-h-[44px] flex items-center justify-center"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header Banner */}
            <div className="relative p-6 sm:p-8 bg-zinc-900 text-white overflow-hidden border-b border-zinc-800">
              <div className="absolute top-0 right-0 w-72 h-72 bg-brand-red/15 blur-[90px] rounded-full pointer-events-none" />

              <div className="relative z-10 pr-8">
                <div className="flex flex-wrap items-center gap-2.5 mb-3">
                  <span className="px-2.5 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest bg-brand-red text-white">
                    {selectedTrophy.category}
                  </span>
                  <span className="text-xs font-mono font-bold text-zinc-400">
                    {selectedTrophy.year} Tournament Season
                  </span>
                  {selectedTrophy.score && (
                    <span className="px-2.5 py-0.5 rounded-lg text-[10px] font-bold uppercase tracking-wide bg-white/10 text-amber-300 border border-white/10">
                      Score: {selectedTrophy.score}
                    </span>
                  )}
                </div>

                <h3 id="trophy-modal-title" className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight leading-tight mb-2 break-words">
                  {selectedTrophy.tournament}
                </h3>
                <p className="text-xs sm:text-sm font-bold text-brand-red uppercase tracking-wider">
                  {selectedTrophy.division}
                </p>
              </div>
            </div>

            {/* Modal Scrollable Body */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6 touch-scroll">
              {/* Recipient & Location Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 block mb-1">
                    Athlete / Representing Unit
                  </span>
                  <p className="text-sm font-bold text-zinc-900 dark:text-white flex items-center gap-1.5 break-words">
                    <ShieldCheck className="w-4 h-4 text-brand-red shrink-0" />
                    {selectedTrophy.athleteOrTeam}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 block mb-1">
                    Championship Venue &amp; Country
                  </span>
                  <p className="text-sm font-bold text-zinc-900 dark:text-white flex items-center gap-1.5 break-words">
                    <MapPin className="w-4 h-4 text-brand-red shrink-0" />
                    {selectedTrophy.location}
                  </p>
                </div>
              </div>

              {/* DYNAMIC STUDENT COMPETITORS ROSTER */}
              {selectedTrophy.studentCompetitors && selectedTrophy.studentCompetitors.length > 0 && (
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-900 dark:text-white flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5 text-brand-red" /> Participating Student Competitors &amp; Medalists
                    </h4>
                    <span className="text-[10px] font-mono text-zinc-400">
                      {selectedTrophy.studentCompetitors.length} Fielded Athletes
                    </span>
                  </div>

                  <div className="grid grid-cols-1 gap-3">
                    {selectedTrophy.studentCompetitors.map((student, idx) => {
                      const medalStyles = getMedalStyles(student.medal)

                      return (
                        <div
                          key={idx}
                          onClick={() => {
                            closeTrophyModal()
                            openCompetitorModal(student)
                          }}
                          className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:border-brand-red/50 transition-colors cursor-pointer"
                        >
                          <div className="flex items-center gap-3">
                            <SafeImage
                              src={student.image || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop'}
                              alt={student.name}
                              className="w-10 h-10 rounded-xl object-cover border border-brand-red/30 shrink-0"
                            />
                            <div>
                              <div className="flex items-center gap-2">
                                <h5 className="text-sm font-black uppercase text-zinc-900 dark:text-white">
                                  {student.name}
                                </h5>
                                <span
                                  className={`px-2.5 py-0.5 rounded-lg text-[9px] font-black uppercase tracking-wider border ${medalStyles.bg}`}
                                >
                                  {student.medal}
                                </span>
                              </div>
                              <div className="flex items-center gap-1.5 text-xs text-zinc-500 mt-0.5">
                                <div
                                  className="w-2 h-2 rounded-full"
                                  style={{ backgroundColor: student.beltHex }}
                                />
                                <span>{student.beltRank}</span>
                                <span>•</span>
                                <span className="text-brand-red font-medium">{student.division}</span>
                              </div>
                            </div>
                          </div>

                          {student.highlight && (
                            <p className="text-xs text-zinc-600 dark:text-zinc-400 font-light italic max-w-xs text-left sm:text-right">
                              &ldquo;{student.highlight}&rdquo;
                            </p>
                          )}
                        </div>
                      )
                    })}
                  </div>
                </div>
              )}

              {/* Match Description */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-2">
                  Official Match &amp; Performance Summary
                </h4>
                <p className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 font-light leading-relaxed break-words">
                  {selectedTrophy.description}
                </p>
              </div>

              {/* Key Highlights Checklist */}
              {selectedTrophy.highlights && selectedTrophy.highlights.length > 0 && (
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-3">
                    Tournament Milestones &amp; Records
                  </h4>
                  <div className="space-y-2.5">
                    {selectedTrophy.highlights.map((h, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-2.5 p-3 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-xs text-zinc-700 dark:text-zinc-300"
                      >
                        <CheckCircle2 className="w-4 h-4 text-brand-red shrink-0 mt-0.5" />
                        <span className="leading-relaxed font-medium break-words">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Key Techniques Tag Cloud */}
              {selectedTrophy.keyTechniques && selectedTrophy.keyTechniques.length > 0 && (
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-2">
                    Key Technical Weaponry &amp; Forms
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedTrophy.keyTechniques.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-lg text-xs font-bold uppercase tracking-wide bg-brand-red/10 text-brand-red border border-brand-red/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Verification Authority */}
              {selectedTrophy.verifiedBy && (
                <div className="p-3.5 rounded-xl bg-zinc-100 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 text-xs text-zinc-500 flex items-center justify-between gap-2">
                  <span className="font-medium">Sanctioning Body:</span>
                  <span className="font-bold text-zinc-900 dark:text-white truncate">
                    {selectedTrophy.verifiedBy}
                  </span>
                </div>
              )}

              {/* Modal Footer CTA */}
              <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-xs text-zinc-500">
                  Infinity Competition Squad Record #{selectedTrophy.id}
                </span>
                <Link
                  href={`/contact?subject=Inquiry%20regarding%20${encodeURIComponent(selectedTrophy.tournament)}`}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-brand-red text-white text-xs font-bold uppercase tracking-widest hover:bg-zinc-900 transition-all shadow-brand-glow text-center flex items-center justify-center gap-2"
                >
                  Join Competition Team <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* MODAL 2: STUDENT COMPETITOR SPOTLIGHT (Responsive Sheet on Mobile, Centered on Desktop) */}
      {selectedCompetitor && (
        <div
          className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center p-0 sm:p-6 animate-fade-in"
          onClick={closeCompetitorModal}
          role="dialog"
          aria-modal="true"
          aria-labelledby="competitor-modal-title"
        >
          <div className="absolute inset-0 bg-black/80 backdrop-blur-2xl" />

          <div
            className="relative w-full max-w-lg bg-white dark:bg-zinc-950 shadow-2xl rounded-t-[20px] sm:rounded-[14px] border border-zinc-200 dark:border-zinc-800 overflow-hidden max-h-[92vh] sm:max-h-[90vh] flex flex-col z-10 animate-fade-in-up"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeCompetitorModal}
              className="absolute top-4 right-4 z-30 p-2.5 rounded-xl bg-black/40 text-white hover:bg-brand-red transition-colors backdrop-blur-md cursor-pointer min-w-[44px] min-h-[44px] flex items-center justify-center"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="flex items-center gap-4">
                <SafeImage
                  src={selectedCompetitor.image || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop'}
                  alt={selectedCompetitor.name}
                  className="w-20 h-20 rounded-xl object-cover border-2 border-brand-red shadow-md shrink-0"
                />
                <div>
                  <span
                    className={`px-2.5 py-0.5 rounded-lg text-[10px] font-black uppercase tracking-wider border mb-1.5 inline-block ${
                      getMedalStyles(selectedCompetitor.medal).bg
                    }`}
                  >
                    {selectedCompetitor.medal} Medalist
                  </span>
                  <h3 id="competitor-modal-title" className="text-2xl font-black uppercase text-zinc-900 dark:text-white leading-none">
                    {selectedCompetitor.name}
                  </h3>
                  <div className="flex items-center gap-2 mt-1.5 text-xs text-zinc-500 font-bold">
                    <div
                      className="w-3 h-3 rounded-full border border-black/20"
                      style={{ backgroundColor: selectedCompetitor.beltHex }}
                    />
                    <span>{selectedCompetitor.beltRank}</span>
                    {selectedCompetitor.age && <span>• Age {selectedCompetitor.age}</span>}
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 space-y-1.5">
                <span className="text-[10px] font-bold uppercase tracking-widest text-brand-red block">
                  Championship Division
                </span>
                <p className="text-sm font-bold text-zinc-900 dark:text-white">
                  {selectedCompetitor.division}
                </p>
                {selectedCompetitor.score && (
                  <p className="text-xs font-mono text-zinc-500 font-medium">
                    Official Match Score: {selectedCompetitor.score}
                  </p>
                )}
              </div>

              {selectedCompetitor.highlight && (
                <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 block mb-1">
                    Athlete Highlight &amp; Achievement
                  </span>
                  <p className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 font-light italic leading-relaxed">
                    &ldquo;{selectedCompetitor.highlight}&rdquo;
                  </p>
                </div>
              )}

              <div className="pt-2 flex items-center justify-between gap-3">
                <Link
                  href={`/contact?subject=Inquiry%20to%20train%20with%20${encodeURIComponent(selectedCompetitor.name)}`}
                  className="w-full py-3.5 rounded-xl bg-brand-red text-white text-xs font-bold uppercase tracking-widest hover:bg-zinc-900 transition-all shadow-brand-glow text-center flex items-center justify-center gap-2"
                >
                  Start Training Like {selectedCompetitor.name.split(' ')[0]} <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Audition Banner (14px radius) */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 mt-16 sm:mt-24 max-w-5xl">
        <div className="p-8 sm:p-12 rounded-[14px] bg-zinc-900 dark:bg-black border border-brand-red/30 text-white relative overflow-hidden text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-8">
          <div className="absolute top-0 right-0 w-80 h-80 bg-brand-red/10 blur-[100px] rounded-full pointer-events-none" />

          <div className="relative z-10 max-w-xl">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-red block mb-2">
              Audition for Team Infinity
            </span>
            <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight mb-2 break-words">
              {t.achievements.auditionTitle1} <span className="text-brand-red">{t.achievements.auditionTitle2}</span>
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed break-words">
              {t.achievements.auditionDesc}
            </p>
          </div>

          <Link
            href="/contact?subject=Team%20Audition%20Inquiry"
            className="relative z-10 w-full sm:w-auto px-8 py-4 rounded-xl bg-brand-red text-white font-bold uppercase tracking-widest text-xs hover:bg-white hover:text-black transition-all shadow-brand-glow whitespace-nowrap text-center"
          >
            {t.achievements.auditionBtn}
          </Link>
        </div>
      </section>
    </div>
  )
}
