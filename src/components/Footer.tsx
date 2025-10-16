import { Mail, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="font-serif font-semibold text-2xl mb-4">Sena Strategy</h3>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Independent AI strategy consultants that turn corporate AI ambition into bottom-line results.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-primary-foreground/90">Contact</h4>
            <div className="space-y-3 text-sm text-primary-foreground/70">
              <div className="flex items-center space-x-2 group">
                <Mail className="h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
                <a href="mailto:christy@senastrategy.ai" className="hover:text-primary-foreground transition-all duration-300 relative">
                  christy@senastrategy.ai
                  <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-primary-foreground group-hover:w-full transition-all duration-300" />
                </a>
              </div>
              <div className="flex items-center space-x-2 group">
                <Linkedin className="h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
                <a href="#" className="hover:text-primary-foreground transition-all duration-300 relative">
                  Sena Strategy
                  <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-primary-foreground group-hover:w-full transition-all duration-300" />
                </a>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-primary-foreground/90">Services</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li className="hover:text-primary-foreground hover:translate-x-1 transition-all duration-300 cursor-default">Board AI workshop</li>
              <li className="hover:text-primary-foreground hover:translate-x-1 transition-all duration-300 cursor-default">AI opportunity assessment</li>
              <li className="hover:text-primary-foreground hover:translate-x-1 transition-all duration-300 cursor-default">Strategic AI roadmap</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-primary-foreground/50">
          <p>&copy; {new Date().getFullYear()} Sena Strategy. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-primary-foreground/70 transition-all duration-300 relative group">
              Privacy Policy
              <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-primary-foreground/70 group-hover:w-full transition-all duration-300" />
            </a>
            <a href="#" className="hover:text-primary-foreground/70 transition-all duration-300 relative group">
              Terms of Service
              <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-primary-foreground/70 group-hover:w-full transition-all duration-300" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;