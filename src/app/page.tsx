import HeroSection from "@/components/home/heroSection";
import CategoriesSection from "@/components/home/categoriesSection";
import CoursesSection from "@/components/home/CoursesSection";
import AboutUsSection from "@/components/home/aboutUsSection";


export default function Home() {
  return (
    <main>
      <HeroSection />
      <CategoriesSection />
      <CoursesSection />
      <AboutUsSection />
    </main>
  );
}
