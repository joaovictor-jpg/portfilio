export interface ProjectsData {
    title: string;
    description: string;
    technologies: {
        frontend: string[];
        backend: string[];
    };
    links: {
        frontend: {
            github: string;
            label: string;
        };
        backend: {
            github: string;
            label: string;
        };
    };
}

export const projects: ProjectsData[] = [
    {
        title: "Financias",
        description:
            "A comprehensive financial management application with a modern Next.js frontend and robust Java Spring Boot backend. Features include transaction tracking, budget management, and financial analytics.",
        technologies: {
            frontend: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
            backend: ["Java", "Spring Boot", "PostgreSQL", "RESTful API"],
        },
        links: {
            frontend: {
                github: "https://github.com/joaovictor-jpg/financias",
                label: "Frontend Repository",
            },
            backend: {
                github: "https://github.com/joaovictor-jpg/jota-s-finance",
                label: "Backend Repository",
            },
        },
    },
];