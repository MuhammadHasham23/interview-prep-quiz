'use client';
import { Question } from '@/types/Questions';
import React, { useState } from 'react';
import QuestionsSidebar from './QuestionsSidebar';
import QuestionWrapper from './Question';
import Results from './Results';

const QuizContainer: React.FC<{ questions: Question[] }> = ({ questions }) => {
  const [questionNumber, setQuestionNumber] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState<Question[]>([]);
  const [showResults, setShowResults] = useState(false);
  const question = questions[questionNumber];

  const onQuestionSubmit = (selectedOption: string[]) => {
    if (
      selectedOption.length > 0 &&
      selectedOption.every((option) => option === question.correct_answer)
    ) {
      setCorrectAnswers([...correctAnswers, question]);
    }
    const currentQuestion = questionNumber + 1;
    if (currentQuestion < questions.length) {
      setQuestionNumber(questionNumber + 1);
    } else {
      setShowResults(true);
    }
  };

  return (
    <>
      {showResults ? (
        <div className="p-4">
          <Results correctQuestions={correctAnswers} questions={questions} />
        </div>
      ) : (
        <div className="container mx-auto px-4">
          <div className="flex">
            <div className="w-1/3 p-4">
              <QuestionsSidebar
                questions={questions}
                questionNumber={questionNumber}
              />
            </div>
            <div className="w-2/3 p-4">
              <div className="space-y-8 flex flex-col space-y-8 h-full">
                <QuestionWrapper
                  key={question.id}
                  question={question}
                  onSubmit={(question) => onQuestionSubmit(question)}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default QuizContainer;
