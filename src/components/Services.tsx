import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, LineChart, Users } from "lucide-react";

const services = [
  {
    icon: FileText,
    title: "Board Advisory",
    description: "Strategic counsel on AI governance, risk management, and compliance frameworks tailored to your industry."
  },
  {
    icon: LineChart,
    title: "Strategic Roadmapping",
    description: "Data-driven AI implementation plans with clear milestones, resource requirements, and ROI projections."
  },
  {
    icon: Users,
    title: "Organizational Readiness",
    description: "Comprehensive assessments of capabilities, skills gaps, and change management requirements for AI adoption."
  }
];

const Services = () => {
  return (
    <section className="py-section bg-muted relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 opacity-0 animate-slide-in">
          <h2 className="text-display font-serif font-semibold text-primary mb-4 hover:text-primary-hover transition-colors duration-300">
            Service Offerings
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive advisory services for strategic AI implementation
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group card-hover border-border bg-card hover:bg-card-hover rounded-sm p-8 shadow-sm hover:shadow-xl hover:border-primary/30 transition-all duration-500 relative overflow-hidden hover:-translate-y-2 opacity-0 animate-slide-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Card Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Animated Top Border */}
              <div className="absolute top-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-primary/50 group-hover:w-full transition-all duration-500" />
              
              <CardHeader className="pb-4 relative z-10">
                <div className="mb-4 w-12 h-12 border-2 border-primary flex items-center justify-center group-hover:scale-110 group-hover:border-primary-hover group-hover:bg-primary/10 transition-all duration-300">
                  <service.icon className="h-6 w-6 text-primary group-hover:scale-110 group-hover:text-primary-hover transition-all duration-300" />
                </div>
                <CardTitle className="text-subheading font-serif font-semibold text-primary group-hover:text-primary-hover transition-colors duration-300">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <CardDescription className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                  {service.description}
                </CardDescription>
              </CardContent>
              
              {/* Animated Corner Accent */}
              <div className="absolute bottom-0 right-0 w-0 h-0 border-b-2 border-r-2 border-primary/0 group-hover:w-16 group-hover:h-16 group-hover:border-primary/40 transition-all duration-500" />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;