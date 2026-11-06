/**
 * ==============================================================================
 * WORLD TAEKWONDO COMPETITION RULES MULTILINGUAL DICTIONARY (EN, KM, ZH, KO)
 * ==============================================================================
 * Complete official translations for WT Kyorugi, WT Poomsae, and Hanmadang:
 * - English (en): World Taekwondo Official English Rules
 * - Khmer (km): សៀវភៅច្បាប់ប្រកួតផ្លូវការ សហព័ន្ធតេក្វាន់ដូកម្ពុជា (CFTA / WT)
 * - Chinese (zh): 世界跆拳道联合会 (WT) 官方竞赛规则与裁判指南
 * - Korean (ko): 세계태권도연맹 (WT) 공인 경기 규칙 및 국기원 해설서
 * ==============================================================================
 */

export interface CompetitionRulesDictionary {
  badgeAssembly: string
  badgeInForce: string
  heroTitle: string
  heroSubtitle: string
  btnTables: string
  btnMindmap: string
  btnPdf: string
  previewBadge: string

  masterCategories: {
    kyorugi: { label: string; sub: string; tag: string }
    poomsae: { label: string; sub: string; tag: string }
    hanmadang: { label: string; sub: string; tag: string }
  }

  mindmap: {
    title: string
    sub: string
    root: string
    kyorugiBranch: string
    poomsaeBranch: string
    hanmadangBranch: string
    k1: string
    k1Val: string
    k2: string
    k2Val: string
    k3: string
    k3Val: string
    k4: string
    k4Val: string
    p1: string
    p1Val: string
    p2: string
    p2Val: string
    p3: string
    p3Val: string
    p4: string
    p4Val: string
    h1: string
    h1Val: string
    h2: string
    h2Val: string
    h3: string
    h3Val: string
  }

  kyorugiTabs: {
    overview: string
    divisions: string
    scoring: string
    safety: string
    guide: string
  }

  poomsaeTabs: {
    common: string
    recognized: string
    freestyle: string
  }

  // Kyorugi Sub-section 1: Overview & Venue
  overview: {
    govTitle: string
    govBadge: string
    govDesc: string
    standardTitle: string
    standardDesc: string
    modTitle: string
    modDesc: string
    codeTitle: string
    codeDesc: string
    fopTitle: string
    fopSub: string
    alertBadge: string
    safetyOuter: string
    boundaryLine: string
    alertBand: string
    contestArea: string
    contestSub: string
    coachStation: string
    noTapeNote: string
    platformNote: string
    lightingTitle: string
    lightingTraining: string
    tempTitle: string
    humidityTitle: string
    officialsTitle: string
    officialsDesc: string
    refereeTitle: string
    refereeDesc: string
    judgesTitle: string
    judgesDesc: string
    taTitle: string
    taDesc: string
    csTitle: string
    csDesc: string
    signalsTitle: string
    signalsSub: string
  }

  // Kyorugi Sub-section 2: Divisions
  divisions: {
    title: string
    sub: string
    olympicMen: string
    olympicWomen: string
    worldSenior: string
    juniorTitle: string
    cadetTitle: string
    cadetSub: string
    btnCadetBoys: string
    btnCadetGirls: string
    colHeight: string
    colMinWeight: string
    colMaxWeight: string
  }

  // Kyorugi Sub-section 3: Scoring & Penalties
  scoring: {
    pointsTitle: string
    pointsSub: string
    colTarget: string
    colTechnique: string
    colPoints: string
    colBonus: string
    colDesc: string
    bestOf3Title: string
    bestOf3Badge: string
    bestOf3Desc: string
    tieBreakTitle: string
    tieBreak1: string
    tieBreak2: string
    tieBreak3: string
    tieBreak4: string
    gamjeomTitle: string
    gamjeomSub: string
    colCode: string
    colInfraction: string
    colPenalty: string
    colExplanation: string
    yellowCardTitle: string
    yellowCardDesc: string
    pointGapTitle: string
    pointGapDesc: string
  }

  // Kyorugi Sub-section 4: Safety & Health Bar
  safety: {
    equipmentTitle: string
    equipmentSub: string
    ivrTitle: string
    ivrBadge: string
    ivrDesc: string
    ivrAllowedTitle: string
    ivrAllowedItems: string[]
    ivrForbiddenTitle: string
    ivrForbiddenItems: string[]
    simTitle: string
    simSub: string
    chungLabel: string
    hongLabel: string
    btnPunch: string
    btnBodyKick: string
    btnHeadKick: string
    btnTurningBody: string
    btnTurningHead: string
    btnGamjeom: string
    btnPassive: string
    btnReset: string
    passiveAlert: string
    winnerChung: string
    winnerHong: string
    matchTie: string
    doctorTitle: string
    doctorDesc: string
  }

  // Kyorugi Sub-section 5: Beginner Guide
  guide: {
    title: string
    sub: string
    stage1Title: string
    stage1Desc: string
    stage2Title: string
    stage2Desc: string
    stage3Title: string
    stage3Desc: string
    stage4Title: string
    stage4Desc: string
    stage5Title: string
    stage5Desc: string
    goldenRulesTitle: string
    goldenRules: string[]
  }

  // Poomsae Common Foundation
  poomsaeCommon: {
    title: string
    sub: string
    fopDesc: string
    divisionsTitle: string
    divisionsSub: string
    poolsTitle: string
    poolsSub: string
    commandsTitle: string
    commandsSub: string
    colStep: string
    colFirst: string
    colSecond: string
    colProtocol: string
  }

  // Poomsae Recognized
  poomsaeRecognized: {
    title: string
    sub: string
    accuracyTitle: string
    accuracySub: string
    presentationTitle: string
    presentationSub: string
    minorTitle: string
    majorTitle: string
    proceduralTitle: string
    speedPower: string
    rhythmTempo: string
    energyExpression: string
    slowTitle: string
    slowSub: string
    colPoomsae: string
    colStance: string
    colTechnique: string
    colDuration: string
  }

  // Poomsae Freestyle
  poomsaeFreestyle: {
    title: string
    sub: string
    skillsTitle: string
    skillsSub: string
    calcTitle: string
    calcSub: string
    calcBaseLabel: string
    calcBonusLabel: string
    calcDeductionLabel: string
    calcTotalLabel: string
    breakingTitle: string
    breakingSub: string
    assistanceTitle: string
    assistanceSub: string
    deductionsTitle: string
    deductionsSub: string
  }

  // Hanmadang
  hanmadang: {
    title: string
    sub: string
    powerBreakingTitle: string
    specialKyokpaTitle: string
    creativeTitle: string
  }

  // PDF Viewer Modal
  pdfModal: {
    zoomIn: string
    zoomOut: string
    download: string
    close: string
    pageInfo: string
  }
}

export const competitionRulesI18n: Record<string, CompetitionRulesDictionary> = {
  en: {
    badgeAssembly: 'WT General Assembly Enforced',
    badgeInForce: 'In Force as of January 1, 2026',
    heroTitle: 'World Taekwondo Competition Rules & Regulations',
    heroSubtitle:
      'Authoritative rulebooks for Olympic Combat (WT Kyorugi), Technical Artistry (WT Poomsae), and Cultural Martial Arts (Hanmadang).',
    btnTables: 'Tables',
    btnMindmap: 'Mindmap Tree',
    btnPdf: 'PDF Mode',
    previewBadge: 'Preview',

    masterCategories: {
      kyorugi: { label: '1. WT Kyorugi', sub: 'Olympic Combat', tag: 'Best-of-3 System' },
      poomsae: { label: '2. WT Poomsae', sub: 'Forms & Freestyle', tag: 'Accuracy & Presentation' },
      hanmadang: { label: '3. Hanmadang', sub: 'Breaking & Demo', tag: 'Cultural Festival' },
    },

    mindmap: {
      title: 'Competition Rules Structural Mindmap',
      sub: 'Decision & Scoring Hierarchy',
      root: 'World Taekwondo Competition Rules & Regulations',
      kyorugiBranch: '1. WT Kyorugi (Olympic Combat)',
      poomsaeBranch: '2. WT Poomsae (Forms & Freestyle)',
      hanmadangBranch: '3. Hanmadang (Martial Festival)',
      k1: 'Best-of-3 System',
      k1Val: '3x 2-min (0-0 reset)',
      k2: 'PSS Point Values',
      k2Val: '1, 2, 3 pts (+2 turning)',
      k3: 'Gam-Jeom Penalties',
      k3Val: '+1 pt to opponent (5 = DSQ)',
      k4: 'IVR Challenge',
      k4Val: '1 card per match',
      p1: 'Common Foundation',
      p1Val: '10x10m FOP • Age Pools',
      p2: 'Recognized Poomsae',
      p2Val: 'Accuracy 4.0 + Pres 6.0',
      p3: 'Accuracy Deductions',
      p3Val: '-0.1 Minor / -0.3 Major',
      p4: 'Freestyle Scoring',
      p4Val: 'Tech 6.0 (Skills #1-6) + Pres 4.0',
      h1: 'Power Breaking',
      h1Val: 'Fist, Knifehand, Side, Back',
      h2: 'Special Kyokpa',
      h2Val: 'High Jump, Long Jump, Spins',
      h3: 'Creative & Demo',
      h3Val: 'Creative Poomsae & Team Demo',
    },

    kyorugiTabs: {
      overview: '1. Venue & Officials',
      divisions: '2. Weights & Heights',
      scoring: '3. Scoring & Gam-Jeoms',
      safety: '4. Safety, IVR & Team HP',
      guide: '5. Beginner & Athlete Guide',
    },

    poomsaeTabs: {
      common: '1. Common Foundation',
      recognized: '2. Recognized Poomsae',
      freestyle: '3. Freestyle Poomsae',
    },

    overview: {
      govTitle: '1. General Governance, Purpose & Institutional Codes (Articles 1–2)',
      govBadge: 'In Force as of June 1, 2026',
      govDesc:
        'The official World Taekwondo (WT) Competition Rules & Interpretation establishes unified regulations governing all promoted, recognized, or sanctioned international Kyorugi and Team competitions.',
      standardTitle: 'Standardization:',
      standardDesc: 'All participating MNAs, athletes, coaches, and international referees must strictly adhere to unified WT competition rules.',
      modTitle: 'Rule Modifications:',
      modDesc: 'Written approval from WT is required at least one (1) month prior. Unauthorized changes risk tournament decertification.',
      codeTitle: 'Institutional Codes:',
      codeDesc: 'Must comply with WT Statutes, Dispute Resolution Bylaws, WT Medical Code, and WADA Anti-Doping Regulations.',
      fopTitle: 'Field of Play (FOP) & 60cm Alert Area Specifications (Article 3)',
      fopSub: 'Square (8m x 8m) or Octagonal (~8m diameter, 3.3m sides) enveloped in a 10m x 10m to 12m x 12m Contest Arena.',
      alertBadge: '60cm Alert Buffer Band',
      safetyOuter: 'Safety Area • 10m x 10m to 12m x 12m Outer Boundary',
      boundaryLine: 'Boundary Line',
      alertBand: '60 cm Alert Area Buffer Band (Contrasting Color)',
      contestArea: '8m x 8m Contest Area (or ~8m Octagonal)',
      contestSub: 'Chung (Blue) vs Hong (Red) Engagement Zone',
      coachStation: 'Coach Station',
      noTapeNote: 'No Tape / Lines • Pure Color Contrast',
      platformNote: '* Platform Mounting: Height 0.6m to 1.0m with an outer safety slope of < 30 degrees.',
      lightingTitle: 'Broadcast Lighting:',
      lightingTraining: 'Training Lighting:',
      tempTitle: 'Venue Temperature:',
      humidityTitle: 'Relative Humidity:',
      officialsTitle: 'Competition Officials & Referee Deployment (Articles 14–16)',
      officialsDesc: 'Standard ring staffing requires 1 Center Referee, 3 Corner Judges, 1 Technical Delegate, and 1 Review Jury.',
      refereeTitle: 'Center Referee (CR):',
      refereeDesc: 'Controls the match inside the ring, enforces safety, gives verbal commands, issues Gam-jeoms, and declares the winner.',
      judgesTitle: 'Corner Judges (3x):',
      judgesDesc: 'Record manual punch scores and technical turning kick bonuses via handheld scoring devices instantaneously.',
      taTitle: 'Technical Delegate (TD):',
      taDesc: 'Supervises competition operations, schedule compliance, draw seeding, and regulatory dispute resolution.',
      csTitle: 'Competition Supervisory Board (CSB):',
      csDesc: 'Evaluates official protests, oversees Instant Video Replay juries, and confirms final match sanctions.',
      signalsTitle: 'Referee Verbal Commands & Official Hand Signals',
      signalsSub: 'Standard Korean commands used by international referees in all WT competitions worldwide.',
    },

    divisions: {
      title: 'Competition Divisions & Weight Categories (Article 4)',
      sub: 'Olympic weight divisions, Senior World Championships, Junior, and Cadet height-weight system.',
      olympicMen: 'Olympic Men (4 Categories)',
      olympicWomen: 'Olympic Women (4 Categories)',
      worldSenior: 'World Senior Championships (8 Weight Divisions)',
      juniorTitle: 'Junior Championships (Ages 15–17)',
      cadetTitle: 'Cadet Height-Weight Ratio Division Matrix (Article 4.3 & Annex II)',
      cadetSub: 'Safety-first scientific matching based on height and BMI bounds for cadet athletes (12–14 years old).',
      btnCadetBoys: 'Cadet Boys (Male)',
      btnCadetGirls: 'Cadet Girls (Female)',
      colHeight: 'Height Division',
      colMinWeight: 'Min Weight',
      colMaxWeight: 'Max Weight',
    },

    scoring: {
      pointsTitle: 'Scoring Targets, Valid Points Matrix & PSS Standards (Article 11)',
      pointsSub: 'Electronic sensor scoring with Daedo Gen2 / KP&P systems confirmed at millisecond precision.',
      colTarget: 'Target Zone',
      colTechnique: 'Technical Strike',
      colPoints: 'Point Award',
      colBonus: 'Technical Bonus',
      colDesc: 'Validation Rule',
      bestOf3Title: 'Best-of-3 Rounds Match System (Article 10)',
      bestOf3Badge: '2026 Olympic Standard',
      bestOf3Desc:
        'Athletes contest three independent 2-minute rounds. The contestant who wins two (2) rounds wins the match immediately. Each round score resets to 0–0.',
      tieBreakTitle: 'Round Tie-Breaker Priority Hierarchy (When Tied at End of Round):',
      tieBreak1: '1. Higher points scored by turning/spinning kicks.',
      tieBreak2: '2. Higher point values achieved (Head kicks > Body kicks > Punches).',
      tieBreak3: '3. Higher electronic impact sensor hit count registered.',
      tieBreak4: '4. Lower number of Gam-jeoms incurred during that round.',
      gamjeomTitle: 'Official Gam-Jeom Infractions & Penalties (Article 13)',
      gamjeomSub: 'All infractions award +1 point immediately to the opponent. Accumulating 5 Gam-jeoms loses the round.',
      colCode: 'Code',
      colInfraction: 'Prohibited Act',
      colPenalty: 'Penalty',
      colExplanation: 'Official Rule Specification',
      yellowCardTitle: 'Coach Disciplinary Action (Yellow Card Protocol)',
      yellowCardDesc:
        'Protesting referee decisions, entering the contest area without permission, or abusive conduct incurs an immediate Yellow Card (Gam-jeom +1 pt to opponent). Two yellow cards result in disqualification and venue expulsion.',
      pointGapTitle: 'Point Gap & Round Termination (12-Point Gap Rule)',
      pointGapDesc:
        'In Cadet and Junior divisions, a 12-point differential at the end of the round terminates that round in favor of the leader (Point Gap does not apply in Senior Grand Prix or Olympic finals).',
    },

    safety: {
      equipmentTitle: 'Mandatory Protective Equipment Standards (Article 5)',
      equipmentSub: 'All gear must be officially recognized by World Taekwondo (WT Approved label).',
      ivrTitle: 'Instant Video Replay (IVR) Protocol (Article 21)',
      ivrBadge: '1 Card Per Match',
      ivrDesc:
        'Each coach receives one (1) IVR quota card per match. If the review confirms the appeal, the card is retained; if rejected, the card is forfeited for the remainder of the match.',
      ivrAllowedTitle: 'Valid Challengeable Requests:',
      ivrAllowedItems: [
        'Turning kick technical bonus points (+2 points)',
        'Head kick contact validity on opponent or self',
        'Gam-jeom penalty on opponent: Falling down, boundary line crossing, or attacking after Kal-yeo',
        'Point cancellation for fouls committed immediately before scoring',
      ],
      ivrForbiddenTitle: 'Non-Challengeable Requests:',
      ivrForbiddenItems: [
        'Electronic PSS threshold impact validity (body kicks triggering transmitter)',
        'Punch scoring confirmation or denial',
        'Decisions regarding passive stalling or refusal to combat',
      ],
      simTitle: 'Team Combat Health Bar Simulator (150 HP System)',
      simSub: 'Interactive simulation of the experimental World Taekwondo Team Combat health bar format.',
      chungLabel: 'Chung (Blue Team)',
      hongLabel: 'Hong (Red Team)',
      btnPunch: 'Punch (-5 HP)',
      btnBodyKick: 'Body Kick (-10 HP)',
      btnHeadKick: 'Head Kick (-15 HP)',
      btnTurningBody: 'Turn Body (-20 HP)',
      btnTurningHead: 'Turn Head (-30 HP)',
      btnGamjeom: 'Gam-jeom (-5 HP)',
      btnPassive: 'Toggle Passive (x2 Dmg)',
      btnReset: 'Reset Simulator',
      passiveAlert: 'PASSIVE PENALTY ACTIVE: Incoming damage doubled for 10 seconds!',
      winnerChung: 'Chung (Blue) Wins Round!',
      winnerHong: 'Hong (Red) Wins Round!',
      matchTie: 'Round In Progress',
      doctorTitle: 'Doctor Chair & Medical Protocol (Article 18)',
      doctorDesc:
        'Injured athletes are allotted 1 minute of medical evaluation (Kye-shi). Only official WT accredited physicians may administer treatment.',
    },

    guide: {
      title: 'First-Time Competitor & Athlete Tournament Guide',
      sub: 'Step-by-step master tutorial for navigating an official WT competition from weigh-in to podium.',
      stage1Title: 'Stage 1: Official Weigh-In & ID Accreditation',
      stage1Desc:
        'Occurs the day prior between 10:00–12:00. Bring your WT Global Athlete License (GAL), passport, and weigh in with official dobok pants/t-shirt (tolerance allowance according to regulations).',
      stage2Title: 'Stage 2: Warm-Up Area & Inspection Desk',
      stage2Desc:
        'Arrive at the warm-up area 90 minutes before your match call. Complete PSS sensor pairing at the inspection desk 30 minutes prior. Tape, mouthguard, and groinguard must be inspected.',
      stage3Title: 'Stage 3: Ring Entry & Court Protocol',
      stage3Desc:
        'Walk behind your coach to the designated coach chair. Bow to the referee (Cha-ryeot, Kyeong-rye), face opponent, and assume Joon-bi stance on command.',
      stage4Title: 'Stage 4: Tactical Round Management',
      stage4Desc:
        'Manage the 2-minute round. Control the center 8x8m area. Avoid backing up into the 60cm alert band. Listen carefully to your coach for IVR challenge opportunities.',
      stage5Title: 'Stage 5: Post-Match Protocol & Recovery',
      stage5Desc:
        'Bow to opponent and opposing coach. Shake hands respectfully. Complete hydration and post-match recovery cooling immediately.',
      goldenRulesTitle: '5 Golden Rules for Tournament Success:',
      goldenRules: [
        'Never stop fighting until the referee explicitly calls "Kal-yeo".',
        'Do not fall down or step out to avoid an attack; a Gam-jeom gives your opponent an easy point.',
        'Always verify your PSS electronic socks are clean and sensors are functioning properly at the test kicker.',
        'Maintain eye contact with the center referee and listen to all verbal commands.',
        'Respect your opponent, referees, and coaches at all times under Taekwondo martial etiquette.',
      ],
    },

    poomsaeCommon: {
      title: 'WT Poomsae Competition Common Standards (Articles 1–5)',
      sub: 'Standardized 10m x 10m competition arena, compulsory form selection, and international age brackets.',
      fopDesc: 'Competition arena is an elastic mat measuring 10m x 10m with an outer safety margin of at least 1m on all sides.',
      divisionsTitle: 'Official Poomsae Age Divisions',
      divisionsSub: 'From Cadet (12–14) to Masters (66+), covering Individual, Pair (1 Male + 1 Female), and Team (3 Competitors).',
      poolsTitle: 'Compulsory Poomsae Pools by Division',
      poolsSub: 'Designated forms drawn by electronic randomizer prior to competition round.',
      commandsTitle: 'Single Elimination Coordinator Commands Protocol',
      commandsSub: 'Step-by-step match coordination sequence for recognized poomsae competition.',
      colStep: 'Phase',
      colFirst: '1st Poomsae Command',
      colSecond: '2nd Poomsae Command',
      colProtocol: 'Court Action',
    },

    poomsaeRecognized: {
      title: 'Recognized Poomsae Scoring Standards (Articles 6–8)',
      sub: 'Ten-point scoring system: Accuracy (4.0 points) + Presentation (6.0 points).',
      accuracyTitle: 'Accuracy Score (4.0 Points Base)',
      accuracySub: 'Penalties deducted in increments of -0.1 (Minor) and -0.3 (Major). Every mistake is deducted with no limit.',
      presentationTitle: 'Presentation Score (6.0 Points Base)',
      presentationSub: 'Speed & Power (2.0) + Rhythm & Tempo (2.0) + Expression of Energy (2.0).',
      minorTitle: 'Minor Deductions (-0.1 Point):',
      majorTitle: 'Major Structural Deductions (-0.3 Point):',
      proceduralTitle: 'Procedural Deductions (-0.3 / -0.6 Point):',
      speedPower: 'Speed & Power (2.0 pts): Explosive acceleration, sharp snapping impact, and crisp deceleration.',
      rhythmTempo: 'Rhythm & Tempo (2.0 pts): Adherence to fluid breathing cadence, proper pause length, and no artificial rushing.',
      energyExpression: 'Expression of Energy (2.0 pts): Eye focus, balance, commanding martial presence, and authentic Kihap delivery.',
      slowTitle: 'Slow Movements Time Standard Guidelines',
      slowSub: 'Prescribed timing standards: 5–8 seconds recommended, and 8 seconds full duration movements.',
      colPoomsae: 'Poomsae Form',
      colStance: 'Stance',
      colTechnique: 'Technical Motion',
      colDuration: 'Target Timing',
    },

    poomsaeFreestyle: {
      title: 'Freestyle Poomsae Technical Skills & Regulations (Article 9)',
      sub: 'Choreographed routine to instrumental music: Technical Score (6.0 pts) + Presentation Score (4.0 pts).',
      skillsTitle: '6 Mandatory Technical Skills (6.0 Points Breakdown)',
      skillsSub: 'Every skill has strict execution height, rotation, and balance criteria.',
      calcTitle: 'Interactive Freestyle Skill Scoring Calculator',
      calcSub: 'Simulate referee scoring for mandatory freestyle skills with base, bonus, and deduction parameters.',
      calcBaseLabel: 'Base Score (0.1–0.7):',
      calcBonusLabel: 'Bonus Tier (+0.1 / +0.2 / +0.3):',
      calcDeductionLabel: 'Fault Deduction (-0.1 / -0.2 / -0.3):',
      calcTotalLabel: 'Calculated Skill Total:',
      breakingTitle: 'Board Breaking Requirements by Skill',
      breakingSub: 'Pine boards broken cleanly while airborne during freestyle routines.',
      assistanceTitle: 'Teammate Assistance Authorization Matrix',
      assistanceSub: 'Assistance rules distinguishing Individual/Pair from Mixed Team divisions.',
      deductionsTitle: 'Freestyle Poomsae Deductions & Disqualifications',
      deductionsSub: 'Mandatory penalties for music violations, missing stances, timing faults, or pure dancing.',
    },

    hanmadang: {
      title: 'World Taekwondo Hanmadang International Regulations',
      sub: 'The global celebration of Taekwondo martial arts culture: Power Breaking, Special Kyokpa, and Team Demos.',
      powerBreakingTitle: 'Power Breaking (Kyokpa) Standards',
      specialKyokpaTitle: 'Special High Jump & Long Distance Breaking',
      creativeTitle: 'Creative Poomsae & All-Around Team Demonstration',
    },

    pdfModal: {
      zoomIn: 'Zoom In',
      zoomOut: 'Zoom Out',
      download: 'Download Official PDF',
      close: 'Close Rulebook',
      pageInfo: 'Official WT Regulations Document',
    },
  },

  km: {
    badgeAssembly: 'អនុវត្តជាផ្លូវការដោយមហាសន្និបាត WT',
    badgeInForce: 'ចូលជាធរមានចាប់ពីថ្ងៃទី ១ ខែមករា ឆ្នាំ ២០២៦',
    heroTitle: 'ច្បាប់ និងបទប្បញ្ញត្តិប្រកួត World Taekwondo',
    heroSubtitle:
      'សៀវភៅច្បាប់ស្តង់ដារផ្លូវការសម្រាប់ការប្រកួតកីឡាអូឡាំពិក (WT Kyorugi) មេគុនបច្ចេកទេស (WT Poomsae) និងមហោស្រពវប្បធម៌ក្បាច់គុន (Hanmadang)។',
    btnTables: 'តារាងច្បាប់',
    btnMindmap: 'មែកធាងផែនទីគំនិត',
    btnPdf: 'ទម្រង់ PDF',
    previewBadge: 'មើលជាមុន',

    masterCategories: {
      kyorugi: { label: '១. WT Kyorugi', sub: 'ការប្រកួតកីឡាអូឡាំពិក', tag: 'ប្រព័ន្ធ ៣ ទឹក' },
      poomsae: { label: '២. WT Poomsae', sub: 'មេគុន & ក្បាច់សេរី', tag: 'ភាពត្រឹមត្រូវ & ការសម្តែង' },
      hanmadang: { label: '៣. Hanmadang', sub: 'ការបំបែកក្តារ & សម្តែង', tag: 'មហោស្រពវប្បធម៌' },
    },

    mindmap: {
      title: 'មែកធាងផែនទីគំនិតរចនាសម្ព័ន្ធច្បាប់ប្រកួត',
      sub: 'ឋានានុក្រមនៃការសម្រេចចិត្ត និងការដាក់ពិន្ទុ',
      root: 'ច្បាប់ និងបទប្បញ្ញត្តិប្រកួត World Taekwondo',
      kyorugiBranch: '១. WT Kyorugi (ការប្រកួតទាត់អូឡាំពិក)',
      poomsaeBranch: '២. WT Poomsae (មេគុន និងក្បាច់សេរី)',
      hanmadangBranch: '៣. Hanmadang (មហោស្រពក្បាច់គុន)',
      k1: 'ប្រព័ន្ធ ៣ ទឹក (Best of 3)',
      k1Val: '៣ ទឹក x ២ នាទី (កំណត់ឡើងវិញ ០-០)',
      k2: 'ពិន្ទុឧបករណ៍ PSS',
      k2Val: '១, ២, ៣ ពិន្ទុ (+២ ពិន្ទុទាត់បង្វិល)',
      k3: 'ការពិន័យ Gam-Jeom',
      k3Val: '+១ ពិន្ទុដល់គូប្រកួត (៥ = ចាញ់ទឹក)',
      k4: 'ការតវ៉ាវីដេអូ IVR',
      k4Val: '១ កាតក្នុងមួយការប្រកួត',
      p1: 'មូលដ្ឋានរួម',
      p1Val: 'ទីលាន ១០x១០ម • កម្រិតអាយុ',
      p2: 'មេគុនទទួលស្គាល់',
      p2Val: 'ភាពត្រឹមត្រូវ ៤.០ + ការសម្តែង ៦.០',
      p3: 'ការកាត់ពិន្ទុភាពត្រឹមត្រូវ',
      p3Val: '-០.១ កំហុសតូច / -០.៣ កំហុសធំ',
      p4: 'ការដាក់ពិន្ទុក្បាច់សេរី',
      p4Val: 'បច្ចេកទេស ៦.០ (ជំនាញ ១-៦) + សម្តែង ៤.០',
      h1: 'ការបំបែកកម្លាំង',
      h1Val: 'ម៉ាត់, បាតដៃកាំបិត, ទាត់ចំហៀង, ទាត់បកក្រោយ',
      h2: 'ការបំបែកពិសេស Kyokpa',
      h2Val: 'លោតខ្ពស់, លោតឆ្ងាយ, បង្វិល',
      h3: 'មេគុនច្នៃប្រឌិត & សម្តែង',
      h3Val: 'Poomsae ច្នៃប្រឌិត & សម្តែងជាក្រុម',
    },

    kyorugiTabs: {
      overview: '១. ទីលាន & អាជ្ញាកណ្តាល',
      divisions: '២. ទម្ងន់ & កម្ពស់',
      scoring: '៣. ពិន្ទុ & Gam-Jeom',
      safety: '៤. សុវត្ថិភាព, IVR & ឈាម HP',
      guide: '៥. មគ្គុទ្ទេសក៍កីឡាករថ្មី',
    },

    poomsaeTabs: {
      common: '១. មូលដ្ឋានរួម',
      recognized: '២. មេគុនទទួលស្គាល់',
      freestyle: '៣. ក្បាច់សេរី Freestyle',
    },

    overview: {
      govTitle: '១. ការគ្រប់គ្រងទូទៅ គោលបំណង និងក្រមស្ថាប័ន (មាត្រា ១–២)',
      govBadge: 'ចូលជាធរមានចាប់ពីថ្ងៃទី ១ ខែមិថុនា ឆ្នាំ ២០២៦',
      govDesc:
        'ច្បាប់ និងការពន្យល់ផ្លូវការរបស់ World Taekwondo (WT) បង្កើតនូវបទប្បញ្ញត្តិឯកភាពគ្នាគ្រប់គ្រងរាល់ការប្រកួត Kyorugi អន្តរជាតិ និងការប្រកួតជាក្រុម។',
      standardTitle: 'ស្តង់ដារូបនីយកម្ម:',
      standardDesc: 'គ្រប់សមាគមជាតិ MNA កីឡាករ គ្រូបង្វឹក និងអាជ្ញាកណ្តាលអន្តរជាតិទាំងអស់ត្រូវតែគោរពតាមច្បាប់ WT យ៉ាងតឹងរ៉ឹងបំផុត។',
      modTitle: 'ការកែប្រែច្បាប់:',
      modDesc: 'តម្រូវឱ្យមានការយល់ព្រមជាលាយលក្ខណ៍អក្សរពី WT យ៉ាងតិចមួយ (១) ខែមុន។ ការផ្លាស់ប្តូរដោយគ្មានការអនុញ្ញាតអាចប្រឈមនឹងការដកសិទ្ធិការប្រកួត។',
      codeTitle: 'ក្រមស្ថាប័ន:',
      codeDesc: 'ត្រូវតែគោរពតាមលក្ខន្តិកៈ WT បទបញ្ជាដោះស្រាយវិវាទ ក្រមវេជ្ជសាស្ត្រ WT និងបទប្បញ្ញត្តិប្រឆាំងសារធាតុញៀន WADA។',
      fopTitle: 'លក្ខណៈបច្ចេកទេសទីលាន (FOP) & តំបន់ប្រុងប្រយ័ត្ន ៦០ស.ម (មាត្រា ៣)',
      fopSub: 'រាងការ៉េ (៨ម x ៨ម) ឬប្រាំបីជ្រុង (អង្កត់ផ្ចិត ~៨ម) ព័ទ្ធជុំវិញដោយទីលានសុវត្ថិភាព ១០ម x ១០ម ដល់ ១២ម x ១២ម។',
      alertBadge: 'ខ្សែក្រវាត់ប្រុងប្រយ័ត្ន ៦០ស.ម',
      safetyOuter: 'តំបន់សុវត្ថិភាព • ព្រំដែនខាងក្រៅ ១០ម x ១០ម ដល់ ១២ម x ១២ម',
      boundaryLine: 'បន្ទាត់ព្រំដែន',
      alertBand: 'តំបន់ប្រុងប្រយ័ត្ន ៦០ ស.ម (ពណ៌ខុសគ្នា)',
      contestArea: 'តំបន់ប្រកួត ៨ម x ៨ម (ឬ ~៨ម ប្រាំបីជ្រុង)',
      contestSub: 'តំបន់ប្រកួត Chung (ខៀវ) ទល់នឹង Hong (ក្រហម)',
      coachStation: 'កន្លែងអង្គុយគ្រូបង្វឹក',
      noTapeNote: 'គ្មានការបិទស្កុត/បន្ទាត់ • ប្រើពណ៌កម្រាលផ្ទុយគ្នា',
      platformNote: '* ការដំឡើងវេទិកា: កម្ពស់ ០.៦ម ដល់ ១.០ម ជាមួយនឹងជម្រាលសុវត្ថិភាពខាងក្រៅតិចជាង ៣០ ដឺក្រេ។',
      lightingTitle: 'ពន្លឺសម្រាប់ផ្សាយបន្តផ្ទាល់:',
      lightingTraining: 'ពន្លឺសម្រាប់ហ្វឹកហាត់:',
      tempTitle: 'សីតុណ្ហភាពក្នុងសាល:',
      humidityTitle: 'សំណើមបរិយាកាស:',
      officialsTitle: 'មន្ត្រីការប្រកួត និងការចាត់តាំងអាជ្ញាកណ្តាល (មាត្រា ១៤–១៦)',
      officialsDesc: 'ការប្រកួតស្តង់ដារតម្រូវឱ្យមាន អាជ្ញាកណ្តាលកណ្តាល ១ រូប ចៅក្រមជ្រុង ៣ រូប ប្រតិភូបច្ចេកទេស ១ រូប និងគណៈវិនិច្ឆ័យពិនិត្យ ១ រូប។',
      refereeTitle: 'អាជ្ញាកណ្តាលកណ្តាល (CR):',
      refereeDesc: 'គ្រប់គ្រងការប្រកួតលើសង្វៀន ការពារសុវត្ថិភាព ផ្តល់បញ្ជាសំឡេង ផ្តល់ការពិន័យ Gam-jeom និងប្រកាសអ្នកឈ្នះ។',
      judgesTitle: 'ចៅក្រមជ្រុង (៣ រូប):',
      judgesDesc: 'កត់ត្រាពិន្ទុម៉ាត់ និងពិន្ទុបន្ថែមនៃការទាត់បង្វិលភ្លាមៗតាមរយៈឧបករណ៍ចុចពិន្ទុដោយដៃ។',
      taTitle: 'ប្រតិភូបច្ចេកទេស (TD):',
      taDesc: 'ត្រួតពិនិត្យប្រតិបត្តិការប្រកួត តាមដានកាលវិភាគ ការចាប់ឆ្នោត និងដោះស្រាយវិវាទបទប្បញ្ញត្តិ។',
      csTitle: 'ក្រុមប្រឹក្សាត្រួតពិនិត្យការប្រកួត (CSB):',
      csDesc: 'វាយតម្លៃពាក្យបណ្តឹងតវ៉ាផ្លូវការ ត្រួតពិនិត្យវីដេអូ IVR និងបញ្ជាក់ការដាក់ទណ្ឌកម្មចុងក្រោយ។',
      signalsTitle: 'បញ្ជាសំឡេង និងកាយវិការដៃរបស់អាជ្ញាកណ្តាល',
      signalsSub: 'បញ្ជាស្តង់ដារជាភាសាកូរ៉េដែលប្រើប្រាស់ដោយអាជ្ញាកណ្តាលអន្តរជាតិទូទាំងពិភពលោក។',
    },

    divisions: {
      title: 'កម្រិតអាយុ និងប្រភេទទម្ងន់ប្រកួត (មាត្រា ៤)',
      sub: 'ប្រភេទទម្ងន់អូឡាំពិក ជើងឯកពិភពលោកយុវជន និងប្រព័ន្ធសមាមាត្រកម្ពស់-ទម្ងន់ Cadet។',
      olympicMen: 'អូឡាំពិកបុរស (៤ ប្រភេទទម្ងន់)',
      olympicWomen: 'អូឡាំពិកនារី (៤ ប្រភេទទម្ងន់)',
      worldSenior: 'ជើងឯកពិភពលោកមនុស្សចាស់ (៨ ប្រភេទទម្ងន់)',
      juniorTitle: 'ជើងឯកយុវជន (អាយុ ១៥–១៧ ឆ្នាំ)',
      cadetTitle: 'តារាងសមាមាត្រកម្ពស់-ទម្ងន់កុមារ Cadet (មាត្រា ៤.៣ & ឧបសម្ព័ន្ធ II)',
      cadetSub: 'ការផ្គូផ្គងបែបវិទ្យាសាស្ត្រផ្អែកលើកម្ពស់ និងទម្ងន់ BMI ដើម្បីសុវត្ថិភាពអតិបរមាសម្រាប់កុមារ (១២–១៤ ឆ្នាំ)។',
      btnCadetBoys: 'កុមារា Cadet (ប្រុស)',
      btnCadetGirls: 'កុមារី Cadet (ស្រី)',
      colHeight: 'កម្រិតកម្ពស់',
      colMinWeight: 'ទម្ងន់អប្បបរមា',
      colMaxWeight: 'ទម្ងន់អតិបរមា',
    },

    scoring: {
      pointsTitle: 'គោលដៅពិន្ទុ តារាងពិន្ទុត្រឹមត្រូវ & ស្តង់ដារ PSS (មាត្រា ១១)',
      pointsSub: 'ការចាប់ពិន្ទុដោយឧបករណ៍ចាប់សញ្ញាអេឡិចត្រូនិក Daedo Gen2 / KP&P ក្នុងកម្រិតល្បឿនមិល្លីវិនាទី។',
      colTarget: 'តំបន់គោលដៅ',
      colTechnique: 'ក្បាច់វាយប្រហារ',
      colPoints: 'ពិន្ទុទទួលបាន',
      colBonus: 'ពិន្ទុបន្ថែមបច្ចេកទេស',
      colDesc: 'លក្ខខណ្ឌវិនិច្ឆ័យ',
      bestOf3Title: 'ប្រព័ន្ធប្រកួត ៣ ទឹក ឈ្នះ ២ ទឹក (មាត្រា ១០)',
      bestOf3Badge: 'ស្តង់ដារអូឡាំពិក ២០២៦',
      bestOf3Desc:
        'កីឡាករប្រកួត ៣ ទឹកដាច់ដោយឡែកពីគ្នា (មួយទឹក ២ នាទី)។ អ្នកឈ្នះ ២ ទឹកមុន ឈ្នះការប្រកួតភ្លាមៗ។ រាល់ពេលចាប់ផ្តើមទឹកថ្មី ពិន្ទុត្រូវបានកំណត់ឡើងវិញ ០–០។',
      tieBreakTitle: 'លំដាប់អាទិភាពដោះស្រាយពេលពិន្ទុស្មើគ្នានៅចុងទឹក:',
      tieBreak1: '១. ពិន្ទុខ្ពស់ជាងដែលរកបានពីការទាត់បង្វិលខ្លួន។',
      tieBreak2: '២. តម្លៃពិន្ទុបច្ចេកទេសខ្ពស់ជាង (ទាត់ក្បាល > ទាត់ដងខ្លួន > ម៉ាត់)។',
      tieBreak3: '៣. ចំនួនដងដែលឧបករណ៍ចាប់សញ្ញាអេឡិចត្រូនិកកត់ត្រាបានច្រើនជាង។',
      tieBreak4: '៤. ចំនួនពិន័យ Gam-jeom តិចជាងនៅក្នុងទឹកនោះ។',
      gamjeomTitle: 'កំហុសពិន័យផ្លូវការ Gam-Jeom (មាត្រា ១៣)',
      gamjeomSub: 'រាល់កំហុសទាំងអស់ផ្តល់ +១ ពិន្ទុភ្លាមៗដល់គូប្រកួត។ សន្សំ Gam-jeom គ្រប់ ៥ ដង នឹងចាញ់ទឹកនោះភ្លាម។',
      colCode: 'កូដ',
      colInfraction: 'ទង្វើហាមឃាត់',
      colPenalty: 'ការពិន័យ',
      colExplanation: 'ការពន្យល់លម្អិតនៃច្បាប់ផ្លូវការ',
      yellowCardTitle: 'វិន័យគ្រូបង្វឹក (ពិធីការកាតលឿង)',
      yellowCardDesc:
        'ការតវ៉ាការសម្រេចរបស់អាជ្ញាកណ្តាល ការចូលក្នុងសង្វៀនដោយគ្មានការអនុញ្ញាត ឬអាកប្បកិរិយាមិនសមរម្យ នឹងទទួលកាតលឿងភ្លាម (+១ ពិន្ទុដល់គូប្រកួត)។ កាតលឿង ២ ដង នឹងត្រូវបណ្តេញចេញពីសាលប្រកួត។',
      pointGapTitle: 'គម្លាតពិន្ទុដាច់ & ការបញ្ចប់ទឹកមុន (ច្បាប់គម្លាត ១២ ពិន្ទុ)',
      pointGapDesc:
        'សម្រាប់កម្រិត Cadet និង Junior ប្រសិនបើមានគម្លាតពិន្ទុខុសគ្នា ១២ ពិន្ទុ ទឹកនោះនឹងត្រូវបញ្ចប់ភ្លាមៗដោយផ្តល់ជ័យជម្នះដល់អ្នកនាំមុខ (មិនអនុវត្តក្នុងកម្រិត Senior ឡើយ)។',
    },

    safety: {
      equipmentTitle: 'ស្តង់ដារឧបករណ៍ការពារសុវត្ថិភាពជាកាតព្វកិច្ច (មាត្រា ៥)',
      equipmentSub: 'ឧបករណ៍ទាំងអស់ត្រូវតែមានត្រាទទួលស្គាល់ជាផ្លូវការពី World Taekwondo (ស្លាក WT Approved)។',
      ivrTitle: 'ពិធីការត្រួតពិនិត្យវីដេអូឡើងវិញ IVR (មាត្រា ២១)',
      ivrBadge: '១ កាតក្នុងមួយប្រកួត',
      ivrDesc:
        'គ្រូបង្វឹកម្នាក់ៗទទួលបានកាតតវ៉ា IVR ចំនួនមួយ (១)។ ប្រសិនបើការតវ៉ាត្រឹមត្រូវ កាតនឹងត្រូវរក្សាទុកដដែល។ ប្រសិនបើការតវ៉ាមិនត្រឹមត្រូវ កាតនឹងត្រូវដកហូតរហូតដល់ចប់ការប្រកួត។',
      ivrAllowedTitle: 'ករណីដែលអាចស្នើសុំតវ៉ាបាន:',
      ivrAllowedItems: [
        'ពិន្ទុបន្ថែមបច្ចេកទេសនៃការទាត់បង្វិល (+២ ពិន្ទុ)',
        'ភាពត្រឹមត្រូវនៃការទាត់ប៉ះក្បាលលើគូប្រកួត ឬលើខ្លួនឯង',
        'ការពិន័យ Gam-jeom លើគូប្រកួត: ការដួល ការចេញក្រៅខ្សែ ឬការវាយក្រោយ Kal-yeo',
        'ការលុបពិន្ទុដែលរកបានភ្លាមៗក្រោយការប្រព្រឹត្តកំហុស',
      ],
      ivrForbiddenTitle: 'ករណីដែលមិនអាចស្នើសុំតវ៉ាបាន:',
      ivrForbiddenItems: [
        'កម្រិតកម្លាំងសំពាធនៃឧបករណ៍ចាប់សញ្ញា PSS (ការទាត់ត្រូវដែលបង្កើនពិន្ទុ)',
        'ការបញ្ជាក់ ឬបដិសេធពិន្ទុម៉ាត់',
        'ការសម្រេចចិត្តលើការគេចវេស ឬការស្ទាក់ស្ទើរមិនប្រកួត',
      ],
      simTitle: 'ឧបករណ៍ពិសោធន៍កម្លាំងឈាមប្រយុទ្ធជាក្រុម (ប្រព័ន្ធ ១៥០ HP)',
      simSub: 'ការពិសោធន៍អន្តរកម្មនៃទម្រង់ប្រកួតជាក្រុមរបស់ World Taekwondo ដោយប្រើរបារកម្លាំងឈាម HP។',
      chungLabel: 'Chung (ក្រុមខៀវ)',
      hongLabel: 'Hong (ក្រុមក្រហម)',
      btnPunch: 'ម៉ាត់ (-៥ HP)',
      btnBodyKick: 'ទាត់ដងខ្លួន (-១០ HP)',
      btnHeadKick: 'ទាត់ក្បាល (-១៥ HP)',
      btnTurningBody: 'បង្វិលទាត់ខ្លួន (-២០ HP)',
      btnTurningHead: 'បង្វិលទាត់ក្បាល (-៣០ HP)',
      btnGamjeom: 'Gam-jeom (-៥ HP)',
      btnPassive: 'បើក/បិទ គេចវេស (ខូចខាត x២)',
      btnReset: 'កំណត់ឡើងវិញ',
      passiveAlert: 'ការពិន័យគេចវេសសកម្ម: រាល់ការវាយប្រហារត្រូវកើនការខូចខាតទ្វេដងរយៈពេល ១០ វិនាទី!',
      winnerChung: 'Chung (ខៀវ) ឈ្នះទឹកនេះ!',
      winnerHong: 'Hong (ក្រហម) ឈ្នះទឹកនេះ!',
      matchTie: 'ទឹកប្រកួតកំពុងដំណើរការ',
      doctorTitle: 'កៅអីគ្រូពេទ្យ និងពិធីការវេជ្ជសាស្ត្រ (មាត្រា ១៨)',
      doctorDesc:
        'កីឡាករដែលមានរបួសត្រូវបានអនុញ្ញាតឱ្យពិនិត្យសុខភាពរយៈពេល ១ នាទី (Kye-shi)។ មានតែគ្រូពេទ្យទទួលស្គាល់ដោយ WT ប៉ុណ្ណោះដែលអាចព្យាបាលបាន។',
    },

    guide: {
      title: 'មគ្គុទ្ទេសក៍ការប្រកួតសម្រាប់កីឡាករថ្មី',
      sub: 'ការណែនាំជាជំហានៗដើម្បីត្រៀមខ្លួនសម្រាប់ការប្រកួតផ្លូវការរបស់ WT ចាប់ពីការថ្លឹងទម្ងន់រហូតដល់ការឡើងវេទិកាទទួលមេដាយ។',
      stage1Title: 'ដំណាក់កាលទី ១: ការថ្លឹងទម្ងន់ និងផ្ទៀងផ្ទាត់អត្តសញ្ញាណប័ណ្ណ',
      stage1Desc:
        'ប្រព្រឹត្តទៅមួយថ្ងៃមុនការប្រកួត ចន្លោះម៉ោង ១០:០០–១២:០០។ ត្រូវយកប័ណ្ណអាជ្ញាប័ណ្ណកីឡាករ WT (GAL) លិខិតឆ្លងដែន និងស្លៀកខោអាវប្រកួត Dobok ផ្លូវការ។',
      stage2Title: 'ដំណាក់កាលទី ២: កន្លែងកម្តៅសាច់ដុំ & តុត្រួតពិនិត្យឧបករណ៍',
      stage2Desc:
        'មកដល់កន្លែងកម្តៅសាច់ដុំ ៩០ នាទីមុនពេលប្រកួត។ ភ្ជាប់ឧបករណ៍ចាប់សញ្ញា PSS នៅតុត្រួតពិនិត្យ ៣០ នាទីមុន។ ត្រូវត្រួតពិនិត្យឧបករណ៍ការពារធ្មេញ ប្រដាប់ការពារប្រដាប់ភេទ និងស្រោមជើង។',
      stage3Title: 'ដំណាក់កាលទី ៣: ការចូលសង្វៀន & ពិធីការលើទីលាន',
      stage3Desc:
        'ដើរតាមពីក្រោយគ្រូបង្វឹកទៅកាន់កៅអីដែលបានកំណត់។ គោរពអាជ្ញាកណ្តាល (Cha-ryeot, Kyeong-rye) បែរមុខរកគូប្រកួត និងឈរជំហរ Joon-bi ពេលមានបញ្ជា។',
      stage4Title: 'ដំណាក់កាលទី ៤: ការគ្រប់គ្រងយុទ្ធសាស្ត្រក្នុងទឹកប្រកួត',
      stage4Desc:
        'គ្រប់គ្រងការប្រកួតរយៈពេល ២ នាទី។ គ្រប់គ្រងតំបន់កណ្តាល ៨x៨ម។ ចៀសវាងការថយក្រោយចូលទៅក្នុងតំបន់ប្រុងប្រយ័ត្ន ៦០ស.ម។ ស្តាប់ការណែនាំរបស់គ្រូបង្វឹកអំពីការតវ៉ា IVR។',
      stage5Title: 'ដំណាក់កាលទី ៥: ពិធីការក្រោយការប្រកួត & ការស្តារកម្លាំង',
      stage5Desc:
        'គោរពគូប្រកួត និងគ្រូបង្វឹករបស់គូប្រកួត។ ចាប់ដៃគ្នាដោយការគោរព។ បំពេញជាតិទឹក និងធ្វើការសម្រួលសាច់ដុំភ្លាមៗ។',
      goldenRulesTitle: 'វិធានមាស ៥ យ៉ាងដើម្បីទទួលបានជោគជ័យក្នុងការប្រកួត:',
      goldenRules: [
        'កុំឈប់ប្រកួតដាច់ខាតរហូតទាល់តែអាជ្ញាកណ្តាលបញ្ជាពាក្យ "Kal-yeo"។',
        'កុំដួល ឬដើរចេញក្រៅដើម្បីគេចពីការវាយប្រហារ ព្រោះ Gam-jeom នឹងផ្តល់ពិន្ទុដល់គូប្រកួតដោយងាយ។',
        'ត្រូវប្រាកដថាស្រោមជើងអេឡិចត្រូនិក PSS ស្អាត និងដំណើរការបានល្អលើម៉ាស៊ីនសាកល្បងមុនឡើងប្រកួត។',
        'រក្សាការសម្លឹងមើលអាជ្ញាកណ្តាលកណ្តាល និងស្តាប់រាល់បញ្ជាសំឡេងទាំងអស់។',
        'ត្រូវគោរពគូប្រកួត អាជ្ញាកណ្តាល និងគ្រូបង្វឹកជានិច្ច ស្របតាមសីលធម៌ក្បាច់គុនតេក្វាន់ដូ។',
      ],
    },

    poomsaeCommon: {
      title: 'ស្តង់ដាររួមនៃការប្រកួត WT Poomsae (មាត្រា ១–៥)',
      sub: 'ទីលានប្រកួតស្តង់ដារ ១០ម x ១០ម ការចាប់ឆ្នោតទម្រង់មេគុន និងកម្រិតអាយុអន្តរជាតិ។',
      fopDesc: 'ទីលានប្រកួតគឺជាកម្រាលកៅស៊ូយឺតទំហំ ១០ម x ១០ម ដោយមានតំបន់សុវត្ថិភាពខាងក្រៅយ៉ាងតិច ១ម គ្រប់ជ្រុងទាំងអស់។',
      divisionsTitle: 'កម្រិតអាយុផ្លូវការនៃវិញ្ញាសា Poomsae',
      divisionsSub: 'ចាប់ពី Cadet (១២–១៤ ឆ្នាំ) ដល់ Masters (៦៦+ ឆ្នាំ) សម្រាប់ឯកត្តជន គូ (ប្រុស ១ + ស្រី ១) និងក្រុម (៣ នាក់)។',
      poolsTitle: 'បញ្ជីមេគុនបង្ខំតាមកម្រិតអាយុនីមួយៗ',
      poolsSub: 'មេគុនដែលត្រូវបានកំណត់ដោយការចាប់ឆ្នោតអេឡិចត្រូនិកដោយចៃដន្យមុនពេលចាប់ផ្តើមប្រកួត។',
      commandsTitle: 'ពិធីការបញ្ជារបស់អ្នកសម្របសម្រួលក្នុងការប្រកួតជម្រុះ',
      commandsSub: 'លំដាប់លំដោយនៃការបញ្ជាលើសង្វៀនសម្រាប់ការប្រកួតមេគុនទទួលស្គាល់។',
      colStep: 'ដំណាក់កាល',
      colFirst: 'បញ្ជាមេគុនទី ១',
      colSecond: 'បញ្ជាមេគុនទី ២',
      colProtocol: 'សកម្មភាពលើទីលាន',
    },

    poomsaeRecognized: {
      title: 'ស្តង់ដារដាក់ពិន្ទុមេគុនទទួលស្គាល់ Recognized Poomsae (មាត្រា ៦–៨)',
      sub: 'ប្រព័ន្ធពិន្ទុ ១០ ពិន្ទុ: ភាពត្រឹមត្រូវ (៤.០ ពិន្ទុ) + ការសម្តែង (៦.០ ពិន្ទុ)។',
      accuracyTitle: 'ពិន្ទុភាពត្រឹមត្រូវ (មូលដ្ឋាន ៤.០ ពិន្ទុ)',
      accuracySub: 'កាត់ពិន្ទុម្តង -០.១ (កំហុសតូច) និង -០.៣ (កំហុសធំ)។ រាល់កំហុសទាំងអស់ត្រូវបានកាត់ដោយគ្មានដែនកំណត់។',
      presentationTitle: 'ពិន្ទុការសម្តែង (មូលដ្ឋាន ៦.០ ពិន្ទុ)',
      presentationSub: 'ល្បឿន និងកម្លាំង (២.០) + ចង្វាក់ និងល្បឿនចលនា (២.០) + ការបញ្ចេញថាមពល (២.០)។',
      minorTitle: 'ការកាត់ពិន្ទុកំហុសតូច (-០.១ ពិន្ទុ):',
      majorTitle: 'ការកាត់ពិន្ទុកំហុសទម្រង់ធំ (-០.៣ ពិន្ទុ):',
      proceduralTitle: 'ការកាត់ពិន្ទុតាមនីតិវិធី (-០.៣ / -០.៦ ពិន្ទុ):',
      speedPower: 'ល្បឿន និងកម្លាំង (២.០ ពិន្ទុ): ការបញ្ចេញកម្លាំងផ្ទុះ ការឈប់ចលនាយ៉ាងរហ័ស និងច្បាស់លាស់។',
      rhythmTempo: 'ចង្វាក់ និងល្បឿនចលនា (២.០ ពិន្ទុ): ការដកដង្ហើមស្របតាមចលនា ការផ្អាកសមស្រប និងមិនបង្ខំចលនាឱ្យលឿនហួសហេតុ។',
      energyExpression: 'ការបញ្ចេញថាមពល (២.០ ពិន្ទុ): ការសម្លឹងភ្នែក តុល្យភាព ភាពអង់អាច និងការស្រែក Kihap យ៉ាងម៉ឺងម៉ាត់។',
      slowTitle: 'គោលការណ៍ណែនាំពេលវេលានៃចលនាយឺត (Slow Movements)',
      slowSub: 'ស្តង់ដារពេលវេលាកំណត់: ៥–៨ វិនាទី (ណែនាំ) និង ៨ វិនាទីពេញលេញ។',
      colPoomsae: 'ទម្រង់ Poomsae',
      colStance: 'ជំហរជើង',
      colTechnique: 'បច្ចេកទេសចលនា',
      colDuration: 'ថិរវេលាកំណត់',
    },

    poomsaeFreestyle: {
      title: 'ជំនាញបច្ចេកទេស & បទប្បញ្ញត្តិ Freestyle Poomsae (មាត្រា ៩)',
      sub: 'ក្បាច់រាំសម្តែងអមជាមួយតន្ត្រីគ្មានទំនុកច្រៀង: ពិន្ទុបច្ចេកទេស (៦.០ ពិន្ទុ) + ពិន្ទុការសម្តែង (៤.០ ពិន្ទុ)។',
      skillsTitle: 'ជំនាញបច្ចេកទេសជាកាតព្វកិច្ចទាំង ៦ (ការបែងចែក ៦.០ ពិន្ទុ)',
      skillsSub: 'ជំនាញនីមួយៗមានលក្ខខណ្ឌវិនិច្ឆ័យកម្ពស់ ការបង្វិល និងលំនឹងយ៉ាងតឹងរ៉ឹងបំផុត។',
      calcTitle: 'ម៉ាស៊ីនគណនាពិន្ទុជំនាញក្បាច់សេរីអន្តរកម្ម',
      calcSub: 'ពិសោធន៍ការដាក់ពិន្ទុរបស់អាជ្ញាកណ្តាលសម្រាប់ជំនាញកាតព្វកិច្ច ដោយមានពិន្ទុមូលដ្ឋាន ពិន្ទុបន្ថែម និងការកាត់ពិន្ទុ។',
      calcBaseLabel: 'ពិន្ទុមូលដ្ឋាន (០.១–០.៧):',
      calcBonusLabel: 'កម្រិតពិន្ទុបន្ថែម (+០.១ / +០.២ / +០.៣):',
      calcDeductionLabel: 'ការកាត់ពិន្ទុកំហុស (-០.១ / -០.២ / -០.៣):',
      calcTotalLabel: 'ពិន្ទុជំនាញសរុបដែលបានគណនា:',
      breakingTitle: 'លក្ខខណ្ឌតម្រូវនៃការបំបែកក្តារតាមជំនាញ',
      breakingSub: 'ក្តារស្រល់ដែលត្រូវបំបែកឱ្យដាច់ស្អាតនៅលើអាកាសអំឡុងពេលសម្តែងក្បាច់សេរី។',
      assistanceTitle: 'តារាងអនុញ្ញាតឱ្យមានការជួយគ្នាពីមិត្តរួមក្រុម',
      assistanceSub: 'ច្បាប់នៃការជួយគ្នាដោយបែងចែករវាងវិញ្ញាសាឯកត្តជន/គូ និងវិញ្ញាសាក្រុមចម្រុះ។',
      deductionsTitle: 'ការកាត់ពិន្ទុ និងការដកសិទ្ធិប្រកួតក្នុង Freestyle Poomsae',
      deductionsSub: 'ការពិន័យជាកាតព្វកិច្ចចំពោះកំហុសតន្ត្រី ការខ្វះជំហរជើង កំហុសពេលវេលា ឬការរាំសុទ្ធសាធ។',
    },

    hanmadang: {
      title: 'បទប្បញ្ញត្តិអន្តរជាតិ World Taekwondo Hanmadang',
      sub: 'ការអបអរសាទរវប្បធម៌ក្បាច់គុនតេក្វាន់ដូពិភពលោក: ការបំបែកកម្លាំង ការបំបែកពិសេស និងការសម្តែងជាក្រុម។',
      powerBreakingTitle: 'ស្តង់ដារការបំបែកកម្លាំង (Power Breaking Kyokpa)',
      specialKyokpaTitle: 'ការបំបែកលោតខ្ពស់ & លោតចម្ងាយឆ្ងាយ (Special Kyokpa)',
      creativeTitle: 'មេគុនច្នៃប្រឌិត & ការសម្តែងក្បាច់គុនជាក្រុម (All-Around Team Demo)',
    },

    pdfModal: {
      zoomIn: 'ពង្រីក',
      zoomOut: 'បង្រួម',
      download: 'ទាញយកឯកសារ PDF ផ្លូវការ',
      close: 'បិទសៀវភៅច្បាប់',
      pageInfo: 'ឯកសារបទប្បញ្ញត្តិផ្លូវការរបស់ WT',
    },
  },

  zh: {
    badgeAssembly: '世跆联大会正式核准执行',
    badgeInForce: '自 2026 年 1 月 1 日起生效实施',
    heroTitle: '世界跆拳道联盟官方竞赛规则与裁判指南',
    heroSubtitle:
      '涵盖奥运竞技对战 (WT Kyorugi)、公认与自选品势 (WT Poomsae) 以及世界汉玛当武道大会 (Hanmadang) 的权威法定竞赛标准规则库。',
    btnTables: '规格明细表',
    btnMindmap: '规则树状脑图',
    btnPdf: 'PDF 文档模式',
    previewBadge: '规则速览',

    masterCategories: {
      kyorugi: { label: '1. WT 竞技 (Kyorugi)', sub: '奥运实战对决', tag: '三局两胜制独立计分' },
      poomsae: { label: '2. WT 品势 (Poomsae)', sub: '公认品势与自由自选', tag: '准确度 4.0 + 表现力 6.0' },
      hanmadang: { label: '3. 汉玛当 (Hanmadang)', sub: '特技击破与综合示范', tag: '武道文化盛典' },
    },

    mindmap: {
      title: '竞赛规则体系结构脑图',
      sub: '裁判执法与计分裁决层级架构',
      root: '世界跆拳道联盟官方竞赛规则全书',
      kyorugiBranch: '1. WT 竞技 (奥运实战)',
      poomsaeBranch: '2. WT 品势 (公认与自选)',
      hanmadangBranch: '3. 汉玛当 (武道特技击破)',
      k1: '三局两胜制独立计分',
      k1Val: '3局 x 2分钟 (每局 0-0 独立结算)',
      k2: 'PSS 电子感应分值',
      k2Val: '1, 2, 3 分 (+2 旋转动作加分)',
      k3: '犯规扣分 Gam-Jeom',
      k3Val: '判罚对方得 1 分 (单局累积 5 次判负)',
      k4: 'IVR 录像审议卡',
      k4Val: '每场比赛教练持有 1 张审议卡',
      p1: '场地与参赛组别',
      p1Val: '10x10m 比赛台 • 年龄段抽签池',
      p2: '公认品势总分架构',
      p2Val: '准确度 4.0 + 表现力 6.0 = 10.0',
      p3: '准确度扣分机制',
      p3Val: '-0.1 微小错误 / -0.3 严重错误',
      p4: '自由自选品势',
      p4Val: '技术分 6.0 (五大动作) + 表现分 4.0',
      h1: '威力击破体系',
      h1Val: '正拳击破、手刀击破、侧踢、后踢',
      h2: '特技高空击破',
      h2Val: '腾空跳高踢、腾空跳远踢、旋风多向踢',
      h3: '创意品势与团体示范',
      h3Val: '音乐自编品势 & 全能团体特技示范',
    },

    kyorugiTabs: {
      overview: '1. 场地与裁判体系',
      divisions: '2. 量级与身高矩阵',
      scoring: '3. 得分与犯规判罚',
      safety: '4. 安全护具、IVR与血条机制',
      guide: '5. 参赛选手实战指南',
    },

    poomsaeTabs: {
      common: '1. 竞赛通则与场地',
      recognized: '2. 公认品势扣分标准',
      freestyle: '3. 自选自由品势 (Freestyle)',
    },

    overview: {
      govTitle: '1. 竞赛通则、适用宗旨与法制规范 (第1–2条)',
      govBadge: '自 2026 年 6 月 1 日起全面施行',
      govDesc:
        '世界跆拳道联盟 (WT) 官方竞技竞赛规则及判例解释，是规范所有世跆联主办、认可或承认的国际竞技对抗赛与团体竞技赛事的唯一权威法定依据。',
      standardTitle: '统一标准化原则:',
      standardDesc: '所有会员协会 (MNA)、参赛运动员、教练员及国际级裁判员必须严格遵照世跆联统一竞赛规则执行。',
      modTitle: '规则变通审核机制:',
      modDesc: '任何规则调整须提前至少一 (1) 个月获得世跆联书面正式批准。擅自更改可能导致赛事认证被取消。',
      codeTitle: '法定关联规章:',
      codeDesc: '必须同步遵守世跆联章程、争议仲裁条例、世跆联医疗规范及 WADA 反兴奋剂相关条例。',
      fopTitle: '比赛场地 (FOP) 与 60cm 警戒缓冲区规范 (第3条)',
      fopSub: '正方形 (8m x 8m) 或八角形 (直径约 8m，边长 3.3m)，整体设于 10m x 10m 至 12m x 12m 警戒安全竞技台之内。',
      alertBadge: '60cm 醒目警戒色环带',
      safetyOuter: '安全区 • 10m x 10m 至 12m x 12m 外边界',
      boundaryLine: '边界警戒线',
      alertBand: '60cm 警戒缓冲带 (采用鲜明反差对比色铺设)',
      contestArea: '8m x 8m 实战比赛区 (或 ~8m 八角形)',
      contestSub: '青方 (Chung) 对决 红方 (Hong) 实战交锋核心区',
      coachStation: '教练指导席位',
      noTapeNote: '严禁胶带反光划线 • 必须使用纯净材质色差对比',
      platformNote: '* 升降台搭设要求: 高度为 0.6m 至 1.0m，外沿防护坡度须严格小于 30 度。',
      lightingTitle: '全球电视转播照明:',
      lightingTraining: '训练与副场地照明:',
      tempTitle: '场馆恒温标准:',
      humidityTitle: '相对湿度标准:',
      officialsTitle: '裁判员团队职能配置与执裁阵列 (第14–16条)',
      officialsDesc: '国际标准单场地执裁团队配置包括 1 名主裁判 (CR)、3 名边裁判 (1st-3rd Corner Judges)、1 名技术代表及 1 名审议陪审官。',
      refereeTitle: '场上主裁判 (Center Referee - CR):',
      refereeDesc: '全权掌控赛台进程，监督运动安全，下达韩语口令手势，宣告犯规扣分判罚并裁定最终胜负。',
      judgesTitle: '边裁判团队 (3名 Corner Judges):',
      judgesDesc: '佩戴专用打分按键，实时独立判定并录入有效正拳击打得分以及高难度旋转技术加分。',
      taTitle: '技术代表 (Technical Delegate - TD):',
      taDesc: '全面督导赛场运作、竞赛日程合规性、种子签位编排及规章仲裁裁决。',
      csTitle: '赛事监督委员会 (CSB):',
      csDesc: '复核官方书面申诉，监督录像审议席 (IVR) 仲裁工作，签署最终违纪处罚决定。',
      signalsTitle: '主裁判口令与官方手势全解析',
      signalsSub: '世界跆拳道联合会全球统一使用的韩国传统武道官方裁判执法口令。',
    },

    divisions: {
      title: '竞技竞赛组别与体重级别设定 (第4条)',
      sub: '涵盖奥运会简化量级、世界锦标赛成年 8 个级别、青年锦标赛及少年组身高体重双维矩阵。',
      olympicMen: '男子奥运级别 (4 个量级)',
      olympicWomen: '女子奥运级别 (4 个量级)',
      worldSenior: '世锦赛成年组级别 (男女各 8 个体重级)',
      juniorTitle: '世锦赛青年组级别 (15–17 岁)',
      cadetTitle: '少年组身高与体重指数双维矩阵 (第4.3条及附录 II)',
      cadetSub: '基于骨骼发育与 BMI 指数设立的少年选手 (12–14 岁) 安全竞技配对分级模型。',
      btnCadetBoys: '少年男子组 (Cadet Boys)',
      btnCadetGirls: '少年女子组 (Cadet Girls)',
      colHeight: '身高组别级别',
      colMinWeight: '法定最低体重',
      colMaxWeight: '法定最高体重上限',
    },

    scoring: {
      pointsTitle: '得分击打部位、有效分值矩阵与 PSS 感应阈值 (第11条)',
      pointsSub: '采用 Daedo Gen2 / KP&P 最新无线发射感应系统，确保毫秒级客观电子计分。',
      colTarget: '击打有效区域',
      colTechnique: '进攻腿法/拳法',
      colPoints: '获计分值',
      colBonus: '技术加分',
      colDesc: '电子裁判判定细则',
      bestOf3Title: '三局两胜独立计分对抗机制 (第10条)',
      bestOf3Badge: '2026 奥运核心法则',
      bestOf3Desc:
        '每场比赛采取三局独立结算制 (每局净打 2 分钟)。先赢下两 (2) 局的选手直接胜出。每一局结束时比分彻底清零，次局以 0–0 重新开局。',
      tieBreakTitle: '每局结束出现平分时的法定优势判定优先级 (Tie-Breaker):',
      tieBreak1: '1. 旋转技术动作得分较高者获胜 (后踢、后旋等)。',
      tieBreak2: '2. 高分值技术动作较多者获胜 (击头腿法 > 躯干腿法 > 冲拳)。',
      tieBreak3: '3. 电子护具感应器记录的有效冲击碰撞次数较多者获胜。',
      tieBreak4: '4. 该局比赛中被判罚扣分 (Gam-jeom) 较少者获胜。',
      gamjeomTitle: '官方违规行为扣分判罚细则 Gam-Jeom (第13条)',
      gamjeomSub: '所有犯规均即刻判罚给对方直接增加 1 分。单局比赛中累计被扣满 5 次犯规者，该局直接判负。',
      colCode: '规则代码',
      colInfraction: '官方禁止行为',
      colPenalty: '判罚结果',
      colExplanation: '裁判法官方判定详解',
      yellowCardTitle: '教练员纪律处分 (黄牌警告机制)',
      yellowCardDesc:
        '抗议裁判判定、未获允许擅自进入比赛台或发表侮辱性言论，裁判将直接出示黄牌 (+1分给对方选手)。单场累积两张黄牌将被取消教练资格并驱逐出馆。',
      pointGapTitle: '分差优势胜判定 (12分优势提前终结局)',
      pointGapDesc:
        '在少年组及青年组对抗中，若任一方在局内达到 12 分分差，主裁判将即刻终止本局并裁定领先方拿下该局 (成年组大奖赛及奥运决赛不适用优势胜)。',
    },

    safety: {
      equipmentTitle: '运动员法定强制安全护具配置标准 (第5条)',
      equipmentSub: '所有穿戴护具必须具备世界跆拳道联盟官方认证标签 (WT Approved Logo)。',
      ivrTitle: '即时录像审议机制 IVR (第21条)',
      ivrBadge: '每场持有 1 张审议卡',
      ivrDesc:
        '每场比赛每位教练配备一 (1) 张专属 IVR 申诉卡。申诉成功则卡片予以退回保留；若申诉被仲裁委员会驳回，该卡片在后续局次中彻底作废。',
      ivrAllowedTitle: '允许提出录像审议的项目范围:',
      ivrAllowedItems: [
        '旋转动作技术加分申请 (+2分)',
        '击中对方头部或己方头部护具的实际接触真实性',
        '对对方选手的犯规扣分申请: 倒地、出界或裁判喊停后击打',
        '对方在犯规动作后随即得分的得分撤销申请',
      ],
      ivrForbiddenTitle: '严禁提出录像审议的项目:',
      ivrForbiddenItems: [
        '电子护具感应击打力度达标与否 (由发射器自动测量)',
        '冲拳是否有效击中的主观认定',
        '关于选手消极消磨时间或拒绝进攻的主观判定',
      ],
      simTitle: '团体对抗生命血条模拟器 (150 HP 机制)',
      simSub: '世跆联先锋团体实战对抗赛游戏化血条规则互动演练平台。',
      chungLabel: '青方团队 (Chung)',
      hongLabel: '红方团队 (Hong)',
      btnPunch: '有效冲拳 (-5 HP)',
      btnBodyKick: '躯干腿法 (-10 HP)',
      btnHeadKick: '头部高踢 (-15 HP)',
      btnTurningBody: '旋转踢胸 (-20 HP)',
      btnTurningHead: '旋转击头 (-30 HP)',
      btnGamjeom: '犯规扣血 (-5 HP)',
      btnPassive: '消极受罚 (双倍掉血)',
      btnReset: '重置模拟对战',
      passiveAlert: '消极避战惩罚已激活: 未来 10 秒内承受的所有攻击伤害全部翻倍 (x2)!',
      winnerChung: '青方 (Chung) 终结对手拿下本局!',
      winnerHong: '红方 (Hong) 终结对手拿下本局!',
      matchTie: '对战交锋激烈进行中',
      doctorTitle: '赛台随行医生与医疗伤停规程 (第18条)',
      doctorDesc:
        '运动员受伤后享有最多 1 分钟的赛台医疗评估时间 (Kye-shi)。仅限持有世跆联官方医疗认证资质的医师方可上台救治。',
    },

    guide: {
      title: '新手与参赛选手实战锦标赛全流程指南',
      sub: '从称重检录、电子护具配对到冠军领奖台的完整锦标赛通关流程。',
      stage1Title: '阶段 1: 官方精准称重与身份检录认证',
      stage1Desc:
        '在赛前一日上午 10:00–12:00 进行。必须携带世跆联全球运动员执照 (GAL) 与护照，着标准道裤称量 (体重误差依规严格执行)。',
      stage2Title: '阶段 2: 热身备战与检录处装备复核',
      stage2Desc:
        '提前 90 分钟抵达热身馆。赛前 30 分钟在检录台完成 PSS 感应脚套与护头无线信道配对，护齿、护裆及绷带须接受全面验核。',
      stage3Title: '阶段 3: 候场入场与赛台礼仪规范',
      stage3Desc:
        '跟随教练入场落座于指导席。登台后面向裁判立正敬礼 (Cha-ryeot, Kyeong-rye)，转向对手行礼，并在主裁判口令下呈准备姿势。',
      stage4Title: '阶段 4: 两分钟实战局内节奏把控',
      stage4Desc:
        '掌控 2 分钟高强度交锋。牢牢占据 8x8m 中央枢纽，切忌盲目后撤踏入 60cm 警戒带。留意教练战术提示与 IVR 举卡时机。',
      stage5Title: '阶段 5: 赛后致意与体能快速恢复',
      stage5Desc:
        '与对手及对方教练握手致意，保持武道最高敬意。赛后即刻补充电解质水分并进行肌肉排酸冷敷。',
      goldenRulesTitle: '锦标赛决胜五大黄金法则:',
      goldenRules: [
        '在主裁判明确喊出“分 (Kal-yeo)”之前，切勿停止防守或进攻。',
        '切勿以倒地或出界来规避打击，一次 Gam-jeom 就等于直接送给对方 1 分。',
        '上台前务必在测试护具前确认电子感应脚套洁净无磨损，且发射器信号灵敏。',
        '时刻保持与场上主裁判的眼神接触，严格服从所有韩语口令。',
        '无论胜负，时刻保持对对手、裁判与教练的崇高敬意，恪守跆拳道武道精神。',
      ],
    },

    poomsaeCommon: {
      title: 'WT 公认品势竞赛通则与通用标准 (第1–5条)',
      sub: '涵盖 10m x 10m 标准比赛台搭建、各组别强制抽签品势池及国际赛事年龄划分。',
      fopDesc: '比赛台为高弹性专用软垫，规格为 10m x 10m，四周预留至少 1 米的外围安全缓冲区。',
      divisionsTitle: '官方品势竞赛年龄组别划分',
      divisionsSub: '从少年组 (12–14 岁) 到大师组 (66 岁以上)，覆盖个人赛、混双赛 (男女各1人) 及团体赛 (3人)。',
      poolsTitle: '各组别强制指定品势抽签池',
      poolsSub: '赛前由世跆联官方电子随机抽签系统统一抽取该轮次必演品势套路。',
      commandsTitle: '单败淘汰制场上协调员口令执法流程',
      commandsSub: '公认品势淘汰赛主场协调官的标准规范进出场执裁序列。',
      colStep: '执裁阶段',
      colFirst: '第一指定品势口令',
      colSecond: '第二指定品势口令',
      colProtocol: '赛台对应规范动作',
    },

    poomsaeRecognized: {
      title: '公认品势准确度与表现力评分法则 (第6–8条)',
      sub: '十进制裁判打分体系：技术准确度 (4.0分) + 艺术表现力 (6.0分)。',
      accuracyTitle: '技术准确度得分 (基准 4.0 分)',
      accuracySub: '按微小错误 (-0.1分) 与严重错误 (-0.3分) 进行扣减。所有失误无次数上限累积扣除。',
      presentationTitle: '艺术表现力得分 (基准 6.0 分)',
      presentationSub: '速度与力量 (2.0) + 节奏与速度调控 (2.0) + 气势与精神表达 (2.0)。',
      minorTitle: '微小技术失误扣分 (-0.1分):',
      majorTitle: '严重结构性技术失误扣分 (-0.3分):',
      proceduralTitle: '赛程纪律类程序扣分 (-0.3 / -0.6分):',
      speedPower: '速度与力量 (2.0分): 击打加速度强劲，定式瞬间制动清晰，动作干脆利落。',
      rhythmTempo: '节奏与速度 (2.0分): 动作与呼吸顺畅协调，起承转合间停顿长短合度，无生硬抢节奏。',
      energyExpression: '气势与精神表达 (2.0分): 眼神注视精准，桩步沉稳，展现传统武道威仪与洪亮发声。',
      slowTitle: '慢动作技术时间标准执行规范 (Slow Movements)',
      slowSub: '慢动作法定时间区间：推荐 5–8 秒动作及标准 8 秒匀速行进动作。',
      colPoomsae: '品势套路',
      colStance: '对应步型',
      colTechnique: '慢动作技术名称',
      colDuration: '法定标准时长',
    },

    poomsaeFreestyle: {
      title: '自由自选品势 (Freestyle) 技术要求与评分标准 (第9条)',
      sub: '配乐纯器乐自编竞技套路：技术动作分 (6.0分) + 表现力分 (4.0分)。',
      skillsTitle: '六大必修技术动作打分维度 (6.0分深度分解)',
      skillsSub: '每个自选技术动作均有严苛的高度、旋转周数及落地稳定性考量标准。',
      calcTitle: '自选品势技术动作实时模拟打分计算器',
      calcSub: '输入基准完成度、难度加分层级与失误扣分，毫秒级模拟裁判终端打分结果。',
      calcBaseLabel: '基准完成度 (0.1–0.7):',
      calcBonusLabel: '难度加分层级 (+0.1 / +0.2 / +0.3):',
      calcDeductionLabel: '失误扣减 (-0.1 / -0.2 / -0.3):',
      calcTotalLabel: '该项技术动作最终得分:',
      breakingTitle: '各动作配属击破木板法定数量',
      breakingSub: '自选品势腾空过程中精准击破的高密度标准松木板规范。',
      assistanceTitle: '队友托举与空中辅助授权矩阵',
      assistanceSub: '严格界定个人/混双项目与五人混合团体项目在辅助跳板动作上的合规性。',
      deductionsTitle: '自选自由品势专项扣分与取消资格禁忌',
      deductionsSub: '针对音乐违规、步型缺失、时间违规及纯舞蹈化动作的强制罚则。',
    },

    hanmadang: {
      title: '世界跆拳道汉玛当 (Hanmadang) 国际大会竞技规则',
      sub: '全球跆拳道武道文化的巅峰盛会：威力击破、高空特技击破与全能团体武道示范。',
      powerBreakingTitle: '传统威力击破技术规范 (Power Breaking)',
      specialKyokpaTitle: '高空跳跃与超远距离特技击破 (Special Kyokpa)',
      creativeTitle: '创意品势与全能团体武道演武示范 (All-Around Team Demo)',
    },

    pdfModal: {
      zoomIn: '放大查看',
      zoomOut: '缩小比例',
      download: '下载官方完整 PDF 规则书',
      close: '关闭规则阅览器',
      pageInfo: '世界跆拳道联盟官方规则法定文件',
    },
  },

  ko: {
    badgeAssembly: '세계태권도연맹(WT) 총회 공인 시행',
    badgeInForce: '2026년 1월 1일부 공식 발효 규정',
    heroTitle: '세계태권도연맹(WT) 공인 경기 규칙 및 해석서',
    heroSubtitle:
      '올림픽 공식 경기(겨루기), 고도의 기술적 예술성(공인/자유 품새), 세계 무도 문화 축제(한마당)의 권위 있는 표준 경기 규칙 라이브러리입니다.',
    btnTables: '규정 명세서',
    btnMindmap: '규칙 마인드맵',
    btnPdf: '공식 PDF 모드',
    previewBadge: '규정 요약',

    masterCategories: {
      kyorugi: { label: '1. WT 겨루기 (Kyorugi)', sub: '올림픽 실전 대결', tag: '3회전 2선승제 독립 채점' },
      poomsae: { label: '2. WT 품새 (Poomsae)', sub: '공인 품새 및 자유 품새', tag: '정확성 4.0 + 연출성 6.0' },
      hanmadang: { label: '3. 한마당 (Hanmadang)', sub: '격파 및 종합시범', tag: '무도 문화 축제' },
    },

    mindmap: {
      title: '경기 규칙 체계 구조적 마인드맵',
      sub: '심판 판정 및 득점 채점 계층 구조',
      root: '세계태권도연맹 공인 경기 규칙 및 규정집',
      kyorugiBranch: '1. WT 겨루기 (올림픽 실전)',
      poomsaeBranch: '2. WT 품새 (공인 및 자유 품새)',
      hanmadangBranch: '3. 한마당 (무도 격파 및 시범)',
      k1: '3회전 2선승제',
      k1Val: '3라운드 x 2분 (매 라운드 0-0 리셋)',
      k2: 'PSS 전자호구 득점',
      k2Val: '1, 2, 3점 (+2점 회전 기술 보너스)',
      k3: '감점(Gam-jeom) 벌칙',
      k3Val: '상대방에게 +1점 부여 (5회 감점 시 패)',
      k4: '비디오 판독(IVR)',
      k4Val: '경기당 1장의 판독 청구 카드',
      p1: '공통 기반 규정',
      p1Val: '10x10m 경기대 • 연령별 추첨 풀',
      p2: '공인품새 채점 배점',
      p2Val: '정확도 4.0점 + 연출성 6.0점 = 10.0',
      p3: '정확도 감점 체계',
      p3Val: '-0.1 경미한 결점 / -0.3 중대한 결점',
      p4: '자유품새 채점',
      p4Val: '기술력 6.0(필수 5대 기술) + 연출성 4.0',
      h1: '위력격파 부문',
      h1Val: '주먹격파, 손날격파, 옆차기, 뒤차기',
      h2: '특기격파 부문',
      h2Val: '높이뛰어격파, 멀리뛰어격파, 회전격파',
      h3: '창작 및 시범',
      h3Val: '창작품새 & 종합시범 경연',
    },

    kyorugiTabs: {
      overview: '1. 경기장 및 심판단',
      divisions: '2. 체급 및 신장 매트릭스',
      scoring: '3. 득점 및 감점 기준',
      safety: '4. 안전장비, IVR 및 체력바',
      guide: '5. 선수 실전 매뉴얼',
    },

    poomsaeTabs: {
      common: '1. 경기장 및 공통 기반',
      recognized: '2. 공인 품새 채점 기준',
      freestyle: '3. 자유 품새 (Freestyle)',
    },

    overview: {
      govTitle: '1. 총칙, 목적 및 제도적 규범 (제1조–제2조)',
      govBadge: '2026년 6월 1일부 전면 시행',
      govDesc:
        '세계태권도연맹(WT) 공인 경기 규칙 및 해석서는 연맹이 주최, 승인 또는 공인하는 모든 국제 겨루기 및 단체 겨루기 경기를 관할하는 유일한 공식 법규입니다.',
      standardTitle: '표준화 원칙:',
      standardDesc: '모든 회원국 협회(MNA), 참가 선수, 지도자 및 국제 심판은 통일된 WT 경기 규칙을 엄격히 준수해야 합니다.',
      modTitle: '규칙 변경 승인:',
      modDesc: '경기 규칙의 변경은 최소 한(1) 개월 전 WT의 공식 서면 승인을 받아야 하며, 임의 변경 시 공인이 취소될 수 있습니다.',
      codeTitle: '제도적 연계 규약:',
      codeDesc: 'WT 규관, 분쟁 해결 규정, WT 의료 헌장 및 WADA 반도핑 규정을 필히 준수해야 합니다.',
      fopTitle: '경기장(FOP) 및 60cm 경계구역(Alert Area) 규격 (제3조)',
      fopSub: '사각(8m x 8m) 또는 팔각(직경 약 8m, 변 3.3m) 형태로 구성되며, 10m x 10m 내지 12m x 12m 안전 경기대 내에 설치됩니다.',
      alertBadge: '60cm 경계구역 완충 밴드',
      safetyOuter: '안전구역 • 10m x 10m 내지 12m x 12m 외곽 한계선',
      boundaryLine: '한계선 (Boundary Line)',
      alertBand: '60cm 경계구역 완충 밴드 (명확한 대비 색상)',
      contestArea: '8m x 8m 경기지역 (또는 직경 약 8m 팔각형)',
      contestSub: '청(Chung) 대 홍(Hong) 실전 교전 핵심 구역',
      coachStation: '지도자(코치) 착석석',
      noTapeNote: '테이프 반사선 금지 • 순수 매트 색상 대비 원칙',
      platformNote: '* 플랫폼 설치 기준: 높이 0.6m~1.0m, 외곽 안전 경사각은 30도 미만으로 시공.',
      lightingTitle: '국제 방송 중계 조도:',
      lightingTraining: '보조 및 훈련장 조도:',
      tempTitle: '경기장 내부 온도:',
      humidityTitle: '경기장 상대 습도:',
      officialsTitle: '경기 임원진 및 심판단 배정 체계 (제14조–제16조)',
      officialsDesc: '공식 코트 심판진은 주심 1명, 부심 3명, 기술대표(TD) 1명, 소청심사위원으로 구성됩니다.',
      refereeTitle: '주심 (Center Referee - CR):',
      refereeDesc: '경기장 내부를 전담 통제하며, 선수 안전 보호, 구령 및 수신호 하달, 감점 선고 및 최종 승패를 선언합니다.',
      judgesTitle: '부심 (3명 Corner Judges):',
      judgesDesc: '경기장 모서리에 위치하여 주먹 유효타 및 회전 기술 보너스 포인트를 전용 채점 단말기로 즉각 판정합니다.',
      taTitle: '기술대표 (Technical Delegate - TD):',
      taDesc: '경기 운영 총괄, 대진표 추첨 감독, 일정 준수 및 규정 분쟁을 공식 심의합니다.',
      csTitle: '경기감독위원회 (CSB):',
      csDesc: '공식 소청서를 심의하고, 비디오 판독관을 감독하며 최종 징계 처분을 확정합니다.',
      signalsTitle: '주심 공식 구령 및 표준 수신호 가이드',
      signalsSub: '전 세계 모든 WT 공인 국제대회에서 사용되는 공식 한국어 경기 구령입니다.',
    },

    divisions: {
      title: '경기 체급 및 연령별 부별 구분 (제4조)',
      sub: '올림픽 축소 4체급, 세계선수권 8체급, 주니어 및 카뎃(유소년) 신장-체중 매트릭스.',
      olympicMen: '올림픽 남자 체급 (4체급)',
      olympicWomen: '올림픽 여자 체급 (4체급)',
      worldSenior: '세계선수권 시니어 체급 (남녀 각 8체급)',
      juniorTitle: '주니어 선수권 체급 (15–17세)',
      cadetTitle: '카뎃(유소년) 신장 대비 체중 비율 부별 매트릭스 (제4.3조 & 부록 II)',
      cadetSub: '유소년 선수(12~14세)의 신체 성장과 BMI 지수를 고려한 과학적 안전 경기 매칭 모델입니다.',
      btnCadetBoys: '카뎃 남자부 (Cadet Boys)',
      btnCadetGirls: '카뎃 여자부 (Cadet Girls)',
      colHeight: '신장 부별 규격',
      colMinWeight: '공인 최소 체중',
      colMaxWeight: '공인 최대 체중',
    },

    scoring: {
      pointsTitle: '득점 부위, 유효 득점 배점 및 PSS 전자호구 기준 (제11조)',
      pointsSub: '대도 Gen2 / KP&P 최신 센서 시스템을 통해 밀리초 단위의 객관적 압력 타격을 감지합니다.',
      colTarget: '타격 허용 부위',
      colTechnique: '공격 기술 형태',
      colPoints: '공식 배점',
      colBonus: '기술 추가점',
      colDesc: '전자 판정 및 인정 기준',
      bestOf3Title: '라운드제 3회전 2선승제 경기 방식 (제10조)',
      bestOf3Badge: '2026 올림픽 표준',
      bestOf3Desc:
        '각 라운드는 2분씩 3라운드로 진행되며, 2개 라운드를 먼저 획득한 선수가 최종 승리합니다. 매 라운드 종료 후 점수는 0–0으로 완전히 리셋됩니다.',
      tieBreakTitle: '라운드 종료 시 동점 발생 시 우세 판정 우선순위 (Tie-Breaker):',
      tieBreak1: '1. 회전 발차기 기술로 획득한 득점이 높은 선수.',
      tieBreak2: '2. 더 높은 배점의 기술로 득점한 선수 (머리 공격 > 몸통 공격 > 주먹 공격).',
      tieBreak3: '3. 전자호구에 기록된 유효 타격 충격 횟수가 많은 선수.',
      tieBreak4: '4. 해당 라운드에서 받은 감점(Gam-jeom) 횟수가 적은 선수.',
      gamjeomTitle: '공식 금지행위 및 감점(Gam-Jeom) 벌칙 기준 (제13조)',
      gamjeomSub: '모든 감점은 즉시 상대 선수에게 +1점이 부여됩니다. 한 라운드에서 감점 5회 누적 시 해당 라운드는 자동 패배 처리됩니다.',
      colCode: '규칙 코드',
      colInfraction: '금지 행위',
      colPenalty: '벌칙 선고',
      colExplanation: '공식 판례 해설 및 적용 기준',
      yellowCardTitle: '지도자(코치) 징계 기준 (옐로카드 제도)',
      yellowCardDesc:
        '심판 판정에 부당하게 항의하거나, 허가 없이 경기장에 난입하거나 비신사적 언행을 보일 시 옐로카드가 즉시 선고됩니다(상대 선수에게 +1점). 한 경기 2회 누적 시 즉각 퇴장 조치됩니다.',
      pointGapTitle: '점수차 승리 규정 (12점차 라운드 종료제)',
      pointGapDesc:
        '카뎃 및 주니어 부문 경기 중 12점 이상의 점수차가 발생하면 주심이 경기를 중단하고 리드하는 선수에게 라운드 승리를 부여합니다(시니어 올림픽 결승 미적용).',
    },

    safety: {
      equipmentTitle: '선수 공식 의무 공인 보호장구 착용 기준 (제5조)',
      equipmentSub: '착용하는 모든 장구는 세계태권도연맹 공식 공인 마크(WT Approved)가 부착되어 있어야 합니다.',
      ivrTitle: '비디오 판독(IVR) 운영 규정 (제21조)',
      ivrBadge: '경기당 1장의 청구 카드',
      ivrDesc:
        '지도자는 경기당 1장의 비디오 판독 요청 카드를 부여받습니다. 판독 결과 정정 판정 시 카드는 유지되며, 기각될 경우 남은 경기 동안 카드는 회수됩니다.',
      ivrAllowedTitle: '비디오 판독 요청 가능 사안:',
      ivrAllowedItems: [
        '회전 기술에 대한 기술 추가 득점 (+2점)',
        '상대방 또는 본인 머리 공격의 유효 접촉 여부',
        '상대방의 감점 행위: 넘어짐, 한계선 이탈, 갈려 후 타격',
        '득점 직전에 발생한 반칙 행위로 인한 득점 무효화',
      ],
      ivrForbiddenTitle: '비디오 판독 요청 불가 사안:',
      ivrForbiddenItems: [
        '전자호구 강도 레벨 유효성 (충격치 도달 여부)',
        '주먹 공격의 득점 인정 여부',
        '소극적 경기 운영이나 지연 행위에 대한 주관적 판단',
      ],
      simTitle: '태권도 파이팅 체력바 시뮬레이터 (150 HP 시스템)',
      simSub: 'WT 팀 대항전의 인터랙티브 게이밍 체력 게이지 감소 규칙을 체험할 수 있는 시뮬레이션입니다.',
      chungLabel: '청팀 (Chung Team)',
      hongLabel: '홍팀 (Hong Team)',
      btnPunch: '주먹 유효타 (-5 HP)',
      btnBodyKick: '몸통 발차기 (-10 HP)',
      btnHeadKick: '머리 발차기 (-15 HP)',
      btnTurningBody: '회전 몸통타 (-20 HP)',
      btnTurningHead: '회전 머리타 (-30 HP)',
      btnGamjeom: '감점 벌칙 (-5 HP)',
      btnPassive: '소극적 태도 (피해 x2)',
      btnReset: '시뮬레이터 초기화',
      passiveAlert: '소극적 경기 페널티 발동: 향후 10초간 받는 모든 타격 데미지가 2배로 증가합니다!',
      winnerChung: '청팀 (Chung) 라운드 KO 승리!',
      winnerHong: '홍팀 (Hong) 라운드 KO 승리!',
      matchTie: '라운드 교전 진행 중',
      doctorTitle: '경기장 닥터 체어 및 응급 처치 규정 (제18조)',
      doctorDesc:
        '부상 발생 시 1분간의 계시(Kye-shi) 시간이 부여되며, 공인된 WT 의무관만이 경기대 위에서 진료를 시행할 수 있습니다.',
    },

    guide: {
      title: '신인 및 출전 선수를 위한 토너먼트 실전 매뉴얼',
      sub: '계체량 통과부터 전자호구 페어링, 코트 입장 및 시상대 입상까지의 전 과정 가이드.',
      stage1Title: '1단계: 공식 계체 및 선수 ID 카드 검인',
      stage1Desc:
        '경기 전날 10:00~12:00에 진행됩니다. WT 글로벌 라이선스(GAL)와 여권을 지참하고 공식 도복 바지를 착용하고 계체합니다.',
      stage2Title: '2단계: 워밍업존 및 검인대 장구 점검',
      stage2Desc:
        '경기 호출 90분 전 워밍업존에 입실합니다. 경기 30분 전 검인대에서 PSS 센서 양말과 헤드기어 무선 페어링 및 마우스피스를 검사받습니다.',
      stage3Title: '3단계: 코트 입장 및 경기장 예절',
      stage3Desc:
        '코치와 함께 지정된 코칭 체어로 이동합니다. 주심에게 차렷 경례 후 상대 선수에게 인사하고 준호 구령에 맞춰 기본 준비서기를 취합니다.',
      stage4Title: '4단계: 2분 라운드 실전 운영 전략',
      stage4Desc:
        '2분 동안 8x8m 중앙을 선점하며 경기를 주도합니다. 60cm 경계 완충구역으로 밀리지 않도록 유의하고 코치의 IVR 청구 사인을 경청합니다.',
      stage5Title: '5단계: 경기 후 퇴장 의례 및 리커버리',
      stage5Desc:
        '상대 선수와 상대 코치에게 정중히 인사합니다. 스포츠맨십 악수를 나누고 즉각 수분 섭취와 젖산 배출 쿨다운 스트레칭을 진행합니다.',
      goldenRulesTitle: '토너먼트 승리를 위한 5대 황금률:',
      goldenRules: [
        '주심이 명확하게 "갈려"를 외치기 전까지는 절대 방어를 풀지 마십시오.',
        '공격을 피하기 위해 고의로 넘어지거나 한계선을 벗어나지 마십시오(상대에게 쉬운 1점을 헌납합니다).',
        '경기 전 테스트 킥존에서 PSS 전자양말 센서가 정상 작동하는지 반드시 직접 타격하여 확인하십시오.',
        '주심과 시선을 유지하며 모든 한국어 구령에 신속하게 반응하십시오.',
        '승패를 떠나 예의, 염치, 인내, 극기, 백절불굴의 태권도 무도 정신을 실천하십시오.',
      ],
    },

    poomsaeCommon: {
      title: 'WT 공인 품새 대회 공통 규정 (제1조–제5조)',
      sub: '10m x 10m 표준 경기대 설치 기준, 연령별 지정 품새 추첨 풀 및 국제 경기 구분.',
      fopDesc: '경기대는 10m x 10m 크기의 탄성 매트로 시공되며 외곽에 1m 이상의 안전 완충 공간을 확보해야 합니다.',
      divisionsTitle: '공식 공인 품새 연령별 부별 구분',
      divisionsSub: '카뎃(12~14세)부터 마스터(66세 이상)까지 개인전, 페어전(남1+여1), 단체전(3인)으로 세분화됩니다.',
      poolsTitle: '부별 지정 품새 추첨 풀',
      poolsSub: '경기 직전 컴퓨터 무작위 전자 추첨을 통해 경기할 지정 품새가 확정됩니다.',
      commandsTitle: '단패 토너먼트 진행 코디네이터 표준 구령 절차',
      commandsSub: '공인품새 컷오프 및 토너먼트 경기 시 코트 코디네이터가 하달하는 공식 의전 절차입니다.',
      colStep: '진행 단계',
      colFirst: '제1품새 공식 구령',
      colSecond: '제2품새 공식 구령',
      colProtocol: '선수 및 코트 행동 요령',
    },

    poomsaeRecognized: {
      title: '공인 품새 채점 기준: 정확성 및 연출성 (제6조–제8조)',
      sub: '10.0 만점 채점 시스템: 정확도(4.0점) + 연출성(6.0점).',
      accuracyTitle: '정확도 채점 기준 (기본 4.0점 배점)',
      accuracySub: '경미한 결점(-0.1점)과 중대한 결점(-0.3점)으로 감점하며, 횟수 제한 없이 모든 오류가 누적 감점됩니다.',
      presentationTitle: '연출성 채점 기준 (기본 6.0점 배점)',
      presentationSub: '속도와 힘(2.0점) + 리듬 및 템포(2.0점) + 기의 표현(2.0점).',
      minorTitle: '경미한 결점 감점 사유 (-0.1점):',
      majorTitle: '중대한 결점 감점 사유 (-0.3점):',
      proceduralTitle: '절차적 규정 감점 사유 (-0.3점 / -0.6점):',
      speedPower: '속도와 힘 (2.0점): 폭발적인 가속도, 타격 지점에서의 완벽한 제동력과 강력한 임팩트.',
      rhythmTempo: '리듬 및 템포 (2.0점): 유기적인 호흡과 동작의 연결, 인위적인 속도 왜곡 없이 자연스러운 흐름.',
      energyExpression: '기의 표현 (2.0점): 당당한 시선 처리, 흔들림 없는 중심 안정감, 힘차고 명확한 기합.',
      slowTitle: '느린 동작(Slow Movements) 규정 시간 가이드라인',
      slowSub: '동작별 표준 소요 시간: 5~8초 권장 동작 및 8초 정밀 유지 동작.',
      colPoomsae: '대상 품새',
      colStance: '적용 서기',
      colTechnique: '느린 동작 기술명',
      colDuration: '규정 소요 시간',
    },

    poomsaeFreestyle: {
      title: '자유 품새 (Freestyle) 기술 규정 및 평가 기준 (제9조)',
      sub: '순수 기악곡 반주에 맞춘 창작 연무: 기술력(6.0점) + 연출성(4.0점).',
      skillsTitle: '5대 필수 기술 및 격파 채점 (6.0점 배점 구조)',
      skillsSub: '모든 기술은 신장, 회전 각도, 무릎 폄 각도 및 착지 안정성에 따라 정밀 평가됩니다.',
      calcTitle: '자유품새 기술점수 실시간 인터랙티브 계산기',
      calcSub: '기본 완성도, 보너스 티어 및 감점 수치를 입력하여 심판 채점 단말기의 결과를 즉시 산출합니다.',
      calcBaseLabel: '기본 완성도 (0.1~0.7점):',
      calcBonusLabel: '난이도 보너스 (+0.1 / +0.2 / +0.3점):',
      calcDeductionLabel: '자세 불안정 감점 (-0.1 / -0.2 / -0.3점):',
      calcTotalLabel: '최종 산출 기술 점수:',
      breakingTitle: '기술별 송판 격파 필수 규정',
      breakingSub: '자유품새 체공 동작 중 격파해야 하는 표준 규격 송판 수량입니다.',
      assistanceTitle: '팀원 보조 및 도약 지지대 허용 매트릭스',
      assistanceSub: '개인/페어전과 혼성 단체전 간의 팀원 도약 보조 허용 기준입니다.',
      deductionsTitle: '자유품새 전용 감점 및 실격 규정',
      deductionsSub: '음악 가사 위반, 필수 서기 누락, 시간 초과 및 순수 댄스 동작에 대한 엄격한 감점.',
    },

    hanmadang: {
      title: '세계태권도한마당 공인 경기 규정집',
      sub: '지구촌 태권도 가족의 무도 문화 대축제: 위력격파, 특기격파 및 종합시범.',
      powerBreakingTitle: '위력격파 (주먹, 손날, 옆차기, 뒤차기) 규격',
      specialKyokpaTitle: '특기격파 (높이뛰어격파, 멀리뛰어격파, 다회전격파)',
      creativeTitle: '창작품새 및 팀 종합시범 경연 기준',
    },

    pdfModal: {
      zoomIn: '확대',
      zoomOut: '축소',
      download: '공식 규정 PDF 다운로드',
      close: '규정집 닫기',
      pageInfo: '세계태권도연맹 공식 경기 규칙 원문',
    },
  },
}

// ==============================================================================
// LOCALIZED DATASETS (POINT VALUES, GAM-JEOMS, REFEREE SIGNALS, POOMSAE & HANMADANG)
// ==============================================================================

export interface LocalizedPointValue {
  target: string
  technique: string
  points: string
  bonus: string
  description: string
}

export function getLocalizedKyorugiPointValues(lang: string): LocalizedPointValue[] {
  switch (lang) {
    case 'km':
      return [
        { target: 'ដងខ្លួន (Hogu)', technique: 'ម៉ាត់ចំដងខ្លួន (Momtong Jireugi)', points: '១ ពិន្ទុ', bonus: 'គ្មាន', description: 'ការវាយដោយកណ្តាប់ដៃត្រង់ចំអាវក្រោះអេឡិចត្រូនិកបញ្ជាក់ដោយចៅក្រម/ឧបករណ៍ចាប់សញ្ញា។' },
        { target: 'ដងខ្លួន (Hogu)', technique: 'ទាត់ត្រង់ចំដងខ្លួន (ទាត់ផ្អៀង/ត្រង់)', points: '២ ពិន្ទុ', bonus: 'គ្មាន', description: 'ការទាត់ចំអាវក្រោះអេឡិចត្រូនិកលើសពីកម្រិតសម្ពាធឧបករណ៍បញ្ជូន។' },
        { target: 'ក្បាល (Helmet)', technique: 'ទាត់ត្រង់ចំក្បាល (ទាត់សង្កត់/ផ្អៀង)', points: '៣ ពិន្ទុ', bonus: 'គ្មាន', description: 'ការទាត់ប៉ះមួកការពារក្បាលដែលបញ្ជូនសញ្ញាអេឡិចត្រូនិក។' },
        { target: 'ដងខ្លួន (Hogu)', technique: 'ទាត់បង្វិលចំដងខ្លួន (Dwichagi / Back Kick)', points: '៤ ពិន្ទុ', bonus: 'ទ្វេដងពិន្ទុមូលដ្ឋាន', description: 'ទាត់បង្វិលចំដងខ្លួន (២ មូលដ្ឋាន + ២ បច្ចេកទេស)។ ត្រូវមានការបង្វិលក្បាល និងស្មាក្នុងពេលតែមួយ។' },
        { target: 'ក្បាល (Helmet)', technique: 'ទាត់បង្វិលចំក្បាល (360° / Spinning Hook)', points: '៦ ពិន្ទុ', bonus: 'ទ្វេដងពិន្ទុមូលដ្ឋាន', description: 'ទាត់បង្វិលចំក្បាល (៣ មូលដ្ឋាន + ៣ បច្ចេកទេស)។ ត្រូវមានការបង្វិលពេញលេញ។' },
        { target: 'ការពិន័យគូប្រកួត', technique: 'កំហុស Gam-jeom របស់គូប្រកួត', points: '១ ពិន្ទុ', bonus: '+១ ដល់គូប្រកួត', description: 'ពិន្ទុផ្តល់ជូនភ្លាមៗដល់កីឡាកររាល់ពេលគូប្រកួតទទួលការពិន័យ Gam-jeom។' },
        { target: '១០ វិនាទីចុងក្រោយ', technique: 'Gam-jeom គេចវេសក្នុង ១០ វិនាទីចុងក្រោយ', points: '២ ពិន្ទុ', bonus: 'ពិន្ទុទ្វេដង', description: 'ការចេញក្រៅបន្ទាត់ ការដួល ឬការគេចវេសក្នុង ១០វិនាទីចុងក្រោយ ផ្តល់ ២ ពិន្ទុដល់គូប្រកួត (កត់ត្រា ១ Gam-jeom)។' },
      ]
    case 'zh':
      return [
        { target: '躯干护具 (Hogu)', technique: '正拳击胸 (Momtong Jireugi)', points: '1 分', bonus: '无加分', description: '以正拳拳面直线击打电子护胸躯干有效部位，经边裁按键或传感器确认为有效得分。' },
        { target: '躯干护具 (Hogu)', technique: '直接腿法击中躯干 (横踢/前踢)', points: '2 分', bonus: '无加分', description: '以脚部击打电子护胸有效区域，传感器撞击力值达到或超过该级别法定阈值。' },
        { target: '头部护具 (Helmet)', technique: '直接腿法击中头部 (横踢/下劈)', points: '3 分', bonus: '无加分', description: '脚部触及电子头盔有效感应区域，触发头部无线传感器产生有效得分信号。' },
        { target: '躯干护具 (Hogu)', technique: '旋转腿法击中躯干 (后踢 / Dwichagi)', points: '4 分', bonus: '基础分翻倍 (+2技术加分)', description: '旋转技术击中躯干护胸 (2分基础分 + 2分旋转技术加分)。头部与肩部必须伴随完整旋转。' },
        { target: '头部护具 (Helmet)', technique: '旋转腿法击中头部 (360°后旋踢 / 旋风踢)', points: '6 分', bonus: '基础分翻倍 (+3技术加分)', description: '旋转技术击中头部护头 (3分基础分 + 3分旋转技术加分)。必须展现出高难度完整空中轴心旋转。' },
        { target: '对手违规罚分', technique: '对方选手被宣告扣分 (Gam-jeom)', points: '1 分', bonus: '直接判给对手 +1分', description: '对方选手在比赛中被场上主裁判判罚一次 Gam-jeom 扣分时，直接奖励己方 1 分。' },
        { target: '最后10秒警示', technique: '比赛局末最后 10 秒消极违规扣分', points: '2 分', bonus: '双倍分值惩戒', description: '比赛结束前 10 秒内故意出界、倒地或逃避打击者，直接判罚给对方选手增加 2 分 (记 1 次 Gam-jeom)。' },
      ]
    case 'ko':
      return [
        { target: '몸통 (Hogu)', technique: '몸통 지르기 (바른 주먹 직격)', points: '1점', bonus: '없음', description: '바른 주먹으로 몸통 전자호구의 득점 부위를 가격하여 센서 또는 부심 합의로 인정된 득점.' },
        { target: '몸통 (Hogu)', technique: '몸통 직선 발차기 (돌려차기, 앞차기)', points: '2점', bonus: '없음', description: '발로 몸통 전자호구의 득점 부위를 가격하여 해당 체급 유효 충격 강도 레벨을 초과한 타격.' },
        { target: '머리 (Helmet)', technique: '머리 직선 발차기 (내려차기, 돌려차기)', points: '3점', bonus: '없음', description: '발로 전자 헤드기어의 유효 득점 부위를 접촉하여 전자 센서가 감지한 정당한 타격.' },
        { target: '몸통 (Hogu)', technique: '몸통 회전 공격 (뒤차기 / 돌개차기)', points: '4점', bonus: '기본점 2배 (+2 기술 보너스)', description: '몸통 부위에 성공한 회전 공격 (기본 2점 + 회전 가산 2점). 어깨와 머리의 완벽한 회전 수반 필수.' },
        { target: '머리 (Helmet)', technique: '머리 회전 공격 (360° 뒤후려차기)', points: '6점', bonus: '기본점 2배 (+3 기술 보너스)', description: '머리 부위에 성공한 회전 공격 (기본 3점 + 회전 가산 3점). 완전한 고난도 축 회전 타격 필수.' },
        { target: '상대방 벌칙', technique: '상대방 감점(Gam-jeom) 선고', points: '1점', bonus: '상대에게 +1점 즉시 부여', description: '상대 선수가 주심으로부터 감점 처분을 받을 때마다 본인에게 즉시 1점이 가산됩니다.' },
        { target: '종료 10초 전 경보', technique: '종료 10초 이내 소극적 감점 행위', points: '2점', bonus: '2배 벌점 선고', description: '종료 10초 이내 한계선 이탈, 고의 넘어짐 발생 시 상대에게 즉시 2점 부여 (감점 1회 기록).' },
      ]
    default:
      return [
        { target: 'Trunk (Hogu)', technique: 'Punch (Momtong Jireugi)', points: '1 Point', bonus: 'None', description: 'Impact with straight knuckle on the electronic trunk protector confirmed by judges/sensors.' },
        { target: 'Trunk (Hogu)', technique: 'Direct Foot Attack (Linear/Roundhouse)', points: '2 Points', bonus: 'None', description: 'Impact on electronic Hogu exceeding transmitter pressure threshold.' },
        { target: 'Head (Helmet)', technique: 'Direct Foot Attack (Linear/Ax/Roundhouse)', points: '3 Points', bonus: 'None', description: 'Foot contact triggering electronic head sensor.' },
        { target: 'Trunk (Hogu)', technique: 'Turning Kick (Back Kick / Dwichagi)', points: '4 Points', bonus: 'Doubled Base Score', description: 'Turning kick to trunk (2 base + 2 turning bonus). Must involve simultaneous head and shoulder rotation.' },
        { target: 'Head (Helmet)', technique: 'Turning Kick (360° / Spinning Hook Kick)', points: '6 Points', bonus: 'Doubled Base Score', description: 'Turning kick to head (3 base + 3 turning bonus). Must involve complete rotational execution.' },
        { target: 'Opponent Penalty', technique: 'Opponent Gam-jeom Infraction', points: '1 Point', bonus: '+1 to Opponent', description: 'Point awarded immediately to competitor whenever opponent incurs a Gam-jeom penalty.' },
        { target: 'Final 10s Alert', technique: 'Passive Gam-jeom in Final 10 Seconds', points: '2 Points', bonus: '2x Point Award', description: 'Crossing line, falling, or evading in final 10s awards 2 points to opponent (1 Gam-jeom recorded).' },
      ]
  }
}

export interface LocalizedGamjeom {
  code: string
  infraction: string
  penalty: string
  explanation: string
}

export function getLocalizedGamjeomRules(lang: string): LocalizedGamjeom[] {
  switch (lang) {
    case 'km':
      return [
        { code: 'GAM-01', infraction: 'ចេញក្រៅខ្សែបន្ទាត់ព្រំដែន', penalty: '+១ ពិន្ទុដល់គូប្រកួត', explanation: 'បោះជំហានជើងម្ខាង ឬជើងទាំងពីរចេញក្រៅបន្ទាត់ព្រំដែន ៨x៨ម ទាំងស្រុង។' },
        { code: 'GAM-02', infraction: 'ដួលលើកម្រាល', penalty: '+១ ពិន្ទុដល់គូប្រកួត', explanation: 'ដួលដោយចេតនា ឬអចេតនាដើម្បីគេចពីការវាយប្រហារ ឬកំណត់ចម្ងាយប្រកួតឡើងវិញ។' },
        { code: 'GAM-03', infraction: 'គេចវេស ឬពន្យារពេលប្រកួត', penalty: '+១ ពិន្ទុដល់គូប្រកួត', explanation: 'ការបង្អង់ពេល ដើរថយក្រោយគេចវេស ធ្វើពុតជារបួស ឬសុំផ្អាកប្រកួតដើម្បីរៀបចំសម្ភារៈ។' },
        { code: 'GAM-04', infraction: 'ចាប់ ឱប ឬរុញគូប្រកួត', penalty: '+១ ពិន្ទុដល់គូប្រកួត', explanation: 'ការរុញជាបន្តបន្ទាប់ រុញគូប្រកួតចេញក្រៅសង្វៀន ឬរុញដើម្បីរារាំងការទាត់។' },
        { code: 'GAM-05', infraction: 'រារាំងដោយជើង ឬលើកជើង > ៣វិនាទី', penalty: '+១ ពិន្ទុដល់គូប្រកួត', explanation: 'ទាត់ជើងគូប្រកួត លើកជើងលើសចង្កេះ ៤ ដងឡើង ឬទប់ជើងលើអាកាសលើសពី ៣ វិនាទីដោយមិនទាត់។' },
        { code: 'GAM-06', infraction: 'វាយប្រហារក្រោមចង្កេះ', penalty: '+១ ពិន្ទុដល់គូប្រកួត', explanation: 'ការទាត់ ឬវាយប្រហារដោយចេតនាចំប្រដាប់ភេទ ភ្លៅ ឬជើង។' },
        { code: 'GAM-07', infraction: 'វាយប្រហារក្រោយ Kal-yeo', penalty: '+១ ពិន្ទុដល់គូប្រកួត', explanation: 'ការវាយប្រហារបន្ទាប់ពីអាជ្ញាកណ្តាលកណ្តាលបានបញ្ជាពាក្យ Kal-yeo (ផ្អាក)។' },
        { code: 'GAM-08', infraction: 'វាយចំក្បាលដោយដៃ / កែង', penalty: '+១ ពិន្ទុដល់គូប្រកួត', explanation: 'ការវាយចំក្បាលគូប្រកួតដោយកណ្តាប់ដៃ កដៃ ដើមដៃ ឬកែងដៃ។' },
        { code: 'GAM-09', infraction: 'បុកដោយក្បាល ឬវាយដោយជង្គង់', penalty: '+១ ពិន្ទុដល់គូប្រកួត', explanation: 'ការវាយប្រហារដោយជង្គង់ ឬការប្រើក្បាលបុកគូប្រកួត។' },
        { code: 'GAM-10', infraction: 'វាយប្រហារគូប្រកួតដែលដួល', penalty: '+១ ពិន្ទុដល់គូប្រកួត', explanation: 'ការវាយប្រហារលើគូប្រកួតដែលរាងកាយបានប៉ះកម្រាលរួចទៅហើយ។' },
        { code: 'GAM-11', infraction: 'ទាត់អាវក្រោះពេល Clinch ដោយបាតជើង/ចំហៀង', penalty: '+១ ពិន្ទុដល់គូប្រកួត', explanation: 'ការទាត់អាវក្រោះ PSS ដោយចំហៀង ឬបាតជើងខណៈពេលកំពុងឱប Clinch ជិតគ្នា។' },
        { code: 'GAM-12', infraction: 'ទាត់ប៉ះខាងក្រោយក្បាលពេល Clinch', penalty: '+១ ពិន្ទុដល់គូប្រកួត', explanation: 'ការទាត់ប៉ះឧបករណ៍ការពារខាងក្រោយក្បាលខណៈពេលកំពុងឱប Clinch ជិតគ្នា។' },
        { code: 'GAM-13', infraction: 'អាកប្បកិរិយាមិនសមរម្យរបស់កីឡាករ ឬគ្រូ', penalty: '+១ ពិន្ទុដល់គូប្រកួត', explanation: 'ការតវ៉ាមន្ត្រី អាកប្បកិរិយាគ្មានក្រមសីលធម៌កីឡា ឬគ្រូពេទ្យគ្មានការទទួលស្គាល់។' },
      ]
    case 'zh':
      return [
        { code: 'GAM-01', infraction: '越出比赛区域边界线', penalty: '对方选手得 1 分', explanation: '一只脚或双脚完全踏出 8x8 米比赛边界警戒线之外。' },
        { code: 'GAM-02', infraction: '故意或非故意倒地', penalty: '对方选手得 1 分', explanation: '在无犯规接触的情况下故意或非故意倒地以规避击打或重置交战距离。' },
        { code: 'GAM-03', infraction: '消极逃避或拖延比赛', penalty: '对方选手得 1 分', explanation: '消极拖延时间、转身背对对手逃跑、假装受伤或请求暂停调整护具装备。' },
        { code: 'GAM-04', infraction: '抓抱、搂抱或推击对手', penalty: '对方选手得 1 分', explanation: '连续推人、将对手推出边界线外或在对手起腿时恶意推击阻碍出腿。' },
        { code: 'GAM-05', infraction: '提膝阻挡或抬腿滞空超过 3 秒', penalty: '对方选手得 1 分', explanation: '踢击对手腿部、抬腿过腰 4 次以上或将腿悬停空中超过 3 秒而不出击。' },
        { code: 'GAM-06', infraction: '击打腰部以下部位', penalty: '对方选手得 1 分', explanation: '故意踢击或击打对手下阴、大腿或双腿膝关节以下部位。' },
        { code: 'GAM-07', infraction: '主裁判喊停 (Kal-yeo) 后击打', penalty: '对方选手得 1 分', explanation: '在场上主裁判明确下达“分开暂停”口令后依然强行实施攻击动作。' },
        { code: 'GAM-08', infraction: '以拳面或肘关节击打头部', penalty: '对方选手得 1 分', explanation: '使用拳头、手腕、手臂或肘关节恶意击打对手头部护具或面部。' },
        { code: 'GAM-09', infraction: '以头部撞击或膝顶冲撞', penalty: '对方选手得 1 分', explanation: '使用膝关节进行攻击动作，或使用头顶撞击对手身体。' },
        { code: 'GAM-10', infraction: '攻击倒地状态的对手', penalty: '对方选手得 1 分', explanation: '击打身体任何部位已经接触地面的处于倒地无防护状态的对手。' },
        { code: 'GAM-11', infraction: '缠抱状态下以脚底/脚侧踢击护胸', penalty: '对方选手得 1 分', explanation: '在双方贴身缠抱 (Clinch) 过程中使用脚底板或脚内侧刮踢躯干 PSS 电子护胸。' },
        { code: 'GAM-12', infraction: '缠抱状态下击打后脑勺部位', penalty: '对方选手得 1 分', explanation: '在双方贴身缠抱过程中将腿绕向对手后方击打后脑勺 PSS 电子感应区。' },
        { code: 'GAM-13', infraction: '运动员或教练员违背体育道德行为', penalty: '对方选手得 1 分', explanation: '公开抗议裁判判决、做出不文明举止或非官方认证医生违规上台操作。' },
      ]
    case 'ko':
      return [
        { code: 'GAM-01', infraction: '한계선 밖으로 나가는 행위', penalty: '상대 선수에게 +1점 부여', explanation: '선수의 한 발 또는 양 발이 8x8m 경기지역 한계선 바깥 매트에 완전히 닿았을 때 선고.' },
        { code: 'GAM-02', infraction: '넘어지는 행위 (고의 및 과실)', penalty: '상대 선수에게 +1점 부여', explanation: '상대의 공격을 피하거나 거리를 재설정하기 위해 고의 또는 부주의로 바닥에 넘어지는 행위.' },
        { code: 'GAM-03', infraction: '경기를 회피하거나 지연시키는 행위', penalty: '상대 선수에게 +1점 부여', explanation: '소극적으로 등을 돌려 도망치거나, 부상을 가장하여 시간을 끌거나 장구 조정을 요구하는 행위.' },
        { code: 'GAM-04', infraction: '상대를 잡거나 끌어안거나 미는 행위', penalty: '상대 선수에게 +1점 부여', explanation: '상대를 계속 밀거나, 한계선 밖으로 밀어내거나 상대의 발차기를 방해하기 위해 미는 행위.' },
        { code: 'GAM-05', infraction: '다리 방어 및 3초 이상 컷트발 지연', penalty: '상대 선수에게 +1점 부여', explanation: '상대의 다리를 걷어차거나, 허리 높이 이상으로 다리를 4회 이상 들거나 3초 이상 지체하는 행위.' },
        { code: 'GAM-06', infraction: '허리 아래 부위를 공격하는 행위', penalty: '상대 선수에게 +1점 부여', explanation: '낭심, 허벅지, 정강이 등 허리 아래 부위를 고의로 발이나 주먹으로 가격하는 행위.' },
        { code: 'GAM-07', infraction: '주심의 "갈려" 선언 후 공격하는 행위', penalty: '상대 선수에게 +1점 부여', explanation: '주심이 "갈려"를 구령한 이후 타격 동작을 계속 가하는 행위.' },
        { code: 'GAM-08', infraction: '주먹 또는 팔꿈치로 머리를 가격하는 행위', penalty: '상대 선수에게 +1점 부여', explanation: '주먹, 손목, 전완 또는 팔꿈치로 상대방의 안면이나 헤드기어를 가격하는 행위.' },
        { code: 'GAM-09', infraction: '무릎으로 공격하거나 박치기하는 행위', penalty: '상대 선수에게 +1점 부여', explanation: '무릎으로 상대 몸통이나 얼굴을 치거나 머리로 들이받는 비신사적 행위.' },
        { code: 'GAM-10', infraction: '넘어진 상대를 공격하는 행위', penalty: '상대 선수에게 +1점 부여', explanation: '신체 일부가 매트에 닿아 넘어져 있는 무방비 상태의 상대를 가격하는 행위.' },
        { code: 'GAM-11', infraction: '클린치 상태에서 발바닥/발옆면 몸통 공격', penalty: '상대 선수에게 +1점 부여', explanation: '클린치 접전 중 발바닥이나 발의 옆면으로 몸통 PSS를 비정상적으로 긁어 차는 행위.' },
        { code: 'GAM-12', infraction: '클린치 상태에서 후두부(머리 뒤) 공격', penalty: '상대 선수에게 +1점 부여', explanation: '클린치 접전 중 상대의 뒷목이나 뒤통수 헤드기어 센서를 향해 발차기를 시도하는 행위.' },
        { code: 'GAM-13', infraction: '선수 또는 지도자의 비신사적 불량 행위', penalty: '상대 선수에게 +1점 부여', explanation: '판정에 부당 항의, 비신사적 제스처 및 공인되지 않은 의무관의 경기장 난입 행위.' },
      ]
    default:
      return [
        { code: 'GAM-01', infraction: 'Crossing the Boundary Line', penalty: '+1 Point to Opponent', explanation: 'Stepping one or both feet completely outside the 8x8m boundary line.' },
        { code: 'GAM-02', infraction: 'Falling Down', penalty: '+1 Point to Opponent', explanation: 'Falling intentionally or unintentionally to evade an attack or reset combat distance.' },
        { code: 'GAM-03', infraction: 'Avoiding or Delaying Match', penalty: '+1 Point to Opponent', explanation: 'Stalling, turning back to retreat, pretending injury, or asking to stop match to adjust gear.' },
        { code: 'GAM-04', infraction: 'Grabbing, Holding, or Pushing', penalty: '+1 Point to Opponent', explanation: 'Continuous pushing, pushing opponent out of bounds, or pushing to impede kicking.' },
        { code: 'GAM-05', infraction: 'Leg Blocking or Lifting Leg >3s', penalty: '+1 Point to Opponent', explanation: 'Kicking opponent leg, lifting leg above waist 4+ times, or holding leg in air for >3s without kicking.' },
        { code: 'GAM-06', infraction: 'Attacking Below the Waist', penalty: '+1 Point to Opponent', explanation: 'Intentionally kicking or striking groin, thighs, or legs.' },
        { code: 'GAM-07', infraction: 'Attacking After Kal-yeo', penalty: '+1 Point to Opponent', explanation: 'Delivering a strike after the center referee calls Kal-yeo (break).' },
        { code: 'GAM-08', infraction: 'Hitting Head with Hand / Elbow', penalty: '+1 Point to Opponent', explanation: 'Hitting the opponent head with fist, wrist, arm, or elbow.' },
        { code: 'GAM-09', infraction: 'Butting or Attacking with Knee', penalty: '+1 Point to Opponent', explanation: 'Attacking with knee or using headbutting motions.' },
        { code: 'GAM-10', infraction: 'Attacking the Fallen Opponent', penalty: '+1 Point to Opponent', explanation: 'Striking an opponent whose body has touched the ground.' },
        { code: 'GAM-11', infraction: 'Clinch Attack to Trunk Side/Bottom', penalty: '+1 Point to Opponent', explanation: 'Attacking trunk PSS with the side or bottom of the foot while engaged in a clinch.' },
        { code: 'GAM-12', infraction: 'Clinch Attack to Back of Head PSS', penalty: '+1 Point to Opponent', explanation: 'Attacking the back of head PSS while engaged in a clinch.' },
        { code: 'GAM-13', infraction: 'Misconduct of Contestant or Coach', penalty: '+1 Point to Opponent', explanation: 'Protesting officials, unsportsmanlike behavior, or unaccredited doctor in doctor chair.' },
      ]
  }
}

export interface LocalizedRefereeSignal {
  command: string
  korean: string
  meaning: string
  signal: string
}

export function getLocalizedRefereeSignals(lang: string): LocalizedRefereeSignal[] {
  switch (lang) {
    case 'km':
      return [
        { command: 'Cha-ryeot', korean: '차렷', meaning: 'ឈរត្រង់ (Attention)', signal: 'ឈរត្រង់ដោយបិទកែងជើងចូលគ្នា។ ដាក់ដៃទាំងសងខាងចុះក្រោម ៤៥ ដឺក្រេ ក្បែរភ្លៅ បាតដៃបែរចូលក្នុង។' },
        { command: 'Kyeong-rye', korean: '경례', meaning: 'គោរព (Bow)', signal: 'ដាក់បាតដៃស្តាំលើដើមទ្រូងខាងឆ្វេង ហើយឱនខ្លួនទៅមុខប្រហែល ៣០ ដឺក្រេឆ្ពោះទៅកីឡាករ។' },
        { command: 'Joon-bi', korean: '준비', meaning: 'ត្រៀម (Ready)', signal: 'លើកកណ្តាប់ដៃទាំងពីរពីចង្កេះដល់កម្ពស់ទ្រូង កែងដៃបើកចេញ ៩០ ដឺក្រេ កណ្តាប់ដៃឃ្លាតពីគ្នា ១ កណ្តាប់ដៃ។' },
        { command: 'Shi-jak', korean: '시작', meaning: 'ចាប់ផ្តើម (Start)', signal: 'ឈានជើងឆ្វេងទៅមុខចូលជំហរ Apseogi លាតដៃស្តាំកាត់ចន្លោះកីឡាករទាំងពីរ ហើយស្រែក "Shi-jak" យ៉ាងខ្លាំង។' },
        { command: 'Kal-yeo', korean: '갈려', meaning: 'ផ្អាក (Break / Stop)', signal: 'ឈានជើងចូលចន្លោះកីឡាករទាំងពីរ បោះដៃស្តាំកាត់បន្ទាត់ផ្តេកនៅកម្ពស់ដើមទ្រូងដើម្បីបញ្ឈប់ការប្រយុទ្ធ។' },
        { command: 'Kye-sok', korean: '계속', meaning: 'បន្តប្រកួត (Continue)', signal: 'ពីជំហរ Kal-yeo បន្ទាបបាតដៃស្តាំចុះក្រោមយ៉ាងមុតស្រួចដើម្បីអនុញ្ញាតឱ្យបន្តការប្រយុទ្ធឡើងវិញ។' },
        { command: 'Kye-shi', korean: '계시', meaning: 'ផ្អាករបួស (Injury 1-min)', signal: 'បត់ដៃទាំងពីរ ៩០ ដឺក្រេ លើកចង្អុលដៃទាំងពីរបញ្ឈរឡើងលើ បញ្ជាឱ្យកត់ត្រាពេលពិនិត្យរបួស ១ នាទី។' },
        { command: 'Shi-gan', korean: '시간', meaning: 'ផ្អាកនាឡិកា (Time Out)', signal: 'លើកចង្អុលដៃទាំងពីរប្រសព្វគ្នាជារាងអក្សរ "T" នៅពីមុខដើមទ្រូងដើម្បីបញ្ឈប់នាឡិកាប្រកួត។' },
        { command: 'Kye-jeok', korean: '계적', meaning: 'កត់ត្រាពិន្ទុ (Count)', signal: 'បន្ទាប់ពីកីឡាករត្រូវរលំ ចាប់ផ្តើមរាប់ពិន្ទុពី ១ ដល់ ១០ ដោយប្រើម្រាមដៃនៅកម្ពស់ភ្នែកកីឡាករ។' },
        { command: 'Gam-jeom', korean: '감점', meaning: 'ពិន័យកាត់ពិន្ទុ (Gam-jeom Penalty)', signal: 'លើកចង្អុលដៃស្តាំបញ្ឈរ ៩០ ដឺក្រេ ចង្អុលទៅកីឡាករដែលប្រព្រឹត្តកំហុស ហើយស្រែក "Gam-jeom"។' },
        { command: 'Seung', korean: '승', meaning: 'ប្រកាសអ្នកឈ្នះ (Winner Declaration)', signal: 'ងាកមុខទៅតុគណៈកម្មការ លើកដៃខាងកីឡាករដែលឈ្នះ (ខៀវ ឬក្រហម) ឡើងលើត្រង់ ៤៥ ដឺក្រេ។' },
        { command: 'Woo-se-gi-rok', korean: '우세기록', meaning: 'កត់ត្រាឧត្តមភាព (Superiority)', signal: 'នៅចុងបញ្ចប់ទឹកដែលស្មើគ្នា អាជ្ញាកណ្តាលបោះជំហានថយក្រោយ ហើយលើកកាតកត់ត្រាឧត្តមភាព។' },
      ]
    case 'zh':
      return [
        { command: 'Cha-ryeot', korean: '차렷', meaning: '查立 (立正 / Attention)', signal: '并拢双脚脚跟自然立正。双臂向下伸直与大腿呈45度角，双掌指尖并拢自然贴紧大腿外侧。' },
        { command: 'Kyeong-rye', korean: '경례', meaning: '敬礼 (Bow)', signal: '右掌平放于心窝或左胸上方，上身自然向前倾斜约30度，向双方运动员行武道鞠躬礼。' },
        { command: 'Joon-bi', korean: '준비', meaning: '准备 (Ready)', signal: '双拳自腰际缓缓提至胸前，肘关节向外张开呈90度，双拳之间保持约一拳距离。' },
        { command: 'Shi-jak', korean: '시작', meaning: '开始 (Start)', signal: '左脚向前迈出呈前行步，右手掌如刀状迅速从两名运动员中间切下，伴随响亮口令“Shi-jak”。' },
        { command: 'Kal-yeo', korean: '갈려', meaning: '暂停 / 分开 (Break)', signal: '迅速跨步切入两名交锋选手中间，右手平掌自上而下凌厉切出，制止双方继续攻击。' },
        { command: 'Kye-sok', korean: '계속', meaning: '继续比赛 (Continue)', signal: '保持立正姿态，右手掌由胸前迅速向斜下方有力下切，宣告比赛即刻重新恢复。' },
        { command: 'Kye-shi', korean: '계시', meaning: '伤停计时 (Medical 1-min)', signal: '双臂屈肘90度，双手食指垂直向上，指示记录台开启1分钟官方医疗伤停计时程序。' },
        { command: 'Shi-gan', korean: '시간', meaning: '停表 (Time-Out)', signal: '双手食指在胸前交叉呈“T”字形手势，指令计时裁判立即暂停比赛官方计时钟。' },
        { command: 'Kye-jeok', korean: '계적', meaning: '读秒数八 (Counting)', signal: '选手遭受重击击倒后，主裁判在伤者视线前方从“1(Hana)”数至“10(Yeol)”，伸出手指逐个数秒。' },
        { command: 'Gam-jeom', korean: '감점', meaning: '犯规判罚 (Gam-jeom Penalty)', signal: '右臂垂直向上举起，食指笔直指向受罚违规选手，同时洪亮清晰宣告“Gam-jeom”。' },
        { command: 'Seung', korean: '승', meaning: '宣布获胜方 (Winner Declaration)', signal: '面向主裁判台，将获胜方选手同侧手臂笔直举起呈斜上方45度角，宣告青胜或红胜。' },
        { command: 'Woo-se-gi-rok', korean: '우세기록', meaning: '优势判定记录 (Superiority)', signal: '局末双方平分且无法自动判决时，主裁判后撤一步，向边裁示意填写优势判定记录单。' },
      ]
    case 'ko':
      return [
        { command: 'Cha-ryeot', korean: '차렷', meaning: '차렷 (Attention)', signal: '양 발뒤꿈치를 붙이고 바른 자세로 직립합니다. 양팔은 자연스럽게 45도 내려 손바닥을 허벅지에 댑니다.' },
        { command: 'Kyeong-rye', korean: '경례', meaning: '경례 (Bow)', signal: '오른손을 왼쪽 가슴(심장 부위)에 대고 상체를 약 30도 숙여 선수들에게 상호 무도 예를 표합니다.' },
        { command: 'Joon-bi', korean: '준비', meaning: '준비 (Ready)', signal: '양 주먹을 명치 부위로 들어 올리며 팔꿈치를 벌리고 주먹 사이는 주먹 하나 간격을 유지합니다.' },
        { command: 'Shi-jak', korean: '시작', meaning: '시작 (Start)', signal: '왼발을 앞으로 내딛으며 오른손 수도를 양 선수 사이로 힘차게 내리치며 "시작!"을 선고합니다.' },
        { command: 'Kal-yeo', korean: '갈려', meaning: '갈려 (Break)', signal: '양 선수 사이로 신속히 진입하며 오른손 수도를 명치 높이에서 수평으로 갈라 치며 공격을 중단시킵니다.' },
        { command: 'Kye-sok', korean: '계속', meaning: '계속 (Continue)', signal: '"갈려" 상태에서 오른손을 아래로 절도 있게 내리치며 경기의 재개를 선언합니다.' },
        { command: 'Kye-shi', korean: '계시', meaning: '계시 (Injury 1-min)', signal: '양 팔꿈치를 90도로 굽히고 검지손가락을 세워 계측원에게 1분 의무 치료 시간 측정을 지시합니다.' },
        { command: 'Shi-gan', korean: '시간', meaning: '시간 (Time-Out)', signal: '양손 식지를 교차하여 가슴 앞에서 "T"자 형태를 만들어 공식 경기 시계 정지를 명령합니다.' },
        { command: 'Kye-jeok', korean: '계적', meaning: '계적 (Counting 1 to 10)', signal: '다운된 선수의 시선 정면에서 1초 간격으로 하나부터 열까지 손가락을 펴 보이며 카운트합니다.' },
        { command: 'Gam-jeom', korean: '감점', meaning: '감점 (Gam-jeom Penalty)', signal: '오른손 검지를 수직으로 세워 반칙을 범한 선수의 이마를 향해 지목하며 "감점"을 선언합니다.' },
        { command: 'Seung', korean: '승', meaning: '승 (Winner Declaration)', signal: '기록석을 향해 돌아선 후 승리한 선수 측(청 또는 홍)의 팔을 머리 위 45도로 곧게 뻗어 올립니다.' },
        { command: 'Woo-se-gi-rok', korean: '우세기록', meaning: '우세기록 (Superiority)', signal: '라운드 동점 시 주심이 한 걸음 물러나 부심들에게 우세 판정 기록지 작성을 지시합니다.' },
      ]
    default:
      return [
        { command: 'Cha-ryeot', korean: '차렷', meaning: 'Attention', signal: 'Stand upright with heels together. Extend both arms downward at 45° beside thighs with palms facing inward.' },
        { command: 'Kyeong-rye', korean: '경례', meaning: 'Bow', signal: 'Place flat right hand over solar plexus / left chest and bow upper body forward ~30° toward athletes.' },
        { command: 'Joon-bi', korean: '준비', meaning: 'Ready', signal: 'Raise both closed fists smoothly from waist to chest height, elbows outward at 90°, fists spaced 1 fist-width apart.' },
        { command: 'Shi-jak', korean: '시작', meaning: 'Start', signal: 'Step left foot forward into Ap-seogi, slice open right hand vertically between athletes and loudly call "Shi-jak".' },
        { command: 'Kal-yeo', korean: '갈려', meaning: 'Break / Separate', signal: 'Step crisply between competitors and sharply extend flat right hand down across chest line to stop combat.' },
        { command: 'Kye-sok', korean: '계속', meaning: 'Continue', signal: 'From Kal-yeo position, crisply lower flat right hand sharply downward from chest to signal immediate resumption.' },
        { command: 'Kye-shi', korean: '계시', meaning: 'Medical Time-Out (1 min)', signal: 'Bend both elbows 90° and point index fingers vertically upward toward the recorder desk for 1-min injury clock.' },
        { command: 'Shi-gan', korean: '시간', meaning: 'Time Pause', signal: 'Cross index fingers in front of chest in a "T" sign, directing the table to pause the match clock.' },
        { command: 'Kye-jeok', korean: '계적', meaning: 'Counting (1 to 10)', signal: 'Following a knockdown, count out loud from 1 to 10 in Korean with fingers extended at athlete eye level.' },
        { command: 'Gam-jeom', korean: '감점', meaning: 'Penalty Declaration', signal: 'Raise vertical right index finger 90° high, point sharply at offending competitor, and declare "Gam-jeom".' },
        { command: 'Seung', korean: '승', meaning: 'Winner Declaration', signal: 'Facing the head table, raise the winning competitor arm vertically at 45° toward the ceiling (Chung or Hong).' },
        { command: 'Woo-se-gi-rok', korean: '우세기록', meaning: 'Superiority Record', signal: 'At the end of tied rounds, step back and instruct corner judges to submit superiority ballots.' },
      ]
  }
}

