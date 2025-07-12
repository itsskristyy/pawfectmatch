import React from 'react';
import { useNavigate } from 'react-router-dom';

const GetStarted = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-blue-50 min-h-screen flex flex-col items-center justify-center p-6">
      <button
        onClick={() => navigate('/')}
        className="absolute top-4 left-4 text-gray-700 underline hover:text-grap-950 transition"
      >
        ← Go back to main page
      </button>

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
            className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 rounded-xl shadow transition"
          >
            Start the Quiz
          </button>

          <button
            className="border-2 border-pink-500 text-pink-500 hover:bg-pink-100 font-semibold py-3 rounded-xl transition"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
