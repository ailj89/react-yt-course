import "./App.css";
import { useState, useEffect } from "react";
import Axios from "axios";

// const requestFact = () => {
//   fetch("https://catfact.ninja/fact")
//     .then((res) => res.json())
//     .then((data) => {
//       newFact = data;
//     });
// };

function App() {
  let newFact = "";

  const requestFact = () => {
    Axios.get("https://catfact.ninja/fact").then((res) => {
      newFact = res.data;
    });
  };

  useEffect(() => {
    requestFact();
  });

  const [fact, setFact] = useState("");

  const getFact = () => {
    requestFact();
    setFact(newFact.fact);
  };

  return (
    <div className="App">
      <button onClick={getFact}>Generate Cat Fact</button>

      <h1>Did you know?</h1>
      <p>{fact}</p>
    </div>
  );
}

export default App;
