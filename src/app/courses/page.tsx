import React from 'react';
import CourseCard from '@/components/home/CourseCard';

const CoursesPage = () => {
return (
<section className="container mx-auto px-6 py-10 mt-10">
      <div className="flex justify-between items-center mt-10">
        <h1 className="capitalize">
          EduQuest Courses
          <span className="circle"> Student</span> can <br /> join with us.
        </h1>
      </div>

      <div className=" flex flex-wrap mt-6 items-center justify-center select-none">
        {Array(8)
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

export default CoursesPage;