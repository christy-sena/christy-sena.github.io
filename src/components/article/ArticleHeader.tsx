import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from "@/lib/utils";

interface NavItem {
  label: string;
  id: string;
}

interface ArticleHeaderProps {
  title: string;
  subtitle?: string;
  progress: number;
  onNavClick: (sectionId: string) => void;
  navItems?: NavItem[];
}

export function ArticleHeader({ title, subtitle, progress, onNavClick, navItems }: ArticleHeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (path: string) => {
    navigate(path);
    setIsMobileMenuOpen(false);
  };

  const location = useLocation();

  const goToHomeAndScroll = (id: string) => {
    // If we're already on the home page, scroll directly.
    const el = document.getElementById(id);
    if (el && (location.pathname === '/' || location.pathname === '/index.html')) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      return;
    }

    // Otherwise remember the target and navigate to home. Index will read sessionStorage and scroll.
    try {
      sessionStorage.setItem('sena:scrollTo', id);
    } catch (e) {
      // ignore
    }
    navigate('/');
  };

  const handleHomeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.location.href = '/';
  }

  const handleSectionClick = (e: React.MouseEvent<HTMLAnchorElement>, section: string) => {
    e.preventDefault();
    window.location.href = `/#${section}`;
  };

  const defaultNavItems = [
    { label: 'About', id: 'about' },
    { label: 'Services', id: 'services' },
    { label: 'Contact', id: 'contact' }
  ];
  
  const items = navItems || defaultNavItems;

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50">
        {/* Always-visible top nav */}
        <div className="bg-primary text-primary-foreground shadow-sm">
          <div className="container mx-auto px-6">
            <nav className="flex items-center h-14 justify-between">
              {/* Left: Logo + Nav links */}
              <div className="flex items-center gap-6">
                <button onClick={() => navigate('/')} className="text-xl font-serif font-semibold">
                  Sena Strategy
                </button>

                <div className="hidden lg:flex items-center gap-4">
                  <button onClick={() => goToHomeAndScroll('about')} className="text-sm hover:underline">
                    About Sena
                  </button>
                  <button onClick={() => goToHomeAndScroll('services')} className="text-sm hover:underline">
                    Services
                  </button>
                  <button onClick={() => goToHomeAndScroll('insights')} className="text-sm hover:underline">
                    Insights
                  </button>
                  <button onClick={() => goToHomeAndScroll('contact')} className="text-sm hover:underline">
                    Contact Us
                  </button>
                </div>
              </div>

              {/* Right: Tagline + Menu Button */}
              <div className="flex items-center gap-4">
                <div className="text-sm text-primary-foreground/80 mr-4 hidden lg:block">
                  Independent AI strategy for boards
                </div>
                <button 
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="lg:hidden"
                  aria-label="Toggle menu"
                >
                  {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </nav>

            {/* Mobile/Tablet Menu */}
            <div 
              className={cn(
                "lg:hidden fixed inset-0 bg-black/20",
                isMobileMenuOpen ? "block" : "hidden"
              )}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <div 
                className={cn(
                  "absolute top-14 right-0 w-72 bg-primary shadow-lg h-[calc(100vh-3.5rem)]",
                  "transform transition-transform duration-200 ease-in-out",
                  isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
                )}
                onClick={e => e.stopPropagation()}
              >
                <nav className="py-4 h-full overflow-y-auto">
                  <button 
                    onClick={() => {
                      goToHomeAndScroll('about');
                      setIsMobileMenuOpen(false);
                    }}
                    className="block w-full text-left px-6 py-3 text-sm hover:bg-primary/10"
                  >
                    About Sena
                  </button>
                  <button
                    onClick={() => {
                      goToHomeAndScroll('services');
                      setIsMobileMenuOpen(false);
                    }}
                    className="block w-full text-left px-6 py-3 text-sm hover:bg-primary/10"
                  >
                    Services
                  </button>
                  <div className="px-6 py-3">
                    <button
                      onClick={() => {
                        goToHomeAndScroll('insights');
                        setIsMobileMenuOpen(false);
                      }}
                      className="block w-full text-left px-0 py-2 text-sm hover:bg-primary/10"
                    >
                      Insights
                    </button>
                  </div>
                  <button
                    onClick={() => {
                      goToHomeAndScroll('contact');
                      setIsMobileMenuOpen(false);
                    }}
                    className="block w-full text-left px-6 py-3 text-sm hover:bg-primary/10"
                  >
                    Contact Us
                  </button>
                </nav>
              </div>
            </div>
          </div>
        </div>

        {/* Title strip + progress bar (appear after scrolling) */}
        <div 
          className={cn(
            "bg-white border-b dark:bg-slate-900 transition-transform duration-300",
            isScrolled ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"
          )}
        >
          <div className="container mx-auto px-6 py-3">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-0">
              <div className="flex-shrink-0">
                <h2 className="text-lg font-semibold text-foreground line-clamp-1">{title}</h2>
                {subtitle && <p className="text-sm text-muted-foreground line-clamp-1 md:line-clamp-none">{subtitle}</p>}
              </div>
              <div className="flex flex-wrap gap-4 md:gap-6">
                {items.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => onNavClick(item.id)}
                    className="text-sm font-medium transition-colors hover:text-primary whitespace-nowrap"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="w-full h-1 bg-neutral-200">
            <div 
              className="h-full transition-all duration-300" 
              style={{ width: `${progress}%`, backgroundColor: '#1E1E1E' }} 
            />
          </div>
        </div>
      </header>

      {/* Spacer to prevent content from being hidden under fixed header */}
      <div className="h-14" />
    </>
  );
}