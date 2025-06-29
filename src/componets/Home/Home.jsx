import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-emerald-100">
            <div className="text-center">
                <h1>Welcome to Pawfect Match</h1>
                <p>Your perfect pet match awaits!</p>
            </div>
            <div className="flex flex-col items-center space-y-4 mt-4 w-full max-w-md px-4">
                <button onClick={() => navigate('/get-started')} className="w-full bg-emerald-700 text-white font-bold py-1 px-3 rounded">
                    Get Started
                </button>
                <button onClick={() => navigate('/learn-more')} className="w-full bg-emerald-700 text-white font-bold py-1 px-3 rounded">
                    Learn More
                </button>
                <button onClick={() => navigate('/contact')} className="w-full bg-emerald-700 text-white font-bold py-1 px-3 rounded">
                    Contact Us
                </button>
                <button onClick={() => navigate('/signup')} className="w-full bg-emerald-700 text-white font-bold py-1 px-3 rounded">
                    Sign Up
                </button>
                <button onClick={() => navigate('/login')} className="w-full bg-emerald-700 text-white font-bold py-1 px-3 rounded">
                    Log In
                </button>
            </div>
        </div>
    );
};

export default Home;