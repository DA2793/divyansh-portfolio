const Certifications = () => {
  const training = [
    {
      title: "AutoCAD",
      org: "CETPA Infotech, Noida",
      year: "2013",
    },
    {
      title: "Production & Bottling",
      org: "Radico Khaitan Ltd., Rampur",
      year: "2014",
    },
    {
      title: "Assembly Line Operations",
      org: "International Tractors Ltd., Hoshiarpur",
      year: "2015",
    },
  ];

  return (
    <section id="certifications" className="py-24 bg-[#f7f6f2] text-[#0f172a]">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <p className="text-xs font-semibold tracking-[0.18em] uppercase text-gray-400 mb-3">
          Training
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mb-16">
          Certifications & Training
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {training.map(({ title, org, year }) => (
            <div
              key={title}
              className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm"
            >
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#0f172a] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path
                      d="M7 1L2 4v4c0 2.5 2.239 4.5 5 5.5 2.761-1 5-3 5-5.5V4L7 1z"
                      stroke="white"
                      strokeWidth="1.3"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#0f172a]">
                    {title}
                  </h4>
                  <p className="text-xs text-gray-400 mt-1">{org}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{year}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
