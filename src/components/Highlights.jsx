import { highlights } from '../data/content.js';
import Reveal from './Reveal.jsx';

export default function Highlights() {
  return (
    <section id="highlights">
      <div className="wrap">
        <Reveal className="section-head">
          <span className="eyebrow">07 · Highlights</span>
          <h2>Why this resume stands out.</h2>
        </Reveal>
        <div className="highlight-grid">
          {highlights.map((h, i) => (
            <Reveal key={i} delay={(i % 3) * 40} className="highlight-item">
              <span className="n">{i + 1}</span>
              <p>{h}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
