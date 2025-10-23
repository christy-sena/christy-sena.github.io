import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { ArrowRight } from "lucide-react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });
  const { toast } = useToast();

  const [loading, setLoading] = useState(false);
  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="py-section bg-muted relative overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-l from-primary/10 to-transparent rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-gradient-to-r from-primary/10 to-transparent rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }} />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12 opacity-0 animate-slide-in">
            <h2 className="text-display font-serif font-semibold text-primary mb-4 hover:text-primary-hover transition-colors duration-300">
              Begin your strategy journey
            </h2>
            <p className="text-lg text-muted-foreground">
              Connect with our team to discuss your AI strategy and governance needs
            </p>
          </div>
          
          <Card className="border-border shadow-lg rounded-sm relative overflow-hidden hover:shadow-xl transition-all duration-500 group opacity-0 animate-slide-in stagger-1 hover:border-primary/30">
            {/* Animated Border Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Animated Top Border */}
            <div className="absolute top-0 left-0 w-0 h-0.5 bg-gradient-to-r from-transparent via-primary/50 to-transparent group-hover:w-full transition-all duration-500" />
            
            <CardHeader className="text-center relative z-10">
              <CardTitle className="text-heading font-serif">Contact us</CardTitle>
              <CardDescription>
                Schedule a confidential consultation with our advisory team
              </CardDescription>
            </CardHeader>
            <CardContent className="relative z-10">
              <form
                action="https://formspree.io/f/movkojwz"
                method="POST"
                encType="multipart/form-data"
                className="space-y-6"
                onSubmit={() => setLoading(true)}
              >
                {/* Formspree hidden inputs: redirect back to hash route after submit */}
                <input type="hidden" name="_next" value={`${window.location.origin}${window.location.pathname}#/`} />
                <input type="hidden" name="_captcha" value="false" />
                <div className="space-y-2 group/input">
                  <Label htmlFor="name" className="group-focus-within/input:text-primary transition-colors">Full Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={onChange}
                    placeholder="Your full name"
                    required
                    className="rounded-sm border-border focus:border-primary transition-colors"
                  />
                </div>
                
                <div className="space-y-2 group/input">
                  <Label htmlFor="email" className="group-focus-within/input:text-primary transition-colors">Email Address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={onChange}
                    placeholder="your.email@company.com"
                    required
                    className="rounded-sm border-border focus:border-primary transition-colors"
                  />
                </div>
                
                <div className="space-y-2 group/input">
                  <Label htmlFor="company" className="group-focus-within/input:text-primary transition-colors">Organization</Label>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={onChange}
                    placeholder="Your organization name"
                    required
                    className="rounded-sm border-border focus:border-primary transition-colors"
                  />
                </div>

                <div className="space-y-2 group/input">
                  <Label htmlFor="message" className="group-focus-within/input:text-primary transition-colors">Message</Label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={onChange}
                    placeholder="Tell us about your project, goals, or questions"
                    className="w-full min-h-[120px] rounded-sm border-border focus:border-primary transition-colors p-3 bg-transparent"
                    required
                  />
                </div>
                
                <Button 
                  type="submit" 
                  disabled={loading}
                  className="w-full bg-primary hover:bg-primary-hover text-primary-foreground font-semibold py-6 rounded-sm text-lg transition-all duration-300 hover:shadow-lg hover:scale-[1.02] group/button disabled:opacity-60"
                >
                  {loading ? 'Sending...' : 'Submit'}
                  <ArrowRight className="ml-2 h-5 w-5 group-hover/button:translate-x-1 transition-transform" />
                </Button>
              </form>
            </CardContent>
            
            {/* Corner Accent */}
            <div className="absolute bottom-0 right-0 w-0 h-0 border-b-2 border-r-2 border-primary/0 group-hover:w-16 group-hover:h-16 group-hover:border-primary/40 transition-all duration-500" />
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;