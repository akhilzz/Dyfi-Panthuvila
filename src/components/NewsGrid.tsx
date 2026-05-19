'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface NewsItem {
  category: string;
  head: string;
  exc: string;
  date: string;
}

const NEWS: NewsItem[] = [
  {
    category: 'LOCAL',
    head: 'DYFI PANTHUVILA HOLDS BLOOD DONATION CAMP',
    exc: 'കമ്മ്യൂണിറ്റി ഹാളിൽ നടന്ന വാർഷിക രക്തദാന ക്യാമ്പിൽ 80-ലധികം യൂണിറ്റ് രക്തം ശേഖരിച്ചു.',
    date: 'MAY 2025',
  },
  {
    category: 'KERALA',
    head: 'LDF WINS LOCAL BODY ELECTIONS',
    exc: 'തിരുവനന്തപുരം കോർപ്പറേഷനിലും പ്രാദേശിക വാർഡുകളിലും ഇടതുപക്ഷ ജനാധിപത്യ മുന്നണിക്ക് മികച്ച വിജയം.',
    date: 'APR 2025',
  },
  {
    category: 'NATIONAL',
    head: 'DYFI NATIONAL CONFERENCE RESOLUTIONS',
    exc: 'യുവജന തൊഴിൽ ഉറപ്പുവരുത്തുന്നതിനും വിദ്യാഭ്യാസ നയങ്ങൾക്കുമെതിരെ ശക്തമായ പ്രമേയങ്ങൾ പാസാക്കി.',
    date: 'MAR 2025',
  },
  {
    category: 'LOCAL',
    head: 'FREE MEDICAL CAMP AT PANTHUVILA',
    exc: 'സൗജന്യ ആരോഗ്യ പരിശോധനയിലും വിദഗ്ധ കൺസൾട്ടേഷനിലുമായി 1,200-ലധികം നാട്ടുകാർ പങ്കെടുത്തു.',
    date: 'FEB 2025',
  },
  {
    category: 'WORLD',
    head: 'PROGRESSIVE PARTIES GAIN IN EUROPE',
    exc: 'യൂറോപ്പിലെ വിവിധ റീജണൽ മുനിസിപ്പാലിറ്റികളിലേക്ക് നടന്ന കൗൺസിൽ തെരഞ്ഞെടുപ്പിൽ പുരോഗമന ശക്തികൾക്ക് മുന്നേറ്റം.',
    date: 'JAN 2025',
  },
  {
    category: 'KERALA',
    head: 'KERALA MODEL PRAISED GLOBALLY',
    exc: 'കേരളത്തിന്റെ പൊതുജനാരോഗ്യ സംവിധാനങ്ങളെയും വിദ്യാഭ്യാസ നേട്ടങ്ങളെയും കുറിച്ച് ആഗോള റിപ്പോർട്ടിൽ അഭിനന്ദനം.',
    date: 'DEC 2024',
  },
];

const TABS = ['ALL', 'LOCAL', 'KERALA', 'NATIONAL', 'WORLD'];

interface NewsGridProps {
  lang: 'en' | 'ml';
}

export default function NewsGrid({ lang }: NewsGridProps) {
  const [activeTab, setActiveTab] = useState('ALL');

  const filteredNews = NEWS.filter((n) => {
    if (activeTab === 'ALL') return true;
    return n.category === activeTab;
  });

  return (
    <section id="s-news">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
      >
        <div className="sec-label">08 / THE WORLD</div>
        <div className="sec-title">
          NEWS &amp;<br />
          <span style={{ color: 'var(--red)' }}>ARTICLES</span>
        </div>
        <div className="sec-title-ml ml">വാർത്തകൾ</div>
      </motion.div>

      {/* Filter Tabs */}
      <div className="events-filter">
        {TABS.map((tab) => (
          <span
            key={tab}
            className={`ef-btn ${activeTab === tab ? 'active' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </span>
        ))}
      </div>

      {/* Animated News Grid */}
      <motion.div layout className="news-grid">
        <AnimatePresence mode="popLayout">
          {filteredNews.map((n, idx) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              whileHover={{ y: -6 }}
              key={n.head}
              className="news-card"
            >
              <div className="nc-cat">{n.category}</div>
              <div className="nc-head">{n.head}</div>
              <div className="nc-exc ml">{n.exc}</div>
              <div className="nc-foot">
                <span className="nc-date">{n.date}</span>
                <span className="nc-more">READ MORE →</span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
