import React, { useEffect, useState } from 'react';

export function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
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
      if (
        target &&
        (target.tagName === 'BUTTON' ||
          target.tagName === 'A' ||
          target.closest('button') ||
          target.closest('a') ||
          target.getAttribute('role') === 'button' ||
          target.classList.contains('interactive'))
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Inner Dot Cursor */}
      <div
        className="fixed pointer-events-none z-[9999] w-2 h-2 rounded-full transition-transform duration-75 ease-out shadow-sm"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) scale(${isHovered ? 1.8 : 1})`,
          backgroundColor: 'var(--theme-accent, #D6B45A)',
          boxShadow: '0 0 8px var(--theme-accent, #D6B45A)',
        }}
      />
      {/* Outer Glowing Ring */}
      <div
        className="fixed pointer-events-none z-[9998] rounded-full border transition-all duration-200 ease-out"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)',
          width: isHovered ? '2.5rem' : '1.5rem',
          height: isHovered ? '2.5rem' : '1.5rem',
          borderColor: 'var(--theme-border, rgba(214, 180, 90, 0.4))',
          backgroundColor: isHovered ? 'var(--theme-glow, rgba(214, 180, 90, 0.15))' : 'transparent',
          boxShadow: isHovered ? '0 0 16px var(--theme-glow, rgba(214, 180, 90, 0.3))' : 'none',
        }}
      />
    </>
  );
}
