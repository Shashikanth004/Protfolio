import { useState } from 'react';
import { faqs } from '../data/content.js';
import Reveal from './Reveal.jsx';

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq">
      <div className="wrap">
        <Reveal className="section-head">
          <span className="eyebrow">08 · Recruiter Q&amp;A</span>
          <h2>Questions I get asked — answered upfront.</h2>
        </Reveal>
        <div>
          {faqs.map((f, i) => (
            <div className={`faq-item ${open === i ? 'open' : ''}`} key={f.q}>
              <button
                className="faq-q"
                onClick={() => setOpen(open === i ? -1 : i)}
                aria-expanded={open === i}
              >
                {f.q}
                <span className="icon">+</span>
              </button>
              <div className="faq-a"><p>{f.a}</p></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
