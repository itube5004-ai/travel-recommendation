const destinations = [
  // --- Part 1 ---
{\
    id: 'd1', name: '제주도 (Jeju Island)', location: 'domestic', duration: ['2-3', '4-5'], style: ['relaxation', 'nature', 'food'], bestSeasons: ['spring', 'summer', 'autumn'], image: 'https://images.unsplash.com/featured/800x600/?jeju,island', description: '에메랄드빛 바다와 아름다운 오름, 맛있는 흑돼지와 해산물이 있는 환상의 섬.',\
    quickInfo: { months: '4월~6월, 9~10월', flight: '비행기 (약 1시간)', visa: '국내 (해당없음)', voltage: '220V', temp: { spring: '15℃', summer: '26℃', autumn: '20℃', winter: '7℃' } },\
    details: {\
      spots: '성산일출봉, 우도, 애월 한담해안산책로, 사려니숲길', food: '흑돼지 구이, 고기국수, 갈치조림, 돔베고기', hotel: '그랜드 조선 제주, 파르나스 호텔, 해비치 리조트, 신라호텔',\
      weatherDesc: { spring: '유채꽃이 만발하는 따뜻하고 포근한 날씨입니다. 여행하기 가장 좋습니다.', summer: '햇살이 뜨겁고 습도가 높지만, 해수욕을 즐기기 완벽합니다.', autumn: '선선한 바람과 은빛 억새밭이 장관을 이루는 쾌적한 날씨입니다.', winter: '육지보다는 따뜻하지만 바람이 많이 불어 체감온도가 낮을 수 있습니다.' },\
      courses: { \
        '2-3': '<br>1DAY: 애월 한담해안산책로 -> 협재 해수욕장 -> 금오름 일몰<br>2DAY: 서귀포 중문관광단지 -> 천제연 폭포 -> 서귀포 올레시장<br>3DAY: 성산일출봉 일출 -> 우도 한바퀴 투어 -> 공항', \
        '4-5': '<br>1DAY: 제주 서부(애월, 협재) 바다 만끽<br>2DAY: 오설록 티 뮤지엄 -> 산방산 및 용머리해안<br>3DAY: 한라산 영실코스 가벼운 등반 또는 사려니숲길 산책<br>4DAY: 우도 종일 투어 및 성산일출봉<br>5DAY: 함덕 해수욕장 휴식 -> 제주 동문시장 기념품 쇼핑 -> 공항' \
      }\
    }\
  },
  // --- Part 2 ---
{\
    id: 'd21', name: '문경 (Mungyeong)', location: 'domestic', duration: ['day', '2-3'], style: ['nature', 'history', 'family'], bestSeasons: ['spring', 'autumn'], image: 'https://images.unsplash.com/featured/800x600/?mungyeong,forest', description: '과거 시험을 보러 가던 문경새재 황톳길과 시원한 야외 철로 자전거.',\
    quickInfo: { months: '4월~6월, 9~11월', flight: '자가용 (약 1시간 15분)', visa: '국내 (해당없음)', voltage: '220V', temp: { spring: '12℃', summer: '24℃', autumn: '16℃', winter: '0℃' } },\
    details: {\
      spots: '문경새재 도립공원, 에코월드(가족테마), 오미자테마터널, 문경 레일바이크', food: '문경 약돌돼지 삼겹살, 약돌한우 구이, 산채비빔밥, 오미자 막걸리', hotel: '문경관광호텔, 라마다 문경새재 호텔, 문경 펜션 단지',\
      weatherDesc: { spring: '문경새재 조령관문까지 완만한 황톳길을 맨발로 걷기 가장 포근한 시기입니다.', summer: '울창한 숲 터널 아래 흐르는 차가운 계곡물에 발을 담그고 더위를 식힙니다.', autumn: '문경 사과 축제가 열려 상큼한 사과 향이 가득하며, 단풍이 문경새재를 수놓습니다.', winter: '조용하고 한적한 조령 제1관문 성벽 위에 눈이 쌓여 고결한 장관을 선보입니다.' },\
      courses: { \
        'day': '<br>1DAY: 문경새재 황톳길 맨발 걷기 -> 약돌돼지 삼겹살 석쇠구이 -> 문경 철로자전거 탑승', \
        '2-3': '<br>1DAY: 문경새재 1관문 및 사극 오픈세트장 -> 약돌돼지 한 상 정식 -> 오미자 테마터널 야경<br>2DAY: 문경새재 단산 모노레일 타고 백두대간 감상 -> 에코월드 석탄박물관 -> 오미자 족욕 체험<br>3DAY: 진남교반 아름다운 절벽 풍경 구경 후 석갈비 먹고 천안 복귀' \
      }\
    }\
  },
  // --- Part 3 ---
{\
    id: 'd41', name: '춘천시 (Chuncheon)', location: 'domestic', duration: ['day', '2-3'], style: ['nature', 'food', 'relaxation'], bestSeasons: ['spring', 'autumn'], image: 'https://images.unsplash.com/featured/800x600/?chuncheon,lake', description: '의암호 스카이워크의 푸른 호수 물결과 철판에 볶아 먹는 원조 춘천 닭갈비의 향기.',\
    quickInfo: { months: '4월~6월, 9~10월', flight: '자가용 (약 2시간)', visa: '국내 (해당없음)', voltage: '220V', temp: { spring: '11℃', summer: '24℃', autumn: '15℃', winter: '-3℃' } },\
    details: {\
      spots: '의암호 물레길 카누, 남이섬 메타세쿼이아, 강촌 레일파크, 소양강 스카이워크', food: '춘천 닭갈비, 춘천 막국수, 감자빵, 시골 쌈밥', hotel: '더 잭슨나인스 호텔, 강촌 엘리시안 리조트, 춘천 오션뷰 글램핑',\
      weatherDesc: { spring: '소양강 호수 안개와 연둣빛 버드나무 숲길을 카누를 타며 조용히 감상하기 최고입니다.', summer: '의암호 스카이워크 유리바닥 아래로 넘실대는 강물과 시원한 닭갈비/맥주 야외 파티.', autumn: '소양강 댐 주변 벚나무 터널에 단풍이 들고, 맑고 청명한 가을바람과 함께 호수 드라이브하기 좋습니다.', winter: '하얗게 눈 덮인 남이섬 메타길을 자전거를 타며 도보 데이트 후 철판 닭갈비의 아늑한 온기.' },\
      courses: { \
        'day': '<br>1DAY: 소양강 스카이워크 -> 의암호 물레길 수중 카누 -> 춘천 명동 닭갈비 점심 -> 감자밭 빵 쇼핑 -> 천안 복귀', \
        '2-3': '<br>1DAY: 남이섬 배 타고 입성 -> 메타세쿼이아 숲길 산책 -> 강촌 레일바이크 질주 -> 철판 닭갈비 만찬<br>2DAY: 소양강 스카이워크 -> 의암호 카누 물레길 체험 -> 소양강댐 청평사 고즈넉한 사찰 산책 -> 선셋 호수 카페<br>3DAY: 시원한 동치미 춘천 막국수로 마무리 식사 후 귀가' \
      }\
    }\
  },
  // --- Part 4 ---
{\
    id: 'i1', name: '오사카, 일본 (Osaka)', location: 'international', flight: 'short', duration: ['2-3', '4-6', '7-14'], style: ['food', 'city', 'shopping'], bestSeasons: ['spring', 'autumn', 'winter'], image: 'https://images.unsplash.com/featured/800x600/?osaka,dotonbori', description: '먹다가 망한다는 미식의 도시. 화려한 도톤보리와 유니버셜 스튜디오.',\
    quickInfo: { months: '3월~5월, 9~11월', flight: '1시간 40분 직항', visa: '무비자 90일', voltage: '110V', temp: { spring: '15℃', summer: '28℃', autumn: '19℃', winter: '6℃' } },\
    details: {\
      spots: '도톤보리, 유니버설 스튜디오 재팬, 오사카 성, 우메다 공중정원', food: '오코노미야키, 타코야키, 구시카츠, 라멘', hotel: '스위소텔 난카이 오사카, 칸데오 호텔 오사카 난바, 힐튼 오사카', shopping: '돈키호테(동전파스, 곤약젤리, 퍼펙트휩), 꼼데가르송, 한큐 백화점 손수건',\
      weatherDesc: { spring: '벚꽃이 피어 아름답고 활동하기 쾌적한 날씨입니다.', summer: '매우 덥고 습하여 땀이 많이 납니다. 실내 쇼핑 위주 일정을 추천합니다.', autumn: '단풍이 물들고 날씨가 선선해져 도보 여행하기 가장 좋습니다.', winter: '비교적 온화하며 화려한 일루미네이션과 따뜻한 국물 요리를 즐기기 좋습니다.' },
  // --- Part 5 ---
{\
    id: 'i7', name: '파리, 프랑스 (Paris)', location: 'international', flight: 'long', duration: ['2-3', '4-6', '7-14'], style: ['culture', 'history', 'shopping', 'romantic'], bestSeasons: ['spring', 'summer', 'autumn'], image: 'https://images.unsplash.com/featured/800x600/?paris,eiffel', description: '에펠탑과 루브르 박물관, 낭만적인 센 강변을 거니는 유럽 여행의 로망.',\
    quickInfo: { months: '5월~9월', flight: '14시간 직항', visa: '무비자 90일', voltage: '230V', temp: { spring: '12℃', summer: '20℃', autumn: '13℃', winter: '5℃' } },\
    details: {\
      spots: '에펠탑, 루브르 박물관, 몽마르트르 언덕, 베르사유 궁전', food: '크루아상, 마카롱, 에스카르고, 스테이크, 와인', hotel: '포시즌스 조르주 생크, 플라자 아테네, 리츠 파리, 풀만 파리 에펠', shopping: '메르시(Merci) 팔찌, 몽쥬약국 화장품(눅스 오일, 꼬달리), 마리아쥬 프레르 홍차, 마카롱(피에르 에르메)',\
      weatherDesc: { spring: '꽃이 피며 낭만적인 분위기가 절정입니다. 아침저녁엔 쌀쌀합니다.', summer: '해가 밤 10시까지 떠있어 관광하기 좋으나 폭염 주의.', autumn: '선선한 가을로 샹젤리제 거리를 걷기 좋습니다.', winter: '비가 자주 오고 우중충하지만 로맨틱한 연말 분위기를 즐길 수 있습니다.' },
  // --- Part 6 ---
{\
  window.destinations = destinations;\
} else if (typeof module !== 'undefined') {\
  module.exports = destinations;\
},
];
