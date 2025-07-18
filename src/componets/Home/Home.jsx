import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-blue-50 min-h-screen flex flex-col items-center justify-center p-6">

      <div className="p-8 max-w-md w-full text-center space-y-4">
        <h1 className="text-3xl font-bold text-gray-600">
          Welcome to Purfect Match! 🐶🐱
        </h1>
        <h2 className="text-lg text-gray-600">
          Adopt a pet that truly fits your lifestyle.
        </h2>

        <div className="flex flex-col space-y-3 mt-6">
          <button
            onClick={() => navigate('/quiz')}
            className="bg-blue-500 hover:bg-blue-500 text-white font-semibold py-3 rounded-xl shadow transition"
          >
            Take our quiz to find your perfect match
          </button>

          <button
            className="bg-blue-500 hover:bg-blue-500 text-white font-semibold py-3 rounded-xl shadow transition"
            >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
