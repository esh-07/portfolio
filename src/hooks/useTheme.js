import { useCallback, useEffect, useState } from 'react';
import { flushSync } from 'react-dom';

const THEME_COLORS = { light: '#f4f2ec', dark: '#0b0b0c' };

const prefersReducedMotion = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const getInitialTheme = () => {
  const stored = localStorage.getItem('theme');
  if (stored === 'light' || stored === 'dark') return stored;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

export default function useTheme() {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute('content', THEME_COLORS[theme]);
  }, [theme]);

  // Follow the OS preference until the visitor makes an explicit choice
  useEffect(() => {
    if (localStorage.getItem('theme')) return undefined;
    const query = window.matchMedia('(prefers-color-scheme: dark)');
    const onChange = (e) => setTheme(e.matches ? 'dark' : 'light');
    query.addEventListener('change', onChange);
    return () => query.removeEventListener('change', onChange);
  }, []);

  // Circular reveal via the View Transition API, expanding from the click
  // point; falls back to a plain crossfade where unsupported.
  const toggleTheme = useCallback((event) => {
    const root = document.documentElement;
    const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('theme', next);

    if (prefersReducedMotion() || typeof document.startViewTransition !== 'function') {
      root.classList.add('theme-anim');
      window.setTimeout(() => root.classList.remove('theme-anim'), 400);
      setTheme(next);
      return;
    }

    const x = event?.clientX ?? window.innerWidth - 48;
    const y = event?.clientY ?? 48;
    root.style.setProperty('--vt-x', `${x}px`);
    root.style.setProperty('--vt-y', `${y}px`);
    document.startViewTransition(() => {
      flushSync(() => setTheme(next));
    });
  }, []);

  return { theme, toggleTheme };
}
