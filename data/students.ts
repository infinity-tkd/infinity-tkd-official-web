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

export const athleteSpotlights: StudentSpotlight[] = [
  {
    id: 'spotlight-1',
    name: 'Sokha Rith',
    age: 19,
    beltRank: '2nd Dan Black Belt',
    beltHex: '#000000',
    joinedYear: '2019',
    title: 'From Timid Beginner to National Team Poomsae Medalist',
    story:
      'Sokha joined Infinity Taekwondo as a quiet 14-year-old with zero athletic background. Through 5 years of relentless daily dedication, he mastered all 8 Taegeuk forms and Koryo, going on to earn Gold at the Cambodia National Championships. He now assists Master Sovan in coaching the junior poomsae squad.',
    quote:
      'The Dojang taught me that failure is simply data. Every missed kick is a chance to refine your angle and balance.',
    achievements: [
      'National Gold Medalist (Recognized Poomsae 2025)',
      'Certified 2nd Dan Kukkiwon Black Belt',
      'Junior Team Assistant Coach',
      'Over 600+ Mat Training Hours Logged',
    ],
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2864&auto=format&fit=crop',
    category: 'Athlete of the Month',
    favoriteTechnique: 'Koryo Poomsae & Double Side Kick (Yeop Chagi)',
    trainingGoal: 'Qualify for the Asian Taekwondo Championships 2027',
  },
  {
    id: 'spotlight-2',
    name: 'Chanthy Chea',
    age: 11,
    beltRank: 'Red Belt',
    beltHex: '#EF2F38',
    joinedYear: '2021',
    title: 'Junior Champions Team Captain & 540 Kick Pioneer',
    story:
      'At just 11 years old, Chanthy has become one of the youngest students at Infinity TKD to cleanly land a 540 kick on the spring floor. Her academic focus at school and leadership among younger white belt students make her a standout role model in our Little Warriors program.',
    quote:
      'I love breaking boards with flying kicks because it shows that anything is possible if you practice hard!',
    achievements: [
      'Youth Games Gold Medalist (Junior Sparring -32kg)',
      'Top Academic Honor Student at School',
      'Infinity Demonstration Team Lead Aerialist',
      'Perfect 100% Dojang Attendance Record 2025',
    ],
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=2787&auto=format&fit=crop',
    category: 'Junior Champion',
    favoriteTechnique: '540 Kick & Flying Side Kick',
    trainingGoal: 'Earn 1st Poom Black Belt before age 12',
  },
  {
    id: 'spotlight-3',
    name: 'Dara Chan',
    age: 24,
    beltRank: '1st Dan Black Belt',
    beltHex: '#000000',
    joinedYear: '2020',
    title: 'Action Cinema Stunt Performer & Tricking Specialist',
    story:
      'Dara leveraged Infinity Taekwondo’s Creative Studio and acrobatic training to transition into professional stunt work, performing in high-profile martial arts short films and commercial campaigns across Southeast Asia.',
    quote:
      'Infinity TKD gives you both the authentic traditional discipline and the modern stage to share your artistry with the world.',
    achievements: [
      'Lead Action Stunt Performer in 3 Southeast Asian Film Projects',
      '1st Dan Kukkiwon Certified Black Belt',
      'Over 1.5M+ Collective Views on Martial Action Shorts',
      'Regional Tricking Battle Runner-Up',
    ],
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2787&auto=format&fit=crop',
    category: 'Black Belt Graduate',
    favoriteTechnique: 'Corkscrew Twist & Aerial Hook Kick',
    trainingGoal: 'Direct Cambodia’s first international martial arts action series',
  },
  {
    id: 'spotlight-4',
    name: 'Leakhena Sin',
    age: 16,
    beltRank: '1st Poom Black Belt',
    beltHex: '#000000',
    joinedYear: '2022',
    title: 'Freestyle Musical Poomsae Champion',
    story:
      'Leakhena blends classical World Taekwondo stances with dynamic musical choreography. Her synchronized routines in national tournaments have earned high praise from international referees.',
    quote:
      'When you perform Poomsae to music, every block and kick becomes poetry in motion.',
    achievements: [
      'Gold Medalist - National Youth Freestyle Poomsae 2025',
      '1st Poom Kukkiwon Certificate',
      'Team Cambodia Youth Squad Representative',
      'Captain of the Youth Creative Demo Team',
    ],
    image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=2662&auto=format&fit=crop',
    category: 'Athlete of the Month',
    favoriteTechnique: '720 Tornado Kick into Butterfly Twist',
    trainingGoal: 'Compete in the World Taekwondo Poomsae Championships',
  },
  {
    id: 'spotlight-5',
    name: 'Rathana Sam',
    age: 29,
    beltRank: 'Blue Belt',
    beltHex: '#0042EA',
    joinedYear: '2023',
    title: 'Tech Executive to Dojang Warrior: 25kg Transformation',
    story:
      'Working long hours in front of a computer left Rathana feeling drained and out of shape. Enrolling in adult evening classes at our BKK1 branch, he rebuilt his cardiovascular stamina, lost 25kg, and developed lifelong mental resilience.',
    quote:
      'Martial arts gave me my life and clarity back. Stepping onto the mats resets my mind completely after intense workdays.',
    achievements: [
      '25kg Weight Loss & Tendon Health Transformation',
      'Graduated White to Blue Belt with Honors',
      'Completed 150 Consecutive Dojang Training Sessions',
      'BKK1 Adult Cohort Class Representative',
    ],
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=2787&auto=format&fit=crop',
    category: 'Transformation',
    favoriteTechnique: 'Taegeuk 5 (Oh Jang) & Roundhouse Kick (Dollyo Chagi)',
    trainingGoal: 'Earn 1st Dan Black Belt by 2027',
  },
  {
    id: 'spotlight-6',
    name: 'Vannak Seng',
    age: 8,
    beltRank: 'Green Belt',
    beltHex: '#09BB00',
    joinedYear: '2024',
    title: 'Little Warriors Discipline & Focus Honor Award',
    story:
      'Vannak joined the Little Warriors program with excess energy and difficulty focusing in school. Under the patient guidance of Instructor Sothea, he channeled his energy into martial precision and now leads class warm-ups with pride.',
    quote:
      'I bow to my teacher and my parents because respect makes you strong!',
    achievements: [
      'Little Warriors Honor Roll Award 2025',
      'Fastest Belt Promotion from Yellow to Green Belt',
      'Junior Sparring Friendship Cup Gold',
      '100% Respect & Etiquette Score in Testing',
    ],
    image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=2787&auto=format&fit=crop',
    category: 'Junior Champion',
    favoriteTechnique: 'Axe Kick (Naeryeo Chagi) & Board Break',
    trainingGoal: 'Become a Black Belt like Master Keo Moni',
  },
]

export const recentPromotions: StudentMilestone[] = [
  {
    id: 'prom-1',
    studentName: 'Vanna Meas',
    promotedTo: '1st Dan Black Belt',
    beltHex: '#000000',
    date: 'March 2026',
    examiningMaster: 'Master Chon Sovan (5th Dan)',
    poomsaeDemonstrated: 'Taegeuk 1-8 & Koryo',
  },
  {
    id: 'prom-2',
    studentName: 'Sophea Pich',
    promotedTo: 'Red Belt (Pal Jang)',
    beltHex: '#EF2F38',
    date: 'March 2026',
    examiningMaster: 'Master Keo Moni',
    poomsaeDemonstrated: 'Taegeuk 7 & 8',
  },
  {
    id: 'prom-3',
    studentName: 'Kimleang Seng',
    promotedTo: 'Blue Belt (Oh Jang)',
    beltHex: '#0042EA',
    date: 'February 2026',
    examiningMaster: 'Instructor Vichea Sothea',
    poomsaeDemonstrated: 'Taegeuk 5 & 6',
  },
  {
    id: 'prom-4',
    studentName: 'Borey Kem',
    promotedTo: 'Green Belt (Sam Jang)',
    beltHex: '#09BB00',
    date: 'February 2026',
    examiningMaster: 'Master Chon Sovan',
    poomsaeDemonstrated: 'Taegeuk 3 & 4',
  },
]
