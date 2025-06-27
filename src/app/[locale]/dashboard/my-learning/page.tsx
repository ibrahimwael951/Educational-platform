"use client";

import React, { useState } from 'react';
import MyLearningTabs from '@/components/my-learning/MyLearningTabs'; 
import EnrolledCourseCard, { EnrolledCourse } from '@/components/my-learning/EnrolledCourseCard'; 
import {
Pagination,
PaginationContent,
PaginationItem,
PaginationNext,
PaginationPrevious,
} from "@/components/ui/pagination"; 


const enrolledCoursesData: EnrolledCourse[] = [
{ id: '1', title: 'The Web Front End Learning Guide', instructorName: 'Hassan Fulaih', thumbnailUrl: '/home/card1.png', progress: 11, userRating: 0 },
{ id: '2', title: 'Advanced React and GraphQL', instructorName: 'Jane Smith', thumbnailUrl: '/home/card2.png', progress: 75, userRating: 4 },
{ id: '3', title: 'Complete Python Bootcamp', instructorName: 'John Doe', thumbnailUrl: '/home/card3.png', progress: 100, userRating: 5 },
{ id: '4', title: 'UI/UX Design Essentials', instructorName: 'Emily White', thumbnailUrl: '/home/card4.png', progress: 0, userRating: 0 },
{ id: '5', title: 'SQL for Data Science', instructorName: 'Mohammed Ali', thumbnailUrl: '/home/card1.png', progress: 25, userRating: 0 },
{ id: '6', title: 'Photography Masterclass', instructorName: 'Chris Green', thumbnailUrl: '/home/card2.png', progress: 50, userRating: 3 },
{ id: '7', title: 'Business Fundamentals', instructorName: 'Patricia Black', thumbnailUrl: '/home/card3.png', progress: 90, userRating: 5 },
{ id: '8', title: 'Agile & Scrum for PMs', instructorName: 'Sam Wilson', thumbnailUrl: '/home/card4.png', progress: 5, userRating: 0 },
{ id: '9', title: 'Short Course on Vue.js', instructorName: 'Pierre Dubois', thumbnailUrl: '/home/card1.png', progress: 60, userRating: 4 },
];

const COURSES_PER_PAGE = 8; 


const PlaceholderTabContent = ({ title }: { title: string }) => (
<div className="flex items-center justify-center h-64 bg-gray-100 dark:bg-neutral-800 rounded-lg">
    <h2 className="text-xl font-semibold text-gray-500 dark:text-neutral-400">
    Content for {title} will be available soon.
    </h2>
</div>
);

const MyLearningPage = () => {
const [activeTab, setActiveTab] = useState('All courses');

const [currentPage, setCurrentPage] = useState(1);


const totalPages = Math.ceil(enrolledCoursesData.length / COURSES_PER_PAGE);


  const indexOfLastCourse = currentPage * COURSES_PER_PAGE;
  const indexOfFirstCourse = indexOfLastCourse - COURSES_PER_PAGE;
  const currentCourses = enrolledCoursesData.slice(indexOfFirstCourse, indexOfLastCourse);

const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
        setCurrentPage(page);
    }
};

return (
    <main className='mt-20'>
      {/* Header Section with Dark Background */}
    <header className="bg-neutral-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl text-white font-serif font-bold">My learning</h1>
        <MyLearningTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>
      </header>

      {/* Content Section */}
      <section className="bg-white dark:bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {activeTab === 'All courses' && (
            <>
              {/* The grid now maps over `currentCourses` instead of the full list */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {currentCourses.map((course) => (
                  <EnrolledCourseCard key={course.id} course={course}  />
                ))}
              </div>

  
              {/* Only show pagination if there is more than one page */}
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
                      <span className="px-4 py-2 text-sm text-neutral-700 dark:text-neutral-300">
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
            </>
          )}

          {activeTab === 'My Lists' && <PlaceholderTabContent title="My Lists" />}
          {activeTab === 'Wishlist' && <PlaceholderTabContent title="Wishlist" />}
          {activeTab === 'Certifications' && <PlaceholderTabContent title="Certifications" />}
        </div>
      </section>
    </main>
  );
};

export default MyLearningPage;