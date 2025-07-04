"use client";
import { useTranslations } from "next-intl";

//icons
import { SiDatabricks } from "react-icons/si";
import { FaFacebook } from "react-icons/fa";

import { IoLogoWhatsapp } from "react-icons/io5";
import { IoLogoInstagram } from "react-icons/io5";
import { TiSocialYoutube } from "react-icons/ti";

//data
import data from "@/Data/Links.json";
import Link from "next/link";

const Footer = () => {
  const t = useTranslations("footer");
  const socialStyle =
    "w-10 border border-purple-400 p-3 rounded-full text-white bg-purple-400 hover:text-purple-400 hover:bg-transparent duration-150 cursor-pointer";

  return (
    <section className="p-10 bg-neutral-950 flex flex-col text-center justify-center items-center md:text-start md:flex-row md:justify-evenly md:items-start gap-20 lg:gap-5 ">
      <div className="flex flex-col gap-5">
        <Link href="/" className="flex items-center ">
          <SiDatabricks className="w-15 text-purple-400" size="100%" />
          <h1 className="text-white text-2xl">EduQuest</h1>
        </Link>
        <p className="text-neutral-300 w-60 pl-5">
      {t("description")}
        </p>
        <div className="flex items-center gap-2">
          <FaFacebook className={socialStyle} size="100%" />
          <IoLogoWhatsapp className={socialStyle} size="100%" />
          <IoLogoInstagram className={socialStyle} size="100%" />
          <TiSocialYoutube className={socialStyle} size="100%" />
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <h1 className="text-white text-2xl">our services</h1>
        <div className="flex flex-col gap-4 pl-5">
          {data.footer.our_services.map((item, index) => (
            <Link
              className="text-neutral-400 hover:text-purple-400"
              href={item.url}
              key={index}
            >
              {t(`our_services.${item.title}`)}
            </Link>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <h1 className="text-white text-2xl">Quick Links</h1>
        <div className="flex flex-col gap-4 pl-5">
          {data.footer.Quick_Links.map((item, index) => (
            <Link
              className="text-neutral-400 hover:text-purple-400"
              href={item.url}
              key={index}
            >
              {t(`Quick_Links.${item.title}`)}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Footer;
