// Global variables
let kuralData = null;
let currentAthikaramId = 1;

document.addEventListener('DOMContentLoaded', async function() {
    // Wait for translations to be ready
    await waitForTranslations();
    
    // Load athikarams metadata
    const athikaramsScript = document.createElement('script');
    athikaramsScript.src = 'athikarams-data.js';
    document.head.appendChild(athikaramsScript);
    
    await new Promise(resolve => {
        athikaramsScript.onload = resolve;
    });
    
    // Load kural data
    await loadKuralData();
    
    // Get athikaram ID from URL
    const urlParams = new URLSearchParams(window.location.search);
    const athikaramId = parseInt(urlParams.get('id')) || 1;
    currentAthikaramId = athikaramId;
    
    // Display athikaram with all kurals
    displayAthikaram(currentAthikaramId);
    
    // Setup navigation
    setupNavigation();
});

// Wait for translations to be loaded
function waitForTranslations() {
    return new Promise(resolve => {
        if (window.translations && window.getCurrentLanguage) {
            resolve();
        } else {
            const checkInterval = setInterval(() => {
                if (window.translations && window.getCurrentLanguage) {
                    clearInterval(checkInterval);
                    resolve();
                }
            }, 100);
        }
    });
}

async function loadKuralData() {
    try {
        const response = await fetch('thirukkural.json');
        const data = await response.json();
        kuralData = data.kural;
    } catch (error) {
        console.error('Error loading kural data:', error);
        document.getElementById('kurals-list').innerHTML = 
            '<div class="loading">தரவு ஏற்றுவதில் பிழை. பக்கத்தை மீண்டும் ஏற்றவும்.</div>';
    }
}

function getAthikaramById(id) {
    return ATHIKARAMS.find(a => a.id === id);
}

function displayAthikaram(athikaramId) {
    if (!kuralData) {
        return;
    }
    
    const athikaram = getAthikaramById(athikaramId);
    if (!athikaram) {
        document.getElementById('kurals-list').innerHTML = 
            '<div class="loading">அதிகாரம் கிடைக்கவில்லை</div>';
        return;
    }
    
    // Get translated text
    const chapterText = window.t ? window.t('chapter') : 'அதிகாரம்';
    const kuralText = window.t ? window.t('couplet') : 'குறள்';
    
    // Get translated athikaram name
    let athikaramNameEn = athikaram.en;
    const currentLang = window.getCurrentLanguage ? window.getCurrentLanguage() : 'ta';
    
    if (window.athikaram_names && 
        window.athikaram_names[currentLang] && 
        window.athikaram_names[currentLang][athikaram.id.toString()]) {
        athikaramNameEn = window.athikaram_names[currentLang][athikaram.id.toString()];
    }
    
    // Display header
    const headerContainer = document.getElementById('athikaram-header');
    headerContainer.innerHTML = `
        <div class="athikaram-header-box">
            <div class="athikaram-number-large">${chapterText} ${athikaram.id}</div>
            <h2 class="athikaram-title-large-ta">${athikaram.ta}</h2>
            <p class="athikaram-title-large-en">${athikaramNameEn}</p>
            <p class="athikaram-range-large">${kuralText} ${athikaram.start} - ${athikaram.end}</p>
        </div>
    `;
    
    // Display all kurals in this athikaram
    const kuralsContainer = document.getElementById('kurals-list');
    kuralsContainer.innerHTML = '';
    
    for (let kuralNum = athikaram.start; kuralNum <= athikaram.end; kuralNum++) {
        const kural = kuralData[kuralNum - 1];
        if (kural) {
            const kuralCard = createKuralCard(kural, athikaram);
            kuralsContainer.appendChild(kuralCard);
        }
    }
    
    // Setup translate buttons after all kurals are rendered
    setupExplanationTranslateButtons();
    
    // Update URL
    const url = new URL(window.location);
    url.searchParams.set('id', athikaramId);
    window.history.pushState({}, '', url);
}

function createKuralCard(kural, athikaram) {
    const card = document.createElement('div');
    card.className = 'kural-card';
    
    // Split kural into proper format
    const line1Words = kural.Line1.trim().split(' ');
    const line2Words = kural.Line2.trim().split(' ');
    
    // Format transliteration
    const translit1 = kural.transliteration1 || '';
    const translit2 = kural.transliteration2 || '';
    
    // Get translated text
    const kuralText = window.t ? window.t('couplet') : 'குறள்';
    const explText = window.t ? window.t('explanations') : 'விளக்கங்கள்';
    const scholarMV = window.t ? window.t('scholar_mv') : 'மு. வரதராசனார்';
    const scholarSP = window.t ? window.t('scholar_sp') : 'சாலமன் பாப்பையா';
    const scholarMK = window.t ? window.t('scholar_mk') : 'கலைஞர்';
    const translateBtn = window.t ? window.t('translate') : 'Translate';
    
    card.innerHTML = `
        <div class="kural-card-header">
            <div class="kural-number-small">${kuralText} ${kural.Number}</div>
        </div>
        
        <div class="kural-text-section-compact">
            <div class="kural-tamil-compact">
                <span class="kural-line">${line1Words.join(' ')}</span>
                <span class="kural-line">${line2Words.join(' ')}</span>
            </div>
            <div class="transliteration-compact">
                <span class="transliteration-line">${translit1}</span>
                <span class="transliteration-line">${translit2}</span>
            </div>
        </div>
        
        <div class="explanations-section-compact">
            ${kural.mv ? `
            <div class="explanation-item-compact">
                <div class="explanation-header">
                    <div class="explanation-author-small">${scholarMV}</div>
                    <button class="explanation-translate-btn" data-text="${escapeHtml(kural.mv)}">${translateBtn}</button>
                </div>
                <div class="explanation-text-small">${kural.mv}</div>
            </div>
            ` : ''}
            
            ${kural.sp ? `
            <div class="explanation-item-compact">
                <div class="explanation-header">
                    <div class="explanation-author-small">${scholarSP}</div>
                    <button class="explanation-translate-btn" data-text="${escapeHtml(kural.sp)}">${translateBtn}</button>
                </div>
                <div class="explanation-text-small">${kural.sp}</div>
            </div>
            ` : ''}
            
            ${kural.mk ? `
            <div class="explanation-item-compact">
                <div class="explanation-header">
                    <div class="explanation-author-small">${scholarMK}</div>
                    <button class="explanation-translate-btn" data-text="${escapeHtml(kural.mk)}">${translateBtn}</button>
                </div>
                <div class="explanation-text-small">${kural.mk}</div>
            </div>
            ` : ''}
        </div>
    `;
    
    return card;
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

function setupExplanationTranslateButtons() {
    const translateBtns = document.querySelectorAll('.explanation-translate-btn');
    
    translateBtns.forEach(btn => {
        btn.addEventListener('click', async function(e) {
            e.preventDefault();
            const text = this.getAttribute('data-text');
            const encodedText = encodeURIComponent(text);
            
            // Check if device is mobile
            const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
            
            if (isMobile) {
                // On mobile: Try to copy first, then open translate
                try {
                    // Try copying to clipboard
                    await navigator.clipboard.writeText(text);
                    
                    // Brief feedback
                    const originalText = this.textContent;
                    this.textContent = 'Opening...';
                    this.style.background = 'linear-gradient(135deg, #34a853 0%, #34a853 100%)';
                    
                    // Open Google Translate after brief delay
                    setTimeout(() => {
                        const translateUrl = `https://translate.google.com/?sl=ta&tl=en&text=${encodedText}&op=translate`;
                        window.open(translateUrl, '_blank');
                        
                        // Reset button
                        this.textContent = originalText;
                        this.style.background = '';
                    }, 500);
                } catch (err) {
                    // If clipboard fails, just open translate
                    const translateUrl = `https://translate.google.com/?sl=ta&tl=en&text=${encodedText}&op=translate`;
                    window.open(translateUrl, '_blank');
                }
            } else {
                // On desktop: Open Google Translate in new window
                const translateUrl = `https://translate.google.com/?sl=ta&tl=en&text=${encodedText}&op=translate`;
                window.open(translateUrl, '_blank', 'width=900,height=700');
            }
        });
    });
}

function setupNavigation() {
    const prevBtn = document.getElementById('prev-athikaram');
    const nextBtn = document.getElementById('next-athikaram');
    
    prevBtn.addEventListener('click', function() {
        if (currentAthikaramId > 1) {
            currentAthikaramId--;
            displayAthikaram(currentAthikaramId);
            updateNavigationButtons();
            window.scrollTo(0, 0);
        }
    });
    
    nextBtn.addEventListener('click', function() {
        if (currentAthikaramId < 133) {
            currentAthikaramId++;
            displayAthikaram(currentAthikaramId);
            updateNavigationButtons();
            window.scrollTo(0, 0);
        }
    });
    
    updateNavigationButtons();
}

function updateNavigationButtons() {
    const prevBtn = document.getElementById('prev-athikaram');
    const nextBtn = document.getElementById('next-athikaram');
    
    prevBtn.disabled = currentAthikaramId <= 1;
    nextBtn.disabled = currentAthikaramId >= 133;
}
