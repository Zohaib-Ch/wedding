import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Heart, Calendar, MapPin, Clock, Sparkles, Star } from 'lucide-react';

const HERO_IMG = '/mehndi.png';
const MEHNDI_IMG = '/mehndi.png';
const BARAT_IMG = '/barat.png';
const WALIMA_IMG = '/walima.png';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] },
  }),
};

const events = [
  {
    title: 'Mehndi',
    date: 'Friday, May 02',
    time: '',
    venue: 'Kamoki, Gujranwala',
    image: MEHNDI_IMG,
    color: '#c5a059',
    desc: 'An evening of colors, music, and traditional celebration.',
  },
  {
    title: 'Barat',
    date: 'Saturday, May 03',
    time: '05 PM to 09 PM',
    venue: 'Al-Naeem Marriage Hall',
    image: BARAT_IMG,
    color: '#8b1a2b',
    desc: 'The grand procession and the union of two souls.',
  },
  {
    title: 'Walima',
    date: 'Sunday, May 04',
    time: '05 PM to 09 PM',
    venue: 'Al Madni Banquet Hall, Kamoke',
    image: WALIMA_IMG,
    color: '#4a6fa5',
    desc: 'A lavish feast celebrating the newlywed couple.',
  },
];

const HomePage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* ════════════════════════════════════════════
          SECTION 1 — HERO
          ════════════════════════════════════════════ */}
      <section className="hero-section">
        <div className="hero-bg">
          <img src={HERO_IMG} alt="Wedding" />
          <div className="hero-overlay" />
        </div>

        <div className="hero-content">
          <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0}>
            <div className="ornament-double">
              <div className="ornament-diamond" />
            </div>
          </motion.div>

          <motion.p
            variants={fadeUp} initial="hidden" animate="visible" custom={1}
            className="hero-label"
          >
            The Wedding Celebration Of
          </motion.p>

          <motion.h1
            variants={fadeUp} initial="hidden" animate="visible" custom={2}
            className="gold-text hero-title"
          >
            Muhammad Sufyan
          </motion.h1>

          <motion.p
            variants={fadeUp} initial="hidden" animate="visible" custom={3}
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '1.8rem',
              fontWeight: 300,
              fontStyle: 'italic',
              color: 'var(--rose)',
              margin: '0.5rem 0',
            }}
          >
            Weds
          </motion.p>

          <motion.h2
            variants={fadeUp} initial="hidden" animate="visible" custom={4}
            className="gold-text"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.5rem, 5vw, 3.5rem)',
              lineHeight: 1.1,
            }}
          >
            D/O Muhammad Amin
          </motion.h2>

          <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={5}>
            <div className="ornament" style={{ maxWidth: '180px' }} />
          </motion.div>

          <motion.p
            variants={fadeUp} initial="hidden" animate="visible" custom={6}
            className="hero-date"
          >
            <span>02</span> — <span>03</span> — <span>04</span> May 2026
          </motion.p>

          <motion.div
            variants={fadeUp} initial="hidden" animate="visible" custom={7}
            className="hero-scroll-hint"
          >
            <span>Scroll to explore</span>
            <div className="scroll-line" />
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          SECTION 2 — WELCOME MESSAGE
          ════════════════════════════════════════════ */}
      <section className="welcome-section">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="welcome-inner"
        >
          <motion.div variants={fadeUp} custom={0}>
            <Heart size={24} strokeWidth={1} style={{ color: 'var(--rose)', marginBottom: '1.5rem' }} />
          </motion.div>

          <motion.h2 variants={fadeUp} custom={1} className="gold-text section-title">
            With Great Joy
          </motion.h2>

          <motion.div variants={fadeUp} custom={2}>
            <div className="ornament" />
          </motion.div>

          <motion.p variants={fadeUp} custom={3} className="welcome-text">
            With immense happiness and the blessings of the Almighty, we invite you 
            to share in the joy of the wedding celebration of our beloved son,{' '}
            <strong style={{ color: 'var(--gold-light)' }}>Muhammad Sufyan</strong>.
            Your gracious presence will be a blessing and an honor for our family.
          </motion.p>

          <motion.p variants={fadeUp} custom={4} className="welcome-family">
            — Family of Muhammad Sufyan —
          </motion.p>
        </motion.div>
      </section>

      {/* ════════════════════════════════════════════
          SECTION 3 — EVENT TIMELINE
          ════════════════════════════════════════════ */}
      <section className="timeline-section">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          style={{ textAlign: 'center', marginBottom: '5rem' }}
        >
          <motion.p variants={fadeUp} custom={0} className="section-label">
            Three Days of Celebration
          </motion.p>
          <motion.h2 variants={fadeUp} custom={1} className="gold-text section-title">
            The Schedule
          </motion.h2>
          <motion.div variants={fadeUp} custom={2}>
            <div className="ornament" />
          </motion.div>
        </motion.div>

        <div className="timeline">
          {events.map((ev, i) => (
            <motion.div
              key={ev.title}
              className="timeline-item"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              variants={fadeUp}
              custom={i}
            >
              <div className="timeline-image">
                <img src={ev.image} alt={ev.title} loading="lazy" />
              </div>
              <div className="timeline-body">
                <p className="timeline-day" style={{ color: ev.color }}>
                  Day {i + 1}
                </p>
                <h3 className="gold-text timeline-title">{ev.title}</h3>
                <p className="timeline-desc">{ev.desc}</p>
                <div className="timeline-details">
                  <div className="timeline-detail-row">
                    <Calendar size={14} />
                    <span>{ev.date}, 2026</span>
                  </div>
                  <div className="timeline-detail-row">
                    <Clock size={14} />
                    <span>{ev.time} Onwards</span>
                  </div>
                  <div className="timeline-detail-row">
                    <MapPin size={14} />
                    <span>{ev.venue}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ════════════════════════════════════════════
          SECTION 4 — INVITATION LINKS
          ════════════════════════════════════════════ */}
      <section className="links-section">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          style={{ textAlign: 'center' }}
        >
          <motion.p variants={fadeUp} custom={0} className="section-label">
            View your invitation
          </motion.p>
          <motion.h2 variants={fadeUp} custom={1} className="gold-text section-title">
            Choose Your Card
          </motion.h2>
          <motion.div variants={fadeUp} custom={2}>
            <div className="ornament" />
          </motion.div>

          <motion.div variants={fadeUp} custom={3} className="invite-links">
            <Link to="/invite" className="btn-luxury">
              <Sparkles size={14} style={{ marginRight: '0.5rem' }} />
              Full Celebration — 3 Days
            </Link>
            <Link to="/invitation" className="btn-luxury btn-luxury-alt">
              <Star size={14} style={{ marginRight: '0.5rem' }} />
              Main Events — 2 Days
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* ════════════════════════════════════════════
          FOOTER
          ════════════════════════════════════════════ */}
      <footer className="site-footer">
        <div className="ornament-double">
          <div className="ornament-diamond" />
        </div>
        <p className="footer-names gold-text">Muhammad Sufyan</p>
        <p className="footer-sub" style={{ fontStyle: 'italic' }}>Weds D/O Muhammad Amin</p>
        <p className="footer-date">May 2026</p>
      </footer>
    </motion.div>
  );
};

export default HomePage;
