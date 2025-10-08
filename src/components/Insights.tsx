import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp } from "lucide-react";

const insights = [
  {
    title: "AI Governance in Financial Services",
    description: "Navigating regulatory frameworks while maintaining competitive advantage through strategic AI implementation.",
    date: "Coming Soon"
  },
  {
    title: "Board-Level AI Strategy",
    description: "Key considerations for executive leadership when evaluating AI investments and transformation initiatives.",
    date: "Coming Soon"
  },
  {
    title: "Compliance-First AI Adoption",
    description: "Building robust AI systems that meet industry standards while driving innovation and operational efficiency.",
    date: "Coming Soon"
  }
];

const Insights = () => {
  return (
    <section className="py-section bg-background relative overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 strategy-grid-pattern opacity-5" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 opacity-0 animate-slide-in">
          <div className="flex justify-center mb-4">
            <div className="relative group">
              <TrendingUp className="h-10 w-10 text-primary animate-pulse transition-all duration-300 group-hover:scale-110 group-hover:text-primary-hover" />
              <div className="absolute inset-0 bg-primary/20 blur-xl animate-pulse-glow group-hover:bg-primary/30 transition-all duration-300" />
            </div>
          </div>
          <h2 className="text-display font-serif font-semibold text-primary mb-4 transition-all duration-300 hover:text-primary-hover">
            Insights & Thought Leadership
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Strategic perspectives on AI governance and implementation
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {insights.map((insight, index) => (
            <Card 
              key={index} 
              className="group border-border bg-card hover:bg-card-hover rounded-sm shadow-sm hover:shadow-xl transition-all duration-500 relative overflow-hidden hover:border-primary/30 hover:-translate-y-1 opacity-0 animate-slide-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Animated Top Border */}
              <div className="absolute top-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-primary/50 group-hover:w-full transition-all duration-500" />
              
              <CardHeader>
                <CardTitle className="text-xl font-serif font-semibold text-primary mb-2 group-hover:text-primary transition-colors">
                  {insight.title}
                </CardTitle>
                <CardDescription className="text-sm text-muted-foreground flex items-center gap-2">
                  <span className="inline-block w-2 h-2 rounded-full bg-primary/30 animate-pulse" />
                  {insight.date}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {insight.description}
                </p>
              </CardContent>
              
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Insights;
