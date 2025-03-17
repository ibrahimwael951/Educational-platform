import HeroSection from "@/components/home/heroSection";
import CategoriesSection from "@/components/home/categoriesSection";
import CoursesSection from "@/components/home/CoursesSection";
import AboutUsSection from "@/components/home/aboutUsSection";
// import NewSessionSection from "@/components/home/newSessionSection";
import WhyChooseUsSection from "@/components/home/chooseUsSection";
import SkillsSection from "@/components/home/skillsSection";
import TestimonialSection from "@/components/home/testimonialSection";
import InstructorsSection from "@/components/home/InstructorsSection";
import CareerSection from "@/components/home/chooseCareerSection";
import PopularPosts from "@/components/home/postsSection";
import NewsletterSection from "@/components/home/newsLetterSection";

import { ModeToggle } from "@/components/themeToggole";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ModeToggle/>
      <CategoriesSection />
      <CoursesSection />
      <AboutUsSection />
      {/* <NewSessionSection /> */}
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
