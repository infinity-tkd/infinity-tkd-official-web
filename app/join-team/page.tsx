'use client'

import * as React from 'react'
import Link from 'next/link'
import {
  Award,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Send,
  HeartHandshake,
  DollarSign,
  Globe2,
  GraduationCap,
  Users,
  Loader2,
  AlertCircle,
} from 'lucide-react'
import {
  sanitizeInput,
  sanitizeEmail,
  sanitizePhone,
  isValidEmail,
  validateHoneypot,
  checkRateLimit,
  detectMaliciousPayload,
} from '@/lib/security'
import { Card3D } from '@/components/ui/Card3D'
import { useLanguage } from '@/context/LanguageContext'

interface JobOpening {
  id: string
  title: string
  type: string
  branch: string
  minDan: string
  description: string
  responsibilities: string[]
  requirements: string[]
}

const jobOpenings: JobOpening[] = [
  {
    id: 'tkd-instructor',
    title: 'Head / Assistant Taekwondo Master Instructor',
    type: 'Full-Time / Part-Time',
    branch: 'The Factory HQ & BKK1 Branch',
    minDan: 'Kukkiwon 2nd Dan or higher',
    description:
      'Lead daily classes for junior warriors and adult athletes. Emphasize Taegeuk recognized poomsae, Olympic sparring footwork, and respectful dojang etiquette.',
    responsibilities: [
      'Conduct dynamic, structured 60-minute classes according to the Infinity curriculum',
      'Assess student readiness for quarterly color belt and Dan promotion examinations',
      'Maintain strong communication with parents regarding student progress and conduct',
      'Assist in national competition training camps and demonstrations',
    ],
    requirements: [
      'Official Kukkiwon Dan certification (2nd Dan minimum)',
      'Minimum 2+ years experience teaching children and youth',
      'Positive leadership presence and fluent spoken English (Khmer/Korean is a plus)',
    ],
  },
  {
    id: 'tricking-coach',
    title: 'Freestyle Tricking & Acrobatic Coach',
    type: 'Part-Time (Evenings & Weekends)',
    branch: 'The Factory Phnom Penh HQ',
    minDan: 'Black Belt or Proven Acrobatics Track Record',
    description:
      'Guide students safely through gymnastic foundations, springboard launches, 540/720 kicks, and foam pit landing mechanics.',
    responsibilities: [
      'Coach safe progression drills on spring mats and air tracks',
      'Spot students through twists, flips, and high-altitude martial kicks',
      'Choreograph high-energy freestyle demonstration routines',
    ],
    requirements: [
      'Strong acrobatic tricking repertoire (corkscrews, 540s, Webster, aerials)',
      'Expertise in safety spotting and injury prevention drills',
      'Enthusiasm for youth athletic development',
    ],
  },
  {
    id: 'physio-coach',
    title: 'Sports Physiotherapist & Biomechanics Specialist',
    type: 'Part-Time / Clinical Contract',
    branch: 'Sport Science Lab (The Factory HQ)',
    minDan: 'Physical Therapy / Sports Medicine Degree',
    description:
      'Provide musculoskeletal screenings, tendon pre-hab, mobility conditioning, and recovery support for elite competition athletes.',
    responsibilities: [
      'Perform baseline joint mobility and jump force sensor testing',
      'Design individual pre-hab and recovery routines for athletes',
      'Collaborate with master instructors to optimize kicking biomechanics',
    ],
    requirements: [
      'Certified physiotherapist, kinesiologist, or sports medicine graduate',
      'Familiarity with martial arts kicking kinetics is an advantage',
      'Dedication to science-backed athlete longevity',
    ],
  },
]

const coachPerks = [
  {
    icon: DollarSign,
    title: 'Competitive Compensation',
    desc: 'Above-market hourly rates and full-time salary packages with performance bonuses.',
  },
  {
    icon: GraduationCap,
    title: 'Kukkiwon Dan Sponsorship',
    desc: 'Full sponsorship for higher Dan promotion exams, international referee seminars, and coaching certificates.',
  },
  {
    icon: Globe2,
    title: 'International Tournaments',
    desc: 'Travel with the Infinity Competition Team to regional and global World Taekwondo championships.',
  },
  {
    icon: HeartHandshake,
    title: 'Olympic Facility Access',
    desc: 'Free 24/7 access to all training mats, calisthenics rigs, spring floors, and performance recovery labs.',
  },
]

export default function JoinTeamPage() {
  const { t } = useLanguage()
  const [selectedJob, setSelectedJob] = React.useState<JobOpening>(jobOpenings[0])
  const [submitted, setSubmitted] = React.useState(false)
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [errorMsg, setErrorMsg] = React.useState('')
  const [formData, setFormData] = React.useState({
    name: '',
    phone: '',
    email: '',
    danRank: 'Kukkiwon 2nd Dan',
    experience: '',
    whyJoin: '',
    hp_security_token: '',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (isSubmitting) return
    setErrorMsg('')

    // 1. Anti-Spam Honeypot Check
    if (!validateHoneypot(formData.hp_security_token)) {
      setSubmitted(true)
      return
    }

    // 2. Client-Side Rate Limit / Cooldown Check
    const rateCheck = checkRateLimit('career_form_submit', 3)
    if (!rateCheck.allowed) {
      setErrorMsg('Please wait a moment before submitting another application.')
      return
    }

    if (
      detectMaliciousPayload(formData.name) ||
      detectMaliciousPayload(formData.email) ||
      detectMaliciousPayload(formData.whyJoin)
    ) {
      setErrorMsg('Disallowed character sequences or security filter trigger detected.')
      return
    }

    // 3. Strict Input Sanitization
    const cleanName = sanitizeInput(formData.name, 100)
    const cleanPhone = sanitizePhone(formData.phone)
    const cleanEmail = sanitizeEmail(formData.email)
    const cleanDan = sanitizeInput(formData.danRank, 100)
    const cleanWhyJoin = sanitizeInput(formData.whyJoin, 2000)

    if (!cleanName || !cleanEmail || !cleanPhone || !cleanWhyJoin) {
      setErrorMsg('Please complete all required fields.')
      return
    }

    if (!isValidEmail(cleanEmail)) {
      setErrorMsg('Please enter a valid email address.')
      return
    }

    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 600))
    setIsSubmitting(false)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({
        name: '',
        phone: '',
        email: '',
        danRank: 'Kukkiwon 2nd Dan',
        experience: '',
        whyJoin: '',
        hp_security_token: '',
      })
    }, 4000)
  }

  return (
    <div className="bg-white dark:bg-black text-zinc-900 dark:text-white min-h-screen pt-20 sm:pt-24 pb-20 font-sans selection:bg-brand-red selection:text-white transition-colors duration-500">
      {/* Hero Header */}
      <section className="relative pt-8 sm:pt-12 pb-10 sm:pb-14 px-4 sm:px-6 text-center overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[450px] bg-gradient-to-b from-brand-red/10 via-transparent to-transparent blur-3xl rounded-full opacity-60 pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl border border-brand-red/30 bg-brand-red/10 text-brand-red text-xs font-bold uppercase tracking-widest mb-4">
            <Users className="w-3.5 h-3.5" /> {t.joinTeam.badge}
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight mb-4 sm:mb-6 leading-none text-zinc-900 dark:text-white break-words">
            {t.joinTeam.heroTitle1} <span className="text-brand-red">{t.joinTeam.heroTitle2}</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto font-light leading-relaxed px-2">
            {t.joinTeam.heroSubtitle}
          </p>
        </div>
      </section>

      {/* Perks Grid (14px radius) */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-16 sm:mb-20 max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {coachPerks.map((perk) => {
            const Icon = perk.icon
            return (
              <Card3D key={perk.title} max={4} depth={3} className="h-full">
                <div
                  className="p-6 rounded-[14px] bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 shadow-sm h-full flex flex-col justify-between"
                >
                  <div>
                    <div className="p-3 bg-brand-red/10 text-brand-red rounded-xl w-fit mb-4">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-black uppercase tracking-tight text-zinc-900 dark:text-white mb-1.5">
                      {perk.title}
                    </h3>
                    <p className="text-xs text-zinc-600 dark:text-zinc-400 font-light leading-relaxed">
                      {perk.desc}
                    </p>
                  </div>
                </div>
              </Card3D>
            )
          })}
        </div>
      </section>

      {/* Open Positions & Application Form (14px radius) */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left: Job Openings List */}
          <div className="lg:col-span-6 space-y-4">
            <div className="mb-6">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-red block">
                {t.joinTeam.openPositions}
              </span>
              <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-zinc-900 dark:text-white mt-1">
                Faculty Openings
              </h2>
            </div>

            {jobOpenings.map((job) => {
              const isSelected = selectedJob.id === job.id
              return (
                <Card3D key={job.id} max={4} depth={3} className="w-full">
                  <div
                    onClick={() => setSelectedJob(job)}
                    className={`p-6 sm:p-7 rounded-[14px] border transition-all duration-300 cursor-pointer ${
                      isSelected
                        ? 'border-brand-red bg-zinc-50 dark:bg-zinc-900/90 shadow-xl ring-2 ring-brand-red/20'
                        : 'border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950/40 hover:border-zinc-400 dark:hover:border-zinc-700'
                    }`}
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <span className="px-2.5 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest bg-brand-red text-white">
                        {job.type}
                      </span>
                      <span className="text-xs text-zinc-400 font-semibold">{job.branch}</span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-black uppercase text-zinc-900 dark:text-white tracking-tight mb-2">
                      {job.title}
                    </h3>
                    <p className="text-xs text-zinc-600 dark:text-zinc-400 font-light leading-relaxed mb-4">
                      {job.description}
                    </p>

                    <div className="space-y-2 mb-4">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 block">
                        {t.joinTeam.keyResponsibilities}:
                      </span>
                      {job.responsibilities.slice(0, 2).map((resp, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-zinc-700 dark:text-zinc-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-brand-red shrink-0" />
                          <span className="truncate">{resp}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-3 border-t border-zinc-200/60 dark:border-zinc-800/60 flex items-center justify-between text-xs">
                      <span className="text-zinc-500 font-medium">Rank: {job.minDan}</span>
                      <span className="font-bold text-brand-red uppercase text-[10px]">
                        {isSelected ? 'Selected' : 'Click to Apply'}
                      </span>
                    </div>
                  </div>
                </Card3D>
              )
            })}
          </div>

          {/* Right: Application Form */}
          <div className="lg:col-span-6">
            <div className="p-6 sm:p-8 md:p-10 rounded-[14px] bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xl">
              <div className="mb-6">
                <span className="text-[10px] font-bold uppercase tracking-widest text-brand-red block mb-1">
                  {t.joinTeam.applyFor}
                </span>
                <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-zinc-900 dark:text-white">
                  {selectedJob.title}
                </h3>
                <p className="text-xs text-zinc-500 mt-1 font-light">
                  {selectedJob.branch} • {selectedJob.minDan}
                </p>
              </div>

              {submitted ? (
                <div className="p-8 bg-brand-red/10 border border-brand-red/30 rounded-xl text-center space-y-3">
                  <h4 className="text-xl font-bold uppercase tracking-tight text-brand-red">
                    Application Received!
                  </h4>
                  <p className="text-sm text-zinc-600 dark:text-zinc-300 font-light">
                    Our Master Faculty committee will review your credentials and reach out for an audition and interview.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Anti-Spam Honeypot Trap */}
                  <input
                    type="text"
                    name="hp_security_token"
                    value={formData.hp_security_token}
                    onChange={(e) => setFormData({ ...formData, hp_security_token: e.target.value })}
                    className="hidden"
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                  />

                  {errorMsg && (
                    <div
                      role="alert"
                      className="p-3.5 bg-brand-red/10 border border-brand-red/30 rounded-xl text-xs text-brand-red font-bold flex items-center gap-2"
                    >
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  <div className="space-y-1.5">
                    <label htmlFor="join-name" className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 ml-1">
                      {t.joinTeam.fullName} *
                    </label>
                    <input
                      id="join-name"
                      type="text"
                      required
                      autoComplete="name"
                      aria-required="true"
                      aria-invalid={!!errorMsg}
                      placeholder="Master John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-white dark:bg-black border border-zinc-200 dark:border-zinc-800 rounded-xl px-4 py-3.5 text-base sm:text-sm focus:outline-none focus:border-brand-red focus:ring-2 focus:ring-brand-red/50 text-zinc-900 dark:text-white"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="join-phone" className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 ml-1">
                        {t.joinTeam.phoneWhatsapp} *
                      </label>
                      <input
                        id="join-phone"
                        type="tel"
                        required
                        inputMode="tel"
                        autoComplete="tel"
                        aria-required="true"
                        aria-invalid={!!errorMsg}
                        placeholder="+855 12 345 678"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-white dark:bg-black border border-zinc-200 dark:border-zinc-800 rounded-xl px-4 py-3.5 text-base sm:text-sm focus:outline-none focus:border-brand-red focus:ring-2 focus:ring-brand-red/50 text-zinc-900 dark:text-white"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="join-email" className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 ml-1">
                        {t.joinTeam.emailAddress} *
                      </label>
                      <input
                        id="join-email"
                        type="email"
                        required
                        inputMode="email"
                        autoComplete="email"
                        aria-required="true"
                        aria-invalid={!!errorMsg}
                        placeholder="coach@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-white dark:bg-black border border-zinc-200 dark:border-zinc-800 rounded-xl px-4 py-3.5 text-base sm:text-sm focus:outline-none focus:border-brand-red focus:ring-2 focus:ring-brand-red/50 text-zinc-900 dark:text-white"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="join-dan" className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 ml-1">
                      {t.joinTeam.danRank}
                    </label>
                    <input
                      id="join-dan"
                      type="text"
                      placeholder="e.g. Kukkiwon 3rd Dan / Acrobatics Coach"
                      value={formData.danRank}
                      onChange={(e) => setFormData({ ...formData, danRank: e.target.value })}
                      className="w-full bg-white dark:bg-black border border-zinc-200 dark:border-zinc-800 rounded-xl px-4 py-3.5 text-base sm:text-sm focus:outline-none focus:border-brand-red focus:ring-2 focus:ring-brand-red/50 text-zinc-900 dark:text-white"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="join-why" className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 ml-1">
                      {t.joinTeam.teachingBackground} *
                    </label>
                    <textarea
                      id="join-why"
                      rows={4}
                      required
                      aria-required="true"
                      aria-invalid={!!errorMsg}
                      placeholder="Summarize your martial arts coaching history, tournament medals, and why you want to teach at Infinity..."
                      value={formData.whyJoin}
                      onChange={(e) => setFormData({ ...formData, whyJoin: e.target.value })}
                      className="w-full bg-white dark:bg-black border border-zinc-200 dark:border-zinc-800 rounded-xl px-4 py-3.5 text-base sm:text-sm focus:outline-none focus:border-brand-red focus:ring-2 focus:ring-brand-red/50 resize-none text-zinc-900 dark:text-white"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl bg-brand-red disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold text-xs uppercase tracking-widest hover:bg-zinc-900 transition-all shadow-brand-glow flex items-center justify-center gap-2 touch-press cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" /> Submitting Application...
                      </>
                    ) : (
                      <>
                        {t.joinTeam.submitApplication} <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
