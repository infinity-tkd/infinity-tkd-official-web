/**
 * ==============================================================================
 * STUDENT AGE DIVISIONS & CLASS FORMATS DATA
 * ==============================================================================
 * Student age brackets (from Little Tigers to Golden Masters) and training class formats (General, Kids-Only,
 * Private 1-on-1), shown on the Memberships page (/pricing) and on /academy. They live in content/ageDivisions.json,
 * which the content editor (/keystatic) saves; this module checks that file and hands the pages the same lists as always.
 * ==============================================================================
 */
import raw from '../content/ageDivisions.json' with { type: 'json' }
import { CLASS_FORMAT_ICONS } from '@/lib/content/options'
import { compact, file, translationsOf } from '@/lib/content/validate'

export interface StudentAgeDivision {
  id: string
  name: string
  ageRange: string
  koreanTitle: string
  tagline: string
  badgeColor: string
  image: string
  developmentFocus: string
  keyCurriculum: string[]
  classDuration: string
  safetyMeasures: string
  translations?: {
    km?: Partial<Omit<StudentAgeDivision, 'id' | 'translations'>>
    zh?: Partial<Omit<StudentAgeDivision, 'id' | 'translations'>>
    ko?: Partial<Omit<StudentAgeDivision, 'id' | 'translations'>>
  }
}

export interface ClassFormat {
  id: string
  title: string
  subtitle: string
  iconName: 'Users' | 'Smile' | 'Target'
  accentColor: string
  badge: string
  description: string
  idealFor: string
  benefits: string[]
  ratio: string
  translations?: {
    km?: Partial<Omit<ClassFormat, 'id' | 'translations'>>
    zh?: Partial<Omit<ClassFormat, 'id' | 'translations'>>
    ko?: Partial<Omit<ClassFormat, 'id' | 'translations'>>
  }
}

const content = file('content/ageDivisions.json', raw)

export const studentAgeDivisions: StudentAgeDivision[] = content
  .get('ageGroups')
  .items()
  .map((group): StudentAgeDivision =>
    compact({
      id: group.get('name').get('slug').text(),
      name: group.get('name').get('name').text(),
      ageRange: group.get('ageRange').text(),
      koreanTitle: group.get('koreanTitle').text(),
      tagline: group.get('tagline').text(),
      badgeColor: group.get('badgeColor').colour(),
      image: group.get('image').text(),
      developmentFocus: group.get('developmentFocus').text(),
      keyCurriculum: group.get('keyCurriculum').textList(),
      classDuration: group.get('classDuration').text(),
      safetyMeasures: group.get('safetyMeasures').text(),
      translations: translationsOf(group.get('translations'), {
        name: 'text',
        ageRange: 'text',
        koreanTitle: 'text',
        tagline: 'text',
        developmentFocus: 'text',
        keyCurriculum: 'list',
        classDuration: 'text',
        safetyMeasures: 'text',
      }) as StudentAgeDivision['translations'],
    })
  )

export const classFormats: ClassFormat[] = content
  .get('classFormats')
  .items()
  .map((format): ClassFormat =>
    compact({
      id: format.get('title').get('slug').text(),
      title: format.get('title').get('name').text(),
      subtitle: format.get('subtitle').text(),
      iconName: format.get('iconName').oneOf(CLASS_FORMAT_ICONS),
      accentColor: format.get('accentColor').colour(),
      badge: format.get('badge').text(),
      description: format.get('description').text(),
      idealFor: format.get('idealFor').text(),
      benefits: format.get('benefits').textList(),
      ratio: format.get('ratio').text(),
      translations: translationsOf(format.get('translations'), {
        title: 'text',
        subtitle: 'text',
        badge: 'text',
        description: 'text',
        idealFor: 'text',
        benefits: 'list',
        ratio: 'text',
      }) as ClassFormat['translations'],
    })
  )
