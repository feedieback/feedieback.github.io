// =============================================
// LANGUAGE TOGGLE (PT ↔ EN)
// =============================================
const TRANSLATIONS = {

    /* ── NAVBAR (compartilhado) ── */
    'nav-inicio':   { pt: 'Início',   en: 'Home' },
    'nav-sobre':    { pt: 'Sobre',    en: 'About' },
    'nav-projetos': { pt: 'Projetos', en: 'Projects' },
    'nav-contato':  { pt: 'Contato',  en: 'Contact' },

    /* ── FOOTER (compartilhado) ── */
    'footer-copy':     { pt: '© 2025 — Feito com ♥', en: '© 2025 — Made with ♥' },
    'footer-projetos': { pt: 'Projetos', en: 'Projects' },
    'footer-contato':  { pt: 'Contato',  en: 'Contact' },

    /* ── INDEX: hero ── */
    'hero-eyebrow':  { pt: 'Desenvolvedor Full Stack', en: 'Full Stack Developer' },
    'hero-title':    { pt: 'Trabalhando na <br><em>intersecção</em> entre <br>Hardware e <em>Inteligência.</em>', en: 'Working at the <br><em>intersection</em> of <br>Hardware and <em>Intelligence.</em>' },
    'hero-sub':      { pt: 'Unindo IoT e Visão Computacional para resultados reais.<br>Engenharia aplicada à eficiência operacional.', en: 'Bridging IoT and Computer Vision for real results.<br>Engineering applied to operational efficiency.' },
    'hero-btn-proj': { pt: 'Ver projetos', en: 'See projects' },
    'hero-btn-sobre':{ pt: 'Sobre mim <span class="arrow">↓</span>', en: 'About me <span class="arrow">↓</span>' },
    'hero-scroll':   { pt: 'role para baixo', en: 'scroll down' },

    /* ── INDEX: sobre ── */
    'label-sobre':      { pt: '// sobre', en: '// about' },
    'sobre-title':      { pt: 'Olá, eu sou<br><em>Victor.</em>', en: 'Hi, I am<br><em>Victor.</em>' },
    'sobre-p1':         { pt: 'Sou um estudante de Engenharia de Computação(11° Período ), dedicado a explorar como sistemas embarcados e algoritmos de Inteligência Artificial podem ser integrados para resolver problemas críticos do mundo real.', en: 'I am a Computer Engineering student (11th semester), dedicated to exploring how embedded systems and Artificial Intelligence algorithms can be integrated to solve critical real-world problems.' },
    'sobre-p2':         { pt: 'Meu trabalho transita desde a baixa camada de hardware até a camada de aplicação inteligente, com foco em eficiência técnica e impacto social.', en: 'My work spans from low-level hardware all the way up to intelligent application layers, focused on technical efficiency and social impact.' },
    'sobre-btn':        { pt: 'Vamos conversar', en: "Let's talk" },

    /* ── INDEX: competências ── */
    'label-comp':       { pt: '// competências', en: '// expertise' },
    'comp-title':       { pt: 'Áreas de <em>atuação</em><br>e domínio técnico.', en: 'Areas of <em>focus</em><br>and technical mastery.' },
    'comp-01-title':    { pt: 'Agricultura de Precisão e IoT', en: 'Precision Agriculture & IoT' },
    'comp-01-p':        { pt: 'Sistemas modulares de monitoramento de baixo custo, integrando sensores de solo e clima via ESP32 com comunicação pelo protocolo MQTT.', en: 'Low-cost modular monitoring systems integrating soil and climate sensors via ESP32, communicating over the MQTT protocol.' },
    'comp-02-title':    { pt: 'Visão Computacional e IA', en: 'Computer Vision & AI' },
    'comp-02-p':        { pt: 'Detecção e classificação automática de pragas com redes neurais YOLOv8 otimizadas para Edge Computing em Raspberry Pi. Também explorei segurança veicular com IA para detecção de fadiga de motoristas.', en: 'Automatic pest detection and classification using YOLOv8 neural networks optimized for Edge Computing on Raspberry Pi. Also explored vehicle safety AI for driver fatigue detection.' },
    'comp-03-title':    { pt: 'Infraestrutura e Sistemas de Baixo Nível', en: 'Infrastructure & Low-Level Systems' },
    'comp-03-p':        { pt: 'Desenvolvimento e simulação de núcleos de Sistemas Operacionais, com experiência direta em gerenciamento de memória, processos, I/O e sistemas de arquivos.', en: 'Development and simulation of Operating System kernels, with hands-on experience in memory management, processes, I/O and file systems.' },
    'comp-04-title':    { pt: 'Desenvolvimento Full-Stack', en: 'Full-Stack Development' },
    'comp-04-p':        { pt: 'Plataformas de gerenciamento centralizadas que transformam dados brutos de sensores em dashboards intuitivos e insights acionáveis para o usuário final.', en: 'Centralised management platforms that turn raw sensor data into intuitive dashboards and actionable insights for end users.' },
    'comp-footer-p':    { pt: 'Acredito que a tecnologia deve ser acessível e robusta. Meu objetivo é continuar desenvolvendo ferramentas que democratizem o acesso à inovação — transformando a complexidade técnica em soluções simples e eficientes.', en: 'I believe technology should be accessible and robust. My goal is to keep building tools that democratise access to innovation — turning technical complexity into simple, efficient solutions.' },

    /* ── PROJETOS ── */
    'page-label-proj':    { pt: '// projetos',   en: '// projects' },
    'page-title-proj':    { pt: 'Trabalhos<br>selecionados.', en: 'Selected<br>works.' },
    'page-sub-proj':      { pt: 'Uma curadoria dos projetos que mais me orgulho.', en: 'A curated selection of the projects I am most proud of.' },
    'proj-feat-tag':      { pt: 'Full Stack',  en: 'Full Stack' },
    'proj-feat-title':    { pt: 'Sistema Inteligente de Monitoramento Agrícola', en: 'Intelligent Agricultural Monitoring System' },
    'proj-feat-p':        { pt: 'Um sistema de baixo custo baseado em IoT e Visão Computacional para monitoramento de microclima e detecção automática de pragas.', en: 'A low-cost system based on IoT and Computer Vision for microclimate monitoring and automatic pest detection.' },
    'proj-feat-btn':      { pt: 'Ver projeto <span class="arrow">→</span>', en: 'View project <span class="arrow">→</span>' },
    'proj-feat-gh':       { pt: 'GitHub', en: 'GitHub' },
    'proj-02-title':      { pt: 'Detecção de Mosca-Branca (Trialeurodes vaporariorum)', en: 'Whitefly Detection (Trialeurodes vaporariorum)' },
    'proj-02-p':          { pt: 'Um sistema de Visão Computacional otimizado para a detecção de pequenos insetos em armadilhas adesivas em cultivos de tomate.', en: 'A Computer Vision system optimised for detecting small insects on sticky traps in tomato crops.' },
    'proj-03-title':      { pt: 'Sistema de Detecção de Fadiga de Motoristas', en: 'Driver Fatigue Detection System' },
    'proj-03-p':          { pt: 'Este projeto implementa um sistema em Python que detecta automaticamente sinais de fadiga em motoristas, utilizando visão computacional, redes neurais convolucionais (CNN) e lógica fuzzy tipo 2.', en: 'This project implements a Python system that automatically detects driver fatigue signs using computer vision, convolutional neural networks (CNN) and type-2 fuzzy logic.' },
    'proj-04-title':      { pt: 'Dashboard para Sistema de Monitoramento Agrícola', en: 'Dashboard for Agricultural Monitoring System' },
    'proj-04-p':          { pt: 'EProjeto de IoT voltado para automação e monitoramento de pequenas plantações, hortas urbanas e estufas, utilizando sensores de baixo custo e um microcontrolador ESP32.', en: 'IoT project focused on automation and monitoring of small plantations, urban gardens and greenhouses, using low-cost sensors and an ESP32 microcontroller.' },
    'cta-title':          { pt: 'Tem um projeto em mente?', en: 'Have a project in mind?' },
    'cta-p':              { pt: 'Vamos trabalhar juntos e transformar sua ideia em realidade.', en: "Let's work together and turn your idea into reality." },
    'cta-btn':            { pt: 'Entrar em contato', en: 'Get in touch' },

    /* ── TCC ── */
    'tcc-label':        { pt: '// projeto em destaque', en: '// featured project' },
    'tcc-title':        { pt: 'Sistema Inteligente<br>de <em>Monitoramento</em><br><em>Agrícola.</em>', en: 'Intelligent<br><em>Agricultural</em><br><em>Monitoring System.</em>' },
    'tcc-sub':          { pt: 'Desenvolvimento de um protótipo funcional de baixo custo para agricultura de precisão, integrando sensores IoT e Redes Neurais para otimização do manejo em pequenas propriedades.', en: 'Development of a low-cost functional prototype for precision agriculture, integrating IoT sensors and Neural Networks to optimise crop management on small farms.' },
    'tcc-btn-gh':       { pt: 'Ver no GitHub <span class="arrow">→</span>', en: 'View on GitHub <span class="arrow">→</span>' },
    'tcc-btn-det':      { pt: 'Ver detalhes <span class="arrow">↓</span>', en: 'See details <span class="arrow">↓</span>' },
    'tcc-label-sobre':  { pt: '// sobre o projeto', en: '// about the project' },
    'tcc-sobre-title':  { pt: 'Um sistema completo<br>para <em>monitoramento inteligente.</em>', en: 'A complete system<br>for <em>intelligent monitoring.</em>' },
    'tcc-prob':         { pt: '<em>O Problema:</em> Métodos tradicionais de inspeção visual e contagem manual de pragas são imprecisos e lentos, resultando em decisões tardias.', en: '<em>The Problem:</em> Traditional visual inspection and manual pest counting methods are imprecise and slow, resulting in late decisions.' },
    'tcc-sol':          { pt: '<em>A Solução:</em> Uma solução modular que utiliza Edge Computing para processar dados localmente, oferecendo ferramentas acessíveis que antes eram restritas a grandes produtores.', en: '<em>The Solution:</em> A modular solution using Edge Computing to process data locally, offering tools that were previously restricted to large producers.' },
    'tcc-imp':          { pt: '<em>Impacto Social:</em> Foco no fortalecimento da agricultura familiar, tornando-a mais competitiva e sustentável através da tecnologia.', en: '<em>Social Impact:</em> Focus on strengthening family farming, making it more competitive and sustainable through technology.' },
    'tcc-label-feat':   { pt: '// funcionalidades', en: '// features' },
    'tcc-feat1-title':  { pt: 'Monitoramento de Solo e Ambiente', en: 'Soil & Environment Monitoring' },
    'tcc-feat1-p':      { pt: 'Detecção e análise automática da qualidade do solo e ambiente.', en: 'Automatic detection and analysis of soil and environmental quality.' },
    'tcc-feat2-title':  { pt: 'Detecção Automática de Pragas', en: 'Automatic Pest Detection' },
    'tcc-feat2-p':      { pt: 'Identificação e contagem automática de pragas através de visão computacional.', en: 'Automatic pest identification and counting through computer vision.' },
    'tcc-feat3-title':  { pt: 'Análise da Saúde da Vegetação', en: 'Vegetation Health Analysis' },
    'tcc-feat3-p':      { pt: 'Monitoramento visual da saúde da vegetação e geração de mapas de saúde.', en: 'Visual monitoring of vegetation health and generation of health maps.' },
    'tcc-label-prev':   { pt: '// preview', en: '// preview' },
    'tcc-cta-title':    { pt: 'Gostou do projeto?', en: 'Like the project?' },
    'tcc-cta-p':        { pt: 'Explore o código ou entre em contato para conversar sobre ele.', en: 'Explore the code or get in touch to talk about it.' },
    'tcc-cta-gh':       { pt: 'Acessar repositório <span class="arrow">→</span>', en: 'Access repository <span class="arrow">→</span>' },
    'tcc-cta-conv':     { pt: 'Vamos conversar', en: "Let's talk" },
    'breadcrumb-proj':  { pt: 'Projetos', en: 'Projects' },
    'breadcrumb-cur':   { pt: 'Sistema de Monitoramento', en: 'Monitoring System' },

    /* ── CONTATO ── */
    'contato-label':    { pt: '// contato', en: '// contact' },
    'contato-title':    { pt: 'Vamos criar<br>algo juntos.', en: "Let's build<br>something together." },
    'contato-sub':      { pt: 'Aberto a projetos freelance, oportunidades e conversas interessantes.', en: 'Open to freelance projects, opportunities and interesting conversations.' },
    'contato-h2':       { pt: 'Entre em<br><em>contato.</em>', en: "Get in<br><em>touch.</em>" },
    'contato-p':        { pt: 'Respondo em até 24 horas. Prefere e-mail? Use o formulário ao lado ou me encontre nas redes.', en: 'I reply within 24 hours. Prefer email? Use the form or find me on social media.' },
    'contato-email-lbl':{ pt: 'E-mail', en: 'E-mail' },
    'form-label-nome':  { pt: 'Nome', en: 'Name' },
    'form-label-email': { pt: 'E-mail', en: 'E-mail' },
    'form-label-assunto':{ pt: 'Assunto', en: 'Subject' },
    'form-label-msg':   { pt: 'Mensagem', en: 'Message' },
    'form-ph-nome':     { pt: 'Seu nome completo', en: 'Your full name' },
    'form-ph-assunto':  { pt: 'Sobre o que quer falar?', en: 'What would you like to talk about?' },
    'form-ph-msg':      { pt: 'Descreva seu projeto ou ideia...', en: 'Describe your project or idea...' },
    'form-btn-send':    { pt: 'Enviar mensagem <span class="arrow">→</span>', en: 'Send message <span class="arrow">→</span>' },
    'err-nome':         { pt: 'Por favor, informe seu nome.', en: 'Please enter your name.' },
    'err-email':        { pt: 'Informe um e-mail válido.', en: 'Please enter a valid email.' },
    'err-assunto':      { pt: 'Informe o assunto da mensagem.', en: 'Please enter a subject.' },
    'err-mensagem':     { pt: 'Por favor, escreva uma mensagem (mín. 10 caracteres).', en: 'Please write a message (min. 10 characters).' },
};

// ── feature expand texts (used in tcc.html dynamic content) ──
const FEATURE_DATA_EN = {
    1: {
        title: "Module 1 — Soil & Environment Monitoring",
        text:  "Collection of vital data such as moisture, pH and electrical conductivity of the soil, as well as air temperature and humidity. The module is based on an ESP32 microcontroller and capacitive sensors, ensuring precise and continuous readings of the agricultural microclimate.",
    },
    2: {
        title: "Module 2 — Automatic Pest Detection",
        text:  "Smart photo trap that uses Computer Vision to identify and quantify pests in real time. Detection is performed by a YOLOv8s neural network integrated with the Raspberry Pi, enabling fast responses and automated alerts.",
    },
    3: {
        title: "Module 3 — Vegetation Health Analysis",
        text:  "PTZ camera monitoring for macroscopic crop health analysis through the RGB spectrum. Generates vegetation health maps for visual correlation with sensor data, facilitating agronomic decision-making.",
    },
};

function getCurrentLang() {
    return localStorage.getItem('victor-lang') || 'pt';
}

function setLang(lang) {
    localStorage.setItem('victor-lang', lang);
    applyTranslations(lang);
    updateLangButton(lang);
}

function applyTranslations(lang) {
    // Translate innerHTML / text content
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        if (!TRANSLATIONS[key]) return;
        const text = TRANSLATIONS[key][lang];
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
            el.placeholder = text;
        } else {
            el.innerHTML = text;
        }
    });

    // Translate placeholders declared separately (data-i18n-ph)
    document.querySelectorAll('[data-i18n-ph]').forEach(el => {
        const key = el.dataset.i18nPh;
        if (!TRANSLATIONS[key]) return;
        el.placeholder = TRANSLATIONS[key][lang];
    });

    // Update <html lang> attribute
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
}

function updateLangButton(lang) {
    document.querySelectorAll('.lang-toggle-btn').forEach(btn => {
        btn.textContent = lang === 'pt' ? 'EN' : 'PT';
        btn.setAttribute('aria-label', lang === 'pt' ? 'Switch to English' : 'Mudar para Português');
        btn.setAttribute('title', lang === 'pt' ? 'Switch to English' : 'Mudar para Português');
    });
}

function initLang() {
    const lang = getCurrentLang();
    applyTranslations(lang);
    updateLangButton(lang);
}

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

// ── Wire up lang toggle button clicks ──
document.addEventListener('click', e => {
    if (e.target.closest('.lang-toggle-btn')) {
        const newLang = getCurrentLang() === 'pt' ? 'en' : 'pt';
        setLang(newLang);
    }
});

// ── Init on every page load ──
initLang();

// =============================================
// FEATURE EXPAND (tcc.html) — i18n-aware
// =============================================
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

        const lang   = getCurrentLang();
        const dataEn = FEATURE_DATA_EN[id];
        const title  = (lang === 'en' && dataEn) ? dataEn.title : featureData[id].title;
        const text   = (lang === 'en' && dataEn) ? dataEn.text  : featureData[id].text;

        container.innerHTML = `
            <div class="feature-expand-full">
                <div class="feature-expand-inner">

                    <div>
                        <h4>${title}</h4>
                        <p>${text}</p>
                    </div>

                    ${featureData[id].img ? `<div><img src="${featureData[id].img}" alt="${title}"></div>` : ''}

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