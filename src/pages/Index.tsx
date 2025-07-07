import {
  HeroSection,
  AboutSection,
  EducationSection,
  ProjectsSection,
  CoursesSection,
  BlogSection,
  ContactSection,
  Footer,
} from "@/components/sections";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <HeroSection />
      <AboutSection />
      <EducationSection />
      <ProjectsSection />
      <CoursesSection />
      <BlogSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
