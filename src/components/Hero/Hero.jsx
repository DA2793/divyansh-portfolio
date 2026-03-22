import { useState } from 'react';

const Hero = () => {
  const [imageError, setImageError] = useState(false);

  return (
    <section
      id="home"
      className="min-h-[80vh] flex items-center justify-center px-4 bg-gradient-to-br from-blue-50 to-white pt-20"
    >
      <div className="max-w-5xl mx-auto text-center">

        {/* Profile Image */}
        <div className="mb-8 flex justify-center">
          <div className="relative inline-block">
            {!imageError ? (
              <img
                src="/profile-pic.jpg"
                alt="Divyansh Ahuja"
                className="w-40 h-40 rounded-full object-cover border-4 border-white shadow-lg hover:scale-105 transition-transform duration-300"
                onError={() => setImageError(true)}
              />
            ) : (
              <div className="w-40 h-40 rounded-full bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500 text-2xl font-bold">DA</span>
              </div>
            )}

            {/* CV Download */}
            <div className="absolute -bottom-2 -right-2">
              <a
                href="/Divyansh_Ahuja_CV.pdf"
                download
                className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition shadow-lg hover:scale-110"
              >
                <i className="fas fa-download text-lg"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Name */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
          Divyansh Ahuja
        </h1>

        {/* Title */}
        <h2 className="text-xl md:text-2xl text-gray-600 mb-4">
          Operations & Supply Chain Leader
        </h2>

        {/* Value Proposition */}
        <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-6">
          Driving €40M+ business impact through logistics optimization, automation, 
          and network transformation across global supply chain operations
        </p>

        {/* Impact Metrics */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <span className="bg-white px-4 py-2 rounded-full shadow text-sm font-medium">
            €40M+ Business Impact
          </span>
          <span className="bg-white px-4 py-2 rounded-full shadow text-sm font-medium">
            90% Automation Efficiency
          </span>
          <span className="bg-white px-4 py-2 rounded-full shadow text-sm font-medium">
            EU & NA Network Leadership
          </span>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-8 mb-8">
          <a
            href="https://linkedin.com/in/divyanshahuja"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-gray-700 hover:text-blue-600 hover:scale-110 transition"
          >
            <i className="fab fa-linkedin"></i>
          </a>

          <a
            href="mailto:da.2793@yahoo.com"
            className="text-2xl text-gray-700 hover:text-blue-600 hover:scale-110 transition"
          >
            <i className="fas fa-envelope"></i>
          </a>

          <a
            href="https://divyanshahuja.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-gray-700 hover:text-blue-600 hover:scale-110 transition"
          >
            <i className="fas fa-globe"></i>
          </a>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#projects"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition shadow-md hover:shadow-lg"
          >
            View Projects
          </a>

          <a
            href="#experience"
            className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-100 transition"
          >
            View Experience
          </a>
        </div>

      </div>
    </section>
  );
};

export default Hero;
