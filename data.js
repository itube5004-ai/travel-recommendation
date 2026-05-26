const destinations = [
  // Domestic (Korea) - 8 destinations
  {
    id: 'd1', name: '제주도 (Jeju Island)', location: 'domestic', duration: ['1-3', '4-7'], style: ['relaxation', 'nature', 'food'], bestSeasons: ['spring', 'summer', 'autumn'], image: 'https://loremflickr.com/800/600/jeju,nature/all', description: '에메랄드빛 바다와 아름다운 오름, 맛있는 흑돼지와 해산물이 있는 환상의 섬.',
    quickInfo: { months: '4월~6월, 9~10월', flight: '청주공항 이용 (약 2.5시간)', visa: '국내 (해당없음)', voltage: '220V', temp: { spring: '15℃', summer: '26℃', autumn: '20℃', winter: '7℃' } },
    details: {
      spots: '성산일출봉, 우도, 애월 한담해안산책로, 사려니숲길', food: '흑돼지 구이, 고기국수, 갈치조림, 돔베고기', hotel: '그랜드 조선 제주, 파르나스 호텔, 해비치 리조트, 신라호텔',
      weatherDesc: { spring: '유채꽃이 만발하는 따뜻하고 포근한 날씨입니다. 여행하기 가장 좋습니다.', summer: '햇살이 뜨겁고 습도가 높지만, 해수욕을 즐기기 완벽합니다.', autumn: '선선한 바람과 은빛 억새밭이 장관을 이루는 쾌적한 날씨입니다.', winter: '육지보다는 따뜻하지만 바람이 많이 불어 체감온도가 낮을 수 있습니다.' },
      courses: { '1-3': '1일차: 애월 카페 투어 -> 2일차: 우도 방문 -> 3일차: 사려니숲길 및 동문시장', '4-7': '1일차: 서귀포 중문 -> 2일차: 한라산 영실코스 -> 3일차: 산방산 -> 4일차: 협재 해수욕장 -> 5일차: 우도 투어', '8+': '제주도 해안도로를 따라 오름과 숲길을 여유롭게 일주하는 한 달 살기 추천 코스.' }
    }
  },
  {
    id: 'd2', name: '부산 (Busan)', location: 'domestic', duration: ['1-3'], style: ['city', 'food', 'nightlife'], bestSeasons: ['summer', 'autumn'], image: 'https://loremflickr.com/800/600/busan,city/all', description: '해운대의 화려한 야경과 맛있는 밀면, 돼지국밥! 활기찬 해양 도시.',
    quickInfo: { months: '5월~6월, 9~11월', flight: 'SRT/KTX (약 2시간)', visa: '국내 (해당없음)', voltage: '220V', temp: { spring: '14℃', summer: '25℃', autumn: '19℃', winter: '6℃' } },
    details: {
      spots: '해운대 해수욕장, 광안대교 야경, 흰여울문화마을, 해동용궁사', food: '돼지국밥, 밀면, 씨앗호떡, 싱싱한 회와 조개구이', hotel: '시그니엘 부산, 파라다이스 호텔, 힐튼 아난티 코브, 아바니 센트럴',
      weatherDesc: { spring: '포근한 바닷바람을 맞으며 산책하기 좋은 날씨입니다.', summer: '해수욕 인파로 활기가 넘치며, 밤에는 시원한 바닷바람이 붑니다.', autumn: '부산국제영화제와 불꽃축제가 열리는 선선하고 맑은 여행 최적기입니다.', winter: '서울보다 따뜻하여 겨울 바다의 낭만을 즐기기에 훌륭합니다.' },
      courses: { '1-3': '1일차: 광안리 야경 -> 2일차: 해운대 해변열차 및 청사포 -> 3일차: 영도 흰여울문화마을 및 남포동', '4-7': '해운대 중심 관광 후 기장 카페 투어 및 송도 해상케이블카 체험', '8+': '기장부터 다대포까지 부산의 모든 해수욕장과 명소들을 섭렵하는 코스' }
    }
  },
  {
    id: 'd3', name: '강릉/속초 (Gangneung/Sokcho)', location: 'domestic', duration: ['1-3'], style: ['relaxation', 'food', 'nature'], bestSeasons: ['summer', 'winter'], image: 'https://loremflickr.com/800/600/sokcho,beach/all', description: '시원한 동해 바다와 설악산, 그리고 신선한 회와 닭강정.',
    quickInfo: { months: '7월~8월, 1~2월', flight: '자가용 (약 3.5시간)', visa: '국내 (해당없음)', voltage: '220V', temp: { spring: '13℃', summer: '23℃', autumn: '17℃', winter: '2℃' } },
    details: {
      spots: '설악산 케이블카, 안목해변 커피거리, 속초 중앙시장, 낙산사', food: '만석닭강정, 초당순두부, 오징어순대, 물회', hotel: '씨마크 호텔, 롯데리조트 속초, 세인트존스 호텔, 쏠비치 양양',
      weatherDesc: { spring: '맑은 동해 바다를 보며 드라이브하기 좋은 화창한 날씨입니다.', summer: '시원한 바다에 뛰어들기 가장 좋은 계절입니다. 타 지역보다 선선합니다.', autumn: '설악산의 오색 단풍을 구경하기 완벽한 선선하고 맑은 날씨입니다.', winter: '눈 덮인 설악산과 차갑고 투명한 겨울 바다의 감성을 느낄 수 있습니다.' },
      courses: { '1-3': '1일차: 속초 중앙시장 -> 2일차: 설악산 등반 -> 3일차: 강릉 안목해변', '4-7': '속초 집중 투어 후 양양 서피비치를 거쳐 강릉 정동진까지 이어지는 코스', '8+': '고성-속초-양양-강릉-동해-삼척을 아우르는 7번 국도 완벽 일주 드라이브!' }
    }
  },
  {
    id: 'd4', name: '경주 (Gyeongju)', location: 'domestic', duration: ['1-3', '4-7'], style: ['history', 'culture', 'relaxation'], bestSeasons: ['spring', 'autumn'], image: 'https://loremflickr.com/800/600/gyeongju,temple/all', description: '천년의 역사가 숨 쉬는 곳. 황리단길의 트렌디함과 고즈넉한 한옥의 조화.',
    quickInfo: { months: '4월~5월, 9~10월', flight: 'SRT/KTX (약 1.5시간)', visa: '국내 (해당없음)', voltage: '220V', temp: { spring: '14℃', summer: '25℃', autumn: '18℃', winter: '3℃' } },
    details: {
      spots: '불국사, 동궁과 월지(안압지), 대릉원, 황리단길', food: '황남빵, 교리김밥, 떡갈비 정식, 순두부 짬뽕', hotel: '라한셀렉트 경주, 힐튼 경주, 소노벨 경주, 한옥 펜션(황남관)',
      weatherDesc: { spring: '벚꽃이 만개하여 핑크빛으로 물든 낭만적인 풍경을 자랑합니다.', summer: '분지 지형이라 햇볕이 뜨겁습니다. 한낮에는 시원한 실내 코스를 추천합니다.', autumn: '핑크뮬리와 단풍이 절정을 이루는 최고의 여행 시즌입니다.', winter: '조용하고 고즈넉한 겨울 한옥의 정취를 느낄 수 있으나 다소 춥습니다.' },
      courses: { '1-3': '1일차: 대릉원 및 황리단길 -> 2일차: 불국사 -> 3일차: 국립경주박물관 및 야경', '4-7': '경주 역사 유적 투어 후 경주월드와 감포 바다까지 다녀오는 코스', '8+': '신라 천년 역사 탐방 후 포항 인근 바다까지 여유롭게 다녀오는 힐링 코스' }
    }
  },
  {
    id: 'd5', name: '여수 (Yeosu)', location: 'domestic', duration: ['1-3'], style: ['relaxation', 'food', 'nightlife'], bestSeasons: ['spring', 'autumn'], image: 'https://loremflickr.com/800/600/yeosu,night/all', description: '밤바다의 낭만과 맛있는 남도 음식이 가득한 아름다운 항구 도시.',
    quickInfo: { months: '4월~5월, 9~11월', flight: 'SRT/KTX (약 2시간)', visa: '국내 (해당없음)', voltage: '220V', temp: { spring: '15℃', summer: '25℃', autumn: '19℃', winter: '5℃' } },
    details: {
      spots: '여수 해상케이블카, 오동도, 이순신광장, 향일암', food: '게장 백반, 돌산 갓김치, 서대회 무침, 여수 삼합', hotel: '소노캄 여수, 신라스테이 여수, 유탑 마리나 호텔, 히든베이 호텔',
      weatherDesc: { spring: '따뜻한 남쪽 바람이 불어 해상케이블카 타기 완벽한 날씨입니다.', summer: '바닷바람이 시원하지만 햇볕이 뜨겁습니다. 밤바다 산책이 좋습니다.', autumn: '선선한 바람과 맑은 하늘이 어우러져 야외 활동하기 최적기입니다.', winter: '남쪽이라 비교적 따뜻하며 향일암에서 해돋이를 보기 좋습니다.' },
      courses: { '1-3': '1일차: 이순신광장 맛집 -> 2일차: 오동도 및 해상케이블카 -> 3일차: 낭만포차 야경', '4-7': '여수 시내 관광 후 돌산도 깊숙한 곳의 풀빌라에서 휴식', '8+': '여수를 거점으로 순천, 남해까지 남해안 일대를 도는 로맨틱 코스' }
    }
  },
  {
    id: 'd6', name: '전주 (Jeonju)', location: 'domestic', duration: ['1-3'], style: ['history', 'culture', 'food'], bestSeasons: ['spring', 'autumn'], image: 'https://loremflickr.com/800/600/jeonju,hanok/all', description: '한국의 멋과 맛을 대표하는 가장 고풍스러운 한옥마을 투어.',
    quickInfo: { months: '4월~5월, 9~10월', flight: '자가용/고속버스 (약 1.5시간)', visa: '국내 (해당없음)', voltage: '220V', temp: { spring: '14℃', summer: '26℃', autumn: '18℃', winter: '2℃' } },
    details: {
      spots: '전주 한옥마을, 경기전, 전동성당, 자만벽화마을', food: '전주 비빔밥, 콩나물국밥, 피순대, 한옥마을 길거리 음식', hotel: '라한호텔 전주, 왕의지밀 한옥호텔, 엔브릿지 호텔, 한옥 스테이',
      weatherDesc: { spring: '한복을 입고 거리를 거닐기 가장 좋은 포근한 날씨입니다.', summer: '햇볕이 뜨거워 한복 체험이 다소 더울 수 있습니다.', autumn: '선선한 가을바람과 한옥의 처마가 완벽한 조화를 이룹니다.', winter: '눈 쌓인 한옥마을의 아름다운 절경을 볼 수 있습니다.' },
      courses: { '1-3': '1일차: 한옥마을 및 한복 체험 -> 2일차: 자만벽화마을 및 객리단길 카페 -> 3일차: 남부시장 야시장', '4-7': '전주 한옥마을 체험 후 완주 방면의 계곡과 힐링 카페 투어', '8+': '전북 지역 미식 투어(전주-군산-부안-고창) 완벽 일주' }
    }
  },
  {
    id: 'd7', name: '통영/거제 (Tongyeong/Geoje)', location: 'domestic', duration: ['1-3', '4-7'], style: ['nature', 'relaxation', 'food'], bestSeasons: ['spring', 'summer'], image: 'https://loremflickr.com/800/600/tongyeong,ocean/all', description: '한국의 나폴리라 불리는 아름다운 다도해와 푸른 바다의 절경.',
    quickInfo: { months: '3월~5월, 7~8월', flight: '자가용/고속버스 (약 3.5시간)', visa: '국내 (해당없음)', voltage: '220V', temp: { spring: '14℃', summer: '24℃', autumn: '19℃', winter: '5℃' } },
    details: {
      spots: '외도 보타니아, 바람의 언덕, 통영 케이블카, 동피랑 벽화마을', food: '충무김밥, 굴 국밥, 멍게비빔밥, 신선한 활어회', hotel: '거제 삼성호텔, 스탠포드 호텔앤리조트 통영, 소노캄 거제, 거제 벨버디어',
      weatherDesc: { spring: '동백꽃이 만발하고 바닷바람이 시원해 유람선을 타기 최고입니다.', summer: '푸른 몽돌해변에서 해수욕을 즐기고 해양 액티비티를 하기 좋습니다.', autumn: '하늘이 높고 맑아 케이블카 위에서 내려다보는 풍경이 일품입니다.', winter: '비교적 온화하며 따뜻한 굴 요리를 맛보기 좋은 제철입니다.' },
      courses: { '1-3': '1일차: 통영 동피랑 및 케이블카 -> 2일차: 거제 바람의 언덕 -> 3일차: 외도 보타니아 유람선', '4-7': '통영의 섬(소매물도 등) 트래킹과 거제의 럭셔리 리조트 휴식의 조화', '8+': '한려해상국립공원을 따라 남해군까지 이어지는 천혜의 자연 드라이브 코스' }
    }
  },
  {
    id: 'd8', name: '평창/강릉 (Pyeongchang)', location: 'domestic', duration: ['1-3', '4-7'], style: ['nature', 'relaxation', 'family'], bestSeasons: ['summer', 'winter'], image: 'https://loremflickr.com/800/600/pyeongchang,nature/all', description: '여름에는 시원한 고원지대, 겨울에는 최고의 스키 리조트를 즐기는 청정 자연.',
    quickInfo: { months: '7~8월, 12~2월', flight: '자가용 (약 2.5시간)', visa: '국내 (해당없음)', voltage: '220V', temp: { spring: '10℃', summer: '20℃', autumn: '12℃', winter: '-4℃' } },
    details: {
      spots: '대관령 양떼목장, 발왕산 케이블카, 월정사 전나무숲, 알펜시아 리조트', food: '한우 구이, 메밀 막국수, 산채 정식, 송어회', hotel: '인터컨티넨탈 알펜시아, 켄싱턴 호텔 평창, 용평 리조트, 휘닉스파크',
      weatherDesc: { spring: '산간 지역이라 늦게까지 쌀쌀하지만 꽃이 피기 시작합니다.', summer: '해발 700m 고원지대로 폭염에도 에어컨이 필요 없을 만큼 시원합니다!', autumn: '오대산의 붉은 단풍이 절경을 이루는 트래킹의 최적기입니다.', winter: '흰 눈으로 덮힌 겨울 왕국으로 스키어들에게 최고의 성수기입니다.' },
      courses: { '1-3': '1일차: 양떼목장 체험 -> 2일차: 발왕산 케이블카 탑승 -> 3일차: 월정사 전나무숲길', '4-7': '평창에서 산림욕을 즐긴 뒤 강릉으로 내려가 바다까지 즐기는 완벽 코스', '8+': '평창-정선-영월을 아우르는 강원도 내륙 산간 지방 완벽 힐링 투어' }
    }
  },

  // International - Short Flight (< 3 hours)
  {
    id: 'i1', name: '오사카, 일본 (Osaka)', location: 'international', flight: 'short', duration: ['1-3', '4-7'], style: ['food', 'city', 'shopping'], bestSeasons: ['spring', 'autumn', 'winter'], image: 'https://loremflickr.com/800/600/osaka,street/all', description: '먹다가 망한다는 미식의 도시. 화려한 도톤보리와 유니버셜 스튜디오.',
    quickInfo: { months: '3월~5월, 9~11월', flight: '1시간 40분 직항', visa: '무비자 90일', voltage: '110V', temp: { spring: '15℃', summer: '28℃', autumn: '19℃', winter: '6℃' } },
    details: {
      spots: '도톤보리, 유니버설 스튜디오 재팬, 오사카 성, 우메다 공중정원', food: '오코노미야키, 타코야키, 구시카츠, 라멘', hotel: '스위소텔 난카이 오사카, 칸데오 호텔 오사카 난바, 힐튼 오사카',
      weatherDesc: { spring: '벚꽃이 피어 아름답고 활동하기 쾌적한 날씨입니다.', summer: '매우 덥고 습하여 땀이 많이 납니다. 실내 쇼핑 위주 일정을 추천합니다.', autumn: '단풍이 물들고 날씨가 선선해져 도보 여행하기 가장 좋습니다.', winter: '비교적 온화하며 화려한 일루미네이션과 따뜻한 국물 요리를 즐기기 좋습니다.' },
      courses: { '1-3': '1일차: 도톤보리 미식 투어 -> 2일차: 유니버설 스튜디오 재팬 -> 3일차: 오사카 성 및 야경', '4-7': '오사카 핵심 관광 후 교토 및 고베 당일치기 추가', '8+': '간사이 지방 완벽 일주 (오사카-교토-고베-나라-와카야마)' }
    }
  },
  {
    id: 'i2', name: '후쿠오카, 일본 (Fukuoka)', location: 'international', flight: 'short', duration: ['1-3'], style: ['food', 'relaxation', 'shopping'], bestSeasons: ['spring', 'autumn', 'winter'], image: 'https://loremflickr.com/800/600/fukuoka,food/all', description: '가깝고 맛있는 도시. 돈코츠 라멘의 본고장과 따뜻한 온천 여행.',
    quickInfo: { months: '3월~5월, 9~11월', flight: '1시간 20분 직항', visa: '무비자 90일', voltage: '110V', temp: { spring: '16℃', summer: '28℃', autumn: '20℃', winter: '8℃' } },
    details: {
      spots: '다자이후 텐만구, 캐널시티 하카타, 유후인 온천 마을', food: '돈코츠 라멘, 모츠나베(곱창전골), 명란젓', hotel: '미야코 호텔 하카타, 그랜드 하얏트 후쿠오카, 니시테츠 그랜드 호텔',
      weatherDesc: { spring: '포근하고 화창하여 근교로 온천 및 벚꽃 여행을 떠나기 좋습니다.', summer: '덥고 습도가 높아 체력 소모가 빠릅니다.', autumn: '선선한 바람이 불어 야외 활동과 따뜻한 국물 요리를 즐기기 시작하기 좋습니다.', winter: '노천탕에서 힐링하기 가장 완벽한 계절입니다.' },
      courses: { '1-3': '1일차: 캐널시티 및 포장마차 -> 2일차: 유후인 당일치기 온천 -> 3일차: 다자이후', '4-7': '시내 쇼핑 2일 + 벳푸 및 유후인 료칸 숙박 2일', '8+': '북큐슈 렌터카 일주 코스로 소도시 온천들을 모두 돌아보세요.' }
    }
  },
  {
    id: 'i13', name: '도쿄, 일본 (Tokyo)', location: 'international', flight: 'short', duration: ['1-3', '4-7'], style: ['city', 'shopping', 'culture'], bestSeasons: ['spring', 'autumn'], image: 'https://loremflickr.com/800/600/tokyo,city/all', description: '현대와 전통이 공존하는 메가시티. 끝없는 쇼핑과 트렌드의 중심.',
    quickInfo: { months: '3월~5월, 9~11월', flight: '2시간 20분 직항', visa: '무비자 90일', voltage: '110V', temp: { spring: '15℃', summer: '27℃', autumn: '18℃', winter: '6℃' } },
    details: {
      spots: '시부야 스크램블, 신주쿠, 디즈니랜드, 도쿄 타워', food: '스시, 소바, 몬자야키, 각종 디저트', hotel: '신주쿠 워싱턴 호텔, 호시노 리조트 OMO5, 안다즈 도쿄, 게이오 플라자',
      weatherDesc: { spring: '벚꽃이 만발하는 쾌적한 날씨입니다.', summer: '매우 무덥고 습하며 8월엔 태풍이 올 수 있습니다.', autumn: '선선한 바람과 함께 공원의 단풍이 아름다운 시기입니다.', winter: '맑은 날이 많아 후지산이 잘 보이고 온화합니다.' },
      courses: { '1-3': '1일차: 신주쿠/시부야 -> 2일차: 아사쿠사 및 도쿄타워 -> 3일차: 오다이바', '4-7': '시내 투어와 함께 디즈니랜드 하루 종일 즐기기', '8+': '하코네 온천이나 요코하마 항구도시까지 여유롭게 방문' }
    }
  },
  {
    id: 'i14', name: '삿포로, 일본 (Sapporo)', location: 'international', flight: 'short', duration: ['4-7'], style: ['nature', 'food', 'relaxation'], bestSeasons: ['winter', 'summer'], image: 'https://loremflickr.com/800/600/sapporo,snow/all', description: '겨울엔 끝없는 설경, 여름엔 보랏빛 라벤더가 가득한 홋카이도.',
    quickInfo: { months: '7~8월, 12~2월', flight: '2시간 40분 직항', visa: '무비자 90일', voltage: '110V', temp: { spring: '9℃', summer: '21℃', autumn: '11℃', winter: '-3℃' } },
    details: {
      spots: '오도리 공원, 비에이/후라노, 조잔케이 온천, 오타루 운하', food: '칭기즈칸(양고기), 수프 카레, 삿포로 맥주, 털게', hotel: '삿포로 그랜드 호텔, 게이오 플라자 호텔 삿포로, 오타루 료칸',
      weatherDesc: { spring: '늦게까지 쌀쌀하며 5월에야 벚꽃이 핍니다.', summer: '습도가 낮고 25도를 넘지 않는 쾌적한 여름 피서지입니다!', autumn: '일찍 가을이 찾아오며 서늘합니다.', winter: '아름다운 눈이 끝없이 내리는 겨울 왕국, 스키와 눈 축제 시즌입니다.' },
      courses: { '1-3': '삿포로 시내 중심 및 오도리 공원', '4-7': '1일차: 삿포로 시내 -> 2~3일차: 비에이/후라노 버스투어 -> 4일차: 오타루 운하 야경', '8+': '노보리베츠, 도야호수 등 홋카이도 전역의 자연과 온천 만끽' }
    }
  },
  {
    id: 'i3', name: '타이베이, 대만 (Taipei)', location: 'international', flight: 'short', duration: ['1-3', '4-7'], style: ['food', 'culture', 'nightlife'], bestSeasons: ['spring', 'autumn', 'winter'], image: 'https://loremflickr.com/800/600/taipei,night/all', description: '다채로운 길거리 음식과 지우펀의 야경, 친절한 사람들이 있는 곳.',
    quickInfo: { months: '10월~4월', flight: '2시간 30분 직항', visa: '무비자 90일', voltage: '110V', temp: { spring: '22℃', summer: '30℃', autumn: '25℃', winter: '16℃' } },
    details: {
      spots: '타이베이 101, 스라린 야시장, 지우펀, 예류', food: '우육면, 딤섬, 망고 빙수, 버블티', hotel: '리젠트 타이베이, 코스모스 호텔, 암바 타이베이, 그랜드 하얏트',
      weatherDesc: { spring: '비가 종종 내리지만 많이 덥지 않아 여행하기 적당합니다.', summer: '매우 덥고 습하며 태풍 주의가 필요합니다.', autumn: '선선해져 쾌적하게 여행할 수 있는 최고의 계절입니다.', winter: '선선하여 도보 여행과 따뜻한 우육면을 즐기기 완벽합니다.' },
      courses: { '1-3': '1일차: 타이베이 101/야시장 -> 2일차: 예스진지 택시투어 -> 3일차: 단수이', '4-7': '시내 투어 + 신베이터우 온천 등 힐링 일정', '8+': '대만 고속철도를 이용한 타이베이-가오슝 전국 일주' }
    }
  },
  {
    id: 'i15', name: '홍콩 (Hong Kong)', location: 'international', flight: 'short', duration: ['1-3', '4-7'], style: ['city', 'shopping', 'food'], bestSeasons: ['autumn', 'winter'], image: 'https://loremflickr.com/800/600/hongkong,city/all', description: '백만불짜리 야경과 쇼핑, 딤섬의 천국. 동서양의 조화.',
    quickInfo: { months: '10월~3월', flight: '3시간 30분 직항', visa: '무비자 90일', voltage: '220V', temp: { spring: '23℃', summer: '29℃', autumn: '25℃', winter: '17℃' } },
    details: {
      spots: '빅토리아 피크 야경, 침사추이 하버시티, 디즈니랜드, 소호 거리', food: '딤섬, 완탕면, 에그타르트, 밀크티', hotel: '페닌슐라 홍콩, 리츠칼튼 홍콩, 샹그릴라, 구룡  Harbour Grand',
      weatherDesc: { spring: '안개가 잦고 비가 올 수 있습니다.', summer: '매우 덥고 습하며 에어컨 냉방병에 주의해야 합니다.', autumn: '맑고 선선하여 야외 활동 및 야경 감상에 최적입니다.', winter: '한국의 가을 날씨로 가벼운 자켓을 입고 다니기 좋습니다.' },
      courses: { '1-3': '1일차: 소호 거리/미드레벨 에스컬레이터 -> 2일차: 침사추이 쇼핑 및 야경 -> 3일차: 빅토리아 피크', '4-7': '홍콩 시내 3일 + 마카오 당일치기 페리 투어', '8+': '홍콩의 자연을 느낄 수 있는 드래곤스 백 하이킹 등 이색 코스 추가' }
    }
  },
  {
    id: 'i10', name: '오키나와, 일본 (Okinawa)', location: 'international', flight: 'short', duration: ['1-3', '4-7'], style: ['relaxation', 'nature', 'family'], bestSeasons: ['spring', 'summer', 'winter'], image: 'https://loremflickr.com/800/600/okinawa,beach/all', description: '가깝게 만나는 에메랄드빛 바다. 여름 휴양으로 최고지만 9~10월 태풍은 조심하세요!',
    quickInfo: { months: '4월~6월', flight: '2시간 15분 직항', visa: '무비자 90일', voltage: '110V', temp: { spring: '22℃', summer: '28℃', autumn: '26℃', winter: '17℃' } },
    details: {
      spots: '츄라우미 수족관, 아메리칸 빌리지, 만자모, 코우리 대교', food: '오키나와 소바, 타코라이스, 오리온 맥주', hotel: '할레쿨라니 오키나와, 르네상스 리조트, 오리온 모토부',
      weatherDesc: { spring: '해양 스포츠를 시작하기 좋은 쾌적한 날씨입니다.', summer: '햇볕이 강렬한 완벽 휴양 날씨입니다. (단, 8~9월 태풍 주의)', autumn: '가을 태풍 영향을 받을 수 있어 날씨 확인 필수입니다.', winter: '늦가을 날씨로 바다 수영은 어렵지만 렌터카 드라이브에 좋습니다.' },
      courses: { '1-3': '나하 국제거리 및 아메리칸 빌리지', '4-7': '남부, 중부, 북부를 매일 나눠 렌터카로 완벽하게 섭렵하는 일정', '8+': '본섬 외 미야코지마 등 낙도 섬 투어' }
    }
  },

  // International - Medium Flight (3-6 hours)
  {
    id: 'i16', name: '세부, 필리핀 (Cebu)', location: 'international', flight: 'medium', duration: ['4-7'], style: ['relaxation', 'nature', 'adventure'], bestSeasons: ['winter', 'spring'], image: 'https://loremflickr.com/800/600/cebu,beach/all', description: '가성비 넘치는 리조트 휴양과 호핑투어, 고래상어 스노클링.',
    quickInfo: { months: '12월~5월', flight: '4시간 30분 직항', visa: '무비자 30일', voltage: '220V', temp: { spring: '28℃', summer: '28℃', autumn: '28℃', winter: '27℃' } },
    details: {
      spots: '오슬롭 고래상어 투어, 모알보알 정어리떼, 막탄 섬 리조트', food: '알리망오(머드크랩), 레촌, 망고, 산미구엘 맥주', hotel: '샹그릴라 막탄 리조트, 제이파크 아일랜드, 크림슨 리조트',
      weatherDesc: { spring: '건기로 비가 적고 해가 쨍쨍하여 스노클링에 완벽합니다.', summer: '우기가 시작되어 스콜이 내리지만 종일 오지는 않습니다.', autumn: '태풍의 영향이 있을 수 있습니다.', winter: '습도가 낮아지는 건기 초입으로 최성수기입니다.' },
      courses: { '1-3': '시간이 짧아 리조트 내 휴식 및 마사지 집중', '4-7': '1일차: 리조트 휴식 -> 2일차: 아일랜드 호핑투어 -> 3일차: 오슬롭 고래상어 체험 -> 4일차: 쇼핑', '8+': '보홀 섬까지 페리로 이동하여 거북이와 함께 수영하기' }
    }
  },
  {
    id: 'i4', name: '다낭, 베트남 (Da Nang)', location: 'international', flight: 'medium', duration: ['4-7'], style: ['relaxation', 'food', 'family'], bestSeasons: ['spring', 'summer'], image: 'https://loremflickr.com/800/600/danang,beach/all', description: '가성비 최고의 휴양지. 아름다운 해변과 저렴하고 맛있는 로컬 푸드.',
    quickInfo: { months: '2월~5월', flight: '4시간 40분 직항', visa: '무비자 45일', voltage: '220V', temp: { spring: '26℃', summer: '30℃', autumn: '26℃', winter: '22℃' } },
    details: {
      spots: '미케 해변, 바나힐 테마파크, 호이안 올드타운, 핑크 성당', food: '쌀국수, 반미, 분짜, 반세오, 다낭식 해산물', hotel: '인터컨티넨탈 다낭, 하얏트 리젠시, 빈펄 리조트, 푸라마 리조트',
      weatherDesc: { spring: '건기가 시작되어 비가 적고 쾌적한 여행 최적기입니다.', summer: '매우 뜨거운 건기입니다. 한낮엔 호캉스를 추천합니다.', autumn: '우기가 시작되어 비가 잦으므로 우산/우비 필수입니다.', winter: '온도가 내려가 수영을 즐기기에는 물이 찰 수 있습니다.' },
      courses: { '1-3': '미케 해변 및 다낭 시내 투어', '4-7': '다낭 시내 관광 후 호이안으로 넘어가 올드타운 야경과 1박', '8+': '후에(베트남 옛 수도)까지 역사와 힐링 중부 완벽 투어' }
    }
  },
  {
    id: 'i17', name: '코타키나발루 (Kota Kinabalu)', location: 'international', flight: 'medium', duration: ['4-7'], style: ['nature', 'relaxation', 'romantic'], bestSeasons: ['spring', 'summer'], image: 'https://loremflickr.com/800/600/kotakinabalu,sunset/all', description: '세계 3대 석양을 자랑하는 말레이시아의 청정 자연 휴양지.',
    quickInfo: { months: '3월~9월', flight: '5시간 10분 직항', visa: '무비자 90일', voltage: '240V', temp: { spring: '27℃', summer: '27℃', autumn: '27℃', winter: '27℃' } },
    details: {
      spots: '탄중아루 해변(선셋), 사피섬 스노클링, 반딧불이 투어', food: '바쿠테, 나시레막, 버터갈릭 크랩, 락사', hotel: '샹그릴라 탄중아루, 마젤란 수트라 하버, 르메르디앙',
      weatherDesc: { spring: '건기에 접어들어 맑은 날 멋진 석양을 볼 수 있습니다.', summer: '여름 휴가철 최고의 건기! 해양 스포츠에 완벽합니다.', autumn: '점차 우기로 넘어갑니다.', winter: '우기이긴 하지만 국지성 스콜이므로 여행이 불가능하진 않습니다.' },
      courses: { '1-3': '짧은 비행이 아니므로 1-3일은 추천하지 않습니다.', '4-7': '1일차: 리조트 휴식 및 탄중아루 선셋 -> 2일차: 섬 호핑투어 -> 3일차: 반딧불이 투어 -> 4일차: 시내 관광', '8+': '키나발루 산 국립공원 트래킹 및 온천 체험 추가' }
    }
  },
  {
    id: 'i5', name: '방콕, 태국 (Bangkok)', location: 'international', flight: 'medium', duration: ['4-7'], style: ['food', 'nightlife', 'shopping', 'culture'], bestSeasons: ['winter', 'spring'], image: 'https://loremflickr.com/800/600/bangkok,temple/all', description: '화려한 사원과 끝없는 길거리 음식, 저렴한 마사지와 생동감 넘치는 도시.',
    quickInfo: { months: '11월~3월', flight: '5시간 50분 직항', visa: '무비자 90일', voltage: '220V', temp: { spring: '30℃', summer: '29℃', autumn: '28℃', winter: '27℃' } },
    details: {
      spots: '왕궁 및 왓 아룬, 카오산 로드, 아이콘시암, 짜뚜짝 주말 시장', food: '팟타이, 똠얌꿍, 푸팟퐁커리, 망고 스티키 라이스', hotel: '만다린 오리엔탈, 카펠라 방콕, 킴튼 말라이, 시암 켐핀스키',
      weatherDesc: { spring: '가장 덥습니다. 4월에는 거대한 물 축제인 송끄란이 열립니다.', summer: '우기가 시작되어 소나기(스콜)가 내리지만 금방 그칩니다.', autumn: '늦가을부터 비가 줄어들며 건기로 접어듭니다.', winter: '습도/온도가 가장 낮아 쾌적한 최성수기입니다.' },
      courses: { '1-3': '시내 핫플레이스와 마사지 집중', '4-7': '방콕 시내 3일 관광 후 파타야로 넘어가 해양 스포츠 즐기기', '8+': '치앙마이 방면으로 태국 북부 배낭여행 코스 결합' }
    }
  },
  {
    id: 'i6', name: '괌 (Guam)', location: 'international', flight: 'medium', duration: ['4-7'], style: ['relaxation', 'shopping', 'family'], bestSeasons: ['winter', 'spring'], image: 'https://loremflickr.com/800/600/guam,ocean/all', description: '태평양의 에메랄드빛 바다. 쇼핑과 해양 스포츠를 동시에 즐길 수 있는 휴양지.',
    quickInfo: { months: '12월~5월', flight: '4시간 20분 직항', visa: '무비자 45일(ESTA권장)', voltage: '110V', temp: { spring: '28℃', summer: '28℃', autumn: '28℃', winter: '27℃' } },
    details: {
      spots: '투몬 비치, 사랑의 절벽, 리티디안 해변, T 갤러리아', food: '바베큐 립, 차모로 로컬 음식, 스테이크', hotel: '두짓타니 괌 리조트, 츠바키 타워, 하얏트 리젠시 괌',
      weatherDesc: { spring: '맑고 청명한 하늘과 바다를 즐기기 가장 좋은 건기입니다.', summer: '스콜성 비가 자주 내리지만 물놀이엔 무리가 없습니다.', autumn: '태풍이 발생할 수 있으므로 일기예보 확인이 필수입니다.', winter: '습도가 낮아지고 선선한 무역풍이 불어옵니다.' },
      courses: { '1-3': '투몬 비치 휴양 및 시내 면세점 쇼핑', '4-7': '리조트 휴식, 돌핀 크루즈, 렌터카 남부 투어 및 쇼핑을 여유롭게', '8+': '북부 프라이빗 비치 탐험 및 골프 라운딩' }
    }
  },

  // International - Long Flight (> 6 hours)
  {
    id: 'i18', name: '싱가포르 (Singapore)', location: 'international', flight: 'long', duration: ['4-7'], style: ['city', 'food', 'family', 'shopping'], bestSeasons: ['summer', 'autumn'], image: 'https://loremflickr.com/800/600/singapore,city/all', description: '가장 안전하고 깨끗한 미래 도시. 마리나 베이 샌즈와 환상적인 야경.',
    quickInfo: { months: '6월~10월', flight: '6시간 20분 직항', visa: '무비자 90일', voltage: '230V', temp: { spring: '27℃', summer: '27℃', autumn: '27℃', winter: '26℃' } },
    details: {
      spots: '마리나 베이 샌즈, 가든스 바이 더 베이, 유니버설 스튜디오(센토사)', food: '칠리크랩, 카야토스트, 바쿠테, 사테', hotel: '마리나 베이 샌즈, 플러튼 호텔, 래플스 호텔, 센토사 카펠라',
      weatherDesc: { spring: '무덥고 비가 잦은 우기입니다.', summer: '비가 덜 내리고 쾌적해지는 건기 시즌입니다.', autumn: '맑은 날씨로 야경 감상 및 도보 여행에 좋습니다.', winter: '우기가 시작되며 다소 흐린 날이 많습니다.' },
      courses: { '1-3': '장거리 비행으로 부적합', '4-7': '1일차: 마리나베이샌즈 및 야경 -> 2일차: 센토사섬 유니버설 -> 3일차: 오차드로드 쇼핑 -> 4일차: 클락키 야경', '8+': '인접한 말레이시아 조호르바루 당일치기 추가' }
    }
  },
  {
    id: 'i19', name: '발리, 인도네시아 (Bali)', location: 'international', flight: 'long', duration: ['4-7', '8+'], style: ['relaxation', 'nature', 'romantic'], bestSeasons: ['summer', 'autumn'], image: 'https://loremflickr.com/800/600/bali,resort/all', description: '신들의 섬. 럭셔리 풀빌라와 요가, 서핑을 즐기는 평화로운 휴식처.',
    quickInfo: { months: '5월~9월', flight: '7시간 10분 직항', visa: '도착비자 30일', voltage: '220V', temp: { spring: '27℃', summer: '26℃', autumn: '27℃', winter: '27℃' } },
    details: {
      spots: '우붓 다랭이논(뜨갈랄랑), 짱구/스미냑 해변 서핑, 울루와뚜 사원', food: '나시고렝, 미고렝, 바비굴링, 사테', hotel: '아야나 리조트, 물리아 리조트, 알릴라 우붓, 카르마 칸다라',
      weatherDesc: { spring: '우기에서 건기로 넘어가는 시기로 여행하기 점점 좋아집니다.', summer: '습도가 낮고 선선한 바람이 부는 완벽한 건기입니다!', autumn: '여름과 같은 최적의 날씨입니다.', winter: '우기로 매일 비가 오며 고온 다습합니다.' },
      courses: { '1-3': '불가능', '4-7': '스미냑 비치클럽 2일 + 우붓 정글 요가 및 풀빌라 2일', '8+': '우붓-짱구-스미냑-울루와뚜를 거쳐 길리 섬까지 다녀오는 완벽한 한 달 살기 코스' }
    }
  },
  {
    id: 'i8', name: '하와이, 미국 (Hawaii)', location: 'international', flight: 'long', duration: ['8+', '4-7'], style: ['relaxation', 'nature', 'adventure', 'romantic'], bestSeasons: ['spring', 'summer', 'autumn', 'winter'], image: 'https://loremflickr.com/800/600/hawaii,resort/all', description: '지상 낙원. 완벽한 날씨, 아름다운 해변, 그리고 알로하 스피릿.',
    quickInfo: { months: '4월~10월', flight: '8시간 30분 직항', visa: 'ESTA 90일', voltage: '110V', temp: { spring: '25℃', summer: '27℃', autumn: '26℃', winter: '24℃' } },
    details: {
      spots: '와이키키 해변, 다이아몬드 헤드, 쿠알로아 랜치', food: '포케, 로코모코, 말라사다 도넛, 셰이브 아이스', hotel: '로열 하와이안, 할레쿨라니, 카할라 호텔, 포시즌스 코올리나',
      weatherDesc: { spring: '가장 덥지도 춥지도 않은 완벽한 날씨입니다.', summer: '자외선이 강하지만 비가 오지 않아 해양 액티비티에 최고입니다.', autumn: '여름처럼 따뜻하고 쾌적합니다.', winter: '종종 소나기가 내리지만 알로하 셔츠를 입을 만큼 따뜻합니다.' },
      courses: { '1-3': '불가능', '4-7': '와이키키 휴식, 하나우마베이 스노클링, 렌터카 노스쇼어 일주', '8+': '오아후 섬 + 마우이(할레아칼라 일출) 또는 빅아일랜드(화산국립공원) 2개 섬 일주' }
    }
  },
  {
    id: 'i9', name: '시드니, 호주 (Sydney)', location: 'international', flight: 'long', duration: ['8+'], style: ['city', 'nature', 'relaxation'], bestSeasons: ['winter'], image: 'https://loremflickr.com/800/600/sydney,opera/all', description: '오페라 하우스와 하버 브리지, 푸른 바다가 어우러진 남반구의 매력적인 도시.',
    quickInfo: { months: '10월~4월', flight: '10시간 30분 직항', visa: 'ETA 90일', voltage: '230V', temp: { spring: '18℃', summer: '23℃', autumn: '18℃', winter: '13℃' } },
    details: {
      spots: '오페라 하우스, 하버 브리지, 본다이 비치, 블루마운틴', food: '미트 파이, 피시 앤 칩스, 플랫 화이트, 캥거루 스테이크', hotel: '포시즌스 시드니, 샹그릴라 시드니, 파크 하얏트 시드니',
      weatherDesc: { spring: '한국의 가을 날씨로 선선합니다.', summer: '한국의 겨울 날씨로 다소 쌀쌀합니다.', autumn: '한국의 봄 날씨로 따뜻해집니다.', winter: '한국의 한겨울이 시드니의 한여름! 뜨거운 해변을 즐기기 완벽합니다.' },
      courses: { '1-3': '불가능', '4-7': '시드니 하버 관광 3일 + 블루마운틴 1일 + 본다이비치 1일', '8+': '시드니에서 멜버른(그레이트 오션로드)까지 호주 동부 해안 횡단 여행' }
    }
  },
  {
    id: 'i20', name: '런던, 영국 (London)', location: 'international', flight: 'long', duration: ['8+'], style: ['history', 'culture', 'city'], bestSeasons: ['summer', 'spring'], image: 'https://loremflickr.com/800/600/london,city/all', description: '신사의 나라. 빅벤과 타워브리지, 해리포터의 마법이 살아 숨 쉬는 곳.',
    quickInfo: { months: '5월~9월', flight: '14시간 직항', visa: '무비자 6개월', voltage: '230V', temp: { spring: '10℃', summer: '18℃', autumn: '11℃', winter: '5℃' } },
    details: {
      spots: '빅벤, 런던 아이, 대영 박물관, 타워 브리지, 버킹엄 궁전', food: '피시 앤 칩스, 애프터눈 티, 선데이 로스트', hotel: '사보이 호텔, 리츠 런던, 더 샤드 샹그릴라, 시티오브런던 부티크 호텔',
      weatherDesc: { spring: '꽃이 피기 시작하지만 변덕스러운 비가 잦습니다.', summer: '해가 길어 관광하기 가장 좋은 쾌적한 계절입니다.', autumn: '우중충하지만 트렌치코트가 어울리는 가을 분위기입니다.', winter: '해가 오후 4시면 지고 춥지만, 화려한 크리스마스 장식이 아름답습니다.' },
      courses: { '1-3': '불가능', '4-7': '런던 시내 핵심 랜드마크 및 대영박물관 관람, 해리포터 스튜디오 방문', '8+': '런던을 거점으로 옥스퍼드, 캠브리지, 코츠월드 근교 투어 및 유로스타로 파리 이동' }
    }
  },
  {
    id: 'i7', name: '파리, 프랑스 (Paris)', location: 'international', flight: 'long', duration: ['8+'], style: ['culture', 'history', 'shopping', 'romantic'], bestSeasons: ['spring', 'summer', 'autumn'], image: 'https://loremflickr.com/800/600/paris,eiffel/all', description: '에펠탑과 루브르 박물관, 낭만적인 센 강변을 거니는 유럽 여행의 로망.',
    quickInfo: { months: '5월~9월', flight: '14시간 직항', visa: '무비자 90일', voltage: '230V', temp: { spring: '12℃', summer: '20℃', autumn: '13℃', winter: '5℃' } },
    details: {
      spots: '에펠탑, 루브르 박물관, 몽마르트르 언덕, 베르사유 궁전', food: '크루아상, 마카롱, 에스카르고, 스테이크, 와인', hotel: '포시즌스 조르주 생크, 플라자 아테네, 리츠 파리, 풀만 파리 에펠',
      weatherDesc: { spring: '꽃이 피며 낭만적인 분위기가 절정입니다. 아침저녁엔 쌀쌀합니다.', summer: '해가 밤 10시까지 떠있어 관광하기 좋으나 폭염 주의.', autumn: '선선한 가을로 샹젤리제 거리를 걷기 좋습니다.', winter: '비가 자주 오고 우중충하지만 로맨틱한 연말 분위기를 즐길 수 있습니다.' },
      courses: { '1-3': '불가능', '4-7': '파리 시내 명소 섭렵 및 베르사유 궁전, 오르세 미술관', '8+': '파리를 거점으로 몽생미셸 당일치기 투어나 니스/모나코(남프랑스) 렌터카 여행 추가' }
    }
  },
  {
    id: 'i11', name: '스위스 (Switzerland)', location: 'international', flight: 'long', duration: ['8+'], style: ['nature', 'relaxation', 'adventure'], bestSeasons: ['summer'], image: 'https://loremflickr.com/800/600/switzerland,alps/all', description: '무더운 여름 유럽에서 시원하게 알프스 대자연을 즐길 수 있는 최고의 선택지.',
    quickInfo: { months: '6월~9월', flight: '13시간 30분 직항', visa: '무비자 90일', voltage: '230V', temp: { spring: '10℃', summer: '18℃', autumn: '11℃', winter: '0℃' } },
    details: {
      spots: '인터라켄(융프라우), 체르마트(마테호른), 그린델발트', food: '치즈 폰듀, 뢰스티, 스위스 초콜릿', hotel: '빅토리아 융프라우, 캠브리안 호텔(아델보덴), 체르마트 리조트',
      weatherDesc: { spring: '눈이 아직 녹지 않아 하이킹 루트가 제한적일 수 있습니다.', summer: '하이킹하기 가장 좋은 최적기! 유럽 폭염 속에서도 시원하고 쾌적합니다.', autumn: '단풍이 물들지만 빠르게 추워집니다.', winter: '알프스의 거대한 설산으로 변모하여 전 세계 스키어들이 몰려듭니다.' },
      courses: { '1-3': '불가능', '4-7': '루체른 - 인터라켄(융프라우) - 체르마트(마테호른) 기차 횡단', '8+': '스위스 트래블 패스를 이용해 몽트뢰, 베른 등 스위스 전역의 소도시와 호수 마을들을 완벽 일주' }
    }
  },
  {
    id: 'i21', name: '뉴욕, 미국 (New York)', location: 'international', flight: 'long', duration: ['8+'], style: ['city', 'culture', 'shopping', 'food'], bestSeasons: ['autumn', 'spring'], image: 'https://loremflickr.com/800/600/newyork,city/all', description: '세계의 심장. 타임스퀘어와 센트럴파크, 브로드웨이 뮤지컬의 본고장.',
    quickInfo: { months: '9월~11월, 4~5월', flight: '14시간 직항', visa: 'ESTA 90일', voltage: '110V', temp: { spring: '13℃', summer: '24℃', autumn: '15℃', winter: '1℃' } },
    details: {
      spots: '타임스퀘어, 자유의 여신상, 센트럴 파크, 엠파이어 스테이트 빌딩', food: '뉴욕 피자, 베이글, 스테이크, 치즈케이크', hotel: '플라자 호텔, 세인트 레지스 뉴욕, 더 랭햄, 에이스 호텔',
      weatherDesc: { spring: '포근해진 날씨로 센트럴 파크에서 피크닉을 즐기기 좋습니다.', summer: '한국만큼 덥고 습하여 체력 소모가 큽니다.', autumn: '청명하고 맑은 가을 하늘을 자랑하는 뉴욕 최고의 여행 시즌입니다!', winter: '매우 춥지만 센트럴파크 스케이트장과 타임스퀘어 볼드랍 행사가 매력적입니다.' },
      courses: { '1-3': '불가능', '4-7': '맨해튼 중심 관광 및 브로드웨이 뮤지컬 1편 관람, 덤보(브루클린) 야경', '8+': '맨해튼 구석구석 도보 투어 및 워싱턴/보스턴 메가버스 당일치기 추가' }
    }
  },
  {
    id: 'i12', name: '우유니 사막, 볼리비아 (Uyuni)', location: 'international', flight: 'long', duration: ['8+'], style: ['nature', 'adventure'], bestSeasons: ['winter'], image: 'https://loremflickr.com/800/600/uyuni,salt/all', description: '직장인의 긴 연차를 100% 활용할 수 있는 지구 반대편의 초현실적인 소금 사막.',
    quickInfo: { months: '12월~3월 (우기)', flight: '25시간 이상 (경유)', visa: '도착비자 30일', voltage: '220V', temp: { spring: '10℃', summer: '12℃', autumn: '11℃', winter: '5℃' } },
    details: {
      spots: '우유니 소금 사막, 잉카와시 섬, 소금 호텔', food: '살테냐(만두), 야마 고기, 퀴노아 수프', hotel: '팔라시오 데 살 (소금 호텔), 크리스탈 사마냐, 호스탈(게스트하우스)',
      weatherDesc: { spring: '건기에 접어들어 바닥이 쩍쩍 갈라진 사막을 볼 수 있습니다.', summer: '완전한 건기로 탁 트인 시야와 함께 원근법 사진을 찍기 최고입니다.', autumn: '건기에서 우기로 넘어가는 시기입니다.', winter: '우기로 빗물이 고여 거울처럼 하늘이 반사되는 기적 같은 풍경을 볼 수 있습니다.' },
      courses: { '1-3': '불가능', '4-7': '남미 대륙 이동 시간을 고려하면 불가능에 가깝습니다.', '8+': '최소 2주 일정을 잡아 페루 마추픽추와 묶어 다녀오는 국민 남미 배낭여행 코스 추천' }
    }
  }
];
