import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { FaCalendarAlt, FaComments } from "react-icons/fa";
import { useTranslations } from "next-intl";

const PopularPosts = () => {
  const t = useTranslations("PopularPosts");

  const posts = [
    {
      id: 1,
      image: "/home/post1.png",
      date: "14 June 2023",
      comments: "06",
      text: t("post1Text"),
    },
    {
      id: 2,
      image: "/home/post2.png",
      date: "21 April 2024",
      comments: "06",
      text: t("post2Text"),
    },
    {
      id: 3,
      image: "/home/post3.png",
      date: "14 June 2023",
      comments: "06",
      text: t("post3Text"),
    },
  ];

  return (
    <section className=" max-w-7xl mx-auto px-5 md:px-10 md:py-20 pt-32">
      <p className="bg-[#E9E2FF] text-[#704FE6] px-4 py-2 font-medium inline-block uppercase rounded-lg">
        {t("blogPost")}
      </p>

      <div className="flex flex-col md:flex-row gap-y-5 gap-x-10 justify-between items-center mt-4  m-auto">
        <h1 className="text-neutral-800 dark:text-white">{t("title")}</h1>
        <Link
          href="#"
          className="px-6 py-3 md:px-5 md:py-2 text-xs md:text-base lg:text-lg rounded-xl bg-purple-500 mt-6 inline-block hover:bg-purple-700 text-white duration-150 text-center w-full sm:w-auto"
        >
          {t("allPosts")} →
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 justify-items-center items-center my-8 mx-auto w-fit ">
        {posts.map((post) => (
          <div
            key={post.id}
            className="rounded-xl overflow-hidden shadow-md m-[10px] w-fit max-w-96"
            style={{ backgroundImage: "url('/home/postsBg.png')" }}
          >
            <Image
              src={post.image}
              alt={t("altImage")}
              width={1000}
              height={1000}
              className="w-full object-cover"
            />
            <div className="p-6">
              <div className="flex items-center gap-4 text-[#4D5756] text-sm mb-4">
                <div className="flex items-center gap-2">
                  <FaCalendarAlt className="text-[#704FE6]" />
                  <p className="text-neutral-800 dark:text-slate-400">{post.date}</p>
                </div>
                <div className="flex items-center gap-2">
                  <FaComments className="text-[#704FE6]" />
                  <p className="text-neutral-800 dark:text-slate-400">{t("comments", { count: post.comments })}</p>
                </div>
              </div>

              <p className="text-sm font-semibold text-neutral-800 dark:text-white">{post.text}</p>

              <Link
                href="#"
                className="p-3 rounded-xl bg-purple-500 mt-6 inline-block hover:bg-purple-700 text-white duration-150"
              >
                {t("readMore")} →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularPosts;
