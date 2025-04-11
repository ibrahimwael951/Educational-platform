"use client";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import useWeb3Forms from "@web3forms/react";

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
      from_name: "Acme Inc",
      subject: "New Contact Message from your Website",
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
    <section className=" h-fit py-32 max-w-2xl m-auto flex flex-col gap-10">
      <div className="text-center">
        <h1 className="text-4xl text-neutral-900 dark:text-white mb-2">
          {t("title")}
        </h1>
        <p className="text-neutral-800 dark:text-slate-300">
          {t("description")}
        </p>
      </div>
      <form onSubmit={handleSubmit(onSubmit as SubmitHandler<FormValues>)}>
        <input
          type="checkbox"
          className="hidden"
          style={{ display: "none" }}
          {...register("botcheck")}
        />

        <div className="mb-5">
          <input
            type="text"
            placeholder={t("inpName")}
            autoComplete="off"
            className={`w-full px-4 py-3 border-2 placeholder:text-gray-800 dark:text-white rounded-md outline-none dark:placeholder:text-gray-200 dark:bg-neutral-800 focus:ring-4 ${
              errors.name
                ? "border-red-600 focus:border-red-600 ring-red-100 dark:ring-0"
                : "border-gray-300 focus:border-gray-600 ring-gray-100 dark:border-gray-600 dark:focus:border-white dark:ring-0"
            }`}
            {...register("name", {
              required:t("inpNameError"),
              maxLength: 80,
            })}
          />
          {errors.name && (
            <div className="mt-1 text-red-600">
              <small>{errors.name.message}</small>
            </div>
          )}
        </div>

        <div className="mb-5">
          <input
            id="email_address"
            type="email"
            placeholder={t("inpEmail")}
            autoComplete="off"
            className={`w-full px-4 py-3 border-2 placeholder:text-gray-800 dark:text-white rounded-md outline-none dark:placeholder:text-gray-200  dark:bg-neutral-800 focus:ring-4 ${
              errors.email
                ? "border-red-600 focus:border-red-600 ring-red-100 dark:ring-0"
                : "border-gray-300 focus:border-gray-600 ring-gray-100 dark:border-gray-600 dark:focus:border-white dark:ring-0"
            }`}
            {...register("email", {
              required:t("inpEmailError"),
              pattern: {
                value: /^\S+@\S+$/i,
                message: t("inpEmailError"),
              },
            })}
          />
          {errors.email && (
            <div className="mt-1 text-red-600">
              <small>{errors.email.message}</small>
            </div>
          )}
        </div>

        <div className="mb-3">
          <textarea
            placeholder={t("inpMessage")}
            className={`w-full px-4 py-3 border-2 placeholder:text-gray-800 dark:text-white dark:placeholder:text-gray-200 dark:bg-neutral-800 rounded-md outline-none h-36 focus:ring-4 ${
              errors.message
                ? "border-red-600 focus:border-red-600 ring-red-100 dark:ring-0"
                : "border-gray-300 focus:border-gray-600 ring-gray-100 dark:border-gray-600 dark:focus:border-white dark:ring-0"
            }`}
            {...register("message", {
              required: t("inpMessageError"),
            })}
          />
          {errors.message && (
            <div className="mt-1 text-red-600">
              <small>{errors.message.message}</small>
            </div>
          )}
        </div>

        <button
          type="submit"
          className="w-full py-4 font-semibold text-white transition-colors bg-neutral-900 rounded-md hover:bg-neutral-950 focus:outline-none focus:ring-offset-2 focus:ring focus:ring-neutral-900 dark:focus:ring-gray-200 px-7 dark:bg-white dark:text-black"
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
        </button>
      </form>

      {isSubmitSuccessful && isSuccess && (
        <div className="mt-3 text-sm text-center text-green-500">
          {message || t("successSend") }
        </div>
      )}
      {isSubmitSuccessful && !isSuccess && (
        <div className="mt-3 text-sm text-center text-red-500">
          {message || t("FeildSend") }
        </div>
      )}
    </section>
  );
}
