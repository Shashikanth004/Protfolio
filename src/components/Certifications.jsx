import { certifications } from '../data/content.js';
import Reveal from './Reveal.jsx';

export default function Certifications() {
  return (
    <section id="certifications">
      <div className="wrap">
        <Reveal className="section-head">
          <span className="eyebrow">04 · Certifications</span>
          <h2>Structured, continuous learning.</h2>
          <p>Certifications completed or in progress, from generative AI to networking to data science.</p>
        </Reveal>
        <div className="cert-grid">
          {certifications.map((c, i) => (
            <Reveal key={c.name} delay={(i % 3) * 50} className="cert-card">
              <h3>{c.name}</h3>
              <div className="cert-issuer">{c.issuer} · {c.location}</div>
              <div className="cert-meta">
                <span>{c.date}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
