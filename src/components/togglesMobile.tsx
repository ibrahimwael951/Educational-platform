"use client";
import React from "react";
import { useTheme } from "next-themes";
import {useLocale, useTranslations} from 'next-intl';
import {Link, usePathname} from '@/i18n/navigation';

const TogglesMobile = () => {
    const { theme, setTheme } = useTheme();
    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
      };

   const t = useTranslations('LocaleSwitcher');
    const locale = useLocale();
    const otherLocale = locale === 'en' ? 'ar' : 'en';
    const pathname = usePathname();
  return (
    <div className="flex gap-2 items-center">
      <button
        className=" border border-purple-500 text-purple-500 rounded-2xl p-3 px-5"
        onClick={toggleTheme}
      >
          {theme === "dark" ? "Light" : "Dark"} Mode
      </button>
      <Link href={pathname} locale={otherLocale} className='  bg-purple-500  text-white rounded-2xl p-3 px-5'>
     {t('switchLocale')}
    </Link>
    </div>
  );
};

export default TogglesMobile;
