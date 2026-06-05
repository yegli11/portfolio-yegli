import { Header } from "@/src/components/organisms/Header";
import { HeroSection } from "@/src/components/organisms/HeroSection";
import { AboutSection } from "@/src/components/organisms/AboutSection";
import { ProjectsSection } from "@/src/components/organisms/ProjectsSection";
import { SkillsSection } from "@/src/components/organisms/SkillsSection";
import { EducationSection } from "@/src/components/organisms/EducationSection";
import { ContactSection } from "@/src/components/organisms/ContactSection";
import { Footer } from "@/src/components/organisms/Footer";
import type { NavLink } from "@/src/types";

const navLinks: NavLink[] = [
  { label: "Inicio",      href: "#inicio" },
  { label: "Sobre mí",   href: "#sobre-mi" },
  { label: "Proyectos",  href: "#proyectos" },
  { label: "Habilidades", href: "#habilidades" },
  { label: "Formación",  href: "#formacion" },
  { label: "Contacto",   href: "#contacto" },
];

export default function Home() {
  return (
    <>
      <Header links={navLinks} />
      <main id="main-content">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <EducationSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
