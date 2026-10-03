/**
 * ==============================================================================
 * INFINITY TAEKWONDO - MASTER DATABASE BARREL EXPORT & SCHEMA GUIDE
 * ==============================================================================
 * This file serves as the centralized source of truth for all data files across
 * the application. All entities are 100% typed, easily expandable, and auto-guarded.
 *
 * HOW TO EDIT, UPDATE, ADD, OR DELETE DATA:
 * ------------------------------------------------------------------------------
 * 1. Academy Courses:     Edit `data/academy.ts`       (Programs, Syllabi, Prerequisites)
 * 2. Belt Progression:    Edit `data/belts.ts`         (White to Black Dan, Poomsae, Kyokpa)
 * 3. Age & Formats:       Edit `data/ageDivisions.ts`  (Tigers to Elders, General/Kids/Private)
 * 4. Pricing & Plans:     Edit `data/pricing.ts`       (Monthly, Annual, Family Discounts)
 * 5. Curriculum Library:  Edit `data/library.ts`       (Poomsae, Kicks, Hands, Stances, Tricking)
 * 6. Tournament Medals:   Edit `data/achievements.ts`  (Trophies, Student Medalists, Dan Records)
 * 7. Master Coaches:      Edit `data/coaches.ts`       (5th Dan Masters, Bios, Certifications)
 * 8. Student Spotlights:  Edit `data/students.ts`      (Student Stories, Belt Graduates)
 * 9. Dojang Branches:     Edit `data/locations.ts`     (Factory HQ, BKK1, Google Maps, Timetables)
 * 10. Class Schedule:     Edit `data/schedule.ts`      (Weekly Timetables by Day & Division)
 * 11. Master Settings:    Edit `config/siteSettings.ts`(Theme tokens, Colors, Security, Radiuses)
 * 12. Translations:       Edit `data/translations.ts`  (EN, KM, ZH, KO multi-language dictionary)
 * ==============================================================================
 */

export * from './siteConfig'
export * from './academy'
export * from './belts'
export * from './ageDivisions'
export * from './pricing'
export * from './library'
export * from './achievements'
export * from './coaches'
export * from './students'
export * from './locations'
export * from './schedule'
export * from './team'
export * from './translations'
