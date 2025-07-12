import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import { quizData } from './QuizQuestions';
import QuizResults from './QuizResults';

const Quiz = (props) => {
  const { setQuizData } = props;
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [results, setResults] = useState([]);

  const handleAnswer = (answer) => {

    const newAnswers = [...results];
    newAnswers[currentQuestion] = {
      question: quizData[currentQuestion].question,
      answer: answer
    };
    setResults(newAnswers);
    console.log(newAnswers);

    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const quizIsFinished = currentQuestion === quizData.length - 1 && results[currentQuestion]?.answer;

  const handleSubmit = () => {
    if (quizIsFinished) {
      navigate('/quizResults');
      setQuizData(results);
    }
  }

  return (
    <div>
      <div className='bg-blue-50 min-h-screen flex flex-col items-center justify-center p-6'>
        <button
          onClick={() => navigate('/')}
          className="absolute top-4 left-4 text-gray-800 underline hover:text-gray-950 transition"
        >
          ← go back to the home page
        </button>
        <div className='flex flex-col items-center justify-center h-screen'>
          <h1 className='text-3xl font-bold text-gray-950 mb-6'>Quiz Time! 🐾</h1>
          <div className={`bg-white rounded-3xl shadow-xl p-8 w-[500px] ${quizIsFinished ? 'h-[390px]' : 'h-[350px]'} text-center space-y-4 flex flex-col justify-between`}>
            <div className='mb-4'>
              <h2 className='text-lg font-semibold mb-2'>
                {quizData[currentQuestion].question}
              </h2>
              <div className='flex flex-col items-start space-y-2'>
                {quizData[currentQuestion].options.map((option, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleAnswer(option)}
                    className={`w-full ${results[currentQuestion]?.answer === option
                      ? 'bg-blue-600'
                      : 'bg-blue-400 hover:bg-blue-600'
                      } text-white font-semibold py-2 px-4 rounded-lg transition`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex justify-between items-center">
              <button
                onClick={handleBack}
                className={`text-gray-950 ${currentQuestion === 0 ? 'invisible' : ''}`}
              >
                ← Back
              </button>
              <div className="text-sm text-gray-500">
                Question {currentQuestion + 1} of {quizData.length}
              </div>
            </div>
            <div className='flex justify-center mt-4'>
              {quizIsFinished && (
                <button
                  onClick={() => handleSubmit()}
                  className=" w-32 
              items-center
              bg-gray-800 text-white font-semibold py-2 px-1 rounded-lg transition"
                >
                  Submit
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;