// =============================================================================
// INFINITY TAEKWONDO — HISTORY & HERITAGE MULTILINGUAL TRANSLATION MODULE
// Languages: English (en), Khmer (km), Chinese (zh), Korean (ko)
// =============================================================================

export interface LocalizedTimelineItem {
  id: string
  year: string
  era: string
  epochNumber: number
  title: string
  koreanTitle: string
  keyFigures: string
  summary: string
  details: string[]
  image: string
  tagColor: string
}

export interface LocalizedPillarMeta {
  key: string
  title: string
  korean: string
  subtitle: string
}

export interface LocalizedEraFilter {
  id: string
  label: string
}

export interface LocalizedKwanItem {
  id: string
  name: string
  koreanName: string
  hanja: string
  meaning: string
  foundingYear: string
  founder: string
  location: string
  kwanNumber: number
  lineageRoot: string
  characteristics: string
  prominentMasters: string[]
  historicalLegacy: string
}

export interface LocalizedOrgItem {
  id: string
  name: string
  koreanName: string
  acronym: string
  foundingYear: string
  founder: string
  headquarters: string
  leadership: string
  scope: string
  badgeColor: string
  logoText: string
  summary: string
  governanceRole: string
  sparringRules: {
    format: string
    contactLevel: string
    protectiveGear: string
    headPunches: boolean
    scoringSystem: string
  }
  formsSystem: {
    name: string
    count: string
    philosophy: string
    examples: string[]
  }
  keyMilestones: string[]
  strengths: string[]
}

// -----------------------------------------------------------------------------
// 1. GENERAL UI LABELS (historyI18n)
// -----------------------------------------------------------------------------
export const historyI18n: Record<string, {
  pillarBadge: string
  searchPlaceholder: string
  filterAllEras: string
  viewTimeline: string
  viewTable: string
  resultsCount: string
  milestoneDetailTitle: string
  btnReadFull: string
  btnClose: string
  colEpoch: string
  colYear: string
  colEvent: string
  colFigures: string
  colSummary: string
  kwanAnnexBadge: string
  kwanFoundingYear: string
  kwanFounder: string
  kwanLocation: string
  kwanLineage: string
  kwanCharacteristics: string
  kwanMasters: string
  kwanLegacy: string
  orgMatrixTitle: string
  orgMatrixSubtitle: string
  orgGovernanceRole: string
  orgSparringTitle: string
  orgFormsTitle: string
  orgMilestonesTitle: string
  orgStrengthsTitle: string
  orgFormatLabel: string
  orgContactLabel: string
  orgGearLabel: string
  orgHeadPunchLabel: string
  orgScoringLabel: string
  orgPermitted: string
  orgProhibited: string
  tableComparisonTitle: string
  tableComparisonSub: string
  colFeature: string
}> = {
  en: {
    pillarBadge: 'Curriculum Pillar',
    searchPlaceholder: 'Search milestones, historical figures, treaties...',
    filterAllEras: 'All 8 Eras',
    viewTimeline: 'Chronological Cards',
    viewTable: 'Tabular Matrix',
    resultsCount: 'milestones found',
    milestoneDetailTitle: 'Historical Milestone Dossier',
    btnReadFull: 'Inspect Full Dossier',
    btnClose: 'Close Dossier',
    colEpoch: 'Epoch',
    colYear: 'Year / Period',
    colEvent: 'Historical Milestone',
    colFigures: 'Key Figures',
    colSummary: 'Canonical Significance',
    kwanAnnexBadge: 'Post-1978 Kukkiwon Annex #',
    kwanFoundingYear: 'Founding Year',
    kwanFounder: 'Founding Master',
    kwanLocation: 'Original Location',
    kwanLineage: 'Lineage & Root Arts',
    kwanCharacteristics: 'Technical Characteristics',
    kwanMasters: 'Prominent Masters',
    kwanLegacy: 'Historical Legacy',
    orgMatrixTitle: 'Global Governance & Institutional Comparison',
    orgMatrixSubtitle: 'Comprehensive analysis of WT, Kukkiwon, ITF, and ATA structures',
    orgGovernanceRole: 'Governance & Institutional Role',
    orgSparringTitle: 'Sparring (Kyorugi / Matsogi) Rules',
    orgFormsTitle: 'Forms (Poomsae / Tul) Curriculum',
    orgMilestonesTitle: 'Key Historical Milestones',
    orgStrengthsTitle: 'Institutional Strengths',
    orgFormatLabel: 'Match Format',
    orgContactLabel: 'Contact Level',
    orgGearLabel: 'Protective Equipment',
    orgHeadPunchLabel: 'Head Punches',
    orgScoringLabel: 'Scoring System',
    orgPermitted: 'Permitted',
    orgProhibited: 'Prohibited',
    tableComparisonTitle: 'Multi-Institutional Comparison Matrix',
    tableComparisonSub: 'Direct point-by-point technical and governance comparison',
    colFeature: 'Evaluation Feature',
  },
  km: {
    pillarBadge: 'សសរស្តម្ភកម្មវិធីសិក្សា',
    searchPlaceholder: 'ស្វែងរកព្រឹត្តិការណ៍ប្រវត្តិសាស្ត្រ បុគ្គលសំខាន់ៗ...',
    filterAllEras: 'យុគសម័យទាំង ៨',
    viewTimeline: 'ទិដ្ឋភាពកាតលំដាប់កាល',
    viewTable: 'ទិដ្ឋភាពតារាងម៉ាទ្រីស',
    resultsCount: 'ព្រឹត្តិការណ៍ត្រូវបានរកឃើញ',
    milestoneDetailTitle: 'ឯកសារលម្អិតព្រឹត្តិការណ៍ប្រវត្តិសាស្ត្រ',
    btnReadFull: 'ពិនិត្យឯកសារលម្អិត',
    btnClose: 'បិទឯកសារ',
    colEpoch: 'យុគសម័យ',
    colYear: 'ឆ្នាំ / សម័យកាល',
    colEvent: 'ព្រឹត្តិការណ៍ប្រវត្តិសាស្ត្រ',
    colFigures: 'បុគ្គលសំខាន់ៗ',
    colSummary: 'សារៈសំខាន់ជាប្រវត្តិសាស្ត្រ',
    kwanAnnexBadge: 'សាខា Kukkiwon ក្រោយឆ្នាំ ១៩៧៨ លេខ',
    kwanFoundingYear: 'ឆ្នាំបង្កើត',
    kwanFounder: 'មេគ្រូស្ថាបនិក',
    kwanLocation: 'ទីតាំងដើម',
    kwanLineage: 'ខ្សែស្រឡាយក្បាច់គុនដើម',
    kwanCharacteristics: 'លក្ខណៈពិសេសនៃបច្ចេកទេស',
    kwanMasters: 'មេគ្រូល្បីៗ',
    kwanLegacy: 'កេរដំណែលប្រវត្តិសាស្ត្រ',
    orgMatrixTitle: 'ការប្រៀបធៀបស្ថាប័នគ្រប់គ្រងកីឡាតេក្វាន់ដូពិភពលោក',
    orgMatrixSubtitle: 'ការវិភាគស៊ីជម្រៅអំពីរចនាសម្ព័ន្ធ WT, Kukkiwon, ITF និង ATA',
    orgGovernanceRole: 'តួនាទីគ្រប់គ្រង & ស្ថាប័ន',
    orgSparringTitle: 'ច្បាប់ប្រកួតប្រយុទ្ធ (Kyorugi / Matsogi)',
    orgFormsTitle: 'កម្មវិធីសិក្សាមេគុន (Poomsae / Tul)',
    orgMilestonesTitle: 'ព្រឹត្តិការណ៍ប្រវត្តិសាស្ត្រសំខាន់ៗ',
    orgStrengthsTitle: 'ចំណុចខ្លាំងនៃស្ថាប័ន',
    orgFormatLabel: 'ទម្រង់នៃការប្រកួត',
    orgContactLabel: 'កម្រិតនៃការប៉ះទង្គិច',
    orgGearLabel: 'ឧបករណ៍ការពារសុវត្ថិភាព',
    orgHeadPunchLabel: 'ការវាយកណ្តាប់ដៃចំក្បាល',
    orgScoringLabel: 'ប្រព័ន្ធកំណត់ពិន្ទុ',
    orgPermitted: 'អនុញ្ញាត',
    orgProhibited: 'ហាមឃាត់ដាច់ខាត',
    tableComparisonTitle: 'តារាងប្រៀបធៀបស្ថាប័ននានា',
    tableComparisonSub: 'ការប្រៀបធៀបចំណុចបច្ចេកទេស និងការគ្រប់គ្រងដោយផ្ទាល់',
    colFeature: 'លក្ខណៈវិនិច្ឆ័យ',
  },
  zh: {
    pillarBadge: '核心课程支柱',
    searchPlaceholder: '搜索历史里程碑、先驱宗师、重大事件...',
    filterAllEras: '全部八大时代',
    viewTimeline: '编年卡片视图',
    viewTable: '矩阵表格视图',
    resultsCount: '个历史里程碑',
    milestoneDetailTitle: '历史里程碑详细档案',
    btnReadFull: '查看完整档案',
    btnClose: '关闭档案',
    colEpoch: '历史时代',
    colYear: '年份 / 年代',
    colEvent: '重大历史事件',
    colFigures: '关键历史先驱',
    colSummary: '权威历史意义',
    kwanAnnexBadge: '1978年统合后国技院附馆编号',
    kwanFoundingYear: '创立年份',
    kwanFounder: '开山宗师',
    kwanLocation: '原始道馆馆址',
    kwanLineage: '武学传承脉络',
    kwanCharacteristics: '技术风格与特征',
    kwanMasters: '杰出宗师代表',
    kwanLegacy: '历史遗产',
    orgMatrixTitle: '全球主要跆拳道管理机构权威对比',
    orgMatrixSubtitle: '世跆联(WT)、国技院(Kukkiwon)、ITF与ATA组织架构深度解析',
    orgGovernanceRole: '管理职能与法定角色',
    orgSparringTitle: '实战竞技(Kyorugi/Matsogi)规则',
    orgFormsTitle: '品势/套路(Poomsae/Tul)体系',
    orgMilestonesTitle: '发展关键里程碑',
    orgStrengthsTitle: '组织优势与全球影响力',
    orgFormatLabel: '赛制架构',
    orgContactLabel: '接触与对抗程度',
    orgGearLabel: '防护装备规范',
    orgHeadPunchLabel: '拳击面部/头部',
    orgScoringLabel: '计分分值规则',
    orgPermitted: '允许执行',
    orgProhibited: '严格严禁',
    tableComparisonTitle: '各大国际跆拳道组织横向对比矩阵',
    tableComparisonSub: '权威规约、奥运地位及技术规范逐项对照',
    colFeature: '对比评估项目',
  },
  ko: {
    pillarBadge: '커리큘럼 4대 핵심 지주',
    searchPlaceholder: '역사적 사건, 무예 인물, 공인 조약 검색...',
    filterAllEras: '8대 시대 전체',
    viewTimeline: '연대기 카드 뷰',
    viewTable: '상세 테이블 매트릭스',
    resultsCount: '개 사건 검색됨',
    milestoneDetailTitle: '역사적 사건 공인 상세 보고서',
    btnReadFull: '상세 보고서 보기',
    btnClose: '보고서 닫기',
    colEpoch: '시대 구분',
    colYear: '연도 / 시대',
    colEvent: '역사적 사건',
    colFigures: '주요 인물',
    colSummary: '역사적 의의 및 특징',
    kwanAnnexBadge: '1978년 통합 후 국기원 별관 번호',
    kwanFoundingYear: '창관 연도',
    kwanFounder: '창관 관장(개산조)',
    kwanLocation: '원래 도장 위치',
    kwanLineage: '무예 유파 연원',
    kwanCharacteristics: '기술적 특징 및 수련 풍격',
    kwanMasters: '주요 사범 및 계승자',
    kwanLegacy: '역사적 공헌 및 유산',
    orgMatrixTitle: '세계 주요 태권도 기구 비교 분석',
    orgMatrixSubtitle: '세계태권도연맹(WT), 국기원, 국제태권도연맹(ITF), ATA 구조 총망라',
    orgGovernanceRole: '기구의 역할 및 법적 위상',
    orgSparringTitle: '겨루기(맞서기) 경기 규칙',
    orgFormsTitle: '품새(틀) 수련 체계',
    orgMilestonesTitle: '주요 역사적 발전 연혁',
    orgStrengthsTitle: '기구별 독점적 장점',
    orgFormatLabel: '경기 방식',
    orgContactLabel: '타격 접촉 강도',
    orgGearLabel: '보호 장구 규정',
    orgHeadPunchLabel: '주먹 얼굴 타격',
    orgScoringLabel: '득점 점수 체계',
    orgPermitted: '허용',
    orgProhibited: '금지(반칙)',
    tableComparisonTitle: '세계 4대 태권도 기구 비교 매트릭스',
    tableComparisonSub: '공인 규정, 올림픽 지위, 기술 체계 항목별 대조',
    colFeature: '비교 항목',
  },
}

// -----------------------------------------------------------------------------
// 2. PILLAR TABS (getLocalizedHistoryPillars)
// -----------------------------------------------------------------------------
export function getLocalizedHistoryPillars(lang: string): LocalizedPillarMeta[] {
  switch (lang) {
    case 'km':
      return [
        {
          key: 'timeline',
          title: '១. ប្រវត្តិសាស្ត្រ & កាលប្បវត្តិ',
          korean: '역사 연대표 (8대 시대)',
          subtitle: '១៦ ព្រឹត្តិការណ៍ជាប្រវត្តិសាស្ត្រ & នាឡិកាកាលប្បវត្តិអន្តរកម្ម',
        },
        {
          key: 'philosophy',
          title: '២. ទស្សនវិជ្ជា & គុណធម៌',
          korean: '태권도 정신 & 5대 덕목·훈',
          subtitle: 'Geukgi & Hongik, គុណធម៌ទាំង ៥, គោលការណ៍ទាំង ៥ & កីឡា Mudo',
        },
        {
          key: 'heritage',
          title: '៣. កេរដំណែល & សាលាគុនទាំង ៩',
          korean: '기간 9대 관 (九大館) & 통합',
          subtitle: 'សាលាគុនស្ថាបនិក មហាចារ្យ & ការបង្រួបបង្រួមឆ្នាំ ១៩៧៨',
        },
        {
          key: 'organizations',
          title: '៤. ស្ថាប័នពិភពលោក',
          korean: '세계 주요 기구 비교 (WT • Kukkiwon • ITF • ATA)',
          subtitle: 'ការគ្រប់គ្រង ធម្មនុញ្ញអូឡាំពិក ច្បាប់ និងប្រព័ន្ធប្រកួត',
        },
      ]
    case 'zh':
      return [
        {
          key: 'timeline',
          title: '1. 发展历史与编年史',
          korean: '역사 연대표 (8대 시대)',
          subtitle: '16大历史纪元里程碑与互动编年表',
        },
        {
          key: 'philosophy',
          title: '2. 武道哲学与五大德目',
          korean: '태권도 정신 & 5대 덕목·훈',
          subtitle: '克己与弘益、五大德目、五大训条与武道体育哲学',
        },
        {
          key: 'heritage',
          title: '3. 根基九大馆与历史大统合',
          korean: '기간 9대 관 (九大館) & 통합',
          subtitle: '九大开山道馆、一代宗师与1978年国技院统一令',
        },
        {
          key: 'organizations',
          title: '4. 全球管理机构权威对比',
          korean: '세계 주요 기구 비교 (WT • Kukkiwon • ITF • ATA)',
          subtitle: '世跆联、国技院、ITF与ATA章程、奥运地位与竞赛体系',
        },
      ]
    case 'ko':
      return [
        {
          key: 'timeline',
          title: '1. 역사 연대표 (8대 시대)',
          korean: '태권도 공인 8대 시대 구분',
          subtitle: '16대 획기적 역사적 사건과 인터랙티브 크로노미터',
        },
        {
          key: 'philosophy',
          title: '2. 철학 & 5대 덕목·훈',
          korean: '태권도 정신의 양대 이념',
          subtitle: '극기(克己)와 홍익(弘益), 5대 덕목, 태권도 5대 훈 & 무도 스포츠',
        },
        {
          key: 'heritage',
          title: '3. 기간 9대 관 & 대통합',
          korean: '기간 9대 관(九大館) 역사',
          subtitle: '창관 개산조, 원로 사범단 및 1978년 국기원 단일화 통합',
        },
        {
          key: 'organizations',
          title: '4. 세계 주요 기구 비교',
          korean: 'WT • 국기원 • ITF • ATA',
          subtitle: '올림픽 헌장, 관할 영역, 경기 규칙 및 기술 규정 총비교',
        },
      ]
    default:
      return [
        {
          key: 'timeline',
          title: '1. History & Timeline',
          korean: '역사 연대표 (8대 시대)',
          subtitle: '16 Epochal Milestones & Interactive Chronometer',
        },
        {
          key: 'philosophy',
          title: '2. Philosophy & Virtues',
          korean: '태권도 정신 & 5대 덕목·훈',
          subtitle: 'Geukgi & Hongik, 5 Virtues, 5 Tenets & Mudo Sports',
        },
        {
          key: 'heritage',
          title: '3. Heritage & 9 Kwans',
          korean: '기간 9대 관 (九大館) & 통합',
          subtitle: 'Founding Dojangs, Grandmasters & 1978 Unification',
        },
        {
          key: 'organizations',
          title: '4. Global Organizations',
          korean: '세계 주요 기구 비교 (WT • Kukkiwon • ITF • ATA)',
          subtitle: 'Governance, Olympic Charter, Rules & Systems',
        },
      ]
  }
}

// -----------------------------------------------------------------------------
// 3. TIMELINE ERAS (getLocalizedTimelineEras)
// -----------------------------------------------------------------------------
export function getLocalizedTimelineEras(lang: string): LocalizedEraFilter[] {
  switch (lang) {
    case 'km':
      return [
        { id: 'all', label: 'យុគសម័យទាំង ៨ (១៦ ព្រឹត្តិការណ៍)' },
        { id: 'Ancient (24th c. BC–10th c. AD)', label: '១. សម័យបុរាណ (ស.វ.ទី ២៤ មុន គ.ស. – ស.វ.ទី ១០ នៃ គ.ស.)' },
        { id: 'Medieval (10th–16th c.)', label: '២. សម័យកណ្តាល (ស.វ.ទី ១០ – ១៦)' },
        { id: 'Modern Pre-War (17th c.–1945)', label: '៣. សម័យទំនើបមុនសង្គ្រាម (ស.វ.ទី ១៧ – ១៩៤៥)' },
        { id: 'Early Kwans (1946–1960)', label: '៤. សម័យសាលាគុនដំបូងៗ (១៩៤៦ – ១៩៦០)' },
        { id: 'Fruit of Unity (1961–1970)', label: '៥. ផ្លែផ្កានៃការរួបរួម (១៩៦១ – ១៩៧០)' },
        { id: 'A Leap Forward (1971–1985)', label: '៦. ការបោះជំហានទៅមុខយ៉ាងលឿន (១៩៧១ – ១៩៨៥)' },
        { id: 'Olympic Entry (1986–1999)', label: '៧. ការចូលរួមក្នុងកីឡាអូឡាំពិក (១៩៨៦ – ១៩៩៩)' },
        { id: 'World Martial Sport (2000–Present)', label: '៨. កីឡាក្បាច់គុនលំដាប់ពិភពលោក (២០០០ – បច្ចុប្បន្ន)' },
      ]
    case 'zh':
      return [
        { id: 'all', label: '全部时代 (16大重大里程碑)' },
        { id: 'Ancient (24th c. BC–10th c. AD)', label: '1. 上古与三国时代 (前24世纪–10世纪)' },
        { id: 'Medieval (10th–16th c.)', label: '2. 高丽中古时代 (10–16世纪)' },
        { id: 'Modern Pre-War (17th c.–1945)', label: '3. 朝鲜近世与光复前 (17世纪–1945)' },
        { id: 'Early Kwans (1946–1960)', label: '4. 光复后开山九馆时代 (1946–1960)' },
        { id: 'Fruit of Unity (1961–1970)', label: '5. 协会统一与竞技萌芽 (1961–1970)' },
        { id: 'A Leap Forward (1971–1985)', label: '6. 国技院创立与世界飞跃 (1971–1985)' },
        { id: 'Olympic Entry (1986–1999)', label: '7. 进军奥运与全会通过 (1986–1999)' },
        { id: 'World Martial Sport (2000–Present)', label: '8. 现代全球武道体育盛世 (2000–至今)' },
      ]
    case 'ko':
      return [
        { id: 'all', label: '8대 시대 전체 (16대 획기적 사건)' },
        { id: 'Ancient (24th c. BC–10th c. AD)', label: '1. 고대 시대 (기원전 24세기–10세기)' },
        { id: 'Medieval (10th–16th c.)', label: '2. 중세 시대 (10–16세기)' },
        { id: 'Modern Pre-War (17th c.–1945)', label: '3. 근세 근대 전환기 (17세기–1945)' },
        { id: 'Early Kwans (1946–1960)', label: '4. 초기 개산관 시대 (1946–1960)' },
        { id: 'Fruit of Unity (1961–1970)', label: '5. 통합의 결실 (1961–1970)' },
        { id: 'A Leap Forward (1971–1985)', label: '6. 비약적 발전 (1971–1985)' },
        { id: 'Olympic Entry (1986–1999)', label: '7. 올림픽 입성 (1986–1999)' },
        { id: 'World Martial Sport (2000–Present)', label: '8. 세계적 무도 스포츠 (2000–현재)' },
      ]
    default:
      return [
        { id: 'all', label: 'All Eras (16 Milestones)' },
        { id: 'Ancient (24th c. BC–10th c. AD)', label: '1. Ancient (24th c. BC–10th c. AD)' },
        { id: 'Medieval (10th–16th c.)', label: '2. Medieval (10th–16th c.)' },
        { id: 'Modern Pre-War (17th c.–1945)', label: '3. Modern Pre-War (17th c.–1945)' },
        { id: 'Early Kwans (1946–1960)', label: '4. Early Kwans (1946–1960)' },
        { id: 'Fruit of Unity (1961–1970)', label: '5. Fruit of Unity (1961–1970)' },
        { id: 'A Leap Forward (1971–1985)', label: '6. A Leap Forward (1971–1985)' },
        { id: 'Olympic Entry (1986–1999)', label: '7. Olympic Entry (1986–1999)' },
        { id: 'World Martial Sport (2000–Present)', label: '8. World Martial Sport (2000–Present)' },
      ]
  }
}
