export type ProjectType = "laboral" | "personal";

export interface Project {
  id: string;
  title: string;
  description: string;
  image?: string;
  stack: string[];
  type: ProjectType;
  role?: string;
  isPrivate?: boolean;
  titleEn?: string;
  descriptionEn?: string;
  liveUrl?: string;
  repoUrl?: string;
  caseStudyUrl?: string;
  featured?: boolean;
}

export interface Skill {
  name: string;
  category: SkillCategory;
  icon?: string;
}

export type SkillCategory =
  | "Design"
  | "Frontend"
  | "Tools"
  | "Other";

export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: "github" | "linkedin" | "dribbble" | "email" | "behance";
}
