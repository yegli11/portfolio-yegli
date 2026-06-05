"use client";

import { motion } from "framer-motion";

function blockAnim(delay: number) {
  return {
    initial: { opacity: 0, scale: 0.97 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.55, delay },
  };
}

export function HeroSection() {
  return (
    <section
      id="inicio"
      aria-label="Presentación"
      className="grid min-h-screen grid-cols-1 lg:grid-cols-[5fr_7fr] lg:grid-rows-[1fr_auto]"
    >
      {/* ── BLOQUE 1: Púrpura — Nombre ───────────────────────────── */}
      <motion.div
        {...blockAnim(0)}
        className="relative flex flex-col justify-between overflow-hidden p-10 lg:p-14 lg:row-span-2"
        style={{ background: "#826DEE", minHeight: "55vh" }}
      >
        {/* Asterisk deco */}
        <span
          className="pointer-events-none absolute -right-6 bottom-10 select-none font-display text-[14rem] font-black leading-none opacity-[0.08] text-white"
          aria-hidden="true"
        >
          ✳
        </span>

        <div className="flex flex-col gap-8 relative z-10">
          {/* Eyebrow */}
          <motion.span
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.4 }}
            className="inline-flex w-fit items-center gap-2 rounded-full px-4 py-2 text-xs font-extrabold uppercase tracking-widest text-white"
            style={{ background: "#EB4213" }}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" aria-hidden="true" />
            Disponible para proyectos
          </motion.span>

          {/* Name */}
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.4 }}
              className="text-lg font-semibold text-white/70"
            >
              Hola, soy
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.55, ease: "easeOut" }}
              className="font-display font-extrabold leading-none tracking-tight text-white"
              style={{ fontSize: "clamp(3.5rem, 8vw, 7rem)" }}
            >
              Yeglimar
            </motion.h1>
            {/* Underline accent */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.75, duration: 0.5, ease: "easeOut" }}
              className="mt-3 h-2 w-28 origin-left rounded-full"
              style={{ background: "#FF99DC" }}
              aria-hidden="true"
            />
          </div>
        </div>

        {/* Social icons — bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          className="relative z-10 flex items-center gap-3 mt-12 lg:mt-0"
        >
          {[
            {
              label: "GitHub", href: "https://github.com/yegli11", bg: "#EB4213",
              d: "M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z",
            },
            {
              label: "LinkedIn", href: "https://www.linkedin.com/in/yeglimar-montanez-b00489216/", bg: "#FF99DC",
              d: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
            },
            {
              label: "Instagram", href: "https://www.instagram.com/yegli11/", bg: "#826DEE",
              d: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z",
            },
            {
              label: "Email", href: "mailto:montanezyeglimar4@gmail.com", bg: "#D8F382", dark: true,
              d: null,
            },
          ].map(({ label, href, bg, dark, d }) => (
            <motion.a
              key={label}
              href={href}
              target={label !== "Email" ? "_blank" : undefined}
              rel={label !== "Email" ? "noopener noreferrer" : undefined}
              aria-label={label}
              whileHover={{ scale: 1.2, rotate: 8 }}
              whileTap={{ scale: 0.9 }}
              className="flex h-11 w-11 items-center justify-center rounded-full shadow-md"
              style={{ background: bg, color: dark ? "#1A2E0A" : "#fff" }}
            >
              {d ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d={d} />
                </svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-10 7L2 7" />
                </svg>
              )}
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      {/* ── BLOQUE 2: Rosa — Rol ─────────────────────────────────── */}
      <motion.div
        {...blockAnim(0.14)}
        className="relative flex flex-col justify-center overflow-hidden p-10 lg:p-14"
        style={{ background: "#FF99DC", color: "#1A0A2E" }}
      >
        <span
          className="pointer-events-none absolute right-8 top-6 select-none font-display text-[10rem] font-black leading-none opacity-[0.07]"
          style={{ color: "#1A0A2E" }}
          aria-hidden="true"
        >
          ✳
        </span>

        <div className="relative z-10 flex flex-col gap-6">
          <div className="flex flex-wrap gap-3">
            {["Full Stack Developer", "UI/UX Designer"].map((r, i) => (
              <motion.span
                key={r}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.1, duration: 0.4 }}
                className="rounded-full px-5 py-2 text-sm font-extrabold"
                style={
                  i === 0
                    ? { background: "#826DEE", color: "#fff" }
                    : { background: "rgba(26,10,46,0.12)", color: "#1A0A2E", border: "2px solid rgba(26,10,46,0.2)" }
                }
              >
                {r}
              </motion.span>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.5 }}
            className="max-w-md text-lg font-semibold leading-relaxed"
            style={{ color: "#1A0A2E" }}
          >
            Desarrollo aplicaciones de extremo a extremo: desde el diseño de la
            interfaz hasta el backend — convirtiendo ideas en productos que funcionan.
          </motion.p>
        </div>
      </motion.div>

      {/* ── BLOQUE 3: Naranja — CTAs ─────────────────────────────── */}
      <motion.div
        {...blockAnim(0.27)}
        className="relative flex flex-wrap items-center justify-between gap-6 overflow-hidden p-10 lg:px-14 lg:py-10"
        style={{ background: "#EB4213" }}
      >
        <span
          className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none font-display text-[20rem] font-black leading-none opacity-[0.04] text-white"
          aria-hidden="true"
        >
          ✳
        </span>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, duration: 0.45 }}
          className="flex flex-wrap gap-4 relative z-10"
        >
          <motion.a
            href="#proyectos"
            whileHover={{ scale: 1.06, backgroundColor: "#f5f5f5" }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 rounded-full px-8 py-4 text-base font-extrabold shadow-xl transition-colors"
            style={{ background: "#fff", color: "#EB4213" }}
          >
            Ver proyectos ✦
          </motion.a>
          <motion.a
            href="#contacto"
            whileHover={{ scale: 1.06, backgroundColor: "rgba(255,255,255,0.25)" }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 rounded-full border-2 border-white/60 px-8 py-4 text-base font-extrabold text-white transition-colors"
            style={{ background: "rgba(255,255,255,0.12)" }}
          >
            Contactar
          </motion.a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.9, duration: 0.45 }}
          className="relative z-10 text-sm font-bold text-white/70 max-w-xs"
        >
          Ingeniería en Computación · Universidad Rafael Urdaneta
        </motion.p>
      </motion.div>
    </section>
  );
}
