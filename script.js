const quizQuestions = [
    {
        id: 'location',
        question: '어디로 떠나고 싶으신가요?',
        options: [
            { value: 'domestic', label: '국내 (Korea)', icon: '🇰🇷' },
            { value: 'international', label: '해외 (International)', icon: '✈️' }
        ]
    },
    {
        id: 'season',
        question: '언제 떠나실 예정인가요?',
        options: [
            { value: 'spring', label: '봄 (3~5월)', icon: '🌸' },
            { value: 'summer', label: '여름 (6~8월)', icon: '☀️' },
            { value: 'autumn', label: '가을 (9~11월)', icon: '🍁' },
            { value: 'winter', label: '겨울 (12~2월)', icon: '❄️' }
        ]
    },
    {
        id: 'duration',
        question: '여행 기간은 며칠이 좋은가요?',
        options: [
            { value: '1-3', label: '1~3일 (짧게)', icon: '🗓️' },
            { value: '4-7', label: '4~7일 (적당히)', icon: '📅' },
            { value: '8+', label: '8일 이상 (길게)', icon: '📆' }
        ]
    },
    {
        id: 'flight',
        question: '비행 시간은 어느 정도가 좋나요?',
        condition: (answers) => answers.location === 'international',
        options: [
            { value: 'short', label: '3시간 이내 (가까운 곳)', icon: '⏱️' },
            { value: 'medium', label: '3~6시간 (적당한 비행)', icon: '🛫' },
            { value: 'long', label: '6시간 이상 (멀리멀리)', icon: '🌍' }
        ]
    },
    {
        id: 'style',
        question: '이번 여행의 테마는 무엇인가요?',
        options: [
            { value: 'relaxation', label: '휴양 / 힐링', icon: '🏖️' },
            { value: 'city', label: '도시 탐험', icon: '🏙️' },
            { value: 'food', label: '맛집 탐방', icon: '🍜' },
            { value: 'nature', label: '자연 / 풍경', icon: '⛰️' },
            { value: 'culture', label: '역사 / 문화', icon: '🏛️' }
        ]
    }
];

let currentStep = 0;
let userAnswers = {};
let activeQuestions = [];
let currentRecommendations = [];

const DOM = {
    quizSection: document.getElementById('quiz-section'),
    resultsSection: document.getElementById('results-section'),
    quizContent: document.getElementById('quiz-content'),
    progressBar: document.getElementById('progress-bar'),
    prevBtn: document.getElementById('prev-btn'),
    resultsGrid: document.getElementById('results-grid'),
    restartBtn: document.getElementById('restart-btn'),
    modal: document.getElementById('details-modal'),
    modalBody: document.getElementById('modal-body'),
    closeModalBtn: document.getElementById('close-modal-btn')
};

function initApp() {
    currentStep = 0;
    userAnswers = {};
    activeQuestions = getActiveQuestions();
    
    DOM.quizSection.classList.remove('hidden');
    DOM.resultsSection.classList.add('hidden');
    DOM.modal.classList.add('hidden');
    
    renderStep();
    
    // Remove old listeners to avoid duplicates
    DOM.prevBtn.replaceWith(DOM.prevBtn.cloneNode(true));
    DOM.restartBtn.replaceWith(DOM.restartBtn.cloneNode(true));
    DOM.closeModalBtn.replaceWith(DOM.closeModalBtn.cloneNode(true));
    
    // Re-select after cloning
    DOM.prevBtn = document.getElementById('prev-btn');
    DOM.restartBtn = document.getElementById('restart-btn');
    DOM.closeModalBtn = document.getElementById('close-modal-btn');
    
    DOM.prevBtn.addEventListener('click', handlePrev);
    DOM.restartBtn.addEventListener('click', initApp);
    DOM.closeModalBtn.addEventListener('click', closeModal);
    
    // Close modal on outside click
    DOM.modal.addEventListener('click', (e) => {
        if(e.target === DOM.modal) closeModal();
    });
}

function getActiveQuestions() {
    return quizQuestions.filter(q => {
        if (q.condition) {
            return q.condition(userAnswers);
        }
        return true;
    });
}

function updateProgress() {
    const progress = ((currentStep) / activeQuestions.length) * 100;
    DOM.progressBar.style.width = `${progress}%`;
}

function renderStep() {
    activeQuestions = getActiveQuestions();
    
    if (currentStep >= activeQuestions.length) {
        showResults();
        return;
    }

    updateProgress();

    const question = activeQuestions[currentStep];
    
    if (currentStep === 0) {
        DOM.prevBtn.classList.add('hidden');
    } else {
        DOM.prevBtn.classList.remove('hidden');
    }

    let html = `
        <div class="animate-fade-in" style="width:100%;">
            <h2>${question.question}</h2>
            <div class="options-grid">
                ${question.options.map(opt => `
                    <button class="option-btn ${userAnswers[question.id] === opt.value ? 'selected' : ''}" 
                            data-value="${opt.value}">
                        <span class="option-icon">${opt.icon}</span>
                        <span class="option-label">${opt.label}</span>
                    </button>
                `).join('')}
            </div>
        </div>
    `;

    DOM.quizContent.innerHTML = html;

    const optionBtns = document.querySelectorAll('.option-btn');
    optionBtns.forEach(btn => {
        btn.addEventListener('click', (e) => handleOptionSelect(question.id, btn.dataset.value));
    });
}

function handleOptionSelect(questionId, value) {
    userAnswers[questionId] = value;
    
    const btns = document.querySelectorAll('.option-btn');
    btns.forEach(b => b.classList.remove('selected'));
    document.querySelector(`.option-btn[data-value="${value}"]`).classList.add('selected');

    setTimeout(() => {
        currentStep++;
        renderStep();
    }, 300);
}

function handlePrev() {
    if (currentStep > 0) {
        currentStep--;
        renderStep();
    }
}

function showResults() {
    DOM.progressBar.style.width = '100%';
    
    setTimeout(() => {
        DOM.quizSection.classList.add('hidden');
        DOM.resultsSection.classList.remove('hidden');
        
        calculateRecommendations();
    }, 500);
}

const styleTranslations = {
    'relaxation': '휴양',
    'city': '도시',
    'food': '미식',
    'nature': '자연',
    'culture': '문화/역사',
    'shopping': '쇼핑',
    'nightlife': '밤문화',
    'history': '역사',
    'family': '가족',
    'adventure': '액티비티',
    'romantic': '로맨틱'
};

function calculateRecommendations() {
    let scoredDestinations = destinations.map(dest => {
        let score = 0;
        
        if (dest.location === userAnswers.location) {
            score += 10;
        } else {
            score -= 100;
        }

        if (dest.duration && dest.duration.includes(userAnswers.duration)) {
            score += 5;
        }

        if (userAnswers.flight && dest.flight === userAnswers.flight) {
            score += 5;
        }

        if (dest.style && dest.style.includes(userAnswers.style)) {
            score += 5;
        }

        if (dest.bestSeasons && dest.bestSeasons.includes(userAnswers.season)) {
            score += 5;
        } else if (dest.bestSeasons) {
            score -= 2;
        }

        return { ...dest, score };
    });

    currentRecommendations = scoredDestinations
        .filter(d => d.score > 0)
        .sort((a, b) => b.score - a.score)
        .slice(0, 3);

    if (currentRecommendations.length === 0) {
        currentRecommendations = destinations.filter(d => d.location === userAnswers.location).slice(0, 3);
    }

    renderRecommendations(currentRecommendations);
}

function renderRecommendations(recs) {
    if (recs.length === 0) {
        DOM.resultsGrid.innerHTML = '<p>조건에 맞는 여행지를 찾지 못했습니다.</p>';
        return;
    }

    const html = recs.map((dest, index) => `
        <div class="destination-card animate-fade-in" style="animation-delay: ${index * 0.1}s">
            <img src="${dest.image}" alt="${dest.name}" class="card-img">
            <div class="card-content">
                <h3 class="card-title">${dest.name}</h3>
                <p class="card-desc">${dest.description}</p>
                <div class="card-tags">
                    ${dest.style.map(s => `<span class="tag">#${styleTranslations[s] || s}</span>`).join('')}
                </div>
                <button class="btn-details mt-4" data-id="${dest.id}">자세히 보기</button>
            </div>
        </div>
    `).join('');

    DOM.resultsGrid.innerHTML = html;

    // Attach event listeners for details buttons
    const detailBtns = document.querySelectorAll('.btn-details');
    detailBtns.forEach(btn => {
        btn.addEventListener('click', (e) => openModal(btn.dataset.id));
    });
}

function openModal(destId) {
    const dest = destinations.find(d => d.id === destId);
    if(!dest || !dest.details) return;

    // Get the season string the user selected, or default to all if not selected
    const userSeasonKey = userAnswers.season; 
    let seasonText = '';
    switch(userSeasonKey) {
        case 'spring': seasonText = '🌸 봄(3~5월)'; break;
        case 'summer': seasonText = '☀️ 여름(6~8월)'; break;
        case 'autumn': seasonText = '🍁 가을(9~11월)'; break;
        case 'winter': seasonText = '❄️ 겨울(12~2월)'; break;
        default: seasonText = '선택한 계절';
    }

    const weatherInfo = userSeasonKey && dest.details.weather[userSeasonKey] 
                        ? dest.details.weather[userSeasonKey] 
                        : "사계절 내내 다양한 매력이 있는 곳입니다.";

    const html = `
        <div class="detail-header">
            <h3>${dest.name}</h3>
            <p class="detail-reason">💡 추천 이유: ${dest.details.reason}</p>
        </div>
        
        <div class="detail-section">
            <h4>${seasonText} 날씨 🌤️</h4>
            <p>${weatherInfo}</p>
        </div>

        <div class="detail-section">
            <h4>추천 명소 및 도시 📸</h4>
            <p>${dest.details.spots}</p>
        </div>

        <div class="detail-section">
            <h4>꼭 먹어봐야 할 맛집/음식 🍜</h4>
            <p>${dest.details.food}</p>
        </div>

        <div class="detail-section">
            <h4>추천 코스 (3일 기준) 🗺️</h4>
            <p>${dest.details.course}</p>
        </div>

        <div class="detail-section">
            <h4>화폐 💱</h4>
            <p>${dest.details.currency}</p>
        </div>
    `;

    DOM.modalBody.innerHTML = html;
    DOM.modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

function closeModal() {
    DOM.modal.classList.add('hidden');
    document.body.style.overflow = 'auto'; // Restore scrolling
}

// Start
document.addEventListener('DOMContentLoaded', initApp);
