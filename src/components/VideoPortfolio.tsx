"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { portfolioVideos } from "@/data/portfolio";
import { VideoModal } from "./VideoModal";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function VideoPortfolio() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [activeTitle, setActiveTitle] = useState("");
  const reduce = useReducedMotion();

  const open = (id: string, title: string) => {
    setActiveId(id);
    setActiveTitle(title);
  };

  const close = () => setActiveId(null);

  const gridMotion = reduce
    ? { className: "grid gap-6 grid-cols-2 sm:grid-cols-3" as const }
    : {
        className: "grid gap-6 grid-cols-2 sm:grid-cols-3" as const,
        variants: container,
        initial: "hidden" as const,
        whileInView: "show" as const,
        viewport: { once: true, margin: "-40px" as const },
      };

  return (
    <>
      <VideoModal videoId={activeId} title={activeTitle} onClose={close} />

      <motion.div {...gridMotion}>
        {portfolioVideos.map((video) => (
          <motion.article
            key={video.id}
            {...(reduce ? {} : { variants: item })}
            className="group relative"
          >
            <motion.button
              type="button"
              onClick={() => open(video.id, video.title)}
              className="glass-panel w-full overflow-hidden rounded-2xl text-left shadow-xl ring-1 ring-white/[0.06] transition-shadow"
              whileHover={
                reduce
                  ? undefined
                  : {
                      scale: 1.02,
                      boxShadow: "0 0 48px -8px rgba(167, 139, 250, 0.45)",
                    }
              }
              whileTap={reduce ? undefined : { scale: 0.99 }}
              transition={{ type: "spring", stiffness: 400, damping: 28 }}
            >
              {/* 9:16 portrait container — like a mobile reel */}
              <div className="relative w-full overflow-hidden bg-zinc-900" style={{ aspectRatio: "9 / 16" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`https://i.ytimg.com/vi/${video.id}/maxresdefault.jpg`}
                  alt={video.title}
                  onError={(e) => {
                    const el = e.currentTarget;
                    if (el.src.includes("maxresdefault")) {
                      el.src = `https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`;
                    } else if (el.src.includes("hqdefault")) {
                      el.src = `https://i.ytimg.com/vi/${video.id}/mqdefault.jpg`;
                    }
                  }}
                  className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center opacity-90 transition-opacity group-hover:opacity-100">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/15 backdrop-blur-md ring-2 ring-white/40">
                    <svg
                      className="ml-1 h-5 w-5 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </span>
                </div>
              </div>
              <div className="p-3">
                <h3 className="mb-0.5 text-sm font-semibold text-white leading-snug">{video.title}</h3>
                <p className="text-xs leading-relaxed text-zinc-400 line-clamp-2">{video.description}</p>
              </div>
            </motion.button>
          </motion.article>
        ))}
      </motion.div>
    </>
  );
}
