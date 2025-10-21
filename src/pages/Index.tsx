import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Insights from "@/components/Insights";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";

const Index = () => {
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
