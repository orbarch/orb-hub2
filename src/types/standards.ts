export interface StandardSection {
  title: string;
  description: string;
  items: {
    title: string;
    description: string;
    link: string;
    status?: "draft" | "review" | "approved" | "outdated";
    lastUpdated: string;
  }[];
}
