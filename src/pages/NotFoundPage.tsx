import { Link } from 'react-router-dom';
import { Home, AlertCircle } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 via-white to-blue-50 px-4">
      <div className="text-center">
        <div className="mb-8 inline-flex items-center justify-center w-24 h-24 bg-primary-100 rounded-full">
          <AlertCircle size={48} className="text-primary-600" />
        </div>
        <h1 className="text-5xl sm:text-6xl md:text-8xl font-display font-bold text-slate-900 mb-4">404</h1>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4">Page Not Found</h2>
        <p className="text-xl text-slate-600 mb-8 max-w-md mx-auto">
          Sorry, the page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-600 to-primary-700 text-white px-6 py-3.5 sm:px-8 sm:py-4 rounded-full hover:shadow-glow transition-all duration-300 font-semibold text-base sm:text-lg hover:scale-105"
        >
          <Home size={20} />
          Back to Home
        </Link>
      </div>
    </div>
  );
}
