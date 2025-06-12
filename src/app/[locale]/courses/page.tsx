"use client";

import React, { useState, useMemo, useCallback } from "react";
import CourseCard from "@/components/home/CourseCard";
import FilterCourses, { FilterState } from "./FilterCourses";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

// Define a detailed Course type
interface Course {
  id: string;
  image: string;
  title: string;
  category: 'Development' | 'Business' | 'IT & Software' | 'Design' | 'Marketing' | 'Photography';
  price: number; 
  rating: number;
  duration: number; 
  level: 'All Levels' | 'Beginner' | 'Intermediate' | 'Expert';
  language: 'English' | 'Arabic' | 'French';
  createdAt: Date; 
  instructor: { name: string; avatar: string; };
}

// Comprehensive static data for courses to enable effective filtering
const allCourses: Course[] = [
  { id: '1', image: '/home/card1.png', title: 'React for Beginners', category: 'Development', price: 49, rating: 4.6, duration: 12, level: 'Beginner', language: 'English', createdAt: new Date('2023-10-20'), instructor: { name: 'John Doe', avatar: '/home/person1.png' } },
  { id: '2', image: '/home/card2.png', title: 'Advanced CSS and Sass', category: 'Design', price: 99, rating: 4.8, duration: 25, level: 'Intermediate', language: 'English', createdAt: new Date('2023-11-01'), instructor: { name: 'Jane Smith', avatar: '/home/person2.png' } },
  { id: '3', image: '/home/card3.png', title: 'Intro to Digital Marketing', category: 'Marketing', price: 0, rating: 4.2, duration: 5, level: 'Beginner', language: 'French', createdAt: new Date('2023-09-15'), instructor: { name: 'Sam Wilson', avatar: '/home/person3.png' } },
  { id: '4', image: '/home/card4.png', title: 'Complete Python Bootcamp', category: 'IT & Software', price: 199, rating: 4.7, duration: 40, level: 'All Levels', language: 'English', createdAt: new Date('2023-11-05'), instructor: { name: 'Emily White', avatar: '/home/person4.png' } },
  { id: '5', image: '/home/card1.png', title: 'Photography Masterclass', category: 'Photography', price: 79, rating: 4.9, duration: 15, level: 'All Levels', language: 'Arabic', createdAt: new Date('2023-08-10'), instructor: { name: 'Chris Green', avatar: '/home/person1.png' } },
  { id: '6', image: '/home/card2.png', title: 'Business Fundamentals', category: 'Business', price: 0, rating: 4.0, duration: 8, level: 'Beginner', language: 'English', createdAt: new Date('2023-11-10'), instructor: { name: 'Patricia Black', avatar: '/home/person2.png' } },
  { id: '7', image: '/home/card3.png', title: 'UI/UX Design Essentials', category: 'Design', price: 129, rating: 4.5, duration: 22, level: 'Intermediate', language: 'English', createdAt: new Date('2023-07-22'), instructor: { name: 'Michael Brown', avatar: '/home/person3.png' } },
  { id: '8', image: '/home/card4.png', title: 'Expert JavaScript', category: 'Development', price: 299, rating: 3.8, duration: 50, level: 'Expert', language: 'English', createdAt: new Date('2023-06-30'), instructor: { name: 'Sarah Jones', avatar: '/home/person4.png' } },
  { id: '9', image: '/home/card1.png', title: 'SQL for Data Science', category: 'IT & Software', price: 89, rating: 4.4, duration: 10, level: 'Intermediate', language: 'Arabic', createdAt: new Date('2023-10-25'), instructor: { name: 'Mohammed Ali', avatar: '/home/person1.png' } },
  { id: '10', image: '/home/card2.png', title: 'Short Course on Vue.js', category: 'Development', price: 29, rating: 4.1, duration: 0.5, level: 'Beginner', language: 'French', createdAt: new Date('2023-11-11'), instructor: { name: 'Pierre Dubois', avatar: '/home/person2.png' } },
  { id: '11', image: '/home/card3.png', title: 'Extended Photoshop Guide', category: 'Design', price: 69, rating: 3.2, duration: 6.5, level: 'Beginner', language: 'English', createdAt: new Date('2023-05-19'), instructor: { name: 'Jane Smith', avatar: '/home/person3.png' } },
  { id: '12', image: '/home/card4.png', title: 'Agile & Scrum for PMs', category: 'Business', price: 149, rating: 4.8, duration: 3.5, level: 'Expert', language: 'English', createdAt: new Date('2023-11-12'), instructor: { name: 'Sam Wilson', avatar: '/home/person4.png' } },
  { id: '9', image: '/home/card1.png', title: 'SQL for Data Science', category: 'IT & Software', price: 89, rating: 4.4, duration: 10, level: 'Intermediate', language: 'Arabic', createdAt: new Date('2023-10-25'), instructor: { name: 'Mohammed Ali', avatar: '/home/person1.png' } },
  { id: '10', image: '/home/card2.png', title: 'Short Course on Vue.js', category: 'Development', price: 29, rating: 4.1, duration: 0.5, level: 'Beginner', language: 'French', createdAt: new Date('2023-11-11'), instructor: { name: 'Pierre Dubois', avatar: '/home/person2.png' } },
  { id: '11', image: '/home/card3.png', title: 'Extended Photoshop Guide', category: 'Design', price: 69, rating: 3.2, duration: 6.5, level: 'Beginner', language: 'English', createdAt: new Date('2023-05-19'), instructor: { name: 'Jane Smith', avatar: '/home/person3.png' } },
  { id: '12', image: '/home/card4.png', title: 'Agile & Scrum for PMs', category: 'Business', price: 149, rating: 4.8, duration: 3.5, level: 'Expert', language: 'English', createdAt: new Date('2023-11-12'), instructor: { name: 'Sam Wilson', avatar: '/home/person4.png' } },
  { id: '9', image: '/home/card1.png', title: 'SQL for Data Science', category: 'IT & Software', price: 89, rating: 4.4, duration: 10, level: 'Intermediate', language: 'Arabic', createdAt: new Date('2023-10-25'), instructor: { name: 'Mohammed Ali', avatar: '/home/person1.png' } },
  { id: '10', image: '/home/card2.png', title: 'Short Course on Vue.js', category: 'Development', price: 29, rating: 4.1, duration: 0.5, level: 'Beginner', language: 'French', createdAt: new Date('2023-11-11'), instructor: { name: 'Pierre Dubois', avatar: '/home/person2.png' } },
  { id: '11', image: '/home/card3.png', title: 'Extended Photoshop Guide', category: 'Design', price: 69, rating: 3.2, duration: 6.5, level: 'Beginner', language: 'English', createdAt: new Date('2023-05-19'), instructor: { name: 'Jane Smith', avatar: '/home/person3.png' } },
  { id: '12', image: '/home/card4.png', title: 'Agile & Scrum for PMs', category: 'Business', price: 149, rating: 4.8, duration: 3.5, level: 'Expert', language: 'English', createdAt: new Date('2023-11-12'), instructor: { name: 'Sam Wilson', avatar: '/home/person4.png' } },
];

const COURSES_PER_PAGE = 20;

const CoursesPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [activeFilters, setActiveFilters] = useState<FilterState | null>(null);

  // Callback function to receive filters from the child component
  const handleFilterChange = useCallback((newFilters: FilterState) => {
    setActiveFilters(newFilters);
    setCurrentPage(1); // Reset to the first page whenever filters change
  }, []);

  // Use useMemo to efficiently filter and sort courses only when data or filters change
  const filteredCourses = useMemo(() => {
    if (!activeFilters) return allCourses;

    let updatedCourses = [...allCourses];

    // 1. Filter by Rating
    if (activeFilters.rating > 0) {
      updatedCourses = updatedCourses.filter(course => course.rating >= activeFilters.rating);
    }
    
    // 2. Filter by Price
    if (activeFilters.price.length > 0 && !activeFilters.price.includes('Paid') || !activeFilters.price.includes('Free')) {
        if(activeFilters.price.includes('Free')) updatedCourses = updatedCourses.filter(c => c.price === 0);
        if(activeFilters.price.includes('Paid')) updatedCourses = updatedCourses.filter(c => c.price > 0);
    }

    // 3. Filter by Duration
    if (activeFilters.duration.length > 0) {
        updatedCourses = updatedCourses.filter(course => {
            return activeFilters.duration.some(range => {
                if (range === "0-1 Hour") return course.duration <= 1;
                if (range === "1-3 Hours") return course.duration > 1 && course.duration <= 3;
                if (range === "3-6 Hours") return course.duration > 3 && course.duration <= 6;
                if (range === "6-17 Hours") return course.duration > 6 && course.duration <= 17;
                return false;
            });
        });
    }

    // 4. Filter by Checkbox groups (Category, Level, Language)
    const checkboxFilters: Array<keyof FilterState> = ['category', 'level', 'language'];
    checkboxFilters.forEach(key => {
        const filterValues = activeFilters[key] as string[];
        if (filterValues.length > 0) {
            updatedCourses = updatedCourses.filter(course => filterValues.includes(course[key as keyof Course] as string));
        }
    });

    // 5. Sort results
    if (activeFilters.sortBy === 'newest') {
        updatedCourses.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
    } else { // 'highest-rated' is default
        updatedCourses.sort((a, b) => b.rating - a.rating);
    }

    return updatedCourses;
  }, [activeFilters]);

  // Pagination logic
  const totalPages = Math.ceil(filteredCourses.length / COURSES_PER_PAGE);
  const currentCourses = filteredCourses.slice(
    (currentPage - 1) * COURSES_PER_PAGE,
    currentPage * COURSES_PER_PAGE
  );

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <section className="container mx-auto px-5 py-10 mt-20">
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} />
      <div className="text-center lg:text-left mb-10">
        <h1 className="text-3xl font-bold text-neutral-800 dark:text-white">
          All <span className="text-purple-500">Courses</span>
        </h1>
        <p className="text-neutral-600 dark:text-neutral-400 mt-2">Explore our wide range of courses to boost your skills.</p>
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
              {currentCourses.map((course , index) => (
                <CourseCard
                  key={index}
                  id={course.id}
                  image={course.image}
                  title={course.title}
                  category={course.category}
                  price={course.price}
                  rating={course.rating.toString()}
                  instructor={course.instructor}
                />
              ))}
            </div>
          ) : (
          <div className="text-center py-20 bg-gray-50 dark:bg-neutral-800 rounded-lg">
                <h3 className="text-xl font-semibold">No Courses Found</h3>
                <p className="text-neutral-500 mt-2">Try adjusting your filters to find what you&apos;re looking for.</p>
            </div>
          )}

           {/* Pagination */}
          {totalPages > 1 && (
            <Pagination className="mt-12 select-none">
              <PaginationContent>
                <PaginationItem className="cursor-pointer">
                  <PaginationPrevious
                    onClick={() => handlePageChange(currentPage - 1)}
                    className={currentPage === 1 ? 'pointer-events-none opacity-50' : 'hover:text-purple-600'}
                  />
                </PaginationItem>
                <PaginationItem>
                <span className="px-4 py-2 text-sm">
                    Page {currentPage} of {totalPages}
                  </span>
                </PaginationItem>
                <PaginationItem className="cursor-pointer">
                  <PaginationNext
                    onClick={() => handlePageChange(currentPage + 1)}
                    className={currentPage === totalPages ? 'pointer-events-none opacity-50' : 'hover:text-purple-600'}
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

export default CoursesPage;