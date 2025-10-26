export interface SkillCategory {
    category: string;
    skills: string[];
    color: string;
}

export const skillCategories: SkillCategory[] = [
    {
        category: "Frontend",
        skills: ["React.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"],
        color: "bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-500/20",
    },
    {
        category: "Backend",
        skills: ["Java", "Spring Boot", "Node.js", "Express", "RESTful APIs"],
        color: "bg-green-500/10 text-green-700 dark:text-green-400 border-green-500/20",
    },
    {
        category: "Database",
        skills: ["PostgreSQL", "MongoDB", "NoSQL", "MySQL", "SQL"],
        color: "bg-purple-500/10 text-purple-700 dark:text-purple-400 border-purple-500/20",
    },
    {
        category: "DevOps & Tools",
        skills: ["Docker", "Git", "Linux", "AWS"],
        color: "bg-orange-500/10 text-orange-700 dark:text-orange-400 border-orange-500/20",
    },
];