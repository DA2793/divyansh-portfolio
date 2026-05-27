import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      if (!isHome) return;

      const sections = ["contact", "certifications", "achievements", "projects", "education", "skills", "experience", "about"];
      const current = sections.find((id) => {
        const el = document.getElementById(id);
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top <= 120 && rect.bottom > 120;
      });

      const atBottom = (window.innerHeight + window.scrollY) >= document.body.offsetHeight - 100;
      setActiveSection(atBottom ? "contact" : current || "");
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const navLinks = [
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "achievements", label: "Achievements" },
    { id: "contact", label: "Contact" },
  ];

  const handleNavClick = () => {
    setMobileOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
      ${scrolled
        ? "bg-[#0b1b2b]/95 backdrop-blur-xl border-b border-white/10 shadow-lg"
        : "bg-[#0b1b2b]/85 backdrop-blur-lg"
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="absolute inset-0 -z-10 bg-[#0b1b2b]" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          <a href={isHome ? "#" : "/"} className="text-lg font-semibold text-white tracking-wide">
            Divyansh Ahuja
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center space-x-8 text-sm">
            {navLinks.map(({ id, label }) => (
              <a
                key={id}
                href={isHome ? `#${id}` : `/#${id}`}
                className={`transition focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b1b2b] rounded px-1 ${
                  activeSection === id
                    ? "text-yellow-400"
                    : "text-gray-200 hover:text-yellow-400"
                }`}
              >
                {label}
              </a>
            ))}
          </div>

          {/* Mobile hamburger button */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            <span className={`block w-5 h-0.5 bg-white rounded transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-[3px]" : ""}`} />
            <span className={`block w-5 h-0.5 bg-white rounded transition-all duration-300 mt-1 ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`block w-5 h-0.5 bg-white rounded transition-all duration-300 mt-1 ${mobileOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu overlay */}
      <div
        className={`md:hidden fixed inset-0 top-16 bg-[#0b1b2b]/98 backdrop-blur-xl transition-all duration-300 ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map(({ id, label }) => (
            <a
              key={id}
              href={isHome ? `#${id}` : `/#${id}`}
              onClick={handleNavClick}
              className={`text-xl font-medium transition focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 rounded px-3 py-1 ${
                activeSection === id
                  ? "text-yellow-400"
                  : "text-gray-200 hover:text-yellow-400"
              }`}
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
