"use client";

import { motion } from "framer-motion";
import { SectionTemplate } from "@/src/components/templates/SectionTemplate";
import { SectionTitle } from "@/src/components/atoms/SectionTitle";
import { ProjectCard } from "@/src/components/molecules/ProjectCard";
import { useLanguage } from "@/src/context/LanguageContext";
import type { Project } from "@/src/types";

const projects: Project[] = [
  /* ── Proyectos laborales ─────────────────────────── */
  {
    id: "l1",
    type: "laboral",
    isPrivate: true,
    title: "Sistema de Permisos de Trabajo",
    description:
      "Plataforma web Full Stack desarrollada para COLBÚN que centraliza la gestión y auditoría de permisos de trabajo en entornos industriales. Digitaliza el ciclo de vida completo del permiso —solicitud, revisión, aprobación y cierre— eliminando el proceso en papel, reduciendo tiempos de respuesta y garantizando trazabilidad total de cada operación.",
    stack: ["React", "TypeScript", "C#", "SQL Server"],
  },
  {
    id: "l2",
    type: "laboral",
    isPrivate: true,
    title: "Sistema de Bloqueos",
    description:
      "Plataforma web Full Stack desarrollada para COLBÚN que gestiona y audita el procedimiento de bloqueo de energías peligrosas (LOTO). Controla la colocación y retiro de candados de aislamiento en equipos sometidos a trabajos de mantenimiento, asegurando que ningún equipo sea energizado accidentalmente mientras el personal opera sobre él. Ofrece seguimiento en tiempo real, historial de intervenciones y reportes de cumplimiento.",
    stack: ["React", "TypeScript", "C#", "SQL Server"],
  },

  /* ── Proyectos personales ─────────────────────────── */
  {
    id: "l3",
    type: "laboral",
    isPrivate: true,
    title: "Gestión Documental y de Expedientes",
    description:
      "Sistema web Full Stack para la Universidad Rafael Urdaneta que permite crear, organizar, buscar y dar seguimiento a documentos y expedientes institucionales con control de versiones y flujos de aprobación.",
    stack: ["React", "TypeScript", "C#", "PostgreSQL"],
  },
  {
    id: "p2",
    type: "personal",
    repoUrl: "https://github.com/yegli/ciate-platform",
    title: "Plataforma CIATÉ — Web y Móvil",
    description:
      "Plataforma digital para el Centro Integral de Atención Terapéutica: aplicación web para psicólogos (historias clínicas, hojas de seguimiento, informes psicológicos, asignaciones de tareas y recursos, registro de emociones) y aplicación móvil para pacientes (ejecución de actividades con evidencias y registro de emociones). Enero 2025 – Abril 2026.",
    stack: ["React Native", "TypeScript", "C#", "SQL Server"],
  },
  {
    id: "p3",
    type: "personal",
    repoUrl: "https://github.com/yegli11/church-web-page",
    title: "Iglesia Antorcha de Cristo",
    description:
      "Sitio web institucional para la Iglesia Evangélica Antorcha de Cristo. Una página informativa diseñada para dar a conocer la identidad y organización de la congregación: su historia, propósito ministerial, misión, valores y la estructura de sus ministerios y departamentos.",
    stack: ["Next.js", "TypeScript"],
  },
  {
    id: "p4",
    type: "personal",
    repoUrl: "https://github.com/Nochi-Labs/OptiAhorro",
    title: "OptiAhorro — PWA",
    description:
      "Aplicación web progresiva (PWA) para la gestión y simulación de cuentas remuneradas. Permite comparar tasas de rendimiento, proyectar ganancias a distintos plazos y visualizar el crecimiento del ahorro de forma clara e interactiva.",
    stack: ["Next.js", "TypeScript", "Supabase"],
  },
  {
    id: "p5",
    type: "personal",
    role: "Frontend",
    repoUrl: "https://github.com/ralvarezdev/uru-mobiles-imdb-app",
    title: "App de Reseñas de Películas",
    description:
      "Aplicación móvil para descubrir, calificar y escribir reseñas de películas. Los usuarios pueden explorar catálogos, ver detalles de cada título, registrar su opinión y guardar sus favoritos. Participé como colaboradora en el desarrollo del frontend.",
    stack: ["React Native", "TypeScript"],
  },
  {
    id: "p6",
    type: "personal",
    role: "Frontend",
    repoUrl: "https://github.com/ralvarezdev/uru-mobiles-recipes-app",
    title: "App de Recetas de Cocina",
    description:
      "Aplicación móvil para explorar, guardar y compartir recetas de cocina. Incluye búsqueda por ingredientes, categorías de platos, instrucciones paso a paso y lista de compras integrada. Participé como colaboradora en el desarrollo del frontend.",
    stack: ["React Native", "TypeScript"],
  },
  {
    id: "p7",
    type: "personal",
    role: "Frontend",
    repoUrl: "https://github.com/ralvarezdev/uru-mobiles-tinder-app",
    title: "Tinder — App Móvil",
    description:
      "Réplica funcional de la popular aplicación de conexiones sociales. Implementa la mecánica de swipe para aceptar o rechazar perfiles, sistema de matches, chat en tiempo real e interfaz de descubrimiento. Participé como colaboradora en el desarrollo del frontend.",
    stack: ["React Native", "TypeScript"],
  },
];

const laborales  = projects.filter((p) => p.type === "laboral");
const personales = projects.filter((p) => p.type === "personal");

/* Label pill shared between both group headers */
function GroupLabel({ label, bg, text }: { label: string; bg: string; text: string }) {
  return (
    <motion.span
      initial={{ opacity: 0, x: -16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-extrabold uppercase tracking-wider shadow-md"
      style={{ background: bg, color: text }}
    >
      {label}
    </motion.span>
  );
}

export function ProjectsSection() {
  const { tr } = useLanguage();
  const p = tr.projects;

  return (
    <SectionTemplate id="proyectos" variant="light">
      <div className="flex flex-col gap-16">
        <SectionTitle eyebrow={p.eyebrow} title={p.title} subtitle={p.subtitle} />

        <div className="flex flex-col gap-6">
          <GroupLabel label={p.laborales} bg="#EB4213" text="#fff" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {laborales.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>
        </div>

        <div className="flex gap-1 h-1.5" aria-hidden="true">
          {["#826DEE","#FF99DC","#EB4213","#D8F382","#4DB8FF"].map((c) => (
            <div key={c} className="flex-1 rounded-full" style={{ background: c }} />
          ))}
        </div>

        <div className="flex flex-col gap-6">
          <GroupLabel label={p.personales} bg="#826DEE" text="#fff" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {personales.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i + laborales.length} />
            ))}
          </div>
        </div>
      </div>
    </SectionTemplate>
  );
}
