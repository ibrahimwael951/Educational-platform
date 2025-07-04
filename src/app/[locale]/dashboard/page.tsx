"use client";

import { motion } from "framer-motion";
import React, { useEffect } from "react";
import { useTranslations } from "next-intl";
import { ModeToggle } from "@/components/themeToggole";
import LocaleSwitcher from "@/components/langToggle";
import { Link, useRouter } from "@/i18n/navigation";
import { useAuth } from "@/context/authProvider";
//icons
import { FaSignOutAlt, FaWhatsapp } from "react-icons/fa";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { CiLinkedin, CiStar, CiHeart, CiPlay1 } from "react-icons/ci";
import { RiContactsLine } from "react-icons/ri";
import { IoSchoolOutline } from "react-icons/io5";
import { FiEdit2 } from "react-icons/fi";
import CustomButton from "@/components/ui/CustomButton";

const Profile = () => {
  const { user, loading, logout } = useAuth();
  const t = useTranslations("profileSection");
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push("/auth/login");
    }
  }, [user, loading, router]);

  const handleLogout = async () => {
    try {
      await logout();
      router.push("/auth/login");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };
  // console.log(user);
  if (loading || !user)
    return (
      <motion.section
        className="flex flex-col md:flex-row min-h-screen p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <aside className="bg-neutral-100 shadow-2xl dark:bg-neutral-800  w-full md:w-2/6 p-4 rounded-lg   overflow-hidden h-screen  animate-pulse"></aside>
        <main className="flex-1 px-4 w-full md:w-4/6 ">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 lg:m-0  animate-pulse">
            <div className="bg-neutral-100 h-40 dark:bg-neutral-800 p-6 rounded-lg shadow-lg flex flex-col items-center"></div>
            <div className="bg-neutral-100 dark:bg-neutral-800 p-6 rounded-lg shadow-lg flex flex-col items-center"></div>
          </div>

          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="bg-neutral-100 h-32 dark:bg-neutral-800 p-4 mt-4 rounded-lg shadow-lg text-center animate-pulse"
            ></div>
          ))}
        </main>
      </motion.section>
    );
  return (
    <section className="flex flex-col md:flex-row min-h-screen pt-30 p-4">
      {/* Sidebar */}
      <motion.aside
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className={`
          ${
            user?.role == "admin"
              ? "bg-gradient-to-bl dark:bg-gradient-to-br from-yellow-300 via-neutral-100 to-white dark:via-neutral-900 dark:to-neutral-900"
              : user?.role == "instructor"
              ? "bg-gradient-to-bl dark:bg-gradient-to-br from-purple-600 via-neutral-100 to-white dark:via-neutral-900 dark:to-neutral-900  "
              : "bg-neutral-100 dark:bg-neutral-800"
          }
 
            shadow-2xl w-full  md:w-fit p-4 rounded-lg overflow-hidden `}
      >
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
            {
              title: "courses",
              icon: IoSchoolOutline,
              href: "/dashboard/my-learning",
            },    
            {title:"edit-profile" ,icon: FiEdit2 , href:"/auth/update-profile"},
            { title: "certificates", icon: CiStar, href: "" },
            { title: "favorites", icon: CiHeart, href: "" },
          ].map((item, index) => (
            <Link
              href={item.href}
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
            </Link>
          ))}
          <p className="mt-8 mb-3 text-neutral-800 dark:text-white lg:opacity-50">
            Contact
          </p>
          {[
            { title: "Contact", icon: RiContactsLine, link: "/support" },
            { title: "WhatsApp", icon: FaWhatsapp, link: "" },
            { title: "Linkedin", icon: CiLinkedin, link: "" },
          ].map((item, index) => (
            <Link
              href={item.link}
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
            </Link>
          ))}
          <li
            onClick={handleLogout}
            className="flex items-center p-2 hover:bg-neutral-400 dark:hover:bg-neutral-800 cursor-pointer duration-100 text-red-500"
          >
            <FaSignOutAlt className="mx-2" /> {t("logout")}
          </li>
        </ul>
      </motion.aside>

      {/* Main Content */}
      <main className="flex-1 md:px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 lg:m-0">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-neutral-100 dark:bg-neutral-800 p-6 rounded-lg shadow-lg flex flex-col items-center"
          >
            <CiStar className="text-4xl text-purple-500" />
            <p className="text-neutral-800 dark:text-white text-3xl font-bold">
              {0}
            </p>
            <p className="text-neutral-800 dark:text-white opacity-50">
              {t("certified")}
            </p>
          </motion.div>

          {user?.myCourses && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0 }}
              className="bg-neutral-100 dark:bg-neutral-800 p-6 rounded-lg shadow-lg flex flex-col items-center"
            >
              <CiPlay1 className="text-4xl text-purple-500" />
              <p className="text-neutral-800 dark:text-white text-3xl font-bold">
                {user?.myCourses.length}
              </p>
              <p className="text-neutral-800 dark:text-white opacity-50">
                {t("training")}
              </p>
            </motion.div>
          )}
        </div>
       
        {user?.role == "student" && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-neutral-100 dark:bg-neutral-800 p-6 rounded-lg mt-4 shadow-lg flex justify-between items-center"
          >
            <p className="text-neutral-800 dark:text-white opacity-50">
              do u wanna be a part of our community teachers?
            </p>
            <CustomButton
              title="lets Go"
              href="/auth/becomeInstructor"
              bg={true}
            />
          </motion.div>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 ">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-neutral-100  dark:bg-neutral-800 p-6 rounded-lg shadow-lg flex flex-col justify-between items-center"
          >
            <p className="text-neutral-800 dark:text-white">
              {t("change-language")}
            </p>
            <LocaleSwitcher />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-neutral-100  dark:bg-neutral-800 p-6 rounded-lg shadow-lg flex flex-col justify-between items-center"
          >
            <p className="text-neutral-800 dark:text-white">
              {t("change-Theme")}
            </p>
            <ModeToggle />
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-neutral-100 dark:bg-neutral-800 p-4 mt-4 rounded-lg shadow-lg text-center"
        >
          <p className="text-neutral-800 dark:text-white">
            {t("user_id")} : <span className="font-bold">{user?._id}</span>
          </p>
          <p className="text-sm text-neutral-800 dark:text-white opacity-50">
            {t("support_note")}
          </p>
          <div className=" flex gap-2 justify-center items-center">
            <p>{t("join-date")}</p>
            {user?.createdAt.slice(0, 10)}
          </div>
        </motion.div>
      </main>
    </section>
  );
};

export default Profile;
