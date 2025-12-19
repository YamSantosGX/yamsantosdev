import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      label: "Telefone",
      value: "(87) 99108-2325",
      href: "tel:+5587991082325"
    },
    {
      icon: Mail,
      label: "Email",
      value: "yamsantosdev@gmail.com",
      href: "mailto:yamsantosdev@gmail.com"
    },
    {
      icon: MapPin,
      label: "Localização",
      value: "Arcoverde, PE - Brasil",
      href: "https://maps.google.com/?q=Arcoverde,PE"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16 animate-fadeIn">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Entre em <span className="gradient-text">Contato</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Estou disponível para novos projetos e oportunidades
            </p>
          </div>

          <div className="space-y-6">
            {/* Contact Information */}
            <Card className="border-primary/30 bg-card/50 backdrop-blur">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">Informações de Contato</CardTitle>
                <CardDescription>
                  Entre em contato para discutir projetos ou oportunidades
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 p-4 rounded-lg border border-primary/20 hover:border-[#00BFFF] hover:shadow-[0_0_15px_rgba(0,191,255,0.2)] transition-all duration-300 group"
                  >
                    <div className="p-3 bg-primary/10 rounded-lg border-glow group-hover:scale-110 group-hover:bg-[#00BFFF]/20 transition-all duration-300">
                      <info.icon className="h-6 w-6 text-primary group-hover:text-[#00BFFF] transition-colors duration-300" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{info.label}</p>
                      <p className="text-foreground font-medium">{info.value}</p>
                    </div>
                  </a>
                ))}
              </CardContent>
            </Card>

            {/* WhatsApp CTA */}
            <Card className="border-primary/30 bg-card/50 backdrop-blur">
              <CardHeader>
                <CardTitle className="text-xl text-foreground">Fale Comigo Diretamente</CardTitle>
                <CardDescription>
                  Clique no botão abaixo para iniciar uma conversa no WhatsApp
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  asChild
                  size="lg"
                  className="w-full bg-[#25D366] hover:bg-[#20BD5A] text-white hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-[0_0_20px_rgba(37,211,102,0.4)]"
                >
                  <a 
                    href="https://wa.me/message/ZLR7P45MJDUFB1" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Conversar no WhatsApp
                  </a>
                </Button>
                <div className="flex items-center justify-center gap-2 mt-4">
                  <div className="w-3 h-3 bg-[#25D366] rounded-full animate-pulse" />
                  <span className="text-sm text-muted-foreground">Disponível para novos projetos</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
