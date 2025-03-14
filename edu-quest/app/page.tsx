import HeroSection from "./components/home/hero/heroSection";
import CategoriesSection from "./components/home/categories/categoriesSection";
import CoursesSection from "./components/home/courses/CoursesSection";
import AboutUsSection from "./components/home/aboutUs/aboutUsSection";


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
