"use client"
import React from 'react';

const AnimatedText = ({ text }) => {
  const letters = text.split('');

  return (
    <div className="animatedText">
      {letters.map((letter, index) => (
        <span key={index} className="letter" style={{ animationDelay: `${index * 0.1}s` }}>
          {letter}
        </span>
      ))}
    </div>
  );
};

export default AnimatedText;