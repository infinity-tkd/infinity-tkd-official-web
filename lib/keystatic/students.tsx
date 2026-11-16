import { fields, singleton } from '@keystatic/core'
import { BELT_COLOURS, STUDENT_CATEGORIES } from '@/lib/content/options'
import { NEEDS_PERMISSION, namedItem, optionalText, options, permissionToPublish, picture, requiredText, textList, translations } from './fields'

const beltColour = () =>
  fields.select({
    label: 'Belt colour',
    options: BELT_COLOURS.map(({ label, value }) => ({ label, value })),
    defaultValue: '#FFFFFF',
  })

/** content/students.json, read by data/students.ts (the student spotlights and recent promotions on /community). */
export const students = singleton({
  label: 'Students',
  path: 'content/students',
  format: { data: 'json' },
  schema: {
    spotlights: fields.array(
      fields.object({
        name: namedItem('Name shown on the website'),
        permissionToPublish: permissionToPublish(),
        age: fields.integer({ label: 'Age', validation: { isRequired: true, min: 3, max: 99 } }),
        beltRank: requiredText('Belt rank', { description: 'For example 2nd Dan Black Belt, or Red Belt' }),
        beltHex: beltColour(),
        joinedYear: fields.text({
          label: 'Year joined',
          validation: { isRequired: true, pattern: { regex: /^\d{4}$/, message: 'Write a year like 2021' } },
        }),
        category: fields.select({ label: 'Group', options: options(STUDENT_CATEGORIES), defaultValue: 'Athlete of the Month' }),
        image: picture('students', 'Photo', { isRequired: true }),
        title: requiredText('Headline', { description: 'One line that sums up the story.' }),
        story: requiredText('Story', { multiline: true }),
        quote: requiredText('Quote', { multiline: true }),
        achievements: textList('Achievements', 'Achievement'),
        favoriteTechnique: optionalText('Favourite technique (optional)'),
        trainingGoal: optionalText('Training goal (optional)'),
        translations: translations({
          beltRank: optionalText('Belt rank'),
          title: optionalText('Headline'),
          story: optionalText('Story', { multiline: true }),
          quote: optionalText('Quote', { multiline: true }),
          achievements: textList('Achievements', 'Achievement'),
          favoriteTechnique: optionalText('Favourite technique'),
          trainingGoal: optionalText('Training goal'),
        }),
      }),
      {
        label: 'Student spotlights',
        description: 'The order here is the order on the website. Drag to change it.',
        slugField: 'name',
        itemLabel: (props) => `${props.fields.name.value.name || 'New student'}${props.fields.permissionToPublish.value ? '' : NEEDS_PERMISSION}`,
      }
    ),
    promotions: fields.array(
      fields.object({
        studentName: requiredText('Student name'),
        permissionToPublish: permissionToPublish(),
        promotedTo: requiredText('New belt', { description: 'For example Blue Belt (Oh Jang)' }),
        beltHex: beltColour(),
        date: requiredText('Month of the grading', { description: 'For example March 2026' }),
        examiningMaster: requiredText('Examined by'),
        poomsaeDemonstrated: requiredText('Forms shown', { description: 'For example Taegeuk 5 & 6' }),
      }),
      {
        label: 'Recent promotions',
        description: 'Newest first.',
        itemLabel: (props) =>
          `${props.fields.studentName.value || 'New promotion'}${props.fields.promotedTo.value ? `: ${props.fields.promotedTo.value}` : ''}${props.fields.permissionToPublish.value ? '' : NEEDS_PERMISSION}`,
      }
    ),
  },
})
