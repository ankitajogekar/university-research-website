import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import ResearchProjects from './components/ResearchProjects';
import ResearchTeams from './components/ResearchTeams';
import Publications from './components/Publications';
import Contact from './components/Contact';
import './styles/main.css';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/projects">Research Projects</a></li>
            <li><a href="/teams">Research Teams</a></li>
            <li><a href="/publications">Publications</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<ResearchProjects />} />
          <Route path="/teams" element={<ResearchTeams />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
