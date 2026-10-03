// =============================================================================
// INFINITY TAEKWONDO — POOMSAE MASTER TRANSLATIONS & PHILOSOPHY MODULE
// Languages: English (en), Khmer (km), Chinese (zh), Korean (ko)
// =============================================================================

import type { LibraryItem } from './types'

export interface PoomsaeI18nDictionary {
  catalogTab: string
  foundationsTab: string
  taegeukTab: string
  yudanjaTab: string
  freestyleTab: string
  searchPlaceholder: string
  filterLabel: string
  viewCards: string
  viewMatrix: string
  viewLines: string
  movesLabel: string
  tempoLabel: string
  inspectBtn: string
  closeBtn: string
  fullPageBtn: string
  stepperListMode: string
  stepperInteractiveMode: string
  stepperMove: string
  stepperOf: string
  prevMoveBtn: string
  nextMoveBtn: string
  restartMoveBtn: string
  deductionsTitle: string
  biomechanicalCuesTitle: string
  terminologyTitle: string
  coachingTipsTitle: string
  spatialGeometryTitle: string
  noPoomsaeFoundTitle: string
  noPoomsaeFoundDesc: string
  resetFiltersBtn: string
  trigramLabel: string
  hanjaElementLabel: string
  movementCountLabel: string
  targetDivisionLabel: string
  governingStandardLabel: string
  scoringMetricLabel: string
  allSeriesCount: string
}

export const poomsaeI18n: Record<string, PoomsaeI18nDictionary> = {
  en: {
    catalogTab: '1. Poomsae Catalog',
    foundationsTab: '2. Foundations & Master Guide',
    taegeukTab: '3. Taegeuk Series & 1971 Evolution',
    yudanjaTab: '4. Yudanja Poomsae (1st–9th Dan)',
    freestyleTab: '5. Freestyle Poomsae & Score Simulator (WT V4)',
    searchPlaceholder: 'Search Poomsae (e.g. Heaven, Lake, Koryo, Side kick)...',
    filterLabel: 'Filter Division:',
    viewCards: 'Visual Cards',
    viewMatrix: 'Syllabus Matrix',
    viewLines: 'Line Geometry',
    movesLabel: 'Movements',
    tempoLabel: 'Duration',
    inspectBtn: 'Inspect Form',
    closeBtn: 'Close Dossier',
    fullPageBtn: 'Full Technique Page',
    stepperListMode: 'Full List View',
    stepperInteractiveMode: 'Interactive Stepper',
    stepperMove: 'Movement',
    stepperOf: 'of',
    prevMoveBtn: 'Previous Step',
    nextMoveBtn: 'Next Step',
    restartMoveBtn: 'Restart Pattern',
    deductionsTitle: 'Referee Deductions (-0.1 / -0.3 Points)',
    biomechanicalCuesTitle: 'Kukkiwon Biomechanical Geometry & Alignment',
    terminologyTitle: 'Official Korean Martial Terminology',
    coachingTipsTitle: 'Grandmaster Coaching Tips & Transitions',
    spatialGeometryTitle: 'Spatial Line Geometry & Floor Navigation',
    noPoomsaeFoundTitle: 'No Poomsae Found',
    noPoomsaeFoundDesc: 'No patterns match your search query. Try clearing your search.',
    resetFiltersBtn: 'Reset All Filters',
    trigramLabel: 'Trigram / Symbol',
    hanjaElementLabel: 'Hanja & Element',
    movementCountLabel: 'Total Movements',
    targetDivisionLabel: 'Target Rank / Division',
    governingStandardLabel: 'Governing Standard',
    scoringMetricLabel: 'Scoring Metric',
    allSeriesCount: '27 Official Patterns Across 3 Suites',
  },
  km: {
    catalogTab: '១. បញ្ជីមេគុន (Catalog)',
    foundationsTab: '២. មូលដ្ឋានគ្រឹះ & ការណែនាំមេគុន',
    taegeukTab: '៣. មេគុន Taegeuk & ការវិវត្ត ១៩៧១',
    yudanjaTab: '៤. មេគុន Yudanja (1st–9th Dan)',
    freestyleTab: '៥. ក្បាច់សេរី Freestyle & ម៉ាស៊ីនគិតពិន្ទុ (WT V4)',
    searchPlaceholder: 'ស្វែងរកមេគុន (ឧទាហរណ៍៖ មេឃ, ទឹក, Koryo, ទាត់ផ្អៀង)...',
    filterLabel: 'ចម្រោះកម្រិត៖',
    viewCards: 'កាតរូបភាព',
    viewMatrix: 'តារាងប្រៀបធៀប',
    viewLines: 'ទម្រង់គន្លងផ្លូវ',
    movesLabel: 'ក្បាច់ចលនា',
    tempoLabel: 'រយៈពេល',
    inspectBtn: 'ពិនិត្យមេគុន',
    closeBtn: 'បិទផ្ទាំង',
    fullPageBtn: 'ទំព័រលម្អិតពេញលេញ',
    stepperListMode: 'បញ្ជីពេញលេញ',
    stepperInteractiveMode: 'ជំហានអន្តរកម្ម',
    stepperMove: 'ចលនាទី',
    stepperOf: 'នៃ',
    prevMoveBtn: 'ជំហានមុន',
    nextMoveBtn: 'ជំហានបន្ទាប់',
    restartMoveBtn: 'ចាប់ផ្តើមឡើងវិញ',
    deductionsTitle: 'ពិន្ទុកាត់របស់អាជ្ញាកណ្តាល (-0.1 / -0.3 ពិន្ទុ)',
    biomechanicalCuesTitle: 'ធរណីមាត្រជីវមេកានិចស្តង់ដារ Kukkiwon',
    terminologyTitle: 'សទ្ទានុក្រមបច្ចេកទេសភាសាកូរ៉េផ្លូវការ',
    coachingTipsTitle: 'គន្លឹះគ្រូបង្វឹក & ការផ្លាស់ប្តូរជំហរ',
    spatialGeometryTitle: 'គន្លងបន្ទាត់ និងការដើរលើទីលាន',
    noPoomsaeFoundTitle: 'រកមិនឃើញមេគុនឡើយ',
    noPoomsaeFoundDesc: 'មិនមានមេគុនណាត្រូវនឹងពាក្យស្វែងរករបស់អ្នកទេ។ សូមព្យាយាមសម្អាតការស្វែងរក។',
    resetFiltersBtn: 'កំណត់ចម្រោះឡើងវិញ',
    trigramLabel: 'សញ្ញាសម្គាល់ / ត្រីក្រាម',
    hanjaElementLabel: 'អក្សរចិន & ធាតុធម្មជាតិ',
    movementCountLabel: 'ចំនួនចលនាសរុប',
    targetDivisionLabel: 'កម្រិតខ្សែក្រវាត់ / អាយុ',
    governingStandardLabel: 'ស្តង់ដារគ្រប់គ្រង',
    scoringMetricLabel: 'ប្រព័ន្ធកំណត់ពិន្ទុ',
    allSeriesCount: '២៧ មេគុនផ្លូវការ ក្នុង ៣ កម្រិត',
  },
  zh: {
    catalogTab: '1. 品势目录全集',
    foundationsTab: '2. 品势本质与执教法则',
    taegeukTab: '3. 太极哲学与1971年革新',
    yudanjaTab: '4. 有段者品势 (Yudanja 1st–9th Dan)',
    freestyleTab: '5. 自由自选品势与打分模拟器 (WT V4)',
    searchPlaceholder: '搜索品势 (例如：乾天、兑泽、高丽、侧踢)...',
    filterLabel: '段组筛选：',
    viewCards: '图文卡片',
    viewMatrix: '大纲矩阵表',
    viewLines: '演武路线图',
    movesLabel: '动作总数',
    tempoLabel: '演练时长',
    inspectBtn: '检视品势',
    closeBtn: '关闭档案',
    fullPageBtn: '完整详尽页面',
    stepperListMode: '完整列表视图',
    stepperInteractiveMode: '交互式步进分解',
    stepperMove: '动作序号',
    stepperOf: '/',
    prevMoveBtn: '上一步骤',
    nextMoveBtn: '下一步骤',
    restartMoveBtn: '重头演练',
    deductionsTitle: '裁判公认扣分准则 (-0.1 / -0.3 扣分)',
    biomechanicalCuesTitle: '国技院生物力学空间几何对齐规范',
    terminologyTitle: '正统韩语武道专业术语对照',
    coachingTipsTitle: '大师级执教要诀与重心中轴转换',
    spatialGeometryTitle: '演武路线几何轨迹与场地坐标',
    noPoomsaeFoundTitle: '未找到匹配品势',
    noPoomsaeFoundDesc: '在当前类别中无匹配结果，请尝试清除搜索关键词。',
    resetFiltersBtn: '重置所有筛选',
    trigramLabel: '八卦卦象 / 图腾',
    hanjaElementLabel: '汉字溯源与天地行运',
    movementCountLabel: '规定动作总数',
    targetDivisionLabel: '适用段级位与组别',
    governingStandardLabel: '官方权威审定规范',
    scoringMetricLabel: '世跆联竞技打分模型',
    allSeriesCount: '全套三大系列共27套公认品势',
  },
  ko: {
    catalogTab: '1. 공인 품새 카탈로그',
    foundationsTab: '2. 품새의 본질과 수련 요결',
    taegeukTab: '3. 태극 철학과 1971년 전환',
    yudanjaTab: '4. 유단자 품새 (Yudanja 1단~9단)',
    freestyleTab: '5. 자유 품새 & 공식 심사표 시뮬레이터 (WT V4)',
    searchPlaceholder: '품새 검색 (예: 건천, 감수, 고려, 옆차기)...',
    filterLabel: '급·단 필터:',
    viewCards: '비주얼 카드',
    viewMatrix: '시퀀스 매트릭스',
    viewLines: '품새선 기하학',
    movesLabel: '동작 수',
    tempoLabel: '소요 시간',
    inspectBtn: '상세 검토',
    closeBtn: '창 닫기',
    fullPageBtn: '품새 전용 페이지',
    stepperListMode: '전체 목록 보기',
    stepperInteractiveMode: '인터랙티브 스텝퍼',
    stepperMove: '동작 번호',
    stepperOf: '/',
    prevMoveBtn: '이전 동작',
    nextMoveBtn: '다음 동작',
    restartMoveBtn: '처음부터 다시하기',
    deductionsTitle: '공인 심판 감점 기준 (-0.1 / -0.3 감점)',
    biomechanicalCuesTitle: '국기원 표준 인체 운동역학 및 각도 정렬',
    terminologyTitle: '공인 국문 무도 전문 용어',
    coachingTipsTitle: '사범 지도 팁 및 중심 이동 요결',
    spatialGeometryTitle: '품새선(品勢線) 궤적과 바닥 공간 이동',
    noPoomsaeFoundTitle: '일치하는 품새가 없습니다',
    noPoomsaeFoundDesc: '입력하신 검색어와 일치하는 품새가 없습니다. 검색어를 초기화해 보세요.',
    resetFiltersBtn: '필터 초기화',
    trigramLabel: '팔괘(八卦) 괘상 / 기호',
    hanjaElementLabel: '한자 및 음양오행 요소',
    movementCountLabel: '공인 동작 수',
    targetDivisionLabel: '수련 급·단수 및 출전부',
    governingStandardLabel: '공인 총괄 표준',
    scoringMetricLabel: 'WT 경기 채점 방식',
    allSeriesCount: '3대 시리즈 총 27개 공인 품새 완비',
  },
}

// -----------------------------------------------------------------------------
// 1. POOMSAE FOUNDATIONS & MASTER GUIDE DATASET
// -----------------------------------------------------------------------------
export interface PoomsaeMistake {
  title: string
  koreanTitle: string
  problem: string
  correction: string
}

export interface PoomsaeFoundationsData {
  title: string
  koreanTitle: string
  whatIsPoomsae: {
    title: string
    definition: string
    origins: string
    combatSimulation: string
    mindBodyIntegration: string
  }
  whyImportant: {
    title: string
    summary: string
    pillars: Array<{
      title: string
      desc: string
    }>
  }
  commonMistakes: {
    title: string
    summary: string
    list: PoomsaeMistake[]
  }
  beginnerBridge: {
    title: string
    targetRank: string
    summary: string
    components: Array<{
      name: string
      koreanName: string
      focus: string
      description: string
    }>
  }
}

export function getPoomsaeFoundations(lang: string): PoomsaeFoundationsData {
  switch (lang) {
    case 'km':
      return {
        title: 'មូលដ្ឋានគ្រឹះមេគុន៖ ខ្លឹមសារ ប្រភពដើម និងគោលការណ៍មេគុន',
        koreanTitle: '품새의 본질과 수련 요결 (Poomsae Principles)',
        whatIsPoomsae: {
          title: 'តើអ្វីទៅជា Poomsae (មេគុន)?',
          definition:
            'មេគុន (Poomsae) គឺជាលំដាប់នៃចលនាដែលត្រូវបានរៀបចំទុកជាមុន ដោយរួមបញ្ចូលគ្នានូវបច្ចេកទេសតេក្វាន់ដូជាច្រើន ដើម្បីបង្កើតជាទម្រង់គុនដ៏ពេញលេញមួយ។',
          origins:
            'មេគុនត្រូវបានបង្កើតឡើងដំបូងជាវិធីសាស្ត្រក្នុងការហ្វឹកហាត់បច្ចេកទេសវាយលុក និងការពារដោយមិនចាំបាច់មានដៃគូរួម។ ដោយដកស្រង់ចេញពីក្បាច់គុនបុរាណកូរ៉េ (Taekkyeon, Subak) និងក្បាច់ Kata របស់ជប៉ុន មេគុនគឺជាផ្នែកដ៏សំខាន់បំផុតនៃការហ្វឹកហាត់តេក្វាន់ដូសម័យទំនើប និងជាលក្ខខណ្ឌចាំបាច់សម្រាប់ការប្រឡងឡើងកម្រិតខ្សែក្រវាត់។',
          combatSimulation:
            'គំរូក្បាច់ដែលបានរៀបចំទុកជាមុន ផ្តល់នូវឱកាសក្នុងការស្វែងយល់ពីបច្ចេកទេសដោយការក្លែងធ្វើការការពារ និងការវាយប្រហារប្រឆាំងនឹងគូប្រកួតក្នុងចិត្ត (Imaginary Opponents) មកពីគ្រប់ទិសទី។',
          mindBodyIntegration:
            'ដោយគ្មានសម្ពាធនៃការប្រយុទ្ធជាក់ស្តែង (Sparring) មេគុនអនុញ្ញាតឱ្យអ្នកស្វែងយល់ពីបច្ចេកទេសយ៉ាងស៊ីជម្រៅ ដោយផ្តោតលើភាពជាក់លាក់ ការគ្រប់គ្រង និងការអនុវត្តចលនាទាំងមូល។ ដើម្បីសម្តែងមេគុនបានល្អ ទាមទារឱ្យចិត្ត និងកាយធ្វើការរួមគ្នាជាធ្លុងមួយ។ ការប្រកួតមេគុនគឺជាការបង្ហាញយ៉ាងល្អឥតខ្ចោះអំពីរបៀបដែលការផ្តោតអារម្មណ៍ និងបច្ចេកទេសរួមបញ្ចូលគ្នាដើម្បីបង្កើតការបង្ហាញដ៏មានថាមពល។',
        },
        whyImportant: {
          title: 'ហេតុអ្វីបានជាមេគុនមានសារៈសំខាន់?',
          summary:
            'ខណៈពេលដែលតេក្វាន់ដូល្បីល្បាញដោយសារការទាត់ដ៏រហ័សរហួន និងមានតួនាទីជាកីឡាអូឡាំពិក មេគុនផ្តោតសំខាន់លើផ្នែកក្បាច់គុនបុរាណច្រើនជាងផ្នែកកីឡាប្រកួតប្រជែង។',
          pillars: [
            {
              title: 'ការរក្សាក្បាច់រារាំង និងវាយដោយដៃ',
              desc: 'ការប្រកួតប្រយុទ្ធអូឡាំពិក (Kyorugi) ផ្តោតស្ទើរតែទាំងស្រុងលើការទាត់។ មេគុនជួយថែរក្សាក្បាច់កាប់ដៃកាំបិត ការវាយកែង ការចាក់ម្រាមដៃ និងការរារាំងច្រើនកម្រិត ដែលជាក្បាច់ការពារខ្លួនពិតប្រាកដ។',
            },
            {
              title: 'លំនឹងជីវមេកានិច & ជំហររឹងមាំ',
              desc: 'មិនដូចការប្រយុទ្ធដែលសិស្សឈរជើងស្រាលដើម្បីល្បឿនឡើយ ជំហរក្នុងមេគុនត្រូវតែរឹងមាំ មានលំនឹង និងត្រឹមត្រូវតាមបច្ចេកទេស (Ap-kubi, Dwi-kubi, Beom-seogi)។',
            },
            {
              title: 'ការអនុវត្តការពារខ្លួនជាក់ស្តែង (Hosinsul Bunkai)',
              desc: 'តាមរយៈការហ្វឹកហាត់មេគុន សិស្សអភិវឌ្ឍភាពជាក់លាក់ ការសម្របសម្រួល វិន័យ និងការយល់ដឹងកាន់តែស៊ីជម្រៅអំពីបច្ចេកទេសតេក្វាន់ដូ និងការអនុវត្តការពារខ្លួនជាក់ស្តែង។',
            },
          ],
        },
        commonMistakes: {
          title: 'កំហុសទូទៅក្នុងការហ្វឹកហាត់មេគុន & វិធីកែតម្រូវ',
          summary: 'មេគុនអាចមើលទៅពិបាកនៅពេលដំបូង។ ខាងក្រោមនេះជាកំហុសទូទៅ និងវិធីជៀសវាង៖',
          list: [
            {
              title: '១. ការធ្វើចលនាប្រញាប់ប្រញាល់ (Rushing Movements)',
              koreanTitle: '동작 서두름 (Tempo Flaws)',
              problem: 'ការប្រញាប់ប្រញាល់ធ្វើក្បាច់បន្ទាប់ដោយមិនទាន់បញ្ចប់កម្លាំងខ្ទាតនៃក្បាច់មុន។',
              correction:
                'មេគុននីមួយៗមានចង្វាក់ (Rhythm) របស់វា ហើយការប្រញាប់ប្រញាល់អាចប៉ះពាល់ដល់បច្ចេកទេស។ ចាប់ផ្តើមយឺតៗ និងអនុវត្តចលនានីមួយៗឱ្យបានពេញលេញ។',
            },
            {
              title: '២. ជំហរខ្សោយ ឬអណ្តែត (Weak Stances)',
              koreanTitle: '불안정한 보법 (Weak Base)',
              problem: 'ការប្រើជំហរស្រាលដូចពេលប្រយុទ្ធ ធ្វើឱ្យបាត់បង់លំនឹង និងឫសគល់លើកម្រាល។',
              correction:
                'មិនដូចការប្រយុទ្ធដែលជំហរត្រូវបានប្រើសម្រាប់ល្បឿន និងភាពងាយស្រួលនៃចលនាទេ ជំហរក្នុងមេគុនគួរតែរឹងមាំ មានស្ថេរភាព និងត្រឹមត្រូវតាមបច្ចេកទេស។',
            },
            {
              title: '៣. ការភ្លេចស្រែកគីហាប់ (Forgetting to Kiyap)',
              koreanTitle: '기합 누락 (Missed Kiyap)',
              problem: 'ការភ្លេចស្រែកបញ្ចេញកម្លាំងនៅជំហានដែលបានកំណត់ ឬស្រែកខ្សោយ។',
              correction:
                'Kiyap (កីយ៉ាប់) គឺជាការស្រែកដែលត្រូវបានគ្រប់គ្រង ដើម្បីបញ្ជាក់ពីថាមពល ការផ្តោតអារម្មណ៍ និងការដកដង្ហើម។ ក្នុងការប្រកួតមេគុន Kiyap ជាផ្នែកនៃការសម្តែង ហើយការភ្លេចវាអាចនាំឱ្យមានការកាត់ពិន្ទុ (-0.1)។',
            },
          ],
        },
        beginnerBridge: {
          title: 'ស្ពានចម្លងសិស្សថ្មី៖ កម្រិត 10th Kup ទៅកាន់ 8th Kup',
          targetRank: 'ខ្សែក្រវាត់ស (White Belt 10th Kup) ទៅកាន់ខ្សែក្រវាត់លឿង (8th Kup)',
          summary:
            'មុនពេលចាប់ផ្តើមរៀន Taegeuk 1 (Il-Jang) សិស្សខ្សែក្រវាត់សត្រូវឆ្លងកាត់ការហ្វឹកហាត់ចលនាមូលដ្ឋាន "Kibon" ដើម្បីពង្រឹងសាច់ដុំ ជំហរ និងតុល្យភាពដំបូង។',
          components: [
            {
              name: 'Kibon Dongjak (ចលនាមូលដ្ឋាន)',
              koreanName: '기본 동작',
              focus: 'ជំហរជិះសេះ (Juchum-seogi) & ការដាល់ត្រង់',
              description: 'ហ្វឹកហាត់ការដកដង្ហើម ដាល់ចំកណ្តាលដើមទ្រូង និងទប់លំនឹងជង្គង់ក្នុងជំហរជិះសេះ។',
            },
            {
              name: 'Saju-Jireugi (ការដាល់ ៤ ទិស)',
              koreanName: '사주 지르기',
              focus: 'ការបង្វិលខ្លួន ៩០ ដឺក្រេ និងការបោះជំហានមុខ-ក្រោយ',
              description: 'បង្រៀនសិស្សអំពីទិសដៅទាំង ៤ ការគ្រប់គ្រងជំហរ Ap-kubi និងការដាល់ Middle Punch ត្រឹមត្រូវ។',
            },
            {
              name: 'Saju-Makki (ការរារាំង ៤ ទិស)',
              koreanName: '사주 막기',
              focus: 'ការរារាំងក្រោម (Arae-makki) & រារាំងកណ្តាល (Momtong An-makki)',
              description: 'បង្រៀនសិស្សអំពីការរារាំង និងការត្រៀមដៃ (Chambering) មុនពេលឈានចូលទៅកាន់មេគុនផ្លូវការ Taegeuk 1។',
            },
          ],
        },
      }
    case 'zh':
      return {
        title: '品势筑基：本质内涵、源流考据与执教心法',
        koreanTitle: '품새의 본질과 수련 요결 (Poomsae Principles)',
        whatIsPoomsae: {
          title: '什么是品势 (Poomsae / Patterns)？',
          definition:
            '品势（Poomsae）是按照特定技术逻辑预先编排的一整套攻防动作体系，综合体现了跆拳道手脚攻防技术的精髓。',
          origins:
            '品势最初作为一种无需对手即可单独精进技术的训练方式而诞生。它深深植根于传统朝鲜半岛本土武艺（如跆跟、手搏）并融汇了传统日本空手道型（Kata）的技术结构，成为现代正统跆拳道考级晋段与武道修持的核心根基。',
          combatSimulation:
            '预先编排的套路为习练者提供了不可或缺的空间模拟实战场景，在没有真实对手对抗的情况下，假想四面八方强敌来袭，通过精准动作实施防御与毁灭性反击。',
          mindBodyIntegration:
            '摆脱了实战对抗（Sparring）的即时压力，品势使武者能够心无旁骛地深入探索每一个动作的完整发力曲线、身体空间对齐与丹田呼吸。演练出卓越的品势要求身心合一。在国际公认品势大赛中，沉稳的凝神聚气与爆发性动作的完美交融，构成了震撼人心的武道展示。',
        },
        whyImportant: {
          title: '为什么品势在现代跆拳道中至关重要？',
          summary:
            '虽然现代跆拳道以迅猛灵动的实战腿法和奥运会竞技对抗而闻名世界，但品势承载的更多是传统正统武道的本质，而非单纯的体育竞逐。',
          pillars: [
            {
              title: '完整传承手部防守与攻击技击',
              desc: '奥运实战竞技（Kyorugi）高度专业化，几乎被腿法垄断。品势完整传承了手刀击打、肘击、贯手穿刺以及各高度阻截防守，构成了真正防身自卫的核心武库。',
            },
            {
              title: '生物力学中轴平衡与沉稳步法',
              desc: '不同于实战跳跃虚晃的轻步，品势要求步法必须扎实、沉重且严谨合度（如前弓步、后弓步、虎步、鹤腿步），全面锻造下肢骨骼支撑与核心力量。',
            },
            {
              title: '实战防身自卫应用解析 (Hosinsul Bunkai)',
              desc: '通过严谨研习品势，学员不仅能够精进空间感、肌肉协调性与武道纪律，更能深入理解每一个格挡和反击动作在街头真实遇险时的防身应用。',
            },
          ],
        },
        commonMistakes: {
          title: '初学者演练品势三大常见误区与名师矫正',
          summary: '对于初学者而言，品势演练常有困惑。以下三大误区尤为普遍，需格外警惕：',
          list: [
            {
              title: '1. 动作仓促抢拍 (Rushing Movements)',
              koreanTitle: '동작 서두름 (Tempo Flaws)',
              problem: '未能完成前一个动作的发力制动与停顿，便急促抢做下一个动作，导致力量涣散。',
              correction:
                '每一套品势都有其内在的节奏韵律。必须由慢渐快、先松后紧，确保每一个动作预备、发力至末端制动（Snap）清晰完整，方显刚柔相济。',
            },
            {
              title: '2. 步法漂浮松软 (Weak Stances)',
              koreanTitle: '불안정한 보법 (Weak Base)',
              problem: '把实战竞技中弹跳轻浮的步法带入品势，重心上浮，后脚跟离地，骨盆松垮。',
              correction:
                '实战步法追求灵敏转位，而品势步法则追求重如泰山、根深蒂固。必须严格锁死后脚内扣角度（如前弓步30度），下沉重心，双足扎根于地板。',
            },
            {
              title: '3. 遗漏气合发声 (Forgetting to Kiyap)',
              koreanTitle: '기합 누락 (Missed Kiyap)',
              problem: '在规定必发气合的关键动作处遗漏喊叫，或仅由喉咙发出虚弱声响。',
              correction:
                '气合（Kiyap）并非单纯的大喊，而是源于下丹田的爆发性吐气发劲，用于凝聚全身力量、提振神魄。在世跆联WT大赛中，遗漏气合直接扣除0.1分。',
            },
          ],
        },
        beginnerBridge: {
          title: '初学者启蒙之桥：十级白带到八级黄带进阶路径',
          targetRank: '十级纯白带 (10th Kup) 至 八级黄带 (8th Kup)',
          summary:
            '在正式修习太极一章之前，白带新人必须经历系统性的“基本动作（Kibon Dongjak）”锻造，以夯实腿部骨骼支撑、纠正骨盆中轴并建立空间方位感。',
          components: [
            {
              name: '基本动作 (Kibon Dongjak)',
              koreanName: '기본 동작',
              focus: '骑马步 (Juchum-seogi) 与丹田发力中段直拳',
              description: '建立膝盖微屈、挺胸立腰、丹田吐纳以及左右手反作用力互拉（拉手）的核心动力链。',
            },
            {
              name: '四方冲拳 (Saju-Jireugi)',
              koreanName: '사주 지르기',
              focus: '九十度转体、前弓步（Ap-kubi）进退与直线正拳',
              description: '通过十字型四方演练，使学员初次领悟重心平移、步幅控制与四向防御方位感。',
            },
            {
              name: '四方格挡 (Saju-Makki)',
              koreanName: '사주 막기',
              focus: '下截防守 (Arae-makki) 与中截内防守 (Momtong An-makki)',
              description: '规范双臂在身体前方交叉预备（Chambering）的几何轨迹与发力瞬间的发劲旋转。',
            },
          ],
        },
      }
    case 'ko':
      return {
        title: '품새의 본질과 수련 요결: 기원과 무도적 핵심 가치',
        koreanTitle: '품새의 본질과 수련 요결 (Poomsae Principles)',
        whatIsPoomsae: {
          title: '품새(Poomsae)란 무엇인가?',
          definition:
            '품새(Poomsae)란 태권도의 다양한 공격과 방어 기술을 일정한 기술 체계에 맞추어 혼자서 수련할 수 있도록 짜여진 가상의 실전 연습 체계입니다.',
          origins:
            '품새는 상대가 없이도 공방의 이치를 터득하고 수련하기 위해 탄생하였습니다. 한민족 고유 무예인 택견과 수박의 몸짓, 그리고 동양 무도의 형(Kata) 체계가 집대성되어 현대 태권도의 필수 수련이자 승급·승단 심사의 근간을 이룹니다.',
          combatSimulation:
            '품새는 사방에서 가상의 적이 공격해 오는 위기 상황을 상정하여, 정확한 방어와 결정적인 공격을 수행하는 가상 실전 공방(Imaginary Opponents)입니다.',
          mindBodyIntegration:
            '겨루기의 난타전 압박에서 벗어나, 품새는 기술의 정확도, 무게중심의 통제, 온몸의 운동역학을 깊이 있게 연마하게 합니다. 뛰어난 품새 시연은 신체와 정신이 온전히 하나로 통합되어야 하며, WT 공인 품새 경기는 강인한 집중력과 절제된 파워의 극치를 보여줍니다.',
        },
        whyImportant: {
          title: '현대 태권도에서 품새는 왜 중요한가?',
          summary:
            '현대 태권도가 올림픽 정식 종목으로서 화려하고 빠른 발차기로 각광받고 있지만, 품새는 스포츠를 넘어선 전통 무도(武道)의 진정한 정수를 고스란히 담고 있습니다.',
          pillars: [
            {
              title: '손기술과 공방 기술의 총체적 보존',
              desc: '올림픽 겨루기는 발차기 위주로 편중되어 있습니다. 품새는 손날치기, 팔굽치기, 편손끝 찌르기, 다채로운 막기 등 실전 호신술에 필수적인 손기술을 완전하게 보존합니다.',
            },
            {
              title: '안정된 중심 이동과 견고한 보법',
              desc: '빠른 반응을 위해 가볍게 뛰는 겨루기 스텝과 달리, 품새는 앞굽이, 뒷굽이, 범서기, 학다리서기 등 깊고 단단한 보법을 통해 하체 근력과 중심 안정성을 확립합니다.',
            },
            {
              title: '실전 호신술(Hosinsul) 응용 원리 터득',
              desc: '품새 수련을 통해 수련자는 신체 균형, 협응력, 자기 통제력을 기를 뿐 아니라 각 동작의 실전 호신술적 꺾기, 치기, 막기의 응용 원리를 체득합니다.',
            },
          ],
        },
        commonMistakes: {
          title: '품새 수련 시 3대 빈출 실수와 사범 교정법',
          summary: '초심자가 품새를 수련할 때 가장 자주 범하는 기술적 오류와 올바른 교정 요결입니다.',
          list: [
            {
              title: '1. 동작의 급격한 서두름 (Rushing Movements)',
              koreanTitle: '동작 서두름 (Tempo Flaws)',
              problem: '한 동작의 종말 충격과 매듭을 짓지 않고 다음 동작으로 성급하게 넘어가는 현상.',
              correction:
                '품새에는 고유의 리듬과 호흡이 있습니다. 서두르지 말고 천천히 시작하여 각 기술을 온전히 완결하고, 완급(緩急)의 조화를 체득해야 합니다.',
            },
            {
              title: '2. 불안정하고 뜬 보법 (Weak Stances)',
              koreanTitle: '불안정한 보법 (Weak Base)',
              problem: '겨루기 식의 가벼운 발 디딤으로 인해 뒤꿈치가 들리거나 골반 중심이 흔들리는 현상.',
              correction:
                '품새의 서기는 대지에 뿌리를 내리듯 견고해야 합니다. 앞굽이 뒷발 30도 각도와 양발 너비를 정확히 지키고重心을 지면에 안정되게 안착시키십시오.',
            },
            {
              title: '3. 지정 위치 기합 누락 (Forgetting to Kiyap)',
              koreanTitle: '기합 누락 (Missed Kiyap)',
              problem: '공식 지정된 폭발적 기합 위치에서 소리를 내지 않거나 목소리로만 작게 내는 현상.',
              correction:
                '기합은 단전(丹田)에서 터져 나오는 폭발적 호흡으로, 정신을 집중시키고 힘을 집중시킵니다. WT 공인 경기에서 지정된 기합을 누락할 경우 0.1점의 자동 감점이 적용됩니다.',
            },
          ],
        },
        beginnerBridge: {
          title: '초심자 입문 브릿지: 10급 흰 띠에서 8급 노란 띠로의 기초 확립',
          targetRank: '10급 흰 띠(White Belt) ~ 8급 노란 띠(Yellow Belt)',
          summary:
            '태극 1장을 배우기 전 초심자는 신체 균형과 올바른 호흡, 중심 이동을 체득하기 위해 기본동작과 사방 지르기·막기를 필수로 수련합니다.',
          components: [
            {
              name: '기본동작 (Kibon Dongjak)',
              koreanName: '기본 동작',
              focus: '주춤서기 및 단전 몸통 지르기',
              description: '무릎의 탄력과 척추의 곧은 정렬, 지르는 손과 당기는 손의 반동력을 단련합니다.',
            },
            {
              name: '사주 지르기 (Four-Directional Punching)',
              koreanName: '사주 지르기',
              focus: '앞굽이 보법 및 90도 회전 방향 전환',
              description: '동서남북 4방향으로 전진하며 정확한 앞굽이 보폭과 명치 지르기를 연습합니다.',
            },
            {
              name: '사주 막기 (Four-Directional Blocking)',
              koreanName: '사주 막기',
              focus: '아래막기 및 몸통안막기 예비동작(Chambering)',
              description: '방어 기술의 어깨 교차 궤적과 타격 순간의 손목 회전을 익힙니다.',
            },
          ],
        },
      }
    default:
      return {
        title: 'Poomsae Foundations: Essence, Origins & Master Principles',
        koreanTitle: '품새의 본질과 수련 요결 (Poomsae Principles)',
        whatIsPoomsae: {
          title: 'What is Poomsae? (Patterns)',
          definition:
            'Patterns, or Poomsae, are pre-arranged sequences of movements that create a unified martial form featuring a comprehensive range of Taekwondo techniques.',
          origins:
            'Poomsae initially developed as a method to practice offensive and defensive techniques without requiring a training partner. Drawing from traditional Korean martial arts (Taekkyeon, Subak) and Japanese Kata, Poomsae forms the indispensable bedrock of modern Taekwondo curriculum and belt promotion grading.',
          combatSimulation:
            'Pre-arranged patterns offer practitioners the vital opportunity to master techniques by simulating real-time defense and attack against imaginary opponents from all directions.',
          mindBodyIntegration:
            'Without the chaotic pressure of free sparring, Poomsae allows you to explore techniques fully and focus on absolute precision, balance, and complete biomechanical extension. To execute Poomsae at an elite level requires the mind and body to move as one unified instrument. Competition Poomsae is an excellent demonstration of how mental focus and physical mastery come together.',
        },
        whyImportant: {
          title: 'Why is Poomsae Important in Modern Taekwondo?',
          summary:
            'While modern Taekwondo is internationally celebrated for fast, dynamic kicking and its prestigious place as an Olympic sport, Poomsae preserves the authentic martial foundation that competitive sport sparring often minimizes.',
          pillars: [
            {
              title: 'Preserving Core Striking & Blocking',
              desc: 'Olympic-style sparring (Kyorugi) is almost exclusively kick-oriented. Poomsae actively preserves knife-hand strikes, elbow strikes, spear-hand thrusts, and multi-level blocks that form the real self-defense arsenal.',
            },
            {
              title: 'Biomechanical Balance & Grounded Posture',
              desc: 'Unlike sparring where competitors bounce lightly on their toes for speed, Poomsae instills deep rooted stances (Ap-kubi, Dwi-kubi, Beom-seogi, Hakdari-seogi) that develop profound muscular balance and core power.',
            },
            {
              title: 'Self-Defense (Hosinsul) Bunkai Applications',
              desc: 'Every block, grab, and strike in a pattern carries practical combat applications for close-quarter street defense, joint manipulation, and vital-point neutralization.',
            },
          ],
        },
        commonMistakes: {
          title: 'Common Mistakes in Poomsae & How to Avoid Them',
          summary: 'Poomsae can seem daunting at first, particularly for beginners. Below are the three most common mistakes and how to correct them:',
          list: [
            {
              title: '1. Rushing Movements (Tempo & Rhythm)',
              koreanTitle: '동작 서두름 (Tempo Flaws)',
              problem: 'Rushing through combinations without completing the full deceleration and terminal snap of each technique.',
              correction:
                'Each Poomsae has its own intrinsic rhythm. Start slow, ensure complete chambering and execution of each movement, and distinguish between explosive strikes and slow 5-to-8-second diaphragmatic breathing sequences.',
            },
            {
              title: '2. Weak or Floating Stances (Footwork Stability)',
              koreanTitle: '불안정한 보법 (Weak Base)',
              problem: 'Adopting high, loose sparring-style stances where the center of gravity floats and heels lift off the mat.',
              correction:
                'Unlike sparring where stances are used for speed and mobility, stances in Poomsae must be strong, grounded, stable, and geometrically correct. Lock the rear foot at the exact required angle (e.g. 30° in Ap-kubi) and maintain solid floor connection.',
            },
            {
              title: '3. Forgetting to Kiyap / Kihap (Breath & Focus)',
              koreanTitle: '기합 누락 (Missed Kiyap)',
              problem: 'Omitting the vocal shout at designated explosive climax points or shouting weakly from the throat.',
              correction:
                'A Kiyap is a controlled, explosive shout originating from the Danjeon (lower abdomen). It emphasizes power, mental focus, and diaphragmatic breathing. In WT competition, omitting a mandatory Kihap incurs an automatic referee point deduction (-0.1).',
            },
          ],
        },
        beginnerBridge: {
          title: 'The Beginner Foundation: Progressing from 10th Kup to 8th Kup',
          targetRank: 'White Belt (10th Kup) to Yellow Belt (8th Kup)',
          summary:
            'Before starting Taegeuk 1 (Il-Jang), beginners learn fundamental foundational drills—Kibon Dongjak, Saju-Jireugi, and Saju-Makki—to master posture, breathing, and four-directional coordination.',
          components: [
            {
              name: 'Kibon Dongjak (Basic Movements)',
              koreanName: '기본 동작',
              focus: 'Horse-riding stance (Juchum-seogi) & Solar Plexus Punches',
              description: 'Develops leg endurance, spinal alignment, and explosive opposite-hand recoil (chambering).',
            },
            {
              name: 'Saju-Jireugi (Four-Directional Punching)',
              koreanName: '사주 지르기',
              focus: 'Forward Stance (Ap-kubi) & 90-degree pivot turns',
              description: 'Teaches linear footwork stepping into all four compass directions while maintaining punch targeting.',
            },
            {
              name: 'Saju-Makki (Four-Directional Blocking)',
              koreanName: '사주 막기',
              focus: 'Low Block (Arae-makki) & Inside Block (An-makki)',
              description: 'Introduces pre-deflection arm chambering and defensive pivot rotations before entering Taegeuk 1.',
            },
          ],
        },
      }
  }
}

// -----------------------------------------------------------------------------
// 2. YUDANJA POOMSAE (DAN GRADES) MASTER GUIDE DATASET
// -----------------------------------------------------------------------------
export interface YudanjaFloorPattern {
  danRank: string
  name: string
  koreanName: string
  hanjaCharacter: string
  characterMeaning: string
  floorPatternShape: string
  masterVirtue: string
  totalMoves: number
  beltStripes?: number
  beltStripeRoman?: string
  meaningOfName?: string
  nameFootnote?: string
  meaningOfSymbol?: string
  masterCharacteristic?: string
}

export interface YudanjaGuideData {
  title: string
  koreanTitle: string
  definition: string
  contrastWithTaegeuk: {
    title: string
    summary: string
    points: Array<{
      aspect: string
      taegeuk: string
      yudanja: string
    }>
  }
  floorPatterns: YudanjaFloorPattern[]
  gradingsAndCompetition: {
    title: string
    nonLinearProgression: string
    competitionDynamics: string
    selfDefenseBunkai: string
  }
  authoritativeClarifications: {
    hansooNote: string
    ilyoNote: string
  }
}

export function getYudanjaGuide(lang: string): YudanjaGuideData {
  switch (lang) {
    case 'km':
      return {
        title: 'មេគុន Yudanja (យូដាន់ចា)៖ កម្រិតខ្សែក្រវាត់ខ្មៅ 1st Dan ដល់ 9th Dan',
        koreanTitle: '유단자 품새 (Dan Grade Master Curriculum)',
        definition:
          'នៅក្នុងទម្រង់ World Taekwondo (WT) និង Kukkiwon មេគុនសម្រាប់កម្រិតខ្សែក្រវាត់ខ្មៅ (Dan Grades) ត្រូវបានហៅជាផ្លូវការថា "Yudanja Poomsae" (មេគុនយូដាន់ចា)។ ខណៈពេលដែលមេគុន Taegeuk ត្រូវបានប្រើប្រាស់សម្រាប់កម្រិតខ្សែក្រវាត់ពណ៌ (Kup Grades) មេគុន Yudanja ដឹកនាំសិស្សចាប់ពីខ្សែក្រវាត់ខ្មៅ 1st Dan រហូតដល់មហាមេគ្រូ 9th Dan Grandmaster។',
        contrastWithTaegeuk: {
          title: 'ការប្រៀបធៀបរវាងមេគុន Yudanja និងមេគុន Taegeuk',
          summary:
            'ខុសប្លែកពីមេគុន Taegeuk ដែលដើរតាមគន្លងបន្ទាត់អក្សរស្តេច ("王") ដូចៗគ្នា និងតំណាងដោយត្រីក្រាម ៣ បន្ទាត់ មេគុន Yudanja នីមួយៗដើរតាមគន្លងបន្ទាត់ដែលគូសចេញជា "អក្សរចិន (Hanja)" ខុសៗគ្នា ដែលតំណាងឱ្យចរិតលក្ខណៈ និងគុណធម៌ដែលមេគ្រូតេក្វាន់ដូត្រូវមាន។',
          points: [
            {
              aspect: 'គន្លងបន្ទាត់លើកម្រាល (Floor Line)',
              taegeuk: 'ដើរតាមគន្លងអក្សរស្តេច "王" ដូចគ្នាទាំង ៨ មេគុន',
              yudanja: 'មេគុននីមួយៗដើរចេញជាអក្សរចិនផ្សេងគ្នា ("士", "山", "工", "一", "十", "ㅗ", "丅", "水", "卍/O")',
            },
            {
              aspect: 'មូលដ្ឋានទស្សនវិជ្ជា',
              taegeuk: 'ត្រីក្រាមទាំង ៨ (Palgwae) នៃក្បួន I Ching',
              yudanja: 'ប្រវត្តិសាស្ត្រកូរ៉េ ភ្នំពិសិដ្ឋ ទស្សនវិជ្ជាពុទ្ធសាសនា និងគុណធម៌មេគ្រូ',
            },
            {
              aspect: 'ភាពស្មុគស្មាញនៃបច្ចេកទេស',
              taegeuk: 'ការរារាំងមូលដ្ឋាន ការទាត់មុខ/ផ្អៀង ជំហរដើរ និងជំហរមុខ',
              yudanja: 'ជំហរសត្វក្រៀល, ជំហរខ្លា, រារាំងភ្នំ, រារាំងស្នែងគោ, ដកដង្ហើមយឺត ៥-៨ វិនាទី',
            },
            {
              aspect: 'ជម្រៅនៃការអនុវត្ត',
              taegeuk: 'ការសម្របសម្រួលការវាយលុក និងការពារជាមូលដ្ឋាន',
              yudanja: 'ការចាប់គាបសន្លាក់ ការវាយចំណុចស្លាប់ និងការការពារខ្លួនជាក់ស្តែង (Hosinsul)',
            },
          ],
        },
        floorPatterns: [
          { danRank: '1st Dan', name: 'Koryo (កូរ្យ៉ូ)', koreanName: '고려', hanjaCharacter: '士', characterMeaning: 'អ្នកប្រាជ្ញ-អ្នកចម្បាំង (Scholar-Warrior)', floorPatternShape: '士 (បន្ទាត់អ្នកប្រាជ្ញ)', masterVirtue: 'ស្មារតីស្នេហាជាតិ និងភាពរឹងមាំមិនចុះចាញ់', totalMoves: 30 },
          { danRank: '2nd Dan', name: 'Keumgang (គឹមហ្កាង)', koreanName: '금강', hanjaCharacter: '山', characterMeaning: 'ភ្នំពេជ្រ (Diamond Mountain)', floorPatternShape: '山 (បន្ទាត់ភ្នំ)', masterVirtue: 'ភាពរឹងមាំខាងសីលធម៌ និងស្ថេរភាពមិនរង្គោះរង្គើ', totalMoves: 27 },
          { danRank: '3rd Dan', name: 'Taebaek (ថែបែក)', koreanName: '태백', hanjaCharacter: '工 / 大', characterMeaning: 'ពលកម្ម & ការបង្កើតជាតិ (Sacred Mountain)', floorPatternShape: '工 (បន្ទាត់ពលកម្ម)', masterVirtue: 'ការបំភ្លឺ និងការបម្រើមនុស្សជាតិ (Hongik Ingan)', totalMoves: 26 },
          { danRank: '4th Dan', name: 'Pyongwon (ព្យុងវ៉ុន)', koreanName: '평원', hanjaCharacter: '一', characterMeaning: 'បន្ទាត់ត្រង់តែមួយ / វាលទំនាប (Expansive Plain)', floorPatternShape: '一 (បន្ទាត់ត្រង់ផ្តេក)', masterVirtue: 'ចិត្តទូលាយដូចវាលស្មៅដែលចិញ្ចឹមបីបាច់ជីវិត', totalMoves: 21 },
          { danRank: '5th Dan', name: 'Shipjin (ស៊ីបជីន)', koreanName: '십진', hanjaCharacter: '十', characterMeaning: 'ប្រព័ន្ធទសភាគ & និមិត្តសញ្ញាអាយុយឺនយូរ ១០', floorPatternShape: '十 (បន្ទាត់ឈើឆ្កាង)', masterVirtue: 'ការអភិវឌ្ឍគ្មានទីបញ្ចប់ និងការរស់នៅសុខដុម', totalMoves: 28 },
          { danRank: '6th Dan', name: 'Jitae (ជីថែ)', koreanName: '지태', hanjaCharacter: 'ㅗ', characterMeaning: 'ជំហានមនុស្សលោកលើផែនដី (Upright Human Stride)', floorPatternShape: 'ㅗ (បន្ទាត់ឈរលើផែនដី)', masterVirtue: 'ការឈរយ៉ាងរឹងមាំលើផែនដីដោយយុត្តិធម៌', totalMoves: 28 },
          { danRank: '7th Dan', name: 'Cheonkwon (ឆនក្វន់)', koreanName: '천권', hanjaCharacter: '丅', characterMeaning: 'មេឃាដែលមើលថែពិភពលោក (Heavenly Canopy)', floorPatternShape: '丅 (បន្ទាត់មេឃាក្រឡេកមើល)', masterVirtue: 'ការលះបង់អញ និងការមើលពិភពលោកពីទស្សនៈខ្ពង់ខ្ពស់', totalMoves: 26 },
          { danRank: '8th Dan', name: 'Hansoo (ហាន់ស៊ូ)', koreanName: '한수', hanjaCharacter: '水', characterMeaning: 'ទឹកជាប្រភពនៃជីវិត (Origin Water)', floorPatternShape: '水 (បន្ទាត់អក្សរទឹក)', masterVirtue: 'ភាពបត់បែនទន់ភ្លន់ដូចទឹក តែមានកម្លាំងកម្ទេចថ្ម', totalMoves: 27 },
          { danRank: '9th Dan', name: 'Ilyo (អ៊ីលយ៉ូ)', koreanName: '일여', hanjaCharacter: '卍 / O', characterMeaning: 'ភាពជាតែមួយនៃកាយ និងចិត្ត (Buddhist Non-Duality)', floorPatternShape: '卍 ឬ រង្វង់មូល (បន្ទាត់ភាពជាតែមួយ)', masterVirtue: 'ការរួបរួមរវាងបច្ចេកទេស និងវិញ្ញាណជាធ្លុងមួយ', totalMoves: 23 },
        ],
        gradingsAndCompetition: {
          title: 'ការប្រឡងឡើងកម្រិត Dan និងការប្រកួតប្រជែងមេគុន Yudanja',
          nonLinearProgression:
            'ការវិវត្តតាមកម្រិត Dan មិនមានលក្ខណៈលីនេអ៊ែរដូចកម្រិត Kup ឡើយ។ ជារឿយៗ សិស្សខ្សែក្រវាត់ខ្មៅតែងតែរៀនមេគុនកម្រិតខ្ពស់មុនពេលប្រឡងជាក់ស្តែង ដោយសារតែចន្លោះពេលរង់ចាំរវាងការប្រឡង Dan មានរយៈពេលវែង (ឧទាហរណ៍៖ ២ ឆ្នាំសម្រាប់ 2nd Dan, ៣ ឆ្នាំសម្រាប់ 3rd Dan រហូតដល់ ៨-៩ ឆ្នាំសម្រាប់ 8th/9th Dan) និងសម្រាប់ការប្រកួតប្រជែងតាមក្រុមអាយុ។',
          competitionDynamics:
            'បច្ចេកទេសដែលត្រូវការសម្រាប់មេគុន Yudanja មានកម្រិតខ្ពស់ជាងមេគុន Taegeuk ប៉ុន្តែបញ្ហាប្រឈមធំបំផុតគឺភាពខុសប្លែកគ្នានៃគន្លងបន្ទាត់លើកម្រាល។ ភាពសម្បូរបែបនៃបច្ចេកទេស និងភាពពិសេសនៃទម្រង់នីមួយៗ ធ្វើឱ្យស៊េរី Yudanja មានការពេញនិយមយ៉ាងខ្លាំងក្នុងការប្រកួត Poomsae ទាំងកម្រិតក្លឹប និងកម្រិតអន្តរជាតិ។',
          selfDefenseBunkai:
            'មេគុនត្រូវបានរចនាឡើងដើម្បីក្លែងធ្វើការវាយលុក និងការពារដោយគ្មានដៃគូ។ នៅកម្រិតខ្សែក្រវាត់ខ្មៅ សិស្សត្រូវចំណាយពេលស្វែងយល់ពីរបៀបដែលចលនានីមួយៗអាចអនុវត្តក្នុងការការពារខ្លួនពិតប្រាកដ (Hosinsul / Bunkai) ព្រមទាំងពិចារណាពីនិមិត្តសញ្ញាដ៏ស៊ីជម្រៅនៃទម្រង់នីមួយៗ។',
        },
        authoritativeClarifications: {
          hansooNote: 'ការបញ្ជាក់ច្បាស់៖ ឈ្មោះផ្លូវការនៃមេគុន 8th Dan គឺ "Hansoo" (ហាន់ស៊ូ / 汉水 មានន័យថាទឹក) មិនមែន "Haelo" ឡើយ ដែលជាកំហុសអក្ខរាវិរុទ្ធទូទៅ។',
          ilyoNote: 'ការបញ្ជាក់ច្បាស់៖ មេគុន 9th Dan គឺ "Ilyo" (អ៊ីលយ៉ូ / 一如 តំណាងឱ្យភាពជាតែមួយនៃកាយ និងចិត្ត) ដែលដាច់ដោយឡែកពីមេគុន 5th Dan Shipjin (ស៊ីបជីន / និមិត្តសញ្ញាអាយុយឺនយូរ)។',
        },
      }
    case 'zh':
      return {
        title: '有段者品势系列 (Yudanja Poomsae)：黑带一段至九段至尊大系',
        koreanTitle: '유단자 품새 (Dan Grade Master Curriculum)',
        definition:
          '在世界跆拳道联盟（WT）与国技院官方体系中，黑带段位专属品势被正式定名为“有段者品势（Yudanja Poomsae）”。色带学员修习太极一至八章（Taegeuk），而升入黑带后，则全方位登攀有段者品势，自黑带一段高丽直至九段大宗师一如品势。',
        contrastWithTaegeuk: {
          title: '有段者品势与太极品势的核心结构对比',
          summary:
            '不同于太极品势通篇沿用单一的“王”字演武线与《易经》三爻八卦，有段者品势的每一套套路均在地面演武线描画出一个截然不同的“汉字”轨迹，该汉字即代表了跆拳道大师必须具备的武德品格。',
          points: [
            {
              aspect: '演武路线轨迹 (Floor Line)',
              taegeuk: '太极八套动作全部统一遵循“王”字线（中轴对称展开）',
              yudanja: '每一套品势分别走出专属汉字演武线（“士”、“山”、“工”、“一”、“十”、“ㅗ”、“丅”、“水”、“卍/O”）',
            },
            {
              aspect: '哲学思想母体',
              taegeuk: '《周易》六十四卦之根本八卦乾坤水火卦象',
              yudanja: '半岛历史王朝、名山大川、元晓大师佛学真如及天地武道境界',
            },
            {
              aspect: '动作技术难度',
              taegeuk: '基本格挡、前踢/侧踢/横踢、自然步与前弓步',
              yudanja: '鹤腿步、虎步、山形格挡、金刚冲拳、牛角防守、5至8秒深长慢动吐纳',
            },
            {
              aspect: '实战拆解深度',
              taegeuk: '基本攻防时空感知与基础肢体协调',
              yudanja: '近身反关节擒拿、要害穿刺与街头自卫防身术（Hosinsul Bunkai）',
            },
          ],
        },
        floorPatterns: [
          { danRank: '一段 (1st Dan)', name: '高丽 (Koryo)', koreanName: '고려', hanjaCharacter: '士', characterMeaning: '学士文人与尚武义士 (Scholar-Warrior)', floorPatternShape: '士 (士字线)', masterVirtue: '爱国尚武之魂与不屈民族气节', totalMoves: 30 },
          { danRank: '二段 (2nd Dan)', name: '金刚 (Keumgang)', koreanName: '금강', hanjaCharacter: '山', characterMeaning: '金刚山之巍峨雄壮 (Diamond Mountain)', floorPatternShape: '山 (山字线)', masterVirtue: '如金刚石般粉碎迷妄的刚毅武德', totalMoves: 27 },
          { danRank: '三段 (3rd Dan)', name: '太白 (Taebaek)', koreanName: '태백', hanjaCharacter: '工 / 大', characterMeaning: '天帝开国与洪益人间 (Sacred Mountain)', floorPatternShape: '工 (工字线)', masterVirtue: '光明正大照亮苍生的浩然正气', totalMoves: 26 },
          { danRank: '四段 (4th Dan)', name: '平原 (Pyongwon)', koreanName: '평원', hanjaCharacter: '一', characterMeaning: '一望无际之生命平原 (Expansive Plain)', floorPatternShape: '一 (一字单横线)', masterVirtue: '坦荡开阔容纳万物之慈悲包容', totalMoves: 21 },
          { danRank: '五段 (5th Dan)', name: '十进 (Shipjin)', koreanName: '십진', hanjaCharacter: '十', characterMeaning: '十进制无限递增与十长生 (Decimal Longevity)', floorPatternShape: '十 (十字交叉线)', masterVirtue: '天道运行无止境之自强不息', totalMoves: 28 },
          { danRank: '六段 (6th Dan)', name: '地跆 (Jitae)', koreanName: '지태', hanjaCharacter: 'ㅗ', characterMeaning: '人类立足大地顶天立地 (Upright Human)', floorPatternShape: 'ㅗ (地平立人线)', masterVirtue: '双足扎根大地战胜人间磨难之魄力', totalMoves: 28 },
          { danRank: '七段 (7th Dan)', name: '天拳 (Cheonkwon)', koreanName: '천권', hanjaCharacter: '丅', characterMeaning: '浩瀚苍天俯瞰人间 (Heavenly Canopy)', floorPatternShape: '丅 (天幕俯察线)', masterVirtue: '超脱私欲局限归于苍穹之大觉悟', totalMoves: 26 },
          { danRank: '八段 (8th Dan)', name: '汉水 (Hansoo)', koreanName: '한수', hanjaCharacter: '水', characterMeaning: '万物生命之源泉活水 (Origin Water)', floorPatternShape: '水 (水字波浪线)', masterVirtue: '上善若水避实就虚滴水穿石之柔韧', totalMoves: 27 },
          { danRank: '九段 (9th Dan)', name: '一如 (Ilyo)', koreanName: '일여', hanjaCharacter: '卍 / O', characterMeaning: '身心不二与真如一心 (Buddhist Non-Duality)', floorPatternShape: '卍 或 圆形 (一如圆环线)', masterVirtue: '技进乎道物我两忘之无上武道境界', totalMoves: 23 },
        ],
        gradingsAndCompetition: {
          title: '有段者升段考核与高规格公认品势竞技',
          nonLinearProgression:
            '有段者品势的修习进阶绝非如色带般按部就班的单向线性。有段者学员往往会提前跨段位研习高阶品势——这既是出于国际公认品势大赛跨年龄组备赛需求，也是因为高段位之间存在长达数年的考核等待周期（如晋升二段需等待1至2年，晋升三段需3年，直至升八九段需等待长达8至9年）。',
          competitionDynamics:
            '演武演练汉字轨迹的多样性与复杂肢体平衡是有段者品势的最大魅力与难点。高难度技术（鹤腿步金刚冲拳、山形格挡、八秒慢推岩）使有段者品势成为国际品势锦标赛与俱乐部高水平组别中最具观赏性的竞技核心。',
          selfDefenseBunkai:
            '品势的核心初衷是无对手的实战攻防模拟。在黑带段位，学员必须深入探究每一个动作的防身实战拆解（Hosinsul / Bunkai）应用，而绝不可仅仅停留在空洞的动作外表。',
        },
        authoritativeClarifications: {
          hansooNote: '官方权威审定：八段品势正式名称为“汉水 (Hansoo / 漢水)”，代表流水之德，早期个别西方资料中出现的“Haelo”系历史笔误。',
          ilyoNote: '官方权威审定：九段至尊品势为“一如 (Ilyo / 一如)”，体认元晓大师身心真如境界，与五段“十进 (Shipjin)”有本质区别。',
        },
      }
    case 'ko':
      return {
        title: '유단자 품새(Yudanja Poomsae): 1단에서 9단 대사범 승단 계제',
        koreanTitle: '유단자 품새 (Dan Grade Master Curriculum)',
        definition:
          '세계태권도연맹(WT)과 국기원 공인 체계에서 유단자가 수련하는 품새를 공식적으로 "유단자 품새(Yudanja Poomsae)"라고 부릅니다. 유급자 단계에서 태극 1~8장을 마친 수련자는 1단 고려부터 9단 대사범 일여 품새에 이르기까지 무도의 정수를 체화하게 됩니다.',
        contrastWithTaegeuk: {
          title: '유단자 품새와 태극 품새의 구조적 차이점',
          summary:
            '태극 품새가 모두 동일한 임금 왕(王)자 품새선과 주역 팔괘를 따르는 것과 달리, 유단자 품새는 품새마다 서로 다른 "한자(漢字)" 모양의 고유한 품새선을 그리며, 이는 태권도 사범이 갖추어야 할 덕목과 기개를 상징합니다.',
          points: [
            {
              aspect: '품새선(品勢線) 궤적',
              taegeuk: '8개 품새 모두 임금 왕(王)자 품새선으로 통일됨',
              yudanja: '품새마다 서로 다른 한자 품새선을 그림 ("士", "山", "工", "一", "十", "ㅗ", "丅", "水", "卍/O")',
            },
            {
              aspect: '철학적 배경',
              taegeuk: '주역 8괘(건·태·리·진·손·감·간·곤)',
              yudanja: '한민족의 유구한 역사, 영산의 기백, 원효대사의 일심(一心) 사상',
            },
            {
              aspect: '기술적 난이도',
              taegeuk: '기본 막기, 앞·옆·돌려차기, 앞굽이·앞서기 중심',
              yudanja: '학다리서기, 범서기, 산틀막기, 금강막기, 5~8초 등척성 단전호흡',
            },
            {
              aspect: '실전 공방의 깊이',
              taegeuk: '기본 공방 타이밍과 신체 조화',
              yudanja: '급소 치기, 관절 꺾기, 실전 호신술(Hosinsul) 가상 시뮬레이션',
            },
          ],
        },
        floorPatterns: [
          {
            danRank: '1단 (1st Dan)',
            beltStripes: 1,
            beltStripeRoman: 'I',
            name: '고려 (Koryo)',
            koreanName: '고려',
            meaningOfName: '고려국의 국호 (Ancient Korea)',
            hanjaCharacter: '士',
            meaningOfSymbol: '선비 (Wise Elder / Scholar-Warrior)',
            characterMeaning: '선비와 무인 (Scholar-Warrior)',
            floorPatternShape: '士 (선비 사자선)',
            masterCharacteristic: '지혜로운 사범 (Wise)',
            masterVirtue: '외침에 굴하지 않는 고려 무인의 호국 기개와 도덕적 지혜',
            totalMoves: 30,
          },
          {
            danRank: '2단 (2nd Dan)',
            beltStripes: 2,
            beltStripeRoman: 'II',
            name: '금강 (Keumgang)',
            koreanName: '금강',
            meaningOfName: '금강산과 다이아몬드 (Diamond Mountain¹)',
            nameFootnote: '금강산(金剛山): 불교의 금강저(Vajra)에서 유래하여 어떤 것에도 부서지지 않는 강인함과 웅장한 기개를 상징.',
            hanjaCharacter: '山',
            meaningOfSymbol: '산 (Mountain)',
            characterMeaning: '금강산의 웅장미 (Diamond Mountain)',
            floorPatternShape: '山 (뫼 산자선)',
            masterCharacteristic: '불굴의 사범 (Unbreakable)',
            masterVirtue: '부서지지 않는 다이아몬드 같은 강인한 신념과 태산 같은 안정감',
            totalMoves: 27,
          },
          {
            danRank: '3단 (3rd Dan)',
            beltStripes: 3,
            beltStripeRoman: 'III',
            name: '태백 (Taebaek)',
            koreanName: '태백',
            meaningOfName: '궁극의 밝음 (Ultimate Brightness²)',
            nameFootnote: '태백(太白): 단군왕검이 고조선을 개국한 백두산의 옛 이름으로, 널리 인간을 이롭게 하는 홍익인간(弘益人間)의 건국 이념.',
            hanjaCharacter: '工',
            meaningOfSymbol: '하늘과 땅을 잇는 가교 (Bridge between heaven and earth)',
            characterMeaning: '개천과 홍익인간 (Sacred Mountain)',
            floorPatternShape: '工 (장인 공자선)',
            masterCharacteristic: '영적인 사범 (Spiritual)',
            masterVirtue: '인간을 널리 이롭게 하는 광명의 건국 이념과 숭고한 도덕성',
            totalMoves: 26,
          },
          {
            danRank: '4단 (4th Dan)',
            beltStripes: 4,
            beltStripeRoman: 'IIII',
            name: '평원 (Pyeongwon)',
            koreanName: '평원',
            meaningOfName: '광활한 대평야 (Vast Plain)',
            hanjaCharacter: '一',
            meaningOfSymbol: '대평원 (The Plain)',
            characterMeaning: '광활한 대평야 (Expansive Plain)',
            floorPatternShape: '一 (한 일자선)',
            masterCharacteristic: '평화로운 사범 (Peaceful)',
            masterVirtue: '모든 생명을 편견 없이 품어 안는 대평원의 너그러운 관용과 평화',
            totalMoves: 21,
          },
          {
            danRank: '5단 (5th Dan)',
            beltStripes: 5,
            beltStripeRoman: 'IIIII',
            name: '십진 (Sipjin)',
            koreanName: '십진',
            meaningOfName: '십장생과 무한 발전 (The ten eternal entities³)',
            nameFootnote: '십장생(十長生): 해·달·산·물·돌·소나무·불로초·거북·학·사슴 등 불로장생과 조화를 상징하는 10가지 자연물.',
            hanjaCharacter: '十',
            meaningOfSymbol: '열 십 (Ten)',
            characterMeaning: '십진법과 십장생 (Decimal Longevity)',
            floorPatternShape: '十 (열 십자선)',
            masterCharacteristic: '무병장수의 사범 (Long-lived, Healthy)',
            masterVirtue: '질서정연한 우주 법칙과 단전호흡을 통한 무병장수 및 끝없는 자기완성',
            totalMoves: 28,
          },
          {
            danRank: '6단 (6th Dan)',
            beltStripes: 6,
            beltStripeRoman: 'IIIIII',
            name: '지태 (Jitae)',
            koreanName: '지태',
            meaningOfName: '하늘을 바라보는 인간 (Man looking to the sky)',
            hanjaCharacter: '丄',
            meaningOfSymbol: '대지 위에서 하늘을 보는 인간 (Man on earth, looking to the sky)',
            characterMeaning: '대지를 딛고 선 인간 (Upright Human)',
            floorPatternShape: '丄 (대지 위 인간선)',
            masterCharacteristic: '자립과 유산의 사범 (Self-reliant, Leaving a legacy)',
            masterVirtue: '대지를 딛고 서서 삶의 희로애락을 당당하게 극복하고 무도의 유산을 계승함',
            totalMoves: 28,
          },
          {
            danRank: '7단 (7th Dan)',
            beltStripes: 7,
            beltStripeRoman: 'IIIIIII',
            name: '천권 (Cheonkwon)',
            koreanName: '천권',
            meaningOfName: '하늘의 권능 (Heavenly Might)',
            hanjaCharacter: '丅',
            meaningOfSymbol: '하늘에서 강림한 인간 (Man descending from the heavens)',
            characterMeaning: '만물을 굽어살피는 하늘 (Heavenly Canopy)',
            floorPatternShape: '丅 (하늘의 덮개선)',
            masterCharacteristic: '경건한 대사범 (Pious)',
            masterVirtue: '사사로운 아집을 벗어나 하늘의 권능과 만물을 품는 숭고한 경건함',
            totalMoves: 26,
          },
          {
            danRank: '8단 (8th Dan)',
            beltStripes: 8,
            beltStripeRoman: 'IIIIIIII',
            name: '한수 (Hansoo)',
            koreanName: '한수',
            meaningOfName: '만물의 근원인 물 (Water)',
            hanjaCharacter: '水',
            meaningOfSymbol: '물 (Water)',
            characterMeaning: '만물의 근원인 물 (Origin Water)',
            floorPatternShape: '水 (물 수자선)',
            masterCharacteristic: '유연하고 적응력 높은 대사범 (Adaptable, Fluid)',
            masterVirtue: '상선약수(上善若水)—어떤 그릇에도 담기되 바위를 뚫는 유연성과 적응력',
            totalMoves: 27,
          },
          {
            danRank: '9단 (9th Dan)',
            beltStripes: 9,
            beltStripeRoman: 'IIIIIIIII',
            name: '일여 (Ilyeo)',
            koreanName: '일여',
            meaningOfName: '진여와 일체 (Oneness)',
            hanjaCharacter: '卍',
            meaningOfSymbol: '불교의 일여 (Oneness in Buddhism)',
            characterMeaning: '원효대사의 일심과 진여 (Buddhist Non-Duality)',
            floorPatternShape: '卍 (일여 조화선)',
            masterCharacteristic: '조화로운 대종사 (Harmonious)',
            masterVirtue: '원효대사의 일심사상—도와 내가 온전히 하나가 되는 무도의 대열반과 조화',
            totalMoves: 23,
          },
        ],
        gradingsAndCompetition: {
          title: '유단자 승단 심사와 공인 품새 대회의 특성',
          nonLinearProgression:
            '유단자 품새의 수련은 유급자 품새처럼 순차적으로만 이루어지지 않습니다. 승단 심사 간격이 길어(2단 1~2년, 3단 2~3년, 8·9단은 8~9년 이상), 유단자들은 대회 출전이나 기량 확장을 위해 자신의 단수보다 높은 상위 품새를 미리 습득하여 연마하는 경우가 보편적입니다.',
          competitionDynamics:
            '다양한 한자 품새선의 기하학과 고난도 균형 제어(학다리서기, 산틀막기, 바위밀기 등)는 유단자 품새의 핵심 과제입니다. 이러한 독창성과 난이도 덕분에 국내외 공인 품새 대회에서 가장 핵심적인 승부처로 인정받고 있습니다.',
          selfDefenseBunkai:
            '품새는 가상의 적과의 공방을 신체로 형상화한 것입니다. 유단자 단계에서는 단순한 동작 흉내를 넘어, 각 동작이 실전 상황에서 어떻게 호신술(Hosinsul / Bunkai)로 작용하는지 철저히 연구하고 체득해야 합니다.',
        },
        authoritativeClarifications: {
          hansooNote: '공식 명칭 정정: 8단 공인 품새의 올바른 명칭은 "한수(Hansoo / 漢水)"이며, 일부 서구권의 "Haelo"는 오기입니다.',
          ilyoNote: '공식 명칭 정정: 9단 최고 품새는 "일여(Ilyo / 一如)"이며, 5단 십진(Shipjin)과 명확히 구분됩니다.',
        },
      }
    default:
      return {
        title: 'The Yudanja Poomsae Series: 1st Dan to 9th Dan Grandmastery',
        koreanTitle: '유단자 품새 (Dan Grade Master Curriculum)',
        definition:
          'In World Taekwondo (WT) and Kukkiwon style, the Black Belt Dan grade patterns are officially designated as the Yudanja Poomsae series. While the Taegeuk series governs Kup (color belt) grades, the Yudanja series guides practitioners from 1st Dan Black Belt through 9th Dan Grandmaster.',
        contrastWithTaegeuk: {
          title: 'Contrasting the Yudanja Series with Taegeuk Poomsae',
          summary:
            'Unlike the Taegeuk patterns which all follow the uniform King ("王") floor line and are mapped to 3-line trigrams, each Yudanja form traces a distinct Chinese character (Hanja) on the floor, embodying an advanced virtue that Taekwondo Masters must exhibit.',
          points: [
            {
              aspect: 'Floor Line Geometry',
              taegeuk: 'Uniform "王" (King / Sovereign line) across all 8 forms',
              yudanja: 'Unique Hanja Chinese character for each form ("士", "山", "工", "一", "十", "ㅗ", "丅", "水", "卍/O")',
            },
            {
              aspect: 'Philosophical Base',
              taegeuk: '8 Trigrams (Palgwae) from the I Ching (Book of Changes)',
              yudanja: 'Korean historical eras, sacred mountains, Buddhist non-duality, and master virtues',
            },
            {
              aspect: 'Technical Complexity',
              taegeuk: 'Basic blocks, front/side/turning kicks, forward stances',
              yudanja: 'Crane stance, tiger stance, diamond blocks, mountain blocks, 5–8s slow isometric breathing',
            },
            {
              aspect: 'Application Depth',
              taegeuk: 'Fundamental offensive and defensive coordination',
              yudanja: 'Advanced joint locks, vital-point strikes, and street self-defense (Hosinsul) combat simulation',
            },
          ],
        },
        floorPatterns: [
          {
            danRank: '1st Dan',
            beltStripes: 1,
            beltStripeRoman: 'I',
            name: 'Koryo',
            koreanName: '고려',
            meaningOfName: 'Ancient name for "Korea"',
            floorPatternShape: '士 (Scholar-Warrior Line)',
            hanjaCharacter: '士',
            meaningOfSymbol: 'seonbi "wise elder"',
            characterMeaning: 'Scholar-Warrior / Righteous Man',
            masterCharacteristic: 'Wise',
            masterVirtue: 'Indomitable patriotic spirit defending the homeland',
            totalMoves: 30,
          },
          {
            danRank: '2nd Dan',
            beltStripes: 2,
            beltStripeRoman: 'II',
            name: 'Keumgang',
            koreanName: '금강',
            meaningOfName: 'Diamond Mountain¹',
            nameFootnote: 'Diamond Mountain (Geumgangsan): Rooted in the Buddhist Vajra, representing impenetrable hardness and towering majesty.',
            floorPatternShape: '山 (Mountain Line)',
            hanjaCharacter: '山',
            meaningOfSymbol: 'mountain',
            characterMeaning: 'Diamond Mountain / Immovability',
            masterCharacteristic: 'Unbreakable',
            masterVirtue: 'Diamond-like moral clarity and unyielding firmness',
            totalMoves: 27,
          },
          {
            danRank: '3rd Dan',
            beltStripes: 3,
            beltStripeRoman: 'III',
            name: 'Taebaek',
            koreanName: '태백',
            meaningOfName: 'Ultimate Brightness²',
            nameFootnote: 'Ultimate Brightness: Sacred Mount Baekdu where Dangun founded ancient Gojoseon under the humanitarian ideal of Hongik Ingan (broadly benefiting humanity).',
            floorPatternShape: '工 (Bridge Line)',
            hanjaCharacter: '工',
            meaningOfSymbol: 'bridge between heaven and earth',
            characterMeaning: 'Sacred Mount Taebaek & National Creation',
            masterCharacteristic: 'Spiritual',
            masterVirtue: 'The celestial ideal of broadly benefitting humanity (Hongik Ingan)',
            totalMoves: 26,
          },
          {
            danRank: '4th Dan',
            beltStripes: 4,
            beltStripeRoman: 'IIII',
            name: 'Pyeongwon',
            koreanName: '평원',
            meaningOfName: 'Vast Plain',
            floorPatternShape: '一 (Single Horizontal Line)',
            hanjaCharacter: '一',
            meaningOfSymbol: 'the plain',
            characterMeaning: 'Expansive Plain of Life',
            masterCharacteristic: 'Peaceful',
            masterVirtue: 'Serene, open-hearted tolerance sustaining all life without bias',
            totalMoves: 21,
          },
          {
            danRank: '5th Dan',
            beltStripes: 5,
            beltStripeRoman: 'IIIII',
            name: 'Sipjin',
            koreanName: '십진',
            meaningOfName: 'The ten eternal entities³',
            nameFootnote: 'The ten eternal entities (Sipjangsaeng): sun, moon, mountain, water, rock, pine tree, longevity herb (bulnocho), tortoise, crane, and deer.',
            floorPatternShape: '十 (Cross Line of Infinity)',
            hanjaCharacter: '十',
            meaningOfSymbol: 'ten',
            characterMeaning: 'Decimal System & 10 Longevity Symbols',
            masterCharacteristic: 'Long-lived, Healthy',
            masterVirtue: 'Orderly cosmic progression and constant self-perfection',
            totalMoves: 28,
          },
          {
            danRank: '6th Dan',
            beltStripes: 6,
            beltStripeRoman: 'IIIIII',
            name: 'Jitae',
            koreanName: '지태',
            meaningOfName: 'Man looking to the sky',
            floorPatternShape: '丄 (Standing on Earth Line)',
            hanjaCharacter: '丄',
            meaningOfSymbol: 'Man on earth, looking to the sky',
            characterMeaning: 'Upright Human Footsteps upon Earth',
            masterCharacteristic: 'Self-reliant, Leaving a legacy',
            masterVirtue: 'Rooting firmly in moral righteousness upon the soil',
            totalMoves: 28,
          },
          {
            danRank: '7th Dan',
            beltStripes: 7,
            beltStripeRoman: 'IIIIIII',
            name: 'Cheonkwon',
            koreanName: '천권',
            meaningOfName: 'Heavenly Might',
            floorPatternShape: '丅 (Heavenly Canopy Line)',
            hanjaCharacter: '丅',
            meaningOfSymbol: 'Man descending from the heavens',
            characterMeaning: 'The Grand Heavens looking down on mankind',
            masterCharacteristic: 'Pious',
            masterVirtue: 'Transcending ego to view existence from the tranquil sky',
            totalMoves: 26,
          },
          {
            danRank: '8th Dan',
            beltStripes: 8,
            beltStripeRoman: 'IIIIIIII',
            name: 'Hansoo',
            koreanName: '한수',
            meaningOfName: 'Water',
            floorPatternShape: '水 (Water Character Line)',
            hanjaCharacter: '水',
            meaningOfSymbol: 'water',
            characterMeaning: 'Water as the Origin of Life',
            masterCharacteristic: 'Adaptable, Fluid',
            masterVirtue: 'Yielding like water—flowing around barriers yet eroding rock',
            totalMoves: 27,
          },
          {
            danRank: '9th Dan',
            beltStripes: 9,
            beltStripeRoman: 'IIIIIIIII',
            name: 'Ilyeo',
            koreanName: '일여',
            meaningOfName: 'Oneness',
            floorPatternShape: '卍 (Universal Harmony Line)',
            hanjaCharacter: '卍',
            meaningOfSymbol: 'oneness (Buddhism)',
            characterMeaning: 'Buddhist Non-Duality & Total Oneness (Ilsim)',
            masterCharacteristic: 'Harmonious',
            masterVirtue: 'Dissolving body, mind, technique, and universe into oneness',
            totalMoves: 23,
          },
        ],
        gradingsAndCompetition: {
          title: 'Dan Gradings, Non-Linear Progression & Competition Dynamics',
          nonLinearProgression:
            'Progression through Dan Grade Poomsae is not as linear as Kup Grade Poomsae. It is common for Dan Grades to learn patterns well in advance of their grade exam—both for competition preparation and because of the required multi-year waiting intervals between Dan exams (e.g. 1 year for 1st Dan, 2 years for 2nd Dan, 3 years for 3rd Dan, up to 8–9 years for 8th/9th Dan).',
          competitionDynamics:
            'The rich variety of unique floor patterns and advanced biomechanics makes the Yudanja series the centerpiece of recognized Poomsae competitions worldwide (Cadet, Junior, Under 30, Under 40, Under 50, Under 60, and Masters divisions).',
          selfDefenseBunkai:
            'Poomsae is designed to simulate combat attack and defense without a partner. At the Yudanja Dan level, students must dedicate time to understanding how each movement functions as a direct self-defense application (Hosinsul / Bunkai), beyond mere aesthetic performance.',
        },
        authoritativeClarifications: {
          hansooNote: 'Official Clarification: 8th Dan Poomsae is officially named "Hansoo" (한수 / 漢水, meaning water). Citations referencing "Haelo" or "Haero" are obsolete typographical errors.',
          ilyoNote: 'Official Clarification: 9th Dan Poomsae is "Ilyo" (일여 / 一如, meaning Buddhist oneness), distinct from 5th Dan "Shipjin" (decimal system and 10 longevity symbols).',
        },
      }
  }
}

// -----------------------------------------------------------------------------
// 3. WHAT IS TAEGEUK & 1971 EVOLUTION PHILOSOPHY DATASET
// -----------------------------------------------------------------------------
export interface DualityPair {
  id: string
  pairName: string
  yangForm: {
    number: number
    name: string
    koreanName: string
    trigramSymbol: string
    trigramLines: [boolean, boolean, boolean] // true: solid, false: broken
    trigramName: string
    hanja: string
    element: string
    nature: string
    keyMovements: string
  }
  yinForm: {
    number: number
    name: string
    koreanName: string
    trigramSymbol: string
    trigramLines: [boolean, boolean, boolean]
    trigramName: string
    hanja: string
    element: string
    nature: string
    keyMovements: string
  }
  philosophicalBalance: string
}

export interface TaegeukMartialIdeal {
  title: string
  koreanTitle: string
  description: string
}

export interface JooyeokPhilosophy {
  title: string
  subtitle: string
  summary: string
  bookOfChangesOrigin: string
  umYangMetaphysics: string
  eightConceptsCircle: string
  keonGonDialectic: string
  koreanFlagSynthesis: string
  trigramManifestation: string
}

export interface WhatIsTaegeukData {
  title: string
  koreanTitle: string
  definition: string
  flagSymbolism: string
  idealsOfTaekwondo: TaegeukMartialIdeal[]
  jooyeokPhilosophy: JooyeokPhilosophy
  pre1971PalgwaeHistory: {
    title: string
    summary: string
    whyReplaced: string
    keyDifferences: string[]
  }
  theFourDualityPairs: DualityPair[]
  beginnerKibonBridge: {
    title: string
    targetRank: string
    summary: string
    components: Array<{
      name: string
      koreanName: string
      focus: string
      description: string
    }>
  }
}

export function getLocalizedWhatIsTaegeuk(lang: string): WhatIsTaegeukData {
  switch (lang) {
    case 'km':
      return {
        title: 'តើអ្វីទៅជា Taegeuk (ថេហ្គឹក)? ទស្សនវិជ្ជា & ការវិវត្តក្នុងឆ្នាំ ១៩៧១',
        koreanTitle: '태극(太極)의 본질과 1971년 품새 대전환',
        definition:
          'ពាក្យថា "Taegeuk" សំដៅលើភាពឯកភាពនៃភាពផ្ទុយគ្នា ដូចជា យិន និង យ៉ាង (Eum & Yang) ដែលបង្កើតឡើងនូវតុល្យភាពដ៏ល្អឥតខ្ចោះនៃសកលលោក។ Taegeuk ក៏ជារង្វង់ពណ៌ក្រហម (យ៉ាង) និងខៀវ (យិន) នៅចំកណ្តាលទង់ជាតិកូរ៉េខាងត្បូងផងដែរ។',
        flagSymbolism:
          'ទង់ជាតិកូរ៉េ (Taegeukgi) បង្ហាញពីរង្វង់ Taegeuk នៅចំកណ្តាលព័ទ្ធជុំវិញដោយត្រីក្រាមចំនួន ៤ ក្នុងចំណោមត្រីក្រាមទាំង ៨ (Palgwae) គឺ៖ Keon (មេឃ), Gon (ដី), Gam (ទឹក), និង Ri (ភ្លើង) ដែលតំណាងឱ្យធាតុស្នូលនៃសកលលោក។',
        idealsOfTaekwondo: [
          {
            title: 'Pacifism (សន្តិភាពនិយម)',
            koreanTitle: '평화주의 (Pacifism)',
            description: 'ការប្រកាន់ខ្ជាប់នូវគោលការណ៍ជៀសវាងជម្លោះ និងការការពារសន្តិភាពតាមរយៈការអត់ធ្មត់ និងវិន័យ។',
          },
          {
            title: 'Unity (ឯកភាព)',
            koreanTitle: '일치·조화 (Unity)',
            description: 'ការរួមបញ្ចូលគ្នារវាងចិត្ត កាយ និងស្មារតី ឆ្លុះបញ្ចាំងពីតុល្យភាពនៃកម្លាំងយិន និងយ៉ាង។',
          },
          {
            title: 'Creative Spirit (ស្មារតីច្នៃប្រឌិត)',
            koreanTitle: '창조적 정신 (Creative Spirit)',
            description: 'ថាមពលនៃការបង្កើតថ្មី ការបត់បែន និងការអភិវឌ្ឍសមត្ថភាពគុនឥតឈប់ឈរ។',
          },
          {
            title: 'Indomitable Spirit (ស្មារតីមិនចុះចាញ់)',
            koreanTitle: '백절불굴 (Indomitable Spirit)',
            description: 'ភាពក្លាហាន និងការតស៊ូជម្នះគ្រប់ឧបសគ្គដោយមិនរាថយ។',
          },
          {
            title: 'Eternity (និរន្តរភាព)',
            koreanTitle: '영원성 (Eternity)',
            description: 'និរន្តរភាពនៃគោលការណ៍ក្បាច់គុនដែលស្ថិតស្ថេររាប់ជំនាន់។',
          },
        ],
        jooyeokPhilosophy: {
          title: 'គម្ពីរ Jooyeok (I Ching / Book of Changes) & កេរ្តិ៍ដំណែល Fuh Hi',
          subtitle: 'ប្រភពដើម ៣,៣០០ ឆ្នាំនៃទស្សនវិជ្ជា Um-Yang',
          summary: 'Taegeuk ចាក់ឫសចេញពីគម្ពីរ Jooyeok (Book of Changes) ដែលជាឯកសារបុរាណបូព៌ាដ៏ឧត្តុង្គឧត្តមបំផុត។',
          bookOfChangesOrigin: 'គម្ពីរ Jooyeok ត្រូវបានកត់ត្រាដំបូងដោយ Fuh Hi ប្រហែល ៣,៣០០ ឆ្នាំមុននៅប្រទេសចិន។',
          umYangMetaphysics: 'ទ្រឹស្តីវិភាគអំពីបាតុភូតនៃការផ្លាស់ប្តូរឥតឈប់ឈរនៃធម្មជាតិមនុស្ស និងកម្លាំងទ្វេ Um (យិន) និង Yang (យ៉ាង)។',
          eightConceptsCircle: 'Fuh Hi បានទាញចេញនូវត្រីក្រាមទាំង ៨ រៀបចំជារង្វង់ដែលបង្ហាញពីទំនាក់ទំនងសុខដុមរមនា។',
          keonGonDialectic: 'Keon (មេឃ / ពន្លឺ) និង Gon (ដី / ការទទួលយក) គឺជាគន្លឹះយល់ដឹងពីរង្វង់ដ៏អស្ចារ្យ។ ក្នុង Gon ឆ្លុះបញ្ចាំងពី Keon ហើយក្នុង Keon ឆ្លុះបញ្ចាំងពី Gon។',
          koreanFlagSynthesis: 'ត្រីក្រាមទាំង ៤ (Keon, Gon, Ri, Gam) ព័ទ្ធជុំវិញ Taegeuk បង្កើតបានជាទង់ជាតិកូរ៉េ Taeguk-ki។',
          trigramManifestation: 'មេគុន Taegeuk នីមួយៗរួមបញ្ចូលគោលការណ៍ទាំងនេះទៅក្នុងការវាយ ការរារាំង ល្បឿន និងការគ្រប់គ្រង។',
        },
        pre1971PalgwaeHistory: {
          title: 'ប្រវត្តិសាស្ត្រមុនឆ្នាំ ១៩៧១៖ ពី Palgwae ទៅកាន់ Taegeuk',
          summary:
            'មុនឆ្នាំ ១៩៧១ ក្បាច់គុនតេក្វាន់ដូស្ទីល Kukkiwon/KTA បានប្រើប្រាស់មេគុនចំនួន ៨ ហៅថា "Palgwae" (ប៉ាល់ហ្គ្វេ)។ ពាក្យ Pal មានន័យថា ៨ ហើយ Gwae មានន័យថា ត្រីក្រាម (Trigram) នៃក្បួន I Ching (Book of Changes)។',
          whyReplaced:
            'នៅចុងទសវត្សរ៍ឆ្នាំ ១៩៦០ សាលាគុនដើមទាំង ៩ បានរួមបញ្ចូលគ្នា ហើយគណៈកម្មាធិការបច្ចេកទេសបានយល់ឃើញថាមេគុន Palgwae នៅតែមានឥទ្ធិពលចាស់ពីក្បាច់ការ៉ាតេ (Karate Kata) ច្រើនពេក។ ក្នុងឆ្នាំ ១៩៧១ គណៈកម្មាធិការបានបង្កើតមេគុន Taegeuk 1 ដល់ 8 ថ្មីទាំងស្រុង ដើម្បីរៀបចំសិស្សឱ្យមានភាពរលូន រហ័សរហួន និងត្រៀមខ្លួនសម្រាប់ការប្រកួតកីឡាតេក្វាន់ដូទំនើប (Kyorugi)។',
          keyDifferences: [
            'Palgwae សង្កត់ធ្ងន់លើជំហរជ្រៅ រឹង និងចលនាបត់ ៩០ ដឺក្រេយឺតៗបែបបុរាណ។',
            'Taegeuk ណែនាំជំហរដើរធម្មជាតិ (Ap-seogi) ចលនាទាត់បន្តបន្ទាប់ និងជំហរស្រាលស្របតាមការប្រយុទ្ធទំនើប។',
            'Taegeuk រក្សាទស្សនវិជ្ជាត្រីក្រាម Palgwae ដដែល ប៉ុន្តែបង្កើនប្រសិទ្ធភាពជីវមេកានិចឱ្យកាន់តែមានវិទ្យាសាស្ត្រ។',
          ],
        },
        theFourDualityPairs: [
          {
            id: 'pair-1',
            pairName: 'គូទី ១៖ មេឃ និងពន្លឺ ↔ ផែនដី (Heaven & Light ↔ Earth)',
            yangForm: {
              number: 1,
              name: 'Taegeuk 1 (Il-Jang)',
              koreanName: '태극 1장',
              trigramSymbol: '☰',
              trigramLines: [true, true, true],
              trigramName: 'Keon (건)',
              hanja: '乾 / 天',
              element: 'មេឃ និងពន្លឺព្រះអាទិត្យ (Heaven & Light)',
              nature: 'ការបង្កើតដំបូង បរិសុទ្ធ យ៉ាងសុទ្ធសាធ (Pure Yang)',
              keyMovements: 'Arae-makki, Ap-seogi, Momtong-jireugi, Olgul-makki',
            },
            yinForm: {
              number: 8,
              name: 'Taegeuk 8 (Pal-Jang)',
              koreanName: '태극 8장',
              trigramSymbol: '☷',
              trigramLines: [false, false, false],
              trigramName: 'Gon (곤)',
              hanja: '坤 / 地',
              element: 'ផែនដី និងភាពមាំមួន (Earth & Rootedness)',
              nature: 'ការទទួលយក បញ្ចប់ យិនសុទ្ធសាធ (Pure Yin)',
              keyMovements: 'Dubal-dangsang ap-chagi (ទាត់លោត ២ ជើង), Santul-makki, Batangson',
            },
            philosophicalBalance:
              'Taegeuk 1 ចាប់ផ្តើមដំណើរគុនដោយភាពបរិសុទ្ធនៃមេឃ (បន្ទាត់រឹងទាំង ៣) ខណៈ Taegeuk 8 បញ្ចប់កម្រិតខ្សែក្រវាត់ពណ៌ដោយភាពរឹងមាំ និងការទទួលយកនៃផែនដី (បន្ទាត់ដាច់ទាំង ៣)។',
          },
          {
            id: 'pair-2',
            pairName: 'គូទី ២៖ បឹង និងភាពរីករាយ ↔ ភ្នំ និងស្ថេរភាព (Lake & Joy ↔ Mountain)',
            yangForm: {
              number: 2,
              name: 'Taegeuk 2 (Ee-Jang)',
              koreanName: '태극 2장',
              trigramSymbol: '☱',
              trigramLines: [false, true, true],
              trigramName: 'Tae (태)',
              hanja: '兌 / 澤',
              element: 'បឹង និងភាពស្ងប់ស្ងាត់ (Lake & Serenity)',
              nature: 'ខាងក្រៅទន់ភ្លន់ ខាងក្នុងរឹងមាំ (Gentle Outside, Firm Inside)',
              keyMovements: 'Olgul-jireugi, Arae-makki, Momtong An-makki',
            },
            yinForm: {
              number: 7,
              name: 'Taegeuk 7 (Chil-Jang)',
              koreanName: '태극 7장',
              trigramSymbol: '☶',
              trigramLines: [true, false, false],
              trigramName: 'Gan (간)',
              hanja: '艮 / 山',
              element: 'ភ្នំ និងភាពមិនរំញ័រ (Mountain & Immovability)',
              nature: 'ភាពអត់ធ្មត់ ជំហរមិនរង្គោះរង្គើ (Steadfast Balance)',
              keyMovements: 'Beom-seogi (ជំហរខ្លា), Gawi-makki (រារាំងកន្ត្រៃ), Otgeoreo-makki',
            },
            philosophicalBalance:
              'ផ្ទៃទឹកបឹងដ៏ស្ងប់ស្ងាត់នៃ Taegeuk 2 ឆ្លុះបញ្ចាំងពីភ្នំដ៏ខ្ពស់រឹងមាំនៃ Taegeuk 7។ មួយតំណាងឱ្យភាពទន់ភ្លន់ផ្លូវចិត្ត ឯមួយទៀតតំណាងឱ្យស្ថេរភាពរាងកាយមិនរង្គើ។',
          },
          {
            id: 'pair-3',
            pairName: 'គូទី ៣៖ ភ្លើង និងព្រះអាទិត្យ ↔ ទឹក និងភាពបត់បែន (Fire & Sun ↔ Water)',
            yangForm: {
              number: 3,
              name: 'Taegeuk 3 (Sam-Jang)',
              koreanName: '태극 3장',
              trigramSymbol: '☲',
              trigramLines: [true, false, true],
              trigramName: 'Ri / Ra (리)',
              hanja: '離 / 火',
              element: 'ភ្លើង និងភាពស្វាហាប់ (Fire & Passion)',
              nature: 'ការវាយសម្រុកបន្តបន្ទាប់ ភាពកក់ក្តៅ និងថាមពលផ្ទុះ',
              keyMovements: 'Sonnal Mok-chigi (កាប់ក), Sonnal-makki, ការវាយសម្រុកបន្តបន្ទាប់',
            },
            yinForm: {
              number: 6,
              name: 'Taegeuk 6 (Yuk-Jang)',
              koreanName: '태극 6장',
              trigramSymbol: '☵',
              trigramLines: [false, true, false],
              trigramName: 'Gam (감)',
              hanja: '坎 / 水',
              element: 'ទឹក និងលំហូរ (Water & Flow)',
              nature: 'ការបត់បែនតាមឧបសគ្គ ភាពត្រជាក់ និងការការពារឥតឈប់ឈរ',
              keyMovements: 'Han-sonnal Olgul Bakkat-makki, Dollyo-chagi, Batangson-makki',
            },
            philosophicalBalance:
              'ភ្លើង (Taegeuk 3) ផ្តល់នូវភាពក្តៅ និងកម្លាំងវាយលុកផ្ទុះ ខណៈទឹក (Taegeuk 6) ផ្តល់នូវភាពបត់បែន ការគេចវេះ និងការហូរជុំវិញឧបសគ្គ។ ទាំងពីរជាកម្លាំងផ្ទុយគ្នាមិនអាចខ្វះបាន។',
          },
          {
            id: 'pair-4',
            pairName: 'គូទី ៤៖ ផ្គរលាន់ ↔ ខ្យល់ (Thunder ↔ Wind)',
            yangForm: {
              number: 4,
              name: 'Taegeuk 4 (Sa-Jang)',
              koreanName: '태극 4장',
              trigramSymbol: '☳',
              trigramLines: [false, false, true],
              trigramName: 'Jin (진)',
              hanja: '震 / 雷',
              element: 'ផ្គរលាន់ និងកម្លាំងរញ្ជួយ (Thunder & Power)',
              nature: 'ភាពក្លាហានប្រឈមមុខគ្រោះថ្នាក់ ការទាត់ផ្អៀងទម្លុះខ្លាំង',
              keyMovements: 'Yeop-chagi (ទាត់ផ្អៀង), Sonnal-makki, Pyon-son-kkeut (ចាក់ម្រាម)',
            },
            yinForm: {
              number: 5,
              name: 'Taegeuk 5 (O-Jang)',
              koreanName: '태극 5장',
              trigramSymbol: '☴',
              trigramLines: [true, true, false],
              trigramName: 'Son (손)',
              hanja: '巽 / 風',
              element: 'ខ្យល់ និងភាពទន់ភ្លន់ដែលជ្រាបចូល (Wind & Penetration)',
              nature: 'ចលនាបត់បែនដូចខ្យល់ព្យុះ កែងដាល់ និងការវាយកម្ទេចពីលើ',
              keyMovements: 'Palkoop-chigi (វាយកែង), Mejumeok (ដាល់កណ្តាប់ដៃញញួរ), Dangyo-teok-jireugi',
            },
            philosophicalBalance:
              'ផ្គរលាន់ (Taegeuk 4) បង្កើនកម្លាំងផ្ទុះទម្លុះភ្លាមៗ ខណៈខ្យល់ (Taegeuk 5) អាចជាខ្យល់ជំនោរទន់ភ្លន់ ឬជាខ្យល់ព្យុះបំផ្លិចបំផ្លាញដែលជ្រាបចូលគ្រប់ទិសទី។',
          },
        ],
        beginnerKibonBridge: {
          title: 'ស្ពានចម្លងសិស្សថ្មី៖ កម្រិត 10th Kup ទៅកាន់ 8th Kup',
          targetRank: 'ខ្សែក្រវាត់ស (White Belt 10th Kup) ទៅកាន់ខ្សែក្រវាត់លឿង (8th Kup)',
          summary:
            'មុនពេលចាប់ផ្តើមរៀន Taegeuk 1 (Il-Jang) សិស្សខ្សែក្រវាត់សត្រូវឆ្លងកាត់ការហ្វឹកហាត់ចលនាមូលដ្ឋាន "Kibon" ដើម្បីពង្រឹងសាច់ដុំ ជំហរ និងតុល្យភាពដំបូង។',
          components: [
            {
              name: 'Kibon Dongjak (ចលនាមូលដ្ឋាន)',
              koreanName: '기본 동작',
              focus: 'ជំហរជិះសេះ (Juchum-seogi) & ការដាល់ត្រង់',
              description: 'ហ្វឹកហាត់ការដកដង្ហើម ដាល់ចំកណ្តាលដើមទ្រូង និងទប់លំនឹងជង្គង់ក្នុងជំហរជិះសេះ។',
            },
            {
              name: 'Saju-Jireugi (ការដាល់ ៤ ទិស)',
              koreanName: '사주 지르기',
              focus: 'ការបង្វិលខ្លួន ៩០ ដឺក្រេ និងការបោះជំហានមុខ-ក្រោយ',
              description: 'បង្រៀនសិស្សអំពីទិសដៅទាំង ៤ ការគ្រប់គ្រងជំហរ Ap-kubi និងការដាល់ Middle Punch ត្រឹមត្រូវ។',
            },
            {
              name: 'Saju-Makki (ការរារាំង ៤ ទិស)',
              koreanName: '사주 막기',
              focus: 'ការរារាំងក្រោម (Arae-makki) & រារាំងកណ្តាល (Momtong An-makki)',
              description: 'បង្រៀនសិស្សអំពីការរារាំង និងការត្រៀមដៃ (Chambering) មុនពេលឈានចូលទៅកាន់មេគុនផ្លូវការ Taegeuk 1។',
            },
          ],
        },
      }
    case 'zh':
      return {
        title: '什么是太极 (Taegeuk)？太极哲学渊源与1971年历史性统合革新',
        koreanTitle: '태극(太極)의 본질과 1971년 품새 대전환',
        definition:
          '“太极”一词源自东方深邃宇宙观，意指万物阴阳互抱、对立统一的动态终极平衡。在现代跆拳道中，“太极”既是大韩民国国旗中央红（阳）蓝（阴）太极圆环之名，亦是色带阶段八套基石公认品势的最高指导哲学。',
        flagSymbolism:
          '韩国太极国旗（Taegeukgi）中央绘制红蓝阴阳太极图，四角严密配位《周易》八卦中的四大元卦：乾（天）、坤（地）、坎（水）、离（火），象征着天地运化、水火相济、生生不息的宇宙法则。',
        idealsOfTaekwondo: [
          {
            title: '和平主义 (Pacifism)',
            koreanTitle: '평화주의 (Pacifism)',
            description: '跆拳道武道精神崇尚止戈为武，以严谨自律化解暴力，守护和平。',
          },
          {
            title: '统一与和谐 (Unity)',
            koreanTitle: '일치·조화 (Unity)',
            description: '身心气意合一，呼应宇宙阴阳对立统一的永恒动态平衡。',
          },
          {
            title: '创造精神 (Creative Spirit)',
            koreanTitle: '창조적 정신 (Creative Spirit)',
            description: '生生不息的生机、应变力与向上开拓的武道进取心。',
          },
          {
            title: '百折不屈 (Indomitable Spirit)',
            koreanTitle: '백절불굴 (Indomitable Spirit)',
            description: '面对危难与逆境展现雷霆万钧之勇，历经千锤百炼而不改其志。',
          },
          {
            title: '永恒性 (Eternity)',
            koreanTitle: '영원성 (Eternity)',
            description: '武道原则与宇宙规律超越个体生命，代代相承，与天地共存。',
          },
        ],
        jooyeokPhilosophy: {
          title: '《周易》（Jooyeok / 易经）与伏羲三千三百年哲学渊源',
          subtitle: '东方阴阳玄学与八卦运化的至高源流',
          summary: '太极品势的灵魂深深植根于东方阐释生命本源的圣典——《周易》（Jooyeok / Book of Changes）。',
          bookOfChangesOrigin: '《周易》（又称《易经》）最早由上古先贤伏羲（Fuh Hi）于约3300年前始作八卦，后经数代历圣增补成书。',
          umYangMetaphysics: '该书揭示了人类生存境遇中恒常流动之“变”，实蕴含着至高道德和谐；分析了“阴（Um）”与“阳（Yang）”两大根本形上力量化生万物的过程。',
          eightConceptsCircle: '伏羲根据阴阳二气衍生出八种后续卦象组合，画成圆环图以展现其相生相克之和谐关系，卦象映射天地万象与人类命运。',
          keonGonDialectic: '乾（Keon，纯阳/纯天光）与坤（Gon，纯阴/广袤大地）是洞悉大圆环辩证法的钥匙。在坤中彰显乾之本性，在乾中寄托坤之归宿，二者在对立统一中化生现实与时空。',
          koreanFlagSynthesis: '四大元卦（乾、坤、离、坎）与中央太极阴阳图紧密结合，构成了大韩民国太极国旗（Taeguk-ki）。',
          trigramManifestation: '每套太极品势均以一卦为宗，将其宇宙运化法则深刻融入攻防技法、身步进退、速度节奏与发力强弱之中。',
        },
        pre1971PalgwaeHistory: {
          title: '1971年革新溯源：从八卦品势（Palgwae）全面升华为现代太极品势（Taegeuk）',
          summary:
            '在1971年之前，大韩跆拳道协会与早期国技院主要传习被称为“八卦（Palgwae）”的八套传统色带套路。“八”即八方，“卦”即《易经》六十四卦之根本三爻卦象。',
          whyReplaced:
            '20世纪60年代末期，各大流派道馆实现历史性大合并，技术审议委员会敏锐指出：早期八卦品势过度残留了空手道型（Kata）的僵直步法与棱角顿挫，不利于现代竞技对抗（Kyorugi）的连贯灵动。1971年，国技院集结泰斗宗师正式推出全新的太极一至八章，全面替代八卦套路，以此确立民族武道主体性并为进军奥运会铺平技术桥梁。',
          keyDifferences: [
            '八卦品势重深弓步（Zenbutsu）与硬性死角直角折转，动作略显沉滞。',
            '太极品势大体量引入自然行走步（前步/Ap-seogi）、连续攻防快慢节奏与实战腿法无缝衔接。',
            '太极品势完整传承了八卦阴阳哲学内涵，但在人体运动解剖学与流线力学上实现了划时代跃升。',
          ],
        },
        theFourDualityPairs: [
          {
            id: 'pair-1',
            pairName: '对立统一第一组：乾天与纯阳 ↔ 坤地与纯阴 (Heaven & Light ↔ Earth)',
            yangForm: {
              number: 1,
              name: '太极一章 (Taegeuk 1 - Il-Jang)',
              koreanName: '태극 1장',
              trigramSymbol: '☰',
              trigramLines: [true, true, true],
              trigramName: '乾 (건 / Keon)',
              hanja: '乾 / 天',
              element: '天穹与朝阳初升 (Heaven & Light)',
              nature: '万物元始，至刚至健，纯阳之体 (Pure Yang)',
              keyMovements: '下截防守 (Arae-makki)、前步中段冲拳、上截防守',
            },
            yinForm: {
              number: 8,
              name: '太极八章 (Taegeuk 8 - Pal-Jang)',
              koreanName: '태극 8장',
              trigramSymbol: '☷',
              trigramLines: [false, false, false],
              trigramName: '坤 (곤 / Gon)',
              hanja: '坤 / 地',
              element: '大地与厚德载物 (Earth & Motherhood)',
              nature: '包容圆满，至柔至顺，纯阴之体 (Pure Yin)',
              keyMovements: '双飞腾空前踢 (Dubal-dangsang)、山形防守、掌底中段推挡',
            },
            philosophicalBalance:
              '太极一章以三道实爻纯阳“乾”卦开启初学者求索之门；太极八章则以三道断爻纯阴“坤”卦沉淀出色带毕业升入黑带的浑厚根基。首尾相连，天地相交。',
          },
          {
            id: 'pair-2',
            pairName: '对立统一第二组：兑泽与欢愉 ↔ 艮山与静笃 (Lake & Joy ↔ Mountain)',
            yangForm: {
              number: 2,
              name: '太极二章 (Taegeuk 2 - Ee-Jang)',
              koreanName: '태극 2장',
              trigramSymbol: '☱',
              trigramLines: [false, true, true],
              trigramName: '兑 (태 / Tae)',
              hanja: '兌 / 澤',
              element: '湖泽与愉悦明澈 (Lake & Joy)',
              nature: '外柔内刚，澄澈见底，从容自若',
              keyMovements: '上段反冲拳 (Olgul-jireugi)、下截防守、内防守',
            },
            yinForm: {
              number: 7,
              name: '太极七章 (Taegeuk 7 - Chil-Jang)',
              koreanName: '태극 7장',
              trigramSymbol: '☶',
              trigramLines: [true, false, false],
              trigramName: '艮 (간 / Gan)',
              hanja: '艮 / 山',
              element: '重山与岿然不动 (Mountain & Stability)',
              nature: '止而不进，沉静如山，不动如磐石',
              keyMovements: '虎步 (Beom-seogi)、剪刀格挡 (Gawi-makki)、膝顶与十字下截',
            },
            philosophicalBalance:
              '太极二章如清澈湖面蕴藏潜在波澜，心境空明而动作柔和；太极七章如巍峨高山雄浑稳固，虎步守中带攻。动静相映，泽山相成。',
          },
          {
            id: 'pair-3',
            pairName: '对立统一第三组：离火与昭明 ↔ 坎水与灵动 (Fire & Sun ↔ Water)',
            yangForm: {
              number: 3,
              name: '太极三章 (Taegeuk 3 - Sam-Jang)',
              koreanName: '태극 3장',
              trigramSymbol: '☲',
              trigramLines: [true, false, true],
              trigramName: '离 (리 / Ri)',
              hanja: '離 / 火',
              element: '烈火与旭日升腾 (Fire & Sun)',
              nature: '迅猛炽热，热情迸发，连续组合突刺',
              keyMovements: '手刀击颈 (Sonnal Mok-chigi)、手刀侧截、连续上步冲拳',
            },
            yinForm: {
              number: 6,
              name: '太极六章 (Taegeuk 6 - Yuk-Jang)',
              koreanName: '태극 6장',
              trigramSymbol: '☵',
              trigramLines: [false, true, false],
              trigramName: '坎 (감 / Gam)',
              hanja: '坎 / 水',
              element: '流水与善利万物 (Water & Fluidity)',
              nature: '随曲就伸，无形化力，避实就虚',
              keyMovements: '单手刀上截 (Han-sonnal Olgul)、旋风踢 (Dollyo-chagi)、掌底格挡',
            },
            philosophicalBalance:
              '离火（太极三章）带来排山倒海的进攻热力与破坏动能；坎水（太极六章）带来川流不息的柔性化解与顺势反击。水火交融，刚柔兼备。',
          },
          {
            id: 'pair-4',
            pairName: '对立统一第四组：震雷与惊雷 ↔ 巽风与潜移 (Thunder ↔ Wind)',
            yangForm: {
              number: 4,
              name: '太极四章 (Taegeuk 4 - Sa-Jang)',
              koreanName: '태극 4장',
              trigramSymbol: '☳',
              trigramLines: [false, false, true],
              trigramName: '震 (진 / Jin)',
              hanja: '震 / 雷',
              element: '惊雷与威势万钧 (Thunder & Power)',
              nature: '临危不惧，霆霓破空，爆发力穿透',
              keyMovements: '侧踢 (Yeop-chagi)、双手刀格挡、贯手直刺 (Pyon-son-kkeut)',
            },
            yinForm: {
              number: 5,
              name: '太极五章 (Taegeuk 5 - O-Jang)',
              koreanName: '태극 5장',
              trigramSymbol: '☴',
              trigramLines: [true, true, false],
              trigramName: '巽 (손 / Son)',
              hanja: '巽 / 風',
              element: '微风与狂飓入微 (Wind & Penetration)',
              nature: '无孔不入，因势赋形，下沉暴击',
              keyMovements: '肘击标靶 (Palkoop-chigi)、铁锤拳下砸 (Mejumeok)、拉引下巴冲拳',
            },
            philosophicalBalance:
              '震雷（太极四章）以雷霆万钧之势正面击溃敌势；巽风（太极五章）以狂风穿林之态贴身肘击直切要害。风雷激荡，万变莫测。',
          },
        ],
        beginnerKibonBridge: {
          title: '初学者启蒙之桥：十级白带到八级黄带进阶路径',
          targetRank: '十级纯白带 (10th Kup) 至 八级黄带 (8th Kup)',
          summary:
            '在正式修习太极一章之前，白带新人必须经历系统性的“基本动作（Kibon Dongjak）”锻造，以夯实腿部骨骼支撑、纠正骨盆中轴并建立空间方位感。',
          components: [
            {
              name: '基本动作 (Kibon Dongjak)',
              koreanName: '기본 동작',
              focus: '骑马步 (Juchum-seogi) 与丹田发力中段直拳',
              description: '建立膝盖微屈、挺胸立腰、丹田吐纳以及左右手反作用力互拉（拉手）的核心动力链。',
            },
            {
              name: '四方冲拳 (Saju-Jireugi)',
              koreanName: '사주 지르기',
              focus: '九十度转体、前弓步（Ap-kubi）进退与直线正拳',
              description: '通过十字型四方演练，使学员初次领悟重心平移、步幅控制与四向防御方位感。',
            },
            {
              name: '四方格挡 (Saju-Makki)',
              koreanName: '사주 막기',
              focus: '下截防守 (Arae-makki) 与中截内防守 (Momtong An-makki)',
              description: '规范双臂在身体前方交叉预备（Chambering）的几何轨迹与发力瞬间的发劲旋转。',
            },
          ],
        },
      }
    case 'ko':
      return {
        title: '태극(Taegeuk)의 본질과 1971년 품새 대전환의 역사',
        koreanTitle: '태극(太極)의 본질과 1971년 품새 대전환',
        definition:
          '"태극(太極)"이란 음과 양이 서로 맞물려 끝없이 생성하고 변화하는 우주의 근본 원리를 뜻합니다. 태권도에서 태극은 대한민국 국기 중앙의 적(양)·청(음) 태극 문양이자, 유급자 8개 공인 품새를 관통하는 핵심 철학입니다.',
        flagSymbolism:
          '대한민국 태극기는 중앙의 태극 원형과 네 모서리의 4괘인 건(하늘), 곤(땅), 감(물), 이(불)로 구성되어 있습니다. 태극 품새는 이 주역 팔괘의 삼라만상 조화 원리를 신체 무예로 형상화한 것입니다.',
        idealsOfTaekwondo: [
          {
            title: '평화주의 (Pacifism)',
            koreanTitle: '평화주의 (Pacifism)',
            description: '태권도의 궁극적 이상은 불필요한 분쟁을 억제하고 엄격한 자제력으로 평화를 수호하는 데 있습니다.',
          },
          {
            title: '일치와 조화 (Unity)',
            koreanTitle: '일치·조화 (Unity)',
            description: '신체와 정신, 호흡의 완전한 합일을 이루며 우주 음양의 상호 대립과 통일을 구현합니다.',
          },
          {
            title: '창조적 정신 (Creative Spirit)',
            koreanTitle: '창조적 정신 (Creative Spirit)',
            description: '끊임없이 새로운 생명력과 적응력을 발휘하며 전진하는 무도인의 개척 정신입니다.',
          },
          {
            title: '백절불굴 (Indomitable Spirit)',
            koreanTitle: '백절불굴 (Indomitable Spirit)',
            description: '어떠한 위기와 역경 앞에서도 굴복하지 않고 불굴의 용기로 신념을 관철합니다.',
          },
          {
            title: '영원성 (Eternity)',
            koreanTitle: '영원성 (Eternity)',
            description: '세대를 초월하여 영구히 전승되는 무도 이념과 우주 섭리의 영속성을 상징합니다.',
          },
        ],
        jooyeokPhilosophy: {
          title: '주역(周易 / Jooyeok)과 복희(伏羲) 3,300년의 철학적 계승',
          subtitle: '음양(陰陽)과 팔괘(八卦) 대원환의 우주 원리',
          summary: '태극 품새는 동양에서 인간 삶의 근본 의미를 밝힌 최고의 고전인 《주역(周易)》의 심오한 사상에 굳게 뿌리를 두고 있습니다.',
          bookOfChangesOrigin: '《주역》(역경/I Ching)은 약 3,300년 전 고대 복희씨(Fuh Hi)에 의해 처음 창안되었으며, 수백 년에 걸쳐 성현들에 의해 완성되었습니다.',
          umYangMetaphysics: '주역은 끊임없이 변화하는 삼라만상의 현상 속에 내재된 도덕적 조화를 설명하며, 음(Um)과 양(Yang)이라는 두 형이상학적 힘이 결합하여 만물을 생성하는 우주의 원리를 밝힙니다.',
          eightConceptsCircle: '복희씨는 음과 양의 조합으로부터 8개의 괘(卦)를 도출하여 원형으로 배치함으로써 조화로운 상호 관계와 고유한 성격을 규정하였습니다.',
          keonGonDialectic: '건(Keon, 순양/하늘과 빛)과 곤(Gon, 순음/대지와 수용)은 대원환 변증법을 이해하는 핵심 열쇠입니다. 곤 속에서 건의 본질이 실현되고, 건 속에서 곤의 본질이 완성됩니다.',
          koreanFlagSynthesis: '팔괘 중 건(하늘), 곤(땅), 리(불), 감(물)의 4괘와 중앙의 음양 태극 문양이 어우러져 대한민국 국기인 태극기(Taeguk-ki)를 이룹니다.',
          trigramManifestation: '8개 태극 품새는 이 8개 괘의 철학적 개념을 공격, 방어, 전후 보법, 속도, 완급, 격파 강도에 정밀하게 투영하였습니다.',
        },
        pre1971PalgwaeHistory: {
          title: '1971년 품새 대전환: 팔괘(八卦) 품새에서 태극(太極) 품새로의 도약',
          summary:
            '1971년 이전 국기원과 대한태권도협회는 주역의 8괘를 본뜬 "팔괘 1~8장"을 공식 유급자 품새로 수련하였습니다.',
          whyReplaced:
            '1960년대 후반 기간 9대 관의 대통합이 진행되면서, 기술위원회는 기존 팔괘 품새에 일본 가라테 형(型)의 무거운 보법과 직선적 잔재가 과도하게 남아있음을 지적하였습니다. 이에 1971년 이종우 관장을 비롯한 KTA 품새제정위원회는 현대 스포츠 겨루기에 부합하고 한국 고유의 보법과 자연스러운 리듬을 담은 "태극 1~8장"을 전격 제정하여 단일 교본으로 채택하였습니다.',
          keyDifferences: [
            '팔괘 품새는 깊은 앞굽이와 뒷굽이 위주의 무겁고 정적인 직선 공방이 주를 이룸.',
            '태극 품새는 자연스러운 앞서기 보법, 연속 발차기 연계, 리드미컬한 스피드와 겨루기 실전 감각을 도입함.',
            '팔괘의 음양 사상은 그대로 계승하되, 현대 운동생리학과 인체역학을 완벽히 접목함.',
          ],
        },
        theFourDualityPairs: [
          {
            id: 'pair-1',
            pairName: '대립과 조화 제1쌍: 하늘(건) ↔ 땅(곤) (Heaven & Light ↔ Earth)',
            yangForm: {
              number: 1,
              name: '태극 1장 (Taegeuk 1 - Il-Jang)',
              koreanName: '태극 1장',
              trigramSymbol: '☰',
              trigramLines: [true, true, true],
              trigramName: '건 (乾 / Keon)',
              hanja: '乾 / 天',
              element: '하늘과 빛, 우주의 시작 (Heaven & Light)',
              nature: '순양(純陽), 무한한 창조력과 무도의 참된 출발',
              keyMovements: '아래막기, 앞서기 몸통반대지르기, 얼굴막기',
            },
            yinForm: {
              number: 8,
              name: '태극 8장 (Taegeuk 8 - Pal-Jang)',
              koreanName: '태극 8장',
              trigramSymbol: '☷',
              trigramLines: [false, false, false],
              trigramName: '곤 (坤 / Gon)',
              hanja: '坤 / 地',
              element: '땅과 대지, 유급자의 완성 (Earth & Completion)',
              nature: '순음(純陰), 모든 것을 포용하고 길러내는 대지의 힘',
              keyMovements: '두발당성 앞차기, 산틀막기, 바탕손 몸통막기',
            },
            philosophicalBalance:
              '태극 1장이 양효 3개의 순양 건괘로 품새의 문을 열면, 태극 8장은 음효 3개의 순음 곤괘로 대지처럼 단단하게 유급자 과정을 마무리하고 1단으로 도약합니다.',
          },
          {
            id: 'pair-2',
            pairName: '대립과 조화 제2쌍: 연못(태) ↔ 산(간) (Lake & Joy ↔ Mountain)',
            yangForm: {
              number: 2,
              name: '태극 2장 (Taegeuk 2 - Ee-Jang)',
              koreanName: '태극 2장',
              trigramSymbol: '☱',
              trigramLines: [false, true, true],
              trigramName: '태 (兌 / Tae)',
              hanja: '兌 / 澤',
              element: '연못과 기쁨, 깊은 고요 (Lake & Joy)',
              nature: '외유내강(外柔內剛), 표면은 잔잔하나 속은 깊고 단단함',
              keyMovements: '얼굴반대지르기, 아래막기, 몸통안막기',
            },
            yinForm: {
              number: 7,
              name: '태극 7장 (Taegeuk 7 - Chil-Jang)',
              koreanName: '태극 7장',
              trigramSymbol: '☶',
              trigramLines: [true, false, false],
              trigramName: '간 (艮 / Gan)',
              hanja: '艮 / 山',
              element: '산과 흔들리지 않는 굳건함 (Mountain & Steadfastness)',
              nature: '중후하고 굳건하여 어떠한 유혹과 위기에도 요동하지 않음',
              keyMovements: '범서기, 가위막기, 무릎치기, 젖혀지르기',
            },
            philosophicalBalance:
              '태극 2장의 고요하고 맑은 연못의 기쁨은 태극 7장의 웅장하고 흔들림 없는 태산의 위엄과 완벽한 짝을 이룹니다.',
          },
          {
            id: 'pair-3',
            pairName: '대립과 조화 제3쌍: 불(리) ↔ 물(감) (Fire & Sun ↔ Water)',
            yangForm: {
              number: 3,
              name: '태극 3장 (Taegeuk 3 - Sam-Jang)',
              koreanName: '태극 3장',
              trigramSymbol: '☲',
              trigramLines: [true, false, true],
              trigramName: '리 (離 / Ri)',
              hanja: '離 / 火',
              element: '불과 태양, 타오르는 열정 (Fire & Sun)',
              nature: '맹렬하고 화려하며 끊임없는 연속 공격의 박진감',
              keyMovements: '손날 목치기, 손날막기, 연속 지르기',
            },
            yinForm: {
              number: 6,
              name: '태극 6장 (Taegeuk 6 - Yuk-Jang)',
              koreanName: '태극 6장',
              trigramSymbol: '☵',
              trigramLines: [false, true, false],
              trigramName: '감 (坎 / Gam)',
              hanja: '坎 / 水',
              element: '물과 유연한 흐름 (Water & Fluidity)',
              nature: '장애물을 만나도 멈추지 않고 흘러 바다에 이르는 유연함',
              keyMovements: '한손날 얼굴 바깥막기, 돌려차기, 바탕손 몸통막기',
            },
            philosophicalBalance:
              '불(태극 3장)의 폭발적인 파괴력과 전진성은 물(태극 6장)의 유연한 회피와 부드러운 순응성을 만나 수화기제(水火旣濟)의 완전한 균형을 이룹니다.',
          },
          {
            id: 'pair-4',
            pairName: '대립과 조화 제4쌍: 우레(진) ↔ 바람(손) (Thunder ↔ Wind)',
            yangForm: {
              number: 4,
              name: '태극 4장 (Taegeuk 4 - Sa-Jang)',
              koreanName: '태극 4장',
              trigramSymbol: '☳',
              trigramLines: [false, false, true],
              trigramName: '진 (震 / Jin)',
              hanja: '震 / 雷',
              element: '우레와 벽력같은 위력 (Thunder & Power)',
              nature: '어떠한 공포 앞에서도 당당히 맞서는 불굴의 용기와 기백',
              keyMovements: '옆차기, 제비품 목치기, 편손끝 찌르기',
            },
            yinForm: {
              number: 5,
              name: '태극 5장 (Taegeuk 5 - O-Jang)',
              koreanName: '태극 5장',
              trigramSymbol: '☴',
              trigramLines: [true, true, false],
              trigramName: '손 (巽 / Son)',
              hanja: '巽 / 風',
              element: '바람과 스며드는 침투력 (Wind & Penetration)',
              nature: '부드러운 산들바람이자 만물을 휩쓰는 폭풍의 기세',
              keyMovements: '팔굽 돌려치기, 메주먹 내려치기, 당겨 턱지르기',
            },
            philosophicalBalance:
              '우레(태극 4장)의 순간적이고 직선적인 충격파는 바람(태극 5장)의 연속적이고 회전하는 내부 침투력과 조화를 이루어 공방의 일체를 완성합니다.',
          },
        ],
        beginnerKibonBridge: {
          title: '초심자 입문 브릿지: 10급 흰 띠에서 8급 노란 띠로의 기초 확립',
          targetRank: '10급 흰 띠(White Belt) ~ 8급 노란 띠(Yellow Belt)',
          summary:
            '태극 1장을 배우기 전 초심자는 신체 균형과 올바른 호흡, 중심 이동을 체득하기 위해 기본동작과 사방 지르기·막기를 필수로 수련합니다.',
          components: [
            {
              name: '기본동작 (Kibon Dongjak)',
              koreanName: '기본 동작',
              focus: '주춤서기 및 단전 몸통 지르기',
              description: '무릎의 탄력과 척추의 곧은 정렬, 지르는 손과 당기는 손의 반동력을 단련합니다.',
            },
            {
              name: '사주 지르기 (Four-Directional Punching)',
              koreanName: '사주 지르기',
              focus: '앞굽이 보법 및 90도 회전 방향 전환',
              description: '동서남북 4방향으로 전진하며 정확한 앞굽이 보폭과 명치 지르기를 연습합니다.',
            },
            {
              name: '사주 막기 (Four-Directional Blocking)',
              koreanName: '사주 막기',
              focus: '아래막기 및 몸통안막기 예비동작(Chambering)',
              description: '방어 기술의 어깨 교차 궤적과 타격 순간의 손목 회전을 익힙니다.',
            },
          ],
        },
      }
    default:
      return {
        title: 'What is Taegeuk? Philosophy, Trigrams & The Historic 1971 Evolution',
        koreanTitle: '태극(太極)의 본질과 1971년 품새 대전환',
        definition:
          'As a word, "Taegeuk" refers to the ultimate unity of opposites—the perpetual dance of Yin and Yang (Eum & Yang) creating universal harmony. Taegeuk is also the name of the red (Yang) and blue (Eum) circle at the heart of the South Korean flag.',
        flagSymbolism:
          'The South Korean flag (Taegeukgi) features the central Taegeuk surrounded by four primary trigrams from the ancient Book of Changes (I Ching): Keon (Heaven), Gon (Earth), Gam (Water), and Ri (Fire), symbolizing cosmic order and perpetual balance.',
        idealsOfTaekwondo: [
          {
            title: 'Pacifism',
            koreanTitle: '평화주의 (Pacifism)',
            description:
              'The martial art of Taekwondo is fundamentally dedicated to avoiding unjust conflict, neutralizing violence, and preserving peace through disciplined self-restraint.',
          },
          {
            title: 'Unity',
            koreanTitle: '일치·조화 (Unity)',
            description:
              'Harmonizing mind, body, and spirit into a single focused impulse, reflecting the universal union of opposing metaphysical forces (Um & Yang).',
          },
          {
            title: 'Creative Spirit',
            koreanTitle: '창조적 정신 (Creative Spirit)',
            description:
              'The continuous genesis of energy, adaptability, and constructive power that propitiates life and forward martial progression.',
          },
          {
            title: 'Indomitable Spirit',
            koreanTitle: '백절불굴 (Indomitable Spirit)',
            description:
              'Unshakeable courage and resilience in the face of danger or adversity, persevering through every hardship without compromise.',
          },
          {
            title: 'Eternity',
            koreanTitle: '영원성 (Eternity)',
            description:
              'The timeless continuity of martial principles and cosmic rhythm that outlasts the individual practitioner and connects all generations.',
          },
        ],
        jooyeokPhilosophy: {
          title: 'The Jooyeok (Book of Changes) & Fuh Hi Lineage',
          subtitle: '3,300-Year Ancient Heritage of Um-Yang Metaphysics',
          summary:
            'Taegeuk stems from, and is bound to the ideas found in one of the noblest documents in the Orient addressing the meaning of life—the Jooyeok (Book of Changes / I Ching).',
          bookOfChangesOrigin:
            'The Book of Changes, also known as the I Ching, was originally written in China by Fuh Hi approximately 3,300 years ago and has been added to over a period of hundreds of years by several Chinese sages.',
          umYangMetaphysics:
            'The book describes a theory in which the phenomenon of constant, shifting change—which is the human condition—is shown to possess a moral harmony. The theory analyses the process in which two opposing metaphysical forces called um and yang (the Korean names for yin and yang) combine to generate new combinations. These are seen as the conceptual mechanism which propitiate life and the universe.',
          eightConceptsCircle:
            'Fuh Hi identified eight subsequent combinations derived from the two primal forces, um and yang (Diagram A & B). He named them, arranged them in a circle to illustrate their harmonious relationships, and designated the character of each. These eight concepts manifest themselves in all things, including our human destiny.',
          keonGonDialectic:
            'Gon (the eighth, pure yang/receptivity) and Keon (the first, pure um/creative force) are the keys to understanding the dialectics of the great circle. Opposite Keon, Gon symbolizes the yielding earth which provides the substance and the limitations through which Keon passes. In Gon is realized the nature of Keon; and in Keon, the nature of Gon. Each defines the other in the paradox from which creation itself is congealed into reality, and into time.',
          koreanFlagSynthesis:
            'Four of the trigrams—Keon, Gon, Ri, and Gam—together with the Korean symbol for um and yang make up the Korean National Flag, the Taeguk-ki, symbolizing ultimate cosmic equilibrium.',
          trigramManifestation:
            'Each of the Taegeuk poomsae is based on one of these concepts and integrates the concept into the methods of attack, defence, forward and backward movements, speed, control, and intensity of the actions.',
        },
        pre1971PalgwaeHistory: {
          title: 'The Pre-1971 Transition: From Palgwae to Taegeuk Poomsae',
          summary:
            'Before 1971, Kukkiwon and the Korea Taekwondo Association (KTA) taught 8 colored belt patterns called the "Palgwae" forms. "Pal" means eight, and "Gwae" means trigram.',
          whyReplaced:
            'In the late 1960s, as the Nine Kwans unified under the KTA, technical masters noted that the Palgwae forms retained rigid, mechanical karate-kata influences. In 1971, the KTA Poomsae Standardization Committee created the Taegeuk 1–8 series, introducing natural walking stances (Ap-seogi), fluid kicking combinations, and rhythmic speed designed to prepare students for dynamic Olympic sparring (Kyorugi).',
          keyDifferences: [
            'Palgwae emphasized deep rigid forward and back stances with abrupt mechanical pauses.',
            'Taegeuk introduced natural upright stances, smooth transitions, and direct sport sparring applicability.',
            'Taegeuk preserved the same 8 I Ching trigrams and cosmic symbolism, but elevated biomechanical efficiency.',
          ],
        },
        theFourDualityPairs: [
          {
            id: 'pair-1',
            pairName: 'Opposition Pair 1: Heaven & Light ↔ Earth (Keon ☰ ↔ Gon ☷)',
            yangForm: {
              number: 1,
              name: 'Taegeuk 1 (Il-Jang)',
              koreanName: '태극 1장',
              trigramSymbol: '☰',
              trigramLines: [true, true, true],
              trigramName: 'Keon / Geon (건)',
              hanja: '乾 / 天',
              element: 'Heaven & Light (Genesis of Creation)',
              nature: 'Pure Yang (Creative Origin & Direct Sincerity)',
              keyMovements: 'Arae-makki, Ap-seogi, Momtong-jireugi, Olgul-makki',
            },
            yinForm: {
              number: 8,
              name: 'Taegeuk 8 (Pal-Jang)',
              koreanName: '태극 8장',
              trigramSymbol: '☷',
              trigramLines: [false, false, false],
              trigramName: 'Gon (곤)',
              hanja: '坤 / 地',
              element: 'Earth & Receptive Rootedness',
              nature: 'Pure Yin (Receptive Completion & Solid Grounding)',
              keyMovements: 'Dubal-dangsang ap-chagi (Jumping kick), Santul-makki, Batangson',
            },
            philosophicalBalance:
              'Taegeuk 1 opens the practitioner’s journey with the three unbroken lines of Heaven (Keon ☰), while Taegeuk 8 completes the color-belt curriculum with the three broken lines of Earth (Gon ☷). Beginning and end unite.',
          },
          {
            id: 'pair-2',
            pairName: 'Opposition Pair 2: Lake & Joy ↔ Mountain & Stillness (Tae ☱ ↔ Gan ☶)',
            yangForm: {
              number: 2,
              name: 'Taegeuk 2 (Ee-Jang)',
              koreanName: '태극 2장',
              trigramSymbol: '☱',
              trigramLines: [false, true, true],
              trigramName: 'Tae (태)',
              hanja: '兌 / 澤',
              element: 'Lake & Calm Serenity',
              nature: 'Gentle Outside, Firm Inside (Joyful Clarity)',
              keyMovements: 'Olgul-jireugi, Arae-makki, Momtong An-makki',
            },
            yinForm: {
              number: 7,
              name: 'Taegeuk 7 (Chil-Jang)',
              koreanName: '태극 7장',
              trigramSymbol: '☶',
              trigramLines: [true, false, false],
              trigramName: 'Gan (간)',
              hanja: '艮 / 山',
              element: 'Mountain & Immovable Weight',
              nature: 'Steadfast Stillness & Unshakeable Composure',
              keyMovements: 'Beom-seogi (Tiger Stance), Gawi-makki (Scissor Block), Knee strike',
            },
            philosophicalBalance:
              'The calm, smiling surface of the lake (Taegeuk 2) mirrors the towering, unyielding mountain (Taegeuk 7). Emotional serenity balances physical steadfastness.',
          },
          {
            id: 'pair-3',
            pairName: 'Opposition Pair 3: Fire & Sun ↔ Water & Flow (Ri ☲ ↔ Gam ☵)',
            yangForm: {
              number: 3,
              name: 'Taegeuk 3 (Sam-Jang)',
              koreanName: '태극 3장',
              trigramSymbol: '☲',
              trigramLines: [true, false, true],
              trigramName: 'Ri / Ra (리)',
              hanja: '離 / 火',
              element: 'Fire & Burning Passion',
              nature: 'Fierce, Radiant, Explosive Combinations',
              keyMovements: 'Sonnal Mok-chigi (Knife-hand Neck Strike), Sonnal-makki, Multi-punches',
            },
            yinForm: {
              number: 6,
              name: 'Taegeuk 6 (Yuk-Jang)',
              koreanName: '태극 6장',
              trigramSymbol: '☵',
              trigramLines: [false, true, false],
              trigramName: 'Gam (감)',
              hanja: '坎 / 水',
              element: 'Water & Fluid Adaptation',
              nature: 'Cool, Constant Flow Surmounting Obstacles',
              keyMovements: 'Han-sonnal Olgul Bakkat-makki, Dollyo-chagi (Turning Kick), Palm blocks',
            },
            philosophicalBalance:
              'Fire (Taegeuk 3) provides burning forward drive and piercing strikes; Water (Taegeuk 6) provides fluid evasiveness, flowing around barriers without stopping.',
          },
          {
            id: 'pair-4',
            pairName: 'Opposition Pair 4: Thunder ↔ Wind (Jin ☳ ↔ Son ☴)',
            yangForm: {
              number: 4,
              name: 'Taegeuk 4 (Sa-Jang)',
              koreanName: '태극 4장',
              trigramSymbol: '☳',
              trigramLines: [false, false, true],
              trigramName: 'Jin (진)',
              hanja: '震 / 雷',
              element: 'Thunder & Shockwave Power',
              nature: 'Unshakable Bravery Facing Danger',
              keyMovements: 'Side kicks (Yeop-chagi), Double knife-hand block, Spear-hand strike',
            },
            yinForm: {
              number: 5,
              name: 'Taegeuk 5 (O-Jang)',
              koreanName: '태극 5장',
              trigramSymbol: '☴',
              trigramLines: [true, true, false],
              trigramName: 'Son (손)',
              hanja: '巽 / 風',
              element: 'Wind & Gentle Penetration',
              nature: 'Subtle Infiltration Turning into Gale-force Blows',
              keyMovements: 'Palkoop-chigi (Elbow strikes), Downward hammer-fist, Jaw uppercut',
            },
            philosophicalBalance:
              'Thunder (Taegeuk 4) strikes with sudden, jarring concussive power; Wind (Taegeuk 5) infiltrates defenses softly before unleashing close-quarter devastation.',
          },
        ],
        beginnerKibonBridge: {
          title: 'The Beginner Foundation: Progressing from 10th Kup to 8th Kup',
          targetRank: 'White Belt (10th Kup) to Yellow Belt (8th Kup)',
          summary:
            'Before starting Taegeuk 1 (Il-Jang), beginners learn fundamental foundational drills—Kibon Dongjak, Saju-Jireugi, and Saju-Makki—to master posture, breathing, and four-directional coordination.',
          components: [
            {
              name: 'Kibon Dongjak (Basic Movements)',
              koreanName: '기본 동작',
              focus: 'Horse-riding stance (Juchum-seogi) & Solar Plexus Punches',
              description: 'Develops leg endurance, spinal alignment, and explosive opposite-hand recoil (chambering).',
            },
            {
              name: 'Saju-Jireugi (Four-Directional Punching)',
              koreanName: '사주 지르기',
              focus: 'Forward Stance (Ap-kubi) & 90-degree pivot turns',
              description: 'Teaches linear footwork stepping into all four compass directions while maintaining punch targeting.',
            },
            {
              name: 'Saju-Makki (Four-Directional Blocking)',
              koreanName: '사주 막기',
              focus: 'Low Block (Arae-makki) & Inside Block (An-makki)',
              description: 'Introduces pre-deflection arm chambering and defensive pivot rotations before entering Taegeuk 1.',
            },
          ],
        },
      }
  }
}

// -----------------------------------------------------------------------------
// BLACK BELT 1ST TO 9TH DAN ASCENSION DOSSIER WITH ETYMOLOGY CORRECTIONS
// -----------------------------------------------------------------------------
export interface BlackBeltDossierItem {
  danRank: string
  name: string
  koreanName: string
  hanja: string
  symbolism: string
  keyTechniques: string
  historicalCorrectionNote?: string
  philosophicalEssence: string
}

export function getLocalizedBlackBeltDossier(lang: string): BlackBeltDossierItem[] {
  switch (lang) {
    case 'km':
      return [
        {
          danRank: '1st Dan',
          name: 'Koryo (កូរ្យ៉ូ)',
          koreanName: '고려',
          hanja: '高麗',
          symbolism: 'រាជវង្សកូរ្យ៉ូ (៩១៨–១៣៩២ គ.ស.) & ស្មារតីអ្នកចម្បាំងមិនចុះចាញ់',
          keyTechniques: 'ទាត់ផ្អៀងទ្វេ (Double Side Kick), កាប់កកូនកាំបិត (Sonnal Mok-chigi), រារាំងក្រោមទ្វេ',
          philosophicalEssence: 'ភាពរឹងមាំខាងវិញ្ញាណ និងភាពក្លាហានរបស់អ្នកចម្បាំងការពារជាតិពីការឈ្លានពានរបស់ម៉ុងហ្គោល។',
        },
        {
          danRank: '2nd Dan',
          name: 'Keumgang (គឹមហ្កាង)',
          koreanName: '금강',
          hanja: '金剛',
          symbolism: 'ពេជ្រដែលមិនអាចបំបែកបាន & ភ្នំពេជ្រ (Geumgangsan)',
          keyTechniques: 'San-bakkat-makki (រារាំងលើកភ្នំ), Hakdari-seogi (ជំហរសត្វក្រៀល), Batangson-chigi',
          philosophicalEssence: 'ភាពរឹងមាំ និងស្ថេរភាពខាងសីលធម៌ដូចពេជ្រ ដែលមិនអាចកម្ទេចដោយការល្បួង ឬការភ័យខ្លាច។',
        },
        {
          danRank: '3rd Dan',
          name: 'Taebaek (ថែបែក)',
          koreanName: '태백',
          hanja: '太白',
          symbolism: 'ភ្នំភ្លឺថ្លាពិសិដ្ឋ & ទីកន្លែងកំណើតនៃប្រជាជាតិកូរ៉េ (Dangun)',
          keyTechniques: 'Keumgang-yeop-jireugi, Santeul-makki, Sonnal Arae-hecho-makki',
          philosophicalEssence: 'ពន្លឺព្រះអាទិត្យពិសិដ្ឋដែលបំភ្លឺមនុស្សជាតិ និងឧត្តមគតិ "Hongik Ingan" (បម្រើមនុស្សជាតិ)។',
        },
        {
          danRank: '4th Dan',
          name: 'Pyongwon (ព្យុងវ៉ុន)',
          koreanName: '평원',
          hanja: '平原',
          symbolism: 'វាលទំនាបដ៏ធំល្វឹងល្វើយ & ប្រភពនៃជីវិត',
          keyTechniques: 'Hakdari-seogi, Sonnal Geumgang-makki, Palkoop Pyojeok-chigi',
          philosophicalEssence: 'ទំហំចិត្តទូលាយដូចវាលស្មៅដែលចិញ្ចឹមបីបាច់ជីវិតគ្រប់ប្រភេទដោយសន្តិភាព និងការអត់ឱន។',
        },
        {
          danRank: '5th Dan',
          name: 'Shipjin (ស៊ីបជីន)',
          koreanName: '십진',
          hanja: '十進',
          symbolism: 'ប្រព័ន្ធទសភាគ & និមិត្តសញ្ញាអាយុយឺនយូរទាំង ១០ (Shipjangsaeng)',
          keyTechniques: 'Hwangso-makki (រារាំងស្នែងគោ), Bawi-milgi (រុញផ្ទាំងថ្មយឺត ៨ វិនាទី), Deungjumeok',
          philosophicalEssence: 'ការរីកចម្រើនគ្មានទីបញ្ចប់ និងការអភិវឌ្ឍដោយឥតឈប់ឈរតាមច្បាប់ធម្មជាតិនៃភាពយូរអង្វែង។',
        },
        {
          danRank: '6th Dan',
          name: 'Jitae (ជីថែ)',
          koreanName: '지태',
          hanja: '地跆',
          symbolism: 'ផែនដី និងជំហានរបស់មនុស្សលោក',
          keyTechniques: 'Pyonsonkkeut Sewo-jireugi (ចាក់ម្រាមដៃ), Palkup Pyojeok-chigi, ជំហានទាត់កម្ទេច',
          philosophicalEssence: 'ការឈរយ៉ាងរឹងមាំលើផែនដីដោយយុត្តិធម៌ និងការតស៊ូជំនះឧបសគ្គក្នុងជីវិតមនុស្ស។',
        },
        {
          danRank: '7th Dan',
          name: 'Cheonkwon (ឆនក្វន់)',
          koreanName: '천권',
          hanja: '天拳',
          symbolism: 'អំណាច និងមហិទ្ធិឫទ្ធិនៃមេឃា',
          keyTechniques: 'Nalgae-pyeogi (ចលនាស្លាបឥន្ទ្រី), Sosum-jireugi (ដាល់ឡើងលើ), Taesan-milgi',
          philosophicalEssence: 'ការមើលពិភពលោកពីទស្សនៈដ៏ខ្ពង់ខ្ពស់នៃមេឃា និងការលះបង់នូវអញ ego ផ្ទាល់ខ្លួន។',
        },
        {
          danRank: '8th Dan',
          name: 'Hansoo (ហាន់ស៊ូ)',
          koreanName: '한수',
          hanja: '漢水',
          symbolism: 'ទឹកជាប្រភពនៃជីវិត និងភាពបត់បែនគ្មានដែនកំណត់',
          keyTechniques: 'Hansu Tongmilgi, Sonnal Hecho-makki, Mejumeok Pyojeok-chigi',
          historicalCorrectionNote: 'ឈ្មោះផ្លូវការគឺ "Hansoo" (មិនមែន Haelo ឡើយ ដែលជាកំហុសអក្ខរាវិរុទ្ធទូទៅ)។',
          philosophicalEssence: 'ធ្វើខ្លួនដូចទឹក—ទន់ភ្លន់ បត់បែនតាមកាលៈទេសៈ ប៉ុន្តែមានថាមពលកម្ទេចថ្មភ្នំបាន។',
        },
        {
          danRank: '9th Dan',
          name: 'Ilyo (អ៊ីលយ៉ូ)',
          koreanName: '일여',
          hanja: '一如',
          symbolism: 'ភាពជាតែមួយនៃកាយ និងចិត្ត (Buddhist Non-Duality)',
          keyTechniques: 'Bo-jumeok, O-ja-makki, Hakdari-seogi, Naeryeo-jireugi',
          historicalCorrectionNote: 'Ilyo គឺជាមេគុនដាច់ដោយឡែកសម្រាប់ 9th Dan (ខុសពី 5th Dan Shipjin)។',
          philosophicalEssence: 'ការរួបរួមជាធ្លុងមួយរវាងរាងកាយ និងវិញ្ញាណ តាមមាគ៌ាទស្សនវិជ្ជាព្រះសង្ឃ Wonhyo "Ilsim"។',
        },
      ]
    case 'zh':
      return [
        {
          danRank: '黑带一段 (1st Dan)',
          name: '高丽 (Koryo)',
          koreanName: '고려',
          hanja: '高麗',
          symbolism: '高丽王朝（公元918–1392年）与抵御外敌的不屈尚武精神',
          keyTechniques: '双侧踢 (Double Side Kick)、手刀侧击颈部 (Sonnal Mok-chigi)、燕子服下段截击',
          philosophicalEssence: '继承古代高丽军民抵御强敌的刚毅民族气节，以双脚如刀斧般捍卫正义。',
        },
        {
          danRank: '黑带二段 (2nd Dan)',
          name: '金刚 (Keumgang)',
          koreanName: '금강',
          hanja: '金剛',
          symbolism: '金刚石之坚不可摧与金刚山之巍峨雄壮',
          keyTechniques: '山形格挡 (San-bakkat-makki)、鹤腿步 (Hakdari-seogi)、金刚冲拳',
          philosophicalEssence: '如金刚杵般粉碎一切迷妄邪念，身姿沉重如岳，防守如铜墙铁壁。',
        },
        {
          danRank: '黑带三段 (3rd Dan)',
          name: '太白 (Taebaek)',
          koreanName: '태백',
          hanja: '太白',
          symbolism: '檀君开国之太白圣山与昭明天下之浩然正气',
          keyTechniques: '金刚侧冲拳 (Keumgang-yeop-jireugi)、山形侧截、手刀下段分散格挡',
          philosophicalEssence: '“弘益人间”之开国明光，照亮武道弟子内心，追求光明正大的浩然正气。',
        },
        {
          danRank: '黑带四段 (4th Dan)',
          name: '平原 (Pyongwon)',
          koreanName: '평원',
          hanja: '平原',
          symbolism: '一望无际之苍茫平原与滋养万物之生命母体',
          keyTechniques: '交叉鹤腿步、手刀金刚防守、标靶肘击 (Palkoop Pyojeok-chigi)',
          philosophicalEssence: '如平原般虚怀若谷，胸襟坦荡开阔，以平和之心容纳四海生灵。',
        },
        {
          danRank: '黑带五段 (5th Dan)',
          name: '十进 (Shipjin)',
          koreanName: '십진',
          hanja: '十進',
          symbolism: '十进制无尽递增与东方传统十长生（日、月、山、水、石、松、草、龟、鹤、鹿）',
          keyTechniques: '牛角防守 (Hwangso-makki)、八秒极慢推岩势 (Bawi-milgi)、背拳中段击',
          philosophicalEssence: '顺应天道法则循环往复，以丹田沉稳吐纳修持生命绵长之定力。',
        },
        {
          danRank: '黑带六段 (6th Dan)',
          name: '地跆 (Jitae)',
          koreanName: '지태',
          hanja: '地跆',
          symbolism: '厚重大地与人类直立行走之生命足迹',
          keyTechniques: '立掌贯手穿刺 (Pyonsonkkeut Sewo-jireugi)、腾空前踢、下踏重击',
          philosophicalEssence: '双足稳踏厚重大地，承受人间磨难，顶天立地，仰望浩瀚苍穹。',
        },
        {
          danRank: '黑带七段 (7th Dan)',
          name: '天拳 (Cheonkwon)',
          koreanName: '천권',
          hanja: '天拳',
          symbolism: '苍天之威严浩荡与宇宙运行之无上主宰',
          keyTechniques: '雄鹰展翼势 (Nalgae-pyeogi)、冲天升天击 (Sosum-jireugi)、推泰山势',
          philosophicalEssence: '摆脱世俗恩怨纠缠，自至高天穹审视人间万象，心如虚空浩荡无垠。',
        },
        {
          danRank: '黑带八段 (8th Dan)',
          name: '汉水 (Hansoo)',
          koreanName: '한수',
          hanja: '漢水',
          symbolism: '生命之源泉活水与滴水穿石之包容力量',
          keyTechniques: '汉水通推势 (Hansu Tongmilgi)、手刀分截、标靶铁锤拳击',
          historicalCorrectionNote: '重要考据：正统品势名为“汉水(Hansoo)”，非部分旧译之“Haelo/海浪”笔误。',
          philosophicalEssence: '上善若水，水善利万物而不争，处于众人之所恶，故几于道。柔弱胜刚强。',
        },
        {
          danRank: '黑带九段 (9th Dan)',
          name: '一如 (Ilyo)',
          koreanName: '일여',
          hanja: '一如',
          symbolism: '新罗元晓大师“一心(Ilsim)”之体认与身心不二之武道至境',
          keyTechniques: '宝拳预备势 (Bo-jumeok)、万字防守 (O-ja-makki)、鹤腿步单手下击',
          historicalCorrectionNote: '重要考据：九段至尊品势为“一如(Ilyo)”，代表佛学真如境界，与五段十进严格区分。',
          philosophicalEssence: '技进乎道，身心一如。动作与意念毫无滞碍，生死善恶皆归于虚静一如。',
        },
      ]
    case 'ko':
      return [
        {
          danRank: '1단 (1st Dan)',
          name: '고려 (Koryo)',
          koreanName: '고려',
          hanja: '高麗',
          symbolism: '고려 왕조(918~1392)의 선비·무인 정신과 국난 극복의 기백',
          keyTechniques: '이단 옆차기, 손날 목치기, 칼재비, 손날 아래막기',
          philosophicalEssence: '외침에 굴하지 않고 국권을 지켜낸 고려 무인의 강인한 호국 정신 계승.',
        },
        {
          danRank: '2단 (2nd Dan)',
          name: '금강 (Keumgang)',
          koreanName: '금강',
          hanja: '金剛',
          symbolism: '단단하여 부서지지 않는 다이아몬드와 금강산의 빼어난 웅장미',
          keyTechniques: '산틀막기, 학다리서기 금강막기, 바탕손 턱치기',
          philosophicalEssence: '불의에 흔들리지 않는 내적 신념과 금강역사의 위엄 있는 수호 의지.',
        },
        {
          danRank: '3단 (3rd Dan)',
          name: '태백 (Taebaek)',
          koreanName: '태백',
          hanja: '太白',
          symbolism: '단군조선의 발상지인 백두산(태백산)과 광명(光明)의 개천 사상',
          keyTechniques: '금강 옆지르기, 산틀막기, 손날 아래헤쳐막기',
          philosophicalEssence: '널리 인간을 이롭게 한다는 홍익인간(弘益人間)의 숭고한 건국 이념 체현.',
        },
        {
          danRank: '4단 (4th Dan)',
          name: '평원 (Pyongwon)',
          koreanName: '평원',
          hanja: '平原',
          symbolism: '아득하게 넓은 평야와 생명의 젖줄인 광활한 대지',
          keyTechniques: '학다리서기, 꺾음서기, 팔굽 표적치기, 손날금강막기',
          philosophicalEssence: '광활한 평야처럼 모든 것을 포용하고 관용하는 사범의 평화로운 심경.',
        },
        {
          danRank: '5단 (5th Dan)',
          name: '십진 (Shipjin)',
          koreanName: '십진',
          hanja: '十進',
          symbolism: '십진법의 무한 발전과 십장생(十長生)의 불로장생 사상',
          keyTechniques: '황소막기, 8초 느린 바위밀기, 등주먹 엎어치기',
          philosophicalEssence: '질서정연한 우주의 수리적 법칙과 끝없는 자기 완성을 향한 묵묵한 정진.',
        },
        {
          danRank: '6단 (6th Dan)',
          name: '지태 (Jitae)',
          koreanName: '지태',
          hanja: '地跆',
          symbolism: '두 발로 대지를 딛고 선 인간의 치열한 삶의 터전',
          keyTechniques: '편손끝 세워찌르기, 도약 발차기, 무릎 꺾기',
          philosophicalEssence: '땅에서 태어나 땅으로 돌아가는 인간의 희로애락을 당당하게 극복하는 무도혼.',
        },
        {
          danRank: '7단 (7th Dan)',
          name: '천권 (Cheonkwon)',
          koreanName: '천권',
          hanja: '天拳',
          symbolism: '만물을 굽어살피는 하늘의 절대적 권능과 대우주의 조화',
          keyTechniques: '날개펴기, 솟음지르기, 태산밀기',
          philosophicalEssence: '사사로운 아집을 버리고 우주의 무한한 섭리에 순응하는 원숙한 대사범의 품격.',
        },
        {
          danRank: '8단 (8th Dan)',
          name: '한수 (Hansoo)',
          koreanName: '한수',
          hanja: '漢水',
          symbolism: '만물의 근원인 물과 끊임없이 흐르며 바위를 뚫는 유연함',
          keyTechniques: '한수 통밀기, 손날 헤쳐막기, 메주먹 표적치기',
          historicalCorrectionNote: '정정 안내: 공인 품새 명칭은 "한수(Hansoo)"이며, 일부 서구권의 "Haelo"는 오기입니다.',
          philosophicalEssence: '상선약수(上善若水)—겸손하게 낮은 곳으로 흐르되 거대한 바다를 이루는 최고의 지혜.',
        },
        {
          danRank: '9단 (9th Dan)',
          name: '일여 (Ilyo)',
          koreanName: '일여',
          hanja: '一如',
          symbolism: '원효대사의 일심(一心) 사상과 몸과 마음, 무예와 삶이 하나 되는 경지',
          keyTechniques: '보주먹, 오자막기, 학다리서기 내려지르기',
          historicalCorrectionNote: '정정 안내: 9단 최고 품새는 "일여(Ilyo)"이며, 5단 십진(Shipjin)과 명확히 구분됩니다.',
          philosophicalEssence: '진여일여(眞如一如)—모든 분별심과 대립을 초월하여 도와 내가 완전히 하나가 되는 무도의 열반.',
        },
      ]
    default:
      return [
        {
          danRank: '1st Dan',
          name: 'Koryo',
          koreanName: '고려',
          hanja: '高麗',
          symbolism: 'Koryo Dynasty (918–1392 CE) & unyielding patriotic warrior spirit',
          keyTechniques: 'Double side kick (Dubal Yeop-chagi), Knife-hand neck strike (Sonnal Mok-chigi), Arc hand strike',
          philosophicalEssence: 'Embodies the resolute spirit of Koryo warriors defending their homeland against Mongol invasions.',
        },
        {
          danRank: '2nd Dan',
          name: 'Keumgang',
          koreanName: '금강',
          hanja: '金剛',
          symbolism: 'Diamond hardness (Vajra) & the majestic Diamond Mountain (Geumgangsan)',
          keyTechniques: 'Mountain Block (San-bakkat-makki), Crane Stance (Hakdari-seogi), Diamond punch',
          philosophicalEssence: 'Indomitable moral clarity and rock-like stability that cannot be shattered by fear or temptation.',
        },
        {
          danRank: '3rd Dan',
          name: 'Taebaek',
          koreanName: '태백',
          hanja: '太白',
          symbolism: 'Mount Taebaek (sacred cradle of Gojoseon by Dangun) & celestial light',
          keyTechniques: 'Keumgang side punch (Keumgang-yeop-jireugi), Mountain block, Low knife-hand spread block',
          philosophicalEssence: 'Living the ideal of "Hongik Ingan" (broadly benefitting humanity) with upright, shining integrity.',
        },
        {
          danRank: '4th Dan',
          name: 'Pyongwon',
          koreanName: '평원',
          hanja: '平原',
          symbolism: 'The vast expansive plain & fertile motherland of all living things',
          keyTechniques: 'Hakdari-seogi, Diamond knife-hand block, Target elbow strike (Palkoop Pyojeok-chigi)',
          philosophicalEssence: 'Cultivating the serene, open-hearted tolerance of the vast prairie that sustains life without prejudice.',
        },
        {
          danRank: '5th Dan',
          name: 'Shipjin',
          koreanName: '십진',
          hanja: '十進',
          symbolism: 'The decimal system & the 10 symbols of longevity (Shipjangsaeng)',
          keyTechniques: 'Bull Horn Block (Hwangso-makki), 8-second slow Rock Pushing (Bawi-milgi), Backfist strike',
          philosophicalEssence: 'Infinite progression and enduring longevity through deep diaphragmatic breath retention and orderly discipline.',
        },
        {
          danRank: '6th Dan',
          name: 'Jitae',
          koreanName: '지태',
          hanja: '地跆',
          symbolism: 'Mother Earth & human footsteps striving upon the soil',
          keyTechniques: 'Vertical spear-finger thrust (Pyonsonkkeut Sewo-jireugi), Jumping front kicks, Heavy downward stomps',
          philosophicalEssence: 'Standing firmly with two feet upon the earth, overcoming human adversity between birth and death.',
        },
        {
          danRank: '7th Dan',
          name: 'Cheonkwon',
          koreanName: '천권',
          hanja: '天拳',
          symbolism: 'The vast majestic cosmos & supreme authority of the heavens',
          keyTechniques: 'Eagle Wing Opening (Nalgae-pyeogi), Rising Uppercut (Sosum-jireugi), Mountain pushing',
          philosophicalEssence: 'Transcending petty human conflict to view existence from the serene, all-encompassing vantage of high heaven.',
        },
        {
          danRank: '8th Dan',
          name: 'Hansoo',
          koreanName: '한수',
          hanja: '漢水',
          symbolism: 'Water as the origin, nourishment, and fluid essence of all life',
          keyTechniques: 'Hansu Tongmilgi, Knife-hand spread block (Sonnal Hecho-makki), Hammerfist target strike',
          historicalCorrectionNote: 'Clarification: The official Kukkiwon name is "Hansoo" (Water), not "Haelo" which is an obsolete typographical error.',
          philosophicalEssence: 'Yielding like water—flowing into any vessel, seeking the lowest ground, yet wielding the power to carve through granite.',
        },
        {
          danRank: '9th Dan',
          name: 'Ilyo',
          koreanName: '일여',
          hanja: '一如',
          symbolism: 'Buddhist non-duality & Saint Wonhyo’s unity of body, mind, and spirit (Ilsim)',
          keyTechniques: 'Wrapped Fist (Bo-jumeok), "O"-character block (O-ja-makki), Crane stance downward strike',
          historicalCorrectionNote: 'Clarification: 9th Dan is Ilyo (Oneness), distinct from 5th Dan Shipjin (Decimal/Longevity).',
          philosophicalEssence: 'The ultimate pinnacle of martial arts where practitioner, technique, and universe dissolve into indivisible oneness.',
        },
      ]
  }
}

// -----------------------------------------------------------------------------
// LOCALIZED SERIES CONFIGURATION
// -----------------------------------------------------------------------------
export type PoomsaeSeriesKey = 'taegeuk' | 'high-dan' | 'new-poomsae'

export interface SeriesInfo {
  key: PoomsaeSeriesKey
  title: string
  koreanTitle: string
  subtitle: string
  count: number
  description: string
  targetDivision: string
  accentColor: string
  badgeText: string
  filterOptions: { label: string; value: string }[]
}

export function getLocalizedSeriesConfig(lang: string): Record<PoomsaeSeriesKey, SeriesInfo> {
  switch (lang) {
    case 'km':
      return {
        taegeuk: {
          key: 'taegeuk',
          title: 'មេគុន Taegeuk (ថេហ្គឹក)',
          koreanTitle: '태극 품새 (៨ មេគុន)',
          subtitle: 'ត្រីក្រាមសកលទាំង ៨ (Palgwae) & មូលដ្ឋាននៃការបង្កើត',
          count: 8,
          description:
            'កម្មវិធីសិក្សាជាមូលដ្ឋានរបស់ World Taekwondo តំណាងឱ្យត្រីក្រាមទាំង ៨ នៃក្បួន I Ching។ មេគុននីមួយៗបង្កប់នូវធាតុធម្មជាតិពីមេឃ (Keon) រហូតដល់ផែនដី (Gon)។',
          targetDivision: '8th Geup ដល់ 1st Geup (ខ្សែក្រវាត់ពណ៌ ដល់បេក្ខជន Dan)',
          accentColor: '#EF2F38',
          badgeText: 'កម្មវិធីខ្សែក្រវាត់ពណ៌',
          filterOptions: [
            { label: 'មេគុនទាំង ៨', value: 'all' },
            { label: 'កម្រិតដំបូង (8th–7th Geup)', value: 'beginner' },
            { label: 'កម្រិតមធ្យម (6th–4th Geup)', value: 'intermediate' },
            { label: 'កម្រិតខ្ពស់ (3rd–1st Geup)', value: 'advanced' },
          ],
        },
        'high-dan': {
          key: 'high-dan',
          title: 'មេគុន Yudanja (យូដាន់ចា)',
          koreanTitle: '유단자 품새 (៩ មេគុន)',
          subtitle: 'កម្រិតមេគុនខ្សែក្រវាត់ខ្មៅ Yudanja (1st Dan ដល់ 9th Dan Grandmaster)',
          count: 9,
          description:
            'កម្មវិធីសិក្សាផ្លូវការរបស់ Kukkiwon សម្រាប់ខ្សែក្រវាត់ខ្មៅ បង្កប់នូវប្រវត្តិសាស្ត្រកូរ៉េ ភូមិសាស្ត្រពិសិដ្ឋ និងទស្សនវិជ្ជាភាពជាតែមួយពី Koryo រហូតដល់ Ilyeo។',
          targetDivision: '1st Dan ដល់ 9th Dan ខ្សែក្រវាត់ខ្មៅ',
          accentColor: '#000000',
          badgeText: 'កម្រិត Yudanja Dan',
          filterOptions: [
            { label: 'មេគុន Dan ទាំង ៩', value: 'all' },
            { label: '1st–3rd Dan (Koryo, Keumgang, Taebaek)', value: '1-3-dan' },
            { label: '4th–6th Dan (Pyongwon, Sipjin, Jitae)', value: '4-6-dan' },
            { label: '7th–9th Dan (Cheonkwon, Hansu, Ilyeo)', value: '7-9-dan' },
          ],
        },
        'new-poomsae': {
          key: 'new-poomsae',
          title: 'មេគុនថ្មី (New Poomsae)',
          koreanTitle: '새 품새 (Kukkiwon Competition Suite)',
          subtitle: 'មេគុនប្រកួតប្រជែងទំនើប & ការបែងចែកតាមក្រុមអាយុ',
          count: 10,
          description:
            'បង្កើតឡើងដោយវិទ្យាស្ថានស្រាវជ្រាវ Kukkiwon សម្រាប់ការប្រកួតប្រជែងអន្តរជាតិ។ បញ្ចូលក្បាច់ទាត់លោតកម្រិតខ្ពស់សម្រាប់យុវជន និងលំហូរថាមពលខាងក្នុងសម្រាប់មេគ្រូចាស់ទុំ។',
          targetDivision: 'Cadet/Junior (<18), Senior (18–30), Masters (30–49, 50+)',
          accentColor: '#0085FF',
          badgeText: 'មេគុនប្រកួតកម្រិតខ្ពស់',
          filterOptions: [
            { label: 'មេគុនទាំង ១០', value: 'all' },
            { label: 'អាយុក្រោម ១៨ (Himchari, Yamang)', value: 'under-18' },
            { label: 'អាយុ ១៨–៣០ (Saebyeol, Nareusya, Bigak)', value: '18-30' },
            { label: 'អាយុ ៣០–៤៩ (Eoullim, Saeara)', value: '30-49' },
            { label: 'អាយុ ៥០ ឡើង (Hansol, Narae, Onnuri)', value: '50-plus' },
          ],
        },
      }
    case 'zh':
      return {
        taegeuk: {
          key: 'taegeuk',
          title: '太极品势系列 (Taegeuk Series)',
          koreanTitle: '태극 품새 (八套基石套路)',
          subtitle: '易经八卦宇宙观与万物化生之阶梯',
          count: 8,
          description:
            '世界跆拳道联盟官方色带必修套路，对应《周易》八卦之象。每一章均具象化大自然的一种运行规律，从乾天（太极一章）至坤地（太极八章）。',
          targetDivision: '八级黄带至一级红黑带 (色带升段候选)',
          accentColor: '#EF2F38',
          badgeText: '色带必修大纲',
          filterOptions: [
            { label: '全部 8 套品势', value: 'all' },
            { label: '初级入门 (8级–7级)', value: 'beginner' },
            { label: '中级进阶 (6级–4级)', value: 'intermediate' },
            { label: '高级冲刺 (3级–1级)', value: 'advanced' },
          ],
        },
        'high-dan': {
          key: 'high-dan',
          title: '有段者品势系列 (Yudanja Series)',
          koreanTitle: '유단자 품새 (九套黑带至尊套路)',
          subtitle: '黑带一段至九段宗师级登峰造极之道',
          count: 9,
          description:
            '国技院官方公认黑带必修教范，凝练了半岛历史风云、名山大川、元晓大师佛学真如及天地人合一的武道至高境界。',
          targetDivision: '黑带一段至九段师范与大宗师',
          accentColor: '#000000',
          badgeText: '有段者专属教范',
          filterOptions: [
            { label: '全部 9 套段位品势', value: 'all' },
            { label: '一段至三段 (高丽、金刚、太白)', value: '1-3-dan' },
            { label: '四段至六段 (平原、十进、地跆)', value: '4-6-dan' },
            { label: '七段至九段 (天拳、汉水、一如)', value: '7-9-dan' },
          ],
        },
        'new-poomsae': {
          key: 'new-poomsae',
          title: '现代新竞技品势系列 (New Poomsae)',
          koreanTitle: '새 품새 (国技院国际锦标赛套系)',
          subtitle: '现代国际顶尖大赛专用与全年龄段专属定制体系',
          count: 10,
          description:
            '由国技院技术研究所专为国际竞技品势大赛研发。针对青少年组融合极高难度特技腾空踢，针对大师组强调内劲吐纳与气定神闲。',
          targetDivision: '少年组(<18)、青年组(18–30)、大师组(30–49, 50+)',
          accentColor: '#0085FF',
          badgeText: '精英竞技专套',
          filterOptions: [
            { label: '全部 10 套新品势', value: 'all' },
            { label: '18岁以下 (Himchari, Yamang)', value: 'under-18' },
            { label: '18–30岁 (Saebyeol, Nareusya, Bigak)', value: '18-30' },
            { label: '30–49岁 (Eoullim, Saeara)', value: '30-49' },
            { label: '50岁以上 (Hansol, Narae, Onnuri)', value: '50-plus' },
          ],
        },
      }
    case 'ko':
      return {
        taegeuk: {
          key: 'taegeuk',
          title: '태극 품새 시리즈 (Taegeuk Series)',
          koreanTitle: '태극 품새 (8개 유급자 공인 품새)',
          subtitle: '주역 팔괘(八卦)의 삼라만상 조화와 창조의 원리',
          count: 8,
          description:
            '세계태권도연맹(WT)과 국기원의 유급자 공인 표준 품새로, 주역 팔괘를 바탕으로 건(하늘)에서 곤(땅)에 이르는 자연의 섭리를 체현합니다.',
          targetDivision: '8급(노란 띠) ~ 1급(빨간 띠/품·단 심사 후보)',
          accentColor: '#EF2F38',
          badgeText: '유급자 공인 교육과정',
          filterOptions: [
            { label: '8개 태극 품새 전체', value: 'all' },
            { label: '초급 과정 (8급–7급)', value: 'beginner' },
            { label: '중급 과정 (6급–4급)', value: 'intermediate' },
            { label: '고급 과정 (3급–1급)', value: 'advanced' },
          ],
        },
        'high-dan': {
          key: 'high-dan',
          title: '유단자 품새 시리즈 (Yudanja Series)',
          koreanTitle: '유단자 품새 (9개 유단자·유품자 공인 품새)',
          subtitle: '1단 승단에서 9단 대사범에 이르는 무도 혼의 완성',
          count: 9,
          description:
            '국기원 공인 유단자 승단 표준 품새로, 한민족의 유구한 역사, 영산의 기백, 원효대사의 일심 사상과 무도적 깨달음을 형상화하였습니다.',
          targetDivision: '1단(품) ~ 9단 유단자 및 사범·대사범',
          accentColor: '#000000',
          badgeText: '유단자 승단 표준',
          filterOptions: [
            { label: '9개 유단자 품새 전체', value: 'all' },
            { label: '1단~3단 (고려, 금강, 태백)', value: '1-3-dan' },
            { label: '4단~6단 (평원, 십진, 지태)', value: '4-6-dan' },
            { label: '7단~9단 (천권, 한수, 일여)', value: '7-9-dan' },
          ],
        },
        'new-poomsae': {
          key: 'new-poomsae',
          title: '새 품새 시리즈 (New Poomsae Suite)',
          koreanTitle: '새 품새 (국기원 경기용 신규 공인 품새)',
          subtitle: '엘리트 국제 경기용 고난도 기량 및 연령대별 특화 품새',
          count: 10,
          description:
            '국기원 태권도연구소가 세계선수권 등 공인 경기 품새의 차별화를 위해 제정. 유소년·청년부의 고난도 도약차기와 장년·실버부의 내면 기품을 특화함.',
          targetDivision: '카뎃/주니어(18세 미만), 시니어(18~30세), 마스터(30~49세, 50세 이상)',
          accentColor: '#0085FF',
          badgeText: '엘리트 경기 공인 품새',
          filterOptions: [
            { label: '10개 새 품새 전체', value: 'all' },
            { label: '18세 미만 (힘차리, 야망)', value: 'under-18' },
            { label: '18~30세 (새별, 나르샤, 비각)', value: '18-30' },
            { label: '30~49세 (어울림, 새아라)', value: '30-49' },
            { label: '50세 이상 (한솔, 나래, 온누리)', value: '50-plus' },
          ],
        },
      }
    default:
      return {
        taegeuk: {
          key: 'taegeuk',
          title: 'Taegeuk Series',
          koreanTitle: '태극 품새 (8 Patterns)',
          subtitle: 'The 8 Universal Trigrams (Palgwae) & Foundations of Creation',
          count: 8,
          description:
            'The foundational World Taekwondo syllabus representing the 8 Trigrams (Palgwae) of the I Ching. Each form embodies an elemental force of nature from Heaven (Keon) to Earth (Gon).',
          targetDivision: '8th Geup to 1st Geup (Color Belts to Dan Candidate)',
          accentColor: '#EF2F38',
          badgeText: 'Color Belt Curriculum',
          filterOptions: [
            { label: 'All 8 Forms', value: 'all' },
            { label: 'Beginner (8th–7th Geup)', value: 'beginner' },
            { label: 'Intermediate (6th–4th Geup)', value: 'intermediate' },
            { label: 'Advanced (3rd–1st Geup)', value: 'advanced' },
          ],
        },
        'high-dan': {
          key: 'high-dan',
          title: 'Yudanja Series (유단자 품새)',
          koreanTitle: '유단자 품새 (9 Patterns)',
          subtitle: 'Black Belt Dan Mastery (1st Dan to 9th Dan Grandmaster)',
          count: 9,
          description:
            'The official Kukkiwon Black Belt curriculum embodying Korean history, sacred geography, Buddhist oneness (Wonhyo), and the cosmic order from Koryo warrior spirit to Ilyeo enlightenment.',
          targetDivision: '1st Dan to 9th Dan Black Belt Masters',
          accentColor: '#000000',
          badgeText: 'Yudanja Dan Mastery',
          filterOptions: [
            { label: 'All 9 Dan Forms', value: 'all' },
            { label: '1st–3rd Dan (Koryo, Keumgang, Taebaek)', value: '1-3-dan' },
            { label: '4th–6th Dan (Pyongwon, Sipjin, Jitae)', value: '4-6-dan' },
            { label: '7th–9th Dan (Cheonkwon, Hansu, Ilyeo)', value: '7-9-dan' },
          ],
        },
        'new-poomsae': {
          key: 'new-poomsae',
          title: 'New Poomsae Series',
          koreanTitle: '새 품새 (Kukkiwon Competition Suite)',
          subtitle: 'Elite Modern Tournament Forms & Age-Division Specialization',
          count: 10,
          description:
            'Developed by the Kukkiwon Taekwondo Research Institute for elite competition differentiation. Features high-difficulty aerial kicks for youth/adults and internal energy flow for masters.',
          targetDivision: 'Cadet/Junior (Under 18), Senior (18–30), Masters (30–49, 50+)',
          accentColor: '#0085FF',
          badgeText: 'Elite Competition Suite',
          filterOptions: [
            { label: 'All 10 Forms', value: 'all' },
            { label: 'Under 18 (Himchari, Yamang)', value: 'under-18' },
            { label: 'Ages 18–30 (Saebyeol, Nareusya, Bigak)', value: '18-30' },
            { label: 'Ages 30–49 (Eoullim, Saeara)', value: '30-49' },
            { label: 'Ages 50+ (Hansol, Narae, Onnuri)', value: '50-plus' },
          ],
        },
      }
  }
}

// -----------------------------------------------------------------------------
// POOMSAE ITEM LOCALIZER (DECORATOR)
// -----------------------------------------------------------------------------
export function decoratePoomsaeItem(item: LibraryItem, lang: string): LibraryItem {
  if (!item) return item
  if (lang === 'en') return item

  const t = item.translations?.[lang as 'km' | 'zh' | 'ko']
  if (!t) return item

  return {
    ...item,
    name: t.name || item.name,
    koreanName: t.koreanName || item.koreanName,
    summary: t.summary || item.summary,
    meaning: t.meaning || item.meaning,
    philosophy: t.philosophy || item.philosophy,
    beltLevel: t.beltLevel || item.beltLevel,
    steps: t.steps && t.steps.length > 0 ? t.steps : item.steps,
    keyDetails: t.keyDetails && t.keyDetails.length > 0 ? t.keyDetails : item.keyDetails,
    commonMistakes: t.commonMistakes && t.commonMistakes.length > 0 ? t.commonMistakes : item.commonMistakes,
    coachingTips: t.coachingTips && t.coachingTips.length > 0 ? t.coachingTips : item.coachingTips,
  }
}


