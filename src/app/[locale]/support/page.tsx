"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import useWeb3Forms from "@web3forms/react";
import { motion, AnimatePresence } from "framer-motion";

type FormValues = {
  name: string;
  email: string;
  message: string;
  botcheck?: string;
};

export default function Contact() {
  const t = useTranslations("supportPage");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useForm<FormValues>({
    mode: "onTouched",
  });

  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [message, setMessage] = useState<string | false>(false);

  const apiKey = process.env.NEXT_PUBLIC_ACCESS_KEY || "YOUR_ACCESS_KEY_HERE";

  const { submit: onSubmit } = useWeb3Forms<FormValues>({
    access_key: apiKey,
    settings: {
      from_name: "EduQuest",
      subject: "New Contact from EduQuest client",
    },
    onSuccess: (msg) => {
      setIsSuccess(true);
      setMessage(msg);
      reset();
    },
    onError: (msg) => {
      setIsSuccess(false);
      setMessage(msg);
    },
  });

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="px-5 h-fit py-32 max-w-2xl m-auto flex flex-col gap-10"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-center"
      >
        <h1 className="text-4xl text-purple-400 mb-2">{t("title")}</h1>
        <p className="text-neutral-900 dark:text-white opacity-50">
          {t("description")}
        </p>
      </motion.div>

      <motion.form
        onSubmit={handleSubmit(onSubmit as SubmitHandler<FormValues>)}
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: { staggerChildren: 0.1 },
          },
        }}
      >
        <input
          type="checkbox"
          className="hidden"
          style={{ display: "none" }}
          {...register("botcheck")}
        />

        {/* Name */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: { opacity: 1, y: 0 },
          }}
          className="mb-5"
        >
          <motion.input
            whileHover={{
              scale: 1.02,
            }}
            whileFocus={{
              rotate: 1,
            }}
            transition={{ duration: 0.6, type: "spring", stiffness: 300 }}
            type="text"
            placeholder={t("inpName")}
            autoComplete="off"
            className={`w-full px-4 py-3 border-2 placeholder:text-gray-800 dark:text-white rounded-md outline-none dark:placeholder:text-gray-200 focus:border-purple-400 dark:bg-neutral-800 focus:ring-4 ${
              errors.name
                ? "border-red-600 focus:border-red-600 ring-red-100 dark:ring-0"
                : "border-gray-300 focus:border-gray-600 ring-gray-100 dark:border-gray-600 dark:focus:border-white dark:ring-0"
            }`}
            {...register("name", {
              required: t("inpNameError"),
              maxLength: 80,
            })}
          />
          <AnimatePresence>
            {errors.name && (
              <motion.div
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.2 }}
                className="mt-1 text-red-600"
              >
                <small>{errors.name.message}</small>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Email */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: { opacity: 1, y: 0 },
          }}
          className="mb-5"
        >
          <motion.input
            whileHover={{
              scale: 1.02,
            }}
            whileFocus={{
              rotate: 1,
            }}
            transition={{ duration: 0.6, type: "spring", stiffness: 300 }}
            id="email_address"
            type="email"
            placeholder={t("inpEmail")}
            autoComplete="off"
            className={`w-full px-4 py-3 border-2 focus:border-purple-400 placeholder:text-gray-800 dark:text-white rounded-md outline-none dark:placeholder:text-gray-200  dark:bg-neutral-800 focus:ring-4 ${
              errors.email
                ? "border-red-600 focus:border-red-600 ring-red-100 dark:ring-0"
                : "border-gray-300 focus:border-gray-600 ring-gray-100 dark:border-gray-600 dark:focus:border-white dark:ring-0"
            }`}
            {...register("email", {
              required: t("inpEmailError"),
              pattern: {
                value: /^\S+@\S+$/i,
                message: t("inpEmailError"),
              },
            })}
          />
          <AnimatePresence>
            {errors.email && (
              <motion.div
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.2 }}
                className="mt-1 text-red-600"
              >
                <small>{errors.email.message}</small>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Message */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: { opacity: 1, y: 0 },
          }}
          className="mb-3"
        >
          <motion.textarea
            whileHover={{
              scale: 1.02,
            }}
            whileFocus={{
              rotate: 1,
            }}
            transition={{ duration: 0.6, type: "spring", stiffness: 300 }}
            placeholder={t("inpMessage")}
            className={`w-full px-4 py-3 border-2 focus:border-purple-400 placeholder:text-gray-800 dark:text-white dark:placeholder:text-gray-200 dark:bg-neutral-800 rounded-md outline-none h-36 focus:ring-4 ${
              errors.message
                ? "border-red-600 focus:border-red-600 ring-red-100 dark:ring-0"
                : "border-gray-300 focus:border-gray-600 ring-gray-100 dark:border-gray-600 dark:focus:border-white dark:ring-0"
            }`}
            {...register("message", {
              required: t("inpMessageError"),
            })}
          />
          <AnimatePresence>
            {errors.message && (
              <motion.div
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.2 }}
                className="mt-1 text-red-600"
              >
                <small>{errors.message.message}</small>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Submit Button */}
        <motion.button
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: { opacity: 1, y: 0 },
          }}
          whileHover={{
            scale: 1.02,
            letterSpacing:"5px",
          }}
          whileTap={{
            scale: 0.9,
            letterSpacing:0
          }}
          transition={{ duration: 0.6, type: "spring", stiffness: 300 }}
          type="submit"
          className="w-full py-4 font-semibold text-white bg-purple-600 rounded-md  outline-none focus:ring-offset-2 focus:ring ring-purple-600 px-7 cursor-pointer"
        >
          {isSubmitting ? (
            <svg
              className="w-5 h-5 mx-auto text-white dark:text-black animate-spin"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          ) : (
            t("inpSubmit")
          )}
        </motion.button>
      </motion.form>

      {/* Success/Error Message */}
      <AnimatePresence>
        {isSubmitSuccessful && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className={`mt-3 text-sm text-center ${
              isSuccess ? "text-green-500" : "text-red-500"
            }`}
          >
            {message || (isSuccess ? t("successSend") : t("FeildSend"))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}
