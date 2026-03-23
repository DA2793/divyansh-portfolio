import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="min-h-screen w-full bg-[#0b1b2b] text-white flex items-center px-6 md:px-16">
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 w-full">

        {/* ================= LEFT SIDE ================= */}
        <div className="flex flex-col justify-center">

          {/* Profile + Name */}
          <div className="flex items-center gap-5 mb-6">
            <img
              src="/profile-pic.jpg"
              alt="Divyansh Ahuja"
              className="w-20 h-20 rounded-full object-cover shadow-lg"
            />

            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Divyansh <span className="text-yellow-400">Ahuja</span>
            </h1>
          </div>

          {/* Designation */}
          <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6 max-w-xl">
            OPERATIONS & SUPPLY CHAIN LEADER <br />
            GLOBAL LOGISTICS PROGRAMS | NETWORK OPTIMIZATION | PROCESS TRANSFORMATION
          </p>

          {/* Value Proposition */}
          <p className="text-gray-400 mb-8 max-w-xl">
            Delivered €40M+ business impact through automation, logistics optimization,
            and global supply chain operations across Europe and North America.
          </p>

          {/* Metrics */}
          <div className="flex gap-10 mb-10">
            <div>
              <p className="text-xl font-bold">€40M+</p>
              <p className="text-xs text-gray-400">IMPACT DELIVERED</p>
            </div>
            <div>
              <p className="text-xl font-bold">90%</p>
              <p className="text-xs text-gray-400">AUTOMATION ACHIEVED</p>
            </div>
            <div>
              <p className="text-xl font-bold">150+</p>
              <p className="text-xs text-gray-400">TEAM MANAGED</p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex gap-5">
            <a href="https://linkedin.com/in/divyanshahuja" target="_blank" rel="noreferrer">
              <i className="fab fa-linkedin text-xl hover:text-yellow-400 transition"></i>
            </a>
            <a href="https://github.com/DA2793" target="_blank" rel="noreferrer">
              <i className="fab fa-github text-xl hover:text-yellow-400 transition"></i>
            </a>
            <a href="mailto:da.2793@yahoo.com">
              <i className="fas fa-envelope text-xl hover:text-yellow-400 transition"></i>
            </a>
          </div>
        </div>

        {/* ================= RIGHT SIDE ================= */}
        <div className="flex items-center">
          <div className="relative pl-6 border-l border-gray-700 space-y-12">

            {/* AMAZON */}
            <motion.div whileHover={{ x: 5 }}>
              <div className="flex items-start gap-4">
                <img src="/amazon.png" className="w-10 h-10 object-contain mt-1" />

                <div>
                  <p className="font-semibold text-lg">Amazon</p>
                  <p className="text-sm text-gray-400">
                    Supply Chain Operations Manager
                  </p>
                  <p className="text-xs text-gray-500 mb-2">
                    2021 — Present
                  </p>

                  <div className="flex gap-4 text-sm text-gray-400">
                    <a href="#experience" className="hover:text-yellow-400 transition">
                      Experience →
                    </a>
                    <a href="#projects" className="hover:text-yellow-400 transition">
                      Projects →
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* IENERGIZER AOM */}
            <motion.div whileHover={{ x: 5 }}>
              <div className="flex items-start gap-4">
                <img src="/ienergizer.png" className="w-10 h-10 object-contain mt-1" />

                <div>
                  <p className="font-semibold text-lg">iEnergizer</p>
                  <p className="text-sm text-gray-400">
                    Assistant Operations Manager
                  </p>
                  <p className="text-xs text-gray-500 mb-2">
                    2019 — 2021
                  </p>

                  <div className="flex gap-4 text-sm text-gray-400">
                    <a href="#experience" className="hover:text-yellow-400 transition">
                      Experience →
                    </a>
                    <a href="#projects" className="hover:text-yellow-400 transition">
                      Projects →
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* TEAM LEAD */}
            <motion.div whileHover={{ x: 5 }}>
              <div className="flex items-start gap-4">
                <img src="/ienergizer.png" className="w-10 h-10 object-contain mt-1" />

                <div>
                  <p className="text-sm text-gray-400">Operations Team Lead</p>
                  <p className="text-xs text-gray-500 mb-2">
                    2017 — 2019
                  </p>
                </div>
              </div>
            </motion.div>

            {/* CSE */}
            <motion.div whileHover={{ x: 5 }}>
              <div className="flex items-start gap-4">
                <img src="/ienergizer.png" className="w-10 h-10 object-contain mt-1" />

                <div>
                  <p className="text-sm text-gray-400">
                    Senior Customer Service Executive
                  </p>
                  <p className="text-xs text-gray-500">
                    2015 — 2017
                  </p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;