"use client";
import { useState, useEffect  } from "react";
// import Image from "next/image";
import Link from "next/link";

// Icons
import { SiDatabricks } from "react-icons/si";
import { CiMenuFries } from "react-icons/ci";

//data
import data from "@/Data/Links.json";


const Navbar = () => {
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


  return (
    <section className="fixed top-0 left-0 w-full px-5 lg:px-20 p-5 flex justify-between Lg:justify-evenly items-center z-50 bg-slate-100 dark:bg-neutral-900 select-none ">
      <div className="flex justify-center gap-2 items-center w-fit ">
        {/* <Image
          className="w-15"
          src="/logo.png"
          alt="logo"
          width={100}
          height={100}
        /> */}
        <SiDatabricks 
          className="w-15 text-purple-400"
          size="100%"
        />
        <Link className="text-2xl font-bold text-neutral-800 dark:text-white" href="/">
          EduQuest
        </Link>
      </div>

      {/* links */}
      <div className="hidden lg:flex justify-center items-center gap-2">
        {data.navbar.map((item, index) => (
    item.title === "Pages" ? (
      <div
        key={index}
        className="relative dropdown-container"
        onMouseEnter={() => setIsDropdownOpen(true)}
        onMouseLeave={() => setIsDropdownOpen(false)}
      >
        {/* Pages Link */}
        <Link
          href={item.url}
          className="text-lg border border-transparent hover:text-purple-400 hover:border-purple-400 p-2 rounded-xl duration-150"
        >
          {item.title}
        </Link>

        {/* Dropdown Menu */}
        {isDropdownOpen && (
          <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-300 shadow-lg rounded-md">
            <ul className="py-2">
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                <Link href="/">Events</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                <Link href="/">Instructors</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                <Link href="/">Services</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                <Link href="/faq">FAQ</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                <Link href="/">Certifications </Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                <Link href="/">Shop Details</Link>
              </li>
            </ul>
          </div>
  )}
</div>
    ) : (
      <Link
        key={index}
        href={item.url}
        className="text-lg border border-transparent hover:text-purple-400 hover:border-purple-400 p-2 rounded-xl duration-150"
      >
        {item.title}
      </Link>
    )
  ))}
</div>

      <Link
        className="hidden lg:inline bg-purple-400 text-white rounded-xl p-3 border border-purple-400 hover:bg-white hover:text-purple-400  duration-150"
        href="/sign in"
      >
        Create Account
      </Link>

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
        <button onClick={toggleSidebar} className=" text-purple-400 w-10 mx-2 mt-4 ">
          <CiMenuFries size="100%" />
        </button>

        <div className="flex flex-col gap-5 p-20">
          {data.navbar.map((item, index) => (
            <Link
              className="text-purple-800 dark:text-white text-xl"
              key={index}
              href={item.url}
            >
              {item.title}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Navbar;
