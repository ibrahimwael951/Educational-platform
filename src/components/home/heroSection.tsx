import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section
      className="w-full min-h-screen bg-cover bg-center flex items-center px-5 md:px-10 pt-32 md:py-20"
      style={{ backgroundImage: "url('/home/Background.png')" }}
    >
      <div className="flex m-auto flex-col md:flex-row items-center justify-between gap-10   ">
        <div className="  text-left">
          <p className="uppercase text-[#704FE6]">
            Welcome Edunity Online Courses
          </p>
          <h1 className="text-4xl font-bold">
            Achieving Your Dreams <br /> Through Education
          </h1>
          <p className="capitalize text-[#333931] mt-4">
            We are experienced in educational platform and skilled strategies{" "}
            <br />
            for the success of our online learning.
          </p>
          <a href="#" className="button2 mt-6 inline-block">
            Find Courses →
          </a>
        </div>

        <div className="relative   flex justify-end">
          <Image
            src="/home/hero.png"
            alt="Students in library"
            width={500}
            height={700}
          />
          <div className="instructor-card sticky ">
            <p className="text-lg font-medium text-black mb-2">
              <span className="text-xl font-bold text-[#704FE6]">200+ </span>{" "}
              Instructor
            </p>
            <Image
              src="/home/heros.png"
              alt="Instructors"
              width={170}
              height={170}
              className="w-[170px] h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
