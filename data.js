const destinations = [
  // Domestic (Korea) - 30 destinations
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
  {
    id: 'd9', name: '단양 (Danyang)', location: 'domestic', duration: ['day', '2-3'], style: ['nature', 'adventure'], bestSeasons: ['spring', 'autumn'], image: 'https://picsum.photos/seed/d9/800/600', description: '짜릿한 패러글라이딩과 아름다운 남한강 도담삼봉의 비경을 품은 충북의 보석.',
    quickInfo: { months: '4월~6월, 9~11월', flight: '자가용 (약 1시간 30분)', visa: '국내 (해당없음)', voltage: '220V', temp: { spring: '12℃', summer: '24℃', autumn: '16℃', winter: '0℃' } },
    details: {
      spots: '도담삼봉, 만천하스카이워크, 온달관광지, 고수동굴', food: '마늘만두, 마늘순대, 쏘가리 매운탕, 떡갈비 정식', hotel: '소노문 단양, 단양관광호텔, 게스트하우스 팩토리',
      weatherDesc: { spring: '남한강을 따라 벚꽃길 드라이브와 따스한 봄바람을 즐기기 좋습니다.', summer: '계곡이 시원하지만 야외 패러글라이딩 시 자외선 차단에 유의하세요.', autumn: '도담삼봉과 산등성이 전체가 붉게 물들어 야외 활동 최적기입니다.', winter: '조용하고 한적한 남한강 눈꽃 드라이브의 낭만이 가득합니다.' },
      courses: { 
        'day': '<br>1DAY: 도담삼봉 산책 -> 만천하스카이워크 전망대 -> 구경시장 마늘요리 먹방', 
        '2-3': '<br>1DAY: 도담삼봉/석문 하이킹 -> 패러글라이딩 하늘 날기 -> 구경시장 야식<br>2DAY: 만천하스카이워크 스릴 체험 -> 고수동굴 탐험 -> 수양개빛터널 야경<br>3DAY: 잔도길 산책 및 카페산 마운틴 뷰 힐링 후 귀가' 
      }
    }
  },
  {
    id: 'd10', name: '담양 (Damyang)', location: 'domestic', duration: ['day', '2-3'], style: ['relaxation', 'nature', 'food'], bestSeasons: ['spring', 'summer'], image: 'https://picsum.photos/seed/d10/800/600', description: '울창한 대나무 숲길과 가슴 뻥 뚫리는 메타세쿼이아길, 그리고 풍성한 남도 식도락.',
    quickInfo: { months: '4월~6월, 9~10월', flight: '자가용 (약 2시간)', visa: '국내 (해당없음)', voltage: '220V', temp: { spring: '14℃', summer: '26℃', autumn: '18℃', winter: '2℃' } },
    details: {
      spots: '죽녹원, 메타세쿼이아길, 관방제림, 소쇄원', food: '담양 떡갈비, 대통밥, 국수거리 잔치국수, 죽순회', hotel: '메타프로방스 펜션, 언노운호텔, 담양 힐링 풀빌라',
      weatherDesc: { spring: '관방제림의 연둣빛 새잎과 따스한 봄바람을 걸으며 힐링하기 최적입니다.', summer: '죽녹원 대나무 숲속은 외부보다 2℃ 이상 낮아 시원한 청량감을 줍니다.', autumn: '메타세쿼이아 잎이 주황빛으로 터널을 이루는 로맨틱한 계절입니다.', winter: '눈 덮인 대나무 숲길의 고즈넉하고 맑은 겨울 정취를 만끽할 수 있습니다.' },
      courses: { 
        'day': '<br>1DAY: 죽녹원 산책 -> 관방제림 피크닉 -> 국수거리 점심 -> 메타세쿼이아 랜드', 
        '2-3': '<br>1DAY: 죽녹원 대나무숲 산책 -> 국수거리 -> 관방제림 선셋 자전거<br>2DAY: 메타세쿼이아길 인생샷 -> 메타프로방스 이국적 쇼핑 -> 소쇄원 정원 산책<br>3DAY: 한옥마을 구경 및 담양 떡갈비 정찬 식사 후 복귀' 
      }
    }
  },
  {
    id: 'd11', name: '태안/안면도 (Taean)', location: 'domestic', duration: ['day', '2-3'], style: ['relaxation', 'nature', 'family'], bestSeasons: ['spring', 'summer', 'autumn'], image: 'https://picsum.photos/seed/d11/800/600', description: '끝없이 펼쳐진 서해 갯벌과 이국적인 모래사구, 눈부신 낙조를 자랑하는 서해안의 힐링 성지.',
    quickInfo: { months: '4월~6월, 8월~10월', flight: '자가용 (약 1시간 20분)', visa: '국내 (해당없음)', voltage: '220V', temp: { spring: '13℃', summer: '25℃', autumn: '17℃', winter: '2℃' } },
    details: {
      spots: '꽃지해수욕장 낙조, 안면도 자연휴양림, 신두리 해안사구, 팜카밀레 허브농원', food: '게국지, 꽃게탕, 꽃게간장게장, 대하 소금구이', hotel: '아일랜드 리솜, 안면도 펜션 단지, 라티튜드 풀빌라',
      weatherDesc: { spring: '튤립 축제가 한창 열리며, 신선한 바닷바람과 함께 여행하기 최상입니다.', summer: '서해 갯벌 체험과 해수욕을 즐기기 완벽해 가족 단위 여행객에게 최고입니다.', autumn: '대하와 꽃게가 제철을 맞아 먹방 여행과 시원한 가을바다 감상이 가능합니다.', winter: '꽃지해수욕장의 하얀 모래와 서해 특유의 쓸쓸하면서도 웅장한 낙조를 볼 수 있습니다.' },
      courses: { 
        'day': '<br>1DAY: 신두리 해안사구 -> 팜카밀레 허브농원 -> 꽃지해수욕장 낙조 감상', 
        '2-3': '<br>1DAY: 이국적인 신두리 해안사구 -> 태안 시내 게국지 식사 -> 천리포수목원 오션뷰 산책<br>2DAY: 안면도 자연휴양림 피톤치드 힐링 -> 영목항 전망대 -> 꽃지해수욕장 붉은 일몰<br>3DAY: 백사장항 인도교 걷기 및 간장게장 쇼핑 후 복귀' 
      }
    }
  },
  {
    id: 'd12', name: '순천/보성 (Suncheon)', location: 'domestic', duration: ['2-3', '4-5'], style: ['nature', 'relaxation', 'culture'], bestSeasons: ['spring', 'autumn'], image: 'https://picsum.photos/seed/d12/800/600', description: '광활한 황금빛 갈대밭 순천만 습지와 초록 융단 같은 보성 녹차밭의 만남.',
    quickInfo: { months: '4월~5월, 9~11월', flight: 'KTX/자가용 (약 2.5시간)', visa: '국내 (해당없음)', voltage: '220V', temp: { spring: '14℃', summer: '25℃', autumn: '18℃', winter: '4℃' } },
    details: {
      spots: '순천만 습지(갈대밭), 낙안읍성 민속마을, 대한다원 보성녹차밭, 순천만 국가정원', food: '벌교 꼬막 정식, 짱뚱어탕, 녹차 떡갈비, 산채비빔밥', hotel: '순천만 에코촌 유스호스텔(한옥), 호텔 지움, 보성 한옥민박',
      weatherDesc: { spring: '국가정원에 수백만 송이의 꽃이 만발하고, 녹차밭이 가장 밝은 연두색을 띱니다.', summer: '푸르른 초록빛 녹차밭 터널을 거닐며 싱그러운 자연을 온몸으로 느낍니다.', autumn: '순천만 습지에 끝없이 펼쳐지는 은빛/황금빛 갈대 물결의 절정을 감상할 수 있습니다.', winter: '고즈넉한 낙안읍성 초가집 마당에 눈이 소복이 쌓이는 평화로운 절경을 봅니다.' },
      courses: { 
        '2-3': '<br>1DAY: 순천만 국가정원 관람 -> 순천만 습지 갈대밭 산책 및 용산전망대 일몰<br>2DAY: 낙안읍성 민속마을 도보 투어 -> 보성 대한다원 녹차밭 힐링<br>3DAY: 보성 율포해변 솔밭 산책 후 남도 꼬막정식 식사 -> 복귀', 
        '4-5': '<br>1DAY: 순천만 국가정원 하루 종일 투어<br>2DAY: 순천만 습지 및 와온해변 노을 감상<br>3DAY: 조선시대의 시간이 멈춘 낙안읍성 민속마을 숙박/투어<br>4DAY: 보성 대한다원 녹차밭 및 한국차박물관 -> 율포 해수녹차탕 힐링<br>5DAY: 선암사 숲길 트래킹 및 산채비빔밥 마무리 후 복귀' 
      }
    }
  },
  {
    id: 'd13', name: '남해 (Namhae)', location: 'domestic', duration: ['2-3', '4-5'], style: ['relaxation', 'romantic', 'nature'], bestSeasons: ['spring', 'summer', 'autumn'], image: 'https://picsum.photos/seed/d13/800/600', description: '에메랄드 바다를 두른 다랭이마을과 이국적인 독일마을이 반기는 보물섬.',
    quickInfo: { months: '3월~5월, 9~10월', flight: '자가용 (약 3.5시간)', visa: '국내 (해당없음)', voltage: '220V', temp: { spring: '15℃', summer: '25℃', autumn: '19℃', winter: '5℃' } },
    details: {
      spots: '독일마을, 다랭이마을, 보리암, 상주 은모래비치, 설리 스카이워크', food: '멸치 쌈밥, 유자 빵, 갈치 조림, 남해 수제 맥주', hotel: '아난티 남해, 럭셔리 남해 풀빌라, 독일마을 펜션',
      weatherDesc: { spring: '벚꽃과 노란 유채꽃이 파란 바다와 어우러지는 최고의 낭만 드라이브 시즌입니다.', summer: '상주 은모래비치의 시원한 바다 수영과 스릴 만점의 설리 스카이워크 그네를 타기 좋습니다.', autumn: '선선한 해안 바람을 맞으며 다랭이마을 논둑길을 따라 힐링 걷기 좋습니다.', winter: '남쪽 해양성 기후로 비교적 따뜻하며 보리암에서 장엄한 겨울 일출을 감상하기 좋습니다.' },
      courses: { 
        '2-3': '<br>1DAY: 독일마을 구경 및 정통 소시지/수제 맥주 점심 -> 원예예술촌 -> 상주 은모래비치 산책<br>2DAY: 금산 보리암 절경 등반 및 메밀전 -> 다랭이마을 골목 투어 및 해안가 카페<br>3DAY: 남해대교 오션 뷰 전망 카페 -> 삼천포 삼천포 대교 구경 후 귀가', 
        '4-5': '<br>1DAY: 남해 독일마을 도착 후 하이델베르크 풍경 만끽<br>2DAY: 상주 은모래비치 숲길 및 설리 스카이워크 그네 액티비티<br>3DAY: 금산 보리암 절벽 사찰 투어 -> 다랭이마을 한옥 투어<br>4DAY: 아난티 남해 스파 및 골프, 호캉스 힐링<br>5DAY: 지족해협 죽방렴 역사 구경 및 멸치쌈밥 정식 후 귀가' 
      }
    }
  },
  {
    id: 'd14', name: '안동 (Andong)', location: 'domestic', duration: ['day', '2-3'], style: ['history', 'culture', 'food'], bestSeasons: ['spring', 'autumn'], image: 'https://picsum.photos/seed/d14/800/600', description: '천년 선비 정신의 요람 하회마을과 국내 최장 목조 교량 월영교의 야경.',
    quickInfo: { months: '4월~5월, 9~10월', flight: '자가용 (약 2시간)', visa: '국내 (해당없음)', voltage: '220V', temp: { spring: '13℃', summer: '25℃', autumn: '17℃', winter: '1℃' } },
    details: {
      spots: '하회마을, 월영교 야경, 병산서원, 도산서원, 만휴정', food: '안동찜닭, 간고등어 정식, 안동소주, 맘모스베이커리 크림치즈빵', hotel: '안동 구름에 리조트(전통한옥), 안동 그랜드 호텔, 락고재',
      weatherDesc: { spring: '하회마을 만송정 솔숲과 벚꽃길을 따라 한가롭게 걷기 포근합니다.', summer: '서원 대청마루에 앉아 배롱나무 붉은 꽃과 시원한 바람을 감상하기 좋습니다.', autumn: '안동국제탈춤페스티벌이 열리며, 선선한 기운 속에 역사 탐방하기 가장 최적입니다.', winter: '하얀 눈에 덮인 월영교와 고즈넉한 기와지붕이 한 폭의 동양화를 연출합니다.' },
      courses: { 
        'day': '<br>1DAY: 하회마을 도보 투어 -> 병산서원 -> 맘모스베이커리 -> 월영교 문보트 및 야경', 
        '2-3': '<br>1DAY: 세계유산 하회마을 속 구경 및 부용대 전망 -> 낙동강 변 산책 -> 안동찜닭 골목 식사<br>2DAY: 병산서원 명품 풍경 -> 미스터션샤인 촬영지 만휴정 -> 월영교 야경 감상 및 문보트<br>3DAY: 도산서원 역사 탐방 -> 퇴계 이황 오솔길 걷고 간고등어 정식 먹은 후 복귀' 
      }
    }
  },
  {
    id: 'd15', name: '하동 (Hadong)', location: 'domestic', duration: ['2-3', '4-5'], style: ['relaxation', 'nature', 'culture'], bestSeasons: ['spring', 'autumn'], image: 'https://picsum.photos/seed/d15/800/600', description: '지리산 품에 안긴 푸른 야생 차밭과 평사리 넓은 들판, 그리고 섬진강의 여유.',
    quickInfo: { months: '3월~5월, 9~11월', flight: '자가용 (약 2시간 30분)', visa: '국내 (해당없음)', voltage: '220V', temp: { spring: '14℃', summer: '24℃', autumn: '18℃', winter: '3℃' } },
    details: {
      spots: '화개장터, 최참판댁, 매암제다원 차밭, 청학동 삼성궁', food: '섬진강 재첩국, 참게가리장국, 은어회, 참게탕', hotel: '켄싱턴리조트 지리산하동, 하동 한옥펜션, 감성 풀빌라',
      weatherDesc: { spring: '쌍계사 십리벚꽃길에 눈부신 벚꽃 터널이 완성되는 최고의 계절입니다.', summer: '섬진강 시원한 물줄기와 초록 차밭 그늘 아래서 시원한 다도를 즐깁니다.', autumn: '소설 토지의 배경인 평사리 황금들판이 풍요롭게 물드는 가을 정취를 감상합니다.', winter: '지리산의 맑고 차가운 겨울 공기와 함께 따뜻한 야생 녹차 한 잔의 평화를 만끽합니다.' },
      courses: { 
        '2-3': '<br>1DAY: 화개장터 구경 -> 십리벚꽃길 산책 -> 매암제다원에서 푸른 차밭을 바라보며 다도 체험<br>2DAY: 평사리 최참판댁 -> 섬진강 평사리 공원 숲길 -> 청학동 신비로운 돌사찰 삼성궁<br>3DAY: 섬진강 재첩국 시원한 해장 식사 -> 하동 짚와이어(아시아 최장) 스릴 체험 후 복귀', 
        '4-5': '<br>1DAY: 하동 화개마을 및 켄싱턴 리조트 체크인 후 차밭 힐링<br>2DAY: 쌍계사 전나무 숲길 -> 매암차박물관 다도 실습<br>3DAY: 평사리 들판 및 스타웨이 하동 전망대 오션/리버뷰<br>4DAY: 지리산 청학동 깊은 계곡 속 삼성궁 탐방<br>5DAY: 하동 플라이웨이 레일바이크 -> 재첩비빔밥 식사 후 복귀' 
      }
    }
  },
  {
    id: 'd16', name: '영동/옥천 (Yeongdong/Okcheon)', location: 'domestic', duration: ['day', '2-3'], style: ['relaxation', 'nature', 'culture'], bestSeasons: ['spring', 'autumn'], image: 'https://picsum.photos/seed/d16/800/600', description: '금강 물줄기가 휘감아 치는 한반도 지형 부소담악과 국산 와인 향기 가득한 와인터널.',
    quickInfo: { months: '4월~6월, 9~10월', flight: '자가용 (약 1시간)', visa: '국내 (해당없음)', voltage: '220V', temp: { spring: '13℃', summer: '25℃', autumn: '17℃', winter: '0℃' } },
    details: {
      spots: '옥천 부소담악, 영동 와인터널, 월류봉, 송호국민관광지 송림', food: '생선국수, 도리뱅뱅이, 영동 한우, 영동 곶감 및 포도와인', hotel: '영동 레인보우 힐링타운 호텔, 옥천 전통문화체험관 한옥스테이',
      weatherDesc: { spring: '월류봉 아래 흐르는 물길 주변에 봄꽃이 흐드러지게 피어 등산하기 좋습니다.', summer: '송호리 금강변 울창한 소나무 그늘 아래서 강바람을 맞으며 캠핑하기 최적입니다.', autumn: '영동 대한민국 와인축제가 열리고, 기암괴석 월류봉에 오색 단풍이 걸립니다.', winter: '부소담악 물결 위로 얇게 언 얼음과 흰 눈이 쌓인 바위 능선이 숨 막히는 경관을 뽐냅니다.' },
      courses: { 
        'day': '<br>1DAY: 옥천 부소담악 호수 둘레길 걷기 -> 생선국수 점심 -> 영동 월류봉 감상 -> 와인터널 구경 및 와인 시음', 
        '2-3': '<br>1DAY: 옥천 부소담악 절경 산책 -> 옥천 시내 생선국수/도리뱅뱅이 시식 -> 향수 시인 정지용 생가 도보 여행<br>2DAY: 영동 월류봉 둘레길 트래킹 -> 송호리 소나무 숲길 걷기 -> 영동 와인터널 체험 및 디너<br>3DAY: 옥천 수생식물학습원 정원 힐링 후 천안 복귀' 
      }
    }
  },
  {
    id: 'd17', name: '완주 (Wanju)', location: 'domestic', duration: ['day', '2-3'], style: ['relaxation', 'culture', 'romantic'], bestSeasons: ['spring', 'autumn'], image: 'https://picsum.photos/seed/d17/800/600', description: '방탄소년단(BTS)도 다녀간 힐링 성지. 아원고택의 고요함과 대둔산의 수려한 산세.',
    quickInfo: { months: '4월~5월, 9~11월', flight: '자가용 (약 1시간 15분)', visa: '국내 (해당없음)', voltage: '220V', temp: { spring: '14℃', summer: '25℃', autumn: '18℃', winter: '2℃' } },
    details: {
      spots: '아원고택, 오성한옥마을, 대둔산 케이블카/구름다리, 산속등대 미술관', food: '묵은지 닭볶음탕, 산채 정식, 순두부찌개, 완주 곶감', hotel: '아원고택 한옥스테이, 소양고택, 완주 감성 황토펜션',
      weatherDesc: { spring: '오성한옥마을 돌담길에 진달래와 벚꽃이 피어 한적하게 산책하기 참 좋습니다.', summer: '소양 숲속 계곡 그늘에서 졸졸 흐르는 물소리를 들으며 휴식하기 어울립니다.', autumn: '대둔산 전체가 붉은 단풍으로 타오를 때 케이블카와 구름다리에서 내려다보는 풍경이 일품입니다.', winter: '눈 덮인 아원고택의 미니멀한 갤러리 창밖으로 하얀 설산을 멍하니 바라보는 힐링 온천/티타임.' },
      courses: { 
        'day': '<br>1DAY: 대둔산 케이블카 및 구름다리 -> 오성한옥마을(아원고택 갤러리) -> 한옥 카페 티타임', 
        '2-3': '<br>1DAY: 오성한옥마을 골목길 산책 -> 아원고택 현대식 미술관 & 한옥 감상 -> 소양고택 수제 에이드<br>2DAY: 대둔산 케이블카 탑승 후 빨간 삼간선 구름다리 건너기 -> 삼례문화예술촌 갤러리<br>3DAY: 완주 대아수목원 산림욕 후 토종 닭볶음탕 든든히 먹고 귀가' 
      }
    }
  },
  {
    id: 'd18', name: '삼척/동해 (Samcheok/Donghae)', location: 'domestic', duration: ['2-3', '4-5'], style: ['nature', 'relaxation', 'adventure'], bestSeasons: ['summer', 'winter'], image: 'https://picsum.photos/seed/d18/800/600', description: '한국의 나폴리 장호항의 투명한 바다와 신비의 환선굴이 공존하는 청정 해안지대.',
    quickInfo: { months: '6월~8월, 12~2월', flight: '자가용 (약 3시간)', visa: '국내 (해당없음)', voltage: '220V', temp: { spring: '12℃', summer: '23℃', autumn: '16℃', winter: '1℃' } },
    details: {
      spots: '장호항 스노클링, 삼척 해상케이블카, 환선굴/대금굴, 동해 촛대바위 출렁다리, 묵호등대', food: '물회, 곰치국(해장국), 모듬 생선구이, 옹심이 칼국수', hotel: '쏠비치 삼척, 동해 보양온천 컨벤션호텔, 오션뷰 해안 펜션',
      weatherDesc: { spring: '비교적 선선하고 조용한 동해 바닷바람을 맞으며 해안가 드라이브하기 좋습니다.', summer: '장호항 투명 카누와 스노클링을 즐기는 한국 최고의 해양 휴양 성수기입니다.', autumn: '동해 촛대바위와 출렁다리를 건너며 맑고 높은 가을 하늘의 쾌적함을 즐깁니다.', winter: '겨울 바다의 차가운 파도 소리와 함께 따끈하고 시원한 곰치국 한 그릇이 몸을 녹여줍니다.' },
      courses: { 
        '2-3': '<br>1DAY: 동해 추암 촛대바위 및 해상 출렁다리 -> 묵호등대 해랑전망대 -> 묵호항 활어회 저녁<br>2DAY: 삼척 해상케이블카 탑승 -> 한국의 나폴리 장호항 해변 휴식 -> 대금굴/환선굴 신비한 모험<br>3DAY: 삼척 맹방해변(BTS 촬영지) 포토존 -> 시원한 옹심이 칼국수 식사 후 귀가', 
        '4-5': '<br>1DAY: 동해 바다 촛대바위 산책 및 리조트 체크인<br>2DAY: 묵호등대 논골담길 벽화마을 투어 및 물회 점심 -> 망상해수욕장 힐링<br>3DAY: 삼척 장호항 해양 스노클링 및 투명카약, 케이블카 투어<br>4DAY: 동양 최대 석회동굴 환선굴 관광 -> 미인폭포(에메랄드빛 폭포) 하이킹<br>5DAY: 삼척 쏠비치 오션플레이 온천 -> 곰치국 식사 후 귀가' 
      }
    }
  },
  {
    id: 'd19', name: '부여/공주 (Buyeo/Gongju)', location: 'domestic', duration: ['day', '2-3'], style: ['history', 'culture', 'family'], bestSeasons: ['spring', 'autumn'], image: 'https://picsum.photos/seed/d19/800/600', description: '찬란한 백제 천년 역사의 흔적 무령왕릉과 낙화암에 깃든 역사의 숨결.',
    quickInfo: { months: '4월~6월, 9~10월', flight: '자가용 (약 50분)', visa: '국내 (해당없음)', voltage: '220V', temp: { spring: '13℃', summer: '25℃', autumn: '17℃', winter: '1℃' } },
    details: {
      spots: '부여 궁남지, 낙화암(부소산성), 공주 무령왕릉, 공산성 야경, 국립공주박물관', food: '연잎밥 정식, 공주 밤파이, 알밤 막걸리, 석갈비, 메밀 막국수', hotel: '롯데리조트 부여, 공주 한옥마을(전통 구들장), 공주 미니호텔',
      weatherDesc: { spring: '공산성 성곽길을 따라 피어난 벚꽃과 봄바람을 맞으며 산책하기 최고입니다.', summer: '부여 궁남지에 수천만 송이 연꽃이 화려하게 피어나는 서정적인 여름입니다.', autumn: '부여 백제문화제가 대규모로 열려 다채로운 역사 공연과 야경을 선선하게 즐길 수 있습니다.', winter: '눈 내린 백제 유적지와 궁남지 정자의 고즈넉한 풍경 속에서 알밤 밤파이를 맛봅니다.' },
      courses: { 
        'day': '<br>1DAY: 공주 무령왕릉 송산리고분군 -> 공산성 성곽 트래킹 -> 부여 궁남지 정원 산책 -> 연잎밥 저녁식사', 
        '2-3': '<br>1DAY: 공주 국립공주박물관 -> 무령왕릉 관람 -> 금강을 품은 공산성 야간 성곽길 투어<br>2DAY: 부여 부소산성 백마강 황포돛배 승선 -> 낙화암 절벽 비경 -> 궁남지 연못 정원 산책<br>3DAY: 부여 정림사지 오층석탑 -> 롯데 아울렛 알짜 쇼핑 후 천안 복귀' 
      }
    }
  },
  {
    id: 'd20', name: '인제/양구 (Inje/Yanggu)', location: 'domestic', duration: ['day', '2-3', '4-5'], style: ['nature', 'adventure', 'relaxation'], bestSeasons: ['summer', 'winter'], image: 'https://picsum.photos/seed/d20/800/600', description: '순백의 자작나무 숲이 연출하는 북유럽 감성과 한반도 모양의 평화로운 양구 인공섬.',
    quickInfo: { months: '6월~8월, 12~2월', flight: '자가용 (약 2시간 30분)', visa: '국내 (해당없음)', voltage: '220V', temp: { spring: '10℃', summer: '22℃', autumn: '13℃', winter: '-5℃' } },
    details: {
      spots: '원대리 자작나무숲, 오색 설악산 백담사, 방태산 자연휴양림 이단폭포, 양구 파로호 한반도섬', food: '황태구이, 황태해장국, 산채비빔밥, 손두부 전골', hotel: '인제 스피디움 호텔, 설악 한옥 감성 펜션, 방태산 통나무집',
      weatherDesc: { spring: '설악산 자락에 잔설이 녹아 푸른 생명이 돋아나는 상쾌하고 서늘한 기운을 느낍니다.', summer: '방태산 깊은 원시림 계곡의 시원함 속에 이단폭포 그늘 아래서 폭염을 잊습니다.', autumn: '설악산과 방태산에 붉고 노란 오색 단풍이 융단처럼 깔려 야외 트래킹에 완벽합니다.', winter: '원대리 자작나무숲의 흰 줄기와 하얀 눈밭이 어우러져 한 폭의 환상적인 북유럽 동화 세상을 만듭니다.' },
      courses: { 
        'day': '<br>1DAY: 인제 원대리 자작나무숲 하이킹 -> 황태구이 점심 -> 양구 파로호 한반도섬 전망 카페', 
        '2-3': '<br>1DAY: 인제 원대리 하얀 자작나무숲 정복 -> 시원한 계곡 드라이브 -> 황태정식 저녁<br>2DAY: 설악산 백담사 셔틀버스 탑승 및 고요한 사찰 산책 -> 방태산 이단폭포 물멍<br>3DAY: 양구 국토정중앙 천문대 과학관 또는 한반도섬 짚라인 체험 후 귀가', 
        '4-5': '<br>1DAY: 인제 스피디움 서킷 카트 레이싱 체험 및 체크인<br>2DAY: 원대리 자작나무숲 3시간 명품 트래킹<br>3DAY: 방태산 자연휴양림 산림욕 및 계곡 휴양<br>4DAY: 양구로 이동하여 두타연 계곡(DMZ 비경 청정 자연) 산책 -> 한반도섬 자전거 투어<br>5DAY: 양구 국토정중앙 천문대 산책 -> 황태해장국 든든한 아침 후 귀가' 
      }
    }
  },
  {
    id: 'd21', name: '문경 (Mungyeong)', location: 'domestic', duration: ['day', '2-3'], style: ['nature', 'history', 'family'], bestSeasons: ['spring', 'autumn'], image: 'https://picsum.photos/seed/d21/800/600', description: '과거 시험을 보러 가던 문경새재 황톳길과 시원한 야외 철로 자전거.',
    quickInfo: { months: '4월~6월, 9~11월', flight: '자가용 (약 1시간 15분)', visa: '국내 (해당없음)', voltage: '220V', temp: { spring: '12℃', summer: '24℃', autumn: '16℃', winter: '0℃' } },
    details: {
      spots: '문경새재 도립공원, 에코월드(가족테마), 오미자테마터널, 문경 레일바이크', food: '문경 약돌돼지 삼겹살, 약돌한우 구이, 산채비빔밥, 오미자 막걸리', hotel: '문경관광호텔, 라마다 문경새재 호텔, 문경 펜션 단지',
      weatherDesc: { spring: '문경새재 조령관문까지 완만한 황톳길을 맨발로 걷기 가장 포근한 시기입니다.', summer: '울창한 숲 터널 아래 흐르는 차가운 계곡물에 발을 담그고 더위를 식힙니다.', autumn: '문경 사과 축제가 열려 상큼한 사과 향이 가득하며, 단풍이 문경새재를 수놓습니다.', winter: '조용하고 한적한 조령 제1관문 성벽 위에 눈이 쌓여 고결한 장관을 선보입니다.' },
      courses: { 
        'day': '<br>1DAY: 문경새재 황톳길 맨발 걷기 -> 약돌돼지 삼겹살 석쇠구이 -> 문경 철로자전거 탑승', 
        '2-3': '<br>1DAY: 문경새재 1관문 및 사극 오픈세트장 -> 약돌돼지 한 상 정식 -> 오미자 테마터널 야경<br>2DAY: 문경새재 단산 모노레일 타고 백두대간 감상 -> 에코월드 석탄박물관 -> 오미자 족욕 체험<br>3DAY: 진남교반 아름다운 절벽 풍경 구경 후 석갈비 먹고 천안 복귀' 
      }
    }
  },
  {
    id: 'd22', name: '청송 (Cheongsong)', location: 'domestic', duration: ['2-3', '4-5'], style: ['nature', 'relaxation', 'family'], bestSeasons: ['spring', 'autumn'], image: 'https://picsum.photos/seed/d22/800/600', description: '천혜의 청정 지대 주왕산 기암절벽과 아침 안개가 신비로운 인공 저수지 주산지.',
    quickInfo: { months: '5월~6월, 9~11월', flight: '자가용 (약 2시간 20분)', visa: '국내 (해당없음)', voltage: '220V', temp: { spring: '11℃', summer: '23℃', autumn: '15℃', winter: '-2℃' } },
    details: {
      spots: '주왕산 국립공원(용추폭포), 주산지(물에 잠긴 왕버들), 송소고택, 백석탄 계곡', food: '달기약수 닭백숙, 청송 사과 닭갈비, 산더덕구이', hotel: '소노벨 청송 (솔샘온천 노천탕 최고), 송소고택 한옥체험',
      weatherDesc: { spring: '주왕산 자락에 핀 진달래와 산벚꽃을 보며 등산 코스를 편안히 소화합니다.', summer: '백석탄 계곡의 흰 돌들과 맑은 물가에서 시원하게 힐링 피크닉을 즐기기 좋습니다.', autumn: '주산지 저수지 위에 피어오르는 물안개와 오색 단풍이 물에 비쳐 초현실적 절경을 이룹니다.', winter: '솔샘온천의 뜨거운 약수 노천탕에서 차가운 겨울 바람과 하얀 눈을 맞으며 최고의 휴식을 취합니다.' },
      courses: { 
        '2-3': '<br>1DAY: 주산지 저수지 산책 -> 청송 사과 닭갈비 점심 -> 송소고택 한옥 한 바퀴 -> 소노벨 솔샘 노천 온천 힐링<br>2DAY: 주왕산 국립공원 완만한 협곡(용추폭포/용연폭포) 트래킹 -> 달기약수터 닭백숙 영양 보충<br>3DAY: 백석탄 계곡 기암괴석 구경 후 복귀', 
        '4-5': '<br>1DAY: 청송 소노벨 체크인 및 온천 호캉스<br>2DAY: 주왕산 용추협곡 명품 둘레길 걷기 및 파전 막걸리<br>3DAY: 이른 아침 주산지 물안개 사진 촬영 -> 신성계곡 한반도지형 전망대<br>4DAY: 송소고택 다도 힐링 및 민속놀이 체험 -> 청송 옹기 공방<br>5DAY: 달기약수 닭백숙 정찬 후 천안 복귀' 
      }
    }
  },
  {
    id: 'd23', name: '울릉도/독도 (Ulleungdo)', location: 'domestic', duration: ['4-5'], style: ['nature', 'adventure', 'relaxation'], bestSeasons: ['spring', 'summer', 'autumn'], image: 'https://picsum.photos/seed/d23/800/600', description: '평생 잊지 못할 동해 먼 바다의 비경. 신비로운 나리분지와 국토 막내 독도의 감동.',
    quickInfo: { months: '5월~9월', flight: 'KTX+페리크루즈 (약 6시간)', visa: '국내 (해당없음)', voltage: '220V', temp: { spring: '12℃', summer: '22℃', autumn: '17℃', winter: '3℃' } },
    details: {
      spots: '나리분지 원시림, 관음도 다리, 태하 향목 모노레일, 독도 입도(선착장), 행남해안산책로', food: '독도새우, 약소불고기, 따개비 칼국수, 오징어 물회, 산채비빔밥', hotel: '힐링스테이 코스모스(초럭셔리), 울릉 대아리조트, 해안 감성 펜션',
      weatherDesc: { spring: '바람이 잦아들고 독도 여객선 입도 성공 확률이 가장 높은 따스한 계절입니다.', summer: '푸르른 에메랄드빛 울릉도 청정 바다에서 스노클링과 투명카약을 타기 최고입니다.', autumn: '울릉도 해안 절벽 가득 가을 단풍과 억새가 흩날리는 평화롭고 고독한 힐링 시즌입니다.', winter: '폭설이 잦아 통제가 될 수 있지만, 나리분지 억새 투막집 주변의 은빛 설경은 장엄합니다.' },
      courses: { 
        '4-5': '<br>1DAY: 포항/울진 선착장 도착 -> 울릉 크루즈 입항 -> 행남해안산책로 화산 절벽 걷기 -> 약소불고기 저녁<br>2DAY: 울릉도 버스/렌터카 일주 (태하 모노레일 -> 관음도 다리 -> 나리분지 삼나물 밥)<br>3DAY: 독도행 쾌속선 탑승 -> 자랑스러운 우리 땅 독도 입도 및 사진 촬영 -> 독도새우 파티<br>4DAY: 봉래폭포 삼림욕 -> 저동항 촛대바위 야경 산책<br>5DAY: 울릉 명물 오징어물회 든든히 먹고 크루즈 탑승 복귀' 
      }
    }
  },
  {
    id: 'd24', name: '보령/대천 (Boryeong)', location: 'domestic', duration: ['day', '2-3'], style: ['relaxation', 'nightlife', 'family'], bestSeasons: ['summer', 'autumn'], image: 'https://picsum.photos/seed/d24/800/600', description: '화려한 여름 머드 축제와 끝없는 조개구이 해변, 그리고 무창포 신비의 바닷길.',
    quickInfo: { months: '7월~8월, 9~10월', flight: '자가용 (약 1시간 10분)', visa: '국내 (해당없음)', voltage: '220V', temp: { spring: '12℃', summer: '25℃', autumn: '18℃', winter: '1℃' } },
    details: {
      spots: '대천해수욕장, 무창포 해수욕장(바닷길), 개화예술공원, 죽도 상화원 한옥정원', food: '신선한 모듬 조개구이, 바지락 칼국수, 꽃게탕, 게국지', hotel: '한화리조트 대천 파로스, 호텔 머드린, 대천 오션뷰 데이즈호텔',
      weatherDesc: { spring: '죽도 상화원 한국정원의 고풍스러운 나무 데크길을 서해바다 보며 걷기 화창합니다.', summer: '세계적인 대천 머드 축제가 열려 글로벌 축제의 열기와 젊은 밤문화를 즐기기 완벽합니다.', autumn: '대하와 전어가 풍부해지고, 무창포 바닷길이 열리는 신비로운 가을 바다를 쾌적하게 감상합니다.', winter: '대천 밤바다의 화려한 조명 조개구이 포차 거리에서 낭만 가득한 소주 한잔과 모닥불.' },
      courses: { 
        'day': '<br>1DAY: 개화예술공원 식물관 -> 대천 죽도 상화원 한옥 정원 산책 -> 대천 해수욕장 조개구이 석식', 
        '2-3': '<br>1DAY: 보령 개화예술공원 허브정원 -> 대천해수욕장 스카이바이크 체험 -> 바다 보며 조개구이 & 소주<br>2DAY: 죽도 상화원 섬 전체 한옥 정원 산책 -> 무창포 해수욕장 신비의 갈라지는 바닷길 걷기 -> 선셋 해변 카페<br>3DAY: 대천항 수산시장 젓갈 쇼핑 및 바지락 칼국수 식사 후 복귀' 
      }
    }
  },
  {
    id: 'd25', name: '광양 (Gwangyang)', location: 'domestic', duration: ['day', '2-3'], style: ['relaxation', 'nature', 'food'], bestSeasons: ['spring', 'autumn'], image: 'https://picsum.photos/seed/d25/800/600', description: '이른 봄 새하얀 매화 향기로 뒤덮이는 섬진강 매화마을과 석쇠에 굽는 육즙 가득 광양불고기.',
    quickInfo: { months: '3월~5월, 9~10월', flight: '자가용 (약 2시간 30분)', visa: '국내 (해당없음)', voltage: '220V', temp: { spring: '14℃', summer: '25℃', autumn: '18℃', winter: '3℃' } },
    details: {
      spots: '광양 다압 매화마을, 백운산 자연휴양림 치유의 숲, 느랭이골 별빛축제, 구봉산 전망대 야경', food: '광양 불고기(광양 석쇠구이), 재첩국수, 참게탕, 광양 기정떡', hotel: '호텔 락희 광양, 부티크 호텔 K, 광양 숲속 통나무 감성 펜션',
      weatherDesc: { spring: '전국에서 가장 먼저 매화꽃이 하얗게 눈송이처럼 터지는 눈부신 봄 풍경을 자랑합니다.', summer: '백운산 동곡계곡 맑고 깊은 물속에 발을 담그고 피서하기 안성맞춤입니다.', autumn: '선선한 바람 속에 구봉산 전망대에 올라 여수/순천 바다까지 한눈에 내려다보는 화려한 야경을 봅니다.', winter: '섬진강변 고즈넉한 겨울 포구에서 따뜻한 재첩국 한 대접과 광양불고기로 든든하게 여행합니다.' },
      courses: { 
        'day': '<br>1DAY: 다압 매화마을(봄) 또는 백운산 휴양림 산책 -> 광양불고기 특화거리 석식 -> 구봉산 전망대 야경', 
        '2-3': '<br>1DAY: 섬진강변 매화마을 백운 매화길 산책 -> 참게탕 점심 -> 느랭이골 편백나무 숲 힐링<br>2DAY: 백운산 자연휴양림 삼림욕 -> 구봉산 메탈 타워 전망대 선셋 -> 참숯 광양불고기 구이 파티<br>3DAY: 광양 와인동굴 구경 및 기정떡 기념품 구매 후 천안 귀가' 
      }
    }
  },
  {
    id: 'd26', name: '영광 (Yeonggwang)', location: 'domestic', duration: ['day', '2-3'], style: ['relaxation', 'nature', 'food'], bestSeasons: ['spring', 'autumn'], image: 'https://picsum.photos/seed/d26/800/600', description: '한국의 환상적인 노을 해안도로인 백수해안도로와 쫄깃하고 짭조름한 밥도둑 굴비 한 상 정식.',
    quickInfo: { months: '4월~5월, 9~10월', flight: '자가용 (약 2시간)', visa: '국내 (해당없음)', voltage: '220V', temp: { spring: '13℃', summer: '25℃', autumn: '18℃', winter: '2℃' } },
    details: {
      spots: '백수해안도로 드라이브길, 불갑사(상사화 군락), 칠산타워 오션뷰, 숲쟁이 공원', food: '영광 굴비 정식, 보리굴비 밥상, 간장게장, 칠산 백합죽', hotel: '영광 글로리비치 연수원, 영광 오션뷰 관광호텔, 영광 한옥스테이',
      weatherDesc: { spring: '백수해안도로 조팝나무 꽃길을 달리며 시원한 서해 바람을 맞이합니다.', summer: '가마미 해수욕장의 아늑한 백사장과 시원한 소나무 숲에서 해수욕을 만끽하기 좋습니다.', autumn: '9월 불갑사 산비탈 전체를 붉은 융단으로 뒤덮는 빨간 상사화(꽃무릇)의 장관이 절정을 이룹니다.', winter: '차가운 겨울 서해 바다의 장엄한 파도를 통창 칠산타워 카페에서 보리굴비를 먹으며 감상합니다.' },
      courses: { 
        'day': '<br>1DAY: 불갑사 사찰 산책 -> 영광 법성포 보리굴비 점심 -> 백수해안도로 드라이브 및 선셋', 
        '2-3': '<br>1DAY: 상사화의 성지 불갑사 숲길 산책 -> 법성포 굴비거리 20첩 반상 식사 -> 칠산타워 뷰<br>2DAY: 백수해안도로 도보 데크 로드 걸으며 힐링 -> 숲쟁이 공원 산책 -> 바다 전망 펜션 노을 삼겹살<br>3DAY: 모시송편 빵집 쇼핑 및 해안 드라이브 마무리 후 복귀' 
      }
    }
  },
  {
    id: 'd27', name: '강진 (Gangjin)', location: 'domestic', duration: ['2-3', '4-5'], style: ['culture', 'nature', 'food'], bestSeasons: ['spring', 'autumn'], image: 'https://picsum.photos/seed/d27/800/600', description: '다산 정약용의 숨결이 서린 다산초당과 강진만 출렁다리, 그리고 20첩 남도 한정식의 진수.',
    quickInfo: { months: '3월~5월, 9~11월', flight: '자가용 (약 2시간 40분)', visa: '국내 (해당없음)', voltage: '220V', temp: { spring: '14℃', summer: '25℃', autumn: '18℃', winter: '3℃' } },
    details: {
      spots: '다산초당, 가우도 출렁다리, 백련사 동백 숲, 강진만 생태공원(갈대밭)', food: '강진 한정식(남도 한정식 끝판왕), 병영 돼지불고기, 짱뚱어탕, 회춘탕(보양탕)', hotel: '강진 오감통 한옥마을 스테이, 강진 K-호텔, 강진만 감성 펜션',
      weatherDesc: { spring: '백련사의 수천 그루 붉은 동백꽃 터널과 다산초당 오르는 숲길이 감미롭습니다.', summer: '가우도 청정 바다 위에 놓인 출렁다리를 건너며 시원한 바닷바람과 짚라인을 즐깁니다.', autumn: '순천만 부럽지 않은 강진만 생태공원의 춤추는 황금 갈대밭과 짱뚱어 구경이 최적입니다.', winter: '따뜻한 온돌방에서 명인이 차려낸 푸짐한 남도 한정식 밥도둑 한 상으로 온몸의 피로를 녹입니다.' },
      courses: { 
        '2-3': '<br>1DAY: 다산초당 역사 숲길 -> 백련사 만덕산 산책 -> 강진 한정식 호사스러운 저녁<br>2DAY: 가우도 해안선 걷기 및 출렁다리 체험 -> 짚라인 비행 -> 강진만 생태공원 갈대숲 선셋<br>3DAY: 전라병영성 및 하멜기념관 관람 후 연탄 불고기 식사 -> 귀가', 
        '4-5': '<br>1DAY: 강진 도착 후 강진만 갈대숲 노을 산책 및 전통 한옥 숙박<br>2DAY: 다산 정약용 유배지 다산초당 및 사의재 옛 주막 엿보기<br>3DAY: 가우도 섬 전체 트래킹 및 보트 수상 레저 액티비티<br>4DAY: 청자박물관 도자기 빚기 체험 -> 마량미항 해안가 횟집 투어<br>5DAY: 삼의재 떡갈비 정찬 및 강진차밭 초록뷰 산책 후 천안 복귀' 
      }
    }
  },
  {
    id: 'd28', name: '포천/가평 (Pocheon)', location: 'domestic', duration: ['day', '2-3'], style: ['nature', 'relaxation', 'family'], bestSeasons: ['spring', 'summer', 'autumn'], image: 'https://picsum.photos/seed/d28/800/600', description: '화강암 절벽이 비치는 에메랄드빛 아트밸리와 아침고요수목원의 화려한 정원 정취.',
    quickInfo: { months: '4월~6월, 9~10월', flight: '자가용 (약 1시간 30분)', visa: '국내 (해당없음)', voltage: '220V', temp: { spring: '11℃', summer: '24℃', autumn: '15℃', winter: '-3℃' } },
    details: {
      spots: '포천 아트밸리(천주호), 산정호수 둘레길, 가평 아침고요수목원, 남이섬 메타세쿼이아', food: '포천 이동갈비, 가평 잣두부 전골, 춘천 닭갈비, 메밀 막국수', hotel: '한화리조트 산정호수 안시, 가평 글램핑장, 럭셔리 키즈 풀빌라',
      weatherDesc: { spring: '아침고요수목원의 수만 가지 화려한 봄꽃 정원에서 꽃향기와 인생샷을 찍기 완벽합니다.', summer: '산정호수 오리배와 포천 허브아일랜드의 시원한 허브 족욕으로 한여름 피서를 즐깁니다.', autumn: '산정호수 주변 명성산의 드넓은 은빛 억새밭 군락지가 바람에 흩날리는 장관을 트래킹합니다.', winter: '눈 덮인 남이섬의 겨울 연가 메타세쿼이아길 산책 후 달콤한 닭갈비를 구워 먹습니다.' },
      courses: { 
        'day': '<br>1DAY: 포천 아트밸리 천주호 -> 포천 이동갈비 점심 -> 산정호수 둘레길 산책 -> 귀가', 
        '2-3': '<br>1DAY: 포천 아트밸리 모노레일 및 수중 절벽 -> 이동갈비 특화거리 갈비 구이 -> 허브아일랜드 야간 불빛 축제<br>2DAY: 가평 아침고요수목원 힐링 걷기 -> 가평 잣두부 전골 점심 -> 남이섬 배 타고 입성 후 자전거 타기<br>3DAY: 쁘띠프랑스 프랑스마을 관람 후 가평 막국수로 해장하고 복귀' 
      }
    }
  },
  {
    id: 'd29', name: '양양/고성 (Yangyang/Goseong)', location: 'domestic', duration: ['day', '2-3', '4-5'], style: ['relaxation', 'adventure', 'nightlife'], bestSeasons: ['summer', 'autumn'], image: 'https://picsum.photos/seed/d29/800/600', description: '힙한 청춘들의 서핑 성지 서피비치와 청정 동해안의 한적하고 투명한 고성 바다.',
    quickInfo: { months: '6월~8월, 9~10월', flight: '자가용 (약 2.5시간)', visa: '국내 (해당없음)', voltage: '220V', temp: { spring: '11℃', summer: '23℃', autumn: '16℃', winter: '0℃' } },
    details: {
      spots: '양양 서피비치 서핑, 고성 아야진 해변, 하조대 전망대, 낙산사 절벽사찰, 고성 통일전망대', food: '째복(조개) 해장국, 동해 활어회, 고성 물회, 속초 순대국밥', hotel: '양양 설해원(온천골프), 고성 르네블루 바이 워커힐, 서핑 게스트하우스',
      weatherDesc: { spring: '파도가 잔잔하고 맑은 날씨로 시원한 동해바다 해안가 바이크 라이딩에 최고입니다.', summer: '서피비치의 화려한 이국적 선셋 바와 국내 최고의 서핑 파도를 온몸으로 즐깁니다.', autumn: '바다색이 가장 투명해지며 해변 카페거리에서 선선한 바닷바람과 함께 불멍하기 좋습니다.', winter: '고성 낙산사 의상대 절벽 위에서 동해 겨울 수평선을 붉게 물들이는 일출을 봅니다.' },
      courses: { 
        'day': '<br>1DAY: 고성 아야진 무지개 돌길 -> 속초 동명항 물회 점심 -> 양양 서피비치 노을과 칵테일', 
        '2-3': '<br>1DAY: 고성 아야진 해변 산책 및 오션뷰 카페 -> 낙산사 바다 사찰 -> 양양 서피비치 선셋 맥주<br>2DAY: 양양 서피비치 서핑 2시간 강습 -> 째복(조개)국수/탕 시원한 식사 -> 하조대 노송 전망대 둘레길<br>3DAY: 고성 통일전망대 동해 최북단 뷰 감상 후 든든한 활어회 먹고 복귀', 
        '4-5': '<br>1DAY: 고성 조용한 해안가 체크인 및 오션뷰 호캉스<br>2DAY: 양양 서피비치 서핑 입문 및 바베큐 펍 파티<br>3DAY: 고성 DMZ 박물관 및 통일전망대 역사 여행 -> 속초 중앙시장 간식 쇼핑<br>4DAY: 낙산사 동해 일출 -> 양양 설해원 온천 스파 및 릴렉스 골프 힐링<br>5DAY: 강원도 로컬 섭국 든든한 마무리 식사 후 복귀' 
      }
    }
  },
  {
    id: 'd30', name: '영주/봉화 (Yeongju)', location: 'domestic', duration: ['day', '2-3'], style: ['nature', 'culture', 'history'], bestSeasons: ['spring', 'autumn'], image: 'https://picsum.photos/seed/d30/800/600', description: '부석사 무량수전에서 바라보는 소백산 능선 낙조와 국립백두대간수목원 호랑이숲.',
    quickInfo: { months: '4월~5월, 9~10월', flight: '자가용 (약 2시간)', visa: '국내 (해당없음)', voltage: '220V', temp: { spring: '12℃', summer: '24℃', autumn: '16℃', winter: '-2℃' } },
    details: {
      spots: '부석사 무량수전, 소수서원, 국립백두대간수목원 호랑이원, 무섬마을 외나무다리', food: '영주 한우 구이, 봉화 은어 요리, 메밀전병, 태평초(메밀묵찌개), 영주사과빵', hotel: '소백산풍기온천리조트, 영주 선비촌 한옥체험관, 봉화 숲속 통나무펜션',
      weatherDesc: { spring: '소수서원의 수백 년 소나무 숲길에 피어난 파릇한 싹과 포근한 햇살 아래 역사 여행하기 최적입니다.', summer: '국립백두대간수목원의 고원 지대에서 맑은 공기와 함께 호랑이 숲 속 시원한 산책을 합니다.', autumn: '부석사 안양루에서 바라보는 소백산맥 전체가 울긋불긋 붉은 바다를 이루는 낙조는 인생 최고의 명장면입니다.', winter: '무섬마을 모래강변 위에 외롭게 걸린 하얀 눈 덮인 외나무다리를 조용히 건너는 겨울 힐링.' },
      courses: { 
        'day': '<br>1DAY: 무섬마을 외나무다리 -> 영주 한우불고기 점심 -> 소수서원 -> 부석사 낙조 감상 -> 천안 복귀', 
        '2-3': '<br>1DAY: 무섬마을 강변 모래톱 외나무다리 걷기 -> 선비촌 역사체험 -> 영주 한우 구이 만찬<br>2DAY: 소백산 부석사 은행나무길 산책 및 무량수전 배흘림기둥 감상 -> 국립백두대간수목원 야생 백두산 호랑이 구경<br>3DAY: 소백산 풍기온천 노천탕에서 따뜻한 온천욕 피로 해소 후 메밀전병 식사 후 귀가' 
      }
    }
  },

  // International - 45 destinations
  // Short Flight (< 3 hours)
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
    id: 'i38', name: '블라디보스토크, 러시아 (Vladivostok)', location: 'international', flight: 'short', duration: ['2-3'], style: ['food', 'city', 'culture'], bestSeasons: ['summer', 'autumn'], image: 'https://picsum.photos/seed/i38/800/600', description: '비행기 타고 2시간 반 만에 만나는 가장 가까운 유럽. 킹크랩과 곰새우 파티.',
    quickInfo: { months: '6월~9월', flight: '2시간 30분 직항', visa: '무비자 60일', voltage: '220V', temp: { spring: '10℃', summer: '21℃', autumn: '13℃', winter: '-8℃' } },
    details: {
      spots: '독수리 전망대, 아르바트 거리, 혁명 광장, 등대(토카렙스키)', food: '킹크랩, 곰새우, 샤실릭(꼬치구이), 보르시국', hotel: '롯데호텔 블라디보스토크, 아지무트 호텔, 블라디보스토크 감성 에어비앤비', shopping: '당근 크림(할머니 레시피), 알룐카 초콜릿, 벨루가 보드카, 마트료시카',
      weatherDesc: { spring: '바람이 쌀쌀하므로 가벼운 외투가 필수입니다.', summer: '덥지 않고 선선하며 해수욕장에서 해양 축제를 하기에 아주 쾌적합니다.', autumn: '러시아의 맑고 푸른 가을 하늘과 차가운 해안 바람이 기분을 상쾌하게 만듭니다.', winter: '바다가 꽁꽁 얼어붙는 매서운 한파입니다. 따뜻한 보드카와 킹크랩이 최고입니다.' },
      courses: { 
        '2-3': '<br>1DAY: 공항 도착 -> 아르바트 거리 도보 및 해양공원 곰새우 먹방 -> 독수리 전망대 야경<br>2DAY: 블라디보스토크 기차역 역사투어 -> 혁명광장 -> 현지 샤실릭 전문점 만찬<br>3DAY: 해안가 토카렙스키 등대 산책 후 기념품 샵 당근크림 쇼핑 -> 귀국'
      }
    }
  },
  {
    id: 'i40', name: '마카오 (Macau)', location: 'international', flight: 'short', duration: ['2-3', '4-6'], style: ['history', 'culture', 'nightlife', 'food'], bestSeasons: ['autumn', 'winter'], image: 'https://picsum.photos/seed/i40/800/600', description: '화려한 라스베이거스 스타일 카지노 리조트 야경과 포르투갈 문화 유적의 아름다운 공존.',
    quickInfo: { months: '10월~3월', flight: '3시간 40분 직항', visa: '무비자 30일', voltage: '230V', temp: { spring: '22℃', summer: '28℃', autumn: '24℃', winter: '16℃' } },
    details: {
      spots: '세나도 광장, 성 바오로 성당 유적, 타이파 빌리지, 코타이 스트립 야경', food: '로드스토우 에그타르트, 주빠빠오(고기 샌드위치), 포르투갈식 에스카르고/크랩', hotel: '더 베네시안 마카오, 윈 팰리스 마카오(분수쇼), 갤럭시 마카오', shopping: '로드스토우 에그타르트(포장), 아몬드 쿠키, 육포거리 육포, 포르투갈 와인(그린와인)',
      weatherDesc: { spring: '선선하고 다소 안개가 낄 수 있지만 쇼핑과 도보 여행에 괜찮습니다.', summer: '고온다습하며 리조트 내부의 강력한 에어컨 대비 가벼운 셔츠가 유용합니다.', autumn: '맑고 선선하여 성 바오로 성당 앞 계단에서 노을 사진을 찍기 최고의 날씨입니다.', winter: '한국의 가을 날씨처럼 아주 쾌적하며 화려한 전등 축제와 연말 쇼를 관람하기 안성맞춤입니다.' },
      courses: { 
        '2-3': '<br>1DAY: 마카오 공항 도착 -> 타이파 빌리지 골목 구경 및 주빠빠오 간식 -> 코타이 스트립 리조트 화려한 밤 야경<br>2DAY: 세나도 광장 세계문화유산 투어 -> 성 바오로 성당 -> 피셔맨스 워프 -> 로드스토우 에그타르트 디저트<br>3DAY: 베네시안 리조트 곤돌라 체험 및 아몬드 쿠키 쇼핑 후 귀국',
        '4-6': '<br>1DAY: 마카오 럭셔리 리조트 체크인 후 셔틀버스 코타이 투어<br>2DAY: 역사 깊은 세나도 광장 및 몬테 요새 탐방 -> 매캐니즈(포르투갈+현지) 저녁 정찬<br>3DAY: 콜로안 빌리지 조용한 해안 산책 및 에그타르트 본점 방문<br>4DAY: 윈 팰리스 무료 케이블카 분수쇼 관람 및 하이킹 호텔 카지노 쇼 투어<br>5DAY: 타이파 푸드 스트리트 식도락 및 귀국 쇼핑몰 투어 후 복귀'
      }
    }
  },

  // International - Medium Flight (3-6 hours)
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
    id: 'i28', name: '끄라비, 태국 (Krabi)', location: 'international', flight: 'medium', duration: ['4-6', '7-14'], style: ['relaxation', 'nature', 'adventure'], bestSeasons: ['winter', 'spring'], image: 'https://picsum.photos/seed/i28/800/600', description: '기암괴석 석회암 절벽과 신비의 에메랄드 해변이 연출하는 태국의 숨겨진 열대 파라다이스.',
    quickInfo: { months: '11월~4월', flight: '7시간 이상 (방콕 경유)', visa: '무비자 90일', voltage: '220V', temp: { spring: '29℃', summer: '28℃', autumn: '27℃', winter: '26℃' } },
    details: {
      spots: '라일레이 비치(암벽등반), 홍섬 호핑투어, 에메랄드 풀, 피피섬 바다', food: '로티(태국식 팬케이크), 똠얌꿍, 생선구이, 해산물 바베큐, 팟타이', hotel: '센타라 그랜드 비치 리조트 끄라비, 라야바디 끄라비, 밴 샌 차오 카페', shopping: '천연 코코넛 오일, 타이 아로마 스파 소금, 말린 망고, 코코넛 칩, 로컬 타이 실크',
      weatherDesc: { spring: '가장 쾌적하고 맑은 건기 후반부로 라일레이 비치에서 수영하기 안성맞춤입니다.', summer: '스콜이 자주 내리지만, 바위 절벽 사이에 떨어지는 빗줄기마저 이국적인 절경이 됩니다.', autumn: '비가 점점 줄어들고 쾌적한 무역풍이 불어와 해양 액티비티에 좋습니다.', winter: '끄라비 최고의 성수기로 바다가 가장 푸르고 고요하여 천국의 휴양을 맛봅니다.' },
      courses: { 
        '4-6': '<br>1DAY: 방콕 환승 끄라비 도착 -> 아오낭 비치 석양 감상 -> 해변가 씨푸드 식사<br>2DAY: 라일레이 비치로 보트 이동 -> 동굴 비치 산책 및 암벽 등반가 구경 -> 아오낭 타이 마사지<br>3DAY: 홍섬(Hong Island) 롱테일보트 투어 스노클링 -> 야시장 먹방<br>4DAY: 정글 에메랄드 풀 천연 온천수 수영 -> 블루 풀 신비로운 물구경<br>5DAY: 아오낭 쇼핑몰 및 타이 로컬 스파 후 방콕 환승 귀국',
        '7-14': '<br>1DAY~4DAY: 아오낭 및 라일레이 비치 휴양 마스터<br>5DAY~6DAY: 페리를 타고 아름다운 피피섬(Phi Phi Island) 이동하여 1박 및 스노클링<br>7DAY: 끄라비 타운 로컬 마켓 구경 및 기념품 쇼핑 후 귀국'
      }
    }
  },
  {
    id: 'i31', name: '쿠알라룸푸르, 말레이시아 (Kuala Lumpur)', location: 'international', flight: 'medium', duration: ['2-3', '4-6'], style: ['city', 'shopping', 'food'], bestSeasons: ['spring', 'summer'], image: 'https://picsum.photos/seed/i31/800/600', description: '세계 최대 쌍둥이 빌딩인 페트로나스 트윈 타워의 화려함과 다채로운 아시아 길거리 미식의 교차로.',
    quickInfo: { months: '5월~9월', flight: '6시간 30분 직항', visa: '무비자 90일', voltage: '240V', temp: { spring: '28℃', summer: '28℃', autumn: '28℃', winter: '27℃' } },
    details: {
      spots: '페트로나스 트윈타워, 바투 동굴(무지개 계단), 잘란 알로 야시장, 수리아 KLCC 쇼핑몰', food: '사테(꼬치구이), 바쿠테(갈비탕), 나시레막, 락사, 로티 차나이', hotel: 'W 쿠알라룸푸르(트윈타워 전망 최고), 그랜드 하얏트 쿠알라룸푸르, 만다린 오리엔탈', shopping: '올드타운 화이트커피, BOH 차, 카야잼, 피오나 코코넛 오일, 히말라야 수분크림',
      weatherDesc: { spring: '적당한 스콜과 함께 푸르른 시내 전경을 쇼핑몰과 루프탑 바에서 만끽하기 훌륭합니다.', summer: '비교적 강수량이 적은 최고의 건기 시즌으로 바투 동굴 등 야외 관광에 최고입니다.', autumn: '스콜이 잦아지지만, 대형 쇼핑몰 인프라가 워낙 훌륭해 실내 쇼핑에 전혀 무리가 없습니다.', winter: '연말 리조트 쇼와 크리스마스 장식으로 화려하게 빛나는 메가시티의 밤을 즐깁니다.' },
      courses: { 
        '2-3': '<br>1DAY: KLIA 공항 도착 -> 호텔 체크인 -> 잘란 알로 야시장 사테와 맥주 먹방<br>2DAY: 이국적인 힌두교 성지 바투 동굴 -> 수리아 KLCC 쇼핑 -> 페트로나스 트윈타워 야경 및 루프탑 바<br>3DAY: 메르데카 광장 역사 도보 여행 후 올드타운 화이트커피 시음 -> 귀국',
        '4-6': '<br>1DAY: 쿠알라룸푸르 도심 쇼핑 및 야시장 맛집 투어<br>2DAY: 바투 동굴 및 겐팅 하이랜드 고원 테마파크 당일치기<br>3DAY: 핑크 모스크가 아름다운 푸트라자야 행정도시 투어<br>4DAY: 말레이시아 역사 도시 [말라카 당일치기] 네덜란드 광장 및 야경 투어<br>5DAY: 센트럴 마켓 수공예품 쇼핑 및 마사지 후 귀국'
      }
    }
  },
  {
    id: 'i32', name: '보라카이, 필리핀 (Boracay)', location: 'international', flight: 'medium', duration: ['2-3', '4-6'], style: ['relaxation', 'nightlife', 'nature'], bestSeasons: ['winter', 'spring'], image: 'https://picsum.photos/seed/i32/800/600', description: '지상에서 가장 부드러운 화이트 비치 모래 사장과 환상적인 세일링 보트 선셋.',
    quickInfo: { months: '12월~4월', flight: '4시간 30분 직항 (칼리보행)', visa: '무비자 30일', voltage: '220V', temp: { spring: '28℃', summer: '29℃', autumn: '28℃', winter: '26℃' } },
    details: {
      spots: '화이트 비치, 푸카 쉘 비치, 윌리스 락, 디몰(D-Mall) 쇼핑가', food: '망고 쉐이크, 갈릭 라이스, 알리망오 크랩 구이, 산미구엘 맥주, 필리핀식 바베큐', hotel: '헤난 프라임 리조트, 샹그릴라 보라카이, 크림슨 보라카이', shopping: '조비스 바나나칩, 코코넛 수제 비누, 7D 건망고, 폰즈 크림, 깔라마리 스낵',
      weatherDesc: { spring: '바람이 잔잔해 수온이 따뜻하고 스노클링을 포함한 해양 활동의 최고 절정기입니다.', summer: '우기로 바람이 불지만 시원한 밤바다 비치 펍 라이브 공연을 즐기기에 운치 있습니다.', autumn: '태풍이 불어올 수 있어 리조트 수영장에서 한가롭게 호캉스를 즐기는 것을 추천합니다.', winter: '화이트 비치의 푸른 투명도가 극에 달하는 완벽한 건기로 보라카이 최고의 성수기입니다.' },
      courses: { 
        '2-3': '<br>1DAY: 칼리보 공항 -> 샌딩 배 탑승 -> 보라카이 입성 후 화이트 비치 밤 산책 및 맥주<br>2DAY: 오전 크리스탈 코브 호핑투어 스노클링 -> 디몰 점심식사 -> 선셋 돛단배(세일링 보트) 탑승<br>3DAY: 푸카 쉘 비치 포토존 -> 디몰 쇼핑 후 전신 마사지 -> 귀국',
        '4-6': '<br>1DAY: 보라카이 리조트 체크인 후 화이트 비치 스테이션2 맛집 탐방<br>2DAY: 선셋 세일링 요트 및 스킨스쿠버 체험 다이빙<br>3DAY: 섬 북부 한적한 푸카 쉘 해변 투어 및 현지 바베큐<br>4DAY: 막스 해변에서 비치 발리볼 및 럭셔리 스파 마사지<br>5DAY: 아일랜드 호핑투어(거북이 스노클링) 및 랍스터 만찬 후 귀국'
      }
    }
  },
  {
    id: 'i33', name: '나트랑, 베트남 (Nha Trang)', location: 'international', flight: 'medium', duration: ['2-3', '4-6'], style: ['relaxation', 'family', 'food'], bestSeasons: ['spring', 'summer'], image: 'https://picsum.photos/seed/i33/800/600', description: '연중 300일 이상 맑은 날씨! 롱비치 해변과 머드 온천, 테마파크가 가득한 가족 휴양의 메카.',
    quickInfo: { months: '1월~8월', flight: '5시간 직항', visa: '무비자 45일', voltage: '220V', temp: { spring: '27℃', summer: '30℃', autumn: '26℃', winter: '23℃' } },
    details: {
      spots: '빈원더스 테마파크, 포나가르 첨탑, 아이리조트 머드온천, 나트랑 대성당', food: '반깐(새우 계란 빵), 신선한 랍스터 구이, 베트남식 쌀국수, 반세오', hotel: '빈펄 리조트 나트랑, 아미아나 리조트(프라이빗 오션풀 최고), 쉐라톤 나트랑', shopping: '베트남 캐슈넛, 체리쉬 망고푸딩, 코코넛 비누, 콘삭 다람쥐커피, 한시장풍 원피스(담시장)',
      weatherDesc: { spring: '습도가 낮고 화창하여 롱비치 바다와 리조트 야외 풀에서 수영하기 최고의 날씨입니다.', summer: '기온이 올라가지만, 나트랑 해풍이 불어 시원하고 빈원더스 워터파크에서 놀기 최적입니다.', autumn: '비가 자주 내리는 우기로 야외 활동 대신 따뜻한 로컬 머드 온천욕과 마사지 투어를 추천합니다.', winter: '약간 쌀쌀하지만 한국의 따뜻한 초가을 같아 나트랑 성당 등 사원 투어하기에 좋습니다.' },
      courses: { 
        '2-3': '<br>1DAY: 깜란 공항 도착 -> 럭셔리 풀빌라 체크인 -> 나트랑 롱비치 씨푸드 저녁식사<br>2DAY: 포나가르 참판 유적지 사원 관람 -> 아이리조트 광천수 머드 온천 힐링 -> 콩카페 코코넛 커피<br>3DAY: 담시장 기념품 쇼핑 및 마사지 케어 후 귀국',
        '4-6': '<br>1DAY: 나하 해안도로 산책 및 콩카페 코코넛 스무디 맛보기<br>2DAY: 빈원더스 섬(케이블카 탑승) 워터파크 및 롤러코스터 하루 종일 투어<br>3DAY: 아이리조트 프라이빗 머드 스파 힐링 -> 야간 랍스터 야시장 먹방<br>4DAY: 아미아나 리조트 내 프라이빗 비치에서 스노클링(물고기 가득)<br>5DAY: 담시장 라탄백 쇼핑 및 로컬 쌀국수 투어 후 귀국'
      }
    }
  },
  {
    id: 'i34', name: '사이판 (Saipan)', location: 'international', flight: 'medium', duration: ['2-3', '4-6'], style: ['relaxation', 'nature', 'family'], bestSeasons: ['winter', 'spring'], image: 'https://picsum.photos/seed/i34/800/600', description: '눈부신 투명도를 가진 마나가하 섬과 세계적인 다이빙 성지인 그로토 동굴을 간직한 평화로운 미국 영토.',
    quickInfo: { months: '12월~5월', flight: '4시간 30분 직항', visa: '무비자 45일(ESTA가능)', voltage: '110V', temp: { spring: '27℃', summer: '28℃', autumn: '27℃', winter: '26℃' } },
    details: {
      spots: '마나가하 섬, 그로토 해식 동굴, 만세 절벽 별빛투어, 새 섬(Bird Island)', food: '생참치회와 소주(사이판 특산), 차모로식 바베큐, LA 갈비, 코코넛 크랩', hotel: '켄싱턴 호텔 사이판, 사이판 하얏트 리젠시, 카노아 리조트', shopping: '노니 비누, 마카다미아 초콜릿, 선크림(자외선 차단 100짜리 필수), 아이러브사이판 티셔츠 및 마그넷',
      weatherDesc: { spring: '태평양의 맑고 푸른 무역풍이 불어 쾌적하며 그로토 동굴 스노클링에 완벽합니다.', summer: '스콜이 자주 오고 습하지만 물놀이를 즐기기엔 여전히 따뜻한 수온을 유지합니다.', autumn: '태풍이 올 가능성이 있어 날씨 확인이 필요하지만, 맑은 날 밤 만세절벽에서 보는 은하수는 환상적입니다.', winter: '습도가 가장 낮고 저녁엔 선선하여 해변가에서 랍스터 바베큐를 구워 먹기 지상낙원입니다.' },
      courses: { 
        '2-3': '<br>1DAY: 사이판 도착 -> 투몬 비치 닮은 가라판 시내 생참치회 만찬 -> 만세절벽 쏟아지는 은하수 밤하늘 투어<br>2DAY: 배 타고 15분 마나가하 섬 입성 -> 하루 종일 스노클링 및 패러세일링 -> 디너 씨푸드<br>3DAY: 그로토 해식동굴 스노클링 투어 -> 아이러브사이판 굿즈 쇼핑 후 귀국',
        '4-6': '<br>1DAY: 가라판 호텔 체크인 후 수영장 힐링 및 노을 비치바<br>2DAY: 청정 무인도 마나가하 섬 스노클링 투어 (인생 바다)<br>3DAY: 북부 렌터카 드라이브 (새섬 -> 만세절벽) 및 오션뷰 골프<br>4DAY: 신비의 파란 동굴 그로토 다이빙/스노클링 체험 -> 정글 버기카 투어<br>5DAY: 가라판 면세점 쇼핑 및 리조트 풀 스파 마사지 후 귀국'
      }
    }
  },
  {
    id: 'i35', name: '시안, 중국 (Xi\'an)', location: 'international', flight: 'medium', duration: ['2-3', '4-6'], style: ['history', 'culture', 'food'], bestSeasons: ['spring', 'autumn'], image: 'https://picsum.photos/seed/i35/800/600', description: '진시황의 위엄 병마용갱과 당나라의 화려함이 부활하는 대당불야성의 화려한 밤.',
    quickInfo: { months: '4월~5월, 9~10월', flight: '3시간 15분 직항', visa: '비자 필수(중국비자)', voltage: '220V', temp: { spring: '15℃', summer: '27℃', autumn: '16℃', winter: '1℃' } },
    details: {
      spots: '병마용갱, 시안 성벽 자전거, 대당불야성 거리 야경, 비림 박물관', food: '뱡뱡면(수제 넓은 면), 로우지아모(중국식 햄버거), 양육포포(양고기 탕), 교자 연회', hotel: '시안 W 호텔, 소피텔 레전드 피플스 그랜드 호텔 시안, 시안 그랜드 하얏트', shopping: '병마용 미니어처 석상, 당나라 복식 부채, 대추 견과류 샌드, 시안 로컬 전통 전통 녹차',
      weatherDesc: { spring: '황사가 가끔 있으나 기온이 따뜻하여 웅장한 시안 성벽 위를 자전거 타고 돌기 좋습니다.', summer: '분지라 매우 덥습니다. 낮에는 시원한 병마용 박물관을 구경하고 밤에 대당불야성 야경을 산책합니다.', autumn: '중국의 높은 가을 하늘 아래 역사 유적지를 걸어 다니며 공부하기 최상의 계절입니다.', winter: '매우 춥지만 성벽에 걸린 붉은 신년 가로등 장식과 고풍스러운 하얀 눈꽃 기와가 장관입니다.' },
      courses: { 
        '2-3': '<br>1DAY: 시안 공항 도착 -> 대당불야성 화려한 당나라 밤 야경 투어 및 뱡뱡면 식사<br>2DAY: 진시황의 신비 병마용 박물관 투어 -> 시안 성벽 위 자전거 라이딩 -> 회민가(이슬람 시장) 꼬치 야식<br>3DAY: 대안탑 광장 구경 후 중국 정통 교자 만찬 -> 귀국',
        '4-6': '<br>1DAY: 시안 중심가 성벽 안쪽 역사 탐방 및 시안 W 호텔 체크인<br>2DAY: 불가사의한 병마용갱 및 진시황릉 완전 정복 역사 가이드 투어<br>3DAY: 수려한 화산(Hua Shan) 케이블카 탑승 및 깎아지른 절벽 액티비티<br>4DAY: 시안 성벽 자전거 하이킹 및 종루/고루 목조 타워 감상<br>5DAY: 대당불야성 거리 전통 춤 공연 관람 및 전통 차 시음 후 귀국'
      }
    }
  },
  {
    id: 'i39', name: '치앙마이, 태국 (Chiang Mai)', location: 'international', flight: 'medium', duration: ['4-6', '7-14'], style: ['relaxation', 'culture', 'food'], bestSeasons: ['winter', 'spring'], image: 'https://picsum.photos/seed/i39/800/600', description: '전 세계 디지털 노마드들의 고향. 고즈넉한 란나 왕국 사원들과 아기자기한 감성 카페 투어.',
    quickInfo: { months: '11월~3월', flight: '5시간 50분 직항', visa: '무비자 90일', voltage: '220V', temp: { spring: '28℃', summer: '27℃', autumn: '26℃', winter: '23℃' } },
    details: {
      spots: '도이수텝 사원 야경, 님만해민 감성 골목, 치앙마이 일요 나이트마켓, 엘리펀트 네이처 파크(코끼리 보호구역)', food: '카오소이(코코넛 카레국수), 사이우아(허브 소시지), 로티 디저트, 수박주스(땡모반)', hotel: '베란다 하이 리조트 치앙마이, 라야 헤리티지, 포시즌스 리조트 치앙마이', shopping: '아기자기한 수공예 에코백, 우산 공예품, 천연 아로마 디퓨저 오일, 수제 세라믹 컵, 태국 밀크티 파우더',
      weatherDesc: { spring: '날씨가 더워지지만 4월 수송크란 물축제의 짜릿한 활기를 온몸으로 즐길 수 있습니다.', summer: '스콜이 내리며 숲이 가장 울창해집니다. 치앙마이 예술가 마을 갤러리 샵 실내 투어에 어울립니다.', autumn: '11월 등불 축제(러이끄라통)가 열려, 밤하늘로 수만 개의 풍등을 띄워 올리는 비현실적 광경을 봅니다.', winter: '치앙마이 최고의 날씨! 습도가 낮고 아침저녁으로 서늘하여 사찰 계단 걷기와 루프탑 카페 힐링에 완벽합니다.' },
      courses: { 
        '4-6': '<br>1DAY: 치앙마이 올드타운 도착 -> 란나 스타일 사원(왓 체디루앙) 산책 -> 카오소이 점심 -> 나이트 바자 야시장<br>2DAY: 힙스터들의 성지 님만해민 골목 예쁜 디자인 카페 투어 -> 도이수텝 사원 황금빛 산정 야경 투어<br>3DAY: 친환경 엘리펀트 케어 투어 (코끼리 목욕시키기/밥주기) -> 예술가 마을 반캉왓 쇼핑<br>4DAY: 도이 인타논 국립공원(태국 최고봉) 정글 트래킹 및 메마른 폭포 감상<br>5DAY: 치앙마이 럭셔리 허브 스파 패키지 및 시원한 땡모반 해장 후 귀국',
        '7-14': '<br>1DAY~4DAY: 치앙마이 올드타운 및 님만해민 감성 정복<br>5DAY~6DAY: 구불구불한 762개 고개를 넘어 산속 배낭여행자 성지 [빠이(Pai) 이동 1박] 빠이 협곡 선셋<br>7DAY: 태국 최북단 예술의 도시 치앙라이 백색사원 당일치기 투어 후 귀국'
      }
    }
  },
  {
    id: 'i44', name: '푸켓, 태국 (Phuket)', location: 'international', flight: 'medium', duration: ['4-6', '7-14'], style: ['relaxation', 'nightlife', 'family'], bestSeasons: ['winter', 'spring'], image: 'https://picsum.photos/seed/i44/800/600', description: '태국의 진주. 활기찬 안다만 해변 휴양과 피피섬 스노클링, 그리고 화려한 야간 문화.',
    quickInfo: { months: '11월~4월', flight: '6시간 직항', visa: '무비자 90일', voltage: '220V', temp: { spring: '29℃', summer: '28℃', autumn: '28℃', winter: '26℃' } },
    details: {
      spots: '빠통 비치(방라 로드), 피피섬 스노클링, 팡아만 제임스본드 섬, 푸켓 올드타운 주말시장', food: '랍스터 숯불구이, 푸팟퐁커리, 파인애플 볶음밥, 팟타이, 타이 로컬 꼬치구이', hotel: '반얀트리 푸켓, 로즈우드 푸켓, 더 나카 푸켓(럭셔리 풀빌라)', shopping: '태국 유명 홈 스파(탄, 한, 카르마카멧) 제품, 짐톰슨 실크 스카프, 캐슈넛 믹스, 말린 망고',
      weatherDesc: { spring: '바다가 잔잔하고 물빛이 가장 맑은 시기입니다. 요트 선셋 투어에 최고입니다.', summer: '스콜과 파도가 세져 서핑하기 좋은 시즌이지만 섬 호핑 투어 시 멀미약을 챙기세요.', autumn: '우기 후반으로 날씨 변화가 잦으나 리조트 내부 프라이빗 스파를 가성비 있게 즐기기에 훌륭합니다.', winter: '세계 각국 휴양객이 몰리는 황금 건기로 안다만 해변 선베드에서 하루 종일 칵테일을 홀짝입니다.' },
      courses: { 
        '4-6': '<br>1DAY: 푸켓 공항 도착 -> 빠통 비치 최고급 풀빌라 체크인 -> 방라 로드 화려한 바(Bar) 야경 구경<br>2DAY: 페리 타고 피피섬(Phi Phi Island) 호핑투어 에메랄드 해변 스노클링 -> 오션뷰 디너<br>3DAY: 팡아만 롱테일보트 투어 (제임스본드섬 카약 탐험) -> 푸켓 올드타운 야경<br>4DAY: 카론 비치 서핑 및 해변 선셋 요트 세일링 투어<br>5DAY: 아로마 타이 전신 마사지 및 쇼핑몰 투어 후 귀국',
        '7-14': '<br>1DAY~4DAY: 푸켓 본섬 및 해양 스포츠 액티비티 완전 정복<br>5DAY~6DAY: 조용하고 이국적인 [카오락(Khao Lak) 이동] 국립공원 정글 강줄기 대나무 뗏목 래프팅<br>7DAY: 푸켓 올드타운 인스타그램 감성 건물 카페 투어 및 쇼핑 마무리 후 귀국'
      }
    }
  },

  // International - Long Flight (> 6 hours)
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
  },
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
    id: 'i22', name: '헬싱키, 핀란드 (Helsinki)', location: 'international', flight: 'long', duration: ['7-14'], style: ['culture', 'relaxation', 'nature'], bestSeasons: ['summer', 'winter'], image: 'https://picsum.photos/seed/i22/800/600', description: '북유럽 디자인과 순수한 대자연의 조화. 전통 핀란드 사우나와 평화로운 숲길.',
    quickInfo: { months: '6월~8월, 12~2월', flight: '9시간 30분 직항', visa: '무비자 90일', voltage: '230V', temp: { spring: '5℃', summer: '18℃', autumn: '7℃', winter: '-6℃' } },
    details: {
      spots: '암석 교회(템펠리아우키오), 시벨리우스 공원, 카우파토리 마켓광장, 수오멘린나 요새', food: '연어 스프(Lohikeitto), 순록 스테이크, 시나몬 롤(Korvapuusti), 베리 파이', hotel: '클라리온 호텔 헬싱키, 호텔 스탠트, 릴라 로버츠', shopping: '마리메꼬 패브릭/에코백, 자일리톨 캔디, 무민 캐릭터 굿즈, 이딸라(Iittala) 유리컵',
      weatherDesc: { spring: '날이 풀리기 시작하지만 여전히 서늘하며 얼음이 녹아 맑은 호수가 빛납니다.', summer: '백야 현상이 일어나 해가 길며, 습도가 없고 선선해 여행의 최적기입니다.', autumn: '북유럽 특유의 깊고 서정적인 가을 숲길의 낙엽을 밝으며 산책할 수 있습니다.', winter: '하얗게 눈이 쌓인 북유럽 풍경 속에서 정통 핀란드 호수 온천 사우나를 맛보기 완벽합니다.' },
      courses: { 
        '7-14': '<br>1DAY: 헬싱키 반타 공항 도착 -> 카우파토리 마켓광장 노점 연어수프 점심 -> 에스플라나디 공원 산책<br>2DAY: 바위를 파내어 만든 신비의 템펠리아우키오 암석 교회 -> 핀란디아 홀 -> 헬싱키 대성당 투어<br>3DAY: 페리선 탑승 -> 유네스코 세계유산 수오멘린나 요새 섬 도보 투어 및 피크닉<br>4DAY: 로컬 디자인 디스트릭트 세련된 소품 쇼핑 -> 정통 로얄 공공 사우나(Loyly) 사우나 체험 및 찬 바다 다이빙<br>5DAY~6DAY: [근교 로바니에미 이동 - 산타클로스 마을] 진짜 산타 만나기 및 개썰매/오로라 헌팅 투어<br>7DAY: 마리메꼬 아울렛 쇼핑 및 헬싱키 시내 마무리 후 귀국'
      }
    }
  },
  {
    id: 'i23', name: '코펜하겐, 덴마크 (Copenhagen)', location: 'international', flight: 'long', duration: ['7-14'], style: ['city', 'culture', 'relaxation'], bestSeasons: ['spring', 'summer'], image: 'https://picsum.photos/seed/i23/800/600', description: '동화 속 뉘하운 운하와 인어공주 동상, 그리고 전 세계 행복 지수 1위 국가의 \'휘게(Hygge)\' 라이프.',
    quickInfo: { months: '5월~9월', flight: '11시간 이상 (경유)', visa: '무비자 90일', voltage: '230V', temp: { spring: '7℃', summer: '18℃', autumn: '9℃', winter: '1℃' } },
    details: {
      spots: '뉘하운 운하, 티볼리 가든 테마파크, 스트뢰에 보행자 거리, 인어공주 동상', food: '스뫼레브뢰(오픈 샌드위치), 대니쉬 페이스트리 빵, 미트볼(Frikadeller), 칼스버그 맥주', hotel: '71 뉘하운 호텔(운하 바로 앞), 시티즌M 코펜하겐, 노빌리스 호텔', shopping: '로얄 코펜하겐 도자기, 덴마크 레고(Lego) 본고장 블록, 플라잉 타이거 소품, 덴마크 왕실 버터쿠키',
      weatherDesc: { spring: '공원에 튤립이 만발하고 시원한 북해 바람과 함께 테라스 카페가 문을 엽니다.', summer: '티볼리 공원이 밤늦게까지 야간 개장하여 낭만적인 밤공기와 놀이기구를 타기에 완벽합니다.', autumn: '다소 흐린 날이 늘지만 아늑한 카페에서 캔들을 켜고 따뜻한 핫초코를 마시는 휘게 감성에 최적입니다.', winter: '해는 짧지만 도시 전체가 화려한 조명과 크리스마스 마켓으로 뒤덮여 북유럽의 낭만을 자아냅니다.' },
      courses: { 
        '7-14': '<br>1DAY: 코펜하겐 공항 도착 -> 알록달록한 뉘하운 운하 산책 -> 운하 크루즈 유람선 탑승<br>2DAY: 스트뢰에 보행자 거리 쇼핑 및 카페 투어 -> 인어공주 동상과 카스텔레 요새 산책<br>3DAY: 세계 최고(最古) 테마파크 티볼리 가든에서 동심 가득 놀이기구와 낭만적 야경<br>4DAY: 아말리엔보르 궁전 근위병 교대식 관람 -> 칼스버그 맥주 공장 역사 시음 투어<br>5DAY~6DAY: [근교 이웃나라 스웨덴 말뫼 당일치기] 외레순 대교 타고 국경 건너기 투어<br>7DAY: 로얄코펜하겐 플래그십 매장 쇼핑 후 커피 및 귀국길'
      }
    }
  },
  {
    id: 'i24', name: '스톡홀름, 스웨덴 (Stockholm)', location: 'international', flight: 'long', duration: ['7-14'], style: ['city', 'culture', 'nature'], bestSeasons: ['summer', 'autumn'], image: 'https://picsum.photos/seed/i24/800/600', description: '북유럽의 베네치아. 14개 섬을 연결하는 물 위의 투명한 미학, 감라스탄 구시가지의 중세 정취.',
    quickInfo: { months: '6월~8월', flight: '11시간 이상 (경유)', visa: '무비자 90일', voltage: '230V', temp: { spring: '6℃', summer: '20℃', autumn: '8℃', winter: '-2℃' } },
    details: {
      spots: '감라스탄 구시가지, 바사 박물관(복원 전함), 스톡홀름 시청사(노벨상 연회장), 아바(ABBA) 박물관', food: '스웨디시 미트볼(Kottbullar), 시나몬 번(Kanelbullar), 훈제 연어 샐러드, 스웨덴 전통 감자요리', hotel: '앳 식스(At Six) 디자인 호텔, 래디슨 블루 로열, 홉트 호스텔', shopping: '이케아(IKEA) 핀 굿즈, 아크네 스튜디오 의류, 피카(Fika) 원두 커피백, 스웨덴 수제 에그팩 비누',
      weatherDesc: { spring: '날이 선선하며, 스톡홀름의 14개 섬을 잇는 크루즈가 활발하게 운항을 재개합니다.', summer: '북유럽 최고의 쾌적하고 화창한 날씨! 해가 질 무렵의 투명하고 푸른 선셋이 호수에 투영됩니다.', autumn: '감라스탄의 좁은 중세 돌바닥 골목 위로 낙엽이 흩날리는 묵직한 고전 감성의 가을입니다.', winter: '도시 전체가 흰 눈으로 화려하게 은빛 단장을 하며 눈 덮인 호수 풍경이 웅장함을 연출합니다.' },
      courses: { 
        '7-14': '<br>1DAY: 알란다 공항 도착 -> 중세 모습 그대로 간직한 감라스탄 골목 산책 -> 피카(Fika) 시나몬롤 티타임<br>2DAY: 노벨상 공식 연회가 열리는 웅장한 스톡홀름 시청사 내부 투어 -> 감라스탄 왕궁 교대식<br>3DAY: 17세기 난파된 거대 목조 전함을 복원한 바사 박물관 관람 -> 유르고덴 섬 자전거 하이킹<br>4DAY: 전설적인 그룹 아바(ABBA) 뮤직 체험 박물관 -> 현대 미술관 모던 뮤지엄 전시 관람<br>5DAY~6DAY: [초호화 크루즈 실자라인 탑승 1박] 스톡홀름에서 핀란드 헬싱키로 오션뷰 크루즈 이동<br>7DAY: 아크네 스튜디오 아울렛 쇼핑 및 스웨디시 미트볼 식사 후 복귀'
      }
    }
  },
  {
    id: 'i25', name: '로마/피렌체, 이탈리아 (Rome/Florence)', location: 'international', flight: 'long', duration: ['7-14'], style: ['history', 'culture', 'food', 'romantic'], bestSeasons: ['spring', 'autumn'], image: 'https://picsum.photos/seed/i25/800/600', description: '천년 로마 제국의 위엄 콜로세움과 르네상스의 붉은 낭만을 머금은 피렌체 두오모.',
    quickInfo: { months: '4월~6월, 9~10월', flight: '12시간 직항', visa: '무비자 90일', voltage: '230V', temp: { spring: '14℃', summer: '26℃', autumn: '18℃', winter: '8℃' } },
    details: {
      spots: '로마 콜로세움, 트레비 분수, 바티칸 미술관, 피렌체 두오모 성당, 미켈란젤로 언덕 선셋', food: '정통 까르보나라, 나폴리 화덕피자, 피렌체 티본스테이크(Bistecca), 젤라또, 에스프레소', hotel: '스타호텔 메트로폴 로마, NH 컬렉션 피렌체 포르타 로사, 토스카나 뷰 민박', shopping: '타짜도로 에스프레소 원두, 비알레띠 모카포트, 마르비스(치약계의 샤넬), 피렌체 가죽 잡화(가죽시장)',
      weatherDesc: { spring: '선선하고 따뜻하여 콜로세움과 바티칸 성곽 등 야외 도보 유적 투어에 아주 완벽합니다.', summer: '매우 무덥고 자외선이 강해 한낮에는 바티칸 박물관 등 실내 위주 냉방 코스를 권장합니다.', autumn: '토스카나 포도밭 단풍이 익어갈 때 피렌체 미켈란젤로 언덕에서 선선하게 바라보는 붉은 노을이 환상적입니다.', winter: '한국보다 매우 온화하며, 대기 줄이 긴 바티칸이나 피렌체 우피치 미술관을 쾌적하고 한가롭게 감상하기 좋습니다.' },
      courses: { 
        '7-14': '<br>1DAY: 피우미치노 공항 도착 -> 트레비 분수에 동전 던지기 -> 로마 스페인 광장 야경 산책<br>2DAY: 바티칸 시국 가이드 투어 (성 베드로 대성당, 천장화 감상) -> 로마 전통 파스타 저녁식사<br>3DAY: 콜로세움 내부 입장 -> 포로 로마노 역사 산책 -> 나보나 광장 거리 공연<br>4DAY: 초고속 열차 이탈로 탑승 -> 피렌체 이동 -> 두오모 성당 등반 및 조토의 종탑 붉은 지붕 감상<br>5DAY: 우피치 미술관 르네상스 명작 도슨트 투어 -> 가죽시장 쇼핑 -> 미켈란젤로 광장 환상의 노을과 와인<br>6DAY: [토스카나 근교 당일치기] 피사의 사탑 기념사진 촬영 및 시에나 중세도시 감상 -> 티본 스테이크 파티<br>7DAY: 로마 복귀 전 가죽 잡화 및 이탈리아 커피 원두 쇼핑 후 귀국'
      }
    }
  },
  {
    id: 'i26', name: '바르셀로나, 스페인 (Barcelona)', location: 'international', flight: 'long', duration: ['7-14'], style: ['culture', 'food', 'city'], bestSeasons: ['spring', 'autumn'], image: 'https://picsum.photos/seed/i26/800/600', description: '천재 건축가 가우디의 미완성 걸작 사그라다 파밀리아와 해변가에서 맛보는 빠에야, 츄러스.',
    quickInfo: { months: '4월~6월, 9~10월', flight: '13시간 직항', visa: '무비자 90일', voltage: '230V', temp: { spring: '15℃', summer: '26℃', autumn: '19℃', winter: '9℃' } },
    details: {
      spots: '사그라다 파밀리아 성당, 구엘 공원, 카사 바트요, 고딕 지구 밤거리, 바르셀로네타 해변', food: '감바스 알 아히요, 먹물 빠에야, 타파스 꼬치 투어, 초코 츄러스, 샹그리아 와인', hotel: '마제스틱 호텔 바르셀로나, H10 메트로폴리탄, 까탈루냐 광장 부티크 호텔', shopping: '사바테르 수제 비누, 스페인 국화 꿀차(Manzanilla), 자라(ZARA) 브랜드 의류, 가우디 성당 굿즈',
      weatherDesc: { spring: '쾌적한 기온 속에 구엘 공원의 타일 벤치에 누워 바르셀로나 해안 전경을 감상하기 최적입니다.', summer: '지중해 태양이 강렬하지만, 바르셀로네타 해변에서 서핑과 물놀이 후 차가운 상그리아 한 잔을 즐기기 완벽합니다.', autumn: '선선한 바람을 맞으며 웅장한 사그라다 파밀리아 외관을 벤치에 앉아 감상하기 훌륭한 날씨입니다.', winter: '유럽 타 지역에 비해 매우 따뜻하며 활기찬 람블라스 거리의 겨울 로컬 마켓 감성을 즐깁니다.' },
      courses: { 
        '7-14': '<br>1DAY: 바르셀로나 엘프라트 공항 도착 -> 까탈루냐 광장 람블라스 거리 도보 산책 -> 타파스 바 미식<br>2DAY: [가우디 반나절 버스 투어] 사그라다 파밀리아 성당 감동 관람 -> 구엘 공원 동화 마을 동선<br>3DAY: 카사 바트요 내부 빛의 정원 관람 -> 바르셀로네타 지중해 해변 산책 및 먹물 빠에야 만찬<br>4DAY: 고딕 지구 웅장한 대성당 투어 -> 피카소 미술관 -> 야간 사그라다 파밀리아 조명 감상<br>5DAY~6DAY: [근교 몬세라트 절벽 사원 & 시체스 해변 투어] 산악 열차 탑승 및 파란 해변 힐링<br>7DAY: 국화 꿀차 및 수제비누 기념품 쇼핑 후 지중해 바다 배웅 귀국'
      }
    }
  },
  {
    id: 'i27', name: '프라하, 체코 (Prague)', location: 'international', flight: 'long', duration: ['7-14'], style: ['romantic', 'history', 'culture'], bestSeasons: ['spring', 'autumn', 'winter'], image: 'https://picsum.photos/seed/i27/800/600', description: '붉은 지붕 위로 지는 보랏빛 노을 카를교와 밤에 가야 더 신비로운 체코 최고의 프라하 성.',
    quickInfo: { months: '5월~9월, 12월', flight: '11시간 직항', visa: '무비자 90일', voltage: '230V', temp: { spring: '10℃', summer: '19℃', autumn: '11℃', winter: '0℃' } },
    details: {
      spots: '카를교(Charles Bridge), 프라하 성, 구시가 광장 천문시계탑, 하벨 전통 시장', food: '꼴레뇨(체코식 족발), 뜨르들로(굴뚝빵), 체코식 굴라쉬 스프, 코젤 다크/필스너 우르켈 맥주', hotel: '코스모폴리탄 호텔 프라하, 호텔 킹스 코트, 프라하 성 뷰 에어비앤비', shopping: '체코 맥주 효모 샴푸(마누팍투라), 보헤미안 크리스탈 와인잔, 목각 마리오네트 인형, 체코 전통 온천수 식기',
      weatherDesc: { spring: '블타바 강가에 벚꽃이 흩날리며, 선선한 기운 속에 강변 패들보트를 타기 적합합니다.', summer: '해가 매우 길어 밤 9시가 되어야 붉은 노을이 카를교 너머로 부드럽게 지는 절경을 봅니다.', autumn: '온 세상이 노랗게 단풍 들어 붉은 기와지붕과 완벽한 컬러 대비를 이루는 낭만 가을입니다.', winter: '유럽에서 가장 아름다운 프라하 구시가 크리스마스 마켓이 열리며, 눈 내린 프라하성은 로맨스의 극치입니다.' },
      courses: { 
        '7-14': '<br>1DAY: 프라하 바츨라프 공항 도착 -> 바츨라프 광장 -> 구시가 광장 천문시계 정각 인형쇼<br>2DAY: 해 질 무렵 카를교 도보 산책 및 악사 음악 감상 -> 프라하 성 야간 조명 뷰 꼴레뇨와 맥주 파티<br>3DAY: 트램 탑승 프라하 성 언덕 오르기 -> 성 비투스 대성당 유리공예 관람 -> 황금소로 동화 골목<br>4DAY: 블타바 강변 페달 보트 탑승 -> 하벨 전통시장 마리오네트 인형 구경 -> 재즈바 라이브 공연<br>5DAY~6DAY: [근교 동화마을 체스키 크룸로프 1박] 강물이 굽이치는 체코 최고의 요정 마을 골목 여행<br>7DAY: 맥주샴푸 쇼핑 및 카를교 선셋 배웅 후 귀국'
      }
    }
  },
  {
    id: 'i29', name: '두바이, UAE (Dubai)', location: 'international', flight: 'long', duration: ['4-6', '7-14'], style: ['city', 'shopping', 'adventure'], bestSeasons: ['winter', 'spring'], image: 'https://picsum.photos/seed/i29/800/600', description: '사막 위에 우뚝 선 초현대 미래 세계. 세계 최고 빌딩 부르즈 할리파와 스릴 가득한 사막 오프로드 투어.',
    quickInfo: { months: '11월~3월', flight: '9시간 30분 직항', visa: '무비자 90일', voltage: '220V(3핀)', temp: { spring: '27℃', summer: '38℃', autumn: '30℃', winter: '20℃' } },
    details: {
      spots: '부르즈 할리파 전망대, 두바이 몰 분수쇼, 사막 사파리 오프로드, 팜 주메이라(인공섬)', food: '아랍식 케밥(Shawarma), 대추야자(Dates), 훔무스 소스, 아랍식 전통 커피', hotel: '아틀란티스 더 로얄(초럭셔리), 아틀란티스 더 팜, 주메이라 에미레이트 타워', shopping: '데이츠(대추야자 초콜릿), 페이드아웃 미백크림, 히말라야 립밤(두바이가 저렴), 무당벌레 수제비누',
      weatherDesc: { spring: '낮에는 뜨겁지만 쇼핑몰 냉방이 완벽해 실내 여행과 저녁 분수쇼를 쾌적하게 봅니다.', summer: '40℃가 넘는 살인적인 폭염입니다. 전적으로 실내 두바이몰 및 럭셔리 실내 액티비티를 추천합니다.', autumn: '더위가 한풀 꺾이며 야외 테라스 레스토랑과 사막 캠프파이어를 즐기기 좋아지기 시작합니다.', winter: '두바이 여행의 황금기! 가벼운 여름 옷에 얇은 가디건을 입고 사막 투어와 팜 주메이라 해변을 쾌적하게 다닙니다.' },
      courses: { 
        '4-6': '<br>1DAY: 두바이 도착 -> 팜 주메이라 모노레일 타고 바다 위 리조트 구경 -> 두바이 몰 아쿠아리움<br>2DAY: 828m 세계 최고 부르즈 할리파 초고속 전망대 관람 -> 저녁 두바이 분수쇼 명당 식사<br>3DAY: [오후 사막 사파리 랜드크루저 투어] 사막 언덕 오프로드 레이싱 및 사막 캠프 벨리댄스/바베큐<br>4DAY: 골드 수크(금 시장) 및 올드 두바이 전통 돛단배 아브라 탑승 목조 시장 투어<br>5DAY: 메가 두바이 몰 명품 면세 쇼핑 및 페이드아웃 크림 털기 후 귀국',
        '7-14': '<br>1DAY~4DAY: 두바이 초호화 미래 도시 & 사막 완전 정복<br>5DAY~6DAY: [근교 이웃 토후국 아부다비 당일치기] 눈부신 순백의 셰이크 자이드 그랜드 모스크 및 페라리 월드 테마파크<br>7DAY: 아틀란티스 워터파크 물놀이 및 대추야자 쇼핑 마무리 후 귀국'
      }
    }
  },
  {
    id: 'i30', name: '몰디브 (Maldives)', location: 'international', flight: 'long', duration: ['4-6', '7-14'], style: ['relaxation', 'romantic', 'nature'], bestSeasons: ['winter', 'spring'], image: 'https://picsum.photos/seed/i30/800/600', description: '인도양의 푸른 눈물. 에메랄드 물빛 위 프라이빗 워터 빌라와 바다거북과의 신비로운 수영.',
    quickInfo: { months: '12월~4월', flight: '9시간 이상 (경유)', visa: '무비자 30일', voltage: '230V', temp: { spring: '29℃', summer: '28℃', autumn: '28℃', winter: '27℃' } },
    details: {
      spots: '프라이빗 수상 가옥 리조트, 올후벨리 샌드뱅크(하얀 모래톱), 마푸시 스노클링 포인트', food: '가루디야(몰디브식 피쉬수프), 코코넛 생선커리, 마스후니(참치+코코넛 조림), 갓 잡은 랍스터 코스', hotel: '아난타라 키하바 빌라, 쿠라마티 리조트, 오젠 라이프 마두', shopping: '말레 수산시장 수공예 조개껍질 액자, 천연 유기농 코코넛 오일, 몰디브 로컬 에코 티셔츠',
      weatherDesc: { spring: '우기 직전의 건기 후반부로 바다가 거울처럼 맑고 파도가 아주 고요합니다.', summer: '스콜이 자주 오는 우기이지만 가끔 내리는 소나기가 지나가면 눈부신 태양이 물빛을 밝힙니다.', autumn: '비가 오는 우기로, 상대적으로 가성비 좋은 금액대로 최고급 수상 독채 풀빌라 럭셔리 호캉스가 가능합니다.', winter: '완벽한 건기로 몰디브의 맑은 오션 투명도가 최고치에 달합니다. 지상 최고의 신혼여행 최성수기입니다.' },
      courses: { 
        '4-6': '<br>1DAY: 말레 공항 도착 -> 수상비행기 또는 스피드보트 탑승 -> 프라이빗 워터 빌라 입성 및 리조트 웰컴 칵테일<br>2DAY: 수상 가옥 데크에서 바다로 바로 뛰어들기 스노클링 -> 올 인클루시브 뷔페식 미식<br>3DAY: 리조트 익스커션 (바다거북 및 만타가오리 스노클링 보트 투어) -> 선셋 비치 바베큐 뷔페<br>4DAY: 몰디브 하얀 모래 언덕 샌드뱅크 로맨틱 피크닉 및 인생 기념 샷<br>5DAY: 아침 리조트 요가 및 스파 마사지 -> 말레 공항 복귀 후 귀국',
        '7-14': '<br>1DAY~5DAY: 최고급 올 인클루시브 워터풀빌라에서의 완전무결한 릴랙스 힐링<br>6DAY~7DAY: 말레 본섬 로컬 마켓 투어 및 현지 참치요리 맛보기 -> 패들보드 및 윈드서핑 강습<br>8DAY: 마지막 오션뷰 스파 마사지 후 스피드보트 귀항'
      }
    }
  },
  {
    id: 'i36', name: '오슬로, 노르웨이 (Oslo)', location: 'international', flight: 'long', duration: ['7-14'], style: ['nature', 'culture', 'relaxation'], bestSeasons: ['summer', 'winter'], image: 'https://picsum.photos/seed/i36/800/600', description: '웅장한 피오르드의 나라 관문. 뭉크의 절규 진품을 마주하는 뭉크 미술관과 친환경 도심 사우나.',
    quickInfo: { months: '6월~8월, 12~2월', flight: '12시간 이상 (경유)', visa: '무비자 90일', voltage: '230V', temp: { spring: '6℃', summer: '18℃', autumn: '8℃', winter: '-4℃' } },
    details: {
      spots: '비겔란 조각공원, 오슬로 오페라 하우스, 뭉크 미술관, 송네 피오르드(근교 연계)', food: '노르웨이 연어 스테이크, 갈색 양젖 치즈(Brunost), 사슴고기 스테이크, 와플', hotel: '그랜드 호텔 오슬로, 더 씨프 호텔(디자인호텔), 오슬로 센트럴 부티크 에어비앤비', shopping: '노르웨이 갈색 치즈(브라운치즈), 프리아(Freia) 국민 초콜릿, 노르웨이 전통 울 스웨터, 수제 순록 뼈 공예품',
      weatherDesc: { spring: '피오르드 빙하물이 녹아 흐르고 호수의 푸르름이 싱그럽게 살아납니다.', summer: '오슬로 피오르드를 바라보며 야외 수영과 오페라하우스 지붕 산책을 하기에 더할 나위 없이 선선하고 화창합니다.', autumn: '북유럽의 깊은 산세가 황금색과 갈색으로 짙어져 낭만적인 대자연의 우수에 잠깁니다.', winter: '오슬로 도심 빙판 해안가에서 뜨거운 핀란드식 오두막 사우나와 차가운 피오르드 해수욕을 번갈아 하는 겨울 짜릿함.' },
      courses: { 
        '7-14': '<br>1DAY: 오슬로 가르데르모엔 공항 도착 -> 오페라하우스 대리석 지붕 위에서 오슬로 피오르드 선셋 감상<br>2DAY: 인간의 일생을 조각한 비겔란 조각공원 -> 뭉크 미술관 방문하여 실제 \'절규\' 명화 마주하기<br>3DAY: 칼 요한스 거리 산책 및 오슬로 왕궁 -> 아케르스후스 요새 바다 조망 및 브라운치즈 와플 시식<br>4DAY~6DAY: [노르웨이 인 어 너트쉘 산악 열차 & 피오르드 크루즈 2박 3일] 송네 피오르드 웅장한 빙하 협곡 완전 정복<br>7DAY: 오슬로 복귀 후 연어 요리 만찬 및 피오르드 울 스웨터 쇼핑 후 귀국'
      }
    }
  },
  {
    id: 'i37', name: '레이캬비크, 아이슬란드 (Reykjavik)', location: 'international', flight: 'long', duration: ['7-14'], style: ['nature', 'adventure', 'relaxation'], bestSeasons: ['winter', 'summer'], image: 'https://picsum.photos/seed/i37/800/600', description: '지구 밖 다른 행성 같은 초현실적 절경. 김이 모락모락 피어나는 에메랄드빛 블루라군 온천과 불타는 오로라.',
    quickInfo: { months: '6월~8월, 11~2월', flight: '14시간 이상 (경유)', visa: '무비자 90일', voltage: '230V', temp: { spring: '3℃', summer: '12℃', autumn: '4℃', winter: '-2℃' } },
    details: {
      spots: '블루라군 온천, 골든 서클(게이시르 간헐천, 굴포스 폭포), 오로라 헌팅 투어, 할그림스키랴 교회', food: '아이슬란드식 핫도그(Baejarins Beztu), 랍스터 수프, 스키르(체코/북유럽식 묵직한 요거트), 호카를(삭힌 상어고기)', hotel: '캐노피 바이 힐튼 레이캬비크, 에디션 레이캬비크, 블루라군 실리카 호텔(온천 투숙객 전용)', shopping: '블루라군 실리카 머드 팩, 옴놈(Omnom) 디자인 수제 초콜릿, 화산재 마그넷 소품, 아이슬란드 털실 스웨터(Lopapeysa)',
      weatherDesc: { spring: '설산 사이로 얼음이 깨지며 웅장한 굴포스 폭포의 수량이 가장 힘차게 뿜어져 나옵니다.', summer: '백야 현상으로 하루 종일 해가 지지 않는 신비로운 백야 드라이브(링로드)의 기적을 맛봅니다.', autumn: '날씨는 춥지만 관광객이 줄어 한적하게 사막 같은 거대한 검은 모래 해변을 전세 낸 듯 감상합니다.', winter: '온통 새하얀 얼음 세상 속에서 신비로운 청록빛 하늘 오로라가 커튼처럼 춤추는 일생일대의 기적을 봅니다.' },
      courses: { 
        '7-14': '<br>1DAY: 케플라비크 공항 도착 -> 세계 최대 노천 온천 블루라군에서 화산재 온천수 속 머드 팩 힐링<br>2DAY: [골든 서클 일일 투어] 싱벨리어 국립공원 지각 균열 -> 20m 솟구치는 게이시르 간헐천 -> 압도적 굴포스 폭포<br>3DAY: 레이캬비크 독특한 디자인의 할그림스키랴 교회 -> 시내 유명 핫도그 맛집 투어 -> 스타라이트 밤 오로라 헌팅 투어<br>4DAY~6DAY: [남부 해안 링로드 렌터카 투어] 비크 검은 모래 해변 -> 요쿨살론 거대 빙하 호수 유람선 보트 투어<br>7DAY: 레이캬비크 복귀 후 옴놈 수제초콜릿 쇼핑 및 랍스터스프 몸 녹이기 식사 후 귀국'
      }
    }
  },
  {
    id: 'i41', name: '리스본, 포르투갈 (Lisbon)', location: 'international', flight: 'long', duration: ['7-14'], style: ['romantic', 'culture', 'food', 'history'], bestSeasons: ['spring', 'autumn', 'summer'], image: 'https://picsum.photos/seed/i41/800/600', description: '일곱 개의 언덕 위로 달리는 28번 노란 트램과 원조 에그타르트(나타)의 원초적 달콤함.',
    quickInfo: { months: '4월~6월, 9~10월', flight: '14시간 이상 (경유)', visa: '무비자 90일', voltage: '230V', temp: { spring: '16℃', summer: '24℃', autumn: '19℃', winter: '11℃' } },
    details: {
      spots: '벨렝 탑, 제로니무스 수도원, 28번 노란 전차(트램), 산타 주스타 엘리베이터, 근교 신트라 페냐 성', food: '원조 에그타르트(Pasteis de Belem), 대구 요리(Bacalhau), 해물 밥(문어 해물탕 밥), 포트 와인', hotel: '포르투베이 리베르다드, 포르투갈 부티크 호텔 H10, 알마다 감성 호스텔', shopping: '포르투갈 오리지널 포트와인(달콤한 식후주), 정어리 정밀 통조림캔, 올리브 천연 오일, 아줄레주 문양 컵/도자기, 코르크 친환경 지갑/가방',
      weatherDesc: { spring: '리스본 전체가 따뜻한 햇살로 물들며, 야외 광장에 앉아 버스킹을 들으며 나타를 맛보기 최고입니다.', summer: '한국보다 건조하고 선선하여 리스본 해안 타구스 강변 보행로를 따라 걷기에 매우 쾌적합니다.', autumn: '노을 지는 리스본 포구를 28번 트램 뒷자리 창밖으로 선선하게 감상하기 가장 낭만적인 계절입니다.', winter: '겨울 유럽 최고의 도피처! 기온이 온화하고 파란 하늘이 많아 가벼운 가을 재킷으로 활기차게 다닐 수 있습니다.' },
      courses: { 
        '7-14': '<br>1DAY: 리스본 공항 도착 -> 코메르시우 광장 강변 산책 -> 백여 년 역사의 리스본 밤거리 파두(Fado) 가창 공연 감상<br>2DAY: 1837년 최초 에그타르트 원조집 벨렝 빵집 웨이팅 맛보기 -> 벨렝탑 요새 및 웅장한 제로니무스 수도원<br>3DAY: 리스본의 상징 28번 노란색 트램 타고 좁은 언덕 골목 일주 -> 산타 주스타 철제 엘리베이터 조망 선셋<br>4DAY: [근교 동화 속 신트라 당일치기] 알록달록한 페냐 성 요정 궁전 투어 -> 유럽의 서쪽 끝 까보 다 로카(호카곶) 낙조<br>5DAY~6DAY: [포르투갈 제2의 도시 포르투 이동 1박] 동루이스 1세 다리 조망 아래 도루강변 와이너리 포트와인 체험<br>7DAY: 리스본 복귀 후 정어리 통조림 및 포트와인 선물 쇼핑 후 귀국'
      }
    }
  },
  {
    id: 'i42', name: '암스테르담, 네덜란드 (Amsterdam)', location: 'international', flight: 'long', duration: ['7-14'], style: ['city', 'culture', 'nature'], bestSeasons: ['spring', 'summer'], image: 'https://picsum.photos/seed/i42/800/600', description: '운하 위로 흘러가는 자전거의 물결. 눈부신 튤립 정원 큐켄호프와 반 고흐 미술관의 전율.',
    quickInfo: { months: '4월~5월(튤립), 6~8월', flight: '11시간 30분 직항', visa: '무비자 90일', voltage: '230V', temp: { spring: '9℃', summer: '18℃', autumn: '11℃', winter: '3℃' } },
    details: {
      spots: '반 고흐 미술관, 담 광장, 안네 프랑크의 집, 큐켄호프 튤립 축제(봄 한정), 운하 요트 보트 투어', food: '스트롭 와플(따뜻한 꿀 시럽 과자), 마요네즈 감자튀김, 네덜란드 정통 하링(날청어), 고우다(Gouda) 슬라이스 치즈', hotel: '안다즈 암스테르담 프린센그라흐트, 더 플라잉 피그, 시티즌M 암스테르담', shopping: '네덜란드 스트롭와플 대용량, 튤립 알뿌리/마그넷, 네덜란드 치즈 덩어리, 귀여운 미피(Miffy) 캐릭터 정품 인형',
      weatherDesc: { spring: '세계 최대 튤립 축제 큐켄호프가 열리며 온 들판이 무지갯빛 꽃밭으로 폭발하는 인생 버킷리스트 계절입니다.', summer: '그늘에 있으면 에어컨 없이도 시원한 북해 기후! 자전거를 대여해 운하 다리들을 쌩쌩 달리기에 최고의 날씨입니다.', autumn: '미술관과 박물관이 워낙 훌륭해, 다소 서늘한 가을 기운을 반 고흐 미술관의 원화 전율로 꽉 채웁니다.', winter: '운하 위 가로등 불빛이 밤 안개 속에 번질 때, 따뜻한 시럽 스트롭와플을 커피잔 위에 얹어 녹여 먹는 낭만이 훌륭합니다.' },
      courses: { 
        '7-14': '<br>1DAY: 스키폴 공항 도착 -> 센트럴 운하 요트 보트 탑승 야경 투어 -> 담 광장 맥주 바 피로 해소<br>2DAY: [봄 한정] 근교 리세의 큐켄호프 튤립공원 대형 꽃 바다 하루 종일 투어 -> 복귀 후 감자튀김 야식<br>3DAY: 예약 필수 반 고흐 미술관 도슨트 가이드 관람 -> 렘브란트 하우스 -> 안네 프랑크의 생가<br>4DAY: 자전거 렌탈하여 암스테르담 시내 및 폰델 공원 피크닉 라이딩 -> 운하 오션뷰 브런치 카페<br>5DAY~6DAY: [근교 풍차마을 잔세스칸스 당일치기] 동화 속 거대 목조 풍차 구경 및 전통 나막신 공방 깎기 체험<br>7DAY: 미피 굿즈 및 스트롭와플 쇼핑 완료 후 아쉬운 배웅 귀국'
      }
    }
  },
  {
    id: 'i43', name: '아테네/산토리니, 그리스 (Athens/Santorini)', location: 'international', flight: 'long', duration: ['7-14'], style: ['romantic', 'nature', 'history', 'culture'], bestSeasons: ['spring', 'summer', 'autumn'], image: 'https://picsum.photos/seed/i43/800/600', description: '고대 그리스 신화의 고향 아크로폴리스와 이아 마을 파란 지붕 너머로 펼쳐지는 지중해 최고의 석양.',
    quickInfo: { months: '5월~9월', flight: '12시간 이상 (경유)', visa: '무비자 90일', voltage: '230V', temp: { spring: '16℃', summer: '27℃', autumn: '19℃', winter: '10℃' } },
    details: {
      spots: '아크로폴리스(파르테논 신전), 산토리니 이아 마을 파란 지붕, 플라카 지구, 산토리니 레드 비치, 신전 야경', food: '기로스/수블라키(그리스식 케밥), 무사카(가지 오븐요리), 페타치즈 그릭 샐러드, 산토리니 로컬 와인', hotel: '안드로니스 럭셔리 스위트 산토리니, 아테네 게이트 호텔, 오이아 뷰 풀빌라', shopping: '지중해 천연 올리브 비누, 그리스 유기농 야생 꿀, 산토리니 화이트 와인(Assyrtiko), 파란눈(나자르) 악마막이 마그넷',
      weatherDesc: { spring: '파르테논 신전 그늘 아래 서늘한 지중해 해풍을 느끼며 고대 돌조각 유적을 쾌적하게 공부하기 좋습니다.', summer: '산토리니의 파란색과 하얀색 건물이 지중해 태양에 반사되어 눈이 시릴 만큼 가장 눈부시게 빛나는 최성수기입니다.', autumn: '포도 수확기이자 시원해지는 지중해 가을바람을 맞으며 산토리니 절벽 노천 레스토랑에서 와인을 마시기 최적입니다.', winter: '관광지는 다소 조용하지만 그리스 문명 신전들을 대기 없이 아주 여유롭고 조용히 독점 관람할 수 있습니다.' },
      courses: { 
        '7-14': '<br>1DAY: 아테네 공항 도착 -> 플라카 지구 골목의 지중해 음식 석식 -> 파르테논 신전 밤 조명 야경 조망<br>2DAY: 인류 유산 아크로폴리스 언덕 오르기 (파르테논, 에레크테이온 신전 가이드) -> 아크로폴리스 신전 박물관<br>3DAY: 국내선 또는 대형 페리 탑승 -> 산토리니 섬 도착 -> 피라 마을 절벽 호텔 체크인 및 노을 요트 세일링<br>4DAY: 산토리니 북쪽 끝 이아(Oia) 마을 도보 투어 -> 포토존 파란 지붕 배경 사진 촬영 -> 세계 3대 이아 선셋 감상<br>5DAY: 화산재 모래가 붉은 레드 비치 및 블랙 비치 오션 뷰 산책 -> 산토리니 양조장 와인 시음회<br>6DAY: 아테네 복귀 -> 근교 포세이돈 신전 절벽 일몰 감상 및 수블라키 구이 맥주 파티<br>7DAY: 올리브유 및 천연 꿀 쇼핑 후 그리스 신화 마무리 귀국'
      }
    }
  },
  {
    id: 'i45', name: '이스탄불, 터키/튀르키예 (Istanbul)', location: 'international', flight: 'long', duration: ['7-14'], style: ['history', 'culture', 'food', 'shopping'], bestSeasons: ['spring', 'autumn'], image: 'https://picsum.photos/seed/i45/800/600', description: '동양과 서양이 만나는 찬란한 오스만 제국의 심장. 성스러운 아야 소피아와 향기 가득한 그랜드 바자르 시장.',
    quickInfo: { months: '4월~5월, 9~10월', flight: '11시간 30분 직항', visa: '무비자 90일', voltage: '220V', temp: { spring: '13℃', summer: '24℃', autumn: '16℃', winter: '7℃' } },
    details: {
      spots: '아야 소피아 성당/모스크, 블루 모스크(술탄 아흐메트), 톱카프 궁전 보석관, 그랜드 바자르, 보스포루스 해협 크루즈', food: '쉬시 케밥, 백종원의 천상의 맛 카이막(Kaymak), 터키쉬 딜라이트(로쿰 과자), 고등어 케밥, 터키 전통 홍차(차이)', hotel: '페라 팰리스 호텔, 소피텔 이스탄불 탁심, 오토만 스타일 보스포루스 뷰 감성 리조트', shopping: '로쿰(터키쉬 딜라이트 단과자), 수제 장미수 에센스(굴샤), 악마의 눈(나자르본주) 열쇠고리, 터키 전통 세라믹 식기, 화려한 유리 전등',
      weatherDesc: { spring: '이스탄불 도시 전체 광장과 공원에 튤립 꽃밭이 터지며, 보스포루스 해협을 건너기 아주 온화합니다.', summer: '낮에는 뜨겁지만 아시아와 유럽을 가르는 시원한 바닷바람 크루즈를 탑승하여 피서하기 안성맞춤입니다.', autumn: '선선한 바람 속에 갈라타 타워에 올라 붉게 물드는 이스탄불 구시가지 전체 지붕 실루엣 낙조를 보기 최고입니다.', winter: '비가 가끔 내리고 쌀쌀하지만 따끈하고 달콤한 카이막 꿀 토스트와 홍차(차이)를 카페에서 마시면 천국입니다.' },
      courses: { 
        '7-14': '<br>1DAY: 이스탄불 신공항 도착 -> 아시아/유럽이 나뉘는 탁심 광장 도보 산책 -> 갈라타 타워 전망대 야경<br>2DAY: 오스만 영광 술탄 아흐메트 광장 -> 아야 소피아 대성당 신비로운 돔 관람 -> 블루 모스크 푸른 타일 감상<br>3DAY: 4천 개 상점이 미로를 이룬 그랜드 바자르 향신료/유리등 쇼핑 -> 보스포루스 해협 유럽-아시아 횡단 크루즈 탑승<br>4DAY: 술탄의 궁전 톱카프 궁전 황금 보석관 관람 -> 에미뇌뉘 포구 유명 고등어 케밥 백종원 미식 벤치 투어<br>5DAY~6DAY: [근교 카파도키아 국내선 1박] 새벽 하늘 수백 개의 형형색색 열기구 풍선 탑승 및 기암괴석 동굴 숙박<br>7DAY: 이스탄불 복귀 후 장미수 및 로쿰 단과자 쇼핑 후 신비로운 동서양 배웅 귀국'
      }
    }
  }
];

// Export to window so script.js can see it
if (typeof window !== 'undefined') {
  window.destinations = destinations;
} else if (typeof module !== 'undefined') {
  module.exports = destinations;
}
