"use client";
import React from 'react';
import FadeIn from '@/components/FadeIn';
import { AnimatedHeader, SearchBar, StandardsContent } from './StandardsComponents';
import { standardSections } from '@/data/standards';
import type { StandardSection } from '@/types/standards';

export default function StandardsPage() {
  const [searchTerm, setSearchTerm] = React.useState('');

  return (
    <div className="min-h-full w-full bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <FadeIn>
            <AnimatedHeader />
            <SearchBar searchTerm={searchTerm} onSearch={setSearchTerm} />
            <StandardsContent sections={standardSections} searchTerm={searchTerm} />
          </FadeIn>
        </div>
      </div>
    </div>
  );
}