import { fields, singleton } from '@keystatic/core'
import { HEX_COLOUR, PLAN_BADGE_LABELS, PLAN_BADGE_TYPES, PLAN_DIVISIONS, PLAN_DIVISION_LABELS } from '@/lib/content/options'
import { namedItem, optionalText, options, requiredText, textList, translations } from './fields'

/** A cell of the comparison table: a tick, a cross, or a few words. */
const cell = (label: string) =>
  fields.conditional(
    fields.select({
      label,
      options: [
        { label: 'Included (tick)', value: 'yes' },
        { label: 'Not included (cross)', value: 'no' },
        { label: 'Text', value: 'text' },
      ],
      defaultValue: 'yes',
    }),
    {
      yes: fields.empty(),
      no: fields.empty(),
      text: fields.text({ label: 'Text', validation: { isRequired: true } }),
    }
  )

const price = (label: string, description?: string) => fields.number({ label, description, validation: { min: 0 } })

/** content/pricing.json, read by data/pricing.ts (the plans, comparison table and questions on /pricing). */
export const pricing = singleton({
  label: 'Pricing and membership plans',
  path: 'content/pricing',
  format: { data: 'json' },
  schema: {
    plans: fields.array(
      fields.object({
        name: namedItem('Plan name'),
        division: fields.select({ label: 'Programme', options: options(PLAN_DIVISIONS, PLAN_DIVISION_LABELS), defaultValue: 'taekwondo' }),
        badge: requiredText('Badge text', { description: 'The small label on the plan, for example "Most Popular".' }),
        badgeType: fields.select({
          label: 'Badge style',
          options: [{ label: 'Plain', value: 'none' }, ...options(PLAN_BADGE_TYPES, PLAN_BADGE_LABELS)],
          defaultValue: 'none',
        }),
        popular: fields.checkbox({ label: 'Highlight as the most popular plan', description: 'Shows the plan as the big highlighted card.' }),
        accentColor: fields.text({
          label: 'Accent colour',
          description: 'A colour like #EF2F38 (a # and six letters or numbers).',
          validation: { isRequired: true, pattern: { regex: HEX_COLOUR, message: 'Write the colour like #EF2F38' } },
        }),
        monthlyIndividualPrice: price('Price per month: one person ($)', 'Leave all four prices empty for a plan with no fixed price.'),
        annualIndividualPrice: price('Price per month when paid for the year: one person ($)'),
        monthlyFamilyPrice: price('Family price per month, per person ($)'),
        annualFamilyPrice: price('Family price per month when paid for the year, per person ($)'),
        priceDisplay: optionalText('Price text instead of numbers', { description: 'For a plan with no fixed price, for example $Custom.' }),
        period: requiredText('Period', { description: 'What the price is for: month, or program.' }),
        description: requiredText('Description', { multiline: true }),
        targetAudience: requiredText('Who it is for'),
        features: textList('What is included', 'Feature'),
        notIncluded: textList('What is not included (optional)', 'Item'),
        ctaText: requiredText('Button text'),
        ctaSubject: requiredText('Email subject', { description: 'The subject line of the message a visitor sends when they click the button.' }),
        translations: translations({
          name: optionalText('Plan name'),
          badge: optionalText('Badge text'),
          description: optionalText('Description', { multiline: true }),
          targetAudience: optionalText('Who it is for'),
          ctaText: optionalText('Button text'),
        }),
      }),
      {
        label: 'Plans',
        slugField: 'name',
        itemLabel: (props) => props.fields.name.value.name || 'New plan',
      }
    ),
    comparison: fields.array(
      fields.object({
        category: requiredText('Group title', { description: 'For example Training & Classes.' }),
        features: fields.array(
          fields.object({
            name: requiredText('What is compared'),
            junior: cell('Junior Warriors & Tigers'),
            athlete: cell('Pro Athlete Membership'),
            master: cell('Private Master Coaching'),
          }),
          { label: 'Rows', itemLabel: (props) => props.fields.name.value || 'New row' }
        ),
      }),
      { label: 'Comparison table', itemLabel: (props) => props.fields.category.value || 'New group' }
    ),
    faqs: fields.array(
      fields.object({
        question: requiredText('Question'),
        answer: requiredText('Answer', { multiline: true }),
      }),
      { label: 'Frequently asked questions', itemLabel: (props) => props.fields.question.value || 'New question' }
    ),
  },
})
