/**
 * Infinity Taekwondo belt structure: the single source for every belt shown on the site
 * (home page belt journey, the full /belt-journey page, About page palette).
 *
 * Ranks: White, Yellow, Green, Blue, Brown, Red, Black 1st Dan and Black 2nd Dan.
 * Students under 15 receive the equivalent Kukkiwon Poom instead of a Dan.
 *
 * `forms` lists library poomsae ids (see data/library/poomsae/poomsae.ts); the site links each
 * one to its library page and shows a walkthrough badge when an animated walkthrough exists.
 * `timeline` is the typical time from a student's first class, not the time spent at that belt.
 *
 * Khmer, Chinese and Korean text lives in each belt's `translations`. When you change an English
 * field, update the same field there too (lists and `tracks` are replaced whole, so give every item).
 */

/** What each Infinity TKD discipline covers at a belt. */
export interface BeltTracks {
  poomsae: string
  demonstration: string
  tricking: string
  hosinsul: string
  breaking: string
}

export interface BeltRank {
  id: string
  name: string
  /** Short label for belt tabs and cards, e.g. "Yellow" or "Black 1st Dan". */
  shortName: string
  koreanName: string
  rankTitle: string
  hex: string
  borderHex: string
  textColor: string
  /** Gold Dan bars on black belts (1 = 1st Dan, 2 = 2nd Dan). */
  danBars?: number
  /** Display summary of the forms learned at this belt. */
  poomsae: string
  /** Library poomsae ids learned at this belt, in teaching order. */
  forms: string[]
  /** Training beyond the listed forms, e.g. New Poomsae and Freestyle Poomsae. */
  alsoTrains?: string[]
  poomsaeMeaning: string
  meaning: string
  philosophy: string
  timeline: string
  focus: string
  syllabusGoals: string[]
  physicalSkills: string[]
  tracks: BeltTracks
  requirements: string[]
  /** Translated text; any field left out shows in English. */
  translations?: {
    km?: Partial<BeltRankText>
    zh?: Partial<BeltRankText>
    ko?: Partial<BeltRankText>
  }
}

/** The fields of a belt shown as text, which are the ones translated. */
export type BeltRankText = Pick<
  BeltRank,
  | 'name'
  | 'shortName'
  | 'rankTitle'
  | 'poomsae'
  | 'alsoTrains'
  | 'poomsaeMeaning'
  | 'meaning'
  | 'philosophy'
  | 'timeline'
  | 'focus'
  | 'syllabusGoals'
  | 'physicalSkills'
  | 'tracks'
  | 'requirements'
>

export const beltProgression: BeltRank[] = [
  {
    id: 'white',
    name: 'White Belt',
    shortName: 'White',
    koreanName: '흰띠 (Huin-tti)',
    rankTitle: '10th – 9th Geup',
    hex: '#FFFFFF',
    borderHex: '#D0D0D0',
    textColor: '#000000',
    poomsae: 'Basic movements (Kibon) & Taegeuk 1 (Il Jang)',
    forms: ['taegeuk-1'],
    poomsaeMeaning: 'Taegeuk Il Jang represents Keon (Heaven and Light), the creation of all things and the beginning of martial discipline.',
    meaning: 'Innocence & Purity: the clean slate of a student who has no prior knowledge of Taekwondo.',
    philosophy: 'Empty your cup to be filled. Humility, respect for the Dojang, and foundational stance stability (Ap-seogi, Ap-kubi).',
    timeline: '1 – 3 Months',
    focus: 'Basic stances, low block (Arae-makki), middle punch (Momtong-jireugi) and front kick (Ap-chagi).',
    syllabusGoals: [
      'Live the 5 Tenets: Courtesy, Integrity, Perseverance, Self-Control, Indomitable Spirit',
      'Develop hip-chambering alignment for basic strikes and low blocks',
      'Keep upright posture and balance while stepping forward and turning',
    ],
    physicalSkills: [
      'Walking Stance (Ap-seogi)',
      'Front Stance (Ap-kubi)',
      'Low Block (Arae-makki)',
      'Front Kick (Ap-chagi) with chamber and re-chamber',
    ],
    tracks: {
      poomsae: 'Taegeuk 1 with correct stances, facing and rhythm',
      demonstration: 'Group bowing, line-ups and counting in Korean',
      tricking: 'Safe falls, rolls and flexibility foundations',
      hosinsul: 'Wrist-grab releases and keeping a safe distance',
      breaking: 'One board: front kick or palm strike',
    },
    requirements: [
      'Basic stances: walking stance and front stance',
      'Middle punch and high punch',
      'Low block (Arae-makki)',
      'Front kick with proper chamber and re-chamber',
      'Dojang etiquette, Korean bowing and counting (Hana, Dul, Set)',
    ],
    translations: {
      km: {
        name: 'ខ្សែក្រវាត់ស',
        shortName: 'ពណ៌ស',
        rankTitle: 'Geup ទី ១០ – ៩',
        poomsae: 'ចលនាមូលដ្ឋាន (Kibon) និង Taegeuk 1 (Il Jang)',
        poomsaeMeaning: 'Taegeuk Il Jang តំណាងឱ្យ Keon (មេឃ និងពន្លឺ) ដែលជាការកកើតនៃអ្វីៗទាំងអស់ និងជាការចាប់ផ្តើមនៃវិន័យក្បាច់គុន។',
        meaning: 'ភាពស្លូតត្រង់ និងបរិសុទ្ធ៖ ដូចក្រដាសសរបស់សិស្សដែលមិនទាន់មានចំណេះដឹងអំពីតេក្វាន់ដូពីមុនមក។',
        philosophy: 'ចាក់ពែងឱ្យទទេ ទើបអាចបំពេញថ្មីបាន។ ការបន្ទាបខ្លួន ការគោរព Dojang និងលំនឹងនៃជំហរមូលដ្ឋាន (Ap-seogi, Ap-kubi)។',
        timeline: '១ – ៣ ខែ',
        focus: 'ជំហរមូលដ្ឋាន ការទប់ក្រោម (Arae-makki) ការដាល់កណ្តាល (Momtong-jireugi) និងការទាត់ត្រង់មុខ (Ap-chagi)។',
        syllabusGoals: [
          'រស់នៅតាមគោលការណ៍ទាំង ៥៖ សុជីវធម៌ សុចរិតភាព ការតស៊ូព្យាយាម ការគ្រប់គ្រងខ្លួនឯង និងស្មារតីមិនចុះចាញ់',
          'ហ្វឹកការទាញកណ្តាប់ដៃមកចង្កេះឱ្យត្រឹមត្រូវ សម្រាប់ការដាល់ និងការទប់ក្រោម',
          'រក្សាឥរិយាបថត្រង់ និងលំនឹង ពេលដើរទៅមុខ និងបង្វិលខ្លួន',
        ],
        physicalSkills: [
          'ជំហរដើរ (Ap-seogi)',
          'ជំហរមុខ (Ap-kubi)',
          'ការទប់ក្រោម (Arae-makki)',
          'ការទាត់ត្រង់មុខ (Ap-chagi) ដោយបត់ជង្គង់មុន និងក្រោយទាត់',
        ],
        tracks: {
          poomsae: 'Taegeuk 1 ដោយជំហរ ទិសដៅ និងចង្វាក់ត្រឹមត្រូវ',
          demonstration: 'ការគោរពជាក្រុម ការតម្រង់ជួរ និងការរាប់ជាភាសាកូរ៉េ',
          tricking: 'ការដួលដោយសុវត្ថិភាព ការក្រឡាប់ និងមូលដ្ឋានភាពបត់បែន',
          hosinsul: 'ការដោះខ្លួនពីការចាប់កដៃ និងការរក្សាចម្ងាយសុវត្ថិភាព',
          breaking: 'ក្តារ ១ សន្លឹក៖ ទាត់ត្រង់មុខ ឬវាយបាតដៃ',
        },
        requirements: [
          'ជំហរមូលដ្ឋាន៖ ជំហរដើរ និងជំហរមុខ',
          'ការដាល់កណ្តាល និងការដាល់ខ្ពស់',
          'ការទប់ក្រោម (Arae-makki)',
          'ការទាត់ត្រង់មុខ ដោយបត់ជង្គង់មុន និងក្រោយទាត់ត្រឹមត្រូវ',
          'សុជីវធម៌ក្នុង Dojang ការគោរពបែបកូរ៉េ និងការរាប់ (Hana, Dul, Set)',
        ],
      },
      zh: {
        name: '白带',
        shortName: '白带',
        rankTitle: '10级 – 9级',
        poomsae: '基本动作 (Kibon) 与太极一章 (Il Jang)',
        poomsaeMeaning: '太极一章象征“乾”(天与光明)，代表万物之始，也是武道修炼的起点。',
        meaning: '纯真与纯洁：如同一张白纸，学员此前对跆拳道尚无任何了解。',
        philosophy: '先倒空杯子，才能重新装满。谦逊、尊重道馆，以及稳固的基础步型 (Ap-seogi、Ap-kubi)。',
        timeline: '1 – 3 个月',
        focus: '基本步型、下格挡 (Arae-makki)、中段冲拳 (Momtong-jireugi) 与前踢 (Ap-chagi)。',
        syllabusGoals: [
          '践行五大信条：礼仪、廉耻、忍耐、克己、百折不屈',
          '出拳与下格挡时，准确地将拳收至腰侧',
          '前进与转身时保持身体挺直与平衡',
        ],
        physicalSkills: ['行步 (Ap-seogi)', '前屈步 (Ap-kubi)', '下格挡 (Arae-makki)', '前踢 (Ap-chagi)：提膝与收腿到位'],
        tracks: {
          poomsae: '太极一章：步型、方向与节奏准确',
          demonstration: '集体敬礼、列队与韩语计数',
          tricking: '安全倒地、翻滚与柔韧性基础',
          hosinsul: '手腕被抓时的解脱，以及保持安全距离',
          breaking: '一块木板：前踢或掌根击',
        },
        requirements: [
          '基本步型：行步与前屈步',
          '中段冲拳与上段冲拳',
          '下格挡 (Arae-makki)',
          '前踢：提膝与收腿动作规范',
          '道馆礼仪、韩式敬礼与韩语计数 (Hana, Dul, Set)',
        ],
      },
      ko: {
        name: '흰띠',
        shortName: '흰띠',
        rankTitle: '10급 – 9급',
        poomsae: '기본동작과 태극 1장',
        poomsaeMeaning: '태극 1장은 건(乾), 곧 하늘과 빛을 뜻하며 만물의 시작이자 무도 수련의 출발점을 상징합니다.',
        meaning: '순수와 깨끗함: 태권도를 처음 접하는 수련생의 깨끗한 백지 상태를 뜻합니다.',
        philosophy: '잔을 비워야 채울 수 있습니다. 겸손, 도장에 대한 예의, 그리고 기본 서기(앞서기, 앞굽이)의 안정감을 기릅니다.',
        timeline: '1 – 3개월',
        focus: '기본 서기, 아래막기, 몸통지르기, 앞차기.',
        syllabusGoals: [
          '태권도 정신 5대 덕목 실천: 예의, 염치, 인내, 극기, 백절불굴',
          '지르기와 아래막기에서 주먹을 허리로 정확히 당기는 동작 익히기',
          '앞으로 나아가고 돌 때 바른 자세와 균형 유지하기',
        ],
        physicalSkills: ['앞서기', '앞굽이', '아래막기', '앞차기 (접어 차고 다시 접기)'],
        tracks: {
          poomsae: '태극 1장: 정확한 서기, 방향, 리듬',
          demonstration: '단체 경례, 줄 맞추기, 한국어 구령',
          tricking: '안전한 낙법, 구르기, 유연성 기초',
          hosinsul: '손목 잡혔을 때 빼기와 안전거리 유지',
          breaking: '송판 1장: 앞차기 또는 바탕손치기',
        },
        requirements: [
          '기본 서기: 앞서기와 앞굽이',
          '몸통지르기와 얼굴지르기',
          '아래막기',
          '바르게 접어 차고 다시 접는 앞차기',
          '도장 예절, 경례, 한국어 숫자 세기 (하나, 둘, 셋)',
        ],
      },
    },
  },
  {
    id: 'yellow',
    name: 'Yellow Belt',
    shortName: 'Yellow',
    koreanName: '노란띠 (Noran-tti)',
    rankTitle: '8th – 7th Geup',
    hex: '#FFD505',
    borderHex: '#D4AF37',
    textColor: '#000000',
    poomsae: 'Taegeuk 2 (Ee Jang) & Taegeuk 3 (Sam Jang)',
    forms: ['taegeuk-2', 'taegeuk-3'],
    poomsaeMeaning: 'Ee Jang represents Tae (Lake): inner firmness with outward gentleness. Sam Jang represents Ri (Fire): passion, speed and brightness.',
    meaning: 'The Rising Sun & Fertile Earth: the earth where the seed of martial discipline takes root and sprouts.',
    philosophy: 'Patience and nurturing the mind. Developing balance, focus and the joy of martial movement.',
    timeline: '3 – 6 Months',
    focus: 'Inside block (Momtong An-makki), high block (Olgul-makki), knife-hand strikes, back stance and roundhouse kick (Dollyo-chagi).',
    syllabusGoals: [
      'Build rotational hip power for roundhouse kicks',
      'Link two techniques in a row without losing stance balance',
      'Understand target distance through partner pad drills',
    ],
    physicalSkills: [
      'Roundhouse Kick (Dollyo-chagi)',
      'Inside Middle Block (Momtong An-makki)',
      'High Block (Olgul-makki)',
      'Knife-hand Neck Strike (Hansonnal Mok-chigi)',
    ],
    tracks: {
      poomsae: 'Taegeuk 2 & 3: rhythm, double punches and kicks with balance',
      demonstration: 'Synchronised group forms in lines',
      tricking: 'Cartwheel, round-off and jump kick foundations',
      hosinsul: 'Escapes from clothing grabs',
      breaking: 'One board: roundhouse kick',
    },
    requirements: [
      'Perform Taegeuk 1, 2 and 3 with correct rhythm and breathing',
      'Inside middle block and high block',
      'Roundhouse kick to body and head height',
      'Knife-hand strike and back stance basics',
      'Partner pad drills with safe distance control',
    ],
    translations: {
      km: {
        name: 'ខ្សែក្រវាត់លឿង',
        shortName: 'ពណ៌លឿង',
        rankTitle: 'Geup ទី ៨ – ៧',
        poomsae: 'Taegeuk 2 (Ee Jang) និង Taegeuk 3 (Sam Jang)',
        poomsaeMeaning: 'Ee Jang តំណាងឱ្យ Tae (បឹង)៖ ភាពរឹងមាំខាងក្នុង និងភាពទន់ភ្លន់ខាងក្រៅ។ Sam Jang តំណាងឱ្យ Ri (ភ្លើង)៖ ភាពក្លៀវក្លា ល្បឿន និងពន្លឺ។',
        meaning: 'ព្រះអាទិត្យរះ និងដីមានជីជាតិ៖ ដីដែលគ្រាប់ពូជនៃវិន័យក្បាច់គុនចាក់ឫស និងដុះពន្លក។',
        philosophy: 'ការអត់ធ្មត់ និងការបណ្តុះចិត្ត។ អភិវឌ្ឍលំនឹង ការផ្តោតអារម្មណ៍ និងសេចក្តីរីករាយនៃចលនាក្បាច់គុន។',
        timeline: '៣ – ៦ ខែ',
        focus: 'ការទប់កណ្តាលខាងក្នុង (Momtong An-makki) ការទប់ខ្ពស់ (Olgul-makki) ការកាប់ដោយបាតដៃ ជំហរក្រោយ និងការទាត់វាស់ (Dollyo-chagi)។',
        syllabusGoals: [
          'បង្កើតកម្លាំងបង្វិលត្រគាកសម្រាប់ការទាត់វាស់',
          'ភ្ជាប់បច្ចេកទេសពីរជាប់គ្នា ដោយមិនបាត់លំនឹងជំហរ',
          'យល់ពីចម្ងាយគោលដៅ តាមរយៈលំហាត់ទាត់ផេដជាមួយដៃគូ',
        ],
        physicalSkills: [
          'ការទាត់វាស់ (Dollyo-chagi)',
          'ការទប់កណ្តាលខាងក្នុង (Momtong An-makki)',
          'ការទប់ខ្ពស់ (Olgul-makki)',
          'ការកាប់កដោយបាតដៃ (Hansonnal Mok-chigi)',
        ],
        tracks: {
          poomsae: 'Taegeuk 2 និង 3៖ ចង្វាក់ ការដាល់ពីរដង និងការទាត់ដោយមានលំនឹង',
          demonstration: 'Poomsae ជាក្រុមតាមជួរ ដោយចលនាស្របគ្នា',
          tricking: 'មូលដ្ឋាន Cartwheel, Round-off និងការលោតទាត់',
          hosinsul: 'ការដោះខ្លួនពីការចាប់សម្លៀកបំពាក់',
          breaking: 'ក្តារ ១ សន្លឹក៖ ទាត់វាស់',
        },
        requirements: [
          'សម្តែង Taegeuk 1, 2 និង 3 ដោយចង្វាក់ និងការដកដង្ហើមត្រឹមត្រូវ',
          'ការទប់កណ្តាលខាងក្នុង និងការទប់ខ្ពស់',
          'ការទាត់វាស់កម្រិតខ្លួន និងកម្រិតក្បាល',
          'ការកាប់ដោយបាតដៃ និងមូលដ្ឋានជំហរក្រោយ',
          'លំហាត់ទាត់ផេដជាមួយដៃគូ ដោយគ្រប់គ្រងចម្ងាយសុវត្ថិភាព',
        ],
      },
      zh: {
        name: '黄带',
        shortName: '黄带',
        rankTitle: '8级 – 7级',
        poomsae: '太极二章 (Ee Jang) 与太极三章 (Sam Jang)',
        poomsaeMeaning: '二章象征“兑”(泽)：内刚外柔。三章象征“离”(火)：热情、速度与光明。',
        meaning: '旭日与沃土：武道修炼的种子在此扎根发芽。',
        philosophy: '耐心与心性的培养。发展平衡与专注，感受武道动作的乐趣。',
        timeline: '3 – 6 个月',
        focus: '中段内格挡 (Momtong An-makki)、上格挡 (Olgul-makki)、手刀击、后屈步与横踢 (Dollyo-chagi)。',
        syllabusGoals: ['培养横踢所需的转髋发力', '连续完成两个技术动作而不失步型平衡', '通过搭档脚靶训练理解目标距离'],
        physicalSkills: ['横踢 (Dollyo-chagi)', '中段内格挡 (Momtong An-makki)', '上格挡 (Olgul-makki)', '手刀颈击 (Hansonnal Mok-chigi)'],
        tracks: {
          poomsae: '太极二章与三章：节奏、连续冲拳与平衡的踢法',
          demonstration: '分列整齐的集体同步品势',
          tricking: '侧手翻、踺子 (Round-off) 与跳踢基础',
          hosinsul: '衣服被抓时的解脱',
          breaking: '一块木板：横踢',
        },
        requirements: [
          '以正确的节奏与呼吸完成太极一至三章',
          '中段内格挡与上格挡',
          '中段与上段横踢',
          '手刀击与后屈步基础',
          '控制安全距离的搭档脚靶训练',
        ],
      },
      ko: {
        name: '노란띠',
        shortName: '노란띠',
        rankTitle: '8급 – 7급',
        poomsae: '태극 2장과 태극 3장',
        poomsaeMeaning: '태극 2장은 태(兌), 곧 연못을 뜻하며 안으로 굳세고 밖으로 부드러움을 상징합니다. 태극 3장은 리(離), 곧 불을 뜻하며 열정과 속도, 밝음을 상징합니다.',
        meaning: '떠오르는 해와 비옥한 땅: 무도 수련의 씨앗이 뿌리내리고 싹트는 땅을 뜻합니다.',
        philosophy: '인내와 마음 가꾸기. 균형과 집중력, 그리고 무도 동작의 즐거움을 키웁니다.',
        timeline: '3 – 6개월',
        focus: '몸통안막기, 얼굴막기, 손날치기, 뒷굽이, 돌려차기.',
        syllabusGoals: ['돌려차기를 위한 허리 회전력 기르기', '서기의 균형을 잃지 않고 두 기술을 연결하기', '파트너 미트 훈련으로 표적 거리 감각 익히기'],
        physicalSkills: ['돌려차기', '몸통안막기', '얼굴막기', '한손날목치기'],
        tracks: {
          poomsae: '태극 2·3장: 리듬, 두번지르기, 균형 잡힌 발차기',
          demonstration: '줄을 맞춘 단체 품새',
          tricking: '옆돌기, 라운드오프, 뛰어차기 기초',
          hosinsul: '옷 잡혔을 때 빼기',
          breaking: '송판 1장: 돌려차기',
        },
        requirements: [
          '바른 리듬과 호흡으로 태극 1·2·3장 수행',
          '몸통안막기와 얼굴막기',
          '몸통·얼굴 높이 돌려차기',
          '손날치기와 뒷굽이 기초',
          '안전거리를 지키는 파트너 미트 훈련',
        ],
      },
    },
  },
  {
    id: 'green',
    name: 'Green Belt',
    shortName: 'Green',
    koreanName: '초록띠 (Chorok-tti)',
    rankTitle: '6th – 5th Geup',
    hex: '#09BB00',
    borderHex: '#078800',
    textColor: '#FFFFFF',
    poomsae: 'Taegeuk 4 (Sa Jang) & Taegeuk 5 (Oh Jang)',
    forms: ['taegeuk-4', 'taegeuk-5'],
    poomsaeMeaning: 'Sa Jang represents Jin (Thunder): courage and explosive power. Oh Jang represents Seon (Wind): gentle flexibility with relentless force.',
    meaning: 'Growth & Vitality: the green plant sprouting and growing strong as technical skills deepen.',
    philosophy: 'Developing speed and fluid adaptability. The martial artist learns to harness explosive energy like thunder and wind.',
    timeline: '6 – 9 Months',
    focus: 'Knife-hand blocks (Sonnal), spear-hand thrust, side kick (Yeop-chagi), back stance (Dwit-kubi), hammer-fist and elbow strikes.',
    syllabusGoals: [
      'Master the knife-hand guard and knife-hand blocks',
      'Deliver full-extension side kicks with heel drive and locked hips',
      'Begin freestyle poomsae foundations: jumping kicks and rhythm',
    ],
    physicalSkills: [
      'Side Kick (Yeop-chagi) with locked hip and heel',
      'Back Stance (Dwit-kubi) with 70/30 weight',
      'Double Knife-hand Block (Sonnal Momtong-makki)',
      'Elbow Strike (Palkup-chigi)',
    ],
    tracks: {
      poomsae: 'Taegeuk 4 & 5: back stance, knife-hand, side kicks and elbow strikes',
      demonstration: 'Team patterns with kicks and synchronised timing',
      tricking: 'Butterfly kick and 360° jump kick foundations',
      hosinsul: 'Arm locks against wrist grabs (Kukkiwon hosinsul basics)',
      breaking: 'One board: side kick',
    },
    requirements: [
      'Taegeuk 4 and Taegeuk 5',
      'Double knife-hand block (Sonnal Momtong-makki)',
      'Side kick (Yeop-chagi) with full hip extension and heel',
      'Hammer-fist and elbow strikes',
      'Board breaking: side kick and palm strike',
    ],
    translations: {
      km: {
        name: 'ខ្សែក្រវាត់បៃតង',
        shortName: 'ពណ៌បៃតង',
        rankTitle: 'Geup ទី ៦ – ៥',
        poomsae: 'Taegeuk 4 (Sa Jang) និង Taegeuk 5 (Oh Jang)',
        poomsaeMeaning: 'Sa Jang តំណាងឱ្យ Jin (ផ្គរ)៖ ភាពក្លាហាន និងថាមពលផ្ទុះខ្លាំង។ Oh Jang តំណាងឱ្យ Seon (ខ្យល់)៖ ភាពទន់ភ្លន់បត់បែន ប៉ុន្តែមានកម្លាំងមិនឈប់ឈរ។',
        meaning: 'ការលូតលាស់ និងភាពរស់រវើក៖ រុក្ខជាតិបៃតងដុះពន្លក និងលូតលាស់រឹងមាំ ខណៈជំនាញបច្ចេកទេសកាន់តែស៊ីជម្រៅ។',
        philosophy: 'អភិវឌ្ឍល្បឿន និងការសម្របខ្លួនយ៉ាងរលូន។ អ្នកហាត់រៀនប្រើថាមពលផ្ទុះ ដូចផ្គរ និងខ្យល់។',
        timeline: '៦ – ៩ ខែ',
        focus: 'ការទប់ដោយបាតដៃ (Sonnal) ការចាក់ចុងម្រាមដៃ ការទាត់ចំហៀង (Yeop-chagi) ជំហរក្រោយ (Dwit-kubi) ការវាយបាតកណ្តាប់ដៃ និងការវាយកែងដៃ។',
        syllabusGoals: [
          'ស្ទាត់ជំនាញការការពារ និងការទប់ដោយបាតដៃ',
          'ទាត់ចំហៀងដោយលាតជើងពេញ រុញដោយកែងជើង និងចាក់សោត្រគាក',
          'ចាប់ផ្តើមមូលដ្ឋាន Freestyle Poomsae៖ ការលោតទាត់ និងចង្វាក់',
        ],
        physicalSkills: [
          'ការទាត់ចំហៀង (Yeop-chagi) ចាក់សោត្រគាក និងប្រើកែងជើង',
          'ជំហរក្រោយ (Dwit-kubi) ទម្ងន់ ៧០/៣០',
          'ការទប់ដោយបាតដៃទាំងពីរ (Sonnal Momtong-makki)',
          'ការវាយកែងដៃ (Palkup-chigi)',
        ],
        tracks: {
          poomsae: 'Taegeuk 4 និង 5៖ ជំហរក្រោយ បាតដៃ ការទាត់ចំហៀង និងការវាយកែងដៃ',
          demonstration: 'ក្បាច់ជាក្រុមដែលមានការទាត់ និងពេលវេលាស្របគ្នា',
          tricking: 'មូលដ្ឋាន Butterfly kick និងការលោតទាត់ 360°',
          hosinsul: 'ការបត់សន្លាក់ដៃប្រឆាំងនឹងការចាប់កដៃ (មូលដ្ឋាន Hosinsul Kukkiwon)',
          breaking: 'ក្តារ ១ សន្លឹក៖ ទាត់ចំហៀង',
        },
        requirements: [
          'Taegeuk 4 និង Taegeuk 5',
          'ការទប់ដោយបាតដៃទាំងពីរ (Sonnal Momtong-makki)',
          'ការទាត់ចំហៀង (Yeop-chagi) លាតត្រគាកពេញ និងប្រើកែងជើង',
          'ការវាយបាតកណ្តាប់ដៃ និងការវាយកែងដៃ',
          'ការបំបែកក្តារ៖ ទាត់ចំហៀង និងវាយបាតដៃ',
        ],
      },
      zh: {
        name: '绿带',
        shortName: '绿带',
        rankTitle: '6级 – 5级',
        poomsae: '太极四章 (Sa Jang) 与太极五章 (Oh Jang)',
        poomsaeMeaning: '四章象征“震”(雷)：勇气与爆发力。五章象征“巽”(风)：柔和灵活而力量不息。',
        meaning: '成长与活力：随着技术日益精进，绿苗破土而出、茁壮成长。',
        philosophy: '培养速度与灵活应变。习武者学会如雷似风般驾驭爆发力。',
        timeline: '6 – 9 个月',
        focus: '手刀格挡 (Sonnal)、贯手、侧踢 (Yeop-chagi)、后屈步 (Dwit-kubi)、锤拳与肘击。',
        syllabusGoals: ['掌握手刀防守与手刀格挡', '侧踢充分伸展，以脚跟发力并锁住髋部', '开始自由品势基础：跳踢与节奏'],
        physicalSkills: [
          '侧踢 (Yeop-chagi)：锁髋并以脚跟发力',
          '后屈步 (Dwit-kubi)：重心前三后七',
          '双手刀中段格挡 (Sonnal Momtong-makki)',
          '肘击 (Palkup-chigi)',
        ],
        tracks: {
          poomsae: '太极四章与五章：后屈步、手刀、侧踢与肘击',
          demonstration: '含踢法、节奏同步的团体套路',
          tricking: '蝴蝶踢与 360° 跳踢基础',
          hosinsul: '针对抓腕的手臂关节技 (国技院护身术基础)',
          breaking: '一块木板：侧踢',
        },
        requirements: [
          '太极四章与太极五章',
          '双手刀中段格挡 (Sonnal Momtong-makki)',
          '侧踢 (Yeop-chagi)：髋部充分伸展，以脚跟击打',
          '锤拳与肘击',
          '击破：侧踢与掌根击',
        ],
      },
      ko: {
        name: '초록띠',
        shortName: '초록띠',
        rankTitle: '6급 – 5급',
        poomsae: '태극 4장과 태극 5장',
        poomsaeMeaning: '태극 4장은 진(震), 곧 우레를 뜻하며 용기와 폭발적인 힘을 상징합니다. 태극 5장은 손(巽), 곧 바람을 뜻하며 부드러우면서도 끊임없는 힘을 상징합니다.',
        meaning: '성장과 생명력: 기술이 깊어지면서 푸른 새싹이 돋아나 튼튼하게 자라는 모습을 뜻합니다.',
        philosophy: '속도와 유연한 적응력을 기릅니다. 우레와 바람처럼 폭발적인 힘을 다루는 법을 배웁니다.',
        timeline: '6 – 9개월',
        focus: '손날막기, 편손끝찌르기, 옆차기, 뒷굽이, 메주먹치기, 팔굽치기.',
        syllabusGoals: ['손날 겨루기 자세와 손날막기 익히기', '골반을 고정하고 뒤꿈치로 밀어 끝까지 뻗는 옆차기', '자유 품새 기초 시작: 뛰어차기와 리듬'],
        physicalSkills: ['옆차기 (골반 고정, 뒤꿈치 사용)', '뒷굽이 (체중 70/30)', '손날몸통막기', '팔굽치기'],
        tracks: {
          poomsae: '태극 4·5장: 뒷굽이, 손날, 옆차기, 팔굽치기',
          demonstration: '발차기와 타이밍을 맞춘 팀 동작',
          tricking: '버터플라이 킥과 360° 뛰어차기 기초',
          hosinsul: '손목 잡기에 대한 팔 꺾기 (국기원 호신술 기초)',
          breaking: '송판 1장: 옆차기',
        },
        requirements: [
          '태극 4장과 태극 5장',
          '손날몸통막기',
          '골반을 끝까지 펴고 뒤꿈치로 차는 옆차기',
          '메주먹치기와 팔굽치기',
          '격파: 옆차기와 바탕손치기',
        ],
      },
    },
  },
  {
    id: 'blue',
    name: 'Blue Belt',
    shortName: 'Blue',
    koreanName: '파란띠 (Paran-tti)',
    rankTitle: '4th – 3rd Geup',
    hex: '#0042EA',
    borderHex: '#002BB0',
    textColor: '#FFFFFF',
    poomsae: 'Taegeuk 6 (Yuk Jang) & Taegeuk 7 (Chil Jang)',
    forms: ['taegeuk-6', 'taegeuk-7'],
    poomsaeMeaning: 'Yuk Jang represents Gam (Water): fluid, continuous adaptation. Chil Jang represents Gan (Mountain): stillness and unshakeable stability.',
    meaning: 'The Boundless Sky: the heaven toward which the plant matures into a towering tree.',
    philosophy: 'Flow like water, stand like a mountain. Cultivating calm under pressure and control in the air.',
    timeline: '9 – 14 Months',
    focus: 'Tiger stance (Beom-seogi), riding stance, scissors and X-blocks, knee strikes, crescent kick, back kick and spinning kicks.',
    syllabusGoals: [
      'Control transitions through tiger stance and riding stance',
      'Execute spinning back kicks with fast hip rotation',
      'Add freestyle poomsae elements: tornado kick and 540° setup',
    ],
    physicalSkills: [
      'Back Kick (Dwit-chagi)',
      'Spinning Hook Kick (Huryeo-chagi)',
      'Tiger Stance (Beom-seogi) & Knee Strike (Mureup-chigi)',
      'Tornado Kick & Jumping Roundhouse',
    ],
    tracks: {
      poomsae: 'Taegeuk 6 & 7: slow movements, tiger stance and mountain stability',
      demonstration: 'Demonstration routines with partner timing',
      tricking: 'Tornado kick, cheat 360 and aerial basics',
      hosinsul: 'Defences against chokes and bear hugs',
      breaking: 'One board: spinning back kick',
    },
    requirements: [
      'Taegeuk 6 and Taegeuk 7',
      'Back kick (Dwit-chagi) with accuracy',
      'Spinning hook kick (Huryeo-chagi) at head height',
      'Tricking: cheat 360 and tornado kick',
      'Hosinsul: escapes from chokes and bear hugs',
    ],
    translations: {
      km: {
        name: 'ខ្សែក្រវាត់ខៀវ',
        shortName: 'ពណ៌ខៀវ',
        rankTitle: 'Geup ទី ៤ – ៣',
        poomsae: 'Taegeuk 6 (Yuk Jang) និង Taegeuk 7 (Chil Jang)',
        poomsaeMeaning: 'Yuk Jang តំណាងឱ្យ Gam (ទឹក)៖ ការសម្របខ្លួនយ៉ាងរលូន និងជាប់លាប់។ Chil Jang តំណាងឱ្យ Gan (ភ្នំ)៖ ភាពស្ងប់ស្ងាត់ និងស្ថិរភាពមិនរង្គោះរង្គើ។',
        meaning: 'មេឃគ្មានទីបញ្ចប់៖ មេឃដែលរុក្ខជាតិលូតលាស់ឆ្ពោះទៅ រហូតក្លាយជាដើមឈើដ៏ខ្ពស់។',
        philosophy: 'ហូរដូចទឹក ឈរដូចភ្នំ។ បណ្តុះភាពស្ងប់ស្ងាត់ក្រោមសម្ពាធ និងការគ្រប់គ្រងខ្លួននៅលើអាកាស។',
        timeline: '៩ – ១៤ ខែ',
        focus: 'ជំហរខ្លា (Beom-seogi) ជំហរជិះសេះ ការទប់កន្ត្រៃ និងការទប់ X ការវាយជង្គង់ ការទាត់ពាក់កណ្តាលរង្វង់ ការទាត់ក្រោយ និងការទាត់បង្វិល។',
        syllabusGoals: [
          'គ្រប់គ្រងការផ្លាស់ប្តូរចលនា តាមរយៈជំហរខ្លា និងជំហរជិះសេះ',
          'ទាត់បង្វិលក្រោយ ដោយបង្វិលត្រគាកយ៉ាងលឿន',
          'បន្ថែមធាតុ Freestyle Poomsae៖ Tornado kick និងការរៀបចំ 540°',
        ],
        physicalSkills: [
          'ការទាត់ក្រោយ (Dwit-chagi)',
          'ការទាត់បង្វិលទំពក់ (Huryeo-chagi)',
          'ជំហរខ្លា (Beom-seogi) និងការវាយជង្គង់ (Mureup-chigi)',
          'Tornado Kick និងការលោតទាត់វាស់',
        ],
        tracks: {
          poomsae: 'Taegeuk 6 និង 7៖ ចលនាយឺត ជំហរខ្លា និងស្ថិរភាពដូចភ្នំ',
          demonstration: 'ក្បាច់សម្តែងដែលមានពេលវេលាស្របជាមួយដៃគូ',
          tricking: 'Tornado kick, Cheat 360 និងមូលដ្ឋានចលនាលើអាកាស',
          hosinsul: 'ការការពារពីការច្របាច់ក និងការឱបរឹតខ្លួន',
          breaking: 'ក្តារ ១ សន្លឹក៖ ទាត់បង្វិលក្រោយ',
        },
        requirements: [
          'Taegeuk 6 និង Taegeuk 7',
          'ការទាត់ក្រោយ (Dwit-chagi) ឱ្យចំគោលដៅ',
          'ការទាត់បង្វិលទំពក់ (Huryeo-chagi) កម្រិតក្បាល',
          'Tricking៖ Cheat 360 និង Tornado kick',
          'Hosinsul៖ ការដោះខ្លួនពីការច្របាច់ក និងការឱបរឹតខ្លួន',
        ],
      },
      zh: {
        name: '蓝带',
        shortName: '蓝带',
        rankTitle: '4级 – 3级',
        poomsae: '太极六章 (Yuk Jang) 与太极七章 (Chil Jang)',
        poomsaeMeaning: '六章象征“坎”(水)：流动不息、随势应变。七章象征“艮”(山)：沉静稳固、不可动摇。',
        meaning: '无垠的天空：幼苗向着天空生长，终成参天大树。',
        philosophy: '动如流水，静如山岳。培养压力下的冷静与空中的控制力。',
        timeline: '9 – 14 个月',
        focus: '虎步 (Beom-seogi)、骑马步、剪刀格挡与交叉格挡、膝击、里合腿、后踢与旋转踢。',
        syllabusGoals: ['通过虎步与骑马步控制动作转换', '以快速转髋完成转身后踢', '加入自由品势元素：旋风踢与 540° 准备动作'],
        physicalSkills: ['后踢 (Dwit-chagi)', '后旋踢 (Huryeo-chagi)', '虎步 (Beom-seogi) 与膝击 (Mureup-chigi)', '旋风踢与跳横踢'],
        tracks: {
          poomsae: '太极六章与七章：慢动作、虎步与山岳般的稳定',
          demonstration: '与搭档配合节奏的表演套路',
          tricking: '旋风踢、Cheat 360 与腾空基础',
          hosinsul: '应对锁喉与熊抱的防御',
          breaking: '一块木板：转身后踢',
        },
        requirements: [
          '太极六章与太极七章',
          '后踢 (Dwit-chagi) 准确击中目标',
          '上段后旋踢 (Huryeo-chagi)',
          '特技：Cheat 360 与旋风踢',
          '护身术：摆脱锁喉与熊抱',
        ],
      },
      ko: {
        name: '파란띠',
        shortName: '파란띠',
        rankTitle: '4급 – 3급',
        poomsae: '태극 6장과 태극 7장',
        poomsaeMeaning: '태극 6장은 감(坎), 곧 물을 뜻하며 끊임없이 흐르는 유연한 적응을 상징합니다. 태극 7장은 간(艮), 곧 산을 뜻하며 고요함과 흔들림 없는 안정을 상징합니다.',
        meaning: '끝없는 하늘: 새싹이 하늘을 향해 자라 큰 나무가 되어 가는 모습을 뜻합니다.',
        philosophy: '물처럼 흐르고 산처럼 선다. 압박 속의 침착함과 공중에서의 조절 능력을 기릅니다.',
        timeline: '9 – 14개월',
        focus: '범서기, 주춤서기, 가위막기와 엇걸어막기, 무릎치기, 반달차기, 뒤차기, 회전 발차기.',
        syllabusGoals: ['범서기와 주춤서기로 동작 전환 조절하기', '빠른 허리 회전으로 뒤차기 수행하기', '자유 품새 요소 추가: 회오리차기와 540° 준비 동작'],
        physicalSkills: ['뒤차기', '뒤후려차기', '범서기와 무릎치기', '회오리차기와 뛰어돌려차기'],
        tracks: {
          poomsae: '태극 6·7장: 느린 동작, 범서기, 산처럼 굳건한 안정',
          demonstration: '파트너와 타이밍을 맞추는 시범 루틴',
          tricking: '회오리차기, 치트 360, 공중 동작 기초',
          hosinsul: '목조르기와 껴안기에 대한 방어',
          breaking: '송판 1장: 뒤차기',
        },
        requirements: [
          '태극 6장과 태극 7장',
          '정확한 뒤차기',
          '얼굴 높이 뒤후려차기',
          '트릭킹: 치트 360과 회오리차기',
          '호신술: 목조르기와 껴안기에서 빠져나오기',
        ],
      },
    },
  },
  {
    id: 'brown',
    name: 'Brown Belt',
    shortName: 'Brown',
    koreanName: '갈색띠 (Galsaek-tti)',
    rankTitle: '2nd – 1st Geup',
    hex: '#A05B00',
    borderHex: '#6F3E00',
    textColor: '#FFFFFF',
    poomsae: 'Taegeuk 8 (Pal Jang) & mastery of the full Taegeuk series',
    forms: ['taegeuk-8'],
    alsoTrains: ['Full Taegeuk series review (Taegeuk 1–8)'],
    poomsaeMeaning: 'Pal Jang represents Gon (Earth): the source of life and the completion of the Taegeuk cycle, preparing the student for the black belt forms.',
    meaning: 'Ripening & Solidity: the earth solidifying into immovable rock. The student has an unshakeable foundation.',
    philosophy: 'Steadfastness and character leadership. The martial artist anchors themselves against adversity and begins guiding junior ranks.',
    timeline: '14 – 18 Months',
    focus: 'Double jumping front kick (Dubal Dangsang-chagi), mountain block (Oesanteul-makki), and polishing all eight Taegeuk forms.',
    syllabusGoals: [
      'Perform all eight Taegeuk forms to competition standard',
      'Control aerial kicks and landings in Taegeuk 8',
      'Assist instructors in junior classes',
    ],
    physicalSkills: [
      'Double Jumping Front Kick (Dubal Dangsang-chagi)',
      'Mountain Block (Oesanteul-makki)',
      'Jumping Front Kick (Twieo Ap-chagi)',
      'Tricking: 540° kick setup and landing',
    ],
    tracks: {
      poomsae: 'Taegeuk 8 and a full review of Taegeuk 1–8',
      demonstration: 'Lead a team line in demonstration routines',
      tricking: '540° kick and butterfly twist progressions',
      hosinsul: 'Defences against strikes and grabs from behind',
      breaking: 'Two boards: jumping front kick + spinning back kick',
    },
    requirements: [
      'Taegeuk 8 with a full Taegeuk 1–8 review',
      'Double jumping front kick with a controlled landing',
      'Jumping front kick over an obstacle',
      'Tricking: 540° kick setup and landing',
      'Assistant coaching in junior classes',
    ],
    translations: {
      km: {
        name: 'ខ្សែក្រវាត់ត្នោត',
        shortName: 'ពណ៌ត្នោត',
        rankTitle: 'Geup ទី ២ – ១',
        poomsae: 'Taegeuk 8 (Pal Jang) និងការស្ទាត់ជំនាញ Taegeuk ទាំងមូល',
        alsoTrains: ['រំលឹក Taegeuk ទាំងមូល (Taegeuk 1–8)'],
        poomsaeMeaning: 'Pal Jang តំណាងឱ្យ Gon (ផែនដី)៖ ប្រភពនៃជីវិត និងការបញ្ចប់វដ្ត Taegeuk ដែលរៀបចំសិស្សសម្រាប់ទម្រង់ខ្សែក្រវាត់ខ្មៅ។',
        meaning: 'ភាពទុំ និងភាពរឹងមាំ៖ ដីដែលរឹងដូចថ្មមិនរង្គើ។ សិស្សមានមូលដ្ឋានរឹងមាំមិនរង្គោះរង្គើ។',
        philosophy: 'ភាពខ្ជាប់ខ្ជួន និងភាពជាអ្នកដឹកនាំ។ អ្នកហាត់ឈររឹងមាំនៅចំពោះមុខឧបសគ្គ និងចាប់ផ្តើមណែនាំសិស្សកម្រិតទាប។',
        timeline: '១៤ – ១៨ ខែ',
        focus: 'ការលោតទាត់ត្រង់មុខពីរជើង (Dubal Dangsang-chagi) ការទប់ភ្នំ (Oesanteul-makki) និងការកែលម្អ Taegeuk ទាំងប្រាំបី។',
        syllabusGoals: [
          'សម្តែង Taegeuk ទាំងប្រាំបី តាមស្តង់ដារប្រកួត',
          'គ្រប់គ្រងការទាត់លើអាកាស និងការចុះចតក្នុង Taegeuk 8',
          'ជួយគ្រូបង្វឹកក្នុងថ្នាក់សិស្សកម្រិតទាប',
        ],
        physicalSkills: [
          'ការលោតទាត់ត្រង់មុខពីរជើង (Dubal Dangsang-chagi)',
          'ការទប់ភ្នំ (Oesanteul-makki)',
          'ការលោតទាត់ត្រង់មុខ (Twieo Ap-chagi)',
          'Tricking៖ ការរៀបចំ និងការចុះចត 540°',
        ],
        tracks: {
          poomsae: 'Taegeuk 8 និងការរំលឹក Taegeuk 1–8 ទាំងមូល',
          demonstration: 'ដឹកនាំជួរក្រុមក្នុងក្បាច់សម្តែង',
          tricking: 'ការហ្វឹកជាដំណាក់កាល 540° kick និង Butterfly twist',
          hosinsul: 'ការការពារពីការវាយ និងការចាប់ពីក្រោយ',
          breaking: 'ក្តារ ២៖ លោតទាត់ត្រង់មុខ + ទាត់បង្វិលក្រោយ',
        },
        requirements: [
          'Taegeuk 8 ជាមួយការរំលឹក Taegeuk 1–8 ទាំងមូល',
          'ការលោតទាត់ត្រង់មុខពីរជើង ដោយចុះចតមានការគ្រប់គ្រង',
          'ការលោតទាត់ត្រង់មុខរំលងឧបសគ្គ',
          'Tricking៖ ការរៀបចំ និងការចុះចត 540°',
          'ជំនួយការបង្វឹកក្នុងថ្នាក់សិស្សកម្រិតទាប',
        ],
      },
      zh: {
        name: '棕带',
        shortName: '棕带',
        rankTitle: '2级 – 1级',
        poomsae: '太极八章 (Pal Jang) 与完整太极系列的精通',
        alsoTrains: ['完整太极系列复习 (太极一至八章)'],
        poomsaeMeaning: '八章象征“坤”(地)：生命之源，也是太极循环的完成，为学员迈向黑带品势做好准备。',
        meaning: '成熟与坚实：大地凝结为不可撼动的磐石，学员已拥有稳固的根基。',
        philosophy: '坚定不移与品格领导力。习武者在逆境中站稳脚跟，并开始引导低级别学员。',
        timeline: '14 – 18 个月',
        focus: '双飞前踢 (Dubal Dangsang-chagi)、山形格挡 (Oesanteul-makki)，以及打磨全部八个太极品势。',
        syllabusGoals: ['以比赛标准完成全部八个太极品势', '控制太极八章中的腾空踢与落地', '协助教练带领初级班'],
        physicalSkills: ['双飞前踢 (Dubal Dangsang-chagi)', '山形格挡 (Oesanteul-makki)', '跳前踢 (Twieo Ap-chagi)', '特技：540° 踢的准备与落地'],
        tracks: {
          poomsae: '太极八章，以及太极一至八章完整复习',
          demonstration: '在表演套路中带领一列队员',
          tricking: '540° 踢与蝴蝶转体进阶',
          hosinsul: '应对来自身后的击打与抓握',
          breaking: '两块木板：跳前踢 + 转身后踢',
        },
        requirements: [
          '太极八章及太极一至八章完整复习',
          '双飞前踢并稳定落地',
          '跳前踢越过障碍物',
          '特技：540° 踢的准备与落地',
          '在初级班担任助教',
        ],
      },
      ko: {
        name: '갈색띠',
        shortName: '갈색띠',
        rankTitle: '2급 – 1급',
        poomsae: '태극 8장과 태극 품새 전체 숙달',
        alsoTrains: ['태극 품새 전체 복습 (태극 1–8장)'],
        poomsaeMeaning: '태극 8장은 곤(坤), 곧 땅을 뜻하며 생명의 근원이자 태극 순환의 완성으로, 유단자 품새를 준비하는 단계입니다.',
        meaning: '성숙과 견고함: 땅이 흔들리지 않는 바위로 굳어지듯, 수련생은 흔들림 없는 기초를 갖춥니다.',
        philosophy: '꿋꿋함과 리더십. 역경 앞에서 중심을 지키고 후배 수련생을 이끌기 시작합니다.',
        timeline: '14 – 18개월',
        focus: '두발당성차기, 외산틀막기, 그리고 태극 품새 8개 전체 다듬기.',
        syllabusGoals: ['태극 품새 8개 전체를 경기 수준으로 수행', '태극 8장의 뛰어차기와 착지 조절', '하급자 수업에서 사범님 보조'],
        physicalSkills: ['두발당성차기', '외산틀막기', '뛰어앞차기', '트릭킹: 540° 발차기 준비와 착지'],
        tracks: {
          poomsae: '태극 8장과 태극 1–8장 전체 복습',
          demonstration: '시범 루틴에서 팀 라인 이끌기',
          tricking: '540° 킥과 버터플라이 트위스트 단계별 훈련',
          hosinsul: '뒤에서 오는 타격과 잡기에 대한 방어',
          breaking: '송판 2장: 뛰어앞차기 + 뒤차기',
        },
        requirements: [
          '태극 8장과 태극 1–8장 전체 복습',
          '안정적으로 착지하는 두발당성차기',
          '장애물을 넘는 뛰어앞차기',
          '트릭킹: 540° 발차기 준비와 착지',
          '하급자 수업 보조 지도',
        ],
      },
    },
  },
  {
    id: 'red',
    name: 'Red Belt',
    shortName: 'Red',
    koreanName: '빨간띠 (Ppalgan-tti)',
    rankTitle: 'Candidate Dan (Cho Dan Bo)',
    hex: '#EF2F38',
    borderHex: '#B12027',
    textColor: '#FFFFFF',
    poomsae: 'Koryo, the first black belt form',
    forms: ['koryo'],
    alsoTrains: ['Full Taegeuk series review (Taegeuk 1–8)'],
    poomsaeMeaning: 'Koryo (고려) honours the Goryeo dynasty and the seonbi spirit: strong conviction and an unyielding will. Its 士 floor pattern means “scholar-warrior”.',
    meaning: 'Danger & Fire: immense physical power. The student must exercise supreme self-restraint, modesty and composure.',
    philosophy: 'Power without restraint is destructive. Red belt requires emotional discipline, moral integrity and preparation for the Dan examination.',
    timeline: '18 – 24 Months',
    focus: 'Koryo, knife-hand and target strikes, jumping side kick, and preparation for the Kukkiwon Dan / Poom examination.',
    syllabusGoals: [
      'Perform Koryo with control, power and the correct 士 pattern',
      'Review the full Taegeuk series with no deductions',
      'Prepare for the Kukkiwon Dan / Poom examination',
    ],
    physicalSkills: [
      'Koryo double side kick (Yeop-chagi)',
      'Knife-hand outer strike and target strikes',
      'Jumping Side Kick (Twieo Yeop-chagi)',
      '540° kick & butterfly twist',
    ],
    tracks: {
      poomsae: 'Koryo, plus the full Taegeuk series',
      demonstration: 'Solo segment in team demonstration shows',
      tricking: '540° kick and butterfly twist',
      hosinsul: 'Knife and stick defence basics',
      breaking: 'Three targets: jumping kick, 360° spin kick and knife-hand',
    },
    requirements: [
      'Koryo to examination standard',
      'Full Taegeuk 1–8 review',
      'Three-target breaking combination',
      '540° kick and butterfly twist',
      'Written essay on Taekwondo philosophy and the five tenets',
    ],
    translations: {
      km: {
        name: 'ខ្សែក្រវាត់ក្រហម',
        shortName: 'ពណ៌ក្រហម',
        rankTitle: 'បេក្ខជនដាន់ (Cho Dan Bo)',
        poomsae: 'Koryo ដែលជាទម្រង់ខ្សែក្រវាត់ខ្មៅដំបូង',
        alsoTrains: ['រំលឹក Taegeuk ទាំងមូល (Taegeuk 1–8)'],
        poomsaeMeaning: 'Koryo (고려) គោរពដល់រាជវង្ស Goryeo និងស្មារតី Seonbi៖ ជំនឿមុតមាំ និងឆន្ទៈមិនបត់បែន។ លំនាំជាន់ 士 មានន័យថា “អ្នកប្រាជ្ញ-អ្នកចម្បាំង”។',
        meaning: 'គ្រោះថ្នាក់ និងភ្លើង៖ ថាមពលរាងកាយដ៏ខ្លាំងក្លា។ សិស្សត្រូវចេះទប់ចិត្តខ្ពស់បំផុត សុភាពរាបសា និងស្ងប់ស្ងាត់។',
        philosophy: 'កម្លាំងដែលគ្មានការទប់ចិត្ត គឺជាការបំផ្លិចបំផ្លាញ។ ខ្សែក្រវាត់ក្រហមទាមទារវិន័យផ្លូវចិត្ត សុចរិតភាព និងការត្រៀមខ្លួនសម្រាប់ការប្រលងដាន់។',
        timeline: '១៨ – ២៤ ខែ',
        focus: 'Koryo ការកាប់ដោយបាតដៃ និងការវាយគោលដៅ ការលោតទាត់ចំហៀង និងការត្រៀមប្រលង Dan / Poom របស់ Kukkiwon។',
        syllabusGoals: [
          'សម្តែង Koryo ដោយមានការគ្រប់គ្រង កម្លាំង និងលំនាំ 士 ត្រឹមត្រូវ',
          'រំលឹក Taegeuk ទាំងមូល ដោយគ្មានការកាត់ពិន្ទុ',
          'ត្រៀមខ្លួនសម្រាប់ការប្រលង Dan / Poom របស់ Kukkiwon',
        ],
        physicalSkills: [
          'ការទាត់ចំហៀងពីរដងក្នុង Koryo (Yeop-chagi)',
          'ការកាប់បាតដៃទៅខាងក្រៅ និងការវាយគោលដៅ',
          'ការលោតទាត់ចំហៀង (Twieo Yeop-chagi)',
          '540° kick និង Butterfly twist',
        ],
        tracks: {
          poomsae: 'Koryo និង Taegeuk ទាំងមូល',
          demonstration: 'ផ្នែកសម្តែងទោលក្នុងកម្មវិធីសម្តែងជាក្រុម',
          tricking: '540° kick និង Butterfly twist',
          hosinsul: 'មូលដ្ឋានការការពារពីកាំបិត និងដំបង',
          breaking: 'គោលដៅ ៣៖ លោតទាត់ ទាត់បង្វិល 360° និងកាប់បាតដៃ',
        },
        requirements: [
          'Koryo តាមស្តង់ដារប្រលង',
          'រំលឹក Taegeuk 1–8 ទាំងមូល',
          'ការបំបែកក្តារបន្សំបីគោលដៅ',
          '540° kick និង Butterfly twist',
          'អត្ថបទសរសេរអំពីទស្សនវិជ្ជាតេក្វាន់ដូ និងគោលការណ៍ទាំងប្រាំ',
        ],
      },
      zh: {
        name: '红带',
        shortName: '红带',
        rankTitle: '准黑带 (Cho Dan Bo)',
        poomsae: '高丽 (Koryo)：第一个黑带品势',
        alsoTrains: ['完整太极系列复习 (太极一至八章)'],
        poomsaeMeaning: '高丽品势 (고려) 纪念高丽王朝与“士”的精神：坚定的信念与不屈的意志。其“士”字演武线意为“文武兼备之士”。',
        meaning: '危险与火焰：强大的身体力量。学员必须做到高度自制、谦逊与沉着。',
        philosophy: '失去节制的力量具有破坏性。红带要求情绪自律、道德操守，并为段位考核做好准备。',
        timeline: '18 – 24 个月',
        focus: '高丽品势、手刀与目标击打、跳侧踢，以及备考国技院段 / 品位考核。',
        syllabusGoals: ['以控制力、力量与正确的“士”字演武线完成高丽品势', '完整复习太极系列，零扣分', '备考国技院段 / 品位考核'],
        physicalSkills: ['高丽品势中的连续侧踢 (Yeop-chagi)', '手刀外击与目标击打', '跳侧踢 (Twieo Yeop-chagi)', '540° 踢与蝴蝶转体'],
        tracks: {
          poomsae: '高丽品势，加上完整太极系列',
          demonstration: '在团体表演中担任个人独演段落',
          tricking: '540° 踢与蝴蝶转体',
          hosinsul: '防刀与防棍基础',
          breaking: '三个目标：跳踢、360° 旋转踢与手刀',
        },
        requirements: [
          '高丽品势达到考核标准',
          '太极一至八章完整复习',
          '三目标组合击破',
          '540° 踢与蝴蝶转体',
          '撰写关于跆拳道哲学与五大信条的文章',
        ],
      },
      ko: {
        name: '빨간띠',
        shortName: '빨간띠',
        rankTitle: '초단보 (유단자 후보)',
        poomsae: '고려, 첫 번째 유단자 품새',
        alsoTrains: ['태극 품새 전체 복습 (태극 1–8장)'],
        poomsaeMeaning: '고려 품새는 고려 왕조와 선비 정신, 곧 강한 신념과 굽히지 않는 의지를 기립니다. 품새선 士는 ‘학문과 무예를 갖춘 선비’를 뜻합니다.',
        meaning: '위험과 불: 강한 신체적 힘을 뜻합니다. 수련생은 최고의 자제력과 겸손, 침착함을 갖춰야 합니다.',
        philosophy: '절제 없는 힘은 파괴적입니다. 빨간띠는 감정 조절, 바른 품성, 그리고 승단 심사 준비를 요구합니다.',
        timeline: '18 – 24개월',
        focus: '고려, 손날치기와 표적치기, 뛰어옆차기, 국기원 단 / 품 심사 준비.',
        syllabusGoals: ['통제력과 힘, 바른 士자 품새선으로 고려 수행', '감점 없이 태극 품새 전체 복습', '국기원 단 / 품 심사 준비'],
        physicalSkills: ['고려 품새의 거듭옆차기', '손날바깥치기와 표적치기', '뛰어옆차기', '540° 발차기와 버터플라이 트위스트'],
        tracks: {
          poomsae: '고려와 태극 품새 전체',
          demonstration: '팀 시범에서 개인 솔로 파트',
          tricking: '540° 발차기와 버터플라이 트위스트',
          hosinsul: '칼과 막대기 방어 기초',
          breaking: '3개 표적: 뛰어차기, 360° 회전 발차기, 손날',
        },
        requirements: [
          '심사 수준의 고려',
          '태극 1–8장 전체 복습',
          '3표적 연속 격파',
          '540° 발차기와 버터플라이 트위스트',
          '태권도 철학과 5대 덕목에 관한 에세이',
        ],
      },
    },
  },
  {
    id: 'black-1',
    name: 'Black Belt · 1st Dan',
    shortName: 'Black 1st Dan',
    koreanName: '검은띠 1단 (Il-dan)',
    rankTitle: '1st Dan · 1st Poom (under 15)',
    hex: '#000000',
    borderHex: '#333333',
    textColor: '#FFFFFF',
    danBars: 1,
    poomsae: 'Keumgang, Taebaek, Pyongwon, Sipjin & Jitae, plus New Poomsae and Freestyle Poomsae',
    forms: ['keumgang', 'taebaek', 'pyongwon', 'sipjin', 'jitae'],
    alsoTrains: ['New Poomsae (for your age division)', 'Freestyle Poomsae'],
    poomsaeMeaning: 'The black belt (Yudanja) forms: Keumgang (diamond strength), Taebaek (the sacred bright mountain), Pyongwon (the vast plain), Sipjin (ten longevities) and Jitae (a person standing on the earth).',
    meaning: 'Mastery & a New Beginning: the synthesis of all colours. The student has mastered the basics and is ready to begin true training.',
    philosophy: 'A black belt is a white belt who never gave up. A lifelong pursuit of perfection and selfless mentorship.',
    timeline: '2+ Years',
    focus: 'All black belt forms through Jitae, New Poomsae for your age division, freestyle poomsae choreography and Kukkiwon Dan / Poom certification.',
    syllabusGoals: [
      'Perform Keumgang to Jitae with competition-level precision',
      'Learn the New Poomsae for your age division',
      'Choreograph a freestyle poomsae routine to music',
    ],
    physicalSkills: [
      'Keumgang crane stance and diamond blocks',
      'Freestyle Poomsae: jumping kicks, spins and acrobatics',
      'New Poomsae (by age division)',
      '720° aerial board breaking',
    ],
    tracks: {
      poomsae: 'Keumgang, Taebaek, Pyongwon, Sipjin and Jitae + New Poomsae',
      demonstration: 'Perform and help choreograph demonstration routines',
      tricking: 'Advanced combinations for freestyle poomsae (540°, 720°, flips)',
      hosinsul: 'Full Kukkiwon hosinsul syllabus, including weapon defence',
      breaking: '720° spinning kick and multi-board speed breaks',
    },
    requirements: [
      'Official Kukkiwon Dan / Poom examination',
      'Keumgang, Taebaek, Pyongwon, Sipjin and Jitae',
      'A freestyle poomsae routine and the New Poomsae for your age division',
      'A performance in a team demonstration show',
      'Mentoring junior ranks (the Infinity mindset)',
    ],
    translations: {
      km: {
        name: 'ខ្សែក្រវាត់ខ្មៅ · ១ ដាន់',
        shortName: 'ខ្មៅ ១ ដាន់',
        rankTitle: '១ ដាន់ · ១ ពូម (ក្រោម ១៥ ឆ្នាំ)',
        poomsae: 'Keumgang, Taebaek, Pyongwon, Sipjin និង Jitae ព្រមទាំង Poomsae ថ្មី និង Freestyle Poomsae',
        alsoTrains: ['Poomsae ថ្មី (តាមក្រុមអាយុរបស់អ្នក)', 'Freestyle Poomsae'],
        poomsaeMeaning: 'ទម្រង់ខ្សែក្រវាត់ខ្មៅ (Yudanja)៖ Keumgang (កម្លាំងពេជ្រ) Taebaek (ភ្នំភ្លឺដ៏ពិសិដ្ឋ) Pyongwon (វាលទំនាបដ៏ធំល្វឹងល្វើយ) Sipjin (អាយុវែងទាំងដប់) និង Jitae (មនុស្សឈរលើផែនដី)។',
        meaning: 'ការស្ទាត់ជំនាញ និងការចាប់ផ្តើមថ្មី៖ ការរួមបញ្ចូលពណ៌ទាំងអស់។ សិស្សបានស្ទាត់មូលដ្ឋាន ហើយត្រៀមខ្លួនចាប់ផ្តើមការហ្វឹកហាត់ពិតប្រាកដ។',
        philosophy: 'ខ្សែក្រវាត់ខ្មៅ គឺជាខ្សែក្រវាត់សដែលមិនដែលបោះបង់។ ការស្វែងរកភាពល្អឥតខ្ចោះពេញមួយជីវិត និងការណែនាំអ្នកដទៃដោយមិនគិតពីខ្លួនឯង។',
        timeline: '២ ឆ្នាំឡើងទៅ',
        focus: 'ទម្រង់ខ្សែក្រវាត់ខ្មៅទាំងអស់រហូតដល់ Jitae, Poomsae ថ្មីតាមក្រុមអាយុរបស់អ្នក ការរៀបចំក្បាច់ Freestyle Poomsae និងវិញ្ញាបនបត្រ Dan / Poom របស់ Kukkiwon។',
        syllabusGoals: [
          'សម្តែងពី Keumgang ដល់ Jitae ដោយភាពជាក់លាក់កម្រិតប្រកួត',
          'រៀន Poomsae ថ្មីសម្រាប់ក្រុមអាយុរបស់អ្នក',
          'រៀបចំក្បាច់ Freestyle Poomsae ជាមួយតន្ត្រី',
        ],
        physicalSkills: [
          'ជំហរក្រៀល និងការទប់ពេជ្រក្នុង Keumgang',
          'Freestyle Poomsae៖ ការលោតទាត់ ការបង្វិល និងកាយសម្ព័ន្ធ',
          'Poomsae ថ្មី (តាមក្រុមអាយុ)',
          'ការបំបែកក្តារលើអាកាស 720°',
        ],
        tracks: {
          poomsae: 'Keumgang, Taebaek, Pyongwon, Sipjin និង Jitae + Poomsae ថ្មី',
          demonstration: 'សម្តែង និងជួយរៀបចំក្បាច់សម្តែង',
          tricking: 'បន្សំកម្រិតខ្ពស់សម្រាប់ Freestyle Poomsae (540°, 720°, flips)',
          hosinsul: 'កម្មវិធី Hosinsul Kukkiwon ពេញលេញ រួមទាំងការការពារពីអាវុធ',
          breaking: 'ទាត់បង្វិល 720° និងការបំបែកក្តារច្រើនសន្លឹកយ៉ាងលឿន',
        },
        requirements: [
          'ការប្រលង Dan / Poom ផ្លូវការរបស់ Kukkiwon',
          'Keumgang, Taebaek, Pyongwon, Sipjin និង Jitae',
          'ក្បាច់ Freestyle Poomsae និង Poomsae ថ្មីសម្រាប់ក្រុមអាយុរបស់អ្នក',
          'ការសម្តែងក្នុងកម្មវិធីសម្តែងជាក្រុម',
          'ការណែនាំសិស្សកម្រិតទាប (ផ្នត់គំនិត Infinity)',
        ],
      },
      zh: {
        name: '黑带 · 一段',
        shortName: '黑带一段',
        rankTitle: '一段 · 一品 (15岁以下)',
        poomsae: '金刚、太白、平原、十进与地跆，以及新品势与自由品势',
        alsoTrains: ['新品势 (按年龄组别)', '自由品势'],
        poomsaeMeaning: '黑带 (有段者) 品势：金刚 (金刚石般的坚固力量)、太白 (神圣光明之山)、平原 (广阔的平原)、十进 (十长生) 与地跆 (立足大地之人)。',
        meaning: '精通与新的开始：融合所有颜色。学员已掌握基础，准备开始真正的修炼。',
        philosophy: '黑带就是从未放弃的白带。终身追求完美，并无私地指导他人。',
        timeline: '2 年以上',
        focus: '直至地跆的全部黑带品势、所属年龄组的新品势、自由品势编排，以及国技院段 / 品位认证。',
        syllabusGoals: ['以比赛级精准度完成金刚至地跆', '学习所属年龄组的新品势', '配合音乐编排自由品势套路'],
        physicalSkills: ['金刚品势的鹤立步与金刚格挡', '自由品势：跳踢、旋转与特技', '新品势 (按年龄组别)', '720° 腾空击破'],
        tracks: {
          poomsae: '金刚、太白、平原、十进与地跆 + 新品势',
          demonstration: '参与表演并协助编排表演套路',
          tricking: '自由品势高阶组合 (540°、720°、空翻)',
          hosinsul: '完整的国技院护身术大纲，包括防器械',
          breaking: '720° 旋转踢与多板快速击破',
        },
        requirements: [
          '国技院官方段 / 品位考核',
          '金刚、太白、平原、十进与地跆',
          '一套自由品势套路，以及所属年龄组的新品势',
          '参加一场团体表演',
          '指导低级别学员 (Infinity 精神)',
        ],
      },
      ko: {
        name: '검은띠 · 1단',
        shortName: '검은띠 1단',
        rankTitle: '1단 · 1품 (15세 미만)',
        poomsae: '금강, 태백, 평원, 십진, 지태와 새 품새, 자유 품새',
        alsoTrains: ['새 품새 (연령별)', '자유 품새'],
        poomsaeMeaning: '유단자 품새: 금강(금강석처럼 단단한 힘), 태백(신성하고 밝은 산), 평원(넓은 들판), 십진(십장생), 지태(땅을 딛고 선 사람).',
        meaning: '숙달과 새로운 시작: 모든 색이 하나로 모인 띠입니다. 기본을 익힌 수련생이 진정한 수련을 시작할 준비가 되었음을 뜻합니다.',
        philosophy: '검은띠는 포기하지 않은 흰띠입니다. 평생 완성을 추구하고 아낌없이 후배를 이끕니다.',
        timeline: '2년 이상',
        focus: '지태까지의 유단자 품새, 연령별 새 품새, 자유 품새 구성, 국기원 단 / 품 취득.',
        syllabusGoals: ['금강부터 지태까지 경기 수준의 정확성으로 수행', '자신의 연령에 맞는 새 품새 익히기', '음악에 맞춘 자유 품새 루틴 구성'],
        physicalSkills: ['금강 품새의 학다리서기와 금강막기', '자유 품새: 뛰어차기, 회전, 아크로바틱', '새 품새 (연령별)', '720° 공중 격파'],
        tracks: {
          poomsae: '금강, 태백, 평원, 십진, 지태 + 새 품새',
          demonstration: '시범 공연 참여와 안무 구성 보조',
          tricking: '자유 품새를 위한 고급 연결 동작 (540°, 720°, 플립)',
          hosinsul: '무기 방어를 포함한 국기원 호신술 전 과정',
          breaking: '720° 회전 발차기와 다수 송판 스피드 격파',
        },
        requirements: [
          '국기원 공식 단 / 품 심사',
          '금강, 태백, 평원, 십진, 지태',
          '자유 품새 루틴과 연령별 새 품새',
          '팀 시범 공연 참여',
          '하급자 지도 (Infinity 정신)',
        ],
      },
    },
  },
  {
    id: 'black-2',
    name: 'Black Belt · 2nd Dan',
    shortName: 'Black 2nd Dan',
    koreanName: '검은띠 2단 (Ee-dan)',
    rankTitle: '2nd Dan · 2nd Poom (under 15)',
    hex: '#000000',
    borderHex: '#333333',
    textColor: '#FFFFFF',
    danBars: 2,
    poomsae: 'Cheonkwon, Hansu & Ilyeo, plus advanced Freestyle and New Poomsae',
    forms: ['cheonkwon', 'hansu', 'ilyeo'],
    alsoTrains: ['Advanced Freestyle Poomsae', 'New Poomsae (advanced)'],
    poomsaeMeaning: 'The highest black belt forms: Cheonkwon (the great power of heaven), Hansu (water, softness that overcomes hardness) and Ilyeo (oneness of body and mind).',
    meaning: 'Depth & Responsibility: the second Dan deepens mastery and turns the student into a role model for the next generation.',
    philosophy: 'Mastery is shared, not kept. The 2nd Dan refines every form and begins to coach, judge and lead.',
    timeline: '3+ Years (at least 1 year after 1st Dan)',
    focus: 'Cheonkwon, Hansu and Ilyeo, advanced freestyle poomsae, demonstration leadership and assistant coaching.',
    syllabusGoals: [
      'Perform Cheonkwon, Hansu and Ilyeo with depth and control',
      'Create and lead advanced freestyle and demonstration routines',
      'Assist instructors and mentor colour-belt students',
    ],
    physicalSkills: [
      'Cheonkwon slow, circular movements (Nalgae-pyeogi)',
      'Hansu and Ilyeo balance and flow',
      'Advanced freestyle poomsae combinations',
      'Coaching and judging fundamentals',
    ],
    tracks: {
      poomsae: 'Cheonkwon, Hansu and Ilyeo + advanced New Poomsae',
      demonstration: 'Choreograph and lead full demonstration shows',
      tricking: 'Advanced aerials for freestyle and demonstration (720°, flips, twists)',
      hosinsul: 'Teach hosinsul to junior students',
      breaking: 'Creative breaking sequences for demonstrations',
    },
    requirements: [
      'Kukkiwon 2nd Dan / 2nd Poom examination (at least 1 year after 1st Dan)',
      'Cheonkwon, Hansu and Ilyeo',
      'An advanced freestyle poomsae routine',
      'Leading a demonstration routine',
      'Assistant instructor hours with junior classes',
    ],
    translations: {
      km: {
        name: 'ខ្សែក្រវាត់ខ្មៅ · ២ ដាន់',
        shortName: 'ខ្មៅ ២ ដាន់',
        rankTitle: '២ ដាន់ · ២ ពូម (ក្រោម ១៥ ឆ្នាំ)',
        poomsae: 'Cheonkwon, Hansu និង Ilyeo ព្រមទាំង Freestyle Poomsae និង Poomsae ថ្មីកម្រិតខ្ពស់',
        alsoTrains: ['Freestyle Poomsae កម្រិតខ្ពស់', 'Poomsae ថ្មី (កម្រិតខ្ពស់)'],
        poomsaeMeaning: 'ទម្រង់ខ្សែក្រវាត់ខ្មៅកម្រិតខ្ពស់បំផុត៖ Cheonkwon (អំណាចដ៏ធំនៃមេឃ) Hansu (ទឹក ភាពទន់ដែលឈ្នះភាពរឹង) និង Ilyeo (ការរួមកាយ និងចិត្តជាតែមួយ)។',
        meaning: 'ជម្រៅ និងការទទួលខុសត្រូវ៖ ដាន់ទី ២ ពង្រឹងការស្ទាត់ជំនាញ និងធ្វើឱ្យសិស្សក្លាយជាគំរូសម្រាប់មនុស្សជំនាន់ក្រោយ។',
        philosophy: 'ជំនាញត្រូវចែករំលែក មិនមែនរក្សាទុកតែម្នាក់ឯងទេ។ ដាន់ទី ២ កែលម្អគ្រប់ទម្រង់ និងចាប់ផ្តើមបង្វឹក វិនិច្ឆ័យ និងដឹកនាំ។',
        timeline: '៣ ឆ្នាំឡើងទៅ (យ៉ាងតិច ១ ឆ្នាំក្រោយ ១ ដាន់)',
        focus: 'Cheonkwon, Hansu និង Ilyeo, Freestyle Poomsae កម្រិតខ្ពស់ ការដឹកនាំការសម្តែង និងជំនួយការបង្វឹក។',
        syllabusGoals: [
          'សម្តែង Cheonkwon, Hansu និង Ilyeo ដោយជម្រៅ និងការគ្រប់គ្រង',
          'បង្កើត និងដឹកនាំក្បាច់ Freestyle និងក្បាច់សម្តែងកម្រិតខ្ពស់',
          'ជួយគ្រូបង្វឹក និងណែនាំសិស្សខ្សែក្រវាត់ពណ៌',
        ],
        physicalSkills: [
          'ចលនាយឺត និងរាងរង្វង់ក្នុង Cheonkwon (Nalgae-pyeogi)',
          'លំនឹង និងភាពរលូនក្នុង Hansu និង Ilyeo',
          'បន្សំ Freestyle Poomsae កម្រិតខ្ពស់',
          'មូលដ្ឋានការបង្វឹក និងការវិនិច្ឆ័យ',
        ],
        tracks: {
          poomsae: 'Cheonkwon, Hansu និង Ilyeo + Poomsae ថ្មីកម្រិតខ្ពស់',
          demonstration: 'រៀបចំក្បាច់ និងដឹកនាំកម្មវិធីសម្តែងពេញលេញ',
          tricking: 'ចលនាលើអាកាសកម្រិតខ្ពស់សម្រាប់ Freestyle និងការសម្តែង (720°, flips, twists)',
          hosinsul: 'បង្រៀន Hosinsul ដល់សិស្សកម្រិតទាប',
          breaking: 'លំដាប់ការបំបែកក្តារបែបច្នៃប្រឌិតសម្រាប់ការសម្តែង',
        },
        requirements: [
          'ការប្រលង ២ ដាន់ / ២ ពូម របស់ Kukkiwon (យ៉ាងតិច ១ ឆ្នាំក្រោយ ១ ដាន់)',
          'Cheonkwon, Hansu និង Ilyeo',
          'ក្បាច់ Freestyle Poomsae កម្រិតខ្ពស់',
          'ការដឹកនាំក្បាច់សម្តែង',
          'ម៉ោងជំនួយការគ្រូបង្វឹកជាមួយថ្នាក់សិស្សកម្រិតទាប',
        ],
      },
      zh: {
        name: '黑带 · 二段',
        shortName: '黑带二段',
        rankTitle: '二段 · 二品 (15岁以下)',
        poomsae: '天拳、汉水与一如，以及高阶自由品势与新品势',
        alsoTrains: ['高阶自由品势', '新品势 (高阶)'],
        poomsaeMeaning: '最高阶的黑带品势：天拳 (上天的伟大力量)、汉水 (水，以柔克刚) 与一如 (身心合一)。',
        meaning: '深度与责任：二段深化技艺，使学员成为下一代的榜样。',
        philosophy: '技艺应当分享，而非独享。二段打磨每一套品势，并开始执教、裁判与领导。',
        timeline: '3 年以上 (取得一段后至少 1 年)',
        focus: '天拳、汉水与一如，高阶自由品势、表演领导力与助理教练工作。',
        syllabusGoals: ['以深度与控制力完成天拳、汉水与一如', '创编并带领高阶自由品势与表演套路', '协助教练并指导彩带学员'],
        physicalSkills: ['天拳的缓慢圆形动作 (Nalgae-pyeogi)', '汉水与一如的平衡与流畅', '高阶自由品势组合', '执教与裁判基础'],
        tracks: {
          poomsae: '天拳、汉水与一如 + 高阶新品势',
          demonstration: '编排并带领完整的表演',
          tricking: '用于自由品势与表演的高阶腾空动作 (720°、空翻、转体)',
          hosinsul: '向初级学员教授护身术',
          breaking: '为表演设计创意击破组合',
        },
        requirements: [
          '国技院二段 / 二品考核 (取得一段后至少 1 年)',
          '天拳、汉水与一如',
          '一套高阶自由品势套路',
          '带领一套表演套路',
          '在初级班担任助理教练的课时',
        ],
      },
      ko: {
        name: '검은띠 · 2단',
        shortName: '검은띠 2단',
        rankTitle: '2단 · 2품 (15세 미만)',
        poomsae: '천권, 한수, 일여와 고급 자유 품새, 새 품새',
        alsoTrains: ['고급 자유 품새', '새 품새 (고급)'],
        poomsaeMeaning: '최고 단계의 유단자 품새: 천권(하늘의 위대한 힘), 한수(물, 부드러움이 강함을 이김), 일여(몸과 마음이 하나 됨).',
        meaning: '깊이와 책임: 2단은 숙련을 더욱 깊게 하고, 수련생을 다음 세대의 본보기로 성장시킵니다.',
        philosophy: '숙련은 혼자 간직하는 것이 아니라 나누는 것입니다. 2단은 모든 품새를 다듬고 지도, 심판, 리더십을 시작합니다.',
        timeline: '3년 이상 (1단 취득 후 최소 1년)',
        focus: '천권, 한수, 일여, 고급 자유 품새, 시범 리더십과 보조 사범 활동.',
        syllabusGoals: ['깊이와 통제력으로 천권, 한수, 일여 수행', '고급 자유 품새와 시범 루틴 창작 및 지도', '사범님을 보조하고 유급자 수련생 지도'],
        physicalSkills: ['천권의 느리고 둥근 동작 (날개펴기)', '한수와 일여의 균형과 흐름', '고급 자유 품새 연결 동작', '지도와 심판 기초'],
        tracks: {
          poomsae: '천권, 한수, 일여 + 고급 새 품새',
          demonstration: '전체 시범 공연 구성과 지휘',
          tricking: '자유 품새와 시범을 위한 고급 공중 동작 (720°, 플립, 트위스트)',
          hosinsul: '하급자에게 호신술 지도',
          breaking: '시범을 위한 창의적인 연속 격파',
        },
        requirements: [
          '국기원 2단 / 2품 심사 (1단 취득 후 최소 1년)',
          '천권, 한수, 일여',
          '고급 자유 품새 루틴',
          '시범 루틴 지휘',
          '하급자 수업 보조 사범 시간',
        ],
      },
    },
  },
]

export interface TrainingDiscipline {
  key: keyof BeltTracks
  label: string
  korean: string
  /** One line for compact lists (home page). */
  summary: string
  /** A short paragraph for the full belt journey page. */
  description: string
  /** Library page with more detail, when there is one. */
  href?: string
  translations?: {
    km?: Partial<TrainingDisciplineText>
    zh?: Partial<TrainingDisciplineText>
    ko?: Partial<TrainingDisciplineText>
  }
}

export type TrainingDisciplineText = Pick<TrainingDiscipline, 'label' | 'summary' | 'description'>

/**
 * The disciplines trained at Infinity Taekwondo (traditional Kukkiwon Taekwondo), in the order the
 * belt tracks show them.
 */
export const TRAINING_DISCIPLINES: TrainingDiscipline[] = [
  {
    key: 'poomsae',
    label: 'Poomsae',
    korean: '품새',
    summary: 'Recognized, New and Freestyle Poomsae',
    description: 'Recognized Poomsae (the Taegeuk series and the black belt forms), the Kukkiwon New Poomsae for black belts, and Freestyle Poomsae choreographed to music.',
    href: '/library/poomsae',
    translations: {
      km: {
        label: 'Poomsae',
        summary: 'Poomsae ផ្លូវការ Poomsae ថ្មី និង Freestyle',
        description: 'Poomsae ផ្លូវការ (ស៊េរី Taegeuk និងទម្រង់ខ្សែក្រវាត់ខ្មៅ) Poomsae ថ្មីរបស់ Kukkiwon សម្រាប់ខ្សែក្រវាត់ខ្មៅ និង Freestyle Poomsae ដែលរៀបចំក្បាច់ជាមួយតន្ត្រី។',
      },
      zh: {
        label: '品势',
        summary: '公认品势、新品势与自由品势',
        description: '公认品势 (太极系列与黑带品势)、国技院为黑带设立的新品势，以及配合音乐编排的自由品势。',
      },
      ko: {
        label: '품새',
        summary: '공인 품새, 새 품새, 자유 품새',
        description: '공인 품새(태극 품새와 유단자 품새), 유단자를 위한 국기원 새 품새, 그리고 음악에 맞춰 구성하는 자유 품새.',
      },
    },
  },
  {
    key: 'demonstration',
    label: 'Demonstration',
    korean: '시범',
    summary: 'Team shows and choreography',
    description: 'Team demonstration routines that combine poomsae, kicks, breaking and acrobatics, performed at shows, festivals and events.',
    translations: {
      km: {
        label: 'ការសម្តែង',
        summary: 'ការសម្តែងជាក្រុម និងការរៀបចំក្បាច់',
        description: 'ក្បាច់សម្តែងជាក្រុមដែលរួមបញ្ចូល Poomsae ការទាត់ ការបំបែកក្តារ និងកាយសម្ព័ន្ធ សម្តែងក្នុងកម្មវិធី មហោស្រព និងព្រឹត្តិការណ៍នានា។',
      },
      zh: {
        label: '表演',
        summary: '团体表演与编排',
        description: '融合品势、踢法、击破与特技的团体表演套路，在演出、节庆与各类活动中呈现。',
      },
      ko: {
        label: '시범',
        summary: '팀 시범과 안무 구성',
        description: '품새, 발차기, 격파, 아크로바틱을 결합한 팀 시범 루틴으로 공연, 축제, 각종 행사에서 선보입니다.',
      },
    },
  },
  {
    key: 'tricking',
    label: 'Tricking',
    korean: '트릭킹',
    summary: 'Aerial kicks, flips and twists',
    description: 'Progressive aerial kicks, flips and twists on spring floors and foam pits, building the skills used in freestyle poomsae and demonstrations.',
    href: '/library/tricking-acrobatics',
    translations: {
      km: {
        label: 'Tricking',
        summary: 'ការទាត់លើអាកាស Flips និង Twists',
        description: 'ការទាត់លើអាកាស Flips និង Twists ជាដំណាក់កាល លើកម្រាលស្ព្រីង និងរណ្តៅស្ពុង ដើម្បីកសាងជំនាញសម្រាប់ Freestyle Poomsae និងការសម្តែង។',
      },
      zh: {
        label: '特技',
        summary: '腾空踢、空翻与转体',
        description: '在弹簧地板与海绵池中循序渐进地练习腾空踢、空翻与转体，打造自由品势与表演所需的技能。',
      },
      ko: {
        label: '트릭킹',
        summary: '공중 발차기, 플립, 트위스트',
        description: '스프링 매트와 폼 핏에서 공중 발차기, 플립, 트위스트를 단계별로 익혀 자유 품새와 시범에 필요한 기술을 쌓습니다.',
      },
    },
  },
  {
    key: 'hosinsul',
    label: 'Hosinsul',
    korean: '호신술',
    summary: 'Practical Kukkiwon self-defense',
    description: 'Kukkiwon self-defense taught belt by belt: escapes from grabs and chokes, joint locks, throws, and weapon defence for senior ranks.',
    href: '/library/hosinsul',
    translations: {
      km: {
        label: 'Hosinsul',
        summary: 'ការការពារខ្លួនជាក់ស្តែងតាម Kukkiwon',
        description: 'ការការពារខ្លួនតាម Kukkiwon បង្រៀនតាមខ្សែក្រវាត់នីមួយៗ៖ ការដោះខ្លួនពីការចាប់ និងការច្របាច់ក ការបត់សន្លាក់ ការទម្លាក់ និងការការពារពីអាវុធសម្រាប់កម្រិតខ្ពស់។',
      },
      zh: {
        label: '护身术',
        summary: '实用的国技院护身术',
        description: '按腰带级别循序教授的国技院护身术：摆脱抓握与锁喉、关节技、摔法，以及高级别学员的防器械技术。',
      },
      ko: {
        label: '호신술',
        summary: '실전 국기원 호신술',
        description: '띠별로 배우는 국기원 호신술: 잡기와 목조르기에서 빠져나오기, 꺾기, 던지기, 그리고 상급자를 위한 무기 방어.',
      },
    },
  },
  {
    key: 'breaking',
    label: 'Board breaking',
    korean: '격파',
    summary: 'Power, speed and accuracy',
    description: 'Board breaking (Kyokpa) tests power, speed and accuracy, from a single board at white belt to multi-target breaks for demonstrations.',
    translations: {
      km: {
        label: 'ការបំបែកក្តារ',
        summary: 'កម្លាំង ល្បឿន និងភាពត្រឹមត្រូវ',
        description: 'ការបំបែកក្តារ (Kyokpa) សាកល្បងកម្លាំង ល្បឿន និងភាពត្រឹមត្រូវ ចាប់ពីក្តារមួយសន្លឹកនៅខ្សែក្រវាត់ស រហូតដល់ការបំបែកច្រើនគោលដៅសម្រាប់ការសម្តែង។',
      },
      zh: {
        label: '击破',
        summary: '力量、速度与精准',
        description: '击破 (Kyokpa) 考验力量、速度与精准，从白带的单块木板，到表演用的多目标击破。',
      },
      ko: {
        label: '격파',
        summary: '파워, 스피드, 정확성',
        description: '격파는 파워, 스피드, 정확성을 시험합니다. 흰띠의 송판 한 장부터 시범을 위한 다중 표적 격파까지 이어집니다.',
      },
    },
  },
]
