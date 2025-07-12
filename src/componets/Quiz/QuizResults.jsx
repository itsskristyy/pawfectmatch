import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const QuizResults = ({ quizData }) => {
    const navigate = useNavigate();
    return (
        <div className="bg-blue-50 min-h-screen flex flex-col items-center justify-center p-6">
            <h1 className="text-3xl font-bold text-black-600 mb-6"> Your Results</h1>
            <div className="bg-white rounded-3xl shadow-xl p-8 w-[500px] h-auto space-y-4">
                {quizData?.map((item, index) => (
                    <div key={index} className="mb-4">
                        <h2 className="text-lg font-semibold mb-2">{item.question}</h2>
                        <p className="text-gray-700">{item.answer}</p>
                    </div>
                ))}
                <div>
                    </div> 
                <button className="text-gray-800 underline hover:text-gray-800 transition text-center">
                    <h3> Are you ready to find your purfect match? </h3>
                    </button>
                    <button className="text-gray-800 underline hover:text-gray-800 transition text-center">
                        Change my answers
                    </button>
                </div>
            </div>

    )
}

export default QuizResults;