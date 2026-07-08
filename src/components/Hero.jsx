import { HERO, LINKS, RESUME_URL } from '../data/content.js';

function Hero() {
  return (
    <section className="hero container" id="top">
      <p className="hero__meta" data-load style={{ '--ld': '0ms' }}>
        <span className="hero__meta-item">{HERO.location}</span>
        <span className="hero__meta-item hero__meta-item--status">{HERO.status}</span>
      </p>
      <h1 className="hero__name">
        <span className="hero__line">
          <span className="hero__line-inner" style={{ '--ld': '60ms' }}>
            Eshaan
          </span>
        </span>
        <span className="hero__line">
          <span className="hero__line-inner" style={{ '--ld': '150ms' }}>
            Chaturvedi
          </span>
        </span>
      </h1>
      <p className="hero__lede" data-load style={{ '--ld': '300ms' }}>
        {HERO.tagline}
      </p>
      <div className="hero__cta" data-load style={{ '--ld': '380ms' }}>
        <a className="btn btn--solid" href={RESUME_URL} target="_blank" rel="noreferrer">
          Resume<span aria-hidden="true"> ↗</span>
        </a>
        <a className="btn" href={LINKS.github} target="_blank" rel="noreferrer">
          GitHub<span aria-hidden="true"> ↗</span>
        </a>
        <a className="btn" href={LINKS.linkedin} target="_blank" rel="noreferrer">
          LinkedIn<span aria-hidden="true"> ↗</span>
        </a>
        <a className="btn" href={`mailto:${LINKS.email}`}>
          Email
        </a>
      </div>
    </section>
  );
}

export default Hero;
