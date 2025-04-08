"use client";

import Image from "next/image";
import { FaCalendarAlt, FaComments } from "react-icons/fa";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

const PopularPosts = () => {
  const t = useTranslations("PopularPosts");

  const posts = [
    {
      id: 1,
      image: "/home/post1.png",
      date: "14 June 2023",
      comments: "06",
      text: t("post1Text"),
    },
    {
      id: 2,
      image: "/home/post2.png",
      date: "21 April 2024",
      comments: "06",
      text: t("post2Text"),
    },
    {
      id: 3,
      image: "/home/post3.png",
      date: "14 June 2023",
      comments: "06",
      text: t("post3Text"),
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-5 md:px-10 py-24">
      <motion.p
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false, amount: 0.2 }}
        className="bg-gray-50 text-purple-500 px-4 py-2 font-medium inline-block uppercase rounded-lg"
      >
        {t("blogPost")}
      </motion.p>

      <div className="flex flex-col md:flex-row gap-y-5 gap-x-10 justify-between items-center mt-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1}}
          viewport={{ once: false, amount: 0.3 }}
          className="text-neutral-800 dark:text-white text-3xl font-bold"
        >
          {t("title")}
        </motion.h1>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {posts.map((post) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeIn"}}
            viewport={{ once: false, amount: 0.3 }}
            className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl border border-gray-200 dark:border-gray-700 transition duration-300"
          >
            <Image
              src={post.image}
              alt={t("altImage")}
              width={1000}
              height={1000}
              className="w-full object-cover"
            />
            <div className="p-6">
              <div className="flex items-center gap-4 text-gray-500 text-sm mb-4">
                <div className="flex items-center gap-2">
                  <FaCalendarAlt className="text-purple-500" />
                  <p className="text-neutral-800 dark:text-slate-400">{post.date}</p>
                </div>
                <div className="flex items-center gap-2">
                  <FaComments className="text-purple-500" />
                  <p className="text-neutral-800 dark:text-slate-400">{t("comments", { count: post.comments })}</p>
                </div>
              </div>

              <p className="text-lg font-semibold text-neutral-800 dark:text-white">{post.text}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default PopularPosts;
