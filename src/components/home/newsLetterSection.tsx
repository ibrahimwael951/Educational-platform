import { useTranslations } from "next-intl";

const NewsletterSection = () => {
  const t = useTranslations("newsletter");

  return (
    <section className="w-full bg-cover bg-center items-center md:py-20 pt-32">
      <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] bg-purple-600 px-4 flex flex-col items-center justify-center gap-10">
       
        <h3 className="text-lg sm:text-2xl md:text-3xl font-bold leading-tight text-white">
          {t("title")}
        </h3>
        <p className="font-bold text-[#fff] text-sm sm:text-lg md:text-xl text-center">
          {t("description")}
        </p>
     
        <div className="flex bg-[#fff] p-[10px] rounded-lg shadow-lg items-center w-full max-w-md">
          <input
            type="email"
            placeholder={t("placeholder")}
            className="flex-1 px-4 py-3 text-lg text-black border-none outline-none rounded-l-lg"
          />
          <button className="p-4 -ml-5 bg-purple-500 text-white rounded-r-lg hover:bg-purple-700 transition cursor-pointer">
            {t("button")}
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
