import { Badge } from "@/app/components/ui/badge/Badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card/Card";
import { skillCategories } from "./skillsData";

export function Skills() {
    return (
        <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="mb-4">Technical Skills</h2>
                    <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        A comprehensive toolkit of modern technologies and frameworks for
                        building robust, scalable applications.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {skillCategories.map((category) => (
                        <Card
                            key={category.category}
                            className="hover:shadow-lg transition-shadow duration-300 border-border"
                        >
                            <CardHeader>
                                <CardTitle asChild>
                                    <h3>{category.category}</h3>
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="flex flex-wrap gap-2">
                                    {category.skills.map((skill) => (
                                        <Badge
                                            key={skill}
                                            variant="outline"
                                            className={category.color}
                                        >
                                            {skill}
                                        </Badge>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <div className="mt-12 p-8 bg-muted/30 rounded-lg">
                    <h3 className="mb-4 text-center">Core Competencies</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                        <div>
                            <p className="text-muted-foreground">
                                Software Architecture & Design Patterns
                            </p>
                        </div>
                        <div>
                            <p className="text-muted-foreground">
                                Scalable Web Applications
                            </p>
                        </div>
                        <div>
                            <p className="text-muted-foreground">
                                API Design & Development
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
