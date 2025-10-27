import { Card } from "@/app/components/ui/card/Card";
import { Badge } from "@/app/components/ui/badge/Badge";
import { Button } from "@/app/components/ui/button/button";
import { Github, ExternalLink } from "lucide-react";
import { projects } from "./projectsData";

export function Projects() {

    return (
        <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="mb-4">Featured Projects</h2>
                    <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Showcasing real-world applications built with modern technologies
                        and best practices.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-8">
                    {projects.map((project) => (
                        <Card
                            key={project.title}
                            className="overflow-hidden hover:shadow-xl transition-shadow duration-300 border-border"
                        >
                            <div className="p-8">
                                <div className="flex items-start justify-between mb-4">
                                    <div>
                                        <h3 className="mb-2">{project.title}</h3>
                                        <p className="text-muted-foreground">
                                            {project.description}
                                        </p>
                                    </div>
                                </div>

                                <div className="space-y-6 mt-6">
                                    <div>
                                        <h4 className="mb-3 flex items-center gap-2">
                                            <span className="text-blue-600 dark:text-blue-400">
                                                Frontend
                                            </span>
                                        </h4>
                                        <div className="flex flex-wrap gap-2">
                                            {project.technologies.frontend.map((tech) => (
                                                <Badge
                                                    key={tech}
                                                    variant="outline"
                                                    className="bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-500/20"
                                                >
                                                    {tech}
                                                </Badge>
                                            ))}
                                        </div>
                                        <div className="mt-3">
                                            <Button variant="outline" size="sm" asChild>
                                                <a
                                                    href={project.links.frontend.github}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center gap-2"
                                                >
                                                    <Github className="h-4 w-4" />
                                                    {project.links.frontend.label}
                                                    <ExternalLink className="h-3 w-3" />
                                                </a>
                                            </Button>
                                        </div>
                                    </div>

                                    <div>
                                        <h4 className="mb-3 flex items-center gap-2">
                                            <span className="text-green-600 dark:text-green-400">
                                                Backend
                                            </span>
                                        </h4>
                                        <div className="flex flex-wrap gap-2">
                                            {project.technologies.backend.map((tech, techIndex) => (
                                                <Badge
                                                    key={techIndex}
                                                    variant="outline"
                                                    className="bg-green-500/10 text-green-700 dark:text-green-400 border-green-500/20"
                                                >
                                                    {tech}
                                                </Badge>
                                            ))}
                                        </div>
                                        <div className="mt-3">
                                            <Button variant="outline" size="sm" asChild>
                                                <a
                                                    href={project.links.backend.github}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center gap-2"
                                                >
                                                    <Github className="h-4 w-4" />
                                                    {project.links.backend.label}
                                                    <ExternalLink className="h-3 w-3" />
                                                </a>
                                            </Button>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-6 pt-6 border-t border-border">
                                    <div className="flex items-center gap-2 text-muted-foreground">
                                        <Github className="h-4 w-4" />
                                        <p>Full-stack application with separate repositories</p>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <Card className="p-6 bg-primary/5 border-primary/20">
                        <p className="text-muted-foreground">
                            More projects coming soon! Check out my{" "}
                            <a
                                href="https://github.com/joaovictor-jpg"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary hover:underline"
                            >
                                GitHub profile
                            </a>{" "}
                            for additional work.
                        </p>
                    </Card>
                </div>
            </div>
        </section>
    );
}
