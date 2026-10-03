'use client'

import * as React from 'react'
import Link from 'next/link'
import {
  Award,
  Users,
  Trophy,
  GraduationCap,
  Calendar,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  ChevronRight,
  Flame,
  Star,
  CheckCircle2,
  X,
  Quote,
  Instagram,
  Facebook,
  Linkedin,
  Youtube,
  Target,
  Zap,
  Clock,
  Heart,
  Medal,
  Search,
  RotateCcw,
} from 'lucide-react'
import { coachFaculty, type CoachProfile } from '@/data/coaches'
import {
  athleteSpotlights,
  recentPromotions,
  type StudentSpotlight,
} from '@/data/students'
import { useLanguage } from '@/context/LanguageContext'
import { SafeGrid } from '@/components/SafeGrid'
import { SafeImage } from '@/components/SafeImage'
import { Card3D } from '@/components/ui/Card3D'

export default function CommunityPage() {
  const { t, localizeList } = useLanguage()
  const [activeTab, setActiveTab] = React.useState<'all' | 'coaches' | 'students' | 'promotions'>('all')

  const localizedCoaches = React.useMemo(() => {
    return localizeList(coachFaculty)
  }, [localizeList])

  const localizedStudents = React.useMemo(() => {
    return localizeList(athleteSpotlights)
  }, [localizeList])

  const localizedPromotions = React.useMemo(() => {
    return localizeList(recentPromotions)
  }, [localizeList])

  // Search and filter states
  const [coachSearch, setCoachSearch] = React.useState('')
  const [selectedCoachDivision, setSelectedCoachDivision] = React.useState<string>('All')

  const [studentSearch, setStudentSearch] = React.useState('')
  const [selectedStudentCategory, setSelectedStudentCategory] = React.useState<string>('All')

  // Modals
  const [selectedCoach, setSelectedCoach] = React.useState<CoachProfile | null>(null)
  const [selectedStudent, setSelectedStudent] = React.useState<StudentSpotlight | null>(null)

  // Body scroll lock & Escape key listener on modal open
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedCoach(null)
        setSelectedStudent(null)
      }
    }
    if (selectedCoach || selectedStudent) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [selectedCoach, selectedStudent])

  // Dynamic Coach Divisions with automatic count calculation
  const coachDivisions = React.useMemo(() => {
    const uniqueDivisions = Array.from(new Set(localizedCoaches.map((c) => c.division)))
    return [
      { id: 'All', label: 'All Divisions', count: localizedCoaches.length },
      ...uniqueDivisions.map((div) => ({
        id: div,
        label: div,
        count: localizedCoaches.filter((c) => c.division === div).length,
      })),
    ]
  }, [localizedCoaches])

  // Filtered Coaches with search
  const filteredCoaches = React.useMemo(() => {
    return localizedCoaches.filter((c) => {
      const matchesDivision =
        selectedCoachDivision === 'All' || c.division === selectedCoachDivision
      const q = coachSearch.toLowerCase().trim()
      const matchesSearch =
        !q ||
        c.name.toLowerCase().includes(q) ||
        c.role.toLowerCase().includes(q) ||
        c.bio.toLowerCase().includes(q) ||
        c.specialties.some((s) => s.toLowerCase().includes(q))
      return matchesDivision && matchesSearch
    })
  }, [selectedCoachDivision, coachSearch, localizedCoaches])

  // Dynamic Student Categories with automatic count calculation
  const studentCategories = React.useMemo(() => {
    const uniqueCats = Array.from(new Set(localizedStudents.map((s) => s.category)))
    return [
      { id: 'All', label: 'All Spotlights', count: localizedStudents.length },
      ...uniqueCats.map((cat) => ({
        id: cat,
        label: cat,
        count: localizedStudents.filter((s) => s.category === cat).length,
      })),
    ]
  }, [localizedStudents])

  // Filtered Students with search
  const filteredStudents = React.useMemo(() => {
    return localizedStudents.filter((s) => {
      const matchesCat =
        selectedStudentCategory === 'All' || s.category === selectedStudentCategory
      const q = studentSearch.toLowerCase().trim()
      const matchesSearch =
        !q ||
        s.name.toLowerCase().includes(q) ||
        s.title.toLowerCase().includes(q) ||
        s.story.toLowerCase().includes(q) ||
        s.achievements.some((a) => a.toLowerCase().includes(q))
      return matchesCat && matchesSearch
    })
  }, [selectedStudentCategory, studentSearch, localizedStudents])

  return (
    <div className="bg-zinc-50 dark:bg-black text-zinc-900 dark:text-white min-h-screen pt-20 sm:pt-24 pb-20 font-sans selection:bg-brand-red selection:text-white transition-colors duration-500 overflow-x-hidden">
      {/* Hero Header */}
      <section className="relative pt-8 sm:pt-12 pb-10 sm:pb-14 px-4 sm:px-6 text-center overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[450px] bg-gradient-to-b from-brand-red/15 via-transparent to-transparent blur-3xl rounded-full opacity-60 pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl border border-brand-red/30 bg-brand-red/10 text-brand-red text-xs font-bold uppercase tracking-widest mb-4">
            <Users className="w-3.5 h-3.5" /> {t.community.badge}
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight mb-4 sm:mb-6 leading-none text-zinc-900 dark:text-white break-words">
            {t.community.heroTitle1} <span className="text-brand-red">{t.community.heroTitle2}</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto font-light leading-relaxed px-2">
            {t.community.heroSubtitle}
          </p>
        </div>
      </section>

      {/* Main Tab Switcher (12px radius) */}
      <section className="container mx-auto px-4 sm:px-6 mb-10 sm:mb-14 max-w-7xl">
        <div className="flex flex-wrap justify-center gap-2 sm:gap-2.5 max-w-2xl mx-auto">
          {[
            { id: 'all', label: `${t.community.tabAll} (${coachFaculty.length + athleteSpotlights.length})` },
            { id: 'coaches', label: `${t.community.tabCoaches} (${coachFaculty.length})` },
            { id: 'students', label: `${t.community.tabStudents} (${athleteSpotlights.length})` },
            { id: 'promotions', label: `${t.community.tabPromotions} (${recentPromotions.length})` },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-4 sm:px-5 py-2 rounded-xl text-[11px] sm:text-xs font-bold uppercase tracking-widest transition-all duration-300 touch-press cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-brand-red text-white shadow-brand-glow'
                  : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200 dark:bg-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 border border-zinc-200 dark:border-zinc-800'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </section>

      {/* SECTION 1: MASTERS & COACHES */}
      {(activeTab === 'all' || activeTab === 'coaches') && (
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-16 sm:mb-24 max-w-7xl animate-fade-in">
          {/* Header & Controls Bar */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-8 pb-4 border-b border-zinc-200 dark:border-zinc-800">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-brand-red block mb-1">
                World Taekwondo &amp; Kukkiwon Faculty
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight text-zinc-900 dark:text-white">
                {t.community.tabCoaches}{' '}
                <span className="text-xs text-zinc-400 font-mono align-middle">
                  ({filteredCoaches.length} of {coachFaculty.length})
                </span>
              </h2>
            </div>

            {/* Division Filters & Search */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              {/* Search Box */}
              <div className="relative">
                <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" />
                <input
                  type="text"
                  placeholder="Search coach or specialty..."
                  value={coachSearch}
                  onChange={(e) => setCoachSearch(e.target.value)}
                  aria-label="Search coaches and specialties"
                  className="w-full sm:w-64 pl-9 pr-3 py-2 text-base sm:text-xs min-h-[44px] rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 focus:outline-none focus:border-brand-red transition-colors"
                />
              </div>

              {/* Division Filter Pills */}
              <div className="flex flex-wrap gap-1.5">
                {coachDivisions.map((div) => (
                  <button
                    key={div.id}
                    onClick={() => setSelectedCoachDivision(div.id)}
                    className={`px-3 py-1.5 rounded-xl text-[10px] sm:text-xs font-bold uppercase tracking-wider transition-all duration-300 touch-press cursor-pointer ${
                      selectedCoachDivision === div.id
                        ? 'bg-brand-red text-white shadow-brand-glow'
                        : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200 dark:bg-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 border border-zinc-200 dark:border-zinc-800'
                    }`}
                  >
                    {div.label} ({div.count})
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Dynamic Coach Grid (14px radius) */}
          {filteredCoaches.length > 0 ? (
            <SafeGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8" isolateItems>
              {filteredCoaches.map((coach) => (
                <Card3D key={coach.id} max={5} depth={4} className="h-full">
                  <div
                    onClick={() => setSelectedCoach(coach)}
                    className="group relative rounded-[14px] overflow-hidden bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 hover:border-brand-red/50 transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col justify-between cursor-pointer h-full"
                  >
                    <div>
                      {/* Coach Image with Tag Overlay */}
                      <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-zinc-950">
                        <SafeImage
                          src={coach.image}
                          alt={coach.name}
                          className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                        <div className="absolute top-4 left-4">
                          <span className="px-2.5 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest bg-brand-red text-white shadow-sm">
                            {coach.division}
                          </span>
                        </div>

                        <div className="absolute bottom-4 left-4 right-4">
                          {coach.koreanName && (
                            <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest block mb-0.5">
                              {coach.koreanName}
                            </span>
                          )}
                          <h3 className="text-xl font-black uppercase tracking-tight text-white group-hover:text-brand-red transition-colors">
                            {coach.name}
                          </h3>
                          <p className="text-xs text-zinc-300 font-medium">
                            {coach.role} • {coach.danRank}
                          </p>
                        </div>
                      </div>

                      {/* Coach Content */}
                      <div className="p-5 sm:p-6 space-y-4">
                        <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 font-light leading-relaxed line-clamp-3">
                          {coach.bio}
                        </p>

                        {/* Specialties Pill Badges */}
                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {coach.specialties.slice(0, 3).map((spec, i) => (
                            <span
                              key={i}
                              className="px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider bg-zinc-200/70 dark:bg-zinc-800/80 text-zinc-700 dark:text-zinc-300"
                            >
                              {spec}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Card Footer */}
                    <div className="p-5 sm:p-6 pt-0 flex items-center justify-between border-t border-zinc-200/60 dark:border-zinc-800/60 mt-4 text-xs">
                      <span className="text-zinc-400 font-medium">{coach.experience} Experience</span>
                      <span className="font-bold text-brand-red flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                        View Profile <ChevronRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </Card3D>
              ))}
            </SafeGrid>
          ) : (
            /* Empty State for Coaches */
            <div className="p-12 text-center rounded-[14px] bg-zinc-50 dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800 max-w-xl mx-auto">
              <Search className="w-8 h-8 text-zinc-400 mx-auto mb-3" />
              <h4 className="text-lg font-bold text-zinc-900 dark:text-white mb-1">
                No Coaches Found
              </h4>
              <p className="text-xs text-zinc-500 mb-4 font-light">
                No faculty members match your filter criteria.
              </p>
              <button
                onClick={() => {
                  setCoachSearch('')
                  setSelectedCoachDivision('All')
                }}
                className="px-4 py-2.5 min-h-[44px] rounded-xl bg-brand-red text-white text-xs font-bold uppercase tracking-wider hover:bg-zinc-900 transition-colors inline-flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" /> Reset Filters
              </button>
            </div>
          )}
        </section>
      )}

      {/* SECTION 2: STUDENT SPOTLIGHTS */}
      {(activeTab === 'all' || activeTab === 'students') && (
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-16 sm:mb-24 max-w-7xl animate-fade-in">
          {/* Header & Controls Bar */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-8 pb-4 border-b border-zinc-200 dark:border-zinc-800">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-brand-red block mb-1">
                Athlete Transformations &amp; Champions
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight text-zinc-900 dark:text-white">
                {t.community.tabStudents}{' '}
                <span className="text-xs text-zinc-400 font-mono align-middle">
                  ({filteredStudents.length} of {athleteSpotlights.length})
                </span>
              </h2>
            </div>

            {/* Category Filters & Search */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              {/* Search Box */}
              <div className="relative">
                <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" />
                <input
                  type="text"
                  placeholder="Search student or achievement..."
                  value={studentSearch}
                  onChange={(e) => setStudentSearch(e.target.value)}
                  aria-label="Search students and achievements"
                  className="w-full sm:w-64 pl-9 pr-3 py-2 text-base sm:text-xs min-h-[44px] rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 focus:outline-none focus:border-brand-red transition-colors"
                />
              </div>

              {/* Category Filter Pills */}
              <div className="flex flex-wrap gap-1.5">
                {studentCategories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedStudentCategory(cat.id)}
                    className={`px-3 py-1.5 rounded-xl text-[10px] sm:text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                      selectedStudentCategory === cat.id
                        ? 'bg-brand-red text-white shadow-brand-glow'
                        : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200 dark:bg-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 border border-zinc-200 dark:border-zinc-800'
                    }`}
                  >
                    {cat.label} ({cat.count})
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Dynamic Students Grid (14px radius) */}
          {filteredStudents.length > 0 ? (
            <SafeGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8" isolateItems>
              {filteredStudents.map((student) => (
                <Card3D key={student.id} max={5} depth={4} className="h-full">
                  <div
                    onClick={() => setSelectedStudent(student)}
                    className="group relative rounded-[14px] overflow-hidden bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 hover:border-brand-red/50 transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col justify-between cursor-pointer h-full"
                  >
                    <div>
                      {/* Student Image & Belt Tag Overlay */}
                      <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-zinc-950">
                        <SafeImage
                          src={student.image}
                          alt={student.name}
                          className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                        <div className="absolute top-4 left-4 flex gap-2">
                          <span className="px-2.5 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest bg-brand-red text-white shadow-sm">
                            {student.category}
                          </span>
                        </div>

                        <div className="absolute bottom-4 left-4 right-4">
                          <div className="flex items-center gap-2 mb-1">
                            <div
                              className="w-3 h-3 rounded-full border border-white/40 shadow-sm"
                              style={{ backgroundColor: student.beltHex }}
                            />
                            <span className="text-xs font-bold text-zinc-300 uppercase">
                              {student.beltRank} • Age {student.age}
                            </span>
                          </div>
                          <h3 className="text-xl font-black uppercase tracking-tight text-white group-hover:text-brand-red transition-colors">
                            {student.name}
                          </h3>
                        </div>
                      </div>

                      {/* Student Content */}
                      <div className="p-5 sm:p-6 space-y-3">
                        <h4 className="text-xs font-bold uppercase text-brand-red tracking-wide">
                          {student.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 font-light leading-relaxed line-clamp-3">
                          {student.story}
                        </p>
                      </div>
                    </div>

                    {/* Card Footer */}
                    <div className="p-5 sm:p-6 pt-0 flex items-center justify-between border-t border-zinc-200/60 dark:border-zinc-800/60 mt-4 text-xs">
                      <span className="text-zinc-400 font-medium">Training since {student.joinedYear}</span>
                      <span className="font-bold text-brand-red flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                        Read Story <ChevronRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </Card3D>
              ))}
            </SafeGrid>
          ) : (
            /* Empty State for Students */
            <div className="p-12 text-center rounded-[14px] bg-zinc-50 dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800 max-w-xl mx-auto">
              <Search className="w-8 h-8 text-zinc-400 mx-auto mb-3" />
              <h4 className="text-lg font-bold text-zinc-900 dark:text-white mb-1">
                No Athletes Found
              </h4>
              <p className="text-xs text-zinc-500 mb-4 font-light">
                No student profiles match your search criteria.
              </p>
              <button
                onClick={() => {
                  setStudentSearch('')
                  setSelectedStudentCategory('All')
                }}
                className="px-4 py-2.5 min-h-[44px] rounded-xl bg-brand-red text-white text-xs font-bold uppercase tracking-wider hover:bg-zinc-900 transition-colors inline-flex items-center justify-center gap-1.5 touch-press cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" /> Reset Filters
              </button>
            </div>
          )}
        </section>
      )}

      {/* SECTION 3: RECENT BELT PROMOTIONS (14px radius) */}
      {(activeTab === 'all' || activeTab === 'promotions') && (
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-16 sm:mb-24 max-w-7xl animate-fade-in">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8 pb-4 border-b border-zinc-200 dark:border-zinc-800">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-brand-red block mb-1">
                Official Kukkiwon &amp; Dojang Certifications
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight text-zinc-900 dark:text-white">
                {t.community.tabPromotions}{' '}
                <span className="text-xs text-zinc-400 font-mono align-middle">
                  ({recentPromotions.length} Graduates)
                </span>
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {localizedPromotions.map((promo) => (
              <Card3D key={promo.id} max={4} depth={3} className="h-full">
                <div
                  className="p-5 rounded-[14px] bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 shadow-sm flex flex-col justify-between h-full"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="text-xs font-mono font-bold text-zinc-400">{promo.date}</span>
                      <div
                        className="w-3.5 h-3.5 rounded-full border border-black/20"
                        style={{ backgroundColor: promo.beltHex }}
                      />
                    </div>
                    <h4 className="text-base font-black uppercase text-zinc-900 dark:text-white">
                      {promo.studentName}
                    </h4>
                    <p className="text-xs font-bold text-brand-red uppercase mt-0.5 mb-2">
                      {promo.promotedTo}
                    </p>
                    <p className="text-xs text-zinc-500 font-light leading-relaxed">
                      Form: {promo.poomsaeDemonstrated}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-zinc-200/60 dark:border-zinc-800/60 text-[11px] text-zinc-400 font-medium">
                    Examined by: {promo.examiningMaster}
                  </div>
                </div>
              </Card3D>
            ))}
          </div>
        </section>
      )}

      {/* MODAL: COACH FULL PROFILE (Responsive Sheet on Mobile, Centered on Desktop) */}
      {selectedCoach && (
        <div
          className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center p-0 sm:p-6 animate-fade-in"
          onClick={() => setSelectedCoach(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="coach-modal-title"
        >
          <div className="absolute inset-0 bg-black/80 backdrop-blur-2xl" />

          <div
            className="relative w-full max-w-4xl bg-white dark:bg-zinc-950 shadow-2xl rounded-t-[20px] sm:rounded-[14px] border border-zinc-200 dark:border-zinc-800 overflow-hidden max-h-[92vh] sm:max-h-[90vh] flex flex-col md:flex-row z-10 animate-fade-in-up"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedCoach(null)}
              className="absolute top-4 right-4 z-30 p-2.5 rounded-xl bg-black/40 text-white hover:bg-brand-red transition-colors backdrop-blur-md cursor-pointer min-w-[44px] min-h-[44px] flex items-center justify-center"
              aria-label="Close Modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Left Col: Master Photo */}
            <div className="w-full md:w-5/12 relative h-56 sm:h-64 md:h-auto min-h-[220px] md:min-h-[260px] bg-zinc-950 shrink-0">
              <SafeImage
                src={selectedCoach.image}
                alt={selectedCoach.name}
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent md:hidden" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="px-2.5 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest bg-brand-red text-white">
                  {selectedCoach.danRank}
                </span>
                <h3 id="coach-modal-title" className="text-2xl font-black uppercase tracking-tight mt-2">
                  {selectedCoach.name}
                </h3>
              </div>
            </div>

            {/* Right Col: Details */}
            <div className="w-full md:w-7/12 p-6 sm:p-8 md:p-10 overflow-y-auto space-y-6 touch-scroll">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-brand-red block mb-1">
                  {selectedCoach.division} • {selectedCoach.experience} Experience
                </span>
                <h4 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-zinc-900 dark:text-white">
                  {selectedCoach.role}
                </h4>
              </div>

              {/* Master Philosophy */}
              <div className="p-4 sm:p-5 rounded-xl bg-zinc-50 dark:bg-zinc-900 border-l-4 border-brand-red">
                <div className="flex gap-2 items-start">
                  <Quote className="w-4 h-4 text-brand-red shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 font-light italic leading-relaxed">
                    &ldquo;{selectedCoach.philosophy}&rdquo;
                  </p>
                </div>
              </div>

              {/* Biography */}
              <div>
                <h5 className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-2">
                  Biography &amp; Lineage
                </h5>
                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 font-light leading-relaxed">
                  {selectedCoach.bio}
                </p>
              </div>

              {/* Specialties */}
              <div>
                <h5 className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-3">
                  Core Coaching Specialties
                </h5>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedCoach.specialties.map((spec, i) => (
                    <div
                      key={i}
                      className="p-2.5 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex items-center gap-2 text-xs text-zinc-700 dark:text-zinc-300"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-red shrink-0" />
                      <span className="truncate">{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Certifications */}
              <div>
                <h5 className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-3">
                  Accreditations &amp; Licenses
                </h5>
                <div className="flex flex-wrap gap-2">
                  {selectedCoach.certifications.map((cert, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider bg-brand-red/10 text-brand-red border border-brand-red/20"
                    >
                      {cert}
                    </span>
                  ))}
                </div>
              </div>

              {/* Modal Footer */}
              <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-between text-xs text-zinc-500">
                <span>Faculty Profile #{selectedCoach.id}</span>
                <Link
                  href="/contact"
                  className="px-4 py-2.5 rounded-xl bg-brand-red text-white font-bold uppercase tracking-wider hover:bg-zinc-900 transition-colors"
                >
                  Contact Dojang
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* MODAL: STUDENT SPOTLIGHT PROFILE (Responsive Sheet on Mobile, Centered on Desktop) */}
      {selectedStudent && (
        <div
          className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center p-0 sm:p-6 animate-fade-in"
          onClick={() => setSelectedStudent(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="student-modal-title"
        >
          <div className="absolute inset-0 bg-black/80 backdrop-blur-2xl" />

          <div
            className="relative w-full max-w-4xl bg-white dark:bg-zinc-950 shadow-2xl rounded-t-[20px] sm:rounded-[14px] border border-zinc-200 dark:border-zinc-800 overflow-hidden max-h-[92vh] sm:max-h-[90vh] flex flex-col md:flex-row z-10 animate-fade-in-up"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedStudent(null)}
              className="absolute top-4 right-4 z-30 p-2.5 rounded-xl bg-black/40 text-white hover:bg-brand-red transition-colors backdrop-blur-md cursor-pointer min-w-[44px] min-h-[44px] flex items-center justify-center"
              aria-label="Close Modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Left Col: Photo */}
            <div className="w-full md:w-5/12 relative h-56 sm:h-64 md:h-auto min-h-[220px] md:min-h-[260px] bg-zinc-950 shrink-0">
              <SafeImage
                src={selectedStudent.image}
                alt={selectedStudent.name}
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent md:hidden" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <div className="flex items-center gap-2 mb-1">
                  <div
                    className="w-3 h-3 rounded-full border border-white/40 shadow-sm"
                    style={{ backgroundColor: selectedStudent.beltHex }}
                  />
                  <span className="text-xs font-bold text-zinc-300 uppercase">
                    {selectedStudent.beltRank} • Age {selectedStudent.age}
                  </span>
                </div>
                <h3 id="student-modal-title" className="text-2xl font-black uppercase tracking-tight">
                  {selectedStudent.name}
                </h3>
              </div>
            </div>

            {/* Right Col: Details */}
            <div className="w-full md:w-7/12 p-6 sm:p-8 md:p-10 overflow-y-auto space-y-6 touch-scroll">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-brand-red block mb-1">
                  {selectedStudent.category} • Enrolled {selectedStudent.joinedYear}
                </span>
                <h4 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-zinc-900 dark:text-white">
                  {selectedStudent.title}
                </h4>
              </div>

              {/* Quote */}
              <div className="p-4 sm:p-5 rounded-xl bg-zinc-50 dark:bg-zinc-900 border-l-4 border-brand-red">
                <div className="flex gap-2 items-start">
                  <Quote className="w-4 h-4 text-brand-red shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 font-light italic leading-relaxed">
                    &ldquo;{selectedStudent.quote}&rdquo;
                  </p>
                </div>
              </div>

              {/* Journey Story */}
              <div>
                <h5 className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-2">
                  Transformation &amp; Dedication
                </h5>
                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 font-light leading-relaxed">
                  {selectedStudent.story}
                </p>
              </div>

              {/* Verified Achievements */}
              <div>
                <h5 className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-3">
                  Verified Honors &amp; Milestones
                </h5>
                <div className="space-y-2">
                  {selectedStudent.achievements.map((ach, i) => (
                    <div
                      key={i}
                      className="p-3 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex items-center gap-2.5 text-xs text-zinc-700 dark:text-zinc-300"
                    >
                      <Medal className="w-4 h-4 text-amber-500 shrink-0" />
                      <span className="font-semibold">{ach}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Modal Footer CTA */}
              <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-xs text-zinc-500 font-medium">
                  Student Record #{selectedStudent.id}
                </span>
                <Link
                  href={`/contact?subject=Enrollment%20inspired%20by%20${encodeURIComponent(selectedStudent.name)}`}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-brand-red text-white text-xs font-bold uppercase tracking-widest hover:bg-zinc-900 transition-all shadow-brand-glow text-center flex items-center justify-center gap-2"
                >
                  Start Your Journey <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
