import { jonathan as jonathanImg, christy as christyImg, alex as alexImg } from "@/assets/profile";

const About = () => {
  return (
    <section id="about" className="py-section bg-background relative overflow-hidden">
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
              We are an AI-native strategy firm helping boards translate AI potential into measurable value through independent, financially-grounded consultancy.
            </p>
            <p className="text-lg text-foreground leading-relaxed relative inline-block opacity-0 animate-slide-in stagger-2 group">
              Our team combines deep experience in AI consulting, corporate strategy, and banking. We link AI opportunity with operational efficiency, revenue uplift, and cost discipline.        </p>
          </div>

          {/* Team Section */}
            <div className="mt-16 text-center">
            <h3 className="text-heading font-serif font-semibold text-primary mb-6">Our Team</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-16 max-w-6xl mx-auto px-6 md:px-0">
              <div className="p-10 bg-card rounded-md shadow-lg flex flex-col items-center">
                <img src={jonathanImg} alt="Jonathan Pfitzner" className="h-28 w-28 rounded-full object-cover mb-4" />
                <h4 className="font-semibold text-xl">Jonathan Pfitzner</h4>
                <p className="text-sm text-muted-foreground">Partner</p>
                <p className="mt-3 text-sm text-foreground">With extensive experience across corporate strategy, M&A banking, and venture investing, Jonathan combines strategic insight with a deep understanding of technology transitions and growth markets.</p>
              </div>

              <div className="p-10 bg-card rounded-md shadow-lg flex flex-col items-center">
                <img src={christyImg} alt="Christy Chan" className="h-28 w-28 rounded-full object-cover mb-4" />
                <h4 className="font-semibold text-xl">
                  <a href="https://christychan.cc" target="_blank" rel="noopener noreferrer" className="hover:underline">
                    Christy Chan
                  </a>
                </h4>
                <p className="text-sm text-muted-foreground">Founding Consultant</p>
                <p className="mt-3 text-sm text-foreground">A former Bain consultant with a background in computer engineering, Christy helps boards build the technical fluency and strategic clarity needed to lead on AI, translating complex technology trends into actionable decisions.</p>
              </div>

              <div className="p-10 bg-card rounded-md shadow-lg flex flex-col items-center">
                <img src={alexImg} alt="Alex Thacker" className="h-28 w-28 rounded-full object-cover mb-4" />
                <h4 className="font-semibold text-xl">Alex Thacker</h4>
                <p className="mt-3 text-sm text-foreground">With specialisms in AI, data and cybersecurity, Alex is an M&A advisor and venture investor. He brings first-hand insight into which technologies and vendors are shaping the market, aligning strategic priorities with investment readiness.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;