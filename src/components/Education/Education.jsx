const Education = () => {
  return (
    <section id="education" className="py-20">
      <div className="max-w-4xl mx-auto px-4">

        <h2 className="text-3xl font-bold text-center mb-12">
          Education
        </h2>

        <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition border border-gray-100">

          <div className="flex flex-col md:flex-row md:justify-between md:items-center">

            <div>
              <h3 className="text-xl font-semibold text-gray-900">
                Bachelor of Engineering
              </h3>

              <p className="text-gray-700">
                Mechanical Engineering
              </p>

              <p className="text-gray-600 text-sm">
                RTM Nagpur University, Nagpur, India
              </p>
            </div>

            <div className="mt-3 md:mt-0">
              <span className="text-gray-500 font-medium">
                2017
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Education;
