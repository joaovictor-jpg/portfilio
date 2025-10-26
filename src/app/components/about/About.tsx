import { Card, CardContent, CardDescription, CardTitle } from "@/app/components/ui/card/Card";
import { highlights } from "@/app/components/about/aboutData";

export function About() {
    return (
        <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="mb-4">About Me</h2>
                    <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
                    <p className="text-muted-foreground max-w-3xl mx-auto">
                        I am a passionate Full Stack Developer with strong experience
                        building scalable web applications and APIs using modern
                        technologies like Java (Spring Boot), React.js, Node.js, Express,
                        and TypeScript. I have solid knowledge of software architecture,
                        RESTful API design, Docker, and database modeling with PostgreSQL
                        and NoSQL solutions.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
                    {highlights.map((highlight) => (
                        <Card key={highlight.title} className="hover:shadow-lg transition-shadow duration-300 border-border">
                            <CardContent className="pt-6">
                                <div className="mb-4 p-3 bg-primary/10 rounded-lg w-fit">
                                    <highlight.icon className="h-6 w-6 text-primary" />
                                </div>
                                <CardTitle asChild className="mb-2">
                                    <h3>{highlight.title}</h3>
                                </CardTitle>
                                <CardDescription>{highlight.description}</CardDescription>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
