'use client'

import * as React from 'react'
import Link from 'next/link'
import { weeklySchedule, type ScheduleSlot } from '@/data/schedule'
import { Calendar, Clock, MapPin, User, ArrowRight, Filter } from 'lucide-react'
import { SafeGrid } from '@/components/SafeGrid'
import { useLanguage } from '@/context/LanguageContext'

export function ClassScheduleTable() {
  const { t } = useLanguage()
  const [selectedDay, setSelectedDay] = React.useState<string>('All')
  const [selectedDivision, setSelectedDivision] = React.useState<'all' | 'taekwondo' | 'science' | 'studio'>('all')

  const days = React.useMemo(() => {
    return ['All', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
  }, [])

  const filteredSlots = React.useMemo(() => {
    return weeklySchedule.filter((slot) => {
      const matchDay = selectedDay === 'All' || slot.day === selectedDay
      const matchDivision = selectedDivision === 'all' || slot.division === selectedDivision
      return matchDay && matchDivision
    })
  }, [selectedDay, selectedDivision])

  return (
    <div className="w-full bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-[14px] p-5 sm:p-8 md:p-10 shadow-xl overflow-hidden">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-6 border-b border-zinc-200 dark:border-zinc-800 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xl bg-brand-red/10 text-brand-red text-[10px] font-bold uppercase tracking-widest mb-2">
            <Calendar className="w-3.5 h-3.5" /> {t.schedule.badge}
          </div>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight text-zinc-900 dark:text-white">
            {t.schedule.title1} <span className="text-brand-red">{t.schedule.title2}</span>
          </h3>
          <p className="text-zinc-500 dark:text-zinc-400 text-xs sm:text-sm mt-1 font-light max-w-xl">
            {t.schedule.subtitle}
          </p>
        </div>

        <Link
          href="/contact?subject=Free%20Trial%20Booking"
          className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-brand-red text-white text-xs font-bold uppercase tracking-widest hover:bg-zinc-900 transition-all shadow-brand-glow self-start md:self-auto shrink-0"
        >
          {t.schedule.bookTrial} <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      {/* Filter Bars */}
      <div className="flex flex-col gap-4 mb-8">
        {/* Days Filter - Scrollable on mobile, wrapping on tablet/desktop */}
        <div className="flex overflow-x-auto sm:flex-wrap gap-1.5 sm:gap-2 pb-1 sm:pb-0 scrollbar-none snap-x touch-pan-x">
          {days.map((day) => (
            <button
              key={day}
              onClick={() => setSelectedDay(day)}
              aria-pressed={selectedDay === day}
              className={`px-3.5 sm:px-4 py-2.5 rounded-xl text-[11px] sm:text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer shrink-0 snap-center min-h-[44px] ${
                selectedDay === day
                  ? 'bg-zinc-900 text-white dark:bg-white dark:text-black shadow-md'
                  : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200 dark:bg-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800'
              }`}
            >
              {day === 'All' ? t.schedule.allDays : day}
            </button>
          ))}
        </div>

        {/* Division Filter */}
        <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-2 border-t border-zinc-100 dark:border-zinc-800/80">
          {[
            { id: 'all', label: t.schedule.allDivisions },
            { id: 'taekwondo', label: t.schedule.divDojang },
            { id: 'science', label: t.schedule.divScience },
            { id: 'studio', label: t.schedule.divStudio },
          ].map((div) => (
            <button
              key={div.id}
              onClick={() => setSelectedDivision(div.id as any)}
              aria-pressed={selectedDivision === div.id}
              className={`px-3.5 sm:px-4 py-2 min-h-[44px] rounded-xl text-[10px] sm:text-[11px] font-bold uppercase tracking-wider transition-all cursor-pointer ${
                selectedDivision === div.id
                  ? 'bg-brand-red text-white shadow-sm'
                  : 'text-zinc-500 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-900'
              }`}
            >
              {div.label}
            </button>
          ))}
        </div>
      </div>

      {/* Schedule Grid */}
      <SafeGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" isolateItems>
        {filteredSlots.length === 0 ? (
          <div className="col-span-full py-12 text-center text-zinc-500 text-sm font-light">
            {t.schedule.noClasses}
          </div>
        ) : (
          filteredSlots.map((slot) => {
            const isTaekwondo = slot.division === 'taekwondo'
            const isScience = slot.division === 'science'

            const badgeBg = isTaekwondo
              ? 'bg-brand-red/10 text-brand-red border-brand-red/30'
              : isScience
              ? 'bg-brand-green/10 text-brand-green border-brand-green/30'
              : 'bg-brand-orange/10 text-brand-orange border-brand-orange/30'

            return (
              <div
                key={slot.id}
                className="p-5 rounded-xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 hover:border-brand-red/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="px-2.5 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-widest bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300">
                      {slot.day}
                    </span>
                    <span className={`px-2.5 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-widest border ${badgeBg}`}>
                      {slot.division}
                    </span>
                  </div>

                  <h4 className="text-base font-black uppercase text-zinc-900 dark:text-white tracking-tight mb-2">
                    {slot.program}
                  </h4>

                  <div className="space-y-1.5 text-xs text-zinc-500 dark:text-zinc-400">
                    <div className="flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5 text-brand-red shrink-0" />
                      <span className="font-semibold text-zinc-800 dark:text-zinc-200">{slot.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <User className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                      <span>{slot.instructor}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                      <span>{slot.room}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-zinc-200/60 dark:border-zinc-800/60 flex items-center justify-between">
                  <span className="text-[11px] font-bold text-brand-red uppercase">
                    {slot.belt}
                  </span>
                  <Link
                    href={`/contact?subject=Booking%20for%20${encodeURIComponent(slot.program)}`}
                    className="text-[11px] font-bold text-zinc-500 hover:text-brand-red uppercase tracking-wider flex items-center gap-1 transition-colors"
                  >
                    {t.schedule.joinClass} <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            )
          })
        )}
      </SafeGrid>
    </div>
  )
}
