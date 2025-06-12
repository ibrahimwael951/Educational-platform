"use client";

import Image from "next/image";
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

const instructors = [
  {
    id: 1,
    name: "John Doe",
    position: "Senior Instructor",
    image: "/home/instructor1.png",
    phone: "(568) 367-987-237",
    location: "Hudson, Wisconsin(WI), 54016",
    email: "johndoe@gmail.com",
    expertise: ["Lectures", "My Skill", "Consulting"],
  },
  {
    id: 2,
    name: "Jane Smith",
    position: "Lead Trainer",
    image: "/home/instructor2.png",
    phone: "(412) 555-1234",
    location: "New York, NY, 10001",
    email: "janesmith@gmail.com",
    expertise: ["Public Speaking", "Leadership", "Coaching"],
  },
  {
    id: 3,
    name: "Michael Johnson",
    position: "Expert Coach",
    image: "/home/instructor2.png",
    phone: "(412) 555-1234",
    location: "New York, NY, 10001",
    email: "janesmith@gmail.com",
    expertise: ["Public Speaking", "Leadership", "Coaching"],
  },
  {
    id: 4,
    name: "Emily Davis",
    position: "Head of Training",
    image: "/home/instructor2.png",
    phone: "(412) 555-1234",
    location: "New York, NY, 10001",
    email: "janesmith@gmail.com",
    expertise: ["Public Speaking", "Leadership", "Coaching"],
  },
];

const InstructorDetails = () => {
  const t = useTranslations("CoursesSection");
  const params = useParams();
  const { id } = params;

  const instructor = instructors.find(
    (inst) => inst.name.toLowerCase().replace(/\s+/g, "-") === id
  );

  const [showMore, setShowMore] = useState(false);

  if (!instructor) {
    return (
      <div className="text-center text-red-500">Instructor not found!</div>
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
    <div className="w-full mx-auto mt-30 bg-white dark:bg-neutral-800">
      <div className="flex flex-col w-full justify-between p-5 md:flex-row">
        {/* Left Column */}
        <div className="text-left p-5  dark:text-white md:w-2/3">
          <h1 className="text-lg font-bold dark:text-white">INSTRUCTOR</h1>
          <h1 className="text-3xl mt-3 font-bold dark:text-white">
            {instructor.name}
          </h1>
          <p className="text-sm mt-3 text-purple-600 dark:text-purple-400">
            TEACHER
          </p>

          <div className="flex gap-40">
            <p className="mt-4 text-gray-700 font-bold dark:text-white">
              372,913 <br /> Total learners
            </p>
            <p className="mt-4 text-gray-700 font-bold dark:text-white">
              23,707 <br /> Reviews
            </p>
          </div>

          <h1 className="mt-6 text-xl font-bold dark:text-white">About Me:</h1>

          <div className="relative">
            <p
              className={`text-gray-700 mt-5 dark:text-white whitespace-pre-line transition-all duration-300 ease-in-out ${
                showMore ? "max-h-full" : "max-h-40 overflow-hidden"
              }`}
            >
              {fullText}
            </p>
            {!showMore && (
              <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white dark:from-neutral-800 to-transparent pointer-events-none" />
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
            src={instructor.image}
            alt={instructor.name}
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
