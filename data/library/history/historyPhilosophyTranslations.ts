// =============================================================================
// INFINITY TAEKWONDO — PHILOSOPHY, VIRTUES & TENETS MULTILINGUAL MODULE
// Languages: English (en), Khmer (km), Chinese (zh), Korean (ko)
// =============================================================================

export interface LocalizedDualSpirit {
  title: string
  koreanTitle: string
  summary: string
  ideologies: Array<{
    id: string
    name: string
    koreanName: string
    hanja: string
    direction: string
    coreValue: string
    explanation: string
    quote: string
    badgeColor: string
  }>
}

export interface LocalizedVirtue {
  id: string
  name: string
  koreanName: string
  hanja: string
  romanized: string
  englishMeaning: string
  definition: string
  guidelineForAction: string
  youthCharacterFocus: string
  badgeColor: string
}

export interface LocalizedTenet {
  id: string
  name: string
  koreanName: string
  hanja: string
  romanized: string
  englishMeaning: string
  shortDefinition: string
  deepExplanation: string
  dojangApplication: string
  lifeApplication: string
  badgeColor: string
}

export interface LocalizedTaekwondoNature {
  definition: string
  koreanDefinition: string
  dualPurposes: Array<{
    title: string
    description: string
  }>
  fiveTechniqueCharacteristics: Array<{
    id: string
    title: string
    korean: string
    explanation: string
  }>
  suryeonMeaning: {
    title: string
    explanation: string
  }
  mudoSportCharacteristics: string[]
}

export interface LocalizedSesokOgyeItem {
  commandment: string
  romanized: string
  english: string
  description: string
}

export interface LocalizedPowerFactor {
  factor: string
  korean: string
  principle: string
  explanation: string
}

// -----------------------------------------------------------------------------
// 1. DUAL SPIRIT (Geukgi & Hongik)
// -----------------------------------------------------------------------------
export function getLocalizedDualSpirit(lang: string): LocalizedDualSpirit {
  switch (lang) {
    case 'km':
      return {
        title: 'ស្មារតីទ្វេនៃតេក្វាន់ដូ: Geukgi (យកឈ្នះខ្លួនឯង) & Hongik (បម្រើមនុស្សជាតិ)',
        koreanTitle: '태권도 정신의 양대 이념: 극기(克己)와 홍익(弘益)',
        summary: 'ដោយចាក់ឫសយ៉ាងជ្រៅក្នុងបេតិកភណ្ឌទស្សនវិជ្ជារបស់កូរ៉េ ស្មារតីនៃតេក្វាន់ដូរួមមានតម្លៃមិនអាចកាត់ផ្តាច់ពីរគឺ៖ "ការយកឈ្នះលើខ្លួនឯង" (Geukgi) ជាគោលការណ៍ហ្វឹកហាត់ខាងក្នុង និង "ការផ្តល់ផលប្រយោជន៍ដល់ពិភពលោក" (Hongik) ជាគោលការណ៍អនុវត្តកម្លាំងដែលទទួលបានទៅខាងក្រៅ។',
        ideologies: [
          {
            id: 'geukgi',
            name: 'Geukgi (ការយកឈ្នះលើខ្លួនឯង)',
            koreanName: '극기',
            hanja: '克己',
            direction: 'គោលការណ៍ហ្វឹកហាត់ខាងក្នុង (내적 수련의 지침)',
            coreValue: 'យកឈ្នះខ្លួនឯង ដើម្បីទទួលបានភាពខ្លាំងពិតប្រាកដ',
            explanation: 'Geukgi គឺជាគោលការណ៍ចម្បងដែលសិស្សគុនត្រូវពឹងផ្អែកក្នុងពេលហ្វឹកហាត់ដ៏លំបាក ដើម្បីសម្រេចបាននូវភាពរឹងមាំពិត។ សិស្សត្រូវតែជម្នះភាពនឿយហត់រាងកាយ ការភ័យខ្លាច និងភាពសង្ស័យលើខ្លួនឯងម្តងហើយម្តងទៀត ដើម្បីកសាងកម្លាំងកាយ និងចិត្តដ៏រឹងមាំ។',
            quote: 'កម្លាំងពិតប្រាកដចាប់ផ្តើមនៅពេលដែលអ្នកយកឈ្នះលើដែនកំណត់ ភាពអត្មានិយម និងការអស់កម្លាំងរបស់ខ្លួនឯង។',
            badgeColor: '#EF2F38',
          },
          {
            id: 'hongik',
            name: 'Hongik (មនុស្សធម៌ចំពោះពិភពលោក)',
            koreanName: '홍익',
            hanja: '弘益 (弘益人間)',
            direction: 'គោលការណ៍អនុវត្តខាងក្រៅ (외적 실천의 지침)',
            coreValue: 'ផ្តល់ប្រយោជន៍ដល់ពិភពលោក ដោយប្រើកម្លាំងដែលបានរៀន',
            explanation: 'Hongik (ដកស្រង់ចេញពីទស្សនវិជ្ជា Hongik Ingan) គ្រប់គ្រងរបៀបដែលកម្លាំងដែលទទួលបានពីតេក្វាន់ដូត្រូវយកទៅប្រើប្រាស់។ ក្បាច់គុនមិនត្រូវយកទៅប្រើដើម្បីការគំរាមកំហែង ឬអំពើហិង្សាផ្តេសផ្តាសឡើយ តែត្រូវលះបង់ដើម្បីការពារជនទន់ខ្សោយ លើកកម្ពស់យុត្តិធម៌ និងបម្រើមនុស្សជាតិ។',
            quote: 'កម្លាំងដែលគ្មានសេវាកម្មមនុស្សធម៌ គឺជាអំពើហិង្សា; កម្លាំងដែលប្រកបដោយ Hongik ទើបជាគុណធម៌ក្បាច់គុនពិត។',
            badgeColor: '#0042EA',
          },
        ],
      }
    case 'zh':
      return {
        title: '跆拳道精神的两大崇高理念：克己(Geukgi)与弘益(Hongik)',
        koreanTitle: '태권도 정신의 양대 이념: 극기(克己)와 홍익(弘益)',
        summary: '植根于深厚的东方哲学沃土，跆拳道精神由两个密不可分的核心支柱构成：以内在自我超越为导向的“克己”，以及以外在武力善用、造福社会为宗旨的“弘益人间”。',
        ideologies: [
          {
            id: 'geukgi',
            name: '克己 (自我超越与极限克服)',
            koreanName: '극기',
            hanja: '克己',
            direction: '内在修养与严苛淬炼之根本指针 (내적 수련의 지침)',
            coreValue: '战胜自我怠惰，方得真正坚毅之力量',
            explanation: '“克己”是习练者在面对严酷修行、肌肉酸痛与体力极限时必须坚守的根本精神。唯有不断战胜自身的惰性、恐惧与自满，打破肉体与精神的极限壁垒，方能铸就坚不可摧的品格。',
            quote: '真正的强大并非战胜他人，而是彻底降服自身的软弱、傲慢与极限。',
            badgeColor: '#EF2F38',
          },
          {
            id: 'hongik',
            name: '弘益 (仁爱奉献与弘益人间)',
            koreanName: '홍익',
            hanja: '弘益 (弘益人間)',
            direction: '外在行止与武力运用之根本原则 (외적 실천의 지침)',
            coreValue: '以习得之非凡武勇，造福苍生与人类社会',
            explanation: '“弘益”源自古朝鲜立国精神“弘益人间”（广泛造福人间）。通过跆拳道淬炼所获得的破坏力，绝不可用于恃强凌弱、私欲逞凶，必须毫无保留地用于扶助弱小、捍卫公义与促进和平。',
            quote: '缺乏人道关怀的武力是野蛮的暴力；与弘益精神一体同构的武力，才是崇高圣洁的武道。',
            badgeColor: '#0042EA',
          },
        ],
      }
    case 'ko':
      return {
        title: '태권도 정신의 양대 이념: 극기(克己)와 홍익(弘益)',
        koreanTitle: '태권도 정신의 양대 이념: 극기(克己)와 홍익(弘益)',
        summary: '한국 고유의 유구한 철학적 전통에 뿌리를 둔 태권도 정신은 내적 수련의 지침인 "극기(克己)"와 외적 실천의 지침인 "홍익(弘益)"이라는 두 가지 불가분의 가치로 구성되어 있습니다.',
        ideologies: [
          {
            id: 'geukgi',
            name: '극기 (克己 - Self-Overcoming)',
            koreanName: '극기',
            hanja: '克己',
            direction: '내적 수련의 지침 (Internal Practice Principle)',
            coreValue: '자신을 이겨냄으로써 참된 힘을 얻는다',
            explanation: '극기는 고통스러운 수련 과정에서 수련생이 지침으로 삼아야 할 원리입니다. 신체적 한계와 피로, 두려움, 안일함을 지속적으로 극복함으로써 흔들리지 않는 육체적·정신적 역량을 체득합니다.',
            quote: '진정한 강인함은 자신의 한계와 이기심, 피로를 극복할 때 비로소 시작된다.',
            badgeColor: '#EF2F38',
          },
          {
            id: 'hongik',
            name: '홍익 (弘益 - Humanitarianism)',
            koreanName: '홍익',
            hanja: '弘益 (弘益人間)',
            direction: '외적 실천의 지침 (External Application Principle)',
            coreValue: '체득한 힘으로 세상을 널리 이롭게 한다',
            explanation: '홍익은 태권도 수련을 통해 획득한 힘을 어떻게 사용해야 하는가에 대한 원리입니다. 힘을 사리사욕이나 폭력으로 남용하지 않고, 약자를 보호하고 정의를 실현하며 인류 사회에 봉사하는 데 전적으로 바칩니다.',
            quote: '인간에 대한 봉사가 없는 힘은 폭력에 불과하며, 홍익과 결합한 힘이야말로 참된 무도이다.',
            badgeColor: '#0042EA',
          },
        ],
      }
    default:
      return {
        title: 'The Dual Spirit of Taekwondo: Geukgi & Hongik',
        koreanTitle: '태권도 정신의 양대 이념: 극기(克己)와 홍익(弘益)',
        summary: 'Rooted in Korean philosophical heritage, the spirit of Taekwondo consists of two inseparable values: "Overcome Oneself" (Geukgi) as the internal standard of practice, and "Benefit the World" (Hongik) as the external standard for applying acquired strength.',
        ideologies: [
          {
            id: 'geukgi',
            name: 'Geukgi (Self-Overcoming)',
            koreanName: '극기',
            hanja: '克己',
            direction: 'Internal Practice Principle (내적 수련의 지침)',
            coreValue: 'Overcome Oneself to Attain Strength',
            explanation: 'Geukgi is the guiding principle practitioners must rely on during grueling practice to attain true strength. A practitioner must repeatedly push past physical exhaustion, fear, and self-doubt to develop unshakeable physical and mental power.',
            quote: 'True power begins when you conquer your own limitations, ego, and fatigue.',
            badgeColor: '#EF2F38',
          },
          {
            id: 'hongik',
            name: 'Hongik (Humanitarianism)',
            koreanName: '홍익',
            hanja: '弘益 (弘益人間)',
            direction: 'External Application Principle (외적 실천의 지침)',
            coreValue: 'Benefit the World with Acquired Strength',
            explanation: 'Hongik (from Hongik Ingan) governs how the strength acquired through Taekwondo must be used. Martial prowess must never be used for selfish aggression or intimidation, but strictly dedicated to protecting the weak, upholding justice, and serving humanity.',
            quote: 'Strength without humanitarian service is violence; strength with Hongik is true martial virtue.',
            badgeColor: '#0042EA',
          },
        ],
      }
  }
}

// -----------------------------------------------------------------------------
// 2. THE FIVE VIRTUES (5대 덕목)
// -----------------------------------------------------------------------------
export function getLocalizedFiveVirtues(lang: string): LocalizedVirtue[] {
  switch (lang) {
    case 'km':
      return [
        {
          id: 'virtue-innae',
          name: 'ការអត់ធន់ (Perseverance)',
          koreanName: '인내',
          hanja: '忍耐',
          romanized: 'Innae',
          englishMeaning: 'Endurance & Overcoming Pain',
          definition: 'សមត្ថភាពផ្លូវចិត្តក្នុងការស៊ូទ្រាំ និងយកឈ្នះលើការឈឺចាប់ផ្លូវកាយ និងផ្លូវចិត្តដែលជួបប្រទះក្នុងការហ្វឹកហាត់តេក្វាន់ដូ — ជាដំណើរការបន្តនៃការអនុវត្ត Geukgi និងការតស៊ូជាមួយខ្លួនឯង។',
          guidelineForAction: 'កុំបោះបង់នៅពេលសាច់ដុំឡើងរួយ របៀបហ្វឹកហាត់នឿយហត់ ឬជួបឧបសគ្គក្នុងការហ្វឹកហ្វឺន។',
          youthCharacterFocus: 'អភិវឌ្ឍភាពរឹងមាំទប់ទល់នឹងសម្ពាធការសិក្សា ការគាបសង្កត់ពីមិត្តភក្តិ និងភាពបរាជ័យបណ្តោះអាសន្ន។',
          badgeColor: '#EF2F38',
        },
        {
          id: 'virtue-yonggi',
          name: 'សេចក្តីក្លាហាន (Courage)',
          koreanName: '용기',
          hanja: '勇氣',
          romanized: 'Yonggi',
          englishMeaning: 'Bravery Against Adversity',
          definition: 'កម្លាំងចិត្តដើម្បីប្រឈមមុខនឹងដៃគូប្រកួតដែលខ្លាំងជាង កិច្ចការស្មុគស្មាញ ឬឧបសគ្គក្នុងជីវិតដោយមិនចុះចាញ់នឹងការភ័យខ្លាច។',
          guidelineForAction: 'ឈានជើងចូលទីលានប្រកួតដោយក្បាលងើបត្រង់ ប្រឈមមុខនឹងកំហុស និងការពារអ្វីដែលត្រឹមត្រូវ។',
          youthCharacterFocus: 'បណ្តុះទំនុកចិត្តក្នុងការនិយាយការពិត ជួយអ្នកដទៃ និងប្រឈមមុខនឹងបញ្ហាប្រឈមថ្មីៗ។',
          badgeColor: '#A05B00',
        },
        {
          id: 'virtue-yeui',
          name: 'សុជីវធម៌ (Courtesy)',
          koreanName: '예의',
          hanja: '禮儀',
          romanized: 'Yeui',
          englishMeaning: 'Humility & Mutual Respect',
          definition: 'ការបន្ទាបខ្លួនឯង និងការលើកតម្កើងអ្នកដទៃក្នុងពេលដំណាលគ្នា — បង្ហាញពីការគោរពចំពោះមេគ្រូ មិត្តរួមសាលា និងគូប្រកួត។',
          guidelineForAction: 'ឱនលំទោនដោយស្មោះត្រង់នៅពេលចូលដូជាំង (Dojang) គោរពអាជ្ញាកណ្តាល និងគូប្រកួតទោះចាញ់ឬឈ្នះ។',
          youthCharacterFocus: 'បង្រៀនការគោរពឪពុកម្តាយ គ្រូបង្រៀន មិត្តភក្តិ និងការប្រើប្រាស់ពាក្យសម្តីសមរម្យ។',
          badgeColor: '#0042EA',
        },
        {
          id: 'virtue-jeongui',
          name: 'យុត្តិធម៌ (Justice)',
          koreanName: '정의',
          hanja: '正義',
          romanized: 'Jeongui',
          englishMeaning: 'Righteousness & Moral Duty',
          definition: 'ការគិតគូរដល់ "យើងទាំងអស់គ្នា" ជាជាង "ខ្ញុំម្នាក់ឯង" — ឈរលើការពិត និងការបែងចែកត្រូវនិងខុសឱ្យច្បាស់លាស់។',
          guidelineForAction: 'អនុវត្តតាមច្បាប់ប្រកួតដោយស្មោះត្រង់ មិនបន្លំ និងការពារសិស្សដែលរងការគំរាមកំហែង។',
          youthCharacterFocus: 'បណ្តុះស្មារតីទទួលខុសត្រូវក្នុងសង្គម ការប្រឆាំងនឹងការគំរាមកំហែង (Anti-Bullying) និងភាពស្មោះត្រង់។',
          badgeColor: '#09BB00',
        },
        {
          id: 'virtue-bongsa',
          name: 'ការលះបង់ និងការបម្រើ (Volunteering & Service)',
          koreanName: '봉사',
          hanja: '奉仕',
          romanized: 'Bongsa',
          englishMeaning: 'Selfless Community Service',
          definition: 'ការគាំទ្រ និងបម្រើសហគមន៍ដោយស្ម័គ្រចិត្ត ដោយចែករំលែកជំនាញ ពេលវេលា និងធនធានផ្ទាល់ខ្លួន ដើម្បីជាប្រយោជន៍ដល់អ្នកដទៃ។',
          guidelineForAction: 'ជួយណែនាំសិស្សខ្សែក្រវាត់ទាប សម្អាតដូជាំង និងចូលរួមសកម្មភាពមនុស្សធម៌ក្នុងសហគមន៍។',
          youthCharacterFocus: 'បណ្តុះផ្នត់គំនិតនៃការចែករំលែក ការមិនអត្មានិយម និងការទទួលខុសត្រូវជាពលរដ្ឋល្អ។',
          badgeColor: '#A855F7',
        },
      ]
    case 'zh':
      return [
        {
          id: 'virtue-innae',
          name: '忍耐 (Perseverance / 坚韧克难)',
          koreanName: '인내',
          hanja: '忍耐',
          romanized: 'Innae',
          englishMeaning: 'Endurance & Overcoming Pain',
          definition: '在日复一日枯燥严酷的跆拳道淬炼中，克制并战胜肉体劳顿与心理动摇的非凡毅力——这是克己精神在时间维度的恒久延续。',
          guidelineForAction: '在体能逼近极限、动作遭遇瓶颈或受挫落败时，绝不轻言退缩放弃。',
          youthCharacterFocus: '培养抗逆力，从容应对学业压力、同龄人竞争与成长过程中的阶段性挫败。',
          badgeColor: '#EF2F38',
        },
        {
          id: 'virtue-yonggi',
          name: '勇气 (Courage / 勇者无惧)',
          koreanName: '용기',
          hanja: '勇氣',
          romanized: 'Yonggi',
          englishMeaning: 'Bravery Against Adversity',
          definition: '面对强劲对手、复杂艰巨之任务或人生危难时，内心沉着无畏、果敢行动的精神魄力。',
          guidelineForAction: '昂首从容步入赛场竞技区，坦诚正视自身短板失误，挺身捍卫道德原则。',
          youthCharacterFocus: '树立坚定自信心，勇于在公开场合表达真理，主动拥抱陌生挑战。',
          badgeColor: '#A05B00',
        },
        {
          id: 'virtue-yeui',
          name: '礼仪 (Courtesy / 崇礼尚德)',
          koreanName: '예의',
          hanja: '禮儀',
          romanized: 'Yeui',
          englishMeaning: 'Humility & Mutual Respect',
          definition: '在谦和压低自我身段的同时，由衷敬重提升他人之尊严——将尊重贯穿于对待师长、同袍及竞技对手的言行细节中。',
          guidelineForAction: '出入道场庄重行礼，无论胜负皆对裁判、教练与对手致以最高敬意。',
          youthCharacterFocus: '养成尊师重道、孝顺父母、温良恭俭的文明修养习惯。',
          badgeColor: '#0042EA',
        },
        {
          id: 'virtue-jeongui',
          name: '正义 (Justice / 匡扶正道)',
          koreanName: '정의',
          hanja: '正義',
          romanized: 'Jeongui',
          englishMeaning: 'Righteousness & Moral Duty',
          definition: '以超越狭隘私利的社会公心取代个人本位——恪守道德法度，明辨大是大非，挺身维护公平。',
          guidelineForAction: '严格遵守体育公平竞赛道德，坚决杜绝作弊犯规，保护免受欺凌者。',
          youthCharacterFocus: '树立坚如磐石的法制观念、社会正义感与抵制霸凌的公民担当。',
          badgeColor: '#09BB00',
        },
        {
          id: 'virtue-bongsa',
          name: '奉仕 (Volunteering & Service / 兼善天下)',
          koreanName: '봉사',
          hanja: '奉仕',
          romanized: 'Bongsa',
          englishMeaning: 'Selfless Community Service',
          definition: '不求私利地投入个人技能、充裕时间与关爱之心，服务社群、帮助弱小的大爱行动。',
          guidelineForAction: '热情指导后进学员，主动协助维护修缮道场，投身社区公益志愿工作。',
          youthCharacterFocus: '根植利他主义品德，学会关爱弱势群体，培养全球公民责任感。',
          badgeColor: '#A855F7',
        },
      ]
    case 'ko':
      return [
        {
          id: 'virtue-innae',
          name: '인내 (忍耐 - Perseverance)',
          koreanName: '인내',
          hanja: '忍耐',
          romanized: 'Innae',
          englishMeaning: 'Endurance & Overcoming Pain',
          definition: '태권도 수련 과정에서 겪는 신체적·정신적 고통을 참고 견디며 이겨내는 능력으로, 극기와 자신과의 지속적인 싸움의 과정입니다.',
          guidelineForAction: '근육통과 피로, 수련의 좌절이 찾아와도 결코 포기하지 않고 끝까지 완수합니다.',
          youthCharacterFocus: '학업 스트레스와 교우 관계 갈등, 일시적 실패를 이겨내는 회복탄력성을 기릅니다.',
          badgeColor: '#EF2F38',
        },
        {
          id: 'virtue-yonggi',
          name: '용기 (勇氣 - Courage)',
          koreanName: '용기',
          hanja: '勇氣',
          romanized: 'Yonggi',
          englishMeaning: 'Bravery Against Adversity',
          definition: '강한 상대나 어려운 과제, 인생의 장애물에 직면했을 때 두려움에 굴복하지 않고 당당하게 맞서는 정신적 결단력입니다.',
          guidelineForAction: '경기장에 당당히 들어서고, 자신의 실수를 인정하며, 옳은 것을 위해 당당히 나섭니다.',
          youthCharacterFocus: '진실을 말하고, 약자를 도우며, 새로운 도전에 주저함 없이 나서는 자신감을 함양합니다.',
          badgeColor: '#A05B00',
        },
        {
          id: 'virtue-yeui',
          name: '예의 (禮儀 - Courtesy)',
          koreanName: '예의',
          hanja: '禮儀',
          romanized: 'Yeui',
          englishMeaning: 'Humility & Mutual Respect',
          definition: '자신을 낮추고 타인을 높이는 마음가짐으로, 지도자와 동료, 경기 상대에 대한 진정한 존중을 표출하는 행동 규범입니다.',
          guidelineForAction: '도장에 들어서고 나설 때 정중히 예를 갖추고, 승패에 관계없이 상대와 심판을 존중합니다.',
          youthCharacterFocus: '부모와 스승에 대한 공경, 바른 언어 사용, 타인에 대한 배려를 생활화합니다.',
          badgeColor: '#0042EA',
        },
        {
          id: 'virtue-jeongui',
          name: '정의 (正義 - Justice)',
          koreanName: '정의',
          hanja: '正義',
          romanized: 'Jeongui',
          englishMeaning: 'Righteousness & Moral Duty',
          definition: '"나"보다 "우리"를, "우리"보다 "모든 사람"을 배려하는 마음으로, 옳고 그름을 명확히 분별하고 올바름을 지키는 덕목입니다.',
          guidelineForAction: '경기 규칙을 엄격히 준수하며 반칙하지 않고, 불의와 학교 폭력에 당당히 맞섭니다.',
          youthCharacterFocus: '도덕적 판단력, 페어플레이 정신, 사회적 약자를 보호하는 시민 의식을 기릅니다.',
          badgeColor: '#09BB00',
        },
        {
          id: 'virtue-bongsa',
          name: '봉사 (奉仕 - Volunteering & Service)',
          koreanName: '봉사',
          hanja: '奉仕',
          romanized: 'Bongsa',
          englishMeaning: 'Selfless Community Service',
          definition: '자신이 습득한 무예 기술과 지식, 시간과 정성을 이웃과 사회를 위해 아낌없이 나누고 헌신하는 이타적 행동입니다.',
          guidelineForAction: '후배 수련생을 따뜻하게 지도하고, 도장을 청결히 가꾸며, 지역사회 나눔 활동에 참여합니다.',
          youthCharacterFocus: '타인을 배려하는 따뜻한 인성, 공동체 의식, 사회에 기여하는 리더십을 형성합니다.',
          badgeColor: '#A855F7',
        },
      ]
    default:
      return [
        {
          id: 'virtue-innae',
          name: 'Perseverance',
          koreanName: '인내',
          hanja: '忍耐',
          romanized: 'Innae',
          englishMeaning: 'Endurance & Overcoming Pain',
          definition: 'The mental capacity to endure and overcome the physical and psychological pain experienced in Taekwondo practice—a continuous process of Geukgi and fighting with oneself.',
          guidelineForAction: 'Never quit when muscles burn, routines feel exhausting, or setbacks occur during training.',
          youthCharacterFocus: 'Develops resilience against academic stress, peer pressure, and temporary life failures.',
          badgeColor: '#EF2F38',
        },
        {
          id: 'virtue-yonggi',
          name: 'Courage',
          koreanName: '용기',
          hanja: '勇氣',
          romanized: 'Yonggi',
          englishMeaning: 'Bravery Against Adversity',
          definition: 'The fortitude to face formidable opponents, complex tasks, or life obstacles without succumbing to fear or hesitation.',
          guidelineForAction: 'Step into the competition ring with head held high, acknowledge technical mistakes, and stand up for righteousness.',
          youthCharacterFocus: 'Cultivates confidence to speak truth, defend peers against bullying, and embrace unfamiliar challenges.',
          badgeColor: '#A05B00',
        },
        {
          id: 'virtue-yeui',
          name: 'Courtesy',
          koreanName: '예의',
          hanja: '禮儀',
          romanized: 'Yeui',
          englishMeaning: 'Humility & Mutual Respect',
          definition: 'Practicing humility (lowering oneself) and respect (elevating others) simultaneously—manifested through sincere decorum toward instructors, peers, and opponents.',
          guidelineForAction: 'Bow sincerely upon entering and leaving the dojang, respect referees and opponents win or lose.',
          youthCharacterFocus: 'Teaches deep respect for parents, educators, civil discourse, and polite daily habits.',
          badgeColor: '#0042EA',
        },
        {
          id: 'virtue-jeongui',
          name: 'Justice',
          koreanName: '정의',
          hanja: '正義',
          romanized: 'Jeongui',
          englishMeaning: 'Righteousness & Moral Duty',
          definition: 'Caring for "us" instead of "me", and caring for "everyone" instead of "us"—grounded in unwavering discernment between right and wrong.',
          guidelineForAction: 'Compete cleanly without cheating, reject unsportsmanlike conduct, and actively shield weaker peers.',
          youthCharacterFocus: 'Fosters moral courage, civic duty, anti-bullying principles, and unwavering honesty.',
          badgeColor: '#09BB00',
        },
        {
          id: 'virtue-bongsa',
          name: 'Volunteering & Service',
          koreanName: '봉사',
          hanja: '奉仕',
          romanized: 'Bongsa',
          englishMeaning: 'Selfless Community Service',
          definition: 'Selflessly supporting and serving the community while sharing one’s own skills, time, and resources for the betterment of human society.',
          guidelineForAction: 'Mentor junior belts, maintain dojang cleanliness, and participate in civic humanitarian initiatives.',
          youthCharacterFocus: 'Instills an altruistic mindset, empathy for the underprivileged, and noble community leadership.',
          badgeColor: '#A855F7',
        },
      ]
  }
}

// -----------------------------------------------------------------------------
// 3. THE FIVE TENETS (태권도 5대 훈)
// -----------------------------------------------------------------------------
export function getLocalizedFiveTenets(lang: string): LocalizedTenet[] {
  switch (lang) {
    case 'km':
      return [
        {
          id: 'ye-ui',
          name: 'សុជីវធម៌ (Courtesy)',
          koreanName: '예의',
          hanja: '禮儀',
          romanized: 'Ye-Ui (Yeui)',
          englishMeaning: 'Politeness, Respect & Etiquette',
          shortDefinition: 'ការបង្ហាញការគោរពដោយស្មោះត្រង់ចំពោះចាស់ទុំ មេគ្រូ មិត្តភក្តិ និងគូប្រកួត។',
          deepExplanation: 'សុជីវធម៌គឺជាគ្រឹះមិនអាចរង្គោះរង្គើបាននៃការអនុវត្តក្បាច់គុនទាំងអស់។ វាបង្កើតទំនាក់ទំនងមនុស្សប្រកបដោយការបន្ទាបខ្លួន បំបាត់អត្មានិយម និងធានាថាកម្លាំងក្បាច់គុនត្រូវបានគ្រប់គ្រងដោយសីលធម៌។',
          dojangApplication: 'ការឱនគោរពដោយស្មោះនៅពេលចូលដូជាំង ហៅមេគ្រូដោយងារផ្លូវការ និងចាប់ដៃដោយប្រើដៃទាំងពីរ។',
          lifeApplication: 'ការប្រព្រឹត្តចំពោះមនុស្សគ្រប់គ្នាដោយសប្បុរស យកចិត្តទុកដាក់ស្តាប់ បង្ហាញការដឹងគុណ និងរក្សាសេចក្តីថ្លៃថ្នូរក្នុងសង្គម។',
          badgeColor: '#EF2F38',
        },
        {
          id: 'yom-chi',
          name: 'ភាពស្មោះត្រង់ និងសេចក្តីខ្មាសអៀន (Integrity)',
          koreanName: '염치',
          hanja: '廉恥',
          romanized: 'Yom-Chi (Yeomchi)',
          englishMeaning: 'Moral Conscience & Honesty',
          shortDefinition: 'ការដឹងខុសត្រូវ និងមានសតិសម្បជញ្ញៈខ្មាសអៀននៅពេលប្រព្រឹត្តកំហុស។',
          deepExplanation: 'ភាពស្មោះត្រង់ទាមទារឱ្យមានភាពស្មោះត្រង់ដាច់ខាតចំពោះខ្លួនឯង និងអ្នកដទៃ។ សិស្សគុនដែលមានសុច្ចរិតភាព បដិសេធមិនបង្ខូចការពិត មិនក្លែងបន្លំខ្សែក្រវាត់ មិនបន្លំក្នុងពេលប្រកួត ឬបោកប្រាស់អ្នកដទៃឡើយ។',
          dojangApplication: 'ទទួលស្គាល់នៅពេលដែលគូប្រកួតទាត់ត្រូវ ហ្វឹកហាត់ដោយស្មោះត្រង់ និងមិនកាត់បន្ថយចំនួនដងនៃបច្ចេកទេស។',
          lifeApplication: 'រស់នៅដោយមានត្រីវិស័យសីលធម៌ត្រឹមត្រូវ រក្សាពាក្យសន្យា បដិសេធផ្លូវកាត់ពុករលួយ និងឈរលើការពិត។',
          badgeColor: '#A05B00',
        },
        {
          id: 'in-nae',
          name: 'ការអត់ធន់ស៊ូទ្រាំ (Perseverance)',
          koreanName: '인내',
          hanja: '忍耐',
          romanized: 'In-Nae (Innae)',
          englishMeaning: 'Patience & Stoic Endurance',
          shortDefinition: 'ការយកឈ្នះលើភាពនឿយហត់ ការឈឺចាប់ ភាពបរាជ័យ និងឧបសគ្គដោយមិនរាថយ។',
          deepExplanation: 'ភាពស្ទាត់ជំនាញពិតប្រាកដមិនមែនកើតចេញពីទេពកោសល្យពីកំណើតនោះទេ ប៉ុន្តែកើតចេញពីការហ្វឹកហាត់ដដែលៗរាប់ពាន់ដងអស់រយៈពេលជាច្រើនឆ្នាំ ឆ្លងកាត់ការឈឺចាប់ និងឧបសគ្គ។ ភាពអត់ធន់ប្រែក្លាយការខិតខំប្រឹងប្រែងធម្មតា ទៅជាស្មារតីដែលមិនអាចចាញ់បាន។',
          dojangApplication: 'តស៊ូហ្វឹកហាត់រហូតដល់ចប់ម៉ោង ហាត់ទាត់ក្បាច់ពិបាករាប់រយដងរហូតដល់ស្ទាត់ជំនាញ។',
          lifeApplication: 'ស៊ូទ្រាំនឹងការលំបាកក្នុងការសិក្សា ការងារ ឬហិរញ្ញវត្ថុ ដោយការប្តេជ្ញាចិត្តស្ងប់ស្ងាត់ និងការផ្តោតលើគោលដៅវែងឆ្ងាយ។',
          badgeColor: '#09BB00',
        },
        {
          id: 'guk-gi',
          name: 'ការគ្រប់គ្រងខ្លួនឯង (Self-Control)',
          koreanName: '극기',
          hanja: '克己',
          romanized: 'Guk-Gi (Geukgi)',
          englishMeaning: 'Mastery over One’s Desires & Temper',
          shortDefinition: 'ការគ្រប់គ្រងអារម្មណ៍ កំហឹង ចំណង់តណ្ហា និងកម្លាំងហិង្សារបស់ខ្លួន។',
          deepExplanation: 'ដើម្បីយកឈ្នះអ្នកដទៃ គេត្រូវការកម្លាំងកាយ; ប៉ុន្តែដើម្បីយកឈ្នះខ្លួនឯង គេត្រូវការកម្លាំងស្មារតីពិតប្រាកដ។ ការគ្រប់គ្រងខ្លួនឯងធានាថាសិស្សគុនមិនវាយប្រហារដោយសារតែកំហឹង ភាពក្រអឺតក្រទម ឬការអួតអាងឡើយ។',
          dojangApplication: 'រក្សាការដកដង្ហើមស្ងប់ និងភាពអត់ធ្មត់ក្នុងការការពារនៅពេលត្រូវគូប្រកួតទាត់ត្រូវ; មិនបាត់បង់ការគ្រប់គ្រងអារម្មណ៍។',
          lifeApplication: 'គ្រប់គ្រងអារម្មណ៍ឆេវឆាវ ទប់ទល់នឹងការល្បួងមិនល្អ និងរក្សាភាពស្ងប់ស្ងាត់ក្នុងជម្លោះ។',
          badgeColor: '#0042EA',
        },
        {
          id: 'baekjul-boolgool',
          name: 'ស្មារតីមិនចុះចាញ់ (Indomitable Spirit)',
          koreanName: '백절불굴',
          hanja: '百折不屈',
          romanized: 'Baekjul-Boolgool (Baekjeolbulgul)',
          englishMeaning: 'Unbroken Courage & Invincible Will',
          shortDefinition: 'បាក់ ១០០ ដង ក៏នៅតែមិនព្រមចុះចាញ់; ឈរយ៉ាងរឹងមាំទោះបីជាជួបឧបសគ្គធំធេងយ៉ាងណាក៏ដោយ។',
          deepExplanation: 'ដកស្រង់ចេញពីសុភាសិតបុរាណដែលប្រៀបប្រដូចទៅនឹង "ដាវដែកដែលត្រូវបានបត់ និងដំរាប់រយដងក្នុងគំនរភ្លើង ក្លាយជាដាវដែលមិនអាចបាក់បាន"។ វាតំណាងឱ្យសេចក្តីក្លាហានសីលធម៌ដ៏អង់អាចក្នុងការប្រឆាំងនឹងភាពអយុត្តិធម៌។',
          dojangApplication: 'ឈានជើងចូលទីលានប្រកួតដោយមិនភ័យខ្លាចទោះបីជាជួបគូប្រកួតធំជាង និងខ្សែក្រវាត់ខ្ពស់ជាង; ក្រោកឈរឡើងវិញភ្លាមៗបន្ទាប់ពីដួល។',
          lifeApplication: 'បដិសេធមិនព្រមចុះចាញ់នៅពេលជីវិតជួបការលំបាកខ្លាំង; ឈរការពារជនទន់ខ្សោយប្រឆាំងនឹងភាពអយុត្តិធម៌។',
          badgeColor: '#A855F7',
        },
      ]
    case 'zh':
      return [
        {
          id: 'ye-ui',
          name: '礼仪 (Courtesy / 崇礼敬让)',
          koreanName: '예의',
          hanja: '禮儀',
          romanized: 'Ye-Ui (Yeui)',
          englishMeaning: 'Politeness, Respect & Etiquette',
          shortDefinition: '发自肺腑敬重长辈、师范、同门及竞技对手。',
          deepExplanation: '礼仪是一切武道修习不可动摇之基石。它构筑谦逊的人际秩序，降服破坏性的傲慢私欲，确保杀伤性武力永受崇高道德法度之节制。',
          dojangApplication: '出入道场庄重鞠躬行礼，以敬语尊称指导师范，双手递接器物证书。',
          lifeApplication: '以温和友善待人，专注倾听他人意见，由衷常怀感恩之心，维护优雅文明公德。',
          badgeColor: '#EF2F38',
        },
        {
          id: 'yom-chi',
          name: '廉耻 (Integrity / 恪守明耻)',
          koreanName: '염치',
          hanja: '廉恥',
          romanized: 'Yom-Chi (Yeomchi)',
          englishMeaning: 'Moral Conscience & Honesty',
          shortDefinition: '明辨是非曲直，做错事时内心常存愧疚与羞耻之良知。',
          deepExplanation: '廉耻要求对自己与他人保持绝对忠诚与坦白。具备廉耻之心的武道家，绝不篡改事实、绝不虚报段位、绝不在赛场舞弊，绝不欺瞒世人。',
          dojangApplication: '失分时坦诚承认对手有效击中，诚恳接受考核，动作练习杜绝偷工减料。',
          lifeApplication: '坚守光明磊落之道德罗盘，一诺千金，远离不义捷径与腐败诱惑。',
          badgeColor: '#A05B00',
        },
        {
          id: 'in-nae',
          name: '忍耐 (Perseverance / 坚韧恒毅)',
          koreanName: '인내',
          hanja: '忍耐',
          romanized: 'In-Nae (Innae)',
          englishMeaning: 'Patience & Stoic Endurance',
          shortDefinition: '战胜疲劳、伤痛、挫折与严酷逆境，永不屈服。',
          deepExplanation: '真正的宗师技艺并非源于天赋异禀，而是经历漫长岁月中每日数百次枯燥重复、忍受筋肉酸痛与挫折磨砺而来。恒久之忍耐方能将平凡汗水升华为不朽精神。',
          dojangApplication: '全力坚持完成最后高强度体能组数，同一高难度腾空转体踢击反复精研千百遍。',
          lifeApplication: '以沉着坚定与长期主义从容应对学业瓶颈、事业风浪或家庭变故。',
          badgeColor: '#09BB00',
        },
        {
          id: 'guk-gi',
          name: '克己 (Self-Control / 胜己自律)',
          koreanName: '극기',
          hanja: '克己',
          romanized: 'Guk-Gi (Geukgi)',
          englishMeaning: 'Mastery over One’s Desires & Temper',
          shortDefinition: '掌控自身情绪、欲望、冲动及肉体攻击性。',
          deepExplanation: '胜人者有力，自胜者强。克己确保习武之人决不因怒火中烧、虚荣炫耀或争强好胜而挥拳动武，时刻保持高度清醒理智。',
          dojangApplication: '实战对抗中遭受重击依然保持平稳呼吸与防守戒备，绝不情绪失控肆意违规。',
          lifeApplication: '抵御不良诱惑，克服浮躁怠惰，在激化冲突面前保持理性冷静。',
          badgeColor: '#0042EA',
        },
        {
          id: 'baekjul-boolgool',
          name: '百折不屈 (Indomitable Spirit / 铮铮铁骨)',
          koreanName: '백절불굴',
          hanja: '百折不屈',
          romanized: 'Baekjul-Boolgool (Baekjeolbulgul)',
          englishMeaning: 'Unbroken Courage & Invincible Will',
          shortDefinition: '折损百次亦绝不弯腰屈服；直面千钧压顶依然傲骨迎战。',
          deepExplanation: '典出“百炼成钢，虽百折而绝不屈挠”。它代表面对强暴欺凌、邪恶压制或生死绝境时，毫不退缩、为真理道义血战到底的浩然正气。',
          dojangApplication: '面对高大强横之对手毫无怯意果断迎击；被击倒后毫无犹疑立即翻身站立再战。',
          lifeApplication: '在遭遇人生绝境低谷时决不灰心投降；在弱小遭受欺凌时挺身而出匡扶正义。',
          badgeColor: '#A855F7',
        },
      ]
    case 'ko':
      return [
        {
          id: 'ye-ui',
          name: '예의 (禮儀 - Courtesy)',
          koreanName: '예의',
          hanja: '禮儀',
          romanized: 'Ye-Ui (Yeui)',
          englishMeaning: 'Politeness, Respect & Etiquette',
          shortDefinition: '웃어른과 스승, 동료와 상대방에게 진심에서 우러나오는 존경심을 표하는 것.',
          deepExplanation: '예의는 모든 무도 수련의 흔들리지 않는 초석입니다. 겸손한 인간관계를 형성하고 파괴적인 아집을 억누르며, 강력한 무예의 힘이 도덕적 절제 아래 행사되도록 보장합니다.',
          dojangApplication: '도장 출입 시 정중히 국기와 사범님께 예를 표하고, 정중한 호칭과 두 손 사용을 실천합니다.',
          lifeApplication: '모든 이를 친절히 대하고, 경청하며, 감사를 표하고, 사회적 법도와 예절을 지킵니다.',
          badgeColor: '#EF2F38',
        },
        {
          id: 'yom-chi',
          name: '염치 (廉恥 - Integrity)',
          koreanName: '염치',
          hanja: '廉恥',
          romanized: 'Yom-Chi (Yeomchi)',
          englishMeaning: 'Moral Conscience & Honesty',
          shortDefinition: '옳고 그름을 명확히 알고, 잘못을 범했을 때 스스로 부끄러워할 줄 아는 양심.',
          deepExplanation: '염치는 자신과 타인에 대한 절대적인 정직함을 요구합니다. 염치가 있는 무도인은 진실을 타협하지 않으며, 단증을 위조하거나 겨루기에서 반칙하지 않고 남을 속이지 않습니다.',
          dojangApplication: '상대방의 유효 득점을 정직하게 인정하고, 승단 심사에서 요행을 바라지 않으며 기본기를 정직하게 연마합니다.',
          lifeApplication: '올바른 도덕적 나침반을 바탕으로 약속을 철저히 지키고, 불의한 지름길을 거부하며 진실을 수호합니다.',
          badgeColor: '#A05B00',
        },
        {
          id: 'in-nae',
          name: '인내 (忍耐 - Perseverance)',
          koreanName: '인내',
          hanja: '忍耐',
          romanized: 'In-Nae (Innae)',
          englishMeaning: 'Patience & Stoic Endurance',
          shortDefinition: '육체적 피로와 고통, 실패와 역경을 굴하지 않고 묵묵히 이겨내는 것.',
          deepExplanation: '진정한 달인의 경지는 타고난 천재성이 아니라, 수년간의 근육통과 부상, 좌절 속에서도 매일 반복되는 혹독한 수련을 통해 완성됩니다. 인내는 평범한 노력을 불굴의 무도혼으로 승화시킵니다.',
          dojangApplication: '고된 체력 훈련의 마지막 한 번까지 악착같이 완수하고, 어려운 고난도 발차기를 수백 번 반복하여 체득합니다.',
          lifeApplication: '학업과 직장, 경제적 난관 속에서도 침착한 결단력과 확고한 장기적 목표를 잃지 않고 헤쳐나갑니다.',
          badgeColor: '#09BB00',
        },
        {
          id: 'guk-gi',
          name: '극기 (克己 - Self-Control)',
          koreanName: '극기',
          hanja: '克己',
          romanized: 'Guk-Gi (Geukgi)',
          englishMeaning: 'Mastery over One’s Desires & Temper',
          shortDefinition: '자신의 감정과 욕망, 충동, 물리적 폭력성을 통제하고 다스리는 것.',
          deepExplanation: '남을 이기는 데는 힘이 필요하지만, 자신을 이기는 데는 참된 정신적 위력이 요구됩니다. 극기는 무도인이 분노나 오만, 과시욕에 사로잡혀 무력을 행사하지 않도록 엄격히 통제합니다.',
          dojangApplication: '겨루기 중 강한 타격을 입더라도 침착하게 호흡과 수비 자세를 유지하며 감정적인 보복을 하지 않습니다.',
          lifeApplication: '유해한 유혹을 물리치고, 분노를 조절하며, 갈등 상황에서도 이성적인 평정심을 유지합니다.',
          badgeColor: '#0042EA',
        },
        {
          id: 'baekjul-boolgool',
          name: '백절불굴 (百折不屈 - Indomitable Spirit)',
          koreanName: '백절불굴',
          hanja: '百折不屈',
          romanized: 'Baekjul-Boolgool (Baekjeolbulgul)',
          englishMeaning: 'Unbroken Courage & Invincible Will',
          shortDefinition: '백 번 꺾여도 굴하지 않으며, 어떠한 거대한 난관 앞에서도 당당히 맞서는 불굴의 용기.',
          deepExplanation: '"용광로에서 백 번 접혀 담금질된 칼날은 결코 부러지지 않는다"는 옛 격언에서 유래하였습니다. 불의와 폭압, 절망적 위기 앞에서도 굴복하지 않고 정의를 위해 결연히 맞서는 용기를 상징합니다.',
          dojangApplication: '체격이 크고 단수가 높은 강한 상대 앞에서도 위축되지 않고 당당히 맞서며, 넘어져도 즉시 일어섭니다.',
          lifeApplication: '인생의 혹독한 시련 앞에서도 좌절하지 않고 다시 일어나며, 불의에 억압받는 약자를 위해 기꺼이 나섭니다.',
          badgeColor: '#A855F7',
        },
      ]
    default:
      return [
        {
          id: 'ye-ui',
          name: 'Courtesy',
          koreanName: '예의',
          hanja: '禮儀',
          romanized: 'Ye-Ui (Yeui)',
          englishMeaning: 'Politeness, Respect & Etiquette',
          shortDefinition: 'Showing sincere respect to elders, masters, peers, and opponents.',
          deepExplanation: 'Courtesy is the unshakeable cornerstone of all martial practice. It establishes humble human relationships, subdues destructive ego, and ensures that martial power is governed by moral restraint.',
          dojangApplication: 'Bowing with sincerity upon entering the Dojang, addressing instructors with formal titles, and shaking hands with two hands.',
          lifeApplication: 'Treating all people with kindness, listening attentively, showing gratitude, and maintaining polite decorum in society.',
          badgeColor: '#EF2F38',
        },
        {
          id: 'yom-chi',
          name: 'Integrity',
          koreanName: '염치',
          hanja: '廉恥',
          romanized: 'Yom-Chi (Yeomchi)',
          englishMeaning: 'Moral Conscience & Honesty',
          shortDefinition: 'Knowing right from wrong and having the conscience to feel shame when at fault.',
          deepExplanation: 'Integrity requires absolute honesty with oneself and others. A martial artist with integrity refuses to compromise truth, inflate ranks, cheat during sparring, or deceive fellow human beings.',
          dojangApplication: 'Admitting when a point is scored against you, practicing honest grading, and refusing to cut corners on techniques.',
          lifeApplication: 'Living with an upright moral compass, fulfilling promises, refusing corrupt shortcuts, and standing for truth.',
          badgeColor: '#A05B00',
        },
        {
          id: 'in-nae',
          name: 'Perseverance',
          koreanName: '인내',
          hanja: '忍耐',
          romanized: 'In-Nae (Innae)',
          englishMeaning: 'Patience & Stoic Endurance',
          shortDefinition: 'Overcoming exhaustion, pain, failure, and adversity without yielding.',
          deepExplanation: 'True mastery is not born from innate genius, but from relentless, daily repetition through years of physical fatigue, injury, and setbacks. Patience and endurance transform ordinary effort into invincible spirit.',
          dojangApplication: 'Pushing through the final reps of conditioning, practicing a difficult jump kick hundreds of times until perfected.',
          lifeApplication: 'Enduring academic, professional, or financial hardships with calm determination and unwavering long-term focus.',
          badgeColor: '#09BB00',
        },
        {
          id: 'guk-gi',
          name: 'Self-Control',
          koreanName: '극기',
          hanja: '克己',
          romanized: 'Guk-Gi (Geukgi)',
          englishMeaning: 'Mastery over One’s Desires & Temper',
          shortDefinition: 'Controlling one’s emotions, impulses, ego, and physical aggression.',
          deepExplanation: 'To conquer others requires force; to conquer oneself requires true spiritual power. Self-control ensures that a martial artist never strikes out of anger, arrogance, or vanity.',
          dojangApplication: 'Maintaining calm breathing and defensive composure when struck hard in sparring; never losing emotional control.',
          lifeApplication: 'Mastering impulses, resisting toxic temptations, remaining calm during heated interpersonal conflicts.',
          badgeColor: '#0042EA',
        },
        {
          id: 'baekjul-boolgool',
          name: 'Indomitable Spirit',
          koreanName: '백절불굴',
          hanja: '百折不屈',
          romanized: 'Baekjul-Boolgool (Baekjeolbulgul)',
          englishMeaning: 'Unbroken Courage & Invincible Will',
          shortDefinition: 'Folded 100 times, yet never broken; standing firm in the face of overwhelming odds.',
          deepExplanation: 'Derived from the ancient Korean proverb meaning "a sword folded a hundred times in the furnace emerges unbreakable." It represents fearless moral courage against tyranny, injustice, or existential peril.',
          dojangApplication: 'Stepping fearlessly into the ring against larger, higher-ranked opponents; rising immediately after being knocked down.',
          lifeApplication: 'Refusing to surrender when life presents crushing challenges; standing up for the defenseless against injustice.',
          badgeColor: '#A855F7',
        },
      ]
  }
}

// -----------------------------------------------------------------------------
// 4. MEANING & NATURE OF TAEKWONDO (Kukkiwon Academic Synthesis)
// -----------------------------------------------------------------------------
export function getLocalizedTaekwondoNature(lang: string): LocalizedTaekwondoNature {
  switch (lang) {
    case 'km':
      return {
        definition: 'តេក្វាន់ដូ គឺជាកីឡាក្បាច់គុនដែលហ្វឹកហ្វឺនសិស្សឱ្យអនុវត្តបច្ចេកទេសការពារ និងវាយប្រហារដោយដៃទទេ ដែលមានលក្ខណៈពិសេសដោយក្បាច់ទាត់ចម្រុះ សម្រាប់គោលបំណងទ្វេគឺ ការការពារខ្លួន និងការសម្រេចសក្តានុពលខ្លួនឯង។',
        koreanDefinition: '태권도는 호신(護身)과 자아실현(自我實現)을 목적으로 다양한 발차기를 특성으로 하는 맨손 공방의 무도 스포츠이다.',
        dualPurposes: [
          {
            title: 'ការការពារខ្លួន (Self-Defense / 護身 - Hosinsul)',
            description: 'ការការពារអាយុជីវិត រូបរាងកាយ និងសេចក្តីថ្លៃថ្នូរពីការឈ្លានពានរាងកាយដោយអយុត្តិធម៌ តាមរយៈការឆ្លុះបញ្ចាំងរហ័ស ការគ្រប់គ្រងចម្ងាយ និងការវាយបកយ៉ាងម៉ឺងម៉ាត់។',
          },
          {
            title: 'ការសម្រេចសក្តានុពលខ្លួនឯង (Self-Realization / 自我實現 - Jaa-Silhyeon)',
            description: 'ការបន្តកែលម្អបុគ្គលិកលក្ខណៈ និងចរិតលក្ខណៈដោយការអនុវត្ត Geukgi (ការយកឈ្នះខ្លួនឯង) និង Hongik (ការបម្រើសង្គម) តាមរយៈវិន័យក្បាច់គុន។',
          },
        ],
        fiveTechniqueCharacteristics: [
          {
            id: 'char-1',
            title: 'បច្ចេកទេសការពារ និងវាយប្រហារ',
            korean: '공방(攻防)의 기술',
            explanation: 'ការរួមបញ្ចូលគ្នាប្រកបដោយភាពស៊ីសង្វាក់គ្នានៃការរារាំង ការវាយការពារ ការគេច ការដាល់ និងការទាត់ក្នុងលំដាប់លំដោយរហ័ស។',
          },
          {
            id: 'char-2',
            title: 'បច្ចេកទេសដោយដៃទទេ',
            korean: '맨손(徒手)의 기술',
            explanation: 'ពឹងផ្អែកតែលើអាវុធកាយវិភាគវិទ្យាធម្មជាតិនៃរាងកាយមនុស្សប៉ុណ្ណោះ ដោយគ្មានការប្រើប្រាស់អាវុធសិប្បនិម្មិតឡើយ។',
          },
          {
            id: 'char-3',
            title: 'ការប្រកួតប្រយុទ្ធពីចម្ងាយ',
            korean: '원거리(遠距離) 겨루기 기술',
            explanation: 'ការគ្រប់គ្រងចម្ងាយវាយលុកពីចម្ងាយដែលទាញយកផលប្រយោជន៍ជាអតិបរមានៃប្រវែងជើងវែង។',
          },
          {
            id: 'char-4',
            title: 'លក្ខណៈពិសេសនៃក្បាច់ទាត់ចម្រុះ',
            korean: '발차기 위주의 기술',
            explanation: 'ល្បីល្បាញទូទាំងពិភពលោកដោយសារភាពសម្បូរបែបដែលគ្មានគូប្រៀប៖ ការទាត់ត្រង់ ការទាត់រង្វង់ ការទាត់លោត ការទាត់បង្វិលខ្លួន និងការទាត់ពហុទិសដៅ។',
          },
          {
            id: 'char-5',
            title: 'វិធីសាស្ត្រវាយប្រហារបង្កើតកម្លាំងប៉ះទង្គិចខ្លាំង',
            korean: '타격(打擊) 방식의 발차기',
            explanation: 'បញ្ចេញថាមពលប៉ះទង្គិចយ៉ាងខ្លាំងក្លាតាមរយៈការខ្ទាស់ត្រគាកយ៉ាងលឿន និងការបង្កើនល្បឿន kinetic ទៅកាន់គោលដៅ។',
          },
        ],
        suryeonMeaning: {
          title: 'អត្ថន័យពិតនៃការហ្វឹកហាត់ (Suryeon / 수련 / 修鍊)',
          explanation: 'តាមរយៈការហ្វឹកហាត់ដដែលៗដោយមិនឈប់ឈរ សិស្សក្បាច់គុនកម្ចាត់ចោលនូវភាពតានតឹងដែលមិនចាំបាច់ និងចលនាខ្ជះខ្ជាយ ដើម្បីអនុវត្តបច្ចេកទេសប្រកបដោយប្រសិទ្ធភាពអតិបរមា។ នៅទីបំផុត Suryeon មានគោលបំណងកែលម្អមនុស្សឱ្យក្លាយជាមនុស្សដែលមានប្រាជ្ញា រឹងមាំ និងមានសេចក្តីមេត្តាករុណាចំពោះអ្នកដទៃ។',
        },
        mudoSportCharacteristics: [
          'ភាពបើកចំហ (Openness / 개방성): អាចចូលរួមបានជាសកលសម្រាប់គ្រប់វ័យ គ្រប់ភេទ និងគ្រប់សញ្ជាតិដោយគ្មានការរើសអើង។',
          'ភាពរីករាយ និងការកម្សាន្ត (Entertainment / 유희성): ក្បាច់សម្តែងលើអាកាសយ៉ាងរំភើប និងការទស្សនាដ៏អស្ចារ្យ។',
          'ការប្រកួតប្រជែង (Competitiveness / 경쟁성): ការប្រកួតយុទ្ធសាស្ត្រកម្រិតខ្ពស់ដែលសាកល្បងទាំងកាយសម្បទា និងចិត្តគំនិត។',
          'ច្បាប់ និងបទប្បញ្ញត្តិស្ថាប័ន (Rules / 규칙성): ការកំណត់ពិន្ទុតាមប្រព័ន្ធអេឡិចត្រូនិច PSS ធានាសុវត្ថិភាព ភាពមិនលម្អៀង និងការលេងដោយយុត្តិធម៌។',
          'ឧត្តមភាពកីឡា (Athletic Excellence / 탁월성): បណ្តុះការស៊ូទ្រាំនៃបេះដូង ភាពបត់បែន លំនឹង និងកម្លាំងផ្ទុះដ៏ខ្លាំងក្លា។',
        ],
      }
    case 'zh':
      return {
        definition: '跆拳道是一门以防身自卫与自我实现为终极目的、以千变万化的高超腿法为核心特征的徒手攻防现代武道体育运动。',
        koreanDefinition: '태권도는 호신(護身)과 자아실현(自我實現)을 목적으로 다양한 발차기를 특성으로 하는 맨손 공방의 무도 스포츠이다.',
        dualPurposes: [
          {
            title: '防身自卫 (Self-Defense / 護身 - Hosinsul)',
            description: '通过条件反射般的敏锐直觉、出神入化的距离把控与雷霆万钧的防守反击，在突发暴行面前誓死捍卫自身生命安全、肉体完整与神圣人格尊严。',
          },
          {
            title: '自我实现 (Self-Realization / 自我實現 - Jaa-Silhyeon)',
            description: '在终身严苛的武道修行中践行“克己”与“弘益”，持续打破精神与肉体极限，最终升华至崇高健全、兼善天下的圆满人格境界。',
          },
        ],
        fiveTechniqueCharacteristics: [
          {
            id: 'char-1',
            title: '攻防一体之技术',
            korean: '공방(攻防)의 기술',
            explanation: '格挡、化解、步法闪避与出拳、踢击在动能流动中高度协调交融，防守即为反击之发端。',
          },
          {
            id: 'char-2',
            title: '全徒手之纯粹技术',
            korean: '맨손(徒手)의 기술',
            explanation: '完全摒弃冷兵器依赖，纯粹依靠人体天然骨骼、关节与肌肉群组构成最具毁灭性的防护与进攻利器。',
          },
          {
            id: 'char-3',
            title: '远距离控制之对抗技术',
            korean: '원거리(遠距離) 겨루기 기술',
            explanation: '将下肢远长于上肢的生理距离优势发挥至极境，在对手攻击射程之外建立安全缓冲区并实施精准狙击。',
          },
          {
            id: 'char-4',
            title: '腿法为主之独特技术',
            korean: '발차기 위주의 기술',
            explanation: '享誉全球的独步优势：直线穿刺、圆周侧摆、腾空飞踢、转体旋风及多角度连续变线立体踢击。',
          },
          {
            id: 'char-5',
            title: '穿透性打击之发力方式',
            korean: '타격(打擊) 방식의 발차기',
            explanation: '通过骨盆快速转轴驱动与动能末端鞭打效应，将全身质量加速度在碰撞微秒内瞬间灌注目标深层。',
          },
        ],
        suryeonMeaning: {
          title: '修练(Suryeon / 수련)之真谛',
          explanation: '“修”者修心，“练”者淬身。在成千上万次枯燥极致的重复中，剥离一切多余赘肉、杂念浮躁与无效动能，以最低能量耗散爆发最高打击功力。修练的终极归宿，是让人格蜕变得更加睿智、豁达、坚韧与慈爱。',
        },
        mudoSportCharacteristics: [
          '开放性 (Openness / 개방성): 面向全球一切年龄、性别、种族与信仰敞开怀抱，毫无技术保留与宗派门户之见。',
          '游艺观赏性 (Entertainment / 유희성): 腾空转体击碎木板与极具视觉冲击力的空战特技，带来顶级现代视听审美震撼。',
          '极致竞争性 (Competitiveness / 경쟁성): 毫秒维度的战术博弈与心理交锋，全面检验选手的身心极限抗压底蕴。',
          '严密规则性 (Institutionalized Rules / 규칙성): 电子护具(PSS)与标准化违规罚则，最大限度守护安全、客观与公平正义。',
          '卓越体育性 (Athletic Excellence / 탁월성): 深度锻造非凡的心肺耐力、超常柔韧度、空间平衡感知与爆发输出功率。',
        ],
      }
    case 'ko':
      return {
        definition: '태권도는 호신(護身)과 자아실현(自我實現)을 목적으로 다양한 발차기를 특성으로 하는 맨손 공방의 무도 스포츠이다.',
        koreanDefinition: '태권도는 호신(護身)과 자아실현(自我實現)을 목적으로 다양한 발차기를 특성으로 하는 맨손 공방의 무도 스포츠이다.',
        dualPurposes: [
          {
            title: '호신 (護身 - Self-Defense)',
            description: '체득된 반사 신경과 거리 조절, 결정적인 반격을 통해 부당한 신체적 공격으로부터 자신의 생명과 신체적 안전, 인간적 존엄성을 보호합니다.',
          },
          {
            title: '자아실현 (自我實現 - Self-Realization)',
            description: '무도 수련을 통해 극기(자신을 이김)와 홍익(세상을 이롭게 함)을 체화하여 인격과 도덕성을 지속적으로 완성해 나가는 과정입니다.',
          },
        ],
        fiveTechniqueCharacteristics: [
          {
            id: 'char-1',
            title: '공방(攻防)의 기술',
            korean: '공방(攻防)의 기술',
            explanation: '막기, 피하기, 쳐내기 등 방어 기술과 지르기, 차기 등 공격 기술이 역동적으로 일체화되어 조화를 이룹니다.',
          },
          {
            id: 'char-2',
            title: '맨손(徒手)의 기술',
            korean: '맨손(徒手)의 기술',
            explanation: '어떠한 무기도 사용하지 않고 인체의 자연스러운 해부학적 신체 부위만을 단련하여 무기화합니다.',
          },
          {
            id: 'char-3',
            title: '원거리(遠距離) 겨루기 기술',
            korean: '원거리(遠距離) 겨루기 기술',
            explanation: '팔보다 긴 다리의 신체적 특성을 극대화하여 먼 거리에서 상대를 견제하고 타격하는 아웃파이팅 기술입니다.',
          },
          {
            id: 'char-4',
            title: '발차기 위주의 기술',
            korean: '발차기 위주의 기술',
            explanation: '직선 차기, 회전 차기, 도약 차기, 연속 차기 등 세계 격투기 중 가장 다양하고 고난도의 발 기술 체계를 보유합니다.',
          },
          {
            id: 'char-5',
            title: '타격(打擊) 방식의 발차기',
            korean: '타격(打擊) 방식의 발차기',
            explanation: '골반의 스냅과 운동역학적 가속도를 이용하여 접촉 순간 폭발적인 충격 에너지를 표적에 전달합니다.',
          },
        ],
        suryeonMeaning: {
          title: '수련(修鍊 / Suryeon)의 참된 의미',
          explanation: '수련이란 끊임없는 신체적 반복을 통해 불필요한 힘과 군더더기 동작을 깎아내어 최소의 힘으로 최대의 효과를 내는 과정입니다. 궁극적으로 수련은 태권도를 통해 인격을 수양하고, 보다 성숙하고 강인하며 자애로운 인간으로 거듭나는 데 그 본질이 있습니다.',
        },
        mudoSportCharacteristics: [
          '개방성 (Openness): 연령, 성별, 국경, 인종에 구애받지 않고 누구나 평등하게 참여할 수 있습니다.',
          '유희성 (Entertainment): 역동적인 도약 격파와 화려한 발차기로 관중에게 시각적 쾌감과 재미를 선사합니다.',
          '경쟁성 (Competitiveness): 치열한 전술 두뇌 싸움과 체력의 한계를 시험하는 스포츠 승부를 펼칩니다.',
          '규칙성 (Institutionalized Rules): 공인 전자호구(PSS)와 판정 규칙으로 안전과 공정성을 절대적으로 보장합니다.',
          '탁월성 (Athletic Excellence): 심폐지구력, 유연성, 평형성, 순발력 등 인간 신체 능력의 최고조를 개발합니다.',
        ],
      }
    default:
      return {
        definition: 'Taekwondo is a martial art sport that trains practitioners to execute bare-handed defense and attack techniques characterized by diverse kicks for the dual purposes of Self-Defense and Self-Realization.',
        koreanDefinition: '태권도는 호신(護身)과 자아실현(自我實現)을 목적으로 다양한 발차기를 특성으로 하는 맨손 공방의 무도 스포츠이다.',
        dualPurposes: [
          {
            title: 'Self-Defense (호신 / 護身 - Hosinsul)',
            description: 'Protecting one’s life, bodily integrity, and dignity from unjust physical aggression through mastered reflex, distance management, and decisive counter-striking.',
          },
          {
            title: 'Self-Realization (자아실현 / 自我實現 - Jaa-Silhyeon)',
            description: 'The continuous refinement of personality and character by realizing Geukgi (self-conquest) and Hongik (serving society) through martial discipline.',
          },
        ],
        fiveTechniqueCharacteristics: [
          {
            id: 'char-1',
            title: 'Defense and Attack Techniques',
            korean: '공방(攻防)의 기술',
            explanation: 'Harmonious integration of blocking, parrying, dodging, striking, and kicking in dynamic sequence.',
          },
          {
            id: 'char-2',
            title: 'Bare-Handed Techniques',
            korean: '맨손(徒手)의 기술',
            explanation: 'Relies solely on natural human anatomical weapons without artificial armament.',
          },
          {
            id: 'char-3',
            title: 'Sparring from a Distance',
            korean: '원거리(遠距離) 겨루기 기술',
            explanation: 'Specialized out-fighting and distance management that maximizes the long reach of foot strikes.',
          },
          {
            id: 'char-4',
            title: 'Characterized by Diverse Kicks',
            korean: '발차기 위주의 기술',
            explanation: 'World-renowned for unmatched variety: linear, circular, jumping, spinning, and multi-directional kicks.',
          },
          {
            id: 'char-5',
            title: 'Impact Hitting Method',
            korean: '타격(打擊) 방식의 발차기',
            explanation: 'Delivers explosive impact energy through rapid hip snap and kinetic acceleration into terminal impact.',
          },
        ],
        suryeonMeaning: {
          title: 'The True Meaning of Practice (Suryeon / 수련 / 修鍊)',
          explanation: 'Through relentless, repeated practice, a martial artist strips away all unnecessary tension and wasted movement to execute techniques with maximum efficiency. Ultimately, Suryeon has the condensed purpose of maturing into a wiser, stronger, and more benevolent human being.',
        },
        mudoSportCharacteristics: [
          'Openness (개방성): Universally accessible to all ages, genders, and nationalities without discrimination.',
          'Entertainment (유희성): Dynamic, thrilling aerial acrobatics and spectator excitement.',
          'Competitiveness (경쟁성): High-level tactical chess match testing physical and mental conditioning.',
          'Institutionalized Rules (규칙성): Standardized electronic PSS scoring ensuring safety, objectivity, and fair play.',
          'Athletic Excellence (탁월성): Cultivates elite cardiovascular stamina, flexibility, balance, and explosive power.',
        ],
      }
  }
}

// -----------------------------------------------------------------------------
// 5. SESOK-OGYE (Hwarang 5 Commandments)
// -----------------------------------------------------------------------------
export function getLocalizedSesokOgye(lang: string): LocalizedSesokOgyeItem[] {
  switch (lang) {
    case 'km':
      return [
        {
          commandment: '사군이충 (事君以忠)',
          romanized: 'Sa-gun-i-chung',
          english: 'ភក្តីភាពចំពោះជាតិ និងមាតុភូមិ',
          description: 'ការលះបង់កម្លាំងកាយចិត្តដើម្បីការពារ សេរីភាព និងកិត្តិយសនៃប្រទេសជាតិ និងសហគមន៍។',
        },
        {
          commandment: '사친이효 (事親以孝)',
          romanized: 'Sa-chin-i-hyo',
          english: 'កតញ្ញូតាចំពោះមាតាបិតា',
          description: 'ការគោរព និងដឹងគុណចំពោះឪពុកម្តាយ និងបុព្វការីជន តាមរយៈអាកប្បកិរិយាល្អ និងការបំពេញកាតព្វកិច្ចគ្រួសារ។',
        },
        {
          commandment: '교우이신 (交友以信)',
          romanized: 'Gyo-woo-i-sin',
          english: 'ភាពស្មោះត្រង់ក្នុងចំណោមមិត្តភក្តិ',
          description: 'ការរក្សាភាពស្មោះត្រង់ ភាពពិតប្រាកដ និងភាពជឿជាក់ដែលមិនអាចបំបែកបានក្នុងមិត្តភាពទាំងអស់។',
        },
        {
          commandment: '임전무퇴 (臨戰無退)',
          romanized: 'Im-jeon-mu-toe',
          english: 'មិនដែលដកថយក្នុងសមរភូមិ',
          description: 'ការប្រឈមមុខនឹងឧបសគ្គ ការពារយុត្តិធម៌ ឬការប្រយុទ្ធដោយសេចក្តីក្លាហានម៉ឺងម៉ាត់ ដោយមិនភ័យខ្លាចដកថយ។',
        },
        {
          commandment: '살생유택 (殺生有擇)',
          romanized: 'Sal-saeng-yu-taek',
          english: 'ការមិនសម្លាប់ផ្តេសផ្តាស',
          description: 'ការអនុវត្តក្រមសីលធម៌ខ្ពស់បំផុត; មិនប្រើប្រាស់កម្លាំងបំផ្លិចបំផ្លាញដោយឥតហេតុផលឡើយ។',
        },
      ]
    case 'zh':
      return [
        {
          commandment: '사군이충 (事君以忠)',
          romanized: 'Sa-gun-i-chung',
          english: '事君以忠 (精忠报国)',
          description: '将个人力量毫无保留地献给国家、民族与社群的安宁、自由与尊严。',
        },
        {
          commandment: '사친이효 (事親以孝)',
          romanized: 'Sa-chin-i-hyo',
          english: '事亲以孝 (百善孝先)',
          description: '以崇高正直之德行品格与感恩之心报答父母长辈之深恩，恪尽家庭孝道。',
        },
        {
          commandment: '교우이신 (交友以信)',
          romanized: 'Gyo-woo-i-sin',
          english: '交友以信 (言出必行)',
          description: '在一切同袍同门友谊与交往中，保持坚如磐石的信誉、真诚与可靠。',
        },
        {
          commandment: '임전무퇴 (臨戰無退)',
          romanized: 'Im-jeon-mu-toe',
          english: '临战无退 (勇者无畏)',
          description: '面对危难挑战、捍卫正义或保家卫国之际，勇往直前，决不临阵怯懦退缩。',
        },
        {
          commandment: '살생유택 (殺生有擇)',
          romanized: 'Sal-saeng-yu-taek',
          english: '杀生有择 (仁者爱人)',
          description: '恪守崇高的人道主义慈悲节制；严禁妄动杀念或滥用杀伤性武力。',
        },
      ]
    case 'ko':
      return [
        {
          commandment: '사군이충 (事君以忠)',
          romanized: 'Sa-gun-i-chung',
          english: '국가와 주권에 대한 충성',
          description: '자신의 힘을 국가와 공동체의 안전, 자유, 명예를 수호하는 데 바칩니다.',
        },
        {
          commandment: '사친이효 (事親以孝)',
          romanized: 'Sa-chin-i-hyo',
          english: '부모에 대한 지극한 효도',
          description: '올바른 품행과 감사하는 마음으로 부모와 웃어른을 공경하고 도리를 다합니다.',
        },
        {
          commandment: '교우이신 (交友以信)',
          romanized: 'Gyo-woo-i-sin',
          english: '벗 사이의 두터운 신의',
          description: '동료와 친구 사이에서 변치 않는 신뢰와 성실, 정직함을 지킵니다.',
        },
        {
          commandment: '임전무퇴 (臨戰無退)',
          romanized: 'Im-jeon-mu-toe',
          english: '전장에 임하여 물러섬이 없음',
          description: '정의의 수호나 난관 앞에서 비겁하게 물러서지 않고 당당히 맞섭니다.',
        },
        {
          commandment: '살생유택 (殺生有擇)',
          romanized: 'Sal-saeng-yu-taek',
          english: '생명을 해칠 때 가림이 있음',
          description: '생명을 귀하게 여기며, 함부로 폭력을 휘두르거나 살생하지 않는 윤리적 절제입니다.',
        },
      ]
    default:
      return [
        {
          commandment: '사군이충 (事君以忠)',
          romanized: 'Sa-gun-i-chung',
          english: 'Loyalty to Country & Sovereign',
          description: 'Devoting one’s strength to the protection, freedom, and honor of one’s nation and community.',
        },
        {
          commandment: '사친이효 (事親以孝)',
          romanized: 'Sa-chin-i-hyo',
          english: 'Filial Piety & Honor to Parents',
          description: 'Honoring one’s parents and ancestors through upright conduct, gratitude, and moral family duty.',
        },
        {
          commandment: '교우이신 (交友以信)',
          romanized: 'Gyo-woo-i-sin',
          english: 'Trust & Sincerity Among Friends',
          description: 'Maintaining unbreakable fidelity, truthfulness, and reliability in all friendships and alliances.',
        },
        {
          commandment: '임전무퇴 (臨戰無退)',
          romanized: 'Im-jeon-mu-toe',
          english: 'Never Retreat in Battle',
          description: 'Facing adversity, defense of justice, or combat with resolute courage without cowardly retreat.',
        },
        {
          commandment: '살생유택 (殺生有擇)',
          romanized: 'Sal-saeng-yu-taek',
          english: 'Restraint in Taking Life',
          description: 'Exercising supreme ethical restraint; never using deadly force frivolously or without just cause.',
        },
      ]
  }
}

// -----------------------------------------------------------------------------
// 6. THEORY OF POWER FACTORS
// -----------------------------------------------------------------------------
export function getLocalizedTheoryOfPower(lang: string): LocalizedPowerFactor[] {
  switch (lang) {
    case 'km':
      return [
        {
          factor: 'កម្លាំងប្រតិកម្ម (Reaction Force)',
          korean: '반동력 (Bandongryeok)',
          principle: 'ច្បាប់ទី ៣ របស់ញូតុន (Newton’s 3rd Law of Motion)',
          explanation: 'ការទាញកណ្តាប់ដៃម្ខាងទៀតមកត្រគាកវិញឱ្យលឿននៅពេលដែលកណ្តាប់ដៃខាងមុខវាយចេញ បង្កើតកម្លាំងបង្វិលសងគ្នា ដែលបង្កើនល្បឿននៃការប៉ះទង្គិចខាងមុខទ្វេដង។',
        },
        {
          factor: 'ការប្រមូលផ្តុំកម្លាំង (Concentration)',
          korean: '집중 (Jipjung)',
          principle: 'សម្ពាធ = កម្លាំង / ផ្ទៃក្រឡា (Pressure = Force / Area)',
          explanation: 'ការប្រមូលផ្តុំថាមពល kinetic សរុបទៅលើផ្ទៃប៉ះទង្គិចតូចបំផុតដែលអាចធ្វើទៅបាន (ឧទាហរណ៍៖ បាតជើង ឬគែមដៃ) នៅត្រង់មីលីវិនាទីនៃការប៉ះទង្គិច។',
        },
        {
          factor: 'លំនឹងរាងកាយ (Equilibrium)',
          korean: '균형 (Gyunhyeong)',
          principle: 'ចំណុចកណ្តាលទំនាញឌីណាមិក (Dynamic Center of Gravity)',
          explanation: 'ការរក្សាលំនឹង និងជំហររឹងមាំធានាថាមិនមានថាមពល kinetic ណាមួយត្រូវបាត់បង់ដោយសារការរង្គោះរង្គើរាងកាយឡើយ ដែលអនុញ្ញាតឱ្យទម្ងន់រាងកាយ ១០០% បញ្ជូនទៅកាន់គោលដៅ។',
        },
        {
          factor: 'ការគ្រប់គ្រងដង្ហើម (Breath Control)',
          korean: '호흡조절 (Hohup Jojeol)',
          principle: 'ការចាក់សោសាច់ដុំពោះ (Abdominal Diaphragmatic Core Lock)',
          explanation: 'ការដកដង្ហើមចេញយ៉ាងលឿននៅពេលប៉ះទង្គិចជាមួយសម្រែក Kihap ធ្វើឱ្យតំបន់ Danjeon រឹងមាំ ការពារសរីរាង្គខាងក្នុងពីការរញ្ជួយ និងបង្កើនការកន្ត្រាក់សាច់ដុំចុងក្រោយ។',
        },
        {
          factor: 'ម៉ាស និងការបង្វិលត្រគាក (Mass & Hip Rotation)',
          korean: '질량 & 골반회전 (Zillyang & Golban)',
          principle: 'កម្លាំងប្រតិកម្មដី & សន្ទុះរង្វិល (Ground Reaction & Rotational Momentum)',
          explanation: 'កម្លាំងពិតប្រាកដកើតចេញពីការធាក់ដី និងការបង្វិលត្រគាកចូលទៅក្នុងបច្ចេកទេស ដោយបញ្ជូនទម្ងន់រាងកាយទាំងមូលទៅពីក្រោយអវយវៈដែលកំពុងវាយប្រហារ។',
        },
        {
          factor: 'ល្បឿន (Speed / Velocity)',
          korean: '속도 (Sokdo)',
          principle: 'ថាមពល Kinetic: E = 1/2 * m * v²',
          explanation: 'ដោយសារថាមពល kinetic កើនឡើងជាការ៉េនៃល្បឿន ការបង្កើនល្បឿនវាយប្រហារទ្វេដង នឹងបង្កើនកម្លាំងបំផ្លិចបំផ្លាញដល់ទៅ ៤ ដង។ ល្បឿនគឺជាមេគុណដ៏មានឥទ្ធិពលបំផុត។',
        },
      ]
    case 'zh':
      return [
        {
          factor: '反动力 (Reaction Force)',
          korean: '반동력 (Bandongryeok)',
          principle: '牛顿第三运动定律 (作用力与反作用力)',
          explanation: '在前手直拳冲出的精确瞬间，将非攻击手以同等速度猛烈后拉至腰际，产生双向反扭矩，使前端冲击速度成倍暴增。',
        },
        {
          factor: '集中力 (Concentration)',
          korean: '집중 (Jipjung)',
          principle: '压强原理：P = F / S (压强=力/受力面积)',
          explanation: '将全身爆发之总动能，在发生碰撞的毫秒微瞬间，集中施加于人体解剖学最小受力截面上（如前脚掌前掌球、手刀外沿），产生毁灭性穿透压强。',
        },
        {
          factor: '平衡力 (Equilibrium)',
          korean: '균형 (Gyunhyeong)',
          principle: '动态身体重心轴向稳固控制',
          explanation: '维持坚若磐石的动态平衡与直立躯干，确保全身动能在传递路径中零晃动损耗，使100%体重惯性垂直贯穿目标内部。',
        },
        {
          factor: '呼吸调节 (Breath Control)',
          korean: '호흡조절 (Hohup Jojeol)',
          principle: '腹式横膈膜核心瞬间刚性自锁',
          explanation: '击中刹那配合短促有力的发声气合(Kihap)猛烈吐气，瞬间锁紧丹田核心腹肌群，抵御反震并最大化肌肉末梢刚性硬度。',
        },
        {
          factor: '质量与骨盆转动 (Mass & Hip Rotation)',
          korean: '질량 & 골반회전 (Zillyang & Golban)',
          principle: '地面反作用力传递与角动量转换',
          explanation: '真正的破坏力始于蹬地发力，通过骨盆瞬间扭转将全身重力势能与旋转动量悉数注入攻击肢体末端。',
        },
        {
          factor: '绝对速度 (Speed / Velocity)',
          korean: '속도 (Sokdo)',
          principle: '动能公式：E = 1/2 * m * v²',
          explanation: '因动能与速度平方成正比，出击速度提升一倍，终点破坏动能将暴增四倍。速度是摧毁一切防线的终极乘数。',
        },
      ]
    case 'ko':
      return [
        {
          factor: '반동력 (Reaction Force)',
          korean: '반동력 (Bandongryeok)',
          principle: '뉴턴의 운동 제3법칙 (작용·반작용의 법칙)',
          explanation: '공격하는 주먹이 나가는 정밀한 순간에 반대쪽 주먹을 허리춤으로 강하게 당겨 회전력을 극대화하여 전방 타격 속도를 배가시킵니다.',
        },
        {
          factor: '집중 (Concentration)',
          korean: '집중 (Jipjung)',
          principle: '압력의 원리: P = F / A (힘의 국소 집중)',
          explanation: '타격이 적중하는 결정적 순간에 발생한 모든 운동 에너지를 앞축, 손날 등 가장 좁은 면적에 집중시켜 관통력을 극대화합니다.',
        },
        {
          factor: '균형 (Equilibrium)',
          korean: '균형 (Gyunhyeong)',
          principle: '동적 무게중심 제어',
          explanation: '자세의 안정성과 중심을 곧게 유지하여 신체 흔들림으로 인한 에너지 손실을 없애고, 체중의 100%를 목표물에 그대로 전달합니다.',
        },
        {
          factor: '호흡조절 (Hohup Jojeol)',
          korean: '호흡조절 (Hohup Jojeol)',
          principle: '복식 호흡 및 단전 코어 락(Core Lock)',
          explanation: '타격 순간 기합과 함께 숨을 날카롭게 내쉬어 단전을 조임으로써 내부 장기를 충격으로부터 보호하고 근육 수축을 최고조로 끌어올립니다.',
        },
        {
          factor: '질량 & 골반회전 (Zillyang & Golban)',
          korean: '질량 & 골반회전 (Zillyang & Golban)',
          principle: '지면 반발력 및 회전 운동량',
          explanation: '진정한 파괴력은 지면을 박차고 골반을 회전시키는 동작에서 나오며, 이를 통해 전신 체중을 타격 부위 뒤에 강력히 실어줍니다.',
        },
        {
          factor: '속도 (Speed / Velocity)',
          korean: '속도 (Sokdo)',
          principle: '운동 에너지 공식: E = 1/2 * m * v²',
          explanation: '운동 에너지는 속도의 제곱에 비례하므로, 타격 속도가 2배 빨라지면 파괴력은 4배로 증가합니다. 속도는 파괴력의 궁극적 배수입니다.',
        },
      ]
    default:
      return [
        {
          factor: 'Reaction Force',
          korean: '반동력 (Bandongryeok)',
          principle: 'Newton’s 3rd Law of Motion',
          explanation: 'Pulling the non-striking fist back to the hip at the exact instant the forward punch fires creates a reciprocal torque, effectively doubling the forward impact velocity.',
        },
        {
          factor: 'Concentration',
          korean: '집중 (Jipjung)',
          principle: 'Pressure = Force / Area',
          explanation: 'Concentrating total kinetic output onto the smallest possible anatomical striking surface (e.g. ball of foot, knife hand edge) at the precise millisecond of terminal impact.',
        },
        {
          factor: 'Equilibrium',
          korean: '균형 (Gyunhyeong)',
          principle: 'Dynamic Center of Gravity',
          explanation: 'Maintaining balance and upright posture ensures that zero kinetic energy is lost to body wobbling, allowing 100% of body mass to transfer directly into the target.',
        },
        {
          factor: 'Breath Control',
          korean: '호흡조절 (Hohup Jojeol)',
          principle: 'Abdominal Diaphragmatic Core Lock',
          explanation: 'Exhaling sharply at impact with a resonant Kihap tightens the Danjeon core, protects internal organs from counter-shock, and accelerates terminal muscle contraction.',
        },
        {
          factor: 'Mass & Hip Rotation',
          korean: '질량 & 골반회전 (Zillyang & Golban)',
          principle: 'Ground Reaction & Rotational Momentum',
          explanation: 'True power originates from pushing against the ground and twisting the hips into the technique, driving the practitioner’s full body weight behind the striking limb.',
        },
        {
          factor: 'Speed / Velocity',
          korean: '속도 (Sokdo)',
          principle: 'Kinetic Energy E = 1/2 * m * v²',
          explanation: 'Because kinetic energy scales quadratically with velocity, doubling your striking speed quadruples the destructive impact force. Speed is the ultimate multiplier.',
        },
      ]
  }
}

// -----------------------------------------------------------------------------
// 7. DOBOK & BELT COSMOLOGY (도복 & 띠)
// -----------------------------------------------------------------------------
export interface LocalizedDobokPhilosophy {
  aspects: Array<{
    hanja: string
    sound: string
    meaning: string
    title: string
    description: string
    color: string
  }>
  cycleTitle: string
  belts: Array<{
    color: string
    name: string
    meaning: string
    sub: string
    isDark?: boolean
  }>
}

export function getLocalizedDobokPhilosophy(lang: string): LocalizedDobokPhilosophy {
  switch (lang) {
    case 'km':
      return {
        aspects: [
          {
            hanja: '天',
            sound: 'Cheon',
            meaning: 'មេឃ / ឋានសួគ៌',
            title: 'អាវលើ (Jeogori)',
            description: 'ទម្រង់រាងមូលនៃអាវដែលព័ទ្ធជុំវិញដងខ្លួនខាងលើ តំណាងឱ្យឋានសួគ៌ និងថាមពល Yang បង្កើតថ្មីដ៏បរិសុទ្ធ។',
            color: '#EF2F38',
          },
          {
            hanja: '地',
            sound: 'Ji',
            meaning: 'ផែនដី',
            title: 'ខោ (Baji)',
            description: 'ស្ថេរភាពរាងបួនជ្រុងនៃខោដែលឈរយ៉ាងរឹងមាំលើកន្ទេល តំណាងឱ្យផែនដី និងថាមពល Yin ដែលទទួលយក។',
            color: '#0042EA',
          },
          {
            hanja: '人',
            sound: 'In',
            meaning: 'មនុស្សជាតិ',
            title: 'ខ្សែក្រវាត់ (Ddi)',
            description: 'ខ្សែក្រវាត់ដែលរុំជុំវិញចង្កេះ (Danjeon) តែមួយជុំ បង្រួបបង្រួមមេឃ និងដី ទៅជាគោលបំណងមនុស្សជាតិប្រកបដោយភាពសុខដុម (Ilsim)។',
            color: '#A05B00',
          },
        ],
        cycleTitle: 'វដ្តខាងវិញ្ញាណនៃការវិវត្តខ្សែក្រវាត់ (Ddi)',
        belts: [
          { color: '⚪', name: 'ស (White)', meaning: 'គ្រាប់ពូជក្នុងរដូវរងា', sub: 'ភាពបរិសុទ្ធ & ចិត្តសិស្សដំបូង' },
          { color: '🟡', name: 'លឿង (Yellow)', meaning: 'ដីមានជីជាតិ', sub: 'ឫសចាប់ផ្តើមលូតលាស់' },
          { color: '🟢', name: 'បៃតង (Green)', meaning: 'ពន្លកដើមឈើ', sub: 'មែកធាងលូតលាស់លឿន' },
          { color: '🔵', name: 'ខៀវ (Blue)', meaning: 'មេឃធំទូលាយ', sub: 'លូតលាស់ឈានដល់ភាពចាស់ទុំ' },
          { color: '🔴', name: 'ក្រហម (Red)', meaning: 'ភ្លើង & គ្រោះថ្នាក់', sub: 'ការគ្រប់គ្រងខ្លួនឯងតឹងរ៉ឹង' },
          { color: '⚫', name: 'ខ្មៅ (Black)', meaning: 'ភាពស្ទាត់ជំនាញពិត', sub: 'ពន្លឺព្រះអាទិត្យថ្មី Dan ទី ១', isDark: true },
        ],
      }
    case 'zh':
      return {
        aspects: [
          {
            hanja: '天',
            sound: 'Cheon',
            meaning: '天道 / 苍穹',
            title: '上衣 (Jeogori)',
            description: '上衣环绕上身的圆融剪裁，象征天道宇宙与至刚至纯的“阳”性创造生机。',
            color: '#EF2F38',
          },
          {
            hanja: '地',
            sound: 'Ji',
            meaning: '坤舆 / 大地',
            title: '裤装 (Baji)',
            description: '双足稳踏垫面的下装方正稳固之势，象征大地承载与厚德载物的“阴”性包容能量。',
            color: '#0042EA',
          },
          {
            hanja: '人',
            sound: 'In',
            meaning: '万物之灵 / 人本',
            title: '道带 (Ddi)',
            description: '道带在丹田核心单圈系紧，象征天地与人三才合一，汇聚成不可动摇的赤诚一心(一心 / Ilsim)。',
            color: '#A05B00',
          },
        ],
        cycleTitle: '跆拳道段级位腰带精神递进周天 (Ddi)',
        belts: [
          { color: '⚪', name: '白带 (White)', meaning: '雪原覆种', sub: '纯白如纸与初心之始' },
          { color: '🟡', name: '黄带 (Yellow)', meaning: '沃土初润', sub: '根基深扎大地生根' },
          { color: '🟢', name: '绿带 (Green)', meaning: '破土萌芽', sub: '枝叶抽苔蓬勃成长' },
          { color: '🔵', name: '蓝带 (Blue)', meaning: '直指苍穹', sub: '迎向高空追求卓越' },
          { color: '🔴', name: '红带 (Red)', meaning: '烈火警示', sub: '威猛破坏与严加自律' },
          { color: '⚫', name: '黑带 (Black)', meaning: '万色归玄', sub: '一段新生与登堂入室', isDark: true },
        ],
      }
    case 'ko':
      return {
        aspects: [
          {
            hanja: '天',
            sound: '천 (Cheon)',
            meaning: '하늘',
            title: '상의 (저고리)',
            description: '상체를 둥글게 감싸는 원형 재단은 하늘(天)과 순수한 양(陽)의 창조적 기운을 상징합니다.',
            color: '#EF2F38',
          },
          {
            hanja: '地',
            sound: '지 (Ji)',
            meaning: '땅',
            title: '하의 (바지)',
            description: '도포 바닥에 굳건히 두 발을 딛는 사각형의 안정된 형태는 땅(地)과 포용하는 음(陰)의 기운을 상징합니다.',
            color: '#0042EA',
          },
          {
            hanja: '人',
            sound: '인 (In)',
            meaning: '사람',
            title: '띠 (Ddi)',
            description: '단전 주위를 한 바퀴 감아 묶는 띠는 하늘과 땅, 사람이 하나로 어우러지는 삼재(三才)의 일심(一心)을 구현합니다.',
            color: '#A05B00',
          },
        ],
        cycleTitle: '도복 띠(Ddi)의 영적 순환과 승급 단계',
        belts: [
          { color: '⚪', name: '흰 띠 (White)', meaning: '겨울의 씨앗', sub: '순수함과 초심의 시작' },
          { color: '🟡', name: '노란 띠 (Yellow)', meaning: '기름진 대지', sub: '뿌리를 내리는 성장' },
          { color: '🟢', name: '초록 띠 (Green)', meaning: '돋아나는 새싹', sub: '기본기의 급속한 확장' },
          { color: '🔵', name: '파란 띠 (Blue)', meaning: '드넓은 창공', sub: '원숙함을 향한 비상' },
          { color: '🔴', name: '빨간 띠 (Red)', meaning: '불과 위험', sub: '힘에 대한 엄격한 절제' },
          { color: '⚫', name: '검은 띠 (Black)', meaning: '완성과 새로운 시작', sub: '1단 수련의 참된 출발', isDark: true },
        ],
      }
    default:
      return {
        aspects: [
          {
            hanja: '天',
            sound: 'Cheon',
            meaning: 'Heaven',
            title: 'Upper Jacket (Jeogori)',
            description: 'The circular cut of the jacket surrounding the upper torso represents Heaven and pure Yang creative energy.',
            color: '#EF2F38',
          },
          {
            hanja: '地',
            sound: 'Ji',
            meaning: 'Earth',
            title: 'Trousers (Baji)',
            description: 'The square stability of the pants grounding both feet upon the mat represents Earth and receptive Yin energy.',
            color: '#0042EA',
          },
          {
            hanja: '人',
            sound: 'In',
            meaning: 'Humanity',
            title: 'Belt (Ddi)',
            description: 'The belt wrapped in a single loop around the Danjeon unites Heaven and Earth into one harmonious human purpose (Ilsim).',
            color: '#A05B00',
          },
        ],
        cycleTitle: 'The Spiritual Cycle of Belt Progression (Ddi)',
        belts: [
          { color: '⚪', name: 'White', meaning: 'Seed in Winter', sub: 'Purity & beginner mind' },
          { color: '🟡', name: 'Yellow', meaning: 'Fertile Soil', sub: 'Roots establishing' },
          { color: '🟢', name: 'Green', meaning: 'Sprouting Plant', sub: 'Rapid branch growth' },
          { color: '🔵', name: 'Blue', meaning: 'Vast Sky', sub: 'Reaching for maturity' },
          { color: '🔴', name: 'Red', meaning: 'Fire & Danger', sub: 'Strict self-restraint' },
          { color: '⚫', name: 'Black', meaning: 'Impervious Mastery', sub: '1st Dan beginner dawn', isDark: true },
        ],
      }
  }
}

export function getLocalizedPhilosophySubTabs(lang: string): Array<{ id: string; label: string }> {
  switch (lang) {
    case 'km':
      return [
        { id: 'spirit-virtues', label: 'ស្មារតីទ្វេ & គុណធម៌ទាំង ៥' },
        { id: 'tenets', label: 'គោលការណ៍ប្រពៃណីទាំង ៥' },
        { id: 'nature-sport', label: 'អត្ថន័យ & កីឡា Mudo' },
        { id: 'dobok', label: 'ទស្សនវិជ្ជា Dobok & ខ្សែក្រវាត់' },
        { id: 'power-hwarang', label: 'ទ្រឹស្តីនៃថាមពល & Hwarang' },
      ]
    case 'zh':
      return [
        { id: 'spirit-virtues', label: '两大精神与五大德目' },
        { id: 'tenets', label: '传统五大训条' },
        { id: 'nature-sport', label: '武道本质与现代体育' },
        { id: 'dobok', label: '道服与腰带宇宙观' },
        { id: 'power-hwarang', label: '发力理论与花郎戒律' },
      ]
    case 'ko':
      return [
        { id: 'spirit-virtues', label: '양대 이념 & 5대 덕목' },
        { id: 'tenets', label: '태권도 5대 훈' },
        { id: 'nature-sport', label: '무도 스포츠의 본질' },
        { id: 'dobok', label: '도복과 띠의 철학' },
        { id: 'power-hwarang', label: '힘의 원리 & 화랑 세속오계' },
      ]
    default:
      return [
        { id: 'spirit-virtues', label: 'Dual Spirit & 5 Virtues' },
        { id: 'tenets', label: '5 Traditional Tenets' },
        { id: 'nature-sport', label: 'Meaning & Mudo Sport' },
        { id: 'dobok', label: 'Dobok & Belt Cosmology' },
        { id: 'power-hwarang', label: 'Power Theory & Hwarang' },
      ]
  }
}
