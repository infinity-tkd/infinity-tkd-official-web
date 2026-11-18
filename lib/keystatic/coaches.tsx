import { fields, singleton } from '@keystatic/core'
import { COACH_DIVISIONS } from '@/lib/content/options'
import { namedItem, optionalText, options, picture, requiredText, textList, translations } from './fields'

const social = (label: string) => optionalText(label, { description: 'The full address, for example https://instagram.com/yourname' })

/** content/coaches.json, read by data/coaches.ts (the coaches on /community). */
export const coaches = singleton({
  label: 'Coaches and team',
  path: 'content/coaches',
  format: { data: 'json' },
  schema: {
    coaches: fields.array(
      fields.object({
        name: namedItem('Name'),
        koreanName: optionalText('Korean name (optional)'),
        role: requiredText('Role', { description: 'For example Founder & Head of Academy' }),
        danRank: requiredText('Rank or title', { description: 'For example 4th Dan Black Belt (Kukkiwon)' }),
        division: fields.select({ label: 'Team', options: options(COACH_DIVISIONS), defaultValue: 'The Dojang' }),
        experience: requiredText('Experience', { description: 'For example 14+ Years' }),
        image: picture('coaches', 'Photo', { isRequired: true }),
        bio: requiredText('About', { multiline: true }),
        specialties: textList('Specialties', 'Specialty'),
        certifications: textList('Certifications', 'Certification'),
        philosophy: requiredText('Philosophy (quote)', { multiline: true }),
        socials: fields.object(
          {
            instagram: social('Instagram'),
            facebook: social('Facebook'),
            linkedin: social('LinkedIn'),
            youtube: social('YouTube'),
          },
          { label: 'Social media (optional)', layout: [6, 6, 6, 6] }
        ),
        translations: translations({
          name: optionalText('Name'),
          koreanName: optionalText('Korean name'),
          role: optionalText('Role'),
          danRank: optionalText('Rank or title'),
          experience: optionalText('Experience'),
          bio: optionalText('About', { multiline: true }),
          specialties: textList('Specialties', 'Specialty'),
          certifications: textList('Certifications', 'Certification'),
          philosophy: optionalText('Philosophy (quote)', { multiline: true }),
        }),
      }),
      {
        label: 'Coaches',
        description: 'The order here is the order on the website. Drag to change it.',
        slugField: 'name',
        itemLabel: (props) => props.fields.name.value.name || 'New coach',
      }
    ),
  },
})
