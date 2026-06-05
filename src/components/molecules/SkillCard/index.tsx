"use client";

import { motion } from "framer-motion";
import type { SkillCardProps } from "./types";

export function SkillCard({ category, skills, icon, color = "#7C3AED" }: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{ y: -4 }}
      className="group rounded-2xl border border-black/8 dark:border-white/8 bg-surface-light dark:bg-surface-dark p-6 shadow-sm hover:shadow-lg transition-all duration-300"
      style={{ "--card-color": color } as React.CSSProperties}
    >
      {/* Icon box with category color */}
      <div
        className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl text-white shadow-md"
        style={{ background: color }}
      >
        {icon}
      </div>

      <h3 className="mb-4 font-display text-base font-bold text-text-light dark:text-text-dark">
        {category}
      </h3>

      <ul className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <li
            key={skill}
            className="rounded-full px-3 py-1 text-xs font-medium transition-colors"
            style={{
              backgroundColor: `${color}15`,
              color: color,
            }}
          >
            {skill}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
