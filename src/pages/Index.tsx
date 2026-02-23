import { HeroSection } from "@/components/HeroSection";
import { ProjectsGrid } from "@/components/ProjectsGrid";
import { QuoteSection } from "@/components/QuoteSection";
import { AboutSection } from "@/components/AboutSection";

const Index = () => {
  return (
    <div>
      <main>
        <HeroSection />
        <ProjectsGrid />
        <QuoteSection />
        <AboutSection />
      </main>
    </div>
  );
};

export default Index;
