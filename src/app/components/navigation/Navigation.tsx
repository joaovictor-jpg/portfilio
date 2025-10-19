import { Menu, Moon, Sun } from "lucide-react";
import { Button } from "@/app/components/ui/button/button";
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

    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    useEffect(() => {
        if (isDark) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [isDark]);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
            setIsMenuOpen(false);
        }
    };

    const renderThemeToggleButton = () => {
        if (!isMounted) {
            return <div className="size-9" />; 
        }

        return (
            <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsDark(!isDark)}
                aria-label="Toggle theme"
            >
                {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
        );
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

                    <div className="hidden md:flex items-center gap-1">
                        <Button variant="ghost" asChild>
                            <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection("about"); }}>About</a>
                        </Button>
                        <Button variant="ghost" asChild>
                            <a href="#skills" onClick={(e) => { e.preventDefault(); scrollToSection("skills"); }}>Skills</a>
                        </Button>
                        <Button variant="ghost" asChild>
                            <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection("contact"); }}>Contact</a>
                        </Button>
                        {renderThemeToggleButton()}
                    </div>

                    <div className="md:hidden flex items-center gap-2">
                        {renderThemeToggleButton()}
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
                    <div className="md:hidden pb-4 flex flex-col items-start gap-1">
                        <Button variant="ghost" asChild className="w-full justify-start">
                            <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection("about"); }}>About</a>
                        </Button>
                        <Button variant="ghost" asChild className="w-full justify-start">
                            <a href="#skills" onClick={(e) => { e.preventDefault(); scrollToSection("skills"); }}>Skills</a>
                        </Button>
                        <Button variant="ghost" asChild className="w-full justify-start">
                            <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection("contact"); }}>Contact</a>
                        </Button>
                    </div>
                )}
            </div>
        </nav>
    );
}