'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export interface Leader {
  init: string;
  name: string;
  ml: string;
  period: string;
  party: string;
  quote: string;
  image?: string;
}

const LEADERS: Leader[] = [
  {
    init: 'E',
    name: 'E.M.S. NAMBOODIRIPAD',
    ml: 'ഇ.എം.എസ്. നമ്പൂതിരിപ്പാട്',
    period: '1957–1959 | 1967–1969',
    party: 'CPI(M)',
    quote: 'Real strength lies in the connection with the masses. ജനങ്ങളുമായുള്ള ബന്ധത്തിലാണ് ഒരു പാർട്ടിയുടെ ശക്തി.',
    image: '/leaders/ems.png',
  },
  {
    init: 'C',
    name: 'C. ACHUTHA MENON',
    ml: 'സി. അച്യുതമേനോൻ',
    period: '1969–1977',
    party: 'CPI',
    quote: "Progress is built on the foundation of the people's trust. ജനങ്ങളുടെ വിശ്വാസത്തിലാണ് പ്രഗതി.",
    image: '/leaders/achutha-menon.jfif',
  },
  {
    init: 'E',
    name: 'E.K. NAYANAR',
    ml: 'ഇ.കെ. നായനാർ',
    period: '1980–81 | 1987–91 | 1996–2001',
    party: 'CPI(M)',
    quote: 'Democracy means power to the working class. ജനാധിപത്യം എന്നാൽ തൊഴിലാളി വർഗ്ഗത്തിന്റെ അധികാരം.',
    image: '/leaders/nayanar.jpg',
  },
  {
    init: 'V',
    name: 'V.S. ACHUTHANANDAN',
    ml: 'വി.എസ്. അച്യുതാനന്ദൻ',
    period: '2006–2011',
    party: 'CPI(M)',
    quote: 'Corruption is the enemy of the people. അഴിമതി ജനങ്ങളുടെ ശത്രുവാണ്.',
    image: '/leaders/vs.jfif',
  },
  {
    init: 'P',
    name: 'PINARAYI VIJAYAN',
    ml: 'പിണറായി വിജയൻ',
    period: '2016–Present',
    party: 'CPI(M)',
    quote: 'Development and social justice must walk hand in hand. വികസനവും സാമൂഹ്യ നീതിയും ഒരുമിച്ച് നടക്കണം.',
    image: '/leaders/pinarayi.jpg',
  },
];

interface LeaderSlideshowProps {
  lang: 'en' | 'ml';
}

export default function LeaderSlideshow({ lang }: LeaderSlideshowProps) {
  const [activeLeader, setActiveLeader] = useState<Leader | null>(LEADERS[0]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring' as const, stiffness: 100, damping: 15 },
    },
  };

  return (
    <section id="s-history">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
      >
        <div className="sec-label">02 / THE LEGACY</div>
        <div className="sec-title">
          KERALA&apos;S<br />
          <span style={{ color: 'var(--red)' }}>COMMUNIST</span><br />
          LEADERS
        </div>
        <div className="sec-title-ml ml">കേരളം കണ്ട നേതാക്കൾ</div>
      </motion.div>

      {/* Leaders Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="leaders-grid"
      >
        {LEADERS.map((leader, i) => {
          const isActive = activeLeader?.name === leader.name;
          return (
            <motion.div
              key={i}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              onClick={() => setActiveLeader(isActive ? null : leader)}
              className={`leader-card ${isActive ? 'active' : ''}`}
            >
              <div className="lc-photo" style={{ overflow: 'hidden', padding: 0 }}>
                {leader.image ? (
                  <img
                    src={leader.image}
                    alt={leader.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                ) : (
                  leader.init
                )}
              </div>
              <div className="lc-party">{leader.party}</div>
              <div className="lc-name">{lang === 'ml' ? leader.ml : leader.name}</div>
              <div className="lc-period">{leader.period}</div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Leader Detail Box with Smooth AnimatePresence */}
      <div style={{ minHeight: '160px', position: 'relative' }}>
        <AnimatePresence mode="wait">
          {activeLeader && (
            <motion.div
              key={activeLeader.name}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              className="leader-detail"
            >
              <div>
                <div className="ld-title">{activeLeader.party}</div>
                <div className="ld-name-big">{activeLeader.name}</div>
                <div className="ld-ml ml">{activeLeader.ml}</div>
                <div style={{ margin: '14px 0', fontSize: '12px', letterSpacing: '0.2em', color: 'rgba(30,30,30,0.5)', fontWeight: 700 }}>
                  {activeLeader.period}
                </div>
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.15, duration: 0.4 }}
                  style={{ originX: 0 }}
                  className="ld-quote ml"
                >
                  &ldquo;{activeLeader.quote}&rdquo;
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
