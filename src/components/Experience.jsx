import { EXPERIENCE } from '../data/content.js';
import CompanyLogo from './CompanyLogo.jsx';

function Experience() {
  return (
    <section className="section container" id="experience" aria-labelledby="experience-title">
      <div className="section__head" data-reveal>
        <span className="section__num" aria-hidden="true">
          01
        </span>
        <h2 className="section__title" id="experience-title">
          Experience
        </h2>
      </div>
      <ol className="xp">
        {EXPERIENCE.map((job, i) => (
          <li className="xp__item" key={job.company} data-reveal style={{ '--rd': `${i * 60}ms` }}>
            <p className="xp__period">
              {job.period}
              {job.status && <span className="xp__status">{job.status}</span>}
            </p>
            <div className="xp__main">
              <h3 className="xp__company">
                <CompanyLogo name={job.company} size={30} />
                <span>{job.company}</span>
              </h3>
              <p className="xp__role">{job.role}</p>
              <p className="xp__summary">{job.summary}</p>
              <p className="xp__tags">{job.tags.join(' / ')}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

export default Experience;
