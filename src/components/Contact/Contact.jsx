const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Get In Touch</h2>
        <div className="max-w-4xl mx-auto">
          {/* Contact Information Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Phone */}
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="text-3xl text-blue-600 mb-4">
                <i className="fas fa-phone"></i>
              </div>
              <h3 className="text-lg font-semibold mb-2">Phone</h3>
              <a 
                href="tel:+91-7995028078"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                **************
              </a>
            </div>

            {/* Email */}
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="text-3xl text-blue-600 mb-4">
                <i className="fas fa-envelope"></i>
              </div>
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <a 
                href="mailto:da.2793@yahoo.com"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                da.2793@yahoo.com
              </a>
            </div>

            {/* Location */}
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="text-3xl text-blue-600 mb-4">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <h3 className="text-lg font-semibold mb-2">Location</h3>
              <p className="text-gray-600">New Delhi, DL</p>
            </div>
          </div>

          {/* Professional Profiles */}
          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-xl font-semibold text-center mb-6">Professional Profiles</h3>
            <div className="flex justify-center gap-8">
              <a 
                href="https://linkedin.com/in/divyanshahuja"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center group"
              >
                <div className="text-3xl text-gray-600 group-hover:text-blue-600 transition-colors mb-2">
                  <i className="fab fa-linkedin"></i>
                </div>
                <span className="text-sm text-gray-600 group-hover:text-blue-600 transition-colors">LinkedIn</span>
              </a>
              <a 
                href="https://bold.pro/my/divyanshahuja"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center group"
              >
                <div className="text-3xl text-gray-600 group-hover:text-blue-600 transition-colors mb-2">
                  <i className="fas fa-globe"></i>
                </div>
                <span className="text-sm text-gray-600 group-hover:text-blue-600 transition-colors">Portfolio</span>
              </a>
            </div>
          </div>

          {/* Download CV Button */}
          <div className="text-center mt-12">
            <a
              href="/Divyansh_Ahuja_CV.pdf"
              download
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <i className="fas fa-download mr-2"></i>
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
