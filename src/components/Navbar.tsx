'use client';

import React, { useState } from 'react';

type NavbarProps = {
  lang?: 'en' | 'ml';
  onLangChange?: (lang: 'en' | 'ml') => void;
};

export default function Navbar({ lang = 'ml', onLangChange }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: 'HISTORY',      nameMl: 'ചരിത്രം',    id: 's-history' },
    { name: 'MEMBERS',      nameMl: 'അംഗങ്ങൾ',    id: 's-members' },
    { name: 'ACHIEVEMENTS', nameMl: 'നേട്ടങ്ങൾ',  id: 's-achievements' },
    { name: 'GALLERY',      nameMl: 'ഗ്യാലറി',    id: 's-events' },
    { name: 'STUDENTS',     nameMl: 'വിദ്യാർത്ഥി', id: 's-students' },
    { name: 'SUPPORT',      nameMl: 'സഹായം',      id: 's-support' },
    { name: 'NEWS',         nameMl: 'വാർത്ത',      id: 's-news' },
  ];

  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <nav className="custom-nav">
      {/* Brand — stacked so DYFI and sub never overlap */}
      <div
        className="nav-brand-block select-none cursor-pointer"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <div 
          className="nav-brand"
          style={{
            fontFamily: lang === 'ml' ? "'Noto Sans Malayalam', sans-serif" : 'var(--font-display)',
            fontSize: lang === 'ml' ? '24px' : '32px',
            fontWeight: 900
          }}
        >
          {lang === 'ml' ? 'ഡി.വൈ.എഫ്.ഐ.' : 'DYFI'}
        </div>
        <div className="nav-sub">
          {lang === 'ml' ? 'പന്തുവിള യൂണിറ്റ്' : 'PANTHUVILA UNIT'}
        </div>
      </div>

      {/* Hammer & Sickle Emblem — desktop only */}
      <div className="hidden lg:flex justify-center items-center opacity-80">
        <svg width="26" height="26" viewBox="0 0 100 100" fill="none">
          <circle cx="35" cy="62" r="20" stroke="#C8102E" strokeWidth="9" fill="none" />
          <path
            d="M35 42 Q34 14 60 9 Q48 28 52 40"
            stroke="#C8102E"
            strokeWidth="9"
            fill="none"
            strokeLinecap="round"
          />
          <rect x="46" y="28" width="9" height="46" rx="4" fill="#C8102E" transform="rotate(-44 50 51)" />
          <rect x="49" y="49" width="30" height="9" rx="4" fill="#C8102E" />
        </svg>
      </div>

      {/* Desktop nav links */}
      <div className="hidden md:flex items-center gap-6">
        {navLinks.map((item) => (
          <button
            key={item.id}
            onClick={() => handleScroll(item.id)}
            className="nav-link-btn"
          >
            {lang === 'ml' ? item.nameMl : item.name}
          </button>
        ))}
      </div>

      {/* Right side: Nivedanam + Lang toggle + Mobile hamburger */}
      <div className="flex items-center gap-4">
        <button onClick={() => handleScroll('s-join')} className="nav-btn hidden md:block" style={{ backgroundColor: 'var(--red)', color: 'white' }}>
          {lang === 'ml' ? 'അംഗമാകുക' : 'JOIN MEMBERSHIP'}
        </button>
        <button onClick={() => handleScroll('s-niv')} className="nav-btn hidden md:block">
          {lang === 'ml' ? 'നിവേദനം' : 'NIVEDANAM'}
        </button>

        {/* Language toggle */}
        <div className="flex gap-2 pl-4 border-l border-[rgba(0,0,0,0.12)]">
          {(['en', 'ml'] as const).map((l) => (
            <button
              key={l}
              onClick={() => onLangChange?.(l)}
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '13px',
                fontWeight: 900,
                letterSpacing: '0.15em',
                color: lang === l ? 'var(--red)' : 'rgba(26,26,26,0.45)',
                borderBottom: lang === l ? '2px solid var(--red)' : '2px solid transparent',
                paddingBottom: '2px',
                background: 'none',
                borderTop: 'none',
                borderLeft: 'none',
                borderRight: 'none',
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
            >
              {l.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1 cursor-pointer"
          onClick={() => setMenuOpen((v) => !v)}
          style={{ background: 'none', border: 'none', padding: '4px' }}
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              style={{
                display: 'block',
                width: '22px',
                height: '2px',
                background: 'var(--red)',
                borderRadius: '2px',
              }}
            />
          ))}
        </button>
      </div>

      {/* Mobile menu dropdown */}
      {menuOpen && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            background: 'rgba(253,252,247,0.98)',
            backdropFilter: 'blur(16px)',
            borderTop: '2px solid var(--red)',
            padding: '24px 32px',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            zIndex: 200,
            boxShadow: '0 8px 30px rgba(0,0,0,0.08)',
          }}
        >
          {navLinks.map((item) => (
            <button
              key={item.id}
              onClick={() => handleScroll(item.id)}
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '16px',
                fontWeight: 800,
                letterSpacing: '0.15em',
                color: 'rgba(26,26,26,0.85)',
                textAlign: 'left',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '8px 0',
                borderBottom: '1px solid rgba(211,30,54,0.08)',
              }}
            >
              {lang === 'ml' ? item.nameMl : item.name}
            </button>
          ))}
          <button
            onClick={() => handleScroll('s-join')}
            className="nav-btn"
            style={{ alignSelf: 'flex-start', marginTop: '8px', backgroundColor: 'var(--red)', color: 'white' }}
          >
            {lang === 'ml' ? 'അംഗമാകുക' : 'JOIN MEMBERSHIP'}
          </button>
          <button
            onClick={() => handleScroll('s-niv')}
            className="nav-btn"
            style={{ alignSelf: 'flex-start', marginTop: '8px' }}
          >
            {lang === 'ml' ? 'നിവേദനം' : 'NIVEDANAM'}
          </button>
        </div>
      )}
    </nav>
  );
}
