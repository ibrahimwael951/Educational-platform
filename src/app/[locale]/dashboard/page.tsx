"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { ModeToggle } from "@/components/themeToggole";
import LocaleSwitcher from "@/components/langToggle";
import { Link, useRouter } from "@/i18n/navigation";
import { useAuth } from "@/context/authProvider";
//icons
import {FaSignOutAlt, FaWhatsapp } from "react-icons/fa";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { CiLinkedin, CiStar, CiHeart ,CiPlay1} from "react-icons/ci";
import { RiContactsLine } from "react-icons/ri";
import { IoSchoolOutline } from "react-icons/io5";

const Profile = () => {
  const { user } = useAuth();
  const t = useTranslations("profileSection");
  const router = useRouter();
  const { logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
      router.push("/auth/login");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };
  if (!user)
    return (
      <section className="relative w-full h-screen flex flex-col justify-center items-center text-3xl ">
        <h1 className="text-3xl text-neutral-800 dark:text-white">Error 404</h1>
        <p className="text-2xl text-neutral-800 dark:text-white opacity-55"> u need to log in first</p>
        <Link href="/auth/login">Login In</Link>
      </section>
    );
  else
    return (
      <div className="flex flex-col md:flex-row min-h-screen pt-30 p-4">
        {/* Sidebar */}
        <aside className="bg-neutral-100 shadow-2xl dark:bg-neutral-800  w-full  md:w-fit p-4 rounded-lg   overflow-hidden">
          <div className="flex  flex-col m-auto md:mx-0 md:flex-row text-center md:text-start justify-center items-center mb-4  w-fit gap-3 cursor-default ">
            <div className="relative w-14 h-14 mx-auto  bg-gradient-to-r from-blue-400   via-purple-600 to-purple-600 text-white text-4xl flex items-center justify-center rounded-full">
              {user?.isActive && (
                <div className="absolute bottom-1 right-1 bg-green-500 rounded-full p-[5px]"></div>
              )}
              {user?.fullName?.charAt(0)}
            </div>
            <div className="">
              <p className=" text-neutral-800 dark:text-white text- sm ">
                {user?.fullName}
              </p>
              <p className="  text-neutral-800 opacity-50 dark:text-white text-sm  ">
                {user?.email}
              </p>
            </div>
          </div>
          <ul className="space-y-1">
            {[
              { title: "courses", icon: IoSchoolOutline },
              { title: "certificates", icon: CiStar },
              { title: "favorites", icon: CiHeart },
            ].map((item, index) => (
              <li
                key={index}
                className="flex justify-between items-center p-1  lg:opacity-50 hover:opacity-100 cursor-pointer duration-150"
              >
                <div className="flex items-center">
                  {React.createElement(item.icon, {
                    className: "mx-2",
                  })}
                  {t(item.title)}
                </div>
                <MdKeyboardDoubleArrowRight />
              </li>
            ))}
            <p className="mt-8 mb-3 text-neutral-800 dark:text-white lg:opacity-50">
              Connect
            </p>
            {[
              { title: "Contact", icon: RiContactsLine },
              { title: "WhatsApp", icon: FaWhatsapp },
              { title: "Linkedin", icon: CiLinkedin },
            ].map((item, index) => (
              <li
                key={index}
                className="flex justify-between items-center p-1  lg:opacity-50 hover:opacity-100 cursor-pointer duration-150"
              >
                <div className="flex items-center">
                  {React.createElement(item.icon, {
                    className: "mx-2",
                  })}
                  {item.title}
                </div>
                <MdKeyboardDoubleArrowRight />
              </li>
            ))}
            <li
              onClick={handleLogout}
              className="flex items-center p-2 hover:bg-neutral-400 dark:hover:bg-neutral-800 cursor-pointer duration-100 text-red-500"
            >
              <FaSignOutAlt className="mx-2" /> {t("logout")}
            </li>
          </ul>
        </aside>

        {/* Main Content */}
        <main className="flex-1 px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 lg:m-0">
            <div className="bg-slate-100 dark:bg-neutral-800 p-6 rounded-lg shadow-lg flex flex-col items-center">
              <CiStar className="text-4xl text-purple-500" />
              <p className="text-neutral-800 dark:text-white text-3xl font-bold">
                {0}
              </p>
              <p className="text-neutral-800 dark:text-slate-300">
                {t("certified")}
              </p>
            </div>
            <div className="bg-slate-100 dark:bg-neutral-800 p-6 rounded-lg shadow-lg flex flex-col items-center">
              <CiPlay1 className="text-4xl text-purple-500" />
              <p className="text-neutral-800 dark:text-white text-3xl font-bold">
                {user?.myCourses.length}
              </p>
              <p className="text-neutral-800 dark:text-slate-300">
                {t("training")}
              </p>
            </div>
          </div>

          <div className="bg-slate-100 dark:bg-neutral-800 p-4 mt-4 rounded-lg shadow-lg text-center">
            <p className="text-neutral-800 dark:text-white">
              {t("user_id")} : <span className="font-bold">{user?._id}</span>
            </p>
            <p className="text-sm text-gray-500">{t("support_note")}</p>
            <div className=" flex gap-2 justify-center items-center">
              <p>{t("join-date")}</p>
              {user?.createdAt.slice(0, 10)}
            </div>
          </div>

          <div className="flex justify-between items-center bg-slate-100 dark:bg-neutral-800 p-4 mt-4 rounded-lg shadow-lg text-center">
            <p className="text-neutral-800 dark:text-white">
              {t("change-language")}
            </p>
            <LocaleSwitcher />
          </div>

          <div className="flex justify-between items-center bg-slate-100 dark:bg-neutral-800 p-4 mt-4 rounded-lg shadow-lg text-center">
            <p className="text-neutral-800 dark:text-white">
              {t("change-Theme")}
            </p>
            <ModeToggle />
          </div>

          <div className="bg-slate-100 dark:bg-neutral-800 p-6 rounded-lg mt-4 shadow-lg flex flex-col items-center">
            <Link
              href="/becomeInstructor"
              className="p-2 bg-gradient-to-tr from-purple-600  via-purple-600 to-blue-700 rounded-xl text-white"
            >
              Become Instructor
            </Link>
          </div>
        </main>
      </div>
    );
};

export default Profile;
