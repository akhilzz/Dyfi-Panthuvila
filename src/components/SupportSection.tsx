'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface SupportSectionProps {
  lang: 'en' | 'ml';
}

export default function SupportSection({ lang }: SupportSectionProps) {
  const scrollToNiv = () => {
    document.getElementById('s-niv')?.scrollIntoView({ behavior: 'smooth' });
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring' as const, stiffness: 80, damping: 15 },
    },
  };

  return (
    <section id="s-support">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
      >
        <div className="sec-label">06 / CARE</div>
        <div className="sec-title">
          NOBODY <span style={{ color: 'var(--red)' }}>LEFT BEHIND</span>
        </div>
        <div className="sec-title-ml ml">ആരും ഒറ്റയ്ക്കല്ല</div>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="support-grid"
      >
        {/* Old Age Support */}
        <motion.div variants={cardVariants} className="support-card">
          <div>
            <div className="sc-icon">♿</div>
            <div className="sc-title">Old Age Support</div>
            <div className="sc-ml ml">വൃദ്ധജന പിന്തുണ</div>
            <ul className="sc-list ml">
              <li>Monthly visits (പ്രതിമാസ സന്ദർശനം)</li>
              <li>Medical escort (ചികിത്സാ സഹായം)</li>
              <li>Financial aid (സാമ്പത്തിക സഹായം)</li>
              <li>Govt scheme guidance (മാർഗ്ഗനിർദ്ദേശം)</li>
            </ul>
          </div>
          <div className="sc-btn" onClick={scrollToNiv}>
            APPLY VIA NIVEDANAM →
          </div>
        </motion.div>

        {/* Medical Aid Fund */}
        <motion.div variants={cardVariants} className="support-card">
          <div>
            <div className="sc-icon">🏥</div>
            <div className="sc-title">Medical Aid Fund</div>
            <div className="sc-ml ml">വൈദ്യ സഹായ നിധി</div>
            <ul className="sc-list ml">
              <li>Emergency funds (അടിയന്തിര ഫണ്ടുകൾ)</li>
              <li>Hospital coordination (ആശുപത്രി ഏകോപനം)</li>
              <li>Medicine support (മരുന്ന് സഹായം)</li>
              <li>Post-treatment care (പരിചരണം)</li>
            </ul>
          </div>
          <div className="sc-btn" onClick={scrollToNiv}>
            APPLY VIA NIVEDANAM →
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
