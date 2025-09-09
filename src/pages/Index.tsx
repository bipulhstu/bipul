import HeroSection from "@/components/HeroSection";
import ResearchInterests from "@/components/ResearchInterests";
import AcademicCredentials from "@/components/AcademicCredentials";
import Publications from "@/components/Publications";
import TechnicalSkills from "@/components/TechnicalSkills";

const Index = () => {
  return (
    <main className="font-academic">
      <HeroSection />
      <ResearchInterests />
      <AcademicCredentials />
      <Publications />
      <TechnicalSkills />
    </main>
  );
};

export default Index;
