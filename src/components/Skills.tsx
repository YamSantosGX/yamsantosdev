import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Database, Wrench, Brain, Server, Palette } from "lucide-react";
import {
  SiPython,
  SiReact,
  SiNodedotjs,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiMongodb,
  SiGit,
  SiGithub,
  SiCanva,
  SiOpenai,
} from "react-icons/si";
import { FaDatabase, FaFileExcel, FaChartBar, FaRobot, FaMagic, FaMobileAlt, FaCode, FaAws } from "react-icons/fa";

const Skills = () => {
  const skillCategories = [
    {
      title: "Linguagens de Programação",
      icon: Code,
      skills: [
        { name: "Python", Icon: SiPython, color: "#3776AB" },
        { name: "React", Icon: SiReact, color: "#61DAFB" },
        { name: "Node.js", Icon: SiNodedotjs, color: "#339933" },
        { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
        { name: "HTML", Icon: SiHtml5, color: "#E34F26" },
        { name: "CSS", Icon: SiCss, color: "#1572B6" },
      ],
    },
    {
      title: "Banco de Dados",
      icon: Database,
      skills: [
        { name: "SQL", Icon: FaDatabase, color: "#00BFFF" },
        { name: "MongoDB", Icon: SiMongodb, color: "#47A248" },
        { name: "AWS", Icon: FaAws, color: "#FF9900" },
      ],
    },
    {
      title: "Ferramentas & Tecnologias",
      icon: Wrench,
      skills: [
        { name: "Git", Icon: SiGit, color: "#F05032" },
        { name: "GitHub", Icon: SiGithub, color: "#ffffff" },
        { name: "Power BI", Icon: FaChartBar, color: "#F2C811" },
        { name: "Pacote Office", Icon: FaFileExcel, color: "#217346" },
      ],
    },
    {
      title: "Design",
      icon: Palette,
      skills: [
        { name: "UI/UX Design", Icon: FaMagic, color: "#FF61F6" },
        { name: "Canva", Icon: SiCanva, color: "#00C4CC" },
        { name: "Design Responsivo", Icon: FaMobileAlt, color: "#00BFFF" },
      ],
    },
    {
      title: "Competências Técnicas",
      icon: Server,
      skills: [
        { name: "Desenvolvimento Web", Icon: FaCode, color: "#00BFFF" },
        { name: "Bancos de Dados", Icon: FaDatabase, color: "#4DB33D" },
        { name: "Controle de Versão", Icon: SiGit, color: "#F05032" },
      ],
    },
    {
      title: "Inteligência Artificial",
      icon: Brain,
      skills: [
        { name: "IA Generativa", Icon: SiOpenai, color: "#10A37F" },
        { name: "Prompt Engineering", Icon: Brain, color: "#A855F7" },
        { name: "Automação", Icon: FaRobot, color: "#00BFFF" },
      ],
    },
  ];

  const softSkills = [
    "Liderança de Equipe",
    "Trabalho em Equipe",
    "Resolução de Problemas",
    "Comunicação Efetiva",
    "Gestão de Tempo",
    "Adaptabilidade",
    "Pensamento Crítico",
    "Aprendizado Contínuo",
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
                className="border-primary/30 hover:border-primary/60 hover:scale-105 transition-all duration-300 bg-card/50 backdrop-blur animate-fadeIn"
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
                  <div className="grid grid-cols-3 gap-4">
                    {category.skills.map((skill, skillIndex) => {
                      const SkillIcon = skill.Icon;
                      return (
                        <div
                          key={skillIndex}
                          className="flex flex-col items-center justify-center gap-2 p-3 rounded-lg bg-secondary/40 border border-primary/20 hover:border-primary/60 hover:scale-110 transition-all duration-300"
                        >
                          <SkillIcon
                            className="h-8 w-8 transition-transform"
                            style={{ color: skill.color }}
                          />
                          <span className="text-xs text-center text-foreground/90 font-medium leading-tight">
                            {skill.name}
                          </span>
                        </div>
                      );
                    })}
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
              {softSkills.map((skill, index) => (
                <div
                  key={index}
                  className="p-4 bg-card/50 border border-primary/30 rounded-lg text-center hover:border-primary/60 hover:scale-105 transition-all duration-300 animate-fadeIn backdrop-blur"
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
