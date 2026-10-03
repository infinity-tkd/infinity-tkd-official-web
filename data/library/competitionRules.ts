import type { LibraryItem } from './types'

export const competitionRulesItems: LibraryItem[] = [
  {
    id: 'rule-01',
    slug: 'world-kyorugi-scoring-system-points',
    name: 'World Kyorugi Point Scoring Values & Best-of-3 Format',
    koreanName: '세계태권도연맹 겨루기 득점 체계 & 3회전 2선승제',
    romanized: 'World Kyorugi Deukjeom Chegye (Best of 3)',
    category: 'competition-rules',
    difficulty: 'Intermediate',
    beltLevel: 'Green Belt+',
    badgeColor: '#EF2F38',
    pdfUrl: '/docs/world-taekwondo-kyorugi-rules-2026.pdf',
    sourceName: 'World Taekwondo Official Competition Rules (2026 Edition)',
    sourceUrl: 'http://www.worldtaekwondo.org/rules-wt/rules.html',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    summary:
      'Official World Taekwondo (WT) competition sparring rules feature the Best-of-3 Rounds system, electronic PSS sensors, and distinct scoring values for linear vs spinning attacks.',
    meaning: 'Dynamic, spectator-friendly Olympic combat rewarding aggressive precision and high-altitude rotational kicking.',
    steps: [
      '1 Point — Valid Punch (Momtong Jireugi) directly impacting the trunk protector with full knuckle and balance.',
      '2 Points — Valid Direct Kick to the electronic trunk protector (Hogu) exceeding sensor impact threshold.',
      '3 Points — Valid Direct Kick to the head protector (Helmet) triggered by electronic magnetic sensors or foot contact.',
      '4 Points — Valid Turning/Spinning Kick to the trunk (Back Kick, Spinning Hook Kick) adding a +2 technical bonus.',
      '5 Points — Valid Turning/Spinning Kick to the head (360 Hook Kick, Tornado Kick) adding a +2 technical bonus.',
    ],
    keyDetails: [
      'Best-of-3 Format: The athlete who wins 2 out of 3 two-minute rounds wins the match immediately.',
      'Round Tie-Breaker Priority: (1) Higher technical turning kick points, (2) Higher impact sensor hits, (3) Lower number of Gam-jeoms, (4) Referee superiority decision.',
      'Electronic PSS: Daedo Gen2 or KP&P sensor socks and chest guards ensure objective millisecond scoring.',
    ],
    commonMistakes: [
      'Believing total points accumulate across rounds; each round score resets to 0–0 at the start of the next round.',
      'Striking below the waist or attacking an opponent while they are down on the mat.',
    ],
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=800&auto=format&fit=crop',
    translations: {
      km: {
        name: 'ប្រព័ន្ធពិន្ទុ World Kyorugi & ការប្រកួត ៣ ទឹក',
        summary: 'ច្បាប់ប្រកួតផ្លូវការរបស់ World Taekwondo (WT) រួមមានប្រព័ន្ធ ៣ ទឹក (Best-of-3) និងពិន្ទុជាក់លាក់សម្រាប់ការទាត់ធម្មតា និងទាត់បង្វិល។',
      },
      zh: {
        name: '世界跆拳道竞技对战得分规则 (三局两胜制)',
        summary: '世跆联 (WT) 官方最新竞技规则：三局两胜独立计分制、电子护具感应标准以及后旋击头高达5分的超高技战术价值体系。',
      },
      ko: {
        name: 'WT 공인 겨루기 득점 규정 & 3회전 다득점 체계',
        summary: '세계태권도연맹(WT) 공인 경기 규칙: 라운드별 3판 2선승제, 주먹 1점, 몸통 2점, 머리 3점, 회전 몸통 4점, 회전 머리 5점 규정입니다.',
      },
    },
  },
  {
    id: 'rule-02',
    slug: 'world-kyorugi-gamjeom-penalties-ivr',
    name: 'World Kyorugi Gam-Jeom Penalties & Video Replay (IVR)',
    koreanName: '겨루기 감점 규정 및 비디오 판독 (IVR)',
    romanized: 'Kyorugi Gamjeom Gyu-jeong & Instant Video Replay',
    category: 'competition-rules',
    difficulty: 'Advanced',
    beltLevel: 'Blue Belt+',
    badgeColor: '#0042EA',
    pdfUrl: '/docs/world-taekwondo-kyorugi-rules-2026.pdf',
    sourceName: 'World Taekwondo Official Referee Guidelines',
    sourceUrl: 'http://www.worldtaekwondo.org/rules-wt/rules.html',
    summary:
      'A comprehensive guide to illegal acts resulting in Gam-Jeom penalties (awarding +1 point to opponent) and coach Instant Video Replay (IVR) card challenge procedures.',
    meaning: 'Ensuring fair play, safety, and eliminating stalling or ungentlemanly combat tactics.',
    steps: [
      'Boundary Violations: Stepping one or both feet completely outside the 8x8m boundary line results in immediate Gam-Jeom.',
      'Falling Down: Falling intentionally or unintentionally to avoid an opponent’s attack yields a Gam-Jeom unless caused by an illegal foul.',
      'Clinching & Grabbing: Grabbing, holding, pushing an opponent, or lifting the leg for >3 seconds without kicking (Cut-kick stalling).',
      'Attacking Below the Belt: Kicking the groin or legs deliberately.',
      'Max Gam-Jeom Rule: If an athlete receives 5 Gam-Jeoms in a single round, the opponent automatically wins that round.',
    ],
    keyDetails: [
      'Instant Video Replay (IVR): Each coach has 1 IVR challenge card per match to review head kicks, falls, out-of-bounds, or technical bonuses.',
      'If the coach’s IVR challenge is accepted by the review jury, the card is retained; if rejected, the card is forfeited for the remainder of the match.',
    ],
    commonMistakes: [
      'Lifting the knee and stalling in the air (known as "monkey kick" or "chicken leg") which is now penalized immediately under WT 2026 rules.',
    ],
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop',
    translations: {
      km: {
        name: 'ការពិន័យ Gam-Jeom & ការមើលវីដេអូឡើងវិញ (IVR)',
        summary: 'ការណែនាំលម្អិតអំពីកំហុសដែលនាំឱ្យមានការពិន័យ Gam-Jeom (+1 ពិន្ទុដល់គូប្រកួត) និងសិទ្ធិតវ៉ាវីដេអូ IVR របស់គ្រូបង្វឹក។',
      },
      zh: {
        name: '竞技犯规扣分 (Gam-Jeom) 与录像审议 (IVR) 机制',
        summary: '世跆联竞技扣分细则（出界、倒地、消极抬腿提膝防守）与教练录像申诉卡 (Instant Video Replay) 申请核实流程。',
      },
      ko: {
        name: '겨루기 감점 규정 및 비디오 판독(IVR) 심판 규칙',
        summary: '한계선 이탈, 고의 넘어짐, 클린치 및 3초 이상 컷트발 지연에 대한 감점 처리와 감독관 비디오 판독 청구권 규정입니다.',
      },
    },
  },
  {
    id: 'rule-03',
    slug: 'world-poomsae-scoring-accuracy-deductions',
    name: 'World Recognized Poomsae Accuracy & Deductions (4.0 Max)',
    koreanName: '공인 품새 정확도 채점 기준 (4.0점 만점 & 감점 기준)',
    romanized: 'World Poomsae Jeonghwakdo Chaejeom (4.0 Max)',
    category: 'competition-rules',
    difficulty: 'Advanced',
    beltLevel: 'Red Belt+',
    badgeColor: '#09BB00',
    pdfUrl: '/docs/world-taekwondo-poomsae-rules-2026.pdf',
    sourceName: 'World Taekwondo Poomsae Competition Rules & Explanations',
    sourceUrl: 'http://www.worldtaekwondo.org/rules-wt/rules.html',
    summary:
      'In World Taekwondo Recognized Poomsae competition, the Accuracy score begins at 4.0 points. Judges deduct -0.1 for minor errors and -0.3 for major errors.',
    meaning: 'Surgical biomechanical perfection aligned with traditional Kukkiwon geometry.',
    steps: [
      '-0.1 Minor Deduction: Minor tremor of the hand/foot, incorrect fist angle, slight hesitation, or inaccurate chamber height.',
      '-0.3 Major Deduction: Incorrect stance length (e.g. Ap-koobi shorter than 4.5 foot lengths), incorrect hand placement, or missed movement.',
      'Side-by-Side Restart (-1.2 Points): Referees assess standard deductions plus two major deductions (-0.6 each / -1.2 total) for restarts.',
      'Origin/Ending Exemption: Deductions are no longer assessed for starting and ending on different spots on the mat.',
      'Lead Arm Accuracy Exemption: Missing lead arm trajectory is evaluated under Presentation rather than an Accuracy deduction.',
    ],
    keyDetails: [
      'Referees: 5 or 7 international referees evaluate independently; highest and lowest scores are discarded to eliminate bias.',
      'Cutoff System: Athletes perform 2 designated forms in head-to-head single elimination rounds.',
    ],
    commonMistakes: [
      'Rushing through transitions without holding stances for standard 1-second focus intervals.',
    ],
    image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=800&auto=format&fit=crop',
    translations: {
      km: {
        name: 'ការកាត់ពិន្ទុភាពត្រឹមត្រូវនៃ Poomsae (៤.០ ពិន្ទុអតិបរមា)',
        summary: 'នៅក្នុងការប្រកួត Poomsae ពិន្ទុភាពត្រឹមត្រូវចាប់ផ្តើមពី ៤.០ ពិន្ទុ។ អាជ្ញាកណ្តាលកាត់ -០.១ សម្រាប់កំហុសតូច និង -០.៣ សម្រាប់កំហុសធំ។',
      },
      zh: {
        name: '公认品势准确度裁判评分准则 (4.0满分扣分制)',
        summary: '品势大赛准确度基础分为4.0分。微小瑕疵扣0.1分；重大失误扣0.3分；同场重赛额外扣除1.2分。',
      },
      ko: {
        name: '공인 품새 정확성 채점 기준 (4.0점 만점 감점 방식)',
        summary: '품새 경기 정확성 배점 4.0점 기준: 사소한 동작 결함 -0.1점, 서기 자세 길이 불량 등 중대 결함 -0.3점, 재시작 시 -1.2점 감점 기준입니다.',
      },
    },
  },
  {
    id: 'rule-04',
    slug: 'world-poomsae-presentation-scoring',
    name: 'World Recognized Poomsae Presentation Scoring (6.0 Max Evaluation)',
    koreanName: '공인 품새 표현력 채점 기준 (6.0점 만점 평가)',
    romanized: 'World Poomsae Pyohyeonryeok Chaejeom (6.0 Max)',
    category: 'competition-rules',
    difficulty: 'Elite',
    beltLevel: 'Black Belt (Dan)',
    badgeColor: '#A855F7',
    pdfUrl: '/docs/world-taekwondo-poomsae-rules-2026.pdf',
    sourceName: 'World Taekwondo Poomsae Competition Rules & Explanations',
    sourceUrl: 'http://www.worldtaekwondo.org/rules-wt/rules.html',
    summary:
      'The Presentation component (6.0 points base) evaluates Speed & Power (2.0), Control of Power & Rhythm (2.0), and Expression of Energy & Kihap (2.0).',
    meaning: 'The artistic, energetic soul of Taekwondo embodying internal breath control, explosiveness, and martial dignity.',
    steps: [
      'Speed & Power (2.0 Points): Explosive kinetic snap at the moment of impact without stiffness in initial acceleration.',
      'Control of Power, Speed & Rhythm (2.0 Points): Smooth deceleration, tension-relaxation contrast, and tempo matching the form’s philosophy.',
      'Expression of Energy (2.0 Points): Unwavering eye gaze (Siseon), loud sharp Kihap, and martial confidence (Dojang dignity).',
    ],
    keyDetails: [
      'Total Score Formula: Accuracy (Max 4.0) + Presentation (Max 6.0) = Total Out of 10.0 Points.',
      'Uniform Regulations: Competitors must wear certified WT Poomsae Dobok (Yudanja white top with black collar & dark navy pants).',
    ],
    commonMistakes: [
      'Tensing muscles prematurely throughout the entire form, which reduces maximum strike velocity at impact point.',
    ],
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop',
    translations: {
      km: {
        name: 'ពិន្ទុការសម្តែងនៃ Poomsae (៦.០ ពិន្ទុអតិបរមា)',
        summary: 'ពិន្ទុការសម្តែង (៦.០ ពិន្ទុ) វាយតម្លៃលើល្បឿន & កម្លាំង (២.០), ការគ្រប់គ្រងចង្វាក់ (២.០) និងការបញ្ចេញថាមពល & Kihap (២.០)។',
      },
      zh: {
        name: '公认品势表现力裁判评分准则 (6.0满分综合考量)',
        summary: '品势表现力基础分6.0分：速度与力量（2.0分）、力量与节奏控制（2.0分）以及气势与气合呐喊精神面貌（2.0分）。',
      },
      ko: {
        name: '공인 품새 표현력 심사 기준 (6.0점 만점 평가 항목)',
        summary: '표현력 6.0점 기준: 속도와 힘(2.0점), 완급과 리듬(2.0점), 기의 표현 및 기합(2.0점)을 종합 평가하는 공식 심사 기준입니다.',
      },
    },
  },
  {
    id: 'rule-05',
    slug: 'freestyle-poomsae-technical-scoring-rules',
    name: 'Freestyle Poomsae Technical Skills (#1–#5) & 6.0 Point Allocation',
    koreanName: '자유품새 기술 점수 6.0점 배점 및 필수 5대 기술 규정',
    romanized: 'Freestyle Poomsae Gisul Deukjeom (6.0 Max)',
    category: 'competition-rules',
    difficulty: 'Elite',
    beltLevel: 'Black Belt (Dan)',
    badgeColor: '#FF5733',
    pdfUrl: '/docs/world-taekwondo-poomsae-rules-2026.pdf',
    sourceName: 'World Taekwondo Freestyle Poomsae Scoring Guidelines',
    sourceUrl: 'http://www.worldtaekwondo.org/rules-wt/rules.html',
    summary:
      'Freestyle Poomsae Technical Score (6.0 max) mandates five compulsory skills executed in chronological sequence: Jumping Side Kick, Multi-Kicks in One Jump, Spin Kick Gradient, Consecutive Sparring Kicks, and Acrobatic Kicking.',
    meaning: 'Dynamic fusion of Olympic Taekwondo power, high-altitude rotational acrobatics, and martial expression.',
    steps: [
      'Skill #1 Jumping Side Kick: Base score 0.1–0.7 plus Height Bonus (+0.1 Body, +0.2 Face, +0.3 Over Face). Minimum belt height required.',
      'Skill #2 Multiple Kicks in One Jump: Base score 0.1–0.7 plus Quantity Bonus (+0.1 for 3 kicks, +0.2 for 4 kicks, +0.3 for 5 kicks with ≥80% extension).',
      'Skill #3 Gradient of Spins: Base score 0.1–0.7 plus Rotation Bonus (+0.1 for 360°, +0.2 for 540°, +0.3 for 720°+ airborne rotation).',
      'Skill #4 Consecutive Sparring Kicks: 3–5 bounces in place followed by 7–10 sparring kicks in a continuous direction (+0.1 to +0.3 level bonus).',
      'Skill #5 Acrobatic Kicking: Base score 0.1–0.7 plus Inversion Bonus (+0.1 to +0.3). Max 3 acrobatic kicks per routine (-0.3 per excess).',
      'Skill #6 Basic Movements (1.0 Pt): Standardized stances (Dwitkubi, Beom, Hakdari -0.3 each if missing) and practicability.',
    ],
    keyDetails: [
      'Routine Duration: 90 to 100 seconds strictly. Under 90s or over 100s receives mandatory -0.3 total deduction.',
      'Music Regulations: Must contain no lyrics, spoken words, humming, or loud whistling. Copyright clearance mandatory.',
      'Setup Delay: Max 3 seconds preparation window before acrobatic tricks; >3s incurs -0.3 deduction.',
    ],
    commonMistakes: [
      'Executing the 5 mandatory technical skills out of chronological order, which negates technical scoring bonuses.',
      'Delivering duck-feet / flipper kicks without 80% knee extension, resulting in 0.0 points.',
    ],
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=800&auto=format&fit=crop',
    translations: {
      km: {
        name: 'ពិន្ទុបច្ចេកទេស Freestyle Poomsae (៦.០ ពិន្ទុ & ជំនាញទាំង ៥)',
        summary: 'Freestyle Poomsae តម្រូវឱ្យសម្តែងជំនាញក្បាច់ទាត់ពិបាកៗចំនួន ៥ តាមលំដាប់លំដោយ រួមទាំងការលោតទាត់ចំហៀង ការទាត់បង្វិល និងកាយសម្ព័ន្ធ។',
      },
      zh: {
        name: '自由品势技术分6.0满分评定及五大必选难度动作',
        summary: '世跆联自由品势技术分（6.0满分）五大必选动作按顺序执行：腾空侧踢、腾空多段踢、旋风踢回旋梯度、竞技连续踢击与空翻特技踢击。',
      },
      ko: {
        name: '자유품새 기술점수(6.0점 만점) 및 필수 5대 기술 규정집',
        summary: '자유품새 기술점수 6.0점 기준: 뛰어 옆차기, 도약 다단차기, 회전도 발차기, 겨루기 연속발, 아크로바틱 발차기 필수 5대 동작 채점 기준입니다.',
      },
    },
  },
  {
    id: 'rule-06',
    slug: 'world-poomsae-slow-movements-timing-rules',
    name: 'Recognized Poomsae Slow Movements (5–8s vs 8s Standardized Timings)',
    koreanName: '공인 품새 완급 조절 및 완동작(5~8초 / 8초) 표준 규정',
    romanized: 'Poomsae Wandongjak Pyojun Gyu-jeong (5-8s & 8s)',
    category: 'competition-rules',
    difficulty: 'Advanced',
    beltLevel: 'Red Belt+',
    badgeColor: '#0042EA',
    pdfUrl: '/docs/world-taekwondo-poomsae-rules-2026.pdf',
    sourceName: 'World Taekwondo Recognized Poomsae Slow Movement Standards',
    sourceUrl: 'http://www.worldtaekwondo.org/rules-wt/rules.html',
    summary:
      'Official WT standard specifies 5–8 second recommended window for dynamic tension movements and a full 8-second fixed count for high-dan meditative postures.',
    meaning: 'The mastery of internal breath (Danjeon Hohup), isometric isometric tension, and spiritual composure.',
    steps: [
      '5 to 8-Second Window: Taegeuk 6 (Arae-Hechomakki), Taegeuk 7 (Bojumeok), Koryo (Tongmilgi), Keumgang (Arae-Hechomakki), Shipjin (Hwangsomakki, Bawimilgi), Jitae (Bakkatmakki, Olgulmakki), Chonkwon (Taesanmilgi).',
      '8-Second Full Duration: Taegeuk 8 (Dangyo Teokjireugi), Koryo (Mejumeok Arae Pyojeokchigi), Keumgang (Hakdari Keumgang Makki), Pyongwon (Tongmilgi combined), Shipjin (Keula Oligi), Jitae (Olgulmakki & Barojireugi combined), Chonkwon (Nalgaepyogi).',
      'Breathing Protocol: Inhale smoothly during chamber, exhale with focused abdominal compression through the final second of completion.',
    ],
    keyDetails: [
      'Execution Speed: Constant uniform velocity without sudden deceleration or stuttering motion.',
      'Balance: Stance wobbles during Hakdari Seogi (Crane Stance) or Moa Seogi incur an immediate -0.1 accuracy deduction.',
    ],
    commonMistakes: [
      'Executing the slow movement too quickly (<5 seconds), which fails to demonstrate breath control and kinetic deceleration.',
    ],
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800&auto=format&fit=crop',
    translations: {
      km: {
        name: 'ចលនាយឺតក្នុង Poomsae (ស្តង់ដារ ៥-៨ វិនាទី & ៨ វិនាទី)',
        summary: 'ការណែនាំផ្លូវការអំពីចលនាយឺត (Slow Movements) ក្នុងមេគុនតេក្វាន់ដូ ចាប់ពី ៥ ដល់ ៨ វិនាទី និង ៨ វិនាទីពេញ។',
      },
      zh: {
        name: '公认品势慢动作节奏与呼吸引导标准 (5-8秒与8秒恒定规范)',
        summary: '世跆联品势慢动作规范：太极六章至天拳等5-8秒发力动作，以及太极八章、高丽、金刚鹤腿立等8秒固定静力性动作标准。',
      },
      ko: {
        name: '공인 품새 완동작(느린 동작) 시간 및 호흡 기준 규정',
        summary: '태극 6장~천권 5~8초 권장 완동작과 태극 8장, 고려, 금강학다리서기 등 8초 고정 완동작의 정확한 속도 및 단전호흡 기준집입니다.',
      },
    },
  },
]
