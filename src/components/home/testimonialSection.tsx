"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

const TestimonialSection = () => {
  const t = useTranslations("TestimonialSection");

  const testimonials = [
    { key: "testimonial1", image: "/home/qoute icon.png" },
    { key: "testimonial2", image: "/home/qoute icon.png" },
    { key: "testimonial3", image: "/home/qoute icon.png" }
  ];

  return (
    <section className="flex flex-col gap-20 items-center justify-center text-center py-16 bg-cover bg-center">
      <div className="w-full max-w-4xl flex flex-col gap-10 items-center justify-center">
        <p className="bg-[#E9E2FF] text-[#704FE6] px-4 py-2 font-medium inline-block uppercase">
          {t("title")}
        </p>
        <h1 className="text-center text-neutral-800 dark:text-white">
          {t("headline")}
        </h1>

        <div className="grid max-[600px]:grid-cols-1 max-[769px]:grid-cols-3 max-[4000px]:grid-cols-3 gap-6">
          {testimonials.map(({ key, image }) => (
            <div
              key={key}
              className="bg-slate-100 dark:bg-neutral-800 shadow-lg border border-neutral-700 rounded-xl relative text-left p-[10px] m-[5px]"
            >
              <span className="absolute -top-[20px] -left-[5px] z-10">
                <Image src={image} alt="quote icon" width={50} height={30} />
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
