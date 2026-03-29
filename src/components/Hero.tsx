"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { site } from "@/data/site";

export function Hero() {
  const reduce = useReducedMotion();
  const nameChars = site.headline.split("");

  const scrollToWork = () => {
    document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden px-5 pt-24 pb-16 sm:px-8 lg:px-12 lg:pb-20"
    >
      <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1fr_min(42%,420px)] lg:gap-16">
        {/* Portrait — first on mobile for a strong visual hook */}
        <motion.div
          className="relative order-1 mx-auto w-full max-w-sm lg:order-2 lg:mx-0 lg:max-w-none"
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative">
            <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-violet-500/40 via-fuchsia-500/20 to-cyan-500/30 p-px shadow-[0_0_60px_-12px_rgba(167,139,250,0.55)]">
              <div className="overflow-hidden rounded-2xl bg-zinc-950/80 backdrop-blur-sm">
                <motion.div
                  className="relative aspect-[4/5] w-full sm:aspect-[3/4]"
                  whileHover={reduce ? undefined : { scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 260, damping: 28 }}
                >
                  <Image
                    src={site.heroImage}
                    alt={`${site.name}, ${site.role}`}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 1024px) 100vw, 420px"
                    priority
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#030306]/90 via-transparent to-transparent" />
                </motion.div>
              </div>
            </div>
            {/* Soft rim light */}
            <div
              className="pointer-events-none absolute -right-8 -bottom-8 h-40 w-40 rounded-full bg-violet-500/25 blur-3xl"
              aria-hidden
            />
          </div>
        </motion.div>

        <div className="order-2 lg:order-1">
          <motion.p
            className="mb-5 text-sm font-medium uppercase tracking-[0.35em] text-zinc-500"
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            {site.role}
          </motion.p>

          <h1 className="mb-4 text-5xl font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
            {nameChars.map((char, i) => (
              <span key={`${char}-${i}`} className="inline-block overflow-hidden">
                <motion.span
                  className="inline-block"
                  initial={reduce ? false : { y: "100%" }}
                  animate={reduce ? undefined : { y: 0 }}
                  transition={{
                    duration: 0.85,
                    delay: 0.06 + i * 0.05,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  {char}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            className="mb-3 text-xl font-medium tracking-tight text-zinc-300 sm:text-2xl"
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            {site.headlineAccent}
          </motion.p>

          <motion.p
            className="mb-10 max-w-xl text-base leading-relaxed text-zinc-400 sm:text-lg"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            {site.heroIntro}
          </motion.p>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
          >
            <motion.button
              type="button"
              onClick={scrollToWork}
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-xl bg-white px-8 py-3.5 text-sm font-semibold text-zinc-950 shadow-lg shadow-violet-500/10 transition-shadow hover:shadow-xl hover:shadow-violet-500/20"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10">View Work</span>
              <span className="absolute inset-0 bg-gradient-to-r from-violet-200 to-white opacity-0 transition-opacity group-hover:opacity-100" />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
