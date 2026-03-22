import { useState, useEffect } from 'react';
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
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Navbar />

      <main className="pt-[120px] max-w-6xl mx-auto px-4">

        {/* Hero */}
        <section className="py-16">
          <Hero />
        </section>

        {/* About */}
        <section className="py-16 bg-white rounded-2xl shadow-sm">
          <About />
        </section>

        {/* Experience */}
        <section className="py-16">
          <Experience />
        </section>

        {/* Skills */}
        <section className="py-16 bg-white rounded-2xl shadow-sm">
          <Skills />
        </section>

        {/* Education */}
        <section className="py-16">
          <Education />
        </section>

        {/* Projects */}
        <section className="py-16 bg-white rounded-2xl shadow-sm">
          <Projects />
        </section>

        {/* Achievements */}
        <section className="py-16">
          <Achievements />
        </section>

        {/* Certifications */}
        <section className="py-16 bg-white rounded-2xl shadow-sm">
          <Certifications />
        </section>

        {/* Contact */}
        <section className="py-16">
          <Contact />
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-16">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

            {/* Contact */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <div className="space-y-2 text-gray-600">
                <p>
                  <i className="fas fa-phone mr-2"></i>
                  +91-7995028078
                </p>
                <p>
                  <i className="fas fa-envelope mr-2"></i>
                  da.2793@yahoo.com
                </p>
                <p>
                  <i className="fas fa-map-marker-alt mr-2"></i>
                  New Delhi, India
                </p>
              </div>
            </div>

            {/* Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <div className="space-y-2">
                <a href="#about" className="block text-gray-600 hover:text-blue-600 transition">About</a>
                <a href="#experience" className="block text-gray-600 hover:text-blue-600 transition">Experience</a>
                <a href="#skills" className="block text-gray-600 hover:text-blue-600 transition">Skills</a>
                <a href="#projects" className="block text-gray-600 hover:text-blue-600 transition">Projects</a>
              </div>
            </div>

            {/* Social */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect</h3>
              <div className="flex space-x-5">
                <a
                  href="https://linkedin.com/in/divyanshahuja"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 text-2xl transition transform hover:scale-110"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
                <a
                  href="https://divyanshahuja.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 text-2xl transition transform hover:scale-110"
                >
                  <i className="fas fa-globe"></i>
                </a>
              </div>
            </div>

          </div>

          <div className="border-t border-gray-200 mt-10 pt-6 text-center">
            <p className="text-gray-600 text-sm">
              © {new Date().getFullYear()} Divyansh Ahuja. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;