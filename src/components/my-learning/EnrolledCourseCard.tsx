"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Star, Play } from 'lucide-react';

export type EnrolledCourse = {
id: string;
title: string;
instructorName: string;
thumbnailUrl: string;
  progress: number;
  userRating: number;
};

interface EnrolledCourseCardProps {
  course: EnrolledCourse;
}

const EnrolledCourseCard: React.FC<EnrolledCourseCardProps> = ({ course }) => {
  const [rating, setRating] = useState(course.userRating);
  const [hoverRating, setHoverRating] = useState(0);

  return (
    <div className="w-full max-w-sm lg:max-w-[280px] flex-shrink-0">
      {/* *** MODIFIED: Image container is now a group for hover effects *** */}
      <div className="relative group">
        <Link href={`courses/player/${course.id}`} aria-label={`Play course: ${course.title}`}>
            {/* *** NEW: Hover Overlay and Play Icon *** */}
            <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-md">
                <div className="bg-white rounded-full p-4">
                    <Play size={28} className="text-black fill-black" />
                </div>
            </div>
            <Image
              src={course.thumbnailUrl}
              alt={course.title}
              width={700}
              height={400}
              className="w-full h-auto object-cover rounded-t-md"
            />
        </Link>
      </div>

      <div className="p-4 bg-white dark:bg-neutral-800 rounded-b-md border border-t-0 border-gray-200 dark:border-neutral-700">
        <h3 className="font-bold text-base text-neutral-900 dark:text-white truncate">
          {course.title}
        </h3>
        <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">
          {course.instructorName}
        </p>

        {/* Progress Bar */}
        <div className="mt-4">
          <div className="w-full bg-gray-200 dark:bg-neutral-700 rounded-full h-1.5">
            <div
              className="bg-purple-600 h-1.5 rounded-full"
              style={{ width: `${course.progress}%` }}
            ></div>
          </div>
          <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">
            {course.progress}% complete
          </p>
        </div>

        {/* Star Rating */}
        <div className="mt-3">
          <div className="flex items-center">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                onClick={() => setRating(star)}
                onMouseEnter={() => setHoverRating(star)}
                onMouseLeave={() => setHoverRating(0)}
                aria-label={`Rate ${star} stars`}
              >
                <Star
                  size={20}
                  className={`cursor-pointer transition-colors ${
                    star <= (hoverRating || rating)
                      ? 'text-yellow-400 fill-yellow-400'
                      : 'text-gray-300 dark:text-neutral-600'
                  }`}
                />
              </button>
            ))}
          </div>
          <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">
            {rating > 0 ? `You rated ${rating} stars` : "Leave a rating"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default EnrolledCourseCard;