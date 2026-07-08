import { useEffect, useMemo, useRef, useState } from 'react';
import { LINKS, RESUME_URL } from '../data/content.js';

const prefersReducedMotion = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Instant jumps: the honest brutalist scroll
const scrollToSection = (id) => document.getElementById(id)?.scrollIntoView({ block: 'start' });

const setAllDetails = (open) => {
  document.querySelectorAll('main details').forEach((d) => {
    d.open = open;
  });
};

const buildActions = (toggleTheme) => [
  { label: 'Go to Experience', hint: 'Section', run: () => scrollToSection('experience') },
  { label: 'Go to Projects', hint: 'Section', run: () => scrollToSection('projects') },
  { label: 'Go to Toolkit', hint: 'Section', run: () => scrollToSection('toolkit') },
  { label: 'Go to Contact', hint: 'Section', run: () => scrollToSection('contact') },
  {
    label: 'Open Resume',
    hint: 'Link',
    run: () => window.open(RESUME_URL, '_blank', 'noopener'),
  },
  {
    label: 'Open GitHub',
    hint: 'Link',
    run: () => window.open(LINKS.github, '_blank', 'noopener'),
  },
  {
    label: 'Open LinkedIn',
    hint: 'Link',
    run: () => window.open(LINKS.linkedin, '_blank', 'noopener'),
  },
  {
    label: 'Copy email address',
    hint: 'Action',
    run: () => navigator.clipboard?.writeText(LINKS.email),
  },
  {
    label: 'Send an email',
    hint: 'Action',
    run: () => {
      window.location.href = `mailto:${LINKS.email}`;
    },
  },
  { label: 'Expand all sections', hint: 'Action', run: () => setAllDetails(true) },
  { label: 'Collapse all sections', hint: 'Action', run: () => setAllDetails(false) },
  { label: 'Toggle theme', hint: 'Action', run: toggleTheme },
];

// Subsequence fuzzy match; consecutive runs and word starts score higher.
const fuzzyScore = (query, label) => {
  const q = query.toLowerCase();
  const l = label.toLowerCase();
  let qi = 0;
  let streak = 0;
  let score = 0;
  for (let li = 0; li < l.length && qi < q.length; li += 1) {
    if (l[li] === q[qi]) {
      streak += 1;
      score += streak + (li === 0 || l[li - 1] === ' ' ? 4 : 0);
      qi += 1;
    } else {
      streak = 0;
    }
  }
  return qi === q.length ? score : -1;
};

function PaletteDialog({ onClose, toggleTheme }) {
  const [query, setQuery] = useState('');
  const [active, setActive] = useState(0);
  const [exiting, setExiting] = useState(false);
  const inputRef = useRef(null);

  const actions = useMemo(() => buildActions(toggleTheme), [toggleTheme]);
  const results = useMemo(() => {
    const q = query.trim();
    if (!q) return actions;
    return actions
      .map((action) => ({ action, score: fuzzyScore(q, action.label) }))
      .filter(({ score }) => score >= 0)
      .sort((a, b) => b.score - a.score)
      .map(({ action }) => action);
  }, [actions, query]);

  // Focus the input, lock body scroll, and restore both on close
  useEffect(() => {
    const previouslyFocused = document.activeElement;
    inputRef.current?.focus();
    const root = document.documentElement;
    const previousOverflow = root.style.overflow;
    root.style.overflow = 'hidden';
    return () => {
      root.style.overflow = previousOverflow;
      if (previouslyFocused instanceof HTMLElement) {
        previouslyFocused.focus({ preventScroll: true });
      }
    };
  }, []);

  const requestClose = () => {
    if (exiting) return;
    setExiting(true);
    window.setTimeout(onClose, prefersReducedMotion() ? 0 : 160);
  };

  const runAction = (action) => {
    requestClose();
    action.run();
  };

  const moveActive = (delta) => {
    const next = Math.min(Math.max(active + delta, 0), results.length - 1);
    setActive(next);
    document.getElementById(`palette-option-${next}`)?.scrollIntoView({ block: 'nearest' });
  };

  const onKeyDown = (e) => {
    if (e.key === 'Escape') {
      e.preventDefault();
      requestClose();
    } else if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      requestClose();
    } else if (e.key === 'Tab') {
      // The input is the only tabbable element; keep focus inside the dialog
      e.preventDefault();
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      moveActive(1);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      moveActive(-1);
    } else if (e.key === 'Enter' && results[active]) {
      e.preventDefault();
      runAction(results[active]);
    }
  };

  return (
    <div
      className={`palette-overlay${exiting ? ' is-exiting' : ''}`}
      onMouseDown={requestClose}
    >
      <div
        className="palette"
        role="dialog"
        aria-modal="true"
        aria-label="Command palette"
        onMouseDown={(e) => e.stopPropagation()}
        onKeyDown={onKeyDown}
      >
        <input
          ref={inputRef}
          className="palette__input"
          type="text"
          placeholder="Type a command or search…"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setActive(0);
          }}
          role="combobox"
          aria-expanded="true"
          aria-controls="palette-list"
          aria-activedescendant={results[active] ? `palette-option-${active}` : undefined}
        />
        <ul className="palette__list" id="palette-list" role="listbox">
          {results.length === 0 && <li className="palette__empty">No matching commands</li>}
          {results.map((action, i) => (
            <li
              key={action.label}
              id={`palette-option-${i}`}
              role="option"
              aria-selected={i === active}
              className="palette__item"
              onMouseEnter={() => setActive(i)}
              onClick={() => runAction(action)}
            >
              <span>{action.label}</span>
              <span className="palette__hint">{action.hint}</span>
            </li>
          ))}
        </ul>
        <p className="palette__foot" aria-hidden="true">
          <span>↑↓ navigate</span>
          <span>↵ select</span>
          <span>esc close</span>
        </p>
      </div>
    </div>
  );
}

function CommandPalette({ open, onOpen, onClose, toggleTheme }) {
  // Global ⌘K / Ctrl+K to open; the dialog handles the closing direction
  useEffect(() => {
    const onKey = (e) => {
      if (!open && (e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        onOpen();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onOpen]);

  if (!open) return null;
  return <PaletteDialog onClose={onClose} toggleTheme={toggleTheme} />;
}

export default CommandPalette;
