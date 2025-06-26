"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation"; 
import { IoIosSearch } from "react-icons/io";
import { FaChalkboardTeacher, FaBook, FaLayerGroup, FaArrowRight } from 'react-icons/fa';

// --- TYPE DEFINITIONS ---
type Course = {
  id: string;
  title: string;
  category: string;
};

type Instructor = {
  id: string;
  name: string;
  position: string;
};

type Category = {
  id: string;
  name: string;
};

type SearchResults = {
  courses: Course[];
  instructors: Instructor[];
  categories: Category[];
};

// --- STATIC DEMO DATA
const staticCourses: Course[] = [
  { id: 'react-complete-guide', title: 'React - The Complete Guide 2025 (incl. Next.js, Redux)', category: 'Development' },
  { id: 'ultimate-react-course', title: 'The Ultimate React Course 2025: React, Next.js, Redux & More', category: 'Development' },
  { id: 'js-bootcamp', title: 'The Complete JavaScript Course 2024: From Zero to Expert!', category: 'Development' },
  { id: 'web-dev-bootcamp', title: 'The Complete 2024 Web Development Bootcamp', category: 'Development' },
  { id: 'next-js-course', title: 'Next.js 14 & React - The Complete Guide', category: 'Development' },
];

const staticInstructors: Instructor[] = [
  { id: 'maximilian-schwarzmuller', name: "Maximilian Schwarzmüller", position: "Instructor" },
  { id: 'jonas-schmedtmann', name: "Jonas Schmedtmann", position: "Instructor" },
  { id: 'angela-yu', name: "Angela Yu", position: "Instructor" },
];

const staticCategories: Category[] = [
    { id: "react-native", name: "React Native for Mobile Apps" },
    { id: "full-stack", name: "Full-Stack Development with React" },
    { id: "typescript", name: "React and TypeScript Projects" },
    { id: "next-js", name: "React with Next.js and Redux" },
];


/**
 * Custom hook that closes a dropdown when a click is detected outside of it.
 */
const useOnClickOutside = (ref: React.RefObject<HTMLElement | null>, handler: (event: MouseEvent | TouchEvent) => void) => {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }
      handler(event);
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
};

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResults>({ courses: [], instructors: [], categories: [] });
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const searchContainerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useOnClickOutside(searchContainerRef, () => setIsDropdownVisible(false));

  // Debounced search effect
  useEffect(() => {
    if (query.trim() === "") {
      setResults({ courses: [], instructors: [], categories: [] });
      setIsDropdownVisible(false);
      return;
    }

    setIsDropdownVisible(true);
    setIsLoading(true);

    const debounceTimer = setTimeout(() => {
      const lowerCaseQuery = query.toLowerCase();

      const filteredCourses = staticCourses.filter(course =>
        course.title.toLowerCase().includes(lowerCaseQuery)
      );
      const filteredInstructors = staticInstructors.filter(instructor =>
        instructor.name.toLowerCase().includes(lowerCaseQuery)
      );
      const filteredCategories = staticCategories.filter(category =>
        category.name.toLowerCase().includes(lowerCaseQuery)
      );
      
      setResults({
        courses: filteredCourses,
        instructors: filteredInstructors,
        categories: filteredCategories,
      });

      setIsLoading(false);
    }, 400);

    return () => clearTimeout(debounceTimer);
  }, [query]);

  // Handle form submission (e.g., pressing Enter)
  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (query.trim()) {
      setIsDropdownVisible(false);
      // Navigate to the search page, passing the query in the URL
      router.push(`/search?q=${encodeURIComponent(query.trim())}`);
      
      setQuery("");
    }
  }

  // This handler is called when a user clicks on a result link
  const handleLinkClick = () => {
    setIsDropdownVisible(false);
    
  };

  const hasResults = results.courses.length > 0 || results.instructors.length > 0 || results.categories.length > 0;

  return (
    <div ref={searchContainerRef} className="w-full max-w-xl mx-auto relative">
      {/* The form handles the "Enter" key press to submit the search */}
      <form onSubmit={handleSearchSubmit} className="relative">
        <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
          <IoIosSearch className="text-gray-500 dark:text-gray-400" size={20} />
        </div>
        <input
          type="text"
          placeholder="Search for anything"
          className="w-full h-12 pl-12 pr-4 bg-transparent border border-black dark:border-white rounded-full text-neutral-800 dark:text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => query && setIsDropdownVisible(true)}
        />
      </form>

      {/* Dropdown Results */}
      {isDropdownVisible && (
        <div className="absolute z-50 w-full bg-white dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 rounded-lg mt-2 shadow-lg max-h-[70vh] overflow-y-auto">
          {isLoading ? (
            <p className="p-4 text-center text-gray-500 dark:text-gray-400">Searching...</p>
          ) : !hasResults ? (
            <p className="p-4 text-center text-gray-500 dark:text-gray-400">No results found for &quot;{query}&quot;.</p>
          ) : (
            <div className="p-2 space-y-2">
              {/* Courses Section */}
              {results.courses.length > 0 && (
                <section>
                  <h3 className="px-3 py-2 text-xs font-semibold text-gray-500 uppercase flex items-center gap-2"><FaBook /> Courses</h3>
                  <ul>
                    {results.courses.slice(0, 5).map((course) => ( // Show top 5
                      <li key={course.id}>
                        <Link href={`/courses/${course.id}`} onClick={handleLinkClick} className="flex justify-between items-center w-full text-left px-3 py-2.5 hover:bg-gray-100 dark:hover:bg-neutral-700 rounded-md transition-colors duration-200">
                          <div>
                            <p className="text-neutral-800 dark:text-white font-medium">{course.title}</p>
                            <p className="text-sm text-gray-500">{course.category}</p>
                          </div>
                          <FaArrowRight className="text-gray-400 ml-4 flex-shrink-0" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              {/* Instructors Section */}
              {results.instructors.length > 0 && (
                <section>
                  <h3 className="px-3 py-2 text-xs font-semibold text-gray-500 uppercase flex items-center gap-2"><FaChalkboardTeacher /> Instructors</h3>
                  <ul>
                    {results.instructors.map((instructor) => (
                      <li key={instructor.id}>
                        <Link href={`/instructors/${instructor.id}`} onClick={handleLinkClick} className="flex justify-between items-center w-full text-left px-3 py-2.5 hover:bg-gray-100 dark:hover:bg-neutral-700 rounded-md transition-colors duration-200">
                            <div>
                              <p className="text-neutral-800 dark:text-white font-medium">{instructor.name}</p>
                            </div>
                          <FaArrowRight className="text-gray-400 ml-4 flex-shrink-0" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              {/* Categories Section */}
              {results.categories.length > 0 && (
                <section>
                    <h3 className="px-3 py-2 text-xs font-semibold text-gray-500 uppercase flex items-center gap-2"><FaLayerGroup /> Categories</h3>
                    <ul>
                        {results.categories.map((category) => (
                            <li key={category.id}>
                                <Link href={`/courses?category=${category.id}`} onClick={handleLinkClick} className="flex justify-between items-center w-full text-left px-3 py-2.5 hover:bg-gray-100 dark:hover:bg-neutral-700 rounded-md transition-colors duration-200">
                                    <p className="text-neutral-800 dark:text-white font-medium">{category.name}</p>
                                    <FaArrowRight className="text-gray-400 ml-4 flex-shrink-0" />
                                </Link>
                            </li>
                        ))}
                    </ul>
                </section>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;