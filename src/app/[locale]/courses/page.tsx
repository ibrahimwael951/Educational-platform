import React from "react";
import CourseCard from "@/components/home/CourseCard";
import { useTranslations } from "next-intl";

const CoursesPage = () => {
  const t = useTranslations("courses");

  return (
    <section className="container mx-auto px-6 py-10 mt-10">
      <div className="flex justify-between items-center mt-10">
        <h1 className="capitalize text-neutral-800 dark:text-white">
          {t("title")}
          <span className="circle"> {t("subtitle")}</span>
        </h1>
      </div>

      <div className="flex flex-wrap mt-6 items-center justify-center select-none">
        {Array(8)
          .fill(null)
          .map((_, index) => (
            <CourseCard
              key={index}
              image="/home/card1.png"
              title={t("title")}
              category={t("category")}
              price={t("price")}
              rating={t("rating")}
              lessons={t("lessons")}
              duration={t("duration")}
              students={t("students")}
              instructor={{
                name: t("instructor"),
                avatar: "/home/person1.png",
              }}
            />
          ))}
      </div>
    </section>
  );
};

export default CoursesPage;
