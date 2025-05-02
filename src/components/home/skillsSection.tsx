"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

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
      className="max-w-7xl mx-auto px-5 md:px-10 md:py-20 pt-32 bg-cover bg-center rounded-4xl flex justify-center items-center"
      style={{ backgroundImage: "url('/home/skill background.png')" }}
    >
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5 items-center text-center justify-center">
        {skills.map(({ key, img }) => (
          <motion.div
            key={key}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1}}
            viewport={{once: true, amount: 0.3 }}
            className="flex flex-col md:flex-row items-center px-5 py-3"
          >
            <Image
              src={img}
              alt="icon"
              width={50}
              height={50}
              className="w-12 h-12 bg-white rounded-full shadow-lg p-2"
            />
            <div className="md:ml-3 text-center md:text-left mt-2 md:mt-0">
              <h6 className="text-gray-900 font-bold text-3xl">
                {t(`${key}.number`)}
              </h6>
              <p className="text-gray-900 text-sm">{t(`${key}.text`)}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
