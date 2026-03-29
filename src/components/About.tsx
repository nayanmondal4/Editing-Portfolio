"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { skills } from "@/data/portfolio";
import { site } from "@/data/site";

export function About() {
  return (
    <div className="glass-panel rounded-2xl p-8 shadow-xl ring-1 ring-white/[0.06] sm:p-10">
      <div className="grid gap-10 lg:grid-cols-[auto_1fr] lg:gap-12">
        <motion.div
          className="relative mx-auto h-28 w-28 shrink-0 overflow-hidden rounded-2xl ring-2 ring-violet-500/30 ring-offset-4 ring-offset-[#0a0a0f] sm:h-32 sm:w-32"
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src={site.heroImage}
            alt={`${site.name} — portrait`}
            fill
            className="object-cover object-top"
            sizes="128px"
            loading="lazy"
          />
        </motion.div>

        <div className="min-w-0">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-violet-400/90">
            About Nayan
          </p>
          <h2 className="mb-5 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            Editing with 4+ years of experience.
          </h2>
          <p className="mb-6 text-base leading-relaxed text-zinc-400">
            I&apos;m <span className="text-zinc-200">{site.name}</span> — I shape edits and motion so the story lands and I keep communication tight so delivery
            stays predictable.
          </p>
          <p className="mb-8 text-base leading-relaxed text-zinc-400">
            Based on what you need, I can own the full pipeline from offline to grade and simple sound polish, or plug
            into your team&apos;s workflow. Let&apos;s make something that looks and feels expensive.
          </p>

          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-zinc-500">Toolkit</p>
          <ul className="flex flex-wrap gap-2">
            {skills.map((skill, i) => (
              <motion.li
                key={skill}
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04, duration: 0.35 }}
              >
                <span className="inline-block rounded-xl border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-zinc-300">
                  {skill}
                </span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
