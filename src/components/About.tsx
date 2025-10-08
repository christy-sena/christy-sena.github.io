const About = () => {
  return (
    <section className="py-section bg-background relative overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-gradient-to-tr from-primary/10 to-transparent rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }} />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Animated Abstract Arc Motif */}
          <div className="flex justify-center mb-12 opacity-0 animate-slide-in">
            <div className="relative w-48 h-24 group">
              <div className="absolute inset-0 border-t-2 border-primary rounded-t-full opacity-20 animate-pulse group-hover:opacity-30 transition-opacity duration-300" />
              <div className="absolute inset-x-6 top-0 border-t-2 border-primary rounded-t-full opacity-40 animate-pulse group-hover:opacity-50 transition-opacity duration-300" style={{ animationDelay: '0.3s' }} />
              <div className="absolute inset-x-12 top-0 border-t-2 border-primary rounded-t-full opacity-60 animate-pulse group-hover:opacity-70 transition-opacity duration-300" style={{ animationDelay: '0.6s' }} />
              
              {/* Glowing Center Point */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-primary rounded-full animate-pulse-glow group-hover:w-3 group-hover:h-3 transition-all duration-300" />
            </div>
          </div>
          
          <h2 className="text-display font-serif font-semibold text-primary mb-8 text-center opacity-0 animate-slide-in stagger-1 hover:text-primary-hover transition-colors duration-300">
            About Sena Strategy
          </h2>
          
          <div className="prose prose-lg mx-auto text-center space-y-6">
            <p className="text-lg text-foreground leading-relaxed relative inline-block opacity-0 animate-slide-in stagger-2 group">
              We are vendor-neutral AI strategy consultants. Our mission is to help leadership teams unlock the value of AI — without bias, jargon, or vendor push.
              <span className="absolute -bottom-2 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent group-hover:via-primary/50 transition-colors duration-300" />
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed opacity-0 animate-slide-in stagger-3 hover:text-foreground transition-colors duration-300">
              With a heritage of foresight and clarity, we guide boards through the complexities of AI adoption with pragmatic, compliant, and actionable strategies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;