"use client";
import { useTranslations } from "next-intl";
import { FaQuoteRight } from "react-icons/fa";

const TestimonialSection = () => {
  const t = useTranslations("TestimonialSection");

  const testimonials = [
    { key: "testimonial1" },
    { key: "testimonial2" },
    { key: "testimonial3" }
  ];

  return (
    <section className="max-w-7xl mx-auto flex flex-col gap-20 items-center justify-center text-center px-5 md:px-10 md:py-20 pt-32 bg-cover bg-center">
      <div className="w-full max-w-4xl flex flex-col gap-10 items-center justify-center">
        <p className="bg-[#E9E2FF] text-[#704FE6] px-4 py-2 font-medium inline-block uppercase">
          {t("title")}
        </p>
        <h1 className="text-center text-neutral-800 dark:text-white">
          {t("headline")}
        </h1>

        <div className="flex flex-col justify-center items-center gap-10">
          {testimonials.map(({ key }) => (
            <div
              key={key}
              className="bg-slate-100 dark:bg-neutral-800 shadow-lg border text-start border-neutral-700 rounded-xl relative p-5 flex flex-col gap-3 w-full max-w-4xl"
            >
              <span className="absolute -top-[20px] -left-[5px] z-10 text-neutral-800 dark:text-slate-300">
              <FaQuoteRight size={50}/>
              </span>
              <p className="text-neutral-500 dark:text-slate-300 mt-6 text-lg leading-relaxed">
                {t(`testimonials.${key}.text`)}
              </p>
              <h2 className="text-neutral-800 dark:text-white">
                {t(`testimonials.${key}.name`)}
              </h2>
              <a href="#" className="text-[#704FE6] text-sm font-medium">
                {t(`testimonials.${key}.position`)}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
