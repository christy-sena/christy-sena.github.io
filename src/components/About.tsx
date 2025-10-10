const About = () => {
  return (
    <section className="py-section bg-background relative overflow-hidden">
  {/* Dynamic Background Elements (static — pulse removed) */}
  <div className="absolute top-0 right-1/4 w-96 h-96 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl" />
  <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-gradient-to-tr from-primary/10 to-transparent rounded-full blur-3xl" style={{ animationDelay: '1s' }} />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Animated Abstract Arc Motif */}
          <div className="flex justify-center mb-12 opacity-0 animate-slide-in">
            <div className="relative w-48 h-24">
              <div className="absolute inset-0 border-t-2 border-primary rounded-t-full opacity-20 transition-opacity duration-300" />
              <div className="absolute inset-x-6 top-0 border-t-2 border-primary rounded-t-full opacity-40 transition-opacity duration-300" style={{ animationDelay: '0.3s' }} />
              <div className="absolute inset-x-12 top-0 border-t-2 border-primary rounded-t-full opacity-60 transition-opacity duration-300" style={{ animationDelay: '0.6s' }} />
              
              {/* Glowing Center Point (static — glow animation removed) */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-primary rounded-full transition-all duration-300" />
            </div>
          </div>
          
          <h2 className="text-display font-serif font-semibold text-primary mb-8 text-center opacity-0 animate-slide-in stagger-1 hover:text-primary-hover transition-colors duration-300">
            About Sena Strategy
          </h2>
          
          <div className="prose prose-lg mx-auto text-center space-y-6">
            <p className="text-lg text-foreground leading-relaxed relative inline-block opacity-0 animate-slide-in stagger-2 group">
              Board-first AI strategy consultancy that cuts through the noise to deliver measurable cost reduction, revenue growth and governance alignment
              {/* <span className="absolute -bottom-2 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent group-hover:via-primary/50 transition-colors duration-300" /> */}
            </p>
            {/* <p className="text-lg text-muted-foreground leading-relaxed opacity-0 animate-slide-in stagger-3 hover:text-foreground transition-colors duration-300">
              With a heritage of foresight and clarity, we guide boards through the complexities of AI adoption with pragmatic, compliant, and actionable strategies.
            </p> */}
          </div>

          {/* Team Section */}
          <div className="mt-16 text-center">
            <h3 className="text-heading font-serif font-semibold text-primary mb-6">Our Team</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="p-6 bg-card rounded-sm shadow-sm">
                <div className="h-16 w-16 rounded-full bg-primary-foreground/10 mx-auto mb-4 flex items-center justify-center text-primary font-semibold">J</div>
                <h4 className="font-semibold">Jonathan</h4>
                <p className="text-sm text-muted-foreground">Partner</p>
                <p className="mt-3 text-sm text-foreground">Jonathan leads client strategy and brings decades of advisory experience across technology and governance.</p>
              </div>

              <div className="p-6 bg-card rounded-sm shadow-sm">
                <div className="h-16 w-16 rounded-full bg-primary-foreground/10 mx-auto mb-4 flex items-center justify-center text-primary font-semibold">C</div>
                <h4 className="font-semibold">Christy</h4>
                <p className="text-sm text-muted-foreground">Consultant</p>
                <p className="mt-3 text-sm text-foreground">Christy works directly with boards to translate strategy into measurable programmes and stakeholder alignment.</p>
              </div>

              <div className="p-6 bg-card rounded-sm shadow-sm">
                <div className="h-16 w-16 rounded-full bg-primary-foreground/10 mx-auto mb-4 flex items-center justify-center text-primary font-semibold">A</div>
                <h4 className="font-semibold">Alex</h4>
                <p className="text-sm text-muted-foreground">Specialist</p>
                <p className="mt-3 text-sm text-foreground">Alex focuses on technical assessments and pragmatic roadmap delivery to ensure successful implementation.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;