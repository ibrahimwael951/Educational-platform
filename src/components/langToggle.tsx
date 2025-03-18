"use client"

import {useLocale, useTranslations} from 'next-intl';
import {Link, usePathname} from '@/i18n/navigation';

export default function LocaleSwitcher() {
  const t = useTranslations('LocaleSwitcher');
  const locale = useLocale();
  const otherLocale = locale === 'en' ? 'ar' : 'en';
  const pathname = usePathname();

  return (
    <Link href={pathname} locale={otherLocale} className='p-2 bg-blue-400 text-black rounded-xl m-3'>
      Switch to {t( 'switchLocale')}
    </Link>
  );
}