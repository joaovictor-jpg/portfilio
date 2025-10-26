import { Card } from "@/app/components/ui/card/Card";
import { Code2, Database, Layers, Rocket } from "lucide-react";

export function About() {
  const highlights = [
    {
      icon: Code2,
      title: "Full Stack Development",
      description:
        "Expert in building complete web solutions from frontend to backend",
    },
    {
      icon: Layers,
      title: "Software Architecture",
      description:
        "Strong knowledge of design patterns and scalable system architecture",
    },
    {
      icon: Database,
      title: "Database Design",
      description:
        "Proficient in both SQL and NoSQL database modeling and optimization",
    },
    {
      icon: Rocket,
      title: "Modern Technologies",
      description:
        "Staying current with the latest tools and best practices in development",
    },
  ];

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
          {highlights.map((highlight, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-lg transition-shadow duration-300 border-border"
            >
              <div className="mb-4 p-3 bg-primary/10 rounded-lg w-fit">
                <highlight.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2">{highlight.title}</h3>
              <p className="text-muted-foreground">{highlight.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
