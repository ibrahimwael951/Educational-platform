"use client";

import React from "react";
import { useTranslations } from "next-intl";
import CourseCard from "./CourseCard";
import Link from "next/link";

const CoursesSection = () => {
  const t = useTranslations("CoursesSection");

  return (
    <section className=" max-w-7xl mx-auto px-5 md:px-10 md:py-20 pt-32 ">
      <p className="bg-[#E9E2FF] text-[#704FE6] px-4 py-2 rounded-md font-medium text-left inline-block">
        {t("sectionTitle")}
      </p>

      <div className="flex flex-col md:flex-row justify-between items-center mt-6">
        <h1 className="capitalize text-neutral-800 dark:text-white">
          {t("headline")} <span className="circle">{t("highlight")}</span> {t("subheadline")}
        </h1>
        <Link
          href="/courses"
          className="w-52 md:w-60  px-6 py-3 md:px-5 md:py-2 text-base md:text-lg rounded-xl bg-purple-500   hover:bg-purple-700 text-white duration-150 text-center"
        >
          {t("button")} →
        </Link>
      </div>

      <div className="flex flex-wrap mt-6 items-center justify-center select-none">
        {Array(3)
          .fill(null)
          .map((_, index) => (
            <CourseCard
              id={index}
              key={index}
              image="/home/card1.png"
              title={t("course.title")}
              category={t("course.category")}
              price={t("course.price")}
              rating={t("course.rating")}
              lessons={t("course.lessons")}
              duration={t("course.duration")}
              students={t("course.students")}
              instructor={{
                name: t("course.instructor"),
                avatar: "/home/person1.png",
              }}
            />
          ))}
      </div>
    </section>
  );
};

export default CoursesSection;
