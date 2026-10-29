// =============================================================================
// INFINITY TAEKWONDO — POOMSAE MASTER TRANSLATIONS & PHILOSOPHY MODULE
// Languages: English (en), Khmer (km), Chinese (zh), Korean (ko)
// =============================================================================

import type { LibraryItem } from './types'
import { poomsaeDetailedTranslations } from './poomsaeDetailedTranslations'

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

  // Master Navigation & General Badges
  sectionBadge: string
  patternsCountSuffix: string
  catalogKoreanNav: string
  foundationsKoreanNav: string
  foundationsNavSubtitle: string
  taegeukKoreanNav: string
  taegeukNavSubtitle: string
  yudanjaKoreanNav: string
  yudanjaNavSubtitle: string

  // Tab 2 Foundations
  foundationsBadge: string
  partnerlessCombatTitle: string
  mindBodyUnityTitle: string
  pillarPrefix: string
  errorPrefix: string
  flawLabel: string
  grandmasterCorrectionLabel: string
  focusLabel: string

  // Tab 3 Taegeuk
  cosmologyBadge: string
  yangRedEumBlue: string
  taegeukgiConnectionTitle: string
  fourCoreElementsBadge: string
  elementLabel: string
  keyPrinciplesLabel: string
  coordinateSystemBadge: string
  wangFloorPlanTitle: string
  wangFloorPlanSubtitle: string
  floorGeometryBadge: string
  steppingLawTitle: string
  steppingLawDesc: string
  solidYangDesc: string
  brokenUmDesc: string
  selectTaegeukToInspect: string
  inspectFullDossierBtn: string
  trigramPrefix: string
  elementPrefix: string
  solidYangBadge: string
  brokenUmBadge: string
  eightPillarsBadge: string
  masterCuePrefix: string
  historicalMatrixBadge: string
  viewTableBtn: string
  viewCardsBtn: string
  thPalgweNumber: string
  thPalgweForm: string
  thPalgwePattern: string
  thPatternMeaning: string
  thTrigram: string
  thTaegeukForm: string
  thTaegeukPattern: string
  thNaturalElement: string
  thTacticalNuance: string
  allFormsWangNote: string
  fiveIdealsTitle: string
  fiveIdealsBadge: string
  fiveIdealsIntro: string
  idealPrefix: string
  metaphysicalOriginsBadge: string
  lineageFuhHiLabel: string
  taegukkiIntegrationTitle: string
  pre1971KtaBadge: string
  keyEvolutionsLabel: string
  fourPairsTitle: string
  fourPairsDesc: string
  oppositesInBalanceBadge: string
  inspectPairBtn: string

  // Tab 4 Yudanja
  yudanjaCurriculumBadge: string
  historicalClarificationsTitle: string
  kupVsDanBadge: string
  thDimension: string
  thTaegeukSeriesCol: string
  thYudanjaSeriesCol: string
  danMasteryMatrixTitle: string
  danMasteryMatrixSubtitle: string
  thDanLevel: string
  thDanBelt: string
  thDanFormName: string
  thDanMeaningOfName: string
  thDanFloorPattern: string
  thDanMeaningOfSymbol: string
  thDanHanjaSymbol: string
  thDanMasterCharacteristic: string
  thDanAction: string
  footnotesTitle: string
  fnGeumgangTitle: string
  fnGeumgangDesc: string
  fnTaebaekTitle: string
  fnTaebaekDesc: string
  fnSipjinTitle: string
  fnSipjinDesc: string
  cardMeaningLabel: string
  cardSymbolLabel: string
  cardFloorLabel: string
  cardCharacteristicLabel: string
  cardPhilosophicalLabel: string
  cardKeyTechLabel: string
  nonLinearDanProgressionTitle: string
  competitionDynamicsTitle: string
  selfDefenseBunkaiTitle: string

  // Dossier Modal & Deep Detail Keys
  dualityPairTitle: string
  oppositeCounterpartLabel: string
  switchToOppositeBtn: string
  jooyeokTrigramLineage: string
  rankPrefix: string
  taegukkiTrigramBadge: string
  coreUniversalConceptTitle: string
  cosmicDialecticTitle: string
  philosophicalDirectiveTitle: string
  wangFloorDynamicsTitle: string
  fourPointClockTitle: string
  kihapStepPrefix: string
  wtCompetitionScoringTitle: string
  targetDurationPrefix: string
  majorDeductionsTitle: string
  minorDeductionsTitle: string
  eightPillarsCuesTitle: string
  danMasteryOfficialTitle: string
  danMasteryDoctrineTitle: string
  junbiSeogiTitle: string
  introducedKeyTechTitle: string
  dynamicMovementCharsTitle: string
  classicalLineageTitle: string
  etymologyNoteLabel: string
  newPoomsaeBadge: string
  targetAgeRationaleTitle: string
  officialKukkiwonMeaningTitle: string
  floorLineSymbolTitle: string
  technicalArsenalTitle: string
  signatureKicksTitle: string
  signatureHandsTitle: string
  philosophicalMeaningTitle: string
  yinYangDynamicsTitle: string
  movementSequenceTitle: string
  stepBreakdownTitle: string
  mandatoryKihapLabel: string
  kihapRequiredBadge: string
  completedLabel: string
  curriculumStandardFooter: string
  lineSymbolPrefix: string
  termsDocumentedSuffix: string
  officialPracticalPointers: string
  coachingInsightPrefix: string
  stepsCuratedNotice: string
  termsCuratedNotice: string
  tipsCuratedNotice: string
  ringGeometryDescPrefix: string
  ringGeometryDescSuffix: string
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

    sectionBadge: 'Section',
    patternsCountSuffix: 'Patterns',
    catalogKoreanNav: '공인 27개 품새 도감 (3대 시리즈)',
    foundationsKoreanNav: '품새의 본질·기원 및 3대 수련 요결',
    foundationsNavSubtitle: 'Why Poomsae Matters, Mistakes & 10th Kup',
    taegeukKoreanNav: '주역 8괘와 4대 대립쌍 (1971년 전환)',
    taegeukNavSubtitle: 'Eum-Yang Unity, Trigram Pairs & History',
    yudanjaKoreanNav: '유단자 품새 (한자선·승단·실전 공방)',
    yudanjaNavSubtitle: 'Unique Hanja Lines, Grading & Bunkai',

    foundationsBadge: 'Martial Foundations & Origins',
    partnerlessCombatTitle: 'Partnerless Combat Simulation:',
    mindBodyUnityTitle: 'Mind & Body Unity Without Pressure:',
    pillarPrefix: 'Pillar #',
    errorPrefix: 'Error #',
    flawLabel: 'Flaw:',
    grandmasterCorrectionLabel: 'Grandmaster Correction:',
    focusLabel: 'Focus:',

    cosmologyBadge: 'Cosmology & Core Philosophy',
    yangRedEumBlue: 'Yang (Red) • Eum (Blue)',
    taegeukgiConnectionTitle: 'Taegeukgi Flag Connection (태극기):',
    fourCoreElementsBadge: '4 Core Elements',
    elementLabel: 'Element',
    keyPrinciplesLabel: 'Key Principles:',
    coordinateSystemBadge: 'Standardized Coordinate System',
    wangFloorPlanTitle: 'The Wang (王) Floor Plan & Trigram Stepping Law',
    wangFloorPlanSubtitle: '王자 품새선과 주역 3효(三爻) 운족의 법칙 (Step Forward = Yang • Stationary/Retreat = Um)',
    floorGeometryBadge: 'Floor Geometry',
    steppingLawTitle: 'The Stepping Law of the 3 Horizontal Lines:',
    steppingLawDesc: 'The 3 horizontal lines of the Chinese character 王 (Wang) correspond directly to the 3 lines of that form’s I Ching trigram (Top = Heaven, Middle = Man, Bottom = Earth).',
    solidYangDesc: 'Solid Yang Line (—–): If the practitioner advances (takes a step forward) along that horizontal line, it is a solid line.',
    brokenUmDesc: 'Broken Um Line (– –): If the practitioner executes in place, retreats, or turns without advancing along that horizontal line, it is a broken line.',
    selectTaegeukToInspect: 'Select Taegeuk Form to Inspect Floor Line Stepping Laws:',
    inspectFullDossierBtn: 'Inspect Full Dossier →',
    trigramPrefix: 'Trigram:',
    elementPrefix: 'Element:',
    solidYangBadge: 'Solid Yang Line (Advances)',
    brokenUmBadge: 'Broken Um Line (No Advance)',
    eightPillarsBadge: '8 Performance Pillars',
    masterCuePrefix: 'Master Cue:',
    historicalMatrixBadge: 'Historical Matrix • 1967 Palgwe vs. 1971 Taegeuk',
    viewTableBtn: 'Table',
    viewCardsBtn: 'Cards',
    thPalgweNumber: '#',
    thPalgweForm: '1967 Palgwe Form',
    thPalgwePattern: 'Palgwe Floor Pattern',
    thPatternMeaning: 'Pattern Meaning',
    thTrigram: 'Trigram',
    thTaegeukForm: '1971 Taegeuk Form',
    thTaegeukPattern: 'Taegeuk Floor Pattern',
    thNaturalElement: 'Natural Element',
    thTacticalNuance: 'Tactical Nuance',
    allFormsWangNote: '王 (All Forms)',
    fiveIdealsTitle: 'The 5 Core Ideals of Taekwondo in Taegeuk Poomsae',
    fiveIdealsBadge: 'Peace • Unity • Creation • Indomitable • Eternity',
    fiveIdealsIntro: 'The Taegeuk Poomsae represent the ideals of the martial art of Taekwondo: pacifism, unity, creative spirit, indomitable spirit, and eternity. As well as containing the basic physical movements which must be mastered to become proficient in Taekwondo, the poomsae also contain the thoughts which accompany the practice of Taekwondo. It is from these thoughts that Taekwondo gains its ideals.',
    idealPrefix: 'Ideal',
    metaphysicalOriginsBadge: 'Ancient Metaphysical Origins',
    lineageFuhHiLabel: 'Lineage: Fuh Hi (3,300 BP) • Jooyeok (주역 / 周易)',
    taegukkiIntegrationTitle: 'Taeguk-ki Flag & Poomsae Integration:',
    pre1971KtaBadge: '1971 KTA Resolution',
    keyEvolutionsLabel: 'Key Evolutions from Palgwe to Taegeuk:',
    fourPairsTitle: 'The 4 Universal Opposition Pairs (태극 4대 대립쌍)',
    fourPairsDesc: 'Every Taegeuk pattern has an opposite counterpart, mirroring the eternal equilibrium of nature.',
    oppositesInBalanceBadge: 'Opposites in Balance',
    inspectPairBtn: 'Inspect Form',

    yudanjaCurriculumBadge: 'Official WT & Kukkiwon Black Belt Curriculum',
    historicalClarificationsTitle: 'Authoritative Historical Etymology & Clarifications:',
    kupVsDanBadge: 'Kup vs Dan Architecture',
    thDimension: 'Architectural Dimension',
    thTaegeukSeriesCol: 'Taegeuk Series (Kup Grades)',
    thYudanjaSeriesCol: 'Yudanja Series (Dan Grades)',
    danMasteryMatrixTitle: 'The Official Black Belt Dan Mastery Matrix (1st to 9th Dan)',
    danMasteryMatrixSubtitle: 'The Official WT & Kukkiwon Master Curriculum: Level, Belt with Gold Stripes, Meaning of Name, Hanja Floor Patterns, Meaning of Symbol, and Characteristic of a Master.',
    thDanLevel: 'Level',
    thDanBelt: 'Belt',
    thDanFormName: 'Form Name',
    thDanMeaningOfName: 'Meaning of Name',
    thDanFloorPattern: 'Floor Pattern',
    thDanMeaningOfSymbol: 'Meaning of Symbol',
    thDanHanjaSymbol: 'Symbol',
    thDanMasterCharacteristic: 'Characteristic of a Master',
    thDanAction: 'Action',
    footnotesTitle: 'Historical Etymology & Mythological Footnotes:',
    fnGeumgangTitle: '¹ Diamond Mountain (Geumgangsan):',
    fnGeumgangDesc: 'Named after Mount Keumgang and the Buddhist concept of the Vajra (indestructible diamond), symbolizing adamantine hardness, spiritual moral clarity, and towering mountain majesty.',
    fnTaebaekTitle: '² Ultimate Brightness:',
    fnTaebaekDesc: 'Sacred Mount Baekdu (Taebaeksan) where Dangun founded ancient Gojoseon under the humanitarian doctrine of Hongik Ingan (홍익인간 — broadly benefiting all humanity).',
    fnSipjinTitle: '³ The ten eternal entities (Sipjangsaeng / 십장생):',
    fnSipjinDesc: 'Traditional Korean symbols of perpetual longevity and cosmic harmony: sun, moon, mountain, water, rock, pine tree, herb of eternal youth (bulnocho), tortoise, crane, and deer.',
    cardMeaningLabel: 'Meaning:',
    cardSymbolLabel: 'Symbol Concept:',
    cardFloorLabel: 'Floor Geometry:',
    cardCharacteristicLabel: 'Characteristic:',
    cardPhilosophicalLabel: 'Philosophical Mandate:',
    cardKeyTechLabel: 'Key Techniques:',
    nonLinearDanProgressionTitle: 'Non-Linear Dan Progression:',
    competitionDynamicsTitle: 'Competition Floor Spatial Challenge:',
    selfDefenseBunkaiTitle: 'Self-Defense (Hosinsul Bunkai):',

    dualityPairTitle: 'Philosophical Duality Pair:',
    oppositeCounterpartLabel: 'Opposite Counterpart:',
    switchToOppositeBtn: 'Switch to Opposite Form →',
    jooyeokTrigramLineage: 'Jooyeok Trigram Lineage',
    rankPrefix: 'Rank:',
    taegukkiTrigramBadge: 'Taeguk-ki Trigram (태극기 4대 괘)',
    coreUniversalConceptTitle: 'Core Universal Concept:',
    cosmicDialecticTitle: 'Cosmic Dialectic & Balance:',
    philosophicalDirectiveTitle: 'Philosophical Execution Directive (수련 요결):',
    wangFloorDynamicsTitle: 'Wang (王) Floor Line Stepping Dynamics:',
    fourPointClockTitle: '4-Point Clock Trajectory & Kihap Placement:',
    kihapStepPrefix: 'Kihap: Step',
    wtCompetitionScoringTitle: 'WT Competition Scoring & Deduction Criteria:',
    targetDurationPrefix: 'Target:',
    majorDeductionsTitle: 'Major Deductions (-0.3 points each):',
    minorDeductionsTitle: 'Minor Deductions (-0.1 points each):',
    eightPillarsCuesTitle: '8 Performance Pillars Execution Cues:',
    danMasteryOfficialTitle: 'Official WT & Kukkiwon Dan Mastery',
    danMasteryDoctrineTitle: 'Dan Mastery Doctrine & Philosophical Mandate:',
    junbiSeogiTitle: 'Ready Stance (준비서기) & Danjeon Respiration:',
    introducedKeyTechTitle: 'Introduced Key Techniques (신규 도입 기술):',
    dynamicMovementCharsTitle: 'Dynamic Movement Characteristics (동작 특성):',
    classicalLineageTitle: 'Classical Lineage & Historical Background (역사적 유래):',
    etymologyNoteLabel: 'Etymology Note:',
    newPoomsaeBadge: 'Kukkiwon Official New Poomsae (새 품새)',
    targetAgeRationaleTitle: 'Age Division & Rationale',
    officialKukkiwonMeaningTitle: 'Official Kukkiwon Meaning',
    floorLineSymbolTitle: 'Floor Pattern & Line Symbol',
    technicalArsenalTitle: 'Technical Arsenal & Signature Movements:',
    signatureKicksTitle: 'Signature Kicking Techniques:',
    signatureHandsTitle: 'Signature Hand & Blocking Systems:',
    philosophicalMeaningTitle: 'Philosophical Meaning & Concept',
    yinYangDynamicsTitle: 'Yin-Yang Dynamics & Martial Spirit',
    movementSequenceTitle: 'Movement Sequence',
    stepBreakdownTitle: 'Step Execution Breakdown',
    mandatoryKihapLabel: 'Mandatory Vocalization (Kihap)',
    kihapRequiredBadge: 'Kihap Required',
    completedLabel: 'Completed',
    curriculumStandardFooter: 'Official World Taekwondo & Kukkiwon Curriculum Standards',
    lineSymbolPrefix: 'Line Symbol:',
    termsDocumentedSuffix: 'Terms Documented',
    officialPracticalPointers: 'Official Practical Pointers',
    coachingInsightPrefix: 'Coaching Insight',
    stepsCuratedNotice: 'Official step-by-step movement breakdown is currently being curated for this pattern.',
    termsCuratedNotice: 'Terminology glossary is currently being updated for this pattern.',
    tipsCuratedNotice: 'Coaching tips are currently being updated for this pattern.',
    ringGeometryDescPrefix: 'Competitors must follow the strict geometric path',
    ringGeometryDescSuffix: 'across the 10m x 10m ring, starting and returning to the exact initial coordinate within a 1-foot allowance.',
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

    sectionBadge: 'ផ្នែក',
    patternsCountSuffix: 'មេគុន',
    catalogKoreanNav: 'បញ្ជីមេគុនផ្លូវការទាំង ២៧ (៣ ស៊េរីធំៗ)',
    foundationsKoreanNav: 'ខ្លឹមសារ ប្រភពដើម និងគោលការណ៍មេគុនទាំង ៣',
    foundationsNavSubtitle: 'សារៈសំខាន់មេគុន, កំហុសទូទៅ & ខ្សែក្រវាត់ស 10th Kup',
    taegeukKoreanNav: 'ត្រីក្រាមទាំង ៨ និងគូប្រឆាំងទាំង ៤ (ការវិវត្ត ១៩៧១)',
    taegeukNavSubtitle: 'ឯកភាពយិន-យ៉ាង, គូត្រីក្រាម និងប្រវត្តិសាស្ត្រ',
    yudanjaKoreanNav: 'មេគុន Yudanja (គន្លងអក្សរចិន, ការឡើង Dan & ការការពារខ្លួន)',
    yudanjaNavSubtitle: 'គន្លងអក្សរចិន Hanja, ការប្រឡង Dan & Bunkai',

    foundationsBadge: 'មូលដ្ឋានគ្រឹះគុន & ប្រភពដើម',
    partnerlessCombatTitle: 'ការហ្វឹកហាត់ប្រយុទ្ធក្លែងធ្វើគ្មានដៃគូ៖',
    mindBodyUnityTitle: 'ការរួបរួមចិត្ត និងកាយដោយគ្មានសម្ពាធ៖',
    pillarPrefix: 'សសរស្តម្ភទី #',
    errorPrefix: 'កំហុសទី #',
    flawLabel: 'ចំណុចខ្វះខាត៖',
    grandmasterCorrectionLabel: 'ការកែតម្រូវពីមេគ្រូ៖',
    focusLabel: 'ការផ្តោតសំខាន់៖',

    cosmologyBadge: 'ចក្រវាលវិទ្យា & ទស្សនវិជ្ជាស្នូល',
    yangRedEumBlue: 'យ៉ាង (ក្រហម) • យិន (ខៀវ)',
    taegeukgiConnectionTitle: 'ទំនាក់ទំនងជាមួយទង់ជាតិកូរ៉េ (Taeguk-ki)៖',
    fourCoreElementsBadge: 'ធាតុស្នូលទាំង ៤',
    elementLabel: 'ធាតុផ្សំ',
    keyPrinciplesLabel: 'គោលការណ៍សំខាន់ៗ៖',
    coordinateSystemBadge: 'ប្រព័ន្ធកូអរដោនេស្តង់ដារ',
    wangFloorPlanTitle: 'គន្លងអក្សរស្តេច (王) & ច្បាប់បោះជំហានត្រីក្រាម',
    wangFloorPlanSubtitle: '王자 품새선과 주역 3효(三爻) 운족의 법칙 (បោះជំហានមុខ = យ៉ាង • នៅនឹងកន្លែង/បត់ = យិន)',
    floorGeometryBadge: 'ធរណីមាត្រកម្រាល',
    steppingLawTitle: 'ច្បាប់បោះជំហាននៃបន្ទាត់ផ្តេកទាំង ៣៖',
    steppingLawDesc: 'បន្ទាត់ផ្តេកទាំង ៣ នៃអក្សរចិន 王 (Wang) ត្រូវគ្នានឹងបន្ទាត់ទាំង ៣ នៃត្រីក្រាម I Ching (ខាងលើ = មេឃ, កណ្តាល = មនុស្ស, ខាងក្រោម = ផែនដី)។',
    solidYangDesc: 'បន្ទាត់រឹងយ៉ាង (—–)៖ ប្រសិនបើសិស្សបោះជំហានទៅមុខតាមបន្ទាត់ផ្តេក នោះវាបង្កើតជាបន្ទាត់រឹង Yang។',
    brokenUmDesc: 'បន្ទាត់ដាច់យិន (– –)៖ ប្រសិនបើសិស្សធ្វើចលនានៅនឹងកន្លែង ថយក្រោយ ឬបង្វិលខ្លួនដោយមិនបោះទៅមុខ នោះវាបង្កើតជាបន្ទាត់ដាច់ Um។',
    selectTaegeukToInspect: 'ជ្រើសរើសមេគុន Taegeuk ដើម្បីពិនិត្យច្បាប់បោះជំហានលើកម្រាល៖',
    inspectFullDossierBtn: 'ពិនិត្យឯកសារលម្អិតពេញលេញ →',
    trigramPrefix: 'ត្រីក្រាម៖',
    elementPrefix: 'ធាតុធម្មជាតិ៖',
    solidYangBadge: 'បន្ទាត់យ៉ាងរឹង (បោះជំហានមុខ)',
    brokenUmBadge: 'បន្ទាត់យិនដាច់ (មិនបោះជំហាន)',
    eightPillarsBadge: 'សសរស្តម្ភទាំង ៨ នៃការសម្តែង',
    masterCuePrefix: 'គន្លឹះមេគ្រូ៖',
    historicalMatrixBadge: 'តារាងប្រៀបធៀបប្រវត្តិសាស្ត្រ • Palgwe ១៩៦៧ និង Taegeuk ១៩៧១',
    viewTableBtn: 'តារាង',
    viewCardsBtn: 'កាត',
    thPalgweNumber: '#',
    thPalgweForm: 'មេគុន Palgwe ១៩៦៧',
    thPalgwePattern: 'គន្លងកម្រាល Palgwe',
    thPatternMeaning: 'អត្ថន័យគន្លង',
    thTrigram: 'ត្រីក្រាម',
    thTaegeukForm: 'មេគុន Taegeuk ១៩៧១',
    thTaegeukPattern: 'គន្លងកម្រាល Taegeuk',
    thNaturalElement: 'ធាតុធម្មជាតិ',
    thTacticalNuance: 'ភាពខុសប្លែកគ្នានៃបច្ចេកទេស',
    allFormsWangNote: '王 (គ្រប់មេគុន)',
    fiveIdealsTitle: 'ឧត្តមគតិស្នូលទាំង ៥ នៃតេក្វាន់ដូក្នុងមេគុន Taegeuk',
    fiveIdealsBadge: 'សន្តិភាព • ឯកភាព • ការច្នៃប្រឌិត • មិនចុះចាញ់ • និរន្តរភាព',
    fiveIdealsIntro: 'មេគុន Taegeuk តំណាងឱ្យឧត្តមគតិនៃក្បាច់គុនតេក្វាន់ដូ៖ សន្តិភាពនិយម, ឯកភាព, ស្មារតីច្នៃប្រឌិត, ស្មារតីមិនចុះចាញ់ និងនិរន្តរភាព។ ក្រៅពីការផ្ទុកនូវចលនារាងកាយជាមូលដ្ឋានដែលត្រូវតែស្ទាត់ជំនាញ មេគុនក៏រួមបញ្ចូលនូវទស្សនវិជ្ជាដែលអមដំណើរការហ្វឹកហាត់ផងដែរ។',
    idealPrefix: 'ឧត្តមគតិ',
    metaphysicalOriginsBadge: 'ប្រភពដើមទស្សនវិជ្ជាបុរាណ',
    lineageFuhHiLabel: 'ប្រភពដើម៖ Fuh Hi (៣,៣០០ ឆ្នាំមុន) • Jooyeok (주역 / 周易)',
    taegukkiIntegrationTitle: 'ការរួមបញ្ចូលរវាងទង់ជាតិកូរ៉េ និងមេគុន៖',
    pre1971KtaBadge: 'ដំណោះស្រាយ KTA ឆ្នាំ ១៩៧១',
    keyEvolutionsLabel: 'ការវិវត្តសំខាន់ៗពី Palgwe ទៅ Taegeuk៖',
    fourPairsTitle: 'គូប្រឆាំងសកលទាំង ៤ នៃ Taegeuk (태극 4대 대립쌍)',
    fourPairsDesc: 'មេគុន Taegeuk នីមួយៗសុទ្ធតែមានគូប្រឆាំងដែលឆ្លុះបញ្ចាំងពីតុល្យភាពនៃធម្មជាតិ។',
    oppositesInBalanceBadge: 'តុល្យភាពនៃភាពផ្ទុយគ្នា',
    inspectPairBtn: 'ពិនិត្យមេគុន',

    yudanjaCurriculumBadge: 'កម្មវិធីសិក្សាផ្លូវការខ្សែក្រវាត់ខ្មៅ WT & Kukkiwon',
    historicalClarificationsTitle: 'ការបញ្ជាក់ប្រវត្តិសាស្ត្រផ្លូវការ និងការកែតម្រូវឈ្មោះ៖',
    kupVsDanBadge: 'រចនាសម្ព័ន្ធ Kup ប្រៀបធៀប Dan',
    thDimension: 'ទិដ្ឋភាពរចនាសម្ព័ន្ធ',
    thTaegeukSeriesCol: 'មេគុន Taegeuk (កម្រិត Kup)',
    thYudanjaSeriesCol: 'មេគុន Yudanja (កម្រិត Dan)',
    danMasteryMatrixTitle: 'តារាងកម្រិតខ្សែក្រវាត់ខ្មៅ Yudanja ផ្លូវការ (1st ដល់ 9th Dan)',
    danMasteryMatrixSubtitle: 'កម្មវិធីផ្លូវការ WT & Kukkiwon៖ កម្រិត, ខ្សែក្រវាត់ឆ្នូតមាស, អត្ថន័យឈ្មោះ, គន្លងអក្សរចិន, អត្ថន័យនិមិត្តសញ្ញា និងចរិតលក្ខណៈមេគ្រូ។',
    thDanLevel: 'កម្រិត',
    thDanBelt: 'ខ្សែក្រវាត់',
    thDanFormName: 'ឈ្មោះមេគុន',
    thDanMeaningOfName: 'អត្ថន័យឈ្មោះ',
    thDanFloorPattern: 'គន្លងកម្រាល',
    thDanMeaningOfSymbol: 'អត្ថន័យនិមិត្តសញ្ញា',
    thDanHanjaSymbol: 'អក្សរចិន',
    thDanMasterCharacteristic: 'ចរិតលក្ខណៈមេគ្រូ',
    thDanAction: 'សកម្មភាព',
    footnotesTitle: 'កំណត់សម្គាល់ប្រវត្តិសាស្ត្រ & ទស្សនវិជ្ជា៖',
    fnGeumgangTitle: '¹ ភ្នំពេជ្រ (Geumgangsan)៖',
    fnGeumgangDesc: 'ដាក់ឈ្មោះតាមភ្នំ Keumgang និងគោលគំនិតពុទ្ធសាសនានៃ Vajra (ពេជ្រដែលមិនអាចកម្ទេចបាន) តំណាងឱ្យភាពរឹងមាំ សីលធម៌បរិសុទ្ធ និងភាពអស្ចារ្យនៃភ្នំខ្ពស់។',
    fnTaebaekTitle: '² ពន្លឺដ៏ឧត្តុង្គឧត្តម (Taebaek)៖',
    fnTaebaekDesc: 'ភ្នំពិសិដ្ឋ Baekdu ជាកន្លែងដែលស្តេច Dangun បង្កើតរដ្ឋ Gojoseon ក្រោមទស្សនវិជ្ជា Hongik Ingan (បម្រើមនុស្សជាតិ)។',
    fnSipjinTitle: '³ និមិត្តសញ្ញាអាយុយឺនយូរទាំង ១០ (Sipjangsaeng)៖',
    fnSipjinDesc: 'និមិត្តសញ្ញាប្រពៃណីកូរ៉េនៃភាពស្ថិតស្ថេរយូរអង្វែង និងភាពសុខដុមនៃសកលលោក៖ ព្រះអាទិត្យ ព្រះច័ន្ទ ភ្នំ ទឹក ថ្ម ដើមស្រល់ ឱសថទិព្វ អណ្តើក សត្វក្រៀល និងក្តាន់។',
    cardMeaningLabel: 'អត្ថន័យឈ្មោះ៖',
    cardSymbolLabel: 'គោលគំនិតនិមិត្តសញ្ញា៖',
    cardFloorLabel: 'គន្លងលើកម្រាល៖',
    cardCharacteristicLabel: 'ចរិតលក្ខណៈ៖',
    cardPhilosophicalLabel: 'គោលការណ៍ទស្សនវិជ្ជា៖',
    cardKeyTechLabel: 'បច្ចេកទេសសំខាន់ៗ៖',
    nonLinearDanProgressionTitle: 'ការវិវត្តមិនមែនលីនេអ៊ែរនៃកម្រិត Dan៖',
    competitionDynamicsTitle: 'បញ្ហាប្រឈមនៃទីលានប្រកួត៖',
    selfDefenseBunkaiTitle: 'ការការពារខ្លួនជាក់ស្តែង (Hosinsul Bunkai)៖',

    dualityPairTitle: 'គូទស្សនវិជ្ជាផ្ទុយគ្នាស៊ីសង្វាក់ (Duality Pair)៖',
    oppositeCounterpartLabel: 'ដៃគូទស្សនវិជ្ជាផ្ទុយ៖',
    switchToOppositeBtn: 'ប្តូរទៅកាន់មេគុនផ្ទុយ →',
    jooyeokTrigramLineage: 'ខ្សែស្រឡាយត្រីក្រាមជូយ៉ក (Jooyeok Lineage)',
    rankPrefix: 'កម្រិតថ្នាក់៖',
    taegukkiTrigramBadge: 'ត្រីក្រាមទង់ជាតិតេកុកគី (태극기 4대 괘)',
    coreUniversalConceptTitle: 'គោលគំនិតចក្រវាលស្នូល៖',
    cosmicDialecticTitle: 'តុល្យភាព និងវិចារវិទ្យាចក្រវាល៖',
    philosophicalDirectiveTitle: 'ការណែនាំអនុវត្តតាមទស្សនវិជ្ជា (수련 요결)៖',
    wangFloorDynamicsTitle: 'ចលនាបោះជំហានលើខ្សែគន្លង "王" (Wang Dynamics)៖',
    fourPointClockTitle: 'គន្លងទិសដៅនាឡិកា ៤ ទិស & ទីតាំងស្រែក Kihap៖',
    kihapStepPrefix: 'Kihap៖ ជំហានទី',
    wtCompetitionScoringTitle: 'លក្ខណៈវិនិច្ឆ័យដាក់ពិន្ទុ និងកាត់ពិន្ទុក្នុងការប្រកួត WT៖',
    targetDurationPrefix: 'គោលដៅ៖',
    majorDeductionsTitle: 'ការកាត់ពិន្ទុធ្ងន់ (-0.3 ពិន្ទុក្នុងមួយកំហុស)៖',
    minorDeductionsTitle: 'ការកាត់ពិន្ទុស្រាល (-0.1 ពិន្ទុក្នុងមួយកំហុស)៖',
    eightPillarsCuesTitle: 'គោលការណ៍អនុវត្តទាំង ៨ សសរស្ដម្ភ៖',
    danMasteryOfficialTitle: 'កម្រិតដាន់ជាន់ខ្ពស់ផ្លូវការ WT & គុកគីវ៉ុន (WT & Kukkiwon Dan Mastery)',
    danMasteryDoctrineTitle: 'ទស្សនវិជ្ជា និងគោលលទ្ធិកម្រិតដាន់ (Dan Doctrine)៖',
    junbiSeogiTitle: 'ជំហរត្រៀម (Junbi-seogi) និងដង្ហើមដាន់ចន (Danjeon)៖',
    introducedKeyTechTitle: 'បច្ចេកទេសគន្លឹះដែលបានណែនាំថ្មី (신규 도입 기술)៖',
    dynamicMovementCharsTitle: 'លក្ខណៈចលនា និងកម្លាំងឌីណាមិក (동작 특성)៖',
    classicalLineageTitle: 'ប្រវត្តិសាស្ត្រ និងប្រភពដើមបុរាណ (역사적 유래)៖',
    etymologyNoteLabel: 'កំណត់សម្គាល់និរុត្តិសាស្ត្រ៖',
    newPoomsaeBadge: 'ពូស៊ីថ្មីផ្លូវការគុកគីវ៉ុន (새 품새 / New Poomsae)',
    targetAgeRationaleTitle: 'ផ្នែកអាយុ និងមូលដ្ឋានវិទ្យាសាស្ត្រ',
    officialKukkiwonMeaningTitle: 'អត្ថន័យផ្លូវការគុកគីវ៉ុន (Kukkiwon Meaning)',
    floorLineSymbolTitle: 'គន្លងកម្រាល និងនិមិត្តសញ្ញាខ្សែ',
    technicalArsenalTitle: 'ប្រព័ន្ធបច្ចេកទេស និងក្បាច់សម្គាល់៖',
    signatureKicksTitle: 'បច្ចេកទេសទាត់សម្គាល់ (Signature Kicks)៖',
    signatureHandsTitle: 'បច្ចេកទេសដៃ និងប្រព័ន្ធរារាំង (Signature Hands)៖',
    philosophicalMeaningTitle: 'អត្ថន័យទស្សនវិជ្ជា និងគោលគំនិត',
    yinYangDynamicsTitle: 'តុល្យភាពយីន-យ៉ាង និងស្មារតីយុទ្ធគុន',
    movementSequenceTitle: 'លំដាប់ចលនា',
    stepBreakdownTitle: 'ការវិភាគចលនាមួយជំហានម្តងៗ',
    mandatoryKihapLabel: 'ការស្រែកបញ្ចេញសំឡេងជាកំហិត (Kihap)',
    kihapRequiredBadge: 'តម្រូវឱ្យមាន Kihap',
    completedLabel: 'បានបញ្ចប់',
    curriculumStandardFooter: 'ស្តង់ដារកម្មវិធីសិក្សាផ្លូវការ World Taekwondo & Kukkiwon',
    lineSymbolPrefix: 'និមិត្តសញ្ញាខ្សែ៖',
    termsDocumentedSuffix: 'ពាក្យបច្ចេកទេសដែលបានកត់ត្រា',
    officialPracticalPointers: 'ចំណុចណែនាំអនុវត្តផ្លូវការ',
    coachingInsightPrefix: 'គន្លឹះគ្រូបង្វឹក',
    stepsCuratedNotice: 'ការវិភាគចលនាមួយជំហានម្តងៗជាផ្លូវការកំពុងត្រូវបានរៀបចំសម្រាប់មេគុននេះ។',
    termsCuratedNotice: 'វចនានុក្រមបច្ចេកទេសកំពុងត្រូវបានធ្វើបច្ចុប្បន្នភាពសម្រាប់មេគុននេះ។',
    tipsCuratedNotice: 'គន្លឹះគ្រូបង្វឹកកំពុងត្រូវបានធ្វើបច្ចុប្បន្នភាពសម្រាប់មេគុននេះ។',
    ringGeometryDescPrefix: 'អ្នកប្រកួតត្រូវតែធ្វើតាមគន្លងធរណីមាត្រជាក់លាក់',
    ringGeometryDescSuffix: 'ឆ្លងកាត់ទីលានប្រកួត ១០ម x ១០ម ដោយចាប់ផ្តើម និងត្រឡប់មកចំណុចដើមវិញដោយគម្លាតមិនលើសពីមួយជំហានជើង។',
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

    sectionBadge: '核心板块',
    patternsCountSuffix: '套公认品势',
    catalogKoreanNav: '公认27套品势图谱 (三大系列全集)',
    foundationsKoreanNav: '品势本质内涵、源流考据与三大执教要诀',
    foundationsNavSubtitle: '为什么品势至关重要、三大常见误区与十级白带启蒙',
    taegeukKoreanNav: '周易八卦与四大阴阳对立对 (1971年历史转型)',
    taegeukNavSubtitle: '阴阳合一、八卦卦象对立统一与历史源流',
    yudanjaKoreanNav: '有段者品势 (地面汉字演武线、升段考核与实战拆解)',
    yudanjaNavSubtitle: '专属汉字演武线、考核晋段周期与Hosinsul防身拆解',

    foundationsBadge: '品势筑基与历史源流',
    partnerlessCombatTitle: '无对手模拟实战：',
    mindBodyUnityTitle: '身心合一与无压境界：',
    pillarPrefix: '核心支柱 #',
    errorPrefix: '常见误区 #',
    flawLabel: '技术缺陷：',
    grandmasterCorrectionLabel: '宗师正误要诀：',
    focusLabel: '核心要领：',

    cosmologyBadge: '宇宙哲学与武道本体论',
    yangRedEumBlue: '阳 (红) • 阴 (蓝)',
    taegeukgiConnectionTitle: '韩国太极国旗渊源 (태극기)：',
    fourCoreElementsBadge: '四大执行要素',
    elementLabel: '要素维度',
    keyPrinciplesLabel: '核心准则：',
    coordinateSystemBadge: '空间标准化坐标体系',
    wangFloorPlanTitle: '“王”字演武线与八卦运足法度',
    wangFloorPlanSubtitle: '王자 품새선과 주역 3효(三爻) 운족의 법칙 (向前上步推进 = 纯阳爻 • 原地转身/后退 = 阴爻)',
    floorGeometryBadge: '演武几何法度',
    steppingLawTitle: '三道水平横线运步法则说明：',
    steppingLawDesc: '“王”字的三道横线直接对应所演练《易经》卦象的三道爻（上爻=天、中爻=人、下爻=地）。',
    solidYangDesc: '纯阳实爻 (—–)：若学员沿着该横向路线向前上步推进移动，则该线在地表轨迹中显化为完整的连贯阳爻实线。',
    brokenUmDesc: '纯阴断爻 (– –)：若学员在该横向上仅原地换势、后退、或未向前迈步推进，则显化为中断的阴爻虚线。',
    selectTaegeukToInspect: '选择太极品势以检视演武线运足法则：',
    inspectFullDossierBtn: '查看完整演练档案 →',
    trigramPrefix: '卦象：',
    elementPrefix: '元素：',
    solidYangBadge: '纯阳实爻 (向前推进)',
    brokenUmBadge: '纯阴断爻 (原地/不前)',
    eightPillarsBadge: '演练八大支柱',
    masterCuePrefix: '宗师口诀：',
    historicalMatrixBadge: '历史演变矩阵 • 1967年八卦 vs 1971年太极',
    viewTableBtn: '表格模式',
    viewCardsBtn: '卡片模式',
    thPalgweNumber: '序号',
    thPalgweForm: '1967年传统八卦品势',
    thPalgwePattern: '八卦演武路线',
    thPatternMeaning: '演武线字形意涵',
    thTrigram: '八卦卦象',
    thTaegeukForm: '1971年公认太极品势',
    thTaegeukPattern: '太极演武路线',
    thNaturalElement: '天地五行元素',
    thTacticalNuance: '实战战术演进差异',
    allFormsWangNote: '王 (全套通用)',
    fiveIdealsTitle: '太极品势所蕴含之跆拳道五大核心宗旨',
    fiveIdealsBadge: '和平 • 和谐 • 创造 • 不屈 • 永恒',
    fiveIdealsIntro: '太极品势集中体现了跆拳道武道的核心宗旨：和平主义、和谐统一、创造精神、百折不屈与永恒性。它不仅凝练了掌握跆拳道必须熟稔的基础肢体技击动作，更深刻寄托着伴随武道修习的精神心法。正是在这些哲思熏陶之下，跆拳道升华为崇高的武道境界。',
    idealPrefix: '宗旨',
    metaphysicalOriginsBadge: '东方玄学深厚源流',
    lineageFuhHiLabel: '道统：伏羲氏 (距今3300年) • 周易 (주역 / 周易)',
    taegukkiIntegrationTitle: '太极国旗与品势演练深层融合：',
    pre1971KtaBadge: '1971年大韩跆协历史决议',
    keyEvolutionsLabel: '八卦品势向太极品势升华之核心革新：',
    fourPairsTitle: '太极四大对立统一阴阳辩证卦对 (태극 4대 대립쌍)',
    fourPairsDesc: '每套太极品势均有一套与其相对立统一的卦相伙伴，生动映射大自然永恒动态的阴阳平衡。',
    oppositesInBalanceBadge: '对立中见和谐',
    inspectPairBtn: '检视品势',

    yudanjaCurriculumBadge: '世跆联与国技院官方公认黑带教范',
    historicalClarificationsTitle: '国技院官方权威字源考据与正误勘误：',
    kupVsDanBadge: '级位与段位体系对比',
    thDimension: '体系维度',
    thTaegeukSeriesCol: '太极系列 (色带级位)',
    thYudanjaSeriesCol: '有段者系列 (黑带段位)',
    danMasteryMatrixTitle: '国技院黑带一段至九段至尊大系全览矩阵表',
    danMasteryMatrixSubtitle: '世跆联与国技院官方教范标准：段位品阶、金杠带身、品势名源起、地面汉字线、图腾哲学内涵及大宗师武德品格。',
    thDanLevel: '段位',
    thDanBelt: '黑带',
    thDanFormName: '品势名称',
    thDanMeaningOfName: '命名释义',
    thDanFloorPattern: '演武路线',
    thDanMeaningOfSymbol: '图腾涵义',
    thDanHanjaSymbol: '汉字',
    thDanMasterCharacteristic: '大宗师武德品格',
    thDanAction: '操作',
    footnotesTitle: '历史字源考据与神话渊源注记：',
    fnGeumgangTitle: '¹ 金刚山 (Geumgangsan)：',
    fnGeumgangDesc: '源自金刚山之雄浑及佛教“金刚杵 (Vajra)”之坚不可摧，象征破除一切迷执之刚硬、明澈武德与巍峨山势。',
    fnTaebaekTitle: '² 终极光明 (太白)：',
    fnTaebaekDesc: '源自檀君王俭在白头山（太白山）开辟古朝鲜之圣迹，弘扬“弘益人间 (Hongik Ingan)”造福苍生之至高开国宏愿。',
    fnSipjinTitle: '³ 十长生 (Sipjangsaeng / 십장생)：',
    fnSipjinDesc: '半岛传统十种象征长生久视与宇宙恒常和谐之自然圣物：日、月、山、水、石、松、不老草、龟、鹤、鹿。',
    cardMeaningLabel: '命名释义：',
    cardSymbolLabel: '图腾核心意涵：',
    cardFloorLabel: '地面演武轨迹：',
    cardCharacteristicLabel: '大宗师品格：',
    cardPhilosophicalLabel: '武道哲学命题：',
    cardKeyTechLabel: '核心必修技术：',
    nonLinearDanProgressionTitle: '有段者非线性进阶特点：',
    competitionDynamicsTitle: '国际大赛演武空间挑战：',
    selfDefenseBunkaiTitle: '实战防身自卫拆解 (Hosinsul Bunkai)：',

    dualityPairTitle: '哲学对立统一之配对:',
    oppositeCounterpartLabel: '对立配对品势:',
    switchToOppositeBtn: '切换至对立品势 →',
    jooyeokTrigramLineage: '周易八卦象义传承',
    rankPrefix: '段位级次:',
    taegukkiTrigramBadge: '太极旗四大天象卦 (태극기 4대 괘)',
    coreUniversalConceptTitle: '核心宇宙概念:',
    cosmicDialecticTitle: '宇宙辩证与动态平衡:',
    philosophicalDirectiveTitle: '品势修练要诀与哲学指导 (수련 요결):',
    wangFloorDynamicsTitle: '“王”字演武线步法运转机理:',
    fourPointClockTitle: '四向时钟演武轨迹与气合 (Kihap) 定位:',
    kihapStepPrefix: '气合: 第',
    wtCompetitionScoringTitle: '世界跆联 (WT) 竞技品势裁判扣分标准:',
    targetDurationPrefix: '标准时长:',
    majorDeductionsTitle: '严重扣分项 (每次 -0.3 分):',
    minorDeductionsTitle: '轻微扣分项 (每次 -0.1 分):',
    eightPillarsCuesTitle: '八大核心要领演练提示:',
    danMasteryOfficialTitle: '世界跆联 (WT) 与国技院 (Kukkiwon) 官方段位大师标准',
    danMasteryDoctrineTitle: '段位修养精要与哲学宗旨:',
    junbiSeogiTitle: '准备姿势 (준비서기) 与丹田呼吸法 (Danjeon):',
    introducedKeyTechTitle: '新引入核心技术 (신규 도입 기술):',
    dynamicMovementCharsTitle: '动作动态特性 (동작 특성):',
    classicalLineageTitle: '古典传承与历史渊源 (역사적 유래):',
    etymologyNoteLabel: '词源考证:',
    newPoomsaeBadge: '国技院官方新品势 (새 품새 / New Poomsae)',
    targetAgeRationaleTitle: '年龄组别与研发依据',
    officialKukkiwonMeaningTitle: '国技院官方释义',
    floorLineSymbolTitle: '演武路线与路线符号',
    technicalArsenalTitle: '技术体系与标志性动作:',
    signatureKicksTitle: '代表性踢技 (Signature Kicks):',
    signatureHandsTitle: '代表性手技与防守系统 (Signature Hands):',
    philosophicalMeaningTitle: '哲学寓意与概念内涵',
    yinYangDynamicsTitle: '阴阳生克与武道精神',
    movementSequenceTitle: '动作演练顺序',
    stepBreakdownTitle: '分解动作详解',
    mandatoryKihapLabel: '必须发声发劲 (Kihap / 气合)',
    kihapRequiredBadge: '要求发声气合',
    completedLabel: '已完成',
    curriculumStandardFooter: '世界跆拳道联盟 (WT) 与国技院 (Kukkiwon) 官方教学标准',
    lineSymbolPrefix: '路线符号:',
    termsDocumentedSuffix: '条术语已收录',
    officialPracticalPointers: '官方实战演练要点',
    coachingInsightPrefix: '指导要诀',
    stepsCuratedNotice: '官方逐动分解教学正在完善整理中。',
    termsCuratedNotice: '该品势的技术术语词汇表正在持续更新中。',
    tipsCuratedNotice: '该品势的教练要领正在整理更新中。',
    ringGeometryDescPrefix: '参赛选手必须遵循严格的几何路线',
    ringGeometryDescSuffix: '在 10m x 10m 比赛区域内演练，起式与收式必须回到原点坐标，允许误差在一脚长以内。',
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

    sectionBadge: '섹션',
    patternsCountSuffix: '개 공인 품새',
    catalogKoreanNav: '공인 27개 품새 도감 (3대 시리즈)',
    foundationsKoreanNav: '품새의 본질·기원 및 3대 수련 요결',
    foundationsNavSubtitle: '품새의 중요성, 빈출 실수 및 10급 흰 띠 기초',
    taegeukKoreanNav: '주역 8괘와 4대 대립쌍 (1971년 전환)',
    taegeukNavSubtitle: '음양 일치, 괘상 대립쌍 및 역사적 전환',
    yudanjaKoreanNav: '유단자 품새 (한자선·승단·실전 공방)',
    yudanjaNavSubtitle: '고유 한자선, 승단 계제 및 호신술 응용',

    foundationsBadge: '무도적 기원과 본질',
    partnerlessCombatTitle: '상대 없는 가상 실전 공방:',
    mindBodyUnityTitle: '압박 없는 심신 일치와 집중:',
    pillarPrefix: '핵심 요결 #',
    errorPrefix: '빈출 오류 #',
    flawLabel: '오류 내용:',
    grandmasterCorrectionLabel: '사범 교정 요결:',
    focusLabel: '수련 초점:',

    cosmologyBadge: '우주관과 무도 철학',
    yangRedEumBlue: '양 (적색) • 음 (청색)',
    taegeukgiConnectionTitle: '태극기와 품새의 연결성:',
    fourCoreElementsBadge: '4대 구성 요소',
    elementLabel: '구성 요소',
    keyPrinciplesLabel: '핵심 수련 원칙:',
    coordinateSystemBadge: '공인 4방향 시계좌표 체계',
    wangFloorPlanTitle: '王자 품새선과 주역 3효(三爻) 운족의 법칙',
    wangFloorPlanSubtitle: '王자 품새선과 주역 3효(三爻) 운족의 법칙 (전진 보법 = 양 • 제자리/후진 = 음)',
    floorGeometryBadge: '품새선 기하학',
    steppingLawTitle: '품새선 3개 횡선의 운족 원리:',
    steppingLawDesc: '임금 왕(王)자의 3개 가로선은 주역 3효와 1:1로 정확히 대응합니다 (상선=하늘, 중선=사람, 하선=땅).',
    solidYangDesc: '양효 실선 (—–): 해당 가로선을 따라 전진 보법을 취하면 끊어지지 않는 양효가 성립합니다.',
    brokenUmDesc: '음효 점선 (– –): 해당 가로선에서 전진하지 않고 제자리 동작, 후진, 또는 방향 전환만 수행하면 음효가 성립합니다.',
    selectTaegeukToInspect: '태극 품새를 선택하여 품새선 운족 법칙 확인:',
    inspectFullDossierBtn: '상세 품새 교본 보기 →',
    trigramPrefix: '괘상:',
    elementPrefix: '요소:',
    solidYangBadge: '양효 실선 (전진)',
    brokenUmBadge: '음효 점선 (비전진)',
    eightPillarsBadge: '품새 시연 8대 요결',
    masterCuePrefix: '사범 구령:',
    historicalMatrixBadge: '역사적 비교 매트릭스 • 1967년 팔괘 vs 1971년 태극',
    viewTableBtn: '표 보기',
    viewCardsBtn: '카드 보기',
    thPalgweNumber: '번호',
    thPalgweForm: '1967년 팔괘 품새',
    thPalgwePattern: '팔괘 품새선',
    thPatternMeaning: '품새선 의미',
    thTrigram: '괘상',
    thTaegeukForm: '1971년 태극 품새',
    thTaegeukPattern: '태극 품새선',
    thNaturalElement: '음양오행 요소',
    thTacticalNuance: '기술적 차이점 및 전술',
    allFormsWangNote: '王 (전 품새 공통)',
    fiveIdealsTitle: '태극 품새에 담긴 태권도 5대 핵심 이념',
    fiveIdealsBadge: '평화 • 일치 • 창조 • 백절불굴 • 영원',
    fiveIdealsIntro: '태극 품새는 태권도의 5대 무도 이념인 평화주의, 일치와 조화, 창조적 정신, 백절불굴, 그리고 영원성을 형상화하고 있습니다. 태권도를 숙달하기 위해 필수적인 신체 동작뿐만 아니라, 수련에 수반되는 숭고한 무도 철학을 온전히 담고 있습니다.',
    idealPrefix: '이념',
    metaphysicalOriginsBadge: '심오한 동양 형이상학의 근원',
    lineageFuhHiLabel: '도통: 복희씨 (3,300년 전) • 주역 (주역 / 周易)',
    taegukkiIntegrationTitle: '태극기와 품새 동작의 일체화:',
    pre1971KtaBadge: '1971년 KTA 품새 대전환 결의',
    keyEvolutionsLabel: '팔괘에서 태극으로의 핵심 전환점:',
    fourPairsTitle: '태극 4대 대립쌍(對立雙)의 음양 조화',
    fourPairsDesc: '모든 태극 품새는 대칭되는 대립쌍을 가지며, 이는 자연계의 영원한 음양 균형을 형상화합니다.',
    oppositesInBalanceBadge: '대립 속의 조화',
    inspectPairBtn: '상세 검토',

    yudanjaCurriculumBadge: 'WT & 국기원 공인 유단자 승단 교육과정',
    historicalClarificationsTitle: '국기원 공인 어원 고증 및 명칭 정정 안내:',
    kupVsDanBadge: '유급자와 유단자 구조 비교',
    thDimension: '비교 항목',
    thTaegeukSeriesCol: '태극 품새 (유급자)',
    thYudanjaSeriesCol: '유단자 품새 (유단자)',
    danMasteryMatrixTitle: '국기원 공인 1단~9단 유단자 품새 종합 매트릭스',
    danMasteryMatrixSubtitle: 'WT 및 국기원 공인 기준: 단수, 금색 줄무늬 띠, 품새명 의미, 한자 품새선, 상징적 의미, 사범의 덕목.',
    thDanLevel: '단수',
    thDanBelt: '띠',
    thDanFormName: '품새명',
    thDanMeaningOfName: '이름의 의미',
    thDanFloorPattern: '품새선',
    thDanMeaningOfSymbol: '상징의 의미',
    thDanHanjaSymbol: '한자',
    thDanMasterCharacteristic: '사범의 덕목',
    thDanAction: '상세',
    footnotesTitle: '역사적 어원 고증 및 신화적 주석:',
    fnGeumgangTitle: '¹ 금강산(金剛山):',
    fnGeumgangDesc: '불교의 금강저(Vajra)와 한반도의 명산 금강산에서 유래하여 어떤 것에도 부서지지 않는 단단함과 도덕적 지조, 웅장한 기개를 상징.',
    fnTaebaekTitle: '² 궁극의 밝음(태백):',
    fnTaebaekDesc: '단군왕검이 고조선을 개국한 영산 백두산(태백산)의 옛 이름으로, 널리 인간을 이롭게 한다는 홍익인간(弘益人間)의 개천 이념.',
    fnSipjinTitle: '³ 십장생(十長生):',
    fnSipjinDesc: '해, 달, 산, 물, 돌, 소나무, 불로초, 거북, 학, 사슴 등 동양 전통에서 불로장생과 조화로운 영속성을 상징하는 열 가지 자연물.',
    cardMeaningLabel: '이름의 의미:',
    cardSymbolLabel: '상징 개념:',
    cardFloorLabel: '품새선 궤적:',
    cardCharacteristicLabel: '사범의 기질:',
    cardPhilosophicalLabel: '철학적 요결:',
    cardKeyTechLabel: '주요 핵심 기술:',
    nonLinearDanProgressionTitle: '비선형적 유단자 수련 계제:',
    competitionDynamicsTitle: '공인 경기 품새선의 공간적 과제:',
    selfDefenseBunkaiTitle: '실전 호신술(Hosinsul Bunkai) 응용:',

    dualityPairTitle: '철학적 대대(待對) 대칭 쌍:',
    oppositeCounterpartLabel: '대칭 대응 품새:',
    switchToOppositeBtn: '대칭 품새로 전환 →',
    jooyeokTrigramLineage: '주역(周易) 괘상 계보',
    rankPrefix: '급/단 단계:',
    taegukkiTrigramBadge: '태극기 4대 괘 (건·곤·감·리)',
    coreUniversalConceptTitle: '핵심 우주론적 개념:',
    cosmicDialecticTitle: '우주 변증법 및 역학적 균형:',
    philosophicalDirectiveTitle: '품새 수련 요결 및 철학적 지침 (수련 요결):',
    wangFloorDynamicsTitle: '王자 품새선 보법 운용 동학:',
    fourPointClockTitle: '4방 시계 궤적 및 기합(Kihap) 위치:',
    kihapStepPrefix: '기합: 제',
    wtCompetitionScoringTitle: '공인 WT 경기 품새 채점 및 감점 기준:',
    targetDurationPrefix: '규정 시간:',
    majorDeductionsTitle: '중감점 사항 (각 -0.3점 감점):',
    minorDeductionsTitle: '소감점 사항 (각 -0.1점 감점):',
    eightPillarsCuesTitle: '8대 핵심 원리 수행 요결:',
    danMasteryOfficialTitle: '공인 WT & 국기원 유단자 마스터리 (Kukkiwon Dan Mastery)',
    danMasteryDoctrineTitle: '유단자 수련 교의 및 철학적 지침 (Dan Doctrine):',
    junbiSeogiTitle: '준비서기 (Junbi-seogi) 및 단전호흡 (Danjeon):',
    introducedKeyTechTitle: '신규 도입 핵심 기술 (Key Techniques):',
    dynamicMovementCharsTitle: '동작 역학 특성 (동작 특성):',
    classicalLineageTitle: '역사적 유래 및 고전적 계보 (역사적 유래):',
    etymologyNoteLabel: '어원 및 명칭 해설:',
    newPoomsaeBadge: '국기원 공인 신규 개발 새 품새 (New Poomsae)',
    targetAgeRationaleTitle: '연령 부문 및 개발 취지',
    officialKukkiwonMeaningTitle: '국기원 공인 공식 의의',
    floorLineSymbolTitle: '품새선 및 도식 기호',
    technicalArsenalTitle: '기술 체계 및 시그니처 동작:',
    signatureKicksTitle: '대표 발차기 기술 (Signature Kicks):',
    signatureHandsTitle: '대표 손동작 및 방어 체계 (Signature Hands):',
    philosophicalMeaningTitle: '철학적 의미 및 기본 개념',
    yinYangDynamicsTitle: '음양 조화 및 무도 정신',
    movementSequenceTitle: '동작 순서',
    stepBreakdownTitle: '단계별 세부 동작 분석',
    mandatoryKihapLabel: '필수 기합 (Mandatory Kihap)',
    kihapRequiredBadge: '기합 필수',
    completedLabel: '완료',
    curriculumStandardFooter: '공인 세계태권도연맹 (WT) 및 국기원 교육 과정 표준',
    lineSymbolPrefix: '품새선 기호:',
    termsDocumentedSuffix: '개 공식 용어 등재',
    officialPracticalPointers: '공인 실전 지도 요결',
    coachingInsightPrefix: '지도 요령',
    stepsCuratedNotice: '공인 동작별 세부 분해 지침이 현재 체계화 중입니다.',
    termsCuratedNotice: '해당 품새의 기술 용어 사전이 업데이트 중입니다.',
    tipsCuratedNotice: '해당 품새의 마스터 지도 팁이 정리 중입니다.',
    ringGeometryDescPrefix: '선수는 10m x 10m 경기장 내에서 지정된 엄격한 기하학적 품새선',
    ringGeometryDescSuffix: '을 준수해야 하며, 시점과 종점은 1보(발 하나 너비) 이내의 오차 범위 내에서 일치해야 합니다.',
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
          {
            danRank: '1st Dan',
            beltStripes: 1,
            beltStripeRoman: 'I',
            name: 'Koryo (កូរ្យ៉ូ)',
            koreanName: '고려',
            meaningOfName: 'រាជវង្សកូរ្យ៉ូបុរាណ (Ancient Korea)',
            hanjaCharacter: '士',
            meaningOfSymbol: 'អ្នកប្រាជ្ញ Seonbi & អ្នកចម្បាំងសុចរិត',
            characterMeaning: 'អ្នកប្រាជ្ញ និងអ្នកចម្បាំងការពារជាតិ',
            floorPatternShape: '士 (បន្ទាត់អ្នកប្រាជ្ញ-អ្នកចម្បាំង)',
            masterCharacteristic: 'មេគ្រូប្រកបដោយប្រាជ្ញា (Wise)',
            masterVirtue: 'ស្មារតីស្នេហាជាតិ និងភាពរឹងមាំមិនចុះចាញ់ចំពោះការឈ្លានពាន',
            totalMoves: 30,
          },
          {
            danRank: '2nd Dan',
            beltStripes: 2,
            beltStripeRoman: 'II',
            name: 'Keumgang (គឹមហ្កាង)',
            koreanName: '금강',
            meaningOfName: 'ភ្នំពេជ្រ និងត្បូងពេជ្រមិនអាចបំបែកបាន¹',
            nameFootnote: 'ភ្នំពេជ្រ (Geumgangsan)៖ មានប្រភពពីក្បួន Vajra នៃពុទ្ធសាសនា តំណាងឱ្យភាពរឹងមាំ មិនរង្គោះរង្គើ និងភ្នំដ៏ខ្ពង់ខ្ពស់។',
            hanjaCharacter: '山',
            meaningOfSymbol: 'ភ្នំដ៏មហិមា (Mountain)',
            characterMeaning: 'ភ្នំពេជ្រ & ភាពរឹងមាំដូចថ្មពេជ្រ',
            floorPatternShape: '山 (បន្ទាត់ភ្នំ)',
            masterCharacteristic: 'មេគ្រូមិនអាចបំបែកបាន (Unbreakable)',
            masterVirtue: 'ភាពរឹងមាំខាងសីលធម៌ និងស្ថេរភាពមិនរង្គោះរង្គើចំពោះឧបសគ្គ',
            totalMoves: 27,
          },
          {
            danRank: '3rd Dan',
            beltStripes: 3,
            beltStripeRoman: 'III',
            name: 'Taebaek (ថែបែក)',
            koreanName: '태백',
            meaningOfName: 'ពន្លឺដ៏ឧត្តុង្គឧត្តម²',
            nameFootnote: 'ពន្លឺដ៏ឧត្តុង្គឧត្តម (Taebaek)៖ ភ្នំពិសិដ្ឋ Baekdu ជាកន្លែងដែលស្តេច Dangun បង្កើតរដ្ឋ Gojoseon ក្រោមទស្សនវិជ្ជា Hongik Ingan (បម្រើមនុស្សជាតិ)។',
            hanjaCharacter: '工',
            meaningOfSymbol: 'ស្ពានរវាងមេឃ និងផែនដី',
            characterMeaning: 'ការបង្កើតជាតិ & ពន្លឺបំភ្លឺមនុស្សជាតិ',
            floorPatternShape: '工 (បន្ទាត់ស្ពានតភ្ជាប់មេឃ និងដី)',
            masterCharacteristic: 'មេគ្រូប្រកបដោយស្មារតីវិញ្ញាណ (Spiritual)',
            masterVirtue: 'ឧត្តមគតិដ៏ពិសិដ្ឋនៃការបម្រើ និងផ្តល់ផលប្រយោជន៍ដល់មនុស្សជាតិ (Hongik Ingan)',
            totalMoves: 26,
          },
          {
            danRank: '4th Dan',
            beltStripes: 4,
            beltStripeRoman: 'IIII',
            name: 'Pyongwon (ព្យុងវ៉ុន)',
            koreanName: '평원',
            meaningOfName: 'វាលទំនាបដ៏ធំល្វឹងល្វើយ (Vast Plain)',
            hanjaCharacter: '一',
            meaningOfSymbol: 'វាលស្មៅធំទូលាយ (The Plain)',
            characterMeaning: 'វាលទំនាបដែលផ្តល់កំណើតដល់ជីវិត',
            floorPatternShape: '一 (បន្ទាត់ត្រង់ផ្តេក)',
            masterCharacteristic: 'មេគ្រូប្រកបដោយសន្តិភាព (Peaceful)',
            masterVirtue: 'ចិត្តទូលាយដូចវាលស្មៅដែលចិញ្ចឹមបីបាច់ជីវិតគ្រប់ប្រភេទដោយគ្មានការរើសអើង',
            totalMoves: 21,
          },
          {
            danRank: '5th Dan',
            beltStripes: 5,
            beltStripeRoman: 'IIIII',
            name: 'Shipjin (ស៊ីបជីន)',
            koreanName: '십진',
            meaningOfName: 'ប្រព័ន្ធទសភាគ & និមិត្តសញ្ញាអាយុយឺនយូរទាំង ១០³',
            nameFootnote: 'និមិត្តសញ្ញាអាយុយឺនយូរទាំង ១០ (Sipjangsaeng)៖ ព្រះអាទិត្យ ព្រះច័ន្ទ ភ្នំ ទឹក ថ្ម ដើមស្រល់ ឱសថទិព្វ អណ្តើក សត្វក្រៀល និងក្តាន់។',
            hanjaCharacter: '十',
            meaningOfSymbol: 'លេខដប់ & ភាពពេញលេញ (Ten)',
            characterMeaning: 'ប្រព័ន្ធទសភាគ និងនិមិត្តសញ្ញាអាយុយឺនយូរ ១០',
            floorPatternShape: '十 (បន្ទាត់ឈើឆ្កាងនៃភាពគ្មានទីបញ្ចប់)',
            masterCharacteristic: 'មេគ្រូប្រកបដោយសុខភាព និងអាយុយឺនយូរ (Healthy)',
            masterVirtue: 'ការអភិវឌ្ឍឥតឈប់ឈរ និងការរស់នៅប្រកបដោយសុខដុមតាមច្បាប់ធម្មជាតិ',
            totalMoves: 28,
          },
          {
            danRank: '6th Dan',
            beltStripes: 6,
            beltStripeRoman: 'IIIIII',
            name: 'Jitae (ជីថែ)',
            koreanName: '지태',
            meaningOfName: 'មនុស្សឈរលើផែនដីសម្លឹងមើលទៅមេឃ',
            hanjaCharacter: 'ㅗ',
            meaningOfSymbol: 'ជំហានរឹងមាំរបស់មនុស្សលើដី',
            characterMeaning: 'មនុស្សលោកដែលឈរយ៉ាងរឹងមាំលើផែនដី',
            floorPatternShape: 'ㅗ (បន្ទាត់មនុស្សឈរលើផែនដី)',
            masterCharacteristic: 'មេគ្រូពឹងផ្អែកលើខ្លួនឯង & បន្សល់ទុកកេរដំណែល (Legacy)',
            masterVirtue: 'ការឈរយ៉ាងរឹងមាំលើផែនដីដោយយុត្តិធម៌ និងការជម្នះរាល់ឧបសគ្គក្នុងជីវិត',
            totalMoves: 28,
          },
          {
            danRank: '7th Dan',
            beltStripes: 7,
            beltStripeRoman: 'IIIIIII',
            name: 'Cheonkwon (ឆនក្វន់)',
            koreanName: '천권',
            meaningOfName: 'អំណាច និងមហិទ្ធិឫទ្ធិនៃមេឃា (Heavenly Might)',
            hanjaCharacter: '丅',
            meaningOfSymbol: 'មេឃាដ៏ធំធេងដែលគ្របដណ្តប់លើលោក',
            characterMeaning: 'មេឃាដែលមើលថែពិភពលោកទាំងមូល',
            floorPatternShape: '丅 (បន្ទាត់មេឃាក្រឡេកមើលមនុស្សលោក)',
            masterCharacteristic: 'មេគ្រូប្រកបដោយការគោរព និងស្មោះត្រង់ (Pious)',
            masterVirtue: 'ការលះបង់នូវអញ និងការមើលពិភពលោកពីទស្សនៈដ៏ខ្ពង់ខ្ពស់នៃមេឃា',
            totalMoves: 26,
          },
          {
            danRank: '8th Dan',
            beltStripes: 8,
            beltStripeRoman: 'IIIIIIII',
            name: 'Hansoo (ហាន់ស៊ូ)',
            koreanName: '한수',
            meaningOfName: 'ទឹកជាប្រភពនៃជីវិតទាំងអស់ (Origin Water)',
            hanjaCharacter: '水',
            meaningOfSymbol: 'ទឹកហូរ និងភាពបត់បែន (Water)',
            characterMeaning: 'ទឹកជាប្រភពដើម និងសារធាតុចិញ្ចឹមនៃជីវិត',
            floorPatternShape: '水 (បន្ទាត់អក្សរទឹក)',
            masterCharacteristic: 'មេគ្រូប្រកបដោយភាពបត់បែន និងលំហូរ (Fluid)',
            masterVirtue: 'ភាពទន់ភ្លន់ដូចទឹក—ហូរចូលគ្រប់កន្លែង តែមានថាមពលកម្ទេចថ្មភ្នំ',
            totalMoves: 27,
          },
          {
            danRank: '9th Dan',
            beltStripes: 9,
            beltStripeRoman: 'IIIIIIIII',
            name: 'Ilyo (អ៊ីលយ៉ូ)',
            koreanName: '일여',
            meaningOfName: 'ភាពជាតែមួយនៃកាយ និងចិត្ត (Oneness)',
            hanjaCharacter: '卍',
            meaningOfSymbol: 'ភាពជាតែមួយនៃពុទ្ធសាសនា (Non-Duality)',
            characterMeaning: 'ទស្សនវិជ្ជាព្រះសង្ឃ Wonhyo ភាពជាតែមួយនៃកាយ និងចិត្ត',
            floorPatternShape: '卍 (បន្ទាត់ភាពសុខដុមនៃសកលលោក)',
            masterCharacteristic: 'មហាមេគ្រូប្រកបដោយសុខដុមភាពពេញលេញ (Harmonious)',
            masterVirtue: 'ការរលាយចូលគ្នារវាងរាងកាយ ចិត្ត បច្ចេកទេស និងសកលលោកជាធ្លុងមួយ',
            totalMoves: 23,
          },
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
          {
            danRank: '一段 (1st Dan)',
            beltStripes: 1,
            beltStripeRoman: 'I',
            name: '高丽 (Koryo)',
            koreanName: '고려',
            meaningOfName: '高丽古国国号 (Ancient Korea)',
            hanjaCharacter: '士',
            meaningOfSymbol: '学士文人与尚武义士 (Scholar-Warrior)',
            characterMeaning: '学士文人与尚武义士 (Scholar-Warrior)',
            floorPatternShape: '士 (士字线)',
            masterCharacteristic: '智者之范 (Wise)',
            masterVirtue: '爱国尚武之魂与坚贞不屈的民族气节',
            totalMoves: 30,
          },
          {
            danRank: '二段 (2nd Dan)',
            beltStripes: 2,
            beltStripeRoman: 'II',
            name: '金刚 (Keumgang)',
            koreanName: '금강',
            meaningOfName: '金刚石与金刚山¹',
            nameFootnote: '金刚山(金剛山)：源自佛教金刚杵(Vajra)之不可摧毁，象征粉碎迷妄的刚毅武德与巍峨山势。',
            hanjaCharacter: '山',
            meaningOfSymbol: '巍峨名山 (Mountain)',
            characterMeaning: '金刚山之巍峨雄壮 (Diamond Mountain)',
            floorPatternShape: '山 (山字线)',
            masterCharacteristic: '坚不可摧 (Unbreakable)',
            masterVirtue: '如金刚石般粉碎迷妄的刚毅武德与泰山般稳固',
            totalMoves: 27,
          },
          {
            danRank: '三段 (3rd Dan)',
            beltStripes: 3,
            beltStripeRoman: 'III',
            name: '太白 (Taebaek)',
            koreanName: '태백',
            meaningOfName: '终极光明²',
            nameFootnote: '终极光明(太白)：檀君王俭开辟古朝鲜之白头圣山，弘扬“弘益人间(弘益人間)”之开国大义。',
            hanjaCharacter: '工',
            meaningOfSymbol: '沟通天地之桥梁 (Bridge)',
            characterMeaning: '天帝开国与弘益人间 (Sacred Mountain)',
            floorPatternShape: '工 (工字线 / 通天达地之梁)',
            masterCharacteristic: '浩然之灵 (Spiritual)',
            masterVirtue: '光明正大照亮苍生的浩然正气与崇高道德',
            totalMoves: 26,
          },
          {
            danRank: '四段 (4th Dan)',
            beltStripes: 4,
            beltStripeRoman: 'IIII',
            name: '平原 (Pyongwon)',
            koreanName: '평원',
            meaningOfName: '一望无际之苍茫平原 (Expansive Plain)',
            hanjaCharacter: '一',
            meaningOfSymbol: '辽阔平原 (The Plain)',
            characterMeaning: '一望无际之生命平原 (Expansive Plain)',
            floorPatternShape: '一 (一字单横线)',
            masterCharacteristic: '平和慈悲 (Peaceful)',
            masterVirtue: '坦荡开阔容纳万物之慈悲包容与平和心境',
            totalMoves: 21,
          },
          {
            danRank: '五段 (5th Dan)',
            beltStripes: 5,
            beltStripeRoman: 'IIIII',
            name: '十进 (Shipjin)',
            koreanName: '십진',
            meaningOfName: '十进制无限递增与十长生³',
            nameFootnote: '十长生(十長生)：日、月、山、水、石、松、不老草、龟、鹤、鹿十种永恒长青圣物。',
            hanjaCharacter: '十',
            meaningOfSymbol: '圆满数“十” (Ten)',
            characterMeaning: '十进制无限递增与十长生 (Decimal Longevity)',
            floorPatternShape: '十 (十字交叉线)',
            masterCharacteristic: '长生康宁 (Healthy)',
            masterVirtue: '天道运行无止境之自强不息与生命秩序',
            totalMoves: 28,
          },
          {
            danRank: '六段 (6th Dan)',
            beltStripes: 6,
            beltStripeRoman: 'IIIIII',
            name: '地跆 (Jitae)',
            koreanName: '지태',
            meaningOfName: '人类立足大地顶天立地 (Man on Earth)',
            hanjaCharacter: 'ㅗ',
            meaningOfSymbol: '立足大地仰望天空之人',
            characterMeaning: '人类立足大地顶天立地 (Upright Human)',
            floorPatternShape: 'ㅗ (地平立人线)',
            masterCharacteristic: '自强立世与万代宗风 (Legacy)',
            masterVirtue: '双足扎根大地战胜人间磨难之魄力与道统传承',
            totalMoves: 28,
          },
          {
            danRank: '七段 (7th Dan)',
            beltStripes: 7,
            beltStripeRoman: 'IIIIIII',
            name: '天拳 (Cheonkwon)',
            koreanName: '천권',
            meaningOfName: '浩瀚苍天之至高威权 (Heavenly Might)',
            hanjaCharacter: '丅',
            meaningOfSymbol: '从天而降俯瞰尘寰之人',
            characterMeaning: '浩瀚苍天俯瞰人间 (Heavenly Canopy)',
            floorPatternShape: '丅 (天幕俯察线)',
            masterCharacteristic: '天命虔敬 (Pious)',
            masterVirtue: '超脱私欲局限归于苍穹宇宙之大觉悟',
            totalMoves: 26,
          },
          {
            danRank: '八段 (8th Dan)',
            beltStripes: 8,
            beltStripeRoman: 'IIIIIIII',
            name: '汉水 (Hansoo)',
            koreanName: '한수',
            meaningOfName: '万物生命之源泉活水 (Origin Water)',
            hanjaCharacter: '水',
            meaningOfSymbol: '上善若水 (Water)',
            characterMeaning: '万物生命之源泉活水 (Origin Water)',
            floorPatternShape: '水 (水字波浪线)',
            masterCharacteristic: '随方就圆上善若水 (Fluid)',
            masterVirtue: '上善若水避实就虚滴水穿石之包容与柔韧',
            totalMoves: 27,
          },
          {
            danRank: '九段 (9th Dan)',
            beltStripes: 9,
            beltStripeRoman: 'IIIIIIIII',
            name: '一如 (Ilyo)',
            koreanName: '일여',
            meaningOfName: '真如一心与身心不二 (Oneness)',
            hanjaCharacter: '卍',
            meaningOfSymbol: '佛学真如境界 (Non-Duality)',
            characterMeaning: '身心不二与真如一心 (Buddhist Non-Duality)',
            floorPatternShape: '卍 (一如圆环线)',
            masterCharacteristic: '物我两忘圆满调和 (Harmonious)',
            masterVirtue: '技进乎道物我两忘之无上武道大圆满境地',
            totalMoves: 23,
          },
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

export interface FourExecutionElementsData {
  title: string
  subtitle: string
  summary: string
  elements: Array<{
    id: string
    title: string
    koreanTitle: string
    concept: string
    details: string[]
    practicalApplication: string
  }>
  wangFloorRule: {
    title: string
    chineseCharacter: string
    definition: string
    yangRule: string
    umRule: string
    philosophicalSignificance: string
  }
  clockSystem: {
    title: string
    description: string
    directions: Array<{
      hour: string
      direction: string
      koreanName: string
      tacticalRole: string
    }>
  }
}

export interface EightPerformancePillarsData {
  title: string
  subtitle: string
  summary: string
  pillars: Array<{
    number: number
    title: string
    koreanTitle: string
    summary: string
    executionGuide: string
    masterCue: string
  }>
}

export interface PalgweComparisonData {
  title: string
  subtitle: string
  historicalTimeline: string
  summary: string
  forms: Array<{
    number: number
    name: string
    trigram: string
    floorPattern: string
    patternDefinition: string
    element: string
    taegeukCounterpart: string
    keyDivergence: string
  }>
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
  fourExecutionElements?: FourExecutionElementsData
  eightPerformancePillars?: EightPerformancePillarsData
  palgweComparison?: PalgweComparisonData
}

export const EN_FOUR_EXECUTION_ELEMENTS: FourExecutionElementsData = {
  title: 'The 4 Core Elements of Poomsae Execution',
  subtitle: 'Pattern, Direction, Stance, and Technique (품새의 4대 구성 요소)',
  summary:
    'Classical World Taekwondo poomsae theory (Ronald A. Southwick, 2005) dictates that every form is executed through four fundamental, interdependent elements: the floor Pattern, spatial Direction, foundational Stance, and kinetic Technique.',
  elements: [
    {
      id: 'pattern',
      title: '1. Pattern (도형 / Floor Trajectory)',
      koreanTitle: '도형 (Floor Trajectory & Character)',
      concept: 'The geometric shape drawn by the practitioner’s feet on the dojang floor.',
      details: [
        'All eight Taegeuk poomsae follow the Chinese character "王" (Wang / King).',
        'Each of the three horizontal lines of "王" corresponds directly to one line of that form’s trigram (Top = Heaven, Middle = Man, Bottom = Earth).',
        'Palgwe forms vary by character: Palgwe 1–4 & 6 use "工" (Gong / Work), Palgwe 5 uses "干" (Gan / Shield), Palgwe 7 uses "下" (Ha / Below), and Palgwe 8 uses "土" (Tu / Earth).',
        'Black Belt forms each follow unique Hanja characters (士, 山, 工, 一, 十, ㅗ, 丅, 水, 卍).',
      ],
      practicalApplication:
        'Return to the exact origin spot (Joon-bi line) upon completion; deviations indicate faulty stance lengths or imprecise pivot axes.',
    },
    {
      id: 'direction',
      title: '2. Direction (방향 / Direction - The Clock Method)',
      koreanTitle: '방향 (The 4-Point Clock Method)',
      concept: 'Spatial orientation governing which angle the practitioner faces throughout the form.',
      details: [
        '12 o’clock (Front / Buk - 북): Direct engagement with imaginary forward opponent.',
        '3 o’clock (Right / Dong - 동): 90-degree lateral flank defense and counter-attack.',
        '6 o’clock (Rear / Nam - 남): Return path, retrogression, and rear threat neutralization.',
        '9 o’clock (Left / Seo - 서): Initial 90-degree pivot initiating all horizontal lines.',
      ],
      practicalApplication:
        'All Taegeuk and Palgwe forms require the student to face only these four cardinal compass points, eliminating oblique guesswork.',
    },
    {
      id: 'stance',
      title: '3. Stance (서기 / Stance)',
      koreanTitle: '서기 (Weight Distribution & Center of Gravity)',
      concept: 'Positioning and spacing of feet, knee flexion, and body weight distribution.',
      details: [
        'Ap-seogi (Walking Stance): 50/50 equal balance, 1 foot-length step, naturally upright.',
        'Ap-kubi (Forward Stance): 70% front leg / 30% rear leg, 4–4.5 foot-lengths, deep power root.',
        'Dwit-kubi (Back Stance / L-Stance): 70% rear leg / 30% front leg, heels aligned on single line at 90° angle.',
        'Beom-seogi (Tiger Stance): 90–100% rear leg weight, front heel elevated, coiled spring readiness.',
        'Juchum-seogi (Riding Stance): 50/50 balance, 2 foot-lengths wide, parallel feet, hips lowered.',
      ],
      practicalApplication:
        'Proper stance is the foundation of kinetic force transmission. A flawed stance bleeds power and breaks balance during strikes.',
    },
    {
      id: 'technique',
      title: '4. Technique (기술 / Technique)',
      koreanTitle: '기술 (Chambering, Trajectory & Impact)',
      concept: 'Methods of blocking, striking, thrusting, and kicking with maximum biomechanical efficiency.',
      details: [
        'Chambering: Every block and strike starts from an origin point (e.g. opposite shoulder, hip, ear) to generate rotational momentum.',
        'Hip Torque: Rotational snap of the pelvis aligns with the final 10% of technique delivery.',
        'Striking Weapons: Fists (Joomeok), Knife-hands (Sonnal), Spear-hands (Pyon-sonkkeut), Elbows (Palkoop), and Foot-blades (Balnal).',
        'Kicking Dynamics: Chamber -> Extend -> Strike with dedicated weapon (Ap-chook / Balnal) -> Re-chamber before controlled landing.',
      ],
      practicalApplication:
        'Technique must look crisp and authentic—not pantomime. Deliver every movement as if encountering an actual opponent.',
    },
  ],
  wangFloorRule: {
    title: 'The "王" (King) Floor Plan & The Trigram Stepping Law',
    chineseCharacter: '王',
    definition:
      'In Taegeuk forms, the three horizontal lines of the Chinese character "王" directly represent the three lines of the I Ching trigram. The top line represents Heaven, the middle line represents Man, and the bottom line represents Earth.',
    yangRule:
      'Solid Line (Yang —–): If the practitioner advances (takes a step forward) along the horizontal line, that line manifests as a solid, unbroken Yang line.',
    umRule:
      'Broken Line (Um – –): If the practitioner does not take a step forward along the horizontal line (e.g., executing in place, retreating, or turning without forward advance), that line manifests as a broken Um line.',
    philosophicalSignificance:
      'This direct correlation allows the martial artist to literally write the cosmological trigram across the dojang floor through their physical footsteps.',
  },
  clockSystem: {
    title: 'The Classical 4-Point Clock System',
    description:
      'To eliminate directional ambiguity during practice and grading, classical poomsae treatises assign clock hours to all four quadrants.',
    directions: [
      { hour: '12:00', direction: 'Front (북 / North)', koreanName: '전방 (Jeon-bang)', tacticalRole: 'Initial line of sight and primary offensive progression' },
      { hour: '3:00', direction: 'Right (동 / East)', koreanName: '우측 (Woo-cheuk)', tacticalRole: 'Right lateral flank engagements and return crossings' },
      { hour: '6:00', direction: 'Rear (남 / South)', koreanName: '후방 (Hoo-bang)', tacticalRole: 'Return center line and climactic finishing combinations' },
      { hour: '9:00', direction: 'Left (서 / West)', koreanName: '좌측 (Jwa-cheuk)', tacticalRole: 'Opening pivot initiating the horizontal trigram lines' },
    ],
  },
}

export const KM_FOUR_EXECUTION_ELEMENTS: FourExecutionElementsData = {
  title: 'ធាតុស្នូលទាំង ៤ នៃការសម្តែងមេគុន',
  subtitle: 'គន្លងផ្លូវ ទិសដៅ ជំហរ និងបច្ចេកទេស (품새의 4대 구성 요소)',
  summary:
    'ទ្រឹស្តីមេគុនបុរាណ World Taekwondo (Ronald A. Southwick, 2005) ចែងថារាល់មេគុនទាំងអស់ត្រូវបានអនុវត្តតាមរយៈធាតុគ្រឹះ ៤ ដែលផ្សារភ្ជាប់គ្នាយ៉ាងជិតស្និទ្ធ៖ គន្លងលើកម្រាល (Pattern), ទិសដៅលំហ (Direction), ជំហរគ្រឹះ (Stance), និងបច្ចេកទេសកម្លាំងចលករ (Technique)។',
  elements: [
    {
      id: 'pattern',
      title: '១. គន្លងផ្លូវលើកម្រាល (Pattern / 도형)',
      koreanTitle: '도형 (Floor Trajectory & Character)',
      concept: 'ទម្រង់ធរណីមាត្រដែលគូសចេញដោយជើងរបស់អ្នកហ្វឹកហាត់លើកម្រាល Dojang។',
      details: [
        'មេគុន Taegeuk ទាំង ៨ ដើរតាមគន្លងអក្សរចិន "王" (Wang / ស្តេច) ដូចៗគ្នា។',
        'បន្ទាត់ផ្តេកទាំង ៣ នៃអក្សរ "王" ត្រូវគ្នានឹងបន្ទាត់ទាំង ៣ នៃត្រីក្រាម I Ching (ខាងលើ = មេឃ, កណ្តាល = មនុស្ស, ខាងក្រោម = ផែនដី)។',
        'មេគុន Palgwe ដើរតាមអក្សរចិនផ្សេងៗគ្នា៖ Palgwe 1–4 & 6 ប្រើអក្សរ "工" (Gong / ពលកម្ម), Palgwe 5 ប្រើ "干" (Gan / ខែល), Palgwe 7 ប្រើ "下" (Ha / ខាងក្រោម), និង Palgwe 8 ប្រើ "土" (Tu / ផែនដី)។',
        'មេគុនខ្សែក្រវាត់ខ្មៅ Yudanja នីមួយៗដើរតាមអក្សរចិនជាក់លាក់រៀងៗខ្លួន (士, 山, 工, 一, 十, ㅗ, 丅, 水, 卍)។',
      ],
      practicalApplication:
        'ត្រូវវិលត្រឡប់មកកាន់ចំណុចចាប់ផ្តើម (Joon-bi) ឱ្យបានត្រឹមត្រូវ ១០០% នៅពេលបញ្ចប់។ គម្លាតខុសបង្ហាញពីការបោះជំហានខ្វះ ឬលើសប្រវែង ឬអ័ក្សបង្វិលមិនចំកណ្តាល។',
    },
    {
      id: 'direction',
      title: '២. ទិសដៅលំហ (Direction / 방향 - វិធីសាស្ត្រនាឡិកា)',
      koreanTitle: '방향 (The 4-Point Clock Method)',
      concept: 'ការតម្រង់ទិសលំហដែលគ្រប់គ្រងមុំដែលអ្នកហ្វឹកហាត់ត្រូវបែរមុខទៅរកក្នុងអំឡុងពេលសម្តែងមេគុន។',
      details: [
        'ទិសម៉ោង ១២:០០ (ខាងមុខ / Buk - 북)៖ ការប្រឈមមុខដោយផ្ទាល់ជាមួយគូប្រកួតស្រមើស្រមៃខាងមុខ។',
        'ទិសម៉ោង ៣:០០ (ខាងស្តាំ / Dong - 동)៖ ការការពារ និងវាយបកស្លាបចំហៀងមុំ ៩០ ដឺក្រេ។',
        'ទិសម៉ោង ៦:០០ (ខាងក្រោយ / Nam - 남)៖ ផ្លូវត្រឡប់ក្រោយ និងការទប់ទល់ការគំរាមកំហែងពីខាងក្រោយ។',
        'ទិសម៉ោង ៩:០០ (ខាងឆ្វេង / Seo - 서)៖ ការបង្វិលខ្លួន ៩០ ដឺក្រេដំបូងដើម្បីផ្តើមបន្ទាត់ផ្តេកនៃត្រីក្រាម។',
      ],
      practicalApplication:
        'មេគុន Taegeuk និង Palgwe ទាំងអស់តម្រូវឱ្យសិស្សបែរមុខទៅកាន់ទិសត្រីវិស័យធំៗទាំង ៤ នេះប៉ុណ្ណោះ ដោយគ្មានមុំស្រពិចស្រពិលឡើយ។',
    },
    {
      id: 'stance',
      title: '៣. ជំហរគ្រឹះ (Stance / 서기)',
      koreanTitle: '서기 (Weight Distribution & Center of Gravity)',
      concept: 'ទីតាំង និងគម្លាតនៃប្រអប់ជើង ការបត់ជង្គង់ និងការបែងចែកទម្ងន់រាងកាយឱ្យមានលំនឹង។',
      details: [
        'Ap-seogi (ជំហរដើរធម្មតា)៖ ទម្ងន់ ៥០/៥០ ស្មើគ្នា ជំហានប្រវែង ១ ប្រអប់ជើង ដងខ្លួនត្រង់បែបធម្មជាតិ។',
        'Ap-kubi (ជំហរវែងមុខ)៖ ៧០% ជើងមុខ / ៣០% ជើងក្រោយ ប្រវែង ៤–៤.៥ ប្រអប់ជើង ឫសកម្លាំងជ្រៅ។',
        'Dwit-kubi (ជំហរអក្សរអិល L-Stance)៖ ៧០% ជើងក្រោយ / ៣០% ជើងមុខ កែងជើងទាំងពីរនៅលើបន្ទាត់តែមួយកាត់កែង ៩០ ដឺក្រេ។',
        'Beom-seogi (ជំហរខ្លា)៖ ៩០–១០០% ទម្ងន់លើជើងក្រោយ កែងជើងមុខលើកផុតកម្រាល ប្រៀបដូចរ៉ឺស័រត្រៀមស្ទុះ។',
        'Juchum-seogi (ជំហរជិះសេះ)៖ ទម្ងន់ ៥០/៥០ ទទឹង ២ ប្រអប់ជើង ជើងស្របគ្នា បន្ទាបត្រគាក។',
      ],
      practicalApplication:
        'ជំហរត្រឹមត្រូវគឺជាគ្រឹះនៃការបញ្ជូនកម្លាំងចលករ។ ជំហរទន់ខ្សោយនឹងធ្វើឱ្យបាត់បង់ថាមពល និងបាត់បង់លំនឹងពេលចេញក្បាច់។',
    },
    {
      id: 'technique',
      title: '៤. បច្ចេកទេសក្បាច់ (Technique / 기술)',
      koreanTitle: '기술 (Chambering, Trajectory & Impact)',
      concept: 'វិធីសាស្ត្រនៃការរារាំង ការវាយ កាប់ ចាក់ និងទាត់ប្រកបដោយប្រសិទ្ធភាពជីវមេកានិចខ្ពស់បំផុត។',
      details: [
        'ការរៀបចំដៃត្រៀម (Chambering)៖ រាល់ការរារាំង និងវាយត្រូវចាប់ផ្តើមពីចំណុចប្រភព (ដូចជាស្មាផ្ទុយ ត្រគាក ត្រចៀក) ដើម្បីបង្កើតកម្លាំងរង្វិល។',
        'កម្លាំងបង្វិលត្រគាក (Hip Torque)៖ ការខ្ទាតបង្វិលនៃឆ្អឹងអាងត្រគាកត្រូវស៊ីចង្វាក់គ្នានឹង ១០% ចុងក្រោយនៃការចេញក្បាច់។',
        'អាវុធវាយប្រហារ៖ កណ្តាប់ដៃ (Jumeok), បាតដៃកាំបិត (Sonnal), ចុងម្រាមដៃ (Pyonsonkkeut), កែងដៃ (Palkoop), និងគែមជើង (Balnal)។',
        'ចលនការនៃការទាត់៖ លើកជង្គង់ (Chamber) -> លាតសន្ធឹងធាក់ទាត់ -> ខ្ទាតត្រូវគោលដៅដោយអាវុធជាក់លាក់ (Ap-chook / Balnal) -> បត់ជង្គង់ត្រឡប់មកវិញ (Re-chamber) មុនពេលទម្លាក់ជើងដោយទប់លំនឹង។',
      ],
      practicalApplication:
        'បច្ចេកទេសត្រូវតែច្បាស់លាស់ និងម៉ឺងម៉ាត់—មិនមែនជាការសម្តែងល្ខោនឡើយ។ បញ្ចេញគ្រប់ចលនាដូចជាកំពុងជួបគូប្រកួតពិតប្រាកដ។',
    },
  ],
  wangFloorRule: {
    title: 'គន្លងកម្រាល "王" (ស្តេច) & ច្បាប់បោះជំហានត្រីក្រាម',
    chineseCharacter: '王',
    definition:
      'នៅក្នុងមេគុន Taegeuk បន្ទាត់ផ្តេកទាំង ៣ នៃអក្សរចិន "王" តំណាងឱ្យបន្ទាត់ទាំង ៣ នៃត្រីក្រាម I Ching។ បន្ទាត់លើតំណាងឱ្យមេឃ កណ្តាលតំណាងឱ្យមនុស្ស និងក្រោមតំណាងឱ្យផែនដី។',
    yangRule:
      'បន្ទាត់រឹង (Yang —–)៖ ប្រសិនបើសិស្សបោះជំហានទៅមុខតាមបន្ទាត់ផ្តេក នោះបន្ទាត់នោះនឹងក្លាយជាបន្ទាត់រឹង Yang។',
    umRule:
      'បន្ទាត់ដាច់ (Um – –)៖ ប្រសិនបើសិស្សមិនបោះជំហានទៅមុខតាមបន្ទាត់ផ្តេក (ដូចជាធ្វើចលនានៅនឹងកន្លែង ថយក្រោយ ឬបង្វិលខ្លួនដោយមិនបោះទៅមុខ) នោះបន្ទាត់នោះនឹងក្លាយជាបន្ទាត់ដាច់ Um។',
    philosophicalSignificance:
      'ទំនាក់ទំនងផ្ទាល់នេះអនុញ្ញាតឱ្យកីឡាករគូសត្រីក្រាមនៃចក្រវាលនៅលើកម្រាល Dojang តាមរយៈជំហានជើងជាក់ស្តែងរបស់ខ្លួន។',
  },
  clockSystem: {
    title: 'ប្រព័ន្ធកូអរដោនេនាឡិកា ៤ ទិសបុរាណ',
    description:
      'ដើម្បីលុបបំបាត់ភាពស្រពិចស្រពិលនៃទិសដៅក្នុងការហ្វឹកហាត់ និងការប្រឡង ក្បួនមេគុនបុរាណបានកំណត់ម៉ោងនាឡិកាសម្រាប់ទិសទាំង ៤។',
    directions: [
      { hour: '12:00', direction: 'ខាងមុខ (North / 북)', koreanName: '전방 (Jeon-bang)', tacticalRole: 'ខ្សែភ្នែកដំបូង និងការវាយលុកទៅមុខជាចម្បង' },
      { hour: '3:00', direction: 'ខាងស្តាំ (East / 동)', koreanName: '우측 (Woo-cheuk)', tacticalRole: 'ការទប់ទល់ស្លាបស្តាំ និងការឆ្លងកាត់ត្រឡប់មកវិញ' },
      { hour: '6:00', direction: 'ខាងក្រោយ (South / 남)', koreanName: '후방 (Hoo-bang)', tacticalRole: 'ខ្សែត្រឡប់មកកណ្តាល និងបន្សំក្បាច់បញ្ចប់ចុងក្រោយ' },
      { hour: '9:00', direction: 'ខាងឆ្វេង (West / 서)', koreanName: '좌측 (Jwa-cheuk)', tacticalRole: 'ការបង្វិលខ្លួនដំបូងផ្តើមបន្ទាត់ផ្តេកនៃត្រីក្រាម' },
    ],
  },
}

export const ZH_FOUR_EXECUTION_ELEMENTS: FourExecutionElementsData = {
  title: '公认品势演练四大核心构成要素',
  subtitle: '演武路线、方向维度、稳固步法与发劲技术 (품새의 4대 구성 요소)',
  summary:
    '古典世界跆拳道品势理论（Ronald A. Southwick，2005）明确规定，每一套品势的演练均由四大相互依存的根本基石构成：地面演武路线（Pattern）、三维空间朝向（Direction）、骨骼中轴步法（Stance）以及运动生物力学技术（Technique）。',
  elements: [
    {
      id: 'pattern',
      title: '1. 演武路线 (도형 / Floor Pattern)',
      koreanTitle: '도형 (Floor Trajectory & Character)',
      concept: '练习者双足在道馆地板上演练移动时所描绘出的几何汉字轨迹。',
      details: [
        '太极一至八章全部遵循中正对称的汉字“王 (Wang / King)”演武线。',
        '“王”字的三道横线直接对应八卦的三爻（上横线=天爻、中横线=人爻、下横线=地爻）。',
        '传统八卦品势则因套路而异：八卦1–4与6章走“工”字线，八卦5章走“干”字线，八卦7章走“下”字线，八卦8章走“土”字线。',
        '黑带一段至九段有段者品势则各自描绘专属独立汉字（士、山、工、一、十、ㅗ、丅、水、卍）。',
      ],
      practicalApplication:
        '套路打完收势必须百分之百精准回归起势的原点准星（Joon-bi 线）；若偏离原点，必然表明步幅大小失衡或轴心脚旋转产生位移。',
    },
    {
      id: 'direction',
      title: '2. 空间朝向 (방향 / Direction - 四向时钟法)',
      koreanTitle: '방향 (The 4-Point Clock Method)',
      concept: '演练过程中统领学员视线与身体迎敌朝向的空间坐标系统。',
      details: [
        '12:00 方位 (正前 / Buk - 북)：正面对决前方假想敌，推进核心攻防。',
        '3:00 方位 (右侧 / Dong - 동)：90度右翼防守与侧翼强力反击。',
        '6:00 方位 (正后 / Nam - 남)：中央回撤主轴线，完成高潮终结连击。',
        '9:00 方位 (左侧 / Seo - 서)：起势首度左转90度，开启横向三爻行运。',
      ],
      practicalApplication:
        '所有太极与八卦品势均严格限定学员仅面向这四大正向基准罗盘坐标，彻底杜绝斜向模糊角度。',
    },
    {
      id: 'stance',
      title: '3. 稳固步法 (서기 / Stance)',
      koreanTitle: '서기 (Weight Distribution & Center of Gravity)',
      concept: '双足间距、膝盖屈曲弹性以及全身重心中轴在地面上的稳定分布。',
      details: [
        '前步 / 自然步 (Ap-seogi)：重心 50/50 平均分布，步幅为单脚自然迈步长，上身中正挺拔。',
        '前弓步 (Ap-kubi)：重心 前腿70% / 后腿30%，步幅4至4.5脚长，后脚锁扣30度，构筑如山根基。',
        '后弓步 (Dwit-kubi)：重心 后腿70% / 前腿30%，双脚跟位于同一直线上成90度直角扣合。',
        '虎步 (Beom-seogi)：重心 90–100% 压于屈曲后腿，前脚掌轻点地面脚跟悬空，如压缩弹簧蓄势待发。',
        '骑马步 (Juchum-seogi)：重心 50/50，两脚宽约两脚长，双足平行内扣，下沉髋关节。',
      ],
      practicalApplication:
        '步法是力量传导的中枢母体。步法松浮漂移会直接泄掉打击的反作用力，导致攻防失去平衡。',
    },
    {
      id: 'technique',
      title: '4. 发劲技术 (기술 / Technique)',
      koreanTitle: '기술 (Chambering, Trajectory & Impact)',
      concept: '以最高人体运动生物力学效率施展的格挡、冲拳、穿刺与腿法打击。',
      details: [
        '预备折臂 (Chambering)：每一次防守与击打必须经由对侧肩、髋或耳际完整蓄力引伸，蓄积旋转角动量。',
        '骨盆扭矩 (Hip Torque)：骨盆转动发劲必须在动作接触目标的最后10%瞬间完成爆发性制动锁死（Snap）。',
        '击打武器库：正拳 (Jumeok)、手刀 (Sonnal)、贯手 (Pyonsonkkeut)、肘关节 (Palkoop) 以及脚刀 (Balnal)。',
        '腿法发力链：提膝折叠 -> 弹击破空 -> 专用接触面（前掌垫/脚刀）命中要害 -> 顺畅折膝收腿 -> 沉稳控重落步。',
      ],
      practicalApplication:
        '动作必须利落、真实、透力，杜绝花拳绣腿的摆姿态。每一次出手皆以摧毁真实强敌为唯一定位。',
    },
  ],
  wangFloorRule: {
    title: '“王”字演武线与八卦三爻运足法则',
    chineseCharacter: '王',
    definition:
      '在太极品势中，“王”字的三道水平横线直接具象化所对应《易经》卦象的三道爻（上爻=天、中爻=人、下爻=地）。',
    yangRule:
      '纯阳爻 (Yang —–)：若学员沿着该横向路线向前上步推进移动，则该线在地表轨迹中显化为完整的连贯阳爻实线。',
    umRule:
      '纯阴爻 (Um – –)：若学员在该横向上仅原地换势、后退、或未向前迈步推进，则显化为中断的阴爻虚线。',
    philosophicalSignificance:
      '这一直接映射使武道修习者能够通过足底在道馆地面的实地运步，将深邃的宏观宇宙卦象亲笔书写于大地之上。',
  },
  clockSystem: {
    title: '古典四向时钟空间方位坐标法',
    description:
      '为消除训练与考段过程中方位理解的歧义，正统品势教程将演武场划分为四个标准时钟象限。',
    directions: [
      { hour: '12:00', direction: '正前 (北 / North)', koreanName: '전방 (Jeon-bang)', tacticalRole: '初始基准视线与主要进攻纵深推进线' },
      { hour: '3:00', direction: '右侧 (东 / East)', koreanName: '우측 (Woo-cheuk)', tacticalRole: '右侧翼近身化解与折返横线交织' },
      { hour: '6:00', direction: '正后 (南 / South)', koreanName: '후방 (Hoo-bang)', tacticalRole: '中轴回撤纵深与高潮终结组合技施展' },
      { hour: '9:00', direction: '左侧 (西 / West)', koreanName: '좌측 (Jwa-cheuk)', tacticalRole: '起手左转90度开启横向三爻行运' },
    ],
  },
}

export const KO_FOUR_EXECUTION_ELEMENTS: FourExecutionElementsData = {
  title: '품새 시연의 4대 핵심 구성 요소',
  subtitle: '도형, 방향, 서기, 그리고 기술 (품새의 4대 구성 요소)',
  summary:
    '세계태권도연맹(WT) 공인 고전 품새 이론(Ronald A. Southwick, 2005)에 따르면, 모든 품새는 상호 유기적으로 결합된 네 가지 근본 요소인 바닥 도형(Pattern), 공간 방향(Direction), 중심 보법(Stance), 그리고 운동역학적 기술(Technique)을 통해 완성됩니다.',
  elements: [
    {
      id: 'pattern',
      title: '1. 도형 (도형 / Floor Pattern)',
      koreanTitle: '도형 (Floor Trajectory & Character)',
      concept: '수련자가 도장 바닥 위에서 발 디딤을 통해 그려내는 고유한 기하학적 한자 궤적.',
      details: [
        '태극 1~8장은 모두 한자 임금 왕(王)자 품새선을 공통적으로 따릅니다.',
        '왕(王)자의 3개 가로선은 해당 품새의 주역 3효와 1:1로 정확히 대응합니다 (상선=하늘, 중선=사람, 하선=땅).',
        '팔괘 품새는 품새별로 한자가 다릅니다: 팔괘 1~4장 및 6장은 장인 공(工)자, 5장은 방패 간(干)자, 7장은 아래 하(下)자, 8장은 흙 토(土)자를 따릅니다.',
        '유단자 품새는 품새마다 고유한 독립 한자 품새선을 그립니다 (士, 山, 工, 一, 十, ㅗ, 丅, 水, 卍).',
      ],
      practicalApplication:
        '품새를 마친 후 바로(Ba-ro) 구령 시 정확히 출발 원점(준비선)으로 복귀해야 합니다. 오차가 발생하는 것은 보폭의 불균형이나 축발 회전 중심의 흔들림을 의미합니다.',
    },
    {
      id: 'direction',
      title: '2. 방향 (방향 / Direction - 시계 방향법)',
      koreanTitle: '방향 (The 4-Point Clock Method)',
      concept: '품새 시연 중 수련자가 가상의 적을 향해 바라보는 4대 동서남북 공간 좌표 체계.',
      details: [
        '12:00 방향 (전방 / 북 - Buk): 정면 가상의 적과 맞서는 주된 전진 공방선.',
        '3:00 방향 (우측 / 동 - Dong): 90도 우측 측면 방어 및 치명적 반격선.',
        '6:00 방향 (후방 / 남 - Nam): 중앙 회귀선 및 품새의 클라이맥스 종결 조합선.',
        '9:00 방향 (좌측 / 서 - Seo): 품새 시작과 함께 좌측 90도로 전환하며 효(爻)선을 여는 기점.',
      ],
      practicalApplication:
        '태극 및 팔괘 품새의 모든 회전은 사선이 아닌 정확한 4대 방위만을 지향하여 공간적 모호함을 배제합니다.',
    },
    {
      id: 'stance',
      title: '3. 서기 (서기 / Stance)',
      koreanTitle: '서기 (Weight Distribution & Center of Gravity)',
      concept: '양발의 위치, 보폭, 무릎의 탄력 각도 및 신체 중심(단전)의 안정된 하중 배분.',
      details: [
        '앞서기(Walking Stance): 체중 50/50 균등 배분, 1발 길이 자연스러운 보폭, 곧은 상체.',
        '앞굽이(Forward Stance): 앞다리 70% / 뒷다리 30%, 4~4.5발 길이의 깊은 보폭, 뒷발 30도 견고한 고정.',
        '뒷굽이(Back Stance / L-Stance): 뒷다리 70% / 앞다리 30%, 양발 뒤꿈치가 일직선상에서 90도를 이룸.',
        '범서기(Tiger Stance): 뒷다리에 체중 90~100% 집중, 앞발은 뒤꿈치를 들고 발끝만 가볍게 딛는 탄발 자세.',
        '주춤서기(Riding Stance): 체중 50/50, 2발 너비의 넓은 평행 보폭, 기마 자세로 하체 중심 안정화.',
      ],
      practicalApplication:
        '올바른 서기는 파워 전달의 원천입니다. 서기가 흔들리면 타격 순간 반작용력이 소실되고 중심이 무너집니다.',
    },
    {
      id: 'technique',
      title: '4. 기술 (기술 / Technique)',
      koreanTitle: '기술 (Chambering, Trajectory & Impact)',
      concept: '최적의 운동역학을 바탕으로 가상의 적을 제압하는 막기, 지르기, 치기, 찌르기, 차기의 완성도.',
      details: [
        '예비동작(Chambering): 모든 막기와 치기는 반대편 어깨나 골반, 귀 뒤에서 시작하여 회전 모멘텀을 극대화합니다.',
        '골반 회전력(Hip Torque): 골반의 탄력적인 스냅 회전은 타격 접촉 직전 마지막 10% 순간에 일치하여 결합됩니다.',
        '공격 부위(Weapons): 주먹(바른주먹, 등주먹, 메주먹), 손날, 편손끝, 팔굽, 발날 및 앞축.',
        '발차기 역학: 무릎 접어올리기 -> 폭발적 뻗기 -> 가격 -> 무릎 다시 접어 회수(Re-chamber) -> 균형 잡힌 착지.',
      ],
      practicalApplication:
        '기술은 형식적인 흉내가 아니라 실전의 파괴력을 담아야 합니다. 실전 상대의 급소를 꿰뚫듯 명확하게 격파하십시오.',
    },
  ],
  wangFloorRule: {
    title: '王자 품새선과 주역 3효(三爻) 운족의 법칙',
    chineseCharacter: '王',
    definition:
      '태극 품새에서 한자 임금 왕(王)자의 3개 가로선은 주역 8괘의 3효(상효=하늘, 중효=사람, 하효=땅)와 1:1로 직결됩니다.',
    yangRule:
      '양효(Yang —–): 수련자가 해당 가로선을 따라 앞으로 전진(발을 내딛음)하면 끊어지지 않은 온전한 양효가 성립합니다.',
    umRule:
      '음효(Um – –): 수련자가 해당 가로선에서 전진하지 않고 제자리 동작, 후진, 또는 방향 전환만 수행하면 끊어진 음효가 성립합니다.',
    philosophicalSignificance:
      '이 법칙을 통해 수련자는 도장 바닥을 딛는 자신의 발걸음으로 거대한 우주 삼라만상의 괘상을 몸소 써 내려가게 됩니다.',
  },
  clockSystem: {
    title: '공인 4방향 시계좌표 시스템',
    description:
      '수련과 심사 과정에서 방향의 왜곡을 없애기 위해 품새 교본은 4개 사분면에 정확한 시계 시각을 부여합니다.',
    directions: [
      { hour: '12:00', direction: '전방 (북 / North)', koreanName: '전방 (Jeon-bang)', tacticalRole: '초기 시선 정렬선 및 주 공격 전진선' },
      { hour: '3:00', direction: '우측 (동 / East)', koreanName: '우측 (Woo-cheuk)', tacticalRole: '우측 측면 공방 및 교차 복귀선' },
      { hour: '6:00', direction: '후방 (남 / South)', koreanName: '후방 (Hoo-bang)', tacticalRole: '중앙 회귀선 및 종결 연속 기술 구간' },
      { hour: '9:00', direction: '좌측 (서 / West)', koreanName: '좌측 (Jwa-cheuk)', tacticalRole: '품새 시작 좌회전 및 가로선 개시' },
    ],
  },
}

export const DEFAULT_FOUR_EXECUTION_ELEMENTS: FourExecutionElementsData = EN_FOUR_EXECUTION_ELEMENTS

export const EN_EIGHT_PERFORMANCE_PILLARS: EightPerformancePillarsData = {
  title: 'The 8 Pillars of Poomse Performance',
  subtitle: 'Developing the Soul of Taekwondo Practice (Ronald A. Southwick Treatise)',
  summary:
    'A skilled master can discern a student’s technical maturity, mental focus, balance, and inner spirit by observing a single poomsae. Mastery requires balancing these eight classical dimensions.',
  pillars: [
    {
      number: 1,
      title: 'Technique (기술 / Gisul)',
      koreanTitle: '정확한 기본기 (Technical Accuracy)',
      summary: 'Blocks start and stop where effective; strikes originate from the hip with full follow-through; kicks display balance and proper foot formation.',
      executionGuide: 'Never sacrifice precision for flashiness. Every block must have an authentic protective angle, and every strike must penetrate the intended anatomical target.',
      masterCue: 'Chamber completely, snap explosively, lock at impact.',
    },
    {
      number: 2,
      title: 'Knowledge of the Poomse (지식 / Ji)',
      koreanTitle: '품새에 대한 이해 (Pattern & Lineage Knowledge)',
      summary: 'Knowing the floor pattern, stances, techniques, Hanja character shapes, and trigram philosophy in microscopic detail.',
      executionGuide: 'Understand why a technique is placed where it is. Know which trigram line you are walking and the cosmic element it expresses.',
      masterCue: 'A student who knows the meaning moves with conviction.',
    },
    {
      number: 3,
      title: 'Attitude & Spirit (태도 / Taedo)',
      koreanTitle: '수련 태도와 백절불굴 (Indomitable Attitude)',
      summary: 'Fostering perseverance (Innae), patience, and humility. Displaying complete undivided attention and solemn martial presence.',
      executionGuide: 'Approach the poomsae with reverent seriousness. From the initial Charyeut bow to the final Ba-ro return, your gaze must remain unbroken.',
      masterCue: 'The inner spirit shines through the eyes and posture.',
    },
    {
      number: 4,
      title: 'Eye Focus & Precision (시선 / Shi-seon)',
      koreanTitle: '시선과 가상 대전 (Gaze & Simulated Combat)',
      summary: 'Looking directly at imaginary opponents; placing attacks and blocks at exact target heights (solar plexus, philtrum, groin).',
      executionGuide: 'Before turning your body, turn your eyes. Look where your imaginary opponent stands, verify the target, then execute with pinpoint accuracy.',
      masterCue: 'Turn the eyes first, then the feet, then deliver the blow.',
    },
    {
      number: 5,
      title: 'Grace, Rhythm & Fluidity (부드러움 / Yuyeonseong)',
      koreanTitle: '동작의 유연성과 흐름 (Fluidity & Continuity)',
      summary: 'Executing without stiffness; chaining motions with rhythmic continuity so movements look purposeful, controlled, and visually majestic.',
      executionGuide: 'Avoid robotic stops and starts. Stances flow into the next technique like waves crashing onto shore, absorbing and redirecting momentum.',
      masterCue: 'Smooth like flowing water, sharp like cutting jade.',
    },
    {
      number: 6,
      title: 'Balance & Center of Gravity (균형 / Gyunhyeong)',
      koreanTitle: '신체 균형과 중심 유지 (Equilibrium & Weight Distribution)',
      summary: 'Staying rooted in the stance without wobbling or leaning; maintaining upright spine alignment throughout transitions and high kicks.',
      executionGuide: 'Keep your center of gravity low and stable (Danjeon). Do not rise or drop your head during horizontal steps unless mandated by the stance transition.',
      masterCue: 'A master’s head stays on a level plane throughout the stepping lines.',
    },
    {
      number: 7,
      title: 'Power: Tension & Relaxation (힘과 유강 / Him & Yu-Gang)',
      koreanTitle: '유강의 조화 (Tension & Relaxation Dynamic)',
      summary: 'Relaxation during the preparatory chambering stage grants speed; instantaneous muscular tension at impact creates crushing power.',
      executionGuide: 'Muscles kept rigid throughout a form cause slow, stiff movements. Stay relaxed like water until the microsecond of impact, then lock like iron.',
      masterCue: 'Speed comes from relaxation; destructive force comes from impact tension.',
    },
    {
      number: 8,
      title: 'Breathing & Kihop (호흡과 기합 / Hohup & Kihap)',
      koreanTitle: '단전호흡과 기합 (Danjeon Breath & Spirit Shout)',
      summary: 'Inhaling smoothly during preparation; exhaling sharply on delivery. The spirit shout (Kihap) erupts from the lower abdomen (Danjeon), not the throat.',
      executionGuide: 'Breathe silently through the nose during slow chambers, and exhale with a short breath through the teeth on impact. The Kihap focuses all internal energy (Qi).',
      masterCue: 'The exhalation is the strongest moment of the action.',
    },
  ],
}

export const KM_EIGHT_PERFORMANCE_PILLARS: EightPerformancePillarsData = {
  title: 'សសរស្តម្ភទាំង ៨ នៃការសម្តែងមេគុន',
  subtitle: 'ការអភិវឌ្ឍវិញ្ញាណ និងខ្លឹមសារពិតនៃការហ្វឹកហាត់តេក្វាន់ដូ (ក្បួន Southwick)',
  summary:
    'មេគ្រូដ៏ចំណានអាចមើលដឹងពីភាពចាស់ទុំនៃបច្ចេកទេស ការផ្តោតអារម្មណ៍ផ្លូវចិត្ត លំនឹង និងស្មារតីខាងក្នុងរបស់សិស្ស តាមរយៈការសង្កេតមើលមេគុនតែមួយលើកប៉ុណ្ណោះ។ ការឈានដល់កម្រិតកំពូលតម្រូវឱ្យមានតុល្យភាពរវាងវិមាត្រទាំង ៨ នេះ។',
  pillars: [
    {
      number: 1,
      title: '១. ភាពត្រឹមត្រូវនៃបច្ចេកទេស (Technique / 기술)',
      koreanTitle: '정확한 기본기 (Technical Accuracy)',
      summary: 'ការរារាំងចាប់ផ្តើម និងបញ្ចប់នៅចំណុចមានប្រសិទ្ធភាព; ការវាយចេញពីត្រគាកប្រកបដោយថាមពលពេញលេញ; ការទាត់បង្ហាញពីលំនឹង និងទម្រង់ប្រអប់ជើងត្រឹមត្រូវ។',
      executionGuide: 'កុំប្តូរភាពជាក់លាក់ដើម្បីតែភាពទាក់ទាញភ្នែកឡើយ។ រាល់ការរារាំងត្រូវតែមានមុំការពារជាក់ស្តែង ហើយរាល់ការវាយត្រូវតែទម្លុះចំណុចស្លាប់របស់រាងកាយ។',
      masterCue: 'រៀបចំដៃឱ្យពេញ លឿនដូចផ្លេកបន្ទោរ និងចាក់សោឱ្យរឹងមាំពេលប៉ះគោលដៅ។',
    },
    {
      number: 2,
      title: '២. ការយល់ដឹងពីមេគុន (Knowledge / 지식)',
      koreanTitle: '품새에 대한 이해 (Pattern & Lineage Knowledge)',
      summary: 'ការដឹងពីគន្លងផ្លូវលើកម្រាល ជំហរ បច្ចេកទេស ទម្រង់អក្សរចិន និងទស្សនវិជ្ជាត្រីក្រាមយ៉ាងលម្អិត។',
      executionGuide: 'ត្រូវយល់ពីមូលហេតុដែលបច្ចេកទេសនីមួយៗត្រូវបានដាក់នៅទីនោះ។ ត្រូវដឹងថាអ្នកកំពុងដើរលើបន្ទាត់ត្រីក្រាមណា និងធាតុធម្មជាតិអ្វីដែលវាបង្ហាញ។',
      masterCue: 'សិស្សដែលយល់ពីអត្ថន័យ នឹងធ្វើចលនាប្រកបដោយទំនុកចិត្ត និងអំណាច។',
    },
    {
      number: 3,
      title: '៣. ឥរិយាបថ និងស្មារតី (Attitude & Spirit / 태도)',
      koreanTitle: '수련 태도와 백절불굴 (Indomitable Attitude)',
      summary: 'ការបណ្តុះការតស៊ូ (Innae) ការអត់ធ្មត់ និងការបន្ទាបខ្លួន។ ការបង្ហាញការយកចិត្តទុកដាក់ខ្ពស់ និងអាកប្បកិរិយាគុនដ៏ថ្លៃថ្នូរ។',
      executionGuide: 'ចូលទៅកាន់មេគុនដោយការគោរព និងម៉ឺងម៉ាត់។ ចាប់ពីការគំនាប់ Charyeut ដំបូង រហូតដល់ការត្រឡប់មក Ba-ro ចុងក្រោយ កែវភ្នែករបស់អ្នកមិនត្រូវរេឡើយ។',
      masterCue: 'ស្មារតីខាងក្នុងបញ្ចេញពន្លឺតាមរយៈកែវភ្នែក និងជំហររាងកាយ។',
    },
    {
      number: 4,
      title: '៤. ការផ្តោតខ្សែភ្នែក (Eye Focus / 시선)',
      koreanTitle: '시선과 가상 대전 (Gaze & Simulated Combat)',
      summary: 'ការក្រឡេកមើលចំគូប្រកួតស្រមើស្រមៃ; ការដាក់ការវាយ និងរារាំងឱ្យចំកម្ពស់គោលដៅជាក់លាក់ (ដើមទ្រូង ចន្លោះបបូរមាត់ និងច្រមុះ ប្រដាប់បន្តពូជ)។',
      executionGuide: 'មុនពេលបង្វិលរាងកាយ ត្រូវបង្វែរភ្នែកសិន។ មើលទៅកន្លែងដែលគូប្រកួតឈរ ផ្ទៀងផ្ទាត់គោលដៅ រួចបញ្ចេញក្បាច់ឱ្យចំគោលដៅ។',
      masterCue: 'បង្វែរភ្នែកមុន បន្ទាប់មកជើង រួចបញ្ចេញការវាយប្រហារ។',
    },
    {
      number: 5,
      title: '៥. ឥរិយាបថ និងលំនឹងរាងកាយ (Posture & Balance / 자세와 중심)',
      koreanTitle: '무게중심 제어 (Center of Gravity Control)',
      summary: 'ការគ្រប់គ្រងចំណុចកណ្តាលនៃទំនាញផែនដី (Danjeon) តាមរយៈជំហររឹងមាំ ដែលអនុញ្ញាតឱ្យបញ្ចេញកម្លាំងចលករជាអតិបរមាដោយមិនបាត់បង់លំនឹង។',
      executionGuide: 'រក្សាឆ្អឹងខ្នងឱ្យត្រង់ និងស្មាឱ្យស្មើ។ កុំងក់ក្បាលឡើងចុះនៅពេលបោះជំហាន។ រំកិលខ្លួនយ៉ាងរលូនលើកម្រាល។',
      masterCue: 'ចាក់ឫសជើងដូចដើមឈើ; បង្វិលខ្លួនឱ្យស្អាតនៅលើបាតជើងខាងមុខ។',
    },
    {
      number: 6,
      title: '៦. ចង្វាក់ និងភាពរលូន (Grace & Rhythm / 부드러움과 완급)',
      koreanTitle: '동작의 완급과 연결 (Rhythm & Seamless Cadence)',
      summary: 'ការបញ្ចប់ចលនានីមួយៗឱ្យបានពេញលេញមុននឹងបន្តទៅចលនាបន្ទាប់ដោយមិនស្ទាក់ស្ទើរ។ ការបែងចែករវាងចលនាផ្ទុះលឿន និងចលនាដកដង្ហើមទប់យឺត។',
      executionGuide: 'ជៀសវាងការឈប់រឹងដូចមនុស្សយន្ត។ ជំហរត្រូវហូរចូលទៅក្នុងបច្ចេកទេសបន្ទាប់ដូចទឹករលកបោកបក់មកច្រាំង ស្រូបយក និងបង្វែរកម្លាំងចលករ។',
      masterCue: 'ទន់ភ្លន់ដូចទឹកហូរ តែមុតស្រួចដូចកាំបិតកាត់ថ្មពេជ្រ។',
    },
    {
      number: 7,
      title: '៧. កម្លាំង៖ ការបន្ធូរ និងការរឹតសាច់ដុំ (Power / 힘과 유강)',
      koreanTitle: '유강의 조화 (Tension & Relaxation Dynamic)',
      summary: 'ការបន្ធូរសាច់ដុំក្នុងអំឡុងពេលត្រៀមផ្តល់នូវល្បឿន; ការរឹតសាច់ដុំមួយពព្រិចភ្នែកនៅពេលប៉ះគោលដៅបង្កើតនូវកម្លាំងកម្ទេចយ៉ាងខ្លាំងក្លា។',
      executionGuide: 'សាច់ដុំដែលតឹងរឹងរហូតនឹងធ្វើឱ្យចលនាយឺត និងរឹង។ ត្រូវសម្រាកដូចទឹក រហូតដល់មួយចំណែករាប់ពាន់នៃវិនាទីដែលប៉ះគោលដៅ ទើបចាក់សោដូចដែកថែប។',
      masterCue: 'ល្បឿនកើតចេញពីការសម្រាក; កម្លាំងបំផ្លាញកើតចេញពីការរឹតបន្តឹងពេលប៉ះគោលដៅ។',
    },
    {
      number: 8,
      title: '៨. ការដកដង្ហើម និងការស្រែកគីហាប់ (Breathing & Kihap / 호흡과 기합)',
      koreanTitle: '단전호흡과 기합 (Danjeon Breath & Spirit Shout)',
      summary: 'ដកដង្ហើមចូលវែងៗតាមច្រមុះពេលរៀបចំ; ដកដង្ហើមចេញខ្លីៗពេលបញ្ចេញក្បាច់។ ការស្រែកគីហាប់ (Kihap) ត្រូវតែផ្ទុះចេញពីពោះក្រោម (Danjeon) មិនមែនចេញពីបំពង់កឡើយ។',
      executionGuide: 'ដកដង្ហើមស្ងាត់ៗតាមច្រមុះក្នុងចលនាយឺត ហើយដកដង្ហើមចេញខ្លីតាមធ្មេញនៅពេលប៉ះគោលដៅ។ Kihap ផ្តោតថាមពលខាងក្នុង (Qi) ទាំងអស់។',
      masterCue: 'ការដកដង្ហើមចេញ គឺជាខណៈពេលដ៏រឹងមាំបំផុតនៃចលនា។',
    },
  ],
}

export const ZH_EIGHT_PERFORMANCE_PILLARS: EightPerformancePillarsData = {
  title: '公认品势演练八大至高修为支柱',
  subtitle: '铸就正统跆拳道武道武魂 (Ronald A. Southwick 宗师教范)',
  summary:
    '真正的大师仅凭观察一套品势演练，便能洞察修习者的技术成熟度、心神专注力、重心平衡以及内在武道魂魄。登堂入室必须在这八大古典维度中达到高度统一。',
  pillars: [
    {
      number: 1,
      title: '1. 技术规范准确度 (기술 / Gisul)',
      koreanTitle: '정확한 기본기 (Technical Accuracy)',
      summary: '格挡起于合度、止于有效；冲拳源自骨盆髋轴并具穿透力；腿法具备优美平衡与精准靶面构造。',
      executionGuide: '严禁为了追求花哨而牺牲动作准确度。每一次格挡必须具有真实防护几何角度，每一次击打必须贯穿人体生理解剖要害。',
      masterCue: '引臂蓄势完整，发劲迅如破竹，接触瞬间锁死。',
    },
    {
      number: 2,
      title: '2. 品势源流渊博知识 (지식 / Ji)',
      koreanTitle: '품새에 대한 이해 (Pattern & Lineage Knowledge)',
      summary: '对演武路线、步法间距、攻防技术、汉字演武线意涵与《易经》卦象哲学了然于胸、毫厘不爽。',
      executionGuide: '深切通晓每一技术为何处于特定空间位点。清楚知晓自己正在踏步走过哪一道爻线，及其象征的大自然终极力量。',
      masterCue: '明其深意者，举手投足皆具泰山之笃定。',
    },
    {
      number: 3,
      title: '3. 虔敬仪态与不屈精神 (태도 / Taedo)',
      koreanTitle: '수련 태도와 백절불굴 (Indomitable Attitude)',
      summary: '涵养忍耐（Innae）、克己与谦逊之美德。展现毫无杂念的高度专注与庄严纯粹的武者风骨。',
      executionGuide: '怀揣虔敬肃穆之心步入演武场。从最初的立正鞠躬致礼到最终收势回位，眼神中闪烁的武道精魄绝不可有半点游移。',
      masterCue: '内在武魂，由双眸与挺立骨骼自然流露。',
    },
    {
      number: 4,
      title: '4. 眼神聚焦与假想敌对决 (시선 / Shi-seon)',
      koreanTitle: '시선과 가상 대전 (Gaze & Simulated Combat)',
      summary: '目光如炬直视四面八方假想强敌；将防御与打击精准对准要害基准高度（太阳神经丛、人中、下阴）。',
      executionGuide: '身随步动，眼在身先。在身体转动之前，视线先一步锁定假想敌方位，验证打击目标，随即以雷霆之势精准轰击。',
      masterCue: '眼神先行，步法紧跟，爆发轰击。',
    },
    {
      number: 5,
      title: '5. 重心中轴与身形平衡 (자세와 중심 / Junsim)',
      koreanTitle: '무게중심 제어 (Center of Gravity Control)',
      summary: '通过坚如磐石的步法深扎根基，精准调控下丹田重心，确保在释放最大动能时不出现丝毫晃动。',
      executionGuide: '保持脊柱垂直挺立，双肩水平持平。在水平迈步移动时切忌上下颠簸点头。如行云流水般平稳掠过地面。',
      masterCue: '双足扎根如松，脚掌中轴灵敏转动。',
    },
    {
      number: 6,
      title: '6. 刚柔节律与行云流水 (부드러움과 완급 / Yuyeonseong)',
      koreanTitle: '동작의 완급과 연결 (Rhythm & Seamless Cadence)',
      summary: '动作开合张弛有度，每一动作完成末端制动后毫无停顿凝滞地自然过渡；清晰区分爆发性突进与慢速深长吐纳。',
      executionGuide: '坚决摒弃机械生硬的骤停骤起。步法与技击应如浪潮拍岸般连贯激荡，吸收并再导向动量，呈现出从容大气的武道威仪。',
      masterCue: '流动如江河奔涌，落点如金石截断。',
    },
    {
      number: 7,
      title: '7. 劲道化境：极度松弛与瞬时爆发 (힘과 유강 / Him & Yu-Gang)',
      koreanTitle: '유강의 조화 (Tension & Relaxation Dynamic)',
      summary: '预备蓄力阶段全身高度松弛以换取极致速度；在命中假想敌的千分之一秒瞬间，全身肌肉锁死产生摧枯拉朽的冲击波。',
      executionGuide: '通篇肌肉僵硬只会导致动作迟滞笨拙。未触敌前身心如流水般放松，在触碰瞬间凝聚为金刚生铁。',
      masterCue: '速度源于彻底放松，破坏力源于接触刹那的绝对锁紧。',
    },
    {
      number: 8,
      title: '8. 丹田吐纳与雷霆气合 (호흡과 기합 / Hohup & Kihap)',
      koreanTitle: '단전호흡과 기합 (Danjeon Breath & Spirit Shout)',
      summary: '蓄势引身时由鼻腔无声深长吸气入丹田；发力打击时通过牙关短促吐气。气合声必须自下丹田雷霆迸发，而非仅喉头嘶吼。',
      executionGuide: '慢动吸气蓄劲于腹，爆发吐气锁气于骨。气合用于统摄周身内劲（Qi），展现令强敌胆寒的浩然正气。',
      masterCue: '呼气之刹那，乃周身最强之时刻。',
    },
  ],
}

export const KO_EIGHT_PERFORMANCE_PILLARS: EightPerformancePillarsData = {
  title: '공인 품새 수련의 8대 핵심 지침',
  subtitle: '태권도 무도 혼의 체화 (Ronald A. Southwick 대사범 교본)',
  summary:
    '숙련된 대사범은 단 한 번의 품새 시연만으로도 수련자의 기술 완성도, 정신 집중력, 균형 감각, 그리고 내면의 무도 혼을 꿰뚫어 볼 수 있습니다. 진정한 품새 숙달은 이 8대 고전적 차원의 완벽한 조화를 요구합니다.',
  pillars: [
    {
      number: 1,
      title: '1. 정확한 기본기 (기술 / Gisul)',
      koreanTitle: '정확한 기본기 (Technical Accuracy)',
      summary: '막기는 유효한 위치에서 시작하여 멈추며, 지르기는 골반과 허리에서 시작하여 관통력을 가지고, 차기는 완벽한 균형과 타격 부위 형태를 갖추어야 합니다.',
      executionGuide: '외형적인 화려함을 위해 정확성을 희생해서는 안 됩니다. 모든 막기는 실전 방어 각도를 갖추어야 하며, 모든 공격은 인체 해부학적 급소를 정확히 가격해야 합니다.',
      masterCue: '예비동작을 완전하게, 타격은 번개처럼, 타격 순간에는 단단하게 매듭지으십시오.',
    },
    {
      number: 2,
      title: '2. 품새에 대한 깊은 이해 (지식 / Ji)',
      koreanTitle: '품새에 대한 이해 (Pattern & Lineage Knowledge)',
      summary: '품새선(도형), 보법, 공격과 방어 기술, 한자 품새선 의미, 그리고 주역 괘상의 철학을 미세한 부분까지 완벽히 숙지하는 것입니다.',
      executionGuide: '특정 기술이 왜 그 위치에 배치되었는지 이해해야 합니다. 자신이 걷고 있는 품새선이 주역의 어느 효(爻)에 해당하는지, 어떤 자연의 힘을 표현하는지 알아야 합니다.',
      masterCue: '품새의 의미를 깊이 아는 수련자의 동작에는 흔들림 없는 확신이 깃듭니다.',
    },
    {
      number: 3,
      title: '3. 수련 태도와 백절불굴 (태도 / Taedo)',
      koreanTitle: '수련 태도와 백절불굴 (Indomitable Attitude)',
      summary: '인내(Innae), 극기, 겸손의 무도 덕목을 함양하는 것입니다. 흐트러짐 없는 고도의 집중력과 엄숙한 무도적 품격을 드러내야 합니다.',
      executionGuide: '경건한 마음가짐으로 품새에 임하십시오. 시작의 차렷 경례부터 마지막 바로 복귀까지, 수련자의 시선과 기백은 단 한 순간도 흐트러져서는 안 됩니다.',
      masterCue: '내면의 무도 정신은 수련자의 눈빛과 곧은 자세를 통해 드러납니다.',
    },
    {
      number: 4,
      title: '4. 시선과 가상 대전 (시선 / Shi-seon)',
      koreanTitle: '시선과 가상 대전 (Gaze & Simulated Combat)',
      summary: '사방의 가상 상대를 명확히 응시하고, 공격과 방어를 인체의 정확한 목표 높이(명치, 인중, 낭심)에 완벽히 일치시키는 것입니다.',
      executionGuide: '몸을 회전하기 전에 먼저 시선을 돌리십시오. 가상의 상대가 서 있는 위치를 바라보고 목표를 확인한 후, 한 치의 오차도 없이 기술을 구사하십시오.',
      masterCue: '시선이 먼저 향하고, 발이 이동하며, 강력한 타격이 뒤따릅니다.',
    },
    {
      number: 5,
      title: '5. 자세와 무게중심 제어 (자세와 중심 / Junsim)',
      koreanTitle: '무게중심 제어 (Center of Gravity Control)',
      summary: '견고한 보법을 통해 단전의 무게중심을 낮고 안정되게 유지함으로써, 균형을 잃지 않고 최대의 운동역학적 충격력을 발휘하는 능력입니다.',
      executionGuide: '척추를 곧게 세우고 양어깨의 수평을 유지하십시오. 발을 내딛을 때 머리가 위아래로 흔들리지 않도록 지면을 부드럽게 미끄러지듯 이동해야 합니다.',
      masterCue: '발은 대지에 깊게 뿌리내리고, 회전은 앞축을 중심으로 정밀하게 이루어집니다.',
    },
    {
      number: 6,
      title: '6. 동작의 완급과 흐름 (부드러움과 완급 / Yuyeonseong)',
      koreanTitle: '동작의 완급과 연결 (Rhythm & Seamless Cadence)',
      summary: '동작의 경직됨이 없이 한 동작을 완전히 끝낸 후 주저함 없이 다음 동작으로 매끄럽게 연결하는 것입니다. 빠른 폭발적 동작과 느린 단전호흡을 명확히 구분해야 합니다.',
      executionGuide: '로봇처럼 끊어지는 동작을 지양하십시오. 보법과 기술은 파도가 해안에 밀려오듯 자연스럽게 다음 동작으로 에너지를 전달하며 이어져야 합니다.',
      masterCue: '흐르는 물처럼 유연하게, 타격하는 순간에는 옥을 가르듯 명쾌하게.',
    },
    {
      number: 7,
      title: '7. 유강의 조화 (힘과 유강 / Him & Yu-Gang)',
      koreanTitle: '유강의 조화 (Tension & Relaxation Dynamic)',
      summary: '예비동작 단계에서의 온전한 이완은 스피드를 극대화하며, 임팩트 순간의 찰나적 근육 긴장은 가공할 파괴력을 창출합니다.',
      executionGuide: '시종일관 힘을 주고 경직되어 있으면 동작이 느려지고 둔탁해집니다. 타격 순간 직전까지는 물처럼 부드럽게 이완하고, 타격 순간에는 강철처럼 굳게 맺으십시오.',
      masterCue: '스피드는 완전한 이완에서 나오며, 파괴력은 임팩트 순간의 응축에서 나옵니다.',
    },
    {
      number: 8,
      title: '8. 단전호흡과 기합 (호흡과 기합 / Hohup & Kihap)',
      koreanTitle: '단전호흡과 기합 (Danjeon Breath & Spirit Shout)',
      summary: '동작 준비 시 코로 조용히 깊게 들이마시고, 타격 순간 입으로 짧고 강하게 내쉽니다. 기합은 목이 아닌 아랫배 단전(丹田)에서 폭발적으로 터져 나와야 합니다.',
      executionGuide: '느린 예비동작에서는 코로 소리 없이 숨을 마시고, 임팩트 순간에는 치아 사이로 짧게 숨을 뿜으십시오. 지정된 기합은 모든 내면의 기(氣)를 하나로 응집합니다.',
      masterCue: '숨을 내쉬는 찰나가 신체에서 가장 강력한 힘이 발현되는 순간입니다.',
    },
  ],
}

export const DEFAULT_EIGHT_PERFORMANCE_PILLARS: EightPerformancePillarsData = EN_EIGHT_PERFORMANCE_PILLARS

export const EN_PALGWE_COMPARISON: PalgweComparisonData = {
  title: 'The 1967 Palgwe vs 1971 Taegeuk Historical Matrix',
  subtitle: 'Evolution from Traditional Kwan Kata to Modern WT Olympic Curriculum',
  historicalTimeline: 'Adopted January 30, 1967 (KTA) & Transitioned 1971 (Kukkiwon)',
  summary:
    'On January 30, 1967, the Korea Taekwondo Association adopted standard sets of 8 Palgwe (八卦) and 8 Taegeuk (太極) forms for Gup holders. In 1971, Kukkiwon established the Taegeuk series as the official international standard, preserving the 8 I Ching trigrams while modernizing footwork and kicking combinations.',
  forms: [
    {
      number: 1,
      name: 'Palgwe Il Jang (1)',
      trigram: '☰ Keon (Heaven)',
      floorPattern: '工 (Gong / Work)',
      patternDefinition: 'Work / Craftsmanship',
      element: 'Heaven & Light',
      taegeukCounterpart: 'Taegeuk 1 (Il Jang) — Floor: 王',
      keyDivergence: 'Palgwe 1 uses deep forward stance (Ap-kubi) and middle blocks; Taegeuk 1 uses natural walking stances (Ap-seogi) with crisp low blocks and front kicks.',
    },
    {
      number: 2,
      name: 'Palgwe Ee Jang (2)',
      trigram: '☱ Tae (Lake)',
      floorPattern: '工 (Gong / Work)',
      patternDefinition: 'Work / Craftsmanship',
      element: 'Lake & Joy',
      taegeukCounterpart: 'Taegeuk 2 (Ee Jang) — Floor: 王',
      keyDivergence: 'Palgwe 2 repeats outside-to-inside middle blocks; Taegeuk 2 introduces high facial punches (Olgul-jireugi) and dynamic chest blocks.',
    },
    {
      number: 3,
      name: 'Palgwe Sam Jang (3)',
      trigram: '☲ Ri (Fire)',
      floorPattern: '工 (Gong / Work)',
      patternDefinition: 'Work / Craftsmanship',
      element: 'Fire & Clarity',
      taegeukCounterpart: 'Taegeuk 3 (Sam Jang) — Floor: 王',
      keyDivergence: 'Palgwe 3 repeats double knifehand middle blocks along 6:00 and upper punches; Taegeuk 3 introduces single knifehand neck strikes (Hansonnal Mok-chigi) and rapid 1-2 punches.',
    },
    {
      number: 4,
      name: 'Palgwe Sa Jang (4)',
      trigram: '☳ Jin (Thunder)',
      floorPattern: '工 (Gong / Work)',
      patternDefinition: 'Work / Craftsmanship',
      element: 'Thunder & Awe',
      taegeukCounterpart: 'Taegeuk 4 (Sa Jang) — Floor: 王',
      keyDivergence: 'Palgwe 4 features 360-degree spinning hammerfist strikes and Keumgang diamond mountain blocks; Taegeuk 4 introduces spearhand thrusts, swallow-form neck strikes, and consecutive side kicks.',
    },
    {
      number: 5,
      name: 'Palgwe Oh Jang (5)',
      trigram: '☴ Seon (Wind)',
      floorPattern: '干 (Gan / Shield)',
      patternDefinition: 'Shield / Defense',
      element: 'Wind & Penetration',
      taegeukCounterpart: 'Taegeuk 5 (Oh Jang) — Floor: 王',
      keyDivergence: 'Palgwe 5 uses the unique "干" (Shield) floor shape, 35 movements, and crane stances (Haktari-seogi); Taegeuk 5 streamlines to 20 movements with target elbow strikes and crossed-stance stomps.',
    },
    {
      number: 6,
      name: 'Palgwe Yook Jang (6)',
      trigram: '☵ Gam (Water)',
      floorPattern: '工 (Gong / Work)',
      patternDefinition: 'Work / Craftsmanship',
      element: 'Water & Constant Flow',
      taegeukCounterpart: 'Taegeuk 6 (Yuk Jang) — Floor: 王',
      keyDivergence: 'Palgwe 6 employs palm outward wedge blocks and jumping crossed stances; Taegeuk 6 introduces roundhouse kicks (Dollyo-chagi), palm heel parries, and 5-second Danjeon breath control.',
    },
    {
      number: 7,
      name: 'Palgwe Chil Jang (7)',
      trigram: '☶ Gan (Mountain)',
      floorPattern: '下 (Ha / Below)',
      patternDefinition: 'Below / Grounding',
      element: 'Mountain & Stability',
      taegeukCounterpart: 'Taegeuk 7 (Chil Jang) — Floor: 王',
      keyDivergence: 'Palgwe 7 uses the "下" pattern, down wedge blocks, and high X-blocks; Taegeuk 7 introduces repeated Tiger Stances (Beom-seogi), scissors blocks, knee strikes, and covered-fist breath control.',
    },
    {
      number: 8,
      name: 'Palgwe Pal Jang (8)',
      trigram: '☷ Gon (Earth)',
      floorPattern: '土 (Tu / Earth)',
      patternDefinition: 'Earth / Soil',
      element: 'Earth & Completion',
      taegeukCounterpart: 'Taegeuk 8 (Pal Jang) — Floor: 王',
      keyDivergence: 'Palgwe 8 follows the "土" pattern with rear grab escapes (Meonge Paegi) and crane stances; Taegeuk 8 introduces aerial jumping double front kicks (Dubal-dangsang-chagi), single mountain blocks, and pulling uppercuts.',
    },
  ],
}

export const KM_PALGWE_COMPARISON: PalgweComparisonData = {
  title: 'តារាងប្រៀបធៀបប្រវត្តិសាស្ត្រ៖ Palgwe ១៩៦៧ និង Taegeuk ១៩៧១',
  subtitle: 'ការវិវត្តពីក្បាច់គុនប្រពៃណី Kwan Kata ទៅកាន់កម្មវិធីសិក្សាអូឡាំពិកទំនើប WT',
  historicalTimeline: 'អនុម័តថ្ងៃទី ៣០ ខែមករា ឆ្នាំ ១៩៦៧ (KTA) & ផ្លាស់ប្តូរឆ្នាំ ១៩៧១ (Kukkiwon)',
  summary:
    'នៅថ្ងៃទី ៣០ ខែមករា ឆ្នាំ ១៩៦៧ សមាគមតេក្វាន់ដូកូរ៉េ (KTA) បានអនុម័តមេគុនស្តង់ដារ Palgwe (八卦) ចំនួន ៨ និង Taegeuk (太極) ចំនួន ៨ សម្រាប់សិស្សកម្រិត Geup។ នៅឆ្នាំ ១៩៧១ Kukkiwon បានកំណត់យកស៊េរី Taegeuk ជាស្តង់ដារផ្លូវការអន្តរជាតិតែមួយគត់ ដោយរក្សាទុកនូវត្រីក្រាម I Ching ទាំង ៨ ដដែល ប៉ុន្តែធ្វើឱ្យជំហានជើង និងបន្សំក្បាច់ទាត់កាន់តែរលូន ស្របតាមកីឡាប្រយុទ្ធទំនើប។',
  forms: [
    {
      number: 1,
      name: 'Palgwe Il Jang (១)',
      trigram: '☰ Keon (មេឃ)',
      floorPattern: '工 (Gong / ពលកម្ម)',
      patternDefinition: 'ពលកម្ម & ការកសាង',
      element: 'មេឃ និងពន្លឺ',
      taegeukCounterpart: 'Taegeuk 1 (Il Jang) — គន្លង៖ 王',
      keyDivergence: 'Palgwe 1 ប្រើជំហរវែងមុខជ្រៅ (Ap-kubi) និងការរារាំងកណ្តាលយឺត; Taegeuk 1 ណែនាំជំហរដើរធម្មជាតិ (Ap-seogi) ជាមួយនឹងការរារាំងក្រោមរហ័ស (Arae-makki) និងការទាត់មុខខ្ទាត។',
    },
    {
      number: 2,
      name: 'Palgwe Ee Jang (២)',
      trigram: '☱ Tae (បឹង)',
      floorPattern: '工 (Gong / ពលកម្ម)',
      patternDefinition: 'ពលកម្ម & ការកសាង',
      element: 'បឹង និងភាពស្ងប់',
      taegeukCounterpart: 'Taegeuk 2 (Ee Jang) — គន្លង៖ 王',
      keyDivergence: 'Palgwe 2 ប្រើការរារាំងកណ្តាល និងរារាំងក្រោមដោយកណ្តាប់ដៃពីរក្នុងជំហរក្រោយ; Taegeuk 2 បញ្ចូលការដាល់មុខខ្ពស់ (Olgul-jireugi) និងការទម្លាក់ជើងទប់លំនឹងក្រោយទាត់។',
    },
    {
      number: 3,
      name: 'Palgwe Sam Jang (៣)',
      trigram: '☲ Ri (ភ្លើង)',
      floorPattern: '工 (Gong / ពលកម្ម)',
      patternDefinition: 'ពលកម្ម & ការកសាង',
      element: 'ភ្លើង និងភាពច្បាស់លាស់',
      taegeukCounterpart: 'Taegeuk 3 (Sam Jang) — គន្លង៖ 王',
      keyDivergence: 'Palgwe 3 ប្រើការរារាំងបាតដៃកាំបិតទ្វេតាមទិសម៉ោង ៦:០០; Taegeuk 3 ណែនាំការកាប់កកូនកាំបិតទោល (Sonnal Mok-chigi) និងបន្សំដាល់ ១-២ យ៉ាងរហ័ស។',
    },
    {
      number: 4,
      name: 'Palgwe Sa Jang (៤)',
      trigram: '☳ Jin (ផ្គរលាន់)',
      floorPattern: '工 (Gong / ពលកម្ម)',
      patternDefinition: 'ពលកម្ម & ការកសាង',
      element: 'ផ្គរលាន់ និងកម្លាំងរញ្ជួយ',
      taegeukCounterpart: 'Taegeuk 4 (Sa Jang) — គន្លង៖ 王',
      keyDivergence: 'Palgwe 4 មានការបង្វិលខ្លួន ៣៦០ ដឺក្រេដាល់កណ្តាប់ដៃញញួរ; Taegeuk 4 ណែនាំការចាក់ម្រាមដៃ (Pyon-son-kkeut), កាប់កទម្រង់សត្វត្របែក (Jebipoom) និងទាត់ផ្អៀងបន្តបន្ទាប់។',
    },
    {
      number: 5,
      name: 'Palgwe Oh Jang (៥)',
      trigram: '☴ Seon (ខ្យល់)',
      floorPattern: '干 (Gan / ខែល)',
      patternDefinition: 'ខែល & ការការពារ',
      element: 'ខ្យល់ និងការជ្រាបចូល',
      taegeukCounterpart: 'Taegeuk 5 (Oh Jang) — គន្លង៖ 王',
      keyDivergence: 'Palgwe 5 ប្រើគន្លងអក្សរ "干" (ខែល) មាន ៣៥ ចលនា និងជំហរសត្វក្រៀល; Taegeuk 5 កាត់បន្ថយមកត្រឹម ២០ ចលនា ដោយផ្តោតលើការវាយកែងចំគោលដៅ និងជំហរខ្វែងជើងទម្លាក់ទម្ងន់។',
    },
    {
      number: 6,
      name: 'Palgwe Yook Jang (៦)',
      trigram: '☵ Gam (ទឹក)',
      floorPattern: '工 (Gong / ពលកម្ម)',
      patternDefinition: 'ពលកម្ម & ការកសាង',
      element: 'ទឹក និងលំហូរឥតឈប់ឈរ',
      taegeukCounterpart: 'Taegeuk 6 (Yuk Jang) — គន្លង៖ 王',
      keyDivergence: 'Palgwe 6 ប្រើការរារាំងបាតដៃច្រានចេញក្រៅ និងជំហរខ្វែងជើងលោត; Taegeuk 6 ណែនាំការទាត់កោង (Dollyo-chagi), រារាំងបាតដៃរុញ និងការគ្រប់គ្រងដង្ហើម ៥ វិនាទី។',
    },
    {
      number: 7,
      name: 'Palgwe Chil Jang (៧)',
      trigram: '☶ Gan (ភ្នំ)',
      floorPattern: '下 (Ha / ខាងក្រោម)',
      patternDefinition: 'ខាងក្រោម & ឫសដី',
      element: 'ភ្នំ និងស្ថេរភាព',
      taegeukCounterpart: 'Taegeuk 7 (Chil Jang) — គន្លង៖ 王',
      keyDivergence: 'Palgwe 7 ប្រើគន្លងអក្សរ "下" និងការរារាំងអក្សរ X ខ្ពស់; Taegeuk 7 ណែនាំជំហរខ្លា (Beom-seogi) ច្រើនលើក, រារាំងកន្ត្រៃ (Gawi-makki), បុកជង្គង់ និងការក្តាប់ដៃគ្រប់គ្រងដង្ហើម។',
    },
    {
      number: 8,
      name: 'Palgwe Pal Jang (៨)',
      trigram: '☷ Gon (ផែនដី)',
      floorPattern: '土 (Tu / ផែនដី)',
      patternDefinition: 'ផែនដី & ការបញ្ចប់',
      element: 'ផែនដី និងភាពពេញលេញ',
      taegeukCounterpart: 'Taegeuk 8 (Pal Jang) — គន្លង៖ 王',
      keyDivergence: 'Palgwe 8 ដើរតាមគន្លងអក្សរ "土" ជាមួយនឹងក្បាច់ដោះការចាប់ពីក្រោយ; Taegeuk 8 ណែនាំការទាត់លោតពីរជើងលើអាកាស (Dubal-dangsang-chagi), រារាំងភ្នំទោល និងការដាល់ទំពក់ឡើងលើ។',
    },
  ],
}

export const ZH_PALGWE_COMPARISON: PalgweComparisonData = {
  title: '1967年传统八卦套路与1971年公认太极品势历史演变矩阵表',
  subtitle: '自早期九大道馆空手道型结构向现代WT奥运竞技教育大系的伟大飞跃',
  historicalTimeline: '1967年1月30日韩国跆拳道协会审定通过 & 1971年国技院确立太极官方教范',
  summary:
    '1967年1月30日，大韩跆拳道协会正式审定面向级位学员的八套“八卦（Palgwae / 八卦）”与八套“太极（Taegeuk / 太極）”套路。至1971年，国技院技术委员会正式确立太极品势为全球唯一公认官方国际考核标准。新体系完整继承了《周易》八卦宇宙哲学，但在人体运动解剖学与实战步法上实现了跨时代革新。',
  forms: [
    {
      number: 1,
      name: '八卦一章 (Palgwe 1)',
      trigram: '☰ 乾 (天)',
      floorPattern: '工 (工字线)',
      patternDefinition: '工巧与营造',
      element: '乾天与朝阳',
      taegeukCounterpart: '太极一章 (Taegeuk 1) — 路线：王',
      keyDivergence: '八卦一章全篇多采用深沉僵硬的前弓步与内格挡；太极一章则大体量引入自然行走步（前步/Ap-seogi）、利落下截防守与前踢弹击。',
    },
    {
      number: 2,
      name: '八卦二章 (Palgwe 2)',
      trigram: '☱ 兑 (泽)',
      floorPattern: '工 (工字线)',
      patternDefinition: '工巧与营造',
      element: '湖泽与愉悦',
      taegeukCounterpart: '太极二章 (Taegeuk 2) — 路线：王',
      keyDivergence: '八卦二章反复在后弓步中施展双拳下截与内防守；太极二章则引入正面上段反冲拳（Olgul-jireugi）与流畅的前踢缓冲落步。',
    },
    {
      number: 3,
      name: '八卦三章 (Palgwe 3)',
      trigram: '☲ 离 (火)',
      floorPattern: '工 (工字线)',
      patternDefinition: '工巧与营造',
      element: '烈火与光明',
      taegeukCounterpart: '太极三章 (Taegeuk 3) — 路线：王',
      keyDivergence: '八卦三章沿6:00后退轴线多次重复双手刀中段截击；太极三章则率先引入单手刀击颈（Sonnal Mok-chigi）与凌厉迅猛的左右1-2连击冲拳。',
    },
    {
      number: 4,
      name: '八卦四章 (Palgwe 4)',
      trigram: '☳ 震 (雷)',
      floorPattern: '工 (工字线)',
      patternDefinition: '工巧与营造',
      element: '惊雷与威势',
      taegeukCounterpart: '太极四章 (Taegeuk 4) — 路线：王',
      keyDivergence: '八卦四章包含360度大旋转铁锤拳下砸；太极四章则引入直插要害的立掌贯手（Pyon-son-kkeut）、燕子服手刀击颈与连续强力侧踢。',
    },
    {
      number: 5,
      name: '八卦五章 (Palgwe 5)',
      trigram: '☴ 巽 (风)',
      floorPattern: '干 (干字线)',
      patternDefinition: '干橹与防御',
      element: '清风与入微',
      taegeukCounterpart: '太极五章 (Taegeuk 5) — 路线：王',
      keyDivergence: '八卦五章采用罕见的“干”字演武线、35个繁复动作与鹤腿步；太极五章精炼为20个高爆发动作，突出标靶肘击与交叉步下踏下砸。',
    },
    {
      number: 6,
      name: '八卦六章 (Palgwe 6)',
      trigram: '☵ 坎 (水)',
      floorPattern: '工 (工字线)',
      patternDefinition: '工巧与营造',
      element: '活水与流动',
      taegeukCounterpart: '太极六章 (Taegeuk 6) — 路线：王',
      keyDivergence: '八卦六章多用掌心向外之分截与腾空交叉步；太极六章则率先引入高位旋风踢（Dollyo-chagi）、掌底格挡与5秒沉稳丹田深呼吸。',
    },
    {
      number: 7,
      name: '八卦七章 (Palgwe 7)',
      trigram: '☶ 艮 (山)',
      floorPattern: '下 (下字线)',
      patternDefinition: '下沉与立根',
      element: '重山与稳固',
      taegeukCounterpart: '太极七章 (Taegeuk 7) — 路线：王',
      keyDivergence: '八卦七章走“下”字形路线、施展下压分截与高位十字交叉防守；太极七章则多番演练虎步（Beom-seogi）、剪刀格挡、顶膝与含拳调息。',
    },
    {
      number: 8,
      name: '八卦八章 (Palgwe 8)',
      trigram: '☷ 坤 (地)',
      floorPattern: '土 (土字线)',
      patternDefinition: '厚土与承载',
      element: '大地与圆满',
      taegeukCounterpart: '太极八章 (Taegeuk 8) — 路线：王',
      keyDivergence: '八卦八章走“土”字形路线，含后方被擒解脱技与鹤腿防守；太极八章则引入全场最高难度之双飞腾空前踢（Dubal-dangsang）、单山形防守与勾下巴冲拳。',
    },
  ],
}

export const KO_PALGWE_COMPARISON: PalgweComparisonData = {
  title: '1967년 팔괘 품새와 1971년 태극 품새의 역사적 비교 매트릭스',
  subtitle: '초기 9대 관의 전통 가라테 형(型) 잔재에서 WT 올림픽 현대 표준으로의 도약',
  historicalTimeline: '1967년 1월 30일 KTA 제정 & 1971년 국기원 태극 품새 공식 채택',
  summary:
    '1967년 1월 30일 대한태권도협회(KTA)는 유급자를 위한 팔괘(八卦) 8개와 태극(太極) 8개 품새를 공식 제정하였습니다. 이후 1971년 국기원은 주역 8괘의 심오한 동양 철학은 온전히 계승하되, 가라테 형의 부자연스러운 직선적 보법을 탈피하고 현대 스포츠 겨루기에 부합하는 한국 고유의 보법과 리듬을 담아 태극 품새를 유일한 국제 공인 표준으로 확립하였습니다.',
  forms: [
    {
      number: 1,
      name: '팔괘 1장 (Palgwe 1)',
      trigram: '☰ 건 (하늘)',
      floorPattern: '工 (장인 공자선)',
      patternDefinition: '공작과 건축',
      element: '하늘과 빛',
      taegeukCounterpart: '태극 1장 (Taegeuk 1) — 품새선: 王',
      keyDivergence: '팔괘 1장은 깊고 무거운 앞굽이 위주의 직선 공방 중심; 태극 1장은 자연스러운 앞서기 보법, 간결한 아래막기, 그리고 스냅력 있는 앞차기를 도입함.',
    },
    {
      number: 2,
      name: '팔괘 2장 (Palgwe 2)',
      trigram: '☱ 태 (연못)',
      floorPattern: '工 (장인 공자선)',
      patternDefinition: '공작과 건축',
      element: '연못과 기쁨',
      taegeukCounterpart: '태극 2장 (Taegeuk 2) — 품새선: 王',
      keyDivergence: '팔괘 2장은 뒷굽이에서 두 주먹 몸통 및 아래막기를 반복; 태극 2장은 얼굴반대지르기 도입과 앞차기 후 유연한 중심 이동 및 완급 조절을 강조함.',
    },
    {
      number: 3,
      name: '팔괘 3장 (Palgwe 3)',
      trigram: '☲ 리 (불)',
      floorPattern: '工 (장인 공자선)',
      patternDefinition: '공작과 건축',
      element: '불과 태양',
      taegeukCounterpart: '태극 3장 (Taegeuk 3) — 품새선: 王',
      keyDivergence: '팔괘 3장은 6:00 후방 복귀선에서 양손날 몸통막기 반복; 태극 3장은 한손날 목치기와 신속한 원투 연속 몸통지르기를 도입함.',
    },
    {
      number: 4,
      name: '팔괘 4장 (Palgwe 4)',
      trigram: '☳ 진 (우레)',
      floorPattern: '工 (장인 공자선)',
      patternDefinition: '공작과 건축',
      element: '우레와 벽력',
      taegeukCounterpart: '태극 4장 (Taegeuk 4) — 품새선: 王',
      keyDivergence: '팔괘 4장은 360도 회전 메주먹 치기 특징; 태극 4장은 실전 편손끝 세워찌르기, 제비품 목치기, 그리고 연속 옆차기를 최초로 도입함.',
    },
    {
      number: 5,
      name: '팔괘 5장 (Palgwe 5)',
      trigram: '☴ 손 (바람)',
      floorPattern: '干 (방패 간자선)',
      patternDefinition: '방패와 수호',
      element: '바람과 침투',
      taegeukCounterpart: '태극 5장 (Taegeuk 5) — 품새선: 王',
      keyDivergence: '팔괘 5장은 특이한 "干"자선과 35개 동작, 학다리서기 구사; 태극 5장은 20개 동작으로 집약하여 표적 팔굽치기와 꼬아서기 딛기, 메주먹 내려치기를 정립함.',
    },
    {
      number: 6,
      name: '팔괘 6장 (Palgwe 6)',
      trigram: '☵ 감 (물)',
      floorPattern: '工 (장인 공자선)',
      patternDefinition: '공작과 건축',
      element: '물과 흐름',
      taegeukCounterpart: '태극 6장 (Taegeuk 6) — 품새선: 王',
      keyDivergence: '팔괘 6장은 손바닥 바깥헤쳐막기와 도약 꼬아서기 구사; 태극 6장은 돌려차기, 바탕손 몸통막기, 한손날 얼굴바깥막기, 5초 단전호흡을 도입함.',
    },
    {
      number: 7,
      name: '팔괘 7장 (Palgwe 7)',
      trigram: '☶ 간 (산)',
      floorPattern: '下 (아래 하자선)',
      patternDefinition: '하강과 정착',
      element: '산과 무게',
      taegeukCounterpart: '태극 7장 (Taegeuk 7) — 품새선: 王',
      keyDivergence: '팔괘 7장은 "下"자선과 아래헤쳐막기, 엇걸어막기 중심; 태극 7장은 범서기 자세의 집중 훈련, 가위막기, 무릎치기, 보주먹 조화 단전호흡을 도입함.',
    },
    {
      number: 8,
      name: '팔괘 8장 (Palgwe 8)',
      trigram: '☷ 곤 (땅)',
      floorPattern: '土 (흙 토자선)',
      patternDefinition: '대지와 포용',
      element: '땅과 대지',
      taegeukCounterpart: '태극 8장 (Taegeuk 8) — 품새선: 王',
      keyDivergence: '팔괘 8장은 "土"자선과 뒤에서 잡혔을 때의 멍에빼기 기술 구사; 태극 8장은 최고 난이도의 공중 도약 두발당성 앞차기, 외산틀막기, 당겨 턱지르기를 집대성함.',
    },
  ],
}

export const DEFAULT_PALGWE_COMPARISON: PalgweComparisonData = EN_PALGWE_COMPARISON

function getRawLocalizedWhatIsTaegeuk(lang: string): WhatIsTaegeukData {
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
        fourExecutionElements: KM_FOUR_EXECUTION_ELEMENTS,
        eightPerformancePillars: KM_EIGHT_PERFORMANCE_PILLARS,
        palgweComparison: KM_PALGWE_COMPARISON,
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
        fourExecutionElements: ZH_FOUR_EXECUTION_ELEMENTS,
        eightPerformancePillars: ZH_EIGHT_PERFORMANCE_PILLARS,
        palgweComparison: ZH_PALGWE_COMPARISON,
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
        fourExecutionElements: KO_FOUR_EXECUTION_ELEMENTS,
        eightPerformancePillars: KO_EIGHT_PERFORMANCE_PILLARS,
        palgweComparison: KO_PALGWE_COMPARISON,
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
        fourExecutionElements: EN_FOUR_EXECUTION_ELEMENTS,
        eightPerformancePillars: EN_EIGHT_PERFORMANCE_PILLARS,
        palgweComparison: EN_PALGWE_COMPARISON,
      }
  }
}

export function getLocalizedWhatIsTaegeuk(lang: string): WhatIsTaegeukData {
  const data = getRawLocalizedWhatIsTaegeuk(lang)
  return {
    ...data,
    fourExecutionElements: data.fourExecutionElements || DEFAULT_FOUR_EXECUTION_ELEMENTS,
    eightPerformancePillars: data.eightPerformancePillars || DEFAULT_EIGHT_PERFORMANCE_PILLARS,
    palgweComparison: data.palgweComparison || DEFAULT_PALGWE_COMPARISON,
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

  const detailed = poomsaeDetailedTranslations[lang as 'km' | 'zh' | 'ko']?.[item.id]
  const basic = item.translations?.[lang as 'km' | 'zh' | 'ko']
  const t = detailed || basic
  if (!t) return item

  return {
    ...item,
    ...t,
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


