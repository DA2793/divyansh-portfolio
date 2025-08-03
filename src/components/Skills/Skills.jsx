const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Product Management & Operations */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-blue-600">Product Management & Operations</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-600">
                <span className="mr-2">▹</span>Product Management
              </li>
              <li className="flex items-center text-gray-600">
                <span className="mr-2">▹</span>Project Management
              </li>
              <li className="flex items-center text-gray-600">
                <span className="mr-2">▹</span>Operations Management
              </li>
              <li className="flex items-center text-gray-600">
                <span className="mr-2">▹</span>Process Improvement
              </li>
              <li className="flex items-center text-gray-600">
                <span className="mr-2">▹</span>Supply Chain Operations
              </li>
            </ul>
          </div>

          {/* Technical Skills */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-blue-600">Technical Skills</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-600">
                <span className="mr-2">▹</span>AI-Driven Process Optimization
              </li>
              <li className="flex items-center text-gray-600">
                <span className="mr-2">▹</span>Automation (Tampermonkey, Macros)
              </li>
              <li className="flex items-center text-gray-600">
                <span className="mr-2">▹</span>Data Analysis & Reporting
              </li>
              <li className="flex items-center text-gray-600">
                <span className="mr-2">▹</span>QuickSight, Excel, SQL
              </li>
            </ul>
          </div>

          {/* Management Skills */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-blue-600">Management Skills</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-600">
                <span className="mr-2">▹</span>Stakeholder Management
              </li>
              <li className="flex items-center text-gray-600">
                <span className="mr-2">▹</span>Change Management
              </li>
              <li className="flex items-center text-gray-600">
                <span className="mr-2">▹</span>Cross-Functional Collaboration
              </li>
              <li className="flex items-center text-gray-600">
                <span className="mr-2">▹</span>Problem Solving & RCA
              </li>
              <li className="flex items-center text-gray-600">
                <span className="mr-2">▹</span>Escalation Handling
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
