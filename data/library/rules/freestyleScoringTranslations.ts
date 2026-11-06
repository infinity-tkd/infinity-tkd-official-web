// =============================================================================
// FREESTYLE POOMSAE SCORING TRANSLATIONS & RULE DEFINITIONS
// Official World Taekwondo (WT) (2/2026) V4 Judge's Score Sheet
// =============================================================================

export interface FreestyleScoringI18n {
  title: string
  subtitle: string
  officialVersion: string
  courtLabel: string
  contestantLabel: string
  mandatoryStancesTitle: string
  mandatoryStancesDesc: string
  hakdariSeogi: string
  beomSeogi: string
  dwitkubi: string
  technicalSkillsTitle: string
  technicalSkillsMax: string
  difficultyFootTitle: string
  difficultyFootMax: string
  basicScoreDesc: string
  difficultyBonusDesc: string
  basicMovementsTitle: string
  basicMovementsDesc: string
  technicalDeductionsTitle: string
  mandatoryStancesDeduction: string
  fallingDeduction: string
  excessiveAcrobaticsDeduction: string
  presentationTitle: string
  presentationMax: string
  creativityTitle: string
  creativityDesc: string
  harmonyTitle: string
  harmonyDesc: string
  energyTitle: string
  energyDesc: string
  musicChoreoTitle: string
  musicChoreoDesc: string
  totalScoreTitle: string
  refereeDeductionsTitle: string
  timePenalty: string
  boundaryPenalty: string
  restartPenalty: string
  finalScoreTitle: string
  judgeNameLabel: string
  judgeNationLabel: string
  judgeSignatureLabel: string
  printScoreSheet: string
  resetSheet: string
  presetsTitle: string
  presetGold: string
  presetSilver: string
  presetPenalty: string
  timerLabel: string
  timerStart: string
  timerStop: string
  timerReset: string
  ruleNotice: string
}

export const freestyleScoringI18n: Record<'en' | 'km' | 'zh' | 'ko', FreestyleScoringI18n> = {
  en: {
    title: "WT Freestyle Poomsae Competition Judge's Score Sheet",
    subtitle: 'Official World Taekwondo Electronic Scoring Simulation & Certification Standard',
    officialVersion: 'World Taekwondo (WT) (2/2026) V4',
    courtLabel: 'Court #',
    contestantLabel: 'Contestant # / Name',
    mandatoryStancesTitle: 'Mandatory Stances (Compulsory)',
    mandatoryStancesDesc: 'All 3 stances must be clearly executed during the routine. Missing stances incur -0.3 deduction each.',
    hakdariSeogi: 'Hakdari Seogi (Crane Stance / 학다리 서기)',
    beomSeogi: 'Beom Seogi (Tiger Stance / 범서기)',
    dwitkubi: 'Dwitkubi (Back Stance / 뒷굽이)',
    technicalSkillsTitle: 'Technical Skills',
    technicalSkillsMax: '6.0 Points Max',
    difficultyFootTitle: 'Level of Difficulty of Foot Techniques',
    difficultyFootMax: '5.0 Points Max (5 Compulsory Skills)',
    basicScoreDesc: 'Basic score (0.0 to 0.7) allocated according to balance and accuracy of execution (mastery of performance).',
    difficultyBonusDesc: 'Add +0.1, +0.2, or +0.3 points to basic score according to difficulty criteria.',
    basicMovementsTitle: 'Basic Movements & Practicability',
    basicMovementsDesc: 'Execution of traditional Taekwondo blocks, strikes, stances, and martial realism (0.0 to 1.0).',
    technicalDeductionsTitle: 'Technical Skills Deductions',
    mandatoryStancesDeduction: 'Mandatory stances omitted / incorrect (-0.3 each)',
    fallingDeduction: 'Falling / loss of balance out of sequence (-0.3 to -0.6)',
    excessiveAcrobaticsDeduction: 'More than 3 acrobatic kicks performed (-0.3 each)',
    presentationTitle: 'Presentation',
    presentationMax: '4.0 Points Max (4 Criteria, 1.0 each)',
    creativityTitle: 'Creativity (1.0)',
    creativityDesc: 'Originality of choreography, unique transitions, and novel martial combinations.',
    harmonyTitle: 'Harmony (1.0)',
    harmonyDesc: 'Synchronization of power, speed, rhythm, and seamless athletic movement.',
    energyTitle: 'Expression of Energy (1.0)',
    energyDesc: 'Siseon (eye focus), Kihap (vocal yell), spiritual intensity, and dynamic power projection.',
    musicChoreoTitle: 'Music & Choreography (1.0)',
    musicChoreoDesc: 'Musical synchronization, beat matching with strikes, and martial narrative flow.',
    totalScoreTitle: 'Total Score (Technical + Presentation)',
    refereeDeductionsTitle: 'Referee Deductions (Gam-jeom Checklist)',
    timePenalty: 'Time penalty (-0.3): Outside 90s–100s regulation window',
    boundaryPenalty: 'Crossing boundary line (-0.3 per occurrence)',
    restartPenalty: 'Restart routine (-0.6)',
    finalScoreTitle: 'Final Score (Total – Deductions)',
    judgeNameLabel: "Judge's Name & Number",
    judgeNationLabel: "Judge's Nation",
    judgeSignatureLabel: "Judge's Signature",
    printScoreSheet: 'Print Official Score Sheet',
    resetSheet: 'Reset to Blank Sheet',
    presetsTitle: 'Load Official Benchmark Routines:',
    presetGold: '🥇 World Champion Gold (9.40)',
    presetSilver: '🥈 International Finalist (8.40)',
    presetPenalty: '⚠️ Penalty Scenario (6.80)',
    timerLabel: 'Routine Stopwatch (90s–100s Target)',
    timerStart: 'Start Timer',
    timerStop: 'Stop Timer',
    timerReset: 'Reset Timer',
    ruleNotice: '*Referee: Deductions (Time + Boundary + Restart) are deducted from Total Score. Referee declares winner only after confirmation.',
  },
  km: {
    title: 'តារាងពិន្ទុផ្លូវការ Freestyle Poomsae សហព័ន្ធតេក្វាន់ដូពិភពលោក (WT)',
    subtitle: 'ការក្លែងធ្វើប្រព័ន្ធពិន្ទុអេឡិចត្រូនិកស្តង់ដារ World Taekwondo',
    officialVersion: 'World Taekwondo (WT) (2/2026) V4',
    courtLabel: 'តារាងប្រកួតទី #',
    contestantLabel: 'កីឡាករលេខ # / ឈ្មោះ',
    mandatoryStancesTitle: 'ជំហរចាំបាច់ទាំង ៣ (Mandatory Stances)',
    mandatoryStancesDesc: 'ជំហរទាំង ៣ ត្រូវតែសម្តែងឱ្យបានច្បាស់លាស់។ ការខកខានជំហរណាមួយ នឹងត្រូវកាត់ -០.៣ ពិន្ទុក្នុងមួយជំហរ។',
    hakdariSeogi: 'Hakdari Seogi (ជំហរជើងសត្វក្រៀល / 학다리 서기)',
    beomSeogi: 'Beom Seogi (ជំហរខ្លា / 범서기)',
    dwitkubi: 'Dwitkubi (ជំហរជំទយក្រោយ / 뒷굽이)',
    technicalSkillsTitle: 'ជំនាញបច្ចេកទេស (Technical Skills)',
    technicalSkillsMax: 'អតិបរមា ៦.០ ពិន្ទុ',
    difficultyFootTitle: 'កម្រិតពិបាកនៃក្បាច់ទាត់ជើង (Foot Techniques)',
    difficultyFootMax: 'អតិបរមា ៥.០ ពិន្ទុ (ជំនាញកំហិតទាំង ៥)',
    basicScoreDesc: 'ពិន្ទុមូលដ្ឋាន (០.០ ដល់ ០.៧) ផ្អែកលើលំនឹង និងភាពសុក្រឹតនៃការទាត់ (Mastery of Performance)។',
    difficultyBonusDesc: 'បូកបន្ថែម +០.១, +០.២ ឬ +០.៣ ពិន្ទុលើពិន្ទុមូលដ្ឋាន ផ្អែកលើកម្រិតពិបាក។',
    basicMovementsTitle: 'ចលនាមូលដ្ឋាន & ការអនុវត្តជាក់ស្តែង',
    basicMovementsDesc: 'ការសម្តែងស្នៀតរារាំង វាយប្រហារ ជំហរប្រពៃណី និងភាពជាក់ស្តែងក្នុងក្បាច់គុន (០.០ ដល់ ១.០)។',
    technicalDeductionsTitle: 'ការកាត់ពិន្ទុបច្ចេកទេស (Technical Deductions)',
    mandatoryStancesDeduction: 'ខកខាន ឬធ្វើជំហរចាំបាច់មិនត្រឹមត្រូវ (-០.៣ ក្នុងមួយជំហរ)',
    fallingDeduction: 'ដួល ឬបាត់បង់លំនឹងខុសលំដាប់ (-០.៣ ដល់ -០.៦)',
    excessiveAcrobaticsDeduction: 'សម្តែងកាយសម្ព័ន្ធទាត់លើស ៣ ដង (-០.៣ ក្នុងមួយដង)',
    presentationTitle: 'ការសម្តែង និងសិល្បៈ (Presentation)',
    presentationMax: 'អតិបរមា ៤.០ ពិន្ទុ (៤ លក្ខណៈវិនិច្ឆ័យ មួួយៗ ១.០)',
    creativityTitle: 'ភាពច្នៃប្រឌិត (1.0)',
    creativityDesc: 'ភាពប្លែកនៃក្បាច់ចលនា ការតភ្ជាប់ និងបន្សំស្នៀតថ្មីៗ។',
    harmonyTitle: 'ភាពស៊ីសង្វាក់គ្នា (1.0)',
    harmonyDesc: 'តុល្យភាពរវាងកម្លាំង ល្បឿន ចង្វាក់ និងការផ្លាស់ទីរលូន។',
    energyTitle: 'ការបញ្ចេញថាមពល (1.0)',
    energyDesc: 'ក្រសែភ្នែក (Siseon) ការស្រែក (Kihap) ស្មារតី និងកម្លាំងផ្ទុះ។',
    musicChoreoTitle: 'តន្ត្រី និងក្បាច់រាំក្បាច់គុន (1.0)',
    musicChoreoDesc: 'ភាពត្រូវគ្នានៃចង្វាក់ភ្លេងជាមួយស្នៀតទាត់ និងសាច់រឿងក្បាច់គុន។',
    totalScoreTitle: 'ពិន្ទុសរុប (បច្ចេកទេស + ការសម្តែង)',
    refereeDeductionsTitle: 'ការកាត់ពិន្ទុដោយអាជ្ញាកណ្តាល (Referee Gam-jeom)',
    timePenalty: 'ពិន្ទុពេលវេលា (-០.៣)៖ លើស ឬខ្វះចន្លោះ ៩០វិនាទី–១០០វិនាទី',
    boundaryPenalty: 'ជាន់ ឬចេញក្រៅខ្សែបន្ទាត់ (-០.៣ ក្នុងមួយលើក)',
    restartPenalty: 'ចាប់ផ្តើមសម្តែងឡើងវិញ (-០.៦)',
    finalScoreTitle: 'ពិន្ទុចុងក្រោយ (ពិន្ទុសរុប – ការកាត់ពិន្ទុ)',
    judgeNameLabel: 'ឈ្មោះ និងលេខចៅក្រម',
    judgeNationLabel: 'សញ្ជាតិចៅក្រម',
    judgeSignatureLabel: 'ហត្ថលេខាចៅក្រម',
    printScoreSheet: 'បោះពុម្ពតារាងពិន្ទុផ្លូវការ',
    resetSheet: 'កំណត់ឡើងវិញ',
    presetsTitle: 'ជ្រើសរើសទម្រង់គំរូផ្លូវការ៖',
    presetGold: '🥇 មេដាយមាសពិភពលោក (9.40)',
    presetSilver: '🥈 វគ្គផ្តាច់ព្រ័ត្រអន្តរជាតិ (8.40)',
    presetPenalty: '⚠️ ករណីមានការពិន័យ (6.80)',
    timerLabel: 'នាឡិកាវាស់ពេល (គោលដៅ ៩០-១០០ វិនាទី)',
    timerStart: 'ចាប់ផ្តើម',
    timerStop: 'បញ្ឈប់',
    timerReset: 'កំណត់ឡើងវិញ',
    ruleNotice: '*អាជ្ញាកណ្តាល៖ ការកាត់ពិន្ទុ (ពេល + ព្រំដែន + ចាប់ផ្តើមឡើងវិញ) ត្រូវកាត់ចេញពីពិន្ទុសរុប។',
  },
  zh: {
    title: 'WT世界跆拳道自选自由品势 (Freestyle) 裁判专用打分表',
    subtitle: '世界跆拳道联合会官方电子评分模拟与执裁系统',
    officialVersion: 'World Taekwondo (WT) (2/2026) V4',
    courtLabel: '场地号 #',
    contestantLabel: '选手编号 / 姓名',
    mandatoryStancesTitle: '三项强制必选步型 (Mandatory Stances)',
    mandatoryStancesDesc: '整套动作中必须清晰展现全部三项规定步型。遗漏任何步型扣除0.3分。',
    hakdariSeogi: '鹤腿立 (Hakdari Seogi / 학다리 서기)',
    beomSeogi: '虎步 (Beom Seogi / 범서기)',
    dwitkubi: '三七步 / 后弓步 (Dwitkubi / 뒷굽이)',
    technicalSkillsTitle: '技术技巧评分 (Technical Skills)',
    technicalSkillsMax: '满分 6.0 分',
    difficultyFootTitle: '五项指定腿法难度评分',
    difficultyFootMax: '满分 5.0 分 (每项最高1.0分)',
    basicScoreDesc: '基础表现分 (0.0至0.7分)，根据踢击的空中平衡与动作准确性（掌握度）评定。',
    difficultyBonusDesc: '根据腿法动作难度标准在基础分上追加 +0.1、+0.2 或 +0.3 分。',
    basicMovementsTitle: '基本动作与实战实用性',
    basicMovementsDesc: '传统防守、击打、拳法手部动作与攻防实用性 (0.0至1.0分)。',
    technicalDeductionsTitle: '技术分专项扣分 (Technical Deductions)',
    mandatoryStancesDeduction: '缺少强制规定步型 (-0.3分/项)',
    fallingDeduction: '失去重心摔倒 / 落地紊乱 (-0.3至-0.6分)',
    excessiveAcrobaticsDeduction: '特技空翻腿法超过3次 (-0.3分/次)',
    presentationTitle: '表现力与艺术感染力 (Presentation)',
    presentationMax: '满分 4.0 分 (四大维度，各1.0分)',
    creativityTitle: '独创性与编排创意 (1.0)',
    creativityDesc: '编排新颖度、过渡衔接的巧思及特色武道组合。',
    harmonyTitle: '和谐性与协调性 (1.0)',
    harmonyDesc: '爆发力、速度、步调与身体平衡的有机统一。',
    energyTitle: '气势与能量表达 (1.0)',
    energyDesc: '视线聚焦 (Siseon)、呐喊 (Kihap)、精神气概与爆发冲击力。',
    musicChoreoTitle: '音乐与动作编配 (1.0)',
    musicChoreoDesc: '动作落点与音律节奏的精准卡点及叙事意境。',
    totalScoreTitle: '总分 (技术分 + 表现分)',
    refereeDeductionsTitle: '裁判长违规罚分 (Gam-jeom 扣分清单)',
    timePenalty: '时间超时/不足扣分 (-0.3分)：规定时间窗口为 90秒～100秒',
    boundaryPenalty: '出界越线扣分 (-0.3分/次)',
    restartPenalty: '中途重赛中断扣分 (-0.6分)',
    finalScoreTitle: '最终得分 (总分 – 扣分)',
    judgeNameLabel: '裁判员姓名与编号',
    judgeNationLabel: '国籍 / 代表队',
    judgeSignatureLabel: '裁判签署',
    printScoreSheet: '打印官方打分表',
    resetSheet: '清空表格重置',
    presetsTitle: '载入官方基准演练案例：',
    presetGold: '🥇 世锦赛冠军演练 (9.40)',
    presetSilver: '🥈 国际顶尖决赛水准 (8.40)',
    presetPenalty: '⚠️ 犯规扣分综合案例 (6.80)',
    timerLabel: '演练秒表 (规定区间 90秒–100秒)',
    timerStart: '启动计时',
    timerStop: '停止计时',
    timerReset: '复位秒表',
    ruleNotice: '*裁判长：时间、越线及重赛罚分从总分中扣除，须确认后出示最终成绩。',
  },
  ko: {
    title: 'WT 세계태권도연맹 공인 자유 품새 심사표 (Judge’s Score Sheet)',
    subtitle: '공인 심사 전자 채점 시뮬레이터 및 국제 경기 규정 표준 시스템',
    officialVersion: 'World Taekwondo (WT) (2/2026) V4',
    courtLabel: '코트 번호 #',
    contestantLabel: '선수 번호 / 성명',
    mandatoryStancesTitle: '3대 필수 의무 서기 (Mandatory Stances)',
    mandatoryStancesDesc: '시연 중 3가지 서기가 모두 명확히 표현되어야 함. 누락 시 서기당 -0.3점 감점.',
    hakdariSeogi: '학다리 서기 (Hakdari Seogi)',
    beomSeogi: '범서기 (Beom Seogi)',
    dwitkubi: '뒷굽이 (Dwitkubi)',
    technicalSkillsTitle: '기술력 채점 (Technical Skills)',
    technicalSkillsMax: '6.0점 만점',
    difficultyFootTitle: '5대 필수 발차기 난이도 채점',
    difficultyFootMax: '5.0점 만점 (각 1.0점 만점)',
    basicScoreDesc: '기본점수 (0.0~0.7점): 발차기의 공중 균형 및 정확성(완성도)에 따라 부여.',
    difficultyBonusDesc: '난이도 기준에 따라 기본점수에 +0.1, +0.2, 또는 +0.3점 가산.',
    basicMovementsTitle: '기본 동작 및 실전성 (1.0)',
    basicMovementsDesc: '태권도 정통 막기, 지르기, 손동작의 정확도 및 실전적 위력 (0.0~1.0점).',
    technicalDeductionsTitle: '기술력 감점 항목 (Technical Deductions)',
    mandatoryStancesDeduction: '필수 서기 누락 / 부정확 (서기당 -0.3점)',
    fallingDeduction: '균형 상실 및 넘어짐 / 착지 실패 (-0.3 ~ -0.6점)',
    excessiveAcrobaticsDeduction: '아크로바틱 발차기 3회 초과 시 (-0.3점씩)',
    presentationTitle: '연출력 채점 (Presentation)',
    presentationMax: '4.0점 만점 (4개 평가 항목 각 1.0점)',
    creativityTitle: '창의성 (1.0)',
    creativityDesc: '안무의 독창성, 신선한 전환 동작 및 고유한 기술적 조합.',
    harmonyTitle: '조화성 (1.0)',
    harmonyDesc: '위력, 스피드, 리듬 및 신체 유연성의 완벽한 일체감.',
    energyTitle: '기 표현력 (1.0)',
    energyDesc: '시선 (Siseon), 기합 (Kihap), 무도적 기백 및 폭발적인 기세.',
    musicChoreoTitle: '음악 및 안무 (1.0)',
    musicChoreoDesc: '음악 박자와 타격 순간의 싱크로율 및 무도적 연출 흐름.',
    totalScoreTitle: '총점 (기술력 6.0 + 연출력 4.0)',
    refereeDeductionsTitle: '주심 감점 (Gam-jeom 감점 체크리스트)',
    timePenalty: '시간 규정 위반 (-0.3점): 90초~100초 규정 시간 미달/초과',
    boundaryPenalty: '한계선 이탈 감점 (회당 -0.3점)',
    restartPenalty: '경연 재시작 감점 (-0.6점)',
    finalScoreTitle: '최종 점수 (총점 – 감점 = Final Score)',
    judgeNameLabel: '심판 성명 및 번호',
    judgeNationLabel: '심판 국적',
    judgeSignatureLabel: '심판 서명',
    printScoreSheet: '공인 심사표 인쇄 / PDF 저장',
    resetSheet: '채점표 초기화',
    presetsTitle: '공인 채점 시뮬레이션 프리셋:',
    presetGold: '🥇 세계선수권 금메달 루틴 (9.40)',
    presetSilver: '🥈 국제 결승 진출자 루틴 (8.40)',
    presetPenalty: '⚠️ 감점 발생 사례 루틴 (6.80)',
    timerLabel: '경연 시간 스톱워치 (기준 90초~100초)',
    timerStart: '타이머 시작',
    timerStop: '타이머 정지',
    timerReset: '타이머 리셋',
    ruleNotice: '*주심: 시간, 한계선, 재시작 감점은 총점에서 일괄 감산하며 최종 승인 후 표출함.',
  },
}

export interface CompulsoryFootSkillRule {
  id: string
  name: string
  koreanName: string
  zeroThreshold: string
  bonus01Label: string
  bonus02Label: string
  bonus03Label: string
  description: string
}

export const compulsoryFootSkillRules: CompulsoryFootSkillRule[] = [
  {
    id: 'jumping-side-kick',
    name: 'Height of Jumping Side Kick',
    koreanName: '뛰어 옆차기 높이 (Twio Yeop Chagi)',
    zeroThreshold: 'Below Belt (허리 아래)',
    bonus01Label: 'Body level (몸통)',
    bonus02Label: 'Face level (얼굴)',
    bonus03Label: 'Over Face level (얼굴 초과)',
    description: 'Average basic score is 0.4 – 0.5 pts. Evaluates vertical elevation, linear Balnal foot blade lock, and balance.',
  },
  {
    id: 'multiple-kicks',
    name: 'Multiple Kicks in the Air',
    koreanName: '공중 연속 다단 발차기 (Multiple Kicks)',
    zeroThreshold: '< 3 kicks (3회 미만)',
    bonus01Label: '3 kicks (any type / 3단)',
    bonus02Label: '4 kicks (any type / 4단)',
    bonus03Label: '5 kicks (any type / 5단)',
    description: 'Average basic score is 0.4 – 0.5 pts. Executed during a single jump flight. Evaluates flight duration and rapid chambering.',
  },
  {
    id: 'spin-kick',
    name: 'Gradient of Spins in a Spin Kick',
    koreanName: '회전 발차기 회전각 (Spin Kick Gradient)',
    zeroThreshold: '< 360° (360도 미만)',
    bonus01Label: '360° Body (360도 몸통)',
    bonus02Label: '540° Face (540도 얼굴)',
    bonus03Label: '720° Face or higher (720도 이상)',
    description: 'Average basic score is 0.4 – 0.5 pts. Evaluates mid-air rotational axis, visual spotting, and impact extension.',
  },
  {
    id: 'consecutive-sparring',
    name: 'Performance level of consecutive Sparring Kicks',
    koreanName: '연속 겨루기 발차기 (Consecutive Sparring Kicks)',
    zeroThreshold: '< 7 kicks (7회 미만)',
    bonus01Label: 'Low level (7-10 kicks / 하급)',
    bonus02Label: 'Mid. level (7-10 kicks / 중급)',
    bonus03Label: 'High level (7-10 kicks / 상급)',
    description: 'Average basic score is 0.4 – 0.5 pts. Sequence of 7 to 10 consecutive kyorugi kicks demonstrating speed and power.',
  },
  {
    id: 'acrobatic-kick',
    name: 'Acrobatic Kicking Technique',
    koreanName: '아크로바틱 발차기 (Acrobatic Kicking)',
    zeroThreshold: 'No kick (발차기 미포함)',
    bonus01Label: 'Low level (Cartwheel / 하급)',
    bonus02Label: 'Mid. level (B-twist / 중급)',
    bonus03Label: 'High level (Back tuck / 상급)',
    description: 'Average basic score is 0.4 – 0.5 pts. Gymnastic / tricking aerial maneuver that incorporates a decisive Taekwondo kick.',
  },
]
