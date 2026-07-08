import { useEffect, useState } from 'react';
import { LINKS, RESUME_URL } from '../data/content.js';

function Contact() {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return undefined;
    const timer = setTimeout(() => setCopied(false), 2000);
    return () => clearTimeout(timer);
  }, [copied]);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(LINKS.email);
      setCopied(true);
    } catch {
      window.location.href = `mailto:${LINKS.email}`;
    }
  };

  return (
    <section className="section container" id="contact" aria-labelledby="contact-title">
      <div className="section__head" data-reveal>
        <span className="section__num" aria-hidden="true">
          04
        </span>
        <h2 className="section__title" id="contact-title">
          Contact
        </h2>
      </div>
      <div className="contact" data-reveal>
        <a className="contact__email u-link" href={`mailto:${LINKS.email}`}>
          {LINKS.email.split('@')[0]}
          <wbr />@{LINKS.email.split('@')[1]}
        </a>
        <ul className="contact__links">
          <li>
            <button type="button" className="contact__copy u-link" onClick={copyEmail}>
              {copied ? 'Copied' : 'Copy email'}
            </button>
          </li>
          <li>
            <a className="u-link" href={LINKS.github} target="_blank" rel="noreferrer">
              GitHub<span aria-hidden="true"> ↗</span>
            </a>
          </li>
          <li>
            <a className="u-link" href={LINKS.linkedin} target="_blank" rel="noreferrer">
              LinkedIn<span aria-hidden="true"> ↗</span>
            </a>
          </li>
          <li>
            <a className="u-link" href={RESUME_URL} target="_blank" rel="noreferrer">
              Resume<span aria-hidden="true"> ↗</span>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Contact;
