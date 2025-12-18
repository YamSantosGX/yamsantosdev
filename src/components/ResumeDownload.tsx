import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, FileText, FileType } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ResumeDownload = () => {
  const { toast } = useToast();

  const handleDownload = (format: string) => {
    toast({
      title: "Download iniciado",
      description: `Baixando currículo em formato ${format}...`,
    });
    
    // In a real application, this would trigger an actual download
    // For now, we'll just show a toast notification
  };

  const downloadOptions = [
    {
      format: "PDF",
      icon: FileText,
      description: "Formato universal, ideal para impressão",
      color: "text-red-500"
    },
    {
      format: "Word",
      icon: FileType,
      description: "Editável, formato Microsoft Word",
      color: "text-blue-500"
    },
    {
      format: "Texto",
      icon: FileText,
      description: "Formato simples de texto",
      color: "text-green-500"
    }
  ];

  return (
    <section id="resume-download" className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fadeIn">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Download do <span className="gradient-text">Currículo</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Baixe meu currículo completo no formato de sua preferência
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {downloadOptions.map((option, index) => (
              <Card
                key={index}
                className="border-primary/30 hover:border-[#00BFFF]/60 hover:scale-105 transition-all duration-300 bg-card/50 backdrop-blur text-center group animate-fadeIn"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="mx-auto p-4 bg-primary/10 rounded-full w-fit mb-4 border-glow group-hover:scale-110 transition-transform">
                    <option.icon className={`h-12 w-12 ${option.color}`} />
                  </div>
                  <CardTitle className="text-2xl text-foreground">
                    {option.format}
                  </CardTitle>
                  <CardDescription className="text-sm">
                    {option.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button
                    onClick={() => handleDownload(option.format)}
                    className="w-full bg-primary hover:bg-[#00BFFF] hover:text-white transition-all duration-300"
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Baixar {option.format}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Quick View Card */}
          <Card className="border-primary/30 bg-card/50 backdrop-blur">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground text-center">Visualização Rápida</CardTitle>
              <CardDescription className="text-center">
                Principais destaques do currículo
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="font-semibold text-primary text-lg">Experiência</h4>
                  <ul className="space-y-2 text-foreground/80">
                    <li>• Analista de Dados - FACEPE</li>
                    <li>• Designer UI - Freelance</li>
                    <li>• Desenvolvedor Freelance</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="font-semibold text-primary text-lg">Principais Habilidades</h4>
                  <ul className="space-y-2 text-foreground/80">
                    <li>• Python, React, Node.js</li>
                    <li>• UI/UX Design</li>
                    <li>• Banco de Dados (SQL, MongoDB)</li>
                    <li>• Inteligência Artificial</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ResumeDownload;
