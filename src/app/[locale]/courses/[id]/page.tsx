"use client";

import Image from "next/image";
// 1. Import useLocale for RTL handling
import { useTranslations, useLocale } from "next-intl";
import { useState, useEffect, useMemo } from "react";
import { useParams } from "next/navigation";
import axios from "axios";
import { FaHeart } from "react-icons/fa";
import { CiShoppingCart } from "react-icons/ci";
import { MdOutlinePlayLesson, MdOutlineQuiz } from "react-icons/md";
import { IoLanguage } from "react-icons/io5";
import { Link } from "@/i18n/navigation";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CourseCard from "@/components/ui/CourseCard";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useAuth } from "@/context/authProvider";
import CoursesLoading from "@/components/Courses-Loading";
import { motion } from "framer-motion";
import { fadeUp, fromRight, opacity, animation, fromLeft, hoverScale, hoverFontSize } from "@/animation";
import { Courses } from "@/defaultData";
import CustomButton from "@/components/ui/CustomButton";
import { LiaPoundSignSolid } from "react-icons/lia";

// Interface remains the same
interface Course {
  _id: string;
  title: string;
  description: string;
  instructor: { _id: string; fullName: string; profilePic: string; };
  sections: Record<string, unknown>[];
  price: number;
  category: string;
  level: string;
  language: string[];
  thumbnail: string;
  totalReviews: number;
}

export default function Page() {
  // 2. Use the new 'courseDetails' namespace for translations
  const t = useTranslations("courseDetails");
  const locale = useLocale();

  const params = useParams() as { locale: string; id: string };
  const { id } = params;
  const [course, setCourse] = useState<Course | null>(null);
  const [loading, setLoading] = useState(true);
  const { user, courses } = useAuth();

  const relatedCourses = useMemo(() => {
    if (!courses || !course) return [];
    return courses.filter((c) => c._id !== course._id).sort(() => 0.5 - Math.random()).slice(0, 3);
  }, [courses, course]);

  // 3. Translate the sign-in toast message
  const showSignInToast = () => {
    toast.error(
      <div>
        {t("signInToast.message")}
        <Link href="/auth/login" className="text-blue-500 underline mx-2">
          {t("signInToast.link")}
        </Link>
      </div>,
      { autoClose: 3000 }
    );
  };

  useEffect(() => {
    setLoading(true);
    const fetchCourse = async () => {
      try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/courses/${id}`);
        setCourse(res.data.course);
      } catch (err) {
        console.error("Error fetching course:", err);
        const fallback = Courses.find((course) => course._id === id);
        if (fallback) setCourse(fallback);
      } finally {
        // This ensures loading is always set to false
        setLoading(false);
      }
    };
    if (id) fetchCourse();
  }, [id]);

  const handleAddToCart = () => user ? (window.location.href = "/cart") : showSignInToast();
  const handleToCheckout = () => user ? (window.location.href = "/checkout") : showSignInToast();
  const handleToWishlist = () => user ? (window.location.href = "/wishlist") : showSignInToast();

  if (loading) return <CoursesLoading />;

  // 4. Translate the "Not Found" page
  if (!course) {
    const notFoundTitleWords = t("notFound.title").split(" ");
    return (
      <section className="relative overflow-hidden min-h-screen w-full flex flex-col justify-center items-center py-32 px-10">
        <div className="flex flex-wrap justify-center items-center gap-3 text-4xl lg:text-5xl text-center">
          {notFoundTitleWords.map((word, i) => (
            <motion.h1
              viewport={{ once: true, amount: 0.5 }}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i, duration: 0.5 }}
              key={i}
              className="w-fit dark:text-purple-500 text-purple-500"
            >
              {word}
            </motion.h1>
          ))}
        </div>
        <motion.p
          viewport={{ once: true, amount: 0.5 }}
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-3 text-xl text-neutral-800 dark:text-neutral-300 text-center"
        >
          {t("notFound.description")}
        </motion.p>
        <div className="mt-5 flex justify-center items-center gap-10">
          <CustomButton title={t("notFound.homeButton")} href="/" />
          <CustomButton title={t("notFound.coursesButton")} href="/courses" bg={true} />
        </div>
      </section>
    );
  }

  return (
    // 5. Apply RTL direction to the main section for proper layout
    <section dir={locale === 'ar' ? 'rtl' : 'ltr'} className="relative min-h-screen max-w-7xl w-full mx-auto py-32 px-10">
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} />
      
      {/* 6. Handle RTL layout for main flex container */}
      <div className={`w-full justify-between lg:flex gap-10 ${locale === 'ar' ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
        
        {/* Sidebar */}
        <motion.div {...animation} {...fadeUp} className="hidden lg:flex flex-col gap-3 h-fit w-full max-w-sm rounded-lg bg-neutral-200 dark:bg-neutral-800 p-5">
          <Image src={course.thumbnail} alt={course.title} width={500} height={500} draggable={false} className="w-full object-cover select-none" />
          <h2 className="text-xl font-bold">{course.title}</h2>
          <h2 className="text-md text-neutral-600 dark:text-neutral-400">{course.category}</h2>

          <div className="flex justify-between items-center mt-4">
            <motion.button {...animation} {...fadeUp} {...hoverScale} onClick={handleAddToCart} className="flex mb-2 p-3 rounded-xl hover:bg-transparent hover:border-purple-500 hover:text-purple-500 border bg-purple-500 gap-2 items-center text-white font-bold text-center cursor-pointer duration-100">
              <CiShoppingCart /> {t("addToCart")}
            </motion.button>
            <motion.button {...animation} {...fromLeft} {...hoverScale} onClick={handleToWishlist} className="flex mb-2 p-3 rounded-xl hover:bg-transparent hover:border-purple-500 hover:text-purple-500 border bg-purple-500 gap-2 items-center text-white font-bold text-center cursor-pointer duration-100">
              <FaHeart /> {t("addToWishlist")}
            </motion.button>
          </div>
          <motion.button {...animation} {...fromRight} {...hoverFontSize} transition={{ duration: 0.1 }} onClick={handleToCheckout} className="flex gap-3 text-xl p-3 rounded-xl justify-center items-center border border-purple-500 hover:bg-purple-500 hover:text-white text-purple-500 mt-2 font-bold text-center cursor-pointer duration-100">
            {t("enroll")}
          </motion.button>
        </motion.div>

        {/* Course Content */}
        <div className="flex flex-col gap-5 w-full lg:w-2/3">
          <motion.div {...animation} {...opacity} className="rounded-2xl overflow-hidden">
            <Image className="object-cover max-h-96 h-full select-none" src={course.thumbnail} alt={course.title} draggable={false} width={1000} height={1000} />
          </motion.div>
          <motion.h1 {...animation} {...fromRight} className="text-4xl text-neutral-900 dark:text-white">{course.title}</motion.h1>
          
          <div className="w-full flex justify-between items-center">
            {/* 7. Translate course stats */}
            <motion.div {...animation} {...fadeUp} className="flex justify-start items-center gap-4 flex-wrap">
              <p className="text-neutral-800 dark:text-neutral-300 flex items-center gap-1"><MdOutlinePlayLesson className="text-purple-600" />{t("sections", { count: course.sections.length })}</p>
              <p className="text-neutral-800 dark:text-neutral-300 flex items-center gap-1"><MdOutlineQuiz className="text-purple-600" />{t("quizzes", { count: course.totalReviews })}</p>
              <p className="text-neutral-800 dark:text-neutral-300 flex items-center gap-1"><IoLanguage className="text-purple-600" />{course.language.join(", ")}</p>
            </motion.div>
            <h1 className="flex items-center justify-center text-4xl"><LiaPoundSignSolid className="dark:text-purple-500 text-purple-500" size={35} />{course.price}</h1>
          </div>

          {/* Mobile Buttons */}
          <div className="flex flex-col lg:hidden">
            <div className="flex justify-between items-center gap-5">
              <motion.button {...animation} {...fadeUp} onClick={handleAddToCart} className="flex justify-center w-full mb-2 p-3 rounded-xl bg-purple-500 gap-1 items-center text-white font-bold text-center cursor-pointer">
                <CiShoppingCart /> {t("addToCart")}
              </motion.button>
              <motion.button {...animation} {...fromLeft} onClick={handleToWishlist} className="flex justify-center w-full mb-2 p-3 rounded-xl bg-purple-500 gap-2 items-center text-white font-bold text-center cursor-pointer">
                <FaHeart /> {t("addToWishlist")}
              </motion.button>
            </div>
            <motion.button {...animation} {...fromRight} onClick={handleToCheckout} className="flex gap-3 text-xl p-3 rounded-xl justify-center items-center border border-purple-500 text-purple-500 mt-2 font-bold text-center cursor-pointer">
              {t("enroll")}
            </motion.button>
          </div>

          <motion.hr {...animation} {...opacity} className="bg-purple-500" />

          {/* 8. Translate all section titles and content */}
          <div>
            <motion.h1 {...animation} {...fromRight} className="text-2xl my-2 text-neutral-900 dark:text-white">{t("courseDescription")}</motion.h1>
            <motion.p {...animation} {...fromRight} className="text-neutral-800 dark:text-neutral-300 ltr:ml-4 rtl:mr-4">{t("courseContent")}</motion.p>
          </div>
          <motion.hr {...animation} {...opacity} className="bg-purple-500" />
          <div>
            <motion.h1 {...animation} {...fromRight} className="text-2xl my-2 text-neutral-900 dark:text-white">{t("whatYouWillLearn")}</motion.h1>
            <motion.p {...animation} {...fromRight} className="text-neutral-800 dark:text-neutral-300 ltr:ml-4 rtl:mr-4">{t("learningPlaceholder")}</motion.p>
          </div>

          <motion.h1 {...animation} {...fromRight} className="text-2xl my-2 text-neutral-900 dark:text-white mt-10">{t("instructor")}</motion.h1>
          <motion.div {...animation} {...fromRight}>
            <Link href={`/instructors/${course.instructor._id}`}>
              <div className="flex gap-8 bg-neutral-100 dark:bg-neutral-800 p-5 rounded-lg items-center">
                <Avatar className="w-16 h-16"><AvatarImage src={course.instructor.profilePic} alt={course.instructor.fullName} /><AvatarFallback>{course.instructor.fullName?.split(" ").map((p) => p[0]).join("").toUpperCase()}</AvatarFallback></Avatar>
                <div>
                  <h2 className="text-2xl font-semibold text-neutral-800 dark:text-white cursor-pointer">{course.instructor.fullName}</h2>
                  <p className="text-xl text-neutral-600 dark:text-neutral-300">{t("instructorRole")}</p>
                </div>
              </div>
            </Link>
          </motion.div>
        </div>
      </div>

      <motion.h1 {...animation} {...fromRight} className="text-2xl my-2 text-neutral-900 dark:text-white mt-10">{t("relatedCourses")}</motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-4">
        {relatedCourses.map((related) => (
          <CourseCard key={related._id} id={related._id} image={related.thumbnail} title={related.title} category={related.category} price={related.price} rating={String(related.averageRating)} instructor={{ name: related.instructor.fullName, avatar: related.instructor.profilePic }} description={related.description} />
        ))}
      </div>
    </section>
  );
}