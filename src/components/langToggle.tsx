"use client";

import { useLocale, useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { motion } from "framer-motion";
import { fadeUp , animation , hoverScale } from "@/animation";

export default function LocaleSwitcher() {
  const t = useTranslations("LocaleSwitcher");      
  const locale = useLocale();
  const otherLocale = locale === "en" ? "ar" : "en";
  const pathname = usePathname();

  return (
      <Link
        href={pathname}
        locale={otherLocale}
      >
    <motion.button {...animation} {...fadeUp} {...hoverScale} className="  cursor-pointer p-3 bg-purple-500  rounded-xl   w-fit text-white ">
        {t("switchLocale")}
    </motion.button>
      </Link>
  );
}
