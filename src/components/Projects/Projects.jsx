const Projects = () => {
  const featured = {
    title: "European Transportation Network Optimization",
    company: "Amazon",
    type: "AI · Network Strategy",
    description:
      "Led AI-driven scheduling and disruption reduction initiatives across the European Middle Mile transportation network. Conducted root cause analysis, collaborated with stakeholders to pilot corrective actions, and stabilized operations at scale — improving planning decisions and reducing inefficiencies across the network.",
    impact: "€1.8M+ in cost savings",
  };

  const projects = [
    {
      title: "Truck Scheduling Optimization",
      company: "Amazon",
      type: "Automation · Cost Impact",
      description:
        "Developed an automation script to address recurring sourcing capacity challenges — cap hits and bandwidth gaps that required manual intervention and cross-functional coordination. Delivered significant financial impact validated by the Finance team.",
      impact: "$11M in estimated savings",
    },
    {
      title: "Operational Workflow Automation",
      company: "Amazon",
      type: "Automation · Execution",
      description:
        "Built browser-based automation to streamline case management across platforms and automated carrier cancellation workflows across multiple lane types. Eliminated repetitive manual actions and improved execution speed across operations.",
      impact: "90–95% reduction in manual effort",
    },
    {
      title: "Real-Time Analytics & Performance Systems",
      company: "Amazon",
      type: "Data · Systems",
      description:
        "Built a real-time analytics platform for operations performance tracking, centralized dashboards replacing fragmented manual reporting, and a standardized employee performance tracking system with behavioral and operational metrics.",
      impact: "95% reduction in reporting effort · 30% improvement in evaluation consistency",
    },
    {
      title: "Operations Program Launch — Fraud & Protection",
      company: "iEnergizer",
      type: "0→1 Build · Operations",
      description:
        "Launched and scaled fraud and customer protection programs from scratch for a US credit card issuer. Designed SOPs, defined KPIs, built training programs, laid out incentive policies, and drove rigorous quality monitoring.",
      impact: "99% quality · 100% CSAT",
    },
  ];

  return (
    <section id="projects" className="py-24 bg-[#0f172a] text-white">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <p className="text-xs font-semibold tracking-[0.18em] uppercase text-gray-400 text-center mb-3">
          Impact
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Selected Work
        </h2>

        {/* Featured project — full width */}
        <div
          className="rounded-2xl p-8 mb-6 border border-white/10 hover:border-white/20 transition-all duration-300"
          style={{
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))",
          }}
        >
          <div className="flex items-center justify-between mb-3">
            <p className="text-[11px] text-gray-400 uppercase tracking-wider">
              {featured.type}
            </p>
            <span className="text-[11px] text-gray-500">
              {featured.company}
            </span>
          </div>
          <h4 className="text-lg font-semibold text-white mb-3">
            {featured.title}
          </h4>
          <p className="text-sm text-gray-300 leading-relaxed mb-4 max-w-3xl">
            {featured.description}
          </p>
          <div className="pt-3 border-t border-white/10">
            <p className="text-sm font-semibold text-yellow-400">
              {featured.impact}
            </p>
          </div>
        </div>

        {/* Project grid — 2 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map(({ title, company, type, description, impact }) => (
            <div
              key={title}
              className="rounded-2xl p-7 border border-white/10 hover:border-white/20 transition-all duration-300"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))",
              }}
            >
              <div className="flex items-center justify-between mb-3">
                <p className="text-[11px] text-gray-400 uppercase tracking-wider">
                  {type}
                </p>
                <span className="text-[11px] text-gray-500">{company}</span>
              </div>
              <h4 className="text-base font-semibold text-white mb-3">
                {title}
              </h4>
              <p className="text-sm text-gray-300 leading-relaxed mb-4">
                {description}
              </p>
              <div className="pt-3 border-t border-white/10">
                <p className="text-xs font-semibold text-yellow-400">
                  {impact}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
