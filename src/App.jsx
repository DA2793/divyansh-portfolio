import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
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
import IEnergizerDetail from './components/Experience/IEnergizerDetail';
import AmazonDetail from './components/Experience/AmazonDetail';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0b1b2b]">
        <div className="text-center animate-pulse">
          <p className="text-3xl font-bold text-white tracking-wider">DA</p>
          <div className="w-12 h-px bg-yellow-400 mx-auto mt-3"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Navbar />

      <Routes>
        <Route path="/" element={
          <>
            <main>
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

            <footer className="bg-[#0f172a] border-t border-white/10">
              <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="text-gray-400 text-sm">
                  © {new Date().getFullYear()} Divyansh Ahuja. All rights reserved.
                </p>
                <div className="flex items-center gap-5">
                  <a href="https://linkedin.com/in/divyanshahuja" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition text-lg">
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a href="https://github.com/DA2793" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition text-lg">
                    <i className="fab fa-github"></i>
                  </a>
                  <a href="mailto:da.2793@yahoo.com" className="text-gray-400 hover:text-white transition text-lg">
                    <i className="fas fa-envelope"></i>
                  </a>
                </div>
              </div>
            </footer>
          </>
        } />

        <Route path="/ienergizer" element={<IEnergizerDetail />} />
        <Route path="/amazon" element={<AmazonDetail />} />
      </Routes>
    </div>
  );
}

export default App;