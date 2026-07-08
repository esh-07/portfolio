import { useEffect, useRef, useState } from 'react';
import { PROJECTS } from '../data/content.js';

const prefersReducedMotion = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function Chevron({ flip = false }) {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      style={flip ? { transform: 'scaleX(-1)' } : undefined}
    >
      <path d="m9 5 7 7-7 7" />
    </svg>
  );
}

/* Native horizontal scroll — trackpad, touch, and keyboard all work as the
   platform intends; no wheel hijacking. Progress bar and buttons are driven
   off scrollLeft in a rAF, touching only transform. */
function Projects() {
  const scrollerRef = useRef(null);
  const fillRef = useRef(null);
  const [canScroll, setCanScroll] = useState({ prev: false, next: false });

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return undefined;

    let raf = 0;
    const update = () => {
      raf = 0;
      const max = scroller.scrollWidth - scroller.clientWidth;
      const progress = max > 0 ? scroller.scrollLeft / max : 0;
      if (fillRef.current) fillRef.current.style.transform = `scaleX(${progress})`;
      setCanScroll((state) => {
        const next = { prev: scroller.scrollLeft > 4, next: scroller.scrollLeft < max - 4 };
        return state.prev === next.prev && state.next === next.next ? state : next;
      });
    };
    const schedule = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    schedule();
    scroller.addEventListener('scroll', schedule, { passive: true });
    const resizeObserver = new ResizeObserver(schedule);
    resizeObserver.observe(scroller);
    return () => {
      scroller.removeEventListener('scroll', schedule);
      resizeObserver.disconnect();
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  const scrollByCard = (direction) => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    const card = scroller.querySelector('.card');
    const step = card ? card.offsetWidth + 16 : scroller.clientWidth * 0.8;
    scroller.scrollBy({
      left: direction * step,
      behavior: prefersReducedMotion() ? 'auto' : 'smooth',
    });
  };

  return (
    <section className="section container" id="projects" aria-labelledby="projects-title">
      <div className="section__head" data-reveal>
        <span className="section__num" aria-hidden="true">
          02
        </span>
        <h2 className="section__title" id="projects-title">
          Selected Projects
        </h2>
        <div className="rail__buttons">
          <button
            type="button"
            className="rail__btn"
            onClick={() => scrollByCard(-1)}
            disabled={!canScroll.prev}
            aria-label="Scroll to previous projects"
          >
            <Chevron flip />
          </button>
          <button
            type="button"
            className="rail__btn"
            onClick={() => scrollByCard(1)}
            disabled={!canScroll.next}
            aria-label="Scroll to next projects"
          >
            <Chevron />
          </button>
        </div>
      </div>
      <div className="rail" data-reveal>
        <div
          className="rail__scroller"
          ref={scrollerRef}
          tabIndex={0}
          role="group"
          aria-label="Projects, scroll horizontally or use arrow keys"
        >
          <ul className="rail__track">
            {PROJECTS.map((project, i) => (
              <li className="card" key={project.title}>
                <p className="card__top">
                  <span className="card__index" aria-hidden="true">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="card__kind">{project.kind}</span>
                </p>
                <h3 className="card__title">{project.title}</h3>
                <p className="card__description">{project.description}</p>
                <p className="card__tags">{project.tags.join(' · ')}</p>
                {project.link && (
                  <a
                    className="card__link u-link"
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {project.linkLabel}
                    <span aria-hidden="true"> ↗</span>
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className="rail__progress" aria-hidden="true">
          <div className="rail__progress-fill" ref={fillRef} />
        </div>
      </div>
    </section>
  );
}

export default Projects;
