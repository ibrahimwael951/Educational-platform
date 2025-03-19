"use client";

import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";
import { useTranslations } from "next-intl";

const WhyChooseUsSection = () => {
  const t = useTranslations("WhyChooseUs");

  const features = [
    { key: "worldClassTrainers" },
    { key: "easyLearning" },
    { key: "flexible" },
    { key: "affordablePrice" }
  ];

  return (
    <section className="mx-auto my-5 px-5 md:px-10 md:py-20 pt-32 flex justify-between items-center">
      <div className="flex flex-col items-center lg:items-start gap-10">
        <div className="flex w-full justify-between items-center gap-3">
          <p className="bg-[#E9E2FF] text-[#704FE6] text-xs sm:text-sm font-bold uppercase px-4 py-2 rounded-md">
            {t("title")}
          </p>
          <Image src="/home/design2.png" alt="تصميم" width={50} height={10} />
        </div>
        <h1 className="text-neutral-800 dark:text-white text-3xl sm:text-4xl font-bold leading-tight mt-3">
          {t("heading")}
        </h1>
        <p className="px-10 text-neutral-800 dark:text-slate-300 text-base sm:text-lg">
          {t("description")}
        </p>

        <div className="flex flex-wrap justify-center gap-5">
          {features.map(({ key }) => (
            <div key={key} className="bg-[#E9E2FF] p-5 rounded-lg w-72">
              <div className="flex items-center gap-4">
                <FaCheckCircle className="text-[#704FE6] text-xl" />
                <h6 className="text-[#0E2A46] font-bold text-lg">{t(`features.${key}.title`)}</h6>
              </div>
              <p className="text-[#4D5756] text-sm mt-2">{t(`features.${key}.desc`)}</p>
            </div>
          ))}
        </div>
      </div>

      <Image
        src="/home/group.png"
        alt="group of srudents "
        width={400}
        height={600}
        className="max-w-md sm:max-w-lg hidden lg:inline"
      />
    </section>
  );
};

export default WhyChooseUsSection;
