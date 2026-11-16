import { fields, singleton } from '@keystatic/core'
import { DAYS, SCHEDULE_DIVISIONS, SCHEDULE_DIVISION_LABELS, TIME_RANGE } from '@/lib/content/options'
import { options, requiredText } from './fields'

/** content/schedule.json, read by data/schedule.ts (the timetable on /academy). */
export const schedule = singleton({
  label: 'Class schedule',
  path: 'content/schedule',
  format: { data: 'json' },
  schema: {
    classes: fields.array(
      fields.object(
        {
          day: fields.select({ label: 'Day', options: options(DAYS), defaultValue: 'Monday' }),
          time: fields.text({
            label: 'Time',
            description: 'Start and end, like 4:30 PM - 5:30 PM',
            validation: { isRequired: true, pattern: { regex: TIME_RANGE, message: 'Write the time like 4:30 PM - 5:30 PM' } },
          }),
          program: requiredText('Class name'),
          division: fields.select({
            label: 'Programme',
            options: options(SCHEDULE_DIVISIONS, SCHEDULE_DIVISION_LABELS),
            defaultValue: 'taekwondo',
          }),
          level: requiredText('Level', { description: 'For example Beginner, or All Levels' }),
          belt: requiredText('Belts', { description: 'Who it is for, for example White & Yellow Belts' }),
          instructor: requiredText('Instructor'),
          room: requiredText('Room'),
        },
        { layout: [4, 8, 12, 6, 6, 12, 6, 6] }
      ),
      {
        label: 'Classes',
        description: 'The order here does not matter: the website lists classes by day and start time.',
        itemLabel: (props) => `${props.fields.day.value}, ${props.fields.time.value}: ${props.fields.program.value}`,
      }
    ),
  },
})
