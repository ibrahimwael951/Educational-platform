"use client";

import React from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

const AboutUsSection = () => {
  const t = useTranslations("AboutUsSection");

  return (
    <section className="max-w-7xl mx-auto px-5 md:px-10 md:py-20 pt-32 6 mt-3 flex flex-col lg:flex-row justify-center items-center gap-20 min-h-screen ">
      
      <Image
        src="/home/about.png"
        width={500} 
        height={500}
        alt="about"
        className="rounded-lg hidden lg:inline w-2/6 max-w-[300px] md:max-w-[400px] lg:max-w-[600px]"
      />

      <div className="w-full flex flex-col gap-10 items-center text-center">
        <p className="bg-[#E9E2FF] text-[#704FE6] w-fit px-4 py-2 rounded-md font-medium inline-block">
          {t("sectionTitle")}
        </p>

        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mt-4 text-neutral-800 dark:text-white">
          {t("headline")}{" "}
          <span className="relative inline-block">{t("highlight")}</span>
          <br />
          {t("subheadline")}
        </h1>

        <p className="text-neutral-800 dark:text-slate-300 mt-3 text-sm sm:text-base">
          {t("description")}
        </p>

        <div className="flex flex-col md:flex-row gap-y-7 gap-x-4 mt-6 items-start justify-center w-fit">
          <div className="w-96">
            <h6 className="text-neutral-800 dark:text-white">{t("features.feature1Title")}</h6>
            <p className="text-neutral-800 dark:text-slate-300">
              {t("features.feature1Description")}
            </p>
          </div>
          <div className="w-96">
            <h6 className="text-neutral-800 dark:text-white">{t("features.feature2Title")}</h6>
            <p className="text-neutral-800 dark:text-slate-300">
              {t("features.feature2Description")}
            </p>
          </div>
        </div>

    
        <Link
          href="/about-us"
          className="p-3 rounded-xl bg-purple-500 mt-6 inline-block hover:bg-purple-700 text-white duration-150 w-fit"
        >
          {t("button")} →
        </Link>
      </div>
    </section>
  );
};

export default AboutUsSection;
