export interface SectionNavLink {
  id: string;
  label: string;
}

const navLinks: SectionNavLink[] = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact" },
];

export { navLinks };