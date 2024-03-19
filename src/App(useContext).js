import "./App.css";
import { useState, useContext } from "react";

const TopComponent = () => {
  const [state, setState] = useState();

  return (
    <div>
      <MiddleComponent state={state} />
    </div>
  );
};

const MiddleComponent = (state) => {
  return (
    <div>
      <BottomComponent state={state} />
    </div>
  );
};

const BottomComponent = (state) => {
  return <div>{state}</div>;
};

function App() {
  return (
    <div className="App">
      <TopComponent />
    </div>
  );
}

export default App;
