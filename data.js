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
    quickInfo: {
      months: '4월~6월, 9~10월',
      flight: '항공 1시간',
      visa: '국내 (해당없음)',
      voltage: '220V',
      temp: { spring: '15℃', summer: '26℃', autumn: '20℃', winter: '7℃' }
    },
    domesticDetails: {
      spots: '성산일출봉, 우도, 애월 한담해안산책로, 사려니숲길',
      food: '흑돼지 구이, 고기국수, 갈치조림, 돔베고기',
      weatherDesc: {
        spring: '유채꽃이 만발하는 따뜻하고 포근한 날씨입니다. 여행하기 가장 좋습니다.',
        summer: '햇살이 뜨겁고 습도가 높지만, 에메랄드빛 바다에서 해수욕을 즐기기 완벽합니다.',
        autumn: '선선한 바람과 은빛 억새밭이 장관을 이루는 쾌적한 날씨입니다.',
        winter: '육지보다는 따뜻하지만 바람이 많이 불어 체감온도가 낮을 수 있습니다.'
      },
      courses: {
        '1-3': '1일차: 애월 해안도로 카페 투어 -> 2일차: 우도 방문 및 성산일출봉 -> 3일차: 사려니숲길 및 동문시장',
        '4-7': '1일차: 서귀포 중문관광단지 -> 2일차: 한라산 영실코스 등반 -> 3일차: 산방산 및 송악산 -> 4일차: 애월 및 협재 해수욕장 -> 5일차: 우도 종일 투어',
        '8+': '제주도 한 바퀴 일주 코스! 동쪽부터 서쪽까지 여유롭게 해안도로를 따라 오름과 숲길을 모두 체험해 보세요.'
      }
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
    quickInfo: {
      months: '5월~6월, 9~11월',
      flight: 'KTX 2.5시간',
      visa: '국내 (해당없음)',
      voltage: '220V',
      temp: { spring: '14℃', summer: '25℃', autumn: '19℃', winter: '6℃' }
    },
    domesticDetails: {
      spots: '해운대 해수욕장, 광안대교 야경, 흰여울문화마을, 해동용궁사',
      food: '돼지국밥, 밀면, 씨앗호떡, 싱싱한 회와 조개구이',
      weatherDesc: {
        spring: '포근한 바닷바람을 맞으며 산책하기 좋은 날씨입니다.',
        summer: '해수욕을 즐기는 인파로 활기가 넘치며, 밤에는 시원한 바닷바람이 붑니다.',
        autumn: '부산국제영화제와 불꽃축제가 열리는 선선하고 맑은 날씨로 여행의 최적기입니다.',
        winter: '서울보다 따뜻하여 겨울 바다의 낭만을 즐기기에 훌륭합니다.'
      },
      courses: {
        '1-3': '1일차: 광안리 해변 산책 및 야경 감상 -> 2일차: 해운대 해변열차 탑승 및 청사포 -> 3일차: 영도 흰여울문화마을 및 남포동',
        '4-7': '1일차~3일차: 해운대/광안리 중심 관광 -> 4일차: 송도 해상케이블카 및 감천문화마을 -> 5일차: 기장 카페 투어 및 해동용궁사',
        '8+': '해안선을 따라 기장부터 다대포까지 부산의 모든 해수욕장과 숨은 명소들을 섭렵하는 여유로운 코스입니다.'
      }
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
    quickInfo: {
      months: '7월~8월, 1~2월',
      flight: '차량 2.5시간',
      visa: '국내 (해당없음)',
      voltage: '220V',
      temp: { spring: '13℃', summer: '23℃', autumn: '17℃', winter: '2℃' }
    },
    domesticDetails: {
      spots: '설악산 케이블카, 안목해변 커피거리, 속초 중앙시장, 낙산사',
      food: '만석닭강정, 초당순두부, 오징어순대, 물회',
      weatherDesc: {
        spring: '맑은 동해 바다를 보며 드라이브하기 좋은 화창한 날씨입니다.',
        summer: '시원한 바다에 뛰어들기 가장 좋은 계절입니다. 타 지역보다 선선합니다.',
        autumn: '설악산의 오색 단풍을 구경하기 완벽한 선선하고 맑은 날씨입니다.',
        winter: '눈 덮인 설악산과 차갑고 투명한 겨울 바다의 감성을 느낄 수 있습니다.'
      },
      courses: {
        '1-3': '1일차: 속초 중앙시장 및 아바이마을 -> 2일차: 설악산 등반/케이블카 -> 3일차: 강릉 안목해변 카페거리',
        '4-7': '1~2일차: 속초 집중 투어 -> 3일차: 양양 서피비치 서핑 -> 4일차: 강릉 정동진 및 하슬라아트월드 -> 5일차: 주문진 수산시장',
        '8+': '강원도 영동지방(고성-속초-양양-강릉-동해-삼척)을 아우르는 7번 국도 완벽 일주 드라이브 코스!'
      }
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
    quickInfo: {
      months: '4월~5월, 9~10월',
      flight: 'KTX 2시간',
      visa: '국내 (해당없음)',
      voltage: '220V',
      temp: { spring: '14℃', summer: '25℃', autumn: '18℃', winter: '3℃' }
    },
    domesticDetails: {
      spots: '불국사, 동궁과 월지(안압지), 대릉원, 황리단길',
      food: '황남빵, 교리김밥, 떡갈비 정식, 순두부 짬뽕',
      weatherDesc: {
        spring: '벚꽃이 만개하여 핑크빛으로 물든 낭만적인 풍경을 자랑합니다.',
        summer: '분지 지형이라 햇볕이 뜨겁습니다. 한낮에는 시원한 실내 코스를 추천합니다.',
        autumn: '첨성대 주변의 핑크뮬리와 단풍이 절정을 이루는 최고의 여행 시즌입니다.',
        winter: '조용하고 고즈넉한 겨울 한옥의 정취를 느낄 수 있으나 다소 춥습니다.'
      },
      courses: {
        '1-3': '1일차: 황리단길 및 대릉원 -> 2일차: 불국사 및 보문단지 -> 3일차: 국립경주박물관 및 동궁과 월지 야경',
        '4-7': '1~3일차: 경주 역사 유적 투어 -> 4일차: 경주월드 어뮤즈먼트 파크 -> 5일차: 감포 바다 구경 및 문무대왕릉',
        '8+': '신라 천년의 역사를 구석구석 탐방하고, 포항 등 인근 바다 도시까지 여유롭게 다녀오는 힐링 코스입니다.'
      }
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
    quickInfo: {
      months: '3월~5월, 9~11월',
      flight: '1시간 40분 직항',
      visa: '무비자 90일',
      voltage: '110V',
      temp: { spring: '15℃', summer: '28℃', autumn: '19℃', winter: '6℃' }
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
    quickInfo: {
      months: '3월~5월, 9~11월',
      flight: '1시간 20분 직항',
      visa: '무비자 90일',
      voltage: '110V',
      temp: { spring: '16℃', summer: '28℃', autumn: '20℃', winter: '8℃' }
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
    quickInfo: {
      months: '10월~4월',
      flight: '2시간 30분 직항',
      visa: '무비자 90일',
      voltage: '110V',
      temp: { spring: '22℃', summer: '30℃', autumn: '25℃', winter: '16℃' }
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
    quickInfo: {
      months: '4월~6월',
      flight: '2시간 15분 직항',
      visa: '무비자 90일',
      voltage: '110V',
      temp: { spring: '22℃', summer: '28℃', autumn: '26℃', winter: '17℃' }
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
    quickInfo: {
      months: '2월~5월',
      flight: '4시간 40분 직항',
      visa: '무비자 45일',
      voltage: '220V',
      temp: { spring: '26℃', summer: '30℃', autumn: '26℃', winter: '22℃' }
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
    quickInfo: {
      months: '11월~3월',
      flight: '5시간 50분 직항',
      visa: '무비자 90일',
      voltage: '220V',
      temp: { spring: '30℃', summer: '29℃', autumn: '28℃', winter: '27℃' }
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
    quickInfo: {
      months: '12월~5월',
      flight: '4시간 20분 직항',
      visa: '무비자 45일 (ESTA권장)',
      voltage: '110V',
      temp: { spring: '28℃', summer: '28℃', autumn: '28℃', winter: '27℃' }
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
    quickInfo: {
      months: '5월~9월',
      flight: '14시간 직항',
      visa: '무비자 90일',
      voltage: '230V',
      temp: { spring: '12℃', summer: '20℃', autumn: '13℃', winter: '5℃' }
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
    quickInfo: {
      months: '4월~10월',
      flight: '8시간 30분 직항',
      visa: 'ESTA 90일',
      voltage: '110V',
      temp: { spring: '25℃', summer: '27℃', autumn: '26℃', winter: '24℃' }
    }
  },
  {
    id: 'i9',
    name: '시드니, 호주 (Sydney, Australia)',
    location: 'international',
    flight: 'long',
    duration: ['8+'],
    style: ['city', 'nature', 'relaxation'],
    bestSeasons: ['winter'],
    image: 'https://loremflickr.com/800/600/sydney,opera/all',
    description: '오페라 하우스와 하버 브리지, 푸른 바다가 어우러진 남반구의 매력적인 도시.',
    quickInfo: {
      months: '10월~4월',
      flight: '10시간 30분 직항',
      visa: 'ETA 90일',
      voltage: '230V',
      temp: { spring: '18℃', summer: '23℃', autumn: '18℃', winter: '13℃' }
    }
  },
  {
    id: 'i11',
    name: '스위스 (Switzerland)',
    location: 'international',
    flight: 'long',
    duration: ['8+'],
    style: ['nature', 'relaxation', 'adventure'],
    bestSeasons: ['summer'],
    image: 'https://loremflickr.com/800/600/switzerland,alps/all',
    description: '유튜브 추천! 무더운 여름 유럽에서 시원하게 알프스 대자연을 즐길 수 있는 최고의 선택지.',
    quickInfo: {
      months: '6월~9월',
      flight: '13시간 30분 (경유)',
      visa: '무비자 90일',
      voltage: '230V',
      temp: { spring: '10℃', summer: '18℃', autumn: '11℃', winter: '0℃' }
    }
  },
  {
    id: 'i12',
    name: '우유니 사막, 볼리비아 (Uyuni, Bolivia)',
    location: 'international',
    flight: 'long',
    duration: ['8+'],
    style: ['nature', 'adventure'],
    bestSeasons: ['winter'],
    image: 'https://loremflickr.com/800/600/uyuni,salt/all',
    description: '유튜브 추천! 직장인의 긴 연차를 100% 활용할 수 있는 지구 반대편의 초현실적인 소금 사막.',
    quickInfo: {
      months: '12월~3월 (우기)',
      flight: '25시간 이상 (경유)',
      visa: '무비자 30일(도착)',
      voltage: '220V',
      temp: { spring: '10℃', summer: '12℃', autumn: '11℃', winter: '5℃' }
    }
  }
];
