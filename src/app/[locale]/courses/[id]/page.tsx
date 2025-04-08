"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { useState, useEffect } from "react";
import { FaHeart } from "react-icons/fa";
import { CiShoppingCart } from "react-icons/ci";
import { MdOutlinePlayLesson, MdOutlineAccessTime, MdOutlineQuiz } from "react-icons/md";
import { IoPersonOutline, IoLanguage } from "react-icons/io5";
import { Link } from "@/i18n/navigation";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CourseCard from "@/components/home/CourseCard";

export default function Page() {
  const tCourses = useTranslations("courses");
  const tSection = useTranslations("CoursesSection");

  const courseData = {
    title: tSection("course.title"),
    category: tSection("course.category"),
    price: tSection("course.price"),
    rating: tSection("course.rating"),
    lessons: tSection("course.lessons"),
    duration: tSection("course.duration"),
    students: tSection("course.students"),
    instructor: tSection("course.instructor"),
  };

  const [isUserLoggedIn, setIsUserLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsUserLoggedIn(Boolean(localStorage.getItem("user")));
    }
  }, []);

  const showSignInToast = () => {
    toast.error(
      <div>
        You must sign in!
        <Link href="/sign-in" className="text-blue-500 ml-2">Sign In</Link>
      </div>,
      { autoClose: false }
    );
  };

  const handleAddToCart = () => isUserLoggedIn ? window.location.href = "/cart" : showSignInToast();
  const handleToCheckout = () => isUserLoggedIn ? window.location.href = "/checkout" : showSignInToast();
  const handleToWishlist = () => isUserLoggedIn ? window.location.href = "/wishlist" : showSignInToast();

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
    }
  ];

  return (
    <section className="relative min-h-screen max-w-7xl w-full mx-auto md:flex sm:inline-block gap-10 py-32 px-10">
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} />

      <div className="flex flex-col gap-5 w-full md:w-2/3">
        <Image
          className="object-cover max-h-3/4 w-full"
          src="/home/card1.png"
          alt={courseData.title}
          width={1000}
          height={1000}
        />
        <h1 className="text-4xl text-neutral-900 dark:text-white">{courseData.title}</h1>

        <div className="w-full flex justify-start items-center gap-4 flex-wrap">
          <p className="text-neutral-800 dark:text-slate-300 flex items-center gap-1">
            <MdOutlinePlayLesson className="text-purple-600" />
            {courseData.lessons}
          </p>
          <p className="text-neutral-800 dark:text-slate-300 flex items-center gap-1">
            <MdOutlineQuiz className="text-purple-600" />
            Quizzes 10
          </p>
          <p className="text-neutral-800 dark:text-slate-300 flex items-center gap-1">
            <MdOutlineAccessTime className="text-purple-600" />
            {courseData.duration}
          </p>
          <p className="text-neutral-800 dark:text-slate-300 flex items-center gap-1">
            <IoPersonOutline className="text-purple-600" />
            {courseData.students}
          </p>
          <p className="text-neutral-800 dark:text-slate-300 flex items-center gap-1">
            <IoLanguage className="text-purple-600" />
            Languages: English, Arabic, French
          </p>
        </div>

        <hr className="bg-neutral-900 dark:bg-slate-300" />

        <div>
          <h1 className="text-2xl my-2 text-neutral-900 dark:text-white">{tCourses("Course-Description")}</h1>
          <p className="text-neutral-800 dark:text-slate-300">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit...
          </p>
        </div>

        <hr className="bg-neutral-900 dark:bg-slate-300" />

        <div>
          <h1 className="text-2xl my-2 text-neutral-900 dark:text-white">{tCourses("wulftc")}</h1>
          <p className="text-neutral-800 dark:text-slate-300">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit...
          </p>

          <h1 className="text-2xl my-2 text-neutral-900 dark:text-white mt-10">{tCourses("instructor-name")}</h1>
          <div className="flex gap-8 bg-neutral-100 dark:bg-neutral-800 p-5 rounded-lg">
            {instructors.map((instructor) => (
              <div key={instructor.id} className="flex items-center gap-6">
                <Image
                  src={instructor.image}
                  alt={instructor.name}
                  width={150}
                  height={150}
                  className="rounded-full"
                />
                <div className="text-neutral-900 dark:text-white">
                  <h2 className="text-2xl font-semibold">{instructor.name}</h2>
                  <p className="text-xl">{instructor.position}</p>
                  <p>{instructor.phone}</p>
                  <p>{instructor.location}</p>
                  <p>{instructor.email}</p>
                  <div className="flex gap-3 mt-4">
                    <a href={`tel:${instructor.phone}`} className="text-purple-600">Call</a>
                    <a href={`mailto:${instructor.email}`} className="text-purple-600">Email</a>
                  </div>
                  <h3 className="text-xl text-gray-900 mt-5">Expertise:</h3>
                  <ul className="list-disc pl-5">
                    {instructor.expertise.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <h1 className="text-2xl my-2 text-neutral-900 dark:text-white mt-10">{tCourses("related")}</h1>
          <div className="flex flex-wrap gap-1 mt-4">
            {Array(3).fill(null).map((_, index) => (
              <CourseCard
                key={index}
                id={index}
                image="/home/card1.png"
                title={courseData.title}
                category={courseData.category}
                price={courseData.price}
                rating={courseData.rating}
                lessons={courseData.lessons}
                duration={courseData.duration}
                students={courseData.students}
                instructor={{
                  name: courseData.instructor,
                  avatar: "/home/person1.png",
                }}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="h-fit w-full max-w-sm flex flex-col gap-3 rounded-lg bg-slate-300 dark:bg-neutral-800 p-5">
        <Image
          src="/home/card1.png"
          alt={courseData.title}
          width={500}
          height={500}
          className="w-full object-cover"/>
        <h2>{courseData.title}</h2>
        <h2>{courseData.category}</h2>

        <div className="flex justify-between items-center">
          <button
            onClick={handleAddToCart}
            className="flex gap-3 p-3 rounded-xl bg-purple-500 mt-6 hover:bg-purple-700 items-center text-white font-bold text-center cursor-pointer"
          >
            <CiShoppingCart />Add To Cart
          </button>
          <button
            onClick={handleToWishlist}
            className="flex -mb-5 p-3 rounded-xl bg-purple-500 gap-4 items-center hover:bg-purple-700 text-white font-bold text-center cursor-pointer"
          >
            <FaHeart /> Add To Wishlist
          </button>
        </div>

        <button
          onClick={handleToCheckout}
          className="flex gap-3 p-3 rounded-xl justify-center items-center bg-purple-500 mt-2 hover:bg-purple-700 text-white font-bold text-center cursor-pointer"
        >
        Enroll
        </button>
      </div>
    </section>
  );
}
