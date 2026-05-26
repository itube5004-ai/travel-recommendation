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
      flight: '청주공항 이용 (약 2.5시간)',
      visa: '국내 (해당없음)',
      voltage: '220V',
      temp: { spring: '15℃', summer: '26℃', autumn: '20℃', winter: '7℃' }
    },
    details: {
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
      flight: 'SRT/KTX (약 2시간)',
      visa: '국내 (해당없음)',
      voltage: '220V',
      temp: { spring: '14℃', summer: '25℃', autumn: '19℃', winter: '6℃' }
    },
    details: {
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
      flight: '자가용 (약 3.5시간)',
      visa: '국내 (해당없음)',
      voltage: '220V',
      temp: { spring: '13℃', summer: '23℃', autumn: '17℃', winter: '2℃' }
    },
    details: {
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
      flight: 'SRT/KTX (약 1.5시간)',
      visa: '국내 (해당없음)',
      voltage: '220V',
      temp: { spring: '14℃', summer: '25℃', autumn: '18℃', winter: '3℃' }
    },
    details: {
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
    },
    details: {
      spots: '도톤보리, 유니버설 스튜디오 재팬, 오사카 성, 우메다 공중정원',
      food: '오코노미야키, 타코야키, 구시카츠, 라멘',
      weatherDesc: {
        spring: '벚꽃이 피어 아름답고 활동하기 쾌적한 날씨입니다.',
        summer: '매우 덥고 습하여 땀이 많이 납니다. 실내 쇼핑 위주 일정을 추천합니다.',
        autumn: '단풍이 물들고 날씨가 선선해져 도보 여행하기 가장 좋습니다.',
        winter: '비교적 온화하며 화려한 일루미네이션과 따뜻한 국물 요리를 즐기기 좋습니다.'
      },
      courses: {
        '1-3': '1일차: 도톤보리 미식 투어 -> 2일차: 유니버설 스튜디오 재팬 -> 3일차: 오사카 성 및 우메다 쇼핑',
        '4-7': '1~3일차: 오사카 핵심 관광 -> 4일차: 교토 당일치기(기요미즈데라) -> 5일차: 고베 당일치기(고베규 및 야경)',
        '8+': '간사이 지방 완벽 일주 (오사카-교토-고베-나라-와카야마)'
      }
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
    },
    details: {
      spots: '다자이후 텐만구, 캐널시티 하카타, 유후인 온천 마을',
      food: '돈코츠 라멘, 모츠나베(곱창전골), 명란젓',
      weatherDesc: {
        spring: '포근하고 화창하여 근교로 온천 및 벚꽃 여행을 떠나기 좋습니다.',
        summer: '덥고 습도가 높아 체력 소모가 빠릅니다.',
        autumn: '선선한 바람이 불어 야외 활동과 따뜻한 국물 요리를 즐기기 시작하기 좋습니다.',
        winter: '노천탕에서 힐링하기 가장 완벽한 계절입니다.'
      },
      courses: {
        '1-3': '1일차: 캐널시티 쇼핑 및 나카스 포장마차 -> 2일차: 유후인 당일치기 온천 -> 3일차: 다자이후 텐만구',
        '4-7': '1~2일차: 후쿠오카 시내 쇼핑 및 맛집 -> 3~4일차: 벳푸 및 유후인 료칸 숙박 -> 5일차: 모모치 해변 야경',
        '8+': '북큐슈 렌터카 일주 코스로 소도시 온천 마을들을 모두 돌아보세요.'
      }
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
    },
    details: {
      spots: '타이베이 101, 스라린 야시장, 지우펀, 예류 지질 공원',
      food: '우육면, 딤섬, 망고 빙수, 버블티',
      weatherDesc: {
        spring: '비가 종종 내리지만 많이 덥지 않아 여행하기 적당합니다.',
        summer: '매우 덥고 습하며 태풍의 영향을 받을 수 있어 주의가 필요합니다.',
        autumn: '비가 적고 선선해져 쾌적하게 여행할 수 있는 최고의 계절입니다.',
        winter: '초가을 날씨처럼 선선하여 도보 여행과 따뜻한 우육면을 즐기기 완벽합니다.'
      },
      courses: {
        '1-3': '1일차: 타이베이 101 및 시내 야시장 -> 2일차: 예스진지(예류,스펀,진과스,지우펀) 버스 투어 -> 3일차: 단수이 일몰',
        '4-7': '1~3일차: 타이베이 및 예스진지 -> 4일차: 신베이터우 온천 -> 5일차: 화산 1914 창의문화원구',
        '8+': '타이베이부터 가오슝까지 타이완 서부 해안선을 따라 기차 여행을 떠나보세요.'
      }
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
    },
    details: {
      spots: '츄라우미 수족관, 아메리칸 빌리지, 만자모, 코우리 대교',
      food: '오키나와 소바, 타코라이스, 오리온 맥주',
      weatherDesc: {
        spring: '따뜻하여 해양 스포츠를 시작하기 좋은 쾌적한 날씨입니다.',
        summer: '햇볕이 강렬하지만 완벽한 휴양지 날씨입니다. (단, 8~9월 태풍 주의)',
        autumn: '가을 태풍의 영향을 많이 받을 수 있어 여행 전 날씨 확인이 필수입니다.',
        winter: '한국의 늦가을 날씨로 바다 수영은 어렵지만, 한적하게 렌터카 드라이브를 즐기기 좋습니다.'
      },
      courses: {
        '1-3': '1일차: 나하 국제거리 -> 2일차: 츄라우미 수족관 및 북부 해변 -> 3일차: 아메리칸 빌리지',
        '4-7': '1~2일차: 남부(국제거리/우미카지 테라스) -> 3일차: 중부(만자모/스노클링) -> 4~5일차: 북부 집중 휴양',
        '8+': '미야코지마 또는 이시가키지마 등 주변의 아름다운 낙도 섬들을 배나 경비행기로 방문해 보세요.'
      }
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
    },
    details: {
      spots: '미케 해변, 바나힐 테마파크, 호이안 올드타운, 핑크 성당',
      food: '쌀국수, 반미, 분짜, 반세오, 다낭식 해산물 요리',
      weatherDesc: {
        spring: '건기가 시작되어 비가 적고 쾌적한 여행의 최적기입니다.',
        summer: '매우 뜨거운 건기입니다. 한낮엔 호캉스, 아침저녁으로 활동하는 것을 추천합니다.',
        autumn: '우기가 시작되어 비가 잦으므로 우산과 우비가 필수입니다.',
        winter: '우기이며 온도가 내려가 수영을 즐기기에는 물이 찰 수 있습니다.'
      },
      courses: {
        '1-3': '1일차: 미케 해변 휴양 및 시내(핑크성당/한시장) -> 2일차: 호이안 올드타운 야경 -> 3일차: 바나힐 골든브릿지',
        '4-7': '1~3일차: 다낭 시내 및 호캉스 -> 4일차: 호이안 1박 하며 소원배 체험 -> 5일차: 안방 비치 휴식',
        '8+': '다낭-호이안-후에(베트남 옛 수도)까지 역사와 힐링을 모두 잡는 중부 완벽 투어.'
      }
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
    },
    details: {
      spots: '왕궁 및 왓 아룬 사원, 카오산 로드, 아이콘시암, 짜뚜짝 주말 시장',
      food: '팟타이, 똠얌꿍, 푸팟퐁커리, 망고 스티키 라이스',
      weatherDesc: {
        spring: '1년 중 가장 덥습니다. 4월에는 거대한 물 축제인 송끄란이 열립니다.',
        summer: '우기가 시작되어 소나기(스콜)가 자주 내립니다. 일정이 유동적이어야 합니다.',
        autumn: '늦가을부터 비가 점차 줄어들며 여행하기 좋은 건기로 접어듭니다.',
        winter: '습도와 온도가 비교적 낮아 방콕을 여행하기 가장 쾌적한 최성수기입니다.'
      },
      courses: {
        '1-3': '1일차: 왕궁 및 사원 투어 후 카오산 로드 -> 2일차: 아이콘시암 및 왓 아룬 야경 -> 3일차: 룸피니 공원 및 마사지',
        '4-7': '1~3일차: 방콕 시내 관광 -> 4일차: 파타야 당일치기 해양스포츠 -> 5일차: 짜뚜짝 주말 시장 쇼핑',
        '8+': '방콕-파타야-아유타야까지 태국의 도시, 휴양, 역사를 모두 즐기는 코스.'
      }
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
    },
    details: {
      spots: '투몬 비치, 사랑의 절벽, 리티디안 해변, T 갤러리아',
      food: '바베큐 립, 차모로 로컬 음식, 스테이크',
      weatherDesc: {
        spring: '건기로 맑고 청명한 하늘과 에메랄드빛 바다를 즐기기 가장 좋습니다.',
        summer: '우기가 시작되어 스콜성 비가 자주 내리지만 물놀이엔 무리가 없습니다.',
        autumn: '태풍이 종종 발생할 수 있으므로 일기예보 확인이 필수입니다.',
        winter: '습도가 낮아지고 선선한 무역풍이 불어오는 최고의 여행 시즌입니다.'
      },
      courses: {
        '1-3': '1일차: 투몬 비치 휴양 및 쇼핑 -> 2일차: 돌핀 크루즈 -> 3일차: 렌터카 남부 투어 및 사랑의 절벽',
        '4-7': '1~3일차: 리조트 내 워터파크 및 프라이빗 비치 힐링 -> 4일차: 스쿠버다이빙 체험 -> 5일차: 북부 리티디안 해변',
        '8+': '가족들과 함께 괌 구석구석의 프라이빗한 비치들을 렌터카로 천천히 탐험해 보세요.'
      }
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
    },
    details: {
      spots: '에펠탑, 루브르 박물관, 몽마르트르 언덕, 베르사유 궁전',
      food: '크루아상, 마카롱, 에스카르고, 스테이크 프릿츠, 와인',
      weatherDesc: {
        spring: '꽃이 피며 낭만적인 분위기가 절정에 달합니다. 아침저녁엔 쌀쌀할 수 있습니다.',
        summer: '해가 밤 10시까지 떠있어 관광하기 좋으나, 최근 여름 폭염이 잦습니다.',
        autumn: '트렌치코트가 어울리는 선선한 가을로, 공원을 걷기 좋습니다.',
        winter: '비가 자주 오고 우중충하지만 로맨틱한 연말 분위기를 즐길 수 있습니다.'
      },
      courses: {
        '1-3': '1일차: 에펠탑 및 바토무슈 -> 2일차: 루브르 박물관 및 샹젤리제 거리 -> 3일차: 몽마르트르',
        '4-7': '1~3일차: 파리 시내 명소 섭렵 -> 4일차: 베르사유 궁전 -> 5일차: 오르세 미술관 및 마레지구 쇼핑',
        '8+': '파리를 거점으로 몽생미셸 당일치기 투어나 근교 와이너리 투어를 추가해 보세요!'
      }
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
    },
    details: {
      spots: '와이키키 해변, 다이아몬드 헤드, 하나우마 베이, 쿠알로아 랜치',
      food: '포케, 로코모코, 말라사다 도넛, 셰이브 아이스',
      weatherDesc: {
        spring: '덥지도 춥지도 않은 가장 완벽한 여행하기 좋은 날씨입니다.',
        summer: '자외선이 강하지만 비가 오지 않는 건기로 해양 액티비티에 최고입니다.',
        autumn: '여름처럼 따뜻하고 쾌적하여 허니문과 가족 여행으로 인기가 높습니다.',
        winter: '종종 소나기가 내리지만 알로하 셔츠만 입고 다녀도 될 만큼 따뜻합니다.'
      },
      courses: {
        '1-3': '비행 시간을 고려하여 1-3일은 추천하지 않는 목적지입니다.',
        '4-7': '1일차: 와이키키 비치 휴식 -> 2일차: 하나우마베이 스노클링 및 다이아몬드 헤드 -> 3일차: 쿠알로아 랜치 액티비티 -> 4일차: 와이켈레 아울렛 쇼핑',
        '8+': '오아후 섬 외에 마우이나 빅아일랜드를 추가로 방문하여 대자연의 화산과 별자리를 감상해 보세요.'
      }
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
    },
    details: {
      spots: '오페라 하우스, 하버 브리지, 본다이 비치, 블루마운틴',
      food: '미트 파이, 피시 앤 칩스, 플랫 화이트 커피, 캥거루 스테이크',
      weatherDesc: {
        spring: '한국의 가을 날씨로 선선합니다. 아침저녁으론 겉옷이 필요합니다.',
        summer: '한국의 겨울 날씨로 다소 쌀쌀합니다. 두꺼운 옷을 준비하세요.',
        autumn: '한국의 봄 날씨로 따뜻해지며 야외 활동하기 좋습니다.',
        winter: '한국이 한겨울일 때 시드니는 한여름입니다! 맑고 뜨거운 해변을 즐기기 완벽합니다.'
      },
      courses: {
        '1-3': '장거리 비행이므로 1-3일 일정으로는 추천하지 않습니다.',
        '4-7': '1일차: 서큘러 키 및 오페라 하우스 투어 -> 2일차: 달링 하버 및 야경 -> 3일차: 본다이 비치 수영 -> 4일차: 블루마운틴 국립공원',
        '8+': '시드니 도심과 헌터밸리 와이너리 투어를 마친 후, 포트스테판으로 이동하여 사막 썰매를 경험해 보세요.'
      }
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
    },
    details: {
      spots: '인터라켄(융프라우), 체르마트(마테호른), 루체른, 그린델발트',
      food: '치즈 폰듀, 뢰스티, 스위스 초콜릿',
      weatherDesc: {
        spring: '아직 산에는 눈이 녹지 않아 하이킹 루트가 제한적일 수 있습니다.',
        summer: '하이킹하기 가장 좋은 최적기! 유럽 폭염 속에서도 시원하고 쾌적합니다.',
        autumn: '단풍이 물든 아름다운 풍경을 볼 수 있지만 빠르게 추워집니다.',
        winter: '알프스의 거대한 설산으로 변모하여 전 세계 스키어들이 몰려드는 겨울 왕국입니다.'
      },
      courses: {
        '1-3': '장거리 비행이므로 1-3일 일정으로는 추천하지 않습니다.',
        '4-7': '1일차: 루체른 카펠교 산책 -> 2일차: 인터라켄 이동 및 융프라우요흐 등반 -> 3일차: 피르스트 액티비티 -> 4일차: 체르마트 마테호른 뷰',
        '8+': '스위스 트래블 패스를 이용해 몽트뢰, 베른 등 스위스 전역의 소도시와 호수 마을들을 기차로 낭만적으로 유람해 보세요.'
      }
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
    },
    details: {
      spots: '우유니 소금 사막, 잉카와시 섬, 소금 호텔, 콜차니 마을',
      food: '살테냐(만두), 야마 고기, 퀴노아 수프',
      weatherDesc: {
        spring: '건기에 접어들어 바닥이 쩍쩍 갈라진 하얀 소금 사막을 볼 수 있습니다.',
        summer: '완전한 건기로 탁 트인 시야와 함께 원근법 사진을 찍기 최고입니다.',
        autumn: '건기에서 우기로 넘어가는 시기입니다.',
        winter: '한국의 한겨울이 볼리비아의 우기입니다! 빗물이 고여 거울처럼 하늘이 반사되는 기적 같은 풍경을 볼 수 있습니다.'
      },
      courses: {
        '1-3': '지구 반대편이므로 단기 일정은 불가능합니다.',
        '4-7': '남미 대륙 이동 시간을 고려하면 최소 2주 이상의 휴가가 권장됩니다.',
        '8+': '페루 마추픽추를 거쳐 볼리비아 우유니(데이+선셋+스타라이트 투어 3종 세트)를 다녀오는 국민 남미 배낭여행 코스를 추천합니다.'
      }
    }
  }
];
