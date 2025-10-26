import { Code2, Database, Layers, Rocket, type LucideIcon } from "lucide-react";

export interface HighlightItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const highlights: HighlightItem[] = [
  { icon: Code2, title: "Full Stack Development", description: "Expert in building complete web solutions from frontend to backend", },
  { icon: Layers, title: "Software Architecture", description: "Strong knowledge of design patterns and scalable system architecture" },
  { icon: Database, title: "Database Design", description: "Proficient in both SQL and NoSQL database modeling and optimization" },
  { icon: Rocket, title: "Modern Technologies", description: "Staying current with the latest tools and best practices in development" },
];