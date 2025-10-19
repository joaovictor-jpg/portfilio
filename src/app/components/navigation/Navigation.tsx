import { Menu, Moon, Sun } from "lucide-react";
import { Button } from "@/app/components/ui/button/button"
import { useState, useEffect } from "react";

export function Navigation() {
    const [isDark, setIsDark] = useState(() => {
        if (typeof window === 'undefined') {
            return false;
        }
        const savedTheme = localStorage.getItem("theme");
        return savedTheme === "dark";
    });
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        if (isDark) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [isDark]);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
            setIsMenuOpen(false);
        }
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="shrink-0">
                        <h3 className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                            Portfolio
                        </h3>
                    </div>

                    <div className="hidden md:flex items-center gap-6">
                        <button
                            onClick={() => scrollToSection("about")}
                            className="text-foreground/80 hover:text-foreground transition-colors"
                        >
                            About
                        </button>
                        <button
                            onClick={() => scrollToSection("skills")}
                            className="text-foreground/80 hover:text-foreground transition-colors"
                        >
                            Skills
                        </button>
                        <button
                            onClick={() => scrollToSection("contact")}
                            className="text-foreground/80 hover:text-foreground transition-colors"
                        >
                            Contact
                        </button>
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setIsDark(!isDark)}
                            aria-label="Toggle theme"
                        >
                            {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                        </Button>
                    </div>

                    <div className="md:hidden flex items-center gap-2">
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setIsDark(!isDark)}
                            aria-label="Toggle theme"
                        >
                            {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                        </Button>
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            aria-label="Toggle menu"
                        >
                            <Menu className="h-5 w-5" />
                        </Button>
                    </div>
                </div>

                {isMenuOpen && (
                    <div className="md:hidden pb-4 flex flex-col gap-3">
                        <button
                            onClick={() => scrollToSection("about")}
                            className="text-left py-2 text-foreground/80 hover:text-foreground transition-colors"
                        >
                            About
                        </button>
                        <button
                            onClick={() => scrollToSection("skills")}
                            className="text-left py-2 text-foreground/80 hover:text-foreground transition-colors"
                        >
                            Skills
                        </button>
                        <button
                            onClick={() => scrollToSection("contact")}
                            className="text-left py-2 text-foreground/80 hover:text-foreground transition-colors"
                        >
                            Contact
                        </button>
                    </div>
                )}
            </div>
        </nav>
    );
}