import type { LibraryItem } from './types'

export const kickingAdvancedItems: LibraryItem[] = [
  // ===========================================================================
  // 1. JUMPING FRONT KICK -- TWIO AP CHAGI (뛰어 앞차기)
  // ===========================================================================
  {
    id: 'jumping-front-kick',
    slug: 'jumping-front-kick-twio-ap-chagi',
    name: 'Jumping Front Kick',
    koreanName: '뛰어 앞차기',
    romanized: 'Twio Ap Chagi',
    category: 'kicking-advanced',
    difficulty: 'Advanced',
    beltLevel: 'Blue – Red Belt & Above',
    badgeColor: '#EF2F38',
    kickTrajectory: 'airborne',
    airbornePhase: 'Vertical Takeoff -> Flight Apex Chamber -> Ap-Chook Snap -> Knee-Flexed Landing',
    targetCount: 1,
    strikingSurface: 'Ball of the foot (Ap-chook)',
    targetArea: 'Solar Plexus, Chest, Chin, Floating Ribs',
    summary:
      'The Jumping Front Kick is an airborne variation of the front kick, where the practitioner leaps off the ground to deliver a powerful, upward snapping kick using the ball of the foot. It demonstrates explosive leg power, agility, timing, and dynamic control, representing the Taekwondo principle of height, speed, and impact from full-body motion.',
    meaning:
      'Explosive takeoff from both legs or a single leg, accurate chamber and extension at peak jump height, body coordination between arms, legs, and core, landing control for balance and poise, and focus and timing to strike at the jump’s apex.',
    balanceAndPosture:
      'Maintain upright chest and engage core for shock absorption upon landing with knees slightly bent.',
    corePrinciples: [
      {
        title: 'Explosive Takeoff',
        desc: 'Explosive takeoff from both legs or a single leg to generate maximum vertical elevation.',
      },
      {
        title: 'Chamber and Extension at Apex',
        desc: 'Accurate chamber and extension executed cleanly at the peak of the jump trajectory.',
      },
      {
        title: 'Full-Body Coordination',
        desc: 'Synchronized body coordination between arms, kicking leg, non-kicking leg, and core.',
      },
      {
        title: 'Landing Control and Poise',
        desc: 'Controlled landing with knees flexed to absorb ground reaction forces without losing combat poise.',
      },
      {
        title: 'Apex Focus and Timing',
        desc: 'Focus and timing to release the whip snap precisely at the jump apex for maximum penetration.',
      },
    ],
    skillPrerequisites: {
      physical: [
        'Strong quadriceps, glutes, calves, and core muscles.',
        'Good lower-body explosive strength (plyometric ability).',
        'Excellent balance and posture control in flight.',
        'Adequate flexibility in hamstrings and hip flexors.',
      ],
      technical: [
        'Mastery of basic Front Kick (Ap Chagi).',
        'Proper jumping mechanics and takeoff technique.',
        'Familiarity with chambering in midair.',
        'Basic understanding of timing and landing recovery.',
      ],
      mental: [
        'Confidence in jumping and striking simultaneously.',
        'Focus on precision and target awareness.',
        'Calm control during flight phase to avoid panic or overextension.',
      ],
    },
    trainingProcess: [
      {
        stepNumber: 1,
        title: 'Warm-Up and Preparation',
        details: [
          'Dynamic stretches: hip circles, leg swings, and knee raises.',
          'Plyometric prep: squat jumps, tuck jumps, and bounding drills.',
          'Activation: core bracing (planks, hollow holds).',
        ],
      },
      {
        stepNumber: 2,
        title: 'Stationary Front Kick Review',
        details: [
          'Practice Front Kick (Ap Chagi) slowly for chamber and extension precision.',
          'Ensure knee lift to chest level, ball of foot contact, and re-chamber.',
        ],
      },
      {
        stepNumber: 3,
        title: 'Jump Preparation',
        details: [
          'Start in fighting stance or neutral position.',
          'Perform small jumps focusing on soft landing and balance.',
          'Gradually increase jump height to engage fast-twitch leg power.',
        ],
      },
      {
        stepNumber: 4,
        title: 'Combine Jump + Kick',
        details: [
          'From stance, bend knees slightly and swing arms back for momentum.',
          'Explosively jump upward using both legs.',
          'While airborne, chamber the kicking leg quickly toward the target.',
          'Snap the kick at the apex of the jump using the ball of the foot (Ap-chook).',
          'Re-chamber immediately and land softly on the supporting leg(s).',
        ],
      },
      {
        stepNumber: 5,
        title: 'Control and Recovery',
        details: [
          'Land with knees slightly bent to absorb impact.',
          'Maintain upright chest and return to fighting stance.',
          'Focus on clean posture and balance recovery.',
        ],
      },
    ],
    drillingMethods: {
      isolation: [
        'Max-height jumps focusing on controlled landings (Vertical Jump Training).',
        'Practice lifting knee to chest while jumping without kicking (Chamber Holds in Air).',
        'Jump and chamber without hitting wall to refine upward trajectory (Wall Kick Drill).',
      ],
      speedAndTiming: [
        'Have a partner hold a paddle at chest/head height; strike at jump peak (Target Pad Drill).',
        'On a clap or cue, execute jump + kick instantly (Reaction Drill).',
        'Kick progressively higher paddles with precision (Height Control Drill).',
      ],
      power: [
        'Box Jumps / Depth Jumps (develop takeoff power).',
        'Medicine Ball Throws (sync upper-body drive with jump).',
        'Resistance Band Kicks (to train leg acceleration in air).',
      ],
      freestyleTricking: [
        'Step-In Jumping Front Kick.',
        'Double Jumping Front Kick (perform two kicks midair for freestyle).',
        'Jumping Front Kick -> Jumping Side Kick (flow transition).',
      ],
      safety: [
        'Land on soft mats or shock-absorbing flooring during high-volume sessions.',
        'Ensure knees are never locked upon touchdown to protect meniscus and ACL.',
      ],
    },
    commonMistakesAndCorrections: [
      {
        mistake: 'Jumping forward instead of upward.',
        correction: 'Focus on vertical lift -- jump straight up, not forward. Use mirror or video for correction.',
      },
      {
        mistake: 'Kicking too early before reaching the peak.',
        correction: 'Wait until reaching the apex of the jump before snapping the leg.',
      },
      {
        mistake: 'Incomplete chamber.',
        correction: 'Strengthen hip flexors and practice slow chamber drills.',
      },
      {
        mistake: 'Hard landings.',
        correction: 'Land with knees slightly bent, and engage core for shock absorption.',
      },
      {
        mistake: 'Weak height or power.',
        correction: 'Add plyometric and strength conditioning for leg explosiveness.',
      },
    ],
    performanceAndApplication: {
      competition:
        'Used in freestyle poomsae to display explosive power and control. Commonly performed as part of a jumping sequence (e.g., Jumping Front -> Jumping Axe -> Tornado). In traditional poomsae, used to show energy, focus (kihap), and balance.',
      poomsae: 'Taegeuk forms high-jump demonstrations and Koryo airborne power expressions.',
      demonstration:
        'Often used for board breaking, striking with the ball of the foot while airborne. Can be done as a flying kick over obstacles for visual impact.',
      combinations: [
        'Jumping Front Kick -> Jumping Axe Kick',
        'Flying Side Kick -> Jumping Back Kick',
        'Double or Triple Front Kick combinations',
      ],
    },
    recoveryAndConditioning: {
      flexibility: [
        'Post-session static stretches: hamstrings, hip flexors, calves.',
        'PNF stretching (assisted leg raises) to improve kick height.',
      ],
      strengthening: [
        'Squat jumps, Bulgarian split squats, and resistance band kicks.',
        'Core stability drills (V-ups, flutter kicks, and oblique twists).',
      ],
      mobility: [
        'Balance board drills and single-leg landings.',
        'Soft-surface jump training to reduce joint stress.',
      ],
    },
    steps: [
      'Bend knees slightly and drive arms upward for explosive vertical takeoff.',
      'Tuck non-kicking knee and chamber kicking knee tightly toward chest in midair.',
      'Snap kicking leg outward at apex, driving the ball of foot (Ap-chook) through target.',
      'Instantly re-chamber kicking leg before downward descent.',
      'Touch down softly with flexed knees and recover immediate fighting guard.',
    ],
    keyDetails: [
      'The kick must reach full extension precisely at zero vertical velocity (the apex).',
      'Keep toes pulled backward sharply to strike purely with Ap-chook.',
      'Land with knees bent at least 20 degrees to dissipate impact shock.',
    ],
    commonMistakes: [
      'Kicking on the upward ascent rather than at the apex of the jump.',
      'Failing to retract the leg before landing, causing loss of balance.',
      'Landing stiff-legged with knees locked.',
    ],
    image: 'https://images.unsplash.com/photo-1555597673-b21d5c935865?q=80&w=1000&auto=format&fit=crop',
  },

  // ===========================================================================
  // 2. JUMPING ROUNDHOUSE KICK -- TWIO DOLLYO CHAGI / EEDAN DOLLYO CHAGI (뛰어 돌려차기)
  // ===========================================================================
  {
    id: 'jumping-roundhouse-kick',
    slug: 'jumping-roundhouse-kick-twio-dollyo-chagi',
    name: 'Jumping Roundhouse Kick',
    koreanName: '뛰어 돌려차기 (이단 돌려차기)',
    romanized: 'Twio Dollyo Chagi (Eedan Dollyo Chagi)',
    category: 'kicking-advanced',
    difficulty: 'Advanced',
    beltLevel: 'Red Belt & Above',
    badgeColor: '#EF2F38',
    kickTrajectory: 'rotational',
    airbornePhase: 'Stance Preload -> Vertical Jump & Chamber -> Apex Roundhouse Strike -> Rapid Retraction -> Soft Balanced Landing',
    targetCount: 1,
    strikingSurface: 'Instep (Baldeung) or Ball of Foot (Ap-chook)',
    targetArea: 'Temple, Jaw, Headgear Trigram Axis, Clavicle',
    summary:
      "The Jumping Roundhouse Kick (Twio Dollyo Chagi) combines the traditional roundhouse kick's speed and accuracy with explosive jumping power. It's a visually dynamic kick used to demonstrate athleticism, coordination, and impact power -- especially in freestyle poomsae and demonstration performances.",
    meaning:
      'Generating upward power through the jump to increase height (Explosiveness); coordinating the jump and kick chamber for maximum reach and impact (Timing); maintaining posture in midair to deliver an accurate strike (Balance and Control); executing proper chamber, pivot, and retraction while airborne (Precision).',
    balanceAndPosture:
      'Maintain upright posture throughout flight for clean kick trajectory; counterbalance with core engagement and tight guard; land softly on both feet with bent knees.',
    corePrinciples: [
      {
        title: 'Explosiveness',
        desc: 'Generating upward power through the jump to increase height.',
      },
      {
        title: 'Timing',
        desc: 'Coordinating the jump and kick chamber for maximum reach and impact.',
      },
      {
        title: 'Balance and Control',
        desc: 'Maintaining posture in midair to deliver an accurate strike.',
      },
      {
        title: 'Precision',
        desc: 'Executing proper chamber, pivot, and retraction while airborne.',
      },
    ],
    skillPrerequisites: {
      physical: [
        'Strong quadriceps, hamstrings, and gluteal muscles for vertical lift.',
        'Good core stability to maintain balance midair.',
        'Hip flexibility for proper chamber and full extension.',
        'Basic jumping power from plyometric or explosive leg training.',
      ],
      technical: [
        'Solid basic roundhouse kick (Dollyo Chagi) technique.',
        'Ability to perform jumping front kick or jumping side kick with control.',
        'Understanding of proper pivot and striking foot alignment.',
      ],
      mental: [
        'Confidence in airborne control.',
        'Ability to commit to full motion without hesitation.',
        'Focus on timing, not just height -- control is more important than raw jump power.',
      ],
    },
    trainingProcess: [
      {
        stepNumber: 1,
        title: 'Warm-Up and Mobility',
        details: [
          'Dynamic stretches for hips, hamstrings, and calves.',
          'Mobility drills: Hip circles, knee raises, and leg swings.',
          'Activation: Light plyometrics (e.g., jump squats, tuck jumps).',
        ],
      },
      {
        stepNumber: 2,
        title: 'Ground Mechanics Review',
        details: [
          'Practice basic roundhouse kicks focusing on chamber -> extension -> retraction.',
          'Ensure pivot and striking surface (instep or ball of foot) are correct.',
        ],
      },
      {
        stepNumber: 3,
        title: 'Jumping Preparation',
        details: [
          'Work on vertical jump drills: Squat jumps, box jumps, and single-leg hops.',
          'Focus on explosive takeoff and soft landings for body control.',
        ],
      },
      {
        stepNumber: 4,
        title: 'Combine Jump and Kick Motion',
        details: [
          'Start from a fighting stance.',
          'Slightly dip your body to preload the legs.',
          'Jump upward while simultaneously chambering your kicking leg.',
          'Execute the roundhouse kick at the peak of the jump.',
          'Retract quickly and land softly in a balanced stance.',
        ],
      },
      {
        stepNumber: 5,
        title: 'Controlled Repetition',
        details: [
          'Begin with low jump height, prioritizing clean form and balance.',
          'Gradually increase height and speed as strength improves.',
          'Aim for consistent rhythm -- each rep should look smooth and powerful.',
        ],
      },
    ],
    drillingMethods: {
      isolation: [
        'Air Kick Drill: Practice the roundhouse motion without jumping to refine alignment.',
        'Jumping without kicking: Focus on jump height and body posture in air.',
      ],
      speedAndTiming: [
        'Target Paddle Drill: Use a target paddle held at various heights to develop spatial awareness.',
        'Knee Lift to Kick Timing: Practice knee lift to kick timing using slow-motion reps, then increase speed.',
      ],
      power: [
        'Box Jump Takeoff Explosiveness: Explosive plyometric box jumps targeting maximum apex suspension.',
        'Heavy Bag Airborne Slam: Drive full instep/ball of foot through heavy target at jump peak.',
      ],
      freestyleTricking: [
        'Freestyle Poomsae Highlight: Connect into jumping spin hook or tornado roundhouse sequences.',
        'Tricking Foundation: Builds foundation for 540 kick and tornado double variations.',
      ],
      safety: [
        'Use mats during early training phases.',
        'Have a coach monitor landing mechanics and spine alignment.',
        'Never land with knees locked; absorb impact with flexed knees and active ankles.',
      ],
    },
    commonMistakesAndCorrections: [
      {
        mistake: 'Kicking too early during the jump.',
        correction: 'Time your kick at the peak of your jump, not on takeoff.',
      },
      {
        mistake: 'Losing balance upon landing.',
        correction: 'Strengthen core and focus on landing on both feet softly.',
      },
      {
        mistake: 'Insufficient height.',
        correction: 'Work on leg plyometrics and explosive jump drills.',
      },
      {
        mistake: 'Poor chamber or pivot.',
        correction: 'Revisit basic roundhouse mechanics on ground before jumping.',
      },
      {
        mistake: 'Leaning back excessively.',
        correction: 'Maintain upright posture for better kick trajectory.',
      },
    ],
    performanceAndApplication: {
      competition:
        'Use in freestyle poomsae to demonstrate power, explosiveness, and control. Effective as a highlight technique when linked in jump combos (e.g., Jump Round -> Jump Back Kick).',
      poomsae: 'Freestyle Poomsae mandatory airborne sequence; high aesthetic evaluation value.',
      demonstration:
        'High board breaking, target paddle slice, and highlight sequence in demonstration routines.',
      combinations: [
        'Jumping Roundhouse -> Jumping Back Kick',
        'Double Roundhouse in the Air (Front Leg then Back Leg)',
        'Jumping Roundhouse -> Landing into Spin Hook',
      ],
    },
    recoveryAndConditioning: {
      flexibility: [
        'Post-training stretches for hamstrings, hip flexors, and quads.',
        'Adductor frog stretch and seated straddle PNF stretch.',
      ],
      strengthening: [
        'Core and Leg Strength: Exercises like hanging leg raises, Bulgarian squats, and planks.',
        'Eccentric quadriceps loading and single-leg calf raises.',
      ],
      mobility: [
        'Landing Control: Practice eccentric control through soft landings and balance drills.',
        'Cooldown: Deep breathing and light static stretching to reduce muscle stiffness.',
      ],
    },
    steps: [
      'Start from a fighting stance and slightly dip body to preload the legs.',
      'Jump upward while simultaneously chambering your kicking leg.',
      'Execute the roundhouse kick at the peak of the jump.',
      'Retract quickly before descending.',
      'Land softly in a balanced stance with bent knees.',
    ],
    keyDetails: [
      'Time your kick at the peak of your jump, not on takeoff.',
      'Maintain upright posture for better kick trajectory.',
      'Retract quickly and land on both feet softly.',
    ],
    commonMistakes: [
      'Kicking too early during the jump before reaching peak height.',
      'Losing balance upon landing or landing stiff-legged.',
      'Insufficient height from lacking vertical plyometric drive.',
      'Poor chamber or pivot before releasing the strike.',
      'Leaning back excessively during mid-air flight.',
    ],
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1000&auto=format&fit=crop',
  },

  // ===========================================================================
  // 3. JUMPING SIDE KICK -- TWIO YEOP CHAGI (뛰어 옆차기)
  // ===========================================================================
  {
    id: 'jumping-side-kick',
    slug: 'jumping-side-kick-twio-yeop-chagi',
    name: 'Jumping Side Kick',
    koreanName: '뛰어 옆차기',
    romanized: 'Twio Yeop Chagi',
    category: 'kicking-advanced',
    difficulty: 'Advanced',
    beltLevel: 'Blue – Red Belt & Above',
    badgeColor: '#0042EA',
    kickTrajectory: 'thrust',
    airbornePhase: 'Run-up Step / Jump Takeoff -> Tight Horizontal Tuck -> Piston Heel Thrust -> Linear Landing',
    targetCount: 1,
    strikingSurface: 'Knife Foot Blade (Balnal) / Direct Heel (Dwikkumchi)',
    targetArea: 'Sternum, Solar Plexus, Ribs, High Suspended Board',
    summary:
      'The definitive flying side kick of Taekwondo. The practitioner launches into the air—either from a stationary takeoff or a multi-step run-up—tucks the non-kicking leg tightly underneath the body, and fires a brutal linear piston thrust through the target with the knife-edge blade of the foot.',
    meaning:
      'Linear airborne devastation, aerodynamic horizontal glide, compact aerial chambering, unyielding bone-alignment at impact, and controlled landing absorption.',
    balanceAndPosture:
      'Align kicking heel, hip, and shoulder in an unyielding straight line mid-air; tuck non-kicking knee to chest; absorb landing softly on the supporting foot.',
    corePrinciples: [
      {
        title: 'Aerodynamic Horizontal Glide',
        desc: 'Convert forward momentum into elevated flight, soaring over distance rather than popping straight up.',
      },
      {
        title: 'Compact Aerial Chamber Tuck',
        desc: 'Tuck the non-kicking leg tightly against the chest to create an aerodynamic mass center.',
      },
      {
        title: 'Piston-Like Linear Thrust',
        desc: 'Drive the heel directly through the target along a laser-straight horizontal axis.',
      },
      {
        title: 'Bone-Aligned Impact Architecture',
        desc: 'Lock heel, hip, and shoulder into a unified skeletal beam to transmit maximum kinetic momentum.',
      },
      {
        title: 'Controlled Forward Landing',
        desc: 'Absorb landing forces on the supporting leg with flexed knee, immediately assuming fighting stance.',
      },
    ],
    skillPrerequisites: {
      physical: [
        'High gluteus medius and maximus thrust strength.',
        'Explosive forward/upward takeoff power in calves and quads.',
        'Strong core bracing to prevent mid-air torso sagging.',
        'Hip abductor flexibility for high horizontal side extension.',
      ],
      technical: [
        'Mastery of stationary Side Kick (Yop Chagi) foot blade (Balnal).',
        'Understanding hurdle takeoff and single-leg drive.',
        'Mid-air body tuck coordination.',
        'Shock-absorption landing technique.',
      ],
      mental: [
        'Fearless forward trajectory commitment over obstacles or distance.',
        'Absolute focus on penetrating target rather than merely touching it.',
        'Spatially aware aerial composure.',
      ],
    },
    trainingProcess: [
      {
        stepNumber: 1,
        title: 'Takeoff Mechanics & Hurdle Bounding',
        details: [
          'Warm up with hurdle bounding, single-leg broad jumps, and glute bridges.',
          'Practice 2-step approach run with upward hurdle knee drive.',
        ],
      },
      {
        stepNumber: 2,
        title: 'Mid-Air Tuck & Chamber Drill',
        details: [
          'Jump over a low hurdle or pad, tucking non-kicking leg tightly to chest.',
          'Hold side kick chamber mid-air without extending to master flight posture.',
        ],
      },
      {
        stepNumber: 3,
        title: 'Wall-Supported Thrust Mechanics',
        details: [
          'Hold wall and practice horizontal piston thrust with toes pulled down and heel leading.',
          'Verify that shoulder, hip, and heel form a single penetrating line.',
        ],
      },
      {
        stepNumber: 4,
        title: 'Full Airborne Flight & Thrust Strike',
        details: [
          'Execute approach run or stance leap; drive forward-upward.',
          'Tuck non-kicking knee to chest, violently thrust kicking heel through target.',
          'Retract leg slightly before touchdown.',
        ],
      },
      {
        stepNumber: 5,
        title: 'Landing Mechanics & Stance Recovery',
        details: [
          'Land first on supporting foot followed by kicking foot with knees flexed.',
          'Engage core to arrest forward momentum and establish solid guard.',
        ],
      },
    ],
    drillingMethods: {
      isolation: [
        'Hurdle Jump Tuck Drills: Leap over foam barriers practicing pure flight tuck.',
        'Static Side Kick Extension Holds: 10-second isometric holds at shoulder height.',
      ],
      speedAndTiming: [
        'Moving Pad Intercept: Partner retreats with chest shield; practitioner glides across floor to intercept.',
        'Multi-obstacle jumping side kick approach.',
      ],
      power: [
        'Heavy Shield Blast: Drive partner holding heavy shield back 3-5 meters.',
        'Multi-board breaking (2-4 pine boards) on elevated holder.',
      ],
      freestyleTricking: [
        'Flying Side Kick over 3-5 crouched team members (Classic Demonstration).',
        'Step-up flying side kick onto elevated platforms.',
      ],
      safety: [
        'Use crash mats when practicing distance leaps over obstacles.',
        'Never land with heel locked into floor; roll through forefoot to heel.',
      ],
    },
    commonMistakesAndCorrections: [
      {
        mistake: 'Leaving the non-kicking leg dangling down, creating drag and destroying balance.',
        correction: 'Tuck the non-kicking knee tightly against your ribs like an aerodynamic cannonball.',
      },
      {
        mistake: 'Kicking with a flat foot or toes instead of the knife-edge blade (Balnal).',
        correction: 'Pull toes downward and push the heel forward to expose the razor edge.',
      },
      {
        mistake: 'Over-rotating torso into a stomach-down position.',
        correction: 'Keep the side of your torso facing target; align shoulder, hip, and heel.',
      },
      {
        mistake: 'Dropping down before extending the kick.',
        correction: 'Thrust the kick at the peak of horizontal flight before descent begins.',
      },
      {
        mistake: 'Stiff-legged landing causing joint shock.',
        correction: 'Bend landing knee deeply to decelerate forward momentum progressively.',
      },
    ],
    performanceAndApplication: {
      competition:
        'Iconic distance-closing technique in traditional martial arts; prime demonstration technique in freestyle competitions.',
      poomsae: 'Expresses ultimate martial power, focus, and projectile momentum in advanced demonstrations.',
      demonstration:
        'The absolute centerpiece of Taekwondo demonstration teams: obstacle flights, high board breaking, and power penetration.',
      combinations: [
        'Feint Step -> Flying Side Kick',
        'Flying Side Kick -> Back Kick Follow-Through',
      ],
    },
    recoveryAndConditioning: {
      flexibility: [
        'Hamstring and piriformis deep tissue stretching.',
        'Lateral hip opener and seated butterfly stretch.',
      ],
      strengthening: [
        'Heavy barbell hip thrusts and Romanian deadlifts.',
        'Plyometric box jumps and horizontal broad jumps.',
      ],
      mobility: [
        'Ankle joint distraction stretches with resistance band.',
        'Thoracic spine lateral flexion and rotation drills.',
      ],
    },
    steps: [
      'Take 2-3 accelerating approach steps and plant takeoff foot firmly.',
      'Explosively drive non-kicking knee toward chest while soaring forward-upward.',
      'Tuck both knees tight, rotate hips sideways, and piston kicking heel through target.',
      'Retract kicking leg slightly while spotting landing zone.',
      'Touch down softly on balls of feet, flex knees deeply, and recover balanced guard.',
    ],
    keyDetails: [
      'Skeletal alignment: Shoulder, hip, and heel must form one straight horizontal line.',
      'The non-kicking leg MUST remain tightly tucked against the chest throughout flight.',
      'Impact must be made strictly with the heel bone or outer foot blade (Balnal).',
    ],
    commonMistakes: [
      'Dangling the bottom leg, causing excessive drag and off-axis tilt.',
      'Turning chest toward the ceiling or toward the floor rather than sideways.',
      'Landing heavily on a straight leg without knee cushioning.',
    ],
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1000&auto=format&fit=crop',
  },

  // ===========================================================================
  // 4. JUMPING SPIN HOOK KICK -- TTWIE DWI HURYEO CHAGI (뛰어 뒤후려차기)
  // ===========================================================================
  {
    id: 'jumping-spin-hook',
    slug: 'jumping-spin-hook-twio-dwi-huryeo-chagi',
    name: 'Jumping Spin Hook Kick',
    koreanName: '뛰어 뒤후려차기',
    romanized: 'Twio Dwi Huryeo Chagi',
    category: 'kicking-advanced',
    difficulty: 'Elite',
    beltLevel: 'Black Belt & Demo Team',
    badgeColor: '#A855F7',
    kickTrajectory: 'rotational',
    airbornePhase: 'Pre-Pivot Takeoff -> 360° Aerial Rotation -> Visual Spotting -> Heel Hook Whip -> Controlled Touchdown',
    targetCount: 1,
    strikingSurface: 'Back of Heel (Dwikkumchi) / Sole (Balbadak)',
    targetArea: 'Temple, Jaw, Helmet Face-Shield Axis',
    summary:
      'A blinding, high-altitude 360° airborne spinning hook kick. The athlete leaps vertically while spinning, acquires visual target lock mid-air, and violently whips the heel through the opponent’s head-height target at the flight apex before snapping the leg back for a pristine landing.',
    meaning:
      'Centrifugal aerial momentum, lightning mid-air head spotting, surgical heel hooking, dynamic gyroscopic balance, and poised combat recovery.',
    balanceAndPosture:
      'Keep head aligned on central vertical rotational axis; spot target BEFORE releasing hook; counterbalance with tight guard arms.',
    corePrinciples: [
      {
        title: 'Centrifugal Vertical Takeoff',
        desc: 'Channel ground pivot torque directly into upward leap without drifting laterally.',
      },
      {
        title: 'Rapid Aerial Head Spotting',
        desc: 'Turn head faster than body to acquire visual target lock before the kick releases.',
      },
      {
        title: 'Delayed Extension & Whip',
        desc: 'Keep kicking leg tightly chambered until hips complete rotation, then whip heel across target.',
      },
      {
        title: 'Gyroscopic Core Control',
        desc: 'Brace abdominal and spinal stabilizers to maintain tight vertical axis during flight.',
      },
      {
        title: 'Controlled Rotational Deceleration',
        desc: 'Decelerate rotational inertia smoothly upon touchdown into balanced fighting stance.',
      },
    ],
    skillPrerequisites: {
      physical: [
        'Elite core anti-rotation and rotational acceleration strength.',
        'High hamstring eccentric deceleration capacity.',
        'Superior vertical plyometric jump elevation.',
        'Vestibular equilibrium to prevent dizziness during aerial rotation.',
      ],
      technical: [
        'Mastery of ground Spinning Hook Kick (Dwi Huryeo Chagi).',
        'Mastery of jumping takeoff mechanics.',
        'Head-turning spotting reflex.',
        'Airborne re-chamber mechanics.',
      ],
      mental: [
        'Supreme spatial awareness during high-speed mid-air rotation.',
        'Absolute precision targeting despite high velocity.',
        'Unshakable poise under competitive pressure.',
      ],
    },
    trainingProcess: [
      {
        stepNumber: 1,
        title: 'Spotting & Rotational Floor Drills',
        details: [
          'Perform rapid 360° floor pivot jumps focusing purely on head spotting.',
          'Execute standing Spinning Hook Kicks against kicking paddles at shoulder height.',
        ],
      },
      {
        stepNumber: 2,
        title: 'Jump 360° Elevation without Kicking',
        details: [
          'Jump straight up, spin 360°, spot target, and land softly in original stance.',
          'Verify that body stays on a vertical pole without leaning outward.',
        ],
      },
      {
        stepNumber: 3,
        title: 'Aerial Chamber & Extension Timing',
        details: [
          'Jump and spin 180°, spot target over shoulder, extend leg straight past target.',
          'Violently flex hamstring to hook heel horizontally across the target line.',
        ],
      },
      {
        stepNumber: 4,
        title: 'Full Jumping Spin Hook Execution',
        details: [
          'Combine explosive vertical leap, 360° rotation, apex visual lock, and full-power heel hook.',
          'Snap heel back to glute immediately upon striking.',
        ],
      },
      {
        stepNumber: 5,
        title: 'Deceleration & Combat Guard Landing',
        details: [
          'Complete 360° rotation smoothly, absorb landing on balls of feet.',
          'Check hands into high guard and stabilize stance instantly.',
        ],
      },
    ],
    drillingMethods: {
      isolation: [
        'Barre-Assisted Hook Whip: Hook leg repeatedly across horizontal plane with fingertip barre support.',
        'Tramp-Board Elevation Spotting: Practice aerial spotting with mini-trampoline or spring floor.',
      ],
      speedAndTiming: [
        'Paddle Snap Challenge: Partner holds dual paddles; athlete must slice through both at jump peak.',
        'Timed Audio Cue Jumps: Initiate jumping spin hook on sudden whistle or clap.',
      ],
      power: [
        'Heavy Bag Spinning Hook KO Drill: Strike heavy bag with solid heel impact, transferring full body mass.',
        'Resistance Band Rotational Jumps.',
      ],
      freestyleTricking: [
        '540 Hook Kick (Cheat 720 setup) integration.',
        'Jumping Roundhouse -> Jumping Spin Hook Kick combo.',
      ],
      safety: [
        'Always spot the floor before landing to prevent ankle rollover.',
        'Warm up hamstrings extensively to avoid acute hamstring tears during explosive hooking.',
      ],
    },
    commonMistakesAndCorrections: [
      {
        mistake: 'Kicking blind without turning head first.',
        correction: 'Snap your head around immediately upon takeoff; eyes MUST see the target before the leg hooks.',
      },
      {
        mistake: 'Leaving the leg stiff like a baseball bat rather than hooking with a sharp knee bend.',
        correction: 'Extend leg slightly outside target, then violently snap the heel inward toward your glute.',
      },
      {
        mistake: 'Leaning torso excessively backward, causing feet to slip out upon landing.',
        correction: 'Maintain an upright rotational axis; keep shoulders directly over hips.',
      },
      {
        mistake: 'Jumping sideways instead of straight up.',
        correction: 'Drive upward off the ball of the takeoff foot; do not travel laterally.',
      },
      {
        mistake: 'Incomplete rotation causing awkward landing on heels.',
        correction: 'Follow through with head and shoulders until full 360° rotation is achieved.',
      },
    ],
    performanceAndApplication: {
      competition:
        'The premier 4-point head turning kick in World Taekwondo Olympic sparring, capable of instantaneous knockout.',
      poomsae: 'Freestyle Poomsae high-difficulty acrobatic element required in championship divisions.',
      demonstration: 'High-altitude multi-board suspended breaking and tricking demonstrations.',
      combinations: [
        'Front Foot Feint -> Jumping Spin Hook Kick',
        'Jumping Roundhouse -> Jumping Spin Hook Kick',
      ],
    },
    recoveryAndConditioning: {
      flexibility: [
        'Eccentric hamstring stretches and pigeon pose hip openers.',
        'Active isolated hamstring flexibility (Aero-stretch).',
      ],
      strengthening: [
        'Nordic hamstring curls and single-leg Romanian deadlifts.',
        'Cable woodchoppers and medicine ball rotational slams.',
      ],
      mobility: [
        'Cervical spine and thoracic rotational mobility exercises.',
        'Vestibular balance rehabilitation drills.',
      ],
    },
    steps: [
      'Begin in combat stance, initiate pivot on lead foot and wind up torso.',
      'Leap explosively upward into 360° spin, whipping head around to spot target.',
      'Extend kicking leg horizontally past the target at the jump peak.',
      'Violently hook the heel across the target plane with rapid hamstring contraction.',
      'Re-chamber leg, complete rotation, and touch down softly with guard raised.',
    ],
    keyDetails: [
      'Head turn is the steering wheel: the body follows the speed of the head.',
      'The heel hook is an active hamstring contraction, not a passive swing.',
      'Strike occurs precisely at the zenith of the jump before downward gravity takes over.',
    ],
    commonMistakes: [
      'Rotating with eyes looking at the ceiling or floor instead of opponent helmet.',
      'Swinging leg in a diagonal downward arc instead of horizontal plane.',
      'Failing to absorb landing impact with flexed knees.',
    ],
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop',
  },

  // ===========================================================================
  // 5. JUMPING DOUBLE FRONT KICK -- EEDAN AP CHAGI (이단 앞차기)
  // ===========================================================================
  {
    id: 'jumping-double-front-kick',
    slug: 'jumping-double-front-kick-eedan-ap-chagi',
    name: 'Jumping Double Front Kick',
    koreanName: '이단 앞차기 (두발당성)',
    romanized: 'Eedan Ap Chagi',
    category: 'kicking-advanced',
    difficulty: 'Advanced',
    beltLevel: 'Red Belt & Above',
    badgeColor: '#EF2F38',
    kickTrajectory: 'multi-strike',
    airbornePhase: 'Takeoff -> Mid-Air First Front Kick -> Apex Chamber Switch -> Second High Front Kick -> Landing',
    targetCount: 2,
    strikingSurface: 'Ball of the foot (Ap-chook) on both feet',
    targetArea: '1st Kick: Solar Plexus/Abdomen; 2nd Kick: Chin/Face',
    summary:
      'A classic multi-strike aerial technique (Dubal-dangseong) where the martial artist leaps into the air and delivers two distinct front snap kicks in rapid succession before touching down. The first kick serves as a diversionary strike to breach the guard, while the second kick delivers a devastating blow at maximum jump height.',
    meaning:
      'Sequential aerial cadence, bait-and-strike duality, mid-air pelvic elevation transfer, rapid hip flexor alternation, and grounded recovery.',
    balanceAndPosture:
      'Keep chest elevated; alternate hip flexion smoothly; maintain vertical posture without falling backward in flight.',
    corePrinciples: [
      {
        title: 'Sequential Aerial Cadence',
        desc: 'Execute a sharp "one-two" staccato rhythm with zero hesitation between strikes.',
      },
      {
        title: 'Bait-and-Penetrate Dynamic',
        desc: 'The first kick draws the opponent’s guard down; the second kick immediately pierces the exposed chin.',
      },
      {
        title: 'Mid-Air Pelvic Elevation Transfer',
        desc: 'Use the retraction of the first kick to propel the pelvis and second kicking knee even higher.',
      },
      {
        title: 'Rapid Hip Flexor Alternation',
        desc: 'Bicycle the legs at blinding speed while maintaining upright upper-body alignment.',
      },
      {
        title: 'Bilateral Shock Absorption',
        desc: 'Re-chamber both legs before landing softly on the supporting or rear foot.',
      },
    ],
    skillPrerequisites: {
      physical: [
        'High hip flexor speed and fast-twitch muscle activation.',
        'Explosive double-leg or scissor vertical takeoff power.',
        'Abdominal core strength for mid-air tucking.',
        'Bilateral hamstring and calf flexibility.',
      ],
      technical: [
        'Mastery of stationary Front Kick (Ap Chagi) on both legs.',
        'Ability to bicycle legs in mid-air with clean Ap-chook formation.',
        'High jump elevation mechanics.',
      ],
      mental: [
        'Sharp rhythm and timing coordination.',
        'Focus on dual targets rather than single impact point.',
      ],
    },
    trainingProcess: [
      {
        stepNumber: 1,
        title: 'Bilateral Front Kick Rhythm on Floor',
        details: [
          'Practice rapid alternating front kicks standing in place (left-right, right-left).',
          'Focus on sharp ball of foot contact and instant re-chambering.',
        ],
      },
      {
        stepNumber: 2,
        title: 'Hanging Leg Bicycle & Tuck Jumps',
        details: [
          'Perform vertical tuck jumps alternating knees to chest in mid-air.',
          'Engage hip flexors to ensure maximum clearance.',
        ],
      },
      {
        stepNumber: 3,
        title: 'Single Jump Low-to-High Kick Phasing',
        details: [
          'Jump vertically, snap first kick at chest level, then re-chamber.',
          'Land softly without throwing second kick to master the first phase.',
        ],
      },
      {
        stepNumber: 4,
        title: 'Full Dual Airborne Strike Delivery',
        details: [
          'Take off explosively; fire 1st kick forward at lower target.',
          'As 1st leg retracts, violently drive 2nd leg upward and snap into high target at jump apex.',
          'Re-chamber 2nd leg immediately.',
        ],
      },
      {
        stepNumber: 5,
        title: 'Landing Stabilization',
        details: [
          'Land softly on the first kicking foot or both feet simultaneously with flexed knees.',
          'Reset guard into balanced fighting stance.',
        ],
      },
    ],
    drillingMethods: {
      isolation: [
        'Horizontal Bar Suspended Kicks: Hang from pull-up bar and fire alternating front kicks without swaying.',
        'Low-High Wall Chamber Drill.',
      ],
      speedAndTiming: [
        'Staggered Dual Target Pad Drill: Coach holds two pads at mid and high elevations; strike both with crisp "pop-pop" audio rhythm.',
        'Metronome speed kicks.',
      ],
      power: [
        'Dual Heavy Bag Stomp: Jump and strike mid-bag with lead foot, upper-bag with rear foot.',
        'Weighted ankle plyometric jumps (light resistance).',
      ],
      freestyleTricking: [
        'Double Front Kick board breaking demonstrations (two boards at different heights).',
        'Running step-in Dubal-dangseong.',
      ],
      safety: [
        'Ensure both feet are pulled back properly into Ap-chook to avoid stubbing toes.',
        'Absorb landing impact through ankles and knees.',
      ],
    },
    commonMistakesAndCorrections: [
      {
        mistake: 'Throwing both kicks simultaneously (scissor split) instead of distinct 1-2 sequence.',
        correction: 'Maintain clear rhythmic separation: Kick 1 at 40% height, Kick 2 at 100% apex height.',
      },
      {
        mistake: 'Failing to re-chamber the first leg, resulting in a clumsy landing.',
        correction: 'Snapping the first leg back is what creates the lift for the second kick.',
      },
      {
        mistake: 'Leaning upper body backward and falling on back upon landing.',
        correction: 'Keep core braced and chin tucked; maintain a forward-neutral torso angle.',
      },
      {
        mistake: 'Second kick lacks height or power.',
        correction: 'Use the retraction of the first leg to actively drive the second knee upward.',
      },
      {
        mistake: 'Landing with heels flat and knees locked.',
        correction: 'Land on the balls of your feet with knees actively flexing.',
      },
    ],
    performanceAndApplication: {
      competition:
        'Standard scoring technique in official Poomsae (e.g. Koryo, Keumgang demonstrations) and high-scoring freestyle poomsae requirements.',
      poomsae: 'Directly featured in Dan-grade poomsae demonstrations as a test of explosive vertical control.',
      demonstration: 'Classic dual-board breaking demonstration with simultaneous or sequential targets.',
      combinations: [
        'Jumping Double Front Kick -> Roundhouse Kick',
        'Jumping Double Front Kick -> Back Kick',
      ],
    },
    recoveryAndConditioning: {
      flexibility: [
        'Hamstring dynamic flossing and kneeling hip flexor stretch.',
        'Calf wall stretch and plantaris release.',
      ],
      strengthening: [
        'Hanging leg raises and V-ups.',
        'Depth jumps and plyometric step-ups.',
      ],
      mobility: [
        'Ankle circles and plantar fascia massage with lacrosse ball.',
        'Pelvic anterior/posterior tilt mobility drills.',
      ],
    },
    steps: [
      'Take off explosively from fighting stance using both legs or lead-leg drive.',
      'While ascending, chamber and fire first front kick at midsection height.',
      'Retract first leg rapidly, utilizing counter-momentum to drive second knee higher.',
      'Snap second front kick at head level precisely at the jump apex.',
      'Re-chamber second leg, descend smoothly, and land with cushioned knees in guard.',
    ],
    keyDetails: [
      'Two distinct kicks must be heard: "pop... pop!" with clear re-chambering between them.',
      'Both strikes must make clean contact using Ap-chook (ball of foot).',
      'First kick occurs on ascent; second kick occurs at the absolute peak of the leap.',
    ],
    commonMistakes: [
      'Muffled single kick where only one leg actually extends.',
      'Dropping the hands to waist level while kicking in mid-air.',
      'Falling backward upon landing due to unbraced core.',
    ],
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1000&auto=format&fit=crop',
  },

  // ===========================================================================
  // 6. JUMPING TRIPLE FRONT KICKS -- EEDAN SAHM AP CHAGI (이단 삼단 앞차기)
  // ===========================================================================
  {
    id: 'jumping-triple-front-kicks',
    slug: 'jumping-triple-front-kicks-eedan-sahm-ap-chagi',
    name: 'Jumping Triple Front Kicks',
    koreanName: '이단 삼단 앞차기 (3단 앞차기)',
    romanized: 'Eedan Sahm Ap Chagi',
    category: 'kicking-advanced',
    difficulty: 'Elite',
    beltLevel: '3rd Dan Black Belt & Above',
    badgeColor: '#A855F7',
    kickTrajectory: 'multi-strike',
    airbornePhase: 'High Vertical Takeoff -> Kick 1 (Low) -> Kick 2 (Mid) -> Kick 3 (Apex High) -> Cushioned Landing',
    targetCount: 3,
    strikingSurface: 'Ball of the foot (Ap-chook) across all 3 strikes',
    targetArea: 'Kick 1: Groin/Abdomen; Kick 2: Chest; Kick 3: Head/Face',
    summary:
      'A master-level demonstration technique where the martial artist launches into maximum vertical flight and executes three distinct, snapping front kicks in rapid succession before returning to the earth. It requires exceptional hang-time, supreme hip flexor speed, and immaculate aerial balance.',
    meaning:
      'Tri-level vertical escalation, supreme aerial suspension, rapid hip-flexor flutter, staccato rhythm precision, and balanced descent.',
    balanceAndPosture:
      'Maintain compact vertical cylinder posture; avoid backward spine arching; brace core tightly to support rapid leg cycling.',
    corePrinciples: [
      {
        title: 'Maximum Vertical Hang-Time',
        desc: 'Generate maximum vertical impulse on takeoff to create the flight window required for 3 strikes.',
      },
      {
        title: 'Tri-Level Ascending Cadence',
        desc: 'Stagger strikes systematically: Strike 1 (low/mid), Strike 2 (chest), Strike 3 (apex head).',
      },
      {
        title: 'Explosive Hip Flexor Cycling',
        desc: 'Rapidly chamber, fire, and retract legs like an internal piston engine in mid-air.',
      },
      {
        title: 'Core Stabilizer Bracing',
        desc: 'Keep transverse abdominis locked to maintain upper body poise during rapid lower body shifts.',
      },
      {
        title: 'Decelerative Touchdown Cushioning',
        desc: 'Prepare feet for ground contact immediately after the 3rd kick re-chambers.',
      },
    ],
    skillPrerequisites: {
      physical: [
        'Elite vertical jump elevation (minimum 24+ inches vertical).',
        'Exceptional fast-twitch hip flexor recruitment.',
        'High core endurance and reactive abdominal power.',
        'Superior ankle and knee landing shock absorption.',
      ],
      technical: [
        'Flawless execution of Jumping Double Front Kick (Eedan Ap Chagi).',
        'Clean Ap-chook foot shaping at high cycling speeds.',
        'Ability to maintain gaze on target during rapid aerial movement.',
      ],
      mental: [
        'Absolute rhythmic discipline—not rushing or flailing in the air.',
        'Confidence in high-velocity aerial suspension.',
      ],
    },
    trainingProcess: [
      {
        stepNumber: 1,
        title: '3-Count Floor Cycling & Fast-Twitch Drills',
        details: [
          'Perform 3 rapid alternating front kicks standing (Right-Left-Right or Left-Right-Left) in under 0.8 seconds.',
          'Focus on distinct Ap-chook shape and immediate retraction on each strike.',
        ],
      },
      {
        stepNumber: 2,
        title: 'High Box Jumps & Vertical Tuck Elevation',
        details: [
          'Execute maximal vertical box jumps focusing on peak elevation and hang-time.',
          'Practice 3-knee flutter tucks in mid-air without kicking.',
        ],
      },
      {
        stepNumber: 3,
        title: 'Two-Phase Kick with Phantom Third',
        details: [
          'Jump, execute 2 full kicks, and chamber the third leg tightly at apex before landing.',
          'Build the neural motor pathway for the triple sequence.',
        ],
      },
      {
        stepNumber: 4,
        title: 'Full 3-Kick Airborne Delivery',
        details: [
          'Take off with maximal explosive impulse.',
          'Fire Kick 1 immediately on ascent, Kick 2 in mid-flight, and Kick 3 at the apex.',
          'Re-chamber the final kick before beginning descent.',
        ],
      },
      {
        stepNumber: 5,
        title: 'Soft Landing & Guard Recovery',
        details: [
          'Absorb landing softly with deep knee bend and active ankles.',
          'Establish immediate stable fighting guard.',
        ],
      },
    ],
    drillingMethods: {
      isolation: [
        'Pull-Up Bar Flutter Kicks: Hang and execute 3 rapid-fire front kicks without swinging.',
        'Elastic Band Hip Flexor High-Knee Drives.',
      ],
      speedAndTiming: [
        'Triple Paddle Tower: 3 partners hold paddles at low, mid, and high levels; practitioner must strike all three with distinct "pop-pop-pop" audio rhythm.',
        'Reaction strobe or whistle drills.',
      ],
      power: [
        'Plyometric Depth Jumps directly into Triple Front Kick attempts.',
        'Medicine ball vertical throws paired with explosive jumps.',
      ],
      freestyleTricking: [
        'Triple Front Kick 3-board breaking in mid-air (Kukkiwon Demo Standard).',
        'Step-in running approach triple kicks.',
      ],
      safety: [
        'Always practice initial full runs over thick gymnastic crash mats.',
        'Never sacrifice landing posture for the final kick.',
      ],
    },
    commonMistakesAndCorrections: [
      {
        mistake: 'Only two kicks are fully extended, while the third is an incomplete knee poke.',
        correction: 'Work on hip flexor velocity; each kick must extend and snap completely.',
      },
      {
        mistake: 'Running out of air time and landing awkwardly with kicking leg still extended.',
        correction: 'Increase vertical jump takeoff power; initiate the first strike earlier on the ascent.',
      },
      {
        mistake: 'Upper body leaning severely backward, causing the practitioner to land on their tailbone.',
        correction: 'Keep chin tucked to chest and maintain active core crunch throughout flight.',
      },
      {
        mistake: 'Striking with toes instead of ball of foot due to hurried speed.',
        correction: 'Drill slow-motion ankle dorsiflexion and toe extension until it is automatic.',
      },
    ],
    performanceAndApplication: {
      competition:
        'A centerpiece technical display in elite Demonstration Team championships and high-dan grading examinations.',
      poomsae: 'Used in master-level demonstration choreography to showcase elite physical conditioning.',
      demonstration:
        'Iconic 3-tier board break: 3 target holders positioned at 5ft, 6ft, and 7ft elevation, broken in a single flight.',
      combinations: [
        'Approach Step -> Triple Front Kick -> Land -> Spin Hook Kick',
        'Triple Front Kick -> Immediate Back Kick Counter',
      ],
    },
    recoveryAndConditioning: {
      flexibility: [
        'Deep hip flexor lunge stretches with back arch.',
        'Seated hamstring stretches and foam rolling quadriceps.',
      ],
      strengthening: [
        'Hanging windshield wipers and L-sit holds.',
        'Weighted plyometric Bulgarian split squats.',
      ],
      mobility: [
        'Patellar tendon mobilization and ice baths post-session.',
        'Ankle dorsiflexion CARs.',
      ],
    },
    steps: [
      'Take 2 accelerating approach steps and explode upward with maximal vertical impulse.',
      'Fire first front kick at waist height during early ascent.',
      'Cycle legs rapidly and fire second front kick at chest height in mid-flight.',
      'Drive final kicking knee skyward and deliver third front kick at head height at jump apex.',
      'Re-chamber final kick, spot landing, and touch down softly on flexed knees in guard.',
    ],
    keyDetails: [
      'Three crisp, distinct snaps must be executed: "one-two-three!" in a continuous crescendo.',
      'All three kicks must make impact using Ap-chook (ball of foot).',
      'The entire sequence from takeoff to landing takes approximately 0.7 to 0.9 seconds.',
    ],
    commonMistakes: [
      'The third kick is rushed and fails to reach full extension.',
      'Excessive backward torso lean causing dangerous fall upon landing.',
      'Landing stiff-legged on heels.',
    ],
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1000&auto=format&fit=crop',
  },

  // ===========================================================================
  // 7. JUMPING QUADRUPLE FRONT KICKS -- NE-BAL AP CHAGI (네발 앞차기)
  // ===========================================================================
  {
    id: 'jumping-quadruple-front-kicks',
    slug: 'jumping-quadruple-front-kicks-ne-bal-ap-chagi',
    name: 'Jumping Quadruple Front Kicks',
    koreanName: '네발 앞차기 (4단 앞차기)',
    romanized: 'Ne-bal Ap Chagi',
    category: 'kicking-advanced',
    difficulty: 'Elite',
    beltLevel: '4th Dan Master & Demo Team',
    badgeColor: '#A855F7',
    kickTrajectory: 'multi-strike',
    airbornePhase: 'Max Hang-Time Takeoff -> 4-Strike Aerial Rhythm (1-2-3-4) -> Apex Climax -> Controlled Deceleration',
    targetCount: 4,
    strikingSurface: 'Ball of the foot (Ap-chook) across all 4 strikes',
    targetArea: '4 Ascending Vertical Target Planes (Waist, Lower Chest, Upper Chest, Head)',
    summary:
      'An astonishing showcase of Korean demonstration mastery. The martial artist launches high into the air with enormous hang-time and fires four distinct, alternating front kicks in a rapid-fire machine-gun cadence before touching down. It is the hallmark of elite KTA and Kukkiwon demonstration team specialists.',
    meaning:
      'Quad-strike aerial velocity, extreme hip-flexor plyometric stamina, suspended motor coordination, and poise under gravity.',
    balanceAndPosture:
      'Compact core cylinder; active pelvic anterior tilt; eyes locked forward; balanced double-foot touchdown.',
    corePrinciples: [
      {
        title: 'Maximal Hang-Time Generation',
        desc: 'Convert powerful approach steps into towering vertical elevation to maximize aerial operating time.',
      },
      {
        title: 'Quad-Strike High-Frequency Cadence',
        desc: 'Deliver 4 full extensions with instantaneous re-chambering in a sub-second timeframe.',
      },
      {
        title: 'Bilateral Leg Decoupling',
        desc: 'Alternate left and right legs with independent, symmetrical firing speed.',
      },
      {
        title: 'Torso Neutrality Maintenance',
        desc: 'Prevent the upper body from rocking wildly by locking core stabilizers.',
      },
      {
        title: 'Safe Deceleration Landing',
        desc: 'Retract the fourth kick cleanly to ensure both feet land safely and absorb ground forces.',
      },
    ],
    skillPrerequisites: {
      physical: [
        'World-class vertical jump elevation (28+ inches).',
        'Extreme hip flexor contractile velocity and stamina.',
        'High core rigidity and pelvic stability.',
        'Exceptional knee and ankle joint durability.',
      ],
      technical: [
        'Mastery of Jumping Triple Front Kicks (Sahm Ap Chagi).',
        'Ability to bicycle legs 4 times cleanly without toe flaring.',
        'High-altitude board breaking accuracy.',
      ],
      mental: [
        'Total psychological commitment to the full 4-count rhythm.',
        'Calmness in the air to execute without rushing.',
      ],
    },
    trainingProcess: [
      {
        stepNumber: 1,
        title: '4-Count Floor Speed Drills',
        details: [
          'Execute 4 rapid-fire front snap kicks standing on floor (L-R-L-R or R-L-R-L) in under 1.0 second.',
          'Enforce strict Ap-chook shaping and immediate recoil on each hit.',
        ],
      },
      {
        stepNumber: 2,
        title: 'Trampoline or Spring-Floor Hang-Time Drills',
        details: [
          'Use spring floor or mini-tramp to experience extended hang-time.',
          'Practice cycling 4 kicks with proper elevation and timing.',
        ],
      },
      {
        stepNumber: 3,
        title: '3-Kick Drill with 4th Chamber Recovery',
        details: [
          'Jump from flat ground; deliver 3 kicks and rapidly chamber the 4th leg without extending.',
          'Verify that altitude is sufficient for the final extension.',
        ],
      },
      {
        stepNumber: 4,
        title: 'Full 4-Kick Airborne Sequence',
        details: [
          'Approach, plant, and explode into the air with maximal upward drive.',
          'Fire Kick 1 (early ascent), Kick 2 (mid-ascent), Kick 3 (apex entry), Kick 4 (apex peak).',
          'Instantly re-chamber fourth leg before landing.',
        ],
      },
      {
        stepNumber: 5,
        title: 'Landing Absorption & Combat Stance',
        details: [
          'Absorb impact through active ankle and knee flexion on crash mat.',
          'Return to balanced fighting stance with hands raised.',
        ],
      },
    ],
    drillingMethods: {
      isolation: [
        'Hanging 4-Count Bicycle Snaps: Hang from chin-up bar and snap 4 front kicks in rapid succession.',
        'Resistance band hip flexor pull-throughs.',
      ],
      speedAndTiming: [
        'Quad-Paddle Tower: 4 partners hold paddles in ascending ladder formation (5ft, 5.5ft, 6ft, 6.5ft).',
        'Auditory rhythm training with metronome set to high BPM.',
      ],
      power: [
        'Depth Jumps over boxes followed by maximal vertical leap.',
        'Trap bar jump squats and weighted bounding.',
      ],
      freestyleTricking: [
        '4-Board Ascending Break (Kukkiwon Demonstration Team Standard).',
        'Integration into multi-kick demo combinations.',
      ],
      safety: [
        'Train on 10cm-20cm crash mats until the 4th kick re-chamber is mastered.',
        'Never compromise landing safety for the fourth kick.',
      ],
    },
    commonMistakesAndCorrections: [
      {
        mistake: 'The fourth kick hits the target as the athlete is already landing on the floor.',
        correction: 'Start the first kick earlier during the takeoff ascent; increase takeoff elevation.',
      },
      {
        mistake: 'Kicks become miniature knee flutters without true lower leg extension.',
        correction: 'Slow the cadence down on trampoline until every kick fully locks out and snaps.',
      },
      {
        mistake: 'Upper body swings back and forth wildly.',
        correction: 'Brace abdominal wall; isolate leg cycling purely at the acetabulofemoral (hip) joint.',
      },
    ],
    performanceAndApplication: {
      competition: 'Premier high-difficulty demonstration technique in worldwide Taekwondo expos and festivals.',
      poomsae: 'Special demonstration element representing the pinnacle of Kukkiwon physical mastery.',
      demonstration: 'Legendary 4-board ascending vertical break executed in a single airborne suspension.',
      combinations: [
        'Approach -> Ne-bal Ap Chagi -> Roll -> Stand and Guard',
      ],
    },
    recoveryAndConditioning: {
      flexibility: [
        'Extensive PNF hamstring stretching and hip capsule release.',
        'Quadriceps and psoas release with massage roller.',
      ],
      strengthening: [
        'Plyometric tuck jump repeats (sets of 10).',
        'Hanging leg raises with light ankle weights.',
      ],
      mobility: [
        'Contrast ice/warm therapy for patellar tendons.',
        'Ankle and foot arch strengthening with towel scrunches.',
      ],
    },
    steps: [
      'Take 3 aggressive approach steps, plant lead foot, and leap vertically with maximal explosive force.',
      'Fire first front kick immediately as body leaves the mat.',
      'Alternate and deliver second front kick at mid-chest height.',
      'Fire third front kick as body approaches flight apex.',
      'Deliver fourth front kick with explosive snap at the absolute summit of flight.',
      'Quickly re-chamber fourth leg and absorb landing on flexed knees.',
    ],
    keyDetails: [
      'Cadence must be clean and machine-gun fast: "one-two-three-four!" with no pauses.',
      'All 4 kicks must strike cleanly with Ap-chook.',
      'Requires minimum 0.9 to 1.1 seconds of total flight hang-time.',
    ],
    commonMistakes: [
      'Fourth kick is thrown during downward fall, endangering landing knee.',
      'Toes flex forward causing toe jamming on impact.',
      'Torso collapses backward from lack of core strength.',
    ],
    image: 'https://images.unsplash.com/photo-1555597673-b21d5c935865?q=80&w=1000&auto=format&fit=crop',
  },

  // ===========================================================================
  // 8. JUMPING QUINTUPLE FRONT KICKS -- DASEOT-BAL AP CHAGI (오발 앞차기)
  // ===========================================================================
  {
    id: 'jumping-quintuple-front-kicks',
    slug: 'jumping-quintuple-front-kicks-daseot-bal-ap-chagi',
    name: 'Jumping Quintuple Front Kicks',
    koreanName: '오발 앞차기 (5단 앞차기)',
    romanized: 'Daseot-bal Ap Chagi',
    category: 'kicking-advanced',
    difficulty: 'Elite',
    beltLevel: 'Grandmaster / Elite Demo Team',
    badgeColor: '#A855F7',
    kickTrajectory: 'multi-strike',
    airbornePhase: 'Monumental Hang-Time -> 5-Strike Aerial Burst (1-2-3-4-5) -> Re-Chamber -> Safe Deceleration',
    targetCount: 5,
    strikingSurface: 'Ball of the foot (Ap-chook) across all 5 strikes',
    targetArea: '5 Ascending Target Planes (Waist to 8+ Feet Elevation)',
    summary:
      'The crown jewel of Korean aerial demonstration kicking. The grandmaster or elite demonstration athlete springs into monumental vertical flight and unleashes five distinct, fully extended front snap kicks in a lightning-fast mid-air barrage before touching down. It is widely considered one of the most difficult physical feats in martial arts.',
    meaning:
      'Pinnacle of aerial suspension, legendary fast-twitch mastery, five-fold sequential striking, and transcendence over gravity.',
    balanceAndPosture:
      'Unbroken vertical core axis; laser-like forward focus; instantaneous leg recoil; cat-like soft landing.',
    corePrinciples: [
      {
        title: 'Monumental Hang-Time Elevation',
        desc: 'Generate maximum possible vertical impulse off a precision run-up and plant.',
      },
      {
        title: 'Five-Strike Ultrasonic Cadence',
        desc: 'Execute 5 distinct full extensions and re-chambers within approximately 1.0 to 1.2 seconds of flight.',
      },
      {
        title: 'Continuous Kinetic Transfer',
        desc: 'Use the retraction of each kick as the explosive spring to launch the subsequent strike higher.',
      },
      {
        title: 'Dynamic Torso Compression',
        desc: 'Engage the abdominal wall continuously to cycle the legs without backward torso collapse.',
      },
      {
        title: 'Emergency Deceleration Awareness',
        desc: 'Instantly retract the fifth kick to ensure safe touchdown on cushioned joints.',
      },
    ],
    skillPrerequisites: {
      physical: [
        'Elite vertical elevation (30+ inches vertical leap).',
        'Legendary hip flexor contractile velocity.',
        'Supreme anaerobic core endurance.',
        'High-impact landing durability in ankles, knees, and hips.',
      ],
      technical: [
        'Mastery of Jumping Quadruple Front Kicks (Ne-bal Ap Chagi).',
        'Flawless Ap-chook shaping at extreme speeds.',
        'Precision targeting on 5 separate target heights.',
      ],
      mental: [
        'Total fearless commitment to complete all 5 strikes in the air.',
        'Absolute mental clarity and calmness in flight.',
      ],
    },
    trainingProcess: [
      {
        stepNumber: 1,
        title: '5-Count Rapid Floor Flutter',
        details: [
          'Standing on one leg, fire 5 rapid alternating front kicks in under 1.2 seconds.',
          'Verify that every kick extends fully and returns to chamber.',
        ],
      },
      {
        stepNumber: 2,
        title: 'Hanging Bar 5-Kick Machine-Gun Drill',
        details: [
          'Hang from high pull-up bar; fire 5 rapid-fire front kicks without swinging.',
          'Build the explosive hip flexor stamina needed for the full leap.',
        ],
      },
      {
        stepNumber: 3,
        title: 'Spring-Floor / Trampoline Full 5-Kick Progression',
        details: [
          'Practice full 5-kick sequence on a spring floor or mini-trampoline.',
          'Ingrain the 5-count auditory rhythm: "one-two-three-four-five!".',
        ],
      },
      {
        stepNumber: 4,
        title: 'Flat Mat Full Elevation Attempt',
        details: [
          'Run up aggressively, plant takeoff foot, soar into maximum vertical flight.',
          'Release 5 kicks in an ascending ladder from 4ft to 7.5+ft elevation.',
          'Retract fifth kick immediately.',
        ],
      },
      {
        stepNumber: 5,
        title: 'Soft Landing & Grandmaster Poise',
        details: [
          'Touch down on balls of feet with deep knee flexion on crash mat.',
          'Stand tall and recover perfect fighting posture.',
        ],
      },
    ],
    drillingMethods: {
      isolation: [
        'Resistance Band Fast-Twitch Knee Drives: High repetition band sprints.',
        'Weighted V-Up explosive snaps.',
      ],
      speedAndTiming: [
        '5-Paddle Vertical Spiral Tower: 5 holders staggered vertically; strike all 5 with consecutive audio cracks.',
        'Electronic impact timing sensors.',
      ],
      power: [
        'Weighted jump squats and depth jump broad leaps.',
        'Heavy sled pushes for quadriceps and calf power.',
      ],
      freestyleTricking: [
        '5-Board Ascending Vertical Break (Kukkiwon Demonstration Pinnacle).',
        'High-flying demonstration showpiece.',
      ],
      safety: [
        'Always practice over 30cm gymnastics safety mats.',
        'Never attempt when fatigued; requires 100% fresh nervous system.',
      ],
    },
    commonMistakesAndCorrections: [
      {
        mistake: 'Fifth kick is thrown while already on the floor or landing.',
        correction: 'Achieve greater vertical height; initiate first kick earlier in the takeoff ascent.',
      },
      {
        mistake: 'Kicks degrade into tiny knee shakes without full leg extension.',
        correction: 'Work on isolated hip flexor speed; emphasize full lockout before re-chambering.',
      },
      {
        mistake: 'Landing heavily and jarring knees due to un-chambered legs.',
        correction: 'Immediately tuck legs into shock-absorption position after the fifth kick.',
      },
    ],
    performanceAndApplication: {
      competition: 'World Taekwondo Hanmadang Championship High-Level Demonstration Category.',
      poomsae: 'Supreme demonstration feat reserved for elite demonstration team tours.',
      demonstration: 'The historic 5-board aerial break; widely recognized as the pinnacle of kicking agility.',
      combinations: [
        'Sprint Approach -> Quintuple Front Kick -> Immediate Roll Recovery',
      ],
    },
    recoveryAndConditioning: {
      flexibility: [
        'Deep hip flexor and hamstring passive/active stretching.',
        'Full body foam rolling and mobility restoration.',
      ],
      strengthening: [
        'Plyometric box drop jumps and Bulgarian split squats.',
        'Core anti-extension rollouts and hanging leg raises.',
      ],
      mobility: [
        'Ankle joint mobility and ice therapy for patellar tendons.',
        'Lower back decompression (inversion table or hanging).',
      ],
    },
    steps: [
      'Execute a fast, controlled 3-step approach and drive explosively upward into maximal vertical flight.',
      'Fire Kick 1 immediately upon leaving the floor (waist level).',
      'Fire Kick 2 on mid-ascent (lower chest level).',
      'Fire Kick 3 on upper ascent (upper chest level).',
      'Fire Kick 4 approaching the apex (neck level).',
      'Fire Kick 5 at the absolute summit of flight (head/overhead level).',
      'Re-chamber fifth leg, brace core, and absorb landing softly on flexed knees.',
    ],
    keyDetails: [
      'Five distinct, audible kicks must be delivered before touching the floor.',
      'All 5 strikes must make contact with Ap-chook (ball of foot).',
      'Requires peak nervous system readiness and immense vertical lift.',
    ],
    commonMistakes: [
      'Attempting when legs are fatigued, causing dangerous under-rotation and knee impact.',
      'Rushing the cadence and failing to fully extend each kick.',
      'Landing stiff-legged.',
    ],
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1000&auto=format&fit=crop',
  },

  // ===========================================================================
  // 9. JUMPING DOUBLE ROUND KICKS -- EEDAN NARAE CHAGI (이단 나래차기)
  // ===========================================================================
  {
    id: 'jumping-double-round-kicks',
    slug: 'jumping-double-round-kicks-eedan-narae-chagi',
    name: 'Jumping Double Round Kicks',
    koreanName: '이단 나래차기 (공중 나래차기)',
    romanized: 'Eedan Narae Chagi',
    category: 'kicking-advanced',
    difficulty: 'Advanced',
    beltLevel: 'Red – Black Belt & Above',
    badgeColor: '#EF2F38',
    kickTrajectory: 'multi-strike',
    airbornePhase: 'Scissor Takeoff -> 1st Roundhouse Whip -> Mid-Air Hip Flip -> 2nd Roundhouse Whip -> Landing',
    targetCount: 2,
    strikingSurface: 'Instep (Baldeung) on both feet',
    targetArea: '1st Kick: Body/Trunk Guard; 2nd Kick: Head/Helmet Temple',
    summary:
      'An explosive airborne bilateral roundhouse combination (Narae Chagi executed entirely in mid-air). The fighter leaps into the air, delivers a lightning-fast roundhouse kick with the lead leg, inverts the pelvis horizontally in the opposite direction mid-flight, and whips the second leg into the opponent’s head before touching down.',
    meaning:
      'Bilateral aerial whiplash, rapid pelvic inversion in suspension, diversion-and-destroy timing, and continuous fluid rotation.',
    balanceAndPosture:
      'Switch pelvic orientation 180° mid-air while keeping torso stabilized; counterbalance with alternating guard hands.',
    corePrinciples: [
      {
        title: 'Bilateral Pelvic Inversion',
        desc: 'Flip the hips from left to right (or right to left) horizontally while suspended in mid-air.',
      },
      {
        title: 'Staccato Double Whip',
        desc: 'Deliver two distinct instep whip strikes with no dead-time between the first retraction and second extension.',
      },
      {
        title: 'Bait-to-Head Decapitation',
        desc: 'Use the first roundhouse to drop the opponent’s trunk guard, then whip the second kick into the exposed head.',
      },
      {
        title: 'Core Torso Counterbalance',
        desc: 'Engage obliques and abdominal wall to control mid-air rotational torque.',
      },
      {
        title: 'Cushioned Athletic Recovery',
        desc: 'Re-chamber the second leg and land on the balls of the feet in a dynamic fighting stance.',
      },
    ],
    skillPrerequisites: {
      physical: [
        'High rotational hip torque and pelvic agility.',
        'Explosive scissor jump takeoff power.',
        'Abdominal oblique speed and coordination.',
        'Dynamic hamstring and adductor flexibility.',
      ],
      technical: [
        'Mastery of ground Narae Chagi (Double Roundhouse Kick).',
        'Ability to flip hips in mid-air without losing height.',
        'Clean Baldeung instep shaping on both legs.',
      ],
      mental: [
        'Fluid rhythmic confidence.',
        'Clear focus on two separate striking targets.',
      ],
    },
    trainingProcess: [
      {
        stepNumber: 1,
        title: 'Ground Narae Chagi Rhythm Mastery',
        details: [
          'Practice rapid-fire ground Narae Chagi with crisp 1-2 timing against kicking paddles.',
          'Ensure hips flip fully on both sides.',
        ],
      },
      {
        stepNumber: 2,
        title: 'Airborne Scissor Hip Flip without Kicking',
        details: [
          'Jump vertically; flip hips from left chamber to right chamber in mid-air without extending.',
          'Engrain the core rotational torque required for the aerial switch.',
        ],
      },
      {
        stepNumber: 3,
        title: 'Lead Kick Extension with Rear Knee Chamber',
        details: [
          'Jump, extend lead roundhouse kick, retract and hold rear knee chambered high at peak.',
        ],
      },
      {
        stepNumber: 4,
        title: 'Full Airborne Double Roundhouse Execution',
        details: [
          'Leap off floor; whip 1st roundhouse at mid-level; flip hips violently and whip 2nd roundhouse at head-level at peak.',
          'Re-chamber 2nd leg before descent.',
        ],
      },
      {
        stepNumber: 5,
        title: 'Landing & Guard Reset',
        details: [
          'Land softly on balls of feet with knees flexed.',
          'Bring hands immediately up into defensive guard.',
        ],
      },
    ],
    drillingMethods: {
      isolation: [
        'Wall Support Hip Flips: Hold wall and practice rapid bilateral roundhouse chambers.',
        'Band-resisted aerial knee flips.',
      ],
      speedAndTiming: [
        'Double Target Pad Slices: Coach holds 2 pads at body and head heights; strike with explosive "clap-clap" rhythm.',
        'Electronic scoring pad reaction drills.',
      ],
      power: [
        'Heavy Bag Double Blast: Deliver double roundhouse into heavy bag in a single leap.',
        'Plyometric box jumps into immediate scissor kicks.',
      ],
      freestyleTricking: [
        'Airborne Narae Chagi dual board breaking.',
        'Running approach jumping Narae Chagi into 360 follow-through.',
      ],
      safety: [
        'Ensure hips flip smoothly without twisting the supporting knee before takeoff.',
        'Land on shock-absorbing mats to cushion repetitive jump stress.',
      ],
    },
    commonMistakesAndCorrections: [
      {
        mistake: 'First kick is thrown on the ground before jumping.',
        correction: 'Both kicks MUST be executed while completely airborne in flight.',
      },
      {
        mistake: 'Hips do not flip, resulting in an awkward front kick on the second strike.',
        correction: 'Violently twist the pelvis 180° mid-air to align the second roundhouse horizontally.',
      },
      {
        mistake: 'Second kick lacks height because the first kick was thrown too high.',
        correction: 'Keep the 1st kick at chest level to save maximum vertical elevation for the 2nd kick.',
      },
    ],
    performanceAndApplication: {
      competition:
        'A legendary World Taekwondo Kyorugi scoring weapon: the airborne Narae Chagi overwhelms defensive fighters and scores 2+3 points.',
      poomsae: 'Freestyle Poomsae dynamic combinations.',
      demonstration: 'Rapid bilateral board breaks on two separate holders.',
      combinations: [
        'Cut Kick Feint -> Jumping Double Round Kick',
        'Jumping Double Round Kick -> Back Kick Counter',
      ],
    },
    recoveryAndConditioning: {
      flexibility: [
        'Groin frog stretch and seated butterfly PNF stretching.',
        'Standing adductor and IT band foam rolling.',
      ],
      strengthening: [
        'Oblique Russian twists with medicine ball.',
        'Single-leg dumbbell split squats.',
      ],
      mobility: [
        'Hip capsule internal/external rotation CARs.',
        'Ankle dorsiflexion and plantar flexion stretches.',
      ],
    },
    steps: [
      'Take off explosively from combat stance using scissor leg drive.',
      'Fire first roundhouse kick horizontally with lead leg on early flight.',
      'Instantly retract lead leg while violently flipping hips 180° in mid-air.',
      'Whip second roundhouse kick through head target at the jump apex.',
      'Re-chamber second leg, spot landing, and touch down softly in balanced guard.',
    ],
    keyDetails: [
      'Both kicks must be fully airborne—no foot touches the ground between strikes.',
      'Auditory feedback must be a tight, fast double snap: "pop-pop!".',
      'Hips must turn horizontally on both kicks to deliver genuine roundhouse impact.',
    ],
    commonMistakes: [
      'First kick touches the ground before second kick leaves.',
      'Incomplete hip turn on the second strike, making it an ugly front kick.',
      'Landing stiff-legged and stumbling forward.',
    ],
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1000&auto=format&fit=crop',
  },

  // ===========================================================================
  // 10. JUMPING TRIPLE SIDE KICKS -- SAM-DAN YEOP CHAGI (공중 3단 옆차기)
  // ===========================================================================
  {
    id: 'jumping-triple-side-kicks',
    slug: 'jumping-triple-side-kicks-sam-dan-yeop-chagi',
    name: 'Jumping Triple Side Kicks',
    koreanName: '공중 3단 옆차기 (삼단 옆차기)',
    romanized: 'Sam-dan Yeop Chagi',
    category: 'kicking-advanced',
    difficulty: 'Elite',
    beltLevel: '3rd Dan Black Belt & Above',
    badgeColor: '#A855F7',
    kickTrajectory: 'multi-strike',
    airbornePhase: 'Horizontal Glide Takeoff -> Side Kick 1 -> Mid-Air Re-Chamber -> Side Kick 2 -> Apex Side Kick 3 -> Landing',
    targetCount: 3,
    strikingSurface: 'Knife Foot Blade (Balnal) / Direct Heel (Dwikkumchi)',
    targetArea: '3 Targets in Sequence (e.g. 3 Boards along a horizontal line or ascending elevation)',
    summary:
      'An elite aerial demonstration technique where the practitioner leaps through the air and fires three separate, fully locked side kicks before landing. The athlete maintains a side-on horizontal body position in flight, re-chambering and thrusting the foot blade with piston-like speed through three consecutive targets.',
    meaning:
      'Linear airborne suspension, multi-piston thrust precision, unyielding lateral core bracing, and immaculate Balnal foot blade shaping.',
    balanceAndPosture:
      'Maintain horizontal side-plane alignment throughout flight; tuck non-kicking leg tightly; keep eyes locked on target line.',
    corePrinciples: [
      {
        title: 'Linear Flight Suspension',
        desc: 'Glide horizontally through the air to cover the distance between three target stations.',
      },
      {
        title: 'Triple Piston Re-Chambering',
        desc: 'Execute full extension, retraction, and re-extension three times without losing flight alignment.',
      },
      {
        title: 'Unyielding Balnal Alignment',
        desc: 'Maintain blade of the foot shaping with toes pulled downward across all three strikes.',
      },
      {
        title: 'Lateral Core Bracing',
        desc: 'Lock the quadratus lumborum and obliques to prevent torso from sagging toward the floor.',
      },
      {
        title: 'Progressive Landing Deceleration',
        desc: 'Absorb forward gliding momentum safely on flexed supporting joints.',
      },
    ],
    skillPrerequisites: {
      physical: [
        'Superior gluteus medius endurance and thrust speed.',
        'High horizontal and vertical jump takeoff power.',
        'Exceptional lateral abdominal core stability.',
        'High hamstring and hip abductor flexibility.',
      ],
      technical: [
        'Mastery of Jumping Side Kick (Twio Yeop Chagi).',
        'Ability to re-chamber side kick in mid-air rapidly.',
        'Flawless Balnal foot shaping.',
      ],
      mental: [
        'Clear spatial sequencing across multiple targets.',
        'Unflinching focus during extended horizontal flight.',
      ],
    },
    trainingProcess: [
      {
        stepNumber: 1,
        title: 'Standing Triple Side Kick Pump Drill',
        details: [
          'Hold wall and fire 3 consecutive side kicks without touching floor, re-chambering deeply between each.',
          'Ensure Balnal knife-foot shape remains razor-sharp.',
        ],
      },
      {
        stepNumber: 2,
        title: 'Airborne Side Kick with Double Pump Chamber',
        details: [
          'Jump into flying side kick; pump the chamber twice in mid-air to build rapid knee flexion/extension.',
        ],
      },
      {
        stepNumber: 3,
        title: 'Dual Target Airborne Side Kick',
        details: [
          'Practice breaking 2 targets in a single jump before advancing to three.',
        ],
      },
      {
        stepNumber: 4,
        title: 'Full Triple Airborne Side Kick Execution',
        details: [
          'Run up, launch into horizontal flight.',
          'Thrust Kick 1, retract to tight chamber; thrust Kick 2, retract; thrust Kick 3 through final target.',
          'Land safely on supporting foot.',
        ],
      },
      {
        stepNumber: 5,
        title: 'Controlled Deceleration & Landing',
        details: [
          'Touch down on flexed supporting leg, absorb forward momentum, and establish fighting stance.',
        ],
      },
    ],
    drillingMethods: {
      isolation: [
        'Isometric Side Kick Holds: Hold side kick at full extension for 10 seconds, pump 3 times rapidly.',
        'Resistance band lateral leg thrusts.',
      ],
      speedAndTiming: [
        '3-Target Horizontal Pad Line: 3 partners hold pads spaced 1 foot apart; practitioner slices through all three.',
        'Auditory cadence training.',
      ],
      power: [
        'Heavy Bag Triple Thrust: Leap and strike heavy bag three times in rapid succession before falling.',
        'Box jump lateral rebounds.',
      ],
      freestyleTricking: [
        'Triple Board Breaking Demonstration across horizontal or staggered heights.',
        'Obstacle flight triple side kicks.',
      ],
      safety: [
        'Train on wide safety mats to cushion forward momentum.',
        'Ensure ankle is locked tight into Balnal to prevent sprains on impact.',
      ],
    },
    commonMistakesAndCorrections: [
      {
        mistake: 'Kicks become small scooping taps instead of true linear thrusts.',
        correction: 'Retract the knee fully to the chest between every strike to reload the piston.',
      },
      {
        mistake: 'Torso rotates forward into a stomach-down belly flop position.',
        correction: 'Lock lateral core; keep shoulder, hip, and heel aligned on the vertical side-plane.',
      },
      {
        mistake: 'Running out of air time before the third kick extends.',
        correction: 'Increase approach speed and takeoff elevation; fire the first strike immediately upon leaving the floor.',
      },
    ],
    performanceAndApplication: {
      competition: 'Elite World Taekwondo Demonstration Championship showpiece.',
      poomsae: 'Demonstration choreography testing ultimate lateral aerial stamina.',
      demonstration: 'Legendary 3-board horizontal or ascending side kick break.',
      combinations: [
        'Approach -> Jumping Triple Side Kick -> Roll -> Guard',
      ],
    },
    recoveryAndConditioning: {
      flexibility: [
        'Lateral straddle split stretches and seated groin openers.',
        'Gluteus medius and piriformis trigger point release.',
      ],
      strengthening: [
        'Side planks with lateral leg raises.',
        'Barbell hip thrusts and heavy lateral lunges.',
      ],
      mobility: [
        'Hip CARs and ankle lateral stability wobble board training.',
      ],
    },
    steps: [
      'Take 3 aggressive approach steps and launch into horizontal flight off lead leg.',
      'Tuck non-kicking leg tightly against chest, align body sideways.',
      'Thrust first side kick through Target 1, immediately re-chamber.',
      'Thrust second side kick through Target 2, immediately re-chamber.',
      'Thrust third side kick through Target 3 at flight apex.',
      'Absorb landing softly on supporting foot with deep knee flexion.',
    ],
    keyDetails: [
      'All three strikes must be authentic linear side kicks with deep re-chambering.',
      'Foot must strike strictly with the heel bone or outer blade (Balnal).',
      'The non-kicking leg remains tightly tucked like an aerodynamic anchor throughout.',
    ],
    commonMistakes: [
      'Failing to re-chamber, resulting in pushing the same extended foot through targets.',
      'Toes pointing up or flat foot, risking ankle injury.',
      'Landing stiffly and falling forward.',
    ],
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1000&auto=format&fit=crop',
  },

  // ===========================================================================
  // 11. JUMPING QUINTUPLE SIDE KICKS -- O-DAN YEOP CHAGI (공중 5단 옆차기)
  // ===========================================================================
  {
    id: 'jumping-quintuple-side-kicks',
    slug: 'jumping-quintuple-side-kicks-o-dan-yeop-chagi',
    name: 'Jumping Quintuple Side Kicks',
    koreanName: '공중 5단 옆차기 (오단 옆차기)',
    romanized: 'O-dan Yeop Chagi',
    category: 'kicking-advanced',
    difficulty: 'Elite',
    beltLevel: 'Grandmaster & World Demo Specialist',
    badgeColor: '#A855F7',
    kickTrajectory: 'multi-strike',
    airbornePhase: 'Monumental Glide Flight -> 5 Piston Side Thrusts (1-2-3-4-5) -> Chamber -> Safe Landing Deceleration',
    targetCount: 5,
    strikingSurface: 'Knife Foot Blade (Balnal) / Heel (Dwikkumchi)',
    targetArea: '5 Targets Staggered along an Aerial Flight Line',
    summary:
      'One of the most extraordinary technical spectacles in world martial arts. The elite master leaps into prolonged horizontal flight and pumps five distinct, powerful side kicks through five separate targets before touching the mat. It demands peerless hip flexor endurance, unyielding core rigidity, and supreme aerial hang-time.',
    meaning:
      'Transcendent aerial suspension, five-fold linear piston barrage, unbreakable lateral alignment, and absolute mastery over inertia.',
    balanceAndPosture:
      'Rigid horizontal alignment; non-kicking leg clamped tightly to ribs; razor-sharp Balnal foot positioning.',
    corePrinciples: [
      {
        title: 'Monumental Glide Mechanics',
        desc: 'Combine high forward sprint velocity with explosive upward impulse for prolonged aerial suspension.',
      },
      {
        title: 'Five-Strike Ultrasonic Piston Cadence',
        desc: 'Cycle the leg five times with full extension and deep re-chambering in under 1.2 seconds.',
      },
      {
        title: 'Immaculate Balnal Consistency',
        desc: 'Lock the foot blade into a rigid weapon on every single strike without toe flaring.',
      },
      {
        title: 'Lateral Core Beam Integrity',
        desc: 'Prevent spinal sag or rotational drift; maintain a laser-straight lateral plane.',
      },
      {
        title: 'Deceleration Momentum Dissipation',
        desc: 'Dissipate massive forward flight momentum safely upon touchdown with deep joint flexion.',
      },
    ],
    skillPrerequisites: {
      physical: [
        'World-class horizontal/vertical jump hang-time.',
        'Unmatched gluteus medius and hip flexor rapid-fire endurance.',
        'Supreme core lateral stability.',
        'High-impact landing durability.',
      ],
      technical: [
        'Mastery of Jumping Triple Side Kicks (Sam-dan Yeop Chagi).',
        'Flawless Balnal foot formation at extreme speeds.',
        'Precision targeting across 5 consecutive targets.',
      ],
      mental: [
        'Supreme focus and rhythm under high demonstration pressure.',
        'Fearless aerial glide commitment.',
      ],
    },
    trainingProcess: [
      {
        stepNumber: 1,
        title: '5-Count Rapid Side Kick Wall Pump',
        details: [
          'Hold wall and pump 5 full side kicks in under 1.2 seconds without lowering knee.',
          'Build extraordinary muscular endurance in gluteus medius and tensor fasciae latae.',
        ],
      },
      {
        stepNumber: 2,
        title: 'Spring Floor & Bounding Chamber Drills',
        details: [
          'Practice 5-count rapid aerial chamber pumping on spring floor or trampoline.',
          'Verify that torso stays completely sideways.',
        ],
      },
      {
        stepNumber: 3,
        title: '4-Target Flying Progression',
        details: [
          'Master breaking 4 staggered targets before adding the fifth.',
        ],
      },
      {
        stepNumber: 4,
        title: 'Full 5-Target Aerial Flight',
        details: [
          'Accelerate into aggressive approach, launch into horizontal glide.',
          'Deliver 5 rapid piston strikes through 5 staggered targets.',
          'Retract fifth kick cleanly.',
        ],
      },
      {
        stepNumber: 5,
        title: 'Decelerative Landing & Poise',
        details: [
          'Touch down softly on crash mats, roll forward or absorb deeply through knees.',
          'Recover immediately into fighting stance.',
        ],
      },
    ],
    drillingMethods: {
      isolation: [
        'High-Repetition Banded Lateral Kicks (sets of 20 rapid pumps).',
        'Side plank isometric holds with pulse kicks.',
      ],
      speedAndTiming: [
        '5-Paddle Horizontal Station: 5 holders staggered across flight path; strike all five with consecutive audio cracks.',
      ],
      power: [
        'Weighted approach leaps and depth-jump lateral broad jumps.',
      ],
      freestyleTricking: [
        'Legendary 5-Board Aerial Break (Kukkiwon World Tour Specialty).',
      ],
      safety: [
        'Always practice over long safety crash mat runways.',
        'Ensure landing zone is completely clear of target holders and obstacles.',
      ],
    },
    commonMistakesAndCorrections: [
      {
        mistake: 'The final 2 kicks become weak knee shakes without extending.',
        correction: 'Build explosive glute endurance; retract knee all the way to chest on every rep.',
      },
      {
        mistake: 'Athlete loses height prematurely and collides with fourth or fifth target holder.',
        correction: 'Increase approach speed and takeoff lift; ensure targets are properly calibrated for flight trajectory.',
      },
    ],
    performanceAndApplication: {
      competition: 'The highest tier demonstration event in the World Taekwondo Hanmadang.',
      poomsae: 'Exhibition specialty demonstrating the outer limits of Taekwondo human performance.',
      demonstration: 'Historic 5-board aerial flying break.',
      combinations: [
        'Sprint -> O-dan Yeop Chagi -> Gymnastic Roll -> High Guard',
      ],
    },
    recoveryAndConditioning: {
      flexibility: [
        'Extensive hip abductor, adductor, and hamstring stretching.',
        'Icing hip joints and lower back decompression.',
      ],
      strengthening: [
        'Barbell hip thrusts, cable lateral kicks, and heavy lunges.',
      ],
      mobility: [
        'Ankle stability wobble board drills and foot arch therapy.',
      ],
    },
    steps: [
      'Sprint aggressively into a powerful single-leg hurdle takeoff.',
      'Soar horizontally, tuck non-kicking leg tightly against ribs, and lock body into side plane.',
      'Fire Kick 1 and immediately retract.',
      'Fire Kick 2 and retract.',
      'Fire Kick 3 and retract.',
      'Fire Kick 4 and retract.',
      'Fire Kick 5 at the apex summit through the final target.',
      'Retract leg, absorb forward momentum on crash mat with deep knee bend, and recover.',
    ],
    keyDetails: [
      'Five distinct, bone-aligned side kicks must be delivered in a single leap.',
      'Striking weapon must be strictly Balnal (foot blade) or heel.',
      'Requires over 1.2 seconds of horizontal glide time.',
    ],
    commonMistakes: [
      'Running out of altitude and kicking the final targets while descending to the floor.',
      'Flat foot or unaligned toes causing blunt joint trauma.',
    ],
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1000&auto=format&fit=crop',
  },

  // ===========================================================================
  // 12. JUMPING MULTIPLE KICKS -- MODUM BAL CHAGI (공중 다단 연속 발차기)
  // ===========================================================================
  {
    id: 'jumping-multiple-kicks',
    slug: 'jumping-multiple-kicks-modum-bal-chagi',
    name: 'Jumping Multiple Kicks',
    koreanName: '공중 다단 발차기 (모둠 다단차기)',
    romanized: 'Modum Bal Chagi',
    category: 'kicking-advanced',
    difficulty: 'Elite',
    beltLevel: 'Black Belt & Demo Team',
    badgeColor: '#A855F7',
    kickTrajectory: 'multi-strike',
    airbornePhase: 'Explosive Takeoff -> Aerial Multi-Technique Combination (Front -> Round -> Hook) -> Re-Chamber -> Landing',
    targetCount: 3,
    strikingSurface: 'Ap-chook, Baldeung, and Dwikkumchi (Multi-Surface)',
    targetArea: 'Multiple Combat Target Planes (Abdomen, Head, Face)',
    summary:
      'An advanced aerial freestyle combination where the athlete leaps into the air and delivers a sequence of different kicking techniques (e.g. Front Kick -> Roundhouse Kick -> Hook Kick or Side Kick) within a single jump. It showcases supreme body control, multi-planar hip agility, and creative martial arts tricking mastery.',
    meaning:
      'Poly-technical aerial synthesis, multi-planar hip manipulation, fluid transitional momentum, and adaptive combat striking.',
    balanceAndPosture:
      'Dynamically shift upper body posture to counterbalance changing kick planes; maintain core tightness and land safely on flexed knees.',
    corePrinciples: [
      {
        title: 'Multi-Planar Hip Manipulation',
        desc: 'Seamlessly shift hips from linear (front) to horizontal (roundhouse) to rotational (hook) in mid-air.',
      },
      {
        title: 'Transitional Momentum Preservation',
        desc: 'Channel the recoil of each kick directly into the chamber of the next without losing altitude.',
      },
      {
        title: 'Multi-Weapon Foot Articulation',
        desc: 'Shape Ap-chook (ball), Baldeung (instep), and Dwikkumchi (heel) with surgical precision in flight.',
      },
      {
        title: 'Gyroscopic Aerial Balance',
        desc: 'Use head spotting and arm counterweights to stabilize rotational shifts in mid-air.',
      },
      {
        title: 'Adaptive Shock-Absorbing Landing',
        desc: 'Anticipate landing orientation and touch down softly with flexed knees in active guard.',
      },
    ],
    skillPrerequisites: {
      physical: [
        'High vertical elevation and aerial hang-time.',
        'Exceptional multi-directional hip mobility.',
        'High rotational and linear core strength.',
        'Dynamic ankle and knee landing elasticity.',
      ],
      technical: [
        'Mastery of jumping front, roundhouse, and hook kicks individually.',
        'Ability to alter foot and hip shapes rapidly in mid-air.',
      ],
      mental: [
        'Creative spatial visualization.',
        'Rhythmic flow and adaptability in flight.',
      ],
    },
    trainingProcess: [
      {
        stepNumber: 1,
        title: 'Standing Poly-Kick Transitions',
        details: [
          'Practice Front Kick -> Roundhouse Kick -> Hook Kick without touching foot to floor.',
          'Focus on smooth hip shifts and distinct striking surfaces.',
        ],
      },
      {
        stepNumber: 2,
        title: 'Two-Kick Aerial Combinations',
        details: [
          'Jump and execute Front Kick + Roundhouse Kick.',
          'Master the transition between vertical and horizontal hip planes.',
        ],
      },
      {
        stepNumber: 3,
        title: 'Three-Kick Aerial Sequence Formulation',
        details: [
          'Combine Front Kick -> Roundhouse Kick -> Hook Kick in mid-air over a soft mat.',
          'Focus on distinct audio snaps for all three strikes.',
        ],
      },
      {
        stepNumber: 4,
        title: 'Target Pad & Board Integration',
        details: [
          'Execute sequence against 3 distinct target pads held at varying angles and heights.',
        ],
      },
      {
        stepNumber: 5,
        title: 'Landing Stabilization',
        details: [
          'Touch down softly on balls of feet, absorb impact, and recover guard instantly.',
        ],
      },
    ],
    drillingMethods: {
      isolation: [
        'Suspended multi-kick chamber holds.',
        'Rotational core medicine ball drills.',
      ],
      speedAndTiming: [
        'Triple-Angle Pad Drill: Coach holds 3 pads requiring 3 different foot weapons; strike with rapid staccato timing.',
      ],
      power: [
        'Heavy bag multi-kick aerial blasts.',
      ],
      freestyleTricking: [
        'Freestyle Poomsae creative combination sequences.',
        'Acrobatic demonstration breaks.',
      ],
      safety: [
        'Always practice initial combinations on thick safety mats.',
        'Do not force complex rotations if jump height is inadequate.',
      ],
    },
    commonMistakesAndCorrections: [
      {
        mistake: 'All kicks blur together into vague diagonal scoops.',
        correction: 'Enforce distinct chambers: linear front chamber, horizontal roundhouse chamber, outside hook chamber.',
      },
      {
        mistake: 'Losing orientation and landing facing away from target.',
        correction: 'Keep eyes spotting the final target throughout the sequence.',
      },
    ],
    performanceAndApplication: {
      competition: 'World Taekwondo Freestyle Poomsae high-difficulty creative combination scoring.',
      poomsae: 'Freestyle Poomsae mandatory multi-kick aerial sequences.',
      demonstration: 'Spectacular mixed-target multi-angle board breaking.',
      combinations: [
        'Jumping Front -> Round -> Hook Kick Combination',
        'Jumping Round -> Side -> Back Kick Combination',
      ],
    },
    recoveryAndConditioning: {
      flexibility: [
        'Multi-angle hip mobility flossing and deep lunge stretches.',
        'Spinal rotational stretches.',
      ],
      strengthening: [
        'Full-body plyometric workouts and core rotational medicine ball work.',
      ],
      mobility: [
        'Ankle CARs and foam rolling IT bands and glutes.',
      ],
    },
    steps: [
      'Take off with explosive vertical elevation from combat stance.',
      'Fire first kick (Front Kick) linearly on ascent.',
      'Invert hips horizontally and whip second kick (Roundhouse Kick) at mid-flight.',
      'Rotate hips and snap third kick (Hook Kick or Side Kick) at the apex.',
      'Re-chamber final kick, spot landing, and touch down softly in balanced guard.',
    ],
    keyDetails: [
      'Must demonstrate 3 completely different kicking techniques in a single leap.',
      'Foot shapes must shift cleanly between Ap-chook, Baldeung, and Dwikkumchi.',
      'Landing must be stable and completely controlled.',
    ],
    commonMistakes: [
      'Muddled foot shapes where all strikes hit with the same part of the foot.',
      'Failing to re-chamber between kicks.',
    ],
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1000&auto=format&fit=crop',
  },

  // ===========================================================================
  // 13. JUMPING BACK KICK -- TTWIE DWI CHAGI (뛰어 뒤차기)
  // ===========================================================================
  {
    id: 'jumping-back-kick',
    slug: 'jumping-back-kick-twio-dwi-chagi',
    name: 'Jumping Back Kick',
    koreanName: '뛰어 뒤차기',
    romanized: 'Twio Dwi Chagi',
    category: 'kicking-advanced',
    difficulty: 'Advanced',
    beltLevel: 'Red Belt & Above',
    badgeColor: '#0042EA',
    kickTrajectory: 'thrust',
    airbornePhase: 'Turn & Lift Takeoff -> 180° Airborne Pivot -> Piston Heel Thrust -> Linear Recovery',
    targetCount: 1,
    strikingSurface: 'Direct Heel Bone (Dwikkumchi)',
    targetArea: 'Solar Plexus, Liver, Sternum, Chest Protector Axis',
    summary:
      'An explosive airborne linear thrust where the practitioner leaps into the air, turns 180° mid-flight, tucks both knees together, and drives the heel straight backward like a heavy battering ram into the target. It is one of the most powerful counter-attack and board-breaking weapons in Taekwondo.',
    meaning:
      'Blind aerial linear penetration, concealed rotational setup, devastating piston heel drive, and rock-solid landing stability.',
    balanceAndPosture:
      'Lean upper body forward slightly to counterbalance the rearward heel drive; keep knees brushing together; spot target over shoulder.',
    corePrinciples: [
      {
        title: 'Concealed 180° Airborne Turn',
        desc: 'Disguise the strike with a rapid mid-air half-turn that brings the back directly toward the target.',
      },
      {
        title: 'Straight-Line Piston Trajectory',
        desc: 'Drive the heel backward along a straight horizontal rail—never swing the leg in an outward arc.',
      },
      {
        title: 'Heel-Centered Impact Architecture',
        desc: 'Lock the ankle into dorsiflexion and direct all kinetic energy through the center of the heel bone.',
      },
      {
        title: 'Rapid Shoulder Spotting',
        desc: 'Turn head over the kicking shoulder to establish visual contact before releasing the thrust.',
      },
      {
        title: 'Controlled Forward-Facing Recovery',
        desc: 'Re-chamber kicking leg immediately after impact and land in a stable, defensive fighting stance.',
      },
    ],
    skillPrerequisites: {
      physical: [
        'Powerful gluteus maximus and spinal erector extension strength.',
        'Explosive vertical jump takeoff power.',
        'Strong core bracing to prevent lower back hyper-extension.',
        'Hamstring and lower back dynamic flexibility.',
      ],
      technical: [
        'Mastery of stationary Back Kick (Dwit Chagi).',
        'Head-turning spotting mechanics.',
        'Airborne tight-knee chambering (knees brushing together).',
      ],
      mental: [
        'Spatial awareness when striking behind the body.',
        'Fearless timing on counter-attack execution.',
      ],
    },
    trainingProcess: [
      {
        stepNumber: 1,
        title: 'Stationary Back Kick Review & Mirror Alignment',
        details: [
          'Review floor Back Kick; ensure knees brush together and heel drives straight back.',
          'Verify that toes point downward and heel points upward-horizontal.',
        ],
      },
      {
        stepNumber: 2,
        title: 'Jump 180° Turn & Chamber Drill',
        details: [
          'Jump vertically, turn 180° in mid-air, spot target over shoulder, and pull knees tightly to chest.',
          'Land softly without kicking to master aerial turn and balance.',
        ],
      },
      {
        stepNumber: 3,
        title: 'Jump Back Kick against Heavy Shield',
        details: [
          'Jump, turn 180°, spot target, drive heel straight back into partner’s heavy chest shield.',
          'Experience the solid kinetic transfer.',
        ],
      },
      {
        stepNumber: 4,
        title: 'Full Speed Aerial Execution',
        details: [
          'Execute rapid jumping back kick from bounce step.',
          'Strike target at apex of jump and re-chamber immediately.',
        ],
      },
      {
        stepNumber: 5,
        title: 'Landing & Face-to-Face Recovery',
        details: [
          'Complete turn back to front, touch down on flexed knees, raise guard.',
        ],
      },
    ],
    drillingMethods: {
      isolation: [
        'Wall-Glancing Drill: Stand next to wall and execute jumping back kick without brushing wall.',
        'Barbell hip thrusts for glute power.',
      ],
      speedAndTiming: [
        'Rushing Opponent Intercept: Partner rushes forward with shield; athlete leaps and intercepts with jumping back kick.',
        'Timed whistle reaction counters.',
      ],
      power: [
        'Heavy Bag Blast: Drive heavy bag back with full heel impact at jump peak.',
        '3-board power breaking.',
      ],
      freestyleTricking: [
        'Jumping Back Kick over obstacles.',
        'Spinning Back Kick into Jump Back Kick combos.',
      ],
      safety: [
        'Never kick blind; eyes must spot target over shoulder before leg extends.',
        'Brace core to protect lumbar spine from jarring impact.',
      ],
    },
    commonMistakesAndCorrections: [
      {
        mistake: 'Leg swings wide in an arc like a side kick, losing straight-line penetration.',
        correction: 'Ensure both knees brush together tightly during the chamber before driving heel straight back.',
      },
      {
        mistake: 'Kicking blind without turning head to look over shoulder.',
        correction: 'Head turns FIRST; spot the target with your eyes before releasing the leg.',
      },
      {
        mistake: 'Torso falls forward excessively, losing balance on touchdown.',
        correction: 'Engage abdominal wall; lean forward only enough to counterbalance the kick.',
      },
    ],
    performanceAndApplication: {
      competition:
        'A devastating 4-point counter technique in Olympic Kyorugi, capable of stopping aggressive rushers dead in their tracks.',
      poomsae: 'Demonstration and advanced martial arts testing.',
      demonstration: 'Heavy pine board and concrete block breaking.',
      combinations: [
        'Front Kick Bait -> Jumping Back Kick Counter',
        'Roundhouse Feint -> 180° Jumping Back Kick',
      ],
    },
    recoveryAndConditioning: {
      flexibility: [
        'Pigeon pose glute stretch and seated hamstring stretches.',
        'Thoracic rotational stretches.',
      ],
      strengthening: [
        'Romanian deadlifts, glute bridges, and kettlebell swings.',
        'Plyometric box jumps and depth drops.',
      ],
      mobility: [
        'Lumbar spine gentle decompression and hip capsule rotations.',
      ],
    },
    steps: [
      'From combat stance, initiate 180° turn on lead foot while driving arms upward.',
      'Leap into the air, turn head over kicking shoulder to spot target.',
      'Tuck both knees together tightly in front of chest.',
      'Drive kicking heel straight backward like a piston into target center.',
      'Re-chamber leg, complete rotation, and land softly in balanced fighting stance.',
    ],
    keyDetails: [
      'Linear trajectory: The kick must travel straight back, never in a hook or circle.',
      'Weapon: Center of the heel bone (Dwikkumchi) with toes pulled downward.',
      'Spotting: Visual target acquisition is mandatory before the heel extends.',
    ],
    commonMistakes: [
      'Swinging the leg around in an arc like an awkward spinning side kick.',
      'Kicking without looking over the shoulder.',
      'Landing stiff-legged.',
    ],
    image: 'https://images.unsplash.com/photo-1555597673-b21d5c935865?q=80&w=1000&auto=format&fit=crop',
  },

  // ===========================================================================
  // 14. JUMPING SPLIT KICK -- DWIT NARAE CHAGI / GAWI BEOLLYAEO CHAGI (가위벌려차기)
  // ===========================================================================
  {
    id: 'jumping-split-kick',
    slug: 'jumping-split-kick-dwit-narae-chagi',
    name: 'Jumping Split Kick',
    koreanName: '뒤나래차기 (가위벌려차기)',
    romanized: 'Dwit Narae Chagi',
    category: 'kicking-advanced',
    difficulty: 'Elite',
    beltLevel: 'Black Belt & Demo Team',
    badgeColor: '#A855F7',
    kickTrajectory: 'scissor',
    airbornePhase: 'Vertical Spring Takeoff -> Bilateral 180° Mid-Air Split -> Simultaneous Impact -> Elastic Recoil & Landing',
    targetCount: 2,
    strikingSurface: 'Ball of foot (Ap-chook) or outer blade/heel on both feet',
    targetArea: 'Two Opponents / Targets Positioned Simultaneously to Left & Right Flanks',
    summary:
      'A breathtaking acrobatic martial arts technique where the practitioner leaps straight up into the air, splits both legs simultaneously to the sides (approaching or achieving a full 180° mid-air straddle split), and strikes two separate targets on opposite flanks at the flight apex before snapping both legs closed for a poised landing.',
    meaning:
      'Bilateral simultaneous devastation, symmetric aerial geometry, extreme adductor flexibility, core centering, and aesthetic martial poise.',
    balanceAndPosture:
      'Keep torso perfectly vertical in center; split legs symmetrically; touch hands to toes/guard; land with feet together in deep shock absorption.',
    corePrinciples: [
      {
        title: 'Symmetric Vertical Elevation',
        desc: 'Jump strictly upward with both legs firing symmetrically to maintain a dead-center flight axis.',
      },
      {
        title: 'Simultaneous Bilateral Split',
        desc: 'Open both legs simultaneously at the apex into a 180° lateral straddle split.',
      },
      {
        title: 'Synchronized Twin Impact',
        desc: 'Deliver equal kinetic force to targets on both the left and right flanks at the exact same millisecond.',
      },
      {
        title: 'Rapid Elastic Inseam Recoil',
        desc: 'Snap both legs back together immediately after impact using adductor contraction.',
      },
      {
        title: 'Centered Shock-Absorbing Landing',
        desc: 'Touch down with feet shoulder-width apart, knees flexed, absorbing ground reaction forces symmetrically.',
      },
    ],
    skillPrerequisites: {
      physical: [
        'Near-complete or complete 180° horizontal straddle split flexibility.',
        'High vertical jump elevation.',
        'Fast-twitch adductor and hip abductor muscle power.',
        'Symmetric bilateral landing durability.',
      ],
      technical: [
        'Mastery of straddle jumps and mid-air toe touches.',
        'Ability to shape foot weapons symmetrically on both sides.',
        'Bilateral target awareness.',
      ],
      mental: [
        'Confidence to commit to a full split mid-air.',
        'Calmness and posture control in flight.',
      ],
    },
    trainingProcess: [
      {
        stepNumber: 1,
        title: 'Straddle Split Flexibility & PNF Conditioning',
        details: [
          'Perform deep frog stretches, seated straddle stretches, and active PNF split holds.',
          'Develop full 180° passive and active abduction range.',
        ],
      },
      {
        stepNumber: 2,
        title: 'Trampoline Straddle Jump Drills',
        details: [
          'Practice straddle jumps on trampoline or spring floor.',
          'Touch toes in mid-air at jump apex and snap legs closed before landing.',
        ],
      },
      {
        stepNumber: 3,
        title: 'Flat Mat Vertical Split Jumps',
        details: [
          'Leap vertically off flat floor; open legs into wide split and close them before touchdown.',
          'Ensure chest remains vertical and hands touch toes or stay in guard.',
        ],
      },
      {
        stepNumber: 4,
        title: 'Dual Target Impact Practice',
        details: [
          'Two partners hold kicking paddles on left and right sides at chest/head height.',
          'Leap and strike both paddles simultaneously with crisp audio pop.',
        ],
      },
      {
        stepNumber: 5,
        title: 'Landing & Poise Recovery',
        details: [
          'Snap legs together, touch down softly with flexed knees, establish centered guard.',
        ],
      },
    ],
    drillingMethods: {
      isolation: [
        'Wall Straddle Gravity Stretch: Lie on back with legs up against wall, letting gravity pull legs into full split.',
        'Suspended elastic band split rebounds.',
      ],
      speedAndTiming: [
        'Simultaneous Double Board Break: Two holders hold pine boards on left and right; athlete breaks both at jump apex.',
        'Metronome split jump drills.',
      ],
      power: [
        'Weighted vertical jump squats followed by unweighted straddle jumps.',
      ],
      freestyleTricking: [
        'Integration into Freestyle Poomsae aerial showcase routines.',
        'Acrobatic demonstration specialty.',
      ],
      safety: [
        'Warm up groins and adductors thoroughly to prevent groin pulls.',
        'Snap legs closed before landing to avoid landing in an over-split position.',
      ],
    },
    commonMistakesAndCorrections: [
      {
        mistake: 'One leg splits higher than the other, causing an asymmetric tilt.',
        correction: 'Work on bilateral adductor flexibility; practice in front of a mirror or camera.',
      },
      {
        mistake: 'Torso folds forward excessively, causing athlete to land on hands or face.',
        correction: 'Keep chest high and proud; pull legs UP to hands rather than dropping chest to legs.',
      },
      {
        mistake: 'Failing to close legs before landing, risking severe knee and groin hyperextension.',
        correction: 'Actively squeeze adductors to snap legs together immediately upon striking.',
      },
    ],
    performanceAndApplication: {
      competition: 'World Taekwondo Hanmadang Aerial Demonstration and Freestyle Poomsae.',
      poomsae: 'Exhibition form element demonstrating flexibility and vertical jump power.',
      demonstration: 'Iconic dual lateral board break performed by two target holders flanking the athlete.',
      combinations: [
        'Approach -> Jumping Split Kick -> Land -> Spin Hook Kick',
      ],
    },
    recoveryAndConditioning: {
      flexibility: [
        'Pigeon pose, frog stretch, and supine wall straddles.',
        'Adductor foam rolling and ice therapy.',
      ],
      strengthening: [
        'Adductor machine squeezes and wide-stance sumo squats.',
        'Hanging straddle leg raises.',
      ],
      mobility: [
        'Hip capsule internal/external rotation mobility CARs.',
      ],
    },
    steps: [
      'Plant both feet symmetrically and explode upward into maximal vertical elevation.',
      'As body reaches apex, violently abduct both legs into full 180° straddle split.',
      'Strike targets simultaneously on both left and right flanks with balls or blades of feet.',
      'Instantly squeeze adductor muscles to snap both legs back together.',
      'Touch down softly on balls of feet with knees flexed, absorbing impact symmetrically.',
    ],
    keyDetails: [
      'Both strikes must hit at the exact same millisecond with equal force.',
      'Torso remains upright and centered on the vertical axis throughout flight.',
      'Legs must snap closed before landing to protect joints.',
    ],
    commonMistakes: [
      'Asymmetric split where one leg is noticeably lower.',
      'Dropping chest forward instead of keeping posture upright.',
      'Landing with legs still spread wide.',
    ],
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1000&auto=format&fit=crop',
  },

  // ===========================================================================
  // 15. SCISSOR KICK -- GAWI CHAGI (가위차기)
  // ===========================================================================
  {
    id: 'scissor-kick',
    slug: 'scissor-kick-gawi-chagi',
    name: 'Scissor Kick',
    koreanName: '가위차기 (Gawi Chagi)',
    romanized: 'Gawi Chagi',
    category: 'kicking-advanced',
    difficulty: 'Elite',
    beltLevel: '3rd Dan Black Belt & Above',
    badgeColor: '#EF2F38',
    kickTrajectory: 'scissor',
    airbornePhase: 'Explosive Scissor Takeoff -> Dual Staggered Plane Extension -> Simultaneous Clamping Strike -> Landing',
    targetCount: 2,
    strikingSurface: 'Knife Foot Blade (Balnal) / Ball of Foot (Ap-chook) across staggered targets',
    targetArea: 'Target 1: Lower Trunk / Knee Joint; Target 2: Neck / Head (Staggered Height Dual Strike)',
    summary:
      'An iconic, highly specialized Taekwondo kicking technique (featured in Koryo, Keumgang, and advanced forms). The practitioner launches into the air and delivers two simultaneous kicks along staggered height planes—one leg striking low/mid while the other strikes high—resembling a giant pair of shearing scissors. It can be executed as a dual simultaneous strike or an airborne scissor clamp takedown.',
    meaning:
      'Dual-level shearing force, staggered geometric interception, multi-target martial efficacy, and explosive scissor dynamics.',
    balanceAndPosture:
      'Maintain diagonal torso poise; lock core to stabilize the divergent forces of the two legs; absorb landing safely on the supporting leg.',
    corePrinciples: [
      {
        title: 'Staggered Dual-Level Shearing',
        desc: 'One leg strikes low/mid while the other strikes high simultaneously, creating a shearing scissor dynamic.',
      },
      {
        title: 'Divergent Vector Balance',
        desc: 'Counterbalance the forward-low thrust with the upward-high strike through intense core stabilization.',
      },
      {
        title: 'Dual Foot Weapon Precision',
        desc: 'Shape both feet into appropriate weapons (e.g. Balnal on one, Ap-chook on the other) in mid-air.',
      },
      {
        title: 'Simultaneous Impact Convergence',
        desc: 'Both strikes must reach full extension and impact at the exact same instant.',
      },
      {
        title: 'Unified Recovery & Cushioning',
        desc: 'Re-chamber both legs from divergent planes and land safely in a solid stance.',
      },
    ],
    skillPrerequisites: {
      physical: [
        'High core oblique and pelvic stability.',
        'Explosive vertical and scissor jump power.',
        'High dynamic flexibility in both linear and lateral planes.',
        'Single-leg landing shock absorption.',
      ],
      technical: [
        'Mastery of Side Kick (Yop Chagi) and Front/Roundhouse kicks independently.',
        'Ability to coordinate two legs firing on different planes simultaneously.',
        'Understanding of scissor leverage mechanics.',
      ],
      mental: [
        'Multi-target spatial visualization.',
        'High coordination and timing discipline.',
      ],
    },
    trainingProcess: [
      {
        stepNumber: 1,
        title: 'Floor Scissor Positioning & Shape Review',
        details: [
          'Lie on side/back on floor and practice extending one leg high and one leg low in scissor geometry.',
          'Engrain the divergent muscle contractions without gravity.',
        ],
      },
      {
        stepNumber: 2,
        title: 'Standing Scissor Chamber Drills',
        details: [
          'Stand on one leg, chamber both legs in opposing directions with partner support.',
          'Verify that foot shapes and lines are crisp and martial.',
        ],
      },
      {
        stepNumber: 3,
        title: 'Airborne Scissor Jump Elevation',
        details: [
          'Jump vertically, snap one leg low and one leg high at the jump apex.',
          'Focus on simultaneous impact timing.',
        ],
      },
      {
        stepNumber: 4,
        title: 'Dual Staggered Target Strike',
        details: [
          'Two partners hold targets: one at waist/rib level, one at neck/head level.',
          'Leap and strike both targets with a single explosive scissor snap.',
        ],
      },
      {
        stepNumber: 5,
        title: 'Landing & Guard Recovery',
        details: [
          'Retract both legs, touch down with flexed knees, establish solid defensive guard.',
        ],
      },
    ],
    drillingMethods: {
      isolation: [
        'Wall-Supported Scissor Holds: Hold wall and extend low and high legs for 5-10 seconds.',
        'Hanging bar scissor flutters.',
      ],
      speedAndTiming: [
        'Dual Staggered Paddle Crack: Coach holds paddles at 3ft and 6ft; athlete must break both with simultaneous sound.',
      ],
      power: [
        'Heavy bag scissor compression drills.',
        'Weighted plyometric jumps.',
      ],
      freestyleTricking: [
        'Scissor kick board breaking in demonstration routines.',
        'Airborne scissor takedown simulations on crash mats.',
      ],
      safety: [
        'Never land with either leg extended; always re-chamber to protect knees and hips.',
        'Practice on safety mats during initial training.',
      ],
    },
    commonMistakesAndCorrections: [
      {
        mistake: 'One leg kicks first and the other kicks late (staggered timing).',
        correction: 'Both kicks must lock out at the EXACT same millisecond.',
      },
      {
        mistake: 'Low leg is limp and lacks power or proper foot blade shaping.',
        correction: 'Engage glutes and quadriceps on the lower leg; push heel through target.',
      },
      {
        mistake: 'Torso collapses backward from divergent forces.',
        correction: 'Brace abdominal wall; imagine locking a rigid steel corset around your midsection.',
      },
    ],
    performanceAndApplication: {
      competition: 'Classic traditional poomsae application and high-dan rank demonstration showcase.',
      poomsae: 'Demonstrated in advanced black belt poomsae applications and Hosinsul self-defense.',
      demonstration: 'Spectacular dual-level board breaking demonstrating precision and geometry.',
      combinations: [
        'Step-In Scissor Kick -> Land -> Reverse Punch',
        'Scissor Kick -> Roll Recovery -> Rising Kick',
      ],
    },
    recoveryAndConditioning: {
      flexibility: [
        'Full body hamstring, adductor, and hip flexor stretching.',
        'Spinal rotational mobility exercises.',
      ],
      strengthening: [
        'Single-leg deadlifts, Bulgarian split squats, and core anti-rotation presses.',
      ],
      mobility: [
        'Hip capsule CARs and ankle joint mobilization.',
      ],
    },
    steps: [
      'Take off explosively from fighting stance using scissor spring propulsion.',
      'In mid-air, chamber both legs rapidly toward chest.',
      'Simultaneously snap one leg low/mid and the other leg high along divergent planes.',
      'Strike both targets at the exact apex of flight.',
      'Re-chamber both legs, descend smoothly, and absorb landing on flexed knees.',
    ],
    keyDetails: [
      'Simultaneous impact: Both targets must be struck at the exact same instant.',
      'Divergent planes: One leg attacks lower trunk/groin, other attacks head/neck.',
      'Foot shaping: Clean foot weapons (Balnal on side strike, Ap-chook on front strike).',
    ],
    commonMistakes: [
      'Kicking one leg after the other instead of true simultaneous scissor action.',
      'Limp lower leg with poor foot shaping.',
      'Landing heavily without re-chambering.',
    ],
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1000&auto=format&fit=crop',
  },
]
