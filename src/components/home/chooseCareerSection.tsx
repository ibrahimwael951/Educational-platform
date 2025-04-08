"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { motion } from "framer-motion";

const CareerSection = () => {
  const t = useTranslations("CareerSection");

  return (
    <section className="max-w-7xl mx-auto text-center px-5 md:px-10 py-24">
      <motion.p
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5}}
        viewport={{ once: false, amount: 0.2 }}
        className="bg-gray-50 text-purple-500 px-4 py-2 font-medium inline-block uppercase rounded-lg"
      >
        {t("title")}
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: false, amount: 0.3 }}
        className="text-neutral-800 dark:text-white text-3xl font-bold mt-3"
      >
        {t("headline")}
      </motion.h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
        {/* Card 1 */}
        <motion.div
          initial={{ opacity: 0}}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeIn" }}
          viewport={{ once: false, amount: 0.2 }}
          className="relative flex flex-col md:flex-row-reverse items-center bg-purple-400 rounded-xl p-6 shadow-lg hover:shadow-2xl transition duration-300"
        >
          <Image
            src="/home/person2.png"
            alt={t("altImage1")}
            width={400}
            height={400}
            className="w-40 md:w-48 lg:w-56 object-contain rounded-xl"
          />

          <div className="flex flex-col items-start max-w-lg text-left mt-6 md:mt-0 md:mr-6">
            <p className="text-lg text-white">{t("startToday")}</p>
            <p className="text-xl text-white mt-2">{t("description")}</p>
            <Link
              href="/courses"
              className="px-5 py-3 rounded-lg bg-purple-500 mt-4 inline-block hover:bg-purple-700 text-white transition duration-150"
            >
              {t("joinNow")} →
            </Link>
          </div>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          initial={{ opacity: 0}}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 ,ease: "easeIn"}}
          viewport={{ once: false, amount: 0.3 }}
          className="relative flex flex-col md:flex-row-reverse items-center bg-yellow-500 rounded-xl p-6 shadow-lg hover:shadow-2xl transition duration-300"
        >
          <Image
            src="/home/person.png"
            alt={t("altImage2")}
            width={400}
            height={400}
            className="w-40 md:w-48 lg:w-56 object-contain rounded-xl"
          />

          <div className="flex flex-col items-start max-w-lg text-left mt-6 md:mt-0 md:mr-6">
            <p className="text-lg text-white">{t("startToday")}</p>
            <p className="text-xl text-white mt-2">{t("description")}</p>
            <Link
              href="/courses"
              className="px-5 py-3 rounded-lg bg-yellow-700 mt-4 inline-block hover:bg-yellow-900 text-white transition duration-150"
            >
              {t("joinNow")} →
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CareerSection;
