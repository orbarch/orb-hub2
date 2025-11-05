import Link from 'next/link';
import { lessons } from '@/data/lessons';
import LessonsGrid from '@/components/LessonsGrid';
import SplashScreen from '@/components/SplashScreen';

export default function Home() {
  return (
    <div className="min-h-screen">
      <SplashScreen />
      
      {/* Quick Access Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Quick Access</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* ORB University Card */}
          <Link href="/orbuniversity" className="group">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                ORB University
              </h3>
              <p className="text-gray-600">
                Access our comprehensive library of learning resources and tutorials.
              </p>
            </div>
          </Link>

          {/* Standards Card */}
          <Link href="/standards" className="group">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                Standards
              </h3>
              <p className="text-gray-600">
                Browse our collection of go-by sets and unit plans.
              </p>
            </div>
          </Link>

          {/* Manuals Card */}
          <Link href="/manuals" className="group">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                Manuals
              </h3>
              <p className="text-gray-600">
                Access project setup guides and management resources.
              </p>
            </div>
          </Link>
        </div>
      </section>

      {/* Resources Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Employee Resources</h2>
          <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-lg p-8">
            <div className="max-w-3xl">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Get Started with ORB-Hub
              </h3>
              <p className="text-gray-600 mb-6">
                Find everything you need to excel in your role at ORB Architecture. 
                From learning resources to project standards, we've got you covered.
              </p>
              <Link
                href="/employee-resources"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 transition-colors"
              >
                Explore Resources
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
