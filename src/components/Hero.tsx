import { Button } from "@/components/ui/button";
import { Github, Linkedin, Instagram, Youtube, MessageSquare, Download, ArrowDown } from "lucide-react";
const Hero = () => {
  const socialLinks = [{
    icon: Linkedin,
    url: "https://www.linkedin.com/in/yam-gabriel-santos-antunes-05579b312/",
    label: "LinkedIn"
  }, {
    icon: MessageSquare,
    url: "https://discord.gg/BNRCHU2PvZ",
    label: "Discord"
  }, {
    icon: Instagram,
    url: "https://www.instagram.com/yamsantos.dev",
    label: "Instagram"
  }, {
    icon: Youtube,
    url: "https://www.youtube.com/@yamtechcode",
    label: "YouTube"
  }, {
    icon: Github,
    url: "https://github.com/YamSantosGX",
    label: "GitHub"
  }];
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth"
    });
  };
  return <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Animated background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card/30" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{
      animationDelay: "1s"
    }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fadeIn">
          {/* Name and Title */}
          <h1 className="text-5xl md:text-7xl mb-4 text-foreground font-semibold animate-bounce">
            Yam Gabriel <span className="gradient-text">Santos Antunes</span>
          </h1>
          <p className="text-2xl md:text-3xl text-primary font-semibold mb-6 text-glow">Desenvolvedor Full Stack | Designer</p>

          {/* Professional Summary */}
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 leading-relaxed text-muted-foreground">Desenvolvedor Full-Stack e Analista de Dados | sempre em busca de oportunidades para crescimento profissional e desenvolvimento de soluções inovadoras. Apaixonado por resolver problemas e conhecer mais tecnologias.</p>

          {/* Social Links */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {socialLinks.map(social => (
              <Button 
                key={social.label} 
                variant="outline" 
                size="lg" 
                className="border-primary/50 hover:border-primary hover:bg-primary/10 hover:scale-105 hover:text-primary transition-all duration-300" 
                onClick={() => window.open(social.url, "_blank")}
              >
                <social.icon className="mr-2 h-5 w-5" />
                {social.label}
              </Button>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button size="lg" className="bg-primary hover:bg-primary/90 hover:scale-105 text-primary-foreground shadow-lg border-glow transition-all duration-300" onClick={() => scrollToSection("contact")}>
              Entre em Contato
            </Button>
            <Button size="lg" variant="outline" className="border-primary/50 hover:border-primary hover:bg-primary/10 hover:scale-105 transition-all duration-300" onClick={() => scrollToSection("resume-download")}>
              <Download className="mr-2 h-5 w-5" />
              Baixar Currículo
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <ArrowDown className="mx-auto h-8 w-8 text-primary" />
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;