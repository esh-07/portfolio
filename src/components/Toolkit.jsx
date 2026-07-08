import { EDUCATION, SKILLS } from '../data/content.js';

function Toolkit() {
  return (
    <section id="toolkit" aria-labelledby="toolkit-title">
      <div className="secbar">
        <h2 className="secbar__title" id="toolkit-title">
          03 // TOOLKIT
        </h2>
      </div>
      <table className="btable">
        <tbody>
          {SKILLS.map((group) => (
            <tr key={group.label}>
              <th scope="row">{group.label.toUpperCase()}</th>
              <td>{group.items.join(' · ')}</td>
            </tr>
          ))}
          <tr>
            <th scope="row">EDUCATION</th>
            <td>
              <b>{EDUCATION.school}</b>
              <br />
              {EDUCATION.degree} · {EDUCATION.period}
              <br />
              <span className="btable__muted">{EDUCATION.detail}</span>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}

export default Toolkit;
