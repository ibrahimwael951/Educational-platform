"use client"

import {useLocale, useTranslations} from 'next-intl';
import {Link, usePathname} from '@/i18n/navigation';

export default function LocaleSwitcher() {
  const t = useTranslations('LocaleSwitcher');
  const locale = useLocale();
  const otherLocale = locale === 'en' ? 'ar' : 'en';
  const pathname = usePathname();

  return (
    <Link href={pathname} locale={otherLocale} className='  p-2 bg-purple-600 rounded-xl hover:bg-purple-700 duration-150 w-fit text-white '>
     {t('switchLocale')}
    </Link>
  );
}

