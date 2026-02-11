/**
 * Promise Day Website Script
 * Interactive, Romantic, Modular
 */

// ==========================================
// 🔧 CUSTOMIZE HERE
// ==========================================
const HER_NAME = "Keerthi"; // Change this to her actual name!
const BASE_PROMISE = "I love you, " + HER_NAME + ". Even though we are different and sometimes emotional, I promise to understand you, respect you, and never give up on us.";
const FINAL_PROMISE = "No language can express what you mean to me, " + HER_NAME + ".\nThis is my real promise.\nForever.";

// ==========================================
// 🌍 LANGUAGES DATA
// ==========================================
const languages = [
    { code: 'en', name: 'English', text: BASE_PROMISE },
    { code: 'fr', name: 'French', text: "Je t'aime, " + HER_NAME + ". Même si nous sommes différents et parfois émotifs, je promets de te comprendre, de te respecter et de ne jamais nous abandonner." },
    { code: 'es', name: 'Spanish', text: "Te amo, " + HER_NAME + ". Aunque seamos diferentes y a veces emocionales, prometo entenderte, respetarte y nunca rendirme con nosotros." },
    { code: 'de', name: 'German', text: "Ich liebe dich, " + HER_NAME + ". Auch wenn wir unterschiedlich und manchmal emotional sind, verspreche ich, dich zu verstehen, dich zu respektieren und uns niemals aufzugeben." },
    { code: 'it', name: 'Italian', text: "Ti amo, " + HER_NAME + ". Anche se siamo diversi e a volte emotivi, prometto di capirti, rispettarti e non rinunciare mai a noi." },
    { code: 'ta', name: 'Tamil', text: "நான் உன்னை காதலிக்குறேன், " + HER_NAME + ".\nநாம் வேறுபட்டிருந்தாலும், சில நேரங்களில் உணர்ச்சிவசப்பட்டாலும், நான் உன்னை புரிந்துகொள்வேன், மதிப்பேன், நம் உறவை ஒருபோதும் கைவிடமாட்டேன்." },
    { code: 'ml', name: 'Malayalam', text: "ഞാൻ നിന്നെ സ്നേഹിക്കുന്നു, " + HER_NAME + ".\nനമ്മൾ വ്യത്യസ്തരാണെങ്കിലും ചിലപ്പോഴൊക്കെ വികാരികരാകാറുണ്ടെങ്കിലും, ഞാൻ നിന്നെ മനസ്സിലാക്കുമെന്നും ബഹുമാനിക്കുമെന്നും, നമ്മുടെ ബന്ധം ഒരിക്കലും ഉപേക്ഷിക്കില്ലെന്നും വാഗ്ദാനം ചെയ്യുന്നു." },
    { code: 'hi', name: 'Hindi', text: "मैं तुमसे प्यार करता हूँ, " + HER_NAME + ".\nभले ही हम अलग हैं और कभी-कभी भावुक हो जाते हैं, मैं वादा करता हूँ कि मैं तुम्हें समझूंगा, तुम्हारा सम्मान करूँगा और हमारा साथ कभी नहीं छोडूंगा." },
    { code: 'ko', name: 'Korean', text: "사랑해, " + HER_NAME + ".\n우리가 서로 다르고 때로는 감정적일지라도, 나는 너를 이해하고 존중하며 우리를 절대 포기하지 않겠다고 약속할게." },
    { code: 'ja', name: 'Japanese', text: "愛してる, " + HER_NAME + ".\n私たちが違っていて、時に感情的になったとしても、私はあなたを理解し、尊重し、私たちを絶対に諦めないと約束します." },
    { code: 'ar', name: 'Arabic', text: "أحبك يا " + HER_NAME + ".\nعلى الرغم من اختلافنا وأننا عاطفيون أحيانًا، أعدك أن أفهمك وأحترمك ولن أتخلى عنا أبدًا." },
    { code: 'ru', name: 'Russian', text: "Я люблю тебя, " + HER_NAME + ".\nДаже если мы разные и иногда поддаемся эмоциям, я обещаю понимать тебя, уважать тебя и никогда не сдаваться в наших отношениях." },
    { code: 'pt', name: 'Portuguese', text: "Eu te amo, " + HER_NAME + ".\nMesmo que sejamos diferentes e às vezes emocionais, prometo te entender, te respeitar e nunca desistir de nós." },
    { code: 'tr', name: 'Turkish', text: "Seni seviyorum, " + HER_NAME + ".\nFarklı olsak ve bazen duygusal davransak da, seni anlamaya, sana saygı duymaya ve bizden asla vazgeçmemeye söz veriyorum." },
    { code: 'zh', name: 'Chinese', text: "我爱你, " + HER_NAME + ".\n即使我们不同，有时也会情绪化，但我保证理解你，尊重你，永远不放弃我们." },
    { code: 'te', name: 'Telugu', text: "నేను నిన్ను ప్రేమిస్తున్నాను, " + HER_NAME + ".\nమనం భిన్నంగా ఉన్నా, కొన్నిసార్లు భావోద్వేగానికి లోనైనా, నేను నిన్ను అర్థం చేసుకుంటానని, గౌరవిస్తానని, మన బంధాన్ని ఎప్పటికీ వదులుకోనని మాటిస్తున్నాను." }
];

// ==========================================
// 🎮 APP STATE & DOM ELEMENTS
// ==========================================
const app = {
    pages: {
        intro: document.getElementById('page-intro'),
        gallery: document.getElementById('page-gallery'),
        final: document.getElementById('page-final')
    },
    galleryContainer: document.getElementById('gallery-container')
};

// ==========================================
// 🚀 INITIALIZATION
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    initTypingEffect();
    createFloatingHearts();
    
    // Event Listeners
    document.getElementById('start-btn').addEventListener('click', startExperience);
    document.getElementById('replay-btn').addEventListener('click', () => location.reload()); // Simple replay
    
    // Hide scroll indicator on scroll
    const galleryPage = document.getElementById('page-gallery');
    const scrollIndicator = document.querySelector('.scroll-indicator');
    
    galleryPage.addEventListener('scroll', () => {
        if (galleryPage.scrollTop > 50) {
            scrollIndicator.classList.add('hidden-scroll');
        } else {
            scrollIndicator.classList.remove('hidden-scroll'); // Optional: show it back if at top
        }
    });
});

// ==========================================
// ✨ FEATURES
// ==========================================

// 1. Typing Effect for Intro
function initTypingEffect() {
    const text = "A promise in every language...";
    const element = document.getElementById('typing-text');
    let i = 0;
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, 100);
        }
    }
    type();
}

// 2. Start Experience Transition
function startExperience() {
    // Page Transition
    app.pages.intro.style.opacity = '0';
    app.pages.intro.style.transform = 'translateY(-20px)';
    
    setTimeout(() => {
        app.pages.intro.classList.add('hidden');
        app.pages.intro.classList.remove('active-page');
        
        app.pages.gallery.classList.remove('hidden');
        app.pages.gallery.classList.add('active-page'); // Triggers CSS fade-in
        
        // Render Gallery
        renderGallery();
    }, 800);
}

// 4. Render Gallery Cards
function renderGallery() {
    const container = app.galleryContainer;
    container.innerHTML = ''; // Clear existing

    languages.forEach((lang, index) => {
        const card = document.createElement('div');
        card.className = 'language-card';
        card.setAttribute('data-original', lang.text);
        card.setAttribute('data-english', BASE_PROMISE); // Or translated specific if strict
        card.setAttribute('data-state', 'original'); // original | english
        
        const langTitle = document.createElement('div');
        langTitle.className = 'lang-name';
        langTitle.textContent = lang.name;
        
        const promiseText = document.createElement('div');
        promiseText.className = 'promise-text';
        promiseText.textContent = lang.text;
        
        const hint = document.createElement('div');
        hint.className = 'tap-hint';
        hint.textContent = 'Tap to translate';

        card.appendChild(langTitle);
        card.appendChild(promiseText);
        card.appendChild(hint);

        // Interaction: Toggle Text
        card.addEventListener('click', () => toggleCardTranslation(card, promiseText, hint));

        container.appendChild(card);
        
        // Observer for scroll animation
        observer.observe(card);
    });

    // Add Final Button at the bottom
    const finalBtnContainer = document.createElement('div');
    finalBtnContainer.style.marginTop = '40px';
    finalBtnContainer.style.marginBottom = '100px';
    finalBtnContainer.innerHTML = `<button class="btn-primary" onclick="showFinalMessage()">My True Promise ➔</button>`;
    container.appendChild(finalBtnContainer);
}

// 5. Card Interaction Logic
function toggleCardTranslation(card, textElement, hintElement) {
    // Smooth fade out text
    textElement.style.opacity = '0';
    
    setTimeout(() => {
        const currentState = card.getAttribute('data-state');
        if (currentState === 'original') {
            textElement.textContent = card.getAttribute('data-english');
            card.setAttribute('data-state', 'english');
            hintElement.textContent = 'Tap to see original';
            card.style.background = 'rgba(255, 255, 255, 0.85)'; // Highlight bg
        } else {
            textElement.textContent = card.getAttribute('data-original');
            card.setAttribute('data-state', 'original');
            hintElement.textContent = 'Tap to translate';
            card.style.background = 'rgba(255, 255, 255, 0.6)'; // Revert bg
        }
        textElement.style.opacity = '1';
    }, 300);
}

// 6. Intersection Observer for Lazy Loading/Animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible-card');
        }
    });
}, { threshold: 0.1 });

// 7. Show Final Page
window.showFinalMessage = function() {
    app.pages.gallery.style.opacity = '0';
    app.pages.gallery.style.transform = 'translateY(-20px)';
    
    setTimeout(() => {
        app.pages.gallery.classList.add('hidden');
        app.pages.gallery.classList.remove('active-page'); // Cleanup scroll listener logic if any
        
        app.pages.final.classList.remove('hidden');
        app.pages.final.classList.add('active-page');
        
        // Trigger confetti
        triggerConfetti();
    }, 800);
};

// 8. Floating Hearts Background (CSS-based generation)
function createFloatingHearts() {
    const container = document.getElementById('hearts-container');
    const heartCount = 15;

    for (let i = 0; i < heartCount; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart-shape';
        heart.innerText = '❤';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = (Math.random() * 5 + 10) + 's';
        heart.style.fontSize = (Math.random() * 20 + 20) + 'px';
        container.appendChild(heart);
    }
}

// 9. Simple Confetti (Bonus)
function triggerConfetti() {
    const colors = ['#ff0000', '#ff69b4', '#ffd700', '#ffffff'];
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti-piece';
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.animation = `floatUp ${Math.random() * 2 + 3}s ease-out forwards`;
        document.body.appendChild(confetti);
        
        // Random start positions for confetti explosion look (optional, here simplified to rain from top-ish or simple float)
        // Actually, let's make them fall from top
        confetti.style.top = '-10px';
        confetti.style.animation = `fall ${Math.random() * 3 + 2}s linear forwards`;
        
        // Add dynamic style for fall animation
        if (!document.getElementById('confetti-style')) {
            const style = document.createElement('style');
            style.id = 'confetti-style';
            style.innerHTML = `
                @keyframes fall {
                    0% { transform: translateY(0) rotate(0deg); opacity: 1; }
                    100% { transform: translateY(100vh) rotate(720deg); opacity: 0; }
                }
            `;
            document.head.appendChild(style);
        }
    }
}
