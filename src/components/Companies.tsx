import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import cciasLogo from "@/assets/logo_ccia.jpg";
import securexLogo from "@/assets/securex_logo.png";

const Companies = () => {
  const companies = [
    {
      name: "CCIA",
      fullName: "Centro de Compra Interativo e Assistencial",
      description: "Empresa de compras digitais e interação ao público do Discord em que ajudo a gerenciar",
      logo: cciasLogo,
      discordLink: "https://discord.gg/SzmttvfDmw",
    },
    {
      name: "SecureX Cybersecurity",
      fullName: "Segurança de Classe Mundial",
      description: "Plataforma profissional de cybersegurança para análise e proteção de aplicações web.",
      logo: securexLogo,
      website: "https://secure-x.online/",
      discordLink: "https://discord.gg/X36RjdnReJ",
    },
  ];

  return (
    <section id="companies" className="py-20 px-4 min-h-screen flex items-center animate-slideUp">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
          Empresas
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {companies.map((company, index) => (
            <Card 
              key={company.name}
              className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all duration-300 hover:scale-105 animate-fadeIn"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-full h-48 flex items-center justify-center overflow-hidden rounded-lg bg-background/50">
                    <img
                      src={company.logo}
                      alt={`${company.name} logo`}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-primary">{company.name}</h3>
                    <p className="text-lg font-semibold text-foreground">{company.fullName}</p>
                    <p className="text-muted-foreground">{company.description}</p>
                  </div>
                  {company.website && (
                    <Button
                      asChild
                      className="w-full"
                    >
                      <a href={company.website} target="_blank" rel="noopener noreferrer">
                        Visitar Plataforma
                      </a>
                    </Button>
                  )}
                  {company.discordLink && (
                    <Button
                      asChild
                      variant="secondary"
                      className="w-full"
                    >
                      <a href={company.discordLink} target="_blank" rel="noopener noreferrer">
                        Junte-se ao nosso servidor
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Companies;
