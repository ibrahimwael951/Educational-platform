"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { MdBusiness, MdPalette, MdSelfImprovement, MdDesignServices, MdPhoto, MdCampaign, MdStar, MdDevices, MdMovie } from "react-icons/md";
import { useTranslations } from "next-intl";

const CategoriesSection: React.FC = () => {
  const t = useTranslations("CategoriesSection");
  const sectionRef = useRef(null);

  const categories = [
    { key: "business", icon: MdBusiness, bgColor: "#F7F3FF", borderColor: "#1B75E8" },
    { key: "arts", icon: MdPalette, bgColor: "#DCF5FF", borderColor: "#FF6881" },
    { key: "personalDevelopment", icon: MdSelfImprovement, bgColor: "#D1F5E4", borderColor: "#00BC65" },
    { key: "uiux", icon: MdDesignServices, bgColor: "#FFF3D9", borderColor: "#F2A700" },
    { key: "graphic", icon: MdPhoto, bgColor: "#F7F3FF", borderColor: "#4500D0" },
    { key: "marketing", icon: MdCampaign, bgColor: "#FFDAF0", borderColor: "#BB0064" },
    { key: "exclusive", icon: MdStar, bgColor: "#F3F4FE", borderColor: "#0011BB" },
    { key: "productDesign", icon: MdDevices, bgColor: "#FFECD9", borderColor: "#D16900" },
    { key: "video", icon: MdMovie, bgColor: "#DCF5FF", borderColor: "#00A9ED" },
  ];

  return (
    <section id="service" ref={sectionRef} className="max-w-7xl mx-auto text-center px-5 md:px-10 md:py-20 flex flex-col items-center">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.3 }}
        className="text-neutral-800 dark:text-white text-3xl font-bold"
      >
        {t("title")}
      </motion.h1>

      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.10 } },
        }}
        viewport={{ once: true, amount: 0.3 }}
        className="w-full sm:w-fit grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-5 gap-x-7 mt-5 justify-items-center"
      >
        {categories.map((category, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0,0,0,0.1)" }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5}}
            viewport={{ once: true, amount: 0.3 }}
            className="w-full sm:w-60 p-5 flex items-center gap-1 rounded-xl cursor-pointer"
            style={{ backgroundColor: category.bgColor }}
          >
            <div
              className="rounded-full border-2 border-dashed p-4 bg-white flex items-center justify-center w-16 h-16 text-2xl"
              style={{ borderColor: category.borderColor }}
            >
              {React.createElement(category.icon, {
                size: 40,
                style: { color: category.borderColor },
              })}
            </div>
            <h2 className="ml-4 text-xl font-bold text-neutral-800">{t(`categories.${category.key}`)}</h2>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default CategoriesSection;
