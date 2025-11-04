import { Lesson } from '@/types/lesson';

// Mock data - replace with your actual data source (API, database, etc.)
export const lessons: Lesson[] = [
  {
    id: '1',
    title: 'Introduction to Programming',
    description: 'Learn the basics of programming and computational thinking',
    content: 'This is the full content of the programming introduction lesson...',
    category: 'Programming',
    createdAt: '2025-11-01T00:00:00Z',
    updatedAt: '2025-11-01T00:00:00Z',
  },
  {
    id: '2',
    title: 'Web Development Fundamentals',
    description: 'Understanding HTML, CSS, and JavaScript',
    content: 'This is the full content of the web development lesson...',
    category: 'Web Development',
    createdAt: '2025-11-02T00:00:00Z',
    updatedAt: '2025-11-02T00:00:00Z',
  },
  {
    id: '3',
    title: 'ORB Lesson - Life Safety for Dummies',
    description: 'Learning for dummies, just like you. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam nesciunt minus, sapiente magnam ipsum ea ut placeat soluta itaque et?, Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam sapiente numquam sint adipisci, fugiat ex similique neque a magnam asperiores fuga cum, aliquam earum saepe commodi voluptatum et? Fugit libero eligendi nemo laboriosam ipsam aliquam modi vel quibusdam porro natus! Ad obcaecati a amet voluptatum? Omnis quis in rem nihil!',
    content: 'Crap.',
    category: 'Life Safety',
    createdAt: '2025-11-02T00:00:00Z',
    updatedAt: '2025-11-02T00:00:00Z',
  },
];