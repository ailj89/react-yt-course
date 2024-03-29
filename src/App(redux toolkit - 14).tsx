import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Home } from "./pages/Home";
import { Contact } from "./pages/Contact";
import { Menu } from "./pages/Menu";
import { Login } from "./pages/Login";
import { Provider } from "react-redux";
import { store } from "./store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <header>
            <h1 style={{ display: "inline-block" }}>
              Redux Toolkit - Video 14
            </h1>
            <nav>
              <Link to="/">Home</Link>
              <Link to="menu">Menu</Link>
              <Link to="login">Login</Link>
              <Link to="contact">Contact</Link>
            </nav>
          </header>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/login" element={<Login />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
