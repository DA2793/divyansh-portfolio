import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="min-h-screen w-full bg-[#0b1b2b] text-white flex items-center px-6 md:px-16 relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-[-80px] left-[-80px] w-[420px] h-[420px] rounded-full bg-yellow-400/3 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-60px] right-[5%] w-[360px] h-[360px] rounded-full bg-blue-500/3 blur-[120px] pointer-events-none" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 w-full relative z-10">

        {/* ================= LEFT SIDE ================= */}
        <div className="flex flex-col justify-center">

          {/* Profile + Name */}
          <div className="flex items-center gap-5 mb-6">
            <img
              src="/profile-pic.jpg"
              alt="Divyansh Ahuja"
              className="w-20 h-20 rounded-full object-cover shadow-xl border border-white/10"
            />
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white">
              Divyansh Ahuja
            </h1>
          </div>

          {/* Designation (Improved Hierarchy) */}
          <p className="text-gray-200 text-base md:text-lg leading-relaxed mb-6 max-w-xl font-medium tracking-wide">
            OPERATIONS & SUPPLY CHAIN LEADER <br />
            <span className="text-gray-400">
              GLOBAL LOGISTICS PROGRAMS | NETWORK OPTIMIZATION | PROCESS TRANSFORMATION
            </span>
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

          {/* Glass Card */}
          <div
            className="w-full rounded-2xl p-8 relative"
            style={{
              background: "linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
              border: "1px solid rgba(255,255,255,0.08)",
              boxShadow: "0 8px 32px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.07)",
            }}
          >

            {/* Top Shine */}
            <div
              className="absolute top-0 left-0 right-0 h-px rounded-t-2xl pointer-events-none"
              style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.12), transparent)" }}
            />

            <div className="relative pl-6 border-l border-white/10 space-y-12">

              {/* AMAZON */}
              <motion.div whileHover={{ x: 6 }} transition={{ type: "spring", stiffness: 300 }}>
                <div className="flex items-start gap-4">
                  <img src="/amazon.png" alt="Amazon" className="w-10 h-10 object-contain mt-1 rounded-md" />
                  <div>
                    <p className="font-semibold text-lg text-white">Amazon</p>
                    <p className="text-sm text-gray-300">Supply Chain Operations Manager</p>
                    <p className="text-xs text-gray-500 mb-3">2021 — Present</p>

                    <div className="flex gap-3">
                      <a href="#experience" className="px-3 py-1 text-xs font-semibold rounded-md border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-[#0b1b2b] transition">
                        Experience →
                      </a>
                      <a href="#projects" className="px-3 py-1 text-xs font-semibold rounded-md border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-[#0b1b2b] transition">
                        Projects →
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* iENERGIZER AOM */}
              <motion.div whileHover={{ x: 6 }} transition={{ type: "spring", stiffness: 300 }}>
                <div className="flex items-start gap-4">
                  <img src="/ienergizer.png" alt="iEnergizer" className="w-10 h-10 object-contain mt-1 rounded-md" />
                  <div>
                    <p className="font-semibold text-lg text-white">iEnergizer</p>
                    <p className="text-sm text-gray-300">Assistant Operations Manager</p>
                    <p className="text-xs text-gray-500 mb-3">2019 — 2021</p>

                    <div className="flex gap-3">
                      <a href="#experience" className="px-3 py-1 text-xs font-semibold rounded-md border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-[#0b1b2b] transition">
                        Experience →
                      </a>
                      <a href="#projects" className="px-3 py-1 text-xs font-semibold rounded-md border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-[#0b1b2b] transition">
                        Projects →
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* TEAM LEAD */}
              <motion.div whileHover={{ x: 6 }} transition={{ type: "spring", stiffness: 300 }}>
                <div className="flex items-start gap-4">
                  <img src="/ienergizer.png" alt="iEnergizer" className="w-10 h-10 object-contain mt-1 rounded-md" />
                  <div>
                    <p className="text-sm font-medium text-white">Operations Team Lead</p>
                    <p className="text-xs text-gray-500">2017 — 2019</p>
                  </div>
                </div>
              </motion.div>

              {/* CSE */}
              <motion.div whileHover={{ x: 6 }} transition={{ type: "spring", stiffness: 300 }}>
                <div className="flex items-start gap-4">
                  <img src="/ienergizer.png" alt="iEnergizer" className="w-10 h-10 object-contain mt-1 rounded-md" />
                  <div>
                    <p className="text-sm font-medium text-white">Senior Customer Service Executive</p>
                    <p className="text-xs text-gray-500">2015 — 2017</p>
                  </div>
                </div>
              </motion.div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;