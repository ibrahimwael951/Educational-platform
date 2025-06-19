"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useParams } from "next/navigation";
import { useState } from "react";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaWhatsapp,
  FaArrowUp,
  FaArrowDown,
} from "react-icons/fa";
import { useTranslations } from "next-intl";
import CourseCard from "@/components/home/CourseCard";
import { Instructors } from "@/defaultData";
import Link from "next/link";
import CustomButton from "@/components/ui/CustomButton";

const InstructorDetails = () => {
  const t = useTranslations("CoursesSection");
  const params = useParams();
  const { id } = params;

  const instructor = Instructors.find(
    (inst) => inst._id.toLowerCase().replace(/\s+/g, "-") === id
  );

  const [showMore, setShowMore] = useState(false);

  if (!instructor) {
    return (
      <div className="relative  min-h-screen flex flex-col justify-center items-center gap-5">
        <div className="text-7xl w-fit mb-2 mx-auto flex gap-5  flex-wrap justify-center">
          {["Instructor", "not", "found"].map((Item, i) => (
            <motion.h1
              key={i}
              viewport={{ once: true, amount: 0.4 }}
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
        >
          Please check the instructors ID and try again.
        </motion.p>
          <div className="mt-5 flex justify-center items-center gap-10">
          {[
            { href: "/", title: "Back to Home" },
            { href: "/instructors", title: "Instructors" },
          ].map((items, i) => ( 
          <CustomButton 
          key={i}
          delay={i===1 ?  1  : 0.7 }
          x={-60}
          y={0}
          title={items.title} href={items.href}  bg={i==1 ? true : false} />
          ))} 
        </div>
            <motion.span  
                  viewport={{once:true, amount:0.5}}
                  initial={{opacity:0 , y:60}}
                  whileInView={{opacity:0.2, y:0}}
                  transition={{delay: 0.2, duration:0.5}}
                  className="absolute top-2/4 left-2/4 -translate-2/4 text-[60vw] lg:text-[40vw] -z-10 text-neutral-500"
                >
                    404
              </motion.span>
      </div>
    );
  }

  const shortText = `I love writing code and I love teaching others
  I always loved coding, I love diving into complex problems and solving and I still
  think that it's really an amazing feeling to see an app or program you built from
  scratch`;

  const fullText = `${shortText}
    You might think that I studied programming and that I got a CS degree - but I didn't!
    I always liked coding and it was a great hobby but I actually went for "Biomedical
    Engineering" when it was time to go to university.
    And I don't regret it! It was a fun time and I enjoyed all the things taught there. But
    soon after taking my first steps in typical Biomedical Engineering jobs, it was very 
    clear to me that I had to go back to coding. And that's what I did.`;

  return (
    <div className="w-full mx-auto mt-30  ">
      <div className="flex flex-col-reverse w-full justify-between p-5 md:flex-row">
        {/* Left Column */}
        <div className="text-left p-5  dark:text-white md:w-2/3">
          <h1 className="text-lg font-bold dark:text-white">INSTRUCTOR</h1>
          <h1 className="text-3xl mt-3 font-bold dark:text-white">
            {instructor.fullName}
          </h1>
          <p className="text-sm mt-3 text-purple-600 dark:text-purple-400">
            TEACHER
          </p>

          <div className="flex gap-40">
            <p className="mt-4 text-neutral-700 font-bold dark:text-white">
              372,913 <br /> Total learners
            </p>
            <p className="mt-4 text-neutral-700 font-bold dark:text-white">
              23,707 <br /> Reviews
            </p>
          </div>

          <h1 className="mt-6 text-xl font-bold dark:text-white">About Me:</h1>

          <div className="relative">
            <p
              className={`text-neutral-700 mt-5 dark:text-white whitespace-pre-line transition-all duration-300 ease-in-out ${
                showMore ? "max-h-full" : "max-h-40 overflow-hidden"
              }`}
            >
              {fullText}
            </p>
            {!showMore && (
              <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white dark:from-neutral-900 to-transparent pointer-events-none" />
            )}
          </div>

          <button
            onClick={() => setShowMore(!showMore)}
            className="mt-4 text-sm text-purple-700 font-semibold bg-purple-100 px-4 py-2 rounded hover:bg-purple-200 cursor-pointer"
          >
            {showMore ? "Show less" : "Show more"}{" "}
            <span className="inline-block transform transition-transform duration-200">
              {showMore ? <FaArrowUp /> : <FaArrowDown />}
            </span>
          </button>

          <h1 className="mt-6 text-xl font-bold dark:text-white ">
            My courses
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-5 mt-4">
            {Array(3)
              .fill(null)
              .map((_, index) => (
                <CourseCard
                  key={index}
                  id={`${index}`}
                  image="/home/card1.png"
                  title={t("course.title")}
                  category={t("course.category")}
                  price={22}
                  rating={t("course.rating")}
                  instructor={{
                    name: t("course.instructor"),
                    avatar: "/home/person1.png",
                  }}
                />
              ))}
          </div>
        </div>

        {/* Right Column */}
        <div className="p-5 md:w-1/3">
          <Image
            src={instructor.profilePic}
            alt={instructor.fullName}
            width={300}
            height={300}
            className="rounded-full mx-auto"
          />
          <div className="flex gap-10 items-center justify-center mt-5">
            <div className="text-purple-700 border border-purple-700 p-2 hover:bg-purple-300 cursor-pointer">
              <FaFacebook />
            </div>
            <div className="text-purple-700 border border-purple-700 p-2 hover:bg-purple-300 cursor-pointer">
              <FaTwitter />
            </div>
            <div className="text-purple-700 border border-purple-700 p-2 hover:bg-purple-300 cursor-pointer">
              <FaLinkedin />
            </div>
            <div className="text-purple-700 border border-purple-700 p-2 hover:bg-purple-300 cursor-pointer">
              <FaWhatsapp />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default InstructorDetails;
