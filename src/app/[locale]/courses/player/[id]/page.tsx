"use client"
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { useParams } from "next/navigation";


const enrolledCoursesData = [
  { id: '1', title: 'The Web Front End Learning Guide', instructorName: 'Hassan Fulaih', thumbnailUrl: '/home/card1.png', progress: 11, userRating: 0 },
  { id: '2', title: 'Advanced React and GraphQL', instructorName: 'Jane Smith', thumbnailUrl: '/home/card2.png', progress: 75, userRating: 4 },
  { id: '3', title: 'Complete Python Bootcamp From Zero to Hero', instructorName: 'John Doe', thumbnailUrl: '/home/card3.png', progress: 100, userRating: 5 },
  { id: '4', title: 'UI/UX Design Essentials', instructorName: 'Emily White', thumbnailUrl: '/home/card4.png', progress: 0, userRating: 0 },
];

export default function CoursePlayPage() {
  const params = useParams();
  const course = enrolledCoursesData.find((b) => b.id.toString() === params.id);

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
    <main className="bg-gray-100 dark:bg-neutral-900 min-h-screen p-4 sm:p-6 lg:p-8 mt-20">
      <div className="max-w-7xl mx-auto">
        <Link href="/my-learning" className="inline-flex items-center text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to My Learning
        </Link>

        <h1 className="text-3xl font-bold text-neutral-900 dark:text-white">{course.title}</h1>
        <p className="text-lg text-neutral-600 dark:text-neutral-400 mt-1">by {course.instructorName}</p>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="aspect-video w-full bg-black rounded-lg overflow-hidden">
              <video className="w-full h-full" controls poster={course.thumbnailUrl}>
                <source src="/sample-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

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

            <div className="mt-6 prose dark:prose-invert max-w-none">
              <h2>About this course</h2>
              <p>Course description and learning objectives would appear here.</p>
            </div>
          </div>

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
}
