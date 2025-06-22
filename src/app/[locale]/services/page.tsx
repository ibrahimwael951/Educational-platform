"use client";

import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import { CheckCircle } from "lucide-react";


interface FeatureCardProps {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  reverseLayout?: boolean;
}

const FeatureCard = ({ title, description, imageUrl, imageAlt, reverseLayout = false }: FeatureCardProps) => (
  <div className="w-full border border-neutral-200 dark:border-neutral-700 p-8 rounded-lg shadow-sm">
    <div className={`flex flex-col md:flex-row items-center gap-8 ${reverseLayout ? 'md:flex-row-reverse' : ''}`}>
      <div className="md:w-1/3 flex-shrink-0">
        <Image src={imageUrl} alt={imageAlt} width={250} height={200} className="mx-auto" />
      </div>
      <div className="md:w-2/3 space-y-3 text-center md:ltr:text-left md:rtl:text-right">
        <h3 className="text-2xl font-bold text-neutral-900 dark:text-white">{title}</h3>
        <p className="text-neutral-600 dark:text-neutral-400">{description}</p>
      </div>
    </div>
  </div>
);

export default function ServicesPage() {
  const t = useTranslations("servicesPage");
  const locale = useLocale();

  const studentFeatures = t.raw("studentSection.features") as { title: string; description: string }[];

  return (
    <div dir={locale === 'ar' ? 'rtl' : 'ltr'} className="mt-20 min-h-screen">
      <main className="container mx-auto px-4 py-12 md:py-20">
        <section className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-extrabold text-neutral-900 dark:text-white">{t("header.title")}</h1>
          <p 
            className="mt-4 max-w-2xl mx-auto text-lg text-neutral-600 dark:text-neutral-300"
            dangerouslySetInnerHTML={{ __html: t("header.description") }} 
          />
        </section>

        <div className="space-y-16">
            <Link href= "/becomeInstructor" >
            <FeatureCard
            title={t("instructorSection.mainFeature.title")}
            description={t("instructorSection.mainFeature.description")}
            imageUrl="/services/card1.png"
            imageAlt={t("instructorSection.mainFeature.imageAlt")}
          />
            </Link>
          

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="flex flex-col items-center justify-center border border-neutral-200 dark:border-neutral-700 p-8 rounded-lg shadow-sm text-center">
              <Image src="/services/card2.png" alt={t("instructorSection.videoFeature.imageAlt")} width={200} height={160} />
              <h3 className="text-2xl font-bold dark:text-white text-neutral-800 mt-6">{t("instructorSection.videoFeature.title")}</h3>
              <p className="text-neutral-600 dark:text-neutral-400 mt-2">{t("instructorSection.videoFeature.description")}</p>
              <Link href="/addCourses" className="text-purple-600 font-bold hover:underline inline-block mt-4">
                {t("instructorSection.videoFeature.link")}
              </Link>
            </div>
            <div className="flex flex-col items-center justify-center border border-neutral-200 dark:border-neutral-700 p-8 rounded-lg shadow-sm text-center">
              <Image src="/services/card3.png" alt={t("instructorSection.connectFeature.imageAlt")} width={200} height={160} />
              <h3 className="text-2xl font-bold dark:text-white text-neutral-800 mt-6">{t("instructorSection.connectFeature.title")}</h3>
              <p className="text-neutral-600 dark:text-neutral-400 mt-2">{t("instructorSection.connectFeature.description")}</p>
              <Link href="/instructors" className="text-purple-600 font-bold hover:underline inline-block mt-4">
                {t("instructorSection.connectFeature.link")}
              </Link>
            </div>
          </div>
        </div>

        <div className="my-24 border-t border-neutral-200 dark:border-neutral-700"></div>
        
        <section className="text-center">
          <h2 className="text-4xl font-extrabold dark:text-white text-neutral-900">{t("studentSection.title")}</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg dark:text-neutral-400 text-neutral-600">
            {t("studentSection.description")}
          </p>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 ltr:text-left rtl:text-right">
            {studentFeatures.map((feature, index) => (
              <div key={index} className="p-6 rounded-lg border border-neutral-200 dark:border-neutral-700 shadow-sm">
                <CheckCircle className="w-8 h-8 text-purple-600 mb-3" />
                <h3 className="text-xl font-bold">{feature.title}</h3>
                <p className="dark:text-neutral-400 text-neutral-600 mt-2">{feature.description}</p>
              </div>
            ))}
          </div>
          <Link href="/courses" className="mt-12 inline-block bg-purple-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-purple-700 transition-colors">
            {t("studentSection.browseButton")}
          </Link>
        </section>
      </main>
    </div>
  );
}