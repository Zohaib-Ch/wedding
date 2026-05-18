import React from 'react';
import { motion } from 'framer-motion';
import EventCard from './EventCard';
import { Heart } from 'lucide-react';

// Reliable dummy images from picsum
const IMAGES = {
  mehndi: '/mehndi.jpeg',
  barat: '/barat.jpeg',
  walima: '/walima.jpeg',
};

const allEvents = [
  {
    id: 'mehndi',
    title: 'Mehndi',
    date: 'Saturday, May 30, 2026',
    location: 'Illyas Colony Khiyali Gujranwala',
    image: IMAGES.mehndi,
    time: '',
  },
  {
    id: 'barat',
    title: 'Barat',
    date: 'Sunday, May 31, 2026',
    location: 'Decorium Marquee, G.T Road Gujranwala',
    image: IMAGES.barat,
    time: '06 PM to 10 PM',
  },
  {
    id: 'walima',
    title: 'Walima',
    date: 'Monday, June 01, 2026',
    location: 'Yashwa Marriage Hall, Sheikhupura Road, Khiyali Gujranwala',
    image: IMAGES.walima,
    time: '12 PM to 04 PM',
  },
];

const EventView = ({ type }) => {
  const displayedEvents =
    type === 'walima-only'
      ? allEvents.filter((e) => e.id === 'walima')
      : type === '3-day'
      ? allEvents
      : allEvents.filter((e) => e.id !== 'barat');

  const pageTitle =
    type === 'walima-only'
      ? 'Reception Only'
      : type === '3-day'
      ? 'Full Celebration'
      : 'Main Events';

  const pageSubtitle =
    type === 'walima-only'
      ? "Join us for the Walima Ceremony"
      : type === '3-day'
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
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="event-page-header"
          style={{ justifyContent: 'center' }}
        >
          <div style={{ textAlign: 'center' }}>
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
            Muhammad Tayyab
          </h1>
          <p className="font-serif" style={{ fontSize: '1.3rem', fontStyle: 'italic', color: 'var(--rose)', margin: '0.5rem 0' }}>
            S/O
          </p>
          <h2 className="gold-text" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.2rem, 3vw, 2.2rem)' }}>
            Muhammad Yaqoob
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
            Muhammad Tayyab S/O Muhammad Yaqoob — May — June 2026
          </p>
        </motion.footer>
      </div>
    </motion.div>
  );
};

export default EventView;
