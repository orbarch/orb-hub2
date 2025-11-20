import Link from "next/link";
import NotFoundVisual from "@/components/NotFoundVisual";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center py-12">
      <div className="max-w-3xl mx-auto bg-white border border-gray-100 shadow-sm rounded-lg p-8 text-center">
        <NotFoundVisual />

        <h1 className="mt-6 text-3xl font-extrabold text-gray-900">
          404 — Page not found
        </h1>

        <p className="mt-3 text-gray-600">
          Looks like this page stepped out for a quick coffee. The content
          you're looking for might be hiding somewhere else in the hub.
        </p>

        <div className="mt-6 flex justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700"
          >
            Take me home
          </Link>

          <Link
            href="/orbuniversity"
            className="inline-flex items-center px-4 py-2 border border-gray-200 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
          >
            Browse lessons
          </Link>
        </div>

        <p className="mt-6 text-xs text-gray-400">
          Or try to take a walk, it's great outside.
        </p>
      </div>
    </div>
  );
}
