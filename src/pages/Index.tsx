import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import StickyCTA from "@/components/StickyCTA";
import Footer from "@/components/Footer";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";

const Index = () => {
  return (
    <BackgroundBeamsWithCollision className="min-h-screen bg-background pb-16 md:pb-0">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <Footer />
      <StickyCTA />
    </BackgroundBeamsWithCollision>
  );
};

export default Index;
