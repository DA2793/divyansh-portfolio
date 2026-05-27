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
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
    } else {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
    };
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
    <>
      {/* Standard navbar */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-[#0b1b2b] ${
          scrolled ? "border-b border-white/10 shadow-lg" : ""
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
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

            {/* Mobile hamburger button (only shows when menu is closed) */}
            {!mobileOpen && (
              <button
                className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded-lg focus:outline-none"
                onClick={() => setMobileOpen(true)}
                aria-label="Open menu"
                aria-expanded={false}
              >
                <span className="block w-5 h-0.5 bg-white rounded" />
                <span className="block w-5 h-0.5 bg-white rounded mt-1" />
                <span className="block w-5 h-0.5 bg-white rounded mt-1" />
              </button>
            )}
          </div>
        </div>
      </nav>

      {/* Mobile menu - full screen overlay with its own close button */}
      {mobileOpen && (
        <div className="md:hidden fixed inset-0 z-[60] bg-[#0b1b2b] flex flex-col">
          {/* Header with close button */}
          <div className="flex justify-between items-center h-16 px-6">
            <span className="text-lg font-semibold text-white tracking-wide">
              Divyansh Ahuja
            </span>
            <button
              className="flex items-center justify-center w-10 h-10 rounded-lg focus:outline-none"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
                <line x1="4" y1="4" x2="16" y2="16" />
                <line x1="16" y1="4" x2="4" y2="16" />
              </svg>
            </button>
          </div>

          {/* Nav links */}
          <div className="flex-1 flex flex-col items-center justify-center gap-8">
            {navLinks.map(({ id, label }) => (
              <a
                key={id}
                href={isHome ? `#${id}` : `/#${id}`}
                onClick={handleNavClick}
                className={`text-2xl font-medium px-3 py-2 ${
                  activeSection === id
                    ? "text-yellow-400"
                    : "text-gray-200 active:text-yellow-400"
                }`}
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
