import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

// Import dropdown service pages
import CivilEngineering from './dropdown/CivilEngineering';
import SustainableEnergy from './dropdown/SustainableEnergy';
import WasteManagement from './dropdown/WasteManagement';
import IctInfrastructure from './dropdown/IctInfrastructure';
import AgricultureEstate from './dropdown/AgricultureEstate';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <main>
          <Routes>
            {/* Main routes */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />

            {/* Service dropdown routes */}
            <Route path="/services/civil-engineering" element={<CivilEngineering />} />
            <Route path="/services/sustainable-energy" element={<SustainableEnergy />} />
            <Route path="/services/waste-management" element={<WasteManagement />} />
            <Route path="/services/ict-infrastructure" element={<IctInfrastructure />} />
            <Route path="/services/agriculture-estate" element={<AgricultureEstate />} />
          </Routes>
        </main>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;