import Image from "next/image";
import { useTranslations } from "next-intl";
import Link from "next/link";

const CareerSection = () => {
  const t = useTranslations("CareerSection");

  return (
    <section className="container mx-auto text-center px-5 md:px-10 md:py-20 pt-32">
    <p className="bg-[#E9E2FF] text-[#704FE6] px-4 py-2 font-medium inline-block uppercase rounded-lg">
      {t("title")}
    </p>
    <h1 className="text-neutral-800 dark:text-white">{t("headline")}</h1>
  
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 items-center justify-center">
      
      {/* Card 1 */}
      <div className="relative m-5 w-full">
        <div className="relative flex flex-row-reverse items-center justify-between bg-purple-400 rounded-xl p-5 overflow-hidden">

          <Image
            src="/home/person2.png"
            alt={t("altImage1")}
            className="w-[160px] h-[160px] md:w-[200px] md:h-[200px] lg:w-[250px] lg:h-[250px] object-contain rounded-xl"
            layout="intrinsic"
            width={400}
            height={400}
          />

          <div className="flex flex-col justify-start items-start max-w-[90%] md:max-w-[80%] lg:max-w-[60%]">
            <p className="text-lg text-white">{t("startToday")}</p>
            <p className="text-xl text-white">{t("description")}</p>
            <Link
              href="#"
              className="p-3 rounded-xl bg-purple-500 mt-6 inline-block hover:bg-purple-700 text-white duration-150"
            >
              {t("joinNow")} →
            </Link>
          </div>
        </div>
      </div>
  
      {/* Card 2 */}
      <div className="relative m-5 w-full">
        <div className="relative flex flex-row-reverse items-center justify-between bg-yellow-500 rounded-xl p-5 overflow-hidden">
          <Image
            src="/home/person.png"
            alt={t("altImage2")}
            className="w-[160px] h-[160px] md:w-[200px] md:h-[200px] lg:w-[250px] lg:h-[250px] object-contain rounded-xl"
            layout="intrinsic"
            width={400}
            height={400}
          />

          <div className="flex flex-col justify-start items-start max-w-[90%] md:max-w-[80%] lg:max-w-[60%]">
            <p className="text-lg text-white">{t("startToday")}</p>
            <p className="text-xl text-white">{t("description")}</p>
            <Link
              href="#"
              className="p-3 rounded-xl bg-yellow-700 mt-6 inline-block hover:bg-yellow-900 text-white duration-150"
            >
              {t("joinNow")} →
            </Link>
          </div>
        </div>
      </div>
  
    </div>
  </section>
  
  );
};

export default CareerSection;
