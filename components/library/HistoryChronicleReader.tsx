'use client'

import * as React from 'react'
import {
  BookOpen,
  Calendar,
  Clock,
  Compass,
  Award,
  ChevronRight,
  Sparkles,
  Maximize2,
  FileText,
  X,
  Type,
  Share2,
  Bookmark,
  Shield,
  Zap,
  Scale,
  User,
  ExternalLink,
  Flame,
  CheckCircle2,
  Shirt,
  Layers,
  CircleDot,
} from 'lucide-react'
import { historyItems } from '@/data/library/history'
import { useLanguage } from '@/context/LanguageContext'
import { HistoryTimetable } from './HistoryTimetable'
import { SafeImage } from '@/components/SafeImage'

export function HistoryChronicleReader() {
  const { language } = useLanguage()
  const [selectedLessonIndex, setSelectedLessonIndex] = React.useState(0)
  const [fontSize, setFontSize] = React.useState<'sm' | 'base' | 'lg'>('base')
  const [activeReadingModal, setActiveReadingModal] = React.useState<any | null>(null)
  const [activeTab, setActiveTab] = React.useState<
    'article' | 'timetable' | 'dobok' | 'organizations' | 'philosophy' | 'power'
  >('article')

  const activeLesson = historyItems[selectedLessonIndex] || historyItems[0]

  return (
    <div className="space-y-8">
      {/* -------------------------------------------------------------------- */}
      {/* HISTORICAL CHRONICLE BANNER (14px radius) */}
      {/* -------------------------------------------------------------------- */}
      <div className="p-6 sm:p-8 rounded-[14px] bg-white dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 shadow-md relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-brand-red">
                Taekwondo Scholarly Chronicle
              </span>
              <span className="text-zinc-400">&bull;</span>
              <span className="text-[10px] font-mono text-zinc-500">History &bull; Uniforms &bull; Belts &bull; Theory</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black uppercase text-zinc-900 dark:text-white tracking-tight">
              Taekwondo History, Philosophy &amp; Heritage
            </h3>
            <p className="text-xs sm:text-sm text-zinc-500 font-light mt-1 max-w-2xl">
              An academic curriculum tracking ancient Three Kingdoms origins, Dobok &amp; Belt cosmology, WT vs ITF federations, the 5 Tenets, and the Theory of Power.
            </p>
          </div>

          {/* Reader Preferences (Font Size Toggle) */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 self-start md:self-auto shrink-0">
            <span className="text-[10px] font-bold text-zinc-400 uppercase px-2">Font:</span>
            {(['sm', 'base', 'lg'] as const).map((size) => (
              <button
                key={size}
                onClick={() => setFontSize(size)}
                className={`px-2.5 py-1 rounded-lg text-xs font-bold uppercase transition-colors cursor-pointer ${
                  fontSize === size
                    ? 'bg-brand-red text-white shadow-sm'
                    : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white'
                }`}
              >
                {size === 'sm' ? 'Compact' : size === 'base' ? 'Standard' : 'Large'}
              </button>
            ))}
          </div>
        </div>

        {/* 7 Lesson Selector Buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-2 mt-6 pt-6 border-t border-zinc-100 dark:border-zinc-800">
          {historyItems.map((item, idx) => {
            const isSelected = selectedLessonIndex === idx
            return (
              <button
                key={item.id}
                onClick={() => setSelectedLessonIndex(idx)}
                className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-zinc-900 text-white dark:bg-white dark:text-black border-transparent shadow-md'
                    : 'bg-zinc-50 dark:bg-zinc-900/60 text-zinc-600 dark:text-zinc-400 border-zinc-200 dark:border-zinc-800 hover:border-brand-red/40'
                }`}
              >
                <span className="text-[9px] font-mono block opacity-70 mb-0.5">Lesson {idx + 1}</span>
                <h4 className="text-[11px] font-bold uppercase tracking-tight line-clamp-2 leading-snug">
                  {item.name.split('(')[0].trim()}
                </h4>
              </button>
            )
          })}
        </div>
      </div>

      {/* -------------------------------------------------------------------- */}
      {/* SPECIAL RESEARCH SUITE TABS (Article / Timetable / Dobok & Belts / Organizations / 5 Tenets / Theory of Power) */}
      {/* -------------------------------------------------------------------- */}
      <div className="flex flex-wrap items-center gap-2">
        <button
          onClick={() => setActiveTab('article')}
          className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer flex items-center gap-1.5 ${
            activeTab === 'article'
              ? 'bg-brand-red text-white shadow-brand-glow'
              : 'bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-400'
          }`}
        >
          <BookOpen className="w-3.5 h-3.5" /> Editorial Article
        </button>

        <button
          onClick={() => setActiveTab('timetable')}
          className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer flex items-center gap-1.5 ${
            activeTab === 'timetable'
              ? 'bg-brand-red text-white shadow-brand-glow'
              : 'bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-400'
          }`}
        >
          <Calendar className="w-3.5 h-3.5" /> Timeline &amp; Chronology
        </button>

        <button
          onClick={() => setActiveTab('dobok')}
          className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer flex items-center gap-1.5 ${
            activeTab === 'dobok'
              ? 'bg-brand-red text-white shadow-brand-glow'
              : 'bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-400'
          }`}
        >
          <Shirt className="w-3.5 h-3.5" /> Dobok &amp; Belts Philosophy (도복 &amp; 띠)
        </button>

        <button
          onClick={() => setActiveTab('organizations')}
          className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer flex items-center gap-1.5 ${
            activeTab === 'organizations'
              ? 'bg-brand-red text-white shadow-brand-glow'
              : 'bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-400'
          }`}
        >
          <Scale className="w-3.5 h-3.5" /> Organizations Matrix (WT vs ITF vs ATA)
        </button>

        <button
          onClick={() => setActiveTab('philosophy')}
          className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer flex items-center gap-1.5 ${
            activeTab === 'philosophy'
              ? 'bg-brand-red text-white shadow-brand-glow'
              : 'bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-400'
          }`}
        >
          <Shield className="w-3.5 h-3.5" /> The 5 Tenets (5대 훈)
        </button>

        <button
          onClick={() => setActiveTab('power')}
          className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer flex items-center gap-1.5 ${
            activeTab === 'power'
              ? 'bg-brand-red text-white shadow-brand-glow'
              : 'bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-400'
          }`}
        >
          <Zap className="w-3.5 h-3.5" /> Theory of Power (힘의 원리)
        </button>
      </div>

      {/* -------------------------------------------------------------------- */}
      {/* TAB 0: TIMELINE & CHRONOLOGY VIEW */}
      {/* -------------------------------------------------------------------- */}
      {activeTab === 'timetable' && (
        <div className="animate-fade-in">
          <HistoryTimetable />
        </div>
      )}

      {/* -------------------------------------------------------------------- */}
      {/* TAB 1: EDITORIAL ARTICLE VIEW (14px radius) */}
      {/* -------------------------------------------------------------------- */}
      {activeTab === 'article' && (
        <div className="p-6 sm:p-10 rounded-[14px] bg-white dark:bg-zinc-900/70 border border-zinc-200 dark:border-zinc-800 shadow-xl grid lg:grid-cols-12 gap-8 items-start relative overflow-hidden">
          {/* Left Column: Image & Citations */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative h-60 sm:h-72 rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-800 shadow-md">
              <SafeImage
                src={activeLesson.image}
                alt={activeLesson.name}
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-xs font-mono text-brand-red font-bold block mb-0.5">
                  {activeLesson.koreanName}
                </span>
                <h4 className="text-lg sm:text-xl font-black uppercase tracking-tight">
                  {activeLesson.name}
                </h4>
              </div>
            </div>

            {/* Author & Source */}
            <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-xs space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono text-zinc-400 uppercase">Author / Archival Body</span>
                <strong className="text-zinc-900 dark:text-white font-bold">
                  {activeLesson.author || 'Infinity TKD Directorate'}
                </strong>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono text-zinc-400 uppercase">Primary Source</span>
                <span className="text-zinc-600 dark:text-zinc-400 font-mono text-[11px] truncate max-w-[200px]">
                  {activeLesson.sourceName || 'Kukkiwon Archives'}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative Body */}
          <div className="lg:col-span-7 space-y-5">
            <div className="flex items-center justify-between gap-2 pb-3 border-b border-zinc-100 dark:border-zinc-800 text-xs text-zinc-500 font-mono">
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-brand-red" /> {activeLesson.readTime}
              </span>
              <span>Lesson {selectedLessonIndex + 1} of {historyItems.length}</span>
            </div>

            {/* Overview / Abstract */}
            <div className="p-4 rounded-xl bg-brand-red/5 border-l-4 border-brand-red text-zinc-800 dark:text-zinc-200 italic text-xs sm:text-sm leading-relaxed">
              {activeLesson.summary}
            </div>

            {/* Blog Content Paragraphs */}
            {activeLesson.blogContent && (
              <div className="space-y-4">
                {activeLesson.blogContent.map((paragraph, i) => (
                  <p
                    key={i}
                    className={`text-zinc-700 dark:text-zinc-300 font-light leading-relaxed ${
                      fontSize === 'sm'
                        ? 'text-xs leading-relaxed'
                        : fontSize === 'base'
                        ? 'text-sm leading-relaxed'
                        : 'text-base leading-loose'
                    }`}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            )}

            {/* Historical Milestones */}
            <div className="space-y-2 pt-2">
              <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 block">
                Key Lesson Checkpoints:
              </span>
              {activeLesson.steps.map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-2 p-3 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-100 dark:border-zinc-800 text-xs text-zinc-700 dark:text-zinc-300"
                >
                  <span className="w-4 h-4 rounded-full bg-brand-red/10 text-brand-red font-mono font-bold text-[10px] flex items-center justify-center shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  <span className="leading-relaxed font-medium">{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between">
              <button
                onClick={() => setActiveReadingModal(activeLesson)}
                className="px-4 py-2 rounded-xl bg-zinc-900 text-white dark:bg-white dark:text-black text-xs font-bold uppercase tracking-wider hover:bg-brand-red dark:hover:bg-brand-red dark:hover:text-white transition-colors cursor-pointer inline-flex items-center gap-1.5"
              >
                <Maximize2 className="w-3.5 h-3.5" /> Full Article Reader
              </button>
            </div>
          </div>
        </div>
      )}

      {/* -------------------------------------------------------------------- */}
      {/* TAB 2: DOBOK & BELTS PHILOSOPHY SUITE (Cheon-Ji-In & Belt Color Progression) */}
      {/* -------------------------------------------------------------------- */}
      {activeTab === 'dobok' && (
        <div className="space-y-8 animate-fade-in">
          {/* Cheon-Ji-In Cosmology Banner */}
          <div className="p-6 sm:p-8 rounded-[14px] bg-white dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 shadow-xl space-y-6">
            <div>
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-brand-red block mb-1">
                Sacred Garment Cosmology
              </span>
              <h4 className="text-xl font-black uppercase text-zinc-900 dark:text-white tracking-tight">
                The Cheon-Ji-In (천지인 / 天地人) Principle of the Dobok
              </h4>
              <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 font-light mt-1">
                The Dobok represents the physical manifestation of the cosmos, harmonizing the practitioner with Heaven, Earth, and Universal Energy.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
              <div className="p-5 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-100 dark:border-zinc-800 space-y-2">
                <span className="text-2xl font-serif font-black text-brand-red">天 (Cheon)</span>
                <h5 className="font-bold text-zinc-900 dark:text-white uppercase text-sm">Upper Jacket (Jeogori)</h5>
                <p className="text-zinc-600 dark:text-zinc-400 font-light leading-relaxed">
                  Represents <strong>Heaven</strong> and <strong>Yang</strong> energy. Constructed in a circular form wrapping around the upper torso, symbolizing infinite openness and moral conscience.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-100 dark:border-zinc-800 space-y-2">
                <span className="text-2xl font-serif font-black text-blue-500">地 (Ji)</span>
                <h5 className="font-bold text-zinc-900 dark:text-white uppercase text-sm">Trousers (Baji)</h5>
                <p className="text-zinc-600 dark:text-zinc-400 font-light leading-relaxed">
                  Represents <strong>Earth</strong> and <strong>Yin</strong> energy. Constructed with dual square legs, symbolizing physical stability, grounding, and humility.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-100 dark:border-zinc-800 space-y-2">
                <span className="text-2xl font-serif font-black text-amber-500">人 (In)</span>
                <h5 className="font-bold text-zinc-900 dark:text-white uppercase text-sm">Martial Belt (Ddi)</h5>
                <p className="text-zinc-600 dark:text-zinc-400 font-light leading-relaxed">
                  Represents the <strong>Human Being</strong>. Tied around the Danjeon (energy center), binding Heaven and Earth into undivided harmony and single-minded focus (Ilsim).
                </p>
              </div>
            </div>
          </div>

          {/* Dobok Uniform Styles Comparison */}
          <div className="p-6 sm:p-8 rounded-[14px] bg-white dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 shadow-xl space-y-6">
            <div>
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-brand-red block mb-1">
                Uniform Styles &amp; Standards
              </span>
              <h4 className="text-lg sm:text-xl font-black uppercase text-zinc-900 dark:text-white tracking-tight">
                Modern Uniform Styles Across Disciplines
              </h4>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
              <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-100 dark:border-zinc-800 space-y-2">
                <span className="text-[10px] font-mono text-zinc-400 uppercase block">Kukkiwon Standard</span>
                <strong className="text-zinc-900 dark:text-white block">Standard V-Neck Dobok</strong>
                <p className="text-zinc-500 font-light leading-relaxed">
                  White collar for Geup color belts; Red-and-black collar for junior Poom black belts under 15; Black collar for adult Dan ranks.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-100 dark:border-zinc-800 space-y-2">
                <span className="text-[10px] font-mono text-amber-500 uppercase block">WT Official Poomsae</span>
                <strong className="text-zinc-900 dark:text-white block">Competition Poomsae Dobok</strong>
                <p className="text-zinc-500 font-light leading-relaxed">
                  Color-coded by age &amp; gender: Cadet blue/red pants, Junior dark blue pants, Senior gold jackets with blue pants, Master gold &amp; navy.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-100 dark:border-zinc-800 space-y-2">
                <span className="text-[10px] font-mono text-blue-500 uppercase block">ITF Traditional</span>
                <strong className="text-zinc-900 dark:text-white block">Cross-Over Wrap Dobok</strong>
                <p className="text-zinc-500 font-light leading-relaxed">
                  Open crossover jacket with Velcro/ties, featuring black ribbon hem piping along jacket borders for Black Belt Dan ranks.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-100 dark:border-zinc-800 space-y-2">
                <span className="text-[10px] font-mono text-emerald-500 uppercase block">Olympic Combat</span>
                <strong className="text-zinc-900 dark:text-white block">Aerodynamic PSS Dobok</strong>
                <p className="text-zinc-500 font-light leading-relaxed">
                  Ultra-lightweight moisture-wicking stretch fabric engineered to interface seamlessly with electronic sensor Hogu and headgear.
                </p>
              </div>
            </div>
          </div>

          {/* Belt Color Progression Matrix */}
          <div className="p-6 sm:p-8 rounded-[14px] bg-white dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 shadow-xl space-y-6">
            <div>
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-brand-red block mb-1">
                The Spiritual Path of the Belt (Ddi / 띠)
              </span>
              <h4 className="text-lg sm:text-xl font-black uppercase text-zinc-900 dark:text-white tracking-tight">
                Color Belt Progression &amp; Philosophical Meaning
              </h4>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-3 text-xs">
              {[
                { color: 'White Belt', korean: '백띠 (Baektti)', meaning: 'Purity & innocence; the seed dormant beneath winter soil with zero prior knowledge.', bg: 'bg-white text-zinc-900 border-zinc-300' },
                { color: 'Yellow Belt', korean: '노란띠 (Hwangtti)', meaning: 'The fertile earth; the seed germinates and plants first roots as basics take hold.', bg: 'bg-amber-400 text-black border-amber-500' },
                { color: 'Green Belt', korean: '초록띠 (Noktti)', meaning: 'The green plant; rapid growth as kicking combinations and forms branch out.', bg: 'bg-emerald-600 text-white border-emerald-700' },
                { color: 'Blue Belt', korean: '파란띠 (Cheongtti)', meaning: 'The vast sky; the growing plant reaches upward toward physical & mental maturity.', bg: 'bg-blue-600 text-white border-blue-700' },
                { color: 'Red Belt', korean: '빨간띠 (Hongtti)', meaning: 'Danger & fire; practicing mental restraint while warning opponents of lethal striking power.', bg: 'bg-brand-red text-white border-red-700' },
                { color: 'Poom Belt', korean: '품띠 (Poomtti)', meaning: 'Half-red, half-black; junior Black Belt under 15 symbolizing the harmony of Um & Yang.', bg: 'bg-gradient-to-b from-brand-red to-black text-white border-zinc-700' },
                { color: 'Black Belt', korean: '검은띠 (Heuktti)', meaning: 'Mastery & light; impervious to darkness. The true beginning of the lifelong martial path (Dan).', bg: 'bg-black text-white border-zinc-800' },
              ].map((b, i) => (
                <div key={i} className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 flex flex-col justify-between">
                  <div>
                    <span className={`px-2 py-0.5 rounded-md text-[10px] font-mono font-bold uppercase block mb-2 text-center border ${b.bg}`}>
                      {b.color}
                    </span>
                    <span className="text-[11px] font-mono font-bold text-zinc-800 dark:text-zinc-200 block mb-1">
                      {b.korean}
                    </span>
                    <p className="text-[11px] text-zinc-500 font-light leading-relaxed">
                      {b.meaning}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Belt Knot Etiquette */}
            <div className="p-4 rounded-xl bg-brand-red/5 border-l-4 border-brand-red text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed space-y-1">
              <strong className="text-zinc-900 dark:text-white font-bold block">
                Belt Knot Etiquette (Ddi Maegi / 띠 매기):
              </strong>
              <p>
                The belt is wrapped around the waist (symbolizing an undivided single purpose / <em>Ilsim</em>) and tied in a neat square triangle knot directly over the Danjeon energy center. Both hanging ends must be of precisely equal length, signifying the harmonious balance between physical technique and moral integrity.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* -------------------------------------------------------------------- */}
      {/* TAB 3: ORGANIZATIONS COMPARATIVE MATRIX (WT vs ITF vs ATA) */}
      {/* -------------------------------------------------------------------- */}
      {activeTab === 'organizations' && (
        <div className="p-6 sm:p-8 rounded-[14px] bg-white dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 shadow-xl space-y-6">
          <div>
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-brand-red block mb-1">
              Comparative Analysis
            </span>
            <h4 className="text-lg sm:text-xl font-black uppercase text-zinc-900 dark:text-white tracking-tight">
              Major Taekwondo Organizations &amp; Sparring Frameworks
            </h4>
          </div>

          <div className="overflow-x-auto rounded-xl border border-zinc-200 dark:border-zinc-800">
            <table className="w-full text-left text-xs border-collapse min-w-[650px]">
            <thead>
              <tr className="border-b border-zinc-200 dark:border-zinc-800 text-zinc-400 uppercase text-[10px] font-mono">
                <th className="py-3 px-4">Organization / Style</th>
                <th className="py-3 px-4">Inception &amp; Founder</th>
                <th className="py-3 px-4">Sparring Format &amp; Gear</th>
                <th className="py-3 px-4">Head Contact &amp; Rules</th>
                <th className="py-3 px-4">Patterns / Forms</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800/60">
              <tr className="hover:bg-zinc-50/50 dark:hover:bg-zinc-800/30 transition-colors">
                <td className="py-4 px-4 font-bold text-brand-red">
                  Kukkiwon &amp; World Taekwondo (WT)
                </td>
                <td className="py-4 px-4 text-zinc-700 dark:text-zinc-300">
                  1972 (Kukkiwon) / 1973 (WT)<br />
                  <span className="text-[10px] text-zinc-400">Seoul, South Korea</span>
                </td>
                <td className="py-4 px-4 text-zinc-700 dark:text-zinc-300">
                  Full-contact Olympic; Chest guard (Hogu), helmet, sensor socks (PSS).
                </td>
                <td className="py-4 px-4 text-zinc-700 dark:text-zinc-300">
                  Kicks to head allowed (3–5 pts); punches to head <strong>strictly forbidden</strong>.
                </td>
                <td className="py-4 px-4 text-zinc-700 dark:text-zinc-300 font-mono">
                  8 Taegeuk forms &amp; 9 Black Belt Yudanja Poomsae.
                </td>
              </tr>

              <tr className="hover:bg-zinc-50/50 dark:hover:bg-zinc-800/30 transition-colors">
                <td className="py-4 px-4 font-bold text-blue-500">
                  International Taekwon-Do Federation (ITF)
                </td>
                <td className="py-4 px-4 text-zinc-700 dark:text-zinc-300">
                  1966<br />
                  <span className="text-[10px] text-zinc-400">Gen. Choi Hong-hi</span>
                </td>
                <td className="py-4 px-4 text-zinc-700 dark:text-zinc-300">
                  Semi-contact / continuous; hand &amp; foot pads only; <strong>no chest protector (hogu)</strong>.
                </td>
                <td className="py-4 px-4 text-zinc-700 dark:text-zinc-300">
                  Punches to the head <strong>permitted</strong>; emphasizes Sine Wave motion.
                </td>
                <td className="py-4 px-4 text-zinc-700 dark:text-zinc-300 font-mono">
                  24 Chang Hon Tul (Chon-Ji to Tong-Il).
                </td>
              </tr>

              <tr className="hover:bg-zinc-50/50 dark:hover:bg-zinc-800/30 transition-colors">
                <td className="py-4 px-4 font-bold text-purple-500">
                  American Taekwondo Association (ATA)
                </td>
                <td className="py-4 px-4 text-zinc-700 dark:text-zinc-300">
                  1969<br />
                  <span className="text-[10px] text-zinc-400">Haeng Ung Lee (USA)</span>
                </td>
                <td className="py-4 px-4 text-zinc-700 dark:text-zinc-300">
                  Point / continuous sparring; full gear pads; integrated traditional weapons.
                </td>
                <td className="py-4 px-4 text-zinc-700 dark:text-zinc-300">
                  Light/controlled head contact depending on division; weapon sparring.
                </td>
                <td className="py-4 px-4 text-zinc-700 dark:text-zinc-300 font-mono">
                  Songahm patterns (Songahm 1–18).
                </td>
              </tr>
            </tbody>
          </table>
          </div>
        </div>
      )}

      {/* -------------------------------------------------------------------- */}
      {/* TAB 4: THE 5 TENETS OF TAEKWONDO (Hanja, Korean, English) */}
      {/* -------------------------------------------------------------------- */}
      {activeTab === 'philosophy' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {[
              {
                hanja: '禮儀',
                korean: '예의 (Yeui)',
                english: 'Courtesy',
                desc: 'Showing polite humility, bowing with sincere respect, honoring instructors and fellow practitioners.',
                accent: '#EF2F38',
              },
              {
                hanja: '廉恥',
                korean: '염치 (Yeomchi)',
                english: 'Integrity',
                desc: 'Knowing right from wrong, possessing the conscience to feel shame if at fault, and refusing deceit.',
                accent: '#A05B00',
              },
              {
                hanja: '忍耐',
                korean: '인내 (Innae)',
                english: 'Perseverance',
                desc: 'Enduring physical hardship and setbacks; pursuing mastery with unshakeable patience.',
                accent: '#09BB00',
              },
              {
                hanja: '克己',
                korean: '극기 (Geukgi)',
                english: 'Self-Control',
                desc: 'Mastering emotional temper, impulses, and maintaining calm discipline inside and outside the dojang.',
                accent: '#0042EA',
              },
              {
                hanja: '百折不屈',
                korean: '백절불굴 (Baekjeolbulgul)',
                english: 'Indomitable Spirit',
                desc: 'Unyielding courage in the face of injustice, adversity, or fear; never conceding righteous defeat.',
                accent: '#A855F7',
              },
            ].map((tenet, idx) => (
              <div
                key={idx}
                className="p-5 rounded-[14px] bg-white dark:bg-zinc-900/70 border border-zinc-200 dark:border-zinc-800 shadow-md flex flex-col justify-between"
              >
                <div>
                  <span className="text-3xl font-serif font-black text-zinc-200 dark:text-zinc-800 block mb-2">
                    {tenet.hanja}
                  </span>
                  <span
                    className="text-xs font-mono font-bold uppercase tracking-wider block mb-1"
                    style={{ color: tenet.accent }}
                  >
                    {tenet.korean}
                  </span>
                  <h4 className="text-base font-black uppercase text-zinc-900 dark:text-white tracking-tight mb-2">
                    {tenet.english}
                  </h4>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 font-light leading-relaxed">
                    {tenet.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* 4 Core Pillars of Curriculum */}
          <div className="p-6 sm:p-8 rounded-[14px] bg-white dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 shadow-md">
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-brand-red block mb-1">
              Curriculum Quadrant
            </span>
            <h4 className="text-lg font-black uppercase text-zinc-900 dark:text-white tracking-tight mb-4">
              The 4 Pillars of Taekwondo Training
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-xs">
              <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-100 dark:border-zinc-800">
                <strong className="text-brand-red block mb-1">1. Poomsae / Tul (품새)</strong>
                <p className="text-zinc-600 dark:text-zinc-400 font-light">
                  Standardized sequences testing lines of movement, chamber precision, and dynamic balance.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-100 dark:border-zinc-800">
                <strong className="text-blue-500 block mb-1">2. Gyeorugi (겨루기)</strong>
                <p className="text-zinc-600 dark:text-zinc-400 font-light">
                  Free and electronic sensor sparring testing distance timing, counter-kicks, and ring tactical stamina.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-100 dark:border-zinc-800">
                <strong className="text-amber-500 block mb-1">3. Gyeokpa (격파)</strong>
                <p className="text-zinc-600 dark:text-zinc-400 font-light">
                  Power breaking, speed breaking, and high-altitude jumping demonstration strikes.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-100 dark:border-zinc-800">
                <strong className="text-emerald-500 block mb-1">4. Hosinsul (호신술)</strong>
                <p className="text-zinc-600 dark:text-zinc-400 font-light">
                  Joint manipulation locks, choke escapes, falling techniques (tteoreojigi), and weapon disarms.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* -------------------------------------------------------------------- */}
      {/* TAB 5: THEORY OF POWER & BIOMECHANICS (힘의 원리) */}
      {/* -------------------------------------------------------------------- */}
      {activeTab === 'power' && (
        <div className="p-6 sm:p-10 rounded-[14px] bg-white dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 shadow-xl space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-zinc-100 dark:border-zinc-800">
            <div>
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-brand-red block mb-1">
                Kinetic Martial Physics
              </span>
              <h4 className="text-xl font-black uppercase text-zinc-900 dark:text-white tracking-tight">
                The Biomechanical Theory of Power (힘의 원리)
              </h4>
            </div>
            <div className="p-3 rounded-xl bg-brand-red/10 border border-brand-red/30 text-brand-red font-mono font-black text-sm">
              E = &frac12; &bull; m &bull; v&sup2;
            </div>
          </div>

          <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 font-light leading-relaxed">
            The Theory of Power establishes that kinetic energy scales <strong>quadratically with velocity</strong> (v&sup2;), proving that relaxed acceleration, hip drive, and millisecond snap generate vastly more destructive impact than raw muscle bulk.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-xs">
            <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-100 dark:border-zinc-800">
              <span className="text-[10px] font-mono text-zinc-400 uppercase block mb-1">01. Reaction Force (반동력)</span>
              <strong className="text-zinc-900 dark:text-white block mb-1">Newton&apos;s Third Law</strong>
              <p className="text-zinc-500 font-light">Pulling the opposite reaction hand to the hip doubles the acceleration of the striking weapon.</p>
            </div>

            <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-100 dark:border-zinc-800">
              <span className="text-[10px] font-mono text-zinc-400 uppercase block mb-1">02. Concentration (집중)</span>
              <strong className="text-zinc-900 dark:text-white block mb-1">Focal Pressure Area</strong>
              <p className="text-zinc-500 font-light">Focusing total kinetic energy onto the smallest striking tool (ball of foot, knife hand) at exact impact.</p>
            </div>

            <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-100 dark:border-zinc-800">
              <span className="text-[10px] font-mono text-zinc-400 uppercase block mb-1">03. Equilibrium (균형)</span>
              <strong className="text-zinc-900 dark:text-white block mb-1">Center of Mass</strong>
              <p className="text-zinc-500 font-light">Maintaining dynamic balance so body mass translates cleanly without postural collapse.</p>
            </div>

            <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-100 dark:border-zinc-800">
              <span className="text-[10px] font-mono text-zinc-400 uppercase block mb-1">04. Breath Control (호흡)</span>
              <strong className="text-zinc-900 dark:text-white block mb-1">Kihap Core Brace</strong>
              <p className="text-zinc-500 font-light">Sharp exhalation at the instant of impact tightens the abdominal girdle and protects internal organs.</p>
            </div>

            <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-100 dark:border-zinc-800">
              <span className="text-[10px] font-mono text-zinc-400 uppercase block mb-1">05. Mass (질량)</span>
              <strong className="text-zinc-900 dark:text-white block mb-1">Pelvic Kinetic Chain</strong>
              <p className="text-zinc-500 font-light">Engaging hip rotation and ground reaction force to drive total body mass behind the attack.</p>
            </div>

            <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-100 dark:border-zinc-800">
              <span className="text-[10px] font-mono text-zinc-400 uppercase block mb-1">06. Speed (속도)</span>
              <strong className="text-zinc-900 dark:text-white block mb-1">Velocity Squared</strong>
              <p className="text-zinc-500 font-light">Doubling striking velocity quadruples the impact energy delivered into the target.</p>
            </div>
          </div>
        </div>
      )}

      {/* -------------------------------------------------------------------- */}
      {/* SCHOLARLY READING MODAL */}
      {/* -------------------------------------------------------------------- */}
      {activeReadingModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 animate-fade-in"
          onClick={() => setActiveReadingModal(null)}
        >
          <div className="absolute inset-0 bg-black/80 backdrop-blur-2xl" />

          <div
            className="relative w-full max-w-3xl bg-white dark:bg-zinc-950 shadow-2xl rounded-[14px] border border-zinc-200 dark:border-zinc-800 overflow-hidden max-h-[90vh] flex flex-col z-10 animate-fade-in-up"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-5 border-b border-zinc-200 dark:border-zinc-800 flex items-center justify-between bg-zinc-50 dark:bg-zinc-900/60">
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-brand-red" />
                <h4 className="text-sm font-black uppercase text-zinc-900 dark:text-white">
                  {activeReadingModal.name}
                </h4>
              </div>
              <button
                onClick={() => setActiveReadingModal(null)}
                className="p-1.5 rounded-lg text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-6 sm:p-8 overflow-y-auto space-y-6 touch-scroll text-zinc-700 dark:text-zinc-300 font-light text-sm sm:text-base leading-relaxed">
              <div className="p-4 rounded-xl bg-brand-red/5 border-l-4 border-brand-red italic text-xs sm:text-sm">
                {activeReadingModal.summary}
              </div>

              {activeReadingModal.blogContent && (
                <div className="space-y-4">
                  {activeReadingModal.blogContent.map((p: string, idx: number) => (
                    <p key={idx}>{p}</p>
                  ))}
                </div>
              )}

              <div className="space-y-3 pt-2">
                <h5 className="text-xs font-bold uppercase tracking-widest text-zinc-400">
                  Archival Evidence &amp; Deep Lore
                </h5>
                {activeReadingModal.steps.map((dive: string, idx: number) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-xs">
                    {dive}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
