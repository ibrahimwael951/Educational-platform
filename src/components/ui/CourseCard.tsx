"use client";
import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Link } from "@/i18n/navigation";
import "react-toastify/dist/ReactToastify.css";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LiaPoundSignSolid } from "react-icons/lia";
import { FaStar } from "react-icons/fa";
interface CourseCardProps {
  id: string;
  image: string;
  title: string;
  category: string;
  price: number;
  rating: string;
  description: string;
  instructor: {
    name: string;
    avatar: string;
  };
}

const CourseCard: React.FC<CourseCardProps> = ({
  id,
  image,
  title,
  category,
  price,
  rating,
  instructor,
  description,
}) => {
  const t = useTranslations("CoursesSection");

  return (
    <Link href={`/courses/${id}`}>
      <motion.div
        initial="rest"
        whileHover={"hover"}
        className="relative lg:w-[300px] rounded-xl m-1  "
      >
        <div className="overflow-hidden rounded-2xl">
          {/* Course Cover*/}
          <div className="relative w-full h-2/4 ">
            <p className="p-2 bg-purple-500 rounded-2xl absolute right-2 top-2 flex items-center gap-1 ">
              <FaStar className="text-yellow-300" />
              {rating}
            </p>
            <Image
              src={image}
              alt={title}
              draggable={false}
              height={1000}
              width={1000}
              className="w-full h-2/4 object-cover"
            />
          </div>
          {/* Course Category*/}
          <p className="mt-3 text-xs font-semibold text-white bg-purple-500 dark:text-purple-500 dark:bg-purple-100 px-1 py-1 inline-block rounded-lg">
            {category}
          </p>

          <div className="mt-2">
            {/* title and Price*/}
            <div className="flex justify-between items-center text-sm">
              {title.length <= 20 ? (
                <h1 className="text-md">{title}</h1>
              ) : (
                <h1 className="text-md">
                  {title.split(" ").slice(0, 3).join(" ") + "..."}
                </h1>
              )}
              <p className="text-lg text-purple-500 flex items-center">
                {price == 0 ? (
                  t("freeCourse")
                ) : (
                  <>
                    <LiaPoundSignSolid size={20} />
                    {price}
                  </>
                )}
              </p>
            </div>
          </div>
        </div>

        <motion.div
          variants={{
            rest: { display: "none" ,scale:0}, 
            hover: { display: "inline" ,scale:1},
          }}
          transition={{ duration: 0.04 }}
          className=" bg-neutral-200 dark:bg-neutral-900 border border-purple-500 rounded-2xl p-3 px-5 absolute top-full  z-20 w-full lg:w-[300px] cursor-default"
        >
          <div className="my-4">
            <h1 className="text-purple-500 dark:text-purple-500 font-semibold uppercase ">
              {t("hoverTitle")}
            </h1>
            <h1 className="ml-2  text-neutral-900">{title}</h1>
          </div>
          <div className="my-4">
            <h1 className="font-semibold text-purple-500 dark:text-purple-500 uppercase">
              Description
            </h1>
            <p className="ml-2">{description}</p>
          </div>   
          <div className=" my-4 flex items-center gap-3">
            <Avatar className="w-10 h-10">
              <AvatarImage src={instructor.avatar} alt={instructor.name} />
              <AvatarFallback>
                {instructor.name
                  ?.split(" ")
                  .map((part) => part[0])
                  .join("")
                  .slice(0, 2)
                  .toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <p className="font-sm text-neutral-800 dark:text-white">
              {instructor.name}
            </p>
          </div>
        </motion.div>
      </motion.div>
    </Link>
  );
};

export default CourseCard;
