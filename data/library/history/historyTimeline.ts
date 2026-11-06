export interface TimelineMilestone {
  id: string
  year: string
  era: 'Ancient (24th c. BC–10th c. AD)' | 'Medieval (10th–16th c.)' | 'Modern Pre-War (17th c.–1945)' | 'Early Kwans (1946–1960)' | 'Fruit of Unity (1961–1970)' | 'A Leap Forward (1971–1985)' | 'Olympic Entry (1986–1999)' | 'World Martial Sport (2000–Present)'
  epochNumber: number
  title: string
  koreanTitle: string
  keyFigures: string
  summary: string
  details: string[]
  image: string
  tagColor: string
}

export const historyTimelineData: TimelineMilestone[] = [
  // =========================================================================
  // EPOCH 1: ANCIENT TIMES (24th Century BC – 10th Century AD)
  // =========================================================================
  {
    id: 'time-01',
    year: '24th c. BCE – 1st c. BCE',
    era: 'Ancient (24th c. BC–10th c. AD)',
    epochNumber: 1,
    title: 'Gojoseon & Ancient Bare-Handed Survival Combat',
    koreanTitle: '고조선 & 고대 생존 무예의 기원',
    keyFigures: 'Ancient Tribal Leaders, Frontier Cadets',
    summary:
      'In ancient times, children and adults were actively encouraged to learn bare-handed martial arts because combat techniques were essential for individual survival, hunting, and tribal community defense.',
    details: [
      'Martial arts served as a primary means of personal social advancement and national tribal survival.',
      'Ritual martial tournaments were held during agricultural festivals such as Yeonggo and Dongmaeng.',
      'Laid the cultural bedrock linking physical martial prowess with spiritual character cultivation.',
    ],
    image: 'https://images.unsplash.com/photo-1555597673-b21d5c935865?q=80&w=800&auto=format&fit=crop',
    tagColor: '#EF2F38',
  },
  {
    id: 'time-02',
    year: '37 BCE – 668 CE',
    era: 'Ancient (24th c. BC–10th c. AD)',
    epochNumber: 1,
    title: 'Goguryeo Sun Bae Warriors & Muyongchong Tomb Murals',
    koreanTitle: '고구려 조의선인(선배) & 무용총 수박 벽화',
    keyFigures: 'King Dongmyeong (Jumong), Sun Bae Elite Corps',
    summary:
      'Goguryeo formed the Sun Bae ("men of virtue who never recoil from fighting"), an elite warrior brotherhood tested at the annual Sin Su Do festival in Subak and archery.',
    details: [
      'Murals in the Myung-Chong (Muyongchong) royal tomb depict two martial artists sparring in upright stances.',
      'Warriors studied classical literature, history, ethics, and martial combat simultaneously.',
      'Subak served as the primary physical training foundation for northern frontier defense.',
    ],
    image: 'https://images.unsplash.com/photo-1555597673-b21d5c935865?q=80&w=800&auto=format&fit=crop',
    tagColor: '#EF2F38',
  },
  {
    id: 'time-03',
    year: '57 BCE – 935 CE',
    era: 'Ancient (24th c. BC–10th c. AD)',
    epochNumber: 1,
    title: 'Silla Hwarangdo & The Sesok-Ogye Five Commandments',
    koreanTitle: '신라 화랑도(花郞徒) & 세속오계(世俗五戒)',
    keyFigures: 'Monk Won Gwang, General Kim Yu-sin, Hwarang Knights',
    summary:
      'The kingdom of Silla established the Hwarang (Flower Knights), an aristocratic youth order trained in bare-handed Subak, swordcraft, and the Sesok-Ogye ethical commandments.',
    details: [
      'Sesok-Ogye: Loyalty to country, filial obedience, trust with friends, courage in battle, restraint in killing.',
      'These five secular commandments became the direct moral foundation for the modern 5 Tenets of Taekwondo.',
      'Hwarang military discipline catalyzed the historic unification of the Three Kingdoms of Korea.',
    ],
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop',
    tagColor: '#A05B00',
  },

  // =========================================================================
  // EPOCH 2: MEDIEVAL TIMES (10th Century AD – 16th Century AD)
  // =========================================================================
  {
    id: 'time-04',
    year: '918 – 1392 CE',
    era: 'Medieval (10th–16th c.)',
    epochNumber: 2,
    title: 'Goryeo Dynasty Subakhui Military Examinations',
    koreanTitle: '고려시대 수박희(手搏戱) 무예 과거 제도',
    keyFigures: 'King Uijong, General Yi Ui-min, Military Officers',
    summary:
      'Historical chronicles of the Medieval Goryeo era specifically record the activities of Subak (Subakhee). The military formalized Subak as official testing for officer promotions.',
    details: [
      'Subak proficiency was mandatory for all royal bodyguard cadets protecting the king.',
      'King Uijong and King Myeongjong hosted national tournaments in palace courtyards.',
      'Distinguished martial artists were promoted directly to general and minister officer ranks.',
      'Widely practiced not only by palace soldiers, but also celebrated as athletic folk games among the public.',
    ],
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=800&auto=format&fit=crop',
    tagColor: '#09BB00',
  },

  // =========================================================================
  // EPOCH 3: MODERN PRE-WAR TIMES (17th Century – 1945)
  // =========================================================================
  {
    id: 'time-05',
    year: '1790 CE',
    era: 'Modern Pre-War (17th c.–1945)',
    epochNumber: 3,
    title: 'Joseon Military Kwonbeop & The Muyedobotongji',
    koreanTitle: '조선 정조대왕 & 무예도보통지(武藝圖譜通志) 권법편',
    keyFigures: 'King Chongjo, General Lee Deok-mu, Scholar Park Je-ga',
    summary:
      'Following wartime upheavals, military martial arts such as Kwonbeop (art of the fist) were compiled in the 1790 Muyedobotongji, while Taekkyeon emerged as a popular folk game.',
    details: [
      'King Chongjo commissioned the definitive four-volume illustrated military treatise documenting Korean Kwonbeop.',
      'Popular culture venerated kicking games, enabling Taekkyeon to flourish across villages.',
      'Palace royal guards in the Ue Hung Bu were tested on empty-hand striking geometry.',
    ],
    image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=800&auto=format&fit=crop',
    tagColor: '#0042EA',
  },
  {
    id: 'time-06',
    year: '1910 – 1945 CE',
    era: 'Modern Pre-War (17th c.–1945)',
    epochNumber: 3,
    title: 'Japanese Colonial Suppression & Foreign Martial Cross-Study',
    koreanTitle: '일제강점기 무예 탄압 & 해외 유학 당수·권법 수련',
    keyFigures: 'Lee Won-kuk, Hwang Kee, Ro Byung-jik, Yoon Byung-in',
    summary:
      'During the colonial occupation, indigenous martial arts were banned. Koreans learned Judo/Kendo locally, studied Manchurian Quanfa, or studied Karate (Tangsoo) in Japan—creating a crucial turning point for modern martial synthesis.',
    details: [
      'Pioneers trained in Tokyo universities under Shotokan (Gichin Funakoshi) and Shito-Ryu masters.',
      'Masters studied Chinese martial systems in Manchuria and Shanghai.',
      'Synthesized foreign linear hand basics with indigenous Korean dynamic kicking trajectories.',
    ],
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop',
    tagColor: '#A855F7',
  },

  // =========================================================================
  // EPOCH 4: EARLY MODERN TAEKWONDO (1946 – 1960)
  // =========================================================================
  {
    id: 'time-07',
    year: '1946 – 1950 CE',
    era: 'Early Kwans (1946–1960)',
    epochNumber: 4,
    title: 'Post-Liberation & Establishment of the Five Kwans',
    koreanTitle: '광복 후 기간 5대 관(五大館) 개원 & 택견 발차기 융합',
    keyFigures: '5 Kwan Founders (Chung Do Kwan, Song Moo Kwan, Moo Duk Kwan, Chang Moo Kwan, Jidokwan)',
    summary:
      'Immediately after the 1945 liberation, returning Korean masters opened the Five Kwans in Seoul. As years progressed, new techniques centered on dynamic Taekkyeon-inspired kicks established unique Korean characteristics.',
    details: [
      'Original Five Kwans: Chung Do Kwan, Song Moo Kwan, Moo Duk Kwan, Chang Moo Kwan, Jidokwan.',
      'Developed high-velocity jumping and spinning kicks distinct from rigid Japanese karate.',
      'The early movement toward forming an integrated martial association was initiated.',
    ],
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=800&auto=format&fit=crop',
    tagColor: '#EF2F38',
  },
  {
    id: 'time-08',
    year: 'April 11, 1955',
    era: 'Early Kwans (1946–1960)',
    epochNumber: 4,
    title: '1952 Presidential Demo & Formal Naming of "Taekwondo"',
    koreanTitle: '1952 이승만 대통령 시범 & 1955년 태권도(跆拳道) 명칭 제정',
    keyFigures: 'President Syngman Rhee, Gen. Choi Hong-hi, Master Nam Tae-hi',
    summary:
      'Following a 1952 military demonstration where Nam Tae-hi broke 13 roof tiles, President Syngman Rhee ordered military martial unification. On April 11, 1955, the name "Tae Kwon Do" was formally adopted.',
    details: [
      'Tae (跆): To kick, trample, or strike with the foot.',
      'Kwon (拳): To strike with the fist or hand.',
      'Do (道): The philosophical way, moral art, or discipline.',
      'Replaced "Su" (hand) with "Kwon" (fist) while preserving phonetic harmony with ancestral Taekkyeon.',
    ],
    image: 'https://images.unsplash.com/photo-1555597673-b21d5c935865?q=80&w=800&auto=format&fit=crop',
    tagColor: '#09BB00',
  },

  // =========================================================================
  // EPOCH 5: THE FRUIT OF UNITY (1961 – 1970)
  // =========================================================================
  {
    id: 'time-09',
    year: '1961 – 1963 CE',
    era: 'Fruit of Unity (1961–1970)',
    epochNumber: 5,
    title: 'KTA Foundation & 1963 National Sports Festival Sparring',
    koreanTitle: '대한태권도협회 통합 창립 & 제44회 전국체전 정식 종목 채택',
    keyFigures: 'KTA Leadership Council, National Sports Commission',
    summary:
      'The April 19 Revolution and May 16 Coup sparked broad innovation. The official association was established, unifying Dan promotion tests. In 1963, sparring was adopted as an official sport at the 44th National Sports Festival.',
    details: [
      'Accredited Dan promotion tests were unified under the authority of the national association.',
      'Independent sparring matches debuted as official medal events in the 1963 44th National Sports Festival.',
      'Standardized Poomsae forms were enacted at the association level for unified rank testing.',
    ],
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop',
    tagColor: '#0042EA',
  },
  {
    id: 'time-10',
    year: '1965 – 1970 CE',
    era: 'Fruit of Unity (1961–1970)',
    epochNumber: 5,
    title: 'Global Demonstration Tours & International Dissemination',
    koreanTitle: '국제 사범 파견 & 미주·유럽·아시아 글로벌 보급',
    keyFigures: 'Korean Master Pioneers (Jhoon Rhee, Lee Chong-woo, Nam Tae-hi, etc.)',
    summary:
      'During the 1960s, master demonstration teams traveled across Asia, Europe, and the United States, dispatching resident Korean grandmasters to open dojangs globally.',
    details: [
      'Dispatched pioneering instructors across North America, Europe, Southeast Asia, and Africa.',
      'Introduced chest protectors (Hogu) and safety equipment for fast, dynamic sparring.',
      'Solidified Taekwondo’s international reputation as the premier kicking martial art.',
    ],
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop',
    tagColor: '#A855F7',
  },

  // =========================================================================
  // EPOCH 6: A LEAP FORWARD (1971 – 1985)
  // =========================================================================
  {
    id: 'time-11',
    year: '1971 – 1972 CE',
    era: 'A Leap Forward (1971–1985)',
    epochNumber: 6,
    title: 'Presidential "Kukki Taekwondo" & Dedication of Kukkiwon',
    koreanTitle: '국기(國技) 태권도 친필 휘호 & 세계태권도본부 국기원 개원',
    keyFigures: 'President Park Chung-hee, Dr. Kim Un-yong (Kukkiwon President)',
    summary:
      'In 1971, the President wrote the iconic brush-pen calligraphy declaring "Kukki Taekwondo" (National Martial Art). On November 30, 1972, Kukkiwon opened on the hills of Gangnam, Seoul.',
    details: [
      'Solidified Taekwondo’s domestic foundation as Korea’s official national martial art.',
      'Dedicated Kukkiwon as the permanent world research, education, and supreme Dan certification dojang.',
      'Unified all 9 Kwans into Kukkiwon’s standardized Dan certification registry.',
    ],
    image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=800&auto=format&fit=crop',
    tagColor: '#EF2F38',
  },
  {
    id: 'time-12',
    year: '1973 – 1980 CE',
    era: 'A Leap Forward (1971–1985)',
    epochNumber: 6,
    title: 'World Taekwondo (WT) Founding, GAISF & Academic Majors',
    koreanTitle: '세계태권도연맹(WT) 창설, GAISF 가입 & 대학 태권도학과 개설',
    keyFigures: 'Dr. Kim Un-yong, University Academic Faculties',
    summary:
      'WT was founded in 1973, hosting the 1st World Championships and joining GAISF in 1975. Taekwondo entered public school curricula (elementary, middle, high) and universities established academic Taekwondo degree majors.',
    details: [
      'Joined GAISF in 1975, ascending to official international sport federation status in just 2 years.',
      'Government policy integrated Taekwondo into mandatory public school physical education.',
      'Universities established dedicated Taekwondo Department majors for scholarly research and elite coaching.',
      'Recognized by the International Olympic Committee (IOC) at the 83rd Session in 1980.',
    ],
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=800&auto=format&fit=crop',
    tagColor: '#A05B00',
  },

  // =========================================================================
  // EPOCH 7: ENTRY INTO THE OLYMPIC GAMES (1986 – 1999)
  // =========================================================================
  {
    id: 'time-13',
    year: '1986 – 1988 CE',
    era: 'Olympic Entry (1986–1999)',
    epochNumber: 7,
    title: '1986 Asian Games & 1988 Seoul Olympic Demonstration',
    koreanTitle: '1986 서울 아시안게임 정식 종목 & 1988 서울 올림픽 시범 종목',
    keyFigures: 'Seoul Olympic Organizing Committee, 80,000 Spectators',
    summary:
      'Taekwondo was staged as an official medal event at the 1986 Seoul Asian Games and as an electric demonstration sport at the 1988 Seoul Summer Olympics before 80,000 spectators.',
    details: [
      'Demonstrated high-altitude board breaks, synchronized forms, and full-contact Olympic sparring.',
      'Captured worldwide television audiences and catalyzed IOC medal sport discussions.',
      'Repeated as an official demonstration sport at the 1992 Barcelona Olympic Games.',
    ],
    image: 'https://images.unsplash.com/photo-1555597673-b21d5c935865?q=80&w=800&auto=format&fit=crop',
    tagColor: '#09BB00',
  },
  {
    id: 'time-14',
    year: '1992 – 1994 CE',
    era: 'Olympic Entry (1986–1999)',
    epochNumber: 7,
    title: '103rd IOC Paris Session: Official Olympic Adoption (Sept 4, 1994)',
    koreanTitle: '제103차 IOC 파리 총회: 올림픽 정식 종목 만장일치 채택 (세계태권도의 날)',
    keyFigures: 'Juan Antonio Samaranch (IOC President), IOC General Assembly',
    summary:
      'On September 4, 1994, the IOC General Assembly in Paris unanimously confirmed Taekwondo as an official medal sport for the 2000 Sydney Olympic Games. In 1992, World Taekwondo Hanmadang was launched.',
    details: [
      'September 4 is officially celebrated annually worldwide as "World Taekwondo Day".',
      'The World Taekwondo Hanmadang was created as a global festival celebrating breaking, forms, and martial spirit.',
      'Selected as one of South Korea’s Top 10 Cultural Symbols representing the nation to the world.',
    ],
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop',
    tagColor: '#0042EA',
  },

  // =========================================================================
  // EPOCH 8: WORLD-CLASS MARTIAL SPORT (2000 – PRESENT)
  // =========================================================================
  {
    id: 'time-15',
    year: 'September 2000',
    era: 'World Martial Sport (2000–Present)',
    epochNumber: 8,
    title: 'Sydney 2000 Olympic Medal Debut & Global Universality',
    koreanTitle: '2000 시드니 올림픽 정식 종목 데뷔 & 글로벌 스포츠 도약',
    keyFigures: '103 Olympians representing 51 National Olympic Committees',
    summary:
      'Taekwondo made its full competitive Olympic medal debut in Sydney. Athletes from Asia, Europe, the Americas, and Australasia won medals, proving true global universality.',
    details: [
      'Confirmed as a permanent core sport for Athens 2004, Beijing 2008, London 2012, Rio 2016, Tokyo 2020, Paris 2024, LA 2028, and Brisbane 2032.',
      'Pioneered electronic Protector and Scoring Systems (PSS) and 4-corner video review for referee transparency.',
      'Established Parataekwondo, debuting as a Paralympic medal sport at Tokyo 2020.',
    ],
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop',
    tagColor: '#A855F7',
  },
  {
    id: 'time-16',
    year: 'March 30, 2018',
    era: 'World Martial Sport (2000–Present)',
    epochNumber: 8,
    title: 'Statutory Designation as Korea\'s National Martial Art (Kukki)',
    koreanTitle: '대한민국 국회: 태권도 법정 국가 무예(國技) 공식 공포',
    keyFigures: 'National Assembly of South Korea, President of South Korea',
    summary:
      'The National Assembly of the Republic of Korea enacted a landmark statutory law formally and legally declaring Taekwondo as the sovereign National Martial Art (Kukki Taekwondo) of Korea.',
    details: [
      'Article 3-2 of the Taekwondo Promotion Act was amended to permanently codify state preservation and support.',
      'Affirmed Taekwondo as a global martial sport for self-defense, health, mental training, and lifetime success.',
      'Practiced by over 100 million people across 213 Member National Associations worldwide.',
    ],
    image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=800&auto=format&fit=crop',
    tagColor: '#EF2F38',
  },
]
