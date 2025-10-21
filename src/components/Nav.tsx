import { useState } from "react";
import { Menu, X, Home, Users, Briefcase, BookOpen, Mail } from "lucide-react";

const sections = [
  { id: "home", label: "Home", icon: <Home className="w-5 h-5" /> },
  { id: "about", label: "About", icon: <Users className="w-5 h-5" /> },
  { id: "services", label: "Services", icon: <Briefcase className="w-5 h-5" /> },
  { id: "insights", label: "Insights", icon: <BookOpen className="w-5 h-5" /> },
  { id: "contact", label: "Contact", icon: <Mail className="w-5 h-5" /> },
];

const Nav = () => {
  const [open, setOpen] = useState(false);

  const onNavigate = (id: string) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      {/* Mobile top bar with burger */}
      <div className="fixed top-4 right-4 z-50 md:hidden">
        <button
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen(o => !o)}
          className="p-3 rounded-md bg-primary-foreground/95 text-primary shadow-lg"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-opacity ${open ? "pointer-events-auto" : "pointer-events-none"}`}
        aria-hidden={!open}
      >
        <div
          className={`absolute inset-0 bg-black/40 ${open ? "opacity-100" : "opacity-0"}`}
          onClick={() => setOpen(false)}
        />

        <nav className={`absolute top-16 right-4 w-56 bg-background rounded-md shadow-xl p-4 transform ${open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}>
          <ul className="space-y-3">
            {sections.map(s => (
              <li key={s.id}>
                <button
                  onClick={() => onNavigate(s.id)}
                  className="w-full flex items-center gap-3 p-2 rounded hover:bg-primary/5 transition-colors"
                >
                  <span className="text-primary-foreground">{s.icon}</span>
                  <span className="text-sm">{s.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Desktop vertical icon bar */}
      <aside className="hidden md:flex fixed left-6 top-1/3 z-40 flex-col items-center gap-3">
        <div className="bg-background/70 backdrop-blur rounded-full p-2 shadow-md">
          <ul className="flex flex-col gap-2">
            {sections.map(s => (
              <li key={s.id}>
                <button
                  onClick={() => onNavigate(s.id)}
                  title={s.label}
                  className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-primary/5 transition-colors"
                >
                  <span className="text-primary-foreground">{s.icon}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Nav;
