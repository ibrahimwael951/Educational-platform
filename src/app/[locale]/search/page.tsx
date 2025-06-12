"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { ToastContainer } from "react-toastify";
import CourseCard from "@/components/home/CourseCard";
import {
Pagination,
PaginationContent,
PaginationItem,
PaginationNext,
PaginationPrevious,
} from "@/components/ui/pagination";
import FilterCourses from "../courses/FilterCourses";

// --- TYPE DEFINITION ---
type Course = {
id: string;
title: string;
instructor: string;
category: string;
price: number;
rating: number;
reviews: number;
imageUrl: string;
};

// --- MOCK DATA ---
const allCourses: Course[] = [
    { id: 'react-complete-guide', title: 'React - The Complete Guide 2025 (incl. Next.js, Redux)', instructor: 'Maximilian S.', category: 'Development', price: 99, rating: 4.6, reviews: 230349, imageUrl: '/images/course-react.jpg' },
    { id: 'ultimate-react-course', title: 'The Ultimate React Course 2025: React, Next.js, Redux & More', instructor: 'Jonas S.', category: 'Development', price: 149, rating: 4.7, reviews: 20822, imageUrl: '/images/course-react-2.jpg' },
    { id: 'next-js-course', title: 'Next.js 14 & React - The Complete Guide', instructor: 'Maximilian S.', category: 'Development', price: 89, rating: 4.8, reviews: 15432, imageUrl: '/images/course-nextjs.jpg' },
    { id: 'js-bootcamp', title: 'The Complete JavaScript Course 2024: From Zero to Expert!', instructor: 'Jonas S.', category: 'Development', price: 199, rating: 4.5, reviews: 180123, imageUrl: '/images/course-js.jpg' },
    { id: 'css-course', title: 'Advanced CSS and Sass: Flexbox, Grid, Animations and More!', instructor: 'Jonas S.', category: 'Design', price: 99, rating: 4.2, reviews: 45000, imageUrl: '/images/course-css.jpg' },
    { id: 'agile-course', title: 'Agile Crash Course: Agile Project Management; Agile Delivery', instructor: 'Mauricio Rubio', category: 'Business', price: 149, rating: 3.8, reviews: 12000, imageUrl: '/images/course-agile.jpg' },
];


const SearchResultsComponent = () => {
  // 2. GET THE SEARCH QUERY FROM THE URL
  // This will read the 'q' parameter from a URL like: /search?q=react
const searchParams = useSearchParams();
const searchQuery = searchParams.get("q") || "";

  // State for the list of courses after all filters are applied
const [filteredCourses, setFilteredCourses] = useState<Course[]>([]);

  // State for sidebar filters, updated by the FilterCourses component
type SidebarFilters = {
category?: string[];
priceRange?: number;
rating?: number;
};

const [sidebarFilters, setSidebarFilters] = useState<SidebarFilters>({});

  // State for pagination
const [currentPage, setCurrentPage] = useState(1);
const [currentCourses, setCurrentCourses] = useState<Course[]>([]);
const coursesPerPage = 9;

  // 3. CENTRALIZED FILTERING LOGIC
useEffect(() => {
    let results = allCourses;

    if (searchQuery) {
    results = results.filter(
        (course) =>
        course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.instructor.toLowerCase().includes(searchQuery.toLowerCase())
    );
    }

    // Apply filters
    if (sidebarFilters.category && sidebarFilters.category.length > 0) {
    results = results.filter(course => sidebarFilters.category!.includes(course.category));
    }
    if (typeof sidebarFilters.priceRange === "number") {
    results = results.filter(course => course.price <= sidebarFilters.priceRange!);
    }
    if (typeof sidebarFilters.rating === "number") {
    results = results.filter(course => course.rating >= sidebarFilters.rating!);
    }

    setFilteredCourses(results);
    
    setCurrentPage(1);
}, [searchQuery, sidebarFilters]); 

  // This useEffect for pagination
useEffect(() => {
    const indexOfLastCourse = currentPage * coursesPerPage;
    const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
    setCurrentCourses(filteredCourses.slice(indexOfFirstCourse, indexOfLastCourse));
}, [currentPage, filteredCourses]);


const handleFilterChange = (filters: SidebarFilters) => {
    setSidebarFilters(filters);
};


const handlePageChange = (pageNumber: number) => {
    const totalPages = Math.ceil(filteredCourses.length / coursesPerPage);
    if (pageNumber >= 1 && pageNumber <= totalPages) {
    setCurrentPage(pageNumber);
    }
};

const totalPages = Math.ceil(filteredCourses.length / coursesPerPage);

    return (
        <section className="container mx-auto px-5 py-10 mt-20">
    <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} />

    <div className="text-center lg:text-left mb-10">
        <h1 className="text-3xl font-bold">
        {searchQuery ? `Results for "${searchQuery}"` : "Explore All Courses"}
        </h1>
        <p className="text-neutral-600 dark:text-neutral-400 mt-2">
            Found {filteredCourses.length} matching courses.
        </p>
    </div>

    <div className="flex flex-col lg:flex-row gap-10 mt-10">
        {/* Filters Sidebar */}
        <div className="lg:w-1/4">
        <FilterCourses onFilter={handleFilterChange} />
        </div>

        {/* Courses Cards & Pagination */}
        <div className="flex-1">
        <p className="mb-6 text-sm text-neutral-600 dark:text-neutral-300">
            Showing <span className="font-bold">{currentCourses.length}</span> of <span className="font-bold">{filteredCourses.length}</span> results
        </p>
        {currentCourses.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {currentCourses.map((course) => (
                <CourseCard
loading={false}
key={course.id}
id={course.id}
image={course.imageUrl}
title={course.title}
category={course.category}
price={course.price}
rating={course.rating.toString()}
instructor={{ name: course.instructor, avatar: "/images/default-avatar.png" }}
            />
            ))}
            </div>
        ) : (
        <div className="text-center py-20 bg-gray-50 dark:bg-neutral-800 rounded-lg">
                <h3 className="text-xl font-semibold">No Courses Found</h3>
                <p className="text-neutral-500 mt-2">
                    Try adjusting your search or filters to find what you&#39;re looking for.
                </p>
            </div>
        )}

           {/* Pagination */}
        {totalPages > 1 && (
            <Pagination className="mt-12">
            <PaginationContent>
                <PaginationItem>
                <PaginationPrevious
                    onClick={() => handlePageChange(currentPage - 1)}
                    className={currentPage === 1 ? 'pointer-events-none opacity-50' : ''}
                />
                </PaginationItem>
                <PaginationItem>
                <span className="px-4 py-2 text-sm">
                    Page {currentPage} of {totalPages}
                </span>
                </PaginationItem>
                <PaginationItem>
                <PaginationNext
                    onClick={() => handlePageChange(currentPage + 1)}
                    className={currentPage === totalPages ? 'pointer-events-none opacity-50' : ''}
                />
                </PaginationItem>
            </PaginationContent>
            </Pagination>
        )}
        </div>
    </div>
    </section>
    );
};

// The Suspense wrapper is necessary for client components that use useSearchParams.
// It allows the rest of the page to render while the component waits for the search params to be available.
const SearchPage = () => {
    return (
        <Suspense fallback={<div>Loading search results...</div>}>
            <SearchResultsComponent />
        </Suspense>
    );
};

export default SearchPage;