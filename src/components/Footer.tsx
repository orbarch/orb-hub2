export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-600 text-sm">
            © {currentYear} ORB Architecture. All rights reserved.
          </div>
          <div className="flex items-center gap-6 text-sm text-gray-500">
            <a
              href="#"
              className="hover:text-gray-900 transition-colors"
              aria-label="Privacy Policy"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="hover:text-gray-900 transition-colors"
              aria-label="Terms of Service"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}