import HeroSection from "@/components/home/heroSection";
import CategoriesSection from "@/components/home/categoriesSection";
import CoursesSection from "@/components/home/CoursesSection";
import AboutUsSection from "@/components/home/aboutUsSection";
import NewSessionSection from "@/components/home/newSessionSection";
import WhyChooseUsSection from "@/components/home/chooseUsSection";
import SkillsSection from "@/components/home/skillsSection";


export default function Home() {
  return (
    <main>
      <HeroSection />
      <CategoriesSection />
      <CoursesSection />
      <AboutUsSection />
      <NewSessionSection />
      <WhyChooseUsSection />
      <SkillsSection />
    </main>
  );
}
