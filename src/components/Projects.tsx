import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Gestão de Clínica Estética",
      description: "Sistema completo de gestão para clínicas estéticas com dashboard interativo",
      url: "https://gestao-de-clinica-estetica.base44.app/Dashboard",
      tags: ["React", "Dashboard", "Gestão"]
    },
    {
      title: "Meus Designs",
      description: "Portfólio de designs e projetos visuais criados",
      url: "https://drive.google.com/drive/u/1/folders/1ylYGd0BXnShOwyHXJIa2M-oEZwXKlV8E",
      tags: ["UI/UX", "Design", "Portfólio"]
    },
    {
      title: "Starbucks Base",
      description: "Clone da interface do Starbucks com design moderno e responsivo",
      url: "https://starbucks-base-smoky.vercel.app",
      tags: ["React", "CSS", "UI/UX"]
    },
    {
      title: "Projeto Dragon Ball",
      description: "Aplicação temática de Dragon Ball com design interativo",
      url: "https://projeto-dragon-ball-cd.vercel.app",
      tags: ["React", "Animation", "Design"]
    },
    {
      title: "Projeto com API",
      description: "Integração de APIs externas para consumo de dados",
      url: "https://projetocomapi.vercel.app",
      tags: ["API", "React", "Integration"]
    },
    {
      title: "Supernova Chat",
      description: "Aplicação de chat em tempo real com interface moderna",
      url: "https://supernovachat.vercel.app",
      tags: ["Real-time", "Chat", "WebSocket"]
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-card/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fadeIn">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Projetos
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Alguns dos projetos que desenvolvi, demonstrando diferentes habilidades e tecnologias
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 animate-slideIn">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl hover:border-primary/50 transition-all duration-300 bg-card/50 backdrop-blur"
            >
              <CardHeader>
                <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-base">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-3 py-1 bg-primary/10 border border-primary/30 rounded-full text-primary text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Button 
                  variant="outline" 
                  className="w-full border-primary/50 hover:border-primary hover:bg-primary/10"
                  onClick={() => window.open(project.url, "_blank")}
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Ver Projeto
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center animate-fadeIn">
          <Button 
            size="lg"
            variant="outline"
            className="border-primary/50 hover:border-primary hover:bg-primary/10"
            onClick={() => window.open("https://github.com/YamSantosGX", "_blank")}
          >
            <Github className="mr-2 h-5 w-5" />
            Ver Mais no GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
