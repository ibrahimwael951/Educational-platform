"use client";

import { useTranslations } from "next-intl";
import { FaQuoteRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { useRef } from "react";

const TestimonialSection = () => {
  const t = useTranslations("TestimonialSection");
  const ref = useRef(null);


  const testimonials = [
    { key: "testimonial1" },
    { key: "testimonial2" },
    { key: "testimonial3" }
  ];

  return (
    <section
      ref={ref}
      className="max-w-7xl mx-auto flex flex-col gap-20 items-center justify-center text-center px-5 md:px-10 md:py-20 pt-32 bg-cover bg-center"
    >
      <div className="w-full max-w-4xl flex flex-col gap-10 items-center justify-center">
        <p className="bg-gray-50 text-purple-500 px-4 py-2 font-medium inline-block uppercase">
          {t("title")}
        </p>
        <h1 className="text-center text-neutral-800 dark:text-white">
          {t("headline")}
        </h1>

        <div className="flex flex-col justify-center items-center gap-10">
          {testimonials.map(({ key }, index) => (
            <motion.div
            key={key}
            initial={{ opacity: 0, y: index % 2 === 0 ? 50 : -50 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
            viewport={{ once: false, amount: 0.3 }}
            className="bg-slate-100 dark:bg-neutral-800 shadow-lg border text-start border-neutral-700 rounded-xl relative p-5 flex flex-col gap-3 w-full max-w-4xl"
          >
          
              <span className="absolute -top-[20px] -left-[5px] z-10 text-neutral-800 dark:text-slate-300">
                <FaQuoteRight size={50} />
              </span>
              <p className="text-neutral-500 dark:text-slate-300 mt-6 text-lg leading-relaxed">
                {t(`testimonials.${key}.text`)}
              </p>
              <h2 className="text-neutral-800 dark:text-white">
                {t(`testimonials.${key}.name`)}
              </h2>
              <a href="#" className="text-purple-500 text-sm font-medium">
                {t(`testimonials.${key}.position`)}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
