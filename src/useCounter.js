import { useState } from "react";

export const useCounter = (initialVal = 0) => {
  const [counter, setCounter] = useState(initialVal);

  const incrementCounter = () => {
    setCounter((prev) => prev + 1);
  };

  const decrementCounter = () => {
    setCounter((prev) => prev - 1);
  };

  return [counter, incrementCounter, decrementCounter];
};
