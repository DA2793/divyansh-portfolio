const Education = () => {
  return (
    <section id="education" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Education</h2>
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Bachelor of Engineering</h3>
                <p className="text-lg text-gray-600">Mechanical Engineering</p>
                <p className="text-gray-600">RTM Nagpur University - Nagpur, India</p>
              </div>
              <div className="mt-2 md:mt-0">
                <span className="text-gray-600 font-medium">2017</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
