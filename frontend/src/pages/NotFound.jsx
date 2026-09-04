import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#0a0a0f] text-white px-6 text-center">
      <h1 className="text-5xl font-bold mb-4">404 — Lost in the code?</h1>
      <p className="text-gray-400 mb-8">
        This page doesn't exist, or it wandered off into an unhandled exception.
      </p>
      <Link
        to="/"
        className="px-6 py-3 rounded-full bg-indigo-500 hover:bg-indigo-400 transition-colors font-semibold"
      >
        Back to Home
      </Link>
    </div>
  );
}

export default NotFound;