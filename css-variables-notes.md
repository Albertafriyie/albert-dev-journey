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
