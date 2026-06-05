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
    titleEn: "Work Permit System",
    description:
      "Plataforma web Full Stack desarrollada para COLBÚN que centraliza la gestión y auditoría de permisos de trabajo en entornos industriales. Digitaliza el ciclo de vida completo del permiso —solicitud, revisión, aprobación y cierre— eliminando el proceso en papel, reduciendo tiempos de respuesta y garantizando trazabilidad total de cada operación.",
    descriptionEn:
      "Full Stack web platform built for COLBÚN that centralizes the management and auditing of work permits in industrial environments. Digitizes the complete permit lifecycle —request, review, approval and closure— eliminating paper processes, reducing response times and ensuring full traceability of every operation.",
    stack: ["React", "TypeScript", "C#", "SQL Server"],
  },
  {
    id: "l2",
    type: "laboral",
    isPrivate: true,
    title: "Sistema de Bloqueos",
    titleEn: "Lockout (LOTO) System",
    description:
      "Plataforma web Full Stack desarrollada para COLBÚN que gestiona y audita el procedimiento de bloqueo de energías peligrosas (LOTO). Controla la colocación y retiro de candados de aislamiento en equipos sometidos a trabajos de mantenimiento, asegurando que ningún equipo sea energizado accidentalmente mientras el personal opera sobre él. Ofrece seguimiento en tiempo real, historial de intervenciones y reportes de cumplimiento.",
    descriptionEn:
      "Full Stack web platform built for COLBÚN that manages and audits the hazardous energy lockout procedure (LOTO). Controls the installation and removal of isolation locks on equipment under maintenance, ensuring no equipment is accidentally energized while personnel are working on it. Offers real-time tracking, intervention history and compliance reports.",
    stack: ["React", "TypeScript", "C#", "SQL Server"],
  },
  {
    id: "l3",
    type: "laboral",
    isPrivate: true,
    title: "Gestión Documental y de Expedientes",
    titleEn: "Document & File Management",
    description:
      "Sistema web Full Stack para la Universidad Rafael Urdaneta que permite crear, organizar, buscar y dar seguimiento a documentos y expedientes institucionales con control de versiones y flujos de aprobación.",
    descriptionEn:
      "Full Stack web system for Universidad Rafael Urdaneta that allows creating, organizing, searching and tracking institutional documents and files with version control and approval workflows.",
    stack: ["React", "TypeScript", "C#", "PostgreSQL"],
  },

  /* ── Proyectos personales ─────────────────────────── */
  {
    id: "p2",
    type: "personal",
    repoUrl: "https://github.com/yegli/ciate-platform",
    title: "Plataforma CIATÉ — Web y Móvil",
    titleEn: "CIATÉ Platform — Web & Mobile",
    description:
      "Plataforma digital para el Centro Integral de Atención Terapéutica: aplicación web para psicólogos (historias clínicas, hojas de seguimiento, informes psicológicos, asignaciones de tareas y recursos, registro de emociones) y aplicación móvil para pacientes (ejecución de actividades con evidencias y registro de emociones). Enero 2025 – Abril 2026.",
    descriptionEn:
      "Digital platform for the Centro Integral de Atención Terapéutica (CIATÉ): web app for psychologists (clinical records, follow-up sheets, psychological reports, task and resource assignments, emotion logs) and mobile app for patients (activity execution with evidence and emotion tracking). January 2025 – April 2026.",
    stack: ["React Native", "TypeScript", "C#", "SQL Server"],
  },
  {
    id: "p3",
    type: "personal",
    repoUrl: "https://github.com/yegli11/church-web-page",
    title: "Iglesia Antorcha de Cristo",
    titleEn: "Antorcha de Cristo Evangelical Church",
    description:
      "Sitio web institucional para la Iglesia Evangélica Antorcha de Cristo. Una página informativa diseñada para dar a conocer la identidad y organización de la congregación: su historia, propósito ministerial, misión, valores y la estructura de sus ministerios y departamentos.",
    descriptionEn:
      "Institutional website for Antorcha de Cristo Evangelical Church. An informational site designed to showcase the congregation's identity and organization: its history, ministerial purpose, mission, values and the structure of its ministries and departments.",
    stack: ["Next.js", "TypeScript"],
  },
  {
    id: "p4",
    type: "personal",
    repoUrl: "https://github.com/Nochi-Labs/OptiAhorro",
    title: "OptiAhorro — PWA",
    titleEn: "OptiAhorro — PWA",
    description:
      "Aplicación web progresiva (PWA) para la gestión y simulación de cuentas remuneradas. Permite comparar tasas de rendimiento, proyectar ganancias a distintos plazos y visualizar el crecimiento del ahorro de forma clara e interactiva.",
    descriptionEn:
      "Progressive Web App (PWA) for managing and simulating savings accounts. Allows comparing return rates, projecting earnings over different timeframes and visualizing savings growth in a clear and interactive way.",
    stack: ["Next.js", "TypeScript", "Supabase"],
  },
  {
    id: "p5",
    type: "personal",
    role: "Frontend",
    repoUrl: "https://github.com/ralvarezdev/uru-mobiles-imdb-app",
    title: "App de Reseñas de Películas",
    titleEn: "Movie Reviews App",
    description:
      "Aplicación móvil para descubrir, calificar y escribir reseñas de películas. Los usuarios pueden explorar catálogos, ver detalles de cada título, registrar su opinión y guardar sus favoritos. Participé como colaboradora en el desarrollo del frontend.",
    descriptionEn:
      "Mobile app to discover, rate and write movie reviews. Users can browse catalogs, view details for each title, log their opinion and save favorites. I participated as a frontend collaborator.",
    stack: ["React Native", "TypeScript"],
  },
  {
    id: "p6",
    type: "personal",
    role: "Frontend",
    repoUrl: "https://github.com/ralvarezdev/uru-mobiles-recipes-app",
    title: "App de Recetas de Cocina",
    titleEn: "Cooking Recipes App",
    description:
      "Aplicación móvil para explorar, guardar y compartir recetas de cocina. Incluye búsqueda por ingredientes, categorías de platos, instrucciones paso a paso y lista de compras integrada. Participé como colaboradora en el desarrollo del frontend.",
    descriptionEn:
      "Mobile app to explore, save and share recipes. Includes ingredient-based search, dish categories, step-by-step instructions and an integrated shopping list. I participated as a frontend collaborator.",
    stack: ["React Native", "TypeScript"],
  },
  {
    id: "p7",
    type: "personal",
    role: "Frontend",
    repoUrl: "https://github.com/ralvarezdev/uru-mobiles-tinder-app",
    title: "Tinder — App Móvil",
    titleEn: "Tinder — Mobile App",
    description:
      "Réplica funcional de la popular aplicación de conexiones sociales. Implementa la mecánica de swipe para aceptar o rechazar perfiles, sistema de matches, chat en tiempo real e interfaz de descubrimiento. Participé como colaboradora en el desarrollo del frontend.",
    descriptionEn:
      "Functional replica of the popular social connections app. Implements swipe mechanics to accept or reject profiles, a match system, real-time chat and a discovery interface. I participated as a frontend collaborator.",
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
