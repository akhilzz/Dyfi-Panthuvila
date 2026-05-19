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
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring' as const, stiffness: 85, damping: 15 },
    },
  };

  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
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
        {/* Left Side Info */}
        <div className="hero-left">
          <motion.div variants={itemVariants} className="top-label">
            <div className="rdot"></div>
            <span className="ltxt">
              {lang === 'ml' ? '01 / പന്തുവിള യൂണിറ്റ് · സജീവം' : '01 / PANTHUVILA UNIT · ACTIVE'}
            </span>
          </motion.div>

          <motion.div variants={itemVariants} className="branch-tag">
            DEMOCRATIC YOUTH FEDERATION OF INDIA
          </motion.div>

          <motion.p variants={itemVariants} className="hero-ml-txt ml">
            ഡി.വൈ.എഫ്.ഐ.
          </motion.p>

          <motion.h1 
            variants={itemVariants} 
            className={`hero-h1 ${lang === 'ml' ? 'hero-h1-ml-single' : ''}`}
          >
            {lang === 'ml' ? (
              <>
                പന്തുവിള <span>യൂണിറ്റ്</span>
              </>
            ) : (
              <>
                PANTHU<span>VILA</span><br />
                UNIT
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
            {lang === 'ml' ? (
              <>
                ജനശക്തിയിലൂടെ നീതിയുക്തവും സമത്വപൂർണ്ണവുമായ ശാസ്ത്രീയ സോഷ്യലിസ്റ്റ് സമൂഹം കെട്ടിപ്പടുക്കാൻ ഡി.വൈ.എഫ്.ഐ പന്തുവിള മുന്നോട്ട്!
              </>
            ) : (
              <>
                Building a just, equal and progressive socialist society through the ultimate power of youth. DYFI Panthuvila stands united!
              </>
            )}
          </motion.p>

          {/* TWO DYNAMIC CTA BUTTONS */}
          <motion.div variants={itemVariants} className="hero-ctas mt-8 flex flex-wrap gap-4">
            <button 
              onClick={() => handleScroll('s-join')} 
              className="hero-cta-btn main"
            >
              {lang === 'ml' ? 'അംഗമാകുക (JOIN DYFI)' : 'JOIN DYFI →'}
            </button>
            <button 
              onClick={() => handleScroll('s-niv')} 
              className="hero-cta-btn secondary"
            >
              {lang === 'ml' ? 'നിവേദനം സമർപ്പിക്കുക' : 'SUBMIT NIVEDANAM'}
            </button>
          </motion.div>

          {/* SCROLL HINT */}
          <motion.div variants={itemVariants} className="scroll-hint mt-8">
            <motion.div
              animate={{ x: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
              className="sline"
            ></motion.div>
            <span className="stxt">SCROLL TO EXPLORE</span>
          </motion.div>
        </div>

        {/* Right Side Glassmorphic Heritage Meeting Card & Rotating Emblem */}
        <div className="hero-right flex flex-col items-center justify-center relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring' as const, stiffness: 60, damping: 14, delay: 0.3 }}
            className="hero-right-deck relative z-10 w-full max-w-[380px]"
          >
            {/* HERITAGE MEETING CARD */}
            <div className="meeting-card-glass">
              {/* Card top mini banner */}
              <div className="mc-g-top">
                <span className="mc-g-top-tag">DYFI HERITAGE ANNOUNCEMENT</span>
                <span className="mc-g-top-dot"></span>
              </div>
              
              <div className="mc-g-body">
                <div className="mc-g-title">
                  {lang === 'ml' ? 'അടുത്ത യൂണിറ്റ് യോഗം' : 'NEXT UNIT MEETING'}
                </div>
                
                <div className="mc-g-date-block">
                  <div className="mc-g-date-val">24</div>
                  <div className="mc-g-date-meta">
                    <span className="mc-g-date-month">{lang === 'ml' ? 'മെയ് 2026' : 'MAY 2026'}</span>
                    <span className="mc-g-date-day">{lang === 'ml' ? 'ഞായറാഴ്ച · വൈകുന്നേരം 5:00' : 'SUNDAY · 5:00 PM'}</span>
                  </div>
                </div>
                
                <div className="mc-g-info-row">
                  <span className="mc-g-info-lbl">{lang === 'ml' ? 'സ്ഥലം' : 'VENUE'}:</span>
                  <span className="mc-g-info-val">{lang === 'ml' ? 'യൂണിറ്റ് ഓഫീസ്, പന്തുവിള' : 'Unit Office, Panthuvila'}</span>
                </div>
                
                <div className="mc-g-info-row">
                  <span className="mc-g-info-lbl">{lang === 'ml' ? 'വിഷയം' : 'AGENDA'}:</span>
                  <span className="mc-g-info-val">{lang === 'ml' ? 'പഠനക്ലാസ്സും കാമ്പയിൻ രൂപീകരണവും' : 'Study Class & Campaign Planning'}</span>
                </div>
                
                <div className="mc-g-footer">
                  <span>★ ALL UNIT MEMBERS MUST ATTEND ★</span>
                </div>
              </div>
            </div>

            {/* Subtle Overlay Golden Glowing Emblem Badge */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
              className="absolute -top-12 -right-8 w-24 h-24 rounded-full flex items-center justify-center border border-[rgba(211,30,54,0.18)]"
              style={{
                background: 'rgba(253, 252, 247, 0.95)',
                boxShadow: '0 8px 32px rgba(211,30,54,0.1)',
                backdropFilter: 'blur(8px)'
              }}
            >
              <svg width="44" height="44" viewBox="0 0 100 100" fill="none">
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
        </div>
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
