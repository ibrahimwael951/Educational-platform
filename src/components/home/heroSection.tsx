"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

const HeroSection = () => {
  const t = useTranslations("HeroSection");

  return (
    <section className="max-w-7xl mx-auto w-full min-h-screen bg-cover bg-center flex items-center px-5 md:px-10 pt-32 md:py-20">
      <div className="flex m-auto flex-col md:flex-row items-center justify-between gap-10">
      
      
        <motion.div 
          initial={{ opacity: 0, y: 50 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{duration: 0.5, delay: 0.1 }}
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col gap-2"
        >
          <motion.p 
            initial={{ opacity: 0, x: -50 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true, amount: 0.3 }}
            className="uppercase text-purple-400"
          >
            {t("welcome")}
          </motion.p>

          <motion.h1 
            initial={{ opacity: 0, y: -30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5, delay: 0.1}}
            viewport={{ once: true, amount: 0.2 }}
            className="text-4xl font-bold text-neutral-800 dark:text-white"
          >
            {t("title")}
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }} 
            whileInView={{ opacity: 1 }} 
            transition={{ duration: 0.5, delay: 0.1}}
            viewport={{ once: true, amount: 0.2 }}
            className="capitalize text-neutral-800 dark:text-slate-400 mt-4"
          >
            {t("description")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <Link
              href="/courses"
              className="w-fit p-3 rounded-xl bg-purple-500 mt-6 inline-block hover:bg-purple-700 text-white duration-150"
            >
              {t("button")}
            </Link>
          </motion.div>
        </motion.div>

      
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }} 
          whileInView={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.5, delay: 0.1}}
          viewport={{ once: true, amount: 0.2 }}
          className="relative flex justify-end"
        >
          <Image
            src="/home/hero.png"
            alt="Students in library"
            width={500}
            height={700}
          />

          <motion.div 
            initial={{ opacity: 0, y: 50 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true, amount: 0.2 }}
            className="instructor-card sticky -ml-20 "
          >
            <p className="text-lg font-medium text-black mb-2 ">
              <span className="text-xl font-bold text-purple-500">
                {t("instructorCount")}
              </span>
              {t("instructor")}
            </p>
            <Image
              src="/home/heros.png"
              alt="Instructors"
              width={170}
              height={170}
              className="w-[170px] h-auto"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
