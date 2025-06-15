import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle } from 'lucide-react';

// Reusable Component for Feature Cards
interface FeatureCardProps {
title: string;
description: string;
imageUrl: string;
imageAlt: string;
reverseLayout?: boolean;
}

const FeatureCard = ({ title, description, imageUrl, imageAlt, reverseLayout = false }: FeatureCardProps) => (
<div className="w-full  border border-neutral-200    p-8 rounded-lg shadow-sm">
    <div className={`flex flex-col md:flex-row items-center gap-8 ${reverseLayout ? 'md:flex-row-reverse' : ''}`}>
    <div className="md:w-1/3 flex-shrink-0">
        <Image src={imageUrl} alt={imageAlt} width={250} height={200} className="mx-auto" />
    </div>
    <div className="md:w-2/3 space-y-3 text-center md:text-left">
        <h3 className="text-2xl font-bold text-neutral-900 dark:text-white">{title}</h3>
        <p className="text-neutral-600 dark:text-neutral-400">{description}</p>
    </div>
    </div>
</div>
);

export default function ServicesPage() {
return (
    <div className="  mt-20 min-h-screen">
    <main className="container mx-auto px-4 py-12 md:py-20">
        <section className="text-center mb-20">
        <h1 className="text-4xl md:text-5xl font-extrabold text-neutral-900 dark:text-white">Our Services</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-neutral-600 dark:text-neutral-300">
        We offer high-quality courses that you can access anytime, from anywhere. <br/>
        As an instructor, you can share your knowledge and inspire learners worldwide.
        </p>
        </section>

        {/* --- Core Features for Instructors --- */}
        <div className="space-y-16">
        <FeatureCard
            title="Become An Instructor"
            description="Whether you've been teaching for years or are teaching for the first time, you can make an engaging course. We've compiled resources and best practices to help you get to the next level, no matter where you're starting."
            imageUrl="/services/card1.png"
            imageAlt="Instructor planning a course on a board"
        />

          {/* Two-Column Card Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
           {/* card 1 */}
            <div className="flex flex-col items-center justify-center border border-neutral-200  p-8 rounded-lg shadow-sm text-center">
            <Image src="/services/card2.png" alt="Woman recording a video lecture" width={200} height={160} />
            <h3 className="text-2xl font-bold dark:text-white text-neutral-800 mt-6">Get Started with Video</h3>
            <p className="text-neutral-600 dark:text-neutral-400 mt-2">Quality video lectures can set your course apart. Use our resources to learn the basics.</p>
            <Link href="/addCourses" className="text-purple-600 font-bold hover:underline inline-block mt-4">
                Get Started
            </Link>
            </div>

            {/* Card 2*/}
            <div className="flex flex-col items-center justify-center border border-neutral-200  p-8 rounded-lg shadow-sm text-center">
            <Image src="/services/card3.png" alt="Woman building an online audience" width={200} height={160} />
            <h3 className="text-2xl font-bold dark:text-white text-neutral-800 mt-6">Connect with Instructors </h3>
            <p className="text-neutral-600 dark:text-neutral-400 mt-2">Get Inspired, Share Ideas, and Grow Together</p>
            <Link href="/instructors" className="text-purple-600 font-bold hover:underline inline-block mt-4">
                Discover Instructors
            </Link>
            </div>
        </div>
        </div>

        {/* --- Divider --- */}
        <div className="my-24 border-t border-neutral-200"></div>
        
        {/* --- Features for Students Section --- */}
        <section className="text-center">
        <h2 className="text-4xl font-extrabold dark:text-white text-neutral-900">Ready to Start Learning?</h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg dark:text-neutral-400 text-neutral-600">
            Access a world of knowledge. Our platform offers everything you need to achieve your learning goals.
        </p>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div className=" p-6 rounded-lg border border-neutral-200 shadow-sm">
            <CheckCircle className="w-8 h-8 text-purple-600 mb-3" />
            <h3 className="text-xl font-bold">Expert-Led Courses</h3>
            <p className="dark:text-neutral-400 text-neutral-600 mt-2">Learn from industry professionals and passionate experts on thousands of topics.</p>
            </div>
            <div className=" p-6 rounded-lg border border-neutral-200 shadow-sm">
            <CheckCircle className="w-8 h-8 text-purple-600 mb-3" />
            <h3 className="text-xl font-bold">Learn at Your Pace</h3>
            <p className="dark:text-neutral-400 text-neutral-600 mt-2">Enjoy lifetime access to courses on web and mobile. Learn anytime, anywhere.</p>
            </div>
            <div className=" p-6 rounded-lg border border-neutral-200 shadow-sm">
            <CheckCircle className="w-8 h-8 text-purple-600 mb-3" />
            <h3 className="text-xl font-bold">Hands-On Learning</h3>
            <p className="dark:text-neutral-400 text-neutral-600 mt-2">Apply what you learn with quizzes, assignments, and practical projects.</p>
            </div>
        </div>
        <Link href="/courses" className="mt-12 inline-block bg-purple-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-purple-700 transition-colors">
            Browse All Courses
        </Link>
        </section>

    </main>
    </div>
);
}