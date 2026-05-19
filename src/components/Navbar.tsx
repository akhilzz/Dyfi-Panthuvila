'use client';

import React from 'react';

type NavbarProps = {
  lang?: 'en' | 'ml';
  onLangChange?: (lang: 'en' | 'ml') => void;
};

export default function Navbar({ lang = 'ml', onLangChange }: NavbarProps) {
  const navLinks = [
    { name: 'HISTORY', id: 's-history' },
    { name: 'MEMBERS', id: 's-members' },
    { name: 'ACHIEVEMENTS', id: 's-achievements' },
    { name: 'GALLERY', id: 's-events' },
    { name: 'STUDENTS', id: 's-students' },
    { name: 'SUPPORT', id: 's-support' },
    { name: 'NEWS', id: 's-news' },
  ];

  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="custom-nav">
      {/* Brand logo details */}
      <div
        className="nav-l select-none cursor-pointer"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <span className="nav-brand">DYFI</span>
        <span className="nav-sub">
          {lang === 'ml' ? 'പന്തുവിള യൂണിറ്റ്' : 'PANTHUVILA UNIT'}
        </span>
      </div>

      {/* Hammer & Sickle Emblem */}
      <div className="hidden lg:flex justify-center items-center opacity-85">
        <svg width="20" height="20" viewBox="0 0 100 100" fill="none">
          <circle cx="35" cy="62" r="20" stroke="#C8102E" strokeWidth="9" fill="none" />
          <path
            d="M35 42 Q34 14 60 9 Q48 28 52 40"
            stroke="#C8102E"
            strokeWidth="9"
            fill="none"
            strokeLinecap="round"
          />
          <rect
            x="46" y="28" width="9" height="46" rx="4"
            fill="#C8102E"
            transform="rotate(-44 50 51)"
          />
          <rect x="49" y="49" width="30" height="9" rx="4" fill="#C8102E" />
        </svg>
      </div>

      {/* Navigation Items */}
      <div className="flex items-center gap-4 md:gap-7">
        <div className="hidden md:flex items-center gap-5">
          {navLinks.map((item) => (
            <button
              key={item.id}
              onClick={() => handleScroll(item.id)}
              className="uppercase tracking-[0.3em] font-black hover:text-[var(--red)] transition-colors cursor-pointer text-[8px]"
              style={{
                fontFamily: 'var(--font-display)',
                color: 'rgba(26, 26, 26, 0.7)',
                background: 'none',
                border: 'none',
              }}
            >
              {item.name}
            </button>
          ))}
        </div>

        {/* Nivedanam Quick Action */}
        <button onClick={() => handleScroll('s-niv')} className="nav-btn">
          NIVEDANAM
        </button>

        {/* Language switch controls */}
        <div className="flex gap-3 pl-4 border-l border-[rgba(0,0,0,0.15)]">
          <button
            onClick={() => onLangChange?.('en')}
            className="cursor-pointer font-black tracking-[0.3em] text-[9px]"
            style={{
              fontFamily: 'var(--font-display)',
              color: lang === 'en' ? 'var(--red)' : 'rgba(26, 26, 26, 0.4)',
              borderBottom: lang === 'en' ? '2px solid var(--red)' : 'none',
              paddingBottom: '2px',
              background: 'none',
              borderLeft: 'none',
              borderRight: 'none',
              borderTop: 'none',
            }}
          >
            EN
          </button>
          <button
            onClick={() => onLangChange?.('ml')}
            className="cursor-pointer font-black tracking-[0.3em] text-[9px]"
            style={{
              fontFamily: 'var(--font-display)',
              color: lang === 'ml' ? 'var(--red)' : 'rgba(26, 26, 26, 0.4)',
              borderBottom: lang === 'ml' ? '2px solid var(--red)' : 'none',
              paddingBottom: '2px',
              background: 'none',
              borderLeft: 'none',
              borderRight: 'none',
              borderTop: 'none',
            }}
          >
            ML
          </button>
        </div>
      </div>
    </nav>
  );
}
