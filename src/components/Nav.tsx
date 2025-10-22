import { useState } from "react";
import { Menu, X, Home, Users, Briefcase, BookOpen, Mail } from "lucide-react";

const sections = [
  { id: "home", label: "Home", icon: <Home className="w-5 h-5" /> },
  { id: "about", label: "About", icon: <Users className="w-5 h-5" /> },
  { id: "services", label: "Services", icon: <Briefcase className="w-5 h-5" /> },
  { id: "insights", label: "Insights", icon: <BookOpen className="w-5 h-5" /> },
  { id: "contact", label: "Contact", icon: <Mail className="w-5 h-5" /> },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  function onNavigate(id: string) {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <>
      <div className="fixed top-4 left-4 z-50">
        <button
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen(o => !o)}
          className="p-3 rounded-md bg-primary-foreground/95 text-primary shadow-lg"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>
      <div className={`fixed inset-0 z-40 transition-opacity ${open ? "pointer-events-auto" : "pointer-events-none"}`} aria-hidden={!open}>
        <div className={`absolute inset-0 bg-black/40 ${open ? "opacity-100" : "opacity-0"}`} onClick={() => setOpen(false)} />

        <nav className={`absolute top-20 left-4 md:left-8 md:top-24 w-64 md:w-80 bg-background rounded-md shadow-xl p-4 transform ${open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}>
          <ul className="space-y-2">
            {sections.map(s => (
              <li key={s.id}>
                <button
                  onClick={() => onNavigate(s.id)}
                  className="w-full text-left flex items-center gap-3 p-2 rounded hover:bg-primary/5 transition-colors"
                >
                  <span className="text-primary-foreground">{s.icon}</span>
                  <span className="text-sm font-medium">{s.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}
