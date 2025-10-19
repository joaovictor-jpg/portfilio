import { Button } from "@/app/components/ui/button/button";
import { navLinks } from "@/app/types/navigation";

export interface MobileMenuProps {
    isMenuOpen: boolean;
    scrollToSection: (id: string) => void;
}

export function MobileMenu({ isMenuOpen, scrollToSection}: Readonly<MobileMenuProps>) {
    if (!isMenuOpen) {
        return null;
    }

    return (
        <div
            id="mobile-menu"
            className="md:hidden pb-4 flex flex-col items-start gap-1"
        >
            {
                navLinks.map((link) => (
                    <Button key={link.id} variant="ghost" asChild>
                        <a href={`#${link.id}`} onClick={(e) => { e.preventDefault(); scrollToSection(link.id); }}>{link.label}</a>
                    </Button>
                ))
            }
        </div>
    );
}