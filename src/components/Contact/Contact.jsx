const Contact = () => {
  const contacts = [
    {
      icon: <i className="fas fa-envelope" />,
      label: "Email",
      value: "da.2793@yahoo.com",
      href: "mailto:da.2793@yahoo.com",
      primary: true,
    },
    {
      icon: <i className="fas fa-phone" />,
      label: "Phone",
      value: (
        <span className="flex flex-col gap-1">
          <a href="tel:+919599411791" className="text-sm font-medium text-[#0f172a] hover:text-gray-500 transition-colors">+91 9599411791</a>
          <a href="tel:+917995028078" className="text-sm font-medium text-[#0f172a] hover:text-gray-500 transition-colors">+91 7995028078</a>
        </span>
      ),
      href: null,
    },
    {
      icon: <i className="fas fa-map-marker-alt" />,
      label: "Location",
      value: "New Delhi, India",
      href: null,
    },
  ];

  const profiles = [
    {
      icon: <i className="fab fa-linkedin-in" />,
      label: "LinkedIn",
      sub: "Experience & leadership journey",
      href: "https://linkedin.com/in/divyanshahuja",
    },
    {
      icon: <i className="fab fa-github" />,
      label: "GitHub",
      sub: "Projects & technical work",
      href: "https://github.com/DA2793",
    },
  ];

  return (
    <section id="contact" className="py-24 bg-[#f7f6f2] text-[#0f172a]">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <p className="text-xs font-semibold tracking-[0.18em] uppercase text-gray-400 text-center mb-3">
          Contact
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Get In Touch
        </h2>
        <p className="text-sm text-gray-400 text-center mb-16 max-w-md mx-auto">
          Open to leadership opportunities, collaborations, and conversations.
        </p>

        {/* ── Contact cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {contacts.map(({ icon, label, value, href, primary }) => (
            <div
              key={label}
              className={`rounded-2xl p-6 border transition-all duration-200 flex items-start gap-4 ${
                primary
                  ? "bg-[#0f172a] text-white border-[#0f172a] shadow-md hover:shadow-lg"
                  : "bg-white border-gray-100 shadow-sm hover:shadow-md"
              }`}
            >
              <div
                className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 text-sm ${
                  primary ? "bg-white text-[#0f172a]" : "bg-[#0f172a] text-white"
                }`}
              >
                {icon}
              </div>
              <div>
                <p
                  className={`text-xs font-semibold uppercase tracking-wider mb-1 ${
                    primary ? "text-gray-300" : "text-gray-400"
                  }`}
                >
                  {label}
                </p>
                {href ? (
                  <a
                    href={href}
                    className={`text-sm font-medium transition-colors ${
                      primary
                        ? "text-white hover:text-gray-300"
                        : "text-[#0f172a] hover:text-gray-500"
                    }`}
                  >
                    {value}
                  </a>
                ) : (
                  <p className="text-sm font-medium">{value}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* ── Profile cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {profiles.map(({ icon, label, sub, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-200 flex items-center gap-4 group"
            >
              <div className="w-10 h-10 rounded-lg bg-[#0f172a] flex items-center justify-center flex-shrink-0 text-white text-sm group-hover:bg-[#1e293b] transition-colors">
                {icon}
              </div>
              <div className="flex-1">
                <p className="text-sm font-bold text-[#0f172a]">{label}</p>
                <p className="text-xs text-gray-400 mt-0.5">{sub}</p>
              </div>
              <i className="fas fa-arrow-right text-xs text-gray-300 group-hover:text-[#0f172a] group-hover:translate-x-1 transition-all duration-200" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
