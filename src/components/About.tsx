import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, Lightbulb, Shield } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Foco em Resultados",
      description: "Desenvolvemos soluções que geram valor real para seu negócio."
    },
    {
      icon: Lightbulb,
      title: "Inovação Constante",
      description: "Utilizamos as tecnologias mais avançadas do mercado."
    },
    {
      icon: Users,
      title: "Parceria Estratégica",
      description: "Trabalhamos como extensão da sua equipe."
    },
    {
      icon: Shield,
      title: "Segurança Total",
      description: "Máxima proteção para seus dados e sistemas."
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Sobre a <span className="text-accent-red">TADS</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Somos especialistas em desenvolvimento de sistemas avançados, 
              oferecendo soluções tecnológicas inovadoras para empresas que buscam 
              excelência e crescimento sustentável.
            </p>
          </div>

          {/* Main content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h3 className="text-2xl font-bold mb-6">Nossa Missão</h3>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Transformar desafios complexos em soluções simples e eficientes. 
                Acreditamos que a tecnologia deve ser uma ferramenta poderosa 
                para impulsionar o sucesso dos nossos clientes.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Com uma equipe altamente qualificada e metodologias ágeis, 
                entregamos sistemas robustos, escaláveis e seguros que superam 
                as expectativas do mercado.
              </p>
            </div>
            
            <div className="relative">
              <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <h4 className="text-xl font-bold mb-4">Tecnologias Utilizadas</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-muted rounded-lg">
                      <div className="font-semibold">Frontend</div>
                      <div className="text-sm text-muted-foreground">React, Vue, Angular</div>
                    </div>
                    <div className="text-center p-4 bg-muted rounded-lg">
                      <div className="font-semibold">Backend</div>
                      <div className="text-sm text-muted-foreground">Node.js, Python, .NET</div>
                    </div>
                    <div className="text-center p-4 bg-muted rounded-lg">
                      <div className="font-semibold">Mobile</div>
                      <div className="text-sm text-muted-foreground">React Native, Flutter</div>
                    </div>
                    <div className="text-center p-4 bg-muted rounded-lg">
                      <div className="font-semibold">Cloud</div>
                      <div className="text-sm text-muted-foreground">AWS, Azure, GCP</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Values */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card 
                key={index} 
                className="hover:shadow-lg transition-all duration-300 hover:-translate-y-2 group"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-accent-red/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent-red/20 transition-colors">
                    <value.icon className="h-8 w-8 text-accent-red" />
                  </div>
                  <h4 className="text-lg font-bold mb-3">{value.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;