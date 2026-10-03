import { projects } from '../data/content.js';
import Reveal from './Reveal.jsx';

export default function Projects() {
  return (
    <section id="projects">
      <div className="wrap">
        <Reveal className="section-head">
          <span className="eyebrow">03 · Projects</span>
          <h2>Three ideas, built and shipped.</h2>
          <p>Self-initiated builds spanning AI, data visualization and accessibility.</p>
        </Reveal>
        <div className="projects-list">
          {projects.map((p, i) => (
            <Reveal key={p.name} className="project-row" delay={i * 60}>
              <div className="project-index">{String(i + 1).padStart(2, '0')}</div>
              <div>
                <div className="project-name">{p.name}</div>
                <div className="project-summary">{p.summary}</div>
                <p className="project-desc">{p.description}</p>
                <div className="project-meta">
                  {p.techStack.map((t) => <span className="tech-chip" key={t}>{t}</span>)}
                </div>
              </div>
              <div className="project-actions">
                <span className="project-date">{p.duration}</span>
                <a className="project-link" href={p.link} target="_blank" rel="noopener noreferrer">
                  Live demo →
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
