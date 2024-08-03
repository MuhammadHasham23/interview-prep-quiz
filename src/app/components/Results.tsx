import React from 'react';
import Link from 'next/link';
import { Question } from '@/types/Questions';

interface ResultsInterfaceProps {
  correctQuestions: Question[];
  questions: Question[];
}

const Results: React.FC<ResultsInterfaceProps> = ({
  correctQuestions,
  questions,
}) => {
  const correctCount = correctQuestions.length;
  const totalQuestions = questions.length;
  const score = ((correctCount / totalQuestions) * 100).toFixed(2);

  const isCorrect = (question: Question) => {
    return correctQuestions.some(
      (correctQuestion) => correctQuestion.id === question.id
    );
  };

  return (
    <>
      <h1 className="text-2xl">Quiz Results</h1>
      <p className="text-xl">
        Correct Answers: {correctCount} / {totalQuestions}
      </p>
      <p className="text-xl">Score: {score}%</p>
      <div className="mt-4">
        {questions.map((question) => (
          <div key={question.id} className="mb-4 p-4 bg-white rounded shadow">
            <p className="font-semibold">{question.question}</p>
            <ul className="list-disc ml-6">
              {Object.entries(question.answers)
                .filter(([key, value]) => value)
                .map(([key, value]) => (
                  <li
                    key={key}
                    className={`p-2 rounded ${
                      !isCorrect(question) && question.correct_answer === key
                        ? 'bg-green-200'
                        : ''
                    }`}
                  >
                    {value}
                  </li>
                ))}
            </ul>
            {!isCorrect(question) && (
              <p className="text-red-500 mt-2">You got this question wrong.</p>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default Results;
