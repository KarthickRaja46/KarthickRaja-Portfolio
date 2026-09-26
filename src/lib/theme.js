/*
 * Light / dark theme. The initial theme is applied before first paint by the
 * inline script in index.html (saved choice, else the system preference);
 * these helpers keep it in sync afterwards.
 */
export const THEME_KEY = 'kr-theme';
const THEME_COLORS = { dark: '#05060a', light: '#f3f4f9' };

export function getTheme() {
  return document.documentElement.dataset.theme === 'light' ? 'light' : 'dark';
}

export function applyTheme(theme) {
  const root = document.documentElement;
  root.dataset.theme = theme;
  root.style.colorScheme = theme;
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', THEME_COLORS[theme]);
}

export function saveTheme(theme) {
  try {
    localStorage.setItem(THEME_KEY, theme);
  } catch {
    // Storage can be unavailable (private mode); the theme still applies for this visit.
  }
}

export function hasSavedTheme() {
  try {
    return Boolean(localStorage.getItem(THEME_KEY));
  } catch {
    return false;
  }
}
