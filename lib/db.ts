/**
 * ==============================================================================
 * INFINITY TAEKWONDO - ROBUST DATABASE ACCESS ENGINE & AUTO ERROR HANDLING
 * ==============================================================================
 * High-performance, zero-throw data access layer providing typed getters,
 * defensive fallbacks, keyword search, dynamic filtering, and automatic English
 * fallbacks for all localized database models across the application.
 * ==============================================================================
 */

import {
  siteConfig,
  academyCourses,
  beltProgression,
  studentAgeDivisions,
  classFormats,
  pricingPlans,
  pricingComparison,
  pricingFaqs,
  libraryItems,
  libraryCategoriesMeta,
  tournamentAchievements,
  achievementMetrics,
  coachFaculty,
  athleteSpotlights,
  recentPromotions,
  dojangBranches,
  weeklySchedule,
  teamMembers,
  type AcademyCourse,
  type BeltRank,
  type StudentAgeDivision,
  type ClassFormat,
  type PricingPlan,
  type LibraryItem,
  type LibraryCategory,
  type DifficultyLevel,
  type TrophyRecord,
  type CoachProfile,
  type StudentSpotlight,
  type StudentMilestone,
  type DojangBranch,
  type ScheduleSlot,
  type TeamMember,
} from '@/data'

import { getLocalizedItem, getLocalizedList, getLocalizedField } from '@/lib/i18n'
import type { Language } from '@/data/translations'

// Export i18n helpers for convenient import
export { getLocalizedItem, getLocalizedList, getLocalizedField }

// ==============================================================================
// 1. SITE CONFIG & BRAND ENGINE
// ==============================================================================
export function getSafeSiteConfig() {
  try {
    return siteConfig ?? {}
  } catch (err) {
    console.error('Error fetching siteConfig:', err)
    return {}
  }
}

// ==============================================================================
// 2. ACADEMY COURSES (WITH LOCALIZATION SUPPORT)
// ==============================================================================
export function getSafeAcademyCourses(
  division?: 'studio' | 'taekwondo' | 'science',
  language: Language = 'en'
): AcademyCourse[] {
  try {
    if (!Array.isArray(academyCourses)) return []
    let list = academyCourses
    if (division) {
      list = list.filter((c) => c?.division === division)
    }
    return getLocalizedList(list, language)
  } catch (err) {
    console.error('Error in getSafeAcademyCourses:', err)
    return []
  }
}

export function getSafeAcademyCourseById(id: string, language: Language = 'en'): AcademyCourse | null {
  try {
    if (!id || !Array.isArray(academyCourses)) return null
    const course = academyCourses.find((c) => c?.id === id) ?? null
    return course ? getLocalizedItem(course, language) : null
  } catch (err) {
    console.error(`Error finding course by id "${id}":`, err)
    return null
  }
}

// ==============================================================================
// 3. BELT PROGRESSION & POOMSAE ROADMAP
// ==============================================================================
export function getSafeBelts(language: Language = 'en'): BeltRank[] {
  try {
    if (!Array.isArray(beltProgression)) return []
    return getLocalizedList(beltProgression, language)
  } catch (err) {
    console.error('Error in getSafeBelts:', err)
    return []
  }
}

export function getSafeBeltById(id: string, language: Language = 'en'): BeltRank | null {
  try {
    if (!id || !Array.isArray(beltProgression)) return null
    const belt = beltProgression.find((b) => b?.id === id) ?? beltProgression[0] ?? null
    return belt ? getLocalizedItem(belt, language) : null
  } catch (err) {
    console.error(`Error finding belt by id "${id}":`, err)
    return null
  }
}

// ==============================================================================
// 4. STUDENT AGE DIVISIONS & CLASS FORMATS
// ==============================================================================
export function getSafeAgeDivisions(language: Language = 'en'): StudentAgeDivision[] {
  try {
    if (!Array.isArray(studentAgeDivisions)) return []
    return getLocalizedList(studentAgeDivisions, language)
  } catch (err) {
    console.error('Error in getSafeAgeDivisions:', err)
    return []
  }
}

export function getSafeClassFormats(language: Language = 'en'): ClassFormat[] {
  try {
    if (!Array.isArray(classFormats)) return []
    return getLocalizedList(classFormats, language)
  } catch (err) {
    console.error('Error in getSafeClassFormats:', err)
    return []
  }
}

// ==============================================================================
// 5. PRICING & MEMBERSHIP PLANS
// ==============================================================================
export function getSafePricingPlans(language: Language = 'en'): PricingPlan[] {
  try {
    if (!Array.isArray(pricingPlans)) return []
    return getLocalizedList(pricingPlans, language)
  } catch (err) {
    console.error('Error in getSafePricingPlans:', err)
    return []
  }
}

export function getSafePricingComparison(language: Language = 'en') {
  try {
    if (!Array.isArray(pricingComparison)) return []
    return getLocalizedList(pricingComparison, language)
  } catch (err) {
    console.error('Error in getSafePricingComparison:', err)
    return []
  }
}

export function getSafePricingFaqs(language: Language = 'en') {
  try {
    if (!Array.isArray(pricingFaqs)) return []
    return getLocalizedList(pricingFaqs, language)
  } catch (err) {
    console.error('Error in getSafePricingFaqs:', err)
    return []
  }
}

// ==============================================================================
// 6. CURRICULUM LIBRARY & ENCYCLOPEDIA
// ==============================================================================
export function getSafeLibraryCategories(language: Language = 'en') {
  try {
    if (!Array.isArray(libraryCategoriesMeta)) return []
    return getLocalizedList(libraryCategoriesMeta, language)
  } catch (err) {
    console.error('Error in getSafeLibraryCategories:', err)
    return []
  }
}

export function getSafeLibraryItems(
  category?: LibraryCategory | 'all',
  difficulty?: DifficultyLevel | 'all',
  language: Language = 'en'
): LibraryItem[] {
  try {
    if (!Array.isArray(libraryItems)) return []
    const filtered = libraryItems.filter((item) => {
      const matchCat = !category || category === 'all' || item?.category === category
      const matchDiff = !difficulty || difficulty === 'all' || item?.difficulty === difficulty
      return matchCat && matchDiff
    })
    return getLocalizedList(filtered, language)
  } catch (err) {
    console.error('Error in getSafeLibraryItems:', err)
    return []
  }
}

export function getSafeLibraryItemBySlug(
  category: string,
  slug: string,
  language: Language = 'en'
): LibraryItem | null {
  try {
    if (!slug || !Array.isArray(libraryItems)) return null
    const item = libraryItems.find((i) => i?.category === category && i?.slug === slug) ?? null
    return item ? getLocalizedItem(item, language) : null
  } catch (err) {
    console.error(`Error finding library item "${category}/${slug}":`, err)
    return null
  }
}

// ==============================================================================
// 7. TOURNAMENT ACHIEVEMENTS & MEDALISTS
// ==============================================================================
export function getSafeAchievements(category?: string, language: Language = 'en'): TrophyRecord[] {
  try {
    if (!Array.isArray(tournamentAchievements)) return []
    let list = tournamentAchievements
    if (category && category !== 'all') {
      list = list.filter((a) => a?.category === category)
    }
    return getLocalizedList(list, language)
  } catch (err) {
    console.error('Error in getSafeAchievements:', err)
    return []
  }
}

export function getSafeAchievementMetrics() {
  try {
    return achievementMetrics ?? {
      totalCompetitions: '200+',
      podiumMedals: '145+',
      goldMedals: '82',
      silverMedals: '41',
      bronzeMedals: '22',
      activeAthletes: '450+',
      blackBeltsCertified: '80+',
    }
  } catch (err) {
    console.error('Error in getSafeAchievementMetrics:', err)
    return {}
  }
}

// ==============================================================================
// 8. COACHES, STUDENTS & COMMUNITY
// ==============================================================================
export function getSafeCoaches(division?: string, language: Language = 'en'): CoachProfile[] {
  try {
    if (!Array.isArray(coachFaculty)) return []
    let list = coachFaculty
    if (division && division !== 'all') {
      list = list.filter((c) => c?.division === division)
    }
    return getLocalizedList(list, language)
  } catch (err) {
    console.error('Error in getSafeCoaches:', err)
    return []
  }
}

export function getSafeStudents(category?: string, language: Language = 'en'): StudentSpotlight[] {
  try {
    if (!Array.isArray(athleteSpotlights)) return []
    let list = athleteSpotlights
    if (category && category !== 'all') {
      list = list.filter((s) => s?.category === category)
    }
    return getLocalizedList(list, language)
  } catch (err) {
    console.error('Error in getSafeStudents:', err)
    return []
  }
}

export function getSafeRecentPromotions(language: Language = 'en'): StudentMilestone[] {
  try {
    if (!Array.isArray(recentPromotions)) return []
    return getLocalizedList(recentPromotions, language)
  } catch (err) {
    console.error('Error in getSafeRecentPromotions:', err)
    return []
  }
}

// ==============================================================================
// 9. LOCATIONS & CLASS TIMETABLES
// ==============================================================================
export function getSafeLocations(language: Language = 'en'): DojangBranch[] {
  try {
    if (!Array.isArray(dojangBranches)) return []
    return getLocalizedList(dojangBranches, language)
  } catch (err) {
    console.error('Error in getSafeLocations:', err)
    return []
  }
}

export function getSafeSchedule(day?: string, division?: string, language: Language = 'en'): ScheduleSlot[] {
  try {
    if (!Array.isArray(weeklySchedule)) return []
    const list = weeklySchedule.filter((item) => {
      const matchDay = !day || day === 'all' || item?.day === day
      const matchDiv = !division || division === 'all' || item?.division === division
      return matchDay && matchDiv
    })
    return getLocalizedList(list, language)
  } catch (err) {
    console.error('Error in getSafeSchedule:', err)
    return []
  }
}

export function getSafeTeamMembers(language: Language = 'en'): TeamMember[] {
  try {
    if (!Array.isArray(teamMembers)) return []
    return getLocalizedList(teamMembers, language)
  } catch (err) {
    console.error('Error in getSafeTeamMembers:', err)
    return []
  }
}
