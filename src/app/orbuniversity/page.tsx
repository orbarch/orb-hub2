import Navbar from '@/components/Navbar';
import { lessons } from '@/data/lessons';
import LessonsGrid from '@/components/LessonsGrid';
import FadeIn from '@/components/FadeIn';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <FadeIn>
            <LessonsGrid lessons={lessons} />
          </FadeIn>
        </div>
      </div>
    </main>
  );
}
