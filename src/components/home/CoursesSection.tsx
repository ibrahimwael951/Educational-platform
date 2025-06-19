"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CourseCard from "./CourseCard";
import CustomButton from "../ui/CustomButton";
import { useAuth } from "@/context/authProvider";
const CoursesSection = () => {
  const t = useTranslations("CoursesSection");
  const { courses ,loading } = useAuth();
  
  return (
    <section className="max-w-7xl mx-auto px-5 md:px-10 md:py-20 pt-32">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
      />

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
          {t("headline")} <span className="circle">{t("highlight")}</span>{" "}
          {t("subheadline")}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true, amount: 0.3 }}
          className="mt-4 md:mt-0"
        ></motion.div>
        <CustomButton
          title={t("button")}
          href="/courses"
          bg={true}
          width={true}
        />
      </div>

      {/* Courses Grid */}
      <div className="w-full grid gird-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6 items-center justify-center select-none gap-5">
        {loading
          ? [1, 2, 3].map((i) => (
              <motion.div
                key={i}
                 initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, amount: 0.5 }}
                className="w-[300px] h-[300px] rounded-xl m-1 bg-neutral-400 dark:bg-neutral-700 animate-pulse"
              />
            ))
          : courses.slice(0, 3).map((course , i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, amount: 0.5 }}
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
                    avatar: course.instructor.profilePic,
                  }}
                />
              </motion.div>
            ))}
      </div>
    </section>
  );
};

export default CoursesSection;
