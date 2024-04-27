import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Service from './pages/Service';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Contact from './pages/Contact';

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Servicios" element={<Service />} />
      <Route path="/Contacto" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;