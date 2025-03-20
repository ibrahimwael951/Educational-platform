"use client";
import React from "react";

import { MdBusiness, MdPalette, MdSelfImprovement, MdDesignServices, MdPhoto, MdCampaign, MdStar, MdDevices, MdMovie } from "react-icons/md";
import { useTranslations } from "next-intl";

const CategoriesSection: React.FC = () => {
  const t = useTranslations("CategoriesSection");

  const categories = [
    { id: 1, key: "business", icon: MdBusiness , bgColor: "#F7F3FF", borderColor: "#1B75E8" },
    { id: 2, key: "arts", icon: MdPalette , bgColor: "#DCF5FF", borderColor: "#FF6881" },
    { id: 3, key: "personalDevelopment", icon: MdSelfImprovement , bgColor: "#D1F5E4", borderColor: "#00BC65" },
    { id: 4, key: "uiux", icon: MdDesignServices , bgColor: "#FFF3D9", borderColor: "#F2A700" },
    { id: 5, key: "graphic", icon: MdPhoto , bgColor: "#F7F3FF", borderColor: "#4500D0" },
    { id: 6, key: "marketing", icon: MdCampaign , bgColor: "#FFDAF0", borderColor: "#BB0064" },
    { id: 7, key: "exclusive", icon: MdStar , bgColor: "#F3F4FE", borderColor: "#0011BB" },
    { id: 8, key: "productDesign", icon: MdDevices , bgColor: "#FFECD9", borderColor: "#D16900" },
    { id: 9, key: "video", icon: MdMovie , bgColor: "#DCF5FF", borderColor: "#00A9ED" },
  ];

  return (
    <section className=" max-w-7xl mx-auto text-center px-5 md:px-10 md:py-20 pt-32 max-w-screen-xl flex flex-col items-center">
      <h1 className="text-neutral-800 dark:text-white">{t("title")}</h1>

      <div className="w-full sm:w-fit grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-5 gap-x-7 mt-5 justify-items-center">
        {categories.map((category,index) => (
          <div
            key={index}
            className="w-full sm:w-60 p-5 flex items-center gap-1 rounded-xl shadow-sm hover:scale-105 hover:shadow-2xl duration-150 cursor-default"
            style={{ backgroundColor: category.bgColor }}
          >
            <div
              className="rounded-full border-2 border-dashed p-4 bg-white flex items-center justify-center w-16 h-16 text-2xl"
              style={{ borderColor: category.borderColor }}
            >
              {React.createElement(category.icon, {
                size: 100,
                style: { color: category.borderColor },
              })}
            </div>
            <h2 className="ml-4 text-xl font-bold text-neutral-800">{t(`categories.${category.key}`)}</h2>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoriesSection;