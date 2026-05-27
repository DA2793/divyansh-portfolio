import AnimateOnScroll from "../AnimateOnScroll/AnimateOnScroll";

const About = () => {
  const competencies = [
    "Supply Chain Management & Logistics Operations",
    "Network Optimization & Transportation Planning",
    "Program Management & Stakeholder Leadership",
    "Operational Governance & Performance Management",
    "Service Delivery & Customer Operations (BFSI)",
  ];

  const tools = [
    "SQL, Python, Advanced Excel, QuickSight",
    "Generative AI & AI-Driven Optimization",
    "Workflow Automation & Process Optimization",
    "Data Analytics & Reporting",
    "Dashboarding & Decision Support Systems",
    "Root Cause Analysis & Continuous Improvement",
  ];

  const drives = [
    "Turning ambiguity into structured execution",
    "Building systems that outlast the people who built them",
    "Making data the default language for decisions",
  ];

  return (
    <section id="about" className="relative bg-[#f7f6f2] text-[#0f172a]">
      {/* Gradient bridge: dark Hero → light About */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-[#071a2f] to-transparent pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 pt-32 pb-24">
        {/* Section label */}
        <p className="text-xs font-semibold tracking-[0.18em] uppercase text-gray-400 text-center mb-3">
          Overview
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          About
        </h2>

        {/* Bio + What Drives Me */}
        <AnimateOnScroll>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-16 items-start">
          {/* Bio */}
          <div className="md:col-span-3 space-y-5">
            <p className="text-[#334155] leading-relaxed text-base">
              I've spent the last decade figuring out how to move things faster,
              cheaper, and more reliably — across continents, teams, and systems
              that don't always want to cooperate.
            </p>
            <p className="text-[#334155] leading-relaxed text-base">
              Currently at{" "}
              <strong className="text-[#0f172a] font-semibold">Amazon</strong>,
              owning cross-continental transportation performance across Europe
              and North America. The work spans network performance, cost
              optimization, and building execution frameworks that hold up at
              scale — from scheduling automation and Generative AI-driven
              analysis to large-scale cost optimization and disruption
              reduction programs.
            </p>
            <p className="text-[#334155] leading-relaxed text-base">
              Prior to Amazon, I led customer operations in the BFSI domain
              at iEnergizer —
              managing high-severity escalations, driving process improvements,
              and operating in consistently high customer satisfaction
              environments. The thread through all of it: making complex
              operations simpler and decisions faster.
            </p>
          </div>

          {/* What Drives Me */}
          <div className="md:col-span-2">
            <div className="bg-white rounded-2xl px-6 py-6 border border-gray-100 shadow-sm">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-8 rounded-lg bg-[#0f172a] flex items-center justify-center flex-shrink-0">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <circle cx="8" cy="8" r="6" stroke="white" strokeWidth="1.5"/>
                    <path d="M8 5v3l2 2" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-base font-semibold text-[#0f172a]">
                  What Drives Me
                </h3>
              </div>
              <ul className="space-y-3">
                {drives.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-[#475569]">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#0f172a] shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        </AnimateOnScroll>

        {/* Divider */}
        <div className="border-t border-gray-200 mb-16" />

        {/* Competency cards */}
        <AnimateOnScroll>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Core Competencies */}
          <div className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-lg bg-[#0f172a] flex items-center justify-center flex-shrink-0">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M2 8h12M8 2v12" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
              <h3 className="text-base font-semibold text-[#0f172a]">
                Core Competencies
              </h3>
            </div>
            <ul className="space-y-3">
              {competencies.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-[#475569]">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#0f172a] shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Data & Automation */}
          <div className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-lg bg-[#0f172a] flex items-center justify-center flex-shrink-0">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <rect x="2" y="2" width="5" height="5" rx="1" stroke="white" strokeWidth="1.5"/>
                  <rect x="9" y="2" width="5" height="5" rx="1" stroke="white" strokeWidth="1.5"/>
                  <rect x="2" y="9" width="5" height="5" rx="1" stroke="white" strokeWidth="1.5"/>
                  <rect x="9" y="9" width="5" height="5" rx="1" stroke="white" strokeWidth="1.5"/>
                </svg>
              </div>
              <h3 className="text-base font-semibold text-[#0f172a]">
                Data & Automation
              </h3>
            </div>
            <ul className="space-y-3">
              {tools.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-[#475569]">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#0f172a] shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default About;
