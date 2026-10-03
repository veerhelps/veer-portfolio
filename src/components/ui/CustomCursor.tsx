import React, { useEffect, useState } from 'react';

export function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [cursorLabel, setCursorLabel] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Disable custom cursor on mobile touch devices
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (!target) {
        setIsHovered(false);
        setCursorLabel(null);
        return;
      }

      // Check for explicit data-cursor attribute first
      const cursorTarget = target.closest('[data-cursor]') as HTMLElement | null;
      if (cursorTarget) {
        setIsHovered(true);
        setCursorLabel(cursorTarget.getAttribute('data-cursor'));
        return;
      }

      // Contextual inference
      const isCanvasOr3D = target.tagName === 'CANVAS' || target.closest('canvas') || target.closest('[data-section="3d"]');
      const isMarketOrChart = target.closest('#performance') || target.closest('#strength') || target.closest('#universe') || target.closest('table') || target.closest('svg');
      const isJournal = target.closest('#journal') || target.closest('[role="dialog"]');
      const isInteractive =
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.closest('button') ||
        target.closest('a') ||
        target.getAttribute('role') === 'button' ||
        target.classList.contains('interactive');

      if (isCanvasOr3D) {
        setIsHovered(true);
        setCursorLabel('EXPLORE');
      } else if (isJournal && isInteractive) {
        setIsHovered(true);
        setCursorLabel('VIEW');
      } else if (isMarketOrChart && isInteractive) {
        setIsHovered(true);
        setCursorLabel('ANALYZE');
      } else if (isInteractive) {
        setIsHovered(true);
        setCursorLabel('OPEN');
      } else {
        setIsHovered(false);
        setCursorLabel(null);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[99999] overflow-hidden select-none">
      {/* Inner Dot Cursor */}
      <div
        className="fixed w-2 h-2 rounded-full transition-transform duration-75 ease-out shadow-sm"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) scale(${isHovered ? 1.6 : 1})`,
          backgroundColor: 'var(--theme-accent, #D6B45A)',
          boxShadow: '0 0 10px var(--theme-accent, #D6B45A)',
        }}
      />

      {/* Outer Glowing Reticle Ring */}
      <div
        className="fixed rounded-full border transition-all duration-200 ease-out flex items-center justify-center"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)',
          width: isHovered ? (cursorLabel ? '3.5rem' : '2.5rem') : '1.5rem',
          height: isHovered ? (cursorLabel ? '3.5rem' : '2.5rem') : '1.5rem',
          borderColor: isHovered ? 'rgba(214, 180, 90, 0.7)' : 'rgba(214, 180, 90, 0.35)',
          backgroundColor: isHovered ? 'rgba(214, 180, 90, 0.12)' : 'transparent',
          boxShadow: isHovered ? '0 0 20px rgba(214, 180, 90, 0.25)' : 'none',
        }}
      >
        {/* Micro Label inside/alongside reticle */}
        {isHovered && cursorLabel && (
          <span className="font-mono text-[8px] font-bold text-cream tracking-widest uppercase animate-fadeIn">
            {cursorLabel}
          </span>
        )}
      </div>
    </div>
  );
}
