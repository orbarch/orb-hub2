"use client";

import Link from 'next/link';
import { Lesson } from '@/types/lesson';

interface LessonCardProps {
  lesson: Lesson;
}

export default function LessonCard({ lesson }: LessonCardProps) {
  return (
    <Link
      href={`/lessons/${lesson.id}`}
      className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 h-full flex flex-col"
      role="article"
      aria-labelledby={`lesson-${lesson.id}-title`}
    >
      <h2 id={`lesson-${lesson.id}-title`} className="text-green-500 text-xl font-semibold mb-2">{lesson.title}</h2>
      <p className="text-gray-600 mb-4 flex-1">{lesson.description}</p>
      <div className="flex justify-between items-center mt-4">
        <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm" role="tag">
          {lesson.category}
        </span>
        <time dateTime={lesson.updatedAt} className="text-gray-500 text-sm">
          {new Date(lesson.updatedAt).toLocaleDateString()}
        </time>
      </div>
    </Link>
  );
}