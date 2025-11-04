import Spinner from '@/components/Spinner';

export default function LessonLoading() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="animate-pulse">
          <div className="h-10 bg-white rounded-md shadow-sm w-3/4 mb-6" />
          <div className="flex items-center justify-between mb-6">
            <div className="h-6 bg-white rounded-full w-24" />
            <div className="h-4 bg-white rounded w-32" />
          </div>
          <div className="space-y-4">
            <div className="h-4 bg-white rounded w-full" />
            <div className="h-4 bg-white rounded w-5/6" />
            <div className="h-4 bg-white rounded w-4/6" />
          </div>
        </div>

        <div className="mt-8 flex items-center justify-center">
          <Spinner />
        </div>
      </div>
    </main>
  );
}
