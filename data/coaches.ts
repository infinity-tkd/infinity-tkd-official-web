export interface CoachProfile {
  id: string
  name: string
  koreanName?: string
  role: string
  danRank: string
  division: 'The Dojang' | 'Sport Science' | 'Creative Studio' | 'Executive'
  experience: string
  bio: string
  image: string
  specialties: string[]
  certifications: string[]
  philosophy: string
  socials: {
    instagram?: string
    facebook?: string
    linkedin?: string
    youtube?: string
  }
  translations?: {
    km?: Partial<Omit<CoachProfile, 'id' | 'division' | 'translations'>>
    zh?: Partial<Omit<CoachProfile, 'id' | 'division' | 'translations'>>
    ko?: Partial<Omit<CoachProfile, 'id' | 'division' | 'translations'>>
  }
}

export const coachFaculty: CoachProfile[] = [
  {
    id: 'keo-moni',
    name: 'Master Keo Moni',
    koreanName: '케오 모니 관장',
    role: 'Founder & Head of Academy',
    danRank: '4th Dan Black Belt (Kukkiwon)',
    division: 'The Dojang',
    experience: '14+ Years',
    bio: 'Founder and visionary behind Infinity Taekwondo. Keo Moni has spent over a decade pushing the limits of World Taekwondo freestyle forms and high-difficulty tricking acrobatics. He leads tournament strategy and action choreography.',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80',
    specialties: ['Freestyle Poomsae', '540 & 720 Tricking', 'Action Choreography', 'Venture Leadership'],
    certifications: ['4th Dan Kukkiwon Certified', 'WT Recognized Poomsae Coach', 'Lead Action Director'],
    philosophy: 'Martial arts is not about destroying an opponent; it is the daily destruction of your own perceived limitations.',
    socials: { instagram: '#', linkedin: '#', facebook: '#' },
  },
  {
    id: 'chon-sovan',
    name: 'Master Chon Sovan',
    koreanName: '천 소반 수석사범',
    role: 'Co-Founder & Head Master',
    danRank: '5th Dan Black Belt (Kukkiwon)',
    division: 'The Dojang',
    experience: '18+ Years',
    bio: 'A high-ranking 5th Dan Kukkiwon Master and national team poomsae coach. Master Sovan is renowned for his surgical eye in correcting stance angles, rhythmic breathing, and executing traditional forms with unyielding power.',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80',
    specialties: ['Kukkiwon Poomsae (Taegeuk to Ilyo)', 'Dan Examination Grading', 'Biomechanical Stance Alignment', 'Kyorugi Sparring'],
    certifications: ['5th Dan Kukkiwon Master Certificate', 'WT International Referee License', 'National Team Head Coach'],
    philosophy: 'A mountain never shakes in the wind; in the same way, a true martial artist remains calm, rooted, and honorable under pressure.',
    socials: { instagram: '#', facebook: '#' },
  },
  {
    id: 'vichea-sothea',
    name: 'Instructor Vichea Sothea',
    role: 'Senior Instructor & Junior Champions Coach',
    danRank: '3rd Dan Black Belt (Kukkiwon)',
    division: 'The Dojang',
    experience: '8+ Years',
    bio: 'Specializing in youth martial development, Instructor Sothea combines playful motivation with rigorous martial discipline. He has coached over 150 junior students from white belt to regional championship podiums.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80',
    specialties: ['Junior Warriors Curriculum', 'Basic Forms (Taegeuk 1-4)', 'Youth Agility & Coordination', 'Dojang Etiquette'],
    certifications: ['3rd Dan Kukkiwon Certified', 'Youth Athletic Development Specialist', 'CPR/AED Certified'],
    philosophy: 'Teach children discipline with patience and love, and they will grow into leaders who lift their communities.',
    socials: { instagram: '#' },
  },
  {
    id: 'kim-heng',
    name: 'Kim Heng',
    role: 'Lead Tricking & Acrobatics Coach',
    danRank: '3rd Dan Black Belt',
    division: 'The Dojang',
    experience: '9+ Years',
    bio: 'An explosive martial arts tricking athlete and demonstration captain. Kim Heng breaks down aerial twists, cheat-steps, corkscrews, and multi-target board breaks into safe, progressive drill progressions on Olympic spring floors.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80',
    specialties: ['Martial Arts Tricking', 'Air Track Progression', 'Multi-Target Aerial Breaks', 'Gymnastics Floorwork'],
    certifications: ['3rd Dan Black Belt', 'Certified Gymnastics Pit Safety Lead', 'Parkour & Tricking Master'],
    philosophy: 'Gravity is only an obstacle until you understand the science of momentum and commitment.',
    socials: { instagram: '#', youtube: '#' },
  },
  {
    id: 'rithy-panha',
    name: 'Dr. Rithy Panha',
    role: 'Chief of Biomechanics & Sports Physiotherapy',
    danRank: 'Sports Science Lead',
    division: 'Sport Science',
    experience: '12+ Years',
    bio: 'Holding a doctorate in Physical Therapy and Sports Kinesiology, Dr. Panha oversees our Human Performance Lab. He analyzes athlete joint kinematics, rate of force development, and constructs bulletproof injury pre-hab protocols.',
    image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80',
    specialties: ['Force Velocity Profiling', 'ACL & Ankle Durability Pre-Hab', 'Calisthenics Tendon Conditioning', 'Recovery Protocols'],
    certifications: ['DPT (Doctor of Physical Therapy)', 'CSCS (Certified Strength & Conditioning Specialist)', 'FIFA Sports Medicine Diploma'],
    philosophy: 'Do not train through dysfunction; correct the kinetic chain, and athletic power will flourish naturally.',
    socials: { linkedin: '#' },
  },
  {
    id: 'hul-thaiphirun',
    name: 'Hul ThaiPhirun',
    role: 'Head of Cinema Operations',
    danRank: 'Cinema Operations Lead',
    division: 'Creative Studio',
    experience: '10+ Years',
    bio: 'Veteran cinematographer and operations chief. ThaiPhirun leads our Sony Cinema camera rigs, lighting design, and live fight pre-viz filming, bringing the kinetic grace of Taekwondo to world-class broadcast screens.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80',
    specialties: ['Action Cinematography', 'DaVinci Resolve Color Grading', 'Stunt Pre-Visualization', 'Commercial Production'],
    certifications: ['Certified Master Colorist', 'High-Speed Phantom 4K Operator', '10+ Years Broadcast Film'],
    philosophy: 'Every kick is a story of dedication; our cameras are simply the conduit to share that fire with the world.',
    socials: { instagram: '#', youtube: '#' },
  },
]
