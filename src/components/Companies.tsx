import { Card, CardContent } from "@/components/ui/card";
import cciasLogo from "@/assets/logo_ccia.jpg";
import conexcoreLogo from "@/assets/conexcore_cover.jpeg";

const Companies = () => {
  const companies = [
    {
      name: "CCIA",
      fullName: "Centro de Compra Interativo e Assistencial",
      description: "Empresa de compras digitais e interação ao público do Discord em que ajudo a gerenciar",
      logo: cciasLogo,
    },
    {
      name: "ConexCore",
      fullName: "Conectando ao Futuro Digital",
      description: "Empresa de desenvolvedores e design em ascensão do qual sou sócio",
      logo: conexcoreLogo,
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
