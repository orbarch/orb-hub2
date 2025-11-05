"use client";

import React from 'react';
import FadeIn from '@/components/FadeIn';
import { motion, AnimatePresence } from 'framer-motion';
import type { StandardSection } from '@/types/standards';
import { revitManuals } from '@/data/manuals';

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

function RevitManualCard({ item }: { item: StandardSection['items'][0] }) {
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

function SearchBar({ searchTerm, onSearch }: { searchTerm: string; onSearch: (value: string) => void }) {
  return (
    <div className="relative mb-8">
      <input
        type="search"
        placeholder="Search Revit manuals..."
        value={searchTerm}
        onChange={(e) => onSearch(e.target.value)}
        className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
        aria-label="Search Revit manuals"
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

function ManualsList({ items, searchTerm }: { items: StandardSection['items']; searchTerm: string }) {
  const debouncedSearch = useDebounce(searchTerm, 150);

  const filteredItems = React.useMemo(() => {
    if (!debouncedSearch) return items;

    const searchLower = debouncedSearch.toLowerCase();
    return items.filter(item =>
      item.title.toLowerCase().includes(searchLower) ||
      item.description.toLowerCase().includes(searchLower)
    );
  }, [items, debouncedSearch]);

  if (filteredItems.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center py-12 text-gray-500"
      >
        No manuals found matching &quot;{searchTerm}&quot;
      </motion.div>
    );
  }

  return (
    <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <AnimatePresence initial={false}>
        {filteredItems.map((item) => (
          <motion.div
            key={item.title}
            layout
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.18 }}
          >
            <RevitManualCard item={item} />
          </motion.div>
        ))}
      </AnimatePresence>
    </motion.div>
  );
}

export default function RevitManualsPage() {
  const [searchTerm, setSearchTerm] = React.useState('');

  return (
    <div className="min-h-full w-full bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <FadeIn>
            <div className="mb-8">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-3xl font-bold text-gray-800 mb-4"
              >
                Revit Manuals
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-lg text-gray-600"
              >
                {revitManuals.description}
              </motion.p>
            </div>

            <SearchBar searchTerm={searchTerm} onSearch={setSearchTerm} />
            <ManualsList items={revitManuals.items} searchTerm={searchTerm} />
          </FadeIn>
        </div>
      </div>
    </div>
  );
}