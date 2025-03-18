import HeroSection from "@/components/home/heroSection";
import CategoriesSection from "@/components/home/categoriesSection";
import CoursesSection from "@/components/home/CoursesSection";
import AboutUsSection from "@/components/home/aboutUsSection";
import WhyChooseUsSection from "@/components/home/chooseUsSection";
import SkillsSection from "@/components/home/skillsSection";
import TestimonialSection from "@/components/home/testimonialSection";
import InstructorsSection from "@/components/home/InstructorsSection";
import CareerSection from "@/components/home/chooseCareerSection";
import PopularPosts from "@/components/home/postsSection";
import NewsletterSection from "@/components/home/newsLetterSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <CategoriesSection />
      <CoursesSection />
      <AboutUsSection />
      <WhyChooseUsSection />
      <SkillsSection />
      <TestimonialSection />
      <InstructorsSection />
      <CareerSection />
      <PopularPosts/>
      <NewsletterSection />
    </main>
  );
}
