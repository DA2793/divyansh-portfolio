import AnimateOnScroll from "../AnimateOnScroll/AnimateOnScroll";

const Projects = () => {
  const featured = {
    title: "European Transportation Network Optimization",
    company: "Amazon",
    type: "AI · Network Strategy",
    description:
      "Redesigned scheduling and disruption management across the European Middle Mile transportation network using AI-driven optimization and root-cause interventions. Improved planning decisions, reduced inefficiencies, and stabilized network performance at scale.",
    impact: "€1.8M+ in cost savings",
  };

  const projects = [
    {
      title: "Truck Scheduling Optimization",
      company: "Amazon",
      type: "Automation · Cost Impact",
      description:
        "Built an automation solution to resolve recurring capacity constraints and bandwidth gaps in transportation scheduling. Eliminated manual coordination and enabled faster, more accurate sourcing decisions across the network.",
      impact: "$11M in estimated savings",
    },
    {
      title: "Operational Workflow Automation",
      company: "Amazon",
      type: "Automation · Execution",
      description:
        "Developed automation layers to streamline case management and carrier workflows across multiple operational systems. Reduced manual intervention, improved execution speed, and enabled consistent handling across high-volume operations.",
      impact: "90–95% reduction in manual effort",
    },
    {
      title: "Real-Time Analytics & Performance Systems",
      company: "Amazon",
      type: "Data · Systems",
      description:
        "Designed a real-time analytics ecosystem for operations performance, including interval-based tracking, centralized dashboards, and structured performance measurement frameworks. Enabled faster decision-making, mid-shift interventions, and improved operational accountability.",
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

  const companyAccent = {
    Amazon: {
      bg: "bg-[#FF9900]/20",
      text: "text-[#FF9900]",
      dot: "bg-[#FF9900]",
    },
    iEnergizer: {
      bg: "bg-[#4a9eff]/20",
      text: "text-[#4a9eff]",
      dot: "bg-[#4a9eff]",
    },
  };

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

        {/* Featured card — full width */}
        <AnimateOnScroll>
        <div
          className="rounded-2xl p-8 mb-6 border border-white/10 hover:border-white/20 transition-all duration-300"
          style={{
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))",
          }}
        >
          <div className="flex items-center justify-between mb-4">
            <p className="text-[11px] font-medium text-gray-400 uppercase tracking-wider">
              {featured.type}
            </p>
            <span
              className={`text-[11px] font-semibold px-2.5 py-1 rounded-full ${companyAccent[featured.company].bg} ${companyAccent[featured.company].text}`}
            >
              {featured.company}
            </span>
          </div>
          <h4 className="text-xl font-bold text-white mb-3">
            {featured.title}
          </h4>
          <p className="text-sm text-gray-300 leading-relaxed mb-6 max-w-3xl">
            {featured.description}
          </p>
          <div className="pt-4 border-t border-white/10 flex items-center gap-2">
            <span
              className={`w-2 h-2 rounded-full ${companyAccent[featured.company].dot}`}
            />
            <p className="text-sm font-bold text-yellow-400">
              {featured.impact}
            </p>
          </div>
        </div>
        </AnimateOnScroll>

        {/* Project grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map(({ title, company, type, description, impact }, index) => {
            const accent = companyAccent[company];
            return (
              <AnimateOnScroll key={title} delay={index * 0.1}>
              <div
                className="rounded-2xl p-7 border border-white/10 hover:border-white/20 transition-all duration-300 flex flex-col h-full"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))",
                }}
              >
                <div className="flex items-center justify-between mb-4">
                  <p className="text-[11px] font-medium text-gray-400 uppercase tracking-wider">
                    {type}
                  </p>
                  <span
                    className={`text-[11px] font-semibold px-2.5 py-1 rounded-full ${accent.bg} ${accent.text}`}
                  >
                    {company}
                  </span>
                </div>
                <h4 className="text-base font-semibold text-white mb-3">
                  {title}
                </h4>
                <p className="text-sm text-gray-300 leading-relaxed mb-4 flex-1">
                  {description}
                </p>
                <div className="pt-4 border-t border-white/10 flex items-center gap-2">
                  <span
                    className={`w-2 h-2 rounded-full flex-shrink-0 ${accent.dot}`}
                  />
                  <p className="text-xs font-bold text-yellow-400">
                    {impact}
                  </p>
                </div>
              </div>
              </AnimateOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
