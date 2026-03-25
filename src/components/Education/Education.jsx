const Education = () => {
  return (
    <section id="education" className="py-24 bg-[#f7f6f2] text-[#0f172a]">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <p className="text-xs font-semibold tracking-[0.18em] uppercase text-gray-400 text-center mb-3">
          Academic
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Education
        </h2>

        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300">
            <div className="flex items-start justify-between gap-6">
              {/* Icon + details */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#0f172a] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M9 2L2 6l7 4 7-4-7-4z" stroke="white" strokeWidth="1.5" strokeLinejoin="round"/>
                    <path d="M2 6v5c0 2 3.134 3.5 7 3.5s7-1.5 7-3.5V6" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#0f172a] leading-tight">
                    Bachelor of Engineering
                  </h3>
                  <p className="text-sm font-medium text-[#0f172a] mt-1">
                    Mechanical Engineering
                  </p>
                  <p className="text-sm text-gray-400 mt-0.5">
                    RTM Nagpur University · Nagpur, India
                  </p>
                  <p className="text-sm text-[#475569] mt-4 leading-relaxed max-w-md">
                    Built a foundation in structured problem-solving and systems
                    thinking — later applied to large-scale logistics and
                    operational networks.
                  </p>
                </div>
              </div>

              {/* Year */}
              <span className="text-xs font-medium text-gray-400 whitespace-nowrap mt-1">
                2017
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
