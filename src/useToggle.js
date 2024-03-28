import { useState } from "react";

export const useToggle = (initialVal = false) => {
  const [state, setState] = useState(initialVal);

  const toggle = () => {
    setState((prev) => !prev);
  };

  return [state, toggle];

  //return {state, toggle}
  // when returning as an object, you have to keep the variable name the same
};

/*

HOOKS

functions to abstract logic

useState
useContext
useEffect

1. has to start with use
2. has to be called in the highest component
3. be in a component

*/
