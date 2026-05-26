const destinations = [
  // Domestic (Korea) - 8 destinations
  {
    id: 'd1', name: '제주도 (Jeju Island)', location: 'domestic', duration: ['2-3', '4-5'], style: ['relaxation', 'nature', 'food'], bestSeasons: ['spring', 'summer', 'autumn'], image: 'https://picsum.photos/seed/d1/800/600', description: '에메랄드빛 바다와 아름다운 오름, 맛있는 흑돼지와 해산물이 있는 환상의 섬.',
    quickInfo: { months: '4월~6월, 9~10월', flight: '비행기 (약 1시간)', visa: '국내 (해당없음)', voltage: '220V', temp: { spring: '15℃', summer: '26℃', autumn: '20℃', winter: '7℃' } },
    details: {
      spots: '성산일출봉, 우도, 애월 한담해안산책로, 사려니숲길', food: '흑돼지 구이, 고기국수, 갈치조림, 돔베고기', hotel: '그랜드 조선 제주, 파르나스 호텔, 해비치 리조트, 신라호텔',
      weatherDesc: { spring: '유채꽃이 만발하는 따뜻하고 포근한 날씨입니다. 여행하기 가장 좋습니다.', summer: '햇살이 뜨겁고 습도가 높지만, 해수욕을 즐기기 완벽합니다.', autumn: '선선한 바람과 은빛 억새밭이 장관을 이루는 쾌적한 날씨입니다.', winter: '육지보다는 따뜻하지만 바람이 많이 불어 체감온도가 낮을 수 있습니다.' },
      courses: { 
        '2-3': '<br>1DAY: 애월 한담해안산책로 -> 협재 해수욕장 -> 금오름 일몰<br>2DAY: 서귀포 중문관광단지 -> 천제연 폭포 -> 서귀포 올레시장<br>3DAY: 성산일출봉 일출 -> 우도 한바퀴 투어 -> 공항', 
        '4-5': '<br>1DAY: 제주 서부(애월, 협재) 바다 만끽<br>2DAY: 오설록 티 뮤지엄 -> 산방산 및 용머리해안<br>3DAY: 한라산 영실코스 가벼운 등반 또는 사려니숲길 산책<br>4DAY: 우도 종일 투어 및 성산일출봉<br>5DAY: 함덕 해수욕장 휴식 -> 제주 동문시장 기념품 쇼핑 -> 공항' 
      }
    }
  },
  {
    id: 'd2', name: '부산 (Busan)', location: 'domestic', duration: ['2-3', '4-5'], style: ['city', 'food', 'nightlife'], bestSeasons: ['summer', 'autumn'], image: 'https://picsum.photos/seed/d2/800/600', description: '해운대의 화려한 야경과 맛있는 밀면, 돼지국밥! 활기찬 해양 도시.',
    quickInfo: { months: '5월~6월, 9~11월', flight: 'SRT/KTX (약 2시간)', visa: '국내 (해당없음)', voltage: '220V', temp: { spring: '14℃', summer: '25℃', autumn: '19℃', winter: '6℃' } },
    details: {
      spots: '해운대 해수욕장, 광안대교 야경, 흰여울문화마을, 해동용궁사', food: '돼지국밥, 밀면, 씨앗호떡, 싱싱한 회와 조개구이', hotel: '시그니엘 부산, 파라다이스 호텔, 힐튼 아난티 코브, 아바니 센트럴',
      weatherDesc: { spring: '포근한 바닷바람을 맞으며 산책하기 좋은 날씨입니다.', summer: '해수욕 인파로 활기가 넘치며, 밤에는 시원한 바닷바람이 붑니다.', autumn: '부산국제영화제와 불꽃축제가 열리는 선선하고 맑은 여행 최적기입니다.', winter: '서울보다 따뜻하여 겨울 바다의 낭만을 즐기기에 훌륭합니다.' },
      courses: { 
        '2-3': '<br>1DAY: 해운대 해수욕장 -> 동백섬 산책 -> 더베이101 야경<br>2DAY: 영도 흰여울문화마을 -> 태종대 -> 남포동 비프광장 및 자갈치시장<br>3DAY: 기장 해동용궁사 -> 아난티 타운 오션뷰 카페 -> 공항/역', 
        '4-5': '<br>1DAY: 해운대 해수욕장 및 주변 맛집 탐방<br>2DAY: 달맞이길 -> 청사포 해변열차 -> 송정 해수욕장 서핑<br>3DAY: 기장 해동용궁사 및 롯데 프리미엄 아울렛<br>4DAY: 영도 흰여울문화마을 -> 송도 해상케이블카<br>5DAY: 광안리 해변 휴식 -> 밀면/국밥 마무리' 
      }
    }
  },
  {
    id: 'd3', name: '강릉/속초 (Gangneung/Sokcho)', location: 'domestic', duration: ['day', '2-3', '4-5'], style: ['relaxation', 'food', 'nature'], bestSeasons: ['summer', 'winter'], image: 'https://picsum.photos/seed/d3/800/600', description: '시원한 동해 바다와 설악산, 그리고 신선한 회와 닭강정.',
    quickInfo: { months: '7월~8월, 1~2월', flight: '자가용 (약 3시간)', visa: '국내 (해당없음)', voltage: '220V', temp: { spring: '13℃', summer: '23℃', autumn: '17℃', winter: '2℃' } },
    details: {
      spots: '설악산 케이블카, 안목해변 커피거리, 속초 중앙시장, 낙산사', food: '만석닭강정, 초당순두부, 오징어순대, 물회', hotel: '씨마크 호텔, 롯데리조트 속초, 세인트존스 호텔, 쏠비치 양양',
      weatherDesc: { spring: '맑은 동해 바다를 보며 드라이브하기 좋은 화창한 날씨입니다.', summer: '시원한 바다에 뛰어들기 가장 좋은 계절입니다. 타 지역보다 선선합니다.', autumn: '설악산의 오색 단풍을 구경하기 완벽한 선선하고 맑은 날씨입니다.', winter: '눈 덮인 설악산과 차갑고 투명한 겨울 바다의 감성을 느낄 수 있습니다.' },
      courses: { 
        'day': '<br>1DAY: 속초 해수욕장 -> 속초 중앙시장(만석닭강정) -> 강릉 안목해변 커피거리', 
        '2-3': '<br>1DAY: 속초 아바이마을 -> 중앙시장 구경 및 먹거리 -> 영랑호 산책<br>2DAY: 설악산 케이블카 탑승 및 권금성 -> 낙산사 템플스테이/구경<br>3DAY: 강릉 초당순두부 마을 -> 안목해변 커피거리 -> 오죽헌', 
        '4-5': '<br>1DAY: 고성 통일전망대 -> 아야진 해변<br>2DAY: 속초 설악산 케이블카 -> 중앙시장 먹방<br>3DAY: 양양 서피비치 서핑 체험 -> 하조대<br>4DAY: 강릉 경포대 -> 초당순두부 -> 안목해변<br>5DAY: 정동진 일출 -> 하슬라 아트월드' 
      }
    }
  },
  {
    id: 'd4', name: '경주 (Gyeongju)', location: 'domestic', duration: ['day', '2-3', '4-5'], style: ['history', 'culture', 'relaxation'], bestSeasons: ['spring', 'autumn'], image: 'https://picsum.photos/seed/d4/800/600', description: '천년의 역사가 숨 쉬는 곳. 황리단길의 트렌디함과 고즈넉한 한옥의 조화.',
    quickInfo: { months: '4월~5월, 9~10월', flight: 'SRT/KTX (약 1.5시간)', visa: '국내 (해당없음)', voltage: '220V', temp: { spring: '14℃', summer: '25℃', autumn: '18℃', winter: '3℃' } },
    details: {
      spots: '불국사, 동궁과 월지(안압지), 대릉원, 황리단길', food: '황남빵, 교리김밥, 떡갈비 정식, 순두부 짬뽕', hotel: '라한셀렉트 경주, 힐튼 경주, 소노벨 경주, 한옥 펜션(황남관)',
      weatherDesc: { spring: '벚꽃이 만개하여 핑크빛으로 물든 낭만적인 풍경을 자랑합니다.', summer: '분지 지형이라 햇볕이 뜨겁습니다. 한낮에는 시원한 실내 코스를 추천합니다.', autumn: '핑크뮬리와 단풍이 절정을 이루는 최고의 여행 시즌입니다.', winter: '조용하고 고즈넉한 겨울 한옥의 정취를 느낄 수 있으나 다소 춥습니다.' },
      courses: { 
        'day': '<br>1DAY: 대릉원 사진 촬영 -> 황리단길 카페 및 맛집 -> 동궁과 월지 야경', 
        '2-3': '<br>1DAY: 대릉원(천마총) -> 황리단길 투어 -> 첨성대 및 동궁과 월지 야경<br>2DAY: 불국사 -> 석굴암 -> 보문관광단지 산책<br>3DAY: 국립경주박물관 -> 교촌한옥마을(최부자댁) 및 월정교', 
        '4-5': '<br>1DAY: 경주 시내 유적지 (대릉원, 첨성대, 야경)<br>2DAY: 황리단길 핫플레이스 및 교촌한옥마을<br>3DAY: 불국사, 석굴암 역사 탐방<br>4DAY: 경주월드 어뮤즈먼트 파크 신나는 액티비티<br>5DAY: 감포 앞바다 주상절리 및 문무대왕릉' 
      }
    }
  },
  {
    id: 'd5', name: '여수 (Yeosu)', location: 'domestic', duration: ['2-3', '4-5'], style: ['relaxation', 'food', 'nightlife'], bestSeasons: ['spring', 'autumn'], image: 'https://picsum.photos/seed/d5/800/600', description: '밤바다의 낭만과 맛있는 남도 음식이 가득한 아름다운 항구 도시.',
    quickInfo: { months: '4월~5월, 9~11월', flight: 'SRT/KTX (약 2시간)', visa: '국내 (해당없음)', voltage: '220V', temp: { spring: '15℃', summer: '25℃', autumn: '19℃', winter: '5℃' } },
    details: {
      spots: '여수 해상케이블카, 오동도, 이순신광장, 향일암', food: '게장 백반, 돌산 갓김치, 서대회 무침, 여수 삼합', hotel: '소노캄 여수, 신라스테이 여수, 유탑 마리나 호텔, 히든베이 호텔',
      weatherDesc: { spring: '따뜻한 남쪽 바람이 불어 해상케이블카 타기 완벽한 날씨입니다.', summer: '바닷바람이 시원하지만 햇볕이 뜨겁습니다. 밤바다 산책이 좋습니다.', autumn: '선선한 바람과 맑은 하늘이 어우러져 야외 활동하기 최적기입니다.', winter: '남쪽이라 비교적 따뜻하며 향일암에서 해돋이를 보기 좋습니다.' },
      courses: { 
        '2-3': '<br>1DAY: 이순신광장 명물 간식 투어 -> 해양공원 야경 및 낭만포차<br>2DAY: 향일암 일출 및 트래킹 -> 여수 해상케이블카 (크리스탈 캐빈)<br>3DAY: 오동도 동백열차 및 산책 -> 아르떼뮤지엄 전시 관람', 
        '4-5': '<br>1DAY: 여수 시내 이순신광장 맛집 섭렵<br>2DAY: 오동도 및 케이블카 투어<br>3DAY: 돌산도 프라이빗 풀빌라 호캉스 및 바베큐<br>4DAY: 향일암 및 남해 바다 드라이브<br>5DAY: 아쿠아플라넷 및 해안가 예쁜 카페 투어' 
      }
    }
  },
  {
    id: 'd6', name: '전주 (Jeonju)', location: 'domestic', duration: ['day', '2-3', '4-5'], style: ['history', 'culture', 'food'], bestSeasons: ['spring', 'autumn'], image: 'https://picsum.photos/seed/d6/800/600', description: '한국의 멋과 맛을 대표하는 가장 고풍스러운 한옥마을 투어.',
    quickInfo: { months: '4월~5월, 9~10월', flight: '자가용/고속버스 (약 1.5시간)', visa: '국내 (해당없음)', voltage: '220V', temp: { spring: '14℃', summer: '26℃', autumn: '18℃', winter: '2℃' } },
    details: {
      spots: '전주 한옥마을, 경기전, 전동성당, 자만벽화마을', food: '전주 비빔밥, 콩나물국밥, 피순대, 한옥마을 길거리 음식', hotel: '라한호텔 전주, 왕의지밀 한옥호텔, 엔브릿지 호텔, 한옥 스테이',
      weatherDesc: { spring: '한복을 입고 거리를 거닐기 가장 좋은 포근한 날씨입니다.', summer: '햇볕이 뜨거워 한복 체험이 다소 더울 수 있습니다.', autumn: '선선한 가을바람과 한옥의 처마가 완벽한 조화를 이룹니다.', winter: '눈 쌓인 한옥마을의 아름다운 절경을 볼 수 있습니다.' },
      courses: { 
        'day': '<br>1DAY: 한옥마을 한복 대여 -> 전동성당 및 경기전 사진 촬영 -> 길거리 음식 투어', 
        '2-3': '<br>1DAY: 전주 한옥마을 한복 체험 -> 비빔밥 점심 -> 남부시장 피순대 야시장<br>2DAY: 자만벽화마을 산책 -> 오목대에서 한옥마을 전경 감상 -> 객리단길 힙한 카페<br>3DAY: 덕진공원 연꽃 구경(여름) 또는 국립무형유산원 관람 -> 콩나물국밥 해장', 
        '4-5': '<br>1DAY: 전주 한옥마을 완벽 정복<br>2DAY: 객리단길 및 웨딩거리 핫플 투어<br>3DAY: 완주 오성한옥마을 및 아원고택 힐링 카페<br>4DAY: 완주 대둔산 케이블카 탑승<br>5DAY: 전주 남부시장 및 로컬 맛집 투어 마무리' 
      }
    }
  },
  {
    id: 'd7', name: '통영/거제 (Tongyeong/Geoje)', location: 'domestic', duration: ['2-3', '4-5'], style: ['nature', 'relaxation', 'food'], bestSeasons: ['spring', 'summer'], image: 'https://picsum.photos/seed/d7/800/600', description: '한국의 나폴리라 불리는 아름다운 다도해와 푸른 바다의 절경.',
    quickInfo: { months: '3월~5월, 7~8월', flight: '자가용/고속버스 (약 3.5시간)', visa: '국내 (해당없음)', voltage: '220V', temp: { spring: '14℃', summer: '24℃', autumn: '19℃', winter: '5℃' } },
    details: {
      spots: '외도 보타니아, 바람의 언덕, 통영 케이블카, 동피랑 벽화마을', food: '충무김밥, 굴 국밥, 멍게비빔밥, 신선한 활어회', hotel: '거제 삼성호텔, 스탠포드 호텔앤리조트 통영, 소노캄 거제, 거제 벨버디어',
      weatherDesc: { spring: '동백꽃이 만발하고 바닷바람이 시원해 유람선을 타기 최고입니다.', summer: '푸른 몽돌해변에서 해수욕을 즐기고 해양 액티비티를 하기 좋습니다.', autumn: '하늘이 높고 맑아 케이블카 위에서 내려다보는 풍경이 일품입니다.', winter: '비교적 온화하며 따뜻한 굴 요리를 맛보기 좋은 제철입니다.' },
      courses: { 
        '2-3': '<br>1DAY: 통영 중앙시장 꿀빵/충무김밥 -> 동피랑 벽화마을 -> 이순신공원<br>2DAY: 거제 매미성 -> 바람의 언덕 -> 신선대<br>3DAY: 장승포항 유람선 -> 외도 보타니아 아름다운 정원 관람', 
        '4-5': '<br>1DAY: 통영 시내 (동피랑, 디피랑 야간 산책)<br>2DAY: 통영 케이블카 및 루지 액티비티<br>3DAY: 거제로 넘어와 럭셔리 호캉스 및 몽돌해변 산책<br>4DAY: 거제 바람의 언덕 및 해금강 유람선<br>5DAY: 외도 보타니아 투어 후 복귀' 
      }
    }
  },
  {
    id: 'd8', name: '평창/강릉 (Pyeongchang)', location: 'domestic', duration: ['day', '2-3', '4-5'], style: ['nature', 'relaxation', 'family'], bestSeasons: ['summer', 'winter'], image: 'https://picsum.photos/seed/d8/800/600', description: '여름에는 시원한 고원지대, 겨울에는 최고의 스키 리조트를 즐기는 청정 자연.',
    quickInfo: { months: '7~8월, 12~2월', flight: '자가용 (약 2.5시간)', visa: '국내 (해당없음)', voltage: '220V', temp: { spring: '10℃', summer: '20℃', autumn: '12℃', winter: '-4℃' } },
    details: {
      spots: '대관령 양떼목장, 발왕산 케이블카, 월정사 전나무숲, 알펜시아 리조트', food: '한우 구이, 메밀 막국수, 산채 정식, 송어회', hotel: '인터컨티넨탈 알펜시아, 켄싱턴 호텔 평창, 용평 리조트, 휘닉스파크',
      weatherDesc: { spring: '산간 지역이라 늦게까지 쌀쌀하지만 꽃이 피기 시작합니다.', summer: '해발 700m 고원지대로 폭염에도 에어컨이 필요 없을 만큼 시원합니다!', autumn: '오대산의 붉은 단풍이 절경을 이루는 트래킹의 최적기입니다.', winter: '흰 눈으로 덮힌 겨울 왕국으로 스키어들에게 최고의 성수기입니다.' },
      courses: { 
        'day': '<br>1DAY: 대관령 양떼목장 -> 평창 한우거리 점심 -> 발왕산 기 스카이워크', 
        '2-3': '<br>1DAY: 알펜시아/용평 리조트 체크인 후 루지 체험 및 산책<br>2DAY: 대관령 양떼목장/삼양라운드힐 인생샷 -> 평창 한우 파티<br>3DAY: 오대산 월정사 전나무 숲길 피톤치드 힐링', 
        '4-5': '<br>1DAY: 평창 도착 후 리조트 힐링<br>2DAY: 발왕산 케이블카 및 양떼목장<br>3DAY: 강릉으로 이동하여 경포해변 및 오죽헌<br>4DAY: 강릉 주문진 수산시장 및 도깨비 촬영지<br>5DAY: 정동진 해안단구 산책 후 복귀' 
      }
    }
  },

  // International - Short Flight (< 3 hours)
  {
    id: 'i1', name: '오사카, 일본 (Osaka)', location: 'international', flight: 'short', duration: ['2-3', '4-6', '7-14'], style: ['food', 'city', 'shopping'], bestSeasons: ['spring', 'autumn', 'winter'], image: 'https://picsum.photos/seed/i1/800/600', description: '먹다가 망한다는 미식의 도시. 화려한 도톤보리와 유니버셜 스튜디오.',
    quickInfo: { months: '3월~5월, 9~11월', flight: '1시간 40분 직항', visa: '무비자 90일', voltage: '110V', temp: { spring: '15℃', summer: '28℃', autumn: '19℃', winter: '6℃' } },
    details: {
      spots: '도톤보리, 유니버설 스튜디오 재팬, 오사카 성, 우메다 공중정원', food: '오코노미야키, 타코야키, 구시카츠, 라멘', hotel: '스위소텔 난카이 오사카, 칸데오 호텔 오사카 난바, 힐튼 오사카', shopping: '돈키호테(동전파스, 곤약젤리, 퍼펙트휩), 꼼데가르송, 한큐 백화점 손수건',
      weatherDesc: { spring: '벚꽃이 피어 아름답고 활동하기 쾌적한 날씨입니다.', summer: '매우 덥고 습하여 땀이 많이 납니다. 실내 쇼핑 위주 일정을 추천합니다.', autumn: '단풍이 물들고 날씨가 선선해져 도보 여행하기 가장 좋습니다.', winter: '비교적 온화하며 화려한 일루미네이션과 따뜻한 국물 요리를 즐기기 좋습니다.' },
      courses: { 
        '2-3': '<br>1DAY: 간사이 공항 도착 -> 도톤보리 타코야키 먹방 및 글리코상 야경<br>2DAY: 유니버설 스튜디오 재팬 하루 종일 신나게 놀기<br>3DAY: 오사카 성 산책 후 쿠로몬 시장 -> 귀국', 
        '4-6': '<br>1DAY: 오사카 남바 도톤보리 중심 맛집 투어<br>2DAY: 유니버설 스튜디오 재팬<br>3DAY: 오사카 성 및 우메다 스카이빌딩 공중정원<br>4DAY: [교토 당일치기] 기요미즈데라 및 후시미이나리 신사<br>5DAY: [고베 당일치기] 고베규 스테이크 및 하버랜드 야경', 
        '7-14': '<br>1DAY~3DAY: 오사카 시내 및 USJ 완전 정복<br>4DAY~5DAY: 고즈넉한 교토 료칸 숙박 및 아라시야마 대나무 숲<br>6DAY: 나라 사슴 공원 당일치기<br>7DAY: 우메다 쇼핑 및 돈키호테 털기 후 귀국' 
      }
    }
  },
  {
    id: 'i2', name: '후쿠오카, 일본 (Fukuoka)', location: 'international', flight: 'short', duration: ['2-3', '4-6', '7-14'], style: ['food', 'relaxation', 'shopping'], bestSeasons: ['spring', 'autumn', 'winter'], image: 'https://picsum.photos/seed/i2/800/600', description: '가깝고 맛있는 도시. 돈코츠 라멘의 본고장과 따뜻한 온천 여행.',
    quickInfo: { months: '3월~5월, 9~11월', flight: '1시간 20분 직항', visa: '무비자 90일', voltage: '110V', temp: { spring: '16℃', summer: '28℃', autumn: '20℃', winter: '8℃' } },
    details: {
      spots: '다자이후 텐만구, 캐널시티 하카타, 유후인 온천 마을', food: '돈코츠 라멘, 모츠나베(곱창전골), 명란젓', hotel: '미야코 호텔 하카타, 그랜드 하얏트 후쿠오카, 니시테츠 그랜드 호텔', shopping: '돈키호테, 명란 튜브, 이치란 라멘 밀키트, 캐널시티 무인양품',
      weatherDesc: { spring: '포근하고 화창하여 근교로 온천 및 벚꽃 여행을 떠나기 좋습니다.', summer: '덥고 습도가 높아 체력 소모가 빠릅니다.', autumn: '선선한 바람이 불어 야외 활동과 따뜻한 국물 요리를 즐기기 시작하기 좋습니다.', winter: '노천탕에서 힐링하기 가장 완벽한 계절입니다.' },
      courses: { 
        '2-3': '<br>1DAY: 하카타 도착 후 모츠나베 점심 -> 캐널시티 쇼핑 -> 나카스 포장마차<br>2DAY: 다자이후 텐만구 관광 및 텐진 지하상가 쇼핑<br>3DAY: 오호리 공원 산책 및 명란덮밥 후 귀국', 
        '4-6': '<br>1DAY: 하카타 및 텐진 시내 중심 투어<br>2DAY: 유후인으로 이동하여 긴린코 호수 산책 및 료칸 가이세키/온천 1박<br>3DAY: 벳푸 지옥온천 순례 및 해산물 먹방<br>4DAY: 후쿠오카 복귀 후 모모치 해변 야경 및 후쿠오카 타워', 
        '7-14': '<br>1DAY~3DAY: 후쿠오카 시내 쇼핑 및 미식<br>4DAY~6DAY: 나가사키 및 하우스텐보스 이국적인 테마파크 투어<br>7DAY: 유후인 료칸 힐링 후 귀국' 
      }
    }
  },
  {
    id: 'i13', name: '도쿄, 일본 (Tokyo)', location: 'international', flight: 'short', duration: ['2-3', '4-6', '7-14'], style: ['city', 'shopping', 'culture'], bestSeasons: ['spring', 'autumn'], image: 'https://picsum.photos/seed/i13/800/600', description: '현대와 전통이 공존하는 메가시티. 끝없는 쇼핑과 트렌드의 중심.',
    quickInfo: { months: '3월~5월, 9~11월', flight: '2시간 20분 직항', visa: '무비자 90일', voltage: '110V', temp: { spring: '15℃', summer: '27℃', autumn: '18℃', winter: '6℃' } },
    details: {
      spots: '시부야 스크램블, 신주쿠, 디즈니랜드, 도쿄 타워', food: '스시, 소바, 몬자야키, 각종 디저트', hotel: '신주쿠 워싱턴 호텔, 호시노 리조트 OMO5, 안다즈 도쿄, 게이오 플라자', shopping: '디즈니랜드 굿즈, 로이스 초콜릿, 도쿄 바나나, 넘버슈가 수제 캐러멜, 하라주쿠 빈티지 의류',
      weatherDesc: { spring: '벚꽃이 만발하는 쾌적한 날씨입니다.', summer: '매우 무덥고 습하며 8월엔 태풍이 올 수 있습니다.', autumn: '선선한 바람과 함께 공원의 단풍이 아름다운 시기입니다.', winter: '맑은 날이 많아 후지산이 잘 보이고 온화합니다.' },
      courses: { 
        '2-3': '<br>1DAY: 신주쿠/시부야 스크램블 교차로 야경 및 오모이데요코초<br>2DAY: 아사쿠사 센소지 전통 체험 -> 도쿄 스카이트리<br>3DAY: 하라주쿠 및 오모테산도 카페거리 후 귀국', 
        '4-6': '<br>1DAY: 시부야 및 하라주쿠 트렌디 쇼핑 투어<br>2DAY: 도쿄 디즈니랜드/디즈니씨 하루 종일 즐기기<br>3DAY: 오다이바 건담 베이스 및 팀랩 플래닛 전시<br>4DAY: 아키하바라 애니메이션 성지 순례 및 우에노 공원<br>5DAY: 긴자 명품 거리 및 츠키지 장외시장 스시', 
        '7-14': '<br>1DAY~4DAY: 도쿄 시내 핵심 및 디즈니랜드 완벽 정복<br>5DAY~6DAY: 하코네 온천 료칸 1박 및 후지산 뷰 감상<br>7DAY: 요코하마 항구도시 산책 및 차이나타운 먹방 후 귀국' 
      }
    }
  },
  {
    id: 'i14', name: '삿포로, 일본 (Sapporo)', location: 'international', flight: 'short', duration: ['2-3', '4-6', '7-14'], style: ['nature', 'food', 'relaxation'], bestSeasons: ['winter', 'summer'], image: 'https://picsum.photos/seed/i14/800/600', description: '겨울엔 끝없는 설경, 여름엔 보랏빛 라벤더가 가득한 홋카이도.',
    quickInfo: { months: '7~8월, 12~2월', flight: '2시간 40분 직항', visa: '무비자 90일', voltage: '110V', temp: { spring: '9℃', summer: '21℃', autumn: '11℃', winter: '-3℃' } },
    details: {
      spots: '오도리 공원, 비에이/후라노, 조잔케이 온천, 오타루 운하', food: '칭기즈칸(양고기), 수프 카레, 삿포로 맥주, 털게', hotel: '삿포로 그랜드 호텔, 게이오 플라자 호텔 삿포로, 오타루 료칸', shopping: '시로이 고이비토(화이트 초콜릿 과자), 로이스 초콜릿, 르타오 치즈케이크, 홋카이도 한정 멜론 젤리',
      weatherDesc: { spring: '늦게까지 쌀쌀하며 5월에야 벚꽃이 핍니다.', summer: '습도가 낮고 25도를 넘지 않는 쾌적한 여름 피서지입니다!', autumn: '일찍 가을이 찾아오며 서늘합니다.', winter: '아름다운 눈이 끝없이 내리는 겨울 왕국, 스키와 눈 축제 시즌입니다.' },
      courses: { 
        '2-3': '<br>1DAY: 삿포로 시내 오도리 공원 및 삿포로 맥주 박물관, 징기스칸 저녁<br>2DAY: 오타루 당일치기 (오르골당, 오타루 운하 야경)<br>3DAY: 수프 카레 점심 식사 후 신치토세 공항 로이스 초콜릿 월드', 
        '4-6': '<br>1DAY: 삿포로 시내 중심 및 모이와야마 전망대 야경<br>2DAY: 비에이/후라노 일일 버스 투어 (여름엔 팜토미타 라벤더, 겨울엔 크리스마스 트리)<br>3DAY: 오타루 운하 및 유리공방 산책<br>4DAY: 조잔케이 온천 당일치기 힐링<br>5DAY: 니조 시장에서 해산물 덮밥 먹방 후 귀국', 
        '7-14': '<br>1DAY~3DAY: 삿포로, 비에이, 오타루 기본 코스<br>4DAY~5DAY: 노보리베츠 지옥계곡 및 고급 료칸 숙박<br>6DAY~7DAY: 도야 호수 유람선 및 하코다테 세계 3대 야경 감상' 
      }
    }
  },
  {
    id: 'i3', name: '타이베이, 대만 (Taipei)', location: 'international', flight: 'short', duration: ['2-3', '4-6', '7-14'], style: ['food', 'culture', 'nightlife'], bestSeasons: ['spring', 'autumn', 'winter'], image: 'https://picsum.photos/seed/i3/800/600', description: '다채로운 길거리 음식과 지우펀의 야경, 친절한 사람들이 있는 곳.',
    quickInfo: { months: '10월~4월', flight: '2시간 30분 직항', visa: '무비자 90일', voltage: '110V', temp: { spring: '22℃', summer: '30℃', autumn: '25℃', winter: '16℃' } },
    details: {
      spots: '타이베이 101, 스라린 야시장, 지우펀, 예류', food: '우육면, 딤섬, 망고 빙수, 버블티', hotel: '리젠트 타이베이, 코스모스 호텔, 암바 타이베이, 그랜드 하얏트', shopping: '펑리수(파인애플 빵), 누가크래커, 달리 치약, 구미 초코볼, 미미크래커',
      weatherDesc: { spring: '비가 종종 내리지만 많이 덥지 않아 여행하기 적당합니다.', summer: '매우 덥고 습하며 태풍 주의가 필요합니다.', autumn: '선선해져 쾌적하게 여행할 수 있는 최고의 계절입니다.', winter: '선선하여 도보 여행과 따뜻한 우육면을 즐기기 완벽합니다.' },
      courses: { 
        '2-3': '<br>1DAY: 중정기념당 -> 타이베이 101 전망대 -> 스린 야시장<br>2DAY: 예스진지(예류, 스펀, 지우펀) 택시 투어<br>3DAY: 시먼딩 쇼핑 및 곱창국수 맛보기 후 귀국', 
        '4-6': '<br>1DAY: 타이베이 101 주변 및 동취 핫플<br>2DAY: 예스진지 택시 투어<br>3DAY: 단수이 일몰 및 말할 수 없는 비밀 촬영지<br>4DAY: 신베이터우 지열곡 온천 체험 및 단타이펑 딤섬<br>5DAY: 화산 1914 문화창의원구 인생샷', 
        '7-14': '<br>1DAY~4DAY: 타이베이 시내 및 근교 완벽 투어<br>5DAY: 타이중 이동 및 르웨탄 호수<br>6DAY: 가오슝 롄츠탄 및 보얼예술특구<br>7DAY: 컨딩의 아름다운 해변 휴양 후 귀국' 
      }
    }
  },
  {
    id: 'i15', name: '홍콩 (Hong Kong)', location: 'international', flight: 'short', duration: ['2-3', '4-6', '7-14'], style: ['city', 'shopping', 'food'], bestSeasons: ['autumn', 'winter'], image: 'https://picsum.photos/seed/i15/800/600', description: '백만불짜리 야경과 쇼핑, 딤섬의 천국. 동서양의 조화.',
    quickInfo: { months: '10월~3월', flight: '3시간 30분 직항', visa: '무비자 90일', voltage: '220V', temp: { spring: '23℃', summer: '29℃', autumn: '25℃', winter: '17℃' } },
    details: {
      spots: '빅토리아 피크 야경, 침사추이 하버시티, 디즈니랜드, 소호 거리', food: '딤섬, 완탕면, 에그타르트, 밀크티', hotel: '페닌슐라 홍콩, 리츠칼튼 홍콩, 샹그릴라, 구룡 Harbour Grand', shopping: '제니 베이커리 쿠키, 립톤 밀크티, 기화병가, 흑진주 마스크팩, 타이거 밤(호랑이 연고)',
      weatherDesc: { spring: '안개가 잦고 비가 올 수 있습니다.', summer: '매우 덥고 습하며 에어컨 냉방병에 주의해야 합니다.', autumn: '맑고 선선하여 야외 활동 및 야경 감상에 최적입니다.', winter: '한국의 가을 날씨로 가벼운 자켓을 입고 다니기 좋습니다.' },
      courses: { 
        '2-3': '<br>1DAY: 센트럴 소호 거리 미드레벨 에스컬레이터 -> 란콰이퐁 야경<br>2DAY: 딤섬 점심식사 -> 빅토리아 피크 피크트램 탑승 및 야경<br>3DAY: 침사추이 하버시티 쇼핑 및 시계탑 -> 귀국', 
        '4-6': '<br>1DAY: 홍콩섬(센트럴, 소호, 란콰이퐁) 힙스터 투어<br>2DAY: 침사추이 하버뷰 및 스타의 거리, 몽콕 야시장<br>3DAY: 홍콩 디즈니랜드 동심의 세계로<br>4DAY: 마카오 당일치기 (페리 탑승) 세나도 광장 및 에그타르트<br>5DAY: 스탠리 마켓 및 리펄스 베이 유러피안 해변 산책', 
        '7-14': '<br>1DAY~4DAY: 홍콩/마카오 주요 명소 정복<br>5DAY: 란타우 섬 옹핑 360 케이블카 및 청동좌불상<br>6DAY: 드래곤스 백 하이킹 웅장한 자연 경관<br>7DAY: 마지막 쇼핑 스퍼트 및 애프터눈 티' 
      }
    }
  },
  {
    id: 'i10', name: '오키나와, 일본 (Okinawa)', location: 'international', flight: 'short', duration: ['2-3', '4-6', '7-14'], style: ['relaxation', 'nature', 'family'], bestSeasons: ['spring', 'summer', 'winter'], image: 'https://picsum.photos/seed/i10/800/600', description: '가깝게 만나는 에메랄드빛 바다. 여름 휴양으로 최고지만 9~10월 태풍은 조심하세요!',
    quickInfo: { months: '4월~6월', flight: '2시간 15분 직항', visa: '무비자 90일', voltage: '110V', temp: { spring: '22℃', summer: '28℃', autumn: '26℃', winter: '17℃' } },
    details: {
      spots: '츄라우미 수족관, 아메리칸 빌리지, 만자모, 코우리 대교', food: '오키나와 소바, 타코라이스, 오리온 맥주', hotel: '할레쿨라니 오키나와, 르네상스 리조트, 오리온 모토부', shopping: '자색 고구마 타르트, 친스코(전통 과자), 로이즈 오키나와 한정 흑당 초콜릿, 오리온 맥주 굿즈',
      weatherDesc: { spring: '해양 스포츠를 시작하기 좋은 쾌적한 날씨입니다.', summer: '햇볕이 강렬한 완벽 휴양 날씨입니다. (단, 8~9월 태풍 주의)', autumn: '가을 태풍 영향을 받을 수 있어 날씨 확인 필수입니다.', winter: '늦가을 날씨로 바다 수영은 어렵지만 렌터카 드라이브에 좋습니다.' },
      courses: { 
        '2-3': '<br>1DAY: 나하 공항 도착 후 렌터카 수령 -> 국제거리 오키나와 소바<br>2DAY: 아메리칸 빌리지 이국적인 풍경 및 선셋 비치<br>3DAY: 우미카지 테라스 (작은 그리스) 산책 후 귀국', 
        '4-6': '<br>1DAY: 남부 투어 (우미카지 테라스, 평화기념공원)<br>2DAY: 중부 (아메리칸 빌리지, 만자모 산책)<br>3DAY: 푸른 동굴 스노클링 및 스쿠버다이빙 체험<br>4DAY: 북부 츄라우미 수족관 고래상어 관람<br>5DAY: 코우리 대교 에메랄드빛 바다 드라이브', 
        '7-14': '<br>1DAY~4DAY: 오키나와 본섬 완벽 일주<br>5DAY: 국내선 환승하여 미야코지마 또는 이시가키지마 도착<br>6DAY: 스나야마 비치 및 낙도의 여유로운 풍경 감상<br>7DAY: 거북이와 스노클링 후 귀국' 
      }
    }
  },

  // International - Medium Flight (3-6 hours)
  {
    id: 'i16', name: '세부, 필리핀 (Cebu)', location: 'international', flight: 'medium', duration: ['2-3', '4-6', '7-14'], style: ['relaxation', 'nature', 'adventure'], bestSeasons: ['winter', 'spring'], image: 'https://picsum.photos/seed/i16/800/600', description: '가성비 넘치는 리조트 휴양과 호핑투어, 고래상어 스노클링.',
    quickInfo: { months: '12월~5월', flight: '4시간 30분 직항', visa: '무비자 30일', voltage: '220V', temp: { spring: '28℃', summer: '28℃', autumn: '28℃', winter: '27℃' } },
    details: {
      spots: '오슬롭 고래상어 투어, 모알보알 정어리떼, 막탄 섬 리조트', food: '알리망오(머드크랩), 레촌, 망고, 산미구엘 맥주', hotel: '샹그릴라 막탄 리조트, 제이파크 아일랜드, 크림슨 리조트', shopping: '7D 건망고, 조비스 바나나칩, 폰즈 진주크림, 비트레스 헤어 에센스, 코피코 커피',
      weatherDesc: { spring: '건기로 비가 적고 해가 쨍쨍하여 스노클링에 완벽합니다.', summer: '우기가 시작되어 스콜이 내리지만 종일 오지는 않습니다.', autumn: '태풍의 영향이 있을 수 있습니다.', winter: '습도가 낮아지는 건기 초입으로 최성수기입니다.' },
      courses: { 
        '2-3': '<br>1DAY: 막탄 섬 고급 리조트 체크인 후 수영장 힐링 및 알리망오 저녁식사<br>2DAY: 올랑고 섬 아일랜드 호핑투어 및 바다 낚시<br>3DAY: 전신 마사지 2시간 코스 후 아얄라몰 쇼핑 -> 귀국', 
        '4-6': '<br>1DAY: 세부 시티 야경 및 럭셔리 리조트 힐링<br>2DAY: 호핑투어 (날루수안, 힐루뚱안) 스노클링<br>3DAY: 오슬롭 고래상어 투어 및 투말록 폭포<br>4DAY: 캐녀닝 (가와산) 액티비티<br>5DAY: 세부 시티투어 (마젤란 십자가, 산페드로 요새) 및 쇼핑', 
        '7-14': '<br>1DAY~4DAY: 세부 남부(오슬롭/모알보알) 완벽 액티비티<br>5DAY: 항구에서 페리 타고 보홀 섬으로 이동<br>6DAY: 발리카삭 호핑투어 거북이 스노클링<br>7DAY: 알로나 비치 휴양 및 초콜릿 힐 투어' 
      }
    }
  },
  {
    id: 'i4', name: '다낭, 베트남 (Da Nang)', location: 'international', flight: 'medium', duration: ['2-3', '4-6', '7-14'], style: ['relaxation', 'food', 'family'], bestSeasons: ['spring', 'summer'], image: 'https://picsum.photos/seed/i4/800/600', description: '가성비 최고의 휴양지. 아름다운 해변과 저렴하고 맛있는 로컬 푸드.',
    quickInfo: { months: '2월~5월', flight: '4시간 40분 직항', visa: '무비자 45일', voltage: '220V', temp: { spring: '26℃', summer: '30℃', autumn: '26℃', winter: '22℃' } },
    details: {
      spots: '미케 해변, 바나힐 테마파크, 호이안 올드타운, 핑크 성당', food: '쌀국수, 반미, 분짜, 반세오, 다낭식 해산물', hotel: '인터컨티넨탈 다낭, 하얏트 리젠시, 빈펄 리조트, 푸라마 리조트', shopping: 'G7 커피, 아치카페(코코넛 커피), 체리쉬 망고 젤리, 캐슈넛, 라탄백(한시장)',
      weatherDesc: { spring: '건기가 시작되어 비가 적고 쾌적한 여행 최적기입니다.', summer: '매우 뜨거운 건기입니다. 한낮엔 호캉스를 추천합니다.', autumn: '우기가 시작되어 비가 잦으므로 우산/우비 필수입니다.', winter: '온도가 내려가 수영을 즐기기에는 물이 찰 수 있습니다.' },
      courses: { 
        '2-3': '<br>1DAY: 미케 해변 휴양 및 해산물 파티<br>2DAY: 한시장 쇼핑 및 핑크 성당, 콩카페(코코넛 커피)<br>3DAY: 롯데마트 쇼핑 및 마사지 후 귀국', 
        '4-6': '<br>1DAY: 다낭 시내 투어 및 미케 해변<br>2DAY: 바나힐 테마파크 골든 브릿지 감상<br>3DAY: 오행산(마블 마운틴) 관람 후 호이안 이동<br>4DAY: 호이안 올드타운 야경 및 소원배 탑승<br>5DAY: 안방 비치 휴양 및 전신 마사지', 
        '7-14': '<br>1DAY~4DAY: 다낭 및 호이안 완벽 마스터<br>5DAY: 하이반 패스를 넘어 베트남 옛 수도 후에(Hue)로 이동<br>6DAY: 후에 왕궁 및 티엔무 파고다 역사 투어<br>7DAY: 최고급 스파 리조트에서 마무리 힐링' 
      }
    }
  },
  {
    id: 'i17', name: '코타키나발루 (Kota Kinabalu)', location: 'international', flight: 'medium', duration: ['2-3', '4-6', '7-14'], style: ['nature', 'relaxation', 'romantic'], bestSeasons: ['spring', 'summer'], image: 'https://picsum.photos/seed/i17/800/600', description: '세계 3대 석양을 자랑하는 말레이시아의 청정 자연 휴양지.',
    quickInfo: { months: '3월~9월', flight: '5시간 10분 직항', visa: '무비자 90일', voltage: '240V', temp: { spring: '27℃', summer: '27℃', autumn: '27℃', winter: '27℃' } },
    details: {
      spots: '탄중아루 해변(선셋), 사피섬 스노클링, 반딧불이 투어', food: '바쿠테, 나시레막, 버터갈릭 크랩, 락사', hotel: '샹그릴라 탄중아루, 마젤란 수트라 하버, 르메르디앙', shopping: '알리까페, 카야잼, 사바 티, 멸치 과자, 보(BOH) 티',
      weatherDesc: { spring: '건기에 접어들어 맑은 날 멋진 석양을 볼 수 있습니다.', summer: '여름 휴가철 최고의 건기! 해양 스포츠에 완벽합니다.', autumn: '점차 우기로 넘어갑니다.', winter: '우기이긴 하지만 국지성 스콜이므로 여행이 불가능하진 않습니다.' },
      courses: { 
        '2-3': '<br>1DAY: 도착 후 시내 씨푸드 레스토랑 만찬<br>2DAY: 탄중아루 비치 세계 3대 선셋 감상 및 워터프론트 맥주 한잔<br>3DAY: 가야스트리트 선데이 마켓 및 마사지 후 귀국', 
        '4-6': '<br>1DAY: 리조트 수영장 힐링 및 블루 모스크 야경<br>2DAY: 툰쿠 압둘 라만 해양공원 (사피/마누칸 섬) 스노클링<br>3DAY: 반딧불이 투어 (나나문/동막골) 환상적인 맹그로브 숲<br>4DAY: 탄중아루 선셋 패들보드<br>5DAY: 시내 쇼핑몰 기념품 털기', 
        '7-14': '<br>1DAY~4DAY: 해양 스포츠 및 선셋 휴양 완전 정복<br>5DAY: 키나발루 산 국립공원 데사 젖소 농장 투어<br>6DAY: 포링 온천 캐노피 워크 및 유황 온천욕<br>7DAY: 시내 로컬 야시장 및 현지 미식 투어' 
      }
    }
  },
  {
    id: 'i5', name: '방콕, 태국 (Bangkok)', location: 'international', flight: 'medium', duration: ['2-3', '4-6', '7-14'], style: ['food', 'nightlife', 'shopping', 'culture'], bestSeasons: ['winter', 'spring'], image: 'https://picsum.photos/seed/i5/800/600', description: '화려한 사원과 끝없는 길거리 음식, 저렴한 마사지와 생동감 넘치는 도시.',
    quickInfo: { months: '11월~3월', flight: '5시간 50분 직항', visa: '무비자 90일', voltage: '220V', temp: { spring: '30℃', summer: '29℃', autumn: '28℃', winter: '27℃' } },
    details: {
      spots: '왕궁 및 왓 아룬, 카오산 로드, 아이콘시암, 짜뚜짝 주말 시장', food: '팟타이, 똠얌꿍, 푸팟퐁커리, 망고 스티키 라이스', hotel: '만다린 오리엔탈, 카펠라 방콕, 킴튼 말라이, 시암 켐핀스키', shopping: '야돔(코 뻥 뚫리는 약), 타이 타이거 연고, 태국실크(짐톰슨), 망고 비누, 나라야 가방',
      weatherDesc: { spring: '가장 덥지도 춥지도 않은 완벽한 날씨입니다. 4월에는 거대한 물 축제인 송끄란이 열립니다.', summer: '우기가 시작되어 소나기(스콜)가 내리지만 금방 그칩니다.', autumn: '늦가을부터 비가 줄어들며 건기로 접어듭니다.', winter: '습도/온도가 가장 낮아 쾌적한 최성수기입니다.' },
      courses: { 
        '2-3': '<br>1DAY: 카오산 로드 밤문화 즐기기 및 팟타이 야식<br>2DAY: 왓 아룬(새벽사원) 뷰 레스토랑 식사 및 타이 마사지<br>3DAY: 아이콘시암 쑥시암 쇼핑 후 공항', 
        '4-6': '<br>1DAY: 방콕 왕궁 및 에메랄드 사원 (왓 프라깨우)<br>2DAY: 아유타야 선셋 보트 투어 (아름다운 고대 유적)<br>3DAY: 짜뚜짝 주말 시장 대규모 쇼핑<br>4DAY: 파타야로 이동하여 꼬란 섬 스노클링<br>5DAY: 진리의 성전 관람 및 해산물 만찬', 
        '7-14': '<br>1DAY~4DAY: 방콕 도심의 화려함과 미식 완벽 섭렵<br>5DAY: 야간열차를 타고 태국 북부 치앙마이로 이동<br>6DAY: 도이수텝 사원 야경 및 님만해민 카페거리<br>7DAY: 코끼리 보호소 자원봉사 및 치앙마이 한달살기 감성 체험' 
      }
    }
  },
  {
    id: 'i6', name: '괌 (Guam)', location: 'international', flight: 'medium', duration: ['2-3', '4-6', '7-14'], style: ['relaxation', 'shopping', 'family'], bestSeasons: ['winter', 'spring'], image: 'https://picsum.photos/seed/i6/800/600', description: '태평양의 에메랄드빛 바다. 쇼핑과 해양 스포츠를 동시에 즐길 수 있는 휴양지.',
    quickInfo: { months: '12월~5월', flight: '4시간 20분 직항', visa: '무비자 45일(ESTA권장)', voltage: '110V', temp: { spring: '28℃', summer: '28℃', autumn: '28℃', winter: '27℃' } },
    details: {
      spots: '투몬 비치, 사랑의 절벽, 리티디안 해변, T 갤러리아', food: '바베큐 립, 차모로 로컬 음식, 스테이크', hotel: '두짓타니 괌 리조트, 츠바키 타워, 하얏트 리젠시 괌', shopping: '마카다미아 초콜릿, 호놀룰루 쿠키, 괌 한정 고디바, 타미힐피거/폴로 의류(아울렛), 바나나보트 선크림',
      weatherDesc: { spring: '맑고 청명한 하늘과 바다를 즐기기 가장 좋은 건기입니다.', summer: '스콜성 비가 자주 내리지만 물놀이엔 무리가 없습니다.', autumn: '태풍이 발생할 수 있으므로 일기예보 확인이 필수입니다.', winter: '습도가 낮아지고 선선한 무역풍이 불어옵니다.' },
      courses: { 
        '2-3': '<br>1DAY: 투몬 비치 스노클링 및 선셋 바베큐<br>2DAY: K마트 및 프리미어 아울렛 알짜 쇼핑<br>3DAY: 사랑의 절벽 전망대 감상 후 복귀', 
        '4-6': '<br>1DAY: 리조트 내 프라이빗 비치 및 워터파크 힐링<br>2DAY: 돌핀 크루즈 탑승하여 야생 돌고래 만나기<br>3DAY: 렌터카 오픈카 대여 후 남부 투어 (메리조 부두 등)<br>4DAY: 타자 워터파크 또는 샌드캐슬 매직쇼 관람<br>5DAY: 마이크로네시아 몰 쇼핑 스퍼트', 
        '7-14': '<br>1DAY~4DAY: 괌 중심가 투몬 베이 완전 정복<br>5DAY: 북부 정글 투어 및 리티디안 해변의 투명한 바다<br>6DAY: 스쿠버 다이빙 자격증 코스 또는 골프 라운딩<br>7DAY: 현지인 로컬 맛집 탐방 및 차모로 야시장' 
      }
    }
  },

  // International - Long Flight (> 6 hours)
  {
    id: 'i18', name: '싱가포르 (Singapore)', location: 'international', flight: 'long', duration: ['2-3', '4-6', '7-14'], style: ['city', 'food', 'family', 'shopping'], bestSeasons: ['summer', 'autumn'], image: 'https://picsum.photos/seed/i18/800/600', description: '가장 안전하고 깨끗한 미래 도시. 마리나 베이 샌즈와 환상적인 야경.',
    quickInfo: { months: '6월~10월', flight: '6시간 20분 직항', visa: '무비자 90일', voltage: '230V', temp: { spring: '27℃', summer: '27℃', autumn: '27℃', winter: '26℃' } },
    details: {
      spots: '마리나 베이 샌즈, 가든스 바이 더 베이, 유니버설 스튜디오(센토사)', food: '칠리크랩, 카야토스트, 바쿠테, 사테', hotel: '마리나 베이 샌즈, 플러튼 호텔, 래플스 호텔, 센토사 카펠라', shopping: 'TWG 찻잎, 바차(Bacha) 커피, 칠리크랩 소스, 카야잼, 찰스 앤 키스 가방',
      weatherDesc: { spring: '무덥고 비가 잦은 우기입니다.', summer: '비가 덜 내리고 쾌적해지는 건기 시즌입니다.', autumn: '맑은 날씨로 야경 감상 및 도보 여행에 좋습니다.', winter: '우기가 시작되며 다소 흐린 날이 많습니다.' },
      courses: { 
        '2-3': '<br>1DAY: 마리나 베이 샌즈 인피니티 풀 야경 및 카지노<br>2DAY: 가든스 바이 더 베이 슈퍼트리 쇼 및 칠리크랩 만찬<br>3DAY: 창이공항 쥬얼창이 폭포 구경 후 복귀', 
        '4-6': '<br>1DAY: 클락키 리버크루즈 야경 투어<br>2DAY: 센토사 섬 유니버설 스튜디오 및 루지<br>3DAY: 오차드 로드 명품 쇼핑 및 보타닉 가든 산책<br>4DAY: 리틀 인디아 및 아랍 스트리트 이국적 풍경<br>5DAY: 나이트 사파리 야생동물 탐험', 
        '7-14': '<br>1DAY~5DAY: 싱가포르 도시 탐험 완벽 스케줄<br>6DAY: 국경을 넘어 말레이시아 조호르바루 레고랜드 방문<br>7DAY: 빈탄/바탐 섬(인도네시아) 페리 이동 후 가성비 럭셔리 풀빌라 휴양' 
      }
    }
  },
  {
    id: 'i19', name: '발리, 인도네시아 (Bali)', location: 'international', flight: 'long', duration: ['2-3', '4-6', '7-14'], style: ['relaxation', 'nature', 'romantic'], bestSeasons: ['summer', 'autumn'], image: 'https://picsum.photos/seed/i19/800/600', description: '신들의 섬. 럭셔리 풀빌라와 요가, 서핑을 즐기는 평화로운 휴식처.',
    quickInfo: { months: '5월~9월', flight: '7시간 10분 직항', visa: '도착비자 30일', voltage: '220V', temp: { spring: '27℃', summer: '26℃', autumn: '27℃', winter: '27℃' } },
    details: {
      spots: '우붓 다랭이논(뜨갈랄랑), 짱구/스미냑 해변 서핑, 울루와뚜 사원', food: '나시고렝, 미고렝, 바비굴링, 사테', hotel: '아야나 리조트, 물리아 리조트, 알릴라 우붓, 카르마 칸다라', shopping: '엘립스 헤어 비타민, 야바(YAVA) 그래놀라, 루왁 커피, 센사티아 바디용품, 드림캐쳐(수공예품)',
      weatherDesc: { spring: '우기에서 건기로 넘어가는 시기로 여행하기 점점 좋아집니다.', summer: '습도가 낮고 선선한 바람이 부는 완벽한 건기입니다!', autumn: '여름과 같은 최적의 날씨입니다.', winter: '우기로 매일 비가 오며 고온 다습합니다.' },
      courses: { 
        '2-3': '<br>1DAY: 도착 후 짐바란 씨푸드 선셋 디너<br>2DAY: 스미냑 포테이토헤드 비치클럽 휴양<br>3DAY: 발리 스파 3시간 풀코스 후 아쉬운 복귀 (장거리 비행 대비 체력 분배 요망)', 
        '4-6': '<br>1DAY: 꾸따 해변 서핑 강습 및 선셋<br>2DAY: 짱구 핫한 카페 투어 및 트렌디 비치클럽<br>3DAY: 우붓으로 이동하여 원숭이 사원 및 정글 풀빌라<br>4DAY: 뜨갈랄랑 계단식 논 발리스윙 인생샷<br>5DAY: 울루와뚜 사원 절벽 께짝댄스 공연', 
        '7-14': '<br>1DAY~4DAY: 남부 짱구/스미냑 트렌디한 휴양<br>5DAY~7DAY: 우붓 정글에서 요가와 완전한 힐링<br>8DAY~10DAY: 쾌속선을 타고 길리 트라왕안 섬으로 이동하여 거북이 스노클링 및 자전거 하이킹' 
      }
    }
  },
  {
    id: 'i8', name: '하와이, 미국 (Hawaii)', location: 'international', flight: 'long', duration: ['2-3', '4-6', '7-14'], style: ['relaxation', 'nature', 'adventure', 'romantic'], bestSeasons: ['spring', 'summer', 'autumn', 'winter'], image: 'https://picsum.photos/seed/i8/800/600', description: '지상 낙원. 완벽한 날씨, 아름다운 해변, 그리고 알로하 스피릿.',
    quickInfo: { months: '4월~10월', flight: '8시간 30분 직항', visa: 'ESTA 90일', voltage: '110V', temp: { spring: '25℃', summer: '27℃', autumn: '26℃', winter: '24℃' } },
    details: {
      spots: '와이키키 해변, 다이아몬드 헤드, 쿠알로아 랜치', food: '포케, 로코모코, 말라사다 도넛, 셰이브 아이스', hotel: '로열 하와이안, 할레쿨라니, 카할라 호텔, 포시즌스 코올리나', shopping: '호놀룰루 쿠키, 코나 커피, 마카다미아 넛츠, 코치/폴로(와이켈레 아울렛), 알로하 셔츠',
      weatherDesc: { spring: '가장 덥지도 춥지도 않은 완벽한 날씨입니다.', summer: '자외선이 강하지만 비가 오지 않아 해양 액티비티에 최고입니다.', autumn: '여름처럼 따뜻하고 쾌적합니다.', winter: '종종 소나기가 내리지만 알로하 셔츠를 입을 만큼 따뜻합니다.' },
      courses: { 
        '2-3': '<br>1DAY: 와이키키 비치 수영 및 알라모아나 센터 쇼핑<br>2DAY: 다이아몬드 헤드 오전 등반 및 레오나즈 베이커리<br>3DAY: 아쉬움을 뒤로한 채 짧은 호놀룰루 공항 귀국길', 
        '4-6': '<br>1DAY: 와이키키 해변 선셋 세일링 요트<br>2DAY: 하나우마 베이 열대어 스노클링<br>3DAY: 오픈카 렌트하여 72번 국도 해안도로 드라이브 (마카푸우 포인트)<br>4DAY: 쿠알로아 랜치 ATV (쥬라기공원 촬영지)<br>5DAY: 와이켈레 프리미엄 아울렛 대박 쇼핑', 
        '7-14': '<br>1DAY~5DAY: 오아후 섬 필수 코스 완전 정복<br>6DAY: 국내선 타고 마우이 섬 이동<br>7DAY: 할레아칼라 국립공원 구름 위 환상적인 일출<br>8DAY~10DAY: 카아나팔리 해변 고급 리조트 힐링 및 몰로키니 분화구 스노클링' 
      }
    }
  },
  {
    id: 'i9', name: '시드니, 호주 (Sydney)', location: 'international', flight: 'long', duration: ['2-3', '4-6', '7-14'], style: ['city', 'nature', 'relaxation'], bestSeasons: ['winter'], image: 'https://picsum.photos/seed/i9/800/600', description: '오페라 하우스와 하버 브리지, 푸른 바다가 어우러진 남반구의 매력적인 도시.',
    quickInfo: { months: '10월~4월', flight: '10시간 30분 직항', visa: 'ETA 90일', voltage: '230V', temp: { spring: '18℃', summer: '23℃', autumn: '18℃', winter: '13℃' } },
    details: {
      spots: '오페라 하우스, 하버 브리지, 본다이 비치, 블루마운틴', food: '미트 파이, 피시 앤 칩스, 플랫 화이트, 캥거루 스테이크', hotel: '포시즌스 시드니, 샹그릴라 시드니, 파크 하얏트 시드니', shopping: '포포크림, 팀탐 초콜릿, 어그(UGG) 부츠, T2 찻잎, 판도라 쥬얼리(호주가 저렴)',
      weatherDesc: { spring: '한국의 가을 날씨로 선선합니다.', summer: '한국의 겨울 날씨로 다소 쌀쌀합니다.', autumn: '한국의 봄 날씨로 따뜻해집니다.', winter: '한국의 한겨울이 시드니의 한여름! 뜨거운 해변을 즐기기 완벽합니다.' },
      courses: { 
        '2-3': '<br>1DAY: 서큘러 키 오페라 하우스 및 하버브릿지 감상<br>2DAY: 본다이 비치 아이스버그 수영장 뷰<br>3DAY: 짧은 일정 속 록스 마켓 구경 후 귀국', 
        '4-6': '<br>1DAY: 시드니 오페라 하우스 내부 투어 및 천문대 선셋<br>2DAY: 페리 타고 타롱가 동물원 코알라 만나기<br>3DAY: 블루마운틴 국립공원 데이 투어 및 세자매봉<br>4DAY: 포트스테판 모래사막 썰매 및 돌고래 와칭<br>5DAY: 달링 하버 야경 및 고급 스테이크 하우스', 
        '7-14': '<br>1DAY~5DAY: 시드니 시내 및 근교 투어<br>6DAY: 국내선으로 멜버른 이동<br>7DAY: 세계에서 가장 아름다운 해안도로 그레이트 오션로드 투어<br>8DAY~10DAY: 멜버른 그래피티 골목 및 증기기관차 체험' 
      }
    }
  },
  {
    id: 'i20', name: '런던, 영국 (London)', location: 'international', flight: 'long', duration: ['2-3', '4-6', '7-14'], style: ['history', 'culture', 'city'], bestSeasons: ['summer', 'spring'], image: 'https://picsum.photos/seed/i20/800/600', description: '신사의 나라. 빅벤과 타워브리지, 해리포터의 마법이 살아 숨 쉬는 곳.',
    quickInfo: { months: '5월~9월', flight: '14시간 직항', visa: '무비자 6개월', voltage: '230V', temp: { spring: '10℃', summer: '18℃', autumn: '11℃', winter: '5℃' } },
    details: {
      spots: '빅벤, 런던 아이, 대영 박물관, 타워 브리지, 버킹엄 궁전', food: '피시 앤 칩스, 애프터눈 티, 선데이 로스트', hotel: '사보이 호텔, 리츠 런던, 더 샤드 샹그릴라, 시티오브런던 부티크 호텔', shopping: '조말론 향수(영국 런던 본점), 포트넘 앤 메이슨 홍차, 해리포터 굿즈, 버버리 의류(비스터 빌리지)',
      weatherDesc: { spring: '꽃이 피기 시작하지만 변덕스러운 비가 잦습니다.', summer: '해가 길어 관광하기 가장 좋은 쾌적한 계절입니다.', autumn: '우중충하지만 트렌치코트가 어울리는 가을 분위기입니다.', winter: '해가 오후 4시면 지고 춥지만, 화려한 크리스마스 장식이 아름답습니다.' },
      courses: { 
        '2-3': '<br>1DAY: 빅벤, 런던 아이, 웨스트민스터 사원 핵심 찍기<br>2DAY: 타워 브리지 야경 및 런던 브리지<br>3DAY: 애프터눈 티 타임 후 급한 귀국길', 
        '4-6': '<br>1DAY: 버킹엄 궁전 근위병 교대식 및 하이드 파크 산책<br>2DAY: 대영 박물관(대영도서관) 관람 및 코벤트 가든<br>3DAY: 해리포터 스튜디오 런던 (사전 예약 필수)<br>4DAY: 타워브리지, 버러 마켓에서 현지식 점심<br>5DAY: 소호 및 피카딜리 서커스 쇼핑, 뮤지컬 레미제라블 관람', 
        '7-14': '<br>1DAY~5DAY: 런던 시내 명소 정복<br>6DAY: 옥스퍼드 대학교 및 코츠월드 목가적 마을 투어<br>7DAY: 세븐 시스터즈 백색 절벽 하이킹<br>8DAY~10DAY: 유로스타를 타고 파리로 넘어가 낭만적인 에펠탑까지 감상하는 2개국 여행' 
      }
    }
  },
  {
    id: 'i7', name: '파리, 프랑스 (Paris)', location: 'international', flight: 'long', duration: ['2-3', '4-6', '7-14'], style: ['culture', 'history', 'shopping', 'romantic'], bestSeasons: ['spring', 'summer', 'autumn'], image: 'https://picsum.photos/seed/i7/800/600', description: '에펠탑과 루브르 박물관, 낭만적인 센 강변을 거니는 유럽 여행의 로망.',
    quickInfo: { months: '5월~9월', flight: '14시간 직항', visa: '무비자 90일', voltage: '230V', temp: { spring: '12℃', summer: '20℃', autumn: '13℃', winter: '5℃' } },
    details: {
      spots: '에펠탑, 루브르 박물관, 몽마르트르 언덕, 베르사유 궁전', food: '크루아상, 마카롱, 에스카르고, 스테이크, 와인', hotel: '포시즌스 조르주 생크, 플라자 아테네, 리츠 파리, 풀만 파리 에펠', shopping: '메르시(Merci) 팔찌, 몽쥬약국 화장품(눅스 오일, 꼬달리), 마리아쥬 프레르 홍차, 마카롱(피에르 에르메)',
      weatherDesc: { spring: '꽃이 피며 낭만적인 분위기가 절정입니다. 아침저녁엔 쌀쌀합니다.', summer: '해가 밤 10시까지 떠있어 관광하기 좋으나 폭염 주의.', autumn: '선선한 가을로 샹젤리제 거리를 걷기 좋습니다.', winter: '비가 자주 오고 우중충하지만 로맨틱한 연말 분위기를 즐길 수 있습니다.' },
      courses: { 
        '2-3': '<br>1DAY: 에펠탑 뷰 포인트(트로카데로) 사진 촬영 및 센 강 바토무슈 야경<br>2DAY: 루브르 박물관 모나리자 관람<br>3DAY: 마카롱 한입 먹고 공항으로 이동', 
        '4-6': '<br>1DAY: 에펠탑 -> 개선문 -> 샹젤리제 거리 쇼핑<br>2DAY: 루브르 박물관 -> 튈르리 정원 힐링<br>3DAY: 몽마르트르 언덕 사크레쾨르 성당 -> 마레지구 부티크 쇼핑<br>4DAY: 화려한 베르사유 궁전 당일치기<br>5DAY: 오르세 미술관 인상파 작품 감상 및 미슐랭 파인다이닝', 
        '7-14': '<br>1DAY~5DAY: 파리 시내 낭만 투어<br>6DAY: 신비로운 해상 수도원 몽생미셸 야경 투어<br>7DAY: 떼제베(TGV)를 타고 남프랑스(니스)로 이동<br>8DAY~10DAY: 지중해의 푸른 바다와 칸, 모나코를 잇는 렌터카 드라이브' 
      }
    }
  },
  {
    id: 'i11', name: '스위스 (Switzerland)', location: 'international', flight: 'long', duration: ['2-3', '4-6', '7-14'], style: ['nature', 'relaxation', 'adventure'], bestSeasons: ['summer'], image: 'https://picsum.photos/seed/i11/800/600', description: '무더운 여름 유럽에서 시원하게 알프스 대자연을 즐길 수 있는 최고의 선택지.',
    quickInfo: { months: '6월~9월', flight: '13시간 30분 직항', visa: '무비자 90일', voltage: '230V', temp: { spring: '10℃', summer: '18℃', autumn: '11℃', winter: '0℃' } },
    details: {
      spots: '인터라켄(융프라우), 체르마트(마테호른), 그린델발트', food: '치즈 폰듀, 뢰스티, 스위스 초콜릿', hotel: '빅토리아 융프라우, 캠브리안 호텔(아델보덴), 체르마트 리조트', shopping: '린트(Lindt) 초콜릿, 맥가이버 칼(빅토리녹스), 캄블리 과자, 스위스 시계',
      weatherDesc: { spring: '눈이 아직 녹지 않아 하이킹 루트가 제한적일 수 있습니다.', summer: '하이킹하기 가장 좋은 최적기! 유럽 폭염 속에서도 시원하고 쾌적합니다.', autumn: '단풍이 물들지만 빠르게 추워집니다.', winter: '알프스의 거대한 설산으로 변모하여 전 세계 스키어들이 몰려듭니다.' },
      courses: { 
        '2-3': '<br>1DAY: 취리히 공항 도착 후 인터라켄 이동<br>2DAY: 융프라우요흐 등반 및 컵라면 식사<br>3DAY: 숨가쁘게 공항 복귀 (권장하지 않음)', 
        '4-6': '<br>1DAY: 루체른 카펠교 산책 및 리기산 유람선<br>2DAY: 인터라켄으로 낭만 기차 이동 및 그린델발트 산책<br>3DAY: 융프라우요흐(Top of Europe) 빙하 감상<br>4DAY: 피르스트 액티비티 (짚라인, 마운틴 카트)<br>5DAY: 체르마트로 이동하여 황금 마테호른 일출 보기', 
        '7-14': '<br>1DAY~5DAY: 융프라우 및 마테호른 핵심 지역 하이킹<br>6DAY: 몽트뢰 시옹성 및 레만 호반 유람<br>7DAY: 베른 구시가지 및 장미공원 곰 동산<br>8DAY~10DAY: 스위스 트래블 패스로 이탈리아 국경 꼬모 호수까지 알프스 기차 종단' 
      }
    }
  },
  {
    id: 'i21', name: '뉴욕, 미국 (New York)', location: 'international', flight: 'long', duration: ['2-3', '4-6', '7-14'], style: ['city', 'culture', 'shopping', 'food'], bestSeasons: ['autumn', 'spring'], image: 'https://picsum.photos/seed/i21/800/600', description: '세계의 심장. 타임스퀘어와 센트럴파크, 브로드웨이 뮤지컬의 본고장.',
    quickInfo: { months: '9월~11월, 4~5월', flight: '14시간 직항', visa: 'ESTA 90일', voltage: '110V', temp: { spring: '13℃', summer: '24℃', autumn: '15℃', winter: '1℃' } },
    details: {
      spots: '타임스퀘어, 자유의 여신상, 센트럴 파크, 엠파이어 스테이트 빌딩', food: '뉴욕 피자, 베이글, 스테이크, 치즈케이크', hotel: '플라자 호텔, 세인트 레지스 뉴욕, 더 랭햄, 에이스 호텔', shopping: '자유의 여신상 굿즈, 슈프림(Supreme), 키엘 화장품, 랄프로렌(우드버리 아울렛), 첼시마켓 팻위치 브라우니',
      weatherDesc: { spring: '포근해진 날씨로 센트럴 파크에서 피크닉을 즐기기 좋습니다.', summer: '한국만큼 덥고 습하여 체력 소모가 큽니다.', autumn: '청명하고 맑은 가을 하늘을 자랑하는 뉴욕 최고의 여행 시즌입니다!', winter: '매우 춥지만 센트럴파크 스케이트장과 타임스퀘어 볼드랍 행사가 매력적입니다.' },
      courses: { 
        '2-3': '<br>1DAY: 타임스퀘어 야경<br>2DAY: 센트럴 파크 산책 및 MoMA 관람<br>3DAY: 브루클린 브릿지 걷기 후 복귀 (시차 적응 불가)', 
        '4-6': '<br>1DAY: 미드타운 (타임스퀘어, 록펠러 센터, 탑오브더락 전망대)<br>2DAY: 다운타운 (자유의 여신상 페리, 월스트리트 황소 동상)<br>3DAY: 브루클린 덤보 인생샷 및 브루클린 브릿지 건너기<br>4DAY: 센트럴 파크 피크닉 및 메트로폴리탄 미술관<br>5DAY: 브로드웨이 뮤지컬 관람 및 피터루거 스테이크 하우스', 
        '7-14': '<br>1DAY~6DAY: 맨해튼 구석구석 도보 투어 및 갤러리 탐방<br>7DAY: 우드버리 커먼 프리미엄 아울렛 종일 쇼핑<br>8DAY: 메가버스 타고 워싱턴 D.C 당일치기 (백악관, 링컨 기념관)<br>9DAY: 보스턴 당일치기 (하버드 대학교, 퀸시 마켓)' 
      }
    }
  },
  {
    id: 'i12', name: '우유니 사막, 볼리비아 (Uyuni)', location: 'international', flight: 'long', duration: ['2-3', '4-6', '7-14'], style: ['nature', 'adventure'], bestSeasons: ['winter'], image: 'https://picsum.photos/seed/i12/800/600', description: '직장인의 긴 연차를 100% 활용할 수 있는 지구 반대편의 초현실적인 소금 사막.',
    quickInfo: { months: '12월~3월 (우기)', flight: '25시간 이상 (경유)', visa: '도착비자 30일', voltage: '220V', temp: { spring: '10℃', summer: '12℃', autumn: '11℃', winter: '5℃' } },
    details: {
      spots: '우유니 소금 사막, 잉카와시 섬, 소금 호텔', food: '살테냐(만두), 야마 고기, 퀴노아 수프', hotel: '팔라시오 데 살 (소금 호텔), 크리스탈 사마냐, 호스탈(게스트하우스)', shopping: '알파카 인형, 마카 파우더, 안데스 소금, 잉카 문양 직물, 페루/볼리비아 전통 모자(추요)',
      weatherDesc: { spring: '건기에 접어들어 바닥이 쩍쩍 갈라진 사막을 볼 수 있습니다.', summer: '완전한 건기로 탁 트인 시야와 함께 원근법 사진을 찍기 최고입니다.', autumn: '건기에서 우기로 넘어가는 시기입니다.', winter: '우기로 빗물이 고여 거울처럼 하늘이 반사되는 기적 같은 풍경을 볼 수 있습니다.' },
      courses: { 
        '2-3': '남미 비행 시간(왕복 3~4일)만으로 일정이 끝나버립니다.', 
        '4-6': '비행기를 타다 휴가가 끝납니다. (우유니까지 편도 최소 30시간 이상 소요)', 
        '7-14': '<br>1DAY~2DAY: 남미 페루 리마/쿠스코로 이동<br>3DAY~4DAY: 쿠스코 고산 적응 및 마추픽추 신비의 잉카 유적<br>5DAY~6DAY: 볼리비아 라파즈 야간 버스 이동 및 우유니 도착<br>7DAY: 우유니 데이 투어 (원근법 사진 찍기)<br>8DAY: 우유니 선셋 및 스타라이트 투어 (은하수 배경 인생샷)<br>9DAY~10DAY: 긴 여정을 마치고 한국으로 귀국' 
      }
    }
  }
];
