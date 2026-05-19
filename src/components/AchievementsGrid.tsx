'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface Program {
  name: string;
  desc: string;
}

const PROGRAMS: Program[] = [
  { name: 'Blood Donation Camp', desc: 'വാർഷിക ജില്ലാ ക്യാമ്പ്. 500+ യൂണിറ്റ് ശേഖരിച്ചു.' },
  { name: 'Literacy Mission', desc: '15 വാർഡുകളിൽ പ്രൗഢ സാക്ഷരത സഹായം.' },
  { name: 'Flood Relief 2024', desc: '800 കുടുംബങ്ങൾക്ക് അടിയന്തര കിറ്റ് വിതരണം.' },
  { name: 'Free Medical Camp', desc: '1,200 നിവാസികൾക്ക് ആരോഗ്യ പരിശോധന.' },
  { name: 'Infrastructure Aid', desc: 'റോഡ്, ഡ്രെയിൻ പരാതി, ഫോളോ-അപ്.' },
  { name: 'Scholarship Guidance', desc: '300+ വിദ്യാർത്ഥികൾക്ക് കരിയർ കൗൺസലിംഗ്.' },
];

interface AchievementsGridProps {
  lang: 'en' | 'ml';
}

export default function AchievementsGrid({ lang }: AchievementsGridProps) {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const statVariants = {
    hidden: { opacity: 0, scale: 0.85 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: 'spring' as const, stiffness: 100, damping: 15 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: 'spring' as const, stiffness: 80, damping: 14 },
    },
  };

  return (
    <section id="s-achievements">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
      >
        <div className="sec-label">04 / WHAT WE DID</div>
        <div className="sec-title">
          ACHIEVE<span style={{ color: 'var(--red)' }}>MENTS</span>
        </div>
        <div className="sec-title-ml ml">നേട്ടങ്ങൾ</div>
      </motion.div>

      {/* Stats Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="stats-grid"
      >
        <motion.div variants={statVariants} className="stat-box">
          <div className="sb-num">50+</div>
          <div className="sb-lbl">PROGRAMS</div>
          <div className="sb-sub ml">ഈ വർഷം</div>
        </motion.div>
        <motion.div variants={statVariants} className="stat-box">
          <div className="sb-num">10K+</div>
          <div className="sb-lbl">PEOPLE HELPED</div>
          <div className="sb-sub ml">ജില്ലയിൽ</div>
        </motion.div>
        <motion.div variants={statVariants} className="stat-box">
          <div className="sb-num">5</div>
          <div className="sb-lbl">BLOOD CAMPS</div>
          <div className="sb-sub ml">2024</div>
        </motion.div>
        <motion.div variants={statVariants} className="stat-box">
          <div className="sb-num">200+</div>
          <div className="sb-lbl">VOLUNTEERS</div>
          <div className="sb-sub ml">സജീവ അംഗങ്ങൾ</div>
        </motion.div>
      </motion.div>

      {/* Programs Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="prog-grid"
      >
        {PROGRAMS.map((p, idx) => (
          <motion.div
            key={idx}
            variants={cardVariants}
            whileHover={{ x: 6 }}
            className="prog-card"
          >
            <div className="pc-name">{p.name}</div>
            <div className="pc-desc ml">{p.desc}</div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
