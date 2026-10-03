'use client'

import * as React from 'react'
import {
  kyorugiPointValues,
  kyorugiGamjeomRules,
  cadetHeightWeightLimits,
  kyorugiHealthBarActions,
  poomsaeAgeDivisions,
  compulsoryPoomsaePools,
  singleEliminationCommands,
  recognizedAccuracyDeductions,
  presentationScoringDetails,
  slowMovements5to8s,
  slowMovements8s,
  freestyleTechnicalSkills,
  boardBreakingRequirements,
  assistanceAuthorizationMatrix,
  freestyleDeductions,
  hanmadangEventsData,
} from '@/data/library/competitionRulesData'
import {
  competitionRulesI18n,
  getLocalizedKyorugiPointValues,
  getLocalizedGamjeomRules,
  getLocalizedRefereeSignals,
} from '@/data/library/competitionRulesTranslations'
import {
  getLocalizedOfficials,
  getLocalizedRingDynamics,
  getLocalizedEligibilityAndGear,
  getLocalizedBeginnerMistakes,
  getLocalizedMindset,
  getLocalizedKyorugiScenarios,
  getLocalizedPoomsaeCases,
  getLocalizedFourteenBasicMovements,
  getLocalizedProhibitedCategories,
} from '@/data/library/competitionRulesDetailedTranslations'
import { useLanguage } from '@/context/LanguageContext'
import { FreestylePoomsaeScoreSimulator } from '@/components/library/FreestylePoomsaeScoreSimulator'
import {
  Zap,
  Award,
  Flame,
  Shield,
  Clock,
  Target,
  FileText,
  Download,
  CheckCircle2,
  AlertTriangle,
  Scale,
  Sparkles,
  Info,
  ChevronDown,
  ArrowRight,
  Maximize2,
  X,
  ZoomIn,
  ZoomOut,
  Building,
  Users,
  Compass,
  Layers,
  Activity,
  Calendar,
  Network,
  ListFilter,
  Check,
  Music,
  Box,
  AlertOctagon,
  Eye,
  Volume2,
  UserCheck,
  RefreshCw,
  Heart,
  Camera,
  Play,
  RotateCcw,
  Megaphone,
  Flag,
  HelpCircle,
} from 'lucide-react'

export function CompetitionRulesReader() {
  const { language } = useLanguage()
  const ruleT = React.useMemo(() => competitionRulesI18n[language] || competitionRulesI18n.en, [language])
  const pointValues = React.useMemo(() => getLocalizedKyorugiPointValues(language), [language])
  const gamjeomRules = React.useMemo(() => getLocalizedGamjeomRules(language), [language])
  const refereeSignals = React.useMemo(() => getLocalizedRefereeSignals(language), [language])
  const officials = React.useMemo(() => getLocalizedOfficials(language), [language])
  const ringDynamics = React.useMemo(() => getLocalizedRingDynamics(language), [language])
  const eligibilityAndGear = React.useMemo(() => getLocalizedEligibilityAndGear(language), [language])
  const beginnerMistakes = React.useMemo(() => getLocalizedBeginnerMistakes(language), [language])
  const mindsetRules = React.useMemo(() => getLocalizedMindset(language), [language])
  const kyorugiScenarios = React.useMemo(() => getLocalizedKyorugiScenarios(language), [language])
  const poomsaeCases = React.useMemo(() => getLocalizedPoomsaeCases(language), [language])
  const fourteenMovements = React.useMemo(() => getLocalizedFourteenBasicMovements(language), [language])
  const prohibitedCategories = React.useMemo(() => getLocalizedProhibitedCategories(language), [language])
  
  // 3 Big Master Categories: WT Kyorugi | WT Poomsae | Hanmadang
  const [masterCategory, setMasterCategory] = React.useState<'kyorugi' | 'poomsae' | 'hanmadang'>('kyorugi')

  // WT Kyorugi Sub-Switchers: Overview & Venue | Divisions & Weights | Scoring & Gam-Jeoms | Safety, IVR & Health Bar | First Competition Guide
  const [kyorugiSubCategory, setKyorugiSubCategory] = React.useState<'overview' | 'divisions' | 'scoring' | 'safety' | 'guide'>('overview')
  const [selectedCadetGender, setSelectedCadetGender] = React.useState<'Male' | 'Female'>('Male')
  const [healthBarChung, setHealthBarChung] = React.useState<number>(150)
  const [healthBarHong, setHealthBarHong] = React.useState<number>(150)
  const [isPassiveHong, setIsPassiveHong] = React.useState<boolean>(false)
  const [isPassiveChung, setIsPassiveChung] = React.useState<boolean>(false)

  // WT Poomsae Sub-Switchers: Common Foundation | Recognized Poomsae | Freestyle Poomsae
  const [poomsaeSubCategory, setPoomsaeSubCategory] = React.useState<'common' | 'recognized' | 'freestyle'>('common')

  // Display Mode: Structured Specifications vs Mindmap / Tree Mode
  const [viewStyle, setViewStyle] = React.useState<'specs' | 'mindmap'>('specs')

  const [activeFreestyleSkillId, setActiveFreestyleSkillId] = React.useState<string>('fs-skill-01')
  const [isPdfModalOpen, setIsPdfModalOpen] = React.useState<boolean>(false)
  const [pdfZoom, setPdfZoom] = React.useState<number>(100)

  const activeSkill = freestyleTechnicalSkills.find((s) => s.id === activeFreestyleSkillId) || freestyleTechnicalSkills[0]

  const pdfDocuments = {
    kyorugi: {
      title: 'World Taekwondo Kyorugi Competition Rules & Interpretation (2026 Edition)',
      koreanTitle: '세계태권도연맹 공인 겨루기 경기 규칙집',
      edition: 'Official WT 2026 Edition',
      inForceDate: 'In Force as of January 1, 2026',
      fileName: 'world-taekwondo-kyorugi-rules-2026.pdf',
      fileUrl: '/docs/world-taekwondo-kyorugi-rules-2026.pdf',
      pages: 48,
    },
    poomsae: {
      title: 'World Taekwondo Poomsae Competition Rules & Operational Regulations (2024 Edition)',
      koreanTitle: '세계태권도연맹 공인 품새 경기 규칙 및 운영 규정집',
      edition: 'Official WT 2024 Edition',
      inForceDate: 'In Force as of September 30, 2024',
      fileName: 'world-taekwondo-poomsae-rules-2024.pdf',
      fileUrl: '/docs/world-taekwondo-poomsae-rules-2024.pdf',
      pages: 42,
    },
    hanmadang: {
      title: 'World Taekwondo Hanmadang International Regulations & Breaking Standards',
      koreanTitle: '세계태권도한마당 경기 규정집',
      edition: 'Kukkiwon Hanmadang Edition',
      inForceDate: 'Annual Festival Standards',
      fileName: 'world-taekwondo-poomsae-rules-2026.pdf',
      fileUrl: '/docs/world-taekwondo-poomsae-rules-2026.pdf',
      pages: 36,
    },
  }

  const currentPdf = pdfDocuments[masterCategory]

  return (
    <div className="space-y-8 font-sans">
      {/* ==================================================================== */}
      {/* 3 MASTER CATEGORIES SWITCHER BAR */}
      {/* ==================================================================== */}
      <div className="p-6 sm:p-8 rounded-[14px] bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-md space-y-6 relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
          <div>
            {/* IN-FORCE REGULATION BADGE & ENFORCEMENT TIMELINE */}
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded-md text-[10px] font-mono font-bold uppercase tracking-wider bg-brand-red text-white">
                {ruleT.badgeAssembly}
              </span>
              <span className="px-2.5 py-0.5 rounded-md text-[10px] font-mono font-bold bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 border border-zinc-200 dark:border-zinc-700">
                📅 {ruleT.badgeInForce}
              </span>
              <span className="text-zinc-400">&bull;</span>
              <span className="text-[10px] font-mono text-zinc-500">{currentPdf.edition}</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-black uppercase text-zinc-900 dark:text-white tracking-tight">
              {ruleT.heroTitle}
            </h2>
            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 font-light mt-1 max-w-3xl leading-relaxed">
              {ruleT.heroSubtitle}
            </p>
          </div>

          {/* Action Buttons: View Style Toggle & PDF Reader */}
          <div className="flex flex-wrap items-center gap-2 shrink-0">
            <div className="flex items-center p-1 bg-zinc-100 dark:bg-zinc-800 rounded-xl border border-zinc-200 dark:border-zinc-700">
              <button
                onClick={() => setViewStyle('specs')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 cursor-pointer ${
                  viewStyle === 'specs'
                    ? 'bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white shadow-sm'
                    : 'text-zinc-500 hover:text-zinc-900 dark:hover:text-white'
                }`}
              >
                <ListFilter className="w-3.5 h-3.5" /> {ruleT.btnTables}
              </button>
              <button
                onClick={() => setViewStyle('mindmap')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 cursor-pointer ${
                  viewStyle === 'mindmap'
                    ? 'bg-brand-red text-white shadow-brand-glow font-black'
                    : 'text-zinc-500 hover:text-zinc-900 dark:hover:text-white'
                }`}
              >
                <Network className="w-3.5 h-3.5" /> {ruleT.btnMindmap}
              </button>
            </div>

            <button
              onClick={() => setIsPdfModalOpen(true)}
              className="px-4 py-2 rounded-xl bg-zinc-900 dark:bg-white text-white dark:text-black text-xs font-bold uppercase tracking-wider transition-all shadow-md inline-flex items-center gap-2 cursor-pointer hover:bg-brand-red hover:text-white"
            >
              <FileText className="w-3.5 h-3.5" /> {ruleT.btnPdf}
            </button>
          </div>
        </div>

        {/* 3 BIG CATEGORIES SELECTOR */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
          {/* Category 1: WT Kyorugi */}
          <button
            onClick={() => setMasterCategory('kyorugi')}
            className={`p-4 rounded-xl border text-left transition-all cursor-pointer flex items-center justify-between ${
              masterCategory === 'kyorugi'
                ? 'bg-brand-red text-white border-brand-red shadow-brand-glow'
                : 'bg-zinc-50 dark:bg-zinc-950 border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 hover:border-brand-red/50'
            }`}
          >
            <div className="flex items-center gap-3">
              <div className={`p-2.5 rounded-lg ${masterCategory === 'kyorugi' ? 'bg-white/20 text-white' : 'bg-brand-red/10 text-brand-red'}`}>
                <Zap className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase block opacity-80">{ruleT.masterCategories.kyorugi.sub}</span>
                <strong className="text-sm font-black uppercase tracking-tight block">{ruleT.masterCategories.kyorugi.label}</strong>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 opacity-70" />
          </button>

          {/* Category 2: WT Poomsae */}
          <button
            onClick={() => setMasterCategory('poomsae')}
            className={`p-4 rounded-xl border text-left transition-all cursor-pointer flex items-center justify-between ${
              masterCategory === 'poomsae'
                ? 'bg-zinc-900 text-white dark:bg-white dark:text-black border-zinc-900 dark:border-white shadow-xl'
                : 'bg-zinc-50 dark:bg-zinc-950 border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 hover:border-zinc-400 dark:hover:border-zinc-700'
            }`}
          >
            <div className="flex items-center gap-3">
              <div className={`p-2.5 rounded-lg ${masterCategory === 'poomsae' ? 'bg-zinc-800 text-white dark:bg-zinc-200 dark:text-black' : 'bg-blue-500/10 text-blue-500'}`}>
                <Award className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase block opacity-80">{ruleT.masterCategories.poomsae.sub}</span>
                <strong className="text-sm font-black uppercase tracking-tight block">{ruleT.masterCategories.poomsae.label}</strong>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 opacity-70" />
          </button>

          {/* Category 3: Hanmadang (Breaking & Festival) */}
          <button
            onClick={() => setMasterCategory('hanmadang')}
            className={`p-4 rounded-xl border text-left transition-all cursor-pointer flex items-center justify-between ${
              masterCategory === 'hanmadang'
                ? 'bg-amber-600 text-white border-amber-600 shadow-xl'
                : 'bg-zinc-50 dark:bg-zinc-950 border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 hover:border-amber-500/50'
            }`}
          >
            <div className="flex items-center gap-3">
              <div className={`p-2.5 rounded-lg ${masterCategory === 'hanmadang' ? 'bg-white/20 text-white' : 'bg-amber-500/10 text-amber-500'}`}>
                <Flame className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase block opacity-80">{ruleT.masterCategories.hanmadang.sub}</span>
                <strong className="text-sm font-black uppercase tracking-tight block">{ruleT.masterCategories.hanmadang.label}</strong>
              </div>
            </div>
            <span className="px-2 py-0.5 rounded text-[9px] font-mono font-bold uppercase bg-amber-500/20 text-amber-700 dark:text-amber-300">
              {ruleT.previewBadge}
            </span>
          </button>
        </div>
      </div>

      {/* ==================================================================== */}
      {/* GLOBAL MINDMAP / STRUCTURAL ARCHITECTURE TREE VIEW */}
      {/* ==================================================================== */}
      {viewStyle === 'mindmap' && (
        <div className="p-6 sm:p-8 rounded-[14px] bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-md space-y-6 animate-fade-in">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Network className="w-5 h-5 text-brand-red" />
              <h3 className="text-lg sm:text-xl font-black uppercase text-zinc-900 dark:text-white tracking-tight">
                {ruleT.mindmap.title}
              </h3>
            </div>
            <span className="text-xs font-mono text-zinc-400">{ruleT.mindmap.sub}</span>
          </div>

          <div className="p-6 rounded-2xl bg-zinc-950 border border-zinc-800 text-white space-y-6 overflow-x-auto">
            <div className="flex justify-center">
              <div className="px-5 py-3 rounded-xl bg-brand-red text-white font-mono font-black text-xs uppercase tracking-wider shadow-brand-glow text-center">
                {ruleT.mindmap.root}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 relative">
              {/* Branch 1: WT Kyorugi */}
              <div className="p-4 rounded-xl bg-zinc-900 border border-brand-red/40 space-y-3">
                <div className="flex items-center gap-2 text-brand-red font-mono font-bold text-xs uppercase">
                  <Zap className="w-4 h-4" /> {ruleT.mindmap.kyorugiBranch}
                </div>
                <div className="space-y-1.5 text-[11px] font-mono text-zinc-300">
                  <div className="p-2 rounded bg-zinc-950 border border-zinc-800 flex justify-between">
                    <span>{ruleT.mindmap.k1}</span>
                    <span className="text-brand-red">{ruleT.mindmap.k1Val}</span>
                  </div>
                  <div className="p-2 rounded bg-zinc-950 border border-zinc-800 flex justify-between">
                    <span>{ruleT.mindmap.k2}</span>
                    <span className="text-emerald-400">{ruleT.mindmap.k2Val}</span>
                  </div>
                  <div className="p-2 rounded bg-zinc-950 border border-zinc-800 flex justify-between">
                    <span>{ruleT.mindmap.k3}</span>
                    <span className="text-amber-400">{ruleT.mindmap.k3Val}</span>
                  </div>
                  <div className="p-2 rounded bg-zinc-950 border border-zinc-800 flex justify-between">
                    <span>{ruleT.mindmap.k4}</span>
                    <span className="text-blue-400">{ruleT.mindmap.k4Val}</span>
                  </div>
                </div>
              </div>

              {/* Branch 2: WT Poomsae */}
              <div className="p-4 rounded-xl bg-zinc-900 border border-blue-500/40 space-y-3">
                <div className="flex items-center gap-2 text-blue-400 font-mono font-bold text-xs uppercase">
                  <Award className="w-4 h-4" /> {ruleT.mindmap.poomsaeBranch}
                </div>
                <div className="space-y-1.5 text-[11px] font-mono text-zinc-300">
                  <div className="p-2 rounded bg-zinc-950 border border-zinc-800 flex justify-between">
                    <span>{ruleT.mindmap.p1}</span>
                    <span className="text-blue-400">{ruleT.mindmap.p1Val}</span>
                  </div>
                  <div className="p-2 rounded bg-zinc-950 border border-zinc-800 flex justify-between">
                    <span>{ruleT.mindmap.p2}</span>
                    <span className="text-emerald-400">{ruleT.mindmap.p2Val}</span>
                  </div>
                  <div className="p-2 rounded bg-zinc-950 border border-zinc-800 flex justify-between">
                    <span>{ruleT.mindmap.p3}</span>
                    <span className="text-brand-red">{ruleT.mindmap.p3Val}</span>
                  </div>
                  <div className="p-2 rounded bg-zinc-950 border border-zinc-800 flex justify-between">
                    <span>{ruleT.mindmap.p4}</span>
                    <span className="text-purple-400">{ruleT.mindmap.p4Val}</span>
                  </div>
                </div>
              </div>

              {/* Branch 3: Hanmadang */}
              <div className="p-4 rounded-xl bg-zinc-900 border border-amber-500/40 space-y-3">
                <div className="flex items-center gap-2 text-amber-400 font-mono font-bold text-xs uppercase">
                  <Flame className="w-4 h-4" /> {ruleT.mindmap.hanmadangBranch}
                </div>
                <div className="space-y-1.5 text-[11px] font-mono text-zinc-300">
                  <div className="p-2 rounded bg-zinc-950 border border-zinc-800 flex justify-between">
                    <span>{ruleT.mindmap.h1}</span>
                    <span className="text-amber-400">{ruleT.mindmap.h1Val}</span>
                  </div>
                  <div className="p-2 rounded bg-zinc-950 border border-zinc-800 flex justify-between">
                    <span>{ruleT.mindmap.h2}</span>
                    <span className="text-emerald-400">{ruleT.mindmap.h2Val}</span>
                  </div>
                  <div className="p-2 rounded bg-zinc-950 border border-zinc-800 flex justify-between">
                    <span>{ruleT.mindmap.h3}</span>
                    <span className="text-blue-400">{ruleT.mindmap.h3Val}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ==================================================================== */}
      {/* 1. MASTER CATEGORY: WT KYORUGI (SPARRING RULES & BEST-OF-3) */}
      {/* ==================================================================== */}
      {masterCategory === 'kyorugi' && (
        <div className="space-y-6 animate-fade-in">
          {/* KYORUGI SUB-SWITCHER BAR */}
          <div className="p-2 rounded-2xl bg-zinc-100 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 flex flex-wrap items-center gap-1.5">
            <button
              onClick={() => setKyorugiSubCategory('overview')}
              className={`flex-1 py-2.5 px-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                kyorugiSubCategory === 'overview'
                  ? 'bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white shadow-md border border-zinc-200 dark:border-zinc-800'
                  : 'text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white'
              }`}
            >
              <Building className="w-3.5 h-3.5 text-brand-red" />
              <span>{ruleT.kyorugiTabs.overview}</span>
            </button>

            <button
              onClick={() => setKyorugiSubCategory('divisions')}
              className={`flex-1 py-2.5 px-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                kyorugiSubCategory === 'divisions'
                  ? 'bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white shadow-md border border-zinc-200 dark:border-zinc-800'
                  : 'text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white'
              }`}
            >
              <Scale className="w-3.5 h-3.5 text-blue-500" />
              <span>{ruleT.kyorugiTabs.divisions}</span>
            </button>

            <button
              onClick={() => setKyorugiSubCategory('scoring')}
              className={`flex-1 py-2.5 px-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                kyorugiSubCategory === 'scoring'
                  ? 'bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white shadow-md border border-zinc-200 dark:border-zinc-800'
                  : 'text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white'
              }`}
            >
              <Zap className="w-3.5 h-3.5 text-amber-500" />
              <span>{ruleT.kyorugiTabs.scoring}</span>
            </button>

            <button
              onClick={() => setKyorugiSubCategory('safety')}
              className={`flex-1 py-2.5 px-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                kyorugiSubCategory === 'safety'
                  ? 'bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white shadow-md border border-zinc-200 dark:border-zinc-800'
                  : 'text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white'
              }`}
            >
              <Heart className="w-3.5 h-3.5 text-emerald-500" />
              <span>{ruleT.kyorugiTabs.safety}</span>
            </button>

            <button
              onClick={() => setKyorugiSubCategory('guide')}
              className={`flex-1 py-2.5 px-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                kyorugiSubCategory === 'guide'
                  ? 'bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white shadow-md border border-zinc-200 dark:border-zinc-800'
                  : 'text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-purple-500" />
              <span>{ruleT.kyorugiTabs.guide}</span>
            </button>
          </div>

          {/* ================================================================ */}
          {/* SUB-SECTION 1: OVERVIEW, VENUE STANDARDS & ALERT AREA */}
          {/* ================================================================ */}
          {kyorugiSubCategory === 'overview' && (
            <div className="space-y-6 animate-fade-in">
              {/* General Governance Card */}
              <div className="p-6 sm:p-8 rounded-[14px] bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-md space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-brand-red" />
                    <h3 className="text-lg sm:text-xl font-black uppercase text-zinc-900 dark:text-white tracking-tight">
                      {ruleT.overview.govTitle}
                    </h3>
                  </div>
                  <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold bg-brand-red/10 text-brand-red uppercase">
                    {ruleT.overview.govBadge}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 font-light leading-relaxed">
                  {ruleT.overview.govDesc}
                </p>

                <div className="grid sm:grid-cols-3 gap-3 text-xs">
                  <div className="p-3.5 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-1">
                    <strong className="text-zinc-900 dark:text-white block font-bold">{ruleT.overview.standardTitle}</strong>
                    <span className="text-zinc-500 font-light leading-relaxed">
                      {ruleT.overview.standardDesc}
                    </span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-1">
                    <strong className="text-zinc-900 dark:text-white block font-bold">{ruleT.overview.modTitle}</strong>
                    <span className="text-zinc-500 font-light leading-relaxed">
                      {ruleT.overview.modDesc}
                    </span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-1">
                    <strong className="text-zinc-900 dark:text-white block font-bold">{ruleT.overview.codeTitle}</strong>
                    <span className="text-zinc-500 font-light leading-relaxed">
                      {ruleT.overview.codeDesc}
                    </span>
                  </div>
                </div>
              </div>

              {/* Competition Area & Visual Alert Area Map */}
              <div className="p-6 sm:p-8 rounded-[14px] bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-md space-y-5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <h4 className="text-base font-black uppercase text-zinc-900 dark:text-white tracking-tight">
                      {ruleT.overview.fopTitle}
                    </h4>
                    <span className="text-xs text-zinc-500 font-light">
                      {ruleT.overview.fopSub}
                    </span>
                  </div>
                  <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold bg-amber-500/10 text-amber-500 uppercase self-start sm:self-auto">
                    {ruleT.overview.alertBadge}
                  </span>
                </div>

                <div className="p-6 rounded-2xl bg-zinc-950 border border-zinc-800 text-white relative overflow-hidden">
                  <div className="text-center mb-4">
                    <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold bg-zinc-800 text-zinc-300 border border-zinc-700 inline-block">
                      {ruleT.overview.safetyOuter}
                    </span>
                  </div>

                  <div className="relative mx-auto max-w-lg h-64 sm:h-72 rounded-2xl bg-zinc-900 border-2 border-dashed border-zinc-700 p-3 flex flex-col justify-between items-center">
                    {/* 60cm Alert Area Band */}
                    <div className="w-full h-full rounded-xl bg-amber-500/15 border-4 border-amber-500/60 p-3 flex flex-col justify-between items-center relative">
                      <div className="w-full flex justify-between items-center text-[10px] font-mono text-amber-400">
                        <span>{ruleT.overview.boundaryLine}</span>
                        <span className="px-2 py-0.5 rounded bg-amber-500/20 border border-amber-500/40 text-[10px] font-bold">
                          {ruleT.overview.alertBand}
                        </span>
                        <span>{ruleT.overview.boundaryLine}</span>
                      </div>

                      {/* Inner Contest Area */}
                      <div className="w-4/5 h-3/5 rounded-lg bg-zinc-950/90 border border-zinc-700 flex flex-col items-center justify-center space-y-1 text-center p-2">
                        <span className="text-xs font-mono font-black text-white">
                          {ruleT.overview.contestArea}
                        </span>
                        <span className="text-[10px] font-mono text-zinc-400">
                          {ruleT.overview.contestSub}
                        </span>
                      </div>

                      <div className="w-full flex justify-between items-center text-[10px] font-mono text-amber-400">
                        <span>{ruleT.overview.coachStation}</span>
                        <span className="text-zinc-500 text-[10px]">{ruleT.overview.noTapeNote}</span>
                        <span>{ruleT.overview.coachStation}</span>
                      </div>
                    </div>
                  </div>

                  <div className="text-center mt-4">
                    <span className="text-[11px] font-mono text-zinc-400">
                      {ruleT.overview.platformNote}
                    </span>
                  </div>
                </div>

                {/* Environmental Technical Standards Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-2.5 text-xs font-mono">
                  <div className="p-3 rounded-lg bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-0.5">
                    <strong className="text-zinc-900 dark:text-white block font-bold">{ruleT.overview.lightingTitle}</strong>
                    <span className="text-zinc-500 text-[11px]">&ge; 1,600 lux on FOP</span>
                  </div>
                  <div className="p-3 rounded-lg bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-0.5">
                    <strong className="text-zinc-900 dark:text-white block font-bold">{ruleT.overview.lightingTraining}</strong>
                    <span className="text-zinc-500 text-[11px]">750 to 900 lux</span>
                  </div>
                  <div className="p-3 rounded-lg bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-0.5">
                    <strong className="text-zinc-900 dark:text-white block font-bold">{ruleT.overview.tempTitle}</strong>
                    <span className="text-zinc-500 text-[11px]">17°C to 24°C strictly</span>
                  </div>
                  <div className="p-3 rounded-lg bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-0.5">
                    <strong className="text-zinc-900 dark:text-white block font-bold">{ruleT.overview.humidityTitle}</strong>
                    <span className="text-zinc-500 text-[11px]">40% to 60%</span>
                  </div>
                </div>
              </div>

              {/* Eligibility, 36-Month Nationality Transfer & Equipment Rules */}
              <div className="grid sm:grid-cols-2 gap-6">
                {/* Athlete Eligibility */}
                <div className="p-6 rounded-[14px] bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-md space-y-3">
                  <div className="flex items-center justify-between">
                    <h4 className="text-base font-black uppercase text-zinc-900 dark:text-white tracking-tight">
                      {eligibilityAndGear.eligibilityTitle}
                    </h4>
                    <span className="text-[10px] font-mono text-brand-red font-bold">{eligibilityAndGear.eligibilityBadge}</span>
                  </div>
                  <ul className="space-y-2 text-xs text-zinc-600 dark:text-zinc-400 font-light list-disc pl-4 leading-relaxed">
                    {eligibilityAndGear.eligibilityItems.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>

                {/* Uniform & Safety Equipment */}
                <div className="p-6 rounded-[14px] bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-md space-y-3">
                  <div className="flex items-center justify-between">
                    <h4 className="text-base font-black uppercase text-zinc-900 dark:text-white tracking-tight">
                      {eligibilityAndGear.gearTitle}
                    </h4>
                    <span className="text-[10px] font-mono text-emerald-500 font-bold">{eligibilityAndGear.gearBadge}</span>
                  </div>
                  <ul className="space-y-2 text-xs text-zinc-600 dark:text-zinc-400 font-light list-disc pl-4 leading-relaxed">
                    {eligibilityAndGear.gearItems.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* OCTAGON (OLYMPIC) VS SQUARE (CLUB) TACTICAL COMPARISON */}
              <div className="p-6 sm:p-8 rounded-[14px] bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-md space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <h4 className="text-base font-black uppercase text-zinc-900 dark:text-white tracking-tight">
                      {ringDynamics.octagonTitle} vs {ringDynamics.squareTitle}
                    </h4>
                    <span className="text-xs text-zinc-500 font-light">
                      {ringDynamics.octagonDescription}
                    </span>
                  </div>
                  <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold bg-purple-500/10 text-purple-500 uppercase self-start sm:self-auto">
                    {ruleT.previewBadge}
                  </span>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 text-xs font-mono">
                  {/* Octagon Shape */}
                  <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-2">
                    <div className="flex items-center justify-between">
                      <strong className="text-brand-red uppercase font-bold text-xs">{ringDynamics.octagonTitle}</strong>
                      <span className="px-2 py-0.5 rounded bg-brand-red/10 text-brand-red text-[10px] font-bold">{ringDynamics.octagonSubtitle}</span>
                    </div>
                    <p className="text-zinc-600 dark:text-zinc-400 font-light text-[11px] leading-relaxed">
                      {ringDynamics.octagonDescription}
                    </p>
                    <div className="space-y-1 text-zinc-500 text-[11px]">
                      {ringDynamics.octagonPoints.map((pt, idx) => (
                        <div key={idx}>&bull; {pt}</div>
                      ))}
                    </div>
                  </div>

                  {/* Square Shape */}
                  <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-2">
                    <div className="flex items-center justify-between">
                      <strong className="text-blue-500 uppercase font-bold text-xs">{ringDynamics.squareTitle}</strong>
                      <span className="px-2 py-0.5 rounded bg-blue-500/10 text-blue-500 text-[10px] font-bold">{ringDynamics.squareSubtitle}</span>
                    </div>
                    <p className="text-zinc-600 dark:text-zinc-400 font-light text-[11px] leading-relaxed">
                      {ringDynamics.squareDescription}
                    </p>
                    <div className="space-y-1 text-zinc-500 text-[11px]">
                      {ringDynamics.squarePoints.map((pt, idx) => (
                        <div key={idx}>&bull; {pt}</div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* FIELD OFFICIALS & MATCH PERSONNEL ROLES */}
              <div className="p-6 sm:p-8 rounded-[14px] bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-md space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-emerald-500" />
                    <h4 className="text-base font-black uppercase text-zinc-900 dark:text-white tracking-tight">
                      {ruleT.overview.officialsTitle}
                    </h4>
                  </div>
                  <span className="text-xs font-mono text-zinc-400">{ruleT.overview.officialsDesc}</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 text-xs font-mono">
                  {officials.map((off, idx) => (
                    <div key={idx} className="p-3.5 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-1">
                      <strong className={`${off.color} block font-bold text-xs`}>{off.title}</strong>
                      <span className="text-zinc-500 text-[11px] font-light leading-relaxed block">
                        {off.description}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* OFFICIAL REFEREE COMMANDS, HAND SIGNALS & COUNTING MECHANICS */}
              <div className="p-6 sm:p-8 rounded-[14px] bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-md space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <Megaphone className="w-5 h-5 text-brand-red" />
                    <h4 className="text-base sm:text-lg font-black uppercase text-zinc-900 dark:text-white tracking-tight">
                      {ruleT.overview.signalsTitle}
                    </h4>
                  </div>
                  <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold bg-brand-red/10 text-brand-red uppercase self-start sm:self-auto">
                    {ruleT.overview.signalsSub}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-xs font-mono">
                  {refereeSignals.map((sig, idx) => (
                    <div key={idx} className="p-3.5 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-1.5">
                      <div className="flex justify-between items-center">
                        <strong className="text-zinc-900 dark:text-white text-xs">{sig.command}</strong>
                        <span className="text-[10px] text-zinc-500 font-bold">{sig.korean}</span>
                      </div>
                      <div className="text-[11px] text-zinc-500 font-light space-y-0.5">
                        <div><strong>Meaning:</strong> {sig.meaning}</div>
                        <div><strong>Signal:</strong> {sig.signal}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ================================================================ */}
          {/* SUB-SECTION 2: WEIGHT DIVISIONS & CADET HEIGHT EXPLORER */}
          {/* ================================================================ */}
          {kyorugiSubCategory === 'divisions' && (
            <div className="space-y-6 animate-fade-in">
              {/* Senior 8-Category vs 6-Category Matrix */}
              <div className="p-6 sm:p-8 rounded-[14px] bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-md space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <h4 className="text-base sm:text-lg font-black uppercase text-zinc-900 dark:text-white tracking-tight">
                      {ruleT.divisions.worldSenior}
                    </h4>
                    <span className="text-xs text-zinc-500 font-light">
                      {ruleT.divisions.sub}
                    </span>
                  </div>
                  <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold bg-blue-500/10 text-blue-500 uppercase">
                    WT Article 4 &amp; 5
                  </span>
                </div>

                <div className="overflow-x-auto rounded-xl border border-zinc-200 dark:border-zinc-800">
                  <table className="w-full text-left border-collapse text-xs">
                    <thead>
                      <tr className="bg-zinc-100 dark:bg-zinc-800/90 text-zinc-900 dark:text-white font-mono uppercase text-[11px]">
                        <th className="p-3 text-brand-red">{ruleT.divisions.worldSenior} (Men)</th>
                        <th className="p-3 text-purple-500">{ruleT.divisions.worldSenior} (Women)</th>
                        <th className="p-3 text-blue-500">6-Cat (Men)</th>
                        <th className="p-3 text-emerald-500">6-Cat (Women)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800/60 font-mono text-[11px]">
                      <tr className="hover:bg-zinc-50 dark:hover:bg-zinc-800/40">
                        <td className="p-2.5">Under 54 kg (&le; 54.0 kg)</td>
                        <td className="p-2.5">Under 46 kg (&le; 46.0 kg)</td>
                        <td className="p-2.5">Under 54 kg (&le; 54.0 kg)</td>
                        <td className="p-2.5">Under 46 kg (&le; 46.0 kg)</td>
                      </tr>
                      <tr className="hover:bg-zinc-50 dark:hover:bg-zinc-800/40">
                        <td className="p-2.5">Under 58 kg (54.1–58.0 kg)</td>
                        <td className="p-2.5">Under 49 kg (46.1–49.0 kg)</td>
                        <td className="p-2.5">Under 60 kg (54.1–60.0 kg)</td>
                        <td className="p-2.5">Under 51 kg (46.1–51.0 kg)</td>
                      </tr>
                      <tr className="hover:bg-zinc-50 dark:hover:bg-zinc-800/40">
                        <td className="p-2.5">Under 63 kg (58.1–63.0 kg)</td>
                        <td className="p-2.5">Under 53 kg (49.1–53.0 kg)</td>
                        <td className="p-2.5">Under 67 kg (60.1–67.0 kg)</td>
                        <td className="p-2.5">Under 57 kg (51.1–57.0 kg)</td>
                      </tr>
                      <tr className="hover:bg-zinc-50 dark:hover:bg-zinc-800/40">
                        <td className="p-2.5">Under 68 kg (63.1–68.0 kg)</td>
                        <td className="p-2.5">Under 57 kg (53.1–57.0 kg)</td>
                        <td className="p-2.5">Under 74 kg (67.1–74.0 kg)</td>
                        <td className="p-2.5">Under 63 kg (57.1–63.0 kg)</td>
                      </tr>
                      <tr className="hover:bg-zinc-50 dark:hover:bg-zinc-800/40">
                        <td className="p-2.5">Under 74 kg (68.1–74.0 kg)</td>
                        <td className="p-2.5">Under 62 kg (57.1–62.0 kg)</td>
                        <td className="p-2.5">Under 82 kg (74.1–82.0 kg)</td>
                        <td className="p-2.5">Under 70 kg (63.1–70.0 kg)</td>
                      </tr>
                      <tr className="hover:bg-zinc-50 dark:hover:bg-zinc-800/40">
                        <td className="p-2.5">Under 80 kg (74.1–80.0 kg)</td>
                        <td className="p-2.5">Under 67 kg (62.1–67.0 kg)</td>
                        <td className="p-2.5 font-bold text-blue-400">Over 82 kg (&gt; 82.0 kg)</td>
                        <td className="p-2.5 font-bold text-emerald-400">Over 70 kg (&gt; 70.0 kg)</td>
                      </tr>
                      <tr className="hover:bg-zinc-50 dark:hover:bg-zinc-800/40">
                        <td className="p-2.5">Under 87 kg (80.1–87.0 kg)</td>
                        <td className="p-2.5">Under 73 kg (67.1–73.0 kg)</td>
                        <td className="p-2.5 text-zinc-400">—</td>
                        <td className="p-2.5 text-zinc-400">—</td>
                      </tr>
                      <tr className="hover:bg-zinc-50 dark:hover:bg-zinc-800/40">
                        <td className="p-2.5 font-bold text-brand-red">Over 87 kg (&gt; 87.0 kg)</td>
                        <td className="p-2.5 font-bold text-purple-400">Over 73 kg (&gt; 73.0 kg)</td>
                        <td className="p-2.5 text-zinc-400">—</td>
                        <td className="p-2.5 text-zinc-400">—</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Olympic & Youth Olympic Divisions */}
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="p-6 rounded-[14px] bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-md space-y-3">
                  <h4 className="text-base font-black uppercase text-zinc-900 dark:text-white tracking-tight">
                    {ruleT.divisions.olympicMen} &amp; {ruleT.divisions.olympicWomen}
                  </h4>
                  <div className="grid grid-cols-2 gap-3 text-xs font-mono">
                    <div className="p-3 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-1">
                      <strong className="text-brand-red block font-bold">{ruleT.divisions.olympicMen}:</strong>
                      <div>&bull; Under 58 kg (&le; 58.0 kg)</div>
                      <div>&bull; Under 68 kg (58.1–68.0 kg)</div>
                      <div>&bull; Under 80 kg (68.1–80.0 kg)</div>
                      <div>&bull; Over 80 kg (&gt; 80.0 kg)</div>
                    </div>
                    <div className="p-3 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-1">
                      <strong className="text-purple-500 block font-bold">{ruleT.divisions.olympicWomen}:</strong>
                      <div>&bull; Under 49 kg (&le; 49.0 kg)</div>
                      <div>&bull; Under 57 kg (49.1–57.0 kg)</div>
                      <div>&bull; Under 67 kg (57.1–67.0 kg)</div>
                      <div>&bull; Over 67 kg (&gt; 67.0 kg)</div>
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-[14px] bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-md space-y-3">
                  <h4 className="text-base font-black uppercase text-zinc-900 dark:text-white tracking-tight">
                    {ruleT.mindmap.title}
                  </h4>
                  <div className="space-y-1.5 text-xs font-mono">
                    <div className="p-2.5 rounded-lg bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 flex justify-between">
                      <strong className="text-zinc-900 dark:text-white">Male Pair / Team (3):</strong>
                      <span className="text-brand-red font-bold">&le; 160 kg (Pair) / 240 kg (3)</span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 flex justify-between">
                      <strong className="text-zinc-900 dark:text-white">Female Pair / Team (3):</strong>
                      <span className="text-purple-500 font-bold">&le; 135 kg (Pair) / 200 kg (3)</span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 flex justify-between">
                      <strong className="text-zinc-900 dark:text-white">Mixed Team (4: 2M + 2F):</strong>
                      <span className="text-emerald-500 font-bold">2F &le; 135kg &bull; 2M &le; 160kg</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* CADET HEIGHT CATEGORIES WITH MANDATORY MIN/MAX WEIGHT LIMITS */}
              <div className="p-6 sm:p-8 rounded-[14px] bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-md space-y-5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <h4 className="text-base sm:text-lg font-black uppercase text-zinc-900 dark:text-white tracking-tight">
                      {ruleT.divisions.cadetTitle}
                    </h4>
                    <span className="text-xs text-zinc-500 font-light">
                      {ruleT.divisions.cadetSub}
                    </span>
                  </div>

                  {/* Gender Toggle */}
                  <div className="p-1 rounded-xl bg-zinc-100 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 flex items-center gap-1 self-start sm:self-auto">
                    <button
                      onClick={() => setSelectedCadetGender('Male')}
                      className={`px-3 py-1 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
                        selectedCadetGender === 'Male'
                          ? 'bg-brand-red text-white shadow-sm'
                          : 'text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white'
                      }`}
                    >
                      {ruleT.divisions.btnCadetBoys}
                    </button>
                    <button
                      onClick={() => setSelectedCadetGender('Female')}
                      className={`px-3 py-1 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
                        selectedCadetGender === 'Female'
                          ? 'bg-purple-600 text-white shadow-sm'
                        : 'text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white'
                      }`}
                    >
                      {ruleT.divisions.btnCadetGirls}
                    </button>
                  </div>
                </div>

                <div className="overflow-x-auto rounded-xl border border-zinc-200 dark:border-zinc-800">
                  <table className="w-full text-left border-collapse text-xs">
                    <thead>
                      <tr className="bg-zinc-100 dark:bg-zinc-800/90 text-zinc-900 dark:text-white font-mono uppercase text-[11px]">
                        <th className="p-3">{ruleT.divisions.colHeight}</th>
                        <th className="p-3 text-emerald-500">{ruleT.divisions.colMinWeight}</th>
                        <th className="p-3 text-brand-red">{ruleT.divisions.colMaxWeight}</th>
                        <th className="p-3">Safety Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800/60 font-mono">
                      {cadetHeightWeightLimits
                        .filter((c) => c.gender === selectedCadetGender)
                        .map((ch, idx) => (
                          <tr key={idx} className="hover:bg-zinc-50 dark:hover:bg-zinc-800/40">
                            <td className="p-3 font-bold text-zinc-900 dark:text-white">{ch.heightClass}</td>
                            <td className="p-3 text-emerald-600 dark:text-emerald-400 font-bold">{ch.minWeight}</td>
                            <td className="p-3 text-brand-red font-bold">{ch.maxWeight}</td>
                            <td className="p-3 text-[11px] text-zinc-500">WT Certified Safe Weight Range</td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Weigh-in Protocols & Random Rates */}
              <div className="p-6 sm:p-8 rounded-[14px] bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-md space-y-4">
                <h4 className="text-base font-black uppercase text-zinc-900 dark:text-white tracking-tight">
                  Weigh-in Protocol, Random Selection &amp; Tolerances (Article 9)
                </h4>
                <div className="grid sm:grid-cols-3 gap-4 text-xs font-mono">
                  <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-1.5">
                    <strong className="text-zinc-900 dark:text-white block font-bold">General Weigh-in:</strong>
                    <span className="text-zinc-500 font-light block">
                      1 day prior to competition (max 2 hours). 1 additional attempt granted within the official period.
                    </span>
                  </div>
                  <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-1.5">
                    <strong className="text-zinc-900 dark:text-white block font-bold">Random Weigh-in (+5%):</strong>
                    <span className="text-zinc-500 font-light block">
                      Morning of competition (ends 30m prior). <strong>+5% weight tolerance</strong> allowed above division limit.
                    </span>
                  </div>
                  <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-1.5">
                    <strong className="text-zinc-900 dark:text-white block font-bold">Underwear Allowance:</strong>
                    <span className="text-zinc-500 font-light block">
                      Cadet &amp; Junior athletes must wear underwear and receive a <strong>100g compensation allowance</strong>.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ================================================================ */}
          {/* SUB-SECTION 3: SCORING VALUES & GAM-JEOM MATRIX */}
          {/* ================================================================ */}
          {kyorugiSubCategory === 'scoring' && (
            <div className="space-y-6 animate-fade-in">
              {/* BEST-OF-3 SYSTEM CORE FRAMEWORK & POINT GAP (PTG) CARD */}
              <div className="p-6 sm:p-8 rounded-[14px] bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-md space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <Flame className="w-5 h-5 text-brand-red" />
                    <h3 className="text-lg sm:text-xl font-black uppercase text-zinc-900 dark:text-white tracking-tight">
                      {ruleT.scoring.bestOf3Title}
                    </h3>
                  </div>
                  <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold bg-brand-red text-white uppercase self-start sm:self-auto">
                    {ruleT.scoring.bestOf3Badge}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 font-light leading-relaxed">
                  {ruleT.scoring.bestOf3Desc}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs font-mono">
                  <div className="p-3.5 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-1">
                    <strong className="text-brand-red block font-bold text-xs">Match Structure:</strong>
                    <span className="text-zinc-500 text-[11px] font-light leading-relaxed block">
                      Best 2 out of 3 rounds. Each round is <strong>2 minutes</strong> with a 1-minute rest interval between rounds.
                    </span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-1">
                    <strong className="text-blue-500 block font-bold text-xs">Round &amp; Match Winner:</strong>
                    <span className="text-zinc-500 text-[11px] font-light leading-relaxed block">
                      Most points scored in a round wins that round. The <strong>first fighter to win 2 rounds</strong> wins the match.
                    </span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-1">
                    <strong className="text-amber-500 block font-bold text-xs">{ruleT.scoring.pointGapTitle}:</strong>
                    <span className="text-zinc-500 text-[11px] font-light leading-relaxed block">
                      {ruleT.scoring.pointGapDesc}
                    </span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-1">
                    <strong className="text-purple-500 block font-bold text-xs">Penalty Cap (PUN):</strong>
                    <span className="text-zinc-500 text-[11px] font-light leading-relaxed block">
                      Accumulating <strong>5 Gam-Jeoms in a single round</strong> triggers an immediate round loss by punitive declaration.
                    </span>
                  </div>
                </div>
              </div>

              {/* Point Scoring Values Matrix Table with Scoring Mechanisms */}
              <div className="p-6 sm:p-8 rounded-[14px] bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-md space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-brand-red" />
                    <h4 className="text-base sm:text-lg font-black uppercase text-zinc-900 dark:text-white tracking-tight">
                      {ruleT.scoring.pointsTitle}
                    </h4>
                  </div>
                  <span className="text-[10px] font-mono text-zinc-400 uppercase">Daedo &bull; KP&amp;P Electronic System</span>
                </div>

                <div className="overflow-x-auto rounded-xl border border-zinc-200 dark:border-zinc-800">
                  <table className="w-full text-left border-collapse text-xs">
                    <thead>
                      <tr className="bg-zinc-100 dark:bg-zinc-800/90 text-zinc-900 dark:text-white font-mono uppercase text-[11px]">
                        <th className="p-3.5">{ruleT.scoring.colTechnique}</th>
                        <th className="p-3.5 text-center">{ruleT.scoring.colPoints}</th>
                        <th className="p-3.5">{ruleT.scoring.colTarget}</th>
                        <th className="p-3.5">{ruleT.scoring.colBonus}</th>
                        <th className="p-3.5">{ruleT.scoring.colDesc}</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800/60 font-light">
                      {pointValues.map((pv, idx) => (
                        <tr key={idx} className="hover:bg-zinc-50 dark:hover:bg-zinc-800/40">
                          <td className="p-3.5 font-bold text-zinc-900 dark:text-white">{pv.technique}</td>
                          <td className="p-3.5 font-mono font-black text-brand-red text-center whitespace-nowrap">{pv.points}</td>
                          <td className="p-3.5 text-blue-600 dark:text-blue-400 font-mono text-[11px]">{pv.target}</td>
                          <td className="p-3.5 font-mono text-emerald-500 font-bold">{pv.bonus}</td>
                          <td className="p-3.5 text-zinc-500 dark:text-zinc-400">{pv.description}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-700 dark:text-amber-300 text-xs font-mono">
                  * <strong>Back Kick (Dwichagi) Requirement:</strong> Must involve simultaneous rotation of head and shoulder to be validated as a turning kick for technical bonus points.
                </div>

                {/* Hand Techniques & Scoring Boundary Rules Card */}
                <div className="grid sm:grid-cols-2 gap-4 text-xs font-mono pt-2">
                  <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-1.5">
                    <strong className="text-brand-red font-bold uppercase block text-xs">
                      1. Legal Hand Techniques Limitation
                    </strong>
                    <p className="text-zinc-600 dark:text-zinc-400 font-light text-[11px] leading-relaxed">
                      In official WT competitive sparring, the <strong>only permitted hand technique that can score is a straight punch (Momtong Jireugi) to the trunk protector (Hogu)</strong>.
                    </p>
                    <span className="text-[10px] text-zinc-500 block">
                      &bull; Prohibited: Any hand strikes to the face/head, backfists, knifehand strikes, or palm presses.
                    </span>
                  </div>

                  <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-1.5">
                    <strong className="text-blue-500 font-bold uppercase block text-xs">
                      2. Historical Context: Kyong-go vs Gam-jeom
                    </strong>
                    <p className="text-zinc-600 dark:text-zinc-400 font-light text-[11px] leading-relaxed">
                      Historically, a <em>Kyong-go</em> (half-point warning) was assessed before a <em>Gam-jeom</em>. Modern WT rules have abolished Kyong-go in favor of direct <strong>Gam-jeom (+1 point to opponent)</strong> for all fouls.
                    </p>
                    <span className="text-[10px] text-zinc-500 block">
                      &bull; Club Note: Novice/grassroots club tournaments occasionally retain warning notices for younger divisions.
                    </span>
                  </div>
                </div>
              </div>

              {/* Best-of-3 Format, Tie-Breakers & Judge Thresholds */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                <div className="lg:col-span-5 p-6 rounded-[14px] bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-md space-y-4">
                  <span className="text-xs font-mono font-bold uppercase text-brand-red block">
                    {ruleT.scoring.tieBreakTitle}
                  </span>
                  <p className="text-xs text-zinc-600 dark:text-zinc-300 font-light leading-relaxed">
                    If a round ends in an equal score, the round winner is determined strictly by the following criteria in order:
                  </p>
                  
                  <div className="p-3.5 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-2 text-xs font-mono">
                    <ol className="space-y-1 text-zinc-600 dark:text-zinc-400 font-light list-decimal pl-4">
                      <li>{ruleT.scoring.tieBreak1}</li>
                      <li>{ruleT.scoring.tieBreak2}</li>
                      <li>{ruleT.scoring.tieBreak3}</li>
                      <li>{ruleT.scoring.tieBreak4}</li>
                    </ol>
                  </div>

                  <div className="p-3.5 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-mono">
                    <strong>Corner Judge Confirmation Thresholds:</strong><br />
                    &bull; 3 Corner Judges: Min 2 must confirm.<br />
                    &bull; 2 Corner Judges: Both 2 must confirm.<br />
                    &bull; 1 Corner Judge: Permitted with sensing gloves.
                  </div>
                </div>

                <div className="lg:col-span-7 p-6 rounded-[14px] bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-md space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold uppercase text-amber-500 block">
                      {ruleT.scoring.gamjeomTitle}
                    </span>
                    <span className="text-[10px] font-mono text-brand-red font-bold">5 Gam-Jeoms = Round Loss</span>
                  </div>

                  <div className="overflow-x-auto rounded-xl border border-zinc-200 dark:border-zinc-800 max-h-96 overflow-y-auto">
                    <table className="w-full text-left border-collapse text-xs">
                      <thead className="sticky top-0 bg-zinc-100 dark:bg-zinc-800">
                        <tr className="text-zinc-900 dark:text-white font-mono uppercase text-[10px]">
                          <th className="p-2.5">{ruleT.scoring.colCode}</th>
                          <th className="p-2.5">{ruleT.scoring.colInfraction}</th>
                          <th className="p-2.5">{ruleT.scoring.colPenalty}</th>
                          <th className="p-2.5">{ruleT.scoring.colExplanation}</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800/60 font-light">
                        {gamjeomRules.map((g, idx) => (
                          <tr key={idx} className="hover:bg-zinc-50 dark:hover:bg-zinc-800/40">
                            <td className="p-2.5 font-mono font-bold text-zinc-500">{g.code}</td>
                            <td className="p-2.5 font-bold text-zinc-900 dark:text-white">{g.infraction}</td>
                            <td className="p-2.5 font-mono text-amber-500 font-bold whitespace-nowrap">{g.penalty}</td>
                            <td className="p-2.5 text-zinc-500">{g.explanation}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              {/* Categorized Prohibited Acts Breakdown */}
              <div className="p-6 sm:p-8 rounded-[14px] bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-md space-y-4">
                <h4 className="text-base font-black uppercase text-zinc-900 dark:text-white tracking-tight">
                  {ruleT.scoring.gamjeomTitle}
                </h4>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 text-xs font-mono">
                  {prohibitedCategories.map((cat, idx) => (
                    <div key={idx} className="p-3.5 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-1">
                      <strong className={`${cat.color} block font-bold text-xs`}>{cat.title}</strong>
                      <span className="text-zinc-500 text-[11px] font-light leading-relaxed block">
                        {cat.description}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ================================================================ */}
          {/* SUB-SECTION 4: SAFETY, CONCUSSIONS, IVR & TEAM HEALTH BAR */}
          {/* ================================================================ */}
          {kyorugiSubCategory === 'safety' && (
            <div className="space-y-6 animate-fade-in">
              {/* Concussion Safety & Mandatory Suspensions */}
              <div className="p-6 sm:p-8 rounded-[14px] bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-md space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Shield className="w-5 h-5 text-brand-red" />
                    <h3 className="text-lg sm:text-xl font-black uppercase text-zinc-900 dark:text-white tracking-tight">
                      Knock Down, Concussion Protocols &amp; Mandatory Suspensions (Articles 17–18)
                    </h3>
                  </div>
                  <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold bg-brand-red text-white uppercase">
                    Mandatory SCAT5 Protocol
                  </span>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 text-xs font-mono">
                  <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-2">
                    <strong className="text-zinc-900 dark:text-white block font-bold uppercase text-xs">
                      1. Knock Down Mandatory 8-Count
                    </strong>
                    <p className="text-zinc-600 dark:text-zinc-400 font-light leading-relaxed">
                      Center referee counts aloud from &quot;Ha-nah&quot; (1) to &quot;Yeol&quot; (10). The count <strong>must reach &quot;Yeo-dul&quot; (8)</strong> before resuming match, even if the athlete indicates readiness earlier.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-2">
                    <strong className="text-zinc-900 dark:text-white block font-bold uppercase text-xs">
                      2. Retrospective Video Review
                    </strong>
                    <p className="text-zinc-600 dark:text-zinc-400 font-light leading-relaxed">
                      WT Medical Committee may retrospectively review head injury footage within <strong>30 days</strong> and override on-site medical decisions to enforce mandatory suspension periods.
                    </p>
                  </div>
                </div>

                {/* Non-Reducible Suspension Table */}
                <div className="overflow-x-auto rounded-xl border border-zinc-200 dark:border-zinc-800">
                  <table className="w-full text-left border-collapse text-xs">
                    <thead>
                      <tr className="bg-zinc-100 dark:bg-zinc-800/90 text-zinc-900 dark:text-white font-mono uppercase text-[11px]">
                        <th className="p-3">Division / Occurrence</th>
                        <th className="p-3 text-brand-red">Mandatory Non-Reducible Suspension</th>
                        <th className="p-3">Return to Play Conditions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800/60 font-mono">
                      <tr className="hover:bg-zinc-50 dark:hover:bg-zinc-800/40">
                        <td className="p-3 font-bold text-zinc-900 dark:text-white">Senior Contestants</td>
                        <td className="p-3 text-brand-red font-bold">30 Days Mandatory Suspension</td>
                        <td className="p-3 text-zinc-500">Cannot be shortened by any medical appeal</td>
                      </tr>
                      <tr className="hover:bg-zinc-50 dark:hover:bg-zinc-800/40">
                        <td className="p-3 font-bold text-zinc-900 dark:text-white">Junior Contestants</td>
                        <td className="p-3 text-brand-red font-bold">40 Days Mandatory Suspension</td>
                        <td className="p-3 text-zinc-500">Cannot be shortened by any medical appeal</td>
                      </tr>
                      <tr className="hover:bg-zinc-50 dark:hover:bg-zinc-800/40">
                        <td className="p-3 font-bold text-zinc-900 dark:text-white">Cadet Contestants</td>
                        <td className="p-3 text-brand-red font-bold">50 Days Mandatory Suspension</td>
                        <td className="p-3 text-zinc-500">Cannot be shortened by any medical appeal</td>
                      </tr>
                      <tr className="hover:bg-zinc-50 dark:hover:bg-zinc-800/40">
                        <td className="p-3 font-bold text-zinc-900 dark:text-white">2nd Concussion within 90 Days</td>
                        <td className="p-3 text-purple-500 font-bold">90 Days Mandatory Suspension</td>
                        <td className="p-3 text-zinc-500">Requires comprehensive neurological clearance</td>
                      </tr>
                      <tr className="hover:bg-zinc-50 dark:hover:bg-zinc-800/40">
                        <td className="p-3 font-bold text-zinc-900 dark:text-white">3rd Concussion within 180 Days</td>
                        <td className="p-3 text-purple-500 font-bold">180 Days Mandatory Suspension</td>
                        <td className="p-3 text-zinc-500">Full medical committee review required</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* THE YELLOW CARD PROTOCOL & SANCTION REQUEST TO CSB */}
              <div className="p-6 sm:p-8 rounded-[14px] bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-md space-y-5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <Flag className="w-5 h-5 text-amber-500" />
                    <h4 className="text-base sm:text-lg font-black uppercase text-zinc-900 dark:text-white tracking-tight">
                      The Yellow Card Protocol &amp; Sanction Request Hierarchy
                    </h4>
                  </div>
                  <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold bg-amber-500/10 text-amber-500 uppercase self-start sm:self-auto">
                    CSB Disciplinary Mechanism
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 font-light leading-relaxed">
                  In World Taekwondo (WT) Kyorugi, the <strong>Yellow Card is not a simple warning</strong>; it is a formal <strong>Sanction Request</strong> raised by the center referee to the Competition Supervisory Board (CSB) and Technical Delegate for severe or repeated coach misconduct.
                </p>

                {/* Yellow Card Immediate Impact Callout */}
                <div className="grid sm:grid-cols-2 gap-3 text-xs font-mono">
                  <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/20 space-y-1">
                    <strong className="text-amber-600 dark:text-amber-400 block font-bold">1. Immediate Match Impact:</strong>
                    <span className="text-zinc-600 dark:text-zinc-400 text-[11px] font-light leading-relaxed">
                      The coach&apos;s athlete receives a <strong>Gam-Jeom</strong> penalty point awarded to the opponent under Article 14 (Misconduct).
                    </span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-purple-500/10 border border-purple-500/20 space-y-1">
                    <strong className="text-purple-600 dark:text-purple-400 block font-bold">2. CSB Disciplinary Review:</strong>
                    <span className="text-zinc-600 dark:text-zinc-400 text-[11px] font-light leading-relaxed">
                      The CSB records the infraction, investigates with video feeds, and determines on-site or post-match sanctions.
                    </span>
                  </div>
                </div>

                {/* 5-Level Escalating Penalty Hierarchy Table */}
                <div className="overflow-x-auto rounded-xl border border-zinc-200 dark:border-zinc-800">
                  <table className="w-full text-left border-collapse text-xs">
                    <thead>
                      <tr className="bg-zinc-100 dark:bg-zinc-800/90 text-zinc-900 dark:text-white font-mono uppercase text-[10px]">
                        <th className="p-3">Level</th>
                        <th className="p-3">Action / Measure</th>
                        <th className="p-3">Authority</th>
                        <th className="p-3 text-brand-red">Consequence</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800/60 font-mono text-[11px]">
                      <tr className="hover:bg-zinc-50 dark:hover:bg-zinc-800/40">
                        <td className="p-3 font-bold text-zinc-900 dark:text-white">Level 1</td>
                        <td className="p-3 text-zinc-700 dark:text-zinc-300">Minor Infraction (Verbal / Gam-Jeom)</td>
                        <td className="p-3 text-zinc-500">Center Referee</td>
                        <td className="p-3 text-brand-red">Opponent receives +1 pt; coach remains in box</td>
                      </tr>
                      <tr className="hover:bg-zinc-50 dark:hover:bg-zinc-800/40">
                        <td className="p-3 font-bold text-amber-500">Level 2</td>
                        <td className="p-3 text-zinc-700 dark:text-zinc-300 font-bold">Yellow Card (Sanction Request)</td>
                        <td className="p-3 text-zinc-500">Center Referee &rarr; CSB</td>
                        <td className="p-3 text-brand-red">Opponent +1 pt; CSB opens active disciplinary review</td>
                      </tr>
                      <tr className="hover:bg-zinc-50 dark:hover:bg-zinc-800/40">
                        <td className="p-3 font-bold text-purple-500">Level 3</td>
                        <td className="p-3 text-zinc-700 dark:text-zinc-300">Ejection from FOP (Revocation)</td>
                        <td className="p-3 text-zinc-500">CSB / Technical Delegate</td>
                        <td className="p-3 text-brand-red">Coach expelled from FOP; athlete must compete uncoached</td>
                      </tr>
                      <tr className="hover:bg-zinc-50 dark:hover:bg-zinc-800/40">
                        <td className="p-3 font-bold text-brand-red">Level 4</td>
                        <td className="p-3 text-zinc-700 dark:text-zinc-300 font-bold">Match Disqualification (DQB)</td>
                        <td className="p-3 text-zinc-500">Referee &amp; CSB</td>
                        <td className="p-3 text-brand-red font-bold">Athlete loses by DQB; all results/points nullified</td>
                      </tr>
                      <tr className="hover:bg-zinc-50 dark:hover:bg-zinc-800/40">
                        <td className="p-3 font-bold text-rose-600">Level 5</td>
                        <td className="p-3 text-zinc-700 dark:text-zinc-300">Post-Event Sanctions &amp; Fines</td>
                        <td className="p-3 text-zinc-500">WT Disciplinary Committee</td>
                        <td className="p-3 text-rose-600 font-bold">GAL license suspension (months/years) + $100–$5,000 fine</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Specific Grounds for Yellow Card & DQB */}
                <div className="grid sm:grid-cols-2 gap-4 text-xs font-mono">
                  <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-2">
                    <strong className="text-amber-500 block font-bold text-xs uppercase">
                      Yellow Card Triggers (Formal Sanction Requests)
                    </strong>
                    <ul className="space-y-1 text-zinc-600 dark:text-zinc-400 font-light text-[11px] list-disc pl-4 leading-relaxed">
                      <li><strong>Aggressive Dissent:</strong> Shouting profanities, obscene gestures, or disparaging officials.</li>
                      <li><strong>Refusal to Comply:</strong> Disregarding referee order to return to coach box or cease disruptions.</li>
                      <li><strong>Disrupting Match:</strong> Throwing objects, kicking boundary boards, or delaying restart.</li>
                      <li><strong>Interfering with Opponents:</strong> Provoking, taunting, or physically approaching opponents.</li>
                      <li><strong>Protesting Final IVR:</strong> Continuing to argue after Review Jury delivers verdict.</li>
                    </ul>
                  </div>

                  <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-2">
                    <strong className="text-brand-red block font-bold text-xs uppercase">
                      Grounds for Disqualification for Unsportsmanlike Behavior (DQB)
                    </strong>
                    <ul className="space-y-1 text-zinc-600 dark:text-zinc-400 font-light text-[11px] list-disc pl-4 leading-relaxed">
                      <li><strong>Physical Assault / Violence:</strong> Attempting to strike or push match officials or corner staff.</li>
                      <li><strong>Electronic PSS Tampering:</strong> Jamming, shielding, or tampering with transmitters/sensors.</li>
                      <li><strong>Field-of-Play Invasion:</strong> Stepping onto contest mat during active combat to disrupt scoring.</li>
                      <li><strong>Collusion / Match Fixing:</strong> Explicit attempts to influence outcomes through illicit deals.</li>
                      <li><strong>Gross Misconduct:</strong> Severe discriminatory, racist, or abusive behavior in venue.</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* INSTANT VIDEO REPLAY (IVR) MASTER SYSTEM */}
              <div className="p-6 sm:p-8 rounded-[14px] bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-md space-y-5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <Camera className="w-5 h-5 text-blue-500" />
                    <h4 className="text-base sm:text-lg font-black uppercase text-zinc-900 dark:text-white tracking-tight">
                      Instant Video Replay (IVR) System &amp; Review Jury Protocols
                    </h4>
                  </div>
                  <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold bg-blue-500/10 text-blue-500 uppercase self-start sm:self-auto">
                    Article 21 Specifications
                  </span>
                </div>

                {/* Coach Quota & Card Management */}
                <div className="grid sm:grid-cols-4 gap-2.5 text-xs font-mono">
                  <div className="p-3 rounded-lg bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-0.5">
                    <strong className="text-zinc-900 dark:text-white block font-bold">Quota:</strong>
                    <span className="text-zinc-500 text-[11px]">1 challenge card per match</span>
                  </div>
                  <div className="p-3 rounded-lg bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-0.5">
                    <strong className="text-emerald-500 block font-bold">Retention:</strong>
                    <span className="text-zinc-500 text-[11px]">Card kept if appeal accepted</span>
                  </div>
                  <div className="p-3 rounded-lg bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-0.5">
                    <strong className="text-brand-red block font-bold">Forfeiture:</strong>
                    <span className="text-zinc-500 text-[11px]">Card lost if appeal rejected</span>
                  </div>
                  <div className="p-3 rounded-lg bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-0.5">
                    <strong className="text-blue-500 block font-bold">Timing Window:</strong>
                    <span className="text-zinc-500 text-[11px]">Within 5s of incident</span>
                  </div>
                </div>

                {/* Reviewable vs. Non-Reviewable Situations Matrix */}
                <div className="overflow-x-auto rounded-xl border border-zinc-200 dark:border-zinc-800">
                  <table className="w-full text-left border-collapse text-xs">
                    <thead>
                      <tr className="bg-zinc-100 dark:bg-zinc-800/90 text-zinc-900 dark:text-white font-mono uppercase text-[10px]">
                        <th className="p-3">Category</th>
                        <th className="p-3 text-emerald-500">Reviewable via IVR</th>
                        <th className="p-3 text-brand-red">Non-Reviewable (Forbidden)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800/60 font-mono text-[11px]">
                      <tr className="hover:bg-zinc-50 dark:hover:bg-zinc-800/40">
                        <td className="p-3 font-bold text-zinc-900 dark:text-white">Points</td>
                        <td className="p-3 text-zinc-600 dark:text-zinc-300">
                          &bull; Valid head kick that did not register on electronic PSS<br />
                          &bull; Technical turning bonus points (+2 pts) for head/trunk
                        </td>
                        <td className="p-3 text-zinc-500">
                          &bull; Body kicks registering on trunk PSS (sensor threshold is purely electronic)<br />
                          &bull; Punch points awarded or missed by corner judges
                        </td>
                      </tr>
                      <tr className="hover:bg-zinc-50 dark:hover:bg-zinc-800/40">
                        <td className="p-3 font-bold text-zinc-900 dark:text-white">Penalties (Gam-Jeom)</td>
                        <td className="p-3 text-zinc-600 dark:text-zinc-300">
                          &bull; Opponent falling down<br />
                          &bull; Opponent crossing boundary line<br />
                          &bull; Opponent attacking after <em>Kal-yeo</em><br />
                          &bull; Opponent attacking fallen competitor<br />
                          &bull; Removal of incorrect Gam-Jeom issued to own athlete
                        </td>
                        <td className="p-3 text-zinc-500">
                          &bull; Leg-lifting / cut-kick stalling<br />
                          &bull; Pushing infractions (unless directly causing boundary exit)<br />
                          &bull; Clinching / passivity penalties
                        </td>
                      </tr>
                      <tr className="hover:bg-zinc-50 dark:hover:bg-zinc-800/40">
                        <td className="p-3 font-bold text-zinc-900 dark:text-white">System Errors</td>
                        <td className="p-3 text-zinc-600 dark:text-zinc-300">
                          &bull; Invalidation of points scored after a foul occurred<br />
                          &bull; Clock/time-management glitches or mechanical PSS malfunction
                        </td>
                        <td className="p-3 text-zinc-500">
                          &bull; Subjective referee warnings or positioning calls
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Step-by-Step 5-Stage IVR Workflow */}
                <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-3">
                  <strong className="text-zinc-900 dark:text-white block font-bold text-xs uppercase font-mono">
                    Step-by-Step IVR Procedure Workflow
                  </strong>
                  <div className="grid grid-cols-1 sm:grid-cols-5 gap-2 text-xs font-mono">
                    <div className="p-2.5 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 space-y-1">
                      <span className="text-brand-red font-bold block text-[10px]">Step 1</span>
                      <span className="text-zinc-900 dark:text-white font-bold block text-[11px]">Appeal Request</span>
                      <span className="text-zinc-500 text-[10px] block">Coach raises card within 5s</span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 space-y-1">
                      <span className="text-blue-500 font-bold block text-[10px]">Step 2</span>
                      <span className="text-zinc-900 dark:text-white font-bold block text-[11px]">Referee Pause</span>
                      <span className="text-zinc-500 text-[10px] block">Kal-yeo + Shi-gan declared</span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 space-y-1">
                      <span className="text-purple-500 font-bold block text-[10px]">Step 3</span>
                      <span className="text-zinc-900 dark:text-white font-bold block text-[11px]">Transmission</span>
                      <span className="text-zinc-500 text-[10px] block">Signaled to Review Jury desk</span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 space-y-1">
                      <span className="text-amber-500 font-bold block text-[10px]">Step 4</span>
                      <span className="text-zinc-900 dark:text-white font-bold block text-[11px]">Video Review</span>
                      <span className="text-zinc-500 text-[10px] block">3–4 angles, max 60 seconds</span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 space-y-1">
                      <span className="text-emerald-500 font-bold block text-[10px]">Step 5</span>
                      <span className="text-zinc-900 dark:text-white font-bold block text-[11px]">Verdict Delivery</span>
                      <span className="text-zinc-500 text-[10px] block">Accepted (retained) / Rejected</span>
                    </div>
                  </div>
                </div>

                {/* Key IVR Edge Cases */}
                <div className="grid sm:grid-cols-3 gap-3 text-xs font-mono">
                  <div className="p-3.5 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-1">
                    <strong className="text-brand-red block font-bold text-xs">Case 1: Prior Foul Invalidates Strike</strong>
                    <span className="text-zinc-500 text-[11px] font-light leading-relaxed block">
                      If athlete hits head kick but grabbed shoulder immediately prior &rarr; <strong>Head kick denied, Gam-Jeom for grabbing assessed, IVR card lost</strong>.
                    </span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-1">
                    <strong className="text-blue-500 block font-bold text-xs">Case 2: Strike Landed Out of Bounds</strong>
                    <span className="text-zinc-500 text-[11px] font-light leading-relaxed block">
                      If supporting foot stepped out before kick connects &rarr; <strong>Points erased, Gam-Jeom to kicker, challenging coach retains card</strong>.
                    </span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-1">
                    <strong className="text-purple-500 block font-bold text-xs">Case 3: Dual Action Appeal</strong>
                    <span className="text-zinc-500 text-[11px] font-light leading-relaxed block">
                      If appealing both missed points and foul removal &rarr; <strong>Both must be validated to keep card</strong>; if either fails, card is forfeited.
                    </span>
                  </div>
                </div>

                {/* Technical Review Card (Hardware Appeals) */}
                <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-2 text-xs font-mono">
                  <div className="flex items-center justify-between">
                    <h5 className="text-xs font-black uppercase text-zinc-900 dark:text-white">
                      Technical Review Card (Hardware &amp; System Glitch Appeals)
                    </h5>
                    <span className="text-[10px] text-amber-500 font-bold">System Appeals</span>
                  </div>
                  <ul className="space-y-1 text-zinc-600 dark:text-zinc-400 font-light text-[11px] list-disc pl-4 leading-relaxed">
                    <li>Coaches may raise a Technical Card for mechanical timing malfunctions, PSS sensor issues, or operator input errors.</li>
                    <li>If Review Jury confirms <strong>no system fault</strong>, a <strong>Gam-jeom penalty</strong> is assessed against the coach&apos;s athlete.</li>
                    <li>The Technical Card is returned to the coach for reuse regardless of outcome.</li>
                  </ul>
                </div>
              </div>

              {/* WORLD CUP TEAM HEALTH BAR SCORING SIMULATOR (150 HP Initial) */}
              <div className="p-6 sm:p-8 rounded-[14px] bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-md space-y-5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <h4 className="text-base sm:text-lg font-black uppercase text-zinc-900 dark:text-white tracking-tight">
                      {ruleT.safety.simTitle}
                    </h4>
                    <span className="text-xs text-zinc-500 font-light">
                      {ruleT.safety.simSub}
                    </span>
                  </div>

                  <button
                    onClick={() => {
                      setHealthBarChung(150)
                      setHealthBarHong(150)
                      setIsPassiveChung(false)
                      setIsPassiveHong(false)
                    }}
                    className="px-3 py-1.5 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-xs font-mono font-bold flex items-center gap-1.5 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-all cursor-pointer self-start sm:self-auto"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    {ruleT.safety.btnReset}
                  </button>
                </div>

                {/* Passive Alert Banner */}
                {(isPassiveChung || isPassiveHong) && (
                  <div className="p-2.5 rounded-xl bg-amber-500/15 border border-amber-500/40 text-amber-600 dark:text-amber-400 text-xs font-mono font-bold text-center">
                    {ruleT.safety.passiveAlert}
                  </div>
                )}

                {/* Health Bar Displays */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Chung (Blue) Health Bar */}
                  <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/30 space-y-2">
                    <div className="flex justify-between items-center text-xs font-mono font-bold">
                      <span className="text-blue-500 uppercase">{ruleT.safety.chungLabel}</span>
                      <span className="text-blue-400">{healthBarChung} / 150 HP</span>
                    </div>
                    <div className="w-full h-3 rounded-full bg-zinc-950 overflow-hidden">
                      <div
                        className="h-full bg-blue-500 transition-all duration-300 rounded-full"
                        style={{ width: `${Math.max(0, (healthBarChung / 150) * 100)}%` }}
                      />
                    </div>
                    <div className="flex gap-1.5 pt-1">
                      <button
                        onClick={() => setIsPassiveChung(!isPassiveChung)}
                        className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold cursor-pointer transition-all ${
                          isPassiveChung ? 'bg-amber-500 text-black' : 'bg-zinc-800 text-zinc-300'
                        }`}
                      >
                        {ruleT.safety.btnPassive}
                      </button>
                    </div>
                  </div>

                  {/* Hong (Red) Health Bar */}
                  <div className="p-4 rounded-xl bg-brand-red/10 border border-brand-red/30 space-y-2">
                    <div className="flex justify-between items-center text-xs font-mono font-bold">
                      <span className="text-brand-red uppercase">{ruleT.safety.hongLabel}</span>
                      <span className="text-brand-red">{healthBarHong} / 150 HP</span>
                    </div>
                    <div className="w-full h-3 rounded-full bg-zinc-950 overflow-hidden">
                      <div
                        className="h-full bg-brand-red transition-all duration-300 rounded-full"
                        style={{ width: `${Math.max(0, (healthBarHong / 150) * 100)}%` }}
                      />
                    </div>
                    <div className="flex gap-1.5 pt-1">
                      <button
                        onClick={() => setIsPassiveHong(!isPassiveHong)}
                        className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold cursor-pointer transition-all ${
                          isPassiveHong ? 'bg-amber-500 text-black' : 'bg-zinc-800 text-zinc-300'
                        }`}
                      >
                        {ruleT.safety.btnPassive}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Damage Buttons */}
                <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2 text-[11px] font-mono">
                  {kyorugiHealthBarActions.map((hba, idx) => {
                    const dmg = parseInt(hba.deduction.replace(/[^0-9]/g, '')) || 0
                    return (
                      <button
                        key={idx}
                        onClick={() => {
                          if (dmg > 0) {
                            const multChung = isPassiveChung ? 2 : 1
                            setHealthBarChung((prev) => Math.max(0, prev - dmg * multChung))
                          }
                        }}
                        className="p-2.5 rounded-lg bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 hover:border-brand-red/50 text-left transition-all cursor-pointer space-y-0.5"
                      >
                        <span className="text-brand-red font-bold block">{hba.deduction}</span>
                        <span className="text-zinc-600 dark:text-zinc-400 text-[10px] block leading-tight truncate">
                          {hba.action}
                        </span>
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* Doctor Chair & Medical Protocol Card */}
              <div className="p-6 rounded-[14px] bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-md space-y-2">
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-brand-red" />
                  <h4 className="text-sm font-black uppercase text-zinc-900 dark:text-white tracking-tight">
                    {ruleT.safety.doctorTitle}
                  </h4>
                </div>
                <p className="text-xs text-zinc-600 dark:text-zinc-400 font-light leading-relaxed">
                  {ruleT.safety.doctorDesc}
                </p>
              </div>
            </div>
          )}

          {/* ================================================================ */}
          {/* SUB-SECTION 5: FIRST COMPETITION & ATHLETE TOOLKIT */}
          {/* ================================================================ */}
          {kyorugiSubCategory === 'guide' && (
            <div className="space-y-6 animate-fade-in">
              {/* Header Hero Card */}
              <div className="p-6 sm:p-8 rounded-[14px] bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-md space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-purple-500" />
                    <h3 className="text-lg sm:text-xl font-black uppercase text-zinc-900 dark:text-white tracking-tight">
                      {ruleT.guide.title}
                    </h3>
                  </div>
                  <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold bg-purple-500/10 text-purple-500 uppercase">
                    {ruleT.previewBadge}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 font-light leading-relaxed">
                  {ruleT.guide.sub}
                </p>
              </div>

              {/* Pre-Match Preparation Checklist */}
              <div className="p-6 sm:p-8 rounded-[14px] bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-md space-y-4">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-brand-red" />
                  <h4 className="text-base font-black uppercase text-zinc-900 dark:text-white tracking-tight">
                    {ruleT.guide.goldenRulesTitle}
                  </h4>
                </div>

                <div className="grid sm:grid-cols-3 gap-3 text-xs font-mono">
                  <div className="p-3.5 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-1">
                    <strong className="text-zinc-900 dark:text-white block font-bold">{ruleT.guide.stage1Title}</strong>
                    <span className="text-zinc-500 font-light leading-relaxed">
                      {ruleT.guide.stage1Desc}
                    </span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-1">
                    <strong className="text-zinc-900 dark:text-white block font-bold">{ruleT.guide.stage2Title}</strong>
                    <span className="text-zinc-500 font-light leading-relaxed">
                      {ruleT.guide.stage2Desc}
                    </span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-1">
                    <strong className="text-zinc-900 dark:text-white block font-bold">{ruleT.guide.stage3Title}</strong>
                    <span className="text-zinc-500 font-light leading-relaxed">
                      {ruleT.guide.stage3Desc}
                    </span>
                  </div>
                </div>
              </div>

              {/* Common Beginner Mistakes & Tactical Fixes */}
              <div className="p-6 sm:p-8 rounded-[14px] bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-md space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-amber-500" />
                    <h4 className="text-base font-black uppercase text-zinc-900 dark:text-white tracking-tight">
                      {ruleT.guide.title}
                    </h4>
                  </div>
                  <span className="text-[10px] font-mono text-zinc-400">Tactical Corrections</span>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 text-xs font-mono">
                  {beginnerMistakes.map((bm, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-1.5">
                      <span className="text-brand-red font-bold uppercase block">&bull; {bm.title}</span>
                      <p className="text-zinc-600 dark:text-zinc-400 font-light text-[11px] leading-relaxed">
                        <strong>Mistake:</strong> {bm.mistake}<br />
                        <strong>Correction:</strong> {bm.correction}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Champion Competition Mindset */}
              <div className="p-6 sm:p-8 rounded-[14px] bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-md space-y-4">
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-emerald-500" />
                  <h4 className="text-base font-black uppercase text-zinc-900 dark:text-white tracking-tight">
                    Champion Competition Mindset
                  </h4>
                </div>

                <div className="grid sm:grid-cols-3 gap-3 text-xs font-mono">
                  {mindsetRules.map((mr, idx) => (
                    <div key={idx} className="p-3.5 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-1">
                      <strong className="text-emerald-500 block font-bold">{mr.title}</strong>
                      <span className="text-zinc-500 font-light leading-relaxed">
                        {mr.description}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* PRACTICAL MATCH SCENARIOS & OFFICIAL RULE CASES */}
              <div className="p-6 sm:p-8 rounded-[14px] bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-md space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <HelpCircle className="w-5 h-5 text-blue-500" />
                    <h4 className="text-base font-black uppercase text-zinc-900 dark:text-white tracking-tight">
                      Practical Match Scenarios &amp; Official Rulings
                    </h4>
                  </div>
                  <span className="text-xs font-mono text-zinc-400">5 Case Studies</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono">
                  {kyorugiScenarios.map((sc, idx) => (
                    <div key={idx} className={`p-4 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-2 ${idx === 4 ? 'md:col-span-2' : ''}`}>
                      <div className="flex items-center justify-between">
                        <strong className={`${sc.color} font-bold text-xs uppercase`}>{sc.title}</strong>
                        <span className={`px-2 py-0.5 rounded ${sc.color === 'text-brand-red' ? 'bg-brand-red/10' : 'bg-blue-500/10'} text-[10px] font-bold`}>
                          {sc.points}
                        </span>
                      </div>
                      <p className="text-zinc-600 dark:text-zinc-400 font-light text-[11px] leading-relaxed">
                        <strong>Scenario:</strong> {sc.scenario}
                      </p>
                      <div className="p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-[11px] leading-relaxed">
                        <strong>Ruling:</strong> {sc.decision}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* ==================================================================== */}
      {/* 2. MASTER CATEGORY: WT POOMSAE (COMMON FIRST -> RECOGNIZED / FREESTYLE) */}
      {/* ==================================================================== */}
      {masterCategory === 'poomsae' && (
        <div className="space-y-6 animate-fade-in">
          
          {/* POOMSAE SUB-SWITCHER BAR */}
          <div className="p-2 rounded-2xl bg-zinc-100 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 flex flex-wrap items-center gap-1.5">
            <button
              onClick={() => setPoomsaeSubCategory('common')}
              className={`flex-1 py-2.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer flex items-center justify-center gap-2 ${
                poomsaeSubCategory === 'common'
                  ? 'bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white shadow-md border border-zinc-200 dark:border-zinc-800'
                  : 'text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white'
              }`}
            >
              <Building className="w-3.5 h-3.5 text-blue-500" />
              <span>{ruleT.poomsaeTabs.common}</span>
            </button>

            <button
              onClick={() => setPoomsaeSubCategory('recognized')}
              className={`flex-1 py-2.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer flex items-center justify-center gap-2 ${
                poomsaeSubCategory === 'recognized'
                  ? 'bg-white dark:bg-zinc-900 text-brand-red shadow-md border border-zinc-200 dark:border-zinc-800 font-black'
                  : 'text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white'
              }`}
            >
              <Award className="w-3.5 h-3.5 text-brand-red" />
              <span>{ruleT.poomsaeTabs.recognized}</span>
            </button>

            <button
              onClick={() => setPoomsaeSubCategory('freestyle')}
              className={`flex-1 py-2.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer flex items-center justify-center gap-2 ${
                poomsaeSubCategory === 'freestyle'
                  ? 'bg-white dark:bg-zinc-900 text-amber-500 shadow-md border border-zinc-200 dark:border-zinc-800 font-black'
                  : 'text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white'
              }`}
            >
              <Zap className="w-3.5 h-3.5 text-amber-500" />
              <span>{ruleT.poomsaeTabs.freestyle}</span>
            </button>
          </div>

          {/* ================================================================ */}
          {/* SUB-SECTION 1: POOMSAE COMMON FOUNDATION & VENUE */}
          {/* ================================================================ */}
          {poomsaeSubCategory === 'common' && (
            <div className="space-y-6 animate-fade-in">
              {/* REGULATORY GOVERNANCE, SCOPE & ANTI-DOPING COMPLIANCE */}
              <div className="p-6 sm:p-8 rounded-[14px] bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-md space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-500" />
                    <h3 className="text-lg sm:text-xl font-black uppercase text-zinc-900 dark:text-white tracking-tight">
                      1. Regulatory Governance, Scope &amp; Medical Control
                    </h3>
                  </div>
                  <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold bg-blue-500/10 text-blue-500 uppercase">
                    WT Article 1 &bull; Universal Governance
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 font-light leading-relaxed">
                  Standardizes all Poomsae competitions promoted or recognized by World Taekwondo (WT), Continental Unions (CUs), and Member National Associations (MNAs) to ensure uniform and fair tournament execution worldwide.
                </p>

                <div className="grid sm:grid-cols-3 gap-3 text-xs">
                  <div className="p-3.5 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-1">
                    <strong className="text-zinc-900 dark:text-white block font-bold">Standardization of Rules:</strong>
                    <span className="text-zinc-500 font-light leading-relaxed">
                      All participating MNAs, athletes, coaches, and international referees must strictly adhere to unified WT competition rules.
                    </span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-1">
                    <strong className="text-zinc-900 dark:text-white block font-bold">Application &amp; Amendments:</strong>
                    <span className="text-zinc-500 font-light leading-relaxed">
                      Applies to all official Poomsae events. MNAs seeking modifications must submit written justification to WT and obtain formal approval at least <strong>one (1) month prior</strong>.
                    </span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-1">
                    <strong className="text-zinc-900 dark:text-white block font-bold">Anti-Doping Compliance:</strong>
                    <span className="text-zinc-500 font-light leading-relaxed">
                      Strict compliance with WT Anti-Doping Rules. Refusal of testing or violations results in immediate <strong>disqualification, award forfeiture, and advancement of next-ranked athlete</strong>.
                    </span>
                  </div>
                </div>
              </div>

              {/* Visual 10m x 10m / 12m x 12m Court Map Diagram & Exact Station Coordinates */}
              <div className="p-6 sm:p-8 rounded-[14px] bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-md space-y-5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <h4 className="text-base font-black uppercase text-zinc-900 dark:text-white tracking-tight">
                      Field of Play (FOP) Station Coordinates &amp; Judicial Setup
                    </h4>
                    <span className="text-xs text-zinc-500 font-light">
                      The Contest Area shall measure at least <strong>10m x 10m</strong> (<strong>12m x 12m for Freestyle Team Competition</strong>) on a flat surface without obstructing projections.
                    </span>
                  </div>
                  <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold bg-blue-500/10 text-blue-500 uppercase self-start sm:self-auto">
                    10x10m (12x12m Freestyle Team)
                  </span>
                </div>

                <div className="p-6 rounded-2xl bg-zinc-950 border border-zinc-800 text-white relative overflow-hidden">
                  <div className="text-center mb-4">
                    <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold bg-blue-500/20 text-blue-400 border border-blue-500/30 inline-block">
                      Boundary Line #1 &bull; Front Judges (4 Judges: J1, J2, J3, J4 + Center Referee beside J1) &bull; Seated 1m back, 1m apart
                    </span>
                  </div>

                  <div className="relative mx-auto max-w-xl h-60 sm:h-72 rounded-xl bg-zinc-900 border-2 border-dashed border-zinc-700 p-4 flex flex-col justify-between">
                    <div className="flex justify-between items-center text-[10px] font-mono text-zinc-400">
                      <span>Corner #1</span>
                      <span className="px-2.5 py-0.5 rounded bg-zinc-800 text-zinc-200 font-mono text-[10px]">
                        10m x 10m Mat (12m x 12m Freestyle Team)
                      </span>
                      <span className="text-right">Corner #2 (C4: Coordinators 1m out)</span>
                    </div>

                    <div className="flex flex-col items-center justify-center space-y-2">
                      <div className="p-3 rounded-xl bg-brand-red/20 border border-brand-red text-center">
                        <span className="text-xs font-mono font-black text-brand-red block">
                          [C2: Contestant Spot]
                        </span>
                        <span className="text-[10px] font-mono text-zinc-300">
                          Centered laterally &bull; 2m Back From Center Point Toward Boundary #3
                        </span>
                      </div>
                    </div>

                    <div className="flex justify-between items-center text-[10px] font-mono text-zinc-400">
                      <span>Corner #4 (Inspection Desk + C3: Standby/Coach 3m out)</span>
                      <span>Corner #3 (Recorder Table: 3m Right of Referee)</span>
                    </div>
                  </div>

                  <div className="text-center mt-4">
                    <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold bg-purple-500/20 text-purple-400 border border-purple-500/30 inline-block">
                      Boundary Line #3 &bull; Back Judges (3 Judges: J5, J6, J7) &bull; Seated 1m back, 1m apart
                    </span>
                  </div>
                </div>

                {/* Exact Coordinates Specification Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-2.5 text-xs font-mono">
                  <div className="p-3 rounded-lg bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-1">
                    <strong className="text-zinc-900 dark:text-white block font-bold">Judicial Layout:</strong>
                    <div className="text-zinc-500 text-[11px] space-y-0.5">
                      <div><strong>7-Judge:</strong> 4 Front (Line #1), 3 Back (Line #3).</div>
                      <div><strong>5-Judge:</strong> 3 Front, 2 Back or all 5 Front (1m back).</div>
                    </div>
                  </div>

                  <div className="p-3 rounded-lg bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-1">
                    <strong className="text-zinc-900 dark:text-white block font-bold">Contestant Spot (C2):</strong>
                    <span className="text-zinc-500 text-[11px] block">
                      Centered laterally &bull; Exactly <strong>2m back from center</strong> toward Boundary Line #3.
                    </span>
                  </div>

                  <div className="p-3 rounded-lg bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-1">
                    <strong className="text-zinc-900 dark:text-white block font-bold">Recorder &amp; Coordinators:</strong>
                    <div className="text-zinc-500 text-[11px] space-y-0.5">
                      <div><strong>Recorder:</strong> 3m to right of Referee.</div>
                      <div><strong>Coordinators (C4):</strong> 1m from Corner #2 on Line #2.</div>
                    </div>
                  </div>

                  <div className="p-3 rounded-lg bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-1">
                    <strong className="text-zinc-900 dark:text-white block font-bold">Standby &amp; Inspection:</strong>
                    <div className="text-zinc-500 text-[11px] space-y-0.5">
                      <div><strong>Standby (C3):</strong> 3m from corner between #3 &amp; #4.</div>
                      <div><strong>Inspection Desk:</strong> Adjacent entrance.</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* PERSONAL HYGIENE, GROOMING & HAIR ACCESSORIES PROTOCOL CARD */}
              <div className="p-6 sm:p-8 rounded-[14px] bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-md space-y-4">
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-brand-red" />
                  <h4 className="text-base font-black uppercase text-zinc-900 dark:text-white tracking-tight">
                    Personal Hygiene, Jewelry &amp; Hair Accessories Regulations
                  </h4>
                </div>

                <div className="grid sm:grid-cols-3 gap-4 text-xs">
                  {/* Hygiene & Nails */}
                  <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-2">
                    <strong className="text-zinc-900 dark:text-white block font-bold uppercase">
                      1. Hygiene, Nails &amp; Polish
                    </strong>
                    <ul className="space-y-1 text-zinc-600 dark:text-zinc-400 font-light list-disc pl-4">
                      <li>Competitors must maintain the highest standards of personal hygiene.</li>
                      <li>Finger and toe nails must be kept cut short and filed smoothly.</li>
                      <li>Nail polish must be <strong>white or clear</strong> only.</li>
                    </ul>
                  </div>

                  {/* Jewelry & Headwear */}
                  <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-2">
                    <strong className="text-zinc-900 dark:text-white block font-bold uppercase">
                      2. Jewelry &amp; Head Coverings
                    </strong>
                    <ul className="space-y-1 text-zinc-600 dark:text-zinc-400 font-light list-disc pl-4">
                      <li>The <strong>ONLY jewelry permitted are earrings flush to the ear</strong>.</li>
                      <li>No other jewelry or piercings may be worn on the field of play.</li>
                      <li>Inspection desk may request earring removal if safety concerns arise.</li>
                      <li>No hats or head items permitted except for <strong>religious coverings</strong>.</li>
                    </ul>
                  </div>

                  {/* Hair Accessories */}
                  <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-2">
                    <strong className="text-zinc-900 dark:text-white block font-bold uppercase">
                      3. Hair Accessories Rules
                    </strong>
                    <div className="space-y-1 font-mono text-[11px]">
                      <div className="text-emerald-600 dark:text-emerald-400">
                        &bull; Permitted: Bobby pins &amp; hair clips <strong>shorter than 2 inches</strong>.
                      </div>
                      <div className="text-emerald-600 dark:text-emerald-400">
                        &bull; Permitted: Soft elastic hair ties.
                      </div>
                      <div className="text-brand-red">
                        &bull; Prohibited: Large decorative bows.
                      </div>
                      <div className="text-brand-red">
                        &bull; Prohibited: Alligator clips / sharp metal claws.
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* COMPETITION METHODS & RECOGNIZED VS FREESTYLE COMPARISON */}
              <div className="p-6 sm:p-8 rounded-[14px] bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-md space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase bg-blue-500/10 text-blue-500 border border-blue-500/20">
                        WT Article 3 &bull; Tournament Protocols
                      </span>
                      <span className="text-xs font-mono text-zinc-400">Quorum: Min 4 Nations / 4 Entries</span>
                    </div>
                    <h4 className="text-base sm:text-lg font-black uppercase text-zinc-900 dark:text-white tracking-tight">
                      Tournament Methods, Brackets &amp; Discipline Systems
                    </h4>
                  </div>
                </div>

                {/* Quorum & 4 Tournament Formats */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
                  <div className="p-3.5 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-1">
                    <strong className="text-zinc-900 dark:text-white block font-bold">1. Cut-off System:</strong>
                    <span className="text-zinc-500 font-light leading-relaxed">
                      Athletes perform, judges score, and top-ranked advance. Standard for major WT Championships.
                    </span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-1">
                    <strong className="text-zinc-900 dark:text-white block font-bold">2. Single Elimination:</strong>
                    <span className="text-zinc-500 font-light leading-relaxed">
                      Head-to-head match bracket where winner advances to the next tier until final.
                    </span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-1">
                    <strong className="text-zinc-900 dark:text-white block font-bold">3. Round-Robin:</strong>
                    <span className="text-zinc-500 font-light leading-relaxed">
                      Competitors face multiple/all athletes in group; rankings determined by cumulative points.
                    </span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-1">
                    <strong className="text-zinc-900 dark:text-white block font-bold">4. Combination System:</strong>
                    <span className="text-zinc-500 font-light leading-relaxed">
                      Cut-off preliminary/semi-final rounds combined with single elimination tournament finals.
                    </span>
                  </div>
                </div>

                {/* CUT-OFF SYSTEM OPERATING PROCEDURES FLOWCHART (Matching Official WT Schema) */}
                <div className="p-6 rounded-2xl bg-zinc-950 border border-zinc-800 text-white space-y-5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-zinc-800 pb-3">
                    <div className="flex items-center gap-2">
                      <Network className="w-4 h-4 text-emerald-400" />
                      <span className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-200">
                        3.2 Cut-off System Operating Procedures
                      </span>
                    </div>
                    <span className="text-[10px] font-mono text-zinc-400">
                      Top 50% Round-up Rule (e.g., 13 entries &rarr; 7 advance)
                    </span>
                  </div>

                  {/* Flowchart Diagram */}
                  <div className="flex flex-col items-center space-y-4 max-w-2xl mx-auto font-mono text-xs text-center">
                    {/* Top Root Node */}
                    <div className="px-5 py-2.5 rounded-xl bg-zinc-900 border border-zinc-700 font-bold text-zinc-200 shadow-md">
                      Total Contestants Registered
                    </div>

                    {/* Connecting Arrows */}
                    <div className="w-full hidden sm:flex justify-around text-zinc-600 text-sm">
                      <span>&darr;</span>
                      <span>&darr;</span>
                      <span>&darr;</span>
                    </div>

                    {/* 3 Entry Tiers */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 w-full">
                      {/* 20-39 */}
                      <div className="p-3 rounded-xl bg-zinc-900/80 border border-zinc-800 space-y-2">
                        <span className="text-[11px] font-bold text-blue-400 block">[ 20 to 39 Athletes ]</span>
                        <div className="p-2 rounded bg-black/40 border border-zinc-800 text-[10px] text-zinc-300">
                          Preliminary Rd: 2 Groups/Courts
                        </div>
                        <span className="text-[10px] font-bold text-emerald-400 block">(Top 50% Advance)</span>
                      </div>

                      {/* 40+ */}
                      <div className="p-3 rounded-xl bg-zinc-900/80 border border-zinc-800 space-y-2">
                        <span className="text-[11px] font-bold text-purple-400 block">[ 40+ Athletes ]</span>
                        <div className="p-2 rounded bg-black/40 border border-zinc-800 text-[10px] text-zinc-300">
                          Preliminary Rd: 3 Groups/Courts
                        </div>
                        <span className="text-[10px] font-bold text-emerald-400 block">(Top 50% Advance)</span>
                      </div>

                      {/* 9-19 */}
                      <div className="p-3 rounded-xl bg-zinc-900/80 border border-zinc-800 space-y-2">
                        <span className="text-[11px] font-bold text-amber-400 block">[ 9 to 19 Athletes ]</span>
                        <div className="p-2 rounded bg-black/40 border border-zinc-800 text-[10px] text-zinc-400">
                          Direct Semi-Final
                        </div>
                        <span className="text-[10px] text-zinc-500 block">&darr;</span>
                      </div>
                    </div>

                    {/* Convergence Arrow */}
                    <div className="text-zinc-600 text-sm">&darr;</div>

                    {/* Semi-Final Node */}
                    <div className="w-full max-w-md p-3.5 rounded-xl bg-blue-500/10 border border-blue-500/30 text-blue-300 space-y-1">
                      <strong className="block text-xs font-bold uppercase text-white">
                        Semi-Final Round (9 to 19 Contestants)
                      </strong>
                      <span className="text-[11px] font-light block text-zinc-300">
                        Athletes perform 2 assigned compulsory Poomsae &bull; <strong className="text-emerald-400">(Top 8 Advance)</strong>
                      </span>
                    </div>

                    {/* Arrow */}
                    <div className="text-zinc-600 text-sm">&darr;</div>

                    {/* Final Round Node */}
                    <div className="w-full max-w-md p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 space-y-1">
                      <strong className="block text-xs font-bold uppercase text-white">
                        Final Round (8 or Fewer Contestants)
                      </strong>
                      <span className="text-[11px] font-light block text-zinc-300">
                        Athletes perform 2 assigned compulsory Poomsae &bull; <strong className="text-amber-400">(Top 4 Win Medals: 1 Gold, 1 Silver, 2 Bronze)</strong>
                      </span>
                    </div>
                  </div>
                </div>

                {/* MATCH TIMING AND SCHEDULING SPECIFICATIONS */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
                  <div className="p-3.5 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-1">
                    <span className="font-mono text-[10px] font-bold uppercase text-brand-red block">
                      Recognized Duration
                    </span>
                    <strong className="text-zinc-900 dark:text-white block font-bold">Within 90 Seconds</strong>
                    <span className="text-zinc-500 text-[11px] font-light">
                      Individual, Pair &amp; Team forms must finish under 90s strictly (-0.3 penalty for overtime).
                    </span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-1">
                    <span className="font-mono text-[10px] font-bold uppercase text-amber-500 block">
                      Freestyle Duration
                    </span>
                    <strong className="text-zinc-900 dark:text-white block font-bold">90 to 100 Seconds</strong>
                    <span className="text-zinc-500 text-[11px] font-light">
                      Must last between 90s and 100s strictly (-0.3 penalty for overtime or undertime).
                    </span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-1">
                    <span className="font-mono text-[10px] font-bold uppercase text-emerald-500 block">
                      Rest Interval
                    </span>
                    <strong className="text-zinc-900 dark:text-white block font-bold">Min 30 Seconds</strong>
                    <span className="text-zinc-500 text-[11px] font-light">
                      Timed from coordinator's <em>Tuae-jang</em> (exit) to <em>Chool-jeon</em> (2nd form entry).
                    </span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-1">
                    <span className="font-mono text-[10px] font-bold uppercase text-purple-500 block">
                      Call to FOP
                    </span>
                    <strong className="text-zinc-900 dark:text-white block font-bold">3 Calls (30 min prior)</strong>
                    <span className="text-zinc-500 text-[11px] font-light">
                      Called 3 times beginning 30 min prior. Failure to enter on <em>Chool-jeon</em> = forfeiture.
                    </span>
                  </div>
                </div>

                {/* Recognized vs Freestyle Main Difference Matrix Table */}
                <div className="space-y-2">
                  <span className="text-xs font-mono font-bold uppercase text-zinc-900 dark:text-white block">
                    Recognized Poomsae vs Freestyle Poomsae Main Difference Matrix
                  </span>
                  <div className="overflow-x-auto rounded-xl border border-zinc-200 dark:border-zinc-800">
                    <table className="w-full text-left border-collapse text-xs">
                      <thead>
                        <tr className="bg-zinc-100 dark:bg-zinc-800/90 text-zinc-900 dark:text-white font-mono uppercase text-[11px]">
                          <th className="p-3">Evaluation Feature</th>
                          <th className="p-3 text-brand-red">Recognized Poomsae</th>
                          <th className="p-3 text-amber-500">Freestyle Poomsae</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800/60 font-light">
                        <tr className="hover:bg-zinc-50 dark:hover:bg-zinc-800/40">
                          <td className="p-3 font-bold text-zinc-900 dark:text-white">Form Design</td>
                          <td className="p-3 text-zinc-700 dark:text-zinc-300">Fixed official WT Poomsae</td>
                          <td className="p-3 text-zinc-700 dark:text-zinc-300 font-medium">Athlete-created / custom routine</td>
                        </tr>
                        <tr className="hover:bg-zinc-50 dark:hover:bg-zinc-800/40">
                          <td className="p-3 font-bold text-zinc-900 dark:text-white">Main Scoring Focus</td>
                          <td className="p-3 text-zinc-700 dark:text-zinc-300">Accuracy (4.0) + Presentation (6.0)</td>
                          <td className="p-3 text-zinc-700 dark:text-zinc-300 font-medium">Technical Skills #1–#6 (6.0) + Presentation (4.0)</td>
                        </tr>
                        <tr className="hover:bg-zinc-50 dark:hover:bg-zinc-800/40">
                          <td className="p-3 font-bold text-zinc-900 dark:text-white">Movement Sequence</td>
                          <td className="p-3 text-zinc-700 dark:text-zinc-300">Must follow canonical official form sequence</td>
                          <td className="p-3 text-zinc-700 dark:text-zinc-300 font-medium">Choreographed to music (#1–#5 in strict order)</td>
                        </tr>
                        <tr className="hover:bg-zinc-50 dark:hover:bg-zinc-800/40">
                          <td className="p-3 font-bold text-zinc-900 dark:text-white">Creativity Element</td>
                          <td className="p-3 text-zinc-700 dark:text-zinc-300">Limited (strict standard execution)</td>
                          <td className="p-3 text-zinc-700 dark:text-zinc-300 font-medium">Major evaluation component (1.0 pt)</td>
                        </tr>
                        <tr className="hover:bg-zinc-50 dark:hover:bg-zinc-800/40">
                          <td className="p-3 font-bold text-zinc-900 dark:text-white">Competition Formats</td>
                          <td className="p-3 text-zinc-700 dark:text-zinc-300">Cut-off / Single Elimination / Round-robin</td>
                          <td className="p-3 text-zinc-700 dark:text-zinc-300 font-medium">Cut-off / Tournament formats depending on event</td>
                        </tr>
                        <tr className="hover:bg-zinc-50 dark:hover:bg-zinc-800/40">
                          <td className="p-3 font-bold text-zinc-900 dark:text-white">Examples</td>
                          <td className="p-3 font-mono text-brand-red">Taegeuk 1–8, Koryo, Keumgang, Taebaek, etc.</td>
                          <td className="p-3 font-mono text-amber-500">Custom routine with jumping, spinning &amp; acrobatics</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              {/* Age Divisions & Compulsory Pools */}
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="p-6 rounded-[14px] bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-md space-y-3">
                  <div className="flex items-center justify-between">
                    <h4 className="text-base font-black uppercase text-zinc-900 dark:text-white tracking-tight">
                      {ruleT.poomsaeCommon.divisionsTitle}
                    </h4>
                    <span className="text-[10px] font-mono text-brand-red font-bold">Year-Based Criteria</span>
                  </div>
                  <div className="overflow-x-auto rounded-xl border border-zinc-200 dark:border-zinc-800">
                    <table className="w-full text-left border-collapse text-xs">
                      <thead>
                        <tr className="bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white font-mono uppercase text-[10px]">
                          <th className="p-2.5">Division</th>
                          <th className="p-2.5">Age Limits</th>
                          <th className="p-2.5">Format</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800 font-light">
                        {poomsaeAgeDivisions.map((ad, idx) => (
                          <tr key={idx} className="hover:bg-zinc-50 dark:hover:bg-zinc-800/40">
                            <td className="p-2.5 font-bold text-zinc-900 dark:text-white">{ad.division}</td>
                            <td className="p-2.5 font-mono text-brand-red">{ad.ageCriteria}</td>
                            <td className="p-2.5 text-zinc-500 text-[11px]">{ad.individual}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <span className="text-[10px] text-zinc-400 block font-mono">
                    * Note: Age limit is based on the year of championships, not the specific birth date.
                  </span>
                </div>

                <div className="p-6 rounded-[14px] bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-md space-y-3">
                  <h4 className="text-base font-black uppercase text-zinc-900 dark:text-white tracking-tight">
                    {ruleT.poomsaeCommon.poolsTitle}
                  </h4>
                  <div className="space-y-2 text-xs">
                    {compulsoryPoomsaePools.map((cp, idx) => (
                      <div key={idx} className="p-3 rounded-lg bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-1">
                        <strong className="text-zinc-900 dark:text-white block font-bold">{cp.division}</strong>
                        <span className="text-zinc-500 font-mono text-[11px] block">{cp.pool}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ================================================================ */}
          {/* SUB-SECTION 2: RECOGNIZED POOMSAE RULES & DEEP SCORING ENGINE */}
          {/* ================================================================ */}
          {poomsaeSubCategory === 'recognized' && (
            <div className="space-y-6 animate-fade-in">
              {/* Core Scoring System: Accuracy 4.0 vs Presentation 6.0 */}
              <div className="p-6 sm:p-8 rounded-[14px] bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-md space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-brand-red" />
                    <h3 className="text-lg sm:text-xl font-black uppercase text-zinc-900 dark:text-white tracking-tight">
                      {ruleT.poomsaeRecognized.title}
                    </h3>
                  </div>
                  <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold bg-brand-red/10 text-brand-red self-start sm:self-auto">
                    Total Score: 10.0 Maximum Points
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 font-light leading-relaxed">
                  {ruleT.poomsaeRecognized.sub}
                </p>

                <div className="grid sm:grid-cols-2 gap-4 text-xs font-mono">
                  {/* Accuracy Card */}
                  <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-2">
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 inline-block uppercase">
                      {ruleT.poomsaeRecognized.accuracyTitle}
                    </span>
                    <p className="text-zinc-600 dark:text-zinc-400 font-light leading-relaxed">
                      {ruleT.poomsaeRecognized.accuracySub}
                    </p>
                  </div>

                  {/* Presentation Card */}
                  <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-2">
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20 inline-block uppercase">
                      {ruleT.poomsaeRecognized.presentationTitle}
                    </span>
                    <p className="text-zinc-600 dark:text-zinc-400 font-light leading-relaxed">
                      {ruleT.poomsaeRecognized.presentationSub}
                    </p>
                  </div>
                </div>
              </div>

              {/* REFEREE COMMANDS, PROCEDURES & HAND SIGNALS TABLE */}
              <div className="p-6 sm:p-8 rounded-[14px] bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-md space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <Megaphone className="w-5 h-5 text-brand-red" />
                    <h4 className="text-base font-black uppercase text-zinc-900 dark:text-white tracking-tight">
                      Official Referee Commands, Procedures &amp; Hand Signals
                    </h4>
                  </div>
                  <span className="text-xs font-mono text-zinc-400">9 Standard Ring Commands</span>
                </div>

                <div className="overflow-x-auto rounded-xl border border-zinc-200 dark:border-zinc-800">
                  <table className="w-full text-left border-collapse text-xs">
                    <thead>
                      <tr className="bg-zinc-100 dark:bg-zinc-800/90 text-zinc-900 dark:text-white font-mono uppercase text-[10px]">
                        <th className="p-3">Order</th>
                        <th className="p-3">Command (Korean)</th>
                        <th className="p-3">English Meaning</th>
                        <th className="p-3">Referee Hand Signal &amp; Physical Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800/60 font-mono text-[11px]">
                      <tr className="hover:bg-zinc-50 dark:hover:bg-zinc-800/40">
                        <td className="p-3 font-bold text-brand-red">1</td>
                        <td className="p-3 font-bold text-zinc-900 dark:text-white">Chool-jeon (출전)</td>
                        <td className="p-3 text-blue-500">Enter the Court</td>
                        <td className="p-3 text-zinc-500">Left hand extends toward entry boundary line, palm open, inviting competitor into ring.</td>
                      </tr>
                      <tr className="hover:bg-zinc-50 dark:hover:bg-zinc-800/40">
                        <td className="p-3 font-bold text-brand-red">2</td>
                        <td className="p-3 font-bold text-zinc-900 dark:text-white">Cha-ryeot (차렷)</td>
                        <td className="p-3 text-blue-500">Attention</td>
                        <td className="p-3 text-zinc-500">Left arm drops down cleanly to the side of the body.</td>
                      </tr>
                      <tr className="hover:bg-zinc-50 dark:hover:bg-zinc-800/40">
                        <td className="p-3 font-bold text-brand-red">3</td>
                        <td className="p-3 font-bold text-zinc-900 dark:text-white">Kyeong-rye (경례)</td>
                        <td className="p-3 text-blue-500">Bow</td>
                        <td className="p-3 text-zinc-500">Left arm raises to 45° angle with palm inward, signaling formal mutual bow at 30°.</td>
                      </tr>
                      <tr className="hover:bg-zinc-50 dark:hover:bg-zinc-800/40">
                        <td className="p-3 font-bold text-brand-red">4</td>
                        <td className="p-3 font-bold text-zinc-900 dark:text-white">Joon-bi (준비)</td>
                        <td className="p-3 text-emerald-500 font-bold">Ready Stance</td>
                        <td className="p-3 text-zinc-500">Right hand raises from side to chest and slowly presses down to solar plexus into Gibon Joon-bi.</td>
                      </tr>
                      <tr className="hover:bg-zinc-50 dark:hover:bg-zinc-800/40">
                        <td className="p-3 font-bold text-brand-red">5</td>
                        <td className="p-3 font-bold text-brand-red">Si-jak (시작)</td>
                        <td className="p-3 text-brand-red font-bold">Begin</td>
                        <td className="p-3 text-zinc-500">Right arm extends forward horizontally with open palm facing contestant, signaling start.</td>
                      </tr>
                      <tr className="hover:bg-zinc-50 dark:hover:bg-zinc-800/40">
                        <td className="p-3 font-bold text-brand-red">6</td>
                        <td className="p-3 font-bold text-zinc-900 dark:text-white">Ba-ro (바로)</td>
                        <td className="p-3 text-purple-500">Return to Ready</td>
                        <td className="p-3 text-zinc-500">Right arm extends forward and pulls back to solar plexus; contestant returns in 1 breath.</td>
                      </tr>
                      <tr className="hover:bg-zinc-50 dark:hover:bg-zinc-800/40">
                        <td className="p-3 font-bold text-brand-red">7</td>
                        <td className="p-3 font-bold text-zinc-900 dark:text-white">Swi-o (쉬어)</td>
                        <td className="p-3 text-zinc-500">At Ease / Rest</td>
                        <td className="p-3 text-zinc-500">Both hands drop naturally to sides; contestant shifts to Pyeonhi-seogi (relaxed stance).</td>
                      </tr>
                      <tr className="hover:bg-zinc-50 dark:hover:bg-zinc-800/40">
                        <td className="p-3 font-bold text-brand-red">8</td>
                        <td className="p-3 font-bold text-zinc-900 dark:text-white">Pyo-chul (표출)</td>
                        <td className="p-3 text-amber-500 font-bold">Display Score</td>
                        <td className="p-3 text-zinc-500">Right hand sweeps horizontally toward display monitor as official scores are posted.</td>
                      </tr>
                      <tr className="hover:bg-zinc-50 dark:hover:bg-zinc-800/40">
                        <td className="p-3 font-bold text-brand-red">9</td>
                        <td className="p-3 font-bold text-zinc-900 dark:text-white">Toe-jang (퇴장)</td>
                        <td className="p-3 text-zinc-500">Exit the Court</td>
                        <td className="p-3 text-zinc-500">Left hand points toward exit corner, dismissing the competitor from the ring.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* KICK TECHNIQUE PROCESS & OBSERVATION FOCUS CARD */}
              <div className="p-6 sm:p-8 rounded-[14px] bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-md space-y-4">
                <div className="flex items-center gap-2">
                  <Target className="w-5 h-5 text-brand-red" />
                  <h4 className="text-base font-black uppercase text-zinc-900 dark:text-white tracking-tight">
                    Kick Technique Process &amp; Observation Focus
                  </h4>
                </div>

                <div className="grid sm:grid-cols-3 gap-3 text-xs">
                  <div className="p-3.5 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-1">
                    <strong className="text-zinc-900 dark:text-white block font-bold">Posture &gt; Flexibility:</strong>
                    <span className="text-zinc-500 font-light">
                      Flexibility of high kick is <strong>NOT</strong> a criterion of high score. High scores reward correct body posture and kick accuracy.
                    </span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-1">
                    <strong className="text-zinc-900 dark:text-white block font-bold">Eye Gaze on Target:</strong>
                    <span className="text-zinc-500 font-light">
                      During all kick techniques, eyes must look to the target/feet. Looking in the wrong direction incurs accuracy deductions.
                    </span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-1">
                    <strong className="text-zinc-900 dark:text-white block font-bold">Vertical Apchagi Gaze Guide:</strong>
                    <div className="text-zinc-500 font-light text-[11px] font-mono space-y-0.5">
                      <div>&bull; Target gaze = 0.0 (Clean)</div>
                      <div>&bull; Looking straight = -0.1 (Minor)</div>
                      <div>&bull; Looking down = -0.3 (Major)</div>
                      <div>&bull; Head up/chin lifted = Pres. deduction</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Accuracy Deductions Detailed Matrix (-0.1 Minor / -0.3 Major / Procedural) */}
              <div className="p-6 sm:p-8 rounded-[14px] bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-md space-y-6">
                <h4 className="text-base font-black uppercase text-zinc-900 dark:text-white tracking-tight">
                  Accuracy Deductions Master Matrix (-0.1 Minor / -0.3 Major / -0.6 Restart)
                </h4>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {recognizedAccuracyDeductions.map((ded) => (
                    <div key={ded.id} className="p-5 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold uppercase bg-brand-red/10 text-brand-red border border-brand-red/20">
                          {ded.deduction}
                        </span>
                      </div>
                      <h5 className="text-xs font-bold uppercase text-zinc-900 dark:text-white">{ded.title}</h5>
                      <p className="text-[11px] text-zinc-500 font-light leading-relaxed">{ded.description}</p>
                      <ul className="space-y-1 text-[11px] text-zinc-600 dark:text-zinc-400 font-light">
                        {ded.examples.map((ex, exIdx) => (
                          <li key={exIdx} className="flex items-start gap-1.5">
                            <span className="text-brand-red font-bold">&bull;</span>
                            <span>{ex}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Presentation Detailed Categories (Speed/Power, Rhythm/Tempo, Energy) */}
              <div className="p-6 sm:p-8 rounded-[14px] bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-md space-y-6">
                <h4 className="text-base font-black uppercase text-zinc-900 dark:text-white tracking-tight">
                  Presentation Scoring Breakdown (6.0 Maximum Points)
                </h4>

                <div className="grid sm:grid-cols-3 gap-4">
                  {/* Speed and Power */}
                  <div className="p-5 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-black text-zinc-900 dark:text-white">1. Speed &amp; Power</span>
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-blue-500/10 text-blue-500">0.5 – 2.0 pts</span>
                    </div>
                    <p className="text-xs text-zinc-500 font-light leading-relaxed">
                      Evaluated on whether techniques are performed in accordance with pertinent movement characteristics.
                    </p>
                    <div className="space-y-1.5 text-xs text-zinc-700 dark:text-zinc-300 font-light">
                      <div className="p-2 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
                        <strong>Regular Techniques:</strong> High speed, clear acceleration, precise completion.
                      </div>
                      <div className="p-2 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
                        <strong>Slow Movements:</strong> Deliberate and controlled power (e.g. Pyojeok Arae Chigi in Koryo).
                      </div>
                      <div className="p-2 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
                        <strong>Jitzikgi (Stomping):</strong> Balanced speed and power without stiffness.
                      </div>
                    </div>
                  </div>

                  {/* Rhythm and Tempo */}
                  <div className="p-5 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-black text-zinc-900 dark:text-white">2. Rhythm &amp; Tempo</span>
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-blue-500/10 text-blue-500">0.5 – 2.0 pts</span>
                    </div>
                    <p className="text-xs text-zinc-500 font-light leading-relaxed">
                      Flow of power, speed control, timing connection, and pauses in between.
                    </p>
                    <div className="space-y-1.5 text-xs text-zinc-700 dark:text-zinc-300 font-light">
                      <div className="p-2 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
                        <strong>Control of Power:</strong> Strongest power at critical impact through speed &amp; softness.
                      </div>
                      <div className="p-2 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
                        <strong>Control of Speed:</strong> Acceleration from 0% speed to 100% velocity towards impact.
                      </div>
                      <div className="p-2 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
                        <strong>Rhythm &amp; Tempo:</strong> Repeated actions according to note length and pauses.
                      </div>
                    </div>
                  </div>

                  {/* Expression of Energy & Volume */}
                  <div className="p-5 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-black text-zinc-900 dark:text-white">3. Energy &amp; Volume</span>
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-blue-500/10 text-blue-500">0.5 – 2.0 pts</span>
                    </div>
                    <p className="text-xs text-zinc-500 font-light leading-relaxed">
                      Presence, eye focus, clean uniform, manners, and resonant Kihap delivery.
                    </p>
                    <div className="space-y-1.5 text-xs text-zinc-700 dark:text-zinc-300 font-light">
                      <div className="p-2 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
                        <strong>High (+2.0):</strong> Confident, strong focus, short/strong Kihap, crisp Jitzikgi.
                      </div>
                      <div className="p-2 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
                        <strong>Low (0.5):</strong> Nervous appearance, mouth breathing, loud body slapping sounds.
                      </div>
                      <div className="p-2 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
                        <strong>Prohibited:</strong> Pelvic hand support for kicks, lifting chin in Apchagi.
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* High vs Low Presentation Comparison Table */}
              <div className="p-6 sm:p-8 rounded-[14px] bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-md space-y-4">
                <h4 className="text-base font-black uppercase text-zinc-900 dark:text-white tracking-tight">
                  High Presentation (+2.0) vs Low Presentation (0.5) Comparison Matrix
                </h4>

                <div className="overflow-x-auto rounded-xl border border-zinc-200 dark:border-zinc-800">
                  <table className="w-full text-left border-collapse text-xs">
                    <thead>
                      <tr className="bg-zinc-100 dark:bg-zinc-800/90 text-zinc-900 dark:text-white font-mono uppercase text-[11px]">
                        <th className="p-3.5">Evaluation Dimension</th>
                        <th className="p-3.5 text-emerald-600 dark:text-emerald-400">High Presentation Score (+2.0 Max)</th>
                        <th className="p-3.5 text-brand-red">Low Presentation Score (0.5 Min)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800/60 font-light">
                      <tr className="hover:bg-zinc-50 dark:hover:bg-zinc-800/40">
                        <td className="p-3.5 font-bold text-zinc-900 dark:text-white">Combat Realism</td>
                        <td className="p-3.5 text-emerald-600 dark:text-emerald-400">Poomsae looks like realistic fighting; movements executed with clear purpose.</td>
                        <td className="p-3.5 text-brand-red">Poomsae does not look like fighting; lack of intent.</td>
                      </tr>
                      <tr className="hover:bg-zinc-50 dark:hover:bg-zinc-800/40">
                        <td className="p-3.5 font-bold text-zinc-900 dark:text-white">Balance &amp; Continuity</td>
                        <td className="p-3.5 text-emerald-600 dark:text-emerald-400">Good balance; each technique completed; smooth flow from one to next.</td>
                        <td className="p-3.5 text-brand-red">Poor balance; poor continuous technique; poor recovery after kicks/punches.</td>
                      </tr>
                      <tr className="hover:bg-zinc-50 dark:hover:bg-zinc-800/40">
                        <td className="p-3.5 font-bold text-zinc-900 dark:text-white">Cadence &amp; Pauses</td>
                        <td className="p-3.5 text-emerald-600 dark:text-emerald-400">Controlled tempo adhering to standard pauses between techniques.</td>
                        <td className="p-3.5 text-brand-red">Too little or too much time between techniques.</td>
                      </tr>
                      <tr className="hover:bg-zinc-50 dark:hover:bg-zinc-800/40">
                        <td className="p-3.5 font-bold text-zinc-900 dark:text-white">Kihap, Stomp &amp; Strikes</td>
                        <td className="p-3.5 text-emerald-600 dark:text-emerald-400">Strong &amp; short Kihap, strong Jitzikgi, and crisp Pyojeok-chagi.</td>
                        <td className="p-3.5 text-brand-red">Soft Kihap, soft Jitzikgi/Pyojeok-chagi, mouth breathing, loud body slapping sound.</td>
                      </tr>
                      <tr className="hover:bg-zinc-50 dark:hover:bg-zinc-800/40">
                        <td className="p-3.5 font-bold text-zinc-900 dark:text-white">Presence &amp; Composure</td>
                        <td className="p-3.5 text-emerald-600 dark:text-emerald-400">Confident appearance, clean/neat uniform, strong eye focus, good manners.</td>
                        <td className="p-3.5 text-brand-red">Nervous/scared appearance, incorrect eye focus, supporting pelvis with hand for kicks.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Coordinator Commands - Single Elimination Table */}
              <div className="p-6 sm:p-8 rounded-[14px] bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-md space-y-4">
                <h4 className="text-base font-black uppercase text-zinc-900 dark:text-white tracking-tight">
                  Coordinator Commands Protocol (Single Elimination Matches)
                </h4>
                <div className="overflow-x-auto rounded-xl border border-zinc-200 dark:border-zinc-800">
                  <table className="w-full text-left border-collapse text-xs">
                    <thead>
                      <tr className="bg-zinc-100 dark:bg-zinc-800/90 text-zinc-900 dark:text-white font-mono uppercase text-[11px]">
                        <th className="p-3">Sequence Step</th>
                        <th className="p-3">Bow-In &amp; First Poomsae</th>
                        <th className="p-3">Second Poomsae Command</th>
                        <th className="p-3">Court Protocol</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800 font-light">
                      {singleEliminationCommands.map((cmd, idx) => (
                        <tr key={idx} className="hover:bg-zinc-50 dark:hover:bg-zinc-800/40">
                          <td className="p-3 font-bold text-zinc-900 dark:text-white whitespace-nowrap">{cmd.step}</td>
                          <td className="p-3 font-mono text-brand-red">{cmd.firstPoomsae}</td>
                          <td className="p-3 font-mono text-blue-500">{cmd.secondPoomsae}</td>
                          <td className="p-3 text-zinc-500">{cmd.protocol}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Slow Movements Timing Tables with * and ** markers */}
              <div className="p-6 sm:p-8 rounded-[14px] bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-md space-y-6">
                <h4 className="text-base font-black uppercase text-zinc-900 dark:text-white tracking-tight">
                  Slow Movement Timing Specifications (5–8s Window vs 8s Fixed)
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
                          <th className="p-3">Stance (Seogi)</th>
                          <th className="p-3">Technique Movement</th>
                          <th className="p-3">Duration</th>
                          <th className="p-3">Notes</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800/60 font-light">
                        {slowMovements5to8s.map((mov, idx) => (
                          <tr key={idx} className="hover:bg-zinc-50 dark:hover:bg-zinc-800/40">
                            <td className="p-3 font-bold text-zinc-900 dark:text-white">{mov.poomsae}</td>
                            <td className="p-3 font-mono text-zinc-500">{mov.stance}</td>
                            <td className="p-3 text-zinc-700 dark:text-zinc-300">{mov.technique}</td>
                            <td className="p-3 font-mono font-bold text-brand-red">{mov.duration}</td>
                            <td className="p-3 text-zinc-400 font-mono text-[10px]">{mov.note}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <span className="text-[10px] text-zinc-400 block font-mono">* = Changed from 8 seconds to 5–8 recommended seconds.</span>
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
                          <th className="p-3">Stance (Seogi)</th>
                          <th className="p-3">Technique Movement</th>
                          <th className="p-3">Duration</th>
                          <th className="p-3">Notes</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800/60 font-light">
                        {slowMovements8s.map((mov, idx) => (
                          <tr key={idx} className="hover:bg-zinc-50 dark:hover:bg-zinc-800/40">
                            <td className="p-3 font-bold text-zinc-900 dark:text-white">{mov.poomsae}</td>
                            <td className="p-3 font-mono text-zinc-500">{mov.stance}</td>
                            <td className="p-3 text-zinc-700 dark:text-zinc-300">{mov.technique}</td>
                            <td className="p-3 font-mono font-bold text-purple-500">{mov.duration}</td>
                            <td className="p-3 text-zinc-400 font-mono text-[10px]">{mov.note}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <span className="text-[10px] text-zinc-400 block font-mono">
                    * = Combined movements that total 8 seconds &bull; ** = Changed from 5 seconds to 8 recommended seconds.
                  </span>
                </div>
              </div>

              {/* ============================================================ */}
              {/* 9. REFEREE SCORING GUIDELINES: TECHNIQUE ACCURACY & DEDUCTIONS (-0.1) */}
              {/* ============================================================ */}
              <div className="p-6 sm:p-8 rounded-[14px] bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-md space-y-6">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase bg-brand-red text-white">
                      Section 9 &bull; Referee Guidelines
                    </span>
                    <span className="text-xs font-mono text-zinc-400">-0.1 Minor Deduction per Technical Fault</span>
                  </div>
                  <h4 className="text-base sm:text-lg font-black uppercase text-zinc-900 dark:text-white tracking-tight">
                    Technique Accuracy &amp; Biomechanical Deduction Standards
                  </h4>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 text-xs">
                  {/* 9.1 Stances (Seogi) */}
                  <div className="p-5 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-3">
                    <strong className="text-xs font-mono font-bold text-brand-red uppercase block">
                      9.1 Stances (Seogi) Accuracy Standards (-0.1 Faults)
                    </strong>
                    <div className="space-y-2 text-zinc-600 dark:text-zinc-400 font-light">
                      <div className="p-2.5 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 space-y-0.5">
                        <strong className="text-zinc-900 dark:text-white block font-bold">Moa Seogi (Closed):</strong>
                        <span>Feet fully together, toes forward, legs straight. Deduct -0.1 if toes point outward or gap exists.</span>
                      </div>
                      <div className="p-2.5 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 space-y-0.5">
                        <strong className="text-zinc-900 dark:text-white block font-bold">Naranhi Seogi (Parallel):</strong>
                        <span>Inner edges parallel, exactly 1 foot-length apart. Deduct -0.1 if too wide/narrow or feet turn.</span>
                      </div>
                      <div className="p-2.5 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 space-y-0.5">
                        <strong className="text-zinc-900 dark:text-white block font-bold">Ap Seogi (Walking):</strong>
                        <span>3 foot-lengths long; back foot 30°, inner edges straight, 50/50 weight. Deduct -0.1 if back foot &gt;30° or out of line.</span>
                      </div>
                      <div className="p-2.5 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 space-y-0.5">
                        <strong className="text-zinc-900 dark:text-white block font-bold">Apkubi (Forward):</strong>
                        <span>4–4.5 foot-lengths, 1–2 fists width; front knee bent, back foot 30°, 70/30 weight. Deduct -0.1 if heel lifts or back foot &gt;30°.</span>
                      </div>
                      <div className="p-2.5 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 space-y-0.5">
                        <strong className="text-zinc-900 dark:text-white block font-bold">Dwitkubi (Back):</strong>
                        <span>3 foot-lengths; rear foot 90° "L" shape, 30/70 weight, vertical alignment. Deduct -0.1 if rear foot deviates from 90° or leans.</span>
                      </div>
                      <div className="p-2.5 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 space-y-0.5">
                        <strong className="text-zinc-900 dark:text-white block font-bold">Beom &amp; Hakdari Seogi:</strong>
                        <span>Beom: rear foot 30°, 90-100% weight, ball of front foot. Hakdari: inner arc on knee. Deduct -0.1 if front heel touches or foot drops.</span>
                      </div>
                    </div>
                  </div>

                  {/* 9.2 Blocks (Makki) */}
                  <div className="p-5 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-3">
                    <strong className="text-xs font-mono font-bold text-blue-500 uppercase block">
                      9.2 Blocks (Makki) Technical Standards (-0.1 Faults)
                    </strong>
                    <div className="space-y-2 text-zinc-600 dark:text-zinc-400 font-light">
                      <div className="p-2.5 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 space-y-0.5">
                        <strong className="text-zinc-900 dark:text-white block font-bold">Arae Makki (Low Block):</strong>
                        <span>Hammer fist from shoulder across belt, finishing 2 fists from thigh. Deduct -0.1 if bent elbow or &gt;2 fists / &lt;1 fist.</span>
                      </div>
                      <div className="p-2.5 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 space-y-0.5">
                        <strong className="text-zinc-900 dark:text-white block font-bold">Olgul Makki (High Block):</strong>
                        <span>Rises across belt, wrist centered 1 fist above forehead at upward angle. Deduct -0.1 if too close/far or flat.</span>
                      </div>
                      <div className="p-2.5 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 space-y-0.5">
                        <strong className="text-zinc-900 dark:text-white block font-bold">Momtong &amp; Bakkat Makki:</strong>
                        <span>Fist from shoulder to solar plexus, arm 90°–120°. Bakkat: chambers near reaction elbow. Deduct -0.1 if angle &lt;90°/&gt;120° or wrist bends.</span>
                      </div>
                      <div className="p-2.5 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 space-y-0.5">
                        <strong className="text-zinc-900 dark:text-white block font-bold">Sonnal &amp; Hansonnal Makki:</strong>
                        <span>Double knifehand: primary outer block, assisting hand palm-up 1 fist below solar plexus. Deduct -0.1 if assisting hand off-center.</span>
                      </div>
                    </div>
                  </div>

                  {/* 9.3 Punches & Strikes */}
                  <div className="p-5 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-3">
                    <strong className="text-xs font-mono font-bold text-amber-500 uppercase block">
                      9.3 Punches &amp; Strikes Technical Standards (-0.1 Faults)
                    </strong>
                    <div className="space-y-2 text-zinc-600 dark:text-zinc-400 font-light">
                      <div className="p-2.5 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 space-y-0.5">
                        <strong className="text-zinc-900 dark:text-white block font-bold">Baro &amp; Bandae Jireugi:</strong>
                        <span>Originates from hip, twisting at impact to strike solar plexus with 2 knuckles. Deduct -0.1 if off-center or flexed wrist.</span>
                      </div>
                      <div className="p-2.5 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 space-y-0.5">
                        <strong className="text-zinc-900 dark:text-white block font-bold">Deungjumeok Ap Chigi:</strong>
                        <span>Chambers under opposite armpit, snaps forward vertically to philtrum at ~100° angle. Deduct -0.1 if too high/low or off-center.</span>
                      </div>
                      <div className="p-2.5 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 space-y-0.5">
                        <strong className="text-zinc-900 dark:text-white block font-bold">Palkup Dollyo &amp; Yop Chigi:</strong>
                        <span>Horizontal elbow hook to jaw supported by palm; side elbow strike in riding stance with knuckles against open palm.</span>
                      </div>
                    </div>
                  </div>

                  {/* 9.4 Kicks (Chagi) */}
                  <div className="p-5 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-3">
                    <strong className="text-xs font-mono font-bold text-emerald-500 uppercase block">
                      9.4 Kicks (Chagi) Technical Standards (-0.1 Faults)
                    </strong>
                    <div className="space-y-2 text-zinc-600 dark:text-zinc-400 font-light">
                      <div className="p-2.5 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 space-y-0.5">
                        <strong className="text-zinc-900 dark:text-white block font-bold">Ap Chagi (Front Kick):</strong>
                        <span>Chamber to chest, strike with Apchook (ball of foot) with toes pulled back, re-chamber. Deduct -0.1 if pointed toes or unbent chamber.</span>
                      </div>
                      <div className="p-2.5 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 space-y-0.5">
                        <strong className="text-zinc-900 dark:text-white block font-bold">Dollyo Chagi (Roundhouse):</strong>
                        <span>Supporting foot pivots till toes face back, hip turns horizontal, instep/ball strike to face. Deduct -0.1 if insufficient pivot or vertical arc.</span>
                      </div>
                      <div className="p-2.5 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 space-y-0.5">
                        <strong className="text-zinc-900 dark:text-white block font-bold">Yop Chagi (Side Kick):</strong>
                        <span>Supporting foot 180° back, shoulder-hip-foot aligned, Balnal (foot knife) strike forming "Y" shape. Deduct -0.1 if flat sole or bent knee.</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* ============================================================ */}
              {/* 10. MASTER GLOSSARY OF RECOGNIZED TERMINOLOGY & 14 BASIC MOVES */}
              {/* ============================================================ */}
              <div className="p-6 sm:p-8 rounded-[14px] bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-md space-y-6">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase bg-purple-500 text-white">
                      Section 10 &bull; Canonical Terminology
                    </span>
                    <span className="text-xs font-mono text-zinc-400">Kukkiwon &bull; WT Official Nomenclature</span>
                  </div>
                  <h4 className="text-base sm:text-lg font-black uppercase text-zinc-900 dark:text-white tracking-tight">
                    Master Glossary &amp; The 14 Fundamental Basic Movements
                  </h4>
                </div>

                {/* Stances, Blocks, Punches 3-Col Glossary */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-mono">
                  {/* 10.1 Stances */}
                  <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-2">
                    <strong className="text-brand-red font-bold uppercase block text-xs">
                      10.1 Stances (Seogi) — 12 Terms
                    </strong>
                    <ul className="space-y-1 text-zinc-600 dark:text-zinc-400 text-[11px] leading-relaxed">
                      <li>&bull; <strong>Naranhi Seogi:</strong> Parallel Stance</li>
                      <li>&bull; <strong>Ap Seogi:</strong> Walking Stance</li>
                      <li>&bull; <strong>Apkubi:</strong> Forward Stance</li>
                      <li>&bull; <strong>Dwitkubi:</strong> Back Stance</li>
                      <li>&bull; <strong>Oreun / Wen Seogi:</strong> Right / Left Stance</li>
                      <li>&bull; <strong>Kkoa Seogi:</strong> Crossed (Dwikkoa / Apkkoa)</li>
                      <li>&bull; <strong>Beom Seogi:</strong> Tiger Stance</li>
                      <li>&bull; <strong>Moa Seogi:</strong> Closed Stance</li>
                      <li>&bull; <strong>Juchum Seogi:</strong> Riding Stance</li>
                      <li>&bull; <strong>Hakdari Seogi:</strong> Crane Stance</li>
                      <li>&bull; <strong>Kyotdari Seogi:</strong> Assisting Stance</li>
                      <li>&bull; <strong>Ogeum Seogi:</strong> Crossed Crane Stance</li>
                    </ul>
                  </div>

                  {/* 10.2 Blocks */}
                  <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-2">
                    <strong className="text-blue-500 font-bold uppercase block text-xs">
                      10.2 Blocks (Makki) — 21 Terms
                    </strong>
                    <ul className="space-y-1 text-zinc-600 dark:text-zinc-400 text-[11px] leading-relaxed">
                      <li>&bull; <strong>Arae Makki:</strong> Low Block</li>
                      <li>&bull; <strong>Momtong (An) Makki:</strong> Middle Block</li>
                      <li>&bull; <strong>Olgul Makki:</strong> High Block</li>
                      <li>&bull; <strong>Momtong Bakkat Makki:</strong> Outer Middle Block</li>
                      <li>&bull; <strong>Sonnal Makki:</strong> Knifehand Middle Block</li>
                      <li>&bull; <strong>Sonnal Arae Makki:</strong> Knifehand Low Block</li>
                      <li>&bull; <strong>Hansonnal Makki:</strong> Single Knifehand Block</li>
                      <li>&bull; <strong>Kawi Makki:</strong> Scissors Block</li>
                      <li>&bull; <strong>Momtong Hecho Makki:</strong> Double Outer Block</li>
                      <li>&bull; <strong>Otkoreo Arae Makki:</strong> X Low Block</li>
                      <li>&bull; <strong>Wesanteul Makki:</strong> Single Mountain Block</li>
                      <li>&bull; <strong>Keumgang Makki:</strong> Diamond Middle Block</li>
                    </ul>
                  </div>

                  {/* 10.3 Punches & Strikes */}
                  <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-2">
                    <strong className="text-amber-500 font-bold uppercase block text-xs">
                      10.3 Strikes &amp; Thrusts — 21 Terms
                    </strong>
                    <ul className="space-y-1 text-zinc-600 dark:text-zinc-400 text-[11px] leading-relaxed">
                      <li>&bull; <strong>Baro / Bandae Jireugi:</strong> Punch / Reverse Punch</li>
                      <li>&bull; <strong>Dujumeok Jecho Jireugi:</strong> Double Uppercut</li>
                      <li>&bull; <strong>Dankyo Teok Jireugi:</strong> Pulling Uppercut</li>
                      <li>&bull; <strong>Deungjumeok Ap Chigi:</strong> Backfist Front Strike</li>
                      <li>&bull; <strong>Palkup Dollyo Chigi:</strong> Elbow Hook Strike</li>
                      <li>&bull; <strong>Palkup Yop Chigi:</strong> Elbow Side Strike</li>
                      <li>&bull; <strong>Hansonnal Mok Chigi:</strong> Knifehand Neck Strike</li>
                      <li>&bull; <strong>Jebipoom Mok Chigi:</strong> Swallow Neck Strike</li>
                      <li>&bull; <strong>Mejumeok Naeryo Chigi:</strong> Hammer Fist Strike</li>
                      <li>&bull; <strong>Pyonsonkkeut Sewo:</strong> Spearhand Thrust</li>
                      <li>&bull; <strong>Palkup Pyojeok Chigi:</strong> Target Elbow Strike</li>
                    </ul>
                  </div>
                </div>

                {/* 10.4 Fourteen (14) Fundamental Basic Movements Sequential Table */}
                <div className="space-y-2">
                  <span className="text-xs font-mono font-bold uppercase text-zinc-900 dark:text-white block">
                    10.4 Fourteen (14) Fundamental Basic Movements (Kukkiwon Standard)
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 text-xs font-mono">
                    {fourteenMovements.map((mv) => (
                      <div key={mv.num} className="p-2.5 rounded-lg bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 flex items-start gap-2">
                        <span className="w-5 h-5 rounded bg-zinc-200 dark:bg-zinc-800 text-zinc-900 dark:text-white flex items-center justify-center font-bold text-[10px] shrink-0">
                          {mv.num}
                        </span>
                        <div className="space-y-0.5">
                          <div className="flex items-center justify-between gap-1">
                            <strong className="text-zinc-900 dark:text-white text-[11px] block font-bold leading-tight">{mv.name}</strong>
                            <span className="text-[10px] text-zinc-500 font-bold">{mv.korean}</span>
                          </div>
                          <span className="text-zinc-500 text-[10px] block font-light leading-tight">{mv.desc}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* REFEREE & SYSTEM DEDUCTIONS / GAM-JEOM PENALTIES */}
              <div className="p-6 sm:p-8 rounded-[14px] bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-md space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-amber-500" />
                    <h4 className="text-base font-black uppercase text-zinc-900 dark:text-white tracking-tight">
                      Referee / System Deductions &amp; Gam-Jeom Penalties
                    </h4>
                  </div>
                  <span className="text-xs font-mono text-zinc-400">Deducted Off Final Score</span>
                </div>

                <div className="overflow-x-auto rounded-xl border border-zinc-200 dark:border-zinc-800">
                  <table className="w-full text-left border-collapse text-xs">
                    <thead>
                      <tr className="bg-zinc-100 dark:bg-zinc-800/90 text-zinc-900 dark:text-white font-mono uppercase text-[10px]">
                        <th className="p-3">Infraction</th>
                        <th className="p-3 text-brand-red">Penalty</th>
                        <th className="p-3">Mechanism &amp; Operational Context</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800/60 font-mono text-[11px]">
                      <tr className="hover:bg-zinc-50 dark:hover:bg-zinc-800/40">
                        <td className="p-3 font-bold text-zinc-900 dark:text-white">Boundary Violation</td>
                        <td className="p-3 font-bold text-brand-red">-0.3</td>
                        <td className="p-3 text-zinc-500">Deducted when <strong>both feet cross completely outside</strong> the 10m &times; 10m contest boundary line.</td>
                      </tr>
                      <tr className="hover:bg-zinc-50 dark:hover:bg-zinc-800/40">
                        <td className="p-3 font-bold text-zinc-900 dark:text-white">Time Limit Violation</td>
                        <td className="p-3 font-bold text-brand-red">-0.3</td>
                        <td className="p-3 text-zinc-500">Performance time must fall between <strong>30 and 90 seconds</strong> for Recognized Poomsae. Finishing under 30s or over 90s incurs deduction.</td>
                      </tr>
                      <tr className="hover:bg-zinc-50 dark:hover:bg-zinc-800/40">
                        <td className="p-3 font-bold text-zinc-900 dark:text-white">Restarting Performance</td>
                        <td className="p-3 font-bold text-brand-red">-0.6</td>
                        <td className="p-3 text-zinc-500">If athlete freezes or performs wrong form, they may request a restart. Accuracy resets to a <strong>maximum baseline of 3.4</strong>; timer continues running.</td>
                      </tr>
                      <tr className="hover:bg-zinc-50 dark:hover:bg-zinc-800/40">
                        <td className="p-3 font-bold text-zinc-900 dark:text-white">Gam-Jeom (Minor)</td>
                        <td className="p-3 font-bold text-brand-red">-0.3 to -0.6</td>
                        <td className="p-3 text-zinc-500">Unapproved tape/bandages without medical note, uniform tampering, or minor procedural delays.</td>
                      </tr>
                      <tr className="hover:bg-zinc-50 dark:hover:bg-zinc-800/40">
                        <td className="p-3 font-bold text-zinc-900 dark:text-white">Gam-Jeom (Major / Misconduct)</td>
                        <td className="p-3 font-bold text-rose-600">-1.0 or Disqualification</td>
                        <td className="p-3 text-zinc-500">Unsportsmanlike conduct, intentional interference with officials, coach shouting audible technical instructions during form, profanity.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* DEEP-CHECK PRACTICAL SCENARIOS & HOW JUDGES SCORE */}
              <div className="p-6 sm:p-8 rounded-[14px] bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-md space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <HelpCircle className="w-5 h-5 text-blue-500" />
                    <h4 className="text-base font-black uppercase text-zinc-900 dark:text-white tracking-tight">
                      Deep-Check Practical Scenarios &amp; Judges Scoring Rulings
                    </h4>
                  </div>
                  <span className="text-xs font-mono text-zinc-400">5 Canonical Case Studies</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono">
                  {poomsaeCases.map((pc, idx) => (
                    <div key={idx} className={`p-4 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-2 ${idx === 4 ? 'md:col-span-2' : ''}`}>
                      <div className="flex items-center justify-between">
                        <strong className={`${pc.color} font-bold text-xs uppercase`}>{pc.title}</strong>
                        <span className={`px-2 py-0.5 rounded ${pc.color === 'text-brand-red' ? 'bg-brand-red/10' : 'bg-blue-500/10'} text-[10px] font-bold`}>
                          {pc.penalty}
                        </span>
                      </div>
                      <p className="text-zinc-600 dark:text-zinc-400 font-light text-[11px] leading-relaxed">
                        <strong>Scenario:</strong> {pc.scenario}
                      </p>
                      <div className="p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-[11px] space-y-0.5">
                        {pc.deductions.map((ded, dIdx) => (
                          <div key={dIdx}>&bull; {ded}</div>
                        ))}
                        <div className="font-bold pt-0.5">&rarr; {pc.total}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ================================================================ */}
          {/* SUB-SECTION 3: FREESTYLE POOMSAE RULES & MANDATORY ACROBATICS */}
          {/* ================================================================ */}
          {poomsaeSubCategory === 'freestyle' && (
            <div className="space-y-6 animate-fade-in">
              {/* Technical 6.0 + Presentation 4.0 Grid */}
              <div className="p-6 sm:p-8 rounded-[14px] bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-md space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg sm:text-xl font-black uppercase text-zinc-900 dark:text-white tracking-tight">
                    {ruleT.poomsaeFreestyle.title}
                  </h3>
                  <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold bg-amber-500/10 text-amber-500">
                    #1 to #5 Must Be Performed in Sequence
                  </span>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 text-xs font-mono">
                  <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-2">
                    <span className="text-brand-red font-bold uppercase block">Technical Score: 6.0 Max</span>
                    <ul className="space-y-1 text-zinc-600 dark:text-zinc-400 font-light list-disc pl-4">
                      <li>Skills #1 through #5: 1.0 pt each (executed in chronological sequence)</li>
                      <li>Skill #6: Basic Movements &amp; Practicability (1.0 pt: 0.0 to 1.0 in 0.1 increments)</li>
                      <li>Mandatory Stances: Dwitkubi, Beom, Hakdari (-0.3 per missing stance)</li>
                    </ul>
                  </div>

                  <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-2">
                    <span className="text-purple-500 font-bold uppercase block">Presentation Score: 4.0 Max</span>
                    <ul className="space-y-1 text-zinc-600 dark:text-zinc-400 font-light list-disc pl-4">
                      <li>Creativeness (1.0 pt) &bull; Harmony &amp; Sync (1.0 pt)</li>
                      <li>Expression of Energy (1.0 pt) &bull; Music &amp; Choreography (1.0 pt)</li>
                      <li>Duration: 90 to 100s strictly (-0.3 penalty for overtime/undertime)</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* WT OFFICIAL V4 FREESTYLE POOMSAE SCORE SHEET SIMULATOR */}
              <FreestylePoomsaeScoreSimulator />

              {/* Exact Official Score Table & Evaluation Procedure */}
              <div className="p-6 sm:p-8 rounded-[14px] bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-md space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase bg-brand-red text-white">
                        Official WT Evaluation Sheet
                      </span>
                      <span className="text-xs font-mono text-zinc-400">No Run-up Step Limit</span>
                    </div>
                    <h4 className="text-lg sm:text-xl font-black uppercase text-zinc-900 dark:text-white tracking-tight">
                      {activeSkill.number} {activeSkill.name} ({activeSkill.koreanName})
                    </h4>
                  </div>

                  {/* Skills Switcher Pills */}
                  <div className="flex flex-wrap items-center gap-1.5">
                    {freestyleTechnicalSkills.map((sk) => (
                      <button
                        key={sk.id}
                        onClick={() => setActiveFreestyleSkillId(sk.id)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold uppercase transition-all cursor-pointer ${
                          activeFreestyleSkillId === sk.id
                            ? 'bg-brand-red text-white shadow-brand-glow'
                            : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-white'
                        }`}
                      >
                        {sk.number}
                      </button>
                    ))}
                  </div>
                </div>

                {/* EXACT OFFICIAL SCORE TABLE */}
                <div className="overflow-x-auto rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-inner">
                  <table className="w-full text-center border-collapse text-xs font-mono">
                    <thead>
                      <tr className="bg-zinc-100 dark:bg-zinc-800/90 text-zinc-900 dark:text-white uppercase font-bold text-[11px]">
                        <th colSpan={7} className="p-3 border-r border-zinc-200 dark:border-zinc-700 bg-zinc-200/60 dark:bg-zinc-800">
                          Base Score — {activeSkill.name} (0.1 to 0.7 Max)
                        </th>
                        <th colSpan={3} className="p-3 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                          Addition / Height Bonus (0.1 to 0.3 Max)
                        </th>
                      </tr>
                      <tr className="bg-zinc-50 dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300">
                        <td className="p-2.5 border-r border-zinc-200 dark:border-zinc-800">0.1</td>
                        <td className="p-2.5 border-r border-zinc-200 dark:border-zinc-800">0.2</td>
                        <td className="p-2.5 border-r border-zinc-200 dark:border-zinc-800">0.3</td>
                        <td className="p-2.5 border-r border-zinc-200 dark:border-zinc-800">0.4</td>
                        <td className="p-2.5 border-r border-zinc-200 dark:border-zinc-800">0.5</td>
                        <td className="p-2.5 border-r border-zinc-200 dark:border-zinc-800">0.6</td>
                        <td className="p-2.5 border-r-2 border-zinc-300 dark:border-zinc-700 font-bold text-brand-red">0.7</td>

                        {activeSkill.bonusTiers.map((b, idx) => (
                          <td key={idx} className="p-2.5 font-bold text-emerald-600 dark:text-emerald-400 border-r last:border-r-0 border-zinc-200 dark:border-zinc-800">
                            {b.label} ({b.points})
                          </td>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white dark:bg-zinc-950 text-left font-light text-xs text-zinc-600 dark:text-zinc-400">
                        <td colSpan={7} className="p-4 border-r-2 border-zinc-300 dark:border-zinc-700 leading-relaxed align-top">
                          <strong className="text-zinc-900 dark:text-white block font-bold mb-1">
                            Master of the Performance:
                          </strong>
                          Basic score for the performance of {activeSkill.name.toLowerCase()} ranges between <strong>0.0 and 0.7 point</strong> according to balance, power, landing, and technical accuracy of execution.
                        </td>
                        <td colSpan={3} className="p-4 bg-emerald-500/5 leading-relaxed align-top">
                          <strong className="text-emerald-600 dark:text-emerald-400 block font-bold mb-1">
                            Height / Level Bonus Points:
                          </strong>
                          Add <strong>0.1, 0.2, 0.3 points</strong> to the given basic score according to the middle line height, rotation gradient, or quantity of execution.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* 3-STEP REFEREE EVALUATION PROCEDURE */}
                <div className="p-5 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-3">
                  <span className="text-xs font-mono font-bold uppercase text-zinc-900 dark:text-white block">
                    3-Step Technical Referee Decision Protocol:
                  </span>
                  
                  <div className="grid sm:grid-cols-3 gap-3 text-xs">
                    <div className="p-3.5 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 space-y-1">
                      <span className="w-5 h-5 rounded-md bg-brand-red text-white flex items-center justify-center font-mono font-black text-[10px]">
                        1
                      </span>
                      <strong className="text-zinc-900 dark:text-white block font-bold mt-1">
                        Identify Middle Line Height / Bonus Tier
                      </strong>
                      <p className="text-zinc-500 text-[11px] font-light leading-relaxed">
                        Determine height of middle line between highest point of kicking foot and lowest point of bottom foot: <strong>Body (.1) / Face (.2) / Over Face (.3)</strong>.
                      </p>
                    </div>

                    <div className="p-3.5 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 space-y-1">
                      <span className="w-5 h-5 rounded-md bg-brand-red text-white flex items-center justify-center font-mono font-black text-[10px]">
                        2
                      </span>
                      <strong className="text-zinc-900 dark:text-white block font-bold mt-1">
                        Choose Base Score &amp; Apply Off-Balance
                      </strong>
                      <p className="text-zinc-500 text-[11px] font-light leading-relaxed">
                        Evaluate execution, power, and landing. Apply off-balance deduction (<strong>-0.1 / -0.2 / -0.3</strong> or more from base score).
                      </p>
                    </div>

                    <div className="p-3.5 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 space-y-1">
                      <span className="w-5 h-5 rounded-md bg-brand-red text-white flex items-center justify-center font-mono font-black text-[10px]">
                        3
                      </span>
                      <strong className="text-zinc-900 dark:text-white block font-bold mt-1">
                        Verify Belt Height Mandatory Rule
                      </strong>
                      <p className="text-zinc-500 text-[11px] font-light leading-relaxed">
                        Side kicks must be delivered at least at <strong>belt height</strong>; kicks below belt height strictly receive a score of <strong>0.0 points</strong>.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mandatory Board Breaking & Assistance Matrix Tables */}
              <div className="grid sm:grid-cols-2 gap-6">
                {/* Board Breaking (Mixed Team Only) */}
                <div className="p-6 rounded-[14px] bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-md space-y-3">
                  <div className="flex items-center justify-between">
                    <h4 className="text-base font-black uppercase text-zinc-900 dark:text-white tracking-tight">
                      {ruleT.poomsaeFreestyle.breakingTitle}
                    </h4>
                    <span className="text-[10px] font-mono text-amber-500 font-bold">5 to 9 Boards Max</span>
                  </div>
                  <div className="overflow-x-auto rounded-xl border border-zinc-200 dark:border-zinc-800">
                    <table className="w-full text-left border-collapse text-xs">
                      <thead>
                        <tr className="bg-zinc-100 dark:bg-zinc-800 font-mono uppercase text-[10px]">
                          <th className="p-2.5">Technical Skill</th>
                          <th className="p-2.5">Min Boards</th>
                          <th className="p-2.5">Max Boards</th>
                          <th className="p-2.5">Rule Protocol</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800 font-light">
                        {boardBreakingRequirements.map((br, idx) => (
                          <tr key={idx} className="hover:bg-zinc-50 dark:hover:bg-zinc-800/40">
                            <td className="p-2.5 font-bold text-zinc-900 dark:text-white">{br.skill}</td>
                            <td className="p-2.5 font-mono text-emerald-500">{br.minBoards}</td>
                            <td className="p-2.5 font-mono text-zinc-400">{br.maxBoards}</td>
                            <td className="p-2.5 text-zinc-500 text-[11px]">{br.totalRule}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <span className="text-[10px] text-zinc-400 block font-mono">
                    * Unsuccessful break = Base score only (no bonus). Partial breaks reduce base score -0.1 per unbroken board.
                  </span>
                </div>

                {/* Assistance Authorization Matrix */}
                <div className="p-6 rounded-[14px] bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-md space-y-3">
                  <h4 className="text-base font-black uppercase text-zinc-900 dark:text-white tracking-tight">
                    {ruleT.poomsaeFreestyle.assistanceTitle}
                  </h4>
                  <div className="overflow-x-auto rounded-xl border border-zinc-200 dark:border-zinc-800">
                    <table className="w-full text-left border-collapse text-xs">
                      <thead>
                        <tr className="bg-zinc-100 dark:bg-zinc-800 font-mono uppercase text-[10px]">
                          <th className="p-2.5">Skill Action</th>
                          <th className="p-2.5">Individual / Pair</th>
                          <th className="p-2.5">Mixed Team</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800 font-light">
                        {assistanceAuthorizationMatrix.map((as, idx) => (
                          <tr key={idx} className="hover:bg-zinc-50 dark:hover:bg-zinc-800/40">
                            <td className="p-2.5 font-bold text-zinc-900 dark:text-white">{as.action}</td>
                            <td className="p-2.5 font-mono text-brand-red">{as.individualPair}</td>
                            <td className="p-2.5 font-mono text-emerald-500">{as.mixedTeam}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <span className="text-[10px] text-zinc-400 block font-mono">
                    * Board holding sticks allowed ONLY for acrobatic board breaking (max 3 poles prepared by team).
                  </span>
                </div>
              </div>

              {/* 12-Point Deduction Matrix Table */}
              <div className="p-6 sm:p-8 rounded-[14px] bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-md space-y-4">
                <h4 className="text-base font-black uppercase text-zinc-900 dark:text-white tracking-tight">
                  {ruleT.poomsaeFreestyle.deductionsTitle}
                </h4>
                <div className="overflow-x-auto rounded-xl border border-zinc-200 dark:border-zinc-800">
                  <table className="w-full text-left border-collapse text-xs">
                    <thead>
                      <tr className="bg-zinc-100 dark:bg-zinc-800/90 text-zinc-900 dark:text-white font-mono uppercase text-[11px]">
                        <th className="p-3">Violation / Fault</th>
                        <th className="p-3">Deduction Value</th>
                        <th className="p-3">Category Deducted From</th>
                        <th className="p-3">Context &amp; Rules</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800/60 font-light">
                      {freestyleDeductions.map((fd, idx) => (
                        <tr key={idx} className="hover:bg-zinc-50 dark:hover:bg-zinc-800/40">
                          <td className="p-3 font-bold text-zinc-900 dark:text-white">{fd.violation}</td>
                          <td className="p-3 font-mono font-black text-brand-red whitespace-nowrap">{fd.deduction}</td>
                          <td className="p-3 font-mono text-zinc-700 dark:text-zinc-300">{fd.category}</td>
                          <td className="p-3 text-zinc-500">{fd.notes}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

        </div>
      )}

      {/* ==================================================================== */}
      {/* ==================================================================== */}
      {/* 3. MASTER CATEGORY: HANMADANG (BREAKING & FESTIVAL PREVIEW) */}
      {/* ==================================================================== */}
      {masterCategory === 'hanmadang' && (
        <div className="space-y-6 animate-fade-in">
          <div className="p-6 sm:p-8 rounded-[14px] bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-md space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold uppercase bg-amber-500/20 text-amber-600 dark:text-amber-400 border border-amber-500/30 inline-block mb-1">
                  {ruleT.previewBadge}
                </span>
                <h3 className="text-lg sm:text-xl font-black uppercase text-zinc-900 dark:text-white tracking-tight">
                  {ruleT.hanmadang.title}
                </h3>
              </div>
              <span className="text-xs font-mono text-zinc-400">Kukkiwon Sanctioned</span>
            </div>

            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 font-light leading-relaxed">
              {ruleT.hanmadang.sub}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {hanmadangEventsData.map((he, idx) => (
                <div key={idx} className="p-5 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-3">
                  <span className="text-[10px] font-mono text-zinc-400 block">{he.koreanName}</span>
                  <h4 className="text-sm font-black uppercase text-zinc-900 dark:text-white">{he.eventGroup}</h4>
                  <div className="space-y-2 text-xs">
                    {he.events.map((ev, eIdx) => (
                      <div key={eIdx} className="p-2.5 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 space-y-0.5">
                        <strong className="text-zinc-900 dark:text-white block font-bold">{ev.name}</strong>
                        <span className="text-zinc-500 font-light block">{ev.criteria}</span>
                      </div>
                    ))}
                  </div>
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
                    {currentPdf.edition} &bull; {currentPdf.inForceDate} &bull; {currentPdf.pages} {ruleT.pdfModal.pageInfo}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setPdfZoom((prev) => Math.max(70, prev - 15))}
                  className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-200 hover:bg-zinc-200 cursor-pointer"
                  aria-label={ruleT.pdfModal.zoomOut}
                  title={ruleT.pdfModal.zoomOut}
                >
                  <ZoomOut className="w-4 h-4" />
                </button>
                <span className="text-xs font-mono font-bold px-1.5">{pdfZoom}%</span>
                <button
                  onClick={() => setPdfZoom((prev) => Math.min(160, prev + 15))}
                  className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-200 hover:bg-zinc-200 cursor-pointer"
                  aria-label={ruleT.pdfModal.zoomIn}
                  title={ruleT.pdfModal.zoomIn}
                >
                  <ZoomIn className="w-4 h-4" />
                </button>

                <a
                  href={currentPdf.fileUrl}
                  download={currentPdf.fileName}
                  className="px-3 py-1.5 rounded-lg bg-brand-red text-white text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-sm"
                >
                  <Download className="w-3.5 h-3.5" /> {ruleT.pdfModal.download}
                </a>

                <button
                  onClick={() => setIsPdfModalOpen(false)}
                  className="p-2 rounded-lg text-zinc-400 hover:text-zinc-900 dark:hover:text-white cursor-pointer ml-2"
                  aria-label={ruleT.pdfModal.close}
                  title={ruleT.pdfModal.close}
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

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
