"use client";

import { motion } from "framer-motion";
import { SectionTemplate } from "@/src/components/templates/SectionTemplate";
import { SectionTitle } from "@/src/components/atoms/SectionTitle";

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/yegli11",
    bg: "#EB4213",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/yeglimar-montanez-b00489216/",
    bg: "#826DEE",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/yegli11/",
    bg: "#FF99DC",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    ),
  },
];

export function ContactSection() {
  return (
    <SectionTemplate id="contacto" variant="light">
      <div className="flex flex-col gap-12">
        <SectionTitle
          eyebrow="Contacto"
          title="¿Trabajamos juntos?"
          subtitle="Estoy disponible para proyectos freelance, colaboraciones y oportunidades full-time."
        />

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto w-full max-w-3xl"
        >
          {/* Main CTA card */}
          <div className="overflow-hidden rounded-3xl shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr]">

              {/* ── Left: Purple ── */}
              <div
                className="relative flex flex-col justify-between gap-10 overflow-hidden p-10 lg:p-12"
                style={{ background: "#826DEE" }}
              >
                {/* Deco */}
                <span className="pointer-events-none absolute -right-8 -bottom-8 select-none font-display text-[13rem] font-black leading-none opacity-[0.07] text-white" aria-hidden="true">✳</span>

                <div className="relative z-10 flex flex-col gap-6">
                  {/* Heading */}
                  <div>
                    <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-white/50 mb-2">¿Tienes un proyecto?</p>
                    <h3 className="font-display text-4xl font-extrabold leading-tight text-white">
                      Hablemos.
                    </h3>
                  </div>

                  <p className="text-base leading-relaxed text-white/80 max-w-sm">
                    Estoy disponible para freelance, colaboraciones y oportunidades full-time. Escríbeme y con gusto te ayudo.
                  </p>

                  {/* Email button */}
                  <motion.a
                    href="mailto:montanezyeglimar4@gmail.com"
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.97 }}
                    className="inline-flex w-fit items-center gap-3 rounded-full px-7 py-4 text-sm font-extrabold shadow-xl"
                    style={{ background: "#fff", color: "#826DEE" }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-10 7L2 7" />
                    </svg>
                    montanezyeglimar4@gmail.com
                  </motion.a>
                </div>

                {/* Social icons row */}
                <div className="relative z-10 flex items-center gap-3">
                  {socials.map(({ label, href, bg, icon }) => (
                    <motion.a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      whileHover={{ scale: 1.18, rotate: 8 }}
                      whileTap={{ scale: 0.9 }}
                      className="flex h-12 w-12 items-center justify-center rounded-2xl shadow-lg"
                      style={{ background: bg, color: "#fff" }}
                    >
                      {icon}
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* ── Right: Pink ── */}
              <div
                className="relative flex flex-col justify-center gap-6 overflow-hidden p-10"
                style={{ background: "#FF99DC" }}
              >
                <div className="relative z-10 flex flex-col gap-5">
                  <p className="text-xs font-extrabold uppercase tracking-[0.2em]" style={{ color: "#1A0A2E", opacity: 0.55 }}>
                    Encuéntrame en
                  </p>

                  {[
                    {
                      label: "GitHub", user: "@yegli11",
                      href: "https://github.com/yegli11",
                      bg: "#EB4213",
                      icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>,
                    },
                    {
                      label: "LinkedIn", user: "yeglimar-montanez",
                      href: "https://www.linkedin.com/in/yeglimar-montanez-b00489216/",
                      bg: "#826DEE",
                      icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>,
                    },
                    {
                      label: "Instagram", user: "@yegli11",
                      href: "https://www.instagram.com/yegli11/",
                      bg: "#C2006E",
                      icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>,
                    },
                  ].map(({ label, user, href, bg, icon }) => (
                    <motion.a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      whileHover={{ x: 5, scale: 1.02 }}
                      whileTap={{ scale: 0.97 }}
                      className="flex items-center gap-3 rounded-2xl p-3 shadow-md"
                      style={{ background: "#fff" }}
                    >
                      <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl text-white shadow-sm" style={{ background: bg }}>
                        {icon}
                      </span>
                      <div>
                        <p className="text-xs font-extrabold" style={{ color: "#1A0A2E" }}>{label}</p>
                        <p className="text-[11px] font-medium" style={{ color: "#1A0A2E", opacity: 0.5 }}>{user}</p>
                      </div>
                      <span className="ml-auto text-sm font-bold" style={{ color: bg }}>→</span>
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>

            {/* ── Bottom: Orange ── */}
            <div
              className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 px-8 py-3.5"
              style={{ background: "#EB4213" }}
            >
              <span className="flex items-center gap-2 text-xs font-bold text-white/90">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 7L2 7"/>
                </svg>
                montanezyeglimar4@gmail.com
              </span>
              <span className="text-white/30 hidden sm:inline">·</span>
              <span className="text-xs font-bold text-white/70">✦ Disponible para proyectos y oportunidades</span>
            </div>
          </div>
        </motion.div>
      </div>
    </SectionTemplate>
  );
}
