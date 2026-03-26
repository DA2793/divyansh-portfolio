import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      if (!isHome) return;

      const sections = ["contact", "skills", "projects", "experience", "about"];
      const current = sections.find((id) => {
        const el = document.getElementById(id);
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top <= 120 && rect.bottom > 120;
      });

      setActiveSection(current || "");
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  const navLinks = [
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
      ${scrolled
        ? "bg-[#0b1b2b]/95 backdrop-blur-xl border-b border-white/10 shadow-lg"
        : "bg-[#0b1b2b]/85 backdrop-blur-lg"
      }`}
    >
      <div className="absolute inset-0 -z-10 bg-[#0b1b2b]" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          <div className="text-lg font-semibold text-white tracking-wide">
            Divyansh Ahuja
          </div>

          <div className="hidden md:flex items-center space-x-8 text-sm">
            {navLinks.map(({ id, label }) => (
              <a
                key={id}
                href={isHome ? `#${id}` : `/#${id}`}
                className={`transition ${
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
      </div>
    </nav>
  );
};

export default Navbar;
