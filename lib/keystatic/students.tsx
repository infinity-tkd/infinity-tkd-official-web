import { fields, singleton } from '@keystatic/core'
import { BELT_COLOURS, STUDENT_CATEGORIES } from '@/lib/content/options'
import { SHORT_NAME_HELP, namedItem, optionalText, options, permissionMark, permissionToPublish, picture, requiredText, translations } from './fields'

const beltColour = () =>
  fields.select({
    label: 'Belt colour',
    options: BELT_COLOURS.map(({ label, value }) => ({ label, value })),
    defaultValue: '#FFFFFF',
  })

/**
 * content/students.json, read by data/students.ts (the student spotlights and recent promotions on /community).
 * Entries are short on purpose: a first name or initials, a photo and a short note. No surname, age or story.
 */
export const students = singleton({
  label: 'Students',
  path: 'content/students',
  format: { data: 'json' },
  schema: {
    spotlights: fields.array(
      fields.object({
        name: namedItem('Name to show', SHORT_NAME_HELP),
        permissionToPublish: permissionToPublish(),
        beltRank: requiredText('Belt rank', { description: 'For example 2nd Dan Black Belt, or Red Belt' }),
        beltHex: beltColour(),
        category: fields.select({ label: 'Group', options: options(STUDENT_CATEGORIES), defaultValue: 'Athlete of the Month' }),
        image: picture('students', 'Photo', { isRequired: true }),
        note: fields.text({
          label: 'Short note',
          description: 'One or two short sentences about this student, under 200 characters. No surname, age or school.',
          multiline: true,
          validation: { isRequired: true, length: { max: 200 } },
        }),
        translations: translations({
          beltRank: optionalText('Belt rank'),
          note: optionalText('Short note', { multiline: true }),
        }),
      }),
      {
        label: 'Student spotlights',
        description: 'Short entries: a first name or initials, a photo and a short note. The order here is the order on the website. Drag to change it.',
        slugField: 'name',
        itemLabel: (props) => `${props.fields.name.value.name || 'New student'}${permissionMark(props.fields.permissionToPublish.value)}`,
      }
    ),
    promotions: fields.array(
      fields.object({
        studentName: requiredText('Name to show', { description: SHORT_NAME_HELP }),
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
          `${props.fields.studentName.value || 'New promotion'}${props.fields.promotedTo.value ? `: ${props.fields.promotedTo.value}` : ''}${permissionMark(props.fields.permissionToPublish.value)}`,
      }
    ),
  },
})
