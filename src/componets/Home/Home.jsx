import React from 'react';

const Home = () => {
    return (
        <div>
            <div>
            <h1>Welcome to Pawfect Match</h1>
            <p>Your perfect pet match awaits!</p>
        </div>
        <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded">
            Get Started
        </button>
        <button className="bg-green-500 text-white font-bold py-2 px-4 rounded">
            Learn More
        </button>
        <button className="bg-red-500 text-white font-bold py-2 px-4 rounded">
            Contact Us
        </button>
        <button className="bg-yellow-500 text-white font-bold py-2 px-4 rounded">
            Sign Up
        </button>
        <button className="bg-purple-500 text-white font-bold py-2 px-4 rounded">
            Log In
        </button>
        </div>
    );
};

export default Home;