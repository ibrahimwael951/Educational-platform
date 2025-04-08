import React from "react";
import CourseCard from "@/components/home/CourseCard";
import { useTranslations } from "next-intl";
import { ToastContainer } from "react-toastify"; 
import "react-toastify/dist/ReactToastify.css";

const CoursesPage = () => {
  const t = useTranslations("courses");

  return (
    <section className="container mx-auto px-6 py-10 mt-10">
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} />
      <div className="flex justify-between items-center mt-10">
        <h1 className="capitalize text-neutral-800 dark:text-white">
          {t("title")}
          <span className="circle"> {t("subtitle")}</span>
        </h1>
      </div>


      <div className="flex flex-wrap mt-6 items-center justify-center select-none">
        {Array(8)
          .fill(null)
          .map((_, index) => (
            <CourseCard
            id={index}
              key={index}
              image="/home/card1.png"
              title={t("title")}
              category={t("category")}
              price={t("price")}
              rating={t("rating")}
              lessons={t("lessons")}
              duration={t("duration")}
              students={t("students")}
              instructor={{
                name: t("instructor"),
                avatar: "/home/person1.png",
              }}
            />
          ))}
      </div>
    </section>
  );
};

export default CoursesPage;

// "use client";

// import React, { useState, useEffect } from "react";
// import CourseCard from "@/components/home/CourseCard";
// import { useTranslations } from "next-intl";
// import { motion } from "framer-motion";

// interface Course {
//   _id: string;
//   title: string;
//   description: string;
//   instructor: {
//     firstName: string;
//     lastName: string;
//   };
//   reviews: string[];
//   price: number;
//   category: string;
//   duration: number;
//   thumbnail: string;
// }

// const CoursesPage = () => {
//   const [courses, setCourses] = useState<Course[]>([]);
//   const [loading, setLoading] = useState(true);
//   const t = useTranslations("courses");

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const res = await fetch(
//           "https://educational-platform-backend-production.up.railway.app/api/courses"
//         );
//         if (!res.ok) throw new Error("Failed to fetch data");
//         const data = await res.json();

//         if (Array.isArray(data.courses)) {
//           setCourses(data.courses);
//         } else {
//           console.error("Invalid data format:", data);
//           setCourses([]);
//         }
//       } catch (error) {
//         console.error("Error fetching courses:", error);
//       } finally {
//         setLoading(false);
//       }
//     }
//     fetchData();
//   }, []);

//   return (
//     <section className="container mx-auto px-6 py-10 mt-10">
  
//       <div className="flex flex-col justify-center items-center mt-10 text-center">
//         <h1 className="capitalize text-neutral-800 dark:text-white text-2xl font-bold">
//           {t("title")} <span className="text-purple-600"> {t("subtitle")}</span>
//         </h1>
//       </div>


//       {loading ? (
//         <p className="text-gray-500 text-center mt-6">Loading courses...</p>
//       ) : courses.length > 0 ? (
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
//           {courses.map((course, index) => (
//             <motion.div
//               key={course._id}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               viewport={{ once: false, amount: 0.3 }}
//             >
//               <CourseCard
//                 id={course._id}
//                 title={course.title}
//                 description={course.description}
//                 instructor={course.instructor}
//                 reviews={course.reviews}
//                 price={course.price}
//                 category={course.category}
//                 duration={course.duration}
//                 thumbnail={course.thumbnail}
//               />
//             </motion.div>
//           ))}
//         </div>
//       ) : (
//         <p className="text-gray-500 text-center mt-6">No Available Courses.</p>
//       )}
//     </section>
//   );
// };

// export default CoursesPage;
