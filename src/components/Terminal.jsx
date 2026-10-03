import { useEffect, useState } from 'react';

const SCRIPT = [
  { prompt: '~/shashikanth', cmd: 'whoami' },
  { output: 'ShashiKanth B — B.Tech CSE student, Karnataka' },
  { prompt: '~/shashikanth', cmd: 'cat focus.txt' },
  { output: 'Python · React · Machine Learning · Data Structures' },
  { prompt: '~/shashikanth', cmd: 'ls projects/' },
  { output: 'ai-tutor/  power-bi-dashboard/  elder-tech/' },
  { prompt: '~/shashikanth', cmd: './hackathon --run' },
  { output: '3rd place — GeeksforGeeks Hackathon 🏆' },
];

export default function Terminal() {
  const [lines, setLines] = useState([]);
  const [typed, setTyped] = useState('');
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (step >= SCRIPT.length) return;
    const item = SCRIPT[step];

    if (item.output) {
      const t = setTimeout(() => {
        setLines((l) => [...l, { type: 'output', text: item.output }]);
        setStep((s) => s + 1);
      }, 380);
      return () => clearTimeout(t);
    }

    // typing effect for commands
    if (typed.length < item.cmd.length) {
      const t = setTimeout(() => setTyped(item.cmd.slice(0, typed.length + 1)), 38);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => {
      setLines((l) => [...l, { type: 'cmd', prompt: item.prompt, text: item.cmd }]);
      setTyped('');
      setStep((s) => s + 1);
    }, 260);
    return () => clearTimeout(t);
  }, [step, typed]);

  const currentCmd = step < SCRIPT.length && !SCRIPT[step].output ? SCRIPT[step] : null;

  return (
    <div className="terminal" role="img" aria-label="Terminal animation summarizing ShashiKanth's profile, focus areas, projects and hackathon result">
      <div className="terminal-bar">
        <span /><span /><span />
        <em>shashikanth — zsh</em>
      </div>
      <div className="terminal-body">
        {lines.map((l, i) =>
          l.type === 'cmd' ? (
            <div className="terminal-line" key={i}>
              <span className="terminal-prompt">{l.prompt} $</span> {l.text}
            </div>
          ) : (
            <div className="terminal-line" key={i} style={{ color: '#9fa0ae' }}>{l.text}</div>
          )
        )}
        {currentCmd && (
          <div className="terminal-line">
            <span className="terminal-prompt">{currentCmd.prompt} $</span> {typed}
            <span className="terminal-cursor" />
          </div>
        )}
        {step >= SCRIPT.length && (
          <div className="terminal-line">
            <span className="terminal-prompt">~/shashikanth $</span>
            <span className="terminal-cursor" />
          </div>
        )}
      </div>
    </div>
  );
}
