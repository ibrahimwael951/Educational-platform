"use client";
import React from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

// icons
import { IoIosPerson } from "react-icons/io";
import { FaRegHandshake } from "react-icons/fa";
import { MdOutlineGroups } from "react-icons/md";
import { FaAddressBook } from "react-icons/fa";
const SkillsSection = () => {

  const t = useTranslations("SkillsSection.skills");

  const skills = [
    { key: "successfullyTrained", icon: IoIosPerson },
    { key: "classesCompleted", icon: FaRegHandshake },
    { key: "satisfactionRate", icon: MdOutlineGroups },
    { key: "studentsCommunity", icon: FaAddressBook },
  ];
  
  return (
    <section
      className="max-w-7xl mx-auto px-5 md:px-10 md:py-20 pt-32 bg-cover bg-center rounded-4xl flex justify-center items-center"
      style={{ backgroundImage: "url('/home/skill background.png')" }}
    >
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5 items-center text-center justify-center">
        {skills.map((item, key) => (
          <motion.div
            key={key}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-col md:flex-row items-center px-5 py-3"
          >
            {React.createElement(item.icon, {
              size: 30,
              className: "text-neutral-900 bg-white rounded-full p-2 w-12 h-12 ",
            })}
            <div className="md:ml-3 text-center md:text-left mt-2 md:mt-0">
              <h6 className="text-neutral-900 font-bold text-xl">
                {t(`${item.key}.number`)}
              </h6>
              <p className="text-neutral-900 text-sm">{t(`${item.key}.text`)}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
