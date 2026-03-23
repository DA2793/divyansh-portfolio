import { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0b1b2b]/80 backdrop-blur-lg border-b border-white/10 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">

          {/* LOGO */}
          <div className="text-lg font-semibold text-white tracking-wide">
            Divyansh Ahuja
          </div>

          {/* NAV LINKS */}
          <div className="hidden md:flex items-center space-x-8 text-sm text-gray-300">

            <a href="#about" className="hover:text-yellow-400 transition">
              About
            </a>

            <a href="#experience" className="hover:text-yellow-400 transition">
              Experience
            </a>

            <a href="#projects" className="hover:text-yellow-400 transition">
              Projects
            </a>

            <a href="#skills" className="hover:text-yellow-400 transition">
              Skills
            </a>

            <a href="#contact" className="hover:text-yellow-400 transition">
              Contact
            </a>

          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;