import "./App.css";
import { Person } from "./components/Person";

function App() {
  return (
    <div className="App">
      <Person
        name="Andre"
        email="alamontj89@gmail.com"
        age={34}
        isMarried={false}
        friends={["Chris", "Mark", "Iovino", "Burgos"]}
      />
    </div>
  );
}

export default App;
