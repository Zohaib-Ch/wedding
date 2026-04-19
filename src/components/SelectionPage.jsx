import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Sparkles, Crown } from 'lucide-react';

const SelectionPage = () => {
  const navigate = useNavigate();

  const options = [
    {
      icon: <Crown size={28} strokeWidth={1} />,
      title: 'Full Celebration',
      subtitle: 'Three Days of Joy',
      events: ['Mehndi', 'Barat', 'Walima'],
      dates: 'May 02 – 04, 2026',
      path: '/events/3-day',
    },
    {
      icon: <Sparkles size={28} strokeWidth={1} />,
      title: 'Main Events',
      subtitle: 'The Ceremony Highlights',
      events: ['Mehndi', 'Walima'],
      dates: 'May 02 & 04, 2026',
      path: '/events/2-day',
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="selection-page"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.3 }}
        style={{ textAlign: 'center', marginBottom: '5rem', position: 'relative', zIndex: 1 }}
      >
        <p style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '0.65rem',
          fontWeight: 500,
          letterSpacing: '0.5em',
          color: 'var(--gold)',
          marginBottom: '1.5rem',
          textTransform: 'uppercase',
        }}>
          The Wedding of Muhammad Sufyan
        </p>
        <h2 className="gold-text" style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(1.8rem, 5vw, 3rem)',
          marginBottom: '1rem',
        }}>
          Choose Your Journey
        </h2>
        <div className="ornament" />
        <p className="font-serif" style={{
          fontSize: '1.1rem',
          fontWeight: 300,
          fontStyle: 'italic',
          color: 'var(--cream-muted)',
          marginTop: '1rem',
        }}>
          Select which celebration days you would like to attend
        </p>
      </motion.div>

      {/* Cards */}
      <div className="selection-grid" style={{ position: 'relative', zIndex: 1 }}>
        {options.map((opt, idx) => (
          <motion.div
            key={opt.path}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 + idx * 0.2 }}
            className="selection-card"
            onClick={() => navigate(opt.path)}
          >
            {/* Icon */}
            <div style={{ color: 'var(--gold)', marginBottom: '2rem' }}>
              {opt.icon}
            </div>

            {/* Title */}
            <h3 className="gold-text" style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.6rem',
              marginBottom: '0.5rem',
            }}>
              {opt.title}
            </h3>

            <p style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '1rem',
              fontStyle: 'italic',
              color: 'var(--cream-muted)',
              marginBottom: '2rem',
            }}>
              {opt.subtitle}
            </p>

            {/* Event List */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '1.5rem',
              marginBottom: '2rem',
            }}>
              {opt.events.map((ev, i) => (
                <React.Fragment key={ev}>
                  <span style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.7rem',
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    color: 'var(--text-muted)',
                  }}>
                    {ev}
                  </span>
                  {i < opt.events.length - 1 && (
                    <div className="ornament-diamond" style={{ width: 4, height: 4 }} />
                  )}
                </React.Fragment>
              ))}
            </div>

            {/* Dates */}
            <p style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '1.1rem',
              color: 'var(--gold-light)',
              letterSpacing: '0.1em',
              marginBottom: '2.5rem',
            }}>
              {opt.dates}
            </p>

            <button className="btn-luxury" style={{ fontSize: '0.65rem' }}>
              View Details
            </button>
          </motion.div>
        ))}
      </div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        style={{
          marginTop: '6rem',
          textAlign: 'center',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <div className="ornament-double" style={{ marginBottom: '1.5rem' }}>
          <div className="ornament-diamond" />
        </div>
        <p style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '0.6rem',
          letterSpacing: '0.4em',
          color: 'var(--text-muted)',
          textTransform: 'uppercase',
        }}>
          S/O Muhammad Amin
        </p>
      </motion.footer>
    </motion.div>
  );
};

export default SelectionPage;
