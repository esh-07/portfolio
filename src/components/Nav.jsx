import { useEffect, useState } from 'react';
import { RESUME_URL } from '../data/content.js';

const SECTIONS = [
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'toolkit', label: 'Toolkit' },
  { id: 'contact', label: 'Contact' },
];

const isMac = /Mac|iPhone|iPad/.test(navigator.platform || navigator.userAgent);

function SunIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="4.2" />
      <path d="M12 2.5v2.4M12 19.1v2.4M2.5 12h2.4M19.1 12h2.4M5 5l1.7 1.7M17.3 17.3 19 19M19 5l-1.7 1.7M6.7 17.3 5 19" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M20.5 14.5A8.5 8.5 0 1 1 9.5 3.5a7 7 0 0 0 11 11z" />
    </svg>
  );
}

function Nav({ theme, toggleTheme, onOpenPalette }) {
  const [active, setActive] = useState(null);

  // Scrollspy: mark the section currently in the upper third of the viewport
  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const probe = window.scrollY + window.innerHeight * 0.35;
      let current = null;
      for (const { id } of SECTIONS) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= probe) current = id;
      }
      setActive(current);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    raf = requestAnimationFrame(update);
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <header className="nav">
      <div className="nav__inner container">
        <a className="nav__name" href="#top">
          Eshaan Chaturvedi
        </a>
        <div className="nav__right">
          <nav className="nav__links" aria-label="Sections">
            {SECTIONS.map(({ id, label }, i) => (
              <a key={id} href={`#${id}`} aria-current={active === id ? 'true' : undefined}>
                <span className="nav__num">0{i + 1}</span>
                {label}
              </a>
            ))}
          </nav>
          <div className="nav__actions">
            <a className="nav__resume" href={RESUME_URL} target="_blank" rel="noreferrer">
              Resume
            </a>
            <button
              type="button"
              className="nav__kbd"
              onClick={onOpenPalette}
              aria-label="Open command palette"
            >
              {isMac ? '⌘K' : 'Ctrl K'}
            </button>
            <button
              type="button"
              className="nav__theme"
              onClick={(e) => toggleTheme(e)}
              aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
            >
              {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Nav;
