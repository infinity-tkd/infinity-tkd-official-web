'use client'

import * as React from 'react'
import {
  FileText,
  Download,
  ExternalLink,
  ZoomIn,
  ZoomOut,
  Maximize2,
  Minimize2,
  Printer,
  Scale,
  Award,
  AlertTriangle,
  CheckCircle2,
  Shield,
  Search,
  BookOpen,
  X,
  Flame,
  Zap,
} from 'lucide-react'
import { competitionRulesItems } from '@/data/library/competitionRules'
import { useLanguage } from '@/context/LanguageContext'

interface CompetitionRulesViewerProps {
  onSelectRule?: (ruleId: string) => void
}

export function CompetitionRulesViewer({ onSelectRule }: CompetitionRulesViewerProps) {
  const { language } = useLanguage()
  const [activeRuleType, setActiveRuleType] = React.useState<'kyorugi' | 'poomsae'>('kyorugi')
  const [isPdfModalOpen, setIsPdfModalOpen] = React.useState(false)
  const [pdfZoom, setPdfZoom] = React.useState(100)
  const [activeRuleModal, setActiveRuleModal] = React.useState<any | null>(null)

  const pdfDocuments = {
    kyorugi: {
      title: 'World Taekwondo Kyorugi Competition Rules & Interpretation 2026',
      koreanTitle: '세계태권도연맹 공인 겨루기 경기 규칙집',
      edition: 'Official WT 2026 Edition',
      fileName: 'world-taekwondo-kyorugi-rules-2026.pdf',
      fileUrl: '/docs/world-taekwondo-kyorugi-rules-2026.pdf',
      pages: 48,
      lastUpdated: 'January 2026',
    },
    poomsae: {
      title: 'World Taekwondo Poomsae Competition Rules & Scoring Guidelines 2026',
      koreanTitle: '세계태권도연맹 공인 품새 채점 기준집',
      edition: 'Official WT 2026 Edition',
      fileName: 'world-taekwondo-poomsae-rules-2026.pdf',
      fileUrl: '/docs/world-taekwondo-poomsae-rules-2026.pdf',
      pages: 36,
      lastUpdated: 'January 2026',
    },
  }

  const currentPdf = pdfDocuments[activeRuleType]

  return (
    <div className="space-y-8">
      {/* -------------------------------------------------------------------- */}
      {/* HEADER & RULEBOOK SELECTOR BAR (14px radius) */}
      {/* -------------------------------------------------------------------- */}
      <div className="p-6 sm:p-8 rounded-[14px] bg-white dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 shadow-md relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-brand-red">
                World Taekwondo Sanctioned
              </span>
              <span className="text-zinc-400">&bull;</span>
              <span className="text-[10px] font-mono text-zinc-500">{currentPdf.edition}</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black uppercase text-zinc-900 dark:text-white tracking-tight">
              Competition Rulebook &amp; Scoring Matrix
            </h3>
            <p className="text-xs sm:text-sm text-zinc-500 font-light mt-1 max-w-2xl">
              Official scoring standards, Gam-jeom penalty codes, sensor thresholds, and PDF document reader for World Kyorugi &amp; World Poomsae.
            </p>
          </div>

          {/* Quick PDF Action Buttons */}
          <div className="flex flex-wrap items-center gap-2.5 shrink-0">
            <button
              onClick={() => setIsPdfModalOpen(true)}
              className="px-4 py-2.5 rounded-xl bg-brand-red hover:bg-zinc-900 text-white text-xs font-bold uppercase tracking-wider transition-all shadow-brand-glow inline-flex items-center gap-2 cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5" /> Open PDF Reader Mode
            </button>

            <a
              href={currentPdf.fileUrl}
              download={currentPdf.fileName}
              className="px-3.5 py-2.5 rounded-xl bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-zinc-700 dark:text-zinc-200 text-xs font-bold uppercase tracking-wider transition-colors inline-flex items-center gap-2 border border-zinc-200 dark:border-zinc-700"
            >
              <Download className="w-3.5 h-3.5" /> Download PDF
            </a>
          </div>
        </div>

        {/* Category Switcher Tabs */}
        <div className="flex flex-wrap gap-2 mt-6 pt-6 border-t border-zinc-100 dark:border-zinc-800">
          <button
            onClick={() => setActiveRuleType('kyorugi')}
            className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer flex items-center gap-2 ${
              activeRuleType === 'kyorugi'
                ? 'bg-zinc-900 text-white dark:bg-white dark:text-black shadow-md'
                : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-400'
            }`}
          >
            <Zap className="w-3.5 h-3.5 text-brand-red" /> World Kyorugi (Sparring) Rules
          </button>

          <button
            onClick={() => setActiveRuleType('poomsae')}
            className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer flex items-center gap-2 ${
              activeRuleType === 'poomsae'
                ? 'bg-zinc-900 text-white dark:bg-white dark:text-black shadow-md'
                : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-400'
            }`}
          >
            <Award className="w-3.5 h-3.5 text-blue-500" /> World Poomsae (Forms) Scoring Rules
          </button>
        </div>
      </div>

      {/* -------------------------------------------------------------------- */}
      {/* SCORING CHEAT SHEETS (KYORUGI VS POOMSAE) */}
      {/* -------------------------------------------------------------------- */}
      {activeRuleType === 'kyorugi' ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Point Values Card */}
          <div className="p-5 rounded-[14px] bg-white dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 shadow-sm">
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-brand-red block mb-2">
              WT Point Value Matrix
            </span>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between items-center p-2 rounded-lg bg-zinc-50 dark:bg-zinc-950 border border-zinc-100 dark:border-zinc-800">
                <span className="text-zinc-600 dark:text-zinc-300">Punch to Body</span>
                <span className="font-mono font-bold text-zinc-900 dark:text-white">1 Point</span>
              </div>
              <div className="flex justify-between items-center p-2 rounded-lg bg-zinc-50 dark:bg-zinc-950 border border-zinc-100 dark:border-zinc-800">
                <span className="text-zinc-600 dark:text-zinc-300">Direct Body Kick (Hogu)</span>
                <span className="font-mono font-bold text-zinc-900 dark:text-white">2 Points</span>
              </div>
              <div className="flex justify-between items-center p-2 rounded-lg bg-zinc-50 dark:bg-zinc-950 border border-zinc-100 dark:border-zinc-800">
                <span className="text-zinc-600 dark:text-zinc-300">Direct Head Kick</span>
                <span className="font-mono font-bold text-zinc-900 dark:text-white">3 Points</span>
              </div>
              <div className="flex justify-between items-center p-2 rounded-lg bg-zinc-50 dark:bg-zinc-950 border border-zinc-100 dark:border-zinc-800">
                <span className="text-zinc-600 dark:text-zinc-300">Turning Kick to Body</span>
                <span className="font-mono font-bold text-brand-red">4 Points (+2 Bonus)</span>
              </div>
              <div className="flex justify-between items-center p-2 rounded-lg bg-zinc-50 dark:bg-zinc-950 border border-zinc-100 dark:border-zinc-800">
                <span className="text-zinc-600 dark:text-zinc-300">Turning Kick to Head</span>
                <span className="font-mono font-bold text-brand-red">5 Points (+2 Bonus)</span>
              </div>
            </div>
          </div>

          {/* Gam-Jeom Penalties Card */}
          <div className="p-5 rounded-[14px] bg-white dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 shadow-sm">
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-amber-500 block mb-2">
              Gam-Jeom Infraction Codes
            </span>
            <ul className="space-y-1.5 text-xs text-zinc-600 dark:text-zinc-400 font-light">
              <li className="flex items-start gap-1.5">
                <span className="text-amber-500 font-bold">&bull;</span>
                <span>Crossing boundary line with any foot.</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-amber-500 font-bold">&bull;</span>
                <span>Falling down to evade attack.</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-amber-500 font-bold">&bull;</span>
                <span>Holding, grabbing, or pushing opponent.</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-amber-500 font-bold">&bull;</span>
                <span>Lifting leg for &gt;3s without kicking (cut-kick stalling).</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-amber-500 font-bold">&bull;</span>
                <strong className="text-zinc-800 dark:text-zinc-200">5 Gam-Jeoms in 1 round = Round Forfeit.</strong>
              </li>
            </ul>
          </div>

          {/* Best-of-3 & IVR Card */}
          <div className="p-5 rounded-[14px] bg-white dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 shadow-sm">
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-blue-500 block mb-2">
              Best-of-3 &amp; IVR Quota
            </span>
            <div className="space-y-2 text-xs text-zinc-600 dark:text-zinc-400 font-light">
              <p>
                Matches are contested in <strong>3 independent 2-minute rounds</strong>. The first athlete to win 2 rounds claims victory immediately.
              </p>
              <div className="p-2.5 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-[11px]">
                <strong>IVR Video Card:</strong> Coach has 1 challenge card per match. Retained if successful; forfeited if overturned.
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Accuracy Card */}
          <div className="p-5 rounded-[14px] bg-white dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 shadow-sm">
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-purple-500 block mb-2">
              Accuracy Scoring (4.0 Max Base)
            </span>
            <div className="space-y-2 text-xs">
              <div className="p-2 rounded-lg bg-zinc-50 dark:bg-zinc-950 border border-zinc-100 dark:border-zinc-800">
                <strong className="text-zinc-900 dark:text-white block mb-0.5">-0.1 Minor Deduction</strong>
                <span className="text-zinc-500 font-light">Slight tremor, incorrect eye focus, improper hand chambering.</span>
              </div>
              <div className="p-2 rounded-lg bg-zinc-50 dark:bg-zinc-950 border border-zinc-100 dark:border-zinc-800">
                <strong className="text-zinc-900 dark:text-white block mb-0.5">-0.3 Major Deduction</strong>
                <span className="text-zinc-500 font-light">Wrong stance length (Ap-koobi/Dwit-koobi), missed movement, loud breathing.</span>
              </div>
            </div>
          </div>

          {/* Presentation Card */}
          <div className="p-5 rounded-[14px] bg-white dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 shadow-sm">
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-500 block mb-2">
              Presentation Scoring (6.0 Max Base)
            </span>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between items-center p-2 rounded-lg bg-zinc-50 dark:bg-zinc-950 border border-zinc-100 dark:border-zinc-800">
                <span className="text-zinc-700 dark:text-zinc-300">Speed &amp; Power</span>
                <span className="font-mono font-bold text-zinc-900 dark:text-white">2.0 Points Max</span>
              </div>
              <div className="flex justify-between items-center p-2 rounded-lg bg-zinc-50 dark:bg-zinc-950 border border-zinc-100 dark:border-zinc-800">
                <span className="text-zinc-700 dark:text-zinc-300">Rhythm &amp; Tempo Control</span>
                <span className="font-mono font-bold text-zinc-900 dark:text-white">2.0 Points Max</span>
              </div>
              <div className="flex justify-between items-center p-2 rounded-lg bg-zinc-50 dark:bg-zinc-950 border border-zinc-100 dark:border-zinc-800">
                <span className="text-zinc-700 dark:text-zinc-300">Expression of Energy &amp; Kihap</span>
                <span className="font-mono font-bold text-zinc-900 dark:text-white">2.0 Points Max</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* -------------------------------------------------------------------- */}
      {/* PDF VIEWER MODAL (Full Online Read, Download, Zoom & Print) */}
      {/* -------------------------------------------------------------------- */}
      {isPdfModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 animate-fade-in"
          onClick={() => setIsPdfModalOpen(false)}
        >
          <div className="absolute inset-0 bg-black/80 backdrop-blur-2xl" />

          <div
            className="relative w-full max-w-5xl bg-zinc-900 text-white shadow-2xl rounded-[14px] border border-zinc-800 overflow-hidden h-[92vh] flex flex-col z-10 animate-fade-in-up"
            onClick={(e) => e.stopPropagation()}
          >
            {/* PDF Viewer Control Bar */}
            <div className="p-3 sm:p-4 bg-zinc-950 border-b border-zinc-800 flex flex-wrap items-center justify-between gap-3 shrink-0">
              <div className="flex items-center gap-2 min-w-0">
                <FileText className="w-4 h-4 text-brand-red shrink-0" />
                <div className="min-w-0">
                  <h4 className="text-xs sm:text-sm font-bold truncate max-w-xs sm:max-w-md">
                    {currentPdf.title}
                  </h4>
                  <span className="text-[10px] text-zinc-400 font-mono block">
                    {currentPdf.edition} &bull; {currentPdf.pages} Pages &bull; {currentPdf.lastUpdated}
                  </span>
                </div>
              </div>

              {/* Viewer Controls */}
              <div className="flex items-center gap-1.5 sm:gap-2">
                <button
                  onClick={() => setPdfZoom((z) => Math.max(50, z - 15))}
                  className="p-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-300 text-xs"
                  title="Zoom Out"
                >
                  <ZoomOut className="w-3.5 h-3.5" />
                </button>
                <span className="text-[11px] font-mono px-2 text-zinc-400">{pdfZoom}%</span>
                <button
                  onClick={() => setPdfZoom((z) => Math.min(200, z + 15))}
                  className="p-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-300 text-xs"
                  title="Zoom In"
                >
                  <ZoomIn className="w-3.5 h-3.5" />
                </button>

                <div className="h-4 w-px bg-zinc-800 mx-1" />

                <a
                  href={currentPdf.fileUrl}
                  download={currentPdf.fileName}
                  className="px-3 py-1.5 rounded-lg bg-brand-red text-white text-xs font-bold uppercase tracking-wider inline-flex items-center gap-1.5 shadow-sm"
                >
                  <Download className="w-3.5 h-3.5" /> Download
                </a>

                <button
                  onClick={() => window.print()}
                  className="p-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-300 text-xs"
                  title="Print"
                >
                  <Printer className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => setIsPdfModalOpen(false)}
                  className="p-2 rounded-lg bg-zinc-900 hover:bg-red-600 text-white text-xs transition-colors ml-1"
                  aria-label="Close"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Embedded PDF Frame / Fallback Viewer */}
            <div className="flex-1 bg-zinc-950 overflow-auto p-4 sm:p-8 flex items-center justify-center">
              <div
                className="w-full h-full bg-white rounded-lg shadow-xl overflow-hidden transition-transform duration-200 relative flex flex-col"
                style={{ transform: `scale(${pdfZoom / 100})`, transformOrigin: 'top center' }}
              >
                {/* Iframe with fallback placeholder */}
                <iframe
                  src={`${currentPdf.fileUrl}#toolbar=0&navpanes=0`}
                  title={currentPdf.title}
                  className="w-full h-full border-0 min-h-[500px]"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
