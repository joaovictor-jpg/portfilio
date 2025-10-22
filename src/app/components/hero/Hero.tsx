import { Button } from "@/app/components/ui/button/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

export function Hero() {
    const scrollToAbout = () => {
        const element = document.getElementById("about");
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
            <div className="max-w-4xl mx-auto text-center">
                <div className="mb-6">
                    <div className="inline-block px-4 py-2 bg-secondary rounded-full mb-6">
                        <p className="text-secondary-foreground">
                            👋 Welcome to my portfolio
                        </p>
                    </div>
                </div>

                <h1 className="mb-4 bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
                    Full Stack Developer
                </h1>

                <p className="mb-8 text-muted-foreground max-w-2xl mx-auto">
                    Building scalable web applications and APIs with modern technologies.
                    Passionate about clean code, software architecture, and creating
                    seamless user experiences.
                </p>

                <div className="flex flex-wrap gap-4 justify-center mb-12">
                    <Button size="lg" onClick={scrollToAbout}>
                        View My Work
                    </Button>
                    <Button size="lg" variant="outline" asChild>
                        <a href="#contact">Get In Touch</a>
                    </Button>
                </div>

                <div className="flex gap-4 justify-center">
                    <Button variant="ghost" size="icon" asChild>
                        <a
                            href="https://github.com/joaovictor-jpg"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                        >
                            <Github className="h-5 w-5" />
                        </a>
                    </Button>
                    <Button variant="ghost" size="icon" asChild>
                        <a
                            href="https://www.linkedin.com/in/joaoperfilv2/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                        >
                            <Linkedin className="h-5 w-5" />
                        </a>
                    </Button>
                    <Button variant="ghost" size="icon" asChild>
                        <a href="mailto:joaovictormdasilva676@gmail.com" aria-label="Email">
                            <Mail className="h-5 w-5" />
                        </a>
                    </Button>
                </div>

                <div className="mt-16 animate-bounce">
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={scrollToAbout}
                        aria-label="Scroll down"
                    >
                        <ArrowDown className="h-6 w-6" />
                    </Button>
                </div>
            </div>
        </section>
    );
}