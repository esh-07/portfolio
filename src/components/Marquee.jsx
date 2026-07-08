import { COMPANIES } from '../data/content.js';
import CompanyLogo from './CompanyLogo.jsx';

function Row() {
  return (
    <ul className="marquee__row">
      {COMPANIES.map((company) => (
        <li key={company} className="marquee__item">
          <CompanyLogo name={company} size={24} />
          <span>{company}</span>
        </li>
      ))}
    </ul>
  );
}

function Marquee() {
  return (
    <div className="marquee">
      <p className="sr-only">
        Meta, and previously Cohere, PlayStation, RIPPLR and Infosys.
      </p>
      <div className="marquee__track" aria-hidden="true">
        <Row />
        <Row />
        <Row />
        <Row />
      </div>
    </div>
  );
}

export default Marquee;
