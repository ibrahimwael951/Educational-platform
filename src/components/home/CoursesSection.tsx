"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import CourseCard from "./CourseCard";
import Link from "next/link";

const CoursesSection = () => {
  const t = useTranslations("CoursesSection");
  const sectionRef = useRef(null);


  return (
    <section ref={sectionRef} className="max-w-7xl mx-auto px-5 md:px-10 md:py-20 pt-32">
    
      <motion.p
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false, amount: 0.3 }}
        className="bg-gray-50 text-purple-500 px-4 py-2 rounded-md font-medium text-left inline-block"
      >
        {t("sectionTitle")}
      </motion.p>

      <div className="flex flex-col md:flex-row justify-between items-center mt-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: false, amount: 0.3 }}
          className="capitalize text-neutral-800 dark:text-white text-3xl font-bold"
        >
          {t("headline")} <span className="circle">{t("highlight")}</span> {t("subheadline")}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <Link
            href="/courses"
            className="w-52 md:w-60 px-6 py-3 md:px-5 md:py-2 text-base md:text-lg rounded-xl bg-purple-500 hover:bg-purple-700 text-white duration-150 text-center"
          >
            {t("button")} →
          </Link>
        </motion.div>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={{
          hidden: { opacity: 0, y: -30 },
          visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } },
        }}
        viewport={{ once: false, amount: 0.3 }}
        className="flex flex-wrap mt-6 items-center justify-center select-none"
      >
        {Array(3)
          .fill(null)
          .map((_, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <CourseCard
                id={index}
                image="/home/card1.png"
                title={t("course.title")}
                category={t("course.category")}
                price={t("course.price")}
                rating={t("course.rating")}
                lessons={t("course.lessons")}
                duration={t("course.duration")}
                students={t("course.students")}
                instructor={{
                  name: t("course.instructor"),
                  avatar: "/home/person1.png",
                }}
              />
            </motion.div>
          ))}
      </motion.div>
    </section>
  );
};

export default CoursesSection;

// "use client";

// import React, { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import { useTranslations } from "next-intl";
// import CourseCard from "./CourseCard";
// import Link from "next/link";

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

// const CoursesSection = () => {
//   const t = useTranslations("CoursesSection");
//   const [courses, setCourses] = useState<Course[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const res = await fetch("https://educational-platform-backend-production.up.railway.app/api/courses");
//         if (!res.ok) throw new Error("Failed to fetch data");
//         const data = await res.json();
//         setCourses(data.courses.slice(0, 3)); 
//       } catch (error) {
//         console.error(error);
//       } finally {
//         setLoading(false);
//       }
//     }
//     fetchData();
//   }, []);

//   return (
//     <section className="max-w-7xl mx-auto px-5 md:px-10 md:py-20 pt-32">
//       <motion.p
//         initial={{ opacity: 0, x: -50 }}
//         whileInView={{ opacity: 1, x: 0 }}
//         transition={{ duration: 0.6 }}
//         viewport={{ once: false, amount: 0.3 }}
//         className="bg-gray-50 text-purple-500 px-4 py-2 rounded-md font-medium text-left inline-block"
//       >
//         {t("sectionTitle")}
//       </motion.p>

//       <div className="flex flex-col md:flex-row justify-between items-center mt-6">
//         <motion.h1
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.2 }}
//           viewport={{ once: false, amount: 0.3 }}
//           className="capitalize text-neutral-800 dark:text-white text-3xl font-bold"
//         >
//           {t("headline")} <span className="circle">{t("highlight")}</span> {t("subheadline")}
//         </motion.h1>

//         <motion.div
//           initial={{ opacity: 0, scale: 0.9 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.6, delay: 0.4 }}
//           viewport={{ once: false, amount: 0.3 }}
//         >
//           <Link
//             href="/courses"
//             className="w-52 md:w-60 px-6 py-3 md:px-5 md:py-2 text-base md:text-lg rounded-xl bg-purple-500 hover:bg-purple-700 text-white duration-150 text-center"
//           >
//             {t("button")} →
//           </Link>
//         </motion.div>
//       </div>

//       <motion.div
//         initial="hidden"
//         whileInView="visible"
//         variants={{
//           hidden: { opacity: 0, y: -30 },
//           visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } },
//         }}
//         viewport={{ once: false, amount: 0.3 }}
//         className="flex flex-wrap mt-6 items-center justify-center select-none"
//       >
//         {loading ? (
//           <p className="text-gray-500 text-center">Loading courses...</p>
//         ) : (
//           courses.map((course, index) => (
//             <motion.div
//               key={course._id}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.2 }}
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
//           ))
//         )}
//       </motion.div>
//     </section>
//   );
// };

// export default CoursesSection;
