import { skills } from '../data/content.js';
import Reveal from './Reveal.jsx';

export default function Skills() {
  return (
    <section id="skills">
      <div className="wrap">
        <Reveal className="section-head">
          <span className="eyebrow">02 · Skills</span>
          <h2>Where I'm strong, and what I'm building next.</h2>
          <p>Grouped honestly from the resume — only categories with real, evidenced skills are shown.</p>
        </Reveal>
        <div className="skills-grid">
          {Object.entries(skills).map(([category, items], i) => (
            <Reveal key={category} delay={i * 40} className="skill-card">
              <h3>{category}</h3>
              <div className="chip-row">
                {items.map((s) => <span className="chip" key={s}>{s}</span>)}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
