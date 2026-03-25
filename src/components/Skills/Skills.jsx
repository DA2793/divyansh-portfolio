const Skills = () => {
  const categories = [
    {
      title: "Network & Capacity Ownership",
      tagline: "Cost ↓ · Speed ↑ · Network Stability",
      icon: (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M2 4h12M2 8h8M2 12h10" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      ),
      highlight:
        "Own and optimize large-scale linehaul networks under dynamic demand and operational constraints.",
      items: [
        "Drive network execution across EU & NA markets, balancing cost, speed, and reliability",
        "Optimize routing, capacity, and load planning decisions under real-time constraints",
        "Translate demand signals into actionable network plans that hold up at scale",
      ],
    },
    {
      title: "Operational Control & Reliability",
      tagline: "SLA ↑ · Risk ↓ · Control ↑",
      icon: (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M8 2v4M8 10v4M2 8h4M10 8h4" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
          <circle cx="8" cy="8" r="2" stroke="white" strokeWidth="1.5"/>
        </svg>
      ),
      highlight:
        "Ensure consistent service delivery by controlling variability, managing risk, and enforcing governance.",
      items: [
        "Own end-to-end service delivery and performance adherence across operations",
        "Manage exceptions, escalations, and fraud risk scenarios with structured response frameworks",
        "Run WBR / MBR / QBR cadences to enforce accountability and drive corrective action",
      ],
    },
    {
      title: "Systems Thinking & Execution",
      tagline: "Automation ↑ · Scale ↑ · Manual ↓",
      icon: (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <rect x="2" y="2" width="5" height="5" rx="1" stroke="white" strokeWidth="1.5"/>
          <rect x="9" y="2" width="5" height="5" rx="1" stroke="white" strokeWidth="1.5"/>
          <rect x="2" y="9" width="5" height="5" rx="1" stroke="white" strokeWidth="1.5"/>
          <rect x="9" y="9" width="5" height="5" rx="1" stroke="white" strokeWidth="1.5"/>
        </svg>
      ),
      highlight:
        "Design systems and tools that reduce manual effort and scale decision-making across operations.",
      items: [
        "Build automation using SQL, Excel, and lightweight scripting to eliminate repetitive workflows",
        "Applied AI-driven optimization to reduce disruptions and ad hoc costs across the European network",
        "Lead cross-functional programs from ambiguity to structured execution",
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 bg-[#f7f6f2] text-[#0f172a]">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <p className="text-xs font-semibold tracking-[0.18em] uppercase text-gray-400 text-center mb-3">
          Capabilities
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Core Capabilities
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map(({ title, tagline, icon, highlight, items }) => (
            <div
              key={title}
              className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-lg bg-[#0f172a] flex items-center justify-center shrink-0">
                  {icon}
                </div>
                <h3 className="text-sm font-semibold text-[#0f172a]">
                  {title}
                </h3>
              </div>

              {/* Tagline */}
              <p className="text-xs text-gray-400 mb-6">{tagline}</p>

              {/* Highlight */}
              <p className="text-sm font-medium text-[#0f172a] mb-6 leading-relaxed">
                {highlight}
              </p>

              {/* Divider */}
              <div className="h-px bg-gray-100 mb-6" />

              {/* Items */}
              <ul className="space-y-4">
                {items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-[#475569] leading-relaxed"
                  >
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#0f172a] shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
