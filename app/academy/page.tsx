'use client'

import * as React from 'react'
import Link from 'next/link'
import { academyCourses, type AcademyCourse } from '@/data/academy'
import { BeltProgressionGuide } from '@/components/BeltProgressionGuide'
import { ClassScheduleTable } from '@/components/ClassScheduleTable'
import { AgeDivisionsAndFormats } from '@/components/AgeDivisionsAndFormats'
import { SafeGrid } from '@/components/SafeGrid'
import { SafeImage } from '@/components/SafeImage'
import { Card3D } from '@/components/ui/Card3D'
import { useLanguage } from '@/context/LanguageContext'
import {
  BookOpen,
  Clock,
  Calendar,
  CheckCircle2,
  X,
  ArrowRight,
  Sparkles,
  Award,
  CalendarRange,
  Search,
  RotateCcw,
  Users,
} from 'lucide-react'

export default function AcademyPage() {
  const { t, localizeList } = useLanguage()
  const [selectedDivision, setSelectedDivision] = React.useState<string>('all')
  const [searchQuery, setSearchQuery] = React.useState<string>('')
  const [activeCourse, setActiveCourse] = React.useState<AcademyCourse | null>(null)
  const [currentView, setCurrentView] = React.useState<'courses' | 'ages' | 'belts' | 'schedule'>('courses')

  const localizedCourses = React.useMemo(() => {
    return localizeList(academyCourses)
  }, [localizeList])

  // Lock body scroll and handle Escape key when course modal is open
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveCourse(null)
      }
    }
    if (activeCourse) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [activeCourse])

  // Dynamic division categories with exact auto-calculated counts
  const divisions = React.useMemo(() => {
    return [
      { id: 'all', label: t.academy.allPrograms, count: localizedCourses.length },
      {
        id: 'taekwondo',
        label: t.academy.wtForms,
        count: localizedCourses.filter((c) => c.division === 'taekwondo').length,
      },
      {
        id: 'science',
        label: t.academy.biomechanics,
        count: localizedCourses.filter((c) => c.division === 'science').length,
      },
      {
        id: 'studio',
        label: t.academy.trickingDemo,
        count: localizedCourses.filter((c) => c.division === 'studio').length,
      },
    ]
  }, [t, localizedCourses])

  // Filter courses dynamically based on division and live search query
  const filteredCourses = React.useMemo(() => {
    return localizedCourses.filter((course) => {
      const matchesDivision = selectedDivision === 'all' || course.division === selectedDivision
      const q = searchQuery.toLowerCase().trim()
      const matchesSearch =
        !q ||
        course.title.toLowerCase().includes(q) ||
        course.subtitle.toLowerCase().includes(q) ||
        course.description.toLowerCase().includes(q) ||
        course.instructor.toLowerCase().includes(q) ||
        course.learningObjectives.some((obj) => obj.toLowerCase().includes(q))
      return matchesDivision && matchesSearch
    })
  }, [selectedDivision, searchQuery, localizedCourses])

  const getDivisionBadgeColor = (div: string) => {
    switch (div) {
      case 'taekwondo':
        return '#EF2F38'
      case 'science':
        return '#09BB00'
      case 'studio':
        return '#A855F7'
      default:
        return '#EF2F38'
    }
  }

  return (
    <div className="bg-zinc-50 dark:bg-black text-zinc-900 dark:text-white min-h-screen pt-20 sm:pt-24 pb-20 font-sans selection:bg-brand-red selection:text-white transition-colors duration-500 overflow-x-hidden">
      {/* Hero Header */}
      <section className="relative pt-8 sm:pt-12 pb-10 sm:pb-14 px-4 sm:px-6 text-center overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[450px] bg-gradient-to-b from-brand-red/15 via-transparent to-transparent blur-3xl rounded-full opacity-60 pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl border border-brand-red/30 bg-brand-red/10 text-brand-red text-xs font-bold uppercase tracking-widest mb-4">
            <BookOpen className="w-3.5 h-3.5" /> {t.academy.badge}
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight mb-4 sm:mb-6 leading-none text-zinc-900 dark:text-white break-words">
            {t.academy.heroTitle1} <span className="text-brand-red">{t.academy.heroTitle2}</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-zinc-600 dark:text-zinc-400 font-light max-w-3xl mx-auto leading-relaxed px-2">
            {t.academy.heroSubtitle}
          </p>
        </div>
      </section>

      {/* Main View Switcher Bar (12px radius) */}
      <section className="py-3.5 sm:py-5 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50/95 dark:bg-zinc-950/95 sticky top-16 sm:top-20 z-30 backdrop-blur-xl">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-2.5">
            <button
              onClick={() => setCurrentView('courses')}
              className={`px-4 sm:px-5 py-2.5 rounded-xl text-[11px] sm:text-xs font-black uppercase tracking-widest transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                currentView === 'courses'
                  ? 'bg-brand-red text-white shadow-brand-glow'
                  : 'bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 border border-zinc-200 dark:border-zinc-800'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" /> {t.academy.tabCourses} ({academyCourses.length})
            </button>

            <button
              onClick={() => setCurrentView('ages')}
              className={`px-4 sm:px-5 py-2.5 rounded-xl text-[11px] sm:text-xs font-black uppercase tracking-widest transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                currentView === 'ages'
                  ? 'bg-brand-red text-white shadow-brand-glow'
                  : 'bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 border border-zinc-200 dark:border-zinc-800'
              }`}
            >
              <Users className="w-3.5 h-3.5" /> All Ages &amp; Formats
            </button>

            <button
              onClick={() => setCurrentView('belts')}
              className={`px-4 sm:px-5 py-2.5 rounded-xl text-[11px] sm:text-xs font-black uppercase tracking-widest transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                currentView === 'belts'
                  ? 'bg-brand-red text-white shadow-brand-glow'
                  : 'bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 border border-zinc-200 dark:border-zinc-800'
              }`}
            >
              <Award className="w-3.5 h-3.5" /> {t.academy.tabBelts}
            </button>

            <button
              onClick={() => setCurrentView('schedule')}
              className={`px-4 sm:px-5 py-2.5 rounded-xl text-[11px] sm:text-xs font-black uppercase tracking-widest transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                currentView === 'schedule'
                  ? 'bg-brand-red text-white shadow-brand-glow'
                  : 'bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 border border-zinc-200 dark:border-zinc-800'
              }`}
            >
              <CalendarRange className="w-3.5 h-3.5" /> {t.academy.tabSchedule}
            </button>
          </div>
        </div>
      </section>

      {/* VIEW 1: COURSES & CURRICULA */}
      {currentView === 'courses' && (
        <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 animate-fade-in">
          <div className="container mx-auto max-w-7xl">
            {/* Division Filters & Search Bar */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10 sm:mb-12">
              {/* Filter Sub-pills */}
              <div className="flex flex-wrap justify-center sm:justify-start gap-2">
                {divisions.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setSelectedDivision(tab.id)}
                    className={`px-3.5 py-2 rounded-xl text-[10px] sm:text-[11px] font-bold uppercase tracking-wider transition-all cursor-pointer ${
                      selectedDivision === tab.id
                        ? 'bg-brand-red text-white shadow-brand-glow'
                        : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200 dark:bg-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 border border-zinc-200 dark:border-zinc-800'
                    }`}
                  >
                    {tab.label} ({tab.count})
                  </button>
                ))}
              </div>

              {/* Live Search Box */}
              <div className="relative w-full sm:w-64">
                <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" />
                <input
                  type="text"
                  placeholder="Search program..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  aria-label="Search academy programs"
                  className="w-full pl-9 pr-3 py-2 text-base sm:text-xs min-h-[44px] rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 focus:outline-none focus:border-brand-red transition-colors"
                />
              </div>
            </div>

            {/* Courses Responsive Grid (14px radius) */}
            {filteredCourses.length > 0 ? (
              <SafeGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8" isolateItems>
                {filteredCourses.map((course) => {
                  const badgeColor = getDivisionBadgeColor(course.division)

                  return (
                    <Card3D key={course.id} maxTilt={4} className="h-full">
                      <div
                        onClick={() => setActiveCourse(course)}
                        className="group h-full rounded-[14px] bg-white dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 overflow-hidden shadow-sm hover:shadow-xl hover:border-brand-red/40 transition-all duration-300 flex flex-col justify-between cursor-pointer"
                      >
                        <div>
                          {/* Image Header with Badge Overlay */}
                          <div className="relative h-48 sm:h-52 w-full overflow-hidden">
                            <SafeImage
                              src={course.image}
                              alt={course.title}
                              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                            <div className="absolute top-4 left-4 z-20 flex flex-wrap gap-2">
                              <span
                                className="px-2.5 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest text-white shadow-md"
                                style={{ backgroundColor: badgeColor }}
                              >
                                {course.badge}
                              </span>
                              {course.beltRequirement && (
                                <span className="px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase tracking-widest bg-black/70 text-white backdrop-blur-md border border-white/10 flex items-center gap-1">
                                  <Award className="w-3 h-3 text-brand-red" /> {course.beltRequirement}
                                </span>
                              )}
                            </div>

                            <div className="absolute bottom-4 left-4 right-4 z-20">
                              <p className="text-xs text-zinc-300 font-bold uppercase tracking-wider">
                                {course.subtitle}
                              </p>
                              <h3 className="text-lg sm:text-xl font-black uppercase text-white tracking-tight leading-tight mt-0.5 break-words">
                                {course.title}
                              </h3>
                            </div>
                          </div>

                          {/* Body */}
                          <div className="p-5 sm:p-6 space-y-4">
                            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 font-light leading-relaxed line-clamp-2 break-words">
                              {course.description}
                            </p>

                            <div className="grid grid-cols-2 gap-3 pt-3 border-t border-zinc-100 dark:border-zinc-800 text-xs">
                              <div className="flex items-center gap-2 text-zinc-500 min-w-0">
                                <Clock className="w-4 h-4 text-zinc-400 shrink-0" />
                                <span className="truncate">{course.duration}</span>
                              </div>
                              <div className="flex items-center gap-2 text-zinc-500 min-w-0">
                                <Calendar className="w-4 h-4 text-zinc-400 shrink-0" />
                                <span className="truncate">{course.sessionsPerWeek}</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="p-5 sm:p-6 pt-0">
                          <button className="w-full py-3 rounded-xl border border-zinc-200 dark:border-zinc-800 text-xs font-bold uppercase tracking-widest text-zinc-900 dark:text-white group-hover:bg-brand-red group-hover:border-brand-red group-hover:text-white transition-all flex items-center justify-center gap-2 cursor-pointer touch-press">
                            {t.academy.viewSyllabus} <ArrowRight className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    </Card3D>
                  )
                })}
              </SafeGrid>
            ) : (
              /* Empty State */
              <div className="p-12 text-center rounded-[14px] bg-zinc-50 dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800 max-w-xl mx-auto">
                <Search className="w-8 h-8 text-zinc-400 mx-auto mb-3" />
                <h4 className="text-lg font-bold text-zinc-900 dark:text-white mb-1">
                  No Programs Found
                </h4>
                <p className="text-xs text-zinc-500 mb-4 font-light">
                  No courses match your current search query.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery('')
                    setSelectedDivision('all')
                  }}
                  className="px-4 py-2 rounded-xl bg-brand-red text-white text-xs font-bold uppercase tracking-wider hover:bg-zinc-900 transition-colors inline-flex items-center gap-1.5 cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" /> Reset Filters
                </button>
              </div>
            )}
          </div>
        </section>
      )}

      {/* VIEW 2: ALL AGES & CLASS FORMATS */}
      {currentView === 'ages' && (
        <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 animate-fade-in">
          <div className="container mx-auto max-w-7xl">
            <AgeDivisionsAndFormats />
          </div>
        </section>
      )}

      {/* VIEW 3: BELT PROGRESSION ROADMAP */}
      {currentView === 'belts' && (
        <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 animate-fade-in">
          <div className="container mx-auto max-w-7xl">
            <BeltProgressionGuide />
          </div>
        </section>
      )}

      {/* VIEW 4: CLASS SCHEDULE */}
      {currentView === 'schedule' && (
        <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 animate-fade-in">
          <div className="container mx-auto max-w-7xl">
            <ClassScheduleTable />
          </div>
        </section>
      )}

      {/* Interactive Course Detail Modal (Responsive Sheet on Mobile, Centered on Desktop) */}
      {activeCourse && (
        <div
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-6 animate-fade-in"
          onClick={() => setActiveCourse(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="course-modal-title"
        >
          <div className="absolute inset-0 bg-black/80 backdrop-blur-2xl" />

          <div
            className="relative w-full max-w-3xl bg-white dark:bg-zinc-950 shadow-2xl rounded-t-[20px] sm:rounded-[14px] border border-zinc-200 dark:border-zinc-800 overflow-hidden max-h-[92vh] sm:max-h-[90vh] flex flex-col z-10 animate-fade-in-up"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Mobile Sheet Drag Indicator Bar */}
            <div className="sm:hidden w-12 h-1.5 bg-zinc-400/60 dark:bg-zinc-600 rounded-full mx-auto my-2 shrink-0 z-30" />

            {/* Modal Header */}
            <div className="relative h-56 sm:h-72 w-full overflow-hidden shrink-0">
              <SafeImage
                src={activeCourse.image}
                alt={activeCourse.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

              <button
                onClick={() => setActiveCourse(null)}
                className="absolute top-4 right-4 z-30 p-2.5 rounded-xl bg-black/50 text-white hover:bg-brand-red transition-colors backdrop-blur-md cursor-pointer min-w-[44px] min-h-[44px] flex items-center justify-center"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="absolute bottom-6 left-6 right-6 z-20">
                <span
                  className="px-2.5 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest text-white shadow-md inline-block mb-2"
                  style={{ backgroundColor: getDivisionBadgeColor(activeCourse.division) }}
                >
                  {activeCourse.badge}
                </span>
                <p className="text-xs text-zinc-300 font-bold uppercase tracking-wider">
                  {activeCourse.subtitle}
                </p>
                <h3
                  id="course-modal-title"
                  className="text-2xl sm:text-3xl font-black uppercase text-white tracking-tight leading-tight mt-1 break-words"
                >
                  {activeCourse.title}
                </h3>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6 touch-scroll">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-2">
                  Course Overview
                </h4>
                <p className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 font-light leading-relaxed break-words">
                  {activeCourse.description}
                </p>
              </div>

              {/* Learning Objectives */}
              {activeCourse.learningObjectives && activeCourse.learningObjectives.length > 0 && (
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-3">
                    Curriculum Learning Outcomes
                  </h4>
                  <div className="space-y-2.5">
                    {activeCourse.learningObjectives.map((obj, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-2.5 p-3 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-xs text-zinc-700 dark:text-zinc-300"
                      >
                        <CheckCircle2 className="w-4 h-4 text-brand-red shrink-0 mt-0.5" />
                        <span className="leading-relaxed font-medium break-words">{obj}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Schedule, Prerequisites & Instructor */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs">
                <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 block mb-1">
                    Lead Instructor
                  </span>
                  <p className="font-bold text-zinc-900 dark:text-white break-words">
                    {activeCourse.instructor}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 block mb-1">
                    Class Schedule
                  </span>
                  <p className="font-bold text-zinc-900 dark:text-white break-words">
                    {activeCourse.schedule}
                  </p>
                </div>
              </div>

              {/* Modal Action CTA */}
              <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-xs text-zinc-500 font-mono">
                  Program ID: {activeCourse.id}
                </span>
                <Link
                  href={`/contact?subject=Enrollment%20in%20${encodeURIComponent(activeCourse.title)}`}
                  className="w-full sm:w-auto px-6 py-3 min-h-[44px] rounded-xl bg-brand-red text-white text-xs font-bold uppercase tracking-widest hover:bg-zinc-900 transition-all shadow-brand-glow text-center flex items-center justify-center gap-2"
                >
                  Enroll In Program <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
