import { HeroLogo } from "@/components/ui/hero-logo";
import { ServicesGrid } from "@/components/services-grid";
import { AboutSection } from "@/components/about-section";
import { ContactForm } from "@/components/contact-form";
import { Button } from "@/components/ui/button";

const Index = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <header className="relative bg-gradient-hero text-white overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-black/10" />
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-primary-light/10 rounded-full blur-3xl" />
        
        <div className="relative container mx-auto px-4 py-20 text-center">
          <div className="max-w-4xl mx-auto">
            {/* Logo */}
            <div className="mb-8">
              <HeroLogo className="mx-auto" />
            </div>
            
            {/* Company name and tagline */}
            <div className="space-y-6 animate-slide-up" style={{ animationDelay: '0.5s' }}>
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
                Angular
              </h1>
              <p className="text-xl md:text-2xl font-light text-white/90 max-w-2xl mx-auto leading-relaxed">
                Assistência Técnica em Fornos e Equipamentos Industriais
              </p>
              <p className="text-lg text-white/80 max-w-xl mx-auto">
                Soluções técnicas precisas para sua linha de produção
              </p>
            </div>
            
            {/* CTA Button */}
            <div className="mt-10 animate-slide-up" style={{ animationDelay: '0.8s' }}>
              <Button 
                variant="hero" 
                size="xl"
                onClick={scrollToContact}
                className="animate-pulse-glow"
              >
                Solicitar Orçamento
              </Button>
            </div>
          </div>
        </div>
        
        {/* Bottom wave decoration */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 120" fill="none" className="w-full h-20">
            <path 
              d="M0,120 L0,60 Q300,0 600,60 T1200,60 L1200,120 Z" 
              fill="hsl(var(--background))"
            />
          </svg>
        </div>
      </header>

      {/* Services Section */}
      <ServicesGrid />

      {/* About Section */}
      <AboutSection />

      {/* Contact Section */}
      <ContactForm />

      {/* Footer */}
      <footer className="bg-muted py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-muted-foreground">
            &copy; 2025 Angular Assistência Técnica | Todos os direitos reservados
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            contato: assistenciatecnicangular@gmail.com
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
