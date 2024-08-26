import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Feature from './Components/Feature/Feature';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Contact from './Components/Contact/Contact';
import Project from './Components/Project/Project';
import Service from './Components/Service/Service';
import Team from './Components/Team/Team';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/service" element={<Service />} />
          <Route path="/feature" element={<Feature />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/team" element={<Team />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
