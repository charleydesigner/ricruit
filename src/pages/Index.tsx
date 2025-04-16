
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import SuccessStories from "@/components/SuccessStories";
import Resources from "@/components/Resources";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Stats />
        <SuccessStories />
        <Resources />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
