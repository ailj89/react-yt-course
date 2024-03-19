import "./App.css";
import { useState } from "react";
import { User } from "./User";
import { Planet } from "./Planet";

function App() {
  const name = "Dre";
  // const age = 34;
  const [age, setAge] = useState(34);
  // [variable, setVariable] = useState(defaultValue)
  const [text, setText] = useState("");
  const [showText, setShowText] = useState(true);
  const [count, setCount] = useState(0);

  const email = "alamontj89@gmail.com";
  const isGreen = true;
  const users = [
    { name: "Pedro", age: 21, email: "pedro@pedro.com" },
    { name: "Jake", age: 22, email: "jake@jake.com" },
    { name: "Jessica", age: 23, email: "jessica@jessica.com" },
  ];

  const DisplayAge = () => {
    return (
      <div>
        <h1>{age >= 18 ? "Over Age" : "Under Age"}</h1>
        <h1 style={{ color: isGreen ? "green" : "red" }}>This has color</h1>
        {isGreen && <button> This is a button</button>}
      </div>
    );
  };

  const Job = (props) => {
    return (
      <div>
        <h1>{props.salary}</h1>
        <h2>{props.position}</h2>
        <h3>{props.company}</h3>
      </div>
    );
  };

  const GetNames = () => {
    return (
      <ul>
        {users.map((user) => (
          <li key={user}>
            <User name={user.name} age={user.age} email={user.email} />
          </li>
        ))}
      </ul>
    );
  };

  const increaseAge = () => {
    setAge(age + 1);
  };

  const handleInput = (e) => {
    setText(e.target.value);
  };

  const handleShowText = () => {
    setShowText(!showText);
  };

  const increaseCount = () => {
    setCount(count + 1);
  };

  const decreaseCount = () => {
    setCount(count - 1);
  };

  const resetCount = () => {
    setCount(0);
  };

  // const handleCount = (type) => {
  //   if (type === "increase") {
  //     setCount(count + 1);
  //   }
  //   if (type === "decrease") {
  //     setCount(count - 1);
  //   }
  //   if (type === "reset") {
  //     setCount(0);
  //   }
  // };

  // causes infinite loop in React

  return (
    <div className="App">
      {/* <User name={name} age={age} email={email} />
      <Job`
        salary={126000}
        position="Senior Front-End Developer"
        company="Nerd From Newark"
      />
      <DisplayAge />
      <GetNames />
      <Planet /> */}

      {/* {age}

      <button onClick={increaseAge}>Increase</button> */}

      {/* <input type="text" onChange={handleInput} />

      {text} */}
      {/* 
      <button onClick={handleShowText}>Show/Hide</button>
      <button onClick={() => setShowText(!showText)}>Show/Hide</button>
      {showText && <h1>This is the text I want to toggle</h1>} */}

      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount}>Decrease</button>
      <button onClick={resetCount}>Set to Zero</button>

      {count}
    </div>
  );
}

export default App;
