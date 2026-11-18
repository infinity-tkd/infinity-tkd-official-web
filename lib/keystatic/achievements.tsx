import { fields, singleton } from '@keystatic/core'
import {
  ACHIEVEMENT_TYPES,
  ACHIEVEMENT_TYPE_LABELS,
  BADGE_COLOURS,
  BELT_COLOURS,
  MEDALS,
  TROPHY_CATEGORIES,
  TROPHY_MEDALS,
} from '@/lib/content/options'
import { SHORT_NAME_HELP, optionalText, options, permissionMark, permissionToPublish, picture, requiredText, textList, translations } from './fields'

/** content/achievements.json, read by data/achievements.ts (the numbers and medals on /achievements and the home page). */
export const achievements = singleton({
  label: 'Achievements and medals',
  path: 'content/achievements',
  format: { data: 'json' },
  schema: {
    metrics: fields.array(
      fields.object({
        label: requiredText('Label', { description: 'For example Total Competitions' }),
        value: requiredText('Number', { description: 'Shown big, for example 200+' }),
        description: requiredText('Description', { multiline: true }),
      }),
      {
        label: 'Headline numbers',
        itemLabel: (props) => `${props.fields.value.value} ${props.fields.label.value}`.trim() || 'New number',
      }
    ),
    records: fields.array(
      fields.object({
        year: fields.text({ label: 'Year', validation: { isRequired: true, pattern: { regex: /^\d{4}$/, message: 'Write a year like 2024' } } }),
        tournament: requiredText('Tournament or achievement'),
        category: fields.select({ label: 'Category', options: options(TROPHY_CATEGORIES), defaultValue: 'National' }),
        achievementType: fields.select({
          label: 'Kind of achievement',
          options: options(ACHIEVEMENT_TYPES, ACHIEVEMENT_TYPE_LABELS),
          defaultValue: 'tournament',
        }),
        medal: fields.select({ label: 'Medal', options: options(TROPHY_MEDALS), defaultValue: 'Gold' }),
        badgeColor: fields.select({
          label: 'Badge colour',
          options: BADGE_COLOURS.map(({ label, value }) => ({ label, value })),
          defaultValue: '#FFD505',
        }),
        division: requiredText('Division', { description: 'For example Senior Recognized Poomsae Team' }),
        athleteOrTeam: requiredText('Athlete or team'),
        location: requiredText('Place', { description: 'For example Phnom Penh, Cambodia' }),
        score: optionalText('Score (optional)', { description: 'For example 8.64 / 10.0' }),
        verifiedBy: optionalText('Confirmed by (optional)', { description: 'The organisation that confirms the result.' }),
        description: requiredText('Description', { multiline: true }),
        highlights: textList('Highlights', 'Highlight'),
        keyTechniques: textList('Key techniques', 'Technique'),
        image: picture('achievements', 'Picture (optional)'),
        competitors: fields.array(
          fields.object({
            name: requiredText('Name to show', { description: SHORT_NAME_HELP }),
            permissionToPublish: permissionToPublish(),
            studentId: optionalText('Student ID (optional)', {
              description: 'The ID of this person on the Students page, if they have an entry there.',
            }),
            medal: fields.select({ label: 'Medal', options: options(MEDALS), defaultValue: 'Gold' }),
            division: requiredText('Division'),
            beltRank: requiredText('Belt rank', { description: 'For example 1st Dan Black Belt' }),
            beltHex: fields.select({
              label: 'Belt colour',
              options: BELT_COLOURS.map(({ label, value }) => ({ label, value })),
              defaultValue: '#000000',
            }),
            score: optionalText('Score (optional)'),
            highlight: optionalText('Highlight (optional)', { multiline: true }),
            image: picture('achievements', 'Photo (optional)'),
            translations: translations({
              division: optionalText('Division'),
              beltRank: optionalText('Belt rank'),
              highlight: optionalText('Highlight', { multiline: true }),
            }),
          }),
          {
            label: 'Students who won',
            description: 'Show a first name or initials only, with the belt and the result. No surname or age.',
            itemLabel: (props) => `${props.fields.name.value || 'New student'}${permissionMark(props.fields.permissionToPublish.value)}`,
          }
        ),
        translations: translations({
          tournament: optionalText('Tournament or achievement'),
          division: optionalText('Division'),
          athleteOrTeam: optionalText('Athlete or team'),
          location: optionalText('Place'),
          verifiedBy: optionalText('Confirmed by'),
          description: optionalText('Description', { multiline: true }),
          highlights: textList('Highlights', 'Highlight'),
          keyTechniques: textList('Key techniques', 'Technique'),
        }),
      }),
      {
        label: 'Medals and awards',
        description: 'The first ones are shown on the home page, so keep the best at the top. Drag to change the order.',
        itemLabel: (props) => `${props.fields.year.value} ${props.fields.tournament.value}`.trim() || 'New award',
      }
    ),
  },
})
