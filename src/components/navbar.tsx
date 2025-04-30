"use client";
import { useState } from "react";
import { Link } from "@/i18n/navigation";
import SearchButton from "./searchbar";

import { useTranslations } from "next-intl";

// Icons
import { SiDatabricks } from "react-icons/si";
import { CiMenuFries } from "react-icons/ci";
import { IoIosExit } from "react-icons/io";
import { useAuth } from "@/context/authProvider";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";

//components
import TogglesMobile from "@/components/togglesMobile";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

//LinksData
import LinksData from "@/Data/Links.json";

const Navbar = () => {
  const t = useTranslations("navbar");
  const c = useTranslations("CategoriesSection");
  const r = useTranslations("footer");

  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  const { user } = useAuth();

  return (
    <section className="fixed top-0 left-0 w-full px-5   2xl:px-20 p-5 flex justify-between Lg:justify-evenly items-center z-50 bg-slate-100 dark:bg-neutral-900 select-none ">
      <div className="flex justify-center gap-2 items-center w-fit ">
        <SiDatabricks className="w-9   text-purple-400" size="100%" />
        <Link
          className=" md:text-xl font-bold text-neutral-800 dark:text-white"
          href="/"
        >
          {t("title")}
        </Link>
      </div>

      {/* Search Bar */}
      <div className="hidden md:inline">
        <SearchButton />
      </div>

      {/* links */}
      <div className="hidden lg:flex justify-center items-center gap-2">
      
        {LinksData.navbar.map((item, index) => (
          <Link
            key={index}
            href={item.url}
            className="md:text-lg border border-transparent hover:text-purple-400 hover:border-purple-400 p-2 rounded-xl duration-150"
          >
            {t(item.title)}
          </Link>
        ))}
         
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-lg border border-transparent hover:text-purple-400 hover:border-purple-400 p-2 rounded-xl duration-150">
                {t("pages")}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  {LinksData.footer.Quick_Links.map((item, index) => (
                    <NavigationMenuLink key={index}>
                      <Link
                        className="p-2 w-full hover:text-purple-400 cursor-pointer"
                        href={item.url}
                      >
                        {r(`Quick_Links.${item.title}`)}
                      </Link>
                    </NavigationMenuLink>
                  ))}
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
 
        {user ? (
        <NavigationMenu className="hidden  lg:inline">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent hover:bg-transparent focus:bg-transparent">
                <Link
                  href="/dashboard"
                  className="relative w-9 h-9  bg-gradient-to-r from-blue-400   via-purple-600 to-purple-600 text-white  lg:flex items-center justify-center rounded-full"
                >
                  {user?.isActive && (
                    <div className=" absolute bottom-0 -right-0 bg-green-500 rounded-full p-[5px]"></div>
                  )}
                  {user?.fullName?.charAt(0)}
                </Link>
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                {[
                  {
                    title: "my-cart",
                    url: "/cart",
                  },
                  {
                    title: "wishlist",
                    url: "/wishlist",
                  },
                  {
                    title: "become-instructor",
                    url: "/becomeInstructor",
                  },
                  {
                    title: "account-setting",
                    url: "/dashboard#setting",
                  },
                  {
                    title: "publicProfile",
                    url: "/dashboard",
                  },
                  {
                    title: "support",
                    url: "/support",
                  },
                ].map((item, index) => (
                  <NavigationMenuLink key={index}>
                    <Link className="p-2 w-full hover:text-purple-400 cursor-pointer" href={item.url}>{item.title}</Link>
                  </NavigationMenuLink>
                ))}
                <NavigationMenuLink>
                 
                </NavigationMenuLink>

              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      ) : (
        <Link
          href="/auth/login"
          className="hidden lg:inline bg-purple-400 text-white rounded-xl p-3 border border-purple-400 hover:bg-transparent hover:text-purple-400  duration-150"
        >
          {t("Log-in")}
        </Link>
      )}
      </div>
      <button
        onClick={toggleSidebar}
        className={`lg:hidden text-purple-400 w-10 duration-150
           ${isSidebarVisible ? "scale-0" : " scale-100"}
           `}
      >
        <CiMenuFries size="100%" />
      </button>
      <div
        className={`h-screen w-full absolute top-0 right-0 bg-black opacity-75 lg:scale-0 
         ${isSidebarVisible ? "scale-100" : " scale-0"}
         `}
        onClick={toggleSidebar}
      />

      <button
        onClick={toggleSidebar}
        className={`absolute text-white  p-2 mx-2 mt-4 text-2xl bg-purple-500 rounded-2xl duration-150 lg:-right-80
             ${isSidebarVisible ? "right-80" : " -right-80"}
            `}
      >
        <IoIosExit size={50} />
      </button>
      <div
        className={`
          h-screen bg-slate-200 dark:bg-neutral-900 px-2 flex  flex-col  items-center p-3 w-80 fixed right-0 top-0  duration-200 lg:translate-x-full overflow-y-scroll  
          ${isSidebarVisible ? "translate-x-0" : " translate-x-full"}
        `}
      >
        <SearchButton />

        {user ? (
          <Link
            onClick={toggleSidebar}
            href="/dashboard"
            className="my-6 bg-purple-500  text-white rounded-2xl p-3 px-5 "
          >
            {t("account")}
          </Link>
        ) : (
          <div className="flex  gap-2 items-center mt-5 mb-3">
            <Link
              onClick={toggleSidebar}
              href="/auth/login"
              className=" bg-purple-500  text-white rounded-2xl p-3 px-5"
            >
              {t("Log-in")}
            </Link>
            <Link
              onClick={toggleSidebar}
              href="/auth/register"
              className="border border-purple-500 text-purple-500 rounded-2xl p-3 px-5"
            >
              {t("register")}
            </Link>
          </div>
        )}

        <div className="flex flex-col gap-5 my-4 w-full border-t-2 border-neutral-500 pt-3">
          {LinksData.explore.map((item, index) => (
            <Link
              className="text-neutral-700 dark:text-white text-xl w-full flex  justify-between items-center"
              key={index}
              href={item.url}
              onClick={toggleSidebar}
            >
              <MdKeyboardDoubleArrowLeft />
              {c(`categories.${item.title}`)}
            </Link>
          ))}
        </div>

        <div className="flex flex-col gap-5 my-4 w-full border-t-2 border-neutral-500 pt-3">
          {LinksData.navbar.map((item, index) => (
            <Link
              className="text-neutral-700 dark:text-white text-xl w-full flex  justify-between items-center"
              key={index}
              href={item.url}
              onClick={toggleSidebar}
            >
              <MdKeyboardDoubleArrowLeft />
              {t(item.title)}
            </Link>
          ))}
        </div>
        <TogglesMobile />
      </div>
    </section>
  );
};

export default Navbar;
