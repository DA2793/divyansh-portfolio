const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Work History</h2>
        <div className="max-w-4xl mx-auto">
          {/* Amazon Experience */}
          <div className="mb-12">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-xl font-semibold">Supply Chain Operations Manager</h3>
              <span className="text-gray-600">Sep 2021 - Current</span>
            </div>
            <h4 className="text-blue-600 mb-4">Amazon</h4>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <span className="mr-2 mt-1">•</span>
                <span>Developed and implemented Java-based Amazon ROC HawkEye Tampermonkey script to automate case management across platforms, reducing manual efforts by 90% and achieving significant time savings.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1">•</span>
                <span>Created a Macros-based Excel report for utilization monitoring, reducing report generation time by 80%.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1">•</span>
                <span>Spearheaded AI-driven scheduling optimization projects, reducing transit time and ensuring SLA adherence.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1">•</span>
                <span>Managed a primary team of 20+ and a secondary team of 150+, driving operational efficiency through innovative solutions.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1">•</span>
                <span>Collaborated with cross-functional teams across Europe and North America to implement cost-reduction initiatives, leading to measurable savings.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1">•</span>
                <span>Delivered strategic reports using SQL and data visualization tools, providing actionable insights for stakeholders.</span>
              </li>
            </ul>
          </div>

          {/* IEnergizer Experience */}
          <div className="mb-12">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-xl font-semibold">Assistant Manager - Operations</h3>
              <span className="text-gray-600">Sep 2015 - Sep 2021</span>
            </div>
            <h4 className="text-blue-600 mb-4">IEnergizer</h4>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <span className="mr-2 mt-1">•</span>
                <span>Led the successful launch of multiple projects including High-Risk Fraud and Credit Protection, achieving 99% quality and 100% customer satisfaction.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1">•</span>
                <span>Managed high-severity escalation cases and collaborated with stakeholders for effective resolution.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1">•</span>
                <span>Developed training programs for new hires and established SOPs to ensure consistent performance.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1">•</span>
                <span>Coordinated with BI and MIS teams to produce detailed reports for management and stakeholders.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
