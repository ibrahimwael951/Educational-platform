"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { FaBookmark } from "react-icons/fa";
import Link from "next/link";
import { Course } from "@/types";


const WishlistPage = () => {
  const [wishlist, setWishlist] = useState<Course[]>([]);

  // Get Course From Storage
  useEffect(() => {
    const storedWishlist = localStorage.getItem("wishlist");
    if (storedWishlist) {
      try {
        const parsedWishlist: Course[] = JSON.parse(storedWishlist);
        setWishlist(parsedWishlist);
      } catch (error) {
        console.error("Error parsing wishlist from localStorage:", error);
        setWishlist([]);
      }
    }
  }, []);

  // Remove Course 
  const removeFromWishlist = (id: number) => {
    const updatedWishlist = wishlist.filter((course) => course.id !== id);
    setWishlist(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
  };

  return (
    <div className="max-w-5xl mx-auto p-6 mt-10">
      <h1 className="text-3xl font-bold mb-6">Wishlist</h1>
      {wishlist.length === 0 ? (
        <div className="text-center py-10">
          <p className="text-gray-500 text-lg">You have no courses in your wishlist.</p>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 gap-6">
          {wishlist.map((course) => (
            <div key={course.id} className="bg-white shadow-md rounded-lg overflow-hidden flex">
              <Image src={course.image} alt={course.title} width={200} height={200} className="w-32 h-32 object-cover" />
              <div className="p-4 flex-1">
                <h2 className="text-xl font-semibold">{course.title}</h2>
                <p className="text-gray-600 text-sm">{course.instructor}</p>
                <div className="flex items-center gap-2 text-purple-500 mt-1">
                  <span className="font-bold">{course.rating}</span>
                  <span className="text-gray-500">({course.reviews} reviews)</span>
                </div>
                <div className="inline-block items-center mt-3">
                <Link href={'/courses/player'} className="p-2 rounded-xl bg-purple-500 mt-6 inline-block hover:bg-purple-700 text-white font-bold text-center cursor-pointer">
            Play Course 
          </Link>
                  <div className="flex gap-3 p-2 mt-2 rounded-xl bg-red-500 hover:bg-red-700 text-white font-bold text-center cursor-pointer">
                    <button onClick={() => removeFromWishlist(course.id)} >
                    </button>
                    <FaBookmark className="w-5 h-5" /> Remove From Wishlist
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WishlistPage;
