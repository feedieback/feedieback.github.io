// =============================================
// REVEAL ON SCROLL
// =============================================
const revealElements = document.querySelectorAll('.reveal-up');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });

revealElements.forEach(el => observer.observe(el));

// Trigger immediately for above-the-fold elements
revealElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
        el.classList.add('visible');
    }
});

// =============================================
// NAVBAR SCROLL EFFECT
// =============================================
const header = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
        header?.classList.add('scrolled');
    } else {
        header?.classList.remove('scrolled');
    }
}, { passive: true });

// =============================================
// SMOOTH SCROLL (anchor links)
// =============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

const featureData = {
    1: {
        text: "Sistema com OpenCV para análise visual em tempo real.",
        img: "assets/visao.jpg"
    },
    2: {
        text: "Sensores IoT conectados via MQTT para coleta contínua.",
        img: "assets/iot.jpg"
    },
    3: {
        text: "Processamento inteligente de dados e automação.",
        img: "assets/analise.jpg"
    }
};

const container = document.getElementById("feature-expand-container");

document.querySelectorAll(".feature-card").forEach(card => {
    card.addEventListener("click", () => {

        const id = card.dataset.feature;

        // Se clicar no mesmo, fecha
        if (container.dataset.active == id) {
            container.innerHTML = "";
            container.dataset.active = "";
            return;
        }

        container.dataset.active = id;

        container.innerHTML = `
            <div class="feature-expand-full">
                <div class="feature-expand-inner">

                    <div>
                        <p>${featureData[id].text}</p>
                    </div>

                    <div>
                        <img src="${featureData[id].img}" alt="">
                    </div>

                </div>
            </div>
        `;

        // Scroll suave
        container.scrollIntoView({ behavior: "smooth", block: "start" });
    });
});

// =============================================
// FORM SUBMISSION FEEDBACK
// =============================================
const form = document.getElementById('contato-form');
if (form) {
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const btn = form.querySelector('button[type="submit"]');
        const original = btn.innerHTML;
        btn.innerHTML = 'Mensagem enviada ✓';
        btn.style.background = '#22c55e';
        btn.disabled = true;

        setTimeout(() => {
            btn.innerHTML = original;
            btn.style.background = '';
            btn.disabled = false;
            form.reset();
        }, 3000);
    });
}
