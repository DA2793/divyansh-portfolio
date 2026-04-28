const Achievements = () => {
  return (
    <section id="achievements" className="py-24 bg-[#f7f6f2] text-[#0f172a]">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <p className="text-xs font-semibold tracking-[0.18em] uppercase text-gray-400 mb-3">
          Recognition
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mb-16">
          Achievements & Recognition
        </h2>

        {/* ── Tier 0: Manager of the Year ── */}
        <div
          className="rounded-2xl p-8 mb-6 border-2 border-yellow-400/30 shadow-md hover:shadow-lg transition-shadow duration-200 relative overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #fffbeb 0%, #fef3c7 50%, #fde68a20 100%)",
          }}
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400/10 rounded-full blur-2xl -translate-y-8 translate-x-8" />
          <div className="relative">
            <div className="flex items-center justify-between mb-4">
              <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-[#FF9900]/15 text-[#b36a00]">
                Amazon
              </span>
              <span className="text-xs text-gray-500 font-medium">
                2025
              </span>
            </div>

            <div className="flex items-start gap-3 mb-1">
              <div className="w-10 h-10 rounded-lg bg-[#0f172a] flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path
                    d="M9 1l2 4 4.5.7-3.25 3.15.75 4.45L9 11l-4 2.3.75-4.45L2.5 5.7 7 5l2-4z"
                    fill="#FBBF24"
                    stroke="#F59E0B"
                    strokeWidth="0.8"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#0f172a]">
                  Manager of the Year
                </h3>
                <p className="text-xs text-gray-500 mt-0.5">
                  Operational Excellence, Automation & Gen AI-Driven Efficiency
                </p>
              </div>
            </div>

            <ul className="space-y-2.5 mt-5">
              <li className="flex items-start gap-3 text-sm text-[#475569] leading-relaxed">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#FF9900] shrink-0" />
                Recognized for delivering significant cost savings and headcount
                optimization across the network during 2025
              </li>
              <li className="flex items-start gap-3 text-sm text-[#475569] leading-relaxed">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#FF9900] shrink-0" />
                Drove operational process improvements, automation initiatives,
                and Gen AI-driven efficiency programs
              </li>
              <li className="flex items-start gap-3 text-sm text-[#475569] leading-relaxed">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#FF9900] shrink-0" />
                Delivered measurable impact through scalable systems and
                cross-functional program leadership
              </li>
            </ul>
          </div>
        </div>

        {/* ── Tier 1: Manager of the Quarter ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Q1 2025 */}
          <div className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-200">
            <div className="flex items-center justify-between mb-4">
              <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-[#FF9900]/10 text-[#b36a00]">
                Amazon
              </span>
              <span className="text-xs text-gray-400 font-medium">
                Q1 2025
              </span>
            </div>

            <div className="flex items-start gap-3 mb-1">
              <div className="w-9 h-9 rounded-lg bg-[#0f172a] flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M8 2l1.5 3 3.5.5-2.5 2.5.5 3.5L8 10l-3 1.5.5-3.5L3 5.5l3.5-.5L8 2z"
                    stroke="white"
                    strokeWidth="1.3"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-base font-bold text-[#0f172a]">
                  Manager of the Quarter
                </h3>
                <p className="text-xs text-gray-400 mt-0.5">
                  Automation & Visibility Transformation
                </p>
              </div>
            </div>

            <ul className="space-y-2.5 mt-5">
              <li className="flex items-start gap-3 text-sm text-[#475569] leading-relaxed">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#FF9900] shrink-0" />
                Launched a real-time visibility tool and expanded workflow
                automation across carrier lanes
              </li>
              <li className="flex items-start gap-3 text-sm text-[#475569] leading-relaxed">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#FF9900] shrink-0" />
                Improved operational efficiency by reducing manual intervention
                across execution paths
              </li>
              <li className="flex items-start gap-3 text-sm text-[#475569] leading-relaxed">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#FF9900] shrink-0" />
                Delivered measurable productivity gains and headcount
                optimization across the network
              </li>
            </ul>
          </div>

          {/* Q1 2024 */}
          <div className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-200">
            <div className="flex items-center justify-between mb-4">
              <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-[#FF9900]/10 text-[#b36a00]">
                Amazon
              </span>
              <span className="text-xs text-gray-400 font-medium">
                Q1 2024
              </span>
            </div>

            <div className="flex items-start gap-3 mb-1">
              <div className="w-9 h-9 rounded-lg bg-[#0f172a] flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M8 2l1.5 3 3.5.5-2.5 2.5.5 3.5L8 10l-3 1.5.5-3.5L3 5.5l3.5-.5L8 2z"
                    stroke="white"
                    strokeWidth="1.3"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-base font-bold text-[#0f172a]">
                  Manager of the Quarter
                </h3>
                <p className="text-xs text-gray-400 mt-0.5">
                  AI-led Cost Optimization (EU Middle Mile Network)
                </p>
              </div>
            </div>

            <ul className="space-y-2.5 mt-5">
              <li className="flex items-start gap-3 text-sm text-[#475569] leading-relaxed">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#FF9900] shrink-0" />
                Spearheaded AI-driven cost optimization initiatives across the
                EU Middle Mile network
              </li>
              <li className="flex items-start gap-3 text-sm text-[#475569] leading-relaxed">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#FF9900] shrink-0" />
                Delivered €1.8M in cost savings through disruption reduction
                strategies
              </li>
              <li className="flex items-start gap-3 text-sm text-[#475569] leading-relaxed">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#FF9900] shrink-0" />
                Improved cross-functional decision-making through enhanced data
                visibility
              </li>
            </ul>
          </div>
        </div>

        {/* ── Tier 2: Global Supervisor of the Year ── */}
        <div className="bg-gradient-to-br from-[#f8fafc] to-[#eef2f7] rounded-2xl p-7 border border-gray-200 shadow-sm mb-6 hover:shadow-md transition-shadow duration-200">
          <div className="flex items-center justify-between mb-4">
            <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-[#0f4c81]/10 text-[#0f4c81]">
              iEnergizer
            </span>
            <span className="text-xs text-gray-400 font-medium">2020</span>
          </div>

          <div className="flex items-start gap-3 mb-1">
            <div className="w-9 h-9 rounded-lg bg-[#0f172a] flex items-center justify-center flex-shrink-0 mt-0.5">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <circle cx="8" cy="8" r="5.5" stroke="white" strokeWidth="1.3" />
                <path
                  d="M8 5v3l2 1.5"
                  stroke="white"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-base font-bold text-[#0f172a]">
                Global Supervisor of the Year
              </h3>
              <p className="text-xs text-gray-400 mt-0.5">
                Recognized by Credit One Bank
              </p>
            </div>
          </div>

          <ul className="space-y-2.5 mt-5">
            <li className="flex items-start gap-3 text-sm text-[#475569] leading-relaxed">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#0f4c81] shrink-0" />
              Led high-risk fraud operations with consistent execution
              excellence during peak disruption
            </li>
            <li className="flex items-start gap-3 text-sm text-[#475569] leading-relaxed">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#0f4c81] shrink-0" />
              Sustained customer trust and service quality with zero compromise
              on control standards
            </li>
            <li className="flex items-start gap-3 text-sm text-[#475569] leading-relaxed">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#0f4c81] shrink-0" />
              Delivered stable performance in a high-risk, high-stakes
              operational environment during the pandemic year
            </li>
          </ul>
        </div>

        {/* ── Tier 3: Recognition Strip ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
            <p className="text-[11px] font-semibold text-[#b36a00] mb-2">
              Amazon
            </p>
            <h4 className="text-sm font-bold mb-3">Manager of the Month</h4>
            <div className="flex flex-wrap gap-2">
              {[
                "Sep '25",
                "Jun '25",
                "Jan '25",
                "Dec '24",
                "Sep '24",
                "Mar '24",
                "Jan '23",
              ].map((m) => (
                <span
                  key={m}
                  className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-[#FF9900]/10 text-[#b36a00]"
                >
                  {m}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
            <p className="text-[11px] font-semibold text-[#0f4c81] mb-2">
              iEnergizer
            </p>
            <h4 className="text-sm font-bold mb-3">
              Team Supervisor of the Month
            </h4>
            <div className="flex gap-2">
              {["Aug '19", "May '18"].map((m) => (
                <span
                  key={m}
                  className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-[#0f4c81]/10 text-[#0f4c81]"
                >
                  {m}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
            <p className="text-[11px] font-semibold text-[#0f4c81] mb-2">
              iEnergizer
            </p>
            <h4 className="text-sm font-bold mb-3">
              Quality Champion of the Year
            </h4>
            <span className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-[#0f4c81]/10 text-[#0f4c81]">
              2016
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
