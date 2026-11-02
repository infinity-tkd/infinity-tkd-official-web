'use client'

import * as React from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import {
  MapPin,
  Mail,
  Phone,
  Send,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  ChevronDown,
  Building2,
  ArrowRight,
  Sparkles,
  Loader2,
  AlertCircle,
} from 'lucide-react'
import {
  sanitizeInput,
  sanitizeEmail,
  isValidEmail,
  validateHoneypot,
  checkRateLimit,
  detectMaliciousPayload,
} from '@/lib/security'
import { Card3D } from '@/components/ui/Card3D'
import { useLanguage } from '@/context/LanguageContext'

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
    </svg>
  )
}

const socials = [
  { name: 'Telegram', icon: Send, link: 'https://t.me/infinitytaekwondo' },
  { name: 'Instagram', icon: Instagram, link: 'https://instagram.com/infinitytaekwondo' },
  { name: 'YouTube', icon: Youtube, link: 'https://youtube.com/@infinitytaekwondo' },
  { name: 'Facebook', icon: Facebook, link: 'https://facebook.com/infinitytaekwondo' },
  { name: 'LinkedIn', icon: Linkedin, link: 'https://linkedin.com/company/infinitytaekwondo' },
  { name: 'TikTok', icon: TikTokIcon, link: 'https://tiktok.com/@infinitytaekwondo' },
]

function ContactContent() {
  const { t } = useLanguage()
  const searchParams = useSearchParams()

  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    branch: 'Olympic Branch (HQ)',
    subject: 'General Inquiry',
    message: '',
    hp_security_token: '',
  })
  const [submitted, setSubmitted] = React.useState(false)
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [errorMsg, setErrorMsg] = React.useState('')

  // Synchronize URL deep-link parameters into form state
  React.useEffect(() => {
    if (!searchParams) return
    const rawSubject = searchParams.get('subject') || ''
    const rawBranch = searchParams.get('branch') || ''
    const plan = searchParams.get('plan') || ''
    const coach = searchParams.get('coach') || ''

    let resolvedSubject = ''
    let resolvedBranch = ''
    let defaultMsg = ''

    const subLower = rawSubject.toLowerCase()
    if (subLower.includes('trial') || subLower.includes('free')) {
      resolvedSubject = 'Free Trial Class Booking'
      defaultMsg = 'Hi, I would like to book a free trial class at Infinity Taekwondo. Please let me know available training times.'
    } else if (subLower.includes('junior') || subLower.includes('warrior') || subLower.includes('kid')) {
      resolvedSubject = 'Junior Warriors Enrollment (Ages 5-13)'
      defaultMsg = 'Hi, I would like to enroll my child in the Junior Warriors program. Please share schedule and age group details.'
    } else if (subLower.includes('athlete') || subLower.includes('pro') || subLower.includes('member')) {
      resolvedSubject = 'Pro Athlete Membership'
      defaultMsg = plan
        ? `Hi, I am interested in enrolling in the ${plan} membership plan. Please send enrollment steps.`
        : 'Hi, I would like to inquire about the Pro Athlete Membership program.'
    } else if (subLower.includes('private') || subLower.includes('master') || subLower.includes('dan')) {
      resolvedSubject = 'Private Master Dan Coaching'
      defaultMsg = coach
        ? `Hi, I would like to inquire about private 1-on-1 coaching sessions with ${coach}.`
        : 'Hi, I would like to inquire about 1-on-1 private Master Dan coaching.'
    } else if (subLower.includes('faculty') || subLower.includes('coach') || subLower.includes('career')) {
      resolvedSubject = 'Faculty / Coaching Application'
    } else if (subLower.includes('incubator') || subLower.includes('project')) {
      resolvedSubject = 'Student Project Incubator Pitch'
    }

    const branchLower = (rawBranch || rawSubject).toLowerCase()
    if (branchLower.includes('kouk') || branchLower.includes('khleang') || branchLower.includes('bkk1')) {
      resolvedBranch = 'Kouk Khleang Branch'
    } else if (branchLower.includes('olympic') || branchLower.includes('factory') || branchLower.includes('hq')) {
      resolvedBranch = 'Olympic Branch (HQ)'
    }

    if (rawSubject.includes('inspired by')) {
      const studentName = rawSubject.replace(/Enrollment inspired by /i, '').trim()
      defaultMsg = `Hi, I was inspired by ${studentName}'s journey at Infinity Taekwondo and want to begin training.`
    }

    if (resolvedSubject || resolvedBranch || defaultMsg) {
      setFormData((prev) => ({
        ...prev,
        subject: resolvedSubject || prev.subject,
        branch: resolvedBranch || prev.branch,
        message: prev.message || defaultMsg,
      }))

      // Smooth scroll to form element when query parameters are supplied
      const formAnchor = document.getElementById('contact-form')
      if (formAnchor) {
        formAnchor.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
  }, [searchParams])

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
    const rateCheck = checkRateLimit('contact_form_submit', 3)
    if (!rateCheck.allowed) {
      setErrorMsg('Please wait a moment before sending another message.')
      return
    }

    // 3. Proactive Malicious Payload Detection
    if (
      detectMaliciousPayload(formData.name) ||
      detectMaliciousPayload(formData.email) ||
      detectMaliciousPayload(formData.message)
    ) {
      setErrorMsg('Disallowed character sequences or security filter trigger detected.')
      return
    }

    // 4. Strict Input Sanitization
    const cleanName = sanitizeInput(formData.name, 100)
    const cleanEmail = sanitizeEmail(formData.email)
    const cleanBranch = sanitizeInput(formData.branch, 100)
    const cleanSubject = sanitizeInput(formData.subject, 100)
    const cleanMessage = sanitizeInput(formData.message, 2000)

    if (!cleanName || !cleanEmail || !cleanMessage) {
      setErrorMsg('Please complete all required fields.')
      return
    }

    if (!isValidEmail(cleanEmail)) {
      setErrorMsg('Please enter a valid email address.')
      return
    }

    setIsSubmitting(true)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: cleanName,
          email: cleanEmail,
          branch: cleanBranch,
          subject: cleanSubject,
          message: cleanMessage,
          hp_security_token: formData.hp_security_token,
        }),
      })

      const data = await res.json()
      if (!res.ok) {
        throw new Error(data.error || 'Failed to send message.')
      }

      setSubmitted(true)
      setTimeout(() => {
        setSubmitted(false)
        setFormData({
          name: '',
          email: '',
          branch: 'Olympic Branch (HQ)',
          subject: 'General Inquiry',
          message: '',
          hp_security_token: '',
        })
      }, 5000)
    } catch (err: any) {
      setErrorMsg(err.message || 'An error occurred while sending your message. Please reach out via Telegram @infinitytaekwondo.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="bg-zinc-50 dark:bg-black min-h-screen pt-20 sm:pt-24 pb-16 sm:pb-20 transition-colors duration-500 font-sans selection:bg-brand-red selection:text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Page Header */}
        <div className="mb-10 sm:mb-16 text-center max-w-3xl mx-auto pt-6 sm:pt-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl border border-brand-red/30 bg-brand-red/10 text-brand-red text-xs font-bold uppercase tracking-widest mb-4 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5" /> {t.contact.badge}
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight text-zinc-900 dark:text-white mb-4 sm:mb-6 leading-none break-words">
            {t.contact.heroTitle1} <span className="text-brand-red">{t.contact.heroTitle2}</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-3xl leading-relaxed mx-auto font-light px-2">
            {t.contact.heroSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-12">
          {/* LEFT COLUMN: Info & 2 Branches */}
          <div className="md:col-span-5 space-y-5 sm:space-y-6">
            {/* Branch 01 Card (14px radius) */}
            <Card3D max={4} depth={3} className="w-full">
              <div className="bg-white dark:bg-zinc-900/50 rounded-[14px] p-6 sm:p-8 border border-zinc-200 dark:border-zinc-800 backdrop-blur-sm shadow-sm space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-lg bg-brand-red text-white">
                    {t.common.headquarters}
                  </span>
                  <Link
                    href="/locations"
                    className="text-[11px] font-bold text-brand-red hover:underline flex items-center gap-1 touch-press"
                  >
                    {t.common.viewDetails} <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>

                <div>
                  <h4 className="text-base font-black text-zinc-900 dark:text-white uppercase">
                    Olympic Branch (HQ)
                  </h4>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-1 leading-relaxed">
                    National Olympic Stadium Complex, Charles de Gaulle Blvd, Phnom Penh
                  </p>
                </div>

                <div className="text-xs text-zinc-500 space-y-1.5 pt-2 border-t border-zinc-100 dark:border-zinc-800/80">
                  <p className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-brand-red shrink-0" />
                    <a href="tel:012220124" className="hover:text-brand-red font-semibold">
                      012 220 124
                    </a>
                  </p>
                  <p className="flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5 text-brand-red shrink-0" />
                    <span>infinity.tkd.kh@gmail.com</span>
                  </p>
                </div>
              </div>
            </Card3D>

            {/* Branch 02 Card (14px radius) */}
            <Card3D max={4} depth={3} className="w-full">
              <div className="bg-white dark:bg-zinc-900/50 rounded-[14px] p-6 sm:p-8 border border-zinc-200 dark:border-zinc-800 backdrop-blur-sm shadow-sm space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-lg bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300">
                    {t.common.branch02}
                  </span>
                  <Link
                    href="/locations"
                    className="text-[11px] font-bold text-brand-red hover:underline flex items-center gap-1 touch-press"
                  >
                    {t.common.viewDetails} <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>

                <div>
                  <h4 className="text-base font-black text-zinc-900 dark:text-white uppercase">
                    Kouk Khleang Branch
                  </h4>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-1 leading-relaxed">
                    Kouk Khleang, Sen Sok, Phnom Penh
                  </p>
                </div>

                <div className="text-xs text-zinc-500 space-y-1.5 pt-2 border-t border-zinc-100 dark:border-zinc-800/80">
                  <p className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-brand-red shrink-0" />
                    <a href="tel:012220124" className="hover:text-brand-red font-semibold">
                      012 220 124
                    </a>
                  </p>
                  <p className="flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5 text-brand-red shrink-0" />
                    <span>infinity.tkd.kh@gmail.com</span>
                  </p>
                </div>
              </div>
            </Card3D>

            {/* Socials Card (14px radius) */}
            <Card3D max={3} depth={2} className="w-full">
              <div className="bg-white dark:bg-zinc-900/50 rounded-[14px] p-6 sm:p-8 border border-zinc-200 dark:border-zinc-800 backdrop-blur-sm shadow-sm">
                <h3 className="text-xs font-bold uppercase tracking-widest text-brand-red mb-4">
                  Official Channels
                </h3>
                <div className="flex flex-wrap gap-2.5 sm:gap-3">
                  {socials.map((social) => {
                    const Icon = social.icon
                    return (
                      <a
                        key={social.name}
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-xl bg-zinc-50 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-brand-red hover:text-white transition-all duration-300 group min-w-[44px] min-h-[44px] flex items-center justify-center touch-press"
                        aria-label={social.name}
                      >
                        <Icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                      </a>
                    )
                  })}
                </div>

                <div className="mt-5 pt-4 border-t border-zinc-100 dark:border-zinc-800">
                  <a
                    href="https://t.me/infinitytaekwondo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-[#229ED9]/10 text-[#229ED9] hover:bg-[#229ED9] hover:text-white transition-all text-xs font-bold uppercase tracking-wider touch-press"
                  >
                    <Send className="w-3.5 h-3.5" />
                    Instant Admissions on Telegram
                  </a>
                </div>
              </div>
            </Card3D>
          </div>

          {/* RIGHT COLUMN: Form (14px radius) */}
          <div className="md:col-span-7" id="contact-form">
            <div className="bg-white dark:bg-zinc-900 rounded-[14px] p-6 sm:p-8 md:p-10 border border-zinc-200 dark:border-zinc-800 shadow-xl shadow-zinc-200/50 dark:shadow-black/50 h-full flex flex-col justify-center">
              <div className="mb-6 sm:mb-8">
                <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-zinc-900 dark:text-white">
                  {t.contact.sendMessageTitle}
                </h2>
                <p className="text-xs sm:text-sm text-zinc-500 mt-1 font-light">
                  {t.contact.sendMessageSubtitle}
                </p>
              </div>

              {submitted ? (
                <div className="p-8 bg-brand-red/10 border border-brand-red/30 rounded-xl text-center space-y-3">
                  <h3 className="text-xl font-bold uppercase tracking-tight text-brand-red">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-300 font-light">
                    Thank you for contacting Infinity Taekwondo. We will get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                  {/* Anti-Spam Honeypot Field */}
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

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                    <div className="space-y-1.5">
                      <label htmlFor="contact-name" className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 ml-1">
                        {t.contact.fullName} *
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        autoComplete="name"
                        aria-required="true"
                        aria-invalid={!!errorMsg}
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-zinc-50 dark:bg-black border border-zinc-200 dark:border-zinc-800 rounded-xl px-4 py-3.5 text-base sm:text-sm focus:outline-none focus:border-brand-red focus:ring-2 focus:ring-brand-red/50 transition-all placeholder:text-zinc-400 dark:placeholder:text-zinc-600 text-zinc-900 dark:text-white"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="contact-email" className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 ml-1">
                        {t.contact.emailAddress} *
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        autoComplete="email"
                        inputMode="email"
                        aria-required="true"
                        aria-invalid={!!errorMsg}
                        placeholder="name@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-zinc-50 dark:bg-black border border-zinc-200 dark:border-zinc-800 rounded-xl px-4 py-3.5 text-base sm:text-sm focus:outline-none focus:border-brand-red focus:ring-2 focus:ring-brand-red/50 transition-all placeholder:text-zinc-400 dark:placeholder:text-zinc-600 text-zinc-900 dark:text-white"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                    <div className="space-y-1.5">
                      <label htmlFor="contact-branch" className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 ml-1">
                        {t.contact.preferredBranch}
                      </label>
                      <div className="relative">
                        <select
                          id="contact-branch"
                          value={formData.branch}
                          onChange={(e) => setFormData({ ...formData, branch: e.target.value })}
                          className="w-full bg-zinc-50 dark:bg-black border border-zinc-200 dark:border-zinc-800 rounded-xl px-4 py-3.5 text-base sm:text-sm focus:outline-none focus:border-brand-red focus:ring-2 focus:ring-brand-red/50 transition-all text-zinc-700 dark:text-zinc-300 appearance-none"
                        >
                          <option>Olympic Branch (HQ)</option>
                          <option>Kouk Khleang Branch</option>
                          <option>Either Branch</option>
                        </select>
                        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400 pointer-events-none" />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="contact-subject" className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 ml-1">
                        {t.contact.subject}
                      </label>
                      <div className="relative">
                        <select
                          id="contact-subject"
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          className="w-full bg-zinc-50 dark:bg-black border border-zinc-200 dark:border-zinc-800 rounded-xl px-4 py-3.5 text-base sm:text-sm focus:outline-none focus:border-brand-red focus:ring-2 focus:ring-brand-red/50 transition-all text-zinc-700 dark:text-zinc-300 appearance-none"
                        >
                          <option>General Inquiry</option>
                          <option>Free Trial Class Booking</option>
                          <option>Junior Warriors Enrollment (Ages 5-13)</option>
                          <option>Pro Athlete Membership</option>
                          <option>Private Master Dan Coaching</option>
                          <option>Faculty / Coaching Application</option>
                          <option>Student Project Incubator Pitch</option>
                        </select>
                        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400 pointer-events-none" />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="contact-message" className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 ml-1">
                      {t.contact.message} *
                    </label>
                    <textarea
                      id="contact-message"
                      rows={5}
                      required
                      aria-required="true"
                      aria-invalid={!!errorMsg}
                      placeholder="Tell us about your martial arts background, training goals, or questions..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-zinc-50 dark:bg-black border border-zinc-200 dark:border-zinc-800 rounded-xl px-4 py-3.5 text-base sm:text-sm focus:outline-none focus:border-brand-red focus:ring-2 focus:ring-brand-red/50 transition-all placeholder:text-zinc-400 dark:placeholder:text-zinc-600 resize-none text-zinc-900 dark:text-white"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 rounded-xl bg-brand-red disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold text-xs uppercase tracking-widest hover:bg-zinc-900 transition-all duration-300 shadow-brand-glow hover:shadow-brand-glow-lg flex items-center justify-center gap-2 touch-press cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" /> Sending Message...
                        </>
                      ) : (
                        <>
                          {t.contact.sendBtn} <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function ContactPage() {
  return (
    <React.Suspense
      fallback={
        <div className="min-h-screen bg-zinc-50 dark:bg-black pt-28 flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-brand-red border-t-transparent rounded-full animate-spin" />
        </div>
      }
    >
      <ContactContent />
    </React.Suspense>
  )
}
