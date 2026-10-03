import { about, profile } from '../data/content.js';
import Reveal from './Reveal.jsx';

export default function About() {
  return (
    <section id="about">
      <div className="wrap">
        <Reveal className="section-head">
          <span className="eyebrow">01 · About</span>
          <h2>A student who prefers building to just studying.</h2>
        </Reveal>
        <div className="about-body">
          <Reveal className="about-copy">
            {about.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </Reveal>
          <Reveal delay={100} className="about-facts">
            <div className="fact">
              <div className="k">Studying</div>
              <div className="v">B.Tech Computer Science &amp; Engineering, Svyasa Deemed to be University</div>
            </div>
            <div className="fact">
              <div className="k">Timeline</div>
              <div className="v">2024 – 2028</div>
            </div>
            <div className="fact">
              <div className="k">Based in</div>
              <div className="v">{profile.location}</div>
            </div>
            <div className="fact">
              <div className="k">Focus areas</div>
              <div className="v">Applied AI, frontend development, data &amp; analytics</div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
