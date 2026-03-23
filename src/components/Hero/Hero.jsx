import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="min-h-screen w-full bg-[#071a2f] text-white flex items-center px-6 md:px-16 relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-[-80px] left-[-80px] w-[420px] h-[420px] rounded-full bg-yellow-400/5 blur-[120px]" />
      <div className="absolute bottom-[-60px] right-[5%] w-[360px] h-[360px] rounded-full bg-blue-500/5 blur-[120px]" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full relative z-10 items-center">

        {/* ================= LEFT ================= */}
        <div className="flex flex-col justify-center">

          {/* Profile + Name */}
          <div className="flex items-center gap-5 mb-6">
            <img
              src="/profile-pic.jpg"
              alt="Divyansh Ahuja"
              className="w-20 h-20 rounded-full object-cover shadow-xl border border-white/10"
            />
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Divyansh Ahuja
            </h1>
          </div>

          {/* Designation */}
          <p className="text-gray-200 text-base md:text-lg leading-relaxed mb-6 max-w-xl font-medium tracking-wide">
            OPERATIONS & SUPPLY CHAIN LEADER <br />
            <span className="text-gray-400">
              GLOBAL LOGISTICS PROGRAMS | NETWORK OPTIMIZATION | PROCESS TRANSFORMATION
            </span>
          </p>

          {/* Value Proposition */}
          <p className="text-gray-400 mb-8 max-w-xl">
            Delivered €40M+ cost savings through strategic initiatives across supply chain and financial services operations.
          </p>

          {/* Metrics */}
          <div className="flex gap-10 mt-4 flex-wrap">
            <div>
              <p className="text-xl font-bold text-white">€40M+</p>
              <p className="text-gray-400 text-sm">Cost Savings Delivered</p>
            </div>

            <div>
              <p className="text-xl font-bold text-white">95%+</p>
              <p className="text-gray-400 text-sm">CSAT in BFSI Operations</p>
            </div>

            <div>
              <p className="text-xl font-bold text-white">Supply Chain & BFSI</p>
              <p className="text-gray-400 text-sm">Operations Leadership</p>
            </div>
          </div>

          {/* Social */}
          <div className="flex gap-5 mt-8">
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

        {/* ================= RIGHT ================= */}
        <div className="flex items-center">

          <div
            className="w-full rounded-2xl p-8 relative"
            style={{
              background: "linear-gradient(135deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))",
              backdropFilter: "blur(16px)",
              border: "1px solid rgba(255,255,255,0.08)",
              boxShadow: "0 8px 32px rgba(0,0,0,0.35)",
            }}
          >
            <div className="relative pl-6 border-l border-white/10 space-y-8">

              {/* AMAZON */}
              <motion.div whileHover={{ x: 6 }}>
                <div className="flex items-start gap-4">
                  <img src="/amazon.png" className="w-10 h-10 object-contain mt-1" />
                  <div>
                    <p className="font-semibold text-lg text-white">Amazon</p>
                    <p className="text-sm text-gray-300">Supply Chain Operations Manager</p>
                    <p className="text-xs text-gray-500 mb-2">2021 — Present</p>
                  </div>
                </div>
              </motion.div>

              {/* IENERGIZER - AOM */}
              <motion.div whileHover={{ x: 6 }}>
                <div className="flex items-start gap-4">
                  <img src="/ienergizer.png" className="w-10 h-10 object-contain mt-1" />
                  <div>
                    <p className="font-semibold text-lg text-white">iEnergizer</p>
                    <p className="text-sm text-gray-300">Assistant Operations Manager</p>
                    <p className="text-xs text-gray-500">2019 — 2021</p>
                  </div>
                </div>
              </motion.div>

              {/* TEAM LEAD */}
              <motion.div whileHover={{ x: 6 }}>
                <div className="flex items-start gap-4 opacity-90">
                  <img src="/ienergizer.png" className="w-9 h-9 object-contain mt-1" />
                  <div>
                    <p className="text-sm text-white">Operations Team Lead</p>
                    <p className="text-xs text-gray-500">2017 — 2019</p>
                  </div>
                </div>
              </motion.div>

              {/* SR EXEC */}
              <motion.div whileHover={{ x: 6 }}>
                <div className="flex items-start gap-4 opacity-80">
                  <img src="/ienergizer.png" className="w-9 h-9 object-contain mt-1" />
                  <div>
                    <p className="text-sm text-white">Senior Customer Service Executive</p>
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