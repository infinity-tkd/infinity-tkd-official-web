'use client'

import * as React from 'react'
import Link from 'next/link'
import {
  CheckCircle,
  XCircle,
  Sparkles,
  Zap,
  Shield,
  Award,
  ChevronDown,
  Flame,
  Activity,
  Camera,
  Users,
  Percent,
  Smile,
  Target,
  ArrowRight,
  Clock,
  ShieldCheck,
  RefreshCw,
  Gift,
  HelpCircle,
} from 'lucide-react'
import { pricingPlans, pricingComparison, pricingFaqs } from '@/data/pricing'
import { AnimatedCounter } from '@/components/AnimatedCounter'
import { AgeDivisionsAndFormats } from '@/components/AgeDivisionsAndFormats'
import { Card3D } from '@/components/ui/Card3D'
import { useLanguage } from '@/context/LanguageContext'

const iconMap: Record<string, React.ElementType> = {
  taekwondo: Shield,
  science: Activity,
  studio: Camera,
  all: Sparkles,
}

export default function PricingPage() {
  const { t, localizeList } = useLanguage()
  const [billingCycle, setBillingCycle] = React.useState<'monthly' | 'annual'>('monthly')
  const [membershipType, setMembershipType] = React.useState<'individual' | 'family'>('individual')
  const [openFaq, setOpenFaq] = React.useState<number | null>(null)

  const localizedPlans = React.useMemo(() => {
    return localizeList(pricingPlans)
  }, [localizeList])

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  // Calculate annual savings percentage display
  const annualSavingsPercent = 20
  const familySavingsPercent = 25

  return (
    <div className="bg-zinc-50 dark:bg-black text-zinc-900 dark:text-white min-h-screen pt-20 sm:pt-24 pb-20 font-sans selection:bg-brand-red selection:text-white transition-colors duration-500 overflow-x-hidden">
      {/* Background Subtle Ambience */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-brand-red/5 blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-zinc-400/5 dark:bg-zinc-800/10 blur-[150px] rounded-full pointer-events-none" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
        {/* ==================================================================== */}
        {/* 1. HERO SECTION */}
        {/* ==================================================================== */}
        <div className="text-center max-w-3xl mx-auto pt-6 sm:pt-10 mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl border border-brand-red/30 bg-brand-red/10 text-brand-red text-xs font-bold uppercase tracking-widest mb-4 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5" /> {t.pricing.badge}
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight mb-4 sm:mb-6 leading-none text-zinc-900 dark:text-white break-words">
            {t.pricing.heroTitle1} <span className="text-brand-red">{t.pricing.heroTitle2}</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-zinc-600 dark:text-zinc-400 font-light max-w-3xl mx-auto leading-relaxed mb-8 px-2">
            {t.pricing.heroSubtitle}
          </p>

          {/* DUAL INTERACTIVE SWITCHERS TOOLBAR (12px radius) */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-xl mx-auto">
            {/* Switcher 1: Monthly vs Annual */}
            <div className="inline-flex items-center p-1.5 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm w-full sm:w-auto justify-center">
              <button
                onClick={() => setBillingCycle('monthly')}
                className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                  billingCycle === 'monthly'
                    ? 'bg-brand-red text-white shadow-brand-glow'
                    : 'text-zinc-500 hover:text-zinc-900 dark:hover:text-white'
                }`}
              >
                {t.common.monthly}
              </button>
              <button
                onClick={() => setBillingCycle('annual')}
                className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center gap-1.5 cursor-pointer ${
                  billingCycle === 'annual'
                    ? 'bg-brand-red text-white shadow-brand-glow'
                    : 'text-zinc-500 hover:text-zinc-900 dark:hover:text-white'
                }`}
              >
                <span>{t.common.annual}</span>
                <span className="px-1.5 py-0.5 rounded-md text-[9px] font-black uppercase bg-amber-400 text-black">
                  -{annualSavingsPercent}%
                </span>
              </button>
            </div>

            {/* Switcher 2: Individual vs Family Pack */}
            <div className="inline-flex items-center p-1.5 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm w-full sm:w-auto justify-center">
              <button
                onClick={() => setMembershipType('individual')}
                className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                  membershipType === 'individual'
                    ? 'bg-zinc-900 text-white dark:bg-white dark:text-black shadow-sm'
                    : 'text-zinc-500 hover:text-zinc-900 dark:hover:text-white'
                }`}
              >
                Single Student
              </button>
              <button
                onClick={() => setMembershipType('family')}
                className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center gap-1.5 cursor-pointer ${
                  membershipType === 'family'
                    ? 'bg-zinc-900 text-white dark:bg-white dark:text-black shadow-sm'
                    : 'text-zinc-500 hover:text-zinc-900 dark:hover:text-white'
                }`}
              >
                <Users className="w-3.5 h-3.5" />
                <span>Family Pack</span>
                <span className="px-1.5 py-0.5 rounded-md text-[9px] font-black uppercase bg-brand-red text-white">
                  -{familySavingsPercent}%
                </span>
              </button>
            </div>
          </div>

          {/* Dynamic Savings Alert */}
          {membershipType === 'family' ? (
            <p className="text-xs text-brand-red font-bold uppercase tracking-wider mt-3 animate-fade-in flex items-center justify-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" /> Family Sibling Discount: 25% savings automatically applied across all plans!
            </p>
          ) : billingCycle === 'annual' ? (
            <p className="text-xs text-emerald-500 font-bold uppercase tracking-wider mt-3 animate-fade-in flex items-center justify-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" /> Annual Commitment: 20% annual discount applied with 2 months free!
            </p>
          ) : null}
        </div>

        {/* ==================================================================== */}
        {/* 2. TIERED PRICING CARDS GRID (14px radius) */}
        {/* ==================================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 relative z-10 max-w-7xl mx-auto mb-16 sm:mb-24">
          {localizedPlans.map((plan) => {
            const Icon = iconMap[plan.division] || Sparkles

            // Compute exact numeric price based on toggles
            let calculatedPrice: number | null = null
            if (plan.monthlyIndividualPrice !== null) {
              if (membershipType === 'family') {
                calculatedPrice =
                  billingCycle === 'annual'
                    ? plan.annualFamilyPrice
                    : plan.monthlyFamilyPrice
              } else {
                calculatedPrice =
                  billingCycle === 'annual'
                    ? plan.annualIndividualPrice
                    : plan.monthlyIndividualPrice
              }
            }

            const isCustom = calculatedPrice === null

            return (
              <Card3D key={plan.id} maxTilt={plan.popular ? 4 : 3} className="h-full">
                <div
                  className={`relative group h-full p-6 sm:p-8 rounded-[14px] border transition-all duration-300 flex flex-col justify-between overflow-hidden backdrop-blur-xl ${
                    plan.popular
                      ? 'border-brand-red bg-zinc-50 dark:bg-zinc-900/90 shadow-2xl shadow-brand-red/10 lg:-translate-y-2'
                      : 'border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 hover:border-zinc-300 dark:hover:border-zinc-700'
                  }`}
                >
                {/* Popular Card Accent Ribbon */}
                {plan.popular && (
                  <div className="absolute top-0 right-0 left-0 h-1.5 bg-gradient-to-r from-brand-red via-amber-400 to-brand-red" />
                )}

                <div>
                  {/* Top Target Audience & Status Badges */}
                  <div className="flex justify-between items-start mb-5">
                    <div
                      className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest"
                      style={{ color: plan.accentColor }}
                    >
                      <Icon className="w-4 h-4" /> {plan.targetAudience.split(' (')[0]}
                    </div>

                    {plan.badge && (
                      <span
                        className={`px-2.5 py-1 rounded-lg text-[10px] font-black uppercase tracking-wider shadow-xs ${
                          plan.badgeType === 'popular'
                            ? 'bg-brand-red text-white shadow-brand-glow animate-pulse'
                            : plan.badgeType === 'beginner'
                            ? 'bg-emerald-500/15 text-emerald-500 border border-emerald-500/30'
                            : 'bg-zinc-200 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200'
                        }`}
                      >
                        {plan.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="text-2xl font-black uppercase tracking-tight mb-2 text-zinc-900 dark:text-white">
                    {plan.name}
                  </h3>

                  <p className="text-xs text-zinc-500 dark:text-zinc-400 font-light mb-6 leading-relaxed">
                    {plan.description}
                  </p>

                  {/* Price Display */}
                  <div className="mb-6 pb-6 border-b border-zinc-200 dark:border-zinc-800">
                    <div className="flex items-baseline gap-1.5">
                      {isCustom ? (
                        <span className="text-3xl sm:text-4xl font-black tracking-tight text-zinc-900 dark:text-white">
                          Custom VIP
                        </span>
                      ) : (
                        <>
                          <span className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-zinc-900 dark:text-white font-mono">
                            $<AnimatedCounter value={calculatedPrice!} duration={400} />
                          </span>
                          <span className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                            / {billingCycle === 'annual' ? 'mo (billed annually)' : 'month'}
                          </span>
                        </>
                      )}
                    </div>

                    {/* Sub-price breakdown */}
                    {!isCustom && (
                      <p className="text-[11px] text-zinc-400 font-mono mt-1">
                        {membershipType === 'family' ? 'Per family student' : 'Standard tuition rate'}
                        {billingCycle === 'annual' && ' • Paid annually'}
                      </p>
                    )}
                  </div>

                  {/* Features List */}
                  <div className="space-y-3 mb-6">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 block">
                      Plan Inclusions
                    </span>
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs">
                        <CheckCircle className="w-4 h-4 text-brand-red shrink-0 mt-0.5" />
                        <span className="text-zinc-700 dark:text-zinc-300 font-medium leading-relaxed">
                          {feature}
                        </span>
                      </div>
                    ))}

                    {plan.notIncluded &&
                      plan.notIncluded.map((feature, idx) => (
                        <div
                          key={`not-${idx}`}
                          className="flex items-start gap-2.5 text-xs opacity-40"
                        >
                          <XCircle className="w-4 h-4 text-zinc-400 shrink-0 mt-0.5" />
                          <span className="text-zinc-400 line-through leading-relaxed">{feature}</span>
                        </div>
                      ))}
                  </div>
                </div>

                {/* Card Action Button (12px radius) */}
                <div className="pt-4 border-t border-zinc-100 dark:border-zinc-800">
                  <Link
                    href={`/contact?subject=${encodeURIComponent(plan.ctaSubject)}`}
                    className={`w-full py-3.5 rounded-xl font-bold uppercase tracking-wider text-xs transition-all duration-300 text-center flex items-center justify-center gap-2 cursor-pointer shadow-sm touch-press ${
                      plan.popular
                        ? 'bg-brand-red text-white hover:bg-zinc-900 dark:hover:bg-white dark:hover:text-black shadow-brand-glow'
                        : 'bg-zinc-900 text-white dark:bg-white dark:text-black hover:bg-brand-red dark:hover:bg-brand-red dark:hover:text-white'
                    }`}
                  >
                    {plan.ctaText} <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </Card3D>
            )
          })}
        </div>

        {/* ==================================================================== */}
        {/* 3. CONFIDENCE & VALUE ASSURANCE BAR (12px radius) */}
        {/* ==================================================================== */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto mb-16 sm:mb-24">
          <div className="p-4 rounded-xl bg-white dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 flex items-start gap-3">
            <Gift className="w-5 h-5 text-brand-red shrink-0 mt-0.5" />
            <div>
              <h5 className="text-xs font-bold uppercase text-zinc-900 dark:text-white">
                100% Free Trial
              </h5>
              <p className="text-[11px] text-zinc-500 dark:text-zinc-400 font-light mt-0.5">
                First session free with zero lock-in commitment.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 flex items-start gap-3">
            <Award className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
            <div>
              <h5 className="text-xs font-bold uppercase text-zinc-900 dark:text-white">
                Kukkiwon Standard
              </h5>
              <p className="text-[11px] text-zinc-500 dark:text-zinc-400 font-light mt-0.5">
                Internationally recognized belt credentials.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 flex items-start gap-3">
            <RefreshCw className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
            <div>
              <h5 className="text-xs font-bold uppercase text-zinc-900 dark:text-white">
                Freeze Anytime
              </h5>
              <p className="text-[11px] text-zinc-500 dark:text-zinc-400 font-light mt-0.5">
                Pause up to 30 days for exams or vacations.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 flex items-start gap-3">
            <Users className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
            <div>
              <h5 className="text-xs font-bold uppercase text-zinc-900 dark:text-white">
                Sibling Savings
              </h5>
              <p className="text-[11px] text-zinc-500 dark:text-zinc-400 font-light mt-0.5">
                25% automatic discount for family bundles.
              </p>
            </div>
          </div>
        </div>

        {/* ==================================================================== */}
        {/* 4. ALL AGES & CLASS FORMATS SECTION */}
        {/* ==================================================================== */}
        <section className="mb-16 sm:mb-24">
          <AgeDivisionsAndFormats />
        </section>

        {/* ==================================================================== */}
        {/* 5. FULL FEATURE COMPARISON MATRIX (14px radius) */}
        {/* ==================================================================== */}
        <div className="mb-16 sm:mb-24 max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-red block mb-1">
              Detailed Feature Matrix
            </span>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight text-zinc-900 dark:text-white">
              {t.pricing.compareTitle1} <span className="text-brand-red">{t.pricing.compareTitle2}</span>
            </h3>
          </div>

          <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-[14px] overflow-x-auto shadow-xl">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950">
                  <th className="p-4 sm:p-5 text-xs font-black uppercase tracking-wider text-zinc-400">
                    Feature &amp; Benefit
                  </th>
                  <th className="p-4 sm:p-5 text-xs font-black uppercase tracking-wider text-zinc-900 dark:text-white text-center">
                    Junior Warriors
                  </th>
                  <th className="p-4 sm:p-5 text-xs font-black uppercase tracking-wider text-brand-red text-center bg-brand-red/5">
                    Pro Athlete (Popular)
                  </th>
                  <th className="p-4 sm:p-5 text-xs font-black uppercase tracking-wider text-emerald-500 text-center">
                    Private Master
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800 text-xs">
                {pricingComparison.map((cat, catIdx) => (
                  <React.Fragment key={catIdx}>
                    <tr className="bg-zinc-100/60 dark:bg-zinc-950/60">
                      <td
                        colSpan={4}
                        className="px-4 sm:px-5 py-2.5 font-bold uppercase tracking-wider text-brand-red text-[11px]"
                      >
                        {cat.category}
                      </td>
                    </tr>
                    {cat.features.map((feat, featIdx) => (
                      <tr key={featIdx} className="hover:bg-zinc-50 dark:hover:bg-zinc-800/40">
                        <td className="p-4 sm:p-5 text-zinc-700 dark:text-zinc-300 font-medium">
                          {feat.name}
                        </td>
                        <td className="p-4 sm:p-5 text-center">
                          {typeof feat.junior === 'boolean' ? (
                            feat.junior ? (
                              <CheckCircle className="w-4 h-4 text-emerald-500 mx-auto" />
                            ) : (
                              <XCircle className="w-4 h-4 text-zinc-300 dark:text-zinc-700 mx-auto" />
                            )
                          ) : (
                            <span className="font-semibold text-zinc-800 dark:text-zinc-200">
                              {feat.junior}
                            </span>
                          )}
                        </td>
                        <td className="p-4 sm:p-5 text-center bg-brand-red/5">
                          {typeof feat.athlete === 'boolean' ? (
                            feat.athlete ? (
                              <CheckCircle className="w-4 h-4 text-brand-red mx-auto" />
                            ) : (
                              <XCircle className="w-4 h-4 text-zinc-300 dark:text-zinc-700 mx-auto" />
                            )
                          ) : (
                            <span className="font-bold text-brand-red">{feat.athlete}</span>
                          )}
                        </td>
                        <td className="p-4 sm:p-5 text-center">
                          {typeof feat.master === 'boolean' ? (
                            feat.master ? (
                              <CheckCircle className="w-4 h-4 text-emerald-500 mx-auto" />
                            ) : (
                              <XCircle className="w-4 h-4 text-zinc-300 dark:text-zinc-700 mx-auto" />
                            )
                          ) : (
                            <span className="font-semibold text-zinc-800 dark:text-zinc-200">
                              {feat.master}
                            </span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* ==================================================================== */}
        {/* 6. INTERACTIVE FAQS ACCORDION (12px radius) */}
        {/* ==================================================================== */}
        <div className="max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="text-center mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-red block mb-1">
              Frequently Asked Questions
            </span>
            <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-zinc-900 dark:text-white">
              {t.pricing.faqTitle1} <span className="text-brand-red">{t.pricing.faqTitle2}</span>
            </h3>
          </div>

          <div className="space-y-3">
            {pricingFaqs.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 overflow-hidden shadow-xs"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  aria-expanded={openFaq === idx}
                  aria-controls={`faq-answer-${idx}`}
                  className="w-full p-4 sm:p-5 text-left flex justify-between items-center gap-4 font-bold text-xs sm:text-sm text-zinc-900 dark:text-white hover:text-brand-red dark:hover:text-brand-red transition-colors cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-zinc-400 shrink-0 transform transition-transform duration-300 ${
                      openFaq === idx ? 'rotate-180 text-brand-red' : ''
                    }`}
                  />
                </button>
                {openFaq === idx && (
                  <div
                    id={`faq-answer-${idx}`}
                    role="region"
                    className="px-4 sm:px-5 pb-5 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 font-light leading-relaxed border-t border-zinc-100 dark:border-zinc-800 pt-3 animate-fade-in"
                  >
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* ==================================================================== */}
        {/* 7. HIGH-CONVERTING VIP TRIAL PASS BANNER (14px radius) */}
        {/* ==================================================================== */}
        <div className="p-6 sm:p-10 rounded-[14px] bg-zinc-900 dark:bg-black border border-brand-red/30 text-white relative overflow-hidden text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6 max-w-5xl mx-auto shadow-2xl">
          <div className="absolute top-0 right-0 w-80 h-80 bg-brand-red/10 blur-[100px] rounded-full pointer-events-none" />

          <div className="relative z-10 max-w-xl">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-red block mb-1">
              Complimentary Dojang Pass
            </span>
            <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight mb-2">
              Experience The Dojang First
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
              Step onto the spring floors, meet our certified 5th Dan Head Masters, and experience our science-backed training with zero financial obligation.
            </p>
          </div>

          <Link
            href="/contact?subject=Free%20Trial%20Booking"
            className="relative z-10 w-full sm:w-auto px-6 py-3.5 rounded-xl bg-brand-red text-white font-bold uppercase tracking-widest text-xs hover:bg-white hover:text-black transition-all shadow-brand-glow whitespace-nowrap text-center cursor-pointer shrink-0"
          >
            Claim Free Trial Pass
          </Link>
        </div>
      </div>
    </div>
  )
}
