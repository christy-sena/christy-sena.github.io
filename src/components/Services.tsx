import { useState } from "react";
import { ClipboardList, Search, Users, GraduationCap, ChevronLeft, ChevronRight } from "lucide-react";

const services = [
    {
    icon: GraduationCap,
    title: "Executive Education",
    description: "AI literacy programmes for boards and leadership teams — workshops, AI days, and various sessions to keep leadership ahead of the curve."
  },
  {
    icon: ClipboardList,
    title: "AI Maturity Assessment",
    description: "Structured diagnostic across Firmwide/Corporate, Commercial, Back-Office, and Product & Service Delivery. ~70 AI capabilities scored, benchmarked against peers, with a ranked opportunity list and quantified value for each."
  },
  {
    icon: Search,
    title: "Vendor Selection & Workflow Design",
    description: "Independent evaluation of AI vendors and tools matched to your specific use case — with current workflows mapped and AI insertion points designed end-to-end."
  },
  {
    icon: Users,
    title: "Change Management & Adoption",
    description: "Hands-on support through implementation: operating model adjustments, training plans, KPI dashboards, and 30/60/90-day checkpoints to embed lasting change."
  }
];

const MAX_VISIBLE = 3;

const Services = () => {
  const [startIndex, setStartIndex] = useState(0);
  const total = services.length;

  const canGoBack = startIndex > 0;
  const canGoForward = startIndex + MAX_VISIBLE < total;
  const visible = services.slice(startIndex, startIndex + MAX_VISIBLE);

  return (
    <section id="services" className="py-section bg-[#EAF4EE] relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 opacity-0 animate-slide-in">
          <h2 className="text-display font-serif font-semibold text-primary mb-4 hover:text-primary-hover transition-colors duration-300">
            Service Offerings
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive advisory services for strategic AI implementation
          </p>
        </div>

        <div className="relative">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {visible.map((service, index) => (
              <div
                key={startIndex + index}
                className="group bg-white border border-[#C0C0C0]/40 rounded-sm p-8 shadow-sm hover:shadow-md hover:border-primary/40 transition-all duration-300 relative overflow-hidden hover:-translate-y-1 opacity-0 animate-slide-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute top-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-500" />

                <div className="mb-6 w-20 h-20 rounded-full border-2 border-primary/30 flex items-center justify-center group-hover:border-primary group-hover:bg-primary/5 transition-all duration-300 mx-auto">
                  <service.icon className="h-8 w-8 text-primary transition-all duration-300" />
                </div>

                <h3 className="text-subheading font-serif font-semibold text-primary mb-4 group-hover:text-primary-hover transition-colors duration-300">
                  {service.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed text-sm group-hover:text-foreground/80 transition-colors duration-300">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          {total > MAX_VISIBLE && (
            <div className="flex items-center justify-center gap-4 mt-10">
              <button
                onClick={() => setStartIndex(i => i - 1)}
                disabled={!canGoBack}
                aria-label="Previous services"
                className="p-2 rounded-full border border-primary/30 hover:border-primary hover:bg-primary/5 transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <ChevronLeft className="w-5 h-5 text-primary" />
              </button>

              <div className="flex gap-2">
                {Array.from({ length: total - MAX_VISIBLE + 1 }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setStartIndex(i)}
                    aria-label={`Go to service set ${i + 1}`}
                    className={`h-2 rounded-full transition-all duration-300 ${i === startIndex ? "bg-primary w-6" : "bg-primary/30 w-2 hover:bg-primary/60"}`}
                  />
                ))}
              </div>

              <button
                onClick={() => setStartIndex(i => i + 1)}
                disabled={!canGoForward}
                aria-label="Next services"
                className="p-2 rounded-full border border-primary/30 hover:border-primary hover:bg-primary/5 transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <ChevronRight className="w-5 h-5 text-primary" />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Services;
