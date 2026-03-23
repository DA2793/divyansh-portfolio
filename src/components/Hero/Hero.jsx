import { useState } from 'react';
import { motion } from 'framer-motion';

/* Animations */
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay },
});

const Hero = () => {
  const [imageError, setImageError] = useState(false);

  const stats = [
    { value: "€40M+", label: "Impact Delivered" },
    { value: "90%", label: "Automation Achieved" },
    { value: "150+", label: "Team Managed" },
  ];

  const socials = [
    { icon: "fab fa-linkedin-in", link: "https://linkedin.com/in/divyanshahuja" },
    { icon: "fab fa-github", link: "https://github.com/DA2793" },
    { icon: "fas fa-envelope", link: "mailto:da.2793@yahoo.com" },
  ];

  return (
    <section className="min-h-screen bg-[#0B1828] text-white flex flex-col md:flex-row">

      {/* LEFT */}
      <div className="flex-1 flex flex-col justify-center px-8 md:px-16 py-20">

        <motion.p {...fadeUp(0.1)} className="text-sm tracking-widest text-yellow-400 mb-6 uppercase">
          Supply Chain & Operations
        </motion.p>

        {/* NAME */}
        <motion.h1 {...fadeUp(0.2)} className="text-5xl md:text-6xl font-bold leading-tight mb-6">
          Divyansh <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-200">
            Ahuja
          </span>
        </motion.h1>

        {/* VALUE PROP */}
        <motion.p {...fadeUp(0.3)} className="text-lg text-gray-300 max-w-xl mb-8">
          Driving €40M+ business impact through automation, logistics optimization, and
          global supply chain operations across Europe and North America.
        </motion.p>

        {/* STATS */}
        <motion.div {...fadeUp(0.4)} className="flex gap-10 mb-10 flex-wrap">
          {stats.map((s, i) => (
            <div key={i}>
              <p className="text-2xl font-semibold text-white">{s.value}</p>
              <p className="text-xs uppercase tracking-wider text-gray-400">{s.label}</p>
            </div>
          ))}
        </motion.div>

        {/* TAGS */}
        <motion.div {...fadeUp(0.5)} className="flex flex-wrap gap-3 mb-10">
          {["Amazon L4", "10+ Years Experience", "EU & NA Operations"].map(tag => (
            <span key={tag} className="px-3 py-1 border border-yellow-400/30 text-yellow-300 text-xs uppercase tracking-wide">
              {tag}
            </span>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div {...fadeUp(0.6)} className="flex gap-4 flex-wrap mb-10">
          <a href="#projects" className="bg-yellow-400 text-black px-6 py-3 text-sm font-semibold hover:bg-yellow-300 transition">
            View Work
          </a>
          <a href="#experience" className="border border-gray-500 px-6 py-3 text-sm hover:border-yellow-400 hover:text-yellow-400 transition">
            Career Journey
          </a>
        </motion.div>

        {/* SOCIALS */}
        <motion.div {...fadeUp(0.7)} className="flex gap-4">
          {socials.map((s, i) => (
            <a key={i} href={s.link} target="_blank" rel="noreferrer"
              className="w-10 h-10 border border-gray-600 flex items-center justify-center hover:border-yellow-400 hover:text-yellow-400 transition">
              <i className={s.icon}></i>
            </a>
          ))}
        </motion.div>

      </div>

      {/* RIGHT */}
      <div className="flex-1 flex items-center justify-center relative bg-[#0F1C2E]">

        {/* Background glow */}
        <div className="absolute w-[400px] h-[400px] bg-yellow-400/10 rounded-full blur-3xl"></div>

        {/* Profile */}
        <motion.div {...fadeUp(0.5)} className="relative z-10">
          {!imageError ? (
            <img
              src="/profile-pic.jpg"
              alt="Divyansh Ahuja"
              className="w-52 h-52 rounded-full object-cover border-4 border-yellow-400/30 shadow-xl"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="w-52 h-52 rounded-full bg-gray-700 flex items-center justify-center text-3xl font-bold">
              DA
            </div>
          )}
        </motion.div>

      </div>

    </section>
  );
};

export default Hero;