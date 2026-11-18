import { fields, singleton } from '@keystatic/core'
import { ACCENT_COLOURS, CLASS_FORMAT_ICONS, CLASS_FORMAT_ICON_LABELS } from '@/lib/content/options'
import { namedItem, optionalText, options, picture, requiredText, textList, translations } from './fields'

const accentColour = (label: string, defaultValue: (typeof ACCENT_COLOURS)[number]['value']) =>
  fields.select({ label, options: ACCENT_COLOURS.map(({ label: name, value }) => ({ label: name, value })), defaultValue })

/**
 * content/ageDivisions.json, read by data/ageDivisions.ts: the age groups and class types shown on the Memberships
 * page (/pricing) and on /academy.
 */
export const ageGroups = singleton({
  label: 'Age groups and class types',
  path: 'content/ageDivisions',
  format: { data: 'json' },
  schema: {
    ageGroups: fields.array(
      fields.object({
        name: namedItem('Name'),
        ageRange: requiredText('Ages', { description: 'For example Ages 7 – 11' }),
        koreanTitle: requiredText('Korean name'),
        tagline: requiredText('Tagline', { description: 'One line under the name.' }),
        badgeColor: accentColour('Colour', '#FFD505'),
        image: picture('age-groups', 'Picture', { isRequired: true }),
        developmentFocus: requiredText('What it develops', { multiline: true }),
        keyCurriculum: textList('Key lessons', 'Lesson'),
        classDuration: requiredText('Class length', { description: 'For example 60 Minutes' }),
        safetyMeasures: requiredText('Safety', { multiline: true }),
        translations: translations({
          name: optionalText('Name'),
          ageRange: optionalText('Ages'),
          koreanTitle: optionalText('Korean name'),
          tagline: optionalText('Tagline'),
          developmentFocus: optionalText('What it develops', { multiline: true }),
          keyCurriculum: textList('Key lessons', 'Lesson'),
          classDuration: optionalText('Class length'),
          safetyMeasures: optionalText('Safety', { multiline: true }),
        }),
      }),
      {
        label: 'Age groups',
        description: 'The order here is the order on the website. Drag to change it.',
        slugField: 'name',
        itemLabel: (props) => `${props.fields.name.value.name || 'New age group'}${props.fields.ageRange.value ? `: ${props.fields.ageRange.value}` : ''}`,
      }
    ),
    classFormats: fields.array(
      fields.object({
        title: namedItem('Title'),
        subtitle: requiredText('Subtitle'),
        iconName: fields.select({
          label: 'Icon',
          options: options(CLASS_FORMAT_ICONS, CLASS_FORMAT_ICON_LABELS),
          defaultValue: 'Users',
        }),
        accentColor: accentColour('Colour', '#EF2F38'),
        badge: requiredText('Badge', { description: 'The small label, for example Most Popular.' }),
        description: requiredText('Description', { multiline: true }),
        idealFor: requiredText('Ideal for', { multiline: true }),
        benefits: textList('Benefits', 'Benefit'),
        ratio: requiredText('Coach ratio', { description: 'For example 1:12 Coach Ratio' }),
        translations: translations({
          title: optionalText('Title'),
          subtitle: optionalText('Subtitle'),
          badge: optionalText('Badge'),
          description: optionalText('Description', { multiline: true }),
          idealFor: optionalText('Ideal for', { multiline: true }),
          benefits: textList('Benefits', 'Benefit'),
          ratio: optionalText('Coach ratio'),
        }),
      }),
      {
        label: 'Class types',
        description: 'The order here is the order on the website. Drag to change it.',
        slugField: 'title',
        itemLabel: (props) => props.fields.title.value.name || 'New class type',
      }
    ),
  },
})
