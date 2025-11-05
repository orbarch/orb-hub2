import Navbar from '@/components/Navbar';
import { lessons } from '@/data/lessons';
import LessonsGrid from '@/components/LessonsGrid';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <LessonsGrid lessons={lessons} />
      </div>
    </main>
  );
}
