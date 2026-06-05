"use client";

import { motion } from "framer-motion";
import { SectionTemplate } from "@/src/components/templates/SectionTemplate";
import { SectionTitle } from "@/src/components/atoms/SectionTitle";

const techGroups = [
  { label: "Frontend",              bg: "#826DEE", text: "#fff",     skills: ["React", "TypeScript", "JavaScript", "HTML", "CSS"] },
  { label: "Mobile",                bg: "#FF99DC", text: "#1A0A2E", skills: ["React Native"] },
  { label: "Backend",               bg: "#EB4213", text: "#fff",     skills: ["Node.js", "C#"] },
  { label: "Bases de datos",        bg: "#4DB8FF", text: "#fff",     skills: ["PostgreSQL", "Azure SQL"] },
  { label: "Diseño & Herramientas", bg: "#D8F382", text: "#1A2E0A", skills: ["Figma", "Canva", "Git"] },
];

const softSkills = [
  {
    label: "Comunicativa",
    bg: "#826DEE", text: "#fff",
    desc: "Me expreso con claridad con el equipo y los clientes",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
  {
    label: "Trabajo en equipo",
    bg: "#EB4213", text: "#fff",
    desc: "Colaboro activamente para alcanzar objetivos comunes",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    label: "Bajo presión",
    bg: "#FF99DC", text: "#1A0A2E",
    desc: "Mantengo el enfoque y la calma en situaciones críticas",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    label: "Adaptabilidad",
    bg: "#D8F382", text: "#1A2E0A",
    desc: "Me ajusto rápidamente a nuevos contextos y tecnologías",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polyline points="23 4 23 10 17 10" /><polyline points="1 20 1 14 7 14" />
        <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
      </svg>
    ),
  },
  {
    label: "Resolución de problemas",
    bg: "#4DB8FF", text: "#fff",
    desc: "Analizo situaciones y encuentro soluciones eficientes",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
        <line x1="12" y1="17" x2="12.01" y2="17" />
      </svg>
    ),
  },
];

export function SkillsSection() {
  return (
    <SectionTemplate id="habilidades" variant="muted">
      <div className="flex flex-col gap-16">

        {/* ── Tech skills ──────────────────────────────────── */}
        <div className="flex flex-col gap-8">
          <SectionTitle eyebrow="Habilidades técnicas" title="Tecnologías que manejo" subtitle="Stack completo — desde interfaces hasta bases de datos." />

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {techGroups.map((group, gi) => (
              <motion.div
                key={group.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, ease: "easeOut", delay: gi * 0.08 }}
                whileHover={{ y: -4, scale: 1.01 }}
                className="overflow-hidden rounded-2xl shadow-md"
              >
                {/* Header */}
                <div className="px-5 py-4 flex items-center gap-3" style={{ background: group.bg }}>
                  <span className="text-base font-extrabold" style={{ color: group.text }}>
                    {group.label}
                  </span>
                  <span className="ml-auto text-2xl font-black opacity-20 select-none" style={{ color: group.text }}>✳</span>
                </div>
                {/* Skills */}
                <div className="bg-surface-light dark:bg-surface-dark px-5 py-4 flex flex-wrap gap-2">
                  {group.skills.map((skill, si) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.85 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: gi * 0.06 + si * 0.06 }}
                      whileHover={{ scale: 1.1 }}
                      className="cursor-default rounded-full px-3 py-1 text-sm font-semibold"
                      style={{ background: `${group.bg}18`, color: group.bg === "#FF99DC" ? "#C2006E" : group.bg === "#D8F382" ? "#4A7A00" : group.bg }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Colorful divider */}
        <div className="flex gap-1 h-2" aria-hidden="true">
          {["#826DEE","#FF99DC","#EB4213","#D8F382","#4DB8FF","#FFE566"].map((c) => (
            <div key={c} className="flex-1 rounded-full" style={{ background: c }} />
          ))}
        </div>

        {/* ── Soft skills ───────────────────────────────────── */}
        <div className="flex flex-col gap-8">
          <SectionTitle eyebrow="Habilidades blandas" title="Cómo trabajo" subtitle="Las cualidades que me hacen un plus en cualquier equipo." />

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {softSkills.map((skill, si) => (
              <motion.div
                key={skill.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, ease: "easeOut", delay: si * 0.08 }}
                whileHover={{ y: -6, scale: 1.03 }}
                className="flex flex-col items-center gap-3 rounded-2xl p-5 text-center shadow-md cursor-default"
                style={{ background: skill.bg, color: skill.text }}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/20">
                  {skill.icon}
                </div>
                <p className="text-sm font-extrabold leading-snug">{skill.label}</p>
                <p className="text-xs opacity-80 leading-relaxed">{skill.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </SectionTemplate>
  );
}
