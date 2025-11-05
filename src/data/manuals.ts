import type { StandardSection } from '@/types/standards';

export const revitManuals: StandardSection = {
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
    {
      title: 'Content Library Guide',
      description: 'Managing and using the ORB Revit content library',
      status: 'approved',
      lastUpdated: '2025-10-25',
    },
    {
      title: 'Collaboration Workflows',
      description: 'Standards for multi-user Revit collaboration and BIM 360',
      status: 'draft',
      lastUpdated: '2025-11-01',
    },
    {
      title: 'Template Documentation',
      description: 'Detailed documentation of ORB Revit template settings and standards',
      status: 'review',
      lastUpdated: '2025-10-28',
    }
  ],
};