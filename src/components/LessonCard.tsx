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
      className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      role="article"
      aria-labelledby={`lesson-${lesson.id}-title`}
    >
      <h2 id={`lesson-${lesson.id}-title`} className="text-xl font-semibold mb-2">{lesson.title}</h2>
      <p className="text-gray-600 mb-4">{lesson.description}</p>
      <div className="flex justify-between items-center">
        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm" role="tag">
          {lesson.category}
        </span>
        <time dateTime={lesson.updatedAt} className="text-gray-500 text-sm">
          {new Date(lesson.updatedAt).toLocaleDateString()}
        </time>
      </div>
    </Link>
  );
}