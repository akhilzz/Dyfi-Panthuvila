'use client';

import { useEffect, useRef, useState } from 'react';
import { MotionValue, useMotionValueEvent } from 'framer-motion';

type HeroCanvasProps = {
  sectionProgress: MotionValue<number>;
  frameCount: number;
  framesPath: string;
};

export default function HeroCanvas({
  sectionProgress,
  frameCount,
  framesPath,
}: HeroCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fallbackCanvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    let loadedCount = 0;
    const loadedImages: HTMLImageElement[] = [];
    let isError = false;

    for (let i = 1; i <= frameCount; i++) {
      const img = new Image();
      const paddedIndex = i.toString().padStart(4, '0');
      img.src = `${framesPath}${paddedIndex}.jpg`;

      img.onload = () => {
        loadedCount++;
        if (loadedCount === frameCount) {
          setImages(loadedImages);
        }
      };

      img.onerror = () => {
        if (!isError) {
          isError = true;
          setHasError(true);
        }
      };
      loadedImages.push(img);
    }
  }, [frameCount, framesPath]);

  const drawFrame = (frameIndex: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    if (images.length === 0 || !images[frameIndex]) return;

    const img = images[frameIndex];
    const width = canvas.width;
    const height = canvas.height;

    ctx.clearRect(0, 0, width, height);

    const imgRatio = img.width / img.height;
    const canvasRatio = width / height;

    let drawWidth, drawHeight, offsetX = 0, offsetY = 0;

    if (canvasRatio > imgRatio) {
      drawWidth = width;
      drawHeight = width / imgRatio;
      offsetY = (height - drawHeight) / 2;
    } else {
      drawWidth = height * imgRatio;
      drawHeight = height;
      offsetX = (width - drawWidth) / 2;
    }

    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
  };

  useMotionValueEvent(sectionProgress, 'change', (latest) => {
    if (!hasError && images.length > 0) {
      const frameIndex = Math.min(
        Math.max(Math.floor(latest * frameCount), 0),
        frameCount - 1
      );
      drawFrame(frameIndex);
    }
  });

  useEffect(() => {
    const resizeCanvas = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;

      if (!hasError && images.length > 0) {
        const frameIndex = Math.min(
          Math.max(Math.floor(sectionProgress.get() * frameCount), 0),
          frameCount - 1
        );
        drawFrame(frameIndex);
      }
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    return () => window.removeEventListener('resize', resizeCanvas);
  }, [images, hasError, sectionProgress, frameCount]);

  useEffect(() => {
    if (!hasError) return;
    const canvas = fallbackCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let angle = 0;

    const drawFallback = () => {
      const width = canvas.width;
      const height = canvas.height;
      ctx.fillStyle = '#1A1A1A';
      ctx.fillRect(0, 0, width, height);

      ctx.save();
      ctx.translate(width / 2, height / 2);
      ctx.rotate(angle);
      
      const cx = 0;
      const cy = 0;
      const spikes = 5;
      const outerRadius = Math.min(width, height) * 0.3;
      const innerRadius = outerRadius * 0.4;
      
      let rot = (Math.PI / 2) * 3;
      let x = cx;
      let y = cy;
      const step = Math.PI / spikes;

      ctx.beginPath();
      ctx.moveTo(cx, cy - outerRadius);
      for (let i = 0; i < spikes; i++) {
        x = cx + Math.cos(rot) * outerRadius;
        y = cy + Math.sin(rot) * outerRadius;
        ctx.lineTo(x, y);
        rot += step;

        x = cx + Math.cos(rot) * innerRadius;
        y = cy + Math.sin(rot) * innerRadius;
        ctx.lineTo(x, y);
        rot += step;
      }
      ctx.lineTo(cx, cy - outerRadius);
      ctx.closePath();
      
      ctx.fillStyle = 'rgba(200, 16, 46, 0.15)';
      ctx.fill();
      ctx.restore();

      angle += 0.005;
      animationId = requestAnimationFrame(drawFallback);
    };

    const resizeFallback = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
    };

    window.addEventListener('resize', resizeFallback);
    resizeFallback();
    drawFallback();

    return () => {
      window.removeEventListener('resize', resizeFallback);
      cancelAnimationFrame(animationId);
    };
  }, [hasError]);

  if (hasError) {
    return (
      <div className="w-full h-full relative bg-[#111] overflow-hidden">
        {/* Geometric background SVG from dyfi_panthuvila_cover.html */}
        <svg className="absolute inset-0 w-full h-full opacity-25 pointer-events-none" viewBox="0 0 700 520" preserveAspectRatio="xMidYMid slice">
          <circle cx="580" cy="260" r="220" fill="none" stroke="#C8102E" strokeWidth="0.5"/>
          <circle cx="580" cy="260" r="160" fill="none" stroke="#C8102E" strokeWidth="0.3"/>
          <circle cx="580" cy="260" r="100" fill="none" stroke="#C8102E" strokeWidth="0.3"/>
          <line x1="0" y1="480" x2="700" y2="480" stroke="#C8102E" strokeWidth="0.3"/>
          <line x1="0" y1="40" x2="700" y2="40" stroke="rgba(245,240,232,0.04)" strokeWidth="0.5"/>
          <polygon points="560,180 580,140 600,180" fill="none" stroke="#C8102E" strokeWidth="0.5" opacity="0.4"/>
          <polygon points="600,320 620,280 640,320" fill="none" stroke="#C8102E" strokeWidth="0.5" opacity="0.2"/>
        </svg>

        {/* Ambient star group on the right side rotating slowly */}
        <div 
          className="absolute right-20 top-1/2 -translate-y-1/2 opacity-5 pointer-events-none"
          style={{
            animation: 'spin-slow 60s linear infinite',
          }}
        >
          <svg width="320" height="320" viewBox="0 0 24 24" fill="#C8102E">
            <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.857 1.4-8.168L.132 9.21l8.2-1.192L12 .587z" />
          </svg>
        </div>

        {/* Custom slow spin keyframe */}
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes spin-slow {
            from { transform: translateY(-50%) rotate(0deg); }
            to { transform: translateY(-50%) rotate(360deg); }
          }
        `}} />
      </div>
    );
  }

  return (
    <canvas
      ref={canvasRef}
      style={{ width: '100%', height: '100%' }}
    />
  );
}
