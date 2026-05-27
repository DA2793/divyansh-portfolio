import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Skills from './components/Skills/Skills';
import Education from './components/Education/Education';
import Projects from './components/Projects/Projects';
import Achievements from './components/Achievements/Achievements';
import Certifications from './components/Certifications/Certifications';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import NotFound from './components/NotFound/NotFound';
import IEnergizerDetail from './components/Experience/IEnergizerDetail';
import AmazonDetail from './components/Experience/AmazonDetail';

// Scroll to hash on route change (fixes Back to Home → #section)
function ScrollToHash() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      // Small delay to let the DOM render
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <ScrollToHash />
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[100] focus:bg-yellow-400 focus:text-[#0f172a] focus:px-4 focus:py-2 focus:rounded-lg focus:text-sm focus:font-semibold"
      >
        Skip to main content
      </a>
      <Navbar />

      <Routes>
        <Route path="/" element={
          <>
            <main id="main-content">
              <Hero />
              <About />
              <Experience />
              <Skills />
              <Education />
              <Projects />
              <Achievements />
              <div className="bg-[#0f172a] py-16">
                <div className="max-w-5xl mx-auto px-6 text-center">
                  <p className="text-sm text-gray-400 uppercase tracking-[0.18em] mb-3">
                    Career Impact
                  </p>
                  <p className="text-2xl md:text-3xl font-bold text-white">
                    €15M+ in cost savings driven through automation & network optimization
                  </p>
                </div>
              </div>
              <Certifications />
              <Contact />
            </main>
            <Footer />
          </>
        } />

        <Route path="/ienergizer" element={<IEnergizerDetail />} />
        <Route path="/amazon" element={<AmazonDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;