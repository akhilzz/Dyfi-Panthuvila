'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface StudentsSectionProps {
  lang: 'en' | 'ml';
}

export default function StudentsSection({ lang }: StudentsSectionProps) {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, x: -40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: 'spring' as const, stiffness: 80, damping: 15 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, x: 40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: 'spring' as const, stiffness: 90, damping: 14 },
    },
  };

  return (
    <section id="s-students">
      <div className="sec-label">06 / TOMORROW&apos;S VOICE</div>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="students-wrap"
      >
        <motion.div variants={textVariants} className="students-left">
          <div className="congrats-ml">അഭിനന്ദ<br />നങ്ങൾ</div>
          <div className="congrats-en">CONGRATULATIONS</div>
          <p className="congrats-body">
            {lang === 'ml' ? (
              <>
                എസ്.എസ്.എൽ.സി, പ്ലസ് ടു പരീക്ഷകളിൽ ഉന്നത വിജയം കൈവരിച്ച പന്തുവിള പ്രദേശത്തെ മുഴുവൻ വിദ്യാർത്ഥികൾക്കും ഡി.വൈ.എഫ്.ഐ. പന്തുവിള യൂണിറ്റിന്റെ ഹൃദയം നിറഞ്ഞ അഭിനന്ദനങ്ങൾ.
                <br /><br />
                ഡി.വൈ.എഫ്.ഐ. പന്തുവിള യൂണിറ്റ്
              </>
            ) : (
              <>
                DYFI Panthuvila Unit congratulates every student who completed their SSLC and Plus Two examinations. Your achievement is a victory for your family and our community.
                <br /><br />
                ഡി.വൈ.എഫ്.ഐ. പന്തുവിള യൂണിറ്റ്
              </>
            )}
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          className="students-right"
        >
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -4 }}
            className="grade-card"
          >
            <div className="gc-num">10</div>
            <div className="gc-lbl">SSLC ACHIEVERS</div>
            <div className="gc-ml">ആം ക്ലാസ്</div>
          </motion.div>

          <motion.div
            variants={cardVariants}
            whileHover={{ y: -4 }}
            className="grade-card"
          >
            <div className="gc-num">+2</div>
            <div className="gc-lbl">HIGHER SECONDARY</div>
            <div className="gc-ml">ഹയർ സെക്കൻഡറി</div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
