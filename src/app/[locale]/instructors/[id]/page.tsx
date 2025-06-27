"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useParams } from "next/navigation";
import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { FaFacebook, FaTwitter, FaLinkedin, FaWhatsapp, FaArrowUp, FaArrowDown } from "react-icons/fa";
import CourseCard from "@/components/ui/CourseCard";
import { Instructors } from "@/defaultData";
import CustomButton from "@/components/ui/CustomButton";

const InstructorDetails = () => {
  const t = useTranslations("instructorDetails");
  const tCourses = useTranslations("CoursesSection"); 
  const locale = useLocale();

  const params = useParams();
  const { id } = params;

  const instructor = Instructors.find((inst) => inst._id.toLowerCase().replace(/\s+/g, "-") === id);
  const [showMore, setShowMore] = useState(false);

  // "Not Found" page with original design and animations, but translated text
  if (!instructor) {
    const notFoundTitleWords = t("notFound.title").split(" ");
    return (
      <div className="relative min-h-screen flex flex-col justify-center items-center gap-5 px-4">
        <div className="text-7xl w-fit mb-2 mx-auto flex gap-5 flex-wrap justify-center">
          {notFoundTitleWords.map((Item, i) => (
            <motion.h1
              key={i}
              viewport={{ once: true, amount: 0.4 }}
              // Applying the exact animation logic from the reference
              initial={{
                y: i === 1 ? 60 : -60,
                opacity: 0,
                color: i === 1 ? "oklch(0.627 0.265 303.9)" : "",
              }}
              whileInView={{ y: 0, opacity: 1 }}
              className="w-fit"
            >
              {Item}
            </motion.h1>
          ))}
        </div>
        <motion.p
          viewport={{ once: true, amount: 0.4 }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center"
        >
          {t("notFound.description")}
        </motion.p>
        <div className="mt-5 flex justify-center items-center gap-10">
            {/* Applying the exact CustomButton props from the reference */}
            <CustomButton 
                delay={0.7} x={-60} y={0} 
                title={t("notFound.homeButton")} 
                href="/" 
                bg={false} 
            />
            <CustomButton 
                delay={1} x={-60} y={0} 
                title={t("notFound.instructorsButton")} 
                href="/instructors" 
                bg={true} 
            />
        </div>
        <motion.span
          viewport={{ once: true, amount: 0.5 }}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 0.2, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="absolute top-2/4 left-2/4 -translate-2/4 text-[60vw] lg:text-[40vw] -z-10 text-neutral-500"
        >
          404
        </motion.span>
      </div>
    );
  }

  return (
    // Apply RTL direction and styles from reference
    <div dir={locale === 'ar' ? 'rtl' : 'ltr'} className="w-full mx-auto mt-30">
      {/* Handle flex-direction for RTL and use classes from reference */}
      <div className={`flex flex-col-reverse w-full justify-between p-5 ${locale === 'ar' ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
        
        {/* Left Column (Text content) - with reference styles */}
        <div className="text-left p-5 dark:text-white md:w-2/3 ltr:text-left rtl:text-right">
          <h1 className="text-lg font-bold dark:text-white">{t("label")}</h1>
          <h1 className="text-3xl mt-3 font-bold dark:text-white">{instructor.fullName}</h1>
          <p className="text-sm mt-3 text-purple-600 dark:text-purple-400">{t("role")}</p>

          <div className="flex gap-40">
            <p className="mt-4 text-neutral-700 font-bold dark:text-white">
              372,913 <br /> {t("stats.totalLearners")}
            </p>
            <p className="mt-4 text-neutral-700 font-bold dark:text-white">
              23,707 <br /> {t("stats.reviews")}
            </p>
          </div>+

          <h1 className="mt-6 text-xl font-bold dark:text-white">{t("aboutMeTitle")}</h1>
          <div className="relative">
             {/* Using exact className from reference for show more/less */}
            <p
              className={`text-neutral-700 mt-5 dark:text-white whitespace-pre-line transition-all duration-300 ease-in-out ${
                showMore ? "max-h-full" : "max-h-40 overflow-hidden"
              }`}
            >
              {t("aboutMeContent")} 
            </p>
            {/* Gradient fade-out effect from reference */}
            {!showMore && <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white dark:from-neutral-900 to-transparent pointer-events-none" />}
          </div>

          <button
            onClick={() => setShowMore(!showMore)}
             // Using exact className from reference for the button
            className="mt-4 text-sm text-purple-700 font-semibold bg-purple-100 px-4 py-2 rounded hover:bg-purple-200 cursor-pointer flex items-center gap-2"
          >
            {showMore ? t("showLess") : t("showMore")}
            <span className="inline-block transform transition-transform duration-200">
              {showMore ? <FaArrowUp /> : <FaArrowDown />}
            </span>
          </button>

          <h1 className="mt-6 text-xl font-bold dark:text-white">{t("myCoursesTitle")}</h1>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 w-fit gap-5 mt-4">
            {Array(3).fill(null).map((_, index) => (
              <CourseCard
                key={index}
                id={`${index}`}
                image="/home/card1.png"
                title={tCourses("course.title")}
                category={tCourses("course.category")}
                price={22}
                description={" "}
                rating={tCourses("course.rating")}
                instructor={{ name: tCourses("course.instructor"), avatar: "/home/person1.png" }}
              />
            ))}
          </div>
        </div>

        {/* Right Column (Image and Socials) - with reference styles */}
        <div className="p-5 md:w-1/3">
          <Image src={instructor.profilePic} alt={instructor.fullName} width={300} height={300} className="rounded-full mx-auto" />
          <div className="flex gap-10 items-center justify-center mt-5">
            {/* Using div wrapper with exact styles from reference */}
            <a href="#" className="text-purple-700 border border-purple-700 p-2 hover:bg-purple-300 cursor-pointer"><FaFacebook /></a>
            <a href="#" className="text-purple-700 border border-purple-700 p-2 hover:bg-purple-300 cursor-pointer"><FaTwitter /></a>
            <a href="#" className="text-purple-700 border border-purple-700 p-2 hover:bg-purple-300 cursor-pointer"><FaLinkedin /></a>
            <a href="#" className="text-purple-700 border border-purple-700 p-2 hover:bg-purple-300 cursor-pointer"><FaWhatsapp /></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructorDetails;