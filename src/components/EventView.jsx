import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import EventCard from './EventCard';
import { ArrowLeft, Heart } from 'lucide-react';

// Reliable dummy images from picsum
const IMAGES = {
  mehndi: 'https://picsum.photos/seed/mehndi-card/600/750',
  barat: 'https://picsum.photos/seed/barat-card/600/750',
  walima: 'https://picsum.photos/seed/walima-card/600/750',
};

const allEvents = [
  {
    id: 'mehndi',
    title: 'Mehndi Night',
    date: 'Friday, May 02, 2026',
    location: 'Grand Emerald Hall',
    image: IMAGES.mehndi,
    time: '07:00 PM Onwards',
  },
  {
    id: 'barat',
    title: 'Barat Ceremony',
    date: 'Saturday, May 03, 2026',
    location: 'Royal Banquet Hall',
    image: IMAGES.barat,
    time: '08:00 PM Onwards',
  },
  {
    id: 'walima',
    title: 'Walima Reception',
    date: 'Sunday, May 04, 2026',
    location: 'Palatial Ballroom',
    image: IMAGES.walima,
    time: '08:30 PM Onwards',
  },
];

const EventView = ({ type }) => {
  const displayedEvents =
    type === '3-day' ? allEvents : allEvents.filter((e) => e.id !== 'barat');

  const pageTitle = type === '3-day' ? 'Full Celebration' : 'Main Events';
  const pageSubtitle =
    type === '3-day'
      ? 'The Complete Three-Day Wedding Celebration'
      : 'Mehndi & Walima — The Core Ceremonies';

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="event-page"
    >
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        {/* Navigation */}
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="event-page-header"
        >
          <Link to="/" className="back-link">
            <ArrowLeft size={16} />
            Home
          </Link>

          <div style={{ textAlign: 'right' }}>
            <h2
              className="gold-text"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.2rem, 3vw, 2rem)',
                marginBottom: '0.25rem',
              }}
            >
              {pageTitle}
            </h2>
            <p
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '0.95rem',
                fontStyle: 'italic',
                color: 'var(--text-muted)',
              }}
            >
              {pageSubtitle}
            </p>
          </div>
        </motion.header>

        {/* Groom Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="groom-banner"
        >
          <p className="section-label">The Wedding of</p>
          <h1
            className="gold-text"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.8rem, 5vw, 3.5rem)',
              marginBottom: '0.5rem',
            }}
          >
            Muhammad Sufyan
          </h1>
          <p className="font-serif" style={{ fontSize: '1.3rem', fontStyle: 'italic', color: 'var(--rose)', margin: '0.5rem 0' }}>
            Weds
          </p>
          <h2 className="gold-text" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.2rem, 3vw, 2.2rem)' }}>
            D/O Muhammad Amin
          </h2>
          <div className="ornament" style={{ marginTop: '2rem' }} />
        </motion.div>

        {/* Event Cards */}
        <div className="event-grid">
          {displayedEvents.map((event, index) => (
            <EventCard key={event.id} {...event} index={index} />
          ))}
        </div>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="event-page-footer"
        >
          <Heart size={20} strokeWidth={1} style={{ color: 'var(--rose)', marginBottom: '1.5rem' }} />
          <p className="font-serif event-page-quote">
            "We request the honor of your presence as we begin this beautiful new chapter of life together."
          </p>
          <div className="ornament-double" style={{ marginTop: '3rem', marginBottom: '1.5rem' }}>
            <div className="ornament-diamond" />
          </div>
          <p className="event-page-credits">
            Muhammad Sufyan Weds D/O Muhammad Amin — May 2026
          </p>
        </motion.footer>
      </div>
    </motion.div>
  );
};

export default EventView;
