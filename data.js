const destinations = [
  // Domestic (Korea)
  {
    id: 'd1',
    name: '제주도 (Jeju Island)',
    location: 'domestic',
    duration: ['1-3', '4-7'],
    style: ['relaxation', 'nature', 'food'],
    bestSeasons: ['spring', 'summer', 'autumn'],
    image: 'https://loremflickr.com/800/600/jeju,nature/all',
    description: '에메랄드빛 바다와 아름다운 오름, 맛있는 흑돼지와 해산물이 있는 환상의 섬.',
    details: {
      currency: '원화 (KRW)',
      food: '흑돼지 구이, 고기국수, 갈치조림, 싱싱한 해산물',
      spots: '성산일출봉, 우도, 애월 한담해안산책로, 사려니숲길',
      course: '1일차: 애월 해안도로 및 카페 투어 -> 2일차: 우도 방문 및 성산일출봉 -> 3일차: 사려니숲길 힐링 및 동문시장',
      weather: {
        spring: '유채꽃이 만발하는 따뜻하고 포근한 날씨입니다. 여행하기 가장 좋습니다.',
        summer: '햇살이 뜨겁고 습도가 높지만, 에메랄드빛 바다에서 해수욕을 즐기기 완벽합니다.',
        autumn: '선선한 바람과 은빛 억새밭이 장관을 이루는 쾌적한 날씨입니다.',
        winter: '육지보다는 따뜻하지만 바람이 많이 불어 체감온도가 낮을 수 있습니다. 동백꽃을 볼 수 있습니다.'
      },
      reason: '사계절 내내 각기 다른 아름다움을 뽐내는 대한민국의 대표 휴양지이기 때문입니다.'
    }
  },
  {
    id: 'd2',
    name: '부산 (Busan)',
    location: 'domestic',
    duration: ['1-3'],
    style: ['city', 'food', 'nightlife'],
    bestSeasons: ['summer', 'autumn'],
    image: 'https://loremflickr.com/800/600/busan,city/all',
    description: '해운대의 화려한 야경과 맛있는 밀면, 돼지국밥! 활기찬 해양 도시.',
    details: {
      currency: '원화 (KRW)',
      food: '돼지국밥, 밀면, 씨앗호떡, 싱싱한 회와 조개구이',
      spots: '해운대 해수욕장, 광안대교 야경, 흰여울문화마을, 해동용궁사',
      course: '1일차: 광안리 해변 산책 및 야경 감상 -> 2일차: 해운대 해변열차 탑승 및 청사포 -> 3일차: 영도 흰여울문화마을 및 남포동 먹자골목',
      weather: {
        spring: '포근한 바닷바람을 맞으며 산책하기 좋은 날씨입니다.',
        summer: '해수욕을 즐기는 인파로 활기가 넘치며, 밤에는 시원한 바닷바람이 붑니다.',
        autumn: '부산국제영화제와 불꽃축제가 열리는 선선하고 맑은 날씨로 여행의 최적기입니다.',
        winter: '서울보다 따뜻하여 겨울 바다의 낭만을 즐기기에 훌륭합니다.'
      },
      reason: '도시의 화려함과 바다의 낭만, 그리고 탁월한 미식 경험을 동시에 할 수 있기 때문입니다.'
    }
  },
  {
    id: 'd3',
    name: '강릉/속초 (Gangneung/Sokcho)',
    location: 'domestic',
    duration: ['1-3'],
    style: ['relaxation', 'food', 'nature'],
    bestSeasons: ['summer', 'winter'],
    image: 'https://loremflickr.com/800/600/sokcho,beach/all',
    description: '시원한 동해 바다와 설악산, 그리고 신선한 회와 닭강정.',
    details: {
      currency: '원화 (KRW)',
      food: '만석닭강정, 초당순두부, 오징어순대, 물회',
      spots: '설악산 케이블카, 안목해변 커피거리, 속초 중앙시장, 낙산사',
      course: '1일차: 속초 중앙시장 투어 및 아바이마을 -> 2일차: 설악산 등반 또는 케이블카 -> 3일차: 강릉 안목해변 카페거리에서 휴식',
      weather: {
        spring: '맑은 동해 바다를 보며 드라이브하기 좋은 화창한 날씨입니다.',
        summer: '시원한 바다에 뛰어들기 가장 좋은 무더운 여름입니다.',
        autumn: '설악산의 오색 단풍을 구경하기 완벽한 선선하고 맑은 날씨입니다.',
        winter: '눈 덮인 설악산과 차갑고 투명한 겨울 바다의 감성을 느낄 수 있습니다.'
      },
      reason: '웅장한 산과 탁 트인 바다를 한 번에 즐길 수 있는 최고의 힐링 여행지이기 때문입니다.'
    }
  },
  {
    id: 'd4',
    name: '경주 (Gyeongju)',
    location: 'domestic',
    duration: ['1-3', '4-7'],
    style: ['history', 'culture', 'relaxation'],
    bestSeasons: ['spring', 'autumn'],
    image: 'https://loremflickr.com/800/600/gyeongju,temple/all',
    description: '천년의 역사가 숨 쉬는 곳. 황리단길의 트렌디함과 고즈넉한 한옥의 조화.',
    details: {
      currency: '원화 (KRW)',
      food: '황남빵, 교리김밥, 떡갈비 정식, 황리단길 길거리 음식',
      spots: '불국사, 동궁과 월지(안압지), 대릉원, 황리단길',
      course: '1일차: 황리단길 골목 투어 및 대릉원 사진 촬영 -> 2일차: 불국사 및 석굴암 역사 탐방 -> 3일차: 동궁과 월지 야경 감상 및 첨성대',
      weather: {
        spring: '벚꽃이 만개하여 핑크빛으로 물든 낭만적인 풍경을 자랑합니다.',
        summer: '햇볕이 뜨거워 낮 시간 야외 활동이 다소 힘들 수 있지만, 푸른 녹음이 아름답습니다.',
        autumn: '첨성대 주변의 핑크뮬리와 단풍이 절정을 이루는 여행의 최적기입니다.',
        winter: '조용하고 고즈넉한 겨울 한옥의 정취를 느낄 수 있으나 춥습니다.'
      },
      reason: '찬란한 신라의 역사와 현대적인 트렌드가 가장 완벽하게 조화된 곳이기 때문입니다.'
    }
  },

  // International - Short Flight (< 3 hours)
  {
    id: 'i1',
    name: '오사카, 일본 (Osaka, Japan)',
    location: 'international',
    flight: 'short',
    duration: ['1-3', '4-7'],
    style: ['food', 'city', 'shopping'],
    bestSeasons: ['spring', 'autumn', 'winter'],
    image: 'https://loremflickr.com/800/600/osaka,street/all',
    description: '먹다가 망한다는 미식의 도시. 화려한 도톤보리와 유니버셜 스튜디오.',
    details: {
      currency: '일본 엔 (JPY)',
      food: '오코노미야키, 타코야키, 구시카츠, 라멘',
      spots: '도톤보리, 유니버설 스튜디오 재팬, 오사카 성, 우메다 스카이 빌딩',
      course: '1일차: 간사이 공항 도착 후 도톤보리 미식 투어 -> 2일차: 유니버설 스튜디오 재팬에서 하루 종일 놀기 -> 3일차: 오사카 성 관광 및 우메다 쇼핑',
      weather: {
        spring: '오사카 성 주변으로 벚꽃이 피어 아름답고 쾌적한 날씨입니다.',
        summer: '매우 덥고 습하여 체력 소모가 큽니다. 시원한 실내 일정을 추천합니다.',
        autumn: '단풍이 물들고 날씨가 선선해져 도보 여행하기 가장 좋습니다.',
        winter: '비교적 온화하며 화려한 일루미네이션과 따뜻한 라멘을 즐기기 좋습니다.'
      },
      reason: '짧은 비행 시간으로 최고의 미식과 테마파크를 동시에 즐길 수 있기 때문입니다.'
    }
  },
  {
    id: 'i2',
    name: '후쿠오카, 일본 (Fukuoka, Japan)',
    location: 'international',
    flight: 'short',
    duration: ['1-3'],
    style: ['food', 'relaxation', 'shopping'],
    bestSeasons: ['spring', 'autumn', 'winter'],
    image: 'https://loremflickr.com/800/600/fukuoka,food/all',
    description: '가깝고 맛있는 도시. 돈코츠 라멘의 본고장과 따뜻한 온천 여행.',
    details: {
      currency: '일본 엔 (JPY)',
      food: '돈코츠 라멘, 모츠나베(곱창전골), 명란젓, 나카스 포장마차 거리 음식',
      spots: '다자이후 텐만구, 캐널시티 하카타, 오호리 공원, 근교 유후인 온천',
      course: '1일차: 캐널시티 쇼핑 및 나카스 포장마차 체험 -> 2일차: 다자이후 텐만구 관광 후 유후인으로 이동하여 온천욕 -> 3일차: 하카타역 인근 맛집 투어',
      weather: {
        spring: '포근하고 화창하여 근교로 온천 및 벚꽃 여행을 떠나기 좋습니다.',
        summer: '덥고 습도가 높아 땀이 많이 납니다. 시원한 실내 쇼핑 위주의 일정을 추천합니다.',
        autumn: '선선한 바람이 불어 야외 활동과 따뜻한 국물 요리를 즐기기 시작하기 좋습니다.',
        winter: '한국보다 따뜻하며 노천탕에서 힐링하기 가장 완벽한 계절입니다.'
      },
      reason: '우리나라에서 가장 가깝게 다녀올 수 있는 미식과 온천의 천국이기 때문입니다.'
    }
  },
  {
    id: 'i3',
    name: '타이베이, 대만 (Taipei, Taiwan)',
    location: 'international',
    flight: 'short',
    duration: ['1-3', '4-7'],
    style: ['food', 'culture', 'nightlife'],
    bestSeasons: ['spring', 'autumn', 'winter'],
    image: 'https://loremflickr.com/800/600/taipei,night/all',
    description: '다채로운 길거리 음식과 지우펀의 야경, 친절한 사람들이 있는 곳.',
    details: {
      currency: '대만 달러 (TWD)',
      food: '우육면, 딤섬, 버블티, 망고 빙수, 야시장 길거리 음식',
      spots: '타이베이 101, 스라린 야시장, 지우펀, 단수이, 예류 지질 공원',
      course: '1일차: 타이베이 시내 구경 및 스라린 야시장 -> 2일차: 예스진지(예류, 스펀, 진과스, 지우펀) 버스 투어 -> 3일차: 단수이 일몰 감상 및 온천',
      weather: {
        spring: '비가 자주 내리지만 많이 덥지 않아 여행하기 적당합니다.',
        summer: '매우 덥고 습하며 태풍의 영향을 받을 수 있어 주의가 필요합니다.',
        autumn: '비가 적고 선선해져 쾌적하게 여행할 수 있는 최고의 계절입니다.',
        winter: '초가을 날씨처럼 선선하여 도보 여행과 따뜻한 우육면을 즐기기 완벽합니다.'
      },
      reason: '안전한 치안과 저렴한 물가, 화려한 야시장의 매력을 만끽할 수 있기 때문입니다.'
    }
  },
  {
    id: 'i10',
    name: '오키나와, 일본 (Okinawa, Japan)',
    location: 'international',
    flight: 'short',
    duration: ['1-3', '4-7'],
    style: ['relaxation', 'nature', 'family'],
    bestSeasons: ['spring', 'summer', 'winter'],
    image: 'https://loremflickr.com/800/600/okinawa,beach/all',
    description: '가깝게 만나는 에메랄드빛 바다. 여름 휴양으로 최고지만 9~10월 태풍은 조심하세요!',
    details: {
      currency: '일본 엔 (JPY)',
      food: '오키나와 소바, 타코라이스, 오리온 맥주, 우미부도(바다포도)',
      spots: '츄라우미 수족관, 아메리칸 빌리지, 만자모, 푸른 동굴 스노클링',
      course: '1일차: 나하 시내 국제거리 구경 -> 2일차: 북부로 이동하여 츄라우미 수족관 및 해변 휴양 -> 3일차: 중부 아메리칸 빌리지 및 만자모 일몰',
      weather: {
        spring: '따뜻하여 해양 스포츠를 시작하기 좋은 쾌적한 날씨입니다.',
        summer: '햇볕이 강렬하지만 완벽한 휴양지 날씨입니다. (단, 8~9월은 태풍 주의)',
        autumn: '9~10월은 태풍의 영향을 많이 받을 수 있어 여행 시 각별한 주의가 필요합니다.',
        winter: '한국의 늦가을 날씨로 수영은 어렵지만, 한적하게 렌터카 드라이브를 즐기기 좋습니다.'
      },
      reason: '가까운 거리에서 동남아 못지않은 완벽한 해양 휴양을 즐길 수 있기 때문입니다.'
    }
  },

  // International - Medium Flight (3-6 hours)
  {
    id: 'i4',
    name: '다낭, 베트남 (Da Nang, Vietnam)',
    location: 'international',
    flight: 'medium',
    duration: ['4-7'],
    style: ['relaxation', 'food', 'family'],
    bestSeasons: ['spring', 'summer'],
    image: 'https://loremflickr.com/800/600/danang,beach/all',
    description: '가성비 최고의 휴양지. 아름다운 해변과 저렴하고 맛있는 로컬 푸드.',
    details: {
      currency: '베트남 동 (VND)',
      food: '쌀국수, 반미, 분짜, 반세오, 신선한 해산물',
      spots: '미케 해변, 바나힐 테마파크, 호이안 올드타운, 핑크 성당',
      course: '1일차: 미케 해변 휴양 및 시내 관광 -> 2일차: 바나힐 골든브릿지 관광 -> 3일차: 호이안으로 이동하여 올드타운의 야경과 소원배 체험',
      weather: {
        spring: '건기가 시작되어 비가 적고 습도가 낮아 쾌적한 여행의 최적기입니다.',
        summer: '햇볕이 매우 뜨거운 건기입니다. 리조트 수영과 해변 휴양에 완벽합니다.',
        autumn: '9월부터 우기가 시작되어 비가 자주 내리므로 우산과 우비를 챙겨야 합니다.',
        winter: '우기이며 꽤 쌀쌀해져 수영을 즐기기에는 물이 찰 수 있습니다.'
      },
      reason: '저렴한 물가로 호캉스, 미식, 관광(호이안)을 모두 완벽하게 만족시켜주기 때문입니다.'
    }
  },
  {
    id: 'i5',
    name: '방콕, 태국 (Bangkok, Thailand)',
    location: 'international',
    flight: 'medium',
    duration: ['4-7'],
    style: ['food', 'nightlife', 'shopping', 'culture'],
    bestSeasons: ['winter', 'spring'],
    image: 'https://loremflickr.com/800/600/bangkok,temple/all',
    description: '화려한 사원과 끝없는 길거리 음식, 저렴한 마사지와 생동감 넘치는 도시.',
    details: {
      currency: '태국 바트 (THB)',
      food: '팟타이, 똠얌꿍, 푸팟퐁커리, 망고 스티키 라이스',
      spots: '왕궁 및 왓 아룬 사원, 카오산 로드, 아이콘시암, 짜뚜짝 주말 시장',
      course: '1일차: 왕궁 및 왓 아룬 관람 후 카오산 로드에서 밤문화 즐기기 -> 2일차: 시내 대형 쇼핑몰(아이콘시암 등) 투어 및 마사지 -> 3일차: 루프탑 바에서 방콕 야경 감상',
      weather: {
        spring: '4~5월은 가장 더운 계절입니다. 4월 중순에는 물 축제인 송끄란이 열립니다.',
        summer: '우기가 시작되어 스콜성 소나기가 자주 내립니다. 우산이 필수입니다.',
        autumn: '여전히 우기지만 11월부터는 비가 점차 줄어들며 건기로 접어듭니다.',
        winter: '습도와 온도가 가장 낮아 방콕을 여행하기 가장 쾌적한 건기(최성수기)입니다.'
      },
      reason: '전 세계 배낭여행객이 모이는 활기찬 에너지와 가성비 넘치는 인프라 때문입니다.'
    }
  },
  {
    id: 'i6',
    name: '괌 (Guam, USA)',
    location: 'international',
    flight: 'medium',
    duration: ['4-7'],
    style: ['relaxation', 'shopping', 'family', 'nature'],
    bestSeasons: ['winter', 'spring'],
    image: 'https://loremflickr.com/800/600/guam,ocean/all',
    description: '태평양의 에메랄드빛 바다. 쇼핑과 해양 스포츠를 동시에 즐길 수 있는 휴양지.',
    details: {
      currency: '미국 달러 (USD)',
      food: '바베큐 립, 차모로 로컬 음식, 스테이크, 코코넛 크랩',
      spots: '투몬 비치, 사랑의 절벽, 돌핀 크루즈, T 갤러리아 면세점',
      course: '1일차: 투몬 비치 휴양 및 시내 면세점 쇼핑 -> 2일차: 야생 돌고래를 보는 돌핀 크루즈 탑승 -> 3일차: 렌터카로 남부 해안 드라이브 및 사랑의 절벽 방문',
      weather: {
        spring: '건기로 맑고 청명한 하늘과 에메랄드빛 바다를 즐기기 가장 좋은 계절입니다.',
        summer: '우기가 시작되어 스콜성 비가 자주 내리지만, 금방 맑아져 물놀이엔 무리가 없습니다.',
        autumn: '우기로 태풍이 발생할 확률이 있으므로 일기예보를 잘 확인해야 합니다.',
        winter: '습도가 낮아지고 선선한 무역풍이 불어오는 건기로, 최고의 여행 시즌입니다.'
      },
      reason: '가족 단위 여행객이나 연인 모두 만족할 수 있는 아름다운 자연과 편리한 인프라가 갖춰져 있기 때문입니다.'
    }
  },

  // International - Long Flight (> 6 hours)
  {
    id: 'i7',
    name: '파리, 프랑스 (Paris, France)',
    location: 'international',
    flight: 'long',
    duration: ['8+'],
    style: ['culture', 'history', 'shopping', 'romantic'],
    bestSeasons: ['spring', 'summer', 'autumn'],
    image: 'https://loremflickr.com/800/600/paris,eiffel/all',
    description: '에펠탑과 루브르 박물관, 낭만적인 센 강변을 거니는 유럽 여행의 로망.',
    details: {
      currency: '유로 (EUR)',
      food: '크루아상, 마카롱, 에스카르고, 바게트 샌드위치, 와인',
      spots: '에펠탑, 루브르 박물관, 몽마르트르 언덕, 베르사유 궁전, 센 강',
      course: '1일차: 에펠탑 앞 피크닉 및 센 강 바토무슈 탑승 -> 2일차: 루브르 박물관 관람 및 샹젤리제 거리 쇼핑 -> 3일차: 몽마르트르 언덕 산책 및 카페 투어',
      weather: {
        spring: '꽃이 피기 시작하며 낭만적인 파리의 분위기가 절정에 달합니다. 아침저녁으론 쌀쌀합니다.',
        summer: '해가 늦게 져서 관광하기 좋지만, 최근 폭염이 잦아 매우 더울 수 있습니다.',
        autumn: '트렌치코트가 잘 어울리는 선선한 가을 날씨로, 단풍 든 공원을 걷기 좋습니다.',
        winter: '비가 자주 오고 우중충하며 춥지만, 아름다운 크리스마스 마켓을 즐길 수 있습니다.'
      },
      reason: '예술과 낭만이 살아 숨 쉬는 거리 그 자체가 하나의 거대한 박물관이기 때문입니다.'
    }
  },
  {
    id: 'i8',
    name: '하와이, 미국 (Hawaii, USA)',
    location: 'international',
    flight: 'long',
    duration: ['8+', '4-7'],
    style: ['relaxation', 'nature', 'adventure', 'romantic'],
    bestSeasons: ['spring', 'summer', 'autumn', 'winter'],
    image: 'https://loremflickr.com/800/600/hawaii,resort/all',
    description: '지상 낙원. 완벽한 날씨, 아름다운 해변, 그리고 알로하 스피릿.',
    details: {
      currency: '미국 달러 (USD)',
      food: '포케, 로코모코, 말라사다 도넛, 코나 커피, 셰이브 아이스',
      spots: '와이키키 해변, 다이아몬드 헤드, 하나우마 베이, 쿠알로아 랜치',
      course: '1일차: 와이키키 해변 서핑 및 시내 쇼핑 -> 2일차: 하나우마 베이 스노클링 후 다이아몬드 헤드 등반 -> 3일차: 렌터카로 노스쇼어 일주 및 새우 트럭 방문',
      weather: {
        spring: '일년 내내 온화한 하와이 중에서도 덥지도 춥지도 않은 가장 완벽한 날씨입니다.',
        summer: '비가 거의 오지 않는 건기로 화창합니다. 자외선이 매우 강하니 선크림이 필수입니다.',
        autumn: '여름처럼 따뜻하고 쾌적하여 허니문과 가족 여행으로 인기가 높습니다.',
        winter: '우기에 속해 소나기가 종종 내리지만, 알로하 셔츠를 입고 다닐 만큼 따뜻합니다.'
      },
      reason: '사계절 내내 완벽한 날씨와 거대한 대자연, 럭셔리한 휴양 인프라를 모두 갖춘 지상 낙원이기 때문입니다.'
    }
  },
  {
    id: 'i9',
    name: '시드니, 호주 (Sydney, Australia)',
    location: 'international',
    flight: 'long',
    duration: ['8+'],
    style: ['city', 'nature', 'relaxation'],
    bestSeasons: ['winter'], // Our winter is their summer, usually best to escape cold
    image: 'https://loremflickr.com/800/600/sydney,opera/all',
    description: '오페라 하우스와 하버 브리지, 푸른 바다가 어우러진 남반구의 매력적인 도시.',
    details: {
      currency: '호주 달러 (AUD)',
      food: '미트 파이, 피시 앤 칩스, 플랫 화이트 커피, 캥거루 고기 스테이크',
      spots: '시드니 오페라 하우스, 하버 브리지, 본다이 비치, 블루마운틴',
      course: '1일차: 서큘러 키(오페라 하우스/하버브리지) 및 록스 마켓 투어 -> 2일차: 본다이 비치 해안 산책로 걷기 및 수영 -> 3일차: 근교 블루마운틴 대자연 투어',
      weather: {
        spring: '한국의 가을 날씨로 선선합니다. 밤낮 일교차가 크므로 겉옷이 필요합니다.',
        summer: '한국의 겨울 날씨로 다소 쌀쌀합니다. 두꺼운 옷을 준비해야 합니다.',
        autumn: '한국의 봄 날씨로 꽃이 피기 시작하며 따뜻해집니다.',
        winter: '한국이 한겨울일 때 시드니는 한여름입니다! 맑고 뜨거운 햇살 아래 해변을 즐기기 완벽합니다.'
      },
      reason: '세계 3대 미항의 눈부신 아름다움과 대자연, 세련된 도시 문화를 한 번에 경험할 수 있기 때문입니다.'
    }
  },
  {
    id: 'i11',
    name: '스위스 (Switzerland)',
    location: 'international',
    flight: 'long',
    duration: ['8+'],
    style: ['nature', 'relaxation', 'adventure'],
    bestSeasons: ['summer'], // Recommended for summer
    image: 'https://loremflickr.com/800/600/switzerland,alps/all',
    description: '무더운 여름 유럽에서 시원하게 알프스 대자연을 즐길 수 있는 최고의 선택지.',
    details: {
      currency: '스위스 프랑 (CHF)',
      food: '치즈 폰듀, 뢰스티, 라클렛, 스위스 초콜릿',
      spots: '인터라켄(융프라우), 체르마트(마테호른), 루체른, 그린델발트',
      course: '1일차: 루체른 호수 유람선 및 카펠교 산책 -> 2일차: 인터라켄으로 이동 후 산악열차 탑승하여 융프라우요흐 등반 -> 3일차: 그린델발트 하이킹 및 피르스트 액티비티',
      weather: {
        spring: '아직 산에는 눈이 녹지 않아 하이킹 루트가 제한적일 수 있지만 조용합니다.',
        summer: '하이킹하기 가장 좋은 최적기입니다! 높은 고도 덕분에 유럽의 폭염 속에서도 시원하고 쾌적합니다.',
        autumn: '단풍이 물든 아름다운 풍경을 볼 수 있지만 점차 날씨가 쌀쌀해집니다.',
        winter: '알프스의 거대한 설산으로 변모하여 전 세계 스키어들이 몰려드는 겨울 왕국입니다.'
      },
      reason: '무더위를 피해 웅장한 알프스의 만년설과 푸른 초원을 보며 완벽한 안식을 얻을 수 있기 때문입니다.'
    }
  },
  {
    id: 'i12',
    name: '우유니 사막, 볼리비아 (Uyuni, Bolivia)',
    location: 'international',
    flight: 'long',
    duration: ['8+'],
    style: ['nature', 'adventure'],
    bestSeasons: ['winter'], // Recommended for winter (rainy season for reflections)
    image: 'https://loremflickr.com/800/600/uyuni,salt/all',
    description: '직장인의 긴 연차를 100% 활용할 수 있는 지구 반대편의 초현실적인 소금 사막.',
    details: {
      currency: '볼리비아노 (BOB)',
      food: '살테냐(볼리비아식 만두), 야마(Llama) 고기, 퀴노아 수프',
      spots: '우유니 소금 사막, 잉카와시 섬, 소금 호텔, 콜차니 마을',
      course: '1일차: 우유니 마을 도착 및 고산지대 적응 -> 2일차: 소금 사막 데이&선셋 투어 및 원근법 사진 촬영 -> 3일차: 별빛이 쏟아지는 스타라이트 선라이즈 투어',
      weather: {
        spring: '건기에 접어들어 바닥이 갈라진 하얀 소금 사막을 볼 수 있습니다. 일교차가 매우 큽니다.',
        summer: '완전한 건기로 물에 반사되는 우유니를 보기는 어렵지만 탁 트인 시야를 자랑합니다.',
        autumn: '건기에서 우기로 넘어가는 시기입니다.',
        winter: '한국의 한겨울이 우유니의 우기입니다. 빗물이 고여 하늘이 반사되는 세계 최대의 거울을 볼 수 있는 유일한 시즌입니다!'
      },
      reason: '죽기 전에 꼭 가봐야 할 세계 3대 비경 중 하나로, 하늘과 땅의 경계가 사라지는 기적 같은 풍경을 볼 수 있기 때문입니다.'
    }
  }
];
