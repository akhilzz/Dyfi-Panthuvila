'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface EventItem {
  category: string;
  name: string;
  nameMl?: string;
  date: string;
  dateMl?: string;
  image?: string;
}

const EVENTS: EventItem[] = [
  { 
    category: 'HISTORY', 
    name: 'HOW WE STARTED THE UNIT (PART 1)', 
    nameMl: 'യൂണിറ്റ് ആരംഭകാലം (ഭാഗം 1)', 
    date: 'EST. 1980',
    dateMl: 'സ്ഥാപിതം 1980',
    image: '/gallery/how_we_started/WhatsApp Image 2026-05-19 at 11.25.44 AM.jpeg' 
  },
  { 
    category: 'HISTORY', 
    name: 'HOW WE STARTED THE UNIT (PART 2)', 
    nameMl: 'യൂണിറ്റ് ആരംഭകാലം (ഭാഗം 2)', 
    date: 'EST. 1980',
    dateMl: 'സ്ഥാപിതം 1980',
    image: '/gallery/how_we_started/WhatsApp Image 2026-05-19 at 11.25.44 AM (1).jpeg' 
  },
  { category: 'CAMPAIGN', name: 'BLOOD DONATION DRIVE', nameMl: 'രക്തദാന ക്യാമ്പ്', date: 'MAR 2025', dateMl: 'മാർച്ച് 2025' },
  { category: 'PROGRAM', name: 'FLOOD RELIEF DIST.', nameMl: 'ദുരിതാശ്വാസ നിധി വിതരണം', date: 'AUG 2024', dateMl: 'ഓഗസ്റ്റ് 2024' },
  { category: 'MEETING', name: 'DISTRICT CONFERENCE', nameMl: 'ജില്ലാ സമ്മേളനം', date: 'JAN 2025', dateMl: 'ജനുവരി 2025' },
  { category: 'PROGRAM', name: 'MEDICAL CAMP', nameMl: 'സൗജന്യ മെഡിക്കൽ ക്യാമ്പ്', date: 'FEB 2025', dateMl: 'ഫെബ്രുവരി 2025' },
  { category: 'CAMPAIGN', name: 'LITERACY DRIVE', nameMl: 'സാക്ഷരതാ പ്രവർത്തനം', date: 'NOV 2024', dateMl: 'നവംബർ 2024' },
  { category: 'MEETING', name: 'BRANCH MEETING', nameMl: 'യൂണിറ്റ് സമ്മേളനം', date: 'APR 2025', dateMl: 'ഏപ്രിൽ 2025' },
];

const FILTERS = ['ALL', 'HISTORY', 'PROGRAMS', 'MEETINGS', 'CAMPAIGNS'];

interface EventsGalleryProps {
  lang: 'en' | 'ml';
}

export default function EventsGallery({ lang }: EventsGalleryProps) {
  const [activeFilter, setActiveFilter] = useState('ALL');

  const filteredEvents = EVENTS.filter((e) => {
    if (activeFilter === 'ALL') return true;
    if (activeFilter === 'HISTORY') return e.category === 'HISTORY';
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
              style={{ padding: item.image ? '0' : '36px', overflow: 'hidden' }}
            >
              {item.image ? (
                <>
                  <div style={{ height: '200px', width: '100%', overflow: 'hidden', position: 'relative' }}>
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                    />
                  </div>
                  <div style={{ padding: '24px 28px' }}>
                    <div className="ec-cat">{item.category}</div>
                    <div className="ec-name">{lang === 'ml' && item.nameMl ? item.nameMl : item.name}</div>
                    <div className="ec-date">{lang === 'ml' && item.dateMl ? item.dateMl : item.date}</div>
                  </div>
                </>
              ) : (
                <>
                  <div className="ec-placeholder">☭</div>
                  <div className="ec-cat">{item.category}</div>
                  <div className="ec-name">{lang === 'ml' && item.nameMl ? item.nameMl : item.name}</div>
                  <div className="ec-date">{lang === 'ml' && item.dateMl ? item.dateMl : item.date}</div>
                </>
              )}
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
