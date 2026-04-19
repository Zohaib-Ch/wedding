import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Clock } from 'lucide-react';

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

        <motion.p
          whileHover={{ letterSpacing: '0.35em' }}
          transition={{ duration: 0.4 }}
          style={{
            marginTop: '2rem',
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
