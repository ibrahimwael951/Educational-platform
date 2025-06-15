"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";

const FAQPage = () => {
  const t = useTranslations("faq");
  const faqs = t.raw("questions");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen flex items-center justify-center p-6 bg-cover bg-center bg-no-repeat bg-neutral-100 dark:bg-neutral-900"
    >
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="w-full max-w-2xl shadow-xl rounded-lg p-6"
      >
        <h1 className="text-center text-2xl mb-10 dark:text-purple-400 text-purple-400 ">
          {t("title")}
        </h1>
        <div className="space-y-4">
          {faqs.map(
            (faq: { question: string; answer: string }, index: number) => (
              <motion.div
                key={index}
                layout
                className="border rounded-lg overflow-hidden"
                transition={{ layout: { duration: 0.3, ease: "easeInOut" } }}
              >
                <button
                  className="w-full text-left p-4 bg-[gray-200] hover:bg-purple-500 cursor-pointer flex justify-between group duration-150"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="font-medium text-neutral-800 dark:text-white group-hover:text-white">
                    {faq.question}
                  </span>
                  <span className="text-neutral-800 dark:text-white group-hover:text-white">
                    {openIndex === index ? "−" : "+"}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {openIndex === index && (
                    <motion.div
                      key="content"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="p-4 bg-neutral-100 dark:bg-neutral-900 text-neutral-800 dark:text-neutral-300 border-t"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default FAQPage;
