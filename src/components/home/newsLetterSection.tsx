"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

const NewsletterSection = () => {
  const t = useTranslations("newsletter");

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.3 }}
      className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] px-4 flex flex-col items-center justify-center gap-8 mt-32 bg-gradient-to-r from-purple-600 to-purple-800"
    >
      <motion.h3
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
        className="text-xl sm:text-2xl md:text-3xl font-bold leading-tight text-white text-center"
      >
        {t("title")}
      </motion.h3>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
        className="font-semibold text-white text-lg md:text-xl text-center max-w-2xl px-4"
      >
        {t("description")}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
        className="flex bg-white p-2 rounded-lg shadow-lg hover:shadow-xl items-center w-full max-w-md transition"
      >
        <input
          type="email"
          placeholder={t("placeholder")}
          className="flex-1 px-4 py-3 text-lg text-gray-700 placeholder-gray-400 border-none outline-none rounded-l-lg focus:ring-2 focus:ring-purple-400 transition"
        />
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-5 py-3 bg-purple-500 text-white font-medium text-lg rounded-r-lg hover:bg-purple-700 hover:shadow-lg transition cursor-pointer"
        >
          {t("button")}
        </motion.button>
      </motion.div>
    </motion.section>
  );
};

export default NewsletterSection;
