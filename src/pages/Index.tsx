
import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";
import WorkSection from "@/components/WorkSection";
import StudioSection from "@/components/StudioSection";
import ProjectShowcase from "@/components/ProjectShowcase";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <Hero />
      <WorkSection />
      <StudioSection />
      <ProjectShowcase />
      <Footer />
    </div>
  );
};

export default Index;
