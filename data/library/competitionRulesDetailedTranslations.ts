/**
 * ==============================================================================
 * WORLD TAEKWONDO DETAILED SECTIONS MULTILINGUAL DATASET (EN, KM, ZH, KO)
 * ==============================================================================
 * Localized data for:
 * 1. Officials & Match Personnel
 * 2. Ring Dynamics (Octagon vs Square)
 * 3. Eligibility & Protective Equipment Protocols
 * 4. Top 7 Beginner Mistakes & Tactical Corrections
 * 5. Champion Mindset Guidelines
 * 6. Practical Match Scenarios & Official Rulings (5 Kyorugi Cases)
 * 7. Practical Poomsae Scoring Case Studies (5 Poomsae Cases)
 * 8. Fourteen (14) Fundamental Basic Movements (Kukkiwon Standard)
 * ==============================================================================
 */

export interface LocalizedOfficial {
  title: string
  role: string
  description: string
  color: string
}

export interface LocalizedRingDynamics {
  octagonTitle: string
  octagonSubtitle: string
  octagonDescription: string
  octagonPoints: string[]
  squareTitle: string
  squareSubtitle: string
  squareDescription: string
  squarePoints: string[]
}

export interface LocalizedEligibilityAndGear {
  eligibilityTitle: string
  eligibilityBadge: string
  eligibilityItems: string[]
  gearTitle: string
  gearBadge: string
  gearItems: string[]
}

export interface LocalizedBeginnerMistake {
  title: string
  mistake: string
  correction: string
}

export interface LocalizedMindsetRule {
  title: string
  description: string
}

export interface LocalizedMatchScenario {
  caseNum: number
  title: string
  scenario: string
  decision: string
  points: string
  color: string
}

export interface LocalizedPoomsaeCase {
  caseNum: number
  title: string
  penalty: string
  scenario: string
  deductions: string[]
  total: string
  color: string
}

export interface LocalizedBasicMovement {
  num: number
  name: string
  korean: string
  desc: string
}

// 1. OFFICIALS & PERSONNEL
export function getLocalizedOfficials(lang: string): LocalizedOfficial[] {
  switch (lang) {
    case 'km':
      return [
        { title: '១. កីឡាករប្រកួត', role: 'Chung (ខៀវ) vs Hong (ក្រហម)', description: 'បែងចែកតាមកម្រិតអាយុ ខ្សែក្រវាត់នៅថ្នាក់ក្លឹប និងតាមប្រភេទទម្ងន់យ៉ាងតឹងរ៉ឹងនៅកម្រិតជើងឯកជាតិ និងអន្តរជាតិ។', color: 'text-brand-red' },
        { title: '២. គ្រូបង្វឹក', role: 'ប្រឹក្សាយុទ្ធសាស្ត្រជ្រុង & IVR', description: 'ផ្តល់ការណែនាំយុទ្ធសាស្ត្រ ស្នើសុំកាតវីដេអូតវ៉ា IVR (១ កាត) ឬបោះកន្សែងសបញ្ឈប់ការប្រកួតដើម្បីសុវត្ថិភាពកីឡាករ។', color: 'text-blue-500' },
        { title: '៣. អាជ្ញាកណ្តាលកណ្តាល', role: 'អាជ្ញាធរពេញលេញលើសង្វៀន', description: 'គ្រប់គ្រងការប្រកួតទាំងស្រុង បញ្ជាដោយពាក្យកូរ៉េ (Kal-yeo / Kye-sok) ការពារសុវត្ថិភាព និងប្រកាសពិន័យ Gam-jeom។', color: 'text-amber-500' },
        { title: '៤. ចៅក្រមជ្រុង', role: 'ចៅក្រម ៣ រូប (កត់ត្រាពិន្ទុ)', description: 'កត់ត្រាពិន្ទុម៉ាត់ និងពិន្ទុបន្ថែមនៃការទាត់បង្វិលភ្លាមៗតាមរយៈឧបករណ៍ចុចពិន្ទុដៃ (២ ក្នុងចំណោម ៣ ត្រូវតែចុចព្រមគ្នា)។', color: 'text-purple-500' },
        { title: '៥. មន្ត្រីតុបច្ចេកទេស', role: 'គណៈកម្មការត្រួតពិនិត្យការប្រកួត', description: 'មន្ត្រីជាន់ខ្ពស់ត្រួតពិនិត្យប្រព័ន្ធពិន្ទុអេឡិចត្រូនិក ផ្ទៀងផ្ទាត់ពិន្ទុបន្ថែមបច្ចេកទេស និងដោះស្រាយពាក្យបណ្តឹងតវ៉ាផ្លូវការ។', color: 'text-emerald-500' },
      ]
    case 'zh':
      return [
        { title: '1. 参赛运动员', role: '青方 (Chung) vs 红方 (Hong)', description: '基层比赛按年龄与带位分组，国际顶级锦标赛严格按体重与身高量级划分。', color: 'text-brand-red' },
        { title: '2. 临场教练员', role: '战术角指导与IVR申诉', description: '在回合休息时进行战术布置，拥有1次录像审议卡申诉权，可掷毛巾弃权确保选手安全。', color: 'text-blue-500' },
        { title: '3. 场上主裁判', role: '场地最高执裁权威', description: '全权掌控比赛节奏，运用标准韩语口令指令行动，坚决维护选手安全并判定扣分判罚。', color: 'text-amber-500' },
        { title: '4. 边线副裁判', role: '3位边裁判员实时判分', description: '通过手持打分控制器对有效拳击命中及旋转加分进行即时判定（须至少2人同步按键）。', color: 'text-purple-500' },
        { title: '5. 记录台技术官员', role: '竞赛监督委员会 (CSB)', description: '高级技术官员监管电子打分系统，验证旋转加分合法性，并最终裁决官方申诉案件。', color: 'text-emerald-500' },
      ]
    case 'ko':
      return [
        { title: '1. 출전 선수', role: '청 (Chung) vs 홍 (Hong)', description: '도장 및 동호인 대회는 연령/급수별, 공식 엘리트 챔피언십은 엄격한 공인 체급별로 배정됩니다.', color: 'text-brand-red' },
        { title: '2. 지도자 (코치)', role: '세컨 코치석 전술 지시 & IVR', description: '경기 중 전술 코칭, 라운드당 1회의 비디오 판독(IVR) 요청, 선수 보호를 위한 기권 수건 투척 권한 보유.', color: 'text-blue-500' },
        { title: '3. 주심 (Center Referee)', role: '경기장 내 전권 지휘', description: '공식 한국어 구령(갈려/계속)으로 경기 진행을 총괄하며, 선수 안전 보호 및 감점 선고를 주관합니다.', color: 'text-amber-500' },
        { title: '4. 부심 (Corner Judges)', role: '3심제 실시간 채점', description: '무선 채점기를 통해 주먹 득점 및 회전 기술 보너스 포인트를 실시간으로 판정합니다 (2인 이상 동시 일치 시 인정).', color: 'text-purple-500' },
        { title: '5. 경기감독관 및 기술임원', role: '기록 판정석 & CSB 위원회', description: '전자호구 채점 시스템 정상 작동 감독, 기술 점수 유효성 검증 및 공식 소청 사건을 심의·의결합니다.', color: 'text-emerald-500' },
      ]
    default:
      return [
        { title: '1. Competitors', role: 'Chung (Blue) vs Hong (Red)', description: 'Divided by age/belt grade at club level, and strict weight categories at elite championships.', color: 'text-brand-red' },
        { title: '2. Coaches', role: 'Corner Strategy & IVR Appeals', description: 'Provide tactical corner advice, request IVR video appeals (1 quota), or stop the match by throwing in the towel for safety.', color: 'text-blue-500' },
        { title: '3. Center Referee', role: 'Full Ring Authority', description: 'Full ring authority. Starts/stops match with Korean commands (Kal-yeo / Kye-sok), enforces safety, and declares Gam-jeom penalties.', color: 'text-amber-500' },
        { title: '4. Corner Judges', role: '3 Ring Judges (Scoring)', description: 'Award punch scores and technical turning kick bonuses via handheld electronic controllers (2 of 3 judges must confirm synchronously).', color: 'text-purple-500' },
        { title: '5. Table Officials', role: 'Competition Supervisory Board', description: 'Supervise the electronic scoring system, validate technical bonus points, and resolve formal protests.', color: 'text-emerald-500' },
      ]
  }
}

// 2. RING DYNAMICS
export function getLocalizedRingDynamics(lang: string): LocalizedRingDynamics {
  switch (lang) {
    case 'km':
      return {
        octagonTitle: '១. រាងប្រាំបីជ្រុង (ស្តង់ដារអូឡាំពិក)',
        octagonSubtitle: '៨ ជ្រុង (អង្កត់ផ្ចិត ~៨ម, ជ្រុងមួយ ៣.៣ម)',
        octagonDescription: 'ជាជម្រើសផ្លូវការសម្រាប់កីឡាអូឡាំពិក និង World Grand Prix។ មាន ៨ ជ្រុងដែលមានមុំទូលាយ។',
        octagonPoints: [
          'ផលប្រយោជន៍យុទ្ធសាស្ត្រ: បំបាត់ជ្រុងស្លាប់ ៩០ ដឺក្រេ ផ្តល់ផ្លូវគេចច្រើនទិសដៅ។',
          'ទម្រង់ប្រយុទ្ធ: ជំរុញការបោះជំហានជារង្វង់ និងការទាត់បង្វិលវាយបកយ៉ាងរហ័ស។',
          'ហានិភ័យបន្ទាត់ព្រំដែន: ការជាន់ចេញក្រៅខ្សែត្រូវពិន័យ Gam-jeom ភ្លាមៗ។',
        ],
        squareTitle: '២. រាងការ៉េ (ស្តង់ដារក្លឹប & ថ្នាក់តំបន់)',
        squareSubtitle: '៤ ជ្រុង (៨ម x ៨ម)',
        squareDescription: 'ទម្រង់បែបប្រពៃណី ដែលពេញនិយមសម្រាប់ក្លឹប និងការប្រកួតបើកទូលាយដោយសារងាយស្រួលដំឡើងកម្រាល។',
        squarePoints: [
          'ផលប្រយោជន៍យុទ្ធសាស្ត្រ: ជ្រុងកែង ៩០ ដឺក្រេ អនុញ្ញាតឱ្យកីឡាករវាយសម្រុកអាចគាបគូប្រកួតឱ្យជាប់ជ្រុង។',
          'ទម្រង់ប្រយុទ្ធ: សម្រុកត្រង់ៗ ការចូលតោងគាប និងការកាត់ចម្ងាយយ៉ាងតឹងតែង។',
          'កម្រិតលំហ: ទំហំតូចជាងទាមទារការប្រុងប្រយ័ត្នខ្ពស់ចំពោះបន្ទាត់ព្រំដែន។',
        ],
      }
    case 'zh':
      return {
        octagonTitle: '1. 八角形场地 (奥运会与世锦赛标准)',
        octagonSubtitle: '8个边长 (~8米直径，单边3.3米)',
        octagonDescription: '奥运会及世界大奖赛唯一指定规格，由8条边构成长钝角结构。',
        octagonPoints: [
          '战术优势：彻底消除了传统90度死角，为选手的侧向横移提供了充足的战术撤退通道。',
          '格斗风格：鼓励连续的大幅度圆周步法移动与极具观赏性的旋转反击踢击。',
          '边界判罚风险：在受迫压力下一步踏出边界即被立即判决Gam-jeom。',
        ],
        squareTitle: '2. 正方形场地 (俱乐部与基层标准)',
        squareSubtitle: '4个直角 (8米 x 8米)',
        squareDescription: '传统经典的比赛垫布局，因拼接方便而在大众锦标赛与俱乐部赛中普遍使用。',
        squarePoints: [
          '战术优势：具备4个清晰的90度直角边，利于压迫型选手将对手逼入死角实施强攻。',
          '格斗风格：以直线突进、重击迎击和贴身近战压制为主。',
          '空间限制：有效可逃逸区域较小，对选手的边界防卫意识有极高要求。',
        ],
      }
    case 'ko':
      return {
        octagonTitle: '1. 팔각형 경기지역 (올림픽 공인 규격)',
        octagonSubtitle: '8개 변 (직경 약 8m, 각 변 3.3m)',
        octagonDescription: '올림픽 및 그랑프리 공식 채택 규격으로 넓은 둔각의 8각 구조로 설계되었습니다.',
        octagonPoints: [
          '전술적 이점: 90도 코너 사각지대를 제거하여 다양한 측면 탈출 루트를 제공합니다.',
          '경기 스타일: 끊임없는 원형 스텝과 기동성 높은 회전 반격 발차기를 유도합니다.',
          '한계선 위험: 압박을 피해 한 발이라도 매트 밖으로 나가면 즉시 감점이 부과됩니다.',
        ],
        squareTitle: '2. 사각형 경기지역 (도장 및 지역대회 규격)',
        squareSubtitle: '4개 모서리 (8m x 8m)',
        squareDescription: '전통적인 경기 매트 배치로 매트 설치의 용이성 덕분에 일반 도장 및 생활체육 대회에서 널리 활용됩니다.',
        squarePoints: [
          '전술적 이점: 4개의 날카로운 직각 모서리를 활용하여 상대를 구석에 몰아넣고 압박할 수 있습니다.',
          '경기 스타일: 직선적인 파워 돌파, 강력한 전진 클린치 및 컷트 발차기 싸움이 빈번합니다.',
          '공간 제약: 유효 면적이 좁게 느껴지므로 경기장 한계선 인지 능력이 결정적입니다.',
        ],
      }
    default:
      return {
        octagonTitle: '1. Octagonal Shape (Olympic Standard)',
        octagonSubtitle: '8 Sides (~8m Dia, 3.3m Each)',
        octagonDescription: 'Official choice for the Olympic Games and Grand Prix events. Features eight (8) sides with wide obtuse angles.',
        octagonPoints: [
          'Tactical Advantage: Eliminates trapped 90° dead corners; provides multiple lateral escape paths.',
          'Combat Style: Encourages continuous circular footwork and high-mobility spinning counters.',
          'Boundary Penalty Risk: Stepping out of bounds triggers immediate Gam-jeom.',
        ],
        squareTitle: '2. Square Shape (Club & Local Standard)',
        squareSubtitle: '4 Corners (8m x 8m)',
        squareDescription: 'Traditional layout, now the primary standard for club tournaments and open championships.',
        squarePoints: [
          'Tactical Advantage: 4 sharp 90° corners allow aggressive pressure fighters to corner opponents.',
          'Combat Style: Linear blitz attacks, heavy forward clinches, and cut-off pressure angles.',
          'Space Constraint: Smaller functional area requires razor-sharp ring boundary awareness.',
        ],
      }
  }
}

// 3. ELIGIBILITY & GEAR
export function getLocalizedEligibilityAndGear(lang: string): LocalizedEligibilityAndGear {
  switch (lang) {
    case 'km':
      return {
        eligibilityTitle: 'លក្ខខណ្ឌសិទ្ធិចូលរួម & ការផ្ទេរសញ្ជាតិ',
        eligibilityBadge: 'មាត្រា ៤',
        eligibilityItems: [
          'ត្រូវកាន់សញ្ជាតិនៃក្រុមដែលចូលរួម មានកម្រិតដាន់/ភូម Kukkiwon និងមានប័ណ្ណ WT GAL ដែលមានសុពលភាព។',
          'ការរឹតត្បិតផ្ទេរសញ្ជាតិ ៣៦ ខែ: កីឡាករដែលធ្លាប់តំណាងប្រទេសណាមួយក្នុងកីឡាអូឡាំពិក ជើងឯកទ្វីប ឬជើងឯកពិភពលោក ត្រូវរង់ចាំ ៣៦ ខែ មុនពេលអាចតំណាងឱ្យប្រទេសថ្មី។',
          'ការពិនិត្យសុខភាពជាកាតព្វកិច្ច: ត្រូវមានលិខិតបញ្ជាក់សុខភាពប្រចាំឆ្នាំ (PHE) និងធានារ៉ាប់រងសុខភាពចុះបញ្ជីក្នុងប្រព័ន្ធ WT GMS។',
        ],
        gearTitle: 'ឧបករណ៍ការពារ & ពិធីការកាងធ្មេញ',
        gearBadge: 'ពិធីការសុវត្ថិភាព',
        gearItems: [
          'ឧបករណ៍ការពារ: អាវក្រោះអេឡិចត្រូនិក PSS មួកការពារ (ខៀវ/ក្រហម) ឧបករណ៍ការពារប្រដាប់ភេទ ការពារកំភួនដៃ ការពារស្មងជើង ស្រោមដៃ ស្រោមជើងសេនស័រ និងកាងធ្មេញ។',
          'កាងធ្មេញ (Mouthguard): ពណ៌ស ឬថ្លា កម្រាស់យ៉ាងតិច ៣ម.ម។ កីឡាករពត់ធ្មេញត្រូវមានកាងធ្មេញពិសេសបញ្ជាក់ដោយទន្តពេទ្យ។',
          'ពិធីការមួក PSS: ត្រូវកាន់ក្រោមក្លៀកខាងឆ្វេងពេលចូលសង្វៀន ហើយពាក់នៅពេលអាជ្ញាកណ្តាលបញ្ជាប៉ុណ្ណោះ។',
          'គ្រឿងអលង្ការ: ហាមដាច់ខាតនូវក្រវិល កង ឬវត្ថុរឹងគ្រប់ប្រភេទលើរាងកាយ។',
        ],
      }
    case 'zh':
      return {
        eligibilityTitle: '参赛资格与国籍变更限制',
        eligibilityBadge: '第4条规定',
        eligibilityItems: [
          '必须具备代表队国籍，持有国技院公认段/品位证书，以及有效的世界跆拳道全球运动员许可证 (WT GAL)。',
          '36个月国籍变更期限制：凡代表原国家参加过奥运会、洲际锦标赛或世锦赛的选手，必须等待满36个月方可代表新国家出战。',
          '强制性体检合格证明：每年必须在WT GMS系统上传年度运动员体格检查证书(PHE)及有效国际运动伤害医疗保险。',
        ],
        gearTitle: '安全护具配备与护齿管理协议',
        gearBadge: '安全防护标准',
        gearItems: [
          '必备护具：电子躯干护具(PSS)、电子头盔(蓝/红)、护裆、护臂、护胫、手套、感应脚套和护齿。',
          '护齿规格：仅限纯白色或全透明，厚度至少3mm。矫正牙齿选手必须佩戴牙医特制双面护齿及医师证明函。',
          '电子头盔进场规范：进入比赛区时必须夹在左腋下，仅在主裁判发出指令后方可戴上。',
          '严禁饰物：严禁佩戴耳环、鼻钉、戒指、金属发夹或任何坚硬首饰进入比赛区域。',
        ],
      }
    case 'ko':
      return {
        eligibilityTitle: '출전 선수 자격 및 국적 이적 제한 규정',
        eligibilityBadge: '제4조 규정',
        eligibilityItems: [
          '출전국 국적 소지자, 국기원 품/단증 소지자, 당해 연도 유효한 WT GAL 라이선스 등록 필수.',
          '36개월 국적 이적 대기 기간: 올림픽, 대륙선수권, 세계선수권 출전 이력이 있는 선수는 다른 국적으로 출전하기 위해 만 36개월이 경과해야 함.',
          '정기 의무 검진 증명서 제출: WT GMS에 등록된 연례 종합 건강 검진서(PHE) 및 국제 상해보험 가입 증빙 필수.',
        ],
        gearTitle: '공인 보호장구 및 마우스피스 규정',
        gearBadge: '안전 수칙',
        gearItems: [
          '필수 보호대: 전자호구(PSS), 전자 헤드기어(청/홍), 낭심보호대, 팔보호대, 정강이보호대, 장갑, 감응양말 및 마우스피스.',
          '마우스피스 기준: 흰색 또는 완전 투명색(두께 최소 3mm 이상). 치아 교정 환자는 치과의사 승인 양면 마우스피스 및 소견서 지참 필수.',
          '헤드기어 지참 수칙: 경기장 입장 시 반드시 왼쪽 겨드랑이에 끼고 입장하며, 주심의 착용 명령 시에만 착용합니다.',
          '장신구 전면 금지: 피어싱, 귀걸이, 반지, 목걸이 등 모든 금속성·단단한 장신구 착용 일체 불허.',
        ],
      }
    default:
      return {
        eligibilityTitle: 'Contestant Eligibility & Transfer Rules',
        eligibilityBadge: 'Article 4',
        eligibilityItems: [
          'Must hold nationality of participating team, Kukkiwon Dan/Poom, and valid WT GAL.',
          '36-Month Nationality Transfer Restriction: Athletes who represented a country in Olympic Games, Continental Championships, or WT World Championships must wait 36 months before representing another nation.',
          'Mandatory Medical Clearance: Annual Periodic Health Evaluation (Medical Certificate) and travel health insurance registered in WT GMS.',
        ],
        gearTitle: 'Protective Equipment & Mouthguard Protocols',
        gearBadge: 'Safety Protocols',
        gearItems: [
          'Protective Gear: Trunk PSS, Head PSS (Blue/Red; Cadet may use face shield), groin guard, forearm guards, shin guards, gloves, sensing socks, and mouthguard.',
          'Mouthguard: White/transparent, min 3mm thickness, upper teeth. Athletes with dental braces must wear dentist-approved dual mouthguard + clearance letter.',
          'Head PSS Protocol: Must be tucked under left arm upon FOP entry and put on only when instructed by the referee.',
          'Jewelry: Strictly zero piercings, earrings, or hard items permitted.',
        ],
      }
  }
}

// 4. TOP 7 BEGINNER MISTAKES
export function getLocalizedBeginnerMistakes(lang: string): LocalizedBeginnerMistake[] {
  switch (lang) {
    case 'km':
      return [
        { title: 'ការងាកខ្នងដាក់គូប្រកួត', mistake: 'ការងាកខ្នងគេចពីការវាយបង្កើតចំណុចខ្វាក់ និងប្រឈមនឹងការពិន័យ Gam-jeom។', correction: 'រក្សាការសម្លឹងមើលគូប្រកួត ប្រើជំហរបត់ជើងតាមរង្វង់ ឬចូលតោងគាបដោយសុវត្ថិភាព។' },
        { title: 'ការទាត់ដោយគ្មានផែនការច្បាស់លាស់', mistake: 'ការទាត់ផ្តេសផ្តាសដោយគ្មានការរៀបចំ បណ្តាលឱ្យអស់កម្លាំង និងបាត់បង់លំនឹង។', correction: 'បញ្ឆោតដើម្បីស្ទង់ប្រតិកម្ម វាយប្រហារចំចម្ងាយត្រឹមត្រូវ និងទាញជើងត្រឡប់មកវិញភ្លាម។' },
        { title: 'ភាពមិនប្រុងប្រយ័ត្នចំពោះបន្ទាត់ព្រំដែន', mistake: 'ការថយក្រោយត្រង់ៗរហូតធ្លាក់ចេញក្រៅខ្សែ បង្កឱ្យខាតបង់ពិន្ទុ Gam-jeom ដោយងាយ។', correction: 'ដឹងពីបន្ទះកម្រាលប្រុងប្រយ័ត្ន ៦០ស.ម ក្រោមបាតជើង ហើយបត់ខ្លួនរំកិលចូលកណ្តាលសង្វៀន។' },
        { title: 'ការឈរធ្មឹងក្រោយការវាយប្រហារ', mistake: 'ការឈរសម្លឹងមើលស្នាដៃទាត់របស់ខ្លួន បង្កើតឱកាសឱ្យគូប្រកួតវាយបកភ្លាមៗ។', correction: 'លោតថយក្រោយភ្លាមៗទៅចម្ងាយសុវត្ថិភាព ឬឈានជើងចូលក្បែរដើម្បីទប់ជើងគូប្រកួត។' },
        { title: 'ការភ្លេចខ្លួនសម្លឹងមើលតារាងពិន្ទុ', mistake: 'ការងើយមើលអេក្រង់ទូរទស្សន៍ក្នុងពេលកំពុងប្រកួត ធ្វើឱ្យបាត់បង់ការផ្តោតអារម្មណ៍។', correction: 'សម្លឹងមើលតែគូប្រកួត រង់ចាំពេលសម្រាកទឹក និងស្តាប់ការណែនាំរបស់គ្រូបង្វឹក។' },
        { title: 'ការទម្លាក់ដៃការពារពេលអស់កម្លាំង', mistake: 'ការទម្លាក់ដៃចុះក្រោមពេលហត់នឿយ ធ្វើឱ្យក្បាលគ្មានការការពារទាំងស្រុង។', correction: 'កៀបកែងដៃការពារឆ្អឹងជំនីរ និងលើកដៃការពារនៅកម្ពស់ចង្កា/ដើមទ្រូងជានិច្ច។' },
      ]
    case 'zh':
      return [
        { title: '背对对手脱离交锋', mistake: '在受迫时转身背对对手不仅产生致命视野盲区，更会被直接判处Gam-jeom消极扣分。', correction: '始终与对手保持视觉接触，利用侧向环形步法平移化解，或果断主动安全贴身。' },
        { title: '无预备盲目狂乱出腿', mistake: '在未试探测距的情况下盲目起腿，极度消耗体能并极易因失去重心被对手迎击。', correction: '通过虚晃假动作阅读对手防守反应，精准控制打击间距，出腿后务必迅速折叠收腿。' },
        { title: '边界警示感丧失 (出界)', mistake: '在防守中盲目直线后退，一脚跨出8x8米界线白白送给对手宝贵的1分。', correction: '脚底感知60厘米对比色警示缓冲垫质感，一旦触及立即向左右两侧切角环绕。' },
        { title: '进攻得手后原地发呆欣赏', mistake: '在击中对手后原地停滞看分，身体处于完全无防备状态，瞬间遭受对手重击反击。', correction: '出腿命中瞬间立即弹性回撤至安全防守范围，或迅速垫步向前压缩对手起腿空间。' },
        { title: '交战中频繁抬头看计分牌', mistake: '在裁判未叫停时转头看显示屏，注意力分散导致遭受致命迎头痛击。', correction: '目光时刻锁定对手胸口或双肩；仅在回合休息时听从教练提示并查看比分。' },
        { title: '体能下降时无意识垂下双臂', mistake: '感到疲惫时将护手垂至腰间，头部完全暴露在对手的高位爆头射程内。', correction: '双肘时刻内夹保护肋部软肋，双手紧护锁骨与下颌中线，形成坚不可摧的立体防护。' },
      ]
    case 'ko':
      return [
        { title: '상대에게 등을 돌리는 행위', mistake: '공격을 피하려 등을 돌리면 치명적인 시야 사각지대가 발생하며 즉시 감점이 부과됩니다.', correction: '시선을 항상 상대에게 고정하고, 원형 사이드 스텝으로 탈출하거나 안전하게 클린치해야 합니다.' },
        { title: '거리 조절 없는 무계획 발차기', mistake: '셋업 없이 마구잡이로 발을 차면 체력이 급격히 소진되고 역습의 표적이 됩니다.', correction: '페인팅으로 상대 반응을 확인하고, 유효 타격 거리에서 정확히 찌른 후 신속히 무릎을 접어 회수합니다.' },
        { title: '한계선 인지 부족 (장외 감점)', mistake: '직선으로만 뒷걸음치다 한계선 밖으로 나가 상대에게 허무하게 1점을 헌납합니다.', correction: '발바닥으로 60cm 배색 경고대를 감지하고, 한계선에 닿기 전 좌우 측면으로 돌아 나와야 합니다.' },
        { title: '공격 성공 후 멈칫거리는 습관', mistake: '타격 성공 후 자신의 공격에 심취해 서 있다가 상대의 즉각적인 맞받아치기에 당합니다.', correction: '공격 직후 즉시 바운스를 타며 안전거리로 빠지거나, 파고들어 상대의 반격을 무력화해야 합니다.' },
        { title: '경기 도중 전광판을 쳐다보는 행동', mistake: '경기 진행 중 점수판을 보려고 고개를 돌리는 순간 결정적인 공격을 허용합니다.', correction: '시선은 무조건 상대에게 고정하고, 점수와 시간 관리는 코치의 음성 지시에 전적으로 의존합니다.' },
        { title: '체력 저하 시 가드를 내리는 버릇', mistake: '지쳤을 때 손을 내리면 얼굴 부위가 무방비로 노출되어 치명적인 머리 득점을 내줍니다.', correction: '팔꿈치는 갈비뼈에 붙이고 양손은 턱과 쇄골 높이를 유지하여 철벽 방어를 유지합니다.' },
      ]
    default:
      return [
        { title: 'Turning Back on Opponent', mistake: 'Disengaging by turning your back creates severe blind spots and risks penalty.', correction: 'Maintain visual contact, pivot laterally using circular footwork, or clinch safely.' },
        { title: 'Random Uncontrolled Kicking', mistake: 'Throwing kicks without set-up burns stamina and leaves you off-balance.', correction: 'Feint to read reactions, strike with precise distance, and always re-chamber.' },
        { title: 'Boundary Blindness', mistake: 'Backing straight out of the ring conceding an easy Gam-jeom penalty.', correction: 'Feel the 60cm contrasting Alert Band underfoot and circle out toward the center.' },
        { title: 'Standing Still Post-Attack', mistake: 'Admiring your kick after executing, leaving you open to immediate counter-attacks.', correction: 'Immediately bounce back to safe combat range or step in to stifle their kick.' },
        { title: 'Scoreboard & Timer Fixation', mistake: 'Looking up at the TV monitor during combat breaks focus.', correction: 'Keep eyes locked on the opponent; wait for round breaks and listen to your coach.' },
        { title: 'Dropping Guarding Hands', mistake: 'Lowering hands when tired leaves the head completely unprotected.', correction: 'Keep elbows tight to protect floating ribs and hands at collarbone/chin level.' },
      ]
  }
}

// 5. CHAMPION MINDSET
export function getLocalizedMindset(lang: string): LocalizedMindsetRule[] {
  switch (lang) {
    case 'km':
      return [
        { title: '១. ការរៀនសូត្រសំខាន់ជាងមេដាយ', description: 'ផ្តោតលើការបញ្ចេញបច្ចេកទេសឱ្យបានស្អាត និងការរីកចម្រើនយុទ្ធសាស្ត្រ។ មេដាយគឺជាលទ្ធផលនៃការអភិវឌ្ឍជាប្រចាំ។' },
        { title: '២. ការគ្រប់គ្រងអារម្មណ៍', description: 'រក្សាភាពស្ងប់ស្ងាត់ទោះបីជាត្រូវទទួល Gam-jeom ឬបាត់បង់ពិន្ទុក៏ដោយ។ បំប្លែងសម្ពាធទៅជាការសម្រេចចិត្តដ៏មុតស្រួច។' },
        { title: '៣. ការគោរពវិន័យក្បាច់គុន', description: 'គោរពអាជ្ញាកណ្តាល មន្ត្រី និងគូប្រកួតដោយគ្មានលក្ខខណ្ឌ។ ឈ្នះដោយសមត្ថភាពពិត មិនមែនដោយចេតនាបង្ករបួសឡើយ។' },
      ]
    case 'zh':
      return [
        { title: '1. 技术成长重于奖牌名次', description: '将核心注意力放在打出干净利落的技术与战术执行上。奖牌只是日复一日高质量刻苦训练的必然副产品。' },
        { title: '2. 逆境中磐石般的情绪管理', description: '遭遇判罚扣分或比分落后时，保持绝对的冷静与沉着。将肾上腺素转化为瞬间敏锐的战术决断力。' },
        { title: '3. 崇高的武道尊严与互敬', description: '无条件尊重裁判员、赛会技术官员及对手。以精湛过人的技术赢得胜利，决无任何恶意伤害对手之动机。' },
      ]
    case 'ko':
      return [
        { title: '1. 메달보다 중요한 기술적 성장', description: '깨끗하고 정확한 기술의 완성과 전술적 성장에 집중하십시오. 메달은 성실한 수련 과정의 자연스러운 결과물입니다.' },
        { title: '2. 흔들리지 않는 냉철한 평정심', description: '감점을 받거나 실점하더라도 결코 흥분하지 마십시오. 솟구치는 아드레날린을 날카로운 경기 판단력으로 승화시키십시오.' },
        { title: '3. 무도인의 품격과 상호 존중', description: '심판, 대회 임원, 그리고 상대를 진심으로 존중하십시오. 상대를 다치게 함이 아닌, 뛰어난 기술과 기량으로 승리하십시오.' },
      ]
    default:
      return [
        { title: '1. Learning Over Medals', description: 'Focus on executing clean technique and tactical growth. Medals are a byproduct of consistent development.' },
        { title: '2. Emotional Composure', description: 'Stay completely calm if you receive a Gam-jeom or concede points. Channel adrenaline into sharp decision-making.' },
        { title: '3. Martial Respect', description: 'Respect referees, table officials, and opponents unconditionally. Win through superior skill, never with intent to injure.' },
      ]
  }
}

// 6. KYORUGI MATCH SCENARIOS
export function getLocalizedKyorugiScenarios(lang: string): LocalizedMatchScenario[] {
  switch (lang) {
    case 'km':
      return [
        { caseNum: 1, title: 'ករណីទី ១: ការទាត់ត្រូវស្របពេលដួល', scenario: 'កីឡាករទាត់ត្រូវក្បាល (៣ ពិន្ទុ) ប៉ុន្តែបាត់បង់លំនឹងដួលទៅលើកម្រាលភ្លាមៗក្រោយទាត់។', decision: 'ពិន្ទុទាត់ក្បាល ៣ ពិន្ទុត្រូវបានទទួលស្គាល់ + អាជ្ញាកណ្តាលពិន័យ Gam-jeom ដោយសារការដួល (+១ ពិន្ទុដល់គូប្រកួត)។ លទ្ធផលសុទ្ធ: +២ ពិន្ទុ។', points: '+3 Pts & Gam-jeom', color: 'text-brand-red' },
        { caseNum: 2, title: 'ករណីទី ២: ការទាត់ក្បាលបណ្តាលឱ្យគូប្រកួតដួល', scenario: 'កីឡាករទាត់ក្បាលយ៉ាងធ្ងន់ធ្ងរ ធ្វើឱ្យគូប្រកួតដួលរលំទៅលើកម្រាលព្រោះតែទម្ងន់ជើង។', decision: 'ពិន្ទុ ៣ ពិន្ទុត្រូវបានផ្តល់ជូន + អាជ្ញាកណ្តាលមិនពិន័យ Gam-jeom លើអ្នកដួលឡើយ ព្រោះការដួលបណ្តាលមកពីការរងការវាយប្រហារស្របច្បាប់។', points: '+3 Pts (No Gam-jeom)', color: 'text-blue-500' },
        { caseNum: 3, title: 'ករណីទី ៣: ការវាយប្រហារបាតជើងពេលតោងគាប', scenario: 'ក្នុងពេលតោងគាប កីឡាករលើកជើងកៀរយកបាតជើងទាត់អាវក្រោះ PSS របស់គូប្រកួត។', decision: 'ប្រសិនបើសេនស័រចាប់ពិន្ទុ ពិន្ទុត្រូវតែលុបចោល + អាជ្ញាកណ្តាលពិន័យ Gam-jeom ភ្លាមៗ (GAM-11: ការវាយបាតជើងពេលគាប)។', points: 'Point Annulled + Gam-jeom', color: 'text-amber-500' },
        { caseNum: 4, title: 'ករណីទី ៤: ការតវ៉ា IVR លើការរាប់ពិន្ទុ Knockdown', scenario: 'អាជ្ញាកណ្តាលរាប់ ៨ លើកីឡាករដែលដួល តែគ្រូបង្វឹកលើកកាត IVR បញ្ជាក់ថាមិនមានការទាត់ត្រូវក្បាលឡើយ។', decision: 'គណៈវិនិច្ឆ័យ IVR ពិនិត្យឃើញថាមិនមានការប៉ះពាល់ក្បាលឡើយ: ការរាប់ត្រូវបានលុបចោល កាត IVR ត្រូវបានប្រគល់ជូនវិញ ហើយកីឡាករដែលដួលត្រូវបានពិន័យ Gam-jeom ដោយសារការដួល។', points: 'Count Revoked', color: 'text-purple-500' },
        { caseNum: 5, title: 'ករណីទី ៥: ការចេញក្រៅខ្សែក្នុង ១០ វិនាទីចុងក្រោយ', scenario: 'ក្នុងរយៈពេល ១០ វិនាទីចុងក្រោយ កីឡាករដែលកំពុងនាំមុខ ១ ពិន្ទុ បានថយចេញក្រៅខ្សែព្រំដែនដើម្បីគេចពីការវាយ។', decision: 'អាជ្ញាកណ្តាលពិន័យ Gam-jeom ដោយសារចេញក្រៅខ្សែ + តាមច្បាប់ពិសេស ១០ វិនាទីចុងក្រោយ គូប្រកួតទទួលបាន ២ ពិន្ទុភ្លាមៗ ធ្វើឱ្យលទ្ធផលត្រឡប់មកឈ្នះវិញ។', points: '+2 Pts (Final 10s)', color: 'text-emerald-500' },
      ]
    case 'zh':
      return [
        { caseNum: 1, title: '案例 1: 得分与倒地同时发生', scenario: '选手踢中对手头部头盔触发3分，但在动作收尾惯性下失衡倒在比赛垫上。', decision: '头部有效击打3分确认有效 + 主裁判因其倒地判罚Gam-jeom（对手得1分）。净胜得分为 +2分。', points: '+3分 与 倒地Gam-jeom', color: 'text-brand-red' },
        { caseNum: 2, title: '案例 2: 因遭受合法重击而倒地', scenario: '防守选手头部遭受对手势大力沉的合法下劈击中，因巨大冲击力倒地。', decision: '进攻方合法获得3分。防守方因遭受合法有效击打倒地，不予判罚倒地Gam-jeom，主裁判立即执行读秒程序。', points: '+3分 (防守方不判罚)', color: 'text-blue-500' },
        { caseNum: 3, title: '案例 3: 缠抱中脚底违规踩蹭护具', scenario: '双方进入近身缠抱后，一名选手抬腿用脚底板连续摩擦蹭击对手电子躯干护具。', decision: '电子护具所记录的该次得分予以强制取消 + 主裁判判罚Gam-jeom（GAM-11违规条款）。', points: '得分取消 + Gam-jeom', color: 'text-amber-500' },
        { caseNum: 4, title: '案例 4: IVR成功推翻读秒判罚', scenario: '主裁判对倒地选手执行读秒，防守方教练出示IVR卡申诉并未受到任何头部攻击。', decision: '录像审议证实无接触：撤销读秒程序，退还教练IVR卡，倒地选手因自身失衡假摔被判处Gam-jeom。', points: '读秒撤销 & 返还申诉卡', color: 'text-purple-500' },
        { caseNum: 5, title: '案例 5: 最后10秒出界消极处罚', scenario: '在第三局最后10秒内，领先1分的选手为拖延战术直接倒退跨出比赛区域界线。', decision: '依据最后10秒消极犯规特别规则，判处该选手Gam-jeom，且直接判给对手2分，比分瞬间反超。', points: '对手获判+2分', color: 'text-emerald-500' },
      ]
    case 'ko':
      return [
        { caseNum: 1, title: '사례 1: 득점과 넘어짐이 동시 발생한 경우', scenario: '선수가 머리 공격에 성공하여 3점을 획득했으나, 타격 직후 중심을 잃고 매트에 넘어졌습니다.', decision: '유효 머리 득점 3점 인정 + 넘어지는 행위에 대해 주심이 감점 선고(상대에게 1점 부여). 최종 순득점 +2점.', points: '+3점 인정 및 감점 부과', color: 'text-brand-red' },
        { caseNum: 2, title: '사례 2: 상대의 적법한 충격으로 넘어진 경우', scenario: '선수가 상대의 강력한 유효 얼굴 공격을 받고 충격으로 인해 매트에 쓰러졌습니다.', decision: '공격자에게 3점 부여 + 피격 선수는 적법한 공격의 충격으로 넘어진 것이므로 감점이 부과되지 않으며 주심이 계적을 실시합니다.', points: '+3점 (피격자 감점 없음)', color: 'text-blue-500' },
        { caseNum: 3, title: '사례 3: 클린치 상태에서 발바닥 비정상 공격', scenario: '클린치 접전 중 선수가 발바닥으로 상대의 몸통 PSS를 비정상적으로 긁어 득점을 발생시켰습니다.', decision: '전광판 득점 즉시 무효 취소 + 클린치 발바닥 공격 반칙으로 감점(GAM-11) 선고.', points: '득점 무효 및 감점', color: 'text-amber-500' },
        { caseNum: 4, title: '사례 4: IVR 판독으로 계적(카운트) 취소', scenario: '주심이 선수의 다운에 대해 카운트를 시작했으나, 코치가 비디오 판독을 신청하여 얼굴 타격이 없었음을 주장.', decision: '비디오 판독 결과 무접촉 확인: 카운트 판정 취소, 코치 소청 카드 반환, 선수는 단순 슬립 다운으로 감점 처리.', points: '카운트 판정 번복', color: 'text-purple-500' },
        { caseNum: 5, title: '사례 5: 마지막 10초 장외 도피 행위', scenario: '마지막 10초 이내에 1점 차로 앞서던 선수가 시간 지연을 위해 뒤로 물러서며 한계선 밖으로 나갔습니다.', decision: '장외 감점 선고 + 10초 특별 규칙에 따라 상대방에게 즉시 2점이 부여되어 역전패가 성립됩니다.', points: '상대에게 +2점 부여', color: 'text-emerald-500' },
      ]
    default:
      return [
        { caseNum: 1, title: 'Case 1: Point Scored Simultaneously with Falling', scenario: 'Athlete lands a 3-point head kick, but momentum causes them to fall to the mat immediately after.', decision: 'Head kick 3 points awarded + Gam-jeom assessed for falling (+1 pt to opponent). Net score: +2 pts.', points: '+3 Pts & Gam-jeom', color: 'text-brand-red' },
        { caseNum: 2, title: 'Case 2: Head Kick Causes Opponent to Fall', scenario: 'Athlete delivers a clean head kick; the impact causes the opponent to collapse to the mat.', decision: '3 points awarded to attacker + NO Gam-jeom for falling athlete (fall caused by legitimate strike).', points: '+3 Pts (No Gam-jeom)', color: 'text-blue-500' },
        { caseNum: 3, title: 'Case 3: Clinch Attack with Sole of Foot', scenario: 'During a tight clinch, an athlete lifts foot and scores on trunk PSS using the bottom/sole.', decision: 'Point cancelled immediately + Gam-jeom assessed (GAM-11 prohibited clinch act).', points: 'Point Annulled + Gam-jeom', color: 'text-amber-500' },
        { caseNum: 4, title: 'Case 4: IVR Overturns Knockdown Count', scenario: 'Referee counts 8 on falling athlete; coach challenges head contact with IVR card.', decision: 'Review reveals no contact: Count cancelled, IVR card retained, falling athlete assessed Gam-jeom.', points: 'Count Revoked', color: 'text-purple-500' },
        { caseNum: 5, title: 'Case 5: Final 10 Seconds Boundary Crossing', scenario: 'With 6 seconds left, leading fighter backs out of the ring to stall out the clock.', decision: 'Gam-jeom assessed + opponent awarded 2 points under Final 10s Rule, flipping match outcome.', points: '+2 Pts (Final 10s)', color: 'text-emerald-500' },
      ]
  }
}

// 7. POOMSAE SCORING CASES
export function getLocalizedPoomsaeCases(lang: string): LocalizedPoomsaeCase[] {
  switch (lang) {
    case 'km':
      return [
        {
          caseNum: 1,
          title: 'ករណីទី ១: Taegeuk 4-Jang — ការរាំងបាតដៃកាំបិត (Sonnal Makki)',
          penalty: '-០.៤ ពិន្ទុសរុប',
          scenario: 'ក្នុងក្បាច់ Sonnal Makki ជើងក្រោយបើកលើសពី ៣០ ដឺក្រេ ហើយដៃក្រោយមិនបានបើកបាតដៃឡើយ។',
          deductions: [
            'ជើងក្រោយបើកលើសពី ៣០ ដឺក្រេ ក្នុងជំហរ Dwitkubi = -០.១ (ភាពត្រឹមត្រូវ: ជំហរ)',
            'ដៃក្រោយក្តាប់ជំនួសឱ្យការបើកបាតដៃកាំបិត = -០.៣ (ភាពត្រឹមត្រូវ: កំហុសក្បាច់ធំ)',
          ],
          total: 'កាត់ពិន្ទុភាពត្រឹមត្រូវសរុប: -០.៤',
          color: 'text-brand-red',
        },
        {
          caseNum: 2,
          title: 'ករណីទី ២: Koryo — ការទប់ត្រគាកពេលទាត់ចំហៀង & ខ្សែភ្នែក',
          penalty: '-០.៦ ពិន្ទុសរុប',
          scenario: 'ក្នុងពេលទាត់ Yop-chagi កីឡាករយកដៃឆ្វេងទប់ត្រគាកដើម្បីទាត់ឱ្យបានខ្ពស់ ហើយភ្នែកបែរមើលអាជ្ញាកណ្តាល។',
          deductions: [
            'យកបាតដៃទប់ត្រគាកដើម្បីទាត់ = -០.៣ (ភាពត្រឹមត្រូវ: កំហុសមេកានិចធ្ងន់ធ្ងរ)',
            'ភ្នែកមិនសម្លឹងមើលគោលដៅទាត់ = -០.៣ (ភាពត្រឹមត្រូវ: ទិសដៅខ្សែភ្នែកខុស)',
          ],
          total: 'កាត់ពិន្ទុភាពត្រឹមត្រូវសរុប: -០.៦',
          color: 'text-blue-500',
        },
        {
          caseNum: 3,
          title: 'ករណីទី ៣: Taegeuk 7-Jang — ជំហរជើងសត្វក្រៀល & កម្ពស់គោលដៅ',
          penalty: '-០.៤ + ការសម្តែង',
          scenario: 'ក្នុងជំហរ Hakdari-seogi ជើងដែលលើកបានប៉ះដីដើម្បីទប់លំនឹង ហើយការវាយខ្នងកណ្តាប់ដៃចំដើមទ្រូងជំនួសឱ្យចន្លោះច្រមុះនិងបបូរមាត់។',
          deductions: [
            'ជើងដែលលើកប៉ះដីក្នុងជំហរក្រៀល = -០.៣ (ភាពត្រឹមត្រូវ: បាត់បង់ជំហរធ្ងន់ធ្ងរ)',
            'កម្ពស់វាយខុសគោលដៅ (ទ្រូង ជំនួសឱ្យច្រមុះ) = -០.១ (ភាពត្រឹមត្រូវ: កម្ពស់គោលដៅ)',
            'ការទាក់ជើង/ស្ទាក់ស្ទើរ = -០.១ ដល់ -០.៣ (ការសម្តែង: ចង្វាក់ និងលំនឹង)',
          ],
          total: 'កាត់ពិន្ទុភាពត្រឹមត្រូវ: -០.៤ + កាត់ពិន្ទុការសម្តែង',
          color: 'text-amber-500',
        },
        {
          caseNum: 4,
          title: 'ករណីទី ៤: Keumgang — ការជាន់ជើងស្រាល & មុំរាំងភ្នំ',
          penalty: '-០.៤ ពិន្ទុសរុប',
          scenario: 'ពេលចូលជំហរ Juchum-seogi កីឡាករជាន់ជើងស្រាលគ្មានសំឡេង ហើយដៃក្នុងក្បាច់ Santeul Makki បត់ទៅមុខ ៦០ ដឺក្រេ ហួសត្រចៀក។',
          deductions: [
            'ការជាន់ជើងគ្មានសំឡេងបន្ទរច្បាស់ = -០.៣ (ភាពត្រឹមត្រូវ: កំហុសជាន់ជើងធ្ងន់ធ្ងរ)',
            'ដៃរាំងភ្នំរុញទៅមុខខុសមុំស្តង់ដារ = -០.១ (ភាពត្រឹមត្រូវ: គន្លងដៃខុសស្តង់ដារ)',
          ],
          total: 'កាត់ពិន្ទុភាពត្រឹមត្រូវសរុប: -០.៤',
          color: 'text-purple-500',
        },
        {
          caseNum: 5,
          title: 'ករណីទី ៥: ការភ្លេចចលនា និងការចាប់ផ្តើមឡើងវិញពេញលេញ',
          penalty: 'ពិន័យចាប់ផ្តើមឡើងវិញ',
          scenario: 'ក្នុងមេគុន Taegeuk 8-Jang កីឡាករភ្លេចចលនាទី ១២ អស់ ៤ វិនាទី ឱនគោរពអាជ្ញាកណ្តាល ហើយស្នើសុំចាប់ផ្តើមឡើងវិញ។',
          deductions: [
            'ការពិន័យចាប់ផ្តើមឡើងវិញដោយស្វ័យប្រវត្តិ = -០.៦ លើពិន្ទុភាពត្រឹមត្រូវ (ពិន្ទុភាពត្រឹមត្រូវចាប់ផ្តើមអតិបរមា ៣.៤)',
            'នាឡិកាផ្លូវការនៅតែបន្តដើរដោយមិនកំណត់ឡើងវិញ ប្រសិនបើលើស ៩០ វិនាទី ត្រូវកាត់ -០.៣ បន្ថែមទៀត។',
          ],
          total: 'កាត់ពិន្ទុស្វ័យប្រវត្តិ: -០.៦ (ភាពត្រឹមត្រូវ)',
          color: 'text-emerald-500',
        },
      ]
    case 'zh':
      return [
        {
          caseNum: 1,
          title: '案例 1: 太极四章 — 双刀手防御 (Sonnal Makki) 步法与手型失误',
          penalty: '扣除 0.4分 (准确度)',
          scenario: '在后屈步双刀手防御中，后脚外展角度达到60度，且后护手拳头未张开呈刀手。',
          deductions: [
            '后屈步后脚角度 > 30度 = -0.1 (准确度：步法角度偏差)',
            '后护手握拳未成标准刀手手型 = -0.3 (准确度：主要动作结构错误)',
          ],
          total: '准确度扣分合计：-0.4分',
          color: 'text-brand-red',
        },
        {
          caseNum: 2,
          title: '案例 2: 高丽品势 — 侧踢手扶髋骨与视线脱离',
          penalty: '扣除 0.6分 (准确度)',
          scenario: '在执行侧踢(Yop-chagi)时，运动员将左手掌平贴于髋骨支撑借力，且头部转向直视裁判。',
          deductions: [
            '手掌支撑骨盆借力维持高度 = -0.3 (准确度：严重机械违规)',
            '眼神未注视踢击脚部目标点 = -0.3 (准确度：视线焦点方向严重错误)',
          ],
          total: '准确度扣分合计：-0.6分',
          color: 'text-blue-500',
        },
        {
          caseNum: 3,
          title: '案例 3: 太极七章 — 鹤腿立点地与背拳击打高度偏差',
          penalty: '扣除 0.4分 + 熟练度',
          scenario: '在鹤腿立(Hakdari-seogi)时抬起之脚短暂点地找寻平衡，随后背拳击打高度位于胸口而非人中。',
          deductions: [
            '鹤腿立抬起腿脚尖触碰地面 = -0.3 (准确度：主要步法破坏)',
            '背拳攻击高度偏差（胸部而非人中） = -0.1 (准确度：微小目标偏差)',
            '身体摇晃停顿 = -0.1 至 -0.3 (熟练度：节奏与平衡维度扣分)',
          ],
          total: '准确度扣分：-0.4分 + 熟练度相应扣分',
          color: 'text-amber-500',
        },
        {
          caseNum: 4,
          title: '案例 4: 金刚品势 — 震脚无声与山形防御角度偏离',
          penalty: '扣除 0.4分 (准确度)',
          scenario: '进入骑马步时震脚软绵无清脆声响，且山形防御双臂向前偏离耳部垂直线达60度。',
          deductions: [
            '震脚动作缺乏清脆共振爆破声 = -0.3 (准确度：震脚结构失效)',
            '山形防御双臂向前过度偏离 = -0.1 (准确度：轨迹微小偏差)',
          ],
          total: '准确度扣分合计：-0.4分',
          color: 'text-purple-500',
        },
        {
          caseNum: 5,
          title: '案例 5: 遗忘动作请求重新开始',
          penalty: '全场重启重罚',
          scenario: '在太极八章第12动动作停滞长达4秒，向主裁判鞠躬请求全套品势重新演练。',
          deductions: [
            '自动扣除全套重启重罚分 = -0.6 (准确度起评基准降至最高3.4分)',
            '官方比赛计时钟不复位继续走动，若总时间超过90秒，加扣-0.3分超时罚分。',
          ],
          total: '准确度基准重罚：-0.6分',
          color: 'text-emerald-500',
        },
      ]
    case 'ko':
      return [
        {
          caseNum: 1,
          title: '사례 1: 태극 4장 — 손날막기 뒷발 각도 및 손형 결함',
          penalty: '총 -0.4점 감점',
          scenario: '뒷굽이 손날막기 동작 중 뒷발 각도가 60도로 과도하게 열렸고, 뒤 손이 수도를 펴지 않고 주먹을 쥐고 있음.',
          deductions: [
            '뒷굽이 뒷발 각도 30도 초과 = -0.1 (정확성: 서기 각도 오류)',
            '뒤 손 수도 미형성 및 주먹 형태 = -0.3 (정확성: 주요 동작 기술 결함)',
          ],
          total: '정확성 총 감점: -0.4점',
          color: 'text-brand-red',
        },
        {
          caseNum: 2,
          title: '사례 2: 고려 — 옆차기 시 골반 지지 및 시선 이탈',
          penalty: '총 -0.6점 감점',
          scenario: '옆차기를 차며 왼손을 펴서 골반을 손바닥으로 받치며 높이를 지탱하고, 시선은 발끝 대신 심판을 응시함.',
          deductions: [
            '손으로 골반을 지지하여 차는 행위 = -0.3 (정확성: 중대한 신체 조작 반칙)',
            '시선이 타격 방향(발끝)을 보지 않음 = -0.3 (정확성: 중대한 시선 이탈)',
          ],
          total: '정확성 총 감점: -0.6점',
          color: 'text-blue-500',
        },
        {
          caseNum: 3,
          title: '사례 3: 태극 7장 — 학다리서기 발 딛음 및 등주먹 높이 오류',
          penalty: '-0.4점 + 표현성 감점',
          scenario: '학다리서기에서 든 발이 균형을 잃고 바닥을 딛었으며, 이어진 등주먹 앞치기의 타격 높이가 인중이 아닌 가슴으로 향함.',
          deductions: [
            '학다리서기 든 발의 바닥 딛음 = -0.3 (정확성: 중대한 서기 파괴)',
            '등주먹 타격 높이 오류(인중 대신 가슴) = -0.1 (정확성: 경미한 목표 오류)',
            '균형 상실 및 주춤거림 = -0.1 ~ -0.3 (표현성: 균형 및 흐름 감점)',
          ],
          total: '정확성 -0.4점 + 표현성 감점 병과',
          color: 'text-amber-500',
        },
        {
          caseNum: 4,
          title: '사례 4: 금강 — 무음 짓찧기 및 산틀막기 각도 편차',
          penalty: '총 -0.4점 감점',
          scenario: '주춤서기 진입 시 짓찧기 소리가 나지 않았으며, 산틀막기 양팔이 귀 선보다 앞쪽으로 60도 쏠려 있음.',
          deductions: [
            '짓찧기 소리가 전혀 나지 않음 = -0.3 (정확성: 중대한 짓찧기 실패)',
            '산틀막기 팔 각도 전방 이탈 = -0.1 (정확성: 경미한 궤적 오류)',
          ],
          total: '정확성 총 감점: -0.4점',
          color: 'text-purple-500',
        },
        {
          caseNum: 5,
          title: '사례 5: 동작 망각으로 인한 전면 재시작 요청',
          penalty: '재시작 특별 감점',
          scenario: '태극 8장 12번째 동작에서 4초간 멈칫거리다 주심에게 묵념 후 재시작을 공식 요청함.',
          deductions: [
            '공식 재시작 감점 자동 부과 = 정확성에서 -0.6 감점 (정확도 상한선 3.4점으로 재시작)',
            '공식 계측 시계는 정지되지 않고 계속 흐르며, 총시간 90초 초과 시 추가 -0.3 감점 적용.',
          ],
          total: '정확성 특별 감점: -0.6점',
          color: 'text-emerald-500',
        },
      ]
    default:
      return [
        {
          caseNum: 1,
          title: 'Case 1: Taegeuk 4-Jang — Double Knifehand Block Stance & Hand Shape',
          penalty: '-0.4 Total',
          scenario: 'In Sonnal Makki, rear foot opens beyond 30 degrees, and rear hand is clenched in a fist instead of open knifehand.',
          deductions: [
            'Rear foot opening >30° in Dwitkubi = -0.1 (Accuracy: minor stance angle)',
            'Rear hand clenched in a fist instead of open palm = -0.3 (Accuracy: major technique flaw)',
          ],
          total: 'Total Accuracy Deduction: -0.4',
          color: 'text-brand-red',
        },
        {
          caseNum: 2,
          title: 'Case 2: Koryo — Side Kick Pelvic Touch & Eye Gaze',
          penalty: '-0.6 Total',
          scenario: 'During Yop-chagi, athlete rests open left hand flat against hip/pelvis for support, and keeps head facing judges.',
          deductions: [
            'Open palm supporting pelvis = -0.3 (Accuracy: major mechanical violation)',
            'Eyes not looking at kicking foot = -0.3 (Accuracy: major focal direction error)',
          ],
          total: 'Total Accuracy Deduction: -0.6',
          color: 'text-blue-500',
        },
        {
          caseNum: 3,
          title: 'Case 3: Taegeuk 7-Jang — Crane Stance Tap & Target Height',
          penalty: '-0.4 + Pres.',
          scenario: 'In Hakdari-seogi, raised foot briefly taps floor to regain balance. Backfist strike is delivered to chest instead of philtrum (Injung).',
          deductions: [
            'Raised foot touching ground in Crane stance = -0.3 (Accuracy: major stance loss)',
            'Backfist target height off (chest vs philtrum) = -0.1 (Accuracy: minor target flaw)',
            'Wobble/hesitation = -0.1 to -0.3 (Presentation: rhythm/balance domain)',
          ],
          total: 'Accuracy Deduction: -0.4 + Presentation deduction',
          color: 'text-amber-500',
        },
        {
          caseNum: 4,
          title: 'Case 4: Keumgang — Soft Stomp & Mountain Block Angle',
          penalty: '-0.4 Total',
          scenario: 'Entering Juchum-seogi, athlete stomps floor softly without audible sound, and arms in Santeul Makki are angled forward 60°.',
          deductions: [
            'Stomp lacking audible resonance = -0.3 (Accuracy: major stomp failure)',
            'Mountain block arms displaced forward = -0.1 (Accuracy: minor arm path flaw)',
          ],
          total: 'Total Accuracy Deduction: -0.4',
          color: 'text-purple-500',
        },
        {
          caseNum: 5,
          title: 'Case 5: Forgotten Movement with a Full Restart',
          penalty: 'Restart Penalty',
          scenario: 'In Taegeuk 8-Jang, athlete freezes on movement 12 for 4 seconds, bows to referee, and requests restart.',
          deductions: [
            'Automatic Restart Penalty = -0.6 deducted from Accuracy (accuracy baseline resets to 3.4 max)',
            'Official timer continues running without reset; if completion crosses 90s, an additional -0.3 applies.',
          ],
          total: 'Accuracy Baseline Deduction: -0.6',
          color: 'text-emerald-500',
        },
      ]
  }
}

// 8. 14 BASIC MOVEMENTS
export function getLocalizedFourteenBasicMovements(lang: string): LocalizedBasicMovement[] {
  switch (lang) {
    case 'km':
      return [
        { num: 1, name: 'Joon-bi', korean: '기본준비', desc: 'ជំហរត្រៀមមូលដ្ឋាន (Ready Stance)' },
        { num: 2, name: 'Juchum Seogi Momtong Jireugi', korean: '주춤서기 몸통지르기', desc: 'ជំហរសេះ ម៉ាត់កម្រិតកណ្តាល' },
        { num: 3, name: 'Apkubi Arae Makki', korean: '앞굽이 아래막기', desc: 'ជំហរឈានវែង រាំងក្រោម' },
        { num: 4, name: 'Apkubi Momtong Bandae Jireugi', korean: '앞굽이 몸통반대지르기', desc: 'ជំហរឈានវែង ម៉ាត់បញ្ច្រាសកម្រិតកណ្តាល' },
        { num: 5, name: 'Apkubi Ap Chagi', korean: '앞굽이 앞차기', desc: 'ជំហរឈានវែង ទាត់ត្រង់ទៅមុខ' },
        { num: 6, name: 'Dwitkubi Momtong Bakkat Makki', korean: '뒷굽이 몸통바깥막기', desc: 'ជំហរបត់ជើងក្រោយ រាំងចេញក្រៅកម្រិតកណ្តាល' },
        { num: 7, name: 'Apkubi Deungjumeok Ap Chigi', korean: '앞굽이 등주먹앞치기', desc: 'ជំហរឈានវែង វាយខ្នងកណ្តាប់ដៃទៅមុខ' },
        { num: 8, name: 'Apkubi Yop Chagi', korean: '앞굽이 옆차기', desc: 'ជំហរឈានវែង ទាត់ចំហៀង' },
        { num: 9, name: 'Dwitkubi Momtong Makki', korean: '뒷굽이 몸통막기', desc: 'ជំហរបត់ជើងក្រោយ រាំងកម្រិតកណ្តាល' },
        { num: 10, name: 'Dwitkubi Sonnal Makki', korean: '뒷굽이 손날막기', desc: 'ជំហរបត់ជើងក្រោយ រាំងបាតដៃកាំបិត' },
        { num: 11, name: 'Apkubi Dollyo Chagi', korean: '앞굽이 돌려차기', desc: 'ជំហរឈានវែង ទាត់ផ្កាប់' },
        { num: 12, name: 'Apkubi Olgul Makki', korean: '앞굽이 얼굴막기', desc: 'ជំហរឈានវែង រាំងលើកម្រិតមុខ' },
        { num: 13, name: 'Apkubi Hansonnal Mok Chigi', korean: '앞굽이 한손날목치기', desc: 'ជំហរឈានវែង កាប់បាតដៃកាំបិតចំក' },
        { num: 14, name: 'Dwitkubi Momtong Baro Jireugi', korean: '뒷굽이 몸통바로지르기', desc: 'ជំហរបត់ជើងក្រោយ ម៉ាត់ស្របកម្រិតកណ្តាល' },
      ]
    case 'zh':
      return [
        { num: 1, name: 'Joon-bi', korean: '기본준비', desc: '基本准备势 (Ready Stance)' },
        { num: 2, name: 'Juchum Seogi Momtong Jireugi', korean: '주춤서기 몸통지르기', desc: '骑马步中段冲拳' },
        { num: 3, name: 'Apkubi Arae Makki', korean: '앞굽이 아래막기', desc: '前屈步下段防守' },
        { num: 4, name: 'Apkubi Momtong Bandae Jireugi', korean: '앞굽이 몸통반대지르기', desc: '前屈步中段反冲拳' },
        { num: 5, name: 'Apkubi Ap Chagi', korean: '앞굽이 앞차기', desc: '前屈步前踢' },
        { num: 6, name: 'Dwitkubi Momtong Bakkat Makki', korean: '뒷굽이 몸통바깥막기', desc: '后屈步中段外防' },
        { num: 7, name: 'Apkubi Deungjumeok Ap Chigi', korean: '앞굽이 등주먹앞치기', desc: '前屈步背拳前击' },
        { num: 8, name: 'Apkubi Yop Chagi', korean: '앞굽이 옆차기', desc: '前屈步侧踢' },
        { num: 9, name: 'Dwitkubi Momtong Makki', korean: '뒷굽이 몸통막기', desc: '后屈步中段防守' },
        { num: 10, name: 'Dwitkubi Sonnal Makki', korean: '뒷굽이 손날막기', desc: '后屈步双刀手中段防' },
        { num: 11, name: 'Apkubi Dollyo Chagi', korean: '앞굽이 돌려차기', desc: '前屈步旋踢 (横踢)' },
        { num: 12, name: 'Apkubi Olgul Makki', korean: '앞굽이 얼굴막기', desc: '前屈步上段防守' },
        { num: 13, name: 'Apkubi Hansonnal Mok Chigi', korean: '앞굽이 한손날목치기', desc: '前屈步单刀手劈颈' },
        { num: 14, name: 'Dwitkubi Momtong Baro Jireugi', korean: '뒷굽이 몸통바로지르기', desc: '后屈步顺冲拳' },
      ]
    case 'ko':
      return [
        { num: 1, name: 'Joon-bi', korean: '기본준비', desc: '기본 준비서기' },
        { num: 2, name: 'Juchum Seogi Momtong Jireugi', korean: '주춤서기 몸통지르기', desc: '주춤서기 몸통지르기' },
        { num: 3, name: 'Apkubi Arae Makki', korean: '앞굽이 아래막기', desc: '앞굽이 아래막기' },
        { num: 4, name: 'Apkubi Momtong Bandae Jireugi', korean: '앞굽이 몸통반대지르기', desc: '앞굽이 몸통 반대지르기' },
        { num: 5, name: 'Apkubi Ap Chagi', korean: '앞굽이 앞차기', desc: '앞굽이 앞차기' },
        { num: 6, name: 'Dwitkubi Momtong Bakkat Makki', korean: '뒷굽이 몸통바깥막기', desc: '뒷굽이 몸통 바깥막기' },
        { num: 7, name: 'Apkubi Deungjumeok Ap Chigi', korean: '앞굽이 등주먹앞치기', desc: '앞굽이 등주먹 앞치기' },
        { num: 8, name: 'Apkubi Yop Chagi', korean: '앞굽이 옆차기', desc: '앞굽이 옆차기' },
        { num: 9, name: 'Dwitkubi Momtong Makki', korean: '뒷굽이 몸통막기', desc: '뒷굽이 몸통 안막기' },
        { num: 10, name: 'Dwitkubi Sonnal Makki', korean: '뒷굽이 손날막기', desc: '뒷굽이 손날 몸통막기' },
        { num: 11, name: 'Apkubi Dollyo Chagi', korean: '앞굽이 돌려차기', desc: '앞굽이 돌려차기' },
        { num: 12, name: 'Apkubi Olgul Makki', korean: '앞굽이 얼굴막기', desc: '앞굽이 얼굴막기' },
        { num: 13, name: 'Apkubi Hansonnal Mok Chigi', korean: '앞굽이 한손날목치기', desc: '앞굽이 한손날 목치기' },
        { num: 14, name: 'Dwitkubi Momtong Baro Jireugi', korean: '뒷굽이 몸통바로지르기', desc: '뒷굽이 몸통 바로지르기' },
      ]
    default:
      return [
        { num: 1, name: 'Joon-bi', korean: '기본준비', desc: 'Ready Stance' },
        { num: 2, name: 'Juchum Seogi Momtong Jireugi', korean: '주춤서기 몸통지르기', desc: 'Riding Stance Middle Punch' },
        { num: 3, name: 'Apkubi Arae Makki', korean: '앞굽이 아래막기', desc: 'Forward Stance Low Block' },
        { num: 4, name: 'Apkubi Momtong Bandae Jireugi', korean: '앞굽이 몸통반대지르기', desc: 'Forward Stance Reverse Punch' },
        { num: 5, name: 'Apkubi Ap Chagi', korean: '앞굽이 앞차기', desc: 'Forward Stance Front Kick' },
        { num: 6, name: 'Dwitkubi Momtong Bakkat Makki', korean: '뒷굽이 몸통바깥막기', desc: 'Back Stance Outer Middle Block' },
        { num: 7, name: 'Apkubi Deungjumeok Ap Chigi', korean: '앞굽이 등주먹앞치기', desc: 'Forward Stance Backfist Front Strike' },
        { num: 8, name: 'Apkubi Yop Chagi', korean: '앞굽이 옆차기', desc: 'Forward Stance Side Kick' },
        { num: 9, name: 'Dwitkubi Momtong Makki', korean: '뒷굽이 몸통막기', desc: 'Back Stance Middle Block' },
        { num: 10, name: 'Dwitkubi Sonnal Makki', korean: '뒷굽이 손날막기', desc: 'Back Stance Knifehand Middle Block' },
        { num: 11, name: 'Apkubi Dollyo Chagi', korean: '앞굽이 돌려차기', desc: 'Forward Stance Roundhouse Kick' },
        { num: 12, name: 'Apkubi Olgul Makki', korean: '앞굽이 얼굴막기', desc: 'Forward Stance High Block' },
        { num: 13, name: 'Apkubi Hansonnal Mok Chigi', korean: '앞굽이 한손날목치기', desc: 'Forward Stance Knifehand Neck Strike' },
        { num: 14, name: 'Dwitkubi Momtong Baro Jireugi', korean: '뒷굽이 몸통바로지르기', desc: 'Back Stance Obverse Punch' },
      ]
  }
}

export interface LocalizedProhibitedCategory {
  title: string
  description: string
  color: string
}

export function getLocalizedProhibitedCategories(lang: string): LocalizedProhibitedCategory[] {
  switch (lang) {
    case 'km':
      return [
        { title: '១. ព្រំដែន & ការដួល:', description: 'ការចេញក្រៅបន្ទាត់ព្រំដែនដោយជើងមួយ ឬទាំងពីរ។ ការដួលលើកម្រាល (លើកលែងតែការដួលដែលបណ្តាលមកពីការរងការវាយប្រហារស្របច្បាប់ ឬកំហុសគូប្រកួត)។', color: 'text-brand-red' },
        { title: '២. ការគេចវេស & ពន្យារពេល:', description: 'ការថយក្រោយ ឬគេចចំហៀង ៣ ជំហានជាប់គ្នាដោយមិនប្រយុទ្ធ។ ការងាកខ្នងទាំងស្រុង។ ការស្ទាក់ស្ទើរក្រោយបញ្ជា "Gong-gyeok"។ ការក្លែងបន្លំរបួស។', color: 'text-blue-500' },
        { title: '៣. ការចាប់ & រុញខុសច្បាប់:', description: 'ការចាប់រាងកាយ ឯកសណ្ឋាន ឬឧបករណ៍ការពារ។ ការទាក់ជើង។ ការរុញគូប្រកួតចេញក្រៅបន្ទាត់ ឬរុញពេលគូប្រកួតកំពុងលោតទាត់លើអាកាស។', color: 'text-amber-500' },
        { title: '៤. ការលើកជើង & កាត់ស្ទាក់:', description: 'ការលើកជើងរារាំងការទាត់របស់គូប្រកួត។ ការទាត់ជើងគូប្រកួត។ ការលើកជើងលើអាកាសលើសពី ៣ វិនាទី។ ការទាត់ខ្យល់ ៣ ដងឡើងទៅដោយគ្មានគោលដៅ។', color: 'text-purple-500' },
        { title: '៥. ការវាយខុសច្បាប់ & កំហុសពេលគាប:', description: 'ការវាយក្រោមចង្កេះ ការវាយក្រោយ Kal-yeo ដៃវាយក្បាល ជង្គង់បុក វាយគូប្រកួតដែលដួល ឬការទាត់បាតជើងពេលតោងគាប។', color: 'text-rose-500' },
        { title: '៦. អាកប្បកិរិយាមិនសមរម្យ & កាតលឿង:', description: 'កាយវិការគ្មានការគោរព ការប្រកែកជាមួយអាជ្ញាកណ្តាល គ្រូបង្វឹកចូលសង្វៀនដោយគ្មានការអនុញ្ញាត ឬការបដិសេធបញ្ជាអាជ្ញាកណ្តាល។', color: 'text-emerald-500' },
      ]
    case 'zh':
      return [
        { title: '1. 边界出界与倒地规避:', description: '一只脚或双脚完全踏出边界线。身体触垫倒地（特例：因遭受对手合法重击或对手犯规导致的倒地除外）。', color: 'text-brand-red' },
        { title: '2. 消极防守与延误比赛:', description: '连续后退或横移3步以上不交战。完全转身背对对手。主裁判叫“Gong-gyeok(进攻)”后仍消极发呆。假装受伤拖延时间。', color: 'text-blue-500' },
        { title: '3. 抓抱与违规推人:', description: '抓抱对手身体、道服或护具。勾绊对手腿部。将对手推至界外，或在对手腾空踢击时实施推击。', color: 'text-amber-500' },
        { title: '4. 抬腿阻挡与截击拖延:', description: '抬腿阻挡对手合法踢击。踢击对手腿部。单腿悬空停留超过3秒。在空中空蹬3次以上无实质攻击意图。', color: 'text-purple-500' },
        { title: '5. 违规击打与缠抱犯规:', description: '攻击腰部以下。裁判叫停(Kal-yeo)后继续攻击。拳击面部或头部。膝击、头顶、攻击倒地对手、缠抱中违规脚底蹬擦护具。', color: 'text-rose-500' },
        { title: '6. 不当行为与黄牌处罚:', description: '做出侮辱性或不敬手势。与裁判争辩不休。教练擅自闯入比赛区域。拒绝服从主裁判正式指令。', color: 'text-emerald-500' },
      ]
    case 'ko':
      return [
        { title: '1. 한계선 이탈 및 넘어짐:', description: '한 발 또는 양 발이 한계선 밖으로 완전히 나가는 행위. 매트에 넘어지는 행위(단, 상대의 적법한 충격이나 반칙에 의한 넘어짐은 제외).', color: 'text-brand-red' },
        { title: '2. 경기 회피 및 시간 지연:', description: '공격 의사 없이 3보 이상 연속 후퇴 또는 측면 회피. 상대에게 완전히 등을 돌리는 행위. 공격(Gong-gyeok) 구령 후 지체. 부상 가장 시간 끌기.', color: 'text-blue-500' },
        { title: '3. 잡기 및 불법 밀기:', description: '상대의 신체, 도복, 보호장구를 잡는 행위. 다리 걸기. 상대를 한계선 밖으로 밀어내거나 상대가 공중 발차기 중일 때 미는 행위.', color: 'text-amber-500' },
        { title: '4. 다리 방어 및 컷트발 지연:', description: '상대의 발차기를 막기 위해 다리를 드는 행위. 상대 다리를 차는 행위. 허공에 발을 3초 이상 들고 있거나 허공에 3회 이상 헛발질하는 행위.', color: 'text-purple-500' },
        { title: '5. 반칙 타격 및 클린치 반칙:', description: '허리 아래 공격, 갈려 선언 후 공격, 주먹으로 얼굴 타격, 무릎 공격, 넘어진 상대 공격, 클린치 상태에서 발바닥 비정상 타격.', color: 'text-rose-500' },
        { title: '6. 비신사적 행위 및 옐로우 카드:', description: '불손한 몸짓, 심판 판정에 과도한 항의, 코치의 경기장 무단 난입, 주심의 공식 지시 불응.', color: 'text-emerald-500' },
      ]
    default:
      return [
        { title: '1. Boundary & Falling:', description: 'Crossing boundary with one/both feet completely out. Falling on mat (Exemption: if directly caused by opponent\'s foul or legitimate strike).', color: 'text-brand-red' },
        { title: '2. Passivity & Delay:', description: 'Moving 3 consecutive steps backward/sideways without engagement. Turning back completely. Stalling after "Gong-gyeok" (Fight). Feigning injury.', color: 'text-blue-500' },
        { title: '3. Grabbing & Illegal Pushing:', description: 'Grabbing body, dobok, or gear. Hooking leg. Pushing opponent out of boundary or while opponent is in mid-air executing a kick.', color: 'text-amber-500' },
        { title: '4. Leg Lifting & Cut-Kick Stalling:', description: 'Lifting leg to block incoming kick. Kicking opponent\'s leg. Holding leg in air >3 seconds. Pumping or kicking air 3+ times without target contact.', color: 'text-purple-500' },
        { title: '5. Illegal Strikes & Clinch Fouls:', description: 'Attacking below waist, after Kal-yeo, hand to head, knee attack, fallen opponent, or clinch outward kicks.', color: 'text-rose-500' },
        { title: '6. Misconduct & Yellow Card:', description: 'Disrespectful gestures, arguing with referee, coach unsanctioned ring entry, or refusing referee commands.', color: 'text-emerald-500' },
      ]
  }
}

