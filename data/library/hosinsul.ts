import type { LibraryItem } from './types'

export const hosinsulItems: LibraryItem[] = [
  // ---------------------------------------------------------------------------
  // 1. NULLEO-KKEOKGI (눌러꺾기) — Pressing and Snapping Joint Lock
  // ---------------------------------------------------------------------------
  {
    id: 'hsin-01',
    slug: 'nulleo-kkeokgi-pressing-snapping',
    name: 'Pressing and Snapping (Nulleo-kkeokgi)',
    koreanName: '눌러꺾기 (Pressing & Snapping)',
    romanized: 'Nulleo-kkeokgi',
    category: 'hosinsul',
    difficulty: 'Intermediate',
    beltLevel: 'Green Belt+',
    badgeColor: '#09BB00',
    summary:
      'A snapping technique executed by pressing downward on the assailant’s extended joints. Involves gripping the opponent’s arm and driving an arc hand or forearm onto their elbow/shoulder, or trapping their kicking leg and driving downward pressure onto the knee joint.',
    meaning: 'Neutralizing aggressive forward momentum by collapsing anatomical joint fulcrums downward.',
    strikingSurface: 'Arc Hand (Khaljaebi / Agwison) & Radial Forearm Bone',
    targetArea: 'Olecranon Process (Elbow Joint), Acromion (Shoulder), Patellar Ligament (Knee)',
    terminology: [
      { korean: '눌러꺾기', romanized: 'Nulleo-kkeokgi', english: 'Downward Pressing Joint Break', category: 'Lock' },
      { korean: '칼재비', romanized: 'Khaljaebi', english: 'Arc Hand (V-shaped web between thumb & index)', category: 'Hand' },
      { korean: '팔굽관절', romanized: 'Palkoop Gwanjeol', english: 'Elbow Joint Fulcrum', category: 'Anatomy' },
      { korean: '무릎꺾기', romanized: 'Mureup-kkeokgi', english: 'Downward Knee Break', category: 'Leg Lock' },
    ],
    coachingTips: [
      'Do not rely on arm muscle alone: step your lead foot forward to drop your entire body mass vertically onto the lever.',
      'Ensure the opponent’s palm is facing upward or sideways; an elbow can only be pressed against its natural hinge flexion.',
      'When defending against kicks, trap the ankle firmly under your armpit before executing the downward knee press.',
    ],
    steps: [
      'Trap the Arm: When the assailant extends a punch or grab, deflect slightly off-line and clamp their wrist with your lead hand.',
      'Establish the Fulcrum: Place your opposite arc hand (Khaljaebi) or lower radial forearm directly across the top of their elbow joint (just above the olecranon).',
      'Downward Weight Drop: Step forward into Ap-kubi (Front Stance), dropping your center of mass while pulling their wrist upward and driving your forearm downward like a class-1 lever.',
      'Joint Hyper-Extension / Submission: Maintain continuous downward pressure forcing the assailant to their knees or tapping out before ligament rupture occurs.',
    ],
    keyDetails: [
      'Class-1 Lever Principle: The elbow joint acts as the fulcrum, the wrist is the resistance arm, and your downward pressing forearm provides the effort force.',
      'Requires less than 15kg of downward force when the opponent’s arm is fully locked straight.',
    ],
    commonMistakes: [
      'Pressing the forearm instead of the exact elbow hinge joint, which allows them to bend their arm and counter with a punch.',
      'Failing to control their wrist, allowing them to twist their arm out of alignment.',
    ],
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=800&auto=format&fit=crop',
    translations: {
      km: {
        name: 'ការសង្កត់បត់សន្លាក់ (Nulleo-kkeokgi)',
        summary: 'បច្ចេកទេសបត់សន្លាក់ដោយការសង្កត់កែងដៃ ស្មា ឬជង្គង់របស់គូប្រកួតចុះក្រោម ដើម្បីទប់ស្កាត់ចលនាទាំងស្រុង។',
      },
      zh: {
        name: '下压折别关节术 (Nulleo-kkeokgi)',
        summary: '通过牢固抓控对手手腕或小腿，以弧手或小臂向下施加强烈杠杆压力折压其肘关节、肩关节或膝关节使其屈服。',
      },
      ko: {
        name: '눌러꺾기 (Pressing & Snapping)',
        summary: '상대의 팔을 잡고 아귀손이나 팔뚝으로 팔굽·어깨 관절을 누르거나, 다리를 잡아 무릎 관절을 아래로 눌러 꺾는 기술입니다.',
      },
    },
  },

  // ---------------------------------------------------------------------------
  // 2. BITEUREO-KKEOKGI (비틀어꺾기) — Twisting and Snapping Joint Lock
  // ---------------------------------------------------------------------------
  {
    id: 'hsin-02',
    slug: 'biteureo-kkeokgi-twisting-snapping',
    name: 'Twisting and Snapping (Biteureo-kkeokgi)',
    koreanName: '비틀어꺾기 (Twisting & Snapping)',
    romanized: 'Biteureo-kkeokgi',
    category: 'hosinsul',
    difficulty: 'Intermediate',
    beltLevel: 'Blue Belt+',
    badgeColor: '#0042EA',
    summary:
      'A snapping technique executed by twisting the assailant’s joints clockwise or counter-clockwise. Employed when the practitioner is grabbed by the wrist or collar, spiraling their arm into acute torque that dislocates joint alignment.',
    meaning: 'Using rotational torque to exploit rotational limitations of the human wrist and shoulder joints.',
    strikingSurface: 'Both Palms (Two-on-One Clamping Grip)',
    targetArea: 'Radiocarpal Joint (Wrist), Ulnar Collateral Ligament, Rotator Cuff',
    terminology: [
      { korean: '비틀어꺾기', romanized: 'Biteureo-kkeokgi', english: 'Rotational Twisting Joint Break', category: 'Lock' },
      { korean: '두손잡기', romanized: 'Duson-japgi', english: 'Two-on-One Grip Control', category: 'Grip' },
      { korean: '안비틀기', romanized: 'An-biteulgi', english: 'Inward Spiral Rotation', category: 'Torque' },
      { korean: '바깥비틀기', romanized: 'Bakkat-biteulgi', english: 'Outward Spiral Rotation (Waki-gatame/Z-lock)', category: 'Torque' },
    ],
    coachingTips: [
      'Rotate your entire torso rather than just your hands: the torque comes from hip rotation (Heori-dolgi).',
      'Keep the opponent’s twisted wrist close to your chest to maximize leverage and eliminate their escape space.',
      'If the assailant resists inward rotation, instantly reverse direction into outward rotation.',
    ],
    steps: [
      'Two-Handed Trap: When grabbed at the wrist or collar, immediately clap both hands over the assailant’s gripping hand, locking their knuckles against your chest.',
      'Thumb-to-Back Rotation: Step back $45^\circ$ with your rear foot to create an angular vacuum, twisting the opponent’s wrist so their palm faces outward and up.',
      'Elevate and Spiral: Drive the opponent’s elbow upward while twisting their hand downward in a continuous spiral motion.',
      'Takedown Lock: The combined wrist flexion and shoulder rotation forces the opponent’s torso to rotate violently toward the floor into a face-down pin.',
    ],
    keyDetails: [
      'Bone Spiral Dynamics: The radius and ulna bones cross each other during pronation/supination; twisting past $90^\circ$ of extension locks the entire arm from wrist to spine.',
      'Prevents the opponent from throwing a counter-punch with their opposite hand because their postural alignment is broken.',
    ],
    commonMistakes: [
      'Holding the attacker’s hand far away from your body, giving them room to bend their elbow and punch you.',
      'Twisting without stepping, which allows a stronger opponent to muscle out of the lock.',
    ],
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop',
    translations: {
      km: {
        name: 'ការបង្វិលបត់សន្លាក់ (Biteureo-kkeokgi)',
        summary: 'បច្ចេកទេសបង្វិលកដៃ និងដៃរបស់គូប្រកួតតាមទ្រនិចនាឡិកា ឬច្រាសទ្រនិចនាឡិកា ដើម្បីបត់សន្លាក់ទម្លាក់ទៅដី។',
      },
      zh: {
        name: '扭转折别关节术 (Biteureo-kkeokgi)',
        summary: '手腕或衣领被抓时，双手反扣对手手掌，配合身体腰髋转动，顺时针或逆时针旋转拧折对手手臂关节迫其跪地制服。',
      },
      ko: {
        name: '비틀어꺾기 (Twisting & Snapping)',
        summary: '손목이나 멱살을 잡혔을 때 상대방의 손과 팔을 시계 방향 또는 반시계 방향으로 비틀어 관절을 꺾어 제압하는 기술입니다.',
      },
    },
  },

  // ---------------------------------------------------------------------------
  // 3. DEUREO-NEOMGIGI (들어넘기기) — Throwing-down Technique by Lifting
  // ---------------------------------------------------------------------------
  {
    id: 'hsin-03',
    slug: 'deureo-neomgigi-lifting-throw',
    name: 'Throwing-Down by Lifting (Deureo-neomgigi)',
    koreanName: '들어넘기기 (Lifting Takedown)',
    romanized: 'Deureo-neomgigi',
    category: 'hosinsul',
    difficulty: 'Advanced',
    beltLevel: 'Red Belt+',
    badgeColor: '#EF2F38',
    summary:
      'A dynamic throwing technique utilizing explosive upward spring from the practitioner’s hips and waist while securing the opponent’s arm, torso, or leg, launching them airborne and slamming them to the mat.',
    meaning: 'Converting horizontal enemy assault momentum into vertical elevation and gravitational impact.',
    strikingSurface: 'Hip Fulcrum & Deep Pelvic Lever',
    targetArea: 'Opponent’s Center of Gravity (Dan-jeon / Pelvis)',
    terminology: [
      { korean: '들어넘기기', romanized: 'Deureo-neomgigi', english: 'Lifting and Slamming Takedown', category: 'Throw' },
      { korean: '허리튕기기', romanized: 'Heori-twinggigi', english: 'Spring-like Waist Snap', category: 'Biomechanics' },
      { korean: '다리들기', romanized: 'Dari-deulgi', english: 'Single/Double Leg Scoop Lift', category: 'Grip' },
      { korean: '낙법', romanized: 'Nakbop', english: 'Breakfall Defense (Safe landing)', category: 'Safety' },
    ],
    coachingTips: [
      'Your hips MUST be positioned lower than the opponent’s hips before you begin the upward lift.',
      'Use deep quadriceps drive and explosive waist extension rather than spinal lifting.',
      'Pull down hard on their sleeve/lapel while driving your hip upward to rotate them smoothly over your pelvis.',
    ],
    steps: [
      'Level Change: Duck under an incoming haymaker or rush, lowering your hips below the opponent’s belt line.',
      'Underhook and Control: Secure a deep underhook around their waist with one arm while gripping their triceps or thigh with the other.',
      'Hip Insertion: Step your hips squarely across the front of their thighs, maintaining chest-to-chest contact.',
      'Explosive Waist Spring: Extend your legs and spring your hips upward, lifting the opponent cleanly off their feet and guiding their descent to the mat.',
    ],
    keyDetails: [
      'Fulcrum Physics: Your hip serves as a stationary pivot over which the opponent’s center of gravity is tipped with minimal energy.',
      'Always practice with cooperative partners trained in safety breakfalls (Nakbop) to avoid concussions.',
    ],
    commonMistakes: [
      'Bending at the waist without bending the knees, placing dangerous shear stress on your lumbar spine.',
      'Leaving space between your hips and their body, allowing them to sprawl or slip behind you.',
    ],
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop',
    translations: {
      km: {
        name: 'ការលើកបោកទម្លាក់ (Deureo-neomgigi)',
        summary: 'បច្ចេកទេសលើកគូប្រកួតឡើងដោយកម្លាំងស្ទុះនៃចង្កេះ និងជើង ហើយបោកទម្លាក់ទៅដីយ៉ាងមានប្រសិទ្ធភាព។',
      },
      zh: {
        name: '托举掀摔摔技 (Deureo-neomgigi)',
        summary: '下潜进入对手中盘，借腰髋如弹簧般的向上爆发力将对手身体或腿部托起，破坏其重心并在空中旋转重摔倒地。',
      },
      ko: {
        name: '들어넘기기 (Lifting Takedown)',
        summary: '상대의 팔이나 다리를 잡고 허리의 반동과 스프링 탄력을 이용해 상대를 위로 번쩍 들어 올려 바닥에 메치는 기술입니다.',
      },
    },
  },

  // ---------------------------------------------------------------------------
  // 4. NULLEO-PPAEGI (눌러빼기) — Pressing and Pulling Wrist Release
  // ---------------------------------------------------------------------------
  {
    id: 'hsin-04',
    slug: 'nulleo-ppaegi-pressing-pulling',
    name: 'Pressing and Pulling Wrist Release (Nulleo-ppaegi)',
    koreanName: '눌러빼기 (Pressing & Pulling Escape)',
    romanized: 'Nulleo-ppaegi',
    category: 'hosinsul',
    difficulty: 'Beginner',
    beltLevel: 'Yellow Belt+',
    badgeColor: '#FFD505',
    summary:
      'A release technique where the grabbed wrist is rotated outward or inward until the attacker’s grip is compromised, followed immediately by using the outside edge of the same hand to press downward on the opponent’s hand while pulling free.',
    meaning: 'Releasing physical captivity by turning the assailant’s grip into a self-defeating lever.',
    strikingSurface: 'Knifehand Outer Blade (Sonnal) & Radial Ridge',
    targetArea: 'Attacker’s Thumb Joint, Radial Nerve, Thenar Eminence',
    terminology: [
      { korean: '눌러빼기', romanized: 'Nulleo-ppaegi', english: 'Pressing Downward and Pulling Free', category: 'Release' },
      { korean: '손날', romanized: 'Sonnal', english: 'Knifehand Outer Edge', category: 'Hand' },
      { korean: '손목탈출', romanized: 'Sonmok-talchul', english: 'Wrist Escape Mechanics', category: 'Defense' },
    ],
    coachingTips: [
      'Open your fingers wide into an active hand (Living Hand / Sal-issneun Son): this expands forearm circumference by up to 20%.',
      'Never pull in a linear tug-of-war; rotate first, press downward with the blade of your hand, then retract to the hip.',
      'Combine the pull with a step backward to add body weight into the release.',
    ],
    steps: [
      'Grip Recognition: The assailant grabs your wrist with same-side or cross-side grip.',
      'Active Hand & Rotation: Instantly flare your fingers wide and rotate your wrist clockwise toward the attacker’s thumb gap.',
      'Downward Press: As their fingers loosen, use the outer knife-edge (Sonnal) of your trapped hand to press firmly downward onto their wrist or thumb joint.',
      'Retraction: Pull your arm back sharply to your hip while stepping your lead foot back, breaking completely free into ready stance.',
    ],
    keyDetails: [
      'Anatomical Gap: A human hand has 4 fingers on one side but only 1 thumb on the other; all escapes target the single-thumb weak point.',
      'The downward pressing action strips the grip by peeling the opponent’s fingers backward against their tendons.',
    ],
    commonMistakes: [
      'Pulling straight backward against 4 fingers using only bicep power.',
      'Keeping a relaxed, limp hand, which makes it easier for the opponent to hold on.',
    ],
    image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=800&auto=format&fit=crop',
    translations: {
      km: {
        name: 'ការសង្កត់ដោះកដៃ (Nulleo-ppaegi)',
        summary: 'បច្ចេកទេសបង្វិលកដៃឆ្ពោះទៅមេដៃគូប្រកួត រួចប្រើគែមដៃសង្កត់ចុះក្រោម និងទាញដោះខ្លួនចេញយ៉ាងលឿន។',
      },
      zh: {
        name: '下压脱袍解手技 (Nulleo-ppaegi)',
        summary: '手腕被抓时瞬间五指张开撑紧肌腱，旋转手腕至对手虎口松开，顺势用手掌外侧下压对手虎口并向后抽身脱困。',
      },
      ko: {
        name: '눌러빼기 (Pressing & Pulling Escape)',
        summary: '잡힌 손목을 안이나 밖으로 돌려 상대의 악력을 헐겁게 만든 뒤, 손날로 상대 손등을 아래로 누르며 빼내는 기술입니다.',
      },
    },
  },

  // ---------------------------------------------------------------------------
  // 5. GEOREO-NEOMGIGI (걸어넘기기) — Tripping-up or Sweeping Takedown
  // ---------------------------------------------------------------------------
  {
    id: 'hsin-05',
    slug: 'georeo-neomgigi-sweeping-takedown',
    name: 'Tripping-Up & Sweeping Takedown (Georeo-neomgigi)',
    koreanName: '걸어넘기기 (Tripping & Sweeping)',
    romanized: 'Georeo-neomgigi',
    category: 'hosinsul',
    difficulty: 'Intermediate',
    beltLevel: 'Blue Belt+',
    badgeColor: '#0042EA',
    summary:
      'A takedown executed by tripping or sweeping the opponent’s leg. Combines pulling the opponent’s arm or collar (or pushing their chest/shoulder) while simultaneously sweeping their ankle or the crook of their knee with your foot or leg.',
    meaning: 'Removing the ground foundation of the assailant through synchronized counter-directional vectors.',
    strikingSurface: 'Inner Arch of Foot (Balkkal) & Posterior Calf/Achilles',
    targetArea: 'Popliteal Fossa (Crook of Knee), Lateral Malleolus (Ankle)',
    terminology: [
      { korean: '걸어넘기기', romanized: 'Georeo-neomgigi', english: 'Tripping and Sweeping Takedown', category: 'Sweep' },
      { korean: '오금걸기', romanized: 'Ogeum-geolgi', english: 'Hooking the Crook of the Knee', category: 'Leg Hook' },
      { korean: '발목후리기', romanized: 'Balmok-hurigi', english: 'Ankle Reaping Sweep', category: 'Sweep' },
    ],
    coachingTips: [
      'Upper-body and lower-body must move in OPPOSITE directions at the exact same fraction of a second (Couple Force).',
      'Sweep their ankle when their weight is transitioning onto it, not when they are solidly rooted.',
      'Drive your pushing hand diagonally through their shoulder, not directly backward.',
    ],
    steps: [
      'Grip & Off-Balancing (Kuzushi): Grip the assailant’s lapel or wrist; pull their arm forward while stepping off their centerline to make them stumble.',
      'Opposing Vector: Drive your free palm or forearm firmly against their opposite shoulder or upper chest.',
      'Leg Hook: Simultaneously reap your rear leg behind their lead ankle or deep into the crook of their knee (Ogeum).',
      'Synchronized Sweep: Push their upper body backward while kicking their leg forward from beneath them, dropping them flat onto their back.',
    ],
    keyDetails: [
      'Couple Force Principle: Two parallel forces acting in opposite directions create rotational torque that effortlessly downs an opponent of any weight.',
      'Keep your supporting knee slightly bent to maintain your own balance during the reap.',
    ],
    commonMistakes: [
      'Sweeping the leg without pushing the upper body, resulting in a stalemate where you get pulled down with them.',
      'Kicking with the toe instead of hooking with the calf or sweeping with the foot blade.',
    ],
    image: 'https://images.unsplash.com/photo-1555597673-b21d5c935865?q=80&w=800&auto=format&fit=crop',
    translations: {
      km: {
        name: 'ការកាច់ជើងបោកទម្លាក់ (Georeo-neomgigi)',
        summary: 'បច្ចេកទេសទាញដៃ ឬកអាវគូប្រកួតទៅមុខ រួចប្រើជើងកាច់កែងជើង ឬក្បាលជង្គង់របស់គេឱ្យដួលទៅក្រោយ។',
      },
      zh: {
        name: '勾挂腿扫绊摔技 (Georeo-neomgigi)',
        summary: '一手抓拉对手衣领或手臂破坏其重心，另一手推压其肩胸，同时下肢勾挂其脚踝或膝窝反向扫绊使其失衡倒地。',
      },
      ko: {
        name: '걸어넘기기 (Tripping & Sweeping)',
        summary: '상대의 팔이나 옷깃을 당기며 가슴을 밀고, 동시에 발이나 다리로 상대의 발목이나 오금을 걸어 넘어뜨리는 기술입니다.',
      },
    },
  },

  // ---------------------------------------------------------------------------
  // 6. JAPGI (잡기) — Grabbing & Seizing
  // ---------------------------------------------------------------------------
  {
    id: 'hsin-06',
    slug: 'japgi-grabbing-seizing-control',
    name: 'Grabbing, Seizing & Control (Japgi)',
    koreanName: '잡기 (Grabbing & Controlling)',
    romanized: 'Japgi',
    category: 'hosinsul',
    difficulty: 'Beginner',
    beltLevel: 'Yellow Belt+',
    badgeColor: '#FFD505',
    summary:
      'Auxiliary control techniques of securing the opponent’s limbs, collar, wrists, or body. Used to anchor, disrupt balance, restrict counter-attacks, and set up decisive joint locks, strikes, or takedowns.',
    meaning: 'Establishing firm physical dominance over the opponent’s mobility framework.',
    strikingSurface: 'Opposed Thumb & Four Fingers (Clamping Vice)',
    targetArea: 'Radial Wrist, Triceps Tendon, Trapezius Muscle, Collar/Lapel',
    terminology: [
      { korean: '잡기', romanized: 'Japgi', english: 'Grabbing & Seizing Technique', category: 'Control' },
      { korean: '깃잡기', romanized: 'Git-japgi', english: 'Collar / Lapel Grip', category: 'Grip' },
      { korean: '손목잡기', romanized: 'Sonmok-japgi', english: 'Wrist Control Grip', category: 'Grip' },
      { korean: '두손모아잡기', romanized: 'Duson-moa-japgi', english: 'Two-on-One Reinforcing Grip', category: 'Grip' },
    ],
    coachingTips: [
      'Never grab with just fingers: engage your pinky and ring fingers tightest to lock your forearm flexors.',
      'Control the opponent’s joints (wrist or elbow) rather than the middle of their forearm.',
      'A grab must never be static; immediately pull, push, or rotate the opponent upon contact.',
    ],
    steps: [
      'Interception: Parry incoming strike or reach across to intercept assailant’s reaching limb.',
      'Deep Bone Clamp: Anchor your thumb into their radial pulse point while wrapping 4 fingers around the ulnar bone.',
      'Tension Maintenance: Pull the captured limb tight to your ribcage to neutralize their punching power.',
      'Transition: Immediately execute secondary strike (Ilgyeok Pilsal) or joint lock without hesitating.',
    ],
    keyDetails: [
      'Tension Vector: Controlling an opponent’s elbow and wrist controls their entire upper torso centerline.',
      'Provides the necessary anchor point for all high-level joint locks and takedowns.',
    ],
    commonMistakes: [
      'Loose fingertip grip that allows the opponent to slip out with sweat or rapid jerking.',
      'Grabbing and standing still, allowing the opponent to strike with their free hand.',
    ],
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=800&auto=format&fit=crop',
    translations: {
      km: {
        name: 'ការចាប់ និងគ្រប់គ្រង (Japgi)',
        summary: 'បច្ចេកទេសចាប់កដៃ កអាវ ឬរាងកាយគូប្រកួត ដើម្បីទប់ស្កាត់ចលនា និងត្រៀមវាយបក ឬបត់សន្លាក់។',
      },
      zh: {
        name: '实战擒拿抓捕法 (Japgi)',
        summary: '迅速牢固抓控对手手腕、肘关节、衣领或肢体要穴，破坏其攻击机动性并为反关节或重击奠定支点。',
      },
      ko: {
        name: '잡기 (Grabbing & Controlling)',
        summary: '상대의 손목, 옷깃, 신체 부위를 손으로 낚아채어 상대의 움직임을 방해하거나 반격을 위해 고정하는 보조 기술입니다.',
      },
    },
  },

  // ---------------------------------------------------------------------------
  // 7. HWIDULLEO-PPAEGI (휘둘러빼기) — Swing and Pulling (Elbow-Axis Release)
  // ---------------------------------------------------------------------------
  {
    id: 'hsin-07',
    slug: 'hwidulleo-ppaegi-swing-pulling',
    name: 'Swing and Pulling / Elbow-Axis Escape (Hwidulleo-ppaegi)',
    koreanName: '휘둘러빼기 (Swing & Pulling)',
    romanized: 'Hwidulleo-ppaegi',
    category: 'hosinsul',
    difficulty: 'Intermediate',
    beltLevel: 'Green Belt+',
    badgeColor: '#09BB00',
    summary:
      'A release technique utilizing a wide swinging arc inward or outward, treating your elbow or shoulder as the central rotational axis. Snaps the opponent’s gripping hand backward and tears the wrist free with centrifugal velocity.',
    meaning: 'Using centrifugal momentum and rotational leverage to break grips that cannot be broken by linear pulling.',
    strikingSurface: 'Ulnar Forearm Edge & Elbow Pivot',
    targetArea: 'Attacker’s Thumb/Index Web, Extensor Carpi Tendons',
    terminology: [
      { korean: '휘둘러빼기', romanized: 'Hwidulleo-ppaegi', english: 'Wide Arc Swing Release', category: 'Release' },
      { korean: '회전축', romanized: 'Hoejeon-chuk', english: 'Rotational Axis (Elbow/Shoulder)', category: 'Physics' },
      { korean: '원심력', romanized: 'Wonsim-ryeok', english: 'Centrifugal Kinetic Force', category: 'Physics' },
    ],
    coachingTips: [
      'Imagine whipping your arm: the elbow stays relatively fixed while the hand traces a wide circle.',
      'Drop your weight on the downward phase of the swing to double the breaking force.',
      'Follow through the swing directly into a backfist or elbow strike.',
    ],
    steps: [
      'Grip Assessment: Assailant secures a tight, two-handed or heavy grip on your forearm or collar.',
      'Axis Establishment: Anchor your elbow into a fixed pivot position in front of your chest.',
      'Wide Circular Swing: Swing your trapped hand in a wide circular loop across the top of the attacker’s forearms.',
      'Impact Snap: As your arm reaches the apex of the circle, whip it sharply toward the thumb gap and retract to your hip.',
    ],
    keyDetails: [
      'Centrifugal Force Formula: Velocity increases with the radius of the circle; a wide arc creates immense torque at the point of release.',
      'Overcomes severe disparities in grip strength between smaller defenders and larger attackers.',
    ],
    commonMistakes: [
      'Swinging with a stiff, locked elbow, which reduces speed and tires the shoulder.',
      'Stopping the swing halfway before the momentum tears through the thumb gap.',
    ],
    image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=800&auto=format&fit=crop',
    translations: {
      km: {
        name: 'ការគ្រវីដៃដោះខ្លួន (Hwidulleo-ppaegi)',
        summary: 'បច្ចេកទេសគ្រវីដៃជារង្វង់ធំដោយយកកែងដៃ ឬស្មាជាអ័ក្ស ដើម្បីបំបែកការចាប់របស់គូប្រកួតដោយកម្លាំងរង្វង់។',
      },
      zh: {
        name: '回环大摆臂解脱法 (Hwidulleo-ppaegi)',
        summary: '以肘或肩为旋转支轴，将手臂沿大圆周轨迹向内或向外强力摆甩，以离心惯性瞬间震开暴徒虎口并抽身脱困。',
      },
      ko: {
        name: '휘둘러빼기 (Swing & Pulling)',
        summary: '팔이나 멱살을 잡혔을 때 팔굽이나 어깨를 회전축으로 삼아 팔을 크게 휘둘러 상대의 손목을 꺾으며 뜯어내는 기술입니다.',
      },
    },
  },

  // ---------------------------------------------------------------------------
  // 8. TEUREO-PPAEGI (틀어빼기) — Turning and Pulling (Thumb-Gap Release)
  // ---------------------------------------------------------------------------
  {
    id: 'hsin-08',
    slug: 'teureo-ppaegi-turning-pulling',
    name: 'Turning and Pulling / Thumb-Gap Release (Teureo-ppaegi)',
    koreanName: '틀어빼기 (Turning & Pulling)',
    romanized: 'Teureo-ppaegi',
    category: 'hosinsul',
    difficulty: 'Beginner',
    beltLevel: 'Yellow Belt+',
    badgeColor: '#FFD505',
    summary:
      'An instantaneous turning and pulling escape. When the assailant grabs the wrist, the defender flares their hand open, sharply rotates their inner wrist directly toward the seam where the opponent’s thumb and four fingers meet, and pulls free in a flash.',
    meaning: 'Exploiting the single anatomically weak opening of any human grip.',
    strikingSurface: 'Inner Radial Bone & Tendon Flexor Edge',
    targetArea: 'Attacker’s Thumb-Finger Junction (Opponens Pollicis Weakness)',
    terminology: [
      { korean: '틀어빼기', romanized: 'Teureo-ppaegi', english: 'Instantaneous Rotational Tear Escape', category: 'Release' },
      { korean: '엄지틈', romanized: 'Eomji-teum', english: 'Thumb Gap (Anatomical exit vector)', category: 'Anatomy' },
      { korean: '순간탈출', romanized: 'Sungan-talchul', english: 'Split-Second Reflex Release', category: 'Speed' },
    ],
    coachingTips: [
      'The rotation and the pull MUST occur at the exact same millisecond: twist-and-rip!',
      'Your elbow must pull backward toward your own latissimus dorsi (back muscle), engaging your back instead of just your forearm.',
      'Immediately raise both hands into a defensive guard after escaping.',
    ],
    steps: [
      'Flare Fingers: Wide finger expansion immediately tightens tendons across the wrist joint.',
      'Sharp Inward Twist: Rotate your wrist $90^\circ$ toward your own centerline, directing the narrow edge of your wrist toward their thumb tip.',
      'Backward Core Rip: Drive your elbow straight back to your ribs while stepping backward with your same-side foot.',
      'Guard Recovery: Step back into protective fighting stance, creating a 2-meter safety perimeter.',
    ],
    keyDetails: [
      'The human thumb cannot hold against even 10kg of rotational shear force when pulled away from the palm.',
      'The fastest and most universally applicable wrist escape in martial arts.',
    ],
    commonMistakes: [
      'Trying to pull before twisting: the wrist remains locked against the 4 fingers and cannot escape.',
      'Pulling upward toward your own face instead of down and back to your hip.',
    ],
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=800&auto=format&fit=crop',
    translations: {
      km: {
        name: 'ការបង្វិលកន្ត្រាក់ដោះកដៃ (Teureo-ppaegi)',
        summary: 'បច្ចេកទេសពង្រីកម្រាមដៃ បង្វិលកដៃឆ្ពោះទៅចន្លោះមេដៃ និងកន្ត្រាក់ចេញយ៉ាងរហ័សក្នុងមួយប៉ប្រិចភ្នែក។',
      },
      zh: {
        name: '反转切口闪电脱手技 (Teureo-ppaegi)',
        summary: '手腕被抓瞬间张掌变刀，手腕立刃对准对手大拇指与食指接缝处的缺口，顺势向后腰侧疾速抽拉完成脱身。',
      },
      ko: {
        name: '틀어빼기 (Turning & Pulling)',
        summary: '상대가 손목을 잡았을 때 손을 활짝 펴서 안쪽 손목을 상대의 엄지와 네 손가락이 맞닿은 틈으로 순간적으로 비틀어 빼는 기술입니다.',
      },
    },
  },

  // ---------------------------------------------------------------------------
  // 9. COLLAR & LAPEL COUNTER-TAKEDOWNS (옷깃/멱살 잡기 호신술)
  // ---------------------------------------------------------------------------
  {
    id: 'hsin-09',
    slug: 'collar-lapel-grab-counter-takedowns',
    name: 'Collar & Lapel Grab Counter-Takedowns (Otkit-Jabgi)',
    koreanName: '옷깃 및 멱살 잡혔을 때 호신술',
    romanized: 'Otkit & Myeoksal Jabgi',
    category: 'hosinsul',
    difficulty: 'Intermediate',
    beltLevel: 'Green Belt+',
    badgeColor: '#09BB00',
    summary:
      'Defense against aggressive single or two-handed chest and collar grabs. Traps the assailant’s hand firmly against your sternum while executing angular shoulder/elbow hyperextension leverage to drop them to the ground.',
    meaning: 'Converting an aggressive frontal grip into an immediate structural collapse.',
    strikingSurface: 'Both Palms & Heavy Forearm Lever',
    targetArea: 'Elbow Joint, Triceps Tendon, Sternum Pin',
    terminology: [
      { korean: '옷깃잡기', romanized: 'Otkit-jabgi', english: 'Collar / Lapel Grab Counter', category: 'Scenario' },
      { korean: '손덫', romanized: 'Son-deot', english: 'Hand Trap (Pinning hand to chest)', category: 'Control' },
      { korean: '팔굽누르기', romanized: 'Palkoop-nureugi', english: 'Downward Elbow Compression', category: 'Lock' },
    ],
    coachingTips: [
      'Pin their hand like glue: if their hand slips off your chest, you lose the fulcrum and they will punch you.',
      'Step $45^\circ$ behind their lead leg to prevent them from kicking your groin.',
      'Drop your entire upper body weight over their trapped elbow.',
    ],
    steps: [
      'Trap the Hand: Clamp both palms down on the attacker’s gripping hand, cementing their fingers against your sternum.',
      'Angle Step: Step your rear foot $45^\circ$ behind the attacker’s lead leg while raising your opposite elbow over their straight arm.',
      'Forearm Lever: Drive your forearm down across the attacker’s elbow joint like an industrial lever while twisting your hips.',
      'Takedown & Escape: Downward torque forces them face-down to the mat; maintain wrist control and disengage safely.',
    ],
    keyDetails: [
      'Pinning their hand instantly prevents them from cocking their other fist for a haymaker.',
      'Uses torso rotation rather than arm power to break their posture.',
    ],
    commonMistakes: [
      'Pushing their hands directly away, which allows them to deliver a close-range punch with their other fist.',
    ],
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop',
    translations: {
      km: {
        name: 'ការការពារពេលត្រូវគេចាប់កអាវ (Otkit-Jabgi)',
        summary: 'បច្ចេកទេសទប់ដៃគូប្រកួតជាប់នឹងទ្រូង រួចសង្កត់កែងដៃទម្លាក់ទៅដីភ្លាមៗ។',
      },
      zh: {
        name: '抓胸襟衣领反制摔倒术 (Otkit-Jabgi)',
        summary: '双手锁死对手抓衣领手掌使其无法出拳，侧身跨步上肘下压其肘关节杠杆，迫使其剧痛倒地制服。',
      },
      ko: {
        name: '옷깃 및 멱살 잡혔을 때 호신술',
        summary: '가슴깃을 잡힌 즉시 상대 손을 가슴에 강하게 밀착 고정시킨 후 회전하며 팔굽을 꺾어 메치는 기술입니다.',
      },
    },
  },

  // ---------------------------------------------------------------------------
  // 10. REAR CHOKE & BEAR-HUG ESCAPES (뒤에서 목 조르기 & 끌어안기 탈출)
  // ---------------------------------------------------------------------------
  {
    id: 'hsin-10',
    slug: 'rear-choke-bearhug-counters',
    name: 'Rear Choke & Bear-Hug Escapes (Mok-Joligi)',
    koreanName: '뒤에서 목 조르기 & 끌어안기 탈출술',
    romanized: 'Dwiseo Mok-Joligi & Kkeureo-angi',
    category: 'hosinsul',
    difficulty: 'Advanced',
    beltLevel: 'Blue Belt+',
    badgeColor: '#0042EA',
    summary:
      'High-urgency survival defenses against rear forearm strangleholds and over/under bear hugs. Employs immediate airway preservation, low center-of-mass drop, disruptive groin/foot strikes, and shoulder hip throws.',
    meaning: 'Immediate airway recovery followed by devastating close-range biomechanical disruption.',
    strikingSurface: 'Posterior Elbow, Heel Stomp, Backward Headbutt',
    targetArea: 'Groin, Inguinal Triangle, Trachea, Solar Plexus',
    terminology: [
      { korean: '목조르기탈출', romanized: 'Mok-joligi Talchul', english: 'Chokehold Escape', category: 'Survival' },
      { korean: '기도확보', romanized: 'Gido-hwakbo', english: 'Airway Preservation (Chin Tuck)', category: 'Safety' },
      { korean: '주춤서기낮추기', romanized: 'Juchum-seogi Natchugi', english: 'Deep Stance Base Drop', category: 'Stance' },
    ],
    coachingTips: [
      'You have less than 4 seconds before carotid pressure causes loss of consciousness: tuck your chin FIRST!',
      'Do not try to peel their arms off: hook your fingers like claws over their forearm and pull downward.',
      'Stomp their foot arch with your heel while driving an elbow back into their ribs.',
    ],
    steps: [
      'Chin Tuck: Instantly bury your chin deep into the crook of their elbow to shield your trachea and carotid arteries.',
      'Two-Handed Hook: Grip their choking forearm with both hands and pull downward with your full body weight.',
      'Drop Base: Drop into a deep horse-riding stance (Juchum-seogi) to drastically lower your center of mass.',
      'Disrupt & Turn: Drive a backward elbow into their solar plexus or stomp their instep, turn inside their arm, and execute a hip throw.',
    ],
    keyDetails: [
      'Dropping into Juchum-seogi increases your vertical inertia, making you nearly impossible to lift or drag backward.',
      'Disruptive strikes break their squeeze long enough to turn and face the attacker.',
    ],
    commonMistakes: [
      'Standing upright and panicking, which allows the rear naked choke to sink fully.',
    ],
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop',
    translations: {
      km: {
        name: 'ការដោះខ្លួនពីការច្របាច់ក ឬឱបពីក្រោយ (Mok-Joligi)',
        summary: 'បច្ចេកទេសសង្គ្រោះបន្ទាន់ពេលត្រូវគេច្របាច់កពីក្រោយ ដោយការទាញចង្កាការពារបំពង់ក ទម្លាក់ជំហរ និងវាយបក។',
      },
      zh: {
        name: '后方锁喉与强力环抱解脱术 (Mok-Joligi)',
        summary: '遇后方锁喉即刻内扣下巴保住气道，双手下拉敌臂，落深马步沉重心，反向肘击心窝并转身借势摔倒敌手。',
      },
      ko: {
        name: '뒤에서 목 조르기 & 끌어안기 탈출술',
        summary: '목이 졸리는 즉시 턱을 당겨 기도를 확보하고, 주춤서기로 중심을 낮춘 뒤 명치 팔굽 치기로 반격하는 기술입니다.',
      },
    },
  },

  // ---------------------------------------------------------------------------
  // 11. BLUNT & KNIFE WEAPON DISARMS (무기 호신술 / 단검 및 둔기 방어)
  // ---------------------------------------------------------------------------
  {
    id: 'hsin-11',
    slug: 'weapon-disarms-blunt-knife-defense',
    name: 'Blunt & Edged Weapon Disarms (Mugi-Hosinsul)',
    koreanName: '무기 호신술 (단검 및 둔기 방어 & 무장해제)',
    romanized: 'Mugi Hosinsul (Dangeom & Dungi Bang-eo)',
    category: 'hosinsul',
    difficulty: 'Elite',
    beltLevel: 'Red Belt / Black Belt',
    badgeColor: '#EF2F38',
    summary:
      'Advanced tactical protocols for redirecting knife slashes/thrusts and blunt club strikes. Employs 45-degree off-line evasion, two-on-one wrist clamping, extreme wrist flexion disarms, and tactical disengagement.',
    meaning: 'The ultimate discipline of controlling lethal threats with minimal risk and maximum distance awareness.',
    strikingSurface: 'Two-on-One Clamping Vice & Push Kick',
    targetArea: 'Radial/Ulnar Wrist Joint, Eyes, Triceps Tendon',
    terminology: [
      { korean: '무기호신술', romanized: 'Mugi-hosinsul', english: 'Weapon Defense Self-Defense', category: 'Weapons' },
      { korean: '사선이탈', romanized: 'Saseon-ital', english: '45-Degree Angular Evasion', category: 'Footwork' },
      { korean: '양손제압', romanized: 'Yangson-jeap', english: 'Two-on-One Wrist Immobilization', category: 'Control' },
      { korean: '무장해제', romanized: 'Mujang-haeje', english: 'Weapon Strip Disarm', category: 'Disarm' },
    ],
    coachingTips: [
      'The #1 rule of knife defense: Run if you can. Compliance or evacuation is always better than engaging a blade.',
      'Never try to block a knife with bare forearms: step off the linear attack vector at 45 degrees.',
      'Once you clamp their weapon wrist, do not let go under any circumstances until the weapon hits the floor.',
    ],
    steps: [
      'Angle Evasion: Step $45^\circ$ outside the weapon’s linear thrust vector to remove your vital organs from the blade path.',
      'Two-on-One Clamp: Intercept and clamp both hands onto their weapon-bearing wrist, pinning their arm with your full body weight.',
      'Hyper-Flexion Strip: Drive their wrist forward into extreme flexion ($90^\circ$ bent inward), forcing their gripping tendons to release the weapon.',
      'Disengage & Push Kick: Kick their lead knee or hip to create a 3-meter safety barrier and evacuate immediately.',
    ],
    keyDetails: [
      'Wrist Flexion Mechanics: Severe wrist flexion causes involuntary opening of the fingers due to tenodesis effect, stripping the weapon automatically.',
      'Two-on-one control eliminates the danger of the attacker switching the knife to their free hand.',
    ],
    commonMistakes: [
      'Reaching for the knife blade instead of controlling the wrist joint.',
      'Staying stationary on the center line where a thrust will penetrate your torso.',
    ],
    image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=800&auto=format&fit=crop',
    translations: {
      km: {
        name: 'ការទប់ទល់ និងដកហូតអាវុធ (Mugi-Hosinsul)',
        summary: 'បច្ចេកទេសគេចចេញពីគន្លងកាំបិត ចាប់កដៃដោយដៃទាំងពីរ (2-on-1) និងបត់កដៃដើម្បីដកហូតអាវុធប្រកបដោយសុវត្ថិភាព។',
      },
      zh: {
        name: '持械防卫与空手夺白刃 (Mugi-Hosinsul)',
        summary: '斜向 45 度闪避直线突刺杀伤线，双手建立 2对1 铁钳控制锁死持械手腕，极度内折手腕令其落刃并蹬踢拉开安全距离。',
      },
      ko: {
        name: '무기 호신술 (단검 및 둔기 방어 & 무장해제)',
        summary: '공격 선상에서 45도 외측으로 사선 이탈하며 2-on-1 양손 그립으로 무기 쥔 손목을 제압하고 관절 역회전으로 무기를 탈취합니다.',
      },
    },
  },

  // ---------------------------------------------------------------------------
  // 12. VITAL PRESSURE POINT STRIKES & ILGYEOK PILSAL (급소 치기 & 일격필살)
  // ---------------------------------------------------------------------------
  {
    id: 'hsin-12',
    slug: 'vital-point-strikes-ilgyeok-pilsal',
    name: 'Vital Pressure Point Strikes & Decisive Finish (Kupso-chigi)',
    koreanName: '급소 치기 및 일격필살 (Vital Point Strikes)',
    romanized: 'Kupso-chigi & Ilgyeok Pilsal',
    category: 'hosinsul',
    difficulty: 'Elite',
    beltLevel: 'Black Belt Candidate',
    badgeColor: '#A855F7',
    summary:
      'The ultimate application of the "Ilgyeok Pilsal" doctrine. Focuses on delivering surgical, explosive kinetic strikes to high-vulnerability anatomical pressure points (Philtrum, Carotid Sinus, Solar Plexus, Groin) to terminate life-threatening violence instantaneously.',
    meaning: 'Ending violent hostility with single-blow precision when life is in imminent mortal danger.',
    strikingSurface: 'Heel of Palm (Batangson), Knifehand (Sonnal), Forefist, Ball of Foot (Ap-chook)',
    targetArea: 'Philtrum (Injung), Carotid Sinus, Solar Plexus (Myongchi), Groin (Nangsim)',
    terminology: [
      { korean: '급소치기', romanized: 'Kupso-chigi', english: 'Vital Pressure Point Trauma', category: 'Strikes' },
      { korean: '일격필살', romanized: 'Ilgyeok Pilsal', english: 'One Decisive Blow / Decisive Neutralization', category: 'Philosophy' },
      { korean: '바탕손치기', romanized: 'Batangson-chigi', english: 'Palm Heel Strike', category: 'Strike' },
      { korean: '손날목치기', romanized: 'Sonnal Mok-chigi', english: 'Knifehand Carotid Strike', category: 'Strike' },
    ],
    coachingTips: [
      'Use open-palm strikes (Batangson) rather than closed fists to avoid fracturing your own metacarpal bones against the attacker’s skull.',
      'Aim through the target: deliver kinetic energy 10cm behind the surface of the anatomical point.',
      'Immediately scan for secondary attackers after delivering the decisive counter-strike.',
    ],
    steps: [
      'Parry or Slip: Slip inside or outside the attacker’s incoming assault vector.',
      'Target Acquisition: Lock visual focus onto the most accessible unprotected vital point (e.g. Injung or Myongchi).',
      'Unified Kinetic Strike: Drive your rear heel, rotate your hips, and expel breath sharply while striking with a palm heel or knife-hand.',
      'Disengagement: The instant the assailant buckles, immediately create a 3-meter exit corridor and evacuate to safety.',
    ],
    keyDetails: [
      'Palm Heel Advantages: Provides massive concussive force without the risk of finger fractures or blood-borne pathogen transmission from facial cuts.',
      'Striking the carotid artery drops blood pressure and produces unconsciousness in 3–5 seconds.',
    ],
    commonMistakes: [
      'Throwing wild looping punches that graze rather than penetrating into the vital anatomical nerve cluster.',
    ],
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=800&auto=format&fit=crop',
    translations: {
      km: {
        name: 'ការវាយចំណុចខ្សោយ & មួយក្បាច់ផ្តាច់សត្រូវ (Kupso-chigi)',
        summary: 'ការអនុវត្តទ្រឹស្តី "Ilgyeok Pilsal" ដោយការវាយបាតដៃ ឬកាប់ដៃកាំបិតចំចំណុចខ្សោយសំខាន់ៗ ដើម្បីបញ្ឈប់គ្រោះថ្នាក់ភ្លាមៗ។',
      },
      zh: {
        name: '急所要穴重击与一击必杀 (Kupso-chigi)',
        summary: '彻底践行“一击必杀”法则，避开暴徒攻击后以掌根或手刀重击人中、颈动脉窦或心窝，瞬间剥夺其侵犯能力并果断脱离。',
      },
      ko: {
        name: '급소 치기 및 일격필살 (Vital Point Strikes)',
        summary: '생명이 위협받는 실전 상황에서 인중, 목동맥, 명치, 낭심 등 인체 핵심 급소를 바탕손이나 손날로 일격에 제압하는 기술입니다.',
      },
    },
  },
]
