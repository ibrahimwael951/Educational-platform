import Image from "next/image";
import { FaShareNodes } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";

const instructors = [
  {
    name: "Esther Howard",
    position: "Junior Instructor",
    image: "/home/inst1.png",
  },
  {
    name: "Beverly Hathcock",
    position: "Junior Instructor",
    image: "/home/inst2.png",
  },
  {
    name: "Donald Gonzales",
    position: "Junior Instructor",
    image: "/home/inst3.png",
  },
  {
    name: "Eddie Lenz",
    position: "Junior Instructor",
    image: "/home/inst4.png",
  },
];

const InstructorsSection = () => {
  return (
    <section className="container mx-auto text-center relative mt-5 px-4 lg:px-0">
      <div className="grid max-[600px]:grid-cols-1 max-[769px]:grid-cols-2 max-[4000px]:grid-cols-2 gap-8 items-center">
        <div className="bg-[url('/home/back.png')] p-6 text-left">
          <p className="bg-[#E9E2FF] text-[#704FE6] px-4 py-2 font-medium inline-block uppercase">
            Our Instructor
          </p>
          <h1>
            Meet Our Expert <br /> Instructor
          </h1>
          <p className="text-[#333931] mt-12 leading-7">
            Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit, sed
            do eiusmod tempor incididunt ut labore et <br />
            dolore magna aliqua. Ut enim ad minim veniam, quis <br />
            nostrud exercitation ullamco laboris..
          </p>
          <div className="flex gap-[7px] m-[5px]">
            <a href="#" className="button1 ">
              Contact us →
            </a>
            <a href="#" className="button2">
              Find Courses →
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-14 relative max-[600px]:grid-cols-1">
          {instructors.map((instructor, index) => (
            <div key={index} className="relative">
              <Image
                src={instructor.image}
                alt={instructor.name}
                width={500}
                height={500}
                className="relative w-full rounded-lg border-4 border-[#704FE6]"
              />
              <FaShareNodes className="absolute top-[2rem] right-[2rem] bg-[#704FE6] text-[#fff] rounded-full p-[10px] text-[2rem] cursor-pointer hover:scale-105"  />

              <div className="absolute -bottom-5 left-2/4 transform -translate-x-2/4 bg-[#fff] rounded-lg p-3 md:p-4 z-10 text-left shadow-lg cursor-pointer ">
                <h2 className="text-base md:text-lg ">{instructor.name}</h2>
                <div className="flex justify-between items-center mt-1 ">
                  <p className="text-sm text-[#704FE6]">
                    {instructor.position}
                  </p>
                  <FaArrowRight className="bg-[#E9E2FF] text-[#704FE6] text-xs md:text-sm rounded-full p-[3px]" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstructorsSection;
