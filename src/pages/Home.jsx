import { Link } from 'react-router-dom';
import Hero from '../components/Hero.jsx';
import Reveal from '../components/Reveal.jsx';

const dest = [
  ['About', '/about', 'Who I am, my background and what I\'m building toward.'],
  ['Skills', '/skills', 'Languages, frontend tools and AI fundamentals I work with.'],
  ['Projects', '/projects', 'AI-Tutor, an AI-powered Power BI dashboard, and Elder-Tech.'],
  ['Certifications', '/certifications', 'Generative AI, data science and networking credentials.'],
  ['Achievements', '/achievements', '3rd place at the GeeksforGeeks Hackathon.'],
  ['Education', '/education', 'B.Tech CSE at Svyasa, plus schooling record.'],
  ['Contact', '/contact', 'Reach out by email, phone, or check my live portfolio.'],
];

export default function Home() {
  return (
    <>
      <Hero />
      <section id="directory">
        <div className="wrap">
          <Reveal className="section-head">
            <span className="eyebrow">Explore</span>
            <h2>Each part of my story has its own page.</h2>
          </Reveal>
          <div className="dir-grid">
            {dest.map(([label, href, desc], i) => (
              <Reveal key={href} delay={i * 40} as={Link} to={href} className="dir-card">
                <span className="dir-label">{label}</span>
                <p>{desc}</p>
                <span className="dir-arrow">→</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
