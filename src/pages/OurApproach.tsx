import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useEffect } from "react";

const sections = [
  {
    heading: "The problem with traditional consulting",
    body: "Large, big-name consulting firm projects start at £500k and take 8–12 weeks minimum, with juniors staffed day-to-day and partners parachuting in for the final presentation. For a mid-market business, that's not calibrated to your problem or your budget. Other players such as technical implementation shops will build whatever they're scoped as they they have no incentive to tell you what not to do. Vendors sell tools, not strategy. This means that no one is truly onside to help you prioritise and navigate the AI landscape for your specific business."
  },
  {
    heading: "The gap nobody fills",
    body: "Mid-market businesses sit in a specific bind: large enough to feel real AI pressure, not large enough to have an in-house strategy team or an MBB retainer. SMEs get by on off-the-shelf tools. Large enterprises have entire AI teams. Mid-market leadership has nowhere to go for independent, technically-grounded AI advice — until now."
  },
  {
    heading: "Why the lean model works now",
    body: "AI has automated most of the grunt work of consulting: research synthesis, benchmarking, document analysis, first-draft structuring. A lean, founder-led team with the right methodology can now deliver what previously required ten consultants and three months. The result is faster delivery, lower cost, and a senior practitioner accountable for every output — not a deck handed over by an analyst."
  },
  {
    heading: "What makes Sena different",
    body: "Most strategy consultants can't evaluate AI technically. Most AI technologists can't structure a business case. Sena does both: Imperial AI/ML engineering background combined with rigorous diagnostic methodology. Prioritisation is driven by value × feasibility, where feasibility is assessed through real technical judgement — not imported benchmarks. That combination filters out AI that sounds good but won't actually work for your specific business."
  },
  {
    heading: "What we don't do",
    body: "We don't produce a list of use cases and leave you to figure out the rest. We stay with you through the transformation process, including vendor selection, workflow design, change management, and adoption."
  }
];

const OurApproach = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  const goToServices = () => {
    try {
      sessionStorage.setItem('sena:scrollTo', 'services');
    } catch (e) { /* ignore */ }
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="bg-primary py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 strategy-grid-pattern opacity-20" />
        <div className="container mx-auto relative z-10 max-w-3xl">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground text-sm mb-8 transition-colors duration-200"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to home
          </Link>
          <h1 className="text-5xl md:text-6xl font-serif font-semibold text-primary-foreground leading-tight mb-6">
            How we work differently
          </h1>
          <p className="text-xl text-primary-foreground/80 leading-relaxed">
            Traditional consulting is over-staffed, over-scoped, and not calibrated for mid-market AI decisions. We embed AI-native workflows into everything we do, tailoring for the mid-market.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-20 max-w-3xl">
        <div className="space-y-16">
          {sections.map((s, i) => (
            <div key={i} className="border-l-2 border-primary/20 pl-8">
              <h2 className="text-2xl font-serif font-semibold text-primary mb-4">{s.heading}</h2>
              <p className="text-foreground leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 p-8 bg-muted rounded-sm border border-border">
          <p className="text-lg font-serif font-semibold text-primary mb-2">
            74% of AI's economic value is captured by 20% of companies.
          </p>
          <p className="text-muted-foreground text-sm leading-relaxed">
            What separates the 20% isn't tools or budget. It's whether leadership has a prioritised, quantified view of what's actually worth pursuing for their specific business. That is what Sena delivers.
          </p>
          <p className="mt-4 text-sm text-muted-foreground italic">
            Source: PwC 
            </p>
        </div>

        <div className="mt-12 text-center">
          <button
            onClick={goToServices}
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-sm font-semibold hover:bg-primary/90 transition-colors duration-200"
          >
            View our services
          </button>
        </div>
      </div>
    </div>
  );
};

export default OurApproach;
