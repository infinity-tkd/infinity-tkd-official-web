'use client'

import * as React from 'react'
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
} from 'lucide-react'
import { historyTimelineData, type TimelineMilestone } from '@/data/library/historyTimeline'
import { SafeImage } from '@/components/SafeImage'

export function HistoryTimetable() {
  const [selectedEra, setSelectedEra] = React.useState<string>('all')
  const [viewStyle, setViewStyle] = React.useState<'timeline' | 'table'>('timeline')
  const [selectedImage, setSelectedImage] = React.useState<string | null>(null)

  const eras = [
    { id: 'all', label: 'All Eras (16 Milestones)', count: historyTimelineData.length },
    { id: 'Ancient (24th c. BC–10th c. AD)', label: '1. Ancient (24th c. BC–10th c. AD)', count: historyTimelineData.filter((i) => i.era === 'Ancient (24th c. BC–10th c. AD)').length },
    { id: 'Medieval (10th–16th c.)', label: '2. Medieval (10th–16th c.)', count: historyTimelineData.filter((i) => i.era === 'Medieval (10th–16th c.)').length },
    { id: 'Modern Pre-War (17th c.–1945)', label: '3. Modern Pre-War (17th c.–1945)', count: historyTimelineData.filter((i) => i.era === 'Modern Pre-War (17th c.–1945)').length },
    { id: 'Early Kwans (1946–1960)', label: '4. Early Kwans (1946–1960)', count: historyTimelineData.filter((i) => i.era === 'Early Kwans (1946–1960)').length },
    { id: 'Fruit of Unity (1961–1970)', label: '5. Fruit of Unity (1961–1970)', count: historyTimelineData.filter((i) => i.era === 'Fruit of Unity (1961–1970)').length },
    { id: 'A Leap Forward (1971–1985)', label: '6. A Leap Forward (1971–1985)', count: historyTimelineData.filter((i) => i.era === 'A Leap Forward (1971–1985)').length },
    { id: 'Olympic Entry (1986–1999)', label: '7. Olympic Entry (1986–1999)', count: historyTimelineData.filter((i) => i.era === 'Olympic Entry (1986–1999)').length },
    { id: 'World Martial Sport (2000–Present)', label: '8. World Martial Sport (2000–Present)', count: historyTimelineData.filter((i) => i.era === 'World Martial Sport (2000–Present)').length },
  ]

  const filteredData = React.useMemo(() => {
    if (selectedEra === 'all') return historyTimelineData
    return historyTimelineData.filter((item) => item.era === selectedEra)
  }, [selectedEra])

  return (
    <div className="space-y-6">
      {/* Control Toolbar (Era Filters & View Switcher) */}
      <div className="p-5 sm:p-6 rounded-[14px] bg-white dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 shadow-md flex flex-col md:flex-row md:items-center justify-between gap-4">
        {/* Era Filter Pills */}
        <div className="flex flex-wrap items-center gap-1.5">
          {eras.map((era) => (
            <button
              key={era.id}
              onClick={() => setSelectedEra(era.id)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                selectedEra === era.id
                  ? 'bg-brand-red text-white shadow-brand-glow'
                  : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white'
              }`}
            >
              {era.label}
            </button>
          ))}
        </div>

        {/* View Style Switcher */}
        <div className="flex items-center gap-1 p-1 rounded-xl bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 self-start md:self-auto shrink-0">
          <button
            onClick={() => setViewStyle('timeline')}
            className={`px-3 py-1 rounded-lg text-xs font-bold uppercase transition-colors flex items-center gap-1.5 cursor-pointer ${
              viewStyle === 'timeline'
                ? 'bg-white dark:bg-zinc-900 text-brand-red shadow-sm'
                : 'text-zinc-500 hover:text-zinc-900 dark:hover:text-white'
            }`}
          >
            <LayoutGrid className="w-3.5 h-3.5" /> Visual Cards
          </button>
          <button
            onClick={() => setViewStyle('table')}
            className={`px-3 py-1 rounded-lg text-xs font-bold uppercase transition-colors flex items-center gap-1.5 cursor-pointer ${
              viewStyle === 'table'
                ? 'bg-white dark:bg-zinc-900 text-brand-red shadow-sm'
                : 'text-zinc-500 hover:text-zinc-900 dark:hover:text-white'
            }`}
          >
            <List className="w-3.5 h-3.5" /> Compact Table
          </button>
        </div>
      </div>

      {/* -------------------------------------------------------------------- */}
      {/* VIEW MODE 1: VISUAL TIMELINE CARDS (With contextual photography) */}
      {/* -------------------------------------------------------------------- */}
      {viewStyle === 'timeline' && (
        <div className="space-y-4 relative">
          {filteredData.map((item, idx) => (
            <div
              key={item.id}
              className="p-5 sm:p-7 rounded-[14px] bg-white dark:bg-zinc-900/70 border border-zinc-200 dark:border-zinc-800 shadow-md hover:border-brand-red/50 transition-all duration-300 grid md:grid-cols-12 gap-6 items-center group"
            >
              {/* Left Column: Contextual Historical Photography */}
              <div className="md:col-span-4 relative h-44 sm:h-52 rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-800 shadow-inner">
                <SafeImage
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

                {/* Year Pill over photo */}
                <div className="absolute top-2.5 left-2.5 z-10">
                  <span className="px-2.5 py-1 rounded-lg text-[10px] font-mono font-bold uppercase tracking-wider bg-black/80 text-white backdrop-blur-md border border-white/20">
                    {item.year}
                  </span>
                </div>

                <div className="absolute bottom-2.5 left-2.5 right-2.5 text-white z-10">
                  <span className="text-[10px] font-mono font-bold block opacity-90 truncate" style={{ color: item.tagColor }}>
                    {item.era}
                  </span>
                  <span className="text-[11px] font-mono block opacity-80 truncate">
                    {item.koreanTitle.split('(')[0]}
                  </span>
                </div>
              </div>

              {/* Right Column: Historical Summary & Bulleted Facts */}
              <div className="md:col-span-8 space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-xs font-mono font-bold text-brand-red">
                    {item.koreanTitle}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-zinc-500 font-mono">
                    <User className="w-3.5 h-3.5 text-zinc-400" />
                    <span className="truncate max-w-[240px]">{item.keyFigures}</span>
                  </div>
                </div>

                <h4 className="text-base sm:text-lg font-black uppercase text-zinc-900 dark:text-white tracking-tight">
                  {item.title}
                </h4>

                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 font-light leading-relaxed">
                  {item.summary}
                </p>

                {/* Key Bulleted Points */}
                <div className="space-y-1.5 pt-1">
                  {item.details.map((detail, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-2 text-xs text-zinc-500 dark:text-zinc-400">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-red shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* -------------------------------------------------------------------- */}
      {/* VIEW MODE 2: HIGH-DENSITY CHRONOLOGICAL TABLE */}
      {/* -------------------------------------------------------------------- */}
      {viewStyle === 'table' && (
        <div className="p-6 sm:p-8 rounded-[14px] bg-white dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 shadow-xl overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse min-w-[700px]">
            <thead>
              <tr className="border-b border-zinc-200 dark:border-zinc-800 text-zinc-400 uppercase text-[10px] font-mono">
                <th className="py-3 px-4">Year / Date</th>
                <th className="py-3 px-4">Photo Preview</th>
                <th className="py-3 px-4">Historical Milestone &amp; Korean Name</th>
                <th className="py-3 px-4">Key Figures &amp; Leaders</th>
                <th className="py-3 px-4">Historical Impact &amp; Records</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800/60">
              {filteredData.map((item) => (
                <tr key={item.id} className="hover:bg-zinc-50/50 dark:hover:bg-zinc-800/30 transition-colors">
                  <td className="py-4 px-4 font-mono font-bold text-brand-red whitespace-nowrap align-top">
                    {item.year}
                  </td>
                  <td className="py-4 px-4 align-top">
                    <div className="w-16 h-12 rounded-lg overflow-hidden border border-zinc-200 dark:border-zinc-700 shadow-sm shrink-0">
                      <SafeImage src={item.image} alt={item.title} className="w-full h-full object-cover" />
                    </div>
                  </td>
                  <td className="py-4 px-4 align-top">
                    <strong className="text-zinc-900 dark:text-white font-bold block mb-0.5">
                      {item.title}
                    </strong>
                    <span className="text-[10px] font-mono text-zinc-400 block">
                      {item.koreanTitle}
                    </span>
                    <span className="text-[9px] font-mono text-brand-red uppercase">
                      {item.era}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-zinc-700 dark:text-zinc-300 align-top">
                    <span className="font-mono text-[11px] block">{item.keyFigures}</span>
                  </td>
                  <td className="py-4 px-4 text-zinc-600 dark:text-zinc-400 font-light align-top leading-relaxed max-w-sm">
                    {item.summary}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}
