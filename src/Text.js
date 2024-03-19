import React from "react";
import { useState, useEffect } from "react";

export const Text = () => {
  const [text, setText] = useState("");

  useEffect(() => {
    console.log("Component mounted");
    // called when component is mounted

    return () => {
      console.log("Component unmounted");
    };

    //return calls on unmounted
  }, []);
  //anything in the array calls useEffect on component update

  return (
    <div>
      <input
        onChange={(event) => {
          setText(event.target.value);
        }}
      />

      <h1>{text}</h1>
    </div>
  );
};
