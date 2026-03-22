const Achievements = () => {
  return (
    <section id="achievements" className="py-20">
      <div className="max-w-5xl mx-auto px-4">

        <h2 className="text-3xl font-bold text-center mb-12">
          Achievements & Recognition
        </h2>

        <div className="space-y-8">

          {/* Amazon 2025 */}
          <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition border border-gray-100">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">
              Manager of the Quarter – Amazon
            </h3>
            <p className="text-gray-500 mb-2">Q1, 2025</p>

            <ul className="text-gray-700 space-y-1 text-sm">
              <li>• Recognized for leading automation and visibility initiatives across logistics workflows</li>
              <li>• Improved operational efficiency, network visibility, and decision-making speed</li>
              <li>• Delivered measurable productivity gains and headcount optimization</li>
            </ul>
          </div>

          {/* Amazon 2024 */}
          <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition border border-gray-100">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">
              Manager of the Quarter – Amazon
            </h3>
            <p className="text-gray-500 mb-2">Q1, 2024</p>

            <ul className="text-gray-700 space-y-1 text-sm">
              <li>• Led AI-driven cost optimization initiatives across EU network</li>
              <li>• Delivered €1.8M in cost savings through disruption reduction strategies</li>
              <li>• Improved operational efficiency and decision-making capability</li>
            </ul>
          </div>

          {/* IEnergizer */}
          <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition border border-gray-100">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">
              Global Supervisor of the Year – IEnergizer
            </h3>
            <p className="text-gray-500 mb-2">2020</p>

            <ul className="text-gray-700 space-y-1 text-sm">
              <li>• Recognized for exceptional leadership and consistent high performance</li>
              <li>• Delivered strong operational outcomes during pandemic-driven challenges</li>
            </ul>
          </div>

          {/* Monthly Awards */}
          <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition border border-gray-100">
            <h3 className="text-xl font-semibold text-blue-600 mb-4">
              Manager of the Month – Amazon
            </h3>

            <p className="text-gray-700 text-sm">
              Sep '25, Jun '25, Jan '25, Dec '24, Sep '24, Mar '24, Jan '23
            </p>
          </div>

          {/* IEnergizer Monthly */}
          <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition border border-gray-100">
            <h3 className="text-xl font-semibold text-blue-600 mb-4">
              Team Supervisor of the Month – IEnergizer
            </h3>

            <p className="text-gray-700 text-sm">
              Aug '19, May '18
            </p>
          </div>

          {/* Additional */}
          <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition border border-gray-100">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">
              Quality Champion of the Year – IEnergizer
            </h3>
            <p className="text-gray-500 text-sm">2016</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Achievements;