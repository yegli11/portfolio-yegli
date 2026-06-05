"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useLanguage } from "@/src/context/LanguageContext";
import type { ProjectCardProps } from "./types";

const palette = [
  { bg: "#EB4213", onBg: "#ffffff", accent: "#EB4213" },
  { bg: "#826DEE", onBg: "#ffffff", accent: "#826DEE" },
  { bg: "#FF99DC", onBg: "#1A0A2E", accent: "#C2006E" },
  { bg: "#D8F382", onBg: "#1A2E0A", accent: "#4A7A00" },
  { bg: "#4DB8FF", onBg: "#ffffff", accent: "#0080CC" },
  { bg: "#FFE566", onBg: "#1A1A00", accent: "#8A6F00" },
];

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  const { tr, locale } = useLanguage();
  const p = tr.projects;
  const { titleEn, descriptionEn, image, stack, role, isPrivate, liveUrl, repoUrl, caseStudyUrl } = project;
  const title = (locale === "en" && titleEn) ? titleEn : project.title;
  const description = (locale === "en" && descriptionEn) ? descriptionEn : project.description;
  const { bg, onBg, accent } = palette[index % palette.length];
  const num = String(index + 1).padStart(2, "0");

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.12 }}
      whileHover={{ y: -6 }}
      className="group flex flex-col overflow-hidden rounded-3xl shadow-md hover:shadow-2xl transition-all duration-300"
    >
      {/* Bold color top */}
      <div
        className="relative flex h-48 w-full items-end overflow-hidden p-5"
        style={{ backgroundColor: bg }}
      >
        {image ? (
          <Image
            src={image}
            alt={`Captura de pantalla del proyecto ${title}`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <>
            <span
              className="pointer-events-none absolute -right-2 top-1/2 -translate-y-1/2 select-none font-display text-[8rem] font-extrabold leading-none opacity-[0.12]"
              aria-hidden="true"
              style={{ color: onBg }}
            >
              {num}
            </span>
            <span
              className="pointer-events-none absolute left-5 top-5 select-none text-5xl font-black leading-none opacity-20"
              aria-hidden="true"
              style={{ color: onBg }}
            >
              ✳
            </span>
          </>
        )}

        {/* Bottom row: number chip + role/private badge */}
        <div className="relative z-10 flex w-full items-center justify-between gap-2">
          <span
            className="rounded-full px-3 py-1 text-xs font-bold uppercase tracking-widest"
            style={{ backgroundColor: `${onBg}20`, color: onBg, border: `1.5px solid ${onBg}35` }}
          >
            {num}
          </span>

          <div className="flex items-center gap-2">
            {role && (
              <span
                className="flex items-center gap-1 rounded-full px-3 py-1 text-xs font-bold"
                style={{ background: "rgba(0,0,0,0.28)", color: "#fff", backdropFilter: "blur(4px)" }}
              >
                ✦ {role}
              </span>
            )}

            {isPrivate && (
              <span
                className="flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-extrabold uppercase tracking-wider"
                style={{ background: "rgba(0,0,0,0.35)", color: "#fff", backdropFilter: "blur(4px)" }}
              >
                <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M18 8h-1V6A5 5 0 0 0 7 6v2H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2zM12 17a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm3.1-9H8.9V6a3.1 3.1 0 0 1 6.2 0v2z"/>
                </svg>
                {p.privateBadge}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* White content */}
      <div className="flex flex-1 flex-col gap-4 bg-surface-light dark:bg-surface-dark p-6">
        <h3 className="font-display text-xl font-extrabold leading-snug text-text-light dark:text-text-dark">
          {title}
        </h3>

        <p className="flex-1 text-sm leading-relaxed text-text-light/70 dark:text-text-dark/70">
          {description}
        </p>

        <div className="flex flex-wrap gap-2">
          {stack.map((tech) => (
            <span
              key={tech}
              className="rounded-full px-3 py-1 text-xs font-semibold"
              style={{ backgroundColor: `${bg}18`, color: accent, border: `1px solid ${bg}45` }}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links — hidden if private */}
        {!isPrivate && (liveUrl || repoUrl || caseStudyUrl) && (
          <div className="flex flex-wrap gap-2 pt-2 border-t border-black/6 dark:border-white/6">
            {repoUrl && (
              <motion.a
                href={repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Ver repositorio de ${title} en GitHub`}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-extrabold text-white shadow-sm transition-opacity hover:opacity-90"
                style={{ background: bg }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                </svg>
                {p.repoBtn}
              </motion.a>
            )}
            {liveUrl && (
              <motion.a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Ver demo de ${title}`}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-1.5 rounded-full border px-4 py-2 text-xs font-bold transition-colors hover:opacity-80"
                style={{ borderColor: `${bg}60`, color: accent }}
              >
                {p.demoBtn}
              </motion.a>
            )}
            {caseStudyUrl && (
              <motion.a
                href={caseStudyUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Caso de estudio de ${title}`}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-1.5 rounded-full border px-4 py-2 text-xs font-bold transition-colors hover:opacity-80"
                style={{ borderColor: `${bg}60`, color: accent }}
              >
                {p.caseBtn}
              </motion.a>
            )}
          </div>
        )}

        {/* Private notice */}
        {isPrivate && (
          <div className="flex items-center gap-2 rounded-xl border border-black/8 dark:border-white/8 px-4 py-3 text-xs text-text-light/50 dark:text-text-dark/50">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M18 8h-1V6A5 5 0 0 0 7 6v2H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2zM12 17a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm3.1-9H8.9V6a3.1 3.1 0 0 1 6.2 0v2z"/>
            </svg>
            {p.private}
          </div>
        )}
      </div>
    </motion.article>
  );
}
