import Spinner from '@/components/Spinner';

export default function Loading() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <Spinner />
        {/* <p className="mt-2 text-gray-600">Loading...</p> */}
      </div>
    </main>
  );
}
