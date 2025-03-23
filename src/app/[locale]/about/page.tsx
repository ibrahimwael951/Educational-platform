import AboutUsSection from "@/components/home/aboutUsSection";
import WhyChooseUsSection from "@/components/home/chooseUsSection";
import InstructorsSection from "@/components/home/InstructorsSection";
import SkillsSection from "@/components/home/skillsSection";
import TestimonialSection from "@/components/home/testimonialSection";

const Page = () => {
  return (
    <main>
      <AboutUsSection />
      <WhyChooseUsSection />
      <SkillsSection />
      <TestimonialSection />
      <InstructorsSection />
    </main>
  );
};

export default Page;
