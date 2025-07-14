import React, {useState} from "react";
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./componets/Home/Home";
import './index.css'; // Ensure Tailwind CSS is imported
import Quiz from "./componets/Quiz/Quiz";
import QuizResults from "./componets/Quiz/QuizResults";


export default function App() {
  const [quizData, setQuizData] = useState([]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route 
          path="/quiz" 
          element={<Quiz setQuizData={setQuizData} />} 
        />
        <Route 
          path="/quizResults" 
          element={<QuizResults quizData={quizData} />} 
        />
      </Routes>
    </Router>
  );
}
