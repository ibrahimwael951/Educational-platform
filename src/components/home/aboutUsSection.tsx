"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";

const AboutUsSection = () => {
  const t = useTranslations("AboutUsSection");
  const ref = useRef(null);


  return (
    <section
      ref={ref}
      className="max-w-7xl mx-auto px-5 md:px-10 md:py-20 pt-32 mt-3 flex flex-col lg:flex-row justify-center items-center gap-20 min-h-screen"
    >

      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.3 }}
        className="w-fit m-auto lg:w-2/4 select-none"
      >
        <Image
          src="/home/about.png"
          width={500}
          height={500}
          alt="about"
          className="rounded-lg"
          draggable={false}
        />
      </motion.div>

  
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true, amount: 0.3 }}
        className=" w-full lg:w-2/4 flex flex-col gap-10 items-center text-center cursor-default"
      >
        <p className="text-gray-50 bg-purple-500 w-fit px-4 py-2 rounded-md font-medium inline-block">
          {t("sectionTitle")}
        </p>

        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mt-4 text-neutral-900 dark:text-white">
          {t("headline")}{" "}
          <span className="relative inline-block">{t("highlight")}</span>
          <br />
          {t("subheadline")}
        </h1>

        <p className="  text-neutral-500 dark:text-neutral-400 text-sm sm:text-base">
          {t("description")}
        </p>

        
        <div className="flex flex-row gap-y-7 gap-x-4 mt-6 items-start justify-center w-fit">
          {["feature1", "feature2"].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
              className="w-2/4 max-w-96"
            >
              <h6 className="font-medium text-neutral-900 dark:text-white">
                {t(`features.${feature}Title`)}
              </h6>
              <p className="  text-neutral-500 dark:text-neutral-400">
                {t(`features.${feature}Description`)}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default AboutUsSection;
