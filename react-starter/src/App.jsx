import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css'
import SportsNews from "./components/SportsNews";
import ScienceNews from "./components/ScienceNews";

function App() {
  return (
    <router>
      <div>
      <h1>News App</h1>
      <nav>
          <ul>
            <li>
              <Link to="/sports">Sports News </Link>
            </li>
            <li>
              <Link to="/science">Science News </Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/sports" element={<SportsNews />} />
          <Route path="/science" element={<ScienceNews />} />
        </Routes>
      </div>
    </router>
  );
}

export default App;
