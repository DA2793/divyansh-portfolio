const Achievements = () => {
  return (
    <section id="achievements" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Achievements</h2>
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Amazon Achievements */}
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <div className="flex items-start gap-4">
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-blue-600 mb-2">
                  Manager of the Quarter - Amazon
                </h3>
                <p className="text-gray-600 mb-2">Q1, 2025</p>
                <p className="text-gray-700">
                  Awarded Manager of the Quarter during the Quarterly Townhall Meet for driving key 
                  process enhancements, including the successful launch of the Hawkeye visibility 
                  tool and the expansion of Commercial Carrier Lane automation to CORR and 
                  Gateway-to-SC lanes. These initiatives significantly improved operational 
                  efficiency and contributed to measurable headcount savings across the network.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <div className="flex items-start gap-4">
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-blue-600 mb-2">
                  Manager of the Quarter - Amazon
                </h3>
                <p className="text-gray-600 mb-2">Q1, 2024</p>
                <p className="text-gray-700">
                  Awarded Manager of the Quarter during Quarterly Townhall Meet for leading 
                  AI-driven cost and disruption reduction initiatives, saving ad hoc costs by 
                  €1.8M across the European Network, achieving measurable cost savings and 
                  operational efficiencies.
                </p>
              </div>
            </div>
          </div>

          {/* IEnergizer Achievement */}
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <div className="flex items-start gap-4">
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-blue-600 mb-2">
                  Global Supervisor of the Year - IEnergizer
                </h3>
                <p className="text-gray-600 mb-2">2020</p>
                <p className="text-gray-700">
                  Recognized as the Global Supervisor of the Year by Credit One Bank for driving 
                  outstanding performance from aligned team throughout pandemic impacted year globally.
                </p>
              </div>
            </div>
          </div>

          {/* Monthly Awards */}
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <h3 className="text-xl font-semibold text-blue-600 mb-4">Monthly Recognition</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold mb-2">Manager of the Month - Amazon</h4>
                <ul className="text-gray-600 space-y-1">
                  <li>• Jan '25</li>
                  <li>• Dec '24</li>
                  <li>• Sep '24</li>
                  <li>• Mar '24</li>
                  <li>• Jan '23</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Team Supervisor of the Month - IEnergizer</h4>
                <ul className="text-gray-600 space-y-1">
                  <li>• Aug '19</li>
                  <li>• May '18</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Additional Achievement */}
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <div className="flex items-start gap-4">
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-blue-600 mb-2">
                  Quality Champion of the Year - IEnergizer
                </h3>
                <p className="text-gray-600 mb-2">2016</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
