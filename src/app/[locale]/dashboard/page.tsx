"use client";

import { useTranslations } from "next-intl";
import React, { useEffect, useState } from "react";
import { ModeToggle } from "@/components/themeToggole"; 
import LocaleSwitcher from "@/components/langToggle";
import {
  FaHome,
  FaGraduationCap,
  FaCertificate,
  FaPlay,
  FaHeart,
  FaList,
  FaBriefcase,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";

const api = process.env.NEXT_PUBLIC_API_BASE_URL;

type ProfileType = {
  user: {
    profile: string;
    firstName: string;
    lastName: string;
    _id: string;
    email: string;
  };
  certificates: number;
  training: number;
};

const fetchUserProfile = async () => {
  try {
    const res = await fetch(`${api}/users/profile`, {
      method: "GET",
      credentials: "include",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch user profile");
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching profile:", error);
    return null;
  }
};

const Profile = () => {
  const t = useTranslations("profileSection");

  // State to store profile data
  const [profile, setProfile] = useState<ProfileType | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadProfile = async () => {
      const data = await fetchUserProfile();
      if (data) {
        setProfile(data);
      } else {
        setError("Unable to load profile. Please try again later.");
      }
      setLoading(false);
    };

    loadProfile();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-4xl text-neutral-800 dark:text-white">Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-4xl text-red-600">{error}</p>
      </div>
    );
  }

   
  const fullName = `${profile?.user.firstName} ${profile?.user.lastName}`;
  const userId = profile?.user._id;
  const email = profile?.user.email;

  const liStyle =
    "flex items-center p-2 hover:bg-neutral-400 dark:hover:bg-neutral-900 rounded-2xl cursor-pointer duration-150";

  return (
    <div className="flex flex-col md:flex-row min-h-screen p-4">
      {/* Sidebar */}
      <aside className="bg-slate-100 dark:bg-neutral-800 w-full md:w-1/4 p-4 rounded-lg shadow-lg">
        <div className="flex flex-col justify-center items-center mb-4">
          <div className="w-24 h-24 mx-auto bg-red-500 text-white text-4xl flex items-center justify-center rounded-full">
            {fullName?.charAt(0)}  
          </div>
          <h2 className="font-bold text-neutral-800 dark:text-white text-lg mt-2">
            {fullName}
          </h2>
          <h3 className="font-bold text-neutral-800 dark:text-white text-lg mt-2 opacity-75">
            {email}
          </h3>
        </div>
        <ul className="space-y-1">
          <li className={liStyle}>
            <FaHome className="mr-2" /> {t("account")}
          </li>
          <li className={liStyle}>
            <FaGraduationCap className="mr-2" /> {t("courses")}
          </li>
          <li className={liStyle}>
            <FaCertificate className="mr-2" /> {t("certificates")}
          </li>
          <li className={liStyle}>
            <FaPlay className="mr-2" /> {t("featured")}
          </li>
          <li className={liStyle}>
            <FaHeart className="mr-2" /> {t("favorites")}
          </li>
          <li className={liStyle}>
            <FaList className="mr-2" /> {t("list")}
          </li>
          <li className={liStyle}>
            <FaBriefcase className="mr-2" /> {t("resume")}
          </li>
          <li className={liStyle}>
            <FaCog className="mr-2" /> {t("settings")}
          </li>
          <li className="flex items-center p-2 hover:bg-neutral-400 dark:hover:bg-neutral-800 cursor-pointer duration-100 text-red-500">
            <FaSignOutAlt className="mr-2" /> {t("logout")}
          </li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div className="bg-slate-100 dark:bg-neutral-800 p-6 rounded-lg shadow-lg flex flex-col items-center">
            <FaCertificate className="text-4xl text-purple-500" />
            <p className="text-neutral-800 dark:text-white text-3xl font-bold">
              {profile?.certificates || 0}
            </p>
            <p className="text-neutral-800 dark:text-slate-300">{t("certified")}</p>
          </div>
          <div className="bg-slate-100 dark:bg-neutral-800 p-6 rounded-lg shadow-lg flex flex-col items-center">
            <FaPlay className="text-4xl text-purple-500" />
            <p className="text-neutral-800 dark:text-white text-3xl font-bold">
              {profile?.training || 0}
            </p>
            <p className="text-neutral-800 dark:text-slate-300">{t("training")}</p>
          </div>
        </div>

        <div className="bg-slate-100 dark:bg-neutral-800 p-4 mt-4 rounded-lg shadow-lg text-center">
          <p className="text-neutral-800 dark:text-white">
            {t("user_id")}: <span className="font-bold">{userId}</span>
          </p>
          <p className="text-sm text-gray-500">{t("support_note")}</p>
        </div>
        <div className="flex justify-between items-center bg-slate-100 dark:bg-neutral-800 p-4 mt-4 rounded-lg shadow-lg text-center">
          <p className="text-neutral-800 dark:text-white">{t("change-language")}</p>
          <LocaleSwitcher />
        </div>
        <div className="flex justify-between items-center bg-slate-100 dark:bg-neutral-800 p-4 mt-4 rounded-lg shadow-lg text-center">
          <p className="text-neutral-800 dark:text-white">{t("change-Theme")}</p>
          <ModeToggle />
        </div>
      </main>
    </div>
  );
};

export default Profile;
