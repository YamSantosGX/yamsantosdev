import profileImage from "@/assets/profile.jpg";

const About = () => {
  return (
    <section id="about" className="py-20 px-4 min-h-screen flex items-center animate-slideUp">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
          Sobre Mim
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="flex justify-center md:justify-end md:-ml-8 animate-fadeIn">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl" />
              <img 
                src={profileImage} 
                alt="Yam Gabriel Santos Antunes" 
                className="relative w-64 h-64 rounded-full shadow-2xl border-2 border-primary/30 hover:scale-105 transition-transform duration-300 object-cover"
              />
            </div>
          </div>

          {/* Journey Text */}
          <div className="space-y-6 animate-slideIn">
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p>
                Sempre gostei de tecnologia e jogos, mas aos 16 é que fui conhecer a programação pela simples ideia <span className="text-primary font-semibold">"e se eu criar um jogo?"</span> Então fui pesquisar mais sobre a grande área da programação e desde então não sai mais dela, hoje a meta é me tornar um grande <span className="text-primary font-semibold">Engenheiro de Software</span>.
              </p>
              
              <p>
                Sou movido por desafios e pela busca constante de soluções criativas. Encaro problemas como oportunidades de inovação e tenho facilidade para entender rapidamente cenários complexos, filtrando o que importa para agir com objetividade.
              </p>
              
              <p>
                Tenho perfil proativo, empático e com boa escuta ativa, características fundamentais para lidar com atendimento humanizado, resolução de conflitos e suporte em momentos de pressão. Gosto de questionar padrões, propor melhorias e enxergar além do óbvio.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 pt-4">
              <span className="px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-primary text-sm font-medium">
                Inovação
              </span>
              <span className="px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-primary text-sm font-medium">
                Proatividade
              </span>
              <span className="px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-primary text-sm font-medium">
                Empatia
              </span>
              <span className="px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-primary text-sm font-medium">
                Criatividade
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
