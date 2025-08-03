const Hero = () => {
  return (
    <section id="home" className="min-h-[70vh] flex items-center justify-center px-4 bg-gradient-to-br from-blue-50 to-white">
      <div className="text-center">
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <img
              src="/profile-pic.jpg" // Add your image to public folder
              alt="Divyansh Ahuja"
              className="w-40 h-40 rounded-full object-cover border-4 border-white shadow-lg hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute -bottom-2 -right-2">
              <a
                href="/Divyansh_Ahuja_CV.pdf" // Add your CV to public folder
                download
                className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors"
                title="Download CV"
              >
                <i className="fas fa-download"></i>
              </a>
            </div>
          </div>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">
          Divyansh Ahuja
        </h1>
        <h2 className="text-xl md:text-2xl text-gray-600 mb-6">
          Supply Chain Operations Manager
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          9+ years of experience in supply chain management, logistics, and customer service. 
          Specialized in operational excellence, process automation, and team leadership.
        </p>
        <div className="flex justify-center gap-6">
          <a 
            href="https://linkedin.com/in/divyanshahuja" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-2xl text-gray-700 hover:text-blue-600 hover:scale-110 transition-all"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a 
            href="mailto:da.2793@yahoo.com"
            className="text-2xl text-gray-700 hover:text-blue-600 hover:scale-110 transition-all"
          >
            <i className="fas fa-envelope"></i>
          </a>
          <a 
            href="https://bold.pro/my/divyanshahuja" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-2xl text-gray-700 hover:text-blue-600 hover:scale-110 transition-all"
          >
            <i className="fas fa-globe"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
