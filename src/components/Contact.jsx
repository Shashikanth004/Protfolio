import { profile, missingInfo } from '../data/content.js';
import Reveal from './Reveal.jsx';

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="wrap contact-grid">
        <div>
          <Reveal>
            <span className="eyebrow">09 · Contact</span>
            <h2>Let's talk about an opportunity.</h2>
            <p className="lead">
              Open to internships and entry-level roles in software engineering,
              frontend development, and applied AI/ML.
            </p>
          </Reveal>
          <Reveal delay={80}>
            <ul className="contact-list">
              <li><span className="label">Email</span><a href={`mailto:${profile.email}`}>{profile.email}</a></li>
              <li><span className="label">Phone</span><a href={`tel:${profile.phone.replace(/\s/g, '')}`}>{profile.phone}</a></li>
              <li><span className="label">Location</span><span>{profile.location}</span></li>
              <li><span className="label">Portfolio</span><a href={profile.portfolio} target="_blank" rel="noopener noreferrer">{profile.portfolio.replace('https://', '')}</a></li>
            </ul>
          </Reveal>
        </div>
        <Reveal delay={120} className="missing-box">
          <h3>Additional information needed</h3>
          <ul>
            {missingInfo.map((m) => <li key={m}>{m}</li>)}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
