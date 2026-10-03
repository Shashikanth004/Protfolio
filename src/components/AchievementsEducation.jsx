import { achievements, education } from '../data/content.js';
import Reveal from './Reveal.jsx';

export function Achievements() {
  return (
    <section id="achievements">
      <div className="wrap">
        <Reveal className="section-head">
          <span className="eyebrow">05 · Achievements</span>
          <h2>Proof under pressure.</h2>
        </Reveal>
        <div className="achievement-grid">
          {achievements.map((a) => (
            <Reveal key={a.title} className="achievement-card">
              <span className="badge">Hackathon</span>
              <h3>{a.title}</h3>
              <p>{a.detail}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Education() {
  return (
    <section id="education">
      <div className="wrap">
        <Reveal className="section-head">
          <span className="eyebrow">06 · Education</span>
          <h2>Academic foundation.</h2>
        </Reveal>
        <div className="edu-list">
          {education.map((e) => (
            <Reveal key={e.institution} className="edu-item">
              <div className="edu-top">
                <h3>{e.institution}</h3>
                <span className="edu-duration">{e.duration}</span>
              </div>
              <div className="edu-degree">{e.degree}</div>
              {e.score && <div className="edu-score">Score: {e.score}</div>}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
