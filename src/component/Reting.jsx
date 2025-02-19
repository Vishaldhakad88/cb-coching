import React, { useState, useEffect } from 'react';

const WordPrinter = () => {
  const [wordIndex, setWordIndex] = useState(0);
  const words = ["⭐","⭐","⭐","⭐","⭐"];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prevIndex) => {
        if (prevIndex + 1 === words.length) {
          clearInterval(interval); // Clear interval once all words are printed
        }
        return prevIndex + 1;
      });
    }, 1000);

    // Clean up interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {words.slice(0, wordIndex + 1).join(" ")}
    </div>
  );
};

export default WordPrinter;
