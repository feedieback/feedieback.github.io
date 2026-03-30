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
        title: "Módulo 1 — Monitoramento de Solo e Ambiente",
        text: "Coleta de dados vitais como umidade, pH e condutividade elétrica do solo, além de temperatura e umidade do ar. O módulo é baseado em microcontrolador ESP32 e sensores capacitivos, garantindo leituras precisas e contínuas do microclima agrícola.",
        img: "assets/iot.jpg"
    },
    2: {
        title: "Módulo 2 — Detecção Automática de Pragas",
        text: "Armadilha fotográfica inteligente que utiliza Visão Computacional para identificar e quantificar pragas em tempo real. A detecção é realizada por uma rede neural YOLOv8s integrada ao Raspberry Pi, permitindo respostas rápidas e automação de alertas.",
        img: "assets/pred_018_58059.jpg"
    },
    3: {
        title: "Módulo 3 — Análise da Saúde da Vegetação",
        text: "Monitoramento por câmeras PTZ para análise da saúde macroscópica da lavoura através do espectro RGB. Gera mapas de saúde da vegetação para correlação visual com os dados coletados pelos sensores, facilitando a tomada de decisão agronômica.",
        img: ""
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
                        <h4>${featureData[id].title}</h4>
                        <p>${featureData[id].text}</p>
                    </div>

                    ${featureData[id].img ? `<div><img src="${featureData[id].img}" alt="${featureData[id].title}"></div>` : ''}

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