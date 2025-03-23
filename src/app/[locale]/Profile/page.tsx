import Link from "next/link";
import { useTranslations } from "next-intl";
import React from "react";
import { FaHome, FaGraduationCap, FaCertificate, FaPlay, FaHeart, FaList, FaBriefcase, FaCog, FaSignOutAlt } from "react-icons/fa";


const Profile = () => {
    const t = useTranslations("profileSection");

    return (
        <div className="flex mt-30 flex-col md:flex-row bg-slate-200 dark:bg-neutral-800 min-h-screen p-4">
          {/* Sidebar */}
          <aside className="bg-slate-100 dark:bg-neutral-900 w-full md:w-1/4 p-4 rounded-lg shadow-lg">
            <div className="text-center mb-4">
              <div className="w-24 h-24 mx-auto bg-red-500 text-white text-4xl flex items-center justify-center rounded-full">
                R
              </div>
              <h2 className="font-bold text-neutral-800 dark:text-white text-lg mt-2">Rawan Ayman</h2>
            </div>
            <ul className="space-y-1">
              <li className="flex items-center p-2 hover:bg-gray-400  dark:hover:bg-neutral-800 cursor-pointer duration-100">
                <FaHome className="mr-2" /> {t("account")}
              </li>
              <li className="flex items-center p-2   hover:bg-gray-400  dark:hover:bg-neutral-800 cursor-pointer duration-100">
                <FaGraduationCap className="mr-2" /> {t("courses")}
              </li>
              <li className="flex items-center p-2   hover:bg-gray-400  dark:hover:bg-neutral-800 cursor-pointer duration-100">
                <FaCertificate className="mr-2" /> {t("certificates")}
              </li>
              <li className="flex items-center p-2   hover:bg-gray-400  dark:hover:bg-neutral-800 cursor-pointer duration-100">
                <FaPlay className="mr-2" /> {t("featured")}
              </li>
              <li className="flex items-center p-2   hover:bg-gray-400  dark:hover:bg-neutral-800 cursor-pointer duration-100">
                <FaHeart className="mr-2" /> {t("favorites")}
              </li>
              <li className="flex items-center p-2   hover:bg-gray-400  dark:hover:bg-neutral-800 cursor-pointer duration-100">
                <FaList className="mr-2" /> {t("list")}
              </li>
              <li className="flex items-center p-2   hover:bg-gray-400  dark:hover:bg-neutral-800 cursor-pointer duration-100">
                <FaBriefcase className="mr-2" /> {t("resume")}
              </li>
              <li className="flex items-center p-2   hover:bg-gray-400  dark:hover:bg-neutral-800 cursor-pointer duration-100">
                <FaCog className="mr-2" /> {t("settings")}
              </li>
              <li className="flex items-center p-2   hover:bg-gray-400  dark:hover:bg-neutral-800 cursor-pointer duration-100 text-red-500">
                <FaSignOutAlt className="mr-2" /> {t("logout")}
              </li>
            </ul>
          </aside>
    
          {/* Main Content */}
          <main className="flex-1 p-4">
            <div className="bg-slate-100 dark:bg-neutral-900 p-4 rounded-lg shadow-lg">
              <p>{t("contact")} <Link href="/contact" className="text-purple-500">contact us</Link>.</p>
            </div>
    
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div className="bg-slate-100 dark:bg-neutral-900 p-6 rounded-lg shadow-lg flex flex-col items-center">
                <FaCertificate className="text-4xl text-purple-500" />
                <p className="text-neutral-800 dark:text-white text-3xl font-bold">0</p>
                <p className="text-neutral-800 dark:text-slate-300">{t("certified")}</p>
              </div>
              <div className="bg-slate-100 dark:bg-neutral-900 p-6 rounded-lg shadow-lg flex flex-col items-center">
                <FaPlay className="text-4xl text-purple-500" />
                <p className="text-neutral-800 dark:text-white text-3xl font-bold">0</p>
                <p className="text-neutral-800 dark:text-slate-300">{t("training")}</p>
              </div>
            </div>
    
            <div className="bg-slate-100 dark:bg-neutral-900 p-4 mt-4 rounded-lg shadow-lg text-center">
              <p className="text-neutral-800 dark:text-white">{t("user_id")}: <span className="font-bold">2106208</span></p>
              <p className="text-sm text-gray-500">{t("support_note")}</p>
            </div>
          </main>
        </div>
      );
    };

export default Profile;
