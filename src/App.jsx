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
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-[120px]"> {/* Adjusted for fixed navbar */}
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Education />
        <Projects />
        <Achievements />
        <Certifications />
        <Contact />
      </main>
      <footer className="bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <div className="space-y-2">
                <p className="text-gray-600">
                  <i className="fas fa-phone mr-2"></i>
                  +91-7995028078
                </p>
                <p className="text-gray-600">
                  <i className="fas fa-envelope mr-2"></i>
                  da.2793@yahoo.com
                </p>
                <p className="text-gray-600">
                  <i className="fas fa-map-marker-alt mr-2"></i>
                  New Delhi, DL
                </p>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <div className="space-y-2">
                <a href="#about" className="block text-gray-600 hover:text-blue-600">About</a>
                <a href="#experience" className="block text-gray-600 hover:text-blue-600">Experience</a>
                <a href="#skills" className="block text-gray-600 hover:text-blue-600">Skills</a>
                <a href="#projects" className="block text-gray-600 hover:text-blue-600">Projects</a>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect</h3>
              <div className="flex space-x-4">
                <a 
                  href="https://linkedin.com/in/divyanshahuja"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 text-2xl"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
                <a 
                  href="https://bold.pro/my/divyanshahuja"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 text-2xl"
                >
                  <i className="fas fa-globe"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 mt-8 pt-8 text-center">
            <p className="text-gray-600">
              © {new Date().getFullYear()} Divyansh Ahuja. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
