import { useEffect, useRef, useState } from 'react';
import { EDUCATION, FACTS, SKILLS } from '../data/content.js';

const prefersReducedMotion = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Odometer-style count-up, fired once when the stat scrolls into view.
function CountUp({ value, decimals = 0 }) {
  const ref = useRef(null);
  const [display, setDisplay] = useState(() =>
    prefersReducedMotion() ? value : 0
  );

  useEffect(() => {
    if (prefersReducedMotion()) return undefined;

    let raf = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const start = performance.now();
        const duration = 1300;
        const step = (now) => {
          const t = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - t, 4);
          setDisplay(Math.round(eased * value * 10 ** decimals) / 10 ** decimals);
          if (t < 1) raf = requestAnimationFrame(step);
        };
        raf = requestAnimationFrame(step);
      },
      { threshold: 0.5 }
    );

    observer.observe(ref.current);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [value, decimals]);

  return <span ref={ref}>{display.toFixed(decimals)}</span>;
}

function Toolkit() {
  return (
    <section className="section container" id="toolkit" aria-labelledby="toolkit-title">
      <div className="section__head" data-reveal>
        <span className="section__num" aria-hidden="true">
          03
        </span>
        <h2 className="section__title" id="toolkit-title">
          Toolkit
        </h2>
      </div>

      <div className="stats" data-reveal>
        {FACTS.map((fact) => (
          <div className="stats__item" key={fact.label}>
            <span className="stats__value">
              {fact.plain ? fact.value : <CountUp value={fact.value} decimals={fact.decimals || 0} />}
              {!fact.plain && fact.suffix && <span className="stats__suffix">{fact.suffix}</span>}
            </span>
            <span className="stats__label">{fact.label}</span>
          </div>
        ))}
      </div>

      <dl className="tools">
        {SKILLS.map((group, i) => (
          <div
            className="tools__row"
            key={group.label}
            data-reveal
            style={{ '--rd': `${i * 60}ms` }}
          >
            <dt className="tools__label">{group.label}</dt>
            <dd className="tools__items">{group.items.join(' / ')}</dd>
          </div>
        ))}
        <div className="tools__row" data-reveal>
          <dt className="tools__label">Education</dt>
          <dd className="tools__items">
            <p className="tools__edu-school">{EDUCATION.school}</p>
            <p className="tools__edu-degree">
              {EDUCATION.degree} · {EDUCATION.period}
            </p>
            <p className="tools__edu-detail">{EDUCATION.detail}</p>
          </dd>
        </div>
      </dl>
    </section>
  );
}

export default Toolkit;
