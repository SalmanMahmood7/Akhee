export default function NotFound() {
  return (
    <div className="relative min-h-screen bg-white overflow-hidden flex items-center justify-center">
      {/* Dynamic Background Elements - Matching Hero */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Animated Grid */}
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="grid-404" width="4" height="4" patternUnits="userSpaceOnUse">
                <path d="M 4 0 L 0 0 0 4" fill="none" stroke="rgba(59, 130, 246, 0.3)" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#grid-404)"/>
          </svg>
        </div>
        
      </div>

      <div className="text-center relative z-10">
        <h1 className="text-6xl font-bold mb-4">
          <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
            404
          </span>
        </h1>
        <p className="text-xl text-gray-300 mb-8">Oops! Page not found</p>
        <a 
          href="/" 
          className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg"
        >
          Return to Home
        </a>
      </div>
    </div>
  );
}