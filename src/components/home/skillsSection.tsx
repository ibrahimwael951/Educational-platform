"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

const SkillsSection = () => {
  const t = useTranslations("SkillsSection.skills");

  const skills = [
    { key: "successfullyTrained", img: "/home/s1.png" },
    { key: "classesCompleted", img: "/home/s2.png" },
    { key: "satisfactionRate", img: "/home/s3.png" },
    { key: "studentsCommunity", img: "/home/s4.png" }
  ];

  return (
    <section
      className="container flex mx-auto px-5 md:px-10 md:py-20 pt-32 bg-cover bg-center rounded-[200px] md:rounded-[50px] justify-center items-center text-left"
      style={{ backgroundImage: "url('/home/skill background.png')" }}
    >
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5 items-center text-center justify-center">
        {skills.map(({ key, img }) => (
          <div
            key={key}
            className="flex flex-col md:flex-row items-center text-left w-50 px-5 py-3"
          >
            <Image
              src={img}
              alt="icon"
              width={50}
              height={50}
              className="w-12 h-12 bg-white rounded-full shadow-lg"
            />
            <div className="md:ml-3 text-center md:text-left mt-2 md:mt-0">
              <h6 className="text-[#0E2A46] font-bold text-3xl text-left">
                {t(`${key}.number`)}
              </h6>
              <p className="text-[#0E2A46] text-sm">{t(`${key}.text`)}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
