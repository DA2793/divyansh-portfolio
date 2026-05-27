import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0b1b2b] text-white px-6">
      <div className="text-center">
        <p className="text-6xl font-bold text-yellow-400 mb-4">404</p>
        <h1 className="text-2xl font-bold mb-2">Page Not Found</h1>
        <p className="text-gray-400 mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="text-sm font-semibold text-yellow-400 border border-yellow-400 rounded-lg px-6 py-3 hover:bg-yellow-400 hover:text-[#0b1b2b] transition inline-block"
        >
          ← Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
