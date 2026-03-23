import { useState } from 'react';
import { motion } from 'framer-motion';

/* ─── animation variants ─────────────────────────── */
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
});

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.9, delay },
});

/* ─── tiny supply-chain node SVG (right panel) ───── */
const ChainGraphic = () => (
  <svg
    viewBox="0 0 420 340"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full max-w-lg opacity-90"
    aria-hidden="true"
  >
    {/* connector lines */}
    <line x1="80"  y1="80"  x2="210" y2="170" stroke="#C9A84C" strokeWidth="1"   strokeDasharray="5 4" strokeOpacity="0.5"/>
    <line x1="340" y1="80"  x2="210" y2="170" stroke="#C9A84C" strokeWidth="1"   strokeDasharray="5 4" strokeOpacity="0.5"/>
    <line x1="210" y1="170" x2="100" y2="265" stroke="#C9A84C" strokeWidth="1"   strokeDasharray="5 4" strokeOpacity="0.5"/>
    <line x1="210" y1="170" x2="320" y2="265" stroke="#C9A84C" strokeWidth="1"   strokeDasharray="5 4" strokeOpacity="0.5"/>
    <line x1="80"  y1="80"  x2="340" y2="80"  stroke="#C9A84C" strokeWidth="0.6" strokeOpacity="0.3"/>

    {/* nodes — outer ring */}
    {[
      { cx: 80,  cy: 80,  r: 22, label: "Supplier", sub: "EU & NA" },
      { cx: 340, cy: 80,  r: 22, label: "Warehouse", sub: "Network" },
      { cx: 100, cy: 265, r: 22, label: "Last Mile", sub: "Delivery" },
      { cx: 320, cy: 265, r: 22, label: "Customer", sub: "Fulfilment" },
    ].map(({ cx, cy, r, label, sub }) => (
      <g key={label}>
        <circle cx={cx} cy={cy} r={r + 8} fill="#C9A84C" fillOpacity="0.07" />
        <circle cx={cx} cy={cy} r={r}     fill="#0F1C2E" stroke="#C9A84C" strokeWidth="1.2" strokeOpacity="0.7" />
        <text x={cx} y={cy - 2}  textAnchor="middle" fill="#E8DEC8" fontSize="7"  fontFamily="DM Sans, sans-serif" fontWeight="500">{label}</text>
        <text x={cx} y={cy + 8}  textAnchor="middle" fill="#C9A84C" fontSize="6"  fontFamily="DM Sans, sans-serif" opacity="0.8">{sub}</text>
      </g>
    ))}

    {/* centre hub */}
    <circle cx="210" cy="170" r="36" fill="#0F1C2E" stroke="#C9A84C" strokeWidth="1.5" />
    <circle cx="210" cy="170" r="44" fill="none"   stroke="#C9A84C" strokeWidth="0.5" strokeOpacity="0.3" strokeDasharray="3 5" />
    <text x="210" y="166" textAnchor="middle" fill="#C9A84C" fontSize="8.5" fontFamily="DM Sans, sans-serif" fontWeight="600" letterSpacing="0.1em">OPS</text>
    <text x="210" y="178" textAnchor="middle" fill="#E8DEC8" fontSize="7"   fontFamily="DM Sans, sans-serif" opacity="0.7">Control Hub</text>

    {/* metric badges */}
    {[
      { x: 124, y: 124, text: "€40M+" },
      { x: 270, y: 124, text: "90% Auto" },
      { x: 210, y: 232, text: "Global Ops" },
    ].map(({ x, y, text }) => (
      <g key={text}>
        <rect x={x - 26} y={y - 9} width="52" height="18" rx="9"
          fill="#C9A84C" fillOpacity="0.12" stroke="#C9A84C" strokeWidth="0.7" strokeOpacity="0.5" />
        <text x={x} y={y + 4} textAnchor="middle" fill="#C9A84C"
          fontSize="6.5" fontFamily="DM Sans, sans-serif" fontWeight="500">{text}</text>
      </g>
    ))}
  </svg>
);

/* ─── HERO ────────────────────────────────────────── */
const Hero = () => {
  const [imageError, setImageError] = useState(false);

  const stats = [
    { value: "€40M+", label: "Business Impact" },
    { value: "90%",   label: "Automation Rate" },
    { value: "2",     label: "Continents Led"  },
  ];

  const socials = [
    { label: "LinkedIn", href: "https://linkedin.com/in/divyanshahuja",  icon: "fab fa-linkedin-in" },
    { label: "GitHub",   href: "https://github.com/DA2793",              icon: "fab fa-github"      },
    { label: "Email",    href: "mailto:da.2793@yahoo.com",               icon: "fas fa-envelope"    },
  ];

  return (
    <>
      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Sans:wght@300;400;500&display=swap');

        #hero-root {
          --navy:   #0B1828;
          --navy-2: #0F1C2E;
          --gold:   #C9A84C;
          --gold-lt:#E8DEC8;
          --cream:  #F4F0E8;
          --muted:  rgba(244,240,232,0.5);
          --border: rgba(201,168,76,0.18);
          font-family: 'DM Sans', sans-serif;
        }

        .hero-name-filled   { font-family: 'Playfair Display', serif; font-weight: 900; color: var(--cream); }
        .hero-name-outlined {
          font-family: 'Playfair Display', serif; font-weight: 900;
          -webkit-text-stroke: 1.5px var(--gold-lt);
          color: transparent;
        }

        .stat-card {
          border-left: 1px solid var(--border);
          padding-left: 20px;
        }
        .stat-card:first-child { border-left: none; padding-left: 0; }

        .btn-gold {
          background: var(--gold);
          color: var(--navy);
          font-family: 'DM Sans', sans-serif;
          font-size: 12px; font-weight: 600;
          letter-spacing: 0.1em; text-transform: uppercase;
          padding: 14px 32px; border-radius: 2px;
          text-decoration: none; display: inline-block;
          transition: background 0.2s, transform 0.15s;
        }
        .btn-gold:hover { background: var(--gold-lt); transform: translateY(-1px); }

        .btn-outline {
          border: 1px solid var(--border);
          color: var(--muted);
          font-family: 'DM Sans', sans-serif;
          font-size: 12px; font-weight: 500;
          letter-spacing: 0.1em; text-transform: uppercase;
          padding: 13px 32px; border-radius: 2px;
          text-decoration: none; display: inline-block;
          transition: border-color 0.2s, color 0.2s, transform 0.15s;
        }
        .btn-outline:hover { border-color: var(--gold); color: var(--gold); transform: translateY(-1px); }

        .social-btn {
          width: 38px; height: 38px; border-radius: 50%;
          border: 1px solid var(--border);
          display: inline-flex; align-items: center; justify-content: center;
          color: var(--muted); font-size: 14px;
          text-decoration: none;
          transition: border-color 0.2s, color 0.2s, background 0.2s;
        }
        .social-btn:hover { border-color: var(--gold); color: var(--gold); background: rgba(201,168,76,0.08); }

        .tag-pill {
          display: inline-flex; align-items: center; gap: 6px;
          border: 1px solid var(--border);
          border-radius: 2px;
          padding: 5px 12px;
          font-size: 11px; font-weight: 500; letter-spacing: 0.08em; text-transform: uppercase;
          color: var(--gold);
          background: rgba(201,168,76,0.06);
        }
        .tag-pill::before {
          content: '';
          width: 5px; height: 5px; border-radius: 50%;
          background: var(--gold); opacity: 0.7;
          display: inline-block;
        }

        /* right panel faint grid */
        .grid-bg {
          background-image:
            linear-gradient(rgba(201,168,76,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(201,168,76,0.06) 1px, transparent 1px);
          background-size: 48px 48px;
        }

        @media (max-width: 900px) {
          .hero-split { flex-direction: column !important; }
          .hero-right-panel { min-height: 320px !important; }
          .hero-left-panel  { padding: 64px 32px !important; }
          .hero-name-size   { font-size: 52px !important; line-height: 1.05 !important; }
        }
      `}</style>

      <section
        id="hero-root"
        style={{ background: 'var(--navy)', minHeight: '100vh' }}
      >
        <div
          className="hero-split"
          style={{ display: 'flex', minHeight: '100vh' }}
        >

          {/* ── LEFT PANEL ───────────────────────────── */}
          <div
            className="hero-left-panel"
            style={{
              flex: '0 0 55%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              padding: '80px 56px 80px 72px',
              position: 'relative',
              zIndex: 2,
            }}
          >
            {/* eyebrow */}
            <motion.p {...fadeUp(0.1)} style={{ fontSize: 11, fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 28 }}>
              Portfolio — Supply Chain &amp; Operations
            </motion.p>

            {/* name */}
            <motion.div {...fadeUp(0.25)}>
              <h1
                className="hero-name-size"
                style={{ lineHeight: 1.0, marginBottom: 0, fontSize: 72 }}
              >
                <span className="hero-name-filled" style={{ display: 'block' }}>Divyansh</span>
                <span className="hero-name-outlined" style={{ display: 'block' }}>Ahuja</span>
              </h1>
            </motion.div>

            {/* gold rule */}
            <motion.div {...fadeUp(0.4)} style={{ width: 48, height: 2, background: 'var(--gold)', margin: '28px 0' }} />

            {/* sub-title */}
            <motion.p {...fadeUp(0.5)} style={{ fontSize: 14, fontWeight: 400, letterSpacing: '0.05em', color: 'var(--muted)', lineHeight: 1.8, maxWidth: 340 }}>
              Operations &amp; Supply Chain Leader<br />
              <span style={{ color: 'var(--cream)', fontWeight: 500 }}>Global Logistics · Network Optimization · Automation</span>
            </motion.p>

            {/* tags */}
            <motion.div {...fadeUp(0.58)} style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 28 }}>
              {['EU & NA Leadership', 'Logistics Ops', 'Process Automation'].map(t => (
                <span key={t} className="tag-pill">{t}</span>
              ))}
            </motion.div>

            {/* CTA buttons */}
            <motion.div {...fadeUp(0.68)} style={{ display: 'flex', gap: 16, flexWrap: 'wrap', marginTop: 40 }}>
              <a href="#projects"    className="btn-gold">View Projects</a>
              <a href="#experience"  className="btn-outline">Experience</a>
            </motion.div>

            {/* social icons */}
            <motion.div {...fadeUp(0.76)} style={{ display: 'flex', gap: 12, marginTop: 32 }}>
              {socials.map(({ label, href, icon }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="social-btn" aria-label={label}>
                  <i className={icon} />
                </a>
              ))}
            </motion.div>

            {/* stats */}
            <motion.div
              {...fadeUp(0.86)}
              style={{
                display: 'flex', gap: 0, marginTop: 56,
                paddingTop: 36,
                borderTop: '1px solid var(--border)',
              }}
            >
              {stats.map(({ value, label }) => (
                <div key={label} className="stat-card" style={{ flex: 1 }}>
                  <p style={{ fontFamily: "'Playfair Display', serif", fontSize: 26, fontWeight: 700, color: 'var(--cream)', lineHeight: 1 }}>{value}</p>
                  <p style={{ fontSize: 11, fontWeight: 400, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--muted)', marginTop: 5 }}>{label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── RIGHT PANEL ──────────────────────────── */}
          <div
            className="hero-right-panel grid-bg"
            style={{
              flex: '0 0 45%',
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'var(--navy-2)',
              overflow: 'hidden',
              minHeight: '100vh',
            }}
          >
            {/* faint large "D" watermark */}
            <motion.span
              {...fadeIn(0.3)}
              aria-hidden="true"
              style={{
                position: 'absolute',
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(240px, 28vw, 360px)',
                fontWeight: 900,
                color: 'rgba(201,168,76,0.04)',
                lineHeight: 1,
                userSelect: 'none',
                top: '50%', left: '50%',
                transform: 'translate(-50%, -52%)',
                pointerEvents: 'none',
              }}
            >
              D
            </motion.span>

            {/* profile photo OR initials */}
            <motion.div
              {...fadeIn(0.45)}
              style={{ position: 'relative', zIndex: 2, marginBottom: 40 }}
            >
              {!imageError ? (
                <motion.img
                  src="/profile-pic.jpg"
                  alt="Divyansh Ahuja"
                  whileHover={{ scale: 1.03 }}
                  onError={() => setImageError(true)}
                  style={{
                    width: 120, height: 120,
                    borderRadius: '50%',
                    objectFit: 'cover',
                    border: '2px solid rgba(201,168,76,0.45)',
                    boxShadow: '0 0 0 8px rgba(201,168,76,0.07)',
                  }}
                />
              ) : (
                <div style={{
                  width: 120, height: 120, borderRadius: '50%',
                  background: 'rgba(201,168,76,0.1)',
                  border: '2px solid rgba(201,168,76,0.45)',
                  boxShadow: '0 0 0 8px rgba(201,168,76,0.07)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 32, fontWeight: 700, color: 'var(--gold)' }}>DA</span>
                </div>
              )}
            </motion.div>

            {/* supply chain graphic */}
            <motion.div
              {...fadeIn(0.6)}
              style={{ position: 'relative', zIndex: 2, width: '82%' }}
            >
              <ChainGraphic />
            </motion.div>

            {/* corner accent — top-right */}
            <div aria-hidden="true" style={{
              position: 'absolute', top: 32, right: 32,
              width: 48, height: 48,
              borderTop: '1px solid rgba(201,168,76,0.3)',
              borderRight: '1px solid rgba(201,168,76,0.3)',
            }} />
            {/* corner accent — bottom-left */}
            <div aria-hidden="true" style={{
              position: 'absolute', bottom: 32, left: 32,
              width: 48, height: 48,
              borderBottom: '1px solid rgba(201,168,76,0.3)',
              borderLeft: '1px solid rgba(201,168,76,0.3)',
            }} />
          </div>

        </div>
      </section>
    </>
  );
};

export default Hero;
