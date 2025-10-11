import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const scrollToSection = (id: string) => {
    if (id === 'about' || id === 'companies') {
      window.location.hash = id;
    } else {
      window.location.hash = '';
      setTimeout(() => {
        const element = document.getElementById(id);
        element?.scrollIntoView({
          behavior: "smooth"
        });
      }, 100);
    }
    setIsMobileMenuOpen(false);
  };
  const navItems = [{
    label: "Início",
    id: "hero"
  }, {
    label: "Sobre mim",
    id: "about"
  }, {
    label: "Empresas",
    id: "companies"
  }, {
    label: "Experiência",
    id: "experience"
  }, {
    label: "Formação",
    id: "education"
  }, {
    label: "Habilidades",
    id: "skills"
  }, {
    label: "Objetivos",
    id: "career-timeline"
  }, {
    label: "Contato",
    id: "contact"
  }];
  return <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-background/95 backdrop-blur-lg border-b border-primary/20 shadow-lg" : "bg-transparent"}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="https://bio.site/yamsantos" target="_blank" rel="noopener noreferrer" className="gradient-text hover:scale-105 transition-transform text-xl font-bold text-slate-600 rounded-sm">Future Conect</a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            {navItems.map(item => <Button key={item.id} variant="ghost" onClick={() => scrollToSection(item.id)} className="text-foreground hover:text-primary hover:bg-primary/10 transition-all">
                {item.label}
              </Button>)}
          </div>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="h-6 w-6 text-primary" /> : <Menu className="h-6 w-6 text-primary" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && <div className="md:hidden py-4 border-t border-primary/20 animate-fadeIn">
            <div className="flex flex-col gap-2">
              {navItems.map(item => <Button key={item.id} variant="ghost" onClick={() => scrollToSection(item.id)} className="text-foreground hover:text-primary hover:bg-primary/10 justify-start">
                  {item.label}
                </Button>)}
            </div>
          </div>}
      </div>
    </nav>;
};
export default Navbar;