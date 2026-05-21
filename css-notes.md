/_ ===== CSS RESET ===== _/

- {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  }

/_ ===== TYPOGRAPHY SCALE ===== _/
:root {
--text-xs: 0.75rem; /_ 12px _/
--text-sm: 0.875rem; /_ 14px _/
--text-base: 1rem; /_ 16px - body text _/
--text-lg: 1.125rem; /_ 18px _/
--text-xl: 1.25rem; /_ 20px _/
--text-2xl: 1.5rem; /_ 24px _/
--text-3xl: 1.875rem; /_ 30px _/
--text-4xl: 2.25rem; /_ 36px _/
--text-5xl: 3rem; /_ 48px _/
}

/_ ===== DESIGN TOKENS (LIGHT MODE) ===== _/
:root {
/_ Brand _/
--color-primary: #005eb8;
--color-primary-dark: #003f88;
--color-primary-light: #e8f0fb;

/_ Semantic _/
--color-success: #16a34a;
--color-warning: #d97706;
--color-danger: #dc2626;
--color-info: #0284c7;

/_ Neutrals _/
--color-text: #1a202c;
--color-text-muted: #718096;
--color-border: #e2e8f0;
--color-bg: #f8fafc;
--color-white: #ffffff;

/_ Shadows _/
--shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.07);
--shadow-md: 0 2px 10px rgba(0, 0, 0, 0.07);
--shadow-card-hover: 0 4px 15px rgba(0, 94, 184, 0.15);

/_ Spacing _/
--space-md: 1rem;

/_ Transitions _/
--transition-fast: 150ms ease;
--transition-base: 250ms ease;
}

/_ ===== DARK MODE OVERRIDES ===== _/
[data-theme="dark"] {
--color-primary-light: #1e3a5f;

--color-text: #cbd5e1;
--color-text-muted: #94a3b8;
--color-border: #334155;
--color-bg: #0f172a;
--color-white: #1e293b;

--shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.3);
--shadow-md: 0 2px 10px rgba(0, 0, 0, 0.4);
--shadow-card-hover: 0 4px 15px rgba(0, 0, 0, 0.4);
}

/_ ===== BASE STYLES ===== _/
body {
font-family: "Open Sans", sans-serif;
font-size: var(--text-base);
line-height: 1.7;
color: var(--color-text);
background-color: var(--color-bg);
transition:
background-color var(--transition-base),
color var(--transition-base);
}

h1,
h2,
h3 {
font-family: "Merriweather", serif;
}

h1 {
font-size: var(--text-4xl);
}

h2 {
font-size: var(--text-2xl);
}

h3 {
font-size: var(--text-xl);
}

a {
color: var(--color-primary);
text-decoration: none;
}

a:hover {
text-decoration: underline;
}

Professional standard breakpoints
xs: < 480px - small phones
sm: 480-767px - large phones
md: 768-1023px - tablets
lg: 1024-1279px - small desktops
xl: >/= 1280px - large desktops

As min-width media queries (mobile first):
@media (min-width: 480px) {sm and above}
@media (min-width: 768px) {md and above}
@media (min-width: 1024px) {lg and above}
@media (min-width: 1280px) {xl and above}

Clamp(minimum, prefered, maximum)
h1 {
font-size: clamp(1.5rem, 4vw, 2.5rem);
/_never smaller than 1.5rem, never larger than 2.5rem, scales with viewport width in between_/
}
body {
font-size: clamp(0.9rem, 1.5vw, 1rem);
}

fluid images
every image you use should be responsive by default:
img {
max-width: 100%;
height: auto;
display: block;
}

/_ ===== DEFAULT STYLES (DESKTOP) ===== _/
.services-grid {
display: flex;
flex-wrap: wrap;
}

/_ ===== RESPONSIVE ===== _/
/_ TABLET: SCREENS 768PX OR LESS _/
@media (max-width: 768px) {
.service-card {
flex: 1 1 calc(50% - 20px);
}
}

/_ IPADS: SCREENS 600PX OR LESS _/
@media (max-width: 600px) {
.nav-container {
flex-direction: column;
height: auto;
padding: 15px 0;
gap: 10px;
}

.nav-links {
gap: 15px;
}
}

/_ MOBILE: SCREENS 480PX OR LESS _/
@media (max-width: 480px) {
.service-card {
flex: 1 1 100%;
}

.nav-links {
display: flex;
flex-wrap: nowrap;
justify-content: center;
gap: 8px;
width: 100%;
}

.nav-links a {
font-size: 0.8rem;
white-space: nowrap;
letter-spacing: -0.5px;
}

header h1 {
font-size: 1.5rem;
}
}
