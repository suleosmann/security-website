import React from 'react';
import './App.css';
import Navbar from "./Components/Navbar"
import Hero from "./Components/Hero"
import ContactInfo from './Components/ContactInfo';
import AboutUs from './Components/AboutUs';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <ContactInfo />
      <AboutUs />
    </div>
  );
}

export default App;
