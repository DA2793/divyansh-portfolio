const Certifications = () => {
  return (
    <section id="certifications" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">

        <h2 className="text-3xl font-bold text-center mb-12">
          Certifications & Training
        </h2>

        <div className="space-y-6">

          <div className="bg-white p-5 rounded-2xl shadow-sm hover:shadow-md transition border border-gray-100 flex justify-between items-center">
            <div>
              <h3 className="text-lg font-semibold text-blue-600">
                AutoCAD
              </h3>
              <p className="text-gray-600 text-sm">
                CETPA Infotech, Noida
              </p>
            </div>
            <span className="text-gray-500 text-sm">
              Dec 2013
            </span>
          </div>

          <div className="bg-white p-5 rounded-2xl shadow-sm hover:shadow-md transition border border-gray-100 flex justify-between items-center">
            <div>
              <h3 className="text-lg font-semibold text-blue-600">
                Production & Bottling
              </h3>
              <p className="text-gray-600 text-sm">
                Radico Khaitan Ltd., Rampur
              </p>
            </div>
            <span className="text-gray-500 text-sm">
              Jun 2014
            </span>
          </div>

          <div className="bg-white p-5 rounded-2xl shadow-sm hover:shadow-md transition border border-gray-100 flex justify-between items-center">
            <div>
              <h3 className="text-lg font-semibold text-blue-600">
                Assembly Line Operations
              </h3>
              <p className="text-gray-600 text-sm">
                International Tractors Ltd., Hoshiarpur
              </p>
            </div>
            <span className="text-gray-500 text-sm">
              Jun 2015
            </span>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Certifications;
