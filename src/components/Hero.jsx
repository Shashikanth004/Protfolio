import { Link } from 'react-router-dom';
import { profile } from '../data/content.js';
import Terminal from './Terminal.jsx';
import Reveal from './Reveal.jsx';

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="wrap hero-grid">
        <div>
          <Reveal>
            <span className="eyebrow">{profile.currentRole}</span>
          </Reveal>
          <Reveal delay={60} as="h1">
            Building with AI, <span className="accent">Python</span> and React —
            one project at a time.
          </Reveal>
          <Reveal delay={120}>
            <p className="hero-tagline">// {profile.tagline}</p>
          </Reveal>
          <Reveal delay={160}>
            <p className="hero-intro">{profile.intro}</p>
          </Reveal>
          <Reveal delay={200}>
            <div className="hero-actions">
              <Link className="btn-primary" to="/projects">View projects →</Link>
              <a className="btn-secondary" href={`mailto:${profile.email}`}>Email me</a>
            </div>
          </Reveal>
          <Reveal delay={240}>
            <div className="hero-stats">
              <div className="hero-stat"><b>3</b><span>Independent projects shipped</span></div>
              <div className="hero-stat"><b>7</b><span>Certifications in progress / complete</span></div>
              <div className="hero-stat"><b>3rd</b><span>GeeksforGeeks Hackathon</span></div>
            </div>
          </Reveal>
        </div>
        <Reveal delay={120} className="terminal-wrap">
          <Terminal />
        </Reveal>
      </div>
    </section>
  );
}
