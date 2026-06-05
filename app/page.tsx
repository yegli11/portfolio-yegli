import { Header } from "@/src/components/organisms/Header";
import { HeroSection } from "@/src/components/organisms/HeroSection";
import { AboutSection } from "@/src/components/organisms/AboutSection";
import { ProjectsSection } from "@/src/components/organisms/ProjectsSection";
import { SkillsSection } from "@/src/components/organisms/SkillsSection";
import { EducationSection } from "@/src/components/organisms/EducationSection";
import { ContactSection } from "@/src/components/organisms/ContactSection";
import { Footer } from "@/src/components/organisms/Footer";

export default function Home() {
  return (
    <>
      <Header />
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
