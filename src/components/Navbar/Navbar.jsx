const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-white shadow-md z-50">
      {/* Top Contact Bar */}
      <div className="bg-gray-50 border-b">
        <div className="container mx-auto px-4 py-2">
          <div className="flex justify-end space-x-6 text-sm text-gray-600">
            <a href="tel:**************" className="hover:text-blue-600">
              <i className="fas fa-phone mr-2"></i>**************
            </a>
            <a href="mailto:da.2793@yahoo.com" className="hover:text-blue-600">
              <i className="fas fa-envelope mr-2"></i>da.2793@yahoo.com
            </a>
            <span>
              <i className="fas fa-map-marker-alt mr-2"></i>New Delhi, DL
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="text-2xl font-bold text-blue-600">DA</div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">About</a>
            <a href="#experience" className="text-gray-700 hover:text-blue-600 transition-colors">Experience</a>
            <a href="#skills" className="text-gray-700 hover:text-blue-600 transition-colors">Skills</a>
            <a href="#education" className="text-gray-700 hover:text-blue-600 transition-colors">Education</a>
            <a href="#projects" className="text-gray-700 hover:text-blue-600 transition-colors">Projects</a>
            <a href="#achievements" className="text-gray-700 hover:text-blue-600 transition-colors">Achievements</a>
            <a href="#certifications" className="text-gray-700 hover:text-blue-600 transition-colors">Certifications</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
