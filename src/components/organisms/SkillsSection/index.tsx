"use client";

import { motion } from "framer-motion";
import { SectionTemplate } from "@/src/components/templates/SectionTemplate";
import { SectionTitle } from "@/src/components/atoms/SectionTitle";
import { useLanguage } from "@/src/context/LanguageContext";

const TECH_GROUPS = [
  { bg: "#826DEE", text: "#fff",     skills: ["React", "TypeScript", "JavaScript", "HTML", "CSS"] },
  { bg: "#FF99DC", text: "#1A0A2E", skills: ["React Native"] },
  { bg: "#EB4213", text: "#fff",     skills: ["Node.js", "C#"] },
  { bg: "#4DB8FF", text: "#fff",     skills: ["PostgreSQL", "Azure SQL"] },
  { bg: "#D8F382", text: "#1A2E0A", skills: ["Figma", "Canva", "Git"] },
];

const SOFT_ICONS = [
  <svg key="1" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>,
  <svg key="2" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>,
  <svg key="3" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>,
  <svg key="4" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="23 4 23 10 17 10" /><polyline points="1 20 1 14 7 14" /><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" /></svg>,
  <svg key="5" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10" /><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" /><line x1="12" y1="17" x2="12.01" y2="17" /></svg>,
];

const SOFT_COLORS = [
  { bg: "#826DEE", text: "#fff" },
  { bg: "#EB4213", text: "#fff" },
  { bg: "#FF99DC", text: "#1A0A2E" },
  { bg: "#D8F382", text: "#1A2E0A" },
  { bg: "#4DB8FF", text: "#fff" },
];

export function SkillsSection() {
  const { tr } = useLanguage();
  const s = tr.skills;

  return (
    <SectionTemplate id="habilidades" variant="muted">
      <div className="flex flex-col gap-16">

        {/* Tech skills */}
        <div className="flex flex-col gap-8">
          <SectionTitle eyebrow={s.techEyebrow} title={s.techTitle} subtitle={s.techSubtitle} />

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {TECH_GROUPS.map((group, gi) => (
              <motion.div
                key={gi}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, ease: "easeOut", delay: gi * 0.08 }}
                whileHover={{ y: -4, scale: 1.01 }}
                className="overflow-hidden rounded-2xl shadow-md"
              >
                <div className="px-5 py-4 flex items-center gap-3" style={{ background: group.bg }}>
                  <span className="text-base font-extrabold" style={{ color: group.text }}>
                    {s.techCategories[gi]}
                  </span>
                  <span className="ml-auto text-2xl font-black opacity-20 select-none" style={{ color: group.text }}>✳</span>
                </div>
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
                      style={{
                        background: `${group.bg}18`,
                        color: group.bg === "#FF99DC" ? "#C2006E" : group.bg === "#D8F382" ? "#4A7A00" : group.bg,
                      }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="flex gap-1 h-2" aria-hidden="true">
          {["#826DEE","#FF99DC","#EB4213","#D8F382","#4DB8FF","#FFE566"].map((c) => (
            <div key={c} className="flex-1 rounded-full" style={{ background: c }} />
          ))}
        </div>

        {/* Soft skills */}
        <div className="flex flex-col gap-8">
          <SectionTitle eyebrow={s.softEyebrow} title={s.softTitle} subtitle={s.softSubtitle} />

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {SOFT_COLORS.map(({ bg, text }, si) => (
              <motion.div
                key={si}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, ease: "easeOut", delay: si * 0.08 }}
                whileHover={{ y: -6, scale: 1.03 }}
                className="flex flex-col items-center gap-3 rounded-2xl p-5 text-center shadow-md cursor-default"
                style={{ background: bg, color: text }}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/20">
                  {SOFT_ICONS[si]}
                </div>
                <p className="text-sm font-extrabold leading-snug">{s.softLabels[si]}</p>
                <p className="text-xs opacity-80 leading-relaxed">{s.softDescs[si]}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SectionTemplate>
  );
}
