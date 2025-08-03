const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Projects Handled</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* QuickSight Dashboard */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-blue-600 mb-3">
              QuickSight Dashboard Development
            </h3>
            <p className="text-gray-600 mb-4">
              Designed and implemented multiple centralized QuickSight dashboards, optimizing data 
              extraction processes and achieving a 95% reduction in manual effort.
            </p>
          </div>

          {/* Cost Aware Scheduling */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-blue-600 mb-3">
              Cost Aware Reactive Scheduling
            </h3>
            <p className="text-gray-600 mb-4">
              Implemented AI-driven cost reduction in the European Middle Mile Transportation 
              Network, optimizing surface transportation.
            </p>
          </div>

          {/* HawkEye Automation */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-blue-600 mb-3">
              Amazon ROC HawkEye Automation
            </h3>
            <p className="text-gray-600 mb-4">
              Automated case management using Tampermonkey, reducing manual errors and delays by 90%.
            </p>
          </div>

          {/* Commercial Carrier Automation */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-blue-600 mb-3">
              Commercial Carrier Cancellation Automation
            </h3>
            <p className="text-gray-600 mb-4">
              Automated 95% of carrier cancellations using a custom script, reducing manual effort 
              and turnaround time.
            </p>
          </div>

          {/* Cost and Disruption Reduction */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-blue-600 mb-3">
              Cost and Disruption Reduction
            </h3>
            <p className="text-gray-600 mb-4">
              Conducted root cause analysis to reduce operational disruptions and collaborated with 
              stakeholders for successful corrective actions.
            </p>
          </div>

          {/* Employee Management System */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-blue-600 mb-3">
              Employee Management System
            </h3>
            <p className="text-gray-600 mb-4">
              Implemented a standardized employee performance tracking system (EMS) that reduced 
              evaluation inconsistencies by 30% through categorized behavioral/operational metrics 
              and real-time dashboards.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
