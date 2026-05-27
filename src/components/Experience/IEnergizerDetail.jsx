import { Link } from "react-router-dom";
import { useEffect } from "react";
import Footer from "../Footer/Footer";

const IEnergizerDetail = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Divyansh Ahuja – iEnergizer Experience";
    return () => { document.title = "Divyansh Ahuja – Operations & Supply Chain Leader"; };
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
              src="/ienergizer.png"
              alt="iEnergizer"
              className="w-12 h-12 object-contain rounded-lg"
            />
            <div>
              <h1 className="text-3xl md:text-4xl font-bold">iEnergizer</h1>
              <p className="text-gray-300 text-sm mt-1">
                Credit One Bank – US Credit Card Issuer
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-6 text-sm text-gray-400 mb-6">
            <span>September 2015 – September 2021</span>
            <span>Noida, Uttar Pradesh</span>
          </div>

          {/* Role progression */}
          <div className="flex flex-wrap gap-3">
            {[
              "Senior Customer Service Executive",
              "Operations Team Lead",
              "Assistant Manager – Operations",
            ].map((role, i) => (
              <span
                key={role}
                className={`text-xs px-3 py-1.5 rounded-full border ${
                  i === 2
                    ? "border-yellow-400 text-yellow-400"
                    : "border-white/20 text-gray-400"
                }`}
              >
                {role}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── Chapter 1: Starting on the Frontlines ── */}
      <div className="py-20">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs font-semibold tracking-[0.18em] uppercase text-gray-400 mb-3">
            2015 – 2016
          </p>
          <h2 className="text-2xl font-bold mb-8">
            Starting on the Frontlines
          </h2>
          <div className="space-y-5 text-[#334155] leading-relaxed">
            <p>
              I began my journey at iEnergizer in September 2015, on the
              frontlines — answering customer calls.
            </p>
            <p>
              The job was simple: resolve queries, follow process, meet metrics.
            </p>
            <p>
              But what stood out wasn't just what we were doing — it was how the
              system behaved. Where did inefficiencies hide when everything
              looked like it was working?
            </p>
            <p>
              That curiosity shaped how I approached even the most routine
              interactions.
            </p>
            <p>
              By the end of 2016, I was recognized as{" "}
              <strong className="text-[#0f172a]">
                Quality Champion of the Year
              </strong>{" "}
              — but more importantly, I had started seeing operations not as
              tasks, but as systems.
            </p>
          </div>
        </div>
      </div>

      {/* ── Chapter 2: Learning to Influence ── */}
      <div className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs font-semibold tracking-[0.18em] uppercase text-gray-400 mb-3">
            Early 2017
          </p>
          <h2 className="text-2xl font-bold mb-8">
            Learning to Influence Without Authority
          </h2>
          <div className="space-y-5 text-[#334155] leading-relaxed">
            <p>
              I was selected to train new hires and drive process alignment
              across batches. This was my first real shift — from delivering
              results myself to enabling others to do so.
            </p>
            <p className="text-lg font-medium text-[#0f172a] border-l-2 border-[#0f172a] pl-5 my-8">
              Leadership doesn't start with a title. It starts when your impact
              is no longer limited to your own output.
            </p>
            <p>
              Different people, different learning curves, same performance
              expectations. This phase sharpened my ability to simplify
              complexity and build consistency across teams.
            </p>
          </div>
        </div>
      </div>

      {/* ── Chapter 3: Owning Performance ── */}
      <div className="py-20">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs font-semibold tracking-[0.18em] uppercase text-gray-400 mb-3">
            July 2017
          </p>
          <h2 className="text-2xl font-bold mb-8">
            Owning Performance, Not Just Tasks
          </h2>
          <div className="space-y-5 text-[#334155] leading-relaxed">
            <p>
              I stepped into a formal leadership role as{" "}
              <strong className="text-[#0f172a]">Operations Team Lead</strong>,
              managing a team of ~30 associates.
            </p>
            <p>
              The equation changed. It wasn't about how well I performed — it
              was about how well the team performed on its worst day.
            </p>
            <p>
              I owned performance metrics, escalations, customer-critical
              scenarios, and quality benchmarks.
            </p>
            <p className="text-lg font-medium text-[#0f172a] border-l-2 border-[#0f172a] pl-5 my-8">
              Operations is not about stability — it's about predictability
              under pressure. Anyone can run a process when things go right.
              Leadership is tested when they don't.
            </p>
          </div>
        </div>
      </div>

      {/* ── Metric strip: Scale ── */}
      <div className="bg-[#0b1b2b] py-12">
        <div className="max-w-4xl mx-auto px-6 flex flex-wrap justify-center gap-12 text-center">
          <div>
            <p className="text-3xl font-bold text-white">~30</p>
            <p className="text-xs text-gray-400 mt-1">Team Members Led</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-white">300+</p>
            <p className="text-xs text-gray-400 mt-1">Associates Rostered Weekly</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-yellow-400">Quality Champion</p>
            <p className="text-xs text-gray-400 mt-1">of the Year · 2016</p>
          </div>
        </div>
      </div>

      {/* ── Chapter 4: Thinking in Scale ── */}
      <div className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs font-semibold tracking-[0.18em] uppercase text-gray-400 mb-3">
            2018
          </p>
          <h2 className="text-2xl font-bold mb-8">
            Thinking in Scale: From Teams to Systems
          </h2>
          <div className="space-y-5 text-[#334155] leading-relaxed">
            <p>
              My scope expanded from team-level ownership to process-level
              thinking.
            </p>
            <p>
              I was entrusted with building weekly workforce rosters for a{" "}
              <strong className="text-[#0f172a]">
                300+ associate voice process
              </strong>
              , working closely with WFM and MIS teams.
            </p>
            <p>
              This wasn't scheduling — it was decision-making under constraints:
              forecast vs reality, availability vs demand, cost vs service
              levels. Every roster was a trade-off.
            </p>
            <p>
              I moved from managing people to designing systems that manage
              outcomes.
            </p>
          </div>
        </div>
      </div>

      {/* ── Chapter 5: Building Operations ── */}
      <div className="py-20">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs font-semibold tracking-[0.18em] uppercase text-gray-400 mb-3">
            September 2019
          </p>
          <h2 className="text-2xl font-bold mb-8">
            From Running Operations to Building Them
          </h2>
          <div className="space-y-5 text-[#334155] leading-relaxed">
            <p>
              I was promoted to{" "}
              <strong className="text-[#0f172a]">
                Assistant Manager – Operations
              </strong>
              .
            </p>
            <p>
              The scope expanded significantly — I now managed a team of 30+
              tenured associates while mentoring a Team Lead who ran his own
              team of 15–20 associates. The expectation was no longer to run
              what existed — but to build what didn't.
            </p>
            <p>I led the launch and scale-up of two critical programs:</p>
          </div>

          {/* Program cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition">
              <h4 className="text-sm font-bold text-[#0f172a] mb-2">
                High Risk Fraud (HRF)
              </h4>
              <p className="text-sm text-[#475569] leading-relaxed">
                A proactive system to detect and prevent fraudulent credit card
                transactions by identifying patterns like unusual usage,
                unsecured POS activity, and unverified merchants.
                <br /><br />
                Built the program from scratch — wrote SOPs, designed
                train-the-trainer programs for scalable onboarding, and drove
                incentive policy design through stakeholder alignment and
                approval.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition">
              <h4 className="text-sm font-bold text-[#0f172a] mb-2">
                Credit Protection
              </h4>
              <p className="text-sm text-[#475569] leading-relaxed">
                An insurance-linked offering to protect customers against card
                theft, loss, and unforeseen life events.
                <br /><br />
                Led end-to-end program design — SOP creation, trainer
                enablement, and incentive policy structuring. Achieved{" "}
                <strong>99% quality</strong> and{" "}
                <strong>100% customer satisfaction</strong> through disciplined
                monitoring and performance governance.
              </p>
            </div>
          </div>

          <p className="text-[#334155] leading-relaxed mt-8">
            These required defining SOPs from scratch, aligning multiple
            stakeholders, training teams at speed, and stabilizing performance
            under real customer impact. This was my transition from execution to
            creation.
          </p>
        </div>
      </div>

      {/* ── Chapter 6: Operating Through Uncertainty ── */}
      <div className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs font-semibold tracking-[0.18em] uppercase text-gray-400 mb-3">
            2020
          </p>
          <h2 className="text-2xl font-bold mb-8">
            Operating Through Uncertainty
          </h2>
          <div className="space-y-5 text-[#334155] leading-relaxed">
            <p>
              Then came COVID — and with it, a complete disruption of how
              operations functioned. Distributed teams. Limited visibility.
              Inconsistent tracking systems.
            </p>
            <p>
              I stepped beyond my defined scope and partnered with MIS, Business
              Analytics, and WFM teams to build data visibility from the ground
              up — attendance tracking, login adherence, shrinkage monitoring,
              forecast vs actual performance.
            </p>
            <p>
              The rostering responsibility also expanded dramatically. What
              started as scheduling for a 300+ associate voice process grew into
              owning rosters across the entire organization — voice, back
              office, chat, fraud teams, and leadership — bringing the total to{" "}
              <strong className="text-[#0f172a]">
                1,500+ employees on a weekly basis
              </strong>
              .
            </p>
            <p>But everything was manual. So I rebuilt it.</p>
            <p>
              Using Excel Macros and VBA, I automated reporting workflows
              end-to-end — turning hours of manual effort into structured,
              reliable, near real-time insights.
            </p>
            <p className="text-lg font-medium text-[#0f172a] border-l-2 border-[#0f172a] pl-5 my-8">
              The goal wasn't to work harder during a crisis. It was to build
              systems that made working smarter unavoidable.
            </p>
          </div>
        </div>
      </div>

      {/* ── Metric strip: Impact ── */}
      <div className="bg-[#0b1b2b] py-12">
        <div className="max-w-4xl mx-auto px-6 flex flex-wrap justify-center gap-12 text-center">
          <div>
            <p className="text-3xl font-bold text-yellow-400">300+</p>
            <p className="text-xs text-gray-400 mt-1">→ 1,500+ Employees Rostered</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-white">99%+</p>
            <p className="text-xs text-gray-400 mt-1">Quality Score</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-white">95%+</p>
            <p className="text-xs text-gray-400 mt-1">CSAT Achieved</p>
          </div>
        </div>
      </div>

      {/* ── Chapter 7: Driving Outcomes ── */}
      <div className="py-20">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs font-semibold tracking-[0.18em] uppercase text-gray-400 mb-3">
            2020 – 2021
          </p>
          <h2 className="text-2xl font-bold mb-8">
            Driving Outcomes That Sustain Under Pressure
          </h2>
          <div className="space-y-5 text-[#334155] leading-relaxed">
            <p>
              Even in a pandemic-impacted environment, the systems held: 99%+
              quality, 95%+ CSAT, stable performance across processes.
            </p>
            <p>
              The operation didn't depend on constant firefighting. It became
              predictable. Scalable. Resilient.
            </p>
            <p>
              This culminated in being recognized as{" "}
              <strong className="text-[#0f172a]">
                Global Supervisor of the Year
              </strong>{" "}
              — awarded by Credit One Bank for driving outstanding performance
              throughout the pandemic year.
            </p>
            <p>
              The recognition wasn't for isolated performance. It was for
              building systems that reduced dependency, driving initiatives that
              scaled beyond individuals, and creating consistency in
              environments designed for disruption.
            </p>
          </div>
        </div>
      </div>

      {/* ── Back to home ── */}
      <div className="py-12 bg-[#0b1b2b]">
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
      <Footer />
    </div>
  );
};

export default IEnergizerDetail;
