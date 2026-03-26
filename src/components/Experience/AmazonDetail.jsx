import { Link } from "react-router-dom";
import { useEffect } from "react";

const AmazonDetail = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#f7f6f2] text-[#0f172a]">
      {/* ── Hero banner ── */}
      <div className="bg-[#0b1b2b] text-white pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-6">
          <Link
            to="/"
            className="text-xs text-gray-400 hover:text-yellow-400 transition mb-8 inline-block"
          >
            ← Back to Home
          </Link>

          <div className="flex items-center gap-4 mb-6">
            <img
              src="/amazon.png"
              alt="Amazon"
              className="w-12 h-12 object-contain rounded-lg"
            />
            <div>
              <h1 className="text-3xl md:text-4xl font-bold">Amazon</h1>
              <p className="text-gray-300 text-sm mt-1">
                Supply Chain Operations Manager
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-6 text-sm text-gray-400 mb-8">
            <span>September 2021 – Present</span>
            <span>Hyderabad, Telangana</span>
          </div>

          {/* Hero metrics */}
          <div className="flex flex-wrap gap-8">
            {[
              { value: "€11M+", label: "Cost Savings (Automation)" },
              { value: "€1.8M", label: "Network Optimization" },
              { value: "90%+", label: "Manual Effort Reduced" },
              { value: "600+", label: "Deep-Dive Analyses Led" },
            ].map(({ value, label }) => (
              <div key={label}>
                <p className="text-2xl font-bold text-yellow-400">{value}</p>
                <p className="text-xs text-gray-400 mt-1">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Chapter 1: From Execution to System Design ── */}
      <div className="py-20">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs font-semibold tracking-[0.18em] uppercase text-gray-400 mb-3">
            September 2021
          </p>
          <h2 className="text-2xl font-bold mb-8">
            From Execution to System Design at Scale
          </h2>
          <div className="space-y-5 text-[#334155] leading-relaxed">
            <p>
              I joined Amazon in September 2021, transitioning from a services
              environment into a live transportation network where every decision
              directly influenced cost, speed, and customer experience.
            </p>
            <p>
              I started with ownership of a 15-member team, managing queue
              operations, escalations, and shift execution. Within months, I
              scaled the team to 25 and moved beyond execution into identifying
              systemic inefficiencies not visible at the surface.
            </p>
          </div>
        </div>
      </div>

      {/* ── Chapter 2: Uncovering Hidden Cost Leakage ── */}
      <div className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs font-semibold tracking-[0.18em] uppercase text-gray-400 mb-3">
            Early Wins
          </p>
          <h2 className="text-2xl font-bold mb-8">
            Uncovering Hidden Cost Leakage
          </h2>
          <div className="space-y-5 text-[#334155] leading-relaxed">
            <p>
              One of the earliest patterns I identified was a recurring loop —
              ad hoc requests being created, cancelled, and recreated — driving
              hidden cost leakage and operational instability.
            </p>
            <p>
              To address this, I built a structured analysis framework for
              diagnosing inefficiencies at scale.
            </p>
            <p>
              Using these insights, I redesigned SOPs and strengthened validation
              mechanisms, improving ad hoc efficiency from{" "}
              <strong className="text-[#0f172a]">70% to 91%</strong> and
              reducing cancellation-driven churn from{" "}
              <strong className="text-[#0f172a]">12.65% to 6.5%</strong>.
            </p>
            <p className="text-lg font-medium text-[#0f172a] border-l-2 border-[#0f172a] pl-5 my-8">
              This shifted the system from reactive firefighting to predictable,
              input-driven execution.
            </p>
            <p>
              In parallel, I standardized workflows for commercial carrier lane
              cases — replacing fragmented handling with consistent, scalable
              decision-making.
            </p>
          </div>
        </div>
      </div>

      {/* ── Metric strip ── */}
      <div className="bg-[#0b1b2b] py-12">
        <div className="max-w-4xl mx-auto px-6 flex flex-wrap justify-center gap-12 text-center">
          <div>
            <p className="text-3xl font-bold text-white">70% → 91%</p>
            <p className="text-xs text-gray-400 mt-1">Ad Hoc Efficiency</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-yellow-400">12.65% → 6.5%</p>
            <p className="text-xs text-gray-400 mt-1">Cancellation Churn Reduced</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-white">15 → 25</p>
            <p className="text-xs text-gray-400 mt-1">Team Scaled</p>
          </div>
        </div>
      </div>

      {/* ── Chapter 3: Moving Upstream ── */}
      <div className="py-20">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs font-semibold tracking-[0.18em] uppercase text-gray-400 mb-3">
            Network Level
          </p>
          <h2 className="text-2xl font-bold mb-8">
            Moving Upstream — Network-Level Change
          </h2>
          <div className="space-y-5 text-[#334155] leading-relaxed">
            <p>
              As scope expanded, I moved upstream into network-level system
              design and cross-functional problem solving.
            </p>
            <p>
              Through deep analysis of capacity planning workflows, I identified
              structural gaps in how thresholds were defined — directly driving
              cancellations and cost inefficiencies.
            </p>
            <p className="text-lg font-medium text-[#0f172a] border-l-2 border-[#0f172a] pl-5 my-8">
              This required alignment beyond operations.
            </p>
            <p>
              I partnered with the Programs team to influence how capacity
              decisions were made across the network. This resulted in
              significant reduction in cancellation-driven churn, improved
              network stability, and{" "}
              <strong className="text-[#0f172a]">
                ~€1.8M in annualized cost savings
              </strong>
              .
            </p>
            <p>
              This marked a shift from improving execution within a team to
              shaping how the network itself operates.
            </p>
          </div>
        </div>
      </div>

      {/* ── Chapter 4: Performance Systems ── */}
      <div className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs font-semibold tracking-[0.18em] uppercase text-gray-400 mb-3">
            2024 – 2025
          </p>
          <h2 className="text-2xl font-bold mb-8">
            Building Performance Systems That Scale
          </h2>
          <div className="space-y-5 text-[#334155] leading-relaxed">
            <p>
              In parallel, I led the redesign of the Employee Management System
              (EMS).
            </p>
            <p>
              Initially launched at team level in 2024, it addressed fundamental
              gaps in performance visibility and evaluation clarity.
            </p>
            <p>
              Recognizing its broader impact, I drove alignment across teams and
              senior leadership to scale it into an org-wide framework in 2025.
            </p>
            <p>
              This transformed EMS from fragmented tracking into a centralized
              performance system — improving evaluation accuracy, reducing
              managerial overhead, and enabling consistent governance at scale.
            </p>
          </div>
        </div>
      </div>

      {/* ── Chapter 5: Automation at Scale ── */}
      <div className="py-20">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs font-semibold tracking-[0.18em] uppercase text-gray-400 mb-3">
            2025
          </p>
          <h2 className="text-2xl font-bold mb-8">
            Automation at Scale
          </h2>
          <div className="space-y-5 text-[#334155] leading-relaxed">
            <p>
              By 2025, my focus shifted toward building automation layers and
              scalable operational infrastructure.
            </p>
            <p>
              I led multiple automation initiatives targeting high-volume,
              repetitive workflows. The most significant of these automated
              commercial carrier case handling, where ~90% of eligible cases
              were resolved without manual intervention — by isolating scenarios
              that did not require human judgment and replacing manual validation
              with rule-based systems.
            </p>
          </div>

          {/* Impact cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 mb-8">
            <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm text-center">
              <p className="text-xl font-bold text-[#0f172a]">~€11M</p>
              <p className="text-xs text-gray-400 mt-1">Annualized Cost Savings</p>
            </div>
            <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm text-center">
              <p className="text-xl font-bold text-[#0f172a]">1.4 FTE</p>
              <p className="text-xs text-gray-400 mt-1">Effort Saved Weekly</p>
            </div>
            <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm text-center">
              <p className="text-xl font-bold text-[#0f172a]">90%+</p>
              <p className="text-xs text-gray-400 mt-1">Auto-Resolution Rate</p>
            </div>
          </div>

          <p className="text-[#334155] leading-relaxed">
            In parallel, I built validation systems that reduced upstream data
            errors by over 90%, preventing defects before they entered the
            network.
          </p>
        </div>
      </div>

      {/* ── Metric strip: DEA ── */}
      <div className="bg-[#0b1b2b] py-12">
        <div className="max-w-4xl mx-auto px-6 flex flex-wrap justify-center gap-12 text-center">
          <div>
            <p className="text-3xl font-bold text-yellow-400">600+</p>
            <p className="text-xs text-gray-400 mt-1">Deep-Dive Analyses Led</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-white">1.5 → &lt;0.5</p>
            <p className="text-xs text-gray-400 mt-1">Basis Points (Target: 1)</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-white">90%+</p>
            <p className="text-xs text-gray-400 mt-1">Input Errors Prevented</p>
          </div>
        </div>
      </div>

      {/* ── Chapter 6: Data-Driven Decision Making ── */}
      <div className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs font-semibold tracking-[0.18em] uppercase text-gray-400 mb-3">
            Core Pillar
          </p>
          <h2 className="text-2xl font-bold mb-8">
            Data-Driven Decision Making
          </h2>
          <div className="space-y-5 text-[#334155] leading-relaxed">
            <p>
              A core pillar of my work has been enabling decision-making through
              data.
            </p>
            <p>
              I built real-time, drill-down dashboards that replaced static
              reporting — giving leaders visibility across shifts, sites, and
              regions, and enabling faster root cause identification.
            </p>
            <p>
              To support deep analysis, I leveraged SQL for large-scale data
              extraction — particularly for long-horizon analyses spanning 6+
              months — ensuring decisions were backed by complete and accurate
              datasets.
            </p>
            <p>
              A key focus area was delivery estimate accuracy, directly tied to
              customer promise reliability. Since 2024, I have led 600+
              deep-dive analyses, identifying systemic failure patterns and
              translating them into process changes. This drove performance from{" "}
              <strong className="text-[#0f172a]">
                1.5 basis points to under 0.5
              </strong>
              , significantly outperforming the target of 1.
            </p>
          </div>
        </div>
      </div>

      {/* ── Chapter 7: Embedding Change ── */}
      <div className="py-20">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs font-semibold tracking-[0.18em] uppercase text-gray-400 mb-3">
            Foundation
          </p>
          <h2 className="text-2xl font-bold mb-8">
            Embedding Change Into the Organization
          </h2>
          <div className="space-y-5 text-[#334155] leading-relaxed">
            <p>
              Alongside core initiatives, I built foundational systems to
              improve operational consistency — standardizing communication
              frameworks, creating centralized governance trackers for
              compliance visibility, and developing SharePoint-based systems
              that scaled from team-level usage to org-wide adoption.
            </p>
            <p>
              These ensured improvements were embedded into how the organization
              operates, not dependent on individual ownership.
            </p>
          </div>
        </div>
      </div>

      {/* ── Closing ── */}
      <div className="py-16 bg-[#0b1b2b] text-white">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-[#94a3b8] leading-relaxed mb-6">
            Across my time at Amazon, my role has evolved from managing
            operations to designing systems, influencing cross-functional
            decisions, and building scalable frameworks that reduce dependency
            on constant human intervention.
          </p>
          <p className="text-lg font-medium text-white">
            The work continues — with a consistent focus: identify where the
            system breaks, fix it at the root, and build it so it doesn't break
            the same way again.
          </p>
        </div>
      </div>

      {/* ── Back to home ── */}
      <div className="py-12 bg-[#0b1b2b] border-t border-white/10">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <Link
            to="/"
            className="text-sm font-semibold text-yellow-400 border border-yellow-400 rounded-lg px-6 py-3 hover:bg-yellow-400 hover:text-[#0b1b2b] transition inline-block"
          >
            ← Back to Home
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#0f172a] border-t border-white/10">
        <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Divyansh Ahuja. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <a href="https://linkedin.com/in/divyanshahuja" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition text-lg">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://github.com/DA2793" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition text-lg">
              <i className="fab fa-github"></i>
            </a>
            <a href="mailto:da.2793@yahoo.com" className="text-gray-400 hover:text-white transition text-lg">
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AmazonDetail;
