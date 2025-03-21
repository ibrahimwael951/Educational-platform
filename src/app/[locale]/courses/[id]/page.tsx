"use client";
import Image from "next/image";
import { useTranslations } from "next-intl";

//icons
import { MdOutlinePlayLesson } from "react-icons/md";
import { MdOutlineAccessTime } from "react-icons/md";
import { IoPersonOutline } from "react-icons/io5";

//  still want some work on it
export default function Page() {
  const t = useTranslations("courses");
  return (
    <section className="relative min-h-screen max-w-7xl w-full mx-auto flex gap-10  py-32 px-10">
      <div className="flex flex-col gap-5 w-full md:w-2/3 ">
        <Image
          className="object-cover  max-h-3/4 w-full"
          src="/home/card1.png"
          alt={t("title")}
          width={1000}
          height={1000}
        />
        <h1 className="text-4xl text-neutral-900 dark:text-white">
          {t("title")}
        </h1>
        <div className="w-full flex justify-start items-center gap-4 flex-wrap">
          <p className="text-neutral-800 dark:text-slate-300 flex items-center gap-1">
            <MdOutlinePlayLesson className="text-purple-600" />
            lessons 10
          </p>
          <p className="text-neutral-800 dark:text-slate-300 flex items-center gap-1">
            <MdOutlineAccessTime className="text-purple-600" />
            8:00pm
          </p>
          <p className="text-neutral-800 dark:text-slate-300 flex items-center gap-1">
            <IoPersonOutline className="text-purple-600" />
            students 20+
          </p>
        </div>
        <hr className=" bg-neutral-900 dark:bg-slate-300" />
        <div>
          <h1 className="text-2xl my-2 text-neutral-900 dark:text-white">
            {t("Course-Description")}{" "}
          </h1>
          <p className="text-neutral-800 dark:text-slate-300">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Perferendis, fugiat officiis? Assumenda consequuntur voluptatibus,
            recusandae atque cum, unde delectus doloribus nemo deleniti corporis
            voluptatem quidem, accusamus aperiam quibusdam. Esse, quod?
          </p>
        </div>
        <hr className=" bg-neutral-900 dark:bg-slate-300" />
        <div>
          <h1 className="text-2xl my-2 text-neutral-900 dark:text-white">
            {t("wulftc")}
          </h1>
          <p className="text-neutral-800 dark:text-slate-300">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Perferendis, fugiat officiis? Assumenda consequuntur voluptatibus,
            recusandae atque cum, unde delectus doloribus nemo deleniti corporis
            voluptatem quidem, accusamus aperiam quibusdam. Esse, quod?
          </p>
        </div>
      </div>

      <div className="hidden h-fit  w-2/5 max-w-sm  md:sticky top-36 md:flex flex-col gap-3 rounded-lg bg-slate-300 dark:bg-neutral-800 p-5">
        <Image
          src="/home/card1.png"
          alt={t("title")}
          width={500}
          height={500}
          className="w-full object-cover"
        />
        <div className="flex justify-between w-full">
          <p>{t("category")}</p>
          <p>{t("price")}</p>
        </div>
        <div className="flex justify-between w-full">
          <p>{t("enrolled")}</p>
          <p>100</p>
        </div>
        <div className="flex justify-between w-full">
          <p>{t("lectures")}</p>
          <p>80</p>
        </div>
        <div className="flex justify-between w-full">
          <p>{t("language")}</p>
          <p>English</p>
        </div>
        <div className="flex justify-between w-full">
          <p>{t("skill-level")}</p>
          <p>basic</p>
        </div>
      </div>
    </section>
  );
}
