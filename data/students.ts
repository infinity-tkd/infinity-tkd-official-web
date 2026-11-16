/**
 * The student spotlights and recent promotions (/community). They live in content/students.json, which the content
 * editor (/keystatic) saves; this module checks that file and hands the pages the same lists as always.
 *
 * Entries are short on purpose: a first name or initials, a photo and a short note. The website shows no surname, age
 * or story, so a child is never identifiable by name (docs/editing-guide.md says how to write a name).
 *
 * Every person listed needs "Permission to publish" (a parent's or guardian's for a child), see
 * lib/content/permission.ts: an entry with no tick at all stops the build, so it can never go live by accident. An
 * entry that was live before permission was recorded is marked "to-confirm" and `npm run check:data` reminds
 * everyone how many are still waiting.
 */
import raw from '../content/students.json' with { type: 'json' }
import { STUDENT_CATEGORIES } from '@/lib/content/options'
import { compact, file, translationsOf } from '@/lib/content/validate'

export interface StudentSpotlight {
  id: string
  /** A first name or initials only, never a full name. */
  name: string
  beltRank: string
  beltHex: string
  note: string
  image: string
  category: 'Athlete of the Month' | 'Black Belt Graduate' | 'Junior Champion' | 'Transformation'
  translations?: {
    km?: Partial<Omit<StudentSpotlight, 'id' | 'translations'>>
    zh?: Partial<Omit<StudentSpotlight, 'id' | 'translations'>>
    ko?: Partial<Omit<StudentSpotlight, 'id' | 'translations'>>
  }
}

export interface StudentMilestone {
  id: string
  /** A first name or initials only, never a full name. */
  studentName: string
  promotedTo: string
  beltHex: string
  date: string
  examiningMaster: string
  poomsaeDemonstrated: string
}

const content = file('content/students.json', raw)

export const athleteSpotlights: StudentSpotlight[] = content
  .get('spotlights')
  .items()
  .map((student): StudentSpotlight => {
    student.requirePermission()
    return compact({
      id: student.get('name').get('slug').text(),
      name: student.get('name').get('name').text(),
      beltRank: student.get('beltRank').text(),
      beltHex: student.get('beltHex').colour(),
      note: student.get('note').text(),
      image: student.get('image').text(),
      category: student.get('category').oneOf(STUDENT_CATEGORIES),
      translations: translationsOf(student.get('translations'), {
        beltRank: 'text',
        note: 'text',
      }) as StudentSpotlight['translations'],
    })
  })

export const recentPromotions: StudentMilestone[] = content
  .get('promotions')
  .items()
  .map((promotion, index): StudentMilestone => {
    promotion.requirePermission()
    return {
      id: `prom-${index + 1}`,
      studentName: promotion.get('studentName').text(),
      promotedTo: promotion.get('promotedTo').text(),
      beltHex: promotion.get('beltHex').colour(),
      date: promotion.get('date').text(),
      examiningMaster: promotion.get('examiningMaster').text(),
      poomsaeDemonstrated: promotion.get('poomsaeDemonstrated').text(),
    }
  })
