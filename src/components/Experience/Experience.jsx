const Experience = () => {
  const amazonImpact = [
    { value: "€40M+", label: "Cost Savings" },
    { value: "90%", label: "Manual Effort Reduced" },
    { value: "EU+NA", label: "Markets Led" },
  ];

  const amazonBullets = [
    "Owned linehaul network execution across EU & NA, driving cost, speed, and reliability trade-offs at scale",
    "Delivered €40M+ in cost savings through network optimization, automation, and execution control",
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
    <section id="experience" className="py-24 bg-[#f7f6f2] text-[#0f172a]">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <p className="text-xs font-semibold tracking-[0.18em] uppercase text-gray-400 text-center mb-3">
          Career
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Work Experience
        </h2>

        <div className="space-y-8">

          {/* ─── AMAZON ─── */}
          <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
            {/* Header row */}
            <div className="flex items-start justify-between gap-4 mb-2">
              <div className="flex items-center gap-4">
                <img
                  src="/amazon.png"
                  alt="Amazon"
                  className="w-10 h-10 object-contain rounded-lg"
                />
                <div>
                  <h3 className="text-lg font-bold text-[#0f172a]">Amazon</h3>
                  <p className="text-sm text-[#475569]">
                    Supply Chain Operations Manager
                  </p>
                </div>
              </div>
              <span className="text-xs text-gray-400 font-medium whitespace-nowrap mt-1">
                Sep 2021 – Present
              </span>
            </div>

            {/* Tagline */}
            <p className="text-xs text-gray-400 mb-6 ml-14">
              Transportation Network · Cost Optimization · Execution Systems
            </p>

            {/* Impact pills */}
            <div className="flex flex-wrap gap-3 mb-6">
              {amazonImpact.map(({ value, label }) => (
                <div
                  key={label}
                  className="bg-[#f7f6f2] rounded-xl px-4 py-2.5 border border-gray-100 flex items-center gap-2.5"
                >
                  <p className="text-sm font-bold text-[#0f172a]">{value}</p>
                  <p className="text-xs text-gray-400">{label}</p>
                </div>
              ))}
            </div>

            {/* Key responsibilities */}
            <ul className="space-y-2.5 mb-6">
              {amazonBullets.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm text-[#475569] leading-relaxed"
                >
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#0f172a] shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            {/* Detail page link */}
            <div className="flex justify-end">
              <button className="text-xs font-semibold text-[#0f172a] border border-gray-200 rounded-lg px-4 py-2 hover:bg-[#0f172a] hover:text-white transition">
                Explore Work →
              </button>
            </div>
          </div>

          {/* ─── IENERGIZER ─── */}
          <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
            {/* Header row */}
            <div className="flex items-start justify-between gap-4 mb-2">
              <div className="flex items-center gap-4">
                <img
                  src="/ienergizer.png"
                  alt="iEnergizer"
                  className="w-10 h-10 object-contain rounded-lg"
                />
                <div>
                  <h3 className="text-lg font-bold text-[#0f172a]">
                    iEnergizer
                  </h3>
                  <p className="text-sm text-[#475569]">
                    Credit One Bank – US Credit Card Issuer
                  </p>
                </div>
              </div>
              <span className="text-xs text-gray-400 font-medium whitespace-nowrap mt-1">
                2015 – 2021
              </span>
            </div>

            {/* Tagline */}
            <p className="text-xs text-gray-400 mb-6 ml-14">
              Customer Operations · Fraud Risk · Service Delivery
            </p>

            {/* Role progression */}
            <div className="relative pl-5 border-l-2 border-gray-100 mb-6 space-y-4">
              {iEnergizerProgression.map(({ role, period, active }) => (
                <div key={role} className="relative">
                  <span
                    className={`absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full border-2 ${
                      active
                        ? "bg-[#0f172a] border-[#0f172a]"
                        : "bg-white border-gray-300"
                    }`}
                  />
                  <div className="flex items-center justify-between">
                    <p
                      className={`text-sm font-semibold ${
                        active ? "text-[#0f172a]" : "text-gray-400"
                      }`}
                    >
                      {role}
                    </p>
                    <p className="text-xs text-gray-400">{period}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Impact pills */}
            <div className="flex flex-wrap gap-3 mb-6">
              {iEnergizerImpact.map(({ value, label }) => (
                <div
                  key={label}
                  className="bg-[#f7f6f2] rounded-xl px-4 py-2.5 border border-gray-100 flex items-center gap-2.5"
                >
                  <p className="text-sm font-bold text-[#0f172a]">{value}</p>
                  <p className="text-xs text-gray-400">{label}</p>
                </div>
              ))}
            </div>

            {/* Key responsibilities */}
            <ul className="space-y-2.5 mb-6">
              {iEnergizerBullets.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm text-[#475569] leading-relaxed"
                >
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#0f172a] shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            {/* Detail page link */}
            <div className="flex justify-end">
              <button className="text-xs font-semibold text-[#0f172a] border border-gray-200 rounded-lg px-4 py-2 hover:bg-[#0f172a] hover:text-white transition">
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
