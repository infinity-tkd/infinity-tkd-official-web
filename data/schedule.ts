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

export const weeklySchedule: ScheduleSlot[] = [
  // Monday
  {
    id: 'mon-1',
    day: 'Monday',
    time: '4:30 PM - 5:30 PM',
    program: 'Little Warriors Taekwondo (Ages 5-10)',
    division: 'taekwondo',
    level: 'Beginner',
    belt: 'White & Yellow Belts',
    instructor: 'Master Chon Sovan',
    room: 'Main Dojang (Mat A)',
  },
  {
    id: 'mon-2',
    day: 'Monday',
    time: '5:30 PM - 7:00 PM',
    program: 'World Taekwondo Recognized Poomsae',
    division: 'taekwondo',
    level: 'All Levels',
    belt: 'All Belt Ranks',
    instructor: 'Master Chon Sovan (5th Dan)',
    room: 'Main Dojang (Mat A)',
  },
  {
    id: 'mon-3',
    day: 'Monday',
    time: '7:00 PM - 8:30 PM',
    program: 'Calisthenics & Relative Strength Lab',
    division: 'science',
    level: 'Intermediate - Advanced',
    belt: 'Open to All',
    instructor: 'Sport Science Staff',
    room: 'Performance Rig Lab',
  },

  // Tuesday
  {
    id: 'tue-1',
    day: 'Tuesday',
    time: '5:00 PM - 6:30 PM',
    program: 'Olympic Sparring & Kinetic Kicking Drills',
    division: 'taekwondo',
    level: 'Intermediate',
    belt: 'Green Belt & Above',
    instructor: 'Master Keo Moni',
    room: 'Main Dojang (Mat A)',
  },
  {
    id: 'tue-2',
    day: 'Tuesday',
    time: '7:00 PM - 9:00 PM',
    program: 'Freestyle Poomsae & Tricking (540s/720s/Air Tracks)',
    division: 'taekwondo',
    level: 'Intermediate - Advanced',
    belt: 'Green to Black Belt',
    instructor: 'Master Keo Moni & Team Infinity',
    room: 'Acrobatic Spring Pit',
  },

  // Wednesday
  {
    id: 'wed-1',
    day: 'Wednesday',
    time: '4:30 PM - 5:30 PM',
    program: 'Junior Champions Poomsae (Ages 8-14)',
    division: 'taekwondo',
    level: 'Beginner - Intermediate',
    belt: 'Yellow to Blue Belt',
    instructor: 'Master Chon Sovan',
    room: 'Main Dojang (Mat A)',
  },
  {
    id: 'wed-2',
    day: 'Wednesday',
    time: '5:30 PM - 7:00 PM',
    program: 'Recognized Poomsae & Kukkiwon Standard Forms',
    division: 'taekwondo',
    level: 'All Levels',
    belt: 'Taegeuk 1-8 & Dan Forms',
    instructor: 'Master Chon Sovan (5th Dan)',
    room: 'Main Dojang (Mat A)',
  },
  {
    id: 'wed-3',
    day: 'Wednesday',
    time: '7:00 PM - 8:30 PM',
    program: 'Tendon Conditioning & Pre-Hab Mobility',
    division: 'science',
    level: 'All Levels',
    belt: 'Open to All',
    instructor: 'Physiotherapist Team',
    room: 'Recovery Lab',
  },

  // Thursday
  {
    id: 'thu-1',
    day: 'Thursday',
    time: '5:00 PM - 6:30 PM',
    program: 'Demonstration Board Breaking & Staging',
    division: 'taekwondo',
    level: 'Advanced',
    belt: 'Blue Belt & Above',
    instructor: 'Team Infinity Captains',
    room: 'Main Dojang (Mat A)',
  },
  {
    id: 'thu-2',
    day: 'Thursday',
    time: '7:00 PM - 9:00 PM',
    program: 'Acrobatic Tricking & Musical Choreography',
    division: 'taekwondo',
    level: 'Intermediate - Advanced',
    belt: 'All Tricking Athletes',
    instructor: 'Master Keo Moni',
    room: 'Acrobatic Spring Pit',
  },

  // Friday
  {
    id: 'fri-1',
    day: 'Friday',
    time: '5:00 PM - 7:00 PM',
    program: 'Action Cinema Stunt & Fight Choreography',
    division: 'studio',
    level: 'Intermediate - Advanced',
    belt: 'Blue Belt & Audition',
    instructor: 'Keo Moni & Hul ThaiPhirun',
    room: 'Studio Stage 1',
  },
  {
    id: 'fri-2',
    day: 'Friday',
    time: '7:00 PM - 8:30 PM',
    program: 'Infinity National Competition Team Sparring',
    division: 'taekwondo',
    level: 'Advanced / Elite',
    belt: 'Red Belt & Black Dan',
    instructor: 'Master Chon Sovan',
    room: 'Main Dojang (Mat A)',
  },

  // Saturday
  {
    id: 'sat-1',
    day: 'Saturday',
    time: '9:00 AM - 10:30 AM',
    program: 'Weekend All-Ages Taekwondo Fundamentals',
    division: 'taekwondo',
    level: 'All Levels',
    belt: 'White to Black Belt',
    instructor: 'Master Chon Sovan',
    room: 'Main Dojang (Mat A)',
  },
  {
    id: 'sat-2',
    day: 'Saturday',
    time: '1:00 PM - 3:00 PM',
    program: 'Applied Sports Biomechanics & Telemetry',
    division: 'science',
    level: 'All Levels',
    belt: 'Open to Public',
    instructor: 'Sport Science Staff',
    room: 'Performance Rig Lab',
  },
  {
    id: 'sat-3',
    day: 'Saturday',
    time: '3:30 PM - 6:00 PM',
    program: 'Open Gym & Freestyle Tricking Jam',
    division: 'taekwondo',
    level: 'All Levels',
    belt: 'All Members',
    instructor: 'Team Infinity',
    room: 'Acrobatic Spring Pit',
  },

  // Sunday
  {
    id: 'sun-1',
    day: 'Sunday',
    time: '10:00 AM - 12:00 PM',
    program: 'Kukkiwon Dan Rank Promotion Prep',
    division: 'taekwondo',
    level: 'Advanced',
    belt: 'Red Belt & Black Dan',
    instructor: 'Master Chon Sovan & Master Keo Moni',
    room: 'Main Dojang (Mat A)',
  },
  {
    id: 'sun-2',
    day: 'Sunday',
    time: '2:00 PM - 5:00 PM',
    program: 'Cinema Camera & Action Filming Lab',
    division: 'studio',
    level: 'Intermediate',
    belt: 'Studio Members',
    instructor: 'Hul ThaiPhirun & ChanDara',
    room: 'Studio Stage 1',
  },
]
