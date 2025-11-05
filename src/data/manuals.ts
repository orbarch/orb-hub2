import type { StandardSection } from "@/types/standards";

export const manualSections: StandardSection[] = [
  {
    title: "Project Setup",
    description: "Guides and templates for initializing new Revit projects",
    items: [
      {
        title: "Project Setup Guide",
        description:
          "Step-by-step instructions for setting up new Revit projects",
        status: "approved",
        lastUpdated: "2025-10-10",
      },
      {
        title: "Template Documentation",
        description:
          "Detailed documentation of ORB Revit template settings and standards",
        status: "outdated",
        lastUpdated: "2025-10-28",
      },
    ],
  },
  {
    title: "Project Management",
    description: "Workflows, collaboration, and content management guidance",
    items: [
      {
        title: "Collaboration Workflows",
        description: "Standards for multi-user Revit collaboration and BIM 360",
        status: "draft",
        lastUpdated: "2025-11-01",
      },
      {
        title: "Content Library Guide",
        description: "Managing and using the ORB Revit content library",
        status: "approved",
        lastUpdated: "2025-10-25",
      },
      {
        title: "Best Practices Manual",
        description: "Comprehensive guide to ORB Revit workflows and standards",
        status: "review",
        lastUpdated: "2025-11-03",
      },
    ],
  },
  {
    title: "Life Safety",
    description: "Life-safety guidance, egress, and review checklists",
    items: [
      {
        title: "Life Safety Guidelines (Draft)",
        description:
          "Draft guidance for life safety documentation and review checklists",
        status: "draft",
        lastUpdated: new Date().toISOString().slice(0, 10),
      },
    ],
  },
];
