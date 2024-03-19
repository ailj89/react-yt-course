import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Home } from "./pages/Home";
import { Contact } from "./pages/Contact";
import { Menu } from "./pages/Menu";
import { Profile } from "./pages/Profile";
import { useState, createContext } from "react";

export const AppContext = createContext();

function App() {
  const [username, setUsername] = useState("Dre");

  return (
    <div className="App">
      <AppContext.Provider value={{ username, setUsername }}>
        <Router>
          <header>
            <h1 style={{ display: "inline-block" }}>Router Practice</h1>
            <nav>
              <Link to="/">Home</Link>
              <Link to="menu" style={{ margin: "0px 5px" }}>
                Menu
              </Link>
              <Link to="contact" style={{ margin: "0px 5px" }}>
                Contact
              </Link>
              <Link to="profile">Profile</Link>
            </nav>
          </header>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="*" element={<h1>404 Page Not Found</h1>} />
          </Routes>
        </Router>
      </AppContext.Provider>
    </div>
  );
}

export default App;
