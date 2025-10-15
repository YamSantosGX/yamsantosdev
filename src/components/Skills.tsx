import { Code, Database, Wrench, Brain, Server, Palette } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      title: "Linguagens de Programação",
      icon: Code,
      skills: [
        { name: "Python", level: 65 },
        { name: "React", level: 60 },
        { name: "Node.js", level: 80 },
        { name: "JavaScript", level: 90 },
        { name: "HTML & CSS", level: 80 },
      ]
    },
    {
      title: "Banco de Dados",
      icon: Database,
      skills: [
        { name: "SQL", level: 75 },
        { name: "MongoDB", level: 70 },
        { name: "AWS", level: 65 },
      ]
    },
    {
      title: "Ferramentas & Tecnologias",
      icon: Wrench,
      skills: [
        { name: "Git/GitHub", level: 85 },
        { name: "Power BI", level: 75 },
        { name: "Pacote Office", level: 80 },
      ]
    },
    {
      title: "Design",
      icon: Palette,
      skills: [
        { name: "UI/UX Design", level: 85 },
        { name: "Canva", level: 90 },
        { name: "Design Responsivo", level: 80 },
      ]
    },
    {
      title: "Competências Técnicas",
      icon: Server,
      skills: [
        { name: "Desenvolvimento Web", level: 90 },
        { name: "Bancos de Dados", level: 75 },
        { name: "Controle de Versão", level: 85 },
      ]
    },
    {
      title: "Inteligência Artificial",
      icon: Brain,
      skills: [
        { name: "IA Generativa", level: 80 },
        { name: "Prompt Engineering", level: 85 },
        { name: "Automação", level: 75 },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fadeIn">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Competências & <span className="gradient-text">Habilidades</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Minhas principais áreas de expertise técnica
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <Card
                key={index}
                className="border-primary/30 hover:border-primary/60 transition-all duration-300 bg-card/50 backdrop-blur animate-fadeIn"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-foreground">
                    <div className="p-2 bg-primary/10 rounded-lg border-glow">
                      <category.icon className="h-6 w-6 text-primary" />
                    </div>
                    <span className="text-lg">{category.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex}>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium text-foreground/90">{skill.name}</span>
                          <span className="text-xs text-primary font-semibold">{skill.level}%</span>
                        </div>
                        <div className="relative h-2 bg-secondary rounded-full overflow-hidden">
                          <div
                            className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary to-accent transition-all duration-1000 ease-out border-glow"
                            style={{
                              width: `${skill.level}%`,
                              animationDelay: `${(index * 0.1) + (skillIndex * 0.05)}s`
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Soft Skills Section */}
          <div className="mt-16">
            <h3 className="text-3xl font-bold text-center mb-8 text-foreground">
              Habilidades <span className="gradient-text">Interpessoais</span>
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {["Liderança de Equipe", "Trabalho em Equipe", "Resolução de Problemas", "Comunicação Efetiva", 
                "Gestão de Tempo", "Adaptabilidade", "Pensamento Crítico", "Aprendizado Contínuo"].map((skill, index) => (
                <div
                  key={index}
                  className="p-4 bg-card/50 border border-primary/30 rounded-lg text-center hover:border-primary/60 transition-all duration-300 animate-fadeIn backdrop-blur"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <p className="text-sm font-medium text-foreground/90">{skill}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
