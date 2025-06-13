"use client";
import { Star, ChevronDown, Linkedin, Youtube, Facebook, Twitter } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';


const courseData = {
  title: "HTML & HTML5, CSS & CSS3, Bootstrap 4, JavaScript and Jquiry in 1 Course",
  rating: 4.6,
  reviewsCount: "2,331 ratings",
  studentsCount: 98284,
  totalHours: "10 hours",
  lastUpdated: "October 2021",
  language: "English", 
  skillLevel: "All Levels",
  lecturesCount: 83,
  videoPosterUrl: "/home/card1.png",
  instructor: {
    name: "Hassan Fulaih",
    title: "Teacher",

    avatarUrl: "/home/card1.png", 
    socials: [
        { icon: Twitter, href: "#" },
        { icon: Facebook, href: "#" },
        { icon: Linkedin, href: "#" },
        { icon: Youtube, href: "#" },
    ],
    bio: [
      "I love writing code and I love teaching others.",
      "I always loved coding, I love diving into complex problems and solving and I still think that it's really an amazing feeling to see an app or program you built from scratch.",
      "You might think that I studied programming and that I got a CS degree - but I didn't! I always liked coding and it was a great hobby but I actually went for \"Biomedical Engineering\" when it was time to go to university.",
      "And I don't regret it! It was a fun time and I enjoyed all the things taught there. But soon after taking my first steps in typical Biomedical Engineering jobs, it was very clear to me that I had to go back to coding. And that's what I did.",
      "Actually, I always worked as a freelancer on side jobs whilst I was at university. And I also started teaching others there. I like sharing my knowledge and I really believe that we all should do our best to allow everyone to learn new things and achieve his or her goals.",
      "Now, I've taught about 350,000 students worldwide. I published dozens of courses and I got all those tutorials you find on this page. I'm extremely happy to see that all this content is helping people learn the things they want :-)"
    ]
  },
  // English translation and adaptation of the original description points
  descriptionPoints: [
    "This course assumes you have no prior knowledge of the web world.",
    "The course starts from scratch, so you don't need any qualifications to join.",
    "It is highly focused on beginners who want to enter the world of web development.",
    "Web design is considered the simplest and most enjoyable part of the web.",
    "This course is a bundle of five courses combined into one."
  ],
  descriptionMain: "JavaScript is THE most important programming language you need to learn as a web developer - and with this course, you make sure that you will not miss a single thing you have to know as a JavaScript developer!",
  whatYoullLearn: [
    "HTML & HTML5",
    "CSS & CSS3",
    "Bootstrap 4",
    "JavaScript",
    "JQuery"
  ],
  requirements: "No prerequisites are needed; this course starts from the very beginning.",
  whoIsThisFor: "Anyone who wants to enter the world of web development.",
  courseContent: [
    { id: 1, title: 'Section 1: Introduction', lessonsCompleted: 5, totalLessons: 5, duration: '20min' },
    { id: 2, title: 'Section 2: HTML & HTML 5', lessonsCompleted: 4, totalLessons: 13, duration: '1hr 26min' },
    { id: 3, title: 'Section 3: CSS & CSS3', lessonsCompleted: 0, totalLessons: 26, duration: '3hr 20min' },
    { id: 4, title: 'Section 4: Bootstrap 4', lessonsCompleted: 0, totalLessons: 15, duration: '1hr 38min' },
    { id: 5, title: 'Section 5: JavaScript', lessonsCompleted: 0, totalLessons: 20, duration: '2hr 18min' },
    { id: 6, title: 'Section 6: JQuery', lessonsCompleted: 0, totalLessons: 4, duration: '51min' },
  ]
};

const tabs = ['Overview', 'Q&A', 'Notes', 'Announcements', 'Reviews', 'Learning tools'];

export default function CoursePlayPage() {
  const [activeTab, setActiveTab] = useState('Overview');
  const [showFullBio, setShowFullBio] = useState(false);
  const course = courseData;



  return (
  <main className="bg-gray-100 dark:bg-neutral-900 min-h-screen p-4 sm:p-6 lg:p-8 mt-20">
<div className="max-w-7xl mx-auto">
  <Link href="/my-learning" className="inline-flex items-center text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline mb-6">
    <ArrowLeft className="mr-2 h-4 w-4" />
    Back to My Learning
  </Link>
      <div className="flex flex-col-reverse lg:flex-row">
        {/* Main Content Area */}
        <main className="w-full lg:flex-grow p-4 md:p-8 lg:pl-24">
          <div className="lg:col-span-2">
            {/* Video Player Placeholder */}
            <video 
              className="w-full h-full" controls poster={course.videoPosterUrl}>
              <source src="/sample-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            {/* Content Tabs */}
            <div className="border-b border-gray-200 mb-8">
                <nav className="-mb-px flex space-x-6 overflow-x-auto">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`whitespace-nowrap py-4 px-1 border-b-2 font-bold text-sm
                                ${activeTab === tab ? 'border-gray-900 text-gray-900' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-400'}`
                            }
                        >
                        {tab}
                        </button>
                    ))}
                </nav>
            </div>
            
            {/* Tab Content: "Overview" */}
            {activeTab === 'Overview' && (
              <div className="space-y-12">
                <section>
                    <h1 className="text-3xl font-bold mb-2">{course.title}</h1>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-gray-600 text-sm">
                        <div className="flex items-center gap-1">
                            <span className="font-bold text-orange-800">{course.rating}</span>
                            <Star className="w-4 h-4 text-orange-500 fill-current" />
                        </div>
                        <span>({course.reviewsCount})</span>
                        <span>{course.studentsCount.toLocaleString()} students</span>
                    </div>
                </section>
                
                <section className="border border-gray-300 p-6 space-y-3 text-sm">
                    <div className="flex justify-between"><span>Skill level: {course.skillLevel}</span> <span>Lectures: {course.lecturesCount}</span></div>
                    <div className="flex justify-between"><span>Students: {course.studentsCount.toLocaleString()}</span> <span>Video: {course.totalHours} total hours</span></div>
                    <div className="flex justify-between"><span>Languages: {course.language}</span> <span>Captions: No</span></div>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">Description</h2>
                    <ul className="space-y-2 list-disc list-inside mb-6">
                        {course.descriptionPoints.map((point, i) => <li key={i}>{point}</li>)}
                    </ul>
                    <p className="font-semibold text-lg mb-4">{course.descriptionMain}</p>
                </section>
                
                <section>
                    <h2 className="text-2xl font-bold mb-4">Who this course is for:</h2>
                    <ul className="list-disc list-inside"><li>{course.whoIsThisFor}</li></ul>
                </section>
                
                <section>
                    <h2 className="text-2xl font-bold mb-4">Instructor</h2>
                    <div className="flex items-start space-x-4">
                        <Image src={course.instructor.avatarUrl} alt={course.instructor.name} width={100} height={100} className="rounded-full flex-shrink-0" />
                        <div>
                            <h3 className="text-lg font-bold text-purple-700 underline cursor-pointer">{course.instructor.name}</h3>
                            <p className="text-sm text-gray-500">{course.instructor.title}</p>
                            <div className="flex space-x-2 mt-2">
                                {course.instructor.socials.map((social, i) => (
                                    <a key={i} href={social.href} className="p-2 border border-gray-800 text-gray-800 hover:bg-gray-100 rounded-full">
                                        <social.icon className="w-4 h-4" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="mt-4 space-y-4 text-gray-800">
                        {course.instructor.bio.slice(0, showFullBio ? course.instructor.bio.length : 3).map((p, i) => <p key={i}>{p}</p>)}
                    </div>
                     <button onClick={() => setShowFullBio(!showFullBio)} className="text-purple-700 font-bold mt-2">
                        {showFullBio ? 'Show less' : 'Show more'}
                    </button>
                </section>
              </div>
            )}
          </div>
        </main>

        {/* Course Content Sidebar */}
        <aside className="w-full lg:w-96 lg:min-w-[384px] bg-white border-l border-gray-200 lg:h-screen lg:sticky lg:top-16">
          <div className='p-4'>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold">Course content</h2>
            </div>
            <div className="space-y-1">
              {course.courseContent.map((section) => (
                <details key={section.id} className="group bg-white border border-gray-200">
                  <summary className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50">
                    <div className="font-bold text-sm flex-grow pr-4">{section.title}</div>
                    <div className="flex items-center flex-shrink-0">
                      <span className="text-xs text-gray-500 mr-4">{section.lessonsCompleted}/{section.totalLessons}</span>
                      <ChevronDown className="w-5 h-5 group-open:rotate-180 transition-transform" />
                    </div>
                  </summary>
                  <div className="px-4 pb-4 text-sm text-gray-500 border-t border-gray-200">
                      <p>Duration: {section.duration}</p>
                      {/* Individual lessons would be listed here */}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
    </main>
  );
}