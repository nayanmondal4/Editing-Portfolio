"use client";

import { motion } from "framer-motion";
import { site } from "@/data/site";

const contactItems = [
  {
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <rect x="2" y="4" width="20" height="16" rx="3" />
        <path d="m2 7 10 7 10-7" />
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    value: site.whatsapp,
    href: site.whatsappLink,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M20.52 3.48A11.93 11.93 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.11.55 4.16 1.6 5.97L0 24l6.18-1.62A11.94 11.94 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.2-1.25-6.21-3.48-8.52zm-8.52 18a9.92 9.92 0 0 1-5.06-1.38l-.36-.21-3.73.98.99-3.63-.24-.38A9.93 9.93 0 0 1 2.08 12C2.08 6.49 6.49 2.08 12 2.08c2.67 0 5.18 1.04 7.07 2.93A9.93 9.93 0 0 1 21.92 12c0 5.51-4.41 9.92-9.92 9.92zm5.44-7.43c-.3-.15-1.77-.87-2.04-.97-.28-.1-.48-.15-.68.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.76-1.66-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.68-1.63-.93-2.24-.24-.59-.49-.51-.68-.52h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.01-1.04 2.47s1.06 2.86 1.21 3.06c.15.2 2.09 3.19 5.06 4.48.71.31 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.09 1.77-.72 2.02-1.41.25-.69.25-1.29.17-1.41-.07-.12-.27-.19-.57-.34z" />
      </svg>
    ),
  },
  {
    label: "Location",
    value: site.location,
    href: null,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
        <circle cx="12" cy="9" r="2.5" />
      </svg>
    ),
  },
];

export function Contact() {
  return (
    <div className="glass-panel mx-auto max-w-lg rounded-2xl p-8 shadow-xl ring-1 ring-white/[0.06] sm:p-10">
      <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-violet-400/90">
        Contact
      </p>
      <h2 className="mb-2 text-2xl font-semibold tracking-tight text-white">
        Work with {site.name}
      </h2>
      <p className="mb-8 text-sm text-zinc-400">
        Reach out directly — I&apos;m always open to new projects and collaborations.
      </p>

      <div className="space-y-4">
        {contactItems.map(({ label, value, href, icon }) => (
          <motion.div
            key={label}
            className="flex items-center gap-4 rounded-xl border border-white/[0.06] bg-white/[0.03] px-5 py-4 transition-colors hover:border-violet-500/30 hover:bg-white/[0.06]"
            whileHover={{ x: 4 }}
            transition={{ type: "spring", stiffness: 400, damping: 28 }}
          >
            <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-violet-500/15 text-violet-400">
              {icon}
            </span>
            <div className="min-w-0 flex-1">
              <p className="mb-0.5 text-xs font-medium uppercase tracking-wider text-zinc-500">
                {label}
              </p>
              {href ? (
                <a
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="truncate text-sm font-medium text-white transition-colors hover:text-violet-400"
                >
                  {value}
                </a>
              ) : (
                <p className="truncate text-sm font-medium text-white">{value}</p>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
