"use client";

import { useEffect, useState, useRef } from "react";
import { IoIosSearch } from "react-icons/io";
import Link from "next/link";

type Instructor = {
  firstName: string;
  lastName: string;
  fullName: string;
  id: string;
};

type Course = {
_id: string;
  title: string;
  description: string;
  instructor: Instructor;
  sections: Record<string, unknown>[];
  price: number;
  category: string;
  level: string;
  language: string[];
  requirements: string[];
  whatYouWillLearn: string[];
  tags: string[];
  thumbnail: string;
  averageRating: number;
  totalReviews: number;
  totalStudents: number;
  isPublished: boolean;
  approvalStatus: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
  rejectionReason?: string;
};

const SearchButton = () => {
const [showInput, setShowInput] = useState(false);
const [query, setQuery] = useState("");
const [courses, setCourses] = useState<Course[]>([]);
console.log('courses: ', courses);

const [showDropdown, setShowDropdown] = useState(false);
const [isLoading, setIsLoading] = useState(false);
const inputRef = useRef<HTMLInputElement>(null);

useEffect(() => {
  const delayDebounce = setTimeout(async () => {
    if (query.trim()) {
      setIsLoading(true);
      try {
        const res = await fetch(
          `https://educational-platform-backend-production.up.railway.app/api/courses/?search=${query}`
        );
        const data = await res.json();
        setCourses(data.courses || []);
        setShowDropdown(true);
      } catch (err) {
        console.error("Fetch error:", err);
      } finally {
        setIsLoading(false);
      }
    } else {
      setCourses([]);
      setShowDropdown(false);
    }
  }, 400);

  return () => clearTimeout(delayDebounce);
}, [query]);


  return (
    <div className="w-full max-w-xl mx-auto relative">
      <div
        className={`bg-transparent border border-gray-900 dark:border-white rounded-full py-3 px-7 items-center gap-3 flex hover:bg-gray-100 dark:hover:bg-gray-400 focus-within:border-purple-500`}
      >
        <IoIosSearch
          className="text-gray-900 dark:text-white cursor-pointer"
        onClick={() => setShowInput(!showInput)}
        />

        <input
          ref={inputRef}
          type="text"
          placeholder="Search for courses"
          className={`outline-none bg-transparent w-full ${
            showInput ? "block" : "hidden"
          } sm:block`}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        {isLoading && (
          <div className="animate-spin rounded-full h-4 w-4 border-2 border-gray-900 dark:border-white" />
        )}
      </div>

      {/* Dropdown List */}
      {showDropdown && courses.length > 0 && (
        <ul className="absolute z-10 w-full bg-white dark:bg-gray-800 border border-gray-300 rounded-md mt-2 shadow-md max-h-60 overflow-auto">
          {courses.map((course: Course) => (
            <li key={course._id} className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer transition-colors duration-200">
              <Link
                href={`/courses/${course._id}`}
                onClick={() => {
                  setQuery(course.title);
                  setShowDropdown(false);
                }}
              >
                <div className="flex justify-between items-center">
                  <span>{course.title}</span>
                  <span className="text-sm text-gray-500">→</span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchButton;
