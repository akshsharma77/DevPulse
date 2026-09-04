import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#0a0a0f] via-[#12121a] to-[#1a1a2e] text-white px-6">
      <h1 className="text-6xl md:text-7xl font-bold tracking-tight bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
        DevPulse
      </h1>

      <p className="mt-6 text-lg md:text-xl text-gray-400 text-center max-w-xl">
        AI-powered developer intelligence — understand your code,
        your commits, and your growth like never before.
      </p>

      <button
        onClick={() => navigate('/register')}
        className="mt-10 px-8 py-3 rounded-full bg-indigo-500 hover:bg-indigo-400 transition-colors font-semibold text-white shadow-lg shadow-indigo-500/30"
      >
        Get Started
      </button>
    </div>
  );
}

export default Home;