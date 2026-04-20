import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Clock, Phone } from 'lucide-react';

const EventCard = ({ title, date, location, image, time, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
      className="event-card"
    >
      {/* Image */}
      <div className="event-card-image">
        <img src={image} alt={title} loading="lazy" />
      </div>

      {/* Body */}
      <div className="event-card-body">
        <h3 className="gold-text">{title}</h3>

        <div className="ornament" style={{ maxWidth: '80px', margin: '0 auto 1.5rem' }} />

        <div className="event-detail-row">
          <Calendar size={14} />
          <span style={{ letterSpacing: '0.1em' }}>{date}</span>
        </div>

        {time && (
          <div className="event-detail-row">
            <Clock size={14} />
            <span>{time}</span>
          </div>
        )}

        <div className="event-detail-row">
          <MapPin size={14} />
          <span style={{ fontStyle: 'italic' }}>{location}</span>
        </div>

        <div className="ornament" style={{ maxWidth: '60px', margin: '2rem auto 1.5rem' }} />

        <div className="contact-section" style={{ marginTop: '1rem' }}>
          <p style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '0.65rem',
            letterSpacing: '0.2em',
            color: 'var(--text-muted)',
            textTransform: 'uppercase',
            marginBottom: '1rem'
          }}>
            Contact for Details
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <motion.a
              href="tel:03016459274"
              whileHover={{ scale: 1.05, color: 'var(--gold-light)' }}
              className="event-detail-row"
              style={{ margin: 0, textDecoration: 'none' }}
            >
              <Phone size={14} />
              <span style={{ letterSpacing: '0.1em', fontWeight: 500 }}>0301 6459274</span>
            </motion.a>
            <motion.a
              href="tel:03016411063"
              whileHover={{ scale: 1.05, color: 'var(--gold-light)' }}
              className="event-detail-row"
              style={{ margin: 0, textDecoration: 'none' }}
            >
              <Phone size={14} />
              <span style={{ letterSpacing: '0.1em', fontWeight: 500 }}>0301 6411063</span>
            </motion.a>
          </div>
        </div>

        <motion.p
          whileHover={{ letterSpacing: '0.35em' }}
          transition={{ duration: 0.4 }}
          style={{
            marginTop: '2.5rem',
            fontFamily: 'var(--font-sans)',
            fontSize: '0.6rem',
            fontWeight: 500,
            letterSpacing: '0.25em',
            color: 'var(--gold)',
            cursor: 'default',
            textTransform: 'uppercase',
          }}
        >
          Join the celebration
        </motion.p>
      </div>
    </motion.div>
  );
};

export default EventCard;
