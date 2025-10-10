import { Github, Linkedin, Instagram, Youtube, MessageSquare, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Linkedin, url: "https://www.linkedin.com/in/yam-gabriel-santos-antunes-05579b312/", label: "LinkedIn" },
    { icon: MessageSquare, url: "https://discord.gg/BNRCHU2PvZ", label: "Discord" },
    { icon: Instagram, url: "https://www.instagram.com/yamsantos.dev", label: "Instagram" },
    { icon: Youtube, url: "https://www.youtube.com/@yamtechcode", label: "YouTube" },
    { icon: Github, url: "https://github.com/YamSantosGX", label: "GitHub" },
  ];

  return (
    <footer className="bg-card/50 border-t border-primary/20 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <h3 className="text-2xl font-bold gradient-text mb-4">Yam Santos</h3>
              <p className="text-muted-foreground">
                Desenvolvedor Web especializado em criar experiências digitais inovadoras.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-4">Links Rápidos</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#experience" className="text-muted-foreground hover:text-primary transition-colors">
                    Experiência
                  </a>
                </li>
                <li>
                  <a href="#skills" className="text-muted-foreground hover:text-primary transition-colors">
                    Habilidades
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
                    Contato
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-4">Contato</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>yamsantosdev@gmail.com</li>
                <li>(87) 99108-2325</li>
                <li>Arcoverde, PE - Brasil</li>
              </ul>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4 mb-8">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-card border border-primary/30 rounded-lg hover:border-primary hover:bg-primary/10 transition-all duration-300 group"
                aria-label={social.label}
              >
                <social.icon className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center pt-8 border-t border-primary/20">
            <p className="text-muted-foreground flex items-center justify-center gap-2">
              © {currentYear} Yam Gabriel Santos Antunes. Feito com{" "}
              <Heart className="h-4 w-4 text-primary fill-primary animate-pulse" /> e código.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
