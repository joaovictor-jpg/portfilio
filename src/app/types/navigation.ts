import { Github, Linkedin, LucideIcon, Mail } from "lucide-react";

export interface SectionNavLink {
  id: string;
  label: string;
}

const navLinks: SectionNavLink[] = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "Projects", label: "Projects" },
    { id: "contact", label: "Contact" },
];

export interface SocialLink {
  href: string;
  ariaLabel: string;
  IconComponent: LucideIcon;
}

const socialLinks: SocialLink[] = [
  {
    href: "https://github.com/joaovictor-jpg",
    ariaLabel: "GitHub",
    IconComponent: Github,
  },
  {
    href: "https://www.linkedin.com/in/joaoperfilv2/",
    ariaLabel: "LinkedIn",
    IconComponent: Linkedin
  },
  {
    href: "mailto:joaovictormdasilva676@gmail.com",
    ariaLabel: "Email",
    IconComponent: Mail,
  },
]

export { navLinks, socialLinks };