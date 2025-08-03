const Hero = () => {
  return (
    <section id="home" className="min-h-[70vh] flex items-center justify-center px-4 bg-gradient-to-br from-blue-50 to-white pt-20">
      <div className="container mx-auto">
        <div className="text-center">
          {/* Profile Image and CV Download */}
          <div className="mb-8 flex justify-center">
            <div className="relative inline-block">
              <img
                src="/profile-pic.jpg"
                alt="Divyansh Ahuja"
                className="w-40 h-40 rounded-full object-cover border-4 border-white shadow-lg hover:scale-105 transition-transform duration-300"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://via.placeholder.com/150';
                }}
              />
              <div className="absolute -bottom-2 -right-2">
                <a
                  href="/Divyansh_Ahuja_CV.pdf"
                  download="Divyansh_Ahuja_CV.pdf"
                  className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors shadow-lg hover:scale-110 transform duration-200"
                  title="Download CV"
                >
                  <i className="fas fa-download text-lg"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Name and Title */}
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">
              Divyansh Ahuja
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-600 mb-6">
              Supply Chain Operations Manager
            </h2>

            {/* Professional Summary */}
            <p className="text-gray-600 max-w-2xl mx-auto mb-8 px-4">
              10 years of experience in supply chain management, logistics, and customer service. 
              Specialized in operational excellence, process automation, and team leadership.
            </p>

            {/* Social Links */}
            <div className="flex justify-center gap-8">
              <a 
                href="https://linkedin.com/in/divyanshahuja" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-2xl text-gray-700 hover:text-blue-600 hover:scale-110 transition-all duration-200"
                aria-label="LinkedIn Profile"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a 
                href="mailto:da.2793@yahoo.com"
                className="text-2xl text-gray-700 hover:text-blue-600 hover:scale-110 transition-all duration-200"
                aria-label="Email"
              >
                <i className="fas fa-envelope"></i>
              </a>
              <a 
                href="https://bold.pro/my/divyanshahuja" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-2xl text-gray-700 hover:text-blue-600 hover:scale-110 transition-all duration-200"
                aria-label="Portfolio Website"
              >
                <i className="fas fa-globe"></i>
              </a>
            </div>

            {/* Call to Action Buttons */}
            <div className="mt-8 flex justify-center gap-4">
              <a
                href="#contact"
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg"
              >
                Get in Touch
              </a>
              <a
                href="#experience"
                className="px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors shadow-md hover:shadow-lg"
              >
                View Experience
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
