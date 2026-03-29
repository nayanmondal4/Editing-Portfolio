"use client";

import { motion, useReducedMotion } from "framer-motion";

export function HeroBackground() {
  const reduce = useReducedMotion();

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="gradient-mesh absolute inset-0" />
      <div className="noise-overlay absolute inset-0" />

      {!reduce && (
        <>
          <motion.div
            className="absolute -left-1/4 top-1/4 h-[420px] w-[420px] rounded-full bg-violet-500/20 blur-[100px]"
            animate={{
              x: [0, 40, 0],
              y: [0, 30, 0],
              scale: [1, 1.05, 1],
            }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute -right-1/4 bottom-1/4 h-[380px] w-[380px] rounded-full bg-cyan-500/15 blur-[90px]"
            animate={{
              x: [0, -35, 0],
              y: [0, -25, 0],
              scale: [1, 1.08, 1],
            }}
            transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-fuchsia-500/10 blur-[80px]"
            animate={{ opacity: [0.4, 0.7, 0.4] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Soft particles */}
          {Array.from({ length: 28 }).map((_, i) => (
            <motion.span
              key={i}
              className="absolute h-1 w-1 rounded-full bg-white/30"
              style={{
                left: `${(i * 37) % 100}%`,
                top: `${(i * 23 + 11) % 100}%`,
              }}
              animate={{
                opacity: [0.15, 0.55, 0.15],
                y: [0, -12, 0],
              }}
              transition={{
                duration: 4 + (i % 5),
                repeat: Infinity,
                delay: i * 0.15,
                ease: "easeInOut",
              }}
            />
          ))}
        </>
      )}
    </div>
  );
}
