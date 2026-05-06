const testimonials = [
  {
    company: "Property Marketplace Co",
    logo: null,
    role: "VP\, Engineering",
    quote: "Placeholder quote — replace with actual client testimonial. Sena helped us identify and prioritise our highest-value AI opportunities with clarity we hadn't been able to achieve internally."
  },
  {
    company: "Car Finance Brokerage",
    logo: null,
    role: "Managing Director",
    quote: "Placeholder quote — replace with actual client testimonial. The diagnostic was rigorous and founder-led throughout. We came away with a concrete plan, not a list of buzzwords."
  },
  {
    company: "City law firm",
    logo: null,
    role: "Managing Partner",
    quote: "Placeholder quote — replace with actual client testimonial. What set Sena apart was the combination of technical depth and strategic framing — they could speak our language and the engineer's."
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-section bg-[#F8F8F5] relative overflow-hidden">

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 opacity-0 animate-slide-in">
          <h2 className="text-display font-serif font-semibold text-primary mb-4 hover:text-primary-hover transition-colors duration-300">
            Testimonials
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear from our recent clients about how Sena has helped them navigate the complexities of AI
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-sm p-8 shadow-sm hover:shadow-lg hover:border-primary/30 transition-all duration-500 relative opacity-0 animate-slide-in flex flex-col"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute top-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-500" />

              <div className="mb-6">
                <span className="text-4xl font-serif text-primary/30 leading-none select-none">&ldquo;</span>
              </div>

              <p className="text-foreground leading-relaxed text-sm flex-1 italic">
                {t.quote}
              </p>

              <div className="mt-8 pt-6 border-t border-border">
                {t.logo ? (
                  <img src={t.logo} alt={t.company} className="h-8 object-contain mb-3" />
                ) : (
                  <p className="font-semibold text-primary text-sm">{t.company}</p>
                )}
                <p className="text-muted-foreground text-xs">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
