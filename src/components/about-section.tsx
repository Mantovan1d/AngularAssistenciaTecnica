import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Users, Clock, Award } from "lucide-react";

const highlights = [
  {
    icon: CheckCircle,
    title: "Especialização",
    description: "Foco em fornos industriais e equipamentos de panificação"
  },
  {
    icon: Users,
    title: "Técnicos Certificados", 
    description: "Equipe qualificada com certificações NR35, NR10, NR12, NRG"
  },
  {
    icon: Clock,
    title: "Atendimento Ágil",
    description: "Resposta rápida para minimizar paradas de produção"
  },
  {
    icon: Award,
    title: "Qualidade Garantida",
    description: "Segurança em primeiro lugar em todos os serviços"
  }
];

export const AboutSection = () => {
  return (
    <section className="py-16 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4 animate-slide-up">
            Sobre a Angular
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Somos uma empresa especializada em assistência técnica para fornos industriais 
            e equipamentos de panificação. Nossa missão é garantir que sua produção nunca pare, 
            oferecendo soluções técnicas precisas e confiáveis.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <Card 
                key={highlight.title}
                className="text-center hover:shadow-card transition-all duration-300 hover:-translate-y-1 animate-slide-up border-border/50"
                style={{ animationDelay: `${0.1 * (index + 1)}s` }}
              >
                <CardContent className="pt-6">
                  <div className="mx-auto mb-4 p-3 bg-gradient-primary rounded-full w-fit">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-card-foreground mb-2">
                    {highlight.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {highlight.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <Card className="bg-gradient-subtle border-border/50 animate-slide-up" style={{ animationDelay: '0.6s' }}>
          <CardContent className="p-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-card-foreground mb-4">
                Compromisso com a Excelência
              </h3>
              <p className="text-muted-foreground leading-relaxed max-w-4xl mx-auto">
                Cada técnico da nossa equipe possui as certificações necessárias para trabalhar 
                com segurança em ambientes industriais. Utilizamos equipamentos de proteção 
                individual adequados e seguimos rigorosamente todas as normas de segurança, 
                garantindo que nossos serviços sejam executados com total profissionalismo 
                e responsabilidade.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};