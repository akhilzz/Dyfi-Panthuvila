'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface EventItem {
  category: string;
  name: string;
  date: string;
}

const EVENTS: EventItem[] = [
  { category: 'CAMPAIGN', name: 'BLOOD DONATION DRIVE', date: 'MAR 2025' },
  { category: 'PROGRAM', name: 'FLOOD RELIEF DIST.', date: 'AUG 2024' },
  { category: 'MEETING', name: 'DISTRICT CONFERENCE', date: 'JAN 2025' },
  { category: 'PROGRAM', name: 'MEDICAL CAMP', date: 'FEB 2025' },
  { category: 'CAMPAIGN', name: 'LITERACY DRIVE', date: 'NOV 2024' },
  { category: 'MEETING', name: 'BRANCH MEETING', date: 'APR 2025' },
];

const FILTERS = ['ALL', 'PROGRAMS', 'MEETINGS', 'CAMPAIGNS'];

interface EventsGalleryProps {
  lang: 'en' | 'ml';
}

export default function EventsGallery({ lang }: EventsGalleryProps) {
  const [activeFilter, setActiveFilter] = useState('ALL');

  const filteredEvents = EVENTS.filter((e) => {
    if (activeFilter === 'ALL') return true;
    if (activeFilter === 'PROGRAMS') return e.category === 'PROGRAM';
    if (activeFilter === 'MEETINGS') return e.category === 'MEETING';
    if (activeFilter === 'CAMPAIGNS') return e.category === 'CAMPAIGN';
    return true;
  });

  return (
    <section id="s-events">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
      >
        <div className="sec-label">05 / GALLERY</div>
        <div className="sec-title">
          EVENTS &amp;<br />
          <span style={{ color: 'var(--red)' }}>PROGRAMS</span>
        </div>
        <div className="sec-title-ml ml">പരിപാടികൾ</div>
      </motion.div>

      {/* Filter Options */}
      <div className="events-filter">
        {FILTERS.map((f) => (
          <span
            key={f}
            className={`ef-btn ${activeFilter === f ? 'active' : ''}`}
            onClick={() => setActiveFilter(f)}
          >
            {f}
          </span>
        ))}
      </div>

      {/* Animated Gallery Grid */}
      <motion.div layout className="events-grid">
        <AnimatePresence mode="popLayout">
          {filteredEvents.map((item, idx) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              whileHover={{ y: -6 }}
              key={item.name}
              className="event-card"
            >
              <div className="ec-placeholder">☭</div>
              <div className="ec-cat">{item.category}</div>
              <div className="ec-name">{item.name}</div>
              <div className="ec-date">{item.date}</div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="admin-note"
      >
        🔒 Photos are uploaded by DYFI Panthuvila admin only. Public can view — not upload.
      </motion.div>
    </section>
  );
}
