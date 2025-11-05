"use client";

import React from 'react';
import FadeIn from '@/components/FadeIn';
import { motion } from 'framer-motion';
import type { StandardSection } from '@/types/standards';
import { manualSections } from '@/data/manuals';
import { SearchBar, StandardsContent, AnimatedHeader } from '@/app/standards/StandardsComponents';

// Use `manualSections` from data to mirror how `standardSections` is organized

export default function RevitManualsPage() {
  const [searchTerm, setSearchTerm] = React.useState('');

  return (
    <div className="min-h-full w-full bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <FadeIn>
            <AnimatedHeader />
            <div className="mb-6">
              <motion.p className="text-lg text-gray-600">Documentation and guidelines for Revit standards and workflows</motion.p>
            </div>

            <SearchBar searchTerm={searchTerm} onSearch={setSearchTerm} />
            <StandardsContent sections={manualSections} searchTerm={searchTerm} />
          </FadeIn>
        </div>
      </div>
    </div>
  );
}