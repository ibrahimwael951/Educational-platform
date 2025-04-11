"use client";
import { useState, useEffect } from "react";
import { Link } from "@/i18n/navigation";
import SearchButton from "./searchbar";

import { useTranslations } from "next-intl";

// Icons
import { SiDatabricks } from "react-icons/si";
import { CiMenuFries  } from "react-icons/ci";


import { useAuth } from "@/context/authProvider";

//data
import data from "@/Data/Links.json";

const Navbar = () => {
  const t = useTranslations("navbar");
  const r = useTranslations("footer");

  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!(event.target as Element).closest(".dropdown-container")) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const { user } = useAuth(); 

  return (
    <section className="fixed top-0 left-0 w-full px-5 lg:px-20 p-5 flex justify-between Lg:justify-evenly items-center z-50 bg-slate-100 dark:bg-neutral-900 select-none ">
      <div className="flex justify-center gap-2 items-center w-fit ">
        <SiDatabricks className="w-15 text-purple-400" size="100%" />
        <Link
          className="text-2xl font-bold text-neutral-800 dark:text-white"
          href="/"
        >
          {t("title")}
        </Link>
      </div>

      {/* Search Bar */}
      <SearchButton />

      {/* links */}
      <div className="hidden lg:flex justify-center items-center gap-2">
        {data.navbar.map((item, index) => (
          <Link
            key={index}
            href={item.url}
            className="text-lg border border-transparent hover:text-purple-400 hover:border-purple-400 p-2 rounded-xl duration-150"
          >
            {t(item.title)}
          </Link>
        ))}
        <div
          className="relative dropdown-container"
          onMouseEnter={() => setIsDropdownOpen(true)}
          onMouseLeave={() => setIsDropdownOpen(false)}
        >
          {/* Pages Link */}
          <Link
            href=""
            className="text-lg border border-transparent hover:text-purple-400 hover:border-purple-400 p-2 rounded-xl duration-150"
          >
            {t("pages")}
          </Link>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div className="absolute flex flex-col justify-center gap-2 items-center p-2 left-0 mt-2 w-48 bg-slate-100 dark:bg-neutral-900 border border-gray-300 shadow-lg rounded-md">
              {data.footer.Quick_Links.map((item, index) => (
                <Link
                  key={index}
                  className="p-2 w-full hover:text-purple-400 cursor-pointer"
                  href={item.url}
                >
                  {r(`Quick_Links.${item.title}`)}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>

      {user ? (
        <Link href="/dashboard"   className="hidden lg:inline bg-purple-400 text-white rounded-xl p-3 border border-purple-400 hover:bg-white hover:text-purple-400  duration-150">
             
          {t("account")}

        </Link>
      ) : (
        <Link href="/auth/login" className="hidden lg:inline bg-purple-400 text-white rounded-xl p-3 border border-purple-400 hover:bg-white hover:text-purple-400  duration-150">
            
          {t("Log-in")}
        </Link>
      )}

      <button
        onClick={toggleSidebar}
        className="lg:hidden text-purple-400 w-10 "
      >
        <CiMenuFries size="100%" />
      </button>

      <div
        className={`
            fixed right-0 top-0 h-screen  bg-slate-200 dark:bg-neutral-900 px-2  border border-purple-400 duration-200
            ${isSidebarVisible ? "translate-x-0" : " translate-x-full"}
          `}
      >
        <button
          onClick={toggleSidebar}
          className=" text-purple-400 w-10 mx-2 mt-4 "
        >
          <CiMenuFries size="100%" />
        </button>

        <div className="flex flex-col gap-5 p-20">
          {data.navbar.map((item, index) => (
            <Link
              className="text-purple-800 dark:text-white text-xl"
              key={index}
              href={item.url}
            >
              {t(item.title)}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Navbar;
