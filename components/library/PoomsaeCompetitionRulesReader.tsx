'use client'

import * as React from 'react'
import {
  recognizedDivisionsData,
  compulsoryPoomsaePools,
  recognizedScoringComponents,
  freestyleScoringComponents,
  paraClassificationsData,
  stancesGeometryData,
  masterGlossaryData,
} from '@/data/library/poomsaeCompetitionRulesData'
import {
  coordinatorCommands,
  slowMovements5to8s,
  slowMovements8s,
  freestyleTechnicalSkills,
  boardBreakingRules,
  assistanceAuthorizationMatrix,
  freestyleDeductions,
  sanctionTiers,
} from '@/data/library/poomsaeCompetitionRulesData'
import { useLanguage } from '@/context/LanguageContext'
import {
  Scale,
  Award,
  Zap,
  Shield,
  FileText,
  Download,
  CheckCircle2,
  AlertTriangle,
  Clock,
  Target,
  Sparkles,
  Info,
  ChevronRight,
  ZoomIn,
  ZoomOut,
  X,
  Layers,
  Flame,
  Printer,
  ChevronDown,
  Building,
  Users,
  Compass,
  Search,
  BookOpen,
  ArrowRight,
  MapPin,
  Eye,
  Activity,
  Maximize2,
} from 'lucide-react'

export function PoomsaeCompetitionRulesReader() {
  const { language } = useLanguage()
  const [activeChapter, setActiveChapter] = React.useState<
    'court' | 'divisions' | 'systems' | 'procedures' | 'recognized' | 'freestyle' | 'aggregation' | 'para' | 'geometry' | 'glossary'
  >('court')

  const [activeFreestyleSkillId, setActiveFreestyleSkillId] = React.useState<string>('fs-skill-01')
  const [glossaryCategory, setGlossaryCategory] = React.useState<string>('all')
  const [glossarySearch, setGlossarySearch] = React.useState<string>('')
  const [isPdfModalOpen, setIsPdfModalOpen] = React.useState<boolean>(false)
  const [selectedPdfType, setSelectedPdfType] = React.useState<'poomsae' | 'freestyle' | 'kyorugi'>('poomsae')
  const [pdfZoom, setPdfZoom] = React.useState<number>(100)

  const activeSkill = freestyleTechnicalSkills.find((s) => s.id === activeFreestyleSkillId) || freestyleTechnicalSkills[0]

  const filteredGlossary = React.useMemo(() => {
    return masterGlossaryData.filter((item) => {
      const matchesCat = glossaryCategory === 'all' || item.category === glossaryCategory
      const query = glossarySearch.toLowerCase().trim()
      if (!query) return matchesCat
      return (
        matchesCat &&
        (item.koreanName.toLowerCase().includes(query) || item.englishName.toLowerCase().includes(query))
      )
    })
  }, [glossaryCategory, glossarySearch])

  const pdfDocuments = {
    poomsae: {
      title: 'World Taekwondo Recognized Poomsae Competition Rules & Scoring 2026',
      koreanTitle: '세계태권도연맹 공인 품새 경기 규칙집',
      edition: 'Official WT 2026 Edition',
      fileName: 'world-taekwondo-poomsae-rules-2026.pdf',
      fileUrl: '/docs/world-taekwondo-poomsae-rules-2026.pdf',
      pages: 42,
    },
    freestyle: {
      title: 'World Taekwondo Freestyle Poomsae Scoring & Technical Rules 2026',
      koreanTitle: '세계태권도연맹 자유품새 경기 규칙 및 채점 기준',
      edition: 'Official WT 2026 Edition',
      fileName: 'world-taekwondo-poomsae-rules-2026.pdf',
      fileUrl: '/docs/world-taekwondo-poomsae-rules-2026.pdf',
      pages: 38,
    },
    kyorugi: {
      title: 'World Taekwondo Kyorugi Competition Rules & Interpretation 2026',
      koreanTitle: '세계태권도연맹 공인 겨루기 경기 규칙집',
      edition: 'Official WT 2026 Edition',
      fileName: 'world-taekwondo-kyorugi-rules-2026.pdf',
      fileUrl: '/docs/world-taekwondo-kyorugi-rules-2026.pdf',
      pages: 48,
    },
  }

  const currentPdf = pdfDocuments[selectedPdfType]

  return (
    <div className="space-y-8 font-sans">
      {/* ==================================================================== */}
      {/* TOP HEADER CONTROLS & PDF LAUNCHER BAR (14px radius) */}
      {/* ==================================================================== */}
      <div className="p-6 sm:p-8 rounded-[14px] bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-md relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded-md text-[10px] font-mono font-bold uppercase tracking-wider bg-brand-red text-white">
                World Taekwondo Official Rulebook
              </span>
              <span className="text-zinc-400">&bull;</span>
              <span className="text-[10px] font-mono text-zinc-500">10-Chapter Master Regulations</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black uppercase text-zinc-900 dark:text-white tracking-tight">
              World Poomsae Competition Rules &amp; Operational Suite
            </h2>
            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 font-light mt-1 max-w-3xl leading-relaxed">
              Complete, authoritative governance for <strong>Recognized Poomsae</strong>, <strong>Freestyle Poomsae</strong>, <strong>Para-Taekwondo</strong>, court setup coordinates, and judge deduction matrices.
            </p>
          </div>

          {/* Quick PDF Launcher */}
          <div className="flex flex-wrap items-center gap-2.5 shrink-0">
            <button
              onClick={() => {
                setSelectedPdfType('poomsae')
                setIsPdfModalOpen(true)
              }}
              className="px-4 py-2.5 rounded-xl bg-brand-red hover:bg-zinc-900 text-white text-xs font-bold uppercase tracking-wider transition-all shadow-brand-glow inline-flex items-center gap-2 cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5" /> PDF Document Mode
            </button>
          </div>
        </div>

        {/* 10-CHAPTER DYNAMIC TAB SELECTOR */}
        <div className="flex flex-wrap gap-1.5 mt-6 pt-6 border-t border-zinc-100 dark:border-zinc-800">
          {[
            { id: 'court', label: '1. Court & Venue', icon: Building },
            { id: 'divisions', label: '2. Age Divisions', icon: Users },
            { id: 'systems', label: '3. Cut-off Systems & Pools', icon: Layers },
            { id: 'procedures', label: '4. Match Flow & Commands', icon: Clock },
            { id: 'recognized', label: '5. Recognized Scoring', icon: Award },
            { id: 'freestyle', label: '6. Freestyle Scoring', icon: Zap },
            { id: 'aggregation', label: '7. Scores & Protests', icon: Scale },
            { id: 'para', label: '8. Para & Deaf TKD', icon: Shield },
            { id: 'geometry', label: '9. Stance Geometry', icon: Compass },
            { id: 'glossary', label: '10. Master Glossary', icon: BookOpen },
          ].map((tab) => {
            const Icon = tab.icon
            const isSelected = activeChapter === tab.id
            return (
              <button
                key={tab.id}
                onClick={() => setActiveChapter(tab.id as any)}
                className={`px-3 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer flex items-center gap-1.5 ${
                  isSelected
                    ? 'bg-zinc-900 text-white dark:bg-white dark:text-black shadow-md'
                    : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-400 dark:hover:text-white'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            )
          })}
        </div>
      </div>

      {/* ==================================================================== */}
      {/* CHAPTER 1: COURT & VENUE INFRASTRUCTURE (WITH VISUAL COURT CHART) */}
      {/* ==================================================================== */}
      {activeChapter === 'court' && (
        <div className="space-y-6 animate-fade-in">
          <div className="p-6 sm:p-8 rounded-[14px] bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-md space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-brand-red" />
                <h3 className="text-lg sm:text-xl font-black uppercase text-zinc-900 dark:text-white tracking-tight">
                  1.2 Competition Area &amp; Field of Play (FOP) Station Coordinates
                </h3>
              </div>
              <span className="text-[10px] font-mono text-zinc-400 uppercase">10m x 10m Contest Area</span>
            </div>

            {/* VISUAL INTERACTIVE COURT MAP DIAGRAM (No text overlap) */}
            <div className="p-6 rounded-2xl bg-zinc-950 border border-zinc-800 text-white relative overflow-hidden">
              <div className="text-center mb-4">
                <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold bg-blue-500/20 text-blue-400 border border-blue-500/30 inline-block">
                  Boundary Line #1 &bull; Front Judges (4 Judges: J1, J2, J3, J4 + Center Referee)
                </span>
              </div>

              {/* 10m x 10m Main Mat Area */}
              <div className="relative mx-auto max-w-xl h-64 sm:h-80 rounded-xl bg-zinc-900 border-2 border-dashed border-zinc-700 p-4 flex flex-col justify-between">
                {/* Court Top Coordinates */}
                <div className="flex justify-between items-center text-[10px] font-mono text-zinc-400">
                  <span>Corner #1</span>
                  <span className="px-2 py-0.5 rounded bg-zinc-800 text-zinc-300">10m x 10m Mat</span>
                  <span>Corner #2 (C4: Coordinators)</span>
                </div>

                {/* Center & Athlete Position C2 */}
                <div className="flex flex-col items-center justify-center space-y-3">
                  <div className="flex items-center gap-2 text-xs font-mono text-zinc-500">
                    <span className="w-3 h-3 rounded-full bg-zinc-700 inline-block" /> Center Point
                  </div>
                  
                  {/* Athlete Position Marker */}
                  <div className="p-3 rounded-xl bg-brand-red/20 border border-brand-red text-center">
                    <span className="text-xs font-mono font-black text-brand-red block">
                      [C2: Contestant Spot]
                    </span>
                    <span className="text-[10px] font-mono text-zinc-300">
                      2m Back From Center Point Toward Boundary #3
                    </span>
                  </div>
                </div>

                {/* Court Bottom Coordinates */}
                <div className="flex justify-between items-center text-[10px] font-mono text-zinc-400">
                  <span>Corner #4 (Inspection Desk &bull; C3: Standby + Coach)</span>
                  <span>Corner #3</span>
                </div>
              </div>

              <div className="text-center mt-4">
                <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold bg-purple-500/20 text-purple-400 border border-purple-500/30 inline-block">
                  Boundary Line #3 &bull; Back Judges (3 Judges: J5, J6, J7)
                </span>
              </div>
            </div>

            {/* Technical Venue Specifications Grid */}
            <div className="grid sm:grid-cols-3 gap-4 text-xs font-mono">
              <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-1">
                <span className="text-zinc-400 block text-[10px]">Venue Dimensions</span>
                <strong className="text-zinc-900 dark:text-white font-bold block">30m x 50m (3 Courts)</strong>
                <span className="text-[10px] text-zinc-500">Ceiling clearance &ge;10m &bull; Seats &ge;2,000</span>
              </div>

              <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-1">
                <span className="text-zinc-400 block text-[10px]">Overhead Lighting</span>
                <strong className="text-brand-red font-bold block">1,500 – 1,800 Lux</strong>
                <span className="text-[10px] text-zinc-500">Inspected by TD 2 days prior</span>
              </div>

              <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-1">
                <span className="text-zinc-400 block text-[10px]">Freestyle Team Mat</span>
                <strong className="text-blue-500 font-bold block">12m x 12m Demarcated</strong>
                <span className="text-[10px] text-zinc-500">Platform: 0.5–0.6m high (&lt;30° incline)</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ==================================================================== */}
      {/* CHAPTER 2: AGE DIVISIONS & CLASSIFICATIONS */}
      {/* ==================================================================== */}
      {activeChapter === 'divisions' && (
        <div className="space-y-6 animate-fade-in">
          <div className="p-6 sm:p-8 rounded-[14px] bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-md space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-500" />
                <h3 className="text-lg sm:text-xl font-black uppercase text-zinc-900 dark:text-white tracking-tight">
                  2.2 Recognized Poomsae Age Divisions (Year of Tournament)
                </h3>
              </div>
              <span className="text-[10px] font-mono text-zinc-400 uppercase">Official WT Table</span>
            </div>

            <div className="overflow-x-auto rounded-xl border border-zinc-200 dark:border-zinc-800">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="bg-zinc-100 dark:bg-zinc-800/90 text-zinc-900 dark:text-white font-mono uppercase text-[11px]">
                    <th className="p-3.5">Division</th>
                    <th className="p-3.5">Age Eligibility Criteria</th>
                    <th className="p-3.5">Individual Event</th>
                    <th className="p-3.5">Pair Event</th>
                    <th className="p-3.5">Team Event (3 Members)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800/60 font-light">
                  {recognizedDivisionsData.map((d, idx) => (
                    <tr key={idx} className="hover:bg-zinc-50 dark:hover:bg-zinc-800/40">
                      <td className="p-3.5 font-bold text-zinc-900 dark:text-white">{d.division}</td>
                      <td className="p-3.5 font-mono text-brand-red">{d.ageCriteria}</td>
                      <td className="p-3.5 text-zinc-700 dark:text-zinc-300">{d.individual}</td>
                      <td className="p-3.5 text-zinc-700 dark:text-zinc-300 font-mono">{d.pair}</td>
                      <td className="p-3.5 text-zinc-700 dark:text-zinc-300 font-mono">{d.team}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Freestyle & Mixed Poomsae Divisions */}
          <div className="p-6 rounded-[14px] bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-md space-y-4">
            <h4 className="text-base font-black uppercase text-zinc-900 dark:text-white tracking-tight">
              2.3 Freestyle &amp; Mixed Poomsae Division Rules
            </h4>
            <div className="grid sm:grid-cols-2 gap-4 text-xs">
              <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-2">
                <span className="font-mono text-brand-red font-bold uppercase text-[11px] block">
                  Freestyle Age Tiers
                </span>
                <ul className="space-y-1 text-zinc-600 dark:text-zinc-400 font-light">
                  <li>&bull; <strong>Under 17 Division:</strong> 12 to 17 years old (Men/Women Indiv, Pair, Mixed Team).</li>
                  <li>&bull; <strong>Over 17 Division:</strong> 18 years old and older (Men/Women Indiv, Pair, Mixed Team).</li>
                  <li>&bull; <strong>Mixed Team:</strong> Exactly 5 members (&ge;2 males, &ge;2 females) + 1 optional substitute.</li>
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-2">
                <span className="font-mono text-blue-500 font-bold uppercase text-[11px] block">
                  Mixed Poomsae Format (Recognized + Freestyle)
                </span>
                <ul className="space-y-1 text-zinc-600 dark:text-zinc-400 font-light">
                  <li>&bull; <strong>Division:</strong> 18 years old and older.</li>
                  <li>&bull; <strong>Round 1:</strong> Contestants perform Recognized Poomsae.</li>
                  <li>&bull; <strong>Round 2:</strong> Contestants perform Freestyle Poomsae.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ==================================================================== */}
      {/* CHAPTER 3: TOURNAMENT SYSTEMS, CUT-OFF CHART & COMPULSORY POOLS */}
      {/* ==================================================================== */}
      {activeChapter === 'systems' && (
        <div className="space-y-6 animate-fade-in">
          {/* CUT-OFF SYSTEM INTERACTIVE FLOW CHART */}
          <div className="p-6 sm:p-8 rounded-[14px] bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-md space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <h3 className="text-lg sm:text-xl font-black uppercase text-zinc-900 dark:text-white tracking-tight">
                  3.2 Cut-off System Operating Flowchart
                </h3>
              </div>
              <span className="text-[10px] font-mono text-zinc-400 uppercase">Tournament Progression</span>
            </div>

            {/* Visual Bracket Progression Flow (No text overlap) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Bracket Tier 1: 40+ Athletes */}
              <div className="p-5 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold uppercase bg-brand-red/10 text-brand-red border border-brand-red/20">
                    Tier A: 40+ Athletes
                  </span>
                </div>
                <div className="space-y-2 text-xs text-zinc-700 dark:text-zinc-300">
                  <div className="p-2.5 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 font-mono">
                    Preliminary: 3 Groups / Courts
                  </div>
                  <div className="flex justify-center text-zinc-400"><ChevronDown className="w-4 h-4" /></div>
                  <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 font-bold text-center">
                    Top 50% from each group advance (Odd count rounded up)
                  </div>
                </div>
              </div>

              {/* Bracket Tier 2: 20-39 Athletes */}
              <div className="p-5 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold uppercase bg-blue-500/10 text-blue-500 border border-blue-500/20">
                    Tier B: 20 to 39 Athletes
                  </span>
                </div>
                <div className="space-y-2 text-xs text-zinc-700 dark:text-zinc-300">
                  <div className="p-2.5 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 font-mono">
                    Preliminary: 2 Groups / Courts
                  </div>
                  <div className="flex justify-center text-zinc-400"><ChevronDown className="w-4 h-4" /></div>
                  <div className="p-2.5 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 font-bold text-center">
                    Top 50% from each group advance to Semi-Final
                  </div>
                </div>
              </div>

              {/* Bracket Tier 3: Semi-Final & Final */}
              <div className="p-5 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold uppercase bg-purple-500/10 text-purple-500 border border-purple-500/20">
                    Semi-Final &amp; Final
                  </span>
                </div>
                <div className="space-y-2 text-xs text-zinc-700 dark:text-zinc-300">
                  <div className="p-2.5 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 font-mono">
                    Semi-Final (9–19 athletes): Top 8 Advance
                  </div>
                  <div className="flex justify-center text-zinc-400"><ChevronDown className="w-4 h-4" /></div>
                  <div className="p-2.5 rounded-lg bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20 font-bold text-center">
                    Final Round (&le;8 athletes): Top 4 Win Medals
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Compulsory Poomsae Pool Table by Division */}
          <div className="p-6 sm:p-8 rounded-[14px] bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-md space-y-4">
            <h4 className="text-base font-black uppercase text-zinc-900 dark:text-white tracking-tight">
              3.3 Compulsory Poomsae Pool by Division (2 Randomly Drawn per Match)
            </h4>

            <div className="overflow-x-auto rounded-xl border border-zinc-200 dark:border-zinc-800">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="bg-zinc-100 dark:bg-zinc-800/90 text-zinc-900 dark:text-white font-mono uppercase text-[11px]">
                    <th className="p-3.5">Division</th>
                    <th className="p-3.5">Compulsory Poomsae Pool</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800/60 font-light">
                  {compulsoryPoomsaePools.map((cp, idx) => (
                    <tr key={idx} className="hover:bg-zinc-50 dark:hover:bg-zinc-800/40">
                      <td className="p-3.5 font-bold text-zinc-900 dark:text-white whitespace-nowrap">{cp.division}</td>
                      <td className="p-3.5">
                        <div className="flex flex-wrap gap-1.5">
                          {cp.forms.map((f, fIdx) => (
                            <span key={fIdx} className="px-2 py-0.5 rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 text-[11px] font-mono">
                              {f}
                            </span>
                          ))}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* ==================================================================== */}
      {/* CHAPTER 4: MATCH PROCEDURES & COORDINATOR COMMANDS */}
      {/* ==================================================================== */}
      {activeChapter === 'procedures' && (
        <div className="space-y-6 animate-fade-in">
          {/* Match Operating Flow Diagram */}
          <div className="p-6 sm:p-8 rounded-[14px] bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-md space-y-4">
            <h3 className="text-lg sm:text-xl font-black uppercase text-zinc-900 dark:text-white tracking-tight">
              4.2 Standard Match Operating Procedures
            </h3>

            {/* Step Progression Badges */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
              <span className="px-3 py-1.5 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 border border-zinc-200 dark:border-zinc-700">
                1. Calling Area (3 calls / 30m prior)
              </span>
              <ArrowRight className="w-3.5 h-3.5 text-zinc-400" />
              <span className="px-3 py-1.5 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 border border-zinc-200 dark:border-zinc-700">
                2. Inspection Desk (Dobok &amp; Hair)
              </span>
              <ArrowRight className="w-3.5 h-3.5 text-zinc-400" />
              <span className="px-3 py-1.5 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 border border-zinc-200 dark:border-zinc-700">
                3. Waiting Area with 1 Coach
              </span>
              <ArrowRight className="w-3.5 h-3.5 text-zinc-400" />
              <span className="px-3 py-1.5 rounded-xl bg-brand-red text-white font-bold">
                4. Coordinator: "Chool-jeon"
              </span>
            </div>

            {/* Standardized Commands Table */}
            <div className="overflow-x-auto rounded-xl border border-zinc-200 dark:border-zinc-800 mt-4">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="bg-zinc-100 dark:bg-zinc-800/90 text-zinc-900 dark:text-white font-mono uppercase text-[11px]">
                    <th className="p-3.5">Phase</th>
                    <th className="p-3.5">First Poomsae Command</th>
                    <th className="p-3.5">Second Poomsae Command</th>
                    <th className="p-3.5">Korean Protocol</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800/60 font-light">
                  {coordinatorCommands.map((cmd, idx) => (
                    <tr key={idx} className="hover:bg-zinc-50 dark:hover:bg-zinc-800/40">
                      <td className="p-3.5 font-bold text-zinc-900 dark:text-white">{cmd.phase}</td>
                      <td className="p-3.5 font-mono text-brand-red">{cmd.firstPoomsae}</td>
                      <td className="p-3.5 text-zinc-700 dark:text-zinc-300">{cmd.secondPoomsae}</td>
                      <td className="p-3.5 font-mono text-zinc-500">{cmd.koreanTerm}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* ==================================================================== */}
      {/* CHAPTER 5: RECOGNIZED POOMSAE SCORING & SLOW MOVEMENTS */}
      {/* ==================================================================== */}
      {activeChapter === 'recognized' && (
        <div className="space-y-6 animate-fade-in">
          {/* Scoring Components Grid */}
          <div className="p-6 sm:p-8 rounded-[14px] bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-md space-y-4">
            <h3 className="text-lg sm:text-xl font-black uppercase text-zinc-900 dark:text-white tracking-tight">
              5.1 Recognized Poomsae Scoring Structure (10.0 Maximum Points)
            </h3>

            <div className="grid sm:grid-cols-2 gap-4">
              {recognizedScoringComponents.map((sc, idx) => (
                <div key={idx} className="p-5 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-black uppercase text-zinc-900 dark:text-white">
                      {sc.component}
                    </span>
                    <span
                      className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold uppercase"
                      style={{ backgroundColor: `${sc.badgeColor}20`, color: sc.badgeColor }}
                    >
                      {sc.maxPoints}
                    </span>
                  </div>
                  <ul className="space-y-1.5 text-xs text-zinc-600 dark:text-zinc-400 font-light">
                    {sc.subCriteria.map((sub, sIdx) => (
                      <li key={sIdx} className="flex items-start gap-1.5">
                        <span className="text-brand-red font-bold">&bull;</span>
                        <span>{sub}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Slow Movements Timings Tables */}
          <div className="p-6 sm:p-8 rounded-[14px] bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-md space-y-6">
            <h4 className="text-base font-black uppercase text-zinc-900 dark:text-white tracking-tight">
              Slow Movement Timing Guidelines (5–8s Window vs 8s Fixed)
            </h4>

            {/* 5-8s Window */}
            <div className="space-y-2">
              <span className="text-xs font-mono font-bold uppercase text-brand-red block">
                A. Recommended 5 to 8-Second Slow Movements
              </span>
              <div className="overflow-x-auto rounded-xl border border-zinc-200 dark:border-zinc-800">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="bg-zinc-100 dark:bg-zinc-800/90 text-zinc-900 dark:text-white font-mono uppercase text-[11px]">
                      <th className="p-3">Poomsae Form</th>
                      <th className="p-3">Stance</th>
                      <th className="p-3">Technique</th>
                      <th className="p-3">Duration Window</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800/60 font-light">
                    {slowMovements5to8s.map((mov, idx) => (
                      <tr key={idx} className="hover:bg-zinc-50 dark:hover:bg-zinc-800/40">
                        <td className="p-3 font-bold text-zinc-900 dark:text-white">{mov.poomsae}</td>
                        <td className="p-3 font-mono text-zinc-500">{mov.stance}</td>
                        <td className="p-3 text-zinc-700 dark:text-zinc-300">{mov.technique}</td>
                        <td className="p-3 font-mono font-bold text-brand-red">{mov.duration}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* 8s Fixed Duration */}
            <div className="space-y-2 pt-4 border-t border-zinc-100 dark:border-zinc-800">
              <span className="text-xs font-mono font-bold uppercase text-purple-500 block">
                B. Recommended 8-Second Fixed Slow Movements
              </span>
              <div className="overflow-x-auto rounded-xl border border-zinc-200 dark:border-zinc-800">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="bg-zinc-100 dark:bg-zinc-800/90 text-zinc-900 dark:text-white font-mono uppercase text-[11px]">
                      <th className="p-3">Poomsae Form</th>
                      <th className="p-3">Stance</th>
                      <th className="p-3">Technique</th>
                      <th className="p-3">Duration Requirement</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800/60 font-light">
                    {slowMovements8s.map((mov, idx) => (
                      <tr key={idx} className="hover:bg-zinc-50 dark:hover:bg-zinc-800/40">
                        <td className="p-3 font-bold text-zinc-900 dark:text-white">{mov.poomsae}</td>
                        <td className="p-3 font-mono text-zinc-500">{mov.stance}</td>
                        <td className="p-3 text-zinc-700 dark:text-zinc-300">{mov.technique}</td>
                        <td className="p-3 font-mono font-bold text-purple-500">{mov.duration}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ==================================================================== */}
      {/* CHAPTER 6: FREESTYLE POOMSAE SCORING & TECHNICAL SPECIFICATIONS */}
      {/* ==================================================================== */}
      {activeChapter === 'freestyle' && (
        <div className="space-y-6 animate-fade-in">
          {/* Scoring Components Grid */}
          <div className="p-6 sm:p-8 rounded-[14px] bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-md space-y-4">
            <h3 className="text-lg sm:text-xl font-black uppercase text-zinc-900 dark:text-white tracking-tight">
              6.2 Freestyle Point Allocation (10.0 Maximum Points)
            </h3>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {freestyleScoringComponents.map((fsc, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold uppercase text-zinc-900 dark:text-white">
                      {fsc.component.split('(')[0]}
                    </span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-brand-red/10 text-brand-red">
                      {fsc.maxPoints}
                    </span>
                  </div>
                  <ul className="space-y-1 text-xs text-zinc-600 dark:text-zinc-400 font-light">
                    {fsc.subCriteria.map((sub, sIdx) => (
                      <li key={sIdx}>&bull; {sub}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive 5 Mandatory Technical Skills Deep Dive */}
          <div className="p-6 sm:p-8 rounded-[14px] bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-md space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              {freestyleTechnicalSkills.map((sk) => (
                <button
                  key={sk.id}
                  onClick={() => setActiveFreestyleSkillId(sk.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold uppercase transition-all cursor-pointer ${
                    activeFreestyleSkillId === sk.id
                      ? 'bg-brand-red text-white shadow-brand-glow'
                      : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400'
                  }`}
                >
                  {sk.number} {sk.name}
                </button>
              ))}
            </div>

            <div className="p-5 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <span className="text-[10px] font-mono text-zinc-400 uppercase block">{activeSkill.koreanName}</span>
                  <h4 className="text-lg font-black uppercase text-zinc-900 dark:text-white">
                    {activeSkill.number}: {activeSkill.name}
                  </h4>
                </div>
                <div className="flex items-center gap-2 font-mono text-xs">
                  <span className="px-2.5 py-1 rounded bg-zinc-200 dark:bg-zinc-800 text-zinc-900 dark:text-white font-bold">
                    Base: {activeSkill.baseScore}
                  </span>
                  <span className="px-2.5 py-1 rounded bg-emerald-500/10 text-emerald-500 font-bold border border-emerald-500/20">
                    Bonus: {activeSkill.bonusScore}
                  </span>
                </div>
              </div>

              {/* Bonus Chips */}
              <div className="grid sm:grid-cols-3 gap-2 text-xs">
                {activeSkill.bonuses.map((b, bIdx) => (
                  <div key={bIdx} className="p-2.5 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex items-center justify-between">
                    <span className="text-zinc-700 dark:text-zinc-300">{b.label}</span>
                    <span className="font-mono font-black text-emerald-500">{b.points}</span>
                  </div>
                ))}
              </div>

              <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed font-light">
                {activeSkill.measurementCriteria}
              </p>
              <div className="p-3 rounded-lg bg-brand-red/10 border border-brand-red/20 text-brand-red text-xs font-mono font-bold">
                ⚠️ {activeSkill.mandatoryThresholds}
              </div>
            </div>
          </div>

          {/* 12-Point Deduction Matrix Table */}
          <div className="p-6 sm:p-8 rounded-[14px] bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-md space-y-4">
            <h4 className="text-base font-black uppercase text-zinc-900 dark:text-white tracking-tight">
              3.7 Comprehensive Freestyle Deduction Matrix
            </h4>
            <div className="overflow-x-auto rounded-xl border border-zinc-200 dark:border-zinc-800">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="bg-zinc-100 dark:bg-zinc-800/90 text-zinc-900 dark:text-white font-mono uppercase text-[11px]">
                    <th className="p-3.5">Violation / Fault</th>
                    <th className="p-3.5">Deduction Value</th>
                    <th className="p-3.5">Category Deducted From</th>
                    <th className="p-3.5">Context</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800/60 font-light">
                  {freestyleDeductions.map((fd, idx) => (
                    <tr key={idx} className="hover:bg-zinc-50 dark:hover:bg-zinc-800/40">
                      <td className="p-3.5 font-bold text-zinc-900 dark:text-white">{fd.violation}</td>
                      <td className="p-3.5 font-mono font-black text-brand-red whitespace-nowrap">{fd.deduction}</td>
                      <td className="p-3.5 font-mono text-zinc-700 dark:text-zinc-300">{fd.category}</td>
                      <td className="p-3.5 text-zinc-500">{fd.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* ==================================================================== */}
      {/* CHAPTER 7: SCORE AGGREGATION, TIE-BREAKERS & PROTESTS */}
      {/* ==================================================================== */}
      {activeChapter === 'aggregation' && (
        <div className="space-y-6 animate-fade-in">
          {/* TIE-BREAKING HIERARCHY CHART */}
          <div className="p-6 sm:p-8 rounded-[14px] bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-md space-y-6">
            <h3 className="text-lg sm:text-xl font-black uppercase text-zinc-900 dark:text-white tracking-tight">
              7.2 Tie-Breaking Hierarchy Decision Chart
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-3 text-xs font-mono">
              <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-1 text-center">
                <span className="text-[10px] text-zinc-400 block font-bold">Priority #1</span>
                <strong className="text-zinc-900 dark:text-white block">Higher Presentation</strong>
                <span className="text-[10px] text-zinc-500">Or Technical (Freestyle)</span>
              </div>

              <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-1 text-center">
                <span className="text-[10px] text-zinc-400 block font-bold">Priority #2</span>
                <strong className="text-zinc-900 dark:text-white block">Total Points of ALL Judges</strong>
                <span className="text-[10px] text-zinc-500">Re-including dropped marks</span>
              </div>

              <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-1 text-center">
                <span className="text-[10px] text-zinc-400 block font-bold">Priority #3</span>
                <strong className="text-brand-red block">1-Match Rematch</strong>
                <span className="text-[10px] text-zinc-500">Single Poomsae drawn by TD</span>
              </div>

              <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-1 text-center">
                <span className="text-[10px] text-zinc-400 block font-bold">Priority #4</span>
                <strong className="text-purple-500 block">Rematch Presentation</strong>
                <span className="text-[10px] text-zinc-500">Then Rematch Total Points</span>
              </div>
            </div>
          </div>

          {/* Protest & Arbitration Protocols */}
          <div className="p-6 rounded-[14px] bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-md space-y-3">
            <h4 className="text-base font-black uppercase text-zinc-900 dark:text-white tracking-tight">
              7.4 Arbitration &amp; CSB Protest Protocol
            </h4>
            <div className="grid sm:grid-cols-3 gap-3 text-xs">
              <div className="p-3.5 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-1">
                <strong className="text-zinc-900 dark:text-white block font-bold">Protest Fee: $200 USD</strong>
                <span className="text-zinc-500">Non-refundable fee submitted with official form.</span>
              </div>
              <div className="p-3.5 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-1">
                <strong className="text-brand-red block font-bold">Filing Window: 10 Minutes</strong>
                <span className="text-zinc-500">Must be filed within 10m of match conclusion.</span>
              </div>
              <div className="p-3.5 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-1">
                <strong className="text-emerald-500 block font-bold">CSB Verdict: 30 Minutes</strong>
                <span className="text-zinc-500">Supervisory Board delivers final ruling within 30m.</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ==================================================================== */}
      {/* CHAPTER 8: PARA & DEAF TAEKWONDO */}
      {/* ==================================================================== */}
      {activeChapter === 'para' && (
        <div className="space-y-6 animate-fade-in">
          <div className="p-6 sm:p-8 rounded-[14px] bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-md space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-500" />
                <h3 className="text-lg sm:text-xl font-black uppercase text-zinc-900 dark:text-white tracking-tight">
                  8.1 Para-Taekwondo &amp; Deaf-Taekwondo Classifications
                </h3>
              </div>
              <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold bg-blue-500/10 text-blue-500">
                20.0 Maximum Points (Tech 8.0 + Pres 12.0)
              </span>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {paraClassificationsData.map((pc, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-1.5">
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-zinc-200 dark:bg-zinc-800 text-zinc-900 dark:text-white">
                    Class {pc.code}
                  </span>
                  <h4 className="text-xs font-bold uppercase text-zinc-900 dark:text-white">{pc.name}</h4>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 font-light">{pc.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ==================================================================== */}
      {/* CHAPTER 9: STANCES GEOMETRY & BIOMECHANICS */}
      {/* ==================================================================== */}
      {activeChapter === 'geometry' && (
        <div className="space-y-6 animate-fade-in">
          <div className="p-6 sm:p-8 rounded-[14px] bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-md space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-purple-500" />
                <h3 className="text-lg sm:text-xl font-black uppercase text-zinc-900 dark:text-white tracking-tight">
                  9.1 Stance Geometry &amp; Biomechanical Weight Distribution Meters
                </h3>
              </div>
              <span className="text-[10px] font-mono text-zinc-400 uppercase">-0.1 Fault Deductions</span>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {stancesGeometryData.map((sg, idx) => (
                <div key={idx} className="p-5 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-mono text-zinc-400 block">{sg.koreanName}</span>
                      <h4 className="text-sm font-black uppercase text-zinc-900 dark:text-white">{sg.name}</h4>
                    </div>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-brand-red/10 text-brand-red border border-brand-red/20">
                      {sg.length}
                    </span>
                  </div>

                  {/* Weight Distribution Meter */}
                  <div className="space-y-1.5 font-mono text-[10px]">
                    <div className="flex justify-between text-zinc-400">
                      <span>Front Leg: <strong className="text-emerald-500">{sg.weightDistribution.front}%</strong></span>
                      <span>Rear Leg: <strong className="text-amber-500">{sg.weightDistribution.rear}%</strong> ({sg.rearAngle})</span>
                    </div>
                    <div className="w-full h-2.5 rounded-full bg-zinc-200 dark:bg-zinc-800 overflow-hidden flex">
                      <div className="bg-emerald-500 h-full" style={{ width: `${sg.weightDistribution.front}%` }} />
                      <div className="bg-amber-500 h-full" style={{ width: `${sg.weightDistribution.rear}%` }} />
                    </div>
                  </div>

                  <p className="text-xs text-zinc-600 dark:text-zinc-400 font-light leading-relaxed">
                    {sg.description}
                  </p>

                  <div className="space-y-1 text-[11px] text-brand-red font-mono">
                    {sg.deductions.map((ded, dIdx) => (
                      <div key={dIdx}>&bull; {ded}</div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ==================================================================== */}
      {/* CHAPTER 10: MASTER TERMINOLOGY GLOSSARY & 14 BASICS */}
      {/* ==================================================================== */}
      {activeChapter === 'glossary' && (
        <div className="space-y-6 animate-fade-in">
          <div className="p-6 sm:p-8 rounded-[14px] bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-md space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <h3 className="text-lg sm:text-xl font-black uppercase text-zinc-900 dark:text-white tracking-tight">
                10. Master Glossary &amp; 14 Fundamental Basic Movements
              </h3>

              {/* Search Bar */}
              <div className="relative min-w-[200px]">
                <Search className="w-3.5 h-3.5 text-zinc-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={glossarySearch}
                  onChange={(e) => setGlossarySearch(e.target.value)}
                  placeholder="Search terminology..."
                  className="w-full pl-8 pr-3 py-1.5 rounded-lg bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-xs text-zinc-900 dark:text-white placeholder-zinc-400 focus:outline-none focus:border-brand-red"
                />
              </div>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-1.5">
              {[
                { id: 'all', label: 'All Terms' },
                { id: 'basic14', label: '14 Basics' },
                { id: 'stance', label: 'Stances' },
                { id: 'block', label: 'Blocks' },
                { id: 'strike', label: 'Strikes & Punches' },
              ].map((pill) => (
                <button
                  key={pill.id}
                  onClick={() => setGlossaryCategory(pill.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold uppercase transition-colors cursor-pointer ${
                    glossaryCategory === pill.id
                      ? 'bg-brand-red text-white'
                      : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-white'
                  }`}
                >
                  {pill.label}
                </button>
              ))}
            </div>

            {/* Glossary Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2.5 pt-2">
              {filteredGlossary.map((item, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800">
                  <span className="text-[10px] font-mono text-zinc-400 block">{item.koreanName}</span>
                  <strong className="text-xs font-bold text-zinc-900 dark:text-white block mt-0.5">
                    {item.englishName}
                  </strong>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ==================================================================== */}
      {/* PDF VIEWER MODAL (Full Online Read, Download, Zoom & Print) */}
      {/* ==================================================================== */}
      {isPdfModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 animate-fade-in"
          onClick={() => setIsPdfModalOpen(false)}
        >
          <div className="absolute inset-0 bg-black/85 backdrop-blur-2xl" />

          <div
            className="relative w-full max-w-5xl bg-white dark:bg-zinc-950 shadow-2xl rounded-[14px] border border-zinc-200 dark:border-zinc-800 overflow-hidden h-[90vh] flex flex-col z-10 animate-fade-in-up"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Controls Toolbar */}
            <div className="p-4 sm:p-5 border-b border-zinc-200 dark:border-zinc-800 flex flex-wrap items-center justify-between gap-3 bg-zinc-50 dark:bg-zinc-900/80 shrink-0">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-brand-red/10 text-brand-red">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-black uppercase text-zinc-900 dark:text-white line-clamp-1">
                    {currentPdf.title}
                  </h4>
                  <span className="text-[10px] font-mono text-zinc-400">
                    {currentPdf.edition} &bull; {currentPdf.pages} Pages
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setPdfZoom((prev) => Math.max(70, prev - 15))}
                  className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-200 hover:bg-zinc-200 cursor-pointer"
                  aria-label="Zoom Out"
                >
                  <ZoomOut className="w-4 h-4" />
                </button>
                <span className="text-xs font-mono font-bold px-1.5">{pdfZoom}%</span>
                <button
                  onClick={() => setPdfZoom((prev) => Math.min(160, prev + 15))}
                  className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-200 hover:bg-zinc-200 cursor-pointer"
                  aria-label="Zoom In"
                >
                  <ZoomIn className="w-4 h-4" />
                </button>

                <a
                  href={currentPdf.fileUrl}
                  download={currentPdf.fileName}
                  className="px-3 py-1.5 rounded-lg bg-brand-red text-white text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-sm"
                >
                  <Download className="w-3.5 h-3.5" /> Download
                </a>

                <button
                  onClick={() => setIsPdfModalOpen(false)}
                  className="p-2 rounded-lg text-zinc-400 hover:text-zinc-900 dark:hover:text-white cursor-pointer ml-2"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Embedded PDF Viewer Frame */}
            <div className="flex-1 bg-zinc-100 dark:bg-zinc-900 overflow-hidden relative">
              <iframe
                src={`${currentPdf.fileUrl}#toolbar=0&navpanes=0&zoom=${pdfZoom}`}
                title={currentPdf.title}
                className="w-full h-full border-none"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
