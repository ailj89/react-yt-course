import "./App.css";
import { useState, useEffect } from "react";
import Axios from "axios";

function App() {
  const [prediction, setPrediction] = useState("");
  const [newPrediction, setNewPrediction] = useState({});

  const handlePrediction = (e) => {
    setPrediction(e.target.value);
  };

  const requestPrediction = () => {
    Axios.get("https://api.agify.io/?name=" + prediction).then((res) => {
      console.log(res);
      setNewPrediction(res.data);
    });
  };

  // useEffect(() => {
  //   requestPrediction();
  // });

  const getPrediction = () => {
    requestPrediction();
  };

  return (
    <div className="App">
      <input placeholder="Ex pedro..." onChange={handlePrediction} />
      <button onClick={getPrediction}>Predict Age</button>

      <h1>Did you know {newPrediction?.name} is</h1>
      <p>{newPrediction?.age}?</p>
    </div>
  );
}

export default App;
