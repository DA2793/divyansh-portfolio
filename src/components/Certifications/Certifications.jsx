const Certifications = () => {
  return (
    <section id="certifications" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Training And Certificates</h2>
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-semibold text-blue-600">AutoCAD</h3>
                <p className="text-gray-600">CETPA Infotech Private Limited, Noida, India</p>
              </div>
              <span className="text-gray-600">Dec '13</span>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-semibold text-blue-600">Production and Bottling</h3>
                <p className="text-gray-600">Radico Khaitan Limited, Rampur, India</p>
              </div>
              <span className="text-gray-600">June '14</span>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-semibold text-blue-600">Assembly Line</h3>
                <p className="text-gray-600">International Tractors Limited, Hoshiarpur, India</p>
              </div>
              <span className="text-gray-600">June '15</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
