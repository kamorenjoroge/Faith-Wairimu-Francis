"use client";

import React, { useMemo } from "react";

interface Petal {
  id: number;
  left: number;
  duration: number;
  delay: number;
  size: number;
  opacity: number;
  rotate: number;
}

const FloatingPetals: React.FC = () => {
  // Memoize petals to prevent regeneration on re-render
  const petals: Petal[] = useMemo(
    () =>
      Array.from({ length: 20 }, (_, i) => ({
        id: i,
        left: (i * 5.263 + 17.89 * i) % 100, // Deterministic distribution
        duration: 8 + (i * 0.6), // Deterministic duration
        delay: (i * 0.75) % 15, // Deterministic delay
        size: 16 + (i * 1.2) % 20, // Deterministic size
        opacity: 0.3 + (i * 0.025), // Deterministic opacity
        rotate: (i * 18) % 360, // Deterministic rotation
      })),
    []
  );

  return (
    <>
      {/* Main petals layer */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        {petals.map((petal) => (
          <div
            key={petal.id}
            className="absolute animate-float-petal"
            style={{
              left: `${petal.left}%`,
              animationDuration: `${petal.duration}s`,
              animationDelay: `${petal.delay}s`,
              fontSize: `${petal.size}px`,
              opacity: petal.opacity,
              filter: "drop-shadow(0 2px 4px rgba(249, 168, 212, 0.3))",
            }}
          >
            {["🌸", "🩷", "💐", "🌷", "💕", "🌺"][petal.id % 6]}
          </div>
        ))}
      </div>

      {/* Subtle pink gradient overlay for depth */}
      <div className="fixed inset-0 pointer-events-none z-0 bg-linear-to-b from-pink-50/40 via-transparent to-pink-100/20" />
      
      {/* Soft ambient glow spots */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-pink-200/20 rounded-full blur-3xl animate-pulse-romantic" />
        <div className="absolute bottom-32 right-20 w-80 h-80 bg-rose-200/15 rounded-full blur-3xl animate-pulse-romantic" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-pink-100/10 rounded-full blur-3xl animate-pulse-romantic" style={{ animationDelay: "2s" }} />
      </div>
    </>
  );
};

export default FloatingPetals;