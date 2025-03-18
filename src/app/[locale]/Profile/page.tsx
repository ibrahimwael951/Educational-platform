import Link from "next/link";
import React from "react";
import { FaHome, FaGraduationCap, FaCertificate, FaPlay, FaHeart, FaList, FaBriefcase, FaCog, FaSignOutAlt } from "react-icons/fa";

//components
import { ModeToggle } from "@/components/themeToggole";

const Profile = () => {
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
        <li className="flex items-center p-2 hover:bg-gray-100 dark:hover:bg-neutral-800 cursor-pointer duration-100">
            <FaHome className="mr-2" /> My Account
        </li>
        <li className="flex items-center p-2 hover:bg-gray-100 dark:hover:bg-neutral-800 cursor-pointer duration-100">
            <FaGraduationCap className="mr-2" /> My Courses
        </li>
        <li className="flex items-center p-2 hover:bg-gray-100 dark:hover:bg-neutral-800 cursor-pointer duration-100">
            <FaCertificate className="mr-2" /> Certificates
        </li>
        <li className="flex items-center p-2 hover:bg-gray-100 dark:hover:bg-neutral-800 cursor-pointer duration-100">
            <FaPlay className="mr-2" /> Featured Courses
        </li>
        <li className="flex items-center p-2 hover:bg-gray-100 dark:hover:bg-neutral-800 cursor-pointer duration-100">
            <FaHeart className="mr-2" /> Favorite Courses
        </li>
        <li className="flex items-center p-2 hover:bg-gray-100 dark:hover:bg-neutral-800 cursor-pointer duration-100">
            <FaList className="mr-2" /> Course Lists
        </li>
        <li className="flex items-center p-2 hover:bg-gray-100 dark:hover:bg-neutral-800 cursor-pointer duration-100">
            <FaBriefcase className="mr-2" /> Resume
        </li>
        <li className="flex items-center p-2 hover:bg-gray-100 dark:hover:bg-neutral-800 cursor-pointer duration-100">
            <FaCog className="mr-2" /> Settings
        </li>
        <li className="flex items-center p-2 hover:bg-gray-100 dark:hover:bg-neutral-800 cursor-pointer duration-100 text-red-500">
            <FaSignOutAlt className="mr-2" /> Logout
        </li>
        </ul>
    </aside>
    
      {/* Main Content */}
    <main className="flex-1 p-4">
        <div className="bg-slate-100 dark:bg-neutral-900 p-4 rounded-lg shadow-lg">
        <p>If you face any issue, feel free to <Link href="/contact" className="text-purple-500">contact us</Link>.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div className="bg-slate-100 dark:bg-neutral-900 p-6 rounded-lg shadow-lg flex flex-col items-center">
            <FaCertificate className="text-4xl text-purple-500" />
            <p className="text-neutral-800 dark:text-white text-3xl font-bold">0</p>
            <p className="text-neutral-800 dark:text-slate-300">Certified Certificates</p>
        </div>
        <div className="bg-slate-100 dark:bg-neutral-900 p-6 rounded-lg shadow-lg flex flex-col items-center">
            <FaPlay className="text-4xl text-purple-500" />
            <p className="text-neutral-800 dark:text-white text-3xl font-bold">0</p>
            <p className="text-neutral-800 dark:text-slate-300">Training Courses</p>
        </div>
        </div>

        <div className="bg-slate-100 dark:bg-neutral-900 p-4 mt-4 rounded-lg shadow-lg text-center">
        <p className="text-neutral-800 dark:text-white">User ID: <span className="font-bold">2106208</span></p>
        <p className="text-sm text-gray-500">Use this ID when contacting support.</p>
        </div>
      <ModeToggle/> 
    </main>
    </div>
);
};

export default Profile;
