'use client';

import { motion, MotionValue, useTransform } from 'framer-motion';
import { SectionData } from '../data/sections';
import HeroCanvas from './HeroCanvas';
import SectionOverlay from './SectionOverlay';

type SectionBlockProps = {
  section: SectionData;
  sectionProgress: MotionValue<number>;
  globalProgress: MotionValue<number>;
  sectionIndex: number;
  isFirst: boolean;
  lang: 'en' | 'ml';
  onLangChange?: (lang: 'en' | 'ml') => void;
};

const entryRanges: Record<number, [number, number]> = {
  1: [0.13, 0.20],
  2: [0.27, 0.34],
  3: [0.41, 0.48],
  4: [0.55, 0.62],
  5: [0.69, 0.76],
  6: [0.83, 0.90]
};

export default function SectionBlock({
  section,
  sectionProgress,
  globalProgress,
  sectionIndex,
  isFirst,
  lang,
  onLangChange
}: SectionBlockProps) {
  
  const range = entryRanges[sectionIndex] || [0, 0.1];
  
  const smoothSlideY = useTransform(
    globalProgress,
    range,
    ['100vh', '0vh']
  );

  return (
    <section
      id={section.id}
      style={{
        height: section.stickyHeight,
        position: 'relative',
        marginTop: isFirst ? 0 : '-100vh',
        zIndex: sectionIndex + 1
      }}
    >
      <div className="sticky top-0 h-[100vh] w-full overflow-hidden">
        <motion.div
          style={{
            y: isFirst ? 0 : smoothSlideY,
            position: 'absolute',
            inset: 0
          }}
        >
          <div className="absolute inset-0 z-0">
            <HeroCanvas
              sectionProgress={sectionProgress}
              frameCount={120}
              framesPath={`/frames/${section.id}/`}
            />
          </div>

          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              zIndex: 5,
              background: 'linear-gradient(to bottom, rgba(26,26,26,0.6) 0%, transparent 25%, transparent 65%, rgba(26,26,26,0.85) 100%)'
            }}
          />

          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              zIndex: 5,
              background: 'linear-gradient(to right, rgba(26,26,26,0.45) 0%, transparent 35%)'
            }}
          />

          <SectionOverlay
            sectionProgress={sectionProgress}
            section={section}
            lang={lang}
            onLangChange={onLangChange}
          />
        </motion.div>
      </div>
    </section>
  );
}
