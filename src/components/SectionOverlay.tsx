'use client';

import { useState, useEffect } from 'react';
import { motion, MotionValue, useTransform } from 'framer-motion';
import { SectionData, ScrollPhase } from '../data/sections';

type SectionOverlayProps = {
  sectionProgress: MotionValue<number>;
  section: SectionData;
  lang: 'en' | 'ml';
  onLangChange?: (lang: 'en' | 'ml') => void;
};

function PhaseBlock({
  phase,
  sectionProgress,
  lang,
}: {
  phase: ScrollPhase;
  sectionProgress: MotionValue<number>;
  lang: 'en' | 'ml';
}) {
  const start = phase.scrollStart;
  const end = phase.scrollEnd;
  const mid = (start + end) / 2;

  const opacity = useTransform(
    sectionProgress,
    [start, start + 0.07, mid, end - 0.07, end],
    [0, 1, 1, 1, 0]
  );

  const y = useTransform(
    sectionProgress,
    [start, start + 0.1, end - 0.1, end],
    [32, 0, 0, -32]
  );

  const headline = lang === 'ml' ? (phase.headlineMl || phase.headlineEn) : phase.headlineEn;
  const subheadline = lang === 'ml' ? (phase.subheadlineMl || phase.subheadlineEn) : phase.subheadlineEn;
  const paragraph = lang === 'ml' ? (phase.paragraphMl || phase.paragraphEn) : phase.paragraphEn;

  if (!headline && !subheadline && !paragraph) {
    return null;
  }

  let alignmentClasses = 'items-center text-center left-1/2 -translate-x-1/2';
  if (phase.alignment === 'left') {
    alignmentClasses = 'items-start text-left left-8 md:left-24';
  } else if (phase.alignment === 'right') {
    alignmentClasses = 'items-end text-right right-8 md:right-24';
  }

  return (
    <motion.div
      style={{ opacity, y }}
      className={`absolute top-1/2 -translate-y-1/2 flex flex-col ${alignmentClasses} w-[90%] md:w-[60%] max-w-[800px] pointer-events-none`}
    >
      {subheadline && (
        <div
          className="uppercase mb-4"
          style={{
            fontFamily: lang === 'ml' ? 'var(--font-body)' : 'var(--font-display)',
            fontSize: lang === 'ml' ? '11px' : '9px',
            letterSpacing: lang === 'ml' ? 'normal' : '0.45em',
            color: 'rgba(245, 240, 232, 0.45)'
          }}
        >
          {subheadline}
        </div>
      )}

      {headline && (
        <div
          className="uppercase font-black"
          style={{
            fontFamily: lang === 'ml' ? 'var(--font-body)' : 'var(--font-display)',
            fontSize: lang === 'ml' ? 'clamp(32px, 5vw, 72px)' : 'clamp(40px, 6.5vw, 96px)',
            lineHeight: lang === 'ml' ? '1.2' : '0.95',
            letterSpacing: lang === 'ml' ? 'normal' : '-0.02em',
            color: 'var(--dyfi-cream)'
          }}
        >
          {headline.split('\n').map((line, idx) => (
            <span key={idx} className="block">
              {line}
            </span>
          ))}
        </div>
      )}

      {(headline || subheadline) && (
        <div className="my-6" style={{ width: '28px', height: '1.5px', background: 'var(--dyfi-red)' }} />
      )}

      {paragraph && (
        <div
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'clamp(13px, 1.2vw, 16px)',
            lineHeight: '1.8',
            color: 'rgba(245, 240, 232, 0.5)',
            maxWidth: '400px'
          }}
        >
          {paragraph}
        </div>
      )}
    </motion.div>
  );
}

function HeroCoverBlock({
  sectionProgress,
  lang,
}: {
  sectionProgress: MotionValue<number>;
  lang: 'en' | 'ml';
}) {
  const opacity = useTransform(sectionProgress, [0, 0.18, 0.25], [1, 1, 0]);
  const y = useTransform(sectionProgress, [0, 0.25], [0, -50]);

  return (
    <motion.div
      style={{ opacity, y }}
      className="absolute inset-0 flex items-center justify-between p-8 md:p-14 pointer-events-none"
    >
      {/* Left Accent line from cover HTML */}
      <div 
        className="absolute left-0 top-0 bottom-0 w-[3px]"
        style={{
          background: 'linear-gradient(to bottom, transparent, var(--dyfi-red), transparent)'
        }}
      />

      {/* Main hero content overlay */}
      <div className="flex flex-col max-w-[580px] z-10 select-none">
        <div className="flex items-center gap-[10px] mb-6">
          <div className="w-[6px] height-[6px] bg-[var(--dyfi-red)] rounded-full" style={{ width: '6px', height: '6px' }} />
          <span 
            className="text-[8px] uppercase tracking-[0.5em]"
            style={{ fontFamily: 'var(--font-display)', color: 'rgba(245, 240, 232, 0.4)' }}
          >
            {lang === 'ml' ? '01 / പന്തുവിള ശാഖ · സജീവം' : '01 / PANTHUVILA BRANCH · ACTIVE'}
          </span>
        </div>
 
        <div 
          className="inline-block self-start border border-[rgba(200,16,46,0.4)] text-[var(--dyfi-red)] text-[8px] tracking-[0.4em] px-3 py-1 mb-5 rounded-sm"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          DYFI · DEMOCRATIC YOUTH FEDERATION OF INDIA
        </div>
 
        <p 
          className="text-[13px] tracking-[0.06em] mb-2"
          style={{ fontFamily: 'var(--font-body)', color: 'rgba(245, 240, 232, 0.35)' }}
        >
          ഡി.വൈ.എഫ്.ഐ. പന്തുവിള
        </p>
 
        <h1 
          className="font-black text-[var(--dyfi-cream)] leading-[0.9] uppercase tracking-[0.02em]"
          style={{ 
            fontFamily: lang === 'ml' ? 'var(--font-body)' : 'var(--font-display)',
            fontSize: lang === 'ml' ? 'clamp(44px, 6vw, 76px)' : 'clamp(48px, 6.5vw, 78px)',
          }}
        >
          {lang === 'ml' ? (
            <>പന്തുവിള<br/><span style={{ color: 'var(--dyfi-red)' }}>ശാഖ</span></>
          ) : (
            <>PANTHU<span style={{ color: 'var(--dyfi-red)' }}>VILA</span><br/>BRANCH</>
          )}
        </h1>
 
        <p 
          className="text-[10px] tracking-[0.3em] uppercase mt-2 mb-4"
          style={{ fontFamily: 'var(--font-display)', color: 'rgba(245, 240, 232, 0.35)' }}
        >
          {lang === 'ml' ? 'തിരുവനന്തപുരം ജില്ല' : 'THIRUVANANTHAPURAM DISTRICT'}
        </p>
 
        <div className="w-[40px] h-[2px] bg-[var(--dyfi-red)] my-5" />
 
        <p 
          className="text-[14px] leading-[1.7] max-w-[380px]"
          style={{ fontFamily: 'var(--font-body)', color: 'rgba(245, 240, 232, 0.5)' }}
        >
          <strong style={{ color: 'rgba(245, 240, 232, 0.8)', fontWeight: 500 }}>
            {lang === 'ml' ? 'ജനങ്ങൾക്കായി · For the people.' : 'For the people · ജനങ്ങൾക്കായി'}
          </strong><br />
          {lang === 'ml' 
            ? 'സുതാര്യം. ജനകീയം. സമത്വപൂർണ്ണമായ കേരളത്തിനായി യുവജന മുന്നേറ്റം.' 
            : 'Transparent. Accountable. United. Building a just Kerala through youth power.'}
        </p>

        <div className="flex items-center gap-[10px] mt-8">
          <div className="w-[32px] h-[1px] bg-[var(--dyfi-red)]" />
          <span 
            className="text-[8px] tracking-[0.4em]"
            style={{ fontFamily: 'var(--font-display)', color: 'rgba(245, 240, 232, 0.3)' }}
          >
            {lang === 'ml' ? 'താഴേക്ക് സ്ക്രോൾ ചെയ്യുക' : 'SCROLL TO EXPLORE'}
          </span>
        </div>
      </div>

      {/* Right panel sickle watermark */}
      <div className="absolute right-0 top-0 bottom-0 w-[38%] flex flex-col justify-center items-center p-8 border-l border-[rgba(200,16,46,0.1)] h-full opacity-15">
        <svg width="180" height="180" viewBox="0 0 100 100">
          <circle cx="35" cy="62" r="22" stroke="#C8102E" strokeWidth="9" fill="none"/>
          <path d="M35 40 Q34 12 62 8 Q50 28 54 40" stroke="#C8102E" strokeWidth="9" fill="none" strokeLinecap="round"/>
          <rect x="46" y="28" width="9" height="48" rx="4.5" fill="#C8102E" transform="rotate(-45 50 52)"/>
          <rect x="50" y="50" width="32" height="9" rx="4.5" fill="#C8102E"/>
        </svg>
      </div>

      {/* Stats row at the bottom of Section 1 Phase 1 */}
      <div className="absolute bottom-10 left-8 right-8 flex gap-8 border-t border-[rgba(245,240,232,0.06)] pt-5 z-10 select-none">
        <div className="flex flex-col">
          <span className="text-[28px] font-black text-[var(--dyfi-red)]" style={{ fontFamily: 'var(--font-display)', lineHeight: '1' }}>50+</span>
          <span className="text-[8px] tracking-[0.3em]" style={{ fontFamily: 'var(--font-display)', color: 'rgba(245, 240, 232, 0.3)' }}>PROGRAMS</span>
        </div>
        <div className="flex flex-col">
          <span className="text-[28px] font-black text-[var(--dyfi-red)]" style={{ fontFamily: 'var(--font-display)', lineHeight: '1' }}>10K+</span>
          <span className="text-[8px] tracking-[0.3em]" style={{ fontFamily: 'var(--font-display)', color: 'rgba(245, 240, 232, 0.3)' }}>PEOPLE HELPED</span>
        </div>
        <div className="flex flex-col">
          <span className="text-[28px] font-black text-[var(--dyfi-red)]" style={{ fontFamily: 'var(--font-display)', lineHeight: '1' }}>1980</span>
          <span className="text-[8px] tracking-[0.3em]" style={{ fontFamily: 'var(--font-display)', color: 'rgba(245, 240, 232, 0.3)' }}>ESTABLISHED</span>
        </div>
        <div className="flex flex-col">
          <span className="text-[28px] font-black text-[var(--dyfi-red)]" style={{ fontFamily: 'var(--font-display)', lineHeight: '1' }}>200+</span>
          <span className="text-[8px] tracking-[0.3em]" style={{ fontFamily: 'var(--font-display)', color: 'rgba(245, 240, 232, 0.3)' }}>VOLUNTEERS</span>
        </div>
      </div>
    </motion.div>
  );
}

export default function SectionOverlay({
  sectionProgress,
  section,
  lang,
  onLangChange,
}: SectionOverlayProps) {
  const frameIndexRaw = useTransform(sectionProgress, [0, 1], [1, 999]);
  const [frameText, setFrameText] = useState('001');

  useEffect(() => {
    const unsub = frameIndexRaw.on('change', (val) => {
      const idx = Math.min(Math.max(Math.floor(val), 1), 999);
      setFrameText(idx.toString().padStart(3, '0'));
    });
    return unsub;
  }, [frameIndexRaw]);

  const defaultElementsOpacity = useTransform(
    sectionProgress,
    section.id === 'hero' ? [0.18, 0.25] : [0, 0.01],
    section.id === 'hero' ? [0, 1] : [1, 1]
  );

  return (
    <div className="absolute inset-0 pointer-events-none z-10 p-8 md:p-14">
      {/* Conditionally render custom Cover page for Hero section Phase 1 */}
      {section.id === 'hero' && (
        <HeroCoverBlock
          sectionProgress={sectionProgress}
          lang={lang}
        />
      )}

      {/* Top Left Accent Label */}
      <motion.div 
        style={{ opacity: defaultElementsOpacity }}
        className="absolute top-8 left-8 md:top-14 md:left-14 flex flex-row items-center gap-3"
      >
        <div style={{ width: '2px', height: '24px', background: 'var(--dyfi-red)' }} />
        <span
          className="uppercase"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '9px',
            letterSpacing: '0.45em',
            color: 'rgba(245, 240, 232, 0.5)'
          }}
        >
          {section.accentLabel}
        </span>
      </motion.div>

      {/* Bottom Right Frame index text */}
      <motion.div
        style={{
          opacity: defaultElementsOpacity,
          fontFamily: 'var(--font-display)',
          fontSize: '10px',
          letterSpacing: '0.3em',
          color: 'rgba(245, 240, 232, 0.2)'
        }}
        className="absolute bottom-8 right-8 md:bottom-14 md:right-14"
      >
        {frameText}
      </motion.div>

      {section.phases.map((phase, idx) => (
        <PhaseBlock
          key={idx}
          phase={phase}
          sectionProgress={sectionProgress}
          lang={lang}
        />
      ))}
    </div>
  );
}
