const About = () => {
  return (
    <section id="about" className="py-20 bg-white rounded-2xl shadow-sm">
      <div className="max-w-5xl mx-auto px-4">

        <h2 className="text-3xl font-bold text-center mb-12">
          About Me
        </h2>

        <div className="max-w-3xl mx-auto text-center">

          {/* Main Description */}
          <p className="text-gray-700 leading-relaxed mb-6 text-lg">
            I am an Operations and Supply Chain Leader with 10+ years of experience 
            managing large-scale logistics and transportation networks across global 
            organizations, including Amazon. I specialize in driving operational efficiency 
            through network optimization, automation, and data-driven decision-making.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6 text-lg">
            My work has delivered €40M+ in measurable business impact across European 
            and North American logistics networks. I focus on building scalable systems 
            that improve service reliability, reduce costs, and enhance execution across 
            complex supply chain environments.
          </p>

          <p className="text-gray-700 leading-relaxed text-lg">
            With strong expertise in operational governance, performance management, and 
            cross-functional leadership, I have led multi-layered teams and driven 
            transformation initiatives that significantly improve efficiency and decision-making speed.
          </p>

        </div>

        {/* Skills / Competencies */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">

          {/* Core Competencies */}
          <div className="bg-gray-50 p-6 rounded-xl hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-4">
              Core Competencies
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li>▹ Global Logistics & Transportation Operations</li>
              <li>▹ Supply Chain & Network Optimization</li>
              <li>▹ Program & Stakeholder Leadership</li>
              <li>▹ Operational Governance (WBR / MBR / QBR)</li>
              <li>▹ Demand Forecasting & Capacity Planning</li>
            </ul>
          </div>

          {/* Technical Skills */}
          <div className="bg-gray-50 p-6 rounded-xl hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-4">
              Data & Automation
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li>▹ SQL, Advanced Excel, QuickSight</li>
              <li>▹ Workflow Automation & Process Optimization</li>
              <li>▹ Data Analytics & Reporting</li>
              <li>▹ Dashboarding & Decision Support Systems</li>
              <li>▹ Root Cause Analysis & Continuous Improvement</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
