"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionTemplate } from "@/src/components/templates/SectionTemplate";
import { SectionTitle } from "@/src/components/atoms/SectionTitle";
import { AnimatedNumber } from "@/src/components/atoms/AnimatedNumber";

const stats = [
  { value: 1, suffix: "+", label: "Año de experiencia", bg: "#EB4213", text: "#fff" },
  { value: 3,  suffix: "",  label: "Proyectos completados", bg: "#FF99DC", text: "#1A0A2E" },
  { value: 3,  suffix: "",  label: "Organizaciones", bg: "#D8F382", text: "#1A2E0A" },
];

const experience = [
  { company: "IMAGEN",                      period: "Mayo 2025 – Jun 2026",  role: "Full Stack Developer", color: "#EB4213" },
  { company: "Universidad Rafael Urdaneta", period: "2025 – 2026",           role: "Full Stack Developer", color: "#826DEE" },
  { company: "CIATÉ",                       period: "Ene 2025 – Abr 2026",   role: "Full Stack Developer", color: "#FF99DC" },
];

export function AboutSection() {
  return (
    <SectionTemplate id="sobre-mi" variant="muted">
      <div className="grid gap-14 lg:grid-cols-2 lg:gap-20 lg:items-center">

        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-sm lg:max-w-none"
        >
          <div
            className="relative overflow-hidden rounded-3xl p-1"
            style={{ background: "linear-gradient(135deg, #826DEE, #FF99DC, #EB4213, #D8F382)" }}
          >
            <div className="relative overflow-hidden rounded-[calc(1.5rem-4px)] aspect-[4/5] w-full">
              <Image
                src="/image/yeglimar-multimedia.jpg"
                alt="Foto de Yeglimar, Full Stack Developer"
                fill
                sizes="(max-width: 768px) 90vw, 420px"
                className="object-cover object-top"
                priority
              />
            </div>
          </div>

          {/* Floating badges */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.4 }}
            className="absolute -bottom-5 -right-5 rounded-2xl px-5 py-3 text-white shadow-xl"
            style={{ background: "#EB4213" }}
          >
            <p className="text-xs font-semibold uppercase tracking-wide opacity-80">Rol actual</p>
            <p className="text-sm font-extrabold">Full Stack + UI/UX</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.4 }}
            className="absolute -top-5 -left-5 rounded-2xl px-4 py-3 shadow-lg"
            style={{ background: "#D8F382", color: "#1A2E0A" }}
          >
            <p className="text-xs font-extrabold">✦ Open to work</p>
          </motion.div>
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65, ease: "easeOut", delay: 0.1 }}
          className="flex flex-col gap-6"
        >
          <SectionTitle eyebrow="Sobre mí" title="Creo, diseño y construyo experiencias web." align="left" />

          <div className="flex flex-col gap-4 text-sm leading-relaxed text-text-light/75 dark:text-text-dark/75">
            <p>
             Soy Yeglimar Montanez, desarrolladora apasionada por crear experiencias web y móviles que combinen un buen diseño con un código sólido. 
             Con más de un año de experiencia, trabajo principalmente en el front-end, aunque también me desenvuelvo en el diseño de bases de datos y en proyectos full stack en equipo.
            </p>
            <p>
              He trabajado en{" "}
              <strong className="text-text-light dark:text-text-dark">IMAGEN</strong> (gestión
              industrial), la{" "}
              <strong className="text-text-light dark:text-text-dark">Universidad Rafael Urdaneta</strong>{" "}
              (sistemas académicos) y{" "}
              <strong className="text-text-light dark:text-text-dark">CIATÉ</strong> (plataforma
              de atención terapéutica).
            </p>
            <p>
              Me apasiona crear interfaces atractivas respaldadas por arquitecturas sólidas
              y código limpio.
            </p>
          </div>

          {/* Experience */}
          <div className="flex flex-col gap-2 pt-1">
            {experience.map(({ company, period, role, color }, i) => (
              <motion.div
                key={company}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + i * 0.1, duration: 0.4 }}
                whileHover={{ x: 4 }}
                className="flex items-center gap-4 rounded-xl border border-black/8 dark:border-white/8 bg-surface-light dark:bg-surface-dark px-4 py-3 cursor-default"
              >
                <div className="h-9 w-1.5 flex-shrink-0 rounded-full" style={{ background: color }} aria-hidden="true" />
                <div className="min-w-0">
                  <p className="text-sm font-bold text-text-light dark:text-text-dark">{company}</p>
                  <p className="text-xs text-text-light/60 dark:text-text-dark/60">{role} · {period}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Stats with animated numbers */}
          <div className="grid grid-cols-3 gap-3 pt-2">
            {stats.map(({ value, suffix, label, bg, text }) => (
              <motion.div
                key={label}
                whileHover={{ scale: 1.06 }}
                className="flex flex-col items-center justify-center gap-1 rounded-2xl py-4 px-2 text-center shadow-sm"
                style={{ background: bg, color: text }}
              >
                <span className="font-display text-3xl font-extrabold leading-none">
                  <AnimatedNumber value={value} suffix={suffix} />
                </span>
                <span className="text-[10px] font-bold uppercase leading-snug opacity-80">
                  {label}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </SectionTemplate>
  );
}
