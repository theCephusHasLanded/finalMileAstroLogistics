import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

// PAGES
import Home from "./Pages/Home";
import Error from "./Pages/Error";
import Index from "./Pages/Index";
import Show from "./Pages/Show";
import New from "./Pages/New";
import Edit from "./Pages/Edit";

// COMPONENTS
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import About from "./Components/About";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`App${darkMode ? " dark-mode" : ""}`}>
      <Router>
        <NavBar toggleDarkMode={toggleDarkMode} />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/planets" element={<Index />} />
            <Route path="/planets/:id" element={<Show />} />
            <Route path="/planets/new" element={<New />} />
            <Route path="/planets/:id/edit" element={<Edit />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
