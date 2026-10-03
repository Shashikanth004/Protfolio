import { profile } from '../data/content.js';

export default function Footer() {
  return (
    <div className="footer">
      © {new Date().getFullYear()} {profile.name} — built with React &amp; Vite
    </div>
  );
}
