import { COMPANIES, FACTS, HERO, LINKS } from '../data/content.js';
import CompanyLogo from './CompanyLogo.jsx';

const formatFact = (fact) => {
  if (fact.plain) return `${fact.label} ${fact.value}`;
  const value = fact.decimals ? fact.value.toFixed(fact.decimals) : String(fact.value);
  return `${value}${fact.suffix || ''} ${fact.label}`;
};

function Hero() {
  return (
    <>
      <div className="hero">
        <section className="hero__main" aria-label="Introduction">
          <h1 className="hero__name">
            ESHAAN
            <br />
            CHATURVEDI
          </h1>
          <p className="hero__status">
            STATUS: <mark>{HERO.status.toUpperCase()}</mark>
          </p>
          <p className="hero__blurb">
            {HERO.tagline} CS + Data Science @ UW-Madison, 3.9/4.0. Based in {HERO.location}.
          </p>
        </section>
        <aside className="hero__facts" aria-label="Quick facts">
          <h2 className="hero__facts-title">QUICK_FACTS</h2>
          <ul className="raw">
            <li>{HERO.location}</li>
            {FACTS.map((fact) => (
              <li key={fact.label}>{formatFact(fact)}</li>
            ))}
            <li>
              <a className="b-link" href={`mailto:${LINKS.email}`}>
                {LINKS.email}
              </a>
            </li>
          </ul>
        </aside>
      </div>
      <div className="employers" aria-label="Companies">
        <span className="employers__label">EMPLOYERS:</span>
        <ul className="employers__list">
          {COMPANIES.map((company) => (
            <li key={company}>
              <CompanyLogo name={company} size={20} />
              <span>{company.toUpperCase()}</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Hero;
