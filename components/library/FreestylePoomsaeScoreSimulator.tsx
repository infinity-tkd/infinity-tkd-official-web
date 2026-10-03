'use client'

import * as React from 'react'
import {
  Award,
  CheckCircle2,
  AlertTriangle,
  RotateCcw,
  Printer,
  Timer,
  Play,
  Pause,
  HelpCircle,
  Sparkles,
  Zap,
  Target,
  ChevronDown,
  ChevronUp,
  Flame,
  ShieldAlert,
  Sliders,
  Compass,
  Layers,
  FileSpreadsheet,
} from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import {
  freestyleScoringI18n,
  compulsoryFootSkillRules,
  type CompulsoryFootSkillRule,
} from '@/data/library/freestyleScoringTranslations'

interface FootSkillState {
  basicScore: number // 0.0 to 0.7
  difficultyBonus: number // 0.0, 0.1, 0.2, 0.3
}

export function FreestylePoomsaeScoreSimulator() {
  const { language } = useLanguage()
  const lang = (language as 'en' | 'km' | 'zh' | 'ko') || 'en'
  const t = freestyleScoringI18n[lang] || freestyleScoringI18n.en

  // Metadata State
  const [courtNumber, setCourtNumber] = React.useState('Court 1')
  const [contestantInfo, setContestantInfo] = React.useState('#101 - Min-Jun Kim (KOR)')
  const [judgeName, setJudgeName] = React.useState('International Referee #4')
  const [judgeNation, setJudgeNation] = React.useState('WT Official')
  const [judgeSignature, setJudgeSignature] = React.useState('M. Kim (Confirmed)')

  // Mandatory Stances Checkboxes (Hakdari, Beom, Dwitkubi)
  const [hasHakdariSeogi, setHasHakdariSeogi] = React.useState(true)
  const [hasBeomSeogi, setHasBeomSeogi] = React.useState(true)
  const [hasDwitkubi, setHasDwitkubi] = React.useState(true)

  // 5 Compulsory Foot Techniques State
  const [footSkills, setFootSkills] = React.useState<Record<string, FootSkillState>>({
    'jumping-side-kick': { basicScore: 0.5, difficultyBonus: 0.3 },
    'multiple-kicks': { basicScore: 0.5, difficultyBonus: 0.3 },
    'spin-kick': { basicScore: 0.5, difficultyBonus: 0.3 },
    'consecutive-sparring': { basicScore: 0.5, difficultyBonus: 0.2 },
    'acrobatic-kick': { basicScore: 0.5, difficultyBonus: 0.3 },
  })

  // Basic Movements & Practicability (0.0 to 1.0)
  const [basicMovementsScore, setBasicMovementsScore] = React.useState<number>(0.8)

  // Technical Skills Deductions
  const [fallingDeductions, setFallingDeductions] = React.useState<number>(0)
  const [excessAcrobaticCount, setExcessAcrobaticCount] = React.useState<number>(0)

  // Presentation Criteria (0.0 to 1.0 each)
  const [creativityScore, setCreativityScore] = React.useState<number>(0.8)
  const [harmonyScore, setHarmonyScore] = React.useState<number>(0.8)
  const [energyScore, setEnergyScore] = React.useState<number>(0.9)
  const [musicChoreoScore, setMusicChoreoScore] = React.useState<number>(0.8)

  // Referee Deductions (Checklist)
  const [timePenalty, setTimePenalty] = React.useState<boolean>(false)
  const [boundaryCrossCount, setBoundaryCrossCount] = React.useState<number>(0)
  const [restartPenalty, setRestartPenalty] = React.useState<boolean>(false)

  // Interactive Stopwatch
  const [stopwatchSeconds, setStopwatchSeconds] = React.useState<number>(95)
  const [isTimerRunning, setIsTimerRunning] = React.useState<boolean>(false)
  const [showRulesModal, setShowRulesModal] = React.useState<boolean>(false)

  // Stopwatch timer effect
  React.useEffect(() => {
    let interval: NodeJS.Timeout | null = null
    if (isTimerRunning) {
      interval = setInterval(() => {
        setStopwatchSeconds((prev) => prev + 1)
      }, 1000)
    }
    return () => {
      if (interval) clearInterval(interval)
    }
  }, [isTimerRunning])

  // Auto-flag time penalty if outside 90s - 100s when timer is stopped
  const formatTimer = (sec: number) => {
    const mins = Math.floor(sec / 60)
    const remSec = sec % 60
    return `${mins}:${remSec < 10 ? '0' : ''}${remSec}`
  }

  // Mandatory Stances deduction: -0.3 for each missing stance
  const missingStancesCount =
    (hasHakdariSeogi ? 0 : 1) + (hasBeomSeogi ? 0 : 1) + (hasDwitkubi ? 0 : 1)
  const mandatoryStancesDeductionValue = missingStancesCount * 0.3

  // Total Technical Deductions
  const totalTechnicalDeductions =
    mandatoryStancesDeductionValue + fallingDeductions + excessAcrobaticCount * 0.3

  // 5 Foot techniques subtotal
  const footSkillsSubtotal = React.useMemo(() => {
    return Object.values(footSkills).reduce((acc, skill) => {
      return acc + Math.min(1.0, skill.basicScore + skill.difficultyBonus)
    }, 0)
  }, [footSkills])

  // Technical Skills Sub-Total (Max 6.0)
  const technicalSkillsSubtotal = Math.max(
    0,
    Math.min(6.0, footSkillsSubtotal + basicMovementsScore - totalTechnicalDeductions)
  )

  // Presentation Sub-Total (Max 4.0)
  const presentationSubtotal = Math.max(
    0,
    Math.min(
      4.0,
      creativityScore + harmonyScore + energyScore + musicChoreoScore
    )
  )

  // Referee Deductions
  const totalRefereeDeductions =
    (timePenalty ? 0.3 : 0) + boundaryCrossCount * 0.3 + (restartPenalty ? 0.6 : 0)

  // Total Score & Final Score
  const rawTotalScore = technicalSkillsSubtotal + presentationSubtotal
  const finalScore = Math.max(0, rawTotalScore - totalRefereeDeductions)

  // Handlers for Presets
  const applyPreset = (preset: 'gold' | 'silver' | 'penalty' | 'blank') => {
    if (preset === 'gold') {
      setContestantInfo('#101 - Min-Jun Kim (KOR) - World Champion')
      setHasHakdariSeogi(true)
      setHasBeomSeogi(true)
      setHasDwitkubi(true)
      setFootSkills({
        'jumping-side-kick': { basicScore: 0.6, difficultyBonus: 0.3 }, // Over Face
        'multiple-kicks': { basicScore: 0.6, difficultyBonus: 0.3 }, // 5 kicks
        'spin-kick': { basicScore: 0.6, difficultyBonus: 0.3 }, // 720 Face
        'consecutive-sparring': { basicScore: 0.6, difficultyBonus: 0.3 }, // High level
        'acrobatic-kick': { basicScore: 0.6, difficultyBonus: 0.3 }, // High level
      })
      setBasicMovementsScore(0.9)
      setFallingDeductions(0)
      setExcessAcrobaticCount(0)
      setCreativityScore(0.9)
      setHarmonyScore(0.9)
      setEnergyScore(0.9)
      setMusicChoreoScore(0.9)
      setTimePenalty(false)
      setBoundaryCrossCount(0)
      setRestartPenalty(false)
      setStopwatchSeconds(96)
    } else if (preset === 'silver') {
      setContestantInfo('#204 - Elena Rostova (AIN) - World Silver')
      setHasHakdariSeogi(true)
      setHasBeomSeogi(true)
      setHasDwitkubi(true)
      setFootSkills({
        'jumping-side-kick': { basicScore: 0.5, difficultyBonus: 0.2 }, // Face
        'multiple-kicks': { basicScore: 0.5, difficultyBonus: 0.2 }, // 4 kicks
        'spin-kick': { basicScore: 0.5, difficultyBonus: 0.2 }, // 540 Face
        'consecutive-sparring': { basicScore: 0.5, difficultyBonus: 0.2 }, // Mid level
        'acrobatic-kick': { basicScore: 0.5, difficultyBonus: 0.2 }, // Mid level
      })
      setBasicMovementsScore(0.8)
      setFallingDeductions(0)
      setExcessAcrobaticCount(0)
      setCreativityScore(0.8)
      setHarmonyScore(0.8)
      setEnergyScore(0.8)
      setMusicChoreoScore(0.8)
      setTimePenalty(false)
      setBoundaryCrossCount(0)
      setRestartPenalty(false)
      setStopwatchSeconds(93)
    } else if (preset === 'penalty') {
      setContestantInfo('#312 - Tyler Vance (USA) - Deduction Case')
      setHasHakdariSeogi(false) // Missing Hakdari Seogi (-0.3)
      setHasBeomSeogi(true)
      setHasDwitkubi(true)
      setFootSkills({
        'jumping-side-kick': { basicScore: 0.4, difficultyBonus: 0.2 },
        'multiple-kicks': { basicScore: 0.4, difficultyBonus: 0.1 },
        'spin-kick': { basicScore: 0.4, difficultyBonus: 0.2 },
        'consecutive-sparring': { basicScore: 0.4, difficultyBonus: 0.1 },
        'acrobatic-kick': { basicScore: 0.4, difficultyBonus: 0.2 },
      })
      setBasicMovementsScore(0.6)
      setFallingDeductions(0.3) // Loss of balance
      setExcessAcrobaticCount(0)
      setCreativityScore(0.7)
      setHarmonyScore(0.6)
      setEnergyScore(0.7)
      setMusicChoreoScore(0.6)
      setTimePenalty(true) // Overtime (-0.3)
      setBoundaryCrossCount(1) // 1 boundary exit (-0.3)
      setRestartPenalty(false)
      setStopwatchSeconds(104)
    } else {
      setContestantInfo('#000 - Competitor Name')
      setHasHakdariSeogi(true)
      setHasBeomSeogi(true)
      setHasDwitkubi(true)
      setFootSkills({
        'jumping-side-kick': { basicScore: 0.0, difficultyBonus: 0.0 },
        'multiple-kicks': { basicScore: 0.0, difficultyBonus: 0.0 },
        'spin-kick': { basicScore: 0.0, difficultyBonus: 0.0 },
        'consecutive-sparring': { basicScore: 0.0, difficultyBonus: 0.0 },
        'acrobatic-kick': { basicScore: 0.0, difficultyBonus: 0.0 },
      })
      setBasicMovementsScore(0.0)
      setFallingDeductions(0)
      setExcessAcrobaticCount(0)
      setCreativityScore(0.0)
      setHarmonyScore(0.0)
      setEnergyScore(0.0)
      setMusicChoreoScore(0.0)
      setTimePenalty(false)
      setBoundaryCrossCount(0)
      setRestartPenalty(false)
      setStopwatchSeconds(90)
    }
  }

  const handlePrint = () => {
    if (typeof window !== 'undefined') {
      window.print()
    }
  }

  // Grade badge color
  const getScoreColorClass = (score: number) => {
    if (score >= 9.0) return 'text-amber-500 bg-amber-500/10 border-amber-500/30'
    if (score >= 8.0) return 'text-emerald-500 bg-emerald-500/10 border-emerald-500/30'
    if (score >= 7.0) return 'text-blue-500 bg-blue-500/10 border-blue-500/30'
    return 'text-zinc-500 bg-zinc-500/10 border-zinc-500/30'
  }

  return (
    <div className="space-y-8 font-sans">
      {/* ==================================================================== */}
      {/* 1. TOP OFFICIAL HEADER & PRESET CONTROLS                              */}
      {/* ==================================================================== */}
      <div className="p-6 sm:p-8 rounded-[14px] bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-lg print:border-none print:shadow-none print:p-0">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-zinc-200 dark:border-zinc-800">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-brand-red text-white">
                {t.officialVersion}
              </span>
              <span className="text-xs font-mono text-zinc-400">&bull; Article 9 Regulations</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-zinc-900 dark:text-white uppercase">
              {t.title}
            </h1>
            <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 mt-1">
              {t.subtitle}
            </p>
          </div>

          {/* Action Bar (Print & Presets) */}
          <div className="flex flex-wrap items-center gap-2 print:hidden">
            <button
              onClick={() => setShowRulesModal((p) => !p)}
              className="px-3.5 py-2 rounded-xl text-xs font-bold bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-zinc-700 dark:text-zinc-300 transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <HelpCircle className="w-4 h-4 text-purple-500" />
              <span>WT Article 9 Rules</span>
            </button>

            <button
              onClick={handlePrint}
              className="px-3.5 py-2 rounded-xl text-xs font-bold bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-zinc-700 dark:text-zinc-300 transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <Printer className="w-4 h-4 text-emerald-500" />
              <span>{t.printScoreSheet}</span>
            </button>

            <button
              onClick={() => applyPreset('blank')}
              className="px-3.5 py-2 rounded-xl text-xs font-bold bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-zinc-700 dark:text-zinc-300 transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <RotateCcw className="w-4 h-4 text-zinc-400" />
              <span>{t.resetSheet}</span>
            </button>
          </div>
        </div>

        {/* Preset Routine Selector Strip */}
        <div className="pt-4 flex flex-wrap items-center gap-2 print:hidden">
          <span className="text-xs font-mono font-bold text-zinc-400 uppercase mr-1">
            {t.presetsTitle}
          </span>
          <button
            onClick={() => applyPreset('gold')}
            className="px-3 py-1.5 rounded-lg text-xs font-bold bg-amber-500/10 hover:bg-amber-500/20 text-amber-700 dark:text-amber-300 border border-amber-500/30 transition-all cursor-pointer"
          >
            {t.presetGold}
          </button>
          <button
            onClick={() => applyPreset('silver')}
            className="px-3 py-1.5 rounded-lg text-xs font-bold bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-zinc-700 dark:text-zinc-300 border border-zinc-300 dark:border-zinc-700 transition-all cursor-pointer"
          >
            {t.presetSilver}
          </button>
          <button
            onClick={() => applyPreset('penalty')}
            className="px-3 py-1.5 rounded-lg text-xs font-bold bg-brand-red/10 hover:bg-brand-red/20 text-brand-red border border-brand-red/30 transition-all cursor-pointer"
          >
            {t.presetPenalty}
          </button>
        </div>
      </div>

      {/* Rules Information Accordion */}
      {showRulesModal && (
        <div className="p-6 rounded-[14px] bg-purple-500/5 border border-purple-500/20 shadow-md space-y-4 animate-fade-in print:hidden">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold uppercase tracking-wider text-purple-700 dark:text-purple-300 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-purple-500" />
              Official WT Freestyle Poomsae Scoring Rules (Article 9 Summary)
            </h3>
            <button
              onClick={() => setShowRulesModal(false)}
              className="text-xs font-mono text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 cursor-pointer"
            >
              Close Guide &times;
            </button>
          </div>
          <div className="grid md:grid-cols-3 gap-4 text-xs text-zinc-700 dark:text-zinc-300 leading-relaxed">
            <div className="p-4 rounded-xl bg-white dark:bg-zinc-900 border border-purple-500/20">
              <span className="font-bold font-mono text-purple-600 dark:text-purple-400 block mb-1">
                1. Foot Techniques (5.0 max)
              </span>
              All 5 kicks are compulsory. Each is scored on Basic Execution (0.0 to 0.7) + Difficulty Bonus (0.1 to 0.3). Max per technique is 1.0 point.
            </div>
            <div className="p-4 rounded-xl bg-white dark:bg-zinc-900 border border-purple-500/20">
              <span className="font-bold font-mono text-purple-600 dark:text-purple-400 block mb-1">
                2. Mandatory Stances
              </span>
              Hakdari Seogi, Beom Seogi, and Dwitkubi must all be executed. Missing any stance triggers an automatic -0.3 technical deduction per omission.
            </div>
            <div className="p-4 rounded-xl bg-white dark:bg-zinc-900 border border-purple-500/20">
              <span className="font-bold font-mono text-purple-600 dark:text-purple-400 block mb-1">
                3. Timing &amp; Gam-Jeom
              </span>
              Performance duration must be between 90 to 100 seconds. Out-of-bounds line crosses (-0.3 each) and restart penalties (-0.6) are subtracted directly by the referee.
            </div>
          </div>
        </div>
      )}

      {/* ==================================================================== */}
      {/* 2. LIVE ELECTRONIC STADIUM SCOREBOARD BANNER                         */}
      {/* ==================================================================== */}
      <div className="p-6 sm:p-8 rounded-[14px] bg-zinc-950 text-white border border-zinc-800 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-red/10 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative z-10">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[11px] font-mono uppercase tracking-widest text-emerald-400 font-bold">
                Live Referee Scoring System
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black tracking-tight text-zinc-100">
              {contestantInfo}
            </h2>
            <div className="text-xs font-mono text-zinc-400 mt-1 flex items-center gap-3">
              <span>{courtNumber}</span>
              <span>&bull;</span>
              <span>{judgeName}</span>
              <span>&bull;</span>
              <span>{judgeNation}</span>
            </div>
          </div>

          {/* Electronic Digital Display */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
            {/* Technical Skills */}
            <div className="p-3 rounded-xl bg-zinc-900/80 border border-zinc-800">
              <span className="text-[10px] font-mono font-bold uppercase text-zinc-400 block">
                Technical (6.0)
              </span>
              <span className="text-xl sm:text-2xl font-mono font-black text-blue-400">
                {technicalSkillsSubtotal.toFixed(2)}
              </span>
            </div>

            {/* Presentation */}
            <div className="p-3 rounded-xl bg-zinc-900/80 border border-zinc-800">
              <span className="text-[10px] font-mono font-bold uppercase text-zinc-400 block">
                Presentation (4.0)
              </span>
              <span className="text-xl sm:text-2xl font-mono font-black text-purple-400">
                {presentationSubtotal.toFixed(2)}
              </span>
            </div>

            {/* Deductions */}
            <div className="p-3 rounded-xl bg-zinc-900/80 border border-zinc-800">
              <span className="text-[10px] font-mono font-bold uppercase text-zinc-400 block">
                Deductions
              </span>
              <span className="text-xl sm:text-2xl font-mono font-black text-brand-red">
                -{(totalTechnicalDeductions + totalRefereeDeductions).toFixed(2)}
              </span>
            </div>

            {/* FINAL SCORE */}
            <div className="p-3 rounded-xl bg-gradient-to-br from-brand-red to-red-800 border border-red-600 shadow-lg">
              <span className="text-[10px] font-mono font-bold uppercase text-white/80 block">
                FINAL SCORE
              </span>
              <span className="text-2xl sm:text-3xl font-mono font-black text-white tracking-wider">
                {finalScore.toFixed(2)}
              </span>
            </div>
          </div>
        </div>

        {/* Stopwatch Bar */}
        <div className="mt-6 pt-5 border-t border-zinc-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Timer className="w-5 h-5 text-amber-500" />
            <div>
              <span className="text-xs font-mono font-bold text-zinc-300 block">
                {t.timerLabel}
              </span>
              <span className="text-xs font-mono text-zinc-400">
                Current Time:{' '}
                <span
                  className={`font-bold ${
                    stopwatchSeconds < 90 || stopwatchSeconds > 100
                      ? 'text-brand-red'
                      : 'text-emerald-400'
                  }`}
                >
                  {formatTimer(stopwatchSeconds)} ({stopwatchSeconds}s)
                </span>
                {stopwatchSeconds < 90 && ' — (Under 90s regulation)'}
                {stopwatchSeconds > 100 && ' — (Overtime >100s, -0.3 penalty)'}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsTimerRunning((r) => !r)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold font-mono transition-all flex items-center gap-1.5 cursor-pointer ${
                isTimerRunning
                  ? 'bg-amber-500 text-black hover:bg-amber-400'
                  : 'bg-emerald-600 text-white hover:bg-emerald-500'
              }`}
            >
              {isTimerRunning ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
              <span>{isTimerRunning ? t.timerStop : t.timerStart}</span>
            </button>
            <button
              onClick={() => {
                setIsTimerRunning(false)
                setStopwatchSeconds(0)
              }}
              className="px-3 py-1.5 rounded-lg text-xs font-mono bg-zinc-800 hover:bg-zinc-700 text-zinc-300 transition-colors cursor-pointer"
            >
              {t.timerReset}
            </button>
          </div>
        </div>
      </div>

      {/* ==================================================================== */}
      {/* 3. OFFICIAL WT SCORE SHEET TABLE LAYOUT                              */}
      {/* ==================================================================== */}
      <div className="bg-white dark:bg-zinc-900 rounded-[14px] border-2 border-zinc-900 dark:border-zinc-700 shadow-xl overflow-hidden print:border-black">
        {/* Document Sub-Header: Mandatory Stances & Inputs */}
        <div className="p-5 bg-zinc-100 dark:bg-zinc-800/80 border-b-2 border-zinc-900 dark:border-zinc-700 grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
          <div className="md:col-span-8">
            <div className="flex items-center gap-2 mb-1.5">
              <span className="text-xs font-black uppercase text-zinc-900 dark:text-white">
                {t.mandatoryStancesTitle}:
              </span>
              <span className="text-[11px] font-mono text-zinc-500">
                (Check each when executed in routine)
              </span>
            </div>
            <div className="flex flex-wrap gap-4">
              <label className="inline-flex items-center gap-2 text-xs font-bold text-zinc-800 dark:text-zinc-200 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={hasHakdariSeogi}
                  onChange={(e) => setHasHakdariSeogi(e.target.checked)}
                  className="w-4 h-4 rounded text-brand-red focus:ring-brand-red cursor-pointer"
                />
                <span>{t.hakdariSeogi}</span>
              </label>

              <label className="inline-flex items-center gap-2 text-xs font-bold text-zinc-800 dark:text-zinc-200 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={hasBeomSeogi}
                  onChange={(e) => setHasBeomSeogi(e.target.checked)}
                  className="w-4 h-4 rounded text-brand-red focus:ring-brand-red cursor-pointer"
                />
                <span>{t.beomSeogi}</span>
              </label>

              <label className="inline-flex items-center gap-2 text-xs font-bold text-zinc-800 dark:text-zinc-200 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={hasDwitkubi}
                  onChange={(e) => setHasDwitkubi(e.target.checked)}
                  className="w-4 h-4 rounded text-brand-red focus:ring-brand-red cursor-pointer"
                />
                <span>{t.dwitkubi}</span>
              </label>
            </div>
          </div>

          <div className="md:col-span-4 flex flex-col sm:flex-row gap-2">
            <input
              type="text"
              value={courtNumber}
              onChange={(e) => setCourtNumber(e.target.value)}
              placeholder="Court #"
              className="px-3 py-1.5 rounded-lg text-xs bg-white dark:bg-black border border-zinc-300 dark:border-zinc-700 font-mono"
            />
            <input
              type="text"
              value={contestantInfo}
              onChange={(e) => setContestantInfo(e.target.value)}
              placeholder="Contestant #"
              className="px-3 py-1.5 rounded-lg text-xs bg-white dark:bg-black border border-zinc-300 dark:border-zinc-700 font-mono w-full"
            />
          </div>
        </div>

        {/* ================================================================== */}
        {/* SECTION A: TECHNICAL SKILLS (6.0)                                  */}
        {/* ================================================================== */}
        <div className="border-b-2 border-zinc-900 dark:border-zinc-700">
          <div className="bg-zinc-800 text-white px-5 py-2.5 flex items-center justify-between">
            <span className="text-xs font-black uppercase tracking-wider font-mono">
              1. {t.technicalSkillsTitle} — {t.difficultyFootTitle} (5.0) + {t.basicMovementsTitle} (1.0)
            </span>
            <span className="text-xs font-mono font-bold text-emerald-400">
              Max: {t.technicalSkillsMax}
            </span>
          </div>

          {/* 5 Compulsory Foot Skills Rows */}
          <div className="divide-y divide-zinc-200 dark:divide-zinc-800">
            {compulsoryFootSkillRules.map((rule, idx) => {
              const current = footSkills[rule.id] || { basicScore: 0.5, difficultyBonus: 0.2 }
              const itemTotal = Math.min(1.0, current.basicScore + current.difficultyBonus)

              return (
                <div
                  key={rule.id}
                  className="p-4 sm:p-5 hover:bg-zinc-50 dark:hover:bg-zinc-800/40 transition-colors"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
                    {/* Skill Info */}
                    <div className="lg:col-span-4">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="w-5 h-5 rounded-full bg-zinc-900 dark:bg-white text-white dark:text-black flex items-center justify-center text-[10px] font-bold">
                          0{idx + 1}
                        </span>
                        <h4 className="text-xs sm:text-sm font-black text-zinc-900 dark:text-white uppercase tracking-tight">
                          {rule.name}
                        </h4>
                      </div>
                      <span className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400 block mb-1">
                        {rule.koreanName}
                      </span>
                      <p className="text-[10px] text-zinc-500 leading-snug">
                        {rule.description}
                      </p>
                    </div>

                    {/* Basic Score Selection (0.0 to 0.7) */}
                    <div className="lg:col-span-4">
                      <span className="text-[10px] font-mono font-bold uppercase text-zinc-400 block mb-1.5">
                        Basic Execution Score (0.0 to 0.7):
                      </span>
                      <div className="flex flex-wrap gap-1">
                        {[0.0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7].map((val) => {
                          const isSelected = current.basicScore === val
                          let colorPill = 'bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300'
                          if (val === 0.0) colorPill = 'text-zinc-400'
                          else if (val <= 0.3) colorPill = 'bg-amber-100 text-amber-900 border-amber-300 dark:bg-amber-950/60 dark:text-amber-200'
                          else if (val <= 0.5) colorPill = 'bg-emerald-100 text-emerald-900 border-emerald-300 dark:bg-emerald-950/60 dark:text-emerald-200'
                          else colorPill = 'bg-blue-100 text-blue-900 border-blue-300 dark:bg-blue-950/60 dark:text-blue-200'

                          return (
                            <button
                              key={val}
                              onClick={() =>
                                setFootSkills((prev) => ({
                                  ...prev,
                                  [rule.id]: { ...prev[rule.id], basicScore: val },
                                }))
                              }
                              className={`px-2 py-1 rounded text-xs font-mono font-bold border transition-all cursor-pointer ${
                                isSelected
                                  ? 'bg-zinc-900 dark:bg-white text-white dark:text-black border-zinc-900 dark:border-white shadow-sm ring-2 ring-emerald-500 scale-105'
                                  : colorPill
                              }`}
                            >
                              {val.toFixed(1)}
                            </button>
                          )
                        })}
                      </div>
                      <span className="text-[9px] font-mono text-zinc-400 block mt-1">
                        0.0 (Failed) &bull; 0.1-0.3 (Poor) &bull; 0.4-0.5 (Average) &bull; 0.6-0.7 (Good)
                      </span>
                    </div>

                    {/* Difficulty Bonus Criteria (+0.1, +0.2, +0.3) */}
                    <div className="lg:col-span-3">
                      <span className="text-[10px] font-mono font-bold uppercase text-zinc-400 block mb-1.5">
                        Difficulty Criteria (+0.1 to +0.3):
                      </span>
                      <div className="space-y-1">
                        {[
                          { val: 0.0, label: rule.zeroThreshold },
                          { val: 0.1, label: `+0.1: ${rule.bonus01Label}` },
                          { val: 0.2, label: `+0.2: ${rule.bonus02Label}` },
                          { val: 0.3, label: `+0.3: ${rule.bonus03Label}` },
                        ].map((tier) => (
                          <button
                            key={tier.val}
                            onClick={() =>
                              setFootSkills((prev) => ({
                                ...prev,
                                [rule.id]: { ...prev[rule.id], difficultyBonus: tier.val },
                              }))
                            }
                            className={`w-full text-left px-2.5 py-1 rounded text-[11px] font-mono transition-all border flex items-center justify-between cursor-pointer ${
                              current.difficultyBonus === tier.val
                                ? 'bg-emerald-600 text-white border-emerald-600 font-bold shadow-sm'
                                : 'bg-zinc-50 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 border-zinc-200 dark:border-zinc-700 hover:text-zinc-900 dark:hover:text-white'
                            }`}
                          >
                            <span className="truncate">{tier.label}</span>
                            {current.difficultyBonus === tier.val && (
                              <CheckCircle2 className="w-3.5 h-3.5 shrink-0 ml-1" />
                            )}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Item Total Display */}
                    <div className="lg:col-span-1 text-center bg-zinc-50 dark:bg-zinc-800/60 p-2.5 rounded-xl border border-zinc-200 dark:border-zinc-700">
                      <span className="text-[9px] font-mono font-bold uppercase text-zinc-400 block mb-0.5">
                        Item Score
                      </span>
                      <span className="text-base font-mono font-black text-zinc-900 dark:text-white">
                        {itemTotal.toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Basic Movements & Practicability Row */}
          <div className="p-5 bg-zinc-50 dark:bg-zinc-800/30 border-t border-zinc-200 dark:border-zinc-700">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
              <div className="lg:col-span-5">
                <h4 className="text-sm font-black text-zinc-900 dark:text-white uppercase tracking-tight">
                  {t.basicMovementsTitle} (1.0)
                </h4>
                <p className="text-xs text-zinc-500 leading-relaxed mt-0.5">
                  {t.basicMovementsDesc}
                </p>
              </div>

              {/* 0.0 to 1.0 Selection */}
              <div className="lg:col-span-6">
                <div className="flex flex-wrap gap-1">
                  {[0.0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0].map((val) => {
                    const isSelected = basicMovementsScore === val
                    let pillStyle = 'bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300'
                    if (val <= 0.3) pillStyle = 'bg-amber-100 text-amber-900 border-amber-300 dark:bg-amber-950/60 dark:text-amber-200'
                    else if (val <= 0.5) pillStyle = 'bg-emerald-100 text-emerald-900 border-emerald-300 dark:bg-emerald-950/60 dark:text-emerald-200'
                    else if (val <= 0.7) pillStyle = 'bg-blue-100 text-blue-900 border-blue-300 dark:bg-blue-950/60 dark:text-blue-200'
                    else pillStyle = 'bg-red-500 text-white'

                    return (
                      <button
                        key={val}
                        onClick={() => setBasicMovementsScore(val)}
                        className={`px-2.5 py-1 rounded text-xs font-mono font-bold border transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-zinc-900 dark:bg-white text-white dark:text-black border-zinc-900 dark:border-white ring-2 ring-brand-red scale-105 shadow-sm'
                            : pillStyle
                        }`}
                      >
                        {val.toFixed(1)}
                      </button>
                    )
                  })}
                </div>
              </div>

              <div className="lg:col-span-1 text-center bg-white dark:bg-zinc-800 p-2.5 rounded-xl border border-zinc-200 dark:border-zinc-700">
                <span className="text-[9px] font-mono font-bold uppercase text-zinc-400 block mb-0.5">
                  Score
                </span>
                <span className="text-base font-mono font-black text-zinc-900 dark:text-white">
                  {basicMovementsScore.toFixed(2)}
                </span>
              </div>
            </div>
          </div>

          {/* Deductions - Technical Skills */}
          <div className="p-5 bg-amber-500/5 border-t border-zinc-200 dark:border-zinc-700">
            <h5 className="text-xs font-mono font-bold uppercase text-brand-red flex items-center gap-1.5 mb-3">
              <ShieldAlert className="w-4 h-4" />
              <span>{t.technicalDeductionsTitle} (Mandatory Stances, Falling, &gt;3 Acrobatic Kicks)</span>
            </h5>

            <div className="grid sm:grid-cols-3 gap-4 text-xs font-mono">
              {/* Missing Stances */}
              <div className="p-3 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex items-center justify-between">
                <div>
                  <span className="font-bold text-zinc-900 dark:text-white block">
                    Mandatory Stances:
                  </span>
                  <span className="text-[10px] text-zinc-400">
                    {missingStancesCount} missing (-0.3 each)
                  </span>
                </div>
                <span className="font-black text-brand-red text-sm">
                  -{mandatoryStancesDeductionValue.toFixed(1)}
                </span>
              </div>

              {/* Falling / Loss of balance */}
              <div className="p-3 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex items-center justify-between">
                <div>
                  <span className="font-bold text-zinc-900 dark:text-white block">
                    Falling / Stumble:
                  </span>
                  <div className="flex gap-1 mt-1">
                    {[0, 0.3, 0.6].map((v) => (
                      <button
                        key={v}
                        onClick={() => setFallingDeductions(v)}
                        className={`px-2 py-0.5 rounded text-[10px] cursor-pointer ${
                          fallingDeductions === v
                            ? 'bg-brand-red text-white font-bold'
                            : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-500'
                        }`}
                      >
                        -{v.toFixed(1)}
                      </button>
                    ))}
                  </div>
                </div>
                <span className="font-black text-brand-red text-sm">
                  -{fallingDeductions.toFixed(1)}
                </span>
              </div>

              {/* Excess Acrobatic Kicks */}
              <div className="p-3 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex items-center justify-between">
                <div>
                  <span className="font-bold text-zinc-900 dark:text-white block">
                    &gt; 3 Acrobatic Kicks:
                  </span>
                  <div className="flex items-center gap-1.5 mt-1">
                    <button
                      onClick={() => setExcessAcrobaticCount((c) => Math.max(0, c - 1))}
                      className="px-2 py-0.5 bg-zinc-100 dark:bg-zinc-800 rounded font-bold cursor-pointer"
                    >
                      -
                    </button>
                    <span>{excessAcrobaticCount} extra</span>
                    <button
                      onClick={() => setExcessAcrobaticCount((c) => c + 1)}
                      className="px-2 py-0.5 bg-zinc-100 dark:bg-zinc-800 rounded font-bold cursor-pointer"
                    >
                      +
                    </button>
                  </div>
                </div>
                <span className="font-black text-brand-red text-sm">
                  -{(excessAcrobaticCount * 0.3).toFixed(1)}
                </span>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-between text-xs font-mono font-bold">
              <span className="text-zinc-500 uppercase">
                Sub-Total score of Technical Skills (6.0):
              </span>
              <span className="text-lg font-black text-blue-600 dark:text-blue-400">
                ( {technicalSkillsSubtotal.toFixed(2)} )
              </span>
            </div>
          </div>
        </div>

        {/* ================================================================== */}
        {/* SECTION B: PRESENTATION (4.0)                                      */}
        {/* ================================================================== */}
        <div className="border-b-2 border-zinc-900 dark:border-zinc-700">
          <div className="bg-zinc-800 text-white px-5 py-2.5 flex items-center justify-between">
            <span className="text-xs font-black uppercase tracking-wider font-mono">
              2. {t.presentationTitle} (4 Criteria, 1.0 Max Each)
            </span>
            <span className="text-xs font-mono font-bold text-purple-400">
              Max: {t.presentationMax}
            </span>
          </div>

          <div className="divide-y divide-zinc-200 dark:divide-zinc-800">
            {[
              {
                id: 'creativity',
                title: t.creativityTitle,
                desc: t.creativityDesc,
                val: creativityScore,
                setVal: setCreativityScore,
              },
              {
                id: 'harmony',
                title: t.harmonyTitle,
                desc: t.harmonyDesc,
                val: harmonyScore,
                setVal: setHarmonyScore,
              },
              {
                id: 'energy',
                title: t.energyTitle,
                desc: t.energyDesc,
                val: energyScore,
                setVal: setEnergyScore,
              },
              {
                id: 'music',
                title: t.musicChoreoTitle,
                desc: t.musicChoreoDesc,
                val: musicChoreoScore,
                setVal: setMusicChoreoScore,
              },
            ].map((pres, idx) => (
              <div
                key={pres.id}
                className="p-4 sm:p-5 hover:bg-zinc-50 dark:hover:bg-zinc-800/40 transition-colors"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
                  <div className="lg:col-span-5">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="w-5 h-5 rounded-full bg-purple-600 text-white flex items-center justify-center text-[10px] font-bold">
                        P{idx + 1}
                      </span>
                      <h4 className="text-xs sm:text-sm font-black text-zinc-900 dark:text-white uppercase tracking-tight">
                        {pres.title}
                      </h4>
                    </div>
                    <p className="text-[11px] text-zinc-500 leading-relaxed">
                      {pres.desc}
                    </p>
                  </div>

                  {/* 0.0 to 1.0 Pill Buttons */}
                  <div className="lg:col-span-6">
                    <div className="flex flex-wrap gap-1">
                      {[0.0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0].map((val) => {
                        const isSelected = pres.val === val
                        let colorClass = 'bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300'
                        if (val <= 0.3) colorClass = 'bg-amber-100 text-amber-900 border-amber-300 dark:bg-amber-950/60 dark:text-amber-200'
                        else if (val <= 0.5) colorClass = 'bg-emerald-100 text-emerald-900 border-emerald-300 dark:bg-emerald-950/60 dark:text-emerald-200'
                        else if (val <= 0.7) colorClass = 'bg-blue-100 text-blue-900 border-blue-300 dark:bg-blue-950/60 dark:text-blue-200'
                        else colorClass = 'bg-red-500 text-white'

                        return (
                          <button
                            key={val}
                            onClick={() => pres.setVal(val)}
                            className={`px-2.5 py-1 rounded text-xs font-mono font-bold border transition-all cursor-pointer ${
                              isSelected
                                ? 'bg-purple-600 text-white border-purple-600 shadow-md ring-2 ring-purple-400 scale-105'
                                : colorClass
                            }`}
                          >
                            {val.toFixed(1)}
                          </button>
                        )
                      })}
                    </div>
                  </div>

                  <div className="lg:col-span-1 text-center bg-zinc-50 dark:bg-zinc-800/60 p-2.5 rounded-xl border border-zinc-200 dark:border-zinc-700">
                    <span className="text-[9px] font-mono font-bold uppercase text-zinc-400 block mb-0.5">
                      Score
                    </span>
                    <span className="text-base font-mono font-black text-purple-600 dark:text-purple-400">
                      {pres.val.toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 bg-zinc-100 dark:bg-zinc-800/60 flex items-center justify-between text-xs font-mono font-bold">
            <span className="text-zinc-500 uppercase">
              Sub-Total score of Presentation (4.0):
            </span>
            <span className="text-lg font-black text-purple-600 dark:text-purple-400">
              ( {presentationSubtotal.toFixed(2)} )
            </span>
          </div>
        </div>

        {/* ================================================================== */}
        {/* SECTION C: REFEREE DEDUCTIONS & FINAL SCORE                        */}
        {/* ================================================================== */}
        <div className="p-6 bg-zinc-50 dark:bg-zinc-900/90 space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-zinc-200 dark:border-zinc-800">
            <span className="text-xs font-mono font-bold uppercase text-zinc-900 dark:text-white">
              Total Score (10.0) of (Technical Skills) + (Presentation) =
            </span>
            <span className="text-base font-mono font-black text-zinc-900 dark:text-white">
              {rawTotalScore.toFixed(2)}
            </span>
          </div>

          {/* Referee Deductions Bar */}
          <div>
            <span className="text-xs font-mono font-bold uppercase text-brand-red block mb-2">
              *Referee Deductions (Time + Cross Boundary Line + Restart)
            </span>
            <div className="grid sm:grid-cols-3 gap-4 text-xs font-mono">
              {/* Time Penalty */}
              <label className="p-3 rounded-xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 flex items-center justify-between cursor-pointer">
                <div>
                  <span className="font-bold text-zinc-900 dark:text-white block">
                    Time Penalty (-0.3)
                  </span>
                  <span className="text-[10px] text-zinc-400">
                    &lt; 90s or &gt; 100s
                  </span>
                </div>
                <input
                  type="checkbox"
                  checked={timePenalty}
                  onChange={(e) => setTimePenalty(e.target.checked)}
                  className="w-4 h-4 text-brand-red rounded focus:ring-brand-red cursor-pointer"
                />
              </label>

              {/* Boundary Crossing */}
              <div className="p-3 rounded-xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 flex items-center justify-between">
                <div>
                  <span className="font-bold text-zinc-900 dark:text-white block">
                    Boundary Line Exit:
                  </span>
                  <span className="text-[10px] text-zinc-400">
                    -0.3 each ({boundaryCrossCount} times)
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => setBoundaryCrossCount((c) => Math.max(0, c - 1))}
                    className="w-6 h-6 rounded bg-zinc-100 dark:bg-zinc-800 font-bold flex items-center justify-center cursor-pointer"
                  >
                    -
                  </button>
                  <span className="font-mono font-black text-brand-red">{boundaryCrossCount}</span>
                  <button
                    onClick={() => setBoundaryCrossCount((c) => c + 1)}
                    className="w-6 h-6 rounded bg-zinc-100 dark:bg-zinc-800 font-bold flex items-center justify-center cursor-pointer"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Restart */}
              <label className="p-3 rounded-xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 flex items-center justify-between cursor-pointer">
                <div>
                  <span className="font-bold text-zinc-900 dark:text-white block">
                    Restart Routine (-0.6)
                  </span>
                  <span className="text-[10px] text-zinc-400">
                    Major match interruption
                  </span>
                </div>
                <input
                  type="checkbox"
                  checked={restartPenalty}
                  onChange={(e) => setRestartPenalty(e.target.checked)}
                  className="w-4 h-4 text-brand-red rounded focus:ring-brand-red cursor-pointer"
                />
              </label>
            </div>
          </div>

          {/* Final Score Banner */}
          <div className="p-5 rounded-xl bg-zinc-900 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-400 block">
                Total Score – Deductions =
              </span>
              <h3 className="text-xl sm:text-2xl font-black uppercase text-white tracking-tight">
                {t.finalScoreTitle}
              </h3>
              <p className="text-[10px] font-mono text-zinc-400 mt-1">
                {t.ruleNotice}
              </p>
            </div>

            <div className="text-center sm:text-right">
              <span className="text-4xl sm:text-5xl font-mono font-black text-amber-400 tracking-wider">
                {finalScore.toFixed(2)}
              </span>
              <span className="text-xs font-mono text-zinc-400 block">/ 10.00 Points</span>
            </div>
          </div>

          {/* Judge Verification Sign-off Box */}
          <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono">
            <div>
              <label className="text-[10px] uppercase text-zinc-400 block mb-1">
                {t.judgeNameLabel}
              </label>
              <input
                type="text"
                value={judgeName}
                onChange={(e) => setJudgeName(e.target.value)}
                className="w-full px-3 py-1.5 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-black font-sans"
              />
            </div>

            <div>
              <label className="text-[10px] uppercase text-zinc-400 block mb-1">
                {t.judgeNationLabel}
              </label>
              <input
                type="text"
                value={judgeNation}
                onChange={(e) => setJudgeNation(e.target.value)}
                className="w-full px-3 py-1.5 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-black font-sans"
              />
            </div>

            <div>
              <label className="text-[10px] uppercase text-zinc-400 block mb-1">
                {t.judgeSignatureLabel}
              </label>
              <input
                type="text"
                value={judgeSignature}
                onChange={(e) => setJudgeSignature(e.target.value)}
                className="w-full px-3 py-1.5 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-black font-sans italic"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
