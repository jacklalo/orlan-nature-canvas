import { GalleryHeader } from "@/components/GalleryHeader";
import { HeroSection } from "@/components/HeroSection";
import { ProjectsGrid } from "@/components/ProjectsGrid";
import { QuoteSection } from "@/components/QuoteSection";
import { AboutSection } from "@/components/AboutSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <GalleryHeader />
      <main>
        <HeroSection />
        <ProjectsGrid />
        <QuoteSection />
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
