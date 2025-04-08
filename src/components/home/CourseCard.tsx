"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FaFileInvoice, FaClock, FaUser, FaStar } from "react-icons/fa";
import { CiShoppingCart } from "react-icons/ci";
import { Link } from "@/i18n/navigation";
import { toast } from "react-toastify"; 
import "react-toastify/dist/ReactToastify.css"; 

interface CourseCardProps {
  id: number;
  image: string;
  title: string;
  category: string;
  price: string;
  rating: string;
  lessons: string;
  duration: string;
  students: string;
  instructor: {
    name: string;
    avatar: string;
  };
}

const CourseCard: React.FC<CourseCardProps> = ({
  id,
  image,
  title,
  category,
  price,
  rating,
  lessons,
  duration,
  students,
  instructor,
}) => {
  // Check user signed in
  const [isUserLoggedIn, setIsUserLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsUserLoggedIn(Boolean(localStorage.getItem("user")));
    }
  }, []);

  const handleAddToCart = () => {
    if (!isUserLoggedIn) {
      toast.error(
        <div>
          You must sign in! 
          <Link href="/sign-in" className="text-blue-500 ml-2">Sign In</Link>
        </div>, 
        { autoClose: false }
      );
    } else {
      window.location.href = "/cart";
    }
  };

  const handleToCheckout = () => {
    if (!isUserLoggedIn) {
      toast.error(
        <div>
          You must sign in! 
          <Link href="/sign-in" className="text-blue-500 ml-2">Sign In</Link>
        </div>, 
        { autoClose: false }
      );
    } else {
      window.location.href = "/checkout";
    }
  };

  return (
    <div className="w-[300px] overflow-hidden border-solid border-purple-500 border-2 bg-slate-200 dark:bg-neutral-900 shadow-lg rounded-xl p-6 m-5 justify-center items-center">
      {/* Course Cover*/}
      <div className="relative w-full h-48">
        <Image src={image} alt={title} layout="fill" objectFit="cover" className="rounded-lg" />
      </div>

      {/* Course Category*/}
      <p className="mt-3 text-sm font-semibold text-purple-600 bg-purple-100 px-3 py-1 inline-block rounded-lg">
        {category}
      </p>

      <div className="mt-4">
        {/* Rating and Price*/}
        <div className="flex justify-between items-center text-sm">
          <p className="flex">
            <FaStar />
            <span className="ml-2">{rating}</span>
          </p>
          <p className="font-semibold text-lg text-purple-700">{price}</p>
        </div>

        {/* Course Title*/}
        <h5 className="text-lg font-bold mt-2 ">{title}</h5>

        {/* Course Data*/}
        <div className="flex flex-wrap gap-4 mt-3 text-sm">
          <div className="flex items-center gap-1">
            <FaFileInvoice className="text-purple-600"/>
            <p>{lessons} Lessons</p>
          </div>
          <div className="flex items-center gap-1">
            <FaClock className="text-purple-600" />
            <p>{duration}</p>
          </div>
          <div className="flex items-center gap-1">
            <FaUser className="text-purple-600" />
            <p>{students} Students</p>
          </div>
        </div>

        <div className="flex justify-between items-center">
        <button
          onClick={handleAddToCart}
          className="flex gap-2 p-2 rounded-xl bg-purple-500 mt-6 hover:bg-purple-700 justify-center items-center text-white font-bold text-center cursor-pointer">
          <CiShoppingCart /> Add To Cart
        </button>

        <button
          onClick={handleToCheckout}
          className="flex gap-2 p-2 rounded-xl bg-purple-500 mt-6 hover:bg-purple-700 justify-center items-center text-white font-bold text-center cursor-pointer">
          <CiShoppingCart /> Buy Now
        </button>
        </div>

        {/* Instructor Data*/}
        <div className="flex justify-between items-center mt-7">
          <div className="flex items-center gap-3">
            <Image src={instructor.avatar} alt={instructor.name} width={45} height={45} className="rounded-full" />
            <p className="font-medium text-neutral-800 dark:text-white">{instructor.name}</p>
          </div>
          
          <Link href={`/courses/${id}`} className="p-3 items-center rounded-xl bg-purple-500 inline-block hover:bg-purple-700 text-white duration-150">
            Details →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;

