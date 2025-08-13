import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Monitor, 
  Smartphone, 
  Cloud, 
  Database, 
  Shield, 
  Zap,
  ArrowRight
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Monitor,
      title: "Desenvolvimento Web",
      description: "Aplicações web modernas e responsivas com as melhores tecnologias do mercado.",
      features: ["React/Vue/Angular", "APIs RESTful", "Interface Responsiva", "SEO Otimizado"],
      color: "from-blue-500 to-purple-600"
    },
    {
      icon: Smartphone,
      title: "Aplicações Mobile",
      description: "Apps nativos e híbridos para iOS e Android com experiência excepcional.",
      features: ["React Native", "Flutter", "Native iOS/Android", "Cross-platform"],
      color: "from-green-500 to-teal-600"
    },
    {
      icon: Cloud,
      title: "Soluções Cloud",
      description: "Infraestrutura escalável e segura na nuvem para máxima performance.",
      features: ["AWS/Azure/GCP", "Microserviços", "DevOps", "CI/CD"],
      color: "from-orange-500 to-red-600"
    },
    {
      icon: Database,
      title: "Gestão de Dados",
      description: "Sistemas de banco de dados robustos e analytics para insights valiosos.",
      features: ["PostgreSQL/MongoDB", "Data Analytics", "Business Intelligence", "API Design"],
      color: "from-purple-500 to-pink-600"
    },
    {
      icon: Shield,
      title: "Segurança Digital",
      description: "Proteção completa para seus sistemas e dados sensíveis.",
      features: ["Criptografia", "Autenticação", "Auditoria", "Compliance"],
      color: "from-red-500 to-orange-600"
    },
    {
      icon: Zap,
      title: "Automação",
      description: "Processos automatizados para aumentar eficiência e reduzir custos.",
      features: ["RPA", "Workflows", "Integração de Sistemas", "APIs"],
      color: "from-yellow-500 to-orange-600"
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Nossos <span className="text-accent-red">Serviços</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Oferecemos soluções completas em tecnologia para transformar 
              sua visão em realidade digital
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <Card 
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg"
              >
                <CardHeader className="pb-4">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl group-hover:text-accent-red transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <div className="w-1.5 h-1.5 bg-accent-red rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    variant="ghost" 
                    className="group-hover:text-accent-red transition-colors p-0 h-auto"
                  >
                    Saiba mais 
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-surface-darker to-surface-dark rounded-2xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Pronto para transformar sua ideia?
            </h3>
            <p className="text-xl mb-8 text-gray-300">
              Entre em contato e vamos discutir como podemos ajudar seu projeto
            </p>
            <Button size="lg" className="animate-glow">
              Falar com Especialista
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;