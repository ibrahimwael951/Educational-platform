import React from "react";
import CourseCard from "./CourseCard";

const CoursesSection = () => {
    return (
      <section className="container mx-auto px-6 py-10 ">
        
        <p className="bg-[#E9E2FF] text-[#704FE6] px-4 py-2 rounded-md font-medium text-center inline-block">
          Top Popular Courses
        </p>
  
        <div className="flex flex-row md:flex-row justify-between items-center mt-6">
          <h1 className="capitalize">
            Edunity Course
              <span className="circle"> Student</span> can <br /> join with us.
          </h1>
          <a href="#" className="button2">
            Load More Courses →
          </a>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-3 justify-center items-center">
        <CourseCard
          image="/assets/images/home/card1.png"
          title="It Statistics Data Science And Business Analysis"
          category="Digital Marketing"
          price="$50.00"
          rating="4.5K"
          lessons="10"
          duration="19h 30m"
          students="20+"
          instructor={{
            name: "Samantha",
            avatar: "/assets/images/home/person1.png",
          }}
        />
          <CourseCard
          image="/assets/images/home/card1.png"
          title="It Statistics Data Science And Business Analysis"
          category="Digital Marketing"
          price="$50.00"
          rating="4.5K"
          lessons="10"
          duration="19h 30m"
          students="20+"
          instructor={{
            name: "Samantha",
            avatar: "/assets/images/home/person1.png",
          }}
        />
        <CourseCard
          image="/assets/images/home/card1.png"
          title="It Statistics Data Science And Business Analysis"
          category="Digital Marketing"
          price="$50.00"
          rating="4.5K"
          lessons="10"
          duration="19h 30m"
          students="20+"
          instructor={{
            name: "Samantha",
            avatar: "/assets/images/home/person1.png",
          }}
        />
      <CourseCard
          image="/assets/images/home/card1.png"
          title="It Statistics Data Science And Business Analysis"
          category="Digital Marketing"
          price="$50.00"
          rating="4.5K"
          lessons="10"
          duration="19h 30m"
          students="20+"
          instructor={{
            name: "Samantha",
            avatar: "/assets/images/home/person1.png",
          }}
        />
        <CourseCard
          image="/assets/images/home/card1.png"
          title="It Statistics Data Science And Business Analysis"
          category="Digital Marketing"
          price="$50.00"
          rating="4.5K"
          lessons="10"
          duration="19h 30m"
          students="20+"
          instructor={{
            name: "Samantha",
            avatar: "/assets/images/home/person1.png",
          }}
        />
        <CourseCard
          image="/assets/images/home/card1.png"
          title="It Statistics Data Science And Business Analysis"
          category="Digital Marketing"
          price="$50.00"
          rating="4.5K"
          lessons="10"
          duration="19h 30m"
          students="20+"
          instructor={{
            name: "Samantha",
            avatar: "/assets/images/home/person1.png",
          }}
        />
      </div>

      </section>
    );
  };

export default CoursesSection;