import { Target, TrendingUp, Rocket } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const CareerTimeline = () => {
  const goals = [
    {
      period: "2025",
      title: "Consolidação Profissional",
      icon: Target,
      objectives: [
        "Conquistar posição full-time em empresa de tecnologia",
        "Completar 5 projetos freelance de grande porte",
        "Certificação em AWS Cloud Practitioner",
        "Dominar TypeScript avançado"
      ]
    },
    {
      period: "2026-2027",
      title: "Crescimento e Especialização",
      icon: TrendingUp,
      objectives: [
        "Especialização em arquitetura de software",
        "Liderar projetos de equipe",
        "Contribuir para projetos open source",
        "Desenvolver produto SaaS próprio"
      ]
    },
    {
      period: "2028-2029",
      title: "Liderança Técnica",
      icon: Rocket,
      objectives: [
        "Assumir cargo de liderança técnica",
        "Mentoria para desenvolvedores júnior",
        "Palestras e workshops em eventos de tecnologia",
        "Expansão de consultoria em desenvolvimento"
      ]
    }
  ];

  const futureProjects = [
    "Plataforma de gestão de projetos com IA",
    "Aplicativo mobile para produtividade",
    "Dashboard analytics em tempo real",
    "Sistema de automação para pequenas empresas"
  ];

  return (
    <section id="career-timeline" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Career Goals */}
          <div className="mb-16">
            <div className="text-center mb-12 animate-fadeIn">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
                Objetivos de <span className="gradient-text">Carreira</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Minha visão e plano de desenvolvimento profissional
              </p>
            </div>

            <div className="space-y-8">
              {goals.map((goal, index) => (
                <Card
                  key={index}
                  className="border-primary/30 hover:border-primary/60 transition-all duration-300 bg-card/50 backdrop-blur animate-slideIn"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="p-4 bg-primary/10 rounded-lg border-glow">
                        <goal.icon className="h-8 w-8 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm text-primary font-semibold mb-1">{goal.period}</div>
                        <CardTitle className="text-2xl text-foreground">{goal.title}</CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="grid md:grid-cols-2 gap-3">
                      {goal.objectives.map((objective, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span className="text-foreground/80">{objective}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Future Projects Pipeline */}
          <div>
            <div className="text-center mb-12 animate-fadeIn">
              <h3 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Pipeline de <span className="gradient-text">Projetos Futuros</span>
              </h3>
              <p className="text-lg text-muted-foreground">
                Ideias e projetos em desenvolvimento
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {futureProjects.map((project, index) => (
                <Card
                  key={index}
                  className="border-primary/30 hover:border-primary/60 transition-all duration-300 bg-card/50 backdrop-blur group animate-fadeIn"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center border-glow group-hover:scale-110 transition-transform">
                        <span className="text-primary font-bold text-lg">{index + 1}</span>
                      </div>
                      <p className="text-foreground font-medium">{project}</p>
                    </div>
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

export default CareerTimeline;
