import React from 'react';
import './App.css';
import Navbar from "./Components/Navbar"
import Hero from "./Components/Hero"
import ContactInfo from './Components/ContactInfo';
import AboutUs from './Components/AboutUs';
import Services from './Components/Services';
import Contact from './Components/Contact';
import Footer from './Components/Footer';


function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <ContactInfo />
      <AboutUs />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
