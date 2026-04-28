/* ==============================================
   RESET & BASES
=============================================== */
*, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

:root {
    --bg:          #080a0f;
    --bg-2:        #0d1018;
    --surface:     rgba(255,255,255,0.04);
    --surface-2:   rgba(255,255,255,0.07);
    --border:      rgba(255,255,255,0.08);
    --border-2:    rgba(255,255,255,0.14);
    --text:        #e8eaf0;
    --text-muted:  #6b7280;
    --text-dim:    #9ca3af;
    --accent:      #5b8fff;
    --accent-2:    #8b5cf6;
    --accent-glow: rgba(91, 143, 255, 0.25);

    --serif:  'Fira Code', 'Courier New', monospace;
    --sans:   'DM Sans', system-ui, sans-serif;

    --radius-sm: 8px;
    --radius:    16px;
    --radius-lg: 24px;

    --transition: 0.65s cubic-bezier(0.16, 1, 0.3, 1);
}

html { scroll-behavior: smooth; }

body {
    background: var(--bg);
    color: var(--text);
    font-family: var(--sans);
    font-size: 16px;
    line-height: 1.7;
    font-weight: 300;
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
}

/* ==============================================
   NAVBAR
=============================================== */
.navbar {
    background: rgba(8,10,15,0.7) !important;
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border-bottom: 1px solid var(--border) !important;
    padding: 18px 0;
    transition: padding 0.3s ease;
}

.navbar.scrolled {
    padding: 12px 0;
}

.navbar-brand {
    font-family: var(--sans);
    font-weight: 500;
    font-size: 17px;
    color: var(--text) !important;
    letter-spacing: -0.01em;
    display: flex;
    align-items: center;
    gap: 8px;
    text-decoration: none;
}

.brand-dot {
    width: 7px;
    height: 7px;
    background: var(--accent);
    border-radius: 50%;
    display: inline-block;
    box-shadow: 0 0 8px var(--accent);
}

.navbar-nav .nav-link {
    color: var(--text-dim) !important;
    font-size: 14px;
    font-weight: 400;
    letter-spacing: 0.01em;
    padding: 6px 14px !important;
    border-radius: 20px;
    transition: all 0.2s ease;
    text-decoration: none;
}

.navbar-nav .nav-link:hover,
.navbar-nav .nav-link.active {
    color: var(--text) !important;
    background: var(--surface-2);
}

.navbar-nav .nav-cta {
    background: var(--surface);
    border: 1px solid var(--border-2) !important;
    color: var(--text) !important;
}

.navbar-nav .nav-cta:hover {
    background: rgba(91,143,255,0.15) !important;
    border-color: rgba(91,143,255,0.4) !important;
    color: #fff !important;
}

.navbar-toggler {
    border: none !important;
    box-shadow: none !important;
    padding: 4px;
    display: flex;
    flex-direction: column;
    gap: 5px;
    background: none;
    cursor: pointer;
}

.toggler-bar {
    display: block;
    width: 22px;
    height: 1.5px;
    background: var(--text);
    border-radius: 2px;
    transition: all 0.3s ease;
}

/* ==============================================
   HERO BG EFFECTS
=============================================== */
.hero-bg {
    position: absolute;
    inset: 0;
    overflow: hidden;
    pointer-events: none;
    z-index: 0;
}

.orb {
    position: absolute;
    border-radius: 50%;
    filter: blur(80px);
    opacity: 0.35;
    animation: float 8s ease-in-out infinite;
}

.orb-1 {
    width: 500px;
    height: 500px;
    background: radial-gradient(circle, var(--accent) 0%, transparent 70%);
    top: -150px;
    right: -100px;
    animation-delay: 0s;
}

.orb-2 {
    width: 400px;
    height: 400px;
    background: radial-gradient(circle, var(--accent-2) 0%, transparent 70%);
    bottom: -100px;
    left: -80px;
    animation-delay: -4s;
}

.orb-3 {
    width: 300px;
    height: 300px;
    background: radial-gradient(circle, #06b6d4 0%, transparent 70%);
    top: 40%;
    left: 30%;
    opacity: 0.15;
    animation-delay: -2s;
}

@keyframes float {
    0%, 100% { transform: translateY(0) scale(1); }
    50%       { transform: translateY(-30px) scale(1.05); }
}

.grid-overlay {
    position: absolute;
    inset: 0;
    background-image:
        linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px);
    background-size: 60px 60px;
    mask-image: radial-gradient(ellipse 80% 80% at 50% 0%, black 40%, transparent 100%);
}

/* ==============================================
   HERO SECTION
=============================================== */
.hero-section {
    position: relative;
    min-height: 100vh;
    display: flex;
    align-items: center;
    padding: 120px 0 80px;
}

.hero-content {
    position: relative;
    z-index: 1;
    max-width: 760px;
}

.hero-eyebrow {
    font-size: 13px;
    font-weight: 400;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: var(--accent);
    margin-bottom: 28px;
}

.hero-title {
    font-family: var(--serif);
    font-size: clamp(36px, 5.5vw, 72px);
    line-height: 1.15;
    font-weight: 700;
    letter-spacing: -0.03em;
    color: #fff;
    margin-bottom: 28px;
}

.hero-title em,
.page-title em {
    font-style: normal;
    color: transparent;
    background: linear-gradient(135deg, var(--accent), var(--accent-2));
    -webkit-background-clip: text;
    background-clip: text;
}

.hero-sub {
    font-size: 18px;
    color: var(--text-dim);
    font-weight: 300;
    line-height: 1.7;
    margin-bottom: 48px;
}

.hero-actions {
    display: flex;
    gap: 16px;
    flex-wrap: wrap;
    align-items: center;
}

.hero-scroll-hint {
    position: absolute;
    bottom: 40px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    opacity: 0.4;
}

.scroll-line {
    width: 1px;
    height: 50px;
    background: linear-gradient(to bottom, transparent, var(--text-muted));
    animation: scrollPulse 2s ease-in-out infinite;
}

.hero-scroll-hint span {
    font-size: 10px;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: var(--text-muted);
}

@keyframes scrollPulse {
    0%, 100% { opacity: 0.5; transform: scaleY(1); }
    50%       { opacity: 1;   transform: scaleY(1.2); }
}

/* ==============================================
   BUTTONS
=============================================== */
.btn-primary-custom {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: var(--accent);
    color: #fff;
    text-decoration: none;
    font-family: var(--sans);
    font-size: 14px;
    font-weight: 500;
    padding: 13px 28px;
    border-radius: 100px;
    border: none;
    cursor: pointer;
    transition: all 0.25s ease;
    letter-spacing: -0.01em;
    box-shadow: 0 0 30px rgba(91,143,255,0.3);
}

.btn-primary-custom:hover {
    background: #4a7aee;
    transform: translateY(-2px);
    box-shadow: 0 8px 40px rgba(91,143,255,0.45);
    color: #fff;
}

.btn-primary-custom .arrow {
    transition: transform 0.2s ease;
}

.btn-primary-custom:hover .arrow {
    transform: translateX(3px);
}

.btn-ghost-custom {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: transparent;
    color: var(--text-dim);
    text-decoration: none;
    font-family: var(--sans);
    font-size: 14px;
    font-weight: 400;
    padding: 13px 24px;
    border-radius: 100px;
    border: 1px solid var(--border-2);
    transition: all 0.25s ease;
    letter-spacing: -0.01em;
}

.btn-ghost-custom:hover {
    color: var(--text);
    border-color: rgba(255,255,255,0.25);
    background: var(--surface-2);
}

.btn-ghost-custom .arrow {
    transition: transform 0.3s ease;
}

.btn-ghost-custom:hover .arrow {
    transform: translateY(4px);
}

.w-100 { width: 100%; justify-content: center; }

/* ==============================================
   SECTION COMMONS
=============================================== */
.section-label {
    font-size: 12px;
    font-weight: 400;
    letter-spacing: 0.1em;
    color: var(--text-muted);
    font-family: 'Courier New', monospace;
    margin-bottom: 24px;
}

.section-title {
    font-family: var(--sans);
    font-size: clamp(28px, 3.5vw, 44px);
    line-height: 1.2;
    font-weight: 500;
    letter-spacing: -0.02em;
    color: #fff;
    margin-bottom: 28px;
}

.section-title em {
    font-style: normal;
    color: transparent;
    background: linear-gradient(135deg, var(--accent), var(--accent-2));
    -webkit-background-clip: text;
    background-clip: text;
}

/* ==============================================
   SOBRE SECTION
=============================================== */
.sobre-section {
    padding: 120px 0;
}

.sobre-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 80px;
    align-items: start;
    margin-bottom: 80px;
}

.sobre-text p {
    color: var(--text-dim);
    margin-bottom: 20px;
    font-size: 17px;
}

.sobre-skills {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    padding-top: 16px;
}

.skill-chip {
    background: var(--surface);
    border: 1px solid var(--border);
    color: var(--text-dim);
    font-size: 13px;
    font-weight: 400;
    padding: 8px 16px;
    border-radius: 100px;
    transition: all 0.2s ease;
    cursor: default;
}

.skill-chip:hover {
    border-color: var(--accent);
    color: var(--accent);
    background: rgba(91,143,255,0.07);
}

.stats-row {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2px;
    border-radius: var(--radius-lg);
    overflow: hidden;
}

.stat-card {
    background: var(--surface);
    border: 1px solid var(--border);
    padding: 40px;
    text-align: center;
    transition: background 0.2s ease;
}

.stat-card:hover {
    background: var(--surface-2);
}

.stat-number {
    font-family: var(--serif);
    font-size: 48px;
    font-weight: 700;
    line-height: 1;
    margin-bottom: 8px;
    background: linear-gradient(135deg, #fff 60%, var(--accent));
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
}

.stat-label {
    font-size: 14px;
    color: var(--text-muted);
    font-weight: 300;
}

/* ==============================================
   PAGE HERO (subpages)
=============================================== */
.page-hero {
    position: relative;
    padding: 160px 0 80px;
    overflow: hidden;
}

.page-title {
    font-family: var(--serif);
    font-size: clamp(36px, 5.5vw, 72px);
    line-height: 1.15;
    font-weight: 700;
    letter-spacing: -0.03em;
    color: #fff;
    margin-bottom: 20px;
    position: relative;
    z-index: 1;
}

.page-sub {
    font-size: 18px;
    color: var(--text-dim);
    max-width: 520px;
    position: relative;
    z-index: 1;
}

/* ==============================================
   PROJETOS
=============================================== */
.projetos-section {
    padding: 40px 0 100px;
}

.projeto-featured {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: var(--radius-lg);
    padding: 60px;
    margin-bottom: 40px;
    display: grid;
    grid-template-columns: 120px 1fr auto;
    gap: 40px;
    align-items: center;
    transition: border-color 0.3s ease, background 0.3s ease;
}

.projeto-featured:hover {
    border-color: var(--border-2);
    background: var(--surface-2);
}

.projeto-featured-meta {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.projeto-num {
    font-family: 'Courier New', monospace;
    font-size: 13px;
    color: var(--text-muted);
}

.projeto-tag {
    font-size: 11px;
    font-weight: 500;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--accent);
    background: rgba(91,143,255,0.1);
    padding: 4px 10px;
    border-radius: 100px;
    border: 1px solid rgba(91,143,255,0.2);
    white-space: nowrap;
}

.projeto-featured-body h2 {
    font-family: var(--sans);
    font-size: 28px;
    font-weight: 500;
    color: #fff;
    margin-bottom: 12px;
    letter-spacing: -0.02em;
}

.projeto-featured-body p {
    color: var(--text-dim);
    font-size: 15px;
    margin-bottom: 20px;
    max-width: 500px;
}

.projeto-techs {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
}

.projeto-techs span {
    font-size: 12px;
    color: var(--text-muted);
    background: rgba(255,255,255,0.04);
    border: 1px solid var(--border);
    padding: 4px 12px;
    border-radius: 100px;
}

.projeto-featured-actions {
    display: flex;
    flex-direction: column;
    gap: 12px;
    white-space: nowrap;
}

.projetos-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
}

.projeto-card {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    padding: 36px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    transition: all 0.3s ease;
}

.projeto-card:hover {
    border-color: var(--border-2);
    background: var(--surface-2);
    transform: translateY(-4px);
}

.projeto-card-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 8px;
}

.projeto-card h3 {
    font-family: var(--sans);
    font-size: 20px;
    font-weight: 500;
    color: #fff;
    letter-spacing: -0.01em;
}

.projeto-card p {
    color: var(--text-dim);
    font-size: 14px;
    flex: 1;
}

.projeto-card-footer {
    padding-top: 16px;
    border-top: 1px solid var(--border);
}

.link-arrow {
    font-size: 13px;
    color: var(--accent);
    text-decoration: none;
    font-weight: 500;
    transition: gap 0.2s ease;
    display: inline-flex;
    align-items: center;
    gap: 6px;
}

.link-arrow:hover {
    color: #fff;
    gap: 10px;
}

/* ==============================================
   CTA SECTION
=============================================== */
.cta-section {
    padding: 80px 0 120px;
}

.cta-inner {
    background: linear-gradient(135deg, rgba(91,143,255,0.1), rgba(139,92,246,0.08));
    border: 1px solid rgba(91,143,255,0.2);
    border-radius: var(--radius-lg);
    padding: 80px;
    text-align: center;
}

.cta-inner h2 {
    font-family: var(--sans);
    font-size: 40px;
    font-weight: 500;
    color: #fff;
    margin-bottom: 16px;
    letter-spacing: -0.02em;
}

.cta-inner p {
    color: var(--text-dim);
    font-size: 18px;
    margin-bottom: 40px;
}

/* ==============================================
   CONTATO
=============================================== */
.contato-section {
    padding: 60px 0 120px;
}

.contato-grid {
    display: grid;
    grid-template-columns: 1fr 1.4fr;
    gap: 80px;
    align-items: start;
}

.contato-info h2 {
    font-family: var(--sans);
    font-size: 40px;
    font-weight: 500;
    color: #fff;
    line-height: 1.15;
    letter-spacing: -0.02em;
    margin-bottom: 20px;
}

.contato-info h2 em {
    font-style: italic;
    color: transparent;
    background: linear-gradient(135deg, var(--accent), var(--accent-2));
    -webkit-background-clip: text;
    background-clip: text;
}

.contato-info > p {
    color: var(--text-dim);
    margin-bottom: 48px;
}

.contato-links {
    display: flex;
    flex-direction: column;
    gap: 16px;
}

.contato-link-item {
    display: flex;
    align-items: center;
    gap: 20px;
    background: var(--surface);
    border: 1px solid var(--border);
    padding: 20px 24px;
    border-radius: var(--radius);
    text-decoration: none;
    transition: all 0.2s ease;
}

.contato-link-item:hover {
    border-color: var(--border-2);
    background: var(--surface-2);
    transform: translateX(4px);
}

.contato-icon {
    width: 40px;
    height: 40px;
    background: var(--surface-2);
    border: 1px solid var(--border);
    border-radius: var(--radius-sm);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    color: var(--accent);
    flex-shrink: 0;
}

.link-label {
    font-size: 11px;
    font-weight: 500;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--text-muted);
    margin-bottom: 2px;
}

.link-value {
    font-size: 14px;
    color: var(--text);
}

/* FORM */
.contato-form-wrap {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: var(--radius-lg);
    padding: 48px;
}

.contato-form {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.form-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
}

.form-group {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.form-group label {
    font-size: 12px;
    font-weight: 500;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--text-muted);
}

.form-input {
    background: rgba(255,255,255,0.04);
    border: 1px solid var(--border);
    border-radius: var(--radius-sm);
    padding: 13px 16px;
    color: var(--text);
    font-family: var(--sans);
    font-size: 14px;
    font-weight: 300;
    outline: none;
    transition: all 0.2s ease;
    width: 100%;
    resize: vertical;
}

.form-input::placeholder {
    color: var(--text-muted);
}

.form-input:focus {
    border-color: var(--accent);
    background: rgba(91,143,255,0.05);
    box-shadow: 0 0 0 3px rgba(91,143,255,0.1);
}

textarea.form-input {
    min-height: 120px;
}

/* ==============================================
   FOOTER
=============================================== */
.site-footer {
    border-top: 1px solid var(--border);
    padding: 40px 0;
}

.footer-inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 20px;
}

.footer-brand {
    font-weight: 500;
    color: var(--text);
    font-size: 15px;
}

.footer-links {
    display: flex;
    gap: 24px;
}

.footer-links a {
    font-size: 13px;
    color: var(--text-muted);
    text-decoration: none;
    transition: color 0.2s ease;
}

.footer-links a:hover {
    color: var(--text);
}

.footer-copy {
    font-size: 12px;
    color: var(--text-muted);
}

/* ==============================================
   REVEAL ANIMATIONS
=============================================== */
.reveal-up {
    opacity: 0;
    transform: translateY(40px);
    transition: opacity 0.8s var(--transition),
                transform 0.8s var(--transition);
}

.reveal-up.visible {
    opacity: 1;
    transform: translateY(0);
}

.delay-1 { transition-delay: 0.1s; }
.delay-2 { transition-delay: 0.2s; }
.delay-3 { transition-delay: 0.3s; }
.delay-4 { transition-delay: 0.5s; }

/* ==============================================
   RESPONSIVE
=============================================== */
@media (max-width: 991px) {
    .sobre-grid      { grid-template-columns: 1fr; gap: 48px; }
    .stats-row       { grid-template-columns: 1fr; }
    .stat-card       { padding: 28px; }
    .projeto-featured {
        grid-template-columns: 1fr;
        gap: 24px;
    }
    .projetos-grid   { grid-template-columns: 1fr; }
    .contato-grid    { grid-template-columns: 1fr; gap: 48px; }
    .form-row        { grid-template-columns: 1fr; }
    .cta-inner       { padding: 48px 32px; }
    .cta-inner h2    { font-size: 36px; }
}

@media (max-width: 767px) {
    .navbar-collapse {
        background: rgba(8,10,15,0.95);
        border: 1px solid var(--border);
        border-radius: var(--radius);
        margin-top: 12px;
        padding: 16px;
    }
    .hero-title  { font-size: 44px; }
    .page-title  { font-size: 40px; }
    .hero-actions { flex-direction: column; align-items: flex-start; }
    .footer-inner { justify-content: center; text-align: center; }
    .footer-links { flex-wrap: wrap; justify-content: center; }
    .contato-form-wrap { padding: 28px; }
    .projeto-featured { padding: 28px; }
}