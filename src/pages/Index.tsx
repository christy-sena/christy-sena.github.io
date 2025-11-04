import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Insights from "@/components/Insights";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import { useEffect } from 'react';

const Index = () => {
  useEffect(() => {
    try {
      const target = sessionStorage.getItem('sena:scrollTo');
      if (target) {
        const el = document.getElementById(target);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        sessionStorage.removeItem('sena:scrollTo');
      }
    } catch (e) {
      // ignore
    }
  }, []);
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <Hero />
      <About />
      <Services />
      <Insights />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
