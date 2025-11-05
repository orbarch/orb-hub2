import { lessons } from '@/data/lessons';
import { notFound } from 'next/navigation';
import FadeIn from '@/components/FadeIn';

export default async function LessonPage({ params }: any) {
  // `params` may be a Promise in some Next.js setups — await it safely
  const p = await params;
  const id = (p as { id: string }).id;

  const lesson = lessons.find((l) => l.id === id);

  if (!lesson) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <nav className="mb-8">
          <a
            href="/"
            className="text-green-600 hover:text-green-800 transition-colors"
          >
            ← Back to Lessons
          </a>
        </nav>
        <FadeIn>
          <article className="bg-white shadow-md rounded-lg p-8">
            <header className="mb-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                {lesson.title}
              </h1>
              <div className="flex items-center justify-between">
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                  {lesson.category}
                </span>
                <time className="text-gray-500 text-sm">
                  Last updated: {new Date(lesson.updatedAt).toLocaleDateString()}
                </time>
              </div>
            </header>
            <div className="text-gray-600">{lesson.content}</div>
          </article>
        </FadeIn>
      </div>
    </main>
  );
}