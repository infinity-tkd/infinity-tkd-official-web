// =============================================================================
// INFINITY TKD WEB - HOSINSUL (SELF-DEFENSE) MULTILINGUAL DATASET
// Complete localized text for English, Khmer, Chinese, and Korean.
// =============================================================================

export interface HosinsulFoundationsData {
  title: string
  koreanTitle: string
  etymology: {
    title: string
    summary: string
    characters: Array<{
      hanja: string
      hangul: string
      romanized: string
      meaning: string
      description: string
    }>
  }
  ilgyeokPilsal: {
    title: string
    koreanTerm: string
    hanja: string
    concept: string
    description: string
    pillars: Array<{
      title: string
      desc: string
    }>
  }
  fourPillars: {
    title: string
    summary: string
    pillars: Array<{
      name: string
      koreanName: string
      desc: string
      techniques: string[]
    }>
  }
  hapkidoConnection: {
    title: string
    koreanTitle: string
    summary: string
    points: Array<{
      title: string
      desc: string
    }>
  }
}

export interface HardVsSoftData {
  title: string
  koreanTitle: string
  summary: string
  linearHard: {
    title: string
    koreanTerm: string
    concept: string
    description: string
    techniques?: string[]
    distancePyramid: Array<{
      range: string
      koreanRange: string
      weapons: string
      strategy: string
      dangerWarning: string
    }>
    multipleAttackerDoctrine: {
      title: string
      rule: string
      tactics: string[]
    }
  }
  circularSoft: {
    title: string
    koreanTerm: string
    concept: string
    description: string
    techniques: string[]
    principles: Array<{
      name: string
      desc: string
    }>
    subdualBenefit: string
  }
  comparisonMatrix: Array<{
    dimension: string
    linearHard: string
    circularSoft: string
  }>
}

export interface VitalPointItem {
  id: string
  name: string
  koreanName: string
  romanized: string
  location: string
  targetArea: 'high' | 'mid' | 'low'
  anatomicalStructure: string
  impactEffect: string
  recommendedStrike: string
  dangerLevel: 'Moderate' | 'Severe' | 'Lethal / Critical'
}

export interface VitalPointsGuideData {
  title: string
  koreanTitle: string
  summary: string
  legalWarning: string
  vitalPoints: VitalPointItem[]
  legalFramework: {
    title: string
    stages: Array<{
      step: number
      title: string
      desc: string
    }>
  }
}

// -----------------------------------------------------------------------------
// 1. FOUNDATIONS DATASET
// -----------------------------------------------------------------------------
export function getHosinsulFoundations(lang: string): HosinsulFoundationsData {
  switch (lang) {
    case 'km':
      return {
        title: 'ខ្លឹមសារ និងទស្សនវិជ្ជានៃក្បាច់ការពារខ្លួន (Hosinsul)',
        koreanTitle: '호신술의 본질과 기본 원리 (Philosophy & Core Essence)',
        etymology: {
          title: 'អត្ថន័យនៃពាក្យ "HOSINSUL" (호신술 / 護身術)',
          summary: 'ក្បាច់ការពារខ្លួនតេក្វាន់ដូ (Hosinsul) ផ្សំឡើងពីអក្សរហានចា (Hanja) ចំនួន ៣ ដែលកំណត់យ៉ាងច្បាស់ពីគោលបំណងចម្បងរបស់វា៖',
          characters: [
            {
              hanja: '護',
              hangul: '호 (Ho)',
              romanized: 'Ho',
              meaning: 'ការពារ និងថែរក្សា (Protect / Guard)',
              description: 'ការពារខ្លួនឯង អ្នកដទៃ និងសង្គមពីគ្រោះថ្នាក់ ដោយគ្មានចេតនាឈ្លានពានលើអ្នកដទៃជាមុន។',
            },
            {
              hanja: '身',
              hangul: '신 (Sin)',
              romanized: 'Sin',
              meaning: 'រាងកាយ និងជីវិត (Body / Person)',
              description: 'ការពារសុចរិតភាពនៃរាងកាយ ស្មារតី និងសុខុមាលភាពរបស់បុគ្គលពីការវាយប្រហារដោយហិង្សា។',
            },
            {
              hanja: '術',
              hangul: '술 (Sul)',
              romanized: 'Sul',
              meaning: 'បច្ចេកទេស និងវិទ្យាសាស្ត្រ (Technique / Method)',
              description: 'ការអនុវត្តបច្ចេកទេសជីវមេកានិច កម្លាំងគាស់ និងវិទ្យាសាស្ត្រចលនា ដើម្បីយកឈ្នះកម្លាំងបាយដ៏ធំជាង។',
            },
          ],
        },
        ilgyeokPilsal: {
          title: 'ទ្រឹស្តី "មួយក្បាច់ផ្តាច់សត្រូវ" (Ilgyeok Pilsal / 一擊必殺)',
          koreanTerm: '일격필살 (One Decisive Blow)',
          hanja: '一擊必殺',
          concept: 'ក្នុងការប្រយុទ្ធការពារខ្លួនជាក់ស្តែង ការវាយសម្រេចចិត្តតែមួយក្បាច់ ឬការប្រឹងប្រែងមួយលើក ត្រូវតែគ្រប់គ្រាន់ដើម្បីបញ្ឈប់ ឬដកហូតអាវុធគូប្រកួត។',
          description:
            'ខុសពីការប្រកួតកីឡាដែលមានអាជ្ញាកណ្តាល និងពិន្ទុ ការការពារខ្លួនក្នុងពិភពពិតគ្មានជុំទីពីរឡើយ។ សិស្សតេក្វាន់ដូត្រូវហ្វឹកហាត់ថាមពល ការផ្តោតអារម្មណ៍ ការគ្រប់គ្រង និងភាពជាក់លាក់ខ្ពស់បំផុត ដែលទាមទារការអនុវត្តជាច្រើនឆ្នាំ។',
          pillars: [
            {
              title: 'ភាពត្រឹមត្រូវខ្ពស់បំផុត (Absolute Precision)',
              desc: 'វាយប្រហារចំចំណុចខ្សោយ ឬចំណុចស្លាប់ (Kupso) ភ្លាមៗដោយគ្មានកំហុស។',
            },
            {
              title: 'ការផ្ទុះថាមពលពេញលេញ (Maximum Explosive Power)',
              desc: 'ការបញ្ចេញកម្លាំងចង្កេះ និងការផ្ទេរទម្ងន់រាងកាយទាំងមូលក្នុងពេលតែមួយ។',
            },
            {
              title: 'ការសម្រេចចិត្តរហ័ស (Instantaneous Decisiveness)',
              desc: 'ប្រតិកម្មឆ្លើយតបដោយគ្មានការស្ទាក់ស្ទើរ ដើម្បីការពារកុំឱ្យជនដៃដល់មានឱកាសវាយបក។',
            },
          ],
        },
        fourPillars: {
          title: 'សសរស្តម្ភបច្ចេកទេសទាំង ៤ នៃ Hosinsul',
          summary: 'ក្បាច់ការពារខ្លួនតេក្វាន់ដូគ្របដណ្តប់លើបច្ចេកទេសជាច្រើនប្រភេទ ដើម្បីដោះស្រាយគ្រប់ស្ថានភាពគំរាមកំហែង៖',
          pillars: [
            {
              name: 'ការដោះខ្លួន (Ppaegi / Break-Outs)',
              koreanName: '빼기 기술',
              desc: 'ការរំដោះខ្លួនចេញពីការចាប់កដៃ ការចាប់កអាវ និងការចាប់រាងកាយដោយប្រើកម្លាំងគាស់កដៃ និងមុំស្រប។',
              techniques: ['Nulleo-ppaegi', 'Teureo-ppaegi', 'Hwidulleo-ppaegi'],
            },
            {
              name: 'ការបត់សន្លាក់ (Kkeokgi / Joint Locks)',
              koreanName: '꺾기 기술',
              desc: 'ការសង្កត់ ឬបង្វិលសន្លាក់កដៃ កែងដៃ និងស្មា ឱ្យហួសកម្រិតធម្មជាតិដើម្បីទប់ស្កាត់ចលនាគូប្រកួត។',
              techniques: ['Nulleo-kkeokgi', 'Biteureo-kkeokgi'],
            },
            {
              name: 'ការបោក និងកាច់ជើង (Neomgigi / Takedowns)',
              koreanName: '넘기기 기술',
              desc: 'ការទម្លាក់គូប្រកួតទៅដីដោយការលើកបោក ឬការកាច់កែងជើង ធ្វើឱ្យគូប្រកួតបាត់បង់លំនឹងទាំងស្រុង។',
              techniques: ['Deureo-neomgigi', 'Georeo-neomgigi'],
            },
            {
              name: 'ការការពារអាវុធ & ចំណុចខ្សោយ (Weapons & Pressure Points)',
              koreanName: '무기 방어 & 급소 치기',
              desc: 'ការដកហូតកាំបិត ដំបង និងការវាយប្រហារចំចំណុចរសើបនៃរាងកាយមនុស្ស ដើម្បីបញ្ឈប់ការគំរាមកំហែងដល់អាយុជីវិត។',
              techniques: ['Mugi-hosinsul', 'Kupso-chigi'],
            },
          ],
        },
        hapkidoConnection: {
          title: 'ទំនាក់ទំនងរវាងតេក្វាន់ដូ និង ហាប់គីដូ (Taekwondo & Hapkido)',
          koreanTitle: '태권도와 합기도의 역사적·기술적 연계',
          summary:
            'ហាប់គីដូ (Hapkido) គឺជាក្បាច់គុនប្រពៃណីកូរ៉េមួយទៀត ដែលមានលក្ខណៈបច្ចេកទេសការពារខ្លួនស្រដៀងគ្នាយ៉ាងជិតស្និទ្ធទៅនឹងផ្នែក Hosinsul របស់តេក្វាន់ដូ។',
          points: [
            {
              title: 'ប្រភពដើមរួមគ្នានៃសិល្បៈកាច់សន្លាក់',
              desc: 'ក្បាច់ការពារខ្លួនតេក្វាន់ដូ និងហាប់គីដូ បានទាញយកចំណេះដឹងពីក្បាច់គុនបុរាណកូរ៉េ Taekkyeon, Subak និង Daito-ryu Aiki-jujutsu ដោយផ្តោតលើការបង្វិល និងបត់សន្លាក់។',
            },
            {
              title: 'ការបំពេញបន្ថែមរវាងកម្លាំងរឹង និងកម្លាំងទន់',
              desc: 'ខណៈពេលដែលតេក្វាន់ដូល្បីល្បាញដោយសារការទាត់ និងកណ្តាប់ដៃដ៏មានអានុភាព (Linear/Hard) ផ្នែក Hosinsul បានបញ្ចូលចលនារង្វង់ និងការបង្វែរកម្លាំង (Circular/Soft) ដូចទៅនឹងហាប់គីដូ។',
            },
            {
              title: 'បន្សំរាប់រយនៃក្បាច់វាយបក',
              desc: 'មានការរួមបញ្ចូលគ្នារាប់រយនៃក្បាច់តបត ដែលផ្អែកលើចំណេះដឹងមូលដ្ឋាននៃក្បាច់គុនទាំងពីរ ដើម្បីដោះស្រាយការវាយប្រហារគ្រប់ទម្រង់។',
            },
          ],
        },
      }
    case 'zh':
      return {
        title: '跆拳道实用防身术核心哲学与本质 (Hosinsul)',
        koreanTitle: '호신술의 본질과 기본 원리 (Philosophy & Core Essence)',
        etymology: {
          title: '“HOSINSUL” (护身术 / 호신술) 汉字本义',
          summary: '跆拳道防身术（Hosinsul）由三个汉字组成，明确揭示了该体系的武道使命：',
          characters: [
            {
              hanja: '護',
              hangul: '호 (Ho)',
              romanized: 'Ho',
              meaning: '守护与防卫 (Protect / Guard)',
              description: '以不主动侵犯他人为前提，誓死捍卫自身、亲友与无辜弱者的生命安全。',
            },
            {
              hanja: '身',
              hangul: '신 (Sin)',
              romanized: 'Sin',
              meaning: '肉身与生命 (Body / Person)',
              description: '保护身体器官、骨骼、关节及精神免受暴徒的物理摧残与致死伤害。',
            },
            {
              hanja: '術',
              hangul: '술 (Sul)',
              romanized: 'Sul',
              meaning: '技术与科学机制 (Technique / Method)',
              description: '运用人体力学、杠杆原理与关节旋转物理规律，实现以柔克刚、以小博大。',
            },
          ],
        },
        ilgyeokPilsal: {
          title: '“一击必杀” 实战防卫法则 (Ilgyeok Pilsal / 一擊必殺)',
          koreanTerm: '일격필살 (One Decisive Blow)',
          hanja: '一擊必殺',
          concept: '在街头实战防卫中，学员必须秉持“一击或一次发力便足以彻底终结暴行或制服歹徒”的核心理念。',
          description:
            '与存在规则、护具和裁判保护的竞技比赛不同，现实自卫没有倒计时与第二回合。瞬间爆发这种极度精准、绝对控制与毁灭性打击力的能力，需要经年累月的严苛锤炼。',
          pillars: [
            {
              title: '极致精准 (Absolute Precision)',
              desc: '在肾上腺素飙升的危机瞬间，分毫不差锁定对手咽喉、眼睛或神经要穴。',
            },
            {
              title: '整劲爆发 (Integrated Kinetic Energy)',
              desc: '蹬地转胯、腰背合一，将全身质量加速度汇聚于指掌手肘一点。',
            },
            {
              title: '决绝果断 (Instant Decisiveness)',
              desc: '出手毫无犹豫迟疑，在暴徒尚未完全展开二段攻击前夺取主导权。',
            },
          ],
        },
        fourPillars: {
          title: '防身术四大实战技术支柱',
          summary: '跆拳道护身术涵盖全维度的防御方案，从挣脱解套到彻底制服：',
          pillars: [
            {
              name: '解脱挣脱术 (Ppaegi / Break-Outs)',
              koreanName: '빼기 기술',
              desc: '针对手腕、衣领、后抱等抓抱控制，利用杠杆与弱点瞬间脱困。',
              techniques: ['Nulleo-ppaegi', 'Teureo-ppaegi', 'Hwidulleo-ppaegi'],
            },
            {
              name: '反关节折别 (Kkeokgi / Joint Locks)',
              koreanName: '꺾기 기술',
              desc: '压迫或扭转歹徒手腕、肘部与肩关节，使其骨骼超伸剧痛失去行动力。',
              techniques: ['Nulleo-kkeokgi', 'Biteureo-kkeokgi'],
            },
            {
              name: '摔法与绊摔 (Neomgigi / Takedowns)',
              koreanName: '넘기기 기술',
              desc: '借力打力，通过腰部反弹上托或扫踢破坏其下盘重心实现重重摔倒。',
              techniques: ['Deureo-neomgigi', 'Georeo-neomgigi'],
            },
            {
              name: '夺械与要害打击 (Weapons & Pressure Points)',
              koreanName: '무기 방어 & 급소 치기',
              desc: '利刃钝器解脱空手夺白刃，配合人体要害死穴精准反击脱困。',
              techniques: ['Mugi-hosinsul', 'Kupso-chigi'],
            },
          ],
        },
        hapkidoConnection: {
          title: '跆拳道与合气道 (Hapkido) 的技术渊源',
          koreanTitle: '태권도와 합기도의 역사적·기술적 연계',
          summary:
            '合气道（Hapkido）是另一门享誉全球的韩国传统武道，跆拳道防身术（Hosinsul）在关节锁定与化解机制上与合气道存在高度同源与技术重叠。',
          points: [
            {
              title: '韩国传统柔术与大东流的共同滋养',
              desc: '两者均承袭了古代跆跟（Taekkyeon）、手搏（Subak）及大东流合气柔术的扭腕折肘技巧。',
            },
            {
              title: '刚柔相济的技术互补',
              desc: '跆拳道赋予实战极具毁灭性的长距离腿法与直线性重拳（刚），而防身术部分吸纳了合气道圆周卸力与擒拿控制（柔）。',
            },
            {
              title: '数百种反击组合技',
              desc: '两派在实战理念上互通有无，形成了数百种基于人体运动力学的致命反击组合。',
            },
          ],
        },
      }
    case 'ko':
      return {
        title: '태권도 호신술(護身術)의 본질과 철학적 요결',
        koreanTitle: '호신술의 본질과 기본 원리 (Philosophy & Core Essence)',
        etymology: {
          title: '호신술(護身術)의 한자적 의미와 정의',
          summary: '호신술은 상대방의 기습 공격으로부터 자신을 안전하게 보호하고 무력화하기 위한 실전 무술 체계입니다:',
          characters: [
            {
              hanja: '護',
              hangul: '호 (Ho)',
              romanized: 'Ho',
              meaning: '지킬 호 (Protect / Guard)',
              description: '먼저 공격하지 않는 평화의 원칙 아래, 자신과 타인의 생명을 지켜내는 방어적 무도 정신입니다.',
            },
            {
              hanja: '身',
              hangul: '신 (Sin)',
              romanized: 'Sin',
              meaning: '몸 신 (Body / Person)',
              description: '공격자의 폭력으로부터 육체와 생명, 그리고 인격의 존엄성을 안전하게 보존합니다.',
            },
            {
              hanja: '術',
              hangul: '술 (Sul)',
              romanized: 'Sul',
              meaning: '재주/방법 술 (Technique / Method)',
              description: '단순한 완력이 아닌, 관절 역학·지렛대 원리·인체 급소를 과학적으로 활용하는 무술적 기술입니다.',
            },
          ],
        },
        ilgyeokPilsal: {
          title: '‘일격필살(一擊必殺)’의 실전 무도 원리',
          koreanTerm: '일격필살 (One Decisive Blow)',
          hanja: '一擊必殺',
          concept: '실전 호신술에서는 단 한 번의 타격이나 단 한 번의 지렛대 노력으로 공격자를 제압하고 무장해제시켜야 합니다.',
          description:
            '규칙과 보호대가 존재하는 겨루기와 달리, 실전 거리에서는 두 번째 기회가 주어지지 않습니다. 단 한 번의 결정타로 상대의 공격 의지를 꺾는 정확성과 폭발력은 수년간의 엄격한 수련을 통해 완성됩니다.',
          pillars: [
            {
              title: '정밀성 (Absolute Precision)',
              desc: '급박한 상황에서도 인체의 취약한 급소와 관절을 오차 없이 정확히 타격하거나 제압합니다.',
            },
            {
              title: '집중된 파괴력 (Concentrated Power)',
              desc: '단전 호흡과 허리 회전을 실어 신체 전 체중을 한 점에 폭발적으로 전달합니다.',
            },
            {
              title: '즉각적인 결단력 (Decisive Action)',
              desc: '위기 순간 망설임 없이 기선을 제압하여 상대방의 연타 공격을 사전에 차단합니다.',
            },
          ],
        },
        fourPillars: {
          title: '태권도 호신술의 4대 핵심 기술 축',
          summary: '호신술은 단순한 방어를 넘어 다양한 위협 상황에 대처하는 종합 실전 체계입니다:',
          pillars: [
            {
              name: '빼기 기술 (Ppaegi / Break-Outs)',
              koreanName: '빼기 기술',
              desc: '손목이나 옷깃, 신체를 잡혔을 때 지렛대와 회전 반경을 이용해 순간적으로 빠져나옵니다.',
              techniques: ['눌러빼기 (Nulleo-ppaegi)', '틀어빼기 (Teureo-ppaegi)', '휘둘러빼기 (Hwidulleo-ppaegi)'],
            },
            {
              name: '꺾기 기술 (Kkeokgi / Joint Locks)',
              koreanName: '꺾기 기술',
              desc: '상대방의 손목, 팔굽, 어깨, 무릎 관절을 역방향으로 꺾거나 압박하여 꼼짝 못하게 제압합니다.',
              techniques: ['눌러꺾기 (Nulleo-kkeokgi)', '비틀어꺾기 (Biteureo-kkeokgi)'],
            },
            {
              name: '넘기기 기술 (Neomgigi / Takedowns)',
              koreanName: '넘기기 기술',
              desc: '허리의 반동으로 들어 메치거나 발목·오금을 걸어 중심을 무너뜨려 바닥에 쓰러뜨립니다.',
              techniques: ['들어넘기기 (Deureo-neomgigi)', '걸어넘기기 (Georeo-neomgigi)'],
            },
            {
              name: '무기 방어 및 급소 치기 (Weapons & Pressure Points)',
              koreanName: '무기 방어 & 급소 치기',
              desc: '단검이나 둔기 공격 시 사선 이탈 후 무장해제하며, 치명적인 인체 급소를 타격합니다.',
              techniques: ['무기 호신술 (Mugi-hosinsul)', '급소 치기 (Kupso-chigi)'],
            },
          ],
        },
        hapkidoConnection: {
          title: '태권도 호신술과 합기도(合氣道)의 연계성',
          koreanTitle: '태권도와 합기도의 역사적·기술적 연계',
          summary:
            '합기도는 태권도와 함께 한국을 대표하는 전통 무술로, 호신술의 관절 꺾기와 던지기 영역에서 매우 밀접한 상호 영향을 공유합니다.',
          points: [
            {
              title: '한국 전통 관절 제어술의 공통 뿌리',
              desc: '태껸의 꺾음수, 수박의 유술적 기법, 그리고 대동류 유술의 관절 제어술이 상호 교류되며 발전했습니다.',
            },
            {
              title: '강술(剛術)과 유술(柔術)의 완벽한 조화',
              desc: '태권도의 폭발적인 직선 타격(강)에 합기도의 원형 회전 및 상대 힘의 역이용(유)이 결합되어 완전한 호신술을 완성합니다.',
            },
            {
              title: '수백 가지의 실전 역습 콤비네이션',
              desc: '기본 무도 역학에 기반하여 거리별, 공격 유형별로 수백 가지의 대응 조합이 성립됩니다.',
            },
          ],
        },
      }
    default:
      return {
        title: 'Hosinsul: The Essence & Philosophy of Taekwondo Self-Defense',
        koreanTitle: '호신술의 본질과 기본 원리 (Philosophy & Core Essence)',
        etymology: {
          title: 'The Etymology of "HOSINSUL" (호신술 / 護身術)',
          summary: 'Hosinsul is formed from three profound Hanja (Sino-Korean) root characters that define its moral and physical mandate:',
          characters: [
            {
              hanja: '護',
              hangul: '호 (Ho)',
              romanized: 'Ho',
              meaning: 'To Protect & Guard',
              description: 'Protecting oneself, innocent lives, and societal peace with zero aggressive malice or offensive intent.',
            },
            {
              hanja: '身',
              hangul: '신 (Sin)',
              romanized: 'Sin',
              meaning: 'The Body & Life',
              description: 'Preserving physical bodily integrity, mental sovereignty, and personal dignity against hostile violence.',
            },
            {
              hanja: '術',
              hangul: '술 (Sul)',
              romanized: 'Sul',
              meaning: 'The Technique & Science',
              description: 'Applying biomechanics, leverage physics, and anatomical fulcrums rather than relying on raw brute muscular force.',
            },
          ],
        },
        ilgyeokPilsal: {
          title: 'The Theory of "Ilgyeok Pilsal" (One Decisive Blow / 一擊必殺)',
          koreanTerm: '일격필살 (One Decisive Effort)',
          hanja: '一擊必殺',
          concept: 'In real-world self-defense encounters, a Taekwondo practitioner must operate on the principle that ONE strike or ONE effort must be sufficient to neutralize, disarm, or incapacitate the assailant.',
          description:
            'Unlike sport sparring governed by safety pads, referee stops, and scoring rounds, real violence permits no second chances. Achieving this level of destructive focus, decisive control, and surgical accuracy requires relentless, multi-year dedication.',
          pillars: [
            {
              title: 'Surgical Accuracy (Absolute Precision)',
              desc: 'Targeting vulnerable anatomical weak points and nerve clusters (Kupso) instantaneously under extreme adrenaline surge.',
            },
            {
              title: 'Explosive Kinetic Delivery (Maximum Power)',
              desc: 'Unifying core rotational momentum, diaphragmatic breath expulsion, and total body mass into a single strike.',
            },
            {
              title: 'Instantaneous Resolution (No Hesitation)',
              desc: 'Reacting with unwavering certainty to eliminate the threat before secondary attacks can be mobilized.',
            },
          ],
        },
        fourPillars: {
          title: 'The 4 Technical Pillars of Hosinsul',
          summary: 'Hosinsul encompasses a comprehensive spectrum of physical problem-solving across all combat situations:',
          pillars: [
            {
              name: 'Break-Outs & Escapes (Ppaegi)',
              koreanName: '빼기 기술',
              desc: 'Escaping wrist, lapel, and body grips by exploiting thumb gaps, rotational torque, and core displacement.',
              techniques: ['Nulleo-ppaegi', 'Teureo-ppaegi', 'Hwidulleo-ppaegi'],
            },
            {
              name: 'Joint Locks & Hyperextension (Kkeokgi)',
              koreanName: '꺾기 기술',
              desc: 'Subduing assailants by pressing or twisting the wrists, elbows, shoulders, or knees past physiological range.',
              techniques: ['Nulleo-kkeokgi', 'Biteureo-kkeokgi'],
            },
            {
              name: 'Takedowns & Sweeps (Neomgigi)',
              koreanName: '넘기기 기술',
              desc: 'Downing an opponent by lifting them with spring-like waist power or sweeping their ankles and knee joints.',
              techniques: ['Deureo-neomgigi', 'Georeo-neomgigi'],
            },
            {
              name: 'Weapons Defense & Vital Pressure Points',
              koreanName: '무기 방어 & 급소 치기',
              desc: 'Neutralizing knives, clubs, and blunt weapons, combined with surgical trauma to anatomical pressure points.',
              techniques: ['Mugi-hosinsul', 'Kupso-chigi'],
            },
          ],
        },
        hapkidoConnection: {
          title: 'The Taekwondo & Hapkido Connection',
          koreanTitle: '태권도와 합기도의 역사적·기술적 연계',
          summary:
            'Hapkido is another world-renowned Korean martial art, and many self-defense aspects of Taekwondo share deep technical lineage and shared biomechanical DNA with Hapkido.',
          points: [
            {
              title: 'Shared Lineage in Korean Grappling',
              desc: 'Both arts draw from traditional Korean wrestling (Ssireum), Taekkyeon joint traps, Subak, and Aiki-jujutsu leverage principles.',
            },
            {
              title: 'Synergy of Hard & Soft Forces',
              desc: 'While Taekwondo emphasizes devastating long-range ballistic strikes (Linear/Hard), Hosinsul incorporates the circular redirections and wrist-locks characteristic of Hapkido (Circular/Soft).',
            },
            {
              title: 'Hundreds of Counter-Attack Combinations',
              desc: 'Practitioners combine basic blocks and strikes with joint manipulation to create endless counter-offensive solutions.',
            },
          ],
        },
      }
  }
}

// -----------------------------------------------------------------------------
// 2. HARD VS SOFT (LINEAR VS CIRCULAR) DATASET
// -----------------------------------------------------------------------------
export function getHardVsSoftData(lang: string): HardVsSoftData {
  switch (lang) {
    case 'km':
      return {
        title: 'យុទ្ធសាស្ត្រវាយបក៖ ក្បាច់ត្រង់ (រឹង) ទល់នឹង ក្បាច់រង្វង់ (ទន់)',
        koreanTitle: '직선적 강술(剛術)과 원형적 유술(柔術)의 비교',
        summary: 'ក្នុងក្បាច់ការពារខ្លួន Hosinsul មានវិធីសាស្ត្រវាយបកសំខាន់ៗពីរប្រភេទដែលត្រូវជ្រើសរើសអាស្រ័យលើចម្ងាយ និងកម្រិតគំរាមកំហែង៖',
        linearHard: {
          title: 'បច្ចេកទេសត្រង់ ឬកម្លាំងរឹង (Linear / Hard Techniques)',
          koreanTerm: '직선적 강술 (Gang-sul)',
          concept: 'ការវាយលុកដោយផ្ទាល់ ផ្ទុះកម្លាំង និងមានអានុភាពបំផ្លិចបំផ្លាញខ្ពស់ ដើម្បីផ្តាច់សត្រូវដោយការវាយមួយក្បាច់។',
          description:
            'រួមបញ្ចូលការដាល់ ការទាត់ ការវាយក្បាល ការវាយកែង និងជង្គង់។ ការជ្រើសរើសបច្ចេកទេសអាស្រ័យលើ "ចម្ងាយ" រវាងអ្នក និងជនដៃដល់។',
          distancePyramid: [
            {
              range: 'ចម្ងាយទាត់ (Kicking Distance / Long Range)',
              koreanRange: '원거리 (차기 사정거리)',
              weapons: 'ការទាត់ត្រង់ (Front Kick), ការទាត់ធាក់ (Push/Side Kick)',
              strategy: 'ដៃមិនអាចទៅដល់បានឡើយ។ ប្រើជើងដើម្បីរក្សាគម្លាតសុវត្ថិភាព ឬផ្តួលគូប្រកួតពីចម្ងាយ។',
              dangerWarning: 'កុំព្យាយាមចូលដាល់ពីចម្ងាយនេះ ព្រោះអ្នកនឹងត្រូវគេទាត់រារាំង។',
            },
            {
              range: 'ចម្ងាយដាល់ (Punching Distance / Arm’s Length)',
              koreanRange: '중거리 (지르기 사정거리)',
              weapons: 'កណ្តាប់ដៃត្រង់ (Straight Punch), កណ្តាប់ដៃទំពក់ (Hook), បាតដៃ (Palm Strike)',
              strategy: 'នៅចម្ងាយមួយដៃលាត កុំព្យាយាមទាត់ឱ្យសោះ ព្រោះអ្នកនឹងខកគោលដៅ ឬត្រូវគេចាប់ជើង។ ផ្តោតលើការដាល់ចំមុខ ឬចង្កា។',
              dangerWarning: 'ការទាត់នៅចម្ងាយនេះងាយនឹងត្រូវគេចាប់ជាប់ និងបោកទម្លាក់។',
            },
            {
              range: 'ចម្ងាយប្រកៀកខ្លាំង (Clinch / In-Fighting Distance)',
              koreanRange: '초근접거리 (무릎·팔굽 사정거리)',
              weapons: 'កែងដៃ (Elbow Strikes), ជង្គង់ (Knee Strikes), ការវាយក្បាល (Headbutts)',
              strategy: 'នៅពេលឱបជាប់ ឬប្រកៀកគ្នា ដៃ និងជើងវែងគ្មានកម្លាំងទេ។ ប្រើកែងកាត់ និងជង្គង់បុកចូលពោះ ឬក្រលៀន។',
              dangerWarning: 'កុំដកថយជាបន្ទាត់ត្រង់ពេលត្រូវគេឱបជាប់ ត្រូវបុកជង្គង់ភ្លាមៗ។',
            },
          ],
          multipleAttackerDoctrine: {
            title: 'យុទ្ធសាស្ត្រពេលជួបគូប្រកួតច្រើននាក់ (Multiple Attackers)',
            rule: 'ត្រូវតែផ្តួលគូប្រកួតម្នាក់ៗដោយការវាយតែមួយក្បាច់ (One-Blow Incapacitation)។',
            tactics: [
              'ការប្រើក្បាច់រឹងផ្តួលឱ្យដួលលឿន កាត់បន្ថយចំនួនគូប្រកួតដែលអាចឡោមព័ទ្ធអ្នក។',
              'មិនត្រូវក្រៀក ឬបោកទៅដីឡើយ ព្រោះអ្នកផ្សេងទៀតនឹងទាត់អ្នកពេលអ្នកនៅនឹងកម្រាល។',
              'រក្សាការផ្លាស់ទីជានិច្ច ដើម្បីឱ្យគូប្រកួតរារាំងផ្លូវគ្នាឯង។',
            ],
          },
        },
        circularSoft: {
          title: 'បច្ចេកទេសរង្វង់ ឬកម្លាំងទន់ (Circular / Soft Techniques)',
          koreanTerm: '원형적 유술 (Yu-sul)',
          concept: 'ការបង្វែរ និងបញ្ឆៀងកម្លាំងវាយប្រហាររបស់គូប្រកួត ដោយមិនប្រឈមមុខទល់នឹងកម្លាំងបាយដោយផ្ទាល់។',
          description:
            'គូប្រកួតអាចត្រូវបានទាញ ឬរុញចូលទៅក្នុងទីតាំងដែលយើងអាចអនុវត្តក្បាច់បត់សន្លាក់ ការច្របាច់ក ឬក្បាច់ផ្តួល។ បច្ចេកទេសទន់អនុញ្ញាតឱ្យទប់ស្កាត់គូប្រកួតដោយមិនបង្ករបួសពិការភាពអចិន្ត្រៃយ៍។',
          techniques: ['ការបត់កដៃ (Wrist Locks)', 'ការសង្កត់កែង (Elbow Hyper-extension)', 'ការបោកដោយរង្វង់ (Circular Throws)', 'ការក្រៀកក (Strangleholds)'],
          principles: [
            {
              name: 'គោលការណ៍រង្វង់ (Won / 圓)',
              desc: 'ប្រើកម្លាំងបង្វិលរាងកាយដើម្បីបង្វែរកម្លាំងវាយលុកឱ្យខុសទិសដៅ។',
            },
            {
              name: 'គោលការណ៍ទឹក (Ryu / 流)',
              desc: 'សម្របខ្លួនតាមចលនារបស់គូប្រកួត ដូចជាទឹកដែលហូរគេចឧបសគ្គ។',
            },
            {
              name: 'គោលការណ៍ភាពសុខដុម (Hwa / 和)',
              desc: 'បញ្ចូលគ្នានូវកម្លាំងរបស់អ្នកជាមួយកម្លាំងគូប្រកួត ដើម្បីគ្រប់គ្រងស្ថានការណ៍។',
            },
          ],
          subdualBenefit: 'អត្ថប្រយោជន៍៖ សមស្របបំផុតសម្រាប់កងកម្លាំងច្បាប់ និងការការពារខ្លួនស្របច្បាប់ ដោយជៀសវាងការទទួលទោសពីបទបង្ករបួសហួសហេតុ។',
        },
        comparisonMatrix: [
          { dimension: 'គោលបំណងចម្បង', linearHard: 'បំផ្លាញ និងផ្តួលភ្លាមៗ', circularSoft: 'គ្រប់គ្រង និងទប់ស្កាត់ដោយសុវត្ថិភាព' },
          { dimension: 'កម្លាំងប្រើប្រាស់', linearHard: 'កម្លាំងផ្ទុះផ្ទាល់ខ្លួន', circularSoft: 'កម្លាំងគាស់ និងកម្លាំងរបស់គូប្រកួត' },
          { dimension: 'ចម្ងាយសមស្រប', linearHard: 'ចម្ងាយទាត់ និងដាល់ច្បាស់លាស់', circularSoft: 'ចម្ងាយចាប់កៀក និងប្រកៀក' },
          { dimension: 'ហានិភ័យផ្លូវច្បាប់', linearHard: 'ខ្ពស់ (អាចបង្ករបួសធ្ងន់)', circularSoft: 'ទាប (ការគ្រប់គ្រងសមស្រប)' },
          { dimension: 'ស្ថានភាពមនុស្សច្រើន', linearHard: 'ស័ក្តិសមបំផុត (វាយហើយដកថយ)', circularSoft: 'គ្រោះថ្នាក់ (ងាយជាប់ដៃនឹងមនុស្សម្នាក់)' },
        ],
      }
    case 'zh':
      return {
        title: '反击技术决策：直线刚术 vs 圆周柔术深度对比',
        koreanTitle: '직선적 강술(剛術)과 원형적 유술(柔術)의 비교',
        summary: '在跆拳道防身体系中，应对暴力侵害存在两种根本不同的反击路径，必须根据战术间距与威胁烈度精准切换：',
        linearHard: {
          title: '直线性打击技术 (刚术 / Linear Techniques)',
          koreanTerm: '직선적 강술 (Gang-sul)',
          concept: '以绝对速度、质量与贯穿力实施线性爆破，追求“一击必杀”终结暴行。',
          description:
            '涵盖拳击、蹬踢、头槌、肘击与膝撞。技术的选择完全取决于你与暴徒之间的“绝对间距”。',
          distancePyramid: [
            {
              range: '踢击距离 (Kicking Range / 远距离)',
              koreanRange: '원거리 (차기 사정거리)',
              weapons: '前踢 (Front Kick)、侧踹推踢 (Push / Side Kick)',
              strategy: '双手无法触及。必须利用下肢杠杆建立 2 米安全隔离带，拦截暴徒冲锋或远距离重击下颌。',
              dangerWarning: '切勿在此距离盲目出拳，否则必然被对手下肢迎击破坏重心。',
            },
            {
              range: '拳击距离 (Punching Range / 一臂之遥)',
              koreanRange: '중거리 (지르기 사정거리)',
              weapons: '直拳 (Straight Punch)、平勾拳 (Hook)、掌根重击 (Palm Strike)',
              strategy: '处于一臂之遥时，严禁起高腿踢击，极易被暴徒抱腿摔倒。应全身沉桥以重拳贯穿心窝或下巴。',
              dangerWarning: '此间距起腿极难命中目标，且失去单腿支撑力，极度脆弱。',
            },
            {
              range: '极近身缠斗 (Clinch / In-Fighting)',
              koreanRange: '초근접거리 (무릎·팔굽 사정거리)',
              weapons: '平肘/挑肘 (Elbow Strikes)、顶膝 (Knee Strikes)、头槌 (Headbutts)',
              strategy: '当双方胸膛贴紧或被抓抱衣领时，拳腿由于加速距离不足完全失效。唯有肘膝能造成致命骨裂。',
              dangerWarning: '贴身时切勿直立后仰挣扎，必须立即压低重心以内围膝肘破坏其平衡。',
            },
          ],
          multipleAttackerDoctrine: {
            title: '多敌围困处置原则 (Multiple Attackers)',
            rule: '必须坚持“单次重击击溃一人”原则，绝不可陷入地面纠缠。',
            tactics: [
              '以直线性重拳或低位蹬膝瞬间使一人失去行动力，迅速减少被围攻威胁源。',
              '严禁对单一暴徒使用缠斗或倒地绞杀，否则会被其他同伙围殴踢踏。',
              '持续沿折线或圆周走位，迫使多名暴徒互相阻挡移动视线与进攻路线。',
            ],
          },
        },
        circularSoft: {
          title: '圆周性化解与关节锁定制服 (柔术 / Circular Techniques)',
          koreanTerm: '원형적 유술 (Yu-sul)',
          concept: '避实击虚，通过借力顺力与圆周卸力，将暴徒的攻击动能转化为自身的擒锁控制力。',
          description:
            '将暴徒牵引至失去下盘重心的脆弱角度，顺势施加反关节折别、裸绞或地面固技。避免造成永久性致命创伤即可彻底消除威胁。',
          techniques: ['抓腕折腕 (Wrist Locks)', '肘部超伸压迫 (Elbow Hyperextension)', '顺势扫踢摔跌 (Circular Sweeps)', '颈部绞杀控制 (Strangleholds)'],
          principles: [
            {
              name: '圆之原理 (Won / 圓)',
              desc: '身体如车轮般旋转，使暴徒的正面直线冲击力落空滑过。',
            },
            {
              name: '水之原理 (Ryu / 流)',
              desc: '不与强敌正面对撞硬抗，顺应外力而流动，见缝插针渗透反击。',
            },
            {
              name: '和之原理 (Hwa / 和)',
              desc: '自身力量与对手动量合二为一，瞬间剥夺其机动自由度。',
            },
          ],
          subdualBenefit: '核心优势：极其适合执法人员、保镖及防卫过当法律约束下的平民防身，在合规前提下有效制暴。',
        },
        comparisonMatrix: [
          { dimension: '战术核心目标', linearHard: '迅速重创击溃，消除攻击能力', circularSoft: '控制关节，避免致命伤害' },
          { dimension: '能量来源', linearHard: '自身蹬地扭腰的爆发力', circularSoft: '对手冲量与杠杆支点力矩' },
          { dimension: '最佳应用场景', linearHard: '空旷环境、生死存亡威胁', circularSoft: '狭窄空间、醉汉纠缠、执法逮捕' },
          { dimension: '防卫过当法律风险', linearHard: '极高（易致颅脑骨折）', circularSoft: '极低（比例原则控制）' },
          { dimension: '一对多实战能力', linearHard: '极高（打完即走，保持机动）', circularSoft: '极低（锁死一人期间易遭突袭）' },
        ],
      }
    case 'ko':
      return {
        title: '반격 기술의 양대 축: 직선적 강술(剛術) vs 원형적 유술(柔術)',
        koreanTitle: '직선적 강술(剛術)과 원형적 유술(柔術)의 비교',
        summary: '태권도 호신술 체계는 공격자와의 거리와 법적·상황적 위협 수준에 따라 두 가지 상반된 반격 메커니즘을 구사합니다:',
        linearHard: {
          title: '직선적 타격기 (강술 / Linear Techniques)',
          koreanTerm: '직선적 강술 (Gang-sul)',
          concept: '폭발적인 가속도와 파괴력을 바탕으로 직선 궤적을 그리며 타격하여, 단 한 번에 상대를 무력화하는 기술입니다.',
          description:
            '지르기, 차기, 박치기, 팔굽 및 무릎 치기가 포함됩니다. 기술의 선택은 공격자와의 "상대적 거리"에 의해 엄격히 결정됩니다.',
          distancePyramid: [
            {
              range: '차기 사정거리 (Kicking Range / 원거리)',
              koreanRange: '원거리 (차기 사정거리)',
              weapons: '앞차기 (Front Kick), 뻗어차기/옆차기 (Push / Side Kick)',
              strategy: '손이 닿지 않는 거리에서는 긴 다리를 이용해 안전거리를 확보하거나 상대의 진입을 원천 차단합니다.',
              dangerWarning: '이 거리에서 무리하게 주먹을 뻗으면 허점이 노출되어 상대의 역습을 허용합니다.',
            },
            {
              range: '지르기 사정거리 (Punching Range / 중거리)',
              koreanRange: '중거리 (지르기 사정거리)',
              weapons: '몸통지르기 (Straight Punch), 돌려지르기 (Hook), 바탕손 턱치기 (Palm Strike)',
              strategy: '한 팔 거리에서는 절대 발차기를 시도하지 마십시오. 빗나가거나 다리를 잡힐 위험이 높으므로 주먹과 손바닥 타격에 집중합니다.',
              dangerWarning: '한 팔 거리에서 킥을 차면 회전 반경이 부족해 위력이 급감하고 넘어지기 쉽습니다.',
            },
            {
              range: '초근접거리 (Clinch / In-Fighting)',
              koreanRange: '초근접거리 (무릎·팔굽 사정거리)',
              weapons: '팔굽치기 (Elbow Strikes), 무릎치기 (Knee Strikes), 박치기 (Headbutts)',
              strategy: '몸이 밀착되거나 멱살을 잡힌 초근접 상태에서는 주먹과 발차기가 무용지물입니다. 체중을 실은 팔굽과 무릎으로 급소를 파괴합니다.',
              dangerWarning: '초근접거리에서 뒤로 물러서며 손을 뻗으면 상대의 완력에 끌려가므로 즉시 무게중심을 낮추고 팔굽으로 반격해야 합니다.',
            },
          ],
          multipleAttackerDoctrine: {
            title: '다수 공격자 대처 전술 (Multiple Attackers)',
            rule: '반드시 "일격에 한 명씩 제압(One-Blow Incapacitation)"하는 강술 타격기를 구사해야 합니다.',
            tactics: [
              '단 한 번의 결정타로 상대를 쓰러뜨려 포위하는 적의 수를 빠르게 줄여나갑니다.',
              '절대 한 명과 엉겨 붙거나 바닥으로 넘어져 관절기를 시도하지 마십시오. 다른 공격자들의 발길질에 노출됩니다.',
              '적들이 서로의 동선을 가로막도록 끊임없이 측면과 외곽으로 이동합니다.',
            ],
          },
        },
        circularSoft: {
          title: '원형적 관절 제어술 (유술 / Circular Techniques)',
          koreanTerm: '원형적 유술 (Yu-sul)',
          concept: '상대방의 힘에 정면으로 맞서지 않고, 힘의 궤적을 둥글게 흘려보내 관절기나 조르기로 제압하는 기술입니다.',
          description:
            '공격자를 균형이 무너진 위치로 유도한 후 손목 꺾기, 팔굽 꺾기, 목 조르기 등으로 영구적인 치명상 없이 안전하게 제압합니다.',
          techniques: ['손목 비틀어꺾기 (Wrist Locks)', '팔굽 눌러꺾기 (Elbow Hyperextension)', '걸어넘기기 (Sweeps)', '목조르기 (Strangleholds)'],
          principles: [
            {
              name: '원(圓)의 원리',
              desc: '직선으로 돌진하는 상대의 공격력을 회전 원심력으로 흘려보냅니다.',
            },
            {
              name: '유(流)의 원리',
              desc: '흐르는 물처럼 유연하게 상대의 힘에 순응하며 빈틈으로 침투합니다.',
            },
            {
              name: '화(和)의 원리',
              desc: '상대의 힘과 나의 힘을 하나로 합쳐 상대의 균형을 완전히 빼앗습니다.',
            },
          ],
          subdualBenefit: '영구적인 신체 손상을 피하면서 상대를 굴복시킬 수 있어, 정당방위 성립 및 민·형사상 법적 책임 회피에 매우 유리합니다.',
        },
        comparisonMatrix: [
          { dimension: '핵심 목표', linearHard: '즉각적인 신체적 파괴 및 전투 불능화', circularSoft: '관절 제어 및 안전한 굴복' },
          { dimension: '힘의 원천', linearHard: '신체 질량 가속도 및 폭발력', circularSoft: '상대의 돌진력 및 지렛대 회전력' },
          { dimension: '거리 적합성', linearHard: '원거리 킥 및 중거리 주먹', circularSoft: '초근접 몸싸움 및 맞잡은 상태' },
          { dimension: '정당방위 법적 위험', linearHard: '높음 (골절 및 중상 유발)', circularSoft: '낮음 (비례성 원칙 부합)' },
          { dimension: '다수 적 조우 시', linearHard: '매우 유리 (치고 빠지는 기동성)', circularSoft: '매우 위험 (한 명에 묶여 기습 허용)' },
        ],
      }
    default:
      return {
        title: 'Tactical Retaliation: Linear (Hard) vs Circular (Soft) Techniques',
        koreanTitle: '직선적 강술(剛術)과 원형적 유술(柔術)의 비교',
        summary: 'In Taekwondo Hosinsul, counter-offensive retaliations are bifurcated into two foundational doctrines depending on combat distance and threat severity:',
        linearHard: {
          title: 'Linear (or Hard) Techniques',
          koreanTerm: '직선적 강술 (Gang-sul)',
          concept: 'Delivering direct, explosive, and devastating kinetic strikes designed to incapacitate the threat with a single blow.',
          description:
            'Includes punching, kicking, headbutts, knees, and elbow strikes. Technique choice is strictly determined by the exact spatial distance between you and the assailant.',
          distancePyramid: [
            {
              range: 'Kicking Distance (Long Range)',
              koreanRange: '원거리 (차기 사정거리)',
              weapons: 'Front Snap Kicks, Side Push Kicks, Turning Kicks',
              strategy: 'Assailant is out of arm’s reach. Keep distance, stop forward charges, or break knee joints from outside their striking range.',
              dangerWarning: 'Never attempt punches from kicking distance; you will fall short and be intercepted.',
            },
            {
              range: 'Punching Distance (Arm’s Length / Medium Range)',
              koreanRange: '중거리 (지르기 사정거리)',
              weapons: 'Straight Punches, Palm Heel Strikes, Hooks, Uppercuts',
              strategy: 'At arm’s length, NEVER try to kick as you will lack rotational room and risk being tackled. Deliver heavy straight punches to the jaw or solar plexus.',
              dangerWarning: 'Kicking at arm’s length severely compromises your single-leg balance and grants them an easy leg grab.',
            },
            {
              range: 'Clinch / In-Fighting Distance (Short Range)',
              koreanRange: '초근접거리 (무릎·팔굽 사정거리)',
              weapons: 'Elbow Strikes, Knee Strikes, Headbutts',
              strategy: 'When grabbed or pressed chest-to-chest, long punches and kicks are useless. Drive horizontal and upward elbows into the jaw, and smash knees into the groin.',
              dangerWarning: 'Do not pull backward linearly when grabbed; drop weight and drive upward elbows immediately.',
            },
          ],
          multipleAttackerDoctrine: {
            title: 'Multiple Attacker Survival Doctrine',
            rule: 'Assailants must be neutralized with a single strike (One-Blow Incapacitation).',
            tactics: [
              'Incapacitating one attacker with a single decisive blow reduces the numerical odds instantly.',
              'Never grapple or go to the ground; other attackers will kick and stomp you while pinned.',
              'Maintain constant angled footwork so attackers obstruct each other’s movement line.',
            ],
          },
        },
        circularSoft: {
          title: 'Circular (or Soft) Techniques',
          koreanTerm: '원형적 유술 (Yu-sul)',
          concept: 'Redirecting, deflecting, and manipulating the attacker’s incoming force rather than colliding against it head-on.',
          description:
            'The challenger is drawn into an off-balance trajectory where a joint lock, hyper-extension, stranglehold, or takedown can be applied. Subdues the assailant without inflicting permanent or lethal trauma.',
          techniques: ['Wrist Locks (Kkeokgi)', 'Elbow Hyperextension', 'Sweeping Throws (Neomgigi)', 'Strangleholds (Joligi)'],
          principles: [
            {
              name: 'Circle Principle (Won / 圓)',
              desc: 'Dissipating linear force by guiding it along an elliptical or circular arc.',
            },
            {
              name: 'Flow Principle (Ryu / 流)',
              desc: 'Adapting like water—yielding when pushed and penetrating when pulled.',
            },
            {
              name: 'Harmony Principle (Hwa / 和)',
              desc: 'Combining your mass with the opponent’s momentum to strip their balance.',
            },
          ],
          subdualBenefit: 'Subdues the attacker cleanly, avoiding severe permanent injury—critical for legal self-defense proportionality and civilian law.',
        },
        comparisonMatrix: [
          { dimension: 'Primary Objective', linearHard: 'Incapacitation via ballistic shock', circularSoft: 'Control and submission via joint leverage' },
          { dimension: 'Power Generation', linearHard: 'Explosive core kinetic acceleration', circularSoft: 'Rotational torque & opponent’s momentum' },
          { dimension: 'Optimal Range', linearHard: 'Long kicking & medium punching distance', circularSoft: 'Close clinch, wrist-grab, or lapel grapple' },
          { dimension: 'Legal Liability', linearHard: 'High risk of excessive force / bone fracture', circularSoft: 'Low risk / defensible proportional subdual' },
          { dimension: 'Multiple Attackers', linearHard: 'Superior (hit-and-move mobility)', circularSoft: 'Dangerous (entangles defender with one foe)' },
        ],
      }
  }
}

// -----------------------------------------------------------------------------
// 3. VITAL PRESSURE POINTS (KUPSO) & LEGAL FRAMEWORK
// -----------------------------------------------------------------------------
export function getVitalPointsGuide(lang: string): VitalPointsGuideData {
  switch (lang) {
    case 'km':
      return {
        title: 'ចំណុចខ្សោយសំខាន់ៗ (Kupso) & ក្របខ័ណ្ឌច្បាប់ការពារខ្លួន',
        koreanTitle: '인체 주요 급소(急所)와 정당방위 법률 가이드',
        summary: 'ចំណុចខ្សោយ (Kupso) គឺជាតំបន់រសើបបំផុតនៃរាងកាយមនុស្ស ដែលសរសៃប្រសាទ សរសៃឈាម និងសរីរាង្គសំខាន់ៗប្រមូលផ្តុំគ្នា។ ការយល់ដឹងពីចំណុចទាំងនេះមានសារៈសំខាន់សម្រាប់ការរស់រានមានជីវិតក្នុងស្ថានភាពអាសន្ន។',
        legalWarning: 'ការព្រមានផ្នែកច្បាប់៖ បច្ចេកទេសវាយចំណុចខ្សោយត្រូវតែប្រើប្រាស់ក្នុងកម្រិតសមស្របទៅនឹងការគំរាមកំហែង (Proportionality) តែប៉ុណ្ណោះ ដើម្បីការពារកុំឱ្យក្លាយជាបទឧក្រិដ្ឋហួសដែនការពារខ្លួន។',
        vitalPoints: [
          {
            id: 'vp-temple',
            name: 'សៀតផ្កា (Temple / Gwanjanori)',
            koreanName: '관자놀이 (Gwanjanori)',
            romanized: 'Gwanjanori',
            location: 'ផ្នែកចំហៀងនៃក្បាល ចន្លោះភ្នែក និងត្រចៀក',
            targetArea: 'high',
            anatomicalStructure: 'ឆ្អឹងលលាដ៍ក្បាលស្តើង និងសរសៃឈាមមេខួរក្បាល',
            impactEffect: 'ធ្វើឱ្យបាត់បង់ស្មារតី វិលមុខធ្ងន់ធ្ងរ ឬសន្លប់ភ្លាមៗ',
            recommendedStrike: 'កណ្តាប់ដៃខ្នង (Backfist), កែងដៃ (Elbow), បាតដៃ',
            dangerLevel: 'Lethal / Critical',
          },
          {
            id: 'vp-philtrum',
            name: 'រន្ធច្រមុះលើ / ចង្អូរច្រមុះ (Philtrum / Injung)',
            koreanName: '인중 (Injung)',
            romanized: 'Injung',
            location: 'ចន្លោះក្រោមច្រមុះ និងបបូរមាត់ខាងលើ',
            targetArea: 'high',
            anatomicalStructure: 'មជ្ឈមណ្ឌលសរសៃប្រសាទផ្ទៃមុខ និងឆ្អឹងខ្ចី',
            impactEffect: 'ស្រវាំងភ្នែក ហូរទឹកភ្នែកភ្លាមៗ ឈឺចាប់ខ្លាំង និងបាត់បង់លំនឹង',
            recommendedStrike: 'កណ្តាប់ដៃមុខ (Ap-jireugi), កណ្តាប់ដៃខ្នង (Deungjumeok)',
            dangerLevel: 'Severe',
          },
          {
            id: 'vp-carotid',
            name: 'សរសៃឈាមកញ្ចឹងក (Carotid Sinus / Mokdongmaek)',
            koreanName: '목동맥 (Carotid Sinus)',
            romanized: 'Mokdongmaek',
            location: 'ផ្នែកចំហៀងនៃក ក្រោមឆ្អឹងថ្គាម',
            targetArea: 'high',
            anatomicalStructure: 'សរសៃឈាមធំផ្គត់ផ្គង់ខួរក្បាល និងសរសៃប្រសាទ Vagus',
            impactEffect: 'សម្ពាធឈាមធ្លាក់ចុះភ្លាមៗ បណ្តាលឱ្យសន្លប់ក្នុងរយៈពេល ៣-៥ វិនាទី',
            recommendedStrike: 'កាប់ដៃកាំបិត (Sonnal Mok-chigi)',
            dangerLevel: 'Lethal / Critical',
          },
          {
            id: 'vp-solar-plexus',
            name: 'ចុងដង្ហើម (Solar Plexus / Myongchi)',
            koreanName: '명치 (Myongchi)',
            romanized: 'Myongchi',
            location: 'កណ្តាលទ្រូង ក្រោមឆ្អឹងជំនីរ',
            targetArea: 'mid',
            anatomicalStructure: 'បណ្តុំសរសៃប្រសាទ Celiac និងសន្ទះទ្រូង (Diaphragm)',
            impactEffect: 'ស្ទះដង្ហើម ដកដង្ហើមមិនចេញ ខ្វិនសាច់ដុំទ្រូងបណ្តោះអាសន្ន',
            recommendedStrike: 'កណ្តាប់ដៃត្រង់ (Baro-jireugi), ធាក់ត្រង់ (Front Kick)',
            dangerLevel: 'Severe',
          },
          {
            id: 'vp-floating-ribs',
            name: 'ឆ្អឹងជំនីរអណ្តែត (Floating Ribs / Galbi)',
            koreanName: '갈비뼈 (Floating Ribs)',
            romanized: 'Galkkol',
            location: 'ចំហៀងពោះខាងក្រោម (ឆ្អឹងជំនីរទី ១១ និង ១២)',
            targetArea: 'mid',
            anatomicalStructure: 'ឆ្អឹងជំនីរដែលគ្មានការការពារ និងថ្លើម/អណ្តើក',
            impactEffect: 'បាក់ឆ្អឹងជំនីរ ការឈឺចាប់ធ្ងន់ធ្ងរ ពិបាកដកដង្ហើម',
            recommendedStrike: 'ទាត់កាត់ (Roundhouse Kick), កែងផ្ដេក',
            dangerLevel: 'Severe',
          },
          {
            id: 'vp-groin',
            name: 'ប្រដាប់បន្តពូជ / ក្រលៀន (Groin / Nangsim)',
            koreanName: '낭심 (Nangsim)',
            romanized: 'Nangsim',
            location: 'ចន្លោះភ្លៅទាំងពីរ',
            targetArea: 'low',
            anatomicalStructure: 'បណ្តុំសរសៃប្រសាទ Pudendal ដ៏រសើបបំផុត',
            impactEffect: 'ការឈឺចាប់ជាទម្ងន់ ធ្វើឱ្យគូប្រកួតដួលបត់ជើងភ្លាមៗ',
            recommendedStrike: 'ទាត់កែងជើងឡើងលើ (Front Snap Kick), ជង្គង់បុក',
            dangerLevel: 'Severe',
          },
        ],
        legalFramework: {
          title: 'ក្របខ័ណ្ឌ ៤ ដំណាក់កាលនៃការការពារខ្លួនស្របច្បាប់',
          stages: [
            { step: 1, title: 'ការដឹងខ្លួន & ជៀសវាង (Awareness)', desc: 'ជៀសវាងតំបន់គ្រោះថ្នាក់ និងរក្សាការប្រុងប្រយ័ត្នដើម្បីកុំឱ្យធ្លាក់ក្នុងអន្ទាក់។' },
            { step: 2, title: 'ការសម្របសម្រួល & ពាក្យសំដី (De-escalation)', desc: 'ព្យាយាមប្រើពាក្យសំដីដើម្បីបន្ធូរបន្ថយកំហឹង និងបង្កើតគម្លាតសុវត្ថិភាព។' },
            { step: 3, title: 'ការការពារសមស្រប (Proportional Defense)', desc: 'ប្រើកម្លាំងត្រឹមតែកម្រិតដែលអាចបញ្ឈប់ការវាយប្រហារប៉ុណ្ណោះ មិនត្រូវវាយបន្ថែមពេលគេឈប់។' },
            { step: 4, title: 'ការដកថយ & រាយការណ៍ (Disengage & Report)', desc: 'រត់គេចទៅកន្លែងមានសុវត្ថិភាពភ្លាមៗ ហើយទាក់ទងសមត្ថកិច្ចដើម្បីរាយការណ៍ហេតុការណ៍។' },
          ],
        },
      }
    case 'zh':
      return {
        title: '人体核心急所要穴 (Kupso) 与正当防卫法律准则',
        koreanTitle: '인체 주요 급소(急所)와 정당방위 법률 가이드',
        summary: '急所（Kupso）是人体神经丛、大血管及内脏极度脆弱的生理交汇点。在极端威胁下，精准击打要害能瞬间剥夺暴徒侵害能力。',
        legalWarning: '法律红线警示：防身术打击要害必须严格遵循“必要限度原则”（Proportionality），在脱离危险后必须立即停手，严禁实施报复性追击。',
        vitalPoints: [
          {
            id: 'vp-temple',
            name: '太阳穴 (Temple / Gwanjanori)',
            koreanName: '관자놀이 (Gwanjanori)',
            romanized: 'Gwanjanori',
            location: '眉梢与耳廓之间、颅骨最薄弱部位',
            targetArea: 'high',
            anatomicalStructure: '脑膜中动脉与蝶骨交汇处',
            impactEffect: '导致脑震荡、急性颅内压增高、瞬间休克昏迷',
            recommendedStrike: '反背拳 (Backfist)、扫肘 (Horizontal Elbow)、掌根重击',
            dangerLevel: 'Lethal / Critical',
          },
          {
            id: 'vp-philtrum',
            name: '人中穴 (Philtrum / Injung)',
            koreanName: '인중 (Injung)',
            romanized: 'Injung',
            location: '鼻下唇上三分之一凹陷处',
            targetArea: 'high',
            anatomicalStructure: '面部三叉神经终末支集中区',
            impactEffect: '眼球剧烈充血落泪、剧烈刺痛、平衡中枢紊乱后倾',
            recommendedStrike: '正拳直击 (Ap-jireugi)、反背拳 (Deungjumeok)',
            dangerLevel: 'Severe',
          },
          {
            id: 'vp-carotid',
            name: '颈动脉窦 (Carotid Sinus / Mokdongmaek)',
            koreanName: '목동맥 (Carotid Sinus)',
            romanized: 'Mokdongmaek',
            location: '下颌角下方颈侧大动脉搏动处',
            targetArea: 'high',
            anatomicalStructure: '迷走神经反射敏感带与颈总动脉',
            impactEffect: '诱发迷走神经反射引起心率骤降，3至5秒内脑缺血倒地',
            recommendedStrike: '手刀砍颈 (Sonnal Mok-chigi)',
            dangerLevel: 'Lethal / Critical',
          },
          {
            id: 'vp-solar-plexus',
            name: '心窝 / 鸠尾 (Solar Plexus / Myongchi)',
            koreanName: '명치 (Myongchi)',
            romanized: 'Myongchi',
            location: '胸骨下端凹陷处正中',
            targetArea: 'mid',
            anatomicalStructure: '腹腔神经丛与膈肌支点',
            impactEffect: '膈肌痉挛无法换气窒息、剧烈抽搐折腰跪地',
            recommendedStrike: '正拳贯击、前蹬踢 (Front Kick)、掌根推撞',
            dangerLevel: 'Severe',
          },
          {
            id: 'vp-floating-ribs',
            name: '游离浮肋 (Floating Ribs / Galbi)',
            koreanName: '갈비뼈 (Floating Ribs)',
            romanized: 'Galkkol',
            location: '侧腰部第 11、12 浮肋外侧',
            targetArea: 'mid',
            anatomicalStructure: '无胸骨保护之软骨与肝脾后方',
            impactEffect: '肋骨骨折刺痛、剧烈神经反射导致躯干侧向瘫软',
            recommendedStrike: '旋风踢/横踢 (Roundhouse Kick)、平肘横削',
            dangerLevel: 'Severe',
          },
          {
            id: 'vp-groin',
            name: '裆部要害 (Groin / Nangsim)',
            koreanName: '낭심 (Nangsim)',
            romanized: 'Nangsim',
            location: '双腿根部生殖器官要害',
            targetArea: 'low',
            anatomicalStructure: '极度密集的阴部神经丛',
            impactEffect: '产生毁灭性剧痛、下腹剧烈痉挛、瞬间丧失全部行动力',
            recommendedStrike: '脚背上弹踢 (Front Snap Kick)、顶膝 (Knee Strike)',
            dangerLevel: 'Severe',
          },
        ],
        legalFramework: {
          title: '法治社会四维正当防卫链条',
          stages: [
            { step: 1, title: '环境预警与回避 (Avoidance)', desc: '保持戒备态势，危险苗头初现即刻向安全明亮区域转移。' },
            { step: 2, title: '言语降温与阻隔 (De-escalation)', desc: '举起双手掌心向前表明无冲突意图，拉开 2 米以上安全对峙间距。' },
            { step: 3, title: '等比例果断制止 (Proportional Action)', desc: '遭遇物理侵害时以最小必要武力击退对手，对方停止侵害即刻停止反击。' },
            { step: 4, title: '迅速脱离与报警 (Disengage & Report)', desc: '彻底脱离危险现场并保护自身安全，第一时间拨打警方电话说明遭遇正当防卫。' },
          ],
        },
      }
    case 'ko':
      return {
        title: '인체 주요 급소(急所)와 정당방위 법률 가이드',
        koreanTitle: '인체 주요 급소(急所)와 정당방위 법률 가이드',
        summary: '급소(急所)는 인체에서 신경과 혈관이 피부 표면에 가깝거나 뼈의 보호를 받지 못하는 치명적인 취약 부위입니다. 위기 상황에서 급소를 정확히 가격하면 최소한의 힘으로 공격을 무력화할 수 있습니다.',
        legalWarning: '법적 경고: 급소 타격은 상대방에게 중대한 신체적 손상을 입힐 수 있으므로, 생명에 직접적인 위협이 있을 때에만 정당방위 비례성의 원칙에 맞추어 최소한으로 행사해야 합니다.',
        vitalPoints: [
          {
            id: 'vp-temple',
            name: '관자놀이 (Temple / Gwanjanori)',
            koreanName: '관자놀이 (Gwanjanori)',
            romanized: 'Gwanjanori',
            location: '눈꼬리와 귀 사이의 얇은 두개골 부위',
            targetArea: 'high',
            anatomicalStructure: '중뇌막동맥 및 얇은 측두골',
            impactEffect: '뇌진탕 유발, 시신경 마비 및 순간적인 실신',
            recommendedStrike: '등주먹 바깥치기 (Backfist), 팔굽 돌려치기 (Elbow)',
            dangerLevel: 'Lethal / Critical',
          },
          {
            id: 'vp-philtrum',
            name: '인중 (Philtrum / Injung)',
            koreanName: '인중 (Injung)',
            romanized: 'Injung',
            location: '코 바로 밑과 윗입술 사이의 중앙 홈',
            targetArea: 'high',
            anatomicalStructure: '안면 삼차신경 종말 집결 부위',
            impactEffect: '눈물샘 폭발, 극심한 안면 통증 및 중심 후방 전도',
            recommendedStrike: '바탕손 앞치기, 등주먹 앞치기 (Deungjumeok)',
            dangerLevel: 'Severe',
          },
          {
            id: 'vp-carotid',
            name: '목동맥 / 경동맥동 (Carotid Sinus / Mokdongmaek)',
            koreanName: '목동맥 (Carotid Sinus)',
            romanized: 'Mokdongmaek',
            location: '턱관절 아래 목 옆면의 대동맥 맥박 부위',
            targetArea: 'high',
            anatomicalStructure: '미주신경 수용체 및 총경동맥',
            impactEffect: '혈압 급강하 유발로 3~5초 이내 뇌혈류 차단 및 기절',
            recommendedStrike: '손날 목치기 (Sonnal Mok-chigi)',
            dangerLevel: 'Lethal / Critical',
          },
          {
            id: 'vp-solar-plexus',
            name: '명치 (Solar Plexus / Myongchi)',
            koreanName: '명치 (Myongchi)',
            romanized: 'Myongchi',
            location: '가슴뼈 바로 밑 복부 중앙 오목한 부위',
            targetArea: 'mid',
            anatomicalStructure: '복강신경총 및 횡격막 부착부',
            impactEffect: '횡격막 경련으로 순간적 호흡 마비 및 주저앉음',
            recommendedStrike: '몸통 바른지르기 (Straight Punch), 앞차기 (Front Kick)',
            dangerLevel: 'Severe',
          },
          {
            id: 'vp-floating-ribs',
            name: '갈비뼈 / 늑골 (Floating Ribs / Galbi)',
            koreanName: '갈비뼈 (Floating Ribs)',
            romanized: 'Galkkol',
            location: '옆구리 하단부 제11, 12번 부유 늑골',
            targetArea: 'mid',
            anatomicalStructure: '흉골에 지지되지 않는 얇은 연골 및 간/비장',
            impactEffect: '늑골 골절 및 심한 내장 충격으로 신체 굴곡',
            recommendedStrike: '돌려차기 (Roundhouse Kick), 팔굽 옆치기',
            dangerLevel: 'Severe',
          },
          {
            id: 'vp-groin',
            name: '낭심 (Groin / Nangsim)',
            koreanName: '낭심 (Nangsim)',
            romanized: 'Nangsim',
            location: '양 대퇴골 사이 생식기 부위',
            targetArea: 'low',
            anatomicalStructure: '음부신경총이 집중된 최상급 통각 수용기',
            impactEffect: '극심한 쇼크성 통증으로 즉각적인 전투 의지 상실',
            recommendedStrike: '발등 앞차기 (Front Snap Kick), 무릎치기 (Knee Strike)',
            dangerLevel: 'Severe',
          },
        ],
        legalFramework: {
          title: '법률적 정당방위 4단계 행동 수칙',
          stages: [
            { step: 1, title: '위험 인지 및 회피 (Awareness)', desc: '위험 징후 발생 시 현장을 신속히 벗어나 안전지대로 대피합니다.' },
            { step: 2, title: '대화 및 거리 확보 (De-escalation)', desc: '공격 의사가 없음을 손바닥을 들어 알리고 2m 이상의 거리를 둡니다.' },
            { step: 3, title: '비례적 방어 제압 (Proportional Force)', desc: '공격을 멈추게 할 최소한의 방어력만 사용하며, 상대가 쓰러지면 추가 타격을 중단합니다.' },
            { step: 4, title: '이탈 및 즉각 신고 (Disengage & Report)', desc: '현장에서 즉시 안전하게 이탈한 후 경찰(112)에 정당방위 상황을 먼저 신고합니다.' },
          ],
        },
      }
    default:
      return {
        title: 'Kupso: Anatomical Vital Pressure Points & Legal Self-Defense',
        koreanTitle: '인체 주요 급소(急所)와 정당방위 법률 가이드',
        summary: 'Kupso (Vital Pressure Points) represent specific anatomical junctions where nerves, major blood vessels, and internal organs lack heavy skeletal protection. Striking these points neutralizes hostile attackers with minimal physical effort.',
        legalWarning: 'Legal Compliance Warning: Pressure point trauma carries potential for severe biological harm. Under civilized legal systems, force must remain strictly proportional to the threat. Cease all counter-force the instant the threat is stopped.',
        vitalPoints: [
          {
            id: 'vp-temple',
            name: 'Temple (Gwanjanori)',
            koreanName: '관자놀이 (Gwanjanori)',
            romanized: 'Gwanjanori',
            location: 'Side of skull between eye corner and top of ear',
            targetArea: 'high',
            anatomicalStructure: 'Pterion junction, middle meningeal artery, thin temporal bone',
            impactEffect: 'Acute concussive disorientation, ocular blur, immediate knock-out',
            recommendedStrike: 'Backfist (Deungjumeok), Horizontal Elbow, Ridge Hand',
            dangerLevel: 'Lethal / Critical',
          },
          {
            id: 'vp-philtrum',
            name: 'Philtrum (Injung)',
            koreanName: '인중 (Injung)',
            romanized: 'Injung',
            location: 'Vertical groove between base of nose and upper lip',
            targetArea: 'high',
            anatomicalStructure: 'Facial nerve branches, infraorbital nerve network',
            impactEffect: 'Involuntary tear duct flooding, excruciating shock, backward head snap',
            recommendedStrike: 'Straight Fist, Palm Heel, Backfist Front Strike',
            dangerLevel: 'Severe',
          },
          {
            id: 'vp-carotid',
            name: 'Carotid Sinus (Mokdongmaek)',
            koreanName: '목동맥 (Carotid Sinus)',
            romanized: 'Mokdongmaek',
            location: 'Side of neck directly below mandible jaw angle',
            targetArea: 'high',
            anatomicalStructure: 'Common carotid artery, vagus nerve receptor baroreceptors',
            impactEffect: 'Sudden blood pressure drop, cerebral hypoxia, unconsciousness in 3–5 seconds',
            recommendedStrike: 'Knife-Hand Neck Strike (Sonnal Mok-chigi)',
            dangerLevel: 'Lethal / Critical',
          },
          {
            id: 'vp-solar-plexus',
            name: 'Solar Plexus (Myongchi)',
            koreanName: '명치 (Myongchi)',
            romanized: 'Myongchi',
            location: 'Central torso pit immediately below sternum',
            targetArea: 'mid',
            anatomicalStructure: 'Celiac nerve plexus, diaphragmatic tendon attachment',
            impactEffect: 'Immediate diaphragmatic spasm, total inability to breathe, collapse',
            recommendedStrike: 'Straight Middle Punch, Front Snap Kick, Palm Heel',
            dangerLevel: 'Severe',
          },
          {
            id: 'vp-floating-ribs',
            name: 'Floating Ribs (Galkkol)',
            koreanName: '갈비뼈 (Floating Ribs)',
            romanized: 'Galkkol',
            location: 'Lateral flank ribs 11 and 12',
            targetArea: 'mid',
            anatomicalStructure: 'Unanchored cartilaginous ribs protecting liver and spleen',
            impactEffect: 'Severe acute intercostal pain, bone fracture, spinal flexion',
            recommendedStrike: 'Roundhouse Kick (Dollyo-chagi), Lateral Elbow Strike',
            dangerLevel: 'Severe',
          },
          {
            id: 'vp-groin',
            name: 'Groin (Nangsim)',
            koreanName: '낭심 (Nangsim)',
            romanized: 'Nangsim',
            location: 'Inguinal pelvic junction between upper thighs',
            targetArea: 'low',
            anatomicalStructure: 'Pudendal nerve cluster, highly dense nociceptive pain receptors',
            impactEffect: 'Overwhelming physiological shock, involuntary pelvic buckling',
            recommendedStrike: 'Upward Front Snap Kick (Ap-chagi), Driving Knee Strike',
            dangerLevel: 'Severe',
          },
        ],
        legalFramework: {
          title: 'The 4-Stage Legal Self-Defense Framework',
          stages: [
            { step: 1, title: 'Tactical Awareness & Evasion', desc: 'Scan surroundings, avoid isolated danger zones, and exit pre-emptively.' },
            { step: 2, title: 'Verbal De-escalation & Boundary', desc: 'Display open palms forward, create 2m space, and clearly communicate non-hostility.' },
            { step: 3, title: 'Proportional Neutralization', desc: 'Apply only the force necessary to stop imminent physical harm. Discontinue immediately when safe.' },
            { step: 4, title: 'Tactical Disengagement & Police Report', desc: 'Sprint to public safety and immediately report the incident to law enforcement.' },
          ],
        },
      }
  }
}

// -----------------------------------------------------------------------------
// 4. HOSINSUL UI DICTIONARY
// -----------------------------------------------------------------------------
export const hosinsulI18n = {
  en: {
    tabs: {
      curriculum: 'Belt Curriculum Matrix',
      safety: 'Safety & Progression Matrix',
      catalog: 'Technique Catalog & Syllabus',
      principles: 'Foundations & Core Principles',
      hardVsSoft: 'Linear (Hard) vs Circular (Soft)',
      vitalPoints: 'Kupso Vital Points & Legal Guide',
    },
    filterAll: 'All Techniques',
    filterReleases: 'Grip Releases (Ppaegi)',
    filterLocks: 'Joint Locks (Kkeokgi)',
    filterThrows: 'Takedowns & Sweeps (Neomgigi)',
    filterScenarios: 'Tactical Scenarios',
    filterWeapons: 'Weapon Defense (Mugi)',
    searchPlaceholder: 'Search Hosinsul techniques by name, target, or Korean term...',
    techniqueDetails: 'Technique Details',
    closeModal: 'Close Inspection',
    viewTechnicalDossier: 'View Technical Dossier',
    strikingSurface: 'Striking Surface',
    targetArea: 'Target Anatomical Area',
    stepSequence: 'Biomechanical Step Sequence',
    keyDetails: 'Key Biomechanical Principles',
    commonMistakes: 'Common Mistakes to Avoid',
    coachingTips: 'Grandmaster Coaching Tips',
    koreanTerminology: 'Korean Terminology',
    dangerLevel: 'Danger Level',
    recommendedStrike: 'Recommended Strike',
    impactEffect: 'Physiological Impact',
    anatomicalStructure: 'Anatomical Structure',
  },
  km: {
    tabs: {
      curriculum: 'ម៉ាទ្រីសកម្មវិធីសិក្សាតាមខ្សែក្រវាត់',
      safety: 'ស្តង់ដារសុវត្ថិភាព & កម្រិតតស៊ូ',
      catalog: 'កាតាឡុកបច្ចេកទេស & មេរៀន',
      principles: 'មូលដ្ឋានគ្រឹះ & គោលការណ៍',
      hardVsSoft: 'កម្លាំងត្រង់ (រឹង) ទល់នឹង កម្លាំងរង្វង់ (ទន់)',
      vitalPoints: 'ចំណុចខ្សោយ (Kupso) & ក្របខ័ណ្ឌច្បាប់',
    },
    filterAll: 'បច្ចេកទេសទាំងអស់',
    filterReleases: 'ការដោះខ្លួន (Ppaegi)',
    filterLocks: 'ការបត់សន្លាក់ (Kkeokgi)',
    filterThrows: 'ការបោក & កាច់ជើង (Neomgigi)',
    filterScenarios: 'ស្ថានភាពជាក់ស្តែង',
    filterWeapons: 'ការការពារអាវុធ (Mugi)',
    searchPlaceholder: 'ស្វែងរកក្បាច់ការពារខ្លួនតាមឈ្មោះ ឬពាក្យកូរ៉េ...',
    techniqueDetails: 'ព័ត៌មានលម្អិតនៃបច្ចេកទេស',
    closeModal: 'បិទផ្ទាំងពិនិត្យ',
    viewTechnicalDossier: 'មើលព័ត៌មានបច្ចេកទេសពេញលេញ',
    strikingSurface: 'ផ្ទៃប៉ះទង្គិច / អាវុធរាងកាយ',
    targetArea: 'តំបន់គោលដៅរាងកាយ',
    stepSequence: 'លំដាប់លម្អិតនៃចលនាជីវមេកានិច',
    keyDetails: 'គោលការណ៍ជីវមេកានិចសំខាន់ៗ',
    commonMistakes: 'កំហុសទូទៅដែលត្រូវជៀសវាង',
    coachingTips: 'គន្លឹះណែនាំពីលោកគ្រូធំ',
    koreanTerminology: 'សទ្ទានុក្រមភាសាកូរ៉េ',
    dangerLevel: 'កម្រិតគ្រោះថ្នាក់',
    recommendedStrike: 'ក្បាច់វាយប្រហារដែលបានណែនាំ',
    impactEffect: 'ផលប៉ះពាល់លើរាងកាយ',
    anatomicalStructure: 'រចនាសម្ព័ន្ធកាយវិភាគសាស្ត្រ',
  },
  zh: {
    tabs: {
      curriculum: '色带防身段位大纲矩阵',
      safety: '实战安全标准与抗力进阶',
      catalog: '技术大纲与招式库',
      principles: '防身哲学与四大支柱',
      hardVsSoft: '直线刚术 vs 圆周柔术',
      vitalPoints: '急所要穴与正当防卫指南',
    },
    filterAll: '全部技术',
    filterReleases: '挣脱解套技 (Ppaegi)',
    filterLocks: '反关节锁别技 (Kkeokgi)',
    filterThrows: '摔法与下盘扫踢 (Neomgigi)',
    filterScenarios: '综合战术场景',
    filterWeapons: '夺械与武器防卫 (Mugi)',
    searchPlaceholder: '按招式名称、击打部位或韩语术语搜索防身术...',
    techniqueDetails: '技术档案详情',
    closeModal: '关闭档案',
    viewTechnicalDossier: '查看实战技术剖析',
    strikingSurface: '发力接触面',
    targetArea: '人体目标靶区',
    stepSequence: '人体力学生物动作分解',
    keyDetails: '核心力学与支点要领',
    commonMistakes: '实战易犯致命错误',
    coachingTips: '总馆长实战教练心法',
    koreanTerminology: '韩国武道专业术语',
    dangerLevel: '破坏杀伤等级',
    recommendedStrike: '推荐反击招式',
    impactEffect: '生理创伤效应',
    anatomicalStructure: '解剖学组织结构',
  },
  ko: {
    tabs: {
      curriculum: '급·단별 호신술 수련 매트릭스',
      safety: '안전 수련 원칙 & 저항도 매트릭스',
      catalog: '호신술 기술 카탈로그 & 교본',
      principles: '호신술의 본질 & 4대 원리',
      hardVsSoft: '직선적 강술 vs 원형적 유술',
      vitalPoints: '인체 급소 & 정당방위 가이드',
    },
    filterAll: '전체 기술',
    filterReleases: '빼기 기술 (Ppaegi)',
    filterLocks: '꺾기 기술 (Kkeokgi)',
    filterThrows: '넘기기 기술 (Neomgigi)',
    filterScenarios: '실전 종합 상황',
    filterWeapons: '무기 방어 (Mugi)',
    searchPlaceholder: '기술명, 목표 부위 또는 한국어 용어로 호신술 검색...',
    techniqueDetails: '기술 상세 프로필',
    closeModal: '창 닫기',
    viewTechnicalDossier: '실전 기술 상세 보기',
    strikingSurface: '타격 및 접촉 부위',
    targetArea: '인체 목표 부위',
    stepSequence: '단계별 생체역학 동작 순서',
    keyDetails: '핵심 역학 및 원리',
    commonMistakes: '실전에서 피해야 할 실수',
    coachingTips: '그랜드마스터 실전 코칭 팁',
    koreanTerminology: '국기원 공인 무도 용어',
    dangerLevel: '위험 및 위력 등급',
    recommendedStrike: '권장 반격 타격기',
    impactEffect: '신체 충격 및 마비 효과',
    anatomicalStructure: '해부학적 취약 조직',
  },
}
