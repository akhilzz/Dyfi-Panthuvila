'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface HeroSectionProps {
  lang: 'en' | 'ml';
}

export default function HeroSection({ lang }: HeroSectionProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring' as const, stiffness: 80, damping: 15 },
    },
  };

  return (
    <div className="hero">
      {/* Decorative floating shapes */}
      <svg className="hero-geo" viewBox="0 0 700 580" preserveAspectRatio="xMidYMid slice">
        <motion.circle
          initial={{ opacity: 0.1, scale: 0.9 }}
          animate={{ opacity: 0.15, scale: 1.05 }}
          transition={{ duration: 6, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
          cx="590"
          cy="280"
          r="230"
          fill="none"
          stroke="#D31E36"
          strokeWidth="0.6"
        />
        <motion.circle
          initial={{ opacity: 0.1, scale: 1.05 }}
          animate={{ opacity: 0.2, scale: 0.95 }}
          transition={{ duration: 8, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
          cx="590"
          cy="280"
          r="160"
          fill="none"
          stroke="#D31E36"
          strokeWidth="0.5"
        />
        <line x1="0" y1="520" x2="700" y2="520" stroke="#D31E36" strokeWidth="0.3" opacity="0.4" />
      </svg>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="hero-body"
      >
        <div className="hero-left">
          <motion.div variants={itemVariants} className="top-label">
            <div className="rdot"></div>
            <span className="ltxt">01 / PANTHUVILA BRANCH · ACTIVE</span>
          </motion.div>

          <motion.div variants={itemVariants} className="branch-tag">
            DEMOCRATIC YOUTH FEDERATION OF INDIA
          </motion.div>

          <motion.p variants={itemVariants} className="hero-ml-txt ml">
            ഡി.വൈ.എഫ്.ഐ. പന്തുവിള
          </motion.p>

          <motion.h1 variants={itemVariants} className="hero-h1">
            {lang === 'ml' ? (
              <>
                പന്തുവിള<br />
                <span>യൂണിറ്റ്</span>
              </>
            ) : (
              <>
                PANTHU<span>VILA</span><br />
                BRANCH
              </>
            )}
          </motion.h1>

          <motion.p variants={itemVariants} className="hero-dist">
            THIRUVANANTHAPURAM DISTRICT
          </motion.p>

          <motion.div
            variants={itemVariants}
            initial={{ width: 0 }}
            animate={{ width: 80 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.5 }}
            className="rbar"
          ></motion.div>

          <motion.p variants={itemVariants} className="hero-p ml">
            ജനങ്ങൾക്കായി · For the people.<br />
            Transparent. Accountable. United.<br />
            Building a just Kerala through youth power.
          </motion.p>

          <motion.div variants={itemVariants} className="scroll-hint">
            <motion.div
              animate={{ x: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
              className="sline"
            ></motion.div>
            <span className="stxt">SCROLL TO EXPLORE</span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -20 }}
          animate={{ opacity: 0.85, scale: 1, rotate: 0 }}
          transition={{ type: 'spring' as const, stiffness: 60, damping: 15, delay: 0.4 }}
          className="hero-right"
        >
          <svg width="180" height="180" viewBox="0 0 100 100" fill="none">
            <circle cx="35" cy="62" r="22" stroke="#D31E36" strokeWidth="9" fill="none" />
            <path
              d="M35 40 Q34 10 64 6 Q50 26 54 40"
              stroke="#D31E36"
              strokeWidth="9"
              fill="none"
              strokeLinecap="round"
            />
            <rect
              x="46" y="26" width="9" height="50" rx="4"
              fill="#D31E36"
              transform="rotate(-44 50 51)"
            />
            <rect x="49" y="49" width="32" height="9" rx="4" fill="#D31E36" />
          </svg>
        </motion.div>
      </motion.div>

      {/* Stats Bar */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: 'spring' as const, stiffness: 50, damping: 12, delay: 0.6 }}
        className="stats-bar"
      >
        <div className="stat">
          <div className="snum">50+</div>
          <div className="slbl">{lang === 'ml' ? 'പരിപാടികൾ' : 'PROGRAMS'}</div>
        </div>
        <div className="stat">
          <div className="snum">10K+</div>
          <div className="slbl">{lang === 'ml' ? 'സഹായം ലഭിച്ചവർ' : 'PEOPLE HELPED'}</div>
        </div>
        <div className="stat">
          <div className="snum">1980</div>
          <div className="slbl">{lang === 'ml' ? 'സ്ഥാപിതം' : 'ESTABLISHED'}</div>
        </div>
        <div className="stat">
          <div className="snum">200+</div>
          <div className="slbl">{lang === 'ml' ? 'വളണ്ടിയർമാർ' : 'VOLUNTEERS'}</div>
        </div>
      </motion.div>
    </div>
  );
}
