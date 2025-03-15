import HeroSection from "@/components/home/heroSection";
import CategoriesSection from "@/components/home/categoriesSection";
import CoursesSection from "@/components/home/CoursesSection";
import AboutUsSection from "@/components/home/aboutUsSection";
import NewSessionSection from "@/components/home/newSessionSection";


export default function Home() {
  return (
    <main>
      <HeroSection />
      <CategoriesSection />
      <CoursesSection />
      <AboutUsSection />
      <NewSessionSection />
    </main>
  );
}
