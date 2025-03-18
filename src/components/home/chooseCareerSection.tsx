import Image from "next/image";
import { useTranslations } from "next-intl";
import Link from "next/link";

const CareerSection = () => {
  const t = useTranslations("CareerSection");

  return (
    <section className="container mx-auto text-center py-10">
      <p className="bg-[#E9E2FF] text-[#704FE6] px-4 py-2 font-medium inline-block uppercase rounded-lg">
        {t("title")}
      </p>
      <h1 className="text-neutral-800 dark:text-white">{t("headline")}</h1>

      <div className="grid max-[600px]:grid-cols-1 max-[769px]:grid-cols-1 max-[4000px]:grid-cols-2 gap-6 mt-8 items-center justify-center">
        
        {/*Card 1 */}
        <div className="relative m-[10px]">
          <div className="relative rounded-xl flex items-center justify-left p-[10px] overflow-hidden">
            <Image
              src="/home/person.png"
              alt={t("altImage1")}
              className="w-full h-full object-cover rounded-xl"
              layout="intrinsic"
              width={400}
              height={400}
            />
            <div className="absolute flex flex-col justify-left items-left p-[20px]">
              <p className="text-lg text-[#FFFFFF] text-left">{t("startToday")}</p>
              <p className="text-xl text-[#FFFFFF] text-left">{t("description")}</p>
<Link href="#" className="p-3 rounded-xl bg-purple-500 mt-6 inline-block hover:bg-purple-700 text-white duration-150">
  {t("joinNow")} →
</Link>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="relative m-[10px]">
          <div className="relative rounded-xl flex items-center justify-left p-[10px] overflow-hidden">
            <Image
              src="/home/person2.png"
              alt={t("altImage2")}
              className="w-full h-full object-cover rounded-xl"
              layout="intrinsic"
              width={400}
              height={400}
            />
            <div className="absolute flex flex-col justify-left items-left p-[20px]">
              <p className="text-lg text-[#FFFFFF] text-left">{t("startToday")}</p>
              <p className="text-xl text-[#FFFFFF] text-left">{t("description")}</p>
<Link href="/courses" className="p-3 rounded-xl bg-purple-500 mt-6 inline-block hover:bg-purple-700 text-white duration-150">
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
