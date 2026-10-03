import { HashRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav.jsx';
import Footer from './components/Footer.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';

import Home from './pages/Home.jsx';
import AboutPage from './pages/About.jsx';
import SkillsPage from './pages/Skills.jsx';
import ProjectsPage from './pages/Projects.jsx';
import CertificationsPage from './pages/Certifications.jsx';
import AchievementsPage from './pages/Achievements.jsx';
import EducationPage from './pages/Education.jsx';
import HighlightsPage from './pages/Highlights.jsx';
import FAQPage from './pages/FAQ.jsx';
import ContactPage from './pages/Contact.jsx';
import NotFound from './pages/NotFound.jsx';

export default function App() {
  return (
    <HashRouter>
      <Nav />
      <ScrollToTop />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/certifications" element={<CertificationsPage />} />
          <Route path="/achievements" element={<AchievementsPage />} />
          <Route path="/education" element={<EducationPage />} />
          <Route path="/highlights" element={<HighlightsPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </HashRouter>
  );
}
