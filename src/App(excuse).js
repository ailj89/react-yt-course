import "./App.css";
import { useState, useEffect } from "react";
import Axios from "axios";

function App() {
  // const [excuse, setExcuse] = useState("");
  const [newExcuse, setNewExcuse] = useState({});

  const requestExcuse = (excuse) => {
    if (excuse === "") {
      setNewExcuse("party");
    }
    Axios.get(`https://excuser-three.vercel.app/v1/excuse/${excuse}`).then(
      (res) => {
        // console.log(res);
        setNewExcuse(res.data[0]);
      }
    );
  };

  // useEffect(() => {
  //   requestExcuse();
  // }, [setNewExcuse]);

  // const getExcuse = (type) => {
  //   setExcuse(type);
  //   requestExcuse();
  // };

  return (
    <div className="App">
      {/* <input placeholder="Ex pedro..." onChange={handleExcuse} /> */}
      <h1>Make An Excuse</h1>
      <button onClick={() => requestExcuse("party")}>Party</button>
      <button onClick={() => requestExcuse("family")}>Family</button>
      <button onClick={() => requestExcuse("office")}>Work</button>

      <h1>Sorry I can't make it...</h1>
      <p>{newExcuse?.excuse}</p>
    </div>
  );
}

export default App;
