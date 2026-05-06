import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const ApproachBanner = () => {
  return (
    <section className="bg-primary py-16 px-6 relative overflow-hidden">
      <div className="absolute inset-0 strategy-grid-pattern opacity-10" />

      <div className="container mx-auto relative z-10 max-w-4xl flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <p className="text-primary-foreground/70 text-sm uppercase tracking-widest mb-2 font-medium">Why Sena</p>
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-primary-foreground leading-tight">
            Traditional consulting is not built for this problem.
          </h2>
        </div>

        <Link
          to="/our-approach"
          className="flex-shrink-0 inline-flex items-center gap-2 bg-primary-foreground text-primary font-semibold px-8 py-4 rounded-sm hover:bg-primary-foreground/90 transition-all duration-200 group"
        >
          How we work differently
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
        </Link>
      </div>
    </section>
  );
};

export default ApproachBanner;
