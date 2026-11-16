/**
 * The student spotlights and recent promotions (/community). They live in content/students.json, which the content
 * editor (/keystatic) saves; this module checks that file and hands the pages the same lists as always.
 *
 * Every person listed needs "Permission to publish" (a parent's or guardian's for a child). The tick is saved with
 * the entry and checked here: an entry without it stops the build, so it can never go live by accident.
 */
import raw from '../content/students.json' with { type: 'json' }
import { STUDENT_CATEGORIES } from '@/lib/content/options'
import { compact, file, translationsOf } from '@/lib/content/validate'

export interface StudentSpotlight {
  id: string
  name: string
  age: number
  beltRank: string
  beltHex: string
  joinedYear: string
  title: string
  story: string
  quote: string
  achievements: string[]
  image: string
  category: 'Athlete of the Month' | 'Black Belt Graduate' | 'Junior Champion' | 'Transformation'
  favoriteTechnique?: string
  trainingGoal?: string
  translations?: {
    km?: Partial<Omit<StudentSpotlight, 'id' | 'translations'>>
    zh?: Partial<Omit<StudentSpotlight, 'id' | 'translations'>>
    ko?: Partial<Omit<StudentSpotlight, 'id' | 'translations'>>
  }
}

export interface StudentMilestone {
  id: string
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
      age: student.get('age').number(),
      beltRank: student.get('beltRank').text(),
      beltHex: student.get('beltHex').colour(),
      joinedYear: student.get('joinedYear').text(),
      title: student.get('title').text(),
      story: student.get('story').text(),
      quote: student.get('quote').text(),
      achievements: student.get('achievements').textList(),
      image: student.get('image').text(),
      category: student.get('category').oneOf(STUDENT_CATEGORIES),
      favoriteTechnique: student.get('favoriteTechnique').optionalText(),
      trainingGoal: student.get('trainingGoal').optionalText(),
      translations: translationsOf(student.get('translations'), {
        beltRank: 'text',
        title: 'text',
        story: 'text',
        quote: 'text',
        achievements: 'list',
        favoriteTechnique: 'text',
        trainingGoal: 'text',
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
