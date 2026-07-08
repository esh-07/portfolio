import { useRef } from 'react';
import { EXPERIENCE } from '../data/content.js';
import CompanyLogo from './CompanyLogo.jsx';

function Experience() {
  const listRef = useRef(null);

  const setAll = (open) => {
    listRef.current?.querySelectorAll('details').forEach((d) => {
      d.open = open;
    });
  };

  return (
    <section id="experience" aria-labelledby="experience-title">
      <div className="secbar">
        <h2 className="secbar__title" id="experience-title">
          01 // EXPERIENCE
        </h2>
        <div className="secbar__tools">
          <button type="button" className="b-btn b-btn--inv" onClick={() => setAll(true)}>
            [EXPAND_ALL]
          </button>
          <button type="button" className="b-btn b-btn--inv" onClick={() => setAll(false)}>
            [COLLAPSE_ALL]
          </button>
        </div>
      </div>
      <div ref={listRef}>
        {EXPERIENCE.map((job, i) => (
          <details className="disc" key={job.company} open={i === 0}>
            <summary className="disc__row">
              <span className="disc__caret" aria-hidden="true" />
              <span className="disc__no">{String(i + 1).padStart(2, '0')}</span>
              <span className="disc__logo">
                <CompanyLogo name={job.company} size={22} />
              </span>
              <span className="disc__name">
                {job.company.toUpperCase()}
                {job.status && <mark className="disc__mark">{job.status.toUpperCase()}</mark>}
              </span>
              <span className="disc__meta">{job.role}</span>
              <span className="disc__when">{job.period}</span>
            </summary>
            <div className="disc__body">
              <ul className="raw">
                {job.details.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
              <p className="disc__tags">STACK: {job.tags.join(' / ').toUpperCase()}</p>
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}

export default Experience;
