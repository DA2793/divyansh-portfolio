const Footer = () => {
  return (
    <footer className="bg-[#0f172a] border-t border-white/10">
      <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-gray-400 text-sm">
          © {new Date().getFullYear()} Divyansh Ahuja. All rights reserved.
        </p>
        <div className="flex items-center gap-5">
          <a
            href="https://linkedin.com/in/divyanshahuja"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition text-lg"
            aria-label="LinkedIn profile"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="mailto:da.2793@yahoo.com"
            className="text-gray-400 hover:text-white transition text-lg"
            aria-label="Send email"
          >
            <i className="fas fa-envelope"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
