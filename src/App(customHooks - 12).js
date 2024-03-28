import "./App.css";
import { useToggle } from "./useToggle";
import { Cat } from "./components/Cat";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useCounter } from "./useCounter";

function App() {
  const [isVisible, toggle] = useToggle(false);

  const [counter, incrementCounter, decrementCounter] = useCounter();

  const client = new QueryClient({
    queries: {
      refetchOnWindowFocus: false,
    },
  });

  return (
    <QueryClientProvider client={client}>
      <div className="App">
        <button onClick={toggle}>{isVisible ? "Hide" : "Show"}</button>
        {isVisible && <h1>Hidden Text</h1>}

        <div>
          Count: {counter}
          <button onClick={incrementCounter}>Increase</button>
          <button onClick={decrementCounter}>Decrease</button>
        </div>

        <Cat />
      </div>
    </QueryClientProvider>
  );
}

export default App;
