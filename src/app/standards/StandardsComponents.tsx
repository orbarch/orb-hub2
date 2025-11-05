"use client";

import { motion, AnimatePresence } from 'framer-motion';
import type { StandardSection } from '@/types/standards';
import FadeIn from '@/components/FadeIn';
import React from 'react';

interface StandardCard {
  title: string;
  description: string;
  status?: 'draft' | 'review' | 'approved';
  lastUpdated: string;
}

function StatusBadge({ status }: { status?: 'draft' | 'review' | 'approved' }) {
  const statusStyles = {
    draft: 'bg-yellow-100 text-yellow-800 border-yellow-200',
    review: 'bg-blue-100 text-blue-800 border-blue-200',
    approved: 'bg-green-100 text-green-800 border-green-200',
  };

  if (!status) return null;

  return (
    <span className={`text-xs px-2 py-1 rounded-full border ${statusStyles[status]}`}>
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </span>
  );
}

function StandardCard({ item }: { item: StandardCard }) {
  return (
    <motion.div
      whileHover={{ y: -2 }}
      className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 hover:shadow-md transition-shadow"
    >
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-lg font-medium text-gray-900">{item.title}</h3>
        <StatusBadge status={item.status} />
      </div>
      <p className="text-sm text-gray-600 mb-3">{item.description}</p>
      <div className="text-xs text-gray-500">
        Updated: {new Date(item.lastUpdated).toLocaleDateString()}
      </div>
    </motion.div>
  );
}

export function AnimatedStandardsSection({ section }: { section: StandardSection }) {
  return (
    <section className="mb-12">
      <div className="mb-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl font-bold text-gray-900 mb-2"
        >
          {section.title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-gray-600"
        >
          {section.description}
        </motion.p>
      </div>
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence initial={false}>
          {section.items.map((item) => (
            <motion.div
              key={item.title}
              layout
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 6 }}
              transition={{ duration: 0.18 }}
            >
              <StandardCard item={item} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}

export function AnimatedHeader() {
  return (
    <div className="mb-8">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold text-gray-800 mb-4"
      >
        ORB Standards Library
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-lg text-gray-600"
      >
        Access and manage standardized documentation, templates, and guidelines
      </motion.p>
    </div>
  )
}

export function SearchBar({ searchTerm, onSearch }: { searchTerm: string; onSearch: (value: string) => void }) {
  return (
    <div className="relative mb-8">
      <input
        type="search"
        placeholder="Search standards..."
        value={searchTerm}
        onChange={(e) => onSearch(e.target.value)}
        className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
        aria-label="Search standards"
      />
      {searchTerm && (
        <button
          onClick={() => onSearch('')}
          className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
          aria-label="Clear search"
        >
          ×
        </button>
      )}
    </div>
  );
}

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

export function StandardsContent({ sections, searchTerm }: { sections: StandardSection[]; searchTerm: string }) {
  const debouncedSearch = useDebounce(searchTerm, 150);

  const filteredSections = React.useMemo(() => {
    if (!debouncedSearch) return sections;

    const searchLower = debouncedSearch.toLowerCase();
    return sections
      .map(section => ({
        ...section,
        items: section.items.filter(item =>
          item.title.toLowerCase().includes(searchLower) ||
          item.description.toLowerCase().includes(searchLower)
        )
      }))
      .filter(section => section.items.length > 0);
  }, [sections, debouncedSearch]);

  if (filteredSections.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center py-12 text-gray-500"
      >
        No standards found matching &quot;{searchTerm}&quot;
      </motion.div>
    );
  }

  return (
    <motion.div layout className="space-y-12">
      <AnimatePresence initial={false}>
        {filteredSections.map((section) => (
          <motion.div
            key={section.title}
            layout
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <AnimatedStandardsSection section={section} />
          </motion.div>
        ))}
      </AnimatePresence>
    </motion.div>
  );
}