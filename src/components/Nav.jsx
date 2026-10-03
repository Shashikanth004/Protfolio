import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { profile } from '../data/content.js';

const links = [
  ['About', '/about'],
  ['Skills', '/skills'],
  ['Projects', '/projects'],
  ['Certifications', '/certifications'],
  ['Achievements', '/achievements'],
  ['Education', '/education'],
  ['Highlights', '/highlights'],
  ['FAQ', '/faq'],
  ['Contact', '/contact'],
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="nav">
      <div className="wrap">
        <Link className="nav-brand" to="/" onClick={() => setOpen(false)}>
          <span className="dot" aria-hidden="true" />
          shashikanth<span style={{ opacity: 0.5 }}>.dev</span>
        </Link>

        <ul className={`nav-links ${open ? 'open' : ''}`}>
          {links.map(([label, href]) => (
            <li key={href}>
              <NavLink to={href} onClick={() => setOpen(false)} className={({ isActive }) => (isActive ? 'active' : '')}>
                {label}
              </NavLink>
            </li>
          ))}
          <li className="nav-links-mobile-cta">
            <a href={`mailto:${profile.email}`}>Get in touch</a>
          </li>
        </ul>

        <a className="nav-cta" href={`mailto:${profile.email}`}>Get in touch</a>

        <button
          className="nav-toggle"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span /><span /><span />
        </button>
      </div>
    </header>
  );
}
