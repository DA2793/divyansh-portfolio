const Experience = () => {
  return (
    <section id="experience" className="py-20">
      <div className="max-w-5xl mx-auto px-4">

        <h2 className="text-3xl font-bold text-center mb-12">
          Work Experience
        </h2>

        <div className="space-y-12">

          {/* Amazon */}
          <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition">

            <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-3">
              <h3 className="text-xl font-semibold">
                Supply Chain Operations Manager
              </h3>
              <span className="text-gray-500">
                Sep 2021 – Present
              </span>
            </div>

            <h4 className="text-blue-600 font-medium mb-4">
              Amazon
            </h4>

            {/* Key Impact */}
            <div className="mb-4">
              <h5 className="font-semibold mb-2 text-gray-800">
                Key Impact:
              </h5>
              <ul className="text-gray-700 space-y-1">
                <li>• Delivered €40M+ in cost savings through network optimization and automation</li>
                <li>• Reduced manual effort by 90% through workflow automation</li>
                <li>• Led operations across Europe & North America logistics networks</li>
              </ul>
            </div>

            {/* Responsibilities */}
            <ul className="space-y-2 text-gray-600 text-sm leading-relaxed">
              <li>• Managed linehaul operations and network execution across global transportation systems</li>
              <li>• Led cross-functional programs focused on cost optimization and operational efficiency</li>
              <li>• Oversaw route execution, carrier operations, and service reliability</li>
              <li>• Managed teams of 20+ direct and 150+ extended members</li>
              <li>• Built automation tools (Tampermonkey, Excel Macros) improving efficiency and turnaround time</li>
              <li>• Delivered data-driven insights using SQL, Excel, and dashboards</li>
              <li>• Led WBR / MBR / QBR reviews and operational governance</li>
            </ul>

          </div>

          {/* IEnergizer */}
          <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition">

            <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-3">
              <h3 className="text-xl font-semibold">
                Assistant Manager – Operations
              </h3>
              <span className="text-gray-500">
                Sep 2015 – Sep 2021
              </span>
            </div>

            <h4 className="text-blue-600 font-medium mb-4">
              IEnergizer (Credit One Bank – US Credit Card Issuer)
            </h4>

            {/* Key Impact */}
            <div className="mb-4">
              <h5 className="font-semibold mb-2 text-gray-800">
                Key Impact:
              </h5>
              <ul className="text-gray-700 space-y-1">
                <li>• Achieved 99%+ quality and 95%+ CSAT in high-risk operations</li>
                <li>• Scaled fraud and credit protection operations with strong execution standards</li>
              </ul>
            </div>

            {/* Responsibilities */}
            <ul className="space-y-2 text-gray-600 text-sm leading-relaxed">
              <li>• Managed end-to-end service delivery across customer support, fraud risk, and credit protection operations</li>
              <li>• Led fraud investigation and escalation management workflows for high-risk cases</li>
              <li>• Improved performance visibility through structured reporting and dashboards</li>
              <li>• Designed and implemented SOPs and reporting frameworks to standardize processes</li>
              <li>• Collaborated with cross-functional stakeholders to resolve issues and improve outcomes</li>
              <li>• Led workforce planning, training, and performance management initiatives</li>
              <li>• Conducted root cause analysis to drive continuous improvement and operational stability</li>
            </ul>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;