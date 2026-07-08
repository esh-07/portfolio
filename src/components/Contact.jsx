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
    <section id="contact" aria-labelledby="contact-title">
      <div className="secbar">
        <h2 className="secbar__title" id="contact-title">
          04 // CONTACT
        </h2>
      </div>
      <div className="contact">
        <a className="contact__email b-link" href={`mailto:${LINKS.email}`}>
          {LINKS.email}
        </a>
        <div className="contact__row">
          <button type="button" className="b-btn" onClick={copyEmail}>
            [{copied ? 'COPIED' : 'COPY_EMAIL'}]
          </button>
          <a className="b-link" href={LINKS.github} target="_blank" rel="noreferrer">
            [GITHUB ↗]
          </a>
          <a className="b-link" href={LINKS.linkedin} target="_blank" rel="noreferrer">
            [LINKEDIN ↗]
          </a>
          <a className="b-link" href={RESUME_URL} target="_blank" rel="noreferrer">
            [RESUME.PDF ↗]
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
