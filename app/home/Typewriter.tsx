"use client"

import { useState, useEffect } from 'react';

const Typewriter = ({ words }) => {
  const [cursorPosition, setCursorPosition] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (isTyping) {
        typeWriter();
      } else {
        untypeWriter();
      }
    }, 90);

    return () => {
      clearInterval(intervalId);
    };
  }, [isTyping, wordIndex, cursorPosition]);

  const typeWriter = () => {
    const word = words[wordIndex];
    setCursorPosition(cursorPosition => cursorPosition + 1);

    if (cursorPosition >= word.length) {
      setTimeout(() => setIsTyping(false), 250);
    }
  };

  const untypeWriter = () => {
    const word = words[wordIndex];
    setCursorPosition(cursorPosition => cursorPosition - 1);

    if (cursorPosition <= 0) {
      setWordIndex(wordIndex => (wordIndex + 1) % words.length);
      setCursorPosition(0);
      setIsTyping(true);
    }
  };

  const currentWord = words[wordIndex];
  const displayText = isTyping
    ? currentWord.slice(0, cursorPosition) + '_'
    : currentWord.slice(0, cursorPosition);

  return <h1 className="text-gray-600 absolute text-xl font-ligjt text-center mt-2 ml-20 z-50 pointer-events-none">{displayText}</h1>;
};

export default Typewriter;