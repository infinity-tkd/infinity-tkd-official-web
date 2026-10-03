import type { LibraryItem } from './types'

export interface AdvancedKickingOverview {
  title: string
  koreanTitle: string
  subtitle: string
  philosophy: string
  coreTenets: Array<{ title: string; desc: string }>
}

export function getAdvancedKickingOverview(
  lang: 'en' | 'km' | 'zh' | 'ko'
): AdvancedKickingOverview {
  switch (lang) {
    case 'km':
      return {
        title: 'ប្រព័ន្ធក្បាច់ទាត់កម្រិតខ្ពស់ & ហោះលើអាកាស (Advanced Airborne Kicks)',
        koreanTitle: '특수 및 공중 발차기 체계 (Advanced Aerial Kicking)',
        subtitle: 'កម្លាំងស្ទុះហោះហើរ ការតម្រង់ជួរលើអាកាស និងការស្រូបទម្ងន់ពេលចុះដី',
        philosophy:
          'ក្បាច់ទាត់កម្រិតខ្ពស់លើអាកាសរបស់តេក្វាន់ដូ គឺជាការរួមបញ្ចូលគ្នារវាងកម្លាំងផ្ទុះនៃរាងកាយទាំងមូល ភាពបត់បែន និងការគ្រប់គ្រងលំនឹងក្នុងពេលអណ្តែតលើអាកាស។ ចាប់ពីក្បាច់ទាត់ហោះទោល (Jumping Front, Side, Roundhouse) រហូតដល់ក្បាច់ទាត់បន្តបន្ទាប់ល្បឿនលឿន (Double, Triple, Quadruple, Quintuple Kicks) និងក្បាច់ទាត់កន្ត្រៃ (Scissor & Split Kicks) ជំនាញទាំង ១៥ នេះតំណាងឱ្យកម្រិតកំពូលនៃការសម្តែង និងការប្រកួតទម្រង់សេរី។',
        coreTenets: [
          {
            title: 'កម្លាំងស្ទុះហោះឡើងបញ្ឈរ (Takeoff Impulse)',
            desc: 'ការបម្លែងល្បឿនរត់ និងការជាន់ដីយ៉ាងរឹងមាំឱ្យទៅជាកម្លាំងហោះឡើងត្រង់ ដើម្បីបង្កើតពេលវេលាអណ្តែតលើអាកាសអតិបរមា។',
          },
          {
            title: 'ការបត់ជង្គង់ & វាយប្រហារនៅចំណុចកំពូល (Apex Striking)',
            desc: 'ការបញ្ចេញកម្លាំងទាត់ចំគោលដៅត្រូវធ្វើឡើងយ៉ាងច្បាស់លាស់នៅចំណុចខ្ពស់បំផុតនៃគន្លងហោះហើរ (Zero Velocity Apex)។',
          },
          {
            title: 'ការស្រូបទម្ងន់ពេលចុះដីប្រកបដោយសុវត្ថិភាព (Landing Deceleration)',
            desc: 'ការបត់ជង្គង់ និងរឹតសាច់ដុំពោះភ្លាមៗបន្ទាប់ពីទាត់រួច ដើម្បីស្រូបកម្លាំងប៉ះទង្គិច និងការពារសន្លាក់ជង្គង់។',
          },
        ],
      }
    case 'zh':
      return {
        title: '高阶腾空与特技腿法全景体系 (Advanced Aerial Kicks)',
        koreanTitle: '특수 및 공중 발차기 체계 (Advanced Aerial Kicking)',
        subtitle: '起跳垂直爆发、滞空多段击打与关节柔顺着陆缓冲体系',
        philosophy:
          '跆拳道高阶腾空特技腿法是爆发力学、滞空平衡与极致柔韧性的巅峰体现。从单发飞踢（跳前踢、跳后旋、腾空侧踢）到令世人惊叹的空中多段连击（二段、三段、四段直至五段连击），再到高难度的剪刀踢与双飞空中劈腿，这15项腾空绝技构成了国技院与世界特技竞技的终极试金石。',
        coreTenets: [
          {
            title: '地表反作用力垂直转化 (Takeoff Impulse)',
            desc: '将助跑的水平动能无缝导入蹬地起跳，转化为最大垂直升力，创造充足的滞空操作时间窗口。',
          },
          {
            title: '最高顶点精准鞭打 (Apex Striking)',
            desc: '打击必须精准引爆于跳跃上升速度归零的绝对最高顶点（Apex），确保破坏力与滞空姿态的完美融合。',
          },
          {
            title: '屈膝卸力柔顺着陆 (Landing Deceleration)',
            desc: '踢击完成瞬间必须立即折叠收腿，以前脚掌着地、双膝深度屈曲卸除地面冲击，捍卫韧带与关节安全。',
          },
        ],
      }
    case 'ko':
      return {
        title: '태권도 특수 및 공중 발차기 마스터 체계 (Advanced Aerial Kicks)',
        koreanTitle: '특수 및 공중 발차기 체계 (Advanced Aerial Kicking)',
        subtitle: '도약 발판 탄력, 공중 체공 다단 타격 및 무릎 충격 흡수 착지 교본',
        philosophy:
          '태권도 공중 및 특수 발차기는 폭발적인 순발력, 공중 신체 정렬, 그리고 완벽한 착지 메커니즘의 결정체입니다. 뛰어 앞차기, 뛰어 옆차기, 뛰어 뒤후려차기 등 단발 비도 발차기부터 네발·오발 앞차기, 공중 5단 옆차기, 그리고 가위차기 및 양발벌려차기에 이르는 15가지 핵심 공중 기술은 자유품새와 시범단의 궁극적 기량을 상징합니다.',
        coreTenets: [
          {
            title: '도약 탄력 및 수직 추진 (Takeoff Impulse)',
            desc: '도움닫기 탄력을 지면 반발력으로 극대화하여 공중 체공 시간(Hang-Time)을 최대한 확보합니다.',
          },
          {
            title: '정점 접기 및 임팩트 (Apex Striking)',
            desc: '수직 상승 속도가 0이 되는 비행 최고 정점(Apex)에서 순간적인 채찍 탄력으로 타격을 완성합니다.',
          },
          {
            title: '무릎 굴곡 충격 흡수 착지 (Landing Deceleration)',
            desc: '타격 직후 반드시 다리를 신속히 접고, 무릎을 굽힌 연성 착지로 관절 부상을 완벽히 차단합니다.',
          },
        ],
      }
    default:
      return {
        title: 'Advanced & Dynamic Aerial Kicking System',
        koreanTitle: '특수 및 공중 발차기 체계 (Advanced Aerial Kicking)',
        subtitle: 'Takeoff Impulse, Multi-Chamber Airborne Suspension & Deceleration Landing Architecture',
        philosophy:
          'Advanced and dynamic airborne kicks embody the supreme synthesis of plyometric reactive power, mid-air spatial equilibrium, and extreme flexibility. Ranging from single-flight projectiles (Jumping Front, Side, Roundhouse, Spin Hook) to high-cadence aerial barrages (Double, Triple, Quadruple, and Quintuple Front & Side Kicks) and acrobatic scissor splits, these 15 elite techniques constitute the pinnacle of World Taekwondo demonstration and freestyle competition.',
        coreTenets: [
          {
            title: 'Vertical Takeoff Impulse',
            desc: 'Channel approach speed into explosive ground reaction forces to create maximum mid-air hang-time.',
          },
          {
            title: 'Apex Whiplash Execution',
            desc: 'Release kicking snaps precisely at zero vertical velocity (the apex) for flawless penetration.',
          },
          {
            title: 'Shock-Absorbing Soft Landing',
            desc: 'Instantly re-chamber in flight and land on the balls of feet with deep knee flexion to protect joints.',
          },
        ],
      }
  }
}

export interface AdvancedKickingI18nStrings {
  tabs: {
    overview: string
    process: string
    drills: string
    mistakes: string
    application: string
    recovery: string
  }
  filterAll: string
  filterCore7: string
  filterSingle: string
  filterMulti: string
  filterRotational: string
  filterScissor: string
  searchPlaceholder: string
  strikingSurface: string
  targetArea: string
  difficulty: string
  beltLevel: string
  airbornePhase: string
  targetCount: string
  balanceAndPosture: string
  corePrinciples: string
  prerequisites: string
  prereqPhysical: string
  prereqTechnical: string
  prereqMental: string
  stepSequence: string
  drillingMethods: string
  isolationDrills: string
  speedDrills: string
  powerDrills: string
  freestyleTricking: string
  spottingSafety: string
  commonMistakes: string
  mistakeLabel: string
  correctionLabel: string
  performanceTitle: string
  kyorugiApplication: string
  trickingApplication: string
  kickCombos: string
  recoveryTitle: string
  flexibilityMaint: string
  strengthExercises: string
  mobilityRoll: string
  stepNumber: string
  prevKick: string
  nextKick: string
  prevStep: string
  nextStep: string
  quickJump: string
  philosophyGuide: string
  toggleGuide: string
  allSteps: string
  singleStep: string
  jumpToKick: string
}

export const kickingAdvancedI18n: Record<'en' | 'km' | 'zh' | 'ko', AdvancedKickingI18nStrings> = {
  en: {
    tabs: {
      overview: 'Overview & Principles',
      process: '5-Step Training Process',
      drills: 'Drills & Plyometrics',
      mistakes: 'Mistakes & Corrections',
      application: 'Competition & Demo',
      recovery: 'Recovery & Maintenance',
    },
    filterAll: 'All Aerial Kicks (15)',
    filterCore7: 'Core 7 Jumping Kicks',
    filterSingle: 'Single Flight Kicks',
    filterMulti: 'Multi-Strike Barrages',
    filterRotational: 'Rotational Kicks',
    filterScissor: 'Scissor & Split',
    searchPlaceholder: 'Search advanced kicks by English, Korean (뛰어 앞차기), or target...',
    strikingSurface: 'Striking Surface',
    targetArea: 'Primary Target Area',
    difficulty: 'Skill Difficulty',
    beltLevel: 'Belt Requirement',
    airbornePhase: 'Aerial Flight Phase',
    targetCount: 'Mid-Air Target Count',
    balanceAndPosture: 'Flight Posture & Landing Absorption',
    corePrinciples: 'Core Principles of the Skill',
    prerequisites: 'Skill Prerequisites',
    prereqPhysical: 'Physical Prerequisites',
    prereqTechnical: 'Technical Prerequisites',
    prereqMental: 'Mental Prerequisites',
    stepSequence: 'Step-by-Step Training Process',
    drillingMethods: 'Drilling Methods for Effective Training',
    isolationDrills: 'Isolation & Chamber Holds in Air',
    speedDrills: 'Speed, Timing & Pad Drills',
    powerDrills: 'Plyometric & Jump Power Drills',
    freestyleTricking: 'Freestyle / Demonstration Adaptations',
    spottingSafety: 'Spotting & Safety Protocols',
    commonMistakes: 'Common Mistakes & Surgical Corrections',
    mistakeLabel: 'Common Mistake',
    correctionLabel: 'Master Correction',
    performanceTitle: 'Competition, Poomsae & Demo Breaks',
    kyorugiApplication: 'Application in Competition & Poomsae',
    trickingApplication: 'Demonstration & Breaking',
    kickCombos: 'Signature Aerial Combinations',
    recoveryTitle: 'Recovery, Landing Care & Conditioning',
    flexibilityMaint: 'Flexibility & Hamstring Flossing',
    strengthExercises: 'Plyometric & Core Conditioning',
    mobilityRoll: 'Joint Mobilization & Shock Recovery',
    stepNumber: 'Step',
    prevKick: 'Previous Kick',
    nextKick: 'Next Kick',
    prevStep: 'Previous Step',
    nextStep: 'Next Step',
    quickJump: 'Quick Jump',
    philosophyGuide: 'Biomechanical Foundation & 3 Airborne Tenets',
    toggleGuide: 'Master Aerial Principles Guide',
    allSteps: 'All Steps Breakdown',
    singleStep: 'Step-by-Step Card',
    jumpToKick: 'Jump to Technique',
  },
  km: {
    tabs: {
      overview: 'ទិដ្ឋភាពទូទៅ & គោលការណ៍',
      process: 'ដំណើរការហ្វឹកហាត់ ៥ ជំហាន',
      drills: 'វិធីសាស្ត្រហ្វឹកហាត់ & លំហាត់',
      mistakes: 'កំហុស & វិធីកែតម្រូវ',
      application: 'ការប្រកួត & ការសម្តែង',
      recovery: 'ការថែទាំ & សម្បទា',
    },
    filterAll: 'ក្បាច់ទាត់លើអាកាសទាំងអស់ (១៥)',
    filterCore7: 'ក្បាច់ទាត់ហោះស្នូលទាំង ៧',
    filterSingle: 'ក្បាច់ទាត់ហោះទោល',
    filterMulti: 'ក្បាច់ទាត់បន្តបន្ទាប់លើអាកាស',
    filterRotational: 'ក្បាច់ទាត់បង្វិលលើអាកាស',
    filterScissor: 'ក្បាច់ទាត់កន្ត្រៃ & ពុះជើង',
    searchPlaceholder: 'ស្វែងរកក្បាច់ទាត់តាមឈ្មោះ ឬពាក្យកូរ៉េ (뛰어 앞차기)...',
    strikingSurface: 'ផ្ទៃប៉ះទង្គិច / អាវុធជើង',
    targetArea: 'តំបន់គោលដៅសំខាន់',
    difficulty: 'កម្រិតបច្ចេកទេស',
    beltLevel: 'កម្រិតខ្សែក្រវាត់',
    airbornePhase: 'ដំណាក់កាលហោះហើរលើអាកាស',
    targetCount: 'ចំនួនគោលដៅលើអាកាស',
    balanceAndPosture: 'ឥរិយាបថលើអាកាស & ការស្រូបទម្ងន់',
    corePrinciples: 'គោលការណ៍ស្នូលនៃក្បាច់ទាត់',
    prerequisites: 'តម្រូវការជាមុននៃជំនាញ',
    prereqPhysical: 'តម្រូវការរាងកាយ',
    prereqTechnical: 'តម្រូវការបច្ចេកទេស',
    prereqMental: 'តម្រូវការស្មារតី',
    stepSequence: 'ដំណើរការហ្វឹកហាត់ ៥ ជំហានតាមលំដាប់',
    drillingMethods: 'វិធីសាស្ត្រហ្វឹកហាត់ប្រកបដោយប្រសិទ្ធភាព',
    isolationDrills: 'លំហាត់បំបែកចលនា & បត់ជង្គង់លើអាកាស',
    speedDrills: 'លំហាត់ល្បឿន & ការទាត់ប៉ាវ',
    powerDrills: 'លំហាត់កម្លាំងស្ទុះ Plyometric',
    freestyleTricking: 'ការបំប្លែងទៅជា Freestyle & ការសម្តែង',
    spottingSafety: 'សុវត្ថិភាព & ការការពាររបួស',
    commonMistakes: 'កំហុសទូទៅ និងវិធីកែតម្រូវច្បាស់លាស់',
    mistakeLabel: 'កំហុសដែលឧស្សាហ៍កើតមាន',
    correctionLabel: 'ការកែតម្រូវត្រឹមត្រូវ',
    performanceTitle: 'ការប្រកួត មេគុន & ការទាត់បំបែកក្តារ',
    kyorugiApplication: 'ការប្រើប្រាស់ក្នុងការប្រកួត & មេគុន',
    trickingApplication: 'ការសម្តែង & ការបំបែកក្តារលើអាកាស',
    kickCombos: 'បន្សំក្បាច់ទាត់លើអាកាស',
    recoveryTitle: 'ការស្តារកម្លាំង & ការថែទាំសន្លាក់',
    flexibilityMaint: 'ការរក្សាភាពបត់បែនសរសៃពួរ',
    strengthExercises: 'លំហាត់ពង្រឹងកម្លាំងស្ទុះ & ស្នូល',
    mobilityRoll: 'ការចល័តសន្លាក់ & ការបន្ធូរសាច់ដុំ',
    stepNumber: 'ជំហានទី',
    prevKick: 'ក្បាច់ទាត់មុន',
    nextKick: 'ក្បាច់ទាត់បន្ទាប់',
    prevStep: 'ជំហានមុន',
    nextStep: 'ជំហានបន្ទាប់',
    quickJump: 'ជ្រើសរើសរហ័ស',
    philosophyGuide: 'មូលដ្ឋានគ្រឹះជីវមេកានិច & គោលការណ៍ហោះហើរទាំង ៣',
    toggleGuide: 'សៀវភៅណែនាំគោលការណ៍គ្រូ',
    allSteps: 'បង្ហាញជំហានទាំងអស់',
    singleStep: 'កាតជំហានអន្តរកម្ម',
    jumpToKick: 'រំលងទៅកាន់ក្បាច់ទាត់',
  },
  zh: {
    tabs: {
      overview: '技法总览与核心原理',
      process: '五步进阶训练全流程',
      drills: '实战靶法与弹跳爆发力',
      mistakes: '易犯错误与力学校正',
      application: '竞技实战与特技破板',
      recovery: '落地缓冲与柔韧恢复',
    },
    filterAll: '全部空战特技腿法 (15)',
    filterCore7: '核心七大腾空绝技',
    filterSingle: '单发腾空打击',
    filterMulti: '空中多段连续打击',
    filterRotational: '空中旋转腿法',
    filterScissor: '剪刀腿与双飞开腿',
    searchPlaceholder: '按腿法名称、韩文（뛰어 앞차기）或目标搜索...',
    strikingSurface: '触击发力面',
    targetArea: '主攻人体靶区',
    difficulty: '技法难度阶梯',
    beltLevel: '修习段位门槛',
    airbornePhase: '空中飞行分解相位',
    targetCount: '单次腾空打击段数',
    balanceAndPosture: '滞空身法与落地减震姿态',
    corePrinciples: '该项腿法之核心生力法则',
    prerequisites: '习练本门先决条件',
    prereqPhysical: '身体体能先决条件',
    prereqTechnical: '基础技术先决条件',
    prereqMental: '心理意念先决条件',
    stepSequence: '人体力学动作分解与阶段训练',
    drillingMethods: '科学高效专项训练法',
    isolationDrills: '空中孤立折叠与控腿练习',
    speedDrills: '速度反应与高靶打击实操',
    powerDrills: '下肢超等长弹跳功力训练',
    freestyleTricking: '自由品势与极限特技（Tricking）衔接',
    spottingSafety: '安全防护与落地点缓冲预防',
    commonMistakes: '常见致命错误与纠错剖析',
    mistakeLabel: '易犯错误',
    correctionLabel: '正规纠错',
    performanceTitle: '实战竞技表现与特技表演破板',
    kyorugiApplication: '竞技对抗与品势标准应用',
    trickingApplication: '特技空翻与高空破板展示',
    kickCombos: '经典空中组合绝招',
    recoveryTitle: '关节减压、肌力加固与拉伸恢复',
    flexibilityMaint: '腘绳肌与髂腰肌长效伸展',
    strengthExercises: '下肢弹跳与抗扭转核心加固',
    mobilityRoll: '髌骨韧带冰敷与踝关节灵活性',
    stepNumber: '第',
    prevKick: '上一腿法',
    nextKick: '下一腿法',
    prevStep: '上一步骤',
    nextStep: '下一步骤',
    quickJump: '快速选择',
    philosophyGuide: '生物力学基础与三大腾空铁律',
    toggleGuide: '特技总纲核心指南',
    allSteps: '全部步骤逐条拆解',
    singleStep: '交互卡片模式',
    jumpToKick: '跳转至技术',
  },
  ko: {
    tabs: {
      overview: '개요 및 핵심 원리',
      process: '5단계 단계별 훈련 과정',
      drills: '효과적인 훈련 방법 & 탄력',
      mistakes: '흔한 실수와 교정법',
      application: '경기 및 시범 격파 응용',
      recovery: '착지 관리 및 컨디셔닝',
    },
    filterAll: '전체 공중 발차기 (15)',
    filterCore7: '7대 핵심 공중 발차기',
    filterSingle: '단발 공중 발차기',
    filterMulti: '공중 다단 연속 발차기',
    filterRotational: '공중 회전 발차기',
    filterScissor: '가위차기 및 양발벌려차기',
    searchPlaceholder: '발차기 명칭, 한글(뛰어 앞차기) 또는 타격 부위로 검색...',
    strikingSurface: '타격 접촉 부위 (Striking Surface)',
    targetArea: '주요 타격 목표 부위',
    difficulty: '기술 난이도',
    beltLevel: '수련 권장 띠 단계',
    airbornePhase: '공중 비행 위상 (Airborne Phase)',
    targetCount: '공중 타격 타깃 수 (Targets)',
    balanceAndPosture: '비행 자세 및 착지 충격 흡수',
    corePrinciples: '기술의 핵심 원리 (Core Principles)',
    prerequisites: '사전 요구 조건 (Prerequisites)',
    prereqPhysical: '신체적 조건',
    prereqTechnical: '기술적 조건',
    prereqMental: '정신적/심리적 조건',
    stepSequence: '5단계 체계적 수련 및 훈련 과정',
    drillingMethods: '실전 능력 향상을 위한 드릴 훈련법',
    isolationDrills: '공중 고립 훈련 및 체임버 홀딩',
    speedDrills: '스피드 및 미트 타격 트레이닝',
    powerDrills: '플라이오메트릭 순발력 점프 훈련',
    freestyleTricking: '자유품새 및 시범단 고난도 응용',
    spottingSafety: '부상 방지 및 안전 착지 수칙',
    commonMistakes: '흔한 기술적 실수와 정확한 교정 가이드',
    mistakeLabel: '흔한 실수 (Mistake)',
    correctionLabel: '정확한 교정법 (Correction)',
    performanceTitle: '경기 실전 적용 및 고공 격파 시범',
    kyorugiApplication: '겨루기 다득점 및 공인품새 적용',
    trickingApplication: '자유품새 및 익스트림 시범 격파',
    kickCombos: '실전 공중 연속 발차기 콤보',
    recoveryTitle: '착지 관절 관리 및 컨디셔닝 회복',
    flexibilityMaint: '수련 후 햄스트링/장요근 유연성 관리',
    strengthExercises: '하체 순발력 및 코어 지지근력 강화',
    mobilityRoll: '슬개골 관절 보호 및 폼롤러 이완',
    stepNumber: '제',
    prevKick: '이전 발차기',
    nextKick: '다음 발차기',
    prevStep: '이전 단계',
    nextStep: '다음 단계',
    quickJump: '빠른 선택',
    philosophyGuide: '생체역학적 토대 및 3대 공중 지침',
    toggleGuide: '마스터 핵심 원리 가이드',
    allSteps: '전체 단계 목록 보기',
    singleStep: '단계별 카드 모드',
    jumpToKick: '해당 기술로 이동',
  },
}

// Map for localized names and brief summaries across 3 languages
const localizedKickNames: Record<
  'km' | 'zh' | 'ko',
  Record<string, { name: string; summary?: string; meaning?: string }>
> = {
  km: {
    'jumping-front-kick': {
      name: 'ក្បាច់លោតទាត់ត្រង់ (Jumping Front Kick / Twio Ap Chagi)',
      meaning: 'ការស្ទុះហោះឡើង ការបត់ជង្គង់នៅចំណុចខ្ពស់បំផុត និងការចុះដីប្រកបដោយលំនឹង',
    },
    'jumping-roundhouse-kick': {
      name: 'ក្បាច់លោតទាត់ផ្អៀង (Jumping Roundhouse / Twio Dollyo Chagi)',
      meaning: 'ការបង្វិលត្រគាកផ្តេកលើអាកាស និងការទាត់ដោយខ្នងជើងយ៉ាងរហ័ស',
    },
    'jumping-side-kick': {
      name: 'ក្បាច់លោតទាត់ចំហៀង (Jumping Side Kick / Twio Yeop Chagi)',
      meaning: 'ការហោះហើរតាមបន្ទាត់ត្រង់ និងការធាក់កែងជើងទម្លុះគោលដៅ',
    },
    'jumping-spin-hook': {
      name: 'ក្បាច់លោតទាត់បង្វិលកែង (Jumping Spin Hook / Twio Dwi Huryeo Chagi)',
      meaning: 'ការបង្វិលខ្លួន ៣៦០° លើអាកាស និងការទំពក់កែងជើងចំក្បាល',
    },
    'jumping-double-front-kick': {
      name: 'ក្បាច់លោតទាត់ពីរជើង (Jumping Double Front Kick / Eedan Ap Chagi)',
      meaning: 'ការទាត់ត្រង់ពីរដងជាប់គ្នាក្នុងការលោតតែម្តង',
    },
    'jumping-triple-front-kicks': {
      name: 'ក្បាច់លោតទាត់បីជើង (Jumping Triple Front Kicks / Eedan Sahm Ap Chagi)',
      meaning: 'ការទាត់ត្រង់បីដងជាប់គ្នាក្នុងការលោតតែម្តង',
    },
    'jumping-quadruple-front-kicks': {
      name: 'ក្បាច់លោតទាត់បួនជើង (Jumping Quadruple Front Kicks / Ne-bal Ap Chagi)',
      meaning: 'ការទាត់ត្រង់បួនដងជាប់គ្នាក្នុងការលោតតែម្តង',
    },
    'jumping-quintuple-front-kicks': {
      name: 'ក្បាច់លោតទាត់ប្រាំជើង (Jumping Quintuple Front Kicks / Daseot-bal Ap Chagi)',
      meaning: 'ការទាត់ត្រង់ប្រាំដងជាប់គ្នាក្នុងការលោតតែម្តងដែលជាកំពូលជំនាញ',
    },
    'jumping-double-round-kicks': {
      name: 'ក្បាច់លោតទាត់ផ្អៀងពីរជើង (Jumping Double Round Kicks / Eedan Narae Chagi)',
      meaning: 'ការទាត់ផ្អៀងឆ្លាស់ជើងសងខាងលើអាកាស',
    },
    'jumping-triple-side-kicks': {
      name: 'ក្បាច់លោតទាត់ចំហៀងបីដង (Jumping Triple Side Kicks / Sam-dan Yeop Chagi)',
      meaning: 'ការធាក់ចំហៀងបីដងកាត់តាមគោលដៅបីក្នុងពេលហោះហើរ',
    },
    'jumping-quintuple-side-kicks': {
      name: 'ក្បាច់លោតទាត់ចំហៀងប្រាំដង (Jumping Quintuple Side Kicks / O-dan Yeop Chagi)',
      meaning: 'ការធាក់ចំហៀងប្រាំដងជាប់គ្នាក្នុងការហោះហើរតែម្តង',
    },
    'jumping-multiple-kicks': {
      name: 'ក្បាច់លោតទាត់ចម្រុះលើអាកាស (Jumping Multiple Kicks / Modum Bal Chagi)',
      meaning: 'ការរួមបញ្ចូលគ្នានូវក្បាច់ទាត់ផ្សេងៗគ្នាក្នុងការលោតតែម្តង',
    },
    'jumping-back-kick': {
      name: 'ក្បាច់លោតធាក់ក្រោយ (Jumping Back Kick / Twio Dwi Chagi)',
      meaning: 'ការបង្វិលខ្លួន ១៨០° លើអាកាស និងការធាក់កែងជើងត្រង់ទៅក្រោយ',
    },
    'jumping-split-kick': {
      name: 'ក្បាច់លោតពុះជើងសងខាង (Jumping Split Kick / Dwit Narae Chagi)',
      meaning: 'ការលោតពុះជើង ១៨០° វាយប្រហារគោលដៅសងខាងដំណាលគ្នា',
    },
    'scissor-kick': {
      name: 'ក្បាច់ទាត់កន្ត្រៃ (Scissor Kick / Gawi Chagi)',
      meaning: 'ការទាត់ដំណាលគ្នាលើប្លង់កម្ពស់ខុសគ្នាដូចកន្ត្រៃកាត់',
    },
  },
  zh: {
    'jumping-front-kick': {
      name: '腾空前踢 (Jumping Front Kick / Twio Ap Chagi)',
      meaning: '垂直起跳、最高顶点折叠收膝、前脚掌爆发弹打与屈膝落地缓冲',
    },
    'jumping-roundhouse-kick': {
      name: '腾空跳横踢 (Jumping Roundhouse / Twio Dollyo Chagi)',
      meaning: '起跳腾空、空中水平翻髋与脚背凌空抽击',
    },
    'jumping-side-kick': {
      name: '腾空飞侧踢 (Jumping Side Kick / Twio Yeop Chagi)',
      meaning: '助跑滑翔腾空、收膝贴胸、脚刀水平直线活塞式穿透',
    },
    'jumping-spin-hook': {
      name: '腾空跳后旋踢 (Jumping Spin Hook / Twio Dwi Huryeo Chagi)',
      meaning: '空中360度旋转、头部瞬间定锁靶位与脚后跟暴烈勾击',
    },
    'jumping-double-front-kick': {
      name: '双飞二段前踢 (Jumping Double Front / Eedan Ap Chagi)',
      meaning: '单次起跳中一虚一实、连续发射两记前踢',
    },
    'jumping-triple-front-kicks': {
      name: '空中三段前踢 (Jumping Triple Front / Eedan Sahm Ap Chagi)',
      meaning: '极速滞空中完成下、中、上三段连续前踢打击',
    },
    'jumping-quadruple-front-kicks': {
      name: '空中四段前踢 (Ne-bal Ap Chagi)',
      meaning: '超高滞空连贯蹬击四块靶位的示范团神技',
    },
    'jumping-quintuple-front-kicks': {
      name: '空中五段前踢 (Daseot-bal Ap Chagi)',
      meaning: '国技院顶级示范动作；一次腾空击碎五块渐高木板',
    },
    'jumping-double-round-kicks': {
      name: '腾空双飞踢 (Eedan Narae Chagi)',
      meaning: '空中左右双侧骨盆无缝翻转、连续抽击脚背',
    },
    'jumping-triple-side-kicks': {
      name: '空中三段侧踢 (Sam-dan Yeop Chagi)',
      meaning: '水平滑行中脚刀连续三度深折叠活塞穿透',
    },
    'jumping-quintuple-side-kicks': {
      name: '空中五段侧踢 (O-dan Yeop Chagi)',
      meaning: '长距离滑翔中连续完成五记脚刀破板奇观',
    },
    'jumping-multiple-kicks': {
      name: '空中多段复合踢 (Modum Bal Chagi)',
      meaning: '自由品势与特技核心；单次起跳融合前踢、横踢与后旋',
    },
    'jumping-back-kick': {
      name: '腾空跳后踢 (Jumping Back Kick / Twio Dwi Chagi)',
      meaning: '空中背身转体180度、脚跟直线如重锤撞击',
    },
    'jumping-split-kick': {
      name: '空中双飞劈腿分踢 (Dwit Narae Chagi / Gawi Beollyeo Chagi)',
      meaning: '垂直起跳后空中180度横叉同时击碎左右两侧目标',
    },
    'scissor-kick': {
      name: '腾空剪刀踢 (Scissor Kick / Gawi Chagi)',
      meaning: '如剪刀般上下异面同时击打敌方躯干与头颈',
    },
  },
  ko: {
    'jumping-front-kick': {
      name: '뛰어 앞차기 (Jumping Front Kick / Twio Ap Chagi)',
      meaning: '수직 도약, 최고 정점 무릎 접기 및 앞축 폭발적 타격과 충격 흡수 착지',
    },
    'jumping-roundhouse-kick': {
      name: '뛰어 돌려차기 (Jumping Roundhouse / Twio Dollyo Chagi)',
      meaning: '도약 체공, 공중 골반 반전 및 발등 휩 스냅 타격',
    },
    'jumping-side-kick': {
      name: '뛰어 옆차기 (Jumping Side Kick / Twio Yeop Chagi)',
      meaning: '비행 탄력과 무릎 밀착 가슴 접기, 발날 수평 피스톤 관통 타격',
    },
    'jumping-spin-hook': {
      name: '뛰어 뒤후려차기 (Jumping Spin Hook / Twio Dwi Huryeo Chagi)',
      meaning: '공중 360도 회전, 시선 정점 타깃 고정 및 뒤꿈치 궤적 훅 타격',
    },
    'jumping-double-front-kick': {
      name: '이단 앞차기 / 두발당성 (Jumping Double Front Kick)',
      meaning: '도약 중 1차 견제 앞차기와 2차 최고 정점 안면 강타의 2단 연속기',
    },
    'jumping-triple-front-kicks': {
      name: '이단 삼단 앞차기 (Jumping Triple Front Kicks)',
      meaning: '단일 도약 중 하·중·상 3단계를 초고속으로 연속 타격하는 체공 기술',
    },
    'jumping-quadruple-front-kicks': {
      name: '네발 앞차기 (Jumping Quadruple Front Kicks)',
      meaning: '최대 체공 시간 동안 4번의 연속 앞차기를 뿜어내는 시범단 고난도 기술',
    },
    'jumping-quintuple-front-kicks': {
      name: '오발 앞차기 (Jumping Quintuple Front Kicks)',
      meaning: '국기원 시범단의 최고봉; 한 번의 도약으로 5개의 표적을 연속 격파',
    },
    'jumping-double-round-kicks': {
      name: '이단 나래차기 (Jumping Double Round Kicks)',
      meaning: '공중에서 좌우 골반을 뒤집으며 시차 없이 연속 발등 타격',
    },
    'jumping-triple-side-kicks': {
      name: '공중 3단 옆차기 (Jumping Triple Side Kicks)',
      meaning: '수평 비행 중 발날 피스톤을 3회 연속 뻗어 3개 격파물을 관통',
    },
    'jumping-quintuple-side-kicks': {
      name: '공중 5단 옆차기 (Jumping Quintuple Side Kicks)',
      meaning: '장거리 수평 활공 중 5개의 목표물을 차례로 타격하는 극한의 기량',
    },
    'jumping-multiple-kicks': {
      name: '공중 다단 복합 발차기 (Jumping Multiple Kicks)',
      meaning: '앞차기·돌려차기·후려차기·옆차기를 공중에서 종합 연결하는 자유품새 기술',
    },
    'jumping-back-kick': {
      name: '뛰어 뒤차기 (Jumping Back Kick / Twio Dwi Chagi)',
      meaning: '공중 180도 반전 후 뒤꿈치를 직선 피스톤으로 내리꽂는 카운터 파괴기',
    },
    'jumping-split-kick': {
      name: '뒤나래차기 / 가위벌려차기 (Jumping Split Kick)',
      meaning: '수직 도약 후 공중 180도 다리찢기로 좌우 양측 목표물을 동시 격파',
    },
    'scissor-kick': {
      name: '가위차기 (Scissor Kick / Gawi Chagi)',
      meaning: '가위의 절단 원리처럼 상·하 양단 표적을 동시에 조여차는 품새·호신 기술',
    },
  },
}

export function getLocalizedAdvancedKickingItem(
  item: LibraryItem,
  lang: 'en' | 'km' | 'zh' | 'ko'
): LibraryItem {
  if (lang === 'en') return item

  const translationOverride = localizedKickNames[lang]?.[item.id]
  if (!translationOverride) return item

  return {
    ...item,
    name: translationOverride.name || item.name,
    meaning: translationOverride.meaning || item.meaning,
  }
}
