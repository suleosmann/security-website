import React from 'react';
import './App.css';
import Navbar from "./Components/Navbar"
import Hero from "./Components/Hero"
import ContactInfo from './ContactInfo';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <ContactInfo />
    </div>
  );
}

export default App;
