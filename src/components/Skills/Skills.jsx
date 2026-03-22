const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">

        <h2 className="text-3xl font-bold text-center mb-12">
          Core Capabilities
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Operations & Supply Chain */}
          <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-4 text-blue-600">
              Operations & Supply Chain
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li>▹ Global Logistics Operations</li>
              <li>▹ Linehaul & Transportation Management</li>
              <li>▹ Supply Chain Optimization</li>
              <li>▹ Demand Forecasting & Capacity Planning</li>
              <li>▹ Process Standardization & Improvement</li>
            </ul>
          </div>

          {/* Data & Automation */}
          <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-4 text-blue-600">
              Data & Automation
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li>▹ SQL, Advanced Excel, QuickSight</li>
              <li>▹ Workflow Automation (Scripts, Macros)</li>
              <li>▹ Data Analytics & Reporting</li>
              <li>▹ Dashboarding & Decision Support</li>
              <li>▹ AI-Driven Process Optimization</li>
            </ul>
          </div>

          {/* Leadership & Execution */}
          <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-4 text-blue-600">
              Leadership & Execution
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li>▹ Stakeholder & Program Leadership</li>
              <li>▹ Cross-Functional Collaboration</li>
              <li>▹ Performance Management & Governance</li>
              <li>▹ Root Cause Analysis (RCA)</li>
              <li>▹ Escalation & Incident Management</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;