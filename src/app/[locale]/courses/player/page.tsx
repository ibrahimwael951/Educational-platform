"use client";

import { useParams } from "next/navigation";
import { useState } from "react";

const courseSections = [
  { title: "Introduction", lessons: 1, duration: "10min" },
  { title: "Basic Fundamentals", lessons: 10, duration: "1hr 26min" },
  { title: "Exercise 1", lessons: 10, duration: "1hr 20min" },
  { title: "Exercise 2", lessons: 15, duration: "1hr 38min" },
  { title: "Exam", lessons: 20, duration: "2hr 18min" },
];

export default function PlayCourse() {
  const params = useParams();
  const id = params.id;
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-white dark:bg-neutral-900 text-white mt-30">
      {/* Video Player & Main Content */}
      <main className="flex-1 p-5">
        <video controls className="w-full rounded-lg">
          <source src={`/videos/course-${id}.mp4`} type="video/mp4" />
          
        </video>

        {/* Tabs Section */}
        <div className="mt-5 border-b border-gray-700 flex gap-5 flex-wrap text-gray-400">
          <button className="py-2 px-4 hover:border-b-1 hover:border-purple-600 hover:text-purple-600 cursor-pointer">Overview</button>
          <button className="py-2 px-4 hover:border-b-1  hover:border-purple-600 hover:text-purple-600 cursor-pointer">Q&A</button>
          <button className="py-2 px-4 hover:border-b-1 hover:border-purple-600 hover:text-purple-600 cursor-pointer ">Reviews</button>
          <button className="py-2 px-4 hover:border-b-1 hover:border-purple-600 hover:text-purple-600 cursor-pointer">Learning Tools</button>
        </div>

        {/* Course Content (Belwo the Video in small screens)*/}
        <div className="block md:hidden bg-white dark:bg-neutral-800 p-5 mt-5 rounded-lg shadow-lg">
          <h2 className="text-lg font-bold mb-4 dark:text-white">Course Content</h2>
          <ul className="space-y-2">
            {courseSections.map((section, index) => (
              <li key={index} className="border-b">
                <button
                  className="w-full text-left p-3 bg-gray-200 dark:bg-neutral-700 hover:bg-purple-500 dark:hover:bg-purple-600 cursor-pointer flex justify-between items-center group transition-all duration-200"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="font-semibold text-neutral-800 dark:text-white group-hover:text-white">
                    {section.title}
                  </span>
                  <span className="text-xl">{openIndex === index ? "−" : "+"}</span>
                </button>
                {openIndex === index && (
                  <div className="p-3 bg-gray-100 dark:bg-neutral-900 text-neutral-800 dark:text-gray-300 border-t">
                    {section.lessons} Lessons | {section.duration}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Course Description */}
        <div className="mt-5 text-gray-600 dark:text-gray-300">
          <h1 className="text-2xl font-bold dark:text-white">Description</h1>
          <p className="text-sm mt-2">
           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut dolorum molestiae neque repellendus? Molestias 
           <br />reprehenderit quidem dignissimos laborum iure assumenda libero commodi sequi nesciunt ratione, vel perspiciatis voluptatem laudantium cumque?
          </p>
          <h1 className="text-2xl font-bold dark:text-white">Language</h1>
          <p className="text-sm mt-2">
           English
          </p>
        </div>
      </main>

      {/* Sidebar (Beside the video Only in large screens)*/}
      <aside className="hidden md:block w-80 bg-white dark:bg-neutral-800 p-5 transition-all duration-300">
        <h2 className="text-lg font-bold mb-4 dark:text-white">Course Content</h2>
        <ul className="space-y-2">
          {courseSections.map((section, index) => (
            <li key={index} className="border-b">
              <button
                className="w-full text-left p-3 bg-gray-200 dark:bg-neutral-700 hover:bg-purple-500 dark:hover:bg-purple-600 cursor-pointer flex justify-between items-center group transition-all duration-200"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-semibold text-neutral-800 dark:text-white group-hover:text-white">
                  {section.title}
                </span>
                <span className="text-xl">{openIndex === index ? "−" : "+"}</span>
              </button>
              {openIndex === index && (
                <div className="p-3 bg-gray-100 dark:bg-neutral-900 text-neutral-800 dark:text-gray-300 border-t">
                  {section.lessons} Lessons | {section.duration}
                </div>
              )}
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
}
