import type { LibraryItem } from './types'

export const stancesItems: LibraryItem[] = [
  {
    id: 'dwit-koobi',
    slug: 'back-stance-dwit-koobi',
    name: 'Back Stance',
    koreanName: '뒷굽이',
    romanized: 'Dwit-koobi',
    category: 'stances',
    difficulty: 'Beginner',
    beltLevel: 'Green Belt and Above',
    badgeColor: '#A05B00',
    weightDistribution: '70% Rear Leg / 30% Front Leg',
    summary:
      'A defensive stance configured like an L-shape, pulling your center of mass away from oncoming strikes while priming the front leg for counter-kicks.',
    steps: [
      'Form an exact 90-degree angle with your feet (L-shape).',
      'Position feet approximately 2 to 2.5 foot-lengths apart.',
      'Bend both knees, placing 70% of your body weight over the rear leg.',
      'Keep your torso angled 45 degrees to present a narrower target to opponent.',
    ],
    keyDetails: [
      'The rear knee must bend directly over the rear toes without collapsing inward.',
      'The front foot points straight ahead; the rear foot points 90 degrees outward.',
      'You should be able to lift your front leg instantly without shifting body weight.',
    ],
    commonMistakes: [
      'Putting 50/50 equal weight, turning the back stance into an unstable hybrid.',
      'Letting the rear knee collapse inward, destroying hip alignment.',
    ],
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: 'beom-seogi',
    slug: 'tiger-cat-stance-beom-seogi',
    name: 'Tiger / Cat Stance',
    koreanName: '범서기 (호랑이 자세)',
    romanized: 'Beom-seogi',
    category: 'stances',
    difficulty: 'Advanced',
    beltLevel: 'Brown Belt and Above',
    badgeColor: '#EF2F38',
    weightDistribution: '90% Rear Leg / 10% Front Ball of Foot (Heel Lifted)',
    summary:
      'An explosive, highly coiled stance resembling a tiger ready to pounce. 90% of weight is on the deep bent rear leg, while the front foot touches the ground only with the ball.',
    steps: [
      'Place front foot one foot-length ahead of rear foot, pointed straight.',
      'Turn rear foot 30 degrees outward and sink deeply into the rear hip.',
      'Lift the front heel off the floor, resting only on the ball of the foot (Ap-chook).',
      'Keep spine upright, pelvis tucked, and ready for instant front kick or sweep.',
    ],
    keyDetails: [
      'Front foot carries zero weight—it can be snapped into a front kick with zero delay.',
      'Sink the center of gravity low with the rear knee deeply bent.',
    ],
    commonMistakes: [
      'Resting full weight on the front foot.',
      'Bending forward at the waist instead of sitting down through the hips.',
    ],
    image: 'https://images.unsplash.com/photo-1555597673-b21d5c935865?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: 'ap-koobi',
    slug: 'forward-long-stance-ap-koobi',
    name: 'Forward Long Stance',
    koreanName: '앞굽이',
    romanized: 'Ap-koobi',
    category: 'stances',
    difficulty: 'Beginner',
    beltLevel: 'White Belt and Above',
    badgeColor: '#09BB00',
    weightDistribution: '65% Front Leg / 35% Rear Leg',
    summary:
      'The primary offensive power stance in Taekwondo: deep forward knee flexion with the rear leg locked straight, driving ground reaction force through punches and blocks.',
    steps: [
      'Step forward approximately 3 to 3.5 foot-lengths with shoulders-width lateral spacing.',
      'Bend front knee until it is directly over the front ankle (shin perpendicular).',
      'Lock the rear leg completely straight with the rear foot angled 30 degrees outward.',
      'Keep torso upright and square hips forward toward the opponent.',
    ],
    keyDetails: [
      'Never allow the rear heel to lift off the floor.',
      'Ensure shoulder-width space between the feet so you do not stand on a tightrope.',
    ],
    commonMistakes: [
      'Bending the rear knee, which loses forward driving power.',
      'Aligning feet on a single straight line, resulting in loss of lateral stability.',
    ],
    image: 'https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=1000&auto=format&fit=crop',
  },
]
