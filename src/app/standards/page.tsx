import React from 'react';
import FadeIn from '@/components/FadeIn';
import { AnimatedHeader, AnimatedStandardsSection } from './StandardsComponents';

export interface StandardSection {
  title: string;
  description: string;
  items: {
    title: string;
    description: string;
    status?: 'draft' | 'review' | 'approved';
    lastUpdated: string;
  }[];
}

const sampleSections: StandardSection[] = [
  {
    title: 'Go-By Sets',
    description: 'Standardized template sets for different project types and uses',
    items: [
      {
        title: 'Multi-Family Residential',
        description: 'Complete drawing set template for multi-family projects',
        status: 'approved',
        lastUpdated: '2025-10-15',
      },
      {
        title: 'Commercial Office',
        description: 'Standard drawing set for commercial office buildings',
        status: 'review',
        lastUpdated: '2025-10-28',
      },
      {
        title: 'Healthcare Facilities',
        description: 'Specialized template set for medical facilities',
        status: 'draft',
        lastUpdated: '2025-11-01',
      },
    ],
  },
  {
    title: 'Unit Plans',
    description: 'Collection of standardized unit layouts and configurations',
    items: [
      {
        title: 'Studio Apartments',
        description: 'Efficient layouts for studio units (300-500 sq ft)',
        status: 'approved',
        lastUpdated: '2025-10-20',
      },
      {
        title: '1-2 Bedroom Units',
        description: 'Standard layouts for one and two bedroom apartments',
        status: 'approved',
        lastUpdated: '2025-10-25',
      },
      {
        title: 'Accessible Units',
        description: 'ADA compliant unit layouts and specifications',
        status: 'review',
        lastUpdated: '2025-11-02',
      },
    ],
  },
  {
    title: 'Revit Manuals',
    description: 'Documentation and guidelines for Revit standards and workflows',
    items: [
      {
        title: 'Project Setup Guide',
        description: 'Step-by-step instructions for setting up new Revit projects',
        status: 'approved',
        lastUpdated: '2025-10-10',
      },
      {
        title: 'Family Creation Standards',
        description: 'Guidelines for creating and managing Revit families',
        status: 'approved',
        lastUpdated: '2025-10-30',
      },
      {
        title: 'Best Practices Manual',
        description: 'Comprehensive guide to ORB Revit workflows and standards',
        status: 'review',
        lastUpdated: '2025-11-03',
      },
    ],
  },
];



export default function StandardsPage() {
  return (
    <div className="min-h-full w-full bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <FadeIn>
            <AnimatedHeader />
            <div className="space-y-12">
              {sampleSections.map((section) => (
                <AnimatedStandardsSection key={section.title} section={section} />
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}