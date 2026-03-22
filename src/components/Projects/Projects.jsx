const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">

        <h2 className="text-3xl font-bold text-center mb-12">
          Key Projects & Impact
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* QuickSight Dashboard */}
          <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-blue-600 mb-3">
              Centralized Dashboard & Reporting Automation
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              <strong>Problem:</strong> High manual effort and fragmented reporting across teams.<br />
              <strong>Action:</strong> Designed and implemented centralized QuickSight dashboards with automated data pipelines.<br />
              <strong>Impact:</strong> Reduced manual effort by 95% and significantly improved data visibility and decision-making speed.
            </p>
          </div>

          {/* Cost Aware Scheduling */}
          <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-blue-600 mb-3">
              AI-Driven Cost Optimization (EU Network)
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              <strong>Problem:</strong> High ad hoc transportation costs and inefficient scheduling decisions.<br />
              <strong>Action:</strong> Implemented cost-aware, AI-driven scheduling strategies across the European Middle Mile network.<br />
              <strong>Impact:</strong> Delivered €1.8M in cost savings while improving operational efficiency.
            </p>
          </div>

          {/* HawkEye Automation */}
          <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-blue-600 mb-3">
              Case Management Automation (HawkEye)
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              <strong>Problem:</strong> Manual case handling causing delays and inconsistencies.<br />
              <strong>Action:</strong> Developed Tampermonkey-based automation for case management workflows.<br />
              <strong>Impact:</strong> Reduced manual effort by 90% and improved turnaround time and accuracy.
            </p>
          </div>

          {/* Carrier Automation */}
          <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-blue-600 mb-3">
              Carrier Cancellation Automation
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              <strong>Problem:</strong> High manual intervention in carrier cancellations impacting efficiency.<br />
              <strong>Action:</strong> Built automation scripts to streamline cancellation workflows.<br />
              <strong>Impact:</strong> Automated 95% of cancellations, reducing turnaround time and manual workload.
            </p>
          </div>

          {/* Cost & Disruption */}
          <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-blue-600 mb-3">
              Network Disruption & Cost Reduction
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              <strong>Problem:</strong> Frequent operational disruptions impacting cost and service levels.<br />
              <strong>Action:</strong> Conducted root cause analysis and implemented corrective actions with stakeholders.<br />
              <strong>Impact:</strong> Reduced disruptions and improved overall network efficiency and reliability.
            </p>
          </div>

          {/* EMS */}
          <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-blue-600 mb-3">
              Employee Performance Management System
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              <strong>Problem:</strong> Inconsistent performance evaluation and lack of visibility.<br />
              <strong>Action:</strong> Built a standardized SharePoint-based tracking system with structured metrics and dashboards.<br />
              <strong>Impact:</strong> Improved evaluation consistency by 30% and enhanced performance transparency.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Projects;
