import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ResearchInterests from "@/components/ResearchInterests";
import AcademicCredentials from "@/components/AcademicCredentials";
import ResearchExperience from "@/components/ResearchExperience";
import WorkExperience from "@/components/WorkExperience";
import TeachingExperience from "@/components/TeachingExperience";
import Publications from "@/components/Publications";
import ResearchProjects from "@/components/ResearchProjects";
import TechnicalSkills from "@/components/TechnicalSkills";
import RelevantCoursework from "@/components/RelevantCoursework";
import CourseGrades from "@/components/CourseGrades";
import Leadership from "@/components/Leadership";
import References from "@/components/References";

const Index = () => {
  return (
    <div className="font-academic">
      <Navigation />
      <main className="pt-16">
        <HeroSection />
        <ResearchInterests />
        <AcademicCredentials />
        <ResearchExperience />
        <WorkExperience />
        <TeachingExperience />
        <Publications />
        <ResearchProjects />
        <TechnicalSkills />
        <RelevantCoursework />
        <CourseGrades />
        <Leadership />
        <References />
      </main>
    </div>
  );
};

export default Index;
