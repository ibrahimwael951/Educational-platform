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

// default data
import {Courses} from "@/defaultData"

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
  const { user } = useAuth();

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
      <section className="min-h-screen w-full flex justify-center items-center">
        <p className="">There is no course with that name or id</p>
      </section>
    );
  return (
    <section className="relative min-h-screen max-w-7xl w-full mx-auto md:flex sm:inline-block gap-10 py-32 px-10">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
      />

      {/* Course Content */}
      <div className="flex flex-col gap-5 w-full md:w-2/3">
        <Image
          className="object-cover max-h-3/4 w-full"
          src={course.thumbnail}
          alt={course.title}
          width={1000}
          height={1000}
        />
        <h1 className="text-4xl text-neutral-900 dark:text-white">
          {course.title}
        </h1>

        <div className="w-full flex justify-start items-center gap-4 flex-wrap">
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
        </div>

        <hr className="bg-neutral-900 dark:bg-neutral-300" />

        <div>
          <h1 className="text-2xl my-2 text-neutral-900 dark:text-white">
            {tCourses("Course-Description")}
          </h1>
          <p className="text-neutral-800 dark:text-neutral-300">
            {course.description}
          </p>
        </div>

        <hr className="bg-neutral-900 dark:bg-neutral-300" />

        <div>
          <h1 className="text-2xl my-2 text-neutral-900 dark:text-white">
            {tCourses("wulftc")}
          </h1>
          <p className="text-neutral-800 dark:text-neutral-300">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit...
          </p>
        </div>

        {/* Instructor Section */}
        <h1 className="text-2xl my-2 text-neutral-900 dark:text-white mt-10">
          {tCourses("instructor-name")}
        </h1>
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

        {/* Related Courses */}
        <h1 className="text-2xl my-2 text-neutral-900 dark:text-white mt-10">
          {tCourses("related")}
        </h1>
        <div className="flex flex-wrap gap-3 mt-4">
          {Array(3)
            .fill(null)
            .map((_, index) => (
              <CourseCard
                key={index}
                id={course._id}
                image={course.thumbnail}
                title={course.title}
                category={course.category}
                price={course.price}
                rating={String(course.averageRating)}
                instructor={{
                  name: course.instructor.fullName,
                  avatar: "/",
                }}
              />
            ))}
        </div>
      </div>

      {/* Sidebar */}
      <div className="h-fit w-full max-w-sm flex flex-col gap-3 rounded-lg bg-neutral-300 dark:bg-neutral-800 p-5">
        <Image
          src={course.thumbnail}
          alt={course.title}
          width={500}
          height={500}
          className="w-full object-cover"
        />
        <h2>{course.title}</h2>
        <h2>{course.category}</h2>

        <div className="flex justify-between items-center">
          <button
            onClick={handleAddToCart}
            className="flex gap-3 p-3 rounded-xl bg-purple-500 mt-6 hover:bg-purple-700 items-center text-white font-bold text-center cursor-pointer"
          >
            <CiShoppingCart /> Add To Cart
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

 