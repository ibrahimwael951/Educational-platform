// "use client";

// import { useParams } from "next/navigation";
// import { useState } from "react";

// const courseSections = [
//   { title: "Introduction", lessons: 1, duration: "10min" },
//   { title: "Basic Fundamentals", lessons: 10, duration: "1hr 26min" },
//   { title: "Exercise 1", lessons: 10, duration: "1hr 20min" },
//   { title: "Exercise 2", lessons: 15, duration: "1hr 38min" },
//   { title: "Exam", lessons: 20, duration: "2hr 18min" },
// ];

// export default function PlayCourse() {
//   const params = useParams();
//   const id = params.id;
//   const [openIndex, setOpenIndex] = useState<number | null>(null);

//   const toggleFAQ = (index: number) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   return (
//     <div className="flex flex-col md:flex-row min-h-screen bg-white dark:bg-neutral-900 text-white mt-30">
//       {/* Video Player & Main Content */}
//       <main className="flex-1 p-5">
//         <video controls className="w-full rounded-lg">
//           <source src={`/videos/course-${id}.mp4`} type="video/mp4" />
          
//         </video>

//         {/* Tabs Section */}
//         <div className="mt-5 border-b border-gray-700 flex gap-5 flex-wrap text-gray-400">
//           <button className="py-2 px-4 hover:border-b-1 hover:border-purple-600 hover:text-purple-600 cursor-pointer">Overview</button>
//           <button className="py-2 px-4 hover:border-b-1  hover:border-purple-600 hover:text-purple-600 cursor-pointer">Q&A</button>
//           <button className="py-2 px-4 hover:border-b-1 hover:border-purple-600 hover:text-purple-600 cursor-pointer ">Reviews</button>
//           <button className="py-2 px-4 hover:border-b-1 hover:border-purple-600 hover:text-purple-600 cursor-pointer">Learning Tools</button>
//         </div>

//         {/* Course Content (Belwo the Video in small screens)*/}
//         <div className="block md:hidden bg-white dark:bg-neutral-800 p-5 mt-5 rounded-lg shadow-lg">
//           <h2 className="text-lg font-bold mb-4 dark:text-white">Course Content</h2>
//           <ul className="space-y-2">
//             {courseSections.map((section, index) => (
//               <li key={index} className="border-b">
//                 <button
//                   className="w-full text-left p-3 bg-gray-200 dark:bg-neutral-700 hover:bg-purple-500 dark:hover:bg-purple-600 cursor-pointer flex justify-between items-center group transition-all duration-200"
//                   onClick={() => toggleFAQ(index)}
//                 >
//                   <span className="font-semibold text-neutral-800 dark:text-white group-hover:text-white">
//                     {section.title}
//                   </span>
//                   <span className="text-xl">{openIndex === index ? "−" : "+"}</span>
//                 </button>
//                 {openIndex === index && (
//                   <div className="p-3 bg-gray-100 dark:bg-neutral-900 text-neutral-800 dark:text-gray-300 border-t">
//                     {section.lessons} Lessons | {section.duration}
//                   </div>
//                 )}
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Course Description */}
//         <div className="mt-5 text-gray-600 dark:text-gray-300">
//           <h1 className="text-2xl font-bold dark:text-white">Description</h1>
//           <p className="text-sm mt-2">
//            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut dolorum molestiae neque repellendus? Molestias 
//            <br />reprehenderit quidem dignissimos laborum iure assumenda libero commodi sequi nesciunt ratione, vel perspiciatis voluptatem laudantium cumque?
//           </p>
//           <h1 className="text-2xl font-bold dark:text-white">Language</h1>
//           <p className="text-sm mt-2">
//            English
//           </p>
//         </div>
//       </main>

//       {/* Sidebar (Beside the video Only in large screens)*/}
//       <aside className="hidden md:block w-80 bg-white dark:bg-neutral-800 p-5 transition-all duration-300">
//         <h2 className="text-lg font-bold mb-4 dark:text-white">Course Content</h2>
//         <ul className="space-y-2">
//           {courseSections.map((section, index) => (
//             <li key={index} className="border-b">
//               <button
//                 className="w-full text-left p-3 bg-gray-200 dark:bg-neutral-700 hover:bg-purple-500 dark:hover:bg-purple-600 cursor-pointer flex justify-between items-center group transition-all duration-200"
//                 onClick={() => toggleFAQ(index)}
//               >
//                 <span className="font-semibold text-neutral-800 dark:text-white group-hover:text-white">
//                   {section.title}
//                 </span>
//                 <span className="text-xl">{openIndex === index ? "−" : "+"}</span>
//               </button>
//               {openIndex === index && (
//                 <div className="p-3 bg-gray-100 dark:bg-neutral-900 text-neutral-800 dark:text-gray-300 border-t">
//                   {section.lessons} Lessons | {section.duration}
//                 </div>
//               )}
//             </li>
//           ))}
//         </ul>
//       </aside>
//     </div>
//   );
// }


import Link from 'next/link';
import { ArrowLeft} from 'lucide-react';
import { EnrolledCourse } from '@/components/my-learning/EnrolledCourseCard';

// Use the same mock data source as your my-learning page, or fetch from an API
const enrolledCoursesData: EnrolledCourse[] = [
  { id: '1', title: 'The Web Front End Learning Guide', instructorName: 'Hassan Fulaih', thumbnailUrl: '/home/card1.png', progress: 11, userRating: 0 },
  { id: '2', title: 'Advanced React and GraphQL', instructorName: 'Jane Smith', thumbnailUrl: '/home/card2.png', progress: 75, userRating: 4 },
  { id: '3', title: 'Complete Python Bootcamp From Zero to Hero', instructorName: 'John Doe', thumbnailUrl: '/home/card3.png', progress: 100, userRating: 5 },
  { id: '4', title: 'UI/UX Design Essentials', instructorName: 'Emily White', thumbnailUrl: '/home/card4.png', progress: 0, userRating: 0 },
];

interface CoursePlayPageProps {
  params: {
    courseId: string;
  };
}

const CoursePlayPage = ({ params }: CoursePlayPageProps) => {
  // Find the course data based on the ID from the URL
  const course = enrolledCoursesData.find(c => c.id === params.courseId);

  if (!course) {
    return (
      <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-neutral-900 text-center">
        <h1 className="text-3xl font-bold text-red-500">Course Not Found</h1>
        <p className="text-neutral-600 dark:text-neutral-400 mt-2">The course you are looking for does not exist.</p>
        <Link href="/my-learning" className="mt-6 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-purple-600 hover:bg-purple-700">
          <ArrowLeft className="mr-2 -ml-1 h-5 w-5" />
          Back to My Learning
        </Link>
      </main>
    );
  }

  return (
    <main className="bg-gray-100 dark:bg-neutral-900 min-h-screen p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <Link href="/my-learning" className="inline-flex items-center text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to My Learning
        </Link>
        
        <h1 className="text-3xl font-bold text-neutral-900 dark:text-white">{course.title}</h1>
        <p className="text-lg text-neutral-600 dark:text-neutral-400 mt-1">by {course.instructorName}</p>

        {/* Main Content Area */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Video and Tabs Section */}
          <div className="lg:col-span-2">
            {/* Video Player */}
            <div className="aspect-video w-full bg-black rounded-lg overflow-hidden">
              <video className="w-full h-full" controls poster={course.thumbnailUrl}>
                <source src="/sample-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            {/* Tabs Navigation */}
            <div className="mt-6 border-b border-neutral-200 dark:border-neutral-700">
              <nav className="flex space-x-8">
                {['Overview', 'Notes', 'Reviews', 'Resources'].map((tab) => (
                  <button
                    key={tab}
                    className="border-b-2 border-transparent hover:border-purple-500 py-4 px-1 text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:text-purple-600 dark:hover:text-purple-400"
                  >
                    {tab}
                  </button>
                ))}
              </nav>
            </div>

            {/* Tab Content */}
            <div className="mt-6 prose dark:prose-invert max-w-none">
              <h2>About this course</h2>
              <p>Course description and learning objectives would appear here.</p>
            </div>
          </div>

          {/* Course Sections Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-neutral-800 rounded-lg shadow-sm">
              <div className="p-4 border-b dark:border-neutral-700">
                <h2 className="text-lg font-semibold text-neutral-900 dark:text-white">Course Content</h2>
              </div>
              <div className="divide-y dark:divide-neutral-700">
                {[1, 2, 3].map((section) => (
                  <div key={section} className="p-4 hover:bg-neutral-50 dark:hover:bg-neutral-700">
                    <h3 className="font-medium text-neutral-900 dark:text-white">Section {section}</h3>
                    <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">
                      4 lessons • 45 min
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CoursePlayPage;