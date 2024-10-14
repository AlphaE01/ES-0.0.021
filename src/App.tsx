import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Events from './pages/Events';
import Team from './pages/Team';
import JoinUs from './pages/JoinUs';
import Sponsors from './pages/Sponsors';
import Contact from './pages/Contact';
import AdminPortal from './pages/AdminPortal';

function App() {
  console.log("Rendering App component...");

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* other routes */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
