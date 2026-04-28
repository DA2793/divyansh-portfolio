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
              { value: "$11M+", label: "Cost Savings (Automation)" },
              { value: "€1.8M", label: "Network Optimization" },
              { value: "90%+", label: "Manual Effort Reduced" },
              { value: "Gen AI", label: "Driven Efficiency Programs" },
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
              environment into a live transportation network where every
              decision directly influenced cost, speed, and customer experience.
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
            2023 – 2024
          </p>
          <h2 className="text-2xl font-bold mb-8">
            Uncovering Hidden Cost Leakage
          </h2>
          <div className="space-y-5 text-[#334155] leading-relaxed">
            <p>
              One of the earliest patterns I identified was a recurring loop —
              ad hoc transportation requests being created, cancelled, and
              recreated — driving hidden cost leakage and operational
              instability.
            </p>
            <p>
              Data from 2023 revealed that over 50% of ad hoc bids triggered by
              capacity threshold breaches were getting cancelled. Out of 111,053
              such bids, over 55,000 were cancelled — a pattern that was
              bleeding cost and destabilizing the network.
            </p>
            <p>
              I built a structured analysis framework to diagnose the root
              cause: capacity thresholds were misaligned. High-impact lanes had
              thresholds set too low (triggering unnecessary ad hocs), while
              last-minute request lanes had thresholds too high (causing
              resource strain and delivery accuracy impact).
            </p>
            <p>
              I partnered with teams across network operations, capacity
              planning, programs, and end-to-end execution to propose a
              two-pronged threshold adjustment — elevating thresholds for
              high-impact lanes and lowering them for last-minute requests.
            </p>
            <p>
              The results were significant: cancellation-driven churn dropped
              from{" "}
              <strong className="text-[#0f172a]">63% to 22%</strong>,
              capacity-triggered ad hocs reduced by{" "}
              <strong className="text-[#0f172a]">37%</strong>, and the
              initiative delivered{" "}
              <strong className="text-[#0f172a]">
                €1.8M in annualized cost savings
              </strong>{" "}
              — a 63% reduction from 2023 ad hoc costs.
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

      {/* ── Metric strip: Cost Leakage ── */}
      <div className="bg-[#0b1b2b] py-12">
        <div className="max-w-4xl mx-auto px-6 flex flex-wrap justify-center gap-12 text-center">
          <div>
            <p className="text-3xl font-bold text-yellow-400">63% → 22%</p>
            <p className="text-xs text-gray-400 mt-1">Cancellation Churn</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-white">37%</p>
            <p className="text-xs text-gray-400 mt-1">Fewer Capacity-Triggered Ad Hocs</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-white">€1.8M</p>
            <p className="text-xs text-gray-400 mt-1">Annualized Savings</p>
          </div>
        </div>
      </div>

      {/* ── Chapter 3: Building Tools ── */}
      <div className="py-20">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs font-semibold tracking-[0.18em] uppercase text-gray-400 mb-3">
            Tooling
          </p>
          <h2 className="text-2xl font-bold mb-8">
            Building Tools That Changed How the Team Operates
          </h2>
          <div className="space-y-5 text-[#334155] leading-relaxed">
            <p>
              A consistent pattern across daily operations was manual validation
              slowing execution and introducing avoidable errors — scheduling
              mismatches, incorrect driver and equipment types, and lane
              configuration errors across multiple operational portals.
            </p>
            <p>
              I built Hawkeye — a browser-based automation tool that introduced
              real-time validation checks and lane-specific alerts across the
              team's core scheduling and fleet management systems. The script
              reduced submission errors by over 90% and worked across multiple
              portals with minimal onboarding.
            </p>
            <p>
              Before Hawkeye, the team had 35+ delivery accuracy incidents in 19
              weeks, impacting ~40,000 packages. After launch:{" "}
              <strong className="text-[#0f172a]">
                5 incidents, ~5,000 packages
              </strong>{" "}
              — an 87% reduction, reaching 95% improvement year-to-date.
            </p>
          </div>
        </div>
      </div>

      {/* ── Chapter 4: Moving Upstream ── */}
      <div className="py-20 bg-white">
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
              cancellations and cost inefficiencies across the European network.
            </p>
            <p className="text-lg font-medium text-[#0f172a] border-l-2 border-[#0f172a] pl-5 my-8">
              This required alignment beyond operations.
            </p>
            <p>
              I partnered with the Programs team to influence how capacity
              decisions were made at a network level — reshaping threshold
              definitions, improving planning accuracy, and driving operational
              stability across the network.
            </p>
            <p>
              This marked a shift from improving execution within a team to
              shaping how the network itself operates.
            </p>
          </div>
        </div>
      </div>

      {/* ── Chapter 5: Redesigning Performance ── */}
      <div className="py-20">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs font-semibold tracking-[0.18em] uppercase text-gray-400 mb-3">
            2024 – 2025
          </p>
          <h2 className="text-2xl font-bold mb-8">
            Redesigning How Performance Is Measured
          </h2>
          <div className="space-y-5 text-[#334155] leading-relaxed">
            <p>
              In parallel, I identified a fundamental problem in how the
              organization tracked and evaluated associate performance.
            </p>
            <p>
              The existing Error Management System (EMS) conflated
              performance-related markdowns and behavioral callouts in the same
              form — meaning an associate's scorecard could be negatively
              impacted by behavioral entries that had nothing to do with their
              actual performance. Non-impactful entries like queue priority
              violations and duplicate case handling were unfairly docking
              scores.
            </p>
            <p>
              Manager handovers were painful — new managers had to download and
              sift through entire EMS histories. And as entries grew, the data
              files became increasingly cumbersome.
            </p>
            <p>
              I designed and launched EMS 2.0 — restructuring the system into
              distinct Performance and Behaviour categories with specific
              subcategories, replacing the email-based rebuttal process with a
              structured ticketing system, and segregating non-impactful entries
              so they no longer affected scorecards.
            </p>
            <p>
              Phase 1 launched at team level in 2024. The pilot showed a{" "}
              <strong className="text-[#0f172a]">
                20% reduction in manual tracking efforts
              </strong>{" "}
              and significantly fairer evaluations. Recognizing its broader
              impact, I drove alignment across teams and senior leadership to
              scale EMS 2.0 into an org-wide framework in 2025 — with our
              team's implementation serving as the blueprint for the entire
              organization.
            </p>
            <p>
              I also built a QuickSight dashboard for EMS data visualization,
              giving managers a centralized hub for tracking trends, identifying
              patterns, and making data-backed decisions.
            </p>
          </div>
        </div>
      </div>

      {/* ── Metric strip: Hawkeye + EMS ── */}
      <div className="bg-[#0b1b2b] py-12">
        <div className="max-w-4xl mx-auto px-6 flex flex-wrap justify-center gap-12 text-center">
          <div>
            <p className="text-3xl font-bold text-yellow-400">90%+</p>
            <p className="text-xs text-gray-400 mt-1">Submission Errors Reduced</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-white">87%</p>
            <p className="text-xs text-gray-400 mt-1">Fewer Delivery Accuracy Incidents</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-white">20%</p>
            <p className="text-xs text-gray-400 mt-1">Manual Tracking Effort Reduced</p>
          </div>
        </div>
      </div>

      {/* ── Chapter 6: Automation at Scale ── */}
      <div className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs font-semibold tracking-[0.18em] uppercase text-gray-400 mb-3">
            2025
          </p>
          <h2 className="text-2xl font-bold mb-8">
            Automation at Scale
          </h2>
          <div className="space-y-5 text-[#334155] leading-relaxed">
            <p>
              By 2025, my focus shifted toward building automation layers,
              leveraging Generative AI, and creating scalable operational
              infrastructure.
            </p>
            <p>
              The first major initiative was automating commercial carrier
              cancellation cases. The data was clear: 95% of cases didn't
              require validation but were being handled manually — consuming
              ~992 man-hours per week. In 2023 alone, over 51,000 cases were
              processed manually.
            </p>
            <p>
              I built and tested the automation script, then deployed it across
              all applicable lanes and shifts. The automation rate reached 75%+,
              saving over 3,500 man-hours year-to-date.
            </p>
            <p>
              I then scaled the same automation framework to additional lane
              types — corridor flows and gateway operations — saving ~1.4
              full-time roles per week across the combined workflows.
            </p>
            <p>
              In parallel, I built Jarvis — a Python-based automation for ad hoc
              bid creation. Manual bid creation was causing inconsistencies in
              transit time, loading time, and driver setup. Jarvis standardized
              the workflow across all case categories by auto-launching
              browsers, pre-populating key fields, and auto-copying case
              annotations. Piloted in Week 25, it was adopted across all three
              shifts by Week 31.
            </p>
            <p>
              The largest automation impact came from the Truck Scheduling
              optimization script — built for the Luxembourg Control Tower to
              address recurring sourcing capacity challenges. The initiative
              delivered an estimated{" "}
              <strong className="text-[#0f172a]">
                $11 million in savings
              </strong>
              , validated by the Finance team.
            </p>
          </div>

          {/* Impact cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            <div className="bg-[#f7f6f2] rounded-2xl p-5 border border-gray-100 text-center">
              <p className="text-xl font-bold text-[#0f172a]">~€11M</p>
              <p className="text-xs text-gray-400 mt-1">Annualized Cost Savings</p>
            </div>
            <div className="bg-[#f7f6f2] rounded-2xl p-5 border border-gray-100 text-center">
              <p className="text-xl font-bold text-[#0f172a]">1.4 FTE</p>
              <p className="text-xs text-gray-400 mt-1">Effort Saved Weekly</p>
            </div>
            <div className="bg-[#f7f6f2] rounded-2xl p-5 border border-gray-100 text-center">
              <p className="text-xl font-bold text-[#0f172a]">3,500+</p>
              <p className="text-xs text-gray-400 mt-1">Man-Hours Saved YTD</p>
            </div>
          </div>
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

      {/* ── Chapter 7: Data-Driven Decision Making ── */}
      <div className="py-20">
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
              I built real-time, drill-down QuickSight dashboards for both
              performance management and delivery accuracy — replacing static
              reporting with systems that gave leaders visibility across shifts,
              sites, and regions, and enabled faster root cause identification.
            </p>
            <p>
              To support deep analysis, I leveraged SQL for large-scale data
              extraction — particularly for long-horizon analyses spanning 6+
              months — ensuring decisions were backed by complete and accurate
              datasets.
            </p>
            <p>
              I also leveraged Generative AI to accelerate root cause analysis,
              optimization modelling, and automation design — using it to
              surface network insights, inform workflow design, and enhance
              decision support across EU and NA middle-mile operations.
            </p>
            <p>
              A key focus area was delivery estimate accuracy, directly tied to
              customer promise reliability. Since 2024, I have led 600+
              deep-dive analyses, identifying systemic failure patterns and
              translating them into process changes. This drove performance
              from{" "}
              <strong className="text-[#0f172a]">
                1.5 basis points to under 0.5
              </strong>
              , significantly outperforming the target of 1.
            </p>
          </div>
        </div>
      </div>

      {/* ── Chapter 8: Embedding Change ── */}
      <div className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs font-semibold tracking-[0.18em] uppercase text-gray-400 mb-3">
            Foundation
          </p>
          <h2 className="text-2xl font-bold mb-8">
            Embedding Change Into the Organization
          </h2>
          <div className="space-y-5 text-[#334155] leading-relaxed">
            <p>
              Alongside core initiatives, I built foundational systems to ensure
              improvements scaled beyond individuals.
            </p>
            <p>
              I created a standardized communication framework for all project
              launches across the organization — clearly defining Problem
              Statement, Launch Description, Impact, Go-Live Date, Required
              Actions, and Stakeholder Ownership. Rolled out in Week 31, all
              future launches originating from Operations now follow this
              structure by default.
            </p>
            <p>
              I also built a centralized exception tracking system — a unified
              SharePoint repository consolidating all non-medical,
              manager-approved work-from-home exceptions across the
              organization. Launched in September, it improved compliance,
              enhanced visibility for leadership, and streamlined reporting.
            </p>
            <p>
              These systems ensured improvements were embedded into how the
              organization operates, not dependent on individual ownership.
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
          <p className="text-xl font-bold text-white">
            Don't fix the output. Fix the system that creates it.
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
