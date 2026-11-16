/**
 * The headline numbers and the medals and awards (/achievements and the home page). They live in
 * content/achievements.json, which the content editor (/keystatic) saves; this module checks that file and hands
 * the pages the same lists as always. The first awards in the list are the ones the home page features.
 *
 * Every student named under an award needs "Permission to publish" (a parent's or guardian's for a child): an entry
 * without the tick stops the build, so it can never go live by accident.
 */
import raw from '../content/achievements.json' with { type: 'json' }
import { ACHIEVEMENT_TYPES, MEDALS, TROPHY_CATEGORIES, TROPHY_MEDALS } from '@/lib/content/options'
import { compact, file, translationsOf } from '@/lib/content/validate'

export interface StudentCompetitor {
  id?: string
  name: string
  studentId?: string
  medal: 'Gold' | 'Silver' | 'Bronze' | 'Special Honor' | 'Finalist'
  division: string
  beltRank: string
  beltHex: string
  age?: number
  score?: string
  highlight?: string
  image?: string
  translations?: {
    km?: Partial<Omit<StudentCompetitor, 'id' | 'translations'>>
    zh?: Partial<Omit<StudentCompetitor, 'id' | 'translations'>>
    ko?: Partial<Omit<StudentCompetitor, 'id' | 'translations'>>
  }
}

export interface TrophyRecord {
  id: string
  year: string
  tournament: string
  category: 'National' | 'International' | 'Freestyle Tricking' | 'Kukkiwon Dan' | 'Cinema & Stunts' | 'Academic & Honor'
  achievementType: 'tournament' | 'kukkiwon' | 'stunt_cinema' | 'academic' | 'community_honor'
  medal: 'Gold' | 'Silver' | 'Bronze' | 'Special Honor' | 'Grand Champion'
  division: string
  athleteOrTeam: string
  location: string
  score?: string
  highlights?: string[]
  keyTechniques?: string[]
  description: string
  badgeColor: string
  verifiedBy?: string
  image?: string
  studentCompetitors?: StudentCompetitor[]
  translations?: {
    km?: Partial<Omit<TrophyRecord, 'id' | 'translations'>>
    zh?: Partial<Omit<TrophyRecord, 'id' | 'translations'>>
    ko?: Partial<Omit<TrophyRecord, 'id' | 'translations'>>
  }
}

export interface MetricHighlight {
  label: string
  value: string
  description: string
}

const content = file('content/achievements.json', raw)

export const achievementMetrics: MetricHighlight[] = content
  .get('metrics')
  .items()
  .map((metric) => ({
    label: metric.get('label').text(),
    value: metric.get('value').text(),
    description: metric.get('description').text(),
  }))

// Ids only tell list items apart (comp-1, comp-2... across all awards), so they follow the order of the list.
let competitorNumber = 0

export const tournamentAchievements: TrophyRecord[] = content
  .get('records')
  .items()
  .map((record, index): TrophyRecord => {
    const competitors = record
      .get('competitors')
      .items()
      .map((student): StudentCompetitor => {
        student.requirePermission()
        competitorNumber += 1
        return compact({
          id: `comp-${competitorNumber}`,
          name: student.get('name').text(),
          studentId: student.get('studentId').optionalText(),
          medal: student.get('medal').oneOf(MEDALS),
          division: student.get('division').text(),
          beltRank: student.get('beltRank').text(),
          beltHex: student.get('beltHex').colour(),
          age: student.get('age').optionalNumber(),
          score: student.get('score').optionalText(),
          highlight: student.get('highlight').optionalText(),
          image: student.get('image').optionalText(),
          translations: translationsOf(student.get('translations'), {
            division: 'text',
            beltRank: 'text',
            highlight: 'text',
          }) as StudentCompetitor['translations'],
        })
      })
    const highlights = record.get('highlights').textList()
    const keyTechniques = record.get('keyTechniques').textList()

    return compact({
      id: `ach-${String(index + 1).padStart(2, '0')}`,
      year: record.get('year').text(),
      tournament: record.get('tournament').text(),
      category: record.get('category').oneOf(TROPHY_CATEGORIES),
      achievementType: record.get('achievementType').oneOf(ACHIEVEMENT_TYPES),
      medal: record.get('medal').oneOf(TROPHY_MEDALS),
      division: record.get('division').text(),
      athleteOrTeam: record.get('athleteOrTeam').text(),
      location: record.get('location').text(),
      score: record.get('score').optionalText(),
      highlights: highlights.length ? highlights : undefined,
      keyTechniques: keyTechniques.length ? keyTechniques : undefined,
      description: record.get('description').text(),
      badgeColor: record.get('badgeColor').colour(),
      verifiedBy: record.get('verifiedBy').optionalText(),
      image: record.get('image').optionalText(),
      studentCompetitors: competitors.length ? competitors : undefined,
      translations: translationsOf(record.get('translations'), {
        tournament: 'text',
        division: 'text',
        athleteOrTeam: 'text',
        location: 'text',
        verifiedBy: 'text',
        description: 'text',
        highlights: 'list',
        keyTechniques: 'list',
      }) as TrophyRecord['translations'],
    })
  })
