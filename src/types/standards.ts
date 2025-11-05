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