import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

const Hero = () => {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; delay: number }>>([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 5,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary">
      {/* Animated Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary/90" />
      
      {/* Dynamic Grid Pattern */}
      <div className="absolute inset-0 strategy-grid-pattern opacity-30 animate-pulse-glow" />
      
      {/* Floating Particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute w-1 h-1 bg-primary-foreground/20 rounded-full animate-float"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            animationDelay: `${particle.delay}s`,
          }}
        />
      ))}
      
      {/* Animated Horizon Lines */}
      <div className="absolute inset-0 flex items-center justify-center opacity-20">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-primary-foreground to-transparent animate-pulse" />
      </div>
      <div className="absolute inset-0 flex items-start pt-32 justify-center opacity-10">
        <div className="w-3/4 h-px bg-gradient-to-r from-transparent via-primary-foreground to-transparent" 
             style={{ animationDelay: '1s' }} />
      </div>
      
      {/* Radial Glow Effect */}
      <div className="absolute inset-0 bg-gradient-radial from-primary-foreground/5 via-transparent to-transparent" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif font-semibold text-primary-foreground mb-8 leading-tight tracking-tight opacity-0 animate-slide-in">
            Sena Strategy
          </h1>
          
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-12 leading-relaxed max-w-3xl mx-auto font-light opacity-0 animate-slide-in stagger-1">
            Risk-adjusted value creation at speed
          </p>
          
          <div className="opacity-0 animate-slide-in stagger-2">
            <Button 
              size="lg" 
              className="bg-primary-foreground hover:bg-primary-foreground/90 text-primary font-semibold px-10 py-6 text-lg rounded-sm shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 group"
            >
              Get in Touch
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
      
      {/* Dynamic Corner Accents */}
      <div className="absolute top-0 right-0 w-32 h-32 border-t-2 border-r-2 border-primary-foreground/20 animate-pulse" />
      <div className="absolute bottom-0 left-0 w-32 h-32 border-b-2 border-l-2 border-primary-foreground/20 animate-pulse" 
           style={{ animationDelay: '1s' }} />
      
      {/* Corner Glow Effects */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary-foreground/5 blur-3xl rounded-full animate-pulse-glow" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-foreground/5 blur-3xl rounded-full animate-pulse-glow" 
           style={{ animationDelay: '1.5s' }} />
    </section>
  );
};

export default Hero;