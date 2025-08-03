const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-gray-600 leading-relaxed mb-6">
            Results-driven Supply Chain Operations Manager with 10 years of experience in supply chain
            management, logistics, and customer service. Proven track record in driving operational 
            excellence, automating processes, and fostering cross-functional collaboration.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            Skilled in leading cross-functional teams, executing strategic initiatives, and consistently 
            achieving impactful results in fast-paced environments. Proficient in stakeholder management, 
            developing automation tools, and mentoring teams to deliver measurable outcomes that lead to 
            substantial cost savings and operational enhancements.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Core Competencies</h3>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-600">
                  <span className="mr-2">▹</span>Product & Project Management
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="mr-2">▹</span>Operations Management
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="mr-2">▹</span>Process Improvement
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="mr-2">▹</span>AI-Driven Process Optimization
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Technical Skills</h3>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-600">
                  <span className="mr-2">▹</span>Automation (Tampermonkey, Macros)
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="mr-2">▹</span>Data Analysis & Reporting
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="mr-2">▹</span>QuickSight, Excel, SQL
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="mr-2">▹</span>Supply Chain Operations
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
