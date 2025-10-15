import { GraduationCap, Award, Globe } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Education = () => {
  const education = [
    {
      institution: "Universidade Unicesumar",
      degree: "Engenharia de Software",
      period: "2025 - 2029",
      status: "Em andamento",
      description: "Formação completa em desenvolvimento de software, arquitetura de sistemas e metodologias ágeis"
    },
    {
      institution: "EREM Senador Vitorino Freire",
      degree: "Ensino Médio",
      period: "2023 - 2024",
      status: "Concluído",
      description: "Ensino médio completo com foco em exatas e tecnologia"
    }
  ];

  const languages = [
    { name: "Português", level: "Nativo", percentage: 98 },
    { name: "Inglês", level: "Intermediário", percentage: 50 },
    { name: "Espanhol", level: "Intermediário", percentage: 70 }
  ];

  return (
    <section id="education" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Education Section */}
          <div className="mb-16">
            <div className="text-center mb-12 animate-fadeIn">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
                Formação <span className="gradient-text">Acadêmica</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Minha trajetória educacional e certificações
              </p>
            </div>

            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card
                  key={index}
                  className="border-primary/30 hover:border-primary/60 transition-all duration-300 bg-card/50 backdrop-blur animate-slideIn"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg border-glow">
                        <GraduationCap className="h-8 w-8 text-primary" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-2xl mb-2 text-foreground">
                          {edu.degree}
                        </CardTitle>
                        <p className="text-lg text-primary font-semibold mb-1">
                          {edu.institution}
                        </p>
                        <div className="flex items-center gap-4 flex-wrap">
                          <span className="text-muted-foreground">{edu.period}</span>
                          <span className="px-3 py-1 bg-primary/20 text-primary text-sm rounded-full">
                            {edu.status}
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground/80">{edu.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Languages Section */}
          <div>
            <div className="text-center mb-12 animate-fadeIn">
              <h3 className="text-3xl md:text-4xl font-bold mb-4 text-foreground flex items-center justify-center gap-3">
                <Globe className="h-8 w-8 text-primary" />
                Idiomas
              </h3>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {languages.map((lang, index) => (
                <Card
                  key={index}
                  className="border-primary/30 hover:border-primary/60 transition-all duration-300 bg-card/50 backdrop-blur text-center animate-fadeIn"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <CardTitle className="text-xl text-foreground">{lang.name}</CardTitle>
                    <p className="text-primary font-semibold">{lang.level}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="relative h-2 bg-secondary rounded-full overflow-hidden">
                      <div
                        className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary to-accent transition-all duration-1000 ease-out"
                        style={{ width: `${lang.percentage}%` }}
                      />
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">{lang.percentage}%</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
