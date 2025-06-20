"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import axios from "axios";
import { FaHeart } from "react-icons/fa";
import { CiShoppingCart } from "react-icons/ci";
import { MdOutlinePlayLesson, MdOutlineQuiz } from "react-icons/md";
import { IoLanguage } from "react-icons/io5";
import { Link } from "@/i18n/navigation";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CourseCard from "@/components/home/CourseCard";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useAuth } from "@/context/authProvider";
import CoursesLoading from "@/components/Courses-Loading";
import { motion } from "framer-motion";
import { fadeUp, fromRight,opacity , animation, fromLeft ,hoverScale , hoverFontSize } from "@/animation";
import { useMemo } from "react";


// default data
import { Courses } from "@/defaultData";
import CustomButton from "@/components/ui/CustomButton";
import { LiaPoundSignSolid } from "react-icons/lia";

interface Course {
  _id: string;
  title: string;
  description: string;
  instructor: {
    _id: string;
    firstName: string;
    lastName: string;
    fullName: string;
    profilePic: string;
  };
  sections: Record<string, unknown>[];
  price: number;
  category: string;
  level: string;
  language: string[];
  requirements: string[];
  whatYouWillLearn: string[];
  tags: string[];
  thumbnail: string;
  averageRating: number;
  totalReviews: number;
  totalStudents: number;
  isPublished: boolean;
  approvalStatus: string;
  rejectionReason?: string;
}

export default function Page() {
  const tCourses = useTranslations("courses");
  const params = useParams() as { locale: string; id: string };
  const { id } = params;
  const [course, setCourse] = useState<Course | null>(null);
  const [loading, setLoading] = useState(true);
  const { user , courses}= useAuth();

const relatedCourses = useMemo(() => {
  if (!courses || !course) return [];
  const otherCourses = courses.filter((c) => c._id !== course._id);
  const shuffled = [...otherCourses].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, 3);
}, [courses, course]);

 
  const showSignInToast = () => {
    toast.error(
      <div>
        You must sign in!
        <Link href="/auth/login" className="text-blue-500 ml-2">
          Sign In
        </Link>
      </div>,
      { autoClose: 3000 }
    );
  };

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/courses/${id}`
        );
        setCourse(res.data.course);
      } catch (err) {
        console.error("Error fetching course:", err);
        setLoading(false);
        const fallback = Courses.find((course) => course._id === id);
        if (fallback) {
          setCourse(fallback);
        }
      }
    };

    if (id) fetchCourse();
  }, [id]);

  const handleAddToCart = () =>
    user ? (window.location.href = "/cart") : showSignInToast();
  const handleToCheckout = () =>
    user ? (window.location.href = "/checkout") : showSignInToast();
  const handleToWishlist = () =>
    user ? (window.location.href = "/wishlist") : showSignInToast();

  if (loading) return <CoursesLoading />;
  if (!course)
    return (
      <section className=" relative overflow-hidden min-h-screen w-full flex flex-col justify-center items-center py-32 px-10">
        <div className="flex flex-wrap justify-center items-center gap-3 text-5xl">
          {[
            "There",
            "is",
            " no",
            "Course",
            "with",
            "that",
            "Name",
            "or",
            "Id",
          ].map((item, i) => (
            <motion.h1
              viewport={{ once: true, amount: 0.5 }}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i, duration: 0.5 }}
              key={i}
              className={`w-fit ${
                item === "Course" && "dark:text-purple-500 text-purple-500"
              }`}
            >
              {item}
            </motion.h1>
          ))}
        </div>
        <motion.p
          viewport={{ once: true, amount: 0.5 }}
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-3 text-xl text-neutral-800 dark:text-neutral-300"
        >
          Please check the Course ID and try again.
        </motion.p>

        <motion.span
          viewport={{ once: true, amount: 0.5 }}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 0.2, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="absolute top-2/4 left-2/4 -translate-2/4 text-[60vw] lg:text-[40vw] -z-10 text-neutral-500"
        >
          404
        </motion.span>
        <div className="mt-5 flex justify-center items-center gap-10">
          <CustomButton title="Go Back to Home" href="/" />
          <CustomButton title="Courses" href="/courses" bg={true} />
        </div>
      </section>
    );
  return (
    <section className="relative min-h-screen max-w-7xl w-full mx-auto  py-32 px-10">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
      />
      <div className="w-full  justify-between lg:flex flex-row-reverse gap-10 ">
       {/* Sidebar */}
        <motion.div {...animation} {...fadeUp} className=" hidden lg:flex flex-col gap-3  h-fit w-full max-w-sm  rounded-lg bg-neutral-200 dark:bg-neutral-800 p-5">
        <Image
          src={course.thumbnail}
          alt={course.title}
          width={500}
          height={500}
          draggable={false}
          className="w-full object-cover select-none"
        />
        <h2>{course.title}</h2>
        <h2>{course.category}</h2>

        <div className="flex justify-between items-center">
          <motion.button {...animation} {...fadeUp} {...hoverScale}
            onClick={handleAddToCart}
            className="flex mb-2 p-3 rounded-xl hover:bg-transparent hover:border-purple-500 hover:text-purple-500 border   bg-purple-500 gap-4 items-center  text-white font-bold text-center cursor-pointer duration-100"
          >
            <CiShoppingCart /> Add To Cart
          </motion.button>
 
          <motion.button {...animation} {...fromLeft} {...hoverScale}
            onClick={handleToWishlist}
            className="flex mb-2 p-3 rounded-xl hover:bg-transparent hover:border-purple-500 hover:text-purple-500 border   bg-purple-500 gap-4 items-center  text-white font-bold text-center cursor-pointer duration-100"
          >
            <FaHeart /> Add To Wishlist
          </motion.button>
        </div>

        <motion.button {...animation} {...fromRight} {...hoverFontSize} transition={{duration:0.1}}
          onClick={handleToCheckout}
          className="flex gap-3 text-xl p-3 rounded-xl justify-center items-center border border-purple-500 hover:bg-purple-500 hover:text-white text-purple-500 mt-2 font-bold text-center cursor-pointer duration-100"
        >
          Enroll
        </motion.button>
      </motion.div>

      {/* Course Content */}
      <div className="flex flex-col gap-5 w-full lg:w-2/3 max-h-3/4 rounded-2xl overflow-hidden">
        <motion.div
          {...animation}
          {...opacity}
           
          className=""
        >
          <Image
            className="object-cover max-h-96 h-full select-none   "
            src={course.thumbnail}
            alt={course.title}
            draggable={false}
            width={1000}
            height={1000}
          />
        </motion.div>
        <motion.h1 
        {...animation}
        {...fromRight}

        className="text-4xl text-neutral-900 dark:text-white">
          {course.title}
        </motion.h1>
<div className="w-full flex justify-between item-center ">

        <motion.div {...animation} {...fadeUp} className="w-full flex justify-start items-center gap-4 flex-wrap overflow-hidden">
          <p className="text-neutral-800 dark:text-neutral-300 flex items-center gap-1">
            <MdOutlinePlayLesson className="text-purple-600" />
            {course.sections.length} Sections
          </p>
          <p className="text-neutral-800 dark:text-neutral-300 flex items-center gap-1">
            <MdOutlineQuiz className="text-purple-600" />
            {course.totalReviews} Quizzes
          </p>
          <p className="text-neutral-800 dark:text-neutral-300 flex items-center gap-1">
            <IoLanguage className="text-purple-600" />
            {course.language.join(", ")}
          </p>
        </motion.div>

        <h1 className="flex items-center justify-center text-4xl ">
          <LiaPoundSignSolid  className="dark:text-purple-500 text-purple-500" size={35} />{course.price}
        </h1>
</div>
        <div className="flex flex-col lg:hidden">

          <div className="flex justify-between items-center gap-5">
          <motion.button {...animation} {...fadeUp} 
            onClick={handleAddToCart}
            className="flex justify-center w-8/12 mb-2 p-3 rounded-xl hover:bg-transparent hover:border-purple-500 hover:text-purple-500 border   bg-purple-500 gap-4 items-center  text-white font-bold text-center cursor-pointer duration-100"
          >
            <CiShoppingCart /> Add To Cart
          </motion.button>
 
          <motion.button {...animation} {...fromLeft} 
            onClick={handleToWishlist}
            className="flex justify-center w-8/12 mb-2 p-3 rounded-xl hover:bg-transparent hover:border-purple-500 hover:text-purple-500 border   bg-purple-500 gap-4 items-center  text-white font-bold text-center cursor-pointer duration-100"
            >
            <FaHeart /> Add To Wishlist
          </motion.button>
          </div>

          <motion.button {...animation} {...fromRight} {...hoverFontSize} transition={{duration:0.1}}
            onClick={handleToCheckout}
            className="flex gap-3 text-xl p-3 rounded-xl justify-center items-center border border-purple-500 hover:bg-purple-500 hover:text-white text-purple-500 mt-2 font-bold text-center cursor-pointer duration-100"
            >
            Enroll
          </motion.button>
        </div>
        <motion.hr {...animation} {...opacity} className="bg-purple-500" />

        <div>
          <motion.h1 {...animation} {...fromRight} className="text-2xl my-2 text-neutral-900 dark:text-white">
            {tCourses("Course-Description")}
          </motion.h1>
          <motion.p {...animation} {...fromRight} className="text-neutral-800 dark:text-neutral-300 ml-4">
            {course.description}
          </motion.p>
        </div>

        <motion.hr {...animation} {...opacity} className="bg-purple-500" /> 

        <div>
          <motion.h1 {...animation} {...fromRight}  className="text-2xl my-2 text-neutral-900 dark:text-white">
            {tCourses("wulftc")}
          </motion.h1>
         <motion.p {...animation} {...fromRight} className="text-neutral-800 dark:text-neutral-300 ml-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit...
          </motion.p>
        </div>

        {/* Instructor Section */}
        <motion.h1 {...animation} {...fromRight}  className="text-2xl my-2 text-neutral-900 dark:text-white mt-10">
          {tCourses("instructor-name")}
        </motion.h1> 
        <motion.div {...animation} {...fromRight}>
          <Link href={`/instructors/${course.instructor._id}`}>
            <div className="flex gap-8 bg-neutral-100 dark:bg-neutral-800 p-5 rounded-lg">
              <div className="flex items-center gap-6">
                <Avatar className="w-16 h-16">
                  <AvatarImage
                    src={course.instructor.profilePic}
                    alt={course.instructor.fullName}
                  />
                  <AvatarFallback>
                    {course.instructor.fullName   
                      ?.split(" ")
                      .map((part) => part[0])
                      .join("")
                      .slice(0, 2)
                      .toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <div className="text-neutral-900 dark:text-white">
                  <h2 className="text-2xl font-semibold text-neutral-800 dark:text-white cursor-pointer">
                    {course.instructor.fullName}
                  </h2>

                  <p className="text-xl">Instructor</p>
                </div>
              </div>
            </div>
          </Link>
        </motion.div>
        </div>
        </div>

        {/* Related Courses */}
        <motion.h1 {...animation} {...fromRight}  className="text-2xl my-2 text-neutral-900 dark:text-white mt-10">
          {tCourses("related")}
        </motion.h1>
     <div className="flex flex-wrap lg:gap-3 mt-4">
  {relatedCourses.map((related, index) => (
    <CourseCard
      key={index}
      id={related._id}
      image={related.thumbnail}
      title={related.title}
      category={related.category}
      price={related.price}
      rating={String(related.averageRating)}  
      instructor={{
        name: related.instructor.fullName,
        avatar: related.instructor.profilePic,
      }}  
    />
  ))}
</div>

     
    </section>
  );
}
