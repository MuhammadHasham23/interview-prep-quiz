'use client';
import React, { useState } from 'react';
import { Question } from '@/types/Questions';
import RoundTimer from './Timer/Timer';

interface QuestionWrapperProps {
  question: Question;
  onSubmit: (selectedOption: string[]) => void;
}

const QuestionWrapper: React.FC<QuestionWrapperProps> = ({ question, onSubmit }) => {
  const [selectedOption, setSelectedOption] = useState<string[]>([]);

  const isMultipleCorrectAnswers = Boolean(
    question.multiple_correct_answers === 'false'
  );

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (isMultipleCorrectAnswers) {
      return setSelectedOption([event.target.value]);
    }
    if (!event.target.checked) {
      const currentlySelectedOption = selectedOption.filter(
        (option) => option !== event.target.value
      );
      setSelectedOption(currentlySelectedOption);
    } else {
      setSelectedOption([...selectedOption, event.target.value]);
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (selectedOption) {
      onSubmit(selectedOption);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-4 bg-white rounded shadow mb-8 flex flex-col space-y-8 h-full"
    >
      <RoundTimer onTimeComplete={() => onSubmit(selectedOption)} />
      <p className="font-semibold">{question.question}</p>
      <ul className="list-disc ml-6 space-y-2 list-none flex-grow ">
        {Object.entries(question.answers)
          .filter(([key, value]) => value)
          .map(([key, value]) => (
            <li key={key}>
              <label className="flex items-center space-x-2">
                <input
                  type={isMultipleCorrectAnswers ? 'radio' : 'checkbox'} //change
                  name={`question-${question.id}`}
                  value={key}
                  checked={selectedOption?.includes(key)}
                  onChange={handleOptionChange}
                  className={`form-${isMultipleCorrectAnswers ? 'radio' : 'checkbox'}`} //change
                />
                <span>{value}</span>
              </label>
            </li>
          ))}
      </ul>
      <button
        type="submit"
        className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
      >
        Submit
      </button>
    </form>
  );
};

export default QuestionWrapper;
