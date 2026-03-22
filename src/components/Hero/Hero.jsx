import { useState } from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const [imageError, setImageError] = useState(false);

  return (
    <section
      id="home"
      className="min-h-[90vh] flex items-center justify-center px-4 bg-gradient-to-br from-blue-50 via-white to-gray-100 pt-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto text-center"
      >

        {/* Profile */}
        <div className="mb-10 flex justify-center">
          {!imageError ? (
            <motion.img
              src="/profile-pic.jpg"
              alt="Divyansh Ahuja"
              className="w-44 h-44 rounded-full object-cover border-4 border-white shadow-xl"
              whileHover={{ scale: 1.05 }}
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="w-44 h-44 rounded-full bg-gray-200 flex items-center justify-center">
              <span className="text-gray-500 text-2xl font-bold">DA</span>
            </div>
          )}
        </div>

        {/* Name (FIXED GRADIENT) */}
        <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent inline-block">
          Divyansh Ahuja
        </h1>

        {/* Title */}
        <p className="text-xl md:text-2xl text-gray-600 mb-6">
          Operations & Supply Chain Leader | Global Logistics & Network Optimization
        </p>

        {/* Value Proposition */}
        <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
          Delivered €40M+ business impact through logistics optimization, automation, 
          and network transformation across global supply chain operations
        </p>

        {/* Metrics */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {[
            "€40M+ Impact",
            "90% Automation",
            "EU & NA Leadership"
          ].map((item, i) => (
            <motion.span
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-white/70 backdrop-blur-md px-5 py-2 rounded-full shadow-md text-sm font-medium"
            >
              {item}
            </motion.span>
          ))}
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-8 mb-10">
          {[
            { icon: "fab fa-linkedin", link: "https://linkedin.com/in/divyanshahuja" },
            { icon: "fab fa-github", link: "https://github.com/DA2793" },
            { icon: "fas fa-envelope", link: "mailto:da.2793@yahoo.com" }
          ].map((item, i) => (
            <motion.a
              key={i}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              className="text-2xl text-gray-700 hover:text-blue-600 transition"
            >
              <i className={item.icon}></i>
            </motion.a>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex justify-center gap-4 flex-wrap">
          <a
            href="#projects"
            className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition shadow-lg"
          >
            View Projects
          </a>

          <a
            href="#experience"
            className="px-6 py-3 border border-gray-300 rounded-xl hover:bg-gray-100 transition"
          >
            View Experience
          </a>
        </div>

      </motion.div>
    </section>
  );
};

export default Hero;