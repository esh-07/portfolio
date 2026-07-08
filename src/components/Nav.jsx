import { LINKS, RESUME_URL } from '../data/content.js';

const isMac = /Mac|iPhone|iPad/.test(navigator.platform || navigator.userAgent);

const SECTIONS = [
  { id: 'experience', label: '01_EXPERIENCE' },
  { id: 'projects', label: '02_PROJECTS' },
  { id: 'toolkit', label: '03_TOOLKIT' },
  { id: 'contact', label: '04_CONTACT' },
];

function Nav({ theme, toggleTheme, onOpenPalette }) {
  return (
    <>
      <header className="masthead">
        <span className="masthead__id">ESHAAN_CHATURVEDI // SOFTWARE + ML</span>
        <span className="masthead__links">
          <a className="b-link" href={RESUME_URL} target="_blank" rel="noreferrer">
            [RESUME.PDF]
          </a>{' '}
          <a className="b-link" href={LINKS.github} target="_blank" rel="noreferrer">
            [GITHUB]
          </a>{' '}
          <a className="b-link" href={LINKS.linkedin} target="_blank" rel="noreferrer">
            [LINKEDIN]
          </a>
        </span>
      </header>
      <nav className="navstrip" aria-label="Sections">
        <div className="navstrip__anchors">
          {SECTIONS.map(({ id, label }) => (
            <a key={id} className="b-link" href={`#${id}`}>
              {label}
            </a>
          ))}
        </div>
        <div className="navstrip__tools">
          <button type="button" className="b-btn" onClick={onOpenPalette}>
            [{isMac ? 'CMD' : 'CTRL'}+K]
          </button>
          <button
            type="button"
            className="b-btn"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
          >
            [{theme === 'dark' ? 'LIGHT_MODE' : 'DARK_MODE'}]
          </button>
        </div>
      </nav>
    </>
  );
}

export default Nav;
