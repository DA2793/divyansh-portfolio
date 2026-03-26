const Experience = () => {
  const amazonImpact = [
    { value: "€15M+", label: "Cost Savings" },
    { value: "90%", label: "Manual Effort Reduced" },
    { value: "EU+NA", label: "Markets Led" },
  ];

  const amazonBullets = [
    "Owned linehaul network execution across EU & NA, driving cost, speed, and reliability trade-offs at scale",
    "Delivered €15M+ in cost savings through network optimization, automation, and execution control",
    "Reduced manual intervention by 90% through automation across reporting and planning workflows",
    "Established execution guardrails and structured review cadences to improve decision quality across planning and operations",
  ];

  const iEnergizerImpact = [
    { value: "99%+", label: "Quality Score" },
    { value: "95%+", label: "CSAT Achieved" },
  ];

  const iEnergizerBullets = [
    "Managed end-to-end service delivery across customer support, fraud risk, and credit protection operations",
    "Launched and scaled fraud and credit protection operations, achieving 99%+ quality and 95% CSAT",
    "Designed SOPs, dashboards, and reporting frameworks to standardize operations across teams",
    "Owned workforce planning, training, and performance management — scaling frontline leadership capability",
  ];

  const iEnergizerProgression = [
    { role: "Assistant Manager – Operations", period: "2019 – 2021", active: true },
    { role: "Operations Team Lead", period: "2017 – 2019", active: false },
    { role: "Senior Customer Service Executive", period: "2015 – 2017", active: false },
  ];

  return (
    <section id="experience" className="py-24 bg-[#0b1b2b] text-white">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header — left aligned */}
        <p className="text-xs font-semibold tracking-[0.18em] uppercase text-gray-400 mb-3">
          Career
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mb-16">
          Work Experience
        </h2>

        <div className="space-y-8">

          {/* ─── AMAZON ─── */}
          <div
            className="rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300"
            style={{
              background: "linear-gradient(135deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))",
            }}
          >
            <div className="flex items-start justify-between gap-4 mb-2">
              <div className="flex items-center gap-4">
                <img src="/amazon.png" alt="Amazon" className="w-10 h-10 object-contain rounded-lg" />
                <div>
                  <h3 className="text-lg font-bold text-white">Amazon</h3>
                  <p className="text-sm text-gray-300">Supply Chain Operations Manager</p>
                </div>
              </div>
              <span className="text-xs text-gray-400 font-medium whitespace-nowrap mt-1">
                Sep 2021 – Present
              </span>
            </div>

            <p className="text-xs text-gray-400 mb-6 ml-14">
              Transportation Network · Cost Optimization · Execution Systems
            </p>

            <div className="flex flex-wrap gap-3 mb-6">
              {amazonImpact.map(({ value, label }) => (
                <div key={label} className="bg-white/5 rounded-xl px-4 py-2.5 border border-white/10 flex items-center gap-2.5">
                  <p className="text-sm font-bold text-white">{value}</p>
                  <p className="text-xs text-gray-400">{label}</p>
                </div>
              ))}
            </div>

            <ul className="space-y-2.5 mb-6">
              {amazonBullets.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-gray-300 leading-relaxed">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-white shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="flex justify-end">
              <button className="text-xs font-semibold text-white border border-white/20 rounded-lg px-4 py-2 hover:bg-white hover:text-[#0b1b2b] transition">
                Explore Work →
              </button>
            </div>
          </div>

          {/* ─── IENERGIZER ─── */}
          <div
            className="rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300"
            style={{
              background: "linear-gradient(135deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))",
            }}
          >
            <div className="flex items-start justify-between gap-4 mb-2">
              <div className="flex items-center gap-4">
                <img src="/ienergizer.png" alt="iEnergizer" className="w-10 h-10 object-contain rounded-lg" />
                <div>
                  <h3 className="text-lg font-bold text-white">iEnergizer</h3>
                  <p className="text-sm text-gray-300">Credit One Bank – US Credit Card Issuer</p>
                </div>
              </div>
              <span className="text-xs text-gray-400 font-medium whitespace-nowrap mt-1">
                2015 – 2021
              </span>
            </div>

            <p className="text-xs text-gray-400 mb-6 ml-14">
              Customer Operations · Fraud Risk · Service Delivery
            </p>

            <div className="relative pl-5 border-l-2 border-white/10 mb-6 space-y-4">
              {iEnergizerProgression.map(({ role, period, active }) => (
                <div key={role} className="relative">
                  <span
                    className={`absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full border-2 ${
                      active ? "bg-white border-white" : "bg-transparent border-gray-500"
                    }`}
                  />
                  <div className="flex items-center justify-between">
                    <p className={`text-sm font-semibold ${active ? "text-white" : "text-gray-500"}`}>
                      {role}
                    </p>
                    <p className="text-xs text-gray-500">{period}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 mb-6">
              {iEnergizerImpact.map(({ value, label }) => (
                <div key={label} className="bg-white/5 rounded-xl px-4 py-2.5 border border-white/10 flex items-center gap-2.5">
                  <p className="text-sm font-bold text-white">{value}</p>
                  <p className="text-xs text-gray-400">{label}</p>
                </div>
              ))}
            </div>

            <ul className="space-y-2.5 mb-6">
              {iEnergizerBullets.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-gray-300 leading-relaxed">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-white shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="flex justify-end">
              <button className="text-xs font-semibold text-white border border-white/20 rounded-lg px-4 py-2 hover:bg-white hover:text-[#0b1b2b] transition">
                Explore Work →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
