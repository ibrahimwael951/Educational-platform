"use client";

import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

const WhyChooseUsSection = () => {
  const t = useTranslations("WhyChooseUs");

  const features = [
    { key: "worldClassTrainers" },
    { key: "easyLearning" },
    { key: "flexible" },
    { key: "affordablePrice" },
  ];

  return (
    <section className="max-w-7xl mx-auto my-5 px-5 md:px-10 md:py-20 pt-32 flex flex-col lg:flex-row justify-between items-center gap-10 cursor-default">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.3 }}
        className="w-full lg:w-4/6 flex flex-col items-center lg:items-start gap-10"
      >
        <div className="bg-[#E9E2FF] text-purple-500 text-xs sm:text-sm font-bold uppercase px-4 py-2 rounded-md">
          {t("title")}
        </div>

        <div>
          <h1 className="mb-4 text-neutral-800 dark:text-white text-2xl sm:text-3xl text-center sm:text-start  font-bold leading-tight mt-3">
            {t("heading")}
          </h1>

          <p className="px-10 text-neutral-500 dark:text-neutral-400  text-base sm:text-lg text-center lg:text-start">
            {t("description")}
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8 ">
          {features.map(({ key }) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, amount: 0.3 }}
              className="bg-[#E9E2FF] p-5 rounded-lg min-w-60 w-2/6"
            >
              <div className="flex items-center gap-4">
                <FaCheckCircle className="text-purple-500 text-xl" />
                <h6 className="text-gray-950 font-bold text-lg">
                  {t(`features.${key}.title`)}
                </h6>
              </div>
              <p className="text-gray-500 text-sm mt-2">
                {t(`features.${key}.desc`)}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true, amount: 0.3 }}
        className="w-fit m-auto lg:w-2/6 select-none "
      >
        <Image
          src="/home/group.png"
          alt="group of students"
          width={400}
          height={600}
          draggable={false}
        />
      </motion.div>
    </section>
  );
};

export default WhyChooseUsSection;
