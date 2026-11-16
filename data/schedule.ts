/**
 * The weekly timetable (/academy). The classes themselves live in content/schedule.json, which the content editor
 * (/keystatic) saves; this module checks that file and hands the pages the same list as always.
 */
import raw from '../content/schedule.json' with { type: 'json' }
import { DAYS, SCHEDULE_DIVISIONS } from '@/lib/content/options'
import { file } from '@/lib/content/validate'

export interface ScheduleSlot {
  id: string
  day: 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday'
  time: string
  program: string
  division: 'taekwondo' | 'science' | 'studio'
  level: string
  belt: string
  instructor: string
  room: string
}

/** The start of "4:30 PM - 5:30 PM" in minutes after midnight, so a day's classes list in time order. */
function startMinutes(time: string): number {
  const match = /^(\d{1,2}):(\d{2})\s?(AM|PM)/i.exec(time)
  if (!match) return 0
  return ((Number(match[1]) % 12) + (match[3].toUpperCase() === 'PM' ? 12 : 0)) * 60 + Number(match[2])
}

function readSchedule(value: unknown): ScheduleSlot[] {
  const slots = file('content/schedule.json', value)
    .get('classes')
    .items()
    .map((slot) => ({
      day: slot.get('day').oneOf(DAYS),
      time: slot.get('time').text(),
      program: slot.get('program').text(),
      division: slot.get('division').oneOf(SCHEDULE_DIVISIONS),
      level: slot.get('level').text(),
      belt: slot.get('belt').text(),
      instructor: slot.get('instructor').text(),
      room: slot.get('room').text(),
    }))

  // Monday first, then by start time (editors add classes in any order). Ids follow: mon-1, mon-2, tue-1...
  slots.sort((a, b) => DAYS.indexOf(a.day) - DAYS.indexOf(b.day) || startMinutes(a.time) - startMinutes(b.time))
  const perDay = new Map<string, number>()
  return slots.map((slot) => {
    const count = (perDay.get(slot.day) ?? 0) + 1
    perDay.set(slot.day, count)
    return { id: `${slot.day.slice(0, 3).toLowerCase()}-${count}`, ...slot }
  })
}

export const weeklySchedule: ScheduleSlot[] = readSchedule(raw)
