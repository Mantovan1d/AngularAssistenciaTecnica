import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Settings, Shield, Wrench, Thermometer } from "lucide-react";

const services = [
  {
    icon: Wrench,
    title: "Manutenção Corretiva",
    description: "Correção de falhas e danos em equipamentos com rapidez e precisão."
  },
  {
    icon: Shield,
    title: "Manutenção Preventiva", 
    description: "Evite paradas não programadas com revisões regulares e seguras."
  },
  {
    icon: Settings,
    title: "Montagem",
    description: "Instalação completa de fornos e sistemas de panificação industriais."
  },
  {
    icon: Thermometer,
    title: "Ajuste de Assamento",
    description: "Precisão no controle térmico para melhor resultado do seu pão."
  }
];

export const ServicesGrid = () => {
  return (
    <section className="py-16 px-4 bg-gradient-subtle">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4 animate-slide-up">
            O que fazemos?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Especialistas em manutenção e instalação de equipamentos industriais de panificação
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={service.title}
                className="group hover:shadow-card transition-all duration-300 hover:-translate-y-2 animate-slide-up border-border/50"
                style={{ animationDelay: `${0.1 * (index + 1)}s` }}
              >
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 p-3 bg-gradient-primary rounded-full w-fit group-hover:animate-pulse-glow transition-all duration-300">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-lg text-card-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-muted-foreground leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};