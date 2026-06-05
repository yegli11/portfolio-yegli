"use client";

import { motion } from "framer-motion";
import { SectionTemplate } from "@/src/components/templates/SectionTemplate";
import { SectionTitle } from "@/src/components/atoms/SectionTitle";

export function EducationSection() {
  return (
    <SectionTemplate id="formacion" variant="light">
      <div className="flex flex-col gap-12">
        <SectionTitle eyebrow="Formación" title="Datos académicos" subtitle="Base académica que sustenta mi práctica profesional." />

        <div className="mx-auto w-full max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            whileHover={{ y: -4 }}
            className="overflow-hidden rounded-3xl shadow-lg"
          >
            {/* Bold colored top */}
            <div
              className="relative flex items-end gap-4 overflow-hidden p-7 pb-8"
              style={{ background: "linear-gradient(135deg, #826DEE 0%, #FF99DC 100%)" }}
            >
              {/* Decorative */}
              <span className="pointer-events-none absolute right-6 top-1/2 -translate-y-1/2 select-none text-[9rem] font-black leading-none opacity-[0.08] text-white" aria-hidden="true">
                🎓
              </span>

              {/* Icon */}
              <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl bg-white/20 text-white backdrop-blur-sm">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                  <path d="M6 12v5c3 3 9 3 12 0v-5" />
                </svg>
              </div>

              <div>
                <h3 className="font-display text-2xl font-extrabold text-white leading-snug">
                  Ingeniería en Computación
                </h3>
                <p className="mt-1 text-sm font-semibold text-white/80">
                  Universidad Rafael Urdaneta · Maracaibo, Venezuela
                </p>
              </div>
            </div>

            {/* White content */}
            <div className="bg-surface-light dark:bg-surface-dark p-7 flex flex-col gap-5">
              {/* Status + info row */}
              <div className="flex flex-wrap items-center gap-3">
                <span
                  className="inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-extrabold uppercase tracking-wide text-white shadow"
                  style={{ background: "#EB4213" }}
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-white opacity-80" aria-hidden="true" />
                  Egresada
                </span>
                <span
                  className="inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wide"
                  style={{ background: "#D8F382", color: "#1A2E0A" }}
                >
                  ✦ Pendiente de grado
                </span>
              </div>

              <p className="text-sm leading-relaxed text-text-light/70 dark:text-text-dark/70">
                Formación en desarrollo de software, bases de datos, redes, estructuras de
                datos y sistemas operativos. Proyectos prácticos aplicados a soluciones
                reales para empresas e instituciones durante toda la carrera.
              </p>

              {/* Highlights */}
              <div className="flex flex-wrap gap-2">
                {[
                  { label: "Desarrollo de Software", bg: "#826DEE" },
                  { label: "Bases de Datos",         bg: "#4DB8FF" },
                  { label: "Redes",                  bg: "#EB4213" },
                  { label: "Algoritmos",             bg: "#FF99DC" },
                  { label: "Sistemas Operativos",    bg: "#D8F382" },
                ].map(({ label, bg }) => (
                  <motion.span
                    key={label}
                    whileHover={{ scale: 1.08 }}
                    className="cursor-default rounded-full px-3 py-1 text-xs font-bold"
                    style={{
                      background: `${bg}20`,
                      color: bg === "#FF99DC" ? "#C2006E" : bg === "#D8F382" ? "#4A7A00" : bg,
                      border: `1px solid ${bg}50`,
                    }}
                  >
                    {label}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </SectionTemplate>
  );
}
