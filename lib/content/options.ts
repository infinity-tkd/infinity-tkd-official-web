/**
 * The fixed choices in the content: days, programme types, medals and so on.
 *
 * One list, used twice: the content editor turns it into a dropdown (so an editor can only pick a valid value), and
 * the data modules check the saved value against it (so a hand-edited file cannot slip a wrong one through).
 * The page code keeps its own type for each choice; a mismatch with these lists is a type error at build time.
 */

export const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'] as const

/** Programme types in the weekly timetable. */
export const SCHEDULE_DIVISIONS = ['taekwondo', 'science', 'studio'] as const
export const SCHEDULE_DIVISION_LABELS: Record<(typeof SCHEDULE_DIVISIONS)[number], string> = {
  taekwondo: 'Taekwondo',
  science: 'Sport Science',
  studio: 'Creative Studio',
}

/** Membership plans. `all` is a plan that covers every programme. */
export const PLAN_DIVISIONS = ['taekwondo', 'science', 'studio', 'all'] as const
export const PLAN_DIVISION_LABELS: Record<(typeof PLAN_DIVISIONS)[number], string> = {
  ...SCHEDULE_DIVISION_LABELS,
  all: 'All programmes',
}

export const PLAN_BADGE_TYPES = ['popular', 'beginner', 'master', 'family'] as const
export const PLAN_BADGE_LABELS: Record<(typeof PLAN_BADGE_TYPES)[number], string> = {
  popular: 'Popular (highlighted)',
  beginner: 'Beginner',
  master: 'Master',
  family: 'Family',
}

export const COACH_DIVISIONS = ['The Dojang', 'Sport Science', 'Creative Studio', 'Executive'] as const

export const STUDENT_CATEGORIES = ['Athlete of the Month', 'Black Belt Graduate', 'Junior Champion', 'Transformation'] as const

export const MEDALS = ['Gold', 'Silver', 'Bronze', 'Special Honor', 'Finalist'] as const
export const TROPHY_MEDALS = ['Gold', 'Silver', 'Bronze', 'Special Honor', 'Grand Champion'] as const

export const TROPHY_CATEGORIES = ['National', 'International', 'Freestyle Tricking', 'Kukkiwon Dan', 'Cinema & Stunts', 'Academic & Honor'] as const

export const ACHIEVEMENT_TYPES = ['tournament', 'kukkiwon', 'stunt_cinema', 'academic', 'community_honor'] as const
export const ACHIEVEMENT_TYPE_LABELS: Record<(typeof ACHIEVEMENT_TYPES)[number], string> = {
  tournament: 'Tournament',
  kukkiwon: 'Kukkiwon grading',
  stunt_cinema: 'Cinema and stunts',
  academic: 'Academic',
  community_honor: 'Community honour',
}

/** Belt colours, as the pages draw them (the same colours as data/belts.ts). */
export const BELT_COLOURS = [
  { label: 'White belt', value: '#FFFFFF' },
  { label: 'Yellow belt', value: '#FFD505' },
  { label: 'Green belt', value: '#09BB00' },
  { label: 'Blue belt', value: '#0042EA' },
  { label: 'Brown belt', value: '#A05B00' },
  { label: 'Red belt', value: '#EF2F38' },
  { label: 'Black belt', value: '#000000' },
] as const

/** Colours of the medal badge on an achievement. */
export const BADGE_COLOURS = [
  { label: 'Gold', value: '#FFD505' },
  { label: 'Silver', value: '#D0D0D0' },
  { label: 'Bronze', value: '#A05B00' },
  { label: 'Red', value: '#EF2F38' },
  { label: 'Black', value: '#000000' },
] as const

/** Languages besides English, as the editor shows them. */
export const LANGUAGE_LABELS = {
  km: 'Khmer (ភាសាខ្មែរ)',
  zh: 'Chinese (中文)',
  ko: 'Korean (한국어)',
} as const

/** "4:30 PM - 5:30 PM" (the dash may be a hyphen or an en dash). */
export const TIME_RANGE = /^\d{1,2}:\d{2}\s?(AM|PM)\s?[-–]\s?\d{1,2}:\d{2}\s?(AM|PM)$/i

/** "#RRGGBB" */
export const HEX_COLOUR = /^#[0-9a-fA-F]{6}$/
