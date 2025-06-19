import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Link } from "@/i18n/navigation";
import "react-toastify/dist/ReactToastify.css";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { LiaPoundSignSolid } from "react-icons/lia";
import { FaStar } from "react-icons/fa";
interface CourseCardProps {
  id: string;
  image: string;
  title: string;
  category: string;
  price: number;
  rating: string;
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
}) => {
 
    return (
      <Link href={`/courses/${id}`}>
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: "spring", stiffness: 300 }}
          className=" lg:w-[300px] overflow-hidden    rounded-xl m-1 justify-center items-center"
        >
          <HoverCard>
            <HoverCardTrigger>
              {/* Course Cover*/}
              <Image
                src={image}
                alt={title}
                draggable={false}
                height={1000}
                width={1000}
                className="w-full h-2/4 object-cover"
              />

              {/* Course Category*/}
              <p className="mt-3 text-xs font-semibold text-white bg-purple-500 dark:text-purple-600 dark:bg-purple-100 px-1 py-1 inline-block rounded-lg">
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
                  <p className="text-lg text-purple-700 flex items-center">
                    {price == 0 ? (
                      "Free"
                    ) : (
                      <>
                        <LiaPoundSignSolid size={20} />
                        {price}
                      </>   
                    )}
                  </p>
                </div>
              </div>
            </HoverCardTrigger>
            <HoverCardContent className="lg:w-[300px] cursor-default">
              <div className="my-2">
                <h1 className="text-neutral-600">Title :</h1>
                <h1 className="ml-2  text-neutral-900">{title}</h1>
              </div>
              <div className="flex items-center gap-3">
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
              <div className="flex justify-between items-center ">
                <div className="flex items-center gap-3">
                  <p className="flex items-center gap-2 ">
                    <FaStar className="text-yellow-300" />
                    {rating}
                  </p>
                </div>

                <button className="cursor-pointer p-2 items-center rounded-xl text-sm bg-purple-500 inline-block hover:bg-purple-700 text-white duration-150">
                  Details →
                </button>
              </div>
            </HoverCardContent>
          </HoverCard>
        </motion.div>
      </Link>
    );
};

export default CourseCard;
