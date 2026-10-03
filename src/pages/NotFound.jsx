import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="page">
      <section>
        <div className="wrap" style={{ textAlign: 'center', padding: '60px 0' }}>
          <span className="eyebrow">404</span>
          <h2 style={{ fontSize: 32, marginBottom: 16 }}>That page doesn't exist.</h2>
          <p style={{ color: 'var(--muted)', marginBottom: 28 }}>
            Let's get you back to something real.
          </p>
          <Link className="btn-primary" to="/">Back to home →</Link>
        </div>
      </section>
    </div>
  );
}
