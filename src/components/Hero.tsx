import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Database, Globe } from "lucide-react";

const Hero = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-surface-darker via-surface-dark to-surface-darker relative overflow-hidden"
    >
      {/* Tech grid background */}
      <div className="absolute inset-0 tech-grid opacity-30"></div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 animate-float">
        <Code className="h-8 w-8 text-accent-red opacity-60" />
      </div>
      <div className="absolute top-40 right-20 animate-float" style={{ animationDelay: "1s" }}>
        <Database className="h-6 w-6 text-accent-red opacity-40" />
      </div>
      <div className="absolute bottom-40 left-20 animate-float" style={{ animationDelay: "2s" }}>
        <Globe className="h-10 w-10 text-accent-red opacity-50" />
      </div>

      <div className="container mx-auto px-6 text-center text-white relative z-10">
        <div className="max-w-4xl mx-auto animate-slide-up">
          {/* Logo grande */}
          <div className="mb-8 flex justify-center">
            <img 
              src="/lovable-uploads/83511671-7f75-4344-a5d9-e236060155d8.png" 
              alt="TADS - Tecnologia Avançada de Desenvolvimento de Sistemas" 
              className="h-24 md:h-32 w-auto animate-float"
            />
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Transformamos
            <span className="text-accent-red block">Ideias em Realidade</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Desenvolvimento de sistemas avançados com tecnologia de ponta. 
            Soluções personalizadas para impulsionar seu negócio.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 animate-glow"
            >
              Iniciar Projeto
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-surface-darker"
            >
              Ver Portfólio
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-accent-red mb-2">100+</div>
            <div className="text-gray-300">Projetos Entregues</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent-red mb-2">5+</div>
            <div className="text-gray-300">Anos de Experiência</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent-red mb-2">24/7</div>
            <div className="text-gray-300">Suporte Técnico</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;