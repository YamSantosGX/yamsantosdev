import { Calendar, Briefcase, Award } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Experience = () => {
  const experiences = [
    {
      title: "Analista de Dados - Bolsista",
      company: "FACEPE",
      period: "Out/24 - Jan 25",
      description: "Desenvolvimento de aplicativos e sites para projetos de pesquisa",
      achievements: [
        "Desenvolvi juntamente a outros bolsistas um protótipo de aplicativo para Android e um site",
        "Utilizamos o Canva e sites de abordagem para desenvolvimento",
        "Fui líder de equipe e orientei membros inexperientes da equipe a cumprir com o prazo do projeto",
        "Apoiei minha equipe de 10 pessoas para melhor desenvolvimento de skills de cada"
      ]
    },
    {
      title: "Designer UI",
      company: "Freelance",
      period: "2023 - Presente",
      description: "Criação de interfaces e design gráfico",
      achievements: [
        "Desenvolvi inúmeros projetos de design gráfico e web",
        "Criação de identidades visuais completas para clientes",
        "Design responsivo e focado em experiência do usuário",
        "Portfolio diversificado com projetos em diversos segmentos"
      ]
    },
    {
      title: "Freelance Developer",
      company: "Autônomo",
      period: "2024 - Presente",
      description: "Desenvolvimento de soluções web personalizadas",
      achievements: [
        "Website Creation - Desenvolvimento de sites institucionais e landing pages",
        "Dashboard - Power BI - Criação de dashboards interativos para análise de dados",
        "Discord Bots with Python - Automação e bots personalizados para servidores",
        "Integração com APIs e serviços externos"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fadeIn">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Experiência <span className="gradient-text">Profissional</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Minha jornada no desenvolvimento de software e design
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/30 hidden md:block" />

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="relative animate-slideIn"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-6 top-8 w-5 h-5 rounded-full bg-primary border-4 border-background hidden md:block border-glow" />

                  <Card className="ml-0 md:ml-20 border-primary/30 hover:border-primary/60 transition-all duration-300 bg-card/50 backdrop-blur">
                    <CardHeader>
                      <div className="flex items-start justify-between gap-4 flex-wrap">
                        <div className="flex-1">
                          <CardTitle className="text-2xl mb-2 text-foreground flex items-center gap-2">
                            <Briefcase className="h-6 w-6 text-primary" />
                            {exp.title}
                          </CardTitle>
                          <CardDescription className="text-lg text-primary font-semibold">
                            {exp.company}
                          </CardDescription>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          <span className="text-sm">{exp.period}</span>
                        </div>
                      </div>
                      <p className="text-muted-foreground mt-2">{exp.description}</p>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <Award className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-foreground/80">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
