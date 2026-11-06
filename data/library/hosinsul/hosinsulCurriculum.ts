// =============================================================================
// INFINITY TKD WEB - HOSINSUL (PRACTICAL SELF-DEFENSE) CURRICULUM & SAFETY
// Complete belt-by-belt progression matrix from White Belt to 1st Dan+ Black Belt
// Kukkiwon WT Practical Self-Defense Standards & Full Safety Protocol Suite
// =============================================================================

export interface HosinsulTechnique {
  id: string
  name: string
  koreanName?: string
  romanized?: string
  mechanics: string
  category: string
  targetArea?: string
  tacticalTrigger?: string
}

export interface HosinsulCategoryGroup {
  id: string
  title: string
  iconType: 'hand' | 'kick' | 'counter' | 'grab' | 'lock' | 'ground' | 'knee' | 'elbow'
  techniques: HosinsulTechnique[]
}

export interface HosinsulBeltCurriculum {
  id: string
  rank: string
  geup: string
  koreanRank: string
  beltColor: string
  textColor: string
  borderColor: string
  defensiveObjective: string
  categories: HosinsulCategoryGroup[]
}

export interface SafetyRule {
  id: string
  title: string
  koreanTitle?: string
  rule: string
  severity: 'critical' | 'high' | 'standard'
  badgeText: string
}

export interface ResistanceTier {
  tier: string
  levelName: string
  speedPercent: number
  speedLabel: string
  resistancePercent: number
  resistanceLabel: string
  resistanceDesc: string
  gearRequired: string[]
  primaryFocus: string
}

export interface SafetyParameter {
  id: string
  domain: string
  subtitle: string
  guidelines: string[]
}

export interface FloorManagementProtocol {
  id: string
  command: string
  koreanCommand?: string
  action: string
  rationale: string
}

export interface HosinsulSafetyFramework {
  universalRules: SafetyRule[]
  progressionMatrix: ResistanceTier[]
  safetyParameters: SafetyParameter[]
  floorProtocols: FloorManagementProtocol[]
}

// -----------------------------------------------------------------------------
// 1. BELT-BY-BELT CURRICULUM DATASET
// -----------------------------------------------------------------------------

export const hosinsulCurriculum: HosinsulBeltCurriculum[] = [
  // ===========================================================================
  // WHITE BELT (10th & 9th Geup)
  // ===========================================================================
  {
    id: 'white-belt',
    rank: 'White Belt (10th & 9th Geup)',
    geup: '10th & 9th Geup',
    koreanRank: '백띠 (10급 & 9급)',
    beltColor: '#F4F4F5',
    textColor: '#18181B',
    borderColor: '#E4E4E7',
    defensiveObjective:
      'Neutralize basic grabs through thumb-line biomechanics, maintain the 2-meter reactionary gap, deploy gross-motor impact weapons, and execute foundational grounded self-preservation.',
    categories: [
      {
        id: 'wb-hands',
        title: '1. Hand Strikes & Deflections',
        iconType: 'hand',
        techniques: [
          {
            id: 'wb-h-1',
            name: 'Palm Heel Thrust',
            koreanName: '바탕손 턱 치기',
            romanized: 'Batangson Teok Chigi',
            mechanics:
              'Drive the heel of the palm upward and inward into the attacker’s mental nerve/chin at a 45-degree angle. The wrist remains hyperextended to prevent self-injury while driving through the target with hip rotation.',
            category: 'Hand Strikes',
            targetArea: 'Mental nerve, chin, jawline (45° angle)',
          },
          {
            id: 'wb-h-2',
            name: 'Hammerfist Inward Strike',
            koreanName: '메주먹 바깥 치기',
            romanized: 'Mejumeok Bakkat Chigi',
            mechanics:
              'Drive the padded, muscular bottom of a closed fist horizontally into the attacker\'s temple, nose bridge, or floating ribs using gross-motor shoulder rotation.',
            category: 'Hand Strikes',
            targetArea: 'Temple, nasal bones, floating ribs',
          },
          {
            id: 'wb-h-3',
            name: 'Forearm Helmet / Cover Block',
            koreanName: '거북 막기',
            romanized: 'Kobu Makgi',
            mechanics:
              'Both hands cup the back of the skull, forearms glued to the temples, elbows pointing forward. Absorbs and deflects looping punches (haymakers) using the thick radial and ulnar bones.',
            category: 'Deflections',
            targetArea: 'Cranial defense (radial & ulnar shield)',
          },
        ],
      },
      {
        id: 'wb-kicks',
        title: '2. Kicks',
        iconType: 'kick',
        techniques: [
          {
            id: 'wb-k-1',
            name: 'Linear Push Kick',
            koreanName: '미러 차기',
            romanized: 'Mireo Chagi',
            mechanics:
              'Chamber the knee high to the chest and drive the flat ball and heel of the foot into the attacker\'s lower abdomen, bladder, or hip line to stop a forward rush and reset distance.',
            category: 'Distance Reset',
            targetArea: 'Lower abdomen, bladder, pelvic girdle',
          },
          {
            id: 'wb-k-2',
            name: 'Unchambered Groin Snap Kick',
            koreanName: '앞 올리기',
            romanized: 'Ap Ollyigi',
            mechanics:
              'Deliver a fast, non-telegraphed upward whip using the top of the instep directly into the groin from a relaxed, everyday standing stance.',
            category: 'Groin Snap',
            targetArea: 'Groin (Nangsim), pelvic floor',
          },
          {
            id: 'wb-k-3',
            name: 'Lead Leg Shin Shield',
            koreanName: '정강이 막기',
            romanized: 'Jeonggangi Makgi',
            mechanics:
              'Flare the lead knee 45 degrees outward, dorsiflex the foot (toes pulled up to lock shin muscles), and absorb or jam incoming low kicks on the upper third of the tibia.',
            category: 'Leg Check',
            targetArea: 'Upper third of tibia vs. incoming low trajectory',
          },
        ],
      },
      {
        id: 'wb-counters',
        title: '3. Counters',
        iconType: 'counter',
        techniques: [
          {
            id: 'wb-c-1',
            name: 'Counter to Two-Handed Push',
            koreanName: '밀기 반격',
            romanized: 'Milgi Bangyeok',
            mechanics:
              'As the attacker\'s hands extend, step backward-outward 45 degrees into a walking stance (Ap Seogi); slap both wrists downward with a double palm-parry, followed by a direct cross-punch (Bandae Jireugi) to the solar plexus.',
            category: 'Push Defense',
            targetArea: 'Wrists parry downward -> Solar plexus punch',
          },
          {
            id: 'wb-c-2',
            name: 'Counter to Wild Looping Haymaker',
            koreanName: '원거리 주먹 반격',
            romanized: 'Haymaker Bangyeok',
            mechanics:
              'Step inside the arc toward the attacker\'s chest, raising the lead forearm into an angled wedge; absorb the bicep rather than the fist, then drive a reverse palm strike into their ribs.',
            category: 'Angle Interception',
            targetArea: 'Bicep absorption -> Floating ribs palm thrust',
          },
        ],
      },
      {
        id: 'wb-grabs',
        title: '4. Grabs & Releases',
        iconType: 'grab',
        techniques: [
          {
            id: 'wb-g-1',
            name: 'Same-Side Wrist Grab',
            koreanName: '같은 손목 빼기',
            romanized: 'Gateun Sonmok Ppaegi',
            mechanics:
              'Form a tight fist, step back with the same-side leg to sink your center of gravity, rotate your forearm toward the weak link between the attacker\'s thumb and index finger, and whip your elbow down to your hip.',
            category: 'Grip Escape',
            targetArea: 'Attacker\'s thumb-index junction',
          },
          {
            id: 'wb-g-2',
            name: 'Cross-Wrist Grab',
            koreanName: '엇갈린 손목 빼기',
            romanized: 'Eotgalrin Sonmok Ppaegi',
            mechanics:
              'Trap the attacker’s gripping hand to your wrist with your free hand; step forward aggressively, circling your trapped forearm over the top of their wrist and downward to pry their grip open.',
            category: 'Grip Escape',
            targetArea: 'Over-the-top radius rotational pry',
          },
          {
            id: 'wb-g-3',
            name: 'Two Hands on One Wrist',
            koreanName: '두 손 잡힌 손목 빼기',
            romanized: 'Duson Sonmok Ppaegi',
            mechanics:
              'Thread your free hand through the center of their arms, clasp your own captured fist, drop your weight by bending both knees, and explode upward, levering through their thumb joints with your leg drive.',
            category: 'Two-on-One Escape',
            targetArea: 'Dual-thumb lever via upward kinetic leg drive',
          },
          {
            id: 'wb-g-4',
            name: 'Double Wrist Grab (Frontal)',
            koreanName: '양손목 잡힌 빼기',
            romanized: 'Yang-sonmok Ppaegi',
            mechanics:
              'Drop body weight vertically into a shallow stance; flare both elbows out horizontally at shoulder height to peel the thumbs, then snap both fists back to your ears simultaneously.',
            category: 'Frontal Double Escape',
            targetArea: 'Horizontal elbow flaring against thumb grips',
          },
        ],
      },
      {
        id: 'wb-locks',
        title: '5. Joint Locks & Skeletal Controls',
        iconType: 'lock',
        techniques: [
          {
            id: 'wb-l-1',
            name: 'Metacarpal Thumb-Strip Lock',
            koreanName: '엄지 꺾기 제압',
            romanized: 'Eomji Kkeokgi',
            mechanics:
              'Immediately following a wrist release, clamp your fingers around the base of the attacker’s thumb, peel the thumb backward toward their wrist, and press down to force them to their knees.',
            category: 'Small Joint Leverage',
            targetArea: 'First metacarpophalangeal joint (Thumb)',
          },
          {
            id: 'wb-l-2',
            name: 'Two-Handed Upward Wrist Flexion',
            koreanName: '손목 꺾기 제압',
            romanized: 'Sonmok Kkeokgi',
            mechanics:
              'When an attacker posts a hand on your chest, trap their hand flat against your sternum with both palms, step backward, and bow forward at the waist to hyperextend their wrist joint backward.',
            category: 'Chest Pin Lock',
            targetArea: 'Radiocarpal joint (Wrist hyperextension)',
          },
        ],
      },
      {
        id: 'wb-ground',
        title: '6. Ground Defense & Positional Recovery',
        iconType: 'ground',
        techniques: [
          {
            id: 'wb-gr-1',
            name: 'Technical Stand-Up',
            koreanName: '일어서기 (기술적 기립)',
            romanized: 'Il-eo-seogi',
            mechanics:
              'From a seated position, post the strong hand behind your hip on the floor; plant the opposite foot flat; raise the lead forearm to shield the face; kick the free leg outward into the attacker\'s shin/knee, swing that leg beneath your body, and stand up with hands guarding the head.',
            category: 'Grounded Recovery',
            targetArea: 'Shin/knee kick -> Head-shield standing transition',
          },
          {
            id: 'wb-gr-2',
            name: 'Bicycle Kick Ground Shield',
            koreanName: '뒤축 올려차기 방어',
            romanized: 'Dwit-chuk Ollyeo Chagi',
            mechanics:
              'If knocked flat on your back, keep your chin tucked (preventing head impact); rotate on your back, alternate rapid heel thrusts at the attacker’s knees, shins, and groin to prevent them from stepping into mount.',
            category: 'Ground Shield',
            targetArea: 'Attacker\'s patella, tibial crest, and groin',
          },
        ],
      },
      {
        id: 'wb-knees',
        title: '7. Knee Strikes',
        iconType: 'knee',
        techniques: [
          {
            id: 'wb-kn-1',
            name: 'Rising Front Knee',
            koreanName: '무릎 올려 치기',
            romanized: 'Mureup Ollyeo Chigi',
            mechanics:
              'Grab the back of the attacker’s neck or clothing, pull their torso downward, and drive the apex of the patella vertically into their groin or solar plexus.',
            category: 'Vertical Knee',
            targetArea: 'Groin or solar plexus (Myongchi)',
          },
          {
            id: 'wb-kn-2',
            name: 'Straight Push Knee',
            koreanName: '무릎 밀어 치기',
            romanized: 'Mureup Mireo Chigi',
            mechanics:
              'Thrust the knee directly forward through the attacker\'s midsection, leaning the upper body backward for counterbalance, driving their hips backward.',
            category: 'Linear Thrust',
            targetArea: 'Midsection / bladder / pelvic girdle',
          },
        ],
      },
      {
        id: 'wb-elbows',
        title: '8. Elbow Strikes',
        iconType: 'elbow',
        techniques: [
          {
            id: 'wb-e-1',
            name: 'Vertical Upward Elbow',
            koreanName: '팔굽 올려 치기',
            romanized: 'Palkup Ollyeo Chigi',
            mechanics:
              'Brush your hand back past your ear as if combing your hair, driving the point of the olecranon vertically between the attacker’s guards straight through their chin.',
            category: 'Rising Elbow',
            targetArea: 'Mandible / chin cleft',
          },
          {
            id: 'wb-e-2',
            name: 'Horizontal Forward Slash',
            koreanName: '팔굽 돌려 치기',
            romanized: 'Palkup Dollyeo Chigi',
            mechanics:
              'Pivot on the lead ball of your foot, swing the elbow horizontally across your chest, keeping your fist tight against your collarbone to strike the attacker’s jawline or cheek.',
            category: 'Horizontal Slash',
            targetArea: 'Jaw angle, zygomatic bone (Cheek)',
          },
        ],
      },
    ],
  },

  // ===========================================================================
  // YELLOW BELT (8th & 7th Geup)
  // ===========================================================================
  {
    id: 'yellow-belt',
    rank: 'Yellow Belt (8th & 7th Geup)',
    geup: '8th & 7th Geup',
    koreanRank: '노랑띠 (8급 & 7급)',
    beltColor: '#FFD505',
    textColor: '#18181B',
    borderColor: '#EAB308',
    defensiveObjective:
      'Transition instantly from grip-breaking to counter-striking; introduce dynamic off-balancing (Kuzushi) and bone-on-bone short-range targets.',
    categories: [
      {
        id: 'yb-hands',
        title: '1. Hand Strikes & Deflections',
        iconType: 'hand',
        techniques: [
          {
            id: 'yb-h-1',
            name: 'Horizontal Ridge-Hand Strike',
            koreanName: '손날등 치기',
            romanized: 'Sonnal-deung Chigi',
            mechanics:
              'Tuck the thumb tight into the palm; swing the radial edge of the hand into the attacker\'s neck, temple, or temple-jaw junction.',
            category: 'Ridge-Hand Strike',
            targetArea: 'Carotid triangle, temple, temporomandibular joint',
          },
          {
            id: 'yb-h-2',
            name: 'Inward Palm Deflection',
            koreanName: '바탕손 안 막기',
            romanized: 'Batangson An Makgi',
            mechanics:
              'Sweep the open palm across your midline to redirect straight punches off target, exposing the outside line of the attacker\'s body.',
            category: 'Redirection Parrying',
            targetArea: 'Outside redirection of straight punches',
          },
          {
            id: 'yb-h-3',
            name: 'Double Forearm Wedging Frame',
            koreanName: '헤쳐 막기',
            romanized: 'Hecho Makgi',
            mechanics:
              'Drive both forearms vertically upward between the attacker\'s arms to split a double lapel/throat grab from the inside.',
            category: 'Wedge Separation',
            targetArea: 'Inside centerline split vs. double collar grabs',
          },
        ],
      },
      {
        id: 'yb-kicks',
        title: '2. Kicks',
        iconType: 'kick',
        techniques: [
          {
            id: 'yb-k-1',
            name: 'Low Oblique Stomp',
            koreanName: '옆차기 (관절기)',
            romanized: 'Yop Chagi to Joint',
            mechanics:
              'Drive the heel downward at a 45-degree angle directly into the side or front of the attacker’s lead knee joint, targeting the cruciate/collateral ligaments.',
            category: 'Ligament Stomp',
            targetArea: 'Anterior cruciate & collateral knee ligaments',
          },
          {
            id: 'yb-k-2',
            name: 'Low Instep Sweep',
            koreanName: '반달차기 (신경 타격)',
            romanized: 'Bandal Chagi to Leg',
            mechanics:
              'Deliver a fast, low-trajectory kick targeting the femoral nerve on the inner thigh or the common peroneal nerve on the outer thigh.',
            category: 'Nerve Strike',
            targetArea: 'Common peroneal / femoral nerve motor points',
          },
          {
            id: 'yb-k-3',
            name: 'Rear Heel Instep Stamp',
            koreanName: '뒤 딛기',
            romanized: 'Dwi Ditgi',
            mechanics:
              'When grabbed from behind, drive the edge of your shoe heel directly downward onto the small bones of the attacker’s foot (tarsals/metatarsals).',
            category: 'Rear Foot Stamp',
            targetArea: 'Metatarsal arches, dorsal tarsal nerves',
          },
        ],
      },
      {
        id: 'yb-counters',
        title: '3. Counters',
        iconType: 'counter',
        techniques: [
          {
            id: 'yb-c-1',
            name: 'Counter to Single Lapel Grab + Punch Threat',
            koreanName: '멱살 잡힘 반격',
            romanized: 'Myeoksal Bangyeok',
            mechanics:
              'Clamp the grabbing hand tightly against your chest with your opposite hand; use your same-side forearm to block the incoming punch outward, then drive an immediate lead knee to the groin.',
            category: 'Lapel Control & Strike',
            targetArea: 'Chest pin -> Outward punch block -> Groin knee',
          },
          {
            id: 'yb-c-2',
            name: 'Counter to Front Bear Hug (Under Arms)',
            koreanName: '정면 껴안기 반격',
            romanized: 'Jeongmyeon Poom Bangyeok',
            mechanics:
              'Plant your base; drive both thumbs deep into the attacker\'s sub-mandibular pressure points (beneath the jawbone angle) or drive an open palm against the nose bridge to force their head backward, breaking the hold.',
            category: 'Bear Hug Escape',
            targetArea: 'Sub-mandibular pressure points / Nasal bridge',
          },
        ],
      },
      {
        id: 'yb-grabs',
        title: '4. Grabs & Releases',
        iconType: 'grab',
        techniques: [
          {
            id: 'yb-g-1',
            name: 'Single Lapel Grab Release',
            koreanName: '단일 멱살 빼기',
            romanized: 'Danil Myeoksal Ppaegi',
            mechanics:
              'Cover their gripping hand with your non-dominant hand; slice your dominant forearm downward across their radial nerve and wrist like a guillotine blade, stripping the fingers.',
            category: 'Lapel Strip',
            targetArea: 'Radial nerve strip across the wrist flexors',
          },
          {
            id: 'yb-g-2',
            name: 'Double Lapel Grab Release',
            koreanName: '양멱살 빼기',
            romanized: 'Yang-myeoksal Ppaegi',
            mechanics:
              'Drive an upward double-wedge with both elbows, stepping forward into a deep front stance (Ap Koobi) to disrupt their balance, then step back sharply to rip the fabric free.',
            category: 'Double Wedge Strip',
            targetArea: 'Balance disruption (Kuzushi) + Double elbow lever',
          },
          {
            id: 'yb-g-3',
            name: 'Rear Single-Shoulder Grab',
            koreanName: '뒤 어깨 잡힘 빼기',
            romanized: 'Dwi Eokkae Ppaegi',
            mechanics:
              'Turn 180 degrees inward toward the attacker\'s body, slicing your arm over their elbow joint to strip their hand off your shoulder, placing you in their blind spot.',
            category: 'Shoulder Strip & Blindspot',
            targetArea: 'Elbow joint over-hook -> Outside flank entry',
          },
          {
            id: 'yb-g-4',
            name: 'Rear Double-Shoulder Pull',
            koreanName: '뒤 양어깨 당김 반격',
            romanized: 'Dwi Yang-eokkae Bangyeok',
            mechanics:
              'Drop suddenly into a horse-riding stance (Juchum Seogi), throw both arms backward over their elbows to trap their arms, and deliver a double rear-headbutt into their face.',
            category: 'Drop-Rooting Counter',
            targetArea: 'Arm pin over elbows -> Rear cranial facial strike',
          },
        ],
      },
      {
        id: 'yb-locks',
        title: '5. Joint Locks & Skeletal Controls',
        iconType: 'lock',
        techniques: [
          {
            id: 'yb-l-1',
            name: 'Standing Outward Wrist Turn',
            koreanName: '손목 바깥 꺾기',
            romanized: 'Kote Gaeshi / Sonmok Bakkat Kkeokgi',
            mechanics:
              'Secure the attacker\'s grabbing hand with both of your hands, placing your thumbs side-by-side across the back of their knuckles; peel their hand off your chest, torque the wrist upward, outward, and back toward their shoulder to force a floor drop.',
            category: 'Rotational Wrist Lock',
            targetArea: 'Carpal/Metacarpal rotational torsion',
          },
          {
            id: 'yb-l-2',
            name: 'Gooseneck Wrist Compression',
            koreanName: '손목 내려 꺾기',
            romanized: 'Sonmok Naeryeo Kkeokgi',
            mechanics:
              'Force the attacker’s palm and fingers backward down toward the inside of their forearm at a sharp 90-degree angle; apply continuous downward body weight to force submission.',
            category: 'Hyperflexion Control',
            targetArea: 'Radiocarpal hyperflexion ("Gooseneck")',
          },
        ],
      },
      {
        id: 'yb-ground',
        title: '6. Ground Defense & Positional Recovery',
        iconType: 'ground',
        techniques: [
          {
            id: 'yb-gr-1',
            name: 'Knee-Elbow Frame Shield',
            koreanName: '무릎-팔굽 방패 구조',
            romanized: 'Mureup-Palkup Bangpae',
            mechanics:
              'Lying on your side, connect your top elbow and top knee together like a locked gate; this frame prevents an upright attacker from closing in to drop weight on your torso.',
            category: 'Defensive Frame',
            targetArea: 'Torso protection / Distance barrier',
          },
          {
            id: 'yb-gr-2',
            name: 'Tripod Ankle Sweep from Ground',
            koreanName: '발목 걸어 넘기기',
            romanized: 'Balmok Geoleo Neomgigi',
            mechanics:
              'When an attacker approaches your guard, hook the outside of their lead ankle with your bottom foot, place your top foot directly against their lead hip/knee, and push the hip while pulling the ankle.',
            category: 'Ground Sweep',
            targetArea: 'Ankle pull + Hip push rotational couple',
          },
        ],
      },
      {
        id: 'yb-knees',
        title: '7. Knee Strikes',
        iconType: 'knee',
        techniques: [
          {
            id: 'yb-kn-1',
            name: 'Diagonal Turning Knee',
            koreanName: '무릎 돌려 치기',
            romanized: 'Mureup Dollyeo Chigi',
            mechanics:
              'Pivot on the support foot and whip the knee horizontally inward to strike the floating ribs, liver, or kidneys.',
            category: 'Angular Knee',
            targetArea: 'Floating ribs (11th/12th), liver, kidney bed',
          },
          {
            id: 'yb-kn-2',
            name: 'Clinch Thigh Spike',
            koreanName: '허벅지 무릎 찌르기',
            romanized: 'Heobeokji Mureup Chigi',
            mechanics:
              'In a tight chest-to-chest hold, drive the hard point of your knee repeatedly into the nerve cluster on the attacker\'s outer thigh (iliotibial band).',
            category: 'Motor Point Trauma',
            targetArea: 'Vastus lateralis, iliotibial band nerve cluster',
          },
        ],
      },
      {
        id: 'yb-elbows',
        title: '8. Elbow Strikes',
        iconType: 'elbow',
        techniques: [
          {
            id: 'yb-e-1',
            name: 'Rear Horizontal Elbow',
            koreanName: '팔굽 뒤 치기',
            romanized: 'Palkup Dwi Chigi',
            mechanics:
              'Drive the point of your elbow straight backward into the ribs, solar plexus, or jaw of an attacker standing directly behind you.',
            category: 'Rear Linear Elbow',
            targetArea: 'Solar plexus, floating ribs, mandible behind',
          },
          {
            id: 'yb-e-2',
            name: 'Downward Diagonal Elbow',
            koreanName: '팔굽 비선 치기',
            romanized: 'Palkup Biseon Chigi',
            mechanics:
              'Drive the elbow point downward at a 45-degree angle across the attacker\'s collarbone or bridge of the nose.',
            category: 'Descending Diagonal',
            targetArea: 'Clavicle, zygomatic arch, nasal bridge',
          },
        ],
      },
    ],
  },

  // ===========================================================================
  // GREEN BELT (6th & 5th Geup)
  // ===========================================================================
  {
    id: 'green-belt',
    rank: 'Green Belt (6th & 5th Geup)',
    geup: '6th & 5th Geup',
    koreanRank: '초록띠 (6급 & 5급)',
    beltColor: '#09BB00',
    textColor: '#FFFFFF',
    borderColor: '#16A34A',
    defensiveObjective:
      'Manage cervical spine threats, survive respiratory/vascular chokes, execute 45-degree angle evasion (Cheon-ji movement), and counter headlocks.',
    categories: [
      {
        id: 'gb-hands',
        title: '1. Hand Strikes & Deflections',
        iconType: 'hand',
        techniques: [
          {
            id: 'gb-h-1',
            name: 'Arc-Hand Throat Strike',
            koreanName: '아귀손 칼재비',
            romanized: 'Agwison Kaljaebi',
            mechanics:
              'Form an open V-shape with the thumb and fingers; drive the webbing directly into the attacker\'s thyroid cartilage (windpipe) with forward body weight.',
            category: 'Airway Impact',
            targetArea: 'Thyroid cartilage (Trachea / Windpipe)',
          },
          {
            id: 'gb-h-2',
            name: 'Bilateral Ear Slap',
            koreanName: '양 손바닥 치기',
            romanized: 'Yang Sonbadak Chigi',
            mechanics:
              'Cup both palms slightly and slap both of the attacker\'s ears simultaneously; the resulting air compression shock ruptures eardrums and disrupts vestibular balance.',
            category: 'Acoustic Shock',
            targetArea: 'External acoustic meatus, tympanic membranes',
          },
          {
            id: 'gb-h-3',
            name: 'Forearm Cross-Face Wedge',
            koreanName: '팔뚝 교차 턱 밀기',
            romanized: 'Paltuk Teok Milgi',
            mechanics:
              'Drive the radial bone of your forearm diagonally across an opponent’s jawline and nose to turn their head away, neutralizing their cervical leverage.',
            category: 'Cervical Redirection',
            targetArea: 'Mandible & nasal bones (Spinal turn wedge)',
          },
        ],
      },
      {
        id: 'gb-kicks',
        title: '2. Kicks',
        iconType: 'kick',
        techniques: [
          {
            id: 'gb-k-1',
            name: 'Stomping Side Kick',
            koreanName: '정강이 찢기',
            romanized: 'Jeonggangi Jjitgi',
            mechanics:
              'Deliver a downward scraping side kick that begins on the attacker\'s upper shin, scrapes down the bone, and finishes with a heel stomp onto the top of the foot.',
            category: 'Shin Scraping',
            targetArea: 'Tibial periosteum scrape -> Metatarsal crush',
          },
          {
            id: 'gb-k-2',
            name: 'Jumping Groin Snap',
            koreanName: '뛰며 앞차기',
            romanized: 'Twimyeo Ap Chagi',
            mechanics:
              'Scissor your legs to explode vertically off the back foot, driving a rising lead snap kick directly between the attacker\'s thighs when pinned in a corner.',
            category: 'Explosive Vertical Kick',
            targetArea: 'Groin (Nangsim) in close confined quarters',
          },
          {
            id: 'gb-k-3',
            name: 'Buckling Leg Kick',
            koreanName: '오금 꺾기 차기',
            romanized: 'Ogeum Kkeokgi Chagi',
            mechanics:
              'Deliver a low kick directly behind the attacker\'s knee fold, forcing their leg to collapse forward onto the floor.',
            category: 'Popliteal Collapse',
            targetArea: 'Popliteal fossa (Behind the knee joint fold)',
          },
        ],
      },
      {
        id: 'gb-counters',
        title: '3. Counters',
        iconType: 'counter',
        techniques: [
          {
            id: 'gb-c-1',
            name: 'Counter to Looping Hook / Sucker Punch',
            koreanName: '훅 피하고 두주먹 젖혀치기',
            romanized: 'Dujumeok Jeocho Chigi Bangyeok',
            mechanics:
              'Duck low under the trajectory of the swing by bending your knees (not your waist); step to their flank and drive an inverted double fist (Dujumeok Jeocho Chigi) into their kidneys.',
            category: 'Under-Duck & Flank Counter',
            targetArea: 'Renal / Kidney beds (Thoracic-lumbar junction)',
          },
          {
            id: 'gb-c-2',
            name: 'Counter to Aggressive Wall Pin / Shove',
            koreanName: '벽 밀침 반격',
            romanized: 'Byeok Milchim Bangyeok',
            mechanics:
              'Absorb the wall impact with your upper back (protecting the head); hook one arm over the attacker\'s neck, step sideways off the wall, and drive their face into the structure.',
            category: 'Environmental Re-Direction',
            targetArea: 'Cervical pivot -> Environmental surface impact',
          },
        ],
      },
      {
        id: 'gb-grabs',
        title: '4. Grabs & Releases',
        iconType: 'grab',
        techniques: [
          {
            id: 'gb-g-1',
            name: 'Front Two-Hand Choke Release',
            koreanName: '정면 양손 목조름 빼기',
            romanized: 'Jeongmyeon Mokjoreum Ppaegi',
            mechanics:
              'Throw your dominant arm straight up past your ear; pivot your feet and rotate your torso 90 degrees across their thumbs to break the hold; bring that same arm down as a heavy hammerfist into their neck.',
            category: 'Rotational Shoulder Break',
            targetArea: 'Dual-thumb detachment -> Brachial carotid smash',
          },
          {
            id: 'gb-g-2',
            name: 'Rear Choke / Sleeper Defense',
            koreanName: '뒤 목조름 방어',
            romanized: 'Dwi Mokjoreum Bang-eo',
            mechanics:
              'Instantly shrug your shoulders and tuck your chin to your chest to protect the carotid arteries; hook both hands over the choking arm to pull down and create an airway; step behind the attacker\'s lead leg and elbow the groin.',
            category: 'Vascular Airway Defense',
            targetArea: 'Carotid tuck -> Airway peel -> Groin elbow',
          },
          {
            id: 'gb-g-3',
            name: 'Side Headlock Defense (Schoolyard Headlock)',
            koreanName: '측면 헤드락 방어',
            romanized: 'Cheungmyeon Headlock Bang-eo',
            mechanics:
              'Turn your face inward toward the attacker\'s torso to clear your airway; reach around their back to grab their chin/nose; pull the head back sharply while driving your knees into the back of their thighs.',
            category: 'Headlock Extraction',
            targetArea: 'Airway alignment -> Facial pry -> Hamstring knees',
          },
          {
            id: 'gb-g-4',
            name: 'Front Hair Grab Release',
            koreanName: '머리채 잡힘 빼기',
            romanized: 'Meorichae Ppaegi',
            mechanics:
              'Slam both of your hands onto the attacker’s hand, pinning their fingers to your scalp; take a rapid step backward while bending forward at the waist to bend their wrist backwards.',
            category: 'Scalp Pinning Wrist Lock',
            targetArea: 'Radiocarpal hyperflexion via body-weight drop',
          },
        ],
      },
      {
        id: 'gb-locks',
        title: '5. Joint Locks & Skeletal Controls',
        iconType: 'lock',
        techniques: [
          {
            id: 'gb-l-1',
            name: 'Standing Z-Lock (S-Bend Lock)',
            koreanName: 'Z형 손목 꺾기',
            romanized: 'Z-Lock (Sonmok S-Bend)',
            mechanics:
              'Trap the attacker\'s grabbing hand to your chest; thread your free arm under their elbow, grasp their wrist, and bend their hand back toward their forearm into a "Z" configuration, torquing their shoulder.',
            category: 'Tri-Joint Compound Lock',
            targetArea: 'Wrist, elbow, and shoulder compound lock',
          },
          {
            id: 'gb-l-2',
            name: 'Straight Arm Bar over Shoulder',
            koreanName: '어깨 위 팔꺾기',
            romanized: 'Eokkae Pal-kkeokgi',
            mechanics:
              'Slip outside a straight punch; capture the wrist; pull the arm taut across your opposite shoulder, joint facing downward, and pull down on the wrist while pressing up with the shoulder.',
            category: 'Hyperextension Fulcrum',
            targetArea: 'Olecranon process (Fulcrum on trapezius)',
          },
        ],
      },
      {
        id: 'gb-ground',
        title: '6. Ground Defense & Positional Recovery',
        iconType: 'ground',
        techniques: [
          {
            id: 'gb-gr-1',
            name: 'Side-Control Hip Escape (Shrimping)',
            koreanName: '새우등 엉덩이 빼기',
            romanized: 'Saewoo-deung Hip Escape',
            mechanics:
              'Frame your forearms against the attacker\'s throat and hip; bridge hips upward, slide your hips back away from them (shrimp), slip your inside knee between your bodies, and recover full guard.',
            category: 'Hip Mobilization',
            targetArea: 'Throat/hip framing -> Knee-shield insertion',
          },
          {
            id: 'gb-gr-2',
            name: 'Grounded Headlock Defense',
            koreanName: '누운 자세 헤드락 탈출',
            romanized: 'Nu-un Headlock Talchul',
            mechanics:
              'Frame your bottom forearm against their face; walk your legs toward their hips, hook your top leg over their face, and push their head back with your leg to force an immediate release.',
            category: 'Leg Over Head Leverage',
            targetArea: 'Cervical extension via hamstring push',
          },
        ],
      },
      {
        id: 'gb-knees',
        title: '7. Knee Strikes',
        iconType: 'knee',
        techniques: [
          {
            id: 'gb-kn-1',
            name: 'Intercepting Straight Knee',
            koreanName: '돌진 차단 무릎 치기',
            romanized: 'Chadan Mureup Chigi',
            mechanics:
              'When an opponent drops their head forward to tackle or grab, drop your hands onto their shoulders to stop forward momentum and launch a rising knee straight into their face.',
            category: 'Tackle Interception',
            targetArea: 'Facial skeleton / Nasal complex',
          },
          {
            id: 'gb-kn-2',
            name: 'Thai Plum Double-Collar Clinch Knee',
            koreanName: '양손 목덜미 무릎 치기',
            romanized: 'Mokdeolmi Mureup Chigi',
            mechanics:
              'Lock your palms together behind the crown of the attacker’s head (forearms pinching their jaw); pull their head down like a lever while driving alternating knees into their sternum.',
            category: 'Plum Clinch Control',
            targetArea: 'Sternum, solar plexus, floating ribs',
          },
        ],
      },
      {
        id: 'gb-elbows',
        title: '8. Elbow Strikes',
        iconType: 'elbow',
        techniques: [
          {
            id: 'gb-e-1',
            name: 'Descending Vertical 12-to-6 Elbow',
            koreanName: '팔굽 내려 치기',
            romanized: 'Palkup Naeryeo Chigi',
            mechanics:
              'Elevate your elbow above shoulder height and drive the olecranon vertically downward into the attacker\'s collarbone or thoracic spine.',
            category: 'Vertical Drop Elbow',
            targetArea: 'Clavicle, cervicothoracic junction',
          },
          {
            id: 'gb-e-2',
            name: 'Rear High Elbow Spike',
            koreanName: '팔굽 뒤 올려 치기',
            romanized: 'Palkup Dwi Ollyeo Chigi',
            mechanics:
              'Blind strike driven diagonally upward over your shoulder into the face of an attacker attempting to lock their hands around your neck from behind.',
            category: 'Blind Rear Spike',
            targetArea: 'Attacker\'s chin, teeth, or nose bridge',
          },
        ],
      },
    ],
  },

  // ===========================================================================
  // BLUE BELT (4th & 3rd Geup)
  // ===========================================================================
  {
    id: 'blue-belt',
    rank: 'Blue Belt (4th & 3rd Geup)',
    geup: '4th & 3rd Geup',
    koreanRank: '파랑띠 (4급 & 3급)',
    beltColor: '#0042EA',
    textColor: '#FFFFFF',
    borderColor: '#2563EB',
    defensiveObjective:
      'Neutralize close-range clinches, control limb hyperextension, apply structural leg trips, and survive full mount pins.',
    categories: [
      {
        id: 'bb-hands',
        title: '1. Hand Strikes & Deflections',
        iconType: 'hand',
        techniques: [
          {
            id: 'bb-h-1',
            name: 'Bilateral Open-Palm Rib Strike',
            koreanName: '양 바탕손 갈비뼈 치기',
            romanized: 'Yang Batangson Chigi',
            mechanics:
              'Step inside a grab and drive both open palms simultaneously into the attacker\'s lower floating ribs using an explosive hip pop.',
            category: 'Dual Palm Shock',
            targetArea: '10th-12th floating ribs (Bilateral shock)',
          },
          {
            id: 'bb-h-2',
            name: 'Forearm Clothesline Tackle',
            koreanName: '목 치기 넘어뜨리기',
            romanized: 'Mok Chigi Neomeotteurigi',
            mechanics:
              'Step deeply behind the attacker\'s lead leg and drive the thick bone of your forearm across their carotid artery while driving your chest forward to drop them.',
            category: 'Clothesline Takedown',
            targetArea: 'Carotid triangle + Leg trip leverage',
          },
          {
            id: 'bb-h-3',
            name: 'High-Low Knifehand Framing',
            koreanName: '손날 고저 막기',
            romanized: 'Sonnal Makgi Frame',
            mechanics:
              'Intercept a hook-and-grab combination by framing one knifehand horizontally across the face and one vertically along the ribs.',
            category: 'High-Low Frame',
            targetArea: 'Face / Ribcage structural barrier',
          },
        ],
      },
      {
        id: 'bb-kicks',
        title: '2. Kicks',
        iconType: 'kick',
        techniques: [
          {
            id: 'bb-k-1',
            name: 'Defensive Back Kick',
            koreanName: '뒤차기 (방어형)',
            romanized: 'Dwi Chagi',
            mechanics:
              'Look over your shoulder, chamber the knee tightly to your chest, and drive the heel backward into the solar plexus or pelvis of an attacker rushing forward.',
            category: 'Counter Thrust',
            targetArea: 'Solar plexus, bladder, anterior superior iliac spine',
          },
          {
            id: 'bb-k-2',
            name: 'Downward Axe Kick to Clavicle',
            koreanName: '내려차기',
            romanized: 'Naeryeo Chagi',
            mechanics:
              'Raise the leg high without chambering, drive the heel downward onto the attacker’s collarbone, sternum, or the thigh of their lead leg.',
            category: 'Downward Heel Axe',
            targetArea: 'Clavicle, sternum, quadriceps tendon',
          },
          {
            id: 'bb-k-3',
            name: 'Low Hooking Leg Sweep',
            koreanName: '걸기 차기',
            romanized: 'Geolgi Chagi',
            mechanics:
              'Hook the back of your heel behind the attacker\'s lead ankle, pulling it forward while driving a palm strike through their chest.',
            category: 'Hook Sweep',
            targetArea: 'Achilles tendon hook + Sternum palm push',
          },
        ],
      },
      {
        id: 'bb-counters',
        title: '3. Counters',
        iconType: 'counter',
        techniques: [
          {
            id: 'bb-c-1',
            name: 'Counter to Double-Hand Lapel Pin to Wall',
            koreanName: '벽 멱살 밀착 반격',
            romanized: 'Byeok Myeoksal Bangyeok',
            mechanics:
              'Drive both thumbs directly into the attacker\'s brachial plexus (inside collarbone); weave your right arm over both of their arms, clamping them against your chest, and rotate down to collapse their structure.',
            category: 'Brachial Strip & Wrap',
            targetArea: 'Brachial plexus origin -> Over-arm wrap',
          },
          {
            id: 'bb-c-2',
            name: 'Counter to Linear Front Thrust Kick',
            koreanName: '앞차기 잡고 반격',
            romanized: 'Ap Chagi Japgo Bangyeok',
            mechanics:
              'Parry the kicking foot inward with a low open palm; hook your arm under their calf, step forward with your rear leg, and drive a throat strike while elevating their leg.',
            category: 'Kick Catch & Lift',
            targetArea: 'Calf underhook -> Trachea spear / Carotid strike',
          },
        ],
      },
      {
        id: 'bb-grabs',
        title: '4. Grabs & Releases',
        iconType: 'grab',
        techniques: [
          {
            id: 'bb-g-1',
            name: 'Rear Bear Hug (Over Arms)',
            koreanName: '뒤 팔 포함 껴안기 탈출',
            romanized: 'Dwi Poom Ppaegi (Over)',
            mechanics:
              'Exhale sharply and drop your base into a deep Juchum Seogi; flare both elbows out horizontally to stretch their grip; reach back with one hand to crush the testicles, grab their nearest ankle, and drive backward to dump them.',
            category: 'Bear Hug Dump',
            targetArea: 'Grip flaring -> Groin strike -> Ankle scoop dump',
          },
          {
            id: 'bb-g-2',
            name: 'Rear Bear Hug (Under Arms)',
            koreanName: '뒤 겨드랑이 껴안기 탈출',
            romanized: 'Dwi Poom Ppaegi (Under)',
            mechanics:
              'Drop your weight instantly to make yourself heavy; drive your rear elbow into their ribs, stomp your heel onto their instep, hook your foot behind their heel, and push backward with your hips.',
            category: 'Rooting & Instep Stamp',
            targetArea: 'Ribs elbow -> Instep stomp -> Heel trip',
          },
          {
            id: 'bb-g-3',
            name: 'Rear Hair Grab Spin',
            koreanName: '뒤 머리채 회전 탈출',
            romanized: 'Dwi Meorichae Hoejeon',
            mechanics:
              'Slap both hands down on their grabbing hand to pin it against your skull; pivot 180 degrees rapidly under their outstretched arm to torque their wrist into an overhead lock.',
            category: 'Rotational Under-Spin',
            targetArea: 'Wrist torque via 180° under-arm rotation',
          },
        ],
      },
      {
        id: 'bb-locks',
        title: '5. Joint Locks & Skeletal Controls',
        iconType: 'lock',
        techniques: [
          {
            id: 'bb-l-1',
            name: 'Standing Straight Armbar',
            koreanName: '팔 꺾기 (서서 하는 관절기)',
            romanized: 'Pal-kkeokgi',
            mechanics:
              'Evade a punch to the outside line; grab their wrist with both hands, elevate their arm, step under it, and leverage their elbow joint across your chest or shoulder with downward pressure on the wrist.',
            category: 'Standing Armbar',
            targetArea: 'Elbow hyperextension across shoulder/chest',
          },
          {
            id: 'bb-l-2',
            name: 'Standing Kimura / Figure-Four Shoulder Lock',
            koreanName: '기무라 어깨 관절기',
            romanized: 'Kimura / Figure-Four',
            mechanics:
              'Grab the attacker’s wrist with your same-side hand; reach your other arm over their bicep, thread it under their forearm, and grab your own wrist; crank their hand behind their back toward their neck.',
            category: 'Figure-Four Torsion',
            targetArea: 'Subscapularis & rotator cuff hyper-rotation',
          },
        ],
      },
      {
        id: 'bb-ground',
        title: '6. Ground Defense & Positional Recovery',
        iconType: 'ground',
        techniques: [
          {
            id: 'bb-gr-1',
            name: 'Mount Escape via Bridge & Roll (Upa)',
            koreanName: '마운트 탈출 (브릿지 앤 롤)',
            romanized: 'Upa Bridge & Roll',
            mechanics:
              'When pinned under full mount, trap the attacker\'s right wrist against your chest with both hands; trap their right foot using your left outside leg; bridge your hips up at a 45-degree angle over your left shoulder to roll them onto their back.',
            category: 'Mount Reversal',
            targetArea: 'Limb trapping -> 45° explosive hip bridge reversal',
          },
          {
            id: 'bb-gr-2',
            name: 'Scissor Sweep',
            koreanName: '가위 치기 넘어뜨리기',
            romanized: 'Gawi Chigi Sweep',
            mechanics:
              'From open guard, place one shin across the attacker\'s chest as a frame and the other leg along the floor against their bottom knee; pull their sleeve while scissoring your legs to flip them over.',
            category: 'Guard Sweep',
            targetArea: 'Torso shin frame + Knee scissor rotation',
          },
        ],
      },
      {
        id: 'bb-knees',
        title: '7. Knee Strikes',
        iconType: 'knee',
        techniques: [
          {
            id: 'bb-kn-1',
            name: 'Ground-and-Pound Knee Pin',
            koreanName: '무릎 누르기 제압',
            romanized: 'Mureup Nureugi',
            mechanics:
              'Once an attacker is grounded, drop your knee across their bicep or neck, driving your full body weight through your knee point to pin their upper body.',
            category: 'Grounded Knee Ride',
            targetArea: 'Bicep or carotid neck compression pin',
          },
          {
            id: 'bb-kn-2',
            name: 'Switch-Step Power Knee',
            koreanName: '스텝 전환 무릎 치기',
            romanized: 'Switch Mureup Chigi',
            mechanics:
              'Rapidly switch your feet to bring your lead leg to the rear, loading your hips, and launch a full-force knee strike directly into the attacker\'s solar plexus.',
            category: 'Kinetic Switch Knee',
            targetArea: 'Solar plexus / Xiphoid process',
          },
        ],
      },
      {
        id: 'bb-elbows',
        title: '8. Elbow Strikes',
        iconType: 'elbow',
        techniques: [
          {
            id: 'bb-e-1',
            name: 'Spinning Horizontal Back Elbow',
            koreanName: '뒤 돌려 팔굽 치기',
            romanized: 'Dwi Dollyeo Palkup Chigi',
            mechanics:
              'Pivot 180 degrees on the balls of your feet, whipping your head around first to spot the target, and follow through with a rear elbow across their jawline.',
            category: 'Rotational Elbow',
            targetArea: 'Mandible, chin cleft, temple',
          },
          {
            id: 'bb-e-2',
            name: 'Double Elbow Back Thrust',
            koreanName: '양 팔굽 뒤 치기',
            romanized: 'Yang Palkup Dwi Chigi',
            mechanics:
              'Drive both elbows backward simultaneously into the ribs or chest of two opponents or an attacker pinning you from behind.',
            category: 'Bilateral Rear Thrust',
            targetArea: 'Floating ribs / sternum behind',
          },
        ],
      },
    ],
  },

  // ===========================================================================
  // BROWN BELT (3rd & 2nd Geup)
  // ===========================================================================
  {
    id: 'brown-belt',
    rank: 'Brown Belt (3rd & 2nd Geup)',
    geup: '3rd & 2nd Geup',
    koreanRank: '밤띠 (3급 & 2급)',
    beltColor: '#8B4513',
    textColor: '#FFFFFF',
    borderColor: '#78350F',
    defensiveObjective:
      'Stop tackle and shoot entries (Sprawl mechanics), execute balance-breaking throws, apply joint submissions, and control ground positions.',
    categories: [
      {
        id: 'brb-hands',
        title: '1. Hand Strikes & Deflections',
        iconType: 'hand',
        techniques: [
          {
            id: 'brb-h-1',
            name: 'Double Heel-Palm Blast',
            koreanName: '양손 바탕손 밀침',
            romanized: 'Yang Batangson Blast',
            mechanics:
              'Drive both open palms into the attacker’s chest and clavicle line simultaneously with hip extension to break their forward drive.',
            category: 'Linear Momentum Arrest',
            targetArea: 'Bilateral sternal & clavicular arrest',
          },
          {
            id: 'brb-h-2',
            name: 'Heel Palm Chin-Lift with Leg Sweep',
            koreanName: '턱 들고 다리 걸기',
            romanized: 'Teok Deulgo Dari Geolgi',
            mechanics:
              'Drive an open palm under the attacker\'s chin, forcing their head back, while sweeping their lead leg backward.',
            category: 'Off-Balancing Sweep',
            targetArea: 'Cervical hyperextension + Calcaneus reap',
          },
          {
            id: 'brb-h-3',
            name: 'Scissors Block Frame',
            koreanName: '가위 막기',
            romanized: 'Gawi Makgi',
            mechanics:
              'One arm performs a downward block while the other executes an inside block, clearing mid-line grabs and low-line strikes simultaneously.',
            category: 'Bi-Level Frame',
            targetArea: 'Simultaneous low kick parry & high punch shield',
          },
        ],
      },
      {
        id: 'brb-kicks',
        title: '2. Kicks',
        iconType: 'kick',
        techniques: [
          {
            id: 'brb-k-1',
            name: 'Low Chopping Cut Kick',
            koreanName: '깎은 차기',
            romanized: 'Kkakk-eun Chagi',
            mechanics:
              'Turn your hips over completely and drive the hard lower shin into the outside of the attacker\'s thigh (targeting the peroneal nerve).',
            category: 'Low Shin Chop',
            targetArea: 'Common peroneal nerve cluster (Lateral thigh)',
          },
          {
            id: 'brb-k-2',
            name: 'Twisting Snap Kick',
            koreanName: '비틀어 차기',
            romanized: 'Biteureo Chagi',
            mechanics:
              'Kick from inside to outside, snapping the ball of the foot into the attacker\'s groin or floating ribs around their defensive guard.',
            category: 'Inverted Trajectory',
            targetArea: 'Groin, lower floating ribs around guard',
          },
          {
            id: 'brb-k-3',
            name: 'Ground Scythe Sweep Kick',
            koreanName: '바닥 낫걸이 차기',
            romanized: 'Natgeori Chagi',
            mechanics:
              'From the floor, hook one heel behind the attacker\'s lead ankle while driving your other sole against their kneecap to sweep their base.',
            category: 'Grounded Scythe',
            targetArea: 'Posterior ankle hook + Anterior patellar push',
          },
        ],
      },
      {
        id: 'brb-counters',
        title: '3. Counters',
        iconType: 'counter',
        techniques: [
          {
            id: 'brb-c-1',
            name: 'Counter to Double-Leg Tackle (The Sprawl)',
            koreanName: '태클 방어 (스프롤)',
            romanized: 'Sprawl Bangyeok',
            mechanics:
              'Throw both legs backward and drop your hips flat onto the ground; drive your chest down onto the back of the attacker’s neck; drive your hips down to pancake them to the mat.',
            category: 'Takedown Defense',
            targetArea: 'Hip weight pancake on attacker\'s cervical spine',
          },
          {
            id: 'brb-c-2',
            name: 'Counter to Single-Leg Tackle',
            koreanName: '싱글렉 태클 방어',
            romanized: 'Single Leg Defense',
            mechanics:
              'Post your palm on the crown of the attacker’s head and push it down; hop your trapped leg back, whizzering your arm through their opposite shoulder, and deliver a knee to their ribs.',
            category: 'Whizzer Counter',
            targetArea: 'Head push down + Overhook whizzer + Ribs knee',
          },
        ],
      },
      {
        id: 'brb-grabs',
        title: '4. Grabs & Releases',
        iconType: 'grab',
        techniques: [
          {
            id: 'brb-g-1',
            name: 'Front Full Nelson / Collar Tie Release',
            koreanName: '목덜미 잡힘 빼기',
            romanized: 'Collar Tie Ppaegi',
            mechanics:
              'Thread both forearms up between the attacker\'s biceps; drive your elbows outward, drop your chin, and step out into the clear line.',
            category: 'Bicep Thread Escape',
            targetArea: 'Upward wedge between biceps -> Centerline clearance',
          },
          {
            id: 'brb-g-2',
            name: 'Rear Full Nelson Escape',
            koreanName: '뒤 목걸기 풀기',
            romanized: 'Full Nelson Escape',
            mechanics:
              'Reach up with both hands, peel their pinky fingers backward; drop your body weight suddenly between their legs, sliding down under their armpits.',
            category: 'Finger Strip & Slip',
            targetArea: 'Small finger peel -> Vertical drop escape',
          },
          {
            id: 'brb-g-3',
            name: 'Two-Handed Ground Strangle Defense',
            koreanName: '누워 목조림 방어',
            romanized: 'Grounded Choke Defense',
            mechanics:
              'Trap one of their forearms with both hands; bridge your hips up explosively to disrupt their balance, roll your body over that trapped side, and transition to dominant guard.',
            category: 'Bridge & Trap Choke Defense',
            targetArea: 'Forearm trap + Hip bridge roll over shoulder',
          },
        ],
      },
      {
        id: 'brb-locks',
        title: '5. Joint Locks & Skeletal Controls',
        iconType: 'lock',
        techniques: [
          {
            id: 'brb-l-1',
            name: 'Standing Hammerlock (Police Escort Control)',
            koreanName: '경찰식 팔꺾기 호송술',
            romanized: 'Hammerlock Hosongsul',
            mechanics:
              'Twist the attacker’s arm behind their back, bend their elbow to 90 degrees, and push their wrist upward toward their shoulder blades while pinning their shoulder down.',
            category: 'Restraint / Escort Lock',
            targetArea: 'Internal rotation of shoulder joint (Subscapularis)',
          },
          {
            id: 'brb-l-2',
            name: 'Standing Guillotine Choke',
            koreanName: '서서 단두대 조르기',
            romanized: 'Standing Guillotine',
            mechanics:
              'Following a successful sprawl, wrap your near arm under the attacker\'s neck; lock your hands together palm-to-palm; arch your back, roll your shoulders, and lift your elbows to compress the trachea.',
            category: 'Front Headlock Choke',
            targetArea: 'Tracheal compression & bilateral carotid artery pin',
          },
        ],
      },
      {
        id: 'brb-ground',
        title: '6. Ground Defense & Positional Recovery',
        iconType: 'ground',
        techniques: [
          {
            id: 'brb-gr-1',
            name: 'Straight Armbar from Guard',
            koreanName: '가드에서의 팔꺾기',
            romanized: 'Pal-kkeokgi from Guard',
            mechanics:
              'From closed guard, secure the attacker\'s wrist; pivot your hips 90 degrees; swing your leg over their face; pinch your knees together and elevate your hips to break the elbow.',
            category: 'Submissive Joint Break',
            targetArea: 'Elbow hyperextension across pelvic fulcrum',
          },
          {
            id: 'brb-gr-2',
            name: 'Guillotine Choke from Guard',
            koreanName: '가드에서의 조르기',
            romanized: 'Guillotine Choke from Guard',
            mechanics:
              'Attacker puts their head down in your guard; wrap your forearm under their neck, clasp your hands, close your guard around their waist, and extend your hips while lifting the choke.',
            category: 'Guard Choke',
            targetArea: 'Trachea & carotid arteries with pelvic stretch',
          },
        ],
      },
      {
        id: 'brb-knees',
        title: '7. Knee Strikes',
        iconType: 'knee',
        techniques: [
          {
            id: 'brb-kn-1',
            name: 'Oblique Stomp Knee',
            koreanName: '사선 무릎 밟기',
            romanized: 'Saseon Mureup Balbgi',
            mechanics:
              'Drive the knee diagonally downward through the side of an attacker\'s kneecap while controlling their upper torso in a clinch.',
            category: 'Joint Destruction',
            targetArea: 'Lateral patella & meniscus',
          },
          {
            id: 'brb-kn-2',
            name: 'Clinch Frame Knee',
            koreanName: '클린치 프레임 무릎 치기',
            romanized: 'Clinch Frame Knee',
            mechanics:
              'Push your forearm across the attacker\'s collarbone to create a frame, pull their head in with the other hand, and drive repeated knees into their hip joint and abdomen.',
            category: 'Frame-and-Fire Knee',
            targetArea: 'Pelvic bone, bladder, lower ribs',
          },
        ],
      },
      {
        id: 'brb-elbows',
        title: '8. Elbow Strikes',
        iconType: 'elbow',
        techniques: [
          {
            id: 'brb-e-1',
            name: 'Sprawl Downward Elbow Spike',
            koreanName: '스프롤 하향 팔굽 찍기',
            romanized: 'Sprawl Palkup Jjikgi',
            mechanics:
              'While sprawling on top of an attacker shooting on your legs, drive downward elbow strikes into the side of their neck, trapezius, or thoracic spine.',
            category: 'Top Ground Spike',
            targetArea: 'Trapezius nerve motor point, thoracic spine',
          },
          {
            id: 'brb-e-2',
            name: 'Inward-to-Outward Horizontal Slash',
            koreanName: '안에서 밖으로 팔굽 치기',
            romanized: 'An-eseo Bakkat Palkup Chigi',
            mechanics:
              'Whip the elbow point from inside to outside through a tight clinch space to catch the attacker across the jaw.',
            category: 'Short Tight Slash',
            targetArea: 'Mandible, ear base, cheekbone',
          },
        ],
      },
    ],
  },

  // ===========================================================================
  // RED BELT (2nd & 1st Geup)
  // ===========================================================================
  {
    id: 'red-belt',
    rank: 'Red Belt (2nd & 1st Geup)',
    geup: '2nd & 1st Geup',
    koreanRank: '빨간띠 (2급 & 1급)',
    beltColor: '#EF2F38',
    textColor: '#FFFFFF',
    borderColor: '#DC2626',
    defensiveObjective:
      'Clear weapon vectors, use two-on-one limb control, disarm weapons using wrist leverage against the thumbs, and survive close-quarters threats.',
    categories: [
      {
        id: 'rb-hands',
        title: '1. Hand Strikes & Deflections',
        iconType: 'hand',
        techniques: [
          {
            id: 'rb-h-1',
            name: 'Cross-Arm High Wedge',
            koreanName: '엇걸어 올려 막기',
            romanized: 'Eotgeoreo Ollyeo Makgi',
            mechanics:
              'Intercept an overhead blunt weapon strike by meeting the attacker’s wrist/forearm (never the weapon) with crossed forearms at the apex of the swing.',
            category: 'Weapon Wedge',
            targetArea: 'Attacker\'s armed wrist / forearm bone (Before apex)',
          },
          {
            id: 'rb-h-2',
            name: 'Cross-Arm Low Wedge',
            koreanName: '엇걸어 하단 막기',
            romanized: 'Eotgeoreo Ha-dan Makgi',
            mechanics:
              'Cross forearms downward to parry an underhand knife thrust away from the abdomen.',
            category: 'Low Thrust Wedge',
            targetArea: 'Armed wrist vector redirection (Away from organs)',
          },
          {
            id: 'rb-h-3',
            name: 'Open-Palm Deflection Vector',
            koreanName: '바탕손 칼날 빗겨내기',
            romanized: 'Batangson Knife Deflection',
            mechanics:
              'Angle the body 45 degrees outside the line of a blade thrust, guiding the armed wrist past your torso with an open palm.',
            category: '45° Vector Redirection',
            targetArea: 'Armed wrist guidance past torso line',
          },
        ],
      },
      {
        id: 'rb-kicks',
        title: '2. Kicks',
        iconType: 'kick',
        techniques: [
          {
            id: 'rb-k-1',
            name: 'Stop-Kick to Weapon Hip',
            koreanName: '무기 측 골반 멈춤차기',
            romanized: 'Mireo Chagi to Weapon Hip',
            mechanics:
              'Drive a rapid push kick into the attacker’s weapon-side hip joint before they can complete a swing or thrust, disrupting their kinetic chain.',
            category: 'Kinetic Chain Disruption',
            targetArea: 'Weapon-side acetabulofemoral hip joint',
          },
          {
            id: 'rb-k-2',
            name: 'Spinning Back Kick to Midsection',
            koreanName: '뒤차기 (무기 돌진 차단)',
            romanized: 'Dwi Chagi to Midsection',
            mechanics:
              'When an armed attacker charges, step off-line and deliver a back kick into their solar plexus to knock them out of striking range.',
            category: 'Interception Back Kick',
            targetArea: 'Solar plexus / Sternum of charging attacker',
          },
          {
            id: 'rb-k-3',
            name: 'Ankle Sweep to Armed Attacker',
            koreanName: '무기 공격자 발목 걸기',
            romanized: 'Ankle Sweep vs. Weapon',
            mechanics:
              'Sweep the attacker\'s forward leg during weapon wind-up to bring them to the ground where weapons are harder to leverage.',
            category: 'Grounded Reduction',
            targetArea: 'Forward plant ankle during wind-up phase',
          },
        ],
      },
      {
        id: 'rb-counters',
        title: '3. Counters',
        iconType: 'counter',
        techniques: [
          {
            id: 'rb-c-1',
            name: 'Counter to Overhead Club/Pipe Strike',
            koreanName: '둔기 공격 반격 및 무장해제',
            romanized: 'Overhead Weapon Disarm Counter',
            mechanics:
              'Step aggressively inside the arc of the swing; jam the bicep/shoulder before acceleration; overhook the arm, drive a palm heel to the chin, and strip the implement.',
            category: 'Blunt Weapon Intercept',
            targetArea: 'Bicep jam -> Palm heel to chin -> Tool strip',
          },
          {
            id: 'rb-c-2',
            name: 'Counter to Straight Knife Thrust',
            koreanName: '단검 찌르기 2-on-1 반격',
            romanized: 'Knife Thrust 2-on-1 Counter',
            mechanics:
              'Step 45 degrees outside the weapon vector; parry the wrist inward, immediately secure a two-on-one grip on the armed wrist, and drive a knee strike into their floating ribs.',
            category: 'Blade Vector Escape & Grip',
            targetArea: '45° outside evasion -> Two-on-one wrist -> Rib knee',
          },
          {
            id: 'rb-c-3',
            name: 'Counter to Diagonal Knife Slash',
            koreanName: '대각선 칼베기 반격',
            romanized: 'Diagonal Slash Counter',
            mechanics:
              'Duck beneath the slashing plane; step into the attacker\'s blind spot behind their armed shoulder; trap the wrist and apply a shoulder-lock takedown.',
            category: 'Under-Duck Blindspot Takedown',
            targetArea: 'Blind spot entry behind armed shoulder -> Takedown',
          },
        ],
      },
      {
        id: 'rb-grabs',
        title: '4. Grabs & Releases',
        iconType: 'grab',
        techniques: [
          {
            id: 'rb-g-1',
            name: 'Static Knife Threat to Throat (Front)',
            koreanName: '정면 흉기 위협 탈출',
            romanized: 'Static Throat Knife Escape',
            mechanics:
              'Raise hands in appeasement; pivot your torso away from the blade edge; clamp both hands over the attacker’s armed wrist, driving the blade downward away from your neck.',
            category: 'Edge Clearance & Two-Hand Clamp',
            targetArea: 'Blade line removal -> Dual-hand wrist clamp',
          },
          {
            id: 'rb-g-2',
            name: 'Static Knife Threat to Back',
            koreanName: '후방 흉기 위협 탈출',
            romanized: 'Static Back Knife Escape',
            mechanics:
              'Look over your shoulder to confirm blade location; pivot your torso inside the weapon line, wrapping their tricep with your forearm to trap the weapon arm against your ribs.',
            category: 'Tricep Wrap & Body Turn',
            targetArea: 'Tricep wrap against ribcage -> Elbow lock',
          },
          {
            id: 'rb-g-3',
            name: 'Defensive Tool Retention Strip',
            koreanName: '방어 도구 탈취 방지',
            romanized: 'Retention Strip',
            mechanics:
              'If an attacker attempts to grab your clothing or defensive tool, rotate the implement in a tight circle toward their thumbs to peel their grip loose.',
            category: 'Rotational Retention',
            targetArea: 'Circular leverage peeling attacker\'s thumbs',
          },
        ],
      },
      {
        id: 'rb-locks',
        title: '5. Joint Locks & Disarms',
        iconType: 'lock',
        techniques: [
          {
            id: 'rb-l-1',
            name: 'Rotational Knife Disarm (Leverage Against Thumb)',
            koreanName: '회전식 칼 빼앗기',
            romanized: 'Rotational Knife Disarm',
            mechanics:
              'With a two-on-one grip on the weapon wrist, bend their wrist inward toward their forearm and rotate the weapon handle directly toward their thumb opening to force a drop.',
            category: 'Thumb-Line Weapon Strip',
            targetArea: 'Radiocarpal flexion + Thumb gap lever extraction',
          },
          {
            id: 'rb-l-2',
            name: 'Figure-Four Knife Disarm',
            koreanName: '4자형 단검 무장해제',
            romanized: 'Figure-Four Knife Disarm',
            mechanics:
              'Thread your arm over the attacker\'s armed wrist, weave it under their elbow, and grab your own wrist; crank the joint downward to dislocate the shoulder and force the weapon out.',
            category: 'Compound Disarm Lock',
            targetArea: 'Shoulder dislocation & forced finger release',
          },
        ],
      },
      {
        id: 'rb-ground',
        title: '6. Ground Defense & Positional Recovery',
        iconType: 'ground',
        techniques: [
          {
            id: 'rb-gr-1',
            name: 'Grounded Knife Defense (Attacker in Mount)',
            koreanName: '마운트 상태 칼 방어',
            romanized: 'Mounted Knife Defense',
            mechanics:
              'Trap the attacker’s weapon wrist with both hands; bridge your hips up violently to disrupt their base; wrap your legs around their torso and execute a scissor roll to reverse positions.',
            category: 'Mounted Weapon Survival',
            targetArea: 'Dual-hand wrist trap + Explosive hip roll reversal',
          },
          {
            id: 'rb-gr-2',
            name: 'Scramble-Away Leg Barrier',
            koreanName: '누워 다리 방벽 유지',
            romanized: 'Leg Barrier Scramble',
            mechanics:
              'If grounded while an armed attacker is standing, stay on your back, spin your hips to keep your feet facing them, and kick their knees to maintain space until you can perform a technical stand-up.',
            category: 'Standing-vs-Ground Space Control',
            targetArea: 'Patellar kicks to maintain reactionary gap',
          },
        ],
      },
      {
        id: 'rb-knees',
        title: '7. Knee Strikes',
        iconType: 'knee',
        techniques: [
          {
            id: 'rb-kn-1',
            name: 'Weapon-Arm Pinning Knee',
            koreanName: '무기 든 팔 무릎 누르기',
            romanized: 'Weapon Arm Knee Pin',
            mechanics:
              'Once an armed attacker is thrown to the ground, drop your knee directly across their bicep to pin the weapon arm to the floor while extracting the weapon.',
            category: 'Ground Pinning',
            targetArea: 'Bicep / Radial nerve floor compression',
          },
          {
            id: 'rb-kn-2',
            name: 'Linear Thrust Knee Inside Weapon Swing',
            koreanName: '무기 회전 내측 무릎 찌르기',
            romanized: 'Inside Thrust Knee',
            mechanics:
              'Step inside the reach of a swinging weapon and drive your knee straight into their pelvis to shut down their forward balance.',
            category: 'Clinch Penetration',
            targetArea: 'Pelvic girdle / Lower abdomen',
          },
        ],
      },
      {
        id: 'rb-elbows',
        title: '8. Elbow Strikes',
        iconType: 'elbow',
        techniques: [
          {
            id: 'rb-e-1',
            name: 'Diagonal Upward Elbow to Tricep',
            koreanName: '삼두박근 팔굽 올려치기',
            romanized: 'Tricep Palkup Strike',
            mechanics:
              'Drive your elbow point upward into the attacker’s armed tricep or brachial nerve cluster to deaden the limb during a grab.',
            category: 'Limb Deadening Strike',
            targetArea: 'Radial nerve motor point on triceps',
          },
          {
            id: 'rb-e-2',
            name: 'Horizontal Elbow to Jaw off Weapon Parry',
            koreanName: '칼 패링 후 턱 팔굽 치기',
            romanized: 'Parry-to-Elbow Finish',
            mechanics:
              'Immediately following a successful knife parry, whip your free elbow horizontally into the attacker\'s jaw to knock them out.',
            category: 'Decisive Counter Strike',
            targetArea: 'Mandible / Mental nerve KO point',
          },
        ],
      },
    ],
  },

  // ===========================================================================
  // BLACK BELT (1st Dan & Above)
  // ===========================================================================
  {
    id: 'black-belt',
    rank: 'Black Belt (1st Dan & Above)',
    geup: '1st Dan & Above',
    koreanRank: '검은띠 (유단자 1단 이상)',
    beltColor: '#18181B',
    textColor: '#FFFFFF',
    borderColor: '#3F3F46',
    defensiveObjective:
      'Seamlessly blend striking, joint manipulation, and throws; control multiple assailants via angular positioning (Funneling); apply non-lethal law-enforcement compliance controls and vital point (Geupso) disruption.',
    categories: [
      {
        id: 'blb-hands',
        title: '1. Hand Strikes & Vital Point Disruptions',
        iconType: 'hand',
        techniques: [
          {
            id: 'blb-h-1',
            name: 'Spearhand to Suprasternal Notch',
            koreanName: '편손끝 찌르기 (쇄골 상와)',
            romanized: 'Pyeonson-kkeut Chigi',
            mechanics:
              'Drive rigid, supported fingertips directly into the hollow at the base of the throat (tracheal notch) to trigger gag reflexes and stop an assault.',
            category: 'Fatal Vital Strike',
            targetArea: 'Suprasternal notch (Jugular fossa / Tracheal base)',
          },
          {
            id: 'blb-h-2',
            name: 'Carotid Ridge-Hand Chop',
            koreanName: '손날등 목 치기',
            romanized: 'Sonnal-deung Mok Chigi',
            mechanics:
              'Drive the radial edge of the hand into the side of the neck, striking the vagus nerve and carotid sinus to drop blood pressure.',
            category: 'Neurovascular Shock',
            targetArea: 'Carotid sinus & Vagus nerve (Lateral cervical triangle)',
          },
          {
            id: 'blb-h-3',
            name: 'Bilateral Open-Palm Temple Slap',
            koreanName: '양손바닥 관자놀이 치기',
            romanized: 'Yang Sonbadak Kwanjanori Chigi',
            mechanics:
              'Strike both sides of the attacker\'s temples simultaneously with cup-shaped palms to disorient and collapse their consciousness.',
            category: 'Concussive Disorientation',
            targetArea: 'Pterion & temporal fossa (Bilateral)',
          },
        ],
      },
      {
        id: 'blb-kicks',
        title: '2. Kicks',
        iconType: 'kick',
        techniques: [
          {
            id: 'blb-k-1',
            name: 'Blind Spinning Back Kick to Rear Threat',
            koreanName: '뒤 위협 차단 뒤차기',
            romanized: 'Blind Dwi Chagi to Rear Threat',
            mechanics:
              'Without pivoting your torso forward, look over your shoulder and drive a straight heel thrust into the midsection of an approaching secondary attacker.',
            category: 'Multi-Opponent Blind Kick',
            targetArea: 'Solar plexus of secondary flank attacker',
          },
          {
            id: 'blb-k-2',
            name: 'Scythe Sweep Kick to Lead Ankle',
            koreanName: '발목 낫걸이 후리기',
            romanized: 'Scythe Ankle Sweep Kick',
            mechanics:
              'Drop your body weight low and sweep your leg across the floor to take out both ankles of an advancing opponent.',
            category: 'Rotational Low Sweep',
            targetArea: 'Calcaneal tendon & talocrural joint',
          },
          {
            id: 'blb-k-3',
            name: 'Skip-Step Oblique Joint Snap',
            koreanName: '스킵 스텝 사선 관절 밟기',
            romanized: 'Skip Oblique Joint Snap',
            mechanics:
              'Step quickly to close distance and stomp through the attacker’s lead knee joint with your heel, buckling their leg backward.',
            category: 'Linear Joint Rupture',
            targetArea: 'Hyperextension of patella & posterior cruciate ligament',
          },
        ],
      },
      {
        id: 'blb-counters',
        title: '3. Counters',
        iconType: 'counter',
        techniques: [
          {
            id: 'blb-c-1',
            name: 'Counter to Two-Attacker Flank Grab',
            koreanName: '2인 동시 측면 잡힘 반격',
            romanized: 'Two-Attacker Flank Counter',
            mechanics:
              'Two attackers grab one of your arms each; drop your center of gravity suddenly to pull both inward; front-kick Attacker A’s groin, then pivot to push Attacker A directly into Attacker B\'s path.',
            category: 'Funneling & Obstacle Creation',
            targetArea: 'Attacker A into Attacker B (Kinetic line alignment)',
          },
          {
            id: 'blb-c-2',
            name: 'Counter to Sucker Punch / Rear Ambush',
            koreanName: '기습 기습타격 흡수 후 허리던지기',
            romanized: 'Kobu Makgi to Heori Deonjigi',
            mechanics:
              'Shell your head with an elbow shield (Kobu Makgi); absorb the impact on your forearm, pivot inside the attacker\'s center line, and execute a hip throw (Heori Deonjigi).',
            category: 'Cover & Throw',
            targetArea: 'Forearm shell absorption -> Hip throw slam',
          },
        ],
      },
      {
        id: 'blb-grabs',
        title: '4. Grabs, Holds & Throws',
        iconType: 'grab',
        techniques: [
          {
            id: 'blb-g-1',
            name: 'Major Outer Reaping Throw',
            koreanName: '밭다리 걸기',
            romanized: 'Bakkat-dari Geolgi (Osoto Gari)',
            mechanics:
              'Wrap your lead arm around the back of the attacker’s neck, step deeply behind their lead leg, and reap their leg backward while driving your chest forward.',
            category: 'Outer Reap Throw',
            targetArea: 'Cervical pull down + Hamstring reap backward',
          },
          {
            id: 'blb-g-2',
            name: 'Minor Inner Reaping Throw',
            koreanName: '안다리 걸기',
            romanized: 'An-dari Geolgi (Ouchi Gari)',
            mechanics:
              'Clinch the attacker’s upper body; step inside their guard and hook the inside of their lead calf with your instep, driving them backward.',
            category: 'Inner Reap Throw',
            targetArea: 'Inner calf reap + Upper body backward drive',
          },
          {
            id: 'blb-g-3',
            name: 'Hip Toss',
            koreanName: '허리 던지기',
            romanized: 'Heori Deonjigi (O Goshi)',
            mechanics:
              'Turn your back to the attacker, insert your hips beneath their belt line, pull their arm across your chest, and lever them over your hip to the ground.',
            category: 'Hip Pivot Throw',
            targetArea: 'Sub-pelvic fulcrum lever launch',
          },
        ],
      },
      {
        id: 'blb-locks',
        title: '5. Joint Locks & Law-Enforcement Restraints',
        iconType: 'lock',
        techniques: [
          {
            id: 'blb-l-1',
            name: 'Police Come-Along Escort Hold',
            koreanName: '경찰식 호송 압박술',
            romanized: 'Police Escort Hold',
            mechanics:
              'Force the attacker’s wrist into a downward gooseneck position; lift their elbow from underneath and pin their upper arm tightly against your ribs to escort them without striking.',
            category: 'Compliance Control',
            targetArea: 'Gooseneck wrist flexion + Elbow elevation pin',
          },
          {
            id: 'blb-l-2',
            name: 'Standing Kimura Shoulder Dislocation',
            koreanName: '서서 기무라 견관절 탈구',
            romanized: 'Standing Kimura Subluxation',
            mechanics:
              'Lock a figure-four grip on the attacker\'s wrist; step through to their side and crank their hand behind their back until their shoulder joint immobilizes or dislocates.',
            category: 'Joint Destruction',
            targetArea: 'Glenohumeral joint separation',
          },
          {
            id: 'blb-l-3',
            name: 'Standing Peruvian Necktie / Head-and-Arm Control',
            koreanName: '페루비안 넥타이 선 자세 제압',
            romanized: 'Standing Head-and-Arm Lock',
            mechanics:
              'From a sprawl, lock an arm-in guillotine grip, throw your leg over the back of their head, and drop your weight to strangle and immobilize them standing.',
            category: 'Head-and-Arm Strangle',
            targetArea: 'Cervical spine compression + Tracheal vascular lock',
          },
        ],
      },
      {
        id: 'blb-ground',
        title: '6. Ground Defense & Positional Neutralization',
        iconType: 'ground',
        techniques: [
          {
            id: 'blb-gr-1',
            name: 'Rear Naked Choke',
            koreanName: '뒤 목 조르기',
            romanized: 'Dwit Mok Jorugi (RNC)',
            mechanics:
              'Take the attacker\'s back; wrap one forearm under their chin (elbow aligned with windpipe); lock your hand onto your opposite bicep, place your other hand behind their head, and expand your chest.',
            category: 'Vascular Strangulation',
            targetArea: 'Bilateral common carotid artery occlusion',
          },
          {
            id: 'blb-gr-2',
            name: 'Triangle Choke',
            koreanName: '삼각 조르기',
            romanized: 'Sam-gak Jorugi (Sankaku-jime)',
            mechanics:
              'From open guard, throw one leg over the attacker\'s shoulder and across the back of their neck; lock your ankle beneath your opposite knee; pull their arm across your chest and squeeze your knees together to compress both carotids.',
            category: 'Cervicovascular Leg Trap',
            targetArea: 'Carotid compression between shin and own shoulder',
          },
        ],
      },
      {
        id: 'blb-knees',
        title: '7. Knee Strikes',
        iconType: 'knee',
        techniques: [
          {
            id: 'blb-kn-1',
            name: 'Alternating Clinch Knee Storm',
            koreanName: '클린치 연속 무릎 폭풍',
            romanized: 'Clinch Knee Storm',
            mechanics:
              'Maintain a tight double-collar tie; switch hips rapidly to fire alternating knee strikes into the attacker\'s ribs, liver, and sternum.',
            category: 'Rapid Fire Knee Combination',
            targetArea: 'Liver, spleen, floating ribs in continuous rhythm',
          },
          {
            id: 'blb-kn-2',
            name: 'Flying Takedown Interception Knee',
            koreanName: '플라잉 무릎 격추',
            romanized: 'Flying Interception Knee',
            mechanics:
              'Time an aggressive forward dive or tackle; jump off the lead foot and drive the rear knee straight down the center line into their face.',
            category: 'Airborne Interception',
            targetArea: 'Facial skeleton of charging opponent',
          },
        ],
      },
      {
        id: 'blb-elbows',
        title: '8. Elbow Strikes',
        iconType: 'elbow',
        techniques: [
          {
            id: 'blb-e-1',
            name: 'Close-Quarters Double Elbow Rolling Combination',
            koreanName: '근접 연타 회전 팔굽',
            romanized: 'Rolling Elbow Combination',
            mechanics:
              'In phone-booth distance, chain a horizontal elbow to the jaw, a descending diagonal elbow to the collarbone, and a rising upward elbow spike to the chin in a continuous flow.',
            category: 'Continuous Flow Elbows',
            targetArea: 'Jawline -> Clavicle -> Chin apex in 3-beat rhythm',
          },
          {
            id: 'blb-e-2',
            name: '360-Degree Spinning Downward Spike',
            koreanName: '360도 회전 하향 팔굽 찍기',
            romanized: '360 Spinning Downward Elbow',
            mechanics:
              'Pivot 360 degrees off an evasion to generate maximum angular momentum, dropping the point of the elbow straight down onto the cervical spine of an off-balanced attacker.',
            category: 'Angular Momentum Destruction',
            targetArea: 'Thoracic-cervical vertebrae of bent attacker',
          },
        ],
      },
    ],
  },
]

// -----------------------------------------------------------------------------
// 2. SAFETY & PEDAGOGICAL FRAMEWORK
// -----------------------------------------------------------------------------

export const hosinsulSafetyFramework: HosinsulSafetyFramework = {
  universalRules: [
    {
      id: 'sr-1',
      title: 'Two-Point Tap Rule',
      koreanTitle: '2점 탭 아웃 규칙',
      rule:
        'The defender must physically tap the partner twice with an open palm. If both hands are trapped, they must tap the mat with a foot or call out loudly: "TAP!" (Verbal call takes absolute precedence over physical tap).',
      severity: 'critical',
      badgeText: 'Absolute Priority',
    },
    {
      id: 'sr-2',
      title: 'Instant Release Rule',
      koreanTitle: '즉각적인 해제 원칙',
      rule:
        'The instant a tap is registered (auditory or sensory), the applying student must immediately release all tension—never "hold to finish" or extend beyond the tap.',
      severity: 'critical',
      badgeText: 'Zero Latency',
    },
    {
      id: 'sr-3',
      title: 'Zero Ballistic Torque on Submissions',
      koreanTitle: '관절기 탄성 조작 금지',
      rule:
        'All joint locks (wrists, elbows, shoulders) and chokes must be applied smoothly over 3 to 5 seconds. Snapping, wrenching, or jerking a lock suddenly is strictly prohibited and grounds for immediate removal from the floor.',
      severity: 'high',
      badgeText: '3-5s Slow Application',
    },
    {
      id: 'sr-4',
      title: 'Fall Break (Nakbeop) Clearance',
      koreanTitle: '낙법(落法) 사전 이수 인증',
      rule:
        'No student may participate in Level 2 or higher takedown/throw drills without verified proficiency in basic rear, side, and rolling breakfalls (Nakbeop).',
      severity: 'standard',
      badgeText: 'Prerequisite Required',
    },
  ],

  progressionMatrix: [
    {
      tier: 'Level 1',
      levelName: 'Mechanics & Pathway',
      speedPercent: 25,
      speedLabel: '25% speed; zero impact',
      resistancePercent: 0,
      resistanceLabel: '0% (Purely compliant)',
      resistanceDesc: 'Compliant "statue" partner; allows defender to find proper anatomical fulcrums.',
      gearRequired: ['Standard Dobok'],
      primaryFocus: 'Biomechanical alignment, lever placement, balance recovery, and muscle memory.',
    },
    {
      tier: 'Level 2',
      levelName: 'Structural Integrity',
      speedPercent: 50,
      speedLabel: '50% speed; light touch',
      resistancePercent: 35,
      resistanceLabel: '25–40% resistance',
      resistanceDesc: 'Holds grip firm and establishes base, but does not actively counter or strike back.',
      gearRequired: ['Standard Dobok', 'Mouthguard', 'Groin Guard'],
      primaryFocus: 'Feeling the opponent’s center of mass; executing the break against real grip tension.',
    },
    {
      tier: 'Level 3',
      levelName: 'Dynamic Timing',
      speedPercent: 75,
      speedLabel: '75% speed; controlled contact',
      resistancePercent: 70,
      resistanceLabel: '60–75% resistance',
      resistanceDesc: 'Attempts secondary grab, resists the initial lever, or resets posture to re-engage.',
      gearRequired: ['Headgear with Face Cage', '14oz or Hosinsul Gloves', 'Shin-Instep Guards'],
      primaryFocus: 'Reacting to unexpected resistance; chaining secondary techniques if the primary lock fails.',
    },
    {
      tier: 'Level 4',
      levelName: 'Pressure Simulation',
      speedPercent: 95,
      speedLabel: '90–100% reaction speed; controlled force',
      resistancePercent: 90,
      resistanceLabel: 'Unscripted resistance',
      resistanceDesc: 'Unscripted dynamic resistance within defined scenario rules and tactical boundaries.',
      gearRequired: ['Full Sparring Gear', 'Chest Protector (Hogu)', 'Polycarbonate Eye Protection for Weapon Drills'],
      primaryFocus: 'Adrenaline stress inoculation, situational awareness, verbal de-escalation, and tactical disengagement.',
    },
  ],

  safetyParameters: [
    {
      id: 'sp-1',
      domain: 'Joint Locks & Wrist Manipulations (Small Joints)',
      subtitle: 'Carpal, Metacarpal & Elbow Hinge Limits',
      guidelines: [
        'Maintain a two-second slow catch: once the wrist or elbow joint reaches 80% range of motion, increase pressure in millimeter increments.',
        'Never peel individual fingers; manipulations must isolate the wrist, the elbow hinge, or the entire hand unit.',
        'If a partner has past wrist or hypermobility injuries, inform the coach and swap to open-palm deflection drills.',
      ],
    },
    {
      id: 'sp-2',
      domain: 'Cervical Spine & Chokes (Airway vs. Vascular)',
      subtitle: 'Thyroid Protection & 3-Second Rule',
      guidelines: [
        'Airway pressure (trachea strikes, straight forearm throat crushes) is simulated with open-palm air stops 2 inches short of the neck or directed to target mitts.',
        'Vascular holds (sleeper, guillotine) are held for a maximum of 3 seconds once locked. If the defender does not escape within 3 seconds, the coach resets the drill to prevent carotid compression dizziness.',
        'Never twist or torque the neck while applying a choke from behind.',
      ],
    },
    {
      id: 'sp-3',
      domain: 'Knees & Elbows in Close Quarters',
      subtitle: 'Target-Wedge Method & Pad Safety',
      guidelines: [
        'Never deliver bare elbows or knees directly to a human partner’s head or spine.',
        'The Target-Wedge Method: When practicing close-quarters elbows and knees, the partner holds a high-density curved shield (pao) or foam focus mitt flush to their torso/jaw line to absorb full impact.',
        'If no pad is used, strikes stop 3 inches away with contact transferred to a light chest-tap using the open hand.',
      ],
    },
    {
      id: 'sp-4',
      domain: 'Takedowns & Reaping Throws',
      subtitle: 'Guiding Descent & Dedicated Mat Zones',
      guidelines: [
        'The student initiating the throw is responsible for guiding their partner to the mat. Maintain sleeve or collar grip control on the way down to decelerate your partner’s landing.',
        'Throws must occur in dedicated 3x3-meter safety zones clear of walls, pillars, and other practicing pairs.',
        'Never attempt sacrifice throws (Sutemi-waza) or high-amplitude reaps without express instructor clearance.',
      ],
    },
    {
      id: 'sp-5',
      domain: 'Edged & Blunt Weapon Simulations',
      subtitle: 'Compliant Rubber Blades & Eye Protection',
      guidelines: [
        'Metal, wood, or hard composite training blades are strictly banned for dynamic partner drills. Only rounded, high-density rubber or dense foam training weapons are permitted.',
        'Ballistic-rated safety glasses or polycarbonate eye protection must be worn by both partners for all knife thrust and slash drills.',
        'Check training blades before every session for sharp burs, exposed cores, or cracked tips.',
      ],
    },
  ],

  floorProtocols: [
    {
      id: 'fp-1',
      command: 'FREEZE!',
      koreanCommand: '멈춰! (Meomchwo!)',
      action:
        'Every student on the floor must halt all motion instantly and hold their exact position without moving a muscle.',
      rationale:
        'Immediate hazard suppression in case of gear failure, proximity to walls, or an unregistered tap.',
    },
    {
      id: 'fp-2',
      command: 'Ego Check Protocol',
      koreanCommand: '수련 절제 규율',
      action:
        'If a partner increases resistance or strike velocity beyond the assigned tier level, the instructor immediately demotes the pair back to Level 1 static drilling.',
      rationale:
        'Prevents escalation of adrenaline from morphing technical study into ego-driven competitive fighting.',
    },
    {
      id: 'fp-3',
      command: 'Size & Experience Pairing',
      koreanCommand: '체급 및 숙련도 매칭',
      action:
        'White through Green belts drill primarily with senior ranks (Blue and above) or partners of equal weight. Never pair two brand-new students together for dynamic joint-lock submissions.',
      rationale:
        'Senior students possess the neurological control and empathy needed to apply sub-maximal pressure safely.',
    },
  ],
}
