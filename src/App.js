import React from 'react';
import './App.css';
import Navbar from "./Components/Navbar"
import Hero from "./Components/Hero"
import ContactInfo from './Components/ContactInfo';
import AboutUs from './Components/AboutUs';
import Services from './Components/Services';
import Contact from './Components/Contact';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <ContactInfo />
      <AboutUs />
      <Services />
      <Contact />
    </div>
  );
}

export default App;
