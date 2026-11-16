/**
 * ==============================================================================
 * PRICING & MEMBERSHIP PLANS DATA
 * ==============================================================================
 * The plans, the comparison table and the questions on /pricing. The content lives in content/pricing.json, which
 * the content editor (/keystatic) saves; this module checks that file and hands the pages the same lists as always.
 * The same plans, as tuition prices, family discounts and annual savings, are shown to visitors on /pricing.
 * ==============================================================================
 */
import raw from '../content/pricing.json' with { type: 'json' }
import { PLAN_BADGE_TYPES, PLAN_DIVISIONS } from '@/lib/content/options'
import { compact, file, translationsOf, type Node } from '@/lib/content/validate'

export interface PricingPlan {
  id: string
  name: string
  division: 'taekwondo' | 'science' | 'studio' | 'all'
  badge: string
  badgeType?: 'popular' | 'beginner' | 'master' | 'family'
  accentColor: string
  monthlyIndividualPrice: number | null
  annualIndividualPrice: number | null
  monthlyFamilyPrice: number | null // Discounted rate for family bundles
  annualFamilyPrice: number | null
  priceDisplay?: string
  period: string
  popular?: boolean
  description: string
  targetAudience: string
  features: string[]
  notIncluded?: string[]
  ctaText: string
  ctaSubject: string
  translations?: {
    km?: Partial<Omit<PricingPlan, 'id' | 'division' | 'translations'>>
    zh?: Partial<Omit<PricingPlan, 'id' | 'division' | 'translations'>>
    ko?: Partial<Omit<PricingPlan, 'id' | 'division' | 'translations'>>
  }
}

export interface PricingComparisonCategory {
  category: string
  features: {
    name: string
    junior: boolean | string
    athlete: boolean | string
    master: boolean | string
  }[]
}

/** A comparison cell is saved as a tick, a cross or text; the page wants true, false or the text. */
function readCell(cell: Node): boolean | string {
  const kind = cell.get('discriminant').oneOf(['yes', 'no', 'text'] as const)
  return kind === 'text' ? cell.get('value').text() : kind === 'yes'
}

const content = file('content/pricing.json', raw)

export const pricingPlans: PricingPlan[] = content
  .get('plans')
  .items()
  .map((plan): PricingPlan => {
    const badgeType = plan.get('badgeType').oneOf(['none', ...PLAN_BADGE_TYPES] as const)
    const notIncluded = plan.get('notIncluded').textList()
    return compact({
      id: plan.get('name').get('slug').text(),
      name: plan.get('name').get('name').text(),
      division: plan.get('division').oneOf(PLAN_DIVISIONS),
      badge: plan.get('badge').text(),
      badgeType: badgeType === 'none' ? undefined : badgeType,
      accentColor: plan.get('accentColor').text(),
      monthlyIndividualPrice: plan.get('monthlyIndividualPrice').optionalNumber() ?? null,
      annualIndividualPrice: plan.get('annualIndividualPrice').optionalNumber() ?? null,
      monthlyFamilyPrice: plan.get('monthlyFamilyPrice').optionalNumber() ?? null,
      annualFamilyPrice: plan.get('annualFamilyPrice').optionalNumber() ?? null,
      priceDisplay: plan.get('priceDisplay').optionalText(),
      period: plan.get('period').text(),
      popular: plan.get('popular').bool() ? true : undefined,
      description: plan.get('description').text(),
      targetAudience: plan.get('targetAudience').text(),
      features: plan.get('features').textList(),
      notIncluded: notIncluded.length ? notIncluded : undefined,
      ctaText: plan.get('ctaText').text(),
      ctaSubject: plan.get('ctaSubject').text(),
      translations: translationsOf(plan.get('translations'), {
        name: 'text',
        badge: 'text',
        description: 'text',
        targetAudience: 'text',
        ctaText: 'text',
      }) as PricingPlan['translations'],
    })
  })

export const pricingComparison: PricingComparisonCategory[] = content
  .get('comparison')
  .items()
  .map((group) => ({
    category: group.get('category').text(),
    features: group
      .get('features')
      .items()
      .map((row) => ({
        name: row.get('name').text(),
        junior: readCell(row.get('junior')),
        athlete: readCell(row.get('athlete')),
        master: readCell(row.get('master')),
      })),
  }))

export const pricingFaqs = content
  .get('faqs')
  .items()
  .map((faq) => ({
    q: faq.get('question').text(),
    a: faq.get('answer').text(),
  }))
