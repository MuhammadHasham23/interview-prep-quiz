import React, { useState, useEffect } from 'react';
import './Timer.css';

interface RoundTimerProps {
  onTimeComplete: () => void;
}

const RoundTimer: React.FC<RoundTimerProps> = ({ onTimeComplete }) => {
  const [timeLeft, setTimeLeft] = useState(45);

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [timeLeft]);

  const radius = 45;
  const circumference = 2 * Math.PI * radius;
  const progress = ((45 - timeLeft) / 45) * circumference;

  useEffect(() => {
    if (timeLeft === 0) {
      onTimeComplete();
    }
  }, [timeLeft]);
  return (
    <div className="timer-container">
      <svg className="timer-svg" width="100" height="100">
        <circle
          className="timer-circle-bg"
          cx="50"
          cy="50"
          r={radius}
          strokeWidth="7.5"
        />
        <circle
          className="timer-circle"
          cx="50"
          cy="50"
          r={radius}
          strokeWidth="7.5"
          strokeDasharray={circumference}
          strokeDashoffset={circumference - progress}
        />
        <text
          className="timer-text"
          x="50%"
          y="50%"
          textAnchor="middle"
          dy=".3em"
        >
          {timeLeft} sec
        </text>
      </svg>
    </div>
  );
};

export default RoundTimer;
