"use client";

import React from "react";
import { Lesson } from "@/types/lesson";
import LessonCard from "./LessonCard";
import FadeIn from "./FadeIn";
import { motion, AnimatePresence } from "framer-motion";

function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = React.useState(value);

  React.useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

export default function LessonsGrid({ lessons }: { lessons: Lesson[] }) {
  const [order, setOrder] = React.useState<"newest" | "oldest">("newest");
  const [searchTerm, setSearchTerm] = React.useState("");
  const debouncedSearch = useDebounce(searchTerm, 150);

  const filteredAndSorted = React.useMemo(() => {
    let result = [...lessons];

    // Filter by search term
    if (debouncedSearch) {
      const searchLower = debouncedSearch.toLowerCase();
      result = result.filter(
        (lesson) =>
          lesson.title.toLowerCase().includes(searchLower) ||
          lesson.description.toLowerCase().includes(searchLower) ||
          lesson.category.toLowerCase().includes(searchLower)
      );
    }

    // Sort by date
    result.sort(
      (a, b) =>
        new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
    );
    if (order === "oldest") result.reverse();

    return result;
  }, [lessons, debouncedSearch, order]);

  return (
    <div>
      <div className="mb-8">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold text-gray-800 mb-4"
        >
          ORB University
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-lg text-gray-600"
        >
          Learn through our comprehensive lessons and tutorials.
        </motion.p>
      </div>
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-6">
        <div className="flex-1">
          <div className="relative">
            <input
              type="search"
              placeholder="Search lessons..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-shadow"
              aria-label="Search lessons"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm("")}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                aria-label="Clear search"
              >
                ×
              </button>
            )}
          </div>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <div className="text-sm text-gray-600">Sort:</div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setOrder("newest")}
              aria-pressed={order === "newest"}
              className={`px-3 py-1 rounded-md text-sm font-medium focus:outline-none focus:ring-2 focus:ring-green-500 transition-shadow ${
                order === "newest"
                  ? "bg-green-600 text-white"
                  : "bg-white text-gray-700 border border-gray-200"
              }`}
            >
              Newest
            </button>
            <button
              type="button"
              onClick={() => setOrder("oldest")}
              aria-pressed={order === "oldest"}
              className={`px-3 py-1 rounded-md text-sm font-medium focus:outline-none focus:ring-2 focus:ring-green-500 transition-shadow ${
                order === "oldest"
                  ? "bg-green-600 text-white"
                  : "bg-white text-gray-700 border border-gray-200"
              }`}
            >
              Oldest
            </button>
          </div>
        </div>
      </div>

      <FadeIn>
        {filteredAndSorted.length > 0 ? (
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch"
          >
            <AnimatePresence initial={false}>
              {filteredAndSorted.map((lesson) => (
                <motion.div
                  key={lesson.id}
                  layout
                  className="h-full"
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 6 }}
                  transition={{ duration: 0.18 }}
                >
                  <LessonCard lesson={lesson} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12 text-gray-500"
          >
            No lessons found matching &quot;{searchTerm}&quot;
          </motion.div>
        )}
      </FadeIn>
    </div>
  );
}
