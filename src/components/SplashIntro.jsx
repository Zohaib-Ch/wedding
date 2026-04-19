import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Generate random petals and sparkles
const generateParticles = () => {
  const petals = Array.from({ length: 25 }, (_, i) => ({
    id: `petal-${i}`,
    type: i % 3 === 0 ? 'petal-gold' : 'petal-rose',
    left: `${Math.random() * 100}%`,
    top: `${-10 - Math.random() * 20}%`,
    size: 10 + Math.random() * 14,
    delay: Math.random() * 6,
    duration: 6 + Math.random() * 6,
    driftX: -80 + Math.random() * 160,
    driftY: 500 + Math.random() * 400,
    rotation: 180 + Math.random() * 540,
  }));

  const sparkles = Array.from({ length: 35 }, (_, i) => ({
    id: `sparkle-${i}`,
    left: `${5 + Math.random() * 90}%`,
    top: `${5 + Math.random() * 90}%`,
    delay: Math.random() * 8,
    duration: 1.5 + Math.random() * 2,
    size: 2 + Math.random() * 4,
  }));

  return { petals, sparkles };
};

const SplashIntro = ({ onComplete }) => {
  const [phase, setPhase] = useState(0); // 0=initial, 1=text reveal, 2=curtain open
  const { petals, sparkles } = useMemo(() => generateParticles(), []);

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 800);
    return () => clearTimeout(t1);
  }, []);

  const handleOpen = () => {
    setPhase(2);
    setTimeout(onComplete, 1800);
  };

  return (
    <motion.div
      className="splash-overlay"
      animate={phase === 2 ? { opacity: 0 } : { opacity: 1 }}
      transition={{ duration: 1.5, delay: 0.3 }}
    >
      {/* ─── Curtain Panels ─── */}
      <motion.div
        className="curtain-left"
        animate={phase === 2 ? { x: '-100%' } : { x: 0 }}
        transition={{ duration: 1.5, ease: [0.76, 0, 0.24, 1] }}
      />
      <motion.div
        className="curtain-right"
        animate={phase === 2 ? { x: '100%' } : { x: 0 }}
        transition={{ duration: 1.5, ease: [0.76, 0, 0.24, 1] }}
      />

      {/* ─── Floating Petals ─── */}
      {petals.map((p) => (
        <div
          key={p.id}
          className={`petal ${p.type}`}
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            animation: `float-petal ${p.duration}s ${p.delay}s infinite ease-in-out`,
            '--drift-x': `${p.driftX}px`,
            '--drift-y': `${p.driftY}px`,
            '--rotation': `${p.rotation}deg`,
          }}
        />
      ))}

      {/* ─── Sparkles ─── */}
      {sparkles.map((s) => (
        <div
          key={s.id}
          className="sparkle"
          style={{
            left: s.left,
            top: s.top,
            width: s.size,
            height: s.size,
            animation: `twinkle ${s.duration}s ${s.delay}s infinite`,
          }}
        />
      ))}

      {/* ─── Main Content ─── */}
      <div className="splash-content">
        {/* Top ornament */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={phase >= 1 ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ duration: 1.5, delay: 0.3 }}
        >
          <div className="ornament-double">
            <div className="ornament-diamond" />
          </div>
        </motion.div>

        {/* Invitation Label */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={phase >= 1 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, delay: 0.6 }}
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '0.7rem',
            fontWeight: 500,
            letterSpacing: '0.5em',
            color: 'var(--gold)',
            marginTop: '2rem',
            marginBottom: '3rem',
            textTransform: 'uppercase',
          }}
        >
          You are cordially invited to the wedding celebration of
        </motion.p>

        {/* Groom Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={phase >= 1 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.5, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="gold-text"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.2rem, 8vw, 5rem)',
            lineHeight: 1.1,
            marginBottom: '0.5rem',
          }}
        >
          Muhammad Sufyan
        </motion.h1>

        {/* Weds */}
        <motion.p
          initial={{ opacity: 0, scale: 0.5 }}
          animate={phase >= 1 ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 1.8 }}
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '1.8rem',
            fontWeight: 300,
            fontStyle: 'italic',
            color: 'var(--rose)',
            margin: '1rem 0',
          }}
        >
          Weds
        </motion.p>

        {/* Bride */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={phase >= 1 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.5, delay: 2.2, ease: [0.16, 1, 0.3, 1] }}
          className="gold-text"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.5rem, 5vw, 3rem)',
            lineHeight: 1.1,
            marginBottom: '0.5rem',
          }}
        >
          D/O Muhammad Amin
        </motion.h2>

        {/* Ornament */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={phase >= 1 ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ duration: 1.5, delay: 2.2 }}
        >
          <div className="ornament" style={{ maxWidth: '200px' }} />
        </motion.div>

        {/* Dates */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={phase >= 1 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, delay: 2.6 }}
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '1.3rem',
            fontWeight: 300,
            letterSpacing: '0.15em',
            color: 'var(--cream-muted)',
            marginTop: '1.5rem',
            marginBottom: '3rem',
          }}
        >
          <span style={{ color: 'var(--gold-light)' }}>02</span> — <span style={{ color: 'var(--gold-light)' }}>03</span> — <span style={{ color: 'var(--gold-light)' }}>04</span> May 2026
        </motion.div>

        {/* Ornament before button */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={phase >= 1 ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ duration: 1.5, delay: 3 }}
        >
          <div className="ornament" style={{ maxWidth: '200px' }} />
        </motion.div>

        {/* Enter Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={phase >= 1 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 3.2 }}
        >
          <motion.button
            className="btn-luxury"
            onClick={handleOpen}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Open Invitation
          </motion.button>
        </motion.div>

        {/* Bottom ornament */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={phase >= 1 ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 3.5 }}
          style={{ marginTop: '3rem' }}
        >
          <div className="ornament-double">
            <div className="ornament-diamond" />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default SplashIntro;
