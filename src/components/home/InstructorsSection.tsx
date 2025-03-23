import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import { useTranslations } from "next-intl";
import Link from "next/link";
import ShareButton from "@/components/shareButton";

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
  const t = useTranslations("InstructorsSection");

  return (
    <section className="max-w-7xl  mx-auto relative my-15 px-5 md:px-10 py-32">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 items-center">
        <div className="p-6 ">
          <p className="bg-[#E9E2FF] text-[#704FE6] dark:bg-neutral-900 px-4 py-2 font-medium inline-block uppercase">
            {t("title")}
          </p>
          <h1 className="text-neutral-800 dark:text-white">
            {t("headline")}
          </h1>
          <p className="text-neutral-800 dark:text-slate-300 mt-12 leading-7">
            {t("description")}
          </p>
          <div className="flex gap-[7px] m-[5px]">
            <a href="#" className="p-3 rounded-xl bg-purple-500 mt-6 inline-block hover:bg-purple-700 text-white duration-150">
              {t("contactUs")}
            </a>
            <Link href="/instructors" className="p-3 rounded-xl bg-purple-600 mt-6 inline-block hover:bg-purple-700 text-white duration-150">
              {t("findInstructor")}
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-14 w-full h-full relative max-[600px]:grid-cols-1">
          {instructors.map((instructor, index) => (
            <div key={index} className="relative">
              <Image
                src={instructor.image}
                alt={instructor.name}
                width={600}
                height={600}
                className="relative w-full rounded-lg border-4 border-[#704FE6]"
              />
              <div className="absolute top-5 right-5">
              <ShareButton />
              </div>

              <div className="absolute -bottom-1 left-2/4 transform -translate-x-2/4 bg-[#fff]  dark:bg-neutral-700 rounded-lg p-2 md:p-1 z-10 text-left shadow-lg cursor-pointer">
                <h2 className="text-base md:text-sm">{instructor.name}</h2>
                <div className="flex justify-between items-center mt-1">
                  <p className="text-sm text-[#704FE6]">{instructor.position}</p>
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
