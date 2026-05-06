const caseStudies = [
  {
    company: "Property Marketplace Co",
    area: "Product & Service Delivery",
    engagement: "Competitive intelligence analysis that informed the client what rivals and US comparables were shipping, identifying any blind spots and issues they should watch out for."
  },
  {
    company: "Car Finance Brokerage Co",
    area: "Commercial",
    engagement: "Operational efficiency diagnostic across the revenue centre, identifying and quantifying AI cost savings opportunities in the customer journey."
  },
  {
    company: "City Law Firm Co",
    area: "Back-Office",
    engagement: "Prioritising and quantifying AI opportunities across Client Billing & Time Capture, Compliance & Risk, and General Admin."
  }
];

const CaseStudies = () => {
  return (
    <section id="case-studies" className="py-section bg-[#F8F8F5] relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 opacity-0 animate-slide-in">
          <h2 className="text-display font-serif font-semibold text-primary mb-4 hover:text-primary-hover transition-colors duration-300">
            Client Work
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A selection of recent engagements
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {caseStudies.map((c, index) => (
            <div
              key={index}
              className="group bg-white border border-[#C0C0C0]/40 rounded-sm p-8 hover:border-primary/40 hover:shadow-md transition-all duration-300 relative overflow-hidden hover:-translate-y-1 opacity-0 animate-slide-in flex flex-col"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute top-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-500" />

              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary border border-primary/30 rounded-sm px-2 py-1 mb-6 self-start">
                {c.area}
              </span>

              <h3 className="text-lg font-serif font-semibold text-[#1E1E1E] mb-4">
                {c.company}
              </h3>

              <p className="text-muted-foreground leading-relaxed text-sm flex-1">
                {c.engagement}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
