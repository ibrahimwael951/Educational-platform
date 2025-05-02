// "use client";

// import React, { useState, useEffect } from "react";
// import CourseCard from "@/components/home/CourseCard";
// import FilterCourses from "./FilterCourses";
// import { useTranslations } from "next-intl";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import {
//   Pagination,
//   PaginationContent,
//   PaginationItem,
//   PaginationNext,
//   PaginationPrevious,
// } from "@/components/ui/pagination";

// interface Course {
//   id: number;
//   image: string;
//   title: string;
//   category: string;
//   price: string;
//   rating: number;
//   lessons: string;
//   duration: string;
//   students: string;
//   instructor: {
//     name: string;
//     avatar: string;
//   };
// }

// const CoursesPage = () => {
//   const t = useTranslations("courses");

//   const [currentPage, setCurrentPage] = useState(1);
//   const [filters, setFilters] = useState<{ rating?: number; price?: string; duration?: string }>({});
//   const [filteredCourses, setFilteredCourses] = useState<Course[]>([]);
//   const coursesPerPage = 3;

//   // Courses Data
//   const allCourses: Course[] = Array(8)
//     .fill(null)
//     .map((_, index) => ({
//       id: index,
//       image: "/home/card1.png",
//       title: t("title"),
//       category: t("category"),
//       price: index % 2 === 0 ? "Free" : "$99", 
//       rating: 4.2 + (index % 2), 
//       lessons: `${10 + index} Lessons`,
//       duration: index % 3 === 0 ? "< 1 hour" : index % 3 === 1 ? "1-5 hours" : "> 5 hours", 
//       students: `${100 + index} Students`,
//       instructor: {
//         name: t("instructor"),
//         avatar: "/home/person1.png",
//       },
//     }));

//   useEffect(() => {
//     applyFilters();
//   }, [filters]);

//   const applyFilters = () => {
//     let updatedCourses = [...allCourses];

//     if (filters.rating) {
//       updatedCourses = updatedCourses.filter(course => course.rating >= (filters.rating ?? 0));
//     }

//     if (filters.price) {
//       updatedCourses = updatedCourses.filter(course => {
//         if (filters.price === "Free") return course.price === "Free";
//         if (filters.price === "Paid") return course.price !== "Free";
//         return true;
//       });
//     }

//     if (filters.duration) {
//       updatedCourses = updatedCourses.filter(course => course.duration === filters.duration);
//     }

//     setFilteredCourses(updatedCourses);
//     setCurrentPage(1); // Reset page on filter change
//   };

//   const handleFilterChange = (newFilters: { rating?: number; price?: string; duration?: string }) => {
//     setFilters(newFilters);
//   };


//   const totalPages = Math.ceil(filteredCourses.length / coursesPerPage);
//   const indexOfLastCourse = currentPage * coursesPerPage;
//   const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
//   const currentCourses = filteredCourses.slice(indexOfFirstCourse, indexOfLastCourse);

//   const handlePageChange = (pageNumber: number) => {
//     setCurrentPage(pageNumber);
//   };

//   return (
//     <section className="container px-5 py-10 mt-10">
//       <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} />
//       <div className="flex justify-between items-center mt-10">
//         <h1 className="capitalize text-neutral-800 dark:text-white">
//           {t("title")}
//           <span className="circle"> {t("subtitle")}</span>
//         </h1>
//       </div>

//   <div className="flex flex-wrap sm:inline-block md:inline-block lg:flex gap-10 mt-10">
//   {/* Filters*/}
//   <div className="w-50 flex fle-col">
//     <FilterCourses onFilter={handleFilterChange} />
//     <p className="mt-6 text-center text-neutral-600 dark:text-neutral-300">
//       {filteredCourses.length} {t("results")}
//     </p>
//   </div>

//   {/* Courses Cards*/}
//   <div className="flex-1">
//     <div className="flex flex-wrap gap-6 items-start justify-start select-none">
//       {currentCourses.map((course) => (
//         <CourseCard
//           key={course.id}
//           id={course.id}
//           image={course.image}
//           title={course.title}
//           category={course.category}
//           price={course.price}
//           rating={course.rating.toString()}
//           instructor={course.instructor}
//         />
//       ))}
//     </div>
//   </div>
// </div>

//       {/* Pagination */}
//       <Pagination>
//         <PaginationContent className="justify-center">
//           <PaginationItem>
//             <PaginationPrevious
//               onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
//               className={currentPage === 1 ? 'pointer-events-none opacity-50' : ''}
//             />
//           </PaginationItem>
//           <PaginationItem>
//             <span className="px-2 text-sm">
//               Page {currentPage} of {totalPages}
//             </span>
//           </PaginationItem>
//           <PaginationItem>
//             <PaginationNext
//               onClick={() => handlePageChange(Math.min(currentPage + 1, totalPages))}
//               className={currentPage === totalPages ? 'pointer-events-none opacity-50' : ''}
//             />
//           </PaginationItem>
//         </PaginationContent>
//       </Pagination>
//     </section>
//   );
// };

// export default CoursesPage;


"use client";

import React, { useState, useEffect } from "react";
import CourseCard from "@/components/home/CourseCard";
import FilterCourses from "./FilterCourses";
import { useTranslations } from "next-intl";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface Course {
  id: number;
  image: string;
  title: string;
  category: string;
  price: string;
  rating: number;
  lessons: string;
  duration: string;
  students: string;
  instructor: {
    name: string;
    avatar: string;
  };
}

const CoursesPage = () => {
  const t = useTranslations("courses");

  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState<{ rating?: number; price?: string; duration?: string }>({});
  const [filteredCourses, setFilteredCourses] = useState<Course[]>([]);
  const coursesPerPage = 3;

  // Courses Data
  const allCourses: Course[] = Array(8)
    .fill(null)
    .map((_, index) => ({
      id: index,
      image: "/home/card1.png",
      title: t("title"),
      category: t("category"),
      price: index % 2 === 0 ? "Free" : "$99", 
      rating: 4.2 + (index % 2), 
      lessons: `${10 + index} Lessons`,
      duration: index % 3 === 0 ? "< 1 hour" : index % 3 === 1 ? "1-5 hours" : "> 5 hours", 
      students: `${100 + index} Students`,
      instructor: {
        name: t("instructor"),
        avatar: "/home/person1.png",
      },
    }));

  useEffect(() => {
    applyFilters();
  }, [filters]);

  const applyFilters = () => {
    let updatedCourses = [...allCourses];

    if (filters.rating) {
      updatedCourses = updatedCourses.filter(course => course.rating >= (filters.rating ?? 0));
    }

    if (filters.price) {
      updatedCourses = updatedCourses.filter(course => {
        if (filters.price === "Free") return course.price === "Free";
        if (filters.price === "Paid") return course.price !== "Free";
        return true;
      });
    }

    if (filters.duration) {
      updatedCourses = updatedCourses.filter(course => course.duration === filters.duration);
    }

    setFilteredCourses(updatedCourses);
    setCurrentPage(1); // Reset page on filter change
  };

  const handleFilterChange = (newFilters: { rating?: number; price?: string; duration?: string }) => {
    setFilters(newFilters);
  };


  const totalPages = Math.ceil(filteredCourses.length / coursesPerPage);
  const indexOfLastCourse = currentPage * coursesPerPage;
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
  const currentCourses = filteredCourses.slice(indexOfFirstCourse, indexOfLastCourse);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <section className="container px-5 py-10 mt-10">
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} />
      <div className="flex justify-between items-center mt-10">
        <h1 className="capitalize text-neutral-800 dark:text-white">
          {t("title")}
          <span className="circle"> {t("subtitle")}</span>
        </h1>
      </div>

      <div className="flex flex-col lg:flex-row gap-10 mt-10">
  {/* Filters*/} 
  <div className="min-w-[260px]">
    <FilterCourses onFilter={handleFilterChange} />
    <p className="mt-6 text-center text-neutral-600 dark:text-neutral-300">
      {filteredCourses.length} {t("results")}
    </p>
  </div>

  {/* Courses Cards*/} 
  <div className="flex-1">
    <div className="flex flex-wrap gap-6 items-start justify-start select-none">
      {currentCourses.map((course) => (
        <CourseCard
          key={course.id}
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
  </div>
</div>


      {/* Pagination */}
      <Pagination>
        <PaginationContent className="justify-center">
          <PaginationItem>
            <PaginationPrevious
              onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
              className={currentPage === 1 ? 'pointer-events-none opacity-50' : ''}
            />
          </PaginationItem>
          <PaginationItem>
            <span className="px-2 text-sm">
              Page {currentPage} of {totalPages}
            </span>
          </PaginationItem>
          <PaginationItem>
            <PaginationNext
              onClick={() => handlePageChange(Math.min(currentPage + 1, totalPages))}
              className={currentPage === totalPages ? 'pointer-events-none opacity-50' : ''}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </section>
  );
};

export default CoursesPage;


