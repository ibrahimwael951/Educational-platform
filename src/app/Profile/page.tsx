import React from "react";
import { FaHome, FaGraduationCap, FaCertificate, FaPlay, FaHeart, FaList, FaBriefcase, FaCog, FaSignOutAlt, FaAngleDown } from "react-icons/fa";

const Profile = () => {
return (
    <div className="flex mt-30 flex-col md:flex-row bg-gray-200 min-h-screen p-4">
      {/* Sidebar */}
    <aside className="bg-white w-full md:w-1/4 p-4 rounded-lg shadow-lg">
        <div className="text-center mb-4">
        <div className="w-24 h-24 mx-auto bg-red-500 text-white text-4xl flex items-center justify-center rounded-full">
            R
        </div>
        <h2 className="font-bold text-lg mt-2">Rawan Ayman</h2>
        </div>
        <ul className="space-y-1">
        <li className="flex items-center p-2 hover:bg-gray-100 cursor-pointer">
            <FaHome className="mr-2" /> My Account
        </li>
        <li className="flex items-center p-2 hover:bg-gray-100 cursor-pointer">
            <FaGraduationCap className="mr-2" /> My Courses
        </li>
        <li className="flex items-center p-2 hover:bg-gray-100 cursor-pointer">
            <FaCertificate className="mr-2" /> Certificates
        </li>
        <li className="flex items-center p-2 hover:bg-gray-100 cursor-pointer">
            <FaPlay className="mr-2" /> Featured Courses
        </li>
        <li className="flex items-center p-2 hover:bg-gray-100 cursor-pointer">
            <FaHeart className="mr-2" /> Favorite Courses
        </li>
        <li className="flex items-center p-2 hover:bg-gray-100 cursor-pointer">
            <FaList className="mr-2" /> Course Lists
        </li>
        <li className="flex items-center p-2 hover:bg-gray-100 cursor-pointer">
            <FaBriefcase className="mr-2" /> Resume
        </li>
        <li className="flex items-center p-2 hover:bg-gray-100 cursor-pointer">
            <FaCog className="mr-2" /> Settings
        </li>
        <li className="flex items-center p-2 hover:bg-gray-100 cursor-pointer text-red-500">
            <FaSignOutAlt className="mr-2" /> Logout
        </li>
        </ul>
    </aside>
    
      {/* Main Content */}
    <main className="flex-1 p-4">
        <div className="bg-white p-4 rounded-lg shadow-lg">
        <p>If you face any issue, feel free to <a href="#" className="text-purple-500">contact us</a>.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
            <FaCertificate className="text-4xl text-purple-500" />
            <p className="text-black text-3xl font-bold">0</p>
            <p className="text-gray-600">Certified Certificates</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
            <FaPlay className="text-4xl text-purple-500" />
            <p className="text-black text-3xl font-bold">0</p>
            <p className="text-gray-600">Training Courses</p>
        </div>
        </div>

        <div className="bg-white p-4 mt-4 rounded-lg shadow-lg text-center">
        <p className="text-gray-600">User ID: <span className="font-bold">2106208</span></p>
        <p className="text-sm text-gray-500">Use this ID when contacting support.</p>
        </div>
    </main>
    </div>
);
};

export default Profile;
