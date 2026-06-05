import type { ReactNode } from "react";
import type { SkillCategory } from "@/src/types";

export interface SkillCardProps {
  category: SkillCategory;
  skills: string[];
  icon: ReactNode;
  color?: string;
}
