import { Button } from "@/app/components/ui/button/button";
import { Menu } from "lucide-react";

export interface MobileMenuProps {
    isMenuOpen: boolean;
    scrollToSection: (id: string) => void;
}

export function MobileMenu({ isMenuOpen, scrollToSection }: MobileMenuProps) {
    if (!isMenuOpen) {
        return null;
    }

    return (
        <div
            id="mobile-menu"
            className="md:hidden pb-4 flex flex-col items-start gap-1"
        >
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
    );
}