"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaHeart, FaStar } from "react-icons/fa";

interface wishlistCard {
  id: number;
  title: string;
  instructor: string;
  image: string; 
  rating: number;
  reviews: number;
  totalHours: number;
  lectures: number;
}

// Preview data of courses to simulate a real data source
const previewCourses: wishlistCard[] = [
  {
    id: 1,
    title: "React Js beginner Course",
    instructor: "Cesar Yoc",
    image: "/home/card1.png",
    rating: 5.0,
    reviews: 1,
    totalHours: 2.5,
    lectures: 16,
  },
  {
    id: 2,
    title: "React Js beginner Course",
    instructor: "Jane Smith",
    image: "/home/card1.png", 
    rating: 4.7,
    reviews: 245,
    totalHours: 18,
    lectures: 64,
  },
];

const WishlistPage = () => {
  const t = useTranslations("wishlistPage");
  const [wishlist, setWishlist] = useState<wishlistCard[]>([]);


  useEffect(() => {
    setWishlist(previewCourses);
  }, []);

  // Function to remove a course from the wishlist state
  const removeFromWishlist = (id: number) => {
    const updatedWishlist = wishlist.filter((course) => course.id !== id);
    setWishlist(updatedWishlist);
    console.log(`Removed course with id: ${id} from wishlist.`);
  };

  return (
      <div className="max-w-5xl mx-auto p-6 mt-20">
      <h1 className="text-3xl font-bold mb-6">{t("title")}</h1>
        {wishlist.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-lg shadow-sm">
            <p className="text-gray-600 text-xl">{t("emptyWishlist")}</p>
            <Link href="/courses" className="text-purple-600 hover:underline mt-2 inline-block font-semibold">
              {t("discoverCourse")}
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10">
            {wishlist.map((course) => (
              <div key={course.id} className="w-full">
                {/* The 'group' class enables the hover effect on child elements */}
                <div className="group relative">
                  {/* The image is a link to the course details page */}
                  <Link href={`/courses/${course.id}`}>
                      <Image
                        src={course.image}
                        alt={course.title}
                        width={300}
                        height={169} // Maintain a 16:9 aspect ratio
                        className="w-full h-auto object-cover"
                      />
                  </Link>

                  {/* Heart icon button to remove from wishlist. It appears on hover. */}
                  <button
                    onClick={() => removeFromWishlist(course.id)}
                    className="absolute top-2 right-2 w-10 h-10 flex items-center justify-center bg-purple-700 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 ease-in-out hover:bg-purple-800"
                    aria-label="Remove from wishlist"
                  >
                    <FaHeart className="w-5 h-5 text-white" />
                  </button>
                </div>
                
                {/* Text Content below the image */}
                <div className="pt-3">
                  <h3 className="font-bold text-black text-base leading-tight">
                    <Link href={`/courses/${course.id}`} className="dark:text-white text-black transition-colors">
                        {course.title}
                    </Link>
                  </h3>
                  <p className="text-gray-500 text-xs mt-1">{course.instructor}</p>
                  
                  {/* Rating Section */}
                  <div className="flex items-center gap-1.5 mt-1">
                    <span className="font-bold text-sm text-orange-800">{course.rating.toFixed(1)}</span>
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                          <FaStar key={i} size={14} />
                      ))}
                    </div>
                    <span className="text-xs text-gray-500">({course.reviews.toLocaleString()})</span>
                  </div>
                  
                  {/* Course Details */}
                  <p className="text-xs text-gray-500 mt-1">
                    {course.totalHours} total hours · {course.lectures} lectures
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
  );
};

export default WishlistPage;