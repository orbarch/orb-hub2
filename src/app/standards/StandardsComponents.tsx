"use client";

import { motion } from 'framer-motion';
import { StandardSection } from './page';
import FadeIn from '@/components/FadeIn';

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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {section.items.map((item) => (
          <StandardCard key={item.title} item={item} />
        ))}
      </div>
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