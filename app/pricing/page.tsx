'use client'

import * as React from 'react'
import Link from 'next/link'
import {
  Activity,
  ArrowRight,
  Award,
  Camera,
  Check,
  ChevronDown,
  Gift,
  Minus,
  RefreshCw,
  Shield,
  Sparkles,
  Users,
} from 'lucide-react'
import { pricingPlans, pricingComparison, pricingFaqs } from '@/data/pricing'
import { AnimatedCounter } from '@/components/AnimatedCounter'
import { AgeDivisionsAndFormats } from '@/components/AgeDivisionsAndFormats'
import { BorderTrace } from '@/components/ui/BorderTrace'
import { SegmentedControl } from '@/components/ui/SegmentedControl'
import { PageHero } from '@/components/ui/PageHero'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { CtaBanner } from '@/components/ui/CtaBanner'
import { buttonStyles } from '@/components/ui/Button'
import { useLanguage } from '@/context/LanguageContext'
import { cn } from '@/lib/utils'

const iconMap: Record<string, React.ElementType> = {
  taekwondo: Shield,
  science: Activity,
  studio: Camera,
  all: Sparkles,
}

const ANNUAL_SAVINGS = 20
const FAMILY_SAVINGS = 25

const assurances = [
  { icon: Gift, title: '100% Free Trial', text: 'First session free with zero lock-in commitment.' },
  { icon: Award, title: 'Kukkiwon Standard', text: 'Internationally recognized belt credentials.' },
  { icon: RefreshCw, title: 'Freeze Anytime', text: 'Pause up to 30 days for exams or vacations.' },
  { icon: Users, title: 'Sibling Savings', text: `${FAMILY_SAVINGS}% automatic discount for family bundles.` },
]

/** Small savings tag inside the membership switch. */
function SavingsTag({ percent }: { percent: number }) {
  return (
    <span className="rounded-md bg-brand-red px-1.5 py-0.5 text-[11px] font-bold tracking-normal text-white">
      -{percent}%
    </span>
  )
}

/** One cell of the comparison table: a tick, a dash, or a short value. */
function MatrixCell({ value, featured }: { value: boolean | string; featured?: boolean }) {
  if (value === true || value === false) {
    const Icon = value ? Check : Minus
    return (
      <>
        <Icon
          aria-hidden="true"
          className={cn(
            'mx-auto h-4 w-4',
            !value ? 'text-zinc-300 dark:text-zinc-700' : featured ? 'text-brand-red' : 'text-zinc-700 dark:text-zinc-300'
          )}
        />
        <span className="sr-only">{value ? 'Included' : 'Not included'}</span>
      </>
    )
  }
  return (
    <span className={cn('font-semibold', featured ? 'text-zinc-900 dark:text-white' : 'text-zinc-700 dark:text-zinc-300')}>
      {value}
    </span>
  )
}

export default function PricingPage() {
  const { t, localizeList } = useLanguage()
  const [billingCycle, setBillingCycle] = React.useState<'monthly' | 'annual'>('monthly')
  const [membershipType, setMembershipType] = React.useState<'individual' | 'family'>('individual')
  const [openFaq, setOpenFaq] = React.useState<number | null>(null)

  const localizedPlans = React.useMemo(() => localizeList(pricingPlans), [localizeList])

  const family = membershipType === 'family'
  const annual = billingCycle === 'annual'
  const savingsNote =
    family && annual
      ? `Family (${FAMILY_SAVINGS}%) and annual (${ANNUAL_SAVINGS}%) discounts applied to every plan.`
      : family
        ? `Family sibling discount: ${FAMILY_SAVINGS}% savings applied across all plans.`
        : annual
          ? `Annual commitment: ${ANNUAL_SAVINGS}% discount applied, with 2 months free.`
          : null

  return (
    <div className="overflow-x-hidden pb-20 sm:pb-28">
      <PageHero
        eyebrow={t.pricing.badge}
        eyebrowIcon={Sparkles}
        title={t.pricing.heroTitle1}
        accent={t.pricing.heroTitle2}
        description={t.pricing.heroSubtitle}
      >
        {/* Billing and membership switches: the highlight slides to the chosen option. */}
        <div className="flex w-full max-w-xl flex-col items-center gap-3">
          <div className="flex w-full flex-col items-center justify-center gap-3 sm:flex-row">
            <SegmentedControl
              label="Billing period"
              value={billingCycle}
              onChange={setBillingCycle}
              className="w-full justify-center sm:w-auto"
              options={[
                { value: 'monthly', label: t.common.monthly },
                // The annual label already states the saving in every language.
                { value: 'annual', label: t.common.annual },
              ]}
            />
            <SegmentedControl
              label="Membership type"
              value={membershipType}
              onChange={setMembershipType}
              className="w-full justify-center sm:w-auto"
              options={[
                { value: 'individual', label: 'Single Student' },
                {
                  value: 'family',
                  label: (
                    <>
                      <Users className="h-3.5 w-3.5" aria-hidden="true" />
                      <span>Family Pack</span>
                      <SavingsTag percent={FAMILY_SAVINGS} />
                    </>
                  ),
                },
              ]}
            />
          </div>
          {/* The line keeps its height when empty, so switching never moves the plans. */}
          <p aria-live="polite" className="flex min-h-[1.5rem] items-center justify-center gap-1.5 text-sm text-zinc-500">
            {savingsNote && (
              <>
                <Check className="h-4 w-4 shrink-0 text-brand-red" aria-hidden="true" />
                <span>{savingsNote}</span>
              </>
            )}
          </p>
        </div>
      </PageHero>

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Plans */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {localizedPlans.map((plan) => {
            const Icon = iconMap[plan.division] || Sparkles
            const featured = Boolean(plan.popular)

            let price: number | null = null
            if (plan.monthlyIndividualPrice !== null) {
              price = family
                ? annual
                  ? plan.annualFamilyPrice
                  : plan.monthlyFamilyPrice
                : annual
                  ? plan.annualIndividualPrice
                  : plan.monthlyIndividualPrice
            }

            return (
              <article
                key={plan.id}
                className={cn(
                  'relative flex h-full flex-col rounded-2xl border bg-white p-6 sm:p-8 dark:bg-zinc-900/40',
                  featured ? 'border-brand-red/35' : 'border-zinc-200 dark:border-zinc-800'
                )}
              >
                {/* Featured plan: a short light runs around its edge when it comes into view and on hover. */}
                {featured && <BorderTrace />}

                {/* The badge row keeps its height, so plan titles line up across the cards. */}
                <div className="flex min-h-[26px] items-start">
                  {plan.badge && (
                    <span
                      className={cn(
                        'rounded-lg px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider',
                        featured ? 'bg-brand-red text-white' : 'bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300'
                      )}
                    >
                      {plan.badge}
                    </span>
                  )}
                </div>

                <h2 className="mt-4 text-xl font-black uppercase tracking-tight text-zinc-900 sm:text-2xl dark:text-white">
                  {plan.name}
                </h2>
                <p className="mt-2 flex items-start gap-1.5 text-xs font-semibold leading-snug text-zinc-500">
                  <Icon className="mt-px h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                  <span>{plan.targetAudience}</span>
                </p>
                <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{plan.description}</p>

                {/* Price */}
                <div className="mt-6 flex min-h-[5.5rem] flex-col justify-center border-y border-zinc-200 py-5 dark:border-zinc-800">
                  {price === null ? (
                    <span className="text-3xl font-black tracking-tight text-zinc-900 sm:text-4xl dark:text-white">Custom VIP</span>
                  ) : (
                    <>
                      <span className="flex flex-wrap items-baseline gap-x-1.5">
                        <span className="text-4xl font-black tracking-tight text-zinc-900 sm:text-5xl dark:text-white">
                          $<AnimatedCounter value={price} duration={500} countUp={false} />
                        </span>
                        <span className="text-sm font-medium text-zinc-500">/ {annual ? 'mo, billed annually' : 'month'}</span>
                      </span>
                      <span className="mt-1 text-xs text-zinc-500">
                        {family ? 'Per family student' : 'Standard tuition rate'}
                        {annual && ' · Paid annually'}
                      </span>
                    </>
                  )}
                </div>

                {/* What is included */}
                <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.14em] text-zinc-500">Plan inclusions</p>
                <ul className="mt-3 space-y-2.5">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm text-zinc-700 dark:text-zinc-300">
                      <Check
                        aria-hidden="true"
                        className={cn('mt-0.5 h-4 w-4 shrink-0', featured ? 'text-brand-red' : 'text-zinc-400 dark:text-zinc-500')}
                      />
                      <span className="leading-snug">{feature}</span>
                    </li>
                  ))}
                  {plan.notIncluded?.map((feature, idx) => (
                    <li key={`not-${idx}`} className="flex items-start gap-2.5 text-sm text-zinc-400 dark:text-zinc-500">
                      <Minus aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0" />
                      <span className="leading-snug">
                        {feature}
                        <span className="sr-only"> (not included)</span>
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-8">
                  <Link
                    href={`/contact?subject=${encodeURIComponent(plan.ctaSubject)}`}
                    className={buttonStyles({ variant: featured ? 'primary' : 'outline', className: 'w-full' })}
                  >
                    {plan.ctaText} <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
              </article>
            )
          })}
        </div>

        {/* Membership assurances */}
        <ul className="mt-6 grid gap-6 rounded-2xl border border-zinc-200 p-6 sm:grid-cols-2 sm:p-8 lg:grid-cols-4 dark:border-zinc-800">
          {assurances.map(({ icon: Icon, title, text }) => (
            <li key={title} className="flex gap-3">
              <Icon className="mt-0.5 h-5 w-5 shrink-0 text-brand-red" aria-hidden="true" />
              <div>
                <p className="text-sm font-bold text-zinc-900 dark:text-white">{title}</p>
                <p className="mt-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{text}</p>
              </div>
            </li>
          ))}
        </ul>

        {/* Ages and class formats */}
        <div className="mt-24 sm:mt-32">
          <AgeDivisionsAndFormats />
        </div>

        {/* Comparison */}
        <section className="mx-auto mt-24 max-w-5xl sm:mt-32">
          <SectionHeader
            size="md"
            eyebrowStyle="text"
            eyebrow="Detailed feature matrix"
            title={t.pricing.compareTitle1}
            accent={t.pricing.compareTitle2}
          />
          <div className="mt-10 overflow-x-auto rounded-2xl border border-zinc-200 dark:border-zinc-800">
            <table className="w-full min-w-[640px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-800">
                  <th scope="col" className="p-4 text-[11px] font-semibold uppercase tracking-[0.14em] text-zinc-500 sm:px-6">
                    Feature &amp; benefit
                  </th>
                  <th scope="col" className="p-4 text-center text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-white">
                    Junior Warriors
                  </th>
                  <th scope="col" className="bg-brand-red/[0.05] p-4 text-center text-xs font-bold uppercase tracking-wider text-brand-red">
                    Pro Athlete
                    <span className="mt-0.5 block text-[11px] font-semibold normal-case tracking-normal text-zinc-500">
                      Most popular
                    </span>
                  </th>
                  <th scope="col" className="p-4 text-center text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-white">
                    Private Master
                  </th>
                </tr>
              </thead>
              <tbody>
                {pricingComparison.map((cat) => (
                  <React.Fragment key={cat.category}>
                    <tr className="bg-zinc-50 dark:bg-zinc-900/60">
                      <th
                        scope="colgroup"
                        colSpan={4}
                        className="px-4 py-2.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-zinc-500 sm:px-6"
                      >
                        {cat.category}
                      </th>
                    </tr>
                    {cat.features.map((feat) => (
                      <tr key={feat.name} className="border-t border-zinc-100 dark:border-zinc-800/70">
                        <th scope="row" className="p-4 font-medium text-zinc-700 sm:px-6 dark:text-zinc-300">
                          {feat.name}
                        </th>
                        <td className="p-4 text-center">
                          <MatrixCell value={feat.junior} />
                        </td>
                        <td className="bg-brand-red/[0.05] p-4 text-center">
                          <MatrixCell value={feat.athlete} featured />
                        </td>
                        <td className="p-4 text-center">
                          <MatrixCell value={feat.master} />
                        </td>
                      </tr>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Questions */}
        <section className="mx-auto mt-24 max-w-3xl sm:mt-32">
          <SectionHeader
            size="md"
            eyebrowStyle="text"
            eyebrow="Frequently asked questions"
            title={t.pricing.faqTitle1}
            accent={t.pricing.faqTitle2}
          />
          <div className="mt-10 divide-y divide-zinc-200 overflow-hidden rounded-2xl border border-zinc-200 dark:divide-zinc-800 dark:border-zinc-800">
            {pricingFaqs.map((faq, idx) => {
              const open = openFaq === idx
              return (
                <div key={faq.q}>
                  <h3>
                    <button
                      type="button"
                      id={`faq-question-${idx}`}
                      onClick={() => setOpenFaq(open ? null : idx)}
                      aria-expanded={open}
                      aria-controls={`faq-answer-${idx}`}
                      className="flex min-h-[56px] w-full cursor-pointer items-center justify-between gap-4 px-5 py-4 text-left text-sm font-semibold text-zinc-900 transition-colors hover:bg-zinc-50 sm:px-6 sm:text-base dark:text-white dark:hover:bg-zinc-900/60"
                    >
                      <span>{faq.q}</span>
                      <ChevronDown
                        aria-hidden="true"
                        className={cn(
                          'h-4 w-4 shrink-0 text-zinc-400 transition-transform duration-300 ease-out-expo',
                          open && 'rotate-180'
                        )}
                      />
                    </button>
                  </h3>
                  {/* Opens smoothly: the row animates from 0fr to 1fr; closed answers are inert. */}
                  <div
                    className={cn(
                      'grid transition-[grid-template-rows] duration-300 ease-out-expo motion-reduce:transition-none',
                      open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                    )}
                  >
                    <div
                      id={`faq-answer-${idx}`}
                      role="region"
                      aria-labelledby={`faq-question-${idx}`}
                      inert={!open}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-5 text-sm leading-relaxed text-zinc-600 sm:px-6 dark:text-zinc-400">{faq.a}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        <div className="mt-24 sm:mt-32">
          <CtaBanner
            eyebrow="Complimentary Dojang Pass"
            title="Experience The Dojang First"
            description="Step onto the spring floors, meet our certified 5th Dan Head Masters, and experience our science-backed training with zero financial obligation."
            href="/contact?subject=Free%20Trial%20Booking"
            label="Claim Free Trial Pass"
          />
        </div>
      </div>
    </div>
  )
}
