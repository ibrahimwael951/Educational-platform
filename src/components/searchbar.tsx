"use client";

import { useState } from "react";
import { IoIosSearch } from "react-icons/io";

const SearchButton = () => {
const [showInput, setShowInput] = useState(false);

return (
    <div
    className={`bg-transparent border border-gray-900 dark:border-white rounded-full py-3 px-7 items-center gap-3 flex hover:bg-gray-100 dark:hover:bg-gray-400 focus-within:border-purple-500`}
    >
    <IoIosSearch
        className="text-gray-900 dark:text-white cursor-pointer"
        onClick={() => setShowInput(!showInput)}
    />

    
    <input
        type="text"
        placeholder="Search for anything"
        className={`outline-none bg-transparent w-full ${
        showInput ? "block" : "hidden"
        } sm:block`}
    />
    </div>
);
};

export default SearchButton;
// "use client";

// import { useEffect, useState } from "react";
// import axios from "axios";
// import { IoIosSearch } from "react-icons/io";

// const SearchButton = () => {
//   const [showInput, setShowInput] = useState(false);
//   const [courses, setCourses] = useState([]); // ← نبدأ بمصفوفة فاضية
//   const [query, setQuery] = useState("");

//   useEffect(() => {
//     axios
//       .get("https://educational-platform-backend-production.up.railway.app/api/courses")
//       .then((res) => {
//         console.log("API response:", res.data);
//         // استخدم data أو data.data حسب هيكل الـ API
//         const courseArray = res.data?.data ?? []; // تأكد من وجود البيانات
//         setCourses(courseArray);
//       })
//       .catch((err) => {
//         console.error("Failed to fetch courses", err);
//         setCourses([]); // عالج الخطأ بتفريغ المصفوفة
//       });
//   }, []);

//   // تصفية النتائج بناءً على query
//   const filteredCourses = Array.isArray(courses)
//     ? courses.filter((course) =>
//         course.title.toLowerCase().startsWith(query.toLowerCase())
//       )
//     : [];

//   return (
//     <div
//       className={`bg-transparent border border-gray-900 dark:border-white rounded-full py-3 px-7 items-center gap-3 flex hover:bg-gray-100 dark:hover:bg-gray-400 focus-within:border-purple-500`}
//     >
//       <IoIosSearch
//         className="text-gray-900 dark:text-white cursor-pointer"
//         onClick={() => setShowInput(!showInput)}
//       />

//       <input
//         type="text"
//         placeholder="Search for anything"
//         className={`outline-none bg-transparent w-full ${
//           showInput ? "block" : "hidden"
//         } sm:block`}
//         value={query}
//         onChange={(e) => setQuery(e.target.value)}
//       />

//       {query && (
//         <div className="absolute top-full mt-2 bg-white dark:bg-neutral-800 shadow-md rounded-md w-64 max-h-60 overflow-y-auto z-50">
//           {filteredCourses.length > 0 ? (
//             filteredCourses.map((course) => (
//               <div key={course.id} className="p-2 border-b border-gray-200">
//                 {course.title}
//               </div>
//             ))
//           ) : (
//             <div className="p-2 text-gray-500">No results found</div>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default SearchButton;
