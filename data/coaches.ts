/**
 * The coaches and team (/community). The people themselves live in content/coaches.json, which the content editor
 * (/keystatic) saves; this module checks that file and hands the pages the same list as always.
 */
import raw from '../content/coaches.json' with { type: 'json' }
import { COACH_DIVISIONS } from '@/lib/content/options'
import { compact, file, translationsOf } from '@/lib/content/validate'

export interface CoachProfile {
  id: string
  name: string
  koreanName?: string
  role: string
  danRank: string
  division: 'The Dojang' | 'Sport Science' | 'Creative Studio' | 'Executive'
  experience: string
  bio: string
  image: string
  specialties: string[]
  certifications: string[]
  philosophy: string
  socials: {
    instagram?: string
    facebook?: string
    linkedin?: string
    youtube?: string
  }
  translations?: {
    km?: Partial<Omit<CoachProfile, 'id' | 'division' | 'translations'>>
    zh?: Partial<Omit<CoachProfile, 'id' | 'division' | 'translations'>>
    ko?: Partial<Omit<CoachProfile, 'id' | 'division' | 'translations'>>
  }
}

export const coachFaculty: CoachProfile[] = file('content/coaches.json', raw)
  .get('coaches')
  .items()
  .map((coach): CoachProfile => {
    const socials = coach.get('socials')
    return compact({
      id: coach.get('name').get('slug').text(),
      name: coach.get('name').get('name').text(),
      koreanName: coach.get('koreanName').optionalText(),
      role: coach.get('role').text(),
      danRank: coach.get('danRank').text(),
      division: coach.get('division').oneOf(COACH_DIVISIONS),
      experience: coach.get('experience').text(),
      bio: coach.get('bio').text(),
      image: coach.get('image').text(),
      specialties: coach.get('specialties').textList(),
      certifications: coach.get('certifications').textList(),
      philosophy: coach.get('philosophy').text(),
      socials: compact({
        instagram: socials.get('instagram').optionalText(),
        facebook: socials.get('facebook').optionalText(),
        linkedin: socials.get('linkedin').optionalText(),
        youtube: socials.get('youtube').optionalText(),
      }),
      translations: translationsOf(coach.get('translations'), {
        name: 'text',
        koreanName: 'text',
        role: 'text',
        danRank: 'text',
        experience: 'text',
        bio: 'text',
        specialties: 'list',
        certifications: 'list',
        philosophy: 'text',
      }) as CoachProfile['translations'],
    })
  })
