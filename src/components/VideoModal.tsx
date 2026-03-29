"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect } from "react";

type VideoModalProps = {
  videoId: string | null;
  title: string;
  onClose: () => void;
};

export function VideoModal({ videoId, title, onClose }: VideoModalProps) {
  const onKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose],
  );

  useEffect(() => {
    if (!videoId) return;
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [videoId, onKey]);

  return (
    <AnimatePresence>
      {videoId && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-labelledby="video-modal-title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <button
            type="button"
            className="absolute inset-0 bg-black/75 backdrop-blur-md"
            aria-label="Close video"
            onClick={onClose}
          />
          <motion.div
            className="glass-panel relative z-10 w-full max-w-sm overflow-hidden rounded-2xl shadow-2xl shadow-violet-500/10 ring-1 ring-white/10"
            initial={{ opacity: 0, scale: 0.94, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 16 }}
            transition={{ type: "spring", damping: 26, stiffness: 320 }}
          >
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-3 sm:px-5">
              <h2 id="video-modal-title" className="truncate text-sm font-medium text-zinc-200">
                {title}
              </h2>
              <button
                type="button"
                onClick={onClose}
                className="rounded-lg px-3 py-1.5 text-xs font-medium text-zinc-400 transition-colors hover:bg-white/10 hover:text-white"
              >
                Close
              </button>
            </div>
            {/* 9:16 portrait container for Shorts */}
            <div className="relative w-full bg-black" style={{ aspectRatio: "9 / 16" }}>
              <iframe
                title={title}
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&playsinline=1`}
                className="absolute inset-0 h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
