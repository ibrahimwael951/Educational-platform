import React from "react";
import CourseCard from "./CourseCard";

const CoursesSection = () => {
  return (
    <section className="container mx-auto px-6 py-10">
      <p className="bg-[#E9E2FF] text-[#704FE6] px-4 py-2 rounded-md font-medium text-left inline-block">
        Top Popular Courses
      </p>

      <div className="flex justify-between items-center mt-6">
        <h1 className="capitalize">
          Edunity Course
          <span className="circle"> Student</span> can <br /> join with us.
        </h1>
        <a href="#" className="button2">
          Load More Courses →
        </a>
      </div>

      <div className="grid max-[600px]:grid-cols-1 max-[769px]:grid-cols-2 max-[4000px]:grid-cols-3 gap-4 mt-6 items-center justify-center">
        {Array(6)
          .fill(null)
          .map((_, index) => (
            <CourseCard
              key={index}
              image="/home/card1.png"
              title="It Statistics Data Science And Business Analysis"
              category="Digital Marketing"
              price="$50.00"
              rating="4.5K"
              lessons="10"
              duration="19h 30m"
              students="20+"
              instructor={{
                name: "Samantha",
                avatar: "/home/person1.png",
              }}
            />
          ))}
      </div>
    </section>
  );
};

export default CoursesSection;
