"use client";

import React, { useState, useEffect, useRef } from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { ToastContainer } from "react-toastify"; 
import "react-toastify/dist/ReactToastify.css";
import CourseCard from "./CourseCard";
import axios from "axios";
import Link from "next/link";

type Course = {
  _id: string;
  title: string;
  description: string;
  instructor: {
    _id: string;
    firstName: string;
    lastName: string;
    fullName: string;
    id: string;
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
  createdAt: string;
  updatedAt: string;
  __v: number;
  rejectionReason?: string;
};


const CoursesSection = () => {
  const t = useTranslations("CoursesSection");
  const sectionRef = useRef(null);
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await axios.get("https://educational-platform-backend-production.up.railway.app/api/courses");
        setCourses(res.data.courses);
      } catch (error) {
        console.error("Failed to fetch courses:", error);
      }
    };

    fetchCourses();
  }, []);

  console.log(courses)

  if (!courses) return <div>Loading...</div>;

  return (
<section ref={sectionRef} className="max-w-7xl mx-auto px-5 md:px-10 md:py-20 pt-32">
  <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} />

  <motion.p
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true, amount: 0.3 }}
    className="bg-gray-50 text-purple-500 px-4 py-2 rounded-md font-medium text-left inline-block"
  >
    {t("sectionTitle")}
  </motion.p>

  {/* Header section */}
  <div className="flex flex-col md:flex-row justify-between items-center mt-6">
    <motion.h1
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      viewport={{ once: true, amount: 0.3 }}
      className="capitalize text-neutral-800 dark:text-white text-3xl font-bold text-center md:text-left"
    >
      {t("headline")} <span className="circle">{t("highlight")}</span> {t("subheadline")}
    </motion.h1>

    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      viewport={{ once: true, amount: 0.3 }}
      className="mt-4 md:mt-0"
    >
      <Link
        href="/courses"
        className="w-50 md:w-60 px-6 py-3 md:px-5 md:py-2 text-base md:text-lg rounded-xl bg-purple-500 hover:bg-purple-700 text-white duration-150 text-center block"
      >
        {t("button")} →
      </Link>
    </motion.div>
  </div>

  {/* Courses Grid */}
  <motion.div
    initial="hidden"
    whileInView="visible"
    variants={{
      hidden: { opacity: 0, y: -30 },
      visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } },
    }}
    viewport={{ once: true, amount: 0.3 }}
    className="flex flex-wrap mt-6 items-center justify-center select-none"
  >
    {courses.map((course) => (
      <motion.div
        key={course._id}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <CourseCard
          id={course._id}
          image={course.thumbnail}
          title={course.title}
          category={course.category}
          price={course.price}
          rating={String(course.averageRating)}
          instructor={{
            name: course.instructor.fullName,
            avatar: "/home/person1.png",
          }}
        />
      </motion.div>
    ))}
  </motion.div>
</section>

  );
};

export default CoursesSection;


