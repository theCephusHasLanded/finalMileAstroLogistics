import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';

// PAGES
import Home from '../src/Pages/Home';
import Error from '../src/Pages/Error';
import Index from '../src/Pages/Index';
import Show from '../src/Pages/Show';
import New from '../src/Pages/New';
import Edit from '../src/Pages/Edit';

// COMPONENTS
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import About from './Components/About';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`App${darkMode ? ' dark-mode' : ''}`}>
      <Router>
        <NavBar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
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
