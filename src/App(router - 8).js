import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Home } from "./pages/Home";
import { Contact } from "./pages/Contact";
import { Menu } from "./pages/Menu";

function App() {
  return (
    <div className="App">
      <Router>
        <header>
          <h1 style={{ display: "inline-block" }}>Router Practice - Video 8</h1>
          <nav>
            <Link to="/">Home</Link>
            <Link to="menu">Menu</Link>
            <Link to="contact">Contact</Link>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<h1>404 Page Not Found</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
