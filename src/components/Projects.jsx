import { useRef } from 'react';
import { PROJECTS } from '../data/content.js';

function Projects() {
  const listRef = useRef(null);

  const setAll = (open) => {
    listRef.current?.querySelectorAll('details').forEach((d) => {
      d.open = open;
    });
  };

  return (
    <section id="projects" aria-labelledby="projects-title">
      <div className="secbar">
        <h2 className="secbar__title" id="projects-title">
          02 // PROJECTS
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
        {PROJECTS.map((project, i) => (
          <details className="disc" key={project.title}>
            <summary className="disc__row disc__row--project">
              <span className="disc__caret" aria-hidden="true" />
              <span className="disc__no">{String(i + 1).padStart(2, '0')}</span>
              <span className="disc__name">{project.title.toUpperCase()}</span>
              <span className="disc__meta">{project.kind}</span>
            </summary>
            <div className="disc__body">
              <ul className="raw">
                {project.details.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
              <p className="disc__tags">STACK: {project.tags.join(' / ').toUpperCase()}</p>
              {project.link && (
                <p className="disc__link">
                  <a className="b-link" href={project.link} target="_blank" rel="noreferrer">
                    [{project.linkLabel.toUpperCase()} ↗]
                  </a>
                </p>
              )}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}

export default Projects;
