import React from 'react';
import { Question } from '@/types/Questions';

interface QuestionsSidebarProps {
  questions: Question[];
  questionNumber: number;
}

const QuestionsSidebar: React.FC<QuestionsSidebarProps> = ({
  questions,
  questionNumber,
}) => {
  return (
    <ul>
      {questions.map((_, index) => (
        <li
          key={index}
          className={`mb-8 p-2 shadow rounded ${
            questionNumber === index ? 'bg-green-200' : 'bg-white'
          }`}
        >
          Question {index + 1}
        </li>
      ))}
    </ul>
  );
};

export default QuestionsSidebar;
