// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Services from './components/Services';
import Gallery from './components/Gallery';
import AboutUs from './components/AboutUs';
import BookNow from './components/BookNow';
import './App.css'; // Import your CSS file

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
       
            <Route path="/" element={<Home id="home" />} />
            <Route path="/services" element={<Services id="services" />} />
            <Route path="/gallery" element={<Gallery id="gallery" />} />
            <Route path="/about" element={<AboutUs id="about" />} />
            <Route path="/book" element={<BookNow id ="book" />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
