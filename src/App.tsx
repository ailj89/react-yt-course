import "./App.css";
import { Person, Country } from "./components/Person.tsx";

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>

      <Person
        name="Andre"
        email="alamontj89@gmail.com"
        age={34}
        isMarried={false}
        friends={["Chris", "Mark", "Iovino", "Burgos"]}
        country={Country.Brazil}
      />
    </div>
  );
}

export default App;
